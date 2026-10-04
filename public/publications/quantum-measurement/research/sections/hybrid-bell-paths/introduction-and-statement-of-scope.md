# Section 1: Introduction and statement of scope

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\Law = \operatorname{Law}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\Var = \operatorname{Var}
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\supp = \operatorname{supp}
-->

<a id="section-1"></a>

## 1 Introduction and statement of scope

 The continuity equation for a quantum configuration distribution fixes the divergence of a current, but it does not determine the timing of individual transitions. Even matching every mean directional flux leaves non-Markovian alternatives. This distinction matters when the observable is a whole measurement history rather than one terminal outcome. A conditional construction of a complete path law must specify the microscopic transition mechanism, the initial ensemble and the variables retained in the comparison.

Bell's discrete-configuration process and the minimal-rate construction are established starting points [[1](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-Bell1986), [2](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-DGTTZ2005), [3](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-Bell2005)]. For a complete ordinary configuration $X$ and a fixed orthogonal configuration basis, write <a id="eq:target"></a>


$$
J_{YX}(t)=\frac{2}{\hbar}\Im\bigl(\Psi_Y(t)^*H_{YX}(t)\Psi_X(t)\bigr),\qquad
 \lambda^B_{Y\leftarrow X}(t)=\frac{[J_{YX}(t)]_+}{w_X(t)},\quad w_X=|\Psi_X|^2.
 

$$

Equation (1).

 Here $[u]_+=\max(u,0)$, $H$ is Hermitian and $i\hbar\dot\Psi=H\Psi$. The rate is used only at a positive-weight occupied origin. The weights $w$ are a wave-defined comparison law; identifying an actual initial law with $w(0)$ is an additional preparation assumption. A designated initial law $\nu\le Cw(0)$ is also admitted. The resulting Bell process remains dominated by $Cw(t)$, although it need not itself have marginal $w(t)$.

The model studied here gives an explicit conditional route to [(1)](/quantum-measurement/research/hybrid-bell-paths/introduction-and-statement-of-scope#eq:target). Canonical bond torques supply signed packet production. Binary reactions consume packets at scalar, carrier-independent contact coefficients. Opposite species physically coexist and recombine. A finite gas evolves by deterministic flight from independently prepared positions; a marked-count coupling compares its complete contact history with Poisson contacts. These ingredients yield a signed-queue approximation whose empirical populations and integrated directional fluxes track the wave weights and currents. A second localization then turns those estimates into total variation of the designated carrier's complete path. The two localizations address different denominators and are kept separate.



<a id="section-1-1"></a>

### 1.1 What the convergence statement includes

 The comparison is on $D([0,T],V)$ with its coordinate sigma-field, where $V$ contains every ordinary configuration coordinate in the declared experiment. We use ${d_{\mathrm{TV}}}(P,Q)=\sup_A|P(A)-Q(A)|$, one half of the variation norm. A coupling with mismatch probability $p$ proves ${d_{\mathrm{TV}}}\le p$. No change of time occurs in the main limit. Thus the error controls common events involving ordering, exact jump times, stopping, null windows and physical ordinary records. The initial gas coordinates and the additional pilot carriers are retained in the microscopic state but are not part of the Bell output. Revealing the entire initial microscopic state makes the finite dynamics deterministic.

The record construction is also part of the conditional result. A static Hamiltonian transports a finite gate circuit through an engineered clock. At a copying gate that is monomial in the complete configuration basis, every fine forward current is nonnegative. The Bell path crosses that cut exactly once during the first pass, so a copy preserves the actual key at that crossing. This is a historical claim about a specified event, not a claim that the apparatus passively records every unperturbed native excursion. Later gates must preserve the copied label. A reversed clock can erase the record.



<a id="section-1-2"></a>

### 1.2 Relation to earlier work and contribution

 This manuscript revises and consolidates the author's earlier pilot-medium paper [[4](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-PilotPrior)] and its monograph treatment [[5](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-Monograph)]. It gives a standalone statement of the statistical and interaction premises, complete kinetic and nodal arguments, explicit comparison spaces, and a consolidated treatment of autonomous records. The core gas, recombination, tracking and record constructions were developed in that earlier work; this revision makes no new priority claim for them.

The marked-gas estimate uses the elementary Bernoulli–Poisson comparison underlying classical Poisson approximation [[6](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-LeCam1960)]; the additional step is its application through the same causal reaction device. Density-dependent process limits provide background [[7](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-Kurtz1970)], but do not replace the proof below, whose fast reaction scale and vanishing populations require special estimates. Nodal existence for Bell processes has been treated in substantially greater generality by Georgii and Tumulka [[8](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-GeorgiiTumulka2005)]. The finite-graph argument needed here is included explicitly. The autonomous gate Hamiltonian uses Feynman's computational-clock idea [[9](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-Feynman1986)] and the engineered perfect-transfer couplings of Christandl and collaborators [[10](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-Christandl2004)]. Their role is separated from the present fine-current historical-record argument.



<a id="paragraph-1"></a>

#### Fixed domain and physical premises.

 Each experiment has a finite ordinary graph, a bounded piecewise continuously differentiable $H(t)$, bounded-variation currents and a fixed finite physical horizon $[0,T]$. Pilot resources grow; the graph, $H$ and $T$ do not. The model postulates a particular force and reaction catalogue, scalar response, initial carrier calibration and spatial independence. It provides a conditional realization within that catalogue. A universal derivation of the Born law from arbitrary initial states, a demonstrated material implementation, an optimal resource bound and a unique empirically selected microscopic theory are separate questions.
