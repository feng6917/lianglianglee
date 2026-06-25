<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=34&#32;&#32;到底可不可以使用join？>
        <link rel="icon" href="/static/favicon.png">
        <title>34  到底可不可以使用join？ </title>
        
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
                        <a class="menu-item" id="00 开篇词  这一次，让我们一起来搞懂MySQL.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/00%20%e5%bc%80%e7%af%87%e8%af%8d%20%20%e8%bf%99%e4%b8%80%e6%ac%a1%ef%bc%8c%e8%ae%a9%e6%88%91%e4%bb%ac%e4%b8%80%e8%b5%b7%e6%9d%a5%e6%90%9e%e6%87%82MySQL.md">00 开篇词  这一次，让我们一起来搞懂MySQL.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01  基础架构：一条SQL查询语句是如何执行的？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/01%20%20%e5%9f%ba%e7%a1%80%e6%9e%b6%e6%9e%84%ef%bc%9a%e4%b8%80%e6%9d%a1SQL%e6%9f%a5%e8%af%a2%e8%af%ad%e5%8f%a5%e6%98%af%e5%a6%82%e4%bd%95%e6%89%a7%e8%a1%8c%e7%9a%84%ef%bc%9f.md">01  基础架构：一条SQL查询语句是如何执行的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02  日志系统：一条SQL更新语句是如何执行的？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/02%20%20%e6%97%a5%e5%bf%97%e7%b3%bb%e7%bb%9f%ef%bc%9a%e4%b8%80%e6%9d%a1SQL%e6%9b%b4%e6%96%b0%e8%af%ad%e5%8f%a5%e6%98%af%e5%a6%82%e4%bd%95%e6%89%a7%e8%a1%8c%e7%9a%84%ef%bc%9f.md">02  日志系统：一条SQL更新语句是如何执行的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03  事务隔离：为什么你改了我还看不见？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/03%20%20%e4%ba%8b%e5%8a%a1%e9%9a%94%e7%a6%bb%ef%bc%9a%e4%b8%ba%e4%bb%80%e4%b9%88%e4%bd%a0%e6%94%b9%e4%ba%86%e6%88%91%e8%bf%98%e7%9c%8b%e4%b8%8d%e8%a7%81%ef%bc%9f.md">03  事务隔离：为什么你改了我还看不见？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04  深入浅出索引（上）.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/04%20%20%e6%b7%b1%e5%85%a5%e6%b5%85%e5%87%ba%e7%b4%a2%e5%bc%95%ef%bc%88%e4%b8%8a%ef%bc%89.md">04  深入浅出索引（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05  深入浅出索引（下）.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/05%20%20%e6%b7%b1%e5%85%a5%e6%b5%85%e5%87%ba%e7%b4%a2%e5%bc%95%ef%bc%88%e4%b8%8b%ef%bc%89.md">05  深入浅出索引（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06  全局锁和表锁 ：给表加个字段怎么有这么多阻碍？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/06%20%20%e5%85%a8%e5%b1%80%e9%94%81%e5%92%8c%e8%a1%a8%e9%94%81%20%ef%bc%9a%e7%bb%99%e8%a1%a8%e5%8a%a0%e4%b8%aa%e5%ad%97%e6%ae%b5%e6%80%8e%e4%b9%88%e6%9c%89%e8%bf%99%e4%b9%88%e5%a4%9a%e9%98%bb%e7%a2%8d%ef%bc%9f.md">06  全局锁和表锁 ：给表加个字段怎么有这么多阻碍？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07  行锁功过：怎么减少行锁对性能的影响？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/07%20%20%e8%a1%8c%e9%94%81%e5%8a%9f%e8%bf%87%ef%bc%9a%e6%80%8e%e4%b9%88%e5%87%8f%e5%b0%91%e8%a1%8c%e9%94%81%e5%af%b9%e6%80%a7%e8%83%bd%e7%9a%84%e5%bd%b1%e5%93%8d%ef%bc%9f.md">07  行锁功过：怎么减少行锁对性能的影响？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08  事务到底是隔离的还是不隔离的？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/08%20%20%e4%ba%8b%e5%8a%a1%e5%88%b0%e5%ba%95%e6%98%af%e9%9a%94%e7%a6%bb%e7%9a%84%e8%bf%98%e6%98%af%e4%b8%8d%e9%9a%94%e7%a6%bb%e7%9a%84%ef%bc%9f.md">08  事务到底是隔离的还是不隔离的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09  普通索引和唯一索引，应该怎么选择？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/09%20%20%e6%99%ae%e9%80%9a%e7%b4%a2%e5%bc%95%e5%92%8c%e5%94%af%e4%b8%80%e7%b4%a2%e5%bc%95%ef%bc%8c%e5%ba%94%e8%af%a5%e6%80%8e%e4%b9%88%e9%80%89%e6%8b%a9%ef%bc%9f.md">09  普通索引和唯一索引，应该怎么选择？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10  MySQL为什么有时候会选错索引？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/10%20%20MySQL%e4%b8%ba%e4%bb%80%e4%b9%88%e6%9c%89%e6%97%b6%e5%80%99%e4%bc%9a%e9%80%89%e9%94%99%e7%b4%a2%e5%bc%95%ef%bc%9f.md">10  MySQL为什么有时候会选错索引？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11  怎么给字符串字段加索引？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/11%20%20%e6%80%8e%e4%b9%88%e7%bb%99%e5%ad%97%e7%ac%a6%e4%b8%b2%e5%ad%97%e6%ae%b5%e5%8a%a0%e7%b4%a2%e5%bc%95%ef%bc%9f.md">11  怎么给字符串字段加索引？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12  为什么我的MySQL会“抖”一下？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/12%20%20%e4%b8%ba%e4%bb%80%e4%b9%88%e6%88%91%e7%9a%84MySQL%e4%bc%9a%e2%80%9c%e6%8a%96%e2%80%9d%e4%b8%80%e4%b8%8b%ef%bc%9f.md">12  为什么我的MySQL会“抖”一下？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13  为什么表数据删掉一半，表文件大小不变？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/13%20%20%e4%b8%ba%e4%bb%80%e4%b9%88%e8%a1%a8%e6%95%b0%e6%8d%ae%e5%88%a0%e6%8e%89%e4%b8%80%e5%8d%8a%ef%bc%8c%e8%a1%a8%e6%96%87%e4%bb%b6%e5%a4%a7%e5%b0%8f%e4%b8%8d%e5%8f%98%ef%bc%9f.md">13  为什么表数据删掉一半，表文件大小不变？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14  count()这么慢，我该怎么办？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/14%20%20count%28%29%e8%bf%99%e4%b9%88%e6%85%a2%ef%bc%8c%e6%88%91%e8%af%a5%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">14  count()这么慢，我该怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15  答疑文章（一）：日志和索引相关问题.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/15%20%20%e7%ad%94%e7%96%91%e6%96%87%e7%ab%a0%ef%bc%88%e4%b8%80%ef%bc%89%ef%bc%9a%e6%97%a5%e5%bf%97%e5%92%8c%e7%b4%a2%e5%bc%95%e7%9b%b8%e5%85%b3%e9%97%ae%e9%a2%98.md">15  答疑文章（一）：日志和索引相关问题.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16  “order by”是怎么工作的？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/16%20%20%e2%80%9corder%20by%e2%80%9d%e6%98%af%e6%80%8e%e4%b9%88%e5%b7%a5%e4%bd%9c%e7%9a%84%ef%bc%9f.md">16  “order by”是怎么工作的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17  如何正确地显示随机消息？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/17%20%20%e5%a6%82%e4%bd%95%e6%ad%a3%e7%a1%ae%e5%9c%b0%e6%98%be%e7%a4%ba%e9%9a%8f%e6%9c%ba%e6%b6%88%e6%81%af%ef%bc%9f.md">17  如何正确地显示随机消息？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18  为什么这些SQL语句逻辑相同，性能却差异巨大？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/18%20%20%e4%b8%ba%e4%bb%80%e4%b9%88%e8%bf%99%e4%ba%9bSQL%e8%af%ad%e5%8f%a5%e9%80%bb%e8%be%91%e7%9b%b8%e5%90%8c%ef%bc%8c%e6%80%a7%e8%83%bd%e5%8d%b4%e5%b7%ae%e5%bc%82%e5%b7%a8%e5%a4%a7%ef%bc%9f.md">18  为什么这些SQL语句逻辑相同，性能却差异巨大？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19  为什么我只查一行的语句，也执行这么慢？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/19%20%20%e4%b8%ba%e4%bb%80%e4%b9%88%e6%88%91%e5%8f%aa%e6%9f%a5%e4%b8%80%e8%a1%8c%e7%9a%84%e8%af%ad%e5%8f%a5%ef%bc%8c%e4%b9%9f%e6%89%a7%e8%a1%8c%e8%bf%99%e4%b9%88%e6%85%a2%ef%bc%9f.md">19  为什么我只查一行的语句，也执行这么慢？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20  幻读是什么，幻读有什么问题？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/20%20%20%e5%b9%bb%e8%af%bb%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%8c%e5%b9%bb%e8%af%bb%e6%9c%89%e4%bb%80%e4%b9%88%e9%97%ae%e9%a2%98%ef%bc%9f.md">20  幻读是什么，幻读有什么问题？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21  为什么我只改一行的语句，锁这么多？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/21%20%20%e4%b8%ba%e4%bb%80%e4%b9%88%e6%88%91%e5%8f%aa%e6%94%b9%e4%b8%80%e8%a1%8c%e7%9a%84%e8%af%ad%e5%8f%a5%ef%bc%8c%e9%94%81%e8%bf%99%e4%b9%88%e5%a4%9a%ef%bc%9f.md">21  为什么我只改一行的语句，锁这么多？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22  MySQL有哪些“饮鸩止渴”提高性能的方法？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/22%20%20MySQL%e6%9c%89%e5%93%aa%e4%ba%9b%e2%80%9c%e9%a5%ae%e9%b8%a9%e6%ad%a2%e6%b8%b4%e2%80%9d%e6%8f%90%e9%ab%98%e6%80%a7%e8%83%bd%e7%9a%84%e6%96%b9%e6%b3%95%ef%bc%9f.md">22  MySQL有哪些“饮鸩止渴”提高性能的方法？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23  MySQL是怎么保证数据不丢的？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/23%20%20MySQL%e6%98%af%e6%80%8e%e4%b9%88%e4%bf%9d%e8%af%81%e6%95%b0%e6%8d%ae%e4%b8%8d%e4%b8%a2%e7%9a%84%ef%bc%9f.md">23  MySQL是怎么保证数据不丢的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24  MySQL是怎么保证主备一致的？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/24%20%20MySQL%e6%98%af%e6%80%8e%e4%b9%88%e4%bf%9d%e8%af%81%e4%b8%bb%e5%a4%87%e4%b8%80%e8%87%b4%e7%9a%84%ef%bc%9f.md">24  MySQL是怎么保证主备一致的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25  MySQL是怎么保证高可用的？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/25%20%20MySQL%e6%98%af%e6%80%8e%e4%b9%88%e4%bf%9d%e8%af%81%e9%ab%98%e5%8f%af%e7%94%a8%e7%9a%84%ef%bc%9f.md">25  MySQL是怎么保证高可用的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26  备库为什么会延迟好几个小时？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/26%20%20%e5%a4%87%e5%ba%93%e4%b8%ba%e4%bb%80%e4%b9%88%e4%bc%9a%e5%bb%b6%e8%bf%9f%e5%a5%bd%e5%87%a0%e4%b8%aa%e5%b0%8f%e6%97%b6%ef%bc%9f.md">26  备库为什么会延迟好几个小时？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27  主库出问题了，从库怎么办？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/27%20%20%e4%b8%bb%e5%ba%93%e5%87%ba%e9%97%ae%e9%a2%98%e4%ba%86%ef%bc%8c%e4%bb%8e%e5%ba%93%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">27  主库出问题了，从库怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28  读写分离有哪些坑？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/28%20%20%e8%af%bb%e5%86%99%e5%88%86%e7%a6%bb%e6%9c%89%e5%93%aa%e4%ba%9b%e5%9d%91%ef%bc%9f.md">28  读写分离有哪些坑？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29  如何判断一个数据库是不是出问题了？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/29%20%20%e5%a6%82%e4%bd%95%e5%88%a4%e6%96%ad%e4%b8%80%e4%b8%aa%e6%95%b0%e6%8d%ae%e5%ba%93%e6%98%af%e4%b8%8d%e6%98%af%e5%87%ba%e9%97%ae%e9%a2%98%e4%ba%86%ef%bc%9f.md">29  如何判断一个数据库是不是出问题了？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30  答疑文章（二）：用动态的观点看加锁.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/30%20%20%e7%ad%94%e7%96%91%e6%96%87%e7%ab%a0%ef%bc%88%e4%ba%8c%ef%bc%89%ef%bc%9a%e7%94%a8%e5%8a%a8%e6%80%81%e7%9a%84%e8%a7%82%e7%82%b9%e7%9c%8b%e5%8a%a0%e9%94%81.md">30  答疑文章（二）：用动态的观点看加锁.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31  误删数据后除了跑路，还能怎么办？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/31%20%20%e8%af%af%e5%88%a0%e6%95%b0%e6%8d%ae%e5%90%8e%e9%99%a4%e4%ba%86%e8%b7%91%e8%b7%af%ef%bc%8c%e8%bf%98%e8%83%bd%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">31  误删数据后除了跑路，还能怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32  为什么还有kill不掉的语句？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/32%20%20%e4%b8%ba%e4%bb%80%e4%b9%88%e8%bf%98%e6%9c%89kill%e4%b8%8d%e6%8e%89%e7%9a%84%e8%af%ad%e5%8f%a5%ef%bc%9f.md">32  为什么还有kill不掉的语句？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33  我查这么多数据，会不会把数据库内存打爆？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/33%20%20%e6%88%91%e6%9f%a5%e8%bf%99%e4%b9%88%e5%a4%9a%e6%95%b0%e6%8d%ae%ef%bc%8c%e4%bc%9a%e4%b8%8d%e4%bc%9a%e6%8a%8a%e6%95%b0%e6%8d%ae%e5%ba%93%e5%86%85%e5%ad%98%e6%89%93%e7%88%86%ef%bc%9f.md">33  我查这么多数据，会不会把数据库内存打爆？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34  到底可不可以使用join？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/34%20%20%e5%88%b0%e5%ba%95%e5%8f%af%e4%b8%8d%e5%8f%af%e4%bb%a5%e4%bd%bf%e7%94%a8join%ef%bc%9f.md">34  到底可不可以使用join？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35  join语句怎么优化？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/35%20%20join%e8%af%ad%e5%8f%a5%e6%80%8e%e4%b9%88%e4%bc%98%e5%8c%96%ef%bc%9f.md">35  join语句怎么优化？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36  为什么临时表可以重名？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/36%20%20%e4%b8%ba%e4%bb%80%e4%b9%88%e4%b8%b4%e6%97%b6%e8%a1%a8%e5%8f%af%e4%bb%a5%e9%87%8d%e5%90%8d%ef%bc%9f.md">36  为什么临时表可以重名？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37  什么时候会使用内部临时表？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/37%20%20%e4%bb%80%e4%b9%88%e6%97%b6%e5%80%99%e4%bc%9a%e4%bd%bf%e7%94%a8%e5%86%85%e9%83%a8%e4%b8%b4%e6%97%b6%e8%a1%a8%ef%bc%9f.md">37  什么时候会使用内部临时表？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38  都说InnoDB好，那还要不要使用Memory引擎？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/38%20%20%e9%83%bd%e8%af%b4InnoDB%e5%a5%bd%ef%bc%8c%e9%82%a3%e8%bf%98%e8%a6%81%e4%b8%8d%e8%a6%81%e4%bd%bf%e7%94%a8Memory%e5%bc%95%e6%93%8e%ef%bc%9f.md">38  都说InnoDB好，那还要不要使用Memory引擎？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39  自增主键为什么不是连续的？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/39%20%20%e8%87%aa%e5%a2%9e%e4%b8%bb%e9%94%ae%e4%b8%ba%e4%bb%80%e4%b9%88%e4%b8%8d%e6%98%af%e8%bf%9e%e7%bb%ad%e7%9a%84%ef%bc%9f.md">39  自增主键为什么不是连续的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40  insert语句的锁为什么这么多？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/40%20%20insert%e8%af%ad%e5%8f%a5%e7%9a%84%e9%94%81%e4%b8%ba%e4%bb%80%e4%b9%88%e8%bf%99%e4%b9%88%e5%a4%9a%ef%bc%9f.md">40  insert语句的锁为什么这么多？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="41  怎么最快地复制一张表？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/41%20%20%e6%80%8e%e4%b9%88%e6%9c%80%e5%bf%ab%e5%9c%b0%e5%a4%8d%e5%88%b6%e4%b8%80%e5%bc%a0%e8%a1%a8%ef%bc%9f.md">41  怎么最快地复制一张表？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="42  grant之后要跟着flush privileges吗？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/42%20%20grant%e4%b9%8b%e5%90%8e%e8%a6%81%e8%b7%9f%e7%9d%80flush%20privileges%e5%90%97%ef%bc%9f.md">42  grant之后要跟着flush privileges吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="43  要不要使用分区表？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/43%20%20%e8%a6%81%e4%b8%8d%e8%a6%81%e4%bd%bf%e7%94%a8%e5%88%86%e5%8c%ba%e8%a1%a8%ef%bc%9f.md">43  要不要使用分区表？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="44  答疑文章（三）：说一说这些好问题.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/44%20%20%e7%ad%94%e7%96%91%e6%96%87%e7%ab%a0%ef%bc%88%e4%b8%89%ef%bc%89%ef%bc%9a%e8%af%b4%e4%b8%80%e8%af%b4%e8%bf%99%e4%ba%9b%e5%a5%bd%e9%97%ae%e9%a2%98.md">44  答疑文章（三）：说一说这些好问题.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="45  自增id用完怎么办？.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/45%20%20%e8%87%aa%e5%a2%9eid%e7%94%a8%e5%ae%8c%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">45  自增id用完怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="我的MySQL心路历程.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/%e6%88%91%e7%9a%84MySQL%e5%bf%83%e8%b7%af%e5%8e%86%e7%a8%8b.md">我的MySQL心路历程.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="结束语  点线网面，一起构建MySQL知识网络.md" href="/%e4%b8%93%e6%a0%8f/MySQL%e5%ae%9e%e6%88%9845%e8%ae%b2/%e7%bb%93%e6%9d%9f%e8%af%ad%20%20%e7%82%b9%e7%ba%bf%e7%bd%91%e9%9d%a2%ef%bc%8c%e4%b8%80%e8%b5%b7%e6%9e%84%e5%bb%baMySQL%e7%9f%a5%e8%af%86%e7%bd%91%e7%bb%9c.md">结束语  点线网面，一起构建MySQL知识网络.md</a>
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
                            <h1 id="title" data-id="34  到底可不可以使用join？" class="title">34  到底可不可以使用join？</h1>
                            <div><p>在实际生产中，关于 join 语句使用的问题，一般会集中在以下两类：</p>

