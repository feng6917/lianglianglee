<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=21&#32;游标迭代器（过滤器）——Scan>
        <link rel="icon" href="/static/favicon.png">
        <title>21 游标迭代器（过滤器）——Scan </title>
        
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
                        <a class="menu-item" id="01 Redis 是如何执行的.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/01%20Redis%20%e6%98%af%e5%a6%82%e4%bd%95%e6%89%a7%e8%a1%8c%e7%9a%84.md">01 Redis 是如何执行的.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 Redis 快速搭建与使用.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/02%20Redis%20%e5%bf%ab%e9%80%9f%e6%90%ad%e5%bb%ba%e4%b8%8e%e4%bd%bf%e7%94%a8.md">02 Redis 快速搭建与使用.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 Redis 持久化——RDB.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/03%20Redis%20%e6%8c%81%e4%b9%85%e5%8c%96%e2%80%94%e2%80%94RDB.md">03 Redis 持久化——RDB.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 Redis 持久化——AOF.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/04%20Redis%20%e6%8c%81%e4%b9%85%e5%8c%96%e2%80%94%e2%80%94AOF.md">04 Redis 持久化——AOF.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 Redis 持久化——混合持久化.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/05%20Redis%20%e6%8c%81%e4%b9%85%e5%8c%96%e2%80%94%e2%80%94%e6%b7%b7%e5%90%88%e6%8c%81%e4%b9%85%e5%8c%96.md">05 Redis 持久化——混合持久化.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 字符串使用与内部实现原理.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/06%20%e5%ad%97%e7%ac%a6%e4%b8%b2%e4%bd%bf%e7%94%a8%e4%b8%8e%e5%86%85%e9%83%a8%e5%ae%9e%e7%8e%b0%e5%8e%9f%e7%90%86.md">06 字符串使用与内部实现原理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 附录：更多字符串操作命令.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/07%20%e9%99%84%e5%bd%95%ef%bc%9a%e6%9b%b4%e5%a4%9a%e5%ad%97%e7%ac%a6%e4%b8%b2%e6%93%8d%e4%bd%9c%e5%91%bd%e4%bb%a4.md">07 附录：更多字符串操作命令.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 字典使用与内部实现原理.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/08%20%e5%ad%97%e5%85%b8%e4%bd%bf%e7%94%a8%e4%b8%8e%e5%86%85%e9%83%a8%e5%ae%9e%e7%8e%b0%e5%8e%9f%e7%90%86.md">08 字典使用与内部实现原理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 附录：更多字典操作命令.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/09%20%e9%99%84%e5%bd%95%ef%bc%9a%e6%9b%b4%e5%a4%9a%e5%ad%97%e5%85%b8%e6%93%8d%e4%bd%9c%e5%91%bd%e4%bb%a4.md">09 附录：更多字典操作命令.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 列表使用与内部实现原理.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/10%20%e5%88%97%e8%a1%a8%e4%bd%bf%e7%94%a8%e4%b8%8e%e5%86%85%e9%83%a8%e5%ae%9e%e7%8e%b0%e5%8e%9f%e7%90%86.md">10 列表使用与内部实现原理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 附录：更多列表操作命令.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/11%20%e9%99%84%e5%bd%95%ef%bc%9a%e6%9b%b4%e5%a4%9a%e5%88%97%e8%a1%a8%e6%93%8d%e4%bd%9c%e5%91%bd%e4%bb%a4.md">11 附录：更多列表操作命令.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 集合使用与内部实现原理.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/12%20%e9%9b%86%e5%90%88%e4%bd%bf%e7%94%a8%e4%b8%8e%e5%86%85%e9%83%a8%e5%ae%9e%e7%8e%b0%e5%8e%9f%e7%90%86.md">12 集合使用与内部实现原理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 附录：更多集合操作命令.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/13%20%e9%99%84%e5%bd%95%ef%bc%9a%e6%9b%b4%e5%a4%9a%e9%9b%86%e5%90%88%e6%93%8d%e4%bd%9c%e5%91%bd%e4%bb%a4.md">13 附录：更多集合操作命令.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 有序集合使用与内部实现原理.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/14%20%e6%9c%89%e5%ba%8f%e9%9b%86%e5%90%88%e4%bd%bf%e7%94%a8%e4%b8%8e%e5%86%85%e9%83%a8%e5%ae%9e%e7%8e%b0%e5%8e%9f%e7%90%86.md">14 有序集合使用与内部实现原理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 附录：更多有序集合操作命令.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/15%20%e9%99%84%e5%bd%95%ef%bc%9a%e6%9b%b4%e5%a4%9a%e6%9c%89%e5%ba%8f%e9%9b%86%e5%90%88%e6%93%8d%e4%bd%9c%e5%91%bd%e4%bb%a4.md">15 附录：更多有序集合操作命令.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 Redis 事务深入解析.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/16%20Redis%20%e4%ba%8b%e5%8a%a1%e6%b7%b1%e5%85%a5%e8%a7%a3%e6%9e%90.md">16 Redis 事务深入解析.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 Redis 键值过期操作.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/17%20Redis%20%e9%94%ae%e5%80%bc%e8%bf%87%e6%9c%9f%e6%93%8d%e4%bd%9c.md">17 Redis 键值过期操作.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 Redis 过期策略与源码分析.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/18%20Redis%20%e8%bf%87%e6%9c%9f%e7%ad%96%e7%95%a5%e4%b8%8e%e6%ba%90%e7%a0%81%e5%88%86%e6%9e%90.md">18 Redis 过期策略与源码分析.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 Redis 管道技术——Pipeline.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/19%20Redis%20%e7%ae%a1%e9%81%93%e6%8a%80%e6%9c%af%e2%80%94%e2%80%94Pipeline.md">19 Redis 管道技术——Pipeline.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 查询附近的人——GEO.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/20%20%e6%9f%a5%e8%af%a2%e9%99%84%e8%bf%91%e7%9a%84%e4%ba%ba%e2%80%94%e2%80%94GEO.md">20 查询附近的人——GEO.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 游标迭代器（过滤器）——Scan.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/21%20%e6%b8%b8%e6%a0%87%e8%bf%ad%e4%bb%a3%e5%99%a8%ef%bc%88%e8%bf%87%e6%bb%a4%e5%99%a8%ef%bc%89%e2%80%94%e2%80%94Scan.md">21 游标迭代器（过滤器）——Scan.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 优秀的基数统计算法——HyperLogLog.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/22%20%e4%bc%98%e7%a7%80%e7%9a%84%e5%9f%ba%e6%95%b0%e7%bb%9f%e8%ae%a1%e7%ae%97%e6%b3%95%e2%80%94%e2%80%94HyperLogLog.md">22 优秀的基数统计算法——HyperLogLog.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 内存淘汰机制与算法.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/23%20%e5%86%85%e5%ad%98%e6%b7%98%e6%b1%b0%e6%9c%ba%e5%88%b6%e4%b8%8e%e7%ae%97%e6%b3%95.md">23 内存淘汰机制与算法.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 消息队列——发布订阅模式.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/24%20%e6%b6%88%e6%81%af%e9%98%9f%e5%88%97%e2%80%94%e2%80%94%e5%8f%91%e5%b8%83%e8%ae%a2%e9%98%85%e6%a8%a1%e5%bc%8f.md">24 消息队列——发布订阅模式.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25 消息队列的其他实现方式.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/25%20%e6%b6%88%e6%81%af%e9%98%9f%e5%88%97%e7%9a%84%e5%85%b6%e4%bb%96%e5%ae%9e%e7%8e%b0%e6%96%b9%e5%bc%8f.md">25 消息队列的其他实现方式.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 消息队列终极解决方案——Stream（上）.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/26%20%e6%b6%88%e6%81%af%e9%98%9f%e5%88%97%e7%bb%88%e6%9e%81%e8%a7%a3%e5%86%b3%e6%96%b9%e6%a1%88%e2%80%94%e2%80%94Stream%ef%bc%88%e4%b8%8a%ef%bc%89.md">26 消息队列终极解决方案——Stream（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 消息队列终极解决方案——Stream（下）.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/27%20%e6%b6%88%e6%81%af%e9%98%9f%e5%88%97%e7%bb%88%e6%9e%81%e8%a7%a3%e5%86%b3%e6%96%b9%e6%a1%88%e2%80%94%e2%80%94Stream%ef%bc%88%e4%b8%8b%ef%bc%89.md">27 消息队列终极解决方案——Stream（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 实战：分布式锁详解与代码.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/28%20%e5%ae%9e%e6%88%98%ef%bc%9a%e5%88%86%e5%b8%83%e5%bc%8f%e9%94%81%e8%af%a6%e8%a7%a3%e4%b8%8e%e4%bb%a3%e7%a0%81.md">28 实战：分布式锁详解与代码.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 实战：布隆过滤器安装与使用及原理分析.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/29%20%e5%ae%9e%e6%88%98%ef%bc%9a%e5%b8%83%e9%9a%86%e8%bf%87%e6%bb%a4%e5%99%a8%e5%ae%89%e8%a3%85%e4%b8%8e%e4%bd%bf%e7%94%a8%e5%8f%8a%e5%8e%9f%e7%90%86%e5%88%86%e6%9e%90.md">29 实战：布隆过滤器安装与使用及原理分析.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30 完整案例：实现延迟队列的两种方法.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/30%20%e5%ae%8c%e6%95%b4%e6%a1%88%e4%be%8b%ef%bc%9a%e5%ae%9e%e7%8e%b0%e5%bb%b6%e8%bf%9f%e9%98%9f%e5%88%97%e7%9a%84%e4%b8%a4%e7%a7%8d%e6%96%b9%e6%b3%95.md">30 完整案例：实现延迟队列的两种方法.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31 实战：定时任务案例.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/31%20%e5%ae%9e%e6%88%98%ef%bc%9a%e5%ae%9a%e6%97%b6%e4%bb%bb%e5%8a%a1%e6%a1%88%e4%be%8b.md">31 实战：定时任务案例.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32 实战：RediSearch 高性能的全文搜索引擎.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/32%20%e5%ae%9e%e6%88%98%ef%bc%9aRediSearch%20%e9%ab%98%e6%80%a7%e8%83%bd%e7%9a%84%e5%85%a8%e6%96%87%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e.md">32 实战：RediSearch 高性能的全文搜索引擎.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33 实战：Redis 性能测试.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/33%20%e5%ae%9e%e6%88%98%ef%bc%9aRedis%20%e6%80%a7%e8%83%bd%e6%b5%8b%e8%af%95.md">33 实战：Redis 性能测试.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34 实战：Redis 慢查询.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/34%20%e5%ae%9e%e6%88%98%ef%bc%9aRedis%20%e6%85%a2%e6%9f%a5%e8%af%a2.md">34 实战：Redis 慢查询.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35 实战：Redis 性能优化方案.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/35%20%e5%ae%9e%e6%88%98%ef%bc%9aRedis%20%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e6%96%b9%e6%a1%88.md">35 实战：Redis 性能优化方案.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36 实战：Redis 主从同步.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/36%20%e5%ae%9e%e6%88%98%ef%bc%9aRedis%20%e4%b8%bb%e4%bb%8e%e5%90%8c%e6%ad%a5.md">36 实战：Redis 主从同步.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37 实战：Redis哨兵模式（上）.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/37%20%e5%ae%9e%e6%88%98%ef%bc%9aRedis%e5%93%a8%e5%85%b5%e6%a8%a1%e5%bc%8f%ef%bc%88%e4%b8%8a%ef%bc%89.md">37 实战：Redis哨兵模式（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38 实战：Redis 哨兵模式（下）.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/38%20%e5%ae%9e%e6%88%98%ef%bc%9aRedis%20%e5%93%a8%e5%85%b5%e6%a8%a1%e5%bc%8f%ef%bc%88%e4%b8%8b%ef%bc%89.md">38 实战：Redis 哨兵模式（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39 实战：Redis 集群模式（上）.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/39%20%e5%ae%9e%e6%88%98%ef%bc%9aRedis%20%e9%9b%86%e7%be%a4%e6%a8%a1%e5%bc%8f%ef%bc%88%e4%b8%8a%ef%bc%89.md">39 实战：Redis 集群模式（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40 实战：Redis 集群模式（下）.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/40%20%e5%ae%9e%e6%88%98%ef%bc%9aRedis%20%e9%9b%86%e7%be%a4%e6%a8%a1%e5%bc%8f%ef%bc%88%e4%b8%8b%ef%bc%89.md">40 实战：Redis 集群模式（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="41 案例：Redis 问题汇总和相关解决方案.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/41%20%e6%a1%88%e4%be%8b%ef%bc%9aRedis%20%e9%97%ae%e9%a2%98%e6%b1%87%e6%80%bb%e5%92%8c%e7%9b%b8%e5%85%b3%e8%a7%a3%e5%86%b3%e6%96%b9%e6%a1%88.md">41 案例：Redis 问题汇总和相关解决方案.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="42 技能学习指南.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/42%20%e6%8a%80%e8%83%bd%e5%ad%a6%e4%b9%a0%e6%8c%87%e5%8d%97.md">42 技能学习指南.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="43 加餐：Redis 的可视化管理工具.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86%e4%b8%8e%e5%ae%9e%e6%88%98/43%20%e5%8a%a0%e9%a4%90%ef%bc%9aRedis%20%e7%9a%84%e5%8f%af%e8%a7%86%e5%8c%96%e7%ae%a1%e7%90%86%e5%b7%a5%e5%85%b7.md">43 加餐：Redis 的可视化管理工具.md</a>
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
                            <h1 id="title" data-id="21 游标迭代器（过滤器）——Scan" class="title">21 游标迭代器（过滤器）——Scan</h1>
                            <div><h3 id="一个问题引发的-血案">一个问题引发的「血案」</h3>

