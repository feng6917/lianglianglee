<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=10&#32;聚合：聚合查询之Bucket聚合详解>
        <link rel="icon" href="/static/favicon.png">
        <title>10 聚合：聚合查询之Bucket聚合详解 </title>
        
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
                        <a class="menu-item" id="01 认知：ElasticSearch基础概念.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/01%20%e8%ae%a4%e7%9f%a5%ef%bc%9aElasticSearch%e5%9f%ba%e7%a1%80%e6%a6%82%e5%bf%b5.md">01 认知：ElasticSearch基础概念.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 认知：Elastic Stack生态和场景方案.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/02%20%e8%ae%a4%e7%9f%a5%ef%bc%9aElastic%20Stack%e7%94%9f%e6%80%81%e5%92%8c%e5%9c%ba%e6%99%af%e6%96%b9%e6%a1%88.md">02 认知：Elastic Stack生态和场景方案.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 安装：ElasticSearch和Kibana安装.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/03%20%e5%ae%89%e8%a3%85%ef%bc%9aElasticSearch%e5%92%8cKibana%e5%ae%89%e8%a3%85.md">03 安装：ElasticSearch和Kibana安装.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 入门：查询和聚合的基础使用.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/04%20%e5%85%a5%e9%97%a8%ef%bc%9a%e6%9f%a5%e8%af%a2%e5%92%8c%e8%81%9a%e5%90%88%e7%9a%84%e5%9f%ba%e7%a1%80%e4%bd%bf%e7%94%a8.md">04 入门：查询和聚合的基础使用.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 索引：索引管理详解.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/05%20%e7%b4%a2%e5%bc%95%ef%bc%9a%e7%b4%a2%e5%bc%95%e7%ae%a1%e7%90%86%e8%af%a6%e8%a7%a3.md">05 索引：索引管理详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 索引：索引模板(Index Template)详解.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/06%20%e7%b4%a2%e5%bc%95%ef%bc%9a%e7%b4%a2%e5%bc%95%e6%a8%a1%e6%9d%bf%28Index%20Template%29%e8%af%a6%e8%a7%a3.md">06 索引：索引模板(Index Template)详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 查询：DSL查询之复合查询详解.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/07%20%e6%9f%a5%e8%af%a2%ef%bc%9aDSL%e6%9f%a5%e8%af%a2%e4%b9%8b%e5%a4%8d%e5%90%88%e6%9f%a5%e8%af%a2%e8%af%a6%e8%a7%a3.md">07 查询：DSL查询之复合查询详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 查询：DSL查询之全文搜索详解.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/08%20%e6%9f%a5%e8%af%a2%ef%bc%9aDSL%e6%9f%a5%e8%af%a2%e4%b9%8b%e5%85%a8%e6%96%87%e6%90%9c%e7%b4%a2%e8%af%a6%e8%a7%a3.md">08 查询：DSL查询之全文搜索详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 查询：DSL查询之Term详解.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/09%20%e6%9f%a5%e8%af%a2%ef%bc%9aDSL%e6%9f%a5%e8%af%a2%e4%b9%8bTerm%e8%af%a6%e8%a7%a3.md">09 查询：DSL查询之Term详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 聚合：聚合查询之Bucket聚合详解.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/10%20%e8%81%9a%e5%90%88%ef%bc%9a%e8%81%9a%e5%90%88%e6%9f%a5%e8%af%a2%e4%b9%8bBucket%e8%81%9a%e5%90%88%e8%af%a6%e8%a7%a3.md">10 聚合：聚合查询之Bucket聚合详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 聚合：聚合查询之Metric聚合详解.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/11%20%e8%81%9a%e5%90%88%ef%bc%9a%e8%81%9a%e5%90%88%e6%9f%a5%e8%af%a2%e4%b9%8bMetric%e8%81%9a%e5%90%88%e8%af%a6%e8%a7%a3.md">11 聚合：聚合查询之Metric聚合详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 聚合：聚合查询之Pipline聚合详解.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/12%20%e8%81%9a%e5%90%88%ef%bc%9a%e8%81%9a%e5%90%88%e6%9f%a5%e8%af%a2%e4%b9%8bPipline%e8%81%9a%e5%90%88%e8%af%a6%e8%a7%a3.md">12 聚合：聚合查询之Pipline聚合详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="13 原理：从图解构筑对ES原理的初步认知.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/13%20%e5%8e%9f%e7%90%86%ef%bc%9a%e4%bb%8e%e5%9b%be%e8%a7%a3%e6%9e%84%e7%ad%91%e5%af%b9ES%e5%8e%9f%e7%90%86%e7%9a%84%e5%88%9d%e6%ad%a5%e8%ae%a4%e7%9f%a5.md">13 原理：从图解构筑对ES原理的初步认知.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="14 原理：ES原理知识点补充和整体结构.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/14%20%e5%8e%9f%e7%90%86%ef%bc%9aES%e5%8e%9f%e7%90%86%e7%9f%a5%e8%af%86%e7%82%b9%e8%a1%a5%e5%85%85%e5%92%8c%e6%95%b4%e4%bd%93%e7%bb%93%e6%9e%84.md">14 原理：ES原理知识点补充和整体结构.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="15 原理：ES原理之索引文档流程详解.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/15%20%e5%8e%9f%e7%90%86%ef%bc%9aES%e5%8e%9f%e7%90%86%e4%b9%8b%e7%b4%a2%e5%bc%95%e6%96%87%e6%a1%a3%e6%b5%81%e7%a8%8b%e8%af%a6%e8%a7%a3.md">15 原理：ES原理之索引文档流程详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="16 原理：ES原理之读取文档流程详解.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/16%20%e5%8e%9f%e7%90%86%ef%bc%9aES%e5%8e%9f%e7%90%86%e4%b9%8b%e8%af%bb%e5%8f%96%e6%96%87%e6%a1%a3%e6%b5%81%e7%a8%8b%e8%af%a6%e8%a7%a3.md">16 原理：ES原理之读取文档流程详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="17 优化：ElasticSearch性能优化详解.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/17%20%e4%bc%98%e5%8c%96%ef%bc%9aElasticSearch%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e8%af%a6%e8%a7%a3.md">17 优化：ElasticSearch性能优化详解.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="18 大厂实践：腾讯万亿级 Elasticsearch 技术实践.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/18%20%e5%a4%a7%e5%8e%82%e5%ae%9e%e8%b7%b5%ef%bc%9a%e8%85%be%e8%ae%af%e4%b8%87%e4%ba%bf%e7%ba%a7%20Elasticsearch%20%e6%8a%80%e6%9c%af%e5%ae%9e%e8%b7%b5.md">18 大厂实践：腾讯万亿级 Elasticsearch 技术实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="19 资料：Awesome Elasticsearch.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/19%20%e8%b5%84%e6%96%99%ef%bc%9aAwesome%20Elasticsearch.md">19 资料：Awesome Elasticsearch.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="20 WrapperQuery.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/20%20WrapperQuery.md">20 WrapperQuery.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="21 备份和迁移.md" href="/%e4%b8%93%e6%a0%8f/ElasticSearch%e7%9f%a5%e8%af%86%e4%bd%93%e7%b3%bb%e8%af%a6%e8%a7%a3/21%20%e5%a4%87%e4%bb%bd%e5%92%8c%e8%bf%81%e7%a7%bb.md">21 备份和迁移.md</a>
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
                            <h1 id="title" data-id="10 聚合：聚合查询之Bucket聚合详解" class="title">10 聚合：聚合查询之Bucket聚合详解</h1>
                            <div><h2 id="聚合的引入">聚合的引入</h2>

