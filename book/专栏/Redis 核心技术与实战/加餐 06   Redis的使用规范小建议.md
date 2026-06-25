<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=加餐&#32;06&#32;&#32;&#32;Redis的使用规范小建议>
        <link rel="icon" href="/static/favicon.png">
        <title>加餐 06   Redis的使用规范小建议 </title>
        
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
                        <a class="menu-item" id="00  开篇词  这样学Redis，才能技高一筹.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/00%20%20%e5%bc%80%e7%af%87%e8%af%8d%20%20%e8%bf%99%e6%a0%b7%e5%ad%a6Redis%ef%bc%8c%e6%89%8d%e8%83%bd%e6%8a%80%e9%ab%98%e4%b8%80%e7%ad%b9.md">00  开篇词  这样学Redis，才能技高一筹.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01  基本架构：一个键值数据库包含什么？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/01%20%20%e5%9f%ba%e6%9c%ac%e6%9e%b6%e6%9e%84%ef%bc%9a%e4%b8%80%e4%b8%aa%e9%94%ae%e5%80%bc%e6%95%b0%e6%8d%ae%e5%ba%93%e5%8c%85%e5%90%ab%e4%bb%80%e4%b9%88%ef%bc%9f.md">01  基本架构：一个键值数据库包含什么？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02  数据结构：快速的Redis有哪些慢操作？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/02%20%20%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84%ef%bc%9a%e5%bf%ab%e9%80%9f%e7%9a%84Redis%e6%9c%89%e5%93%aa%e4%ba%9b%e6%85%a2%e6%93%8d%e4%bd%9c%ef%bc%9f.md">02  数据结构：快速的Redis有哪些慢操作？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03  高性能IO模型：为什么单线程Redis能那么快？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/03%20%20%e9%ab%98%e6%80%a7%e8%83%bdIO%e6%a8%a1%e5%9e%8b%ef%bc%9a%e4%b8%ba%e4%bb%80%e4%b9%88%e5%8d%95%e7%ba%bf%e7%a8%8bRedis%e8%83%bd%e9%82%a3%e4%b9%88%e5%bf%ab%ef%bc%9f.md">03  高性能IO模型：为什么单线程Redis能那么快？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04  AOF日志：宕机了，Redis如何避免数据丢失？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/04%20%20AOF%e6%97%a5%e5%bf%97%ef%bc%9a%e5%ae%95%e6%9c%ba%e4%ba%86%ef%bc%8cRedis%e5%a6%82%e4%bd%95%e9%81%bf%e5%85%8d%e6%95%b0%e6%8d%ae%e4%b8%a2%e5%a4%b1%ef%bc%9f.md">04  AOF日志：宕机了，Redis如何避免数据丢失？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05  内存快照：宕机后，Redis如何实现快速恢复？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/05%20%20%e5%86%85%e5%ad%98%e5%bf%ab%e7%85%a7%ef%bc%9a%e5%ae%95%e6%9c%ba%e5%90%8e%ef%bc%8cRedis%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e5%bf%ab%e9%80%9f%e6%81%a2%e5%a4%8d%ef%bc%9f.md">05  内存快照：宕机后，Redis如何实现快速恢复？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06  数据同步：主从库如何实现数据一致？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/06%20%20%e6%95%b0%e6%8d%ae%e5%90%8c%e6%ad%a5%ef%bc%9a%e4%b8%bb%e4%bb%8e%e5%ba%93%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e6%95%b0%e6%8d%ae%e4%b8%80%e8%87%b4%ef%bc%9f.md">06  数据同步：主从库如何实现数据一致？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07  哨兵机制：主库挂了，如何不间断服务？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/07%20%20%e5%93%a8%e5%85%b5%e6%9c%ba%e5%88%b6%ef%bc%9a%e4%b8%bb%e5%ba%93%e6%8c%82%e4%ba%86%ef%bc%8c%e5%a6%82%e4%bd%95%e4%b8%8d%e9%97%b4%e6%96%ad%e6%9c%8d%e5%8a%a1%ef%bc%9f.md">07  哨兵机制：主库挂了，如何不间断服务？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08  哨兵集群：哨兵挂了，主从库还能切换吗？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/08%20%20%e5%93%a8%e5%85%b5%e9%9b%86%e7%be%a4%ef%bc%9a%e5%93%a8%e5%85%b5%e6%8c%82%e4%ba%86%ef%bc%8c%e4%b8%bb%e4%bb%8e%e5%ba%93%e8%bf%98%e8%83%bd%e5%88%87%e6%8d%a2%e5%90%97%ef%bc%9f.md">08  哨兵集群：哨兵挂了，主从库还能切换吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09  切片集群：数据增多了，是该加内存还是加实例？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/09%20%20%e5%88%87%e7%89%87%e9%9b%86%e7%be%a4%ef%bc%9a%e6%95%b0%e6%8d%ae%e5%a2%9e%e5%a4%9a%e4%ba%86%ef%bc%8c%e6%98%af%e8%af%a5%e5%8a%a0%e5%86%85%e5%ad%98%e8%bf%98%e6%98%af%e5%8a%a0%e5%ae%9e%e4%be%8b%ef%bc%9f.md">09  切片集群：数据增多了，是该加内存还是加实例？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10  第1～9讲课后思考题答案及常见问题答疑.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/10%20%20%e7%ac%ac1%ef%bd%9e9%e8%ae%b2%e8%af%be%e5%90%8e%e6%80%9d%e8%80%83%e9%a2%98%e7%ad%94%e6%a1%88%e5%8f%8a%e5%b8%b8%e8%a7%81%e9%97%ae%e9%a2%98%e7%ad%94%e7%96%91.md">10  第1～9讲课后思考题答案及常见问题答疑.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11  “万金油”的String，为什么不好用了？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/11%20%20%e2%80%9c%e4%b8%87%e9%87%91%e6%b2%b9%e2%80%9d%e7%9a%84String%ef%bc%8c%e4%b8%ba%e4%bb%80%e4%b9%88%e4%b8%8d%e5%a5%bd%e7%94%a8%e4%ba%86%ef%bc%9f.md">11  “万金油”的String，为什么不好用了？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12  有一亿个keys要统计，应该用哪种集合？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/12%20%20%e6%9c%89%e4%b8%80%e4%ba%bf%e4%b8%aakeys%e8%a6%81%e7%bb%9f%e8%ae%a1%ef%bc%8c%e5%ba%94%e8%af%a5%e7%94%a8%e5%93%aa%e7%a7%8d%e9%9b%86%e5%90%88%ef%bc%9f.md">12  有一亿个keys要统计，应该用哪种集合？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13  GEO是什么？还可以定义新的数据类型吗？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/13%20%20GEO%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f%e8%bf%98%e5%8f%af%e4%bb%a5%e5%ae%9a%e4%b9%89%e6%96%b0%e7%9a%84%e6%95%b0%e6%8d%ae%e7%b1%bb%e5%9e%8b%e5%90%97%ef%bc%9f.md">13  GEO是什么？还可以定义新的数据类型吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14  如何在Redis中保存时间序列数据？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/14%20%20%e5%a6%82%e4%bd%95%e5%9c%a8Redis%e4%b8%ad%e4%bf%9d%e5%ad%98%e6%97%b6%e9%97%b4%e5%ba%8f%e5%88%97%e6%95%b0%e6%8d%ae%ef%bc%9f.md">14  如何在Redis中保存时间序列数据？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15  消息队列的考验：Redis有哪些解决方案？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/15%20%20%e6%b6%88%e6%81%af%e9%98%9f%e5%88%97%e7%9a%84%e8%80%83%e9%aa%8c%ef%bc%9aRedis%e6%9c%89%e5%93%aa%e4%ba%9b%e8%a7%a3%e5%86%b3%e6%96%b9%e6%a1%88%ef%bc%9f.md">15  消息队列的考验：Redis有哪些解决方案？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16  异步机制：如何避免单线程模型的阻塞？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/16%20%20%e5%bc%82%e6%ad%a5%e6%9c%ba%e5%88%b6%ef%bc%9a%e5%a6%82%e4%bd%95%e9%81%bf%e5%85%8d%e5%8d%95%e7%ba%bf%e7%a8%8b%e6%a8%a1%e5%9e%8b%e7%9a%84%e9%98%bb%e5%a1%9e%ef%bc%9f.md">16  异步机制：如何避免单线程模型的阻塞？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17  为什么CPU结构也会影响Redis的性能？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/17%20%20%e4%b8%ba%e4%bb%80%e4%b9%88CPU%e7%bb%93%e6%9e%84%e4%b9%9f%e4%bc%9a%e5%bd%b1%e5%93%8dRedis%e7%9a%84%e6%80%a7%e8%83%bd%ef%bc%9f.md">17  为什么CPU结构也会影响Redis的性能？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18  波动的响应延迟：如何应对变慢的Redis？（上）.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/18%20%20%e6%b3%a2%e5%8a%a8%e7%9a%84%e5%93%8d%e5%ba%94%e5%bb%b6%e8%bf%9f%ef%bc%9a%e5%a6%82%e4%bd%95%e5%ba%94%e5%af%b9%e5%8f%98%e6%85%a2%e7%9a%84Redis%ef%bc%9f%ef%bc%88%e4%b8%8a%ef%bc%89.md">18  波动的响应延迟：如何应对变慢的Redis？（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19  波动的响应延迟：如何应对变慢的Redis？（下）.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/19%20%20%e6%b3%a2%e5%8a%a8%e7%9a%84%e5%93%8d%e5%ba%94%e5%bb%b6%e8%bf%9f%ef%bc%9a%e5%a6%82%e4%bd%95%e5%ba%94%e5%af%b9%e5%8f%98%e6%85%a2%e7%9a%84Redis%ef%bc%9f%ef%bc%88%e4%b8%8b%ef%bc%89.md">19  波动的响应延迟：如何应对变慢的Redis？（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20  删除数据后，为什么内存占用率还是很高？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/20%20%20%e5%88%a0%e9%99%a4%e6%95%b0%e6%8d%ae%e5%90%8e%ef%bc%8c%e4%b8%ba%e4%bb%80%e4%b9%88%e5%86%85%e5%ad%98%e5%8d%a0%e7%94%a8%e7%8e%87%e8%bf%98%e6%98%af%e5%be%88%e9%ab%98%ef%bc%9f.md">20  删除数据后，为什么内存占用率还是很高？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21  缓冲区：一个可能引发“惨案”的地方.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/21%20%20%e7%bc%93%e5%86%b2%e5%8c%ba%ef%bc%9a%e4%b8%80%e4%b8%aa%e5%8f%af%e8%83%bd%e5%bc%95%e5%8f%91%e2%80%9c%e6%83%a8%e6%a1%88%e2%80%9d%e7%9a%84%e5%9c%b0%e6%96%b9.md">21  缓冲区：一个可能引发“惨案”的地方.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22  第11～21讲课后思考题答案及常见问题答疑.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/22%20%20%e7%ac%ac11%ef%bd%9e21%e8%ae%b2%e8%af%be%e5%90%8e%e6%80%9d%e8%80%83%e9%a2%98%e7%ad%94%e6%a1%88%e5%8f%8a%e5%b8%b8%e8%a7%81%e9%97%ae%e9%a2%98%e7%ad%94%e7%96%91.md">22  第11～21讲课后思考题答案及常见问题答疑.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23  旁路缓存：Redis是如何工作的？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/23%20%20%e6%97%81%e8%b7%af%e7%bc%93%e5%ad%98%ef%bc%9aRedis%e6%98%af%e5%a6%82%e4%bd%95%e5%b7%a5%e4%bd%9c%e7%9a%84%ef%bc%9f.md">23  旁路缓存：Redis是如何工作的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24  替换策略：缓存满了怎么办？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/24%20%20%e6%9b%bf%e6%8d%a2%e7%ad%96%e7%95%a5%ef%bc%9a%e7%bc%93%e5%ad%98%e6%bb%a1%e4%ba%86%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">24  替换策略：缓存满了怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25  缓存异常（上）：如何解决缓存和数据库的数据不一致问题？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/25%20%20%e7%bc%93%e5%ad%98%e5%bc%82%e5%b8%b8%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e8%a7%a3%e5%86%b3%e7%bc%93%e5%ad%98%e5%92%8c%e6%95%b0%e6%8d%ae%e5%ba%93%e7%9a%84%e6%95%b0%e6%8d%ae%e4%b8%8d%e4%b8%80%e8%87%b4%e9%97%ae%e9%a2%98%ef%bc%9f.md">25  缓存异常（上）：如何解决缓存和数据库的数据不一致问题？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26  缓存异常（下）：如何解决缓存雪崩、击穿、穿透难题？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/26%20%20%e7%bc%93%e5%ad%98%e5%bc%82%e5%b8%b8%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e8%a7%a3%e5%86%b3%e7%bc%93%e5%ad%98%e9%9b%aa%e5%b4%a9%e3%80%81%e5%87%bb%e7%a9%bf%e3%80%81%e7%a9%bf%e9%80%8f%e9%9a%be%e9%a2%98%ef%bc%9f.md">26  缓存异常（下）：如何解决缓存雪崩、击穿、穿透难题？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27  缓存被污染了，该怎么办？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/27%20%20%e7%bc%93%e5%ad%98%e8%a2%ab%e6%b1%a1%e6%9f%93%e4%ba%86%ef%bc%8c%e8%af%a5%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">27  缓存被污染了，该怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28  Pika：如何基于SSD实现大容量Redis？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/28%20%20Pika%ef%bc%9a%e5%a6%82%e4%bd%95%e5%9f%ba%e4%ba%8eSSD%e5%ae%9e%e7%8e%b0%e5%a4%a7%e5%ae%b9%e9%87%8fRedis%ef%bc%9f.md">28  Pika：如何基于SSD实现大容量Redis？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29  无锁的原子操作：Redis如何应对并发访问？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/29%20%20%e6%97%a0%e9%94%81%e7%9a%84%e5%8e%9f%e5%ad%90%e6%93%8d%e4%bd%9c%ef%bc%9aRedis%e5%a6%82%e4%bd%95%e5%ba%94%e5%af%b9%e5%b9%b6%e5%8f%91%e8%ae%bf%e9%97%ae%ef%bc%9f.md">29  无锁的原子操作：Redis如何应对并发访问？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30  如何使用Redis实现分布式锁？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/30%20%20%e5%a6%82%e4%bd%95%e4%bd%bf%e7%94%a8Redis%e5%ae%9e%e7%8e%b0%e5%88%86%e5%b8%83%e5%bc%8f%e9%94%81%ef%bc%9f.md">30  如何使用Redis实现分布式锁？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31  事务机制：Redis能实现ACID属性吗？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/31%20%20%e4%ba%8b%e5%8a%a1%e6%9c%ba%e5%88%b6%ef%bc%9aRedis%e8%83%bd%e5%ae%9e%e7%8e%b0ACID%e5%b1%9e%e6%80%a7%e5%90%97%ef%bc%9f.md">31  事务机制：Redis能实现ACID属性吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32  Redis主从同步与故障切换，有哪些坑？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/32%20%20Redis%e4%b8%bb%e4%bb%8e%e5%90%8c%e6%ad%a5%e4%b8%8e%e6%95%85%e9%9a%9c%e5%88%87%e6%8d%a2%ef%bc%8c%e6%9c%89%e5%93%aa%e4%ba%9b%e5%9d%91%ef%bc%9f.md">32  Redis主从同步与故障切换，有哪些坑？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33  脑裂：一次奇怪的数据丢失.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/33%20%20%e8%84%91%e8%a3%82%ef%bc%9a%e4%b8%80%e6%ac%a1%e5%a5%87%e6%80%aa%e7%9a%84%e6%95%b0%e6%8d%ae%e4%b8%a2%e5%a4%b1.md">33  脑裂：一次奇怪的数据丢失.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34  第23~33讲课后思考题答案及常见问题答疑.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/34%20%20%e7%ac%ac23~33%e8%ae%b2%e8%af%be%e5%90%8e%e6%80%9d%e8%80%83%e9%a2%98%e7%ad%94%e6%a1%88%e5%8f%8a%e5%b8%b8%e8%a7%81%e9%97%ae%e9%a2%98%e7%ad%94%e7%96%91.md">34  第23~33讲课后思考题答案及常见问题答疑.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35  Codis VS Redis Cluster：我该选择哪一个集群方案？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/35%20%20Codis%20VS%20Redis%20Cluster%ef%bc%9a%e6%88%91%e8%af%a5%e9%80%89%e6%8b%a9%e5%93%aa%e4%b8%80%e4%b8%aa%e9%9b%86%e7%be%a4%e6%96%b9%e6%a1%88%ef%bc%9f.md">35  Codis VS Redis Cluster：我该选择哪一个集群方案？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36  Redis支撑秒杀场景的关键技术和实践都有哪些？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/36%20%20Redis%e6%94%af%e6%92%91%e7%a7%92%e6%9d%80%e5%9c%ba%e6%99%af%e7%9a%84%e5%85%b3%e9%94%ae%e6%8a%80%e6%9c%af%e5%92%8c%e5%ae%9e%e8%b7%b5%e9%83%bd%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%9f.md">36  Redis支撑秒杀场景的关键技术和实践都有哪些？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37  数据分布优化：如何应对数据倾斜？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/37%20%20%e6%95%b0%e6%8d%ae%e5%88%86%e5%b8%83%e4%bc%98%e5%8c%96%ef%bc%9a%e5%a6%82%e4%bd%95%e5%ba%94%e5%af%b9%e6%95%b0%e6%8d%ae%e5%80%be%e6%96%9c%ef%bc%9f.md">37  数据分布优化：如何应对数据倾斜？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38  通信开销：限制Redis Cluster规模的关键因素.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/38%20%20%e9%80%9a%e4%bf%a1%e5%bc%80%e9%94%80%ef%bc%9a%e9%99%90%e5%88%b6Redis%20Cluster%e8%a7%84%e6%a8%a1%e7%9a%84%e5%85%b3%e9%94%ae%e5%9b%a0%e7%b4%a0.md">38  通信开销：限制Redis Cluster规模的关键因素.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39  Redis 6.0的新特性：多线程、客户端缓存与安全.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/39%20%20Redis%206.0%e7%9a%84%e6%96%b0%e7%89%b9%e6%80%a7%ef%bc%9a%e5%a4%9a%e7%ba%bf%e7%a8%8b%e3%80%81%e5%ae%a2%e6%88%b7%e7%ab%af%e7%bc%93%e5%ad%98%e4%b8%8e%e5%ae%89%e5%85%a8.md">39  Redis 6.0的新特性：多线程、客户端缓存与安全.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40  Redis的下一步：基于NVM内存的实践.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/40%20%20Redis%e7%9a%84%e4%b8%8b%e4%b8%80%e6%ad%a5%ef%bc%9a%e5%9f%ba%e4%ba%8eNVM%e5%86%85%e5%ad%98%e7%9a%84%e5%ae%9e%e8%b7%b5.md">40  Redis的下一步：基于NVM内存的实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="41   第35～40讲课后思考题答案及常见问题答疑.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/41%20%20%20%e7%ac%ac35%ef%bd%9e40%e8%ae%b2%e8%af%be%e5%90%8e%e6%80%9d%e8%80%83%e9%a2%98%e7%ad%94%e6%a1%88%e5%8f%8a%e5%b8%b8%e8%a7%81%e9%97%ae%e9%a2%98%e7%ad%94%e7%96%91.md">41   第35～40讲课后思考题答案及常见问题答疑.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="加餐 01  经典的Redis学习资料有哪些？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/%e5%8a%a0%e9%a4%90%2001%20%20%e7%bb%8f%e5%85%b8%e7%9a%84Redis%e5%ad%a6%e4%b9%a0%e8%b5%84%e6%96%99%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%9f.md">加餐 01  经典的Redis学习资料有哪些？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="加餐 02  用户Kaito：我是如何学习Redis的？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/%e5%8a%a0%e9%a4%90%2002%20%20%e7%94%a8%e6%88%b7Kaito%ef%bc%9a%e6%88%91%e6%98%af%e5%a6%82%e4%bd%95%e5%ad%a6%e4%b9%a0Redis%e7%9a%84%ef%bc%9f.md">加餐 02  用户Kaito：我是如何学习Redis的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="加餐 03  用户Kaito：我希望成为在压力中成长的人.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/%e5%8a%a0%e9%a4%90%2003%20%20%e7%94%a8%e6%88%b7Kaito%ef%bc%9a%e6%88%91%e5%b8%8c%e6%9c%9b%e6%88%90%e4%b8%ba%e5%9c%a8%e5%8e%8b%e5%8a%9b%e4%b8%ad%e6%88%90%e9%95%bf%e7%9a%84%e4%ba%ba.md">加餐 03  用户Kaito：我希望成为在压力中成长的人.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="加餐 04   Redis客户端如何与服务器端交换命令和数据？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/%e5%8a%a0%e9%a4%90%2004%20%20%20Redis%e5%ae%a2%e6%88%b7%e7%ab%af%e5%a6%82%e4%bd%95%e4%b8%8e%e6%9c%8d%e5%8a%a1%e5%99%a8%e7%ab%af%e4%ba%a4%e6%8d%a2%e5%91%bd%e4%bb%a4%e5%92%8c%e6%95%b0%e6%8d%ae%ef%bc%9f.md">加餐 04   Redis客户端如何与服务器端交换命令和数据？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="加餐 05   Redis有哪些好用的运维工具？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/%e5%8a%a0%e9%a4%90%2005%20%20%20Redis%e6%9c%89%e5%93%aa%e4%ba%9b%e5%a5%bd%e7%94%a8%e7%9a%84%e8%bf%90%e7%bb%b4%e5%b7%a5%e5%85%b7%ef%bc%9f.md">加餐 05   Redis有哪些好用的运维工具？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="加餐 06   Redis的使用规范小建议.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/%e5%8a%a0%e9%a4%90%2006%20%20%20Redis%e7%9a%84%e4%bd%bf%e7%94%a8%e8%a7%84%e8%8c%83%e5%b0%8f%e5%bb%ba%e8%ae%ae.md">加餐 06   Redis的使用规范小建议.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="加餐 07  从微博的Redis实践中，我们可以学到哪些经验？.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/%e5%8a%a0%e9%a4%90%2007%20%20%e4%bb%8e%e5%be%ae%e5%8d%9a%e7%9a%84Redis%e5%ae%9e%e8%b7%b5%e4%b8%ad%ef%bc%8c%e6%88%91%e4%bb%ac%e5%8f%af%e4%bb%a5%e5%ad%a6%e5%88%b0%e5%93%aa%e4%ba%9b%e7%bb%8f%e9%aa%8c%ef%bc%9f.md">加餐 07  从微博的Redis实践中，我们可以学到哪些经验？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="结束语  从学习Redis到向Redis学习.md" href="/%e4%b8%93%e6%a0%8f/Redis%20%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/%e7%bb%93%e6%9d%9f%e8%af%ad%20%20%e4%bb%8e%e5%ad%a6%e4%b9%a0Redis%e5%88%b0%e5%90%91Redis%e5%ad%a6%e4%b9%a0.md">结束语  从学习Redis到向Redis学习.md</a>
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
                            <h1 id="title" data-id="加餐 06   Redis的使用规范小建议" class="title">加餐 06   Redis的使用规范小建议</h1>
                            <div><p>今天的加餐，我们来聊一个轻松点儿的话题，我来给你介绍一下 Redis 的使用规范，包括键值对使用、业务数据保存和命令使用规范。</p>

