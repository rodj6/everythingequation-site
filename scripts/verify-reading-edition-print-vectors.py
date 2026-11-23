#!/usr/bin/env python3
"""Verify that the full-page web snapshots retain the supplied PDF vector ink."""
from argparse import ArgumentParser
from pathlib import Path
from hashlib import sha256
import json
import xml.etree.ElementTree as ET

import fitz

ROOT = Path(__file__).resolve().parents[1]
SVG = "{http://www.w3.org/2000/svg}"
HREF = "{http://www.w3.org/1999/xlink}href"
PATHS = {"ads4-boundary-ball-reconstruction": "gravity/ads4-boundary-ball-reconstruction",
         "haar-critical": "haar-critical"}


def open_pdf(edition):
    public = ROOT / "public/publications" / PATHS[edition]
    pdf = public / "paper.pdf"
    ledger = ROOT / "docs/reading-editions" / edition / "coverage.json"
    metadata = json.loads(ledger.read_text(encoding="utf-8"))
    if sha256(pdf.read_bytes()).hexdigest() != metadata["sourceSha256"]:
        raise ValueError(f"Source PDF hash failed for {edition}")
    return pdf, public, metadata


def node_key(node, *, ignore_id=False):
    return (
        node.tag,
        tuple(sorted((k, v) for k, v in node.attrib.items() if k != "id" or not ignore_id)),
        tuple(node_key(child) for child in node),
    )


def verify(edition):
    pdf, public, ledger = open_pdf(edition)
    nodes = symbols = 0
    with fitz.open(pdf) as manuscript:
        if len(manuscript) != len(ledger["pages"]):
            raise ValueError(f"Source page ledger mismatch for {edition}")
        for i, page in enumerate(manuscript, 1):
            native = ET.fromstring(page.get_svg_image(text_as_path=True))
            output = ET.parse(public / "notation" / f"p-{i:04d}.svg").getroot()
            ink = next(node for node in output.iter() if node.get("id") == "printed-ink")
            expected_ink = [node_key(node, ignore_id=True) for node in native if node.tag != SVG + "defs"]
            rendered_ink = [node_key(node, ignore_id=True) for node in ink]
            if expected_ink != rendered_ink:
                raise ValueError(f"{edition} page {i} drawing mismatch")
            native_definitions = native.find(SVG + "defs")
            expected_defs = [] if native_definitions is None else [node_key(node) for node in native_definitions]
            rendered_defs = [node_key(node) for node in output.find(SVG + "defs") if node.get("id") != "printed-ink"]
            if expected_defs != rendered_defs:
                raise ValueError(f"{edition} page {i} glyph outline mismatch")
            ids = [node.get("id") for node in output.iter() if "id" in node.attrib]
            if len(ids) != len(set(ids)):
                raise ValueError(f"{edition} page {i} duplicate SVG destination")
            names = set(ids)
            broken = {node.get(HREF) for node in output.iter(SVG + "use") if node.get(HREF, "")[1:] not in names}
            if broken or f"source-page-{i}" not in names:
                raise ValueError(f"{edition} page {i} has unresolved glyph references: {sorted(broken)}")
            nodes += len(expected_ink)
            symbols += sum(1 for _ in output.iter(SVG + "symbol"))
    return {"edition": edition, "pages": len(ledger["pages"]), "printedDrawingPrimitives": nodes,
            "cropAndPageSymbols": symbols}


if __name__ == "__main__":
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("edition", choices=PATHS)
    print(json.dumps(verify(parser.parse_args().edition)))
