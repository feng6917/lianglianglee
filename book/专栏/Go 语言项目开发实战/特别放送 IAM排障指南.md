<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=特别放送&#32;IAM排障指南>
        <link rel="icon" href="/static/favicon.png">
        <title>特别放送 IAM排障指南 </title>
        
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
                        <a class="menu-item" id="00 开篇词 从 0 开始搭建一个企业级 Go 应用.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/00%20%e5%bc%80%e7%af%87%e8%af%8d%20%e4%bb%8e%200%20%e5%bc%80%e5%a7%8b%e6%90%ad%e5%bb%ba%e4%b8%80%e4%b8%aa%e4%bc%81%e4%b8%9a%e7%ba%a7%20Go%20%e5%ba%94%e7%94%a8.md">00 开篇词 从 0 开始搭建一个企业级 Go 应用.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01 IAM系统概述：我们要实现什么样的 Go 项目？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/01%20IAM%e7%b3%bb%e7%bb%9f%e6%a6%82%e8%bf%b0%ef%bc%9a%e6%88%91%e4%bb%ac%e8%a6%81%e5%ae%9e%e7%8e%b0%e4%bb%80%e4%b9%88%e6%a0%b7%e7%9a%84%20Go%20%e9%a1%b9%e7%9b%ae%ef%bc%9f.md">01 IAM系统概述：我们要实现什么样的 Go 项目？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 环境准备：如何安装和配置一个基本的 Go 开发环境？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/02%20%e7%8e%af%e5%a2%83%e5%87%86%e5%a4%87%ef%bc%9a%e5%a6%82%e4%bd%95%e5%ae%89%e8%a3%85%e5%92%8c%e9%85%8d%e7%bd%ae%e4%b8%80%e4%b8%aa%e5%9f%ba%e6%9c%ac%e7%9a%84%20Go%20%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%ef%bc%9f.md">02 环境准备：如何安装和配置一个基本的 Go 开发环境？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 项目部署：如何快速部署 IAM 系统？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/03%20%e9%a1%b9%e7%9b%ae%e9%83%a8%e7%bd%b2%ef%bc%9a%e5%a6%82%e4%bd%95%e5%bf%ab%e9%80%9f%e9%83%a8%e7%bd%b2%20IAM%20%e7%b3%bb%e7%bb%9f%ef%bc%9f.md">03 项目部署：如何快速部署 IAM 系统？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 规范设计（上）：项目开发杂乱无章，如何规范？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/04%20%e8%a7%84%e8%8c%83%e8%ae%be%e8%ae%a1%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e6%9d%82%e4%b9%b1%e6%97%a0%e7%ab%a0%ef%bc%8c%e5%a6%82%e4%bd%95%e8%a7%84%e8%8c%83%ef%bc%9f.md">04 规范设计（上）：项目开发杂乱无章，如何规范？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 规范设计（下）：commit 信息风格迥异、难以阅读，如何规范？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/05%20%e8%a7%84%e8%8c%83%e8%ae%be%e8%ae%a1%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9acommit%20%e4%bf%a1%e6%81%af%e9%a3%8e%e6%a0%bc%e8%bf%a5%e5%bc%82%e3%80%81%e9%9a%be%e4%bb%a5%e9%98%85%e8%af%bb%ef%bc%8c%e5%a6%82%e4%bd%95%e8%a7%84%e8%8c%83%ef%bc%9f.md">05 规范设计（下）：commit 信息风格迥异、难以阅读，如何规范？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 目录结构设计：如何组织一个可维护、可扩展的代码目录？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/06%20%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84%e8%ae%be%e8%ae%a1%ef%bc%9a%e5%a6%82%e4%bd%95%e7%bb%84%e7%bb%87%e4%b8%80%e4%b8%aa%e5%8f%af%e7%bb%b4%e6%8a%a4%e3%80%81%e5%8f%af%e6%89%a9%e5%b1%95%e7%9a%84%e4%bb%a3%e7%a0%81%e7%9b%ae%e5%bd%95%ef%bc%9f.md">06 目录结构设计：如何组织一个可维护、可扩展的代码目录？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 工作流设计：如何设计合理的多人开发模式？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/07%20%e5%b7%a5%e4%bd%9c%e6%b5%81%e8%ae%be%e8%ae%a1%ef%bc%9a%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1%e5%90%88%e7%90%86%e7%9a%84%e5%a4%9a%e4%ba%ba%e5%bc%80%e5%8f%91%e6%a8%a1%e5%bc%8f%ef%bc%9f.md">07 工作流设计：如何设计合理的多人开发模式？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 研发流程设计（上）：如何设计 Go 项目的开发流程？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/08%20%e7%a0%94%e5%8f%91%e6%b5%81%e7%a8%8b%e8%ae%be%e8%ae%a1%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1%20Go%20%e9%a1%b9%e7%9b%ae%e7%9a%84%e5%bc%80%e5%8f%91%e6%b5%81%e7%a8%8b%ef%bc%9f.md">08 研发流程设计（上）：如何设计 Go 项目的开发流程？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 研发流程设计（下）：如何管理应用的生命周期？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/09%20%e7%a0%94%e5%8f%91%e6%b5%81%e7%a8%8b%e8%ae%be%e8%ae%a1%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e7%ae%a1%e7%90%86%e5%ba%94%e7%94%a8%e7%9a%84%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f%ef%bc%9f.md">09 研发流程设计（下）：如何管理应用的生命周期？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 设计方法：怎么写出优雅的 Go 项目？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/10%20%e8%ae%be%e8%ae%a1%e6%96%b9%e6%b3%95%ef%bc%9a%e6%80%8e%e4%b9%88%e5%86%99%e5%87%ba%e4%bc%98%e9%9b%85%e7%9a%84%20Go%20%e9%a1%b9%e7%9b%ae%ef%bc%9f.md">10 设计方法：怎么写出优雅的 Go 项目？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 设计模式：Go常用设计模式概述.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/11%20%e8%ae%be%e8%ae%a1%e6%a8%a1%e5%bc%8f%ef%bc%9aGo%e5%b8%b8%e7%94%a8%e8%ae%be%e8%ae%a1%e6%a8%a1%e5%bc%8f%e6%a6%82%e8%bf%b0.md">11 设计模式：Go常用设计模式概述.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 API 风格（上）：如何设计RESTful API？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/12%20API%20%e9%a3%8e%e6%a0%bc%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1RESTful%20API%ef%bc%9f.md">12 API 风格（上）：如何设计RESTful API？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 API 风格（下）：RPC API介绍.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/13%20API%20%e9%a3%8e%e6%a0%bc%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9aRPC%20API%e4%bb%8b%e7%bb%8d.md">13 API 风格（下）：RPC API介绍.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 项目管理：如何编写高质量的Makefile？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/14%20%e9%a1%b9%e7%9b%ae%e7%ae%a1%e7%90%86%ef%bc%9a%e5%a6%82%e4%bd%95%e7%bc%96%e5%86%99%e9%ab%98%e8%b4%a8%e9%87%8f%e7%9a%84Makefile%ef%bc%9f.md">14 项目管理：如何编写高质量的Makefile？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 研发流程实战：IAM项目是如何进行研发流程管理的？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/15%20%e7%a0%94%e5%8f%91%e6%b5%81%e7%a8%8b%e5%ae%9e%e6%88%98%ef%bc%9aIAM%e9%a1%b9%e7%9b%ae%e6%98%af%e5%a6%82%e4%bd%95%e8%bf%9b%e8%a1%8c%e7%a0%94%e5%8f%91%e6%b5%81%e7%a8%8b%e7%ae%a1%e7%90%86%e7%9a%84%ef%bc%9f.md">15 研发流程实战：IAM项目是如何进行研发流程管理的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 代码检查：如何进行静态代码检查？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/16%20%e4%bb%a3%e7%a0%81%e6%a3%80%e6%9f%a5%ef%bc%9a%e5%a6%82%e4%bd%95%e8%bf%9b%e8%a1%8c%e9%9d%99%e6%80%81%e4%bb%a3%e7%a0%81%e6%a3%80%e6%9f%a5%ef%bc%9f.md">16 代码检查：如何进行静态代码检查？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 API 文档：如何生成 Swagger API 文档 ？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/17%20API%20%e6%96%87%e6%a1%a3%ef%bc%9a%e5%a6%82%e4%bd%95%e7%94%9f%e6%88%90%20Swagger%20API%20%e6%96%87%e6%a1%a3%20%ef%bc%9f.md">17 API 文档：如何生成 Swagger API 文档 ？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 错误处理（上）：如何设计一套科学的错误码？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/18%20%e9%94%99%e8%af%af%e5%a4%84%e7%90%86%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1%e4%b8%80%e5%a5%97%e7%a7%91%e5%ad%a6%e7%9a%84%e9%94%99%e8%af%af%e7%a0%81%ef%bc%9f.md">18 错误处理（上）：如何设计一套科学的错误码？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 错误处理（下）：如何设计错误包？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/19%20%e9%94%99%e8%af%af%e5%a4%84%e7%90%86%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1%e9%94%99%e8%af%af%e5%8c%85%ef%bc%9f.md">19 错误处理（下）：如何设计错误包？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 日志处理（上）：如何设计日志包并记录日志？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/20%20%e6%97%a5%e5%bf%97%e5%a4%84%e7%90%86%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1%e6%97%a5%e5%bf%97%e5%8c%85%e5%b9%b6%e8%ae%b0%e5%bd%95%e6%97%a5%e5%bf%97%ef%bc%9f.md">20 日志处理（上）：如何设计日志包并记录日志？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 日志处理（下）：手把手教你从 0 编写一个日志包.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/21%20%e6%97%a5%e5%bf%97%e5%a4%84%e7%90%86%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e6%89%8b%e6%8a%8a%e6%89%8b%e6%95%99%e4%bd%a0%e4%bb%8e%200%20%e7%bc%96%e5%86%99%e4%b8%80%e4%b8%aa%e6%97%a5%e5%bf%97%e5%8c%85.md">21 日志处理（下）：手把手教你从 0 编写一个日志包.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 应用构建三剑客：Pflag、Viper、Cobra 核心功能介绍.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/22%20%e5%ba%94%e7%94%a8%e6%9e%84%e5%bb%ba%e4%b8%89%e5%89%91%e5%ae%a2%ef%bc%9aPflag%e3%80%81Viper%e3%80%81Cobra%20%e6%a0%b8%e5%bf%83%e5%8a%9f%e8%83%bd%e4%bb%8b%e7%bb%8d.md">22 应用构建三剑客：Pflag、Viper、Cobra 核心功能介绍.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 应用构建实战：如何构建一个优秀的企业应用框架？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/23%20%e5%ba%94%e7%94%a8%e6%9e%84%e5%bb%ba%e5%ae%9e%e6%88%98%ef%bc%9a%e5%a6%82%e4%bd%95%e6%9e%84%e5%bb%ba%e4%b8%80%e4%b8%aa%e4%bc%98%e7%a7%80%e7%9a%84%e4%bc%81%e4%b8%9a%e5%ba%94%e7%94%a8%e6%a1%86%e6%9e%b6%ef%bc%9f.md">23 应用构建实战：如何构建一个优秀的企业应用框架？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 Web 服务：Web 服务核心功能有哪些，如何实现？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/24%20Web%20%e6%9c%8d%e5%8a%a1%ef%bc%9aWeb%20%e6%9c%8d%e5%8a%a1%e6%a0%b8%e5%bf%83%e5%8a%9f%e8%83%bd%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%8c%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%ef%bc%9f.md">24 Web 服务：Web 服务核心功能有哪些，如何实现？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25 认证机制：应用程序如何进行访问认证？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/25%20%e8%ae%a4%e8%af%81%e6%9c%ba%e5%88%b6%ef%bc%9a%e5%ba%94%e7%94%a8%e7%a8%8b%e5%ba%8f%e5%a6%82%e4%bd%95%e8%bf%9b%e8%a1%8c%e8%ae%bf%e9%97%ae%e8%ae%a4%e8%af%81%ef%bc%9f.md">25 认证机制：应用程序如何进行访问认证？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 IAM项目是如何设计和实现访问认证功能的？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/26%20IAM%e9%a1%b9%e7%9b%ae%e6%98%af%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1%e5%92%8c%e5%ae%9e%e7%8e%b0%e8%ae%bf%e9%97%ae%e8%ae%a4%e8%af%81%e5%8a%9f%e8%83%bd%e7%9a%84%ef%bc%9f.md">26 IAM项目是如何设计和实现访问认证功能的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 权限模型：5大权限模型是如何进行资源授权的？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/27%20%e6%9d%83%e9%99%90%e6%a8%a1%e5%9e%8b%ef%bc%9a5%e5%a4%a7%e6%9d%83%e9%99%90%e6%a8%a1%e5%9e%8b%e6%98%af%e5%a6%82%e4%bd%95%e8%bf%9b%e8%a1%8c%e8%b5%84%e6%ba%90%e6%8e%88%e6%9d%83%e7%9a%84%ef%bc%9f.md">27 权限模型：5大权限模型是如何进行资源授权的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 控制流（上）：通过iam-apiserver设计，看Web服务的构建.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/28%20%e6%8e%a7%e5%88%b6%e6%b5%81%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e9%80%9a%e8%bf%87iam-apiserver%e8%ae%be%e8%ae%a1%ef%bc%8c%e7%9c%8bWeb%e6%9c%8d%e5%8a%a1%e7%9a%84%e6%9e%84%e5%bb%ba.md">28 控制流（上）：通过iam-apiserver设计，看Web服务的构建.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 控制流（下）：iam-apiserver服务核心功能实现讲解.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/29%20%e6%8e%a7%e5%88%b6%e6%b5%81%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9aiam-apiserver%e6%9c%8d%e5%8a%a1%e6%a0%b8%e5%bf%83%e5%8a%9f%e8%83%bd%e5%ae%9e%e7%8e%b0%e8%ae%b2%e8%a7%a3.md">29 控制流（下）：iam-apiserver服务核心功能实现讲解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30 ORM：CURD 神器 GORM 包介绍及实战.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/30%20ORM%ef%bc%9aCURD%20%e7%a5%9e%e5%99%a8%20GORM%20%e5%8c%85%e4%bb%8b%e7%bb%8d%e5%8f%8a%e5%ae%9e%e6%88%98.md">30 ORM：CURD 神器 GORM 包介绍及实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31 数据流：通过iam-authz-server设计，看数据流服务的设计.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/31%20%e6%95%b0%e6%8d%ae%e6%b5%81%ef%bc%9a%e9%80%9a%e8%bf%87iam-authz-server%e8%ae%be%e8%ae%a1%ef%bc%8c%e7%9c%8b%e6%95%b0%e6%8d%ae%e6%b5%81%e6%9c%8d%e5%8a%a1%e7%9a%84%e8%ae%be%e8%ae%a1.md">31 数据流：通过iam-authz-server设计，看数据流服务的设计.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32 数据处理：如何高效处理应用程序产生的数据？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/32%20%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%ef%bc%9a%e5%a6%82%e4%bd%95%e9%ab%98%e6%95%88%e5%a4%84%e7%90%86%e5%ba%94%e7%94%a8%e7%a8%8b%e5%ba%8f%e4%ba%a7%e7%94%9f%e7%9a%84%e6%95%b0%e6%8d%ae%ef%bc%9f.md">32 数据处理：如何高效处理应用程序产生的数据？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33  SDK 设计（上）：如何设计出一个优秀的 Go SDK？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/33%20%20SDK%20%e8%ae%be%e8%ae%a1%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1%e5%87%ba%e4%b8%80%e4%b8%aa%e4%bc%98%e7%a7%80%e7%9a%84%20Go%20SDK%ef%bc%9f.md">33  SDK 设计（上）：如何设计出一个优秀的 Go SDK？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34 SDK 设计（下）：IAM项目Go SDK设计和实现.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/34%20SDK%20%e8%ae%be%e8%ae%a1%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9aIAM%e9%a1%b9%e7%9b%aeGo%20SDK%e8%ae%be%e8%ae%a1%e5%92%8c%e5%ae%9e%e7%8e%b0.md">34 SDK 设计（下）：IAM项目Go SDK设计和实现.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35 效率神器：如何设计和实现一个命令行客户端工具？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/35%20%e6%95%88%e7%8e%87%e7%a5%9e%e5%99%a8%ef%bc%9a%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1%e5%92%8c%e5%ae%9e%e7%8e%b0%e4%b8%80%e4%b8%aa%e5%91%bd%e4%bb%a4%e8%a1%8c%e5%ae%a2%e6%88%b7%e7%ab%af%e5%b7%a5%e5%85%b7%ef%bc%9f.md">35 效率神器：如何设计和实现一个命令行客户端工具？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36 代码测试（上）：如何编写 Go 语言单元测试和性能测试用例？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/36%20%e4%bb%a3%e7%a0%81%e6%b5%8b%e8%af%95%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e7%bc%96%e5%86%99%20Go%20%e8%af%ad%e8%a8%80%e5%8d%95%e5%85%83%e6%b5%8b%e8%af%95%e5%92%8c%e6%80%a7%e8%83%bd%e6%b5%8b%e8%af%95%e7%94%a8%e4%be%8b%ef%bc%9f.md">36 代码测试（上）：如何编写 Go 语言单元测试和性能测试用例？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37 代码测试（下）：Go 语言其他测试类型及 IAM 测试介绍.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/37%20%e4%bb%a3%e7%a0%81%e6%b5%8b%e8%af%95%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9aGo%20%e8%af%ad%e8%a8%80%e5%85%b6%e4%bb%96%e6%b5%8b%e8%af%95%e7%b1%bb%e5%9e%8b%e5%8f%8a%20IAM%20%e6%b5%8b%e8%af%95%e4%bb%8b%e7%bb%8d.md">37 代码测试（下）：Go 语言其他测试类型及 IAM 测试介绍.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38 性能分析（上）：如何分析 Go 语言代码的性能？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/38%20%e6%80%a7%e8%83%bd%e5%88%86%e6%9e%90%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e5%88%86%e6%9e%90%20Go%20%e8%af%ad%e8%a8%80%e4%bb%a3%e7%a0%81%e7%9a%84%e6%80%a7%e8%83%bd%ef%bc%9f.md">38 性能分析（上）：如何分析 Go 语言代码的性能？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39 性能分析（下）：API Server性能测试和调优实战.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/39%20%e6%80%a7%e8%83%bd%e5%88%86%e6%9e%90%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9aAPI%20Server%e6%80%a7%e8%83%bd%e6%b5%8b%e8%af%95%e5%92%8c%e8%b0%83%e4%bc%98%e5%ae%9e%e6%88%98.md">39 性能分析（下）：API Server性能测试和调优实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40 软件部署实战（上）：部署方案及负载均衡、高可用组件介绍.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/40%20%e8%bd%af%e4%bb%b6%e9%83%a8%e7%bd%b2%e5%ae%9e%e6%88%98%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e9%83%a8%e7%bd%b2%e6%96%b9%e6%a1%88%e5%8f%8a%e8%b4%9f%e8%bd%bd%e5%9d%87%e8%a1%a1%e3%80%81%e9%ab%98%e5%8f%af%e7%94%a8%e7%bb%84%e4%bb%b6%e4%bb%8b%e7%bb%8d.md">40 软件部署实战（上）：部署方案及负载均衡、高可用组件介绍.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="41 软件部署实战（中）：IAM 系统生产环境部署实战.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/41%20%e8%bd%af%e4%bb%b6%e9%83%a8%e7%bd%b2%e5%ae%9e%e6%88%98%ef%bc%88%e4%b8%ad%ef%bc%89%ef%bc%9aIAM%20%e7%b3%bb%e7%bb%9f%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83%e9%83%a8%e7%bd%b2%e5%ae%9e%e6%88%98.md">41 软件部署实战（中）：IAM 系统生产环境部署实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="42 软件部署实战（下）：IAM系统安全加固、水平扩缩容实战.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/42%20%e8%bd%af%e4%bb%b6%e9%83%a8%e7%bd%b2%e5%ae%9e%e6%88%98%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9aIAM%e7%b3%bb%e7%bb%9f%e5%ae%89%e5%85%a8%e5%8a%a0%e5%9b%ba%e3%80%81%e6%b0%b4%e5%b9%b3%e6%89%a9%e7%bc%a9%e5%ae%b9%e5%ae%9e%e6%88%98.md">42 软件部署实战（下）：IAM系统安全加固、水平扩缩容实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="43 技术演进（上）：虚拟化技术演进之路.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/43%20%e6%8a%80%e6%9c%af%e6%bc%94%e8%bf%9b%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e8%99%9a%e6%8b%9f%e5%8c%96%e6%8a%80%e6%9c%af%e6%bc%94%e8%bf%9b%e4%b9%8b%e8%b7%af.md">43 技术演进（上）：虚拟化技术演进之路.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="44 技术演进（下）：软件架构和应用生命周期技术演进之路.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/44%20%e6%8a%80%e6%9c%af%e6%bc%94%e8%bf%9b%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e8%bd%af%e4%bb%b6%e6%9e%b6%e6%9e%84%e5%92%8c%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f%e6%8a%80%e6%9c%af%e6%bc%94%e8%bf%9b%e4%b9%8b%e8%b7%af.md">44 技术演进（下）：软件架构和应用生命周期技术演进之路.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="45 基于Kubernetes的云原生架构设计.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/45%20%e5%9f%ba%e4%ba%8eKubernetes%e7%9a%84%e4%ba%91%e5%8e%9f%e7%94%9f%e6%9e%b6%e6%9e%84%e8%ae%be%e8%ae%a1.md">45 基于Kubernetes的云原生架构设计.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="46 如何制作Docker镜像？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/46%20%e5%a6%82%e4%bd%95%e5%88%b6%e4%bd%9cDocker%e9%95%9c%e5%83%8f%ef%bc%9f.md">46 如何制作Docker镜像？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="47 如何编写Kubernetes资源定义文件？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/47%20%e5%a6%82%e4%bd%95%e7%bc%96%e5%86%99Kubernetes%e8%b5%84%e6%ba%90%e5%ae%9a%e4%b9%89%e6%96%87%e4%bb%b6%ef%bc%9f.md">47 如何编写Kubernetes资源定义文件？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="48 IAM 容器化部署实战.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/48%20IAM%20%e5%ae%b9%e5%99%a8%e5%8c%96%e9%83%a8%e7%bd%b2%e5%ae%9e%e6%88%98.md">48 IAM 容器化部署实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="49 服务编排（上）：Helm服务编排基础知识.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/49%20%e6%9c%8d%e5%8a%a1%e7%bc%96%e6%8e%92%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9aHelm%e6%9c%8d%e5%8a%a1%e7%bc%96%e6%8e%92%e5%9f%ba%e7%a1%80%e7%9f%a5%e8%af%86.md">49 服务编排（上）：Helm服务编排基础知识.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="50 服务编排（下）：基于Helm的服务编排部署实战.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/50%20%e6%9c%8d%e5%8a%a1%e7%bc%96%e6%8e%92%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e5%9f%ba%e4%ba%8eHelm%e7%9a%84%e6%9c%8d%e5%8a%a1%e7%bc%96%e6%8e%92%e9%83%a8%e7%bd%b2%e5%ae%9e%e6%88%98.md">50 服务编排（下）：基于Helm的服务编排部署实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="51 基于 GitHub Actions 的 CI 实战.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/51%20%e5%9f%ba%e4%ba%8e%20GitHub%20Actions%20%e7%9a%84%20CI%20%e5%ae%9e%e6%88%98.md">51 基于 GitHub Actions 的 CI 实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="特别放送 Go Modules依赖包管理全讲.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/%e7%89%b9%e5%88%ab%e6%94%be%e9%80%81%20Go%20Modules%e4%be%9d%e8%b5%96%e5%8c%85%e7%ae%a1%e7%90%86%e5%85%a8%e8%ae%b2.md">特别放送 Go Modules依赖包管理全讲.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="特别放送 Go Modules实战.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/%e7%89%b9%e5%88%ab%e6%94%be%e9%80%81%20Go%20Modules%e5%ae%9e%e6%88%98.md">特别放送 Go Modules实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="特别放送 IAM排障指南.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/%e7%89%b9%e5%88%ab%e6%94%be%e9%80%81%20IAM%e6%8e%92%e9%9a%9c%e6%8c%87%e5%8d%97.md">特别放送 IAM排障指南.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="特别放送 分布式作业系统设计和实现.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/%e7%89%b9%e5%88%ab%e6%94%be%e9%80%81%20%e5%88%86%e5%b8%83%e5%bc%8f%e4%bd%9c%e4%b8%9a%e7%b3%bb%e7%bb%9f%e8%ae%be%e8%ae%a1%e5%92%8c%e5%ae%9e%e7%8e%b0.md">特别放送 分布式作业系统设计和实现.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="特别放送 给你一份Go项目中最常用的Makefile核心语法.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/%e7%89%b9%e5%88%ab%e6%94%be%e9%80%81%20%e7%bb%99%e4%bd%a0%e4%b8%80%e4%bb%bdGo%e9%a1%b9%e7%9b%ae%e4%b8%ad%e6%9c%80%e5%b8%b8%e7%94%a8%e7%9a%84Makefile%e6%a0%b8%e5%bf%83%e8%af%ad%e6%b3%95.md">特别放送 给你一份Go项目中最常用的Makefile核心语法.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="特别放送 给你一份清晰、可直接套用的Go编码规范.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/%e7%89%b9%e5%88%ab%e6%94%be%e9%80%81%20%e7%bb%99%e4%bd%a0%e4%b8%80%e4%bb%bd%e6%b8%85%e6%99%b0%e3%80%81%e5%8f%af%e7%9b%b4%e6%8e%a5%e5%a5%97%e7%94%a8%e7%9a%84Go%e7%bc%96%e7%a0%81%e8%a7%84%e8%8c%83.md">特别放送 给你一份清晰、可直接套用的Go编码规范.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="直播加餐 如何从小白进阶成 Go 语言专家？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/%e7%9b%b4%e6%92%ad%e5%8a%a0%e9%a4%90%20%e5%a6%82%e4%bd%95%e4%bb%8e%e5%b0%8f%e7%99%bd%e8%bf%9b%e9%98%b6%e6%88%90%20Go%20%e8%af%ad%e8%a8%80%e4%b8%93%e5%ae%b6%ef%bc%9f.md">直播加餐 如何从小白进阶成 Go 语言专家？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="结束语 如何让自己的 Go 研发之路走得更远？.md" href="/%e4%b8%93%e6%a0%8f/Go%20%e8%af%ad%e8%a8%80%e9%a1%b9%e7%9b%ae%e5%bc%80%e5%8f%91%e5%ae%9e%e6%88%98/%e7%bb%93%e6%9d%9f%e8%af%ad%20%e5%a6%82%e4%bd%95%e8%ae%a9%e8%87%aa%e5%b7%b1%e7%9a%84%20Go%20%e7%a0%94%e5%8f%91%e4%b9%8b%e8%b7%af%e8%b5%b0%e5%be%97%e6%9b%b4%e8%bf%9c%ef%bc%9f.md">结束语 如何让自己的 Go 研发之路走得更远？.md</a>
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
                            <h1 id="title" data-id="特别放送 IAM排障指南" class="title">特别放送 IAM排障指南</h1>
                            <div><p>你好，我是孔令飞。</p>

