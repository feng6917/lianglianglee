<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=41&#32;十字路口上的Kubernetes默认调度器>
        <link rel="icon" href="/static/favicon.png">
        <title>41 十字路口上的Kubernetes默认调度器 </title>
        
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
                        <a class="menu-item" id="00 开篇词 打通“容器技术”的任督二脉.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/00%20%e5%bc%80%e7%af%87%e8%af%8d%20%e6%89%93%e9%80%9a%e2%80%9c%e5%ae%b9%e5%99%a8%e6%8a%80%e6%9c%af%e2%80%9d%e7%9a%84%e4%bb%bb%e7%9d%a3%e4%ba%8c%e8%84%89.md">00 开篇词 打通“容器技术”的任督二脉.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01 预习篇 · 小鲸鱼大事记（一）：初出茅庐.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/01%20%e9%a2%84%e4%b9%a0%e7%af%87%20%c2%b7%20%e5%b0%8f%e9%b2%b8%e9%b1%bc%e5%a4%a7%e4%ba%8b%e8%ae%b0%ef%bc%88%e4%b8%80%ef%bc%89%ef%bc%9a%e5%88%9d%e5%87%ba%e8%8c%85%e5%ba%90.md">01 预习篇 · 小鲸鱼大事记（一）：初出茅庐.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 预习篇 · 小鲸鱼大事记（二）：崭露头角.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/02%20%e9%a2%84%e4%b9%a0%e7%af%87%20%c2%b7%20%e5%b0%8f%e9%b2%b8%e9%b1%bc%e5%a4%a7%e4%ba%8b%e8%ae%b0%ef%bc%88%e4%ba%8c%ef%bc%89%ef%bc%9a%e5%b4%ad%e9%9c%b2%e5%a4%b4%e8%a7%92.md">02 预习篇 · 小鲸鱼大事记（二）：崭露头角.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 预习篇 · 小鲸鱼大事记（三）：群雄并起.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/03%20%e9%a2%84%e4%b9%a0%e7%af%87%20%c2%b7%20%e5%b0%8f%e9%b2%b8%e9%b1%bc%e5%a4%a7%e4%ba%8b%e8%ae%b0%ef%bc%88%e4%b8%89%ef%bc%89%ef%bc%9a%e7%be%a4%e9%9b%84%e5%b9%b6%e8%b5%b7.md">03 预习篇 · 小鲸鱼大事记（三）：群雄并起.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 预习篇 · 小鲸鱼大事记（四）：尘埃落定.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/04%20%e9%a2%84%e4%b9%a0%e7%af%87%20%c2%b7%20%e5%b0%8f%e9%b2%b8%e9%b1%bc%e5%a4%a7%e4%ba%8b%e8%ae%b0%ef%bc%88%e5%9b%9b%ef%bc%89%ef%bc%9a%e5%b0%98%e5%9f%83%e8%90%bd%e5%ae%9a.md">04 预习篇 · 小鲸鱼大事记（四）：尘埃落定.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 白话容器基础（一）：从进程说开去.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/05%20%e7%99%bd%e8%af%9d%e5%ae%b9%e5%99%a8%e5%9f%ba%e7%a1%80%ef%bc%88%e4%b8%80%ef%bc%89%ef%bc%9a%e4%bb%8e%e8%bf%9b%e7%a8%8b%e8%af%b4%e5%bc%80%e5%8e%bb.md">05 白话容器基础（一）：从进程说开去.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 白话容器基础（二）：隔离与限制.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/06%20%e7%99%bd%e8%af%9d%e5%ae%b9%e5%99%a8%e5%9f%ba%e7%a1%80%ef%bc%88%e4%ba%8c%ef%bc%89%ef%bc%9a%e9%9a%94%e7%a6%bb%e4%b8%8e%e9%99%90%e5%88%b6.md">06 白话容器基础（二）：隔离与限制.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 白话容器基础（三）：深入理解容器镜像.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/07%20%e7%99%bd%e8%af%9d%e5%ae%b9%e5%99%a8%e5%9f%ba%e7%a1%80%ef%bc%88%e4%b8%89%ef%bc%89%ef%bc%9a%e6%b7%b1%e5%85%a5%e7%90%86%e8%a7%a3%e5%ae%b9%e5%99%a8%e9%95%9c%e5%83%8f.md">07 白话容器基础（三）：深入理解容器镜像.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 白话容器基础（四）：重新认识Docker容器.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/08%20%e7%99%bd%e8%af%9d%e5%ae%b9%e5%99%a8%e5%9f%ba%e7%a1%80%ef%bc%88%e5%9b%9b%ef%bc%89%ef%bc%9a%e9%87%8d%e6%96%b0%e8%ae%a4%e8%af%86Docker%e5%ae%b9%e5%99%a8.md">08 白话容器基础（四）：重新认识Docker容器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 从容器到容器云：谈谈Kubernetes的本质.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/09%20%e4%bb%8e%e5%ae%b9%e5%99%a8%e5%88%b0%e5%ae%b9%e5%99%a8%e4%ba%91%ef%bc%9a%e8%b0%88%e8%b0%88Kubernetes%e7%9a%84%e6%9c%ac%e8%b4%a8.md">09 从容器到容器云：谈谈Kubernetes的本质.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 Kubernetes一键部署利器：kubeadm.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/10%20Kubernetes%e4%b8%80%e9%94%ae%e9%83%a8%e7%bd%b2%e5%88%a9%e5%99%a8%ef%bc%9akubeadm.md">10 Kubernetes一键部署利器：kubeadm.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 从0到1：搭建一个完整的Kubernetes集群.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/11%20%e4%bb%8e0%e5%88%b01%ef%bc%9a%e6%90%ad%e5%bb%ba%e4%b8%80%e4%b8%aa%e5%ae%8c%e6%95%b4%e7%9a%84Kubernetes%e9%9b%86%e7%be%a4.md">11 从0到1：搭建一个完整的Kubernetes集群.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 牛刀小试：我的第一个容器化应用.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/12%20%e7%89%9b%e5%88%80%e5%b0%8f%e8%af%95%ef%bc%9a%e6%88%91%e7%9a%84%e7%ac%ac%e4%b8%80%e4%b8%aa%e5%ae%b9%e5%99%a8%e5%8c%96%e5%ba%94%e7%94%a8.md">12 牛刀小试：我的第一个容器化应用.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 为什么我们需要Pod？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/13%20%e4%b8%ba%e4%bb%80%e4%b9%88%e6%88%91%e4%bb%ac%e9%9c%80%e8%a6%81Pod%ef%bc%9f.md">13 为什么我们需要Pod？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 深入解析Pod对象（一）：基本概念.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/14%20%e6%b7%b1%e5%85%a5%e8%a7%a3%e6%9e%90Pod%e5%af%b9%e8%b1%a1%ef%bc%88%e4%b8%80%ef%bc%89%ef%bc%9a%e5%9f%ba%e6%9c%ac%e6%a6%82%e5%bf%b5.md">14 深入解析Pod对象（一）：基本概念.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 深入解析Pod对象（二）：使用进阶.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/15%20%e6%b7%b1%e5%85%a5%e8%a7%a3%e6%9e%90Pod%e5%af%b9%e8%b1%a1%ef%bc%88%e4%ba%8c%ef%bc%89%ef%bc%9a%e4%bd%bf%e7%94%a8%e8%bf%9b%e9%98%b6.md">15 深入解析Pod对象（二）：使用进阶.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 编排其实很简单：谈谈“控制器”模型.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/16%20%e7%bc%96%e6%8e%92%e5%85%b6%e5%ae%9e%e5%be%88%e7%ae%80%e5%8d%95%ef%bc%9a%e8%b0%88%e8%b0%88%e2%80%9c%e6%8e%a7%e5%88%b6%e5%99%a8%e2%80%9d%e6%a8%a1%e5%9e%8b.md">16 编排其实很简单：谈谈“控制器”模型.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 经典PaaS的记忆：作业副本与水平扩展.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/17%20%e7%bb%8f%e5%85%b8PaaS%e7%9a%84%e8%ae%b0%e5%bf%86%ef%bc%9a%e4%bd%9c%e4%b8%9a%e5%89%af%e6%9c%ac%e4%b8%8e%e6%b0%b4%e5%b9%b3%e6%89%a9%e5%b1%95.md">17 经典PaaS的记忆：作业副本与水平扩展.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 深入理解StatefulSet（一）：拓扑状态.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/18%20%e6%b7%b1%e5%85%a5%e7%90%86%e8%a7%a3StatefulSet%ef%bc%88%e4%b8%80%ef%bc%89%ef%bc%9a%e6%8b%93%e6%89%91%e7%8a%b6%e6%80%81.md">18 深入理解StatefulSet（一）：拓扑状态.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 深入理解StatefulSet（二）：存储状态.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/19%20%e6%b7%b1%e5%85%a5%e7%90%86%e8%a7%a3StatefulSet%ef%bc%88%e4%ba%8c%ef%bc%89%ef%bc%9a%e5%ad%98%e5%82%a8%e7%8a%b6%e6%80%81.md">19 深入理解StatefulSet（二）：存储状态.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 深入理解StatefulSet（三）：有状态应用实践.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/20%20%e6%b7%b1%e5%85%a5%e7%90%86%e8%a7%a3StatefulSet%ef%bc%88%e4%b8%89%ef%bc%89%ef%bc%9a%e6%9c%89%e7%8a%b6%e6%80%81%e5%ba%94%e7%94%a8%e5%ae%9e%e8%b7%b5.md">20 深入理解StatefulSet（三）：有状态应用实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 容器化守护进程的意义：DaemonSet.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/21%20%e5%ae%b9%e5%99%a8%e5%8c%96%e5%ae%88%e6%8a%a4%e8%bf%9b%e7%a8%8b%e7%9a%84%e6%84%8f%e4%b9%89%ef%bc%9aDaemonSet.md">21 容器化守护进程的意义：DaemonSet.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 撬动离线业务：Job与CronJob.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/22%20%e6%92%ac%e5%8a%a8%e7%a6%bb%e7%ba%bf%e4%b8%9a%e5%8a%a1%ef%bc%9aJob%e4%b8%8eCronJob.md">22 撬动离线业务：Job与CronJob.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 声明式API与Kubernetes编程范式.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/23%20%e5%a3%b0%e6%98%8e%e5%bc%8fAPI%e4%b8%8eKubernetes%e7%bc%96%e7%a8%8b%e8%8c%83%e5%bc%8f.md">23 声明式API与Kubernetes编程范式.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 深入解析声明式API（一）：API对象的奥秘.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/24%20%e6%b7%b1%e5%85%a5%e8%a7%a3%e6%9e%90%e5%a3%b0%e6%98%8e%e5%bc%8fAPI%ef%bc%88%e4%b8%80%ef%bc%89%ef%bc%9aAPI%e5%af%b9%e8%b1%a1%e7%9a%84%e5%a5%a5%e7%a7%98.md">24 深入解析声明式API（一）：API对象的奥秘.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25 深入解析声明式API（二）：编写自定义控制器.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/25%20%e6%b7%b1%e5%85%a5%e8%a7%a3%e6%9e%90%e5%a3%b0%e6%98%8e%e5%bc%8fAPI%ef%bc%88%e4%ba%8c%ef%bc%89%ef%bc%9a%e7%bc%96%e5%86%99%e8%87%aa%e5%ae%9a%e4%b9%89%e6%8e%a7%e5%88%b6%e5%99%a8.md">25 深入解析声明式API（二）：编写自定义控制器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 基于角色的权限控制：RBAC.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/26%20%e5%9f%ba%e4%ba%8e%e8%a7%92%e8%89%b2%e7%9a%84%e6%9d%83%e9%99%90%e6%8e%a7%e5%88%b6%ef%bc%9aRBAC.md">26 基于角色的权限控制：RBAC.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 聪明的微创新：Operator工作原理解读.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/27%20%e8%81%aa%e6%98%8e%e7%9a%84%e5%be%ae%e5%88%9b%e6%96%b0%ef%bc%9aOperator%e5%b7%a5%e4%bd%9c%e5%8e%9f%e7%90%86%e8%a7%a3%e8%af%bb.md">27 聪明的微创新：Operator工作原理解读.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 PV、PVC、StorageClass，这些到底在说啥？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/28%20PV%e3%80%81PVC%e3%80%81StorageClass%ef%bc%8c%e8%bf%99%e4%ba%9b%e5%88%b0%e5%ba%95%e5%9c%a8%e8%af%b4%e5%95%a5%ef%bc%9f.md">28 PV、PVC、StorageClass，这些到底在说啥？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 PV、PVC体系是不是多此一举？从本地持久化卷谈起.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/29%20PV%e3%80%81PVC%e4%bd%93%e7%b3%bb%e6%98%af%e4%b8%8d%e6%98%af%e5%a4%9a%e6%ad%a4%e4%b8%80%e4%b8%be%ef%bc%9f%e4%bb%8e%e6%9c%ac%e5%9c%b0%e6%8c%81%e4%b9%85%e5%8c%96%e5%8d%b7%e8%b0%88%e8%b5%b7.md">29 PV、PVC体系是不是多此一举？从本地持久化卷谈起.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30 编写自己的存储插件：FlexVolume与CSI.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/30%20%e7%bc%96%e5%86%99%e8%87%aa%e5%b7%b1%e7%9a%84%e5%ad%98%e5%82%a8%e6%8f%92%e4%bb%b6%ef%bc%9aFlexVolume%e4%b8%8eCSI.md">30 编写自己的存储插件：FlexVolume与CSI.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31 容器存储实践：CSI插件编写指南.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/31%20%e5%ae%b9%e5%99%a8%e5%ad%98%e5%82%a8%e5%ae%9e%e8%b7%b5%ef%bc%9aCSI%e6%8f%92%e4%bb%b6%e7%bc%96%e5%86%99%e6%8c%87%e5%8d%97.md">31 容器存储实践：CSI插件编写指南.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32 浅谈容器网络.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/32%20%e6%b5%85%e8%b0%88%e5%ae%b9%e5%99%a8%e7%bd%91%e7%bb%9c.md">32 浅谈容器网络.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33 深入解析容器跨主机网络.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/33%20%e6%b7%b1%e5%85%a5%e8%a7%a3%e6%9e%90%e5%ae%b9%e5%99%a8%e8%b7%a8%e4%b8%bb%e6%9c%ba%e7%bd%91%e7%bb%9c.md">33 深入解析容器跨主机网络.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34 Kubernetes网络模型与CNI网络插件.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/34%20Kubernetes%e7%bd%91%e7%bb%9c%e6%a8%a1%e5%9e%8b%e4%b8%8eCNI%e7%bd%91%e7%bb%9c%e6%8f%92%e4%bb%b6.md">34 Kubernetes网络模型与CNI网络插件.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35 解读Kubernetes三层网络方案.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/35%20%e8%a7%a3%e8%af%bbKubernetes%e4%b8%89%e5%b1%82%e7%bd%91%e7%bb%9c%e6%96%b9%e6%a1%88.md">35 解读Kubernetes三层网络方案.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36 为什么说Kubernetes只有soft multi-tenancy？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/36%20%e4%b8%ba%e4%bb%80%e4%b9%88%e8%af%b4Kubernetes%e5%8f%aa%e6%9c%89soft%20multi-tenancy%ef%bc%9f.md">36 为什么说Kubernetes只有soft multi-tenancy？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37 找到容器不容易：Service、DNS与服务发现.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/37%20%e6%89%be%e5%88%b0%e5%ae%b9%e5%99%a8%e4%b8%8d%e5%ae%b9%e6%98%93%ef%bc%9aService%e3%80%81DNS%e4%b8%8e%e6%9c%8d%e5%8a%a1%e5%8f%91%e7%8e%b0.md">37 找到容器不容易：Service、DNS与服务发现.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38 从外界连通Service与Service调试“三板斧”.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/38%20%e4%bb%8e%e5%a4%96%e7%95%8c%e8%bf%9e%e9%80%9aService%e4%b8%8eService%e8%b0%83%e8%af%95%e2%80%9c%e4%b8%89%e6%9d%bf%e6%96%a7%e2%80%9d.md">38 从外界连通Service与Service调试“三板斧”.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39 谈谈Service与Ingress.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/39%20%e8%b0%88%e8%b0%88Service%e4%b8%8eIngress.md">39 谈谈Service与Ingress.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40 Kubernetes的资源模型与资源管理.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/40%20Kubernetes%e7%9a%84%e8%b5%84%e6%ba%90%e6%a8%a1%e5%9e%8b%e4%b8%8e%e8%b5%84%e6%ba%90%e7%ae%a1%e7%90%86.md">40 Kubernetes的资源模型与资源管理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="41 十字路口上的Kubernetes默认调度器.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/41%20%e5%8d%81%e5%ad%97%e8%b7%af%e5%8f%a3%e4%b8%8a%e7%9a%84Kubernetes%e9%bb%98%e8%ae%a4%e8%b0%83%e5%ba%a6%e5%99%a8.md">41 十字路口上的Kubernetes默认调度器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="42 Kubernetes默认调度器调度策略解析.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/42%20Kubernetes%e9%bb%98%e8%ae%a4%e8%b0%83%e5%ba%a6%e5%99%a8%e8%b0%83%e5%ba%a6%e7%ad%96%e7%95%a5%e8%a7%a3%e6%9e%90.md">42 Kubernetes默认调度器调度策略解析.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="43 Kubernetes默认调度器的优先级与抢占机制.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/43%20Kubernetes%e9%bb%98%e8%ae%a4%e8%b0%83%e5%ba%a6%e5%99%a8%e7%9a%84%e4%bc%98%e5%85%88%e7%ba%a7%e4%b8%8e%e6%8a%a2%e5%8d%a0%e6%9c%ba%e5%88%b6.md">43 Kubernetes默认调度器的优先级与抢占机制.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="44 Kubernetes GPU管理与Device Plugin机制.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/44%20Kubernetes%20GPU%e7%ae%a1%e7%90%86%e4%b8%8eDevice%20Plugin%e6%9c%ba%e5%88%b6.md">44 Kubernetes GPU管理与Device Plugin机制.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="45 幕后英雄：SIG-Node与CRI.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/45%20%e5%b9%95%e5%90%8e%e8%8b%b1%e9%9b%84%ef%bc%9aSIG-Node%e4%b8%8eCRI.md">45 幕后英雄：SIG-Node与CRI.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="46 解读 CRI 与 容器运行时.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/46%20%e8%a7%a3%e8%af%bb%20CRI%20%e4%b8%8e%20%e5%ae%b9%e5%99%a8%e8%bf%90%e8%a1%8c%e6%97%b6.md">46 解读 CRI 与 容器运行时.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="47 绝不仅仅是安全：Kata Containers 与 gVisor.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/47%20%e7%bb%9d%e4%b8%8d%e4%bb%85%e4%bb%85%e6%98%af%e5%ae%89%e5%85%a8%ef%bc%9aKata%20Containers%20%e4%b8%8e%20gVisor.md">47 绝不仅仅是安全：Kata Containers 与 gVisor.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="48 Prometheus、Metrics Server与Kubernetes监控体系.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/48%20Prometheus%e3%80%81Metrics%20Server%e4%b8%8eKubernetes%e7%9b%91%e6%8e%a7%e4%bd%93%e7%b3%bb.md">48 Prometheus、Metrics Server与Kubernetes监控体系.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="49 Custom Metrics_ 让Auto Scaling不再“食之无味”.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/49%20Custom%20Metrics_%20%e8%ae%a9Auto%20Scaling%e4%b8%8d%e5%86%8d%e2%80%9c%e9%a3%9f%e4%b9%8b%e6%97%a0%e5%91%b3%e2%80%9d.md">49 Custom Metrics_ 让Auto Scaling不再“食之无味”.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="50 让日志无处可逃：容器日志收集与管理.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/50%20%e8%ae%a9%e6%97%a5%e5%bf%97%e6%97%a0%e5%a4%84%e5%8f%af%e9%80%83%ef%bc%9a%e5%ae%b9%e5%99%a8%e6%97%a5%e5%bf%97%e6%94%b6%e9%9b%86%e4%b8%8e%e7%ae%a1%e7%90%86.md">50 让日志无处可逃：容器日志收集与管理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="51 谈谈Kubernetes开源社区和未来走向.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/51%20%e8%b0%88%e8%b0%88Kubernetes%e5%bc%80%e6%ba%90%e7%a4%be%e5%8c%ba%e5%92%8c%e6%9c%aa%e6%9d%a5%e8%b5%b0%e5%90%91.md">51 谈谈Kubernetes开源社区和未来走向.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="52 答疑：在问题中解决问题，在思考中产生思考.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/52%20%e7%ad%94%e7%96%91%ef%bc%9a%e5%9c%a8%e9%97%ae%e9%a2%98%e4%b8%ad%e8%a7%a3%e5%86%b3%e9%97%ae%e9%a2%98%ef%bc%8c%e5%9c%a8%e6%80%9d%e8%80%83%e4%b8%ad%e4%ba%a7%e7%94%9f%e6%80%9d%e8%80%83.md">52 答疑：在问题中解决问题，在思考中产生思考.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="特别放送 2019 年，容器技术生态会发生些什么？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/%e7%89%b9%e5%88%ab%e6%94%be%e9%80%81%202019%20%e5%b9%b4%ef%bc%8c%e5%ae%b9%e5%99%a8%e6%8a%80%e6%9c%af%e7%94%9f%e6%80%81%e4%bc%9a%e5%8f%91%e7%94%9f%e4%ba%9b%e4%bb%80%e4%b9%88%ef%bc%9f.md">特别放送 2019 年，容器技术生态会发生些什么？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="特别放送 基于 Kubernetes 的云原生应用管理，到底应该怎么做？.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/%e7%89%b9%e5%88%ab%e6%94%be%e9%80%81%20%e5%9f%ba%e4%ba%8e%20Kubernetes%20%e7%9a%84%e4%ba%91%e5%8e%9f%e7%94%9f%e5%ba%94%e7%94%a8%e7%ae%a1%e7%90%86%ef%bc%8c%e5%88%b0%e5%ba%95%e5%ba%94%e8%af%a5%e6%80%8e%e4%b9%88%e5%81%9a%ef%bc%9f.md">特别放送 基于 Kubernetes 的云原生应用管理，到底应该怎么做？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="结束语 Kubernetes：赢开发者赢天下.md" href="/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90Kubernetes/%e7%bb%93%e6%9d%9f%e8%af%ad%20Kubernetes%ef%bc%9a%e8%b5%a2%e5%bc%80%e5%8f%91%e8%80%85%e8%b5%a2%e5%a4%a9%e4%b8%8b.md">结束语 Kubernetes：赢开发者赢天下.md</a>
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
                            <h1 id="title" data-id="41 十字路口上的Kubernetes默认调度器" class="title">41 十字路口上的Kubernetes默认调度器</h1>
                            <div><p>你好，我是张磊。今天我和你分享的主题是：十字路口上的Kubernetes默认调度器。</p>

