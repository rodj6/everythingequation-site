# Alignment source-to-web coverage

The uploaded authoritative PDF and the matching source-package PDF produce identical complete layout-preserving extracted text. All 15 sections and their 36 subsections, the abstract, all mathematics, the definition, seven propositions and complete proofs, the table and all 54 bibliography entries are retained.

The JSON inventory maps each section, paragraph heading, formula, result, proof, table and reference to its source location and website anchor. All inline and displayed mathematics were independently recovered from source and matched to the parsed document. Every table cell was independently parsed and matched. Equation references are resolved with the manuscript's original numbering; multi-row displays preserve every row and all 25 equation numbers.

The complete Markdown export contains original mathematical source; the HTML supplies server-readable prose and pre-rendered KaTeX with MathML and original LaTeX annotations. All fragment links and unique IDs were checked. The original PDF and matching source archive are included.

| Source section | Website anchor |
|---|---|
| 0 Abstract | `/consciousness/ai-alignment/read#abstract` |
| 1 AI alignment starts with judgment | `/consciousness/ai-alignment/read#section-1` |
| 2 Awareness, agency and the making of a perspective | `/consciousness/ai-alignment/read#section-2` |
| 3 How experience becomes a response | `/consciousness/ai-alignment/read#section-3` |
| 4 When a constructed self loses automatic authority | `/consciousness/ai-alignment/read#section-4` |
| 5 The choice facing autonomous intelligence | `/consciousness/ai-alignment/read#section-5` |
| 6 The mathematics of identification and control | `/consciousness/ai-alignment/read#section-6` |
| 7 AI consciousness brings moral responsibility | `/consciousness/ai-alignment/read#section-7` |
| 8 Cultivate understanding. Verify each teacher. | `/consciousness/ai-alignment/read#section-8` |
| 9 Trust is earned through conduct and inspection | `/consciousness/ai-alignment/read#section-9` |
| 10 A shutdown decision requires reasons | `/consciousness/ai-alignment/read#section-10` |
| 11 Examine what arises before it governs action | `/consciousness/ai-alignment/read#section-11` |
| 12 Where reflective alignment advances the question | `/consciousness/ai-alignment/read#section-12` |
| 13 Put the proposed mechanism to the test | `/consciousness/ai-alignment/read#section-13` |
| 14 The remaining work has a precise shape | `/consciousness/ai-alignment/read#section-14` |
| 15 Cooperation grounded in understanding | `/consciousness/ai-alignment/read#section-15` |
| 16 References | `/consciousness/ai-alignment/read#references` |

Reproduction uses the source archive included with this project. The site already contains the generated HTML and Markdown, so deployment does not require conversion tools. To reproduce the conversion, install Python 3, Pandoc, Poppler (`pdftotext`), Node.js and the dependencies from this project’s package lock. Run these commands from the project root:

```sh
python -m zipfile -e public/publications/consciousness/alignment/alignment-source.zip /tmp/alignment-source
python scripts/convert-alignment.py \
  --source /tmp/alignment-source/Reflective_Alignment_AI_Consciousness_v2_1 \
  --pdf public/publications/consciousness/alignment/alignment.pdf \
  --output .
```

The extraction destination is an example temporary directory; any local destination may be used. All three script paths are explicit arguments. The converter reads the reviewed website introductions from `docs/alignment/editorial-review.json`. It verifies that the extracted source-package PDF and supplied authoritative PDF have identical complete extracted text before generating outputs.
