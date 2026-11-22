/** Compare RH coverage, copied notation, search and generated production HTML. */
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import katex from "katex";
import { parse, parseFragment, serialize } from "parse5";

const args = process.argv.slice(2);
const sourceOnly = args.includes("--source-only");
const requireComplete = args.includes("--require-complete");
const base = args.includes("--base") ? args[args.indexOf("--base") + 1] : null;
const root = "/articles/riemann-hypothesis";
const publication = "/publications/riemann-hypothesis";
const sourceDir = "content/riemann-hypothesis";
const docsDir = "docs/riemann-hypothesis";
const expectedHash = "bae1f777817c69c9a3ca7eac08543538547315c640a31ff24d13ac02666c3fb3";
const expectedPageCount = 980;
const failures = [];
let failureCount = 0;

function check(condition, message) {
  if (condition) return;
  failureCount++;
  if (failures.length < 40) failures.push(message);
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

async function json(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

function attr(node, name) {
  return node.attrs?.find(item => item.name === name)?.value;
}

function hasClass(node, name) {
  return attr(node, "class")?.split(/\s+/).includes(name);
}

function* descend(node) {
  yield node;
  for (const child of node.childNodes ?? []) yield* descend(child);
}

function text(node) {
  return [...descend(node)].map(item => item.value ?? "").join("");
}

function index(fragment, slug) {
  const ids = new Map();
  const hrefs = [];
  const destinations = [];
  const pageMarkers = new Set();
  const copies = [];
  for (const node of descend(fragment)) {
    const id = attr(node, "id");
    if (id) {
      check(!ids.has(id), `${slug}: duplicate ID ${id}`);
      ids.set(id, node);
    }
    const destination = attr(node, "data-pdf-destination");
    if (destination) destinations.push(destination);
    const sourcePage = attr(node, "data-source-page");
    if (sourcePage && hasClass(node, "rh-page-break")) pageMarkers.add(Number(sourcePage));
    const href = attr(node, "href");
    if (href) hrefs.push(href);
    const copy = attr(node, "data-rh-copy");
    if (copy) copies.push(copy);
  }
  for (const copy of copies) {
    const target = ids.get(copy);
    check(target?.nodeName === "pre" && text(target).trim(), `${slug}: missing copy text at ${copy}`);
  }
  return { ids, hrefs, destinations, pageMarkers, copies };
}

async function production(route, extension) {
  if (base) {
    const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(30_000) });
    check(response.ok, `${route}: HTTP ${response.status}`);
    check(!/\bnoindex\b/i.test(response.headers.get("x-robots-tag") ?? ""), `${route}: noindex HTTP header`);
    return response.text();
  }
  return readFile(join(".next/server/app", route.slice(1) + "." + extension), "utf8");
}

function verifyProductionBody(html, fragment, chapter, checkedCount) {
  const body = [...descend(parse(html))].find(node => attr(node, "id") === "rh-reading-body");
  if (!body) {
    check(false, `${chapter.slug}: manuscript body missing from initial HTML`);
    return;
  }
  let mathCount = 0;
  for (const node of [...descend(body)]) {
    if (!hasClass(node, "rh-semantic-display")) continue;
    const tags = [...descend(node)].map(element => element.nodeName);
    check(tags.includes("math") && tags.includes("annotation"), `${chapter.slug}: checked math lacks MathML with source annotation`);
    mathCount++;
    node.parentNode.childNodes = node.parentNode.childNodes.filter(child => child !== node);
  }
  check(mathCount === checkedCount, `${chapter.slug}: expected ${checkedCount} semantic displays, found ${mathCount}`);
  check(serialize(body) === serialize(fragment), `${chapter.slug}: initial HTML manuscript differs from generated chapter`);
}

