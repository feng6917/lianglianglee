<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=FAQ第三期&#32;Apache&#32;Beam基础答疑>
        <link rel="icon" href="/static/favicon.png">
        <title>FAQ第三期 Apache Beam基础答疑 </title>
        
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
                        <a class="menu-item" id="00 开篇词 从这里开始，带你走上硅谷一线系统架构师之路.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/00%20%e5%bc%80%e7%af%87%e8%af%8d%20%e4%bb%8e%e8%bf%99%e9%87%8c%e5%bc%80%e5%a7%8b%ef%bc%8c%e5%b8%a6%e4%bd%a0%e8%b5%b0%e4%b8%8a%e7%a1%85%e8%b0%b7%e4%b8%80%e7%ba%bf%e7%b3%bb%e7%bb%9f%e6%9e%b6%e6%9e%84%e5%b8%88%e4%b9%8b%e8%b7%af.md">00 开篇词 从这里开始，带你走上硅谷一线系统架构师之路.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="01 为什么MapReduce会被硅谷一线公司淘汰？.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/01%20%e4%b8%ba%e4%bb%80%e4%b9%88MapReduce%e4%bc%9a%e8%a2%ab%e7%a1%85%e8%b0%b7%e4%b8%80%e7%ba%bf%e5%85%ac%e5%8f%b8%e6%b7%98%e6%b1%b0%ef%bc%9f.md">01 为什么MapReduce会被硅谷一线公司淘汰？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 MapReduce后谁主沉浮：怎样设计下一代数据处理技术？.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/02%20MapReduce%e5%90%8e%e8%b0%81%e4%b8%bb%e6%b2%89%e6%b5%ae%ef%bc%9a%e6%80%8e%e6%a0%b7%e8%ae%be%e8%ae%a1%e4%b8%8b%e4%b8%80%e4%bb%a3%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e6%8a%80%e6%9c%af%ef%bc%9f.md">02 MapReduce后谁主沉浮：怎样设计下一代数据处理技术？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 大规模数据处理初体验：怎样实现大型电商热销榜？.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/03%20%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%88%9d%e4%bd%93%e9%aa%8c%ef%bc%9a%e6%80%8e%e6%a0%b7%e5%ae%9e%e7%8e%b0%e5%a4%a7%e5%9e%8b%e7%94%b5%e5%95%86%e7%83%ad%e9%94%80%e6%a6%9c%ef%bc%9f.md">03 大规模数据处理初体验：怎样实现大型电商热销榜？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 分布式系统（上）：学会用服务等级协议SLA来评估你的系统.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/04%20%e5%88%86%e5%b8%83%e5%bc%8f%e7%b3%bb%e7%bb%9f%ef%bc%88%e4%b8%8a%ef%bc%89%ef%bc%9a%e5%ad%a6%e4%bc%9a%e7%94%a8%e6%9c%8d%e5%8a%a1%e7%ad%89%e7%ba%a7%e5%8d%8f%e8%ae%aeSLA%e6%9d%a5%e8%af%84%e4%bc%b0%e4%bd%a0%e7%9a%84%e7%b3%bb%e7%bb%9f.md">04 分布式系统（上）：学会用服务等级协议SLA来评估你的系统.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 分布式系统（下）：架构师不得不知的三大指标.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/05%20%e5%88%86%e5%b8%83%e5%bc%8f%e7%b3%bb%e7%bb%9f%ef%bc%88%e4%b8%8b%ef%bc%89%ef%bc%9a%e6%9e%b6%e6%9e%84%e5%b8%88%e4%b8%8d%e5%be%97%e4%b8%8d%e7%9f%a5%e7%9a%84%e4%b8%89%e5%a4%a7%e6%8c%87%e6%a0%87.md">05 分布式系统（下）：架构师不得不知的三大指标.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 如何区分批处理还是流处理？.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/06%20%e5%a6%82%e4%bd%95%e5%8c%ba%e5%88%86%e6%89%b9%e5%a4%84%e7%90%86%e8%bf%98%e6%98%af%e6%b5%81%e5%a4%84%e7%90%86%ef%bc%9f.md">06 如何区分批处理还是流处理？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 Workflow设计模式：让你在大规模数据世界中君临天下.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/07%20Workflow%e8%ae%be%e8%ae%a1%e6%a8%a1%e5%bc%8f%ef%bc%9a%e8%ae%a9%e4%bd%a0%e5%9c%a8%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e4%b8%96%e7%95%8c%e4%b8%ad%e5%90%9b%e4%b8%b4%e5%a4%a9%e4%b8%8b.md">07 Workflow设计模式：让你在大规模数据世界中君临天下.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 发布_订阅模式：流处理架构中的瑞士军刀.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/08%20%e5%8f%91%e5%b8%83_%e8%ae%a2%e9%98%85%e6%a8%a1%e5%bc%8f%ef%bc%9a%e6%b5%81%e5%a4%84%e7%90%86%e6%9e%b6%e6%9e%84%e4%b8%ad%e7%9a%84%e7%91%9e%e5%a3%ab%e5%86%9b%e5%88%80.md">08 发布_订阅模式：流处理架构中的瑞士军刀.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 CAP定理：三选二，架构师必须学会的取舍.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/09%20CAP%e5%ae%9a%e7%90%86%ef%bc%9a%e4%b8%89%e9%80%89%e4%ba%8c%ef%bc%8c%e6%9e%b6%e6%9e%84%e5%b8%88%e5%bf%85%e9%a1%bb%e5%ad%a6%e4%bc%9a%e7%9a%84%e5%8f%96%e8%88%8d.md">09 CAP定理：三选二，架构师必须学会的取舍.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 Lambda架构：Twitter亿级实时数据分析架构背后的倚天剑.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/10%20Lambda%e6%9e%b6%e6%9e%84%ef%bc%9aTwitter%e4%ba%bf%e7%ba%a7%e5%ae%9e%e6%97%b6%e6%95%b0%e6%8d%ae%e5%88%86%e6%9e%90%e6%9e%b6%e6%9e%84%e8%83%8c%e5%90%8e%e7%9a%84%e5%80%9a%e5%a4%a9%e5%89%91.md">10 Lambda架构：Twitter亿级实时数据分析架构背后的倚天剑.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 Kappa架构：利用Kafka锻造的屠龙刀.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/11%20Kappa%e6%9e%b6%e6%9e%84%ef%bc%9a%e5%88%a9%e7%94%a8Kafka%e9%94%bb%e9%80%a0%e7%9a%84%e5%b1%a0%e9%be%99%e5%88%80.md">11 Kappa架构：利用Kafka锻造的屠龙刀.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 我们为什么需要Spark？.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/12%20%e6%88%91%e4%bb%ac%e4%b8%ba%e4%bb%80%e4%b9%88%e9%9c%80%e8%a6%81Spark%ef%bc%9f.md">12 我们为什么需要Spark？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 弹性分布式数据集：Spark大厦的地基（上）.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/13%20%e5%bc%b9%e6%80%a7%e5%88%86%e5%b8%83%e5%bc%8f%e6%95%b0%e6%8d%ae%e9%9b%86%ef%bc%9aSpark%e5%a4%a7%e5%8e%a6%e7%9a%84%e5%9c%b0%e5%9f%ba%ef%bc%88%e4%b8%8a%ef%bc%89.md">13 弹性分布式数据集：Spark大厦的地基（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 弹性分布式数据集：Spark大厦的地基（下）.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/14%20%e5%bc%b9%e6%80%a7%e5%88%86%e5%b8%83%e5%bc%8f%e6%95%b0%e6%8d%ae%e9%9b%86%ef%bc%9aSpark%e5%a4%a7%e5%8e%a6%e7%9a%84%e5%9c%b0%e5%9f%ba%ef%bc%88%e4%b8%8b%ef%bc%89.md">14 弹性分布式数据集：Spark大厦的地基（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 Spark SQL：Spark数据查询的利器.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/15%20Spark%20SQL%ef%bc%9aSpark%e6%95%b0%e6%8d%ae%e6%9f%a5%e8%af%a2%e7%9a%84%e5%88%a9%e5%99%a8.md">15 Spark SQL：Spark数据查询的利器.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 Spark Streaming：Spark的实时流计算API.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/16%20Spark%20Streaming%ef%bc%9aSpark%e7%9a%84%e5%ae%9e%e6%97%b6%e6%b5%81%e8%ae%a1%e7%ae%97API.md">16 Spark Streaming：Spark的实时流计算API.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 Structured Streaming：如何用DataFrame API进行实时数据分析_.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/17%20Structured%20Streaming%ef%bc%9a%e5%a6%82%e4%bd%95%e7%94%a8DataFrame%20API%e8%bf%9b%e8%a1%8c%e5%ae%9e%e6%97%b6%e6%95%b0%e6%8d%ae%e5%88%86%e6%9e%90_.md">17 Structured Streaming：如何用DataFrame API进行实时数据分析_.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 Word Count：从零开始运行你的第一个Spark应用.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/18%20Word%20Count%ef%bc%9a%e4%bb%8e%e9%9b%b6%e5%bc%80%e5%a7%8b%e8%bf%90%e8%a1%8c%e4%bd%a0%e7%9a%84%e7%ac%ac%e4%b8%80%e4%b8%aaSpark%e5%ba%94%e7%94%a8.md">18 Word Count：从零开始运行你的第一个Spark应用.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 综合案例实战：处理加州房屋信息，构建线性回归模型.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/19%20%e7%bb%bc%e5%90%88%e6%a1%88%e4%be%8b%e5%ae%9e%e6%88%98%ef%bc%9a%e5%a4%84%e7%90%86%e5%8a%a0%e5%b7%9e%e6%88%bf%e5%b1%8b%e4%bf%a1%e6%81%af%ef%bc%8c%e6%9e%84%e5%bb%ba%e7%ba%bf%e6%80%a7%e5%9b%9e%e5%bd%92%e6%a8%a1%e5%9e%8b.md">19 综合案例实战：处理加州房屋信息，构建线性回归模型.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 流处理案例实战：分析纽约市出租车载客信息.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/20%20%e6%b5%81%e5%a4%84%e7%90%86%e6%a1%88%e4%be%8b%e5%ae%9e%e6%88%98%ef%bc%9a%e5%88%86%e6%9e%90%e7%ba%bd%e7%ba%a6%e5%b8%82%e5%87%ba%e7%a7%9f%e8%bd%a6%e8%bd%bd%e5%ae%a2%e4%bf%a1%e6%81%af.md">20 流处理案例实战：分析纽约市出租车载客信息.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 深入对比Spark与Flink：帮你系统设计两开花.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/21%20%e6%b7%b1%e5%85%a5%e5%af%b9%e6%af%94Spark%e4%b8%8eFlink%ef%bc%9a%e5%b8%ae%e4%bd%a0%e7%b3%bb%e7%bb%9f%e8%ae%be%e8%ae%a1%e4%b8%a4%e5%bc%80%e8%8a%b1.md">21 深入对比Spark与Flink：帮你系统设计两开花.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="22 Apache Beam的前世今生.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/22%20Apache%20Beam%e7%9a%84%e5%89%8d%e4%b8%96%e4%bb%8a%e7%94%9f.md">22 Apache Beam的前世今生.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="23 站在Google的肩膀上学习Beam编程模型.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/23%20%e7%ab%99%e5%9c%a8Google%e7%9a%84%e8%82%a9%e8%86%80%e4%b8%8a%e5%ad%a6%e4%b9%a0Beam%e7%bc%96%e7%a8%8b%e6%a8%a1%e5%9e%8b.md">23 站在Google的肩膀上学习Beam编程模型.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="24 PCollection：为什么Beam要如此抽象封装数据？.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/24%20PCollection%ef%bc%9a%e4%b8%ba%e4%bb%80%e4%b9%88Beam%e8%a6%81%e5%a6%82%e6%ad%a4%e6%8a%bd%e8%b1%a1%e5%b0%81%e8%a3%85%e6%95%b0%e6%8d%ae%ef%bc%9f.md">24 PCollection：为什么Beam要如此抽象封装数据？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="25 Transform：Beam数据转换操作的抽象方法.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/25%20Transform%ef%bc%9aBeam%e6%95%b0%e6%8d%ae%e8%bd%ac%e6%8d%a2%e6%93%8d%e4%bd%9c%e7%9a%84%e6%8a%bd%e8%b1%a1%e6%96%b9%e6%b3%95.md">25 Transform：Beam数据转换操作的抽象方法.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="26 Pipeline：Beam如何抽象多步骤的数据流水线？.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/26%20Pipeline%ef%bc%9aBeam%e5%a6%82%e4%bd%95%e6%8a%bd%e8%b1%a1%e5%a4%9a%e6%ad%a5%e9%aa%a4%e7%9a%84%e6%95%b0%e6%8d%ae%e6%b5%81%e6%b0%b4%e7%ba%bf%ef%bc%9f.md">26 Pipeline：Beam如何抽象多步骤的数据流水线？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="27 Pipeline I_O_ Beam数据中转的设计模式.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/27%20Pipeline%20I_O_%20Beam%e6%95%b0%e6%8d%ae%e4%b8%ad%e8%bd%ac%e7%9a%84%e8%ae%be%e8%ae%a1%e6%a8%a1%e5%bc%8f.md">27 Pipeline I_O_ Beam数据中转的设计模式.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="28 如何设计创建好一个Beam Pipeline？.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/28%20%e5%a6%82%e4%bd%95%e8%ae%be%e8%ae%a1%e5%88%9b%e5%bb%ba%e5%a5%bd%e4%b8%80%e4%b8%aaBeam%20Pipeline%ef%bc%9f.md">28 如何设计创建好一个Beam Pipeline？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="29 如何测试Beam Pipeline？.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/29%20%e5%a6%82%e4%bd%95%e6%b5%8b%e8%af%95Beam%20Pipeline%ef%bc%9f.md">29 如何测试Beam Pipeline？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="30 Apache Beam实战冲刺：Beam如何run everywhere_.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/30%20Apache%20Beam%e5%ae%9e%e6%88%98%e5%86%b2%e5%88%ba%ef%bc%9aBeam%e5%a6%82%e4%bd%95run%20everywhere_.md">30 Apache Beam实战冲刺：Beam如何run everywhere_.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="31 WordCount Beam Pipeline实战.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/31%20WordCount%20Beam%20Pipeline%e5%ae%9e%e6%88%98.md">31 WordCount Beam Pipeline实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="32 Beam Window：打通流处理的任督二脉.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/32%20Beam%20Window%ef%bc%9a%e6%89%93%e9%80%9a%e6%b5%81%e5%a4%84%e7%90%86%e7%9a%84%e4%bb%bb%e7%9d%a3%e4%ba%8c%e8%84%89.md">32 Beam Window：打通流处理的任督二脉.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="33 横看成岭侧成峰：再战Streaming WordCount.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/33%20%e6%a8%aa%e7%9c%8b%e6%88%90%e5%b2%ad%e4%be%a7%e6%88%90%e5%b3%b0%ef%bc%9a%e5%86%8d%e6%88%98Streaming%20WordCount.md">33 横看成岭侧成峰：再战Streaming WordCount.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="34 Amazon热销榜Beam Pipeline实战.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/34%20Amazon%e7%83%ad%e9%94%80%e6%a6%9cBeam%20Pipeline%e5%ae%9e%e6%88%98.md">34 Amazon热销榜Beam Pipeline实战.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="35 Facebook游戏实时流处理Beam Pipeline实战（上）.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/35%20Facebook%e6%b8%b8%e6%88%8f%e5%ae%9e%e6%97%b6%e6%b5%81%e5%a4%84%e7%90%86Beam%20Pipeline%e5%ae%9e%e6%88%98%ef%bc%88%e4%b8%8a%ef%bc%89.md">35 Facebook游戏实时流处理Beam Pipeline实战（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="36 Facebook游戏实时流处理Beam Pipeline实战（下）.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/36%20Facebook%e6%b8%b8%e6%88%8f%e5%ae%9e%e6%97%b6%e6%b5%81%e5%a4%84%e7%90%86Beam%20Pipeline%e5%ae%9e%e6%88%98%ef%bc%88%e4%b8%8b%ef%bc%89.md">36 Facebook游戏实时流处理Beam Pipeline实战（下）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="37 5G时代，如何处理超大规模物联网数据.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/37%205G%e6%97%b6%e4%bb%a3%ef%bc%8c%e5%a6%82%e4%bd%95%e5%a4%84%e7%90%86%e8%b6%85%e5%a4%a7%e8%a7%84%e6%a8%a1%e7%89%a9%e8%81%94%e7%bd%91%e6%95%b0%e6%8d%ae.md">37 5G时代，如何处理超大规模物联网数据.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="38 大规模数据处理在深度学习中如何应用？.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/38%20%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%9c%a8%e6%b7%b1%e5%ba%a6%e5%ad%a6%e4%b9%a0%e4%b8%ad%e5%a6%82%e4%bd%95%e5%ba%94%e7%94%a8%ef%bc%9f.md">38 大规模数据处理在深度学习中如何应用？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="39 从SQL到Streaming SQL：突破静态数据查询的次元.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/39%20%e4%bb%8eSQL%e5%88%b0Streaming%20SQL%ef%bc%9a%e7%aa%81%e7%a0%b4%e9%9d%99%e6%80%81%e6%95%b0%e6%8d%ae%e6%9f%a5%e8%af%a2%e7%9a%84%e6%ac%a1%e5%85%83.md">39 从SQL到Streaming SQL：突破静态数据查询的次元.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="40 大规模数据处理未来之路.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/40%20%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e6%9c%aa%e6%9d%a5%e4%b9%8b%e8%b7%af.md">40 大规模数据处理未来之路.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="FAQ第一期 学习大规模数据处理需要什么基础？.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/FAQ%e7%ac%ac%e4%b8%80%e6%9c%9f%20%e5%ad%a6%e4%b9%a0%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e9%9c%80%e8%a6%81%e4%bb%80%e4%b9%88%e5%9f%ba%e7%a1%80%ef%bc%9f.md">FAQ第一期 学习大规模数据处理需要什么基础？.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="FAQ第三期 Apache Beam基础答疑.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/FAQ%e7%ac%ac%e4%b8%89%e6%9c%9f%20Apache%20Beam%e5%9f%ba%e7%a1%80%e7%ad%94%e7%96%91.md">FAQ第三期 Apache Beam基础答疑.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="FAQ第二期 Spark案例实战答疑.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/FAQ%e7%ac%ac%e4%ba%8c%e6%9c%9f%20Spark%e6%a1%88%e4%be%8b%e5%ae%9e%e6%88%98%e7%ad%94%e7%96%91.md">FAQ第二期 Spark案例实战答疑.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="加油站 Practice makes perfect！.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/%e5%8a%a0%e6%b2%b9%e7%ab%99%20Practice%20makes%20perfect%ef%bc%81.md">加油站 Practice makes perfect！.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="结束语 世间所有的相遇，都是久别重逢.md" href="/%e4%b8%93%e6%a0%8f/%e5%a4%a7%e8%a7%84%e6%a8%a1%e6%95%b0%e6%8d%ae%e5%a4%84%e7%90%86%e5%ae%9e%e6%88%98/%e7%bb%93%e6%9d%9f%e8%af%ad%20%e4%b8%96%e9%97%b4%e6%89%80%e6%9c%89%e7%9a%84%e7%9b%b8%e9%81%87%ef%bc%8c%e9%83%bd%e6%98%af%e4%b9%85%e5%88%ab%e9%87%8d%e9%80%a2.md">结束语 世间所有的相遇，都是久别重逢.md</a>
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
                            <h1 id="title" data-id="FAQ第三期 Apache Beam基础答疑" class="title">FAQ第三期 Apache Beam基础答疑</h1>
                            <div><p>你好，我是蔡元楠。</p>

