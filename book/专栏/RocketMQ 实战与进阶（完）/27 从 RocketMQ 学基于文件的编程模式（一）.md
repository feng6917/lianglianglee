<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=27&#32;从&#32;RocketMQ&#32;学基于文件的编程模式（一）>
        <link rel="icon" href="/static/favicon.png">
        <title>27 从 RocketMQ 学基于文件的编程模式（一） </title>
        
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
                        <a class="menu-item" id="01 搭建学习环境准备篇.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/01%20%e6%90%ad%e5%bb%ba%e5%ad%a6%e4%b9%a0%e7%8e%af%e5%a2%83%e5%87%86%e5%a4%87%e7%af%87.md">01 搭建学习环境准备篇.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 RocketMQ 核心概念扫盲篇.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/02%20RocketMQ%20%e6%a0%b8%e5%bf%83%e6%a6%82%e5%bf%b5%e6%89%ab%e7%9b%b2%e7%af%87.md">02 RocketMQ 核心概念扫盲篇.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 消息发送 API 详解与版本变迁说明.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/03%20%e6%b6%88%e6%81%af%e5%8f%91%e9%80%81%20API%20%e8%af%a6%e8%a7%a3%e4%b8%8e%e7%89%88%e6%9c%ac%e5%8f%98%e8%bf%81%e8%af%b4%e6%98%8e.md">03 消息发送 API 详解与版本变迁说明.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 结合实际应用场景谈消息发送.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/04%20%e7%bb%93%e5%90%88%e5%ae%9e%e9%99%85%e5%ba%94%e7%94%a8%e5%9c%ba%e6%99%af%e8%b0%88%e6%b6%88%e6%81%af%e5%8f%91%e9%80%81.md">04 结合实际应用场景谈消息发送.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 消息发送核心参数与工作原理详解.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/05%20%e6%b6%88%e6%81%af%e5%8f%91%e9%80%81%e6%a0%b8%e5%bf%83%e5%8f%82%e6%95%b0%e4%b8%8e%e5%b7%a5%e4%bd%9c%e5%8e%9f%e7%90%86%e8%af%a6%e8%a7%a3.md">05 消息发送核心参数与工作原理详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 消息发送常见错误与解决方案.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/06%20%e6%b6%88%e6%81%af%e5%8f%91%e9%80%81%e5%b8%b8%e8%a7%81%e9%94%99%e8%af%af%e4%b8%8e%e8%a7%a3%e5%86%b3%e6%96%b9%e6%a1%88.md">06 消息发送常见错误与解决方案.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 事务消息使用及方案选型思考.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/07%20%e4%ba%8b%e5%8a%a1%e6%b6%88%e6%81%af%e4%bd%bf%e7%94%a8%e5%8f%8a%e6%96%b9%e6%a1%88%e9%80%89%e5%9e%8b%e6%80%9d%e8%80%83.md">07 事务消息使用及方案选型思考.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 消息消费 API 与版本变迁说明.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/08%20%e6%b6%88%e6%81%af%e6%b6%88%e8%b4%b9%20API%20%e4%b8%8e%e7%89%88%e6%9c%ac%e5%8f%98%e8%bf%81%e8%af%b4%e6%98%8e.md">08 消息消费 API 与版本变迁说明.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 DefaultMQPushConsumer 核心参数与工作原理.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/09%20DefaultMQPushConsumer%20%e6%a0%b8%e5%bf%83%e5%8f%82%e6%95%b0%e4%b8%8e%e5%b7%a5%e4%bd%9c%e5%8e%9f%e7%90%86.md">09 DefaultMQPushConsumer 核心参数与工作原理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 DefaultMQPushConsumer 使用示例与注意事项.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/10%20DefaultMQPushConsumer%20%e4%bd%bf%e7%94%a8%e7%a4%ba%e4%be%8b%e4%b8%8e%e6%b3%a8%e6%84%8f%e4%ba%8b%e9%a1%b9.md">10 DefaultMQPushConsumer 使用示例与注意事项.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 DefaultLitePullConsumer 核心参数与实战.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/11%20DefaultLitePullConsumer%20%e6%a0%b8%e5%bf%83%e5%8f%82%e6%95%b0%e4%b8%8e%e5%ae%9e%e6%88%98.md">11 DefaultLitePullConsumer 核心参数与实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 结合实际场景再聊 DefaultLitePullConsumer 的使用.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/12%20%e7%bb%93%e5%90%88%e5%ae%9e%e9%99%85%e5%9c%ba%e6%99%af%e5%86%8d%e8%81%8a%20DefaultLitePullConsumer%20%e7%9a%84%e4%bd%bf%e7%94%a8.md">12 结合实际场景再聊 DefaultLitePullConsumer 的使用.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 结合实际场景顺序消费、消息过滤实战.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/13%20%e7%bb%93%e5%90%88%e5%ae%9e%e9%99%85%e5%9c%ba%e6%99%af%e9%a1%ba%e5%ba%8f%e6%b6%88%e8%b4%b9%e3%80%81%e6%b6%88%e6%81%af%e8%bf%87%e6%bb%a4%e5%ae%9e%e6%88%98.md">13 结合实际场景顺序消费、消息过滤实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 消息消费积压问题排查实战.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/14%20%e6%b6%88%e6%81%af%e6%b6%88%e8%b4%b9%e7%a7%af%e5%8e%8b%e9%97%ae%e9%a2%98%e6%8e%92%e6%9f%a5%e5%ae%9e%e6%88%98.md">14 消息消费积压问题排查实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 RocketMQ 常用命令实战.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/15%20RocketMQ%20%e5%b8%b8%e7%94%a8%e5%91%bd%e4%bb%a4%e5%ae%9e%e6%88%98.md">15 RocketMQ 常用命令实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 RocketMQ 集群性能摸高.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/16%20RocketMQ%20%e9%9b%86%e7%be%a4%e6%80%a7%e8%83%bd%e6%91%b8%e9%ab%98.md">16 RocketMQ 集群性能摸高.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 RocketMQ 集群性能调优.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/17%20RocketMQ%20%e9%9b%86%e7%be%a4%e6%80%a7%e8%83%bd%e8%b0%83%e4%bc%98.md">17 RocketMQ 集群性能调优.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 RocketMQ 集群平滑运维.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/18%20RocketMQ%20%e9%9b%86%e7%be%a4%e5%b9%b3%e6%bb%91%e8%bf%90%e7%bb%b4.md">18 RocketMQ 集群平滑运维.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 RocketMQ 集群监控（一）.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/19%20RocketMQ%20%e9%9b%86%e7%be%a4%e7%9b%91%e6%8e%a7%ef%bc%88%e4%b8%80%ef%bc%89.md">19 RocketMQ 集群监控（一）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 RocketMQ 集群监控（二）.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/20%20RocketMQ%20%e9%9b%86%e7%be%a4%e7%9b%91%e6%8e%a7%ef%bc%88%e4%ba%8c%ef%bc%89.md">20 RocketMQ 集群监控（二）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 RocketMQ 集群告警.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/21%20RocketMQ%20%e9%9b%86%e7%be%a4%e5%91%8a%e8%ad%a6.md">21 RocketMQ 集群告警.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 RocketMQ 集群踩坑记.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/22%20RocketMQ%20%e9%9b%86%e7%be%a4%e8%b8%a9%e5%9d%91%e8%ae%b0.md">22 RocketMQ 集群踩坑记.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 消息轨迹、ACL 与多副本搭建.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/23%20%e6%b6%88%e6%81%af%e8%bd%a8%e8%bf%b9%e3%80%81ACL%20%e4%b8%8e%e5%a4%9a%e5%89%af%e6%9c%ac%e6%90%ad%e5%bb%ba.md">23 消息轨迹、ACL 与多副本搭建.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 RocketMQ-Console 常用页面指标获取逻辑.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/24%20RocketMQ-Console%20%e5%b8%b8%e7%94%a8%e9%a1%b5%e9%9d%a2%e6%8c%87%e6%a0%87%e8%8e%b7%e5%8f%96%e9%80%bb%e8%be%91.md">24 RocketMQ-Console 常用页面指标获取逻辑.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25 RocketMQ Nameserver 背后的设计理念.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/25%20RocketMQ%20Nameserver%20%e8%83%8c%e5%90%8e%e7%9a%84%e8%ae%be%e8%ae%a1%e7%90%86%e5%bf%b5.md">25 RocketMQ Nameserver 背后的设计理念.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 Java 并发编程实战.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/26%20Java%20%e5%b9%b6%e5%8f%91%e7%bc%96%e7%a8%8b%e5%ae%9e%e6%88%98.md">26 Java 并发编程实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 从 RocketMQ 学基于文件的编程模式（一）.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/27%20%e4%bb%8e%20RocketMQ%20%e5%ad%a6%e5%9f%ba%e4%ba%8e%e6%96%87%e4%bb%b6%e7%9a%84%e7%bc%96%e7%a8%8b%e6%a8%a1%e5%bc%8f%ef%bc%88%e4%b8%80%ef%bc%89.md">27 从 RocketMQ 学基于文件的编程模式（一）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 从 RocketMQ 学基于文件的编程模式（二）.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/28%20%e4%bb%8e%20RocketMQ%20%e5%ad%a6%e5%9f%ba%e4%ba%8e%e6%96%87%e4%bb%b6%e7%9a%84%e7%bc%96%e7%a8%8b%e6%a8%a1%e5%bc%8f%ef%bc%88%e4%ba%8c%ef%bc%89.md">28 从 RocketMQ 学基于文件的编程模式（二）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 从 RocketMQ 学 Netty 网络编程技巧.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/29%20%e4%bb%8e%20RocketMQ%20%e5%ad%a6%20Netty%20%e7%bd%91%e7%bb%9c%e7%bc%96%e7%a8%8b%e6%8a%80%e5%b7%a7.md">29 从 RocketMQ 学 Netty 网络编程技巧.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30 RocketMQ 学习方法之我见.md" href="/%e4%b8%93%e6%a0%8f/RocketMQ%20%e5%ae%9e%e6%88%98%e4%b8%8e%e8%bf%9b%e9%98%b6%ef%bc%88%e5%ae%8c%ef%bc%89/30%20RocketMQ%20%e5%ad%a6%e4%b9%a0%e6%96%b9%e6%b3%95%e4%b9%8b%e6%88%91%e8%a7%81.md">30 RocketMQ 学习方法之我见.md</a>
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
                            <h1 id="title" data-id="27 从 RocketMQ 学基于文件的编程模式（一）" class="title">27 从 RocketMQ 学基于文件的编程模式（一）</h1>
                            <div><h3 id="消息存储格式看文件编程">消息存储格式看文件编程</h3>

