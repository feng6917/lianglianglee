<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=41&#32;热点问题答疑（4）：&#32;Tomcat和Jetty有哪些不同？>
        <link rel="icon" href="/static/favicon.png">
        <title>41 热点问题答疑（4）： Tomcat和Jetty有哪些不同？ </title>
        
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
                        <a class="menu-item" id="00 开篇词 Java程序员如何快速成长？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/00%20%e5%bc%80%e7%af%87%e8%af%8d%20Java%e7%a8%8b%e5%ba%8f%e5%91%98%e5%a6%82%e4%bd%95%e5%bf%ab%e9%80%9f%e6%88%90%e9%95%bf%ef%bc%9f.md">00 开篇词 Java程序员如何快速成长？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01 Web容器学习路径.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/01%20Web%e5%ae%b9%e5%99%a8%e5%ad%a6%e4%b9%a0%e8%b7%af%e5%be%84.md">01 Web容器学习路径.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 HTTP协议必知必会.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/02%20HTTP%e5%8d%8f%e8%ae%ae%e5%bf%85%e7%9f%a5%e5%bf%85%e4%bc%9a.md">02 HTTP协议必知必会.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 你应该知道的Servlet规范和Servlet容器.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/03%20%e4%bd%a0%e5%ba%94%e8%af%a5%e7%9f%a5%e9%81%93%e7%9a%84Servlet%e8%a7%84%e8%8c%83%e5%92%8cServlet%e5%ae%b9%e5%99%a8.md">03 你应该知道的Servlet规范和Servlet容器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 实战：纯手工打造和运行一个Servlet.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/04%20%e5%ae%9e%e6%88%98%ef%bc%9a%e7%ba%af%e6%89%8b%e5%b7%a5%e6%89%93%e9%80%a0%e5%92%8c%e8%bf%90%e8%a1%8c%e4%b8%80%e4%b8%aaServlet.md">04 实战：纯手工打造和运行一个Servlet.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 Tomcat系统架构（上）： 连接器是如何设计的？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/05%20Tomcat%e7%b3%bb%e7%bb%9f%e6%9e%b6%e6%9e%84%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%c2%a0%e8%bf%9e%e6%8e%a5%e5%99%a8%e6%98%af%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1%e7%9a%84%ef%bc%9f.md">05 Tomcat系统架构（上）： 连接器是如何设计的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 Tomcat系统架构（下）：聊聊多层容器的设计.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/06%20Tomcat%e7%b3%bb%e7%bb%9f%e6%9e%b6%e6%9e%84%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e8%81%8a%e8%81%8a%e5%a4%9a%e5%b1%82%e5%ae%b9%e5%99%a8%e7%9a%84%e8%ae%be%e8%ae%a1.md">06 Tomcat系统架构（下）：聊聊多层容器的设计.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 Tomcat如何实现一键式启停？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/07%20Tomcat%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e4%b8%80%e9%94%ae%e5%bc%8f%e5%90%af%e5%81%9c%ef%bc%9f.md">07 Tomcat如何实现一键式启停？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 Tomcat的“高层们”都负责做什么？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/08%20Tomcat%e7%9a%84%e2%80%9c%e9%ab%98%e5%b1%82%e4%bb%ac%e2%80%9d%e9%83%bd%e8%b4%9f%e8%b4%a3%e5%81%9a%e4%bb%80%e4%b9%88%ef%bc%9f.md">08 Tomcat的“高层们”都负责做什么？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 比较：Jetty架构特点之Connector组件.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/09%20%e6%af%94%e8%be%83%ef%bc%9aJetty%e6%9e%b6%e6%9e%84%e7%89%b9%e7%82%b9%e4%b9%8bConnector%e7%bb%84%e4%bb%b6.md">09 比较：Jetty架构特点之Connector组件.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 比较：Jetty架构特点之Handler组件.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/10%20%e6%af%94%e8%be%83%ef%bc%9aJetty%e6%9e%b6%e6%9e%84%e7%89%b9%e7%82%b9%e4%b9%8bHandler%e7%bb%84%e4%bb%b6.md">10 比较：Jetty架构特点之Handler组件.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 总结：从Tomcat和Jetty中提炼组件化设计规范.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/11%20%e6%80%bb%e7%bb%93%ef%bc%9a%e4%bb%8eTomcat%e5%92%8cJetty%e4%b8%ad%e6%8f%90%e7%82%bc%e7%bb%84%e4%bb%b6%e5%8c%96%e8%ae%be%e8%ae%a1%e8%a7%84%e8%8c%83.md">11 总结：从Tomcat和Jetty中提炼组件化设计规范.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 实战：优化并提高Tomcat启动速度.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/12%20%e5%ae%9e%e6%88%98%ef%bc%9a%e4%bc%98%e5%8c%96%e5%b9%b6%e6%8f%90%e9%ab%98Tomcat%e5%90%af%e5%8a%a8%e9%80%9f%e5%ba%a6.md">12 实战：优化并提高Tomcat启动速度.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 热点问题答疑（1）：如何学习源码？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/13%20%e7%83%ad%e7%82%b9%e9%97%ae%e9%a2%98%e7%ad%94%e7%96%91%ef%bc%881%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e5%ad%a6%e4%b9%a0%e6%ba%90%e7%a0%81%ef%bc%9f.md">13 热点问题答疑（1）：如何学习源码？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 NioEndpoint组件：Tomcat如何实现非阻塞I_O？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/14%20NioEndpoint%e7%bb%84%e4%bb%b6%ef%bc%9aTomcat%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e9%9d%9e%e9%98%bb%e5%a1%9eI_O%ef%bc%9f.md">14 NioEndpoint组件：Tomcat如何实现非阻塞I_O？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 Nio2Endpoint组件：Tomcat如何实现异步I_O？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/15%20Nio2Endpoint%e7%bb%84%e4%bb%b6%ef%bc%9aTomcat%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e5%bc%82%e6%ad%a5I_O%ef%bc%9f.md">15 Nio2Endpoint组件：Tomcat如何实现异步I_O？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 AprEndpoint组件：Tomcat APR提高I_O性能的秘密.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/16%20AprEndpoint%e7%bb%84%e4%bb%b6%ef%bc%9aTomcat%20APR%e6%8f%90%e9%ab%98I_O%e6%80%a7%e8%83%bd%e7%9a%84%e7%a7%98%e5%af%86.md">16 AprEndpoint组件：Tomcat APR提高I_O性能的秘密.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 Executor组件：Tomcat如何扩展Java线程池？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/17%20Executor%e7%bb%84%e4%bb%b6%ef%bc%9aTomcat%e5%a6%82%e4%bd%95%e6%89%a9%e5%b1%95Java%e7%ba%bf%e7%a8%8b%e6%b1%a0%ef%bc%9f.md">17 Executor组件：Tomcat如何扩展Java线程池？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 新特性：Tomcat如何支持WebSocket？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/18%20%e6%96%b0%e7%89%b9%e6%80%a7%ef%bc%9aTomcat%e5%a6%82%e4%bd%95%e6%94%af%e6%8c%81WebSocket%ef%bc%9f.md">18 新特性：Tomcat如何支持WebSocket？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 比较：Jetty的线程策略EatWhatYouKill.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/19%20%e6%af%94%e8%be%83%ef%bc%9aJetty%e7%9a%84%e7%ba%bf%e7%a8%8b%e7%ad%96%e7%95%a5EatWhatYouKill.md">19 比较：Jetty的线程策略EatWhatYouKill.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 总结：Tomcat和Jetty中的对象池技术.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/20%20%e6%80%bb%e7%bb%93%ef%bc%9aTomcat%e5%92%8cJetty%e4%b8%ad%e7%9a%84%e5%af%b9%e8%b1%a1%e6%b1%a0%e6%8a%80%e6%9c%af.md">20 总结：Tomcat和Jetty中的对象池技术.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 总结：Tomcat和Jetty的高性能、高并发之道.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/21%20%e6%80%bb%e7%bb%93%ef%bc%9aTomcat%e5%92%8cJetty%e7%9a%84%e9%ab%98%e6%80%a7%e8%83%bd%e3%80%81%e9%ab%98%e5%b9%b6%e5%8f%91%e4%b9%8b%e9%81%93.md">21 总结：Tomcat和Jetty的高性能、高并发之道.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 热点问题答疑（2）：内核如何阻塞与唤醒进程？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/22%20%e7%83%ad%e7%82%b9%e9%97%ae%e9%a2%98%e7%ad%94%e7%96%91%ef%bc%882%ef%bc%89%ef%bc%9a%e5%86%85%e6%a0%b8%e5%a6%82%e4%bd%95%e9%98%bb%e5%a1%9e%e4%b8%8e%e5%94%a4%e9%86%92%e8%bf%9b%e7%a8%8b%ef%bc%9f.md">22 热点问题答疑（2）：内核如何阻塞与唤醒进程？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 Host容器：Tomcat如何实现热部署和热加载？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/23%20Host%e5%ae%b9%e5%99%a8%ef%bc%9aTomcat%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e7%83%ad%e9%83%a8%e7%bd%b2%e5%92%8c%e7%83%ad%e5%8a%a0%e8%bd%bd%ef%bc%9f.md">23 Host容器：Tomcat如何实现热部署和热加载？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 Context容器（上）：Tomcat如何打破双亲委托机制？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/24%20Context%e5%ae%b9%e5%99%a8%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9aTomcat%e5%a6%82%e4%bd%95%e6%89%93%e7%a0%b4%e5%8f%8c%e4%ba%b2%e5%a7%94%e6%89%98%e6%9c%ba%e5%88%b6%ef%bc%9f.md">24 Context容器（上）：Tomcat如何打破双亲委托机制？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25 Context容器（中）：Tomcat如何隔离Web应用？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/25%20Context%e5%ae%b9%e5%99%a8%ef%bc%88%e4%b8%ad%ef%bc%89%ef%bc%9aTomcat%e5%a6%82%e4%bd%95%e9%9a%94%e7%a6%bbWeb%e5%ba%94%e7%94%a8%ef%bc%9f.md">25 Context容器（中）：Tomcat如何隔离Web应用？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 Context容器（下）：Tomcat如何实现Servlet规范？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/26%20Context%e5%ae%b9%e5%99%a8%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9aTomcat%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0Servlet%e8%a7%84%e8%8c%83%ef%bc%9f.md">26 Context容器（下）：Tomcat如何实现Servlet规范？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 新特性：Tomcat如何支持异步Servlet？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/27%20%e6%96%b0%e7%89%b9%e6%80%a7%ef%bc%9aTomcat%e5%a6%82%e4%bd%95%e6%94%af%e6%8c%81%e5%bc%82%e6%ad%a5Servlet%ef%bc%9f.md">27 新特性：Tomcat如何支持异步Servlet？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 新特性：Spring Boot如何使用内嵌式的Tomcat和Jetty？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/28%20%e6%96%b0%e7%89%b9%e6%80%a7%ef%bc%9aSpring%20Boot%e5%a6%82%e4%bd%95%e4%bd%bf%e7%94%a8%e5%86%85%e5%b5%8c%e5%bc%8f%e7%9a%84Tomcat%e5%92%8cJetty%ef%bc%9f.md">28 新特性：Spring Boot如何使用内嵌式的Tomcat和Jetty？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 比较：Jetty如何实现具有上下文信息的责任链？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/29%20%e6%af%94%e8%be%83%ef%bc%9aJetty%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e5%85%b7%e6%9c%89%e4%b8%8a%e4%b8%8b%e6%96%87%e4%bf%a1%e6%81%af%e7%9a%84%e8%b4%a3%e4%bb%bb%e9%93%be%ef%bc%9f.md">29 比较：Jetty如何实现具有上下文信息的责任链？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30 热点问题答疑（3）：Spring框架中的设计模式.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/30%20%e7%83%ad%e7%82%b9%e9%97%ae%e9%a2%98%e7%ad%94%e7%96%91%ef%bc%883%ef%bc%89%ef%bc%9aSpring%e6%a1%86%e6%9e%b6%e4%b8%ad%e7%9a%84%e8%ae%be%e8%ae%a1%e6%a8%a1%e5%bc%8f.md">30 热点问题答疑（3）：Spring框架中的设计模式.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31 Logger组件：Tomcat的日志框架及实战.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/31%20Logger%e7%bb%84%e4%bb%b6%ef%bc%9aTomcat%e7%9a%84%e6%97%a5%e5%bf%97%e6%a1%86%e6%9e%b6%e5%8f%8a%e5%ae%9e%e6%88%98.md">31 Logger组件：Tomcat的日志框架及实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32 Manager组件：Tomcat的Session管理机制解析.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/32%20Manager%e7%bb%84%e4%bb%b6%ef%bc%9aTomcat%e7%9a%84Session%e7%ae%a1%e7%90%86%e6%9c%ba%e5%88%b6%e8%a7%a3%e6%9e%90.md">32 Manager组件：Tomcat的Session管理机制解析.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33 Cluster组件：Tomcat的集群通信原理.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/33%20Cluster%e7%bb%84%e4%bb%b6%ef%bc%9aTomcat%e7%9a%84%e9%9b%86%e7%be%a4%e9%80%9a%e4%bf%a1%e5%8e%9f%e7%90%86.md">33 Cluster组件：Tomcat的集群通信原理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34 JVM GC原理及调优的基本思路.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/34%20JVM%20GC%e5%8e%9f%e7%90%86%e5%8f%8a%e8%b0%83%e4%bc%98%e7%9a%84%e5%9f%ba%e6%9c%ac%e6%80%9d%e8%b7%af.md">34 JVM GC原理及调优的基本思路.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35 如何监控Tomcat的性能？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/35%20%e5%a6%82%e4%bd%95%e7%9b%91%e6%8e%a7Tomcat%e7%9a%84%e6%80%a7%e8%83%bd%ef%bc%9f.md">35 如何监控Tomcat的性能？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36 Tomcat I_O和线程池的并发调优.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/36%20Tomcat%20I_O%e5%92%8c%e7%ba%bf%e7%a8%8b%e6%b1%a0%e7%9a%84%e5%b9%b6%e5%8f%91%e8%b0%83%e4%bc%98.md">36 Tomcat I_O和线程池的并发调优.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37 Tomcat内存溢出的原因分析及调优.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/37%20Tomcat%e5%86%85%e5%ad%98%e6%ba%a2%e5%87%ba%e7%9a%84%e5%8e%9f%e5%9b%a0%e5%88%86%e6%9e%90%e5%8f%8a%e8%b0%83%e4%bc%98.md">37 Tomcat内存溢出的原因分析及调优.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38 Tomcat拒绝连接原因分析及网络优化.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/38%20Tomcat%e6%8b%92%e7%bb%9d%e8%bf%9e%e6%8e%a5%e5%8e%9f%e5%9b%a0%e5%88%86%e6%9e%90%e5%8f%8a%e7%bd%91%e7%bb%9c%e4%bc%98%e5%8c%96.md">38 Tomcat拒绝连接原因分析及网络优化.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39 Tomcat进程占用CPU过高怎么办？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/39%20Tomcat%e8%bf%9b%e7%a8%8b%e5%8d%a0%e7%94%a8CPU%e8%bf%87%e9%ab%98%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">39 Tomcat进程占用CPU过高怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40 谈谈Jetty性能调优的思路.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/40%20%e8%b0%88%e8%b0%88Jetty%e6%80%a7%e8%83%bd%e8%b0%83%e4%bc%98%e7%9a%84%e6%80%9d%e8%b7%af.md">40 谈谈Jetty性能调优的思路.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="41 热点问题答疑（4）： Tomcat和Jetty有哪些不同？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/41%20%e7%83%ad%e7%82%b9%e9%97%ae%e9%a2%98%e7%ad%94%e7%96%91%ef%bc%884%ef%bc%89%ef%bc%9a%20Tomcat%e5%92%8cJetty%e6%9c%89%e5%93%aa%e4%ba%9b%e4%b8%8d%e5%90%8c%ef%bc%9f.md">41 热点问题答疑（4）： Tomcat和Jetty有哪些不同？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="特别放送 如何持续保持对学习的兴趣？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/%e7%89%b9%e5%88%ab%e6%94%be%e9%80%81%20%e5%a6%82%e4%bd%95%e6%8c%81%e7%bb%ad%e4%bf%9d%e6%8c%81%e5%af%b9%e5%ad%a6%e4%b9%a0%e7%9a%84%e5%85%b4%e8%b6%a3%ef%bc%9f.md">特别放送 如何持续保持对学习的兴趣？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="结束语 静下心来，品味经典.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Tomcat%20%20Jetty/%e7%bb%93%e6%9d%9f%e8%af%ad%20%e9%9d%99%e4%b8%8b%e5%bf%83%e6%9d%a5%ef%bc%8c%e5%93%81%e5%91%b3%e7%bb%8f%e5%85%b8.md">结束语 静下心来，品味经典.md</a>
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
                            <h1 id="title" data-id="41 热点问题答疑（4）： Tomcat和Jetty有哪些不同？" class="title">41 热点问题答疑（4）： Tomcat和Jetty有哪些不同？</h1>
                            <div><p>作为专栏最后一个模块的答疑文章，我想是时候总结一下Tomcat和Jetty的区别了。专栏里也有同学给我留言，询问有关Tomcat和Jetty在系统选型时需要考虑的地方，今天我也会通过一个实战案例来比较一下Tomcat和Jetty在实际场景下的表现，帮你在做选型时有更深的理解。</p>

