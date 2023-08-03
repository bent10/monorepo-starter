/// <reference types="vitest" />

import { join, resolve } from 'node:path'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import cacheDir from 'vite-plugin-cachedir'
import purgeCSS from 'vite-plugin-purge'

const nodejsPath = (dir: string) => {
  const root = resolve(__dirname, '../../node_modules')

  return join(root, dir)
}

export default defineConfig({
  appType: 'mpa',
  root: resolve(__dirname, 'src'),
  resolve: {
    alias: { '~bootstrap': nodejsPath('bootstrap') }
  },
  build: {
    outDir: '../dist',
    sourcemap: true,
    rollupOptions: {
      external: ['bootstrap'],
      output: {
        globals: {
          bootstrap: 'bootstrap'
        },
        assetFileNames({ name = '' }) {
          if (name === 'index.css' || name === 'index.css.map') {
            return 'assets/css/theme.[ext]'
          }

          return `assets/[name].[ext]`
        },
        entryFileNames({ name }) {
          if (name === 'index') {
            return 'assets/js/theme.js'
          }

          return 'assets/js/[name].js'
        }
      }
    }
  },
  css: {
    preprocessorOptions: { scss: { sourceMap: true } },
    postcss: { map: true, plugins: [autoprefixer()] }
  },
  plugins: [
    cacheDir(),
    // enable purging only in production
    purgeCSS({
      content: ['src/**/*.html'],
      safelist: {
        deep: [
          // preserve specific CSS classes.
          /(?:carousel\-item|collapsing|modal|offcanvas|popover|tooltip|active|fade|show|slide)/
        ]
      }
    })
  ],
  test: {
    globals: true,
    include: ['../test/**/*.test.ts'],
    environment: 'jsdom',
    setupFiles: '../test/config.ts'
  }
})
