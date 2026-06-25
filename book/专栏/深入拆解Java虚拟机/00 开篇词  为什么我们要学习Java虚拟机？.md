<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=00&#32;开篇词&#32;&#32;为什么我们要学习Java虚拟机？>
        <link rel="icon" href="/static/favicon.png">
        <title>00 开篇词  为什么我们要学习Java虚拟机？ </title>
        
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
                        <a class="menu-item" id="00 开篇词  为什么我们要学习Java虚拟机？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/00%20%e5%bc%80%e7%af%87%e8%af%8d%20%20%e4%b8%ba%e4%bb%80%e4%b9%88%e6%88%91%e4%bb%ac%e8%a6%81%e5%ad%a6%e4%b9%a0Java%e8%99%9a%e6%8b%9f%e6%9c%ba%ef%bc%9f.md">00 开篇词  为什么我们要学习Java虚拟机？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01  Java代码是怎么运行的？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/01%20%20Java%e4%bb%a3%e7%a0%81%e6%98%af%e6%80%8e%e4%b9%88%e8%bf%90%e8%a1%8c%e7%9a%84%ef%bc%9f.md">01  Java代码是怎么运行的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02  Java的基本类型.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/02%20%20Java%e7%9a%84%e5%9f%ba%e6%9c%ac%e7%b1%bb%e5%9e%8b.md">02  Java的基本类型.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03  Java虚拟机是如何加载Java类的.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/03%20%20Java%e8%99%9a%e6%8b%9f%e6%9c%ba%e6%98%af%e5%a6%82%e4%bd%95%e5%8a%a0%e8%bd%bdJava%e7%b1%bb%e7%9a%84.md">03  Java虚拟机是如何加载Java类的.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04  JVM是如何执行方法调用的？（上）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/04%20%20JVM%e6%98%af%e5%a6%82%e4%bd%95%e6%89%a7%e8%a1%8c%e6%96%b9%e6%b3%95%e8%b0%83%e7%94%a8%e7%9a%84%ef%bc%9f%ef%bc%88%e4%b8%8a%ef%bc%89.md">04  JVM是如何执行方法调用的？（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05  JVM是如何执行方法调用的？（下）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/05%20%20JVM%e6%98%af%e5%a6%82%e4%bd%95%e6%89%a7%e8%a1%8c%e6%96%b9%e6%b3%95%e8%b0%83%e7%94%a8%e7%9a%84%ef%bc%9f%ef%bc%88%e4%b8%8b%ef%bc%89.md">05  JVM是如何执行方法调用的？（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06  JVM是如何处理异常的？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/06%20%20JVM%e6%98%af%e5%a6%82%e4%bd%95%e5%a4%84%e7%90%86%e5%bc%82%e5%b8%b8%e7%9a%84%ef%bc%9f.md">06  JVM是如何处理异常的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07  JVM是如何实现反射的？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/07%20%20JVM%e6%98%af%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e5%8f%8d%e5%b0%84%e7%9a%84%ef%bc%9f.md">07  JVM是如何实现反射的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08  JVM是怎么实现invokedynamic的？（上）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/08%20%20JVM%e6%98%af%e6%80%8e%e4%b9%88%e5%ae%9e%e7%8e%b0invokedynamic%e7%9a%84%ef%bc%9f%ef%bc%88%e4%b8%8a%ef%bc%89.md">08  JVM是怎么实现invokedynamic的？（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09  JVM是怎么实现invokedynamic的？（下）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/09%20%20JVM%e6%98%af%e6%80%8e%e4%b9%88%e5%ae%9e%e7%8e%b0invokedynamic%e7%9a%84%ef%bc%9f%ef%bc%88%e4%b8%8b%ef%bc%89.md">09  JVM是怎么实现invokedynamic的？（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10  Java对象的内存布局.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/10%20%20Java%e5%af%b9%e8%b1%a1%e7%9a%84%e5%86%85%e5%ad%98%e5%b8%83%e5%b1%80.md">10  Java对象的内存布局.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11  垃圾回收（上）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/11%20%20%e5%9e%83%e5%9c%be%e5%9b%9e%e6%94%b6%ef%bc%88%e4%b8%8a%ef%bc%89.md">11  垃圾回收（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12  垃圾回收（下）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/12%20%20%e5%9e%83%e5%9c%be%e5%9b%9e%e6%94%b6%ef%bc%88%e4%b8%8b%ef%bc%89.md">12  垃圾回收（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13  Java内存模型.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/13%20%20Java%e5%86%85%e5%ad%98%e6%a8%a1%e5%9e%8b.md">13  Java内存模型.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14  Java虚拟机是怎么实现synchronized的？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/14%20%20Java%e8%99%9a%e6%8b%9f%e6%9c%ba%e6%98%af%e6%80%8e%e4%b9%88%e5%ae%9e%e7%8e%b0synchronized%e7%9a%84%ef%bc%9f.md">14  Java虚拟机是怎么实现synchronized的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15  Java语法糖与Java编译器.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/15%20%20Java%e8%af%ad%e6%b3%95%e7%b3%96%e4%b8%8eJava%e7%bc%96%e8%af%91%e5%99%a8.md">15  Java语法糖与Java编译器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16  即时编译（上）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/16%20%20%e5%8d%b3%e6%97%b6%e7%bc%96%e8%af%91%ef%bc%88%e4%b8%8a%ef%bc%89.md">16  即时编译（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17  即时编译（下）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/17%20%20%e5%8d%b3%e6%97%b6%e7%bc%96%e8%af%91%ef%bc%88%e4%b8%8b%ef%bc%89.md">17  即时编译（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18  即时编译器的中间表达形式.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/18%20%20%e5%8d%b3%e6%97%b6%e7%bc%96%e8%af%91%e5%99%a8%e7%9a%84%e4%b8%ad%e9%97%b4%e8%a1%a8%e8%be%be%e5%bd%a2%e5%bc%8f.md">18  即时编译器的中间表达形式.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19  Java字节码（基础篇）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/19%20%20Java%e5%ad%97%e8%8a%82%e7%a0%81%ef%bc%88%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%89.md">19  Java字节码（基础篇）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20  方法内联（上）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/20%20%20%e6%96%b9%e6%b3%95%e5%86%85%e8%81%94%ef%bc%88%e4%b8%8a%ef%bc%89.md">20  方法内联（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21  方法内联（下）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/21%20%20%e6%96%b9%e6%b3%95%e5%86%85%e8%81%94%ef%bc%88%e4%b8%8b%ef%bc%89.md">21  方法内联（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22  HotSpot虚拟机的intrinsic.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/22%20%20HotSpot%e8%99%9a%e6%8b%9f%e6%9c%ba%e7%9a%84intrinsic.md">22  HotSpot虚拟机的intrinsic.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23  逃逸分析.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/23%20%20%e9%80%83%e9%80%b8%e5%88%86%e6%9e%90.md">23  逃逸分析.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24  字段访问相关优化.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/24%20%20%e5%ad%97%e6%ae%b5%e8%ae%bf%e9%97%ae%e7%9b%b8%e5%85%b3%e4%bc%98%e5%8c%96.md">24  字段访问相关优化.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25  循环优化.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/25%20%20%e5%be%aa%e7%8e%af%e4%bc%98%e5%8c%96.md">25  循环优化.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26  向量化.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/26%20%20%e5%90%91%e9%87%8f%e5%8c%96.md">26  向量化.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27  注解处理器.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/27%20%20%e6%b3%a8%e8%a7%a3%e5%a4%84%e7%90%86%e5%99%a8.md">27  注解处理器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28  基准测试框架JMH（上）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/28%20%20%e5%9f%ba%e5%87%86%e6%b5%8b%e8%af%95%e6%a1%86%e6%9e%b6JMH%ef%bc%88%e4%b8%8a%ef%bc%89.md">28  基准测试框架JMH（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29  基准测试框架JMH（下）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/29%20%20%e5%9f%ba%e5%87%86%e6%b5%8b%e8%af%95%e6%a1%86%e6%9e%b6JMH%ef%bc%88%e4%b8%8b%ef%bc%89.md">29  基准测试框架JMH（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30  Java虚拟机的监控及诊断工具（命令行篇）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/30%20%20Java%e8%99%9a%e6%8b%9f%e6%9c%ba%e7%9a%84%e7%9b%91%e6%8e%a7%e5%8f%8a%e8%af%8a%e6%96%ad%e5%b7%a5%e5%85%b7%ef%bc%88%e5%91%bd%e4%bb%a4%e8%a1%8c%e7%af%87%ef%bc%89.md">30  Java虚拟机的监控及诊断工具（命令行篇）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31  Java虚拟机的监控及诊断工具（GUI篇）.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/31%20%20Java%e8%99%9a%e6%8b%9f%e6%9c%ba%e7%9a%84%e7%9b%91%e6%8e%a7%e5%8f%8a%e8%af%8a%e6%96%ad%e5%b7%a5%e5%85%b7%ef%bc%88GUI%e7%af%87%ef%bc%89.md">31  Java虚拟机的监控及诊断工具（GUI篇）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32  JNI的运行机制.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/32%20%20JNI%e7%9a%84%e8%bf%90%e8%a1%8c%e6%9c%ba%e5%88%b6.md">32  JNI的运行机制.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33  Java Agent与字节码注入.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/33%20%20Java%20Agent%e4%b8%8e%e5%ad%97%e8%8a%82%e7%a0%81%e6%b3%a8%e5%85%a5.md">33  Java Agent与字节码注入.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34  Graal：用Java编译Java.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/34%20%20Graal%ef%bc%9a%e7%94%a8Java%e7%bc%96%e8%af%91Java.md">34  Graal：用Java编译Java.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35  Truffle：语言实现框架.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/35%20%20Truffle%ef%bc%9a%e8%af%ad%e8%a8%80%e5%ae%9e%e7%8e%b0%e6%a1%86%e6%9e%b6.md">35  Truffle：语言实现框架.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36  SubstrateVM：AOT编译框架.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/36%20%20SubstrateVM%ef%bc%9aAOT%e7%bc%96%e8%af%91%e6%a1%86%e6%9e%b6.md">36  SubstrateVM：AOT编译框架.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="尾声丨道阻且长，努力加餐.html.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/%e5%b0%be%e5%a3%b0%e4%b8%a8%e9%81%93%e9%98%bb%e4%b8%94%e9%95%bf%ef%bc%8c%e5%8a%aa%e5%8a%9b%e5%8a%a0%e9%a4%90.html.md">尾声丨道阻且长，努力加餐.html.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="工具篇  常用工具介绍.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e6%8b%86%e8%a7%a3Java%e8%99%9a%e6%8b%9f%e6%9c%ba/%e5%b7%a5%e5%85%b7%e7%af%87%20%20%e5%b8%b8%e7%94%a8%e5%b7%a5%e5%85%b7%e4%bb%8b%e7%bb%8d.md">工具篇  常用工具介绍.md</a>
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
                            <h1 id="title" data-id="00 开篇词  为什么我们要学习Java虚拟机？" class="title">00 开篇词  为什么我们要学习Java虚拟机？</h1>
                            <div><p>前不久我参加了一个国外程序员的讲座，讲座的副标题很有趣，叫做：“我如何学会停止恐惧，并且爱上 Java 虚拟机”。</p>

