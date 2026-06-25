<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=33&#32;&#32;我应该迁移到HTTP2吗？>
        <link rel="icon" href="/static/favicon.png">
        <title>33  我应该迁移到HTTP2吗？ </title>
        
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
                        <a class="menu-item" id="00 开篇词｜To Be a HTTP Hero.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/00%20%e5%bc%80%e7%af%87%e8%af%8d%ef%bd%9cTo%20Be%20a%20HTTP%20Hero.md">00 开篇词｜To Be a HTTP Hero.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01  时势与英雄：HTTP的前世今生.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/01%20%20%e6%97%b6%e5%8a%bf%e4%b8%8e%e8%8b%b1%e9%9b%84%ef%bc%9aHTTP%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f.md">01  时势与英雄：HTTP的前世今生.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02  HTTP是什么？HTTP又不是什么？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/02%20%20HTTP%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9fHTTP%e5%8f%88%e4%b8%8d%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f.md">02  HTTP是什么？HTTP又不是什么？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03  HTTP世界全览（上）：与HTTP相关的各种概念.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/03%20%20HTTP%e4%b8%96%e7%95%8c%e5%85%a8%e8%a7%88%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e4%b8%8eHTTP%e7%9b%b8%e5%85%b3%e7%9a%84%e5%90%84%e7%a7%8d%e6%a6%82%e5%bf%b5.md">03  HTTP世界全览（上）：与HTTP相关的各种概念.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04  HTTP世界全览（下）：与HTTP相关的各种协议.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/04%20%20HTTP%e4%b8%96%e7%95%8c%e5%85%a8%e8%a7%88%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e4%b8%8eHTTP%e7%9b%b8%e5%85%b3%e7%9a%84%e5%90%84%e7%a7%8d%e5%8d%8f%e8%ae%ae.md">04  HTTP世界全览（下）：与HTTP相关的各种协议.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05  常说的“四层”和“七层”到底是什么？“五层”“六层”哪去了？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/05%20%20%e5%b8%b8%e8%af%b4%e7%9a%84%e2%80%9c%e5%9b%9b%e5%b1%82%e2%80%9d%e5%92%8c%e2%80%9c%e4%b8%83%e5%b1%82%e2%80%9d%e5%88%b0%e5%ba%95%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f%e2%80%9c%e4%ba%94%e5%b1%82%e2%80%9d%e2%80%9c%e5%85%ad%e5%b1%82%e2%80%9d%e5%93%aa%e5%8e%bb%e4%ba%86%ef%bc%9f.md">05  常说的“四层”和“七层”到底是什么？“五层”“六层”哪去了？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06  域名里有哪些门道？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/06%20%20%e5%9f%9f%e5%90%8d%e9%87%8c%e6%9c%89%e5%93%aa%e4%ba%9b%e9%97%a8%e9%81%93%ef%bc%9f.md">06  域名里有哪些门道？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07  自己动手，搭建HTTP实验环境.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/07%20%20%e8%87%aa%e5%b7%b1%e5%8a%a8%e6%89%8b%ef%bc%8c%e6%90%ad%e5%bb%baHTTP%e5%ae%9e%e9%aa%8c%e7%8e%af%e5%a2%83.md">07  自己动手，搭建HTTP实验环境.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08  键入网址再按下回车，后面究竟发生了什么？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/08%20%20%e9%94%ae%e5%85%a5%e7%bd%91%e5%9d%80%e5%86%8d%e6%8c%89%e4%b8%8b%e5%9b%9e%e8%bd%a6%ef%bc%8c%e5%90%8e%e9%9d%a2%e7%a9%b6%e7%ab%9f%e5%8f%91%e7%94%9f%e4%ba%86%e4%bb%80%e4%b9%88%ef%bc%9f.md">08  键入网址再按下回车，后面究竟发生了什么？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09  HTTP报文是什么样子的？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/09%20%20HTTP%e6%8a%a5%e6%96%87%e6%98%af%e4%bb%80%e4%b9%88%e6%a0%b7%e5%ad%90%e7%9a%84%ef%bc%9f.md">09  HTTP报文是什么样子的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10  应该如何理解请求方法？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/10%20%20%e5%ba%94%e8%af%a5%e5%a6%82%e4%bd%95%e7%90%86%e8%a7%a3%e8%af%b7%e6%b1%82%e6%96%b9%e6%b3%95%ef%bc%9f.md">10  应该如何理解请求方法？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11  你能写出正确的网址吗？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/11%20%20%e4%bd%a0%e8%83%bd%e5%86%99%e5%87%ba%e6%ad%a3%e7%a1%ae%e7%9a%84%e7%bd%91%e5%9d%80%e5%90%97%ef%bc%9f.md">11  你能写出正确的网址吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12  响应状态码该怎么用？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/12%20%20%e5%93%8d%e5%ba%94%e7%8a%b6%e6%80%81%e7%a0%81%e8%af%a5%e6%80%8e%e4%b9%88%e7%94%a8%ef%bc%9f.md">12  响应状态码该怎么用？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13  HTTP有哪些特点？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/13%20%20HTTP%e6%9c%89%e5%93%aa%e4%ba%9b%e7%89%b9%e7%82%b9%ef%bc%9f.md">13  HTTP有哪些特点？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14  HTTP有哪些优点？又有哪些缺点？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/14%20%20HTTP%e6%9c%89%e5%93%aa%e4%ba%9b%e4%bc%98%e7%82%b9%ef%bc%9f%e5%8f%88%e6%9c%89%e5%93%aa%e4%ba%9b%e7%bc%ba%e7%82%b9%ef%bc%9f.md">14  HTTP有哪些优点？又有哪些缺点？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15  海纳百川：HTTP的实体数据.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/15%20%20%e6%b5%b7%e7%ba%b3%e7%99%be%e5%b7%9d%ef%bc%9aHTTP%e7%9a%84%e5%ae%9e%e4%bd%93%e6%95%b0%e6%8d%ae.md">15  海纳百川：HTTP的实体数据.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16  把大象装进冰箱：HTTP传输大文件的方法.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/16%20%20%e6%8a%8a%e5%a4%a7%e8%b1%a1%e8%a3%85%e8%bf%9b%e5%86%b0%e7%ae%b1%ef%bc%9aHTTP%e4%bc%a0%e8%be%93%e5%a4%a7%e6%96%87%e4%bb%b6%e7%9a%84%e6%96%b9%e6%b3%95.md">16  把大象装进冰箱：HTTP传输大文件的方法.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17  排队也要讲效率：HTTP的连接管理.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/17%20%20%e6%8e%92%e9%98%9f%e4%b9%9f%e8%a6%81%e8%ae%b2%e6%95%88%e7%8e%87%ef%bc%9aHTTP%e7%9a%84%e8%bf%9e%e6%8e%a5%e7%ae%a1%e7%90%86.md">17  排队也要讲效率：HTTP的连接管理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18  四通八达：HTTP的重定向和跳转.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/18%20%20%e5%9b%9b%e9%80%9a%e5%85%ab%e8%be%be%ef%bc%9aHTTP%e7%9a%84%e9%87%8d%e5%ae%9a%e5%90%91%e5%92%8c%e8%b7%b3%e8%bd%ac.md">18  四通八达：HTTP的重定向和跳转.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19  让我知道你是谁：HTTP的Cookie机制.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/19%20%20%e8%ae%a9%e6%88%91%e7%9f%a5%e9%81%93%e4%bd%a0%e6%98%af%e8%b0%81%ef%bc%9aHTTP%e7%9a%84Cookie%e6%9c%ba%e5%88%b6.md">19  让我知道你是谁：HTTP的Cookie机制.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20  生鲜速递：HTTP的缓存控制.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/20%20%20%e7%94%9f%e9%b2%9c%e9%80%9f%e9%80%92%ef%bc%9aHTTP%e7%9a%84%e7%bc%93%e5%ad%98%e6%8e%a7%e5%88%b6.md">20  生鲜速递：HTTP的缓存控制.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21  良心中间商：HTTP的代理服务.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/21%20%20%e8%89%af%e5%bf%83%e4%b8%ad%e9%97%b4%e5%95%86%ef%bc%9aHTTP%e7%9a%84%e4%bb%a3%e7%90%86%e6%9c%8d%e5%8a%a1.md">21  良心中间商：HTTP的代理服务.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22  冷链周转：HTTP的缓存代理.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/22%20%20%e5%86%b7%e9%93%be%e5%91%a8%e8%bd%ac%ef%bc%9aHTTP%e7%9a%84%e7%bc%93%e5%ad%98%e4%bb%a3%e7%90%86.md">22  冷链周转：HTTP的缓存代理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23  HTTPS是什么？SSLTLS又是什么？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/23%20%20HTTPS%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9fSSLTLS%e5%8f%88%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f.md">23  HTTPS是什么？SSLTLS又是什么？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24  固若金汤的根本（上）：对称加密与非对称加密.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/24%20%20%e5%9b%ba%e8%8b%a5%e9%87%91%e6%b1%a4%e7%9a%84%e6%a0%b9%e6%9c%ac%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e5%af%b9%e7%a7%b0%e5%8a%a0%e5%af%86%e4%b8%8e%e9%9d%9e%e5%af%b9%e7%a7%b0%e5%8a%a0%e5%af%86.md">24  固若金汤的根本（上）：对称加密与非对称加密.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25  固若金汤的根本（下）：数字签名与证书.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/25%20%20%e5%9b%ba%e8%8b%a5%e9%87%91%e6%b1%a4%e7%9a%84%e6%a0%b9%e6%9c%ac%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e6%95%b0%e5%ad%97%e7%ad%be%e5%90%8d%e4%b8%8e%e8%af%81%e4%b9%a6.md">25  固若金汤的根本（下）：数字签名与证书.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26  信任始于握手：TLS1.2连接过程解析.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/26%20%20%e4%bf%a1%e4%bb%bb%e5%a7%8b%e4%ba%8e%e6%8f%a1%e6%89%8b%ef%bc%9aTLS1.2%e8%bf%9e%e6%8e%a5%e8%bf%87%e7%a8%8b%e8%a7%a3%e6%9e%90.md">26  信任始于握手：TLS1.2连接过程解析.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27  更好更快的握手：TLS1.3特性解析.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/27%20%20%e6%9b%b4%e5%a5%bd%e6%9b%b4%e5%bf%ab%e7%9a%84%e6%8f%a1%e6%89%8b%ef%bc%9aTLS1.3%e7%89%b9%e6%80%a7%e8%a7%a3%e6%9e%90.md">27  更好更快的握手：TLS1.3特性解析.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28  连接太慢该怎么办：HTTPS的优化.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/28%20%20%e8%bf%9e%e6%8e%a5%e5%a4%aa%e6%85%a2%e8%af%a5%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9aHTTPS%e7%9a%84%e4%bc%98%e5%8c%96.md">28  连接太慢该怎么办：HTTPS的优化.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29  我应该迁移到HTTPS吗？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/29%20%20%e6%88%91%e5%ba%94%e8%af%a5%e8%bf%81%e7%a7%bb%e5%88%b0HTTPS%e5%90%97%ef%bc%9f.md">29  我应该迁移到HTTPS吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30  时代之风（上）：HTTP2特性概览.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/30%20%20%e6%97%b6%e4%bb%a3%e4%b9%8b%e9%a3%8e%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9aHTTP2%e7%89%b9%e6%80%a7%e6%a6%82%e8%a7%88.md">30  时代之风（上）：HTTP2特性概览.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31  时代之风（下）：HTTP2内核剖析.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/31%20%20%e6%97%b6%e4%bb%a3%e4%b9%8b%e9%a3%8e%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9aHTTP2%e5%86%85%e6%a0%b8%e5%89%96%e6%9e%90.md">31  时代之风（下）：HTTP2内核剖析.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32  未来之路：HTTP3展望.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/32%20%20%e6%9c%aa%e6%9d%a5%e4%b9%8b%e8%b7%af%ef%bc%9aHTTP3%e5%b1%95%e6%9c%9b.md">32  未来之路：HTTP3展望.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33  我应该迁移到HTTP2吗？.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/33%20%20%e6%88%91%e5%ba%94%e8%af%a5%e8%bf%81%e7%a7%bb%e5%88%b0HTTP2%e5%90%97%ef%bc%9f.md">33  我应该迁移到HTTP2吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34  Nginx：高性能的Web服务器.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/34%20%20Nginx%ef%bc%9a%e9%ab%98%e6%80%a7%e8%83%bd%e7%9a%84Web%e6%9c%8d%e5%8a%a1%e5%99%a8.md">34  Nginx：高性能的Web服务器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35  OpenResty：更灵活的Web服务器.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/35%20%20OpenResty%ef%bc%9a%e6%9b%b4%e7%81%b5%e6%b4%bb%e7%9a%84Web%e6%9c%8d%e5%8a%a1%e5%99%a8.md">35  OpenResty：更灵活的Web服务器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36  WAF：保护我们的网络服务.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/36%20%20WAF%ef%bc%9a%e4%bf%9d%e6%8a%a4%e6%88%91%e4%bb%ac%e7%9a%84%e7%bd%91%e7%bb%9c%e6%9c%8d%e5%8a%a1.md">36  WAF：保护我们的网络服务.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37  CDN：加速我们的网络服务.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/37%20%20CDN%ef%bc%9a%e5%8a%a0%e9%80%9f%e6%88%91%e4%bb%ac%e7%9a%84%e7%bd%91%e7%bb%9c%e6%9c%8d%e5%8a%a1.md">37  CDN：加速我们的网络服务.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38  WebSocket：沙盒里的TCP.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/38%20%20WebSocket%ef%bc%9a%e6%b2%99%e7%9b%92%e9%87%8c%e7%9a%84TCP.md">38  WebSocket：沙盒里的TCP.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39  HTTP性能优化面面观（上）.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/39%20%20HTTP%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e9%9d%a2%e9%9d%a2%e8%a7%82%ef%bc%88%e4%b8%8a%ef%bc%89.md">39  HTTP性能优化面面观（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40  HTTP性能优化面面观（下）.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/40%20%20HTTP%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e9%9d%a2%e9%9d%a2%e8%a7%82%ef%bc%88%e4%b8%8b%ef%bc%89.md">40  HTTP性能优化面面观（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="结束语  做兴趣使然的Hero.md" href="/%e4%b8%93%e6%a0%8f/%e9%80%8f%e8%a7%86HTTP%e5%8d%8f%e8%ae%ae/%e7%bb%93%e6%9d%9f%e8%af%ad%20%20%e5%81%9a%e5%85%b4%e8%b6%a3%e4%bd%bf%e7%84%b6%e7%9a%84Hero.md">结束语  做兴趣使然的Hero.md</a>
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
                            <h1 id="title" data-id="33  我应该迁移到HTTP2吗？" class="title">33  我应该迁移到HTTP2吗？</h1>
                            <div><p>这一讲是“飞翔篇”的最后一讲，而 HTTP 的所有知识也差不多快学完了。</p>

