# Appendix E: Chronology, artifact provenance and reproduction

<!-- Complete paper-3 web edition. Mathematical macros used below:
\topfraction = .92
\bottomfraction = .85
\textfraction = .08
\floatpagefraction = .78
\E = \mathcal E
\HH = \mathcal H
\BB = \mathcal B
\one = \mathbf 1
\RRC = \textsf{RRC}
\RJC = \textsf{RJC}
\iid = i.i.d.
\SuiteFixtures = 48
\SuiteSlots = 1,152
\UniqueSlots = 1,140
\CalibrationOverlapSlots = 79
\CalibrationOverlapUnique = 74
\SharedCalls = 442,368
\SharedResets = 55,296
\TrainCalls = 7,680
\CalibrationCalls = 1,536
\EvidenceCalls = 9,216
\RPass = 1063
\SPass = 1063
\PPass = 970
\OPass = 869
\BPass = 1053
\RMean = 0.054913
\SMean = 0.054918
\PMean = 0.099072
\OMean = 0.152015
\BMean = 0.064684
\TV = \operatorname{TV}
\Law = \operatorname{Law}
\rad = \operatorname{rad}
\argmin = \operatorname{arg\,min}
-->

<a id="section-E"></a>

## E Chronology, artifact provenance and reproduction

<a id="app:chronology"></a><a id="app:provenance"></a> **Research archive availability.** The original research archives described below are separate from this web edition and were not supplied with it. This edition reproduces the manuscript's full reported methods and results.





<a id="section-E-1"></a>

### E.1 Prospective records and documented exceptions

 The timestamps below are UTC values in locally saved manifests and orchestration records, not independent public timestamp attestations. They support the sequence of commitments and scorer access within the preserved process. They cannot establish independent benchmark authorship.

<a id="source-longtable-3"></a>

Table 23. Selected chronological anchors. All entries are 29 September 2026 unless another date is shown.

<a id="tab:chronology"></a>

| Study | Event | UTC time |
| --- | --- | --- |
| RRI | Prediction lock, 28 September | 22:48:14.612368 |
| RRI | Implementation lock, 28 September | 22:55:48.293547 |
| OII-1 | Learner lock / fixture generation | 00:06:40.825433 / .835833 |
| OII-1 | Commitments / scoring start | 00:08:15.409095 / 00:08:36.673806 |
| OII-2 | Learner lock / fixture generation | 01:02:27.907231 / .929829 |
| OII-2 | Final commitment | 01:09:51.069664 |
| OII-2 | Separate scoring-start timestamp | Not recovered |
| OII-3 V1 | Lock / fixture generation | 02:28:58.720374 / .735835 |
| OII-3 V1 | Power-design defect recorded | 02:32:22.621991 |
| OII-3 V2 | New lock / new fixture generation | 02:33:33.983749 / .998730 |
| OII-3 V2 | Commitments / scoring start | 02:40:09.706374 / 02:40:11.891932 |
| OII-3 | Supplementary composition lock | 02:41:29.518857 |
| OII-4 | Learner lock / fixture generation | 04:33:28.651147 / .671469 |
| OII-4 | Composition specification lock | 04:35:29.066321 |
| OII-4 | Same-LP fallback correction | 04:40:05.088519 |
| OII-4 | Final commitment / scoring start | 04:40:25.142165 / 04:40:29.550809 |



OII-1's duplicate-UTC-keyword logging exception was repaired after fixture writing and before learner observations, without changing the private draw or predictions. Its supplementary composition lock was after main scoring and is not treated as primary prospective confirmation.

OII-2's commitment metadata and orchestration support commitment before hidden scoring, but a separate scorer-start timestamp was not recovered and is not supplied here. A development-only constructor error preceded that freeze. OII-1's post-score merge-panel clock/horizon correction did not change its common primary scores.

OII-3 V1 allocated 32 accepted samples per side under a confidence allocation for which even perfectly separated observations could attain a lower gap of only $0.279827$, below the required $0.30$. The defect was recorded during acquisition, before any hidden-law score. The unscored attempt completed 1,935,360 calls and 495,200 resets and remains preserved. V2 increased the accepted-sample target to 40, screened unattainable attempt caps, retained the $0.30$ threshold and total call budget, and drew a new private seed after re-locking. It completed 1,935,360 calls and 494,853 resets. These are not two efficacy replications of one unchanged design. OII-3's additional composition specification was locked after main scoring, unlike OII-4's prescore composition panel.

For OII-4, the final minimax tree LP was numerically classified infeasible by default presolve despite the explicit feasible point consisting of any simplex weights, zero overlap variables and risk one. Retrying the same LP without presolve passed the unchanged numerical gap tolerance. This pre-score fallback did not change the candidate laws, evidence or objective. A separate runner correction protected primary access logs from being overwritten by reproduction. A later array-versus-tuple verification repair changed no fitted model. An unfinished preliminary execution is not counted as a second scored cohort.



