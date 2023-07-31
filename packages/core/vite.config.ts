/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  cacheDir: '.cache/vite',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      formats: ['es', 'umd', 'iife'],
      fileName: 'index'
    }
    // rollupOptions: {
    //   external: ['vue'],
    //   output: { globals: { vue: 'Vue' } }
    // }
  },
  test: {
    globals: true,
    include: ['test/**/*.test.ts']
  }
})
