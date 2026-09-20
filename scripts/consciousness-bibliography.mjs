/** Extract the author's embedded bibliography and render its fields deterministically.+ * Number order is checked against the archival PDF's 54-entry bibliography.
 * Entry typography is adapted for the web; names, titles, publication fields and
 * qualification notes come from the genuine source, never generated citations.
 */
import fs from "node:fs";
import path from "node:path";

export function prepareBibliography(original, assetDir, root) {
  const bib = /\\begin\{filecontents\*\}[^\n]*\n([\s\S]*?)\\end\{filecontents\*\}/.exec(original)?.[1];
  if (!bib) throw new Error("Missing embedded bibliography");
  function group(s, i) {
    while (/\s/.test(s[i])) i++;
    if (s[i] !== "{") throw new Error(`Expected bibliography field at ${i}`);
    const start = ++i; let depth = 1;
    while (depth && i < s.length) {
      if (s[i] === "\\") { i += 2; continue; }
      if (s[i] === "{") depth++;
      if (s[i] === "}") depth--;
      i++;
    }
    if (depth) throw new Error("Unclosed bibliography field");
    return { value: s.slice(start, i - 1), end: i };
  }
  const entries = new Map();
  for (const m of bib.matchAll(/@(\w+)\{([^,]+),/g)) {
    let i = m.index + m[0].length; const fields = {};
    while (true) {
      const f = /^\s*,?\s*(\w+)\s*=\s*/.exec(bib.slice(i));
      if (!f) break;
      const field = group(bib, i + f[0].length); fields[f[1]] = field.value; i = field.end;
    }
    entries.set(m[2], { type: m[1], fields });
  }
  const order = JSON.parse(fs.readFileSync(path.join(root, "docs/consciousness/bibliography-order.json"), "utf8"));
  if (order.length !== entries.size || new Set(order).size !== entries.size || order.some(key => !entries.has(key))) throw new Error("Bibliography ordering does not cover the embedded source exactly");
  function authors(text) {
    const names = text.split(" and ").map(name => {
      if (name === "others") return "et al.";
      const split = name.split(", "); return split.length === 2 ? `${split[1]} ${split[0]}` : name;
    });
    return names.length < 2 ? names[0] : names.slice(0, -1).join(", ") + (names.length > 2 ? ", and " : " and ") + names.at(-1);
  }
  const rows = order.map(key => {
    const { fields: f } = entries.get(key);
    let text = `${authors(f.author)}. ${f.title}. `;
    if (f.journal) {
      text += `\\emph{${f.journal}}${f.volume ? `, ${f.volume}` : ""}${f.number ? `(${f.number})` : ""}${f.pages ? `:${f.pages}` : ""}, ${f.year}. `;
    } else {
      if (f.booktitle) text += `In \\emph{${f.booktitle}}. `;
      for (const field of ["volume", "pages"]) if (f[field]) text += `${field[0].toUpperCase() + field.slice(1)} ${f[field]}. `;
      for (const field of ["howpublished", "publisher", "address"]) if (f[field]) text += `${f[field]}, `;
      if (f.month) text += f.month + " ";
      text += f.year + ". ";
    }
    if (f.note) text += f.note + ".";
    return `\\bibitem{${key}}\n${text}\n`;
  });
  const bbl = `\\begin{thebibliography}{99}\n${rows.join("\n")}\n\\end{thebibliography}`;
  fs.writeFileSync(path.join(assetDir, "Shadow_Theory_and_Consciousness_Final_References.bib"), bib);
  fs.writeFileSync(path.join(assetDir, "bibliography.bbl"), bbl);
  return { bbl, entries: Object.fromEntries(entries), order };
}
