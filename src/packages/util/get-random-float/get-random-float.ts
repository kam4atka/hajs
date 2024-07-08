/**
 * Returns a floating-point number from a range of integers.
 * Source - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
 *
 * @param min - The floating-point number
 * @param max - The floating-point number
 *
 * @example
 * ```ts
 * getRandomFloat(1.5, 9.5);
 * ```
 *
 * @returns Floating-point number from the range of `min` and `max`
 *
 */
export function getRandomFloat (min: number, max: number) {
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  return lower + Math.random() * (upper - lower);
}
