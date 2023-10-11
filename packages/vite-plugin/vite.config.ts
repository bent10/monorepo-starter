/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import cacheDir from 'vite-plugin-cachedir'

export default defineConfig({
  plugins: [cacheDir()],
  build: {
    ssr: resolve(__dirname, 'src/index.ts'),
  },
  test: {
    globals: true,
    include: ['test/*.test.ts']
  }
})
