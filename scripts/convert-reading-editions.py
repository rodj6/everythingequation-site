#!/usr/bin/env python3
"""Convert the two registered PDF reading editions without changing the RH corpus."""
from argparse import ArgumentParser
from bisect import bisect_left, bisect_right
from collections import Counter, defaultdict
from hashlib import sha256
from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path
import html
import json
import re
import shutil
import sys
import unicodedata
import xml.etree.ElementTree as ET

import fitz

ROOT = Path(__file__).resolve().parents[1]
SPEC = spec_from_file_location("rh_pdf_converter", ROOT / "scripts/convert-riemann-hypothesis.py")
rh = module_from_spec(SPEC)
sys.modules[SPEC.name] = rh
SPEC.loader.exec_module(rh)

EDITIONS = {
    "ads4-boundary-ball-reconstruction": {
        "route": "/source-readout/ads4-boundary-ball-reconstruction",
        "asset": "gravity/ads4-boundary-ball-reconstruction",
        "pages": 84, "sha256": "550e43d28dba0e10012dbf446d1e941be9ba2f93dff6cd7c6ada53e91e8e655d",
        "openingPages": 4,
    },
    "haar-critical": {
        "route": "/articles/haar-critical",
        "asset": "haar-critical",
        "pages": 487, "sha256": "e4955088bd3bb84a7e0aac702120e640a5837ba00f86ef3619d0f6dab82245af",
        "openingPages": 0,
    },
}

RESULT = re.compile(r"^(Theorem|Lemma|Proposition|Corollary|Definition|Remark|Example|Claim)\s+(\d+(?:\.[A-Za-z]?\d+[A-Za-z]?)+)\b", re.I)
NUMBER = re.compile(r"^([A-Z]|\d+(?:\.\d+)*)\.?\s+(?=\D)")
TAGS = re.compile(r"^\(((?:[A-Za-z][.-]?)?\d+(?:[.-]\d+)*[a-z]?)\)$")
XML_HREF = rh.XLINK + "href"


def slugify(value):
    value = unicodedata.normalize("NFKD", value).encode("ascii", errors="ignore").decode()
    return rh.slug(value)[:105].rstrip("-")


def named_location(document, data):
    page = data["page"] + 1
    return page, document[page - 1].rect.height - data["to"][1]


def division(title, number, level, page, y, anchor):
    return {
        "slug": slugify(title), "title": title, "number": number, "level": level,
        "firstPage": page, "startY": round(y, 3), "outlineAnchor": anchor,
    }


def lines_on(page):
    lines = []
    for block in page.get_text("dict", flags=fitz.TEXTFLAGS_TEXT, clip=fitz.INFINITE_RECT())["blocks"]:
        lines.extend(block.get("lines", []))
    return lines


def line_text(line):
    return rh.prose("".join(s["text"] for s in line["spans"]).strip())


def subheading_candidates(document, names, first, stop):
    for page in range(first, stop):
        for line in lines_on(document[page - 1]):
            spans = line["spans"]
            if not any(s["font"].startswith("LMRoman12-Bold") and 11.5 <= s["size"] <= 12.3 for s in spans):
                continue
            text = line_text(line)
            y = line["bbox"][1]
            if len(text) < 5 or len(text) > 150 or y > document[page - 1].rect.height - 90:
                continue
            nearby = [name for name, data in names.get(page, []) if name.startswith("section*.")
                      and 0 <= y - data < 20]
            if nearby:
                yield page, y - 1, text, nearby[-1]
            elif text[0].isalpha():
                yield page, y - 1, text, "reading-break"


