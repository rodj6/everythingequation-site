/** Browser smoke test for the RH production reader. Pass a running site's origin. */
import assert from "node:assert/strict";
import { mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { setTimeout as pause } from "node:timers/promises";

const origin = process.argv[2];
if (!origin) throw new Error("Pass the origin of a running production build");
const playwright = process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES
  ? await import(pathToFileURL(join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES, "playwright", "index.mjs")).href)
  : await import("playwright");
const chromiumModule = process.env.RH_CHROMIUM_MODULE_DIR;
const chromium = chromiumModule
  ? (await import(pathToFileURL(join(chromiumModule, "build", "index.js")).href)).default
  : null;
const browser = await playwright.chromium.launch({
  executablePath: chromium ? await chromium.executablePath(join(chromiumModule, "bin")) : process.env.RH_CHROMIUM_PATH,
  args: chromium?.args ?? ["--no-sandbox"],
});
const root = "/articles/riemann-hypothesis";
const screenshots = process.env.RH_SCREENSHOTS_DIR;
if (screenshots) await mkdir(screenshots, { recursive: true });
async function screenshot(locator, name) {
  if (screenshots) await locator.screenshot({ path: join(screenshots, name + ".png"), animations: "disabled" });
}
const chapters = JSON.parse(await readFile("content/riemann-hypothesis/chapters.json", "utf8"));
function chapter(number) {
  const entry = chapters.find(item => item.number === number);
  assert(entry, `Missing section ${number}`);
  return root + "/" + entry.slug;
}

async function go(page, path) {
  const response = await page.goto(new URL(path, origin).href, { waitUntil: "domcontentloaded" });
  assert.equal(response?.status(), 200, path);
  console.log("Loaded " + path);
  return response;
}

async function inspectTable(page, number) {
  const panel = page.locator('figure.rh-table-source[data-table-number="' + number + '"]').first();
  const vector = panel.locator(".rh-formula-original svg use");
  await vector.waitFor();
  let painted = false;
  for (let attempt = 0; attempt < 40 && !painted; attempt++) {
    painted = await vector.evaluate(node => node.getBBox().width > 0);
    if (!painted) await pause(125);
  }
  assert(painted, "Table " + number + " vector has no printed content");
  const table = panel.locator("table");
  if (!await table.isVisible()) await panel.locator("summary").press("Enter");
  await table.waitFor();
  assert(await table.locator("th[scope=col]").count() >= 3, "Table lacks semantic column headers");
  assert(await table.locator("th[scope=row]").count() > 0, "Table lacks semantic row headers");
  return table;
}

async function checkMobileWidth(page, label) {
  await page.locator(".rh-reading-body").waitFor();
  const sizes = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    document: document.documentElement.scrollWidth,
  }));
  assert(sizes.document <= sizes.viewport + 1, `${label} overflows the viewport: ${JSON.stringify(sizes)}`);
}

