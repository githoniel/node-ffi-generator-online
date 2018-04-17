const { exec } = require('child_process')

module.exports = function getJS(path) {
    exec(`ffi-generate -f ${path} -l libmyLibrary`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return error
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
        return stdout
    })
}
