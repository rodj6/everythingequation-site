/** Verify manuscript coverage, production reading pages, and public discovery. */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import katex from "katex";
import { parse, parseFragment, serialize } from "parse5";

const args = process.argv.slice(2);
const sourceOnly = args.includes("--source-only");
const strictNotation = args.includes("--require-checked-notation");
const base = args.includes("--base") ? args[args.indexOf("--base") + 1] : null;
const origin = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://everythingequation.com").replace(/\/$/, "");

const editions = [
  {
    id: "ads4-boundary-ball-reconstruction",
    route: "/source-readout/ads4-boundary-ball-reconstruction",
    assets: "/publications/gravity/ads4-boundary-ball-reconstruction",
    doi: "10.5281/zenodo.24451446",
    citationTitle: "Single-Ball Gravitational Reconstruction in AdS₄ from Second-Order Canonical Energy",
    sha: "550e43d28dba0e10012dbf446d1e941be9ba2f93dff6cd7c6ada53e91e8e655d",
    pages: 84, bookmarks: 46, destinations: 538, tables: 7, figures: 0, cites: 25,
    proofNames: ["theorem.2.1", "equation.2.11", "theorem.5.3", "theorem.7.7", "theorem.7.11",
      "equation.7.35", "appendix.A", "appendix.B", "appendix.C"],
    queries: ["Theorem 7.7", "Lorentzian", "Hollands", "Fefferman", "verify_06"],
  },
  {
    id: "haar-critical",
    route: "/articles/haar-critical",
    assets: "/publications/haar-critical",
    doi: "10.5281/zenodo.24451371",
    citationTitle: "Planar Formulas and Microscopic Asymptotics for Derivative Moments of Haar Unitary Characteristic Polynomials",
    sha: "e4955088bd3bb84a7e0aac702120e640a5837ba00f86ef3619d0f6dab82245af",
    pages: 487, bookmarks: 27, destinations: 1819, tables: 59, figures: 2, cites: 19,
    proofNames: ["windowresult.1"],
    queries: ["Proof and certification map", "Theorem 22.W1", "0.507915310133050", "0.000263562330130",
      "0.515130486974", "Szegő", "Toeplitz"],
  },
];

const failures = [];
function check(condition, message) {
  if (!condition) failures.push(message);
}
const unsupportedControls = /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g;
const controlsIn = value => value.match(unsupportedControls)?.length ?? 0;
const digest = value => createHash("sha256").update(value).digest("hex");
const json = async path => JSON.parse(await readFile(path, "utf8"));
const attr = (node, name) => node?.attrs?.find(item => item.name === name)?.value;
const hasClass = (node, name) => attr(node, "class")?.split(/\s+/).includes(name);

function* descend(node) {
  yield node;
  for (const child of node?.childNodes ?? []) yield* descend(child);
}

function text(node) {
  return [...descend(node)].map(item => item?.value ?? "").join("");
}

async function production(route) {
  if (base) {
    const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(30_000) });
    assert(response.ok, `${route}: HTTP ${response.status}`);
    check(!/\bnoindex\b/i.test(response.headers.get("x-robots-tag") ?? ""), `${route}: noindex header`);
    return response.text();
  }
  const name = route === "/" ? "index" : route.slice(1);
  const extension = /\.(?:json|xml|txt)$/.test(route) ? "body" : "html";
  return readFile(join(".next/server/app", name + "." + extension), "utf8");
}

function pageMetadata(markup) {
  const canonical = [];
  const links = new Set();
  const meta = new Map();
  for (const node of descend(parse(markup))) {
    if (node.nodeName === "a") links.add(attr(node, "href"));
    if (node.nodeName === "link" && attr(node, "rel") === "canonical") canonical.push(attr(node, "href"));
    if (node.nodeName === "meta" && attr(node, "name")) meta.set(attr(node, "name"), attr(node, "content"));
  }
  return { canonical, links, meta };
}

