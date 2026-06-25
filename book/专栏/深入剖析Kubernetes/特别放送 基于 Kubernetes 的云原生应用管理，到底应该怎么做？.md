<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=特别放送&#32;基于&#32;Kubernetes&#32;的云原生应用管理，到底应该怎么做？>
        <link rel="icon" href="/static/favicon.png">
        <title>特别放送 基于 Kubernetes 的云原生应用管理，到底应该怎么做？ </title>
        
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
                            <h1 id="title" data-id="特别放送 基于 Kubernetes 的云原生应用管理，到底应该怎么做？" class="title">特别放送 基于 Kubernetes 的云原生应用管理，到底应该怎么做？</h1>
                            <div><p>你好，我是张磊。</p>

<p>虽然《深入剖析 Kubernetes》专栏已经完结了一段时间了，但是在留言中，很多同学依然在不时地推敲与消化专栏里的知识和案例。对此我非常开心，同时也看到大家在实践 Kubernetes的过程中存在的很多问题。所以在接下来的一段时间里，我会以 Kubernetes 最为重要的一个主线能力作为专题，对专栏内容从广度和深度两个方向上进行一系列延伸与拓展。希望这些内容，能够帮助你在探索这个全世界最受欢迎的开源生态的过程中，更加深刻地理解到 Kubernetes 项目的内涵与本质。</p>

<p>随着 Kubernetes 项目的日趋成熟与稳定，越来越多的人都在问我这样一个问题：现在的 Kubernetes 项目里，最有价值的部分到底是哪些呢？</p>

<p>为了回答这个问题，我们不妨一起回到第13篇文章<a href="https://time.geekbang.org/column/article/40092" target="_blank">《为什么我</a><a href="https://time.geekbang.org/column/article/40092" target="_blank">们需要P</a><a href="https://time.geekbang.org/column/article/40092" target="_blank">od？》</a>中，来看一下几个非常典型的用户提问。</p>

<blockquote>
<p>用户一：关于升级War和Tomcat那块，也是先修改yaml，然后Kubenertes执行升级命令，pod会重新启动，生产也是按照这种方式吗？所以这种情况下，如果只是升级个War包，或者加一个新的War包，Tomcat也要重新启动？这就不是完全松耦合了？</p>

<p>用户二：WAR包的例子并没有解决频发打包的问题吧? WAR包变动后, geektime/sample:v2包仍然需要重新打包。这和东西一股脑装在tomcat中后, 重新打tomcat 并没有差太多吧?</p>

<p>用户三：关于部署war包和tomcat，在升级war的时候，先修改yaml，然后Kubernetes会重启整个pod，然后按照定义好的容器启动顺序流程走下去？正常生产是按照这种方式进行升级的吗？</p>
</blockquote>

<p>在《为什么我们需要Pod？》这篇文章中，为了讲解 Pod 里容器间关系（即：容器设计模式）的典型场景，我举了一个“WAR 包与 Web 服务器解耦”的例子。在这个例子中，我既没有让你通过 Volume 的方式将 WAR 包挂载到 Tomcat 容器中，也没有建议你把 WAR 包和 Tomcat 打包在一个镜像里，而是用了一个 InitContainer 将 WAR 包“注入”给了Tomcat 容器。</p>

<p>不过，不同用户面对的场景不同，对问题的思考角度也不一样。所以在这一节里，大家提出了很多不同维度的问题。这些问题总结起来，其实无外乎有两个疑惑：</p>

<ol>
<li>如果 WAR 包更新了，那不是也得重新制作 WAR 包容器的镜像么？这和重新打 Tomcat 镜像有很大区别吗？</li>
<li>当用户通过 YAML 文件将 WAR 包镜像更新后，整个 Pod 不会重建么？Tomcat 需要重启么？</li>
</ol>

<p>这里的两个问题，实际上都聚焦在了这样一个对于 Kubernetes 项目至关重要的核心问题之上：<strong>基于 Kubernetes 的应用管理，到底应该怎么做？</strong></p>

<p>比如，对于第一个问题，在不同规模、不同架构的组织中，可能有着不同的看法。一般来说，如果组织的规模不大、发布和迭代次数不多的话，将 WAR 包（应用代码）的发布流程和 Tomcat （Web 服务器）的发布流程解耦，实际上很难有较强的体感。在这些团队中，Tomcat 本身很可能就是开发人员自己负责管理的，甚至被认为是应用的一部分，无需进行很明确的分离。</p>

<p>而对于更多的组织来说，Tomcat 作为全公司通用的 Web 服务器，往往有一个专门的小团队兼职甚至全职负责维护。这不仅包括了版本管理、统一升级和安全补丁等工作，还会包括全公司通用的性能优化甚至定制化内容。</p>

<p>在这种场景下，WAR 包的发布流水线（制作 WAR包镜像的流水线），和 Tomcat 的发布流水线（制作 Tomcat 镜像的流水线）其实是通过两个完全独立的团队在负责维护，彼此之间可能都不知晓。</p>