<p>这里是“FAQ第三期：Apache Beam基础答疑”。这一期主要是针对上周结束的模块四——Apache Beam的基础知识部分进行答疑，并且做了一些补充。</p>

<p>如果你对文章的印象不深了，可以先点击题目返回文章复习。当然，你也可以继续在留言中提出疑问。希望我的解答对你有所帮助。</p>

<h2 id="22-apache-beam的前世今生-https-time-geekbang-org-column-article-99379"><a href="https://time.geekbang.org/column/article/99379" target="_blank">22 | Apache Beam的前世今生</a></h2>

<p>在第22讲中，我分享了Apache Beam的诞生历程。留言中渡码、coder和Milittle都分享了自己了解的技术变迁、技术诞生历史。</p>

<p><img src="assets/978fb22ee91e41459261ab511c1d5609.jpg" alt="unpreview" /></p>

<p><img src="assets/28c0bb57613240e38f9e128039678e3c.jpg" alt="unpreview" /></p>

<p>而JohnT3e则是分享了我在文章中提到的几个论文的具体内容。他分享的论文是非常好的补充材料，也希望你有时间的话可以下载来看一看。我把链接贴在了文章里，你可以直接点击下载浏览。</p>

<p><a href="https://research.google.com/archive/mapreduce-osdi04.pdf" target="_blank">MapReduce论文</a>-
<a href="https://research.google.com/pubs/archive/35650.pdf" target="_blank">Flumejava论文</a>-
<a href="https://research.google.com/pubs/archive/41378.pdf" target="_blank">MillWheel论文</a>-
<a href="https://www.vldb.org/pvldb/vol8/p1792-Akidau.pdf%5D" target="_blank">Data flow Model论文</a></p>

