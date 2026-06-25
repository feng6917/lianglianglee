<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=42&#32;&#32;grant之后要跟着flush&#32;privileges吗？>
        <link rel="icon" href="/static/favicon.png">
        <title>42  grant之后要跟着flush privileges吗？ </title>
        
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
                            <h1 id="title" data-id="42  grant之后要跟着flush privileges吗？" class="title">42  grant之后要跟着flush privileges吗？</h1>
                            <div><p>在 MySQL 里面，grant 语句是用来给用户赋权的。不知道你有没有见过一些操作文档里面提到，grant 之后要马上跟着执行一个 flush privileges 命令，才能使赋权语句生效。我最开始使用 MySQL 的时候，就是照着一个操作文档的说明按照这个顺序操作的。</p>

<p>那么，grant 之后真的需要执行 flush privileges 吗？如果没有执行这个 flush 命令的话，赋权语句真的不能生效吗？</p>

<p>接下来，我就先和你介绍一下 grant 语句和 flush privileges 语句分别做了什么事情，然后再一起来分析这个问题。</p>

<p>为了便于说明，我先创建一个用户：</p>

<pre><code>create user 'ua'@'%' identified by 'pa';
</code></pre>

<p>这条语句的逻辑是创建一个用户’ua’@’%’，密码是 pa。注意，在 MySQL 里面，用户名 (user)+ 地址 (host) 才表示一个用户，因此 ua@ip1 和 ua@ip2 代表的是两个不同的用户。</p>

<p>这条命令做了两个动作：</p>

<ol>
<li>磁盘上，往 mysql.user 表里插入一行，由于没有指定权限，所以这行数据上所有表示权限的字段的值都是 N；</li>
<li>内存里，往数组 acl_users 里插入一个 acl_user 对象，这个对象的 access 字段值为 0。</li>
</ol>

<p>图 1 就是这个时刻用户 ua 在 user 表中的状态。</p>

<p><img src="assets/7e75bbfbca0cb932e1256941c99d5f35.png" alt="img" /></p>

<p>图 1 mysql.user 数据行</p>

<p>在 MySQL 中，用户权限是有不同的范围的。接下来，我就按照用户权限范围从大到小的顺序依次和你说明。</p>

<h1 id="全局权限">全局权限</h1>

<p>全局权限，作用于整个 MySQL 实例，这些权限信息保存在 mysql 库的 user 表里。如果我要给用户 ua 赋一个最高权限的话，语句是这么写的：</p>

<pre><code>grant all privileges on *.* to 'ua'@'%' with grant option;
</code></pre>

<p>这个 grant 命令做了两个动作：</p>

<ol>
<li>磁盘上，将 mysql.user 表里，用户’ua’@’%&lsquo;这一行的所有表示权限的字段的值都修改为‘Y’；</li>
<li>内存里，从数组 acl_users 中找到这个用户对应的对象，将 access 值（权限位）修改为二进制的“全 1”。</li>
</ol>

<p>在这个 grant 命令执行完成后，如果有新的客户端使用用户名 ua 登录成功，MySQL 会为新连接维护一个线程对象，然后从 acl_users 数组里查到这个用户的权限，并将权限值拷贝到这个线程对象中。之后在这个连接中执行的语句，所有关于全局权限的判断，都直接使用线程对象内部保存的权限位。</p>

<p>基于上面的分析我们可以知道：</p>

<ol>
<li>grant 命令对于全局权限，同时更新了磁盘和内存。命令完成后即时生效，接下来新创建的连接会使用新的权限。</li>
<li>对于一个已经存在的连接，它的全局权限不受 grant 命令的影响。</li>
</ol>

<p>需要说明的是，<strong>一般在生产环境上要合理控制用户权限的范围</strong>。我们上面用到的这个 grant 语句就是一个典型的错误示范。如果一个用户有所有权限，一般就不应该设置为所有 IP 地址都可以访问。</p>

<p>如果要回收上面的 grant 语句赋予的权限，你可以使用下面这条命令：</p>

<pre><code>revoke all privileges on *.* from 'ua'@'%';
</code></pre>

<p>这条 revoke 命令的用法与 grant 类似，做了如下两个动作：</p>

<ol>
<li>磁盘上，将 mysql.user 表里，用户’ua’@’%&lsquo;这一行的所有表示权限的字段的值都修改为“N”；</li>
<li>内存里，从数组 acl_users 中找到这个用户对应的对象，将 access 的值修改为 0。</li>
</ol>

<h1 id="db-权限">db 权限</h1>

<p>除了全局权限，MySQL 也支持库级别的权限定义。如果要让用户 ua 拥有库 db1 的所有权限，可以执行下面这条命令：</p>

