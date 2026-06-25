<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=34&#32;关于&#32;Linux&#32;网络，你必须知道这些（下）>
        <link rel="icon" href="/static/favicon.png">
        <title>34 关于 Linux 网络，你必须知道这些（下） </title>
        
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
                        <a class="menu-item" id="00 开篇词 别再让Linux性能问题成为你的绊脚石.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/00%20%e5%bc%80%e7%af%87%e8%af%8d%20%e5%88%ab%e5%86%8d%e8%ae%a9Linux%e6%80%a7%e8%83%bd%e9%97%ae%e9%a2%98%e6%88%90%e4%b8%ba%e4%bd%a0%e7%9a%84%e7%bb%8a%e8%84%9a%e7%9f%b3.md">00 开篇词 别再让Linux性能问题成为你的绊脚石.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01 如何学习Linux性能优化？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/01%20%e5%a6%82%e4%bd%95%e5%ad%a6%e4%b9%a0Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%ef%bc%9f.md">01 如何学习Linux性能优化？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 基础篇：到底应该怎么理解“平均负载”？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/02%20%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%9a%e5%88%b0%e5%ba%95%e5%ba%94%e8%af%a5%e6%80%8e%e4%b9%88%e7%90%86%e8%a7%a3%e2%80%9c%e5%b9%b3%e5%9d%87%e8%b4%9f%e8%bd%bd%e2%80%9d%ef%bc%9f.md">02 基础篇：到底应该怎么理解“平均负载”？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 基础篇：经常说的 CPU 上下文切换是什么意思？（上）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/03%20%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%9a%e7%bb%8f%e5%b8%b8%e8%af%b4%e7%9a%84%20CPU%20%e4%b8%8a%e4%b8%8b%e6%96%87%e5%88%87%e6%8d%a2%e6%98%af%e4%bb%80%e4%b9%88%e6%84%8f%e6%80%9d%ef%bc%9f%ef%bc%88%e4%b8%8a%ef%bc%89.md">03 基础篇：经常说的 CPU 上下文切换是什么意思？（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 基础篇：经常说的 CPU 上下文切换是什么意思？（下）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/04%20%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%9a%e7%bb%8f%e5%b8%b8%e8%af%b4%e7%9a%84%20CPU%20%e4%b8%8a%e4%b8%8b%e6%96%87%e5%88%87%e6%8d%a2%e6%98%af%e4%bb%80%e4%b9%88%e6%84%8f%e6%80%9d%ef%bc%9f%ef%bc%88%e4%b8%8b%ef%bc%89.md">04 基础篇：经常说的 CPU 上下文切换是什么意思？（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 基础篇：某个应用的CPU使用率居然达到100%，我该怎么办？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/05%20%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%9a%e6%9f%90%e4%b8%aa%e5%ba%94%e7%94%a8%e7%9a%84CPU%e4%bd%bf%e7%94%a8%e7%8e%87%e5%b1%85%e7%84%b6%e8%be%be%e5%88%b0100%25%ef%bc%8c%e6%88%91%e8%af%a5%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">05 基础篇：某个应用的CPU使用率居然达到100%，我该怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 案例篇：系统的 CPU 使用率很高，但为啥却找不到高 CPU 的应用？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/06%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e7%b3%bb%e7%bb%9f%e7%9a%84%20CPU%20%e4%bd%bf%e7%94%a8%e7%8e%87%e5%be%88%e9%ab%98%ef%bc%8c%e4%bd%86%e4%b8%ba%e5%95%a5%e5%8d%b4%e6%89%be%e4%b8%8d%e5%88%b0%e9%ab%98%20CPU%20%e7%9a%84%e5%ba%94%e7%94%a8%ef%bc%9f.md">06 案例篇：系统的 CPU 使用率很高，但为啥却找不到高 CPU 的应用？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 案例篇：系统中出现大量不可中断进程和僵尸进程怎么办？（上）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/07%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e7%b3%bb%e7%bb%9f%e4%b8%ad%e5%87%ba%e7%8e%b0%e5%a4%a7%e9%87%8f%e4%b8%8d%e5%8f%af%e4%b8%ad%e6%96%ad%e8%bf%9b%e7%a8%8b%e5%92%8c%e5%83%b5%e5%b0%b8%e8%bf%9b%e7%a8%8b%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f%ef%bc%88%e4%b8%8a%ef%bc%89.md">07 案例篇：系统中出现大量不可中断进程和僵尸进程怎么办？（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 案例篇：系统中出现大量不可中断进程和僵尸进程怎么办？（下）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/08%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e7%b3%bb%e7%bb%9f%e4%b8%ad%e5%87%ba%e7%8e%b0%e5%a4%a7%e9%87%8f%e4%b8%8d%e5%8f%af%e4%b8%ad%e6%96%ad%e8%bf%9b%e7%a8%8b%e5%92%8c%e5%83%b5%e5%b0%b8%e8%bf%9b%e7%a8%8b%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f%ef%bc%88%e4%b8%8b%ef%bc%89.md">08 案例篇：系统中出现大量不可中断进程和僵尸进程怎么办？（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 基础篇：怎么理解Linux软中断？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/09%20%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%9a%e6%80%8e%e4%b9%88%e7%90%86%e8%a7%a3Linux%e8%bd%af%e4%b8%ad%e6%96%ad%ef%bc%9f.md">09 基础篇：怎么理解Linux软中断？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 案例篇：系统的软中断CPU使用率升高，我该怎么办？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/10%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e7%b3%bb%e7%bb%9f%e7%9a%84%e8%bd%af%e4%b8%ad%e6%96%adCPU%e4%bd%bf%e7%94%a8%e7%8e%87%e5%8d%87%e9%ab%98%ef%bc%8c%e6%88%91%e8%af%a5%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">10 案例篇：系统的软中断CPU使用率升高，我该怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 套路篇：如何迅速分析出系统CPU的瓶颈在哪里？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/11%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9a%e5%a6%82%e4%bd%95%e8%bf%85%e9%80%9f%e5%88%86%e6%9e%90%e5%87%ba%e7%b3%bb%e7%bb%9fCPU%e7%9a%84%e7%93%b6%e9%a2%88%e5%9c%a8%e5%93%aa%e9%87%8c%ef%bc%9f.md">11 套路篇：如何迅速分析出系统CPU的瓶颈在哪里？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 套路篇：CPU 性能优化的几个思路.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/12%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9aCPU%20%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e7%9a%84%e5%87%a0%e4%b8%aa%e6%80%9d%e8%b7%af.md">12 套路篇：CPU 性能优化的几个思路.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 答疑（一）：无法模拟出 RES 中断的问题，怎么办？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/13%20%e7%ad%94%e7%96%91%ef%bc%88%e4%b8%80%ef%bc%89%ef%bc%9a%e6%97%a0%e6%b3%95%e6%a8%a1%e6%8b%9f%e5%87%ba%20RES%20%e4%b8%ad%e6%96%ad%e7%9a%84%e9%97%ae%e9%a2%98%ef%bc%8c%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">13 答疑（一）：无法模拟出 RES 中断的问题，怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 答疑（二）：如何用perf工具分析Java程序？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/14%20%e7%ad%94%e7%96%91%ef%bc%88%e4%ba%8c%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e7%94%a8perf%e5%b7%a5%e5%85%b7%e5%88%86%e6%9e%90Java%e7%a8%8b%e5%ba%8f%ef%bc%9f.md">14 答疑（二）：如何用perf工具分析Java程序？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 基础篇：Linux内存是怎么工作的？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/15%20%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%9aLinux%e5%86%85%e5%ad%98%e6%98%af%e6%80%8e%e4%b9%88%e5%b7%a5%e4%bd%9c%e7%9a%84%ef%bc%9f.md">15 基础篇：Linux内存是怎么工作的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 基础篇：怎么理解内存中的Buffer和Cache？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/16%20%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%9a%e6%80%8e%e4%b9%88%e7%90%86%e8%a7%a3%e5%86%85%e5%ad%98%e4%b8%ad%e7%9a%84Buffer%e5%92%8cCache%ef%bc%9f.md">16 基础篇：怎么理解内存中的Buffer和Cache？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 案例篇：如何利用系统缓存优化程序的运行效率？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/17%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e5%a6%82%e4%bd%95%e5%88%a9%e7%94%a8%e7%b3%bb%e7%bb%9f%e7%bc%93%e5%ad%98%e4%bc%98%e5%8c%96%e7%a8%8b%e5%ba%8f%e7%9a%84%e8%bf%90%e8%a1%8c%e6%95%88%e7%8e%87%ef%bc%9f.md">17 案例篇：如何利用系统缓存优化程序的运行效率？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 案例篇：内存泄漏了，我该如何定位和处理？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/18%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e5%86%85%e5%ad%98%e6%b3%84%e6%bc%8f%e4%ba%86%ef%bc%8c%e6%88%91%e8%af%a5%e5%a6%82%e4%bd%95%e5%ae%9a%e4%bd%8d%e5%92%8c%e5%a4%84%e7%90%86%ef%bc%9f.md">18 案例篇：内存泄漏了，我该如何定位和处理？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 案例篇：为什么系统的Swap变高了（上）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/19%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e4%b8%ba%e4%bb%80%e4%b9%88%e7%b3%bb%e7%bb%9f%e7%9a%84Swap%e5%8f%98%e9%ab%98%e4%ba%86%ef%bc%88%e4%b8%8a%ef%bc%89.md">19 案例篇：为什么系统的Swap变高了（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 案例篇：为什么系统的Swap变高了？（下）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/20%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e4%b8%ba%e4%bb%80%e4%b9%88%e7%b3%bb%e7%bb%9f%e7%9a%84Swap%e5%8f%98%e9%ab%98%e4%ba%86%ef%bc%9f%ef%bc%88%e4%b8%8b%ef%bc%89.md">20 案例篇：为什么系统的Swap变高了？（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 套路篇：如何“快准狠”找到系统内存的问题？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/21%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9a%e5%a6%82%e4%bd%95%e2%80%9c%e5%bf%ab%e5%87%86%e7%8b%a0%e2%80%9d%e6%89%be%e5%88%b0%e7%b3%bb%e7%bb%9f%e5%86%85%e5%ad%98%e7%9a%84%e9%97%ae%e9%a2%98%ef%bc%9f.md">21 套路篇：如何“快准狠”找到系统内存的问题？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 答疑（三）：文件系统与磁盘的区别是什么？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/22%20%e7%ad%94%e7%96%91%ef%bc%88%e4%b8%89%ef%bc%89%ef%bc%9a%e6%96%87%e4%bb%b6%e7%b3%bb%e7%bb%9f%e4%b8%8e%e7%a3%81%e7%9b%98%e7%9a%84%e5%8c%ba%e5%88%ab%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f.md">22 答疑（三）：文件系统与磁盘的区别是什么？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 基础篇：Linux 文件系统是怎么工作的？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/23%20%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%9aLinux%20%e6%96%87%e4%bb%b6%e7%b3%bb%e7%bb%9f%e6%98%af%e6%80%8e%e4%b9%88%e5%b7%a5%e4%bd%9c%e7%9a%84%ef%bc%9f.md">23 基础篇：Linux 文件系统是怎么工作的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 基础篇：Linux 磁盘I_O是怎么工作的（上）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/24%20%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%9aLinux%20%e7%a3%81%e7%9b%98I_O%e6%98%af%e6%80%8e%e4%b9%88%e5%b7%a5%e4%bd%9c%e7%9a%84%ef%bc%88%e4%b8%8a%ef%bc%89.md">24 基础篇：Linux 磁盘I_O是怎么工作的（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25 基础篇：Linux 磁盘I_O是怎么工作的（下）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/25%20%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%9aLinux%20%e7%a3%81%e7%9b%98I_O%e6%98%af%e6%80%8e%e4%b9%88%e5%b7%a5%e4%bd%9c%e7%9a%84%ef%bc%88%e4%b8%8b%ef%bc%89.md">25 基础篇：Linux 磁盘I_O是怎么工作的（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 案例篇：如何找出狂打日志的“内鬼”？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/26%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e5%a6%82%e4%bd%95%e6%89%be%e5%87%ba%e7%8b%82%e6%89%93%e6%97%a5%e5%bf%97%e7%9a%84%e2%80%9c%e5%86%85%e9%ac%bc%e2%80%9d%ef%bc%9f.md">26 案例篇：如何找出狂打日志的“内鬼”？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 案例篇：为什么我的磁盘I_O延迟很高？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/27%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e4%b8%ba%e4%bb%80%e4%b9%88%e6%88%91%e7%9a%84%e7%a3%81%e7%9b%98I_O%e5%bb%b6%e8%bf%9f%e5%be%88%e9%ab%98%ef%bc%9f.md">27 案例篇：为什么我的磁盘I_O延迟很高？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 案例篇：一个SQL查询要15秒，这是怎么回事？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/28%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e4%b8%80%e4%b8%aaSQL%e6%9f%a5%e8%af%a2%e8%a6%8115%e7%a7%92%ef%bc%8c%e8%bf%99%e6%98%af%e6%80%8e%e4%b9%88%e5%9b%9e%e4%ba%8b%ef%bc%9f.md">28 案例篇：一个SQL查询要15秒，这是怎么回事？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 案例篇：Redis响应严重延迟，如何解决？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/29%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9aRedis%e5%93%8d%e5%ba%94%e4%b8%a5%e9%87%8d%e5%bb%b6%e8%bf%9f%ef%bc%8c%e5%a6%82%e4%bd%95%e8%a7%a3%e5%86%b3%ef%bc%9f.md">29 案例篇：Redis响应严重延迟，如何解决？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30 套路篇：如何迅速分析出系统I_O的瓶颈在哪里？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/30%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9a%e5%a6%82%e4%bd%95%e8%bf%85%e9%80%9f%e5%88%86%e6%9e%90%e5%87%ba%e7%b3%bb%e7%bb%9fI_O%e7%9a%84%e7%93%b6%e9%a2%88%e5%9c%a8%e5%93%aa%e9%87%8c%ef%bc%9f.md">30 套路篇：如何迅速分析出系统I_O的瓶颈在哪里？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31 套路篇：磁盘 I_O 性能优化的几个思路.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/31%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9a%e7%a3%81%e7%9b%98%20I_O%20%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e7%9a%84%e5%87%a0%e4%b8%aa%e6%80%9d%e8%b7%af.md">31 套路篇：磁盘 I_O 性能优化的几个思路.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32 答疑（四）：阻塞、非阻塞 I_O 与同步、异步 I_O 的区别和联系.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/32%20%e7%ad%94%e7%96%91%ef%bc%88%e5%9b%9b%ef%bc%89%ef%bc%9a%e9%98%bb%e5%a1%9e%e3%80%81%e9%9d%9e%e9%98%bb%e5%a1%9e%20I_O%20%e4%b8%8e%e5%90%8c%e6%ad%a5%e3%80%81%e5%bc%82%e6%ad%a5%20I_O%20%e7%9a%84%e5%8c%ba%e5%88%ab%e5%92%8c%e8%81%94%e7%b3%bb.md">32 答疑（四）：阻塞、非阻塞 I_O 与同步、异步 I_O 的区别和联系.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33 关于 Linux 网络，你必须知道这些（上）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/33%20%e5%85%b3%e4%ba%8e%20Linux%20%e7%bd%91%e7%bb%9c%ef%bc%8c%e4%bd%a0%e5%bf%85%e9%a1%bb%e7%9f%a5%e9%81%93%e8%bf%99%e4%ba%9b%ef%bc%88%e4%b8%8a%ef%bc%89.md">33 关于 Linux 网络，你必须知道这些（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34 关于 Linux 网络，你必须知道这些（下）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/34%20%e5%85%b3%e4%ba%8e%20Linux%20%e7%bd%91%e7%bb%9c%ef%bc%8c%e4%bd%a0%e5%bf%85%e9%a1%bb%e7%9f%a5%e9%81%93%e8%bf%99%e4%ba%9b%ef%bc%88%e4%b8%8b%ef%bc%89.md">34 关于 Linux 网络，你必须知道这些（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35 基础篇：C10K 和 C1000K 回顾.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/35%20%e5%9f%ba%e7%a1%80%e7%af%87%ef%bc%9aC10K%20%e5%92%8c%20C1000K%20%e5%9b%9e%e9%a1%be.md">35 基础篇：C10K 和 C1000K 回顾.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36 套路篇：怎么评估系统的网络性能？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/36%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9a%e6%80%8e%e4%b9%88%e8%af%84%e4%bc%b0%e7%b3%bb%e7%bb%9f%e7%9a%84%e7%bd%91%e7%bb%9c%e6%80%a7%e8%83%bd%ef%bc%9f.md">36 套路篇：怎么评估系统的网络性能？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37 案例篇：DNS 解析时快时慢，我该怎么办？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/37%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9aDNS%20%e8%a7%a3%e6%9e%90%e6%97%b6%e5%bf%ab%e6%97%b6%e6%85%a2%ef%bc%8c%e6%88%91%e8%af%a5%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">37 案例篇：DNS 解析时快时慢，我该怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38 案例篇：怎么使用 tcpdump 和 Wireshark 分析网络流量？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/38%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e6%80%8e%e4%b9%88%e4%bd%bf%e7%94%a8%20tcpdump%20%e5%92%8c%20Wireshark%20%e5%88%86%e6%9e%90%e7%bd%91%e7%bb%9c%e6%b5%81%e9%87%8f%ef%bc%9f.md">38 案例篇：怎么使用 tcpdump 和 Wireshark 分析网络流量？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39 案例篇：怎么缓解 DDoS 攻击带来的性能下降问题？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/39%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e6%80%8e%e4%b9%88%e7%bc%93%e8%a7%a3%20DDoS%20%e6%94%bb%e5%87%bb%e5%b8%a6%e6%9d%a5%e7%9a%84%e6%80%a7%e8%83%bd%e4%b8%8b%e9%99%8d%e9%97%ae%e9%a2%98%ef%bc%9f.md">39 案例篇：怎么缓解 DDoS 攻击带来的性能下降问题？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40 案例篇：网络请求延迟变大了，我该怎么办？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/40%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e7%bd%91%e7%bb%9c%e8%af%b7%e6%b1%82%e5%bb%b6%e8%bf%9f%e5%8f%98%e5%a4%a7%e4%ba%86%ef%bc%8c%e6%88%91%e8%af%a5%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">40 案例篇：网络请求延迟变大了，我该怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="41 案例篇：如何优化 NAT 性能？（上）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/41%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e5%a6%82%e4%bd%95%e4%bc%98%e5%8c%96%20NAT%20%e6%80%a7%e8%83%bd%ef%bc%9f%ef%bc%88%e4%b8%8a%ef%bc%89.md">41 案例篇：如何优化 NAT 性能？（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="42 案例篇：如何优化 NAT 性能？（下）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/42%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e5%a6%82%e4%bd%95%e4%bc%98%e5%8c%96%20NAT%20%e6%80%a7%e8%83%bd%ef%bc%9f%ef%bc%88%e4%b8%8b%ef%bc%89.md">42 案例篇：如何优化 NAT 性能？（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="43 套路篇：网络性能优化的几个思路（上）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/43%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9a%e7%bd%91%e7%bb%9c%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e7%9a%84%e5%87%a0%e4%b8%aa%e6%80%9d%e8%b7%af%ef%bc%88%e4%b8%8a%ef%bc%89.md">43 套路篇：网络性能优化的几个思路（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="44 套路篇：网络性能优化的几个思路（下）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/44%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9a%e7%bd%91%e7%bb%9c%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e7%9a%84%e5%87%a0%e4%b8%aa%e6%80%9d%e8%b7%af%ef%bc%88%e4%b8%8b%ef%bc%89.md">44 套路篇：网络性能优化的几个思路（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="45 答疑（五）：网络收发过程中，缓冲区位置在哪里？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/45%20%e7%ad%94%e7%96%91%ef%bc%88%e4%ba%94%ef%bc%89%ef%bc%9a%e7%bd%91%e7%bb%9c%e6%94%b6%e5%8f%91%e8%bf%87%e7%a8%8b%e4%b8%ad%ef%bc%8c%e7%bc%93%e5%86%b2%e5%8c%ba%e4%bd%8d%e7%bd%ae%e5%9c%a8%e5%93%aa%e9%87%8c%ef%bc%9f.md">45 答疑（五）：网络收发过程中，缓冲区位置在哪里？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="46 案例篇：为什么应用容器化后，启动慢了很多？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/46%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e4%b8%ba%e4%bb%80%e4%b9%88%e5%ba%94%e7%94%a8%e5%ae%b9%e5%99%a8%e5%8c%96%e5%90%8e%ef%bc%8c%e5%90%af%e5%8a%a8%e6%85%a2%e4%ba%86%e5%be%88%e5%a4%9a%ef%bc%9f.md">46 案例篇：为什么应用容器化后，启动慢了很多？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="47 案例篇：服务器总是时不时丢包，我该怎么办？（上）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/47%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e6%9c%8d%e5%8a%a1%e5%99%a8%e6%80%bb%e6%98%af%e6%97%b6%e4%b8%8d%e6%97%b6%e4%b8%a2%e5%8c%85%ef%bc%8c%e6%88%91%e8%af%a5%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f%ef%bc%88%e4%b8%8a%ef%bc%89.md">47 案例篇：服务器总是时不时丢包，我该怎么办？（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="48 案例篇：服务器总是时不时丢包，我该怎么办？（下）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/48%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e6%9c%8d%e5%8a%a1%e5%99%a8%e6%80%bb%e6%98%af%e6%97%b6%e4%b8%8d%e6%97%b6%e4%b8%a2%e5%8c%85%ef%bc%8c%e6%88%91%e8%af%a5%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f%ef%bc%88%e4%b8%8b%ef%bc%89.md">48 案例篇：服务器总是时不时丢包，我该怎么办？（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="49 案例篇：内核线程 CPU 利用率太高，我该怎么办？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/49%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e5%86%85%e6%a0%b8%e7%ba%bf%e7%a8%8b%20CPU%20%e5%88%a9%e7%94%a8%e7%8e%87%e5%a4%aa%e9%ab%98%ef%bc%8c%e6%88%91%e8%af%a5%e6%80%8e%e4%b9%88%e5%8a%9e%ef%bc%9f.md">49 案例篇：内核线程 CPU 利用率太高，我该怎么办？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="50 案例篇：动态追踪怎么用？（上）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/50%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e5%8a%a8%e6%80%81%e8%bf%bd%e8%b8%aa%e6%80%8e%e4%b9%88%e7%94%a8%ef%bc%9f%ef%bc%88%e4%b8%8a%ef%bc%89.md">50 案例篇：动态追踪怎么用？（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="51 案例篇：动态追踪怎么用？（下）.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/51%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e5%8a%a8%e6%80%81%e8%bf%bd%e8%b8%aa%e6%80%8e%e4%b9%88%e7%94%a8%ef%bc%9f%ef%bc%88%e4%b8%8b%ef%bc%89.md">51 案例篇：动态追踪怎么用？（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="52 案例篇：服务吞吐量下降很厉害，怎么分析？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/52%20%e6%a1%88%e4%be%8b%e7%af%87%ef%bc%9a%e6%9c%8d%e5%8a%a1%e5%90%9e%e5%90%90%e9%87%8f%e4%b8%8b%e9%99%8d%e5%be%88%e5%8e%89%e5%ae%b3%ef%bc%8c%e6%80%8e%e4%b9%88%e5%88%86%e6%9e%90%ef%bc%9f.md">52 案例篇：服务吞吐量下降很厉害，怎么分析？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="53 套路篇：系统监控的综合思路.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/53%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9a%e7%b3%bb%e7%bb%9f%e7%9b%91%e6%8e%a7%e7%9a%84%e7%bb%bc%e5%90%88%e6%80%9d%e8%b7%af.md">53 套路篇：系统监控的综合思路.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="54 套路篇：应用监控的一般思路.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/54%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9a%e5%ba%94%e7%94%a8%e7%9b%91%e6%8e%a7%e7%9a%84%e4%b8%80%e8%88%ac%e6%80%9d%e8%b7%af.md">54 套路篇：应用监控的一般思路.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="55 套路篇：分析性能问题的一般步骤.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/55%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9a%e5%88%86%e6%9e%90%e6%80%a7%e8%83%bd%e9%97%ae%e9%a2%98%e7%9a%84%e4%b8%80%e8%88%ac%e6%ad%a5%e9%aa%a4.md">55 套路篇：分析性能问题的一般步骤.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="56 套路篇：优化性能问题的一般方法.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/56%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9a%e4%bc%98%e5%8c%96%e6%80%a7%e8%83%bd%e9%97%ae%e9%a2%98%e7%9a%84%e4%b8%80%e8%88%ac%e6%96%b9%e6%b3%95.md">56 套路篇：优化性能问题的一般方法.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="57 套路篇：Linux 性能工具速查.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/57%20%e5%a5%97%e8%b7%af%e7%af%87%ef%bc%9aLinux%20%e6%80%a7%e8%83%bd%e5%b7%a5%e5%85%b7%e9%80%9f%e6%9f%a5.md">57 套路篇：Linux 性能工具速查.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="58 答疑（六）：容器冷启动如何性能分析？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/58%20%e7%ad%94%e7%96%91%ef%bc%88%e5%85%ad%ef%bc%89%ef%bc%9a%e5%ae%b9%e5%99%a8%e5%86%b7%e5%90%af%e5%8a%a8%e5%a6%82%e4%bd%95%e6%80%a7%e8%83%bd%e5%88%86%e6%9e%90%ef%bc%9f.md">58 答疑（六）：容器冷启动如何性能分析？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="加餐（一） 书单推荐：性能优化和Linux 系统原理.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/%e5%8a%a0%e9%a4%90%ef%bc%88%e4%b8%80%ef%bc%89%20%e4%b9%a6%e5%8d%95%e6%8e%a8%e8%8d%90%ef%bc%9a%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%92%8cLinux%20%e7%b3%bb%e7%bb%9f%e5%8e%9f%e7%90%86.md">加餐（一） 书单推荐：性能优化和Linux 系统原理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="加餐（二） 书单推荐：网络原理和 Linux 内核实现.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/%e5%8a%a0%e9%a4%90%ef%bc%88%e4%ba%8c%ef%bc%89%20%e4%b9%a6%e5%8d%95%e6%8e%a8%e8%8d%90%ef%bc%9a%e7%bd%91%e7%bb%9c%e5%8e%9f%e7%90%86%e5%92%8c%20Linux%20%e5%86%85%e6%a0%b8%e5%ae%9e%e7%8e%b0.md">加餐（二） 书单推荐：网络原理和 Linux 内核实现.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="用户故事 “半路出家 ”，也要顺利拿下性能优化！.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/%e7%94%a8%e6%88%b7%e6%95%85%e4%ba%8b%20%e2%80%9c%e5%8d%8a%e8%b7%af%e5%87%ba%e5%ae%b6%20%e2%80%9d%ef%bc%8c%e4%b9%9f%e8%a6%81%e9%a1%ba%e5%88%a9%e6%8b%bf%e4%b8%8b%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%ef%bc%81.md">用户故事 “半路出家 ”，也要顺利拿下性能优化！.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="用户故事 运维和开发工程师们怎么说？.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/%e7%94%a8%e6%88%b7%e6%95%85%e4%ba%8b%20%e8%bf%90%e7%bb%b4%e5%92%8c%e5%bc%80%e5%8f%91%e5%b7%a5%e7%a8%8b%e5%b8%88%e4%bb%ac%e6%80%8e%e4%b9%88%e8%af%b4%ef%bc%9f.md">用户故事 运维和开发工程师们怎么说？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="结束语 愿你攻克性能难关.md" href="/%e4%b8%93%e6%a0%8f/Linux%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e5%ae%9e%e6%88%98/%e7%bb%93%e6%9d%9f%e8%af%ad%20%e6%84%bf%e4%bd%a0%e6%94%bb%e5%85%8b%e6%80%a7%e8%83%bd%e9%9a%be%e5%85%b3.md">结束语 愿你攻克性能难关.md</a>
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
                            <h1 id="title" data-id="34 关于 Linux 网络，你必须知道这些（下）" class="title">34 关于 Linux 网络，你必须知道这些（下）</h1>
                            <div><p>你好，我是倪朋飞。</p>

