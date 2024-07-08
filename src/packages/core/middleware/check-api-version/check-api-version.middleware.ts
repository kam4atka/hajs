import {NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import * as core from 'express-serve-static-core';

import {HttpError} from '../../error/index.js';
import {MiddlewareInterface} from '../middleware.interface.js';

type RequestParams = {
  apiVersion: string;
}

enum ErrorMessage {
  WrongApiVersion = 'Version API is wrong.',
}

/**
 * Checks the existence of the api version
 */
export class CheckApiVersionMiddleware implements MiddlewareInterface {
  private middlewareTitle = 'CheckApiVersionMiddleware';

  constructor(
    /**
     * @readonly
     *
     * Enum of api version
     */
    private readonly apiVersions: {[key: string]: string}
  ) {}

  /**
   * Checks the existence of a apiVersion on the enum fo server versions
   *
   * @param req - Request. Must container 'apiVersion'
   * @param res - Response
   * @param next - NextFunction
   */
  public async execute({params}: Request<core.ParamsDictionary | RequestParams>, _res: Response, next: NextFunction): Promise<void> {
    const {apiVersion} = params;

    if (!(Object.values<string>(this.apiVersions).includes(apiVersion))) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        ErrorMessage.WrongApiVersion,
        this.middlewareTitle
      );
    }

    next();
  }
}
