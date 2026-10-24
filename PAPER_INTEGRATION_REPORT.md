# Five-paper integration report

Prepared 24 October 2026. This report describes source changes and provenance. Final execution results and deployment limitations are recorded in `PAPER_INTEGRATION_VERIFICATION.md`; earlier reports remain historical records of their own runs.

## Baseline and reading editions

The implementation baseline is commit `b01907c160c0b19d3b847cbb3f81ff43e19782e8`. It includes the philosophical clarifications, dated A0 note, alignment quotation, repository security work and corrected Vercel CSP integration. Neither the older archive nor commit `b5a013ed9bc74090d7fbadcfc4f7fd5506c8ecca` replaced this newer source.

Five complete reading editions add 69 chapters and approximately 76,000 words, including mathematical notation and scholarly references. Each provides a substantial introductory hub, sequential reading path, chapter navigation, explicit section/equation anchors, DOI and original-PDF links, complete Markdown download and machine-readable manifest. The hubs introduce the full articles rather than replacing them.

| Work | Supplied edition | Hub | Chapters |
| --- | --- | --- | ---: |
| Whole-Field Constitution as Enacted Organization | 23 October 2026, DOI `10.5281/zenodo.23608069` | `/consciousness/whole-field` | 6 |
| Experienced Temporal Passage | 23 October 2026, DOI `10.5281/zenodo.23591626` | `/consciousness/temporal-passage` | 15 |
| Constituted Agency | 22 October 2026, DOI `10.5281/zenodo.23581587` | `/consciousness/constituted-agency` | 21 |
| Block Universe and Shadow Theory | Version 1.0, 23 October 2026, DOI `10.5281/zenodo.23604713` | `/consciousness/block-universe` | 14 |
| When AI Learns to Mislead | Version 1.1, 22 October 2026, DOI `10.5281/zenodo.23582387` | `/consciousness/ai-alignment/misleading-ai` | 13 |

Chapter routes append the MDX filename stem to the corresponding hub. `PAPER_COVERAGE.md` and its JSON companion contain the full destination and anchor inventory. Attachment suffixes such as `(4)` have not been treated as publication versions.

## Content and relationships

**Whole-field constitution** develops complete-enactment identity, current incorporation and unity within a qualifying unit. It includes linked realization witnesses, scent and melody examples, occurrence identity, common-prefix invariance, content-summary results, predictive identity and compatibility with full A2. The six chapters retain 11 main sections, both substantive appendices, seven numbered equations and proofs. The edition is featured near the consciousness foundations and linked to experiencing occurrences and the source-to-experience discussion.

**Temporal passage** distinguishes physical succession, actual interpretive uptake and optional later retrieval. Its reading path retains the melody construction, information bounds, finite implementation, calibration, anticipation, continuity, duration and pace models, empirical comparisons, rival accounts and three appendices. Sixteen numbered equations, all five propositions and their proofs, two figures, four tables and 38 references remain available on the web. Connections to whole-field constitution and the block-universe work explain their different roles.

**Constituted agency** provides a 21-chapter treatment of the 73-page source. It retains the authorship distinctions, physical-history arguments and compatibility results alongside acquired self-mechanisms, assessment and installation, the 64-history ensemble, costed and noisy comparisons, countermodels, relapse, forecast contracts, finite physical compilation and causal-order construction. All 18 main sections, two substantive appendices, numbered and unnumbered mathematics, proofs and references are included. Earlier agency and reflective-freedom articles remain available and are connected to the new edition.

**Block universe** retains the physics as well as the philosophy. Its 14 chapters develop source/history/readout distinctions, target-relative completion, selector economy, reciprocal-pair results, the spin-chain construction, finite-horizon deficit, joint-record frontier, side-resource counterexamples, coherent-completion bound, timing, calibration and intervention. Complete written proofs, three appendices, 25 numbered equations, four figures, tables and 54 references are included. Wider framework and physics links make the edition reachable outside consciousness.

**Misleading AI** retains the developmental argument, literature analysis, distinctions among error, misleading narration, strategic deception, misuse and unauthorized initiative, incident-specific qualifications and proposed testing programme. The 13 chapters include every source section and subsection, the seven-case comparison, all four numbered mathematical expressions with derivations and assumptions, the additional reward-tilt expressions and all 34 references. Existing reflective-alignment and continuity material remains available. The exact alignment quotation remains philosophical framing, without becoming a theorem or guarantee of benevolence. Incident reports retain the source's evidence limits and cutoff; this conversion does not independently establish those events.

