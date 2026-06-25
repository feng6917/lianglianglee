<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=26&#32;如何大幅成倍提升Redis处理性能？>
        <link rel="icon" href="/static/favicon.png">
        <title>26 如何大幅成倍提升Redis处理性能？ </title>
        
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
                        <a class="menu-item" id="00 开篇寄语：缓存，你真的用对了吗？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/00%20%e5%bc%80%e7%af%87%e5%af%84%e8%af%ad%ef%bc%9a%e7%bc%93%e5%ad%98%ef%bc%8c%e4%bd%a0%e7%9c%9f%e7%9a%84%e7%94%a8%e5%af%b9%e4%ba%86%e5%90%97%ef%bc%9f.md">00 开篇寄语：缓存，你真的用对了吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01 业务数据访问性能太低怎么办？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/01%20%e4%b8%9a%e5%8a%a1%e6%95%b0%e6%8d%ae%e8%ae%bf%e9%97%ae%e6%80%a7%e8%83%bd%e5%a4%aa%e4%bd%8e%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">01 业务数据访问性能太低怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 如何根据业务来选择缓存模式和组件？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/02%20%e5%a6%82%e4%bd%95%e6%a0%b9%e6%8d%ae%e4%b8%9a%e5%8a%a1%e6%9d%a5%e9%80%89%e6%8b%a9%e7%bc%93%e5%ad%98%e6%a8%a1%e5%bc%8f%e5%92%8c%e7%bb%84%e4%bb%b6%ef%bc%9f.md">02 如何根据业务来选择缓存模式和组件？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 设计缓存架构时需要考量哪些因素？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/03%20%e8%ae%be%e8%ae%a1%e7%bc%93%e5%ad%98%e6%9e%b6%e6%9e%84%e6%97%b6%e9%9c%80%e8%a6%81%e8%80%83%e9%87%8f%e5%93%aa%e4%ba%9b%e5%9b%a0%e7%b4%a0%ef%bc%9f.md">03 设计缓存架构时需要考量哪些因素？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 缓存失效、穿透和雪崩问题怎么处理？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/04%20%e7%bc%93%e5%ad%98%e5%a4%b1%e6%95%88%e3%80%81%e7%a9%bf%e9%80%8f%e5%92%8c%e9%9b%aa%e5%b4%a9%e9%97%ae%e9%a2%98%e6%80%8e%e4%b9%88%e5%a4%84%e7%90%86%ef%bc%9f.md">04 缓存失效、穿透和雪崩问题怎么处理？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 缓存数据不一致和并发竞争怎么处理？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/05%20%e7%bc%93%e5%ad%98%e6%95%b0%e6%8d%ae%e4%b8%8d%e4%b8%80%e8%87%b4%e5%92%8c%e5%b9%b6%e5%8f%91%e7%ab%9e%e4%ba%89%e6%80%8e%e4%b9%88%e5%a4%84%e7%90%86%ef%bc%9f.md">05 缓存数据不一致和并发竞争怎么处理？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 Hot Key和Big Key引发的问题怎么应对？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/06%20Hot%20Key%e5%92%8cBig%20Key%e5%bc%95%e5%8f%91%e7%9a%84%e9%97%ae%e9%a2%98%e6%80%8e%e4%b9%88%e5%ba%94%e5%af%b9%ef%bc%9f.md">06 Hot Key和Big Key引发的问题怎么应对？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 MC为何是应用最广泛的缓存组件？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/07%20MC%e4%b8%ba%e4%bd%95%e6%98%af%e5%ba%94%e7%94%a8%e6%9c%80%e5%b9%bf%e6%b3%9b%e7%9a%84%e7%bc%93%e5%ad%98%e7%bb%84%e4%bb%b6%ef%bc%9f.md">07 MC为何是应用最广泛的缓存组件？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 MC系统架构是如何布局的？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/08%20MC%e7%b3%bb%e7%bb%9f%e6%9e%b6%e6%9e%84%e6%98%af%e5%a6%82%e4%bd%95%e5%b8%83%e5%b1%80%e7%9a%84%ef%bc%9f.md">08 MC系统架构是如何布局的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 MC是如何使用多线程和状态机来处理请求命令的？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/09%20MC%e6%98%af%e5%a6%82%e4%bd%95%e4%bd%bf%e7%94%a8%e5%a4%9a%e7%ba%bf%e7%a8%8b%e5%92%8c%e7%8a%b6%e6%80%81%e6%9c%ba%e6%9d%a5%e5%a4%84%e7%90%86%e8%af%b7%e6%b1%82%e5%91%bd%e4%bb%a4%e7%9a%84%ef%bc%9f.md">09 MC是如何使用多线程和状态机来处理请求命令的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 MC是怎么定位key的.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/10%20MC%e6%98%af%e6%80%8e%e4%b9%88%e5%ae%9a%e4%bd%8dkey%e7%9a%84.md">10 MC是怎么定位key的.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 MC如何淘汰冷key和失效key.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/11%20MC%e5%a6%82%e4%bd%95%e6%b7%98%e6%b1%b0%e5%86%b7key%e5%92%8c%e5%a4%b1%e6%95%88key.md">11 MC如何淘汰冷key和失效key.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 为何MC能长期维持高性能读写？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/12%20%e4%b8%ba%e4%bd%95MC%e8%83%bd%e9%95%bf%e6%9c%9f%e7%bb%b4%e6%8c%81%e9%ab%98%e6%80%a7%e8%83%bd%e8%af%bb%e5%86%99%ef%bc%9f.md">12 为何MC能长期维持高性能读写？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 如何完整学习MC协议及优化client访问？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/13%20%e5%a6%82%e4%bd%95%e5%ae%8c%e6%95%b4%e5%ad%a6%e4%b9%a0MC%e5%8d%8f%e8%ae%ae%e5%8f%8a%e4%bc%98%e5%8c%96client%e8%ae%bf%e9%97%ae%ef%bc%9f.md">13 如何完整学习MC协议及优化client访问？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 大数据时代，MC如何应对新的常见问题？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/14%20%e5%a4%a7%e6%95%b0%e6%8d%ae%e6%97%b6%e4%bb%a3%ef%bc%8cMC%e5%a6%82%e4%bd%95%e5%ba%94%e5%af%b9%e6%96%b0%e7%9a%84%e5%b8%b8%e8%a7%81%e9%97%ae%e9%a2%98%ef%bc%9f.md">14 大数据时代，MC如何应对新的常见问题？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 如何深入理解、应用及扩展 Twemproxy？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/15%20%e5%a6%82%e4%bd%95%e6%b7%b1%e5%85%a5%e7%90%86%e8%a7%a3%e3%80%81%e5%ba%94%e7%94%a8%e5%8f%8a%e6%89%a9%e5%b1%95%20Twemproxy%ef%bc%9f.md">15 如何深入理解、应用及扩展 Twemproxy？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 常用的缓存组件Redis是如何运行的？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/16%20%e5%b8%b8%e7%94%a8%e7%9a%84%e7%bc%93%e5%ad%98%e7%bb%84%e4%bb%b6Redis%e6%98%af%e5%a6%82%e4%bd%95%e8%bf%90%e8%a1%8c%e7%9a%84%ef%bc%9f.md">16 常用的缓存组件Redis是如何运行的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 如何理解、选择并使用Redis的核心数据类型？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/17%20%e5%a6%82%e4%bd%95%e7%90%86%e8%a7%a3%e3%80%81%e9%80%89%e6%8b%a9%e5%b9%b6%e4%bd%bf%e7%94%a8Redis%e7%9a%84%e6%a0%b8%e5%bf%83%e6%95%b0%e6%8d%ae%e7%b1%bb%e5%9e%8b%ef%bc%9f.md">17 如何理解、选择并使用Redis的核心数据类型？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 Redis协议的请求和响应有哪些“套路”可循？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/18%20Redis%e5%8d%8f%e8%ae%ae%e7%9a%84%e8%af%b7%e6%b1%82%e5%92%8c%e5%93%8d%e5%ba%94%e6%9c%89%e5%93%aa%e4%ba%9b%e2%80%9c%e5%a5%97%e8%b7%af%e2%80%9d%e5%8f%af%e5%be%aa%ef%bc%9f.md">18 Redis协议的请求和响应有哪些“套路”可循？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 Redis系统架构中各个处理模块是干什么的？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/19%20Redis%e7%b3%bb%e7%bb%9f%e6%9e%b6%e6%9e%84%e4%b8%ad%e5%90%84%e4%b8%aa%e5%a4%84%e7%90%86%e6%a8%a1%e5%9d%97%e6%98%af%e5%b9%b2%e4%bb%80%e4%b9%88%e7%9a%84%ef%bc%9f.md">19 Redis系统架构中各个处理模块是干什么的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 Redis如何处理文件事件和时间事件？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/20%20Redis%e5%a6%82%e4%bd%95%e5%a4%84%e7%90%86%e6%96%87%e4%bb%b6%e4%ba%8b%e4%bb%b6%e5%92%8c%e6%97%b6%e9%97%b4%e4%ba%8b%e4%bb%b6%ef%bc%9f.md">20 Redis如何处理文件事件和时间事件？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 Redis读取请求数据后，如何进行协议解析和处理.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/21%20Redis%e8%af%bb%e5%8f%96%e8%af%b7%e6%b1%82%e6%95%b0%e6%8d%ae%e5%90%8e%ef%bc%8c%e5%a6%82%e4%bd%95%e8%bf%9b%e8%a1%8c%e5%8d%8f%e8%ae%ae%e8%a7%a3%e6%9e%90%e5%92%8c%e5%a4%84%e7%90%86.md">21 Redis读取请求数据后，如何进行协议解析和处理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 怎么认识和应用Redis内部数据结构？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/22%20%e6%80%8e%e4%b9%88%e8%ae%a4%e8%af%86%e5%92%8c%e5%ba%94%e7%94%a8Redis%e5%86%85%e9%83%a8%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84%ef%bc%9f.md">22 怎么认识和应用Redis内部数据结构？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 Redis是如何淘汰key的？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/23%20Redis%e6%98%af%e5%a6%82%e4%bd%95%e6%b7%98%e6%b1%b0key%e7%9a%84%ef%bc%9f.md">23 Redis是如何淘汰key的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 Redis崩溃后，如何进行数据恢复的？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/24%20Redis%e5%b4%a9%e6%ba%83%e5%90%8e%ef%bc%8c%e5%a6%82%e4%bd%95%e8%bf%9b%e8%a1%8c%e6%95%b0%e6%8d%ae%e6%81%a2%e5%a4%8d%e7%9a%84%ef%bc%9f.md">24 Redis崩溃后，如何进行数据恢复的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25  Redis是如何处理容易超时的系统调用的？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/25%20%20Redis%e6%98%af%e5%a6%82%e4%bd%95%e5%a4%84%e7%90%86%e5%ae%b9%e6%98%93%e8%b6%85%e6%97%b6%e7%9a%84%e7%b3%bb%e7%bb%9f%e8%b0%83%e7%94%a8%e7%9a%84%ef%bc%9f.md">25  Redis是如何处理容易超时的系统调用的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 如何大幅成倍提升Redis处理性能？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/26%20%e5%a6%82%e4%bd%95%e5%a4%a7%e5%b9%85%e6%88%90%e5%80%8d%e6%8f%90%e5%8d%87Redis%e5%a4%84%e7%90%86%e6%80%a7%e8%83%bd%ef%bc%9f.md">26 如何大幅成倍提升Redis处理性能？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 Redis是如何进行主从复制的？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/27%20Redis%e6%98%af%e5%a6%82%e4%bd%95%e8%bf%9b%e8%a1%8c%e4%b8%bb%e4%bb%8e%e5%a4%8d%e5%88%b6%e7%9a%84%ef%bc%9f.md">27 Redis是如何进行主从复制的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 如何构建一个高性能、易扩展的Redis集群？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/28%20%e5%a6%82%e4%bd%95%e6%9e%84%e5%bb%ba%e4%b8%80%e4%b8%aa%e9%ab%98%e6%80%a7%e8%83%bd%e3%80%81%e6%98%93%e6%89%a9%e5%b1%95%e7%9a%84Redis%e9%9b%86%e7%be%a4%ef%bc%9f.md">28 如何构建一个高性能、易扩展的Redis集群？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 从容应对亿级QPS访问，Redis还缺少什么？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/29%20%e4%bb%8e%e5%ae%b9%e5%ba%94%e5%af%b9%e4%ba%bf%e7%ba%a7QPS%e8%ae%bf%e9%97%ae%ef%bc%8cRedis%e8%bf%98%e7%bc%ba%e5%b0%91%e4%bb%80%e4%b9%88%ef%bc%9f.md">29 从容应对亿级QPS访问，Redis还缺少什么？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30 面对海量数据，为什么无法设计出完美的分布式缓存体系？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/30%20%e9%9d%a2%e5%af%b9%e6%b5%b7%e9%87%8f%e6%95%b0%e6%8d%ae%ef%bc%8c%e4%b8%ba%e4%bb%80%e4%b9%88%e6%97%a0%e6%b3%95%e8%ae%be%e8%ae%a1%e5%87%ba%e5%ae%8c%e7%be%8e%e7%9a%84%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98%e4%bd%93%e7%b3%bb%ef%bc%9f.md">30 面对海量数据，为什么无法设计出完美的分布式缓存体系？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31 如何设计足够可靠的分布式缓存体系，以满足大中型移动互联网系统的需要？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/31%20%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1%e8%b6%b3%e5%a4%9f%e5%8f%af%e9%9d%a0%e7%9a%84%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98%e4%bd%93%e7%b3%bb%ef%bc%8c%e4%bb%a5%e6%bb%a1%e8%b6%b3%e5%a4%a7%e4%b8%ad%e5%9e%8b%e7%a7%bb%e5%8a%a8%e4%ba%92%e8%81%94%e7%bd%91%e7%b3%bb%e7%bb%9f%e7%9a%84%e9%9c%80%e8%a6%81%ef%bc%9f.md">31 如何设计足够可靠的分布式缓存体系，以满足大中型移动互联网系统的需要？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32 一个典型的分布式缓存系统是什么样的？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/32%20%e4%b8%80%e4%b8%aa%e5%85%b8%e5%9e%8b%e7%9a%84%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98%e7%b3%bb%e7%bb%9f%e6%98%af%e4%bb%80%e4%b9%88%e6%a0%b7%e7%9a%84%ef%bc%9f.md">32 一个典型的分布式缓存系统是什么样的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33 如何为秒杀系统设计缓存体系？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/33%20%e5%a6%82%e4%bd%95%e4%b8%ba%e7%a7%92%e6%9d%80%e7%b3%bb%e7%bb%9f%e8%ae%be%e8%ae%a1%e7%bc%93%e5%ad%98%e4%bd%93%e7%b3%bb%ef%bc%9f.md">33 如何为秒杀系统设计缓存体系？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34 如何为海量计数场景设计缓存体系？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/34%20%e5%a6%82%e4%bd%95%e4%b8%ba%e6%b5%b7%e9%87%8f%e8%ae%a1%e6%95%b0%e5%9c%ba%e6%99%af%e8%ae%be%e8%ae%a1%e7%bc%93%e5%ad%98%e4%bd%93%e7%b3%bb%ef%bc%9f.md">34 如何为海量计数场景设计缓存体系？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35 如何为社交feed场景设计缓存体系？.md" href="/%e4%b8%93%e6%a0%8f/300%e5%88%86%e9%92%9f%e5%90%83%e9%80%8f%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98-%e5%ae%8c/35%20%e5%a6%82%e4%bd%95%e4%b8%ba%e7%a4%be%e4%ba%a4feed%e5%9c%ba%e6%99%af%e8%ae%be%e8%ae%a1%e7%bc%93%e5%ad%98%e4%bd%93%e7%b3%bb%ef%bc%9f.md">35 如何为社交feed场景设计缓存体系？.md</a>
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
                            <h1 id="title" data-id="26 如何大幅成倍提升Redis处理性能？" class="title">26 如何大幅成倍提升Redis处理性能？</h1>
                            <div><p>本课时我们主要学习如何通过 Redis 多线程来大幅提升性能，涉及主线程与 IO 线程、命令处理流程，以及多线程方案的优劣等内容。</p>

