<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=27&#32;消息队列终极解决方案——Stream（下）>
        <link rel="icon" href="/static/favicon.png">
        <title>27 消息队列终极解决方案——Stream（下） </title>
        
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
                            <h1 id="title" data-id="27 消息队列终极解决方案——Stream（下）" class="title">27 消息队列终极解决方案——Stream（下）</h1>
                            <div><p>在开始使用消息分组之前，我们必须手动创建分组才行，以下是几个和 Stream 分组有关的命令，我们先来学习一下它的使用。</p>

<h3 id="消息分组命令">消息分组命令</h3>

<h4 id="创建消费者群组"><strong>创建消费者群组</strong></h4>

<pre><code class="language-shell">127.0.0.1:6379&gt; xgroup create mq group1 0-0 
OK

</code></pre>

<p>相关语法：</p>

<pre><code>xgroup create stream-key group-key ID

</code></pre>

<p>其中：</p>

<ul>
<li>mq 为 Stream 的 key；</li>
<li>group1 为分组的名称；</li>
<li>0-0 表示从第一条消息开始读取。</li>
</ul>

<p>如果要从当前最后一条消息向后读取，使用 <code>$</code> 即可，命令如下：</p>

<pre><code class="language-shell">127.0.0.1:6379&gt; xgroup create mq group2 $
OK

</code></pre>

<h4 id="读取消息"><strong>读取消息</strong></h4>

<pre><code class="language-shell">127.0.0.1:6379&gt; xreadgroup group group1 c1 count 1 streams mq &gt;
1) 1) &quot;mq&quot;
   2) 1) 1) &quot;1580959593553-0&quot;
         2) 1) &quot;name&quot;
            2) &quot;redis&quot;
            3) &quot;age&quot;
            4) &quot;10&quot;

</code></pre>

<p>相关语法：</p>

<pre><code>xreadgroup group group-key consumer-key streams stream-key

</code></pre>

<p>其中：</p>

<ul>
<li><code>&gt;</code> 表示读取下一条消息；</li>
<li>group1 表示分组名称；</li>
<li>c1 表示 consumer（消费者）名称。</li>
</ul>

<p>xreadgroup 命令和 xread 使用类似，也可以设置阻塞读取，命令如下：</p>

<pre><code class="language-shell">127.0.0.1:6379&gt; xreadgroup group group1 c2 streams mq &gt;
1) 1) &quot;mq&quot;
   2) 1) 1) &quot;1580959606181-0&quot;
         2) 1) &quot;name&quot;
            2) &quot;java&quot;
            3) &quot;age&quot;
            4) &quot;20&quot;
127.0.0.1:6379&gt; xreadgroup group group1 c2 streams mq &gt;
(nil) #队列中的消息已经被读取完
127.0.0.1:6379&gt; xreadgroup group group1 c1 count 1 block 0 streams mq &gt; #阻塞读取

</code></pre>

<p>此时打开另一个命令行创建使用 xadd 添加一条消息，阻塞命令执行结果如下：</p>

<pre><code class="language-shell">127.0.0.1:6379&gt; xreadgroup group group1 c1 count 1 block 0 streams mq &gt;
1) 1) &quot;mq&quot;
   2) 1) 1) &quot;1580961475368-0&quot;
         2) 1) &quot;name&quot;
            2) &quot;sql&quot;
            3) &quot;age&quot;
            4) &quot;20&quot;
(86.14s)

</code></pre>

<h4 id="消息消费确认"><strong>消息消费确认</strong></h4>

<p>接收到消息之后，我们要手动确认一下（ack），命令如下：</p>

<pre><code class="language-shell">127.0.0.1:6379&gt; xack mq group1 1580959593553-0
(integer) 1

</code></pre>

<p>相关语法：</p>

<pre><code>xack key group-key ID [ID ...]

</code></pre>

<p>消费确认增加了消息的可靠性，一般在业务处理完成之后，需要执行 ack 确认消息已经被消费完成，整个流程的执行如下图所示：</p>

<p><img src="assets/a5dfbd80-6f72-11ea-833b-93fabc8068c9" alt="image.png" /></p>

<h4 id="查询未确认的消费队列"><strong>查询未确认的消费队列</strong></h4>

<pre><code class="language-shell">127.0.0.1:6379&gt; xpending mq group1
1) (integer) 1 #未确认（ack）的消息数量为 1 条
2) &quot;1580994063971-0&quot;
3) &quot;1580994063971-0&quot;
4) 1) 1) &quot;c1&quot;
      2) &quot;1&quot;
