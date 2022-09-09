
<img src="./static/logo.png" alt="Logo of the project" align="right" style="width:20%">

# Board_Game_Tool
 [![GitHub license](https://img.shields.io/github/license/RJiazhen/Board_Game_Tool)](https://github.com/RJiazhen/Board_Game_Tool/LICENSE)
来辅助游玩各种桌游的小程序工具

## 快速上手

使用微信扫描二维码打开小程序体验：

<img src="./static/wechat_QR_code.png" alt="Logo of the project" style="width:100px;">

当前已包含工具：
* 散樱乱武token计数工具

## 开发须知

本小程序基于[uniapp](https://uniapp.dcloud.net.cn/)框架进行开发，建议使用[HBuilderX](https://www.dcloud.io/hbuilderx.html)进行开发，如果需要编译为微信小程序需下载[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，可编译为不同平台程序。

clone项目到本地后，运行`npm install`安装依赖包

项目结构如下：
```
Board_Game_Tool:
├─common
│      saAreaClick.js // 散樱乱武区域点击mixin文件
├─components
│  ├─SA_player
│  │      SA_player.vue // 散樱乱武玩家区域组件
│  └─SA_shared
│          SA_shared.vue // 散樱乱武公共区域组件
├─pages
│  ├─about
│  │      about.vue  // 关于页面
│  └─home
│          home.vue  // 主页页面
├─static  // 一些静态资源
├─store
│      index.js  // store入口文件
│      sakura_arms.js // 散樱乱武store文件
└─subpkg
   └─sakura_arms
           sakura_arms.vue  // 散樱乱武页面

```

## TODO
未来更新方向：

- 散樱乱武token计数工具
  - [ ] 撤销操作功能；
  - [ ] 美化样式；
  - [ ] 单独添加扣血、扣装、扣气的功能按钮；
  - [ ] 优化回合切换的逻辑，使用执行基本行动也会切换回合；
  - [ ] 历史记录、查看与导出功能；
  - [ ] 针对不同女神特性添加额外功能（当前仅进行过基础包的测试）；

- 四季物语辅助工具
  - [ ] 投季节骰子功能
  - [ ] 四季轮转功能

## 许可

本项目基于[GPL-3.0](https://github.com/RJiazhen/Board_Game_Tool/blob/main/LICENSE)许可进行开源。