<p>我先来概括一下Tomcat和Jetty两者最大的区别。大体来说，Tomcat的核心竞争力是<strong>成熟稳定</strong>，因为它经过了多年的市场考验，应用也相当广泛，对于比较复杂的企业级应用支持得更加全面。也因为如此，Tomcat在整体结构上比Jetty更加复杂，功能扩展方面可能不如Jetty那么方便。</p>

<p>而Jetty比较年轻，设计上更加<strong>简洁小巧</strong>，配置也比较简单，功能也支持方便地扩展和裁剪，比如我们可以把Jetty的SessionHandler去掉，以节省内存资源，因此Jetty还可以运行在小型的嵌入式设备中，比如手机和机顶盒。当然，我们也可以自己开发一个Handler，加入Handler链中用来扩展Jetty的功能。值得一提的是，Hadoop和Solr都嵌入了Jetty作为Web服务器。</p>

<p>从设计的角度来看，Tomcat的架构基于一种多级容器的模式，这些容器组件具有父子关系，所有组件依附于这个骨架，而且这个骨架是不变的，我们在扩展Tomcat的功能时也需要基于这个骨架，因此Tomcat在设计上相对来说比较复杂。当然Tomcat也提供了较好的扩展机制，比如我们可以自定义一个Valve，但相对来说学习成本还是比较大的。而Jetty采用Handler责任链模式。由于Handler之间的关系比较松散，Jetty提供HandlerCollection可以帮助开发者方便地构建一个Handler链，同时也提供了ScopeHandler帮助开发者控制Handler链的访问顺序。关于这部分内容，你可以回忆一下专栏里讲的回溯方式的责任链模式。</p>

