import {UrlType} from '../../type/index.js';

/**
 * Returns the server path based on the transmitted data.
 *
 * @remarks
 * It is usually formed based on environment variables (ENV)
 *
 * @example
 * Generating the full server path for local deployment. For example for testing.
 * ```ts
 * getFullServerPath({protocol: 'http', host: 'localhost', port: '8080'});
 * ```
 *
 * @returns Full server path
 *
 */
export function getFullServerPath({protocol, host, port}: UrlType) {
  return `${protocol}://${host}${(port || port !== '') ? `:${port}` : ''}`;
}