<p>毕竟，高性能和节省内存，是我们的两个目标，只有规范地使用 Redis，才能真正实现这两个目标。如果说之前的内容教会了你怎么用，那么今天的内容，就是帮助你用好 Redis，尽量不出错。</p>

<p>好了，话不多说，我们来看下键值对的使用规范。</p>

<h2 id="键值对使用规范">键值对使用规范</h2>

<p>关于键值对的使用规范，我主要想和你说两个方面：</p>

<ol>
<li>key 的命名规范，只有命名规范，才能提供可读性强、可维护性好的 key，方便日常管理；</li>
<li>value 的设计规范，包括避免 bigkey、选择高效序列化方法和压缩方法、使用整数对象共享池、数据类型选择。</li>
</ol>

<h3 id="规范一-key-的命名规范">规范一：key 的命名规范</h3>

<p>一个 Redis 实例默认可以支持 16 个数据库，我们可以把不同的业务数据分散保存到不同的数据库中。</p>

<p>但是，在使用不同数据库时，客户端需要使用 SELECT 命令进行数据库切换，相当于增加了一个额外的操作。</p>

<p>其实，我们可以通过合理命名 key，减少这个操作。具体的做法是，把业务名作为前缀，然后用冒号分隔，再加上具体的业务数据名。这样一来，我们可以通过 key 的前缀区分不同的业务数据，就不用在多个数据库间来回切换了。</p>