<p>上一节，我带你学习了 Linux 网络的基础原理。简单回顾一下，Linux 网络根据 TCP/IP 模型，构建其网络协议栈。TCP/IP 模型由应用层、传输层、网络层、网络接口层等四层组成，这也是 Linux 网络栈最核心的构成部分。</p>

<p>应用程序通过套接字接口发送数据包时，先要在网络协议栈中从上到下逐层处理，然后才最终送到网卡发送出去；而接收数据包时，也要先经过网络栈从下到上的逐层处理，最后送到应用程序。</p>

<p>了解Linux 网络的基本原理和收发流程后，你肯定迫不及待想知道，如何去观察网络的性能情况。具体而言，哪些指标可以用来衡量 Linux 的网络性能呢？</p>

<h2 id="性能指标">性能指标</h2>

<p>实际上，我们通常用带宽、吞吐量、延时、PPS（Packet Per Second）等指标衡量网络的性能。</p>

<ul>
<li><p><strong>带宽</strong>，表示链路的最大传输速率，单位通常为 b/s （比特/秒）。</p></li>

<li><p><strong>吞吐量</strong>，表示单位时间内成功传输的数据量，单位通常为 b/s（比特/秒）或者 B/s（字节/秒）。吞吐量受带宽限制，而吞吐量/带宽，也就是该网络的使用率。</p></li>

