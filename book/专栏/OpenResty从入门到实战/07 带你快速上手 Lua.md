<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=07&#32;带你快速上手&#32;Lua>
        <link rel="icon" href="/static/favicon.png">
        <title>07 带你快速上手 Lua </title>
        
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
                            <h1 id="title" data-id="07 带你快速上手 Lua" class="title">07 带你快速上手 Lua</h1>
                            <div><p>你好，我是温铭。</p>

<p>在大概了解 NGINX 的基础知识后，接下来，我们就要来进一步学习 Lua了。它是 OpenResty 中使用的编程语言，掌握它的基本语法还是很有必要的。</p>

<p>Lua 是一个小巧精妙的脚本语言，诞生于巴西的大学实验室，这个名字在葡萄牙语里的含义是“美丽的月亮”。从作者所在的国家来看，NGINX 诞生于俄罗斯，Lua 诞生于巴西，OpenResty 诞生于中国，这三门同样精巧的开源技术都出自金砖国家，而不是欧美，也是挺有趣的一件事。</p>

<p>回到Lua语言上。事实上，Lua 在设计之初，就把自己定位为一个简单、轻量、可嵌入的胶水语言，没有走大而全的路线。虽然你平常工作中可能没有直接编写 Lua 代码，但 Lua 的使用其实非常广泛。很多的网游，比如魔兽世界，都会采用 Lua 来编写插件；而键值数据库 Redis 则是内置了 Lua 来控制逻辑。</p>

<p>另一方面，虽然 Lua 自身的库比较简单，但它可以方便地调用 C 库，大量成熟的 C 代码都可以为其所用。比如在 OpenResty 中，很多时候都需要你调用 NGINX 和 OpenSSL 的 C 函数，而这都得益于 Lua 和 LuaJIT 这种方便调用 C 库的能力。</p>

<p>下面，我带你来快速熟悉下 Lua 的数据类型和语法，以便你后面更顺畅地学习 OpenResty。</p>

<h2 id="环境和-hello-world">环境和 hello world</h2>

<p>我们不用专门去安装标准 Lua 5.1 之类的环境，因为 OpenResty 已经不再支持标准 Lua，而只支持 LuaJIT。这里我介绍的 Lua 语法，也是和 LuaJIT 兼容的部分，而不是基于最新的 Lua 5.3，这一点需要你特别注意。</p>

<p>在 OpenResty 的安装目录下，你可以找到 LuaJIT 的目录和可执行文件。我这里是 Mac 环境，使用 brew 安装 OpenResty，所以你本地的路径很可能和下面的不同：</p>

<pre><code>$ ll /usr/local/Cellar/openresty/1.13.6.2/luajit/bin/luajit
 lrwxr-xr-x  1 ming  admin    18B  4  2 14:54 /usr/local/Cellar/openresty/1.13.6.2/luajit/bin/luajit -&gt; luajit-2.1.0-beta3
</code></pre>

<p>你也可以在系统的可执行文件目录中找到它：</p>

<pre><code>$ which luajit
 /usr/local/bin/luajit
</code></pre>

<p>并查看 LuaJIT 的版本号：</p>

<pre><code>$ luajit -v
 LuaJIT 2.1.0-beta2 -- Copyright (C) 2005-2017 Mike Pall. http://luajit.org/
</code></pre>

<p>查清楚这些信息后，你可以新建一个 <code>1.lua</code> 文件，并用 luajit 来运行其中的 hello world 代码：</p>

<pre><code>$ cat 1.lua
print(&quot;hello world&quot;)

$ luajit 1.lua
 hello world
</code></pre>

<p>当然，你还可以使用 <code>resty</code> 来直接运行，要知道，它最终也是用 LuaJIT 来执行的：</p>

<pre><code>$ resty -e 'print(&quot;hello world&quot;)'
 hello world
</code></pre>

<p>上述两种运行 hello world 的方式都是可行的。不顾对我来说，我更喜欢 <code>resty</code> 这种方式，因为后面很多 OpenResty 的代码，也都是通过 <code>resty</code> 来运行的。</p>

