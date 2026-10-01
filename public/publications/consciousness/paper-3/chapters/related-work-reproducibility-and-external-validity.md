# Section 9: Related work, reproducibility and external validity

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

<a id="section-9"></a>

## 9 Related work, reproducibility and external validity

<a id="sec:related"></a> 

<a id="section-9-1"></a>

### 9.1 Methodological antecedents

 Reactive probabilistic learning and model checking already motivate inducing finite state models from alternating inputs and outputs <a id="citation-10"></a>[[12](/consciousness/research/paper-3/references#bib-Mao2012MDP)]. Learned networks of communicating I/O automata provide a related relational setting <a id="citation-11"></a>[[13](/consciousness/research/paper-3/references#bib-MaoJaeger2012)]. The local IOALERGIA adaptation executed here follows a subset of this methodological lineage, with publicly documented AALpy source as its implementation reference <a id="citation-12"></a>[[7](/consciousness/research/paper-3/references#bib-AALpySource)]. Upstream implementation equivalence was not proved, and the historical source reading was not pinned to an immutable upstream commit. The adaptation's precise reset typing, smoothing and unknown-sink rules therefore form part of the tested algorithm.

Observation-table active MDP learning has both ideal and sampled-access treatments <a id="citation-13"></a>[[22](/consciousness/research/paper-3/references#bib-Tappler2019)]. Probabilistic black-box checking also combines learning, candidate-counterexample synthesis and statistical validation <a id="citation-14"></a>[[20](/consciousness/research/paper-3/references#bib-Shijubo2023)]. Those works are close antecedents for the general repair loop, not methods executed in this benchmark. No superiority over either is inferred. The OII-2/3 contribution is the recorded costed witnesses, matched fitting controls, and the limits they expose in these particular implementations.

Hidden-state likelihood estimation has a long-standing basis <a id="citation-15"></a>[[3](/consciousness/research/paper-3/references#bib-Baum1970)], and input–output predictive structures have their own theory <a id="citation-16"></a>[[2](/consciousness/research/paper-3/references#bib-Barnett2015)]. Predictive-state representations (PSRs) make a different representational choice: state is expressed through action-conditional predictions of observable future tests <a id="citation-17"></a>[[11](/consciousness/research/paper-3/references#bib-Littman2001PSR)]. The system-dynamics-matrix account clarifies the relation between predictive, finite-history and hidden-state representations <a id="citation-18"></a>[[21](/consciousness/research/paper-3/references#bib-Singh2004PSR)]. Spectral transformed-PSR learning provides a route from action–observation data to prediction and planning under its specified assumptions <a id="citation-19"></a>[[5](/consciousness/research/paper-3/references#bib-Boots2009PSR)]. Our controlled joint-instrument learner retains a posterior over fitted latent states; it is not an implemented PSR learner. Neither that spectral PSR method nor spectral HMM identification <a id="citation-20"></a>[[10](/consciousness/research/paper-3/references#bib-Hsu2012)] was executed as a comparator. Context/credit diffusion in Markovian models <a id="citation-21"></a>[[4](/consciousness/research/paper-3/references#bib-Bengio1995)] is relevant background, while the source-backed challenge diagnosis in [Subsection 6.5](/consciousness/research/paper-3/post-hoc-optimization-budget-sensitivity#p3:s05) establishes the narrower observed response-mixing defect.

Finite-data overfitting of a model-selection criterion and subsequent evaluation bias are also established issues <a id="citation-22"></a>[[6](/consciousness/research/paper-3/references#bib-Cawley2010)]. Adaptive-data-analysis work studies controlled holdout reuse under explicit assumptions <a id="citation-23"></a>[[8](/consciousness/research/paper-3/references#bib-Dwork2015)]. We implement neither a protected-reuse mechanism nor their generalization bounds. The present distinction between calibration specifications, sampled observations and withheld law scores is instead a concrete provenance audit of this record. It neither labels all adaptive development as leakage nor treats withholding scores as complete protection from shared-design bias.

Finally, intervention-respecting causal abstraction, coarse-graining of open Markov processes and quantitative probabilistic composition already have independent mathematical foundations <a id="citation-24"></a>[[19](/consciousness/research/paper-3/references#bib-Rubenstein2017), [1](/consciousness/research/paper-3/references#bib-Baez2018), [9](/consciousness/research/paper-3/references#bib-Gebler2013)]. Directed statistical deficiency has also been used for feature quality <a id="citation-25"></a>[[18](/consciousness/research/paper-3/references#bib-vanRooyen2014)]. The companion paper <a id="citation-26"></a>[[16](/consciousness/research/paper-3/references#bib-RodgersPaper2)] supplies the particular marked-instrument contract used here. We do not claim to originate those general frameworks or to re-prove their theory in this empirical manuscript. The companion intervention-law study <a id="citation-27"></a>[[14](/consciousness/research/paper-3/references#bib-RodgersPaper4)] examines conditional identification of binary realizations, recoding obstructions and a bounded SPC-2/IIT comparison. Its identification results are distinct from the finite-budget learning and selection outcomes reported here; it was not an executed benchmark comparator.



<a id="section-9-2"></a>

### 9.2 Source-to-manuscript reproducibility

<a id="p3:c22"></a> The present manuscript supplement preserves the pre-audit manuscript ZIP and the authoritative evidence-freeze ZIP unchanged, along with the canonical score exports, table-generation code, source hashes, and the updated claim-to-section map. The freeze itself contains the selected historical protocols, public data, committed models, source-reveal diagnostics and verification reports. The supplied companion-theory source is retained by hash. The companion publications are identified by the DOIs recorded in the bibliography; those identifiers do not replace the hashes of the supplied source snapshots.

The verification stages have distinct scopes. Original-stage checks evaluated record laws and finite controls. The evidence freeze reaggregated saved scores and checked selected structural and chronology claims; drafting regenerated tables and compiled the paper. The subsequent hostile audit separately reconstructed all OII-4 core laws from preserved generators and fitted parameters. This revision adds genuinely new, retrospective fits on old data, checks their short endpoints against the original code, and re-evaluates their core predictions with a separately written batched forward routine. None of these stages is an independently authored benchmark.

The original OII-1–3 mean values include conservative scoring allowances; the OII-4 scorer enumerates the rational source support without path truncation and evaluates learned laws numerically. Its selected event certificates are a separate outward-rounded check. Exact arithmetic on exported decimal scores verifies aggregation; it does not retrospectively make every process-law calculation an exact rational optimization. Similarly, byte-identical model reproduction after removing timing fields does not prove algorithmic generalization.

A bounded methods check during drafting found early stopping in the already frozen EM routine. The original code uses one initialization per latent size and at most 60 iterations, stopping after at least 12 when successive recorded training NLL values satisfy the prescribed relative tolerance. All historical model probabilities, selectors and scores are untouched. The amendment, the 192 metadata records and the original code hashes are distributed with the manuscript.



<a id="section-9-3"></a>

### 9.3 Complexity and cost

 The final suite has 720 fitted component models, shared by overlapping portfolios. Same acquisition data does not mean identical computation. The ordinary automata have median exported size seven including reset type and sink; the unmerged history control has median 4,676.5. The B selector's median latent dimension is six, but its live state is a belief vector plus clock. P has median four retained streaming registers. These are different units and are reported by model type rather than combined into a single complexity ranking.

Recorded component-fitting durations also overlap across portfolios. The median sum of E+B fitting durations is 1.561810 seconds per fixture; adding G gives 5.109376 seconds. These are original execution records, not newly timed end-to-end pipelines, hardware-independent complexity bounds or a compute-matched comparison. Selector and orchestration overhead is not uniformly included. Full size and timing conventions appear in [Appendix D](/consciousness/research/paper-3/appendix-d-complexity-and-recorded-computation#app:cost). The separate sensitivity used 360 fits and 119,521 EM updates; the sum of recorded worker durations was 1,248.15 seconds with four concurrent single-threaded workers. This is recorded fitting/endpoint-evaluation time, not a compute-matched comparison against the original full suite.



<a id="section-9-4"></a>

### 9.4 Limits on causal and external claims

 The results apply to a finite synthetic cohort, fixed horizons, fixed preparation/action alphabet and the recorded observation budgets. Longer dependencies, richer ports, different reset access, nonstationarity, arbitrary nondeterministic schedulers and natural-system noise were not covered. The sensitivity varies starts and iteration budgets on an outcome-selected subset but still uses one data realization per fixture, so it does not estimate variability over repeated training tapes. Related fixtures and exact twins intentionally violate any naive independent-slot interpretation.

No study establishes that active acquisition, explicit counterexample constraints or minimax fitting is uniformly better. The R/S result is a secondary matched ablation of a specific candidate addition, not evidence that every possible group criterion has zero value. Capacity, fitting and selector diagnoses remain restricted to the specified candidate families and registered panels. Missing witnesses leave uncertainty; the finite core and composition tests do not establish all-context adequacy.

The same-author generator and learner design is the largest external-validity limitation. Restricted programs and local locks reduce direct hidden-data access along the inspected path, but do not remove conceptual leakage, inherited design preferences or shared implementation errors. Independent code/mathematical scrutiny and an independently authored opaque benchmark would strengthen the result. The latter is a separate versioned study: benchmark authors should work from the public contract without tuning to the frozen learner's scored failures, and a separate scorer should control reveal. The present retrospective additions do not alter that requirement.

The post-hoc protocol was set after the old outcomes and critique were known. Targeting failures, reusing calibration and reporting only four hash-selected passing controls prevents a whole-cohort success or safety estimate for $S^+$. More candidates also create more opportunities to fit calibration noise. Sixty-seven of 90 extended sixteen-state runs hit the new cap, and no global optimum or absence of additional budget effects is established. These qualifications belong to the sensitivity interpretation, not to a retroactive change of the original primary scores. No study here supplies consciousness evidence; the companion's phenomenal claims remain separate. 

<a id="paragraph-6"></a>

#### Funding and collaboration.

 This research was conducted independently by Jeremy Rodgers without external research funding. The author welcomes collaboration on independent mathematical review, computational replication, physical implementation and empirical testing, particularly where specialist expertise, equipment or institutional resources are required.



<a id="paragraph-7"></a>

#### AI assistance and author responsibility.

 OpenAI GPT-family models, including configurations referred to in the research record as Astra, assisted with mathematical exploration, experimental software, analysis, literature work and manuscript drafting/editing under the author's direction. Anthropic Claude and Google Gemini contributed critique and publication-planning discussion in the surrounding programme. The actual scored learners were the software algorithms described here, not those language models acting as independent investigators. The author retains responsibility for claims, sources and the released manuscript. AI-assisted checking is not represented as independent human review, proof-assistant verification or investigator replication.