<li><p><strong>延时</strong>，表示从网络请求发出后，一直到收到远端响应，所需要的时间延迟。在不同场景中，这一指标可能会有不同含义。比如，它可以表示，建立连接需要的时间（比如 TCP 握手延时），或一个数据包往返所需的时间（比如 RTT）。</p></li>

<li><p><strong>PPS</strong>，是 Packet Per Second（包/秒）的缩写，表示以网络包为单位的传输速率。PPS 通常用来评估网络的转发能力，比如硬件交换机，通常可以达到线性转发（即 PPS 可以达到或者接近理论最大值）。而基于 Linux 服务器的转发，则容易受网络包大小的影响。</p></li>
</ul>

<p>除了这些指标，<strong>网络的可用性</strong>（网络能否正常通信）、<strong>并发连接数</strong>（TCP连接数量）、<strong>丢包率</strong>（丢包百分比）、<strong>重传率</strong>（重新传输的网络包比例）等也是常用的性能指标。</p>

<p>接下来，请你打开一个终端，SSH登录到服务器上，然后跟我一起来探索、观测这些性能指标。</p>

<h2 id="网络配置"><strong>网络配置</strong></h2>

<p>分析网络问题的第一步，通常是查看网络接口的配置和状态。你可以使用 ifconfig 或者 ip 命令，来查看网络的配置。我个人更推荐使用 ip 工具，因为它提供了更丰富的功能和更易用的接口。</p>

