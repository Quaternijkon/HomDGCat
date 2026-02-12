[中文文档](README.zh-CN.md)

# HomDGCat Wiki Mirror

A complete offline mirror of [homdgcat.wiki](https://homdgcat.wiki), covering characters, weapons, artifacts/relics and more from Genshin Impact and Honkai: Star Rail.

## Contents

- 10,777 files, ~2.5 GB
- 575 pages (Genshin + Star Rail characters/weapons/artifacts, etc.)
- Data files in 5 languages (CH / EN / JP / KR / RU)
- All image assets (avatars, skill icons, weapon art, gacha art, etc.)
- TextMap localization data

## Quick Start

### Get Site Data

The site data (`site/` directory, ~2.5 GB) is not included in this repository. Two ways to obtain it:

**Option 1: Download from Internet Archive (Recommended)**

Download `site.7z` from [Internet Archive](https://archive.org/details/homdgcat-wiki-mirror) and extract it to the project root:

```bash
# Download
ia download homdgcat-wiki-mirror site.7z

# Extract (requires 7-Zip)
7z x site.7z
```

**Option 2: Pull from the source site**

Download all files directly from homdgcat.wiki (may fail if the source site is unstable):

```bash
# Default (10 threads)
python main.py download

# 16 threads
python main.py download --workers 16

# Check progress
python main.py status
```

The script reads file paths from `filelist.txt` and downloads all missing files into `site/`. Existing files are skipped automatically; supports resuming interrupted downloads.

### Browse Locally

```bash
# Default port 9000
python main.py serve

# Custom port
python main.py serve --port 3000
```

Open `http://localhost:9000` in your browser to browse the full site.

## Server Engines

The script supports two server engines and auto-detects availability:

### stdlib mode (zero dependencies)

Works out of the box with no third-party packages. Based on Python's `http.server`:

- HTTP/1.1 + keep-alive
- Multi-threaded request handling
- gzip compression (with LRU cache)
- ETag / 304 conditional requests
- Tiered Cache-Control headers

Suitable for personal local browsing.

### ASGI mode (recommended)

Auto-enabled when dependencies are installed:

```bash
pip install starlette hypercorn h2
```

Based on hypercorn + starlette:

- Async I/O, far better concurrency than threading
- HTTP/2 support (requires TLS certificate)
- Production-grade connection management and timeouts
- gzip compression + ETag / 304
- Path traversal protection

Enable HTTPS + HTTP/2:

```bash
python main.py serve --cert cert.pem --key key.pem
```

## File Structure

```
main.py               # Unified tool script (download / serve / status)
filelist.txt         # Complete file list (10,777 entries)
site/                # Site files directory
  index/             # Homepage
  sr/char/           # Star Rail character pages
  gi/char/           # Genshin character pages
  data/{CH,EN,...}/  # Star Rail multi-language data
  gi/{CH,EN,...}/    # Genshin multi-language data
  images/            # Star Rail image assets
  homdgcat-res/      # Genshin image assets
  TextMap/           # TextMap localization data
```

## Command Reference

| Command | Description |
|---------|-------------|
| `download` | Download all missing files |
| `download -w 16` | Use 16 concurrent threads |
| `download -r 5` | Retry failed downloads 5 times |
| `serve` | Start local server |
| `serve -p 3000` | Custom port |
| `serve --cert X --key Y` | Enable HTTPS/HTTP2 |
| `status` | Show download progress |
| `--lang en` | Force English output |
| `--lang zh` | Force Chinese output |

## Requirements

- Python 3.8+
- Download: no third-party dependencies
- Server (stdlib mode): no third-party dependencies
- Server (ASGI mode): `starlette`, `hypercorn`, `h2`

## License

This tool is intended for personal offline backup of homdgcat.wiki. All site content is copyrighted by its original authors.