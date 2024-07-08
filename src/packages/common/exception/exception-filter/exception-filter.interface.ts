import {NextFunction, Request, Response} from 'express';

/**
 * Defines general methods for implementing the exeption filter
 *
 */
export interface ExceptionFilterInterface {
  /**
   * Handle the error and calls the appropriate error handler
   *
   * @param error - Error
   * @param req - Request
   * @param res - Response
   * @param next - NextFunction
   */
  catch(error: Error, req: Request, res: Response, next:NextFunction): void;
}
