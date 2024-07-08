import {beforeAll, beforeEach, describe, expect, test, vi} from 'vitest';
import {getMockReq, getMockRes} from 'vitest-mock-express';

import {MiddlewareInterface} from '../middleware.interface.js';
import {ValidateDtoMiddleware} from './validate-dto.middleware.js';
import EntityDtoForTest from './entity-for-test.dto.js';

const validEntity = {
  title: 'Entity\'s title',
  description: 'Entity\'s description'
};

const invalidEntity = {
  title: 'Entity\'s title',
  description: 5
};

let validateDtoMiddleware: MiddlewareInterface;

const {res, next, clearMockRes} = getMockRes();

describe('ValidateDtoMiddleware must correctly validate data from the client', () => {
  beforeAll(() => {
    validateDtoMiddleware = new ValidateDtoMiddleware(EntityDtoForTest);
  });

  beforeEach(() => {
    clearMockRes();
  });

  test(
    'ValidateDtoMiddleware should throw a error if request contains data of the wrong type',
    () => {
      const req = getMockReq({body: invalidEntity});

      const validateDtoMiddlewareSpy = vi.spyOn(validateDtoMiddleware, 'execute');

      expect(validateDtoMiddlewareSpy).not.toHaveBeenCalled();

      expect(validateDtoMiddleware.execute(req, res, next))
        .rejects
        .toThrowError('Validation error');

      expect(validateDtoMiddlewareSpy).toHaveBeenCalled();
      expect(validateDtoMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(validateDtoMiddlewareSpy).toBeCalledWith(req, res, next);
    }
  );

  test(
    'ValidateDtoMiddleware don\'t should throw a error if request contains data of the correct type',
    () => {
      const req = getMockReq({body: validEntity});

      const validateDtoMiddlewareSpy = vi.spyOn(validateDtoMiddleware, 'execute');

      expect(validateDtoMiddlewareSpy).not.toHaveBeenCalled();

      validateDtoMiddleware.execute(req, res, next);

      expect(validateDtoMiddlewareSpy).toHaveBeenCalled();
      expect(validateDtoMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(validateDtoMiddlewareSpy).toBeCalledWith(req, res, next);
    }
  );
});
