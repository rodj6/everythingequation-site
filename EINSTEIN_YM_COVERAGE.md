# Einstein and Yang–Mills source-to-web coverage

Source-to-web structural coverage. Physical PDF pages are one-based. Paper text/notation are retained with web introductions. Source-derived inventories and rendered presence do not independently prove the mathematics. The Einstein source PDF matches the supplied edition; Yang–Mills vector formula graphics preserve the published geometry, with linear PDF text alternatives that are not semantic LaTeX/MathML.

This is a review ledger outside public article content. The [machine-readable companion](EINSTEIN_YM_COVERAGE.json) contains each numbered/source obligation and its destination, and links the finer source-block and vector-formula inventories. Actual build and served checks are recorded separately.

| Edition | PDF pages | Reading chapters | Mapped section/formal/equation/table obligations | Source blocks | Vector formulas |
| --- | ---: | ---: | ---: | ---: | ---: |
| [einstein-1916](/source-readout/einstein-1916) | 48 | 25 | 333 | MDX | KaTeX |
| [yang-mills-reconstruction](/source-readout/yang-mills-reconstruction) | 530 | 91 | 1206 | 7394 | 13622 |
| [yang-mills-companion](/source-readout/yang-mills-companion) | 458 | 72 | 1010 | 5944 | 11697 |

Each machine-readable source obligation carries the following receipt-derived verification status. A successful source check is separate from a successful production or served-page check.

| Verification | Status | Receipt |
| --- | --- | --- |
| source | passed | [source-verification.json](docs/einstein-ym/source-verification.json) |
| ordinaryProduction | passed | [next-build-verification.json](docs/einstein-ym/next-build-verification.json) |
| adapterProduction | passed | [adapter-build-verification.json](docs/einstein-ym/adapter-build-verification.json) |
| servedHttp | passed | [http-verification.json](docs/einstein-ym/http-verification.json) |

## Coverage and limitations

- Einstein: the matching source was converted with 211 original numbered equations, 15 formal statements and their 15 proofs, four tables, all substantive appendices, and 12 references. Each has an anchored record with the physical page or section page range.
- Yang–Mills flagship: independent PDF inventory records 352 headings, 77 numbered formal items, 750 printed equation tags, nine table-caption matches and 18 independently delimited table regions. All physical body pages 4–530 map into the web reading path.
- Yang–Mills companion: independent PDF inventory records 277 headings, 730 printed equation tags and three independently delimited table regions. All physical body pages 3–458 map into the web reading path. The mathematical exposition does not use numbered theorem environments; its mathematical arguments remain in the source-block ledger.
- Both Yang–Mills works also have a record for every substantive PDF text block, including unnumbered formulas, proofs, references and appendices. Each row records its physical page, source bounding box and destination anchor. Formula images retain their original outlines and carry the extracted alternative text. Table images preserve the complete source geometry; accessible HTML tables record the text lines by column, rather than reconstructing merged multi-line logical rows.
- Administrative title/contents/running headers and page numerals are adapted or excluded as documented in each contributor ledger. Substantive front-matter abstracts and authorship information are retained.
- A block/asset inventory proves structural inclusion, not a new formal proof or a claim of semantic equivalence of a linear mathematical transcript. Rendered equation appearance and representative pages were reviewed separately; see the integration verification report.

## einstein-1916

[Detailed source ledger](docs/einstein-ym/einstein-1916.json) · DOI 10.5281/zenodo.24064553 · source SHA-256 `daff44d8917c882e012373c737add432217bd991d48b5e03e176a5a2413697c0`