<p>在上一篇文章中，我主要为你介绍了Kubernetes里关于资源模型和资源管理的设计方法。而在今天这篇文章中，我就来为你介绍一下Kubernetes的默认调度器（default scheduler）。</p>

<p><strong>在Kubernetes项目中，默认调度器的主要职责，就是为一个新创建出来的Pod，寻找一个最合适的节点（Node）。</strong></p>

<p>而这里“最合适”的含义，包括两层：</p>

<ol>
<li><p>从集群所有的节点中，根据调度算法挑选出所有可以运行该Pod的节点；</p></li>

<li><p>从第一步的结果中，再根据调度算法挑选一个最符合条件的节点作为最终结果。</p></li>
</ol>

<p>所以在具体的调度流程中，默认调度器会首先调用一组叫作Predicate的调度算法，来检查每个Node。然后，再调用一组叫作Priority的调度算法，来给上一步得到的结果里的每个Node打分。最终的调度结果，就是得分最高的那个Node。</p>

<p>而我在前面的文章中曾经介绍过，调度器对一个Pod调度成功，实际上就是将它的spec.nodeName字段填上调度结果的节点名字。</p>

<blockquote>
<p>备注：这里你可以再回顾下第14篇文章《深入解析Pod对象（一）：基本概念》中的相关内容。</p>
</blockquote>

