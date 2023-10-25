import { foo } from "./foo.js";

export function bar(): number {
  return foo() + 10
}