<p>我给你举个简单的小例子，看看具体怎么命名 key。</p>

<p>比如说，如果我们要统计网页的独立访客量，就可以用下面的代码设置 key，这就表示，这个数据对应的业务是统计 unique visitor（独立访客量），而且对应的页面编号是 1024。</p>

<pre><code class="language-c">uv:page:1024
</code></pre>

<p>这里有一个地方需要注意一下。key 本身是字符串，底层的数据结构是 SDS。SDS 结构中会包含字符串长度、分配空间大小等元数据信息。从 Redis 3.2 版本开始，<strong>当 key 字符串的长度增加时，SDS 中的元数据也会占用更多内存空间</strong>。</p>

<p>所以，<strong>我们在设置 key 的名称时，要注意控制 key 的长度</strong>。否则，如果 key 很长的话，就会消耗较多内存空间，而且，SDS 元数据也会额外消耗一定的内存空间。</p>

<p>SDS 结构中的字符串长度和元数据大小的对应关系如下表所示：</p>

<p><img src="assets/5afd9d57af8edd1ae69e62b1c998050c-20221015224646-i2d9070.jpg" alt="" /></p>

<p>为了减少 key 占用的内存空间，我给你一个小建议：对于业务名或业务数据名，可以使用相应的英文单词的首字母表示，（比如 user 用 u 表示，message 用 m），或者是用缩写表示（例如 unique visitor 使用 uv）。</p>