<blockquote>
<p>ifconfig 和 ip 分别属于软件包 net-tools 和 iproute2，iproute2 是 net-tools 的下一代。通常情况下它们会在发行版中默认安装。但如果你找不到 ifconfig 或者 ip 命令，可以安装这两个软件包。</p>
</blockquote>

<p>以网络接口 eth0 为例，你可以运行下面的两个命令，查看它的配置和状态：</p>

<pre><code>$ ifconfig eth0
eth0: flags=4163&lt;UP,BROADCAST,RUNNING,MULTICAST&gt; mtu 1500
      inet 10.240.0.30 netmask 255.240.0.0 broadcast 10.255.255.255
      inet6 fe80::20d:3aff:fe07:cf2a prefixlen 64 scopeid 0x20&lt;link&gt;
      ether 78:0d:3a:07:cf:3a txqueuelen 1000 (Ethernet)
      RX packets 40809142 bytes 9542369803 (9.5 GB)
      RX errors 0 dropped 0 overruns 0 frame 0
      TX packets 32637401 bytes 4815573306 (4.8 GB)
      TX errors 0 dropped 0 overruns 0 carrier 0 collisions 0

$ ip -s addr show dev eth0
2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc mq state UP group default qlen 1000
  link/ether 78:0d:3a:07:cf:3a brd ff:ff:ff:ff:ff:ff
  inet 10.240.0.30/12 brd 10.255.255.255 scope global eth0
      valid_lft forever preferred_lft forever
  inet6 fe80::20d:3aff:fe07:cf2a/64 scope link
      valid_lft forever preferred_lft forever
  RX: bytes packets errors dropped overrun mcast
   9542432350 40809397 0       0       0       193
  TX: bytes packets errors dropped carrier collsns
   4815625265 32637658 0       0       0       0
