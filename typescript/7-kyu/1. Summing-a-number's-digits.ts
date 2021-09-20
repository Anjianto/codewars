// 09-20-2021

/**
 * Write a function named sumDigits which takes a number as input and
 * returns the sum of the absolute value of each of the number's decimal digits.
 *
 * For example: (Input --> Output)
 *
 *      10 --> 1
 *      99 --> 18
 *      -32 --> 5
 *
 * Let's assume that all numbers in the input will be integer values.
 */

export const sumDigits = (n: number): number =>
  Math.abs(n)
    .toString()
    .split("")
    .map((v) => Number(v))
    .reduce((prev, cv) => prev + cv);

console.log(sumDigits(10) === 1);
console.log(sumDigits(99) === 18);
console.log(sumDigits(-32) === 5);

export function sumDigits1(number: number): number {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((acc, digit) => parseInt(digit) + acc, 0);
}

export function sumDigits2(number: number): number {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((a, b) => a + +b, 0);
}

export function sumDigits3(number: number): number {
  return String(number)
    .split("")
    .filter((string) => string !== "-")
    .map((string) => parseInt(string))
    .reduce((acc, curr) => acc + curr);
}
