<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=38&#32;实战：Redis&#32;哨兵模式（下）>
        <link rel="icon" href="/static/favicon.png">
        <title>38 实战：Redis 哨兵模式（下） </title>
        
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
                            <h1 id="title" data-id="38 实战：Redis 哨兵模式（下）" class="title">38 实战：Redis 哨兵模式（下）</h1>
                            <div><p>上一篇我们介绍了 Redis Sentinel 的搭建和运行原理，本文我们重点来看下 Sentinel 的命令操作和代码实战。</p>

<h3 id="sentinel-命令操作">Sentinel 命令操作</h3>

<p>要使用 Sentinel 实现要连接到 Sentinel 服务器，和连接 Redis 服务相同，我们可以使用 redis-cli 来连接 Sentinel，如下命令所示：</p>

<pre><code class="language-shell">[@iZ2ze0nc5n41zomzyqtksmZ:~]$ redis-cli -h 127.0.0.1 -p 26379 -a pwd654321
127.0.0.1:26379&gt; ping
PONG

</code></pre>

<p>其中：</p>

<ul>
<li>-h 后面输入的是 Sentinel 的 IP；</li>
<li>-p 后面输入的是 Sentinel 的端口，默认是 26379；</li>
<li>-a 后面输入的是密码。</li>
</ul>

<p>Sentinel 的端口号可以在 sentinel.conf 里面配置，通过 port 选项设置。</p>

<p>注意：<strong>Sentinel 可以监视多台主节点，而不是只能监视一台服务器</strong>。想要监视多台主节点只需要在配置文件中设置多个 <code>sentinel monitor master-name ip port quorum</code> 即可，我们通过 master-name 来区分不同的主节点。</p>

<h4 id="查询所有被监控的主服务器信息"><strong>查询所有被监控的主服务器信息</strong></h4>

<pre><code class="language-shell">127.0.0.1:26379&gt; sentinel masters
1)  1) &quot;name&quot;
    2) &quot;mymaster&quot;
    3) &quot;ip&quot;
    4) &quot;127.0.0.1&quot;
    5) &quot;port&quot;
    6) &quot;6377&quot;
    7) &quot;runid&quot;
    8) &quot;eb3552c6fc8974f91466c4ada90fe23ef30fd89c&quot;
    9) &quot;flags&quot;
   10) &quot;master&quot;
   11) &quot;link-pending-commands&quot;
   12) &quot;0&quot;
   13) &quot;link-refcount&quot;
   14) &quot;1&quot;
   15) &quot;last-ping-sent&quot;
   16) &quot;0&quot;
   17) &quot;last-ok-ping-reply&quot;
   18) &quot;400&quot;
   19) &quot;last-ping-reply&quot;
   20) &quot;400&quot;
   21) &quot;down-after-milliseconds&quot;
   22) &quot;30000&quot;
   23) &quot;info-refresh&quot;
   24) &quot;5731&quot;
   25) &quot;role-reported&quot;
   26) &quot;master&quot;
   27) &quot;role-reported-time&quot;
   28) &quot;75963321&quot;
   29) &quot;config-epoch&quot;
   30) &quot;7&quot;
   31) &quot;num-slaves&quot;
   32) &quot;2&quot;
   33) &quot;num-other-sentinels&quot;
   34) &quot;1&quot;
   35) &quot;quorum&quot;
   36) &quot;2&quot;
   37) &quot;failover-timeout&quot;
   38) &quot;180000&quot;
   39) &quot;parallel-syncs&quot;
   40) &quot;1&quot;

</code></pre>

<p>相关语法：</p>

<pre><code>sentinel masters

</code></pre>

<p>因为我们配置的 Sentinel 只监视了一台主服务器，所以只有一台服务器的信息。</p>

<h4 id="查询某个主节点的信息"><strong>查询某个主节点的信息</strong></h4>