<p>我们在SQL结果中常有：</p>

<pre><code class="language-sql">SELECT COUNT(color) 
FROM table
GROUP BY color 
</code></pre>

<p>ElasticSearch中<strong>桶</strong>在概念上类似于 SQL 的分组（<code>GROUP BY</code>），而<strong>指标</strong>则类似于 <code>COUNT()</code> 、 <code>SUM()</code> 、 <code>MAX()</code> 等统计方法。</p>

<p>进而引入了两个概念：</p>

<ul>
<li><strong>桶（Buckets）</strong> 满足特定条件的文档的集合</li>
<li><strong>指标（Metrics）</strong> 对桶内的文档进行统计计算</li>
</ul>

<p>所以ElasticSearch包含3种聚合（Aggregation)方式</p>

<ul>
<li><p><strong>桶聚合（Bucket Aggregration)</strong> - 本文中详解</p></li>

<li><p><strong>指标聚合（Metric Aggregration)</strong> - 下文中讲解</p></li>

<li><p>管道聚合（Pipline Aggregration)</p></li>
</ul>

<p>- 再下一篇讲解</p>

<ul>
<li>聚合管道化，简单而言就是上一个聚合的结果成为下个聚合的输入；</li>
</ul>

<p>（PS:指标聚合和桶聚合很多情况下是组合在一起使用的，其实你也可以看到，桶聚合本质上是一种特殊的指标聚合，它的聚合指标就是数据的条数count)</p>

