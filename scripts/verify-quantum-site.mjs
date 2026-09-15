/** Check the built site's complete quantum corpus, anchors and publication bytes.
 * Start `npm start`, then run `node scripts/verify-quantum-site.mjs [base-url]`.
 * This is an HTTP/content check. Real-browser interaction and visual review are
 * also required; see QUANTUM_INTEGRATION_REVIEW.md.
 */
import fs from "node:fs";
import crypto from "node:crypto";

const base = (process.argv[2] || "http://127.0.0.1:3000").replace(/\/$/, "");
const inventory = JSON.parse(fs.readFileSync("content/quantum/index.json", "utf8"));
const audit = JSON.parse(fs.readFileSync("content/quantum/audit.json", "utf8"));
const decode = value => value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_, hex, decimal) => String.fromCodePoint(parseInt(hex || decimal, hex ? 16 : 10)));
const pages = new Map();
const failures = [];
async function pageAt(route) {
  if (!pages.has(route)) pages.set(route, (async () => {
    const response = await fetch(`${base}${route}`, { signal: AbortSignal.timeout(120000) });
    const html = await response.text();
    if (!response.ok) failures.push(`${route}: HTTP ${response.status}`);
    return { status: response.status, html, ids: new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => decode(match[1]))) };
  })());
  return pages.get(route);
}
const core = ["/", "/quantum-measurement", "/quantum-measurement/monograph", "/atlas", "/atlas/quantum-measurement", "/papers", "/papers/quantum-measurement-monograph", "/papers/deterministic-pilot-medium", "/papers/massive-configuration-completion", "/problems/quantum-measurement", "/research-map", "/framework", "/about", "/monograph", "/monograph/records-measurement-and-objectivity", "/monograph/the-quantum-record-geometry-bridge"];
const routes = [...new Set([...core, ...inventory.map(document => document.url)])];
for (let i = 0; i < routes.length; i += 3) await Promise.all(routes.slice(i, i + 3).map(pageAt));
let mathPages = 0;
for (const document of inventory) {
  const page = await pageAt(document.url);
  if (!page.html.includes('class="quantum-publication-text"')) failures.push(`${document.url}: missing complete text`);
  if (/class="[^"]*katex-error/.test(page.html)) failures.push(`${document.url}: math rendering error`);
  if (page.html.includes('encoding="application/x-tex"')) mathPages++;
  for (const section of document.sections) if (!page.ids.has(section.anchor)) failures.push(`${document.url}: missing contents anchor ${section.anchor}`);
}
let sourceAnchors = 0;
for (const document of audit.documents) for (const [label, target] of Object.entries(document.labels)) {
  const url = new URL(target.url, base);
  const page = await pageAt(url.pathname);
  if (!page.ids.has(decodeURIComponent(url.hash.slice(1)))) failures.push(`${document.id}: source anchor ${label} absent`);
  sourceAnchors++;
}
const links = new Set();
for (const route of routes.filter(route => route.includes("quantum") || route.includes("pilot-medium") || route.includes("massive-configuration"))) {
  const { html } = await pageAt(route);
  for (const match of html.matchAll(/\bhref="([^"]+)"/g)) {
    const href = decode(match[1]);
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href, `${base}${route}`);
    if (url.origin !== base || url.pathname.startsWith("/_next/")) continue;
    links.add(url.pathname + url.search + url.hash);
  }
}
let localLinks = 0;
for (const href of links) {
  const url = new URL(href, base);
  if (/\.(pdf|tex|md)$/.test(url.pathname)) continue;
  const page = await pageAt(url.pathname);
  if (url.hash && !page.ids.has(decodeURIComponent(url.hash.slice(1)))) failures.push(`Link target missing: ${href}`);
  localLinks++;
}
let downloads = 0;
for (const document of audit.documents) {
  for (const extension of ["pdf", "tex", "md"]) {
    const route = `/publications/quantum-measurement/${document.id}.${extension}`;
    const response = await fetch(`${base}${route}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (!response.ok || bytes.length < 100) failures.push(`${route}: invalid download`);
    if (extension !== "md") {
      const expected = extension === "pdf" ? document.pdfSha256 : document.sourceSha256;
      const actual = crypto.createHash("sha256").update(bytes).digest("hex");
      if (expected !== actual) failures.push(`${route}: differs from supplied original`);
    }
    downloads++;
  }
}
for (const document of inventory.filter(item => item.publicationId === "monograph")) {
  const response = await fetch(`${base}${document.markdownUrl}`);
  if (!response.ok || (await response.text()).length < 50) failures.push(`${document.markdownUrl}: chapter Markdown unavailable`);
  downloads++;
}
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const llms = await (await fetch(`${base}/llms.txt`)).text();
const feed = await (await fetch(`${base}/feed.xml`)).text();
const graph = await (await fetch(`${base}/graph.json`)).json();
const manifest = await (await fetch(`${base}/quantum-measurement/manifest.json`)).json();
for (const document of inventory) {
  if (!sitemap.includes(document.url)) failures.push(`Sitemap omits ${document.url}`);
  if (!llms.includes(document.url)) failures.push(`llms.txt omits ${document.url}`);
}
for (const record of ["22774584", "22774634", "22774739"]) {
  if (!feed.includes(record)) failures.push(`Feed omits publication ${record}`);
  if (!JSON.stringify(graph).includes(record)) failures.push(`Graph omits publication ${record}`);
}
if (manifest.publications?.length !== 3) failures.push("Manifest must contain all three publications");
const report = { base, checkedAt: new Date().toISOString(), readingPages: inventory.length, routes: pages.size, mathPages, sourceAnchors, localLinks, downloads, machineEndpoints: 5, failures };
fs.mkdirSync("tmp", { recursive: true });
fs.writeFileSync("tmp/quantum-site-verification.json", JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
