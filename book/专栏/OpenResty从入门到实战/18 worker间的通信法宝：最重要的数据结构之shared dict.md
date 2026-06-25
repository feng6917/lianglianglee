<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=18&#32;worker间的通信法宝：最重要的数据结构之shared&#32;dict>
        <link rel="icon" href="/static/favicon.png">
        <title>18 worker间的通信法宝：最重要的数据结构之shared dict </title>
        
        <link rel="stylesheet" href="/static/index.css">
        <link rel="stylesheet" href="/static/highlight.min.css">
        <script src="/static/highlight.min.js"></script>
        
        <meta name="generator" content="Hexo 4.2.0">
        <script defer src="https://umami.lianglianglee.com/script.js"
         data-website-id="83e5d5db-9d06-40e3-b780-cbae722fdf8c"></script>
    </head>

<body>
    <div class="book-container">
        <div class="book-sidebar">
            <div class="book-brand">
                <a href="/">
                    <img src="/static/favicon.png">
                    <span>技术文章摘抄</span>
                </a>
            </div>
            <div class="book-menu uncollapsible">
                <ul class="uncollapsible">
                    <li><a href="/" class="current-tab">首页</a></li>
                    <li><a href="../">上一级</a></li>
                </ul>
                <ul class="uncollapsible">
                    
                    <li>
                        <a class="menu-item" id="00 开篇词 OpenResty，为你打开高性能开发的大门.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/00%20%e5%bc%80%e7%af%87%e8%af%8d%20OpenResty%ef%bc%8c%e4%b8%ba%e4%bd%a0%e6%89%93%e5%bc%80%e9%ab%98%e6%80%a7%e8%83%bd%e5%bc%80%e5%8f%91%e7%9a%84%e5%a4%a7%e9%97%a8.md">00 开篇词 OpenResty，为你打开高性能开发的大门.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01 初探OpenResty的三大特性.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/01%20%e5%88%9d%e6%8e%a2OpenResty%e7%9a%84%e4%b8%89%e5%a4%a7%e7%89%b9%e6%80%a7.md">01 初探OpenResty的三大特性.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 如何写出你的“hello world”？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/02%20%e5%a6%82%e4%bd%95%e5%86%99%e5%87%ba%e4%bd%a0%e7%9a%84%e2%80%9chello%20world%e2%80%9d%ef%bc%9f.md">02 如何写出你的“hello world”？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 揪出隐藏在背后的那些子项目.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/03%20%e6%8f%aa%e5%87%ba%e9%9a%90%e8%97%8f%e5%9c%a8%e8%83%8c%e5%90%8e%e7%9a%84%e9%82%a3%e4%ba%9b%e5%ad%90%e9%a1%b9%e7%9b%ae.md">03 揪出隐藏在背后的那些子项目.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 如何管理第三方包？从包管理工具luarocks和opm说起.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/04%20%e5%a6%82%e4%bd%95%e7%ae%a1%e7%90%86%e7%ac%ac%e4%b8%89%e6%96%b9%e5%8c%85%ef%bc%9f%e4%bb%8e%e5%8c%85%e7%ae%a1%e7%90%86%e5%b7%a5%e5%85%b7luarocks%e5%92%8copm%e8%af%b4%e8%b5%b7.md">04 如何管理第三方包？从包管理工具luarocks和opm说起.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 [视频]opm项目导读.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/05%20[%e8%a7%86%e9%a2%91]opm%e9%a1%b9%e7%9b%ae%e5%af%bc%e8%af%bb.md">05 [视频]opm项目导读.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 OpenResty 中用到的 NGINX 知识.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/06%20OpenResty%20%e4%b8%ad%e7%94%a8%e5%88%b0%e7%9a%84%20NGINX%20%e7%9f%a5%e8%af%86.md">06 OpenResty 中用到的 NGINX 知识.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 带你快速上手 Lua.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/07%20%e5%b8%a6%e4%bd%a0%e5%bf%ab%e9%80%9f%e4%b8%8a%e6%89%8b%20Lua.md">07 带你快速上手 Lua.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 LuaJIT分支和标准Lua有什么不同？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/08%20LuaJIT%e5%88%86%e6%94%af%e5%92%8c%e6%a0%87%e5%87%86Lua%e6%9c%89%e4%bb%80%e4%b9%88%e4%b8%8d%e5%90%8c%ef%bc%9f.md">08 LuaJIT分支和标准Lua有什么不同？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 为什么 lua-resty-core 性能更高一些？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/09%20%e4%b8%ba%e4%bb%80%e4%b9%88%20lua-resty-core%20%e6%80%a7%e8%83%bd%e6%9b%b4%e9%ab%98%e4%b8%80%e4%ba%9b%ef%bc%9f.md">09 为什么 lua-resty-core 性能更高一些？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 JIT编译器的死穴：为什么要避免使用 NYI ？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/10%20JIT%e7%bc%96%e8%af%91%e5%99%a8%e7%9a%84%e6%ad%bb%e7%a9%b4%ef%bc%9a%e4%b8%ba%e4%bb%80%e4%b9%88%e8%a6%81%e9%81%bf%e5%85%8d%e4%bd%bf%e7%94%a8%20NYI%20%ef%bc%9f.md">10 JIT编译器的死穴：为什么要避免使用 NYI ？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 剖析Lua唯一的数据结构table和metatable特性.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/11%20%e5%89%96%e6%9e%90Lua%e5%94%af%e4%b8%80%e7%9a%84%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84table%e5%92%8cmetatable%e7%89%b9%e6%80%a7.md">11 剖析Lua唯一的数据结构table和metatable特性.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 高手秘诀：识别Lua的独有概念和坑.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/12%20%e9%ab%98%e6%89%8b%e7%a7%98%e8%af%80%ef%bc%9a%e8%af%86%e5%88%abLua%e7%9a%84%e7%8b%ac%e6%9c%89%e6%a6%82%e5%bf%b5%e5%92%8c%e5%9d%91.md">12 高手秘诀：识别Lua的独有概念和坑.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 [视频]实战：基于FFI实现的lua-resty-lrucache.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/13%20[%e8%a7%86%e9%a2%91]%e5%ae%9e%e6%88%98%ef%bc%9a%e5%9f%ba%e4%ba%8eFFI%e5%ae%9e%e7%8e%b0%e7%9a%84lua-resty-lrucache.md">13 [视频]实战：基于FFI实现的lua-resty-lrucache.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 答疑（一）：Lua 规则和 NGINX 配置文件产生冲突怎么办？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/14%20%e7%ad%94%e7%96%91%ef%bc%88%e4%b8%80%ef%bc%89%ef%bc%9aLua%20%e8%a7%84%e5%88%99%e5%92%8c%20NGINX%20%e9%85%8d%e7%bd%ae%e6%96%87%e4%bb%b6%e4%ba%a7%e7%94%9f%e5%86%b2%e7%aa%81%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">14 答疑（一）：Lua 规则和 NGINX 配置文件产生冲突怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 OpenResty 和别的开发平台有什么不同？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/15%20OpenResty%20%e5%92%8c%e5%88%ab%e7%9a%84%e5%bc%80%e5%8f%91%e5%b9%b3%e5%8f%b0%e6%9c%89%e4%bb%80%e4%b9%88%e4%b8%8d%e5%90%8c%ef%bc%9f.md">15 OpenResty 和别的开发平台有什么不同？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 秒杀大多数开发问题的两个利器：文档和测试案例.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/16%20%e7%a7%92%e6%9d%80%e5%a4%a7%e5%a4%9a%e6%95%b0%e5%bc%80%e5%8f%91%e9%97%ae%e9%a2%98%e7%9a%84%e4%b8%a4%e4%b8%aa%e5%88%a9%e5%99%a8%ef%bc%9a%e6%96%87%e6%a1%a3%e5%92%8c%e6%b5%8b%e8%af%95%e6%a1%88%e4%be%8b.md">16 秒杀大多数开发问题的两个利器：文档和测试案例.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 为什么能成为更好的Web服务器？动态处理请求和响应是关键.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/17%20%e4%b8%ba%e4%bb%80%e4%b9%88%e8%83%bd%e6%88%90%e4%b8%ba%e6%9b%b4%e5%a5%bd%e7%9a%84Web%e6%9c%8d%e5%8a%a1%e5%99%a8%ef%bc%9f%e5%8a%a8%e6%80%81%e5%a4%84%e7%90%86%e8%af%b7%e6%b1%82%e5%92%8c%e5%93%8d%e5%ba%94%e6%98%af%e5%85%b3%e9%94%ae.md">17 为什么能成为更好的Web服务器？动态处理请求和响应是关键.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 worker间的通信法宝：最重要的数据结构之shared dict.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/18%20worker%e9%97%b4%e7%9a%84%e9%80%9a%e4%bf%a1%e6%b3%95%e5%ae%9d%ef%bc%9a%e6%9c%80%e9%87%8d%e8%a6%81%e7%9a%84%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84%e4%b9%8bshared%20dict.md">18 worker间的通信法宝：最重要的数据结构之shared dict.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 OpenResty 的核心和精髓：cosocket.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/19%20OpenResty%20%e7%9a%84%e6%a0%b8%e5%bf%83%e5%92%8c%e7%b2%be%e9%ab%93%ef%bc%9acosocket.md">19 OpenResty 的核心和精髓：cosocket.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 超越 Web 服务器：特权进程和定时任务.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/20%20%e8%b6%85%e8%b6%8a%20Web%20%e6%9c%8d%e5%8a%a1%e5%99%a8%ef%bc%9a%e7%89%b9%e6%9d%83%e8%bf%9b%e7%a8%8b%e5%92%8c%e5%ae%9a%e6%97%b6%e4%bb%bb%e5%8a%a1.md">20 超越 Web 服务器：特权进程和定时任务.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 带你玩转时间、正则表达式等常用API.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/21%20%e5%b8%a6%e4%bd%a0%e7%8e%a9%e8%bd%ac%e6%97%b6%e9%97%b4%e3%80%81%e6%ad%a3%e5%88%99%e8%a1%a8%e8%be%be%e5%bc%8f%e7%ad%89%e5%b8%b8%e7%94%a8API.md">21 带你玩转时间、正则表达式等常用API.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 [视频]从一个安全漏洞说起，探寻API性能和安全的平衡.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/22%20[%e8%a7%86%e9%a2%91]%e4%bb%8e%e4%b8%80%e4%b8%aa%e5%ae%89%e5%85%a8%e6%bc%8f%e6%b4%9e%e8%af%b4%e8%b5%b7%ef%bc%8c%e6%8e%a2%e5%af%bbAPI%e6%80%a7%e8%83%bd%e5%92%8c%e5%ae%89%e5%85%a8%e7%9a%84%e5%b9%b3%e8%a1%a1.md">22 [视频]从一个安全漏洞说起，探寻API性能和安全的平衡.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 [视频]导读lua-resty-requests：优秀的lua-resty-_是如何编写的？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/23%20[%e8%a7%86%e9%a2%91]%e5%af%bc%e8%af%bblua-resty-requests%ef%bc%9a%e4%bc%98%e7%a7%80%e7%9a%84lua-resty-_%e6%98%af%e5%a6%82%e4%bd%95%e7%bc%96%e5%86%99%e7%9a%84%ef%bc%9f.md">23 [视频]导读lua-resty-requests：优秀的lua-resty-_是如何编写的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 实战：处理四层流量，实现Memcached Server.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/24%20%e5%ae%9e%e6%88%98%ef%bc%9a%e5%a4%84%e7%90%86%e5%9b%9b%e5%b1%82%e6%b5%81%e9%87%8f%ef%bc%8c%e5%ae%9e%e7%8e%b0Memcached%20Server.md">24 实战：处理四层流量，实现Memcached Server.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25 答疑（二）：特权进程的权限到底是什么？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/25%20%e7%ad%94%e7%96%91%ef%bc%88%e4%ba%8c%ef%bc%89%ef%bc%9a%e7%89%b9%e6%9d%83%e8%bf%9b%e7%a8%8b%e7%9a%84%e6%9d%83%e9%99%90%e5%88%b0%e5%ba%95%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f.md">25 答疑（二）：特权进程的权限到底是什么？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 代码贡献者的拦路虎：test__nginx 简介.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/26%20%e4%bb%a3%e7%a0%81%e8%b4%a1%e7%8c%ae%e8%80%85%e7%9a%84%e6%8b%a6%e8%b7%af%e8%99%8e%ef%bc%9atest__nginx%20%e7%ae%80%e4%bb%8b.md">26 代码贡献者的拦路虎：test__nginx 简介.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 test__nginx 包罗万象的测试方法.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/27%20test__nginx%20%e5%8c%85%e7%bd%97%e4%b8%87%e8%b1%a1%e7%9a%84%e6%b5%8b%e8%af%95%e6%96%b9%e6%b3%95.md">27 test__nginx 包罗万象的测试方法.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 test__nginx 还可以这样用？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/28%20test__nginx%20%e8%bf%98%e5%8f%af%e4%bb%a5%e8%bf%99%e6%a0%b7%e7%94%a8%ef%bc%9f.md">28 test__nginx 还可以这样用？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 最容易失准的性能测试？你需要压测工具界的“悍马”wrk.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/29%20%e6%9c%80%e5%ae%b9%e6%98%93%e5%a4%b1%e5%87%86%e7%9a%84%e6%80%a7%e8%83%bd%e6%b5%8b%e8%af%95%ef%bc%9f%e4%bd%a0%e9%9c%80%e8%a6%81%e5%8e%8b%e6%b5%8b%e5%b7%a5%e5%85%b7%e7%95%8c%e7%9a%84%e2%80%9c%e6%82%8d%e9%a9%ac%e2%80%9dwrk.md">29 最容易失准的性能测试？你需要压测工具界的“悍马”wrk.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30 答疑（三）如何搭建测试的网络结构？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/30%20%e7%ad%94%e7%96%91%ef%bc%88%e4%b8%89%ef%bc%89%e5%a6%82%e4%bd%95%e6%90%ad%e5%bb%ba%e6%b5%8b%e8%af%95%e7%9a%84%e7%bd%91%e7%bb%9c%e7%bb%93%e6%9e%84%ef%bc%9f.md">30 答疑（三）如何搭建测试的网络结构？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31 性能下降10倍的真凶：阻塞函数.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/31%20%e6%80%a7%e8%83%bd%e4%b8%8b%e9%99%8d10%e5%80%8d%e7%9a%84%e7%9c%9f%e5%87%b6%ef%bc%9a%e9%98%bb%e5%a1%9e%e5%87%bd%e6%95%b0.md">31 性能下降10倍的真凶：阻塞函数.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32 让人又恨又爱的字符串操作.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/32%20%e8%ae%a9%e4%ba%ba%e5%8f%88%e6%81%a8%e5%8f%88%e7%88%b1%e7%9a%84%e5%ad%97%e7%ac%a6%e4%b8%b2%e6%93%8d%e4%bd%9c.md">32 让人又恨又爱的字符串操作.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33 性能提升10倍的秘诀：必须用好 table.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/33%20%e6%80%a7%e8%83%bd%e6%8f%90%e5%8d%8710%e5%80%8d%e7%9a%84%e7%a7%98%e8%af%80%ef%bc%9a%e5%bf%85%e9%a1%bb%e7%94%a8%e5%a5%bd%20table.md">33 性能提升10倍的秘诀：必须用好 table.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34 特别放送：OpenResty编码指南.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/34%20%e7%89%b9%e5%88%ab%e6%94%be%e9%80%81%ef%bc%9aOpenResty%e7%bc%96%e7%a0%81%e6%8c%87%e5%8d%97.md">34 特别放送：OpenResty编码指南.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35 [视频]实际项目中的性能优化：ingress-nginx中的几个PR解读.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/35%20[%e8%a7%86%e9%a2%91]%e5%ae%9e%e9%99%85%e9%a1%b9%e7%9b%ae%e4%b8%ad%e7%9a%84%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%ef%bc%9aingress-nginx%e4%b8%ad%e7%9a%84%e5%87%a0%e4%b8%aaPR%e8%a7%a3%e8%af%bb.md">35 [视频]实际项目中的性能优化：ingress-nginx中的几个PR解读.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36 盘点OpenResty的各种调试手段.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/36%20%e7%9b%98%e7%82%b9OpenResty%e7%9a%84%e5%90%84%e7%a7%8d%e8%b0%83%e8%af%95%e6%89%8b%e6%ae%b5.md">36 盘点OpenResty的各种调试手段.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37 systemtap-toolkit和stapxx：如何用数据搞定“疑难杂症”？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/37%20systemtap-toolkit%e5%92%8cstapxx%ef%bc%9a%e5%a6%82%e4%bd%95%e7%94%a8%e6%95%b0%e6%8d%ae%e6%90%9e%e5%ae%9a%e2%80%9c%e7%96%91%e9%9a%be%e6%9d%82%e7%97%87%e2%80%9d%ef%bc%9f.md">37 systemtap-toolkit和stapxx：如何用数据搞定“疑难杂症”？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38 [视频]巧用wrk和火焰图，科学定位性能瓶颈.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/38%20[%e8%a7%86%e9%a2%91]%e5%b7%a7%e7%94%a8wrk%e5%92%8c%e7%81%ab%e7%84%b0%e5%9b%be%ef%bc%8c%e7%a7%91%e5%ad%a6%e5%ae%9a%e4%bd%8d%e6%80%a7%e8%83%bd%e7%93%b6%e9%a2%88.md">38 [视频]巧用wrk和火焰图，科学定位性能瓶颈.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39 高性能的关键：shared dict 缓存和 lru 缓存.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/39%20%e9%ab%98%e6%80%a7%e8%83%bd%e7%9a%84%e5%85%b3%e9%94%ae%ef%bc%9ashared%20dict%20%e7%bc%93%e5%ad%98%e5%92%8c%20lru%20%e7%bc%93%e5%ad%98.md">39 高性能的关键：shared dict 缓存和 lru 缓存.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40 缓存与风暴并存，谁说缓存风暴不可避免？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/40%20%e7%bc%93%e5%ad%98%e4%b8%8e%e9%a3%8e%e6%9a%b4%e5%b9%b6%e5%ad%98%ef%bc%8c%e8%b0%81%e8%af%b4%e7%bc%93%e5%ad%98%e9%a3%8e%e6%9a%b4%e4%b8%8d%e5%8f%af%e9%81%bf%e5%85%8d%ef%bc%9f.md">40 缓存与风暴并存，谁说缓存风暴不可避免？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="41 lua-resty-_ 封装，让你远离多级缓存之痛.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/41%20lua-resty-_%20%e5%b0%81%e8%a3%85%ef%bc%8c%e8%ae%a9%e4%bd%a0%e8%bf%9c%e7%a6%bb%e5%a4%9a%e7%ba%a7%e7%bc%93%e5%ad%98%e4%b9%8b%e7%97%9b.md">41 lua-resty-_ 封装，让你远离多级缓存之痛.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="42 如何应对突发流量：漏桶和令牌桶的概念.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/42%20%e5%a6%82%e4%bd%95%e5%ba%94%e5%af%b9%e7%aa%81%e5%8f%91%e6%b5%81%e9%87%8f%ef%bc%9a%e6%bc%8f%e6%a1%b6%e5%92%8c%e4%bb%a4%e7%89%8c%e6%a1%b6%e7%9a%84%e6%a6%82%e5%bf%b5.md">42 如何应对突发流量：漏桶和令牌桶的概念.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="43 灵活实现动态限流限速，其实没有那么难.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/43%20%e7%81%b5%e6%b4%bb%e5%ae%9e%e7%8e%b0%e5%8a%a8%e6%80%81%e9%99%90%e6%b5%81%e9%99%90%e9%80%9f%ef%bc%8c%e5%85%b6%e5%ae%9e%e6%b2%a1%e6%9c%89%e9%82%a3%e4%b9%88%e9%9a%be.md">43 灵活实现动态限流限速，其实没有那么难.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="44 OpenResty 的杀手锏：动态.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/44%20OpenResty%20%e7%9a%84%e6%9d%80%e6%89%8b%e9%94%8f%ef%bc%9a%e5%8a%a8%e6%80%81.md">44 OpenResty 的杀手锏：动态.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="45 不得不提的能力外延：OpenResty常用的第三方库.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/45%20%e4%b8%8d%e5%be%97%e4%b8%8d%e6%8f%90%e7%9a%84%e8%83%bd%e5%8a%9b%e5%a4%96%e5%bb%b6%ef%bc%9aOpenResty%e5%b8%b8%e7%94%a8%e7%9a%84%e7%ac%ac%e4%b8%89%e6%96%b9%e5%ba%93.md">45 不得不提的能力外延：OpenResty常用的第三方库.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="46 答疑（四）：共享字典的缓存是必须的吗？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/46%20%e7%ad%94%e7%96%91%ef%bc%88%e5%9b%9b%ef%bc%89%ef%bc%9a%e5%85%b1%e4%ba%ab%e5%ad%97%e5%85%b8%e7%9a%84%e7%bc%93%e5%ad%98%e6%98%af%e5%bf%85%e9%a1%bb%e7%9a%84%e5%90%97%ef%bc%9f.md">46 答疑（四）：共享字典的缓存是必须的吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="47 微服务API网关搭建三步曲（一）.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/47%20%e5%be%ae%e6%9c%8d%e5%8a%a1API%e7%bd%91%e5%85%b3%e6%90%ad%e5%bb%ba%e4%b8%89%e6%ad%a5%e6%9b%b2%ef%bc%88%e4%b8%80%ef%bc%89.md">47 微服务API网关搭建三步曲（一）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="48 微服务API网关搭建三步曲（二）.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/48%20%e5%be%ae%e6%9c%8d%e5%8a%a1API%e7%bd%91%e5%85%b3%e6%90%ad%e5%bb%ba%e4%b8%89%e6%ad%a5%e6%9b%b2%ef%bc%88%e4%ba%8c%ef%bc%89.md">48 微服务API网关搭建三步曲（二）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="49 微服务API网关搭建三步曲（三）.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/49%20%e5%be%ae%e6%9c%8d%e5%8a%a1API%e7%bd%91%e5%85%b3%e6%90%ad%e5%bb%ba%e4%b8%89%e6%ad%a5%e6%9b%b2%ef%bc%88%e4%b8%89%ef%bc%89.md">49 微服务API网关搭建三步曲（三）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="50 答疑（五）：如何在工作中引入 OpenResty？.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/50%20%e7%ad%94%e7%96%91%ef%bc%88%e4%ba%94%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e5%9c%a8%e5%b7%a5%e4%bd%9c%e4%b8%ad%e5%bc%95%e5%85%a5%20OpenResty%ef%bc%9f.md">50 答疑（五）：如何在工作中引入 OpenResty？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="结束语 行百里者半九十.md" href="/%e4%b8%93%e6%a0%8f/OpenResty%e4%bb%8e%e5%85%a5%e9%97%a8%e5%88%b0%e5%ae%9e%e6%88%98/%e7%bb%93%e6%9d%9f%e8%af%ad%20%e8%a1%8c%e7%99%be%e9%87%8c%e8%80%85%e5%8d%8a%e4%b9%9d%e5%8d%81.md">结束语 行百里者半九十.md</a>
                    </li>
                    
                    <li><a href="https://lianglianglee.com/assets/%E6%8D%90%E8%B5%A0.md">捐赠</a></li>
                </ul>

            </div>
        </div>

        <div class="sidebar-toggle" onclick="sidebar_toggle()" onmouseover="add_inner()" onmouseleave="remove_inner()">
            <div class="sidebar-toggle-inner"></div>
        </div>
        <div class="off-canvas-content">
            <div class="columns">
                <div class="column col-12 col-lg-12">
                    <div class="book-navbar">
                        
                        <header class="navbar">
                            <section class="navbar-section">
                                <a onclick="open_sidebar()">
                                    <i class="icon icon-menu"></i>
                                </a>
                            </section>
                        </header>
                    </div>
                    <div class="book-content" style="max-width: 960px; margin: 0 auto;
    overflow-x: auto;
    overflow-y: hidden;">
                        <div class="book-post">
                            
                            
                            
                            <p id="tip" align="center"></p>
                            <h1 id="title" data-id="18 worker间的通信法宝：最重要的数据结构之shared dict" class="title">18 worker间的通信法宝：最重要的数据结构之shared dict</h1>
                            <div><p>你好，我是温铭。</p>

