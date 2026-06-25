<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=13&#32;&#32;HTTP有哪些特点？>
        <link rel="icon" href="/static/favicon.png">
        <title>13  HTTP有哪些特点？ </title>
        
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
                            <h1 id="title" data-id="13  HTTP有哪些特点？" class="title">13  HTTP有哪些特点？</h1>
                            <div><p>通过“基础篇”前几讲的学习，你应该已经知道了 HTTP 协议的基本知识，了解它的报文结构，请求头、响应头以及内部的请求方法、URI 和状态码等细节。</p>

<p>你会不会有种疑惑：“HTTP 协议好像也挺简单的啊，凭什么它就能统治互联网这么多年呢？”</p>

<p>所以接下来的这两讲，我会跟你聊聊 HTTP 协议的特点、优点和缺点。既要看到它好的一面，也要正视它不好的一面，只有全方位、多角度了解 HTTP，才能实现“扬长避短”，更好地利用 HTTP。</p>

<p>今天这节课主要说的是 HTTP 协议的特点，但不会讲它们的好坏，这些特点即有可能是优点，也有可能是缺点，你可以边听边思考。</p>

<p><img src="assets/7808b195c921e0685958c20509855d4a.png" alt="img" /></p>

<h2 id="灵活可扩展">灵活可扩展</h2>

<p>首先， HTTP 协议是一个“灵活可扩展”的传输协议。</p>

<p>HTTP 协议最初诞生的时候就比较简单，本着开放的精神只规定了报文的基本格式，比如用空格分隔单词，用换行分隔字段，“header+body”等，报文里的各个组成部分都没有做严格的语法语义限制，可以由开发者任意定制。</p>

<p>所以，HTTP 协议就随着互联网的发展一同成长起来了。在这个过程中，HTTP 协议逐渐增加了请求方法、版本号、状态码、头字段等特性。而 body 也不再限于文本形式的 TXT 或 HTML，而是能够传输图片、音频视频等任意数据，这些都是源于它的“灵活可扩展”的特点。</p>

<p>而那些 RFC 文档，实际上也可以理解为是对已有扩展的“承认和标准化”，实现了“从实践中来，到实践中去”的良性循环。</p>

<p>也正是因为这个特点，HTTP 才能在三十年的历史长河中“屹立不倒”，从最初的低速实验网络发展到现在的遍布全球的高速互联网，始终保持着旺盛的生命力。</p>

<h2 id="可靠传输">可靠传输</h2>

<p>第二个特点， HTTP 协议是一个“可靠”的传输协议。</p>

<p>这个特点显而易见，因为 HTTP 协议是基于 TCP/IP 的，而 TCP 本身是一个“可靠”的传输协议，所以 HTTP 自然也就继承了这个特性，能够在请求方和应答方之间“可靠”地传输数据。</p>

<p>它的具体做法与 TCP/UDP 差不多，都是对实际传输的数据（entity）做了一层包装，加上一个头，然后调用 Socket API，通过 TCP/IP 协议栈发送或者接收。</p>

<p>不过我们必须正确地理解“可靠”的含义，HTTP 并不能 100% 保证数据一定能够发送到另一端，在网络繁忙、连接质量差等恶劣的环境下，也有可能收发失败。“可靠”只是向使用者提供了一个“承诺”，会在下层用多种手段“尽量”保证数据的完整送达。</p>

<p>当然，如果遇到光纤被意外挖断这样的极端情况，即使是神仙也不能发送成功。所以，“可靠”传输是指在网络基本正常的情况下数据收发必定成功，借用运维里的术语，大概就是“3 个 9”或者“4 个 9”的程度吧。</p>

<h2 id="应用层协议">应用层协议</h2>

<p>第三个特点，HTTP 协议是一个应用层的协议。</p>

<p>这个特点也是不言自明的，但却很重要。</p>

<p>在 TCP/IP 诞生后的几十年里，虽然出现了许多的应用层协议，但它们都仅关注很小的应用领域，局限在很少的应用场景。例如 FTP 只能传输文件、SMTP 只能发送邮件、SSH 只能远程登录等，在通用的数据传输方面“完全不能打”。</p>

<p>所以 HTTP 凭借着可携带任意头字段和实体数据的报文结构，以及连接控制、缓存代理等方便易用的特性，一出现就“技压群雄”，迅速成为了应用层里的“明星”协议。只要不太苛求性能，HTTP 几乎可以传递一切东西，满足各种需求，称得上是一个“万能”的协议。</p>

<p>套用一个网上流行的段子，HTTP 完全可以用开玩笑的口吻说：“不要误会，我不是针对 FTP，我是说在座的应用层各位，都是垃圾。”</p>

<h2 id="请求-应答">请求 - 应答</h2>

<p>第四个特点，HTTP 协议使用的是请求 - 应答通信模式。</p>

<p>这个请求 - 应答模式是 HTTP 协议最根本的通信模型，通俗来讲就是“一发一收”“有来有去”，就像是写代码时的函数调用，只要填好请求头里的字段，“调用”后就会收到答复。</p>

