import type { Plugin } from 'vite'

export interface PluginFooOptions {
  bar?: unknown
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function pluginFoo(options?: PluginFooOptions): Plugin {
  return {
    name: 'plugin-foo',
    enforce: 'post'
  }
}
