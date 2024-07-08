import {NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';

import {HttpError} from '../../error/index.js';
import {MiddlewareInterface} from '../middleware.interface.js';
import {CheckDocumentExistInterface} from './check-document-exist.interface.js';

/**
 * Checks the existence of the document
 */
export class CheckDocumentExistMiddleware implements MiddlewareInterface {
  private middlewareTitle = 'CheckDocumentExistMiddleware';

  constructor(
    /**
     * @readonly
     *
     * A service that verifies the existence of a document
     */
    private readonly service: CheckDocumentExistInterface,
    /**
     * @readonly
     *
     * Name of the document for the error message
     */
    private readonly documentName: string,
    /**
     * @readonly
     *
     * Name of the parameter in the request
     */
    private readonly paramName: string,
  ) {}

  /**
   * Checks the existence of an document based on the service
   *
   * @param req - Request. Must contain 'documentId'
   * @param res - Response
   * @param next - NextFunction
   */
  public async execute({params}: Request, _res: Response, next: NextFunction): Promise<void> {
    const documentId = params[this.paramName];

    if (!await this.service.exists(documentId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `${this.documentName} with id ${documentId} not found.`,
        this.middlewareTitle
      );
    }

    next();
  }
}
