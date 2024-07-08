import {describe, expect, test} from 'vitest';
import {ValidationError} from './validation-error.js';

const validationMessage = 'Validation is fail';

const validationError = {
  property: 'price',
  messages: ['price is must be a number']
};

const wrongError = 'Not found';

describe('ValidationError must return custom Error with specified message', () => {
  test(
    'ValidationError should get message and validation\'s errors and return custom Error with that message',
    () => {
      const throwError = () => {
        throw new ValidationError(
          validationMessage,
          [validationError]
        );
      };

      expect(() => throwError())
        .toThrowError(new Error(validationMessage));
      expect(() => throwError())
        .not
        .toThrowError(new Error(wrongError));
    }
  );
});
