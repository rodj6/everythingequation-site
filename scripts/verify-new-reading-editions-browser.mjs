/** Browser checks against a running build. Pass its origin as the first argument. */
import assert from "node:assert/strict";
import { mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { setTimeout as pause } from "node:timers/promises";
import { parseFragment } from "parse5";

const origin = process.argv[2];
if (!origin) throw new Error("Pass the origin of a running production build");
const playwright = process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES
  ? await import(pathToFileURL(join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES, "playwright", "index.mjs")).href)
  : await import("playwright");
const moduleDir = process.env.RH_CHROMIUM_MODULE_DIR;
const chromium = moduleDir ? (await import(pathToFileURL(join(moduleDir, "build/index.js")).href)).default : null;
const options = { executablePath: chromium ? await chromium.executablePath(join(moduleDir, "bin")) : process.env.RH_CHROMIUM_PATH,
  args: chromium?.args ?? ["--no-sandbox"] };
const screenshots = process.env.RH_SCREENSHOTS_DIR;
if (screenshots) await mkdir(screenshots, { recursive: true });

const ads = {
  id: "ads4-boundary-ball-reconstruction",
  route: "/source-readout/ads4-boundary-ball-reconstruction",
  assets: "/publications/gravity/ads4-boundary-ball-reconstruction",
  doi: "10.5281/zenodo.24451446",
  proof: "theorem.7.7",
  highlight: { title: "Single-ball uniqueness up to sign", anchor: "theorem-7-7" },
  proofTitle: "Unconditional Single-Radius Infinite-Dimensional Physical Reconstruction",
  copyText: "\\mathcal E_{B(R_0,0,t)}",
  searchTerm: "Theorem 7.7",
  searchAnchor: "p-0063-b-16",
  additionalSearch: { term: "Quantitative Stability and Analytic-Continuation Ill-Conditioning", slug: "quantitative-stability-and-analytic-continuation-ill-conditioning" },
};
const haar = {
  id: "haar-critical",
  route: "/articles/haar-critical",
  assets: "/publications/haar-critical",
  doi: "10.5281/zenodo.24451371",
  proof: "windowresult.1",
  highlight: { title: "Signed depth-one certificate", anchor: "theorem-22-w1" },
  proofTitle: "Verified signed-window disk",
  copyText: "0.507915310133050",
  searchTerm: "0.000263562330130",
  searchAnchor: "theorem-22-w1",
  additionalSearch: { term: "Noninteger moments across consecutive critical radii", slug: "noninteger-moments-across-consecutive-critical-radii" },
};

const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
function* descend(node) {
  yield node;
  for (const child of node.childNodes ?? []) yield* descend(child);
}
async function target(edition, name) {
  const folder = "content/reading-editions/" + edition.id;
  const chapters = JSON.parse(await readFile(join(folder, "chapters.json"), "utf8"));
  for (const chapter of chapters) {
    const source = await readFile(join(folder, chapter.slug + ".html"), "utf8");
    if (!source.includes('data-pdf-destination="' + name + '"')) continue;
    const node = [...descend(parseFragment(source))].find(node => attr(node, "data-pdf-destination") === name);
    if (node) return { route: edition.route + "/" + chapter.slug, id: attr(node, "id"), chapter };
  }
  throw new Error(edition.id + " missing native destination " + name);
}
async function go(page, path) {
  const result = await page.goto(new URL(path, origin).href, { waitUntil: "domcontentloaded" });
  assert.equal(result?.status(), 200, path);
  console.log("Loaded " + path);
  return result;
}
async function noHorizontalOverflow(page, label) {
  const sizes = await page.evaluate(() => [document.documentElement.clientWidth, document.documentElement.scrollWidth]);
  assert(sizes[1] <= sizes[0] + 1, label + " overflows the viewport " + sizes.join("/"));
}
async function checkFragment(page, expected) {
  const fragment = decodeURIComponent(new URL(page.url()).hash.slice(1));
  if (expected) assert.equal(fragment, expected);
  assert(fragment, "Navigation did not include a proof fragment");
  const destination = page.locator('[id="' + fragment + '"]');
  await destination.waitFor({ state: "attached" });
  let scrolled = false;
  for (let attempt = 0; attempt < 40 && !scrolled; attempt++) {
    scrolled = await destination.evaluate(node => {
      const rect = node.getBoundingClientRect();
      return rect.top >= -1 && rect.top < window.innerHeight;
    });
    if (!scrolled) await pause(125);
  }
  assert(scrolled, "Reader did not scroll to " + fragment);
}
async function saveImage(locator, name) {
  if (!screenshots) return;
  await locator.evaluate(node => node.scrollIntoView({ block: "center", behavior: "instant" }));
  await locator.page().screenshot({ path: join(screenshots, name + ".png") });
}
async function checkVector(locator) {
  await locator.waitFor();
  let painted = false;
  for (let attempt = 0; attempt < 40 && !painted; attempt++) {
    painted = await locator.evaluate(node => {
      const box = node.getBBox();
      return box.width > 0 && box.height > 0;
    });
    if (!painted) await pause(125);
  }
  assert(painted, "Source vector does not paint");
}

async function checkSearch(page, edition, term, route, expectedAnchor) {
  await go(page, edition.route + "/search");
  await page.getByRole("searchbox").fill(term);
  await page.getByRole("button", { name: "Search", exact: true }).press("Enter");
  const result = expectedAnchor
    ? page.locator(".rh-search-results a").first()
    : page.locator('.rh-search-results a[href^="' + route + '#"]').first();
  await result.waitFor();
  await result.press("Enter");
  await page.waitForURL(new RegExp(route + "#"));
  await checkFragment(page, expectedAnchor);
  console.log("Search landed on " + new URL(page.url()).hash + " for " + term);
}

