# Section 1: Introduction

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Sch = \mathcal S
\Cc = C_c^\infty
\Pcal = \mathcal P
\Acal = \mathcal A
\dd = \,dq
\diver = \operatorname{div}
\supp = \operatorname{supp}
\tr = \operatorname{tr}
\Id = I
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\Born = \frac{\Psi^\dagger\Psi}{\norm{\Psi}_2^2}
\CU = \mathrm{CC}
-->

<a id="section-1"></a>

## 1 Introduction

 

<a id="paragraph-1"></a>

#### Publication relationship.

 This article develops the author's control-consistency manuscript into a self-contained account of its characterization theorems. The companion exact-return paper [[15](/quantum-measurement/research/control-consistency/bibliography#bib-PortfolioReturn)] studies arbitrary Borel laws at one engineered preparation; the present theorem concerns a regular family of densities across states. Neither result establishes that actual preparations meet its statistical premise. The related measurement and event-law papers [[8](/quantum-measurement/research/control-consistency/bibliography#bib-OriginalMassive), [9](/quantum-measurement/research/control-consistency/bibliography#bib-OriginalMonograph), [10](/quantum-measurement/research/control-consistency/bibliography#bib-OriginalPilot), [12](/quantum-measurement/research/control-consistency/bibliography#bib-PortfolioEquilibrium), [13](/quantum-measurement/research/control-consistency/bibliography#bib-PortfolioPilot), [14](/quantum-measurement/research/control-consistency/bibliography#bib-PortfolioRecords)] provide programme context; their model-specific assumptions and numerical bounds are not used in any proof here. The contribution claimed in this revision is the theorem package stated and proved below, without a historical-priority claim or an assertion that its previously circulated results originate in this revision.

Schrödinger evolution transports a wavefunction, and Bohmian guidance transports a configuration. Neither equation, by itself, selects a probability distribution for that configuration. Quantum equilibrium supplies the familiar distribution proportional to the squared wavefunction norm. The question addressed here is whether a different distribution can be assigned to each wavefunction while using the *same assignment* under a specified range of physical controls.

The requirement is stronger than transporting an arbitrary initial distribution along one experiment. A distribution transported in that way can retain information about its initial preparation and the intervening control history. We instead consider an assignment whose argument is the current wavefunction alone and require it to obey the guidance continuity equation for every admitted control. We call this requirement *control consistency*. The controls in the principal result are one-body scalar potentials. The interactions between particles remain fixed.

Our main result is that a regular control-consistent assignment is necessarily <a id="eq:born"></a>


$$

 p^\Psi(q)=\frac{\Psi^\dagger(q)\Psi(q)}{{\left\|{\Psi}\right\|}_2^2}.

$$

Equation (1.1).

 The regularity assumptions concern the whole wavefunction. They do not require the value of the density at a point to depend on only finitely many derivatives of the wavefunction there. The conclusion first holds on the nowhere-zero state class. Its extension to nodal states uses an explicit weak-continuity assumption.

The proof has two parts. Scalar phase changes constrain the assignment under gradient transport. A gradient-bracket identity then gives covariance under general compactly supported coordinate transport. Fixed interactions propagate these identities between particle coordinates: a mixed difference of independently conjugated Hamiltonians isolates the mixed spatial dependence of an interaction. Connectedness of the interaction graph spreads the resulting identities to the full configuration space. Finally, local circulations preserving the wavefunction norm density force the ratio of the assigned density to that norm density to be constant.

The uniqueness problem has important antecedents. Goldstein and Struyve proved uniqueness for equivariant densities that are local functionals of the wavefunction, up to normalization [[6](/quantum-measurement/research/control-consistency/bibliography#bib-GS2007), Section 4]. Their Section 8 explicitly proposes universal equivariance and heredity as alternative characterizations and identifies the single-particle line exception. We prove a precise smooth version of the former proposal and a reduction from arbitrary configuration-space potentials to local controls with fixed interactions. The functional regularity, control quantification, and state-domain hypotheses here differ from finite-jet locality; no implication making either theorem strictly stronger is asserted. [section C](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#app:heredity) gives a separate binary-flag version of the heredity proposal.

We use the gradient-bracket identity of Abdelgalil and Georgiou [[1](/quantum-measurement/research/control-consistency/bibliography#bib-AG2026), Proposition 1, equation (10), version 2]. We reproduce its Euclidean specialization and the functional argument it supports. Only the local algebraic identity is needed, not their compact-manifold transport-group theorem. The Bohmian account of effective wavefunctions and definite apparatus configurations, and the extraction of operator statistics from experiments, are established background [[3](/quantum-measurement/research/control-consistency/bibliography#bib-DGZ1992), [4](/quantum-measurement/research/control-consistency/bibliography#bib-DGZ2004), [5](/quantum-measurement/research/control-consistency/bibliography#bib-DGTZ2005)]. Our measurement section applies that framework after the equilibrium characterization. It does not supply a new ontology of outcomes.

The main dependency chain is short: [lemma 3.1](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#lem:phase), [lemma 3.2](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#lem:transport) turn phase identities into coordinate covariance; [lemma 4.1](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#lem:mixed), [lemma 4.2](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#lem:edge) and [proposition 4.4](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#prop:graph) use the fixed interactions to obtain full scalar identities; and [proposition 3.3](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#prop:saturation) gives uniqueness by local circulation. [theorem 5.1](/quantum-measurement/research/control-consistency/translated-profiles-and-an-interacting-example#thm:profiles) reduces the physical control list, while theorems [B.1](/quantum-measurement/research/control-consistency/appendix-b-a-permutation-preserving-refinement#thm:identical) and [6.1](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#thm:spin) state the additional hypotheses for spin and symmetry. [theorem C.1](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#thm:heredity) is a separate characterization with a different statistical premise. The node approximation arguments are included in the appendices. None of these steps depends on a private research archive.
