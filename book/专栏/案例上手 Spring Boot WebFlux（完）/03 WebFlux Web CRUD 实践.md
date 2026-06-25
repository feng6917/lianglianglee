<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=03&#32;WebFlux&#32;Web&#32;CRUD&#32;实践>
        <link rel="icon" href="/static/favicon.png">
        <title>03 WebFlux Web CRUD 实践 </title>
        
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
                            <h1 id="title" data-id="03 WebFlux Web CRUD 实践" class="title">03 WebFlux Web CRUD 实践</h1>
                            <div><p>上一篇基于功能性端点去创建一个简单服务，实现了 Hello。这一篇用 Spring Boot WebFlux 的注解控制层技术创建一个 CRUD WebFlux 应用，让开发更方便。这里我们不对数据库储存进行访问，因为后续会讲到，而且这里主要是讲一个完整的 WebFlux CRUD。</p>

<h3 id="结构">结构</h3>

<p>这个工程会对城市（City）进行管理实现 CRUD 操作。该工程创建编写后，得到下面的结构，其目录结构如下：</p>

<pre><code>├── pom.xml
├── src
│&amp;nbsp;&amp;nbsp; └── main
│&amp;nbsp;&amp;nbsp;     ├── java
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp; └── org
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;     └── spring
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;         └── springboot
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;             ├── Application.java
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;             ├── dao
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;             │&amp;nbsp;&amp;nbsp; └── CityRepository.java
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;             ├── domain
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;             │&amp;nbsp;&amp;nbsp; └── City.java
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;             ├── handler
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;             │&amp;nbsp;&amp;nbsp; └── CityHandler.java
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;             └── webflux
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;                 └── controller
│&amp;nbsp;&amp;nbsp;     │&amp;nbsp;&amp;nbsp;                     └── CityWebFluxController.java
│&amp;nbsp;&amp;nbsp;     └── resources
│&amp;nbsp;&amp;nbsp;         └── application.properties
└── target

</code></pre>

<p>如目录结构，我们需要编写的内容按顺序有：</p>

<ul>
<li>对象</li>
<li>数据访问层类 Repository</li>
<li>处理器类 Handler</li>
<li>控制器类 Controller</li>
</ul>

<h3 id="对象">对象</h3>

<p>新建包 org.spring.springboot.domain，作为编写城市实体对象类。新建城市（City）对象 City，代码如下：</p>

<pre><code>/**
 * 城市实体类
 *
 */
public class City {

    /**
     * 城市编号
     */
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

<p>城市包含了城市编号、省份编号、城市名称和描述。具体开发中，会使用 Lombok 工具来消除冗长的 Java 代码，尤其是 POJO 的 getter / setter 方法，<a href="https://projectlombok.org" target="_blank">具体查看 Lombok 官网地址</a>。</p>

<h3 id="数据访问层-cityrepository">数据访问层 CityRepository</h3>

<p>新建包 org.spring.springboot.dao，作为编写城市数据访问层类 Repository。新建 CityRepository，代码如下：</p>

<pre><code>import org.spring.springboot.domain.City;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class CityRepository {

    private ConcurrentMap&lt;Long, City&gt; repository = new ConcurrentHashMap&lt;&gt;();

    private static final AtomicLong idGenerator = new AtomicLong(0);

    public Long save(City city) {
        Long id = idGenerator.incrementAndGet();
        city.setId(id);
        repository.put(id, city);
        return id;
    }

    public Collection&lt;City&gt; findAll() {
        return repository.values();
    }

    public City findCityById(Long id) {
        return repository.get(id);
    }

    public Long updateCity(City city) {
        repository.put(city.getId(), city);
        return city.getId();
    }

    public Long deleteCity(Long id) {
        repository.remove(id);
        return id;
    }
}

</code></pre>

<p>@Repository 用于标注数据访问组件，即 DAO 组件。实现代码中使用名为 repository 的 Map 对象作为内存数据存储，并对对象具体实现了具体业务逻辑。CityRepository 负责将 Book 持久层（数据操作）相关的封装组织，完成新增、查询、删除等操作。</p>

<p>这里不会涉及到数据存储这块，具体数据存储会在后续介绍。</p>

<h3 id="处理器类-handler">处理器类 Handler</h3>

<p>新建包 org.spring.springboot.handler，作为编写城市处理器类 CityHandler。新建 CityHandler，代码如下：</p>

<pre><code>import org.spring.springboot.dao.CityRepository;
import org.spring.springboot.domain.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
public class CityHandler {

    private final CityRepository cityRepository;