const [chapters, coverage, overlays, manuscript, markdown, search] = await Promise.all([
  json(join(sourceDir, "chapters.json")),
  json(join(docsDir, "coverage.json")),
  json(join(docsDir, "checked-math.json")),
  readFile(join("public", publication, "paper.pdf")),
  readFile(join("public", publication, "complete.md"), "utf8"),
  json(join("public", publication, "search.json")),
]);

check(digest(manuscript) === expectedHash, "The copied PDF has a different SHA-256");
check(coverage.sourceSha256 === expectedHash, "Coverage ledger refers to a different PDF");
check(coverage.pages.length === expectedPageCount, "Coverage ledger must contain 980 pages");
check(chapters.length > 140, "Chapter inventory has fewer than 141 reading divisions");
for (const overlay of overlays) {
  const math = katex.renderToString(overlay.latex, { displayMode: true, output: "mathml", strict: "error" });
  check(math.includes("<math"), `Page ${overlay.page}: checked LaTeX did not compile to MathML`);
}

const byChapter = new Map(chapters.map(chapter => [chapter.slug, []]));
const blockLocations = new Set();
for (const [index, page] of coverage.pages.entries()) {
  check(page.page === index + 1, `Coverage page position ${index + 1} records page ${page.page}`);
  check(page.blocks.length > 0, `Page ${page.page}: empty coverage`);
  let retained = 0;
  for (const block of page.blocks) {
    retained += block.sourceSpans;
    check(!blockLocations.has(block.anchor), `Repeated source block ${block.anchor}`);
    blockLocations.add(block.anchor);
    const list = byChapter.get(block.chapter);
    check(list, `Page ${page.page}: unknown chapter ${block.chapter}`);
    list?.push({ page: page.page, ...block });
  }
  check(page.retainedSpans === retained, `Page ${page.page}: coverage counts do not reconcile`);
  check(page.chapters.length && page.chapters.every(slug => byChapter.has(slug)), `Page ${page.page}: chapter coverage missing`);
}

const chaptersBySlug = new Map();
const destinations = new Set();
const linkedAssets = new Map();
const checkedMath = new Set();
const tableBranches = [];
const totals = { anchors: 0, references: 0, displayBlocks: 0, checkedDisplays: 0, provisionalDisplays: 0,
  provisionalInlineRuns: 0, tablePanels: 0, pages: new Set(), textBlocks: 0, markdownBlocks: 0, copyTargets: 0 };
