<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=22&#32;&#32;网络编程：Go&#32;语言如何通过&#32;RPC&#32;实现跨平台服务？>
        <link rel="icon" href="/static/favicon.png">
        <title>22  网络编程：Go 语言如何通过 RPC 实现跨平台服务？ </title>
        
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
                        <a class="menu-item" id="00 开篇词  Go 为开发者的需求设计，带你实现高效工作.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/00%20%e5%bc%80%e7%af%87%e8%af%8d%20%20Go%20%e4%b8%ba%e5%bc%80%e5%8f%91%e8%80%85%e7%9a%84%e9%9c%80%e6%b1%82%e8%ae%be%e8%ae%a1%ef%bc%8c%e5%b8%a6%e4%bd%a0%e5%ae%9e%e7%8e%b0%e9%ab%98%e6%95%88%e5%b7%a5%e4%bd%9c.md">00 开篇词  Go 为开发者的需求设计，带你实现高效工作.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01  基础入门：编写你的第一个 Go 语言程序.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/01%20%20%e5%9f%ba%e7%a1%80%e5%85%a5%e9%97%a8%ef%bc%9a%e7%bc%96%e5%86%99%e4%bd%a0%e7%9a%84%e7%ac%ac%e4%b8%80%e4%b8%aa%20Go%20%e8%af%ad%e8%a8%80%e7%a8%8b%e5%ba%8f.md">01  基础入门：编写你的第一个 Go 语言程序.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02  数据类型：你必须掌握的数据类型有哪些？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/02%20%20%e6%95%b0%e6%8d%ae%e7%b1%bb%e5%9e%8b%ef%bc%9a%e4%bd%a0%e5%bf%85%e9%a1%bb%e6%8e%8c%e6%8f%a1%e7%9a%84%e6%95%b0%e6%8d%ae%e7%b1%bb%e5%9e%8b%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%9f.md">02  数据类型：你必须掌握的数据类型有哪些？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03  控制结构：if、for、switch 逻辑语句的那些事儿.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/03%20%20%e6%8e%a7%e5%88%b6%e7%bb%93%e6%9e%84%ef%bc%9aif%e3%80%81for%e3%80%81switch%20%e9%80%bb%e8%be%91%e8%af%ad%e5%8f%a5%e7%9a%84%e9%82%a3%e4%ba%9b%e4%ba%8b%e5%84%bf.md">03  控制结构：if、for、switch 逻辑语句的那些事儿.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04  集合类型：如何正确使用 array、slice 和 map？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/04%20%20%e9%9b%86%e5%90%88%e7%b1%bb%e5%9e%8b%ef%bc%9a%e5%a6%82%e4%bd%95%e6%ad%a3%e7%a1%ae%e4%bd%bf%e7%94%a8%20array%e3%80%81slice%20%e5%92%8c%20map%ef%bc%9f.md">04  集合类型：如何正确使用 array、slice 和 map？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05  函数和方法：Go 语言中的函数和方法到底有什么不同？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/05%20%20%e5%87%bd%e6%95%b0%e5%92%8c%e6%96%b9%e6%b3%95%ef%bc%9aGo%20%e8%af%ad%e8%a8%80%e4%b8%ad%e7%9a%84%e5%87%bd%e6%95%b0%e5%92%8c%e6%96%b9%e6%b3%95%e5%88%b0%e5%ba%95%e6%9c%89%e4%bb%80%e4%b9%88%e4%b8%8d%e5%90%8c%ef%bc%9f.md">05  函数和方法：Go 语言中的函数和方法到底有什么不同？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06  struct 和 interface：结构体与接口都实现了哪些功能？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/06%20%20struct%20%e5%92%8c%20interface%ef%bc%9a%e7%bb%93%e6%9e%84%e4%bd%93%e4%b8%8e%e6%8e%a5%e5%8f%a3%e9%83%bd%e5%ae%9e%e7%8e%b0%e4%ba%86%e5%93%aa%e4%ba%9b%e5%8a%9f%e8%83%bd%ef%bc%9f.md">06  struct 和 interface：结构体与接口都实现了哪些功能？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07  错误处理：如何通过 error、deferred、panic 等处理错误？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/07%20%20%e9%94%99%e8%af%af%e5%a4%84%e7%90%86%ef%bc%9a%e5%a6%82%e4%bd%95%e9%80%9a%e8%bf%87%20error%e3%80%81deferred%e3%80%81panic%20%e7%ad%89%e5%a4%84%e7%90%86%e9%94%99%e8%af%af%ef%bc%9f.md">07  错误处理：如何通过 error、deferred、panic 等处理错误？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08  并发基础：Goroutines 和 Channels 的声明与使用.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/08%20%20%e5%b9%b6%e5%8f%91%e5%9f%ba%e7%a1%80%ef%bc%9aGoroutines%20%e5%92%8c%20Channels%20%e7%9a%84%e5%a3%b0%e6%98%8e%e4%b8%8e%e4%bd%bf%e7%94%a8.md">08  并发基础：Goroutines 和 Channels 的声明与使用.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09  同步原语：sync 包让你对并发控制得心应手.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/09%20%20%e5%90%8c%e6%ad%a5%e5%8e%9f%e8%af%ad%ef%bc%9async%20%e5%8c%85%e8%ae%a9%e4%bd%a0%e5%af%b9%e5%b9%b6%e5%8f%91%e6%8e%a7%e5%88%b6%e5%be%97%e5%bf%83%e5%ba%94%e6%89%8b.md">09  同步原语：sync 包让你对并发控制得心应手.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10  Context：你必须掌握的多线程并发控制神器.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/10%20%20Context%ef%bc%9a%e4%bd%a0%e5%bf%85%e9%a1%bb%e6%8e%8c%e6%8f%a1%e7%9a%84%e5%a4%9a%e7%ba%bf%e7%a8%8b%e5%b9%b6%e5%8f%91%e6%8e%a7%e5%88%b6%e7%a5%9e%e5%99%a8.md">10  Context：你必须掌握的多线程并发控制神器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11  并发模式：Go 语言中即学即用的高效并发模式.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/11%20%20%e5%b9%b6%e5%8f%91%e6%a8%a1%e5%bc%8f%ef%bc%9aGo%20%e8%af%ad%e8%a8%80%e4%b8%ad%e5%8d%b3%e5%ad%a6%e5%8d%b3%e7%94%a8%e7%9a%84%e9%ab%98%e6%95%88%e5%b9%b6%e5%8f%91%e6%a8%a1%e5%bc%8f.md">11  并发模式：Go 语言中即学即用的高效并发模式.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12  指针详解：在什么情况下应该使用指针？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/12%20%20%e6%8c%87%e9%92%88%e8%af%a6%e8%a7%a3%ef%bc%9a%e5%9c%a8%e4%bb%80%e4%b9%88%e6%83%85%e5%86%b5%e4%b8%8b%e5%ba%94%e8%af%a5%e4%bd%bf%e7%94%a8%e6%8c%87%e9%92%88%ef%bc%9f.md">12  指针详解：在什么情况下应该使用指针？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13  参数传递：值、引用及指针之间的区别？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/13%20%20%e5%8f%82%e6%95%b0%e4%bc%a0%e9%80%92%ef%bc%9a%e5%80%bc%e3%80%81%e5%bc%95%e7%94%a8%e5%8f%8a%e6%8c%87%e9%92%88%e4%b9%8b%e9%97%b4%e7%9a%84%e5%8c%ba%e5%88%ab%ef%bc%9f.md">13  参数传递：值、引用及指针之间的区别？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14  内存分配：new 还是 make？什么情况下该用谁？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/14%20%20%e5%86%85%e5%ad%98%e5%88%86%e9%85%8d%ef%bc%9anew%20%e8%bf%98%e6%98%af%20make%ef%bc%9f%e4%bb%80%e4%b9%88%e6%83%85%e5%86%b5%e4%b8%8b%e8%af%a5%e7%94%a8%e8%b0%81%ef%bc%9f.md">14  内存分配：new 还是 make？什么情况下该用谁？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15  运行时反射：字符串和结构体之间如何转换？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/15%20%20%e8%bf%90%e8%a1%8c%e6%97%b6%e5%8f%8d%e5%b0%84%ef%bc%9a%e5%ad%97%e7%ac%a6%e4%b8%b2%e5%92%8c%e7%bb%93%e6%9e%84%e4%bd%93%e4%b9%8b%e9%97%b4%e5%a6%82%e4%bd%95%e8%bd%ac%e6%8d%a2%ef%bc%9f.md">15  运行时反射：字符串和结构体之间如何转换？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16  非类型安全：让你既爱又恨的 unsafe.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/16%20%20%e9%9d%9e%e7%b1%bb%e5%9e%8b%e5%ae%89%e5%85%a8%ef%bc%9a%e8%ae%a9%e4%bd%a0%e6%97%a2%e7%88%b1%e5%8f%88%e6%81%a8%e7%9a%84%20unsafe.md">16  非类型安全：让你既爱又恨的 unsafe.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17  SliceHeader：slice 如何高效处理数据？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/17%20%20SliceHeader%ef%bc%9aslice%20%e5%a6%82%e4%bd%95%e9%ab%98%e6%95%88%e5%a4%84%e7%90%86%e6%95%b0%e6%8d%ae%ef%bc%9f.md">17  SliceHeader：slice 如何高效处理数据？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18  质量保证：Go 语言如何通过测试保证质量？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/18%20%20%e8%b4%a8%e9%87%8f%e4%bf%9d%e8%af%81%ef%bc%9aGo%20%e8%af%ad%e8%a8%80%e5%a6%82%e4%bd%95%e9%80%9a%e8%bf%87%e6%b5%8b%e8%af%95%e4%bf%9d%e8%af%81%e8%b4%a8%e9%87%8f%ef%bc%9f.md">18  质量保证：Go 语言如何通过测试保证质量？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19  性能优化：Go 语言如何进行代码检查和优化？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/19%20%20%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%ef%bc%9aGo%20%e8%af%ad%e8%a8%80%e5%a6%82%e4%bd%95%e8%bf%9b%e8%a1%8c%e4%bb%a3%e7%a0%81%e6%a3%80%e6%9f%a5%e5%92%8c%e4%bc%98%e5%8c%96%ef%bc%9f.md">19  性能优化：Go 语言如何进行代码检查和优化？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20  协作开发：模块化管理为什么能够提升研发效能？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/20%20%20%e5%8d%8f%e4%bd%9c%e5%bc%80%e5%8f%91%ef%bc%9a%e6%a8%a1%e5%9d%97%e5%8c%96%e7%ae%a1%e7%90%86%e4%b8%ba%e4%bb%80%e4%b9%88%e8%83%bd%e5%a4%9f%e6%8f%90%e5%8d%87%e7%a0%94%e5%8f%91%e6%95%88%e8%83%bd%ef%bc%9f.md">20  协作开发：模块化管理为什么能够提升研发效能？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21  网络编程：Go 语言如何玩转 RESTful API 服务？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/21%20%20%e7%bd%91%e7%bb%9c%e7%bc%96%e7%a8%8b%ef%bc%9aGo%20%e8%af%ad%e8%a8%80%e5%a6%82%e4%bd%95%e7%8e%a9%e8%bd%ac%20RESTful%20API%20%e6%9c%8d%e5%8a%a1%ef%bc%9f.md">21  网络编程：Go 语言如何玩转 RESTful API 服务？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22  网络编程：Go 语言如何通过 RPC 实现跨平台服务？.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/22%20%20%e7%bd%91%e7%bb%9c%e7%bc%96%e7%a8%8b%ef%bc%9aGo%20%e8%af%ad%e8%a8%80%e5%a6%82%e4%bd%95%e9%80%9a%e8%bf%87%20RPC%20%e5%ae%9e%e7%8e%b0%e8%b7%a8%e5%b9%b3%e5%8f%b0%e6%9c%8d%e5%8a%a1%ef%bc%9f.md">22  网络编程：Go 语言如何通过 RPC 实现跨平台服务？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 结束语  你的 Go 语言成长之路.md" href="/%e4%b8%93%e6%a0%8f/22%20%e8%ae%b2%e9%80%9a%e5%85%b3%20Go%20%e8%af%ad%e8%a8%80-%e5%ae%8c/23%20%e7%bb%93%e6%9d%9f%e8%af%ad%20%20%e4%bd%a0%e7%9a%84%20Go%20%e8%af%ad%e8%a8%80%e6%88%90%e9%95%bf%e4%b9%8b%e8%b7%af.md">23 结束语  你的 Go 语言成长之路.md</a>
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
                            <h1 id="title" data-id="22  网络编程：Go 语言如何通过 RPC 实现跨平台服务？" class="title">22  网络编程：Go 语言如何通过 RPC 实现跨平台服务？</h1>
                            <div><p>在上一讲中，我为你讲解了 RESTful API 的规范以及实现，并且留了两个作业，它们分别是删除和修改用户，现在我为你讲解这两个作业。</p>