<p>前面我们讲过，在 Lua 中， table 是唯一的数据结构。与之对应的一个事实是，共享内存字典shared dict，是你在 OpenResty 编程中最为重要的数据结构。它不仅支持数据的存放和读取，还支持原子计数和队列操作。</p>

<p>基于 shared dict，你可以实现多个 worker 之间的缓存和通信，以及限流限速、流量统计等功能。你可以把 shared dict 当作简单的 Redis 来使用，只不过 shared dict 中的数据不能持久化，所以你存放在其中的数据，一定要考虑到丢失的情况。</p>

<h2 id="数据共享的几种方式">数据共享的几种方式</h2>

<p>在编写 OpenResty Lua 代码的过程中，你不可避免地会遇到，在一个请求的不同阶段、不同 worker 之间共享数据的情况，还可能需要在 Lua 和 C 代码之间共享数据。</p>

<p>所以，在正式介绍 shared dict 的 API 之前，先让我们了解一下，OpenResty 中常见的几种数据共享的方法；并学会根据实际情况，选择较为合适的数据共享方式。</p>

<p><strong>第一种是 Nginx 中的变量</strong>。它可以在 Nginx C 模块之间共享数据，自然的，也可以在 C 模块和 OpenResty 提供的 <code>lua-nginx-module</code> 之间共享数据，比如下面这段代码：</p>