<p>在Kubernetes中，上述调度机制的工作原理，可以用如下所示的一幅示意图来表示。</p>

<p><img src="assets/bb95a7d4962c95d703f7c69caf53ca53.jpg" alt="" /></p>

<p>可以看到，Kubernetes的调度器的核心，实际上就是两个相互独立的控制循环。</p>

<p>其中，<strong>第一个控制循环，我们可以称之为Informer Path</strong>。它的主要目的，是启动一系列Informer，用来监听（Watch）Etcd中Pod、Node、Service等与调度相关的API对象的变化。比如，当一个待调度Pod（即：它的nodeName字段是空的）被创建出来之后，调度器就会通过Pod Informer的Handler，将这个待调度Pod添加进调度队列。</p>

<p>在默认情况下，Kubernetes的调度队列是一个PriorityQueue（优先级队列），并且当某些集群信息发生变化的时候，调度器还会对调度队列里的内容进行一些特殊操作。这里的设计，主要是出于调度优先级和抢占的考虑，我会在后面的文章中再详细介绍这部分内容。</p>

<p>此外，Kubernetes的默认调度器还要负责对调度器缓存（即：scheduler cache）进行更新。事实上，Kubernetes 调度部分进行性能优化的一个最根本原则，就是尽最大可能将集群信息Cache化，以便从根本上提高Predicate和Priority调度算法的执行效率。</p>