The temporal paper's experiencing-contributor condition is retained. The block paper's universal-condition ancestry problem is also retained, including its temporal application to an independently qualifying adult. Editorial links explain the difference without inventing a replacement universal admission law. Published A0–A3 and the existing dated A0 clarification have not been rewritten. Complete history, determinism, reversibility, eternalism and fatalism remain distinct, as do functional success, experiential constitution, subject individuation and empirical validation.

## Source and supplementary provenance

The supplied PDFs control the conversion and are included byte for byte at `public/publications/consciousness/new-papers/<id>/paper.pdf`. Checksums cover these originals and the 480 baseline publication files. Existing publication editions and downloads have been preserved; new editorial treatment is stored separately.

The whole-field, temporal-passage and misleading-AI Zenodo records offered PDFs rather than corresponding LaTeX sources. Their articles were checked directly against the supplied documents. The temporal figures were recreated as accessible SVGs from the stated construction and values. Its `temporal-component-checks.py` is an explicitly identified independent arithmetic check written for this integration, not the unavailable original supplementary program.

For agency, matching TeX and a verification supplement were recovered from the available candidate v3.1 source package. The 73-page candidate PDF was compared with the controlling final PDF. The scientific body matches; differing title-page and administrative text was not imported as scientific content. The supplement is available as `constituted-agency/supplement.zip`. Thirteen finite verification scripts executed successfully, with actual results in `docs/paper-integration/constituted-agency-execution.json`. These are finite mathematical checks, not empirical or consciousness certification.

For block universe, the matching `Block_Universe_and_Shadow_Theory_Verification.zip` was retrieved read-only from Zenodo record `23604713`. The record's PDF was confirmed byte-identical to the supplied PDF. The original archive is preserved as `block-universe/verification.zip`. Its 16 numerical checks were executed, with their actual results and environment recorded under `docs/paper-integration/`. Four source figures were extracted from the PDF, with readable captions and alternatives.

The separately supplied `Reciprocal(3).lean` is preserved byte for byte as `block-universe/Reciprocal.lean`. It uses the classification-based 1+1 route and imported Stein framework. The matching verification archive also contains the direct 1+1 and 3+1 formal material. These are presented with their different dependencies. **Lean was not recompiled in this run.** Published formal audit logs remain historical evidence from their original executions. The complete written arguments are available; no claim is made that the standalone file verifies every newer result or establishes an actuality witness.

## Integration, preservation and build scope

Authoritative article source is in `content/paper-integrations/<id>/`. `src/config/paper-integrations.json` controls metadata, and `scripts/generate-paper-integrations.mjs` participates in the established content-map prebuild. Generated loaders, complete Markdown, manifests and discovery entries follow that mechanism. Homepage, Framework, consciousness, agency, alignment and research features connect the new works. Publication registries, related reading, search, sitemap, feeds, `llms.txt` and graph discovery are extended.

The shared reader preserves the observatory design and cyan/violet accents, with substantial long-form layouts, scrollable mathematics and tables, mobile chapter navigation and accessible figures. Source-level and rendered coverage checks inspect substantive chapter content rather than accepting a table of contents as conversion evidence. The 280 coverage rows connect source sections and finer mathematical items to actual anchors. Human source comparison and focused independent review supplement automation; the coverage ledger is not a machine proof of semantic equivalence.

Existing security-header installation and verification logic is preserved. `npm run build` still executes CSP postbuild. A production-build wrapper supplies a 4 GiB Node heap default while respecting explicit caller heap options, forwarding arguments and propagating failures. `experimental.cpus: 2` and `webpackMemoryOptimizations: true` constrain the expanded corpus's build memory use. These changes do not add script `unsafe-inline`, bypass hash generation or disable validation. The lockfile and runtime dependencies have not changed for this integration.

## Review and deployment status

Use `PAPER_INTEGRATION_FILE_CHANGES.json` to review changed paths. `PAPER_INTEGRATION_VERIFICATION.md` records the final clean-install, production-build, real adapter-build, CSP, HTTP, browser and package results, including checks that could not execute. The final ordinary build generated 683 static entries and installed policies for 661 HTML documents. The separate actual adapter run and served-response checks are documented in the current verification report.

No GitHub push, deployment, remote settings change, credential creation or Zenodo record modification was performed. Apply the package using `REPLACEMENT_INSTRUCTIONS.md`, preserving Git history, local configuration and newer personal work. After the user's deployment, actual public response headers, hydration, navigation and search still require production verification. Local results cannot establish how a future deployment is served.

The selected baseline tracks `.cache/.gitkeep` and contains no populated `.cache/zenodo.json`. That directory placeholder is preserved. Preserve any newer populated metadata cache in your own checkout. The new works use authoritative local metadata; the complete site was built and tested through its supported cache-only fallback without external metadata requests.
