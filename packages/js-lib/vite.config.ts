/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig, type BuildOptions } from 'vite'

export default defineConfig(({ command, ssrBuild }) => {
  const isBuildLib = command === 'build' && !ssrBuild
  const build: BuildOptions = {}

  if (isBuildLib) {
    Object.assign(build, <BuildOptions>{
      emptyOutDir: false,
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'MyLib',
        formats: ['umd'],
        fileName: 'index'
      }
      // rollupOptions: {
      //   external: ['vue'],
      //   output: { globals: { vue: 'Vue' } }
      // }
    })
  }

  return {
    build,
    test: {
      globals: true,
      include: ['test/*.test.ts']
    }
  }
})