<h3 id="规范二-避免使用-bigkey">规范二：避免使用 bigkey</h3>

<p>Redis 是使用单线程读写数据，bigkey 的读写操作会阻塞线程，降低 Redis 的处理效率。所以，在应用 Redis 时，关于 value 的设计规范，非常重要的一点就是避免 bigkey。</p>

<p>bigkey 通常有两种情况。</p>

<ul>
<li>情况一：键值对的值大小本身就很大，例如 value 为 1MB 的 String 类型数据。为了避免 String 类型的 bigkey，在业务层，我们要尽量把 String 类型的数据大小控制在 10KB 以下。</li>
<li>情况二：键值对的值是集合类型，集合元素个数非常多，例如包含 100 万个元素的 Hash 集合类型数据。为了避免集合类型的 bigkey，我给你的设计规范建议是，<strong>尽量把集合类型的元素个数控制在 1 万以下</strong>。</li>
</ul>

<p>当然，这些建议只是为了尽量避免 bigkey，如果业务层的 String 类型数据确实很大，我们还可以通过数据压缩来减小数据大小；如果集合类型的元素的确很多，我们可以将一个大集合拆分成多个小集合来保存。</p>

<p>这里，还有个地方需要注意下，Redis 的 4 种集合类型 List、Hash、Set 和 Sorted Set，在集合元素个数小于一定的阈值时，会使用内存紧凑型的底层数据结构进行保存，从而节省内存。例如，假设 Hash 集合的 hash-max-ziplist-entries 配置项是 1000，如果 Hash 集合元素个数不超过 1000，就会使用 ziplist 保存数据。</p>

