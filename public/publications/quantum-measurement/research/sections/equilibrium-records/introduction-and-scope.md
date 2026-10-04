# Section 1: Introduction and scope

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\E = \mathbb E
\Prb = \mathbb P
\TV = d_{\rm TV}
\id = \operatorname{id}
\dd = \,\mathrm d
\cH = \mathcal H
\cS = \mathcal S
\norm = \left\|#1\right\|
\pos = [#1]_+
\Ncdf = \mathsf F
\Ntail = \overline{\mathsf F}
-->

<a id="section-1"></a>

## 1 Introduction and scope

 <a id="sec:frontier"></a> The usual equilibrium analysis of quantum measurement relates a system–apparatus unitary to an outcome POVM. A complete finite apparatus model also has to specify how a pointer moves, what remains after a null result, how a record is copied before its working register is reset, and how an internal clock supplies the prescribed controls. The historical question is sharper than agreement of final pointer frequencies: does the final archive still report that apparatus's own earlier declaration throughout a promised holding interval?

We address these questions in one specified model. Its state is a full spinor wave and finitely many actual massive positions. The wave obeys a common Schrödinger Hamiltonian; positions obey the Bohmian guidance equation; the complete initial position distribution is the squared norm of the complete initial wave. Input-independent clock and apparatus preparations form a finite supplied stock. These are hypotheses, including the Born equilibrium hypothesis. The theorem is an implementation and error-control result under them.



<a id="section-1-1"></a>

### 1.1 Relation to established work and the earlier version

 Bohm's measurement analysis and the equilibrium programme of Dürr, Goldstein and Zanghì establish the background relation between configuration dynamics and quantum measurement statistics [[1](/quantum-measurement/research/equilibrium-records/bibliography#bib-BohmI), [2](/quantum-measurement/research/equilibrium-records/bibliography#bib-BohmII), [3](/quantum-measurement/research/equilibrium-records/bibliography#bib-DGZeq), [4](/quantum-measurement/research/equilibrium-records/bibliography#bib-DGZoperators)]. Beck and Lazarovici give a recent systematic account of the POVM theorem and its preparation and apparatus assumptions [[5](/quantum-measurement/research/equilibrium-records/bibliography#bib-BeckLazarovici)]. In particular, a state-dependent change of apparatus is not the same fixed experiment on an unknown input. None of the present claims makes equilibrium an output of deterministic dynamics from arbitrary initial laws.

Autonomous quantum control with a finite clock and quantified backreaction has substantial independent precedent, including the finite-dimensional quasi-ideal clock of Woods, Silva and Oppenheim [[6](/quantum-measurement/research/equilibrium-records/bibliography#bib-WoodsClock)]. The clock used here is instead a continuous massive coordinate with positive kinetic energy. Its comparison estimate is in pointer-weighted derivative norms and retains the clock itself. The reason for the stronger norm is the subsequent absolute-current estimate for a designated physical archive surface. No priority claim for autonomous control, Bohmian measurement analysis or energy-penalty protection is intended.

This is a revision and consolidation of *A Massive Configuration Completion of the Quantum Measurement Programme*, version 2, dated 15 September 2026 [[7](/quantum-measurement/research/equilibrium-records/bibliography#bib-PriorMassive)]. The corresponding construction also appears in Chapters 28–31 of the author's monograph [[8](/quantum-measurement/research/equilibrium-records/bibliography#bib-Monograph)]. The core proofs are reproduced here, with an explicit symbolic-history observable and its complete error estimates. The revision makes no claim that the inherited construction is newly discovered or independently peer reviewed. Its mathematical content can be assessed from the stated equations without adopting the broader terminology of that programme.



<a id="section-1-2"></a>

### 1.2 The result in outline

 For a finite-dimensional unknown input, any inaccessible reference, and each fixed finite admitted programme on $[0,T]$, Theorem [8.3](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#thm:closure) gives an exact autonomous model and separate bounds 

$$

 E_{\rm out}=\min\{1,\varepsilon_0+\epsilon_{\rm gate}
                  +\sum_j\sqrt{2\delta_j}\},\qquad
 E_{\rm hist}\le\min\{1,E_{\rm out}+E_{\rm arch}+E_{\rm transfer}\}.

$$

 Here $\varepsilon_0$ is the complete clock comparison, $\epsilon_{\rm gate}$ includes the specified gate/protection/feedback costs, $\delta_j$ are final display classification tails, $E_{\rm arch}$ is an absolute-current holding budget, and $E_{\rm transfer}$ pays for copying an actual record before reset. The first quantity bounds retained quantum-output trace distance, or half-diamond distance when uniform over the fixed input channel. The second bounds the stated classical histories. These are not bounds on total variation between raw configuration trajectories.

All resources are finite at a positive tolerance: the number of coordinates and material factors, their positive masses, pointer separations, interaction coefficients, protection gaps and mean initial energies. The position Hilbert spaces remain infinite dimensional, and the Gaussian wave packets have unbounded tails. The result is neither a hard energy-cutoff construction nor a uniform theorem over infinite programmes, growing inventories or arbitrarily long holding times.

Throughout, ${d_{\rm TV}}(P,Q)=\sup_A|P(A)-Q(A)|$ and quantum trace distance is $\frac12{\left\|{\rho-\sigma}\right\|}_1$; half-diamond distance uses the same factor. Every comparison identifies the same retained factors. Complete coherent vectors are retained when subsequent recombination is allowed; a classical–quantum record representation is only an output description on its declared readout cut.
