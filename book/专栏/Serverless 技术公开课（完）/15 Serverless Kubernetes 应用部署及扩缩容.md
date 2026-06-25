<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=15&#32;Serverless&#32;Kubernetes&#32;应用部署及扩缩容>
        <link rel="icon" href="/static/favicon.png">
        <title>15 Serverless Kubernetes 应用部署及扩缩容 </title>
        
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
                        <a class="menu-item" id="01 架构的演进.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/01%20%e6%9e%b6%e6%9e%84%e7%9a%84%e6%bc%94%e8%bf%9b.md">01 架构的演进.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 Serverless 的价值.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/02%20Serverless%20%e7%9a%84%e4%bb%b7%e5%80%bc.md">02 Serverless 的价值.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 常见 Serverless 架构模式.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/03%20%e5%b8%b8%e8%a7%81%20Serverless%20%e6%9e%b6%e6%9e%84%e6%a8%a1%e5%bc%8f.md">03 常见 Serverless 架构模式.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 Serverless 技术选型.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/04%20Serverless%20%e6%8a%80%e6%9c%af%e9%80%89%e5%9e%8b.md">04 Serverless 技术选型.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 函数计算简介.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/05%20%e5%87%bd%e6%95%b0%e8%ae%a1%e7%ae%97%e7%ae%80%e4%bb%8b.md">05 函数计算简介.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 函数计算是如何工作的？.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/06%20%e5%87%bd%e6%95%b0%e8%ae%a1%e7%ae%97%e6%98%af%e5%a6%82%e4%bd%95%e5%b7%a5%e4%bd%9c%e7%9a%84%ef%bc%9f.md">06 函数计算是如何工作的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 函数粘合云服务提供端到端解决方案.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/07%20%e5%87%bd%e6%95%b0%e7%b2%98%e5%90%88%e4%ba%91%e6%9c%8d%e5%8a%a1%e6%8f%90%e4%be%9b%e7%ab%af%e5%88%b0%e7%ab%af%e8%a7%a3%e5%86%b3%e6%96%b9%e6%a1%88.md">07 函数粘合云服务提供端到端解决方案.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 函数计算的开发与配置.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/08%20%e5%87%bd%e6%95%b0%e8%ae%a1%e7%ae%97%e7%9a%84%e5%bc%80%e5%8f%91%e4%b8%8e%e9%85%8d%e7%bd%ae.md">08 函数计算的开发与配置.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 函数的调试与部署.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/09%20%e5%87%bd%e6%95%b0%e7%9a%84%e8%b0%83%e8%af%95%e4%b8%8e%e9%83%a8%e7%bd%b2.md">09 函数的调试与部署.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 自动化 CI&amp;CD 与灰度发布.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/10%20%e8%87%aa%e5%8a%a8%e5%8c%96%20CI&amp;CD%20%e4%b8%8e%e7%81%b0%e5%ba%a6%e5%8f%91%e5%b8%83.md">10 自动化 CI&amp;CD 与灰度发布.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 函数计算的可观测性.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/11%20%e5%87%bd%e6%95%b0%e8%ae%a1%e7%ae%97%e7%9a%84%e5%8f%af%e8%a7%82%e6%b5%8b%e6%80%a7.md">11 函数计算的可观测性.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 典型案例 1：函数计算在音视频场景实践.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/12%20%e5%85%b8%e5%9e%8b%e6%a1%88%e4%be%8b%201%ef%bc%9a%e5%87%bd%e6%95%b0%e8%ae%a1%e7%ae%97%e5%9c%a8%e9%9f%b3%e8%a7%86%e9%a2%91%e5%9c%ba%e6%99%af%e5%ae%9e%e8%b7%b5.md">12 典型案例 1：函数计算在音视频场景实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 典型案例 3：十分钟搭建弹性可扩展的 Web API.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/13%20%e5%85%b8%e5%9e%8b%e6%a1%88%e4%be%8b%203%ef%bc%9a%e5%8d%81%e5%88%86%e9%92%9f%e6%90%ad%e5%bb%ba%e5%bc%b9%e6%80%a7%e5%8f%af%e6%89%a9%e5%b1%95%e7%9a%84%20Web%20API.md">13 典型案例 3：十分钟搭建弹性可扩展的 Web API.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 Serverless Kubernetes 容器服务介绍.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/14%20Serverless%20Kubernetes%20%e5%ae%b9%e5%99%a8%e6%9c%8d%e5%8a%a1%e4%bb%8b%e7%bb%8d.md">14 Serverless Kubernetes 容器服务介绍.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 Serverless Kubernetes 应用部署及扩缩容.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/15%20Serverless%20Kubernetes%20%e5%ba%94%e7%94%a8%e9%83%a8%e7%bd%b2%e5%8f%8a%e6%89%a9%e7%bc%a9%e5%ae%b9.md">15 Serverless Kubernetes 应用部署及扩缩容.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 使用 Spot 低成本运行 Job 任务.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/16%20%e4%bd%bf%e7%94%a8%20Spot%20%e4%bd%8e%e6%88%90%e6%9c%ac%e8%bf%90%e8%a1%8c%20Job%20%e4%bb%bb%e5%8a%a1.md">16 使用 Spot 低成本运行 Job 任务.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 低成本运行 Spark 数据计算.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/17%20%e4%bd%8e%e6%88%90%e6%9c%ac%e8%bf%90%e8%a1%8c%20Spark%20%e6%95%b0%e6%8d%ae%e8%ae%a1%e7%ae%97.md">17 低成本运行 Spark 数据计算.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 GPU 机器学习开箱即用.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/18%20GPU%20%e6%9c%ba%e5%99%a8%e5%ad%a6%e4%b9%a0%e5%bc%80%e7%ae%b1%e5%8d%b3%e7%94%a8.md">18 GPU 机器学习开箱即用.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 基于 Knative 低成本部署在线应用，灵活自动伸缩.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/19%20%e5%9f%ba%e4%ba%8e%20Knative%20%e4%bd%8e%e6%88%90%e6%9c%ac%e9%83%a8%e7%bd%b2%e5%9c%a8%e7%ba%bf%e5%ba%94%e7%94%a8%ef%bc%8c%e7%81%b5%e6%b4%bb%e8%87%aa%e5%8a%a8%e4%bc%b8%e7%bc%a9.md">19 基于 Knative 低成本部署在线应用，灵活自动伸缩.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 快速构建 JenkinsGitlab 持续集成环境.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/20%20%e5%bf%ab%e9%80%9f%e6%9e%84%e5%bb%ba%20JenkinsGitlab%20%e6%8c%81%e7%bb%ad%e9%9b%86%e6%88%90%e7%8e%af%e5%a2%83.md">20 快速构建 JenkinsGitlab 持续集成环境.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 在线应用的 Serverless 实践.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/21%20%e5%9c%a8%e7%ba%bf%e5%ba%94%e7%94%a8%e7%9a%84%20Serverless%20%e5%ae%9e%e8%b7%b5.md">21 在线应用的 Serverless 实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 通过 IDEMaven 部署 Serverless 应用实践.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/22%20%e9%80%9a%e8%bf%87%20IDEMaven%20%e9%83%a8%e7%bd%b2%20Serverless%20%e5%ba%94%e7%94%a8%e5%ae%9e%e8%b7%b5.md">22 通过 IDEMaven 部署 Serverless 应用实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 企业级 CICD 工具部署 Serverless 应用的落地实践.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/23%20%e4%bc%81%e4%b8%9a%e7%ba%a7%20CICD%20%e5%b7%a5%e5%85%b7%e9%83%a8%e7%bd%b2%20Serverless%20%e5%ba%94%e7%94%a8%e7%9a%84%e8%90%bd%e5%9c%b0%e5%ae%9e%e8%b7%b5.md">23 企业级 CICD 工具部署 Serverless 应用的落地实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 Serverless 应用如何管理日志&amp;持久化数据.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/24%20Serverless%20%e5%ba%94%e7%94%a8%e5%a6%82%e4%bd%95%e7%ae%a1%e7%90%86%e6%97%a5%e5%bf%97&amp;%e6%8c%81%e4%b9%85%e5%8c%96%e6%95%b0%e6%8d%ae.md">24 Serverless 应用如何管理日志&amp;持久化数据.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25 Serverless 应用引擎产品的流量负载均衡和路由策略配置实践.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/25%20Serverless%20%e5%ba%94%e7%94%a8%e5%bc%95%e6%93%8e%e4%ba%a7%e5%93%81%e7%9a%84%e6%b5%81%e9%87%8f%e8%b4%9f%e8%bd%bd%e5%9d%87%e8%a1%a1%e5%92%8c%e8%b7%af%e7%94%b1%e7%ad%96%e7%95%a5%e9%85%8d%e7%bd%ae%e5%ae%9e%e8%b7%b5.md">25 Serverless 应用引擎产品的流量负载均衡和路由策略配置实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 Spring CloudDubbo 应用无缝迁移到 Serverless 架构.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/26%20Spring%20CloudDubbo%20%e5%ba%94%e7%94%a8%e6%97%a0%e7%bc%9d%e8%bf%81%e7%a7%bb%e5%88%b0%20Serverless%20%e6%9e%b6%e6%9e%84.md">26 Spring CloudDubbo 应用无缝迁移到 Serverless 架构.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 SAE 应用分批发布与无损下线的最佳实践.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/27%20SAE%20%e5%ba%94%e7%94%a8%e5%88%86%e6%89%b9%e5%8f%91%e5%b8%83%e4%b8%8e%e6%97%a0%e6%8d%9f%e4%b8%8b%e7%ba%bf%e7%9a%84%e6%9c%80%e4%bd%b3%e5%ae%9e%e8%b7%b5.md">27 SAE 应用分批发布与无损下线的最佳实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 如何通过压测工具&#43; SAE 弹性能力轻松应对大促.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/28%20%e5%a6%82%e4%bd%95%e9%80%9a%e8%bf%87%e5%8e%8b%e6%b5%8b%e5%b7%a5%e5%85%b7&#43;%20SAE%20%e5%bc%b9%e6%80%a7%e8%83%bd%e5%8a%9b%e8%bd%bb%e6%9d%be%e5%ba%94%e5%af%b9%e5%a4%a7%e4%bf%83.md">28 如何通过压测工具&#43; SAE 弹性能力轻松应对大促.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 SAE 极致应用部署效率.md" href="/%e4%b8%93%e6%a0%8f/Serverless%20%e6%8a%80%e6%9c%af%e5%85%ac%e5%bc%80%e8%af%be%ef%bc%88%e5%ae%8c%ef%bc%89/29%20SAE%20%e6%9e%81%e8%87%b4%e5%ba%94%e7%94%a8%e9%83%a8%e7%bd%b2%e6%95%88%e7%8e%87.md">29 SAE 极致应用部署效率.md</a>
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
                            <h1 id="title" data-id="15 Serverless Kubernetes 应用部署及扩缩容" class="title">15 Serverless Kubernetes 应用部署及扩缩容</h1>
                            <div><p><strong>导读：</strong>本文分为三个部分，首先给大家演示 Serverless Kubernetes 集群的创建和业务应用的部署，其次介绍 Serverless Kubernetes 的常用功能，最后对应用扩缩容的操作进行探讨。</p>

