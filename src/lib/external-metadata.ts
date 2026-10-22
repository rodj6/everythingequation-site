import { parseFragment } from 'parse5';

/**
 * External publication descriptions are data, never executable site content.
 * Parse HTML only to recover readable text; React escapes the returned string.
 * This intentionally supports no HTML, URL attributes, or embedded resources.
 */
export function externalDescriptionText(description: string): string {
  const fragment = parseFragment(description);
  const omitted = new Set(['script', 'style', 'template', 'iframe', 'object', 'embed', 'svg', 'math', 'noscript']);
  const blocks = new Set(['p', 'div', 'section', 'article', 'li', 'ul', 'ol', 'blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'tr', 'br', 'hr']);

  function read(node: typeof fragment | (typeof fragment.childNodes)[number]): string {
    if (node.nodeName === '#text' && 'value' in node) return node.value;
    if (omitted.has(node.nodeName)) return '';
    const children = 'childNodes' in node ? node.childNodes.map(read).join('') : '';
    return blocks.has(node.nodeName) ? `\n${children}\n` : children;
  }

  return read(fragment)
    .replace(/[\t\f\v ]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
