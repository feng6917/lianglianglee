<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv='content-language' content='zh-cn'>
        <meta name='description' content=11&#32;AQS：保证并发安全的终极奥秘（中）>
        <link rel="icon" href="/static/favicon.png">
        <title>11 AQS：保证并发安全的终极奥秘（中） </title>
        
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
                        <a class="menu-item" id="01 多线程初阶：解谜多线程世界.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/01%20%e5%a4%9a%e7%ba%bf%e7%a8%8b%e5%88%9d%e9%98%b6%ef%bc%9a%e8%a7%a3%e8%b0%9c%e5%a4%9a%e7%ba%bf%e7%a8%8b%e4%b8%96%e7%95%8c.md">01 多线程初阶：解谜多线程世界.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="02 线程池掌故：管理并发的秘籍.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/02%20%e7%ba%bf%e7%a8%8b%e6%b1%a0%e6%8e%8c%e6%95%85%ef%bc%9a%e7%ae%a1%e7%90%86%e5%b9%b6%e5%8f%91%e7%9a%84%e7%a7%98%e7%b1%8d.md">02 线程池掌故：管理并发的秘籍.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="03 锁的奥秘：synchronized 的秘密.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/03%20%e9%94%81%e7%9a%84%e5%a5%a5%e7%a7%98%ef%bc%9asynchronized%20%e7%9a%84%e7%a7%98%e5%af%86.md">03 锁的奥秘：synchronized 的秘密.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="04 锁的奥秘：Lock 接口的秘密.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/04%20%e9%94%81%e7%9a%84%e5%a5%a5%e7%a7%98%ef%bc%9aLock%20%e6%8e%a5%e5%8f%a3%e7%9a%84%e7%a7%98%e5%af%86.md">04 锁的奥秘：Lock 接口的秘密.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="05 控制并发流程，并发的巧妙编织.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/05%20%e6%8e%a7%e5%88%b6%e5%b9%b6%e5%8f%91%e6%b5%81%e7%a8%8b%ef%bc%8c%e5%b9%b6%e5%8f%91%e7%9a%84%e5%b7%a7%e5%a6%99%e7%bc%96%e7%bb%87.md">05 控制并发流程，并发的巧妙编织.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="06 ThreadLocal 之珍宝：线程的隐秘宝库.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/06%20ThreadLocal%20%e4%b9%8b%e7%8f%8d%e5%ae%9d%ef%bc%9a%e7%ba%bf%e7%a8%8b%e7%9a%84%e9%9a%90%e7%a7%98%e5%ae%9d%e5%ba%93.md">06 ThreadLocal 之珍宝：线程的隐秘宝库.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="07 CAS：比肩而立的原子魔法.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/07%20CAS%ef%bc%9a%e6%af%94%e8%82%a9%e8%80%8c%e7%ab%8b%e7%9a%84%e5%8e%9f%e5%ad%90%e9%ad%94%e6%b3%95.md">07 CAS：比肩而立的原子魔法.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="08 容器的魔力：并发世界的宝库.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/08%20%e5%ae%b9%e5%99%a8%e7%9a%84%e9%ad%94%e5%8a%9b%ef%bc%9a%e5%b9%b6%e5%8f%91%e4%b8%96%e7%95%8c%e7%9a%84%e5%ae%9d%e5%ba%93.md">08 容器的魔力：并发世界的宝库.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="09 结果如何？线程的秘密告白.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/09%20%e7%bb%93%e6%9e%9c%e5%a6%82%e4%bd%95%ef%bc%9f%e7%ba%bf%e7%a8%8b%e7%9a%84%e7%a7%98%e5%af%86%e5%91%8a%e7%99%bd.md">09 结果如何？线程的秘密告白.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="10 AQS：保证并发安全的终极奥秘（上）.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/10%20AQS%ef%bc%9a%e4%bf%9d%e8%af%81%e5%b9%b6%e5%8f%91%e5%ae%89%e5%85%a8%e7%9a%84%e7%bb%88%e6%9e%81%e5%a5%a5%e7%a7%98%ef%bc%88%e4%b8%8a%ef%bc%89.md">10 AQS：保证并发安全的终极奥秘（上）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="11 AQS：保证并发安全的终极奥秘（中）.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/11%20AQS%ef%bc%9a%e4%bf%9d%e8%af%81%e5%b9%b6%e5%8f%91%e5%ae%89%e5%85%a8%e7%9a%84%e7%bb%88%e6%9e%81%e5%a5%a5%e7%a7%98%ef%bc%88%e4%b8%ad%ef%bc%89.md">11 AQS：保证并发安全的终极奥秘（中）.md</a>
                    </li>
                    
                    <li>
                        <a class="menu-item" id="12 AQS：保证并发安全的终极奥秘（下）.md" href="/%e4%b8%93%e6%a0%8f/Java%20%e5%b9%b6%e5%8f%91%ef%bc%9aJUC%20%e5%85%a5%e9%97%a8%e4%b8%8e%e8%bf%9b%e9%98%b6/12%20AQS%ef%bc%9a%e4%bf%9d%e8%af%81%e5%b9%b6%e5%8f%91%e5%ae%89%e5%85%a8%e7%9a%84%e7%bb%88%e6%9e%81%e5%a5%a5%e7%a7%98%ef%bc%88%e4%b8%8b%ef%bc%89.md">12 AQS：保证并发安全的终极奥秘（下）.md</a>
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
                            <h1 id="title" data-id="11 AQS：保证并发安全的终极奥秘（中）" class="title">11 AQS：保证并发安全的终极奥秘（中）</h1>
                            <div><p>在上一章节，我们很详细地结合源码讲解了 ReentrantLock 公平锁对于 AQS 的应用原理。</p>

