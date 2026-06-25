# lianglianglee.com 的备份

## 前因

因为怕这个网站突然消失了，所以把这些资料都备份下来。L 站曾分享过该网站，评论区也有其他人的备份，但内容不够齐全，于是动手整理了一份更全的版本。

## 备份来源

本仓库在以下项目的基础上整理，并会在原有内容上做一些微调（目录结构、样式、启动方式等）：

1. [Yvan0329/lianglianglee](https://github.com/Yvan0329/lianglianglee) — 含 Go + Gin 静态服务，内容较全
2. [zhwei820/learn.lianglianglee.com](https://github.com/zhwei820/learn.lianglianglee.com) — 纯静态站点，可用 Python 直接托管

## 食用

使用 Gin 提供静态文件服务，默认端口 **8888**。

本地直接双击或执行 `lianglianglee.exe` 即可启动，浏览器打开 http://localhost:8888

如需从源码运行：

```bash
go run .
```

编译可执行文件：

```bash
go build -o lianglianglee.exe .
```

## 标注功能

文章阅读页**右上角**提供暗色标注 Dock（默认半透明，悬停展开），数据保存在本地 SQLite（`data/annotations.db`）。

- **高亮 / 批注 / 画笔**：框选文字后**不会自动弹菜单**（默认），请用右上角 Dock 操作；有选区时 Dock 图标会高亮提示
- **颜色**：高亮 6 色、画笔 5 色，均为 iOS 系统色
- **设置**：Dock 内齿轮图标，可固定展开工具栏、切换浅色主题
- **配置**：编辑 `book/static/annotation-config.json` 可自定义颜色、位置（`top`/`right`）等；用户设置在浏览器 `localStorage` 中保存

浏览器 `localStorage` 中的旧标注会在首次打开对应页面时自动迁移到数据库。
