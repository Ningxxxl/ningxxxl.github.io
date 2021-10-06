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
    "revision": "c7ce320575c9147586025a9be787d030"
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
    "url": "assets/js/app.13d9719d.js",
    "revision": "a883008a462c4e2611c9dea5551244c3"
  },
  {
    "url": "avatar.png",
    "revision": "00c11abc65a188cb4b5b8c5cc424f451"
  },
  {
    "url": "blogs/ce-shi.html",
    "revision": "38422e37a6a90ad2d4edabd17ddef87c"
  },
  {
    "url": "categories/index.html",
    "revision": "6e7d5f0eb3b0cfc40682584800032ca3"
  },
  {
    "url": "categories/测试分类/index.html",
    "revision": "5d7b85103e79bbf1f530ab1c5afe241e"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "93a1d40308f6e523657796b19c722f4e"
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
    "revision": "450f711811248a257647389057cdf312"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9f16cc2d7d50193afe577830e62c713"
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
