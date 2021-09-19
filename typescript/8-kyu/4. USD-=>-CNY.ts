// 09-19-2021

/**
 * Create a function that converts US dollars (USD) to Chinese Yuan (CNY).
 * The input is the amount of USD as an integer, and the output should be a string
 * that states the amount of Yuan followed by 'Chinese Yuan'
 *
 * For Example:
 *
 *      usdcny(15)  => '101.25 Chinese Yuan'
 *      usdcny(465) => '3138.75 Chinese Yuan'
 *
 * The conversion rate you should use is 6.75 CNY for every 1 USD.
 * All numbers should be represented as a string with 2 decimal places.
 * (e.g. "21.00" NOT "21.0" or "21")
 */

export const usdcny = (usd: number): string =>
  `${(usd * 6.75).toFixed(2)} Chinese Yuan`;

console.log(usdcny(15) === "101.25 Chinese Yuan");
console.log(usdcny(465) === "3138.75 Chinese Yuan");

export function usdcny1(usd: number): string {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

export function usdcny2(usd: number): string {
  let cny = usd * 6.75;
  let top = cny;
  let bottom = cny;
  while (top % 0.25 != 0 && bottom % 0.25 != 0) {
    top += 0.1;
    bottom -= 0.1;
  }
  let ready = String(top % 0.25 == 0 ? top.toFixed(2) : bottom.toFixed(2));
  return ready + " Chinese Yuan";
}

export function usdcny3(usd: number): string {
  const cny = usd * 6.75;
  return `${cny.toFixed(2)} Chinese Yuan`;
}