<p>这时候，在 Pod 的定义中直接将两个容器解耦，相比于每次发布前都必须先将两个镜像“融合”成一个镜像然后再发布，就要自动化得多了。这个原因是显而易见的：开发人员不需要额外维护一个“重新打包”应用的脚本、甚至手动地去做这个步骤了。</p>

<p><strong>这正是上述设计模式带来的第一个好处：自动化。</strong></p>

<p>当然，正如另外一些用户指出的那样，这个“解耦”的工作，貌似也可以通过把 WAR 包以 Volume 的方式挂载进 Tomcat 容器来完成，对吧？</p>

<p>然而，相比于 Volume 挂载的方式，通过在 Pod 定义中解耦上述两个容器，其实还会带来<strong>另一个更重要的好处，叫作：自描述。</strong></p>

<p>为了解释这个好处，我们不妨来重新看一下这个 Pod 的定义：</p>

<pre><code>apiVersion: v1
kind: Pod
metadata:
  name: javaweb-2
spec:
  initContainers:
  - image: geektime/sample:v2
    name: war
    command: [&quot;cp&quot;, &quot;/sample.war&quot;, &quot;/app&quot;]
    volumeMounts:
    - mountPath: /app
      name: app-volume
  containers:
  - image: geektime/tomcat:7.0
    name: tomcat
    command: [&quot;sh&quot;,&quot;-c&quot;,&quot;/root/apache-tomcat-7.0.42-v2/bin/start.sh&quot;]
    volumeMounts:
    - mountPath: /root/apache-tomcat-7.0.42-v2/webapps
      name: app-volume
    ports:
    - containerPort: 8080
      hostPort: 8001 
  volumes:
  - name: app-volume
    emptyDir: {}
</code></pre>

<p>现在，我来问你这样一个问题：<strong>这个 Pod 里，应用的版本是多少？Tomcat 的版本又是多少？</strong></p>

<p>相信你一眼就能看出来：应用版本是 v2，Tomcat 的版本是 7.0.42-v2。</p>

<p><strong>没错！所以我们说，一个良好编写的 Pod的 YAML 文件应该是“自描述”的，它直接描述了这个应用本身的所有信息。</strong></p>

<p>但是，如果我们改用 Volume 挂载的方式来解耦WAR 包和 Tomcat 服务器，这个 Pod 的 YAML 文件会变成什么样子呢？如下所示：</p>

<pre><code>apiVersion: v1
kind: Pod
metadata:
  name: javaweb-2
spec:
  containers:
  - image: geektime/tomcat:7.0
    name: tomcat
    command: [&quot;sh&quot;,&quot;-c&quot;,&quot;/root/apache-tomcat-7.0.42-v2/bin/start.sh&quot;]
    volumeMounts:
    - mountPath: /root/apache-tomcat-7.0.42-v2/webapps
      name: app-volume
    ports:
    - containerPort: 8080
      hostPort: 8001 
  volumes:
  - name: app-volume
    flexVolume:
      driver: &quot;alicloud/disk&quot;
      fsType: &quot;ext4&quot;
      options:
        volumeId: &quot;d-bp1j17ifxfasvts3tf40&quot;
</code></pre>

<p>在上面这个例子中，我们就通过了一个名叫“app-volume”的数据卷（Volume），来为我们的 Tomcat 容器提供 WAR 包文件。需要注意的是，这个 Volume 必须是持久化类型的数据卷（比如本例中的阿里云盘），绝不可以是 emptyDir 或者 hostPath 这种临时的宿主机目录，否则一旦 Pod 重调度你的 WAR 包就找不回来了。</p>

<p>然而，如果这时候我再问你：这个 Pod 里，应用的版本是多少？Tomcat 的版本又是多少？</p>

<p>这时候，你可能要傻眼了：在这个 Pod YAML 文件里，根本看不到应用的版本啊，它是通过 Volume 挂载而来的！</p>

<p><strong>也就是说，这个 YAML文件再也没有“自描述”的能力了。</strong></p>

<p>更为棘手的是，在这样的一个系统中，你肯定是不可能手工地往这个云盘里拷贝 WAR 包的。所以，上面这个Pod 要想真正工作起来，你还必须在外部再维护一个系统，专门负责在云盘里拷贝指定版本的 WAR 包，或者直接在制作这个云盘的过程中把指定 WAR 包打进去。然而，无论怎么做，这个工作都是非常不舒服并且自动化程度极低的，我强烈不推荐。</p>

<p><strong>要想 “Volume 挂载”的方式真正能工作，可行方法只有一种：那就是写一个专门的 Kubernetes Volume 插件（比如，Flexvolume或者CSI插件）</strong> 。这个插件的特殊之处，在于它在执行完 “Mount 阶段”后，会自动执行一条从远端下载指定 WAR 包文件的命令，从而将 WAR 包正确放置在这个 Volume 里。这个 WAR 包文件的名字和路径，可以通过 Volume 的自定义参数传递，比如：</p>

<pre><code>...
volumes:
  - name: app-volume
    flexVolume:
      driver: &quot;geektime/war-vol&quot;
      fsType: &quot;ext4&quot;
      options:
        downloadURL: &quot;https://github.com/geektime/sample/releases/download/v2/sample.war&quot;