def build_outline(document, edition):
    names = defaultdict(list)
    for name, target in document.resolve_names().items():
        if "page" in target and "to" in target:
            page, y = named_location(document, target)
            names[page].append((name, y))
    chapters = [division("Title, abstract and front matter", "", 0, 1, 0, "front-matter")]
    for level, title, page, dest in document.get_toc(simple=False):
        title = rh.prose(title)
        number = NUMBER.match(title)
        anchor = dest["nameddest"]
        if number:
            token = number.group(1)
            title = title[number.end():]
        else:
            token = ""
        y = document[page - 1].rect.height - dest["to"].y
        chapters.append(division(title, token, level, page, y, anchor))
    if not any(chapter["title"] == "References" for chapter in chapters):
        for page in range(len(document) - 4, len(document) + 1):
            ref = next((line for line in lines_on(document[page - 1]) if line_text(line) == "References"), None)
            if ref:
                chapters.append(division("References", "", 0, page, ref["bbox"][1] - 1, "references"))
                break
    expanded = []
    for i, chapter in enumerate(chapters):
        expanded.append(chapter)
        stop = chapters[i + 1]["firstPage"] if i + 1 < len(chapters) else len(document) + 1
        # Reserve a native result/section boundary instead of dividing by page number alone.
        if edition == "haar-critical" and stop - chapter["firstPage"] > 16:
            last = chapter["firstPage"]
            for page, y, title, anchor in subheading_candidates(document, names, last + 1, stop):
                if page - last >= 8 and stop - page >= 3:
                    split = division(title, chapter["number"], 2, page, y, anchor)
                    split["slug"] = f'{chapter["number"]}-{split["slug"]}'
                    expanded.append(split)
                    last = page
    seen = set()
    for i, chapter in enumerate(expanded):
        if chapter["slug"] in seen:
            chapter["slug"] += "-" + str(chapter["firstPage"])
        seen.add(chapter["slug"])
        next_chapter = expanded[i + 1] if i + 1 < len(expanded) else None
        last = next_chapter["firstPage"] if next_chapter else len(document)
        if next_chapter and next_chapter["startY"] <= 73 and last > chapter["firstPage"]:
            last -= 1
        chapter["lastPage"] = last
        first = chapter["firstPage"]
        pages = f"Page {first}" if first == last else f"Pages {first} to {last}"
        chapter["description"] = f"{chapter['title']}. {pages} of Jeremy Rodgers’s complete manuscript."
    return expanded


def settings(edition):
    item = EDITIONS[edition]
    content = ROOT / "content/reading-editions" / edition
    docs = ROOT / "docs/reading-editions" / edition
    public = ROOT / "public/publications" / item["asset"]
    return item, content, docs, public