<h2 id="数据类型">数据类型</h2>

<p>Lua 中的数据类型不多，你可以通过 <code>type</code> 函数来返回一个值的类型，比如下面这样的操作：</p>

<pre><code>$ resty -e 'print(type(&quot;hello world&quot;)) 
 print(type(print)) 
 print(type(true)) 
 print(type(360.0))
 print(type({}))
 print(type(nil))
 '
</code></pre>

<p>会打印出如下内容：</p>

<pre><code> string
 function
 boolean
 number
 table
 nil
</code></pre>

<p>这几种就是 Lua 中的基本数据类型了。下面我们来简单介绍一下它们。</p>

<h3 id="字符串">字符串</h3>

<p>在 Lua 中，字符串是不可变的值，如果你要修改某个字符串，就等于创建了一个新的字符串。这种做法显然有利有弊：好处是即使同一个字符串出现了很多次，在内存中也只有一份；但劣势也很明显，如果你想修改、拼接字符串，会额外地创建很多不必要的字符串。</p>

<p>我们举一个例子，来说明这个弊端。下面这段代码，是把 1 到 10 这些数字当作字符串拼接起来。对了，在 Lua 中，我们使用两个点号来表示字符串的相加：</p>

<pre><code>$ resty -e 'local s  = &quot;&quot;
 for i = 1, 10 do
     s = s .. tostring(i)
 end
 print(s)'
</code></pre>

<p>这里我们循环了 10 次，但只有最后一次是我们想要的，而中间新建的 9 个字符串都是无用的。它们不仅占用了额外的空间，也消耗了不必要的 CPU 运算。</p>

<p>当然，在后面的性能优化章节，我们会有对应的方法来解决它。</p>

<p>另外，在 Lua 中，你有三种方式可以表达一个字符串：单引号、双引号，以及长括号（<code>[[]]</code>）。前面两种都比较好理解，别的语言一般也这么用，那么长括号有什么用处呢？</p>

<p>我们看一个具体的示例：</p>

<pre><code>$ resty -e 'print([[string has \n and \r]])'
 string has \n and \r
</code></pre>

<p>你可以看到，长括号中的字符串不会做任何的转义处理。</p>

<p>你也许会问另外一个问题：如果上面那段字符串中包括了长括号本身，又该怎么处理呢？答案很简单，就是在长括号中间增加一个或者多个 <code>=</code> 符号：</p>

<pre><code>$ resty -e 'print([=[ string has a [[]]. ]=])'
  string has a [[]].
</code></pre>

<h3 id="布尔值">布尔值</h3>

<p>这个很简单，true 和 false。但在 Lua 中，只有 nil 和 false 为假，其他都为真，包括 0 和空字符串也为真。我们可以用下面的代码印证一下：</p>

<pre><code>$ resty -e 'local a = 0
 if a then
   print(&quot;true&quot;)
 end
 a = &quot;&quot;
 if a then
   print(&quot;true&quot;)
 end'
</code></pre>

<p>这种判断方式和很多常见的开发语言并不一致，所以，为了避免在这种问题上出错，你可以显式地写明比较的对象，比如下面这样：</p>

<pre><code>$ resty -e 'local a = 0
 if a == false then
   print(&quot;true&quot;)
 end
 '
</code></pre>

<h3 id="数字">数字</h3>

<p>Lua 的 number 类型，是用双精度浮点数来实现的。值得一提的是，LuaJIT 支持 <code>dual-number</code>（双数）模式，也就是说， LuaJIT 会根据上下文来用整型来存储整数，而用双精度浮点数来存放浮点数。</p>

<p>此外，LuaJIT 还支持<code>长长整型</code>的大整数，比如下面的例子：</p>

<pre><code>$ resty -e 'print(9223372036854775807LL - 1)'
9223372036854775806LL
</code></pre>

<h3 id="函数">函数</h3>

