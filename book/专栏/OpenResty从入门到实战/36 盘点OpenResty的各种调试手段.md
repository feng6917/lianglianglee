<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=36&#32;盘点OpenResty的各种调试手段>
        <link rel="icon" href="/static/favicon.png">
        <title>36 盘点OpenResty的各种调试手段 </title>
        
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
                            <h1 id="title" data-id="36 盘点OpenResty的各种调试手段" class="title">36 盘点OpenResty的各种调试手段</h1>
                            <div><p>你好，我是温铭。</p>

<p>在 OpenResty 的交流群里面，经常会有开发者提出这样的疑问：OpenResty 里面怎么调试呢？据我所知，OpenResty 中有一些支持断点调试的工具，包括 VSCode 中的插件，但至今使用并不广泛。包括作者 agentzh 以及我认识的几个贡献者在内，大家都是使用最简单的 <code>ngx.log</code> 和 <code>ngx.say</code> 来做调试。</p>

<p>显然，这对于大部分的新手来说并不友好。难道说众多 OpenResty 的核心维护者们，在遇到疑难杂症的时候，手里就只有打印日志这个原始的方法了吗？</p>

<p>当然不是，在 OpenResty 的世界中，SystemTap 和火焰图，才是处理棘手问题和性能问题的标准利器。如果你在邮件列表或者 issue 里面有这方面的提问，项目的维护者肯定会让你上传火焰图，要求用图说话而不是文字描述。</p>

<p>接下来的两节课，我就和你聊聊调试，以及 OpenResty 专门为调试而创造的工具集。今天我们先来看下，有哪些调试程序的方法。</p>

<h2 id="断点和打印日志">断点和打印日志</h2>

<p>在我工作的很长一段时间里面，我都是依赖编辑器的高级调试功能来跟踪程序的，这个看上去也是理所当然的。对于能在测试环境中重现的问题，不管有多复杂，我都有信心可以找到问题的根源，这是因为，这个 bug 可以被不停地重复制造出来。只要通过设置断点和增加日志，问题的根源就会慢慢浮出水面，你所需要的，只是耐心罢了。</p>

<p>从这个角度来看，解决测试环境中稳定复现的 bug，实际上是一个体力活。我工作中解决的绝大部分 bug 都属于这一类。</p>

<p>不过要注意，这里有两个前提：测试环境，以及稳定复现。现实总没有那么理想，如果是线上环境才会复现的 bug，是否有调试的方法呢？</p>

<p>这里我推荐一个工具——Mozilla RR，你可以把它当作是一个复读机，可以把程序的行为录制下来，然后反复地重放。说白了，不管线上环境还是测试环境，只要你能够把 bug 的“罪证”录制下来，那就可以作为“呈堂证供”慢慢地分析了。</p>

<h2 id="二分查找和注释">二分查找和注释</h2>

<p>不过，对于一些大型的项目，或者涉及面比较多的系统，比如 bug 可能来自多个服务中的某一个，也可能是查询数据库的 SQL 语句有问题，在这种情况下，即使 bug 能够稳定重现，你也并不能确定 bug 出现在哪一个环节。所以，Mozilla RR 这类录制的工具就失效了。</p>

<p>这时候，你可能会回忆起“二分查找”这个经典的算法。我们先在代码中注释掉一半的逻辑，如果问题依旧，那么就说明 bug 出在没有被注释的代码中，这时再注释掉剩下的一半逻辑，继续上面的循环。用不了几次，问题就被缩小到一个完全可控的范围了。</p>

<p>这个方法虽然听着有些笨，但在很多场景下确实见效很快。当然，随着技术的进步和系统复杂性的增加，现在我们更推荐使用 OpenTracing 这样的标准，来进行分布式追踪。</p>

<p>OpenTracing可以在系统的各处埋点，通过 Trace ID 把多个 Span 组成的调用链和埋点数据上报到服务端，进行分析和图形化的展现。这样就可以发现很多隐藏的问题，而且历史数据都会保存下来，方便我们随时对比和查看。</p>

<p>另外，如果你的系统比较复杂，比如是在微服务的环境下，那么 Zipkin、Apache SkyWalking 都是不错的选择。</p>

<h2 id="动态调试">动态调试</h2>

<p>上面我讲的这些调试方法，基本上已经可以解决大部分的问题了。但是，如果你遇到的是只在线上才会偶然出现的故障，那么通过增加日志、埋点的方式来追踪的话，就会耗费相当多的时间。</p>

<p>我就曾经遇到过这样的一个 bug。多年前，我负责的一个系统在每天凌晨 1 点钟左右时，数据库资源就会被耗尽，并导致整个系统雪崩。当时，我们白天排查代码中的计划任务，到了晚上，团队的同学们就蹲守在公司等 bug 复现，复现的时候再去查看各自子模块的运行状态。这样下来，直到第三个晚上才找到了 bug 的元凶。</p>

<p>我的这个经历，和 Solaris 几个系统工程师创造 Dtrace 的背景很类似。当时 Solaris 的工程师们，也是花了几天几夜的时间排查一个诡异的线上问题，最后才发现是因为一个配置写错了。但和我不同的是，Solaris 的工程师决定彻底避免这种问题，于是发明了 Dtrace，专门用于动态调试。</p>

<p>动态调试，也叫做活体调试。和 GDB 这种静态调试工具不同，动态调试可以调试线上的服务，而对调试的程序而言，整个调试过程是无感知、无侵入的，不用你修改代码，更不用重启。打一个比方，动态调试就像 X 光，可以在病人无感知的情况下检查身体，而不需要抽血和胃镜。</p>

