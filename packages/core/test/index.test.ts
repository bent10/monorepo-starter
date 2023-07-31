import foo from '../src/index.js'

describe('foo', () => {
  it('should call foo', () => {
    expect(foo('world')).toBe('Hello world!')
  })
})