<ol>
<li>我们 DBA 不让使用 join，使用 join 有什么问题呢？</li>
<li>如果有两个大小不同的表做 join，应该用哪个表做驱动表呢？</li>
</ol>

<p>今天这篇文章，我就先跟你说说 join 语句到底是怎么执行的，然后再来回答这两个问题。</p>

<p>为了便于量化分析，我还是创建两个表 t1 和 t2 来和你说明。</p>

<pre><code>CREATE TABLE `t2` (
  `id` int(11) NOT NULL,
  `a` int(11) DEFAULT NULL,
  `b` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `a` (`a`)
) ENGINE=InnoDB;
 
drop procedure idata;
delimiter ;;
create procedure idata()
begin
  declare i int;
  set i=1;
  while(i&lt;=1000)do
    insert into t2 values(i, i, i);
    set i=i+1;
  end while;
end;;
delimiter ;
call idata();
 
create table t1 like t2;
insert into t1 (select * from t2 where id&lt;=100)
</code></pre>

<p>可以看到，这两个表都有一个主键索引 id 和一个索引 a，字段 b 上无索引。存储过程 idata() 往表 t2 里插入了 1000 行数据，在表 t1 里插入的是 100 行数据。</p>

<h1 id="index-nested-loop-join">Index Nested-Loop Join</h1>