<h2 id="如何理解bucket聚合">如何理解Bucket聚合</h2>

<blockquote>
<p>如果你直接去看文档，大概有几十种：</p>
</blockquote>

<p><img src="assets/es-agg-bucket-2.png" alt="img" /></p>

<p>要么你需要花大量时间学习，要么你已经迷失或者即将迷失在知识点中&hellip;</p>

<p>所以你需要稍微<strong>站在设计者的角度思考</strong>下，不难发现设计上大概分为三类（当然有些是第二和第三类的融合）</p>

<p><img src="assets/es-agg-bucket-1.png" alt="img" /></p>

<p>（图中并没有全部列出内容，因为图要表达的意图我觉得还是比较清楚的，这就够了；有了这种思虑和认知，会大大提升你的认知效率。）</p>

<h2 id="按知识点学习聚合">按知识点学习聚合</h2>

<blockquote>
<p>我们先按照官方权威指南中的一个例子，学习Aggregation中的知识点。</p>
</blockquote>

<h3 id="准备数据">准备数据</h3>

<p>让我们先看一个例子。我们将会创建一些对汽车经销商有用的聚合，数据是关于汽车交易的信息：车型、制造商、售价、何时被出售等。</p>

<p>首先我们批量索引一些数据：</p>

<pre><code class="language-bash">POST /test-agg-cars/_bulk
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 10000, &quot;color&quot; : &quot;red&quot;, &quot;make&quot; : &quot;honda&quot;, &quot;sold&quot; : &quot;2014-10-28&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 20000, &quot;color&quot; : &quot;red&quot;, &quot;make&quot; : &quot;honda&quot;, &quot;sold&quot; : &quot;2014-11-05&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 30000, &quot;color&quot; : &quot;green&quot;, &quot;make&quot; : &quot;ford&quot;, &quot;sold&quot; : &quot;2014-05-18&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 15000, &quot;color&quot; : &quot;blue&quot;, &quot;make&quot; : &quot;toyota&quot;, &quot;sold&quot; : &quot;2014-07-02&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 12000, &quot;color&quot; : &quot;green&quot;, &quot;make&quot; : &quot;toyota&quot;, &quot;sold&quot; : &quot;2014-08-19&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 20000, &quot;color&quot; : &quot;red&quot;, &quot;make&quot; : &quot;honda&quot;, &quot;sold&quot; : &quot;2014-11-05&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 80000, &quot;color&quot; : &quot;red&quot;, &quot;make&quot; : &quot;bmw&quot;, &quot;sold&quot; : &quot;2014-01-01&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 25000, &quot;color&quot; : &quot;blue&quot;, &quot;make&quot; : &quot;ford&quot;, &quot;sold&quot; : &quot;2014-02-12&quot; }
</code></pre>

<h3 id="标准的聚合">标准的聚合</h3>

<p>有了数据，开始构建我们的第一个聚合。汽车经销商可能会想知道哪个颜色的汽车销量最好，用聚合可以轻易得到结果，用 terms 桶操作：</p>

<pre><code class="language-bash">GET /test-agg-cars/_search
{
    &quot;size&quot; : 0,
    &quot;aggs&quot; : { 
        &quot;popular_colors&quot; : { 
            &quot;terms&quot; : { 
              &quot;field&quot; : &quot;color.keyword&quot;
            }
        }
    }
}
</code></pre>

<ol>
<li>聚合操作被置于顶层参数 aggs 之下（如果你愿意，完整形式 aggregations 同样有效）。</li>
<li>然后，可以为聚合指定一个我们想要名称，本例中是： popular_colors 。</li>
<li>最后，定义单个桶的类型 terms 。</li>
</ol>

<p>结果如下：</p>

<p><img src="assets/es-agg-bucket-3.png" alt="img" /></p>

