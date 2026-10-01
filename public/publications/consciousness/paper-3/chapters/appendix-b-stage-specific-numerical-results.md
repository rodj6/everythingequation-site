# Appendix B: Stage-specific numerical results

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

<a id="section-B"></a>

## B Stage-specific numerical results

<a id="app:results"></a> The tables below preserve their original study-specific denominators and primary weights. They are not pooled estimates of one population or a ranking across cohorts. OII-1–3 mean errors use their saved conservative score convention; the OII-4 endpoint uses its saved full-law numerical scores with separate event certificates. Dashes mean that the indicated control was not separately evaluated, not that its count was zero.



<a id="section-B-1"></a>

### B.1 OII-1 and OII-2



  

Table 16. OII-1 common core. The separate 705-slot expanded panel is excluded.

<a id="tab:oii1"></a>   <a id="source-tabular-14"></a>

| Acquisition/predictor | Passes /420 | Mean TV upper | All-core /28 | Red /28 |
| --- | --- | --- | --- | --- |
| active/factorized | 230 | 0.369042 | 9 | – |
| active/memoryless | 102 | 0.709150 | 3 | – |
| active/selected | 281 | 0.223891 | 12 | 15 |
| passive/factorized | 216 | 0.371787 | 10 | – |
| passive/memoryless | 103 | 0.713242 | 3 | – |
| passive/selected | 266 | 0.218708 | 13 | 13 |

 

  

Table 17. OII-2 common core and same-data fit ablation. A dash denotes a comparison not separately executed.

<a id="tab:oii2"></a>   <a id="source-tabular-15"></a>

| Method | Passes /720 | Mean TV upper | All-core /36 | Red /36 | Unsafe   /4,990 |
| --- | --- | --- | --- | --- | --- |
| refined_active | 633 | 0.086537 | 21 | 14 | 43 |
| refined_passive | 630 | 0.078505 | 21 | 11 | 43 |
| oii1_active | 442 | 0.263312 | 14 | 21 | 85 |
| no_confirmed_constraints | 639 | 0.080784 | 21 | – | – |
| memoryless | 139 | 0.762637 | 3 | – | – |
| factorized | 502 | 0.256431 | 15 | – | – |

 

 The OII-1 common core contains 420 slots per predictor. The expanded 705-slot panel included learner-selected probes and is not substituted for that common comparison. The two OII-1 unsafe-merge searches visited different sets of histories, so their 56 and 131 witnesses are not directly comparable population rates.

OII-2's no-confirmed-constraint ablation uses the same active dataset, including observations obtained during conditional counterexample replay. It tests the added fitting constraints, not the value of those replay observations themselves. Its red and common-merge outcomes were not separately searched. OII-2's memoryless and factorized controls are retained in their documented role; they should not be confused with the separate OII-1 controls.



<a id="section-B-2"></a>

### B.2 All OII-3 V2 selectors

 The labels identify the acquisition lane and selector. “CE” is the conditional-counterexample lane, “disagreement” omits that replay, and “passive” uses passive acquisition. INC is the likelihood-selected incumbent. L is a likelihood mixture; M is the empirical minimax selector; U optimizes a confidence upper bound; SAFE applies the measured-panel replacement rule. BASE, FREE and CON retain their saved candidate-bank/constraint meanings. The OII-2 controls have the same total call allowance but their own allocation rather than the new lanes' dedicated calibration design.

  <a id="source-longtable-1"></a>

Table 18. All 32 OII-3 V2 selectors on their common 1,008-slot panel. This is not a pooled comparison with the other studies.

<a id="tab:oii3"></a>

