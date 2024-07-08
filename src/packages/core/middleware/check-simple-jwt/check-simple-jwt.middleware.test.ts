import {beforeAll, beforeEach, describe, expect, test, vi} from 'vitest';
import {getMockReq, getMockRes} from 'vitest-mock-express';

import {MiddlewareInterface} from '../middleware.interface.js';
import {CheckSimpleJWTMiddleware} from './check-simple-jwt.middleware.js';

enum TokenError {
  NotFound = 'Header "x-token" not found',
  WrongType = 'Header "x-token" must be a string'
}

const TOKEN = 'b2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';
const EMAIL = 'oliver.conner@gmail.com';

let checkSimpleJWTMiddleware: MiddlewareInterface;

const {res, next, clearMockRes} = getMockRes();

describe('CheckSimpleJWTMiddleware must check authorization token in header request', () => {
  beforeAll(() => {
    checkSimpleJWTMiddleware = new CheckSimpleJWTMiddleware();
  });

  beforeEach(() => {
    clearMockRes();
  });

  test(
    'CheckSimpleJWTMiddleware should throw a error if request does not have an authorization token',
    () => {
      const request = getMockReq();

      const checkMiddlewareSpy = vi.spyOn(checkSimpleJWTMiddleware, 'execute');

      expect(checkMiddlewareSpy).not.toHaveBeenCalled();

      expect(checkSimpleJWTMiddleware.execute(request, res, next))
        .rejects
        .toThrowError(TokenError.NotFound);

      expect(checkMiddlewareSpy).toHaveBeenCalled();
      expect(checkMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkMiddlewareSpy).toBeCalledWith(request, res, next);

      expect(res.locals.authEmail).toBeUndefined();
    }
  );

  test(
    'CheckSimpleJWTMiddleware don\'t should throw a error if request does have an authorization header',
    () => {
      const request = getMockReq({
        headers: {'x-token': TOKEN}
      });

      const checkMiddlewareSpy = vi.spyOn(checkSimpleJWTMiddleware, 'execute');

      expect(checkMiddlewareSpy).not.toHaveBeenCalled();

      checkSimpleJWTMiddleware.execute(request, res, next);

      expect(checkMiddlewareSpy).toHaveBeenCalled();
      expect(checkMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkMiddlewareSpy).toBeCalledWith(request, res, next);

      expect(res.locals.authEmail).toBe(EMAIL);
    }
  );
});
