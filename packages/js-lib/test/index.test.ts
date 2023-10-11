/// <reference types="vitest/globals" />

import lib from '../src/index.js'

it('should call lib', () => {
  expect(lib('foo')).toBe('Hello foo!')
})