<p>Morgan在第22讲中提问：Beam和Spark是什么关系？</p>

<p><img src="assets/d9e8d338329f4a2d85f54f9f50d77928.jpg" alt="unpreview" /></p>

<p>我的回答是，Spark可以作为Beam的一个底层Runner来运行通过Beam SDK所编写的数据处理逻辑。相信在读完第23讲的内容后，Morgan会对这个概念有一个更好的认识。</p>

<h2 id="23-站在google的肩膀上学习beam编程模型-https-time-geekbang-org-column-article-100478"><a href="https://time.geekbang.org/column/article/100478" target="_blank">23 | 站在Google的肩膀上学习Beam编程模型</a></h2>

<p>在第23讲中，明翼提出的问题如下：</p>

<p><img src="assets/79101dd1deb44677b7b3188cbc0b4fdd.jpg" alt="unpreview" /></p>

<p>其实明翼的这些问题本质上还是在问：Beam在整个数据处理框架中扮演着一个什么样的角色？</p>

<p>首先，为什么不是所有的大数据处理引擎都可以作为底层Runner呢？原因是，并不是所有的数据处理引擎都按照Beam的编程模型去实现了相应的原生API。</p>

<p>我以现在国内很火的Flink作为底层Runner为例子来说一下。</p>

<p>在Flink 0.10版本以前，Flink的原生API并不是按照Beam所提出的编程模型来写的，所以那个时候，Flink并不能作为Beam的底层Runner。而在Flink 0.10版本以后，Flink按照Beam编程模型的思想重写了DataStream API。这个时候，如果我们用Beam SDK编写完数据处理逻辑就可以直接转换成相应的Flink原生支持代码。</p>

