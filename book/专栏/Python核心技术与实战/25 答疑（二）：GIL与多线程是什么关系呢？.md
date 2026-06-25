<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=25&#32;答疑（二）：GIL与多线程是什么关系呢？>
        <link rel="icon" href="/static/favicon.png">
        <title>25 答疑（二）：GIL与多线程是什么关系呢？ </title>
        
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
                        <a class="menu-item" id="00 开篇词 从工程的角度深入理解Python.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/00%20%e5%bc%80%e7%af%87%e8%af%8d%20%e4%bb%8e%e5%b7%a5%e7%a8%8b%e7%9a%84%e8%a7%92%e5%ba%a6%e6%b7%b1%e5%85%a5%e7%90%86%e8%a7%a3Python.md">00 开篇词 从工程的角度深入理解Python.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01 如何逐步突破，成为Python高手？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/01%20%e5%a6%82%e4%bd%95%e9%80%90%e6%ad%a5%e7%aa%81%e7%a0%b4%ef%bc%8c%e6%88%90%e4%b8%baPython%e9%ab%98%e6%89%8b%ef%bc%9f.md">01 如何逐步突破，成为Python高手？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 Jupyter Notebook为什么是现代Python的必学技术？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/02%20Jupyter%20Notebook%e4%b8%ba%e4%bb%80%e4%b9%88%e6%98%af%e7%8e%b0%e4%bb%a3Python%e7%9a%84%e5%bf%85%e5%ad%a6%e6%8a%80%e6%9c%af%ef%bc%9f.md">02 Jupyter Notebook为什么是现代Python的必学技术？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 列表和元组，到底用哪一个？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/03%20%e5%88%97%e8%a1%a8%e5%92%8c%e5%85%83%e7%bb%84%ef%bc%8c%e5%88%b0%e5%ba%95%e7%94%a8%e5%93%aa%e4%b8%80%e4%b8%aa%ef%bc%9f.md">03 列表和元组，到底用哪一个？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 字典、集合，你真的了解吗？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/04%20%e5%ad%97%e5%85%b8%e3%80%81%e9%9b%86%e5%90%88%ef%bc%8c%e4%bd%a0%e7%9c%9f%e7%9a%84%e4%ba%86%e8%a7%a3%e5%90%97%ef%bc%9f.md">04 字典、集合，你真的了解吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 深入浅出字符串.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/05%20%e6%b7%b1%e5%85%a5%e6%b5%85%e5%87%ba%e5%ad%97%e7%ac%a6%e4%b8%b2.md">05 深入浅出字符串.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 Python “黑箱”：输入与输出.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/06%20Python%20%e2%80%9c%e9%bb%91%e7%ae%b1%e2%80%9d%ef%bc%9a%e8%be%93%e5%85%a5%e4%b8%8e%e8%be%93%e5%87%ba.md">06 Python “黑箱”：输入与输出.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 修炼基本功：条件与循环.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/07%20%e4%bf%ae%e7%82%bc%e5%9f%ba%e6%9c%ac%e5%8a%9f%ef%bc%9a%e6%9d%a1%e4%bb%b6%e4%b8%8e%e5%be%aa%e7%8e%af.md">07 修炼基本功：条件与循环.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 异常处理：如何提高程序的稳定性？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/08%20%e5%bc%82%e5%b8%b8%e5%a4%84%e7%90%86%ef%bc%9a%e5%a6%82%e4%bd%95%e6%8f%90%e9%ab%98%e7%a8%8b%e5%ba%8f%e7%9a%84%e7%a8%b3%e5%ae%9a%e6%80%a7%ef%bc%9f.md">08 异常处理：如何提高程序的稳定性？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 不可或缺的自定义函数.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/09%20%e4%b8%8d%e5%8f%af%e6%88%96%e7%bc%ba%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89%e5%87%bd%e6%95%b0.md">09 不可或缺的自定义函数.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 简约不简单的匿名函数.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/10%20%e7%ae%80%e7%ba%a6%e4%b8%8d%e7%ae%80%e5%8d%95%e7%9a%84%e5%8c%bf%e5%90%8d%e5%87%bd%e6%95%b0.md">10 简约不简单的匿名函数.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 面向对象（上）：从生活中的类比说起.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/11%20%e9%9d%a2%e5%90%91%e5%af%b9%e8%b1%a1%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e4%bb%8e%e7%94%9f%e6%b4%bb%e4%b8%ad%e7%9a%84%e7%b1%bb%e6%af%94%e8%af%b4%e8%b5%b7.md">11 面向对象（上）：从生活中的类比说起.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 面向对象（下）：如何实现一个搜索引擎？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/12%20%e9%9d%a2%e5%90%91%e5%af%b9%e8%b1%a1%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e4%b8%80%e4%b8%aa%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%ef%bc%9f.md">12 面向对象（下）：如何实现一个搜索引擎？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 搭建积木：Python 模块化.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/13%20%e6%90%ad%e5%bb%ba%e7%a7%af%e6%9c%a8%ef%bc%9aPython%20%e6%a8%a1%e5%9d%97%e5%8c%96.md">13 搭建积木：Python 模块化.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 答疑（一）：列表和元组的内部实现是怎样的？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/14%20%e7%ad%94%e7%96%91%ef%bc%88%e4%b8%80%ef%bc%89%ef%bc%9a%e5%88%97%e8%a1%a8%e5%92%8c%e5%85%83%e7%bb%84%e7%9a%84%e5%86%85%e9%83%a8%e5%ae%9e%e7%8e%b0%e6%98%af%e6%80%8e%e6%a0%b7%e7%9a%84%ef%bc%9f.md">14 答疑（一）：列表和元组的内部实现是怎样的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 Python对象的比较、拷贝.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/15%20Python%e5%af%b9%e8%b1%a1%e7%9a%84%e6%af%94%e8%be%83%e3%80%81%e6%8b%b7%e8%b4%9d.md">15 Python对象的比较、拷贝.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 值传递，引用传递or其他，Python里参数是如何传递的？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/16%20%e5%80%bc%e4%bc%a0%e9%80%92%ef%bc%8c%e5%bc%95%e7%94%a8%e4%bc%a0%e9%80%92or%e5%85%b6%e4%bb%96%ef%bc%8cPython%e9%87%8c%e5%8f%82%e6%95%b0%e6%98%af%e5%a6%82%e4%bd%95%e4%bc%a0%e9%80%92%e7%9a%84%ef%bc%9f.md">16 值传递，引用传递or其他，Python里参数是如何传递的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 强大的装饰器.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/17%20%e5%bc%ba%e5%a4%a7%e7%9a%84%e8%a3%85%e9%a5%b0%e5%99%a8.md">17 强大的装饰器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 metaclass，是潘多拉魔盒还是阿拉丁神灯？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/18%20metaclass%ef%bc%8c%e6%98%af%e6%bd%98%e5%a4%9a%e6%8b%89%e9%ad%94%e7%9b%92%e8%bf%98%e6%98%af%e9%98%bf%e6%8b%89%e4%b8%81%e7%a5%9e%e7%81%af%ef%bc%9f.md">18 metaclass，是潘多拉魔盒还是阿拉丁神灯？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 深入理解迭代器和生成器.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/19%20%e6%b7%b1%e5%85%a5%e7%90%86%e8%a7%a3%e8%bf%ad%e4%bb%a3%e5%99%a8%e5%92%8c%e7%94%9f%e6%88%90%e5%99%a8.md">19 深入理解迭代器和生成器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 揭秘 Python 协程.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/20%20%e6%8f%ad%e7%a7%98%20Python%20%e5%8d%8f%e7%a8%8b.md">20 揭秘 Python 协程.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 Python并发编程之Futures.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/21%20Python%e5%b9%b6%e5%8f%91%e7%bc%96%e7%a8%8b%e4%b9%8bFutures.md">21 Python并发编程之Futures.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 并发编程之Asyncio.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/22%20%e5%b9%b6%e5%8f%91%e7%bc%96%e7%a8%8b%e4%b9%8bAsyncio.md">22 并发编程之Asyncio.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 你真的懂Python GIL（全局解释器锁）吗？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/23%20%e4%bd%a0%e7%9c%9f%e7%9a%84%e6%87%82Python%20GIL%ef%bc%88%e5%85%a8%e5%b1%80%e8%a7%a3%e9%87%8a%e5%99%a8%e9%94%81%ef%bc%89%e5%90%97%ef%bc%9f.md">23 你真的懂Python GIL（全局解释器锁）吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 带你解析 Python 垃圾回收机制.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/24%20%e5%b8%a6%e4%bd%a0%e8%a7%a3%e6%9e%90%20Python%20%e5%9e%83%e5%9c%be%e5%9b%9e%e6%94%b6%e6%9c%ba%e5%88%b6.md">24 带你解析 Python 垃圾回收机制.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25 答疑（二）：GIL与多线程是什么关系呢？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/25%20%e7%ad%94%e7%96%91%ef%bc%88%e4%ba%8c%ef%bc%89%ef%bc%9aGIL%e4%b8%8e%e5%a4%9a%e7%ba%bf%e7%a8%8b%e6%98%af%e4%bb%80%e4%b9%88%e5%85%b3%e7%b3%bb%e5%91%a2%ef%bc%9f.md">25 答疑（二）：GIL与多线程是什么关系呢？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 活都来不及干了，还有空注意代码风格？！.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/26%20%e6%b4%bb%e9%83%bd%e6%9d%a5%e4%b8%8d%e5%8f%8a%e5%b9%b2%e4%ba%86%ef%bc%8c%e8%bf%98%e6%9c%89%e7%a9%ba%e6%b3%a8%e6%84%8f%e4%bb%a3%e7%a0%81%e9%a3%8e%e6%a0%bc%ef%bc%9f%ef%bc%81.md">26 活都来不及干了，还有空注意代码风格？！.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 学会合理分解代码，提高代码可读性.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/27%20%e5%ad%a6%e4%bc%9a%e5%90%88%e7%90%86%e5%88%86%e8%a7%a3%e4%bb%a3%e7%a0%81%ef%bc%8c%e6%8f%90%e9%ab%98%e4%bb%a3%e7%a0%81%e5%8f%af%e8%af%bb%e6%80%a7.md">27 学会合理分解代码，提高代码可读性.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 如何合理利用assert？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/28%20%e5%a6%82%e4%bd%95%e5%90%88%e7%90%86%e5%88%a9%e7%94%a8assert%ef%bc%9f.md">28 如何合理利用assert？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 巧用上下文管理器和With语句精简代码.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/29%20%e5%b7%a7%e7%94%a8%e4%b8%8a%e4%b8%8b%e6%96%87%e7%ae%a1%e7%90%86%e5%99%a8%e5%92%8cWith%e8%af%ad%e5%8f%a5%e7%b2%be%e7%ae%80%e4%bb%a3%e7%a0%81.md">29 巧用上下文管理器和With语句精简代码.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30 真的有必要写单元测试吗？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/30%20%e7%9c%9f%e7%9a%84%e6%9c%89%e5%bf%85%e8%a6%81%e5%86%99%e5%8d%95%e5%85%83%e6%b5%8b%e8%af%95%e5%90%97%ef%bc%9f.md">30 真的有必要写单元测试吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31 pdb &amp; cProfile：调试和性能分析的法宝.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/31%20pdb%20&amp;%20cProfile%ef%bc%9a%e8%b0%83%e8%af%95%e5%92%8c%e6%80%a7%e8%83%bd%e5%88%86%e6%9e%90%e7%9a%84%e6%b3%95%e5%ae%9d.md">31 pdb &amp; cProfile：调试和性能分析的法宝.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32 答疑（三）：如何选择合适的异常处理方式？.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/32%20%e7%ad%94%e7%96%91%ef%bc%88%e4%b8%89%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e9%80%89%e6%8b%a9%e5%90%88%e9%80%82%e7%9a%84%e5%bc%82%e5%b8%b8%e5%a4%84%e7%90%86%e6%96%b9%e5%bc%8f%ef%bc%9f.md">32 答疑（三）：如何选择合适的异常处理方式？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33 带你初探量化世界.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/33%20%e5%b8%a6%e4%bd%a0%e5%88%9d%e6%8e%a2%e9%87%8f%e5%8c%96%e4%b8%96%e7%95%8c.md">33 带你初探量化世界.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34 RESTful &amp; Socket：搭建交易执行层核心.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/34%20RESTful%20&amp;%20Socket%ef%bc%9a%e6%90%ad%e5%bb%ba%e4%ba%a4%e6%98%93%e6%89%a7%e8%a1%8c%e5%b1%82%e6%a0%b8%e5%bf%83.md">34 RESTful &amp; Socket：搭建交易执行层核心.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35 RESTful &amp; Socket：行情数据对接和抓取.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/35%20RESTful%20&amp;%20Socket%ef%bc%9a%e8%a1%8c%e6%83%85%e6%95%b0%e6%8d%ae%e5%af%b9%e6%8e%a5%e5%92%8c%e6%8a%93%e5%8f%96.md">35 RESTful &amp; Socket：行情数据对接和抓取.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36 Pandas &amp; Numpy：策略与回测系统.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/36%20Pandas%20&amp;%20Numpy%ef%bc%9a%e7%ad%96%e7%95%a5%e4%b8%8e%e5%9b%9e%e6%b5%8b%e7%b3%bb%e7%bb%9f.md">36 Pandas &amp; Numpy：策略与回测系统.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37 Kafka &amp; ZMQ：自动化交易流水线.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/37%20Kafka%20&amp;%20ZMQ%ef%bc%9a%e8%87%aa%e5%8a%a8%e5%8c%96%e4%ba%a4%e6%98%93%e6%b5%81%e6%b0%b4%e7%ba%bf.md">37 Kafka &amp; ZMQ：自动化交易流水线.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38 MySQL：日志和数据存储系统.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/38%20MySQL%ef%bc%9a%e6%97%a5%e5%bf%97%e5%92%8c%e6%95%b0%e6%8d%ae%e5%ad%98%e5%82%a8%e7%b3%bb%e7%bb%9f.md">38 MySQL：日志和数据存储系统.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39 Django：搭建监控平台.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/39%20Django%ef%bc%9a%e6%90%ad%e5%bb%ba%e7%9b%91%e6%8e%a7%e5%b9%b3%e5%8f%b0.md">39 Django：搭建监控平台.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40 总结：Python中的数据结构与算法全景.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/40%20%e6%80%bb%e7%bb%93%ef%bc%9aPython%e4%b8%ad%e7%9a%84%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84%e4%b8%8e%e7%ae%97%e6%b3%95%e5%85%a8%e6%99%af.md">40 总结：Python中的数据结构与算法全景.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="41 硅谷一线互联网公司的工作体验.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/41%20%e7%a1%85%e8%b0%b7%e4%b8%80%e7%ba%bf%e4%ba%92%e8%81%94%e7%bd%91%e5%85%ac%e5%8f%b8%e7%9a%84%e5%b7%a5%e4%bd%9c%e4%bd%93%e9%aa%8c.md">41 硅谷一线互联网公司的工作体验.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="42 细数技术研发的注意事项.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/42%20%e7%bb%86%e6%95%b0%e6%8a%80%e6%9c%af%e7%a0%94%e5%8f%91%e7%9a%84%e6%b3%a8%e6%84%8f%e4%ba%8b%e9%a1%b9.md">42 细数技术研发的注意事项.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="43 Q&amp;A：聊一聊职业发展和选择.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/43%20Q&amp;A%ef%bc%9a%e8%81%8a%e4%b8%80%e8%81%8a%e8%81%8c%e4%b8%9a%e5%8f%91%e5%b1%95%e5%92%8c%e9%80%89%e6%8b%a9.md">43 Q&amp;A：聊一聊职业发展和选择.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="加餐 带你上手SWIG：一份清晰好用的SWIG编程实践指南.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/%e5%8a%a0%e9%a4%90%20%e5%b8%a6%e4%bd%a0%e4%b8%8a%e6%89%8bSWIG%ef%bc%9a%e4%b8%80%e4%bb%bd%e6%b8%85%e6%99%b0%e5%a5%bd%e7%94%a8%e7%9a%84SWIG%e7%bc%96%e7%a8%8b%e5%ae%9e%e8%b7%b5%e6%8c%87%e5%8d%97.md">加餐 带你上手SWIG：一份清晰好用的SWIG编程实践指南.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="结束语 技术之外的几点成长建议.md" href="/%e4%b8%93%e6%a0%8f/Python%e6%a0%b8%e5%bf%83%e6%8a%80%e6%9c%af%e4%b8%8e%e5%ae%9e%e6%88%98/%e7%bb%93%e6%9d%9f%e8%af%ad%20%e6%8a%80%e6%9c%af%e4%b9%8b%e5%a4%96%e7%9a%84%e5%87%a0%e7%82%b9%e6%88%90%e9%95%bf%e5%bb%ba%e8%ae%ae.md">结束语 技术之外的几点成长建议.md</a>
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
                            <h1 id="title" data-id="25 答疑（二）：GIL与多线程是什么关系呢？" class="title">25 答疑（二）：GIL与多线程是什么关系呢？</h1>
                            <div><p>你好，我是景霄。</p>

