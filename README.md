# ffi-online

Generate node-ffi interface bindings from C++ header file Online

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