<p>当然，明翼说的没错，因为不是直接在原生Runner上编写程序，在参数调整上肯定会有所限制。但是，Beam所提倡的是一个生态圈系统，自然是希望不同的底层数据处理引擎都能有相应的API来支持Beam的编程模型。</p>

<p>这种做法有它的好处，那就是对于专注于应用层的工程师来说，它解放了我们需要学习不同引擎中原生API的限制，也改善了我们需要花时间了解不同处理引擎的弊端。对于专注于开发数据处理引擎的工程师来说，他们可以根据Beam编程模型不断优化自身产品。这样会导致更多产品之间的竞争，从而最终对整个行业起到良性的促进作用。</p>

<p>在第23讲中，JohnT3e也给出了他对Beam的理解。</p>

<p><img src="assets/c8bfe72f574a47ad817f145af3a9c28a.jpg" alt="" /></p>

<p>我是很赞成JohnT3e的说法的。这其实就好比SQL，我们学习SQL是学习它的语法，从而根据实际应用场景来写出相应的SQL语句去解决问题。</p>

<p>而相对的，如果觉得底层使用MySQL很好，那就是另外的决定了。写出来的SQL语句是不会因此改变的。</p>

<h2 id="24-为什么beam要如此抽象封装数据-https-time-geekbang-org-column-article-100666"><a href="https://time.geekbang.org/column/article/100666" target="_blank">24 | 为什么Beam要如此抽象封装数据？</a></h2>

