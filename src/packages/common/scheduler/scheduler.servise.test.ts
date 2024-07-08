import {describe, test, expect, vi, beforeEach, SpyInstance} from 'vitest';
import {SchedulerInterface, SchedulerService} from './index.js';

let schedulerService: SchedulerInterface;
let createSpy: SpyInstance;
let startSpy: SpyInstance;

describe('The scheduler\'s methods must be called with special parameter a certain number of times', () => {
  beforeEach(() => {
    const job = {
      jobName: 'Test task #001',
      jobTime: '00 00 00 * * *',
      timezone: 'Europe/Moscow',
      callback: vi.fn()
    };

    schedulerService = new SchedulerService(job);

    createSpy = vi.spyOn(schedulerService, 'create');
    startSpy = vi.spyOn(schedulerService, 'start');
  });

  test(
    'The "schedulerService" should be "SchedulerService" instance',
    () => {
      expect(schedulerService).toBeInstanceOf(SchedulerService);
    }
  );

  test(
    'The "create()" method should be called once',
    () => {
      expect(createSpy).not.toHaveBeenCalled();

      schedulerService.create();

      expect(createSpy).toHaveBeenCalled();
      expect(createSpy).toHaveBeenCalledTimes(1);
    }
  );

  test(
    'The "start()" method should be called once',
    () => {
      expect(startSpy).not.toHaveBeenCalled();

      schedulerService.start();

      expect(startSpy).toHaveBeenCalled();
      expect(startSpy).toHaveBeenCalledTimes(1);
    }
  );
});
