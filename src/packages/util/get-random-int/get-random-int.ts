/**
 * Returns an integer from the range of integers.
 * Source - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
 *
 * @param min - The integer
 * @param max - The integer
 *
 * @example
 * ```ts
 * getRandomInt(1, 9);
 * ```
 *
 * @returns Integer from the range of `min` and `max`
 *
 */
export function getRandomInt(min: number, max: number) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
}