<p>我们来看一下这个语句：</p>

<pre><code>select * from t1 straight_join t2 on (t1.a=t2.a);
</code></pre>

<p>如果直接使用 join 语句，MySQL 优化器可能会选择表 t1 或 t2 作为驱动表，这样会影响我们分析 SQL 语句的执行过程。所以，为了便于分析执行过程中的性能问题，我改用 straight_join 让 MySQL 使用固定的连接方式执行查询，这样优化器只会按照我们指定的方式去 join。在这个语句里，t1 是驱动表，t2 是被驱动表。</p>

<p>现在，我们来看一下这条语句的 explain 结果。</p>

<p><img src="assets/4b9cb0e0b83618e01c9bfde44a0ea990.png" alt="img" /></p>

<p>图 1 使用索引字段 join 的 explain 结果</p>

<p>可以看到，在这条语句里，被驱动表 t2 的字段 a 上有索引，join 过程用上了这个索引，因此这个语句的执行流程是这样的：</p>

<ol>
<li>从表 t1 中读入一行数据 R；</li>
<li>从数据行 R 中，取出 a 字段到表 t2 里去查找；</li>
<li>取出表 t2 中满足条件的行，跟 R 组成一行，作为结果集的一部分；</li>
<li>重复执行步骤 1 到 3，直到表 t1 的末尾循环结束。</li>
</ol>