<pre><code>grant all privileges on db1.* to 'ua'@'%' with grant option;
</code></pre>

<p>基于库的权限记录保存在 mysql.db 表中，在内存里则保存在数组 acl_dbs 中。这条 grant 命令做了如下两个动作：</p>

<ol>
<li>磁盘上，往 mysql.db 表中插入了一行记录，所有权限位字段设置为“Y”；</li>
<li>内存里，增加一个对象到数组 acl_dbs 中，这个对象的权限位为“全 1”。</li>
</ol>

<p>图 2 就是这个时刻用户 ua 在 db 表中的状态。</p>

<p><img src="assets/32cd61ee14ad2f370e1de0fb4e39bb2e.png" alt="img" /></p>

<p>图 2 mysql.db 数据行</p>

<p>每次需要判断一个用户对一个数据库读写权限的时候，都需要遍历一次 acl_dbs 数组，根据 user、host 和 db 找到匹配的对象，然后根据对象的权限位来判断。</p>

<p>也就是说，grant 修改 db 权限的时候，是同时对磁盘和内存生效的。</p>

<p>grant 操作对于已经存在的连接的影响，在全局权限和基于 db 的权限效果是不同的。接下来，我们做一个对照试验来分别看一下。</p>

<p><img src="assets/aea26807c8895961b666a5d96b081ac7.png" alt="img" /></p>

<p>图 3 权限操作效果</p>

<p>需要说明的是，图中 set global sync_binlog 这个操作是需要 super 权限的。</p>

<p>可以看到，虽然用户 ua 的 super 权限在 T3 时刻已经通过 revoke 语句回收了，但是在 T4 时刻执行 set global 的时候，权限验证还是通过了。这是因为 super 是全局权限，这个权限信息在线程对象中，而 revoke 操作影响不到这个线程对象。</p>

<p>而在 T5 时刻去掉 ua 对 db1 库的所有权限后，在 T6 时刻 session B 再操作 db1 库的表，就会报错“权限不足”。这是因为 acl_dbs 是一个全局数组，所有线程判断 db 权限都用这个数组，这样 revoke 操作马上就会影响到 session B。</p>

<p>这里在代码实现上有一个特别的逻辑，如果当前会话已经处于某一个 db 里面，之前 use 这个库的时候拿到的库权限会保存在会话变量中。</p>

<p>你可以看到在 T6 时刻，session C 和 session B 对表 t 的操作逻辑是一样的。但是 session B 报错，而 session C 可以执行成功。这是因为 session C 在 T2 时刻执行的 use db1，拿到了这个库的权限，在切换出 db1 库之前，session C 对这个库就一直有权限。</p>

<h1 id="表权限和列权限">表权限和列权限</h1>

<p>除了 db 级别的权限外，MySQL 支持更细粒度的表权限和列权限。其中，表权限定义存放在表 mysql.tables_priv 中，列权限定义存放在表 mysql.columns_priv 中。这两类权限，组合起来存放在内存的 hash 结构 column_priv_hash 中。</p>

<p>这两类权限的赋权命令如下：</p>

<pre><code>create table db1.t1(id int, a int);
 
grant all privileges on db1.t1 to 'ua'@'%' with grant option;
GRANT SELECT(id), INSERT (id,a) ON mydb.mytbl TO 'ua'@'%' with grant option;
</code></pre>

<p>跟 db 权限类似，这两个权限每次 grant 的时候都会修改数据表，也会同步修改内存中的 hash 结构。因此，对这两类权限的操作，也会马上影响到已经存在的连接。</p>

<p>看到这里，你一定会问，看来 grant 语句都是即时生效的，那这么看应该就不需要执行 flush privileges 语句了呀。</p>

<p>答案也确实是这样的。</p>

<p>flush privileges 命令会清空 acl_users 数组，然后从 mysql.user 表中读取数据重新加载，重新构造一个 acl_users 数组。也就是说，以数据表中的数据为准，会将全局权限内存数组重新加载一遍。</p>

<p>同样地，对于 db 权限、表权限和列权限，MySQL 也做了这样的处理。</p>

<p>也就是说，如果内存的权限数据和磁盘数据表相同的话，不需要执行 flush privileges。而如果我们都是用 grant/revoke 语句来执行的话，内存和数据表本来就是保持同步更新的。</p>

<p><strong>因此，正常情况下，grant 命令之后，没有必要跟着执行 flush privileges 命令。</strong></p>

<h1 id="flush-privileges-使用场景">flush privileges 使用场景</h1>

<p>那么，flush privileges 是在什么时候使用呢？显然，当数据表中的权限数据跟内存中的权限数据不一致的时候，flush privileges 语句可以用来重建内存数据，达到一致状态。</p>

