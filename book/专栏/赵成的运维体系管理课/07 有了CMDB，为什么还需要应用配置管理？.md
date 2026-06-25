<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=07&#32;有了CMDB，为什么还需要应用配置管理？>
        <link rel="icon" href="/static/favicon.png">
        <title>07 有了CMDB，为什么还需要应用配置管理？ </title>
        
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
                        <a class="menu-item" id="00 开篇词 带给你不一样的运维思考.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/00%20%e5%bc%80%e7%af%87%e8%af%8d%20%e5%b8%a6%e7%bb%99%e4%bd%a0%e4%b8%8d%e4%b8%80%e6%a0%b7%e7%9a%84%e8%bf%90%e7%bb%b4%e6%80%9d%e8%80%83.md">00 开篇词 带给你不一样的运维思考.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01 为什么Netflix没有运维岗位？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/01%20%e4%b8%ba%e4%bb%80%e4%b9%88Netflix%e6%b2%a1%e6%9c%89%e8%bf%90%e7%bb%b4%e5%b2%97%e4%bd%8d%ef%bc%9f.md">01 为什么Netflix没有运维岗位？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 微服务架构时代，运维体系建设为什么要以应用为核心？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/02%20%e5%be%ae%e6%9c%8d%e5%8a%a1%e6%9e%b6%e6%9e%84%e6%97%b6%e4%bb%a3%ef%bc%8c%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e5%bb%ba%e8%ae%be%e4%b8%ba%e4%bb%80%e4%b9%88%e8%a6%81%e4%bb%a5%e5%ba%94%e7%94%a8%e4%b8%ba%e6%a0%b8%e5%bf%83%ef%bc%9f.md">02 微服务架构时代，运维体系建设为什么要以应用为核心？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 标准化体系建设（上）：如何建立应用标准化体系和模型？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/03%20%e6%a0%87%e5%87%86%e5%8c%96%e4%bd%93%e7%b3%bb%e5%bb%ba%e8%ae%be%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e5%bb%ba%e7%ab%8b%e5%ba%94%e7%94%a8%e6%a0%87%e5%87%86%e5%8c%96%e4%bd%93%e7%b3%bb%e5%92%8c%e6%a8%a1%e5%9e%8b%ef%bc%9f.md">03 标准化体系建设（上）：如何建立应用标准化体系和模型？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 标准化体系建设（下）：如何建立基础架构标准化及服务化体系？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/04%20%e6%a0%87%e5%87%86%e5%8c%96%e4%bd%93%e7%b3%bb%e5%bb%ba%e8%ae%be%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e5%a6%82%e4%bd%95%e5%bb%ba%e7%ab%8b%e5%9f%ba%e7%a1%80%e6%9e%b6%e6%9e%84%e6%a0%87%e5%87%86%e5%8c%96%e5%8f%8a%e6%9c%8d%e5%8a%a1%e5%8c%96%e4%bd%93%e7%b3%bb%ef%bc%9f.md">04 标准化体系建设（下）：如何建立基础架构标准化及服务化体系？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 如何从生命周期的视角看待应用运维体系建设？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/05%20%e5%a6%82%e4%bd%95%e4%bb%8e%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f%e7%9a%84%e8%a7%86%e8%a7%92%e7%9c%8b%e5%be%85%e5%ba%94%e7%94%a8%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e5%bb%ba%e8%ae%be%ef%bc%9f.md">05 如何从生命周期的视角看待应用运维体系建设？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 聊聊CMDB的前世今生.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/06%20%e8%81%8a%e8%81%8aCMDB%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f.md">06 聊聊CMDB的前世今生.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 有了CMDB，为什么还需要应用配置管理？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/07%20%e6%9c%89%e4%ba%86CMDB%ef%bc%8c%e4%b8%ba%e4%bb%80%e4%b9%88%e8%bf%98%e9%9c%80%e8%a6%81%e5%ba%94%e7%94%a8%e9%85%8d%e7%bd%ae%e7%ae%a1%e7%90%86%ef%bc%9f.md">07 有了CMDB，为什么还需要应用配置管理？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 如何在CMDB中落地应用的概念？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/08%20%e5%a6%82%e4%bd%95%e5%9c%a8CMDB%e4%b8%ad%e8%90%bd%e5%9c%b0%e5%ba%94%e7%94%a8%e7%9a%84%e6%a6%82%e5%bf%b5%ef%bc%9f.md">08 如何在CMDB中落地应用的概念？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 如何打造运维组织架构？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/09%20%e5%a6%82%e4%bd%95%e6%89%93%e9%80%a0%e8%bf%90%e7%bb%b4%e7%bb%84%e7%bb%87%e6%9e%b6%e6%9e%84%ef%bc%9f.md">09 如何打造运维组织架构？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 谷歌SRE运维模式解读.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/10%20%e8%b0%b7%e6%ad%8cSRE%e8%bf%90%e7%bb%b4%e6%a8%a1%e5%bc%8f%e8%a7%a3%e8%af%bb.md">10 谷歌SRE运维模式解读.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 从谷歌CRE谈起，运维如何培养服务意识？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/11%20%e4%bb%8e%e8%b0%b7%e6%ad%8cCRE%e8%b0%88%e8%b5%b7%ef%bc%8c%e8%bf%90%e7%bb%b4%e5%a6%82%e4%bd%95%e5%9f%b9%e5%85%bb%e6%9c%8d%e5%8a%a1%e6%84%8f%e8%af%86%ef%bc%9f.md">11 从谷歌CRE谈起，运维如何培养服务意识？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 持续交付知易行难，想做成这事你要理解这几个关键点.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/12%20%e6%8c%81%e7%bb%ad%e4%ba%a4%e4%bb%98%e7%9f%a5%e6%98%93%e8%a1%8c%e9%9a%be%ef%bc%8c%e6%83%b3%e5%81%9a%e6%88%90%e8%bf%99%e4%ba%8b%e4%bd%a0%e8%a6%81%e7%90%86%e8%a7%a3%e8%bf%99%e5%87%a0%e4%b8%aa%e5%85%b3%e9%94%ae%e7%82%b9.md">12 持续交付知易行难，想做成这事你要理解这几个关键点.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 持续交付的第一关键点：配置管理.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/13%20%e6%8c%81%e7%bb%ad%e4%ba%a4%e4%bb%98%e7%9a%84%e7%ac%ac%e4%b8%80%e5%85%b3%e9%94%ae%e7%82%b9%ef%bc%9a%e9%85%8d%e7%bd%ae%e7%ae%a1%e7%90%86.md">13 持续交付的第一关键点：配置管理.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 如何做好持续交付中的多环境配置管理？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/14%20%e5%a6%82%e4%bd%95%e5%81%9a%e5%a5%bd%e6%8c%81%e7%bb%ad%e4%ba%a4%e4%bb%98%e4%b8%ad%e7%9a%84%e5%a4%9a%e7%8e%af%e5%a2%83%e9%85%8d%e7%bd%ae%e7%ae%a1%e7%90%86%ef%bc%9f.md">14 如何做好持续交付中的多环境配置管理？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 开发和测试争抢环境？是时候进行多环境建设了.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/15%20%e5%bc%80%e5%8f%91%e5%92%8c%e6%b5%8b%e8%af%95%e4%ba%89%e6%8a%a2%e7%8e%af%e5%a2%83%ef%bc%9f%e6%98%af%e6%97%b6%e5%80%99%e8%bf%9b%e8%a1%8c%e5%a4%9a%e7%8e%af%e5%a2%83%e5%bb%ba%e8%ae%be%e4%ba%86.md">15 开发和测试争抢环境？是时候进行多环境建设了.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 线上环境建设，要扛得住真刀真枪的考验.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/16%20%e7%ba%bf%e4%b8%8a%e7%8e%af%e5%a2%83%e5%bb%ba%e8%ae%be%ef%bc%8c%e8%a6%81%e6%89%9b%e5%be%97%e4%bd%8f%e7%9c%9f%e5%88%80%e7%9c%9f%e6%9e%aa%e7%9a%84%e8%80%83%e9%aa%8c.md">16 线上环境建设，要扛得住真刀真枪的考验.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 人多力量大vs.两个披萨原则，聊聊持续交付中的流水线模式.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/17%20%e4%ba%ba%e5%a4%9a%e5%8a%9b%e9%87%8f%e5%a4%a7vs.%e4%b8%a4%e4%b8%aa%e6%8a%ab%e8%90%a8%e5%8e%9f%e5%88%99%ef%bc%8c%e8%81%8a%e8%81%8a%e6%8c%81%e7%bb%ad%e4%ba%a4%e4%bb%98%e4%b8%ad%e7%9a%84%e6%b5%81%e6%b0%b4%e7%ba%bf%e6%a8%a1%e5%bc%8f.md">17 人多力量大vs.两个披萨原则，聊聊持续交付中的流水线模式.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 持续交付流水线软件构建难吗？有哪些关键问题？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/18%20%e6%8c%81%e7%bb%ad%e4%ba%a4%e4%bb%98%e6%b5%81%e6%b0%b4%e7%ba%bf%e8%bd%af%e4%bb%b6%e6%9e%84%e5%bb%ba%e9%9a%be%e5%90%97%ef%bc%9f%e6%9c%89%e5%93%aa%e4%ba%9b%e5%85%b3%e9%94%ae%e9%97%ae%e9%a2%98%ef%bc%9f.md">18 持续交付流水线软件构建难吗？有哪些关键问题？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 持续交付中流水线构建完成后就大功告成了吗？别忘了质量保障.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/19%20%e6%8c%81%e7%bb%ad%e4%ba%a4%e4%bb%98%e4%b8%ad%e6%b5%81%e6%b0%b4%e7%ba%bf%e6%9e%84%e5%bb%ba%e5%ae%8c%e6%88%90%e5%90%8e%e5%b0%b1%e5%a4%a7%e5%8a%9f%e5%91%8a%e6%88%90%e4%ba%86%e5%90%97%ef%bc%9f%e5%88%ab%e5%bf%98%e4%ba%86%e8%b4%a8%e9%87%8f%e4%bf%9d%e9%9a%9c.md">19 持续交付中流水线构建完成后就大功告成了吗？别忘了质量保障.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 做持续交付概念重要还是场景重要？看笨办法如何找到最佳方案.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/20%20%e5%81%9a%e6%8c%81%e7%bb%ad%e4%ba%a4%e4%bb%98%e6%a6%82%e5%bf%b5%e9%87%8d%e8%a6%81%e8%bf%98%e6%98%af%e5%9c%ba%e6%99%af%e9%87%8d%e8%a6%81%ef%bc%9f%e7%9c%8b%e7%ac%a8%e5%8a%9e%e6%b3%95%e5%a6%82%e4%bd%95%e6%89%be%e5%88%b0%e6%9c%80%e4%bd%b3%e6%96%b9%e6%a1%88.md">20 做持续交付概念重要还是场景重要？看笨办法如何找到最佳方案.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 极端业务场景下，我们应该如何做好稳定性保障？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/21%20%e6%9e%81%e7%ab%af%e4%b8%9a%e5%8a%a1%e5%9c%ba%e6%99%af%e4%b8%8b%ef%bc%8c%e6%88%91%e4%bb%ac%e5%ba%94%e8%af%a5%e5%a6%82%e4%bd%95%e5%81%9a%e5%a5%bd%e7%a8%b3%e5%ae%9a%e6%80%a7%e4%bf%9d%e9%9a%9c%ef%bc%9f.md">21 极端业务场景下，我们应该如何做好稳定性保障？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 稳定性实践：容量规划之业务场景分析.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/22%20%e7%a8%b3%e5%ae%9a%e6%80%a7%e5%ae%9e%e8%b7%b5%ef%bc%9a%e5%ae%b9%e9%87%8f%e8%a7%84%e5%88%92%e4%b9%8b%e4%b8%9a%e5%8a%a1%e5%9c%ba%e6%99%af%e5%88%86%e6%9e%90.md">22 稳定性实践：容量规划之业务场景分析.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 稳定性实践：容量规划之压测系统建设.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/23%20%e7%a8%b3%e5%ae%9a%e6%80%a7%e5%ae%9e%e8%b7%b5%ef%bc%9a%e5%ae%b9%e9%87%8f%e8%a7%84%e5%88%92%e4%b9%8b%e5%8e%8b%e6%b5%8b%e7%b3%bb%e7%bb%9f%e5%bb%ba%e8%ae%be.md">23 稳定性实践：容量规划之压测系统建设.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 稳定性实践：限流降级.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/24%20%e7%a8%b3%e5%ae%9a%e6%80%a7%e5%ae%9e%e8%b7%b5%ef%bc%9a%e9%99%90%e6%b5%81%e9%99%8d%e7%ba%a7.md">24 稳定性实践：限流降级.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25 稳定性实践：开关和预案.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/25%20%e7%a8%b3%e5%ae%9a%e6%80%a7%e5%ae%9e%e8%b7%b5%ef%bc%9a%e5%bc%80%e5%85%b3%e5%92%8c%e9%a2%84%e6%a1%88.md">25 稳定性实践：开关和预案.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 稳定性实践：全链路跟踪系统，技术运营能力的体现.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/26%20%e7%a8%b3%e5%ae%9a%e6%80%a7%e5%ae%9e%e8%b7%b5%ef%bc%9a%e5%85%a8%e9%93%be%e8%b7%af%e8%b7%9f%e8%b8%aa%e7%b3%bb%e7%bb%9f%ef%bc%8c%e6%8a%80%e6%9c%af%e8%bf%90%e8%90%a5%e8%83%bd%e5%8a%9b%e7%9a%84%e4%bd%93%e7%8e%b0.md">26 稳定性实践：全链路跟踪系统，技术运营能力的体现.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 故障管理：谈谈我对故障的理解.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/27%20%e6%95%85%e9%9a%9c%e7%ae%a1%e7%90%86%ef%bc%9a%e8%b0%88%e8%b0%88%e6%88%91%e5%af%b9%e6%95%85%e9%9a%9c%e7%9a%84%e7%90%86%e8%a7%a3.md">27 故障管理：谈谈我对故障的理解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 故障管理：故障定级和定责.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/28%20%e6%95%85%e9%9a%9c%e7%ae%a1%e7%90%86%ef%bc%9a%e6%95%85%e9%9a%9c%e5%ae%9a%e7%ba%a7%e5%92%8c%e5%ae%9a%e8%b4%a3.md">28 故障管理：故障定级和定责.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 故障管理：鼓励做事，而不是处罚错误.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/29%20%e6%95%85%e9%9a%9c%e7%ae%a1%e7%90%86%ef%bc%9a%e9%bc%93%e5%8a%b1%e5%81%9a%e4%ba%8b%ef%bc%8c%e8%80%8c%e4%b8%8d%e6%98%af%e5%a4%84%e7%bd%9a%e9%94%99%e8%af%af.md">29 故障管理：鼓励做事，而不是处罚错误.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30 故障管理：故障应急和故障复盘.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/30%20%e6%95%85%e9%9a%9c%e7%ae%a1%e7%90%86%ef%bc%9a%e6%95%85%e9%9a%9c%e5%ba%94%e6%80%a5%e5%92%8c%e6%95%85%e9%9a%9c%e5%a4%8d%e7%9b%98.md">30 故障管理：故障应急和故障复盘.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31 唇亡齿寒，运维与安全.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/31%20%e5%94%87%e4%ba%a1%e9%bd%bf%e5%af%92%ef%bc%8c%e8%bf%90%e7%bb%b4%e4%b8%8e%e5%ae%89%e5%85%a8.md">31 唇亡齿寒，运维与安全.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32 为什么蘑菇街会选择上云？是被动选择还是主动出击？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/32%20%e4%b8%ba%e4%bb%80%e4%b9%88%e8%98%91%e8%8f%87%e8%a1%97%e4%bc%9a%e9%80%89%e6%8b%a9%e4%b8%8a%e4%ba%91%ef%bc%9f%e6%98%af%e8%a2%ab%e5%8a%a8%e9%80%89%e6%8b%a9%e8%bf%98%e6%98%af%e4%b8%bb%e5%8a%a8%e5%87%ba%e5%87%bb%ef%bc%9f.md">32 为什么蘑菇街会选择上云？是被动选择还是主动出击？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33 为什么混合云是未来云计算的主流形态？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/33%20%e4%b8%ba%e4%bb%80%e4%b9%88%e6%b7%b7%e5%90%88%e4%ba%91%e6%98%af%e6%9c%aa%e6%9d%a5%e4%ba%91%e8%ae%a1%e7%ae%97%e7%9a%84%e4%b8%bb%e6%b5%81%e5%bd%a2%e6%80%81%ef%bc%9f.md">33 为什么混合云是未来云计算的主流形态？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35 以绝对优势立足：从CDN和云存储来聊聊云生态的崛起.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/35%20%e4%bb%a5%e7%bb%9d%e5%af%b9%e4%bc%98%e5%8a%bf%e7%ab%8b%e8%b6%b3%ef%bc%9a%e4%bb%8eCDN%e5%92%8c%e4%ba%91%e5%ad%98%e5%82%a8%e6%9d%a5%e8%81%8a%e8%81%8a%e4%ba%91%e7%94%9f%e6%80%81%e7%9a%84%e5%b4%9b%e8%b5%b7.md">35 以绝对优势立足：从CDN和云存储来聊聊云生态的崛起.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36 量体裁衣方得最优解：聊聊页面静态化架构和二级CDN建设.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/36%20%e9%87%8f%e4%bd%93%e8%a3%81%e8%a1%a3%e6%96%b9%e5%be%97%e6%9c%80%e4%bc%98%e8%a7%a3%ef%bc%9a%e8%81%8a%e8%81%8a%e9%a1%b5%e9%9d%a2%e9%9d%99%e6%80%81%e5%8c%96%e6%9e%b6%e6%9e%84%e5%92%8c%e4%ba%8c%e7%ba%a7CDN%e5%bb%ba%e8%ae%be.md">36 量体裁衣方得最优解：聊聊页面静态化架构和二级CDN建设.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37 云计算时代，我们所说的弹性伸缩，弹的到底是什么？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/37%20%e4%ba%91%e8%ae%a1%e7%ae%97%e6%97%b6%e4%bb%a3%ef%bc%8c%e6%88%91%e4%bb%ac%e6%89%80%e8%af%b4%e7%9a%84%e5%bc%b9%e6%80%a7%e4%bc%b8%e7%bc%a9%ef%bc%8c%e5%bc%b9%e7%9a%84%e5%88%b0%e5%ba%95%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f.md">37 云计算时代，我们所说的弹性伸缩，弹的到底是什么？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38 我是如何走上运维岗位的？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/38%20%e6%88%91%e6%98%af%e5%a6%82%e4%bd%95%e8%b5%b0%e4%b8%8a%e8%bf%90%e7%bb%b4%e5%b2%97%e4%bd%8d%e7%9a%84%ef%bc%9f.md">38 我是如何走上运维岗位的？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39 云计算和AI时代，运维应该如何做好转型？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/39%20%e4%ba%91%e8%ae%a1%e7%ae%97%e5%92%8cAI%e6%97%b6%e4%bb%a3%ef%bc%8c%e8%bf%90%e7%bb%b4%e5%ba%94%e8%af%a5%e5%a6%82%e4%bd%95%e5%81%9a%e5%a5%bd%e8%bd%ac%e5%9e%8b%ef%bc%9f.md">39 云计算和AI时代，运维应该如何做好转型？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40 运维需要懂产品和运营吗？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/40%20%e8%bf%90%e7%bb%b4%e9%9c%80%e8%a6%81%e6%87%82%e4%ba%a7%e5%93%81%e5%92%8c%e8%bf%90%e8%90%a5%e5%90%97%ef%bc%9f.md">40 运维需要懂产品和运营吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="41 冷静下来想想，员工离职这事真能防得住吗？.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/41%20%e5%86%b7%e9%9d%99%e4%b8%8b%e6%9d%a5%e6%83%b3%e6%83%b3%ef%bc%8c%e5%91%98%e5%b7%a5%e7%a6%bb%e8%81%8c%e8%bf%99%e4%ba%8b%e7%9c%9f%e8%83%bd%e9%98%b2%e5%be%97%e4%bd%8f%e5%90%97%ef%bc%9f.md">41 冷静下来想想，员工离职这事真能防得住吗？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="42 树立个人品牌意识：从背景调查谈谈职业口碑的重要性.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/42%20%e6%a0%91%e7%ab%8b%e4%b8%aa%e4%ba%ba%e5%93%81%e7%89%8c%e6%84%8f%e8%af%86%ef%bc%9a%e4%bb%8e%e8%83%8c%e6%99%af%e8%b0%83%e6%9f%a5%e8%b0%88%e8%b0%88%e8%81%8c%e4%b8%9a%e5%8f%a3%e7%a2%91%e7%9a%84%e9%87%8d%e8%a6%81%e6%80%a7.md">42 树立个人品牌意识：从背景调查谈谈职业口碑的重要性.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="划重点：赵成的运维体系管理课精华（一）.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/%e5%88%92%e9%87%8d%e7%82%b9%ef%bc%9a%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be%e7%b2%be%e5%8d%8e%ef%bc%88%e4%b8%80%ef%bc%89.md">划重点：赵成的运维体系管理课精华（一）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="划重点：赵成的运维体系管理课精华（三）.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/%e5%88%92%e9%87%8d%e7%82%b9%ef%bc%9a%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be%e7%b2%be%e5%8d%8e%ef%bc%88%e4%b8%89%ef%bc%89.md">划重点：赵成的运维体系管理课精华（三）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="划重点：赵成的运维体系管理课精华（二）.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/%e5%88%92%e9%87%8d%e7%82%b9%ef%bc%9a%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be%e7%b2%be%e5%8d%8e%ef%bc%88%e4%ba%8c%ef%bc%89.md">划重点：赵成的运维体系管理课精华（二）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="新书  《进化：运维技术变革与实践探索》.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/%e6%96%b0%e4%b9%a6%20%20%e3%80%8a%e8%bf%9b%e5%8c%96%ef%bc%9a%e8%bf%90%e7%bb%b4%e6%8a%80%e6%9c%af%e5%8f%98%e9%9d%a9%e4%b8%8e%e5%ae%9e%e8%b7%b5%e6%8e%a2%e7%b4%a2%e3%80%8b.md">新书  《进化：运维技术变革与实践探索》.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="特别放送 我的2019：收获，静静等待.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/%e7%89%b9%e5%88%ab%e6%94%be%e9%80%81%20%e6%88%91%e7%9a%842019%ef%bc%9a%e6%94%b6%e8%8e%b7%ef%bc%8c%e9%9d%99%e9%9d%99%e7%ad%89%e5%be%85.md">特别放送 我的2019：收获，静静等待.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="结束语 学习的过程，多些耐心和脚踏实地.md" href="/%e4%b8%93%e6%a0%8f/%e8%b5%b5%e6%88%90%e7%9a%84%e8%bf%90%e7%bb%b4%e4%bd%93%e7%b3%bb%e7%ae%a1%e7%90%86%e8%af%be/%e7%bb%93%e6%9d%9f%e8%af%ad%20%e5%ad%a6%e4%b9%a0%e7%9a%84%e8%bf%87%e7%a8%8b%ef%bc%8c%e5%a4%9a%e4%ba%9b%e8%80%90%e5%bf%83%e5%92%8c%e8%84%9a%e8%b8%8f%e5%ae%9e%e5%9c%b0.md">结束语 学习的过程，多些耐心和脚踏实地.md</a>
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
                            <h1 id="title" data-id="07 有了CMDB，为什么还需要应用配置管理？" class="title">07 有了CMDB，为什么还需要应用配置管理？</h1>
                            <div><p>今天我们分享的主题是：有了CMDB，为什么还需要应用配置管理？</p>