    @Autowired
    public CityHandler(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public Mono&lt;Long&gt; save(City city) {
        return Mono.create(cityMonoSink -&gt; cityMonoSink.success(cityRepository.save(city)));
    }

    public Mono&lt;City&gt; findCityById(Long id) {
        return Mono.justOrEmpty(cityRepository.findCityById(id));
    }

    public Flux&lt;City&gt; findAllCity() {
        return Flux.fromIterable(cityRepository.findAll());
    }

    public Mono&lt;Long&gt; modifyCity(City city) {
        return Mono.create(cityMonoSink -&gt; cityMonoSink.success(cityRepository.updateCity(city)));
    }

    public Mono&lt;Long&gt; deleteCity(Long id) {
        return Mono.create(cityMonoSink -&gt; cityMonoSink.success(cityRepository.deleteCity(id)));
    }
}

</code></pre>

<p>@Component 泛指组件，当组件不好归类的时候，使用该注解进行标注，然后用 final 和 @Autowired 标注在构造器注入 CityRepository Bean，代码如下：</p>

<pre><code>    private final CityRepository cityRepository;

    @Autowired
    public CityHandler(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

</code></pre>

<p>从返回值可以看出，Mono 和 Flux 适用于两个场景，即：</p>

<ul>
<li>Mono：实现发布者，并返回 0 或 1 个元素，即单对象。</li>
<li>Flux：实现发布者，并返回 N 个元素，即 List 列表对象。</li>
</ul>

<p>有人会问，这为啥不直接返回对象，比如返回 City/Long/List。原因是，直接使用 Flux 和 Mono 是非阻塞写法，相当于回调方式。利用函数式可以减少了回调，因此会看不到相关接口。这恰恰是 WebFlux 的好处：集合了非阻塞 + 异步。</p>

<h3 id="mono">Mono</h3>

<p>Mono 是什么？ 官方描述如下：A Reactive Streams Publisher with basic rx operators that completes successfully by emitting an element, or with an error.</p>

<p>Mono 是响应流 Publisher 具有基础 rx 操作符，可以成功发布元素或者错误，如图所示：</p>

<p><img src="assets/9e9fc4aec1e96acb7cdc942aad0967e21523363.png" alt="file" /></p>

<p>Mono 常用的方法有：</p>

<ul>
<li>Mono.create()：使用 MonoSink 来创建 Mono。</li>
<li>Mono.justOrEmpty()：从一个 Optional 对象或 null 对象中创建 Mono。</li>
<li>Mono.error()：创建一个只包含错误消息的 Mono。</li>
<li>Mono.never()：创建一个不包含任何消息通知的 Mono。</li>
<li>Mono.delay()：在指定的延迟时间之后，创建一个 Mono，产生数字 0 作为唯一值。</li>
</ul>

<h3 id="flux">Flux</h3>

<p>Flux 是什么？官方描述如下：A Reactive Streams Publisher with rx operators that emits 0 to N elements, and then completes (successfully or with an error).</p>

<p>Flux 是响应流 Publisher 具有基础 rx 操作符，可以成功发布 0 到 N 个元素或者错误。Flux 其实是 Mono 的一个补充，如图所示：</p>

<p><img src="assets/37dd113ad50858e41d17143911696e401523363.png" alt="file" /></p>

<p>所以要注意：如果知道 Publisher 是 0 或 1 个，则用 Mono。</p>

<p>Flux 最值得一提的是 fromIterable 方法，fromIterable(Iterable it) 可以发布 Iterable 类型的元素。当然，Flux 也包含了基础的操作：map、merge、concat、flatMap、take，这里就不展开介绍了。</p>

<h3 id="控制器类-controller">控制器类 Controller</h3>

<p>Spring Boot WebFlux 开发中，不需要配置。Spring Boot WebFlux 可以使用自动配置加注解驱动的模式来进行开发。</p>

<p>新建包目录 org.spring.springboot.webflux.controller，并在目录中创建名为 CityWebFluxController 来处理不同的 HTTP Restful 业务请求。代码如下：</p>

<pre><code>import org.spring.springboot.domain.City;
import org.spring.springboot.handler.CityHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = &quot;/city&quot;)
public class CityWebFluxController {

    @Autowired
    private CityHandler cityHandler;

    @GetMapping(value = &quot;/{id}&quot;)
    public Mono&lt;City&gt; findCityById(@PathVariable(&quot;id&quot;) Long id) {
        return cityHandler.findCityById(id);
    }

    @GetMapping()
    public Flux&lt;City&gt; findAllCity() {
        return cityHandler.findAllCity();
    }