<p>今天我们更新一期特别放送作为加餐。在部署和使用IAM的过程中，难免会出现一些异常(也称为故障、问题)。这时候，就需要我们能够定位故障，并修复故障。这里，我总结了一些IAM的排障方法，以及一些常见故障的解决方法，供你参考。</p>

<h2 id="如何排障">如何排障？</h2>

<p>首先，我们需要发现问题，然后定位问题。我们可能需要经过多轮分析排查才能定位到问题的根因，最后去解决问题。排障流程如下图所示：</p>

<p><img src="assets/8c030e2e65394c4491cd37f7b6d30f3f.jpg" alt="" /></p>

<p>如果想排查问题并解决问题，你还需要具备这两个基本能力：能够理解错误日志的内容；根据错误日志，找出解决方案。</p>

<p>我们举个例子来说吧。有以下错误：</p>

<pre><code class="language-bash">[going@dev iam]$ mysql -h127.0.0.1 -uroot -p'iam59!z$'
bash: /usr/bin/mysql: 没有那个文件或目录
[going@dev iam]$
</code></pre>

<p>对于这个错误，我们首先来理解错误内容：mysql命令没有找到，说明没有安装mysql，或者安装mysql失败。</p>

<p>那么，我们的解决方案就是重新执行 <a href="https://time.geekbang.org/column/article/378082" target="_blank">03讲</a> 中安装MariaDB的步骤：</p>

