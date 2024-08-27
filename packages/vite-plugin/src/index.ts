import type { Plugin } from 'vite'

export interface PluginOptions {
  bar?: unknown
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function pluginFoo(options?: PluginOptions): Plugin {
  return {
    name: 'vite-plugin'
  }
}
