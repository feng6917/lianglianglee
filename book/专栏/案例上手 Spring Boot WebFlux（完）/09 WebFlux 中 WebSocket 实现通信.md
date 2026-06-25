<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=09&#32;WebFlux&#32;中&#32;WebSocket&#32;实现通信>
        <link rel="icon" href="/static/favicon.png">
        <title>09 WebFlux 中 WebSocket 实现通信 </title>
        
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
                            <h1 id="title" data-id="09 WebFlux 中 WebSocket 实现通信" class="title">09 WebFlux 中 WebSocket 实现通信</h1>
                            <div><h3 id="前言">前言</h3>

<p>WebFlux 该模块中包含了对反应式 HTTP、服务器推送事件和 WebSocket 的客户端和服务器端的支持。这里我们简单实践下 WebFlux 中 WebSocket 实现通信。</p>

<h3 id="什么是-websocket">什么是 WebSocket</h3>

<p>WebSocket 是一种通信协议，类比下 HTTP 协议，HTTP 协议只能有客户端发起请求，然后得到响应。 一般通过 HTTP 的轮询方式，实现 WebSocket 类似功能。</p>

<p>因为轮询，每次新建连接，请求响应，浪费资源。WebSocket 就出现了，它支持客户端和服务端双向通讯。类似 http 和 https，WebSocket 的标识符为 ws 和 wss，案例地址为：</p>

<pre><code>ws://localhost:8080/echo

</code></pre>

<h3 id="结构">结构</h3>

<p>回到这个工程，新建一个工程编写 WebSocket 实现通信案例。工程如图：</p>

<p><img src="assets/38520c5f22d961494869d108b3c044711525329.png" alt="file" /></p>

<p>目录核心如下：</p>

<ul>
<li>EchoHandler websocket 处理类（类似 HTTP Servlet 处理）</li>
<li>WebSocketConfiguration websocket 配置类</li>
<li>websocket-client.html HTML 客户端实现</li>
<li>WSClient java 客户端实现</li>
</ul>

<p><a href="https://github.com/JeffLi1993/springboot-learning-example" target="_blank">单击这里查看源代码</a>。</p>

<h3 id="echohandler-处理类">EchoHandler 处理类</h3>

<p>代码如下：</p>

<pre><code>import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Mono;

@Component
public class EchoHandler implements WebSocketHandler {
    @Override
    public Mono&lt;Void&gt; handle(final WebSocketSession session) {
        return session.send(
                session.receive()
                        .map(msg -&gt; session.textMessage(
                                &quot;服务端返回：小明， -&gt; &quot; + msg.getPayloadAsText())));
    }
}

</code></pre>

<p>代码详解：</p>

<ul>
<li>WebSocketHandler 接口，实现该接口来处理 WebSokcet 消息。</li>
<li>handle(WebSocketSession session) 方法，接收 WebSocketSession 对象，即获取客户端信息、发送消息和接收消息的操作对象。</li>
<li>receive() 方法，接收消息，使用 map 操作获取的 Flux 中包含的消息持续处理，并拼接出返回消息 Flux 对象。</li>
<li>send() 方法，发送消息。消息为“服务端返回：小明， -&gt; ”开头的。</li>
</ul>

<h3 id="websocketconfiguration-配置类">WebSocketConfiguration 配置类</h3>

<p>代码如下：</p>

<pre><code>@Configuration
public class WebSocketConfiguration {

    @Autowired
    @Bean
    public HandlerMapping webSocketMapping(final EchoHandler echoHandler) {
        final Map&lt;String, WebSocketHandler&gt; map = new HashMap&lt;&gt;();
        map.put(&quot;/echo&quot;, echoHandler);

        final SimpleUrlHandlerMapping mapping = new SimpleUrlHandlerMapping();
        mapping.setOrder(Ordered.HIGHEST_PRECEDENCE);
        mapping.setUrlMap(map);
        return mapping;
    }

    @Bean
    public WebSocketHandlerAdapter handlerAdapter() {
        return new WebSocketHandlerAdapter();
    }
}

</code></pre>

<p>代码详解：</p>