<p>前面你已经看到了新的 HTTP/2 和 HTTP/3 协议，了解了它们的特点和工作原理，如果再联系上前几天“安全篇”的 HTTPS，你可能又会发出疑问：</p>

<p>“刚费了好大的力气升级到 HTTPS，这又出了一个 HTTP/2，还有再次升级的必要吗？”</p>

<p>与各大浏览器“强推”HTTPS 的待遇不一样，HTTP/2 的公布可谓是“波澜不惊”。虽然它是 HTTP 协议的一个重大升级，但 Apple、Google 等科技巨头并没有像 HTTPS 那样给予大量资源的支持。</p>

<p>直到今天，HTTP/2 在互联网上还是处于“不温不火”的状态，虽然已经有了不少的网站改造升级到了 HTTP/2，但普及的速度远不及 HTTPS。</p>

<p>所以，你有这样的疑问也是很自然的，升级到 HTTP/2 究竟能给我们带来多少好处呢？到底“值不值”呢？</p>

<h2 id="http-2-的优点">HTTP/2 的优点</h2>

<p>前面的几讲主要关注了 HTTP/2 的内部实现，今天我们就来看看它有哪些优点和缺点。</p>

<p>首先要说的是，HTTP/2 最大的一个优点是<strong>完全保持了与 HTTP/1 的兼容</strong>，在语义上没有任何变化，之前在 HTTP 上的所有投入都不会浪费。</p>