<p>你不妨先停下来，思考一下这个问题。</p>

<p>我抛出的观点是： <strong>CMDB是面向资源的管理，应用配置是面向应用的管理</strong>。</p>

<p>请注意，这里是面向“资源”，不是面向“资产”，资源 ≠资产。</p>

<h2 id="cmdb是面向资源的管理-是运维的基石">CMDB是面向资源的管理，是运维的基石</h2>

<p>我们一起来梳理一下，在建设运维的基础管理平台时通常要做的事情。</p>

<ul>
<li><strong>第1步</strong>，把服务器、网络、IDC、机柜、存储、配件等这几大维度先定下来；</li>
<li><strong>第2步</strong>，把这些硬件的属性确定下来，比如服务器就会有SN序列号、IP地址、厂商、硬件配置（如CPU、内存、硬盘、网卡、PCIE、BIOS）、维保信息等等；网络设备如交换机也会有厂商、型号、带宽等等；</li>
<li><strong>第3步</strong>，梳理以上信息之间的关联关系，或者叫拓扑关系。比如服务器所在机柜，虚拟机所在的宿主机、机柜所在IDC等简单关系；复杂一点就会有核心交换机、汇聚交换机、接入交换机以及机柜和服务器之间的级联关系；</li>
<li><strong>第3.5步</strong>，在上面信息的梳理过程中肯定就会遇到一些规划问题，比如，IP地址段的规划，哪个网段用于DB，哪个网段用于大数据、哪个网段用于业务应用等等，再比如同步要做的还有哪些机柜用于做虚拟化宿主机、哪些机柜只放DB机器等。</li>
</ul>

