import {describe, test, expect} from 'vitest';
import {getRandomInt} from './get-random-int.js';

describe('Function getRandomInt should retrun integer from the transmitted range if the funcion receives ...', () => {
  test(
    'two positive integers in the correct sequence',
    () => {
      const result = getRandomInt(1, 2);

      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(2);
    }
  );

  test(
    'one posshould not be equal invalid payloaditive and one negative integers in the correct sequence',
    () => {
      const result = getRandomInt(-1, 1);

      expect(result).toBeGreaterThanOrEqual(-1);
      expect(result).toBeLessThanOrEqual(1);
    });

  test(
    'two negative integers in the correct sequence',
    () => {
      const result = getRandomInt(-2, -1);

      expect(result).toBeGreaterThanOrEqual(-2);
      expect(result).toBeLessThanOrEqual(-1);
    });

  test(
    'two positive floats in the correct sequence',
    () => {
      const result = getRandomInt(0.9, 2.2);

      expect(result).toBeGreaterThan(0.9);
      expect(result).toBeLessThan(2.2);
    });

  test(
    'one positive float and one positive integer in the correct sequence',
    () => {
      const result = getRandomInt(0.9, 3);

      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(3);
    });

  test(
    'one positive and one negative floats in the correct sequence',
    () => {
      const result = getRandomInt(-1.9, 2.2);

      expect(result).toBeGreaterThan(-1.9);
      expect(result).toBeLessThan(2.2);
    });

  test(
    'two positive integers in the reverse sequence',
    () => {
      const result = getRandomInt(3, 1);

      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(3);
    });

  test(
    'two negative integers in the reverse sequence',
    () => {
      const result = getRandomInt(-1, -3);

      expect(result).toBeGreaterThanOrEqual(-3);
      expect(result).toBeLessThanOrEqual(-1);
    });

  test(
    'two positive floats in the reverse sequence',
    () => {
      const result = getRandomInt(2.2, 0.9);

      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(2);
    });

  test(
    'two negative floats in the reverse sequence',
    () => {
      const result = getRandomInt(-0.9, -2.2);

      expect(result).toBeGreaterThanOrEqual(-2);
      expect(result).toBeLessThanOrEqual(-1);
    });
});