<p>这个过程是先遍历表 t1，然后根据从表 t1 中取出的每行数据中的 a 值，去表 t2 中查找满足条件的记录。在形式上，这个过程就跟我们写程序时的嵌套查询类似，并且可以用上被驱动表的索引，所以我们称之为“Index Nested-Loop Join”，简称 NLJ。</p>

<p>它对应的流程图如下所示：</p>

<p><img src="assets/d83ad1cbd6118603be795b26d38f8df6.jpg" alt="img" /></p>

<p>图 2 Index Nested-Loop Join 算法的执行流程</p>

<p>在这个流程里：</p>

<ol>
<li>对驱动表 t1 做了全表扫描，这个过程需要扫描 100 行；</li>
<li>而对于每一行 R，根据 a 字段去表 t2 查找，走的是树搜索过程。由于我们构造的数据都是一一对应的，因此每次的搜索过程都只扫描一行，也是总共扫描 100 行；</li>
<li>所以，整个执行流程，总扫描行数是 200。</li>
</ol>

<p>现在我们知道了这个过程，再试着回答一下文章开头的两个问题。</p>

<p>先看第一个问题：<strong>能不能使用 join?</strong></p>

<p>假设不使用 join，那我们就只能用单表查询。我们看看上面这条语句的需求，用单表查询怎么实现。</p>

