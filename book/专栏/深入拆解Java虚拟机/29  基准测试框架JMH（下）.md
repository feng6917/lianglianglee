<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=29&#32;&#32;基准测试框架JMH（下）>
        <link rel="icon" href="/static/favicon.png">
        <title>29  基准测试框架JMH（下） </title>
        
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
                            <h1 id="title" data-id="29  基准测试框架JMH（下）" class="title">29  基准测试框架JMH（下）</h1>
                            <div><p>今天我们来继续学习基准测试框架 JMH。</p>

<h2 id="fork-和-benchmarkmode">@Fork 和 @BenchmarkMode</h2>

<p>在上一篇的末尾，我们已经运行过由 JMH 项目编译生成的 jar 包了。下面是它的输出结果：</p>

<pre><code>$ java -jar target/benchmarks.jar
...
# JMH version: 1.21
# VM version: JDK 10.0.2, Java HotSpot(TM) 64-Bit Server VM, 10.0.2+13
# VM invoker: /Library/Java/JavaVirtualMachines/jdk-10.0.2.jdk/Contents/Home/bin/java
# VM options: &lt;none&gt;
# Warmup: 5 iterations, 10 s each
# Measurement: 5 iterations, 10 s each
# Timeout: 10 min per iteration
# Threads: 1 thread, will synchronize iterations
# Benchmark mode: Throughput, ops/time
# Benchmark: org.sample.MyBenchmark.testMethod
 
# Run progress: 0,00% complete, ETA 00:08:20
# Fork: 1 of 5
# Warmup Iteration   1: 1023500,647 ops/s
# Warmup Iteration   2: 1030767,909 ops/s
# Warmup Iteration   3: 1018212,559 ops/s
# Warmup Iteration   4: 1002045,519 ops/s
# Warmup Iteration   5: 1004210,056 ops/s
Iteration   1: 1010251,342 ops/s
Iteration   2: 1005717,344 ops/s
Iteration   3: 1004751,523 ops/s
Iteration   4: 1003034,640 ops/s
Iteration   5: 997003,830 ops/s
 
# Run progress: 20,00% complete, ETA 00:06:41
# Fork: 2 of 5
...
 
# Run progress: 80,00% complete, ETA 00:01:40
# Fork: 5 of 5
# Warmup Iteration   1: 988321,959 ops/s
# Warmup Iteration   2: 999486,531 ops/s
# Warmup Iteration   3: 1004856,886 ops/s
# Warmup Iteration   4: 1004810,860 ops/s
# Warmup Iteration   5: 1002332,077 ops/s
Iteration   1: 1011871,670 ops/s
Iteration   2: 1002653,844 ops/s
Iteration   3: 1003568,030 ops/s
Iteration   4: 1002724,752 ops/s
Iteration   5: 1001507,408 ops/s
 
 
Result &quot;org.sample.MyBenchmark.testMethod&quot;:
  1004801,393 ±(99.9%) 4055,462 ops/s [Average]
  (min, avg, max) = (992193,459, 1004801,393, 1014504,226), stdev = 5413,926
  CI (99.9%): [1000745,931, 1008856,856] (assumes normal distribution)
 
 
# Run complete. Total time: 00:08:22
 
...
 
Benchmark                Mode  Cnt        Score      Error  Units
MyBenchmark.testMethod  thrpt   25  1004801,393 ± 4055,462  ops/s
</code></pre>

<p>在上面这段输出中，我们暂且忽略最开始的 Warning 以及打印出来的配置信息，直接看接下来貌似重复的五段输出。</p>

<pre><code># Run progress: 0,00% complete, ETA 00:08:20
# Fork: 1 of 5
# Warmup Iteration   1: 1023500,647 ops/s
# Warmup Iteration   2: 1030767,909 ops/s
# Warmup Iteration   3: 1018212,559 ops/s
# Warmup Iteration   4: 1002045,519 ops/s
# Warmup Iteration   5: 1004210,056 ops/s
Iteration   1: 1010251,342 ops/s
Iteration   2: 1005717,344 ops/s
Iteration   3: 1004751,523 ops/s
Iteration   4: 1003034,640 ops/s
Iteration   5: 997003,830 ops/s
</code></pre>

<p>你应该已经留意到<code>Fork: 1 of 5</code>的字样。这里指的是 JMH 会 Fork 出一个新的 Java 虚拟机，来运行性能基准测试。</p>

<p>之所以另外启动一个 Java 虚拟机进行性能基准测试，是为了获得一个相对干净的虚拟机环境。</p>

