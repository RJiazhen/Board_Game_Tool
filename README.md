
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
.
├── common // 公共文件目录
│   ├── boardGameTool.scss // 桌游小工具通用样式文件
│   ├── sakuraArms.scss // 散樱乱武工具通用样式文件
│   └── showShareMenu.js // 显示分享菜单功能
├── components // 组件目录
│   ├── sa-area // 散樱乱武-单个区域组件
│   ├── sa-enhan-btn-add // 散樱乱武-添加付与牌按钮组件
│   ├── sa-enhan-btn-remove-all // 散樱乱武-全部付与牌-1按钮组件
│   ├── sa-enhan-card // 散樱乱武-付与牌组件
│   ├── sa-menu // 散樱乱武-中心菜单组件
│   ├── sa-player // 散樱乱武-单个玩家组件
│   └── sa-token-tip // 散樱乱武-token数量提示组件
├── pages // 一级页面目录
│   ├── about // 关于页面
│   └── home // 主页
├── static // 静态资源目录 包括各类公用图标
│   └── sakura_arms // 散樱乱武的各种公用图片、图标
├── store // store文件目录
│   └── sakuraArms.ts // 散樱乱武store文件
└── subpkg // 分包目录
    └── sakura_arms // 散樱乱武分包
```

## TODO
未来更新方向：

- 散樱乱武token计数工具
  - [ ] 撤销操作功能；
  - [ ] 历史记录、查看与导出功能；
  - [ ] 针对不同女神特性添加额外功能（当前仅进行过基础包的测试）；
  - [x] 美化样式；
  - [x] 单独添加扣血、扣装、扣气的功能按钮；

- 四季物语辅助工具
  - [ ] 投季节骰子功能
  - [ ] 四季轮转功能

## 许可

本项目基于[GPL-3.0](https://github.com/RJiazhen/Board_Game_Tool/blob/main/LICENSE)许可进行开源。