<p>在第24讲中，人唯优的提问如下：</p>

<p><img src="assets/d573de50af6d4272ba167467430664fb.jpg" alt="unpreview" /></p>

<p>确实，Beam的Register机制和Spark里面的kryo Register是类似的机制。Beam也的确为常见的数据格式提供了默认的输入方式的。</p>

<p>但这是不需要重复工作的。基本的数据结构的coder在<a href="https://github.com/apache/beam/tree/master/sdks/java/core/src/main/java/org/apache/beam/sdk/coders" target="_blank">GitHub</a>上可以看到。比如String，List之类。</p>

<h2 id="25-beam数据转换操作的抽象方法-https-time-geekbang-org-column-article-101735"><a href="https://time.geekbang.org/column/article/101735" target="_blank">25 | Beam数据转换操作的抽象方法</a></h2>

<p>在第25讲中，我们学习了Transform的概念和基本的使用方法，了解了怎样编写Transform的编程模型DoFn类。不过，sxpujs认为通用的DoFn很别扭。</p>

<p><img src="assets/2f0eb9d8012c43eea261f9d9f24bab3b.jpg" alt="unpreview" /></p>

<p>这个问题我需要说明一下，Spark的数据转换操作API是类似的设计，Spark的数据操作可以写成这样：</p>