<p>而<strong>第二个控制循环，是调度器负责Pod调度的主循环，我们可以称之为Scheduling Path。</strong></p>

<p>Scheduling Path的主要逻辑，就是不断地从调度队列里出队一个Pod。然后，调用Predicates算法进行“过滤”。这一步“过滤”得到的一组Node，就是所有可以运行这个Pod的宿主机列表。当然，Predicates算法需要的Node信息，都是从Scheduler Cache里直接拿到的，这是调度器保证算法执行效率的主要手段之一。</p>

<p>接下来，调度器就会再调用Priorities算法为上述列表里的Node打分，分数从0到10。得分最高的Node，就会作为这次调度的结果。</p>

<p>调度算法执行完成后，调度器就需要将Pod对象的nodeName字段的值，修改为上述Node的名字。<strong>这个步骤在Kubernetes里面被称作Bind。</strong></p>

<p>但是，为了不在关键调度路径里远程访问APIServer，Kubernetes的默认调度器在Bind阶段，只会更新Scheduler Cache里的Pod和Node的信息。<strong>这种基于“乐观”假设的API对象更新方式，在Kubernetes里被称作Assume。</strong></p>

<p>Assume之后，调度器才会创建一个Goroutine来异步地向APIServer发起更新Pod的请求，来真正完成 Bind 操作。如果这次异步的Bind过程失败了，其实也没有太大关系，等Scheduler Cache同步之后一切就会恢复正常。</p>