<p>紧凑型数据结构虽然可以节省内存，但是会在一定程度上导致数据的读写性能下降。所以，如果业务应用更加需要保持高性能访问，而不是节省内存的话，在不会导致 bigkey 的前提下，你就不用刻意控制集合元素个数了。</p>

<h3 id="规范三-使用高效序列化方法和压缩方法">规范三：使用高效序列化方法和压缩方法</h3>

<p>为了节省内存，除了采用紧凑型数据结构以外，我们还可以遵循两个使用规范，分别是使用高效的序列化方法和压缩方法，这样可以减少 value 的大小。</p>

<p>Redis 中的字符串都是使用二进制安全的字节数组来保存的，所以，我们可以把业务数据序列化成二进制数据写入到 Redis 中。</p>

<p>但是，<strong>不同的序列化方法，在序列化速度和数据序列化后的占用内存空间这两个方面，效果是不一样的</strong>。比如说，protostuff 和 kryo 这两种序列化方法，就要比 Java 内置的序列化方法（java-build-in-serializer）效率更高。</p>

<p>此外，业务应用有时会使用字符串形式的 XML 和 JSON 格式保存数据。</p>

<p>这样做的好处是，这两种格式的可读性好，便于调试，不同的开发语言都支持这两种格式的解析。</p>

