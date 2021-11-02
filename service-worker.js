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
    "revision": "3ee925e6aa6dabdd11f47420f4069da4"
  },
  {
    "url": "assets/css/0.styles.c25af0e3.css",
    "revision": "b06c8408916652d393d7db354c09c06c"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.cb997ced.js",
    "revision": "1990c803aa10e422fb5dc09a861dd097"
  },
  {
    "url": "assets/js/10.9eb22756.js",
    "revision": "554e9099f5062fc0e55bd5abadeebd3a"
  },
  {
    "url": "assets/js/11.d0778b5c.js",
    "revision": "234f449c00bcf40b9b3815d43b6bf46e"
  },
  {
    "url": "assets/js/12.fb70efb1.js",
    "revision": "4dd1230c005d8c764fc91a4205e7290c"
  },
  {
    "url": "assets/js/13.62076938.js",
    "revision": "d1d11b59e76a248659bcfdb9e8c20ecd"
  },
  {
    "url": "assets/js/14.24d8bbf8.js",
    "revision": "07b70f706295dedbcef4cddcb9e24dd8"
  },
  {
    "url": "assets/js/15.bb12fb99.js",
    "revision": "d87ca8d79922388da107ac27d5526505"
  },
  {
    "url": "assets/js/3.b627a096.js",
    "revision": "3a86ada76048fd60328b2a4da4483a9b"
  },
  {
    "url": "assets/js/4.e2a37af1.js",
    "revision": "865b919b4b44bf09f34c37d2b00d5d07"
  },
  {
    "url": "assets/js/5.5e2a7bf2.js",
    "revision": "78c278c866d0ebbfa835c0c2cd032112"
  },
  {
    "url": "assets/js/6.09d8d7cf.js",
    "revision": "060c4d44c54bf830d6d16eb512ada9cd"
  },
  {
    "url": "assets/js/7.8e79b4f2.js",
    "revision": "09c9e3bf3a8643cd88fe0a4878fc804b"
  },
  {
    "url": "assets/js/8.aa33b570.js",
    "revision": "89582561bc7e47e4101d09db3ecb4ada"
  },
  {
    "url": "assets/js/9.a85abd34.js",
    "revision": "26ba3dca18672b45407450f4743b72ac"
  },
  {
    "url": "assets/js/app.0798a80f.js",
    "revision": "63fb6efd9d958894e5f6046919bdcc57"
  },
  {
    "url": "avatar.png",
    "revision": "00c11abc65a188cb4b5b8c5cc424f451"
  },
  {
    "url": "blogs/ce-shi.html",
    "revision": "37f3555464b052c99a9f1569546b45e5"
  },
  {
    "url": "blogs/java-concurrency/chapter-1.html",
    "revision": "a35740b473a16f80f924f76e2c2a1f67"
  },
  {
    "url": "blogs/java-concurrency/chapter-2.html",
    "revision": "3c939a7bc10554d214905f7c07aeae6f"
  },
  {
    "url": "categories/Concurrency/index.html",
    "revision": "10817b2c71b9d039d8044f05e0aacc01"
  },
  {
    "url": "categories/index.html",
    "revision": "c741b41280268d033054c6e739f3d6f0"
  },
  {
    "url": "categories/测试分类/index.html",
    "revision": "24e5abf71fb85ce3996a6908a6230f8c"
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
    "revision": "a0db7e40efc5d4fcd5e00ae78e6b7c69"
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
    "revision": "047c38742d9d656cd0bc6f0da5cbf1f9"
  },
  {
    "url": "timeline/index.html",
    "revision": "cb27ccd9e55f55453884dac6dd5b6c67"
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
