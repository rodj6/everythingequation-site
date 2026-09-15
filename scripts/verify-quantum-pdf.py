"""Read-only cross-check of generated result/equation numbering against supplied PDFs.

Requires PyMuPDF. Run after convert-quantum.mjs; writes a QA report only.
"""
import json
import re
from pathlib import Path
import pymupdf

ROOT = Path(__file__).resolve().parents[1]
AUDIT = json.loads((ROOT / "content/quantum/audit.json").read_text(encoding="utf-8"))
REPORT = {"method": "Every labelled equation and formal result is checked against text extracted from the supplied PDF. Page numbers are physical PDF pages, including frontmatter.", "publications": []}
KINDS = {"theorem", "lemma", "proposition", "corollary", "definition", "assumption", "example", "counterexample", "remark"}

for publication in AUDIT["documents"]:
    key = publication["id"]
    pdf = pymupdf.open(ROOT / f"public/publications/quantum-measurement/{key}.pdf")
    pages = [re.sub(r"\s+", " ", page.get_text()) for page in pdf]
    equation_checks = []
    result_checks = []
    for label, target in publication["labels"].items():
        kind, number = target["kind"], target["number"]
        if kind == "equation":
            needle = f"({number})"
            hits = [i + 1 for i, page in enumerate(pages) if needle in page]
            equation_checks.append({"label": label, "number": number, "pdfPages": hits})
        elif kind in KINDS:
            title = "Constitutive assumption" if kind == "assumption" and key == "massive-configuration" else kind.capitalize()
            needle = f"{title} {number}"
            hits = [i + 1 for i, page in enumerate(pages) if needle in page]
            result_checks.append({"label": label, "heading": needle, "pdfPages": hits})
    failures = [item for item in equation_checks + result_checks if not item["pdfPages"]]
    REPORT["publications"].append({"id": key, "pdfPages": len(pages), "labelledEquationsChecked": len(equation_checks), "labelledResultsChecked": len(result_checks), "equations": equation_checks, "results": result_checks, "failures": failures, "status": "FAIL" if failures else "PASS"})

destination = ROOT / "content/quantum/pdf-numbering-audit.json"
destination.write_text(json.dumps(REPORT, indent=2) + "\n", encoding="utf-8")
for publication in REPORT["publications"]:
    print(f"{publication['id']}: {publication['labelledEquationsChecked']} equation labels, {publication['labelledResultsChecked']} result labels — {publication['status']}")
if any(publication["status"] != "PASS" for publication in REPORT["publications"]):
    raise SystemExit(1)
