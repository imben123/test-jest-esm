import { jest } from "@jest/globals"

jest.unstable_mockModule("../src/foo.js", () => {
  const foo = () => 0
  return {
    __esModule: true,
    foo
  }
})

jest.unstable_mockModule("http", () => {
  const get = (bundleURL: string, callback: (response: { setEncoding: () => boolean, on: (event: string, eventCallback: (arg0?: any) => void) => void }) => void) => {
    callback({
      setEncoding: () => true,
      on: (event: string, eventCallback: (arg0?: any) => void) => {
        switch (event) {
          case "data":
            eventCallback('{"args":{"str":"TEST"}}')
            break
          case "end":
            eventCallback(0)
            break
        }
      }
    })
    return {
      on: () => {}
    }
  }
  return {
    __esModule: true,
    default: { get }
  }
})

const { bar, echo } = await import("../src/bar.js")

test("bar", () => {
  const result = bar()
  expect(result).toEqual(10)
})

test("echo", async() => {
  const result = await echo("foobar")
  console.log(result)
  expect(result).toEqual("TEST")
})

export {}
