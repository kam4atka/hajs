import {describe, test, expect} from 'vitest';
import {createErrorObject} from './create-error-object.js';
import {ServiceError} from '../../enum/index.js';

describe('Function "createErrorObject()" must return the correct error object if the function receives differents error', () => {
  const MESSAGE = 'message';
  const ERRORS = [{
    property: 'property name',
    messages: ['error\'s messages']
  }];

  test(
    'Function "createErrorObject()" should return common error without details',
    () => {
      const createdCommonError = createErrorObject(ServiceError.CommonError, MESSAGE);

      expect(createdCommonError).toStrictEqual({
        errorType: ServiceError.CommonError,
        message: MESSAGE,
        details: []
      });
    }
  );

  test(
    'Function "createErrorObject()" should return service error without details',
    () => {
      const createdCommonError = createErrorObject(ServiceError.ServiceError, MESSAGE);

      expect(createdCommonError).toStrictEqual({
        errorType: ServiceError.ServiceError,
        message: MESSAGE,
        details: []
      });
    }
  );

  test(
    'Function "createErrorObject()" should return common error with details',
    () => {
      const createdCommonError = createErrorObject(ServiceError.CommonError, MESSAGE, ERRORS);

      expect(createdCommonError).toStrictEqual({
        errorType: ServiceError.CommonError,
        message: MESSAGE,
        details: ERRORS
      });
    }
  );
});