<p>删除一个用户比较简单，它的 API 格式和获取一个用户一样，但是 HTTP 方法换成了DELETE。删除一个用户的示例代码如下所示：</p>

<p><em>ch21/main.go</em></p>

<pre><code>func main() {

   //省略没有修改的代码

   r.DELETE(&quot;/users/:id&quot;, deleteUser)

}

func deleteUser(c *gin.Context) {

   id := c.Param(&quot;id&quot;)

   i := -1

   //类似于数据库的SQL查询

   for index, u := range users {

      if strings.EqualFold(id, strconv.Itoa(u.ID)) {

         i = index

         break

      }

   }

   if i &gt;= 0 {

      users = append(users[:i], users[i+1:]...)

      c.JSON(http.StatusNoContent, &quot;&quot;)

   } else {

      c.JSON(http.StatusNotFound, gin.H{

         &quot;message&quot;: &quot;用户不存在&quot;,

      })

   }

}
</code></pre>

<p>这个示例的逻辑就是注册 DELETE 方法，达到删除用户的目的。删除用户的逻辑是通过ID 查询：</p>

<ul>
<li>如果可以找到要删除的用户，记录索引并跳出循环，然后根据索引删除该用户；</li>
<li>如果找不到要删除的用户，则返回 404。</li>
</ul>

