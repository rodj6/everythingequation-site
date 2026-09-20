# Appendix D: Exact finite matrices and reproducibility

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

<a id="app:matrices"></a> 

<a id="section-D-1"></a>

## D.1 Boundary data for the five O1 profiles

<a id="section:matrices:boundary-data-for-the-five-o1-profiles"></a> The following matrices, together with the stated basis conventions, determine every $d,D,K$ and spectral projector in [Chapter 12](/consciousness/monograph/finite-incidence-recurrent-response-and-physical-access#ch:o1). They are reconstructed from the relation lists in the O1 source <a id="citation-54"></a>[[39](/consciousness/monograph/bibliography#bib-RodgersO1)], not from a fit to the desired spectra. Vertices are ordered $0,1,2,3$. Higher-dimensional cells are ordered lexicographically after increasing-label orientation. Write $B_1:C_1\to C_0$ and $B_2:C_2\to C_1$ for their alternating-face boundary matrices.

In this grading, 

$$

d=\begin{pmatrix}0&B_1&0\\0&0&B_2\\0&0&0\end{pmatrix},\quad
D=d+d^*,\quad
K=\operatorname{diag}(B_1B_1^*,B_1^*B_1+B_2B_2^*,B_2^*B_2).

$$

 Empty face blocks are omitted in seven-dimensional cases. The retained projection selects the two root vertices and the root edge $01$.



<a id="paragraph-3"></a>

### V2_02

<a id="section:matrices:v2-02"></a> Edge basis: $(01,\ 02,\ 03)$. 

$$

B_1=\left(\begin{matrix}-1 & -1 & -1\\1 & 0 & 0\\0 & 1 & 0\\0 & 0 & 1\end{matrix}\right)

$$





<a id="paragraph-4"></a>

### V2_34

<a id="section:matrices:v2-34"></a> Edge basis: $(01,\ 12,\ 13)$. 

$$

B_1=\left(\begin{matrix}-1 & 0 & 0\\1 & -1 & -1\\0 & 1 & 0\\0 & 0 & 1\end{matrix}\right)

$$





<a id="paragraph-5"></a>

### V2_04

<a id="section:matrices:v2-04"></a> Edge basis: $(01,\ 02,\ 03,\ 12,\ 13)$. Face basis: $(012,\ 013)$. 

$$

B_1=\left(\begin{matrix}-1 & -1 & -1 & 0 & 0\\1 & 0 & 0 & -1 & -1\\0 & 1 & 0 & 1 & 0\\0 & 0 & 1 & 0 & 1\end{matrix}\right),\qquad B_2=\left(\begin{matrix}1 & 1\\-1 & 0\\0 & -1\\1 & 0\\0 & 1\end{matrix}\right)

$$





<a id="paragraph-6"></a>

### V2_11

<a id="section:matrices:v2-11"></a> Edge basis: $(01,\ 02,\ 03,\ 12,\ 13)$. Face basis: $(012,\ 013)$. 

$$

B_1=\left(\begin{matrix}-1 & -1 & -1 & 0 & 0\\1 & 0 & 0 & -1 & -1\\0 & 1 & 0 & 1 & 0\\0 & 0 & 1 & 0 & 1\end{matrix}\right),\qquad B_2=\left(\begin{matrix}1 & 1\\-1 & 0\\0 & -1\\1 & 0\\0 & 1\end{matrix}\right)

$$





<a id="paragraph-7"></a>

### V2_29

<a id="section:matrices:v2-29"></a> Edge basis: $(01,\ 02,\ 03,\ 12,\ 13)$. Face basis: $(012,\ 013)$. 

$$

B_1=\left(\begin{matrix}-1 & -1 & -1 & 0 & 0\\1 & 0 & 0 & -1 & -1\\0 & 1 & 0 & 1 & 0\\0 & 0 & 1 & 0 & 1\end{matrix}\right),\qquad B_2=\left(\begin{matrix}1 & 1\\-1 & 0\\0 & -1\\1 & 0\\0 & 1\end{matrix}\right)

$$



For distinct eigenvalues in $\Lambda={\operatorname{Spec}} K$, the exact projectors are 

$$

E_\lambda=\prod_{\mu\in\Lambda\setminus\{\lambda\}}
\frac{K-\mu I}{\lambda-\mu}.

$$

 These polynomial formulas avoid numerical choices within degenerate eigenspaces. Applying them to the displayed boundary data yields the ranks in [Table 12.1](/consciousness/monograph/finite-incidence-recurrent-response-and-physical-access#tab:o1). Full $d,D,K,P_R,E_\lambda$ arrays are included in the companion machine-readable results.



<a id="section-D-2"></a>

## D.2 Signed relabelling

<a id="section:matrices:signed-relabelling"></a> A vertex permutation transports every oriented simplex with the sign of the induced reordering of its vertices. Let $U$ be the resulting signed permutation on the chain carrier. Alternating face deletion gives $d'U=Ud$. Orthogonality then gives $D'U=UD$, $K'U=UK$, and $P_R'U=UP_R$ when root provenance is transported as well. Hence spectral projectors and cross-block ranks intertwine. Reassigning the retained root after a permutation would be a different model, not a relabelling test.

The verifier checks all 24 vertex permutations for each of the five profiles. It also checks $d^2=0$, orthogonality and completeness of the projectors, the exact characteristic spectra, and the current-support identities. These 120 signed transports certify the finite arithmetic in the supplied basis convention; they do not establish an unstated physical actuator law.



<a id="section-D-3"></a>

## D.3 The recurrent two-bit calculation

<a id="section:matrices:the-recurrent-two-bit-calculation"></a> With states ordered $00,01,10,11$, the transition matrix in [Equation 19.2](/consciousness/monograph/a-fully-worked-finite-vessel#eq:twobitT) is reconstructed by multiplying the two independent noise probabilities. It is stochastic and nonsingular. Direct row differences give the delayed-observation matrix in [Equation 19.3](/consciousness/monograph/a-fully-worked-finite-vessel#eq:twobitmetric). If the first future state is observed exactly and all later outputs are produced by common Markov processing of it, the complete delayed-path TV equals the TV between those first-state laws: projection gives the lower bound and common processing gives the upper bound.

The verifier enumerates delayed passive paths of lengths one through three and checks that equality exactly. It separately checks that allowing exact present-state reports distinguishes every two current states with TV one. Thus both matrices are correct for their explicitly different experiment grammars; neither is silently substituted for the other.

The noisy update has an injective finite lift. On $(A,B,n_A,n_B)$ use 

$$

(A,B,n_A,n_B)\longmapsto
(B\oplus n_A,A\oplus n_B,n_A,n_B).

$$

 The retained noise bits recover the old $A,B$, so the map is a permutation on 16 basis states. Fresh noise and subsequent archive receivers must be provided for each finite step. This implements the stated transition law from its prepared noise ensemble without inserting a consciousness-dependent force.



<a id="section-D-4"></a>

## D.4 What the executable package checks

<a id="section:matrices:what-the-executable-package-checks"></a> The companion script performs exact rational matrix calculations for the five profiles and the recurrent vessel, the non-Born probability counterexample, the finite null/continuation benchmark, and the delayed jet example. It also performs 100 reproducibly seeded numerical stress tests of the witness perturbation inequality. Those finite numerical tests supplement the analytic proof; they do not establish a universal bound by sampling.

The package also retains the earlier finite continuation, admissibility, weak-coupling, product and spectral illustrations with their original scope. The actual SPC-2 construction has separate exact checks. A four-state intrinsic model with hidden duplicate states yields two predictive classes; its quotient reproduces all 723 admitted adaptive trees through depth three from each of four initial states, giving 2,892 exact transcript-law comparisons. The five-state counterexample detects failed predictive-fibre congruence rather than silently treating trace equivalence as actual-state closure.

Further checks cover 24 relabellings of a native model, a controlled product, delayed revelation in a three-bit register, and joint-parent factorization over all 15 nonempty subsets of a four-component correlation model. The hostile constructions include horizon loss, joint-marginal blindness, unmodelled external return, forbidden action concatenation, report nonseparation, incompatible regimes, decomposition and time-scale changes, incomplete recurrence catalogues, and the three-factorization symmetry obstruction. The process-lineage examples include growth, shrinkage, disjoint endpoint material supports after gradual replacement, copying, splitting, merging, repair, true qualification gaps and censored observation windows.

The integration checks verify the weak native-mechanism return formula at exact rational couplings, including the intermediate $g=1/2$ case in which two present states share a native future profile. Qualification is evaluated in the actual protocol/resource type, so exhausted types cannot borrow live-type return witnesses. The physical counterchecks distinguish ideal from spatially noisy status records, include wrong-plateau feedback tails, and show why equivariance alone does not protect archives.

These are finite mathematical checks and illustrative countermodels, not measurements of awareness or a proof-assistant verification of every theorem. The scripts expose the premises they assume, including the physical mechanism and route certificates. No neural recording, subjective state, or hidden model activation was measured in these calculations. Assessment of the psychophysical laws requires the independently constrained evidence discussed in Chapter [23](/consciousness/monograph/evidence-identification-and-discriminating-tests#ch:evidence).
