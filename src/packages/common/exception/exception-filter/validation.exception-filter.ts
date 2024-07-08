import 'reflect-metadata';
import {injectable} from 'inversify';
import {NextFunction, Request, Response} from 'express';

import {ExceptionFilterInterface} from './exception-filter.interface.js';
import {LoggerInterface} from '../../logger/logger.interface.js';

import {ValidationError} from '../../../core/index.js';
import {createErrorObject} from '../../../util/index.js';
import {ServiceError} from '../../../enum/service-error.enum.js';

/**
 * Handle the VAlidation Error
 */
@injectable()
export class ValidationExceptionFilter implements ExceptionFilterInterface {
  constructor(
    private loggerService: LoggerInterface
  ) {}

  /**
   * Handle the Validation Error
   *
   * @param error - Error
   * @param req - Request
   * @param res - Response
   * @param next - NextFunction
   */
  public catch(error: ValidationError, _req: Request, res: Response, next: NextFunction) {
    if (! (error instanceof ValidationError)) {
      return next(error);
    }

    this.loggerService.error(`[ValidationException]: ${error.message}`);
    error.details.forEach((errorField) =>
      this.loggerService.error(`[${errorField?.property}] — ${errorField?.messages}`)
    );

    res
      .status(error.httpStatusCode)
      .json(createErrorObject(ServiceError.ValidationError, error.message, error.details));
  }
}