<p>实现了删除用户的逻辑后，相信你已经会修改一个用户的名字了，因为它和删除一个用户非常像，实现代码如下所示：</p>

<pre><code>func main() {

   //省略没有修改的代码

   r.PATCH(&quot;/users/:id&quot;,updateUserName)

}

func updateUserName(c *gin.Context) {

   id := c.Param(&quot;id&quot;)

   i := -1

   //类似于数据库的SQL查询

   for index, u := range users {

      if strings.EqualFold(id, strconv.Itoa(u.ID)) {

         i = index

         break

      }

   }

   if i &gt;= 0 {

      users[i].Name = c.DefaultPostForm(&quot;name&quot;,users[i].Name)

      c.JSON(http.StatusOK, users[i])

   } else {

      c.JSON(http.StatusNotFound, gin.H{

         &quot;message&quot;: &quot;用户不存在&quot;,

      })

   }

}
</code></pre>

<p>整体代码逻辑和删除的差不多的，只不过这里使用的是 PATCH方法。</p>

<h3 id="什么是rpc-服务">什么是RPC 服务</h3>

<p>RPC，也就是<strong>远程过程调用</strong>，是分布式系统中不同节点调用的方式（进程间通信），属于 C/S 模式。RPC 由客户端发起，调用服务端的方法进行通信，然后服务端把结果返回给客户端。</p>

