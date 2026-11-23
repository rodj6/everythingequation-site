#!/usr/bin/env python3
"""Check native PDF annotation targets and counts by source page."""
from collections import Counter
from html.parser import HTMLParser
import json
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content/riemann-hypothesis"
PDF = ROOT / "public/publications/riemann-hypothesis/paper.pdf"
ROUTE = "/articles/riemann-hypothesis/"


class LinkInventory(HTMLParser):
    def __init__(self, route, targets, links):
        super().__init__()
        self.route = route
        self.targets = targets
        self.links = links
        self.page = None

    def handle_starttag(self, tag, pairs):
        attributes = dict(pairs)
        if "data-source-page" in attributes:
            self.page = int(attributes["data-source-page"])
        destination = attributes.get("data-pdf-destination")
        if destination:
            self.targets[destination] = f"{self.route}#{attributes['id']}"
        if tag == "a" and attributes.get("href"):
            self.links[self.page, attributes["href"]] += 1


def main():
    targets = {}
    rendered = Counter()
    for chapter in json.loads((CONTENT / "chapters.json").read_text(encoding="utf-8")):
        slug = chapter["slug"]
        inventory = LinkInventory(ROUTE + slug, targets, rendered)
        inventory.feed((CONTENT / f"{slug}.html").read_text(encoding="utf-8"))

    source = Counter()
    with fitz.open(PDF) as document:
        for page in document:
            for link in page.get_links():
                target = targets[link["nameddest"]] if link["kind"] == fitz.LINK_NAMED else link["uri"]
                source[page.number + 1, target] += 1

    native_counts = Counter()
    native_counts["internal"] = sum(count for (_, href), count in source.items() if href.startswith(ROUTE))
    native_counts["external"] = sum(count for (_, href), count in source.items() if not href.startswith(ROUTE))
    if native_counts != {"internal": 4529, "external": 137}:
        raise ValueError(f"The bundled PDF annotation inventory differs from Version 2: {native_counts}")

    missing = source - rendered
    extra = rendered - source
    report = {
        "nativeInternalAnnotations": native_counts["internal"],
        "nativeExternalAnnotations": native_counts["external"],
        "htmlInternalAnchors": sum(count for (_, href), count in rendered.items() if href.startswith(ROUTE)),
        "htmlExternalAnchors": sum(count for (_, href), count in rendered.items() if not href.startswith(ROUTE)),
        "missingNativeAnnotations": missing.total(),
        "extraHtmlAnchors": extra.total(),
        "missing": [{"page": page, "target": href, "count": count}
                    for (page, href), count in sorted(missing.items())],
    }
    print(json.dumps(report, indent=2))
    return bool(missing)


if __name__ == "__main__":
    raise SystemExit(main())