<h4 id="从-commitlog-文件的设计来学文件编程"><strong>从 commitlog 文件的设计来学文件编程</strong></h4>

<p>我们知道 RocketMQ 的全量消息存储在 commitlog 文件中，每条消息的大小不一致，那如何对消息进行组织呢？当消息写入到文件中后，如果判别一条消息的开始与结束呢？</p>

<p>首先基于文件的编程模型，首先需要定义一套消息存储格式，用来表示一条完整的消息，例如 RocketMQ 的消息存储格式如下图所示：</p>

<p><img src="assets/20200909224001643.png" alt="1" /></p>

<p>从这里我们可以得到一种通用的数据存储格式定义实践：<strong>通常存储协议遵循 Header + Body</strong>，并且 <strong>Header 部分是定长</strong>的，存放一些基本信息，body 存储数据，在 RocketMQ 的消息存储协议，我们可以将消息体的大小这 4 个字节看成是 Header，后面所有的字段认为是与消息相关的业务属性，按照指定格式进行组装即可。</p>

<p>针对 Header + Body 这种协议，我们通常的提取一条消息会分成两个步骤，先将 Header 读取到 ByteBuffer 中，在 RocketMQ 中的消息体，会读出一条消息的长度，然后就可以从<strong>消息的开头</strong>处读取该条消息长度的字节，然后就按照预先定义的格式解析各个部分即可。</p>