<pre><code>JavaRDD&lt;Integer&gt; lineLengths = lines.map(new Function&lt;String, Integer&gt;() {
  public Integer call(String s) { return s.length(); }
});
</code></pre>

<p>我不建议你用自己的使用习惯去评判自己不熟悉的、不一样的API。当你看到这些API的设计时，你更应该去想的，是这种设计的目标是什么，又有哪些局限。</p>

<p>比如，在数据处理框架中，Beam和Spark之所以都把数据操作提取出来让用户自定义，是因为它们都要去根据用户的数据操作构建DAG，用户定义的DoFn就成了DAG的节点。</p>

<p>实际使用中，往往出现单个数据操作的业务逻辑也非常复杂的情况，它也需要单独的单元测试。这也是为什么DoFn类在实际工作中更常用，而inline的写法相对少一点的原因。因为每一个DoFn你都可以单独拿出来测试，或者在别的Pipeline中复用。</p>

<h2 id="26-pipeline-beam如何抽象多步骤的数据流水线-https-time-geekbang-org-column-article-102182"><a href="https://time.geekbang.org/column/article/102182" target="_blank">26 | Pipeline：Beam如何抽象多步骤的数据流水线？</a></h2>

<p>在第26讲中，espzest提问如下：</p>

<p><img src="assets/75ae7e2be44c44348e7b3b3ee000ebe7.jpg" alt="unpreview" /></p>

