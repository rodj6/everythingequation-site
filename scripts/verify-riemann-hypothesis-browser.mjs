/** Browser smoke test for the RH production reader. Pass a running site's origin. */
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const origin = process.argv[2];
if (!origin) throw new Error("Pass the origin of a running production build");
const playwright = process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES
  ? await import(pathToFileURL(join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES, "playwright", "index.mjs")).href)
  : await import("playwright");
const browser = await playwright.chromium.launch({
  executablePath: process.env.RH_CHROMIUM_PATH || undefined,
  args: ["--no-sandbox"],
});
const root = "/articles/riemann-hypothesis";
const chapters = JSON.parse(await readFile("content/riemann-hypothesis/chapters.json", "utf8"));
function chapter(number) {
  const entry = chapters.find(item => item.number === number);
  assert(entry, `Missing section ${number}`);
  return root + "/" + entry.slug;
}

async function go(page, path) {
  const response = await page.goto(new URL(path, origin).href, { waitUntil: "domcontentloaded" });
  assert.equal(response?.status(), 200, path);
  return response;
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
  assert.match(initial.headers()["content-security-policy"] ?? "", /default-src/);
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
  await heading.focus();
  await heading.press("Enter");
  assert.equal(await formula.getAttribute("open"), "");
  const copied = await formula.locator("pre").textContent();
  await formula.getByRole("button", { name: "Copy notation" }).press("Enter");
  await page.getByText("Notation copied.", { exact: true }).waitFor();
  const actual = await page.evaluate(() => navigator.clipboard.readText());
  assert.equal(actual, copied);
  assert(actual.includes("anyGeometry"), "The overfull extension display lost its final argument");
  assert(await page.locator(".rh-semantic-display math").count() >= 1);

  const vector = page.locator(".rh-formula-original svg use").first();
  await vector.waitFor();
  const [asset, fragment] = (await vector.getAttribute("href")).split("#");
  const vectorResponse = await page.request.get(new URL(asset, origin).href);
  assert.equal(vectorResponse.status(), 200);
  assert((await vectorResponse.text()).includes(`id="${fragment}"`));
  await page.waitForFunction(() => {
    const item = document.querySelector(".rh-formula-original svg use");
    return item?.getBBox().width > 0;
  });

  const inline = page.locator(".rh-inline-math").first();
  await inline.focus();
  const inlineCode = inline.locator(".rh-inline-transcript code");
  assert(await inlineCode.isVisible(), "Keyboard focus should expose selectable inline notation");
  assert((await inlineCode.textContent()).trim(), "Inline notation is empty");
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
  assert.deepEqual(JSerrors, []);

  const withoutJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1280, height: 960 } });
  const staticPage = await withoutJS.newPage();
  await go(staticPage, assembly);
  const text = await staticPage.locator("#rh-reading-body").textContent();
  assert(text.includes("Construction of one compatible family-selection bundle"));
  assert(text.includes("Discharge of all terminal inputs and final assembly"));
  assert(text.includes("anyGeometry"));
  assert(await staticPage.locator(".rh-semantic-display math").count() >= 1);

  console.log("RH browser checks passed for production CSP, mobile width, print vectors, keyboard activation, copied LaTeX, search navigation and reading without JavaScript.");
} finally {
  await browser.close();
}
