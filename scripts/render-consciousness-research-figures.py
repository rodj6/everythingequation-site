#!/usr/bin/env python3
"""Render the exact TikZ figure bodies in consciousness Papers 2 and 3.

Requires pdflatex with the original manuscript packages and PyMuPDF. Each
figure is typeset at the original article's content width, then cropped to
its vector content. No plot values or diagram coordinates are reconstructed.

Example:
  python scripts/render-consciousness-research-figures.py \
    --paper2 /path/to/Paper2_Relational_Boundaries_Zenodo.tex \
    --paper3 /path/to/Paper3_Learning_Effective_Interfaces_Zenodo.tex
"""

from __future__ import annotations

import argparse
import hashlib
import html
import json
from pathlib import Path
import re
import subprocess
import tempfile

import fitz


ALT = {
    2: [
        "Exact reconstruction-loss curves for the masking parameter from zero to one. "
        "The first loss is one half minus epsilon through epsilon one third, then "
        "one quarter of one minus epsilon. The second is one half of one minus "
        "epsilon through epsilon one half, then epsilon over two. Below, the "
        "inherited projection has both cross-edges at zero, but only the edge "
        "from 2 to 1 for positive epsilon through one half.",
        "Three distinct inputs enter a registered support and schedule-indexed "
        "profile: a joint experiment with one common decoder, a native schedule "
        "with routes and retained resources, and a cut comparison with one coherent "
        "alternative. The profile does not select a psychophysical threshold.",
        "Commuting composition diagram: fine modules and their effective modules "
        "each feed a causal network through the same wiring. Vertical quotient "
        "maps preserve joint records, successor classes, and protected marks.",
        "Intervention records and realization premises lead to a functional "
        "structural certificate. That certificate and a separate psychophysical "
        "bridge or identifying premise together lead to conditional phenomenal attribution.",
    ],
    3: [
        "Evidence pipeline from an opaque finite source process to public fitting "
        "and calibration records, produced models and a fixed selector, a committed "
        "interface model, and postcommit joint-law evaluation. A dashed route gives "
        "privileged source access only to the scorer.",
        "Horizontal bars show mean complete-law total variation on 1,152 primary "
        "slots: R 0.054913, S 0.054918, E 0.116210, G 0.395816, B 0.064684, "
        "P 0.099072, O 0.152015, H 0.986652. Lower is better; these are finite "
        "descriptive scores without population confidence bars.",
        "Passing tests out of 48 in nine families, comparing standard state portfolio "
        "S with passive tree P: hidden belief 48 versus 16; mode register 48 versus "
        "23; modular counter 48 versus 35; gated queue 48 versus 31; probe 48 "
        "versus 33; refractory 48 versus 24; challenge 2 versus 48; receiver 32 "
        "versus 48; budget 39 versus 48.",
        "Original-budget diagnostic progression for 48 fixtures: exact "
        "parameterization exists for all 48, an individually passing candidate "
        "is produced for 39, and the selected model passes all core tests for 37. "
        "The eleven selected failures comprise two selection misses, eight banks "
        "excluded by an event witness, and one unresolved mixture case.",
    ],
}


def balanced_argument(text: str, command: str) -> str:
    match = re.search(r"\\" + command + r"\s*\{", text)
    if not match:
        raise ValueError(f"Missing {command}")
    start = match.end()
    depth = 1
    pos = start
    while pos < len(text):
        char = text[pos]
        if char == "\\":
            pos += 2
            continue
        if char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if not depth:
                return text[start:pos]
        pos += 1
    raise ValueError(f"Unterminated {command}")


