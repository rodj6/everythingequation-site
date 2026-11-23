# Riemann Hypothesis manuscript versions 1 and 2

Version 2 expands the referee reconstruction by 81 pages. It keeps the same ordinary-RH endpoint and the same 18 main sections. The repair makes project-internal proof steps and their exact use of published classical results explicit. The final assembly now incorporates the revised two/three local bound and cites five field-by-field literature and input tables.

| Edition | PDF pages | Manuscript date | Zenodo deposit |
| --- | ---: | --- | --- |
| Frozen Version 1 | 980 | 22 November 2026 | [10.5281/zenodo.24433884](https://doi.org/10.5281/zenodo.24433884) |
| Repaired Version 2 | 1,061 | 22 November 2026 | [10.5281/zenodo.24473551](https://doi.org/10.5281/zenodo.24473551), published 23 November 2026 |

Both deposit records use the citation title *The Riemann Hypothesis Argument of Levent Alpöge and Anthropic's Claude: A Full Human-Readable Reconstruction from Lean*. Version 2 is under the same concept DOI, `10.5281/zenodo.24433883`. The downloaded Version 2 deposit PDF and the supplied PDF have the same SHA-256 `dbb02e1656b98611c49380f6f4b3af07b45e0022de5525d43d70b3aaf210a0e8`. The frozen Version 1 SHA-256 is `bae1f777817c69c9a3ca7eac08543538547315c640a31ff24d13ac02666c3fb3`. [Zenodo Version 2 metadata](https://zenodo.org/api/records/24473551)

## Material changes and proof navigation

- **Section 4.** The largest growth is in the finite-field and literature interface. Sections 4.7–4.14 expand the base-change, weak descent, F8 patching, residual automorphy and the quantitative counts in Cases I, II, III, and V. Table 1 records the 27 classical-literature fields of `LiteratureRankNHypothesis` with manuscript dispositions and citations. Section 4.16 now reads “The exact theta comparison.”
- **Section 6.7.** Theorem 6.103 on p. 356 discharges simultaneous arithmetic realization on every supplied compatible `SetupAlt`. Remark 6.104 on p. 359 records the acyclic order and enumerates the published arithmetic inputs. The universal two/three estimate is established upstream from `Hypotheses₂`. Candidate family setups enter downstream when the estimate is consumed. The manuscript cross-links the upstream `AbelianDeRham` supplier to Proposition 10.32 and Theorems 10.37 and 10.43.
- **Section 7.** The larger Breuil–Kisin passage and local–global transfer keep Proposition 7.102 (V2 p. 472) and Proposition 7.114 (V2 p. 496) as the original entry points. Proposition 7.102 still requires one limit de Rham frame and a single uniform link exponent, with crystallinity transferred under the stated hypotheses. Step 3a expands the invertible limit basis, saturation, and descent of a right inverse to a single exponent. The later recovery gives the de Rham period matrix and the crystalline Frobenius section explicitly. Proposition 7.114 retains the same weakly attached representation and applies the local comparison through the prime-cyclic base-change and support-separation conditions.
- **Sections 8–10.** In Section 8.21 new defect and passage calculations expand the global arithmetic tie. Four newly numbered displays appear there. Section 9 expands the adapted-frame and nonvanishing construction. Section 10 expands the arithmetic Hodge and arbitrary-base exterior-cup interfaces. Lemma 10.65 remains the entry point for one integral Siegel fan and its global strict face majorant, at V2 p. 872.
- **Section 16.** Tables 2 and 3 map the seven input records of `topCovolG_alt_alt` and the 28 fields of `PublishedHodgeBundleTheorems` to the actual proofs and suppliers. Their later references depend on both parts of Table 3 across the p. 1035–1036 break.
- **Section 17.** Proposition 17.3 retains the row witness twice in `O = (h, h_L, h)`. The displayed row type tuple moves from (398) to (402). Proposition 17.4 now states the full `LinkedAt` closure requirement on the dependence family and identifies its discharge from `P.nLink`, through `At23OfAll.lean:21--26`. The displayed argument to `SlotNormCondition` is the closed predicate on compatible setups. The family construction later supplies actual `SetupAlt` witnesses before assembling one `HypsAlt` bundle. Theorem 17.5 cites Theorem 6.103 in tracing the revised proof to ZF, EC and ordinary RH.
- **Section 18.** The 14-branch status table remains, followed by new Section 18.1 and Tables 5 and 6. They audit all 60 fields of `UnitaryGroupThirdPlaceHypotheses` and 53 fields of `ThetaLocalInputs`. Twenty types occur in both records, with 93 distinct syntactic types. Only four fields in the first package depend on the shared open literature input. Its field named `siegelEisensteinSimplePole` is the unused slot `True`. There are 129 bibliography entries in Version 2, compared with 65 in Version 1.

Keep the revised scope in the reader and citation copy. The manuscript asserts repaired prose closure of the 45 project-internal gap groups and 14 frontier branches relative to its stated classical literature inputs. It reports a textual import scan with 175,187 local modules. Local Lean 4 elaboration and direct inspection of exact printed clause and page references in unopened primary works remain outside that verification.

## Retain stable destinations

All 18 section IDs, 122 existing subsection IDs, four existing subsubsection IDs, and 897 existing theorem-family IDs survive. Version 2 adds one subsection, Theorem 6.103 and Remark 6.104. Preserve established chapter URLs by section identity where the material survives. For Section 4.16, maintain the original URL or an explicit route alias even though the title has shortened.

| Material | V1 | V2 |
| --- | --- | --- |
| Proposition 7.102 | p. 444 | p. 472 |
| Proposition 7.114 | p. 463 | p. 496 |
| Lemma 10.65 | p. 814 | p. 872 |
| Proposition 17.3 | p. 969 | p. 1038 |
| Proposition 17.4 | p. 970 | printed p. 1039 |
| Theorem 17.5 | p. 971 | p. 1040 |
| Frontier status table | Table 1, p. 973 | Table 4, pp. 1042–1044 |
| Terminal row type tuple | `equation.17.398` | `equation.17.402` |
| Opening covolume normalization | `equation.9.335` | `equation.9.339` |

Use the printed Proposition 17.4 heading for the readable jump. Its native V2 PDF destination points to the bottom of p. 1038, before the printed proposition on p. 1039. Versioned V1 links should continue to point to V1 text. Current V2 links should follow V2 numbering. In particular, V1 §8.21 LossFS display (328) and the passage inequalities (329)–(330) are now (331)–(333), while V2 (328)–(330) represent new equations. V2 Table 1 also names a different table. A numeric name by itself cannot establish continuity.

The table layouts are substantive. Table 1 occupies pp. 122–123, Table 2 p. 1035, Table 3 pp. 1035–1036, Table 4 pp. 1042–1044, Table 5 pp. 1045–1049, and Table 6 pp. 1050–1053. Tables 2 and 3 share p. 1035, and the bibliography begins below Table 6 on p. 1053. The Version 1 PDF has 44 text lines exceeding the physical page width by more than one point, across 17 pages. The same whole-file scan found zero in Version 2. The checked pages retain the visual distinction between the bold theorem or subsection heading, italic theorem statement, monospaced source identifiers, display mathematics, and captioned table columns.

## Source availability and comparison scope

The supplied Version 2 PDF has zero embedded attachments. Searches in the available workspace and the user’s files did not find a matching final LaTeX package or the referee manuscript directory. The earlier `RH_Exposition_Run13_Checkpoint.zip` belongs to the 292-page exposition. A recently saved handover concerns the separate strip-trace investigation. The public Version 2 record supplies just the exact PDF. Treat the supplied PDF as the version authority for transcription.

The [machine-readable comparison](version-comparison.json) inventories all 18 section boundaries, 145 outline entries, and 899 result labels. It records PDF destination additions and shared names. Its word trigram overlap scores are a triage aid. Pagination, flows across the page edge and PDF glyph ordering affect them. The scores do not certify mathematical equivalence or equation identity.

## Main section start pages

| Section | Heading | V1 | V2 |
| --- | --- | ---: | ---: |
| 1 | Scope, source and standard of proof | 5 | 5 |
| 2 | The precise target and the endpoint reduction | 6 | 6 |
| 3 | The analytic window principle | 8 | 9 |
| 4 | Finite-field labels and the publication inputs | 62 | 62 |
| 5 | The local parameter input | 229 | 248 |
| 6 | The uniform arithmetic estimate at two and three | 241 | 260 |
| 7 | The geometric trace formula and the Galois row | 337 | 360 |
| 8 | Families and the arithmetic window estimate | 468 | 502 |
| 9 | The covolume estimate and its uniformity | 680 | 723 |
| 10 | Geometric inputs and the integral Hodge–Tate comparison | 756 | 806 |
| 11 | Resolution and principalization in the geometric input | 818 | 876 |
| 12 | Metric integration and generic nef asymptotics | 821 | 879 |
| 13 | The short-interval norm-prime input for the analytic host | 825 | 883 |
| 14 | The ray-family explicit formula with its exceptional zero | 837 | 895 |
| 15 | Vanishing and the isolated non-klt divisor | 842 | 900 |
| 16 | Maximal slopes, scalar extension and measure normalization | 934 | 999 |
| 17 | Assembly of the ordinary RH argument | 967 | 1036 |
| 18 | Essential inputs and their present status | 972 | 1042 |