<p>以上信息梳理清楚，通过ER建模工具进行数据建模，再将以上的信息固化到DB中，一个资源层面的信息管理平台就基本成型了。</p>

<p>但是，<strong>信息固化不是目的，也没有价值，只有信息动态流转起来才有价值</strong>（跟货币一样）。接下来我们可以做的事情：</p>

<ul>
<li><strong>第4步</strong>，基于这些信息进行流程规范的建设，比如服务器的上线、下线、维修、装机等流程。同时，流程过程中状态的变更要同步管理起来；</li>
<li><strong>第5步</strong>，拓扑关系的可视化和动态展示，比如交换机与服务器之间的级联关系、状态（正常or故障）的展示等，这样可以很直观地关注到资源节点的状态。</li>
</ul>

<p>至此，从资源维度的信息梳理，以及基于这些信息的平台和流程规范建设就算是基本成型了。这个时候，以服务器简单示例，我们的视角是下面这样的：
￼￼</p>

<p><img src="assets/25f7203e9ce69c524bac80ea43f523e8.jpeg" alt="img" />
￼</p>

<h2 id="应用配置管理是面向应用的管理-是运维的核心">应用配置管理是面向应用的管理，是运维的核心</h2>

<p>上面说明了CMDB的基础信息部分，如果从传统的SA运维模式，这些信息已经足够，但是从应用运维的角度，这些就远远不够了。</p>