<p>曾经发生过这样一件事，我们的 Redis 服务器存储了海量的数据，其中登录用户信息是以 user_token_id 的形式存储的。运营人员想要当前所有的用户登录信息，然后悲剧就发生了：因为我们的工程师使用了 <code>keys user_token_*</code> 来查询对应的用户，结果导致 Redis 假死不可用，以至于影响到线上的其他业务接连发生问题，然后就收到了一堆的系统预警短信。并且这个假死的时间是和存储的数据成正比的，数据量越大假死的时间就越长，导致的故障时间也越长。</p>

<p>那如何避免这个问题呢？</p>

<h3 id="问题的解决方案">问题的解决方案</h3>

<p>在 Redis 2.8 之前，我们只能使用 keys 命令来查询我们想要的数据，但这个命令存在两个缺点：</p>

<ol>
<li>此命令没有分页功能，我们只能一次性查询出所有符合条件的 key 值，如果查询结果非常巨大，那么得到的输出信息也会非常多；</li>
<li>keys 命令是遍历查询，因此它的查询时间复杂度是 o(n)，所以数据量越大查询时间就越长。</li>
</ol>

<p>然而，比较幸运的是在 Redis 2.8 时推出了 Scan，解决了我们这些问题，下面来看 Scan 的具体使用。</p>