<p>其实我们通过第24讲的内容可以知道，PCollection是具有无序性的，所以最简单的做法Bundle在处理完成之后可以直接append到结果PCollection中。</p>

<p>至于为什么需要重做前面的Bundle，这其实也是错误处理机制的一个trade-off了。Beam希望尽可能减少persistence cost，也就是不希望将中间结果保持在某一个worker上。</p>

<p>你可以这么想，如果我们想要不重新处理前面的Bundle，我们必须要将很多中间结果转换成硬盘数据，这样一方面增加很大的时间开销，另一方面因为数据持久化了在具体一台机器上，我们也没有办法再重新动态分配Bundle到不同的机器上去了。</p>

<p>接下来，是cricket1981的提问：</p>

<p><img src="assets/d9413cefccb6464e96856dd1481171ed.jpg" alt="unpreview" /></p>

<p>其实文章中所讲到的随机分配并不是说像分配随机数那样将Bundle随机分配出去给workers，只是说根据runner的不同，Bundle的分配方式也会不一样了，但最终还是还是希望能使并行度最大化。</p>

<p>至于完美并行的背后机制，Beam会在真正处理数据前先计算优化出执行的一个有向无环图，希望保持并行处理数据的同时，能够减少每个worker之间的联系。</p>

<p>就如cricket1981所问的那样，Beam也有类似Spark的persist方法，BEAM-7131 issue就有反应这个问题。</p>