<p>有了这个基础之后，本章节我们将对 ReentrantLock 非公平锁和 CountDownLatch 这两个的 AQS 的源码做一个具体的分析。</p>

<h2 id="一-reentrantlock-非公平锁">一、ReentrantLock 非公平锁</h2>

<p>我们之前学习过 ReentrantLock 非公平锁与公平锁的区别在于，非公平锁不会强行按照任务等待队列去等待任务，而是在获取锁的时候先去尝试使用 CAS 改变一下 State，如果改变成功直接返回加锁成功不用排队，如果改变失败则进入等待队列。</p>

<p>我们简单看一下<code>非公平锁</code>的源码。</p>

<p>如何寻找非公平锁的加锁实现呢？我们回顾一下上一节课，加锁解锁其实是由 AQS 的实现来做的，而 ReentrantLock 中对于 AQS 的实现是 Sync 内部类，Sync 实现了两种加锁方式：非公平锁和公平锁，结构关系如下：</p>

<p><img src="assets/96b9a8d013c04e50aae6c473a7a38bdb_tplv-k3u1fbpfcp-jj-mark_1890_0_0_0_q75.awebp" alt="image.png" /></p>

<p>通过这个结果关系，我们能够知道，非公平锁的加锁逻辑在<code>java.util.concurrent.locks.ReentrantLock.NonfairSync#lock</code>。</p>

<pre><code class="language-java">final void lock() {、
    //尝试使用CAS修改state的值，修改成功后就加锁成功
    if (compareAndSetState(0, 1))
        setExclusiveOwnerThread(Thread.currentThread());
    else
        //开始加锁
        acquire(1);
}
</code></pre>

<p>从源码中可以看到，非公平锁一进来就会直接尝试获取一次锁，不会进行太多的判断，这也符合非公平锁的定义，使用 CAS 修改如果成功了，就加锁成功，否则会执行 acquire 的加锁逻辑。</p>

<p>我们在上节课中分析，acquire 方法最终会调用到本身实现的 <code>tryAcquire</code>：</p>

<pre><code class="language-java">protected final boolean tryAcquire(int acquires) {
    return nonfairTryAcquire(acquires);
}
</code></pre>

<p>进入到 nonfairTryAcquire 的逻辑：</p>

<pre><code class="language-java">final boolean nonfairTryAcquire(int acquires) {
    final Thread current = Thread.currentThread();
    int c = getState();
    if (c == 0) {
        //直接尝试CAS加锁
        if (compareAndSetState(0, acquires)) {
            setExclusiveOwnerThread(current);
            return true;
        }
    }
    //可重入锁
    else if (current == getExclusiveOwnerThread()) {
        int nextc = c + acquires;
        if (nextc &lt; 0) // overflow
            throw new Error(&quot;Maximum lock count exceeded&quot;);
        setState(nextc);
        return true;
    }
    return false;
}
</code></pre>