<p>在介绍反射的那篇文章中，我就已经演示过因为类型 profile 被污染，而导致无法内联的情况。使用新的虚拟机，将极大地降低被上述情况干扰的可能性，从而保证更加精确的性能数据。</p>

<p>在介绍虚方法内联的那篇文章中，我讲解过基于类层次分析的完全内联。新启动的 Java 虚拟机，其加载的与测试无关的抽象类子类或接口实现相对较少。因此，具体是否进行完全内联将交由开发人员来决定。</p>

<p>关于这种情况，JMH 提供了一个性能测试案例 [1]。如果你感兴趣的话，可以下载下来自己跑一遍。</p>

<p>除了对即时编译器的影响之外，Fork 出新的 Java 虚拟机还会提升性能数据的准确度。</p>

<p>这主要是因为不少 Java 虚拟机的优化会带来不确定性，例如 TLAB 内存分配（TLAB 的大小会变化），偏向锁、轻量锁算法，并发数据结构等。这些不确定性都可能导致不同 Java 虚拟机中运行的性能测试的结果不同，例如 JMH 这一性能的测试案例 [2]。</p>

<p>在这种情况下，通过运行更多的 Fork，并将每个 Java 虚拟机的性能测试结果平均起来，可以增强最终数据的可信度，使其误差更小。在 JMH 中，你可以通过<code>@Fork</code>注解来配置，具体如下述代码所示：</p>

<pre><code>@Fork(10)
public class MyBenchmark {
  ...
}
</code></pre>

<p>让我们回到刚刚的输出结果。每个 Fork 包含了 5 个预热迭代（warmup iteration，如<code># Warmup Iteration 1: 1023500,647 ops/s</code>）以及 5 个测试迭代（measurement iteration，如<code>Iteration   1: 1010251,342 ops/s</code>）。</p>

<p>每个迭代后都跟着一个数据，代表本次迭代的吞吐量，也就是每秒运行了多少次操作（operations/s，或 ops/s）。默认情况下，一次操作指的是调用一次测试方法<code>testMethod</code>。</p>

<p>除了吞吐量之外，我们还可以输出其他格式的性能数据，例如运行一次操作的平均时间。具体的配置方法以及对应参数如下述代码以及下表所示：</p>

<pre><code>@BenchmarkMode(Mode.AverageTime)
public class MyBenchmark {
  ...
}
</code></pre>

<p>一般来说，默认使用的吞吐量已足够满足大多数测试需求了。</p>

<h2 id="warmup-和-measurement">@Warmup 和 @Measurement</h2>

<p>之所以区分预热迭代和测试迭代，是为了在记录性能数据之前，将 Java 虚拟机带至一个稳定状态。</p>

<p>这里的稳定状态，不仅包括测试方法被即时编译成机器码，还包括 Java 虚拟机中各种自适配优化算法能够稳定下来，如前面提到的 TLAB 大小，亦或者是使用传统垃圾回收器时的 Eden 区、Survivor 区和老年代的大小。</p>

<p>一般来说，预热迭代的数目以及每次预热迭代的时间，需要由你根据所要测试的业务逻辑代码来调配。通常的做法便是在首次运行时配置较多次迭代，并监控性能数据达到稳定状态时的迭代数目。</p>

<p>不少性能评测框架都会自动检测稳定状态。它们所采用的算法是计算迭代之间的差值，如果连续几个迭代与前一迭代的差值均小于某个值，便将这几个迭代以及之后的迭代当成稳定状态。</p>

<p>这种做法有一个缺陷，那便是在达到最终稳定状态前，程序可能拥有多个中间稳定状态。例如通过 Java 上的 JavaScript 引擎 Nashorn 运行 JavaScript 代码，便可能出现多个中间稳定状态的情况。（具体可参考 Aleksey Shipilev 的 devoxx 2013 演讲 [3] 的第 21 页。）</p>

<p>总而言之，开发人员需要自行决定预热迭代的次数以及每次迭代的持续时间。</p>

<p>通常来说，我会在保持 5-10 个预热迭代的前提下（这样可以看出是否达到稳定状况），将总的预热时间优化至最少，以便节省性能测试的机器时间。（这在持续集成 / 回归测试的硬件资源跟不上代码提交速度的团队中非常重要。）</p>

<p>当确定了预热迭代的次数以及每次迭代的持续时间之后，我们便可以通过<code>@Warmup</code>注解来进行配置，如下述代码所示：</p>

<pre><code>@Warmup(iterations=10, time=100, timeUnit=TimeUnit.MILLISECONDS, batchSize=10)
public class MyBenchmark {
  ...
}
</code></pre>

