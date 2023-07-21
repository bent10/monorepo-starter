/// <reference types="vitest" />

import { join, resolve } from 'node:path'
import autoprefixer from 'autoprefixer'
import purgecss from '@fullhuman/postcss-purgecss'
import { defineConfig } from 'vite'

const ROOT_REPO = resolve(__dirname, '../../')

export default defineConfig({
  root: resolve(__dirname, 'src'),
  cacheDir: '../.cache/vite',
  resolve: {
    alias: {
      '~bootstrap': join(ROOT_REPO, 'node_modules/bootstrap')
    }
  },
  build: {
    outDir: '../dist',
    sourcemap: true,
    rollupOptions: {
      // external: ['bootstrap'],
      output: {
        // globals: {
        //   bootstrap: 'bootstrap'
        // },
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
    preprocessorOptions: {
      scss: {
        sourceMap: true
      }
    },
    postcss: {
      map: true,
      plugins: [
        autoprefixer(),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        purgecss({
          content: ['src/**/*.html'],
          // @see https://purgecss.com/safelisting.html
          safelist: {
            deep: [
              /(?:carousel\-item|collapsing|modal|offcanvas|popover|tooltip|active|fade|show|slide)/
            ]
          }
        })
      ]
    }
  },
  test: {
    globals: true,
    cache: {
      dir: '../.cache/vitest'
    },
    coverage: {
      reportsDirectory: '../coverage'
    },
    include: ['../test/**/*.test.ts'],
    environment: 'jsdom',
    setupFiles: '../test/config.ts'
  }
})