<p>那问题又来了，如果确定一条消息的开头呢?难不成从文件的开始处开始遍历？</p>

<p>正如关系型数据那样会为每一条数据引入一个 ID 字段，在基于文件编程的模型中，也会为一条消息引入一个<strong>身份标志</strong>：<strong>消息物理偏移量，即消息存储在文件的起始位置</strong>。</p>

<p>物理偏移量的设计如下图所示：</p>

<p><img src="assets/20200909224010561.png" alt="2" /></p>

<p>有了文件的起始偏移量 + SIZE，从一个文件中提取一条完整的消息就显得轻而易举了。</p>

<p>从 commitlog 文件的组织来看，通常基于文件的编程，每一个文件前都会填充一个魔数，在文件末尾还会设计一个用于填充的数用 PAD 表示，例如如果一个文件无法容纳一条完整的消息，并不会将一条消息分开存储，而是用 PAD 进行填充。</p>

<h4 id="从-consumequeue-来看文件存储设计"><strong>从 consumequeue 来看文件存储设计</strong></h4>

<p>commitog 文件的存储如果是根据偏移量定位消息会非常方便，但如果要基于 Topic 去查询消息，就没那么方便了，故为了方便根据 topic 查询消息，引入了 consumequeue 文件。</p>

<p><img src="assets/2020090922401933.png" alt="3" /></p>

