/**
 * Returns the HTML code of the project specification page.
 *
 * @param url - The path to the project specification file in yml format
 *
 * @example
 * ```ts
 * renderSpecHtml('../specification/prject.yml');
 * ```
 *
* @returns HTML code of the project specification page
 *
 */
export function renderSpecHtml(url: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <script
          type="module"
          src="https://unpkg.com/rapidoc@9.3.3/dist/rapidoc-min.js"
        >
        </script>
      </head>
      <body>
        <rapi-doc spec-url = ${url}>
        </rapi-doc>
      </body>
    </html>
  `;
}