<p>不知不觉中，我们又一起完成了第二大章进阶篇的学习。我非常高兴看到很多同学一直在坚持积极地学习，并且留下了很多高质量的留言，值得我们互相思考交流。也有一些同学反复推敲，指出了文章中一些表达不严谨或是不当的地方，我也表示十分感谢。</p>

<p>大部分留言，我都在相对应的文章中回复过了。而一些手机上不方便回复，或是很有价值很典型的问题，我专门摘录了出来，作为今天的答疑内容，集中回复。</p>

<h2 id="问题一-列表self-append无限嵌套的原理">问题一：列表self append无限嵌套的原理</h2>

<p><img src="assets/b7c72868d7ad4aec8aecb0ac691433f9.jpg" alt="" /></p>

<p>先来回答第一个问题，两个同学都问到了，下面这段代码中的x，为什么是无限嵌套的列表？</p>

<pre><code>x = [1]
x.append(x)
x
[1, [...]]
</code></pre>

<p>我们可以将上述操作画一个图，便于你更直观地理解：</p>

<p><img src="assets/77526eab7ab1498fad861e7391f24764.jpg" alt="" /></p>

<p>这里，x指向一个列表，列表的第一个元素为1；执行了append操作后，第二个元素又反过来指向x，即指向了x所指向的列表，因此形成了一个无限嵌套的循环：[1, [1, [1, [1, …]]]]。</p>

