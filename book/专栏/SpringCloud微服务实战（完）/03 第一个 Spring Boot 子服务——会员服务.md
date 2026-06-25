<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=03&#32;第一个&#32;Spring&#32;Boot&#32;子服务——会员服务>
        <link rel="icon" href="/static/favicon.png">
        <title>03 第一个 Spring Boot 子服务——会员服务 </title>
        
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
                        <a class="menu-item" id="00 开篇导读.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/00%20%e5%bc%80%e7%af%87%e5%af%bc%e8%af%bb.md">00 开篇导读.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01 以真实“商场停车”业务切入——需求分析.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/01%20%e4%bb%a5%e7%9c%9f%e5%ae%9e%e2%80%9c%e5%95%86%e5%9c%ba%e5%81%9c%e8%bd%a6%e2%80%9d%e4%b8%9a%e5%8a%a1%e5%88%87%e5%85%a5%e2%80%94%e2%80%94%e9%9c%80%e6%b1%82%e5%88%86%e6%9e%90.md">01 以真实“商场停车”业务切入——需求分析.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 具象业务需求再抽象分解——系统设计.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/02%20%e5%85%b7%e8%b1%a1%e4%b8%9a%e5%8a%a1%e9%9c%80%e6%b1%82%e5%86%8d%e6%8a%bd%e8%b1%a1%e5%88%86%e8%a7%a3%e2%80%94%e2%80%94%e7%b3%bb%e7%bb%9f%e8%ae%be%e8%ae%a1.md">02 具象业务需求再抽象分解——系统设计.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 第一个 Spring Boot 子服务——会员服务.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/03%20%e7%ac%ac%e4%b8%80%e4%b8%aa%20Spring%20Boot%20%e5%ad%90%e6%9c%8d%e5%8a%a1%e2%80%94%e2%80%94%e4%bc%9a%e5%91%98%e6%9c%8d%e5%8a%a1.md">03 第一个 Spring Boot 子服务——会员服务.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 如何维护接口文档供外部调用——在线接口文档管理.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/04%20%e5%a6%82%e4%bd%95%e7%bb%b4%e6%8a%a4%e6%8e%a5%e5%8f%a3%e6%96%87%e6%a1%a3%e4%be%9b%e5%a4%96%e9%83%a8%e8%b0%83%e7%94%a8%e2%80%94%e2%80%94%e5%9c%a8%e7%ba%bf%e6%8e%a5%e5%8f%a3%e6%96%87%e6%a1%a3%e7%ae%a1%e7%90%86.md">04 如何维护接口文档供外部调用——在线接口文档管理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 认识 Spring Cloud 与 Spring Cloud Alibaba 项目.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/05%20%e8%ae%a4%e8%af%86%20Spring%20Cloud%20%e4%b8%8e%20Spring%20Cloud%20Alibaba%20%e9%a1%b9%e7%9b%ae.md">05 认识 Spring Cloud 与 Spring Cloud Alibaba 项目.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 服务多不易管理如何破——服务注册与发现.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/06%20%e6%9c%8d%e5%8a%a1%e5%a4%9a%e4%b8%8d%e6%98%93%e7%ae%a1%e7%90%86%e5%a6%82%e4%bd%95%e7%a0%b4%e2%80%94%e2%80%94%e6%9c%8d%e5%8a%a1%e6%b3%a8%e5%86%8c%e4%b8%8e%e5%8f%91%e7%8e%b0.md">06 服务多不易管理如何破——服务注册与发现.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 如何调用本业务模块外的服务——服务调用.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/07%20%e5%a6%82%e4%bd%95%e8%b0%83%e7%94%a8%e6%9c%ac%e4%b8%9a%e5%8a%a1%e6%a8%a1%e5%9d%97%e5%a4%96%e7%9a%84%e6%9c%8d%e5%8a%a1%e2%80%94%e2%80%94%e6%9c%8d%e5%8a%a1%e8%b0%83%e7%94%a8.md">07 如何调用本业务模块外的服务——服务调用.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 服务响应慢或服务不可用怎么办——快速失败与服务降级.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/08%20%e6%9c%8d%e5%8a%a1%e5%93%8d%e5%ba%94%e6%85%a2%e6%88%96%e6%9c%8d%e5%8a%a1%e4%b8%8d%e5%8f%af%e7%94%a8%e6%80%8e%e4%b9%88%e5%8a%9e%e2%80%94%e2%80%94%e5%bf%ab%e9%80%9f%e5%a4%b1%e8%b4%a5%e4%b8%8e%e6%9c%8d%e5%8a%a1%e9%99%8d%e7%ba%a7.md">08 服务响应慢或服务不可用怎么办——快速失败与服务降级.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 热更新一样更新服务的参数配置——分布式配置中心.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/09%20%e7%83%ad%e6%9b%b4%e6%96%b0%e4%b8%80%e6%a0%b7%e6%9b%b4%e6%96%b0%e6%9c%8d%e5%8a%a1%e7%9a%84%e5%8f%82%e6%95%b0%e9%85%8d%e7%bd%ae%e2%80%94%e2%80%94%e5%88%86%e5%b8%83%e5%bc%8f%e9%85%8d%e7%bd%ae%e4%b8%ad%e5%bf%83.md">09 热更新一样更新服务的参数配置——分布式配置中心.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 如何高效读取计费规则等热数据——分布式缓存.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/10%20%e5%a6%82%e4%bd%95%e9%ab%98%e6%95%88%e8%af%bb%e5%8f%96%e8%ae%a1%e8%b4%b9%e8%a7%84%e5%88%99%e7%ad%89%e7%83%ad%e6%95%b0%e6%8d%ae%e2%80%94%e2%80%94%e5%88%86%e5%b8%83%e5%bc%8f%e7%bc%93%e5%ad%98.md">10 如何高效读取计费规则等热数据——分布式缓存.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 多实例下的定时任务如何避免重复执行——分布式定时任务.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/11%20%e5%a4%9a%e5%ae%9e%e4%be%8b%e4%b8%8b%e7%9a%84%e5%ae%9a%e6%97%b6%e4%bb%bb%e5%8a%a1%e5%a6%82%e4%bd%95%e9%81%bf%e5%85%8d%e9%87%8d%e5%a4%8d%e6%89%a7%e8%a1%8c%e2%80%94%e2%80%94%e5%88%86%e5%b8%83%e5%bc%8f%e5%ae%9a%e6%97%b6%e4%bb%bb%e5%8a%a1.md">11 多实例下的定时任务如何避免重复执行——分布式定时任务.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 同一套服务如何应对不同终端的需求——服务适配.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/12%20%e5%90%8c%e4%b8%80%e5%a5%97%e6%9c%8d%e5%8a%a1%e5%a6%82%e4%bd%95%e5%ba%94%e5%af%b9%e4%b8%8d%e5%90%8c%e7%bb%88%e7%ab%af%e7%9a%84%e9%9c%80%e6%b1%82%e2%80%94%e2%80%94%e6%9c%8d%e5%8a%a1%e9%80%82%e9%85%8d.md">12 同一套服务如何应对不同终端的需求——服务适配.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 采用消息驱动方式处理扣费通知——集成消息中间件.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/13%20%e9%87%87%e7%94%a8%e6%b6%88%e6%81%af%e9%a9%b1%e5%8a%a8%e6%96%b9%e5%bc%8f%e5%a4%84%e7%90%86%e6%89%a3%e8%b4%b9%e9%80%9a%e7%9f%a5%e2%80%94%e2%80%94%e9%9b%86%e6%88%90%e6%b6%88%e6%81%af%e4%b8%ad%e9%97%b4%e4%bb%b6.md">13 采用消息驱动方式处理扣费通知——集成消息中间件.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 Spring Cloud 与 Dubbo 冲突吗——强强联合.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/14%20Spring%20Cloud%20%e4%b8%8e%20Dubbo%20%e5%86%b2%e7%aa%81%e5%90%97%e2%80%94%e2%80%94%e5%bc%ba%e5%bc%ba%e8%81%94%e5%90%88.md">14 Spring Cloud 与 Dubbo 冲突吗——强强联合.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 破解服务中共性问题的繁琐处理方式——接入 API 网关.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/15%20%e7%a0%b4%e8%a7%a3%e6%9c%8d%e5%8a%a1%e4%b8%ad%e5%85%b1%e6%80%a7%e9%97%ae%e9%a2%98%e7%9a%84%e7%b9%81%e7%90%90%e5%a4%84%e7%90%86%e6%96%b9%e5%bc%8f%e2%80%94%e2%80%94%e6%8e%a5%e5%85%a5%20API%20%e7%bd%91%e5%85%b3.md">15 破解服务中共性问题的繁琐处理方式——接入 API 网关.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 服务压力大系统响应慢如何破——网关流量控制.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/16%20%e6%9c%8d%e5%8a%a1%e5%8e%8b%e5%8a%9b%e5%a4%a7%e7%b3%bb%e7%bb%9f%e5%93%8d%e5%ba%94%e6%85%a2%e5%a6%82%e4%bd%95%e7%a0%b4%e2%80%94%e2%80%94%e7%bd%91%e5%85%b3%e6%b5%81%e9%87%8f%e6%8e%a7%e5%88%b6.md">16 服务压力大系统响应慢如何破——网关流量控制.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 集成网关后怎么做安全验证——统一鉴权.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/17%20%e9%9b%86%e6%88%90%e7%bd%91%e5%85%b3%e5%90%8e%e6%80%8e%e4%b9%88%e5%81%9a%e5%ae%89%e5%85%a8%e9%aa%8c%e8%af%81%e2%80%94%e2%80%94%e7%bb%9f%e4%b8%80%e9%89%b4%e6%9d%83.md">17 集成网关后怎么做安全验证——统一鉴权.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 多模块下的接口 API 如何统一管理——聚合 API.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/18%20%e5%a4%9a%e6%a8%a1%e5%9d%97%e4%b8%8b%e7%9a%84%e6%8e%a5%e5%8f%a3%20API%20%e5%a6%82%e4%bd%95%e7%bb%9f%e4%b8%80%e7%ae%a1%e7%90%86%e2%80%94%e2%80%94%e8%81%9a%e5%90%88%20API.md">18 多模块下的接口 API 如何统一管理——聚合 API.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 数据分库后如何确保数据完整性——分布式事务.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/19%20%e6%95%b0%e6%8d%ae%e5%88%86%e5%ba%93%e5%90%8e%e5%a6%82%e4%bd%95%e7%a1%ae%e4%bf%9d%e6%95%b0%e6%8d%ae%e5%ae%8c%e6%95%b4%e6%80%a7%e2%80%94%e2%80%94%e5%88%86%e5%b8%83%e5%bc%8f%e4%ba%8b%e5%8a%a1.md">19 数据分库后如何确保数据完整性——分布式事务.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 优惠券如何避免超兑——引入分布式锁.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/20%20%e4%bc%98%e6%83%a0%e5%88%b8%e5%a6%82%e4%bd%95%e9%81%bf%e5%85%8d%e8%b6%85%e5%85%91%e2%80%94%e2%80%94%e5%bc%95%e5%85%a5%e5%88%86%e5%b8%83%e5%bc%8f%e9%94%81.md">20 优惠券如何避免超兑——引入分布式锁.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 如何查看各服务的健康状况——系统应用监控.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/21%20%e5%a6%82%e4%bd%95%e6%9f%a5%e7%9c%8b%e5%90%84%e6%9c%8d%e5%8a%a1%e7%9a%84%e5%81%a5%e5%ba%b7%e7%8a%b6%e5%86%b5%e2%80%94%e2%80%94%e7%b3%bb%e7%bb%9f%e5%ba%94%e7%94%a8%e7%9b%91%e6%8e%a7.md">21 如何查看各服务的健康状况——系统应用监控.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 如何确定一次完整的请求过程——服务链路跟踪.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/22%20%e5%a6%82%e4%bd%95%e7%a1%ae%e5%ae%9a%e4%b8%80%e6%ac%a1%e5%ae%8c%e6%95%b4%e7%9a%84%e8%af%b7%e6%b1%82%e8%bf%87%e7%a8%8b%e2%80%94%e2%80%94%e6%9c%8d%e5%8a%a1%e9%93%be%e8%b7%af%e8%b7%9f%e8%b8%aa.md">22 如何确定一次完整的请求过程——服务链路跟踪.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 结束语.md" href="/%e4%b8%93%e6%a0%8f/SpringCloud%e5%be%ae%e6%9c%8d%e5%8a%a1%e5%ae%9e%e6%88%98%ef%bc%88%e5%ae%8c%ef%bc%89/23%20%e7%bb%93%e6%9d%9f%e8%af%ad.md">23 结束语.md</a>
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
                            <h1 id="title" data-id="03 第一个 Spring Boot 子服务——会员服务" class="title">03 第一个 Spring Boot 子服务——会员服务</h1>
                            <div><p>经过上两个章节的分析、设计工作，相信你已经对项目的整体结构有了更清晰的认识，剩下的工作就是依据设计，将项目骨架拉出来，往里面直充血肉。</p>

