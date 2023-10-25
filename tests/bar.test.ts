import { jest } from "@jest/globals"

jest.mock("../src/bar.js", () => {
  const foo = () => 0
  return {
    foo,
    __esModule: true,
  }
})
const { bar } = await import("../src/bar.js")

test("bar", () => {
  const result = bar()
  expect(result).toEqual(10)
})

export {}