<pre><code class="language-shell">127.0.0.1:26379&gt; sentinel master mymaster
 1) &quot;name&quot;
 2) &quot;mymaster&quot;
 3) &quot;ip&quot;
 4) &quot;127.0.0.1&quot;
 5) &quot;port&quot;
 6) &quot;6377&quot;
 7) &quot;runid&quot;
 8) &quot;eb3552c6fc8974f91466c4ada90fe23ef30fd89c&quot;
 9) &quot;flags&quot;
10) &quot;master&quot;
11) &quot;link-pending-commands&quot;
12) &quot;0&quot;
13) &quot;link-refcount&quot;
14) &quot;1&quot;
15) &quot;last-ping-sent&quot;
16) &quot;0&quot;
17) &quot;last-ok-ping-reply&quot;
18) &quot;250&quot;
19) &quot;last-ping-reply&quot;
20) &quot;250&quot;
21) &quot;down-after-milliseconds&quot;
22) &quot;30000&quot;
23) &quot;info-refresh&quot;
24) &quot;8191&quot;
25) &quot;role-reported&quot;
26) &quot;master&quot;
27) &quot;role-reported-time&quot;
28) &quot;76096303&quot;
29) &quot;config-epoch&quot;
30) &quot;7&quot;
31) &quot;num-slaves&quot;
32) &quot;2&quot;
33) &quot;num-other-sentinels&quot;
34) &quot;1&quot;
35) &quot;quorum&quot;
36) &quot;2&quot;
37) &quot;failover-timeout&quot;
38) &quot;180000&quot;
39) &quot;parallel-syncs&quot;
40) &quot;1&quot;

</code></pre>

<p>相关语法：</p>

<pre><code>sentinel master master-name

</code></pre>

<h4 id="查看某个主节点的-ip-和端口"><strong>查看某个主节点的 IP 和端口</strong></h4>

<pre><code class="language-shell">127.0.0.1:26379&gt; sentinel get-master-addr-by-name mymaster
1) &quot;127.0.0.1&quot;
2) &quot;6377&quot;

</code></pre>

<p>相关语法：</p>

<pre><code>sentinel get-master-addr-by-name master-name

</code></pre>

<h4 id="查询从节点的信息"><strong>查询从节点的信息</strong></h4>

<pre><code class="language-shell">127.0.0.1:26379&gt; sentinel slaves mymaster #获取方式一
1)  1) &quot;name&quot;
    2) &quot;127.0.0.1:6379&quot;
    3) &quot;ip&quot;
    4) &quot;127.0.0.1&quot;
    5) &quot;port&quot;
    6) &quot;6379&quot;
    7) &quot;runid&quot;
    8) &quot;14734d6065d745d89f115ca4735e7eeeeaa1a59b&quot;
    9) &quot;flags&quot;
   10) &quot;slave&quot;
   11) &quot;link-pending-commands&quot;
   12) &quot;0&quot;
   13) &quot;link-refcount&quot;
   14) &quot;1&quot;
   15) &quot;last-ping-sent&quot;
   16) &quot;0&quot;
   17) &quot;last-ok-ping-reply&quot;
   18) &quot;389&quot;
   19) &quot;last-ping-reply&quot;
   20) &quot;389&quot;
   21) &quot;down-after-milliseconds&quot;
   22) &quot;30000&quot;
   23) &quot;info-refresh&quot;
   24) &quot;390&quot;
   25) &quot;role-reported&quot;
   26) &quot;slave&quot;
   27) &quot;role-reported-time&quot;
   28) &quot;982798&quot;
   29) &quot;master-link-down-time&quot;
   30) &quot;1582192784000&quot;
   31) &quot;master-link-status&quot;
   32) &quot;err&quot;
   33) &quot;master-host&quot;
   34) &quot;127.0.0.1&quot;
   35) &quot;master-port&quot;
   36) &quot;6377&quot;
   37) &quot;slave-priority&quot;
   38) &quot;100&quot;
   39) &quot;slave-repl-offset&quot;
   40) &quot;1&quot;
