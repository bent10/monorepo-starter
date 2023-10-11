/// <reference types="vitest/globals" />

import pluginFoo from '../src/index.js'

describe('vite-plugin-foo', () => {
  it('should call plugin foo', () => {
    const plugin = pluginFoo()
    expect(plugin.name).toBe('plugin-foo')
  })
})