<p>缺点在于，XML 和 JSON 格式的数据占用的内存空间比较大。为了避免数据占用过大的内存空间，我建议使用压缩工具（例如 snappy 或 gzip），把数据压缩后再写入 Redis，这样就可以节省内存空间了。</p>

<h3 id="规范四-使用整数对象共享池">规范四：使用整数对象共享池</h3>

<p>整数是常用的数据类型，Redis 内部维护了 0 到 9999 这 1 万个整数对象，并把这些整数作为一个共享池使用。</p>

<p>换句话说，如果一个键值对中有 0 到 9999 范围的整数，Redis 就不会为这个键值对专门创建整数对象了，而是会复用共享池中的整数对象。</p>

<p>这样一来，即使大量键值对保存了 0 到 9999 范围内的整数，在 Redis 实例中，其实只保存了一份整数对象，可以节省内存空间。</p>

<p>基于这个特点，我建议你，在满足业务数据需求的前提下，能用整数时就尽量用整数，这样可以节省实例内存。</p>

<p>那什么时候不能用整数对象共享池呢？主要有两种情况。</p>

<p>第一种情况是，<strong>如果 Redis 中设置了 maxmemory，而且启用了 LRU 策略（allkeys-lru 或 volatile-lru 策略），那么，整数对象共享池就无法使用了</strong>。这是因为，LRU 策略需要统计每个键值对的使用时间，如果不同的键值对都共享使用一个整数对象，LRU 策略就无法进行统计了。</p>

