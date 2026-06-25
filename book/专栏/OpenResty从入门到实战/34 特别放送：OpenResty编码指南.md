<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=34&#32;特别放送：OpenResty编码指南>
        <link rel="icon" href="/static/favicon.png">
        <title>34 特别放送：OpenResty编码指南 </title>
        
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
                            <h1 id="title" data-id="34 特别放送：OpenResty编码指南" class="title">34 特别放送：OpenResty编码指南</h1>
                            <div><p>你好，我是温铭。</p>

<p>很多开发语言都有自己的编码规范，来告诉开发者这个领域内一些约定俗成的东西，让大家写的代码风格保持一致，并且避免一些常见的陷阱。这对于新手来说是非常友好的，可以让初学者快速准确地上手。比如 Python 的 PEP 80，就是其中的典范，几乎所有的 Python 开发者都阅读过这份 Python 作者执笔的编码规范。</p>

<p><strong>让开发者统一思想，按照规范来写代码，是一件非常重要的事情</strong>。OpenResty 还没有自己的编码规范，有些开发者在提交 PR 后，会在代码风格上被反复 review 和要求修改，消耗了大量本可避免的时间和精力。</p>

<p>其实，在 OpenResty 中，也有两个可以帮你自动化检测代码风格的工具：luacheck 和 lj-releng。前者是 Lua 和 OpenResty 世界通用的检测工具，后者则是 OpenResty 自己用 perl 写的代码检测工具。</p>

<p>对我自己来说，我会在 VS Code 编辑器中安装 luacheck 的插件，这样在我写代码的时候就有工具来自动提示；而在项目的 CI 中，则是会把这两个工具都运行一遍，比如：</p>

<pre><code>luacheck -q lua

