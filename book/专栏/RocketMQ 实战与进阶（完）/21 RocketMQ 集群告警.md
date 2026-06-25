<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=21&#32;RocketMQ&#32;集群告警>
        <link rel="icon" href="/static/favicon.png">
        <title>21 RocketMQ 集群告警 </title>
        
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
                            <h1 id="title" data-id="21 RocketMQ 集群告警" class="title">21 RocketMQ 集群告警</h1>
                            <div><h3 id="前言">前言</h3>

<p>对集群健康状况、使用主题、消费组资源的巡检，发现达到阈值则发送告警信息给管理员或者资源申请者。监控是告警的基础，告警的巡检基于前面两篇文章中监控采集到的数据。</p>

<p>告警的重要性不必过多地赘述，RocketMQ 集群往往承载着公司核心业务流转。如果集群不可用往往影响是全公司的业务，事故责任是公司最高级别的。</p>

<p>本文从告警项的设计、告警流程、告警实战给出指导建议，在实践中以此为思路扩展完善，实现自己公司的定制化告警。</p>

<h3 id="告警项设计">告警项设计</h3>

<p>下图分别从主题、消费组、集群维度罗列了比较重要的告警项以及触发条件包括哪些方面。</p>

<p><img src="assets/20200905163231215.png" alt="img" /></p>

<h4 id="触发条件"><strong>触发条件</strong></h4>

<ul>
<li>触发阈值：超过某个特定的数值，例如：消费积压超过 10 万。</li>
<li>时间间隔：间隔多久检测，例如：5 分钟内消费积压超过 10 万。</li>
<li>触发次数：在时间间隔内满足阈值的次数，例如：5 分钟内消费积压超过 10 万，触发了 3 次。</li>
<li>告警时间段：收到告警通知的时间范围，例如：在 9:00-22:00 之间收到告警信息。</li>
</ul>

<h4 id="主题告警"><strong>主题告警</strong></h4>

<p>发送速度：当发送速度满足触发条件设定的阈值时发送告警信息。</p>

<p>例如：5 分钟内当发送速度小于阈值 10，触发 1 次，在 00:00-23:59 触发告警信息。</p>

<h4 id="消费告警"><strong>消费告警</strong></h4>

<p>消费速度：当消费速度满足触发条件设定的阈值时发送告警信息。</p>

<p>例如：5 分钟内当消费速度小于阈值 5000，触发 1 次，在 00:00-23:59 触发告警信息。</p>

<p>消费积压：当消费积压值满足触发条件设定的阈值时发送告警信息。</p>

<p>例如：5 分钟内当消费积压大于阈值 100000，触发 1 次，在 00:00-23:59 触发告警信息。</p>

<h4 id="集群告警"><strong>集群告警</strong></h4>

<p>集群节点数量：当集群节点数量满足触发条件设定的阈值时触发告警。</p>

<p>例如：5 分钟内当集群节点数量小于阈值 4，触发 1 次，在 00:00-23:59 触发告警信息。</p>

<p>集群响应时间：当集群节点发送的 RT 满足触发条件的阈值时触发告警。</p>

<p>例如：5 分钟内当节点发送的响应时间大于 1 秒，触发 1 次，在 00:00-23:59 触发告警信息。</p>

<p>集群写入 TPS：当集群写入 TPS 满足触发条件设定的阈值时触发告警。</p>

<p>例如：5 分钟内当集群写入 TPS 大于 40000，触发 1 次，在 00:00-23:59 触发告警信息。</p>

<p>集群节点可用性：当集群节点心跳检测结果满足触发条件设定的阈值时触发告警。</p>

<p>例如：5 分钟内当节点心跳检测结果大于 0（表示失败），触发 1 次，在 00:00-23:59 触发告警信息。</p>

<p>集群写入变化率：当集群写入 TPS 变化率满足触发条件设定的阈值时触发告警。</p>

<p>例如：5 分钟内当集群写入变化率大于 100%，触发 1 次，在 00:00-23:59 触发告警信息。</p>

<h4 id="告警开发实战">告警开发实战</h4>

<h4 id="告警流程"><strong>告警流程</strong></h4>

<p>定时任务巡检：可以使用公司的调度平台或者自己写调度线程 ScheduledExecutorService，调度的频率可以根据不同的指标分成不同的调度任务，例如：集群告警可以采取秒级探测、对于主题和消费组的告警可以采用分钟级探测。</p>

<p>检索监控数据：数据来自于前面两节中存储的监控数据，例如：存储到了时序数据库 InfluxDB 中。</p>

<p>发送告警信息：此处可以发送到公司的统一告警系统，也可以发送到钉钉、邮箱、短信等。</p>

<p><img src="assets/20200905163427806.png" alt="img" /></p>

<h4 id="主题-消费动态-sql"><strong>主题/消费动态 SQL</strong></h4>

<p>我们可以通过在界面上配置不同的告警规则生成不同的检索语句，在定时调度时使用生成的语句。</p>

<p><img src="assets/202009051635346.png" alt="img" /></p>

<p>通过类似上面图示中对主题和消费组的选择，动态生成 SQL 语句，例如：当选择以下动态规则参数时，集群名称 demo_cluster、消费组名称 demo_consumer、类型 consumer、指标积压、大于、阈值 1000000、间隔 5 分钟、次数 1 次、告警开始时间 00:00、告警结束时间 23:59 时生成以下语句。</p>

<pre><code>select Count(value)  FROM &quot;consumer_monitor_info&quot; WHERE &quot;clusterName&quot; = 
</code></pre>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#016d6d6d38353030313641666c60686d2f626e6c" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f1246060f11ede4',t:'MTczNDA1NDMxNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>