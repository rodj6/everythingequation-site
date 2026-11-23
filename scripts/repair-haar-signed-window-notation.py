#!/usr/bin/env python3
"""Rejoin the verified PDF's detached radical to the statement of Theorem 22.W1.

Run after regenerating HaarCritical from the exact supplied PDF. The position
and old fragment checks make this repair specific to the p447 source statement.
"""
from hashlib import sha256
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content/reading-editions/haar-critical/22-verification-interface-and-reproducibility-q9.html"
DOCS = ROOT / "docs/reading-editions/haar-critical"
PUBLIC = ROOT / "public/publications/haar-critical"
HASH = "e4955088bd3bb84a7e0aac702120e640a5837ba00f86ef3619d0f6dab82245af"
GLYPH = "p-0447-b-07"
PROOF = "p-0447-b-08"
MINUS = f"{PROOF}-l-1-m-2"
QUOTIENT = f"{PROOF}-l-1-m-3"
MARKER = "<!-- PDF radical appears with the checked inline expression below. -->"
TEX = r"\sqrt{1-1/N}"


def sha(value):
    return sha256(value.encode()).hexdigest()


def save_json(path, content):
    path.write_text(json.dumps(content, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf8")


def main():
    corpus = CONTENT.read_text(encoding="utf8")
    coverage_file = DOCS / "coverage.json"
    checkpoint_file = DOCS / "conversion-checkpoint.json"
    coverage = json.loads(coverage_file.read_text(encoding="utf8"))
    stamp = json.loads(checkpoint_file.read_text(encoding="utf8"))
    if coverage["sourceSha256"] != HASH or stamp["sourceSha256"] != HASH:
        raise ValueError("The proof repair requires the exact supplied HaarCritical edition.")
    blocks = {item["anchor"]: item for item in coverage["pages"][446]["blocks"]}
    glyph, proof = blocks[GLYPH], blocks[PROOF]
    if glyph["type"] == "inline-source":
        assert 'data-rh-checked-inline="radical"' in corpus
        print("Already verified the signed-window radical.")
        return

    new_math = (
        f' = <span class="rh-inline-math" id="{MINUS}" tabindex="0" data-rh-checked-inline="radical">'
        '<math aria-label="square root of one minus one over N"><semantics><msqrt><mrow>'
        '<mn>1</mn><mo>−</mo><mn>1</mn><mo>/</mo><mi>N</mi></mrow></msqrt>'
        f'<annotation encoding="application/x-tex">{TEX}</annotation></semantics></math>'
        f'<span id="{QUOTIENT}"></span><span class="rh-inline-transcript"><code>{TEX}</code></span></span>'
    )
    statement = re.compile(
        rf'<p class="rh-prose" id="{PROOF}" data-source-page="447">.*?</p>'
    )
    original = statement.search(corpus)
    if not original or "Theorem 22.W1" not in original[0]:
        raise ValueError("The source theorem statement is absent.")
    radicand = re.compile(
        rf' = 1 <span class="rh-inline-math" id="{MINUS}"[^>]*>.*?</span></span>'
        rf' 1<span class="rh-inline-math" id="{QUOTIENT}"[^>]*>.*?</span></span>'
    )
    new_statement, changed = radicand.subn(lambda _: new_math, original[0])
    if changed != 1:
        raise ValueError("The two detached radicand fragments did not match.")
    corpus = corpus[:original.start()] + new_statement + corpus[original.end():]
    stray = re.compile(rf'<figure class="rh-formula" id="{GLYPH}" data-source-page="447">.*?</figure>')
    old_glyph = stray.search(corpus)
    token = (re.search(rf'<pre id="{GLYPH}-notation">(p|√)</pre>', old_glyph[0]) if old_glyph else None)
    if not token:
        raise ValueError("The separated radical glyph did not match.")
    corpus = corpus[:old_glyph.start()] + (
        f'<span class="rh-source-anchor" id="{GLYPH}" data-source-page="447" aria-hidden="true"></span>'
    ) + corpus[old_glyph.end():]

    markdown_file = PUBLIC / "complete.md"
    markdown = markdown_file.read_text(encoding="utf8")
    prefix = f"```text\n{token[1]}\n```\n\n"
    theorem = "Theorem 22.W1 (Verified signed-window disk)."
    at = markdown.index(prefix + theorem)
    start = at + len(prefix)
    end = markdown.index("\n\n", start)
    previous = markdown[start:end]
    if proof["transcriptSha256"] != sha(previous) or glyph["transcriptSha256"] != sha(prefix.rstrip()):
        raise ValueError("The source Markdown and ledger differ before repair.")
    updated = previous.replace("z = 1 − 1/N", f"z = ${TEX}$", 1)
    if updated == previous:
        raise ValueError("The selectable theorem statement lacked the expected candidate.")
    markdown = markdown[:at] + MARKER + "\n\n" + updated + markdown[end:]

    glyph.update(type="inline-source", transcription="checked-inline-source",
                 transcriptSha256=sha(MARKER), combinedWith=MINUS)
    glyph.pop("notationSha256", None)
    glyph.pop("tags", None)
    proof["inlineUnresolved"] = [entry for entry in proof["inlineUnresolved"]
                                 if entry["anchor"] not in {MINUS, QUOTIENT}]
    proof["checkedInline"] = [{"anchor": MINUS, "latex": TEX, "sourceGlyphAnchor": GLYPH}]
    proof["transcriptSha256"] = sha(updated)
    for summary in (coverage, stamp):
        summary["counts"]["unverifiedMathBlocks"] -= 1
        summary["counts"]["unverifiedInlineRuns"] -= 2
        summary["counts"]["checkedInlineRuns"] = 1

    CONTENT.write_text(corpus, encoding="utf8")
    markdown_file.write_text(markdown, encoding="utf8")
    save_json(coverage_file, coverage)
    save_json(checkpoint_file, stamp)
    print("Verified the signed-window radical in HTML and Markdown, with its source ledger.")
    

if __name__ == "__main__":
    main()
