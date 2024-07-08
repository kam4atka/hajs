import {ValidationErrorField} from '../../../type/index.js';
import {StatusCodes} from 'http-status-codes';

/**
 * Creates an ValidationError by extending the standard Error
 */
export class ValidationError extends Error {
  /**
   * Code to response
   */
  public httpStatusCode!: number;
  /**
   * Error's detail
   */
  public details: ValidationErrorField[] = [];

  constructor(message: string, errors: ValidationErrorField[]) {
    super(message);

    this.httpStatusCode = StatusCodes.BAD_REQUEST;
    this.message = message;
    this.details = errors;
  }
}
