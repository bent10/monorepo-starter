/// <reference types="vitest/globals" />

import vitePlugin from '../src/index.js'

describe('vite-plugin', () => {
  it('should call plugin', () => {
    const plugin = vitePlugin()
    expect(plugin.name).toBe('vite-plugin')
  })
})
