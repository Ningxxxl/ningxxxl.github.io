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
    "revision": "edfed442d257fd5f585c7b586ad43a5c"
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
    "url": "assets/js/1.96f1d4b4.js",
    "revision": "22c9e34e8bfcda349c895f753af2c6b0"
  },
  {
    "url": "assets/js/10.601adef5.js",
    "revision": "75ce2529cfbe2dd88a7024cdbca2634f"
  },
  {
    "url": "assets/js/11.4db3a5d1.js",
    "revision": "71a8efe2fb1efbedca9199781c85d456"
  },
  {
    "url": "assets/js/12.4bee0cd7.js",
    "revision": "98d2ece1719406298cad312ee272ea9d"
  },
  {
    "url": "assets/js/3.8fa1ebe2.js",
    "revision": "7539175e87ada8a86aa57480a82aeece"
  },
  {
    "url": "assets/js/4.96414d41.js",
    "revision": "8fd3ff762ea7cb3cc62606583e64347d"
  },
  {
    "url": "assets/js/5.a9c097eb.js",
    "revision": "a67d923fb661a42120430c210eb66e46"
  },
  {
    "url": "assets/js/6.876b266e.js",
    "revision": "5f8248d9c144b4ca9c066080e24424c4"
  },
  {
    "url": "assets/js/7.687e0571.js",
    "revision": "372ec5680021d971ed653a9f39068daa"
  },
  {
    "url": "assets/js/8.f85f239e.js",
    "revision": "ebf51e83cadb7bd62a7254d8a4534452"
  },
  {
    "url": "assets/js/9.43d4cce1.js",
    "revision": "cf5948e04f3adf3fc26d11a625cb3a1a"
  },
  {
    "url": "assets/js/app.4ceb2d14.js",
    "revision": "20e4ad41b94c188d3561a16cb0a856e3"
  },
  {
    "url": "avatar.png",
    "revision": "00c11abc65a188cb4b5b8c5cc424f451"
  },
  {
    "url": "blogs/ce-shi.html",
    "revision": "f51e57802d32fb51f84d85ee848c8e97"
  },
  {
    "url": "categories/index.html",
    "revision": "873ec7b26afaf5a083df083876cf0d35"
  },
  {
    "url": "categories/测试分类/index.html",
    "revision": "4419c8da6cff3697cad1d1bc28a4946e"
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
    "revision": "2e508c31a6ee462256b62fa09995435e"
  },
  {
    "url": "inflatocat.png",
    "revision": "d52b2ce1c84c9eb2210d56d825b38786"
  },
  {
    "url": "logo.png",
    "revision": "d52b2ce1c84c9eb2210d56d825b38786"
  },
  {
    "url": "tag/index.html",
    "revision": "9451929d990b54274c982381d6cf7dca"
  },
  {
    "url": "timeline/index.html",
    "revision": "26513b27088a42b210e40bd8250bb906"
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