<h2 id="主线程">主线程</h2>

<p>Redis 自问世以来，广受好评，应用广泛。但相比， Memcached 单实例压测 TPS 可以高达百万，线上可以稳定跑 20~40 万而言，Redis 的单实例压测 TPS 不过 10~12 万，线上一般最高也就 2~4 万，仍相差一个数量级。</p>

<p>Redis 慢的主要原因是单进程单线程模型。虽然一些重量级操作也进行了分拆，如 RDB 的构建在子进程中进行，文件关闭、文件缓冲同步，以及大 key 清理都放在 BIO 线程异步处理，但还远远不够。线上 Redis 处理用户请求时，十万级的 client 挂在一个 Redis 实例上，所有的事件处理、读请求、命令解析、命令执行，以及最后的响应回复，都由主线程完成，纵然是 Redis 各种极端优化，巧妇难为无米之炊，一个线程的处理能力始终是有上限的。当前服务器 CPU 大多是 16 核到 32 核以上，Redis 日常运行主要只使用 1 个核心，其他 CPU 核就没有被很好的利用起来，Redis 的处理性能也就无法有效地提升。而 Memcached 则可以按照服务器的 CPU 核心数，配置数十个线程，这些线程并发进行 IO 读写、任务处理，处理性能可以提高一个数量级以上。</p>