</code></pre>

<p>你可以看到，ifconfig 和 ip 命令输出的指标基本相同，只是显示格式略微不同。比如，它们都包括了网络接口的状态标志、MTU 大小、IP、子网、MAC 地址以及网络包收发的统计信息。</p>

<p>这些具体指标的含义，在文档中都有详细的说明，不过，这里有几个跟网络性能密切相关的指标，需要你特别关注一下。</p>

<p>第一，网络接口的状态标志。ifconfig 输出中的 RUNNING ，或 ip 输出中的 LOWER_UP ，都表示物理网络是连通的，即网卡已经连接到了交换机或者路由器中。如果你看不到它们，通常表示网线被拔掉了。</p>

<p>第二，MTU 的大小。MTU 默认大小是 1500，根据网络架构的不同（比如是否使用了 VXLAN 等叠加网络），你可能需要调大或者调小 MTU 的数值。</p>

<p>第三，网络接口的 IP 地址、子网以及 MAC 地址。这些都是保障网络功能正常工作所必需的，你需要确保配置正确。</p>

<p>第四，网络收发的字节数、包数、错误数以及丢包情况，特别是 TX 和 RX 部分的 errors、dropped、overruns、carrier 以及 collisions 等指标不为 0 时，通常表示出现了网络 I/O 问题。其中：</p>