<p>说了一堆理论，你可能觉得还是有点抽象，接下来我们通过一个实例，来压测一下Tomcat和Jetty，看看在同等流量压力下，Tomcat和Jetty分别表现如何。需要说明的是，通常我们从吞吐量、延迟和错误率这三个方面来比较结果。</p>

<p>测试的计划是这样的，我们还是用<a href="http://time.geekbang.org/column/article/112271" target="_blank">专栏第36期</a>中的Spring Boot应用程序。首先用Spring Boot默认的Tomcat作为内嵌式Web容器，经过一轮压测后，将内嵌式的Web容器换成Jetty，再做一轮测试，然后比较结果。为了方便观察各种指标，我在本地开发机器上做这个实验。</p>

<p>我们会在每个请求的处理过程中休眠1秒，适当地模拟Web应用的I/O等待时间。JMeter客户端的线程数为100，压测持续10分钟。在JMeter中创建一个Summary Report，在这个页面上，可以看到各种统计指标。</p>

<p><img src="assets/8d0122c696014dd38cdd1c05a24b5d03.jpg" alt="" /></p>

<p>第一步，压测Tomcat。启动Spring Boot程序和JMeter，持续10分钟，以下是测试结果，结果分为两部分：</p>

<p><strong>吞吐量、延迟和错误率</strong></p>