| Source section | PDF page(s) | Destination |
| --- | --- | --- |
| 1 Introduction | 3, 4 | [sec-intro](/source-readout/einstein-1916/01-the-reconstruction#sec-intro) |
| 2 Source architecture and the reconstruction problem | 4, 5 | [sec-architecture](/source-readout/einstein-1916/02-source-and-recovery#sec-architecture) |
| 3 Local measurements and metric recovery | 5, 6, 7, 8 | [sec-metric](/source-readout/einstein-1916/03-calibrated-spacetime#sec-metric) |
| 4 Tensor operations and compatible comparison | 8, 9, 10 | [sec-calculus](/source-readout/einstein-1916/04-comparison-and-tensors#sec-calculus) |
| 5 Geodesic variation and differential identities | 10, 11, 12 | [sec-geodesic](/source-readout/einstein-1916/05-geodesics-and-divergences#sec-geodesic) |
| 6 Curvature, local flatness and variation coverage | 12, 13, 14 | [sec-curvature](/source-readout/einstein-1916/06-curvature-and-variations#sec-curvature) |
| 7 Vacuum dynamics and the variational operation | 14, 15, 16, 17 | [sec-vacuum](/source-readout/einstein-1916/07-vacuum-and-action#sec-vacuum) |
| 8 Gravitational energy and coordinate dependence | 17, 18 | [sec-gravenergy](/source-readout/einstein-1916/08-gravitational-energy#sec-gravenergy) |
| 9 Matter on the same realization and the general field equation | 18, 19 | [sec-matter](/source-readout/einstein-1916/09-matter-and-field-equations#sec-matter) |
| 10 Total conservation, exchange and boundary flux | 19, 20, 21, 22 | [sec-conservation](/source-readout/einstein-1916/10-conservation-and-flux#sec-conservation) |
| 11 Fluid constitutive readouts and Euler equations | 22, 23, 24 | [sec-fluid](/source-readout/einstein-1916/11-fluids#sec-fluid) |
| 12 Electromagnetic fields, Maxwell operations and stress | 24, 25, 26, 27, 28 | [sec-em](/source-readout/einstein-1916/12-electromagnetism#sec-em) |
| 13 Finite-order reconstruction and the Newtonian limit | 28, 29, 30 | [sec-newton](/source-readout/einstein-1916/13-newtonian-limit#sec-newton) |
| 14 The central exterior and its higher-order completion | 30, 31, 32 | [sec-exterior](/source-readout/einstein-1916/14-spherical-exterior#sec-exterior) |
| 15 Rods, clocks and static frequency transfer | 32, 33 | [sec-measurements](/source-readout/einstein-1916/15-clocks-and-frequency#sec-measurements) |
| 16 Null rays, optical variation and bending | 33, 34, 35 | [sec-light](/source-readout/einstein-1916/16-light-and-bending#sec-light) |
| 17 Perihelion advance and the cited dependency | 35, 36, 37 | [sec-orbit](/source-readout/einstein-1916/17-perihelion#sec-orbit) |
| 18 The cumulative reconstruction theorem | 37, 38 | [sec-recovery](/source-readout/einstein-1916/18-cumulative-recovery#sec-recovery) |
| 19 Relation to established formulations and contribution | 38, 39 | [sec-comparison](/source-readout/einstein-1916/19-relation-and-contribution#sec-comparison) |
| 20 Verification, limitations and reproducibility | 39, 40 | [sec-verification](/source-readout/einstein-1916/20-verification-and-limits#sec-verification) |
| 21 Conclusion | 40, 41 | [sec-conclusion](/source-readout/einstein-1916/21-conclusion#sec-conclusion) |
| A Printed-source qualifications and correction register | 41, 42, 43 | [app-source](/source-readout/einstein-1916/22-printed-source-register#app-source) |
| B Complete original-equation correspondence | 43, 44, 45 | [app-correspondence](/source-readout/einstein-1916/23-equation-correspondence#app-correspondence) |
| C Assumption and theorem-status register | 45, 46, 47 | [app-assumptions](/source-readout/einstein-1916/24-assumption-register#app-assumptions) |

Administrative treatment:

- Title page repeated author/keywords and printed table of contents are adapted to website metadata and chapter navigation.
- Publication layout instructions and font-size changes are omitted.

## yang-mills-reconstruction

[Detailed source ledger](docs/einstein-ym/yang-mills-reconstruction.json) · DOI 10.5281/zenodo.24173681 · source SHA-256 `1da08819887a5e8e6321515d3f87ea0cb43c86a5c8409ccaeccf4c81f756f116`

| Reading chapter | Physical source pages | Destination |
| --- | --- | --- |
| 1. The contribution and the reading path | 1–4 | [001-the-contribution-and-the-reading-path](/source-readout/yang-mills-reconstruction/001-the-contribution-and-the-reading-path) |
| 2. Introduction | 4–5 | [002-introduction](/source-readout/yang-mills-reconstruction/002-introduction) |
| 3. Source–readout and reflective mathematics: the objects and the task | 5–10 | [003-sourcereadout-and-reflective-mathematics-the-objects-and-the-task](/source-readout/yang-mills-reconstruction/003-sourcereadout-and-reflective-mathematics-the-objects-and-the-task) |
| 4. Provenance and mathematical contract | 10–10 | [004-provenance-and-mathematical-contract](/source-readout/yang-mills-reconstruction/004-provenance-and-mathematical-contract) |
| 5. The supplied public conclusion and its recovery target | 10–12 | [005-the-supplied-public-conclusion-and-its-recovery-target](/source-readout/yang-mills-reconstruction/005-the-supplied-public-conclusion-and-its-recovery-target) |
| 6. Inherited analytic conventions | 12–14 | [006-inherited-analytic-conventions](/source-readout/yang-mills-reconstruction/006-inherited-analytic-conventions) |
| 7. Native admission, literal preparation and the realized sector | 14–15 | [007-native-admission-literal-preparation-and-the-realized-sector](/source-readout/yang-mills-reconstruction/007-native-admission-literal-preparation-and-the-realized-sector) |
| 8. Finite-lattice realization and exact recovery | 15–16 | [008-finite-lattice-realization-and-exact-recovery](/source-readout/yang-mills-reconstruction/008-finite-lattice-realization-and-exact-recovery) |
| 9. The source support of the realized family, its lift groupoid and its interfaces | 16–22 | [009-the-source-support-of-the-realized-family-its-lift-groupoid-and-its-interfaces](/source-readout/yang-mills-reconstruction/009-the-source-support-of-the-realized-family-its-lift-groupoid-and-its-interfaces) |
| 10. Activity domains, ordered derivatives and absolute budgets | 22–28 | [010-activity-domains-ordered-derivatives-and-absolute-budgets](/source-readout/yang-mills-reconstruction/010-activity-domains-ordered-derivatives-and-absolute-budgets) |
| 11. Finite reflection positivity and rooted bounds | 28–30 | [011-finite-reflection-positivity-and-rooted-bounds](/source-readout/yang-mills-reconstruction/011-finite-reflection-positivity-and-rooted-bounds) |
| 12. Quadratic ultraviolet kernels and comparison | 30–37 | [012-quadratic-ultraviolet-kernels-and-comparison](/source-readout/yang-mills-reconstruction/012-quadratic-ultraviolet-kernels-and-comparison) |
| 13. Quadratic ultraviolet kernels and comparison · Part 2 | 38–45 | [013-quadratic-ultraviolet-kernels-and-comparison-part-2](/source-readout/yang-mills-reconstruction/013-quadratic-ultraviolet-kernels-and-comparison-part-2) |
| 14. Quadratic ultraviolet kernels and comparison · Part 3 | 46–52 | [014-quadratic-ultraviolet-kernels-and-comparison-part-3](/source-readout/yang-mills-reconstruction/014-quadratic-ultraviolet-kernels-and-comparison-part-3) |
| 15. Local nonlinear geometry and Haar realization | 52–59 | [015-local-nonlinear-geometry-and-haar-realization](/source-readout/yang-mills-reconstruction/015-local-nonlinear-geometry-and-haar-realization) |
| 16. Local nonlinear geometry and Haar realization · Part 2 | 60–67 | [016-local-nonlinear-geometry-and-haar-realization-part-2](/source-readout/yang-mills-reconstruction/016-local-nonlinear-geometry-and-haar-realization-part-2) |
| 17. Local nonlinear geometry and Haar realization · Part 3 | 68–75 | [017-local-nonlinear-geometry-and-haar-realization-part-3](/source-readout/yang-mills-reconstruction/017-local-nonlinear-geometry-and-haar-realization-part-3) |
| 18. Local nonlinear geometry and Haar realization · Part 4 | 76–83 | [018-local-nonlinear-geometry-and-haar-realization-part-4](/source-readout/yang-mills-reconstruction/018-local-nonlinear-geometry-and-haar-realization-part-4) |
| 19. Local nonlinear geometry and Haar realization · Part 5 | 84–91 | [019-local-nonlinear-geometry-and-haar-realization-part-5](/source-readout/yang-mills-reconstruction/019-local-nonlinear-geometry-and-haar-realization-part-5) |
| 20. Local nonlinear geometry and Haar realization · Part 6 | 92–99 | [020-local-nonlinear-geometry-and-haar-realization-part-6](/source-readout/yang-mills-reconstruction/020-local-nonlinear-geometry-and-haar-realization-part-6) |
| 21. Local nonlinear geometry and Haar realization · Part 7 | 100–106 | [021-local-nonlinear-geometry-and-haar-realization-part-7](/source-readout/yang-mills-reconstruction/021-local-nonlinear-geometry-and-haar-realization-part-7) |
| 22. Marked integration and coupling reset | 106–113 | [022-marked-integration-and-coupling-reset](/source-readout/yang-mills-reconstruction/022-marked-integration-and-coupling-reset) |
| 23. Marked integration and coupling reset · Part 2 | 114–121 | [023-marked-integration-and-coupling-reset-part-2](/source-readout/yang-mills-reconstruction/023-marked-integration-and-coupling-reset-part-2) |
| 24. Marked integration and coupling reset · Part 3 | 122–129 | [024-marked-integration-and-coupling-reset-part-3](/source-readout/yang-mills-reconstruction/024-marked-integration-and-coupling-reset-part-3) |
| 25. Marked integration and coupling reset · Part 4 | 130–137 | [025-marked-integration-and-coupling-reset-part-4](/source-readout/yang-mills-reconstruction/025-marked-integration-and-coupling-reset-part-4) |
| 26. Marked integration and coupling reset · Part 5 | 138–145 | [026-marked-integration-and-coupling-reset-part-5](/source-readout/yang-mills-reconstruction/026-marked-integration-and-coupling-reset-part-5) |
| 27. Marked integration and coupling reset · Part 6 | 146–146 | [027-marked-integration-and-coupling-reset-part-6](/source-readout/yang-mills-reconstruction/027-marked-integration-and-coupling-reset-part-6) |
| 28. 14 The analytic stationary graph, loop moments and the cali- brated coupling history | 146–153 | [028-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history](/source-readout/yang-mills-reconstruction/028-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history) |
| 29. 14 The analytic stationary graph, loop moments and the cali- brated coupling history · Part 2 | 154–161 | [029-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-2](/source-readout/yang-mills-reconstruction/029-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-2) |
| 30. 14 The analytic stationary graph, loop moments and the cali- brated coupling history · Part 3 | 162–169 | [030-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-3](/source-readout/yang-mills-reconstruction/030-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-3) |
| 31. 14 The analytic stationary graph, loop moments and the cali- brated coupling history · Part 4 | 170–177 | [031-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-4](/source-readout/yang-mills-reconstruction/031-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-4) |
| 32. 14 The analytic stationary graph, loop moments and the cali- brated coupling history · Part 5 | 178–185 | [032-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-5](/source-readout/yang-mills-reconstruction/032-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-5) |
| 33. 14 The analytic stationary graph, loop moments and the cali- brated coupling history · Part 6 | 186–193 | [033-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-6](/source-readout/yang-mills-reconstruction/033-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-6) |
| 34. 14 The analytic stationary graph, loop moments and the cali- brated coupling history · Part 7 | 194–201 | [034-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-7](/source-readout/yang-mills-reconstruction/034-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-7) |
| 35. 14 The analytic stationary graph, loop moments and the cali- brated coupling history · Part 8 | 202–209 | [035-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-8](/source-readout/yang-mills-reconstruction/035-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-8) |
| 36. 14 The analytic stationary graph, loop moments and the cali- brated coupling history · Part 9 | 210–217 | [036-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-9](/source-readout/yang-mills-reconstruction/036-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-9) |
| 37. 14 The analytic stationary graph, loop moments and the cali- brated coupling history · Part 10 | 218–224 | [037-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-10](/source-readout/yang-mills-reconstruction/037-14-the-analytic-stationary-graph-loop-moments-and-the-cali-brated-coupling-history-part-10) |
| 38. Convergence of interacting scale histories | 224–231 | [038-convergence-of-interacting-scale-histories](/source-readout/yang-mills-reconstruction/038-convergence-of-interacting-scale-histories) |
| 39. Convergence of interacting scale histories · Part 2 | 232–239 | [039-convergence-of-interacting-scale-histories-part-2](/source-readout/yang-mills-reconstruction/039-convergence-of-interacting-scale-histories-part-2) |
| 40. Convergence of interacting scale histories · Part 3 | 240–247 | [040-convergence-of-interacting-scale-histories-part-3](/source-readout/yang-mills-reconstruction/040-convergence-of-interacting-scale-histories-part-3) |
| 41. Convergence of interacting scale histories · Part 4 | 248–252 | [041-convergence-of-interacting-scale-histories-part-4](/source-readout/yang-mills-reconstruction/041-convergence-of-interacting-scale-histories-part-4) |
| 42. Radial jets, calibrated labels and the free Maxwell comparison hierarchy | 252–259 | [042-radial-jets-calibrated-labels-and-the-free-maxwell-comparison-hierarchy](/source-readout/yang-mills-reconstruction/042-radial-jets-calibrated-labels-and-the-free-maxwell-comparison-hierarchy) |
| 43. Radial jets, calibrated labels and the free Maxwell comparison hierarchy · Part 2 | 260–267 | [043-radial-jets-calibrated-labels-and-the-free-maxwell-comparison-hierarchy-part-2](/source-readout/yang-mills-reconstruction/043-radial-jets-calibrated-labels-and-the-free-maxwell-comparison-hierarchy-part-2) |
| 44. Radial jets, calibrated labels and the free Maxwell comparison hierarchy · Part 3 | 268–275 | [044-radial-jets-calibrated-labels-and-the-free-maxwell-comparison-hierarchy-part-3](/source-readout/yang-mills-reconstruction/044-radial-jets-calibrated-labels-and-the-free-maxwell-comparison-hierarchy-part-3) |
| 45. Radial jets, calibrated labels and the free Maxwell comparison hierarchy · Part 4 | 276–282 | [045-radial-jets-calibrated-labels-and-the-free-maxwell-comparison-hierarchy-part-4](/source-readout/yang-mills-reconstruction/045-radial-jets-calibrated-labels-and-the-free-maxwell-comparison-hierarchy-part-4) |
| 46. Physical labels and their detection | 282–289 | [046-physical-labels-and-their-detection](/source-readout/yang-mills-reconstruction/046-physical-labels-and-their-detection) |
| 47. Physical labels and their detection · Part 2 | 290–295 | [047-physical-labels-and-their-detection-part-2](/source-readout/yang-mills-reconstruction/047-physical-labels-and-their-detection-part-2) |
| 48. The common continuum hierarchy | 295–302 | [048-the-common-continuum-hierarchy](/source-readout/yang-mills-reconstruction/048-the-common-continuum-hierarchy) |
| 49. The common continuum hierarchy · Part 2 | 303–310 | [049-the-common-continuum-hierarchy-part-2](/source-readout/yang-mills-reconstruction/049-the-common-continuum-hierarchy-part-2) |
| 50. Phase decomposition and Wightman reconstruction | 310–317 | [050-phase-decomposition-and-wightman-reconstruction](/source-readout/yang-mills-reconstruction/050-phase-decomposition-and-wightman-reconstruction) |
| 51. Phase decomposition and Wightman reconstruction · Part 2 | 318–325 | [051-phase-decomposition-and-wightman-reconstruction-part-2](/source-readout/yang-mills-reconstruction/051-phase-decomposition-and-wightman-reconstruction-part-2) |
| 52. Phase decomposition and Wightman reconstruction · Part 3 | 326–333 | [052-phase-decomposition-and-wightman-reconstruction-part-3](/source-readout/yang-mills-reconstruction/052-phase-decomposition-and-wightman-reconstruction-part-3) |
| 53. Phase decomposition and Wightman reconstruction · Part 4 | 334–341 | [053-phase-decomposition-and-wightman-reconstruction-part-4](/source-readout/yang-mills-reconstruction/053-phase-decomposition-and-wightman-reconstruction-part-4) |
| 54. Phase decomposition and Wightman reconstruction · Part 5 | 342–349 | [054-phase-decomposition-and-wightman-reconstruction-part-5](/source-readout/yang-mills-reconstruction/054-phase-decomposition-and-wightman-reconstruction-part-5) |
| 55. Phase decomposition and Wightman reconstruction · Part 6 | 350–357 | [055-phase-decomposition-and-wightman-reconstruction-part-6](/source-readout/yang-mills-reconstruction/055-phase-decomposition-and-wightman-reconstruction-part-6) |
| 56. Phase decomposition and Wightman reconstruction · Part 7 | 358–365 | [056-phase-decomposition-and-wightman-reconstruction-part-7](/source-readout/yang-mills-reconstruction/056-phase-decomposition-and-wightman-reconstruction-part-7) |
| 57. Phase decomposition and Wightman reconstruction · Part 8 | 366–369 | [057-phase-decomposition-and-wightman-reconstruction-part-8](/source-readout/yang-mills-reconstruction/057-phase-decomposition-and-wightman-reconstruction-part-8) |
| 58. Separated and nested operator products | 369–376 | [058-separated-and-nested-operator-products](/source-readout/yang-mills-reconstruction/058-separated-and-nested-operator-products) |
| 59. Separated and nested operator products · Part 2 | 377–384 | [059-separated-and-nested-operator-products-part-2](/source-readout/yang-mills-reconstruction/059-separated-and-nested-operator-products-part-2) |
| 60. Separated and nested operator products · Part 3 | 385–392 | [060-separated-and-nested-operator-products-part-3](/source-readout/yang-mills-reconstruction/060-separated-and-nested-operator-products-part-3) |
| 61. Extension across collision sets | 392–399 | [061-extension-across-collision-sets](/source-readout/yang-mills-reconstruction/061-extension-across-collision-sets) |
| 62. Extension across collision sets · Part 2 | 400–407 | [062-extension-across-collision-sets-part-2](/source-readout/yang-mills-reconstruction/062-extension-across-collision-sets-part-2) |
| 63. Extension across collision sets · Part 3 | 408–408 | [063-extension-across-collision-sets-part-3](/source-readout/yang-mills-reconstruction/063-extension-across-collision-sets-part-3) |
| 64. Gaussian short-distance comparison | 408–415 | [064-gaussian-short-distance-comparison](/source-readout/yang-mills-reconstruction/064-gaussian-short-distance-comparison) |
| 65. Gaussian short-distance comparison · Part 2 | 416–423 | [065-gaussian-short-distance-comparison-part-2](/source-readout/yang-mills-reconstruction/065-gaussian-short-distance-comparison-part-2) |
| 66. Gaussian short-distance comparison · Part 3 | 424–426 | [066-gaussian-short-distance-comparison-part-3](/source-readout/yang-mills-reconstruction/066-gaussian-short-distance-comparison-part-3) |
| 67. Finite stress, scaling maps and shell charges | 426–433 | [067-finite-stress-scaling-maps-and-shell-charges](/source-readout/yang-mills-reconstruction/067-finite-stress-scaling-maps-and-shell-charges) |
| 68. Finite stress, scaling maps and shell charges · Part 2 | 434–441 | [068-finite-stress-scaling-maps-and-shell-charges-part-2](/source-readout/yang-mills-reconstruction/068-finite-stress-scaling-maps-and-shell-charges-part-2) |
| 69. Finite stress, scaling maps and shell charges · Part 3 | 442–449 | [069-finite-stress-scaling-maps-and-shell-charges-part-3](/source-readout/yang-mills-reconstruction/069-finite-stress-scaling-maps-and-shell-charges-part-3) |
| 70. The centered trace and its comparison exclusions | 449–456 | [070-the-centered-trace-and-its-comparison-exclusions](/source-readout/yang-mills-reconstruction/070-the-centered-trace-and-its-comparison-exclusions) |
| 71. The centered trace and its comparison exclusions · Part 2 | 457–464 | [071-the-centered-trace-and-its-comparison-exclusions-part-2](/source-readout/yang-mills-reconstruction/071-the-centered-trace-and-its-comparison-exclusions-part-2) |
| 72. The centered trace and its comparison exclusions · Part 3 | 465–471 | [072-the-centered-trace-and-its-comparison-exclusions-part-3](/source-readout/yang-mills-reconstruction/072-the-centered-trace-and-its-comparison-exclusions-part-3) |
| 73. Exact stress correction and local quantitative estimates | 471–478 | [073-exact-stress-correction-and-local-quantitative-estimates](/source-readout/yang-mills-reconstruction/073-exact-stress-correction-and-local-quantitative-estimates) |
| 74. Exact stress correction and local quantitative estimates · Part 2 | 479–486 | [074-exact-stress-correction-and-local-quantitative-estimates-part-2](/source-readout/yang-mills-reconstruction/074-exact-stress-correction-and-local-quantitative-estimates-part-2) |
| 75. Exact stress correction and local quantitative estimates · Part 3 | 487–494 | [075-exact-stress-correction-and-local-quantitative-estimates-part-3](/source-readout/yang-mills-reconstruction/075-exact-stress-correction-and-local-quantitative-estimates-part-3) |
| 76. Position coupling, real remainders and equation markers | 494–501 | [076-position-coupling-real-remainders-and-equation-markers](/source-readout/yang-mills-reconstruction/076-position-coupling-real-remainders-and-equation-markers) |
| 77. Position coupling, real remainders and equation markers · Part 2 | 502–507 | [077-position-coupling-real-remainders-and-equation-markers-part-2](/source-readout/yang-mills-reconstruction/077-position-coupling-real-remainders-and-equation-markers-part-2) |
| 78. Common-family assembly of the supplied conclusion | 507–509 | [078-common-family-assembly-of-the-supplied-conclusion](/source-readout/yang-mills-reconstruction/078-common-family-assembly-of-the-supplied-conclusion) |
| 79. Conclusion | 509–509 | [079-conclusion](/source-readout/yang-mills-reconstruction/079-conclusion) |
| 80. Attribution of the source and mathematical background | 509–510 | [080-attribution-of-the-source-and-mathematical-background](/source-readout/yang-mills-reconstruction/080-attribution-of-the-source-and-mathematical-background) |
| 81. Tangent coverage, forms and horizontal operations | 510–511 | [081-tangent-coverage-forms-and-horizontal-operations](/source-readout/yang-mills-reconstruction/081-tangent-coverage-forms-and-horizontal-operations) |
| 82. Integral, residual and limit transport | 511–512 | [082-integral-residual-and-limit-transport](/source-readout/yang-mills-reconstruction/082-integral-residual-and-limit-transport) |
| 83. Reflection quotients and field recovery | 512–513 | [083-reflection-quotients-and-field-recovery](/source-readout/yang-mills-reconstruction/083-reflection-quotients-and-field-recovery) |
| 84. Compression algebras and phase recovery | 513–514 | [084-compression-algebras-and-phase-recovery](/source-readout/yang-mills-reconstruction/084-compression-algebras-and-phase-recovery) |
| 85. Operator-product readers and collision extensions | 514–515 | [085-operator-product-readers-and-collision-extensions](/source-readout/yang-mills-reconstruction/085-operator-product-readers-and-collision-extensions) |
| 86. Gaussian and ordered inverse operations | 515–515 | [086-gaussian-and-ordered-inverse-operations](/source-readout/yang-mills-reconstruction/086-gaussian-and-ordered-inverse-operations) |
| 87. Assumptions, dependency chain and source–readout contracts | 515–521 | [087-assumptions-dependency-chain-and-sourcereadout-contracts](/source-readout/yang-mills-reconstruction/087-assumptions-dependency-chain-and-sourcereadout-contracts) |
| 88. Claim-status register | 521–523 | [088-claim-status-register](/source-readout/yang-mills-reconstruction/088-claim-status-register) |
| 89. Correspondence with the supplied text | 523–528 | [089-correspondence-with-the-supplied-text](/source-readout/yang-mills-reconstruction/089-correspondence-with-the-supplied-text) |
| 90. Verification, limitations and reproducibility | 528–529 | [090-verification-limitations-and-reproducibility](/source-readout/yang-mills-reconstruction/090-verification-limitations-and-reproducibility) |
| 91. References | 529–530 | [091-references](/source-readout/yang-mills-reconstruction/091-references) |

Administrative treatment:

- Repeated running header or duplicated title/front matter. (533 source blocks).
- Administrative table of contents, replaced by the complete web navigation. (2 source blocks).
- Physical page numeral, retained in source locators. (527 source blocks).
- Exact physical-page, source-block and excluded-text records are retained in the detailed ledger and the machine-readable companion.

## yang-mills-companion

[Detailed source ledger](docs/einstein-ym/yang-mills-companion.json) · DOI 10.5281/zenodo.24173681 · source SHA-256 `deaa9ede71760d5758ffac8cd70084385773e4dad4de354f3b5d437e83706832`

| Reading chapter | Physical source pages | Destination |
| --- | --- | --- |
| 1. The contribution and the reading path | 1–3 | [001-the-contribution-and-the-reading-path](/source-readout/yang-mills-companion/001-the-contribution-and-the-reading-path) |
| 2. Introduction: the construction and its dependencies | 3–5 | [002-introduction-the-construction-and-its-dependencies](/source-readout/yang-mills-companion/002-introduction-the-construction-and-its-dependencies) |
| 3. Statement of the public conclusion | 5–7 | [003-statement-of-the-public-conclusion](/source-readout/yang-mills-companion/003-statement-of-the-public-conclusion) |
| 4. Notation and analytic conventions | 7–11 | [004-notation-and-analytic-conventions](/source-readout/yang-mills-companion/004-notation-and-analytic-conventions) |
| 5. Finite-lattice positivity | 11–13 | [005-finite-lattice-positivity](/source-readout/yang-mills-companion/005-finite-lattice-positivity) |
| 6. Quadratic kernels and their ultraviolet limit | 13–20 | [006-quadratic-kernels-and-their-ultraviolet-limit](/source-readout/yang-mills-companion/006-quadratic-kernels-and-their-ultraviolet-limit) |
| 7. Quadratic kernels and their ultraviolet limit · Part 2 | 21–28 | [007-quadratic-kernels-and-their-ultraviolet-limit-part-2](/source-readout/yang-mills-companion/007-quadratic-kernels-and-their-ultraviolet-limit-part-2) |
| 8. Quadratic kernels and their ultraviolet limit · Part 3 | 29–36 | [008-quadratic-kernels-and-their-ultraviolet-limit-part-3](/source-readout/yang-mills-companion/008-quadratic-kernels-and-their-ultraviolet-limit-part-3) |
| 9. Quadratic kernels and their ultraviolet limit · Part 4 | 37–40 | [009-quadratic-kernels-and-their-ultraviolet-limit-part-4](/source-readout/yang-mills-companion/009-quadratic-kernels-and-their-ultraviolet-limit-part-4) |
| 10. Local nonlinear geometry and estimates | 40–47 | [010-local-nonlinear-geometry-and-estimates](/source-readout/yang-mills-companion/010-local-nonlinear-geometry-and-estimates) |
| 11. Local nonlinear geometry and estimates · Part 2 | 48–55 | [011-local-nonlinear-geometry-and-estimates-part-2](/source-readout/yang-mills-companion/011-local-nonlinear-geometry-and-estimates-part-2) |
| 12. Local nonlinear geometry and estimates · Part 3 | 56–63 | [012-local-nonlinear-geometry-and-estimates-part-3](/source-readout/yang-mills-companion/012-local-nonlinear-geometry-and-estimates-part-3) |
| 13. Local nonlinear geometry and estimates · Part 4 | 64–71 | [013-local-nonlinear-geometry-and-estimates-part-4](/source-readout/yang-mills-companion/013-local-nonlinear-geometry-and-estimates-part-4) |
| 14. Local nonlinear geometry and estimates · Part 5 | 72–79 | [014-local-nonlinear-geometry-and-estimates-part-5](/source-readout/yang-mills-companion/014-local-nonlinear-geometry-and-estimates-part-5) |
| 15. Local nonlinear geometry and estimates · Part 6 | 80–87 | [015-local-nonlinear-geometry-and-estimates-part-6](/source-readout/yang-mills-companion/015-local-nonlinear-geometry-and-estimates-part-6) |
| 16. Local nonlinear geometry and estimates · Part 7 | 88–95 | [016-local-nonlinear-geometry-and-estimates-part-7](/source-readout/yang-mills-companion/016-local-nonlinear-geometry-and-estimates-part-7) |
| 17. Local nonlinear geometry and estimates · Part 8 | 96–103 | [017-local-nonlinear-geometry-and-estimates-part-8](/source-readout/yang-mills-companion/017-local-nonlinear-geometry-and-estimates-part-8) |
| 18. Local nonlinear geometry and estimates · Part 9 | 104–111 | [018-local-nonlinear-geometry-and-estimates-part-9](/source-readout/yang-mills-companion/018-local-nonlinear-geometry-and-estimates-part-9) |
| 19. Local nonlinear geometry and estimates · Part 10 | 112–113 | [019-local-nonlinear-geometry-and-estimates-part-10](/source-readout/yang-mills-companion/019-local-nonlinear-geometry-and-estimates-part-10) |
| 20. Marked integration and the coupling reset | 113–120 | [020-marked-integration-and-the-coupling-reset](/source-readout/yang-mills-companion/020-marked-integration-and-the-coupling-reset) |
| 21. Marked integration and the coupling reset · Part 2 | 121–128 | [021-marked-integration-and-the-coupling-reset-part-2](/source-readout/yang-mills-companion/021-marked-integration-and-the-coupling-reset-part-2) |
| 22. Marked integration and the coupling reset · Part 3 | 129–136 | [022-marked-integration-and-the-coupling-reset-part-3](/source-readout/yang-mills-companion/022-marked-integration-and-the-coupling-reset-part-3) |
| 23. Marked integration and the coupling reset · Part 4 | 137–144 | [023-marked-integration-and-the-coupling-reset-part-4](/source-readout/yang-mills-companion/023-marked-integration-and-the-coupling-reset-part-4) |
| 24. Marked integration and the coupling reset · Part 5 | 145–151 | [024-marked-integration-and-the-coupling-reset-part-5](/source-readout/yang-mills-companion/024-marked-integration-and-the-coupling-reset-part-5) |
| 25. Convergence of the interacting scale histories | 151–158 | [025-convergence-of-the-interacting-scale-histories](/source-readout/yang-mills-companion/025-convergence-of-the-interacting-scale-histories) |
| 26. Convergence of the interacting scale histories · Part 2 | 159–166 | [026-convergence-of-the-interacting-scale-histories-part-2](/source-readout/yang-mills-companion/026-convergence-of-the-interacting-scale-histories-part-2) |
| 27. Convergence of the interacting scale histories · Part 3 | 167–174 | [027-convergence-of-the-interacting-scale-histories-part-3](/source-readout/yang-mills-companion/027-convergence-of-the-interacting-scale-histories-part-3) |
| 28. Convergence of the interacting scale histories · Part 4 | 175–182 | [028-convergence-of-the-interacting-scale-histories-part-4](/source-readout/yang-mills-companion/028-convergence-of-the-interacting-scale-histories-part-4) |
| 29. Convergence of the interacting scale histories · Part 5 | 183–190 | [029-convergence-of-the-interacting-scale-histories-part-5](/source-readout/yang-mills-companion/029-convergence-of-the-interacting-scale-histories-part-5) |
| 30. Convergence of the interacting scale histories · Part 6 | 191–198 | [030-convergence-of-the-interacting-scale-histories-part-6](/source-readout/yang-mills-companion/030-convergence-of-the-interacting-scale-histories-part-6) |
| 31. Convergence of the interacting scale histories · Part 7 | 199–206 | [031-convergence-of-the-interacting-scale-histories-part-7](/source-readout/yang-mills-companion/031-convergence-of-the-interacting-scale-histories-part-7) |
| 32. Convergence of the interacting scale histories · Part 8 | 207–214 | [032-convergence-of-the-interacting-scale-histories-part-8](/source-readout/yang-mills-companion/032-convergence-of-the-interacting-scale-histories-part-8) |
| 33. Convergence of the interacting scale histories · Part 9 | 215–222 | [033-convergence-of-the-interacting-scale-histories-part-9](/source-readout/yang-mills-companion/033-convergence-of-the-interacting-scale-histories-part-9) |
| 34. Convergence of the interacting scale histories · Part 10 | 223–230 | [034-convergence-of-the-interacting-scale-histories-part-10](/source-readout/yang-mills-companion/034-convergence-of-the-interacting-scale-histories-part-10) |
| 35. Convergence of the interacting scale histories · Part 11 | 231–238 | [035-convergence-of-the-interacting-scale-histories-part-11](/source-readout/yang-mills-companion/035-convergence-of-the-interacting-scale-histories-part-11) |
| 36. Convergence of the interacting scale histories · Part 12 | 239–240 | [036-convergence-of-the-interacting-scale-histories-part-12](/source-readout/yang-mills-companion/036-convergence-of-the-interacting-scale-histories-part-12) |
| 37. Physical labels and their detection | 240–247 | [037-physical-labels-and-their-detection](/source-readout/yang-mills-companion/037-physical-labels-and-their-detection) |
| 38. Physical labels and their detection · Part 2 | 248–255 | [038-physical-labels-and-their-detection-part-2](/source-readout/yang-mills-companion/038-physical-labels-and-their-detection-part-2) |
| 39. Physical labels and their detection · Part 3 | 256–256 | [039-physical-labels-and-their-detection-part-3](/source-readout/yang-mills-companion/039-physical-labels-and-their-detection-part-3) |
| 40. Free shell charges and separation of the Ward kernel | 256–263 | [040-free-shell-charges-and-separation-of-the-ward-kernel](/source-readout/yang-mills-companion/040-free-shell-charges-and-separation-of-the-ward-kernel) |
| 41. Free shell charges and separation of the Ward kernel · Part 2 | 264–271 | [041-free-shell-charges-and-separation-of-the-ward-kernel-part-2](/source-readout/yang-mills-companion/041-free-shell-charges-and-separation-of-the-ward-kernel-part-2) |
| 42. Free shell charges and separation of the Ward kernel · Part 3 | 272–278 | [042-free-shell-charges-and-separation-of-the-ward-kernel-part-3](/source-readout/yang-mills-companion/042-free-shell-charges-and-separation-of-the-ward-kernel-part-3) |
| 43. The common continuum hierarchy | 278–285 | [043-the-common-continuum-hierarchy](/source-readout/yang-mills-companion/043-the-common-continuum-hierarchy) |
| 44. The common continuum hierarchy · Part 2 | 286–290 | [044-the-common-continuum-hierarchy-part-2](/source-readout/yang-mills-companion/044-the-common-continuum-hierarchy-part-2) |
| 45. Phase decomposition and Wightman reconstruction | 290–297 | [045-phase-decomposition-and-wightman-reconstruction](/source-readout/yang-mills-companion/045-phase-decomposition-and-wightman-reconstruction) |
| 46. Phase decomposition and Wightman reconstruction · Part 2 | 298–305 | [046-phase-decomposition-and-wightman-reconstruction-part-2](/source-readout/yang-mills-companion/046-phase-decomposition-and-wightman-reconstruction-part-2) |
| 47. Phase decomposition and Wightman reconstruction · Part 3 | 306–313 | [047-phase-decomposition-and-wightman-reconstruction-part-3](/source-readout/yang-mills-companion/047-phase-decomposition-and-wightman-reconstruction-part-3) |
| 48. Phase decomposition and Wightman reconstruction · Part 4 | 314–321 | [048-phase-decomposition-and-wightman-reconstruction-part-4](/source-readout/yang-mills-companion/048-phase-decomposition-and-wightman-reconstruction-part-4) |
| 49. Phase decomposition and Wightman reconstruction · Part 5 | 322–329 | [049-phase-decomposition-and-wightman-reconstruction-part-5](/source-readout/yang-mills-companion/049-phase-decomposition-and-wightman-reconstruction-part-5) |
| 50. Phase decomposition and Wightman reconstruction · Part 6 | 330–337 | [050-phase-decomposition-and-wightman-reconstruction-part-6](/source-readout/yang-mills-companion/050-phase-decomposition-and-wightman-reconstruction-part-6) |
| 51. Phase decomposition and Wightman reconstruction · Part 7 | 338–341 | [051-phase-decomposition-and-wightman-reconstruction-part-7](/source-readout/yang-mills-companion/051-phase-decomposition-and-wightman-reconstruction-part-7) |
| 52. Separated and nested operator products | 341–348 | [052-separated-and-nested-operator-products](/source-readout/yang-mills-companion/052-separated-and-nested-operator-products) |
| 53. Separated and nested operator products · Part 2 | 349–356 | [053-separated-and-nested-operator-products-part-2](/source-readout/yang-mills-companion/053-separated-and-nested-operator-products-part-2) |
| 54. Separated and nested operator products · Part 3 | 357–362 | [054-separated-and-nested-operator-products-part-3](/source-readout/yang-mills-companion/054-separated-and-nested-operator-products-part-3) |
| 55. Extension across collision sets | 362–369 | [055-extension-across-collision-sets](/source-readout/yang-mills-companion/055-extension-across-collision-sets) |
| 56. Extension across collision sets · Part 2 | 370–374 | [056-extension-across-collision-sets-part-2](/source-readout/yang-mills-companion/056-extension-across-collision-sets-part-2) |
| 57. The Gaussian short-distance comparison | 374–381 | [057-the-gaussian-short-distance-comparison](/source-readout/yang-mills-companion/057-the-gaussian-short-distance-comparison) |
| 58. The Gaussian short-distance comparison · Part 2 | 382–387 | [058-the-gaussian-short-distance-comparison-part-2](/source-readout/yang-mills-companion/058-the-gaussian-short-distance-comparison-part-2) |
| 59. The centered trace and its non-freeness test | 387–394 | [059-the-centered-trace-and-its-non-freeness-test](/source-readout/yang-mills-companion/059-the-centered-trace-and-its-non-freeness-test) |
| 60. The centered trace and its non-freeness test · Part 2 | 395–402 | [060-the-centered-trace-and-its-non-freeness-test-part-2](/source-readout/yang-mills-companion/060-the-centered-trace-and-its-non-freeness-test-part-2) |
| 61. The centered trace and its non-freeness test · Part 3 | 403–410 | [061-the-centered-trace-and-its-non-freeness-test-part-3](/source-readout/yang-mills-companion/061-the-centered-trace-and-its-non-freeness-test-part-3) |
| 62. The centered trace and its non-freeness test · Part 4 | 411–418 | [062-the-centered-trace-and-its-non-freeness-test-part-4](/source-readout/yang-mills-companion/062-the-centered-trace-and-its-non-freeness-test-part-4) |
| 63. The centered trace and its non-freeness test · Part 5 | 419–426 | [063-the-centered-trace-and-its-non-freeness-test-part-5](/source-readout/yang-mills-companion/063-the-centered-trace-and-its-non-freeness-test-part-5) |
| 64. The centered trace and its non-freeness test · Part 6 | 427–434 | [064-the-centered-trace-and-its-non-freeness-test-part-6](/source-readout/yang-mills-companion/064-the-centered-trace-and-its-non-freeness-test-part-6) |
| 65. The centered trace and its non-freeness test · Part 7 | 435–442 | [065-the-centered-trace-and-its-non-freeness-test-part-7](/source-readout/yang-mills-companion/065-the-centered-trace-and-its-non-freeness-test-part-7) |
| 66. The centered trace and its non-freeness test · Part 8 | 443–450 | [066-the-centered-trace-and-its-non-freeness-test-part-8](/source-readout/yang-mills-companion/066-the-centered-trace-and-its-non-freeness-test-part-8) |
| 67. The centered trace and its non-freeness test · Part 9 | 451–453 | [067-the-centered-trace-and-its-non-freeness-test-part-9](/source-readout/yang-mills-companion/067-the-centered-trace-and-its-non-freeness-test-part-9) |
| 68. Completion of the proof | 453–455 | [068-completion-of-the-proof](/source-readout/yang-mills-companion/068-completion-of-the-proof) |
| 69. Conclusion | 455–455 | [069-conclusion](/source-readout/yang-mills-companion/069-conclusion) |
| 70. Editorial amendments and conventions | 455–457 | [070-editorial-amendments-and-conventions](/source-readout/yang-mills-companion/070-editorial-amendments-and-conventions) |
| 71. Source, attribution and reproducibility | 457–457 | [071-source-attribution-and-reproducibility](/source-readout/yang-mills-companion/071-source-attribution-and-reproducibility) |
| 72. References | 457–458 | [072-references](/source-readout/yang-mills-companion/072-references) |

Administrative treatment:

- Repeated running header or duplicated title/front matter. (462 source blocks).
- Administrative table of contents, replaced by the complete web navigation. (1 source blocks).
- Physical page numeral, retained in source locators. (456 source blocks).
- Exact physical-page, source-block and excluded-text records are retained in the detailed ledger and the machine-readable companion.

