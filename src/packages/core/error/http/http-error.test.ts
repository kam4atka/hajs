import {describe, expect, test} from 'vitest';
import {HttpError} from './http-error.js';

const httpErrorWithoutDetail = {
  statusCode: 404,
  message: 'Not found'
};

const httpErrorWithDetail = {
  statusCode: 401,
  message: 'Authorization fail',
  detail: 'details'
};

describe('HttpError must return custom Error with specified message', () => {
  test(
    'HttpError should get status and message and return custom Error with that message',
    () => {
      const throwError = () => {
        throw new HttpError(
          httpErrorWithoutDetail.statusCode,
          httpErrorWithoutDetail.message
        );
      };

      expect(() => throwError())
        .toThrowError(new Error(httpErrorWithoutDetail.message));
      expect(() => throwError())
        .not
        .toThrowError(new Error(httpErrorWithDetail.message));
    }
  );

  test(
    'HttpError should get status, message and details and return custom Error with that message',
    () => {
      const throwError = () => {
        throw new HttpError(
          httpErrorWithDetail.statusCode,
          httpErrorWithDetail.message,
          httpErrorWithDetail.detail
        );
      };

      expect(() => throwError())
        .toThrowError(new Error(httpErrorWithDetail.message));
      expect(() => throwError())
        .toThrowError(new Error(httpErrorWithDetail.message));
    }
  );
});
