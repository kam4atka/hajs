import {NextFunction, Request, Response} from 'express';
import {MiddlewareInterface} from '../index.js';
import {HttpMethod} from '../../enum/index.js';

/**
 * Defines general properties for implementing the Route
 */
export interface RouteInterface {
  /**
   * The Route path
   */
  path: string;
  /**
   * The Route method
   */
  method: HttpMethod;
  /**
   * The handler that will be executed for the route
   *
   * @param req - Request
   * @param res - Response
   * @param next - Next
   */
  handler: (req: Request, res: Response, next: NextFunction) => void;
  /**
   * The Array of middlewares that the route accepts
   */
  middlewares?: MiddlewareInterface[];
}
