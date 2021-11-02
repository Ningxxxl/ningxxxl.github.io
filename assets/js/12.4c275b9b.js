(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{563:function(v,_,t){"use strict";t.r(_);var a=t(10),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"一些概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些概念"}},[v._v("#")]),v._v(" 一些概念")]),v._v(" "),t("h3",{attrs:{id:"同步和异步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步和异步"}},[v._v("#")]),v._v(" 同步和异步")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("同步（Synchronous）")]),v._v(" "),t("p",[v._v("同步方法调用一旦开始，必须等到方法调用返回之后，才能继续后续行为。")])]),v._v(" "),t("li",[t("p",[v._v("异步（Asynchronous）")]),v._v(" "),t("p",[v._v("异步方法调用更像一个消息传递，一旦开始，方法调用会"),t("strong",[v._v("立即返回")]),v._v("，调用者可以继续后续的操作。")]),v._v(" "),t("p",[v._v("如果方法有返回值，那么当异步调用真实完成之后，会通知调用者。")])])]),v._v(" "),t("h3",{attrs:{id:"并发和并行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发和并行"}},[v._v("#")]),v._v(" 并发和并行")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("并发（Concurrency）")]),v._v(" "),t("p",[v._v("多个任务"),t("strong",[v._v("交替")]),v._v("执行，系统会在两个任务之间切换。")])]),v._v(" "),t("li",[t("p",[v._v("并行（Parallelism）")]),v._v(" "),t("p",[v._v("多个任务真的"),t("strong",[v._v("同时")]),v._v("执行。")]),v._v(" "),t("p",[v._v("真实的并行只可能出现在拥有多个CPU的系统中。")])])]),v._v(" "),t("h3",{attrs:{id:"临界区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#临界区"}},[v._v("#")]),v._v(" 临界区")]),v._v(" "),t("p",[v._v("临界区用来表示一种"),t("strong",[v._v("公共资源")]),v._v("或者共享数据，可以被多个线程使用。但是"),t("strong",[v._v("每一次，只能有一个线程使用它")]),v._v("。")]),v._v(" "),t("p",[v._v("在并行程序中，临界区资源是保护的对象。")]),v._v(" "),t("h3",{attrs:{id:"阻塞和非阻塞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阻塞和非阻塞"}},[v._v("#")]),v._v(" 阻塞和非阻塞")]),v._v(" "),t("p",[v._v("阻塞和非阻塞用来形容多线程间的互相影响。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("阻塞（Blocking）")]),v._v(" "),t("p",[v._v("一个线程占用了临界区资源，其他需要这个资源的线程就必须在临界区中等待。"),t("strong",[v._v("等待会导致线程挂起，这就是阻塞")]),v._v("。")])]),v._v(" "),t("li",[t("p",[v._v("非阻塞（Non-Blocking）")]),v._v(" "),t("p",[v._v("强调没有一个线程可以妨碍其他线程执行，所有线程都会尝试不断前向执行。")])])]),v._v(" "),t("h3",{attrs:{id:"死锁、饥饿和活锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#死锁、饥饿和活锁"}},[v._v("#")]),v._v(" 死锁、饥饿和活锁")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("死锁（Deadlock）")]),v._v(" "),t("p",[v._v("一组互相竞争资源的线程因互相等待，导致“永久”阻塞的现象。")]),v._v(" "),t("p",[t("strong",[v._v("死锁的4个必要条件：")])]),v._v(" "),t("ol",[t("li",[t("p",[t("strong",[v._v("互斥")]),v._v("\n共享资源 X 和 Y 只能被一个线程占用；")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("占有且等待")]),v._v("\n线程 T1 已经取得共享资源 X，在等待共享资源 Y 的时候，不释放共享资源 X；\n解决："),t("code",[v._v("**一次性申请所有的资源**")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("不可抢占")]),v._v("\n其他线程不能强行抢占线程 T1 占有的资源；\n解决："),t("code",[v._v("**申请不到进一步所需的资源时，可以主动释放它占有的资源**")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("循环等待")]),v._v("\n线程 T1 等待线程 T2 占有的资源，线程 T2 等待线程 T1 占有的资源。\n解决："),t("strong",[t("code",[v._v("按顺序申请资源")])])])])])]),v._v(" "),t("li",[t("p",[v._v("饥饿（Starvation）")]),v._v(" "),t("p",[v._v("线程因无法访问所需资源而无法执行下去的情况。")]),v._v(" "),t("p",[v._v("假设有1万个线程，还没等前面的线程执行完，后面的线程就饿死了。")]),v._v(" "),t("p",[v._v("或者因为线程优先级太低，高优先级线程一直抢占资源。")])]),v._v(" "),t("li",[t("p",[v._v("活锁（Livelock）")]),v._v(" "),t("p",[v._v("有时线程虽然没有发生阻塞，但仍然会存在执行不下去的情况。")]),v._v(" "),t("p",[v._v("比如因互相礼让，导致线程永远的礼让下去。")]),v._v(" "),t("p",[v._v("解决："),t("strong",[t("code",[v._v("等待一个随机的时间")])])])])]),v._v(" "),t("h2",{attrs:{id:"并发级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发级别"}},[v._v("#")]),v._v(" 并发级别")]),v._v(" "),t("p",[v._v("由于临界区的原因，多线程之间的并发必须受到控制，根据控制并发的策略，可以把并发的级别分类，可以分为阻塞、无饥饿、无障碍、无锁、无等待。")]),v._v(" "),t("h3",{attrs:{id:"阻塞-blocking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阻塞-blocking"}},[v._v("#")]),v._v(" 阻塞（Blocking）")]),v._v(" "),t("p",[v._v("当临界区被占用时，其他线程无法继续执行，必须在临界区外等待，直至临界区资源被释放，才可以去申请，如果申请到了才能继续执行，不然还要继续等待。")]),v._v(" "),t("p",[v._v("Java中我们使用内置锁 "),t("code",[v._v("synchronized")]),v._v(" 或者显式锁 "),t("code",[v._v("ReentrantLock")]),v._v(" ，都可能会使线程阻塞。")]),v._v(" "),t("p",[v._v("阻塞的控制方式是"),t("strong",[v._v("悲观策略")]),v._v("，认为两个进入临界区的线程很可能都会对数据做修改，为了保护共享数据，所以使用加锁的方式，"),t("strong",[v._v("无论线程是进去读还是写，都让他们排队进入临界区")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"无饥饿-starvation-free"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无饥饿-starvation-free"}},[v._v("#")]),v._v(" 无饥饿（Starvation-Free）")]),v._v(" "),t("p",[v._v("线程是有优先级之分的，线程调度的时候会更倾向于满足优先级高的线程。")]),v._v(" "),t("p",[v._v("如 "),t("code",[v._v("ReentrantLock")]),v._v(" 支持公平锁和非公平锁：\n非公平锁会在加入等待队列前直接尝试获取锁，并没有考虑等待队列中是否已经有节点在它之前排队，公平锁的公平之处在于它会去检查前面是否有节点，如果有则不尝试获取锁。")]),v._v(" "),t("h3",{attrs:{id:"无障碍-obstruction-free"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无障碍-obstruction-free"}},[v._v("#")]),v._v(" 无障碍（Obstruction-Free）")]),v._v(" "),t("p",[v._v("无障碍是一种最弱的"),t("strong",[v._v("非阻塞调度")]),v._v("，多个线程可以同时进入临界区，但是在释放资源时，会判断是否发生数据竞争。比如A线程读取数据x，要释放资源时，系统会判断当前的临界区内x值是否发生变化，如果发生变化，则会回滚A线程的操作。")]),v._v(" "),t("p",[v._v("相对"),t("code",[v._v("阻塞")]),v._v("方式 是一种“乐观”策略。使用"),t("code",[v._v("一致性标记")]),v._v("来实现“无障碍”调度。")]),v._v(" "),t("p",[v._v("如果在冲突密集的情况下，所有线程可能都不断回滚自己的操作，使得没有一个线程可以走出临界区，影响系统的正常执行。")]),v._v(" "),t("h3",{attrs:{id:"无锁-lock-free"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无锁-lock-free"}},[v._v("#")]),v._v(" 无锁（Lock-Free）")]),v._v(" "),t("p",[v._v("无锁的并行都是无障碍的，在无锁的情况下，所有线程都可以尝试对临界区的访问，但是与无障碍不同的是，"),t("strong",[v._v("无锁的并发保证必然有 一个线程 能在 有限步内 完成操作，离开临界区")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"无等待-wait-free"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无等待-wait-free"}},[v._v("#")]),v._v(" 无等待（Wait-Free）")]),v._v(" "),t("p",[v._v("无状态的前提是无锁的，要求 "),t("strong",[v._v("所有线程")]),v._v(" 都必须在"),t("strong",[v._v("有限步内")]),v._v("完成，这样就不会发生饥饿现象。")]),v._v(" "),t("h2",{attrs:{id:"并行的两个定律"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并行的两个定律"}},[v._v("#")]),v._v(" 并行的两个定律")]),v._v(" "),t("p",[v._v("根据切入角度的不同，产生了两个公式（中间过程省略）")]),v._v(" "),t("h3",{attrs:{id:"amdahl-定律"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amdahl-定律"}},[v._v("#")]),v._v(" Amdahl 定律")]),v._v(" "),t("p",[v._v("加速比定义\n$$\n\\begin{align*}\n加速比 &= 优化前系统耗时 / 优化后系统耗时 \\\n&= \\frac{1}{F + \\frac{1}{n} (1 - F)} \\\n\\end{align*}\n$$\n其中 "),t("code",[v._v("n")]),v._v(" 表示处理器个数，"),t("code",[v._v("F")]),v._v(" 表示程序中只能串行执行的比例。")]),v._v(" "),t("blockquote",[t("p",[v._v("仅增加CPU数量并不一定能起到有效的作用。")]),v._v(" "),t("p",[v._v("需要从根本上修改程序的串行行为，提供系统内可并行化的模块比重。")]),v._v(" "),t("p",[v._v("在此基础上，合理增加CPU数量。")])]),v._v(" "),t("h3",{attrs:{id:"gustafson-定律"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gustafson-定律"}},[v._v("#")]),v._v(" Gustafson 定律")]),v._v(" "),t("p",[v._v("加速比定义\n$$\n\\begin{align*}\n加速比 &= 优化前系统耗时 / 优化后系统耗时 \\\n&= n - F(n - 1) \\\n\\end{align*}\n$$\n其中 "),t("code",[v._v("n")]),v._v(" 表示处理器个数，"),t("code",[v._v("F")]),v._v(" 表示程序中只能串行执行的比例。")]),v._v(" "),t("blockquote",[t("p",[v._v("如果串行化比例很小，并行化比例很大，那么只要不断增加处理器，就能更快")])]),v._v(" "),t("h3",{attrs:{id:"二者矛盾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二者矛盾"}},[v._v("#")]),v._v(" 二者矛盾")]),v._v(" "),t("p",[v._v("其实二者并不矛盾。")]),v._v(" "),t("p",[t("code",[v._v("Amdahl")]),v._v(" 强调：当串行化比例一定时，加速比是有上限的。不管增加多少CPU都无法突破上限。")]),v._v(" "),t("p",[t("code",[v._v("Gustafson")]),v._v(" 强调：如果可并行代码占比足够大，那么加速比就能随着CPU数量线性增加。")]),v._v(" "),t("h2",{attrs:{id:"回到java内存模型-jmm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回到java内存模型-jmm"}},[v._v("#")]),v._v(" 回到Java内存模型 (JMM)")]),v._v(" "),t("p",[t("code",[v._v("JMM")]),v._v(" 的关键技术点都是围绕着多线程的 "),t("code",[v._v("原子性")]),v._v(" , "),t("code",[v._v("可见性")]),v._v("，"),t("code",[v._v("有序性")]),v._v(" 来建立的。")]),v._v(" "),t("p",[v._v("先说结论：")]),v._v(" "),t("p",[t("strong",[v._v("synchronized: 具有原子性，有序性和可见性")]),v._v("；\n"),t("strong",[v._v("volatile：具有有序性和可见性")])]),v._v(" "),t("p",[v._v("JMM中定义了8中操作都是原子的，不可再分的：")]),v._v(" "),t("blockquote",[t("p",[v._v("lock（锁定）：作用于主内存中的变量，它把一个变量标识为一个线程独占的状态；")]),v._v(" "),t("p",[v._v("unlock（解锁）：作用于主内存中的变量，它把一个处于锁定状态的变量释放出来，释放后的变量才可以被其他线程锁定")]),v._v(" "),t("p",[v._v("read（读取）：作用于主内存的变量，它把一个变量的值从主内存传输到线程的工作内存中，以便后面的load动作使用；")]),v._v(" "),t("p",[v._v("load（载入）：作用于工作内存中的变量，它把read操作从主内存中得到的变量值放入工作内存中的变量副本")]),v._v(" "),t("p",[v._v("use（使用）：作用于工作内存中的变量，它把工作内存中一个变量的值传递给执行引擎，每当虚拟机遇到一个需要使用到变量的值的字节码指令时将会执行这个操作；")]),v._v(" "),t("p",[v._v("assign（赋值）：作用于工作内存中的变量，它把一个从执行引擎接收到的值赋给工作内存的变量，每当虚拟机遇到一个给变量赋值的字节码指令时执行这个操作；")]),v._v(" "),t("p",[v._v("store（存储）：作用于工作内存的变量，它把工作内存中一个变量的值传送给主内存中以便随后的write操作使用；")]),v._v(" "),t("p",[v._v("write（操作）：作用于主内存的变量，它把store操作从工作内存中得到的变量的值放入主内存的变量中。")]),v._v(" "),t("p",[v._v("把一个变量从主内存中复制到工作内存中就需要执行read, load操作，")]),v._v(" "),t("p",[v._v("将工作内存同步到主内存中就需要执行store, write操作。")]),v._v(" "),t("p",[v._v("作者：你听___\n链接：https://www.jianshu.com/p/cf57726e77f2\n来源：简书\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])]),v._v(" "),t("h3",{attrs:{id:"原子性-atomicity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原子性-atomicity"}},[v._v("#")]),v._v(" 原子性（Atomicity）")]),v._v(" "),t("p",[v._v("原子性是指"),t("strong",[v._v("一个操作是不可中断的")]),v._v("。即使是多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程干扰。")]),v._v(" "),t("p",[v._v("如"),t("strong",[v._v("32位系统对于 "),t("code",[v._v("long")]),v._v(" 型数据的读和写都不是原子性的")]),v._v("。")]),v._v(" "),t("p",[v._v("可以"),t("strong",[v._v("大致认为基本数据类型的访问读写具备原子性")]),v._v("（例外就是long和double的非原子性协定）")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("synchronized满足原子性")])]),v._v(" "),t("li",[v._v("如果让volatile保证原子性，必须符合以下两条规则：\n"),t("ol",[t("li",[t("strong",[v._v("运算结果并不依赖于变量的当前值，或者能够确保只有一个线程修改变量的值；")])]),v._v(" "),t("li",[t("strong",[v._v("变量不需要与其他的状态变量共同参与不变约束")])])])])]),v._v(" "),t("h3",{attrs:{id:"可见性-visibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可见性-visibility"}},[v._v("#")]),v._v(" 可见性（Visibility）")]),v._v(" "),t("p",[v._v("可见性是指"),t("strong",[v._v("当一个线程修改了某一个共享变量的值时，其他线程是否能够立即知道这个修改")]),v._v("。")]),v._v(" "),t("p",[v._v("导致的原因有很多，如缓存优化（CPU Cache），硬件优化，"),t("strong",[v._v("指令重排")]),v._v("，编辑器的优化等。")]),v._v(" "),t("ul",[t("li",[v._v("synchronzed内存语义进行了分析，当线程获取锁时会从主内存中获取共享变量的最新值，释放锁的时候会将共享变量同步到主内存中。从而，"),t("strong",[v._v("synchronized具有可见性")]),v._v("。")]),v._v(" "),t("li",[v._v("同样的在volatile中，会通过在指令中添加"),t("strong",[v._v("lock指令")]),v._v("，以实现内存可见性。因此, "),t("strong",[v._v("volatile具有可见性")])])]),v._v(" "),t("h3",{attrs:{id:"有序性-ordering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有序性-ordering"}},[v._v("#")]),v._v(" 有序性（Ordering）")]),v._v(" "),t("p",[v._v("java程序天然的有序性可以总结为："),t("strong",[v._v("如果在本线程内观察，所有的操作都是有序的；如果在一个线程观察另一个线程，所有的操作都是无序的")]),v._v("。")]),v._v(" "),t("ul",[t("li",[v._v("synchronized语义表示锁在同一时刻只能由一个线程进行获取，当锁被占用后，其他线程只能等待。因此，synchronized语义就要求线程在访问读写共享变量时只能“串行”执行，因此"),t("strong",[v._v("synchronized具有有序性")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("volatile包含禁止指令重排序的语义，其具有有序性")]),v._v("。\n（可以参考单例模式的一种双重检验锁定（Double-checked Locking）的实现方式）")])]),v._v(" "),t("h3",{attrs:{id:"哪些指令不能重排-happen-before原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哪些指令不能重排-happen-before原则"}},[v._v("#")]),v._v(" 哪些指令不能重排：Happen-Before原则")]),v._v(" "),t("p",[v._v("指令重排是有原则的：")]),v._v(" "),t("ol",[t("li",[v._v("程序顺序原则：一个线程内保证语义的串行性。")]),v._v(" "),t("li",[v._v("volatile规则："),t("code",[v._v("volatile")]),v._v(" 变量的写先于读发生，这保证了 "),t("code",[v._v("volatile")]),v._v(" 变量的可见性。")]),v._v(" "),t("li",[v._v("锁规则：解锁（unlock）必然发生在随后的加锁（lock）前。")]),v._v(" "),t("li",[v._v("传递性：A先于B，B先于C，那么A必然先于C。")]),v._v(" "),t("li",[v._v("线程的 "),t("code",[v._v("start()")]),v._v(" 方法先于它的每一个动作。")]),v._v(" "),t("li",[v._v("线程的所有操作先于线程的终结（"),t("code",[v._v("Thread.join()")]),v._v("）。")]),v._v(" "),t("li",[v._v("线程的中断（"),t("code",[v._v("interrupt()")]),v._v("）先于被中断线程的代码。")]),v._v(" "),t("li",[v._v("对象的构造函数的执行、结束先于 "),t("code",[v._v("finalize")]),v._v(" 方法。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);