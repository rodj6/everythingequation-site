"""Build the reading divisions from the controlling manuscript's PDF outline."""
import argparse
import json
import re
import unicodedata
from pathlib import Path

import fitz

PDF_PAGES = 1061
LONG_DIVISION = 32
RESULT = re.compile(r"^(?:Lemma|Theorem|Proposition|Definition|Corollary) (\d+(?:\.\d+)+)\b")


def slugify(text):
    ascii_text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", ascii_text.lower()).strip("-")


def heading_lines(pdf, page_number):
    for block in pdf[page_number - 1].get_text("dict", flags=fitz.TEXTFLAGS_TEXT)["blocks"]:
        for line in block.get("lines", []):
            text = "".join(span["text"] for span in line["spans"]).strip()
            yield line["bbox"][1], text


def division(title, number, level, page, y, anchor, slug=None):
    return {
        "slug": slug or slugify(title),
        "title": title,
        "number": number,
        "level": level,
        "firstPage": page,
        "startY": round(y, 3),
        "outlineAnchor": anchor,
    }


def build_outline(pdf, previous=()):
    old_by_anchor = {item["outlineAnchor"]: item for item in previous}
    divisions = [division("Title, abstract and contents", "", 0, 1, 0, "front-matter")]
    for level, title, page, dest in pdf.get_toc(simple=False):
        if not 1 <= page <= len(pdf):
            raise ValueError(f"Invalid manuscript destination: {title}")
        anchor = dest["nameddest"]
        prefix, number = anchor.split(".", 1)
        if prefix not in {"section", "subsection", "subsubsection"}:
            raise ValueError(f"Unexpected bookmark {anchor}")
        # Xdvipdfmx named outline destinations are expressed in upward PDF coordinates.
        y = pdf[page - 1].rect.height - dest["to"].y
        title = re.sub(r"(?<= )=1 (?=[A-Z])", "", title)
        previous_item = old_by_anchor.get(anchor)
        divisions.append(division(title, number, level, page, y, anchor,
                                  previous_item["slug"] if previous_item else None))

    references = next(
        (page, y)
        for page in range(max(item["firstPage"] for item in divisions), len(pdf) + 1)
        for y, title in heading_lines(pdf, page)
        if title == "References"
    )
    divisions.append(division("References", "", 0, references[0], references[1] - 1, "references"))

    result = []
    for index, item in enumerate(divisions):
        next_page = divisions[index + 1]["firstPage"] if index + 1 < len(divisions) else len(pdf)
        result.append(item)
        continuations = []
        retained = {old["outlineAnchor"].removeprefix("continuation-"): old for old in previous
                    if old["number"] == item["number"] and old["outlineAnchor"].startswith("continuation-")}
        for p in range(item["firstPage"], next_page + 1) if retained else ():
            for y, line in heading_lines(pdf, p):
                match = RESULT.match(line)
                if not match or match[1] not in retained or (p == item["firstPage"] and y <= item["startY"]):
                    continue
                number = match[1]
                if any(part["outlineAnchor"] == "continuation-" + number for part in continuations):
                    continue
                continuations.append(division(f'{item["title"]} from result {number}', item["number"], item["level"],
                                              p, y - 1, f"continuation-{number}", retained[number]["slug"]))
        # Preserve existing split URLs. Divide any new long stretches at a result boundary.
        for following in [*continuations, None]:
            first_page = result[-1]["firstPage"]
            stop = following["firstPage"] if following else next_page
            result.extend(split_interval(pdf, item, first_page, stop))
            if following:
                result.append(following)

    if len({item["slug"] for item in result}) != len(result):
        raise ValueError("Duplicate reading slug")

    for index, item in enumerate(result):
        following = result[index + 1] if index + 1 < len(result) else None
        last_page = following["firstPage"] if following else len(pdf)
        if following and following["startY"] <= 72.01 and last_page > item["firstPage"]:
            last_page -= 1
        item["lastPage"] = last_page
        section = f'Section {item["number"]}. ' if item["number"] else ""
        pages = f'Page {last_page}' if item["firstPage"] == last_page else f'Pages {item["firstPage"]} to {last_page}'
        item["description"] = (
            f'{section}{item["title"]}. {pages} of Jeremy Rodgers’s Riemann Hypothesis reconstruction from Lean, Version 2.'
        )
    return result


def split_interval(pdf, item, first_page, next_page):
    result = []
    while next_page - first_page > LONG_DIVISION:
        target = first_page + 21
        split = next(
            ((p, y, match[1])
             for p in range(target, min(target + 9, next_page))
             for y, line in heading_lines(pdf, p)
             if y < 675 and (match := RESULT.match(line))),
            None,
        )
        if not split:
            raise ValueError(f"No result boundary near page {target}")
        p, y, number = split
        result.append(division(
            f'{item["title"]} from result {number}', item["number"], item["level"],
            p, y - 1, f"continuation-{number}", f'{item["slug"]}-from-{number.replace(".", "-")}'
        ))
        first_page = p

    return result


def legacy_redirects(previous, current):
    names = {item["slug"] for item in current}
    main = {item["number"]: item["slug"] for item in current
            if not item["outlineAnchor"].startswith("continuation-")}
    return {item["slug"]: main[item["number"]] for item in previous if item["slug"] not in names}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--out", type=Path, default=Path("content/riemann-hypothesis/chapters.json"))
    parser.add_argument("--previous", type=Path, default=Path("docs/riemann-hypothesis/version-1-chapters.json"))
    args = parser.parse_args()
    previous = json.loads(args.previous.read_text(encoding="utf-8")) if args.previous.exists() else []
    with fitz.open(args.pdf) as pdf:
        if len(pdf) != PDF_PAGES:
            raise ValueError(f"Expected {PDF_PAGES} pages")
        result = build_outline(pdf, previous)
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    redirects = legacy_redirects(previous, result)
    args.out.with_name("legacy-chapters.json").write_text(json.dumps(redirects, indent=2) + "\n", encoding="utf-8")
    print(f"{len(result)} manuscript divisions; {len(redirects)} retired slugs")