<h3 id="搭建项目骨架">搭建项目骨架</h3>

<p>约定项目名称为 parking-project ，建立 Maven 项目，packaging 方式 为 pom，用于管理所有模块。在 parking-project 项目下依据功能模块依次建立 maven module 子项目。IDE 工具采用 Eclipse IDE Photon Release (4.8.0)。</p>

<p>一、以 Maven Project 形式创建父项目，用于管理子模块功能</p>

<p><img src="assets/2020-05-05-021624.jpg" alt="img" /></p>

<p>二、在父项目下，以 Maven Module 创建子模块。</p>

<p><img src="assets/2020-05-05-021625.jpg" alt="img" /></p>

<p>可以看到，子模块自动将 parent project 设置为 parking-project 父项目。由于是采用 Spring Boot 的方式构建子项目，此处选择 packaging 方式为 jar 。依此连续创建各种子模块即可，最终的结果如下：</p>

<p><img src="assets/2020-05-05-021627.jpg" alt="img" /></p>

<p>简单介绍下各模块的功用：</p>

<ol>
<li>parking-base-serv，pom 项目，里面包含两个子模块：parking-admin，parking-gateway。</li>
<li>parking-admin，监控子项目的运行情况。</li>
<li>parking-gateway，网关子服务，配合 JWT 实现会话、验权等功用。</li>
<li>parking-carwash，洗车子服务，连接 park-carwash 数据库。</li>
<li>parking-card，积分子服务，连接 park-card 数据库。</li>
<li>parking-charging，计费子服务，连接 parking-charging 存储库</li>
<li>parking-finance，财务子服务，连接 parking-finance 存储库。</li>
<li>parking-member，会员子服务，连接 park-member 存储库。</li>
<li>parking-resource，资源子服务，连接 park-resource 存储库。</li>
<li>parking-message，消息子服务，连接 park-message 存储库，连同 rocketmq 存储消息数据</li>
<li>parking-common，存储通用的工具类，实体包等等。</li>
</ol>

