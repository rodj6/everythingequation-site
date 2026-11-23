#!/usr/bin/env python3
"""Reconcile every native bookmark, destination and hyperlink against the delivered editions."""
from collections import Counter
from html.parser import HTMLParser
import json
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
EDITIONS = (
    ("ads4-boundary-ball-reconstruction", "gravity/ads4-boundary-ball-reconstruction",
     "/source-readout/ads4-boundary-ball-reconstruction/", (46, 538, 708, 28)),
    ("haar-critical", "haar-critical", "/articles/haar-critical/", (27, 1819, 328, 66)),
)


class NativeLinks(HTMLParser):
    def __init__(self, route, targets, links):
        super().__init__()
        self.route = route
        self.targets = targets
        self.links = links
        self.source_page = None

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if "data-source-page" in attrs:
            self.source_page = int(attrs["data-source-page"])
        name = attrs.get("data-pdf-destination")
        if name:
            if name in self.targets:
                raise ValueError(f"Duplicate native name {name}")
            self.targets[name] = f"{self.route}#{attrs['id']}"
        if tag == "a" and attrs.get("href"):
            self.links[(self.source_page, attrs["href"])] += 1


def verify(edition, folder, route, expected_counts):
    content = ROOT / "content/reading-editions" / edition
    pdf = ROOT / "public/publications" / folder / "paper.pdf"
    targets = {}
    rendered = Counter()
    for chapter in json.loads((content / "chapters.json").read_text(encoding="utf-8")):
        slug = chapter["slug"]
        inventory = NativeLinks(route + slug, targets, rendered)
        inventory.feed((content / f"{slug}.html").read_text(encoding="utf-8"))

    original = Counter()
    source_kinds = Counter()
    absent = set()
    with fitz.open(pdf) as doc:
        toc_count = len(doc.get_toc())
        named = set(doc.resolve_names())
        for page in doc:
            for link in page.get_links():
                name = link.get("nameddest")
                if name:
                    if name not in targets:
                        absent.add(name)
                    target = targets.get(name, "unresolved:" + name)
                    source_kinds["internal"] += 1
                elif "uri" in link:
                    target = link["uri"]
                    source_kinds["external"] += 1
                else:
                    raise ValueError(f"Unsupported PDF annotation on page {page.number + 1}: {link}")
                original[(page.number + 1, target)] += 1

    missing = original - rendered
    extra = rendered - original
    counts = (toc_count, len(named), source_kinds["internal"], source_kinds["external"])
    report = {
        "edition": edition,
        "bookmarks": toc_count,
        "namedDestinations": len(named),
        "missingDestinations": sorted(named - targets.keys() | absent),
        "extraDestinations": sorted(targets.keys() - named),
        "nativeInternalAnnotations": source_kinds["internal"],
        "nativeExternalAnnotations": source_kinds["external"],
        "htmlInternalLinks": sum(n for (_, href), n in rendered.items() if href.startswith(route)),
        "htmlExternalLinks": sum(n for (_, href), n in rendered.items() if not href.startswith(route)),
        "missingAnnotations": missing.total(),
        "extraHtmlLinks": extra.total(),
        "missingByPageAndTarget": [
            {"page": page, "target": href, "multiplicity": count}
            for (page, href), count in sorted(missing.items())
        ],
    }
    failed = bool(counts != expected_counts or missing or report["missingDestinations"] or report["extraDestinations"])
    return report, failed


if __name__ == "__main__":
    results = [verify(*item) for item in EDITIONS]
    print(json.dumps([report for report, _ in results], indent=2, ensure_ascii=False))
    raise SystemExit(any(failed for _, failed in results))