<p>第二种情况是，如果集合类型数据采用 ziplist 编码，而集合元素是整数，这个时候，也不能使用共享池。因为 ziplist 使用了紧凑型内存结构，判断整数对象的共享情况效率低。</p>

<p>好了，到这里，我们了解了和键值对使用相关的四种规范，遵循这四种规范，最直接的好处就是可以节省内存空间。接下来，我们再来了解下，在实际保存数据时，该遵循哪些规范。</p>

<h2 id="数据保存规范">数据保存规范</h2>

<h3 id="规范一-使用-redis-保存热数据">规范一：使用 Redis 保存热数据</h3>

<p>为了提供高性能访问，Redis 是把所有数据保存到内存中的。</p>

<p>虽然 Redis 支持使用 RDB 快照和 AOF 日志持久化保存数据，但是，这两个机制都是用来提供数据可靠性保证的，并不是用来扩充数据容量的。而且，内存成本本身就比较高，如果把业务数据都保存在 Redis 中，会带来较大的内存成本压力。</p>

<p>所以，一般来说，在实际应用 Redis 时，我们会更多地把它作为缓存保存热数据，这样既可以充分利用 Redis 的高性能特性，还可以把宝贵的内存资源用在服务热数据上，就是俗话说的“好钢用在刀刃上”。</p>

<h3 id="规范二-不同的业务数据分实例存储">规范二：不同的业务数据分实例存储</h3>

<p>虽然我们可以使用 key 的前缀把不同业务的数据区分开，但是，如果所有业务的数据量都很大，而且访问特征也不一样，我们把这些数据保存在同一个实例上时，这些数据的操作就会相互干扰。</p>

<p>你可以想象这样一个场景：假如数据采集业务使用 Redis 保存数据时，以写操作为主，而用户统计业务使用 Redis 时，是以读查询为主，如果这两个业务数据混在一起保存，读写操作相互干扰，肯定会导致业务响应变慢。</p>

<p>那么，<strong>我建议你把不同的业务数据放到不同的 Redis 实例中</strong>。这样一来，既可以避免单实例的内存使用量过大，也可以避免不同业务的操作相互干扰。</p>

<h3 id="规范三-在数据保存时-要设置过期时间">规范三：在数据保存时，要设置过期时间</h3>

<p>对于 Redis 来说，内存是非常宝贵的资源，而且，Redis 通常用于保存热数据。热数据一般都有使用的时效性。</p>

<p>所以，在数据保存时，我建议你根据业务使用数据的时长，设置数据的过期时间。不然的话，写入 Redis 的数据会一直占用内存，如果数据持续增多，就可能达到机器的内存上限，造成内存溢出，导致服务崩溃。</p>

<h3 id="规范四-控制-redis-实例的容量">规范四：控制 Redis 实例的容量</h3>

<p>Redis 单实例的内存大小都不要太大，根据我自己的经验值，建议你设置在 2~6GB 。这样一来，无论是 RDB 快照，还是主从集群进行数据同步，都能很快完成，不会阻塞正常请求的处理。</p>

<h2 id="命令使用规范">命令使用规范</h2>

<p>最后，我们再来看下在使用 Redis 命令时要遵守什么规范。</p>

<h3 id="规范一-线上禁用部分命令">规范一：线上禁用部分命令</h3>

<p>Redis 是单线程处理请求操作，如果我们执行一些涉及大量操作、耗时长的命令，就会严重阻塞主线程，导致其它请求无法得到正常处理，这类命令主要有 3 种。</p>

