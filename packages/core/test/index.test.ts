import { fooFn } from '../src/index.js'

describe('foo', () => {
  it('should result 3', () => {
    expect(fooFn(1, 2)).toBe(3)
  })
})