def render(paper: int, source: Path, output_root: Path) -> None:
    source_bytes = source.read_bytes()
    text = source_bytes.decode("utf-8")
    preamble = text[text.index("\\documentclass"):text.index("\\begin{document}")]
    figures = re.findall(r"\\begin\{figure\}(?:\[[^\]]*\])?.*?\\end\{figure\}", text, re.S)
    if len(figures) != 4:
        raise ValueError(f"Paper {paper}: expected four source figures, found {len(figures)}")
    target = output_root / f"paper-{paper}" / "figures"
    target.mkdir(parents=True, exist_ok=True)
    manifest = []
    with tempfile.TemporaryDirectory(prefix=f"consciousness-paper{paper}-figures-") as temp:
        build = Path(temp)
        for number, figure in enumerate(figures, 1):
            caption = balanced_argument(figure, "caption")
            label = balanced_argument(figure, "label")
            body = re.sub(r"^\\begin\{figure\}(?:\[[^\]]*\])?", "", figure)
            body = body[:body.index("\\caption")]
            document = preamble + "\n\\begin{document}\n\\pagestyle{empty}\n"
            document += "\\noindent\\begin{minipage}{\\linewidth}\n" + body
            document += "\n\\end{minipage}\n\\end{document}\n"
            tex = build / f"figure-{number}.tex"
            tex.write_text(document)
            completed = subprocess.run(
                ["pdflatex", "-interaction=nonstopmode", "-halt-on-error", tex.name],
                cwd=build, capture_output=True, text=True,
            )
            if completed.returncode:
                raise RuntimeError(completed.stdout[-5000:])
            pdf = fitz.open(tex.with_suffix(".pdf"))
            if len(pdf) != 1:
                raise ValueError(f"Paper {paper} figure {number}: unexpected page count")
            page = pdf[0]
            boxes = [fitz.Rect(box) for kind, box in page.get_bboxlog() if kind != "ignore-text"]
            if not boxes:
                raise ValueError("Rendered figure is empty")
            bounds = boxes[0]
            for box in boxes[1:]:
                bounds |= box
            bounds = (bounds + (-5, -5, 5, 5)) & page.rect
            cropped = fitz.open()
            cropped_page = cropped.new_page(width=bounds.width, height=bounds.height)
            cropped_page.show_pdf_page(cropped_page.rect, pdf, 0, clip=bounds)
            # Outlined glyphs preserve the exact original fonts across browsers.
            svg = cropped_page.get_svg_image(text_as_path=True)
            alt = ALT[paper][number - 1]
            title_id, description_id = f"p{paper}-fig{number}-title", f"p{paper}-fig{number}-desc"
            svg = svg.replace("<svg ", f'<svg role="img" aria-labelledby="{title_id} {description_id}" ', 1)
            opening = svg.index(">") + 1
            accessible = f'<title id="{title_id}">Paper {paper}, Figure {number}</title>'
            accessible += f'<desc id="{description_id}">{html.escape(alt)}</desc>'
            # Keep the paper's white background, including on the site's dark theme.
            accessible += '<rect x="0" y="0" width="100%" height="100%" fill="white"/>'
            svg = svg[:opening] + accessible + svg[opening:]
            name = f"figure-{number}.svg"
            (target / name).write_text(svg)
            manifest.append({
                "number": number,
                "file": name,
                "label": label,
                "captionTex": caption,
                "alt": alt,
                "sourceHash": hashlib.sha256(source_bytes).hexdigest(),
                "figureHash": hashlib.sha256(figure.encode()).hexdigest(),
                "svgHash": hashlib.sha256(svg.encode()).hexdigest(),
                "width": round(bounds.width, 3),
                "height": round(bounds.height, 3),
            })
            print(f"Paper {paper} figure {number}: {bounds.width:.1f} x {bounds.height:.1f} pt")
            cropped.close()
            pdf.close()
    (target / "figures.json").write_text(json.dumps(manifest, indent=2) + "\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--paper2", required=True, type=Path)
    parser.add_argument("--paper3", required=True, type=Path)
    parser.add_argument("--output-root", type=Path, default=Path(__file__).resolve().parents[1] / "public/publications/consciousness")
    args = parser.parse_args()
    render(2, args.paper2, args.output_root)
    render(3, args.paper3, args.output_root)
