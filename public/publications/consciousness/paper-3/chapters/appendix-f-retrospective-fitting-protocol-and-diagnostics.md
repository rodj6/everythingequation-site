# Appendix F: Retrospective fitting protocol and diagnostics

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

<a id="section-F"></a>

## F Retrospective fitting protocol and diagnostics

<a id="app:sensitivity"></a> 

<a id="section-F-1"></a>

### F.1 Timing, input boundary and reproduction

 The governing JSON protocol was locally hashed at 18:47:40 UTC on 29 September 2026, before extended fitting. It fixed the 11 outcome-selected failures, four hash-selected passing controls, all latent sizes, six seeds per size, both endpoint budgets and the public selector. It was not an external preregistration. All 360 fit files were committed by 18:54:02; all 15 fixture selections were committed at 18:54:04 before new core evaluation. The original cohort had already been revealed. The local ordering makes the new candidate selection reproducible, but cannot remove that context exposure.

Start zero uses the original first four SHA-256 bytes of the fixture identifier, `:HMM:`, and latent size. Restarts one through five use the prefix `P3-SENS-v2:` followed by fixture, size and restart. Initial row distributions, numerical floors, pseudocounts, expected-count updates and update-before-return convention match [Subsection A.4](/consciousness/research/paper-3/appendix-a-implementation-details-and-the-exact-role-of-each-learner#app:em). A saved snapshot is taken after update 60, or at an earlier tolerance stop. All 60 same-seed short endpoints on the 15 fixtures match original parameters exactly. The extended runs total 119,521 updates. [Table 24](/consciousness/research/paper-3/appendix-f-retrospective-fitting-protocol-and-diagnostics#tab:sensitivity-stopping) gives their actual stop outcomes.

The worker receives only a fixture identifier, public fitting/calibration records, size, seed, restart and cap. After numerical imports, its runtime audit hook denies file/directory, subprocess and network creation events; an attempted file read is recorded as denied in every worker. Orchestration supplies the fixed data; the source-aware scorer is a separate later step. The hook is an inspected execution boundary, not a proof against every possible software side channel or author influence.

 

Table 24. Realized extended-fit stopping behavior, using the unchanged likelihood-change tolerance and 600-update cap.

<a id="tab:sensitivity-stopping"></a> <a id="source-tabular-19"></a>

| Set | $k$ | Fits | Tolerance met | At cap | Updates |
| --- | --- | --- | --- | --- | --- |
| Failures | 2 | 66 | 60 | 6 | 12–600 |
| Failures | 4 | 66 | 53 | 13 | 12–600 |
| Failures | 8 | 66 | 40 | 26 | 12–600 |
| Failures | 16 | 66 | 19 | 47 | 219–600 |
| Controls | 2 | 24 | 18 | 6 | 25–600 |
| Controls | 4 | 24 | 14 | 10 | 28–600 |
| Controls | 8 | 24 | 11 | 13 | 34–600 |
| Controls | 16 | 24 | 4 | 20 | 290–600 |

 

 Across 360 fits, 219 meet the tolerance and 141 reach the cap. A tolerance stop is not a proof of a stationary point or global optimum; a cap stop does not prove mathematical nonconvergence. 

Each fitting run exports its likelihood trace, final parameter rows and short-budget snapshot. Calibration NLL is recomputed at both endpoints. Training trace values precede the M-step update, whereas endpoint likelihoods are evaluated on the returned parameters. The latter distinction is retained in the data. The fitting objective, calibration objective and core-worst error are reported separately; descriptive candidate-level correlations in the supplement are not independent-sample tests.



<a id="section-F-2"></a>

### F.2 Checks and bank scope

 The independent batched-forward checker recalculates fitting/calibration NLLs for both endpoints and 17,280 new endpoint/core discrepancies. Maximum differences from the execution/scoring paths are $6.67\times10^{-15}$ for NLL and $1.78\times10^{-15}$ for core TV. It checks row normalization, the first eligible stopping iteration, public tie order, source/input hashes and commitment order. Source laws use exact rational propagation; fitted laws use floating arithmetic.

For each of the eight originally obstructed banks, the original event is evaluated against the expanded bank with integer-outward arithmetic on exactly normalized stored decimal rows. The largest event enclosure width is below $5.54\times10^{-14}$. Three lower bounds remain above 0.15. Failure of an old witness for another expanded bank does not demonstrate mixture adequacy, and no exhaustive expanded-bank minimax search is claimed. Original certificates and primary scores remain unchanged.



<a id="section-F-3"></a>

### F.3 Explicit challenge traces

 The four rows in [Table 25](/consciousness/research/paper-3/appendix-f-retrospective-fitting-protocol-and-diagnostics#tab:challenge-traces) display the prepared-bit contrast at a fixed observed challenge. Source probabilities are exactly one for the indicated response. The original selected HMM probabilities are nearly insensitive to the bit, even though their posterior distributions distinguish different challenge outputs. For fixed challenge and nuisance preparation bit, mean posterior TV across the two prepared-bit settings is $0.027250$ and $0.005738$ in the old models, compared with $0.744662$ and $0.992887$ in the selected extensions. These are within-model distances, not a coordinate alignment between different fitted latent spaces.

 

Table 25. Four explicit source-revealed first-response traces. After the one-pair history $(a,o)=(0,0)$, the source assigns probability one to the listed correct output.

<a id="tab:challenge-traces"></a> <a id="source-tabular-20"></a>

| Variant | Prep. | History | Next $a$ | Correct $o$ | S prob. | P prob. | $S^+$ prob. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0,0 | (0,0) | 3 | 0 | 0.526485 | 0.999835 | 0.991240 |
| 0 | 1,0 | (0,0) | 3 | 1 | 0.471762 | 0.999798 | 0.990170 |
| 1 | 0,0 | (0,0) | 2 | 2 | 0.469299 | 0.999775 | 0.990706 |
| 1 | 1,0 | (0,0) | 2 | 3 | 0.528899 | 0.999798 | 0.991708 |

 

 The history has exact source probability $1/4$ in each row. All 128 first-response action rows and retained posterior vectors are supplied in the diagnostic JSON. 

The diagnostic evaluates all 64 first-response preparation/challenge/action rows for each of the two fixtures and checks their source outputs against all 3,840 corresponding fitting events. On original-core prefixes it also averages conditional row TV over source histories, separately for challenge and response phases. For the single-match fixture, the old/new response-phase values are $0.132974/0.061030$ and challenge-phase values $0.059775/0.084875$; for the offset-match fixture they are $0.159240/0.011235$ and $0.057942/0.098644$. These phase diagnostics locate prediction errors but are not additive decompositions of complete-law TV.

The receiver's source carrier is a prepared bit and a clock capped at its reveal delay; the budget carrier contains remaining tokens and a prepared bit. They differ from the immediate challenge/response cycle. Both targeted selected failures are repaired by extended fitting, so this revision does not propose one persistent-memory explanation for all three regression families.