./utils/lj-releng lua/*.lua lua/apisix/*.lua 
</code></pre>

<p>毕竟，多一个工具的检测总不是坏事。</p>

<p>但是，这两个工具更多的是检测全局变量、每行长度等这些最基础的代码风格，离 Python PEP 80 的详细程度还有遥远的距离，并且也没有文档给你参考。</p>

<p>所以今天，我就根据自己在OpenResty 相关开源项目中的经验，总结了一下 OpenResty 的编码风格文档，这个规范也和一些常见的 API 网关比如 Kong、APISIX 的代码风格是一致的。</p>

<h2 id="缩进">缩进</h2>

<p>在 OpenResty 中，我们使用 4 个空格作为缩进的标记，虽然 Lua 并没有这样的语法要求。下面是错误和正确的两段代码示例：</p>

<pre><code>--No
if a then
ngx.say(&quot;hello&quot;)
end


--yes
if a then
    ngx.say(&quot;hello&quot;)
end
</code></pre>

<p>为了方便，你可以在使用的编辑器中，把 tab 改为 4 个空格，来简化操作。</p>

<h2 id="空格">空格</h2>

<p>在操作符的两边，都需要用一个空格来做分隔。下面是错误和正确的两段代码示例：</p>

<pre><code>--No
local i=1
local s    =    &quot;apisix&quot;


--Yes
local i = 1
local s = &quot;apisix&quot;
</code></pre>

<h2 id="空行">空行</h2>

<p>不少开发者会把其他语言的开发习惯带到 OpenResty 中来，比如在行尾增加一个分号：</p>

<pre><code>--No
if a then
    ngx.say(&quot;hello&quot;);
end;
</code></pre>

<p>但事实上，增加分号会让 Lua 代码显得非常丑陋，也是没有必要的。同时，你也不要为了节省代码的行数，追求所谓的“简洁”，而把多行代码变为一行。这样做会让你在定位错误的时候，不知道到底是哪一段代码出了问题：</p>

<pre><code>--No
if a then ngx.say(&quot;hello&quot;) end


--yes
if a then
    ngx.say(&quot;hello&quot;)
end
</code></pre>

<p>另外，函数之间需要用两个空行来做分隔：</p>

<pre><code>--No
local function foo()
end
 local function bar()
end


--Yes
local function foo()
end


 local function bar()
end
</code></pre>

<p>如果有多个 if elseif 的分支，它们之间也需要一个空行来做分隔：</p>

<pre><code>--No
if a == 1 then
    foo()    
elseif a== 2 then
    bar()    
elseif a == 3 then
    run()    
else
    error()
end


--Yes
if a == 1 then
    foo()

elseif a== 2 then
    bar()

elseif a == 3 then
    run()

else
    error()
end
</code></pre>

<h2 id="每行最大长度">每行最大长度</h2>

<p>每行不能超过 80 个字符，如果超过的话，需要你换行并对齐。并且，在换行对齐的时候，我们要体现出上下两行的对应关系。就下面的示例而言，第二行函数的参数，要在第一行左括号的右边。</p>

<pre><code>--No 
return limit_conn_new(&quot;plugin-limit-conn&quot;, conf.conn, conf.burst, conf.default_conn_delay)


--Yes
return limit_conn_new(&quot;plugin-limit-conn&quot;, conf.conn, conf.burst,
                    conf.default_conn_delay)
</code></pre>

<p>如果是字符串拼接问题的对齐，则需要把 <code>..</code> 放到下一行中：</p>

<pre><code>--No 
return limit_conn_new(&quot;plugin-limit-conn&quot; ..  &quot;plugin-limit-conn&quot; ..
                    &quot;plugin-limit-conn&quot;)


--Yes
return limit_conn_new(&quot;plugin-limit-conn&quot; .. &quot;plugin-limit-conn&quot;
                    .. &quot;plugin-limit-conn&quot;)
</code></pre>

<h2 id="变量">变量</h2>

<p>这一点我前面也多次强调过，我们应该永远使用局部变量，不要使用全局变量：</p>

<pre><code>--No
i = 1
s = &quot;apisix&quot;


--Yes
local i = 1
local s = &quot;apisix&quot;
</code></pre>

<p>至于变量的命名，应该使用 <code>snake_case</code> 风格：</p>

<pre><code>--No
local IndexArr = 1
local str_Name = &quot;apisix&quot;


--Yes
local index_arr = 1
local str_name = &quot;apisix&quot;
</code></pre>

<p>而对于常量，则是要使用全部大写的形式：</p>

<pre><code>--No
local max_int = 65535
local server_name = &quot;apisix&quot;


--Yes
local MAX_INT = 65535
local SERVER_NAME = &quot;apisix&quot;
</code></pre>

<h2 id="数组">数组</h2>

<p>在OpenResty中，我们使用<code>table.new</code> 来预先分配数组：</p>

<pre><code>--No
local t = {}
for i = 1, 100 do
   t[i] = i
 end


--Yes 
local new_tab = require &quot;table.new&quot;
 local t = new_tab(100, 0)
 for i = 1, 100 do
   t[i] = i
 end
</code></pre>

<p>另外注意，一定不要在数组中使用 nil：</p>

<pre><code>--No
local t = {1, 2, nil, 3}
</code></pre>

<p>如果一定要使用空值，请用 ngx.null 来表示：</p>

<pre><code>--Yes
local t = {1, 2, ngx.null, 3}
</code></pre>

<h2 id="字符串">字符串</h2>

<p>千万不要在热代码路径上拼接字符串：</p>

<pre><code>--No
local s = &quot;&quot;
for i = 1, 100000 do
    s = s .. &quot;a&quot;
end


--Yes
local t = {}
for i = 1, 100000 do
    t[i] = &quot;a&quot;
end
local s =  table.concat(t, &quot;&quot;)
</code></pre>

<h2 id="函数">函数</h2>

<p>函数的命名也同样遵循 <code>snake_case</code>：</p>

<pre><code>--No
local function testNginx()
end


--Yes
local function test_nginx()
end
</code></pre>

<p>并且，函数应该尽可能早地返回：</p>

<pre><code>--No
local function check(age, name)
    local ret = true
    if age &lt; 20 then
        ret = false
    end

    if name == &quot;a&quot; then
        ret = false
    end
    -- do something else 
    return ret 


--Yes
local function check(age, name)
    if age &lt; 20 then
        return false
    end

    if name == &quot;a&quot; then
        return false
    end
    -- do something else 
    return true 
</code></pre>

<h2 id="模块">模块</h2>

<p>所有 require 的库都要 local 化：</p>

<pre><code>--No
local function foo()
    local ok, err = ngx.timer.at(delay, handler)
end


--Yes
local timer_at = ngx.timer.at

local function foo()
    local ok, err = timer_at(delay, handler)
end
</code></pre>

<p>为了风格的统一，require 和 ngx 也需要 local 化：</p>

<pre><code>--No
local core = require(&quot;apisix.core&quot;)
local timer_at = ngx.timer.at

local function foo()
    local ok, err = timer_at(delay, handler)
end


--Yes
local ngx = ngx
local require = require
local core = require(&quot;apisix.core&quot;)
local timer_at = ngx.timer.at

local function foo()
    local ok, err = timer_at(delay, handler)
end
</code></pre>

<h2 id="错误处理">错误处理</h2>

<p>对于有错误信息返回的函数，我们必须对错误信息进行判断和处理：</p>

<pre><code>--No
local sock = ngx.socket.tcp()
 local ok = sock:connect(&quot;www.google.com&quot;, 80)
 ngx.say(&quot;successfully connected to google!&quot;)


--Yes
local sock = ngx.socket.tcp()
 local ok, err = sock:connect(&quot;www.google.com&quot;, 80)
 if not ok then
     ngx.say(&quot;failed to connect to google: &quot;, err)
     return
 end
 ngx.say(&quot;successfully connected to google!&quot;)
</code></pre>

<p>而如果是自己编写的函数，错误信息要作为第二个参数，用字符串的格式返回：</p>

<pre><code>--No
local function foo()
    local ok, err = func()
    if not ok then
        return false
    end
    return true
end


--No
local function foo()
    local ok, err = func()
    if not ok then
        return false, {msg = err}
    end
    return true
end


--Yes
local function foo()
    local ok, err = func()
    if not ok then
        return false, &quot;failed to call func(): &quot; .. err
    end
    return true
end
</code></pre>

<h2 id="写在最后">写在最后</h2>

<p>这个编程规范算是一个最初版本，我会公开到 <a href="https://github.com/apache/incubator-apisix/blob/v1.3/CODE_STYLE.md" target="_blank">GitHub</a> 中来持续更新和维护。如果文中没有包含到你想知道的规范，非常欢迎你留言提问，我来给你解答。也欢迎你把这篇规范分享出去，让更多的OpenResty使用者参与进来。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#f9959595c0cdc8c8c9ceb99e94989095d79a9694" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f1193910b7494f1',t:'MTczNDA0NzAwNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>