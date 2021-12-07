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
    "revision": "bcdbae035c1e8e2d5c3cdcf6ce07829f"
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
    "url": "assets/js/1.052ee216.js",
    "revision": "6b3dde7252b81bd11959afea55a0dc4e"
  },
  {
    "url": "assets/js/10.fde63a91.js",
    "revision": "5203d4b8ea04fb693f3de135926137f5"
  },
  {
    "url": "assets/js/11.0511d58f.js",
    "revision": "573edac51cd8f320c040f04a7c200d95"
  },
  {
    "url": "assets/js/12.f36989b6.js",
    "revision": "8499616579862f6e58c27f44e721301a"
  },
  {
    "url": "assets/js/13.5709aae1.js",
    "revision": "fa65c3ed0bb98927824959ad5ad90f87"
  },
  {
    "url": "assets/js/14.000d1202.js",
    "revision": "9c5ab211d6025d690a74a9672de39e19"
  },
  {
    "url": "assets/js/15.2e99242f.js",
    "revision": "32ca00d238cf1a7e4234d6fa0e9f2dc7"
  },
  {
    "url": "assets/js/16.77bcd7bc.js",
    "revision": "9f992c4b8fa8e02569abd3d2f94bcd05"
  },
  {
    "url": "assets/js/17.b3d37128.js",
    "revision": "06053450144be541da5a9e4eb4f19520"
  },
  {
    "url": "assets/js/18.e2940f35.js",
    "revision": "92bc54f28c672d260ba3df4f155d7a77"
  },
  {
    "url": "assets/js/19.a28593f6.js",
    "revision": "55b989d677231200deacdd5915135ab6"
  },
  {
    "url": "assets/js/20.d5cde162.js",
    "revision": "4040fdc665a40e01694ab54b66dbc8d8"
  },
  {
    "url": "assets/js/3.ad763f5a.js",
    "revision": "e7535bae6c309951e4eca65ee610bd2e"
  },
  {
    "url": "assets/js/4.470c85d4.js",
    "revision": "45df57b1e540ea667314b5531d6290f4"
  },
  {
    "url": "assets/js/5.fd1a946d.js",
    "revision": "5c1a68cd01dac2e5dacb9d2b51b963f7"
  },
  {
    "url": "assets/js/6.8896b213.js",
    "revision": "97a0181f44ac0b5ab5960b480e9ecf4f"
  },
  {
    "url": "assets/js/7.a20b9274.js",
    "revision": "c07c592e70a64fe7be2ca4fcf606e994"
  },
  {
    "url": "assets/js/8.7912c1b2.js",
    "revision": "ef58d25b1bd5c7154ed76b0f41d65e3a"
  },
  {
    "url": "assets/js/9.f26f4d54.js",
    "revision": "d6c6595519e94f800cb64ccd18a40585"
  },
  {
    "url": "assets/js/app.fe943ec7.js",
    "revision": "a7dd48ee715b09afaf3278ff23ba4a58"
  },
  {
    "url": "avatar.png",
    "revision": "00c11abc65a188cb4b5b8c5cc424f451"
  },
  {
    "url": "blogs/ce-shi.html",
    "revision": "c0412cd886dd85af9835a62824cd8daa"
  },
  {
    "url": "blogs/java-concurrency/chapter-1.html",
    "revision": "77cb2938ae238a7cf775f963b738a9fd"
  },
  {
    "url": "blogs/java-concurrency/chapter-2-1.html",
    "revision": "ae5069f2dc38c808d5e56b7126f30223"
  },
  {
    "url": "blogs/java-concurrency/chapter-2-2.html",
    "revision": "dc205e6caf34430238dd691cb19555a5"
  },
  {
    "url": "blogs/java-concurrency/chapter-3.html",
    "revision": "80ade8698a43642351e1bf99817968a9"
  },
  {
    "url": "blogs/problems/leetcode/142-chong-pai-lian-biao.html",
    "revision": "0acdb8bd3b8dc3646a1645967311223c"
  },
  {
    "url": "blogs/problems/leetcode/31-xia-yi-ge-pai-lie.html",
    "revision": "10c668815524043b428c82fcfccc6a00"
  },
  {
    "url": "categories/Concurrency/index.html",
    "revision": "3100adaa53584a0e26d9eafeeea7eb57"
  },
  {
    "url": "categories/index.html",
    "revision": "f3e60a55abd4eb8a08cba8a73d272604"
  },
  {
    "url": "categories/Problems/index.html",
    "revision": "ee62b6f0f3f011f12fe6af1f81687f72"
  },
  {
    "url": "categories/测试分类/index.html",
    "revision": "c61f27c12b9a9fab1d4bb3798d164f92"
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
    "revision": "4158212c38096eeaa5ddf29d4f3c9d55"
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
    "revision": "521c7ad598eeeb1f35418dddba452fef"
  },
  {
    "url": "tag/全排列/index.html",
    "revision": "b71f907f801230a30cb7aa23bdeb1480"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f9bc45da628cbfbcc936e8eba61b2601"
  },
  {
    "url": "tag/快慢指针/index.html",
    "revision": "c0eee2a0cd0d1ee1c80c34cf228e0e0c"
  },
  {
    "url": "tag/链表/index.html",
    "revision": "af6aa38ca0cc169b546a52144c09ef30"
  },
  {
    "url": "timeline/index.html",
    "revision": "21d197b2e808186e30fd45d11b063ed4"
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
