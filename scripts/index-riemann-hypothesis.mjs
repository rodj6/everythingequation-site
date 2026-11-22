/** Index the server-rendered manuscript, keeping each hit attached to its reading anchor. */
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { parseFragment } from "parse5";

const directory = resolve("content/riemann-hypothesis");
const chapters = JSON.parse(await readFile(resolve(directory, "chapters.json"), "utf8"));
const titles = {};
const passages = [];

function extractPassages(fragment, chapter) {
  let anchor = "";
  let parts = [];
  let length = 0;
  let passageAnchor = anchor;
  const seen = new Set();

  function flush() {
    const text = parts.join("").replace(/\s+/g, " ").trim();
    if (text && !seen.has(passageAnchor)) {
      passages.push({ slug: chapter.slug, anchor: passageAnchor, text });
      seen.add(passageAnchor);
    }
    parts = [];
    length = 0;
  }

  function append(text) {
    if (!length) {
      if (!text.trim() || !anchor) return;
      passageAnchor = anchor;
    }
    parts.push(text);
    length += text.length;
  }

  function walk(node) {
    const tag = node.tagName;
    if (node.nodeName === "#text") {
      append(node.value);
      return;
    }
    if (["script", "style", "button", "img", "svg", "annotation"].includes(tag)) return;
    if (node.attrs?.some(attr => attr.name === "aria-hidden" && attr.value === "true")) return;

    const id = node.attrs?.find(attr => attr.name === "id")?.value;
    if (id) {
      if (length > 900 || /^(?:theorem|lemma|proposition|corollary|definition|eq)-/.test(id)) flush();
      anchor = id;
    }
    const isBlock = ["h1", "h2", "h3", "h4", "p", "div", "li", "pre", "figure", "tr", "br", "aside"].includes(tag);
    if (isBlock && length) append(" ");
    for (const child of node.childNodes ?? []) walk(child);
    if (isBlock && length) append(" ");
  }

  walk(fragment);
  flush();
}

for (const chapter of chapters) {
  titles[chapter.slug] = chapter.title;
  const html = await readFile(resolve(directory, chapter.slug + ".html"), "utf8");
  extractPassages(parseFragment(html), chapter);
}
const output = resolve("public/publications/riemann-hypothesis/search.json");
await writeFile(output, JSON.stringify({ titles, passages }) + "\n", "utf8");
console.log(`Indexed ${passages.length} passages in ${chapters.length} reading divisions.`);
