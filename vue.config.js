module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:3000'// send on to my local express server from vue server.
    }
}