<h2 id="io-线程">IO 线程</h2>

<p>面对性能提升困境，虽然 Redis 作者不以为然，认为可以通过多部署几个 Redis 实例来达到类似多线程的效果。但多实例部署则带来了运维复杂的问题，而且单机多实例部署，会相互影响，进一步增大运维的复杂度。为此，社区一直有种声音，希望 Redis 能开发多线程版本。</p>

<p>因此，Redis 即将在 6.0 版本引入多线程模型，当前代码在 unstable 版本中，6.0 版本预计在明年发版。Redis 的多线程模型，分为主线程和 IO 线程。</p>

<p>因为处理命令请求的几个耗时点，分别是请求读取、协议解析、协议执行，以及响应回复等。所以 Redis 引入 IO 多线程，并发地进行请求命令的读取、解析，以及响应的回复。而其他的所有任务，如事件触发、命令执行、IO 任务分发，以及其他各种核心操作，仍然在主线程中进行，也就说这些任务仍然由单线程处理。这样可以在最大程度不改变原处理流程的情况下，引入多线程。</p>

<h2 id="命令处理流程">命令处理流程</h2>

<p>Redis 6.0 的多线程处理流程如图所示。主线程负责监听端口，注册连接读事件。当有新连接进入时，主线程 accept 新连接，创建 client，并为新连接注册请求读事件。</p>

