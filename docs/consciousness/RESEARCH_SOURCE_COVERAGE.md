# Consciousness Papers 2–4: source-to-web coverage

The complete technical readers preserve the supplied DOI-updated manuscripts. The original TeX and PDF downloads are byte-identical; article introductions and chapter navigation are additional web presentation. This map concerns transcription completeness, not a new mathematical verification or rerun of the research.

## Verification

All 49 technical pages pass ordered-prose preservation after the explicit publication-metadata adaptations, structural counts, KaTeX rendering, compiled-label numbering and internal-link checks. The bibliography numeric order follows the compiled TeX output. Eight original TikZ figures are compiled as vector SVG with accessible descriptions.

| Paper | Reader pages | Statements | Proofs | Tables | Figures | References | Source labels |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| paper-2 | 20 | 39 | 33 | 2 | 4 | 25 | 122 |
| paper-3 | 18 | 0 | 0 | 25 | 4 | 22 | 98 |
| paper-4 | 11 | 7 | 7 | 3 | 0 | 20 | 21 |

## Adaptations and availability

- The printed table of contents is replaced by web navigation. Repeated longtable continuation headings are removed; all data rows are preserved.
- Source title, author, date, DOI and website metadata are included in each overview.
- Paper 4’s pending supporting-deposit token is replaced by a statement of actual availability in the web text. The original manuscript source and PDF retain their original release-candidate metadata.
- Paper 3’s historical DOI/provenance paragraph is preceded by a note explaining that publication DOIs have since been added.
- Research supplements described by the papers were not supplied for this update; their descriptions remain, without claims that those archives are contained in the website ZIP.

## Reproduction

1. Run `node scripts/convert-consciousness-research.mjs` from the site root. It uses the immutable paper assets, preserved compiled bibliography order, and numbering AUX files.
2. Run `node scripts/verify-consciousness-research.mjs`.
3. To regenerate figures, use `scripts/render-consciousness-research-figures.py --paper2 <source.tex> --paper3 <source.tex>` with the original TeX dependencies and PyMuPDF.

The JSON conversion audit contains every display equation, formal statement, proof, table and figure with its original LaTeX, source location and target anchor, plus all source labels. `research-source-map.csv` provides the same element-to-page map in a compact form.

## Chapter map