<pre><code class="language-bash">$ cd $IAM_ROOT
$ ./scripts/install/mariadb.sh iam::mariadb::install
</code></pre>

<p>接下来，我会以<code>iam-apiserver</code>服务为例，给你演示下具体如何排障并解决问题。</p>

<h3 id="发现问题">发现问题</h3>

<p>要排障，首先我们需要发现问题。我们通常用下面这几种方式来发现问题。</p>

<ul>
<li>检查服务状态：启动iam-apiserver服务后，执行<code>systemctl status iam-apiserver</code> 发现iam-apiserver启动失败，即<code>Active</code>的值不为<code>active (running)</code>。</li>
<li>功能异常：访问iam-apiserver服务，功能异常或者报错，例如接口返回值跟预期不一样等。</li>
<li>日志报错：在iam-apiserver的日志中发现一些<code>WARN</code>、<code>ERROR</code>、<code>PANIC</code>、<code>FATAL</code>等级别的错误日志。</li>
</ul>

<h3 id="定位问题">定位问题</h3>

<p>发现问题之后，就需要我们定位出问题的根本原因。我们可以通过下面这三种方式来定位问题。</p>

<ul>
<li>查看日志，它是最简单的排障方式。</li>
<li>使用Go调试工具Delve来定位问题。</li>
<li>添加Debug日志，从程序入口处跟读代码，在关键位置处打印Debug日志，来定位问题。</li>
</ul>

