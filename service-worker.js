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
    "revision": "fef09187d123b3b375caa94d81bc9d37"
  },
  {
    "url": "assets/css/0.styles.9349df08.css",
    "revision": "6de303ca93a35a7d7e4bf009ff21c30b"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.10824af7.woff",
    "revision": "10824af77e9961cfd548c8a458f10851"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.56573229.ttf",
    "revision": "56573229753fad48910bda2ea1a6dd54"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",
    "revision": "66c678209ce93b6e2b583f02ce41529e"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",
    "revision": "497bf407c4c609c6cf1f1ad38f437f7f"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",
    "revision": "e6fb499fc8f9925eea3138cccba17fff"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",
    "revision": "40934fc076960bb989d590db044fef62"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",
    "revision": "796f3797cdf36fcaea18c3070a608378"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",
    "revision": "b9d7c4497cab3702487214651ab03744"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",
    "revision": "97a699d83318e9334a0deaea6ae5eda2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",
    "revision": "e435cda5784e21b26ab2d03fbcb56a99"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",
    "revision": "f9e6a99f4a543b7d6cad1efb6cf1e4b1"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.4cdba646.woff",
    "revision": "4cdba6465ab9fac5d3833c6cdba7a8c3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",
    "revision": "8e431f7ece346b6282dae3d9d0e7a970"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",
    "revision": "a9382e25bcf75d856718fcef54d7acdb"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",
    "revision": "52fb39b0434c463d5df32419608ab08a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",
    "revision": "5f875f986a9bce1264e8c42417b56f74"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",
    "revision": "d873734390c716d6e18ff3f71ac6eb8b"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",
    "revision": "39349e0a2b366f38e2672b45aded2030"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.65297062.woff2",
    "revision": "652970624cde999882102fa2b6a8871f"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",
    "revision": "8ffd28f6390231548ead99d7835887fa"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.818582da.ttf",
    "revision": "818582dae57e6fac46202cfd844afabb"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",
    "revision": "f1cdb692ee31c10b37262caffced5271"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",
    "revision": "f8a7f19f45060f7a177314855b8c7aa3"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",
    "revision": "1320454d951ec809a7dbccb4f23fccf0"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",
    "revision": "48155e43d9a284b54753e50e4ba586dc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",
    "revision": "6589c4f1f587f73f0ad0af8ae35ccb53"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",
    "revision": "d8b7a801bd87b324efcbae7394119c24"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",
    "revision": "ed7aea12d765f9e2d0f9bc7fa2be626c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",
    "revision": "fe5ed5875d95b18c98546cb4f47304ff"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",
    "revision": "0e897d27f063facef504667290e408bd"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",
    "revision": "ad546b4719bcf690a3604944b90b7e42"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",
    "revision": "f2ac73121357210d91e5c3eaa42f72ea"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",
    "revision": "e934cbc86e2d59ceaf04102c43dc0b50"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",
    "revision": "ef725de572b71381dccf53918e300744"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",
    "revision": "f60b4a34842bb524b562df092917a542"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",
    "revision": "1ac3ed6ebe34e473519ca1da86f7a384"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",
    "revision": "3243452ee6817acd761c9757aef93c29"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",
    "revision": "5f8637ee731482c44a37789723f5e499"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",
    "revision": "a189c37d73ffce63464635dc12cbbc96"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",
    "revision": "a82fa2a7e18b8c7a1a9f6069844ebfb9"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",
    "revision": "0d8d9204004bdf126342605f7bbdffe6"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",
    "revision": "1fdda0e59ed35495ebac28badf210574"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",
    "revision": "27a23ee69999affa55491c7dab8e53bf"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",
    "revision": "0e0460587676d22eae09accd6dcfebc6"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",
    "revision": "6bf4287568e1d3004b54d5d60f9f08f9"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",
    "revision": "b8b8393d2e65fcebda5fa99fa3264f41"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.85029911.js",
    "revision": "6553a91147e3b505e62d54c938a14cc6"
  },
  {
    "url": "assets/js/10.420f5aa7.js",
    "revision": "a9cc1acd0dad348fcc1ea6f1120254a4"
  },
  {
    "url": "assets/js/11.a70e7755.js",
    "revision": "b2b1dc1091571677d9fb3be4d03632dd"
  },
  {
    "url": "assets/js/12.06716ca3.js",
    "revision": "c8bffaa64f21cdb4c1395a915c9319fc"
  },
  {
    "url": "assets/js/13.8efe4eae.js",
    "revision": "8da1888b306c4121d52f07a231cd78eb"
  },
  {
    "url": "assets/js/14.90b4b63f.js",
    "revision": "e346f1f2d9d2695c60cb27ff1fdc258d"
  },
  {
    "url": "assets/js/15.be3819d3.js",
    "revision": "93c2834a37e446b799b567ef4dacfd5a"
  },
  {
    "url": "assets/js/16.92f2847c.js",
    "revision": "4308415a63340d5ac6fb3525aac9a454"
  },
  {
    "url": "assets/js/17.b3d37128.js",
    "revision": "06053450144be541da5a9e4eb4f19520"
  },
  {
    "url": "assets/js/18.a25cc2ad.js",
    "revision": "01f390a788243f49aece460b5ef5f43f"
  },
  {
    "url": "assets/js/19.4435dc16.js",
    "revision": "74a23b8e406f0d659840b465a61748e6"
  },
  {
    "url": "assets/js/20.dfdb7598.js",
    "revision": "7e298befbae6ceed80bf9d9e7cf70440"
  },
  {
    "url": "assets/js/3.4672541b.js",
    "revision": "d914e6062c3c8074b8340293873775e1"
  },
  {
    "url": "assets/js/4.3b177f4f.js",
    "revision": "7d3ba4eae44f3b2bc95f35ae17910646"
  },
  {
    "url": "assets/js/5.694a56c4.js",
    "revision": "5912703b1548d1c92fcb2d99e7915750"
  },
  {
    "url": "assets/js/6.85bd930e.js",
    "revision": "96d0d8b60a8151e951ae5f6274b4557a"
  },
  {
    "url": "assets/js/7.b52beb1d.js",
    "revision": "54afa79fe032f7fa167120fa8511466f"
  },
  {
    "url": "assets/js/8.94ff9e64.js",
    "revision": "a84ca4dbd3833ab80efd1df5c1aeec98"
  },
  {
    "url": "assets/js/9.52261b6b.js",
    "revision": "781e69a188dcda503b2dad6191db8cbd"
  },
  {
    "url": "assets/js/app.bcb287c5.js",
    "revision": "ec15f3646df638fbb472a7edbc2c6f5e"
  },
  {
    "url": "avatar.png",
    "revision": "00c11abc65a188cb4b5b8c5cc424f451"
  },
  {
    "url": "blogs/ce-shi.html",
    "revision": "5ef0688250dedc9023492b87c17f371a"
  },
  {
    "url": "blogs/java-concurrency/chapter-1.html",
    "revision": "333c2bef137692f0513099ee999f4713"
  },
  {
    "url": "blogs/java-concurrency/chapter-2-1.html",
    "revision": "f0142ce6abef3d0c46527ec872fabdd3"
  },
  {
    "url": "blogs/java-concurrency/chapter-2-2.html",
    "revision": "2f03cc7ec9157ebabc7d0ea33732e8a6"
  },
  {
    "url": "blogs/java-concurrency/chapter-3.html",
    "revision": "da1b8f40b00be7bbbcbcad7184157bf4"
  },
  {
    "url": "blogs/problems/leetcode/142-chong-pai-lian-biao.html",
    "revision": "5ffaf059d06ca5f48e8bee5b4b5f7db1"
  },
  {
    "url": "blogs/problems/leetcode/31-xia-yi-ge-pai-lie.html",
    "revision": "65ec0ad792e1b3c0a0ce45aca8e6f8c7"
  },
  {
    "url": "categories/Concurrency/index.html",
    "revision": "67dd30523877f29c85379e72619c8811"
  },
  {
    "url": "categories/index.html",
    "revision": "9a8a813d0efe7fcde96f69b049594d47"
  },
  {
    "url": "categories/Problems/index.html",
    "revision": "4555f712d1de5cc2f95471ed74801dc5"
  },
  {
    "url": "categories/测试分类/index.html",
    "revision": "dc97b336e2794435ac1a43f84072f507"
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
    "revision": "9de7f1cbe4c4877d1870a12713155d03"
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
    "revision": "792850318df9af2179fdee14e91d3e19"
  },
  {
    "url": "tag/全排列/index.html",
    "revision": "b63d7098ca7d8c93d140401c834d924d"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "59fc74bdb0b1a487cc17d0a41d6f7a99"
  },
  {
    "url": "tag/快慢指针/index.html",
    "revision": "e812c4a78184d1e542f15413bb351e12"
  },
  {
    "url": "tag/链表/index.html",
    "revision": "6f19dc0223eec86e51fa4bc9ff47d846"
  },
  {
    "url": "timeline/index.html",
    "revision": "1c9dfef2851b0edcf3721e26f40a8163"
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
