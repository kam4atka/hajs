import 'reflect-metadata';
import {injectable} from 'inversify';
import {NextFunction, Request, Response} from 'express';

import {ExceptionFilterInterface} from './exception-filter.interface.js';
import {LoggerInterface} from '../../logger/logger.interface.js';

import {HttpError} from '../../../core/index.js';
import {createErrorObject} from '../../../util/index.js';
import {ServiceError} from '../../../enum/service-error.enum.js';

/**
 * Handle the Http Error
 */
@injectable()
export class HttpExceptionFilter implements ExceptionFilterInterface {
  constructor(
    private loggerService: LoggerInterface
  ) {}

  /**
   * Handle the Http Error
   *
   * @param error - Error
   * @param req - Request
   * @param res - Response
   * @param next - NextFunction
   */
  public catch(error: HttpError, _req: Request, res: Response, next: NextFunction) {
    if (! (error instanceof HttpError)) {
      return next(error);
    }

    this.loggerService.error(`[HttpException]: ${error.httpStatusCode} - ${error.message}`);

    res
      .status(error.httpStatusCode)
      .json(createErrorObject(ServiceError.CommonError, error.message));
  }
}
