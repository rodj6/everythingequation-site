# Appendix D: Complexity and recorded computation

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

<a id="section-D"></a>

## D Complexity and recorded computation

<a id="app:cost"></a>

  

Table 21. OII-4 median size within each selected model type. Different size units are not directly comparable.

<a id="tab:complexity"></a>   <a id="source-tabular-17"></a>

| Method | Size unit | Fixtures | Median size | Parameter upper | Observed keys |
| --- | --- | --- | --- | --- | --- |
| B | Latent dimension | 48 | 6 | 636 | 521.5 |
| E | Automaton states | 48 | 7 | 84 | 4 |
| G | Automaton states | 48 | 5 | 60 | 2 |
| H | Automaton states | 48 | 4676.5 | 56118 | 526.5 |
| P | Streaming registers | 48 | 4 | 114 | 43 |
| R | Latent dimension | 18 | 8 | 1020 | 533.5 |
| R | Automaton states | 30 | 6 | 72 | 3 |
| S | Latent dimension | 19 | 8 | 1020 | 535 |
| S | Automaton states | 29 | 6 | 72 | 3 |

 

 Automaton sizes include the reset-only type and unknown sink. Latent dimension is not a public predictive-state count. Observed keys depend on the finite audit history panel and floating belief representation. Parameter upper counts are storage-table counts, not statistical degrees of freedom.

 

An automaton's live state is a discrete current node, while a hidden-state predictor retains a posterior vector. For $k$ latent coordinates the latter can visit arbitrarily many distinct beliefs over unbounded histories, even when the hidden carrier is finite. The stored parameter array and the precision of that vector are separate costs. Observed floating state keys are a finite implementation statistic, not a canonical quotient cardinality.

The passive tree's live state contains all registers needed to update the selected features, not only its current prediction leaf. A mixture additionally stores its constituent predictor states and episode-level posterior weights. Counting a mixture as one state would conceal those costs. Parameter upper counts in the table describe the saved array structures; normalization constraints mean they are not numbers of free parameters.

  

Table 22. Recorded component-fitting times (seconds), summed over the components entering each method.

<a id="tab:times"></a>   <a id="source-tabular-18"></a>

| Method | Median per fixture | Maximum | Total |
| --- | --- | --- | --- |
| E | 0.091542 | 0.482266 | 6.150401 |
| G | 3.592791 | 21.781511 | 289.814325 |
| B | 1.424200 | 1.715476 | 68.120519 |
| P | 1.226402 | 1.655005 | 60.662023 |
| O base bank | 1.619968 | 2.218963 | 81.513990 |
| H | 0.042340 | 0.275781 | 4.446267 |
| R | 5.109376 | 23.979253 | 364.085244 |
| S | 1.561810 | 2.197742 | 74.270920 |

 

 These are preserved original timings, not new controlled runtime experiments. R and S reuse E/G/B fits, and P/O share tree fits; totals overlap and must not be added. Mixture optimization and other selector overhead are not all included.

 

 All timings were recovered from original per-component fitting logs. They share hardware and software context but were not collected as a compute-matched performance study. Portfolio sums overlap: R and S reuse the same fitted automata and hidden-state candidates, while P and O share tree fits. Repeating these totals as if each portfolio paid an independent experimental budget would overcount both evidence and component computation. The reported sums do not uniformly include selector, serialization or scorer overhead.
