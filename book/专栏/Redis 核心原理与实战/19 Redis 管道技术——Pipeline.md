<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=19&#32;Redis&#32;管道技术——Pipeline>
        <link rel="icon" href="/static/favicon.png">
        <title>19 Redis 管道技术——Pipeline </title>
        
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
                            <h1 id="title" data-id="19 Redis 管道技术——Pipeline" class="title">19 Redis 管道技术——Pipeline</h1>
                            <div><p>管道技术（Pipeline）是客户端提供的一种批处理技术，用于一次处理多个 Redis 命令，从而提高整个交互的性能。</p>

<p>通常情况下 Redis 是单行执行的，客户端先向服务器发送请求，服务端接收并处理请求后再把结果返回给客户端，这种处理模式在非频繁请求时不会有任何问题。</p>

<p>但如果出现集中大批量的请求时，因为每个请求都要经历先请求再响应的过程，这就会造成网络资源浪费，此时就需要管道技术来把所有的命令整合一次发给服务端，再一次响应给客户端，这样就能大大的提升了 Redis 的响应速度。</p>

<p>普通命令模式，如下图所示：</p>

<p><img src="assets/30beb330-63a1-11ea-9c08-6f91e6eaabb6" alt="普通模式.png" /></p>

<p>管道模式，如下图所示：</p>

<p><img src="assets/4b5d1f60-63a1-11ea-8be0-ebada4c42c48" alt="管道模式.png" /></p>

<blockquote>
<p>小贴士：管道中命令越多，管道技术的作用就更大，相比于普通模式来说执行效率就越高。</p>
</blockquote>

<h3 id="管道技术解决了什么问题">管道技术解决了什么问题？</h3>

<p>管道技术解决了多个命令集中请求时造成网络资源浪费的问题，加快了 Redis 的响应速度，让 Redis 拥有更高的运行速度。但要注意的一点是，管道技术本质上是客户端提供的功能，而非 Redis 服务器端的功能。</p>

<h3 id="管道技术使用">管道技术使用</h3>

<p>本文我们使用 Jedis 客户端提供的 Pipeline 对象来实现管道技术。首先先获取 Pipeline 对象，再为 Pipeline 对象设置需要执行的命令，最后再使用 sync() 方法或 syncAndReturnAll() 方法来统一执行这些命令，代码如下：</p>

<pre><code class="language-java">public class PipelineExample {
    public static void main(String[] args) {
        Jedis jedis = new Jedis(&quot;127.0.0.1&quot;, 6379);
        // 记录执行开始时间
        long beginTime = System.currentTimeMillis();
        // 获取 Pipeline 对象
        Pipeline pipe = jedis.pipelined();
        // 设置多个 Redis 命令
        for (int i = 0; i &lt; 100; i++) {
            pipe.set(&quot;key&quot; + i, &quot;val&quot; + i);
            pipe.del(&quot;key&quot;+i);
        }
        // 执行命令
        pipe.sync();
        // 记录执行结束时间
        long endTime = System.currentTimeMillis();
        System.out.println(&quot;执行耗时：&quot; + (endTime - beginTime) + &quot;毫秒&quot;);
    }
}

</code></pre>

<p>以上程序执行结果如下：</p>

<pre><code>执行耗时：297毫秒

</code></pre>

<p>如果要接收管道所有命令的执行结果，可使用 syncAndReturnAll() 方法，示例代码如下：</p>

<pre><code class="language-java">public class PipelineExample {
    public static void main(String[] args) {
        Jedis jedis = new Jedis(&quot;127.0.0.1&quot;, 6379);
        // 获取 Pipeline 对象
        Pipeline pipe = jedis.pipelined();
        // 设置多个 Redis 命令
        for (int i = 0; i &lt; 100; i++) {
            pipe.set(&quot;key&quot; + i, &quot;val&quot; + i);
        }
        // 执行命令并返回结果
        List&lt;Object&gt; res = pipe.syncAndReturnAll();
        for (Object obj : res) {
            // 打印结果
            System.out.println(obj);
        }
    }
}

</code></pre>

<h3 id="管道技术-vs-普通命令">管道技术 VS 普通命令</h3>

<p>上面使用管道技术执行一个 for 循环所用的时间为 297 毫秒，接下来我们用普通的命令执行此循环，看下程序的执行时间，代码如下：</p>

<pre><code class="language-java">public class PipelineExample {
    public static void main(String[] args) {
        Jedis jedis = new Jedis(&quot;127.0.0.1&quot;, 6379);
        // 记录执行开始时间
        long beginTime = System.currentTimeMillis();
        for (int i = 0; i &lt; 100; i++) {
            jedis.set(&quot;key&quot; + i, &quot;val&quot; + i);
            jedis.del(&quot;key&quot;+i);
        }
        // 记录执行结束时间
        long endTime = System.currentTimeMillis();
        System.out.println(&quot;执行耗时：&quot; + (endTime - beginTime) + &quot;毫秒&quot;);
    }
}

</code></pre>

<p>以上程序执行结果如下：</p>

<pre><code>执行耗时：17276毫秒

</code></pre>

<p><strong>结论</strong></p>

<p>从上面的结果可以看出，管道的执行时间是 297 毫秒，而普通命令执行时间是 17276 毫秒，管道技术要比普通的执行快了 58 倍。</p>

<h3 id="管道技术需要注意的事项">管道技术需要注意的事项</h3>

<p>管道技术虽然有它的优势，但在使用时还需注意以下几个细节：</p>

<ul>
<li>发送的命令数量不会被限制，但输入缓存区也就是命令的最大存储体积为 1GB，当发送的命令超过此限制时，命令不会被执行，并且会被 Redis 服务器端断开此链接；</li>
<li>如果管道的数据过多可能会导致客户端的等待时间过长，导致网络阻塞；</li>
<li>部分客户端自己本身也有缓存区大小的设置，如果管道命令没有没执行或者是执行不完整，可以排查此情况或较少管道内的命令重新尝试执行。</li>
</ul>

<h3 id="小结">小结</h3>

<p>使用管道技术可以解决多个命令执行时的网络等待，它是把多个命令整合到一起发送给服务器端处理之后统一返回给客户端，这样就免去了每条命令执行后都要等待的情况，从而有效地提高了程序的执行效率，但使用管道技术也要注意避免发送的命令过大，或管道内的数据太多而导致的网络阻塞。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#523e3e3e6b666363626512353f333b3e7c313d3f" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f12173c5e19cdc2',t:'MTczNDA1MjM5Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>