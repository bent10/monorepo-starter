import path from 'path'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

// `false` when rollup run with `--watch` option
const production = !process.env.ROLLUP_WATCH

const umdLibName = 'ExampleLib'
const input = './src/index.ts'
const extensions = ['.js', '.ts']
const banner = `/*
 * ${pkg.name} – ${pkg.description}
 * @license
 * Released under the ${pkg.license} License (c) ${new Date().getFullYear()}.
 */\n`

const setPlugins = (input, format = 'node') => {
  const ext = path.extname(input)
  const isTs = ext.includes('.ts')
  const isBrowser = format == 'browser'

  // if .ts?x, add typescript on the first index
  const plugins = [isTs && typescript({ jsx: 'preserve' })]

  plugins.push([
    // So Rollup can find external library
    // The ".ts" extension is required by plugin-typescript
    resolve({ extensions }),
    // So Rollup can convert external library to an ES module
    commonjs({ extensions }),
    isBrowser && babel({ babelHelpers: 'bundled' })
  ])

  // Minify browser build for production
  if (isBrowser && production) plugins.push(terser())

  return plugins
}

export default [
  // browser-friendly UMD build
  {
    input,
    output: {
      banner,
      sourcemap: true,
      name: umdLibName,
      file: pkg.browser[pkg.main],
      format: 'umd'
    },
    plugins: setPlugins(input, 'browser')
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input,
    external: pkg.dependencies ? Object.keys(pkg.dependencies) : [],
    plugins: setPlugins(input),
    output: [
      { banner, file: pkg.main, format: 'cjs' },
      { banner, file: pkg.module, format: 'es' }
    ]
  }
]
