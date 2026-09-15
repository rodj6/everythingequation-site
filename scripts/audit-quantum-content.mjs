import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { parseFragment } from 'parse5';

/**
 * Independent audit; deliberately does not import the converter's TeX parser.
 * Run: npm run audit:quantum [-- --source-dir ..]
 * Default sources are committed originals; their bytes are checked against
 * recorded SHA-256 hashes. --source-dir compares separately supplied originals.
 * Proof sampling checks contiguous plain-prose runs (>=60 chars, >=9 words),
 * excluding math and TeX commands. It is not a proof-validity or math-equivalence
 * checker and does not replace the converter audit or visual inspection.
 */
const sourceArg = process.argv.indexOf('--source-dir');
if (sourceArg >= 0 && !process.argv[sourceArg + 1]) throw new Error('--source-dir requires a directory');
const sourceDir = sourceArg < 0 ? null : path.resolve(process.argv[sourceArg + 1]);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
const index = JSON.parse(fs.readFileSync('content/quantum/index.json', 'utf8'));
const conversionAudit = JSON.parse(fs.readFileSync('content/quantum/audit.json', 'utf8'));
const files = [
  ['monograph', 'Shadow_Quantum_Measurement_Monograph_v2.tex', 'Shadow_Quantum_Measurement_Monograph.pdf'],
  ['pilot-medium', 'Pilot_Medium_Bell_Resolution_v2.tex', 'Pilot_Medium_Bell_Resolution.pdf'],
  ['massive-configuration', 'Event_Law_Resolution_v2.tex', 'Event_Law_Resolution.pdf'],
];
const allPages = new Map();
const attrs = node => Object.fromEntries((node.attrs || []).map(a => [a.name, a.value]));
const norm = s => s.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replaceAll('~', ' ').replace(/[^a-z0-9]+/g, ' ').trim();
const text = node => {
  if (node.nodeName === '#text') return node.value;
  if ((attrs(node).class || '').split(' ').includes('katex')) return ' ';
  return (node.childNodes || []).map(text).join(' ');
};
const visit = (node, fn) => { fn(node); (node.childNodes || []).forEach(n => visit(n, fn)); };
for (const d of index) {
  const html = fs.readFileSync(path.join('content/quantum', d.publicationId, `${d.slug}.html`), 'utf8');
  const tree = parseFragment(html);
  const ids = new Set(), duplicateIds = [], hrefs = [], kinds = {}, bibliography = [], proofs = [], paragraphs = [];
  let mathErrors = 0, mathAnnotations = 0;
  visit(tree, node => {
    const a = attrs(node);
    if (a.id) { if (ids.has(a.id)) duplicateIds.push(a.id); ids.add(a.id); }
    if (a.href) hrefs.push(a.href);
    if (a['data-kind']) kinds[a['data-kind']] = (kinds[a['data-kind']] || 0) + 1;
    if (a['data-kind'] === 'proof') proofs.push(norm(text(node)));
    if (a.id?.startsWith('bib-')) bibliography.push(a.id.slice(4));
    if (node.nodeName === 'p') paragraphs.push(text(node).trim());
    if ((a.class || '').split(' ').includes('katex-error')) mathErrors++;
    if (node.nodeName === 'annotation' && a.encoding === 'application/x-tex') mathAnnotations++;
  });
  allPages.set(d.url, { d, ids, duplicateIds, hrefs, kinds, bibliography, proofs, paragraphs, mathErrors, mathAnnotations });
}
const report = [];
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
for (const [id, texFile, pdfFile] of files) {
  const texPath = sourceDir ? path.join(sourceDir, texFile) : `public/publications/quantum-measurement/${id}.tex`;
  const pdfPath = sourceDir ? path.join(sourceDir, pdfFile) : `public/publications/quantum-measurement/${id}.pdf`;
  const recorded = conversionAudit.documents.find(document => document.id === id);
  const source = fs.readFileSync(texPath, 'utf8').replace(/(?<!\\)%[^\n]*/g, '');
  const pages = [...allPages.values()].filter(p => p.d.publicationId === id);
  const ids = new Set(pages.flatMap(p => [...p.ids]));
  const labels = [...source.matchAll(/\\label\{([^}]+)\}/g)].map(m => m[1]);
  const bibKeys = [...source.matchAll(/\\bibitem(?:\[[^\]]*\])?\{([^}]+)\}/g)].map(m => m[1]);
  const sourceProofs = [...source.matchAll(/\\begin\{proof\}(?:\[[^\]]*\])?([\s\S]*?)\\end\{proof\}/g)].map(m => m[1]);
  const renderedProofs = pages.flatMap(p => p.proofs);
  const statementKinds = ['theorem', 'lemma', 'proposition', 'corollary', 'definition', 'assumption', 'example', 'counterexample', 'remark'];
  const sourceStatements = [...source.matchAll(/\\begin\{(theorem|lemma|proposition|corollary|definition|assumption|example|counterexample|remark)\}/g)].length;
  const renderedStatements = pages.reduce((total, page) => total + statementKinds.reduce((subtotal, kind) => subtotal + (page.kinds[kind] || 0), 0), 0);
  const missingProofPassages = [];
  let prosePassagesChecked = 0;
  sourceProofs.forEach((proof, n) => {
    const plain = proof.replace(/\$\$[\s\S]*?\$\$|\$[^$]*?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g, '|')
      .replace(/\\begin\{(equation\*?|align\*?|gather\*?|multline\*?)\}[\s\S]*?\\end\{\1\}/g, '|');
    const passages = [...plain.matchAll(/[A-Za-z][A-Za-z0-9 ,;:'().?!\-~\n\r]{60,}/g)].map(m => norm(m[0])).filter(s => s.split(' ').length >= 9);
    for (const passage of passages) {
      prosePassagesChecked++;
      if (!renderedProofs[n]?.includes(passage)) missingProofPassages.push({ proof: n + 1, passage });
    }
  });
  const missingLinks = [];
  for (const page of pages) for (const href of page.hrefs) {
    if (!href.startsWith('/quantum-measurement/')) continue;
    const [route, anchor] = href.split('#');
    if (anchor && (!allPages.has(route) || !allPages.get(route).ids.has(decodeURIComponent(anchor)))) missingLinks.push(href);
  }
  report.push({
    id, pages: pages.length,
    originalsMatch: {
      tex: (sourceDir ? sha(texPath) : recorded.sourceSha256) === sha(`public/publications/quantum-measurement/${id}.tex`),
      pdf: (sourceDir ? sha(pdfPath) : recorded.pdfSha256) === sha(`public/publications/quantum-measurement/${id}.pdf`),
    },
    sourceProofs: sourceProofs.length, renderedProofs: renderedProofs.length,
    sourceStatements, renderedStatements,
    sourceLabels: labels.length, missingLabels: labels.filter(x => !ids.has(x)),
    bibliographyEntries: bibKeys.length, missingBibliography: bibKeys.filter(x => !ids.has(`bib-${x}`)),
    duplicateIds: pages.flatMap(p => p.duplicateIds), missingLinks,
    mathErrors: pages.reduce((n, p) => n + p.mathErrors, 0),
    mathAnnotations: pages.reduce((n, p) => n + p.mathAnnotations, 0),
    paragraphCount: pages.reduce((n, p) => n + p.paragraphs.length, 0),
    paragraphsWithoutProse: pages.flatMap(p => p.paragraphs).filter(x => !x).length,
    longestParagraphWords: Math.max(...pages.flatMap(p => p.paragraphs).map(p => p.split(/\s+/).length)),
    prosePassagesChecked, missingProofPassages,
  });
}
const failed = report.some(entry => !entry.originalsMatch.tex || !entry.originalsMatch.pdf || entry.sourceProofs !== entry.renderedProofs || entry.sourceStatements !== entry.renderedStatements || entry.missingLabels.length || entry.missingBibliography.length || entry.duplicateIds.length || entry.missingLinks.length || entry.mathErrors || entry.missingProofPassages.length);
const result = {
  schemaVersion: 1,
  status: failed ? 'FAIL' : 'PASS',
  checker: 'scripts/audit-quantum-content.mjs',
  originalComparison: sourceDir ? 'separately supplied originals' : 'recorded SHA-256 hashes of supplied originals',
  limits: 'Independent structural and reference audit plus contiguous plain proof-prose samples. Mathematics is excluded from prose sampling; KaTeX errors and embedded TeX annotations are counted. This does not verify theorem correctness, semantic equivalence of all equations, external links, publication claims, or visual layout. Paragraphs without prose include math-only and anchor-only paragraphs.',
  documents: report,
};
fs.writeFileSync('content/quantum/independent-audit.json', JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ status: result.status, documents: report.map(({missingProofPassages, ...entry}) => ({...entry, missingProofPassageCount: missingProofPassages.length, missingProofPassages: missingProofPassages.slice(0, 8)})) }, null, 2));
if (failed) process.exitCode = 1;