<p>这是一种手动的方式创建项目，里面依赖的组件都需要手工添加。这里再介绍一种方式，直接采用官方的 Spring Initializr 来初始化项目，分别生成子项目后，再将他们组装成一定的项目结构。</p>

<ol>
<li>选择是 maven 项目，还是 gradle 项目。(两种不同的构建方式)</li>
<li>项目语言，是 Java、Kotlin 还是 Groovy ，三种基于 JVM 的语言</li>
<li>Spring Boot 的版本选择</li>
<li>项目的 groupId、artifact</li>
<li>项目依赖 search，搜索后，直接点击后面的&rdquo;+“即可依赖进去。</li>
<li>点击下文的按钮&rdquo; Generate &ldquo;即可生成 zip 文件，将项目引入 eclipse / idea 即可使用。</li>
</ol>

<p>官网地址：<a href="https://start.spring.io/" target="_blank">https://start.spring.io/</a></p>

<h3 id="创建-spring-boot-子服务">创建 Spring Boot 子服务</h3>

<h4 id="引入-spring-boot-starter-parent-依赖">引入 spring-boot-starter-parent 依赖</h4>

<p>每个子模块都是一个 Spring Boot 项目，如果在子模块中引入，会造成大量的重复工作，而且版本不宜统一维护，容易出现多版本的混乱局面，所以 Spring Boot 的版本需要全局统一维护。</p>

