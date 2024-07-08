import {NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import * as core from 'express-serve-static-core';

import {MiddlewareInterface} from '../middleware.interface.js';
import {HttpError} from '../../error/index.js';

type RequestParams = {
  projectName: string;
}

/**
 * Checks the existence of the project
 */
export class CheckProjectExistMiddleware implements MiddlewareInterface {
  private middlewareTitle = 'CheckProjectExistMiddleware';

  constructor(
    /**
     * @readonly
     *
     * Enum of server project names
     */
    private readonly projects: {[key: string]: string}
  ) {}

  /**
   * Checks the existence of a project based on the enum fo server names
   *
   * @param req - Request. Must contain 'projectName'
   * @param res - Response
   * @param next - NextFunction
   */
  public async execute({params}: Request<core.ParamsDictionary | RequestParams>, _res: Response, next: NextFunction): Promise<void> {
    const {projectName} = params;

    if (!Object.values<string>(this.projects).includes(projectName)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Project with name ${projectName} not found.`,
        this.middlewareTitle
      );
    }

    next();
  }
}
