import crypto from 'node:crypto';
import {beforeAll, beforeEach, describe, expect, test, vi} from 'vitest';
import {getMockReq, getMockRes} from 'vitest-mock-express';

import {MiddlewareInterface} from '../middleware.interface.js';
import {CheckBasicAuthMiddleware} from './check-basic-auth.middleware.js';

const TOKEN = 'userId';
const ERROR_MESSAGE = 'Header "Authorization" is not found';

let checkBasicAuthMiddleware: MiddlewareInterface;

const {res, next, clearMockRes} = getMockRes();

describe('CheckBasicAuthMiddleware must check authorization header in request', () => {
  beforeAll(() => {
    checkBasicAuthMiddleware = new CheckBasicAuthMiddleware();
  });

  beforeEach(() => {
    clearMockRes();
  });

  test(
    'CheckBasicAuthMiddleware should throw a error if request does not have an authorization header',
    () => {
      const request = getMockReq();

      const checkMiddlewareSpy = vi.spyOn(checkBasicAuthMiddleware, 'execute');

      expect(checkMiddlewareSpy).not.toHaveBeenCalled();

      expect(checkBasicAuthMiddleware.execute(request, res, next))
        .rejects
        .toThrowError(ERROR_MESSAGE);

      expect(checkMiddlewareSpy).toHaveBeenCalled();
      expect(checkMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkMiddlewareSpy).toBeCalledWith(request, res, next);
    }
  );

  test(
    'CheckBasicAuthMiddleware don\'t should throw a error if request does have an authorization header',
    () => {
      const request = getMockReq({
        header: () => `Basic: ${TOKEN}`
      });

      const checkMiddlewareSpy = vi.spyOn(checkBasicAuthMiddleware, 'execute');

      expect(checkMiddlewareSpy).not.toHaveBeenCalled();

      checkBasicAuthMiddleware.execute(request, res, next);

      expect(checkMiddlewareSpy).toHaveBeenCalled();
      expect(checkMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkMiddlewareSpy).toBeCalledWith(request, res, next);
    }
  );

  test(
    'CheckBasicAuthMiddleware don\'t should throw a error if request does have an authorization header as random value',
    () => {
      const request = getMockReq({
        header: () => `Basic: ${crypto.randomUUID()}`
      });

      const checkMiddlewareSpy = vi.spyOn(checkBasicAuthMiddleware, 'execute');

      expect(checkMiddlewareSpy).not.toHaveBeenCalled();

      checkBasicAuthMiddleware.execute(request, res, next);

      expect(checkMiddlewareSpy).toHaveBeenCalled();
      expect(checkMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkMiddlewareSpy).toBeCalledWith(request, res, next);
    }
  );
});
