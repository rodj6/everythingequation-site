#!/usr/bin/env python3
"""Restore source paragraph boundaries hidden inside large PDF text blocks.

Only existing live HTML prose is handled here. Mathematical source panels and
tables are handled by their own geometry-preserving refinement. Every original
source line belongs to exactly one resulting paragraph. The first paragraph
retains the original stable source-block anchor.
"""
from pathlib import Path
import argparse
import collections
import importlib.util
import json
import re

import fitz

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location(
    "ymconverter", ROOT / "scripts/convert-einstein-ym.py"
)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


def paragraph_indent(line):
    """Recognize this edition's approximately 17pt body paragraph indent.

    Require a substantial Roman-language word at the left edge. A mathematical
    superscript, a column cell or an indented formula must not create a prose
    paragraph boundary.
    """
    spans = [s for s in line["spans"] if s["text"].strip()]
    if not spans:
        return False
    first = min(spans, key=lambda s: s["bbox"][0])
    return (
        87.5 <= first["bbox"][0] <= 90.5
        and "Math" not in first["font"]
        and re.search(r"[A-Za-z]{4,}", first["text"])
    )


def refine(ident):
    cd = ROOT / "content/source-lift" / ident
    ad = ROOT / "public/publications/source-lift" / ident
    inventory_path = ad / "formula-inventory.json"
    formulas = json.loads(inventory_path.read_text())
    ledger = json.loads((ROOT / "docs/einstein-ym" / (ident + ".json")).read_text())
    by_anchor = collections.defaultdict(list)
    for row in ledger["records"]:
        by_anchor[row["anchor"]].append(row)
    pdf = ad / "paper.pdf"
    if not pdf.exists():
        pdf = ROOT.parent.parent / "upload" / ledger["sourceFile"]
    # Converter.__init__ cleans formula assets, which this additive pass must
    # never do. Initialize only the state needed by inline()/vector().
    conv = object.__new__(mod.Converter)
    conv.doc = fitz.open(pdf)
    conv.asset_dir = ad
    conv.url = f"/publications/source-lift/{ident}"
    conv.cache = {}
    conv.count = max(int(Path(f["asset"]).stem.split("-")[-1]) for f in formulas)
    conv.figures = []
    conv.svg = {}
    conv.stats = collections.Counter()
    changed = []
    writes = []
    index = json.loads((cd / "index.json").read_text())
    pattern = re.compile(r'<p\b(?P<attrs>[^>]*\bid="(?P<id>p\d+-block-\d+)"[^>]*)>(?P<body>[\s\S]*?)</p>')

    for chapter in index["chapters"]:
        path = ROOT / chapter["htmlPath"]
        original = path.read_text()

        def rewrite(match):
            anchor = match["id"]
            rows = by_anchor.get(anchor, [])
            # Same-baseline combined mathematical fragments use a geometry-
            # preserving representation. Leave those to the panel pass.
            if len(rows) != 1 or rows[0]["kind"] != "prose":
                return match[0]
            row = rows[0]
            page = conv.doc[row["sourcePage"] - 1]
            block = page.get_text("dict")["blocks"][row["sourceBlock"]]
            lines = block.get("lines", [])
            if len(lines) < 6:
                return match[0]
            starts = [0] + [i for i, line in enumerate(lines) if i > 0 and paragraph_indent(line)]
            if len(starts) < 2:
                return match[0]
            starts.append(len(lines))
            groups = [lines[a:b] for a, b in zip(starts, starts[1:])]
            assert sum(len(group) for group in groups) == len(lines)
            spans_before = [s for line in lines for s in line["spans"]]
            spans_after = [s for group in groups for line in group for s in line["spans"]]
            assert spans_before == spans_after, (ident, anchor)
            output = []
            for i, group in enumerate(groups):
                rect = fitz.Rect(group[0]["bbox"])
                for line in group[1:]:
                    rect |= fitz.Rect(line["bbox"])
                paragraph = {"type": 0, "bbox": tuple(rect), "lines": group}
                new_anchor = anchor if i == 0 else f"{anchor}-paragraph-{i+1}"
                output.append(
                    f'<p id="{new_anchor}" data-source-page="{row["sourcePage"]}">'
                    + conv.inline(paragraph, page)
                    + "</p>"
                )
            changed.append({
                "sourcePage": row["sourcePage"],
                "sourceBlock": row["sourceBlock"],
                "anchor": anchor,
                "sourceLines": len(lines),
                "paragraphs": len(groups),
                "route": row["route"],
            })
            return "\n".join(output)

        result = pattern.sub(rewrite, original)
        writes.append((path, result))
        conv.svg.clear()

    for path, result in writes:
        path.write_text(result)
    inventory_path.write_text(json.dumps(formulas + conv.figures, ensure_ascii=False) + "\n")
    report = {
        "id": ident,
        "refined": changed,
        "newFormulaAssets": len(conv.figures),
        "sourceLineCoverage": "Every original source line and span retained in exactly one output paragraph; original source anchor retained by the first paragraph.",
    }
    (ROOT / "docs/einstein-ym" / f"{ident}-prose-refinement.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n"
    )
    print(ident, len(changed), "source blocks refined into", sum(x["paragraphs"] for x in changed), "paragraphs", flush=True)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--id", required=True)
    refine(parser.parse_args().id)
