import {describe, test, expect, vi, beforeAll} from 'vitest';
import {LoggerInterface} from './logger.interface.js';
import {LoggerService} from './logger.service.js';

const message = 'message';

describe('The logger\'s methods must be called with special parameter a certain number of times', () => {
  let loggerService: LoggerInterface;

  beforeAll(() => {
    loggerService = new LoggerService();
  });

  test(
    'The "debug()" method should be called with a message and should be called two times',
    () => {
      const debugSpy = vi.spyOn(loggerService, 'debug');

      expect(debugSpy).not.toHaveBeenCalled();

      loggerService.debug(message);

      expect(debugSpy).toHaveBeenCalled();
      expect(debugSpy).toHaveBeenCalledTimes(1);
      expect(debugSpy).toHaveBeenCalledWith(message);

      loggerService.debug(message);

      expect(debugSpy).toHaveBeenCalledTimes(2);
    }
  );

  test(
    'The "error()" method should be called with a message and should be called two times',
    () => {
      const errorSpy = vi.spyOn(loggerService, 'error');

      expect(errorSpy).not.toHaveBeenCalled();

      loggerService.error(message);

      expect(errorSpy).toHaveBeenCalled();
      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(errorSpy).toHaveBeenCalledWith(message);

      loggerService.error(message);

      expect(errorSpy).toHaveBeenCalledTimes(2);
    }
  );

  test(
    'The "info()" method should be called with a message and should be called two times',
    () => {
      const infoSpy = vi.spyOn(loggerService, 'info');

      expect(infoSpy).not.toHaveBeenCalled();

      loggerService.info(message);

      expect(infoSpy).toHaveBeenCalled();
      expect(infoSpy).toHaveBeenCalledTimes(1);
      expect(infoSpy).toHaveBeenCalledWith(message);

      loggerService.info(message);

      expect(infoSpy).toHaveBeenCalledTimes(2);
    }
  );

  test(
    'The "warn()" method should be called with a message and should be called two times',
    () => {
      const warnSpy = vi.spyOn(loggerService, 'warn');

      expect(warnSpy).not.toHaveBeenCalled();

      loggerService.warn(message);

      expect(warnSpy).toHaveBeenCalled();
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenCalledWith(message);

      loggerService.warn(message);

      expect(warnSpy).toHaveBeenCalledTimes(2);
    }
  );
});
