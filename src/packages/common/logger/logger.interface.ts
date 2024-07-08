/**
 * Defines general methods for implementing the logger service
 *
 */
export interface LoggerInterface {
  /**
   * Writes an 'info' level log
   *
   * @param message - Information message
   * @param args - Other arguments
   */
  info(message: string, ...args: unknown[]): void;
  /**
   * Writes an 'warn' level log
   *
   * @param message - Warning message
   * @param args - Other arguments
   */
  warn(message: string, ...args: unknown[]): void;
  /**
   * Writes an 'error' level log
   *
   * @param message - Error message
   * @param args - Other arguments
   */
  error(message: string, ...args: unknown[]): void;
  /**
   * Writes an 'debug' level log
   *
   * @param message - Debug message
   * @param args - Other arguments
   */
  debug(message: string, ...args: unknown[]): void;
}
