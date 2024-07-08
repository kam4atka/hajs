import {beforeAll, beforeEach, describe, expect, test, vi} from 'vitest';
import {getMockReq, getMockRes} from 'vitest-mock-express';

import {HttpError} from '../../../core/index.js';
import {LoggerInterface} from '../../logger/logger.interface.js';
import {ExceptionFilterInterface} from './exception-filter.interface.js';
import {HttpExceptionFilter} from './http.exception-filter.js';

const httpErrorWithoutDetail = {
  statusCode: 404,
  message: 'Not found'
};

const httpErrorWithDetail = {
  statusCode: 401,
  message: 'Authorization fail',
  detail: 'Token is wrong'
};

let loggerService: LoggerInterface;
let httpExceptionFilter: ExceptionFilterInterface;

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

    httpExceptionFilter = new HttpExceptionFilter(loggerService);
  });

  beforeEach(() => {
    clearMockRes();
  });

  test(
    '"catch()" method should called with HttpError without details',
    () => {
      const cacheSpy = vi.spyOn(httpExceptionFilter, 'catch');

      expect(cacheSpy).not.toHaveBeenCalled();

      const error = new HttpError(
        httpErrorWithoutDetail.statusCode,
        httpErrorWithoutDetail.message
      );

      httpExceptionFilter.catch(error, request, res, next);

      expect(cacheSpy).toHaveBeenCalled();
      expect(cacheSpy).toHaveBeenCalledTimes(1);
      expect(cacheSpy).toHaveBeenCalledWith(error, request, res, next);
    }
  );

  test(
    '"catch()" method should called with HttpError with details',
    () => {
      const cacheSpy = vi.spyOn(httpExceptionFilter, 'catch');

      expect(cacheSpy).not.toHaveBeenCalled();

      const error = new HttpError(
        httpErrorWithDetail.statusCode,
        httpErrorWithDetail.message,
        httpErrorWithDetail.detail
      );

      httpExceptionFilter.catch(error, request, res, next);

      expect(cacheSpy).toHaveBeenCalled();
      expect(cacheSpy).toHaveBeenCalledTimes(1);
      expect(cacheSpy).toHaveBeenCalledWith(error, request, res, next);
    }
  );
});
