import lib from '../src/index.js'

describe('lib', () => {
  it('should call lib', () => {
    expect(lib('foo')).toBe('Hello foo!')
  })
})
