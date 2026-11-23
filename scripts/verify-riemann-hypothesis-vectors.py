#!/usr/bin/env python3
"""Compare each printed-page web vector with independently rendered PDF glyphs."""
from argparse import ArgumentParser
from collections import Counter
from pathlib import Path
import xml.etree.ElementTree as ET

import fitz

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public/publications/riemann-hypothesis"
SVG = "{http://www.w3.org/2000/svg}"
XLINK = "{http://www.w3.org/1999/xlink}"


def nodes_with_geometry(vector, glyph_defs):
    def signature(node):
        if node.tag != SVG + "use":
            return node.tag, tuple(sorted(node.attrib.items())), tuple(signature(child) for child in node)
        ref = node.attrib[XLINK + "href"][1:]
        attrs = tuple(sorted((key, value) for key, value in node.attrib.items() if key != XLINK + "href"))
        return node.tag, tuple(sorted(glyph_defs[ref].attrib.items())), attrs
    return Counter(signature(node) for node in vector if node.tag != SVG + "defs")


def definitions(root):
    return {node.attrib["id"]: node for node in root.find(SVG + "defs") if "id" in node.attrib}


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--pdf", type=Path, default=PUBLIC / "paper.pdf")
    parser.add_argument("--pages", nargs="*", type=int, help="Optional list of printed page numbers to sample")
    args = parser.parse_args()
    totals = Counter()
    with fitz.open(args.pdf) as manuscript:
        pages = args.pages or range(1, len(manuscript)+1)
        for page in pages:
            drawn = ET.fromstring(manuscript[page-1].get_svg_image(text_as_path=True))
            actual = ET.parse(PUBLIC / "notation" / f"p-{page:04d}.svg").getroot()
            printed = next(node for node in actual.iter(SVG + "symbol") if node.get("id") == f"source-page-{page}")
            expected = nodes_with_geometry(drawn, definitions(drawn))
            observed = nodes_with_geometry(printed, definitions(actual))
            if expected != observed:
                raise ValueError(f"Printed page {page}: {(expected - observed).total()} absent or changed and "
                                 f"{(observed - expected).total()} extra drawing primitives.")
            totals["pages"] += 1
            totals["drawingPrimitives"] += observed.total()
    print(dict(totals))


if __name__ == "__main__":
    main()