<p>不过，虽然x是无限嵌套的列表，但x.append(x)的操作，并不会递归遍历其中的每一个元素。它只是扩充了原列表的第二个元素，并将其指向x，因此不会出现stack overflow的问题，自然不会报错。</p>

<p>至于第二点，为什么len(x)返回的是2？我们还是来看x，虽然它是无限嵌套的列表，但x的top level只有2个元素组成，第一个元素为1，第二个元素为指向自身的列表，因此len(x)返回2。</p>

<h2 id="问题二-装饰器的宏观理解">问题二：装饰器的宏观理解</h2>

<p><img src="assets/7203217bcf844478b5bd895e27b5ef72.jpg" alt="" /></p>

<p>再来看第二个问题，胡峣同学对装饰器的疑问。事实上，装饰器的作用与意义，在于其可以通过自定义的函数或类，在不改变原函数的基础上，改变原函数的一些功能。</p>

<pre><code>Decorators is to modify the behavior of the function through a wrapper so we don't have to actually modify the function.
</code></pre>

<p>装饰器将额外增加的功能，封装在自己的装饰器函数或类中；如果你想要调用它，只需要在原函数的顶部，加上@decorator即可。显然，这样做可以让你的代码得到高度的抽象、分离与简化。</p>

<p>光说概念可能还是有点抽象，我们可以想象下面这样一个场景，从真实例子来感受装饰器的魅力。在一些社交网站的后台，有无数的操作在调用之前，都需要先检查用户是否登录，比如在一些帖子里发表评论、发表状态等等。</p>