127.0.0.1:6379&gt; xack  mq group1 1580994063971-0 #消费确认
(integer) 1
127.0.0.1:6379&gt; xpending mq group1
1) (integer) 0 #没有未确认的消息
2) (nil)
3) (nil)
4) (nil)

</code></pre>

<h4 id="xinfo-查询相关命令"><strong>xinfo 查询相关命令</strong></h4>

<p><strong>1. 查询流信息</strong></p>

<pre><code class="language-shell">127.0.0.1:6379&gt; xinfo stream mq
 1) &quot;length&quot;
 2) (integer) 2 #队列中有两个消息
 3) &quot;radix-tree-keys&quot;
 4) (integer) 1
 5) &quot;radix-tree-nodes&quot;
 6) (integer) 2
 7) &quot;groups&quot;
 8) (integer) 1 #一个消费分组
 9) &quot;last-generated-id&quot;
10) &quot;1580959606181-0&quot;
11) &quot;first-entry&quot;
12) 1) &quot;1580959593553-0&quot;
    2) 1) &quot;name&quot;
       2) &quot;redis&quot;
       3) &quot;age&quot;
       4) &quot;10&quot;
13) &quot;last-entry&quot;
14) 1) &quot;1580959606181-0&quot;
    2) 1) &quot;name&quot;
       2) &quot;java&quot;
       3) &quot;age&quot;
       4) &quot;20&quot;

</code></pre>

<p>相关语法：</p>

<pre><code>xinfo stream stream-key

</code></pre>

<p><strong>2. 查询消费组消息</strong></p>

<pre><code class="language-shell">127.0.0.1:6379&gt; xinfo groups mq
1) 1) &quot;name&quot;
   2) &quot;group1&quot; #消息分组名称
   3) &quot;consumers&quot;
   4) (integer) 1 #一个消费者客户端
   5) &quot;pending&quot;
   6) (integer) 1 #一个未确认消息
   7) &quot;last-delivered-id&quot;
   8) &quot;1580959593553-0&quot; #读取的最后一条消息 ID

</code></pre>

<p>相关语法：</p>

<pre><code>xinfo groups stream-key

</code></pre>

<p><strong>3. 查看消费者组成员信息</strong></p>

<pre><code class="language-shell">127.0.0.1:6379&gt; xinfo consumers mq group1
1) 1) &quot;name&quot;
   2) &quot;c1&quot; #消费者名称
   3) &quot;pending&quot;
   4) (integer) 0 #未确认消息
   5) &quot;idle&quot;
   6) (integer) 481855

</code></pre>

<p>相关语法：</p>

<pre><code>xinfo consumers stream group-key

</code></pre>

<h4 id="删除消费者"><strong>删除消费者</strong></h4>

<pre><code class="language-shell">127.0.0.1:6379&gt; xgroup delconsumer mq group1 c1
(integer) 1

</code></pre>

<p>相关语法：</p>

<pre><code>xgroup delconsumer stream-key group-key consumer-key

</code></pre>

<h4 id="删除消费组"><strong>删除消费组</strong></h4>

<pre><code class="language-shell">127.0.0.1:6379&gt; xgroup destroy mq group1
(integer) 1

</code></pre>

<p>相关语法：</p>

<pre><code>xgroup destroy stream-key group-key

</code></pre>

<h3 id="代码实战">代码实战</h3>

<p>接下来我们使用 Jedis 来实现 Stream 分组消息队列，代码如下：</p>

<pre><code class="language-java">import com.google.gson.Gson;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.StreamEntry;
import redis.clients.jedis.StreamEntryID;
import utils.JedisUtils;