def generate(edition, pdf, outline_only=False):
    item, content, docs, public = settings(edition)
    if sha256(pdf.read_bytes()).hexdigest() != item["sha256"]:
        raise ValueError(f"Supplied {edition} PDF does not match the registered SHA-256")
    with fitz.open(pdf) as document:
        if len(document) != item["pages"]:
            raise ValueError("Unexpected source page count")
        chapters = build_outline(document, edition)
        content.mkdir(parents=True, exist_ok=True)
        (content / "chapters.json").write_text(json.dumps(chapters, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        if not outline_only:
            convert(edition, document, pdf, chapters, item, content, docs, public)
    print(f"{edition}: {len(chapters)} chapters.", flush=True)


class ModernFontMap(rh.FontMap):
    def __init__(self, document):
        super().__init__(document)
        for name, glyphs in list(self.names.items()):
            if name.startswith("LMRoman"):
                self.names.pop(name)
                continue
            # MuPDF texttrace and rawdict truncate long PostScript font names
            # to twenty-four characters. CFF extraction keeps the full name.
            for reported in {name, name[:24]}:
                self.names[reported] = glyphs
                self.names[self.alias(reported)] = glyphs

    @staticmethod
    def alias(name):
        return name.replace("LMMathExtension", "CMEX").replace("LMMathSymbols", "CMSY")

    def decode(self, font, gid, character):
        return super().decode(self.alias(font), gid, character)


# Latin Modern Roman and Mono are the manuscripts' narration and code faces.
rh.PROSE_FONT += ("LMRoman", "LMMono", "DejaVuSans", "LMSans")
ORIGINAL_STYLE = rh.style_for
rh.style_for = lambda span: "code" if span.font.startswith("LMMono") else ORIGINAL_STYLE(span)


class PageVector:
    """One shared copy of original glyphs and paths, plus compact crop references."""

    def __init__(self, page, asset_path):
        self.page = page
        self.number = page.number + 1
        self.asset_path = asset_path
        original = ET.fromstring(page.get_svg_image(text_as_path=True))
        self.svg = ET.Element(rh.SVG + "svg", {"version": "1.1"})
        defs = original.find(rh.SVG + "defs")
        if defs is None:
            defs = ET.Element(rh.SVG + "defs")
        self.svg.append(defs)
        ink = ET.SubElement(defs, rh.SVG + "g", {"id": "printed-ink"})
        self.glyphs = []
        self.drawings = []
        for i, node in enumerate(node for node in original if node.tag != rh.SVG + "defs"):
            ref = f"ink-{i}"
            node.set("id", ref)
            ink.append(node)
            transform = node.get("transform", "").removeprefix("matrix(").removesuffix(")")
            if node.tag == rh.SVG + "use" and len(transform.split(",")) == 6:
                x, y = map(float, transform.split(",")[-2:])
                self.glyphs.append((y, x, ref))
            else:
                self.drawings.append(ref)
        self.glyphs.sort()
        self.ys = [y for y, _, _ in self.glyphs]
        self.symbols = set()

    def markup(self, identifier, width, height, inline=False, label=None):
        path = f"{self.asset_path}/notation/p-{self.number:04d}.svg#{identifier}"
        style = (f' style="width:{width/10.75:.3f}em;height:{height/10.75:.3f}em"'
                 if inline else "")
        accessibility = (f' role="img" aria-label="{rh.esc(label)}"' if label else
                         ' aria-hidden="true" focusable="false"')
        return (f'<svg class="rh-notation-vector"{accessibility} width="{width:.3f}" height="{height:.3f}" '
                f'viewBox="0 0 {width:.3f} {height:.3f}"{style}>'
                f'<use href="{path}" width="{width:.3f}" height="{height:.3f}"/></svg>')

    def symbol(self, identifier, box, refs):
        if identifier in self.symbols:
            raise ValueError(f"Duplicate page symbol {identifier}")
        self.symbols.add(identifier)
        symbol = ET.SubElement(self.svg, rh.SVG + "symbol", {
            "id": identifier, "viewBox": f"{box.x0:.3f} {box.y0:.3f} {box.width:.3f} {box.height:.3f}",
        })
        for ref in refs:
            ET.SubElement(symbol, rh.SVG + "use", {XML_HREF: "#" + ref})

    def crop(self, identifier, box, spans=(), inline=False, label=None):
        box = fitz.Rect(box) + (-.6, -.8, .7, 1.2)
        refs = []
        for y, x, ref in self.glyphs[bisect_left(self.ys, box.y0 - 1):bisect_right(self.ys, box.y1 + 4)]:
            if box.x0 - 1 <= x <= box.x1 + 1 and (not inline or any(
                    s.box.x0 - .36 <= x < s.box.x1 + .03 and abs(y - s.baseline) <= .13 for s in spans)):
                refs.append(ref)
        if not inline:
            refs.extend(self.drawings)
        self.symbol(identifier, box, refs)
        return self.markup(identifier, box.width, box.height, inline, label)

    def page_details(self):
        identifier = f"source-page-{self.number}"
        box = self.page.rect
        if identifier not in self.symbols:
            self.symbol(identifier, box, ["printed-ink"])
        vector = self.markup(identifier, box.width, box.height, label=f"Printed source page {self.number}")
        return (f'<details class="rh-printed-source" data-source-page="{self.number}">'
                f'<summary>View printed source page {self.number}</summary>'
                f'<div class="rh-formula-original" tabindex="0">{vector}</div></details>')

    def save(self, public):
        target = public / "notation" / f"p-{self.number:04d}.svg"
        target.write_bytes(ET.tostring(self.svg, encoding="utf-8", xml_declaration=True))


def extract_page(page, fonts):
    spans, omitted = rh.extract_spans(page, fonts)
    source = []
    for span in spans:
        chars = []
        for char, box in span.char_boxes:
            cleaned = []
            for symbol in char:
                if (ord(symbol) < 32 and symbol not in "\n\r\t") or 127 <= ord(symbol) < 160:
                    fonts.unknown[f"{span.font}:unmapped U+{ord(symbol):04X}"] += 1
                    cleaned.append("�")
                else:
                    cleaned.append(symbol)
            chars.append(("".join(cleaned), box))
        span.char_boxes = chars
        span.text = "".join(value for value, _ in chars)
        if (span.baseline > page.rect.height - 49 and span.text.strip() == str(page.number + 1)
                and abs(span.box.x0 - page.rect.width/2) < 24):
            omitted.append({"text": span.text.strip(), "reason": "printed pagination"})
        else:
            source.append(span)
    return source, omitted


def width_keys(paths):
    """Group horizontal booktabs rules by their repeated geometric endpoints."""
    result = defaultdict(list)
    for drawing in paths:
        box = drawing["rect"]
        if 175 <= box.width and box.height < .5:
            result[(round(box.x0, 1), round(box.x1, 1))].append(box.y0)
    return {key: sorted(set(ys)) for key, ys in result.items() if len(set(ys)) >= 2}


def rule_panels(page, figures=()):
    panels = []
    for (left, right), ys in width_keys(page.get_drawings()).items():
        if figures:
            ys = [y for y in ys if not any(box.y0 < y < box.y1 for _, _, box, _ in figures)]
        # Booktabs triples start at the outer edge and separate the header
        # from the body. Isolated pairs indicate a page-breaking longtable.
        chunks = ([ys] if len(ys) < 6 else [ys[i:i+3] for i in range(0, len(ys), 3)])
        for chunk in chunks:
            if len(chunk) < 2 or chunk[-1] - chunk[0] < 8:
                continue
            box = fitz.Rect(left - 1.5, chunk[0] - .5, right + 1.5,
                            chunk[-1] + .5 if len(chunk) > 2 else page.rect.height - 51)
            panels.append((box, chunk[1], len(chunk) == 2, (left, right)))
    return sorted(panels, key=lambda panel: panel[0].y0)


def numbered_tables(document, native, edition):
    """Locate numbered tables by captions and retain their ruled continuation panels."""
    by_page = defaultdict(list)
    for page in document:
        pn = page.number + 1
        names = sorted((y, int(name.split(".")[-1])) for name, y, _, _ in native[pn]
                       if name.startswith("table."))
        if not names:
            continue
        candidates = rule_panels(page, figure_boxes(edition, pn))
        for y, number in names:
            # A PDF destination can be the upper rule or the caption below.
            candidates = [item for item in candidates if not any(
                old[2] == item[0] for old in by_page[pn])]
            close = [item for item in candidates if min(abs(item[0].y0-y), abs(item[0].y1-y)) < 115]
            if not close:
                raise ValueError(f"Could not locate rules for {edition} table {number} on page {pn}")
            box, header, continued, extent = min(close, key=lambda item: min(abs(item[0].y0-y), abs(item[0].y1-y)))
            by_page[pn].append(("table", number, box, header))
            next_page = pn
            while continued and next_page < len(document):
                follow = [item for item in rule_panels(document[next_page]) if
                          item[0].y0 < 82 and all(abs(a-b) < .5 for a,b in zip(item[3], extent))]
                if not follow:
                    break
                next_page += 1
                box, header, continued, _ = follow[0]
                by_page[next_page].append(("table", number, box, header))
    return by_page


FIGURES = {
    1: (434, 62, 358.7, "Rank-eight moving-centre chart geometry"),
    2: (437, 62, 305.9, "Connected complex-order domain and representative tilt-zero charts"),
}


def figure_boxes(edition, page_number):
    if edition != "haar-critical":
        return []
    return [("figure", number, fitz.Rect(55, top, 556, 399 if number == 1 else 334), None)
            for number, (pn, top, _, _) in FIGURES.items() if pn == page_number]


def page_regions(edition, page, numbered):
    figures = figure_boxes(edition, page.number + 1)
    anonymous = [("table", None, box, header) for box, header, continued, _ in rule_panels(page, figures)
                 if not continued and box.width > 250 and not any(
                     (box & item[2]).get_area() > .70 * box.get_area() for item in numbered)]
    return [*figures, *numbered, *anonymous]


def is_prose(span):
    # CMR is a math face in AdS and LMRoman embedded with Latin Modern math
    # remains a text face only when the span has actual letters or prose punctuation.
    return span.prose


def extract_rows(spans, page_number, overlay, boundaries, opening_pages):
    output = []
    rows = rh.cluster_page(spans, max(6, page_number), overlay)
    for row in rows:
        if not row.spans:
            continue
        text = rh.prose(row.text)
        bold = any("Bold" in s.font and s.size >= 11.5 for s in row.spans)
        heading = bold or text in {"Abstract", "Contents", "References"}
        tag = TAGS.fullmatch(text) and row.box.x0 > 430
        typ = ("math" if row.kind == "math" or tag else "checked" if row.kind == "checked" else
               "heading" if heading else "contents" if page_number <= opening_pages and
               rh.CONTENTS_LINE.search(text) else "prose")
        previous = output[-1] if output else None
        starts = (previous is None or previous[0] != typ or typ in {"heading", "contents", "checked"}
                  or any(previous[1][-1].y < stop <= row.y for stop in boundaries)
                  or (typ == "prose" and (row.y - previous[1][-1].y > 15.6 or (
                      row.box.x0 > 80 and previous[1][-1].box.x0 < 78 and row.y - previous[1][-1].y > 10)
                      or bool(RESULT.match(text)) or bool(rh.BIBLIOGRAPHY.match(text))
                      or re.match(r"^(?:Proof|Source|Acknowledg)", text))))
        if starts:
            output.append((typ, [row]))
        else:
            previous[1].append(row)
    return output


def link_label(native, page):
    name = native.get("nameddest", "")
    if name.startswith("Hfootnote."):
        return "Read footnote " + name.split(".")[-1]
    fragment = page.get_textbox(native["from"]).strip()
    if fragment and all(c.isprintable() for c in fragment):
        return "Source reference " + fragment
    return "Source reference"


def all_link_records(page, urls):
    result = []
    for link in page.get_links():
        href = urls.get(link.get("nameddest")) if link.get("nameddest") else link.get("uri")
        if href:
            result.append((link["from"], href, link_label(link, page)))
    return result


def inline_content(row, vector, anchor, links, unresolved):
    parts = []
    run = []
    previous = None
    index = 0
    glyph_links = [(rect, url) for rect, url, _ in links]

    def flush():
        nonlocal index
        if not run:
            return
        index += 1
        fid = f"{anchor}-m-{index}"
        notation = rh.inline_parse(run, row.y)
        box = rh.rectangle([s.box for s in run])
        art = vector.crop(fid, box, spans=run, inline=True)
        matched = [(url, label) for bounds, url, label in links if (bounds & box).get_area() >= .6 * bounds.get_area()]
        if matched:
            intro = f'<a class="rh-inline-math" id="{fid}" href="{rh.esc(matched[0][0])}" aria-label="{rh.esc(matched[0][1])}">'
            close = "</a>"
        else:
            intro = f'<span class="rh-inline-math" id="{fid}" tabindex="0" aria-label="{rh.esc(notation)}">'
            close = "</span>"
        parts.append(intro + art + f'<span class="rh-inline-transcript"><code>{rh.esc(notation)}</code></span>' + close)
        unresolved.append({"anchor": fid, "bbox": list(box), "status": "geometry retained, inline transcription unchecked"})
        run.clear()

    for span in sorted(row.spans, key=lambda item: item.box.x0):
        math = (not is_prose(span) or (span.size < 9.2 and abs(span.baseline - row.y) >= 1
                                        and not span.font.startswith("LMMono") and len(span.text.strip()) < 6))
        if math:
            if not run and (rh.approximate_gap(previous, span) or (
                    previous and not previous.text.endswith(" ") and span.text.startswith(" "))):
                parts.append(" ")
            run.append(span)
        else:
            had_trailing_space = bool(run and run[-1].text.endswith(" "))
            flush()
            if rh.approximate_gap(previous, span) or (had_trailing_space and not span.text.startswith(" ")):
                parts.append(" ")
            parts.append(rh.linked_span(span, glyph_links))
        previous = span
    flush()
    return "".join(parts).strip()


def table_cells(spans, box, after_header, links):
    header = [s for s in spans if s.baseline < after_header]
    body = [s for s in spans if s.baseline >= after_header]
    intervals = []
    for span in sorted(header, key=lambda s: s.box.x0):
        if intervals and span.box.x0 <= intervals[-1][1] + 4:
            intervals[-1][1] = max(intervals[-1][1], span.box.x1)
        else:
            intervals.append([span.box.x0, span.box.x1])
    if not intervals:
        intervals = [[box.x0, box.x1]]
    cuts = [(left[1] + right[0]) / 2 for left, right in zip(intervals, intervals[1:])]
    body_rows = defaultdict(list)
    for span in sorted(body, key=lambda s: s.baseline):
        close = next((y for y in reversed(body_rows) if abs(y - span.baseline) < 5), None)
        body_rows[close if close is not None else span.baseline].append(span)

    def cells(items):
        cols = [[] for _ in intervals]
        for span in items:
            cols[bisect_right(cuts, span.box.x0)].append(span)
        result = []
        for col in cols:
            lines = defaultdict(list)
            for span in col:
                lines[round(span.baseline, 1)].append(span)
            chunks = []
            for line in sorted(lines):
                previous = None
                parts = []
                for span in sorted(lines[line], key=lambda s: s.box.x0):
                    if rh.approximate_gap(previous, span):
                        parts.append(" ")
                    parts.append(rh.linked_span(span, [(r, u) for r, u, _ in links]))
                    previous = span
                chunks.append("".join(parts))
            result.append(rh.compact_join(chunks))
        return result
    return cells(header), [cells(row) for _, row in sorted(body_rows.items())]


def rule_alias(name):
    return rh.destination_anchor(name)


def load_overlays(docs, source_hash):
    path = docs / "checked-math.json"
    result = defaultdict(list)
    if path.exists():
        data = json.loads(path.read_text(encoding="utf-8"))
        if isinstance(data, dict):
            if data["sourceSha256"] != source_hash:
                raise ValueError("Checked-math source PDF mismatch")
            data = data["formulas"]
        for item in data:
            result[item["page"]].append(item)
    return result


def asset_markdown_table(headers, rows):
    def plain(cell):
        return html.unescape(rh.strip_styles(cell)).strip().replace("|", r"\|").replace("\n", " ")
    def line(cells):
        return "| " + " | ".join(map(plain, cells)) + " |"
    return "\n".join([line(headers), line(["---"] * len(headers)), *map(line, rows)])


def render_regions(region, spans, vector, anchor, links, page):
    kind, number, box, after_header = region
    if kind == "figure":
        label = FIGURES[number][3]
        captions = [s for s in spans if s.box.y0 > FIGURES[number][2]]
        figure_spans = [s for s in spans if s not in captions]
        caption = rh.display_text(captions) if captions else f"Figure {number}. {label}"
        exact_box = fitz.Rect(box.x0, box.y0, box.x1, FIGURES[number][2])
        visual = vector.crop(anchor, exact_box, label=label)
        text = rh.display_text(figure_spans) if figure_spans else label
        return (
            f'<figure class="rh-formula rh-source-plot" data-figure-number="{number}" id="{anchor}" data-source-page="{page}">'
            f'<div class="rh-formula-original" tabindex="0">{visual}</div><figcaption>{rh.esc(caption)}</figcaption>'
            f'<details class="rh-formula-transcript"><summary>Searchable figure labels</summary>'
            f'<pre>{rh.esc(text)}</pre></details></figure>',
            caption + "\n\n" + text, {"figureNumber": number, "caption": caption, "transcription": "figure-labels"})
    headers, rows = table_cells(spans, box, after_header, links)
    title = f"Table {number}" if number else f"Source table on page {page}"
    prefix = f"table-{number}" if number else anchor
    art = vector.crop(anchor, box, label=title)
    head = "".join(f'<th scope="col">{cell}</th>' for cell in headers)
    table_rows = []
    ledger_rows = []
    for i, row in enumerate(rows, 1):
        row_anchor = f"{prefix}-page-{page}-row-{i}"
        table_rows.append(f'<tr id="{row_anchor}">' + "".join(f"<td>{cell}</td>" for cell in row) + "</tr>")
        ledger_rows.append({"anchor": row_anchor, "columns": [html.unescape(rh.strip_styles(c)) for c in row]})
    return (
        f'<figure class="rh-formula rh-table-source" id="{anchor}" data-source-page="{page}"'
        f'{" data-table-number=" + chr(34) + str(number) + chr(34) if number else ""}>'
        f'<div class="rh-formula-original" tabindex="0">{art}</div>'
        f'<details class="rh-formula-transcript"><summary>Selectable table transcription</summary>'
        f'<table aria-label="{rh.esc(title)}"><thead><tr>{head}</tr></thead>'
        f'<tbody>{"".join(table_rows)}</tbody></table></details></figure>',
        asset_markdown_table(headers, rows), {"tableNumber": number, "rows": ledger_rows,
                                            "transcription": "unverified-column-transcription"})


def conversion_groups(page, number, spans, regions, overlay, boundaries, opening_pages):
    regions_spans = [[] for _ in regions]
    text = []
    for span in spans:
        j = next((i for i, (_, _, box, _) in enumerate(regions)
                  if fitz.Point((span.box.x0 + span.box.x1) / 2, span.baseline) in box), None)
        if j is None:
            text.append(span)
        else:
            regions_spans[j].append(span)
    extra = []
    for region, region_spans in zip(regions, regions_spans):
        if region_spans:
            extra.append((region[2].y0, None, region, region_spans))
    for kind, rows in extract_rows(text, number, overlay, boundaries, opening_pages):
        extra.append((min(row.y for row in rows), kind, None, rows))
    return sorted(extra, key=lambda row: row[0])


def clean_text(markup):
    return html.unescape(rh.strip_styles(markup))


def assign_page(root, coor):
    page_number, y = coor
    return root[max(0, bisect_right([(c["firstPage"], c["startY"]) for c in root], (page_number, y + .07)) - 1)]["slug"]


def read_destinations(document, chapters, base_route):
    anchors = defaultdict(list)
    urls = {}
    used = set()
    for name, data in document.resolve_names().items():
        if "page" not in data or "to" not in data:
            continue
        page, y = named_location(document, data)
        route = assign_page(chapters, (page, y))
        anchor = rule_alias(name)
        if (route, anchor) in used:
            anchor += "-" + sha256(name.encode()).hexdigest()[:8]
        used.add((route, anchor))
        anchors[page].append((name, y, route, anchor))
        urls[name] = f"{base_route}/{route}#{anchor}"
    return anchors, urls, used


def references_for_block(links, box, markup, assigned):
    """Reconnect PDF annotations with text that is visually supplied as vectors."""
    emitted = []
    existing = Counter(html.unescape(x) for x in re.findall(r'\bhref="([^"]+)"', markup))
    for i, (rect, href, label) in enumerate(links):
        if i in assigned:
            continue
        area = (rect & box).get_area()
        if area <= .20 * rect.get_area():
            continue
        if existing[href]:
            existing[href] -= 1
        elif area >= .65 * rect.get_area():
            emitted.append(f'<a class="rh-panel-reference" href="{rh.esc(href)}">{rh.esc(label)}</a>')
        else:
            continue
        assigned.add(i)
    return "".join(emitted)


def convert(edition, document, pdf, chapters, config, content, docs, public):
    docs.mkdir(parents=True, exist_ok=True)
    (public / "notation").mkdir(parents=True, exist_ok=True)
    assets = "/publications/" + config["asset"]
    fonts = ModernFontMap(document)
    overlay = load_overlays(docs, config["sha256"])
    native, urls, reserved = read_destinations(document, chapters, config["route"])
    tables = numbered_tables(document, native, edition)
    lines_html = defaultdict(list)
    lines_md = defaultdict(list)
    emitted = set()
    counts = Counter()
    coverage = []
    for page in document:
        pn = page.number + 1
        spans, omitted = extract_page(page, fonts)
        boundaries = [c["startY"] for c in chapters if c["firstPage"] == pn]
        page_regions_found = page_regions(edition, page, tables[pn])
        groups = conversion_groups(page, pn, spans, page_regions_found, overlay[pn], boundaries,
                                   config["openingPages"])
        vector = PageVector(page, assets)
        links = all_link_records(page, urls)
        assigned = set()
        chapter_set = set()
        records = []
        page_paths = []
        for i, (top, kind, region, data) in enumerate(groups, 1):
            slug = assign_page(chapters, (pn, top + 1))
            container = lines_html[slug]
            identifier = f"p-{pn:04d}-b-{i:02d}"
            if slug not in chapter_set:
                container.append(f'<span class="rh-page-break" id="page-{pn}" data-source-page="{pn}" aria-hidden="true"></span>')
                container.append(vector.page_details())
                lines_md[slug].append(f"<!-- Source PDF page {pn} -->")
                chapter_set.add(slug)

            prefixes = []
            after = groups[i][0] if i < len(groups) else 10000
            for name, y, target_chapter, anchor in native[pn]:
                if target_chapter == slug and y < after + 1 and (slug, anchor) not in emitted:
                    prefixes.append(f'<span id="{anchor}" class="rh-source-anchor" data-pdf-destination="{rh.esc(name)}"></span>')
                    emitted.add((slug, anchor))
            ledger = {"anchor": identifier, "chapter": slug}
            if region:
                kind = region[0]
                box = region[2]
                used_spans = data
                markup, md, details = render_regions(region, data, vector, identifier, links, pn)
                ledger.update(details)
                counts["tablePanels" if kind == "table" else "figures"] += 1
            else:
                used_spans = [span for row in data for span in row.spans]
                box = rh.rectangle([s.box for s in used_spans])
                if kind in {"math", "checked"}:
                    checked = data[0].overlay if kind == "checked" else None
                    tagged = [m[1] for s in used_spans if s.box.x0 > page.rect.width * .76
                              and (m := TAGS.fullmatch(s.text.strip()))]
                    if checked and checked.get("tag") and checked["tag"] not in tagged:
                        tagged.append(checked["tag"])
                    for tag in tagged:
                        name = "eq-" + slugify(tag)
                        if (slug, name) not in emitted and (slug, name) not in reserved:
                            prefixes.append(f'<span class="rh-source-anchor" id="{name}"></span>')
                            emitted.add((slug, name))
                    art = vector.crop(identifier, box if not checked else box | fitz.Rect(checked["bbox"]))
                    notation = checked["latex"] if checked else rh.display_text(used_spans)
                    summary = "Checked LaTeX" if checked else "Selectable PDF notation • transcription unchecked"
                    markup = (f'<figure class="rh-formula" id="{identifier}" data-source-page="{pn}">'
                              f'<div class="rh-formula-original" tabindex="0">{art}</div>'
                              f'<details class="rh-formula-transcript"><summary>{summary}</summary>'
                              f'<button type="button" class="rh-copy" data-rh-copy="{identifier}-notation">Copy notation</button>'
                              f'<pre id="{identifier}-notation">{rh.esc(notation)}</pre></details></figure>')
                    md = f"$$\n{notation}\n$$" if checked else f"```text\n{notation}\n```"
                    ledger.update(tags=tagged, transcription="checked-latex" if checked else "unverified-positional",
                                  notationSha256=sha256(notation.encode()).hexdigest())
                    counts["checkedMathBlocks" if checked else "unverifiedMathBlocks"] += 1
                    kind = "math"
                else:
                    unresolved = []
                    body = rh.compact_join([
                        inline_content(row, vector, f"{identifier}-l-{li}", links, unresolved)
                        for li, row in enumerate(data, 1)
                    ])
                    if kind != "contents":
                        body = rh.repair_breaks(body)
                    raw = clean_text(body)
                    labels = []
                    if match := RESULT.match(raw):
                        labels.append(f"{slugify(match[1])}-{slugify(match[2])}")
                    if slug == "references" and (match := rh.BIBLIOGRAPHY.match(raw)):
                        labels.append(f"reference-{match[1]}")
                    for alias in labels:
                        if (slug, alias) not in emitted and (slug, alias) not in reserved:
                            prefixes.append(f'<span class="rh-source-anchor" id="{alias}"></span>')
                            emitted.add((slug, alias))
                    tag = "h2" if kind == "heading" else "p"
                    cls = "rh-printed-line" if kind == "contents" else "rh-prose"
                    markup = f'<{tag} class="{cls}" id="{identifier}" data-source-page="{pn}">{body}</{tag}>'
                    md = "## " + raw if kind == "heading" else raw
                    ledger["inlineUnresolved"] = unresolved
                    counts["unverifiedInlineRuns"] += len(unresolved)
                    counts["proseBlocks"] += 1
            markup += references_for_block(links, box, markup, assigned)
            container.append("".join(prefixes) + markup)
            page_paths.append((box, container, len(container) - 1))
            lines_md[slug].append(md)
            ledger.update(type=kind, bbox=[round(n,2) for n in box], sourceSpans=len(used_spans),
                          transcriptSha256=sha256(md.encode()).hexdigest())
            records.append(ledger)

        for i, (rect, href, label) in enumerate(links):
            if i not in assigned:
                _box, container, position = max(page_paths, key=lambda row: (rect & row[0]).get_area())
                container[position] += f'<a class="rh-panel-reference" href="{rh.esc(href)}">{rh.esc(label)}</a>'
        for name, y, slug, anchor in native[pn]:
            if (slug, anchor) not in emitted:
                lines_html[slug].append(f'<span id="{anchor}" class="rh-source-anchor" data-pdf-destination="{rh.esc(name)}"></span>')
                emitted.add((slug, anchor))
        source_count = sum(b["sourceSpans"] for b in records)
        if source_count != len(spans):
            raise ValueError(f"Lost source span on {edition} page {pn}: {source_count} != {len(spans)}")
        counts["sourceSpans"] += source_count
        counts["blocks"] += len(records)
        coverage.append({"page": pn, "retainedSpans": source_count, "administrativeOmissions": omitted,
                         "chapters": sorted(chapter_set), "blocks": records})
        vector.save(public)
        if pn % 20 == 0 or pn == len(document):
            rh.write_json(docs / "conversion-checkpoint.json", {"lastProcessedPage": pn,
                          "sourceSha256": config["sha256"], "counts": dict(counts)})
            print(f"{edition} {pn}/{len(document)} {dict(counts)}", flush=True)

    md_parts = [f"# {document.metadata['title']}",
                "> PDF-based web reading edition. Unicode math is provisional except the checked displays set in LaTeX. Compare notation with the printed vectors."]
    for chapter in chapters:
        slug = chapter["slug"]
        (content / (slug + ".html")).write_text("\n".join(lines_html[slug]) + "\n", encoding="utf-8")
        md_parts.append(f"## {chapter['title']}\n\n" + "\n\n".join(lines_md[slug]))
    (public / "complete.md").write_text("\n\n".join(md_parts) + "\n", encoding="utf-8")
    output = public / "paper.pdf"
    if not output.exists() or not output.samefile(pdf):
        shutil.copyfile(pdf, output)
    rh.write_json(docs / "coverage.json",
                  {"sourceSha256": config["sha256"], "pages": coverage, "counts": dict(counts),
                   "destinationCount": len(urls), "status": "PDF-derived edition with provisional math transcription",
                   "unidentifiedGlyphs": dict(fonts.unknown), "basis": "PDF text spans and vector outlines"})


if __name__ == "__main__":
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("edition", choices=EDITIONS)
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--outline-only", action="store_true")
    args = parser.parse_args()
    generate(args.edition, args.pdf, args.outline_only)
