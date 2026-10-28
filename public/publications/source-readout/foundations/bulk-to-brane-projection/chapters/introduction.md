# Introduction

<div id="sec:intro">

</div>

## The physical problem

A brane observer in a braneworld model has direct access to the induced metric on the brane and to the matter fields confined there. Gravity, however, propagates in the bulk. Two questions immediately arise, and they are logically independent.

The first is a question about *states*. Does the instantaneous brane data ,  induced three-metric, its brane-intrinsic extrinsic curvature, and matter Cauchy data ,  determine the subsequent brane history? If not, the brane state is incomplete relative to brane evolution: there exist bulk configurations, physically distinct after every gauge identification has been made, which look identical now and diverge later.

The second is a question about *theories*. Suppose the answer to the first question is negative. Does it follow that a brane observer could, even in principle, discover that the world is five-dimensional? This does not follow, and the distinction is the central logical point of this paper. Failure of a deterministic flow on the *instantaneous* state is not failure of every brane-only history law. Any source theory, pushed forward through any readout map, defines a brane-only stochastic process with exactly the correct statistics; that process is generally nonlocal, non-Markovian, and state-dependent, but it is a complete theory of brane records.

We answer both questions inside the specific model that makes them sharpest.

## Contributions

1.  **An explicit same-readout witness.** We exhibit two linearized RS2 source data sets which agree exactly on the instantaneous brane readout, are *not* related by any five-dimensional diffeomorphism (their gauge-invariant Weyl curvature differs), and whose brane futures differ. Existence of such data is proved, not asserted, by an explicit Kaluza–Klein spectral construction using the positivity of the brane spectral weight $u_m(0)^2$. This establishes failure of deterministic projectability of the source flow onto the instantaneous brane Cauchy state, over the full RS2 source domain (Section [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness), Theorem [12.1](/source-readout/bulk-to-brane-projection/main-theorem#thm:main) part 1). The result is conditional on that source domain: if the model is *defined* to admit only the stationary vacuum bulk state, the witness lies outside the domain (Section [15](/source-readout/bulk-to-brane-projection/scope-and-regime-of-validity#sec:failure), item 1).

2.  **Derivation, not quotation, of the projected equation.** Section [4](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#sec:projected) carries out the Israel matching and Gauss–Codazzi projection in full, including all coefficients, signs, and dimensions, and derives the Bianchi/nonclosure relation $\nabla^\mu E_{\mu\nu}=\kappa_5^4\nabla^\mu\Pi_{\mu\nu}$, which constrains the divergence of $E_{\mu\nu}$ but not its transverse-traceless content.

3.  **Complete evaluation in two regimes.** The homogeneous sector (Section [5](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#sec:frw)) is evaluated exactly. In the linear weak-field sector (Section [6](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:linear)) two distinct claims must be kept apart: the Gaussian/Schur-complement elimination of the bulk is *exact at linear tree level*, whereas the resulting metric potentials [(75)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:potentials) are a *controlled asymptotic evaluation* valid for $r\gg\ell$ and not an exact expression at arbitrary distance. Brane bending is treated explicitly throughout.

4.  **A parameter-eliminated cross-regime relation.** Eliminating $\ell$ between the two regimes gives $A_\Psi=A_\Phi/2$ and $B=\kappa_4^4A_\Phi/24$ (Section [7](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#sec:crossregime)). We claim no literature priority for this algebraic elimination; the two input results are established. Its content is a falsifiable, parameter-free link between two otherwise independent observational sectors.

5.  **An exact operational-discrimination boundary.** Section [11](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:opeq) gives the classical pushforward lemma ,  whose proof is immediate, and whose value is interpretive rather than technical ,  together with its quantum process-tensor and closed-time-path forms, and states exactly what is and is not excluded (Section [12](/source-readout/bulk-to-brane-projection/main-theorem#sec:main)).

## Relation to established results, and this paper’s contribution

<div id="sec:relation">

</div>

The physical inputs used below are established results and are credited as such. The RS2 model and its tuning are due to Randall and Sundrum \[[1](/source-readout/bulk-to-brane-projection/references#bib-RS2)\]. The junction condition is Israel’s \[[3](/source-readout/bulk-to-brane-projection/references#bib-Israel)\], and the projected brane equation with $\Pi_{\mu\nu}$ and $E_{\mu\nu}$ is that of Shiromizu, Maeda, and Sasaki \[[2](/source-readout/bulk-to-brane-projection/references#bib-SMS)\]. The brane Friedmann equation with its $\rho^2$ and $\mu/a^4$ terms is due to Binetruy, Deffayet, Ellwanger, and Langlois \[[4](/source-readout/bulk-to-brane-projection/references#bib-BDEL)\] and Mukohyama \[[5](/source-readout/bulk-to-brane-projection/references#bib-Mukohyama1), [8](/source-readout/bulk-to-brane-projection/references#bib-Mukohyama2)\]. The linearized brane propagator, the KK spectral weight, the brane-bending treatment, and the long-distance potentials are due to Garriga and Tanaka \[[6](/source-readout/bulk-to-brane-projection/references#bib-GarrigaTanaka)\] and Giddings, Katz, and Randall \[[7](/source-readout/bulk-to-brane-projection/references#bib-GKR)\]. The four-dimensional CFT reproduction of the $1/r^3$ residue is due to Duff and Liu \[[9](/source-readout/bulk-to-brane-projection/references#bib-DuffLiu)\] and related work \[[10](/source-readout/bulk-to-brane-projection/references#bib-APR), [18](/source-readout/bulk-to-brane-projection/references#bib-PerezVictoria)\]. The influence-functional \[[12](/source-readout/bulk-to-brane-projection/references#bib-FeynmanVernon)\], Mori–Zwanzig \[[13](/source-readout/bulk-to-brane-projection/references#bib-MoriZwanzig)\], and process-tensor \[[14](/source-readout/bulk-to-brane-projection/references#bib-Pollock)\] formalisms are standard.

The distinctive contribution of this paper is their integration into a single proved chain. Concretely, we establish that $$
\text{same instantaneous brane state}
\;\not\Rightarrow\;
\text{same brane future},\tag{1}$$ by way of $$
\begin{gathered}
\text{explicit gauge-reduced bulk witness}
\;+\;
\mathcal C^{\mathrm{RS}}_{\mu\nu}=\kappa_5^4\Pi_{\mu\nu}-E_{\mu\nu}\\
+\;\text{parameter-eliminated cross-regime relation}
\;+\;\text{exact operational-discrimination boundary}.
\end{gathered}\tag{2}$$ The projected equation and the weak-field and cosmological inputs are established physics; what is new here is the rigorous combined source/readout argument \[[21](/source-readout/bulk-to-brane-projection/references#bib-Paper1), [22](/source-readout/bulk-to-brane-projection/references#bib-Paper2), [23](/source-readout/bulk-to-brane-projection/references#bib-Paper3), [24](/source-readout/bulk-to-brane-projection/references#bib-Paper4), [25](/source-readout/bulk-to-brane-projection/references#bib-Paper5), [26](/source-readout/bulk-to-brane-projection/references#bib-Paper6)\], the explicit spectral construction of the same-readout witness, the cross-regime algebraic synthesis, and the exact statement of its interpretive boundary. We make no literature-priority claim for the coefficient elimination itself.

## Scope, and what is *not* claimed

<div id="sec:scope">

</div>

RS2 is not derived from any prior structure; its selection is a physical postulate. Nothing below shows that our universe *is* a projection. The cross-regime relation does not prove five-dimensional ontology: Section [10](/source-readout/bulk-to-brane-projection/the-strongest-conventional-four-dimensional-description#sec:fourdim) exhibits a four-dimensional realization of the same weak-field residue, and Section [11](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:opeq) proves that no brane-only experiment can do better. The KK branch cut excludes only a pre-specified finite-pole free or tree-level linear alternative, not every local interacting four-dimensional theory. The long-distance weak-field expansion is not valid at $r\lesssim\ell$, and the bulk parameter $\mu$ is not fixed without a bulk-state condition. All nine conditions on which the positive results depend ,  including the bulk-state domain, the RS tuning, positive tension, the no-flux assumption, and the detuned-brane limitation ,  are collected once, in Section [15](/source-readout/bulk-to-brane-projection/scope-and-regime-of-validity#sec:failure), and are not repeated elsewhere.
