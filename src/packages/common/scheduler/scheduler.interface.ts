/**
 * Defines general methods for implementing the scheduler service
 *
 */
export interface SchedulerInterface {
  /**
   * Creates job
   */
  create(): void;
  /**
   * Starts job
   */
  start(): void;
}
