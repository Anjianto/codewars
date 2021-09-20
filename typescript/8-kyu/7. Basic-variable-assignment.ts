// 09-20-2021

/**
 * This code should store "codewa.rs" as a variable called name
 * but it's not working. Can you figure out why?
 */

const a = "code";
const b = "wa.rs";
export const name = a + b;

console.log(name === "codewa.rs");

// #1
export const a1: string = "code";
export const b1: string = "wa.rs";
export const name1: string = a1 + b1;

// #2
/**
 * Fix the variables assignment.
 */
let a2: string = "code";
let b2: string = "wa.rs";
export let name2: string = a2 + b2;

// #3
let a3: string = "code",
  b3: string = "wa.rs";

export let name3: string = a3 + b3;
