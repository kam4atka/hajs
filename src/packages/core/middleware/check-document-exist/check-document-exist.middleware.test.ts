import {beforeAll, beforeEach, describe, expect, test, vi} from 'vitest';
import {getMockReq, getMockRes} from 'vitest-mock-express';

import {CheckDocumentExistMiddleware} from './check-document-exist.middleware.js';
import { MiddlewareInterface } from '../middleware.interface.js';

const DOCUMENT_ID = 'uuid-of-product';
const DOCUMENT_ID_WRONG = 'uuid-of-product-wrong';
const ENTITY_NAME = 'entityName';

const mockedService = {
  exists: (name: string) =>
    new Promise<boolean>(
      (resolve) => {
        if (name === DOCUMENT_ID) {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    )
};

let checkDocumentExistMiddleware: MiddlewareInterface;

const {res, next, clearMockRes} = getMockRes();

describe('CheckDocumentExistMiddleware must correctly validate document by id in params', () => {
  beforeAll(() => {
    checkDocumentExistMiddleware = new CheckDocumentExistMiddleware(mockedService, ENTITY_NAME, 'documentId');
  });

  beforeEach(() => {
    clearMockRes();
  });

  test(
    'CheckDocumentExistMiddleware should thrown a error if document with wrong id is not exist',
    () => {
      const req = getMockReq({
        params: {documentId: DOCUMENT_ID_WRONG}
      });

      const checkDocumentExistMiddlewareSpy = vi.spyOn(checkDocumentExistMiddleware, 'execute');

      expect(checkDocumentExistMiddlewareSpy).not.toHaveBeenCalled();

      expect(checkDocumentExistMiddleware.execute(req, res, next))
        .rejects
        .toThrowError(`${ENTITY_NAME} with id ${DOCUMENT_ID_WRONG} not found.`);

      expect(checkDocumentExistMiddlewareSpy).toHaveBeenCalled();
      expect(checkDocumentExistMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkDocumentExistMiddlewareSpy).toBeCalledWith(req, res, next);
    }
  );

  test(
    'CheckDocumentExistMiddleware don\'t should thrown a error if document with id is exist',
    () => {
      const req = getMockReq({
        params: {documentId: DOCUMENT_ID}
      });

      const checkDocumentExistMiddlewareSpy = vi.spyOn(checkDocumentExistMiddleware, 'execute');

      expect(checkDocumentExistMiddlewareSpy).not.toHaveBeenCalled();

      checkDocumentExistMiddleware.execute(req, res, next);

      expect(checkDocumentExistMiddlewareSpy).toHaveBeenCalled();
      expect(checkDocumentExistMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkDocumentExistMiddlewareSpy).toBeCalledWith(req, res, next);
    }
  );
});