<ol>
<li>因为我们设置了 size 参数，所以不会有 hits 搜索结果返回。</li>
<li>popular_colors 聚合是作为 aggregations 字段的一部分被返回的。</li>
<li>每个桶的 key 都与 color 字段里找到的唯一词对应。它总会包含 doc_count 字段，告诉我们包含该词项的文档数量。</li>
<li>每个桶的数量代表该颜色的文档数量。</li>
</ol>

<h3 id="多个聚合">多个聚合</h3>

<p>同时计算两种桶的结果：对color和对make。</p>

<pre><code class="language-bash">GET /test-agg-cars/_search
{
    &quot;size&quot; : 0,
    &quot;aggs&quot; : { 
        &quot;popular_colors&quot; : { 
            &quot;terms&quot; : { 
              &quot;field&quot; : &quot;color.keyword&quot;
            }
        },
        &quot;make_by&quot; : { 
            &quot;terms&quot; : { 
              &quot;field&quot; : &quot;make.keyword&quot;
            }
        }
    }
}
</code></pre>

<p>结果如下：</p>

<p><img src="assets/es-agg-bucket-4.png" alt="img" /></p>

<h3 id="聚合的嵌套">聚合的嵌套</h3>

<p>这个新的聚合层让我们可以将 avg 度量嵌套置于 terms 桶内。实际上，这就为每个颜色生成了平均价格。</p>

<pre><code class="language-bash">GET /test-agg-cars/_search
{
   &quot;size&quot; : 0,
   &quot;aggs&quot;: {
      &quot;colors&quot;: {
         &quot;terms&quot;: {
            &quot;field&quot;: &quot;color.keyword&quot;
         },
         &quot;aggs&quot;: { 
            &quot;avg_price&quot;: { 
               &quot;avg&quot;: {
                  &quot;field&quot;: &quot;price&quot; 
               }
            }
         }
      }
   }
}
</code></pre>

<p>结果如下：</p>

<p><img src="assets/es-agg-bucket-5.png" alt="img" /></p>

<p>正如 颜色 的例子，我们需要给度量起一个名字（ avg_price ）这样可以稍后根据名字获取它的值。最后，我们指定度量本身（ avg ）以及我们想要计算平均值的字段（ price ）</p>

<h3 id="动态脚本的聚合">动态脚本的聚合</h3>

<p>这个例子告诉你，ElasticSearch还支持一些基于脚本（生成运行时的字段）的复杂的动态聚合。</p>

<pre><code class="language-bash">GET /test-agg-cars/_search
{
  &quot;runtime_mappings&quot;: {
    &quot;make.length&quot;: {
      &quot;type&quot;: &quot;long&quot;,
      &quot;script&quot;: &quot;emit(doc['make.keyword'].value.length())&quot;
    }
  },
  &quot;size&quot; : 0,
  &quot;aggs&quot;: {
    &quot;make_length&quot;: {
      &quot;histogram&quot;: {
        &quot;interval&quot;: 1,
        &quot;field&quot;: &quot;make.length&quot;
      }
    }
  }
}
</code></pre>

<p>结果如下：</p>

<p><img src="assets/es-agg-bucket-6.png" alt="img" /></p>

<p>histogram可以参考后文内容。</p>

<h2 id="按分类学习bucket聚合">按分类学习Bucket聚合</h2>

<blockquote>
<p>我们在具体学习时，也无需学习每一个点，基于上面图的认知，我们只需用20%的时间学习最为常用的80%功能即可，其它查查文档而已。@pdai</p>
</blockquote>

<h3 id="前置条件的过滤-filter">前置条件的过滤：filter</h3>

<p>在当前文档集上下文中定义与指定过滤器(Filter)匹配的所有文档的单个存储桶。通常，这将用于将当前聚合上下文缩小到一组特定的文档。</p>

<pre><code class="language-bash">GET /test-agg-cars/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;make_by&quot;: {
      &quot;filter&quot;: { &quot;term&quot;: { &quot;type&quot;: &quot;honda&quot; } },
      &quot;aggs&quot;: {
        &quot;avg_price&quot;: { &quot;avg&quot;: { &quot;field&quot;: &quot;price&quot; } }
      }
    }
  }
}
</code></pre>

<p>结果如下：</p>

<p><img src="assets/es-agg-bucket-7.png" alt="img" /></p>