<p>因为兼容 HTTP/1，所以 HTTP/2 也具有 HTTP/1 的所有优点，并且“基本”解决了 HTTP/1 的所有缺点，安全与性能兼顾，可以认为是“更安全的 HTTP、更快的 HTTPS”。</p>

<p>在安全上，HTTP/2 对 HTTPS 在各方面都做了强化。下层的 TLS 至少是 1.2，而且只能使用前向安全的密码套件（即 ECDHE），这同时也就默认实现了“TLS False Start”，支持 1-RTT 握手，所以不需要再加额外的配置就可以自动实现 HTTPS 加速。</p>

<p>安全有了保障，再来看 HTTP/2 在性能方面的改进。</p>

<p>你应该知道，影响网络速度的两个关键因素是“<strong>带宽</strong>”和“<strong>延迟</strong>”，HTTP/2 的头部压缩、多路复用、流优先级、服务器推送等手段其实都是针对这两个要点。</p>

<p>所谓的“带宽”就是网络的传输速度。从最早的 56K/s，到如今的 100M/s，虽然网速已经是“今非昔比”，比从前快了几十倍、几百倍，但仍然是“稀缺资源”，图片、视频这样的多媒体数据很容易会把带宽用尽。</p>

<p>节约带宽的基本手段就是压缩，在 HTTP/1 里只能压缩 body，而 HTTP/2 则可以用 HPACK 算法压缩 header，这对高流量的网站非常有价值，有数据表明能节省大概 5%~10% 的流量，这是实实在在的“真金白银”。</p>

