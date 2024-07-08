import {describe, test, expect} from 'vitest';
import {getRandomFloat} from './get-random-float.js';

describe('Function getRandomFloat should return random float from the transmitted range if the function receives ...', () => {
  test(
    'two positive integers in the correct sequence',
    () => {
      const result = getRandomFloat(1, 2);

      expect(result).toBeGreaterThan(1);
      expect(result).toBeLessThan(2);
    });

  test(
    'one positive and one negative integers in the correct sequence',
    () => {
      const result = getRandomFloat(-1, 1);

      expect(result).toBeGreaterThan(-1);
      expect(result).toBeLessThan(1);
    });

  test(
    'two negative integers in the correct sequence',
    () => {
      const result = getRandomFloat(-2, -1);

      expect(result).toBeGreaterThan(-2);
      expect(result).toBeLessThan(-1);
    });

  test(
    'two positive floats in the correct sequence',
    () => {
      const result = getRandomFloat(1.1, 2.2);

      expect(result).toBeGreaterThan(1.1);
      expect(result).toBeLessThan(2.2);
    });

  test(
    'one positive float and one positive integer in the correct sequence',
    () => {
      const result = getRandomFloat(1.1, 2);

      expect(result).toBeGreaterThan(1.1);
      expect(result).toBeLessThan(2);
    });

  test(
    'one positive and one negative floats in the correct sequence',
    () => {
      const result = getRandomFloat(-1.1, 1.1);

      expect(result).toBeGreaterThan(-1.1);
      expect(result).toBeLessThan(1.1);
    });

  test(
    'two positive integers in the reverse sequence',
    () => {
      const result = getRandomFloat(3, 1);

      expect(result).toBeGreaterThan(1);
      expect(result).toBeLessThan(3);
    });

  test(
    'two negative integers in the reverse sequence',
    () => {
      const result = getRandomFloat(-1, -3);

      expect(result).toBeGreaterThan(-3);
      expect(result).toBeLessThan(-1);
    });

  test(
    'two positive floats in the reverse sequence',
    () => {
      const result = getRandomFloat(2.2, 1.1);

      expect(result).toBeGreaterThan(1.1);
      expect(result).toBeLessThan(2.2);
    });

  test(
    'two negative floats in the reverse sequence',
    () => {
      const result = getRandomFloat(-1.1, -2.2);

      expect(result).toBeGreaterThan(-2.2);
      expect(result).toBeLessThan(-1.1);
    });
});
