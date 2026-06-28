# -*- coding: utf-8 -*-
"""启动本地HTTP服务器，PWA安装 + 离线缓存才能生效"""
import http.server
import webbrowser
import os
import sys

PORT = 8080
DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(DIR)

Handler = http.server.SimpleHTTPRequestHandler
# 正确的 MIME 类型
Handler.extensions_map['.json'] = 'application/json'

print(f'🦕 拼音大冒险 PWA 模式')
print(f'   地址: http://localhost:{PORT}')
print(f'   在 Safari/Chrome 中打开，然后"添加到桌面"即可像 App 一样使用')
print(f'   按 Ctrl+C 停止服务器')
print()

webbrowser.open(f'http://localhost:{PORT}/pinyin-adventure.html')

with http.server.HTTPServer(('', PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\n服务器已停止')