<ul>
<li><strong>KEYS</strong>，按照键值对的 key 内容进行匹配，返回符合匹配条件的键值对，该命令需要对 Redis 的全局哈希表进行全表扫描，严重阻塞 Redis 主线程；</li>
<li><strong>FLUSHALL</strong>，删除 Redis 实例上的所有数据，如果数据量很大，会严重阻塞 Redis 主线程；</li>
<li><strong>FLUSHDB</strong>，删除当前数据库中的数据，如果数据量很大，同样会阻塞 Redis 主线程。</li>
</ul>

<p>所以，我们在线上应用 Redis 时，就需要禁用这些命令。<strong>具体的做法是，管理员用 rename-command 命令在配置文件中对这些命令进行重命名，让客户端无法使用这些命令</strong>。</p>

<p>当然，你还可以使用其它命令替代这 3 个命令。</p>

<ul>
<li>对于 KEYS 命令来说，你可以用 SCAN 命令代替 KEYS 命令，分批返回符合条件的键值对，避免造成主线程阻塞；</li>
<li>对于 FLUSHALL、FLUSHDB 命令来说，你可以加上 ASYNC 选项，让这两个命令使用后台线程异步删除数据，可以避免阻塞主线程。</li>
</ul>

<h3 id="规范二-慎用-monitor-命令">规范二：慎用 MONITOR 命令</h3>

<p>Redis 的 MONITOR 命令在执行后，会持续输出监测到的各个命令操作，所以，我们通常会用 MONITOR 命令返回的结果，检查命令的执行情况。</p>

<p>但是，MONITOR 命令会把监控到的内容持续写入输出缓冲区。如果线上命令的操作很多，输出缓冲区很快就会溢出了，这就会对 Redis 性能造成影响，甚至引起服务崩溃。</p>

<p>所以，除非十分需要监测某些命令的执行（例如，Redis 性能突然变慢，我们想查看下客户端执行了哪些命令），你可以偶尔在短时间内使用下 MONITOR 命令，否则，我建议你不要使用 MONITOR 命令。</p>

<h3 id="规范三-慎用全量操作命令">规范三：慎用全量操作命令</h3>

<p>对于集合类型的数据来说，如果想要获得集合中的所有元素，一般不建议使用全量操作的命令（例如 Hash 类型的 HGETALL、Set 类型的 SMEMBERS）。这些操作会对 Hash 和 Set 类型的底层数据结构进行全量扫描，如果集合类型数据较多的话，就会阻塞 Redis 主线程。</p>

<p>如果想要获得集合类型的全量数据，我给你三个小建议。</p>

<ul>
<li>第一个建议是，你可以使用 SSCAN、HSCAN 命令分批返回集合中的数据，减少对主线程的阻塞。</li>
<li>第二个建议是，你可以化整为零，把一个大的 Hash 集合拆分成多个小的 Hash 集合。这个操作对应到业务层，就是对业务数据进行拆分，按照时间、地域、用户 ID 等属性把一个大集合的业务数据拆分成多个小集合数据。例如，当你统计用户的访问情况时，就可以按照天的粒度，把每天的数据作为一个 Hash 集合。</li>
<li>最后一个建议是，如果集合类型保存的是业务数据的多个属性，而每次查询时，也需要返回这些属性，那么，你可以使用 String 类型，将这些属性序列化后保存，每次直接返回 String 数据就行，不用再对集合类型做全量扫描了。</li>
</ul>

<h2 id="小结">小结</h2>

<p>这节课，我围绕 Redis 应用时的高性能访问和节省内存空间这两个目标，分别在键值对使用、命令使用和数据保存三方面向你介绍了 11 个规范。</p>

<p>我按照强制、推荐、建议这三个类别，把这些规范分了下类，如下表所示：</p>

<p><img src="assets/f2513c69d7757830e7f3e3c831fcdcfd-20221015224646-zy38wdg.jpg" alt="" /></p>

<p>我来解释一下这 3 个类别的规范。</p>

<ul>
<li>强制类别的规范：这表示，如果不按照规范内容来执行，就会给 Redis 的应用带来极大的负面影响，例如性能受损。</li>
<li>推荐类别的规范：这个规范的内容能有效提升性能、节省内存空间，或者是增加开发和运维的便捷性，你可以直接应用到实践中。</li>
<li>建议类别的规范：这类规范内容和实际业务应用相关，我只是从我的经历或经验给你一个建议，你需要结合自己的业务场景参考使用。</li>
</ul>

<p>我再多说一句，你一定要熟练掌握这些使用规范，并且真正地把它们应用到你的 Redis 使用场景中，提高 Redis 的使用效率。</p>

<h2 id="每课一问">每课一问</h2>

<p>按照惯例，我给你提个小问题，你在日常应用 Redis 时，有遵循过什么好的使用规范吗？</p>

<p>欢迎在留言区分享一下你常用的使用规范，我们一起交流讨论。如果你觉得今天的内容对你有所帮助，也欢迎你分享给你的朋友或同事。我们下节课见。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#600c0c0c59545151505720070d01090c4e030f0d" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f122723b9eacdc2',t:'MTczNDA1MzA0OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>