<p>在这里可以看到，它的加锁逻辑与公平锁很相似，但是与公平锁不同的是：</p>

<ul>
<li><strong>公平锁当发现 state = 0 也就是没有任务占有锁的情况下，会判断队列中是存在等待任务，如果存在就会加锁失败，然后执行入队操作。</strong></li>
<li><strong>而非公平锁发现 state = 0 也就是没有任务占有锁的情况下，会直接进行 CAS 加锁，只要 CAS 加锁成功了，就会直接返回加锁成功而不会进行入队操作。</strong></li>
</ul>

<p>我们从源码中就能够直接看出来所谓的公平锁和非公平锁的实现方式的区别。非公平锁的解锁方式与公平锁的解放方式一致，不做重复介绍。</p>

<p>我们使用一个流程图来彻底解释非公平锁的实现逻辑：</p>

<p><img src="assets/8438997cf7fd49699bf466b58c37d3a9_tplv-k3u1fbpfcp-jj-mark_1890_0_0_0_q75.awebp" alt="AQS非公平锁的加锁.png" /></p>

<h2 id="二-countdownlatch">二、 CountDownLatch</h2>

<p>与 ReentrantLock 相同的是，我们同样可以在 CountDownLatch 中寻找到 AQS 的实现类 Sync。没错，CountDownLatch 的实现也是基于 AQS 来做的。</p>

<p>在学习其实现原理前，先回顾一下 CountDownLatch 的使用：</p>

<pre><code class="language-java">public class CountDownLatchTest {

    public static void main(String[] args) throws InterruptedException {
        CountDownLatch countDownLatch = new CountDownLatch(10);
        for (int i = 0; i &lt; 10; i++) {
            new Thread(() -&gt;{

                try {
                    System.out.println(&quot;线程：&quot; +Thread.currentThread().getName()  + &quot;开始执行。&quot;);
                    Thread.sleep((long) (Math.random() + 10000));
                    System.out.println(&quot;线程：&quot; +Thread.currentThread().getName()  + &quot;执行完成.&quot;);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }finally {
                    countDownLatch.countDown();
                }


            }).start();
        }
        System.out.println(&quot;开始等待10个线程都完成任务...&quot;);
        countDownLatch.await();
        System.out.println(&quot;线程全部执行完毕&quot;);
    }
}
</code></pre>

<p>可以看到，在初始化 CountDownLatch 的时候，我们传递了 10，然后开启了 10 个线程执行任务，每一个线程执行完毕之后都会调用 <code>countDownLatch.countDown();</code> 来进行递减操作。我们在主线程调用 <code>countDownLatch.await();</code> 来等待 CountDownLatch 变为 0 后，它会解除阻塞继续向下执行！</p>

<p>所以，我们分析 CountDownLatch 对于 AQS 的使用应该从以下几个方面进行：</p>

<ol>
<li>CountDownLatch 初始化的时候，传递的 10 是什么意思？</li>
<li>await 方法做了什么？</li>
<li>countDown 方法做了什么？</li>
</ol>

<p>我们按照问题的顺序逐个分析。</p>

<h3 id="1-初始化的时候做了什么">1. 初始化的时候做了什么？</h3>

<p>进入到初始化的源码中：</p>

<pre><code class="language-java">public CountDownLatch(int count) {
    if (count &lt; 0) throw new IllegalArgumentException(&quot;count &lt; 0&quot;);
    this.sync = new Sync(count);
}
</code></pre>

<p>从源码中看到，初始化的时候，它将我们传递的数量，传递到了 Sync，上文我们了解到，Sync 是 AQS 的实现子类，所以我们从源码层面上证明了 CountDownLatch 的实现一定与 AQS 有关。</p>

<p>我们进入到 Sync 中查看它是如何运用这个 count 的：</p>

<pre><code class="language-java">Sync(int count) {
    setState(count);
}
</code></pre>

<p>可以看到，Sync 只做了一件事，就是将 count 保存到了 AQS 的 state 中，<strong>比如我们传递的参数是 10，那么此时 AQS 中 state 的值也是 10。</strong></p>

