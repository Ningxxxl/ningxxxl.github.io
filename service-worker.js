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
    "revision": "025b02e088d534a57961e77db637ff7d"
  },
  {
    "url": "assets/css/0.styles.4220c3cc.css",
    "revision": "86cdfcc3be7593e79dee10adf224669f"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.aaa33607.js",
    "revision": "e67fa0902464b82c7b92688361c9382f"
  },
  {
    "url": "assets/js/10.c9262bd8.js",
    "revision": "5c27f32ea8f047894f49335fbf62c3d1"
  },
  {
    "url": "assets/js/11.ed6f3fad.js",
    "revision": "45e6948256e4750c16803c46bca63895"
  },
  {
    "url": "assets/js/12.4c275b9b.js",
    "revision": "b015923c0198b9fe1415808681675df1"
  },
  {
    "url": "assets/js/13.5c2a09a8.js",
    "revision": "0b178dbaa2056da6d06d3823d8c380e4"
  },
  {
    "url": "assets/js/14.7b8e82fa.js",
    "revision": "98f1fff41bd8877c209150e3e93790c1"
  },
  {
    "url": "assets/js/3.0966d821.js",
    "revision": "752a3c62c72a183f309ac1e75f81e73f"
  },
  {
    "url": "assets/js/4.dc7151e4.js",
    "revision": "7e1b1f4b56e3c3de42cbf98d079c295a"
  },
  {
    "url": "assets/js/5.37ba85e0.js",
    "revision": "f4fc3ae15f9390a29247519f193d87c9"
  },
  {
    "url": "assets/js/6.c75c281e.js",
    "revision": "7b408aaf0f86fbbd9f0bf0347e829d86"
  },
  {
    "url": "assets/js/7.a9f182e0.js",
    "revision": "604e3df193c6d7805d1bb5670c59e50b"
  },
  {
    "url": "assets/js/8.4d20c84f.js",
    "revision": "32eaa0bd1a5cf3a03b20e8ad833d3c25"
  },
  {
    "url": "assets/js/9.da61fbca.js",
    "revision": "a89a4e74c73f791f9e1ad0a5a138301b"
  },
  {
    "url": "assets/js/app.1177d2e9.js",
    "revision": "db4657ebcb743c0b818a377f41b161e3"
  },
  {
    "url": "avatar.png",
    "revision": "00c11abc65a188cb4b5b8c5cc424f451"
  },
  {
    "url": "blogs/ce-shi.html",
    "revision": "7f5b79945d0bd0c91ca283113570fa10"
  },
  {
    "url": "blogs/chapter-1.html",
    "revision": "f9cbc6b22602869bb059876c898cbcbd"
  },
  {
    "url": "categories/Concurrency/index.html",
    "revision": "98e46b13223f822ff03de52b31e982e8"
  },
  {
    "url": "categories/index.html",
    "revision": "8e81b5f49b351e48fafcabfb830eef02"
  },
  {
    "url": "categories/测试分类/index.html",
    "revision": "da4116a709bfb759ee66793c5e76341a"
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
    "revision": "ef3b311532f36803e6085ee123d9b5b1"
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
    "revision": "7debcfeb557611128f68c796b01c3fbc"
  },
  {
    "url": "timeline/index.html",
    "revision": "6f4b07ba66c68256502e5cacd958f44a"
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
