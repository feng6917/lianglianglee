<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=16&#32;使用&#32;Spot&#32;低成本运行&#32;Job&#32;任务>
        <link rel="icon" href="/static/favicon.png">
        <title>16 使用 Spot 低成本运行 Job 任务 </title>
        
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
                            <h1 id="title" data-id="16 使用 Spot 低成本运行 Job 任务" class="title">16 使用 Spot 低成本运行 Job 任务</h1>
                            <div><h3 id="成本优化">成本优化</h3>

<p><img src="assets/2020-08-26-031132.jpg" alt="1.jpg" /></p>

<p>ECI 除了有秒级弹性、无限容量的优势之外，在一些特定场景下对成本的优化也是非常明显的，通过上图我们可以看到，相同规格的实例，在日运行时间少于 14 小时的时候，使用 ECI 会更加便宜。</p>

<p><img src="assets/2020-08-26-031133.jpg" alt="2.jpg" /></p>

<p>除了日运行时长小于 14 小时的情形，ECI 实例还支持多种计费类型，客户可以根据自身业务选择相应的计费模式：long run 类型的可以采用 RI 实例券；运行时长低于 1 小时可以选用 Spot 竞价实例；针对突发流量部分，采用按量实例。</p>

<h3 id="spot-实例概述">Spot 实例概述</h3>

<p><img src="assets/2020-08-26-031135.jpg" alt="3.jpg" /></p>

<p>抢占式实例是一种按需实例，可以在数据计算等场景中降低计算成本。抢占式实例创建成功后拥有一小时的保护周期。抢占式实例的市场价格会随供需变化而浮动，我们支持两种 spot 策略，一种是完全根据市场出价，一种是指定价格上限，我们只需要给 pod 加上对应的 annotation 即可，使用方法非常简单。</p>

<p><img src="assets/2020-08-26-031137.jpg" alt="4.jpg" /></p>

<ul>
<li>SpotAsPriceGo：系统自动出价，跟随当前市场实际价格（通常以折扣的形式体现）</li>
<li>SpotWithPriceLimit：设置抢占实例价格上限</li>
<li>用户价格 &lt; Spot 市场价格，实例会处于 pending 状态，并每 5 分钟自动进行一次出价，当价格等于或高于市场价格时，开始自动创建实例。运行一小时后，市场价格如果高于用户价格，则实例随时可能会被释放；</li>
<li>用户价格 &gt;= Spot 市场价格，如果库存充足则自动创建实例，按成功创建实例时的市场价格来计价，默认市场价格为小时价，将小时价除以 3600 即可得到每秒的价格。抢占式实例按秒计费；</li>
<li>用户价格 &gt;= ECI 按量实例价格，使用 ECI 按量实例价格来创建实例。</li>
</ul>

<h3 id="创建-spot-实例">创建 Spot 实例</h3>

<p><img src="assets/2020-08-26-031138.jpg" alt="5.jpg" /></p>

<ul>
<li>根据规格查看实例按量价格，<a href="https://www.aliyun.com/price/product#/ecs/detail" target="_blank">点击查询</a></li>
</ul>

<p>首先我们查询出【华北 2（北京）地域 ecs.c5.large 按量（小时）价格：0.62】，然后我们以此规格来创建 Spot 竞价实例。</p>

<p><img src="assets/2020-08-26-031140.jpg" alt="6.jpg" /></p>

<p>采用 Spot 实例来运行 CronJob，分别采用“指定最高限价”、“系统自动出价”的方式。随市场价的场景目前还没有办法直接看到真实的价格，只能根据实例 ID 查询账单信息。</p>

<p><img src="assets/2020-08-26-031141.jpg" alt="7.jpg" /></p>

<p>采用 Spot 实例运行 Deployment，在本次实验中我们采用指定最高限价的策略，并设置一个极低的小时价格，可以看到 2 个 Pod 都创建失败了，使用 kubectl describe 命令可以看到失败的详细原因为价格不匹配：The current price of recommend instanceTypes above user max price。</p>

<p><img src="assets/2020-08-26-031142.jpg" alt="8.jpg" /></p>

<p>如上图所示，当 Spot 实例运行超过 1 小时保护期后，有可能会因为库存不足，或者设置的价格小于市场价而触发实例释放，实例释放前 3 分钟会有事件通知。</p>

<h3 id="应用场景">应用场景</h3>

<p>您可以在抢占式实例上部署以下业务：</p>

<ul>
<li>实时分析业务</li>
<li>大数据计算业务</li>
<li>可弹性伸缩的业务站点</li>
<li>图像和媒体编码业务</li>
<li>科学计算业务</li>
<li>地理空间勘测分析业务</li>
<li>网络爬虫业务</li>
<li>测试业务</li>
</ul>

<p>抢占式实例适用于无状态的应用场景，例如可弹性伸缩的 Web 站点服务、图像渲染、大数据分析和大规模并行计算等。应用程序的分布度、可扩展性和容错能力越高，越适合使用抢占式实例节省成本和提升吞吐量。</p>

<h3 id="注意事项">注意事项</h3>

<ul>
<li><strong>如何避免出价过低导致实例抢占失败？</strong></li>
</ul>

<p>需要结合自身业务特征，并充分考虑到市场价格波动的情况下选择合理的出价。</p>

<ul>
<li><strong>系统自动出价，1 小时到期后是否会被释放？</strong></li>
</ul>

<p>1 小时到期时，系统会尝试再次出价，如库存充足则不会被释放。</p>

<ul>
<li><strong>系统自动出价上限是多少？</strong></li>
</ul>

<p>不超过相同规格按量最高价（原价）。</p>

<ul>
<li><strong>是否仅支持 ECS InstanceType 形式？</strong></li>
</ul>

<p>抢占式 ECI 实例依然支持 ECS InstanceType、CPU / 内存形式两种创建方式。</p>

<ul>
<li><strong>是否支持 GPU 实例？</strong></li>
</ul>

<p>支持，跟非 GPU 方式一样。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#2a464646131e1b1b1a1d6a4d474b434604494547" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f124e566e3cede4',t:'MTczNDA1NDY1NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>