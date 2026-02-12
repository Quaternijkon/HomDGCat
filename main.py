"""
HomDGCat Wiki 完整镜像工具
=========================
基于预生成的文件列表 (filelist.txt) 从 homdgcat.wiki 下载完整站点备份，
并提供本地 HTTP 服务器浏览备份内容。

用法:
    python main.py download              # 下载所有缺失文件
    python main.py download --workers 16  # 自定义并发数
    python main.py download --retry 5     # 自定义重试次数
    python main.py serve                  # 启动本地服务器 (默认端口 9000)
    python main.py serve --port 3000      # 自定义端口
    python main.py status                 # 查看下载进度

文件列表 filelist.txt 包含 10,777 个文件路径，涵盖:
  - 页面 HTML (index.html, about, sr/char/*, gi/char/*)
  - 多语言数据 JS (data/{CH,EN,JP,KR,RU}/*, gi/{CH,EN,JP,KR,RU}/*)
  - 图片资源 (images/*, homdgcat-res/*)
  - TextMap 数据 (TextMap/*.js)
  - 静态资源 (css, js, fonts, audio)
"""
import argparse
import gzip
import http.server
import io
import json
import locale
import os
import socket
import socketserver
import sys
import time
import urllib.request
import urllib.error
from functools import lru_cache
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import unquote, quote

ROOT_DIR = Path(__file__).parent
SITE_DIR = ROOT_DIR / "site"
FILELIST = ROOT_DIR / "filelist.txt"
BASE_URL = "https://homdgcat.wiki"

# ─── i18n ─────────────────────────────────────────────────

def _detect_lang():
    """检测系统语言，中文环境返回 'zh'，其他返回 'en'。"""
    for src in (locale.getlocale, locale.getdefaultlocale):
        try:
            lang = src()[0] or ""
            if lang:
                return "zh" if lang.startswith("zh") or lang.startswith("Chinese") else "en"
        except (ValueError, AttributeError, TypeError):
            continue
    return "zh" if os.environ.get("LANG", "").startswith("zh") else "en"

_LANG = _detect_lang()

