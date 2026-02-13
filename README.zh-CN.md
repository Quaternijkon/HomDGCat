[English](README.md)

# HomDGCat Wiki Mirror

[homdgcat.wiki](https://homdgcat.wiki) 的完整离线镜像，涵盖原神和崩坏：星穹铁道的角色、武器、圣遗物/遗器等数据。

## 内容

- 15,357 个文件，约 2.5 GB
- 575+ 个页面（原神 + 星铁角色/武器/圣遗物等）
- 4,580+ 个动态子页面（任务/物品/怪物/七圣召唤等）
- 5 种语言的数据文件（CH / EN / JP / KR / RU）
- 全部图片资源（头像、技能图标、武器图、抽卡图等）
- TextMap 文本映射数据

## 快速开始

### 获取站点数据

站点数据（`site/` 目录，约 2.5 GB）不包含在本仓库中。有三种方式获取：

**方式一：从 GitHub Releases 下载（推荐）**

从 [Releases 页面](https://github.com/NewbieXvwu/HomDGCat/releases) 下载 `site.7z`，解压到项目根目录：

```bash
# 下载（约 2 GB）
curl -LO https://github.com/NewbieXvwu/HomDGCat/releases/download/initial/site.7z

# 解压（需要 7-Zip）
7z x site.7z
```

**方式二：从 Internet Archive 下载**

如果 GitHub 不可用，可从 [Internet Archive](https://archive.org/details/homdgcat-wiki-mirror) 下载：

```bash
ia download homdgcat-wiki-mirror site.7z
7z x site.7z
```

**方式三：从源站拉取**

直接从 homdgcat.wiki 下载全部文件（源站不稳定时可能失败）：

```bash
# 基本用法（10 线程）
python main.py download

# 16 线程加速
python main.py download --workers 16

# 查看下载进度
python main.py status
```

脚本会读取 `filelist.txt` 中的文件列表，下载所有缺失文件到 `site/` 目录。已存在的文件会自动跳过，支持断点续传。

### 本地浏览

```bash
# 默认端口 9000
python main.py serve

# 自定义端口
python main.py serve --port 3000
```

浏览器访问 `http://localhost:9000` 即可浏览完整站点。

## 服务器引擎

脚本支持两种服务器引擎，自动检测可用性：

### stdlib 模式（零依赖）

无需安装任何第三方库即可使用。基于 Python 标准库 `http.server`，提供：

- HTTP/1.1 + keep-alive
- 多线程请求处理
- gzip 压缩（带 LRU 缓存）
- ETag / 304 条件请求
- Cache-Control 分级缓存

适合个人本地浏览。

### ASGI 模式（推荐）

安装依赖后自动启用：

```bash
pip install starlette hypercorn h2
```

基于 hypercorn + starlette，提供：

- 异步 I/O，并发能力远超线程模型
- HTTP/2 支持（需配合 TLS 证书）
- 生产级连接管理和超时处理
- gzip 压缩 + ETag / 304
- 路径穿越防护

启用 HTTPS + HTTP/2：

```bash
python main.py serve --cert cert.pem --key key.pem
```

## 文件结构

```
main.py               # 统一工具脚本（下载 / 服务器 / 状态查看）
filelist.txt         # 完整文件列表（15,357 条）
site/                # 站点文件目录
  index/             # 首页
  sr/char/           # 星铁角色页面
  gi/char/           # 原神角色页面
  data/{CH,EN,...}/  # 星铁多语言数据
  gi/{CH,EN,...}/    # 原神多语言数据
  images/            # 星铁图片资源
  homdgcat-res/      # 原神图片资源
  TextMap/           # 文本映射数据
```

## 命令参考

| 命令 | 说明 |
|------|------|
| `download` | 下载所有缺失文件 |
| `download -w 16` | 指定 16 并发下载 |
| `download -r 5` | 失败重试 5 次 |
| `serve` | 启动本地服务器 |
| `serve -p 3000` | 指定端口 |
| `serve --cert X --key Y` | 启用 HTTPS/HTTP2 |
| `status` | 查看下载进度 |
| `--lang en` | 强制英文输出 |
| `--lang zh` | 强制中文输出 |

## 依赖

- Python 3.8+
- 下载功能：无第三方依赖
- 服务器基础模式：无第三方依赖
- 服务器 ASGI 模式：`starlette`, `hypercorn`, `h2`

## 许可

本工具仅用于 homdgcat.wiki 的个人离线备份。站点内容版权归原作者所有。