<p>RPC的核心有两个：<strong>通信协议</strong>和<strong>序列化</strong>。在 HTTP 2 之前，一般采用自定义 TCP 协议的方式进行通信，HTTP 2 出来后，也有采用该协议的，比如流行的gRPC。</p>

<p><strong>序列化</strong>和<strong>反序列化</strong>是一种把传输内容编码和解码的方式，常见的编解码方式有 JSON、Protobuf 等。</p>

<p>在大多数 RPC的架构设计中，都有<strong>Client</strong>、<strong>Client Stub</strong>、<strong>Server</strong>、<strong>Server Stub</strong>这四个组件，Client 和 Server 之间通过 Socket 进行通信。RPC 架构如下图所示：</p>

<p><img src="assets/CgqCHl_8K6eADlRHAAFxSlJHXWc596.png" alt="图片2.png" /></p>

<p>（图片来自于 Google 搜索）</p>

<p>下面我为你总结下 RPC 调用的流程：</p>

<ul>
<li>客户端（Client）调用客户端存根（Client Stub），同时把参数传给客户端存根；</li>
<li>客户端存根将参数打包编码，并通过系统调用发送到服务端；</li>
<li>客户端本地系统发送信息到服务器；</li>
<li>服务器系统将信息发送到服务端存根（Server Stub）；</li>
<li>服务端存根解析信息，也就是解码；</li>
<li>服务端存根调用真正的服务端程序（Sever）；</li>
<li>服务端（Server）处理后，通过同样的方式，把结果再返回给客户端（Client）。</li>
</ul>