<h3 id="2-await-方法做了什么">2. await 方法做了什么？</h3>

<p>了解了初始化方法之后，我们知道了此时 state 的值为 10，那么我们进入到 await 中，查看它是如何来进行阻塞线程的：</p>

<pre><code class="language-java">  public void await() throws InterruptedException {
      sync.acquireSharedInterruptibly(1);
  }
</code></pre>

<p>可以看到，阻塞也是借助 AQS 来做的，我们继续：</p>

<pre><code class="language-java">public final void acquireSharedInterruptibly(int arg)
        throws InterruptedException {
    if (Thread.interrupted())
        throw new InterruptedException();
    //尝试获取锁
    if (tryAcquireShared(arg) &lt; 0)
        //获取失败则对任务进行入队和阻塞
        doAcquireSharedInterruptibly(arg);
}
</code></pre>

<p>我们先分析 tryAcquireShared：</p>

<pre><code>java.util.concurrent.CountDownLatch.Sync#tryAcquireShared
protected int tryAcquireShared(int acquires) {
    return (getState() == 0) ? 1 : -1;
}
</code></pre>

<p>注意，此时 state 的数量为 10，所以这里应该返回的是 -1。我们继续看 doAcquireSharedInterruptibly ：</p>

<pre><code class="language-java">private void doAcquireSharedInterruptibly(int arg)
    throws InterruptedException {
    //创建一个节点 将节点加入到等待队列
    final Node node = addWaiter(Node.SHARED);
    boolean failed = true;
    try {
        for (;;) {
            //获取当前节点的前置节点
            final Node p = node.predecessor();
            //如果前置节点是头节点
            if (p == head) {
                //再次尝试判断state的值是否为0
                int r = tryAcquireShared(arg);
                if (r &gt;= 0) {
                    //如果state的数量为0 则r = 1, 开始讲当前节点设置为头节点 并清理废弃节点
                    setHeadAndPropagate(node, r);
                    //清理已经执行完的节点
                    p.next = null;
                    failed = false;
                    //返回尝试成功
                    return;
                }
            }
            //阻塞
            if (shouldParkAfterFailedAcquire(p, node) &amp;&amp;
                parkAndCheckInterrupt())
                throw new InterruptedException();
        }
    } finally {
        if (failed)
            cancelAcquire(node);
    }
}
</code></pre>

<p>我们分析上述源码，当 state 的值不为 0 的时候，证明 CountDown 还没有释放完毕，此时应该阻塞，先将当前节点加入到等待队列，然后同 ReentrantLock 一样，在阻塞之前也会先判断自己是不是 head 的下一个节点，如果是的话会再次尝试判断一下 state 是不是等于 0 了，如果此时等于 0 了，就不用阻塞了，可以直接返回。</p>

<p>此时如果 state 依旧不为 0，则开始与 ReentrantLock 一样调用 park 进行阻塞等待唤醒。</p>

<p>事实上，await 阻塞的逻辑十分简单。我们总结来说，就是当程序调用 await 方法的时候，会判断 state 的值是不是 0，如果不是 0 就阻塞，是 0 就直接返回。</p>

<p>我们使用一张图来解释一下这个流程：</p>

<p><img src="assets/c50f4bde6dde43f3b887abbd581a6b51_tplv-k3u1fbpfcp-jj-mark_1890_0_0_0_q75.awebp" alt="AQS应用之CountDownLatch的阻塞.png" /></p>

<p>至于为什么会存在一个队列，我们之前在介绍 CountDownLatch 的时候介绍了一种“<strong>多等一</strong>”的场景（开发人员等待产品经理 PRD 的场景），每一个线程都会调用 await 等待，这里多个等待的任务就会进入到队列中。</p>

<h3 id="3-countdown-方法做了什么">3. countDown 方法做了什么？</h3>

<p>直接进入到源码：</p>

<pre><code class="language-java">public void countDown() {
    sync.releaseShared(1);
}
</code></pre>

<p>CountDownLatch 的 countDown 也是基于 AQS 来做的，我们进入到 AQS 的实现类<code>java.util.concurrent.CountDownLatch.Sync#releaseShared</code>中：</p>

<pre><code class="language-java">public final boolean releaseShared(int arg) {
    if (tryReleaseShared(arg)) {
        doReleaseShared();
        return true;
    }
    return false;
}
</code></pre>

