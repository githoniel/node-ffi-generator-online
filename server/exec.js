const { exec } = require('child_process')

module.exports = async function getJS(path) {
    return new Promise((r) => {
        console.log(path)
        exec(`ffi-generate -f ${path} -l libmyLibrary`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`)
                r(error)
            }
            console.log(`stdout: ${stdout}`)
            console.log(`stderr: ${stderr}`)
            r(stdout)
        })
    })
}
