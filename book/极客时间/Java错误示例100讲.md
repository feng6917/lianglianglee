<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=Java错误示例100讲>
        <link rel="icon" href="/static/favicon.png">
        <title>Java错误示例100讲 </title>
        
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
                        <a class="menu-item" id="Java基础36讲.md" href="/%e6%9e%81%e5%ae%a2%e6%97%b6%e9%97%b4/Java%e5%9f%ba%e7%a1%8036%e8%ae%b2.md">Java基础36讲.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="Java错误示例100讲.md" href="/%e6%9e%81%e5%ae%a2%e6%97%b6%e9%97%b4/Java%e9%94%99%e8%af%af%e7%a4%ba%e4%be%8b100%e8%ae%b2.md">Java错误示例100讲.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="Linux性能优化.md" href="/%e6%9e%81%e5%ae%a2%e6%97%b6%e9%97%b4/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96.md">Linux性能优化.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="MySQL实战45讲.md" href="/%e6%9e%81%e5%ae%a2%e6%97%b6%e9%97%b4/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2.md">MySQL实战45讲.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="从0开始学微服务.md" href="/%e6%9e%81%e5%ae%a2%e6%97%b6%e9%97%b4/%e4%bb%8e0%e5%bc%80%e5%a7%8b%e5%ad%a6%e5%be%ae%e6%9c%8d%e5%8a%a1.md">从0开始学微服务.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="代码精进之路.md" href="/%e6%9e%81%e5%ae%a2%e6%97%b6%e9%97%b4/%e4%bb%a3%e7%a0%81%e7%b2%be%e8%bf%9b%e4%b9%8b%e8%b7%af.md">代码精进之路.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="持续交付36讲.md" href="/%e6%9e%81%e5%ae%a2%e6%97%b6%e9%97%b4/%e6%8c%81%e7%bb%ad%e4%ba%a4%e4%bb%9836%e8%ae%b2.md">持续交付36讲.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="程序员进阶攻略.md" href="/%e6%9e%81%e5%ae%a2%e6%97%b6%e9%97%b4/%e7%a8%8b%e5%ba%8f%e5%91%98%e8%bf%9b%e9%98%b6%e6%94%bb%e7%95%a5.md">程序员进阶攻略.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="趣谈网络协议.md" href="/%e6%9e%81%e5%ae%a2%e6%97%b6%e9%97%b4/%e8%b6%a3%e8%b0%88%e7%bd%91%e7%bb%9c%e5%8d%8f%e8%ae%ae.md">趣谈网络协议.md</a>
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
                            <h1 id="title" data-id="Java错误示例100讲" class="title">Java错误示例100讲</h1>
                            <div><h1 id="00-开篇词-业务代码真的会有这么多坑">00 开篇词 | 业务代码真的会有这么多坑？</h1>

<p>你好，我是朱晔，贝壳金服的资深架构师。我先和你说说我这 15 年的工作经历吧，以加深彼此的了解。前 7 年，我专注于.NET 领域，负责业务项目的同时，也做了很多社区工作。在 CSDN 做版主期间，我因为回答了大量有关.NET 的问题，并把很多问题的答案总结成了博客，获得了 3 次微软 MVP 的称号。后来，我转到了 Java 领域，也从程序员变为了架构师，更关注开源项目和互联网架构设计。在空中网，我整体负责了百万人在线的大型 MMO 网游《激战》技术平台的架构设计，期间和团队开发了许多性能和稳定性都不错的 Java 框架；在饿了么，我负责过日千万订单量的物流平台的开发管理和架构工作，遇到了许多只有高并发下才会出现的问题，积累了大量的架构经验；现在，我在贝壳金服的基础架构团队，负责基础组件、中间件、基础服务开发规划，制定一些流程和规范，带领团队自研 Java 后端开发框架、微服务治理平台等，在落地 Spring Cloud 结合 Kubernetes 容器云平台技术体系的过程中，摸索出了很多适合公司项目的基础组件和最佳实践。这 15 年来，我一直没有脱离编码工作，接触过大大小小的项目不下 400 个，自己亲身经历的、见别人踩过的坑不计其数。我感触很深的一点是，业务代码中真的有太多的坑：有些是看似非常简单的知识点反而容易屡次踩坑，比如 Spring 声明式事务不生效的问题；而有些坑因为“潜伏期”长，引发的线上事故造成了大量的人力和资金损失。因此，我系统梳理了这些案例和坑点，最终筛选出 100 个案例，涉及 130 多个坑点，组成了这个课程。意识不到业务代码的坑，很危险我想看到 100、130 这两个数字，你不禁要问了：“我写了好几年的业务代码了，遇到问题时上网搜一下就有答案，遇到最多的问题就是服务器不稳定，重启一下基本就可以解决，哪里会有这么多坑呢？”带着这个问题，你继续听我往下说吧。据我观察，很多开发同学没意识到这些坑，有以下三种可能：意识不到坑的存在，比如所谓的服务器不稳定很可能是代码问题导致的，很多时候遇到 OOM、死锁、超时问题在运维层面通过改配置、重启、扩容等手段解决了，没有反推到开发层面去寻找根本原因。有些问题只会在特定情况下暴露。比如，缓存击穿、在多线程环境使用非线程安全的类，只有在多线程或高并发的情况才会暴露问题。有些性能问题不会导致明显的 Bug，只</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#8ee2e2e2b7babfbfbeb9cee9e3efe7e2a0ede1e3" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f0c4b4c8ff0ed0a',t:'MTczMzk5MTYxNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>