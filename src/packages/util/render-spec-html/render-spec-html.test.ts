import {describe, test, expect} from 'vitest';
import {renderSpecHtml} from './render-spec-html.js';

describe('Function renderSpecHtml should return the correct string if the function receives ...', () => {
  test(
    'string as parameter',
    () => {
      const url = 'link_to_spec';

      expect(renderSpecHtml(url))
        .toContain(url);
    });
});