<pre><code>location /foo {
     set $my_var ''; # this line is required to create $my_var at config time
     content_by_lua_block {
         ngx.var.my_var = 123;
         ...
     }
 }
</code></pre>

<p>不过，使用 Nginx 变量这种方式来共享数据是比较慢的，因为它涉及到 hash 查找和内存分配。同时，这种方法有其局限性，只能用来存储字符串，不能支持复杂的 Lua 类型。</p>

<p><strong>第二种是<code>ngx.ctx</code>，可以在同一个请求的不同阶段之间共享数据</strong>。它其实就是一个普通的 Lua 的 table，所以速度很快，还可以存储各种 Lua 的对象。它的生命周期是请求级别的，当一个请求结束的时候，<code>ngx.ctx</code> 也会跟着被销毁掉。</p>

<p>下面是一个典型的使用场景，我们用 <code>ngx.ctx</code> 来缓存 <code>Nginx 变量</code> 这种昂贵的调用，并在不同阶段都可以使用到它：</p>

<pre><code>location /test {
     rewrite_by_lua_block {
         ngx.ctx.host = ngx.var.host
     }
     access_by_lua_block {
        if (ngx.ctx.host == 'openresty.org') then
            ngx.ctx.host = 'test.com'
        end
     }
     content_by_lua_block {
         ngx.say(ngx.ctx.host)
     }
 }