<h3 id="集群创建及应用部署">集群创建及应用部署</h3>

<h4 id="1-集群创建">1. 集群创建</h4>

<p>在对 Serverless Kubernetes 的基础概念有了充分了解之后，我们直接进入容器服务控制台（<a href="https://cs.console.aliyun.com/#/authorize" target="_blank">https://cs.console.aliyun.com/#/authorize</a>）进行集群的创建。</p>

<p><img src="assets/2020-08-26-031145.png" alt="image.png" /></p>

<p>在创建页面，主要有三类属性需要选择或填写：</p>

<ul>
<li>集群创建的地域和 Kubernetes 的版本信息；</li>
<li>网络属性：可以选择容器服务自动创建或者指定已有的 VPC 资源；</li>
<li>集群能力和服务：可以按需选择。</li>
</ul>

<p>属性完成后，点击“创建集群”即可，整个创建过程需要 1~2 分钟的时间。</p>

<p><img src="assets/2020-08-26-031147.png" alt="image.png" /></p>

<h4 id="2-应用部署">2. 应用部署</h4>

<p>集群创建完成后，接下来我们部署一个无状态的 nginx 应用，主要分成三步：</p>

<ul>
<li>应用基本信息：名称、POD 数量、标签等；</li>
<li>容器配置：镜像、所需资源、容器端口、数据卷等；</li>
<li>高级配置：服务、路由、HPA、POD 标签等。</li>
</ul>