<h3 id="scan-命令使用">Scan 命令使用</h3>

<p>我们先来模拟海量数据，使用 Pipeline 添加 10w 条数据，Java 代码实现如下：</p>

<pre><code class="language-java">import redis.clients.jedis.Jedis;
import redis.clients.jedis.Pipeline;
import utils.JedisUtils;

public class ScanExample {
    public static void main(String[] args) {
        // 添加 10w 条数据
        initData();
    }
    public static void initData(){
        Jedis jedis = JedisUtils.getJedis();
        Pipeline pipe = jedis.pipelined();
        for (int i = 1; i &lt; 100001; i++) {
            pipe.set(&quot;user_token_&quot; + i, &quot;id&quot; + i);
        }
        // 执行命令
        pipe.sync();
        System.out.println(&quot;数据插入完成&quot;);
    }
}

</code></pre>

<p>我们来查询用户 id 为 9999* 的数据，Scan 命令使用如下：</p>

<pre><code class="language-shell">127.0.0.1:6379&gt; scan 0 match user_token_9999* count 10000
1) &quot;127064&quot;
2) 1) &quot;user_token_99997&quot;
127.0.0.1:6379&gt; scan 127064 match user_token_9999* count 10000
1) &quot;1740&quot;
2) 1) &quot;user_token_9999&quot;
127.0.0.1:6379&gt; scan 1740 match user_token_9999* count 10000
1) &quot;21298&quot;
2) 1) &quot;user_token_99996&quot;
127.0.0.1:6379&gt; scan 21298 match user_token_9999* count 10000
1) &quot;65382&quot;
2) (empty list or set)
127.0.0.1:6379&gt; scan 65382 match user_token_9999* count 10000
1) &quot;78081&quot;
2) 1) &quot;user_token_99998&quot;
   2) &quot;user_token_99992&quot;