</code></pre>

<p>这时，如果你使用 curl 访问的话：</p>

<pre><code>curl -i 127.0.0.1:8080/test -H 'host:openresty.org'
</code></pre>

<p>就会打印出 <code>test.com</code>，可以表明 <code>ngx.ctx</code> 的确是在不同阶段共享了数据。当然，你还可以自己动手修改上面的例子，保存 table 等更复杂的对象，而非简单的字符串，看看它是否满足你的预期。</p>

<p>不过，这里需要特别注意的是，正因为 <code>ngx.ctx</code> 的生命周期是请求级别的，所以它并不能在模块级别进行缓存。比如，我在 <code>foo.lua</code> 文件中这样使用就是错误的：</p>

<pre><code>local ngx_ctx = ngx.ctx

local function bar()
    ngx_ctx.host =  'test.com'
end
</code></pre>

<p>我们应该在函数级别进行调用和缓存：</p>

<pre><code>local ngx = ngx

local function bar()
    ngx_ctx.host =  'test.com'
end
</code></pre>

<p><code>ngx.ctx</code> 还有很多的细节，后面的性能优化部分，我们再继续探讨。</p>

<p>接着往下看，<strong>第三种方法是使用<code>模块级别的变量</code>，在同一个 worker 内的所有请求之间共享数据</strong>。跟前面的 Nginx 变量和 <code>ngx.ctx</code> 不一样，这种方法有些不太好理解。不过别着急，概念抽象，代码先行，让我们先来看个例子，弄明白什么是 <code>模块级别的变量</code>：</p>