<h2 id="28-如何设计创建好一个beam-pipeline-https-time-geekbang-org-column-article-103301"><a href="https://time.geekbang.org/column/article/103301" target="_blank">28 | 如何设计创建好一个Beam Pipeline？</a></h2>

<p>在第28讲中，Ming的提问如下：</p>

<p><img src="assets/acb1615816694ae5819e7e3beac35a99.jpg" alt="unpreview" /></p>

<p>对此，我的回答是，一个集群有可能同时执行两个pipeline的。在实践中，如果你的四个pipeline之间如果有逻辑依赖关系，比如一个pipeline需要用到另一个pipeline的结果的话，我建议你把这些有依赖关系的pipeline合并。</p>

<p>如果你的pipeline之间是互相独立，你可以有四个独立的二进制程序。这个提问里，Ming说的集群应该是物理上的机器，这和pipeline完全是两个概念。好的集群设计应该能够让你可以自由地提交pipeline任务，你不需要去管什么具体集群适合去安排跑你的任务。</p>

<p>JohnT3e的问题如下：</p>

<p><img src="assets/22d49888a42840959a643ceda85dcef1.jpg" alt="unpreview" /></p>

<p>对于这个问题，我觉得JohnT3e可以先退一步，看看这个需求场景到底适不适用于分布式数据处理。</p>

<p>分布式的核心就是并行，也就是说同一批数据集合元素和元素之间是无依赖关系的。如果你的场景对于元素的先后顺序有业务需求，可能可以看看PubSub，RPC等是不是更适合。而不是Beam的PCollection。</p>

<p>好了，第三期答疑到这里就结束了。最后，感谢在Apache Beam的基础知识模块里积极进行提问的同学们，谢谢你们的提问互动。</p>

<p>@JohnT3e、@渡码、@coder、@morgan、@Milittle、@linuxfans、@常超、@明翼、@ditiki、@朱同学、@Bin滨、@A_F、@人唯优、@张凯江、@胡墨、@cricket1981、@sxpujs、@W.T、@cricket1981、@espzest、@沈洪彬、@onepieceJT2018、@fy、@Alpha、@TJ、@dancer、@YZJ、@Ming、@蒙开强</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#422e2e2e7b767373727502252f232b2e6c212d2f" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f143f461bf89508',t:'MTczNDA3NTAwOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>