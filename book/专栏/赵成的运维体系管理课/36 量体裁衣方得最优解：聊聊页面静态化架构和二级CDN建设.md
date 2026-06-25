<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=36&#32;量体裁衣方得最优解：聊聊页面静态化架构和二级CDN建设>
        <link rel="icon" href="/static/favicon.png">
        <title>36 量体裁衣方得最优解：聊聊页面静态化架构和二级CDN建设 </title>
        
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
                            <h1 id="title" data-id="36 量体裁衣方得最优解：聊聊页面静态化架构和二级CDN建设" class="title">36 量体裁衣方得最优解：聊聊页面静态化架构和二级CDN建设</h1>
                            <div><p>上期文章中我们介绍了CDN和云存储的实践，以及云生态的崛起之路，今天，我们继续聊一聊CDN。</p>

<p>我们通常意义上讲的CDN，更多的是针对静态资源类的内容分发网络，最典型的就是电商的各类图片，还有JS和CSS这样的样式文件。通过CDN能够让用户就近访问，提升用户体验。</p>

<p>但是这类文件只是以单纯的资源存在，与业务逻辑没有强关联。所以我们在技术上，可以使用业界通用的CDN和云存储解决方案。</p>

<p>需要注意的是，本文中我们讲到的实践内容，同样是遵从<strong>静态内容，就近访问</strong>这个原则的。</p>

<p>但是，因为其中包含了大量的业务逻辑，这就要求我们在面对不同的场景时，要有跟业务逻辑相关的定制化的解决方案。</p>

<p>下面，我们就一起来看看页面静态化架构和二级CDN建设。</p>

<h2 id="静态化架构建设的业务场景">静态化架构建设的业务场景</h2>

<p>我们仍然回到电商的业务场景中来。对于电商，访问量最大的无疑是商品的详情页，绝大多数用户都要通过浏览商品详情，来决定是否下单。所以单就这一类页面，就占到全站30%+的流量。</p>

<p>那么，商品详情一般由哪些部分组成呢？我们看下面两个截图：</p>

<p><img src="assets/4c327a6e6525eb2f9b09777f419079c0.jpg" alt="img" />
￼
<img src="assets/6ea58723cbdb099c464c2fefbc0c915e.jpg" alt="img" />
￼
以上两张图就是某个商品详情页的主要组成部分。我们可以看到，商品详情大致包括了商品名称、商品描述、产品参数描述、价格、SKU、库存、评价、优惠活动、优惠规则以及同款推荐等等信息。</p>

<p>这里我们仔细观察可以发现，其实对于商品描述类的信息，比如商品名称、商品描述、产品参数描述等等，一般在商品发布之后，就很少再变动，属于静态化的内容。</p>

<p>而优惠活动、优惠规则、价格等等则是可以灵活调整的，库存和评价这类信息也是随时变化，处于不断的更新中。</p>

<p>说到这里，我们会想到，如果能够把静态化的内容提取出来单独存放，业务请求时直接返回，而不用再通过调用应用层接口的方式，去访问缓存或者查询数据库，那访问效率一定是会大幅提升的。</p>

<p>所以，我们在参考和调研了业界的解决方案之后，引入了页面静态化架构。</p>

<h2 id="页面静态化架构">页面静态化架构</h2>

<p>静态架构中，我们采用的技术方案是ATS，也就是Apache Traffic Server。</p>

<p>ATS是一个开源产品，本质上跟Nginx、Squid以及Varnish这样的HTTP反向代理是一样的。但是它能对动静态分离的场景提供很好的支持，所以在最初，我们直接引入了这样的开源解决方案。</p>

<p>ATS的架构示意图如下：</p>

<p><img src="assets/0a2408b31741ee0db09e2f7483c13878.jpg" alt="img" />
￼
关键技术点：</p>

<ul>
<li><strong>动静态分离</strong>。将页面上相对固定的静态信息和随时在变化的动态信息区分出来，静态信息直接在ATS集群获取，动态信息则回源到应用层。通过HTTP请求调用获取，最终通过ATS组装后返回给调用方，从而实现了动静态资源的分离。</li>
<li><strong>动态数据获取</strong>。直接采用ATS的ESI标签模式，用来标记那些动态的被请求的数据。</li>
<li><strong>失效机制</strong>。分为主动失效、被动失效和定时失效。对于静态信息来说，我们也允许它变化，但因为静态信息自身的特性，决定了它不会频繁变化。所以，我们会有一个失效中心，即Purge Center。失效消息通过HTTP的Purge方法发送给ATS，而失效中心则会通过订阅消息系统中特定的Topic，或者MySql中特定的binlong变更，执行失效。</li>
</ul>

<p>以上就是静态化建设的框架性的解决方案，这个方案在电商大促时往往能够发挥更加突出的作用。下面我就简单说明下。</p>

<h2 id="静态化架构在大促场景中的应用">静态化架构在大促场景中的应用</h2>

