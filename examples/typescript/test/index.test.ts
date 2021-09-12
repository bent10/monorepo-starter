import { sum } from '..'

beforeAll(() => {
  /* Runs once before all tests */
})
afterAll(() => {
  /* Runs once after all tests */
})

beforeEach(() => {
  /* Runs before each test */
})
afterEach(() => {
  /* Runs after each test */
})

describe('Maths', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
