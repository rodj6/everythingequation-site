# Section 1: The preparation question

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\Dtr = \operatorname{D}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
\pTV = \operatorname{TV}
\pVar = \operatorname{Var}
\pLaw = \operatorname{Law}
\pGam = \Gamma
\pUnif = \mathsf U
-->

<a id="section-1"></a>

## 1 The preparation question

<a id="sec:introduction"></a> Can reversible dynamics prepare a position variable for a quantum measurement while keeping the physical coordinates that recorded its earlier history? A marginal convergence statement does not answer this question. A downstream instrument may interact with an archive that still resolves the writer's initial position. Conversely, retaining an archive need not prevent conditional preparation when the complete initial law has appropriate regularity: information can remain in the archive while the writer's dyadic remainder approaches a uniform conditional law.

We construct and analyse this distinction for a finite prescribed harmonic model. A smooth split, copy and return protocol gives an exact two-coordinate map. Its Jacobian is one in reference cumulative-distribution coordinates, and it converges to a baker comparison as the Gaussian branch separation grows. The physical map, rather than a branchwise rigid-translation surrogate, is used throughout. Every archive coordinate and internal memory is retained. The source populations may be correlated and different from their wave densities.

The principal preparation theorem bounds the total variation between the final joint law and the product of a ready writer with its *actual* nuisance marginal. Its assumptions concern weak physical relative scores of the complete original conditional density. Sectional bounded variation estimates remove the density cap and avoid assuming finite Fisher information after a Gaussian quantile transformation. An explicit finite example uses $100$ preparation archives and a separate measurement receiver. We then prove an input-uniform projective-instrument estimate for an arbitrary finite internal reference, including a distinct physical copy of the earlier writer event and its subsequent retention. The common initial-box formulation charges the original tail once.

Three features delimit the positive result. First, the law regularity is conditional on every genuinely retained external variable; a good writer marginal does not suffice. Second, the return factorizes the writer's *wave*, whereas statistical readiness requires a separate estimate on the transported actual law. Third, the instrument is formulated in a declared canonical-current model with prescribed controls. The theorem does not supply the independent physical warrant for its initial statistical class or its control architecture.



<a id="section-1-1"></a>

### 1.1 Relation to established and prior work

<a id="sec:literature"></a> Equivariance and conditional wavefunctions are standard elements of the quantum-equilibrium analysis of Dürr, Goldstein and Zanghì [[7](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-DurrGoldsteinZanghi1992), [8](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-DurrGoldsteinZanghi2004)]. Equivariant uniqueness under locality assumptions, as studied by Goldstein and Struyve [[6](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-GoldsteinStruyve2007)], addresses a different question from finite preparation of an admitted nonequilibrium class. Valentini and Westman's numerical relaxation studies [[5](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-ValentiniWestman2005)] concern coarse-grained evolution. Here the target metric keeps complete fine archive coordinates, and the initial density need not equal the quantum reference.

Triangular probability transformations [[1](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-Rosenblatt1952)], bounded-variation methods for expanding maps [[3](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-LasotaYorke1973)], Gaussian information inequalities [[2](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-Gross1975)], and reversible computation with retained information [[4](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-Bennett1973)] are established antecedents. The conditional state at an actual configuration is distinguished from a reduced density matrix as in [[9](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-DurrEtAl2005Density)]. Our labelled state is compared with the standard projective instrument of quantum measurement theory [[10](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-DaviesLewis1970), [11](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-Ozawa1984)], using elementary pure-state trace-distance identities [[12](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-FuchsVanDeGraaf1999)]. This comparison is not called a diamond-norm bound: a linear completely positive actual map for arbitrary nonequilibrium laws has not been assumed or proved.

The author's earlier return-holonomy manuscript [[13](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-RodgersReturn2026)] develops an invariant-return kernel, pointwise mixing, finite-library obstructions and a retained-memory entropy identity with inverse echo. The control-consistency manuscript [[14](/quantum-measurement/research/conditional-gaussian-preparation/bibliography#bib-RodgersControl2026)] addresses uniqueness under a different statistical premise. These are contextual predecessors; neither uniqueness theorem is a premise of the deterministic preparation estimates proved here. Appendix [A](/quantum-measurement/research/conditional-gaussian-preparation/appendix-a-a-complementary-finite-regular-basin-theorem#app:regular) gives a self-contained total-variation formulation of retained memory and a complementary regular-basin argument. The contribution of the present paper is the explicit nonsingular harmonic realization, the fine-coordinate obstruction, the full conditional score/moment preparation estimate, and their compatible one-use instrument assembly. The cited October research editions are distinct from the preserved September editions and from the new companion manuscripts discussed in Appendix [B](/quantum-measurement/research/conditional-gaussian-preparation/appendix-b-physical-scope-and-relation-to-companion-work#app:scope).