2)  1) &quot;name&quot;
    2) &quot;127.0.0.1:6378&quot;
    3) &quot;ip&quot;
    4) &quot;127.0.0.1&quot;
    5) &quot;port&quot;
    6) &quot;6378&quot;
    7) &quot;runid&quot;
    8) &quot;f9d69479ace6c9eb4a6dffa58ebc1ddf3de456e0&quot;
    9) &quot;flags&quot;
   10) &quot;slave&quot;
   11) &quot;link-pending-commands&quot;
   12) &quot;0&quot;
   13) &quot;link-refcount&quot;
   14) &quot;1&quot;
   15) &quot;last-ping-sent&quot;
   16) &quot;0&quot;
   17) &quot;last-ok-ping-reply&quot;
   18) &quot;390&quot;
   19) &quot;last-ping-reply&quot;
   20) &quot;390&quot;
   21) &quot;down-after-milliseconds&quot;
   22) &quot;30000&quot;
   23) &quot;info-refresh&quot;
   24) &quot;4004&quot;
   25) &quot;role-reported&quot;
   26) &quot;slave&quot;
   27) &quot;role-reported-time&quot;
   28) &quot;76212633&quot;
   29) &quot;master-link-down-time&quot;
   30) &quot;0&quot;
   31) &quot;master-link-status&quot;
   32) &quot;ok&quot;
   33) &quot;master-host&quot;
   34) &quot;127.0.0.1&quot;
   35) &quot;master-port&quot;
   36) &quot;6377&quot;
   37) &quot;slave-priority&quot;
   38) &quot;100&quot;
   39) &quot;slave-repl-offset&quot;
   40) &quot;10811245&quot;
127.0.0.1:26379&gt; sentinel replicas mymaster #获取方式二
1)  1) &quot;name&quot;
    2) &quot;127.0.0.1:6379&quot;
    3) &quot;ip&quot;
    4) &quot;127.0.0.1&quot;
    5) &quot;port&quot;
    6) &quot;6379&quot;
    7) &quot;runid&quot;
    8) &quot;14734d6065d745d89f115ca4735e7eeeeaa1a59b&quot;
    9) &quot;flags&quot;
   10) &quot;slave&quot;
   11) &quot;link-pending-commands&quot;
   12) &quot;0&quot;
   13) &quot;link-refcount&quot;
   14) &quot;1&quot;
   15) &quot;last-ping-sent&quot;
   16) &quot;0&quot;
   17) &quot;last-ok-ping-reply&quot;
   18) &quot;100&quot;
   19) &quot;last-ping-reply&quot;
   20) &quot;100&quot;
   21) &quot;down-after-milliseconds&quot;
   22) &quot;30000&quot;
   23) &quot;info-refresh&quot;
   24) &quot;100&quot;
   25) &quot;role-reported&quot;
   26) &quot;slave&quot;
   27) &quot;role-reported-time&quot;
   28) &quot;1071687&quot;
   29) &quot;master-link-down-time&quot;
   30) &quot;1582192873000&quot;
   31) &quot;master-link-status&quot;
   32) &quot;err&quot;
   33) &quot;master-host&quot;
   34) &quot;127.0.0.1&quot;
   35) &quot;master-port&quot;
   36) &quot;6377&quot;
   37) &quot;slave-priority&quot;
   38) &quot;100&quot;
   39) &quot;slave-repl-offset&quot;
   40) &quot;1&quot;
