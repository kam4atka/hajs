import {ServiceError} from '../../enum/index.js';
import {ValidationErrorField} from '../../type/index.js';

/**
 * Returns the plain object with error information
 *
 * @param serviceError - Name of error type
 * @param message - Error message
 * @param details - Error details. Default value is an empty array.
 *
 * @example
 * ```ts
 * createErrorObject(
 *  'COMMON_ERROR',
 *  'Access deny'
 * );
 * ```
 *
 * @returns Plain object with error information
 *
 */
export const createErrorObject = (
  serviceError: ServiceError,
  message: string,
  details: ValidationErrorField[] = []
) => ({
  errorType: serviceError,
  message,
  details: [...details]
});
