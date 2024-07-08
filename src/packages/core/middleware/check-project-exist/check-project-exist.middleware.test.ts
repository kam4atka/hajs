import {beforeAll, beforeEach, describe, expect, test, vi} from 'vitest';
import {getMockReq, getMockRes} from 'vitest-mock-express';

import {MiddlewareInterface} from '../middleware.interface.js';
import {CheckProjectExistMiddleware} from './check-project-exist.middleware.js';

enum Project {
  ProjectOne = 'project-one',
  ProjectTwo = 'project-two'
}

const WRONG_PROJECT_NAME = 'wrongProjectName';

let checkProjectExistMiddleware: MiddlewareInterface;

const {res, next, clearMockRes} = getMockRes();

describe('CheckProjectExistMiddleware must correctly validate project\'s name in params', () => {
  beforeAll(() => {
    checkProjectExistMiddleware = new CheckProjectExistMiddleware(Project);
  });

  beforeEach(() => {
    clearMockRes();
  });

  test(
    'CheckProjectExistMiddleware should thrown a error if project\'s name is not exist',
    () => {
      const req = getMockReq({});

      const checkProjectExistMiddlewareSpy = vi.spyOn(checkProjectExistMiddleware, 'execute');

      expect(checkProjectExistMiddlewareSpy).not.toHaveBeenCalled();

      expect(checkProjectExistMiddleware.execute(req, res, next))
        .rejects
        .toThrowError('Project with name undefined not found');

      expect(checkProjectExistMiddlewareSpy).toHaveBeenCalled();
      expect(checkProjectExistMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkProjectExistMiddlewareSpy).toBeCalledWith(req, res, next);
    }
  );

  test(
    'CheckProjectExistMiddleware should thrown a error if project\'s name is not exist',
    () => {
      const req = getMockReq({
        params: {projectName: WRONG_PROJECT_NAME}
      });

      const checkProjectExistMiddlewareSpy = vi.spyOn(checkProjectExistMiddleware, 'execute');

      expect(checkProjectExistMiddlewareSpy).not.toHaveBeenCalled();

      expect(checkProjectExistMiddleware.execute(req, res, next))
        .rejects
        .toThrowError(`Project with name ${WRONG_PROJECT_NAME} not found`);

      expect(checkProjectExistMiddlewareSpy).toHaveBeenCalled();
      expect(checkProjectExistMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkProjectExistMiddlewareSpy).toBeCalledWith(req, res, next);
    }
  );

  test(
    'CheckProjectExistMiddleware don\'t should thrown a error if project\'s name is exist',
    () => {
      const req = getMockReq({
        params: {projectName: Project.ProjectOne}
      });

      const checkProjectExistMiddlewareSpy = vi.spyOn(checkProjectExistMiddleware, 'execute');

      expect(checkProjectExistMiddlewareSpy).not.toHaveBeenCalled();

      checkProjectExistMiddleware.execute(req, res, next);

      expect(checkProjectExistMiddlewareSpy).toHaveBeenCalled();
      expect(checkProjectExistMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkProjectExistMiddlewareSpy).toBeCalledWith(req, res, next);
    }
  );

  test(
    'CheckProjectExistMiddleware don\'t should thrown a error if project\'s name is exist',
    () => {
      const req = getMockReq({
        params: {projectName: Project.ProjectTwo}
      });

      const checkProjectExistMiddlewareSpy = vi.spyOn(checkProjectExistMiddleware, 'execute');

      expect(checkProjectExistMiddlewareSpy).not.toHaveBeenCalled();

      checkProjectExistMiddleware.execute(req, res, next);

      expect(checkProjectExistMiddlewareSpy).toHaveBeenCalled();
      expect(checkProjectExistMiddlewareSpy).toHaveBeenCalledTimes(1);
      expect(checkProjectExistMiddlewareSpy).toBeCalledWith(req, res, next);
    }
  );
});