<p>这时我们就需要一个非常非常重要的句柄：<strong>应用名</strong>，或者叫应用标识。至此，应用运维里面最最重要的一条联系也就产生了：<strong>“应用名-IP“的关联关系</strong>（这里也可以是定义的其它唯一主机标识，如主机名、容器ID等等，因为我们使用的方式是IP，所以这里就以IP示例）。</p>

<p>之所以说“应用名”和“应用名-IP关联关系”非常重要，是因为它的影响力不仅仅在运维内部，而是会一直延伸到整个技术架构上。后面我们会介绍到的所有平台和系统建设，都跟这两个概念有关。</p>

<p>CMDB是IP为标识的资源管理维度，有了应用名之后，就是以应用为视角的管理维度了。首先看一下应用会涉及到的信息：</p>

<ul>
<li>应用基础信息，如应用责任人、应用的Git地址等；</li>
<li>应用部署涉及的基础软件包，如语言包（Java、C++、GO等）、Web容器（Tomcat、JBoss等）、Web服务器（Apache、Nginx等）、基础组件（各种agent，如日志、监控、系统维护类的tsar等）；</li>
<li>应用部署涉及的目录，如运维脚本目录、日志目录、应用包目录、临时目录等；</li>
<li>应用运行涉及的各项脚本和命令，如启停脚本、健康监测脚本；</li>
<li>应用运行时的参数配置，如Java的jvm参数，特别重要的是GC方式、新生代、老生代、永生代的堆内存大小配置等；</li>
<li>应用运行的端口号；</li>
<li>应用日志的输出规范；</li>
<li>其他。</li>
</ul>

