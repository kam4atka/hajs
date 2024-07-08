import 'reflect-metadata';
import {injectable} from 'inversify';
import {Response, Router} from 'express';
import {StatusCodes} from 'http-status-codes';
import asyncHandler from 'express-async-handler';

import {LoggerInterface} from '../index.js';
import {RouteInterface} from '../../core/index.js';
import {ControllerInterface} from './controller.interface.js';

/**
 * An abstract base class for the customer controller
 *
 * @category Controller
 */
@injectable()
export abstract class Controller implements ControllerInterface {
  /**
   * @readonly
   *
   * Router
   */
  private readonly _router: Router;

  constructor(protected readonly logger: LoggerInterface) {
    this._router = Router();
  }

  /**
   * Getter to get Router
   */
  get router() {
    return this._router;
  }

  /**
   * Adds and handlers new router
   *
   * @param route - Router
   */
  public addRoute(route: RouteInterface) {
    const routerHandler = asyncHandler(route.handler.bind(this));
    const middlewares = route.middlewares?.map(
      (middleware) => asyncHandler(middleware.execute.bind(middleware))
    );

    const allHandlers = middlewares ? [...middlewares, routerHandler] : routerHandler;
    this._router[route.method](route.path, allHandlers);
    this.logger.info(`Route registered: ${route.method.toUpperCase()} ${route.path}`);
  }

  /**
   * Sends custom response
   *
   * @param res - Response
   * @param statusCode - Code to response
   * @param data - Data sent from the server
   */
  public send<T>(res: Response, statusCode: number, data: T): void {
    res
      .type('application/json')
      .status(statusCode)
      .json(data);
  }

  /**
   * Sends a response with the html code of the page
   *
   * @param res - Response
   * @param data - Data sent from the server
   */
  public sendHtml<T>(res: Response, statusCode: number, data: T): void {
    res
      .type('text/html')
      .status(statusCode)
      .send(data);
  }

  /**
   * Sends a response with code 201 ('CREATED')
   *
   * @param res - Response
   * @param data - Data sent from the server
   */
  public created<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.CREATED, data);
  }

  /**
   * Sends a response with code 204 ('NO CONTENT')
   *
   * @param res - Response
   * @param data - Data sent from the server
   */
  public noContent<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.NO_CONTENT, data);
  }

  /**
   * Sends a response with code 200 ('OK')
   *
   * @param res - Response
   * @param data - Data sent from the server
   */
  public ok<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.OK, data);
  }
}