<p>这种不一致往往是由不规范的操作导致的，比如直接用 DML 语句操作系统权限表。我们来看一下下面这个场景：</p>

<p><img src="assets/9031814361be42b7bc084ad2ab2aa3ec.png" alt="img" /></p>

<p>图 4 使用 flush privileges</p>

<p>可以看到，T3 时刻虽然已经用 delete 语句删除了用户 ua，但是在 T4 时刻，仍然可以用 ua 连接成功。原因就是，这时候内存中 acl_users 数组中还有这个用户，因此系统判断时认为用户还正常存在。</p>

<p>在 T5 时刻执行过 flush 命令后，内存更新，T6 时刻再要用 ua 来登录的话，就会报错“无法访问”了。</p>

<p>直接操作系统表是不规范的操作，这个不一致状态也会导致一些更“诡异”的现象发生。比如，前面这个通过 delete 语句删除用户的例子，就会出现下面的情况：</p>

<p><img src="assets/dd625b6b4eb2dcbdaac73648a1af50f1.png" alt="img" /></p>

<p>图 5 不规范权限操作导致的异常</p>

<p>可以看到，由于在 T3 时刻直接删除了数据表的记录，而内存的数据还存在。这就导致了：</p>

<ol>
<li>T4 时刻给用户 ua 赋权限失败，因为 mysql.user 表中找不到这行记录；</li>
<li>而 T5 时刻要重新创建这个用户也不行，因为在做内存判断的时候，会认为这个用户还存在。</li>
</ol>

<h1 id="小结">小结</h1>

<p>今天这篇文章，我和你介绍了 MySQL 用户权限在数据表和内存中的存在形式，以及 grant 和 revoke 命令的执行逻辑。</p>

<p>grant 语句会同时修改数据表和内存，判断权限的时候使用的是内存数据。因此，规范地使用 grant 和 revoke 语句，是不需要随后加上 flush privileges 语句的。</p>

<p>flush privileges 语句本身会用数据表的数据重建一份内存权限数据，所以在权限数据可能存在不一致的情况下再使用。而这种不一致往往是由于直接用 DML 语句操作系统权限表导致的，所以我们尽量不要使用这类语句。</p>

<p>另外，在使用 grant 语句赋权时，你可能还会看到这样的写法：</p>

<pre><code>grant super on *.* to 'ua'@'%' identified by 'pa';
</code></pre>

<p>这条命令加了 identified by ‘密码’， 语句的逻辑里面除了赋权外，还包含了：</p>

<ol>
<li>如果用户’ua’@’%&lsquo;不存在，就创建这个用户，密码是 pa；</li>
<li>如果用户 ua 已经存在，就将密码修改成 pa。</li>
</ol>

<p>这也是一种不建议的写法，因为这种写法很容易就会不慎把密码给改了。</p>

<p>“grant 之后随手加 flush privileges”，我自己是这么使用了两三年之后，在看代码的时候才发现其实并不需要这样做，那已经是 2011 年的事情了。</p>

<p>去年我看到一位小伙伴这么操作的时候，指出这个问题时，他也觉得很神奇。因为，他和我一样看的第一份文档就是这么写的，自己也一直是这么用的。</p>

<p>所以，今天的课后问题是，请你也来说一说，在使用数据库或者写代码的过程中，有没有遇到过类似的场景：误用了很长时间以后，由于一个契机发现“啊，原来我错了这么久”？</p>

<p>你可以把你的经历写在留言区，我会在下一篇文章的末尾选取有趣的评论和你分享。感谢你的收听，也欢迎你把这篇文章分享给更多的朋友一起阅读。</p>

<h1 id="上期问题时间">上期问题时间</h1>

<p>上期的问题是，MySQL 解析 statement 格式的 binlog 的时候，对于 load data 命令，解析出来为什么用的是 load data local。</p>

<p>这样做的一个原因是，为了确保备库应用 binlog 正常。因为备库可能配置了 secure_file_priv=null，所以如果不用 local 的话，可能会导入失败，造成主备同步延迟。</p>

<p>另一种应用场景是使用 mysqlbinlog 工具解析 binlog 文件，并应用到目标库的情况。你可以使用下面这条命令 ：</p>

<pre><code>mysqlbinlog $binlog_file | mysql -h$host -P$port -u$user -p$pwd
</code></pre>

<p>把日志直接解析出来发给目标库执行。增加 local，就能让这个方法支持非本地的 $host。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#dcb0b0b0e5e8ededeceb9cbbb1bdb5b0f2bfb3b1" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f112f751db663d2',t:'MTczNDA0MjkwNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>