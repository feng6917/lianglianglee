<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=07&#32;WebFlux&#32;整合&#32;Redis>
        <link rel="icon" href="/static/favicon.png">
        <title>07 WebFlux 整合 Redis </title>
        
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
                        <a class="menu-item" id="01 导读：课程概要.md" href="/%e4%b8%93%e6%a0%8f/%e6%a1%88%e4%be%8b%e4%b8%8a%e6%89%8b%20Spring%20Boot%20WebFlux%ef%bc%88%e5%ae%8c%ef%bc%89/01%20%e5%af%bc%e8%af%bb%ef%bc%9a%e8%af%be%e7%a8%8b%e6%a6%82%e8%a6%81.md">01 导读：课程概要.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 WebFlux 快速入门实践.md" href="/%e4%b8%93%e6%a0%8f/%e6%a1%88%e4%be%8b%e4%b8%8a%e6%89%8b%20Spring%20Boot%20WebFlux%ef%bc%88%e5%ae%8c%ef%bc%89/02%20WebFlux%20%e5%bf%ab%e9%80%9f%e5%85%a5%e9%97%a8%e5%ae%9e%e8%b7%b5.md">02 WebFlux 快速入门实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 WebFlux Web CRUD 实践.md" href="/%e4%b8%93%e6%a0%8f/%e6%a1%88%e4%be%8b%e4%b8%8a%e6%89%8b%20Spring%20Boot%20WebFlux%ef%bc%88%e5%ae%8c%ef%bc%89/03%20WebFlux%20Web%20CRUD%20%e5%ae%9e%e8%b7%b5.md">03 WebFlux Web CRUD 实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 WebFlux 整合 MongoDB.md" href="/%e4%b8%93%e6%a0%8f/%e6%a1%88%e4%be%8b%e4%b8%8a%e6%89%8b%20Spring%20Boot%20WebFlux%ef%bc%88%e5%ae%8c%ef%bc%89/04%20WebFlux%20%e6%95%b4%e5%90%88%20MongoDB.md">04 WebFlux 整合 MongoDB.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 WebFlux 整合 Thymeleaf.md" href="/%e4%b8%93%e6%a0%8f/%e6%a1%88%e4%be%8b%e4%b8%8a%e6%89%8b%20Spring%20Boot%20WebFlux%ef%bc%88%e5%ae%8c%ef%bc%89/05%20WebFlux%20%e6%95%b4%e5%90%88%20Thymeleaf.md">05 WebFlux 整合 Thymeleaf.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 WebFlux 中 Thymeleaf 和 MongoDB 实践.md" href="/%e4%b8%93%e6%a0%8f/%e6%a1%88%e4%be%8b%e4%b8%8a%e6%89%8b%20Spring%20Boot%20WebFlux%ef%bc%88%e5%ae%8c%ef%bc%89/06%20WebFlux%20%e4%b8%ad%20Thymeleaf%20%e5%92%8c%20MongoDB%20%e5%ae%9e%e8%b7%b5.md">06 WebFlux 中 Thymeleaf 和 MongoDB 实践.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 WebFlux 整合 Redis.md" href="/%e4%b8%93%e6%a0%8f/%e6%a1%88%e4%be%8b%e4%b8%8a%e6%89%8b%20Spring%20Boot%20WebFlux%ef%bc%88%e5%ae%8c%ef%bc%89/07%20WebFlux%20%e6%95%b4%e5%90%88%20Redis.md">07 WebFlux 整合 Redis.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 WebFlux 中 Redis 实现缓存.md" href="/%e4%b8%93%e6%a0%8f/%e6%a1%88%e4%be%8b%e4%b8%8a%e6%89%8b%20Spring%20Boot%20WebFlux%ef%bc%88%e5%ae%8c%ef%bc%89/08%20WebFlux%20%e4%b8%ad%20Redis%20%e5%ae%9e%e7%8e%b0%e7%bc%93%e5%ad%98.md">08 WebFlux 中 Redis 实现缓存.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 WebFlux 中 WebSocket 实现通信.md" href="/%e4%b8%93%e6%a0%8f/%e6%a1%88%e4%be%8b%e4%b8%8a%e6%89%8b%20Spring%20Boot%20WebFlux%ef%bc%88%e5%ae%8c%ef%bc%89/09%20WebFlux%20%e4%b8%ad%20WebSocket%20%e5%ae%9e%e7%8e%b0%e9%80%9a%e4%bf%a1.md">09 WebFlux 中 WebSocket 实现通信.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 WebFlux 集成测试及部署.md" href="/%e4%b8%93%e6%a0%8f/%e6%a1%88%e4%be%8b%e4%b8%8a%e6%89%8b%20Spring%20Boot%20WebFlux%ef%bc%88%e5%ae%8c%ef%bc%89/10%20WebFlux%20%e9%9b%86%e6%88%90%e6%b5%8b%e8%af%95%e5%8f%8a%e9%83%a8%e7%bd%b2.md">10 WebFlux 集成测试及部署.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 WebFlux 实战图书管理系统.md" href="/%e4%b8%93%e6%a0%8f/%e6%a1%88%e4%be%8b%e4%b8%8a%e6%89%8b%20Spring%20Boot%20WebFlux%ef%bc%88%e5%ae%8c%ef%bc%89/11%20WebFlux%20%e5%ae%9e%e6%88%98%e5%9b%be%e4%b9%a6%e7%ae%a1%e7%90%86%e7%b3%bb%e7%bb%9f.md">11 WebFlux 实战图书管理系统.md</a>
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
                            <h1 id="title" data-id="07 WebFlux 整合 Redis" class="title">07 WebFlux 整合 Redis</h1>
                            <div><h3 id="前言">前言</h3>