<p>在定位问题的过程中，我们可以采用“顺藤摸瓜”的思路去排查问题。比如，我们的程序执行流程是：A -&gt; B -&gt; … -&gt; N。其中A、B、N都可以理解为一个排查点。所谓的排查点，就是需要在该处定位问题的点，这些点可能是导致问题的根因所在。</p>

<p>在排障过程中，你可以根据最上层的日志报错，找到下一个排查点B。如果经过定位，发现B没有问题，那继续根据程序执行流程，找下一个排查点排查问题。如此反复，直到找到最终的排查点，也就是出问题的根因N，N即为Bug点。执行流程如下图所示：</p>

<p><img src="assets/540d6bb709af4dd188fc383804643443.jpg" alt="" /></p>

<p>下面，我们来具体看看这三种定位问题的方法。</p>

<h4 id="查看日志定位问题">查看日志定位问题</h4>

<p>我们首先应该通过日志来定位问题，这是最简单高效的方式。要通过日志来定位问题，你不仅要会看日志，还要能读懂日志，也就是理解日志报错的原因。</p>

<p>下面我来具体讲解用这种方法定位问题的步骤。</p>

<p><strong>第一步，确保服务运行正常。</strong></p>

<p>你可以通过执行 <code>systemctl status</code> 命令来查看服务的运行状况：</p>

<pre><code class="language-bash">$ systemctl status iam-apiserver
● iam-apiserver.service - IAM APIServer
   Loaded: loaded (/etc/systemd/system/iam-apiserver.service; enabled; vendor preset: disabled)
   Active: activating (auto-restart) (Result: exit-code) since Thu 2021-09-09 13:47:56 CST; 2s ago
     Docs: https://github.com/marmotedu/iam/blob/master/init/README.md
  Process: 119463 ExecStart=/opt/iam/bin/iam-apiserver --config=/etc/iam/iam-apiserver.yaml (code=exited, status=1/FAILURE)
  Process: 119461 ExecStartPre=/usr/bin/mkdir -p /var/log/iam (code=exited, status=0/SUCCESS)
  Process: 119460 ExecStartPre=/usr/bin/mkdir -p /data/iam/iam-apiserver (code=exited, status=0/SUCCESS)
 Main PID: 119463 (code=exited, status=1/FAILURE)
