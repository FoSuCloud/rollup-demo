const config = require('./rollup.config.js');
const { terser } = require('rollup-plugin-terser');
process.env.NODE_ENV = 'production';

config.output.sourcemap = false;
config.plugins = [...config.plugins, terser()];
module.exports = config;