<p>与 HTTP/1“并发多个连接”不同，HTTP/2 的“多路复用”特性要求对<strong>一个域名（或者 IP）只用一个 TCP 连接</strong>，所有的数据都在这一个连接上传输，这样不仅节约了客户端、服务器和网络的资源，还可以把带宽跑满，让 TCP 充分“吃饱”。</p>

<p>这是为什么呢？</p>

<p>我们来看一下在 HTTP/1 里的长连接，虽然是双向通信，但任意一个时间点实际上还是单向的：上行请求时下行空闲，下行响应时上行空闲，再加上“队头阻塞”，实际的带宽打了个“对折”还不止（可参考[第 17 讲]）。</p>

<p>而在 HTTP/2 里，“多路复用”则让 TCP 开足了马力，“全速狂奔”，多个请求响应并发，每时每刻上下行方向上都有流在传输数据，没有空闲的时候，带宽的利用率能够接近 100%。所以，HTTP/2 只使用一个连接，就能抵得过 HTTP/1 里的五六个连接。</p>

<p>不过流也可能会有依赖关系，可能会存在等待导致的阻塞，这就是“延迟”，所以 HTTP/2 的其他特性就派上了用场。</p>

<p>“优先级”可以让客户端告诉服务器，哪个文件更重要，更需要优先传输，服务器就可以调高流的优先级，合理地分配有限的带宽资源，让高优先级的 HTML、图片更快地到达客户端，尽早加载显示。</p>