<h3 id="对filter进行分组聚合-filters">对filter进行分组聚合：filters</h3>

<p>设计一个新的例子, 日志系统中，每条日志都是在文本中，包含warning/info等信息。</p>

<pre><code class="language-bash">PUT /test-agg-logs/_bulk?refresh
{ &quot;index&quot; : { &quot;_id&quot; : 1 } }
{ &quot;body&quot; : &quot;warning: page could not be rendered&quot; }
{ &quot;index&quot; : { &quot;_id&quot; : 2 } }
{ &quot;body&quot; : &quot;authentication error&quot; }
{ &quot;index&quot; : { &quot;_id&quot; : 3 } }
{ &quot;body&quot; : &quot;warning: connection timed out&quot; }
{ &quot;index&quot; : { &quot;_id&quot; : 4 } }
{ &quot;body&quot; : &quot;info: hello pdai&quot; }
</code></pre>

<p>我们需要对包含不同日志类型的日志进行分组，这就需要filters:</p>

<pre><code class="language-bash">GET /test-agg-logs/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot; : {
    &quot;messages&quot; : {
      &quot;filters&quot; : {
        &quot;other_bucket_key&quot;: &quot;other_messages&quot;,
        &quot;filters&quot; : {
          &quot;infos&quot; :   { &quot;match&quot; : { &quot;body&quot; : &quot;info&quot;   }},
          &quot;warnings&quot; : { &quot;match&quot; : { &quot;body&quot; : &quot;warning&quot; }}
        }
      }
    }
  }
}
</code></pre>

<p>结果如下：</p>

<p><img src="assets/es-agg-bucket-8.png" alt="img" /></p>

<h3 id="对number类型聚合-range">对number类型聚合：Range</h3>

<p>基于多桶值源的聚合，使用户能够定义一组范围-每个范围代表一个桶。在聚合过程中，将从每个存储区范围中检查从每个文档中提取的值，并“存储”相关/匹配的文档。请注意，此聚合包括from值，但不包括to每个范围的值。</p>

<pre><code class="language-bash">GET /test-agg-cars/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;price_ranges&quot;: {
      &quot;range&quot;: {
        &quot;field&quot;: &quot;price&quot;,
        &quot;ranges&quot;: [
          { &quot;to&quot;: 20000 },
          { &quot;from&quot;: 20000, &quot;to&quot;: 40000 },
          { &quot;from&quot;: 40000 }
        ]
      }
    }
  }
}
</code></pre>

<p>结果如下：</p>

<p><img src="assets/es-agg-bucket-9.png" alt="img" /></p>

<h3 id="对ip类型聚合-ip-range">对IP类型聚合：IP Range</h3>

<p>专用于IP值的范围聚合。</p>

<pre><code class="language-bash">GET /ip_addresses/_search
{
  &quot;size&quot;: 10,
  &quot;aggs&quot;: {
    &quot;ip_ranges&quot;: {
      &quot;ip_range&quot;: {
        &quot;field&quot;: &quot;ip&quot;,
        &quot;ranges&quot;: [
          { &quot;to&quot;: &quot;10.0.0.5&quot; },
          { &quot;from&quot;: &quot;10.0.0.5&quot; }
        ]
      }
    }
  }
}
</code></pre>

<p>返回</p>

<pre><code class="language-bash">{
  ...

  &quot;aggregations&quot;: {
    &quot;ip_ranges&quot;: {
      &quot;buckets&quot;: [
        {
          &quot;key&quot;: &quot;*-10.0.0.5&quot;,
          &quot;to&quot;: &quot;10.0.0.5&quot;,
          &quot;doc_count&quot;: 10
        },
        {
          &quot;key&quot;: &quot;10.0.0.5-*&quot;,
          &quot;from&quot;: &quot;10.0.0.5&quot;,
          &quot;doc_count&quot;: 260
        }
      ]
    }
  }
}
</code></pre>

<ul>
<li><strong>CIDR Mask分组</strong></li>
</ul>

<p>此外还可以用CIDR Mask分组</p>

<pre><code class="language-bash">GET /ip_addresses/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;ip_ranges&quot;: {
      &quot;ip_range&quot;: {
        &quot;field&quot;: &quot;ip&quot;,
        &quot;ranges&quot;: [
          { &quot;mask&quot;: &quot;10.0.0.0/25&quot; },
          { &quot;mask&quot;: &quot;10.0.0.127/25&quot; }
        ]
      }
    }
  }
}
</code></pre>