<p>如果你不知道装饰器，用常规的方法来编程，写出来的代码大概是下面这样的：</p>

<pre><code># 发表评论
def post_comment(request, ...):
    if not authenticate(request):
        raise Exception('U must log in first')
    ...
    
# 发表状态
def post_moment(request, ...):
    if not authenticate(request):
        raise Exception('U must log in first')
    ...
</code></pre>

<p>显然，这样重复调用认证函数authenticate()的步骤，就显得非常冗余了。更好的解决办法，就是将认证函数authenticate()单独分离出来，写成一个装饰器，就像我们下面这样的写法。这样一来，代码便得到了高度的优化：</p>

<pre><code># 发表评论
@authenticate
def post_comment(request, ...):

# 发表状态
@authenticate
def post_moment(request, ...):
</code></pre>

<p>不过也要注意，很多情况下，装饰器并不是唯一的方法。而我这里强调的，主要是使用装饰器带来的好处：</p>

<ul>
<li>代码更加简洁；</li>
<li>逻辑更加清晰；</li>
<li>程序的层次化、分离化更加明显。</li>
</ul>

<p>而这也是我们应该遵循和优先选择的开发模式。</p>

<h2 id="问题三-gil与多线程的关系">问题三：GIL与多线程的关系</h2>

<p><img src="assets/c1ba2361fbe24859841725ec05a11209.jpg" alt="" /></p>