</code></pre>

<p>可以看到，<code>Active</code>不是<code>active (running)</code>，说明iam-apiserver服务没有正常运行。从上面输出中的<code>Process: 119463 ExecStart=/opt/iam/bin/iam-apiserver --config=/etc/iam/iam-apiserver.yaml (code=exited, status=1/FAILURE)</code>信息中，我们可以获取以下信息：</p>

<ul>
<li>iam-apiserver服务启动命令为<code>/opt/iam/bin/iam-apiserver --config=/etc/iam/iam-apiserver.yaml</code>。</li>
<li><code>/opt/iam/bin/iam-apiserver</code>加载的配置文件为<code>/etc/iam/iam-apiserver.yaml</code>。</li>
<li><code>/opt/iam/bin/iam-apiserver</code>命令执行失败，退出码为1，其进程ID为<code>119463</code>。</li>
</ul>

<p>这里注意，<code>systemctl status</code>会将超过一定长度的行的后半部分用省略号替代，如果想查看完整的信息，可以追加<code>-l</code>参数，也就是<code>systemctl status -l</code>来查看。</p>

<p>既然iam-apiserver命令启动失败，那我们就需要查看iam-apiserver启动时的日志，看看有没有一些报错日志。</p>

<p>接下来，就进入<strong>第二步，查看</strong><code>iam-apiserver</code><strong>运行日志。</strong></p>

<p>这里提一句，如果你对systemd不了解，也可以趁机恶补一波。你可以参考阮一峰大佬的两篇博客：<a href="https://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html" target="_blank">Systemd 入门教程：命令篇</a>和<a href="https://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-part-two.html" target="_blank">Systemd 入门教程：实战篇</a>。</p>

<p>那么如何查看呢？我们有3种查看方式，我在下面按优先级顺序排列了下。你在定位问题和查看日志时，按优先级3选1即可，1 &gt; 2 &gt; 3。</p>

<ol>
<li>通过<code>journalctl -u iam-apiserver</code>查看。</li>
<li>通过iam-apiserver日志文件查看。</li>
<li>通过console查看。</li>
</ol>

<p>下面我来分别介绍下这三种查看方式。</p>

<p>先来看优先级最高的方式，通过<code>journalctl -u iam-apiserver</code>查看。</p>

<p>systemd 提供了自己的日志系统，称为 journal。我们可以使用<code>journalctl</code>命令来读取journal日志。<code>journalctl</code>提供了<code>-u</code>选项来查看某个 Unit 的日志，提供了<code>_PID</code>来查看指定进程ID的日志。在<strong>第一步</strong>中，我们知道服务启动失败的进程ID为<code>119463</code>。执行以下命令来查看这次启动的日志：</p>

<pre><code class="language-bash">$ sudo journalctl _PID=119463
-- Logs begin at Thu 2021-09-09 09:12:25 CST, end at Thu 2021-09-09 14:40:48 CST. --
...
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: 2021-09-09 13:47:56.727        INFO        apiserver        <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b9ded6cbd4f9cf88978b8897888b">[email&#160;protected]</a>/gorm.go:202        mysql/mysql.go:75[error] faile&gt;
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: 2021-09-09 13:47:56.727        FATAL        apiserver        apiserver/server.go:139        Failed to get cache instance: g&gt;
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: github.com/marmotedu/iam/internal/apiserver.(*completedExtraConfig).New
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]:         /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:139
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: github.com/marmotedu/iam/internal/apiserver.createAPIServer
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]:         /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:66
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: github.com/marmotedu/iam/internal/apiserver.Run
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]:         /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/run.go:11
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: github.com/marmotedu/iam/internal/apiserver.run.func1
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]:         /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/app.go:46
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: github.com/marmotedu/iam/pkg/app.(*App).runCommand
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]:         /home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:278
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: github.com/spf13/cobra.(*Command).execute
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]:         /home/going/workspace/golang/pkg/mod/github.com/spf13/<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="9ffcf0fdedfedfe9aeb1adb1ae">[email&#160;protected]</a>/command.go:856
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: github.com/spf13/cobra.(*Command).ExecuteC
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]:         /home/going/workspace/golang/pkg/mod/github.com/spf13/<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="8deee2efffeccdfbbca3bfa3bc">[email&#160;protected]</a>/command.go:974
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: github.com/spf13/cobra.(*Command).Execute
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]:         /home/going/workspace/golang/pkg/mod/github.com/spf13/<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2e4d414c5c4f6e581f001c001f">[email&#160;protected]</a>/command.go:902
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: github.com/marmotedu/iam/pkg/app.(*App).Run
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]:         /home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:233
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: main.main
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]:         /home/going/workspace/golang/src/github.com/marmotedu/iam/cmd/iam-apiserver/apiserver.go:24
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]: runtime.main
Sep 09 13:47:56 VM-200-70-centos iam-apiserver[119463]:         /home/going/go/go1.16.2/src/runtime/proc.go:225
lines 10-54/54 (END)
</code></pre>

<p>从上面的日志中，我们找到了服务启动失败的原因：<code>iam-apiserver</code>启动时，发生了<code>FATAL</code>级别的错误。到这里，你已经初步定位到问题原因了。</p>

<p>我们再来看通过iam-apiserver日志文件查看的方式。</p>

<p>作为一个企业级的实战项目，iam-apiserver的日志当然是会记录到日志文件中的。在<strong>第一步</strong>中，我们通过<code>systemctl status iam-apiserver</code>输出的信息，知道了iam-apiserver启动时加载的配置文件为<code>/etc/iam/iam-apiserver.yaml</code>。所以，我们可以通过iam-apiserver的配置文件iam-apiserver.yaml中的<code>log.output-paths</code>配置项，查看记录日志文件的位置：</p>

<pre><code class="language-yaml">log:
    name: apiserver # Logger的名字
    development: true # 是否是开发模式。如果是开发模式，会对DPanicLevel进行堆栈跟踪。
    level: debug # 日志级别，优先级从低到高依次为：debug, info, warn, error, dpanic, panic, fatal。
    format: console # 支持的日志输出格式，目前支持console和json两种。console其实就是text格式。
    enable-color: true # 是否开启颜色输出，true:是，false:否
    disable-caller: false # 是否开启 caller，如果开启会在日志中显示调用日志所在的文件、函数和行号
    disable-stacktrace: false # 是否在panic及以上级别禁止打印堆栈信息
    output-paths: /var/log/iam/iam-apiserver.log,stdout # 支持输出到多个输出，逗号分开。支持输出到标准输出（stdout）和文件。
    error-output-paths: /var/log/iam/iam-apiserver.error.log # zap内部(非业务)错误日志输出路径，多个输出，逗号分开
</code></pre>

<p>可以看到，iam-apiserver将日志分别记录到了<code>/var/log/iam/iam-apiserver.log</code>和<code>stdout</code>中。所以，我们可以通过查看<code>/var/log/iam/iam-apiserver.log</code>日志文件，来查看报错信息：</p>

