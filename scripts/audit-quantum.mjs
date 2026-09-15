/** Fast, read-only verification of the committed quantum web editions. */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { parseFragment } from "parse5";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = file => fs.readFileSync(path.join(root, file));
const inventory = JSON.parse(read("content/quantum/index.json"));
const audit = JSON.parse(read("content/quantum/audit.json"));
const hash = bytes => crypto.createHash("sha256").update(bytes).digest("hex");
const errors = [], pages = new Map(); let internalLinks = 0, mathExpressions = 0;
for (const publication of audit.documents) {
  if (publication.status !== "PASS") errors.push(`${publication.id}: converter audit did not pass`);
  if (hash(read(`public/publications/quantum-measurement/${publication.id}.tex`)) !== publication.sourceSha256) errors.push(`${publication.id}: source hash changed`);
  if (hash(read(`public/publications/quantum-measurement/${publication.id}.pdf`)) !== publication.pdfSha256) errors.push(`${publication.id}: PDF hash changed`);
}
for (const document of inventory) {
  const html = read(`content/quantum/${document.publicationId}/${document.slug}.html`).toString();
  const tree = parseFragment(html); const ids = new Set(), links = [];
  const walk = node => {
    const attrs = Object.fromEntries((node.attrs || []).map(attribute => [attribute.name, attribute.value]));
    if (attrs.id) { if (ids.has(attrs.id)) errors.push(`${document.url}: duplicate ID ${attrs.id}`); ids.add(attrs.id); }
    if (node.nodeName === "a" && attrs.href) links.push(attrs.href);
    if (node.nodeName === "math") mathExpressions++;
    if (attrs.class?.includes("katex-error") || attrs.class?.includes("quantum-math-error")) errors.push(`${document.url}: failed mathematics`);
    for (const child of node.childNodes || []) walk(child);
  };
  walk(tree); pages.set(document.url, { ids, links });
  if (!fs.existsSync(path.join(root, "public", document.markdownUrl))) errors.push(`${document.url}: missing Markdown`);
}
for (const [url, page] of pages) {
  for (const href of page.links) {
    if (!href.startsWith("/quantum-measurement/") && !href.startsWith("#")) continue;
    const [pathname, fragment] = href.startsWith("#") ? [url, href.slice(1)] : href.split("#");
    internalLinks++;
    const target = pages.get(pathname);
    if (!target) errors.push(`${url}: missing target ${href}`);
    else if (fragment && !target.ids.has(decodeURIComponent(fragment))) errors.push(`${url}: missing anchor ${href}`);
  }
}
for (const publication of audit.documents) {
  for (const [label, target] of Object.entries(publication.labels)) {
    const [pathname] = target.url.split("#");
    if (!pages.get(pathname)?.ids.has(label)) errors.push(`${publication.id}: missing original source label ${label}`);
  }
}
console.log(`${pages.size} complete pages; ${mathExpressions} rendered MathML expressions; ${internalLinks} internal references; ${audit.documents.reduce((count, publication) => count + publication.convertedStats.labels, 0)} original labels.`);
if (errors.length) { console.error(errors.join("\n")); process.exitCode = 1; }
else console.log("PASS: source/PDF hashes, complete conversion audits, all links, original anchors, Markdown files and mathematics.");