<p>返回</p>

<pre><code class="language-bash">{
  ...

  &quot;aggregations&quot;: {
    &quot;ip_ranges&quot;: {
      &quot;buckets&quot;: [
        {
          &quot;key&quot;: &quot;10.0.0.0/25&quot;,
          &quot;from&quot;: &quot;10.0.0.0&quot;,
          &quot;to&quot;: &quot;10.0.0.128&quot;,
          &quot;doc_count&quot;: 128
        },
        {
          &quot;key&quot;: &quot;10.0.0.127/25&quot;,
          &quot;from&quot;: &quot;10.0.0.0&quot;,
          &quot;to&quot;: &quot;10.0.0.128&quot;,
          &quot;doc_count&quot;: 128
        }
      ]
    }
  }
}
</code></pre>

<ul>
<li><strong>增加key显示</strong></li>
</ul>

<pre><code class="language-bash">GET /ip_addresses/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;ip_ranges&quot;: {
      &quot;ip_range&quot;: {
        &quot;field&quot;: &quot;ip&quot;,
        &quot;ranges&quot;: [
          { &quot;to&quot;: &quot;10.0.0.5&quot; },
          { &quot;from&quot;: &quot;10.0.0.5&quot; }
        ],
        &quot;keyed&quot;: true // here
      }
    }
  }
}
</code></pre>

<p>返回</p>

<pre><code class="language-bash">{
  ...

  &quot;aggregations&quot;: {
    &quot;ip_ranges&quot;: {
      &quot;buckets&quot;: {
        &quot;*-10.0.0.5&quot;: {
          &quot;to&quot;: &quot;10.0.0.5&quot;,
          &quot;doc_count&quot;: 10
        },
        &quot;10.0.0.5-*&quot;: {
          &quot;from&quot;: &quot;10.0.0.5&quot;,
          &quot;doc_count&quot;: 260
        }
      }
    }
  }
}
</code></pre>

<ul>
<li><strong>自定义key显示</strong></li>
</ul>

<pre><code class="language-bash">GET /ip_addresses/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;ip_ranges&quot;: {
      &quot;ip_range&quot;: {
        &quot;field&quot;: &quot;ip&quot;,
        &quot;ranges&quot;: [
          { &quot;key&quot;: &quot;infinity&quot;, &quot;to&quot;: &quot;10.0.0.5&quot; },
          { &quot;key&quot;: &quot;and-beyond&quot;, &quot;from&quot;: &quot;10.0.0.5&quot; }
        ],
        &quot;keyed&quot;: true
      }
    }
  }
}
</code></pre>

<p>返回</p>

<pre><code class="language-bash">{
  ...

  &quot;aggregations&quot;: {
    &quot;ip_ranges&quot;: {
      &quot;buckets&quot;: {
        &quot;infinity&quot;: {
          &quot;to&quot;: &quot;10.0.0.5&quot;,
          &quot;doc_count&quot;: 10
        },
        &quot;and-beyond&quot;: {
          &quot;from&quot;: &quot;10.0.0.5&quot;,
          &quot;doc_count&quot;: 260
        }
      }
    }
  }
}
</code></pre>

<h3 id="对日期类型聚合-date-range">对日期类型聚合：Date Range</h3>

<p>专用于日期值的范围聚合。</p>

<pre><code class="language-bash">GET /test-agg-cars/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;range&quot;: {
      &quot;date_range&quot;: {
        &quot;field&quot;: &quot;sold&quot;,
        &quot;format&quot;: &quot;yyyy-MM&quot;,
        &quot;ranges&quot;: [
          { &quot;from&quot;: &quot;2014-01-01&quot; },  
          { &quot;to&quot;: &quot;2014-12-31&quot; } 
        ]
      }
    }
  }
}
</code></pre>

<p>结果如下：</p>

<p><img src="assets/es-agg-bucket-10.png" alt="img" /></p>

<p>此聚合与Range聚合之间的主要区别在于 from和to值可以在<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.12/search-aggregations-bucket-daterange-aggregation.html#date-format-pattern" target="_blank">Date Math表达式 </a>中表示，并且还可以指定日期格式，通过该日期格式将返回from and to响应字段。请注意，此聚合包括from值，但<strong>不包括to每个范围的值</strong>。</p>

