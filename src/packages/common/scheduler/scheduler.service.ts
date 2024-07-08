import {CronJob} from 'cron';
import {SchedulerInterface} from './scheduler.interface.js';

export type Job = {
  jobName: string,
  jobTime: string,
  timezone: string,
  callback: () => void
}

/**
 * The scheduler service responsible for creating a deferred job
 *
 */
export class SchedulerService implements SchedulerInterface {
  /**
   * Name of job
   */
  jobName: string;
  /**
   * Time of job
   *
   * Time format:
   *
   * > Seconds: 0-59
   * > Minutes: 0-59
   * > Hours: 0-23
   * > Days of month: 1-31
   * > Months: 0-11 (Jan-Dec)
   * > Day of week: 0-6 (Sun-Sat)
   *
   * Example: `00 00 00 * * *` - every day in 00:00:00
   */
  jobTime: string;
  /**
   * Timezone
   */
  timezone: string;
  /**
   * Function to be executed
   */
  callback: () => void;
  /**
   * Job that will be started on a schedule
   */
  job: CronJob | null = null;

  constructor({jobName, jobTime, timezone, callback}: Job) {
    this.jobName = jobName;
    this.jobTime = jobTime;
    this.timezone = timezone;
    this.callback = callback;
  }

  /**
   * Creates new job
   */
  create(): void {
    this.job = new CronJob(
      this.jobTime,
      this.callback,
      null,
      true,
      this.timezone
    );
  }

  /**
   * Starts job
   */
  start(): void {
    if (!this.job) {
      return;
    }

    this.job.start();
  }
}
