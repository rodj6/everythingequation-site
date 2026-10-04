import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const site = path.resolve(process.argv[2] || 'everythingequation-site-update');
const require = createRequire(path.join(site, 'package.json'));
const katex = require('katex');
const directory = path.join(site, 'public/publications/quantum-measurement/research');
const report = [];
for (const file of fs.readdirSync(directory).filter(name => name.endsWith('.md'))) {
  const source = fs.readFileSync(path.join(directory, file), 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  const expressions = [...source.matchAll(/\$\$([\s\S]*?)\$\$|(?<!\\)\$([^$]*?)(?<!\\)\$/g)];
  const errors = [];
  expressions.forEach((match, index) => {
    try {
      katex.renderToString(match[1] ?? match[2], {
        displayMode: match[1] !== undefined,
        throwOnError: true,
        strict: 'ignore',
      });
    } catch (error) {
      errors.push({
        index,
        line: source.slice(0, match.index).split('\n').length,
        message: error.message,
        expression: match[1] ?? match[2],
      });
    }
  });
  report.push({ file, mathCount: expressions.length, errors });
}
console.log(JSON.stringify(report, null, 2));
if (report.some(item => item.errors.length)) process.exitCode = 1;
