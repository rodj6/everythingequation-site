#!/usr/bin/env python3
"""Reflow the RH referee manuscript from its controlling PDF.

PyMuPDF supplies printed coordinates and destinations. fontTools identifies
Computer Modern glyphs for the selectable notation. An extracted reading is
always labelled provisional unless a checked LaTeX overlay identifies it.
"""
from bisect import bisect_right
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from hashlib import sha256
import argparse
import html
import gzip
import io
import json
from pathlib import Path
import re
import shutil
import unicodedata
import xml.etree.ElementTree as ET

import fitz
from fontTools.agl import toUnicode
from fontTools.cffLib import CFFFontSet

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content/riemann-hypothesis"
PUBLIC = ROOT / "public/publications/riemann-hypothesis"
DOCS = ROOT / "docs/riemann-hypothesis"
ROUTE = "/articles/riemann-hypothesis"
ASSETS = "/publications/riemann-hypothesis"
SOURCE_SHA256 = "bae1f777817c69c9a3ca7eac08543538547315c640a31ff24d13ac02666c3fb3"
SVG = "{http://www.w3.org/2000/svg}"
XLINK = "{http://www.w3.org/1999/xlink}"
ET.register_namespace("", SVG[1:-1])
ET.register_namespace("xlink", XLINK[1:-1])

PROSE_FONT = ("TimesNewRoman", "Consolas", "Arial", "Segoe")
EQUATION_TAG = re.compile(r"^\(((?:[A-Z][.-]?)?\d+(?:[.-]\d+)*[a-z]?)\)$")
RESULT = re.compile(r"^(Theorem|Lemma|Proposition|Corollary|Definition|Remark|Example|Background fact|Claim)\s+(\d+\.\d+(?:\.\d+)*)\b", re.I)
BIBLIOGRAPHY = re.compile(r"^\[(\d+)\]")
CONTENTS_LINE = re.compile(r"(?:\.{2,}|\. (?:\. ){2,})")
MATH_SYMBOLS = {
    "summation": "∑", "product": "∏", "coproduct": "∐", "integral": "∫",
    "union": "∪", "intersection": "∩", "logicaland": "∧", "logicalor": "∨",
    "unionsq": "⊔", "circleplus": "⊕", "circlemultiply": "⊗", "radical": "√",
    "circumflex": "\u0302", "tilde": "\u0303", "macron": "\u0304",
    "hatwide": "\u0302", "hatwider": "\u0302", "hatwidest": "\u0302",
    "tildewide": "\u0303", "tildewider": "\u0303", "tildewidest": "\u0303",
    "parenleft": "(", "parenright": ")", "bracketleft": "[", "bracketright": "]",
    "braceleft": "{", "braceright": "}", "angbracketleft": "⟨", "angbracketright": "⟩",
    "floorleft": "⌊", "floorright": "⌋", "ceilingleft": "⌈", "ceilingright": "⌉",
    "vextendsingle": "|", "vextenddouble": "‖", "bar": "|", "bardbl": "‖",
    "negationslash": "̸", "mapsto": "↦", "openbullet": "∘", "asteriskmath": "∗",
    "Rfractur": "ℜ", "Ifractur": "ℑ", "lscript": "ℓ", "weierstrass": "℘", "dotlessj": "ȷ",
    "slash": "/", "arrowhookleft": "↪",
    "epsilon1": "ϵ", "epsilon": "ε", "theta1": "ϑ", "pi1": "ϖ", "phi1": "φ", "phi": "ϕ",
}
SCRIPT_FONTS = "CMSY,MSBM,EUFM"
PRINTABLE = {i: c for i, c in enumerate("ABCDEFGHIJKLMNOPQRSTUVWXYZ")}
BLACKBOARD = "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ"
CALLIGRAPHIC = "𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵"
FRAKTUR = "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ"
NORMALIZE_PROSE = str.maketrans({"\u2010": "-", "\u2011": "-", ";": ";", "\u00a0": " ", "\u00ad": None})


def esc(value):
    return html.escape(str(value), quote=True)


def prose(value):
    value = unicodedata.normalize("NFKC", value).translate(NORMALIZE_PROSE)
    return value.replace("—", " – ")


