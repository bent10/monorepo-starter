/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  cacheDir: '.cache/vite',
  build: {
    ssr: 'src/index.ts'
  },
  test: {
    globals: true,
    include: ['**/*.test.{ts,tsx}']
  }
})
