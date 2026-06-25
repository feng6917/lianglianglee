<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=49&#32;Custom&#32;Metrics_&#32;让Auto&#32;Scaling不再“食之无味”>
        <link rel="icon" href="/static/favicon.png">
        <title>49 Custom Metrics_ 让Auto Scaling不再“食之无味” </title>
        
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
                            <h1 id="title" data-id="49 Custom Metrics_ 让Auto Scaling不再“食之无味”" class="title">49 Custom Metrics_ 让Auto Scaling不再“食之无味”</h1>
                            <div><p>你好，我是张磊。今天我和你分享的主题是：Custom Metrics，让Auto Scaling不再“食之无味”。</p>

<p>在上一篇文章中，我为你详细讲述了 Kubernetes 里的核心监控体系的架构。不难看到，Prometheus 项目在其中占据了最为核心的位置。</p>

<p>实际上，借助上述监控体系，Kubernetes 就可以为你提供一种非常有用的能力，那就是 Custom Metrics，自定义监控指标。</p>

<p>在过去的很多 PaaS 项目中，其实都有一种叫作 Auto Scaling，即自动水平扩展的功能。只不过，这个功能往往只能依据某种指定的资源类型执行水平扩展，比如 CPU 或者 Memory 的使用值。</p>

<p>而在真实的场景中，用户需要进行Auto Scaling 的依据往往是自定义的监控指标。比如，某个应用的等待队列的长度，或者某种应用相关资源的使用情况。这些复杂多变的需求，在传统 PaaS项目和其他容器编排项目里，几乎是不可能轻松支持的。</p>

<p>而凭借强大的 API 扩展机制，Custom Metrics已经成为了 Kubernetes 的一项标准能力。并且，Kubernetes 的自动扩展器组件 Horizontal Pod Autoscaler （HPA）， 也可以直接使用Custom Metrics来执行用户指定的扩展策略，这里的整个过程都是非常灵活和可定制的。</p>

<p>不难想到，Kubernetes 里的 Custom Metrics 机制，也是借助Aggregator APIServer 扩展机制来实现的。这里的具体原理是，当你把 Custom Metrics APIServer 启动之后，Kubernetes 里就会出现一个叫作<code>custom.metrics.k8s.io</code>的 API。而当你访问这个 URL 时，Aggregator就会把你的请求转发给Custom Metrics APIServer 。</p>

<p>而Custom Metrics APIServer 的实现，其实就是一个 Prometheus 项目的 Adaptor。</p>

<p>比如，现在我们要实现一个根据指定 Pod 收到的 HTTP 请求数量来进行 Auto Scaling 的 Custom Metrics，这个 Metrics 就可以通过访问如下所示的自定义监控 URL 获取到：</p>

<pre><code>https://&lt;apiserver_ip&gt;/apis/custom-metrics.metrics.k8s.io/v1beta1/namespaces/default/pods/sample-metrics-app/http_requests 
</code></pre>

<p>这里的工作原理是，当你访问这个 URL 的时候，Custom Metrics APIServer就会去 Prometheus 里查询名叫sample-metrics-app这个Pod 的http_requests指标的值，然后按照固定的格式返回给访问者。</p>

<p>当然，http_requests指标的值，就需要由 Prometheus 按照我在上一篇文章中讲到的核心监控体系，从目标 Pod 上采集。</p>

<p>这里具体的做法有很多种，最普遍的做法，就是让 Pod 里的应用本身暴露出一个/metrics API，然后在这个 API 里返回自己收到的HTTP的请求的数量。所以说，接下来 HPA 只需要定时访问前面提到的自定义监控 URL，然后根据这些值计算是否要执行 Scaling 即可。</p>

<p>接下来，我通过一个具体的实例，来为你讲解一下 Custom Metrics 具体的使用方式。这个实例的 GitHub 库<a href="https://github.com/resouer/kubeadm-workshop" target="_blank">在这里</a>，你可以点击链接查看。在这个例子中，我依然会假设你的集群是 kubeadm 部署出来的，所以 Aggregator 功能已经默认开启了。</p>

<blockquote>
<p>备注：我们这里使用的实例，fork 自 Lucas 在上高中时做的一系列Kubernetes 指南。</p>
</blockquote>

<p><strong>首先</strong>，我们当然是先部署 Prometheus 项目。这一步，我当然会使用 Prometheus Operator来完成，如下所示：</p>

<pre><code>$ kubectl apply -f demos/monitoring/prometheus-operator.yaml
clusterrole &quot;prometheus-operator&quot; created
serviceaccount &quot;prometheus-operator&quot; created
clusterrolebinding &quot;prometheus-operator&quot; created
deployment &quot;prometheus-operator&quot; created