let markdownOffset = 0;
for (const chapter of chapters) {
  const generated = await readFile(join(sourceDir, chapter.slug + ".html"), "utf8");
  const fragment = parseFragment(generated);
  const inventory = index(fragment, chapter.slug);
  chaptersBySlug.set(chapter.slug, { ids: new Set(inventory.ids.keys()), hrefs: inventory.hrefs });
  for (const destination of inventory.destinations) {
    check(!destinations.has(destination), `Duplicate PDF destination ${destination}`);
    destinations.add(destination);
  }
  totals.copyTargets += inventory.copies.length;
  totals.anchors += inventory.ids.size;
  const expectedBlocks = byChapter.get(chapter.slug);
  check(expectedBlocks.length > 0, `${chapter.slug}: no ledger blocks`);
  const actualBlocks = [...inventory.ids.keys()].filter(id => /^p-\d{4}-b-\d+$/.test(id));
  check(actualBlocks.join(",") === expectedBlocks.map(block => block.anchor).join(","),
    `${chapter.slug}: generated blocks differ in coverage or order`);

  const markdownHeading = `\n\n## ${chapter.title}\n\n`;
  const chapterStart = markdown.indexOf(markdownHeading, markdownOffset);
  check(chapterStart === markdownOffset || markdownOffset === 0 && chapterStart >= 0,
    `Markdown chapter missing or out of order: ${chapter.slug}`);
  if (chapterStart >= 0) markdownOffset = chapterStart + markdownHeading.length;
  let previousPage;
  let checkedCount = 0;
  for (const block of expectedBlocks) {
    const node = inventory.ids.get(block.anchor);
    check(Number(attr(node ?? {}, "data-source-page")) === block.page, `${block.anchor}: wrong PDF page`);
    totals.provisionalInlineRuns += block.inlineUnresolved?.length ?? 0;
    if (block.type === "math") {
      totals.displayBlocks++;
      const copy = inventory.ids.get(block.anchor + "-notation");
      check(copy && text(copy).length > 0, `${block.anchor}: display has no selectable notation`);
      check(copy && digest(text(copy)) === block.notationSha256, `${block.anchor}: selectable notation differs from coverage`);
      if (block.transcription === "checked-latex") {
        checkedMath.add(`${block.page}\n${block.notationSha256}`);
        checkedCount++;
        totals.checkedDisplays++;
      } else {
        check(block.transcription === "unverified-positional", `${block.anchor}: unexpected notation status`);
        totals.provisionalDisplays++;
      }
    } else if (block.type === "table") {
      totals.tablePanels++;
      check(node && [...descend(node)].some(item => item.nodeName === "table"), `${block.anchor}: missing selectable table`);
      if (node) {
        for (const row of descend(node)) {
          if (row.nodeName !== "tr") continue;
          const first = row.childNodes.find(cell => cell.nodeName === "td");
          if (first && /^F-\d+$/.test(text(first).trim())) tableBranches.push(text(first).trim());
        }
      }
    } else {
      totals.textBlocks++;
      check(node && text(node).trim(), `${block.anchor}: empty server-rendered text`);
    }
    if (previousPage !== block.page) {
      totals.pages.add(block.page);
      check(inventory.pageMarkers.has(block.page), `${chapter.slug}: missing PDF page marker ${block.page}`);
      const marker = `<!-- Source PDF page ${block.page} -->\n\n`;
      const markerStart = markdown.indexOf(marker, markdownOffset);
      check(markerStart === markdownOffset, `Markdown page marker out of order at page ${block.page} in ${chapter.slug}`);
      if (markerStart >= 0) markdownOffset = markerStart + marker.length;
      previousPage = block.page;
    }
    // Display items and tables may contain line breaks. The ledger hashes each complete block.
    let end = markdown.indexOf("\n\n", markdownOffset);
    let matched = false;
    for (let attempt = 0; attempt < 8 && end >= 0; attempt++, end = markdown.indexOf("\n\n", end + 2)) {
      if (digest(markdown.slice(markdownOffset, end)) === block.transcriptSha256) {
        matched = true;
        totals.markdownBlocks++;
        markdownOffset = end + 2;
        break;
      }
    }
    if (!matched && digest(markdown.slice(markdownOffset).trimEnd()) === block.transcriptSha256) {
      matched = true;
      totals.markdownBlocks++;
      markdownOffset = markdown.length;
    }
    if (!matched) {
      check(false, `${block.anchor}: Markdown does not match source block at offset ${markdownOffset}`);
      const nextSeparator = markdown.indexOf("\n\n", markdownOffset);
      if (nextSeparator >= 0) markdownOffset = nextSeparator + 2;
    }
  }
  // Keep the two blank separator characters available for the next heading match.
  if (markdownOffset < markdown.length && markdown.slice(markdownOffset, markdownOffset + 3) === "## ") markdownOffset -= 2;
  if (!sourceOnly) verifyProductionBody(await production(`${root}/${chapter.slug}`, "html"), fragment, chapter, checkedCount);
}

for (const [slug, inventory] of chaptersBySlug) {
  for (const href of inventory.hrefs) {
    if (href.startsWith(root + "/")) {
      const [route, hash] = href.split("#");
      const target = chaptersBySlug.get(route.slice(root.length + 1));
      check(target, `${slug}: missing internal link route ${href}`);
      if (hash) check(target?.ids.has(hash), `${slug}: missing link target ${href}`);
      totals.references++;
    } else if (href.startsWith(publication + "/notation/")) {
      const [path, hash] = href.split("#");
      const ids = linkedAssets.get(path) ?? new Set();
      ids.add(hash);
      linkedAssets.set(path, ids);
    }
  }
}

