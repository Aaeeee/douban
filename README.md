# douban

> A Vue.js project

## 改动

1. api封装：所有访问豆瓣的api，独立到一个文件内，并且使用axios，在modules中引用  
2. 路由  
3. 跨域  
4. 一些页面修改，如search页面原来只显示查询movie,现在显示movie/book/music三种查询结果 
5.  部分验证
6. 错误修复：group组件  

---
#### 未改动的部分
> 大部分组件、样式、排版

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