<p>“服务器推送”也是降低延迟的有效手段，它不需要客户端预先请求，服务器直接就发给客户端，这就省去了客户端解析 HTML 再请求的时间。</p>

<h2 id="http-2-的缺点">HTTP/2 的缺点</h2>

<p>说了一大堆 HTTP/2 的优点，再来看看它有什么缺点吧。</p>

<p>听过上一讲 HTTP/3 的介绍，你就知道 HTTP/2 在 TCP 级别还是存在“队头阻塞”的问题。所以，如果网络连接质量差，发生丢包，那么 TCP 会等待重传，传输速度就会降低。</p>

<p>另外，在移动网络中发生 IP 地址切换的时候，下层的 TCP 必须重新建连，要再次“握手”，经历“慢启动”，而且之前连接里积累的 HPACK 字典也都消失了，必须重头开始计算，导致带宽浪费和时延。</p>

<p>刚才也说了，HTTP/2 对一个域名只开一个连接，所以一旦这个连接出问题，那么整个网站的体验也就变差了。</p>

<p>而这些情况下 HTTP/1 反而不会受到影响，因为它“本来就慢”，而且还会对一个域名开 6~8 个连接，顶多其中的一两个连接会“更慢”，其他的连接不会受到影响。</p>

<h2 id="应该迁移到-http-2-吗">应该迁移到 HTTP/2 吗？</h2>