<p>每个子项目需要构建成 jar 文件运行，子项目中已经依赖父项目的配置，每个子项目 pom.xml 文件都有这样的依赖：</p>

<pre><code class="language-java">    &lt;parent&gt;
        &lt;groupId&gt;com.mall.parking.root&lt;/groupId&gt;
        &lt;artifactId&gt;parking-project&lt;/artifactId&gt;
        &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
    &lt;/parent&gt;

</code></pre>

<p>如果按照常见的方式，再用 parent 方式引入 spring-boot-starter-parent 依赖，显然违背单个 pom 文件中只有一个 parent 标签的标准，编译就会不通过。</p>

<pre><code class="language-java">&lt;parent&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
    &lt;version&gt;2.2.2.RELEASE&lt;/version&gt;
    &lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;
  &lt;/parent&gt;

</code></pre>

<p>为解决这个问题，此处采用 parking-project 父项目中以 depencyMangement 方式引入 spring-boot-starter-parent，子项目依赖 parent 父配置即可。</p>

<pre><code class="language-java">    &lt;dependencyManagement&gt;
        &lt;dependencies&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-dependencies&lt;/artifactId&gt;
                &lt;version&gt;${spring.boot.version}&lt;/version&gt;
                &lt;type&gt;pom&lt;/type&gt;
                &lt;scope&gt;import&lt;/scope&gt;
            &lt;/dependency&gt;
        &lt;/dependencies&gt;
    &lt;/dependencyManagement&gt;

