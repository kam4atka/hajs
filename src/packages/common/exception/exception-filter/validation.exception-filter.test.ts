import {beforeAll, beforeEach, describe, expect, test, vi} from 'vitest';
import {getMockReq, getMockRes} from 'vitest-mock-express';

import {ValidationError} from '../../../core/error';
import {LoggerInterface} from '../../logger/logger.interface.js';
import {ExceptionFilterInterface} from './exception-filter.interface.js';
import {ValidationExceptionFilter} from './validation.exception-filter.js';

const MESSAGE = 'Error';

const validationError = {
  property: 'price',
  messages: ['price is must be a number']
};

let loggerService: LoggerInterface;
let validationExceptionFilter: ExceptionFilterInterface;

const request = getMockReq();
const {res, next, clearMockRes} = getMockRes();

describe('The exceptionFilter\'s "catch()" method must be called with special parameters a certain number of times', () => {
  beforeAll(() => {
    loggerService = {
      debug: vi.fn(),
      error: vi.fn(),
      info: vi.fn(),
      warn: vi.fn()
    };

    validationExceptionFilter = new ValidationExceptionFilter(loggerService);
  });

  beforeEach(() => {
    clearMockRes();
  });

  test(
    '"catch()" method should called with ValidationError',
    () => {
      const cacheSpy = vi.spyOn(validationExceptionFilter, 'catch');

      expect(cacheSpy).not.toHaveBeenCalled();

      const error = new ValidationError(
        MESSAGE,
        [validationError]
      );

      validationExceptionFilter.catch(error, request, res, next);

      expect(cacheSpy).toHaveBeenCalled();
      expect(cacheSpy).toHaveBeenCalledTimes(1);
      expect(cacheSpy).toHaveBeenCalledWith(error, request, res, next);
    }
  );
});
