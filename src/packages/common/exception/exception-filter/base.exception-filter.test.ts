import {beforeAll, beforeEach, describe, expect, test, vi} from 'vitest';
import {getMockReq, getMockRes} from 'vitest-mock-express';

import {LoggerInterface} from '../../logger/logger.interface.js';
import {ExceptionFilterInterface} from './exception-filter.interface.js';
import {BaseExceptionFilter} from './base.exception-filter.js';

const MESSAGE = 'Error';

let loggerService: LoggerInterface;
let baseExceptionFilter: ExceptionFilterInterface;

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

    baseExceptionFilter = new BaseExceptionFilter(loggerService);
  });

  beforeEach(() => {
    clearMockRes();
  });

  test(
    '"catch()" method should called with Error',
    () => {
      const cacheSpy = vi.spyOn(baseExceptionFilter, 'catch');

      expect(cacheSpy).not.toHaveBeenCalled();

      baseExceptionFilter.catch(Error(MESSAGE), request, res, next);

      expect(cacheSpy).toHaveBeenCalled();
      expect(cacheSpy).toHaveBeenCalledTimes(1);
      expect(cacheSpy).toHaveBeenCalledWith(new Error(MESSAGE), request, res, next);
    }
  );
});