<p>说到这里，你对迁移到 HTTP/2 是否已经有了自己的判断呢？</p>

<p>在我看来，HTTP/2 处于一个略“尴尬”的位置，前面有“老前辈”HTTP/1，后面有“新来者”HTTP/3，即有“老前辈”的“打压”，又有“新来者”的“追赶”，也就难怪没有获得市场的大力“吹捧”了。</p>

<p>但这绝不是说 HTTP/2“一无是处”，实际上 HTTP/2 的性能改进效果是非常明显的，Top 1000 的网站中已经有超过 40% 运行在了 HTTP/2 上，包括知名的 Apple、Facebook、Google、Twitter 等等。仅用了四年的时间，HTTP/2 就拥有了这么大的市场份额和巨头的认可，足以证明它的价值。</p>

<p>因为 HTTP/2 的侧重点是“性能”，所以“是否迁移”就需要在这方面进行评估。如果网站的流量很大，那么 HTTP/2 就可以带来可观的收益；反之，如果网站流量比较小，那么升级到 HTTP/2 就没有太多必要了，只要利用现有的 HTTP 再优化就足矣。</p>

<p>不过如果你是新建网站，我觉得完全可以跳过 HTTP/1、HTTPS，直接“一步到位”，上 HTTP/2，这样不仅可以获得性能提升，还免去了老旧的“历史包袱”，日后也不会再有迁移的烦恼。</p>

<p>顺便再多嘴一句，HTTP/2 毕竟是“下一代”HTTP 协议，它的很多特性也延续到了 HTTP/3，提早升级到 HTTP/2 还可以让你在 HTTP/3 到来时有更多的技术积累和储备，不至于落后于时代。</p>

<h2 id="配置-http-2">配置 HTTP/2</h2>

<p>假设你已经决定要使用 HTTP/2，应该如何搭建服务呢？</p>

<p>因为 HTTP/2“事实上”是加密的，所以如果你已经在“安全篇”里成功迁移到了 HTTPS，那么在 Nginx 里启用 HTTP/2 简直可以说是“不费吹灰之力”，只需要在 server 配置里再多加一个参数就可以搞定了。</p>

