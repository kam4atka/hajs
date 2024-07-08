import {Request, Response, NextFunction} from 'express';
import {MiddlewareInterface} from '../middleware.interface.js';

/**
 * Parse simple JWT authentificate
 */
export class ParseSimpleJWTMiddleware implements MiddlewareInterface {
  private headerTitle = 'x-token';

  /**
   * Parse the authorization header for the presence of the 'x-token'
   *
   * @param req - Request
   * @param res - Response
   * @param next - NextFunction
   */
  public async execute({headers}: Request, res: Response, next: NextFunction): Promise<void> {
    let tokenValue = headers[this.headerTitle];

    tokenValue = (typeof tokenValue === 'object')
      ? tokenValue[0]
      : tokenValue;

    res.locals.authEmail = tokenValue
      ? Buffer.from(tokenValue, 'base64').toString()
      : null;

    return next();
  }
}