<p>请求 - 应答模式也明确了 HTTP 协议里通信双方的定位，永远是请求方先发起连接和请求，是主动的，而应答方只有在收到请求后才能答复，是被动的，如果没有请求时不会有任何动作。</p>

<p>当然，请求方和应答方的角色也不是绝对的，在浏览器 - 服务器的场景里，通常服务器都是应答方，但如果将它用作代理连接后端服务器，那么它就可能同时扮演请求方和应答方的角色。</p>

<p>HTTP 的请求 - 应答模式也恰好契合了传统的 C/S（Client/Server）系统架构，请求方作为客户端、应答方作为服务器。所以，随着互联网的发展就出现了 B/S（Browser/Server）架构，用轻量级的浏览器代替笨重的客户端应用，实现零维护的“瘦”客户端，而服务器则摈弃私有通信协议转而使用 HTTP 协议。</p>

<p>此外，请求 - 应答模式也完全符合 RPC（Remote Procedure Call）的工作模式，可以把 HTTP 请求处理封装成远程函数调用，导致了 WebService、RESTful 和 gPRC 等的出现。</p>

<h2 id="无状态">无状态</h2>

<p>第五个特点，HTTP 协议是无状态的。</p>

<p>这个所谓的“状态”应该怎么理解呢？</p>

<p>“状态”其实就是客户端或者服务器里保存的一些数据或者标志，记录了通信过程中的一些变化信息。</p>

<p>你一定知道，TCP 协议是有状态的，一开始处于 CLOSED 状态，连接成功后是 ESTABLISHED 状态，断开连接后是 FIN-WAIT 状态，最后又是 CLOSED 状态。</p>

<p>这些“状态”就需要 TCP 在内部用一些数据结构去维护，可以简单地想象成是个标志量，标记当前所处的状态，例如 0 是 CLOSED，2 是 ESTABLISHED 等等。</p>

<p>再来看 HTTP，那么对比一下 TCP 就看出来了，在整个协议里没有规定任何的“状态”，客户端和服务器永远是处在一种“<strong>无知</strong>”的状态。建立连接前两者互不知情，每次收发的报文也都是互相独立的，没有任何的联系。收发报文也不会对客户端或服务器产生任何影响，连接后也不会要求保存任何信息。</p>

<p>“无状态”形象地来说就是“没有记忆能力”。比如，浏览器发了一个请求，说“我是小明，请给我 A 文件。”，服务器收到报文后就会检查一下权限，看小明确实可以访问 A 文件，于是把文件发回给浏览器。接着浏览器还想要 B 文件，但服务器不会记录刚才的请求状态，不知道第二个请求和第一个请求是同一个浏览器发来的，所以浏览器必须还得重复一次自己的身份才行：“我是刚才的小明，请再给我 B 文件。”</p>

<p>我们可以再对比一下 UDP 协议，不过它是无连接也无状态的，顺序发包乱序收包，数据包发出去后就不管了，收到后也不会顺序整理。而 HTTP 是有连接无状态，顺序发包顺序收包，按照收发的顺序管理报文。</p>

<p>但不要忘了 HTTP 是“灵活可扩展”的，虽然标准里没有规定“状态”，但完全能够在协议的框架里给它“打个补丁”，增加这个特性。</p>

<h2 id="其他特点">其他特点</h2>

<p>除了以上的五大特点，其实 HTTP 协议还可以列出非常多的特点，例如传输的实体数据可缓存可压缩、可分段获取数据、支持身份认证、支持国际化语言等。但这些并不能算是 HTTP 的基本特点，因为这都是由第一个“灵活可扩展”的特点所衍生出来的。</p>

<h2 id="小结">小结</h2>

<ol>
<li>HTTP 是灵活可扩展的，可以任意添加头字段实现任意功能；</li>
<li>HTTP 是可靠传输协议，基于 TCP/IP 协议“尽量”保证数据的送达；</li>
<li>HTTP 是应用层协议，比 FTP、SSH 等更通用功能更多，能够传输任意数据；</li>
<li>HTTP 使用了请求 - 应答模式，客户端主动发起请求，服务器被动回复请求；</li>
<li>HTTP 本质上是无状态的，每个请求都是互相独立、毫无关联的，协议不要求客户端或服务器记录请求相关的信息。</li>
</ol>

<h2 id="课下作业">课下作业</h2>

<ol>
<li>就如同开头我讲的那样，你能说一下今天列出的这些 HTTP 的特点中哪些是优点，哪些是缺点吗？</li>
<li>不同的应用场合有不同的侧重方面，你觉得哪个特点对你来说是最重要的呢？</li>
</ol>

<p>欢迎你把自己的答案写在留言区，与我和其他同学一起讨论。如果你觉得有所收获，欢迎你把文章分享给你的朋友。</p>

<p><img src="assets/a233c19f92c566614e4e0facbaeab27d.png" alt="unpreview" /></p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#18747474212c2929282f587f75797174367b7775" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f19f9b31c14888b',t:'MTczNDEzNTA3My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>