# Section 6: Post-hoc optimization-budget sensitivity

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

<a id="section-6"></a>

## 6 Post-hoc optimization-budget sensitivity

<a id="sec:sensitivity"></a><a id="p3:s02"></a> 

<a id="section-6-1"></a>

### 6.1 Why another analysis was warranted

 All 48 original 16-state fits reached the 60-update limit, with one initialization at each size. This records failure to trigger the implemented early-stop rule, not proof of mathematical nonconvergence. It nevertheless leaves a direct finite-budget explanation for part of the produced-bank gap. A subsequent Claude review identified this concern after the original results and audit were known. We therefore froze a separate retrospective protocol and retained the original OII-4 results as the primary study.

The target set is the 11 original R/S all-core failures, including the two selector misses, eight obstructed banks and one mixture-unresolved case. Four originally passing fixtures were chosen by a fixed hash ordering, not by mechanism or error magnitude. This is an outcome-selected diagnostic subset, not a random 15-system replication. No additional interaction data were collected.



<a id="section-6-2"></a>

### 6.2 Fixed fitting and public selection

 For each fixture and each $k\in\{2,4,8,16\}$, six starts were run to at most 600 updates. Start zero repeats the original initialization; five additional seeds are fixed hashes of fixture, size and restart. The instrument family, $0.01$ pseudocounts, fitting and calibration tapes, probability floors and relative stopping tolerance are unchanged. Each run retains the old-cap endpoint as well as its extended endpoint. In total, 360 fits produce 720 saved endpoint records, not 720 independent fits. All 60 original-seed short endpoints reproduce the original parameters exactly.