<pre><code>-- mydata.lua
 local _M = {}

 local data = {
     dog = 3,
     cat = 4,
     pig = 5,
 }

 function _M.get_age(name)
     return data[name]
 end

 return _M
</code></pre>

<p>在 nginx.conf 的配置如下：</p>

<pre><code>location /lua {
     content_by_lua_block {
         local mydata = require &quot;mydata&quot;
         ngx.say(mydata.get_age(&quot;dog&quot;))
     }
 }
</code></pre>

<p>在这个示例中，<code>mydata</code> 就是一个模块，它只会被 worker 进程加载一次，之后，这个 worker 处理的所有请求，都会共享 <code>mydata</code> 模块的代码和数据。</p>

<p>自然，<code>mydata</code> 模块中的 <code>data</code> 这个变量，就是 <code>模块级别的变量</code>，它位于模块的 top level，也就是模块最开始的位置，所有函数都可以访问到它。</p>

<p>所以，你可以把需要在请求间共享的数据，放在模块的 top level 变量中。不过，需要特别注意的是，一般我们只用这种方式来保存<strong>只读的数据</strong>。如果涉及到写操作，你就要非常小心了，因为可能会有 <strong>race condition</strong>，这是<strong>非常难以定位的 bug</strong>。</p>

<p>我们可以通过下面这个最简化的例子来体会下：</p>