import java.util.AbstractMap;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StreamGroupExample {
    private static final String _STREAM_KEY = &quot;mq&quot;; // 流 key
    private static final String _GROUP_NAME = &quot;g1&quot;; // 分组名称
    private static final String _CONSUMER_NAME = &quot;c1&quot;; // 消费者 1 的名称
    private static final String _CONSUMER2_NAME = &quot;c2&quot;; // 消费者 2 的名称
    public static void main(String[] args) {
        // 生产者
        producer();
        // 创建消费组
        createGroup(_STREAM_KEY, _GROUP_NAME);
        // 消费者 1
        new Thread(() -&gt; consumer()).start();
        // 消费者 2
        new Thread(() -&gt; consumer2()).start();
    }
    /**
     * 创建消费分组
     * @param stream    流 key
     * @param groupName 分组名称
     */
    public static void createGroup(String stream, String groupName) {
        Jedis jedis = JedisUtils.getJedis();
        jedis.xgroupCreate(stream, groupName, new StreamEntryID(), true);
    }
    /**
     * 生产者
     */
    public static void producer() {
        Jedis jedis = JedisUtils.getJedis();
        // 添加消息 1
        Map&lt;String, String&gt; map = new HashMap&lt;&gt;();
        map.put(&quot;data&quot;, &quot;redis&quot;);
        StreamEntryID id = jedis.xadd(_STREAM_KEY, null, map);
        System.out.println(&quot;消息添加成功 ID：&quot; + id);
        // 添加消息 2
        Map&lt;String, String&gt; map2 = new HashMap&lt;&gt;();
        map2.put(&quot;data&quot;, &quot;java&quot;);
        StreamEntryID id2 = jedis.xadd(_STREAM_KEY, null, map2);
        System.out.println(&quot;消息添加成功 ID：&quot; + id2);
    }
    /**
     * 消费者 1
     */
    public static void consumer() {
        Jedis jedis = JedisUtils.getJedis();
        // 消费消息
        while (true) {
            // 读取消息
            Map.Entry&lt;String, StreamEntryID&gt; entry = new AbstractMap.SimpleImmutableEntry&lt;&gt;(_STREAM_KEY,
                    new StreamEntryID().UNRECEIVED_ENTRY);
            // 阻塞读取一条消息（最大阻塞时间120s）
            List&lt;Map.Entry&lt;String, List&lt;StreamEntry&gt;&gt;&gt; list = jedis.xreadGroup(_GROUP_NAME, _CONSUMER_NAME, 1,
                    120 * 1000, true, entry);
            if (list != null &amp;&amp; list.size() == 1) {
                // 读取到消息
                Map&lt;String, String&gt; content = list.get(0).getValue().get(0).getFields(); // 消息内容
                System.out.println(&quot;Consumer 1 读取到消息 ID：&quot; + list.get(0).getValue().get(0).getID() +
                        &quot; 内容：&quot; + new Gson().toJson(content));
            }
        }
    }
    /**
     * 消费者 2
     */
    public static void consumer2() {
        Jedis jedis = JedisUtils.getJedis();
        // 消费消息
        while (true) {
            // 读取消息
            Map.Entry&lt;String, StreamEntryID&gt; entry = new AbstractMap.SimpleImmutableEntry&lt;&gt;(_STREAM_KEY,
                    new StreamEntryID().UNRECEIVED_ENTRY);
            // 阻塞读取一条消息（最大阻塞时间120s）
            List&lt;Map.Entry&lt;String, List&lt;StreamEntry&gt;&gt;&gt; list = jedis.xreadGroup(_GROUP_NAME, _CONSUMER2_NAME, 1,
                    120 * 1000, true, entry);
            if (list != null &amp;&amp; list.size() == 1) {
                // 读取到消息
                Map&lt;String, String&gt; content = list.get(0).getValue().get(0).getFields(); // 消息内容
                System.out.println(&quot;Consumer 2 读取到消息 ID：&quot; + list.get(0).getValue().get(0).getID() +
                        &quot; 内容：&quot; + new Gson().toJson(content));
            }
        }
    }
}

</code></pre>

<p>以上代码运行结果如下：</p>

<pre><code>消息添加成功 ID：1580971482344-0
消息添加成功 ID：1580971482415-0
Consumer 1 读取到消息 ID：1580971482344-0 内容：{&quot;data&quot;:&quot;redis&quot;}
Consumer 2 读取到消息 ID：1580971482415-0 内容：{&quot;data&quot;:&quot;java&quot;}

</code></pre>

<p>其中，jedis.xreadGroup() 方法的第五个参数 noAck 表示是否自动确认消息，如果设置 true 收到消息会自动确认（ack）消息，否则则需要手动确认。</p>

<blockquote>
<p>注意：Jedis 框架要使用最新版，低版本 block 设置大于 0 时，会有 bug 抛连接超时异常。</p>
</blockquote>

<p>可以看出，同一个分组内的多个 consumer 会读取到不同消息，不同的 consumer 不会读取到分组内的同一条消息。</p>

<h3 id="小结">小结</h3>

<p>本文我们介绍了 Stream 分组的相关知识，使用 Jedis 的 xreadGroup() 方法实现了消息的阻塞读取，并且使用此方法自带 noAck 参数，实现了消息的自动确认，通过本文我们也知道了，一个分组内的多个 consumer 会轮询收到消息队列的消息，并且不会出现一个消息被多个 consumer 读取的情况。</p>

<p>如果你看了本文的知识还是觉得没看懂，那是因为你没有结合实践去理解，所以如果对本文还有疑问，跟着本文一步一步实践起来吧。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#c9a5a5a5f0fdf8f8f9fe89aea4a8a0a5e7aaa6a4" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f1218a3fff0cdc2',t:'MTczNDA1MjQ1NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>