def slug(value):
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def write_json(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")


def font_is_prose(font):
    return font.startswith(PROSE_FONT)


def rectangle(items):
    return fitz.Rect(min(i.x0 for i in items), min(i.y0 for i in items),
                     max(i.x1 for i in items), max(i.y1 for i in items))


def safe_color(color):
    return f"#{color & 0xffffff:06x}"


def strip_styles(text):
    return re.sub(r"<[^>]*>", "", text)


class FontMap:
    def __init__(self, document):
        self.names = {}
        self.unknown = Counter()
        for xref in range(1, document.xref_length()):
            if document.xref_get_key(xref, "Type") != ("name", "/Font"):
                continue
            if document.xref_get_key(xref, "Subtype") != ("name", "/Type1"):
                continue
            name, extension, _, data = document.extract_font(xref)
            if extension != "cff":
                continue
            cff = CFFFontSet()
            cff.decompile(io.BytesIO(data), None)
            self.names[name.split("+")[-1]] = cff[cff.fontNames[0]].charset

    def decode(self, font, gid, character):
        names = self.names.get(font)
        if not names or not (0 <= gid < len(names)):
            return character
        name = names[gid]
        if len(name) == 1 and name.isalpha():
            if character.isupper():
                if font.startswith("MSBM"):
                    return BLACKBOARD[ord(character) - ord("A")] if character in PRINTABLE.values() else character
                if font.startswith("CMSY"):
                    return CALLIGRAPHIC[ord(character) - ord("A")] if character in PRINTABLE.values() else character
                if font.startswith("EUFM"):
                    return FRAKTUR[ord(character) - ord("A")] if character in PRINTABLE.values() else character
            if name.islower() and font.startswith("EUFM"):
                return chr(ord("𝔞") + ord(name) - ord("a"))
            return name
        if name in MATH_SYMBOLS:
            return MATH_SYMBOLS[name]
        if font.startswith("CMEX"):
            stem = re.sub(r"(?:text|display|bigg?|Bigg?|tp|bt|mid|ex)$", "", name)
            if stem in MATH_SYMBOLS:
                return MATH_SYMBOLS[stem]
            if name == "braceex":
                return "⎪"
        decoded = toUnicode(name)
        if decoded and not any(unicodedata.category(c).startswith("C") for c in decoded):
            return decoded
        if not character.isprintable() or character == "�" or font.startswith("CMEX"):
            self.unknown[f"{font}:{name}"] += 1
            return f"⟦{name}⟧"
        return character


@dataclass
class Span:
    text: str
    font: str
    size: float
    baseline: float
    box: fitz.Rect
    char_boxes: list
    block: int
    line: int

    @property
    def prose(self):
        return font_is_prose(self.font)


@dataclass
class Row:
    y: float
    spans: list = field(default_factory=list)
    kind: str = "prose"
    overlay: dict | None = None

    @property
    def box(self):
        return rectangle([span.box for span in self.spans])

    @property
    def text(self):
        return "".join(span.text for span in sorted(self.spans, key=lambda s: s.box.x0)).strip()


def extract_spans(page, fonts):
    traces = {}
    for trace in page.get_texttrace():
        font = trace["font"]
        if font not in fonts.names:
            continue
        for number, gid, origin, _ in trace["chars"]:
            traces[(font, round(origin[0], 2), round(origin[1], 2))] = (gid, chr(number))
    spans = []
    ignored = []
    raw = page.get_text("rawdict", clip=fitz.INFINITE_RECT(), flags=fitz.TEXTFLAGS_RAWDICT & ~fitz.TEXT_PRESERVE_IMAGES)
    for block_index, block in enumerate(raw["blocks"]):
        for line_index, line in enumerate(block.get("lines", [])):
            for item in line["spans"]:
                chars = []
                glyph_baselines = Counter()
                for char in item["chars"]:
                    c = char["c"]
                    if c != " ":
                        trace = traces.get((item["font"], round(char["origin"][0], 2), round(char["origin"][1], 2)))
                        if trace:
                            c = fonts.decode(item["font"], *trace)
                        if not c.isspace():
                            glyph_baselines[round(char["origin"][1], 2)] += 1
                    chars.append((c, fitz.Rect(char["bbox"])))
                text = "".join(c for c, _ in chars)
                if not text.strip():
                    continue
                if item["origin"][1] > 740 and text.strip() == str(page.number + 1):
                    ignored.append({"text": text.strip(), "reason": "printed pagination"})
                    continue
                # PDF extraction can prepend synthetic whitespace on the
                # previous subscript baseline. Use the actual ink baseline.
                baseline = glyph_baselines.most_common(1)[0][0] if glyph_baselines else item["origin"][1]
                spans.append(Span(text, item["font"], item["size"], baseline,
                                  fitz.Rect(item["bbox"]), chars, block_index, line_index))
    return spans, ignored


def is_prose_anchor(span, page_number):
    if not span.prose:
        return False
    text = span.text.strip()
    if EQUATION_TAG.fullmatch(text) and span.box.x0 > 460:
        return False
    if page_number <= 5:
        return span.size >= 9
    if span.font.startswith("TimesNewRoman") and span.size < 9.3:
        if re.fullmatch(r"[A-Za-z0-9]{1,3}", text):
            return False
        if span.box.x0 > 153:
            return len(text) >= 6 and span.box.width > 25
    return bool(re.search(r"[\w\[\]]", text) and (
        span.box.x0 < 145 or span.box.width > 11 or span.font.startswith("Consolas")))


def nearby(values, target, distance):
    insertion = bisect_right(values, target)
    choices = values[max(0, insertion - 1):insertion + 1]
    if not choices:
        return None
    nearest = min(choices, key=lambda value: abs(value - target))
    return nearest if abs(nearest - target) <= distance else None


def cluster_page(spans, page_number, checked):
    overlays = []
    remaining = []
    for span in spans:
        point = fitz.Point((span.box.x0 + span.box.x1) / 2, (span.box.y0 + span.box.y1) / 2)
        match = None
        for item in checked:
            box = fitz.Rect(item["bbox"]) + (-.9, -1.5, .9, 1.5)
            if point in box:
                match = item
                break
        if match is None:
            remaining.append(span)
            continue
        holder = next((row for row in overlays if row.overlay is match), None)
        if holder is None:
            holder = Row(match["bbox"][1] + 2, kind="checked", overlay=match)
            overlays.append(holder)
        holder.spans.append(span)
    spans = remaining
    prose_rows = {}
    for span in spans:
        if not is_prose_anchor(span, page_number):
            continue
        y = round(span.baseline, 2)
        match = next((key for key in (y, round(y - .01, 2), round(y + .01, 2)) if key in prose_rows), y)
        prose_rows.setdefault(match, Row(match))
    baselines = sorted(prose_rows)
    ungrouped = []
    attached_lines = {}
    for span in spans:
        if is_prose_anchor(span, page_number):
            attached_lines[span.block, span.line] = nearby(baselines, span.baseline, .55)
    for span in spans:
        close = nearby(baselines, span.baseline, .55)
        same_line = attached_lines.get((span.block, span.line))
        if close is None and same_line is not None and abs(span.baseline - same_line) < 13:
            close = same_line
        if close is None:
            ungrouped.append(span)
        else:
            prose_rows[close].spans.append(span)
    # As a first pass mathematical side bearings and sub/superscripts are assigned
    # by printed proximity. Wide or horizontally disjoint spans are retained as
    # exact source panels if their grouping cannot be linearized unambiguously.
    for span in ungrouped:
        close = nearby(baselines, span.baseline, 5.4)
        taken = False
        if close is not None:
            row = prose_rows[close]
            for member in row.spans:
                if member.block == span.block or (member.box.x0 - 1 <= span.box.x0 <= member.box.x1 + 7):
                    if not span.prose or span.size < member.size - 1 or span.font.startswith("Consolas"):
                        row.spans.append(span)
                        taken = True
                        break
        if not taken:
            j = bisect_right(baselines, span.baseline)
            prose_rows.setdefault(("math", j), Row(span.baseline, kind="math")).spans.append(span)
    rows = sorted([*prose_rows.values(), *overlays], key=lambda row: (
        row.y if row.kind != "math" else min(s.baseline for s in row.spans), row.kind))
    return [row for row in rows if row.spans]


def style_for(span):
    if span.font.startswith("Consolas"):
        return "code"
    if "Bold" in span.font:
        return "strong"
    if "Italic" in span.font:
        return "em"
    return None


def display_ancestors(spans):
    weights = defaultdict(float)
    for span in spans:
        if span.font.startswith("CMEX"):
            continue
        weights[round(span.baseline, 1)] += span.size * max(1, len(span.text.strip()))
    if not weights:
        return [spans[0].baseline]
    roots = []
    for y in sorted(weights, key=weights.get, reverse=True):
        if not roots or all(abs(y - root) > 10 for root in roots):
            roots.append(y)
    return sorted(roots)


def inline_parse(spans, baseline):
    # This candidate preserves superscript and subscript grouping where the
    # placement suffices. It does not assert a TeX parse of two-dimensional
    # fractions, limits, accents, or crowded scripts.
    out = []
    direction = ""
    previous_x = None
    for span in sorted(spans, key=lambda s: s.box.x0):
        text = span.text.replace("̸=", "≠").replace("̸∈", "∉")
        offset = span.baseline - baseline
        script = ("^" if offset < -1.15 else "_" if offset > 1.05 else "")
        if span.font.startswith("CMEX"):
            script = ""
        if direction != script:
            if direction:
                out.append("}")
            if script:
                out.append(script + "{")
            direction = script
        if not script and previous_x is not None and span.box.x0 > previous_x + 4.2 and not text.startswith(" "):
            out.append(" ")
        out.append(text)
        previous_x = span.box.x1
    if direction:
        out.append("}")
    return "".join(out).strip()


def display_text(spans):
    baselines = display_ancestors(spans)
    groups = {base: [] for base in baselines}
    for span in spans:
        key = min(baselines, key=lambda base: abs(span.baseline - base))
        groups[key].append(span)
    return "\n".join(inline_parse(items, base) for base, items in groups.items() if items)


class PageVectors:
    """One SVG sprite per PDF page.  Each symbol preserves the source outlines."""
    def __init__(self, page):
        self.page = page
        self.root = None
        self.glyphs = []

    def initialize(self):
        self.root = ET.Element(SVG+"svg", {"version": "1.1"})
        # The proof has a few overfull display lines. The wider MediaBox is
        # temporary in memory and does not modify the publication PDF.
        original = self.page.mediabox
        wide = original + (0, 0, 270, 0)
        self.page.set_mediabox(wide)
        try:
            source = ET.fromstring(self.page.get_svg_image(text_as_path=True))
        finally:
            self.page.set_mediabox(original)
        self.definitions = source.find(SVG+"defs")
        if self.definitions is not None:
            self.root.append(self.definitions)
        for node in source:
            if node.tag == SVG + "defs":
                continue
            if node.tag == SVG + "use":
                transform = node.attrib.get("transform", "")
                coordinates = [float(x) for x in re.findall(r"[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?", transform)]
                if len(coordinates) == 6:
                    self.glyphs.append((coordinates[-2], coordinates[-1], node))
                    continue
            self.glyphs.append((None, None, node))

    def formula(self, identifier, spans, rect, inline=False):
        if self.root is None:
            self.initialize()
        box = fitz.Rect(rect) + (-.6, -.9, .6, 1.15)
        symbol = ET.SubElement(self.root, SVG+"symbol", {
            "id": identifier, "viewBox": f"{box.x0:.3f} {box.y0:.3f} {box.width:.3f} {box.height:.3f}",
        })
        # Bounding boxes admit glyphs from the source block, rather than
        # ending an inline crop with the first letter of the next word.
        for x, y, node in self.glyphs:
            if x is None or (
                box.x0 - 1 <= x <= box.x1 + 1 and box.y0 - 1 <= y <= box.y1 + 4
                and (not inline or any(
                    span.box.x0 - .36 <= x < span.box.x1 - .03
                    and abs(y - span.baseline) <= .12 for span in spans))):
                symbol.append(node)
        uri = f"{ASSETS}/notation/p-{self.page.number+1:04d}.svg#{identifier}"
        size_style = (f' style="width:{box.width/10.909:.3f}em;height:{box.height/10.909:.3f}em"'
                      if inline else "")
        return (f'<svg class="rh-notation-vector" aria-hidden="true" focusable="false" '
                f'width="{box.width:.3f}" height="{box.height:.3f}" '
                f'viewBox="0 0 {box.width:.3f} {box.height:.3f}"{size_style}>'
                f'<use href="{uri}" width="{box.width:.3f}" height="{box.height:.3f}"/></svg>')

    def save(self):
        if self.root is not None:
            if self.definitions is not None:
                refs = {node.attrib[XLINK+"href"][1:] for node in self.root.iter(SVG+"use") if XLINK+"href" in node.attrib}
                for definition in list(self.definitions):
                    if definition.get("id") not in refs and definition.tag == SVG+"path":
                        self.definitions.remove(definition)
            target = PUBLIC / "notation" / f"p-{self.page.number+1:04d}.svg"
            target.write_bytes(ET.tostring(self.root, encoding="utf-8", xml_declaration=True))


def read_overlay():
    path = DOCS / "checked-math.json"
    if not path.exists():
        return defaultdict(list)
    out = defaultdict(list)
    for record in json.loads(path.read_text(encoding="utf-8")):
        if "latex" in record:
            out[record["page"]].append(record)
    return out


def destination_anchor(name):
    if name.startswith("cite."):
        return "citation-" + slug(name[5:])
    if name.startswith("page.") or name.startswith("section*."):
        return "destination-" + slug(name.replace("*", "-star"))
    if name.startswith("equation."):
        return "destination-" + slug(name)
    return slug(name)


def local_links(page, target_urls):
    links = []
    for link in page.get_links():
        if "nameddest" in link:
            url = target_urls.get(link["nameddest"])
        elif link.get("uri", "").startswith(("https://", "http://")):
            url = link["uri"]
        else:
            url = None
        if url:
            links.append((link["from"], url))
    return links


def linked_span(span, links):
    highlighted = []
    last_link = None
    buffer = []
    for char, bbox in span.char_boxes:
        coordinate = fitz.Point((bbox.x0 + bbox.x1) / 2, (bbox.y0 + bbox.y1) / 2)
        link = next((url for rect, url in links if not rect.is_empty and coordinate in rect), None)
        if buffer and link != last_link:
            highlighted.append((last_link, "".join(buffer)))
            buffer = []
        buffer.append(char)
        last_link = link
    if buffer:
        highlighted.append((last_link, "".join(buffer)))
    content = "".join(f'<a href="{esc(link)}">{esc(prose(text))}</a>' if link else esc(prose(text))
                      for link, text in highlighted)
    style = style_for(span)
    return f"<{style}>{content}</{style}>" if style else content


def approximate_gap(left, right):
    return bool(left and right.box.x0 - left.box.x1 > 1.75
                and not left.text.endswith((" ", "(", "[", "{"))
                and not right.text.startswith((" ", ".", ",", ":", ";", ")", "]", "}")))


def inline_markup(row, vector, identifier, links, math_records):
    out = []
    source = []
    formula = []
    index = 0
    previous = None
    for span in [*sorted(row.spans, key=lambda s: s.box.x0), None]:
        if span is not None and (not span.prose or (
                span.size < 9.2 and abs(span.baseline - row.y) >= 1.05
                and not span.font.startswith("Consolas") and len(span.text.strip()) < 6)):
            if not formula and (approximate_gap(previous, span) or (
                    previous and previous.prose and not previous.text.endswith(" ") and span.text.startswith(" "))):
                out.append(" ")
                source.append(" ")
            formula.append(span)
            previous = span
            continue
        if formula:
            index += 1
            fid = f"{identifier}-m-{index}"
            notation = inline_parse(formula, row.y)
            box = rectangle([s.box for s in formula])
            # All compound inline expressions retain both the printed notation
            # and a selectable candidate transcription on the same page.
            complex_run = any(abs(s.baseline - row.y) > .85 or s.font.startswith("CMEX") for s in formula)
            if complex_run:
                v = vector.formula(fid, formula, box, inline=True)
                out.append(f'<span id="{fid}" class="rh-inline-math" tabindex="0" aria-label="{esc(notation)}">{v}'
                           f'<span class="rh-inline-transcript"><code>{esc(notation)}</code></span></span>')
                math_records.append({"anchor": fid, "bbox": list(box), "status": "geometry retained, inline transcription unchecked"})
            else:
                out.append(f'<span class="rh-inline-text">{esc(notation)}</span>')
            source.append(notation)
            if span is not None and formula[-1].text.endswith(" ") and not span.text.startswith(" "):
                out.append(" ")
                source.append(" ")
            formula.clear()
        if span is None:
            break
        if approximate_gap(previous, span):
            out.append(" ")
            source.append(" ")
        linked = linked_span(span, links)
        if previous is not None and previous.prose and span.prose and not approximate_gap(previous, span) and previous.text.endswith(" ") and not span.text.startswith(" "):
            linked = linked.lstrip()
        out.append(linked)
        source.append(prose(span.text))
        previous = span
    return "".join(out).strip(), "".join(source).strip()


def compact_join(parts):
    # Remove PDF line wraps without joining independent mathematical tokens.
    result = ""
    for part in parts:
        if not part:
            continue
        if re.search(r"[a-zA-Z0-9_./-]</code>$", result) and re.match(r"<code>[a-zA-Z0-9_./-]", part):
            result = result[:-len("</code>")] + part[len("<code>"):]
        elif re.search(r"(?:-|‐|_)\s*(?:</(?:em|strong|code)>)?$", result) and re.match(r"(?:<(?:em|strong|code)>)?[a-zA-Z]", part):
            result += part
        else:
            result += (" " if result else "") + part
    return result


def repair_breaks(markup):
    # These inherited PDF lockstep breaks are known discretionary splits.
    # Technical hyphens and identifier punctuation retain their source spelling.
    repairs = {
        "argu-ment": "argument", "char-acter": "character", "com-plete": "complete",
        "decla-ration": "declaration", "esti-mates": "estimates", "hypothe-ses": "hypotheses",
        "manu-script": "manuscript", "pub-lished": "published", "reconstruc-tion": "reconstruction",
        "Sec-tions": "Sections", "sec-tion": "section", "theo-rem": "theorem",
    }
    for original, corrected in repairs.items():
        markup = re.sub(r"(?<![\w/])" + original + r"(?![\w/])", corrected, markup)
    return markup


def section_title(row, page_number):
    text = prose(row.text)
    if text in {"Abstract", "Contents", "References"}:
        return True
    if page_number <= 5 and CONTENTS_LINE.search(text):
        return False
    if any(s.size > 12 and "Bold" in s.font for s in row.spans):
        return True
    return bool(re.match(r"^\d+(?:\.\d+)+\s", text) and len(text) < 160
                and row.spans and all("Bold" in s.font or not s.prose for s in row.spans))


def group_paragraphs(rows, page_number, boundaries):
    groups = []
    for row in rows:
        if not row.spans:
            continue
        text = prose(row.text)
        heading = section_title(row, page_number)
        tagged_display = EQUATION_TAG.fullmatch(text) and row.box.x0 > 450
        if tagged_display:
            row.kind = "math"
        kind = row.kind if row.kind in {"math", "checked"} else "heading" if heading else "prose"
        table_bounds = {973: (114, 577), 974: (78, 594), 975: (78, 353)}
        if page_number in table_bounds and table_bounds[page_number][0] < row.y < table_bounds[page_number][1]:
            kind = "table"
        elif page_number <= 5 and (CONTENTS_LINE.search(text) or (page_number in (2, 3, 4))):
            kind = "contents"
        previous = groups[-1] if groups else None
        new_paragraph = (
            previous is None or kind != previous[0] or kind in ("heading", "contents", "checked")
            or any(previous[1][-1].y < cutoff <= row.y for cutoff in boundaries)
            or (kind == "prose" and (
                row.y - previous[1][-1].y > 15.7
                or (row.box.x0 > 83 and previous[1][-1].box.x0 < 81)
                or RESULT.match(text) is not None
                or BIBLIOGRAPHY.match(text) is not None
                or bool(re.match(r"^(?:Proof\.|Source:|AI (?:use|disclosure))", text))
            ))
        )
        if new_paragraph:
            groups.append((kind, [row]))
        else:
            previous[1].append(row)
    return groups


def table_transcript(spans, links):
    columns = [[], [], []]
    for span in spans:
        coordinate = span.box.x0
        columns[2 if coordinate >= 267 else 1 if coordinate >= 115 else 0].append(span)
    starts = sorted(s.baseline for s in columns[0] if re.fullmatch(r"F-\d+|Branch", prose(s.text).strip()))
    if not starts:
        starts = [min(span.baseline for span in spans)]
    rendered = []
    linked_rows = []
    for i, y in enumerate(starts):
        upper = starts[i + 1] if i + 1 < len(starts) else float("inf")
        cells = []
        linked_cells = []
        for column in columns:
            values = [s for s in column if y - .1 <= s.baseline < upper - .1]
            byrow = defaultdict(list)
            for span in values:
                byrow[round(span.baseline, 1)].append(span)
            cells.append(compact_join([inline_parse(values, base) for base, values in sorted(byrow.items())]))
            markup = []
            lines = []
            for _, items in sorted(byrow.items()):
                previous = None
                for span in sorted(items, key=lambda item: item.box.x0):
                    if approximate_gap(previous, span):
                        markup.append(" ")
                    markup.append(linked_span(span, links))
                    previous = span
                lines.append("".join(markup))
                markup.clear()
            linked_cells.append(repair_breaks(compact_join(lines)))
        rendered.append(cells)
        linked_rows.append(linked_cells)
    return rendered, linked_rows


def convert(pdf, start_page=1, end_page=980, checkpoints=True, state_dir=None, resume=False):
    source_bytes = pdf.read_bytes()
    if sha256(source_bytes).hexdigest() != SOURCE_SHA256:
        raise ValueError("Supplied manuscript SHA-256 does not match the controlling PDF")
    PUBLIC.mkdir(exist_ok=True, parents=True)
    (PUBLIC / "notation").mkdir(exist_ok=True)
    DOCS.mkdir(exist_ok=True, parents=True)
    chapters = json.loads((CONTENT / "chapters.json").read_text(encoding="utf-8"))
    locations = [(c["firstPage"], c["startY"]) for c in chapters]
    doc = fitz.open(pdf)
    if len(doc) != 980:
        raise ValueError("Wrong manuscript page count")
    fonts = FontMap(doc)
    overlay = read_overlay()
    anchors = defaultdict(list)
    urls = {}
    for name, item in doc.resolve_names().items():
        if not isinstance(item.get("page"), int) or "to" not in item:
            continue
        page_number = item["page"] + 1
        y = doc[page_number - 1].rect.height - item["to"][1]
        chapter = chapters[max(0, bisect_right(locations, (page_number, y + .08)) - 1)]
        identifier = destination_anchor(name)
        if not identifier:
            continue
        anchors[page_number].append((y, identifier, name, chapter["slug"]))
        urls[name] = f'{ROUTE}/{chapter["slug"]}#{identifier}'

    html_chunks = defaultdict(list)
    md_chunks = defaultdict(list)
    coverage = []
    totals = Counter()
    emitted_ids = set()
    input_signature = None
    if state_dir:
        state_dir.mkdir(parents=True, exist_ok=True)
        state_path = state_dir / "conversion-state.json.gz"
        signature_sources = [Path(__file__), CONTENT / "chapters.json", DOCS / "checked-math.json"]
        input_signature = sha256(b"\0".join(path.read_bytes() for path in signature_sources if path.exists())).hexdigest()
        if resume and state_path.exists():
            with gzip.open(state_path, "rt", encoding="utf-8") as stream:
                state = json.load(stream)
            if (state["inputSignature"] != input_signature or state["sourceSha256"] != SOURCE_SHA256
                    or (state["sourceFirstPage"], state["sourceLastPage"]) != (start_page, end_page)):
                raise ValueError("Checkpoint inputs differ. Restart without --resume to rebuild from page one.")
            html_chunks = defaultdict(list, state["html"])
            md_chunks = defaultdict(list, state["markdown"])
            coverage = state["coverage"]
            totals = Counter(state["totals"])
            emitted_ids = {tuple(value) for value in state["emittedIds"]}
            fonts.unknown.update(state["unknownGlyphs"])
    next_page = coverage[-1]["page"] + 1 if coverage else start_page
    for pn in range(next_page, end_page + 1):
        page = doc[pn - 1]
        applied_overlays = set()
        spans, omitted = extract_spans(page, fonts)
        rows = cluster_page(spans, pn, overlay[pn])
        bounds = [y for p, y in locations if p == pn]
        groups = group_paragraphs(rows, pn, bounds)
        links = local_links(page, urls)
        vector = PageVectors(page)
        block_records = []
        used_chapters = set()
        for i, (kind, block) in enumerate(groups, 1):
            spans_in_block = [span for row in block for span in row.spans]
            box = rectangle([row.box for row in block])
            top = min(row.y for row in block)
            chapter = chapters[max(0, bisect_right(locations, (pn, top + 1.05)) - 1)]
            key = chapter["slug"]
            identifier = f"p-{pn:04d}-b-{i:02d}"
            if key not in used_chapters:
                html_chunks[key].append(f'<span class="rh-page-break" id="page-{pn}" data-source-page="{pn}" aria-hidden="true"></span>')
                md_chunks[key].append(f"<!-- Source PDF page {pn} -->")
                used_chapters.add(key)

            prefix = []
            # Put every native identifier near the page coordinate it targets.
            # Where a chapter starts at the same coordinate, its slug controls.
            following = groups[i][1][0].y if i < len(groups) else 10000
            targets = [item for item in anchors[pn] if item[3] == key and item[0] < following + 1]
            for y, anchor, original, _ in sorted(targets):
                if (key, anchor) not in emitted_ids:
                    prefix.append(f'<span id="{anchor}" class="rh-source-anchor" data-pdf-destination="{esc(original)}"></span>')
                    emitted_ids.add((key, anchor))

            formulas = []
            record = {"anchor": identifier, "chapter": key, "type": kind,
                      "bbox": [round(x, 2) for x in box], "sourceSpans": len(spans_in_block)}
            if kind in {"math", "checked"}:
                record["type"] = "math"
                tags = [EQUATION_TAG.fullmatch(s.text.strip()).group(1) for s in spans_in_block
                        if s.box.x0 > 460 and EQUATION_TAG.fullmatch(s.text.strip())]
                raw = display_text(spans_in_block)
                checked = block[0].overlay if kind == "checked" else None
                if checked and checked.get("tag") and checked["tag"] not in tags:
                    tags.append(checked["tag"])
                # An individual checked overlay must identify the whole display.
                if checked and id(checked) in applied_overlays:
                    raise ValueError(f"Duplicate checked overlay on page {pn}")
                if checked:
                    applied_overlays.add(id(checked))
                notation = checked["latex"] if checked else raw
                v = vector.formula(identifier, spans_in_block, box | fitz.Rect(checked["bbox"]) if checked else box)
                for tag in tags:
                    eid = f"eq-{slug(tag)}"
                    if (key, eid) not in emitted_ids:
                        prefix.append(f'<span class="rh-source-anchor" id="{eid}"></span>')
                        emitted_ids.add((key, eid))
                summary = "Checked LaTeX" if checked else "Selectable PDF notation • transcription unchecked"
                button = f'<button type="button" class="rh-copy" data-rh-copy="{identifier}-notation">Copy notation</button>'
                markup = (
                    f'<figure class="rh-formula" id="{identifier}" data-source-page="{pn}">'
                    f'<div class="rh-formula-original">{v}</div>'
                    f'<details class="rh-formula-transcript"><summary>{summary}</summary>{button}'
                    f'<pre id="{identifier}-notation">{esc(notation)}</pre></details></figure>')
                md = f"$$\n{notation}\n$$" if checked else f"```text\n{notation}\n```"
                record.update(tags=tags, transcription="checked-latex" if checked else "unverified-positional",
                              notationSha256=sha256(notation.encode()).hexdigest())
                totals["checkedMathBlocks" if checked else "unverifiedMathBlocks"] += 1
            elif kind == "table":
                data, linked_rows = table_transcript(spans_in_block, links)
                v = vector.formula(identifier, spans_in_block, box)
                rows_html = []
                for row, linked_cells in zip(data, linked_rows):
                    element = "th" if row[0] == "Branch" else "td"
                    rows_html.append("<tr>" + "".join(f"<{element}>{cell}</{element}>" for cell in linked_cells) + "</tr>")
                cells = "".join(rows_html)
                markup = (f'<figure class="rh-formula rh-table-source" id="{identifier}" data-source-page="{pn}">'
                          f'<div class="rh-formula-original">{v}</div><details class="rh-formula-transcript">'
                          f'<summary>Selectable table transcription</summary><table><tbody>{cells}</tbody></table></details></figure>')
                md = "\n".join("| " + " | ".join(row) + " |" if i else
                              "| " + " | ".join(row) + " |\n| --- | --- | --- |" for i, row in enumerate(data))
                record["transcription"] = "unverified-column-transcription"
                totals["tablePanels"] += 1
            else:
                parts = [inline_markup(row, vector, f"{identifier}-l-{li}", links, formulas)
                         for li, row in enumerate(block, 1)]
                body = compact_join([p[0] for p in parts])
                if kind != "contents":
                    body = repair_breaks(body)
                raw = html.unescape(strip_styles(body))
                # In the transcript the vector-backed formulas are the selectable text.
                alias_match = RESULT.match(raw)
                if alias_match:
                    label = f"{slug(alias_match.group(1))}-{slug(alias_match.group(2))}"
                    if (key, label) not in emitted_ids:
                        prefix.append(f'<span class="rh-source-anchor" id="{label}"></span>')
                        emitted_ids.add((key, label))
                ref = BIBLIOGRAPHY.match(raw)
                if ref and chapter["slug"] == "references":
                    prefix.append(f'<span class="rh-source-anchor" id="reference-{ref.group(1)}"></span>')
                heading = "h2" if kind == "heading" else "p"
                cls = "rh-source-note" if raw.startswith("Source:") else "rh-printed-line" if kind == "contents" else "rh-prose"
                markup = f'<{heading} class="{cls}" id="{identifier}" data-source-page="{pn}">{body}</{heading}>'
                md = "## " + raw if kind == "heading" else raw
                record["inlineUnresolved"] = formulas
                totals["unverifiedInlineRuns"] += len(formulas)
                totals["proseBlocks"] += 1
            if not strip_styles(markup).strip() and kind == "prose":
                raise ValueError(f"Empty prose block at page {pn} block {identifier}")
            html_chunks[key].append("".join(prefix) + markup)
            md_chunks[key].append(md)
            record["transcriptSha256"] = sha256(md.encode()).hexdigest()
            block_records.append(record)
        for _, anchor, name, key in anchors[pn]:
            if (key, anchor) not in emitted_ids:
                html_chunks[key].append(f'<span id="{anchor}" class="rh-source-anchor" data-pdf-destination="{esc(name)}"></span>')
                emitted_ids.add((key, anchor))
        count = sum(block["sourceSpans"] for block in block_records)
        if count != len(spans):
            raise ValueError(f"Source coverage failed on page {pn}: {count} != {len(spans)}")
        vector.save()
        coverage.append({"page": pn, "retainedSpans": count, "administrativeOmissions": omitted,
                         "chapters": sorted(used_chapters), "blocks": block_records})
        totals["blocks"] += len(block_records)
        totals["sourceSpans"] += count
        if state_dir and (pn % 50 == 0 or pn == end_page):
            pending = state_path.with_suffix(".tmp")
            with gzip.open(pending, "wt", encoding="utf-8", compresslevel=3) as stream:
                json.dump({"inputSignature": input_signature, "sourceSha256": SOURCE_SHA256,
                           "sourceFirstPage": start_page, "sourceLastPage": end_page,
                           "html": html_chunks, "markdown": md_chunks, "coverage": coverage,
                           "totals": totals, "emittedIds": sorted(emitted_ids), "unknownGlyphs": fonts.unknown},
                          stream, ensure_ascii=False, separators=(",", ":"))
            pending.replace(state_path)
        if checkpoints and (pn % 20 == 0 or pn == end_page):
            write_json(DOCS / "conversion-checkpoint.json", {"lastProcessedPage": pn,
                       "sourceSha256": SOURCE_SHA256, "counts": dict(totals)})
            print(f"Processed {pn:3} / {end_page}; {dict(totals)}", flush=True)

    markdown = ["# The ordinary Riemann Hypothesis argument in the supplied Lean source",
                "> PDF-based reading transcript. Unicode notation is provisional. Compare geometry with the web reader or the controlling PDF. Checked TeX displays are marked by display delimiters."]
    for chapter in chapters:
        key = chapter["slug"]
        if key not in html_chunks:
            continue
        parts = html_chunks[key]
        (CONTENT / f"{key}.html").write_text("\n".join(parts) + "\n", encoding="utf-8")
        markdown.append(f"## {chapter['title']}\n\n" + "\n\n".join(md_chunks[key]))
    (PUBLIC / "complete.md").write_text("\n\n".join(markdown) + "\n", encoding="utf-8")
    shutil.copyfile(pdf, PUBLIC / "paper.pdf")
    write_json(DOCS / "coverage.json", {"sourceSha256": SOURCE_SHA256, "pages": coverage,
               "counts": dict(totals), "unidentifiedGlyphs": dict(fonts.unknown),
               "status": "provisional PDF-derived conversion",
               "destinationCount": len(urls), "basis": "PDF text spans and vector outlines"})
    print(f"Done: {len(html_chunks)} chapter files and {len(coverage)} source pages", flush=True)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--start-page", type=int, default=1)
    parser.add_argument("--end-page", type=int, default=980)
    parser.add_argument("--state-dir", type=Path, help="Save resumable HTML, Markdown, coverage and anchor state every 50 PDF pages")
    parser.add_argument("--resume", action="store_true", help="Resume from the last compatible saved checkpoint")
    args = parser.parse_args()
    if args.resume and args.state_dir is None:
        parser.error("--resume requires --state-dir")
    convert(args.pdf.resolve(), args.start_page, args.end_page, state_dir=args.state_dir, resume=args.resume)
