import 'reflect-metadata';
import {injectable} from 'inversify';
import {NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';

import {ExceptionFilterInterface} from './exception-filter.interface.js';
import {LoggerInterface} from '../../logger/logger.interface.js';

import {createErrorObject} from '../../../util/index.js';
import {ServiceError} from '../../../enum/service-error.enum.js';

/**
 * Handle the Base Error
 */
@injectable()
export class BaseExceptionFilter implements ExceptionFilterInterface {
  constructor(
    private loggerService: LoggerInterface
  ) {}

  /**
   * Handle the Common Error
   *
   * @param error - Error
   * @param req - Request
   * @param res - Response
   * @param next - NextFunction
   */
  public catch(error: Error, _req: Request, res: Response, _next: NextFunction) {
    this.loggerService.error(`[BaseException]: ${error.message}`);

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(createErrorObject(ServiceError.ServiceError, error.message));
  }
}
