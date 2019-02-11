<p align="center"><a href="https://blog.csdn.net/csdn_yudong/article/details/85250412"><img width="120" src="https://raw.githubusercontent.com/Neveryu/vue-cms/master/static/image/login-logo.png"></a></p>

<p align="center">基于 Vue 和 ElementUI 构建的企业级后台管理项目</p>

<p align="center">
  <a href="https://github.com/vuejs/vue" rel="nofollow" target="_blank">
    <img src="https://img.shields.io/badge/vue-2.5.2-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element" rel="nofollow" target="_blank">
    <img src="https://img.shields.io/badge/element--ui-2.0.11-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://travis-ci.org/Neveryu/vue-cms" rel="nofollow" target="_blank">
    <img src="https://travis-ci.org/Neveryu/vue-cms.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/Neveryu/vue-cms/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://neveryu.github.io/reward/index.html" target="_blank">
    <img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
  </a>
</p>

## 预览
在线体验：[https://git.io/fp9UM](https://neveryu.github.io/vue-cms/index.html)

## 简介
`vue-cms` 是一个企业级管理后台项目，基于 Vue 和 ElementUI构建。它使用了最新的前端技术栈，内置了i18n国际化解决方案，支持多语言，动态路由，权限验证，登录注册，等很多功能特性。

同时，它也是一个很好的学习项目，包含了一些常见问题的解决方案，比如：数据可视化，表单表格，导入导出，自定义组件，自定义指令，等等。

## 写在前面
请确保你安装了 [node](https://nodejs.org/en/) 和 [git](https://git-scm.com/)，与此同时，你应该对 [Vue](https://cn.vuejs.org/v2/guide/)、[Vuex](https://vuex.vuejs.org/zh/)、[Vue Router](https://router.vuejs.org/zh/)、[ES2015+](http://es6.ruanyifeng.com/)、[ElementUI](http://element-cn.eleme.io/#/zh-CN)有所了解。我们的请求有使用 [Mock.js](https://github.com/nuysoft/Mock/wiki/Getting-Started) 模拟，也有使用线上真实的接口数据，提前了解和学习这些知识会对使用本项目有很大的帮助。

## Build Setup

``` bash
# 克隆项目
git clone https://github.com/Neveryu/vue-cms.git

# 进入项目
cd vue-cms

# install dependencies
npm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# serve with hot reload at localhost:8080
npm start
```

浏览器访问 [http://localhost:8080](http://localhost:8080)

## 构建发布

```
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 功能
```
- 登录/注销
- 权限验证
- 多环境发布
- 动态侧边栏（支持多级路由）
- better-scroll
- 国际化多语言
- Screenfull全屏
- 列表拖拽
- Svg Sprite 图标
- Dashboard
- 本地mock数据
- Echarts 图表
- 导出excel
- 导出zip
- 前端可视化excel
- CountTo
- 自定义组件
```

## 截图
![](./resource/screenhot3.png)
![](./resource/screenhot1.png)
![](./resource/screenhot2.png)

## Online Demo

[在线 Demo](https://neveryu.github.io/vue-cms/index.html)

## Donate

如果你觉得这个项目帮助到了你，你可以帮作者买一杯果汁表示鼓励 :tropical_drink:

<img src="https://neveryu.github.io/reward/wechat-alipay.png" alt="donate" width="650">


## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License

[MIT](https://github.com/Neveryu/vue-cms/blob/master/LICENSE)

Copyright (c) 2017-present NeverYu