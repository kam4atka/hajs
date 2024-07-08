/**
 * A list of known error types. It is used to generate errors when the server is running.
 * @enum
 */
export enum ServiceError {
  ValidationError = 'VALIDATION_ERROR',
  CommonError = 'COMMON_ERROR',
  ServiceError = 'SERVICE_ERROR'
}