<a id="section-E-2"></a>

### E.2 Source-to-manuscript chain

 The supplied supplement preserves the frozen evidence archive unchanged. Its source-to-table map separates five levels: original public observations and committed models; original scored laws or certified events; frozen reaggregation; generated manuscript tables; and the present transcription checks. An assertion passing at one level is not a replay of every lower level.

The manuscript package includes the original freeze ZIP, its SHA-256 digest, unchanged canonical CSV and JSON tables, the scripts generating every numerical table and plot, the methods-reporting amendment, and a mapping from the 22 frozen claim IDs to the manuscript. The underlying freeze contains the selected original protocols, source code, score rows, candidate models, diagnostics and archive-verification records. Its included original-study reproduction reports retain their original scope; they are not new independent repetitions performed for this manuscript.

The drafting pass verifies the received freeze's file manifest, regenerates tables from its saved-score summaries, separately reaggregates the manuscript-bound primary rows, checks the EM metadata correction, and checks selected exact finite analytical controls. It does not refit any learner, regenerate observations, rerun all process-law enumerations, or repeat the original access-restricted experiments. Thus that drafting-stage table rebuild is evidence of transcription consistency, not an independent validation of every underlying scorer.

The subsequent hostile audit adds a separate verification layer. New evaluator code, importing neither the original scorer nor its learner/policy helpers, enumerates all 1,152 OII-4 core source laws with exact rational arithmetic and evaluates all 15 saved component models. The 17,280 component discrepancies and 9,216 method discrepancies agree with the original results to at most $1.78\times10^{-15}$ and $1.34\times10^{-15}$, respectively. The nearest component or method core error to the 0.15 threshold is more than $5.74\times10^{-5}$ away. These floating discrepancy comparisons are not relabeled exact real-number optima.

The same audit reevaluates every original red-pool context, recomputes all 720 component calibration NLLs, checks 672 saved event evaluations using exact integer-outward arithmetic, and reconstructs all 64 method/pair composition scores. Exact source-row checks cover the 48 capacity embeddings and four public-law twin pairs; the common merge panel is reconstructed independently. OII-1–3 primary values are reaggregated from 39,096 saved rows, not re-enumerated with a new process scorer. No learner is refitted, no observation tape regenerated, and no independent benchmark authored.

A further retrospective audit compares deterministic policies by their full finite action trees, retaining preparation and horizon in the key. Bottom-up structural interning compares an action and all four child nodes, with a common terminal node; it does not rely on hash equality as a proof. This detects differently written policies with identical behavior for all output strings through the admitted horizon. It does not merge policies merely because one particular source makes their differing branches impossible. Both the original literal-specification audit and this stronger finite-behavior audit are preserved, and neither changes registered score weights.

**Web-edition publication links.** The bibliography now includes the author-supplied DOIs for the consciousness monograph and Papers 2–4. The following dated source passage records the earlier manuscript-package provenance; the publication links have since been added. Research evidence archives described in this section were not supplied with the website inputs.

 The companion Paper 2 is cited by its supplied title and version, without an invented DOI. The present draft similarly does not claim an external repository deposit that has not been supplied. The distribution archive contains a dated evidence snapshot and source hashes; any later public DOI should be added by the author after the corresponding deposit exists.



<a id="section-E-3"></a>

### E.3 Rebuilding the article

 The source package's `README.md` gives exact commands and software versions. In outline, run the standard-library table generator and numerical checker, assemble the standalone source, and use `latexmk` with pdfLaTeX and Biber. The separate standalone `.tex` embeds its bibliography and vector graphics and does not require the experiment archives to typeset. Reproducing the learning experiments, rather than typesetting or reaggregating this paper, requires the original study environments and commands preserved inside the evidence archive.

The public record should preserve the original primary panels and corrections. A future independently authored benchmark should lock its generator design and scoring contract separately from the analyst, keep the standard state portfolio and tree control frozen during scoring, and include mechanisms exposing their known contrasting strengths. It would address external validity; it would not retroactively turn this same-author study into independent replication.



<a id="section-E-4"></a>

### E.4 Sensitivity revision artifacts

 The revision adds a separate protocol, 360 fit records, public-selection commitments, postcommit core scores, paired descriptions and source-revealed challenge traces. The original hostile-audit and evidence-freeze ZIPs are retained unchanged alongside a directly extractable OII-4 archive. Re-executing a new fit in the preserved numerical environment reproduces model parameters and likelihoods; execution durations are not scientific state. The supplement distinguishes the locked fitting/selection files from later analysis and manuscript code. A local hash fixes bytes and ordering records, not an externally witnessed historical registration.