<p><code>@Warmup</code>注解有四个参数，分别为预热迭代的次数<code>iterations</code>，每次迭代持续的时间<code>time</code>和<code>timeUnit</code>（前者是数值，后者是单位。例如上面代码代表的是每次迭代持续 100 毫秒），以及每次操作包含多少次对测试方法的调用<code>batchSize</code>。</p>

<p>测试迭代可通过<code>@Measurement</code>注解来进行配置。它的可配置选项和<code>@Warmup</code>的一致，这里就不再重复了。与预热迭代不同的是，每个 Fork 中测试迭代的数目越多，我们得到的性能数据也就越精确。</p>

<h2 id="state-setup-和-teardown">@State、@Setup 和 @TearDown</h2>

<p>通常来说，我们所要测试的业务逻辑只是整个应用程序中的一小部分，例如某个具体的 web app 请求。这要求在每次调用测试方法前，程序处于准备接收请求的状态。</p>

<p>我们可以把上述场景抽象一下，变成程序从某种状态到另一种状态的转换，而性能测试，便是在收集该转换的性能数据。</p>

<p>JMH 提供了<code>@State</code>注解，被它标注的类便是程序的状态。由于 JMH 将负责生成这些状态类的实例，因此，它要求状态类必须拥有无参数构造器，以及当状态类为内部类时，该状态类必须是静态的。</p>

<p>JMH 还将程序状态细分为整个虚拟机的程序状态，线程私有的程序状态，以及线程组私有的程序状态，分别对应<code>@State</code>注解的参数<code>Scope.Benchmark</code>，<code>Scope.Thread</code>和<code>Scope.Group</code>。</p>

<p>需要注意的是，这里的线程组并非 JDK 中的那个概念，而是 JMH 自己定义的概念。具体可以参考<code>@GroupThreads</code>注解 [4]，以及这个案例 [5]。</p>

<p><code>@State</code>的配置方法以及状态类的用法如下所示：</p>

<pre><code>public class MyBenchmark {
    @State(Scope.Benchmark)
    public static class MyBenchmarkState {
      String message = &quot;exception&quot;;
    }
 
    @Benchmark
    public void testMethod(MyBenchmarkState state) {
        new Exception(state.message);
    }
}
</code></pre>

<p>我们可以看到，状态类是通过方法参数的方式传入测试方法之中的。JMH 将负责把所构造的状态类实例传入该方法之中。</p>

<p>不过，如果<code>MyBenchmark</code>被标注为<code>@State</code>，那么我们可以不用在测试方法中定义额外的参数，而是直接访问<code>MyBenchmark</code>类中的实例变量。</p>

<p>和 JUnit 测试一样，我们可以在测试前初始化程序状态，在测试后校验程序状态。这两种操作分别对应<code>@Setup</code>和<code>@TearDown</code>注解，被它们标注的方法必须是状态类中的方法。</p>

<p>而且，JMH 并不限定状态类中<code>@Setup</code>方法以及<code>@TearDown</code>方法的数目。当存在多个<code>@Setup</code>方法或者<code>@TearDown</code>方法时，JMH 将按照定义的先后顺序执行。</p>

<p>JMH 对<code>@Setup</code>方法以及<code>@TearDown</code>方法的调用时机是可配置的。可供选择的粒度有在整个性能测试前后调用，在每个迭代前后调用，以及在每次调用测试方法前后调用。其中，最后一个粒度将影响测试数据的精度。</p>

<p>这三种粒度分别对应<code>@Setup</code>和<code>@TearDown</code>注解的参数<code>Level.Trial</code>，<code>Level.Iteration</code>，以及<code>Level.Invocation</code>。具体的用法如下所示：</p>

<pre><code>public class MyBenchmark {
  @State(Scope.Benchmark)
  public static class MyBenchmarkState {
    int count;
 
    @Setup(Level.Invocation)
    public void before() {
      count = 0;
    }
 
    @TearDown(Level.Invocation)
    public void after() {
      // Run with -ea
      assert count == 1 : &quot;ERROR&quot;;
    }
  }
 
  @Benchmark
  public void testMethod(MyBenchmarkState state) {
    state.count++;
  }
}
</code></pre>

<h2 id="即时编译相关功能">即时编译相关功能</h2>

<p>JMH 还提供了不少控制即时编译的功能，例如可以控制每个方法内联与否的<code>@CompilerControl</code>注解 [6]。</p>

<p>另外一个更小粒度的功能则是<code>Blackhole</code>类。它里边的<code>consume</code>方法可以防止即时编译器将所传入的值给优化掉。</p>