<p>上面的梳理过程实际就是标准化的过程。我们梳理完上述信息后就会发现，这些信息跟CMDB里面的资源信息完全是两个维度的东西。所以从信息管理维度上讲，把资源配置和应用配置分开会更清晰，解耦之后也更容易管理。</p>

<p><strong>好了，按照上面CMDB说的套路，梳理完成后，就是要进行信息的建模和数据的固化，这时就有了我们的“应用配置管理”</strong>。再往后，就是基于应用配置管理的流程规范和工具平台的建设，这就涉及到我们经常说的持续集成和发布、持续交付、监控、稳定性平台、成本管理等等。</p>

<p>从应用的视角，我们配置管理，应该是下面这样一个视图（简单示例，不是完整的）：</p>

<p><img src="assets/6ee5e2dc98630d233a3dbd4201f36dcd.jpeg" alt="img" />
￼
好了，有了资源配置信息和应用配置信息，这两个信息应该怎么统一管理起来呢。直接看图：</p>

<p><img src="assets/c8243cfbd07d99478a1b6193cb20b56b.jpeg" alt="img" /></p>

<p>至此，CMDB和应用配置管理的分层分解就完成了，应用名关联着应用配置信息，IP关联着资源信息，二者通过“应用名-IP”的对应关系，联系到一起。</p>

<h2 id="总结">总结</h2>

<p><strong>CMDB是运维的基石，但是要发挥出更大的价值，只有基础是不够的，我们要把更多的精力放到上层的应用和价值服务上，所以我们说应用才是运维的核心</strong>。</p>

<p>你可以看到，如果仅仅基于CMDB的资源信息作自动化，最多只能做出自动化的硬件资源采集、自动化装机、网络-硬件拓扑关系生成等资源层面的工具，这些工具只会在运维层面产生价值，离业务还很远，就更谈不上给业务带来价值了。</p>

<p>但是基于应用这一层去做，就可以做很多事情，比如持续集成和发布、持续交付、弹性扩缩容、稳定性平台、成本控制等等，做这些事情带来的价值就会大大不同。</p>

<p>以上就是我抛出的观点，CMDB是面向资源的管理，应用配置是面向应用的管理。希望能够抛砖引玉，听到更多你的观点和反馈。</p>

<p>如果今天的内容对你有用，也希望你分享给身边的朋友，我们下期见！</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#b9d5d5d5808d8888898ef9ded4d8d0d597dad6d4" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f18cb07fdd3edea',t:'MTczNDEyMjY3Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>