<h3 id="对柱状图功能-histrogram">对柱状图功能：Histrogram</h3>

<p>直方图 histogram 本质上是就是为柱状图功能设计的。</p>

<p>创建直方图需要指定一个区间，如果我们要为售价创建一个直方图，可以将间隔设为 20,000。这样做将会在每个 $20,000 档创建一个新桶，然后文档会被分到对应的桶中。</p>

<p>对于仪表盘来说，我们希望知道每个售价区间内汽车的销量。我们还会想知道每个售价区间内汽车所带来的收入，可以通过对每个区间内已售汽车的售价求和得到。</p>

<p>可以用 histogram 和一个嵌套的 sum 度量得到我们想要的答案：</p>

<pre><code class="language-bash">GET /test-agg-cars/_search
{
   &quot;size&quot; : 0,
   &quot;aggs&quot;:{
      &quot;price&quot;:{
         &quot;histogram&quot;:{ 
            &quot;field&quot;: &quot;price.keyword&quot;,
            &quot;interval&quot;: 20000
         },
         &quot;aggs&quot;:{
            &quot;revenue&quot;: {
               &quot;sum&quot;: { 
                 &quot;field&quot; : &quot;price&quot;
               }
             }
         }
      }
   }
}
</code></pre>

<ol>
<li>histogram 桶要求两个参数：一个数值字段以及一个定义桶大小间隔。</li>
<li>sum 度量嵌套在每个售价区间内，用来显示每个区间内的总收入。</li>
</ol>

<p>如我们所见，查询是围绕 price 聚合构建的，它包含一个 histogram 桶。它要求字段的类型必须是数值型的同时需要设定分组的间隔范围。 间隔设置为 20,000 意味着我们将会得到如 [0-19999, 20000-39999, &hellip;] 这样的区间。</p>

<p>接着，我们在直方图内定义嵌套的度量，这个 sum 度量，它会对落入某一具体售价区间的文档中 price 字段的值进行求和。 这可以为我们提供每个售价区间的收入，从而可以发现到底是普通家用车赚钱还是奢侈车赚钱。</p>

<p>响应结果如下：</p>

<p><img src="assets/es-agg-bucket-11.png" alt="img" /></p>

<p>结果很容易理解，不过应该注意到直方图的键值是区间的下限。键 0 代表区间 0-19，999 ，键 20000 代表区间 20，000-39，999 ，等等。</p>

<p><img src="assets/es-agg-bucket-33.png" alt="img" /></p>

<p>当然，我们可以为任何聚合输出的分类和统计结果创建条形图，而不只是 直方图 桶。让我们以最受欢迎 10 种汽车以及它们的平均售价、标准差这些信息创建一个条形图。 我们会用到 terms 桶和 extended_stats 度量：</p>

<pre><code class="language-bash">GET /test-agg-cars/_search
{
  &quot;size&quot; : 0,
  &quot;aggs&quot;: {
    &quot;makes&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;make.keyword&quot;,
        &quot;size&quot;: 10
      },
      &quot;aggs&quot;: {
        &quot;stats&quot;: {
          &quot;extended_stats&quot;: {
            &quot;field&quot;: &quot;price&quot;
          }
        }
      }
    }
  }
}
</code></pre>

<p>上述代码会按受欢迎度返回制造商列表以及它们各自的统计信息。我们对其中的 stats.avg 、 stats.count 和 stats.std_deviation 信息特别感兴趣，并用 它们计算出标准差：</p>

<pre><code class="language-bash">std_err = std_deviation / count
</code></pre>

<p><img src="assets/es-agg-bucket-12.png" alt="img" /></p>

<p>对应报表：</p>

<p><img src="assets/es-agg-bucket-34.png" alt="img" /></p>

<h2 id="参考文章">参考文章</h2>

<p><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket.html" target="_blank">https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket.html</a></p>

<p><a href="https://www.elastic.co/guide/cn/elasticsearch/guide/current/_aggregation_test_drive.html" target="_blank">https://www.elastic.co/guide/cn/elasticsearch/guide/current/_aggregation_test_drive.html</a></p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#cea2a2a2f7fafffffef98ea9a3afa7a2e0ada1a3" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f0dca6f3fc1653b',t:'MTczNDAwNzMwOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>