</code></pre>

<blockquote>
<p>有小伙伴可能会提出直接在根项目的 pom 采用 parent 的方式引入，子模块直接通过 maven 依赖就可以，这种方式在独立运行 Spring Boot 项目时没问题。后续以同样的方式引入 Spring Cloud 或 Spring Cloud Alibaba ，一个 parent 标签显然不满足这个需求，用 dependencyManagement 的方式可以规避这个问题。</p>
</blockquote>

<h4 id="引入-mbg-插件">引入 MBG 插件</h4>

<p>MBG 插件可以自动生成 mapper 接口、mapper xml 配置、相应实体类，主要作用在于快速开发，省去不必要的代码编写。详细介绍可参见文档：<a href="https://mybatis.org/generator/" target="_blank">https://mybatis.org/generator/</a></p>

<p>在 pom 中配置依赖 MBG 的插件：</p>

<pre><code class="language-xml">&lt;build&gt;
    &lt;finalName&gt;parking-member-service&lt;/finalName&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.mybatis.generator&lt;/groupId&gt;
            &lt;artifactId&gt;mybatis-generator-maven-plugin&lt;/artifactId&gt;
            &lt;version&gt;1.4.0&lt;/version&gt;
            &lt;configuration&gt;
                &lt;!-- mybatis 用于生成代码的配置文件 --&gt;
                &lt;configurationFile&gt;src/test/resources/generatorConfig.xml&lt;/configurationFile&gt;
                &lt;verbose&gt;true&lt;/verbose&gt;
                &lt;overwrite&gt;true&lt;/overwrite&gt;
            &lt;/configuration&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;

</code></pre>

<p>在 src/test/resource 目录下写入 generatorConfig.xml 文件，配置 MBG 插件 所需的基本配置项。</p>

<pre><code class="language-xml">&lt;generatorConfiguration&gt;
&lt;!-- 本地 mysql 驱动位置 --&gt;
  &lt;classPathEntry location=&quot;/Users/apple/.m2/repository/mysql/mysql-connector-java/5.1.42/mysql-connector-java-5.1.42.jar&quot; /&gt;

  &lt;context id=&quot;mysqlTables&quot; targetRuntime=&quot;MyBatis3&quot;&gt;
    &lt;jdbcConnection driverClass=&quot;com.mysql.jdbc.Driver&quot;
                        connectionURL=&quot;jdbc:mysql://localhost:3306/park-member?useUnicode=true&quot; userId=&quot;root&quot;
                        password=&quot;root&quot;&gt;
                        &lt;property name=&quot;useInformationSchema&quot; value=&quot;true&quot;/&gt;
    &lt;/jdbcConnection&gt;

    &lt;javaTypeResolver &gt;
      &lt;property name=&quot;forceBigDecimals&quot; value=&quot;false&quot; /&gt;
    &lt;/javaTypeResolver&gt;

&lt;!-- 生成 model 实体类文件位置 --&gt;
    &lt;javaModelGenerator targetPackage=&quot;com.mall.parking.member.entity&quot; targetProject=&quot;src/test/java&quot;&gt;
      &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot; /&gt;
      &lt;property name=&quot;trimStrings&quot; value=&quot;true&quot; /&gt;
    &lt;/javaModelGenerator&gt;
&lt;!-- 生成 mapper.xml 配置文件位置 --&gt;
    &lt;sqlMapGenerator targetPackage=&quot;mybatis.mapper&quot;  targetProject=&quot;src/test/resources&quot;&gt;
      &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot; /&gt;
    &lt;/sqlMapGenerator&gt;
