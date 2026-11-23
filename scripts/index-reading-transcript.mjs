/** Index the server-rendered manuscript, keeping each hit attached to its reading anchor. */
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { parseFragment } from "parse5";

function extractPassages(fragment, chapter, passages, preferResultAnchors) {
  let anchor = "";
  let pendingResult = "";
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
      passageAnchor = pendingResult || anchor;
      pendingResult = "";
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
    if (tag === "math" && node.parentNode?.attrs?.some(attr => attr.name === "data-rh-checked-inline")) return;

    const id = node.attrs?.find(attr => attr.name === "id")?.value;
    if (id) {
      const namedResult = /^(?:theorem|lemma|proposition|corollary|definition)-/.test(id);
      if (length > 900 || tag === "tr" || namedResult || id.startsWith("eq-")) flush();
      if (preferResultAnchors && namedResult) pendingResult = id;
      anchor = id;
    }
    const isBlock = ["h1", "h2", "h3", "h4", "p", "div", "li", "pre", "figure", "tr", "th", "td", "br", "aside"].includes(tag);
    if (isBlock && length) append(" ");
    for (const child of node.childNodes ?? []) walk(child);
    if (isBlock && length) append(" ");
  }

  walk(fragment);
  flush();
}

export async function writeReadingIndex(sourceDirectory, output, { preferResultAnchors = false } = {}) {
  const directory = resolve(sourceDirectory);
  const chapters = JSON.parse(await readFile(resolve(directory, "chapters.json"), "utf8"));
  const titles = {};
  const passages = [];
  for (const chapter of chapters) {
    titles[chapter.slug] = chapter.title;
    const html = await readFile(resolve(directory, chapter.slug + ".html"), "utf8");
    extractPassages(parseFragment(html), chapter, passages, preferResultAnchors);
  }
  await writeFile(output, JSON.stringify({ titles, passages }) + "\n", "utf8");
  console.log(`Indexed ${passages.length} passages in ${chapters.length} reading divisions in ${sourceDirectory}.`);
}
