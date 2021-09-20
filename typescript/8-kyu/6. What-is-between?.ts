// 09-19-2021

/**
 * Complete the function that takes two integers (a, b, where a < b)
 * and return an array of all integers between the input parameters, including them.
 *
 * For example:
 *
 *      a = 1
 *      b = 4
 *      --> [1, 2, 3, 4]
 */

// #4
export const between = (a: number, b: number): number[] => {
  let ArrayLength: number = b;

  if (a < 0 && b < 0) {
    ArrayLength = Math.abs(Math.abs(b) - Math.abs(a) - 1);
  } else if (a < 0) {
    ArrayLength = Math.abs(a) + 1 + Math.abs(b);
  } else if (a > 1) {
    ArrayLength = b - a + 1;
  } else {
    ArrayLength = b;
  }

  return new Array(ArrayLength).fill(a).map(() => a++);
};

console.log(between(0, 4));
console.log(between(1, 4));
console.log(between(2, 4));
console.log(between(1, 4).toString() === [1, 2, 3, 4].toString());
console.log(between(-2, 2));
console.log(between(-2, 2).toString() === [-2, -1, 0, 1, 2].toString());
console.log(between(14, 58));
console.log(between(-31, 42));
console.log(between(-64, -26));
console.log(between(-2, 2).toString() === [-2, -1, 0, 1, 2].toString());

export function between1(a: number, b: number): number[] {
  return Array.from({ length: b - a + 1 }, (_, index) => a + index);
}

export function between2(a: number, b: number): number[] {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

export function between3(a: number, b: number): number[] {
  return Array.from({ length: b - a + 1 }, (_, j) => j + a);
}