<p>RPC 调用常用于大型项目，也就是我们现在常说的微服务，而且还会包含服务注册、治理、监控等功能，是一套完整的体系。</p>

<h3 id="go-语言-rpc-简单入门">Go 语言 RPC 简单入门</h3>

<p>RPC这么流行，Go 语言当然不会错过，在 Go SDK 中，已经<strong>内置了 net/rpc 包</strong>来帮助开发者实现 RPC。简单来说，net/rpc 包提供了通过网络访问服务端对象方法的能力。</p>

<p>现在我通过一个加法运算来演示 RPC的使用，它的服务端代码如下所示：</p>

<p><em>ch22/server/math_service.go</em></p>

<pre><code>package server

type MathService struct {

}

type Args struct {

   A, B int

}

func (m *MathService) Add(args Args, reply *int) error {

   *reply = args.A + args.B

   return nil

}
</code></pre>

<p>在以上代码中：</p>

<ul>
<li>定义了<strong>MathService</strong>，用于表示一个远程服务对象；</li>
<li>Args 结构体用于表示参数；</li>
<li>Add 这个方法实现了加法的功能，加法的结果通过 replay这个指针变量返回。</li>
</ul>

<p>有了这个定义好的服务对象，就可以把它注册到暴露的服务列表中，以供其他客户端使用了。在Go 语言中，要注册一个一个RPC 服务对象还是比较简单的，通过 RegisterName 方法即可，示例代码如下所示：</p>

<p><em>ch22/server_main.go</em></p>

<pre><code>package main

import (

   &quot;gotour/ch22/server&quot;

   &quot;log&quot;

   &quot;net&quot;

   &quot;net/rpc&quot;

)

func main()  {

   rpc.RegisterName(&quot;MathService&quot;,new(server.MathService))

   l, e := net.Listen(&quot;tcp&quot;, &quot;:1234&quot;)

   if e != nil {

      log.Fatal(&quot;listen error:&quot;, e)

   }

   rpc.Accept(l)

}
</code></pre>

<p>以上示例代码中，通过 RegisterName 函数注册了一个服务对象，该函数接收两个参数：</p>

<ul>
<li>服务名称（MathService）；</li>
<li>具体的服务对象，也就是我刚刚定义好的MathService 这个结构体。</li>
</ul>

<p>然后通过 net.Listen 函数建立一个TCP 链接，在 1234 端口进行监听，最后通过 rpc.Accept 函数在该 TCP 链接上提供 MathService 这个 RPC 服务。现在客户端就可以看到MathService这个服务以及它的Add 方法了。</p>

<p>任何一个框架都有自己的规则，net/rpc 这个 Go 语言提供的RPC 框架也不例外。要想把一个对象注册为 RPC 服务，可以让<strong>客户端远程访问</strong>，那么该对象（类型）的方法必须满足如下条件：</p>

<ul>
<li>方法的类型是可导出的（公开的）；</li>
<li>方法本身也是可导出的；</li>
<li>方法必须有 2 个参数，并且参数类型是可导出或者内建的；</li>
<li>方法必须返回一个 error 类型。</li>
</ul>

<p>总结下来，该方法的格式如下所示：</p>

<pre><code>func (t *T) MethodName(argType T1, replyType *T2) error
</code></pre>

<p>这里面的 T1、T2都是可以被 encoding/gob 序列化的。</p>

<ul>
<li>第一个参数 argType 是调用者（客户端）提供的；</li>
<li>第二个参数 replyType是返回给调用者结果，必须是指针类型。</li>
</ul>