<p>这句话来自一部黑色幽默电影《奇爱博士》，电影描述了冷战时期剑拔弩张的氛围。</p>

<p>程序员之间的语言之争又未尝不是如此。写系统语言的鄙视托管语言低下的执行效率；写托管语言的则取笑系统语言需要手动管理内存；写动态语言的不屑于静态语言那冗余的类型系统；写静态语言的则嘲讽动态语言里面各种光怪陆离的运行时错误。</p>

<p>Java 作为应用最广的语言，自然吸引了不少的攻击，而身为 Java 程序员的你，或许在口水战中落了下风，忿忿于没有足够的知识武装自己；又或许想要深入学习 Java 语言，却又无从下手。甚至是在实践中被 Java 的启动性能、内存耗费所震惊，因此对 Java 语言本身产生了种种的怀疑与顾虑。</p>

<p>别担心，我就是来解答你对 Java 的种种疑虑的。“知其然”也要“知其所以然”，学习 Java 虚拟机的本质，更多是了解 Java 程序是如何被执行且优化的。这样一来，你才可以从内部入手，达到高效编程的目的。与此同时，你也可以为学习更深层级、更为核心的 Java 技术打好基础。</p>

<p>我相信在不少程序员的观念里，Java 虚拟机是透明的。在大家看来，我们仅需知道 Java 核心类库，以及第三方类库里 API 的用法，便可以专注于实现具体业务，并且依赖 Java 虚拟机自动执行乃至优化我们的应用程序。那么，我们还需要了解 Java 虚拟机吗？</p>