<ul>
<li>WebSocketHandlerAdapter 负责将 EchoHandler 处理类适配到 WebFlux 容器中；</li>
<li>SimpleUrlHandlerMapping 指定了 WebSocket 的路由配置；</li>
<li>使用 map 指定 WebSocket 协议的路由，路由为 ws://localhost:8080/echo。</li>
</ul>

<h3 id="运行工程">运行工程</h3>

<p>一个操作 Redis 工程就开发完毕了，下面运行工程验证下。使用 IDEA 右侧工具栏，点击 Maven Project Tab，点击使用下 Maven 插件的 install 命令。或者使用命令行的形式，在工程根目录下，执行 Maven 清理和安装工程的指令：</p>

<pre><code>cd springboot-webflux-8-websocket
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

<p>打开 <a href="https://www.websocket.org/echo.html" target="_blank">https://www.websocket.org/echo.html</a>网页，大多数浏览器是支持 WebSokcet 协议的。</p>

<p>Location - 输入通信地址、点击 Conect 会出现 CONNECTED。</p>

<p>然后发送消息，可以看到服务端返回对应的消息。如果此时关闭了服务端，那么会出现 DISCONNECTED：</p>

<p><img src="assets/39b8cd4ff4872ca11fd091744c83e5171525330.png" alt="file" /></p>

<h3 id="websocket-client-html-html-客户端实现">websocket-client.html HTML 客户端实现</h3>

<p>实现 HTML 客户端：</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;title&gt;Client WebSocket&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;div class=&quot;chat&quot;&gt;&lt;/div&gt;

&lt;script&gt;
  var clientWebSocket = new WebSocket(&quot;ws://localhost:8080/echo&quot;);

  clientWebSocket.onopen = function () {
    console.log(&quot;clientWebSocket.onopen&quot;, clientWebSocket);
    console.log(&quot;clientWebSocket.readyState&quot;, &quot;websocketstatus&quot;);
    clientWebSocket.send(&quot;你好！&quot;);
  }

  clientWebSocket.onclose = function (error) {
    console.log(&quot;clientWebSocket.onclose&quot;, clientWebSocket, error);
    events(&quot;聊天会话关闭！&quot;);
  }

  function events(responseEvent) {
    document.querySelector(&quot;.chat&quot;).innerHTML += responseEvent + &quot;&lt;br&gt;&quot;;
  }
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre>

<p>大多数浏览器是支持 WebSocket，代码详解如下：</p>

<ul>
<li>网页打开是，会调用 onopen 方法，并发送消息给服务端“你好！”；</li>
<li>如果服务端关闭，会调用 onclose 方法，页面会出现“聊天会话关闭！”信息。</li>
</ul>

<h3 id="wsclient-java-客户端实现">WSClient Java 客户端实现</h3>

<p>类似，HTTPClient 调用 HTTP，WebSocket 客户端去调用 WebSokcet 协议，并实现服务。代码如下：</p>

<pre><code>public class WSClient {
    public static void main(final String[] args) {
        final WebSocketClient client = new ReactorNettyWebSocketClient();
        client.execute(URI.create(&quot;ws://localhost:8080/echo&quot;), session -&gt;
                session.send(Flux.just(session.textMessage(&quot;你好&quot;)))
                        .thenMany(session.receive().take(1).map(WebSocketMessage::getPayloadAsText))
                        .doOnNext(System.out::println)
                        .then())
                .block(Duration.ofMillis(5000));
    }
}

</code></pre>

<p>代码详解：</p>

<ul>
<li>ReactorNettyWebSocketClient 是 WebFlux 默认 Reactor Netty 库提供的 WebSocketClient 实现。</li>
<li>execute 方法，与 ws://localhost:8080/echo 建立 WebSokcet 协议连接。</li>
<li>execute 需要传入 WebSocketHandler 的对象，用来处理消息，这里的实现和前面的 EchoHandler 类似。</li>
<li>通过 WebSocketSession 的 send 方法来发送字符串“你好”到服务器端，然后通过 receive 方法来等待服务器端的响应并输出。</li>
</ul>

<h3 id="总结">总结</h3>

<p>这一篇内容主要一起实践了简单的 WebSocket 的应用操作，以及 WebSocket 客户端小例子。</p>

<p>工程：springboot-webflux-8-websocket</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#204c4c4c19141111101760474d41494c0e434f4d" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f157a9e4af77771',t:'MTczNDA4NzkyNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>