<p><img src="assets/20c5fae1b88e4ba68ac7e044aa7f2fc3.jpg" alt="" /></p>

<p><strong>资源使用情况</strong></p>

<p><img src="assets/c2f302997824472985e6c5c11eecc0f9.jpg" alt="" /></p>

<p>第二步，我们将Spring Boot的Web容器替换成Jetty，具体步骤是在pom.xml文件中的spring-boot-starter-web依赖修改下面这样：</p>

<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;exclusions&gt;
        &lt;exclusion&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;
        &lt;/exclusion&gt;
    &lt;/exclusions&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-jetty&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre>

<p>编译打包，启动Spring Boot，再启动JMeter压测，以下是测试结果：</p>

<p><strong>吞吐量、延迟和错误率</strong></p>

<p><img src="assets/7906384d809c49abbeae22e31bbd21ef.jpg" alt="" /></p>

<p><strong>资源使用情况</strong></p>

<p><img src="assets/35d544e2d6964faa889f55cb732dd7b9.jpg" alt="" /></p>

<p>下面我们通过一个表格来对比Tomcat和Jetty：</p>

<p><img src="assets/37eddb689fd240e2b61882dd48a57ae0.jpg" alt="" /></p>

<p>从表格中的数据我们可以看到：</p>

<ul>
<li><strong>Jetty在吞吐量和响应速度方面稍有优势，并且Jetty消耗的线程和内存资源明显比Tomcat要少，这也恰好说明了Jetty在设计上更加小巧和轻量级的特点。</strong></li>
<li><strong>但是Jetty有2.45%的错误率，而Tomcat没有任何错误，并且我经过多次测试都是这个结果。因此我们可以认为Tomcat比Jetty更加成熟和稳定。</strong></li>
</ul>

<p>当然由于测试场景的限制，以上数据并不能完全反映Tomcat和Jetty的真实能力。但是它可以在我们做选型的时候提供一些参考：如果系统的目标是资源消耗尽量少，并且对稳定性要求没有那么高，可以选择轻量级的Jetty；如果你的系统是比较关键的企业级应用，建议还是选择Tomcat比较稳妥。</p>

<p>最后用一句话总结Tomcat和Jetty的区别：<strong>Tomcat好比是一位工作多年比较成熟的工程师，轻易不会出错、不会掉链子，但是他有自己的想法，不会轻易做出改变。而Jetty更像是一位年轻的后起之秀，脑子转得很快，可塑性也很强，但有时候也会犯一点小错误。</strong></p>

<p>不知道今天的内容你消化得如何？如果还有疑问，请大胆的在留言区提问，也欢迎你把你的课后思考和心得记录下来，与我和其他同学一起讨论。如果你觉得今天有所收获，欢迎你把它分享给你的朋友。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#2a464646131e1b1b1a1d6a4d474b434604494547" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f15b7728d7b7771',t:'MTczNDA5MDQxNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>