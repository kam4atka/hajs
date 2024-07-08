import {Request, Response, NextFunction} from 'express';
import {StatusCodes} from 'http-status-codes';

import {MiddlewareInterface} from '../middleware.interface.js';
import {HttpError} from '../../error/index.js';

enum ErrorMessage {
  NotFoundToken = 'Header "x-token" not found',
  WrongTypeToken = 'Header "x-token" must be a string'
}

/**
 * Checks simple JWT authentificate
 */
export class CheckSimpleJWTMiddleware implements MiddlewareInterface {
  private middlewareTitle = 'CheckSimpleJWTMiddleware';
  private headerTitle = 'x-token';

  /**
   * Check the authorization header for the presence of the 'x-token'
   *
   * @param req - Request
   * @param res - Response
   * @param next - NextFunction
   */
  public async execute({headers}: Request, res: Response, next: NextFunction): Promise<void> {
    let tokenValue = headers[this.headerTitle];

    if (!tokenValue) {
      throw new HttpError(
        StatusCodes.UNAUTHORIZED,
        ErrorMessage.NotFoundToken,
        this.middlewareTitle
      );
    }

    tokenValue = (typeof tokenValue === 'object')
      ? tokenValue[0]
      : tokenValue;

    if (typeof tokenValue !== 'string') {
      throw new HttpError(
        StatusCodes.UNAUTHORIZED,
        ErrorMessage.WrongTypeToken,
        this.middlewareTitle
      );
    }

    res.locals.authEmail = tokenValue
      ? Buffer.from(tokenValue, 'base64').toString()
      : null;

    return next();
  }
}