<p>当然，正是由于上述Kubernetes调度器的“乐观”绑定的设计，当一个新的Pod完成调度需要在某个节点上运行起来之前，该节点上的kubelet还会通过一个叫作Admit的操作来再次验证该Pod是否确实能够运行在该节点上。这一步Admit操作，实际上就是把一组叫作GeneralPredicates的、最基本的调度算法，比如：“资源是否可用”“端口是否冲突”等再执行一遍，作为 kubelet 端的二次确认。</p>

<blockquote>
<p>备注：关于Kubernetes默认调度器的调度算法，我会在下一篇文章里为你讲解。</p>
</blockquote>

<p><strong>除了上述的“Cache化”和“乐观绑定”，Kubernetes默认调度器还有一个重要的设计，那就是“无锁化”。</strong></p>

<p>在Scheduling Path上，调度器会启动多个Goroutine以节点为粒度并发执行Predicates算法，从而提高这一阶段的执行效率。而与之类似的，Priorities算法也会以MapReduce的方式并行计算然后再进行汇总。而在这些所有需要并发的路径上，调度器会避免设置任何全局的竞争资源，从而免去了使用锁进行同步带来的巨大的性能损耗。</p>

<p>所以，在这种思想的指导下，如果你再去查看一下前面的调度器原理图，你就会发现，Kubernetes调度器只有对调度队列和Scheduler Cache进行操作时，才需要加锁。而这两部分操作，都不在Scheduling Path的算法执行路径上。</p>

