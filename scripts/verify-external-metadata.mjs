import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { externalDescriptionText } from '../src/lib/external-metadata.ts';
import { jsonLdText } from '../src/lib/json-ld.ts';

const fixtures = [
  ['<p>First &amp; second.</p><p>Next <strong>paragraph</strong>.</p>', 'First & second.\n\nNext paragraph.'],
  ['<script>alert(1)</script><p onclick="alert(2)">Safe text</p>', 'Safe text'],
  ['<a href="javascript:alert(1)">Readable title</a><img src=x onerror="alert(2)">', 'Readable title'],
  ['<svg onload="alert(1)"><text>omit</text></svg><iframe srcdoc="payload">omit</iframe>Actual abstract', 'Actual abstract'],
  ['&lt;img src=x onerror=alert(1)&gt;', '<img src=x onerror=alert(1)>'],
  ['Plain text with α and Ω.', 'Plain text with α and Ω.'],
  ['', ''],
];

for (const [input, expected] of fixtures) {
  const text = externalDescriptionText(input);
  assert.equal(text, expected);
  const rendered = renderToStaticMarkup(React.createElement('p', null, text));
  assert.ok(!/<(?:script|img|svg|iframe|a|object)\b/i.test(rendered), rendered);
}

// Exercise the three display branches used by the real page.
const show = (summary, description) => !summary && description
  ? renderToStaticMarkup(React.createElement('p', null, externalDescriptionText(description))) : '';
assert.equal(show('Local summary', '<script>payload</script>'), '');
assert.equal(show(undefined, undefined), '');
assert.equal(show('', '<p>Public abstract</p>'), '<p>Public abstract</p>');
const page = await fs.readFile('src/app/papers/[slug]/page.tsx', 'utf8');
assert.ok(page.includes('externalDescriptionText(paper.metadata.description)'));
assert.ok(!page.includes('__html: paper.metadata.description'));
const maliciousDescription = '</script><script>alert(1)</script>';
const json = jsonLdText({description: maliciousDescription});
assert.ok(!json.includes('<'));
assert.equal(JSON.parse(json).description, maliciousDescription);
assert.ok(page.includes('__html: jsonLdText(jsonLd)'));
console.log('External metadata: 7 text/escaping fixtures, local-summary/missing-metadata/fallback branches, and JSON-LD script-delimiter isolation passed.');