_I18N = {
    # ── load_filelist ──
    "err_no_filelist":      {"zh": "错误: 找不到文件列表 {path}",
                             "en": "Error: file list not found: {path}"},
    "err_filelist_hint":    {"zh": "请确保 filelist.txt 与本脚本在同一目录下。",
                             "en": "Make sure filelist.txt is in the same directory as this script."},
    # ── cmd_download ──
    "dl_title":             {"zh": "  HomDGCat Wiki 镜像下载",
                             "en": "  HomDGCat Wiki Mirror Download"},
    "dl_filelist":          {"zh": "  文件列表: {n} 个",       "en": "  File list:  {n}"},
    "dl_existing":          {"zh": "  已存在:   {n} 个",       "en": "  Existing:   {n}"},
    "dl_pending":           {"zh": "  待下载:   {n} 个",       "en": "  Pending:    {n}"},
    "dl_workers":           {"zh": "  并发数:   {n}",          "en": "  Workers:    {n}"},
    "dl_retries":           {"zh": "  重试次数: {n}",          "en": "  Retries:    {n}"},
    "dl_nothing":           {"zh": "\n所有文件已存在，无需下载。",
                             "en": "\nAll files already exist, nothing to download."},
    "dl_progress":          {"zh": "  [{i}/{total}] 成功: {ok}  404: {nf}  失败: {fail}  速度: {speed:.0f} KB/s",
                             "en": "  [{i}/{total}] OK: {ok}  404: {nf}  Failed: {fail}  Speed: {speed:.0f} KB/s"},
    "dl_done":              {"zh": "  下载完成! 耗时 {sec:.0f} 秒",
                             "en": "  Done! Elapsed {sec:.0f}s"},
    "dl_new":               {"zh": "  新增: {n} ({mb:.1f} MB)",
                             "en": "  New:    {n} ({mb:.1f} MB)"},
    "dl_404":               {"zh": "  404:  {n}",              "en": "  404:    {n}"},
    "dl_failed":            {"zh": "  失败: {n}",              "en": "  Failed: {n}"},
    "dl_fail_saved":        {"zh": "  失败列表已保存到 {path}",
                             "en": "  Failure list saved to {path}"},
    # ── cmd_serve ──
    "srv_title":            {"zh": "  HomDGCat Wiki 本地服务器",
                             "en": "  HomDGCat Wiki Local Server"},
    "srv_no_site":          {"zh": "错误: site/ 目录不存在，请先运行 download 命令。",
                             "en": "Error: site/ directory not found. Run the download command first."},
    "srv_need_asgi":        {"zh": "错误: HTTPS/HTTP2 需要安装依赖:\n  pip install starlette hypercorn h2",
                             "en": "Error: HTTPS/HTTP2 requires dependencies:\n  pip install starlette hypercorn h2"},
    "srv_engine":           {"zh": "  引擎:   {e}",            "en": "  Engine:   {e}"},
    "srv_proto":            {"zh": "  协议:   {p}",            "en": "  Protocol: {p}"},
    "srv_addr":             {"zh": "  地址:   {url}",          "en": "  Address:  {url}"},
    "srv_hint":             {"zh": "  提示:   pip install starlette hypercorn h2\n"
                                   "          可获得异步 I/O + HTTP/2 支持",
                             "en": "  Hint:   pip install starlette hypercorn h2\n"
                                   "          for async I/O + HTTP/2 support"},
    "srv_stop":             {"zh": "  按 Ctrl+C 停止",         "en": "  Press Ctrl+C to stop"},
    "srv_stopped":          {"zh": "\n服务器已停止。",          "en": "\nServer stopped."},
    "srv_fallback":         {"zh": "stdlib (回退模式)",         "en": "stdlib (fallback)"},
    "srv_h2_upgrade":       {"zh": "HTTP/1.1 (HTTPS 启用后自动升级 HTTP/2)",
                             "en": "HTTP/1.1 (auto-upgrades to HTTP/2 with HTTPS)"},
    # ── cmd_status ──
    "st_title":             {"zh": "  HomDGCat Wiki 镜像状态",
                             "en": "  HomDGCat Wiki Mirror Status"},
    "st_filelist":          {"zh": "  文件列表: {n} 个",       "en": "  File list:   {n}"},
    "st_downloaded":        {"zh": "  已下载:   {n} ({mb:.1f} MB)",
                             "en": "  Downloaded:  {n} ({mb:.1f} MB)"},
    "st_missing":           {"zh": "  缺失:     {n}",          "en": "  Missing:     {n}"},
    "st_progress":          {"zh": "  完成度:   {pct:.1f}%",   "en": "  Progress:    {pct:.1f}%"},
    "st_missing_cats":      {"zh": "\n  缺失分类:",             "en": "\n  Missing by category:"},
    # ── argparse ──
    "ap_desc":              {"zh": "HomDGCat Wiki 完整镜像工具",
                             "en": "HomDGCat Wiki complete mirror tool"},
    "ap_dl":                {"zh": "下载所有缺失文件",          "en": "Download all missing files"},
    "ap_workers":           {"zh": "并发下载数 (默认 10)",      "en": "Concurrent downloads (default 10)"},
    "ap_retry":             {"zh": "失败重试次数 (默认 3)",     "en": "Retry count (default 3)"},
    "ap_serve":             {"zh": "启动本地 HTTP 服务器",      "en": "Start local HTTP server"},
    "ap_port":              {"zh": "端口 (默认 9000)",          "en": "Port (default 9000)"},
    "ap_cert":              {"zh": "TLS 证书路径 (启用 HTTPS + HTTP/2)",
                             "en": "TLS certificate path (enables HTTPS + HTTP/2)"},
    "ap_key":               {"zh": "TLS 私钥路径",             "en": "TLS private key path"},
    "ap_status":            {"zh": "查看下载进度",              "en": "Show download progress"},
}

