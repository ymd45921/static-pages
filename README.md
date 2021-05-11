# static-pages

一些有趣的页面，使用 Github Pages 和 Vercel 部署

大多数页面都是从各种渠道收集而来的，然后自己再进行适当的修改~~（二次开发）~~以供学习和娱乐的

起因是看到网上有些带佬~~同学~~平时也会收集一些有趣的小东西，觉得可能有点意思

现在这个仓库显得有点奇怪：`main` 分支下就是单纯的 HTML 页面，架个 HTTP 服务器就算是部署了，因为现在收集的前端页面大多都是这种比较原始的页面；如果之后有需求，可能会开新的分支或者是新的仓库。

## 收录内容

本仓库下现在包含的独立页面，截止于 2021/05/11 更新：

| 名称                   | 目录                           | 部署地址                                |
| ---------------------- | ------------------------------ | --------------------------------------- |
| 黄油画廊               | [*](gallery/index.html)        | https://pages.shiraha.cn/gallery        |
| UTSC 3D 元素周期表     | [*](periodic-table/index.html) | https://pages.shiraha.cn/periodic-table |
| 魔方游戏               | [*](rubiks-cube/index.html)    | https://pages.shiraha.cn/rubiks-cube    |
| 404 Page               | [*](404.html)                  | https://pages.shiraha.cn/404.html       |
| 调色板 Pure Color      | [*](color/index.html)          | https://pages.shiraha.cn/color          |
| ~~IPFS 文件上传/获取~~ | [*](ipfs/index.html)           | ~~https://pages.shiraha.cn/ipfs~~       |
| 便携式空调             | [*](ac/index.html)             | https://pages.shiraha.cn/ac             |

IPFS 文件上传获取使用的 API 已经失效，如果有新的 API 就恢复了再更新吧。

## 更新日志

### v0.0.1

收录了自己修改的画廊、魔方、UTSC 3D 元素周期表以及一个有点意思的 404 页面；可能还缺乏一个像这个 MD 一样的更加像模像样的 `index.html`，但是倒也问题不大；本来还想收录一个 MikuTap 的，毕竟它非常的花里胡哨——但是那个感觉有点意义不明，而且我也不会改动些什么==

UPD - `busuanzi` 二次开发：关联到 Vercel 之后好像每次推送——即使不是 `main` 分支的更新也会被自动地 Deploy，，并且还会保留旧版本，有一点恶心啊（）之后得想点办法解决一下，看着一堆老的 Deployment 就非常的烦躁，，看来以后还是不能用这个仓库作为开发实验仓库啊，反正仓库不嫌多，可以再建一个别的（

### v0.0.2

增加了 [YunYouJun](https://github.com/YunYouJun) 的便携式空调的静态页面；原仓库地址：https://github.com/YunYouJun/air-conditioner

增加了由 Github Page Jekyll 自动生成的基于 README.md 的 index.html