<pre><code>-- mydata.lua
 local _M = {}

 local data = {
     dog = 3,
     cat = 4,
     pig = 5,
 }

 function _M.incr_age(name)
     data[name]  = data[name] + 1
    return data[name]
 end

 return _M
</code></pre>

<p>在模块中，我们增加了 <code>incr_age</code> 这个函数，它会对 data 这个表的数据进行修改。</p>

<p>然后，在调用的代码中，我们增加了最关键的一行 <code>ngx.sleep(5)</code>，这个 sleep 是一个 yield 操作：</p>

<pre><code>location /lua {
     content_by_lua_block {
         local mydata = require &quot;mydata&quot;
         ngx.say(mydata. incr_age(&quot;dog&quot;))
         ngx.sleep(5) -- yield API
         ngx.say(mydata. incr_age(&quot;dog&quot;))
     }
 }
</code></pre>

<p>如果没有这行 sleep 代码（也可以是其他的非阻塞 IO 操作，比如访问 Redis 等），就不会有 yield 操作，也就不会产生竞争，那么，最后输出的数字就是顺序的。</p>

<p>但当我们加了这行代码后，哪怕只是在 sleep 的 5 秒钟内，也很可能就有其他请求调用了<code>mydata. incr_age</code> 函数，修改了变量的值，从而导致最后输出的数字不连续。要知道，在实际的代码中，逻辑不会这么简单，bug 的定位也一定会困难得多。</p>