| Paper | Source section | Web title | Original TeX lines | Web route |
| --- | --- | --- | --- | --- |
| paper-2 | frontmatter | Overview and publication identity | 363–374 | /consciousness/research/paper-2/overview-and-publication-identity |
| paper-2 | Section 1 | Introduction | 375–401 | /consciousness/research/paper-2/introduction |
| paper-2 | Section 2 | The inherited realization and finite operational setting | 402–485 | /consciousness/research/paper-2/the-inherited-realization-and-finite-operational-setting |
| paper-2 | Section 3 | Minimal-target masking | 486–548 | /consciousness/research/paper-2/minimal-target-masking |
| paper-2 | Section 4 | Robust reconstruction of joint experiments | 549–692 | /consciousness/research/paper-2/robust-reconstruction-of-joint-experiments |
| paper-2 | Section 5 | Native execution and resource-relative severability | 693–805 | /consciousness/research/paper-2/native-execution-and-resource-relative-severability |
| paper-2 | Section 6 | Relational encapsulation through a causal interface | 806–909 | /consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface |
| paper-2 | Section 7 | Approximation and preservation of comparison meaning | 910–1007 | /consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning |
| paper-2 | Section 8 | Operational identification and its ceiling | 1008–1082 | /consciousness/research/paper-2/operational-identification-and-its-ceiling |
| paper-2 | Section 9 | What a phenomenal bridge adds | 1083–1149 | /consciousness/research/paper-2/what-a-phenomenal-bridge-adds |
| paper-2 | Section 10 | Consequences for the SPC-2 boundary | 1150–1201 | /consciousness/research/paper-2/consequences-for-the-spc-2-boundary |
| paper-2 | Section 11 | Limitations and verification status | 1202–1218 | /consciousness/research/paper-2/limitations-and-verification-status |
| paper-2 | Section 12 | Conclusion | 1219–1232 | /consciousness/research/paper-2/conclusion |
| paper-2 | Appendix A | Exact masking and boundary calculations | 1233–1312 | /consciousness/research/paper-2/appendix-a-exact-masking-and-boundary-calculations |
| paper-2 | Appendix B | Statistical comparison and finite resource optima | 1313–1353 | /consciousness/research/paper-2/appendix-b-statistical-comparison-and-finite-resource-optima |
| paper-2 | Appendix C | Strong quotient and composition proofs | 1354–1410 | /consciousness/research/paper-2/appendix-c-strong-quotient-and-composition-proofs |
| paper-2 | Appendix D | Resource, overlap and approximation details | 1411–1463 | /consciousness/research/paper-2/appendix-d-resource-overlap-and-approximation-details |
| paper-2 | Appendix E | Auxiliary relational-state and realization results | 1464–1536 | /consciousness/research/paper-2/appendix-e-auxiliary-relational-state-and-realization-results |
| paper-2 | Appendix F | Proof status, provenance and reproducibility | 1537–1556 | /consciousness/research/paper-2/appendix-f-proof-status-provenance-and-reproducibility |
| paper-2 | bibliography | References | 1557–1559 | /consciousness/research/paper-2/references |
| paper-3 | frontmatter | Overview and publication identity | 203–215 | /consciousness/research/paper-3/overview-and-publication-identity |
| paper-3 | Section 1 | Question and contributions | 216–259 | /consciousness/research/paper-3/question-and-contributions |
| paper-3 | Section 2 | Operational contract and measures | 260–331 | /consciousness/research/paper-3/operational-contract-and-measures |
| paper-3 | Section 3 | Study design and preserved evidence | 332–419 | /consciousness/research/paper-3/study-design-and-preserved-evidence |
| paper-3 | Section 4 | Final matched state-learning comparison | 420–582 | /consciousness/research/paper-3/final-matched-state-learning-comparison |
| paper-3 | Section 5 | Capacity, produced candidates and selection | 583–700 | /consciousness/research/paper-3/capacity-produced-candidates-and-selection |
| paper-3 | Section 6 | Post-hoc optimization-budget sensitivity | 701–794 | /consciousness/research/paper-3/post-hoc-optimization-budget-sensitivity |
| paper-3 | Section 7 | Why the earlier repair stages did not close discovery | 795–868 | /consciousness/research/paper-3/why-the-earlier-repair-stages-did-not-close-discovery |
| paper-3 | Section 8 | Adversarial contexts, composition and uncertainty | 869–925 | /consciousness/research/paper-3/adversarial-contexts-composition-and-uncertainty |
| paper-3 | Section 9 | Related work, reproducibility and external validity | 926–971 | /consciousness/research/paper-3/related-work-reproducibility-and-external-validity |
| paper-3 | Section 10 | Conclusion | 972–986 | /consciousness/research/paper-3/conclusion |
| paper-3 | Appendix A | Implementation details and the exact role of each learner | 987–1097 | /consciousness/research/paper-3/appendix-a-implementation-details-and-the-exact-role-of-each-learner |
| paper-3 | Appendix B | Stage-specific numerical results | 1098–1286 | /consciousness/research/paper-3/appendix-b-stage-specific-numerical-results |
| paper-3 | Appendix C | Analytical controls on interpretation | 1287–1325 | /consciousness/research/paper-3/appendix-c-analytical-controls-on-interpretation |
| paper-3 | Appendix D | Complexity and recorded computation | 1326–1391 | /consciousness/research/paper-3/appendix-d-complexity-and-recorded-computation |
| paper-3 | Appendix E | Chronology, artifact provenance and reproduction | 1392–1454 | /consciousness/research/paper-3/appendix-e-chronology-artifact-provenance-and-reproduction |
| paper-3 | Appendix F | Retrospective fitting protocol and diagnostics | 1455–1516 | /consciousness/research/paper-3/appendix-f-retrospective-fitting-protocol-and-diagnostics |
| paper-3 | bibliography | References | 1517–1519 | /consciousness/research/paper-3/references |
| paper-4 | frontmatter | Overview and publication identity | 25–33 | /consciousness/research/paper-4/overview-and-publication-identity |
| paper-4 | Section 1 | Question, scope, and relation to previous work | 34–48 | /consciousness/research/paper-4/question-scope-and-relation-to-previous-work |
| paper-4 | Section 2 | Inherited benchmark and conditional assignment | 49–69 | /consciousness/research/paper-4/inherited-benchmark-and-conditional-assignment |
| paper-4 | Section 3 | Identification from an unlabeled response family | 70–144 | /consciousness/research/paper-4/identification-from-an-unlabeled-response-family |
| paper-4 | Section 4 | A constructive diagnostic for the frozen implementations | 145–205 | /consciousness/research/paper-4/a-constructive-diagnostic-for-the-frozen-implementations |
| paper-4 | Section 5 | Which stochastic continuations remain common? | 206–274 | /consciousness/research/paper-4/which-stochastic-continuations-remain-common |
| paper-4 | Section 6 | Executed official intrinsic-grain comparison | 275–311 | /consciousness/research/paper-4/executed-official-intrinsic-grain-comparison |
| paper-4 | Section 7 | Novelty, limitations, and verification status | 312–350 | /consciousness/research/paper-4/novelty-limitations-and-verification-status |
| paper-4 | Section 8 | Conclusion | 351–359 | /consciousness/research/paper-4/conclusion |
| paper-4 | backmatter | Supporting material and release status | 360–364 | /consciousness/research/paper-4/supporting-material-and-release-status |
| paper-4 | bibliography | References | 365–391 | /consciousness/research/paper-4/references |

## Source hashes

### paper-2

- TeX: `a88acd6afee7822a2f2fc3475a582bef2eb3e3827c9573ac22be137e8d49f782`
- PDF: `4530066a89a03f12320161aad11af698e47080aef8178aaeacd4a71e6a37acba`

### paper-3

- TeX: `5e59f58c2158d56879ac365a0788b9f8429f8a9a57a497b2e70a036079e02eb9`
- PDF: `7e55d843c3fe43f45c45a5eb06443c1ec6e1d31d3debb9b505db34673b9cb09f`

### paper-4

- TeX: `8109b92d89b428bb371a25e13b917e0391f0f5e7e1937fc83554e7529b97e6a2`
- PDF: `765e157c68cb73b95a2e90d2a5b9788cc8dad7bcb2f323a67fdb23e40b97612b`
