# Chapter 23: Evidence, identification, and discriminating tests

<!-- Fixed Version 2 source. Mathematical macros used below:
\headrulewidth = 0pt
\chaptermark = \markboth{\thechapter\quad #1}{}
\R = \mathbb R
\C = \mathbb C
\N = \mathbb N
\E = \mathbb E
\HH = \mathcal H
\BB = \mathcal B
\PP = \mathcal P
\ZZ = \mathcal Z
\id = \mathrm{id}
\dd = \,\mathrm d
\TV = d_{\mathrm{TV}}
\tr = \operatorname{tr}
\supp = \operatorname{supp}
\rank = \operatorname{rank}
\im = \operatorname{im}
\Fix = \operatorname{Fix}
\Spec = \operatorname{Spec}
\Law = \operatorname{Law}
\Var = \operatorname{Var}
\osc = \operatorname{osc}
\diag = \operatorname{diag}
\Span = \operatorname{span}
\SCC = \operatorname{SCC}
\ket = \lvert #1\rangle
\bra = \langle #1\rvert
\ip = \langle #1,#2\rangle
\norm = \lVert #1\rVert
\abs = \lvert #1\rvert
\status = \par\noindent\textit{Status: #1.}\par
\doi = \href{https://doi.org/#1}{\nolinkurl{doi:#1}}
\spctwo = \textsf{SPC-2}
\spcone = \textsf{SPC-1}
\source = \Omega_{\mathrm{src}}
\unsplit = \mathsf{U}
\one = \mathbf 1
-->

<a id="ch:evidence"></a> 

<a id="section-23-1"></a>

## 23.1 One joint experiment, several kinds of claim

<a id="section:evidence:one-joint-experiment-several-kinds-of-claim"></a> A first-person report and a neural or computational measurement are different access routes to the research question, but they are not automatically independent data. Both may depend on attention, memory, preparation, the task, and prior instructions. The appropriate statistical object is a joint law under a specified intervention, not a direct sum that assumes independence without evidence.

For physical latent state $x$, proposed phenomenal state $\phi$, intervention $i$, physical measurement $n$, and report $r$, one possible schema is <a id="eq:jointdata"></a>


$$

P(n,r\mid i)=\int P(n\mid x,i)Q(r\mid\phi,x,i)
\,\mu({\,\mathrm d}\phi\mid x,i)P({\,\mathrm d} x\mid i).

$$

Equation (23.1).

 The displayed factorization is a model assumption, not a universal law. In a strict SPC-2 realization, $\mu$ is the point assignment induced by the predictive profile, and $Q$ must agree with the supplied physical report channel. A more general rival may use a different latent structure. Comparing them requires fixing which channels and conditional independences are independently constrained.

A datum should therefore carry at least its experimental condition, its physical measurement procedure, its report procedure, and its uncertainty. An interpretation such as “awareness remained while the ego disappeared” adds a claim about the relationship between these variables. It should not replace the original report. Preserving the distinction allows the data to challenge the interpretation rather than merely repeat its vocabulary.



<a id="section-23-2"></a>

## 23.2 Descriptor adequacy before ontological inference

<a id="section:evidence:descriptor-adequacy-before-ontological-inference"></a> The scalar aperture theorem provides a useful first test. Freeze a descriptor $p$, an independently nominated target $r$, and a tolerance. Repeated preparations estimate whether conditions with the same $p$ nevertheless differ in $r$. Under verified error bounds, a sufficiently large within-fibre contrast rejects the asserted bridge. This is more informative than fitting a new decoder to every discrepancy.

With continuous descriptors, exact equality of fibres is usually not directly observable. A practical test must specify neighborhoods and regularity. Suppose the proposed bridge is $L$-Lipschitz and observed descriptor values differ by at most $\eta$, with target errors at most $\epsilon$ and model error at most $\delta$. Then a pair must satisfy 

$$

|\widehat r_i-\widehat r_j|\le L\eta+2\delta+2\epsilon.

$$

 Violation rejects that calibrated Lipschitz bridge, not all conceivable bridges. The constants cannot be selected after observing the violation without changing the test.

For distributional reports, use a declared probability distance and compare complete distributions rather than single outcomes. A missing report may be one of the outcomes. Physical instrument error, finite-sample uncertainty, and the hypothesized approximation error have different sources and should not be merged into an unexplained residual term. A purported consciousness estimator that has not established those distinctions has not yet earned an ontological interpretation.



<a id="section-23-3"></a>

## 23.3 Finite witness calibration

<a id="section:evidence:finite-witness-calibration"></a> A nominated report feature can sometimes be represented by a finite observable witness. The evaluation matrix in [Theorem 10.2](/consciousness/monograph/internal-representation-and-self-referential-records#thm:robust-witness) makes the issue concrete: full column rank provides uniqueness, while its smallest singular value controls sensitivity. A nearly singular design can fit observations while leaving the inferred witness extremely unstable.

Consequently calibration should choose preparations that distinguish the candidate observable directions and should report conditioning, not only fit error. Positivity and actual physical recordability remain separate constraints. A Hermitian solution of the linear equations is not automatically an accessible measurement in the realized apparatus. A centralizer solution is not automatically a stable memory under actual dynamics.

The measurement constructions provide a principled way to carry apparatus error into such an identification exercise. A bound on the complete retained quantum state can control errors in nominated expectations; a historical archive bound controls whether an earlier declaration is still faithfully displayed. These estimates are not interchangeable. The end-to-end link is useful precisely because it keeps the physical cost of evidence visible.



<a id="section-23-4"></a>

## 23.4 What A2 would have to match

<a id="section:evidence:what-a2-would-have-to-match"></a> To assess the relational content law, an experience-facing structure must be specified without simply defining it as the computed predictive profile. One might nominate pairwise discrimination relations, reported similarity, temporal succession judgments, or a carefully selected family of contrasts. Those observations have their own report channels and need not exhaust phenomenology.

The test is then whether one fixed structural identification accounts for the nominated relations under held-out interventions. A2 cannot be validated merely by constructing a copy of the physical profile and naming it phenomenal. The mathematical copy proves conditional realizability. Agreement with independently measured structure is the additional empirical claim.

The full-profile version of A2 has both an advantage and a cost. It preserves information that a single distance loses, including labeled transitions and distinctions between protocols. But its richness can make it difficult to falsify unless the physical realization and comparison map are tightly specified. Enlarging the profile after each failure can turn a theory into a succession of post hoc descriptions. A meaningful test freezes the relevant structure and identifies in advance which mismatch would count against it.



<a id="section-23-5"></a>

## 23.5 Conservativity and the limits of a report test

<a id="section:evidence:conservativity-and-the-limits-of-a-report-test"></a> The conservativity theorem prevents an exaggerated empirical promise. If every physical transition and report channel is already fixed, adding the aspect interpretation changes none of their probabilities. Therefore a purely physical transcript cannot discriminate the resulting model from its physical reduct solely by the added assertion of awareness.

This does not make all research within the framework empty. The choice of $R^\ast$, the adequacy of a reduced descriptor, the declared internal boundaries, and the mapping to independently elicited phenomenal relations can make substantive, vulnerable claims. Their tests may reject a particular application or motivate a revised law. What they cannot do is manufacture a difference between two models whose entire admitted transcript laws have been assumed identical.

A stronger empirical theory could add a specific independently measurable psychophysical constraint or identify a physical mechanism omitted by the current reduct. It would then have to state how that addition changes predictions or restricts admissible realizations. Such a proposal is not supplied merely by saying that consciousness must have a purpose or that a real property must appear as extra energy. An intrinsic aspect and an independent dynamical component are different theoretical possibilities.



<a id="section-23-6"></a>

## 23.6 A concrete research sequence

<a id="section:evidence:a-concrete-research-sequence"></a> For a first non-toy domain, the most defensible sequence is to fix a limited experimental repertoire and an independently grounded report feature family, identify a candidate physical model, and use held-out conditions to test descriptor sufficiency. Only then should the chosen core decomposition and A2 correspondence be evaluated. The order prevents psychophysical assumptions from being smuggled into the construction of the data.

The computational side can be checked more exhaustively. A finite candidate should be tested under all declared relabellings, protocol continuations, split and merge regimes, and boundary perturbations. The two-bit example supplies a baseline for these checks but does not substitute for the non-toy realization. A theory of an actual organism or AI must confront timing, hidden state, imperfect intervention, and inaccessible variables that the example deliberately controls.

Replication should retain failures and uncertainty. The present monograph reports no new neural-data analysis and uses no historical illustrative table as validation of the constitution. In particular, an operational signal proxy must not be called a spectral gap or pointer-sharpness merely because it is given that name. The physical measurement model must establish the identification. The standard applies equally to neuroscience, computational logs, and first-person questionnaires.

A promising first non-toy realization study would use an open whole-brain *Drosophila* connectome together with an explicitly justified dynamical model. The adult-brain connectome and a connectome-based computational model provide concrete starting points <a id="citation-46"></a>[[14](/consciousness/monograph/bibliography#bib-Dorkenwald2024), [49](/consciousness/monograph/bibliography#bib-Shiu2024)]. The aim would be to test $R^\ast$ selection: compare natural decompositions, examine causal cores, assess multiscale stability, distinguish internal from external routes, and approximate native predictive structure. It would not be a programme to declare a fly conscious from its wiring diagram. A connectome does not by itself determine native dynamics, admissible interventions, or the psychophysical identification, and no such realization test or validation is reported here.