<p>有了提供好的RPC 服务，现在再来看下客户端如何调用，它的代码如下所示：</p>

<p><em>ch22/client_main.go</em></p>

<pre><code>package main

import (

   &quot;fmt&quot;

   &quot;gotour/ch22/server&quot;

   &quot;log&quot;

   &quot;net/rpc&quot;

)

func main()  {

   client, err := rpc.Dial(&quot;tcp&quot;,  &quot;localhost:1234&quot;)

   if err != nil {

      log.Fatal(&quot;dialing:&quot;, err)

   }

   args := server.Args{A:7,B:8}

   var reply int

   err = client.Call(&quot;MathService.Add&quot;, args, &amp;reply)

   if err != nil {

      log.Fatal(&quot;MathService.Add error:&quot;, err)

   }

   fmt.Printf(&quot;MathService.Add: %d+%d=%d&quot;, args.A, args.B, reply)

}
</code></pre>

<p>在以上实例代码中，首先通过 rpc.Dial 函数建立 TCP 链接，需要注意的是这里的 IP、端口要和RPC 服务提供的一致，确保可以建立 RCP 链接。</p>

<p>TCP 链接建立成功后，就需要准备远程方法需要的参数，也就是示例中的args 和 reply。参数准备好之后，就可以通过 Call 方法调用远程的RPC 服务了。Call 方法有 3 个参数，它们的作用分别如下所示：</p>

<ol>
<li>调用的远程方法的名字，这里是MathService.Add，点前面的部分是<strong>注册的服务的名称</strong>，点后面的部分是<strong>该服务的方法</strong>；</li>
<li>客户端为了<strong>调用远程方法</strong>提供的参数，示例中是args；</li>
<li>为了接收远程方法返回的结果，必须是一个指针，也就是示例中的&amp; replay，这样客户端就可以获得服务端返回的结果了。</li>
</ol>

<p>服务端和客户端的代码都写好了，现在就可以运行它们，测试 RPC调用的效果了。</p>

<p>首先运行服务端的代码，提供 RPC 服务，运行命令如下所示：</p>

<pre><code>➜ go run ch22/server_main.go
</code></pre>

<p>然后运行客户端代码，测试调用 RPC的结果，运行命令如下所示：</p>

<pre><code>➜ go run ch22/client_main.go
</code></pre>

<p>如果你看到了 MathService.Add: 7+8=15的结果，那么恭喜你，你完成了一个完整的RPC 调用。</p>

<h3 id="基于-http的rpc">基于 HTTP的RPC</h3>

<p>RPC 除了可以通过 TCP 协议调用之外，还可以通过HTTP 协议进行调用，而且内置的net/rpc 包已经支持，现在我修改以上示例代码，支持 HTTP 协议的调用，服务端代码如下所示：</p>

<p><em>ch22/server_main.go</em></p>

<pre><code>func main() {

   rpc.RegisterName(&quot;MathService&quot;, new(server.MathService))

   rpc.HandleHTTP()//新增的

   l, e := net.Listen(&quot;tcp&quot;, &quot;:1234&quot;)

   if e != nil {

      log.Fatal(&quot;listen error:&quot;, e)

   }

   http.Serve(l, nil)//换成http的服务

}
</code></pre>

<p>以上是服务端代码的修改，只需修改两处，我已经在代码中标注出来了，很容易理解。</p>

<p>服务端修改的代码不算多，客户端修改的代码就更少了，只需要修改一处即可，修改的部分如下所示：</p>

<p><em>ch22/client_main.go</em></p>

<pre><code>func main()  {

   client, err := rpc.DialHTTP(&quot;tcp&quot;,  &quot;localhost:1234&quot;)

   //省略了其他没有修改的代码

}
</code></pre>

<p>从以上代码可以看到，只需要把建立链接的方法从 Dial 换成 DialHTTP 即可。</p>

<p>现在分别运行服务端和客户端代码，就可以看到输出的结果了，和上面使用TCP 链接时是一样的。</p>

