// 09-20-2021

/**
 * Write a function, which takes a non-negative integer (seconds) as input
 * and returns the time in a human-readable format (HH:MM:SS)
 *
 *      HH = hours, padded to 2 digits, range: 00 - 99
 *      MM = minutes, padded to 2 digits, range: 00 - 59
 *      SS = seconds, padded to 2 digits, range: 00 - 59
 *
 * The maximum time never exceeds 359999 (99:59:59)
 *
 * You can find some examples in the test fixtures.
 */

export const humanReadable = (seconds: number): string => {
  let currentTime = seconds,
    s = 0,
    m = 0,
    h = 0;

  while (currentTime) {
    if (currentTime < 60) {
      s += currentTime;
    } else {
      s += 59;
    }
    if (s >= 60) {
      s -= 60;
      m += 1;
    }
    if (m >= 60) {
      m -= 60;
      h += 1;
    }
    if (currentTime >= 59) {
      currentTime -= 59;
    } else {
      currentTime -= currentTime;
    }
  }

  return `${h > 9 ? h : `0${h}`}:${m > 9 ? m : `0${m}`}:${s > 9 ? s : `0${s}`}`;
};

console.log(humanReadable(0) === "00:00:00");
console.log(humanReadable(5) === "00:00:05");
console.log(humanReadable(60) === "00:01:00");
console.log(humanReadable(86399) === "23:59:59");
console.log(humanReadable(359999) === "99:59:59");

//
export function humanReadable1(seconds: number): string {
  const minutes = Math.floor(seconds / 60);

  const onlySeconds = seconds % 60;
  const onlyMinutes = minutes % 60;
  const onlyHours = Math.floor(minutes / 60);

  return [onlyHours, onlyMinutes, onlySeconds].map(formatTime1).join(":");
}

const formatTime1 = (time: number): string =>
  time >= 10 ? time.toString() : `0${time}`;

const format2 = (n: number) => String(Math.floor(n)).padStart(2, "00");

export function humanReadable2(seconds: number): string {
  const h = seconds / 3600;
  const m = (seconds % 3600) / 60;
  const s = (seconds % 3600) % 60;

  return [h, m, s].map(format2).join(":");
}

export function humanReadable3(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  const pad = (n: number) => `${n}`.padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds % 60)}`;
}
