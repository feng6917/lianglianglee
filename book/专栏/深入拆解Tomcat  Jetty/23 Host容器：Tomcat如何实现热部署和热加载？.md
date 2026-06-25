<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=23&#32;Host容器：Tomcat如何实现热部署和热加载？>
        <link rel="icon" href="/static/favicon.png">
        <title>23 Host容器：Tomcat如何实现热部署和热加载？ </title>
        
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
                            <h1 id="title" data-id="23 Host容器：Tomcat如何实现热部署和热加载？" class="title">23 Host容器：Tomcat如何实现热部署和热加载？</h1>
                            <div><p>从这一期我们开始学习Tomcat的容器模块，来聊一聊各容器组件实现的功能，主要有热部署热加载、类加载机制以及Servlet规范的实现。最后还会谈到Spring Boot是如何与Web容器进行交互的。</p>

<p>今天我们首先来看热部署和热加载。要在运行的过程中升级Web应用，如果你不想重启系统，实现的方式有两种：热加载和热部署。</p>

<p>那如何实现热部署和热加载呢？它们跟类加载机制有关，具体来说就是：</p>

<ul>
<li>热加载的实现方式是Web容器启动一个后台线程，定期检测类文件的变化，如果有变化，就重新加载类，在这个过程中不会清空Session ，一般用在开发环境。</li>
<li>热部署原理类似，也是由后台线程定时检测Web应用的变化，但它会重新加载整个Web应用。这种方式会清空Session，比热加载更加干净、彻底，一般用在生产环境。</li>
</ul>

<p>今天我们来学习一下Tomcat是如何用后台线程来实现热加载和热部署的。Tomcat通过开启后台线程，使得各个层次的容器组件都有机会完成一些周期性任务。我们在实际工作中，往往也需要执行一些周期性的任务，比如监控程序周期性拉取系统的健康状态，就可以借鉴这种设计。</p>

<h2 id="tomcat的后台线程">Tomcat的后台线程</h2>

<p>要说开启后台线程做周期性的任务，有经验的同学马上会想到线程池中的ScheduledThreadPoolExecutor，它除了具有线程池的功能，还能够执行周期性的任务。Tomcat就是通过它来开启后台线程的：</p>

<pre><code>bgFuture = exec.scheduleWithFixedDelay(
              new ContainerBackgroundProcessor(),//要执行的Runnable
              backgroundProcessorDelay, //第一次执行延迟多久
              backgroundProcessorDelay, //之后每次执行间隔多久
              TimeUnit.SECONDS);        //时间单位
</code></pre>

<p>上面的代码调用了scheduleWithFixedDelay方法，传入了四个参数，第一个参数就是要周期性执行的任务类ContainerBackgroundProcessor，它是一个Runnable，同时也是ContainerBase的内部类，ContainerBase是所有容器组件的基类，我们来回忆一下容器组件有哪些，有Engine、Host、Context和Wrapper等，它们具有父子关系。</p>

<p><strong>ContainerBackgroundProcessor实现</strong></p>

<p>我们接来看ContainerBackgroundProcessor具体是如何实现的。</p>