2)  1) &quot;name&quot;
    2) &quot;127.0.0.1:6378&quot;
    3) &quot;ip&quot;
    4) &quot;127.0.0.1&quot;
    5) &quot;port&quot;
    6) &quot;6378&quot;
    7) &quot;runid&quot;
    8) &quot;f9d69479ace6c9eb4a6dffa58ebc1ddf3de456e0&quot;
    9) &quot;flags&quot;
   10) &quot;slave&quot;
   11) &quot;link-pending-commands&quot;
   12) &quot;0&quot;
   13) &quot;link-refcount&quot;
   14) &quot;1&quot;
   15) &quot;last-ping-sent&quot;
   16) &quot;0&quot;
   17) &quot;last-ok-ping-reply&quot;
   18) &quot;100&quot;
   19) &quot;last-ping-reply&quot;
   20) &quot;100&quot;
   21) &quot;down-after-milliseconds&quot;
   22) &quot;30000&quot;
   23) &quot;info-refresh&quot;
   24) &quot;2496&quot;
   25) &quot;role-reported&quot;
   26) &quot;slave&quot;
   27) &quot;role-reported-time&quot;
   28) &quot;76301522&quot;
   29) &quot;master-link-down-time&quot;
   30) &quot;0&quot;
   31) &quot;master-link-status&quot;
   32) &quot;ok&quot;
   33) &quot;master-host&quot;
   34) &quot;127.0.0.1&quot;
   35) &quot;master-port&quot;
   36) &quot;6377&quot;
   37) &quot;slave-priority&quot;
   38) &quot;100&quot;
   39) &quot;slave-repl-offset&quot;
   40) &quot;10823208&quot;

</code></pre>

<p>相关语法：</p>

<pre><code>sentinel replicas mymaster

</code></pre>

<p>或</p>

<pre><code>sentinel slaves master-name

</code></pre>

<h4 id="查询-sentinel-集群中的其他-sentinel-信息"><strong>查询 Sentinel 集群中的其他 Sentinel 信息</strong></h4>

<pre><code class="language-shell">127.0.0.1:26379&gt; sentinel sentinels mymaster
1)  1) &quot;name&quot;
    2) &quot;6455f2f74614a71ce0a63398b2e48d6cd1cf0d06&quot;
    3) &quot;ip&quot;
    4) &quot;127.0.0.1&quot;
    5) &quot;port&quot;
    6) &quot;26377&quot;
    7) &quot;runid&quot;
    8) &quot;6455f2f74614a71ce0a63398b2e48d6cd1cf0d06&quot;
    9) &quot;flags&quot;
   10) &quot;sentinel&quot;
   11) &quot;link-pending-commands&quot;
   12) &quot;0&quot;
   13) &quot;link-refcount&quot;
   14) &quot;1&quot;
   15) &quot;last-ping-sent&quot;
   16) &quot;0&quot;
   17) &quot;last-ok-ping-reply&quot;
   18) &quot;571&quot;
   19) &quot;last-ping-reply&quot;
   20) &quot;571&quot;
   21) &quot;down-after-milliseconds&quot;
   22) &quot;30000&quot;
   23) &quot;last-hello-message&quot;
   24) &quot;1043&quot;
   25) &quot;voted-leader&quot;
   26) &quot;?&quot;
   27) &quot;voted-leader-epoch&quot;
   28) &quot;0&quot;

</code></pre>

<p>相关语法：</p>

<pre><code>sentinel sentinels master-name

</code></pre>

<h4 id="检查可用-sentinel-的数量"><strong>检查可用 Sentinel 的数量</strong></h4>

<pre><code class="language-shell">127.0.0.1:26379&gt; sentinel ckquorum mymaster
OK 2 usable Sentinels. Quorum and failover authorization can be reached

</code></pre>

<p>有两个可用的 Sentinel，可用完成仲裁和故障转移授权。</p>

<p>相关语法：</p>

<pre><code>sentinel ckquorum master-name

</code></pre>

<h4 id="强制故障转移"><strong>强制故障转移</strong></h4>

<pre><code class="language-shell">127.0.0.1:26379&gt; sentinel failover mymaster
OK

</code></pre>

<p>相关语法：</p>

<pre><code>sentinel failover master-name

</code></pre>

<h3 id="在线修改配置信息">在线修改配置信息</h3>

