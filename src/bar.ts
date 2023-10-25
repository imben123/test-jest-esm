import { foo } from "./foo.js";
import http from "http"

export function bar(): number {
  return foo() + 10
}

export function echo(string: string): Promise<string> {
  const baseURL = "http://postman-echo.com/get?str=" + string
  return new Promise<string>((resolve, reject) => {
    http.get(baseURL, response => {
      response.setEncoding('utf8');
      let result = ""
      response.on("data", (chunk) => {
        result += chunk
      })
      response.on("end", () => {
        resolve(JSON.parse(result).args.str)
      })
    }).on("error", (error) => {
      reject(error)
    })
  });
}