$ kubectl apply -f demos/monitoring/sample-prometheus-instance.yaml
clusterrole &quot;prometheus&quot; created
serviceaccount &quot;prometheus&quot; created
clusterrolebinding &quot;prometheus&quot; created
prometheus &quot;sample-metrics-prom&quot; created
service &quot;sample-metrics-prom&quot; created
</code></pre>

<p><strong>第二步</strong>，我们需要把 Custom Metrics APIServer 部署起来，如下所示：</p>

<pre><code>$ kubectl apply -f demos/monitoring/custom-metrics.yaml
namespace &quot;custom-metrics&quot; created
serviceaccount &quot;custom-metrics-apiserver&quot; created
clusterrolebinding &quot;custom-metrics:system:auth-delegator&quot; created
rolebinding &quot;custom-metrics-auth-reader&quot; created
clusterrole &quot;custom-metrics-read&quot; created
clusterrolebinding &quot;custom-metrics-read&quot; created
deployment &quot;custom-metrics-apiserver&quot; created
service &quot;api&quot; created
apiservice &quot;v1beta1.custom-metrics.metrics.k8s.io&quot; created
clusterrole &quot;custom-metrics-server-resources&quot; created
clusterrolebinding &quot;hpa-controller-custom-metrics&quot; created
</code></pre>

<p><strong>第三步</strong>，我们需要为 Custom Metrics APIServer 创建对应的 ClusterRoleBinding，以便能够使用curl来直接访问 Custom Metrics 的 API：</p>

<pre><code>$ kubectl create clusterrolebinding allowall-cm --clusterrole custom-metrics-server-resources --user system:anonymous
clusterrolebinding &quot;allowall-cm&quot; created
</code></pre>

<p><strong>第四步</strong>，我们就可以把待监控的应用和 HPA 部署起来了，如下所示：</p>

<pre><code>$ kubectl apply -f demos/monitoring/sample-metrics-app.yaml
deployment &quot;sample-metrics-app&quot; created
service &quot;sample-metrics-app&quot; created
servicemonitor &quot;sample-metrics-app&quot; created
horizontalpodautoscaler &quot;sample-metrics-app-hpa&quot; created
ingress &quot;sample-metrics-app&quot; created
</code></pre>

<p>这里，我们需要关注一下 HPA 的配置，如下所示：</p>

<pre><code>kind: HorizontalPodAutoscaler
apiVersion: autoscaling/v2beta1
metadata:
  name: sample-metrics-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: sample-metrics-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Object
    object:
      target:
        kind: Service
        name: sample-metrics-app
      metricName: http_requests
      targetValue: 100
</code></pre>

<p>可以看到，<strong>HPA 的配置，就是你设置 Auto Scaling 规则的地方。</strong></p>

<p>比如，scaleTargetRef字段，就指定了被监控的对象是名叫sample-metrics-app的 Deployment，也就是我们上面部署的被监控应用。并且，它最小的实例数目是2，最大是10。</p>

<p>在metrics字段，我们指定了这个 HPA 进行 Scale 的依据，是名叫http_requests的 Metrics。而获取这个 Metrics 的途径，则是访问名叫sample-metrics-app的 Service。</p>

<p>有了这些字段里的定义， HPA 就可以向如下所示的 URL 发起请求来获取 Custom Metrics 的值了：</p>

<pre><code>https://&lt;apiserver_ip&gt;/apis/custom-metrics.metrics.k8s.io/v1beta1/namespaces/default/services/sample-metrics-app/http_requests
</code></pre>

<p>需要注意的是，上述这个 URL 对应的被监控对象，是我们的应用对应的 Service。这跟本文一开始举例用到的 Pod 对应的 Custom Metrics URL 是不一样的。当然，<strong>对于一个多实例应用来说，通过 Service 来采集 Pod 的 Custom Metrics 其实才是合理的做法。</strong></p>

<p>这时候，我们可以通过一个名叫hey的测试工具来为我们的应用增加一些访问压力，具体做法如下所示：</p>

<pre><code>$ # Install hey
$ docker run -it -v /usr/local/bin:/go/bin golang:1.8 go get github.com/rakyll/hey

$ export APP_ENDPOINT=$(kubectl get svc sample-metrics-app -o template --template {{.spec.clusterIP}}); echo ${APP_ENDPOINT}
$ hey -n 50000 -c 1000 http://${APP_ENDPOINT}
</code></pre>

<p>与此同时，如果你去访问应用 Service 的 Custom Metircs URL，就会看到这个 URL 已经可以为你返回应用收到的 HTTP 请求数量了，如下所示：</p>