<p>在 Redis 2.8.4 之前如果需要修改 Sentinel 的配置文件，例如添加或删除一个监视主节点，需要先停止 Sentinel 服务，再找到配置文件修改之后，重新启动 Sentinel 才行，这样就给我们带来了很多的不便，尤其是生产环境的 Sentinel，正常情况下如果是非致命问题我们是不能手动停止服务的，幸运的是 Redis 2.8.4 之后，我们可以不停机在线修改配置文件了，修改命令有以下几个。</p>

<h4 id="增加监视主节点"><strong>增加监视主节点</strong></h4>

<p>使用 <code>sentinel monitor mymaster IP Port Quorum</code> 命令来添加监视主节点，如下命令所示：</p>

<pre><code class="language-shell">127.0.0.1:26379&gt; sentinel monitor mymaster 127.0.0.1 6379 2
OK

</code></pre>

<p>OK 表示添加监视主节点成功。</p>

<h4 id="移除主节点的监视"><strong>移除主节点的监视</strong></h4>

<p>使用 <code>sentinel remove master-name</code> 命令来实现移除主节点的监视，如下命令所示：</p>

<pre><code class="language-shell">127.0.0.1:26379&gt; sentinel remove mymaster
OK

</code></pre>

<p>OK 表示操作成功。</p>

<h4 id="修改-quorum-参数"><strong>修改 quorum 参数</strong></h4>

<p>使用 <code>sentinel set master-name quorum n</code> 来修改 quorum 参数，如下命令所示：</p>

<pre><code class="language-shell">127.0.0.1:26379&gt; sentinel set mymaster quorum 1
OK

</code></pre>

<p>quorum 参数用来表示确认主节点下线的 Sentinel 数量，如果 quorum 设置为 1 表示只要有一台 Sentinel 确认主观下线后，这个主节点就客观（真正地）下线了。</p>

<blockquote>
<p>小贴士：以上所有对配置文件的修改，都会自动被刷新到物理配置文件 sentinel.conf 中。</p>
</blockquote>

<h3 id="代码实战">代码实战</h3>

<p>本文我们通过 Java 代码来实现，通过 Sentinel 连接信息获取相关 Redis 客户端，再进行相关 Redis 操作，这样 Sentinel 就会帮我们做容灾恢复，我们就不用担心操作某一个 Redis 服务器端，因为服务器挂了之后就会导致程序不可用了，具体实现代码如下：</p>

<pre><code class="language-java">import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisSentinelPool;
import utils.Config;

import java.util.HashSet;
import java.util.Set;

public class SentinelExample {
    // master name
    private static String _MASTER_NAME = &quot;mymaster&quot;;

    public static void main(String[] args) {
        // Sentinel 配置信息
        Set&lt;String&gt; set = new HashSet&lt;&gt;();
        // 连接信息 ip:port
        set.add(&quot;127.0.0.1:26379&quot;);
        // 创建 Sentinel 连接池
        JedisSentinelPool jedisSentinel = new JedisSentinelPool(_MASTER_NAME,
                set, Config.REDIS_AUTH);
        // 获取 Redis 客户端
        Jedis jedis = jedisSentinel.getResource();
        // 设置元素
        String setRes = jedis.set(&quot;key&quot;, &quot;Hello, redis.&quot;);
        System.out.println(setRes);
        // 获取元素
        System.out.println(jedis.get(&quot;key&quot;));
    }
}

</code></pre>

<p>以上程序执行结果如下：</p>

<pre><code>OK
Hello, redis.

</code></pre>

<h3 id="小结">小结</h3>

<p>本文我们讲了 Sentinel 相关的命令操作，主要是用于查询相关主从节点和其他 Sentinel 信息的，还可以执行强制故障转移等，我们还讲了 2.8.4 提供的在线修改 Sentinel 参数的三个方法，方便我们更好的使用 Sentinel，最后用代码实现了通过 Sentinel 获取主节点并进行 Redis 服务器操作的实例，这样就讲完整个 Sentinel 的介绍和应用。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#caa6a6a6f3fefbfbfafd8aada7aba3a6e4a9a5a7" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f121aa5eaeccdc2',t:'MTczNDA1MjUzNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>