try {
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 },
    permissions: ["clipboard-read", "clipboard-write"] });
  const page = await mobile.newPage();
  const JSerrors = [];
  page.on("pageerror", error => JSerrors.push(error.message));

  const initial = await go(page, root);
  if (!process.env.RH_BROWSER_FIXTURE) assert.match(initial.headers()["content-security-policy"] ?? "", /default-src/);
  assert.equal(await page.locator('a[href="https://doi.org/10.5281/zenodo.24473551"]').count() > 0, true);
  assert.equal(await page.locator('a[href="https://doi.org/10.5281/zenodo.24433884"]').count() > 0, true);
  await page.getByRole("link", { name: "Start reading" }).press("Enter");
  await page.waitForURL("**/title-abstract-and-contents");
  assert.match(await page.locator("#rh-reading-body").innerText(), /Levent Alpöge/);

  await go(page, chapter("1"));
  assert.match(await page.locator("#rh-reading-body").innerText(), /GPT\/Codex/);

  const assembly = chapter("17.4");
  await go(page, assembly + "#theorem-17-4");
  await checkMobileWidth(page, "Section 17.4");
  assert.equal(await page.locator("#theorem-17-4").count(), 1);
  assert.equal(await page.locator("#theorem-17-5").count(), 1);
  const formula = page.locator(".rh-formula-transcript").filter({ hasText: "Checked LaTeX" }).filter({
    has: page.locator("pre", { hasText: "parametersOfExtension" }),
  });
  const heading = formula.locator("summary");
  if (await heading.count() && !await formula.locator("pre").isVisible()) {
    await heading.focus();
    await heading.press("Enter");
  }
  await formula.locator("pre").waitFor();
  const copied = await formula.locator("pre").textContent();
  await formula.getByRole("button", { name: "Copy notation" }).press("Enter");
  await page.getByText("Notation copied.", { exact: true }).waitFor();
  const actual = await page.evaluate(() => navigator.clipboard.readText());
  assert.equal(actual, copied);
  assert(actual.includes("anyGeometry"), "The Version 2 extension display lost its final argument");
  assert(actual.includes("N_A"), "The Version 2 extension display omits its named extension N_A");
  await screenshot(formula.locator(".."), "mobile-parameter-extension");
  assert(await page.locator(".rh-semantic-display math").count() >= 1);

  const vector = page.locator("figure.rh-formula .rh-formula-original svg use").first();
  await vector.waitFor();
  const [asset, fragment] = (await vector.getAttribute("href")).split("#");
  const vectorResponse = await page.request.get(new URL(asset, origin).href);
  assert.equal(vectorResponse.status(), 200);
  assert((await vectorResponse.text()).includes(`id="${fragment}"`));
  await page.waitForFunction(() => {
    const item = document.querySelector("figure.rh-formula .rh-formula-original svg use");
    return item?.getBBox().width > 0;
  });

  const inline = page.locator(".rh-inline-math").first();
  await inline.focus();
  const inlineCode = inline.locator(".rh-inline-transcript code");
  assert(await inlineCode.isVisible(), "Keyboard focus should expose selectable inline notation");
  assert((await inlineCode.textContent()).trim(), "Inline notation is empty");
  await checkMobileWidth(page, "Focused inline notation");
  const leanSource = page.locator("#rh-reading-body code").filter({ hasText: "Main.lean" }).first();
  assert.match(await leanSource.textContent(), /Main\.lean/);
  const selection = await leanSource.evaluate(element => {
    const range = document.createRange();
    range.selectNodeContents(element);
    const current = window.getSelection();
    current.removeAllRanges();
    current.addRange(range);
    return current.toString();
  });
  assert.match(selection, /Main\.lean/);

  await go(page, chapter("7.14"));
  await checkMobileWidth(page, "Section 7.14");
  await go(page, chapter("8.15"));
  await checkMobileWidth(page, "Section 8.15");

  await go(page, chapter("18.1") + "#table-5");
  await checkMobileWidth(page, "Literature input audit");
  const table = await inspectTable(page, 5);
  await screenshot(page.locator('figure[data-table-number="5"] .rh-formula-original').first(), "mobile-table-5");
  assert(await table.locator("th").count() >= 4, "Literature table lacks semantic column headers");
  assert(await table.getByRole("cell", { name: /Clozel|Automorphic|Algebraic/i }).count() > 0);
  const tableLayout = await table.evaluate(element => {
    const ancestor = element.closest(".rh-formula-transcript") ?? element;
    return { width: ancestor.clientWidth, scrollWidth: ancestor.scrollWidth, body: document.documentElement.clientWidth };
  });
  assert(tableLayout.width <= tableLayout.body, "Mobile table overflows its containing layout");
  await checkMobileWidth(page, "Expanded literature table");

  await go(page, root + "/search");
  await page.getByRole("searchbox").fill("Theorem 17.5");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  const results = page.locator(".rh-search-results a");
  await results.first().waitFor();
  const assemblyMatch = results.filter({ hasText: "Construction of the compatible family bundle and final assembly" }).first();
  const target = await assemblyMatch.getAttribute("href");
  assert(target?.startsWith(assembly + "#"));
  await assemblyMatch.click();
  await checkMobileWidth(page, "Search destination");
  assert.equal(await page.evaluate(() => !!document.querySelector(":target")), true, "Search result has no reading target");
  await go(page, root + "/search");
  await page.getByRole("searchbox").fill("weilRepresentationExists");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  const fieldHit = page.locator('.rh-search-results a[href$="#table-6-row-53"]');
  await fieldHit.waitFor();
  await fieldHit.click();
  await page.locator("#table-6-row-53").waitFor();
  assert.match(await page.locator("#table-6-row-53").innerText(), /weilRepresentationExists/);
  assert.deepEqual(JSerrors, []);

  const withoutJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1280, height: 960 } });
  const staticPage = await withoutJS.newPage();
  await go(staticPage, assembly);
  const text = await staticPage.locator("#rh-reading-body").textContent();
  assert(text.includes("Construction of one compatible family-selection bundle"));
  assert(text.includes("Discharge of all terminal inputs and final assembly"));
  assert(text.includes("anyGeometry"));
  assert(text.includes("At23OfAll"));
  assert(await staticPage.locator(".rh-semantic-display math").count() >= 1);
  const visibleText = await staticPage.locator("#rh-reading-body").innerText();
  assert(visibleText.includes("Discharge of all terminal inputs and final assembly"));
  await go(staticPage, chapter("18.1"));
  const noscriptTable = await inspectTable(staticPage, 6);
  assert.equal(await noscriptTable.locator("td").first().isVisible(), true);

  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const desktop = await desktopContext.newPage();
  const coverage = JSON.parse(await readFile("docs/riemann-hypothesis/coverage.json", "utf8"));
  const tableRoutes = new Map();
  for (const page of coverage.pages) {
    for (const block of page.blocks) {
      if (block.tableNumber && !tableRoutes.has(block.tableNumber)) {
        tableRoutes.set(block.tableNumber, root + "/" + block.chapter);
      }
    }
  }
  assert.equal(tableRoutes.size, 6);
  for (const [tableNumber, route] of tableRoutes) {
    await go(desktop, route);
    await inspectTable(desktop, tableNumber);
    await screenshot(desktop.locator(`figure[data-table-number="${tableNumber}"] .rh-formula-original`).first(), `desktop-table-${tableNumber}`);
  }
  console.log("RH browser checks passed for production CSP, mobile width, print vectors, keyboard activation, copied LaTeX, lineage, search navigation, tables and reading without JavaScript.");
} finally {
  await browser.close();
}