<p><img src="assets/2020-08-26-031148.png" alt="image.png" /></p>

<p>创建完成后，在路由中就可以看到服务对外暴露的访问方式了。</p>

<p><img src="assets/2020-08-26-031150.png" alt="image.png" /></p>

<p>如上图所示，在本地 host 绑定 <code>ask-demo.com</code> 到路由端点 <code>123.57.252.131</code> 的解析，然后浏览器访问域名，即可请求到部署的 nginx 应用。</p>

<h3 id="常用功能介绍">常用功能介绍</h3>

<p>我们一般会通过容器服务控制台和 Kubectl 两种方式，来使用 Serverless Kubernetes 的常用功能。</p>

<h4 id="1-容器服务控制台">1. 容器服务控制台</h4>

<p><img src="assets/2020-08-26-031151.png" alt="image.png" /></p>

<p>在容器服务控制台上，我们可以进行以下功能的白屏化操作：</p>

<ul>
<li>基本信息：集群 ID 和运行状态、API Server 端点、VPC 和安全性、集群访问凭证的查看和操作；</li>
<li>存储卷：PV、PVC、StorageClass 的查看和操作；</li>
<li>命名空间：集群 namespace 的查看和操作；</li>
<li>工作负载：Deployment、StatefulSet、Job、CronJob、Pod 的查看和操作；</li>
<li>服务：工作负载提供出的 Service 的查看和操作；</li>
<li>路由：Ingress 的查看和操作，用来路由 Service；</li>
<li>发布：对基于 Helm 或者容器服务分批发布的任务进行查看和操作；</li>
<li>配置管理：对 ConfigMap 和 Secret 的查看和操作；</li>
<li>运维管理：集群的事件列表和操作审计。</li>
</ul>

