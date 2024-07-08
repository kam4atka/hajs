import {describe, test, expect} from 'vitest';
import {getFullServerPath} from './get-full-server-path.js';

describe('Function getFullServerPath should return the correct string if the function receives ...', () => {
  const serverPathWithoutPort = 'https://localhost';
  const serverPathWithPort = 'https://localhost:9000';

  const protocol = 'https';
  const host = 'localhost';
  const port = '9000';

  test(
    'protocol and host',
    () => {
      expect(getFullServerPath({protocol, host, port: ''}))
        .toEqual(serverPathWithoutPort);
    });

  test(
    'protocol and host',
    () => {
      expect(getFullServerPath({protocol, host, port}))
        .toEqual(serverPathWithPort);
    });
});