| Lane/selector | Passes | Mean TV upper | Mean fixture-   worst | All-core /42 | Red /42 |
| --- | --- | --- | --- | --- | --- |
| ce/INC | 843 | 0.104625 | 0.376873 | 22 | 19 |
| ce/L_CON | 836 | 0.109167 | 0.373416 | 22 | 20 |
| ce/L_FREE | 836 | 0.109167 | 0.373416 | 22 | 20 |
| ce/M_BASE | 806 | 0.121151 | 0.368416 | 22 | 19 |
| ce/M_CON | 806 | 0.121151 | 0.368416 | 22 | 19 |
| ce/M_FREE | 806 | 0.121151 | 0.368416 | 22 | 19 |
| ce/SAFE_CON | 839 | 0.106148 | 0.377622 | 22 | 19 |
| ce/SAFE_FREE | 839 | 0.106148 | 0.377622 | 22 | 19 |
| ce/U_CON | 714 | 0.173406 | 0.443873 | 20 | 21 |
| ce/U_FREE | 712 | 0.173971 | 0.443829 | 20 | 21 |
| disagreement/INC | 849 | 0.110860 | 0.440686 | 19 | 22 |
| disagreement/L_CON | 847 | 0.110219 | 0.428075 | 19 | 22 |
| disagreement/L_FREE | 847 | 0.110219 | 0.428075 | 19 | 22 |
| disagreement/M_BASE | 817 | 0.121304 | 0.414699 | 19 | 22 |
| disagreement/M_CON | 817 | 0.121304 | 0.414699 | 19 | 22 |
| disagreement/M_FREE | 817 | 0.121304 | 0.414699 | 19 | 22 |
| disagreement/SAFE_CON | 826 | 0.119612 | 0.427941 | 19 | 22 |
| disagreement/SAFE_FREE | 826 | 0.119612 | 0.427941 | 19 | 22 |
| disagreement/U_CON | 705 | 0.180390 | 0.506686 | 17 | 25 |
| disagreement/U_FREE | 705 | 0.180390 | 0.506686 | 17 | 25 |
| oii2_active | 862 | 0.092766 | 0.399614 | 22 | 19 |
| oii2_passive | 871 | 0.085851 | 0.329647 | 22 | 18 |
| passive/INC | 830 | 0.118763 | 0.380715 | 22 | 19 |
| passive/L_CON | 819 | 0.112617 | 0.371972 | 22 | 18 |
| passive/L_FREE | 819 | 0.112617 | 0.371972 | 22 | 18 |
| passive/M_BASE | 819 | 0.118067 | 0.374359 | 22 | 19 |
| passive/M_CON | 819 | 0.118067 | 0.374359 | 22 | 19 |
| passive/M_FREE | 819 | 0.118067 | 0.374359 | 22 | 19 |
| passive/SAFE_CON | 830 | 0.118763 | 0.380715 | 22 | 19 |
| passive/SAFE_FREE | 830 | 0.118763 | 0.380715 | 22 | 19 |
| passive/U_CON | 737 | 0.165607 | 0.428815 | 21 | 19 |
| passive/U_FREE | 737 | 0.165607 | 0.428815 | 21 | 19 |

 



<a id="section-B-3"></a>

### B.3 All OII-4 mechanism families



  <a id="source-longtable-2"></a>

Table 19. Complete OII-4 family pass counts on the registered primary slots.

<a id="tab:family-full"></a>

| Family | Tests | R | S | B | P | O |
| --- | --- | --- | --- | --- | --- | --- |
| alternating channel | 48 | 43 | 43 | 43 | 24 | 13 |
| budget | 48 | 39 | 39 | 39 | 48 | 48 |
| challenge | 48 | 2 | 2 | 2 | 48 | 24 |
| checksum protocol | 48 | 42 | 42 | 43 | 45 | 31 |
| coin | 72 | 70 | 70 | 72 | 72 | 72 |
| gated queue | 48 | 48 | 48 | 43 | 31 | 18 |
| hidden belief | 48 | 48 | 48 | 48 | 16 | 16 |
| joint | 72 | 72 | 72 | 72 | 62 | 62 |
| leaky occupancy | 48 | 47 | 47 | 47 | 44 | 33 |
| lock | 48 | 46 | 46 | 46 | 46 | 46 |
| mod counter | 48 | 48 | 48 | 48 | 35 | 29 |
| mode register | 48 | 48 | 48 | 40 | 23 | 22 |
| parity | 72 | 72 | 72 | 72 | 72 | 72 |
| probe | 48 | 48 | 48 | 48 | 33 | 22 |
| queue | 48 | 48 | 48 | 48 | 48 | 48 |
| receiver | 48 | 32 | 32 | 32 | 48 | 48 |
| redundant | 72 | 72 | 72 | 72 | 72 | 72 |
| refractory server | 48 | 48 | 48 | 48 | 24 | 13 |
| sharedbudget | 48 | 46 | 46 | 46 | 45 | 46 |
| stochastic gate | 48 | 48 | 48 | 48 | 42 | 42 |
| transaction buffer | 48 | 48 | 48 | 48 | 44 | 44 |
| weak | 48 | 48 | 48 | 48 | 48 | 48 |

 



<a id="section-B-4"></a>

### B.4 Deduplication sensitivity



  

Table 20. Two retrospective deduplication sensitivities; neither replaces the 1,152-slot primary analysis.

<a id="tab:dedup"></a>   <a id="source-tabular-16"></a>

| Method | Literal passes /1,140 | Behavior passes /1,135 | All-core /48 |
| --- | --- | --- | --- |
| R | 1052 | 1048 | 37 |
| S | 1052 | 1048 | 37 |
| E | 902 | 898 | 28 |
| G | 556 | 553 | 15 |
| B | 1042 | 1038 | 36 |
| P | 958 | 954 | 24 |
| O | 858 | 854 | 23 |
| H | 1 | 1 | 0 |

 

 Finite behavior means equality for all possible output strings at the matched horizon, not equality only on paths of one particular source. Calibration-matching contexts remain included. All-core counts are unchanged. 

 Removing duplicate within-fixture specifications or finite policy behaviors changes the primary weighting. This table is therefore a retrospective sensitivity only. It retains specification matches with calibration; deduplication is not a leave-calibration-out test. All-core fixture pass counts are unchanged because removal of an identical duplicated test cannot alter whether every distinct core context passed. The reported decimal law scores are those already stored; no models were refitted for the sensitivity.