127.0.0.1:6379&gt; scan 78081 match user_token_9999* count 10000
1) &quot;3993&quot;
2) 1) &quot;user_token_99994&quot;
   2) &quot;user_token_99993&quot;
127.0.0.1:6379&gt; scan 3993 match user_token_9999* count 10000
1) &quot;13773&quot;
2) 1) &quot;user_token_99995&quot;
127.0.0.1:6379&gt; scan 13773 match user_token_9999* count 10000
1) &quot;47923&quot;
2) (empty list or set)
127.0.0.1:6379&gt; scan 47923 match user_token_9999* count 10000
1) &quot;59751&quot;
2) 1) &quot;user_token_99990&quot;
   2) &quot;user_token_99991&quot;
   3) &quot;user_token_99999&quot;
127.0.0.1:6379&gt; scan 59751 match user_token_9999* count 10000
1) &quot;0&quot;
2) (empty list or set)

</code></pre>

<p>从以上的执行结果，我们看出两个问题：</p>

<ol>
<li>查询的结果为空，但游标值不为 0，表示遍历还没结束；</li>
<li>设置的是 count 10000，但每次返回的数量都不是 10000，且不固定，这是因为 count 只是限定服务器单次遍历的字典槽位数量（约等于），而不是规定返回结果的 count 值。</li>
</ol>

