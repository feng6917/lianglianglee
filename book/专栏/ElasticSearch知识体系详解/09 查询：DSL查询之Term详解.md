<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=09&#32;查询：DSL查询之Term详解>
        <link rel="icon" href="/static/favicon.png">
        <title>09 查询：DSL查询之Term详解 </title>
        
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
                            <h1 id="title" data-id="09 查询：DSL查询之Term详解" class="title">09 查询：DSL查询之Term详解</h1>
                            <div><h2 id="term查询引入">Term查询引入</h2>

<p>如前文所述，查询分基于文本查询和基于词项的查询:</p>

<p><img src="assets/es-dsl-full-text-3.png" alt="img" /></p>

<p>本文主要讲基于词项的查询。</p>

<p><img src="assets/es-dsl-term-1.png" alt="img" /></p>

<h2 id="term查询">Term查询</h2>

<blockquote>
<p>很多比较常用，也不难，就是需要结合实例理解。这里综合官方文档的内容，我设计一个测试场景的数据，以覆盖所有例子。@pdai</p>
</blockquote>

<p>准备数据</p>

<pre><code class="language-bash">PUT /test-dsl-term-level
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;programming_languages&quot;: {
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;required_matches&quot;: {
        &quot;type&quot;: &quot;long&quot;
      }
    }
  }
}

POST /test-dsl-term-level/_bulk
{ &quot;index&quot;: { &quot;_id&quot;: 1 }}
{&quot;name&quot;: &quot;Jane Smith&quot;, &quot;programming_languages&quot;: [ &quot;c++&quot;, &quot;java&quot; ], &quot;required_matches&quot;: 2}
{ &quot;index&quot;: { &quot;_id&quot;: 2 }}
{&quot;name&quot;: &quot;Jason Response&quot;, &quot;programming_languages&quot;: [ &quot;java&quot;, &quot;php&quot; ], &quot;required_matches&quot;: 2}
{ &quot;index&quot;: { &quot;_id&quot;: 3 }}
{&quot;name&quot;: &quot;Dave Pdai&quot;, &quot;programming_languages&quot;: [ &quot;java&quot;, &quot;c++&quot;, &quot;php&quot; ], &quot;required_matches&quot;: 3, &quot;remarks&quot;: &quot;hello world&quot;}
</code></pre>

<h3 id="字段是否存在-exist">字段是否存在:exist</h3>

<p>由于多种原因，文档字段的索引值可能不存在：</p>

<ul>
<li>源JSON中的字段是null或[]</li>
<li>该字段已&rdquo;index&rdquo; : false在映射中设置</li>
<li>字段值的长度超出ignore_above了映射中的设置</li>
<li>字段值格式错误，并且ignore_malformed已在映射中定义</li>
</ul>

<p>所以exist表示查找是否存在字段。</p>

<p><img src="assets/es-dsl-term-2.png" alt="img" /></p>

<h3 id="id查询-ids">id查询:ids</h3>

<p>ids 即对id查找</p>

<pre><code class="language-bash">GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;ids&quot;: {
      &quot;values&quot;: [3, 1]
    }
  }
}
</code></pre>

<p><img src="assets/es-dsl-term-3.png" alt="img" /></p>

<h3 id="前缀-prefix">前缀:prefix</h3>

<p>通过前缀查找某个字段</p>

<pre><code class="language-bash">GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;prefix&quot;: {
      &quot;name&quot;: {
        &quot;value&quot;: &quot;Jan&quot;
      }
    }
  }
}
</code></pre>

<p><img src="assets/es-dsl-term-4.png" alt="img" /></p>

<h3 id="分词匹配-term">分词匹配:term</h3>

<p>前文最常见的根据分词查询</p>

<pre><code class="language-bash">GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;programming_languages&quot;: &quot;php&quot;
    }
  }
}
</code></pre>

<p><img src="assets/es-dsl-term-5.png" alt="img" /></p>

<h3 id="多个分词匹配-terms">多个分词匹配:terms</h3>

<p>按照读个分词term匹配，它们是or的关系</p>

<pre><code class="language-bash">GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;terms&quot;: {
      &quot;programming_languages&quot;: [&quot;php&quot;,&quot;c++&quot;]
    }
  }
}
</code></pre>

<p><img src="assets/es-dsl-term-6.png" alt="img" /></p>

<h3 id="按某个数字字段分词匹配-term-set">按某个数字字段分词匹配:term set</h3>

<p>设计这种方式查询的初衷是用文档中的数字字段动态匹配查询满足term的个数</p>

<pre><code class="language-bash">GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;terms_set&quot;: {
      &quot;programming_languages&quot;: {
        &quot;terms&quot;: [ &quot;java&quot;, &quot;php&quot; ],
        &quot;minimum_should_match_field&quot;: &quot;required_matches&quot;
      }
    }
  }
}
</code></pre>

<p><img src="assets/es-dsl-term-7.png" alt="img" /></p>

<h3 id="通配符-wildcard">通配符:wildcard</h3>

<p>通配符匹配，比如<code>*</code></p>

<pre><code class="language-bash">GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;wildcard&quot;: {
      &quot;name&quot;: {
        &quot;value&quot;: &quot;D*ai&quot;,
        &quot;boost&quot;: 1.0,
        &quot;rewrite&quot;: &quot;constant_score&quot;
      }
    }
  }
}
</code></pre>

<p><img src="assets/es-dsl-term-8.png" alt="img" /></p>

<h3 id="范围-range">范围:range</h3>

<p>常常被用在数字或者日期范围的查询</p>

<pre><code class="language-bash">GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;range&quot;: {
      &quot;required_matches&quot;: {
        &quot;gte&quot;: 3,
        &quot;lte&quot;: 4
      }
    }
  }
}
</code></pre>

<p><img src="assets/es-dsl-term-9.png" alt="img" /></p>

<h3 id="正则-regexp">正则:regexp</h3>

<p>通过[正则表达式]查询</p>

<p>以&rdquo;Jan&rdquo;开头的name字段</p>

<pre><code class="language-bash">GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;regexp&quot;: {
      &quot;name&quot;: {
        &quot;value&quot;: &quot;Ja.*&quot;,
        &quot;case_insensitive&quot;: true
      }
    }
  }
}
</code></pre>

<p><img src="assets/es-dsl-term-10.png" alt="img" /></p>

<h3 id="模糊匹配-fuzzy">模糊匹配:fuzzy</h3>

<p>官方文档对模糊匹配：编辑距离是将一个术语转换为另一个术语所需的一个字符更改的次数。这些更改可以包括：</p>

<ul>
<li>更改字符（box→ fox）</li>
<li>删除字符（black→ lack）</li>
<li>插入字符（sic→ sick）</li>
<li>转置两个相邻字符（act→ cat）</li>
</ul>

<pre><code class="language-bash">GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;fuzzy&quot;: {
      &quot;remarks&quot;: {
        &quot;value&quot;: &quot;hell&quot;
      }
    }
  }
}
</code></pre>

<p><img src="assets/es-dsl-term-11.png" alt="img" /></p>

<h2 id="参考文章">参考文章</h2>

<p><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/term-level-queries.html" target="_blank">https://www.elastic.co/guide/en/elasticsearch/reference/current/term-level-queries.html</a></p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#e5898989dcd1d4d4d5d2a58288848c89cb868a88" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f0dc9edfe7a653b',t:'MTczNDAwNzI4OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>