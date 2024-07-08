import 'reflect-metadata';
import {injectable} from 'inversify';
import pino, {Logger} from 'pino';
import {LoggerInterface} from './logger.interface.js';

/**
 * The logger prints debugging messages while the server is running
 *
 */
@injectable()
export class LoggerService implements LoggerInterface{
  private logger!: Logger;

  constructor() {
    this.logger = pino();
    this.logger.info('Logger created ...');
  }

  /**
   * Writes an 'debug' level log
   *
   * @param message - Debug message
   * @param args - Other arguments
   */
  public debug(message: string, ...args: unknown[]): void {
    this.logger.debug(message, ...args);
  }

  /**
   * Writes an 'error' level log
   *
   * @param message - Error message
   * @param args - Other arguments
   */
  public error(message: string, ...args: unknown[]): void {
    this.logger.error(message, ...args);
  }

  /**
   * Writes an 'info' level log
   *
   * @param message - Information message
   * @param args - Other arguments
   */
  public info(message: string, ...args: unknown[]): void {
    this.logger.info(message, ...args);
  }

  /**
   * Writes an 'warn' level log
   *
   * @param message - Warning message
   * @param args - Other arguments
   */
  public warn(message: string, ...args: unknown[]): void {
    this.logger.warn(message, ...args);
  }
}
