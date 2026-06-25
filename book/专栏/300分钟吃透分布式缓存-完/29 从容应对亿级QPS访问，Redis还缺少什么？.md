<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=29&#32;从容应对亿级QPS访问，Redis还缺少什么？>
        <link rel="icon" href="/static/favicon.png">
        <title>29 从容应对亿级QPS访问，Redis还缺少什么？ </title>
        
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
                            <h1 id="title" data-id="29 从容应对亿级QPS访问，Redis还缺少什么？" class="title">29 从容应对亿级QPS访问，Redis还缺少什么？</h1>
                            <div><p>众所周知，Redis 在线上实际运行时，面对海量数据、高并发访问，会遇到不少问题，需要进行针对性扩展及优化。本课时，我会结合微博在使用 Redis 中遇到的问题，来分析如何在生产环境下对 Redis 进行扩展改造，以应对百万级 QPS。</p>

<h3 id="功能扩展">功能扩展</h3>

<p>对于线上较大流量的业务，单个 Redis 实例的内存占用很容易达到数 G 的容量，对应的 aof 会占用数十 G 的空间。即便每天流量低峰时间，对 Redis 进行 rewriteaof，减少数据冗余，但由于业务数据多，写操作多，aof 文件仍然会达到 10G 以上。</p>

<p>此时，在 Redis 需要升级版本或修复 bug 时，如果直接重启变更，由于需要数据恢复，这个过程需要近 10 分钟的时间，时间过长，会严重影响系统的可用性。面对这种问题，可以对 Redis 扩展热升级功能，从而在毫秒级完成升级操作，完全不影响业务访问。</p>

<p><img src="assets/Cgq2xl3nTi6ATt3OAAB8xLAMsH8657.png" alt="img" /></p>

<p>热升级方案如下，首先构建一个 Redis 壳程序，将 redisServer 的所有属性（包括redisDb、client等）保存为全局变量。然后将 Redis 的处理逻辑代码全部封装到动态连接库 so 文件中。Redis 第一次启动，从磁盘加载恢复数据，在后续升级时，通过指令，壳程序重新加载 Redis 新的 so 文件，即可完成功能升级，毫秒级完成 Redis 的版本升级。而且整个过程中，所有 Client 连接仍然保留，在升级成功后，原有 Client 可以继续进行读写操作，整个过程对业务完全透明。</p>

<p>在 Redis 使用中，也经常会遇到一些特殊业务场景，是当前 Redis 的数据结构无法很好满足的。此时可以对 Redis 进行定制化扩展。可以根据业务数据特点，扩展新的数据结构，甚至扩展新的 Redis 存储模型，来提升 Redis 的内存效率和处理性能。</p>

<p><img src="assets/Cgq2xl3nTi-AG3PqAAAzCoYX72M095.png" alt="img" /></p>

<p>在微博中，有个业务类型是关注列表。关注列表存储的是一个用户所有关注的用户 uid。关注列表可以用来验证关注关系，也可以用关注列表，进一步获取所有关注人的微博列表等。由于用户数量过于庞大，存储关注列表的 Redis 是作为一个缓存使用的，即不活跃的关注列表会很快被踢出 Redis。在再次需要这个用户的关注列表时，重新从 DB 加载，并写回 Redis。关注列表的元素全部 long，最初使用 set 存储，回种 set 时，使用 sadd 进行批量添加。线上发现，对于关注数比较多的关注列表，比如关注数有数千上万个用户，需要 sadd 上成千上万个 uid，即便分几次进行批量添加，每次也会消耗较多时间，数据回种效率较低，而且会导致 Redis 卡顿。另外，用 set 存关注列表，内存效率也比较低。</p>

<p>于是，我们对 Redis 扩展了 longset 数据结构。longset 本质上是一个 long 型的一维开放数组。可以采用 double-hash 进行寻址。</p>

<p><img src="assets/CgpOIF3nTi-ANs20AABZa3pOh28323.png" alt="img" /></p>

<p>从 DB 加载到用户的关注列表，准备写入 Redis 前。Client 首先根据关注的 uid 列表，构建成 long 数组的二进制格式，然后通过扩展的 lsset 指令写入 Redis。Redis 接收到指令后，直接将 Client 发来的二进制格式的 long 数组作为 value 值进行存储。</p>

<p>longset 中的 long 数组，采用 double-hash 进行寻址，即对每个 long 值采用 2 个哈希函数计算，然后按 (h1 + n*h2)% 数组长度 的方式，确定 long 值的位置。n 从 0 开始计算，如果出现哈希冲突，即计算的哈希位置，已经有其他元素，则 n 加 1，继续向前推进计算，最大计算次数是数组的长度。</p>

<p>在向 longset 数据结构不断增加 long 值元素的过程中，当数组的填充率超过阀值，Redis 则返回 longset 过满的异常。此时 Client 会根据最新全量数据，构建一个容量加倍的一维 long 数组，再次 lsset 回 Redis 中。</p>

<p><img src="assets/Cgq2xl3nTi-AQhi1AABe70OR04g550.png" alt="img" /></p>

<p>在移动社交平台中，庞大的用户群体，相互之间会关注、订阅，用户自己会持续分享各种状态，另外这些状体数据会被其他用户阅读、评论、扩散及点赞。这样，在用户维度，就有关注数、粉丝数、各种状态行为数，然后用户每发表的一条 feed、状态，还有阅读数、评论数、转发数、表态数等。一方面会有海量 key 需要进行计数，另外一方面，一个 key 会有 N 个计数。在日常访问中，一次查询，不仅需要查询大量的 key，而且对每个 key 需要查询多个计数。</p>