<ul>
<li><p>errors 表示发生错误的数据包数，比如校验错误、帧同步错误等；</p></li>

<li><p>dropped 表示丢弃的数据包数，即数据包已经收到了 Ring Buffer，但因为内存不足等原因丢包；</p></li>

<li><p>overruns 表示超限数据包数，即网络 I/O 速度过快，导致 Ring Buffer 中的数据包来不及处理（队列满）而导致的丢包；</p></li>

<li><p>carrier 表示发生 carrirer 错误的数据包数，比如双工模式不匹配、物理电缆出现问题等；</p></li>

<li><p>collisions 表示碰撞数据包数。</p></li>
</ul>

<h2 id="套接字信息"><strong>套接字信息</strong></h2>

<p>ifconfig 和 ip 只显示了网络接口收发数据包的统计信息，但在实际的性能问题中，网络协议栈中的统计信息，我们也必须关注。你可以用 netstat 或者 ss ，来查看套接字、网络栈、网络接口以及路由表的信息。</p>

<p>我个人更推荐，使用 ss 来查询网络的连接信息，因为它比 netstat 提供了更好的性能（速度更快）。</p>

<p>比如，你可以执行下面的命令，查询套接字信息：</p>

<pre><code># head -n 3 表示只显示前面3行
# -l 表示只显示监听套接字
# -n 表示显示数字地址和端口(而不是名字)
# -p 表示显示进程信息
$ netstat -nlp | head -n 3
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 127.0.0.53:53           0.0.0.0:*               LISTEN      840/systemd-resolve