&lt;!-- 生成 mapper 接口文件位置 --&gt;
    &lt;javaClientGenerator type=&quot;XMLMAPPER&quot; targetPackage=&quot;com.mall.parking.member.mapper&quot;  targetProject=&quot;src/test/java&quot;&gt;
      &lt;property name=&quot;enableSubPackages&quot; value=&quot;true&quot; /&gt;
    &lt;/javaClientGenerator&gt;

&lt;!-- 需要生成的实体类对应的表名，多个实体类复制多份该配置即可 --&gt;
     &lt;table tableName=&quot;member&quot; domainObjectName=&quot;Member&quot;&gt;
        &lt;generatedKey column=&quot;tid&quot; sqlStatement=&quot;SELECT REPLACE(UUID(), '-', '')&quot;/&gt;
    &lt;/table&gt;
    &lt;table tableName=&quot;vehicle&quot; domainObjectName=&quot;Vehicle&quot;&gt;
        &lt;generatedKey column=&quot;tid&quot; sqlStatement=&quot;SELECT REPLACE(UUID(), '-', '')&quot;/&gt;
    &lt;/table&gt;
    &lt;table tableName=&quot;month_card&quot; domainObjectName=&quot;MonthCard&quot;&gt;
        &lt;generatedKey column=&quot;tid&quot; sqlStatement=&quot;SELECT REPLACE(UUID(), '-', '')&quot;/&gt;
    &lt;/table&gt;
  &lt;/context&gt;
&lt;/generatorConfiguration&gt;

</code></pre>

<p>配置完成后，在项目名称” parking-member “ 上右键，弹出菜单中选择&rdquo; Run As &ldquo; —&gt;&rdquo; Maven build… &ldquo;，在 Goals 栏目中输入如下命令：</p>

<pre><code class="language-java">mybatis-generator:generate

</code></pre>

<p><img src="assets/2020-05-05-021629.jpg" alt="img" /></p>

<p>命令执行成功后，在对应的目录下找到相应的文件，而后 copy 到 src/java 对应的目录下，再将 tes t 目录下生成的文件删除。</p>

<blockquote>
<p>注：</p>

<ul>
<li>1.4 版本之前的，MBG 插件生成的 xml 文件，是追加模式，而不是覆盖，容易形成重复的标签。</li>
<li>MBG 并不会生成 controller/service 层相关的代码，需要自己手动完成。</li>
</ul>
</blockquote>

<h4 id="引入-lombok-简化代码">引入 Lombok，简化代码</h4>

<p>官方给出的定义：</p>

<blockquote>
<p>Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java. Never write another getter or equals method again, with one annotation your class has a fully featured builder, Automate your logging variables, and much more.</p>
</blockquote>

<h5 id="lombok-安装">lombok 安装</h5>

<p>lombok.jar 官方下载地址：<a href="https://projectlombok.org/download" target="_blank">https://projectlombok.org/download</a></p>

<p>由于编译阶段就要使用 lombok，所以需要在 IDE 中安装 lombok 插件，才能正常编译。</p>

<ol>
<li>eclipse 下安装 lombok</li>
</ol>

<p>双击下载好的 lombok.jar，弹出选择框，选择&rdquo; Specify location &ldquo;，选择 eclipse 的安装目录，选中执行文件，执行 install/update 操作。安装完成后退出，可以看到 eclipse.ini 文件中多出一个配置行</p>

<blockquote>
<p>-javaagent:${eclipse-home}\lombok.jar</p>
</blockquote>

<ol>
<li>重启 eclipse 即可。</li>
<li>IDEA 中安装 lombok</li>
</ol>

<p>选择&rdquo; settings &ldquo;，点击&rdquo; plugins “选项，点击&rdquo; Browse repositories &ldquo;，查找&rdquo; lombok &ldquo;，选择筛选出来的&rdquo; lombok plugin &ldquo;，进行 install 操作。</p>

<p>安装完成后在 pom.xml 上引入对应的 jar。</p>

<h5 id="sl4j-日志注解">sl4j 日志注解</h5>

<p>如果不想每次都写</p>

<pre><code>private  final Logger logger = LoggerFactory.getLogger(当前类名.class);

</code></pre>

<p>可以用注解[@Slf4j ] 来打印日志。</p>

