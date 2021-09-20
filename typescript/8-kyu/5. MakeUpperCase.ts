// 09-19-2021

/**
 * Write a function which converts the input string to uppercase.
 */

export const makeUpperCase = (str: string): string => str.toUpperCase();

console.log(makeUpperCase("hello") === "HELLO");
console.log(makeUpperCase("hello world") === "HELLO WORLD");
console.log(makeUpperCase("hello world !") === "HELLO WORLD !");
console.log(makeUpperCase("heLlO wORLd !") === "HELLO WORLD !");
console.log(makeUpperCase("1,2,3 hello world!") === "1,2,3 HELLO WORLD!");

export function makeUpperCase1(str: string): string {
  return str.toUpperCase();
}

export const makeUpperCase2 = Function.prototype.call.bind(
  String.prototype.toUpperCase
);

let str = "Helollo!";
export function makeUpperCase3(str: string) {
  return str.toUpperCase();
}