The principal expanded portfolio $S^+$ contains the original S bank and the 24 extended endpoints for its fixture. Average public calibration NLL selects the model; ties prefer original candidates and then the fixed size/restart order. All 15 batches and selections were committed together before any new core score was computed. The research process had already seen the original failures and source revelations; this local sequencing protects the new selection step, not author-level blindness. The protocol, worker access checks, seeds and commitments are supplied in [Appendix F](/consciousness/research/paper-3/appendix-f-retrospective-fitting-protocol-and-diagnostics#app:sensitivity) and the supplement.

Three predeclared auxiliary banks separate aspects of the sensitivity: original S plus the four extended original starts; original S plus the 24 old-cap endpoints from all starts; and the 24 extended HMMs without the old automata. The last comparison changes the bank and is not substituted for $S^+$ when it performs better.

 

Table 10. Post-hoc optimization sensitivity on the 11 outcome-selected failures. Each row uses calibration-only selection; produced counts are evaluated afterward.

<a id="tab:sensitivity-arms"></a> <a id="source-tabular-8"></a>

| Procedure | Selected | Produced | Slots | Mean worst |
| --- | --- | --- | --- | --- |
| Frozen S | 0/11 | 2/11 | 175/264 | 0.652077 |
| Longer, original starts | 3/11 | 5/11 | 201/264 | 0.429132 |
| Six starts, old cap | 3/11 | 4/11 | 193/264 | 0.583670 |
| $S^+$: six starts, long cap | 5/11 | 7/11 | 212/264 | 0.318750 |
| Extended HMMs only | 6/11 | 7/11 | 214/264 | 0.309245 |

 

 All but the last row retain the original eight-candidate S bank. Old and long caps are 60 and 600 updates; the unchanged tolerance can stop a fit earlier. The last row is an auxiliary bank restriction, not the principal sensitivity result. Original 48-system scores are unchanged. 



<a id="section-6-3"></a>

### 6.3 Five selected repairs; two remaining selection misses

<a id="p3:s03"></a> On the 11 failures, $S^+$ selects an all-core-passing model for five and its expanded bank contains at least one for seven. The frozen S figures on that same subset were zero selected and two produced successes. The selected pass count rises from 175 to 212 of 264 retained slots; mean fixture-worst TV falls from $0.652077$ to $0.318750$. These are post-hoc subset results, not a replacement 48-system headline. The four passing controls all retain their original selected models and all remain passing.

The five selected repairs are checksum protocol, alternating channel, shared budget, delayed receiver and finite budget. Extending only the original starts repairs three; multiple starts at the old cap also repair three, with different membership. The combined expansion repairs five ([Table 10](/consciousness/research/paper-3/post-hoc-optimization-budget-sensitivity#tab:sensitivity-arms), [Table 11](/consciousness/research/paper-3/post-hoc-optimization-budget-sensitivity#tab:sensitivity-fixtures)). The original candidate-production result is therefore materially sensitive to the fitting/search budget. The experiment does not isolate a universal compute effect or certify globally optimal fitting.

 

Table 11. Individual outcomes on the 11 original failures. Scores are worst core-slot TV; original labels identify the historical diagnosis, not the cause of fitting failure.

<a id="tab:sensitivity-fixtures"></a> <a id="source-tabular-9"></a>

| Fixture family | Old type | Frozen S | $S^+$ | Selected | Class |
| --- | --- | --- | --- | --- | --- |
| leaky occupancy | Sel. | 0.152781 | 0.246786 | k=08, r=1 | B |
| checksum protocol | Bank | 0.309721 | 0.053293 | k=16, r=2 | A |
| alternating channel | Mix. | 0.506213 | 0.080255 | k=08, r=2 | A |
| shared budget | Bank | 0.467788 | 0.040041 | k=16, r=2 | A |
| receiver | Bank | 0.804479 | 0.016800 | k=08, r=5 | A |
| lock 0 | Bank | 0.999991 | 1.000000 | k=02, r=2 | C |
| budget | Bank | 0.866014 | 0.066692 | k=16, r=5 | A |
| challenge 0 | Bank | 0.939187 | 0.490052 | k=16, r=3 | C |
| challenge 1 | Bank | 0.930191 | 0.315852 | k=16, r=5 | C |
| coin | Sel. | 0.196476 | 0.196476 | old 03 | B |
| lock 1 | Bank | 1.000000 | 1.000000 | old 00 | D |

 

 A: selected model passes; B: an expanded-bank individual passes but selection fails; C: none passes and best bank worst-error improves by at least 0.01; D: remaining smaller/no improvement. The two locks and challenges are labeled by their original variant. Complete hashed identifiers, fitting iterations and oracle-best candidates are in the supplement. 

The two original selection-miss fixtures remain misses under $S^+$. On leaky occupancy, a new selected eight-state model has core-worst TV $0.246786$, worse than frozen S's $0.152781$, although a produced four-state model reaches $0.065583$. Its public calibration NLL is slightly worse than the selected model's. The old-cap multi-start arm succeeds on this fixture, so additional iterations are not uniformly beneficial after selection. On the coin fixture, the original automaton retains the best observed calibration score and still fails the core panel. The HMM-only auxiliary selector passes it, giving six rather than five repaired fixtures, but discarding old candidates is a distinct bank intervention and not the principal result.

Both locks and both challenges still lack an individually all-core-passing model in the expanded bank. Best worst-slot error improves by at least 0.01 on one lock and both challenges; the second lock changes by less than that descriptive cutoff. The resulting classification is five selected repairs, two selection misses, three improved-but-failing banks, and one smaller/no-improvement bank. The thresholds define reporting categories, not significance or convergence claims.



<a id="section-6-4"></a>

### 6.4 Old certificates and new banks

<a id="p3:s04"></a> The original eight obstruction certificates remain true about their frozen banks. Four of those fixtures now have a passing extended model, showing why the old certificates cannot be carried over automatically. Re-evaluating the original event against every member of each expanded bank gives three rigorous surviving lower bounds: $0.793635$ and $0.999998$ for the two locks, and $0.415180$ for the single-match challenge. Each exceeds 0.15. The same event no longer excludes the offset-match challenge bank, although no individual candidate passes there. Its expanded-mixture adequacy remains unresolved by this nonexhaustive event check.

Of the 360 fits, 219 meet the unchanged stopping tolerance and 141 reach the 600-update cap. Among the targeted failures, 47 of 66 sixteen-state fits still reach the cap. These counts do not support a claim that the enlarged search exhausts optimization. Across all fits, endpoint fitting NLL improves relative to the old-cap snapshot on 286, calibration NLL on 221 and core-worst TV on 182; remaining cases include ties and deteriorations. The different counts, and the explicit selector misses, rule out treating likelihood improvement as guaranteed downstream adequacy.



<a id="section-6-5"></a>

### 6.5 What fails in the adaptive challenge

<a id="p3:s05"></a> The revealed challenge generator alternates a random challenge and an immediate response. At phase zero it emits $j\in\{0,1,2,3\}$ uniformly and retains $(j,b)$, where $b$ is a prepared bit. At the next call it emits $(2+b)\mathbf1\{a=(j+d)\bmod4\}$ and returns to the challenge phase; $d\in\{0,1\}$ is the variant. Public actions and outputs use the saved permutations and XOR encoding. Thus the challenge value requires one-call retention, while the prepared bit persists through the episode. This is not a long-delay challenge mechanism.

Both selected tree controls use exactly the preparation code, time modulo two and previous output as split features, together with action-conditioned rows. Those features expose the relevant distinctions directly. Each original fitting tape contains 3,840 response events, covers all 64 preparation/challenge/action rows, and has at least 39 or 45 observations per row, respectively. The observed failure is not absence of every instance of a required response combination.

The frozen selected models both have eight latent states. After the first challenge, their posterior vectors for different challenge values at a fixed preparation have TV distances above 0.997. They therefore do not simply collapse or forget the observed challenge. Their predictions instead mix the two prepared-bit-dependent matching responses: the correct matching-response probability averages $0.5037$ and $0.4988$, versus above $0.9997$ for the tree controls ([Table 12](/consciousness/research/paper-3/post-hoc-optimization-budget-sensitivity#tab:challenge-diagnostic)). Direct bit-contrasted traces are given in [Table 25](/consciousness/research/paper-3/appendix-f-retrospective-fitting-protocol-and-diagnostics#tab:challenge-traces).

 

Table 12. Source-revealed challenge diagnosis after selection. The first-response probabilities average equally over four preparations and four challenges, choosing the matching next action.

<a id="tab:challenge-diagnostic"></a> <a id="source-tabular-10"></a>

| Fixture | Frozen S | Tree P | $S^+$ | $S^+$ core worst |
| --- | --- | --- | --- | --- |
| Challenge 0 | 0.5037 | 0.9998 | 0.8667 | 0.490052 |
| Challenge 1 | 0.4988 | 0.9998 | 0.9895 | 0.315852 |

 

 The first three numeric columns are probability assigned to the deterministic correct matching response; the source value is one. They are diagnostic conditional probabilities, not extra primary tests. Both new selected models have 16 latent states; the original selected models have eight. 

The selected sixteen-state extensions improve those matching-response averages to $0.8667$ and $0.9895$. Nevertheless, core-worst errors remain $0.490052$ and $0.315852$, and their selected core-pass counts are one and zero. On original-core prefixes, response-row TV decreases, while the error in the nominally uniform challenge-output rows increases. This localizes observed prediction defects more precisely than “insufficient memory,” without proving a unique statistical cause. The receiver preserves a prepared bit behind a native delay and the budget fixture carries a remaining-token count; both selected failures disappear under the same optimization expansion. Their common repair does not establish that they shared the challenge's response-mixing mechanism.
