import { bar, echo } from "./src/bar.js"

console.log(bar())
console.log(await echo("foobar"))