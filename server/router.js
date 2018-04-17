const Router = require('koa-router')
const fs = require('fs')
const os = require('os')
const path = require('path')
const uuid = require('uuidv4')
const getJS = require('./exec')

const router = new Router()

router.post('/upload', async (ctx, next) => {
    const file = ctx.request.body.files.file
    const tempPath = path.join(os.tmpdir(), `${uuid()}.h`)
    const reader = fs.createReadStream(file.path)
    const stream = fs.createWriteStream(tempPath)
    let resolve
    const promise = new Promise((_resolve) => { resolve = _resolve })
    stream.on('finish', async () => {
        console.error(`${tempPath} are now complete.`)
        ctx.body = await getJS(tempPath)
        resolve()
        next()
    })
    reader.pipe(stream)
    console.log('uploading %s -> %s', file.name, stream.path)
    await promise
})

module.exports = router