<p>我们还是以业务场景作为切入点来看。以“双11”为例，参与大促的商家和商品，一般会在11月初完成全部报名。届时所有的商品信息都将确认完毕，且直到“双11活动&rdquo;结束，基本不会再发生大的变化。</p>

<p>它跟平时的不同之处在于，商品在大促期间是相对固定的，所以就可以将商品的静态化信息提前预热到ATS集群中，大大提升静态化的命中率。</p>

<p>同时，价格、优惠、库存这些动态信息在日常是会经常变化的，但是在大促阶段是必须固定的。即使有变化，也只能体现在最终的订购阶段，而在用户浏览阶段尽量保持不变。</p>

<p>所以，这时可做静态化处理的内容就会更多。换言之，静态化架构对于后端的访问请求就会进一步减少，特别是价格、优惠和库存这样的查询计算类请求。</p>

<p>同时，我们静态化页面的范围可以更广，不仅仅是详情页，还可以包括各类大促活动的页面、秒杀页面、会场页面，甚至是首页。</p>

<p>因为这些页面都是提前配置好再发布的，所以我们完全可以通过静态化解决方案，来分担更大的流量。</p>

<p>以详情页为例。在静态化方案全面铺开推广后，静态化内容在大促阶段的命中率为95%，RT时延从原来完全动态获取的200ms，降低到50ms。这大大提升了用户体验，同时也大幅提升了整体系统容量。</p>

<p>静态化方案和应用场景我们就介绍到这里。你可能会问：既然是静态化的内容，那是不是仍然可以借鉴CDN的思路，让用户就近访问呢？</p>

<p>我们下面就介绍一下页面静态化与公有云相结合的方案：二级CDN建设。</p>

<h2 id="二级cdn建设">二级CDN建设</h2>

<p>上面我们提到的静态化方案，仅仅是我们自己中心机房的建设方案，也就是说，所有的用户请求还是都要回到中心机房中。</p>

<p>静态化方案提升的是后端的访问体验，但是用户到机房的这段距离的体验并没有改善。</p>

<p>从静态化的角度，这些内容我们完全可以分散到更多的地域节点上，让它们离用户更近，从而真正解决从用户起点到机房终点的距离问题。</p>

<p>所以，我们接下来的方案就是：选择公有云节点，进行静态化与公有云相结合的方案，也就是我们的二级CDN方案。简单示意如下：</p>

<p><img src="assets/ee0ca7f26d73f407a0ebb3bb55284076.jpg" alt="img" />
￼
引入了这样的二级CDN架构后，下面几个技术点需要我们多加关注。</p>

<ul>
<li><strong>回源线路，公网回源转变为专线回源</strong>。之前我们的中心机房还是托管IDC模式时，动态回源部分都是通过公网回源，同时，静态化配置的推送也是通过公网推送到公有云节点，这对成功率和访问质量上都会有一些影响。但是我们上云之后，做的第一件事情就是将公网访问模式调整成了内网调用模式，也就是动态回源直接改为专线的动态回源。这样大大提升了访问质量，且进一步节省了部分带宽费用。</li>
<li><strong>弹性伸缩</strong>。利用了公有云节点之后，在大促时就可以很方便地进行动态扩缩容，以便真正地按需使用。而且自动化的扩缩容，以及日常的静态化配置推送都需要完善。</li>
<li><strong>高可用保障</strong>。为了保障多节点的高可用，在单个节点故障时，要能够快速切换。当前我们的策略仍然是，当某个节点遭遇故障，直接全部切换回中心节点。这里为了能够达到快速切换的目的，需要通过HttpDNS这样切换IP的方式实现。因为DNS缓存生效周期较长，如果是通过域名切换，则造成的影响周期会比较长。</li>
</ul>

<h2 id="总结">总结</h2>

<p>今天分享的页面静态化架构方案和二级CDN方案，是我在实际工作中较早跟公有云方案相结合的实践之一，并且在我们的日常和大促活动中，起到了非常好的效果。</p>

<p>同时也可以看到，我们的业务一旦与公有云相结合，云生态的各种优势就会马上体现出来。但是无论选择哪种方案，都要结合具体的业务场景，才能作出最优的方案选择。</p>

<p>公有云也好，云计算也好，都不能为我们提供完美的定制解决方案。正所谓具体问题具体分析，找出问题，优化解决路径，量体裁衣，才能得到最适合我们的“定制方案”。</p>

<p>正如我之前提到的：只有挖掘出对业务有价值的东西，我们的技术才会有创新，才会有生命力。</p>

<p>如果你在这方面有好的实践经验和想法，欢迎你留言与我讨论。</p>

<p>如果今天的内容对你有帮助，也欢迎你分享给身边的朋友，我们下期见！</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#deb2b2b2e7eaefefeee99eb9b3bfb7b2f0bdb1b3" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f18d087d9b4edea',t:'MTczNDEyMjkwMS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>