const browser = await playwright.chromium.launch(options);
try {
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 },
    permissions: ["clipboard-read", "clipboard-write"] });
  const page = await mobile.newPage();
  const failures = [];
  page.on("pageerror", error => failures.push(error.message));
  const proofTargets = new Map();
  for (const edition of [ads, haar]) {
    const landing = await go(page, edition.route);
    assert.match(landing.headers()["content-security-policy"] ?? "", /default-src/);
    await noHorizontalOverflow(page, edition.id + " landing");
    assert.equal(await page.locator('a[href="https://doi.org/' + edition.doi + '"]').count(), 1);
    assert.equal(await page.getByRole("link", { name: "Original PDF" }).getAttribute("href"), edition.assets + "/paper.pdf");

    const proof = await target(edition, edition.proof);
    proofTargets.set(edition.id, proof);
    const featured = page.getByRole("link", { name: edition.highlight.title });
    const featuredUrl = proof.route + "#" + edition.highlight.anchor;
    assert.equal(await featured.getAttribute("href"), featuredUrl);
    await featured.click();
    await page.waitForURL(new URL(featuredUrl, origin).href);
    await checkFragment(page, edition.highlight.anchor);
    assert.equal(await page.locator('[id="' + proof.id + '"]').count(), 1);
    const body = page.locator("#rh-reading-body");
    assert((await body.innerText()).replace(/\s+/g, " ").includes(edition.proofTitle));
    await noHorizontalOverflow(page, edition.id + " proof");
    assert.equal(await page.locator('a[href="' + edition.assets + "/paper.pdf#page=" + proof.chapter.firstPage + '"]').count(), 1);
    const copyPanel = body.locator("details.rh-formula-transcript").filter({
      has: page.locator("pre", { hasText: edition.copyText }),
    }).first();
    if (!await copyPanel.locator("pre").isVisible()) await copyPanel.locator("summary").press("Enter");
    await copyPanel.locator("pre").waitFor();
    const latex = await copyPanel.locator("pre").textContent();
    await copyPanel.getByRole("button", { name: "Copy notation" }).press("Enter");
    await page.getByText("Notation copied.", { exact: true }).waitFor();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), latex);
    assert(latex.includes(edition.copyText));
    const containingFigure = copyPanel.locator("..");
    assert(await containingFigure.locator(".rh-semantic-display math").count() >= 1);
    await checkVector(containingFigure.locator(".rh-formula-original svg use"));
    await saveImage(containingFigure, edition.id + "-mobile-math");

    await checkSearch(page, edition, edition.searchTerm, proof.route, edition.searchAnchor);
    const additional = edition.additionalSearch;
    await checkSearch(page, edition, additional.term, edition.route + "/" + additional.slug);
    const table = await target(edition, "table.1");
    await go(page, table.route + "#" + table.id);
    await noHorizontalOverflow(page, edition.id + " table chapter");
    const tablePanel = page.locator('figure.rh-table-source[data-table-number="1"]').first();
    await checkVector(tablePanel.locator(".rh-formula-original svg use"));
    const tableSummary = tablePanel.locator("summary");
    await tableSummary.press("Enter");
    assert(await tablePanel.locator("table").isVisible());
    await noHorizontalOverflow(page, edition.id + " open table");
  }
  assert.deepEqual(failures, []);
  const desktop = await browser.newContext({ viewport: { width: 1380, height: 940 }, javaScriptEnabled: false });
  const staticPage = await desktop.newPage();
  for (const edition of [ads, haar]) {
    const proof = proofTargets.get(edition.id);
    await go(staticPage, proof.route);
    assert((await staticPage.locator("#rh-reading-body").innerText()).replace(/\s+/g, " ").includes(edition.proofTitle));
    assert(await staticPage.locator("#rh-reading-body .rh-semantic-display math").count() > 0);
    const table = await target(edition, "table.1");
    await go(staticPage, table.route + "#" + table.id);
    const wrapper = staticPage.locator('figure.rh-table-source[data-table-number="1"]').first();
    await checkVector(wrapper.locator(".rh-formula-original svg use"));
    const semanticTable = wrapper.locator("table");
    if (!await semanticTable.isVisible()) await wrapper.locator("summary").press("Enter");
    await semanticTable.waitFor();
    assert(await semanticTable.locator("tr").count() > 1);
    await saveImage(wrapper, edition.id + "-desktop-table");
  }
  for (const name of ["figure.1", "figure.2"]) {
    const figure = await target(haar, name);
    await go(staticPage, figure.route + "#" + figure.id);
    const wrapper = staticPage.locator('figure[data-figure-number="' + name.split(".")[1] + '"]');
    if (await wrapper.count()) {
      await checkVector(wrapper.locator("svg use").first());
      await saveImage(wrapper, "haar-critical-" + name);
    } else {
      throw new Error("Haar chapter has no visible figure wrapper for " + name);
    }
  }
  for (const route of [
    "/articles/riemann-hypothesis", "/source-readout/gravity-and-holography",
    "/source-readout/boundary-ball-readouts", "/source-readout/second-order-boundary-balls",
  ]) await go(staticPage, route);
  console.log("Both editions passed Chromium checks for DOI and PDF access, mobile layout, copied LaTeX, MathML, formula/figure paint, search jumps, no-JavaScript proofs, tables, and inherited routes.");
} finally {
  await browser.close();
}