<pre><code>$ curl -sSLk https://&lt;apiserver_ip&gt;/apis/custom-metrics.metrics.k8s.io/v1beta1/namespaces/default/services/sample-metrics-app/http_requests
{
  &quot;kind&quot;: &quot;MetricValueList&quot;,
  &quot;apiVersion&quot;: &quot;custom-metrics.metrics.k8s.io/v1beta1&quot;,
  &quot;metadata&quot;: {
    &quot;selfLink&quot;: &quot;/apis/custom-metrics.metrics.k8s.io/v1beta1/namespaces/default/services/sample-metrics-app/http_requests&quot;
  },
  &quot;items&quot;: [
    {
      &quot;describedObject&quot;: {
        &quot;kind&quot;: &quot;Service&quot;,
        &quot;name&quot;: &quot;sample-metrics-app&quot;,
        &quot;apiVersion&quot;: &quot;/__internal&quot;
      },
      &quot;metricName&quot;: &quot;http_requests&quot;,
      &quot;timestamp&quot;: &quot;2018-11-30T20:56:34Z&quot;,
      &quot;value&quot;: &quot;501484m&quot;
    }
  ]
}
</code></pre>

<p><strong>这里需要注意的是，Custom Metrics API 为你返回的 Value 的格式。</strong></p>

<p>在为被监控应用编写/metrics API 的返回值时，我们其实比较容易计算的，是该 Pod 收到的 HTTP request 的总数。所以，我们这个<a href="https://github.com/resouer/kubeadm-workshop/blob/master/images/autoscaling/server.js" target="_blank">应用的代码</a>其实是如下所示的样子：</p>

<pre><code>  if (request.url == &quot;/metrics&quot;) {
    response.end(&quot;# HELP http_requests_total The amount of requests served by the server in total\n# TYPE http_requests_total counter\nhttp_requests_total &quot; + totalrequests + &quot;\n&quot;);
    return;
  }
</code></pre>

<p>可以看到，我们的应用在/metrics 对应的 HTTP response 里返回的，其实是http_requests_total的值。这，也就是 Prometheus 收集到的值。</p>

<p>而 Custom Metrics APIServer 在收到对http_requests指标的访问请求之后，它会从Prometheus 里查询http_requests_total的值，然后把它折算成一个以时间为单位的请求率，最后把这个结果作为http_requests指标对应的值返回回去。</p>

<p>所以说，我们在对前面的 Custom Metircs URL 进行访问时，会看到值是501484m，这里的格式，其实就是milli-requests，相当于是在过去两分钟内，每秒有501个请求。这样，应用的开发者就无需关心如何计算每秒的请求个数了。而这样的“请求率”的格式，是可以直接被 HPA 拿来使用的。</p>

<p>这时候，如果你同时查看 Pod 的个数的话，就会看到 HPA 开始增加 Pod 的数目了。</p>

<p>不过，在这里你可能会有一个疑问，Prometheus 项目，又是如何知道采集哪些 Pod 的 /metrics API 作为监控指标的来源呢。</p>

<p>实际上，如果仔细观察一下我们前面创建应用的输出，你会看到有一个类型是ServiceMonitor的对象也被创建了出来。它的 YAML 文件如下所示：</p>

<pre><code>apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: sample-metrics-app
  labels:
    service-monitor: sample-metrics-app
spec:
  selector:
    matchLabels:
      app: sample-metrics-app
  endpoints:
  - port: web
</code></pre>

<p>这个ServiceMonitor对象，正是 Prometheus Operator 项目用来指定被监控 Pod 的一个配置文件。可以看到，我其实是通过Label Selector 为Prometheus 来指定被监控应用的。</p>

<h1 id="总结">总结</h1>

<p>在本篇文章中，我为你详细讲解了 Kubernetes 里对自定义监控指标，即 Custom Metrics 的设计与实现机制。这套机制的可扩展性非常强，也终于使得Auto Scaling 在 Kubernetes 里面不再是一个“食之无味”的鸡肋功能了。</p>

<p>另外可以看到，Kubernetes 的 Aggregator APIServer，是一个非常行之有效的 API 扩展机制。而且，Kubernetes 社区已经为你提供了一套叫作 <a href="https://github.com/kubernetes-sigs/kubebuilder" target="_blank">KubeBuilder</a> 的工具库，帮助你生成一个 API Server 的完整代码框架，你只需要在里面添加自定义 API，以及对应的业务逻辑即可。</p>

<h1 id="思考题">思考题</h1>

<p>在你的业务场景中，你希望使用什么样的指标作为 Custom Metrics ，以便对 Pod 进行 Auto Scaling 呢？怎么获取到这个指标呢？</p>

<p>感谢你的收听，欢迎你给我留言，也欢迎分享给更多的朋友一起阅读。</p>

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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#78141414414c4949484f381f15191114561b1715" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f159d836aff7771',t:'MTczNDA4OTM1NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>