<p>我认为是非常有必要的。如果我们把核心类库的 API 比做数学公式的话，那么 Java 虚拟机的知识就好比公式的推导过程。掌握数学公式固然可以应付考试，但是了解背后的推导过程更加有助于记忆和理解。并且，在遇到那些没法套公式的情况下，我们也能知道如何解决。</p>

<p>具体来说，了解 Java 虚拟机有如下（但不限于）好处。</p>

<p>首先，Java 虚拟机提供了许多配置参数，用于满足不同应用场景下，对程序性能的需求。学习 Java 虚拟机，你可以针对自己的应用，最优化匹配运行参数。（你可以用下面这个例子看一下自己虚拟机的参数列表。）</p>

<pre><code>举例来说，macOS 上的 Java 10 共有近千个配置参数：
 
$ java -XX:+PrintFlagsFinal -XX:+UnlockDiagnosticVMOptions -version | wc -l
java version &quot;10&quot; 2018-03-20
Java(TM) SE Runtime Environment 18.3 (build 10+46)
Java HotSpot(TM) 64-Bit Server VM 18.3 (build 10+46, mixed mode)
     812
</code></pre>

<p>其次，Java 虚拟机本身是一种工程产品，在实现过程中自然存在不少局限性。学习 Java 虚拟机，可以更好地规避它在使用中的 Bug，也可以更快地识别出 Java 虚拟机中的错误，</p>