<p>此外，Go 语言 net/rpc 包提供的 HTTP 协议的 RPC 还有一个调试的 URL，运行服务端代码后，在浏览器中输入 <a href="http://localhost:1234/debug/rpc" target="_blank">http://localhost:1234/debug/rpc</a> 回车，即可看到服务端注册的RPC 服务，以及每个服务的方法，如下图所示：</p>

<p><img src="assets/Ciqc1F_7zbWAb5PXAAA7zm9tcRE148.png" alt="image" /></p>

<p>如上图所示，<strong>注册的 RPC 服务</strong>、<strong>方法的签名</strong>、<strong>已经被调用的次数</strong>都可以看到。</p>

<h3 id="json-rpc-跨平台通信">JSON RPC 跨平台通信</h3>

<p>以上我实现的RPC 服务是基于 gob 编码的，这种编码在跨语言调用的时候比较困难，而当前在微服务架构中，RPC 服务的实现者和调用者都可能是不同的编程语言，因此我们实现的 RPC 服务要支持多语言的调用。</p>

<h4 id="基于-tcp-的-json-rpc">基于 TCP 的 JSON RPC</h4>

<p>实现跨语言 RPC 服务的核心在于选择一个<strong>通用的编码</strong>，这样大多数语言都支持，比如常用的JSON。在 Go 语言中，实现一个 JSON RPC 服务非常简单，只需要使用 net/rpc/jsonrpc 包即可。</p>

<p>同样以上面的示例为例，我把它改造成支持 JSON的RPC 服务，服务端代码如下所示：</p>

<p><em>ch22/server_main.go</em></p>

<pre><code>func main() {

   rpc.RegisterName(&quot;MathService&quot;, new(server.MathService))

   l, e := net.Listen(&quot;tcp&quot;, &quot;:1234&quot;)

   if e != nil {

      log.Fatal(&quot;listen error:&quot;, e)

   }

   for {

      conn, err := l.Accept()

      if err != nil {

         log.Println(&quot;jsonrpc.Serve: accept:&quot;, err.Error())

         return

      }

      //json rpc

      go jsonrpc.ServeConn(conn)

   }

}
</code></pre>

<p>从以上代码可以看到，相比 gob 编码的RPC 服务，JSON 的 RPC 服务是把链接交给了jsonrpc.ServeConn这个函数处理，达到了基于 JSON 进行 RPC 调用的目的。</p>

<p>JSON RPC 的客户端代码也非常少，只需要修改一处，修改的部分如下所示：</p>

<p><em>ch22/client_main.go</em></p>

<pre><code>func main()  {

   client, err := jsonrpc.Dial(&quot;tcp&quot;,  &quot;localhost:1234&quot;)

   //省略了其他没有修改的代码

}
</code></pre>

<p>从以上代码可以看到，只需要把建立链接的 Dial方法换成 jsonrpc 包中的即可。</p>

<p>以上是使用 Go 语言作为客户端调用 RPC 服务的示例，其他编程语言也是类似的，只需要遵守 <a href="https://www.jsonrpc.org/specification" target="_blank">JSON-RPC 规范</a>即可。</p>

<h4 id="基于-http的json-rpc">基于 HTTP的JSON RPC</h4>

<p>相比基于 TCP 调用的RPC 来说，使用 HTTP肯定会更方便，也更通用。Go 语言内置的jsonrpc 并没有实现基于 HTTP的传输，所以就需要自己来实现，这里我参考 gob 编码的HTTP RPC 实现方式，来<strong>实现基于 HTTP的JSON RPC 服务</strong>。</p>

<p>还是上面的示例，我改造下让其支持 HTTP 协议，RPC 服务端代码如下所示：</p>

<p><em>ch22/server_main.go</em></p>

<pre><code>func main() {

   rpc.RegisterName(&quot;MathService&quot;, new(server.MathService))

   //注册一个path，用于提供基于http的json rpc服务

   http.HandleFunc(rpc.DefaultRPCPath, func(rw http.ResponseWriter, r *http.Request) {

      conn, _, err := rw.(http.Hijacker).Hijack()

      if err != nil {

         log.Print(&quot;rpc hijacking &quot;, r.RemoteAddr, &quot;: &quot;, err.Error())

         return

      }

      var connected = &quot;200 Connected to JSON RPC&quot;

      io.WriteString(conn, &quot;HTTP/1.0 &quot;+connected+&quot;\n\n&quot;)

      jsonrpc.ServeConn(conn)

   })

   l, e := net.Listen(&quot;tcp&quot;, &quot;:1234&quot;)

   if e != nil {

      log.Fatal(&quot;listen error:&quot;, e)

   }

   http.Serve(l, nil)//换成http的服务

}
</code></pre>