# -l 表示只显示监听套接字
# -t 表示只显示 TCP 套接字
# -n 表示显示数字地址和端口(而不是名字)
# -p 表示显示进程信息
$ ss -ltnp | head -n 3
State    Recv-Q    Send-Q        Local Address:Port        Peer Address:Port
LISTEN   0         128           127.0.0.53%lo:53               0.0.0.0:*        users:((&quot;systemd-resolve&quot;,pid=840,fd=13))
LISTEN   0         128                 0.0.0.0:22               0.0.0.0:*        users:((&quot;sshd&quot;,pid=1459,fd=3))
</code></pre>

<p>netstat 和 ss 的输出也是类似的，都展示了套接字的状态、接收队列、发送队列、本地地址、远端地址、进程 PID 和进程名称等。</p>

<p>其中，接收队列（Recv-Q）和发送队列（Send-Q）需要你特别关注，它们通常应该是 0。当你发现它们不是 0 时，说明有网络包的堆积发生。当然还要注意，在不同套接字状态下，它们的含义不同。</p>

<p>当套接字处于连接状态（Established）时，</p>

<ul>
<li><p>Recv-Q 表示套接字缓冲还没有被应用程序取走的字节数（即接收队列长度）。</p></li>

<li><p>而 Send-Q 表示还没有被远端主机确认的字节数（即发送队列长度）。</p></li>
</ul>

<p>当套接字处于监听状态（Listening）时，</p>

<ul>
<li><p>Recv-Q 表示全连接队列的长度。</p></li>

<li><p>而 Send-Q 表示全连接队列的最大长度。</p></li>
</ul>

<p>所谓全连接，是指服务器收到了客户端的 ACK，完成了 TCP 三次握手，然后就会把这个连接挪到全连接队列中。这些全连接中的套接字，还需要被 accept() 系统调用取走，服务器才可以开始真正处理客户端的请求。</p>

<p>与全连接队列相对应的，还有一个半连接队列。所谓半连接是指还没有完成 TCP 三次握手的连接，连接只进行了一半。服务器收到了客户端的 SYN 包后，就会把这个连接放到半连接队列中，然后再向客户端发送 SYN+ACK 包。</p>

<h2 id="协议栈统计信息"><strong>协议栈统计信息</strong></h2>

<p>类似的，使用 netstat 或 ss ，也可以查看协议栈的信息：</p>

<pre><code>$ netstat -s
...
Tcp:
    3244906 active connection openings
    23143 passive connection openings
    115732 failed connection attempts
    2964 connection resets received
    1 connections established
    13025010 segments received
    17606946 segments sent out
    44438 segments retransmitted
    42 bad segments received
    5315 resets sent
    InCsumErrors: 42
