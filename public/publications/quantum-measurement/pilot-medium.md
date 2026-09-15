<!-- Fixed Version 2 source. Mathematical macros used below:
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

# A Deterministic Pilot Medium: Bell Path Selection and Autonomous Material Records

**Abstract.**

We give an explicit hybrid microscopic theory whose complete ordinary-material configuration converges in path-space total variation to the minimal Bell jump process on a fixed finite graph. Its primitive laws are a quadratic canonical field with one passive connection per bond, bounded conservative action export, charge-conserving binary carrier reactions, finite-speed opposite-packet recombination, and deterministic contact with a finite spatially prepared pilot gas. A finite gas supplies marked contact-history error at most $(R_NT)^2/M_N$. Physical recombination supplies reaction-path error at most $\sum_e\kappa_e\mu_N B_e/(2a_e)$. A self-contained kinetic argument then yields the complete ordinary tagged Bell path in unchanged physical time, including nodes, reversals and null intervals. For a fixed compiled clock and quantitatively calibrated initial population, the combined error is $O(N^{-1/70})$ under explicit resource scales.

Ordinary apparatus couples through one joint quadratic coherent Hamiltonian; the interaction catalogue excludes an additional force from a pilot ledger to an ordinary pointer. This is a constitutive premise. We construct an autonomous finite Hamiltonian containing source, fuel, pending and loss channels, records, reset receivers, an inaccessible reference and noncommuting feedback. At a monomial copy boundary every fine Bell current is forward on the clock's first pass, and the boundary is crossed exactly once, proving historical faithfulness of the archive. All receiving systems remain present. An explicit preparation begins in one definite ordinary configuration, using randomness only in the pilot gas. The result is a constitutive theory with controlled effective closure under its stated interaction and preparation assumptions. The finite theory remains hybrid; the supplementary smooth construction covers isolated contact modules. Exact finite-resource Bell dynamics and a Bell law conditioned on the full deterministic pilot microstate are outside the result. 

 



<a id="section-1"></a>

## 1 Event-law selection and the scope of the result

 For a complete ordinary configuration $X$ and fixed orthogonal configuration basis, the target is <a id="eq:target"></a>


$$
J_{YX}(t)=\frac{2}{\hbar}\Im\bigl(\Psi_Y(t)^*H_{YX}(t)\Psi_X(t)\bigr),\qquad
 \lambda^B_{Y\leftarrow X}(t)=\frac{[J_{YX}(t)]_+}{w_X(t)},\quad w_X=|\Psi_X|^2.
 

$$

Equation (1).

 The intensity is used only at a positive-weight occupied origin. We prove a limit of entire paths, not just their mean signed currents. The limit's natural history contains the entire ordinary configuration path, including physical memories and receivers. The pilot medium is additional physical ontology and has its own retained microstate. Conditioning on every initial pilot coordinate makes the finite theory deterministic; no Markov claim is made for that larger filtration.