<ol>
<li>执行<code>select * from t1</code>，查出表 t1 的所有数据，这里有 100 行；</li>
<li>循环遍历这 100 行数据：

<ul>
<li>从每一行 R 取出字段 a 的值 $R.a；</li>
<li>执行<code>select * from t2 where a=$R.a</code>；</li>
<li>把返回的结果和 R 构成结果集的一行。</li>
</ul></li>
</ol>

<p>可以看到，在这个查询过程，也是扫描了 200 行，但是总共执行了 101 条语句，比直接 join 多了 100 次交互。除此之外，客户端还要自己拼接 SQL 语句和结果。</p>

<p>显然，这么做还不如直接 join 好。</p>

<p>我们再来看看第二个问题：<strong>怎么选择驱动表？</strong></p>

<p>在这个 join 语句执行过程中，驱动表是走全表扫描，而被驱动表是走树搜索。</p>

<p>假设被驱动表的行数是 M。每次在被驱动表查一行数据，要先搜索索引 a，再搜索主键索引。每次搜索一棵树近似复杂度是以 2 为底的 M 的对数，记为 log2M，所以在被驱动表上查一行的时间复杂度是 2*log2M。</p>

<p>假设驱动表的行数是 N，执行过程就要扫描驱动表 N 行，然后对于每一行，到被驱动表上匹配一次。</p>

