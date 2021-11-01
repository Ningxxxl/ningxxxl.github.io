/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "411263f35f15db7bb83dc43fd241ef61"
  },
  {
    "url": "assets/css/0.styles.18fd3ab2.css",
    "revision": "e2ca71856b2ea52bc5a488661162120f"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.c4dce9f4.js",
    "revision": "a98f48512dd780f17fdfeeff94d675b8"
  },
  {
    "url": "assets/js/10.e9ce8ea7.js",
    "revision": "b6f6cfc82ce07943d394b0b12d1cbc31"
  },
  {
    "url": "assets/js/11.77d44a09.js",
    "revision": "ddb3533cdb58d234a7af0b317c9dcff9"
  },
  {
    "url": "assets/js/12.8eec5277.js",
    "revision": "5a14e443807ca2669549b0fff3d34e1a"
  },
  {
    "url": "assets/js/13.4ac2e9ac.js",
    "revision": "b75665e8733f6abf1573220e9c33afc0"
  },
  {
    "url": "assets/js/3.a4f26e6c.js",
    "revision": "7890acd383879b3576b6dfe8f7d73527"
  },
  {
    "url": "assets/js/4.29d3fdcd.js",
    "revision": "1f2f21f0274c695d7af56016702c9dbc"
  },
  {
    "url": "assets/js/5.a03d6126.js",
    "revision": "81291fa82b9c2720aa588fd1dae92510"
  },
  {
    "url": "assets/js/6.63c86a40.js",
    "revision": "87fce47a082a0373a2f0d34238fba0ae"
  },
  {
    "url": "assets/js/7.c5aa2361.js",
    "revision": "bf3091e2cfbcc643b6a26a881bfdd846"
  },
  {
    "url": "assets/js/8.c8508794.js",
    "revision": "cf337e7c5ee701896276ad887b4b9fcd"
  },
  {
    "url": "assets/js/9.4b3622ec.js",
    "revision": "690b75976f1367e51fb76cb11d7a6b45"
  },
  {
    "url": "assets/js/app.b0759bc9.js",
    "revision": "0c16437035e6364d963b38fe65489d65"
  },
  {
    "url": "avatar.png",
    "revision": "00c11abc65a188cb4b5b8c5cc424f451"
  },
  {
    "url": "blogs/ce-shi.html",
    "revision": "1512263be0b038af9e0c971cb21c05bb"
  },
  {
    "url": "blogs/java-concurrency/chapter-1.html",
    "revision": "3e216fa808c7b4b8d4b2ca3999f56ed6"
  },
  {
    "url": "categories/Concurrency/index.html",
    "revision": "00c808a2728997080ffa10e3f55ce83c"
  },
  {
    "url": "categories/index.html",
    "revision": "059346e9fa16a87be5037fde497784ab"
  },
  {
    "url": "categories/测试分类/index.html",
    "revision": "7375122c698eb6c72c7213442e1b769e"
  },
  {
    "url": "favicon.png",
    "revision": "53ecf2e1a46b4a94ecd58968550b04a2"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "icons/120x120inflatocat.png",
    "revision": "577785b7c3457ce9b1d4b89b74089ad2"
  },
  {
    "url": "icons/144x144inflatocat.png",
    "revision": "6fe7317e02114dbf8d67255142a184c0"
  },
  {
    "url": "icons/152x152inflatocat.png",
    "revision": "2b63accb2442382ec767a8ba5586be46"
  },
  {
    "url": "icons/180x180inflatocat.png",
    "revision": "c0cfd73865c45d2890fc80306ecb20ca"
  },
  {
    "url": "icons/192x192inflatocat.png",
    "revision": "a62e50592a07c52f020c8f2ecd6be666"
  },
  {
    "url": "icons/384x384inflatocat.png",
    "revision": "7dc163d966a561423c56879f907b2133"
  },
  {
    "url": "icons/48x48inflatocat.png",
    "revision": "c25b96cb572d075ed1497986d255e84a"
  },
  {
    "url": "icons/512x512inflatocat.png",
    "revision": "12f79c4b7094c81306fd659f249a3665"
  },
  {
    "url": "icons/60x60inflatocat.png",
    "revision": "e1a8f9b8b626dfa02df7d5f51ac0def3"
  },
  {
    "url": "icons/72x72inflatocat.png",
    "revision": "444f474148b3eaa5b3cd6d995caea97c"
  },
  {
    "url": "icons/96x96inflatocat.png",
    "revision": "aa3e8db2b1703ab2cc08f8ed40207d3d"
  },
  {
    "url": "index.html",
    "revision": "1bb8a0fa4f2d3edae21b9a9a411dd74b"
  },
  {
    "url": "inflatocat.png",
    "revision": "171b73fe54bca4041fc4aac12ccb5cdd"
  },
  {
    "url": "logo.png",
    "revision": "d52b2ce1c84c9eb2210d56d825b38786"
  },
  {
    "url": "tag/index.html",
    "revision": "ffeb60f610f55610f427667a9d5105e5"
  },
  {
    "url": "timeline/index.html",
    "revision": "497158c59ce72cfd73818c7ca7713ba1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