<p>以微博为例，历史计数高达千亿级，而且随着每日新增数亿条 feed 记录，每条记录会产生 4~8 种计数，如果采用 Redis 的计数，仅仅单副本存储，历史数据需要占用 5~6T 以上的内存，每日新增 50G 以上，如果再考虑多 IDC、每个 IDC 部署 1 主多从，占用内存还要再提升一个数量级。由于微博计数，所有的 key 都是随时间递增的 long 型值，于是我们改造了 Redis 的存储结构。</p>

<p>首先采用 cdb 分段存储计数器，通过预先分配的内存数组 Table 存储计数，并且采用 double hash 解决冲突，避免 Redis 实现中的大量指针开销。 然后，通过 Schema 策略支持多列，一个 key id 对应的多个计数可以作为一条计数记录，还支持动态增减计数列，每列的计数内存使用精简到 bit。而且，由于 feed 计数冷热区分明显，我们进行冷热数据分离存储方案，根据时间维度，近期的热数据放在内存，之前的冷数据放在磁盘， 降低机器成本。</p>

<p>关于计数器服务的扩展，后面的案例分析课时，我会进一步深入介绍改造方案。</p>

<p><img src="assets/CgpOIF3nTi-ACqjuAAANlz-bKIw421.png" alt="img" /></p>

<p>线上 Redis 使用，不管是最初的 sync 机制，还是后来的 psync 和 psync2，主从复制都会受限于复制积压缓冲。如果 slave 断开复制连接的时间较长，或者 master 某段时间写入量过大，而 slave 的复制延迟较大，slave 的复制偏移量落在 master 的复制积压缓冲之外，则会导致全量复制。</p>

<h3 id="完全增量复制">完全增量复制</h3>

<p>于是，微博整合 Redis 的 rdb 和 aof 策略，构建了完全增量复制方案。</p>

<p><img src="assets/Cgq2xl3nTi-AMYHHAABrLF_9OHw108.png" alt="img" /></p>

<p>在完全增量方案中，aof 文件不再只有一个，而是按后缀 id 进行递增，如 aof.00001、aof.00002，当 aof 文件超过阀值，则创建下一个 id 加 1 的文件，从而滚动存储最新的写指令。在 bgsave 构建 rdb 时，rdb 文件除了记录当前的内存数据快照，还会记录 rdb 构建时间，对应 aof 文件的 id 及位置。这样 rdb 文件和其记录 aof 文件位置之后的写指令，就构成一份完整的最新数据记录。</p>

<p>主从复制时，master 通过独立的复制线程向 slave 同步数据。每个 slave 会创建一个复制线程。第一次复制是全量复制，之后的复制，不管 slave 断开复制连接有多久，只要 aof 文件没有被删除，都是增量复制。</p>

<p>第一次全量复制时，复制线程首先将 rdb 发给 slave，然后再将 rdb 记录的 aof 文件位置之后的所有数据，也发送给 slave，即可完成。整个过程不用重新构建 rdb。</p>

<p><img src="assets/CgpOIF3nTjCAXTypAABrLF_9OHw277.png" alt="img" /></p>

<p>后续同步时，slave 首先传递之前复制的 aof 文件的 id 及位置。master 的复制线程根据这个信息，读取对应 aof 文件位置之后的所有内容，发送给 slave，即可完成数据同步。</p>

<p>由于整个复制过程，master 在独立复制线程中进行，所以复制过程不影响用户的正常请求。为了减轻 master 的复制压力，全增量复制方案仍然支持 slave 嵌套，即可以在 slave 后继续挂载多个 slave，从而把复制压力分散到多个不同的 Redis 实例。</p>

<h3 id="集群管理">集群管理</h3>

<p><img src="assets/Cgq2xl3nTjCAd6C9AADiZzQzf2s186.png" alt="img" /></p>

<p>前面讲到，Redis-Cluster 的数据存储和集群逻辑耦合，代码逻辑复杂易错，存储 slot 和 key 的映射需要额外占用较多内存，对小 value 业务影响特别明显，而且迁移效率低，迁移大 value 容易导致阻塞，另外，Cluster 复制只支持 slave 挂在 master 下，无法支持 需要较多slave、读 TPS 特别大的业务场景。除此之外，Redis 当前还只是个存储组件，线上运行中，集群管理、日常维护、状态监控报警等这些功能，要么没有支持，要么支持不便。</p>

<p>因此我们也基于 Redis 构建了集群存储体系。首先将 Redis 的集群功能剥离到独立系统，Redis 只关注存储，不再维护 slot 等相关的信息。通过新构建的 clusterManager 组件，负责 slot 维护，数据迁移，服务状态管理。</p>

<p>Redis 集群访问可以由 proxy 或 smart client 进行。对性能特别敏感的业务，可以通过 smart client 访问，避免访问多一跳。而一般业务，可以通过 Proxy 访问 Redis。</p>

<p>业务资源的部署、Proxy 的访问，都通过配置中心进行获取及协调。clusterManager 向配置中心注册业务资源部署，并持续探测服务状态，根据服务状态进行故障转移，切主、上下线 slave 等。proxy 和 smart client 从配置中心获取配置信息，并持续订阅服务状态的变化。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#79151515404d4848494e391e14181015571a1614" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f0cf91f793094de',t:'MTczMzk5ODczNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>