#!/usr/bin/env python3
"""Restore native PDF footnote annotation links on the inline glyph runs."""
import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re

import fitz

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content/riemann-hypothesis"
PDF = ROOT / "public/publications/riemann-hypothesis/paper.pdf"
COVERAGE = ROOT / "docs/riemann-hypothesis/coverage.json"
ROUTE = "/articles/riemann-hypothesis/"


class FootnoteDestinations(HTMLParser):
    def __init__(self, slug, destinations):
        super().__init__()
        self.slug = slug
        self.destinations = destinations

    def handle_starttag(self, tag, pairs):
        attrs = dict(pairs)
        name = attrs.get("data-pdf-destination", "")
        if name.startswith("Hfootnote."):
            self.destinations[name] = ROUTE + self.slug + "#" + attrs["id"]


def main():
    chapters = json.loads((CONTENT / "chapters.json").read_text(encoding="utf-8"))
    coverage = json.loads(COVERAGE.read_text(encoding="utf-8"))
    sources = {}
    destinations = {}
    for chapter in chapters:
        slug = chapter["slug"]
        sources[slug] = (CONTENT / f"{slug}.html").read_text(encoding="utf-8")
        FootnoteDestinations(slug, destinations).feed(sources[slug])

    changes = set()
    count = 0
    with fitz.open(PDF) as document:
        for page in document:
            for link in page.get_links():
                name = link.get("nameddest", "")
                if not name.startswith("Hfootnote."):
                    continue
                box = link["from"]
                matches = [(block["chapter"], inline["anchor"])
                           for block in coverage["pages"][page.number]["blocks"]
                           for inline in block.get("inlineUnresolved", [])
                           if (box & fitz.Rect(inline["bbox"])).get_area() / box.get_area() > .75]
                if len(matches) != 1:
                    raise ValueError(f"Expected one inline mark for {name} on PDF page {page.number + 1}")
                slug, anchor = matches[0]
                target = html.escape(destinations[name], quote=True)
                label = "Read footnote " + name.split(".")[-1]
                opening = f'<a id="{anchor}" class="rh-inline-math" href="{target}" aria-label="{label}">'
                if opening not in sources[slug]:
                    pattern = (r'<span id="' + re.escape(anchor) + r'" class="rh-inline-math" [^>]*>'
                               r'(<svg.*?</svg><span class="rh-inline-transcript">.*?</span>)</span>')
                    sources[slug], replacements = re.subn(pattern, lambda found: opening + found[1] + "</a>",
                                                           sources[slug], count=1, flags=re.DOTALL)
                    if replacements != 1:
                        raise ValueError(f"Inline footnote source element missing for {name}: {anchor}")
                    changes.add(slug)
                count += 1

    if count != 23:
        raise ValueError(f"Expected 23 PDF footnote annotations, found {count}")
    for slug in sorted(changes):
        (CONTENT / f"{slug}.html").write_text(sources[slug], encoding="utf-8")
    print(f"Verified {count} footnote links; updated {len(changes)} HTML files.")


if __name__ == "__main__":
    main()