<p>Dtrace 便是最早的动态追踪框架，受到它的影响，其他系统中也逐渐出现了类似的动态调试工具。比如，Red Hat 的工程师，就在 Linux 平台上创造了 Systemtap，也就是我接下来要讲的主角。</p>

<h2 id="systemtap">Systemtap</h2>

<p>Systemtap 有自己的 DSL，也就是小语言，可以用来设置探测点。在介绍更多的内容之前，为了不仅仅停留在抽象的概念上，让我们先来安装下 Systemtap吧。这里，用系统的包管理器来安装就可以了：</p>

<pre><code>sudo apt install systemtap
</code></pre>

<p>我们再来看下，用 Systemtap 写的 hello world 程序是什么样子的：</p>

<pre><code># cat hello-world.stp
probe begin
{
  print(&quot;hello world!&quot;)
  exit()
}
</code></pre>

<p>是不是很简单？不过，你需要使用 sudo 权限才可以运行：</p>

<pre><code>sudo stap hello-world.stp
</code></pre>

<p>它会打印出我们想要的 <code>hello world!</code> 。在大部分场景下，我们都不需要自己写 stap 脚本来进行分析，因为 OpenResty 已经有了很多现成的 stap 脚本来做常规的分析，下节课我就会为你介绍这些脚本。所以，今天我们只用对 stap 脚本有一个简单的认识就行了。</p>

<p>操作了几下后，回到我们的概念上来。Systemtap 的工作原理，是将上述 stap 脚本转换为 C，运行系统 C 编译器来创建 kernel 模块。当模块被加载的时候，它会通过 hook 内核的方式，来激活所有的探测事件。</p>

<p>比如，刚刚这个示例代码中的 <code>probe</code> 就是一个探针。<code>begin</code> 会在探测的最开始运行，与之对应的是 <code>end</code>，所以上面的 <code>hello world</code> 程序也可以写成下面的这种方式：</p>

<pre><code>probe begin
{
  print(&quot;hello &quot;)
  exit()
}

probe end
{
print(&quot;world!&quot;) 
</code></pre>

<p>这里，我只对 Systemtap 进行了非常粗浅的介绍。其实，Systemtap 的作者 Frank Ch. Eigler 写了一本电子书《Systemtap tutorial》，详细地介绍了Systemtap。如果你想进一步地学习和深入了解 Systemtap，那么我建议，从这本书开始入手，就是最好的学习路径。</p>

<h2 id="其他动态追踪框架">其他动态追踪框架</h2>

<p>当然，对于内核和性能分析工程师来说，只有 Systemtap 还是不够用的。首先， Systemtap 并没有默认进入系统内核；其次，它的工作原理决定了它的启动速度比较慢，而且有可能对系统的正常运行造成影响。</p>

<p>eBPF（extended BPF）则是最近几年 Linux 内核中新增的特性。相比 Systemtap，eBPF有内核直接支持、不会死机、启动速度快等优点；同时，它并没有使用 DSL，而是直接使用了 C 语言的语法，所以也大大降低了它的上手难度。</p>

<p>除了开源的解决方案外，Intel 出品的 VTune 也是神兵利器之一。它直观的界面操作和数据展示，可以让你不写代码也能分析出性能的瓶颈。</p>

<h2 id="火焰图">火焰图</h2>

<p>最后，让我们再来回忆下前面课程中提到过的火焰图。前面我们也提到过，perf 和 Systemtap 等工具产生的数据，都可以通过火焰图的方式，来进行更加直观的展示。下面这张图就是火焰图的示例：</p>

<p><img src="assets/6e72452ac3b97d46a44234d41993c832.png" alt="" /></p>

<p>在火焰图中，色块的颜色和深浅都是没有意义的，只是为了对不同的色块儿做出简单的区分。火焰图其实是把每次采样的数据进行叠加，所以，真正有意义的是色块的宽度和长度。</p>

<p>对于 on CPU 火焰图来说，色块的宽度是函数占用的 CPU 时间百分比，色块越宽，则说明性能消耗越大。如果出现一个平顶的山峰，那它就是性能的瓶颈所在。而色块的长度，代表的是函数调用的深度，最顶端的框显示正在运行的函数，在它之下的都是这个函数的调用者。所以，在下面的函数是上面函数的父函数，山峰越高，则说明调用的函数层级越深。</p>

<p>为了让你更透彻掌握火焰图这个利器，在后面的视频课中，我会用一个真实的代码案例，给你演示，如何使用火焰图来找出性能的瓶颈并解决它。</p>

<h2 id="最后">最后</h2>

<p>要知道，哪怕是动态跟踪这种无侵入的技术，也并不是完美的。它只能检测某一个单独的进程，而且一般情况下，我们只短暂开启它，以使用这段时间内的采样数据。所以，如果你需要跨越多个服务，或者是进行长时间的检测，还是需要 opentracing 这样的分布式追踪技术。</p>

<p>不知道你在平时的工作中，都使用到了哪些调试工具和技术呢？欢迎留言和我讨论，也欢迎你把这篇文章分享给你的朋友，我们一起学习和进步。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#8de1e1e1b4b9bcbcbdbacdeae0ece4e1a3eee2e0" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f1193e3dbd694f1',t:'MTczNDA0NzAxNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>