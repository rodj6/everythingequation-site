"""Read-only source/PDF comparison; optional local review PNGs with --render.

Requires PyMuPDF (`python -m pip install pymupdf`). The normal website build and
converter do not require Python: the fixed PDF outline and evidence are included.
Normalization removes punctuation/whitespace and decomposes Unicode ligatures;
it does not establish exact mathematical equivalence or empirical validity.
"""
from pathlib import Path
from html.parser import HTMLParser
import hashlib
import json
import re
import sys
import unicodedata
import pymupdf

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public/publications/consciousness"
DOCS = ROOT / "docs/consciousness"
DOCS.mkdir(parents=True, exist_ok=True)


def norm(value):
    return "".join(c for c in unicodedata.normalize("NFKD", value).lower() if c.isalnum())


class ProseChunks(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.chunks = []

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        excluded = {"katex", "quantum-source-note", "quantum-environment-heading", "quantum-equation-number"}
        inherited = bool(self.stack and self.stack[-1][1])
        self.stack.append((tag, inherited or bool(excluded.intersection(attrs.get("class", "").split()))))
        if tag in {"br", "img", "hr", "input", "meta", "link"}:
            self.stack.pop()

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                self.stack = self.stack[:i]
                break

    def handle_data(self, text):
        if (not self.stack or not self.stack[-1][1]) and len(norm(text)) >= 50:
            self.chunks.append(text)


pdf_bytes = (ASSETS / "monograph.pdf").read_bytes()
tex_bytes = (ASSETS / "monograph.tex").read_bytes()
pdf = pymupdf.open(stream=pdf_bytes)
# This edition has running headers above y=65 and page numbers below y=775.
# Remove only those margins, so paragraphs crossing pages compare directly.
pages = [page.get_text(clip=pymupdf.Rect(0, 65, page.rect.width, 775)) for page in pdf]
outline = pdf.get_toc()
(DOCS / "pdf-outline.json").write_text(json.dumps(outline, indent=2), encoding="utf8")
(DOCS / "pdf-extracted-text.txt").write_text("\n\f\n".join(pages), encoding="utf8")
index = json.loads((ROOT / "content/consciousness/index.json").read_text(encoding="utf8"))
report = []
for doc in index:
    if doc["kind"] == "bibliography":
        continue
    reader = ProseChunks()
    reader.feed((ROOT / "content/consciousness/monograph" / (doc["slug"] + ".html")).read_text(encoding="utf8"))
    text = norm("".join(pages[doc["source"]["pdfPage"] - 1:doc["source"]["pdfEndPage"]]))
    noncontiguous = [s for s in reader.chunks if norm(s) not in text]
    mismatches = [{"text": chunk} for chunk in noncontiguous]
    report.append({"slug": doc["slug"], "checkedChunks": len(reader.chunks), "verbatimNormalizedMatches": len(reader.chunks) - len(noncontiguous), "pageBreakOrTypographyChunks": len(noncontiguous) - len(mismatches), "mismatches": mismatches})

# Bibliography sequence is independently transcribed from the PDF's printed
# numbering. Check that every embedded title and publication year occurs there.
tex = tex_bytes.decode("utf8")
bib = re.search(r"\\begin\{filecontents\*\}[^\n]*\n([\s\S]*?)\\end\{filecontents\*\}", tex).group(1)


def group(s, i):
    while s[i].isspace():
        i += 1
    assert s[i] == "{"
    start, depth, i = i + 1, 1, i + 1
    while depth:
        if s[i] == "\\":
            i += 2
            continue
        if s[i] == "{":
            depth += 1
        if s[i] == "}":
            depth -= 1
        i += 1
    return s[start:i - 1], i


fields_by_key = {}
for match in re.finditer(r"@(\w+)\{([^,]+),", bib):
    i, fields = match.end(), {}
    while True:
        field = re.match(r"\s*,?\s*(\w+)\s*=\s*", bib[i:])
        if not field:
            break
        value, i = group(bib, i + field.end())
        fields[field[1]] = value
    fields_by_key[match[2]] = fields

bib_pdf = "\n".join(pages[129:])
entries = re.split(r"\[(\d+)\]", bib_pdf)
pdf_entries = {int(entries[i]): entries[i + 1] for i in range(1, len(entries) - 1, 2)}
order = json.loads((DOCS / "bibliography-order.json").read_text(encoding="utf8"))
bib_checks = []
for number, key in enumerate(order, 1):
    fields = fields_by_key[key]
    entry = norm(pdf_entries[number])
    bib_checks.append({"number": number, "key": key, "titleMatches": norm(fields["title"]) in entry, "yearMatches": fields["year"] in pdf_entries[number], "doiMatches": not fields.get("doi") or norm(fields["doi"]) in entry})

identity = {"title": "shadowtheoryandconsciousness" in norm(pages[0]), "subtitle": "awarenessperspectivalrealizationandthesourcetoexperienceproblem" in norm(pages[0]), "edition": "version2publicationedition" in norm(pages[0]), "date": "20september2026" in norm(pages[0]), "author": "jeremyrodgers" in norm(pages[0]), "pages": len(pages) == 133}
result = {"sourceSha256": hashlib.sha256(tex_bytes).hexdigest(), "pdfSha256": hashlib.sha256(pdf_bytes).hexdigest(), "identity": identity, "method": "Every non-mathematical HTML text node containing at least 50 normalized letters/digits is compared directly with its source PDF page range. Running headers (y<65) and page numbers (y>775) are excluded from extraction. Normalization removes whitespace/punctuation and decomposes Unicode ligatures. Every checked chunk must match; there is no mismatch tolerance. Equations are checked separately against original TeX by audit-consciousness-content.mjs.", "documents": report, "bibliography": bib_checks, "summary": {"substantialChunks": sum(x["checkedChunks"] for x in report), "directNormalizedMatches": sum(x["verbatimNormalizedMatches"] for x in report), "typographyOrPageBreakChunks": sum(x["pageBreakOrTypographyChunks"] for x in report), "substantiveMismatches": sum(len(x["mismatches"]) for x in report), "bibliographyEntries": len(bib_checks)}, "limitations": ["The source was not recompiled to claim byte-identical PDF production; the supplied archival PDF remains authoritative and unmodified.", "This prose matching does not validate mathematical proofs or the empirical interpretation."]}
failed = not all(identity.values()) or any(x["mismatches"] for x in report) or any(not (x["titleMatches"] and x["yearMatches"] and x["doiMatches"]) for x in bib_checks)
result["status"] = "FAIL" if failed else "PASS"
(DOCS / "source-pdf-comparison.json").write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf8")
if "--render" in sys.argv:
    for page in [0, 80, 81, 119]:
        pdf[page].get_pixmap(matrix=pymupdf.Matrix(1, 1)).save(DOCS / f"pdf-page-{page + 1}.png")
print(result["status"], json.dumps(result["summary"]))
if failed:
    print(json.dumps([x for x in bib_checks if not all([x["titleMatches"], x["yearMatches"], x["doiMatches"]])]))
    sys.exit(1)