<p>再次，Java 虚拟机拥有当前最前沿、最成熟的垃圾回收算法实现，以及即时编译器实现。学习 Java 虚拟机，我们可以了解背后的设计决策，今后再遇到其他代码托管技术也能触类旁通。</p>

<p>最后，Java 虚拟机发展到了今天，已经脱离 Java 语言，形成了一套相对独立的、高性能的执行方案。除了 Java 外，Scala、Clojure、Groovy，以及时下热门的 Kotlin，这些语言都可以运行在 Java 虚拟机之上。学习 Java 虚拟机，便可以了解这些语言的通用机制，甚至于让这些语言共享生态系统。</p>

<p>说起写作这个专栏的初心，与我个人的经历是分不开的，我现在是甲骨文实验室的高级研究员，工作主要是负责研究如何通过程序分析技术以及动态编译技术让程序语言跑得更快。明面上，我是 Graal 编译器的核心开发者之一，在为 HotSpot 虚拟机项目拧螺丝。</p>

<p>这里顺便说明一下，Graal 编译器是 Java 10 正式引入的实验性即时编译器，在国内同行口中被戏称为“甲骨文黑科技”。当然，在我看来，我们的工作同样也是分析应用程序的性能瓶颈，寻找优化空间，只不过我们的优化方式对自动化、通用性有更高的要求。</p>

<p>加入甲骨文之前，我在瑞士卢加诺大学攻读博士学位，研究如何更加精准地监控 Java 程序，以便做出更具针对性的优化。这些研究工作均已发表在程序语言方向的顶级会议上，并获得了不少同行的认可（OOPSLA 2015 最佳论文奖）。</p>

<p>在这 7 年的学习工作生涯中，我拜读过许多大神关于 Java 虚拟机的技术博客。在受益匪浅的同时，我发觉不少文章的门槛都比较高，而且过分注重实现细节，这并不是大多数的开发人员可以受益的调优方案。这么一来，许多原本对 Java 虚拟机感兴趣的同学， 也因为过高的门槛，以及短时间内看不到的收益，而放弃了对 Java 虚拟机的学习。</p>

<p>在收到极客时间的邀请后，我决定也挑战一下 Java 虚拟机的科普工作。和其他栏目一样，我会用简单通俗的语言，来介绍 Java 虚拟机的实现。具体到每篇文章，我将采用一个贯穿全文的案例来阐述知识点，并且给出相应的调优建议。在文章的末尾，我还将附上一个动手实践的环节，帮助你巩固对知识点的理解。</p>

<p>整个专栏将分为四大模块。</p>

<ol>
<li><strong>基本原理</strong>：剖析 Java 虚拟机的运行机制，逐一介绍 Java 虚拟机的设计决策以及工程实现；</li>
<li><strong>高效实现</strong>：探索 Java 编译器，以及内嵌于 Java 虚拟机中的即时编译器，帮助你更好地理解 Java 语言特性，继而写出简洁高效的代码；</li>
<li><strong>代码优化</strong>：介绍如何利用工具定位并解决代码中的问题，以及在已有工具不适用的情况下，如何打造专属轮子；</li>
<li><strong>虚拟机黑科技</strong>：介绍甲骨文实验室近年来的前沿工作之一 GraalVM。包括如何在 JVM 上高效运行其他语言；如何混搭这些语言，实现 Polyglot；如何将这些语言事前编译（Ahead-Of-Time，AOT）成机器指令，单独运行甚至嵌入至数据库中运行。</li>
</ol>

<p>我希望借由这四个模块 36 个案例，帮助你理解 Java 虚拟机的运行机制，掌握诊断手法和调优方式。最重要的，是激发你学习 Java 虚拟机乃至其他底层工作、前沿工作的热情。</p>

<h2 id="知识框架图">知识框架图</h2>

<p><img src="assets/414248014bf825dd610c3095eed75377.jpg" alt="img" /></p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#0a666666333e3b3b3a3d4a6d676b636624696567" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f159fd438527771',t:'MTczNDA4OTQ0OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>