<p>因此整个执行过程，近似复杂度是 N + N*2*log2M。</p>

<p>显然，N 对扫描行数的影响更大，因此应该让小表来做驱动表。</p>

<blockquote>
<p>如果你没觉得这个影响有那么“显然”， 可以这么理解：N 扩大 1000 倍的话，扫描行数就会扩大 1000 倍；而 M 扩大 1000 倍，扫描行数扩大不到 10 倍。</p>
</blockquote>

<p>到这里小结一下，通过上面的分析我们得到了两个结论：</p>

<ol>
<li>使用 join 语句，性能比强行拆成多个单表执行 SQL 语句的性能要好；</li>
<li>如果使用 join 语句的话，需要让小表做驱动表。</li>
</ol>

<p>但是，你需要注意，这个结论的前提是“可以使用被驱动表的索引”。</p>

<p>接下来，我们再看看被驱动表用不上索引的情况。</p>

<h1 id="simple-nested-loop-join">Simple Nested-Loop Join</h1>

<p>现在，我们把 SQL 语句改成这样：</p>

<pre><code>select * from t1 straight_join t2 on (t1.a=t2.b);
</code></pre>

<p>由于表 t2 的字段 b 上没有索引，因此再用图 2 的执行流程时，每次到 t2 去匹配的时候，就要做一次全表扫描。</p>

<p>你可以先设想一下这个问题，继续使用图 2 的算法，是不是可以得到正确的结果呢？如果只看结果的话，这个算法是正确的，而且这个算法也有一个名字，叫做“Simple Nested-Loop Join”。</p>

<p>但是，这样算来，这个 SQL 请求就要扫描表 t2 多达 100 次，总共扫描 100*1000=10 万行。</p>

<p>这还只是两个小表，如果 t1 和 t2 都是 10 万行的表（当然了，这也还是属于小表的范围），就要扫描 100 亿行，这个算法看上去太“笨重”了。</p>

<p>当然，MySQL 也没有使用这个 Simple Nested-Loop Join 算法，而是使用了另一个叫作“Block Nested-Loop Join”的算法，简称 BNL。</p>

<h1 id="block-nested-loop-join">Block Nested-Loop Join</h1>

<p>这时候，被驱动表上没有可用的索引，算法的流程是这样的：</p>

<ol>
<li>把表 t1 的数据读入线程内存 join_buffer 中，由于我们这个语句中写的是 select *，因此是把整个表 t1 放入了内存；</li>
<li>扫描表 t2，把表 t2 中的每一行取出来，跟 join_buffer 中的数据做对比，满足 join 条件的，作为结果集的一部分返回。</li>
</ol>

<p>这个过程的流程图如下：</p>

<p><img src="assets/15ae4f17c46bf71e8349a8f2ef70d573.jpg" alt="img" /></p>

<p>图 3 Block Nested-Loop Join 算法的执行流程</p>

<p>对应地，这条 SQL 语句的 explain 结果如下所示：</p>

<p><img src="assets/676921fa0883e9463dd34fb2bc5e87e1.png" alt="img" /></p>

<p>图 4 不使用索引字段 join 的 explain 结果</p>

<p>可以看到，在这个过程中，对表 t1 和 t2 都做了一次全表扫描，因此总的扫描行数是 1100。由于 join_buffer 是以无序数组的方式组织的，因此对表 t2 中的每一行，都要做 100 次判断，总共需要在内存中做的判断次数是：100*1000=10 万次。</p>