<p>consumequeue 设计极具技巧性，其每个条目使用固定长度（8 字节 commitlog 物理偏移量、4 字节消息长度、8 字节 tag hashcode），这里不是存储 tag 的原始字符串，而是存储 hashcode，目的就是确保每个条目的长度固定，可以使用访问类似数组下标的方式来快速定位条目，极大的提高了 ConsumeQueue 文件的读取性能。</p>

<p><strong>故基于文件的存储设计，需要针对性的设计一些索引，索引文件的设计，要确保条目的固定长度，使之可以使用类似访问数组的方式快速定位数据。</strong></p>

<h3 id="内存映射与页缓存">内存映射与页缓存</h3>

<p>解决了数据的存储格式与唯一标识，接下来就要考虑如何提高写入数据的性能。在基于文件编程的模型中，为了方便数据的删除，通常采取小文件，并且使用固定长度的文件，例如 RocketMQ 中 commitlog 文件夹会生成很多大小相等的文件。</p>

<p><img src="assets/20200909224027448.png" alt="4" /></p>

<p><strong>使用定长的文件，其主要目的是方便进行内存映射。</strong>通过内存映射机制，将磁盘文件映射到内存，以一种访问内存的方式访问磁盘，极大的提高了文件的操作性能。</p>

<p>在 Java 中使用内存映射的示例代码如下：</p>

<pre><code class="language-java">FileChannel fileChannel = new RandomAccessFile(this.file, &quot;rw&quot;).getChannel();
MappedByteBuffer mappedByteBuffer = this.fileChannel.map(MapMode.READ_WRITE, 0, fileSize);

</code></pre>

<p>实现要点如下：</p>

<ul>
<li>首先需要通过 RandomAccessFile 构建一个文件写入通道 FileChannel，提供基于块写入的通道。</li>
<li>通过 FileChannel 的 map 方法创建内存映射。</li>
</ul>

<p><strong>在 Linux 操作系统中，MappedByteBuffer 基本可以看成是页缓存（PageCache）。</strong>在 Linux 操作系统中的内存使用策略时，会最大可能的利用机器的物理内存，并常驻内存中，就是所谓的页缓存，只有当操作系统的内存不够的情况下，会采用缓存置换算法例如 LRU，将不常用的页缓存回收，即操作系统会自动管理这部分内存，无需使用者关心。如果从页缓存中查询数据时未命中，会产生缺页中断，由操作系统自动将文件中的内容加载到页缓存。</p>

