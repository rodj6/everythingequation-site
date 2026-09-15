/**
 * Deterministic, source-preserving conversion of the fixed quantum publications.
 * Run: node scripts/convert-quantum.mjs [--source-dir <directory>]
 * The checked-in original .tex files are the default input. Original bytes and
 * PDFs are immutable. No scientific rewriting or equation simplification occurs.
 * HTML contains KaTeX HTML+MathML; Markdown retains the source mathematics.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import katex from "katex";
import { parseFragment } from "parse5";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetDir = path.join(root, "public/publications/quantum-measurement");
const contentDir = path.join(root, "content/quantum");
const sourceArg = process.argv.indexOf("--source-dir");
const sourceDir = sourceArg < 0 ? assetDir : path.resolve(process.argv[sourceArg + 1]);
const sources = [
  { id: "monograph", source: "Shadow_Quantum_Measurement_Monograph_v2.tex", pdf: "Shadow_Quantum_Measurement_Monograph.pdf", book: true },
  { id: "pilot-medium", source: "Pilot_Medium_Bell_Resolution_v2.tex", pdf: "Pilot_Medium_Bell_Resolution.pdf", book: false },
  { id: "massive-configuration", source: "Event_Law_Resolution_v2.tex", pdf: "Event_Law_Resolution.pdf", book: false },
];
fs.mkdirSync(assetDir, { recursive: true });
fs.mkdirSync(contentDir, { recursive: true });
const escape = s => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const slugify = s => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const hash = s => crypto.createHash("sha256").update(s).digest("hex");
function stripComments(s) { return s.replace(/(?<!\\)%[^\n]*(?:\n|$)/g, ""); }
function groupAt(s, i, open = "{", close = "}") {
  while (/\s/.test(s[i] || "") && i < s.length) i++;
  if (s[i] !== open) return { value: "", end: i, found: false };
  const start = ++i; let depth = 1;
  while (i < s.length) {
    if (s[i] === "\\") { i += 2; continue; }
    if (s[i] === open) depth++;
    if (s[i] === close && --depth === 0) return { value: s.slice(start, i), end: i + 1, found: true };
    i++;
  }
  throw new Error(`Unclosed ${open} at ${start}: ${s.slice(start, start + 80)}`);
}
const oneArg = new Set(["part", "chapter", "section", "subsection", "subsubsection", "paragraph", "subparagraph", "label", "ref", "eqref", "pageref", "autoref", "cite", "citep", "citet", "emph", "textbf", "textit", "texttt", "textsc", "textrm", "textnormal", "mbox", "url", "path", "footnote", "thanks", "caption", "includegraphics", "vspace", "hspace", "bibliographystyle", "textsuperscript", "textsubscript", "noindent", "phantom", "fbox", "underline"]);
const zeroArg = new Set(["maketitle", "tableofcontents", "newpage", "clearpage", "cleardoublepage", "frontmatter", "mainmatter", "backmatter", "appendix", "small", "footnotesize", "normalsize", "large", "Large", "bfseries", "itshape", "centering", "raggedright", "arraybackslash", "toprule", "midrule", "bottomrule", "hline", "endhead", "endfirsthead", "endfoot", "endlastfoot", "noindent", "medskip", "smallskip", "bigskip", "hfill", "vfill", "protect", "relax"]);
const twoArg = new Set(["href", "setcounter", "setlength", "textcolor"]);
const threeArg = new Set(["addcontentsline", "multicolumn"]);
const mathEnvs = new Set(["equation", "equation*", "align", "align*", "gather", "gather*", "multline", "multline*", "displaymath"]);
const theoremEnvs = new Set(["theorem", "lemma", "proposition", "corollary", "definition", "assumption", "example", "counterexample", "remark"]);

function parse(s) {
  const nodes = []; let i = 0;
  const put = node => nodes.push(node);
  while (i < s.length) {
    const start = i;
    if (s[i] === "$" || s.startsWith("\\[", i) || s.startsWith("\\(", i)) {
      const token = s[i] === "$" ? (s[i + 1] === "$" ? "$$" : "$") : s.slice(i, i + 2);
      const endToken = token === "\\[" ? "\\]" : token === "\\(" ? "\\)" : token;
      const end = s.indexOf(endToken, i + token.length);
      if (end < 0) throw new Error(`Unclosed math at ${i}: ${s.slice(i, i+80)}`);
      put({ type: "math", display: token === "$$" || token === "\\[", raw: s.slice(i + token.length, end), env: "", start });
      i = end + endToken.length; continue;
    }
    if (s[i] === "{") {
      const group = groupAt(s, i); put({ type: "group", children: parse(group.value), raw: group.value, start }); i = group.end; continue;
    }
    if (s[i] !== "\\") {
      while (i < s.length && !["\\", "$", "{"].includes(s[i])) i++;
      put({ type: "text", raw: s.slice(start, i), start }); continue;
    }
    const match = /^\\([a-zA-Z]+\*?|[^a-zA-Z])/.exec(s.slice(i));
    if (!match) { put({ type: "text", raw: "\\", start }); i++; continue; }
    const name = match[1]; i += match[0].length;
    if (name === "begin") {
      const group = groupAt(s, i); i = group.end; const env = group.value;
      const optional = groupAt(s, i, "[", "]"); i = optional.end;
      const args = [];
      const count = env === "tabularx" ? 2 : ["tabular", "longtable", "thebibliography"].includes(env) ? 1 : 0;
      for (let k = 0; k < count; k++) { const a = groupAt(s, i); args.push(a.value); i = a.end; }
      const beginToken = `\\begin{${env}}`; const endToken = `\\end{${env}}`; let j = i; let depth = 1; let end;
      while (depth) {
        end = s.indexOf(endToken, j); if (end < 0) throw new Error(`Unclosed environment ${env}`);
        const nested = s.indexOf(beginToken, j);
        if (nested >= 0 && nested < end) { depth++; j = nested + beginToken.length; }
        else { depth--; j = end + endToken.length; }
      }
      const raw = s.slice(i, end); i = j;
      put(mathEnvs.has(env)
        ? { type: "math", display: true, env, raw, start }
        : { type: "environment", env, option: optional.value, args, raw, children: ["tabular", "tabularx", "longtable"].includes(env) ? [] : parse(raw), start });
      continue;
    }
    if (["providecommand", "newcommand", "renewcommand"].includes(name)) {
      const command = groupAt(s, i); i = command.end;
      const option = groupAt(s, i, "[", "]"); i = option.end;
      const body = groupAt(s, i); i = body.end;
      put({ type: "macro", name: command.value, option: option.value, raw: body.value, start }); continue;
    }
    const base = name.replace(/\*$/, ""); let option = "";
    if ([...oneArg, "bibitem", "item"].includes(base)) { const o = groupAt(s, i, "[", "]"); option = o.value; i = o.end; }
    const count = zeroArg.has(base) ? 0 : threeArg.has(base) ? 3 : twoArg.has(base) ? 2 : oneArg.has(base) || base === "bibitem" ? 1 : 0;
    const args = [];
    for (let k = 0; k < count; k++) { const a = groupAt(s, i); args.push(a.value); i = a.end; }
    // TeX accents are control symbols followed by either one character or a group.
    if (["\"", "'", "`", "^", "~", "=", "."].includes(name)) {
      const a = groupAt(s, i); if (a.found) { args.push(a.value); i = a.end; } else { args.push(s[i++] || ""); }
    }
    put({ type: "command", name, option, args, start });
  }
  return nodes;
}
function plain(s) {
  return s.replace(/\\(?:emph|textbf|textit|texttt|textsc|textrm|textnormal)\{([^{}]*)\}/g, "$1")
    .replace(/\\(?:small|large|normalsize|bfseries)\b/g, "").replace(/\\\\(?:\[[^\]]*\])?/g, " ")
    .replace(/\\"\{?o\}?/g, "ö").replace(/\\"\{?u\}?/g, "ü").replace(/[{}]/g, "")
    .replace(/~/g, " ").replace(/---/g, "—").replace(/--/g, "–").replace(/\s+/g, " ").trim();
}
function roman(n) { return ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][n] || String(n); }
function expandMacros(tex, macros) {
  for (let pass = 0; pass < 12; pass++) {
    let changed = false;
    let result = ""; let pos = 0;
    for (const match of tex.matchAll(/\\[a-zA-Z]+/g)) {
      if (match.index < pos || !Object.hasOwn(macros, match[0])) continue;
      result += tex.slice(pos, match.index); let end = match.index + match[0].length;
      let body = macros[match[0]]; const count = Math.max(0, ...[...body.matchAll(/#(\d)/g)].map(m => Number(m[1])));
      for (let i = 1; i <= count; i++) {
        while (/\s/.test(tex[end] || "") && end < tex.length) end++;
        const group = groupAt(tex, end); let value;
        if (group.found) { value = group.value; end = group.end; }
        else { const token = /^\\[a-zA-Z]+|^./s.exec(tex.slice(end)); value = token?.[0] || ""; end += value.length; }
        body = body.replaceAll(`#${i}`, value);
      }
      result += `{${body}}`; pos = end; changed = true;
    }
    result += tex.slice(pos); tex = result;
    if (!changed) return tex;
  }
  throw new Error("Recursive macro expansion did not terminate");
}
function splitTop(s, delimiter) {
  const parts = []; let start = 0; let depth = 0; let envDepth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.startsWith("\\begin{", i)) envDepth++;
    if (s.startsWith("\\end{", i)) envDepth--;
    if (s[i] === "{" && s[i - 1] !== "\\") depth++;
    if (s[i] === "}" && s[i - 1] !== "\\") depth--;
    if (depth === 0 && envDepth === 0 && s.startsWith(delimiter, i) && (delimiter !== "&" || s[i - 1] !== "\\")) {
      parts.push(s.slice(start, i)); i += delimiter.length - 1; start = i + 1;
    }
  }
  parts.push(s.slice(start)); return parts;
}

const inventory = []; const audit = { schemaVersion: 1, converter: "scripts/convert-quantum.mjs", documents: [] };
for (const source of sources) {
  const sourcePath = path.join(sourceDir, sourceDir === assetDir ? `${source.id}.tex` : source.source);
  const bytes = fs.readFileSync(sourcePath); const original = bytes.toString("utf8"); const clean = stripComments(original);
  if (sourceDir !== assetDir) {
    fs.copyFileSync(sourcePath, path.join(assetDir, `${source.id}.tex`));
    fs.copyFileSync(path.join(sourceDir, source.pdf), path.join(assetDir, `${source.id}.pdf`));
  }
  const macros = {};
  // Extract declarations from the entire publication, including part-local aliases.
  const macroRE = /\\(?:providecommand|newcommand|renewcommand)\s*/g;
  for (const m of clean.matchAll(macroRE)) {
    let g = groupAt(clean, m.index + m[0].length); const command = g.value;
    const o = groupAt(clean, g.end, "[", "]"); g = groupAt(clean, o.end);
    if (/^\\[a-zA-Z]+$/.test(command) && !["\\tabularxcolumn"].includes(command)) macros[command] = g.value;
  }
  const bodyStart = clean.indexOf("\\begin{document}") + "\\begin{document}".length;
  const body = clean.slice(bodyStart, clean.lastIndexOf("\\end{document}"));
  const nodes = parse(body);
  const labels = new Map(); const citations = new Map(); const unresolved = []; const unknown = new Set(); const mathErrors = [];
  let chapter = 0, section = 0, subsection = 0, subsubsection = 0, part = 0, eq = 0, theorem = 0, figure = 0, bib = 0, appendix = false;
  let current = { number: "", kind: "" }; let currentDoc;
  const documents = []; let genericHeading = 0;
  function newDocument(title, kind, number, rawTitle) {
    let slug = slugify(title); if (kind === "appendix") slug = `appendix-${number.toLowerCase()}-${slug}`;
    const doc = { publicationId: source.id, slug, title, label: number ? `${kind[0].toUpperCase() + kind.slice(1)} ${number}` : "", kind, order: documents.length + 1, url: source.book ? `/quantum-measurement/monograph/${slug}` : `/quantum-measurement/${source.id}`, part: part ? roman(part) : "", sections: [], stats: { equations: 0, displayEquations: 0, theorems: 0, proofs: 0, tables: 0, bibliographyEntries: 0, figures: 0 }, nodes: [], rawTitle };
    doc.markdownUrl = source.book ? `/publications/quantum-measurement/chapters/${slug}.md` : `/publications/quantum-measurement/${source.id}.md`;
    documents.push(doc); currentDoc = doc; return doc;
  }
  if (!source.book) newDocument(source.id === "pilot-medium" ? "A Deterministic Pilot Medium: Bell Path Selection and Autonomous Material Records" : "A Massive Configuration Completion of the Quantum Measurement Programme", "paper", "", "");
  const chapterNumber = () => appendix ? String.fromCharCode(64 + chapter) : String(chapter);
  const numberingPrefix = () => source.book ? `${chapterNumber()}.` : "";
  function register(key, target = current) {
    if (labels.has(key)) throw new Error(`Duplicate source label ${source.id}:${key}`);
    labels.set(key, { ...target, url: `${currentDoc.url}#${key}`, document: currentDoc.slug });
  }
  function decorate(list) {
    for (const node of list) {
      if (node.type === "command") {
        const name = node.name.replace(/\*$/, ""); const starred = node.name.endsWith("*");
        if (name === "appendix") { appendix = true; chapter = 0; section = 0; }
        if (["part", "chapter"].includes(name) && source.book) {
          let number = "";
          if (name === "part") { part++; number = roman(part); }
          else if (!starred) { chapter++; number = chapterNumber(); section = 0; subsection = 0; subsubsection = 0; eq = 0; theorem = 0; figure = 0; }
          node.number = number; node.kind = name === "part" ? "part" : starred ? "frontmatter" : appendix ? "appendix" : "chapter";
          newDocument(plain(node.args[0]), node.kind, number, node.args[0]);
          current = { number, kind: name }; node.titleHeading = true;
        }
        if (["section", "subsection", "subsubsection", "paragraph", "subparagraph"].includes(name)) {
          if (name === "section" && !starred) { section++; subsection = 0; subsubsection = 0; if (!source.book) theorem = 0; }
          if (name === "subsection" && !starred) { subsection++; subsubsection = 0; }
          if (name === "subsubsection" && !starred) subsubsection++;
          const topNumber = !source.book && appendix ? String.fromCharCode(64 + section) : `${numberingPrefix()}${section}`;
          node.number = starred || name.includes("paragraph") ? "" : name === "section" ? topNumber : name === "subsection" ? `${topNumber}.${subsection}` : `${topNumber}.${subsection}.${subsubsection}`;
          node.anchor = node.number ? `section-${node.number.replaceAll(".", "-")}` : `paragraph-${++genericHeading}`;
          node.level = name === "section" ? 2 : name === "subsection" ? 3 : 4;
          current = { number: node.number, kind: name };
          currentDoc.sections.push({ anchor: node.anchor, title: plain(node.args[0]), number: node.number, level: node.level });
        }
        if (name === "label") register(node.args[0]);
        if (name === "caption" && current.kind === "figure") node.figureNumber = current.number;
        if (name === "bibitem") {
          bib++; node.number = node.option || String(bib); node.anchor = `bib-${node.args[0]}`;
          citations.set(node.args[0], { number: node.number, url: `${currentDoc.url}#${node.anchor}` }); currentDoc.stats.bibliographyEntries++;
        }
      }
      if (node.type === "math") {
        currentDoc.stats.equations++; if (node.display) currentDoc.stats.displayEquations++;
        node.labels = [];
        if (node.env && !node.env.endsWith("*") && node.env !== "displaymath") {
          // align increments once per numbered row; an equation containing split increments once.
          const rows = node.env === "align" || node.env === "gather" ? splitTop(node.raw, "\\\\") : [node.raw];
          node.rows = rows.map(raw => {
            const numbered = raw.trim() && !/\\(?:nonumber|notag)\b/.test(raw);
            const tag = /\\tag\{([^}]+)\}/.exec(raw)?.[1];
            const number = numbered ? tag || `${numberingPrefix()}${++eq}` : "";
            if (number) current = { number, kind: "equation" };
            for (const m of raw.matchAll(/\\label\{([^}]+)\}/g)) { register(m[1]); node.labels.push(m[1]); }
            return { raw, number };
          });
          node.number = node.rows.filter(r => r.number).map(r => r.number).join(", ");
        } else {
          for (const m of node.raw.matchAll(/\\label\{([^}]+)\}/g)) { register(m[1]); node.labels.push(m[1]); }
        }
      }
      if (node.type === "environment") {
        if (node.env === "thebibliography" && source.book) newDocument("Bibliography", "bibliography", "", "Bibliography");
        if (theoremEnvs.has(node.env)) {
          theorem++; node.number = source.book ? `${chapterNumber()}.${theorem}` : `${appendix ? String.fromCharCode(64 + section) : section}.${theorem}`;
          current = { number: node.number, kind: node.env }; currentDoc.stats.theorems++;
        }
        if (node.env === "proof") currentDoc.stats.proofs++;
        if (["tabular", "tabularx", "longtable"].includes(node.env)) {
          currentDoc.stats.tables++;
          node.rows = splitTop(node.raw.replace(/\\(?:toprule|midrule|bottomrule|hline|endhead|endfirsthead|endfoot|endlastfoot)\b/g, ""), "\\\\")
            .map(row => row.replace(/^\s*\[[^\]]*\]/, "")).filter(row => row.trim()).map(row => splitTop(row, "&").map(cell => parse(cell.trim())));
          for (const row of node.rows) for (const cell of row) decorate(cell);
        }
        if (node.env === "figure") { figure++; node.number = `${numberingPrefix()}${figure}`; current = { number: node.number, kind: "figure" }; currentDoc.stats.figures++; }
        decorate(node.children);
      }
      if (node.type === "group") decorate(node.children);
      node.document = currentDoc?.slug;
    }
  }
  decorate(nodes);
  for (const node of nodes) { if (node.document) documents.find(doc => doc.slug === node.document).nodes.push(node); }
  // All input nodes before the first frontmatter chapter are typography-only.
  const unassigned = nodes.filter(node => !node.document && !(node.type === "text" && !node.raw.trim()) && !(node.type === "command" && zeroArg.has(node.name)));
  if (unassigned.length) throw new Error(`Unassigned substantive nodes: ${JSON.stringify(unassigned)}`);
  let footnoteNumber = 0;
  function renderMath(node, doc) {
    let tex = node.raw.replace(/\\label\{[^}]+\}/g, "").replace(/\\(?:nonumber|notag)\b/g, "");
    tex = tex.replace(/\\(?:eqref|ref)\{([^}]+)\}/g, (all, key) => { const target = labels.get(key); if (!target) unresolved.push(key); return `\\text{${all.startsWith("\\eqref") ? "(" : ""}${target?.number || key}${all.startsWith("\\eqref") ? ")" : ""}}`; });
    if (node.env === "align" || node.env === "align*") tex = `\\begin{aligned}${tex}\\end{aligned}`;
    if (node.env === "gather" || node.env === "gather*") tex = `\\begin{gathered}${tex}\\end{gathered}`;
    tex = tex.replace(/\\begin\{split\}/g, "\\begin{aligned}").replace(/\\end\{split\}/g, "\\end{aligned}");
    // Equation tags use an accessible outer HTML column; preserve explicit tags as text.
    tex = tex.replace(/\\tag\{[^}]+\}/g, "");
    let html;
    const hasRowTags = ["align", "gather"].includes(node.env);
    let renderTex = tex;
    if (hasRowTags) {
      const rows = node.rows.map(row => {
        let raw = row.raw.replace(/\\label\{[^}]+\}/g, "").replace(/\\(?:nonumber|notag)\b/g, "").replace(/\\tag\{[^}]+\}/g, "");
        raw = raw.replace(/\\(?:eqref|ref)\{([^}]+)\}/g, (all, key) => `\\text{${all.startsWith("\\eqref") ? "(" : ""}${labels.get(key)?.number || key}${all.startsWith("\\eqref") ? ")" : ""}}`);
        return `${raw}${row.number ? `\\tag{${row.number}}` : "\\notag"}`;
      });
      renderTex = `\\begin{${node.env}}${rows.join("\\\\")}\\end{${node.env}}`;
    }
    try { html = katex.renderToString(renderTex, { displayMode: node.display, throwOnError: true, output: "htmlAndMathml", macros: { ...macros }, strict: "ignore", trust: false }); }
    catch (error) { mathErrors.push({ document: doc.slug, latex: tex, error: error.message }); html = `<code class="quantum-math-error">${escape(tex)}</code>`; }
    const anchors = (node.labels || []).map(key => `<span id="${escape(key)}" class="quantum-anchor"></span>`).join("");
    const md = `${(node.labels || []).map(key => `<a id="${key}"></a>\n`).join("")}${node.display ? "\n\n$$\n" : "$"}${expandMacros(tex, macros)}${node.display ? `\n$$\n${node.number ? `\nEquation (${node.number}).\n` : ""}\n` : "$"}`;
    return { html: node.display ? `${anchors}<div class="quantum-equation">${html}${node.number && !hasRowTags ? `<span class="quantum-equation-number">(${escape(node.number)})</span>` : ""}</div>` : `${anchors}${html}`, md, block: node.display };
  }
  function render(list, doc, inline = false) {
    let html = "", md = "", buffer = "";
    const flush = () => { if (buffer.trim()) html += inline ? buffer : `<p>${buffer.trim()}</p>\n`; buffer = ""; };
    const emit = (h, m = "", block = false) => { if (block) { flush(); html += h + "\n"; } else buffer += h; md += m; };
    const nested = raw => render(parse(raw), doc, true);
    for (const node of list) {
      if (node.type === "text") {
        const parts = node.raw.split(/\n\s*\n/);
        for (let k = 0; k < parts.length; k++) {
          if (k) { flush(); md += "\n\n"; }
          const text = parts[k].replace(/~/g, " ").replace(/---/g, "—").replace(/--/g, "–").replace(/``/g, "“").replace(/''/g, "”").replace(/\s+/g, " ");
          emit(escape(text), text);
        }
      } else if (node.type === "macro") {
        // Already extracted into the publication's KaTeX macro table.
      } else if (node.type === "math") { const value = renderMath(node, doc); emit(value.html, value.md, value.block); }
      else if (node.type === "group") { const value = render(node.children, doc, inline); emit(value.html, value.md, !inline && /<(?:p|div|section|h[2-6])\b/.test(value.html)); }
      else if (node.type === "environment") {
        const env = node.env;
        if (["tabular", "tabularx", "longtable"].includes(env)) {
          const rows = node.rows.map(row => row.map(cell => render(cell, doc, true)));
          const h = `<div class="quantum-table-wrap" role="region" aria-label="Publication table" tabindex="0"><table><thead><tr>${rows[0].map(cell => `<th scope="col">${cell.html}</th>`).join("")}</tr></thead><tbody>${rows.slice(1).map(row => `<tr>${row.map(cell => `<td>${cell.html}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
          const m = "\n\n" + rows.map((row, index) => "| " + row.map(cell => cell.md.replaceAll("|", "\\|").replace(/\n/g, " ")).join(" | ") + " |" + (index === 0 ? `\n| ${row.map(() => "---").join(" | ")} |` : "")).join("\n") + "\n\n";
          emit(h, m, true);
        } else if (env === "enumerate" || env === "itemize") {
          const items = []; let item;
          for (const child of node.children) { if (child.type === "command" && child.name === "item") { item = { option: child.option, nodes: [] }; items.push(item); } else if (item) item.nodes.push(child); else if (child.type !== "text" || child.raw.trim()) throw new Error("Content before first list item"); }
          const tag = env === "enumerate" ? "ol" : "ul";
          const values = items.map(item => ({ ...render(item.nodes, doc), option: item.option }));
          const marker = (value, i) => value.option || (node.option.startsWith("label=") ? node.option.slice(6).replaceAll("\\arabic*", String(i + 1)).replaceAll("\\roman*", roman(i + 1).toLowerCase()).replaceAll("\\Roman*", roman(i + 1)).replaceAll("\\alph*", String.fromCharCode(97 + i)) : "");
          emit(`<${tag}${node.option.startsWith("label=") ? ' class="quantum-custom-list"' : ""}>${values.map((value, i) => `<li>${marker(value, i) ? `<span class="quantum-list-marker">${nested(marker(value, i)).html}</span> ` : ""}${value.html}</li>`).join("")}</${tag}>`, "\n\n" + values.map((value, i) => `${env === "enumerate" ? `${i + 1}.` : "-"} ${marker(value, i) ? `${plain(marker(value, i))} ` : ""}${value.md.trim()}`).join("\n\n") + "\n\n", true);
        } else if (env === "thebibliography") {
          const entries = []; let item;
          for (const child of node.children) { if (child.type === "command" && child.name === "bibitem") { item = { ...child, nodes: [] }; entries.push(item); } else if (item) item.nodes.push(child); }
          const values = entries.map(item => ({ ...item, value: render(item.nodes, doc) }));
          emit(`${source.book ? "" : '<h2 id="bibliography">Bibliography</h2>'}<ol class="quantum-bibliography">${values.map(item => `<li id="${escape(item.anchor)}"><span class="quantum-bibliography-label">[${escape(item.number)}]</span><div>${item.value.html}</div></li>`).join("")}</ol>`, `\n\n${source.book ? "" : "## Bibliography\n\n"}` + values.map(item => `<a id="${item.anchor}"></a>\n\n[${item.number}] ${item.value.md.trim()}`).join("\n\n") + "\n\n", true);
        } else if (theoremEnvs.has(env) || env === "proof" || env === "abstract") {
          const title = env === "assumption" && source.id === "massive-configuration" ? "Constitutive assumption" : env[0].toUpperCase() + env.slice(1);
          const value = render(node.children, doc); const option = node.option ? nested(node.option) : null;
          const heading = `${title}${node.number ? ` ${node.number}` : ""}`;
          emit(`<section class="quantum-environment quantum-${env}" data-kind="${env}"><div class="quantum-environment-heading">${escape(heading)}${option ? ` <span>(${option.html})</span>` : ""}</div>${value.html}${env === "proof" ? '<span class="quantum-qed" aria-label="End of proof">□</span>' : ""}</section>`, `\n\n**${heading}${option ? ` (${option.md})` : ""}.**\n\n${value.md}${env === "proof" ? "\n\n□" : ""}\n\n`, true);
        } else if (env === "figure") {
          const value = render(node.children, doc); emit(`<figure class="quantum-publication-figure">${value.html}</figure>`, value.md, true);
        } else if (env === "center") { const value = render(node.children, doc); emit(value.html, value.md, true); }
        else { unknown.add(`environment:${env}`); const value = render(node.children, doc); emit(value.html, value.md, true); }
      } else if (node.type === "command") {
        const name = node.name.replace(/\*$/, ""); const args = node.args;
        if (zeroArg.has(name) || ["addcontentsline", "setcounter", "setlength", "vspace", "hspace", "bibliographystyle"].includes(name)) continue;
        if (node.titleHeading) { const v = nested(args[0]); emit(`<span id="publication-heading" class="quantum-anchor"></span>`, "", true); continue; }
        if (["section", "subsection", "subsubsection", "paragraph", "subparagraph"].includes(name)) {
          const v = nested(args[0]); const level = node.level || 4; const number = node.number ? `${node.number} ` : "";
          emit(`<h${level} id="${node.anchor}"><a class="quantum-heading-link" href="#${node.anchor}" aria-label="Link to this section">${escape(number)}${v.html}</a></h${level}>`, `\n\n<a id="${node.anchor}"></a>\n\n${"#".repeat(level)} ${number}${v.md}\n\n`, true);
        } else if (name === "label") emit(`<span id="${escape(args[0])}" class="quantum-anchor"></span>`, `<a id="${args[0]}"></a>`, false);
        else if (["ref", "eqref", "pageref", "autoref"].includes(name)) {
          const target = labels.get(args[0]); if (!target) unresolved.push(args[0]);
          const text = target ? (name === "eqref" ? `(${target.number})` : name === "autoref" ? `${target.kind} ${target.number}` : target.number || target.kind) : args[0];
          emit(`<a href="${escape(target?.url || "#")}" class="quantum-reference">${escape(text)}</a>`, `[${text}](${target?.url || "#"})`);
        } else if (["cite", "citep", "citet"].includes(name)) {
          const refs = args[0].split(/\s*,\s*/).map(key => { const target = citations.get(key); if (!target) unresolved.push(`citation:${key}`); return target || { number: key, url: "#" }; });
          emit(`[${refs.map(ref => `<a href="${escape(ref.url)}">${escape(ref.number)}</a>`).join(", ")}${node.option ? `, ${nested(node.option).html}` : ""}]`, `[${refs.map(ref => `[${ref.number}](${ref.url})`).join(", ")}${node.option ? `, ${plain(node.option)}` : ""}]`);
        } else if (["emph", "textit", "textbf", "texttt", "textsc", "textrm", "textnormal", "mbox", "underline", "textsuperscript", "textsubscript", "fbox"].includes(name)) {
          const value = nested(args[0]); const tag = ({ emph: "em", textit: "em", textbf: "strong", texttt: "code", textsuperscript: "sup", textsubscript: "sub" })[name] || "span";
          emit(`<${tag}>${value.html}</${tag}>`, `${tag === "strong" ? "**" : tag === "em" ? "*" : tag === "code" ? "`" : ""}${value.md}${tag === "strong" ? "**" : tag === "em" ? "*" : tag === "code" ? "`" : ""}`);
        } else if (name === "href") { const value = nested(args[1]); emit(`<a href="${escape(args[0])}">${value.html}</a>`, `[${value.md}](${args[0]})`); }
        else if (name === "url") emit(`<a href="${escape(args[0])}">${escape(args[0])}</a>`, `[${args[0]}](${args[0]})`);
        else if (name === "path") emit(`<code>${escape(args[0])}</code>`, `\`${args[0]}\``);
        else if (name === "includegraphics") {
          const page = source.book ? 178 : 27;
          const note = `The supplied publication contains a labelled placeholder for ${args[0]}; the figure asset was not supplied. Its original caption is retained below.`;
          emit(`<aside class="quantum-source-note" role="note"><span class="quantum-source-note-label">Source figure placeholder</span><p>${escape(note)}</p><a href="/publications/quantum-measurement/${source.id}.pdf#page=${page}">View the supplied PDF, page ${page} →</a></aside>`, `\n\n> Web-edition source note: ${note} [Supplied PDF, page ${page}](/publications/quantum-measurement/${source.id}.pdf#page=${page}).\n\n`, true);
        }
        else if (name === "caption") { const value = nested(args[0]); emit(`<figcaption>${node.figureNumber ? `Figure ${escape(node.figureNumber)}. ` : ""}${value.html}</figcaption>`, `\n\n${node.figureNumber ? `Figure ${node.figureNumber}. ` : ""}${value.md}\n\n`, true); }
        else if (["footnote", "thanks"].includes(name)) { const value = nested(args[0]); const n = ++footnoteNumber; emit(`<span class="quantum-footnote" role="note">[${n}: ${value.html}]</span>`, ` [${n}: ${value.md}] `); }
        else if (name === "textcolor") { const value = nested(args[1]); emit(value.html, value.md); }
        else if (name === "\\") emit("<br />", "  \n");
        else if ([" ", "\n", ",", ";", ":", "!"].includes(name)) emit(" ", " ");
        else if (["%", "&", "_", "$", "#", "{", "}"].includes(name)) emit(escape(name), name);
        else if (["\"", "'", "`", "^", "~", "=", "."].includes(name)) { const accent = { '"': "\u0308", "'": "\u0301", "`": "\u0300", "^": "\u0302", "~": "\u0303", "=": "\u0304", ".": "\u0307" }[name]; const value = (args[0] + accent).normalize("NFC"); emit(escape(value), value); }
        else if (name === "ldots" || name === "dots") emit("…", "…");
        else if (name === "S") emit("§", "§");
        else if (name === "TeX" || name === "LaTeX") emit(name, name);
        else { unknown.add(`command:${name}`); emit(`<code>\\${escape(name)}</code>`, `\\${name}`); }
      }
    }
    flush(); return { html, md };
  }
  const markdownParts = [];
  const proseChecks = [];
  function sourceProse(list) {
    return list.map(node => {
      if (node.type === "text") return node.raw.replace(/~/g, " ").replace(/---|--/g, " ");
      if (node.type === "group") return sourceProse(node.children);
      if (node.type === "math" || node.type === "macro") return " ";
      if (node.type === "environment") {
        if (node.rows) return " " + node.rows.map(row => row.map(cell => sourceProse(cell)).join(" ")).join(" ") + " ";
        const option = theoremEnvs.has(node.env) || node.env === "proof" ? sourceProse(parse(node.option)) : "";
        return ` ${option} ${sourceProse(node.children)} `;
      }
      if (node.type === "command") {
        const name = node.name.replace(/\*$/, "");
        if (node.titleHeading) return " ";
        if (["section", "subsection", "subsubsection", "paragraph", "subparagraph", "caption", "footnote", "thanks"].includes(name)) return ` ${sourceProse(parse(node.args[0]))} `;
        if (["emph", "textit", "textbf", "texttt", "textsc", "textrm", "textnormal", "mbox", "underline", "textsuperscript", "textsubscript", "fbox"].includes(name)) return sourceProse(parse(node.args[0]));
        if (name === "href" || name === "textcolor") return sourceProse(parse(node.args[1]));
        if (name === "url" || name === "path") return node.args[0];
        if (name === "item") return ` ${sourceProse(parse(node.option))} `;
        if (["\"", "'", "`", "^", "~", "=", "."].includes(name)) return (node.args[0] + ({ '"': "\u0308", "'": "\u0301", "`": "\u0300", "^": "\u0302", "~": "\u0303", "=": "\u0304", ".": "\u0307" })[name]).normalize("NFC");
        if (["%", "&", "_", "$", "#", "{", "}"].includes(name)) return name;
        return " ";
      }
      return " ";
    }).join("");
  }
  function htmlProse(fragment) {
    const tree = parseFragment(fragment);
    const walk = node => {
      const classes = node.attrs?.find(a => a.name === "class")?.value?.split(" ") || [];
      if (classes.includes("katex") || classes.includes("quantum-equation-number") || classes.includes("quantum-source-note") || classes.includes("quantum-bibliography-label")) return " ";
      if (node.nodeName === "#text") return node.value;
      const result = (node.childNodes || []).map(walk).join("");
      return ["p", "section", "div", "h2", "h3", "h4", "li", "td", "th", "figcaption", "br"].includes(node.nodeName) ? ` ${result} ` : result;
    };
    return walk(tree);
  }
  function words(text) { return text.normalize("NFC").toLowerCase().match(/[\p{L}\p{N}]+/gu) || []; }
  function counts(tokens) { const result = new Map(); for (const token of tokens) result.set(token, (result.get(token) || 0) + 1); return result; }
  const macroHeader = `<!-- Fixed Version 2 source. Mathematical macros used below:\n${Object.entries(macros).map(([name, body]) => `${name} = ${body}`).join("\n")}\n-->\n\n`;
  for (const doc of documents) {
    const value = render(doc.nodes, doc); const title = doc.label ? `${doc.label}: ${doc.title}` : doc.title;
    const expectedWords = words(sourceProse(doc.nodes)); const actualWords = words(htmlProse(value.html));
    const expectedCounts = counts(expectedWords), actualCounts = counts(actualWords);
    const missing = [...expectedCounts].filter(([word, count]) => (actualCounts.get(word) || 0) < count).map(([word, count]) => ({ word, source: count, rendered: actualCounts.get(word) || 0 }));
    const ids = [...value.html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
    proseChecks.push({ document: doc.slug, sourceProseWords: expectedWords.length, renderedProseWords: actualWords.length, sourceProseSha256: hash(expectedWords.join(" ")), missingWords: missing, duplicateIds });
    const md = `# ${title}\n\n${macroHeader}${value.md.trim()}\n`;
    fs.mkdirSync(path.join(contentDir, source.id), { recursive: true });
    fs.writeFileSync(path.join(contentDir, source.id, `${doc.slug}.html`), value.html);
    fs.mkdirSync(path.join(assetDir, "chapters"), { recursive: true });
    if (source.book) fs.writeFileSync(path.join(assetDir, "chapters", `${doc.slug}.md`), md);
    markdownParts.push(`# ${title}\n\n${value.md.trim()}`);
    const { nodes, rawTitle, ...meta } = doc; inventory.push(meta);
  }
  fs.writeFileSync(path.join(assetDir, `${source.id}.md`), macroHeader + markdownParts.join("\n\n---\n\n") + "\n");
  const sourceCount = name => [...body.matchAll(new RegExp(`\\\\begin\\{${name}\\}`, "g"))].length;
  const sourceStats = {
    chapters: source.book ? [...body.matchAll(/\\chapter(?:\*|\[[^\]]*\])?\{/g)].length : 0,
    parts: [...body.matchAll(/\\part\{/g)].length,
    sections: [...body.matchAll(/\\(?:section|subsection|subsubsection|paragraph|subparagraph)\*?(?:\[[^\]]*\])?\{/g)].length,
    theorems: [...theoremEnvs].reduce((n, env) => n + sourceCount(env), 0),
    proofs: sourceCount("proof"), tables: ["tabular", "tabularx", "longtable"].reduce((n, env) => n + sourceCount(env), 0),
    figures: sourceCount("figure"), labels: [...body.matchAll(/\\label\{[^}]+\}/g)].length,
    bibliographyEntries: [...body.matchAll(/\\bibitem(?:\[[^\]]*\])?\{/g)].length,
  };
  const convertedStats = { chapters: documents.filter(d => ["chapter", "appendix", "frontmatter"].includes(d.kind)).length, parts: documents.filter(d => d.kind === "part").length, sections: documents.reduce((n,d) => n+d.sections.length,0), theorems: documents.reduce((n,d) => n+d.stats.theorems,0), proofs: documents.reduce((n,d) => n+d.stats.proofs,0), tables: documents.reduce((n,d) => n+d.stats.tables,0), figures: documents.reduce((n,d) => n+d.stats.figures,0), labels: labels.size, bibliographyEntries: citations.size };
  const mismatches = Object.entries(sourceStats).filter(([key,value]) => convertedStats[key] !== value);
  const sourceLimitations = source.id === "pilot-medium" ? [] : [{ type: "missing-figure-asset", file: source.book ? "massive_event_mechanism_figure.pdf" : "event_mechanism_figure.pdf", suppliedPdfPage: source.book ? 178 : 27, observation: "The supplied PDF itself contains an empty labelled placeholder. The web edition preserves the original caption and explicitly identifies the absent asset." }, ...(source.book ? [] : [{ type: "unavailable-supplement", files: ["reproducibility/integration_verification.py", "reproducibility/numerical_checks.py"], observation: "These files are named in the fixed publication but were not supplied in the workspace. The original claims about them are preserved with publication provenance." }])];
  const record = { id: source.id, sourceFile: source.source, sourceSha256: hash(bytes), sourceBytes: bytes.length, pdfSha256: hash(fs.readFileSync(path.join(assetDir, `${source.id}.pdf`))), pages: documents.length, sourceStats, convertedStats, proseChecks, macros, labels: Object.fromEntries(labels), unresolvedReferences: [...new Set(unresolved)], unsupportedCommands: [...unknown], mathErrors, structuralMismatches: mismatches, sourceLimitations, status: mismatches.length || unresolved.length || unknown.size || mathErrors.length || proseChecks.some(check => check.missingWords.length || check.duplicateIds.length) ? "FAIL" : "PASS" };
  audit.documents.push(record);
  console.log(`${source.id}: ${documents.length} pages, ${labels.size} labels, ${convertedStats.theorems} statements, ${convertedStats.proofs} proofs; ${record.status}`);
  if (unknown.size) console.log("Unsupported:", [...unknown].join(", "));
  if (mathErrors.length) console.log(`Math errors: ${mathErrors.length}; inspect content/quantum/audit.json`);
}
fs.writeFileSync(path.join(contentDir, "index.json"), JSON.stringify(inventory, null, 2) + "\n");
fs.writeFileSync(path.join(contentDir, "audit.json"), JSON.stringify(audit, null, 2) + "\n");
fs.writeFileSync(path.join(assetDir, "conversion-audit.json"), JSON.stringify(audit, null, 2) + "\n");
if (audit.documents.some(doc => doc.status !== "PASS")) process.exitCode = 1;