<pre><code class="language-bash">$ tail -25 /var/log/iam/iam-apiserver.log
...
2021-09-09 15:42:35.231	INFO	apiserver	server/genericapiserver.go:88	GET    /version --&gt; github.com/marmotedu/iam/internal/pkg/server.(*GenericAPIServer).InstallAPIs.func2 (10 handlers)
2021-09-09 15:42:35.232	INFO	apiserver	<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="593e362b34192f68776b6877686b">[email&#160;protected]</a>/gorm.go:202	mysql/mysql.go:75[error] failed to initialize database, got error dial tcp 127.0.0.1:3309: connect: connection refused
2021-09-09 15:42:35.232	FATAL	apiserver	apiserver/server.go:139	Failed to get cache instance: got nil cache server
github.com/marmotedu/iam/internal/apiserver.(*completedExtraConfig).New
	/home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:139
github.com/marmotedu/iam/internal/apiserver.createAPIServer
	/home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:66
github.com/marmotedu/iam/internal/apiserver.Run
	/home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/run.go:11
github.com/marmotedu/iam/internal/apiserver.run.func1
	/home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/app.go:46
github.com/marmotedu/iam/pkg/app.(*App).runCommand
	/home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:278
github.com/spf13/cobra.(*Command).execute
	/home/going/workspace/golang/pkg/mod/github.com/spf13/<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="36555954445776400718041807">[email&#160;protected]</a>/command.go:856
github.com/spf13/cobra.(*Command).ExecuteC
	/home/going/workspace/golang/pkg/mod/github.com/spf13/<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="95f6faf7e7f4d5e3a4bba7bba4">[email&#160;protected]</a>/command.go:974
github.com/spf13/cobra.(*Command).Execute
	/home/going/workspace/golang/pkg/mod/github.com/spf13/<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6d0e020f1f0c2d1b5c435f435c">[email&#160;protected]</a>/command.go:902
github.com/marmotedu/iam/pkg/app.(*App).Run
	/home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:233
main.main
	/home/going/workspace/golang/src/github.com/marmotedu/iam/cmd/iam-apiserver/apiserver.go:24
runtime.main
	/home/going/go/go1.16.2/src/runtime/proc.go:225
</code></pre>

<p>我们再来看最后一种查看方式，通过console查看。</p>

<p>当然，我们也可以直接通过console来看日志，这就需要我们在Linux终端前台运行iam-apiserver（在<strong>第一步</strong>中，我们已经知道了启动命令）：</p>

<pre><code class="language-bash">$ sudo /opt/iam/bin/iam-apiserver --config=/etc/iam/iam-apiserver.yaml
...
2021-09-09 15:47:00.660	INFO	apiserver	server/genericapiserver.go:88	GET    /debug/pprof/mutex --&gt; github.com/gin-contrib/pprof.pprofHandler.func1 (10 handlers)
2021-09-09 15:47:00.660	INFO	apiserver	server/genericapiserver.go:88	GET    /debug/pprof/threadcreate --&gt; github.com/gin-contrib/pprof.pprofHandler.func1 (10 handlers)
2021-09-09 15:47:00.660	INFO	apiserver	server/genericapiserver.go:88	GET    /version --&gt; github.com/marmotedu/iam/internal/pkg/server.(*GenericAPIServer).InstallAPIs.func2 (10 handlers)
2021-09-09 15:47:00.661	INFO	apiserver	<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="9bfcf4e9f6dbedaab5a9aab5aaa9">[email&#160;protected]</a>/gorm.go:202	mysql/mysql.go:75[error] failed to initialize database, got error dial tcp 127.0.0.1:3309: connect: connection refused
2021-09-09 15:47:00.661	FATAL	apiserver	apiserver/server.go:139	Failed to get cache instance: got nil cache server
github.com/marmotedu/iam/internal/apiserver.(*completedExtraConfig).New
	/home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:139
github.com/marmotedu/iam/internal/apiserver.createAPIServer
	/home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:66
github.com/marmotedu/iam/internal/apiserver.Run
	/home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/run.go:11
github.com/marmotedu/iam/internal/apiserver.run.func1
	/home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/app.go:46
github.com/marmotedu/iam/pkg/app.(*App).runCommand
	/home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:278
github.com/spf13/cobra.(*Command).execute
	/home/going/workspace/golang/pkg/mod/github.com/spf13/<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="bdded2dfcfdcfdcb8c938f938c">[email&#160;protected]</a>/command.go:856
github.com/spf13/cobra.(*Command).ExecuteC
	/home/going/workspace/golang/pkg/mod/github.com/spf13/<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ddbeb2bfafbc9dabecf3eff3ec">[email&#160;protected]</a>/command.go:974
github.com/spf13/cobra.(*Command).Execute
	/home/going/workspace/golang/pkg/mod/github.com/spf13/<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2e4d414c5c4f6e581f001c001f">[email&#160;protected]</a>/command.go:902
github.com/marmotedu/iam/pkg/app.(*App).Run
	/home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:233
main.main
	/home/going/workspace/golang/src/github.com/marmotedu/iam/cmd/iam-apiserver/apiserver.go:24
runtime.main
	/home/going/go/go1.16.2/src/runtime/proc.go:225
</code></pre>

<p>通过上面这3种查看方式，我们均能初步定位到服务异常的原因。</p>

<h4 id="使用go调试工具delve来定位问题">使用Go调试工具Delve来定位问题</h4>

<p>查看日志是最简单的排障方式，通过查看日志，我们可能定位出问题的根本原因，这种情况下问题就能得到快速的解决。但有些情况下，我们通过日志并不一定能定位出问题，例如：</p>

<ul>
<li>程序异常，但是没有错误日志。</li>
<li>日志有报错，但只能判断问题的面，还不能精准找到问题的根因。</li>
</ul>

<p>遇到上面这两种情况，我们都需要再进一步地定位问题。这时候，我们可以使用Delve调试工具来尝试定位问题。Delve工具的用法你可以参考 <a href="https://github.com/marmotedu/geekbang-go/blob/master/Delve%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3.md" target="_blank">Delve使用详解</a>。</p>

<h4 id="添加debug日志定位问题">添加Debug日志定位问题</h4>

<p>如果使用 Delve 工具仍然没有定位出问题，接下来你可以尝试最原始的方法：添加Debug日志来定位问题。这种方法具体可以分为两个步骤。</p>

<p><strong>第一步，在关键代码段添加Debug日志。</strong></p>

<p>你需要根据自己对代码的理解来决定关键代码段。如果不确定哪段代码出问题，可以从请求入口处添加Debug日志，然后跟着代码流程一步步往下排查，并在需要的地方添加Debug日志。</p>

<p>例如，通过排查日志，我们定位到<code>internal/apiserver/server.go:139</code>位置的代码导致程序FATAL，FATAL原因是<code>Failed to get cache instance: got nil cache server</code>。<code>cache server</code>是<code>nil</code>，说明<code>cache server</code>没有被初始化。查看<code>cache server</code>初始化函数：</p>

<pre><code class="language-go">func GetCacheInsOr(store store.Factory) (*Cache, error) {
    if store != nil {
        once.Do(func() {
            cacheServer = &amp;Cache{store}
        })
    }

    if cacheServer == nil {
        return nil, fmt.Errorf(&quot;got nil cache server&quot;)
    }

    return cacheServer, nil
}
</code></pre>

<p>我们不难分析出，是<code>store == nil</code>导致<code>cacheServer</code>没有被初始化。再来看下store的初始化代码，并加一些Debug日志，如下图所示：</p>

<p><img src="assets/f69351d382b648e0af458636ecfc84d6.jpg" alt="图片" /></p>

<p>我们添加完Debug代码后，就可以重新编译并运行程序了。</p>

<p>这里有个小技巧：可以在错误返回的位置添加Debug日志，这样能大概率帮助你定位到出错的位置，例如：</p>

<pre><code class="language-go">if err != nil {
  log.Debugf(&quot;DEBUG POINT - 1: %v&quot;, err)
  return err
}
</code></pre>

<p><strong>第二步，重新编译源码，并启动。</strong></p>

<p>这里为了调试、看日志方便，我们直接在Linux终端的前端运行iam-apiserver：</p>

<pre><code class="language-bash">$ sudo /opt/iam/bin/iam-apiserver --config=/etc/iam/iam-apiserver.yaml
</code></pre>

<p>查看我们添加的Debug日志打印的内容，如下图所示：</p>

<p><img src="assets/3bdf0ad86ee74899a1d3f4e4ac484ea3.jpg" alt="图片" /></p>

<p>从Debug日志中，可以看到用来创建MySQL实例的端口是错误的，正确的端口应该是<code>3306</code>，而不是<code>3309</code>。MySQL服务器的端口是在iam-apiserver.yaml中配置的。修改iam-apiserver.yaml为正确的配置，并启动：</p>

<pre><code class="language-bash">$ sudo /opt/iam/bin/iam-apiserver --config=/etc/iam/iam-apiserver.yaml
</code></pre>

<p>再次查看console日志，如下图所示：</p>

<p><img src="assets/ef57a464b8744853a4a10e1e3faf6ef9.jpg" alt="图片" /></p>

<p>可以看到问题已经修复，<code>dbIns</code>不为<code>nil</code>，程序正常运行：</p>

<pre><code class="language-bash">$ systemctl status iam-apiserver
● iam-apiserver.service - IAM APIServer
   Loaded: loaded (/etc/systemd/system/iam-apiserver.service; enabled; vendor preset: disabled)
   Active: active (running) since Thu 2021-09-09 20:48:18 CST; 17s ago
     Docs: https://github.com/marmotedu/iam/blob/master/init/README.md
  Process: 255648 ExecStartPre=/usr/bin/mkdir -p /var/log/iam (code=exited, status=0/SUCCESS)
  Process: 255647 ExecStartPre=/usr/bin/mkdir -p /data/iam/iam-apiserver (code=exited, status=0/SUCCESS)
 Main PID: 255650 (iam-apiserver)
    Tasks: 5 (limit: 23724)
   Memory: 7.3M
   CGroup: /system.slice/iam-apiserver.service
           └─255650 /opt/iam/bin/iam-apiserver --config=/etc/iam/iam-apiserver.yaml
</code></pre>

<p>在这里，<code>Active</code>为<code>active (running)</code>状态。</p>

<p>因为这些Debug日志能够协助你定位问题，从侧面说明这些日志是有用的，所以你可以保留这些Debug日志调用代码。</p>

<h3 id="解决问题">解决问题</h3>

<p>在定位问题阶段，我们已经找到了问题的原因，接下来就可以根据自己对业务、底层代码实现的掌握和理解，修复这个问题了。至于怎么修复，你需要结合具体情况来判断，并没有统一的流程和方法论，这里就不多介绍了。</p>

<p>上面，我介绍了排查问题的思路和方法。接下来，我来向你展示9个在部署和使用IAM系统时容易遇到的问题，并提供解决方法。这些问题基本上都是由服务器环境引起的。</p>

<h2 id="iam常见故障及解决办法">IAM常见故障及解决办法</h2>

<p><strong>问题一：</strong>安装neovim，报 <code>No match for argument: neovim</code> 错误。</p>

<p>解决方法是安装 EPEL 源：</p>

<pre><code class="language-bash">$ sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
</code></pre>

<p><strong>问题二：</strong>安装protoc-gen-go失败（超时、报错等）。</p>

<p>这个故障出现，可能是因为你当前服务器所在的网络环境无法访问<code>github.com</code>，或者访问<code>github.com</code>速度太慢。</p>

<p>解决方法是手动编译安装，方法如下：</p>

<pre><code class="language-bash">$ git clone --depth 1 https://github.com/golang/protobuf $GOPATH/src/github.com/golang/protobuf
$ cd $GOPATH/src/github.com/golang/protobuf/protoc-gen-go
$ go install -v .
</code></pre>

<p><strong>问题三：</strong>遇到<code>xxx: permission denied</code>这类的错误。</p>

<p>出现这种错误，是因为你没有权限执行当前的操作。解决方法是排查自己是否有权限执行当前操作。如果没有权限，需要你切换到有权限的用户，或者放弃执行当前操作。</p>

<p>为了说明问题，这里我举一个错误例子，并给出排查思路。例子的错误日志如下：</p>

<pre><code class="language-bash">[going@VM-8-9-centos /]$ go get -u github.com/golang/protobuf/protoc-gen-go
go: could not create module cache: mkdir /golang: permission denied
[going@VM-8-9-centos /]$ sudo go get -u github.com/golang/protobuf/protoc-gen-go
sudo: go: command not found
</code></pre>

<p>上述错误中， 一共报了两个错误，分别是<code>mkdir /golang: permission denied</code>和<code>sudo: go: command not found</code>。我们先来看<code>mkdir /golang: permission denied</code>错误。</p>

<p>通过命令行提示符<code>$</code>可以知道，当前登陆用户是普通用户；通过报错<code>mkdir /golang: permission denied</code>可以知道<code>go get -u github.com/golang/protobuf/protoc-gen-go</code>命令底层执行了<code>mkdir /golang</code>，因为普通用户没有写<code>/</code> 目录的权限，所以会报权限错误。解决方法是切换到用户的目录下，执行<code>go get -u</code>命令。</p>

<p>我们再来看下<code>sudo: go: command not found</code>错误。<code>sudo</code>命令会将命令执行的环境切换到<code>root</code>用户，<code>root</code>用户显然是没有安装<code>go</code>命令的，所以会导致<code>command not found</code>错误。解决方式是去掉 <code>sudo</code> ，直接执行 <code>$ go get -u xxx</code> 。</p>

<p><strong>问题四：</strong>VimIDE使用过程中，报各类错误。</p>

<p>这里的报错原因跟环境有关系，安装VimIDE时的系统环境、包的版本等等，都可能会导致使用VimIDE报错。因为错误类型太多，没法一一说明，所以我建议你忽略这些错误，其实完全不影响后面的学习。</p>

<p><strong>问题五：</strong>访问iam-authz-server的<code>/v1/authz</code>接口报<code>{&quot;code&quot;:100202,&quot;message&quot;:&quot;Signature is invalid&quot;}</code>。</p>

<p>这时可能是签发的Token有问题，建议重新执行以下5个步骤：</p>

<ol>
<li>重新登陆系统，并获取访问令牌：</li>
</ol>

<pre><code class="language-bash">$ token=`curl -s -XPOST -H'Content-Type: application/json' -d'{&quot;username&quot;:&quot;admin&quot;,&quot;password&quot;:&quot;Admin@2021&quot;}' http://127.0.0.1:8080/login | jq -r .token`
</code></pre>

<p>如果没有安装<code>jq</code>命令，可以执行<code>sudo yum -y install jq</code>命令来安装。</p>

<ol>
<li>创建授权策略：</li>
</ol>

<pre><code class="language-bash">$ curl -s -XPOST -H&quot;Content-Type: application/json&quot; -H&quot;Authorization: Bearer $token&quot; -d'{&quot;metadata&quot;:{&quot;name&quot;:&quot;authztest&quot;},&quot;policy&quot;:{&quot;description&quot;:&quot;One policy to rule them all.&quot;,&quot;subjects&quot;:[&quot;users:&lt;peter|ken&gt;&quot;,&quot;users:maria&quot;,&quot;groups:admins&quot;],&quot;actions&quot;:[&quot;delete&quot;,&quot;&lt;create|update&gt;&quot;],&quot;effect&quot;:&quot;allow&quot;,&quot;resources&quot;:[&quot;resources:articles:&lt;.*&gt;&quot;,&quot;resources:printer&quot;],&quot;conditions&quot;:{&quot;remoteIPAddress&quot;:{&quot;type&quot;:&quot;CIDRCondition&quot;,&quot;options&quot;:{&quot;cidr&quot;:&quot;192.168.0.1/16&quot;}}}}}' http://127.0.0.1:8080/v1/policies
</code></pre>

<ol>
<li>创建密钥，并从命令的输出中提取secretID 和 secretKey：</li>
</ol>

<pre><code class="language-bash">$ curl -s -XPOST -H&quot;Content-Type: application/json&quot; -H&quot;Authorization: Bearer $token&quot; -d'{&quot;metadata&quot;:{&quot;name&quot;:&quot;authztest&quot;},&quot;expires&quot;:0,&quot;description&quot;:&quot;admin secret&quot;}' http://127.0.0.1:8080/v1/secrets
{&quot;metadata&quot;:{&quot;id&quot;:23,&quot;name&quot;:&quot;authztest&quot;,&quot;createdAt&quot;:&quot;2021-04-08T07:24:50.071671422+08:00&quot;,&quot;updatedAt&quot;:&quot;2021-04-08T07:24:50.071671422+08:00&quot;},&quot;username&quot;:&quot;admin&quot;,&quot;secretID&quot;:&quot;ZuxvXNfG08BdEMqkTaP41L2DLArlE6Jpqoox&quot;,&quot;secretKey&quot;:&quot;7Sfa5EfAPIwcTLGCfSvqLf0zZGCjF3l8&quot;,&quot;expires&quot;:0,&quot;description&quot;:&quot;admin secret&quot;}
</code></pre>

<ol>
<li>生成访问 iam-authz-server 的 Token</li>
</ol>

<p>iamctl 提供了 <code>jwt sigin</code> 命令，你可以根据 <code>secretID</code> 和 <code>secretKey</code> 签发 Token，方便你使用。签发Token的具体命令如下：</p>

<pre><code class="language-bash">$ iamctl jwt sign ZuxvXNfG08BdEMqkTaP41L2DLArlE6Jpqoox 7Sfa5EfAPIwcTLGCfSvqLf0zZGCjF3l8 # iamctl jwt sign $secretID $secretKey
eyJhbGciOiJIUzI1NiIsImtpZCI6Ilp1eHZYTmZHMDhCZEVNcWtUYVA0MUwyRExBcmxFNkpwcW9veCIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpYW0uYXV0aHoubWFybW90ZWR1LmNvbSIsImV4cCI6MTYxNzg0NTE5NSwiaWF0IjoxNjE3ODM3OTk1LCJpc3MiOiJpYW1jdGwiLCJuYmYiOjE2MTc4Mzc5OTV9.za9yLM7lHVabPAlVQLCqXEaf8sTU6sodAsMXnmpXjMQ
</code></pre>

<ol>
<li>测试资源授权是否通过：</li>
</ol>

<pre><code class="language-bash">$ curl -s -XPOST -H'Content-Type: application/json' -H'Authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6Ilp1eHZYTmZHMDhCZEVNcWtUYVA0MUwyRExBcmxFNkpwcW9veCIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpYW0uYXV0aHoubWFybW90ZWR1LmNvbSIsImV4cCI6MTYxNzg0NTE5NSwiaWF0IjoxNjE3ODM3OTk1LCJpc3MiOiJpYW1jdGwiLCJuYmYiOjE2MTc4Mzc5OTV9.za9yLM7lHVabPAlVQLCqXEaf8sTU6sodAsMXnmpXjMQ' -d'{&quot;subject&quot;:&quot;users:maria&quot;,&quot;action&quot;:&quot;delete&quot;,&quot;resource&quot;:&quot;resources:articles:ladon-introduction&quot;,&quot;context&quot;:{&quot;remoteIPAddress&quot;:&quot;192.168.0.5&quot;}}' http://127.0.0.1:9090/v1/authz
{&quot;allowed&quot;:true}
</code></pre>

<p><strong>问题六：</strong>执行<code>iamctl user list</code>报<code>error: {&quot;code&quot;:100207,&quot;message&quot;:&quot;Permission denied&quot;}</code>。</p>

<p>出现这种情况，可能是密码没有配置正确。</p>

<p>你可以看下<code>$HOME/.iam/iamctl.yaml</code>配置文件中的用户名和密码配置的是不是admin，以及admin的密码是否是<code>Admin@2021</code>。</p>

<p><strong>问题七：</strong>在创建用户时报<code>{&quot;code&quot;:100101,&quot;message&quot;:&quot;Database error&quot;}</code>错误。</p>

<p>出现这种情况，可能是用户名重了，建议换个新的用户名再次创建。</p>

<p><strong>问题八：</strong>报<code>No such file or directory</code>、<code>command not found</code>、<code>permission denied</code>错误。</p>

<p>遇到这类错误，要根据提示排查和解决问题。</p>

<ul>
<li><code>No such file or directory</code>：确认文件是否存在，不存在的原因是什么。</li>
<li><code>command not found</code>：确认命令是否存在，如果不存在，可以重新安装命令。</li>
<li><code>permission denied</code>：确认是否有操作权限，如果没有，要切换到有权限的用户或者目录。</li>
</ul>

<p><strong>问题九：</strong>报<code>iam-apiserver.service</code>、<code>/opt/iam/bin/iam-apiserver</code>、<code>/etc/iam/iam-apiserver.yaml</code>文件不存在。</p>

<p>我来介绍下这些文件的作用。</p>

<ul>
<li><code>/etc/systemd/system/iam-apiserver.service</code>：iam-apiserver的sysmted Unit文件。</li>
<li><code>/opt/iam/bin/iam-apiserver</code>：iam-apiserver的二进制启动命令。</li>
<li><code>/etc/iam/iam-apiserver.yaml</code>：iam-apiserver的配置文件。</li>
</ul>

<p>如果某个文件不存在，那就需要你重新安装这些文件。我来分别介绍这三个文件的安装方法。</p>

<p><code>/etc/systemd/system/iam-apiserver.service</code>安装方法：</p>

<pre><code class="language-bash">$ cd $IAM_ROOT
$ ./scripts/genconfig.sh scripts/install/environment.sh init/iam-apiserver.service &gt; iam-apiserver.service
$ sudo mv iam-apiserver.service /etc/systemd/system/
</code></pre>

<p><code>/opt/iam/bin/iam-apiserver</code>安装方法：</p>

<pre><code class="language-bash">$ cd $IAM_ROOT
$ source scripts/install/environment.sh
$ make build BINS=iam-apiserver
$ sudo cp _output/platforms/linux/amd64/iam-apiserver ${IAM_INSTALL_DIR}/bin
</code></pre>

<p><code>/etc/iam/iam-apiserver.yaml</code>安装方法：</p>

<pre><code class="language-bash">$ cd $IAM_ROOT
$ ./scripts/genconfig.sh scripts/install/environment.sh configs/iam-apiserver.yaml &gt; iam-apiserver.yaml
$ sudo mv iam-apiserver.yaml ${IAM_CONFIG_DIR}
</code></pre>

<h2 id="总结">总结</h2>

<p>这一讲，我以<code>iam-apiserver</code>服务为例，向你介绍了排障的基本流程：发现问题 -&gt; 定位问题 -&gt; 解决问题。</p>

<p>你可以通过三种方式来发现问题。</p>

<ul>
<li>检查服务状态：启动iam-apiserver服务后，执行<code>systemctl status iam-apiserver</code> 发现iam-apiserver启动失败，即<code>Active</code>的值不为<code>active (running)</code>。</li>
<li>功能异常：访问iam-apiserver服务，功能异常或者报错，例如接口返回值跟预期不一样；接口报错。</li>
<li>日志报错：在iam-apiserver的日志中发现一些<code>WARN</code>、<code>ERROR</code>、<code>PANIC</code>、<code>FATAL</code>等高级别的错误日志。</li>
</ul>

<p>发现问题之后，你可以通过查看日志、使用Go调试工具Delve和添加Debug日志这三种方式来定位问题。</p>

<ul>
<li>查看日志：查看日志是最简单的排障方式。</li>
<li>使用Go调试工具Delve来定位问题。</li>
<li>添加Debug日志：从程序入口处跟读代码，在关键位置处打印Debug日志，来定位问题。</li>
</ul>

<p>找到问题根因之后，就要解决问题。你需要根据自己对业务、底层代码实现的掌握和理解，解决这个问题。</p>

<p>最后，我向你展示了9个在部署和使用IAM系统时容易遇到的问题，并提供了解决方法，希望能给你一些切实的帮助。</p>

<h2 id="课后练习">课后练习</h2>

<ol>
<li>思考下，如何查找iam-apiserver的systemd Unit文件的路径？</li>
<li>执行以下命令：</li>
</ol>

<pre><code class="language-bash">$ token=`curl -s -XPOST -H'Content-Type: application/json' -d'{&quot;username&quot;:&quot;admin&quot;,&quot;password&quot;:&quot;Admin@2021&quot;}' http://127.0.0.1:8080/login | jq -r .token`
$ echo $token
</code></pre>

<p>可以获取<code>token</code>，但发现<code>token</code>值为空。请给出你的排障流程和方法。</p>

<p>欢迎你在留言区与我交流讨论，我们下一讲见。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#d5b9b9b9ece1e4e4e5e295b2b8b4bcb9fbb6bab8" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f0dfacb2d2e653b',t:'MTczNDAwOTI4OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>