<p>我们这里分为两步源码进行解读了。</p>

<p>先行分析 tryReleaseShared（注意，arg 的值默认为 1）<code>java.util.concurrent.CountDownLatch.Sync#tryReleaseShared</code>：</p>

<pre><code class="language-java">protected boolean tryReleaseShared(int releases) {
    for (;;) {
        //获取当前的state的值
        int c = getState();
        //如果此时state的值为0，证明CountDownLatch已经被释放了，所以也没必要解锁释放队列中的任务了，直接返回false
        if (c == 0)
            return false;
        //将当前的state的值减1
        int nextc = c-1;
        //cas将当前减1的值替换到state中，如果替换失败，因为本逻辑是一个死循环，所以替换失败会重新再来一遍逻辑
        if (compareAndSetState(c, nextc))
            //当state - 1 = 0的时候，证明需要唤醒等大队列中的任务了，所以返回true，否则不需要唤醒任务，返回false
            return nextc == 0;
    }
}
</code></pre>

<p><code>tryReleaseShared</code> 的逻辑也是比较简单的，主要就是针对于 state 进行 -1 操作，当减 1 完成后，如果 state 的值等于 0，证明 <code>CountDownLatch</code> 的计数已经完成了，需要将此时 await 阻塞在队列中的任务唤醒，于是当 <code>tryReleaseShared</code> 返回 true 之后，doReleaseShared 将唤醒任务：</p>

<pre><code class="language-java">private void doReleaseShared() {
    for (;;) {
        Node h = head;
        if (h != null &amp;&amp; h != tail) {
            int ws = h.waitStatus;
            if (ws == Node.SIGNAL) {
                if (!compareAndSetWaitStatus(h, Node.SIGNAL, 0))
                    continue;
                //唤醒head节点的下一个节点的阻塞
                unparkSuccessor(h);
            }
            else if (ws == 0 &amp;&amp;
                     !compareAndSetWaitStatus(h, 0, Node.PROPAGATE))
                continue;
        }
        if (h == head)
            break;
    }
}
</code></pre>

<p>doReleaseShared 方法会获取当前等待队列中的头节点，然后调用 unparkSuccessor 方法将 head 节点的下一节点解除阻塞，进而完成对于 await 的唤醒。</p>

<p>我们使用一张图来简单解释一下 countDown 方法：</p>

<p><img src="assets/4ce3fbf329b14302844c2d1189504420_tplv-k3u1fbpfcp-jj-mark_1890_0_0_0_q75.awebp" alt="CountDownLatch的AQS之countDown.jpg" /></p>

<p>总结来说，countDown 方法主要就是对 AQS 中 State 的值进行 -1 操作，当 State 的值为 0 的时候，就开始唤醒等待队列中的任务。</p>

<h2 id="三-总结">三、总结</h2>

<p>在本章节中我们对前面所学的 ReentrantLock 非公平锁和 CountDownLatch 进行了深入源码的分析，其本质还是<code>对于 state 的操作</code>。你可以尝试分析一下我们前面所学的 Semaphore 对于 AQS 的使用，看一下它是如何做到基于“许可证数量”来进行控制任务数量的。</p>

<p>在下一章节中，将带领大家学习一个较难的 <code>ReentrantReadWriteLock</code> 对于 AQS 的实现，希望大家认真熟悉上一章节和本章节对于 AQS 的分析，为下一章节打下基础。</p>
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
                <p>© 2019 - 2023 <a href="/cdn-cgi/l/email-protection#244848481d1015151413644349454d480a474b49" target="_blank">Liangliang Lee</a>.
                    Powered by <a href="https://github.com/gin-gonic/gin" target="_blank">gin</a> and <a
                        href="https://github.com/kaiiiz/hexo-theme-book" target="_blank">hexo-theme-book</a>.</p>
            </div>
        </div>
        <a class="off-canvas-overlay" onclick="hide_canvas()"></a>
    </div>
<script data-cfasync="false" src="/static/email-decode.min.js"></script><script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8f0e60a10baf385e',t:'MTczNDAxMzQ2MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/static/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSEEVD756"></script>

<script src="/static/index.js"></script>

</html>