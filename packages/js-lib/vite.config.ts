/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import cacheDir from 'vite-plugin-cachedir'

export default defineConfig({
  plugins: [cacheDir()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'myLib',
      formats: ['es', 'cjs', 'umd'],
      fileName: 'index'
    }
    // rollupOptions: {
    //   external: [],
    //   output: { globals: { } }
    // }
  },
  test: {
    globals: true,
    include: ['test/*.test.ts']
  }
})
