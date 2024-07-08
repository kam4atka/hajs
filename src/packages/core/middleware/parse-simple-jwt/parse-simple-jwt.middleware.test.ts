import {beforeAll, beforeEach, describe, expect, test, vi} from 'vitest';
import {getMockReq, getMockRes} from 'vitest-mock-express';

import {MiddlewareInterface} from '../middleware.interface.js';
import {ParseSimpleJWTMiddleware} from './parse-simple-jwt.middleware.js';

const TOKEN = 'b2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';
const EMAIL = 'oliver.conner@gmail.com';

let parseSimpleJWTMiddleware: MiddlewareInterface;

const {res, next, clearMockRes} = getMockRes();

describe('ParseSimpleJWTMiddleware must check authorization header in request', () => {
  beforeAll(() => {
    parseSimpleJWTMiddleware = new ParseSimpleJWTMiddleware();
  });

  beforeEach(() => {
    clearMockRes();
  });

  test(
    'ParseSimpleJWTMiddleware should throw a error if request does not have an authorization token',
    () => {
      const request = getMockReq();

      const parseMiddlewareSpy = vi.spyOn(parseSimpleJWTMiddleware, 'execute');

      expect(parseMiddlewareSpy).not.toHaveBeenCalled();

      parseSimpleJWTMiddleware.execute(request, res, next);

      expect(parseMiddlewareSpy).toHaveBeenCalled();
      expect(parseMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(parseMiddlewareSpy).toBeCalledWith(request, res, next);

      expect(res.locals.authEmail).toBeNull();
    }
  );

  test(
    'ParseSimpleJWTMiddleware don\'t should throw a error if request does have an authorization header',
    () => {
      const req = getMockReq({
        headers: {'x-token': TOKEN}
      });

      const parseMiddlewareSpy = vi.spyOn(parseSimpleJWTMiddleware, 'execute');

      expect(parseMiddlewareSpy).not.toHaveBeenCalled();

      parseSimpleJWTMiddleware.execute(req, res, next);

      expect(parseMiddlewareSpy).toHaveBeenCalled();
      expect(parseMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(parseMiddlewareSpy).toBeCalledWith(req, res, next);

      expect(res.locals.authEmail).toBe(EMAIL);
    }
  );
});