<p>以上代码的实现基于 HTTP 协议的核心，即使用 http.HandleFunc 注册了一个 path，对外提供基于 HTTP 的 JSON RPC 服务。在这个 HTTP 服务的实现中，通过Hijack方法劫持链接，然后转交给 jsonrpc 处理，这样就实现了基于 HTTP 协议的 JSON RPC 服务。</p>

<p>实现了服务端的代码后，现在开始实现客户端调用，它的代码如下所示：</p>

<pre><code>  func main()  {

     client, err := DialHTTP(&quot;tcp&quot;,  &quot;localhost:1234&quot;)

     if err != nil {

        log.Fatal(&quot;dialing:&quot;, err)

     }

     args := server.Args{A:7,B:8}

     var reply int

     err = client.Call(&quot;MathService.Add&quot;, args, &amp;reply)

     if err != nil {

        log.Fatal(&quot;MathService.Add error:&quot;, err)

     }

     fmt.Printf(&quot;MathService.Add: %d+%d=%d&quot;, args.A, args.B, reply)

  }

  // DialHTTP connects to an HTTP RPC server at the specified network address

  // listening on the default HTTP RPC path.

  func DialHTTP(network, address string) (*rpc.Client, error) {

     return DialHTTPPath(network, address, rpc.DefaultRPCPath)

  }

  // DialHTTPPath connects to an HTTP RPC server

  // at the specified network address and path.

  func DialHTTPPath(network, address, path string) (*rpc.Client, error) {

     var err error

     conn, err := net.Dial(network, address)

     if err != nil {

        return nil, err

     }

     io.WriteString(conn, &quot;GET &quot;+path+&quot; HTTP/1.0\n\n&quot;)

     // Require successful HTTP response

     // before switching to RPC protocol.

     resp, err := http.ReadResponse(bufio.NewReader(conn), &amp;http.Request{Method: &quot;GET&quot;})

     connected := &quot;200 Connected to JSON RPC&quot;

     if err == nil &amp;&amp; resp.Status == connected {

        return jsonrpc.NewClient(conn), nil

     }

     if err == nil {

        err = errors.New(&quot;unexpected HTTP response: &quot; + resp.Status)

     }

     conn.Close()

     return nil, &amp;net.OpError{

        Op:   &quot;dial-http&quot;,

        Net:  network + &quot; &quot; + address,

        Addr: nil,

        Err:  err,

     }

  }
</code></pre>

<p>以上这段代码的核心在于通过建立好的TCP 链接，发送 HTTP 请求调用远程的HTTP JSON RPC 服务，这里使用的是 HTTP GET 方法。</p>

<p>分别运行服务端和客户端，就可以看到正确的HTTP JSON RPC 调用结果了。</p>

<h3 id="总结">总结</h3>

<p>这一讲基于 Go 语言自带的RPC 框架，讲解了 RPC 服务的实现以及调用。通过这一讲的学习相信你可以很好地了解什么是 RPC 服务，基于 TCP 和 HTTP 实现的RPC 服务有什么不同，它们是如何实现的等等。</p>

<p>不过在实际的项目开发中，使用Go 语言自带的 RPC 框架并不多，但是这里我还是以自带的框架为例进行讲解，这样可以更好地理解 RPC 的使用以及实现原理。如果你可以很好地掌握它们，那么你使用第三方的 RPC 框架也可以很快上手。</p>

<p>在实际的项目中，比较常用的是Google的gRPC 框架，它是通过Protobuf 序列化的，是基于 HTTP/2 协议的二进制传输，并且支持很多编程语言，效率也比较高。关于 gRPC的使用可以看官网的文档，入门是很容易的。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#b8d4d4d4818c8989888ff8dfd5d9d1d496dbd7d5" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f0cea52fd4994de',t:'MTczMzk5ODEyOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>