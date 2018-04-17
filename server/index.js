const logger = require('koa-logger')
const serve = require('koa-static')
const koaBody = require('koa-body')
const Koa = require('koa')
const cors = require('koa2-cors')
const router = require('./router')

const app = new Koa()
const path = require('path')

app.use(cors())

app.use(logger())

app.use(koaBody({ multipart: true }))
// serve files from ./public
app.use(router.routes())
app.use(router.allowedMethods())

app.use(serve(path.join(__dirname, '../dist')))

// listen
app.listen(3131)
console.log('listening on port 3131')