<p><img src="assets/CgotOV3XnXSAKWxbAACUrOrLfBg597.png" alt="img" /></p>

<p>当请求命令进入时，在主线程触发读事件，主线程此时并不进行网络 IO 的读取，而将该连接所在的 client 加入待读取队列中。Redis 的 Ae 事件模型在循环中，发现待读取队列不为空，则将所有待读取请求的 client 依次分派给 IO 线程，并自旋检查等待，等待 IO 线程读取所有的网络数据。所谓自旋检查等待，也就是指主线程持续死循环，并在循环中检查 IO 线程是否读完，不做其他任何任务。只有发现 IO 线程读完所有网络数据，才停止循环，继续后续的任务处理。</p>

<p>一般可以配置多个 IO 线程，比如配置 4~8 个，这些 IO 线程发现待读取队列中有任务时，则开始并发处理。每个 IO 线程从对应列表获取一个任务，从里面的 client 连接中读取请求数据，并进行命令解析。当 IO 线程完成所有的请求读取，并完成解析后，待读取任务数变为 0。主线程就停止循环检测，开始依次执行 IO 线程已经解析的所有命令，每执行完毕一个命令，就将响应写入 client 写缓冲，这些 client 就变为待回复 client，这些待回复 client 被加入待回复列表。然后主线程将这些待回复 client，轮询分配给多个 IO 线程。然后再次自旋检测等待。</p>