</code></pre>

<p>在这个例子中， 我就定义了 app-volume 的类型是 geektime/war-vol，在挂载的时候，它会自动从 downloadURL 指定的地址下载指定的 WAR 包，问题解决。</p>

<p>可以看到，这个 YAML 文件也是“自描述”的：因为你可以通过 downloadURL 等参数知道这个应用到底是什么版本。看到这里，你是不是已经感受到 “Volume 挂载的方式” 实际上一点都不简单呢？</p>

<p>在明白了我们在 Pod 定义中解耦 WAR 包容器和 Tomcat 容器能够得到的两个好处之后，第一个问题也就回答得差不多了。这个问题的本质，其实是一个关于“ Kubernetes 应用究竟应该如何描述”的问题。</p>

<p><strong>而这里的原则，最重要的就是“自描述”。</strong></p>

<p>我们之前已经反复讲解过，Kubernetes 项目最强大的能力，就是“声明式”的应用定义方式。这个“声明式”背后的设计思想，是在YAML 文件（Kubernetes API 对象）中描述应用的“终态”。然后 Kubernetes 负责通过“控制器模式”不断地将整个系统的实际状态向这个“终态”逼近并且达成一致。</p>

<p>而“声明式”最大的好处是什么呢？</p>

<p><strong>“声明式”带来最大的好处，其实正是“自动化”</strong>。作为一个 Kubernetes 用户，你只需要在 YAML 里描述清楚这个应用长什么样子，那么剩下的所有事情，就都可以放心地交给 Kubernetes 自动完成了：它会通过控制器模式确保这个系统里的应用状态，最终并且始终跟你在 YAML 文件里的描述完全一致。</p>

<p>这种<strong>“把简单交给用户，把复杂留给自己”</strong>的精神，正是一个“声明式”项目的精髓所在了。</p>

<p>这也就意味着，如果你的 YAML 文件不是“自描述”的，那么 Kubernetes 就不能“完全”理解你的应用的“终态”到底是什么样子的，它也就没办法把所有的“复杂”都留给自己。这不，你就得自己去写一个额外 Volume 插件去了。</p>

<p>回到之前用户提到的第二个问题：当通过 YAML 文件将 WAR 包镜像更新后，整个 Pod 不会重建么？Tomcat 需要重启么？</p>

<p>实际上，当一个 Pod 里的容器镜像被更新后，kubelet 本身就能够判断究竟是哪个容器需要更新，而不会“无脑”地重建整个Pod。当然，你的 Tomcat 需要配置好 reloadable=“true”，这样就不需要重启 Tomcat 服务器了，这是一个非常常见的做法。</p>

<p>但是，<strong>这里还有一个细节需要注意</strong>。即使 kubelet 本身能够“智能”地单独重建被更新的容器，但如果你的 Pod 是用 Deployment 管理的话，它会按照自己的发布策略（RolloutStrategy） 来通过重建的方式更新 Pod。</p>

<p>这时候，如果这个 Pod 被重新调度到其他机器上，那么 kubelet “单独重建被更新的容器”的能力就没办法发挥作用了。所以说，要让这个案例中的“解耦”能力发挥到最佳程度，你还需要一个“原地升级”的功能，即：允许 Kubernetes 在原地进行 Pod 的更新，避免重调度带来的各种麻烦。</p>

<p>原地升级能力，在 Kubernetes 的默认控制器中都是不支持的。但，这是社区开源控制器项目 <a href="https://github.com/openkruise/kruise" target="_blank">https://</a><a href="https://github.com/openkruise/kruise" target="_blank">github.com/open</a><a href="https://github.com/openkruise/kruise" target="_blank">kru</a><a href="https://github.com/openkruise/kruise" target="_blank">ise/kruise</a> 的重要功能之一，如果你感兴趣的话可以研究一下。</p>

<h2 id="总结">总结</h2>

<p>说到这里，再让我们回头看一下文章最开始大家提出的共性问题：现在的 Kubernetes 项目里，最有价值的部分到底是哪些？这个项目的本质到底在哪部分呢？</p>

<p>实际上，通过深入地讲解 “Tomcat 与 WAR 包解耦”这个案例，你可以看到 Kubernetes 的“声明式 API”“容器设计模式”“控制器原理”，以及kubelet 的工作机制等很多核心知识点，实际上是可以通过一条主线贯穿起来的。这条主线，从“应用如何描述”开始，到“容器如何运行”结束。</p>

<p><strong>这条主线，正是 Kubernetes 项目中最具价值的那个部分，即：云原生应用管理（Cloud Native Application Management）</strong>。它是一条连接 Kubernetes 项目绝大多数核心特性的关键线索，也是 Kubernetes 项目乃至整个云原生社区这五年来飞速发展背后唯一不变的精髓。</p>

<p><img src="assets/96ef8576a26f5e6266c422c0d6519725.jpg" alt="" /></p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#066a6a6a3f323737363146616b676f6a2865696b" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f159f5d99b97771',t:'MTczNDA4OTQzMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>