...

$ ss -s
Total: 186 (kernel 1446)
TCP:   4 (estab 1, closed 0, orphaned 0, synrecv 0, timewait 0/0), ports 0

Transport Total     IP        IPv6
*	  1446      -         -
RAW	  2         1         1
UDP	  2         2         0
TCP	  4         3         1
...
</code></pre>

<p>这些协议栈的统计信息都很直观。ss 只显示已经连接、关闭、孤儿套接字等简要统计，而netstat 则提供的是更详细的网络协议栈信息。</p>

<p>比如，上面 netstat 的输出示例，就展示了 TCP 协议的主动连接、被动连接、失败重试、发送和接收的分段数量等各种信息。</p>

<h2 id="网络吞吐和-pps"><strong>网络吞吐和 PPS</strong></h2>

<p>接下来，我们再来看看，如何查看系统当前的网络吞吐量和 PPS。在这里，我推荐使用我们的老朋友 sar，在前面的 CPU、内存和 I/O 模块中，我们已经多次用到它。</p>

<p>给 sar 增加 -n 参数就可以查看网络的统计信息，比如网络接口（DEV）、网络接口错误（EDEV）、TCP、UDP、ICMP 等等。执行下面的命令，你就可以得到网络接口统计信息：</p>

<pre><code># 数字1表示每隔1秒输出一组数据
$ sar -n DEV 1
Linux 4.15.0-1035 (ubuntu) 	01/06/19 	_x86_64_	(2 CPU)

13:21:40        IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s   %ifutil
13:21:41         eth0     18.00     20.00      5.79      4.25      0.00      0.00      0.00      0.00
13:21:41      docker0      0.00      0.00      0.00      0.00      0.00      0.00      0.00      0.00
13:21:41           lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00      0.00
</code></pre>

<p>这儿输出的指标比较多，我来简单解释下它们的含义。</p>

<ul>
<li><p>rxpck/s 和 txpck/s 分别是接收和发送的 PPS，单位为包/秒。</p></li>

<li><p>rxkB/s 和 txkB/s 分别是接收和发送的吞吐量，单位是KB/秒。</p></li>

<li><p>rxcmp/s 和 txcmp/s 分别是接收和发送的压缩数据包数，单位是包/秒。</p></li>

<li><p>%ifutil 是网络接口的使用率，即半双工模式下为 (rxkB/s+txkB/s)/Bandwidth，而全双工模式下为 max(rxkB/s, txkB/s)/Bandwidth。</p></li>
</ul>

<p>其中，Bandwidth 可以用 ethtool 来查询，它的单位通常是 Gb/s 或者 Mb/s，不过注意这里小写字母 b ，表示比特而不是字节。我们通常提到的千兆网卡、万兆网卡等，单位也都是比特。如下你可以看到，我的 eth0 网卡就是一个千兆网卡：</p>

<pre><code>$ ethtool eth0 | grep Speed
	Speed: 1000Mb/s
</code></pre>

<h2 id="连通性和延时"><strong>连通性和延时</strong></h2>

<p>最后，我们通常使用 ping ，来测试远程主机的连通性和延时，而这基于 ICMP 协议。比如，执行下面的命令，你就可以测试本机到 114.114.114.114 这个 IP 地址的连通性和延时：</p>

<pre><code># -c3表示发送三次ICMP包后停止
$ ping -c3 114.114.114.114
PING 114.114.114.114 (114.114.114.114) 56(84) bytes of data.
64 bytes from 114.114.114.114: icmp_seq=1 ttl=54 time=244 ms
64 bytes from 114.114.114.114: icmp_seq=2 ttl=47 time=244 ms
64 bytes from 114.114.114.114: icmp_seq=3 ttl=67 time=244 ms

--- 114.114.114.114 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2001ms
rtt min/avg/max/mdev = 244.023/244.070/244.105/0.034 ms
</code></pre>

<p>ping 的输出，可以分为两部分。</p>

<ul>
<li><p>第一部分，是每个 ICMP 请求的信息，包括 ICMP 序列号（icmp_seq）、TTL（生存时间，或者跳数）以及往返延时。</p></li>

<li><p>第二部分，则是三次 ICMP 请求的汇总。</p></li>
</ul>

<p>比如上面的示例显示，发送了 3 个网络包，并且接收到 3 个响应，没有丢包发生，这说明测试主机到 114.114.114.114 是连通的；平均往返延时（RTT）是 244ms，也就是从发送 ICMP 开始，到接收到 114.114.114.114 回复的确认，总共经历 244ms。</p>

<h2 id="小结">小结</h2>

<p>我们通常使用带宽、吞吐量、延时等指标，来衡量网络的性能；相应的，你可以用 ifconfig、netstat、ss、sar、ping 等工具，来查看这些网络的性能指标。</p>

<p>在下一节中，我将以经典的 C10K 和 C100K 问题，带你进一步深入 Linux 网络的工作原理。</p>

<h2 id="思考">思考</h2>

<p>最后，我想请你来聊聊，你理解的 Linux 网络性能。你常用什么指标来衡量网络的性能？又用什么思路分析相应性能问题呢？你可以结合今天学到的知识，提出自己的观点。</p>

<p>欢迎在留言区和我讨论，也欢迎你把这篇文章分享给你的同事、朋友。我们一起在实战中演练，在交流中进步。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#8ce0e0e0b5b8bdbdbcbbccebe1ede5e0a2efe3e1" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f10ee9d5a056365',t:'MTczNDA0MDI0Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>