<pre><code>protected class ContainerBackgroundProcessor implements Runnable {

    @Override
    public void run() {
        //请注意这里传入的参数是&quot;宿主类&quot;的实例
        processChildren(ContainerBase.this);
    }

    protected void processChildren(Container container) {
        try {
            //1. 调用当前容器的backgroundProcess方法。
            container.backgroundProcess();
            
            //2. 遍历所有的子容器，递归调用processChildren，
            //这样当前容器的子孙都会被处理            
            Container[] children = container.findChildren();
            for (int i = 0; i &lt; children.length; i++) {
            //这里请你注意，容器基类有个变量叫做backgroundProcessorDelay，如果大于0，表明子容器有自己的后台线程，无需父容器来调用它的processChildren方法。
                if (children[i].getBackgroundProcessorDelay() &lt;= 0) {
                    processChildren(children[i]);
                }
            }
        } catch (Throwable t) { ... }
</code></pre>

<p>上面的代码逻辑也是比较清晰的，首先ContainerBackgroundProcessor是一个Runnable，它需要实现run方法，它的run很简单，就是调用了processChildren方法。这里有个小技巧，它把“宿主类”，也就是<strong>ContainerBase的类实例当成参数传给了run方法</strong>。</p>

<p>而在processChildren方法里，就做了两步：调用当前容器的backgroundProcess方法，以及递归调用子孙的backgroundProcess方法。请你注意backgroundProcess是Container接口中的方法，也就是说所有类型的容器都可以实现这个方法，在这个方法里完成需要周期性执行的任务。</p>

<p>这样的设计意味着什么呢？我们只需要在顶层容器，也就是Engine容器中启动一个后台线程，那么这个线程<strong>不但会执行Engine容器的周期性任务，它还会执行所有子容器的周期性任务</strong>。</p>

<p><strong>backgroundProcess方法</strong></p>

<p>上述代码都是在基类ContainerBase中实现的，那具体容器类需要做什么呢？其实很简单，如果有周期性任务要执行，就实现backgroundProcess方法；如果没有，就重用基类ContainerBase的方法。ContainerBase的backgroundProcess方法实现如下：</p>

<pre><code>public void backgroundProcess() {

    //1.执行容器中Cluster组件的周期性任务
    Cluster cluster = getClusterInternal();
    if (cluster != null) {
        cluster.backgroundProcess();
    }
    
    //2.执行容器中Realm组件的周期性任务
    Realm realm = getRealmInternal();
    if (realm != null) {
        realm.backgroundProcess();
   }
   
   //3.执行容器中Valve组件的周期性任务
    Valve current = pipeline.getFirst();
    while (current != null) {
       current.backgroundProcess();
       current = current.getNext();
    }
    
    //4. 触发容器的&quot;周期事件&quot;，Host容器的监听器HostConfig就靠它来调用
    fireLifecycleEvent(Lifecycle.PERIODIC_EVENT, null);
}
</code></pre>

<p>从上面的代码可以看到，不仅每个容器可以有周期性任务，每个容器中的其他通用组件，比如跟集群管理有关的Cluster组件、跟安全管理有关的Realm组件都可以有自己的周期性任务。</p>

<p>我在前面的专栏里提到过，容器之间的链式调用是通过Pipeline-Valve机制来实现的，从上面的代码你可以看到容器中的Valve也可以有周期性任务，并且被ContainerBase统一处理。</p>

<p>请你特别注意的是，在backgroundProcess方法的最后，还触发了容器的“周期事件”。我们知道容器的生命周期事件有初始化、启动和停止等，那“周期事件”又是什么呢？它跟生命周期事件一样，是一种扩展机制，你可以这样理解：</p>

<p>又一段时间过去了，容器还活着，你想做点什么吗？如果你想做点什么，就创建一个监听器来监听这个“周期事件”，事件到了我负责调用你的方法。</p>

<p>总之，有了ContainerBase中的后台线程和backgroundProcess方法，各种子容器和通用组件不需要各自弄一个后台线程来处理周期性任务，这样的设计显得优雅和整洁。</p>

<h2 id="tomcat热加载">Tomcat热加载</h2>

<p>有了ContainerBase的周期性任务处理“框架”，作为具体容器子类，只需要实现自己的周期性任务就行。而Tomcat的热加载，就是在Context容器中实现的。Context容器的backgroundProcess方法是这样实现的：</p>

<pre><code>public void backgroundProcess() {

    //WebappLoader周期性的检查WEB-INF/classes和WEB-INF/lib目录下的类文件
    Loader loader = getLoader();
    if (loader != null) {
        loader.backgroundProcess();        
    }
    
    //Session管理器周期性的检查是否有过期的Session
    Manager manager = getManager();
    if (manager != null) {
        manager.backgroundProcess();
    }
    
    //周期性的检查静态资源是否有变化
    WebResourceRoot resources = getResources();
    if (resources != null) {
        resources.backgroundProcess();
    }
    
    //调用父类ContainerBase的backgroundProcess方法
    super.backgroundProcess();
}
</code></pre>

<p>从上面的代码我们看到Context容器通过WebappLoader来检查类文件是否有更新，通过Session管理器来检查是否有Session过期，并且通过资源管理器来检查静态资源是否有更新，最后还调用了父类ContainerBase的backgroundProcess方法。</p>

<p>这里我们要重点关注，WebappLoader是如何实现热加载的，它主要是调用了Context容器的reload方法，而Context的reload方法比较复杂，总结起来，主要完成了下面这些任务：</p>

<ol>
<li>停止和销毁Context容器及其所有子容器，子容器其实就是Wrapper，也就是说Wrapper里面Servlet实例也被销毁了。</li>
<li>停止和销毁Context容器关联的Listener和Filter。</li>
<li>停止和销毁Context下的Pipeline和各种Valve。</li>
<li>停止和销毁Context的类加载器，以及类加载器加载的类文件资源。</li>
<li>启动Context容器，在这个过程中会重新创建前面四步被销毁的资源。</li>
</ol>

<p>在这个过程中，类加载器发挥着关键作用。一个Context容器对应一个类加载器，类加载器在销毁的过程中会把它加载的所有类也全部销毁。Context容器在启动过程中，会创建一个新的类加载器来加载新的类文件。</p>

<p>在Context的reload方法里，并没有调用Session管理器的destroy方法，也就是说这个Context关联的Session是没有销毁的。你还需要注意的是，Tomcat的热加载默认是关闭的，你需要在conf目录下的context.xml文件中设置reloadable参数来开启这个功能，像下面这样：</p>

<pre><code>&lt;Context reloadable=&quot;true&quot;/&gt;
</code></pre>

<h2 id="tomcat热部署">Tomcat热部署</h2>

<p>我们再来看看热部署，热部署跟热加载的本质区别是，热部署会重新部署Web应用，原来的Context对象会整个被销毁掉，因此这个Context所关联的一切资源都会被销毁，包括Session。</p>

<p>那么Tomcat热部署又是由哪个容器来实现的呢？应该不是由Context，因为热部署过程中Context容器被销毁了，那么这个重担就落在Host身上了，因为它是Context的父容器。</p>

<p>跟Context不一样，Host容器并没有在backgroundProcess方法中实现周期性检测的任务，而是通过监听器HostConfig来实现的，HostConfig就是前面提到的“周期事件”的监听器，那“周期事件”达到时，HostConfig会做什么事呢？</p>

<pre><code>public void lifecycleEvent(LifecycleEvent event) {
    // 执行check方法。
    if (event.getType().equals(Lifecycle.PERIODIC_EVENT)) {
        check();
    } 
}
</code></pre>

<p>它执行了check方法，我们接着来看check方法里做了什么。</p>

<pre><code>protected void check() {

    if (host.getAutoDeploy()) {
        // 检查这个Host下所有已经部署的Web应用
        DeployedApplication[] apps =
            deployed.values().toArray(new DeployedApplication[0]);
            
        for (int i = 0; i &lt; apps.length; i++) {
            //检查Web应用目录是否有变化
            checkResources(apps[i], false);
        }

        //执行部署
        deployApps();
    }
}
</code></pre>

<p>其实HostConfig会检查webapps目录下的所有Web应用：</p>

<ul>
<li>如果原来Web应用目录被删掉了，就把相应Context容器整个销毁掉。</li>
<li>是否有新的Web应用目录放进来了，或者有新的WAR包放进来了，就部署相应的Web应用。</li>
</ul>

<p>因此HostConfig做的事情都是比较“宏观”的，它不会去检查具体类文件或者资源文件是否有变化，而是检查Web应用目录级别的变化。</p>

<h2 id="本期精华">本期精华</h2>

<p>今天我们学习Tomcat的热加载和热部署，它们的目的都是在不重启Tomcat的情况下实现Web应用的更新。</p>

<p>热加载的粒度比较小，主要是针对类文件的更新，通过创建新的类加载器来实现重新加载。而热部署是针对整个Web应用的，Tomcat会将原来的Context对象整个销毁掉，再重新创建Context容器对象。</p>

<p>热加载和热部署的实现都离不开后台线程的周期性检查，Tomcat在基类ContainerBase中统一实现了后台线程的处理逻辑，并在顶层容器Engine启动后台线程，这样子容器组件甚至各种通用组件都不需要自己去创建后台线程，这样的设计显得优雅整洁。</p>

<h2 id="课后思考">课后思考</h2>

<p>为什么Host容器不通过重写backgroundProcess方法来实现热部署呢？</p>

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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#ef838383d6dbdededfd8af88828e8683c18c8082" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f15b0c3cfac7771',t:'MTczNDA5MDE0My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>