<p>上一篇内容讲了如何整合 MongoDB，这里继续讲如何操作 Redis 这个数据源，那什么是 Reids？</p>

<p>Redis 是一个高性能的 key-value 数据库，<a href="https://github.com/antirez/redis" target="_blank">GitHub 地址详见这里</a>。GitHub 是这么描述的：</p>

<p>Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, HyperLogLogs, Bitmaps.</p>

<p>Redis 是内存式数据库，存储在磁盘，支持的数据类型很多：Strings、Lists、Sets、Sorted Sets、Hashes、HyperLogLogs、Bitmaps 等。</p>

<h4 id="安装简易教程-适用-mac-linux">安装简易教程（适用 Mac/Linux）</h4>

<p>下载并解压：</p>

<pre><code>下载安装包 redis-x.x.x.tar.gz
## 解压
tar zxvf redis-2.8.17.tar.gz

</code></pre>

<p>编译安装：</p>

<pre><code>cd redis-x.x.x/
make ## 编译

</code></pre>

<p>启动 Redis：</p>

<pre><code>cd src/
redis-server

</code></pre>

<p>如果需要运行在守护进程，设置 daemonize 从 no 修改成 yes，并指定运行：redis-server redis.conf。</p>

<p><img src="assets/f9abbce7c1585de46bf88b7a6af427691524817.png" alt="file" /></p>

<h3 id="结构">结构</h3>

<p>类似上面讲的工程搭建，新建一个工程编写此案例，工程如图：</p>

<p><img src="assets/42ed19c43dfc8031b5ab260e6b3446111524816.png" alt="file" /></p>

<p>目录核心如下：</p>

<ul>
<li>pom.xml maven 配置</li>
<li>application.properties 配置文件</li>
<li>domain 实体类</li>
<li>controller 控制层，本文要点</li>
</ul>

<h3 id="新增-pom-依赖与配置">新增 POM 依赖与配置</h3>

<p>在 pom.xml 配置新的依赖：</p>

<pre><code>    &lt;!-- Spring Boot 响应式 Redis 依赖 --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-data-redis-reactive&lt;/artifactId&gt;
    &lt;/dependency&gt;

</code></pre>

<p>类似 MongoDB 配置，在 application.properties 配置连接 Redis：</p>

<pre><code>## Redis 配置
## Redis服务器地址
spring.redis.host=127.0.0.1
## Redis服务器连接端口
spring.redis.port=6379
## Redis服务器连接密码（默认为空）
spring.redis.password=
# 连接超时时间（毫秒）
spring.redis.timeout=5000

</code></pre>

<p>默认 密码为空，这里注意的是连接超时时间不能太少或者为 0，不然会引起异常 RedisCommandTimeoutException: Command timed out。</p>

<h3 id="对象">对象</h3>

<p>修改 org.spring.springboot.domain 包里面的城市实体对象类，城市（City）对象 City，代码如下：</p>

<pre><code>import org.springframework.data.annotation.Id;

import java.io.Serializable;

/**
 * 城市实体类
 *
 */
public class City implements Serializable {

    private static final long serialVersionUID = -2081742442561524068L;

    /**
     * 城市编号
     */
    @Id
    private Long id;

    /**
     * 省份编号
     */
    private Long provinceId;

    /**
     * 城市名称
     */
    private String cityName;

    /**
     * 描述
     */
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProvinceId() {
        return provinceId;
    }

