import {Response, Router} from 'express';
import {RouteInterface} from '../../core/route/route.interface.js';

/**
 * Defines general methods for implementing the controller service
 */
export interface ControllerInterface {
  /**
   * @readonly
   *
   * Router
   */
  readonly router: Router;
  /**
   * Adds and handlers new router
   *
   * @param route - Router
   */
  addRoute(route: RouteInterface): void;
  /**
   * Sends custom response
   *
   * @param res - Response
   * @param statusCode - Code to response
   * @param data - Data sent from the server
   */
  send<T>(res: Response, statusCode: number, data: T): void;
  /**
   * Sends a response with code 200 ('OK')
   *
   * @param res - Response
   * @param data - Data sent from the server
   */
  ok<T>(res: Response, data: T): void;
  /**
   * Sends a response with code 201 ('CREATED')
   *
   * @param res - Response
   * @param data - Data sent from the server
   */
  created<T>(res: Response, data: T): void;
  /**
   * Sends a response with code 204 ('NO CONTENT')
   *
   * @param res - Response
   * @param data - Data sent from the server
   */
  noContent<T>(res: Response, data: T): void;
}
