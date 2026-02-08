import { promises as fs } from 'fs';
import path from 'path';

const baseDir = process.cwd();
const srcGeneratedDir = path.join(baseDir, 'src', 'generated');
const manualBase = path.join(baseDir, 'content', 'manual');

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function generateMap(subdir, exportName, outFile) {
  const dir = path.join(manualBase, subdir);
  let entries = [];
  try {
    const files = await fs.readdir(dir);
    for (const file of files) {
      if (file.endsWith('.mdx')) {
        const slug = path.basename(file, '.mdx');
        const importPath = '../../content/manual/' + subdir + '/' + slug + '.mdx';
        entries.push('  "' + slug + '": () => import("' + importPath + '")');
      }
    }
  } catch (err) {
    // directory may not exist
  }
  const body =
    'export const ' +
    exportName +
    ' = {\n' +
    entries.join(',\n') +
    '\n} as const;\n';
  await fs.writeFile(path.join(srcGeneratedDir, outFile), body);
}

async function main() {
  await ensureDir(srcGeneratedDir);
  await Promise.all([
    generateMap('problems', 'manualProblems', 'manualProblems.ts'),
    generateMap('papers', 'manualPapers', 'manualPapers.ts'),
    generateMap('pages', 'manualPages', 'manualPages.ts'),
  ]);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

