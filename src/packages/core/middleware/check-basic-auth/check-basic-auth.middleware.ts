import {Request, Response, NextFunction} from 'express';
import {StatusCodes} from 'http-status-codes';

import {HttpError} from '../../error/index.js';
import {MiddlewareInterface} from '../middleware.interface.js';

enum ErrorMessage {
  WrongBasicAuthToken = 'Header "Authorization" is not found'
}

/**
 * Check basic authentificate
 */
export class CheckBasicAuthMiddleware implements MiddlewareInterface {
  private middlewareTitle = 'CheckBasicAuthMiddleware';
  private headerTitle = 'Authorization';

  /**Checks the authorization header for the presence of the 'Basic' token
   *
   * @param req - Request. Must contain Basic Authorization
   * @param res - Response
   * @param next - NextFunction
   */
  public async execute(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const auth = req.header(this.headerTitle);
    const userId = (auth || '').split(' ')[1];

    const isValidAuth = userId && auth && auth.includes('Basic');

    if (!isValidAuth) {
      throw new HttpError(
        StatusCodes.UNAUTHORIZED,
        ErrorMessage.WrongBasicAuthToken,
        this.middlewareTitle
      );
    }

    next();
  }
}