<p>函数在 Lua 中是一等公民，你可以把函数存放在一个变量中，也可以当作另外一个函数的入参和出参。</p>

<p>比如，下面两个函数的声明是完全等价的：</p>

<pre><code>function foo()
 end
</code></pre>

<p>和</p>

<pre><code>foo = function ()
 end
</code></pre>

<h3 id="table">table</h3>

<p>table 是 Lua 中唯一的数据结构，自然非常重要，所以后面我会用专门的章节来介绍它。我们可以先来看一个简单的示例代码：</p>

<pre><code>$ resty -e 'local color = {first = &quot;red&quot;}
print(color[&quot;first&quot;])'
 red
</code></pre>

<h3 id="空值">空值</h3>

<p>在 Lua 中，空值就是 nil。如果你定义了一个变量，但没有赋值，它的默认值就是 nil：</p>

<pre><code>$ resty -e 'local a
 print(type(a))'
 nil
</code></pre>

<p>当你真正进入 OpenResty 体系中后，会发现很多种空值，比如 <code>ngx.null</code> 等等，我们后面再细聊。</p>

<p>Lua的数据类型，我主要就介绍这么多，先给你打个基础。一些需要重点掌握的内容，后面的文章中我们都会继续学习。在练习、使用中学习，永远是吸收新知识最便捷的方式。</p>

<h2 id="常用标准库">常用标准库</h2>

<p>很多时候，我们学习一门语言，其实就是在学习它的标准库。</p>

<p>Lua 比较小巧，内置的标准库并不多。而且，在 OpenResty 的环境中，Lua 标准库的优先级是很低的。对于同一个功能，我更推荐你优先使用 OpenResty 的 API 来解决，然后是 LuaJIT 的库函数，最后才是标准 Lua 的函数。</p>

<p><code>OpenResty的API &gt; LuaJIT的库函数 &gt; 标准Lua的函数</code>，这个优先级后面会被反复提及，它不仅关系到是否好用这一点，更会对性能产生非常大的影响。</p>

<p>不过，尽管如此，在实际的项目开发中，我们还是不可避免会用到一些 Lua 库。这里，我挑选了几个比较常用的标准库做下介绍，如果你想要了解更多内容，可以查阅 Lua 的官方文档。</p>

<h3 id="string-库">string 库</h3>

<p>字符串操作是我们最常用到的，也是坑最多的地方。有一个简单的原则，那就是如果涉及到正则表达式的，请一定要使用 OpenResty 提供的 <code>ngx.re.*</code> 来解决，不要用 Lua 的 <code>string.*</code> 处理。这是因为，Lua 的正则独树一帜，不符合 PCRE 的规范，我相信绝大部分工程师是玩不转的。</p>

<p>其中 <code>string.byte(s [, i [, j ]])</code>，是比较常用到的一个 string 库函数，它返回字符 s[i]、s[i + 1]、s[i + 2]、······、s[j] 所对应的 ASCII 码。i 的默认值为 1，即第一个字节，j 的默认值为 i。</p>

<p>下面我们来看一段示例代码：</p>

<pre><code>$ resty -e 'print(string.byte(&quot;abc&quot;, 1, 3))
 print(string.byte(&quot;abc&quot;, 3)) -- 缺少第三个参数，第三个参数默认与第二个相同，此时为 3
 print(string.byte(&quot;abc&quot;))    -- 缺少第二个和第三个参数，此时这两个参数都默认为 1
 '
</code></pre>

<p>它的输出为：</p>

<pre><code> 979899
 99
 97
</code></pre>

<h3 id="table-库">table 库</h3>

<p>在 OpenResty 的上下文中，对于Lua 自带的 table 库，除了 <code>table.concat</code> 、<code>table.sort</code> 等少数几个函数，大部分我都不推荐使用。至于它们的细节，我们留在 LuaJIT 章节中专门来讲。</p>

<p>这里我简单提一下<code>table.concat</code> 。<code>table.concat</code>一般用在字符串拼接的场景下，比如下面这个例子。它可以避免生成很多无用的字符串。</p>