def _(key, **kw):
    """获取当前语言的翻译文本。"""
    tmpl = _I18N.get(key, {}).get(_LANG, key)
    return tmpl.format(**kw) if kw else tmpl

# ─── 下载功能 ───────────────────────────────────────────────

def load_filelist():
    """加载文件列表。"""
    if not FILELIST.exists():
        print(_("err_no_filelist", path=FILELIST))
        print(_("err_filelist_hint"))
        sys.exit(1)
    paths = []
    with open(FILELIST, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#"):
                paths.append(line)
    return paths


def download_one(url_path, retries=3):
    """下载单个文件，返回 (状态, 路径, 信息)。
    状态: True=新下载, None=已存在, False=失败
    """
    try:
        local_path = SITE_DIR / url_path.lstrip("/")
        # 路径穿越防护：确保落盘路径在 site/ 内
        try:
            local_path.resolve().relative_to(SITE_DIR.resolve())
        except (ValueError, OSError):
            return False, url_path, "path traversal blocked"
        if local_path.exists() and local_path.stat().st_size > 0:
            return None, url_path, "exists"
        local_path.parent.mkdir(parents=True, exist_ok=True)
        # 线上路由是目录 URL（如 /sr/char/1001/），不是 .../index.html
        # 但本地保存路径需要 index.html，所以请求时去掉
        request_path = url_path
        if request_path.endswith("/index.html"):
            request_path = request_path[: -len("index.html")]
        full_url = BASE_URL + urllib.request.quote(
            request_path, safe="/:@!$&'()*+,;=-._~%"
        )
        tmp_path = local_path.with_suffix(local_path.suffix + ".tmp")
        for attempt in range(retries):
            try:
                req = urllib.request.Request(full_url, headers={
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                    "Referer": "https://homdgcat.wiki/",
                })
                with urllib.request.urlopen(req, timeout=30) as resp:
                    # 流式写入，避免大文件占满内存
                    total = 0
                    with open(tmp_path, "wb") as f:
                        while True:
                            chunk = resp.read(65536)
                            if not chunk:
                                break
                            f.write(chunk)
                            total += len(chunk)
                    if total > 0:
                        tmp_path.replace(local_path)
                        return True, url_path, total
                    tmp_path.unlink(missing_ok=True)
                    return False, url_path, "empty"
            except urllib.error.HTTPError as e:
                tmp_path.unlink(missing_ok=True)
                if e.code == 404:
                    return False, url_path, "404"
                if attempt < retries - 1:
                    time.sleep(2 ** attempt)
            except Exception as e:
                tmp_path.unlink(missing_ok=True)
                if attempt < retries - 1:
                    time.sleep(2 ** attempt)
                else:
                    return False, url_path, str(e)
        return False, url_path, "failed"
    except Exception as e:
        return False, url_path, str(e)


def _file_ok(url_path):
    """检查文件是否已正确下载（存在且非空）。"""
    p = SITE_DIR / url_path.lstrip("/")
    try:
        p.resolve().relative_to(SITE_DIR.resolve())
    except (ValueError, OSError):
        return False
    return p.exists() and p.stat().st_size > 0


def cmd_download(args):
    """执行下载。"""
    all_paths = load_filelist()
    to_download = [p for p in all_paths if not _file_ok(p)]

    print("=" * 55)
    print(_("dl_title"))
    print("=" * 55)
    print(_("dl_filelist", n=len(all_paths)))
    print(_("dl_existing", n=len(all_paths) - len(to_download)))
    print(_("dl_pending", n=len(to_download)))
    print(_("dl_workers", n=args.workers))
    print(_("dl_retries", n=args.retry))
    print("=" * 55)
    sys.stdout.flush()

    if not to_download:
        print(_("dl_nothing"))
        return

    success = 0
    not_found = 0
    failed = 0
    total_bytes = 0
    failed_paths = []
    t0 = time.time()

    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = {
            executor.submit(download_one, p, args.retry): p
            for p in to_download
        }
        for i, future in enumerate(as_completed(futures), 1):
            try:
                ok, path, info = future.result()
            except Exception as e:
                ok, path, info = False, futures[future], str(e)
            if ok is True:
                success += 1
                total_bytes += info
            elif info == "404":
                not_found += 1
            elif ok is not None:
                failed += 1
                failed_paths.append((path, info))

            if i % 200 == 0 or i == len(to_download):
                elapsed = time.time() - t0
                speed = total_bytes / elapsed / 1024 if elapsed > 0 else 0
                print(_("dl_progress", i=i, total=len(to_download),
                       ok=success, nf=not_found, fail=failed, speed=speed))
                sys.stdout.flush()

    elapsed = time.time() - t0
    print(f"\n{'=' * 55}")
    print(_("dl_done", sec=elapsed))
    print(_("dl_new", n=success, mb=total_bytes / 1024 / 1024))
    print(_("dl_404", n=not_found))
    print(_("dl_failed", n=failed))
    print(f"{'=' * 55}")

    if failed_paths:
        fail_file = ROOT_DIR / "download_failures.txt"
        with open(fail_file, "w", encoding="utf-8") as f:
            for path, info in failed_paths:
                f.write(f"{path}\t{info}\n")
        print(_("dl_fail_saved", path=fail_file))


# ─── 本地服务器 ─────────────────────────────────────────────

# 可 gzip 压缩的文本类型（压缩率高，值得 CPU 开销）
_COMPRESSIBLE = {'.js', '.css', '.html', '.json', '.svg', '.txt', '.xml'}
# 二进制静态资源（已压缩，不需要 gzip）
_STATIC_BIN = {'.png', '.jpg', '.jpeg', '.gif', '.webp', '.woff', '.woff2', '.wav'}

_MIME_MAP = {
    ".js": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
    ".gif": "image/gif", ".svg": "image/svg+xml; charset=utf-8",
    ".webp": "image/webp", ".wav": "audio/wav",
    ".woff2": "font/woff2", ".woff": "font/woff",
    ".xml": "application/xml; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".ico": "image/x-icon",
}


@lru_cache(maxsize=1024)
def _gzip_cached(file_path_str, mtime_ns, size):
    """带 LRU 缓存的 gzip 压缩。缓存键含 mtime+size，文件变更自动失效。"""
    with open(file_path_str, 'rb') as f:
        raw = f.read()
    buf = io.BytesIO()
    with gzip.GzipFile(fileobj=buf, mode='wb', compresslevel=6) as gz:
        gz.write(raw)
    return buf.getvalue()


def _make_etag(stat):
    """基于 mtime 和 size 生成 ETag，格式类似 nginx。"""
    return f'"{stat.st_mtime_ns:x}-{stat.st_size:x}"'


class DualStackHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    """多线程 + IPv4/IPv6 双栈 HTTP 服务器。"""
    daemon_threads = True
    request_queue_size = 128

    def server_bind(self):
        try:
            self.address_family = socket.AF_INET6
            self.socket = socket.socket(self.address_family, socket.SOCK_STREAM)
            self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
            self.server_address = ("::", self.server_address[1])
            self.socket.bind(self.server_address)
            self.server_address = self.socket.getsockname()[:2]
            self.server_name = "localhost"
            self.server_port = self.server_address[1]
        except OSError:
            self.address_family = socket.AF_INET
            self.socket = socket.socket(self.address_family, socket.SOCK_STREAM)
            self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            self.server_address = ("", self.server_address[1])
            self.socket.bind(self.server_address)
            self.server_address = self.socket.getsockname()[:2]
            self.server_name = "localhost"
            self.server_port = self.server_address[1]


class SiteHandler(http.server.BaseHTTPRequestHandler):
    """完全自主的静态文件服务，支持 gzip、ETag/304、Cache-Control。"""

    server_version = "HomDGCat/1.0"
    protocol_version = "HTTP/1.1"  # 启用 keep-alive 持久连接

    def _resolve_path(self):
        """路由解析：URL → 本地文件路径。
        先尝试 URL 解码后的路径（常规文件），再尝试原始路径（percent-encoded 文件名）。
        """
        raw = self.path.split("?")[0].split("#")[0]
        decoded = unquote(raw)
        site_resolved = SITE_DIR.resolve()

        # 按优先级尝试两种路径：decoded 和 raw（percent-encoded 原样）
        for candidate in (decoded, raw):
            stripped = candidate.lstrip("/")
            if not stripped:
                # 根路径
                idx = SITE_DIR / "index" / "index.html"
                if idx.is_file():
                    return idx
                continue
            try:
                fp = SITE_DIR / stripped
            except (ValueError, OSError):
                continue
            if fp.is_file():
                target = fp
            elif (fp / "index.html").is_file():
                target = fp / "index.html"
            else:
                continue
            # 路径穿越防护
            try:
                target.resolve().relative_to(site_resolved)
            except (ValueError, OSError):
                return None
            return target
        return None

    def _serve_file(self, fp, head_only=False):
        """发送文件响应，处理 ETag/304 和 gzip。"""
        try:
            st = fp.stat()
        except OSError:
            self.send_error(404)
            return

        etag = _make_etag(st)
        ext = fp.suffix.lower()

        # ── 条件请求：If-None-Match → 304 ──
        if_none = self.headers.get("If-None-Match")
        if if_none and etag in (t.strip() for t in if_none.split(",")):
            self.send_response(304)
            self.send_header("ETag", etag)
            self.send_header("Cache-Control", self._cache_control(ext))
            if ext in _COMPRESSIBLE:
                self.send_header("Vary", "Accept-Encoding")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            return

        # ── gzip 判断（HEAD 也需要，以保证响应头一致） ──
        use_gzip = False
        if ext in _COMPRESSIBLE and st.st_size > 256:
            ae = self.headers.get("Accept-Encoding", "")
            if "gzip" in ae:
                use_gzip = True
                body = _gzip_cached(str(fp), st.st_mtime_ns, st.st_size)

        # ── HEAD 请求：返回与 GET 一致的响应头，不发 body ──
        if head_only:
            self.send_response(200)
            self.send_header("Content-Type", _MIME_MAP.get(ext, "application/octet-stream"))
            if use_gzip:
                self.send_header("Content-Length", str(len(body)))
                self.send_header("Content-Encoding", "gzip")
                self.send_header("Vary", "Accept-Encoding")
            else:
                self.send_header("Content-Length", str(st.st_size))
            self.send_header("ETag", etag)
            self.send_header("Cache-Control", self._cache_control(ext))
            self.send_header("Last-Modified", self.date_time_string(int(st.st_mtime)))
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            return

        # 非 gzip 时才读原始文件
        if not use_gzip:
            try:
                with open(fp, "rb") as f:
                    body = f.read()
            except OSError:
                self.send_error(500)
                return

        ctype = _MIME_MAP.get(ext, "application/octet-stream")

        # ── 发送响应 ──
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("ETag", etag)
        self.send_header("Cache-Control", self._cache_control(ext))
        self.send_header("Last-Modified", self.date_time_string(int(st.st_mtime)))
        if use_gzip:
            self.send_header("Content-Encoding", "gzip")
            self.send_header("Vary", "Accept-Encoding")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    @staticmethod
    def _cache_control(ext):
        if ext in _STATIC_BIN | {'.woff', '.woff2'}:
            return "public, max-age=604800"        # 7 天 — 图片/字体不变
        if ext in ('.js', '.css'):
            return "public, max-age=86400"         # 1 天 — JS/CSS 可能更新
        if ext == '.html':
            return "public, max-age=3600"          # 1 小时 — 页面
        return "public, max-age=3600"

    def do_GET(self):
        fp = self._resolve_path()
        if fp:
            self._serve_file(fp)
        else:
            self.send_error(404)

    def do_HEAD(self):
        fp = self._resolve_path()
        if fp:
            self._serve_file(fp, head_only=True)
        else:
            self.send_error(404)

    def log_message(self, fmt, *args):
        # 保持默认日志格式
        super().log_message(fmt, *args)


def _serve_stdlib(port):
    """stdlib 回退服务器 (HTTP/1.1)。"""
    with DualStackHTTPServer(("", port), SiteHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print(_("srv_stopped"))


# ─── ASGI 生产服务器 (starlette + hypercorn) ────────────────

_CACHE_MAX_AGE = {
    '.png': 604800, '.jpg': 604800, '.jpeg': 604800, '.gif': 604800,
    '.webp': 604800, '.woff': 604800, '.woff2': 604800, '.wav': 604800,
    '.ico': 604800,
    '.js': 86400, '.css': 86400,
    '.html': 3600, '.json': 3600,
}


def _make_asgi_app():
    """构建 ASGI 应用，需要 starlette。"""
    import hashlib
    from starlette.applications import Starlette
    from starlette.responses import FileResponse, Response
    from starlette.routing import Route
    from starlette.middleware import Middleware
    from starlette.middleware.gzip import GZipMiddleware

    site = SITE_DIR.resolve()

    try:
        hashlib.md5(b"", usedforsecurity=False)
        def _etag_for(st):
            base = f"{st.st_mtime}-{st.st_size}"
            return f'"{hashlib.md5(base.encode(), usedforsecurity=False).hexdigest()}"'
    except TypeError:
        def _etag_for(st):
            base = f"{st.st_mtime}-{st.st_size}"
            return f'"{hashlib.md5(base.encode()).hexdigest()}"'

    def _resolve(*candidates):
        """尝试多个路径候选，兼容 decoded 和 percent-encoded 文件名。"""
        for candidate in candidates:
            if not candidate or candidate == "/":
                idx = site / "index" / "index.html"
                if idx.is_file():
                    return idx
                continue
            try:
                fp = site / candidate
            except (ValueError, OSError):
                continue
            if fp.is_file():
                target = fp
            elif (fp / "index.html").is_file():
                target = fp / "index.html"
            else:
                continue
            try:
                target.resolve().relative_to(site)
            except (ValueError, OSError):
                return None
            return target
        return None

    async def handle(request):
        # decoded path (starlette 已解码)
        path = request.path_params.get("path", "")
        # raw path (保留 percent-encoding)
        raw_path = request.scope.get("raw_path", b"").decode("latin-1")
        raw = raw_path.lstrip("/")
        target = _resolve(unquote(path), path, raw)
        if target is None:
            return Response(status_code=404)

        st = target.stat()
        etag = _etag_for(st)
        ext = target.suffix.lower()
        max_age = _CACHE_MAX_AGE.get(ext, 3600)
        extra = {
            "Cache-Control": f"public, max-age={max_age}",
            "Access-Control-Allow-Origin": "*",
        }

        # 条件请求: If-None-Match → 304
        if_none = request.headers.get("if-none-match", "")
        if if_none == "*" or etag in (t.strip() for t in if_none.split(",")):
            return Response(status_code=304, headers={"ETag": etag, **extra})

        return FileResponse(target, stat_result=st, headers=extra)

    return Starlette(
        routes=[Route("/{path:path}", handle)],
        middleware=[Middleware(GZipMiddleware, minimum_size=256)],
    )


def _serve_asgi(port, certfile=None, keyfile=None):
    """hypercorn ASGI 服务器，支持 HTTP/2。"""
    import asyncio
    from hypercorn.config import Config as HyperConfig
    from hypercorn.asyncio import serve as hyper_serve

    app = _make_asgi_app()
    config = HyperConfig()
    config.bind = [f"0.0.0.0:{port}"]
    config.accesslog = "-"
    if certfile and keyfile:
        config.certfile = certfile
        config.keyfile = keyfile
    asyncio.run(hyper_serve(app, config))


def cmd_serve(args):
    """启动本地 HTTP 服务器。自动检测最佳引擎。"""
    if not SITE_DIR.exists():
        print(_("srv_no_site"))
        sys.exit(1)

    port = args.port
    certfile = getattr(args, 'cert', None)
    keyfile = getattr(args, 'key', None)
    use_tls = certfile and keyfile
    proto = "https" if use_tls else "http"

    # 检测 ASGI 引擎是否可用
    has_asgi = False
    try:
        import starlette, hypercorn  # noqa: F401
        has_asgi = True
    except ImportError:
        pass

    if use_tls and not has_asgi:
        print(_("srv_need_asgi"))
        sys.exit(1)

    if has_asgi:
        engine = "hypercorn + starlette (ASGI)"
        if use_tls:
            h2_note = "HTTP/2 + HTTP/1.1"
        else:
            h2_note = _("srv_h2_upgrade")
    else:
        engine = _("srv_fallback")
        h2_note = "HTTP/1.1"

    print("=" * 55)
    print(_("srv_title"))
    print("=" * 55)
    print(_("srv_engine", e=engine))
    print(_("srv_proto", p=h2_note))
    print(_("srv_addr", url=f"{proto}://localhost:{port}"))
    if not has_asgi:
        print(_("srv_hint"))
    print(_("srv_stop"))
    print("=" * 55)

    if has_asgi:
        _serve_asgi(port, certfile, keyfile)
    else:
        _serve_stdlib(port)


def cmd_status(_args):
    """显示下载进度统计。"""
    all_paths = load_filelist()
    existing = 0
    missing = 0
    total_size = 0
    cats = {}
    for p in all_paths:
        if _file_ok(p):
            local = SITE_DIR / p.lstrip("/")
            existing += 1
            total_size += local.stat().st_size
        else:
            missing += 1
            parts = p.strip("/").split("/")
            cat = "/".join(parts[:2]) if len(parts) > 2 else parts[0]
            cats[cat] = cats.get(cat, 0) + 1

    print("=" * 55)
    print(_("st_title"))
    print("=" * 55)
    print(_("st_filelist", n=len(all_paths)))
    print(_("st_downloaded", n=existing, mb=total_size / 1024 / 1024))
    print(_("st_missing", n=missing))
    pct = existing / len(all_paths) * 100 if all_paths else 0
    print(_("st_progress", pct=pct))
    if cats:
        print(_("st_missing_cats"))
        for cat, count in sorted(cats.items(), key=lambda x: -x[1])[:15]:
            print(f"    {cat}: {count}")
    print("=" * 55)


# ─── 入口 ───────────────────────────────────────────────────


def main():
    global _LANG
    # 在构建 parser 之前提取 --lang，确保 help 文本也跟随语言切换
    for i, arg in enumerate(sys.argv[1:], 1):
        if arg == "--lang" and i < len(sys.argv):
            val = sys.argv[i + 1] if i + 1 <= len(sys.argv) - 1 else None
            if val in ("zh", "en"):
                _LANG = val
            break
        if arg.startswith("--lang="):
            val = arg.split("=", 1)[1]
            if val in ("zh", "en"):
                _LANG = val
            break

    parser = argparse.ArgumentParser(
        description=_("ap_desc"),
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("--lang", choices=["zh", "en"],
                        help="Override display language / 覆盖显示语言")
    sub = parser.add_subparsers(dest="command")

    dl = sub.add_parser("download", help=_("ap_dl"))
    dl.add_argument("-w", "--workers", type=int, default=10, help=_("ap_workers"))
    dl.add_argument("-r", "--retry", type=int, default=3, help=_("ap_retry"))

    sv = sub.add_parser("serve", help=_("ap_serve"))
    sv.add_argument("-p", "--port", type=int, default=9000, help=_("ap_port"))
    sv.add_argument("--cert", help=_("ap_cert"))
    sv.add_argument("--key", help=_("ap_key"))

    sub.add_parser("status", help=_("ap_status"))

    args = parser.parse_args()
    if args.command == "download":
        cmd_download(args)
    elif args.command == "serve":
        cmd_serve(args)
    elif args.command == "status":
        cmd_status(args)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