The integrated monograph, version 2 [[1](/quantum-measurement/pilot-medium#bib-Monograph)], derives the canonical bond torque and proves a Bell path limit conditional on signed queues and complete additive Markov pair clocks. Its relative-entropy construction supplies a reference law and a zero-background limit; its chamber construction supplies directed portals and independent stirring; MPBT selects expected incidence measures. These conditional theorems leave the physical selection of their premises as a separate obligation. Appendix [A](/quantum-measurement/pilot-medium#app:kinetic) reproduces the particular kinetic implication used here with its assumptions and proof, to make the present construction self-contained.

The new results replace the Markov pair clocks by a finite spatial ensemble, replace instantaneous signed cancellation by actual finite-speed two-species chemistry, and carry the resulting ordinary-configuration law through an autonomous material circuit. The common material interaction rule is a further constitutive replacement. The monograph's reciprocal pilot-action reader remains a valid countermodel if that rule is dropped; we explicitly analyze it in Section [10](/quantum-measurement/pilot-medium#sec:rivals).



<a id="paragraph-1"></a>

#### Domain.

 Each experiment has a fixed finite ordinary graph, bounded piecewise continuously differentiable $H(t)$, bounded-variation currents, and a fixed finite physical horizon $[0,T]$. The autonomous realization below uses a static finite $H_F$. Resources of the pilot medium grow in a specified limit; the ordinary graph, $H$ and $T$ remain fixed. No thermodynamic efficiency or experimentally established pilot substance is claimed. The record theorem applies to the first pass of a retained finite clock, with all desired continuation included in that pass.



<a id="section-2"></a>

## 2 The microscopic constitution

 

<a id="section-2-1"></a>

### 2.1 Complete state and interaction catalogue

 Let $V$ be the finite configuration set of *all ordinary material systems in the experiment*. A configuration specifies source, actuator, excitation, fuel, loss remnants, working display, archive, every reset receiver, control clock and any finite inaccessible reference. A reference with an actual basis coordinate is included in $V$; already-isolated reference experiments use blocks $H_{\rm local}\otimes I_R$. The explicit preparation variant below first entangles the reference, then proves its isolation beyond a one-way clock boundary. An internal reference fibre is an alternative declared sector convention, not an unnoticed coarse graining of a finer Bell process.

Fix an orientation $e=(r,q)$ for each off-diagonal bond in the union of the programme's nonzero supports and set $b_e=e_q-e_r$, where $(e_r)_{r\in V}$ is the free vertex basis. The incidence matrix $B$ has columns $b_e$. The complete microstate consists of <a id="eq:microstate"></a>


$$
\left(\Psi,(\chi_e,\Pi_e)_e,(u_e,k_e)_e,
       (X_a)_{a=1}^N,\mathcal P,\mathcal F,\mathcal G,\mathcal R\right).
 

$$

Equation (2).

 Here $\mathcal P$ is the finite bank of charged, unused and spent packet slots; $\mathcal F$ contains exporter blank/fuel cells; $\mathcal G$ contains every incoming and outgoing gas coordinate; and $\mathcal R$ contains all contact products and history receivers. One predesignated carrier, say $Q=X_1$, is the actual ordinary configuration. All carrier labels obey identical rules. The remaining carrier positions are pilot degrees of freedom on configuration space, not extra independently prepared copies of the ordinary quantum input.

The laws are the following complete inventory. 

1. P1. The normalized canonical field and primitive bond connections obey the action in Section [3](/quantum-measurement/pilot-medium#sec:source). All ordinary forces, including coherent feedback, enter its numerical Hermitian matrix $H$. An ordinary controller is another factor in that same matrix.

2. P2. The pilot medium has the bounded action exporter, packet spectrum and contact reactions specified below. The reaction list is complete. Scalar carrier response and the common action unit are physical assumptions.

3. P3. There is no additional force vertex $f(\Pi,\mathcal P,\mathcal G,\mathcal R,X_2,\ldots)B_{\rm ordinary}$ in the field energy or a direct classical rewrite of an ordinary display. The pilot medium influences ordinary configurations through the specified carrier motion only. All new ordinary apparatus must be represented in $H$ and obey the same rule.

4. P4. Gas flight and collision contact are deterministic. The only randomness is a declared initial ensemble: independent spatial pilot-gas positions and marks, and an initial carrier ensemble. Conditional on the declared initial field, the joint law factors as gas ensemble times carrier ensemble. No future event times or desired Bell transition probabilities are used in preparation.

 P3 is a new interaction law. It is not an instruction to disregard a readable variable after permitting its read coupling. It asserts that such a coupling is absent from the equations. This differentiates the pilot gas from unrestricted ordinary classical matter. Quadratic ordinary energies form a closed algebra, 

$$

 \{\Psi^\dagger A\Psi,\Psi^\dagger D\Psi\}
   =\Psi^\dagger[A,D]\Psi/(i\hbar),

$$

 which motivates using the same coherent constitution for arbitrary composed apparatus. This algebraic observation does not derive P3. The force catalogue, special species and initial ensemble are explicit new physics.



<a id="section-2-2"></a>

### 2.2 Energy, reversibility and finite resources

 The microscopic theory is a *hybrid* theory: a canonical field, deterministic free flight and explicit deterministic contact/export rules. It is not advertised as a derivation of all these laws from one smooth Hamiltonian. The autonomous ordinary circuit is a single finite Hermitian Hamiltonian. Appendix [B](/quantum-measurement/pilot-medium#app:mechanical) separately supplies a smooth positive kinetic Hamiltonian for a finite contact-permutation module; the main theorem uses the exact hybrid contact law.

Every contact map has a reversible finite lift with a blank receiver: pair the input $(s,\mathrm{blank})$ with $(F_c(s),\mathrm{record}(c,s))$ by a transposition, on a disjoint flagged output bank, and fix unused states. Here $s$ is the finite local logical input (packet species, carrier vertex and local flags), not the continuous complete field state. The outgoing receiver retains that local input. This proves finite reversible logic, not by itself smooth mechanical realizability. The incoming ensemble uses blank receivers, so inverse collisions require a different prepared incoming product. There are at most $M_N$ contacts and $\sum_e B_e$ exports on the promised horizon, hence finite preallocated capacity suffices. Spent particles and cells stay in [(2)](/quantum-measurement/pilot-medium#eq:microstate).

For a total definition outside the promised resource horizon, an attempted export after the last unused slot sets a retained exhaustion flag, disables further exports, and leaves $\Pi$ and the now unbounded residue to their continuous evolution. Existing packets can still react. An exhausted contact-record bank sets its own retained flag and uses a fixed identity contact rule. Every exact tie is processed in a fixed order of channel and export labels. These branches make the finite device total; the stated budgets render them unreachable on the proved physical horizon. The final gas particle simply leaves the plane and remains in the outgoing inventory.

For a minimal energy assignment all pilot register states are degenerate and gas momentum is unchanged at ideal contact. The source action energy is conserved for static $H$. An export changes only the decomposition of a continuous stored action into a packet and a bounded remainder, not $\Psi,\Pi$ or this energy. Finite blank registers are consumed as low-entropy resources; a reset never produces them for free. Nondegenerate ordinary fuel and loss accounting is displayed in the material construction. A stronger universal smooth Hamiltonian or empirical material implementation is outside the constitutive claim.



<a id="section-3"></a>

## 3 Canonical edge ownership and conservative export

<a id="sec:source"></a> Use the common action <a id="eq:action"></a>


$$
\begin{aligned}S&=\int\left[\frac{i\hbar}{2}(\Psi^\dagger\dot\Psi-\dot\Psi^\dagger\Psi)
       +\hbar\sum_e\Pi_e\dot\chi_e-h(\Psi,\chi,t)\right]{\,\mathrm d} t,\\
 h&=\sum_r\Psi_r^*H_{rr}\Psi_r+
    \sum_{e=(r,q)}\left(e^{i\chi_e}\Psi_q^*H_{qr}\Psi_r+\mathrm{c.c.}\right).
 
\end{aligned}
$$

Equation (3, 4).

 Block sectors can replace scalars throughout with their inner products. Passive connection ownership means that $h$ has no $\Pi$ dependence. At $\chi(0)=0$, Hamilton's equations give <a id="eq:ownership"></a>


$$
i\hbar\dot\Psi=H\Psi,\qquad \dot\chi=0,\qquad
 \dot\Pi_e=-\hbar^{-1}\partial_{\chi_e}h=J_e,\qquad \dot w=BJ.
 

$$

Equation (5).





**Proposition 3.1 (Primitive bond ownership).**

 Within real quadratic energies additive over single vertices and primitive binary bonds, with the displayed canonical action unit and endpoint covariance 

$$

 \Psi_r\mapsto e^{i\alpha_r}\Psi_r,\qquad
 \chi_e\mapsto\chi_e+\alpha_q-\alpha_r,

$$

 fixing $H_{qr}$ at $\chi=0$ fixes its bond torque to $J_e$. 

 

**Proof.**

A binary cross term is $\Psi_q^*T_e(\chi_e)\Psi_r+\mathrm{c.c.}$. Covariance gives $T_e(\chi+\delta)=e^{i\delta}T_e(\chi)$, so $T_e(\chi)=e^{i\chi}H_{qr}$. Differentiate the action. Vertex-diagonal terms have zero bond torque. Every finite Hermitian $H$ supplies a realization. 

□

 The assumptions matter. A triangle term $-\hbar k\|\Psi\|^2\sin(\chi_{12}+\chi_{23}+\chi_{31})$ is gauge invariant and gives an additional divergence-free action current $k$ at $\chi=0$ while changing no coherent Hamiltonian there. Primitive bond additivity excludes this concrete rival. Gauge invariance alone does not. The conserved source moment map has sign $B\Pi-w$.

Take $k_e(0)=u_e(0)=0$ and $u_e=N(\Pi_e-\Pi_e(0))-k_e$. At a first hit $u_e=s\in\{-1,1\}$, put a packet of species $s$ in the next unused slot, mark its dedicated exporter blank/fuel cell spent with the retained sign and slot identifier, advance $k_e$ by $s$, and set $u_e$ to zero. Both species may remain simultaneously present. No cancellation is part of export. Tie events use a fixed ordering; gas ties with deterministic export times have probability zero. If $L_e\ge\int_0^T|J_e|{\,\mathrm d} t$, then <a id="eq:export"></a>


$$
\left\|\frac{k_e}{N}-\int_0^\cdot J_e{\,\mathrm d} t\right\|_\infty\le\frac1N,
 \qquad \#\mathrm{exports}_e\le NL_e.
 

$$

Equation (6).

 Indeed the first error is $-u_e/N$ and each full excursion consumes at least $1/N$ of action variation. Bounded nonzero initial residues give $2/N$ error and at most one extra birth. Choose $B_e=\lceil NL_e\rceil+1$ slots before the experiment. A bound from $H,T$ alone can be used, so the apparatus need not know an unknown input vector. The exporter uses finite increments of a canonical coordinate; it does not evaluate the Bell escape rate or supply a stochastic production clock.



<a id="section-4"></a>

## 4 Binary species and contact geometry

 

<a id="section-4-1"></a>

### 4.1 Routing from a declared charge spectrum

 A carrier at $r$ has vector charge $e_r$. A positive packet on $e=(r,q)$ has charge $b_e=e_q-e_r$, a negative packet has $-b_e$, and spent slots and products are neutral. The elementary service consumes one packet and changes one carrier into one carrier. All other participants are neutral. Then 

$$

 e_i+e_q-e_r=e_j

$$

 forces $i=r,j=q$: otherwise the coefficient of $e_r$ on the left is negative. Thus the two possible services are <a id="eq:service"></a>


$$
P_e^++C_a@r\longrightarrow C_a@q+\mathrm{spent},\qquad
 P_e^-+C_a@q\longrightarrow C_a@r+\mathrm{spent}.
 

$$

Equation (7).

 Opposite packets can recombine to neutral products. This is routing from stoichiometry and charge, not from the sign of an instantaneous current. Charge does not derive completeness of the binary species list. Charged receivers, multipacket conversion and multicarrier moves would define other theories.

Writing $n_r=\#\{a:X_a=r\}$ and $Z_e=P_e^+-P_e^-$, the complete hybrid inventory <a id="eq:charge"></a>


$$
\mathcal C=n+BZ+Bu-Nw
 

$$

Equation (8).

 is conserved. Between events $\dot u=NJ$ and $\dot w=BJ$ cancel. A signed export changes $u_e$ by $-s$ and $Z_e$ by $s$; service changes $n$ by $sb_e$ and $Z_e$ by $-s$; recombination changes neither $n$ nor $Z$. Initially $\mathcal C=n(0)-Nw(0)$. This is an exact inventory identity, not an unsupported claim that the whole hybrid theory has a common Noether action.



<a id="section-4-2"></a>

### 4.2 Deterministic candidate contacts

 Allocate a fixed channel for every potential pair $(e,b,a)$ of packet slot and carrier, with frequency parameter $r_{eba}=\kappa_e\mu_N/N$. Allocate a channel for every unordered pair of slots on edge $e$, with parameter $a_e>0$. A contact tests only the current species and carrier vertex. An eligible service implements [(7)](/quantum-measurement/pilot-medium#eq:service); opposite slot species recombine and retain their signs and identities in the outgoing product; other contacts are null. The total candidate frequency is <a id="eq:candidate"></a>


$$
R_N=\sum_e\left(\kappa_e\mu_NB_e+a_e\binom{B_e}{2}\right).
 

$$

Equation (9).

 If the graph has no off-diagonal bonds, $R_N=0$, no beam is needed and the ordinary configuration is constant. Otherwise $R_N>0$. Partition a transverse cross-section into cells of relative areas $r_c/R_N$ for these channels. All frequencies and areas are fixed independently of $\Psi,w,J$ and the future material history. The scalar $\kappa_e$ expresses equal response for all carriers on that bond. There is no rule suppressing a minority packet's service.

Prepare $M_N$ distinguishable pilot particles with independent positions uniform on $[-L_N,0]$, equal speed $v>0$, and independent uniform transverse coordinates. Put $L_N=M_Nv/R_N>vT$. Each incoming particle freely crosses the contact plane once, at $t_i=-z_i/v$, and its transverse coordinate selects a channel. Its outgoing state and blank receiver are retained. The microdynamics from all initial coordinates is deterministic.



<a id="section-5"></a>

## 5 Deriving complete timing from the spatial ensemble

 

<a id="paragraph-2"></a>

#### Which contact marks are compared.

 The primary input is the ordered contact history with channel marks identifying the contacted edge, packet slot(s) and carrier. The initialized reaction device is independent of the gas conditional on the declared coherent preparation. Its output follows one common measurable causal map with the stated tie and virtual-overflow conventions. Neither all initial gas positions nor conditioning on them belongs to this comparison. The device's initial state may itself be random: the same conditional law is used in both comparisons, independently of the gas, and is averaged after applying the deterministic map.

If the physical identity of each incoming particle is also retained in the output, decorate both count-conditioned laws identically. Conditional on $k\le M_N$ arrivals, their particle identities are a uniformly ordered $k$-subset of the $M_N$ labels, independent of the ordered times and channel marks. For the Poisson comparison, draw one independent uniform permutation of those labels, use its initial segment, and assign new virtual receiver identities if $k>M_N$. This is a common conditional kernel; it does not make particle identities iid marks. Channel marks remain independent with the stated probabilities, and chemistry is independent of the beam identity, so the reaction rates below are unchanged.

For comparison only, extend the reaction-map domain to a countably padded bank of virtual blank contact receivers. The first $M_N$ cells are the physical bank; the further cells have no counterpart in the physical finite beam, which cannot reach them. A Poisson contact sequence can use those mathematical extra cells, preserving its uncompromised reaction generator. Both contact histories are fed through this one total causal map. This convention avoids assuming that a Poisson count has a finite deterministic bound. It neither adds physical particles nor drops physical receivers. Accepted service and recombination events still have the finite stock bound below.



**Theorem 5.1 (Finite-gas marked-history bound).**

<a id="thm:gas"></a> Under the independent initialization and common output conventions just specified, on $[0,T]$ the complete marked contact process differs in total variation from a marked Poisson process of channel frequencies $r_c$ by at most <a id="eq:gaserror"></a>


$$
\Delta_{\rm gas}=\frac{(R_NT)^2}{M_N}.
 

$$

Equation (10).

 The same bound holds after any common measurable causal deterministic contact device with the specified independent initialization, including its retained reaction state and exact event times. The compared output includes the local contact receivers, indexed in contact order, and may additionally carry particle identities under the common decoration above. It does not include the incoming gas's unobserved continuous coordinates. Those remain in the physical microstate. The nontrivial case assumes $M_N>R_NT$; if $R_N=0$, both contact histories are empty and the bound is zero. 

 

**Proof.**

For $R_N>0$, the number of beam crossings is $\operatorname{Bin}(M_N,p)$, $p=R_NT/M_N$. Conditional on that number, the ordered times are ordered independent uniforms on $[0,T]$ and channel marks are independent with probabilities $r_c/R_N$. The Poisson process has exactly the same conditional distribution given its count, so contact-history total variation equals count total variation. A Bernoulli$(p)$ variable and a Poisson$(p)$ variable have distance $p(1-e^{-p})\le p^2$: their only excess Bernoulli mass is at one. Coupling $M_N$ independent such pairs and summing gives distance at most $M_Np^2$. Optional particle-identity decoration is the same count-conditioned kernel in both laws and preserves the bound. Couple the independent initial device states identically. On equal decorated contact histories and initial device states, the deterministic device evolves identically, including eligibility and all null records. Averaging the initial device state and taking any common output therefore contract this bound. The $R_N=0$ case is immediate. 

□

 The finite gas has neither memoryless waits nor an inserted event tape. For $R_N>0$, given the observed contact filtration and $K_t$ arrivals, its total conditional hazard is 

$$

 \frac{M_N-K_{t-}}{M_N/R_N-t},
 \qquad
 {\mathbb P}(\text{no arrival in }(t,t+h]\mid\mathcal F_t)
  =\left(1-\frac{h}{M_N/R_N-t}\right)^{M_N-K_t}.

$$

 The survival formula has $0\le h\le M_N/R_N-t$; the left limit in the hazard makes it predictable. These formulas follow by conditioning the remaining independent positions. In the Poisson comparison, independence of channel increments and predictable eligibility give, for a bounded state function $f$, <a id="eq:generator"></a>


$$
\mathcal Gf(s)=\sum_c r_c\,[f(F_c(s))-f(s)]
 

$$

Equation (11).

 as the jump part of the predictable compensator, almost everywhere in time. The full evolution also contains the specified deterministic flow and export rewrites. This is the derivation of both chemical clocks. It is stronger than a mean collision-frequency calculation. The spatial independence assumption is indispensable: equally spaced particles with a uniform global translation have the same uniform one-particle marginals but different complete waiting-time laws (Section [10](/quantum-measurement/pilot-medium#sec:rivals)).



<a id="section-6"></a>

## 6 Recombination and the removal of surplus

 For the Poisson contact comparison, every eligible packet–carrier pair has derived rate $\kappa_e\mu_N/N$, and every opposite slot pair has derived rate $a_e$. Let $P_e^\pm$ be species counts, $m_e^{\rm mix}=\min(P_e^+,P_e^-)$, and $A_e,D_e$ the recombination and service counts. Starting from empty packet stock, exactly <a id="eq:stock"></a>


$$
P_e^+(t)+P_e^-(t)+2A_e(t)+D_e(t)=\#\mathrm{births}_e(t)\le B_e.
 

$$

Equation (12).

 The accepted reaction process is nonexplosive. Both service directions are active whenever both species and their origins are populated.



**Theorem 6.1 (Full reaction-state recombination comparison).**

<a id="thm:annihilation"></a> Assume initially empty packet stock and the stated per-edge birth budgets. Let $S^a$ denote the reaction state of the Poisson comparison: field, actions, residues, all packet slots, carriers and reaction-product receivers, including null-contact records. It does not denote the original gas flight coordinates. The two-species reaction process has a lifted comparison process whose aggregate is exactly the instantaneous signed-queue model, with <a id="eq:annerror"></a>


$$
{d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(S^{a}_{[0,T]}),{\operatorname{Law}}(S^{\rm lift}_{[0,T]})\bigr)
 \le \Delta_{\rm ann}:=\sum_e\frac{\kappa_e\mu_NB_e}{2a_e}.
 

$$

Equation (13).

 Both processes retain slots, products and receivers. In particular this bound holds for their complete aggregate carrier paths and exact event times. It holds for any prescribed signed birth sequence of the stated budgets, including reversals and arbitrarily close births. 

 

**Proof.**

In each state match all minority packets with the same number of majority packets by a fixed ordering of their physical labels. This matching is a proof device. The lifted reference has the same births and all the same recombination channels, but services only the $|Z_e|$ unmatched excess packets. Let $\pi$ retain the field, actions, residues, net queues $Z$, all carrier coordinates and the common edge/carrier/direction service marks. It omits physical recombination times and does not identify their product archive with an instantaneous-cancellation archive. Recombination leaves $Z_e=P_e^+-P_e^-$ invariant; excess service changes it exactly as a signed-queue service. For each carrier at the excess-species origin there are $|Z_e|$ possible packet partners. Consequently the generator on functions of $\pi$ is exactly the signed-queue generator, independent of hidden matching and slot labels. This explicitly proves lumpability for this projection.

Couple all common transitions while full states agree. The physical process additionally services matched packets, with discrepancy hazard 

$$

 h_e=\frac{\kappa_e\mu_N}{N}m_e^{\rm mix}(n_r+n_q)\le\kappa_e\mu_Nm_e^{\rm mix}.

$$

 Continue correct marginals after the first such event. Since $m_e^{\rm mix}\le P_e^+P_e^-$ and the annihilation compensator gives 

$$

 a_e{\mathbb E}\int_0^T P_e^+P_e^-{\,\mathrm d} t={\mathbb E} A_e(T)\le B_e/2,

$$

 the stopping time $\tau$ of the first discrepancy obeys 

$$

 {\mathbb P}(\tau\le T)\le
 {\mathbb E}\int_0^{T\wedge\tau}\sum_e h_e(t){\,\mathrm d} t
 \le\sum_e\kappa_e\mu_N{\mathbb E}\int_0^T P_e^+(t)P_e^-(t){\,\mathrm d} t
 \le\Delta_{\rm ann}.

$$

 The stopped integral is bounded by the complete physical marginal integral. Probability of any discrepancy bounds entire-path total variation. The construction agrees on every retained receiver up to that discrepancy. 

□

 The physical finite-$a$ aggregate is generally not Markov in $Z$ and carriers alone; its rates depend also on the mixed stock. No closure is assumed for that projection. An additional direct consequence is 

$$

 {\mathbb P}(\text{any service while an edge is mixed})\le\Delta_{\rm ann},

$$

 because, on $m_e^{\rm mix}>0$, its total service rate is at most $\kappa_e\mu_N\max(P_e^+,P_e^-)\le\kappa_e\mu_NP_e^+P_e^-$. Minority suppression follows from a competition of physical reaction speeds, not an imposed positive-part gate.



<a id="section-7"></a>

## 7 The full Bell limit and its conditional history

<a id="sec:mainlimit"></a> Define $\epsilon_{\rm kin}(N,T)$ to be the signed-queue tagged-path bound [(55)](/quantum-measurement/pilot-medium#kin:pathbound), proved in Theorem [A.3](/quantum-measurement/pilot-medium#kin:path) of Appendix [A](/quantum-measurement/pilot-medium#app:kinetic), with the cutoff choices made there. Under that appendix's hypotheses it tends to zero for fixed finite graph and programme if <a id="eq:kineticscale"></a>


$$
\mu_N\longrightarrow\infty,\qquad \mu_N/N\longrightarrow0,
 \qquad {\mathbb E}\|x^N(0)-w(0)\|_1\longrightarrow0.
 

$$

Equation (14).

 Initialize the tag from $\nu\le Cw(0)$ and the other $N-1$ carriers independently from $w(0)$, independently of the tag and gas conditional on the field. Equilibrium use takes $\nu=w(0)$, so all carriers are iid. The expected initial census error is at most $\sqrt{|V|/N}+2/N$, and the same tracking proof applies. This is an initial ensemble assumption, not a new draw at each event, a physical unknown-state sampling device, or a derivation of equilibrium preparation from dynamics. Deterministic counts with exchangeable labels instead give tag law $x^N(0)$, not exactly $w(0)$, and require adding their initial-law discrepancy if that variant is used.



**Theorem 7.1 (Deterministic microscopic selection of the Bell path).**

<a id="thm:main"></a> Fix the following data and hypotheses of the pilot-medium theory P1–P4: 

1. (i) A finite ordinary configuration graph $V$, a declared finite sector/reference convention, a finite physical horizon $[0,T]$, and a fixed bounded piecewise $C^1$ admitted Hermitian programme $H(t)$. The resulting coherent currents $J_e$ have bounded variation on the horizon. The graph, programme and all retained ordinary systems are fixed as $N$ grows. Every ordinary control and feedback interaction is included in this programme.

2. (ii) Fixed scalar response coefficients $0<\kappa_-\le\kappa_e\le\kappa_+<\infty$, the complete binary reaction list, and the conservative exporter of Section [3](/quantum-measurement/pilot-medium#sec:source), with its uniform $O(N^{-1})$ discrepancy and per-edge $O(N)$ birth budgets $B_e$. Packet stock is initially empty. Initial exporter residues are zero, or uniformly bounded as allowed by [(6)](/quantum-measurement/pilot-medium#eq:export) and Appendix [A](/quantum-measurement/pilot-medium#app:kinetic).

3. (iii) Conditional on the fixed initial coherent preparation, the predesignated tag has a fixed law $\nu$ with $\nu_r\le Cw_r(0)$ for every $r$, where $C<\infty$ is independent of $N$. Its $N-1$ companion carriers are independent samples from $w(0)$, independent of the tag. The census is consequently calibrated in expectation as in [(14)](/quantum-measurement/pilot-medium#eq:kineticscale). More generally the same conclusion applies to an admitted calibrated census with this tag law and ${\mathbb E}\|x^N(0)-w(0)\|_1\to0$, under the independent comparison-clock initialization of Appendix [A](/quantum-measurement/pilot-medium#app:kinetic).

4. (iv) The finite beam is initialized independently of the entire reaction device, conditional on the declared coherent preparation, with the longitudinal and transverse product law of Section 4. For $R_N>0$, $M_N>R_NT$. All packet slots, exporter fuel/blank cells, contact receivers and retained reaction-product banks are supplied for the stated budgets. The physical finite device and its Poisson comparison use the same causal map, tie order and virtual overflow convention of Theorem [5.1](/quantum-measurement/pilot-medium#thm:gas).

 On the common path space $D([0,T],V)$, with its coordinate $\sigma$-field, every finite realization satisfying these hypotheses obeys <a id="eq:mainerror"></a>


$$
{d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(Q^N_{[0,T]}),\mathbb P^B_{H,\nu,[0,T]}\bigr)
 \le \Delta_N:=\frac{(R_NT)^2}{M_N}
       +\sum_e\frac{\kappa_e\mu_NB_e}{2a_e}
       +\epsilon_{\rm kin}(N,T).
 

$$

Equation (15).

 In general the bound tends to zero when [(14)](/quantum-measurement/pilot-medium#eq:kineticscale) holds and both $(R_NT)^2/M_N\to0$ and $\sum_e\kappa_e\mu_NB_e/(2a_e)\to0$. In fixed physical units, the concrete choice $B_e=O(N)$, $\mu_N=N^{1/2}$, $a_e=N^2$, and $M_N=N^{10}$ gives $R_N=O(N^4)$, gas error $O(N^{-2})$, recombination error $O(N^{-1/2})$, and $\Delta_N\to0$. Each resource is finite at each $N$; the capacities and $M_N>R_NT$ condition are imposed before the run. No change of time accompanies this limit. The target is the nonexplosive minimal Bell process [(1)](/quantum-measurement/pilot-medium#eq:target), initialized at $\nu$, with its complete natural conditional timing law. 

 

**Proof.**

Condition first on the declared coherent preparation. The initialized causal source, exporter and contact device is independent of the gas; Theorem [5.1](/quantum-measurement/pilot-medium#thm:gas) therefore compares its complete reaction output under the spatial beam and the Poisson contacts. In the latter model, predictable eligibility gives precisely the per-slot mass-action reactions of Theorem [6.1](/quantum-measurement/pilot-medium#thm:annihilation). That theorem couples the complete reaction states until the first discrepant matched-packet service, using the stopped physical compensator and empty-stock budget. Its lifted reference then projects exactly to the signed queue of Theorems [A.1](/quantum-measurement/pilot-medium#kin:tracking) and [A.3](/quantum-measurement/pilot-medium#kin:path).

The initial domination, expected census calibration, bounded-variation currents and fixed exporter/response bounds are the hypotheses of those kinetic results. Their expectations include the initial census; they do not require a deterministic realization of the empirical populations. Apply the tagged-path bound on $D([0,T],V)$ and use the triangle inequality after the preceding common projections. This gives [(15)](/quantum-measurement/pilot-medium#eq:mainerror). The growth estimates follow from [(9)](/quantum-measurement/pilot-medium#eq:candidate); $B_e=O(N)$ gives $R_N=O(N^4)$ under the displayed scales. Lemma [A.2](/quantum-measurement/pilot-medium#kin:existence) supplies nonexplosion and domination through nodal boundaries, and the nodal coupling in Theorem [A.3](/quantum-measurement/pilot-medium#kin:path) identifies the entire limiting law. 

□



For the limit, conditional on the declared initial field and programme, the full ordinary history through $t$ and current state $X$, the probability of holding at $X$ until $t+h$ is <a id="eq:survival"></a>


$$
\exp\left[-\int_t^{t+h}\sum_{Y\ne X}\frac{[J_{YX}(s)]_+}{w_X(s)}{\,\mathrm d} s\right]
 

$$

Equation (16).

 on its positive-weight component. The first-event type has the corresponding competing-hazard density. Node localization supplies continuation when a component ends. The finite theory is history dependent through its unobserved gas and packets; the theorem does not claim pointwise convergence of conditional kernels on all rare pasts. It proves total variation of complete paths, which implies convergence for every measurable history event and every common stopped output. If a conditioning event has ideal probability $p>0$ and $\Delta_N<p$, its finite-model probability is also positive and the conditional total-variation error is at most $\min\{1,2\Delta_N/p\}$.

Individual edge ownership, absence of surplus, and timing thus have different proven origins. The primitive action supplies each $J_e$, not merely $BJ$; fast opposite-charge recombination removes excess physical directional service; independent incoming positions and scalar contact counting supply the complete chemical timing law; population tracking then supplies the residence denominator. In particular the denominator is not evaluated by a microscopic particle.



<a id="paragraph-3"></a>

#### Complete configurations and projections.

 The theorem concerns $Q$, which already contains every ordinary source, archive, receiver, controller and reference coordinate of the declared experiment. It does not identify the Bell law with the full microstate [(2)](/quantum-measurement/pilot-medium#eq:microstate). All pilot histories remain physically present under their different force law. A later programme that reads or returns pilot products is not covered by silently tracing them out. P3 rules out an extra ordinary read force; changes of pilot dynamics or resource recirculation require a new estimate. Coarse records contract [(15)](/quantum-measurement/pilot-medium#eq:mainerror), but their jump rates need not be the positive part of a sum of fine currents.



<a id="section-8"></a>

## 8 An autonomous material programme in the same canonical field

 <a id="mat:section"></a>

The pilot mechanism is applied to one finite graph containing the source, apparatus, all receiving systems, inaccessible reference and a clock. The following construction specifies its material Hamiltonian and proves an actual historical-record property of its Bell limit. No continuum pointer law or classical reader of a pilot coordinate is appended. Circuit Hamiltonians and engineered state-transfer chains provide useful context [[4](/quantum-measurement/pilot-medium#bib-Feynman1986), [3](/quantum-measurement/pilot-medium#bib-Christandl2004)]; all facts used here are proved below.



<a id="section-8-1"></a>

### 8.1 Exact autonomous propagation



Let $U_0,\ldots,U_{\ell-1}$ be fixed unitaries on a finite material space $\mathcal K$, including every resource and a reference $R$. During the portion declared to have an inaccessible reference, each gate acts as the identity on $R$. Proposition [9.2](/quantum-measurement/pilot-medium#mat:basisprep) also permits an explicit earlier preparation stage involving $R$. Set <a id="mat:prefix"></a>


$$

 V_0=I,\qquad V_n=U_{n-1}\cdots U_0,\qquad
 c_n=\sqrt{(n+1)(\ell-n)}.

$$

Equation (17).

 The clock has basis $|0\rangle,\ldots,|\ell\rangle$. For a frequency $\Omega>0$, define the static matrix <a id="mat:feynman"></a>


$$

 H_F=\hbar\Omega\sum_{n=0}^{\ell-1}c_n
 \left(|n+1\rangle\langle n|\otimes U_n+
 |n\rangle\langle n+1|\otimes U_n^\dagger\right).

$$

Equation (18).

 All its matrix edges are ordinary edges of the common canonical field. In particular, the pilot link meters and reactions use the currents of this complete $H_F$, rather than those of a source Hamiltonian with an external ideal clock suppressed.



**Theorem 8.1 (Exact finite-clock programme).**

<a id="mat:clock"></a> Starting with $|0\rangle\otimes\psi$, $\|\psi\|=1$, the field under [(18)](/quantum-measurement/pilot-medium#mat:feynman) is <a id="mat:wave"></a>


$$
\begin{aligned}
 \Psi(t)&=\sum_{n=0}^{\ell}\phi_n(t)|n\rangle\otimes V_n\psi,\\
 \phi_n(t)&=(-i)^n\sqrt{\binom\ell n}
   \cos^{\ell-n}(\Omega t)\sin^n(\Omega t).
\end{aligned}
$$

Equation (19).

 At the first transfer time <a id="mat:time"></a>


$$

 T=\frac{\pi}{2\Omega},

$$

Equation (20).

 the state is $(-i)^\ell|\ell\rangle\otimes V_\ell\psi$. Moreover $H_F+\hbar\Omega\ell I\ge0$; this shift changes no configuration current. The clock and all its correlations remain in the full model. 

 

**Proof.**

With $D=\sum_n|n\rangle\langle n|\otimes V_n$, 

$$

 D^\dagger H_FD=H_C\otimes I,\qquad
 H_C=\hbar\Omega\sum_nc_n
       (|n+1\rangle\langle n|+|n\rangle\langle n+1|).

$$

 On the permutation-symmetric subspace of $\ell$ qubits, $H_C$ is the restriction of $\hbar\Omega\sum_{j=1}^\ell X_j$; the normalized state with $n$ excitations has the displayed adjacent matrix element $c_n$. Evolving $|0\rangle^{\otimes\ell}$ therefore gives $(\cos(\Omega t)|0\rangle-i\sin(\Omega t)|1\rangle)^{\otimes\ell}$. Its normalized symmetric coefficients prove [(19)](/quantum-measurement/pilot-medium#mat:wave) and [(20)](/quantum-measurement/pilot-medium#mat:time). The spectrum of the qubit sum lies in $[-\hbar\Omega\ell,\hbar\Omega\ell]$, proving the lower bound. 

□





**Proposition 8.2 (Input-independent shape of the clock weights).**

 <a id="mat:levels"></a> For each complete material basis state $x$, <a id="mat:weights"></a>


$$

 w_{n,x}(t)=\binom\ell n\cos^{2(\ell-n)}(\Omega t)
             \sin^{2n}(\Omega t)\,|(V_n\psi)_x|^2.

$$

Equation (21).

 On $[0,T]$, each positive regular level of each weight has at most two crossings, independently of the unknown input. On $[0,2T]$ it has at most four. Every nonzero coordinate has strictly positive weight in the interior of the first pass; a vanishing coefficient $(V_n\psi)_x$ gives an identically empty coordinate instead. 

 

**Proof.**

The factor depending on $\psi$ is a nonnegative constant. For $0<n<\ell$, logarithmic differentiation of the other factor gives $2\Omega[n\cot(\Omega t)-(\ell-n)\tan(\Omega t)]$, which vanishes once, at $\sin^2(\Omega t)=n/\ell$, and changes from positive to negative. For $n=0$ or $\ell$ the factor is monotone. Reflection around $T$ gives the second-pass count. Positivity on $(0,T)$ follows directly from [(21)](/quantum-measurement/pilot-medium#mat:weights). 

□

 The crossing count is a useful uniform input fact for a kinetic estimate. By itself it is not a proof of every other uniform constant required by that estimate.



<a id="section-8-2"></a>

### 8.2 A faithful archive is created at a monomial clock cut



A unitary is *monomial* in the complete material basis when <a id="mat:monomial"></a>


$$

 (U_m)_{yx}=e^{i\vartheta_x}\,1_{\{y=\pi(x)\}}

$$

Equation (22).

 for a permutation $\pi$. Reversible copies and SWAPs are examples.



**Theorem 8.3 (Historical record at a monomial cut).**

<a id="mat:copy"></a> For the Bell process of [(18)](/quantum-measurement/pilot-medium#mat:feynman) in initial equilibrium, a monomial cut $m$ is crossed exactly once, from clock $m$ to clock $m+1$, almost surely before $T$. At that crossing the actual material configuration is updated by $\pi$. The material state immediately before the crossing has law $|(V_m\psi)_x|^2$.

Suppose this permutation copies a working key $W$ into a blank archive $A$, all earlier gates preserve its blank state, and all later gates preserve the archive label. Then the actual archive contains the actual $W$ key at that crossing and stays unchanged for the rest of the first pass. A later monomial SWAP into a retained blank receiver transfers the actual old working key into that receiver at its own unique crossing. 

 

**Proof.**

Write $\phi_n=(-i)^n a_n$ with $a_n(t)>0$ on $(0,T)$, and put $\xi_n=V_n\psi$. The fine current at a complete edge across cut $m$ is <a id="mat:finecurrent"></a>


$$

 J_{(m+1,y),(m,x)}(t)=2\Omega c_ma_{m+1}a_m
   \operatorname{Re}\left[(\xi_{m+1})_y^*(U_m)_{yx}(\xi_m)_x\right].

$$

Equation (23).

 For [(22)](/quantum-measurement/pilot-medium#mat:monomial), the nonzero real factor is exactly $|(\xi_m)_x|^2$. Every current across that cut is therefore forward, and its reverse Bell rate vanishes. Since the clock initially lies below the cut and finally lies above it with probability one, the cut is crossed exactly once. The permitted edge carries exactly the permutation $\pi$.

Summing the forward current over $x$ gives $2\Omega c_ma_{m+1}a_m$. It is the time derivative of the field mass strictly above the cut and integrates to one. Integrating the individual current thus gives $|(\xi_m)_x|^2$ for the pre-crossing material state. Once the process has crossed, it cannot return to the earlier region. All edges in the remaining region preserve $A$ by the later-gate hypothesis. This proves the historical statement. The same argument applies to the receiver SWAP. 

□



For completeness, the crossing-time density is $2\Omega c_ma_{m+1}(t)a_m(t)$. Under $z=\sin^2(\Omega t)$ it becomes 

$$

 \frac{z^m(1-z)^{\ell-m-1}}{B(m+1,\ell-m)}\,{\,\mathrm d} z.

$$

 This is a derived clock-time law, not an additional random time draw.



**Remark 8.4 (Fine traffic is not coarse clock traffic).**

 <a id="mat:finewarning"></a> For a general unitary $U_m$, the real factor in [(23)](/quantum-measurement/pilot-medium#mat:finecurrent) can be negative. The net clock flux can be forward while some fine edges point backward. For example, let a Hadamard act on $S$ in the state $\sqrt{2/3}|0,0_R\rangle+\sqrt{1/3}|1,+_R\rangle$. At the fine edge whose old and new source bits both equal one and whose reference bit is zero, the real factor is $-1/12$. Thus Theorem [8.3](/quantum-measurement/pilot-medium#mat:copy) uses the monomial hypothesis essentially. In particular, a later archive does not record every transient excursion of an earlier nonmonomial resource gate. 





<a id="section-9"></a>

## 9 An explicit retained-resource measurement and continuation

 <a id="mat:resources"></a>



<a id="section-9-1"></a>

### 9.1 Finite production, fuel, capture, pending and loss states



Let $S$ be a qubit with $P_a=|a\rangle\langle a|$, $a=0,1$. The resource space $D$ has the orthonormal basis 

$$

 |r\rangle,|p_0\rangle,|p_1\rangle,
 |c_0\rangle,|c_1\rangle,|l_0\rangle,|l_1\rangle.

$$

 These are complete keys for the following local resources. A unit of production energy, fuel energy or pending/lost excitation has energy $E>0$; a captured remnant has energy $2E$. 

| Key | Production | Fuel | Site | Signal | Retained product |
| --- | --- | --- | --- | --- | --- |
| $r$ | $E$ | $E$ | ready | none | none |
| $p_a$ | $0$ | $E$ | ready | pending $E$, mode $a$ | none |
| $c_a$ | $0$ | $0$ | spent, label $a$ | none | capture remnant $2E$ |
| $l_a$ | $0$ | $E$ | ready | none | lost excitation $E$, mode $a$ |

  Thus every listed complete resource configuration has total energy $2E$. The seven-dimensional space may be regarded as this sector of a larger tensor inventory; the gates below extend as the identity on its unused orthogonal complement. The loss remnant is retained, not traced away physically.

For $0<\eta<1$, define <a id="mat:generators"></a>


$$
\begin{aligned}
 T_w&=\sum_{a=0}^1P_a\otimes
       (|p_a\rangle\langle r|-|r\rangle\langle p_a|),\\
 |b_a\rangle&=\sqrt\eta\,|c_a\rangle+
                   \sqrt{1-\eta}\,|l_a\rangle,\\
 T_c&=\sum_{a=0}^1
       (|b_a\rangle\langle p_a|-|p_a\rangle\langle b_a|).
       
\end{aligned}
$$

Equation (24).

 They are real antisymmetric matrices. The full finite unitaries are <a id="mat:rotations"></a>


$$

 U_w(\theta)=I+\sin\theta\,T_w+(1-\cos\theta)T_w^2,
 \qquad
 U_c(\varphi)=I+\sin\varphi\,T_c+(1-\cos\varphi)T_c^2.

$$

Equation (25).

 Equivalently they are $e^{\theta T_w}$ and $e^{\varphi T_c}$; their Hermitian generators are $iT_w$ and $iT_c$. In particular 

$$

 U_w|a,r\rangle=\cos\theta|a,r\rangle+
                       \sin\theta|a,p_a\rangle,
 \qquad
 U_c|p_a\rangle=\cos\varphi|p_a\rangle+
                       \sin\varphi|b_a\rangle.

$$

 The orthogonal vector $\sqrt{1-\eta}|c_a\rangle-\sqrt\eta|l_a\rangle$ is fixed by $U_c$. These equations specify the gates on the full space, rather than an isometry with unmentioned complementary states.

For any source/reference vector $\psi$, the first two gates give <a id="mat:resourcevector"></a>


$$

 \cos\theta\,\psi|r\rangle+
 \sin\theta\sum_aP_a\psi
 \left[\cos\varphi|p_a\rangle+
 \sin\varphi\left(\sqrt\eta|c_a\rangle+
                       \sqrt{1-\eta}|l_a\rangle\right)\right].

$$

Equation (26).

 All coefficients retain their source and reference cofactors. The entire vector, including ready and pending sectors, is subsequently used in the clock Hamiltonian.



<a id="section-9-2"></a>

### 9.2 Nine exact gates with every receiving system retained



Let $W,A,B_W$ be ternary registers, initially $0$, let $B_D$ be a second seven-state resource initially $r$, and let $K$ be a qubit initially $0$. $W$ is the working status display, $A$ its archive, $B_D,B_W$ are reset receivers, and $K$ is a later readout. The full ready state is <a id="mat:ready"></a>


$$

 \psi_{SR}|r\rangle_D|0\rangle_W|0\rangle_A
 |r\rangle_{B_D}|0\rangle_{B_W}|0\rangle_K|0\rangle_C.

$$

Equation (27).

 The independent $B_D=r$ consumes another production/fuel supply of energy $2E$. Thus the two resource banks initially contain $4E$, and their energy is conserved by the specified gates. The register labels and source/reference levels may be degenerate; the full static clock-interaction energy is conserved separately.

Define <a id="mat:status"></a>


$$

 \chi(r)=\chi(p_a)=\chi(l_a)=0,\qquad
 \chi(c_0)=1,\qquad\chi(c_1)=2.

$$

Equation (28).

 Ternary additions below are modulo three. The nine gates are <a id="mat:circuit"></a>


$$
\begin{aligned}
 U_0&=U_w(\theta),& U_1&=U_c(\varphi),\\
 U_2: |d,w\rangle&\longmapsto|d,w+\chi(d)\rangle,
 &U_3: |w,a\rangle&\longmapsto|w,a+w\rangle,\\
 U_4&=\operatorname{SWAP}_{D,B_D},
 &U_5&=\operatorname{SWAP}_{W,B_W},\\
 U_6&=|0\rangle\langle0|_A\otimes I_S
       +|1\rangle\langle1|_A\otimes I_S
       +|2\rangle\langle2|_A\otimes V,
 &V&=e^{-i\pi\sigma_y/6},\\
 U_7&=H_S^{\rm Had},
 &U_8: |s,k\rangle&\longmapsto|s,k\mathbin{\oplus}s\rangle.
 
\end{aligned}
$$

Equation (29).

 Every unspecified factor is a spectator, and every gate acts as $I_R$. Here $H^{\rm Had}=2^{-1/2}\left(\begin{smallmatrix}1&1\\1&-1\end{smallmatrix}\right)$. Gate $U_6$ is coherent control by the archive operator; no actual pilot log or actual classical archive value is inserted into the field equation.

The clock now has $\ell=9$ and ten nodes. For a reference qubit the material space excluding the clock has dimension $2\cdot2\cdot7\cdot3\cdot3\cdot7\cdot3\cdot2=10584$; the complete clock/material graph has $105840$ vertices. Its matrix is explicitly [(18)](/quantum-measurement/pilot-medium#mat:feynman) with the gates [(28)](/quantum-measurement/pilot-medium#mat:circuit). Tensor and permutation notation specify all entries without concealing a postselected subspace.



**Proposition 9.1 (Actual facts retained by this circuit).**

 <a id="mat:resourcehistory"></a> In its Bell limit, $W$ receives $\chi(D)$ at the unique crossing of cut $2$. This actual working value persists until its reset at cut $5$. At cut $3$, $A$ copies that value and retains it through the end of the first pass. At cut $4$, the actual old $D$ key moves to $B_D$ and $D$ becomes ready. At cut $5$, the actual old $W$ key moves to $B_W$ and $W$ becomes blank. The receiving keys remain retained. Gate $U_8$ similarly records the source computational key after the coherent Hadamard continuation. 

 

**Proof.**

The cuts $2,3,4,5,8$ are monomial. Before cut $2$, $W$ is blank; the copying permutation leaves $D$ unchanged. Gates $3$ and $4$ preserve $W$, and a return across cut $2$ is impossible. Hence the later archive copy records the same earlier actual status. Before cut $3$, $A$ is blank, and every later gate preserves its label. Gates after $4$ preserve $B_D$; those after $5$ preserve $B_W$. Apply Theorem [8.3](/quantum-measurement/pilot-medium#mat:copy) at each cut. The final cut has no later gate. These arguments identify actual past facts, not merely correlations of final field weights. 

□

 The status is a fact at its registered cut. Preparation gates $0$ and $1$ can have provisional excursions; this proposition does not claim that every such excursion was recorded. A null archive value means no captured key at the registered status cut. Clock progress distinguishes that completed null read from the initially blank register.



<a id="section-9-3"></a>

### 9.3 A null result with a reference-sensitive continuation



Choose <a id="mat:input"></a>


$$

 \psi_{SR}=\sqrt{\frac23}|0\rangle|0_R\rangle+
           \sqrt{\frac13}|1\rangle|+_R\rangle,
 \qquad |+_R\rangle=\frac{|0_R\rangle+|1_R\rangle}{\sqrt2},

$$

Equation (30).

 and $\theta=\pi/3$, $\varphi=\pi/4$, $\eta=2/3$. The resource weights in [(26)](/quantum-measurement/pilot-medium#mat:resourcevector) are respectively ready $1/4$, pending $3/8$, captured $1/4$ and loss $1/8$. All are retained through the two SWAPs. For example, after reset the old pending or loss distinction resides in $B_D$ even though the working $D$ has returned to $r$.

Let $\mathsf N$ be the archive value $A=0$. Tracing the retained resource factors only for this calculation gives the null subchannel <a id="mat:nullmap"></a>


$$

 \mathcal N(\rho)=\frac14\rho+
          \frac12\sum_{a=0}^1P_a\rho P_a.

$$

Equation (31).

 This reduction is not the state used for the complete evolution. The ready term retains source coherence; the distinct pending and loss labels give the displayed dephased contribution. The null branch sees the identity in $U_6$, followed by a Hadamard and a computational copy. Writing $X+$ for $K=0$, one obtains <a id="mat:nullnumbers"></a>


$$

 \Pr(\mathsf N)=\frac34,\qquad
 \Pr(\mathsf N,X+)=\frac{11}{24},\qquad
 \Pr(X+\mid\mathsf N)=\frac{11}{18}.

$$

Equation (32).

 The unnormalized inaccessible-reference state in that joint outcome is <a id="mat:reference"></a>


$$

 \sigma_R^{\mathsf N,+}=\frac1{48}
       \begin{pmatrix}19&5\\5&3\end{pmatrix}.

$$

Equation (33).

 

**Proof.**

The source reduction of [(30)](/quantum-measurement/pilot-medium#mat:input) is $\rho_S=\left(\begin{smallmatrix}2/3&1/3\\1/3&1/3\end{smallmatrix}\right)$. Equation [(31)](/quantum-measurement/pilot-medium#mat:nullmap) gives $\mathcal N(\rho_S)=\left(\begin{smallmatrix}1/2&1/12\\1/12&1/4\end{smallmatrix}\right)$. Its trace is $3/4$, and its $|+\rangle$ diagonal element is $11/24$. For the reference calculation use 

$$

 |r_0\rangle=\sqrt{2/3}|0_R\rangle,
 \qquad |r_1\rangle=\sqrt{1/3}|+_R\rangle.

$$

 The ready contribution after the $+$ effect is $(|r_0\rangle+|r_1\rangle)(\langle r_0|+\langle r_1|)/8$; the other null contribution is $(|r_0\rangle\langle r_0|+|r_1\rangle\langle r_1|)/4$. Adding the two matrices gives [(33)](/quantum-measurement/pilot-medium#mat:reference). 

□



The captured branches exercise noncommuting record-controlled continuation. Writing $a=0$ for $A=1$ and $a=1$ for $A=2$, the four joint probabilities are <a id="mat:capturednumbers"></a>


$$
\begin{aligned}
 \Pr(a=0,X+)&=\Pr(a=0,X-)=\frac1{12},\\
 \Pr(a=1,X+)&=\frac{2-\sqrt3}{48},&
 \Pr(a=1,X-)&=\frac{2+\sqrt3}{48}.
\end{aligned}
$$

Equation (34).

 Indeed capture has probability $1/4$ times the original source population. The $a=0$ daughter is $|0\rangle$ and gives equal $X$ probabilities. The $a=1$ daughter becomes $-\tfrac12|0\rangle+\tfrac{\sqrt3}{2}|1\rangle$ under $V$, yielding the other two numbers. They sum to $1/4$. The complete reference cofactors and both reset receivers remain attached throughout.



<a id="section-9-4"></a>

### 9.4 What a finite material-path bound now proves





**Proposition 9.2 (A basis-ready example with randomness only in the gas).**

 <a id="mat:basisprep"></a> The concrete experiment above can start from one known complete ordinary basis configuration, with every pilot carrier in that configuration. Prepend to the nine gates [(28)](/quantum-measurement/pilot-medium#mat:circuit) the two gates <a id="mat:prepgates"></a>


$$
\begin{aligned}
 U_{\rm prep}
 &=\left(P_0^S\otimes I_R+P_1^S\otimes H_R^{\rm Had}\right)
       \left(R_y^S(\alpha)\otimes I_R\right),\\
 \alpha&=2\arccos\sqrt{2/3},\qquad
 R_y(\alpha)=e^{-i\alpha\sigma_y/2},\qquad
 U_{\rm barrier}=I.
\end{aligned}
$$

Equation (35).

 Initialize $S,R$ in $|0,0_R\rangle$, and initialize all resource, receiver, display and clock factors in the basis-ready states already listed. There are now eleven gates, twelve clock nodes and $127008$ complete ordinary configurations for a reference qubit. The first-pass duration is still $T=\pi/(2\Omega)$ for the new clock Hamiltonian.

In the Bell limit, the identity cut is crossed exactly once. At that crossing the source/reference configuration has law $|\psi_{SR}|^2$ for [(30)](/quantum-measurement/pilot-medium#mat:input), with all remaining material resources still ready. Thereafter the process cannot return to either preparation gate, and every accessible later edge acts as the identity on $R$. The resource, archive, reset and continuation conclusions, including [(32)](/quantum-measurement/pilot-medium#mat:nullnumbers)–[(34)](/quantum-measurement/pilot-medium#mat:capturednumbers), are unchanged. 

 

**Proof.**

The sign convention in [(35)](/quantum-measurement/pilot-medium#mat:prepgates) gives 

$$

 R_y(\alpha)|0\rangle=\sqrt{2/3}|0\rangle+
                                \sqrt{1/3}|1\rangle.

$$

 The following controlled Hadamard therefore maps $|0,0_R\rangle$ exactly to [(30)](/quantum-measurement/pilot-medium#mat:input). The clock proof applies to these eleven unitaries without modification: it does not require a spectator reference during the explicitly designated preparation stage. The new identity gate is the monomial cut $m=1$. Theorem [8.3](/quantum-measurement/pilot-medium#mat:copy) gives its unique forward crossing and its pre-crossing distribution, namely the modulus square of the prepared vector. No reverse current crosses this barrier on the first pass. All later gates are precisely the earlier nine gates and are the identity on $R$. Their gate prefixes and final product act on the same prepared vector as before. The old monomial cuts are merely shifted upward by two, so their historical proofs remain valid. Finally $12\times10584=127008$. 

□



Here the initial field weight is a point mass at a known ordinary configuration. Taking all $N$ carriers there gives exact initial census and tag equilibrium without a random carrier preparation. Only the declared initial pilot-gas ensemble is random. The preparation uses the same static field Hamiltonian and pilot reactions as the rest of the experiment; it does not resample a configuration at the barrier. The former record cuts $2,3,4,5,8$ are $4,5,6,7,10$ in this variant. The physical crossing-time densities use the new $\ell=11$ clock and therefore change; the retained outcome probabilities remain the same. The full Hamiltonian includes the earlier interaction with $R$, so the reference is inaccessible only after the barrier, not throughout its preparation. This concrete example does not derive the general unknown-input equilibrium postulate. A finite pilot approximation inherits the prepared crossing distribution and subsequent record claims through its one full material-path error bound, including a failure label if it has not reached the relevant cut by $T$.



**Corollary 9.3 (One error bound for the complete retained programme).**

 <a id="mat:transfer"></a> Suppose the finite pilot construction for the complete static graph [(18)](/quantum-measurement/pilot-medium#mat:feynman) obeys 

$$

 {d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(Q^{\rm pilot}_{[0,T]}),
            {\operatorname{Law}}(Q^{\rm Bell}_{[0,T]})\bigr)\le\delta.

$$

 Then every joint ordinary material record/history event in this programme has probability error at most $\delta$. In particular, the probability that any historical assertion in Proposition [9.1](/quantum-measurement/pilot-medium#mat:resourcehistory) fails is at most $\delta$; the probabilities $\Pr(\mathsf N)$, $\Pr(\mathsf N,X+)$ and the captured joint outcomes in [(34)](/quantum-measurement/pilot-medium#mat:capturednumbers) have that same error bound. The conditional value $\Pr(X+\mid\mathsf N)$ requires the branch-probability correction stated below. 

 

**Proof.**

All the displayed records, copy crossings, receiver transfers and later controlled outputs are measurable functions of the same full material path. Total variation contracts under their common pushforward. The Bell failure event has probability zero, so the pilot failure event has probability at most $\delta$. 

□

 This is a joint bound on the common path; it has no factor equal to the number of records or receiving systems. A conditional comparison requires positive branch probability under both laws. To be explicit, let $P$ be the ideal law, $Q$ the finite pilot law and $C$ the conditioning event, with $p=P(C)>0$ and $q=Q(C)>0$. Since $|p-q|\le\delta$, $\delta<p$ suffices to ensure $q>0$. For any event $F\subseteq C$, 

$$

 \left|\frac{P(F)}p-\frac{Q(F)}q\right|
 \le\frac{|P(F)-Q(F)|}{p}+\frac{Q(F)|p-q|}{pq}
 \le\frac{2\delta}{p}.

$$

 Taking the supremum gives conditional TV error at most $\min\{1,2\delta/p\}$. For the null branch above, $p=3/4$; thus $\delta<3/4$ suffices and the conditional error is at most $\min\{1,8\delta/3\}$. No uniform precision is asserted on arbitrarily rare branches. Nor does a classical-path TV estimate alone compare an unobserved quantum density matrix in trace norm. Reference-sensitive operational tests are included by adjoining their admissible gates to the same complete programme and applying the same argument.

All clocks, copies, fuel supplies, loss products and reset receivers are part of the autonomous inventory. Their field evolution is exact; the kinetic, reaction and gas parameters enter only through the separately proved material-path error. The wave and currents are analytic on the fixed finite graph, and Proposition [8.2](/quantum-measurement/pilot-medium#mat:levels) provides the indicated input-uniform level-crossing count where the kinetic bound needs it.



<a id="paragraph-4"></a>

#### Exact time scope.

 Historical protection here is a first-pass statement on $[0,\pi/(2\Omega)]$. A finite reversible clock is not an absorbing final state. On its second pass the fine currents reverse, the clock has nodes at the turnaround, and at $2T$ the circuit has coherently undone itself. The full pilot mechanism can be tested against that extended Bell path, but the archive theorem does not claim that a deliberately undone memory remains a record. Every required later feedback or hold operation must be included in the declared first-pass programme.



<a id="section-10"></a>

## 10 Adversarial tests and the surviving alternatives

<a id="sec:rivals"></a> 

<a id="section-10-1"></a>

### 10.1 A stationary coherent cycle tests individual edge ownership

 Take three vertices with $w_r=1/3$, $\Psi=(1,1,1)^T/\sqrt3$, and 

$$

 H=\frac{3\hbar j}{2}
 \begin{pmatrix}0&-i&i\\i&0&-i\\-i&i&0\end{pmatrix},\qquad j>0.

$$

 Then $H\Psi=0$ but $J_{21}=J_{32}=J_{13}=j$. The canonical exporters therefore produce clockwise packets even though every vertex population is stationary. Theorem [7.1](/quantum-measurement/pilot-medium#thm:main) gives a clockwise Bell cycle at rate $3j$, with Poisson$(3jT)$ jump count and its full continuous event times. A generator which simply keeps the configuration fixed has the same one-time equilibrium and zero divergence, yet differs in path law by $1-e^{-3jT}$. It is excluded by individual primitive bond ownership, not by the continuity equation alone.

The nearest Markov surplus rival adds a constant $K>0$ to both directional equilibrium fluxes on each cycle bond. It also preserves $w$. Its clockwise rate is $3(j+K)$ and its counterclockwise rate is $3K$, independently of the occupied vertex. The probability of at least one backward jump is $1-e^{-3KT}$, whereas Bell's probability is zero. Thus full-path distance is at least that number. The microscopic theory suppresses this rival by the proved recombination hierarchy, rather than declaring two-way reactions impossible.



<a id="section-10-2"></a>

### 10.2 The finite-recombination rival really has dark traffic

 On a two-vertex edge in a zero-current interval, put one packet of each species, no new births, and all $N$ carriers at the two endpoints. Total service rate is $\kappa\mu_N$ and recombination rate is $a$. The probability of at least one actual carrier event before $T$ is exactly <a id="eq:darkrival"></a>


$$
\frac{\kappa\mu_N}{a+\kappa\mu_N}
       \left(1-e^{-(a+\kappa\mu_N)T}\right).
 

$$

Equation (36).

 The first event is a race of the two derived contact mechanisms. Recombination first removes both packets; service first already makes the path nonconstant. The instantaneous net queue has $Z=0$ and never moves, so [(36)](/quantum-measurement/pilot-medium#eq:darkrival) is its exact carrier-path distance from this finite reaction experiment. A mixed stock can occur after opposite exports before recombination completes. This local test does not replace the empty-queue initialization of Theorem [7.1](/quantum-measurement/pilot-medium#thm:main). It shows that the new mechanism has finite-speed predictions and is not a renamed Jordan decomposition. If recombination is absent or too slow, surplus survives.



<a id="section-10-3"></a>

### 10.3 The spatial ensemble selects timing beyond mean flux

 Let $\Delta=1/R$, $M\ge3$, and choose a single uniform $U\in[0,\Delta)$. Put the arrival positions at times $U+k\Delta$, $k=0,\ldots,M-1$, and randomly permute particle labels. Every individual arrival time is uniform on $[0,M/R)$, just as for the independent gas, and mean flux is $R$. Nevertheless on $[0,2/R]$ there are exactly two contacts with separation exactly $1/R$. The Poisson comparison assigns zero probability to that exact spacing. The complete contact-history distance is therefore one. Independence of initial positions, not their one-body density or mean pressure, excludes this rival. P4 makes that additional statistical content explicit.



<a id="section-10-4"></a>

### 10.4 Recombination does not conceal a readable pilot ledger

 Let $E_\pm$ be signed export counts, $D_\pm$ signed consumption counts and $A$ the recombination count on one bond. For empty initial stock, 

$$

 E_+=P^++D_++A,\qquad E_-=P^-+D_-+A.

$$

 Consequently <a id="eq:ledger"></a>


$$
N(\Pi(t)-\Pi(0))=P^+(t)-P^-(t)+D_+(t)-D_-(t)+u(t).
 

$$

Equation (37).

 All retained recombination products cancel from the signed identity. Fast recombination removes surplus service but does not erase the source action from a joint ledger. A hypothetical ordinary classical reader of this ledger remains a countermodel to the older unrestricted material source, exactly as in the monograph. P3 replaces that unrestricted coupling constitution. Gauge invariance and finite work do not imply P3: $\Pi$ is gauge invariant and can be put in an additional invariant mixed energy if that extra force is permitted.

Within the new theory a reader is an ordinary device in the common $H$. Its probabilities in the Bell limit have the positive-effect form <a id="eq:effect"></a>


$$
{\mathbb P}(M=m)=\|P_mU(\psi\otimes\alpha)\|^2
       =\langle\psi,E_m\psi\rangle,\qquad 0\le E_m\le I.
 

$$

Equation (38).

 This follows from full-configuration equivariance and the actual joint unitary; it is not a separate measurement postulate. For a fixed compiled clock implementation, Proposition [A.4](/quantum-measurement/pilot-medium#kin:rate) supplies an input-uniform finite-resource error $\Delta_N$. An inaccessible reference remains in $U$ and is acted on by the identity. A direct rewrite of an actual ordinary source bit into a memory while leaving the joint field at $\psi\otimes|0_M\rangle$ would instead give positive actual probability to $M=1$ at zero coherent weight. It is not an allowed material interaction.



**Proposition 10.1 (A finite native-counter obstruction survives the new theory).**

 For $H=\hbar g\sigma_x$, $\tau=gT\in(0,\pi/4)$, no fixed positive record effect can reproduce the probability of an unchanged native $0\to1$ Bell event for all three inputs $|0\rangle$, $|1\rangle$ and $(|0\rangle-i|1\rangle)/\sqrt2$ with error smaller than <a id="eq:nativegap"></a>


$$
\frac{\sin\tau(\cos\tau-\sin\tau)}{3}.
 

$$

Equation (39).

 

 

**Proof.**

Direct two-state wave evolution gives event probabilities $\sin^2\tau,0,\sin\tau\cos\tau$. For the first and third preparations the current is forward throughout the interval, so there is at most one forward event and its probability is the loss of origin weight. For the second it is backward. If a positive effect has error at most $\varepsilon$ on all three, its trace is at most $\sin^2\tau+2\varepsilon$, whereas its expectation in the third vector is at least $\sin\tau\cos\tau-\varepsilon$. A positive expectation cannot exceed the trace. Rearrangement gives [(39)](/quantum-measurement/pilot-medium#eq:nativegap). 

□

 At $gT=\pi/8$ the gap is $(\sqrt2-1)/6$. A material apparatus with path error $\Delta_N$ cannot be a universal passive native counter with record error below this gap minus $\Delta_N$. The permitted coherent copy changes the complete source–memory field, so it does not claim to evade this obstruction. Its archive attests its own actual copy crossing. This explicitly distinguishes successful measurement from a fictitious passive record of every earlier native excursion.



<a id="section-10-5"></a>

### 10.5 Fine and coarse paths remain distinct

 For any coarse boundary with microscopic currents $j_1,\ldots,j_k$, forward mean incidence is $\sum_i[j_i]_+$, not generally $[\sum_i j_i]_+$. Their discrepancy is 

$$

 \frac12\left(\sum_i|j_i|-\left|\sum_i j_i\right|\right).

$$

 The monomial-copy theorem computes every fine current and makes this discrepancy zero at that specific boundary. It does not infer the result from a coarse clock population. Arbitrary circuit gates can have negative fine forward factors. Reduced null maps are used only to compute probabilities after retaining every receiver in the joint model; they do not supply actual trajectory rates. Expected flux integrals likewise remain expectations of counts, not sample counting measures.



<a id="section-11"></a>

## 11 Integration with the monograph and final scope

 

<a id="section-11-1"></a>

### 11.1 Dependency map

 

| Component | Prior status or premise | Present consequence |
| --- | --- | --- |
| Canonical edge source | Primitive binary quadratic action; common $\hbar$; passive ownership | Retained. It fixes every individual Hamiltonian edge current, including cycles. |
| Packet production | Bounded conservative action exporter with finite elementary charge | Retained as explicit deterministic hybrid physics. No target waiting-time sampler. |
| Signed queue | Instant opposite cancellation was supplied | Replaced by actual two-species coexistence and finite recombination; new full-state error [(13)](/quantum-measurement/pilot-medium#eq:annerror). |
| Reaction clocks | Additive Markov pair generator was supplied | Replaced by deterministic finite flight and independent spatial preparation; new complete-history error [(10)](/quantum-measurement/pilot-medium#eq:gaserror). |
| Scalar response | Equal pair response and complete reaction list | Retained microscopic premises, with explicit charge routing and channel geometry. |
| Initial equilibrium | Calibrated population and tag law | General input premise retained. The explicit basis-ready preparation derives the example's distribution with randomness only in the pilot gas. |
| Ordinary admission | Unrestricted pilot-action/ledger readers obstruct common measurement | Replaced by P3: one coherent ordinary force algebra and an explicit absent mixed pilot force. Not derived from older mechanics. |
| Actuator and archive | Conditional physical record results | Explicit autonomous common $H_F$ with actual monomial crossing proofs, loss, pending, fuel and retained reset recipients. |
| Continuation | Complete-field conditional composition | Demonstrated through archive-controlled noncommuting source gates with an inaccessible reference and joint probabilities. |
| Entropy, chamber and MPBT routes | Their stated statistical, boundary and measure premises | Preserved as separate conditional results; not invoked to select this theory's event law. |





<a id="section-11-2"></a>

### 11.2 What has been established

 With P1–P4 as its physical constitution, the finite theory has a fully specified state, deterministic event mechanism and finite resource inventory on every promised horizon. The controlled limit derives the *original minimal Bell path*, not merely an operationally equivalent alternative, for the complete declared ordinary configuration. No positive part of $J$ or division by $w$ occurs in the microscopic service or contact law. Positive and negative packet species coexist at finite resources; the proved fast-recombination estimate explains their limiting directional selection. The gas preparation explains complete conditional timing rather than just its mean.

The autonomous ordinary experiment establishes more than Born endpoints. Fine-current signs prove that copies are actual historical records at their unique crossing boundaries and remain protected through the included reset and noncommuting continuation. The full material-path bound transfers this history statement to finite pilot resources with error at most $\Delta_N$. The example retains a nontrivial reference, null branch, pending and loss weight, fuel changes and both reset receivers. Its extended preparation starts all ordinary configurations and pilot carriers at one definite ready state, with no random carrier sampler; the same dynamics produces the entangled preparation before a one-way boundary isolates its reference.

The result establishes internal closure of the stated constitutive theory and a controlled effective Bell limit. Its additional physical premises remain distinct from the older unrestricted source constitution. In particular neither the absence of a mixed pilot read force, the scalar reaction spectrum, nor the independent equilibrium/spatial ensemble is claimed to follow from gauge symmetry or generic mechanics. If any of those premises is refused, the corresponding countermodels above survive. That refusal distinguishes a different physical theory; it does not undo the conditional mathematics of this one.



<a id="section-11-3"></a>

### 11.3 Limits of the result

 The theorem is for fixed finite ordinary programmes and growing finite pilot resources. It does not give an economical material substrate, a unique empirically selected new theory, a universal continuum-field limit, Bell rates conditional on every hidden pilot coordinate, or exact finite-resource equivariance. Its exact copy theorem protects records on the first pass of the retained clock. An unmodified later clock echo unwrites them, and a longer desired retention experiment must be included in a larger declared programme. The auxiliary smooth contact module does not prove a smooth common Hamiltonian for canonical export interleaved with all reactions; such an embedding is a stronger open mechanics problem, not a premise concealed in the present hybrid claim.

Thus the original unrestricted programme is not proved inevitable. A precisely stated replacement constitution now supplies a complete event-selection and measurement-chain realization with quantitative path errors. The massive continuous-configuration completion [[5](/quantum-measurement/pilot-medium#bib-MassiveCompletion)] remains a separate alternative; its operational agreement must not be mislabeled as this Bell-path derivation.



<a id="section-11-4"></a>

### 11.4 Proofs and literature provenance

 The spin-clock identification is the finite engineered-chain mechanism of Christandl et al. [[3](/quantum-measurement/pilot-medium#bib-Christandl2004)]; the clock carrying unitary gates is the Feynman Hamiltonian construction [[4](/quantum-measurement/pilot-medium#bib-Feynman1986)]. We verify their specific matrices and solutions here instead of importing an unspecified computation theorem. Neither source supplies a Bell event-selection law. Bell-process existence is the finite-graph form of the framework in Dürr et al. [[2](/quantum-measurement/pilot-medium#bib-Bell2005)], with the needed node proof reproduced in the appendix. All gas, recombination and archive-path estimates used for closure are proved in this manuscript.

The finite clock solution, block conjugacy, monomial-cut currents, retained SWAP, resource rotations and null/reference/feedback probabilities are derived explicitly in Sections 8–9. Appendix [A](/quantum-measurement/pilot-medium#app:kinetic) includes the tracking and nodal arguments and the version 2 monograph's fixed-circuit rate refinement. These calculations establish the stated consequences of the interaction and preparation premises; they do not select those premises from generic mechanics.





<a id="section-A"></a>

## A Self-contained kinetic implication used in the limit

<a id="app:kinetic"></a> This appendix reproduces the monograph's established signed-queue argument, with notation fixed here. It is not counted as a new selection of that model. The new physical replacements are Theorems [5.1](/quantum-measurement/pilot-medium#thm:gas) and [6.1](/quantum-measurement/pilot-medium#thm:annihilation).

Let $D=|V|$, $L=\sum_e L_e$, $0<\kappa_-\le\kappa_e\le\kappa_+$, and use the oriented incidence matrix already defined. In the signed-queue comparison, $Z_e$ has only its net species, and each packet–eligible-carrier pair reacts at rate $\kappa_e\mu_N/N$. Put <a id="kin:flux"></a>


$$
\begin{aligned}x_r&=N^{-1}\#\{a:X_a=r\},\qquad m_e=\mu_N Z_e/N,\\
 \Phi_e^{N,+}&=\kappa_e x_r[m_e]_+,\qquad
 \Phi_e^{N,-}=\kappa_e x_q[-m_e]_+ .
\end{aligned}
$$

Equation (40, 41).

 These are actual normalized bulk reaction intensities, not sample counting measures. A fixed carrier at the relevant origin has rate $\kappa_e[\pm m_e]_+$. Thus its conditional rate is $\Phi_{qr}^N/x_r$ when it is at $r$. This denominator follows from counting its possible packet partners among $Nx_r$ carriers. Every service consumes one packet, hence total service count is at most $NL+O(1)$. Write $A_e^N:=k_e/N$ for the normalized cumulative signed export. The coherent nodal estimate is <a id="kin:nodal"></a>


$$
|J_{qr}|\le (2/\hbar)\|H_{qr}\|\sqrt{w_qw_r} .

$$

Equation (42).

 All graph-dependent constants below are finite at fixed graph and horizon. Write $C_B$ for an incidence norm, $C_H,C_0,C_G$ for the corresponding fixed coherent current bounds, and $c_0$ for the uniform exporter error constant. Coefficients $\kappa_e$ are fixed; arbitrarily varying kinetic coefficients are not in this theorem. Assume empty initial queues and calibrated initial populations with $\mathbb E\|x^N(0)-w(0)\|_1\to0$. Deterministic census preparation is a special case. Randomized census preparation is also allowed; conditional on the initial field, it is independent of future comparison reaction clocks. Let $z^N=Z/N$ and $e^N=A^N-\int Jdt$. The exact balance is <a id="kin:balance"></a>


$$
x^N(t)+Bz^N(t)-w(t)=x^N(0)-w(0)+Be^N(t).
 

$$

Equation (43).

 Write $\eta_N=\|x^N(0)-w(0)\|_\infty+C_B/N$ and define <a id="kin:epsF"></a>
<a id="kin:epsx"></a>


$$
\begin{aligned}\epsilon_{F,N}&=\sum_e\mathbb E\int_0^T
 \bigl(|\Phi_e^{N,+}-[J_e]_+|+
 |\Phi_e^{N,-}-[-J_e]_+|\bigr)dt,\\
 \epsilon_{x,N}&=\mathbb E\sup_{t\le T}\|x^N(t)-w(t)\|_1.
 
\end{aligned}
$$

Equation (44, 45).





**Theorem A.1 (Global mass-action tracking).**

<a id="kin:tracking"></a> For the fixed finite programme above, bounded-variation currents and <a id="kin:hierarchy"></a>


$$
\mu_N\longrightarrow\infty,\qquad \mu_N/N\longrightarrow0,
 

$$

Equation (46).

 one has $\epsilon_{F,N}\to0$ and $\epsilon_{x,N}\to0$. The theorem includes coherent cycles, current reversal, empty origins, zero coherent weights and dark intervals. It is not uniform over a growing sector graph or arbitrarily rapidly varying response coefficients. 

 

**Proof.**

We give the tracking and low-population steps separately. The same pathwise inventory and variation estimates hold after conditioning on the initial census; expectations below average that census as well as reaction clocks. Fix a cutoff $0<\delta\le1$ and, on each edge, run a companion signed queue from the same empty state and the same exports with service function 

$$

 \phi_t(u)=a_+(t)[u]_+-a_-(t)[-u]_+,\qquad
 a_+=\kappa_e\max(x_r(t-),\delta),\quad
 a_-=\kappa_e\max(x_q(t-),\delta).

$$

 All divided-difference slopes lie between $a_0=\kappa_-\delta$ and $a_1=\kappa_+$. The companion is driven by adapted coefficients; they are not asserted independent of either process. Since each physical reaction uses one of the $NL+O(1)$ packets, the sum of absolute population jumps is at most $2L+O(N^{-1})$. Hence the variations of $a_\pm$ are bounded independently of $N$ at fixed $\delta$.

For $m^*=\mu_NZ^*/N$, compensated reaction counting yields <a id="kin:companion"></a>


$$
dm^*=\mu_N[J-\phi_t(m^*)]dt+\mu_Nde^N+dM,
 \qquad d\langle M\rangle_t=\frac{\mu_N^2}{N}|\phi_t(m^*)|dt.
 

$$

Equation (47).

 Let $y$ solve the same adapted finite-variation equation without $M$, and let $y_J$ omit both $M$ and $de^N$. Scalar monotonicity and $\|e^N\|_\infty\le c_0/N$ give <a id="kin:dettracking"></a>


$$
\|y-y_J\|_\infty\le2c_0\mu_N/N,\qquad
 \|y_J\|_\infty\le J_*/a_0,\qquad J_*:=\sup_{e,t}|J_e(t)|.
 

$$

Equation (48).

 For the first inequality, write the difference equation with a measurable divided-difference coefficient $a(t)\in[a_0,a_1]$. Its solution at $t$ is $\mu_N\int_0^t\exp[-\mu_N\int_s^t a(u)du]\,de^N(s)$. This is a pathwise Stieltjes identity, not an anticipative stochastic integral. Integration by parts bounds its absolute value by $2\mu_N\|e^N\|_\infty$. The second inequality follows because the drift points toward $[-J_*/a_0,J_*/a_0]$.

The instantaneous root $f(t)=[J(t)]_+/a_+(t)-[-J(t)]_+/a_-(t)$ satisfies 

$$

 {\operatorname{Var}}(f)\le \frac{{\operatorname{Var}}(J)}{a_0}
 +\frac{J_*}{a_0^2}[{\operatorname{Var}}(a_+)+{\operatorname{Var}}(a_-)].

$$

 Contraction between jumps of $f$ and summation of its jumps imply 

$$

 \int_0^T|y_J-f|dt\le\frac{|f(0)|+{\operatorname{Var}}(f)}{\mu_Na_0}.

$$

 For $\xi=m^*-y$, production jumps cancel. The square-jump identity and monotonicity, with $V=\mathbb E\xi^2$ and $\alpha=\mu_N/N$, give 

$$

 V'\le-2\mu_Na_0V+
 \mu_N\alpha a_1(J_*/a_0+2c_0\alpha+\sqrt V).

$$

 Young's inequality absorbs the square-root term into $\mu_Na_0V$ and gives $\sup_tV\le C_\delta(\alpha+\alpha^2)$. Thus <a id="kin:R"></a>


$$
R_{\delta,N}:=\sum_e\mathbb E\int_0^T|\phi_t(m_e^*)-J_e|dt
 \le C_\delta\left(\mu_N^{-1}+\frac{\mu_N}{N}
 +\sqrt{\frac{\mu_N}{N}}\right).
 

$$

Equation (49).

 This controls directional flux because a signed queue exposes only one orientation, and 

$$

 |a_+[m^*]_+-[J]_+|+|a_-[-m^*]_+-[-J]_+|
 =|\phi_t(m^*)-J|.

$$



It remains to remove $\delta$ without assuming the desired population closeness. At time $t$ let $K=\{r:x_r<\delta\}$, and let $I_K,O_K$ be normalized queued charge directed into and out of $K$. Summing [(43)](/quantum-measurement/pilot-medium#kin:balance) over $K$ gives 

$$

 w_K+O_K\le |V|\delta+I_K+|V|\eta_N.

$$

 An incoming queue has origin outside $K$, so its origin population is at least $\delta$. Its expected service count therefore bounds 

$$

 \mathbb E\int_0^TI_Kdt\le
 \frac{L+O(N^{-1})}{\kappa_-\mu_N\delta}.

$$

 Consequently <a id="kin:smallmass"></a>


$$
\mathbb E\int_0^Tw_Kdt\le |V|\delta T+
 \frac{L+O(N^{-1})}{\kappa_-\mu_N\delta}+|V|T\mathbb E\eta_N.
 

$$

Equation (50).

 The target directional current whose physical origin lies in $K$ is therefore bounded, using [(42)](/quantum-measurement/pilot-medium#kin:nodal) and Cauchy–Schwarz, by <a id="kin:smallflux"></a>


$$
D_{\delta,N}\le C_H\sqrt{T\left(|V|\delta T+
 \frac{L+O(N^{-1})}{\kappa_-\mu_N\delta}+|V|T\mathbb E\eta_N\right)}.
 

$$

Equation (51).



Couple physical and companion queues with identical exports and minimum-rate baseline services. View companion service as baseline service with physical coefficients plus extra service where $x<\delta$. Every unmatched baseline service contracts their absolute signed queue difference by $1/N$; an extra companion service can enlarge it by at most $1/N$. Starting from equality, the expected number of baseline mismatches is at most the expected number of extra services. The latter normalized count is at most $R_{\delta,N}+D_{\delta,N}$, since it is supported on low-population origins. Comparing the two directional flux vectors thus costs at most twice this count. Adding the direct companion error gives <a id="kin:fluxbridge"></a>


$$
\epsilon_{F,N}\le3R_{\delta,N}+2D_{\delta,N}.
 

$$

Equation (52).

 Take $N\to\infty$ at fixed $\delta$, then $\delta\downarrow0$, to prove flux convergence. Finally the physical population process has drift $B(\Phi^{N,+}-\Phi^{N,-})$ and an $O(N^{-1})$ quadratic-variation budget, because it has at most $NL+O(1)$ jumps of size $1/N$. The martingale maximal inequality, initial calibration and integrated flux convergence prove [(45)](/quantum-measurement/pilot-medium#kin:epsx) tends to zero. 

□





<a id="section-A-1"></a>

### A.1 The complete tagged path and the nodal boundary

 Total variation means ${d_{\mathrm{TV}}}(P,Q)=\sup_A|P(A)-Q(A)|$ on the measurable space $D([0,T],V)$ of finite-sector càdlàg paths. It controls event ordering, exact event times, finite null windows and every common measurable stopping or coarse record of the path. It does not by itself control an additional archive absent from that output space.



**Lemma A.2 (Finite-graph Bell existence through nodes).**

<a id="kin:existence"></a> For [(1)](/quantum-measurement/pilot-medium#eq:target), the minimal rates $\lambda^B_{qr}=[J_{qr}]_+/w_r$ on positive-weight origins define a nonexplosive inhomogeneous jump process starting at $w(0)$, with law $w(t)$ at every time. If $\nu\le Cw(0)$, the same construction starts at $\nu$, remains dominated by $Cw(t)$ and does not occupy a zero-weight sector. Its conditional law is unique within this time-inhomogeneous Markov class. 

 

**Proof.**

Each open set $\{t:w_r(t)>0\}$ is a countable union of intervals. No finiteness of the nodal set is inferred from piecewise $C^1$ regularity. On compact subintervals of these positive-weight components, standard integrated-hazard first-jump construction is unique until explosion or a nodal boundary; the increasing compact localization defines the minimal process on their union. Killing at such boundaries gives the minimal forward solution. The nonnegative vector $w$ solves its forward balance equation, so successive first-jump iteration, or positive Volterra iteration, bounds each partial-transition sum by $w$; with initial $\nu$ the bound is $Cw$. If a holding path remains at $r$ while $w_r$ tends to zero, write incoming and outgoing positive currents as $I_r,O_r$. Then $\dot w_r=I_r-O_r$ and $\lambda^B_{\rm out}(r)=O_r/w_r\ge-\dot w_r/w_r$. Integrating shows that the holding survival to that zero is zero. The dominated killed law also gives 

$$

 \mathbb E N_{[0,T]}\le
 C\int_0^T\sum_{q,r}[J_{qr}(t)]_+dt<\infty.

$$

 Thus neither explosion nor nodal killing loses mass. For initial $w(0)$, normalization and domination imply equality with $w(t)$. For general $\nu$, normalization gives the asserted dominated process. The first-jump construction determines its law uniquely. This is the finite-graph existence argument underlying the standard Bell process [[2](/quantum-measurement/pilot-medium#bib-Bell2005)]; it is not a selection of that process among all event laws. 

□





**Theorem A.3 (Tagged physical-time path convergence).**

<a id="kin:path"></a> Under Theorem [A.1](/quantum-measurement/pilot-medium#kin:tracking), initialize the distinguished carrier with fixed law $\nu\le Cw(0)$ while keeping calibrated total populations. Then <a id="kin:Belllimit"></a>


$$
{d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(X_{a_*}^N),{\operatorname{Law}}(Q^B)\bigr)\longrightarrow0,
 \qquad \lambda^B(q\mid r;t)=\frac{[J_{qr}(t)]_+}{w_r(t)}.
 

$$

Equation (53).

 The target starts at $\nu$. The conclusion is unchanged by fixed positive edge coefficients or uniformly bounded initial exporter residues. 

 

**Proof.**

Let $N_\varepsilon$ count crossings of the deterministic weights through a regular level $\varepsilon$. One-dimensional coarea gives $\int_0^1N_\varepsilon d\varepsilon\le\sum_r{\operatorname{Var}}(w_r)$. There is a sequence $\varepsilon_k\downarrow0$ such that $\varepsilon_kN_{\varepsilon_k}\to0$: otherwise $N_\varepsilon$ would have a nonintegrable $c/\varepsilon$ lower bound near zero. The probability that the Bell path visits a sector while its weight is at most $\varepsilon$ is bounded by initial small-weight mass, jump influx into those sectors, and deterministic downcrossings at which the path is already in that sector. By Lemma [A.2](/quantum-measurement/pilot-medium#kin:existence) and [(42)](/quantum-measurement/pilot-medium#kin:nodal), a valid bound is <a id="kin:nodebudget"></a>


$$
b_C(\varepsilon)=C\bigl(|V|\varepsilon+
 C_0T\sqrt\varepsilon+\varepsilon N_\varepsilon\bigr).
 

$$

Equation (54).

 Jump influx uses the integrated current bound at a small destination; each downcrossing contributes at most $C\varepsilon$.

Couple the target and tagged jumps at minimum conditional intensities until they disagree, the target reaches the small-weight region, or $\sup_t\|x^N-w\|_1>\varepsilon/2$. In the remaining states, 

$$

 |\lambda^N_{qr}-\lambda^B_{qr}|
 \le\frac2\varepsilon|\Phi^N_{qr}-[J_{qr}]_+|
 +\frac{2J_*}{\varepsilon^2}|x_r^N-w_r|.

$$

 The full microscopic marginal is preserved by this coupling although its queues depend on the tag's past. The target marginal retains its own Markov rates. A union and compensator bound gives <a id="kin:pathbound"></a>


$$
{d_{\mathrm{TV}}}\le b_C(\varepsilon)
 +\frac{2\epsilon_{x,N}+2\epsilon_{F,N}}{\varepsilon}
 +\frac{C_GJ_*T}{\varepsilon^2}\epsilon_{x,N}.
 

$$

Equation (55).

 Take $N\to\infty$ at each fixed $\varepsilon_k$, then $k\to\infty$. The queue proof's cutoff $\delta$ was already removed; the two localizations are not interchanged. This proves the whole-path claim. 

□





<a id="section-A-2"></a>

### A.2 Initial independent equilibrium and fixed-circuit uniformity

 If the initial carrier positions are iid with law $w(0)$, the distinguished carrier has exactly that law, and 

$$

 {\mathbb E}\|x^N(0)-w(0)\|_1
 \le \sum_r\sqrt{w_r(0)(1-w_r(0))/N}\le\sqrt{D/N}.

$$

 The preceding tracking proof applies conditionally to the initial microstate and then averages. Its low-mass estimate already includes $\mathbb E\eta_N$; Jensen's inequality gives the corresponding square-root estimate. The martingale population bound gives 

$$

 \epsilon_{x,N}\le {\mathbb E}\|x^N(0)-w(0)\|_1
       +C_B\epsilon_{F,N}+C\sqrt{(L+1)/N}.

$$

 No independence between the later tag and census is needed: the coupling preserves the entire microscopic marginal and uses its adapted full-state intensities.

For the autonomous circuit, write $s_{nx}=|(V_n\psi)_x|^2$. Then 

$$

 w_{nx}(t)=s_{nx}\binom{\ell}{n}
  \cos^{2(\ell-n)}(\Omega t)\sin^{2n}(\Omega t).

$$

 On the first pass $[0,T]$ each time envelope is unimodal, since with $u=\sin^2(\Omega t)$ it is proportional to $u^n(1-u)^{\ell-n}$. Each weight has at most two entries or boundary contacts with a level, even if a maximum equals that level. Count sublevel entries directly; no common regular value across unknown inputs is needed. Hence the node bound can be taken as 

$$

 b(\varepsilon)\le 3D\varepsilon+C_0T\sqrt\varepsilon

$$

 uniformly over normalized inputs on this fixed graph. Currents and their variations are uniformly bounded as well: each fine current is a fixed bounded bilinear coefficient of $\psi$ times an explicit smooth clock envelope. Alternatively bounded $\|H_F\|$ and $\|\dot\Psi\|\le\|H_F\|/\hbar$ give uniform bounds on $J,\dot J$. Initial calibration, all birth budgets, $R_{\delta,N}$ and the resulting path error are consequently uniform over these inputs. For a fixed finite reference included as a configuration coordinate this statement uses that full graph. For a declared spectator fibre, the norm estimates do not depend on the fibre dimension; this does not assert equality to a different finer-sector Bell law.

On $[0,2T]$ the spin clock reverses and returns, so at most four level entries per weight give $b(\varepsilon)\le5D\varepsilon+2C_0T\sqrt\varepsilon$. The path theorem still applies across the node at $T$ and all reversed currents. The unitary echo also unwrites the circuit's records; it is a reversal test of the event law, not an archive-protection theorem beyond the first pass. Exact zero-current intervals in the general programme are included in the same estimates. Finite pilot queues can produce delayed events there, but their total path discrepancy is already in [(15)](/quantum-measurement/pilot-medium#eq:mainerror); they are not declared absent at finite resources.



<a id="section-A-3"></a>

### A.3 An explicit fixed-circuit resource rate

 <a id="kin:uniformity-rate"></a> The qualitative limit in Theorem [7.1](/quantum-measurement/pilot-medium#thm:main) uses the preceding kinetic proof. For the fixed clock circuit, its constants can also be controlled uniformly over unknown inputs. The following refinement, retained from the corrected monograph [[1](/quantum-measurement/pilot-medium#bib-Monograph)], records the cutoff dependence explicitly and supplies its complete proof. It is not a new stochastic law or a rate for growing circuits. The clock-weight shape was proved in Proposition [8.2](/quantum-measurement/pilot-medium#mat:levels).



**Proposition A.4 (Uniform fixed-circuit kinetic rate).**

<a id="kin:rate"></a> Fix the complete finite graph, the clock Hamiltonian $H_F$, its first-pass horizon $T$, and $0<\kappa_-\le\kappa_e\le\kappa_+$. Suppose the initial census has expected $\ell^1$ error $O(N^{-1/2})$ and the tag starts from $\nu\le Cw(0)$ with fixed $C$. The iid equilibrium and the known basis-ready preparations satisfy this condition. With 

$$

 \mu_N=N^{1/2},\qquad \delta=N^{-1/7},\qquad
 \varepsilon=N^{-1/35},

$$

 the signed-queue path error obeys <a id="kin:explicit-rate"></a>


$$

 \epsilon_{\rm kin}(N,T)=O(N^{-1/70}).

$$

Equation (56).

 For equilibrium use, the constants are uniform over all normalized inputs on this fixed material space. A reference included in the configuration basis is part of the fixed graph; a declared spectator fibre does not enlarge the operator-norm constants. With the gas and recombination scales of Theorem [7.1](/quantum-measurement/pilot-medium#thm:main), the full pilot path error is also $O(N^{-1/70})$. 

 

**Proof.**

Write $D=|V|$, $m=|E|$, $H_* =\|H_F\|$, and let ${\operatorname{Var}}$ denote total variation in physical time. Each edge current is a bounded quadratic form in the normalized input. Safe input-independent bounds are 

$$

 J_*\le 2H_*/\hbar,\qquad
 L\le 2mH_*T/\hbar,\qquad
 \sum_e{\operatorname{Var}}(J_e)\le 4mH_*^2T/\hbar^2.

$$

 The last inequality follows by differentiating each current expectation and using $\|\dot\Psi\|\le H_*/\hbar$. All source variation, birth and census-jump budgets in Theorem [A.1](/quantum-measurement/pilot-medium#kin:tracking) are therefore uniform.

For $0<\delta\le1$ put $\alpha=\mu_N/N\le1$ and $a_0=\kappa_-\delta$, $a_1=\kappa_+$. In the proof of Theorem [A.1](/quantum-measurement/pilot-medium#kin:tracking), the instantaneous companion root has ${\operatorname{Var}}(f)=O(\delta^{-2})$ and $|f(0)|=O(\delta^{-1})$. Its deterministic integrated tracking cost is consequently $O((\mu_N\delta^3)^{-1})$. The square-jump estimate there gives 

$$

 V'\le-2\mu_Na_0V+
 \mu_N\alpha a_1(J_*/a_0+2c_0\alpha+\sqrt V).

$$

 Using $\alpha a_1\sqrt V\le a_0V+\alpha^2a_1^2/(4a_0)$ and $V(0)=0$ yields 

$$

 \sup_{t\le T}V(t)\le
 \frac{\alpha a_1J_*}{a_0^2}
 +\frac{2c_0a_1\alpha^2}{a_0}
 +\frac{\alpha^2a_1^2}{4a_0^2}
 \le C\frac{\alpha+\alpha^2}{\delta^2}.

$$

 The deterministic export discrepancy is $O(\alpha)$, so [(49)](/quantum-measurement/pilot-medium#kin:R) and [(51)](/quantum-measurement/pilot-medium#kin:smallflux) have the explicit forms <a id="kin:cutoff-rates"></a>


$$
\begin{aligned}
 R_{\delta,N}&\le C\left[
 \frac{1}{\mu_N\delta^3}
 +\frac{\sqrt{\mu_N/N}+\mu_N/N}{\delta}\right],\\
 D_{\delta,N}&\le C\sqrt{\delta+(\mu_N\delta)^{-1}
                    +{\mathbb E}\eta_N}.
\end{aligned}
$$

Equation (57).

 Here and below constants depend on the fixed graph, programme and response bounds, not on the input or the two cutoffs.

For iid equilibrium, direct multinomial variance gives ${\mathbb E}\|x^N(0)-w(0)\|_1\le\sqrt{D/N}$. For a separately initialized dominated tag and $N-1$ independent equilibrium carriers, add at most $2/N$. The deterministic basis-ready census has zero initial error. The tracking proof applies conditionally on the initial census and then averages; Jensen's inequality handles the square root in the low-mass estimate. Its population martingale obeys 

$$

 \epsilon_{x,N}\le{\mathbb E}\|x^N(0)-w(0)\|_1
   +C_B\epsilon_{F,N}+C\sqrt{(L+1)/N}.

$$

 With $\mu_N=N^{1/2}$ and $\delta=N^{-1/7}$, the leading deterministic term of [(57)](/quantum-measurement/pilot-medium#kin:cutoff-rates) is $N^{-1/14}$, its square-root noise term is $N^{-3/28}$, and $D_{\delta,N}=O(N^{-1/14})$. Equation [(52)](/quantum-measurement/pilot-medium#kin:fluxbridge) therefore gives 

$$

 \epsilon_{F,N}+\epsilon_{x,N}=O(N^{-1/14}).

$$



For the clock family [(21)](/quantum-measurement/pilot-medium#mat:weights), each fine weight is a nonnegative input-dependent coefficient times a unimodal binomial envelope. Count entries into a sublevel set directly: each weight has at most two boundary entries on $[0,T]$, including tangencies. A coefficient may put its maximum exactly at $\varepsilon$, so a common regular value is not assumed. Initial small-weight mass, jump influx and these entries give the uniform node budget 

$$

 b_C(\varepsilon)\le C\bigl(3D\varepsilon+C_0T\sqrt\varepsilon\bigr).

$$

 Use this budget in [(55)](/quantum-measurement/pilot-medium#kin:pathbound). At $\varepsilon=N^{-1/35}$ the node term and the $\epsilon_{x,N}/\varepsilon^2$ term are $O(N^{-1/70})$; the $ (\epsilon_{x,N}+\epsilon_{F,N})/\varepsilon$ term is $O(N^{-3/70})$. This proves [(56)](/quantum-measurement/pilot-medium#kin:explicit-rate). The gas and recombination contributions are respectively $O(N^{-2})$ and $O(N^{-1/2})$, so they do not worsen this conservative rate. 

□



On $[0,2T]$ at most four level entries per weight replace the node bound by $C(5D\varepsilon+2C_0T\sqrt\varepsilon)$; the same rate applies to the reversed full path. That second pass unwrites the records and is not an extension of the first-pass archive theorem. Merely assuming $\mathbb E\|x^N(0)-w(0)\|_1\to0$ without a rate does not imply [(56)](/quantum-measurement/pilot-medium#kin:explicit-rate). Nor does this estimate apply uniformly to a growing graph, increasing fine reference, changing Hamiltonian or unbounded storage time.



<a id="section-B"></a>

## B A smooth autonomous realization of the finite contact module

 <a id="mech:section"></a> <a id="app:mechanical"></a>

This section supplies an explicit Hamiltonian for a finite family of reversible classical contact updates. Its scope is the contact module: packet births, continuous pilot-field evolution and any asynchronous exporter remain separate laws unless their simultaneous coupling is independently supplied. No Bell intensity is used in this Hamiltonian.



<a id="section-B-1"></a>

### B.1 Register cells and an explicit permutation compiler



Let the finite register have values $i\in\{1,\ldots,K\}$ and let each contact mark $c\in\mathcal C$ specify a permutation $\pi_c$ of those values. A register value may encode a finite product of carrier, packet-slot, eligibility, resource and retained-record registers. An irreversible update must first be extended injectively by retaining its overwritten value and a finite ready stock. The permutations of that enlarged register are the input to this construction.

Use canonical coordinates $q,p\in\mathbb R^2$, put $Q_i=(id,0)$, and prepare <a id="mech:cells"></a>


$$

 |q-Q_i|\le r_0,\qquad |p|\le p_*.

$$

Equation (58).

 For each $c$, choose smooth tracks $\Gamma_{c,i}:[0,1]\to\mathbb R^2$ with <a id="mech:tracks"></a>


$$

 \Gamma_{c,i}(0)=Q_i,\qquad
 \Gamma_{c,i}(1)=Q_{\pi_c(i)},\qquad
 |\Gamma_{c,i}(s)-\Gamma_{c,j}(s)|\ge a>0\quad(i\ne j).

$$

Equation (59).

 There is an elementary explicit compiler. In the first third of the programme, lift $(id,0)$ to $(id,ih)$; in the middle third translate it to $(\pi_c(i)d,ih)$; in the last third lower it to $(\pi_c(i)d,0)$. Use a smooth increasing interpolation flat to all orders at the phase endpoints. The horizontal coordinates give separation at least $d$ during the lifts and descents, and the distinct heights give separation at least $h$ during the horizontal transport. Thus $a=\min(d,h)$ works. Extend the tracks constantly outside $[0,1]$.

Choose 

$$

 0<r_0<r_{\rm core}<r_{\rm supp}<a/2

$$

 and a smooth cutoff $\chi$ equal to one on $|z|\le r_{\rm core}$ and zero on $|z|\ge r_{\rm supp}$. For prepared beam speed $v>0$ and gate duration $0<\delta<T$, define <a id="mech:field"></a>


$$

 b_c(x,q)=\frac1{v\delta}\sum_{i=1}^K
 \Gamma'_{c,i}\!\left(\frac{x}{v\delta}\right)
 \chi\!\left(q-\Gamma_{c,i}\!\left(\frac{x}{v\delta}\right)\right).

$$

Equation (60).

 This field is smooth and vanishes outside $0<x<v\delta$. At each phase its cutoff supports are disjoint. In the core of track $i$, $b_c=\Gamma'_{c,i}/(v\delta)$ and $\partial_qb_c=0$.



<a id="section-B-2"></a>

### B.2 Positive kinetic coupling and exact passage time



First regard $c_j$ as particle $j$'s fixed channel. Let $x_j,P_j$ be its longitudinal canonical coordinates, $m_b>0$ its finite mass parameter, and $\mu>0$ the register mass parameter. Take <a id="mech:H"></a>


$$

 H_{\rm gate}=
 \sum_{j=1}^M\frac{[P_j+b_{c_j}(x_j,q)\cdot p]^2}{2m_b}
 +\frac{|p|^2}{2\mu}+V(q).

$$

Equation (61).

 Here $V\ge0$ is smooth and zero on a region containing every track and its support. One may take $V=0$ globally for the finite-horizon theorem. All coefficients are fixed functions of position; there is no external time-dependent drive.



**Proposition B.1 (Autonomous nonnegative contact Hamiltonian).**

 <a id="mech:hamiltonian"></a> For every finite parameter choice, [(61)](/quantum-measurement/pilot-medium#mech:H) is smooth, autonomous, nonnegative, and has a global classical Hamiltonian flow when $V=0$. It retains the register and all incoming and outgoing beam particles. Its interaction is an explicitly declared positive position-dependent kinetic metric, rather than an ordinary scalar-potential impact. 

 

**Proof.**

Write $k_j=P_j+b_{c_j}\cdot p$. At each configuration the triangular map $(P_1,\ldots,P_M,p)\mapsto(k_1,\ldots,k_M,p)$ is invertible. The fields and their derivatives are globally bounded at fixed parameters, so this positive quadratic kinetic form is uniformly positive definite for that parameter choice. Its ellipticity constant may depend on $\delta,M$ and the programme.

Conserved energy bounds $p$, every $k_j$, and hence every $P_j$. Hamilton's velocities and forces are then bounded at that energy because the field derivatives are bounded. Local smooth flow therefore cannot escape to infinity in finite time. Nonnegativity follows directly from the squares. No particle coordinate has been removed. 

□





**Lemma B.2 (Exact separated gate on a robust core).**

 <a id="mech:exactgate"></a> Suppose particle $j$ enters at time $t_{\rm in}$ with $x_j=0$, $P_j=m_bv$, mark $c$, and the register in the core of track $i$. Suppose no other particle is in an interaction region. While the core condition holds, its exit time and register evolution are <a id="mech:time"></a>
<a id="mech:transport"></a>


$$
\begin{aligned}x_j(t)&=v(t-t_{\rm in}),\qquad
 t_{\rm out}=t_{\rm in}+\delta,\\
 p(t)&=p_{\rm in},\\
 q(t)&=\Gamma_{c,i}\!\left(\frac{t-t_{\rm in}}{\delta}\right)
       +(q_{\rm in}-Q_i)
       +\frac{p_{\rm in}}{\mu}(t-t_{\rm in}).
\end{aligned}
$$

Equation (62, 63).

 At exit $P_j=m_bv$ and the register is in the output cell $Q_{\pi_c(i)}$ up to the displayed offset and free drift. 

 

**Proof.**

On the core, $\partial_qb_c=0$ and $\nabla V=0$, so $\dot p=0$. For the active particle, Hamilton's equations give 

$$

 \dot x_j=k_j/m_b,\qquad
 \dot P_j=-(k_j/m_b)(\partial_xb_c)\cdot p,\qquad
 \dot q=p/\mu+(k_j/m_b)b_c.

$$

 Since $\dot p=0$ and $\partial_qb_c=0$, 

$$

 \frac{d}{dt}(b_c\cdot p)
       =(k_j/m_b)(\partial_xb_c)\cdot p.

$$

 Hence $\dot k_j=0$. At entry $b_c=0$, so $k_j=m_bv$ throughout. This proves [(62)](/quantum-measurement/pilot-medium#mech:time); inserting [(60)](/quantum-measurement/pilot-medium#mech:field) into the register equation gives [(63)](/quantum-measurement/pilot-medium#mech:transport). At exit the field vanishes again, so $P_j=k_j=m_bv$. 

□





**Corollary B.3 (Uniform composition through separated contacts).**

 <a id="mech:robust"></a> Assume [(58)](/quantum-measurement/pilot-medium#mech:cells) and <a id="mech:margin"></a>


$$

 r_0+\frac{p_*(T+\delta)}{\mu}<r_{\rm core}.

$$

Equation (64).

 Every sequence of nonoverlapping contacts implements the specified register permutations correctly through time $T$, including every intermediate track stage. This conclusion is uniform over the compact preparation domain and does not require a large incident mass. 

 

**Proof.**

Each successful gate preserves $p$ and translates the cell offset without rotating or amplifying it. Idle motion contributes the same free drift. Thus the offset at time $t$ from the prescribed idle cell or active track is at most $r_0+p_*t/\mu$. Inequality [(64)](/quantum-measurement/pilot-medium#mech:margin) prevents a first exit from a track core and closes the bootstrap used in Lemma [B.2](/quantum-measurement/pilot-medium#mech:exactgate). 

□



The energy before and after every separated gate is <a id="mech:energy"></a>


$$

 E=\frac{Mm_bv^2}{2}+\frac{|p_{\rm in}|^2}{2\mu}<\infty.

$$

Equation (65).

 During a gate the canonical momentum changes by $-b_c\cdot p$ while its kinetic momentum remains $m_bv$. This is the backreaction in the specified inertial interaction. The outgoing particles continue freely and are retained; on the good domain a finite receiver region of length greater than $vT$ suffices for the horizon. The incoming spatial stock is not reset. The metric, its growing derivatives as $\delta\to0$, the finite geometry and the register mass are declared resources. In particular, this is not a fixed-resource limit or a derivation of these interactions from a diagonal-mass scalar-potential collision model.



<a id="section-B-3"></a>

### B.3 Present-state logical decoding and path topology



During a finite gate, a quantizer of the bare coordinate $q$ may report a transit value or several intermediate values. Those paths need not approach a direct discrete jump in the $J_1$ Skorokhod topology. A nonzero-duration excursion through a third discrete value cannot be erased by a continuous time change.

The output used below is the *committed register value*, defined as a fixed function of the present enlarged physical state. When idle, decode the unique nearby $Q_i$. When one particle of mark $c$ is inside, its position gives $s=x/(v\delta)$; decode the unique nearby track $\Gamma_{c,i}(s)$ and report input value $i$ until exit. At $x=v\delta$, decode the output idle cell and report $\pi_c(i)$. The separation and margin conditions make this definition unambiguous. It uses the current busy-particle coordinate, not an external clock or an unretained past. A separate persistent logical record, if required, must be included in the finite register and permutation library. It is not supplied merely by naming the decoder.

For path comparison, at the first overlap or transition-strip encounter stop this decoder and set its value to an absorbing cemetery symbol; stop the completed-contact log there as well, retaining a failure flag. Before that time there are only finitely many successful contacts, so the extended logical path is càdlàg. This is a convention for the compared output on exceptional trajectories, not a change to the Hamiltonian flow, which continues. An arbitrary Borel decoder on bad phase-space states would not by itself ensure a càdlàg path.

On separated contacts the resulting path is exactly the specified register circuit with each contact delayed by $\delta$. If incident times are $t_j$, there is no contact in $(T-\delta,T]$, and the order is unchanged, a piecewise linear time change aligning $t_j$ to $t_j+\delta$ gives <a id="mech:J1"></a>


$$

 d_{J_1}(S^{\rm committed},S^{\rm instantaneous})\le\delta.

$$

Equation (66).

 One may align null contacts as well. No analogous claim is made for the unprocessed continuous-coordinate path.



<a id="section-B-4"></a>

### B.4 Smooth channel plates and the projected history bound



Prepare independent uniform incoming positions on $[-L,0]$, where 

$$

 L=Mv/R,\qquad M/R>T,

$$

 with longitudinal momenta $m_bv$. Independently prepare uniform transverse coordinates in a finite aperture, with zero transverse momentum. Partition the aperture into mark areas of fractions $\pi_c$. Choose smooth nonnegative channel functions $\zeta_c(y)$ equal to one on the respective interior plateaus, zero on other plateaus, and satisfying $\sum_c\zeta_c\le1$. Let the total transition-strip area fraction be at most $\eta$. Replace $b_{c_j}$ by 

$$

 b(x_j,y_j,q)=\sum_c\zeta_c(y_j)b_c(x_j,q)

$$

 and add free transverse kinetic energies. On a plateau the transverse derivatives vanish, so the mark stays fixed; globally the Hamiltonian is still smooth and nonnegative. A strip encounter is assigned to the failure event rather than asserted to perform an ideal gate.

Before entry the field is zero, so incident times are exactly $T_j=-x_j(0)/v$, independent uniform variables on $[0,M/R]$. Their independent marks come from the transverse geometry. Initial register state and offset are independent of the beam ensemble. No draw occurs at a contact.



**Theorem B.4 (Full projected logical-history comparison for the contact module).**

 <a id="mech:history"></a> Assume the finite permutation library, independent incoming beam ensemble, smooth plateau construction, and margin condition [(64)](/quantum-measurement/pilot-medium#mech:margin). Assume that no other interaction changes the register during this module. Let $\widehat S^\delta$ be the committed register path and $\widehat\Xi^\delta$ its completed-contact history, using the absorbing cemetery and stopped-log convention after a first overlap or strip encounter. Let $(S^{\rm P},\Xi)$ be the same permutation circuit driven instantaneously by a marked Poisson process of intensity $R{\,\mathrm d} t\,\pi_c$ on $[0,T]$. Then <a id="mech:TV"></a>


$$

 {d_{\mathrm{TV}}}\!\left(
 {\operatorname{Law}}(\widehat S^\delta,\widehat\Xi^\delta),
 {\operatorname{Law}}(S^{\rm P},\Xi)\right)
 \le
 \frac{(RT)^2}{M}+R^2T\delta+R\delta+RT\eta.

$$

Equation (67).

 The compared space consists of projected logical/contact histories, including any finite logical archives contained in the permutation library. It does not contain all microscopic beam coordinates or continuous phase-space paths. 

 

**Proof.**

For an unordered pair of independent incident times on $[0,M/R]$, the area in which both lie in $[0,T]$ and differ by at most $\delta$ is at most $2T\delta$. A union bound therefore gives 

$$

 \mathbb P(\text{overlap})\le
 {M\choose2}\frac{2T\delta}{(M/R)^2}\le R^2T\delta.

$$

 The expected number of strip encounters is $RT\eta$, so their probability is at most that quantity. A first-failure argument is sufficient: until the first such event, all previous gates are exact and the still-incoming particles are free.

Define the fictitious completed process 

$$

 \Xi_M^\delta=\sum_{j:T_j+\delta\le T}
                 \delta_{(T_j+\delta,C_j)}.

$$

 Its count is $\operatorname{Bin}(M,R(T-\delta)/M)$. Conditional on the count, the times are independent uniform on $[\delta,T]$ and the marks have law $\pi$. This is the same conditional kernel as the Poisson process restricted to $[\delta,T]$. The elementary Bernoulli–Poisson coupling gives distance at most $[R(T-\delta)]^2/M$. Adding the independent Poisson points in $[0,\delta)$ costs at most $1-e^{-R\delta}\le R\delta$.

On the good event, Lemma [B.2](/quantum-measurement/pilot-medium#mech:exactgate) and Corollary [B.3](/quantum-measurement/pilot-medium#mech:robust) identify the actual committed circuit with the same causal permutation circuit applied to $\Xi_M^\delta$. A common measurable circuit cannot increase total variation. Add the two failure probabilities and bound $T-\delta\le T$ to obtain [(67)](/quantum-measurement/pilot-medium#mech:TV). 

□



For fixed programme and horizon, the bound tends to zero if 

$$

 (RT)^2/M\to0,\qquad
 R^2T\delta\to0,\qquad R\delta\to0,\qquad RT\eta\to0.

$$

 These conditions also state the required scales if an outer construction uses a varying attempt rate $R=R_N$. Every finite member has a finite particle stock, finite energy and a smooth nonnegative Hamiltonian. Conditioning on all initial particle positions instead makes the history deterministic; the theorem does not assert a Poisson intensity under that enlarged microscopic filtration.



**Remark B.5 (Exporters and other asynchronous changes remain separate).**

 <a id="mech:scope"></a> Theorem [B.4](/quantum-measurement/pilot-medium#mech:history) is a supplementary smooth realization of the finite contact module. A packet exporter that creates, cancels or changes a queue while a cell is being transported is not covered by its hypotheses. An arbitrary finite transition can be permutation-lifted with a retained receiver, but that algebraic fact does not establish that independently scheduled or state-dependent transitions can interleave inside this gate without changing its motion. If an overall theory retains such exports as deterministic hybrid laws, they must be stated as such and given their own composition analysis. No additional full-TV bound for interleaved exporter events is claimed here.

The static field [(60)](/quantum-measurement/pilot-medium#mech:field) encodes the supplied reaction permutations. It does not select directional packet exposure, exclude other physical reaction channels, or derive their rates from a coherent Hamiltonian edge current. Nor does the classical gate proof establish quantum source/readout admission through an inaccessible reference. Those obligations are logically distinct from the mechanical theorem proved in this section. 





## Bibliography

<a id="bib-Monograph"></a>

[1] Jeremy Rodgers, *Shadow Theory and Quantum Measurement: Source Dynamics, Event Laws, and Physical Records — Two Constitutive Completions*, integrated monograph, version 2, 15 September 2026. Zenodo preprint. [doi:10.5281/zenodo.22774584](https://doi.org/10.5281/zenodo.22774584). Chapters 3–4, 6–8 and 35 give the canonical, kinetic and pilot results and their consolidated scope; Appendix D gives the supplementary smooth contact construction. The arguments needed here are reproduced in the present paper.

<a id="bib-Bell2005"></a>

[2] D. Dürr, S. Goldstein, R. Tumulka and N. Zanghì, “Bell-type quantum field theories,” *Journal of Physics A: Mathematical and General* **38**, R1–R43 (2005). [arXiv:quant-ph/0407116](https://arxiv.org/abs/quant-ph/0407116); [doi:10.1088/0305-4470/38/4/R01](https://doi.org/10.1088/0305-4470/38/4/R01).

<a id="bib-Christandl2004"></a>

[3] M. Christandl, N. Datta, A. Ekert and A. J. Landahl, “Perfect state transfer in quantum spin networks,” *Physical Review Letters* **92**, 187902 (2004). [arXiv:quant-ph/0309131](https://arxiv.org/abs/quant-ph/0309131); [doi:10.1103/PhysRevLett.92.187902](https://doi.org/10.1103/PhysRevLett.92.187902). The engineered spin-chain matrix and rotation are equations (13)–(15) in the primary paper.

<a id="bib-Feynman1986"></a>

[4] R. P. Feynman, “Quantum mechanical computers,” *Foundations of Physics* **16**, 507–531 (1986). [doi:10.1007/BF01886518](https://doi.org/10.1007/BF01886518). Earlier version: *Optics News*, February 1985; [primary-paper scan](https://www.cs.princeton.edu/courses/archive/fall05/frs119/papers/feynman85_optics_letters.pdf).

<a id="bib-MassiveCompletion"></a>

[5] Jeremy Rodgers, *A Massive Configuration Completion of the Quantum Measurement Programme*, version 2, 15 September 2026. Zenodo preprint. [doi:10.5281/zenodo.22774739](https://doi.org/10.5281/zenodo.22774739). A massive continuous-configuration constitutive alternative, cited for comparison; its event law is distinct from the minimal Bell graph path.