<p>所以，除非你很确定这中间没有 yield 操作，不会把控制权交给 Nginx 事件循环，否则，我建议你还是保持对模块级别变量的只读。</p>

<p><strong>第四种，也是最后一种方法，用 shared dict 来共享数据，这些数据可以在多个 worker 之间共享。</strong></p>

<p>这种方法是基于红黑树实现的，性能很好，但也有自己的局限性——你必须事先在 Nginx 的配置文件中，声明共享内存的大小，并且这不能在运行期更改：</p>

<pre><code>lua_shared_dict dogs 10m;
</code></pre>

<p>shared dict 同样只能缓存字符串类型的数据，不支持复杂的 Lua 数据类型。这也就意味着，当我需要存放 table 等复杂的数据类型时，我将不得不使用 json 或者其他的方法，来序列化和反序列化，这自然会带来不小的性能损耗。</p>

<p>总之，还是那句话，这里并没有银弹，不存在一种完美的数据共享方式，你需要根据需求和场景，来组合多个方法来使用。</p>

<h2 id="共享字典">共享字典</h2>

<p>上面数据共享的部分，我们花了很多的篇幅来学，有的人可能纳闷儿：它们看上去和 shared dict 没有直接关系，是不是有些文不对题呢？</p>

<p>事实并非如此，你可以自己想一下，为什么 OpenResty 中要有 shared dict 的存在呢？</p>

<p>回忆一下刚刚讲的几种方法，前面三种数据共享的范围都是在请求级别，或者单个 worker 级别。所以，在当前的 OpenResty 的实现中，只有 shared dict 可以完成 worker 间的数据共享，并借此实现 worker 之间的通信，这也是它存在的价值。</p>

<p>在我看来，明白一个技术为何存在，并弄清楚它和别的类似技术之间的差异和优势，远比你只会熟练调用它提供的 API 更为重要。这种技术视野，会给你带来一定程度的远见和洞察力，这也可以说是工程师和架构师的一个重要区别。</p>

<p>回到共享字典本身，它对外提供了 20多个 Lua API，不过所有的这些 API 都是原子操作，你不用担心多个 worker 和高并发的情况下的竞争问题。</p>

<p>这些 API 都有官方详细的<a href="https://github.com/openresty/lua-nginx-module#ngxshareddict" target="_blank">文档</a>，我就不再一一赘述了。这里我想再强调一下，任何技术课程的学习，都不能代替对官方文档的仔细研读。这些耗时的笨功夫，每个人都省不掉的。</p>

<p>继续看shared dict 的 API，这些 API可以分为下面三个大类，也就是字典读写类、队列操作类和管理类这三种。</p>

<h3 id="字典读写类">字典读写类</h3>

<p>首先来看字典读写类。在最初的版本中，只有字典读写类的 API，它们也是共享字典最常用的功能。下面是一个最简单的示例：</p>

<pre><code>$ resty --shdict='dogs 1m' -e 'local dict = ngx.shared.dogs
                               dict:set(&quot;Tom&quot;, 56)
                               print(dict:get(&quot;Tom&quot;))'
</code></pre>

<p>除了 set 外，OpenResty 还提供了 <code>safe_set</code>、<code>add</code>、<code>safe_add</code>、<code>replace</code> 这四种写入的方法。这里<code>safe</code> 前缀的含义是，在内存占满的情况下，不根据 LRU 淘汰旧的数据，而是写入失败并返回 <code>no memory</code> 的错误信息。</p>

<p>除了 get 外，OpenResty 还提供了 <code>get_stale</code> 的读取数据的方法，相比 <code>get</code> 方法，它多了一个过期数据的返回值：</p>

