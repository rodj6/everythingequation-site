#!/usr/bin/env python3
"""Restore native PDF links on vector-backed inline symbols and source panels."""
from collections import Counter, defaultdict
import html
import json
from pathlib import Path
import re

import fitz

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content/riemann-hypothesis"
PDF = ROOT / "public/publications/riemann-hypothesis/paper.pdf"
COVERAGE = ROOT / "docs/riemann-hypothesis/coverage.json"
ROUTE = "/articles/riemann-hypothesis/"
NATIVE = re.compile(r'<span id="([^"]+)"[^>]* data-pdf-destination="([^"]+)"')
PAGE = re.compile(r'data-source-page="(\d+)"')
LINK = re.compile(r'<a\s[^>]*\bhref="([^"]+)"')
LEGACY_ANCHORS = {
    "essential-inputs-and-their-present-status": {"table-1": "table-4"},
    "what-the-terminal-row-supplies": {
        "destination-equation-17-398": "destination-equation-17-402",
        "eq-398": "eq-402",
    },
}


def load_bodies():
    chapters = json.loads((CONTENT / "chapters.json").read_text(encoding="utf-8"))
    bodies = {chapter["slug"]: (CONTENT / f'{chapter["slug"]}.html').read_text(encoding="utf-8")
              for chapter in chapters}
    changed = set()
    # Running prose beginning with a number can reserve a heading alias before
    # the actual theorem. Retarget this collision at the bold printed heading.
    heading_chapter = "local-closedness-breuilkisin-lattice-towers-and-trace-limit-transfer"
    heading_body = bodies[heading_chapter]
    if 'data-pdf-destination="theorem.7.106"' not in heading_body:
        stale = '<span class="rh-source-anchor" id="theorem-7-106"></span>'
        mark = re.compile(r'<p\b[^>]*id="p-0483-b-07"[^>]*><strong>Theorem 7\.106</strong>')
        if heading_body.count(stale) != 1 or not mark.search(heading_body):
            raise ValueError("Could not identify the printed Theorem 7.106 block")
        corrected = '<span id="theorem-7-106" class="rh-source-anchor" data-pdf-destination="theorem.7.106"></span>'
        bodies[heading_chapter] = mark.sub(lambda found: corrected + found[0], heading_body.replace(stale, ""), count=1)
        changed.add(heading_chapter)
    destinations = {html.unescape(name): f"{ROUTE}{key}#{anchor}" for key, body in bodies.items()
                    for anchor, name in NATIVE.findall(body)}
    counts = Counter()
    for body in bodies.values():
        current_page = None
        for line in body.splitlines():
            marker = PAGE.search(line)
            if marker:
                current_page = int(marker[1])
            for href in LINK.findall(line):
                counts[current_page, html.unescape(href)] += 1
    return bodies, destinations, counts, changed


def get_inventory(document, destinations):
    annotations = defaultdict(list)
    for page in document:
        for link in page.get_links():
            if link["kind"] == fitz.LINK_NAMED:
                href = destinations[link["nameddest"]]
            else:
                href = link["uri"]
            annotations[page.number + 1, href].append(link)
    return annotations


def source_label(link, page):
    name = link.get("nameddest", "")
    if name.startswith("Hfootnote."):
        return "Read footnote " + name.split(".")[-1]
    excerpt = page.get_textbox(link["from"]).strip()
    if excerpt and all(char.isprintable() for char in excerpt):
        return "Source reference " + excerpt
    return "Source reference"


def wrap_inline(body, anchor, href, label):
    pattern = (r'<span id="' + re.escape(anchor) + r'" class="rh-inline-math" [^>]*>'
               r'(<svg.*?</svg><span class="rh-inline-transcript">.*?</span>)</span>')
    opening = f'<a id="{anchor}" class="rh-inline-math" href="{html.escape(href, quote=True)}" aria-label="{html.escape(label, quote=True)}">'
    return re.subn(pattern, lambda found: opening + found[1] + "</a>", body, count=1, flags=re.DOTALL)


def add_panel_link(body, anchor, href, label):
    pattern = rf'<(p|h2|figure)\b[^>]*\bid="{re.escape(anchor)}"[^>]*>.*?</\1>'
    link = f'<a class="rh-panel-reference" href="{html.escape(href, quote=True)}">{html.escape(label)}</a>'
    return re.subn(pattern, lambda found: found[0] + link, body, count=1, flags=re.DOTALL)


def match_marker(blocks, marker):
    matches = [(area, block, inline["anchor"])
               for block in blocks
               for inline in block.get("inlineUnresolved", [])
               if (area := (marker & fitz.Rect(inline["bbox"])).get_area()) > 0]
    matches.sort(key=lambda item: item[0], reverse=True)
    return matches


def main():
    bodies, destinations, counts, changed = load_bodies()
    pages = json.loads(COVERAGE.read_text(encoding="utf-8"))["pages"]
    restored = Counter()
    with fitz.open(PDF) as document:
        annotations = get_inventory(document, destinations)
        for (page_number, href), entries in annotations.items():
            deficit = len(entries) - counts[page_number, href]
            if deficit <= 0:
                continue
            page = document[page_number - 1]
            blocks = pages[page_number - 1]["blocks"]
            for link in entries:
                if not deficit:
                    break
                marker = link["from"]
                label = source_label(link, page)
                for _, block, anchor in match_marker(blocks, marker):
                    slug = block["chapter"]
                    patched, count = wrap_inline(bodies[slug], anchor, href, label)
                    if count:
                        restored["inline"] += 1
                        break
                else:
                    block = max(blocks, key=lambda item: (marker & fitz.Rect(item["bbox"])).get_area())
                    slug = block["chapter"]
                    patched, count = add_panel_link(bodies[slug], block["anchor"], href, label)
                    if not count:
                        continue
                    restored["panel references"] += 1
                bodies[slug] = patched
                changed.add(slug)
                deficit -= 1
            if deficit:
                raise ValueError(f"Could not restore {deficit} link(s) on page {page_number} to {href}")
    aliases = 0
    for slug, old_ids in LEGACY_ANCHORS.items():
        body = bodies[slug]
        for old, current in old_ids.items():
            if f' id="{old}"' in body:
                continue
            location = body.find(f'<span id="{current}"')
            if location < 0:
                location = body.find(f'<span class="rh-source-anchor" id="{current}"')
            if location < 0:
                raise ValueError(f"Missing Version 2 alias target {slug}#{current}")
            body = body[:location] + f'<span class="rh-source-anchor" id="{old}"></span>' + body[location:]
            aliases += 1
            changed.add(slug)
        bodies[slug] = body
    for slug in sorted(changed):
        (CONTENT / f"{slug}.html").write_text(bodies[slug], encoding="utf-8")
    print(f"Restored {restored.total()} PDF links and {aliases} legacy aliases "
          f"across {len(changed)} chapters ({dict(restored)}).")


if __name__ == "__main__":
    main()
