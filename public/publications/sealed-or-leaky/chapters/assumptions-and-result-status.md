# Section 13: Assumptions and result status

<!-- Complete sealed-or-leaky web edition. Mathematical macros used below:
\status = \textbf{[#1]}\quad
\TV = \mathrm{TV}
\BC = \mathrm{BC}
\tr = \operatorname{tr}
\Prb = \mathbb P
\E = \mathbb E
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\fl = \lfloor#1\rfloor
\fr = \operatorname{fr}
\one = \mathbf1
\idm = \operatorname{id}
\cM = \mathcal M
\cE = \mathcal E
\cD = \mathcal D
\cK = \mathcal K
\cH = \mathcal H
\cC = \mathcal C
\fE = \mathfrak E
\fD = \mathfrak D
\lab = \texttt{#1}
\Dg = \Delta_{\mathrm{gas}}
\dd = \,\mathrm d
\Law = \operatorname{Law}
\fNS = f_{\mathrm{NS}}
\fQ = f_{\mathrm{Q}}
-->

<a id="section-13"></a>

## 13 Assumptions and result status

 <a id="reg:section"></a> The following register distinguishes mathematical representation premises from physical preparation and access premises. Each is needed only for the results that invoke it.

 <a id="source-longtable-1"></a>

| Premise | Content | Contribution and limit |
| --- | --- | --- |
| Tetralemma premises | (SO), (D), (MI), (NS) of Section [2.1](/sealed-or-leaky/the-source-tetralemma#tet:setting); (QT) optional. | Exclude completeness of each specified admissible classical readout. (D) supplies (SO); only (D), (MI), (NS) are separately necessary within that class. |
| Certification imports | Sequential likelihood model; entropy production and soundness of <a id="citation-40"></a>[[28](/sealed-or-leaky/references#bib-Bierhorst18)]; correct-dimension continuity <a id="citation-41"></a>[[29](/sealed-or-leaky/references#bib-Audenaert07)]. | Keep classical isolated side information, independent seed and explicit pass probability. The observed pass does not establish that probability or universal independence. |
| Operational closure | Complete causal record laws; alternative class contains their identity-readout surrogate. | Gives non-identifiability only in that closed class. It does not establish a physical source ontology or a finite Markov surrogate. |
| Ontic preparation model | Common measurement responses, convex-linear preparation randomization, specified trine data. | Forces distinctions between ontic preparation laws. It does not assume or prove incompleteness of a pure ray as an individual state. |
| POVM domain | All pure states and finite proper ensembles, one fixed experiment, common apparatus and mixture rule. | Gives exact and quantitative eventwise sealing tests. A nonquadratic event still needs a physically allowed reader. |
| Deterministic completion | Future record is a function of the complete initial state; readout-conditioned randomness is nondegenerate. | Requires unresolved initial information. Universal determinism itself is an additional premise. |
| Pilot constitution | Specified sector graph, P3 coherent apparatus catalogue, exporter and service rules; basis-ready census and zero residues; independent symmetric gas preparation. | Produces finite retained-record predictions. These microscopic rules are not consequences of observed quantum statistics. |
| Pilot controls | Driven coherent pulses and holds; included memory; common preparation law; quantified finite gas and drainage budgets. | Supplies ordinary stored bits. Autonomous timing to $o(1/N)$ and a relativistic implementation remain unproved. |
| Undrained limit | One monotone edge, initially empty stock, $w\in C^2$, $1-w\ge c>0$, $\mu_N\to\infty$, $\mu_N/N\to0$, $\mu_N\delta_{\rm g}\to0$. | Proves an endpoint asymptotic. General graphs, reversals and a retained reader at this accuracy require further work. |
| Deterministic CHSH | Common setting-independent initial law; Alice's record precedes and is independent of Bob's later intervention; equilibrium marginal independence; $S>2$. | Forces setting-dependent ontic response and permits mathematical signalling reweightings. Their physical preparation is not supplied. |
| Massive construction | Driven semibounded oscillator and internal-key Hamiltonians, guidance, complete equilibrium, retained stationary Alice record. | Gives finite noisy $S>2$ within the massive constitution. It is not a construction of nonequilibrium preparation. |
| Repetition | Available resets, independent trials, common laws and an implementable test. | Amplifies an operational gap. It cannot amplify an inaccessible ontic distinction into an observable one. |

 

 <a id="source-longtable-2"></a>

| Result | Quantitative conclusion | Status |
| --- | --- | --- |
| No-signalling guessing, Lemma [2.3](/sealed-or-leaky/the-source-tetralemma#tet:guess) | $\max_aP(a\mid x)\le3/2-S/4$. | Proved; coincides with <a id="citation-42"></a>[[22](/sealed-or-leaky/references#bib-Pironio10)]. |
| Hidden information, Theorem [2.4](/sealed-or-leaky/the-source-tetralemma#tet:hidden) | $H_{\min}(Z\mid T)\ge{f_{\mathrm{NS}}}(S)$; $H(Z\mid T)\ge(S-2)/2$; also ${f_{\mathrm{Q}}}$ under (QT). | Proved; conditional on the four premises. |
| Tetralemma, Theorem [2.7](/sealed-or-leaky/the-source-tetralemma#tet:tetralemma) | Exclusion; (D), (MI), (NS) separately necessary within (SO). | Proved; branching outside the scalar-outcome class. |
| Three-branch form, Proposition [2.8](/sealed-or-leaky/the-source-tetralemma#tet:trilemmafails) | False. | Proved. |
| Extracted-string translation, Corollary [3.8](/sealed-or-leaky/experimental-anchoring#exp:bierhorst) | Passing-ensemble Shannon bound $>1024-1.1\times10^{-9}$; unsmoothed min-entropy only $>39.86$. | Conditional on B-admissibility, deterministic response, seed and $\pi\ge\kappa$. |
| Raw-certificate translation, Corollary [3.10](/sealed-or-leaky/experimental-anchoring#exp:rawcor) | Passing-ensemble Shannon and deletion-smoothed bounds $>1304.97$; unsmoothed $>39.93$. | Published aggregate parameters; no extractor or source–setting independence needed. |
| Threshold test, Lemma [3.12](/sealed-or-leaky/experimental-anchoring#exp:thresholdtest) | Complete deterministic B-admissible models have pass probability $\le v^{-1}$. | Conditional frequentist bound; no lower bound on pass probability required. |
| Trine preparation bounds, Theorems [8.1](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:robust), [8.3](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:sum) | Pairwise $1/4$; three-distance sum $1/2$; robust bounds $1/4-4\epsilon$ and $1/2-13\epsilon/2$, truncated at zero. | Proved and sharp for the ideal finite table. Ontic-law distances. |
| Quantitative POVM, Theorem [9.2](/sealed-or-leaky/operational-sealing-and-quantitative-failures-of-povm-form#ctx:quantitativepovm) | $\Gamma(h)=2d(h)$; a witness uses at most $d^2+1$ pure-state occurrences. | Proved; eventwise and conditional on access. |
| Readout simulation, Theorem [5.2](/sealed-or-leaky/operational-equivalence-and-its-restricted-alternatives#op:radius) | An accessible gap $\delta$ forces worst-case error at least $\delta/2$. | Proved; does not identify a unique completion. |
| Retained pilot preparation, Theorem [11.5](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:retained) | Gap at least $1/(2N)-2\epsilon_N$ on the specified window, $N\ge2$. | Controlled finite-time lower bound; ideal floor coefficient is exact. |
| Retained pilot setting, Theorem [11.7](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signal) | Gap at least $1/N-2\epsilon_N^{AB}$ on the specified window, $N\ge3$. | Controlled finite nonrelativistic model prediction. |
| Undrained endpoint, Theorem [11.10](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:undrained) | $\mu_N(P_X-P_Z)\to5\sqrt3g/(6\kappa)$. | Proved in the specified asymptotic regime; retained-reader gap open. |
| Initial-residue repair, Proposition [11.9](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:residueobstruction) | No single independent residue law restores all monotone and return Born means. | Proved obstruction for the unchanged reset exporter; census scope. |
| CHSH reweighting, Theorem [12.1](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:budget) | Union mass $\ge(S-2)/2$; signal budget $\min\{2d,d+\kappa/2,1\}$ for $\kappa>0$. | Sharp mathematical bounds; reweighting accessibility separate. |
| Accessible sealing, Theorem [7.1](/sealed-or-leaky/conservation-of-complete-information-and-operational-sealing#op:transport) | $d_{\mathcal F_1}(\Phi_*P,\Phi_*Q)=d_{\Phi^*\mathcal F_1}(P,Q)$. | Access-relative; complete-law conservation does not imply operational conservation. |