<p>前面我们说过，如果使用 Simple Nested-Loop Join 算法进行查询，扫描行数也是 10 万行。因此，从时间复杂度上来说，这两个算法是一样的。但是，Block Nested-Loop Join 算法的这 10 万次判断是内存操作，速度上会快很多，性能也更好。</p>

<p>接下来，我们来看一下，在这种情况下，应该选择哪个表做驱动表。</p>

<p>假设小表的行数是 N，大表的行数是 M，那么在这个算法里：</p>

<ol>
<li>两个表都做一次全表扫描，所以总的扫描行数是 M+N；</li>
<li>内存中的判断次数是 M*N。</li>
</ol>

<p>可以看到，调换这两个算式中的 M 和 N 没差别，因此这时候选择大表还是小表做驱动表，执行耗时是一样的。</p>

<p>然后，你可能马上就会问了，这个例子里表 t1 才 100 行，要是表 t1 是一个大表，join_buffer 放不下怎么办呢？</p>

<p>join_buffer 的大小是由参数 join_buffer_size 设定的，默认值是 256k。<strong>如果放不下表 t1 的所有数据话，策略很简单，就是分段放。</strong>我把 join_buffer_size 改成 1200，再执行：</p>

<pre><code>select * from t1 straight_join t2 on (t1.a=t2.b);
</code></pre>

<p>执行过程就变成了：</p>

<ol>
<li>扫描表 t1，顺序读取数据行放入 join_buffer 中，放完第 88 行 join_buffer 满了，继续第 2 步；</li>
<li>扫描表 t2，把 t2 中的每一行取出来，跟 join_buffer 中的数据做对比，满足 join 条件的，作为结果集的一部分返回；</li>
<li>清空 join_buffer；</li>
<li>继续扫描表 t1，顺序读取最后的 12 行数据放入 join_buffer 中，继续执行第 2 步。</li>
</ol>

<p>执行流程图也就变成这样：</p>

<p><img src="assets/695adf810fcdb07e393467bcfd2f6ac4.jpg" alt="img" /></p>

<p>图 5 Block Nested-Loop Join &ndash; 两段</p>

<p>图中的步骤 4 和 5，表示清空 join_buffer 再复用。</p>

<p>这个流程才体现出了这个算法名字中“Block”的由来，表示“分块去 join”。</p>

<p>可以看到，这时候由于表 t1 被分成了两次放入 join_buffer 中，导致表 t2 会被扫描两次。虽然分成两次放入 join_buffer，但是判断等值条件的次数还是不变的，依然是 (88+12)*1000=10 万次。</p>

<p>我们再来看下，在这种情况下驱动表的选择问题。</p>

<p>假设，驱动表的数据行数是 N，需要分 K 段才能完成算法流程，被驱动表的数据行数是 M。</p>

<p>注意，这里的 K 不是常数，N 越大 K 就会越大，因此把 K 表示为λ*N，显然λ的取值范围是 (0,1)。</p>

<p>所以，在这个算法的执行过程中：</p>

<ol>
<li>扫描行数是 N+λ*N*M；</li>
<li>内存判断 N*M 次。</li>
</ol>

<p>显然，内存判断次数是不受选择哪个表作为驱动表影响的。而考虑到扫描行数，在 M 和 N 大小确定的情况下，N 小一些，整个算式的结果会更小。</p>

<p>所以结论是，应该让小表当驱动表。</p>

<p>当然，你会发现，在 N+λ*N*M 这个式子里，λ才是影响扫描行数的关键因素，这个值越小越好。</p>

<p>刚刚我们说了 N 越大，分段数 K 越大。那么，N 固定的时候，什么参数会影响 K 的大小呢？（也就是λ的大小）答案是 join_buffer_size。join_buffer_size 越大，一次可以放入的行越多，分成的段数也就越少，对被驱动表的全表扫描次数就越少。</p>

<p>这就是为什么，你可能会看到一些建议告诉你，如果你的 join 语句很慢，就把 join_buffer_size 改大。</p>

<p>理解了 MySQL 执行 join 的两种算法，现在我们再来试着<strong>回答文章开头的两个问题</strong>。</p>

<p>第一个问题：能不能使用 join 语句？</p>

<ol>
<li>如果可以使用 Index Nested-Loop Join 算法，也就是说可以用上被驱动表上的索引，其实是没问题的；</li>
<li>如果使用 Block Nested-Loop Join 算法，扫描行数就会过多。尤其是在大表上的 join 操作，这样可能要扫描被驱动表很多次，会占用大量的系统资源。所以这种 join 尽量不要用。</li>
</ol>

<p>所以你在判断要不要使用 join 语句时，就是看 explain 结果里面，Extra 字段里面有没有出现“Block Nested Loop”字样。</p>

<p>第二个问题是：如果要使用 join，应该选择大表做驱动表还是选择小表做驱动表？</p>