function testProductionBody(html, expectedFragment, route, expectedMath) {
  const doc = parse(html);
  const body = [...descend(doc)].find(node => attr(node, "id") === "rh-reading-body");
  check(body, `${route}: missing server-rendered reading body`);
  if (!body) return;
  let checkedMath = 0;
  for (const node of [...descend(body)]) {
    if (!hasClass(node, "rh-semantic-display")) continue;
    const types = [...descend(node)].map(child => child.nodeName);
    check(types.includes("math") && types.includes("annotation"), `${route}: checked math lacks MathML/TeX annotation`);
    node.parentNode.childNodes = node.parentNode.childNodes.filter(child => child !== node);
    checkedMath++;
  }
  check(checkedMath === expectedMath, `${route}: expected ${expectedMath} MathML displays, saw ${checkedMath}`);
  check(serialize(body) === serialize(expectedFragment), `${route}: source and initial HTML bodies differ`);
  const canonical = pageMetadata(html).canonical;
  check(canonical.length === 1 && canonical[0] === origin + route, `${route}: canonical mismatch`);
}

async function verifyEdition(edition) {
  const source = join("content/reading-editions", edition.id);
  const docs = join("docs/reading-editions", edition.id);
  const files = join("public", edition.assets);
  const [chapters, ledger, overlays, pdf, markdown, index] = await Promise.all([
    json(join(source, "chapters.json")), json(join(docs, "coverage.json")), json(join(docs, "checked-math.json")),
    readFile(join(files, "paper.pdf")), readFile(join(files, "complete.md"), "utf8"), json(join(files, "search.json")),
  ]);
  check(digest(pdf) === edition.sha, `${edition.id}: bundled PDF checksum changed`);
  check(ledger.sourceSha256 === edition.sha, `${edition.id}: coverage ledger identifies a different PDF`);
  check(ledger.pages.length === edition.pages, `${edition.id}: incomplete page ledger`);
  check(chapters.length >= edition.bookmarks + 1, `${edition.id}: bookmark divisions lost`);
  check(new Set(chapters.map(chapter => chapter.slug)).size === chapters.length, `${edition.id}: duplicate route slug`);
  const byChapter = new Map(chapters.map(chapter => [chapter.slug, []]));
  for (const [index, page] of ledger.pages.entries()) {
    check(page.page === index + 1, `${edition.id}: ledger page ${index + 1} is mislabeled`);
    check(page.blocks.length > 0, `${edition.id}: no blocks on page ${page.page}`);
    check(page.blocks.reduce((sum, block) => sum + block.sourceSpans, 0) === page.retainedSpans,
      `${edition.id}: glyph coverage does not reconcile on page ${page.page}`);
    for (const block of page.blocks) {
      check(byChapter.has(block.chapter), `${edition.id}: block ${block.anchor} names an unknown destination`);
      byChapter.get(block.chapter)?.push({ page: page.page, ...block });
    }
  }

  const destinations = new Map();
  const routes = new Map();
  const markdownBlocks = { matched: 0, offset: 0 };
  const appliedLatex = new Set();
  const tableNumbers = new Set();
  const figureNumbers = new Set();
  const links = [];
  const svgFiles = new Map();
  const stats = { displayBlocks: 0, checkedDisplays: 0, provisionalDisplays: 0, provisionalInlineRuns: 0,
    tablePanels: 0, figurePanels: 0, sourceBlocks: 0, checkedInlineRuns: 0,
    htmlControlCharacters: 0, markdownControlCharacters: controlsIn(markdown) };
  for (const chapter of chapters) {
    const route = edition.route + "/" + chapter.slug;
    const html = await readFile(join(source, chapter.slug + ".html"), "utf8");
    stats.htmlControlCharacters += controlsIn(html);
    const fragment = parseFragment(html);
    const ids = new Map();
    const printed = new Set();
    for (const node of descend(fragment)) {
      const id = attr(node, "id");
      if (id) {
        check(!ids.has(id), `${route}: duplicate ID ${id}`);
        ids.set(id, node);
      }
      const name = attr(node, "data-pdf-destination");
      if (name) {
        check(!destinations.has(name), `${route}: duplicate native destination ${name}`);
        destinations.set(name, route + "#" + id);
      }
      if (hasClass(node, "rh-printed-source")) printed.add(Number(attr(node, "data-source-page")));
      const link = attr(node, "href");
      if (link?.startsWith(edition.route + "/")) links.push(link);
      if (link?.startsWith(edition.assets + "/notation/")) {
        const [path, target] = link.split("#");
        const seen = svgFiles.get(path) ?? new Set();
        seen.add(target);
        svgFiles.set(path, seen);
      }
    }
    routes.set(route, new Set(ids.keys()));
    const expectedBlocks = byChapter.get(chapter.slug);
    check(expectedBlocks?.length, `${route}: chapter has no source blocks`);
    const exactIds = [...ids.keys()].filter(id => /^p-\d{4}-b-\d+$/.test(id));
    check(exactIds.join() === expectedBlocks.map(block => block.anchor).join(), `${route}: rendered block order differs from ledger`);
    const heading = `\n\n## ${chapter.title}\n\n`;
    const chapterStart = markdown.indexOf(heading, markdownBlocks.offset);
    check(chapterStart >= 0, `${route}: missing Markdown chapter heading`);
    if (chapterStart >= 0) markdownBlocks.offset = chapterStart + heading.length;
    let pageNumber;
    let chapterLatex = 0;
    for (const block of expectedBlocks) {
      const node = ids.get(block.anchor);
      stats.sourceBlocks++;
      check(Number(attr(node, "data-source-page")) === block.page, `${route} ${block.anchor}: wrong PDF page`);
      stats.provisionalInlineRuns += block.inlineUnresolved?.length ?? 0;
      for (const item of block.checkedInline ?? []) {
        stats.checkedInlineRuns++;
        const inline = ids.get(item.anchor);
        const elements = [...descend(inline)];
        const annotation = elements.find(node => node?.nodeName === "annotation");
        check(elements.some(node => node?.nodeName === "math") && annotation && text(annotation) === item.latex,
          `${item.anchor}: checked inline expression does not match its reference`);
        check(ids.has(item.sourceGlyphAnchor), `${item.anchor}: detached source glyph anchor missing`);
      }
      if (block.type === "table") {
        stats.tablePanels++;
        if (block.tableNumber) {
          tableNumbers.add(Number(block.tableNumber));
          check(Number(attr(node, "data-table-number")) === block.tableNumber, `${block.anchor}: table number mismatch`);
        }
        for (const row of block.rows ?? []) check(ids.has(row.anchor) && row.columns.length > 1, `${row.anchor}: missing table row or columns`);
        check([...descend(node)].some(item => item?.nodeName === "table"), `${route} ${block.anchor}: no selectable table`);
      } else if (block.type === "figure") {
        stats.figurePanels++;
        figureNumbers.add(Number(block.figureNumber));
        check(Number(attr(node, "data-figure-number")) === block.figureNumber, `${block.anchor}: figure number mismatch`);
        check([...descend(node)].some(item => item?.nodeName === "figcaption" && text(item).trim()),
          `${block.anchor}: missing searchable figure caption`);
        check([...descend(node)].some(item => item?.nodeName === "svg" || item?.nodeName === "img"),
          `${route} ${block.anchor}: missing source figure visual`);
      } else if (block.type === "math") {
        stats.displayBlocks++;
        const notation = ids.get(block.anchor + "-notation");
        check(notation && digest(text(notation)) === block.notationSha256,
          `${route} ${block.anchor}: selectable display does not match ledger`);
        if (block.transcription === "checked-latex") {
          chapterLatex++;
          stats.checkedDisplays++;
          appliedLatex.add(block.page + ":" + block.notationSha256);
        } else {
          stats.provisionalDisplays++;
          check([...descend(node)].some(item => item?.nodeName === "svg" || item?.nodeName === "img"),
            `${route} ${block.anchor}: provisional notation lacks original source vector`);
        }
      }
      if (pageNumber !== block.page) {
        pageNumber = block.page;
        check(printed.has(pageNumber), `${route}: no printed source image for page ${pageNumber}`);
        const pageMarker = `<!-- Source PDF page ${pageNumber} -->\n\n`;
        const marker = markdown.indexOf(pageMarker, markdownBlocks.offset);
        check(marker === markdownBlocks.offset, `${route}: missing or out-of-order Markdown page marker ${pageNumber}`);
        if (marker >= 0) markdownBlocks.offset = marker + pageMarker.length;
      }
      let end = markdown.indexOf("\n\n", markdownBlocks.offset);
      let found = false;
      for (let step = 0; step < 8 && end >= 0; step++, end = markdown.indexOf("\n\n", end + 2)) {
        if (digest(markdown.slice(markdownBlocks.offset, end)) !== block.transcriptSha256) continue;
        markdownBlocks.offset = end + 2;
        markdownBlocks.matched++;
        found = true;
        break;
      }
      if (!found && end < 0 && digest(markdown.slice(markdownBlocks.offset).trimEnd()) === block.transcriptSha256) {
        markdownBlocks.offset = markdown.length;
        markdownBlocks.matched++;
        found = true;
      }
      if (!found) {
        check(false, `${route} ${block.anchor}: missing Markdown source block`);
        const next = markdown.indexOf("\n\n", markdownBlocks.offset);
        if (next >= 0) markdownBlocks.offset = next + 2;
      }
    }
    if (markdown.slice(markdownBlocks.offset, markdownBlocks.offset + 3) === "## ") markdownBlocks.offset -= 2;
    if (!sourceOnly) testProductionBody(await production(route), fragment, route, chapterLatex);
  }
  check(svgFiles.size === edition.pages, `${edition.id}: printed vector inventory differs from source pagination`);
  for (const [path, expected] of svgFiles) {
    const svg = await readFile(join("public", path), "utf8");
    const ids = new Set([...svg.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
    for (const id of expected) check(ids.has(id), `${path} missing referenced SVG fragment ${id}`);
  }
  for (const link of links) {
    const [path, fragment] = link.split("#");
    check(routes.has(path) && (!fragment || routes.get(path).has(fragment)), `${edition.id} broken hyperlink ${link}`);
  }
  for (const overlay of overlays) {
    const rendered = katex.renderToString(overlay.latex, { displayMode: true, output: "mathml", strict: "error" });
    check(rendered.includes("<math"), `${edition.id}: checked math failed on page ${overlay.page}`);
    check(appliedLatex.has(overlay.page + ":" + digest(overlay.latex)), `${edition.id}: checked formula absent on page ${overlay.page}`);
  }
  check(destinations.size === edition.destinations, `${edition.id} has ${destinations.size}/${edition.destinations} PDF named destinations`);
  for (let i = 1; i <= edition.tables; i++) check(destinations.has("table." + i), `${edition.id}: missing Table ${i}`);
  for (let i = 1; i <= edition.figures; i++) check(destinations.has("figure." + i), `${edition.id}: missing Figure ${i}`);
  check([...tableNumbers].sort((a, b) => a - b).join() === Array.from({ length: edition.tables }, (_, i) => i + 1).join(),
    `${edition.id}: numbered table inventory differs from the source`);
  check(stats.figurePanels === edition.figures &&
    [...figureNumbers].sort((a, b) => a - b).join() === Array.from({ length: edition.figures }, (_, i) => i + 1).join(),
    `${edition.id}: printed figure count differs from ledger`);
  check([...destinations].filter(([name]) => name.startsWith("cite.")).length === edition.cites, `${edition.id}: citation inventory changed`);
  for (const name of edition.proofNames) check(destinations.has(name), `${edition.id}: missing proof destination ${name}`);
  for (const hit of index.passages) {
    check(hit.text.trim() && routes.get(edition.route + "/" + hit.slug)?.has(hit.anchor),
      `${edition.id}: invalid search hit ${hit.slug}#${hit.anchor}`);
  }
  for (const query of edition.queries) {
    const normalized = text => text.normalize("NFKD").replace(/\p{M}/gu, "").replace(/\s+/g, " ").toLowerCase();
    check(index.passages.some(hit => normalized(hit.text).includes(normalized(query))), `${edition.id}: search cannot find ${query}`);
  }

  if (!sourceOnly) {
    const manifest = JSON.parse(await production(edition.route + "/manifest.json"));
    check(manifest.doi === edition.doi && manifest.pdf?.sha256 === edition.sha && manifest.pdf?.pages === edition.pages,
      `${edition.id}: manifest does not identify the controlling version`);
    check(manifest.chapters.map(chapter => chapter.url).join() === [...routes.keys()].join(), `${edition.id}: manifest differs from chapter order`);
  }
  check(stats.htmlControlCharacters + stats.markdownControlCharacters === 0,
    `${edition.id}: raw PDF glyph controls survive in HTML or Markdown`);
  if (edition.id === "haar-critical") check(stats.checkedInlineRuns === 1, "The Haar signed-window radical was not verified");
  if (strictNotation) {
    check(stats.provisionalDisplays === 0, `${edition.id}: ${stats.provisionalDisplays} displays retain unchecked copy text`);
    check(stats.provisionalInlineRuns === 0, `${edition.id}: ${stats.provisionalInlineRuns} inline runs await comparison`);
    check(!ledger.pages.some(page => page.blocks.some(block => block.type === "table" && /^unverified/.test(block.transcription ?? ""))),
      `${edition.id}: unchecked table transcription remains`);
  }
  return { edition: edition.id, chapters: chapters.length, pages: ledger.pages.length, ...stats,
    destinations: destinations.size, validMarkdownBlocks: markdownBlocks.matched, searchPassages: index.passages.length,
    vectorFiles: svgFiles.size, linkedReferences: links.length, chapterRoutes: [...routes.keys()] };
}

async function verifyDiscovery(reports) {
  const [sitemap, feed, llms, graph, robots, home, articles, papers, gravity] = await Promise.all([
    "/sitemap.xml", "/feed.xml", "/llms.txt", "/graph.json", "/robots.txt", "/", "/articles", "/papers",
    "/source-readout/gravity-and-holography",
  ].map(production));
  const graphUrls = new Set(JSON.parse(graph).nodes.map(node => node.url));
  const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]));
  const blockedRoutes = [...robots.matchAll(/^Disallow:\s*(\S+)/gm)].map(match => match[1]);
  for (const edition of editions) {
    const citation = "/papers/" + edition.id;
    const report = reports.find(report => report.edition === edition.id);
    for (const [name, page] of [["homepage", home], ["Articles", articles], ["Papers", papers]]) {
      check(pageMetadata(page).links.has(edition.route), `${edition.id}: ${name} lacks a visible HTML link to the web edition`);
    }
    const citationPage = pageMetadata(await production(citation));
    check(citationPage.meta.get("citation_title") === edition.citationTitle, `${citation}: citation title differs`);
    check(citationPage.meta.get("citation_publication_date") === "2026-11-23", `${citation}: citation date differs`);
    check(citationPage.meta.get("citation_doi") === edition.doi, `${citation}: DOI metadata differs`);
    check(citationPage.links.has(edition.route), `${citation}: web edition link missing`);
    check(citationPage.canonical[0] === origin + citation, `${citation}: canonical mismatch`);
    const landing = pageMetadata(await production(edition.route));
    check(landing.canonical[0] === origin + edition.route, `${edition.route}: landing canonical differs`);
    check(!/\bnoindex\b/i.test(landing.meta.get("robots") ?? ""), `${edition.route}: noindex in landing metadata`);
    check(landing.links.has(edition.assets + "/paper.pdf"), `${edition.route}: supplied PDF link missing`);
    if (base) {
      const pdf = await fetch(new URL(edition.assets + "/paper.pdf", base), { signal: AbortSignal.timeout(30_000) });
      check(pdf.ok && digest(new Uint8Array(await pdf.arrayBuffer())) === edition.sha,
        `${edition.id}: the served PDF differs from the supplied PDF`);
    }
    if (edition.id === "haar-critical") {
      check(landing.links.has(edition.assets + "/HaarCritical_Public_Verification.zip"), "Haar verification ZIP is not discoverable");
    }
    check(landing.links.has("https://doi.org/" + edition.doi), `${edition.route}: DOI link missing`);
    for (const route of [citation, edition.route, ...report.chapterRoutes]) {
      check(sitemapUrls.has(origin + route), `${route}: absent from sitemap`);
      check(graphUrls.has(origin + route), `${route}: absent from research graph`);
      check(!blockedRoutes.some(prefix => route.startsWith(prefix)), `${route}: blocked by robots.txt`);
    }
    check(feed.includes(origin + edition.route), `${edition.id}: absent from the feed`);
    check(llms.includes(origin + edition.route + "/manifest.json"), `${edition.id}: manifest missing from llms.txt`);
    check(llms.includes(edition.doi), `${edition.id}: DOI missing from llms.txt`);
  }
  check(pageMetadata(gravity).links.has(editions[0].route), "Existing gravity hub omits the new AdS4 edition");
  for (const route of [
    "/source-readout/boundary-ball-readouts", "/source-readout/second-order-boundary-balls",
    "/source-readout/einstein-1916", "/articles/riemann-hypothesis", "/papers/riemann-hypothesis",
  ]) {
    const page = pageMetadata(await production(route));
    check(page.canonical.includes(origin + route), `${route}: existing route no longer has its canonical output`);
  }
}

const reports = [];
for (const edition of editions) reports.push(await verifyEdition(edition));
if (!sourceOnly) await verifyDiscovery(reports);
console.log(JSON.stringify({ production: !sourceOnly, editions: reports.map(({ chapterRoutes, ...report }) => report),
  failureCount: failures.length }, null, 2));
if (failures.length) {
  for (const failure of failures.slice(0, 45)) console.error(failure);
  if (failures.length > 45) console.error(`…and ${failures.length - 45} more failures.`);
  process.exitCode = 1;
}