<p>当然，Kubernetes调度器的上述设计思想，也是在集群规模不断增长的演进过程中逐步实现的。尤其是 <strong>“Cache化”，这个变化其实是最近几年Kubernetes调度器性能得以提升的一个关键演化。</strong></p>

<p>不过，随着Kubernetes项目发展到今天，它的默认调度器也已经来到了一个关键的十字路口。事实上，Kubernetes现今发展的主旋律，是整个开源项目的“民主化”。也就是说，Kubernetes下一步发展的方向，是组件的轻量化、接口化和插件化。所以，我们才有了CRI、CNI、CSI、CRD、Aggregated APIServer、Initializer、Device Plugin等各个层级的可扩展能力。可是，默认调度器，却成了Kubernetes项目里最后一个没有对外暴露出良好定义过的、可扩展接口的组件。</p>

<p>当然，这是有一定的历史原因的。在过去几年，Kubernetes发展的重点，都是以功能性需求的实现和完善为核心。在这个过程中，它的很多决策，还是以优先服务公有云的需求为主，而性能和规模则居于相对次要的位置。</p>

<p>而现在，随着Kubernetes项目逐步趋于稳定，越来越多的用户开始把Kubernetes用在规模更大、业务更加复杂的私有集群当中。很多以前的Mesos用户，也开始尝试使用Kubernetes来替代其原有架构。在这些场景下，对默认调度器进行扩展和重新实现，就成了社区对Kubernetes项目最主要的一个诉求。</p>

