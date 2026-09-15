# Chapter 6: A deterministic pilot medium and its Bell limit

<!-- Fixed Version 2 source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\PP = \mathbb P
\QQ = \mathbb Q
\tr = \operatorname{tr}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\id = \operatorname{id}
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\pos = [#1]_+
\norm = \left\lVert#1\right\rVert
\proj = \ket{#1}\bra{#1}
\ii = \mathrm i
\pLaw = \operatorname{Law}
\pVar = \operatorname{Var}
\pSupp = \operatorname{supp}
\mcH = \mathcal H
\mcS = \mathcal S
\mcNcdf = \mathsf F
\mcNtail = \overline{\mathsf F}
\kinTV = d_{\mathrm{TV}}
\kinLaw = \operatorname{Law}
\kinVar = \operatorname{Var}
\accTV = d_{\mathrm{TV}}
\accLaw = \operatorname{Law}
\accVar = \operatorname{Var}
-->

<a id="p:chapter-medium"></a> 

The preceding kinetic chapters identify a precise conditional bridge: canonical action export, scalar signed-queue service and population calibration imply the complete Bell path in physical time. In Remark [5.4](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:boundary), instantaneous directional cancellation, intrinsic Markov chemistry and the admission of record contacts remain physical commitments. We now replace the first two by explicit finite pilot dynamics and state a new common material interaction catalogue. The signed queue survives as a comparison process, so Theorems [4.1](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:tracking) and [4.3](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:path) are used without repeating their proofs. 

The new ingredients have separate roles. Independent initial positions in a finite freely moving gas generate a controlled Poisson contact-law limit. Opposite activation species coexist and may both react at every finite resource size; rapid binary recombination makes their complete reaction histories close to those of the signed queue. A designated carrier represents the entire ordinary configuration. The next chapter puts source, apparatus, actual copies, reset recipients and continuation inside one autonomous ordinary Hamiltonian and proves historical faithfulness along that carrier's limiting path. 

These are new constitutive and effective results. They do not derive the complete interaction catalogue from source/readout incompleteness, nor identify it with the distinct entropy, chamber or MPBT constitutions developed later. The broader physical-access countermodels remain valid when their extra couplings are admitted. 

For a fixed ordinary configuration basis the target is <a id="p:target"></a>


$$

 J_{YX}(t)=\frac{2}{\hbar}\operatorname{Im}
     \bigl(\Psi_Y(t)^*H_{YX}(t)\Psi_X(t)\bigr),\qquad
 \lambda^B_{Y\leftarrow X}(t)=\frac{[J_{YX}(t)]_+}{w_X(t)},
 \quad w_X(t)=|\Psi_X(t)|^2.

$$

Equation (6.1).

 The quotient is used at positive-weight occupied origins, with nodes handled by Lemma [4.2](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:existence). All total variations below use the convention ${d_{\mathrm{TV}}}(P,Q)=\sup_A|P(A)-Q(A)|$ on a stated common output space. The Bell output is the complete designated ordinary path. The pilot medium has additional retained coordinates; conditioning on all of their initial values makes the finite process deterministic. 

Each experiment has a fixed finite graph, a prescribed bounded piecewise $C^1$ coherent programme with bounded-variation currents, and a fixed horizon $[0,T]$. A controller responding to records is included as an ordinary factor in the same Hamiltonian; it is not an unanalysed adaptive change to the deterministic source programme. The autonomous construction uses a static finite $H_F$. Pilot resources grow while the ordinary graph, $H$ and $T$ remain fixed. 



<a id="section-6-1"></a>

## 6.1 The microscopic constitution

 

<a id="section-6-1-1"></a>

### 6.1.1 Complete state and interaction catalogue

 Let $V$ be the finite configuration set of *all ordinary material systems in the experiment*. A configuration specifies source, actuator, excitation, fuel, loss remnants, working display, archive, every reset receiver, control clock and any finite inaccessible reference. A reference with an actual basis coordinate is included in $V$; already-isolated reference experiments use blocks $H_{\rm local}\otimes I_R$. The explicit preparation variant below first entangles the reference, then proves its isolation beyond a one-way clock boundary. An internal reference fibre is an alternative declared sector convention, not an unnoticed coarse graining of a finer Bell process. 

Fix an orientation $e=(r,q)$ for each off-diagonal bond in the union of the programme's nonzero supports and set $b_e=e_q-e_r$, where $(e_r)_{r\in V}$ is the free vertex basis. The incidence matrix $B$ has columns $b_e$. The complete microstate consists of <a id="p:eq-microstate"></a>


$$
\left(\Psi,(\chi_e,\Pi_e)_e,(u_e,k_e)_e,
       (X_a)_{a=1}^N,\mathcal P,\mathcal F,\mathcal G,\mathcal R\right).
 

$$

Equation (6.2).

 Here $\mathcal P$ is the finite bank of charged, unused and spent packet slots; $\mathcal F$ contains exporter blank/fuel cells; $\mathcal G$ contains every incoming and outgoing gas coordinate; and $\mathcal R$ contains all contact products and history receivers. One predesignated carrier, say $Q=X_1$, is the actual ordinary configuration. All carrier labels obey identical rules. The remaining carrier positions are pilot degrees of freedom on configuration space, not extra independently prepared copies of the ordinary quantum input. 

The laws are the following complete inventory. 

1. P1. The normalized canonical field and primitive bond connections obey the action in Section [6.2](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:sec-source). All ordinary forces, including coherent feedback, enter its numerical Hermitian matrix $H$. An ordinary controller is another factor in that same matrix.

2. P2. The pilot medium has the bounded action exporter, packet spectrum and contact reactions specified below. The reaction list is complete. Scalar carrier response and the common action unit are physical assumptions.

3. P3. There is no additional force vertex $f(\Pi,\mathcal P,\mathcal G,\mathcal R,X_2,\ldots)B_{\rm ordinary}$ in the field energy or a direct classical rewrite of an ordinary display. The pilot medium influences ordinary configurations through the specified carrier motion only. All new ordinary apparatus must be represented in $H$ and obey the same rule.

4. P4. Gas flight and collision contact are deterministic. The only randomness is a declared initial ensemble: independent spatial pilot-gas positions and marks, and an initial carrier ensemble. Conditional on the declared initial field, the joint law factors as gas ensemble times carrier ensemble. No future event times or desired Bell transition probabilities are used in preparation.

 P3 is a new interaction law. It is not an instruction to disregard a readable variable after permitting its read coupling. It asserts that such a coupling is absent from the equations. This differentiates the pilot gas from unrestricted ordinary classical matter. Quadratic ordinary energies form a closed algebra, 

$$

 \{\Psi^\dagger A\Psi,\Psi^\dagger D\Psi\}
   =\Psi^\dagger[A,D]\Psi/(i\hbar),

$$

 which motivates using the same coherent constitution for arbitrary composed apparatus. This algebraic observation does not derive P3. The force catalogue, special species and initial ensemble are explicit new physics. 



<a id="section-6-1-2"></a>

### 6.1.2 Energy, reversibility and finite resources

 The microscopic theory is a *hybrid* theory: a canonical field, deterministic free flight and explicit deterministic contact/export rules. It is not advertised as a derivation of all these laws from one smooth Hamiltonian. The autonomous ordinary circuit is a single finite Hermitian Hamiltonian. Chapter [D](/quantum-measurement/monograph/appendix-d-smooth-autonomous-realization-of-isolated-pilot-contacts#p:smooth) separately supplies a smooth positive kinetic Hamiltonian for a finite contact-permutation module; the main theorem uses the exact hybrid contact law. 

Every contact map has a reversible finite lift with a blank receiver: pair the input $(s,\mathrm{blank})$ with $(F_c(s),\mathrm{record}(c,s))$ by a transposition, on a disjoint flagged output bank, and fix unused states. Here $s$ is the finite local logical input (packet species, carrier vertex and local flags), not the continuous complete field state. The outgoing receiver retains that local input. This proves finite reversible logic, not by itself smooth mechanical realizability. The incoming ensemble uses blank receivers, so inverse collisions require a different prepared incoming product. There are at most $M_N$ contacts and $\sum_e B_e$ exports on the promised horizon, hence finite preallocated capacity suffices. Spent particles and cells stay in [(6.2)](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:eq-microstate). 

For a total definition outside the promised resource horizon, an attempted export after the last unused slot sets a retained exhaustion flag, disables further exports, and leaves $\Pi$ and the now unbounded residue to their continuous evolution. Existing packets can still react. An exhausted contact-record bank sets its own retained flag and uses a fixed identity contact rule. Every exact tie is processed in a fixed order of channel and export labels. These branches make the finite device total; the stated budgets render them unreachable on the proved physical horizon. The final gas particle simply leaves the plane and remains in the outgoing inventory. 

For a minimal energy assignment all pilot register states are degenerate and gas momentum is unchanged at ideal contact. The source action energy is conserved for static $H$. An export changes only the decomposition of a continuous stored action into a packet and a bounded remainder, not $\Psi,\Pi$ or this energy. Finite blank registers are consumed as low-entropy resources; a reset never produces them for free. Nondegenerate ordinary fuel and loss accounting is displayed in the material construction. A stronger universal smooth Hamiltonian or empirical material implementation is outside the constitutive claim. 



<a id="section-6-2"></a>

## 6.2 The canonical source interface and two-species export

 <a id="p:sec-source"></a> Adopt the normalized canonical field and primitive connection action [(3.3)](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:action)–[(3.4)](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:energy), with the passive ownership and binary-additivity hypotheses of Theorem [3.1](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:ownership). At the prepared connection $\chi(0)=0$ its equations are <a id="p:eq-ownership"></a>


$$

 i\hbar\dot\Psi=H\Psi,\qquad \dot\chi=0,\qquad
 \dot\Pi_e=J_e,\qquad \dot w=BJ.

$$

Equation (6.3).

 Thus the source supplies each individual Hamiltonian edge current, not only its divergence. The loop-current counterexample [3.2](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:loop) still applies when primitive binary additivity is dropped. The conserved source moment map is $B\Pi-w$; none of this selects the new physical contact law before it is specified. 

The exporter below uses the same unit action bookkeeping as Proposition [3.3](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:export), but it retains both packet orientations instead of cancelling opposite arrivals immediately. Take $k_e(0)=u_e(0)=0$ and $u_e=N(\Pi_e-\Pi_e(0))-k_e$. At a first hit $u_e=s\in\{-1,1\}$, put a packet of species $s$ in the next unused slot, mark its dedicated exporter blank/fuel cell spent with the retained sign and slot identifier, advance $k_e$ by $s$, and set $u_e$ to zero. Both species may remain simultaneously present. No cancellation is part of export. Tie events use a fixed ordering; gas ties with deterministic export times have probability zero. If $L_e\ge\int_0^T|J_e|{\,\mathrm d} t$, then <a id="p:eq-export"></a>


$$
\left\|\frac{k_e}{N}-\int_0^\cdot J_e{\,\mathrm d} t\right\|_\infty\le\frac1N,
 \qquad \#\mathrm{exports}_e\le NL_e.
 

$$

Equation (6.4).

 Indeed the first error is $-u_e/N$ and each full excursion consumes at least $1/N$ of action variation. Bounded nonzero initial residues give $2/N$ error and at most one extra birth. Choose $B_e=\lceil NL_e\rceil+1$ slots before the experiment. A bound from $H,T$ alone can be used, so the apparatus need not know an unknown input vector. The exporter uses finite increments of a canonical coordinate; it does not evaluate the Bell escape rate or supply a stochastic production clock. 



<a id="section-6-3"></a>

## 6.3 Binary species and contact geometry

 

<a id="section-6-3-1"></a>

### 6.3.1 Routing from a declared charge spectrum

 A carrier at $r$ has vector charge $e_r$. A positive packet on $e=(r,q)$ has charge $b_e=e_q-e_r$, a negative packet has $-b_e$, and spent slots and products are neutral. The elementary service consumes one packet and changes one carrier into one carrier. All other participants are neutral. Then 

$$

 e_i+e_q-e_r=e_j

$$

 forces $i=r,j=q$: otherwise the coefficient of $e_r$ on the left is negative. Thus the two possible services are <a id="p:eq-service"></a>


$$
P_e^++C_a@r\longrightarrow C_a@q+\mathrm{spent},\qquad
 P_e^-+C_a@q\longrightarrow C_a@r+\mathrm{spent}.
 

$$

Equation (6.5).

 Opposite packets can recombine to neutral products. This is routing from stoichiometry and charge, not from the sign of an instantaneous current. Charge does not derive completeness of the binary species list. Charged receivers, multipacket conversion and multicarrier moves would define other theories. 

Writing $n_r=\#\{a:X_a=r\}$ and $Z_e=P_e^+-P_e^-$, the complete hybrid inventory <a id="p:eq-charge"></a>


$$
\mathcal C=n+BZ+Bu-Nw
 

$$

Equation (6.6).

 is conserved. Between events $\dot u=NJ$ and $\dot w=BJ$ cancel. A signed export changes $u_e$ by $-s$ and $Z_e$ by $s$; service changes $n$ by $sb_e$ and $Z_e$ by $-s$; recombination changes neither $n$ nor $Z$. Initially $\mathcal C=n(0)-Nw(0)$. This is an exact inventory identity, not an unsupported claim that the whole hybrid theory has a common Noether action. 



<a id="section-6-3-2"></a>

### 6.3.2 Deterministic candidate contacts

 Allocate a fixed channel for every potential pair $(e,b,a)$ of packet slot and carrier, with frequency parameter $r_{eba}=\kappa_e\mu_N/N$. Allocate a channel for every unordered pair of slots on edge $e$, with parameter $a_e>0$. A contact tests only the current species and carrier vertex. An eligible service implements [(6.5)](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:eq-service); opposite slot species recombine and retain their signs and identities in the outgoing product; other contacts are null. The total candidate frequency is <a id="p:eq-candidate"></a>


$$
R_N=\sum_e\left(\kappa_e\mu_NB_e+a_e\binom{B_e}{2}\right).
 

$$

Equation (6.7).

 If the graph has no off-diagonal bonds, $R_N=0$, no beam is needed and the ordinary configuration is constant. Otherwise $R_N>0$. Partition a transverse cross-section into cells of relative areas $r_c/R_N$ for these channels. All frequencies and areas are fixed independently of $\Psi,w,J$ and the future material history. The scalar $\kappa_e$ expresses equal response for all carriers on that bond. There is no rule suppressing a minority packet's service. 

Prepare $M_N$ distinguishable pilot particles with independent positions uniform on $[-L_N,0]$, equal speed $v>0$, and independent uniform transverse coordinates. Put $L_N=M_Nv/R_N>vT$. Each incoming particle freely crosses the contact plane once, at $t_i=-z_i/v$, and its transverse coordinate selects a channel. Its outgoing state and blank receiver are retained. The microdynamics from all initial coordinates is deterministic. 



<a id="paragraph-1"></a>

#### Which contact marks are compared.

 The primary input is the ordered contact history with channel marks identifying the contacted edge, packet slot(s) and carrier. The initialized reaction device is independent of the gas conditional on the declared coherent preparation. Its output follows one common measurable causal map with the stated tie and virtual-overflow conventions. Neither all initial gas positions nor conditioning on them belongs to this comparison. 

If the physical identity of each incoming particle is also retained in the output, decorate both count-conditioned laws identically. Conditional on $k\le M_N$ arrivals, their particle identities are a uniformly ordered $k$-subset of the $M_N$ labels, independent of the ordered times and channel marks. For the Poisson comparison, draw one independent uniform permutation of those labels, use its initial segment, and assign new virtual receiver identities if $k>M_N$. This is a common conditional kernel; it does not make particle identities iid marks. Channel marks remain independent with the stated probabilities, and chemistry is independent of the beam identity, so the reaction rates below are unchanged. 



<a id="section-6-4"></a>

## 6.4 Deriving complete timing from the spatial ensemble

 For comparison only, extend the reaction-map domain to a countably padded bank of virtual blank contact receivers. The first $M_N$ cells are the physical bank; the further cells have no counterpart in the physical finite beam, which cannot reach them. A Poisson contact sequence can use those mathematical extra cells, preserving its uncompromised reaction generator. Both contact histories are fed through this one total causal map. This convention avoids assuming that a Poisson count has a finite deterministic bound. It neither adds physical particles nor drops physical receivers. Accepted service and recombination events still have the finite stock bound below. 



**Theorem 6.1 (Finite-gas marked-history bound).**

<a id="p:gas"></a> Under the independent initialization and common output conventions just specified, on $[0,T]$ the complete marked contact process differs in total variation from a marked Poisson process of channel frequencies $r_c$ by at most <a id="p:eq-gaserror"></a>


$$
\Delta_{\rm gas}=\frac{(R_NT)^2}{M_N}.
 

$$

Equation (6.8).

 The same bound holds after any common measurable causal deterministic contact device, including its retained reaction state and exact event times. The compared output includes the local contact receivers, indexed in contact order; it does not include the incoming gas's unobserved continuous coordinates. Those remain in the physical microstate. 

 

**Proof.**

The number of beam crossings is $\operatorname{Bin}(M_N,p)$, $p=R_NT/M_N$. Conditional on that number, the ordered times are ordered independent uniforms on $[0,T]$ and marks have probabilities $r_c/R_N$. The Poisson process has exactly the same conditional distribution given its count, so contact-history total variation equals count total variation. A Bernoulli$(p)$ variable and a Poisson$(p)$ variable have distance $p(1-e^{-p})\le p^2$: their only excess Bernoulli mass is at one. Coupling $M_N$ independent such pairs and summing gives distance at most $M_Np^2$. On equal contact histories, the deterministic device evolves identically, including eligibility and all null records. Projection therefore contracts this bound. 

□

 The finite gas has neither memoryless waits nor an inserted event tape. Given $K_t$ observed arrivals, its total conditional hazard is 

$$

 \frac{M_N-K_{t-}}{M_N/R_N-t},
 \qquad
 {\mathbb P}(\text{no arrival in }(t,t+h]\mid\mathcal F_t)
  =\left(1-\frac{h}{M_N/R_N-t}\right)^{M_N-K_t}.

$$

 The survival formula has $0\le h\le M_N/R_N-t$; the left limit in the hazard makes it predictable. These formulas follow by conditioning the remaining independent positions. In the Poisson comparison, independence of channel increments and predictable eligibility give, for a bounded state function $f$, <a id="p:eq-generator"></a>


$$
\mathcal Gf(s)=\sum_c r_c\,[f(F_c(s))-f(s)]
 

$$

Equation (6.9).

 as the jump part of the predictable compensator, almost everywhere in time. The full evolution also contains the specified deterministic flow and export rewrites. This is the derivation of both chemical clocks. It is stronger than a mean collision-frequency calculation. The spatial independence assumption is indispensable: equally spaced particles with a uniform global translation have the same uniform one-particle marginals but different complete waiting-time laws (Chapter [8](/quantum-measurement/monograph/discrimination-retained-information-and-constitutive-scope#p:chapter-discrimination)). 



<a id="section-6-5"></a>

## 6.5 Recombination and the removal of surplus

 For the Poisson contact comparison, every eligible packet–carrier pair has derived rate $\kappa_e\mu_N/N$, and every opposite slot pair has derived rate $a_e$. Let $P_e^\pm$ be species counts, $m_e^{\rm mix}=\min(P_e^+,P_e^-)$, and $A_e,D_e$ the recombination and service counts. Exactly <a id="p:eq-stock"></a>


$$
P_e^+(t)+P_e^-(t)+2A_e(t)+D_e(t)=\#\mathrm{births}_e(t)\le B_e.
 

$$

Equation (6.10).

 The accepted reaction process is nonexplosive. Both service directions are active whenever both species and their origins are populated. 



**Theorem 6.2 (Full reaction-state recombination comparison).**

<a id="p:recombination"></a> Assume initially empty packet stock and the stated per-edge birth budgets. Let $S^a$ denote the reaction state of the Poisson comparison: field, actions, residues, all packet slots, carriers and reaction-product receivers, including null-contact records. It does not denote the original gas flight coordinates. The two-species reaction process has a lifted comparison process whose aggregate is exactly the instantaneous signed-queue model, with <a id="p:eq-annerror"></a>


$$
{d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(S^{a}),{\operatorname{Law}}(S^{\rm lift})\bigr)
 \le \Delta_{\rm ann}:=\sum_e\frac{\kappa_e\mu_NB_e}{2a_e}.
 

$$

Equation (6.11).

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



<a id="section-6-6"></a>

## 6.6 The full Bell limit and its conditional history

<a id="p:sec-mainlimit"></a> Define $\epsilon_{\rm kin}(N,T)$ to be the signed-queue tagged-path bound [(4.16)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:pathbound), proved in Theorem [4.3](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:path). It tends to zero for fixed finite graph and programme if <a id="p:eq-kineticscale"></a>


$$
\mu_N\longrightarrow\infty,\qquad \mu_N/N\longrightarrow0,
 \qquad {\mathbb E}\|x^N(0)-w(0)\|_1\longrightarrow0.
 

$$

Equation (6.12).

 Initialize the tag from $\nu\le Cw(0)$ and the other $N-1$ carriers independently from $w(0)$, independently of the tag and gas conditional on the field. Equilibrium use takes $\nu=w(0)$, so all carriers are iid. The expected initial census error is at most $\sqrt{|V|/N}+2/N$, and the same tracking proof applies. This is an initial ensemble assumption, not a new draw at each event, a physical unknown-state sampling device, or a derivation of equilibrium preparation from dynamics. Deterministic counts with exchangeable labels instead give tag law $x^N(0)$, not exactly $w(0)$, and require adding their initial-law discrepancy if that variant is used. 



**Theorem 6.3 (Deterministic microscopic selection of the Bell path).**

<a id="p:main"></a> For the finite pilot-medium theory P1–P4, the entire designated ordinary-configuration path satisfies <a id="p:eq-mainerror"></a>


$$
{d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(Q^N_{[0,T]}),\mathbb P^B_{H,\nu,[0,T]}\bigr)
 \le \Delta_N:=\frac{(R_NT)^2}{M_N}
       +\sum_e\frac{\kappa_e\mu_NB_e}{2a_e}
       +\epsilon_{\rm kin}(N,T).
 

$$

Equation (6.13).

 In fixed physical units, $B_e=O(N)$, $\mu_N=N^{1/2}$, $a_e=N^2$, and $M_N=N^{10}$ give $R_N=O(N^4)$, gas error $O(N^{-2})$, recombination error $O(N^{-1/2})$, and $\Delta_N\to0$. No change of time accompanies this limit. The target is the nonexplosive minimal Bell process [(6.1)](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:target) with its complete natural conditional timing law. 

 

**Proof.**

Apply Theorem [6.1](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:gas) to the full causal source, exporter and contact maps. In the Poisson comparison these produce the per-slot mass-action reactions of Theorem [6.2](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:recombination). Its lifted reference projects exactly to the signed queue of Theorems [4.1](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:tracking) and [4.3](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:path). Apply the latter theorem to the designated carrier and use the triangle inequality. The growth estimates follow from [(6.7)](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:eq-candidate). Lemma [4.2](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:existence) and the nodal coupling in Theorem [4.3](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:path) identify the entire limiting law. 

□

 

For the limit, conditional on the declared initial field and programme, the full ordinary history through $t$ and current state $X$, the probability of holding at $X$ until $t+h$ is <a id="p:eq-survival"></a>


$$
\exp\left[-\int_t^{t+h}\sum_{Y\ne X}\frac{[J_{YX}(s)]_+}{w_X(s)}{\,\mathrm d} s\right]
 

$$

Equation (6.14).

 on its positive-weight component. The first-event type has the corresponding competing-hazard density. Node localization supplies continuation when a component ends. The finite theory is history dependent through its unobserved gas and packets; the theorem does not claim pointwise convergence of conditional kernels on all rare pasts. It proves total variation of complete paths, which implies convergence for every measurable history event and every common stopped output. Conditional events of ideal probability $p>0$ have error at most $2\Delta_N/p$ when $\Delta_N<p$. 

Individual edge ownership, absence of surplus, and timing thus have different proven origins. The primitive action supplies each $J_e$, not merely $BJ$; fast opposite-charge recombination removes excess physical directional service; independent incoming positions and scalar contact counting supply the complete chemical timing law; population tracking then supplies the residence denominator. In particular the denominator is not evaluated by a microscopic particle. 



<a id="paragraph-2"></a>

#### Complete configurations and projections.

 The theorem concerns $Q$, which already contains every ordinary source, archive, receiver, controller and reference coordinate of the declared experiment. It does not identify the Bell law with the full microstate [(6.2)](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:eq-microstate). All pilot histories remain physically present under their different force law. A later programme that reads or returns pilot products is not covered by silently tracing them out. P3 rules out an extra ordinary read force; changes of pilot dynamics or resource recirculation require a new estimate. Coarse records contract [(6.13)](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:eq-mainerror), but their jump rates need not be the positive part of a sum of fine currents.
