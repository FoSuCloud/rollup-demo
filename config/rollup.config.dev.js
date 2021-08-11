const serve =  require("rollup-plugin-serve")
const livereload = require('rollup-plugin-livereload')
const config = require('./rollup.config.js')
process.env.NODE_ENV = 'development';

const indexPath = 'public/index.html'
config.plugins = [
    ...config.plugins,
    livereload(),
    serve({
        host: 'localhost',
        port: 3000,
        onListening: function (server) {
            const address = server.address()
            const host = address.address === '::' ? 'localhost' : address.address
            const protocol = this.https ? 'https' : 'http'
            console.log(`Server listening at ${protocol}://${host}:${address.port}/${indexPath}`)
        }
    })
]

module.exports =  config
