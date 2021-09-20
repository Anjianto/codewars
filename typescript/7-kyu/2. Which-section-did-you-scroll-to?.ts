// 09-20-2021

/**
 * Your website is divided vertically in sections,
 * and each can be of different size (height).
 * You need to establish the section index (starting at 0) you are at,
 * given the scrollY and sizes of all sections.
 * Sections start with 0, so if first section is 200 high,
 * it takes 0-199 "pixels" and second starts at 200.
 *
 * Example:
 *
 *    getSectionIdFromScroll( 300, [300,200,400,600,100] )
 *    will output number 1 as it's the second section.
 *
 *    getSectionIdFromScroll( 1600, [300,200,400,600,100] )
 *    will output number -1 as it's past last section.
 *
 * Given the scrollY integer (always non-negative) and
 * an array of non-negative integers (with at least one element),
 * calculate the index (starting at 0) or -1
 * if scrollY falls beyond last section (indication of an error).
 */

// #2
export const getSectionId = (scroll: number, sizes: number[]): number => {
  let currentValue = 0;
  return sizes.findIndex((v) => {
    currentValue += v;
    return currentValue - 1 >= scroll;
  });
};

console.log(getSectionId(1, [300, 200, 400, 600, 100]) === 0);
console.log(getSectionId(299, [300, 200, 400, 600, 100]) === 0);
console.log(getSectionId(300, [300, 200, 400, 600, 100]) === 1);
console.log(getSectionId(1599, [300, 200, 400, 600, 100]) === 4);
console.log(getSectionId(1600, [300, 200, 400, 600, 100]) === -1);

export const getSectionId1 = (n: number, a: number[]) =>
  a.findIndex((x: number) => (n -= x) < 0);

export function getSectionId3(scroll: number, sizes: number[]): number {
  let total: number = 0;
  let i: number = 0;
  while (scroll >= total) {
    total += sizes[i];
    i++;
  }
  return i == sizes.length + 1 ? -1 : i - 1;
}