<h4 id="引入-mybatis">引入 MyBatis</h4>

<p>更高效的引入 MyBatis，这里采用  starter 的方式引入，同样在根 pom.xml 文件中维护组件的版本。</p>

<pre><code class="language-java">&lt;dependency&gt;
    &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;mysql&lt;/groupId&gt;
    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre>

<p>在 application.properties 配置文件中设置数据库连接，Spring Boot 2.x 版本默认采用是 HikariCP 作为 JDBC 连接池。</p>

<pre><code class="language-sql">mybatis.type-aliases-package=com.mall.parking.member.entity

#如果需要更换 Druid 连接池，需要增加如下的配置项：
#spring.datasource.type=com.alibaba.druid.pool.DruidDataSource

#use new driver replace deprecated driver:com.mysql.jdbc.Driver.
spring.datasource.driverClassName = com.mysql.cj.jdbc.Driver
spring.datasource.url = jdbc:mysql://localhost:3306/park_member?useUnicode=true&amp;characterEncoding=utf-8
spring.datasource.username = root
spring.datasource.password = root

</code></pre>

<p>使 mapper 接口文件能够被系统扫描，在主类中通过 [@mapperScan ] 注解，或直接在 mapper 接口文件上加 [@mapper ] 注解。</p>

<p>编写一个简单的测试方法，检验框架能否运转良好。</p>

<pre><code class="language-java">@RestController
@RequestMapping(&quot;member&quot;)
@Slf4j
public class MemberController {

    @Autowired
    MemberService memberService;

    @RequestMapping(&quot;/list&quot;)
    public List&lt;Member&gt; list() {
        List&lt;Member&gt; members = memberService.list();
        log.debug(&quot;query member list = &quot; + members);
        return members;
    }

}

</code></pre>

<p>MemberService 接口类</p>

<pre><code class="language-java">List&lt;Member&gt; list();

</code></pre>

<p>MemberServiceImpl 实现类</p>

<pre><code class="language-java">@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    MemberMapper memberMapper;

    @Override
    public List&lt;Member&gt; list() {
        MemberExample example = new MemberExample();
        List&lt;Member&gt; members = memberMapper.selectByExample(example);
        return members;
    }

}

</code></pre>

<p>启动项目，成功后显示成功日志：</p>

<pre><code>2019-12-30 16:45:13.496  INFO 9784 --- [           main] c.mall.parking.member.MemberApplication  : Started MemberApplication in 6.52 seconds (JVM running for 7.753)

</code></pre>

<p>打开 Postman 插件，测试刚才的方法是否正常，操作如下：</p>

<p><img src="assets/2020-05-05-021640.jpg" alt="img" /></p>

<h4 id="多环境配置">多环境配置</h4>

<p>日常产品研发中必然涉及到多部署的问题，比如开发环境、测试环境、生产环境等，这就要求代码部署能够应对多环境的要求。通过人工修改的方式，不但容易出错，也会浪费人力成本，必须结合自动化构建来提高准确性。Spring Boot 提供了基于 profile 的多环境配置，可以在各微服务项目上增加多个配置文件，如</p>

<blockquote>
<p>application.properties/yml  基础公共配置 application-dev.properties/yml  开发环境配置 application-test.properties/yml 测试环境配置 application-pro.properties/yml  生产环境配置</p>
</blockquote>

<p>在公共配置文件 application.properties 中，通过配置 <code>spring.profiles.active = dev</code> 来决定启用哪个配置，或在启动构建包时，增加命令来激活不同的环境配置： <code>java -jar parking-member.jar --spring.profiles.active=dev</code></p>

<p>至此，第一个简单的 Spring Boot 模块搭建完成，下一步将 park-member 模块的正常业务功能编码完成即可。为便于后续课程的顺利开展，可仿照本篇的框架配置，将剩余几个子模块的基本配置完善起来，达到正常使用的目标。</p>

<h3 id="留一个思考题">留一个思考题</h3>

<p>往常情况下，构建出的 war 项目运行时可以受理 HTTP 请求，Spring Boot 项目构建出的 jar 运行时为什么也可以受理 HTTP 请求呢？它是如何做到的呢？</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#bed2d2d2878a8f8f8e89fed9d3dfd7d290ddd1d3" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f127eee2a64ede4',t:'MTczNDA1NjY0NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>