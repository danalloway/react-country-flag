import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
            exports: 'default'
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        postcss({
            modules: true
        }),
        url(),
        svgr(),
        typescript(),
        babel({
            babelHelpers: 'external',
            exclude: 'node_modules/**',
            plugins: ['@babel/external-helpers'],
            extensions: ['.js', '.ts', '.tsx']
        }),
        resolve(),
        commonjs()
    ]
}