<p>然后 IO 线程再次开始并发执行，将不同 client 的响应缓冲写给 client。当所有响应全部处理完后，待回复的任务数变为 0，主线程结束自旋检测，继续处理后续的任务，以及新的读请求。</p>

<p>Redis 6.0 版本中新引入的多线程模型，主要是指可配置多个 IO 线程，这些线程专门负责请求读取、解析，以及响应的回复。通过 IO 多线程，Redis 的性能可以提升 1 倍以上。</p>

<h2 id="多线程方案优劣">多线程方案优劣</h2>

<p>虽然多线程方案能提升1倍以上的性能，但整个方案仍然比较粗糙。首先所有命令的执行仍然在主线程中进行，存在性能瓶颈。然后所有的事件触发也是在主线程中进行，也依然无法有效使用多核心。而且，IO 读写为批处理读写，即所有 IO 线程先一起读完所有请求，待主线程解析处理完毕后，所有 IO 线程再一起回复所有响应，不同请求需要相互等待，效率不高。最后在 IO 批处理读写时，主线程自旋检测等待，效率更是低下，即便任务很少，也很容易把 CPU 打满。整个多线程方案比较粗糙，所以性能提升也很有限，也就 1~2 倍多一点而已。要想更大幅提升处理性能，命令的执行、事件的触发等都需要分拆到不同线程中进行，而且多线程处理模型也需要优化，各个线程自行进行 IO 读写和执行，互不干扰、等待与竞争，才能真正高效地利用服务器多核心，达到性能数量级的提升。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#bfd3d3d3868b8e8e8f88ffd8d2ded6d391dcd0d2" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f0cf8672a8d94de',t:'MTczMzk5ODcwNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>