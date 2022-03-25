# webpack 前端工程化以及优化

## 区分生产环境与开发环境

## js 分包

1. 入口分包 entry dependOn
2. [splitChunks](https://webpack.docschina.org/plugins/split-chunks-plugin/)

## import 动态引入

[魔法注释分包](https://webpack.docschina.org/api/module-methods#magic-comments)

```js
// 魔法注释（magic comments）
// 在.js文件中生效
import(
  /* webpackChunkName: format */
  /* webpackPrefetch: true */
  "./format.js"
).then(() => {});
```

## optimezation.runtimeChunk

runtimeChunk:各个模块之间的引用和加载的逻辑相关的代码默认内嵌入每个 entry 入口
如果抽离出来的 runtimeChunk 体积小可以可以内嵌附带在 html 中加载出来

## externals CDN

第三方库 cdn 抽离, unpkg, bootcdn

## shimming（webpack 不推荐使用该功能）

第三方库使用其他的库 但是没有导入，webpack.ProvidePlugin

## css 抽离

MiniCssExtractPlugin,支持 webpack 4.x 以上

## hash、contenthash、chunkhash

1. hash 是跟整个项目的构建相关，构建生成的文件 hash 值都是一样的，所以 hash 计算是跟整个项目的构建相关，同一次构建过程中生成的 hash 都是一样的，只要项目里有文件更改，整个项目构建的 hash 值都会更改

2. chunkhash 根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的 hash 值.由于采用 chunkhash，所以项目主入口文件 main.js 及其对应的依赖文件 main.css 由于被打包在同一个模块，所以共用相同的 chunkhash，但是公共库由于是不同的模块，所以有单独的 chunkhash。这样子就保证了在线上构建时只要文件内容没有更改就不会重复构建

3. contenthash 表示由文件内容产生的 hash 值，内容不同产生的 contenthash 值也不一样.文件内容不发生改变就不会受影响

## DLL(不推荐，react 脚手架 和 vue 脚手架都移除了)

DLL 全程是动态链接库（Dynamic Link Library），是为软件在 Windows 中实现共享函数库的一种实现方式；那么 webpack 中也有内置 DLL 的功能，它指的是我们可以将可以共享，并且不经常改变的代码，抽取成一个共享的库；这个库在编译之后会被引入到其他项目的代码中,不需要重新编译。

## terser 代码压缩

早期我们会使用 uglify-js 来压缩、丑化我们的 JavaScript 代码，但是目前已经不再维护，并且不支持 ES6+的
语法；Terser 是从 uglify-es fork 过来的，并且保留它原来的大部分 API 以及适配 uglify-es 和 uglify-js@3 等；也就是说，Terser 可以帮助我们压缩、丑化我们的代码，让我们的 bundle 变得更小。

`terser-webpack-plugin`

## tree shaking

## 概览

![webpack](./webpack1.jpg)