for (const [path, expected] of linkedAssets) {
  const svg = await readFile(join("public", path), "utf8");
  const seen = new Set([...svg.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  for (const id of expected) check(seen.has(id), `Vector fragment missing: ${path}#${id}`);
}

for (const overlay of overlays) {
  check(checkedMath.has(`${overlay.page}\n${digest(overlay.latex)}`),
    `PDF page ${overlay.page}: checked display ${overlay.tag ?? overlay.bbox.join(",")} missing from edition`);
}
for (const term of ["theorem.7.102", "theorem.7.114", "theorem.10.65", "theorem.17.3", "theorem.17.4",
  "theorem.17.5", "equation.2.7", "equation.17.398", "table.1", "section.18", "section*.267"]) {
  check(destinations.has(term), `Missing required PDF destination ${term}`);
}
check(destinations.size === 3532 && destinations.size === coverage.destinationCount,
  "HTML native destination count differs from the controlling PDF or coverage");
check([...destinations].filter(name => name.startsWith("cite.")).length === 65, "Expected 65 native citation destinations");
check(totals.pages.size === expectedPageCount, "Site reading divisions do not cover 980 PDF pages");
check(tableBranches.join(",") === Array.from({ length: 14 }, (_, index) => `F-${index + 1}`).join(","),
  "Section 18 did not retain all 14 branches in table order");

for (const hit of search.passages) {
  check(hit.text.trim(), `Empty search hit ${hit.slug}#${hit.anchor}`);
  check(chaptersBySlug.get(hit.slug)?.ids.has(hit.anchor), `Missing search target ${hit.slug}#${hit.anchor}`);
}
for (const term of ["riemannHypothesis", "riemannZeta_ne_zero_of_one_le_re", "Theorem 17.5", "Proposition 7.102"]) {
  check(search.passages.some(hit => hit.text.includes(term)), `Full-text index cannot find ${term}`);
}
if (!sourceOnly) {
  const manifest = JSON.parse(await production(root + "/manifest.json", "body"));
  check(manifest.pdf.pages === expectedPageCount && manifest.pdf.sha256 === expectedHash, "Production PDF identity mismatch");
  check(manifest.chapters.map(item => item.slug).join(",") === chapters.map(item => item.slug).join(","),
    "Production manifest order differs from the chapter inventory");
}

const affectedPages = coverage.pages.filter(page => page.blocks.some(block =>
  block.transcription?.startsWith("unverified-") || block.inlineUnresolved?.length));
const unidentifiedGlyphs = Object.values(coverage.unidentifiedGlyphs ?? {}).reduce((sum, count) => sum + count, 0);
if (requireComplete) {
  check(totals.provisionalDisplays === 0, `${totals.provisionalDisplays} display blocks still need checked LaTeX`);
  check(totals.provisionalInlineRuns === 0, `${totals.provisionalInlineRuns} inline runs still need verification`);
  check(unidentifiedGlyphs === 0, `${unidentifiedGlyphs} PDF glyph occurrences remain unidentified`);
  check(!coverage.pages.some(page => page.blocks.some(block => block.transcription?.startsWith("unverified-column"))),
    "At least one table transcription remains unverified");
}

console.log(JSON.stringify({ ...totals, pages: totals.pages.size, chapters: chapters.length,
  nativeDestinations: destinations.size, vectorFiles: linkedAssets.size, searchHits: search.passages.length,
  pagesWithUncheckedNotation: affectedPages.length, unidentifiedGlyphs,
  production: !sourceOnly, failureCount }, null, 2));
if (failureCount) {
  for (const failure of failures) console.error(failure);
  if (failureCount > failures.length) console.error(`…and ${failureCount - failures.length} more failures.`);
  process.exitCode = 1;
}