<p>内存映射，将磁盘数据映射到磁盘，通过向内存映射中写入数据，这些数据并不会立即同步到磁盘，需用定时刷盘或由操作系统决定何时将数据持久化到磁盘。故存储的在页缓存的中的数据，如果 RocketMQ Broker 进程异常退出，存储在页缓存中的数据并不会丢失，操作系统会定时页缓存中的数据持久化到磁盘，做到安全可靠。<strong>不过如果是机器断电等异常情况，存储在页缓存中的数据就有可能丢失。</strong></p>

<h3 id="顺序写">顺序写</h3>

<p>基于磁盘的读写，提高其写入性能的另外一个设计原理是<strong>磁盘顺序写</strong>。磁盘顺序写广泛用在基于文件的存储模型中，大家不妨思考一下 MySQL Redo 日志的引入目的，我们知道在 MySQL InnoDB 的存储引擎中，会有一个内存 Pool，用来缓存磁盘的文件块，当更新语句将数据修改后，会首先在内存中进行修改，然后将变更写入到 redo 文件（关键是会执行一次 force，同步刷盘，确保数据被持久化到磁盘中），但此时并不会同步数据文件，其操作流程如下图所示：</p>

<p><img src="assets/20200909224036499.png" alt="5" /></p>

<p>如果不引入 redo，更新 order，更新 user，首先会更新 InnoDB Pool（更新内存），然后定时刷写到磁盘，由于不同的表对应的数据文件不一致，故如果每更新内存中的数据就刷盘，那就是大量的随机写磁盘，性能低下，故为了避免这个问题，首先引入一个顺序写 redo 日志，然后定时同步内存中的数据到数据文件，虽然引入了多余的 redo 顺序写，但整体上获得的性能更好，从这里也可以看出顺序写的性能比随机写要高不少。</p>

<p><strong>故基于文件的编程模型中，设计时一定要设计成顺序写，顺序写一个非常的特点是只追究，不更新。</strong></p>

<h3 id="引用计数器">引用计数器</h3>

<p>在面向文件基于 NIO 的编程中，基本都是面向 ByteBuffer 进行编程，并且对 ByteBuffer 进行读操作，通常会使用其 slince 方法，两个 ByteBuffer 对象的内存地址相同，但指针不一样，通常使用示例如下：</p>

<p><img src="assets/2020090922404497.png" alt="6" /></p>

<p>上面的方法的作用就是从一个映射文件，例如 commitlog、ConsumeQueue 文件中的某一个位置读取指定长度的数据，这里就是从内存映射 MappedBytebuffer slice 一个对象，共享其内部的存储，但维护独立的指针，这样做的好处就是避免了内存的拷贝，但与之带来的弊端就是较难管理，主要是 ByteBuffer 对象的释放会变得复杂起来。</p>

<p><strong>需要跟踪该 MappedByteBuffer 会 slice 多少次</strong>，在这些对象的声明周期没有结束后，不能随意的关闭 MappedByteBuffer，否则其他对象的内存无法访问，造成不可控制的错误，那 RocketMQ 是如何解决这个问题的呢？</p>

<p><strong>其解决方案是引入了引用计数器</strong>，即每次 slice 后 引用计数器增加一，释放后引用计数器减一，只有当前的引用计数器为 0，才可以真正释放。在 RocketMQ 中关于引用计数的实现如下：</p>

<p><img src="assets/20200909224052719.png" alt="7" /></p>

<p>在结合上图 MappedFile selectMappedBuffer 方法，我们来阐述其实现要点：</p>

<ol>
<li>对 MappedByteBuffer slice 是通过调用 hold 增加一次引用，即引用该 ByteBuffer 的引用计数器加一。</li>
<li>对返回后的 ByteBuffer，被封装在 SelectMappedBufferResult 中，该 ByteBuffer 的使用者在使用完毕后，会释放它，这个时候 ReferenceResource 的 release 方法会被调用，引用计数器会减一。</li>
</ol>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#84e8e8e8bdb0b5b5b4b3c4e3e9e5ede8aae7ebe9" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f1248082b71ede4',t:'MTczNDA1NDM5Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>