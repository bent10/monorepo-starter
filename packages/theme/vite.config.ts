/// <reference types="vitest" />

import { resolve } from 'node:path'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import cacheDir from 'vite-plugin-cachedir'
import purgeCSS from 'vite-plugin-purge'

const nodejsPath = (dir: string) => {
  return resolve(__dirname, '../../node_modules', dir)
}

export default defineConfig({
  resolve: {
    alias: { '~bootstrap': nodejsPath('bootstrap') }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['bootstrap'],
      output: {
        globals: {
          bootstrap: 'bootstrap'
        },
        assetFileNames({ name = '' }) {
          if (name === 'index.css' || name === 'index.css.map') {
            return 'css/theme.[ext]'
          }

          return `[name].[ext]`
        },
        entryFileNames({ name }) {
          if (name === 'index') {
            return 'js/theme.js'
          }

          return 'js/[name].js'
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
      content: ['*.html'],
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
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    setupFiles: 'test/config.ts'
  }
})