<pre><code>$ resty -e 'local a = {&quot;A&quot;, &quot;b&quot;, &quot;C&quot;}
 print(table.concat(a))'
</code></pre>

<h3 id="math-库">math 库</h3>

<p>Lua math 库由一组标准的数学函数构成。数学库的引入，既丰富了 Lua 编程语言的功能，同时也方便了程序的编写。</p>

<p>在 OpenResty 的实际项目中，我们很少用 Lua 去做数学方面的运算，不过其中和随机数相关的 <code>math.random()</code> 和 <code>math.randomseed()</code> 两个函数，倒是比较常用，比如下面的这段代码，它可以在指定的范围内，随机地生成两个数字。</p>

<pre><code>$ resty -e 'math.randomseed (os.time()) 
print(math.random())
 print(math.random(100))'
</code></pre>

<h2 id="虚变量">虚变量</h2>

<p>了解了这些常见的标准库，接下来，我们再来学习一个新的概念——虚变量。</p>

<p>设想这么一个场景，当一个函数返回多个值的时候，有些返回值我们并不需要，这时候，应该怎么接收这些值呢？</p>

<p>不知道你是怎么看待这件事的，起码对我来说，要想法设法给这些用不到的变量，去赋予有意义的名字，着实是一件很折磨人的事情。</p>

<p>还好， Lua 中可以完美地解决这一点。Lua 提供了一个虚变量（dummy variable）的概念， 按照惯例以一个下划线来命名，用来表示丢弃不需要的数值，仅仅起到占位的作用。</p>

<p>下面我们以 <code>string.find</code> 这个标准库函数为例，来看虚变量的用法。这个标准库函数会返回两个值，分别代表开始和结束的下标。</p>

<p>如果我们只需要获取开始的下标，那么很简单，只声明一个变量来接收 <code>string.find</code> 的返回值即可：</p>

<pre><code>$ resty -e 'local start = string.find(&quot;hello&quot;, &quot;he&quot;)
 print(start)'
 1
</code></pre>

<p>但如果你只想获取结束的下标，那就必须使用虚变量了：</p>

<pre><code>$ resty -e 'local  _, end_pos = string.find(&quot;hello&quot;, &quot;he&quot;)
 print(end_pos)'
 2
</code></pre>

<p>除了在返回值里使用，虚变量还经常用于循环中，比如下面这个例子：</p>

<pre><code>$ resty -e 'for _, v in ipairs({4,5,6}) do
     print(v)
 end'
 4
 5
 6
</code></pre>

<p>而当有多个返回值需要忽略时，你可以重复使用同一个虚变量。这里我就不举例子了，你可以试着自己写一个这样的示例代码吗？欢迎你把代码贴在留言区里和我分享、交流。</p>

<h2 id="写在最后">写在最后</h2>

<p>今天，我们一起快速地学习了标准 Lua 的数据结构和语法，相信你对这门简单精巧的语言已经有了初步的了解。下节课，我会带你了解 Lua 和 LuaJIT 的关系，LuaJIT 更是 OpenResty 中的重头戏，值得我们深入挖掘。</p>

<p>最后，我想再为你留下一道思考题。</p>

<p>还记得这节课讲math库时，学过的这段代码吗？它可以在指定范围内，随机生成两个数字。</p>

<pre><code>$ resty -e 'math.randomseed (os.time()) 
print(math.random())
 print(math.random(100))'
</code></pre>

<p>不过，你可能注意到了，这段代码是用当前时间戳作为种子的，那么这种方法是否有问题呢？又该如何生成好的种子呢？要知道，很多时候我们生成的随机数其实并不随机，并且有很大的安全隐患。</p>

<p>欢迎在留言区来说说你的看法，也欢迎你把这篇文章转发给你的同事、朋友。我们一起交流、一起进步。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#0c60606035383d3d3c3b4c6b616d6560226f6361" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f118ec96d0c94f1',t:'MTczNDA0NjgwOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>