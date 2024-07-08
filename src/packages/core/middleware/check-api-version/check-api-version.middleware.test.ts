import {beforeAll, beforeEach, describe, expect, test, vi} from 'vitest';
import {getMockReq, getMockRes} from 'vitest-mock-express';

import {MiddlewareInterface} from '../middleware.interface.js';
import {CheckApiVersionMiddleware} from './check-api-version.middleware.js';

enum Version {
  V0 = 'v0',
  V1 = 'v1'
}

const VERSION_WRONG = 'v2';
const ERROR_MESSAGE = 'Version API is wrong.';

let checkApiVersionMiddleware: MiddlewareInterface;

const {res, next, clearMockRes} = getMockRes();

describe('CheckApiVersionMiddleware must correctly validate version in params', () => {
  beforeAll(() => {
    checkApiVersionMiddleware = new CheckApiVersionMiddleware(Version);
  });

  beforeEach(() => {
    clearMockRes();
  });

  test(
    'CheckApiVersionMiddleware should thrown a error if API version is not exist',
    () => {
      const request = getMockReq({});

      const checkApiVersionExistMiddlewareSpy = vi.spyOn(checkApiVersionMiddleware, 'execute');

      expect(checkApiVersionExistMiddlewareSpy).not.toHaveBeenCalled();

      expect(checkApiVersionMiddleware.execute(request, res, next))
        .rejects
        .toThrowError(ERROR_MESSAGE);

      expect(checkApiVersionExistMiddlewareSpy).toHaveBeenCalled();
      expect(checkApiVersionExistMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkApiVersionExistMiddlewareSpy).toBeCalledWith(request, res, next);
    }
  );

  test(
    'CheckApiVersionMiddleware should thrown a error if API version is wrong',
    () => {
      const request = getMockReq({
        params: {apiVersion: VERSION_WRONG}
      });

      const checkApiVersionExistMiddlewareSpy = vi.spyOn(checkApiVersionMiddleware, 'execute');

      expect(checkApiVersionExistMiddlewareSpy).not.toHaveBeenCalled();

      expect(checkApiVersionMiddleware.execute(request, res, next))
        .rejects
        .toThrowError(ERROR_MESSAGE);

      expect(checkApiVersionExistMiddlewareSpy).toHaveBeenCalled();
      expect(checkApiVersionExistMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkApiVersionExistMiddlewareSpy).toBeCalledWith(request, res, next);
    }
  );

  test(
    'CheckApiVersionMiddleware don\'t should thrown a error if API version is exist',
    () => {
      const request = getMockReq({
        params: {apiVersion: Version.V0}
      });

      const checkApiVersionExistMiddlewareSpy = vi.spyOn(checkApiVersionMiddleware, 'execute');

      expect(checkApiVersionExistMiddlewareSpy).not.toHaveBeenCalled();

      checkApiVersionMiddleware.execute(request, res, next);

      expect(checkApiVersionExistMiddlewareSpy).toHaveBeenCalled();
      expect(checkApiVersionExistMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkApiVersionExistMiddlewareSpy).toBeCalledWith(request, res, next);
    }
  );

  test(
    'CheckApiVersionMiddleware don\'t should thrown a error if API version is exist',
    () => {
      const request = getMockReq({
        params: {apiVersion: Version.V1}
      });

      const checkApiVersionExistMiddlewareSpy = vi.spyOn(checkApiVersionMiddleware, 'execute');

      expect(checkApiVersionExistMiddlewareSpy).not.toHaveBeenCalled();

      checkApiVersionMiddleware.execute(request, res, next);

      expect(checkApiVersionExistMiddlewareSpy).toHaveBeenCalled();
      expect(checkApiVersionExistMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkApiVersionExistMiddlewareSpy).toBeCalledWith(request, res, next);
    }
  );
});
