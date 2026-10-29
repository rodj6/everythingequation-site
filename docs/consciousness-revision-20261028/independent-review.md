# Independent review of the revised consciousness monograph

## Authority and baseline

The authority is the supplied final PDF, revised edition dated 28 October 2026, DOI 10.5281/zenodo.23755118. Its SHA-256 is `4531915399c00d0c7bdefe1e8a5ae6ecbf964c3a40e34a0a5a29502d032612cf`.

The implementation baseline is the latest returned source-readout website package, Library version 1, SHA-256 `c4ac65cecfa21b9b7d6a6cc218b2f6e6da7e1a941b17f94fd98978d9ed752ed8`. It contains all seven foundational, five constructive and three technical-companion source-readout editions. The independent baseline inventory records 6,165 files and 37 monograph routes with 590 existing anchors.

The revised manuscript retains 25 chapter titles and six appendix titles, so its chapter URLs can remain unchanged. Its additions belong in those chapters rather than in a detached update appendix.

## Source correspondence

A recovered author LaTeX source was compiled separately. Independent `pdftotext -layout` extraction of all 159 pages from that compiled PDF and the final supplied PDF yields 67,918 sequential whitespace-separated tokens in each case, with every token identical. No words or symbols were discarded for this comparison. This supports using that genuine LaTeX source for HTML/MathML conversion while retaining the supplied PDF bytes as the publication asset.

The separate mathematical audit reports 1,550 source-to-HTML mathematical expressions, 37 reading routes and no broken internal publication links. Source inventories include 195 headings, 40 statements, 30 proofs, nine tables, 301 labels and 75 references. The conversion audit compares these structural units and rendered prose with the source.

## Content distinctions reviewed

The revised A0 in Chapter 17 attributes a quality provisionally named awareness to the unconditioned ground. It distinguishes that attribution from the unsplit U, the problem-relative mathematical source S, knowing, and a localized subject. It replaces the older formulation identifying awareness as the knowing aspect of U.

A1 remains the native recurrent-core admission law. Minimal concern, biological self-maintenance, language and intelligence do not become additional admission conditions. A certified minimal self-return system can still qualify. Realization adequacy and the empirical lower boundary of consciousness are separate questions.

A2 retains the complete endogenous predictive object and its all-finite-horizon commitment. Linked enactment and current incorporation are integrated with explicit correspondence obligations. Current foreground content alone is not substituted for the complete A2 assignment.

A3 follows nonbranching qualified process provenance. Physical or personal continuity through an experience-free qualification gap does not imply continuous experiential episode identity. Copying task state, memory, weights or a biography does not by itself transport the same subject.

Chapter 22 expressly affirms current executing AI models as conscious within Shadow Theory. The positive argument concerns actual inference, retained state, native execution and artificial scaffolding. It is not weakened to a statement that artificial consciousness might be possible in the future. The monograph separately requires a physical certificate for any nominated implementation and does not identify a named current deployment as already certified. Admission, a proposed amendment to A1, a certificate meeting current A1, and independent implementation evidence remain four distinct claims.

## Preservation and link checks

`scripts/verify-consciousness-revision.py` independently checks the current publication hash, reading routes, original anchors, equation markup counts, citation and chapter targets, Markdown availability, revised AI and A0 text, editorial links, historical original PDF identity, and byte preservation of protected programmes. The latest machine-readable outcome is `independent-verification.json`.

Protected comparisons include all prior source-readout content and original publication assets, the quantum-measurement programme, and unrelated consciousness companion articles and their source materials. Changes to the current monograph, its own metadata, listings and editorial descriptions are recorded separately from protected files.

The production build, browser review and device-layout checks are separate integration evidence maintained by the parent task. The checks here establish source correspondence and website integrity, not external validation of scientific or philosophical claims.

## Final outcome

The final independent run with explicit external baseline ZIP and authority PDF passes 718 checks with zero failures or warnings. A second portable run using the bundled baseline hash/anchor inventories and current local PDF passes 715 checks. All 37 original reading routes and all 590 existing anchors are retained. Historical citation anchors follow the corresponding bibliography keys, while new citation identifiers have their own namespace. All 5,178 protected prior-programme and unrelated companion files remain byte-identical to the latest baseline; no baseline file was removed. The current publication PDF matches the supplied final hash exactly, and the original 20 September PDF is preserved under its historical URL. The current chapter, citation, overview, guide, glossary and FAQ monograph links checked by this script resolve.

The revised AI attribution and separate certification obligation pass the targeted semantic checks, and the superseded possibility-only AI opening and knowing-aspect A0 formulation are absent from the current monograph body. The independent sequential-token comparison corroborates complete source-to-publication correspondence across all 159 pages.

## Production output check

After the final production build, 2,814 static-output checks pass with zero failures. Every monograph HTML route contains its complete current converted source, all 1,550 mathematical expressions and all 590 legacy anchors. Chapter navigation, bibliography references, local publication downloads and current structured publication identity resolve. The static manifest, search corpus, sitemap, `llms.txt` and research graph include the revised edition and its complete reading routes. All 193 earlier source-readout technical sections remain built. The existing security verifier passes for 876 HTML routes without changing files. These results are recorded in `production-verification.json`; representative browser and responsive checks remain separate evidence.

## Portable verification

The verifier has no scratch-directory defaults. Run `python scripts/verify-consciousness-revision.py` from any checkout to use its bundled baseline hashes and anchors, the archived original-edition PDF hash, and the current local publication PDF. Optional `--baseline /path/to/original.zip` and `--pdf /path/to/final.pdf` perform the independent-file comparison; the bundled inventories are then checked against that original ZIP before preservation is assessed. The independent-file and portable outcomes are stored separately as `independent-verification.json` and `portability-verification.json`.