<p>相关语法：</p>

<pre><code>scan cursor [MATCH pattern] [COUNT count]

</code></pre>

<p>其中：</p>

<ul>
<li>cursor：光标位置，整数值，从 0 开始，到 0 结束，查询结果是空，但游标值不为 0，表示遍历还没结束；</li>
<li>match pattern：正则匹配字段；</li>
<li>count：限定服务器单次遍历的字典槽位数量（约等于），只是对增量式迭代命令的一种提示（hint），并不是查询结果返回的最大数量，它的默认值是 10。</li>
</ul>

<h3 id="代码实战">代码实战</h3>

<p>本文我们使用 Java 代码来实现 Scan 的查询功能，代码如下：</p>

<pre><code class="language-java">import redis.clients.jedis.Jedis;
import redis.clients.jedis.Pipeline;
import redis.clients.jedis.ScanParams;
import redis.clients.jedis.ScanResult;
import utils.JedisUtils;

public class ScanExample {
    public static void main(String[] args) {
        Jedis jedis = JedisUtils.getJedis();
        // 定义 match 和 count 参数
        ScanParams params = new ScanParams();
        params.count(10000);
        params.match(&quot;user_token_9999*&quot;);
        // 游标
        String cursor = &quot;0&quot;;
        while (true) {
            ScanResult&lt;String&gt; res = jedis.scan(cursor, params);
            if (res.getCursor().equals(&quot;0&quot;)) {
                // 表示最后一条
                break;
            }
            cursor = res.getCursor(); // 设置游标
            for (String item : res.getResult()) {
                // 打印查询结果
                System.out.println(&quot;查询结果：&quot; + item);
            }
        }
    }
}

</code></pre>

<p>以上程序执行结果如下：</p>

<pre><code>查询结果：user_token_99997
查询结果：user_token_9999
查询结果：user_token_99996
查询结果：user_token_99998
查询结果：user_token_99992
查询结果：user_token_99994
查询结果：user_token_99993
查询结果：user_token_99995
查询结果：user_token_99990
查询结果：user_token_99991
查询结果：user_token_99999

</code></pre>

<h3 id="scan-相关命令">Scan 相关命令</h3>

<p>Scan 是一个系列指令，除了 Scan 之外，还有以下 3 个命令：</p>

<ol>
<li>HScan 遍历字典游标迭代器</li>
<li>SScan 遍历集合的游标迭代器</li>
<li>ZScan 遍历有序集合的游标迭代器</li>
</ol>

<p>来看这些命令的具体使用。</p>

<h4 id="hscan-使用"><strong>HScan 使用</strong></h4>

<pre><code class="language-shell">127.0.0.1:6379&gt; hscan myhash 0 match k2* count 10
1) &quot;0&quot;
2) 1) &quot;k2&quot;
   2) &quot;v2&quot;

</code></pre>

<p>相关语法：</p>