<p>第三个问题，new同学疑惑的是，GIL只支持单线程，而Python支持多线程，这两者之间究竟是什么关系呢？</p>

<p>其实，GIL的存在与Python支持多线程并不矛盾。前面我们讲过，GIL是指同一时刻，程序只能有一个线程运行；而Python中的多线程，是指多个线程交替执行，造成一个“伪并行”的结果，但是具体到某一时刻，仍然只有1个线程在运行，并不是真正的多线程并行。这个机制，我画了下面这张图来表示：</p>

<p><img src="assets/cdbff16fdc8440b7817b9d0f84c29a86.jpg" alt="" /></p>

<p>举个例子来理解。比如，我用10个线程来爬取50个网站的内容。线程1在爬取第1个网站时，被I/O block住了，处于等待状态；这时，GIL就会释放，而线程2就会开始执行，去爬取第2个网站，依次类推。等到线程1的I/O操作完成时，主程序便又会切回线程1，让其完成剩下的操作。这样一来，从用户角度看到的，便是我们所说的多线程。</p>

<h2 id="问题四-多进程与多线程的应用场景">问题四：多进程与多线程的应用场景</h2>

<p><img src="assets/1a6162092199405397e3cf3d065849eb.jpg" alt="" /></p>

<p>第四个问题，这个在文章中多次提到，不过，我还是想在这里再次强调一下。</p>