<p>所以，Kubernetes的默认调度器，是目前这个项目里为数不多的、正在经历大量重构的核心组件之一。这些正在进行的重构的目的，一方面是将默认调度器里大量的“技术债”清理干净；另一方面，就是为默认调度器的可扩展性设计进行铺垫。</p>

<p>而Kubernetes默认调度器的可扩展性设计，可以用如下所示的一幅示意图来描述：-
<img src="assets/fd17097799fe17fcbc625bf178496acd.jpg" alt="" /></p>

<p>可以看到，默认调度器的可扩展机制，在Kubernetes里面叫作Scheduler Framework。顾名思义，这个设计的主要目的，就是在调度器生命周期的各个关键点上，为用户暴露出可以进行扩展和实现的接口，从而实现由用户自定义调度器的能力。</p>

<p>上图中，每一个绿色的箭头都是一个可以插入自定义逻辑的接口。比如，上面的Queue部分，就意味着你可以在这一部分提供一个自己的调度队列的实现，从而控制每个Pod开始被调度（出队）的时机。</p>

<p>而Predicates部分，则意味着你可以提供自己的过滤算法实现，根据自己的需求，来决定选择哪些机器。</p>

<p><strong>需要注意的是，上述这些可插拔式逻辑，都是标准的Go语言插件机制（Go plugin 机制）</strong>，也就是说，你需要在编译的时候选择把哪些插件编译进去。</p>