<pre><code>hscan key cursor [MATCH pattern] [COUNT count]

</code></pre>

<h4 id="sscan-使用"><strong>SScan 使用</strong></h4>

<pre><code class="language-shell">127.0.0.1:6379&gt; sscan myset 0 match v2* count 20
1) &quot;0&quot;
2) 1) &quot;v2&quot;

</code></pre>

<p>相关语法：</p>

<pre><code>sscan key cursor [MATCH pattern] [COUNT count]

</code></pre>

<h4 id="zscan-使用"><strong>ZScan 使用</strong></h4>

<pre><code class="language-shell">127.0.0.1:6379&gt; zscan zset 0 match red* count 20
1) &quot;0&quot;
2) 1) &quot;redis&quot;
   2) &quot;10&quot;

</code></pre>

<p>相关语法：</p>

<pre><code>zscan key cursor [MATCH pattern] [COUNT count]

</code></pre>

<h3 id="scan-说明">Scan 说明</h3>

<p>官方对 Scan 命令的描述信息如下。</p>

<h4 id="scan-guarantees"><strong>Scan guarantees</strong></h4>

<blockquote>
<p>The SCAN command, and the other commands in the SCAN family, are able to provide to the user a set of guarantees associated to full iterations.</p>

<ul>
<li>A full iteration always retrieves all the elements that were present in the collection from the start to the end of a full iteration. This means that if a given element is inside the collection when an iteration is started, and is still there when an iteration terminates, then at some point SCANreturned it to the user.</li>
<li>A full iteration never returns any element that was NOT present in the collection from the start to the end of a full iteration. So if an element was removed before the start of an iteration, and is never added back to the collection for all the time an iteration lasts, SCAN ensures that this element will never be returned.</li>
</ul>

<p>However because SCAN has very little state associated (just the cursor) it has the following drawbacks:</p>

<ul>
<li>A given element may be returned multiple times. It is up to the application to handle the case of duplicated elements, for example only using the returned elements in order to perform operations that are safe when re-applied multiple times.</li>
<li>Elements that were not constantly present in the collection during a full iteration, may be returned or not: it is undefined.</li>
</ul>
</blockquote>

<p>官方文档地址：</p>

<blockquote>
<p><a href="https://redis.io/commands/scan" target="_blank">https://redis.io/commands/scan</a></p>
</blockquote>

<p>翻译为中文的含义是：Scan 及它的相关命令可以保证以下查询规则。</p>

<ul>
<li>它可以完整返回开始到结束检索集合中出现的所有元素，也就是在整个查询过程中如果这些元素没有被删除，且符合检索条件，则一定会被查询出来；</li>
<li>它可以保证不会查询出，在开始检索之前删除的那些元素。</li>
</ul>

<p>然后，Scan 命令包含以下缺点：</p>

<ul>
<li>一个元素可能被返回多次，需要客户端来实现去重；</li>
<li>在迭代过程中如果有元素被修改，那么修改的元素能不能被遍历到不确定。</li>
</ul>

<h3 id="小结">小结</h3>

<p>通过本文我们可以知道 Scan 包含以下四个指令：</p>

<ol>
<li>Scan：用于检索当前数据库中所有数据；</li>
<li>HScan：用于检索哈希类型的数据；</li>
<li>SScan：用于检索集合类型中的数据；</li>
<li>ZScan：由于检索有序集合中的数据。</li>
</ol>

<p>Scan 具备以下几个特点：</p>

<ol>
<li>Scan 可以实现 keys 的匹配功能；</li>
<li>Scan 是通过游标进行查询的不会导致 Redis 假死；</li>
<li>Scan 提供了 count 参数，可以规定遍历的数量；</li>
<li>Scan 会把游标返回给客户端，用户客户端继续遍历查询；</li>
<li>Scan 返回的结果可能会有重复数据，需要客户端去重；</li>
<li>单次返回空值且游标不为 0，说明遍历还没结束；</li>
<li>Scan 可以保证在开始检索之前，被删除的元素一定不会被查询出来；</li>
<li>在迭代过程中如果有元素被修改， Scan 不保证能查询出相关的元素。</li>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#7a161616434e4b4b4a4d3a1d171b131654191517" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f1217a02bb8cdc2',t:'MTczNDA1MjQxMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>