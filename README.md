# ffi-online

> 在线转换C头文件到node-ffi描述文件

# Summary

because [node-ffi-generate](https://github.com/tjfontaine/node-ffi-generate) require Linux environment，so I write this project for guys using Windows.

## Server Setup

CentOS7 on Vultr
``` bash
sudo yum install clang
yarn global add ffi-generate
yarn global add libclang
yarn global add pm2
pm2 start server/index.js
```

## FrontEnd Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