<p>如果你想对CPU密集型任务加速，使用多线程是无效的，请使用多进程。这里所谓的CPU密集型任务，是指会消耗大量CPU资源的任务，比如求1到100000000的乘积，或者是把一段很长的文字编码后又解码等等。</p>

<p>使用多线程之所以无效，原因正是我们前面刚讲过的，Python多线程的本质是多个线程互相切换，但同一时刻仍然只允许一个线程运行。因此，你使用多线程，和使用一个主线程，本质上来说并没有什么差别；反而在很多情况下，因为线程切换带来额外损耗，还会降低程序的效率。</p>

<p>而如果使用多进程，就可以允许多个进程之间in parallel地执行任务，所以能够有效提高程序的运行效率。</p>

<p>至于 I/O密集型任务，如果想要加速，请优先使用多线程或Asyncio。当然，使用多进程也可以达到目的，但是完全没有这个必要。因为对I/O密集型任务来说，大多数时间都浪费在了I/O等待上。因此，在一个线程/任务等待I/O时，我们只需要切换线程/任务去执行其他 I/O操作就可以了。</p>

<p>不过，如果I/O操作非常多、非常heavy，需要建立的连接也比较多时，我们一般会选择Asyncio。因为Asyncio的任务切换更加轻量化，并且它能启动的任务数也远比多线程启动的线程数要多。当然，如果I/O的操作不是那么的heavy，那么使用多线程也就足够了。</p>

<p>今天主要回答这几个问题，同时也欢迎你继续在留言区写下疑问和感想，我会持续不断地解答。希望每一次的留言和答疑，都能给你带来新的收获和价值。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#016d6d6d38353030313641666c60686d2f626e6c" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f11d457891acd35',t:'MTczNDA0OTY1Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>