<h4 id="2-kubectl">2. Kubectl</h4>

<p>除了通过控制台，我们还可以基于 Kubectl 来进行集群操作和管理。</p>

<p><img src="assets/2020-08-26-031153.png" alt="image.png" /></p>

<p>我们可以在云端通过 CloudShell 来使用 Kubectl，也可以在本地安装 Kubectl，然后通过将集群的访问凭证写入到 kubeconfig 来使用 Serverless Kubernetes 。</p>

<h3 id="应用弹性伸缩">应用弹性伸缩</h3>

<p>通通过上面的内容讲解，我们已经了解了应用的部署和集群的常用操作，下面为大家介绍一下如何为应用做扩缩容操作。</p>

<p>在 Serverless Kubernetes 中常用的应用扩缩容方式包括：</p>

<ul>
<li>人工扩缩容：最为原始的方式，在成本和应用稳定性上均有一定程度的牺牲；</li>
<li>HPA（Horizontal Pod Autoscaler）：根据 Cpu 和 Memory 等指标来弹性伸缩，适合有突发流量场景的应用；</li>
<li>Cron HPA ：根据 Cron 表达式来定期伸缩，适合有固定波峰波谷特性的应用；</li>
<li>External Metrics（alibaba-cloud-metrics-adapter）：阿里云指标容器水平伸缩，在原生 HPA 的基础上支持更多的数据指标。</li>
</ul>

<h3 id="结语">结语</h3>

<p>以上就是 Serverless Kubernetes 应用部署及扩缩容的全部分享，希望通过这次分享能够帮助大家更好地入门和使用 Serverless Kubernetes，后续也将会有更多的 Serverless Kubernetes 的实践案例分享给大家。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#85e9e9e9bcb1b4b4b5b2c5e2e8e4ece9abe6eae8" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f124de669f3ede4',t:'MTczNDA1NDYzNi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>