    @PostMapping()
    public Mono&lt;Long&gt; saveCity(@RequestBody City city) {
        return cityHandler.save(city);
    }

    @PutMapping()
    public Mono&lt;Long&gt; modifyCity(@RequestBody City city) {
        return cityHandler.modifyCity(city);
    }

    @DeleteMapping(value = &quot;/{id}&quot;)
    public Mono&lt;Long&gt; deleteCity(@PathVariable(&quot;id&quot;) Long id) {
        return cityHandler.deleteCity(id);
    }
}

</code></pre>

<p>这里按照 REST 风格实现接口，那具体什么是 REST?</p>

<p>REST 是属于 Web 自身的一种架构风格，是在 HTTP 1.1 规范下实现的。Representational State Transfer 全称翻译为表现层状态转化。Resource：资源。比如 newsfeed；Representational：表现形式，比如用 JSON、富文本等；State Transfer：状态变化。通过 HTTP 动作实现。</p>

<p>理解 REST，要明白五个关键要素：</p>

<ul>
<li>资源（Resource）</li>
<li>资源的表述（Representation）</li>
<li>状态转移（State Transfer）</li>
<li>统一接口（Uniform Interface）</li>
<li>超文本驱动（Hypertext Driven）</li>
</ul>

<p>6 个主要特性：</p>

<ul>
<li>面向资源（Resource Oriented）</li>
<li>可寻址（Addressability）</li>
<li>连通性（Connectedness）</li>
<li>无状态（Statelessness）</li>
<li>统一接口（Uniform Interface）</li>
<li>超文本驱动（Hypertext Driven）</li>
</ul>

<p>具体这里就不一一展开，<a href="http://www.infoq.com/cn/articles/understanding-restful-style" target="_blank">详见这里</a>。</p>

<p>请求入参、Filters、重定向、Conversion、formatting 等知识会和以前 MVC 的知识一样，<a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html" target="_blank">详情见文档</a>。</p>

<h3 id="运行工程">运行工程</h3>

<p>一个 CRUD 的 Spring Boot Webflux 工程就开发完毕了，下面运行工程验证下。使用 IDEA 右侧工具栏，点击 Maven Project Tab，点击使用下 Maven 插件的 install 命令，或者使用命令行的形式，在工程根目录下，执行 Maven 清理和安装工程的指令：</p>

<pre><code>cd springboot-webflux-2-restful
mvn clean install

</code></pre>

<p>在控制台中看到成功的输出：</p>

<pre><code>... 省略
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 01:30 min
[INFO] Finished at: 2017-10-15T10:00:54+08:00
[INFO] Final Memory: 31M/174M
[INFO] ------------------------------------------------------------------------

</code></pre>

<p>在 IDEA 中执行 Application 类启动，任意正常模式或者 Debug 模式。可以在控制台看到成功运行的输出：</p>

<pre><code>... 省略
2018-04-10 08:43:39.932  INFO 2052 --- [ctor-http-nio-1] r.ipc.netty.tcp.BlockingNettyContext     : Started HttpServer on /0:0:0:0:0:0:0:0:8080
2018-04-10 08:43:39.935  INFO 2052 --- [           main] o.s.b.web.embedded.netty.NettyWebServer  : Netty started on port(s): 8080
2018-04-10 08:43:39.960  INFO 2052 --- [           main] org.spring.springboot.Application        : Started Application in 6.547 seconds (JVM running for 9.851)

</code></pre>

<p>打开 POST MAN 工具，开发必备。进行下面操作：</p>

<p>新增城市信息 POST <a href="http://127.0.0.1:8080/city" target="_blank">http://127.0.0.1:8080/city</a></p>

<p><img src="assets/7ac13ad0583cc4e4ac49f6b9281706551523362.png" alt="file" /></p>

<p>获取城市信息列表 GET <a href="http://127.0.0.1:8080/city" target="_blank">http://127.0.0.1:8080/city</a></p>

<p><img src="assets/0fad82f29463fc7fe35900030500a0491523362.png" alt="file" /></p>

<p>其他接口就不演示了。</p>

<h3 id="总结">总结</h3>

<p>这里，探讨了 Spring WebFlux 的一些功能，构建没有底层数据库的基本 CRUD 工程。为了更好的展示了如何创建 Flux 流，以及如何对其进行操作，下篇内容会讲到如何操作数据存储。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#8ee2e2e2b7babfbfbeb9cee9e3efe7e2a0ede1e3" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f15791a6b3b7771',t:'MTczNDA4Nzg2My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>