<p>有了上述设计之后，扩展和自定义Kubernetes的默认调度器就变成了一件非常容易实现的事情。这也意味着默认调度器在后面的发展过程中，必然不会在现在的实现上再添加太多的功能，反而还会对现在的实现进行精简，最终成为Scheduler Framework的一个最小实现。而调度领域更多的创新和工程工作，就可以交给整个社区来完成了。这个思路，是完全符合我在前面提到的Kubernetes的“民主化”设计的。</p>

<p>不过，这样的Scheduler Framework也有一个不小的问题，那就是一旦这些插入点的接口设计不合理，就会导致整个生态没办法很好地把这个插件机制使用起来。而与此同时，这些接口本身的变更又是一个费时费力的过程，一旦把控不好，就很可能会把社区推向另一个极端，即：Scheduler Framework没法实际落地，大家只好都再次fork kube-scheduler。</p>

<h2 id="总结">总结</h2>

<p>在本篇文章中，我为你详细讲解了Kubernetes里默认调度器的设计与实现，分析了它现在正在经历的重构，以及未来的走向。</p>

<p>不难看到，在 Kubernetes 的整体架构中，kube-scheduler 的责任虽然重大，但其实它却是在社区里最少受到关注的组件之一。这里的原因也很简单，调度这个事情，在不同的公司和团队里的实际需求一定是大相径庭的，上游社区不可能提供一个大而全的方案出来。所以，将默认调度器进一步做轻做薄，并且插件化，才是 kube-scheduler 正确的演进方向。</p>

<h2 id="思考题">思考题</h2>

<p>请问，Kubernetes默认调度器与Mesos的“两级”调度器，有什么异同呢？</p>

<p>感谢你的收听，欢迎你给我留言，也欢迎分享给更多的朋友一起阅读。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#abc7c7c7929f9a9a9b9cebccc6cac2c785c8c4c6" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f159b8d9f427771',t:'MTczNDA4OTI3NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>