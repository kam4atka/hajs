import {NextFunction, Request, Response} from 'express';

/**
 * Defines general methods for implementing the Middleware
 */
export interface MiddlewareInterface {
  /**
   * Request processing and logic execution
   *
   * @param req - Request
   * @param res - Response
   * @param next - NextFunction
   */
  execute(req: Request, res: Response, next: NextFunction): void;
}