<p>具体的使用方法便是为被<code>@Benchmark</code>注解标注了的测试方法增添一个类型为<code>Blackhole</code>的参数，并且在测试方法的代码中调用其实例方法<code>Blackhole.consume</code>，如下述代码所示：</p>

<pre><code>@Benchmark
public void testMethod(Blackhole bh) {
  bh.consume(new Object()); // prevents escape analysis
}
</code></pre>

<p>需要注意的是，它并不会阻止对传入值的计算的优化。举个例子，在下面这段代码中，我将<code>3+4</code>的值传入<code>Blackhole.consume</code>方法中。即时编译器仍旧会进行常量折叠，而<code>Blackhole</code>将阻止即时编译器把所得到的常量值 7 给优化消除掉。</p>

<pre><code>@Benchmark
public void testMethod(Blackhole bh) {
  bh.consume(3+4);
}
</code></pre>

<p>除了防止死代码消除的<code>consume</code>之外，<code>Blackhole</code>类还提供了一个静态方法<code>consumeCPU</code>，来消耗 CPU 时间。该方法将接收一个 long 类型的参数，这个参数与所消耗的 CPU 时间呈线性相关。</p>

<h2 id="总结与实践">总结与实践</h2>

<p>今天我介绍了基准测试框架 JMH 的进阶功能。我们来回顾一下。</p>

<ul>
<li><code>@Fork</code>允许开发人员指定所要 Fork 出的 Java 虚拟机的数目。</li>
<li><code>@BenchmarkMode</code>允许指定性能数据的格式。</li>
<li><code>@Warmup</code>和<code>@Measurement</code>允许配置预热迭代或者测试迭代的数目，每个迭代的时间以及每个操作包含多少次对测试方法的调用。</li>
<li><code>@State</code>允许配置测试程序的状态。测试前对程序状态的初始化以及测试后对程序状态的恢复或者校验可分别通过<code>@Setup</code>和<code>@TearDown</code>来实现。</li>
</ul>

<hr>

<p>今天的实践环节，请逐个运行 JMH 的官方案例 [7]，具体每个案例的意义都在代码注释之中。</p>

<p>最后给大家推荐一下 Aleksey Shipilev 的 devoxx 2013 演讲（Slides[8]；视频 [9]，请自备梯子）。如果你已经完成本专栏前面两部分，特别是第二部分的学习，那么这个演讲里的绝大部分内容你应该都能理解。</p>

<p>[1] <a href="http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-samples/src/main/java/org/openjdk/jmh/samples/JMHSample_12_Forking.java" target="_blank">http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-samples/src/main/java/org/openjdk/jmh/samples/JMHSample_12_Forking.java</a>
[2] <a href="http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-samples/src/main/java/org/openjdk/jmh/samples/JMHSample_13_RunToRun.java" target="_blank">http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-samples/src/main/java/org/openjdk/jmh/samples/JMHSample_13_RunToRun.java</a>
[3] <a href="https://shipilev.net/talks/devoxx-Nov2013-benchmarking.pdf" target="_blank">https://shipilev.net/talks/devoxx-Nov2013-benchmarking.pdf</a>
[4] <a href="http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-core/src/main/java/org/openjdk/jmh/annotations/GroupThreads.java" target="_blank">http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-core/src/main/java/org/openjdk/jmh/annotations/GroupThreads.java</a>
[5] <a href="http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-samples/src/main/java/org/openjdk/jmh/samples/JMHSample_15_Asymmetric.java" target="_blank">http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-samples/src/main/java/org/openjdk/jmh/samples/JMHSample_15_Asymmetric.java</a>
[6] <a href="http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-core/src/main/java/org/openjdk/jmh/annotations/CompilerControl.java" target="_blank">http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-core/src/main/java/org/openjdk/jmh/annotations/CompilerControl.java</a>
[7] <a href="http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-samples/src/main/java/org/openjdk/jmh/samples" target="_blank">http://hg.openjdk.java.net/code-tools/jmh/file/3769055ad883/jmh-samples/src/main/java/org/openjdk/jmh/samples</a>
[8] <a href="https://shipilev.net/talks/devoxx-Nov2013-benchmarking.pdf" target="_blank">https://shipilev.net/talks/devoxx-Nov2013-benchmarking.pdf</a>
[9] <a href="https://www.youtube.com/watch?v=VaWgOCDBxYw" target="_blank">https://www.youtube.com/watch?v=VaWgOCDBxYw</a></p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#f09c9c9cc9c4c1c1c0c7b0979d91999cde939f9d" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f15a6cdbe127771',t:'MTczNDA4OTczNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>