    public void setProvinceId(Long provinceId) {
        this.provinceId = provinceId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

</code></pre>

<p>值得注意点：</p>

<ul>
<li>@Id 注解标记对应库表的主键或者唯一标识符。因为这个是我们的 DO，数据访问对象一一映射到数据存储。</li>
<li>City 必须实现序列化，因为需要将对象序列化后存储到 Redis。如果没实现 Serializable，会引出异常：java.lang.IllegalArgumentException: DefaultSerializer requires a Serializable payload but received an object of type。</li>
<li>如果不是用默认的序列化，需要自定义序列化实现，只要实现 RedisSerializer 接口去实现即可，然后在使用 RedisTemplate.setValueSerializer 方法去设置你实现的序列化实现，支持 JSON、XML 等。</li>
</ul>

<h3 id="控制层-citywebfluxcontroller">控制层 CityWebFluxController</h3>

<p>代码如下：</p>

<pre><code>import org.spring.springboot.domain.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping(value = &quot;/city&quot;)
public class CityWebFluxController {

    @Autowired
    private RedisTemplate redisTemplate;

    @GetMapping(value = &quot;/{id}&quot;)
    public Mono&lt;City&gt; findCityById(@PathVariable(&quot;id&quot;) Long id) {
        String key = &quot;city_&quot; + id;
        ValueOperations&lt;String, City&gt; operations = redisTemplate.opsForValue();
        boolean hasKey = redisTemplate.hasKey(key);
        City city = operations.get(key);

        if (!hasKey) {
            return Mono.create(monoSink -&gt; monoSink.success(null));
        }
        return Mono.create(monoSink -&gt; monoSink.success(city));
    }

    @PostMapping()
    public Mono&lt;City&gt; saveCity(@RequestBody City city) {
        String key = &quot;city_&quot; + city.getId();
        ValueOperations&lt;String, City&gt; operations = redisTemplate.opsForValue();
        operations.set(key, city, 60, TimeUnit.SECONDS);

        return Mono.create(monoSink -&gt; monoSink.success(city));
    }

    @DeleteMapping(value = &quot;/{id}&quot;)
    public Mono&lt;Long&gt; deleteCity(@PathVariable(&quot;id&quot;) Long id) {
        String key = &quot;city_&quot; + id;
        boolean hasKey = redisTemplate.hasKey(key);
        if (hasKey) {
            redisTemplate.delete(key);
        }
        return Mono.create(monoSink -&gt; monoSink.success(id));
    }
}

</code></pre>

<p>代码详解：</p>

<ul>
<li>使用 @Autowired 注入 RedisTemplate 对象，这个对象和 Spring 的 JdbcTemplate 功能十分相似，RedisTemplate 封装了 RedisConnection，具有连接管理、序列化和各个操作等，还有针对 String 的支持对象 StringRedisTemplate。</li>
<li>删除 Redis 某对象，直接通过 key 值调用 delete(key)。</li>
<li>Redis 操作视图接口类用的是 ValueOperations，对应的是 Redis String/Value 操作，get 是获取数据；set 是插入数据，可以设置失效时间，这里设置的失效时间是 60 s。</li>
<li>还有其他的操作视图，ListOperations、SetOperations、ZSetOperations 和 HashOperations。</li>
</ul>

<h3 id="运行工程">运行工程</h3>

<p>一个操作 Redis 工程就开发完毕了，下面运行工程验证一下，使用 IDEA 右侧工具栏，单击 Maven Project Tab，单击使用下 Maven 插件的 install 命令。或者使用命令行的形式，在工程根目录下，执行 Maven 清理和安装工程的指令：</p>

<pre><code>cd springboot-webflux-6-redis
mvn clean install

</code></pre>

<p>在控制台中看到成功的输出：</p>

<pre><code>... 省略
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 01:30 min
[INFO] Finished at: 2018-10-15T10:00:54+08:00
[INFO] Final Memory: 31M/174M
[INFO] ------------------------------------------------------------------------

</code></pre>

<p>在 IDEA 中执行 Application 类启动，任意正常模式或者 Debug 模式，可以在控制台看到成功运行的输出：</p>

<pre><code>... 省略
2018-04-10 08:43:39.932  INFO 2052 --- [ctor-http-nio-1] r.ipc.netty.tcp.BlockingNettyContext     : Started HttpServer on /0:0:0:0:0:0:0:0:8080
2018-04-10 08:43:39.935  INFO 2052 --- [           main] o.s.b.web.embedded.netty.NettyWebServer  : Netty started on port(s): 8080
2018-04-10 08:43:39.960  INFO 2052 --- [           main] org.spring.springboot.Application        : Started Application in 6.547 seconds (JVM running for 9.851)

</code></pre>

<p>打开 POST MAN 工具，开发必备。进行下面操作：</p>

<h4 id="新增城市信息-post-http-127-0-0-1-8080-city">新增城市信息 POST <a href="http://127.0.0.1:8080/city" target="_blank">http://127.0.0.1:8080/city</a></h4>

<p><img src="assets/f69fa5b09730de686ef4837824da48e71523883-1608971256856.png" alt="file" /></p>

<h4 id="获取城市信息-get-http-127-0-0-1-8080-city-2">获取城市信息 GET <a href="http://127.0.0.1:8080/city/2" target="_blank">http://127.0.0.1:8080/city/2</a></h4>

<p><img src="assets/2e129648b8e574a54ff7940f00f1dc591524819.png" alt="file" /></p>

<p>如果等待 60s 以后，再次则会获取为空，因为保存的时候设置了失效时间是 60 s。</p>

<h3 id="总结">总结</h3>

<p>这里探讨了 Spring WebFlux 的如何整合 Redis，介绍了如何通过 RedisTemplate 去操作 Redis。因为 Redis 在获取资源性能极佳，常用 Redis 作为缓存存储对象，下面我们利用 Reids 实现缓存操作。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#325e5e5e0b060303020572555f535b5e1c515d5f" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f157a20aa267771',t:'MTczNDA4NzkwNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>