<ol>
<li>如果是 Index Nested-Loop Join 算法，应该选择小表做驱动表；</li>
<li>如果是 Block Nested-Loop Join 算法：

<ul>
<li>在 join_buffer_size 足够大的时候，是一样的；</li>
<li>在 join_buffer_size 不够大的时候（这种情况更常见），应该选择小表做驱动表。</li>
</ul></li>
</ol>

<p>所以，这个问题的结论就是，总是应该使用小表做驱动表。</p>

<p>当然了，这里我需要说明下，<strong>什么叫作“小表”</strong>。</p>

<p>我们前面的例子是没有加条件的。如果我在语句的 where 条件加上 t2.id&lt;=50 这个限定条件，再来看下这两条语句：</p>

<pre><code>select * from t1 straight_join t2 on (t1.b=t2.b) where t2.id&lt;=50;
select * from t2 straight_join t1 on (t1.b=t2.b) where t2.id&lt;=50;
</code></pre>

<p>注意，为了让两条语句的被驱动表都用不上索引，所以 join 字段都使用了没有索引的字段 b。</p>

<p>但如果是用第二个语句的话，join_buffer 只需要放入 t2 的前 50 行，显然是更好的。所以这里，“t2 的前 50 行”是那个相对小的表，也就是“小表”。</p>

<p>我们再来看另外一组例子：</p>

<pre><code>select t1.b,t2.* from  t1  straight_join t2 on (t1.b=t2.b) where t2.id&lt;=100;
select t1.b,t2.* from  t2  straight_join t1 on (t1.b=t2.b) where t2.id&lt;=100;
</code></pre>

<p>这个例子里，表 t1 和 t2 都是只有 100 行参加 join。但是，这两条语句每次查询放入 join_buffer 中的数据是不一样的：</p>

<ul>
<li>表 t1 只查字段 b，因此如果把 t1 放到 join_buffer 中，则 join_buffer 中只需要放入 b 的值；</li>
<li>表 t2 需要查所有的字段，因此如果把表 t2 放到 join_buffer 中的话，就需要放入三个字段 id、a 和 b。</li>
</ul>

<p>这里，我们应该选择表 t1 作为驱动表。也就是说在这个例子里，“只需要一列参与 join 的表 t1”是那个相对小的表。</p>

<p>所以，更准确地说，<strong>在决定哪个表做驱动表的时候，应该是两个表按照各自的条件过滤，过滤完成之后，计算参与 join 的各个字段的总数据量，数据量小的那个表，就是“小表”，应该作为驱动表。</strong></p>

<h1 id="小结">小结</h1>

<p>今天，我和你介绍了 MySQL 执行 join 语句的两种可能算法，这两种算法是由能否使用被驱动表的索引决定的。而能否用上被驱动表的索引，对 join 语句的性能影响很大。</p>

<p>通过对 Index Nested-Loop Join 和 Block Nested-Loop Join 两个算法执行过程的分析，我们也得到了文章开头两个问题的答案：</p>

<ol>
<li>如果可以使用被驱动表的索引，join 语句还是有其优势的；</li>
<li>不能使用被驱动表的索引，只能使用 Block Nested-Loop Join 算法，这样的语句就尽量不要使用；</li>
<li>在使用 join 的时候，应该让小表做驱动表。</li>
</ol>

<p>最后，又到了今天的问题时间。</p>

<p>我们在上文说到，使用 Block Nested-Loop Join 算法，可能会因为 join_buffer 不够大，需要对被驱动表做多次全表扫描。</p>

<p>我的问题是，如果被驱动表是一个大表，并且是一个冷数据表，除了查询过程中可能会导致 IO 压力大以外，你觉得对这个 MySQL 服务还有什么更严重的影响吗？（这个问题需要结合上一篇文章的知识点）</p>

<p>你可以把你的结论和分析写在留言区，我会在下一篇文章的末尾和你讨论这个问题。感谢你的收听，也欢迎你把这篇文章分享给更多的朋友一起阅读。</p>

<h1 id="上期问题时间">上期问题时间</h1>

<p>我在上一篇文章最后留下的问题是，如果客户端由于压力过大，迟迟不能接收数据，会对服务端造成什么严重的影响。</p>

<p>这个问题的核心是，造成了“长事务”。</p>

<p>至于长事务的影响，就要结合我们前面文章中提到的锁、MVCC 的知识点了。</p>

<ul>
<li>如果前面的语句有更新，意味着它们在占用着行锁，会导致别的语句更新被锁住；</li>
<li>当然读的事务也有问题，就是会导致 undo log 不能被回收，导致回滚段空间膨胀。</li>
</ul>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#2a464646131e1b1b1a1d6a4d474b434604494547" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f112d3d6a9a63d2',t:'MTczNDA0MjgxMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>