<pre><code>server {
    listen       443 ssl http2;
 
 
    server_name  www.xxx.net;
 
 
    ssl_certificate         xxx.crt;
    ssl_certificate_key     xxx.key;
</code></pre>

<p>注意“listen”指令，在“ssl”后面多了一个“http2”，这就表示在 443 端口上开启了 SSL 加密，然后再启用 HTTP/2。</p>

<p>配置服务器推送特性可以使用指令“http2_push”和“http2_push_preload”：</p>

<pre><code>http2_push         /style/xxx.css;
http2_push_preload on;
</code></pre>

<p>不过如何合理地配置推送是个难题，如果推送给浏览器不需要的资源，反而浪费了带宽。</p>

<p>这方面暂时没有一般性的原则指导，你必须根据自己网站的实际情况去“猜测”客户端最需要的数据。</p>

<p>优化方面，HTTPS 的一些策略依然适用，比如精简密码套件、ECC 证书、会话复用、HSTS 减少重定向跳转等等。</p>

<p>但还有一些优化手段在 HTTP/2 里是不适用的，而且还会有反效果，比如说常见的精灵图（Spriting）、资源内联（inlining）、域名分片（Sharding）等，至于原因是什么，我把它留给你自己去思考（提示，与缓存有关）。</p>

<p>还要注意一点，HTTP/2 默认启用 header 压缩（HPACK），但并没有默认启用 body 压缩，所以不要忘了在 Nginx 配置文件里加上“gzip”指令，压缩 HTML、JS 等文本数据。</p>

<h2 id="应用层协议协商-alpn">应用层协议协商（ALPN）</h2>

<p>最后说一下 HTTP/2 的“服务发现”吧。</p>

<p>你有没有想过，在 URI 里用的都是 HTTPS 协议名，没有版本标记，浏览器怎么知道服务器支持 HTTP/2 呢？为什么上来就能用 HTTP/2，而不是用 HTTP/1 通信呢？</p>

<p>答案在 TLS 的扩展里，有一个叫“<strong>ALPN</strong>”（Application Layer Protocol Negotiation）的东西，用来与服务器就 TLS 上跑的应用协议进行“协商”。</p>

<p>客户端在发起“Client Hello”握手的时候，后面会带上一个“ALPN”扩展，里面按照优先顺序列出客户端支持的应用协议。</p>

<p>就像下图这样，最优先的是“h2”，其次是“http/1.1”，以前还有“spdy”，以后还可能会有“h3”。</p>

<p><img src="assets/d8f8606948bbd63c31466e464c1956b0.png" alt="img" /></p>

<p>服务器看到 ALPN 扩展以后就可以从列表里选择一种应用协议，在“Server Hello”里也带上“ALPN”扩展，告诉客户端服务器决定使用的是哪一种。因为我们在 Nginx 配置里使用了 HTTP/2 协议，所以在这里它选择的就是“h2”。</p>

<p><img src="assets/19be1138574589458c96040e1a23b3a7.png" alt="img" /></p>

<p>这样在 TLS 握手结束后，客户端和服务器就通过“ALPN”完成了应用层的协议协商，后面就可以使用 HTTP/2 通信了。</p>

<h2 id="小结">小结</h2>

<p>今天我们讨论了是否应该迁移到 HTTP/2，还有应该如何迁移到 HTTP/2。</p>

<ol>
<li>HTTP/2 完全兼容 HTTP/1，是“更安全的 HTTP、更快的 HTTPS”，头部压缩、多路复用等技术可以充分利用带宽，降低延迟，从而大幅度提高上网体验；</li>
<li>TCP 协议存在“队头阻塞”，所以 HTTP/2 在弱网或者移动网络下的性能表现会不如 HTTP/1；</li>
<li>迁移到 HTTP/2 肯定会有性能提升，但高流量网站效果会更显著；</li>
<li>如果已经升级到了 HTTPS，那么再升级到 HTTP/2 会很简单；</li>
<li>TLS 协议提供“ALPN”扩展，让客户端和服务器协商使用的应用层协议，“发现”HTTP/2 服务。</li>
</ol>

<h2 id="课下作业">课下作业</h2>

<ol>
<li>和“安全篇”的第 29 讲类似，结合自己的实际情况，分析一下是否应该迁移到 HTTP/2，有没有难点？</li>
<li>精灵图（Spriting）、资源内联（inlining）、域名分片（Sharding）这些手段为什么会对 HTTP/2 的性能优化造成反效果呢？</li>
</ol>

<p>欢迎你把自己的学习体会写在留言区，与我和其他同学一起讨论。如果你觉得有所收获，也欢迎把文章分享给你的朋友。</p>

<p><img src="assets/fb986a7575ec902c86c17a937dbca655.png" alt="unpreview" /></p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#365a5a5a0f020707060176515b575f5a1855595b" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f19ff170cdb888b',t:'MTczNDEzNTI5NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>