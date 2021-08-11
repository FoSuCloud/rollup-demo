const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { babel } = require('@rollup/plugin-babel');
const sass = require('rollup-plugin-sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const typescript = require('@rollup/plugin-typescript');
const alias = require('@rollup/plugin-alias');
const prettier = require('rollup-plugin-prettier');

const customResolver = nodeResolve({
    extensions: ['.js', '.ts', '.json', '.scss']
});
const path = require('path');
const projectRootDir = path.resolve(__dirname);

const prettierFile = path.resolve(projectRootDir, '..', '.prettierrc.js');

module.exports = {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        name: 'bundle',
        format: 'umd',
        sourcemap: true
    },
    plugins: [
        alias({
            entries: [
                {
                    find: '@',
                    replacement: path.resolve(projectRootDir, '..', 'src')
                },
                {
                    find: 'src',
                    replacement: path.resolve(projectRootDir, '..', 'src')
                }
            ],
            customResolver
        }),
        sass({
            output: 'dist/bundle.css',
            processor: (css) =>
                postcss([autoprefixer])
                    .process(css)
                    .then((result) => result.css)
        }),
        prettier({ cwd: prettierFile, sourcemap: false }),
        typescript(),
        babel({ babelHelpers: 'bundled', exclude: '**/node_modules/**' }),
        nodeResolve(),
        commonjs()
    ]
};