<pre><code>value, flags, stale = ngx.shared.DICT:get_stale(key)
</code></pre>

<p>你还可以调用 <code>delete</code> 方法来删除指定的 key，它和 <code>set(key, nil)</code> 是等价的。</p>

<h3 id="队列操作类">队列操作类</h3>

<p>再来看队列操作，它是 OpenResty 后续新增的功能，提供了和 Redis 类似的接口。队列中的每一个元素，都用 <code>ngx_http_lua_shdict_list_node_t</code> 来描述：</p>

<pre><code>typedef struct { 
    ngx_queue_t queue; 
    uint32_t value_len; 
    uint8_t value_type; 
    u_char data[1]; 
} ngx_http_lua_shdict_list_node_t;
</code></pre>

<p>我把这些队列操作 API 的 <a href="https://github.com/openresty/lua-nginx-module/pull/586/files" target="_blank">PR</a> 贴在了文章中，如果你对此感兴趣，可以跟着文档、测试案例和源码，来分析具体的实现。</p>

<p>不过，下面这 5 个队列 API，在文档中并没有对应的代码示例，这里我简单介绍一下：</p>

<ul>
<li>lpush/rpush，表示在队列两端增加元素；</li>
<li>lpop/rpop，表示在队列两端弹出元素；</li>
<li>llen，表示返回队列的元素数量。</li>
</ul>

<p>别忘了我们上节课讲过的另一个利器——测试案例。如果文档中没有，我们通常可以在测试案例中找到对应的代码。队列相关的测试，正是在 <code>145-shdict-list.t</code> 这个文件中：</p>

<pre><code>=== TEST 1: lpush &amp; lpop
--- http_config
    lua_shared_dict dogs 1m;
--- config
    location = /test {
        content_by_lua_block {
            local dogs = ngx.shared.dogs

            local len, err = dogs:lpush(&quot;foo&quot;, &quot;bar&quot;)
            if len then
                ngx.say(&quot;push success&quot;)
            else
                ngx.say(&quot;push err: &quot;, err)
            end

            local val, err = dogs:llen(&quot;foo&quot;)
            ngx.say(val, &quot; &quot;, err)

            local val, err = dogs:lpop(&quot;foo&quot;)
            ngx.say(val, &quot; &quot;, err)

            local val, err = dogs:llen(&quot;foo&quot;)
            ngx.say(val, &quot; &quot;, err)

            local val, err = dogs:lpop(&quot;foo&quot;)
            ngx.say(val, &quot; &quot;, err)
        }
    }
--- request
GET /test
--- response_body
push success
1 nil
bar nil
0 nil
nil nil
--- no_error_log
[error]
</code></pre>

<h3 id="管理类">管理类</h3>

<p>最后要说的管理类 API 也是后续新增的，属于社区呼声比较高的需求。其中，共享内存的使用情况就是最典型的例子。比如，用户申请了 100M 的空间作为 shared dict，那么这 100M 是否够用呢？里面存放了多少 key？具体是哪些 key 呢？这几个都是非常现实的问题。</p>

<p>对于这类问题，OpenResty 的官方态度，是希望用户使用火焰图来解决，即非侵入式，保持代码基的高效和整洁，而不是提供侵入式的 API 来直接返回结果。</p>

<p>但站在使用者友好角度来考虑，这些管理类 API 还是非常有必要的。毕竟开源项目是用来解决产品需求的，并不是展示技术本身的。所以，下面我们就来了解一下，这几个后续增加的管理类 API。</p>

<p>首先是 <code>get_keys(max_count?)</code>，它默认也只返回前 1024 个 key；如果你把 <code>max_count</code> 设置为 0，那就返回所有 key。</p>

<p>然后是 <code>capacity</code> 和 <code>free_space</code>，这两个 API 都属于 lua-resty-core 仓库，所以需要你 require 后才能使用：</p>

<pre><code>require &quot;resty.core.shdict&quot;

 local cats = ngx.shared.cats
 local capacity_bytes = cats:capacity()
 local free_page_bytes = cats:free_space()
</code></pre>

<p>它们分别返回的，是共享内存的大小（也就是 <code>lua_shared_dict</code> 中配置的大小）和空闲页的字节数。因为 shared dict 是按照页来分配的，即使 <code>free_space</code> 返回为 0，在已经分配的页面中也可能存在空间，所以它的返回值并不能代表共享内存实际被占用的情况。</p>

<h2 id="写在最后">写在最后</h2>

<p>在实际的开发中，我们经常会用到多级缓存，OpenResty 的官方项目中也有对缓存的封装。你能找出来是哪几个项目吗？或者你知道一些其他缓存封装的 lua-resty 库吗？</p>

<p>欢迎留言和我分享，也欢迎你把这篇文章分享给你的同事、朋友，我们一起交流，一起进步。</p>
</div>
                        </div>
                        <div>
                            <div id="prePage" style="float: left">

                            </div>
                            <div id="nextPage" style="float: right">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="copyright">
                <hr />
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#89e5e5e5b0bdb8b8b9bec9eee4e8e0e5a7eae6e4" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f1190dec90794f1',t:'MTczNDA0Njg5NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>