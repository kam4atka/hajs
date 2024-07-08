/**
 * Creates an HttpError by extending the standard Error
 */
export class HttpError extends Error {
  /**
   * Code to response
   */
  public httpStatusCode!: number;
  /**
   * Error's detail
   */
  public detail?: string;

  constructor(httpStatusCode: number, message: string, detail?: string) {
    super(message);

    this.httpStatusCode = httpStatusCode;
    this.message = message;
    this.detail = detail;
  }
}
