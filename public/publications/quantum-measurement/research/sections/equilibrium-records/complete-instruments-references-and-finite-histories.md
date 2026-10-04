# Section 8: Complete instruments, references and finite histories

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

<a id="section-8"></a>

## 8 Complete instruments, references and finite histories

 <a id="sec:complete"></a> Let $\{K_a\}$ be a finite family on the unknown input satisfying $\sum_aK_a^\dagger K_a=I$. The map 

$$

 \psi{|{\mathrm{blank}}\rangle}\longmapsto\sum_aK_a\psi{|{a}\rangle}

$$

 is an isometry because it preserves inner products. Extend an orthonormal basis of its range to a full basis to obtain a finite unitary. A finite Hermitian logarithm supplies a bounded pulse. Alternatively the explicit resource rotations above give a fixed nontrivial family directly. The gate compiler in Section [7](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#sec:clock) implements these gates while retaining all spatial storage. This argument concerns preparation-independent linear finite instruments; it does not admit arbitrary nonlinear ray maps.



<a id="section-8-1"></a>

### 8.1 The exact finite pointer output and a strong comparator

 For one stage the physical isometry has form <a id="eq:W"></a>


$$

 W\psi=\sum_a K_a\psi{|{a}\rangle}_K\phi_a(q),
 \qquad\phi_a(q)=\phi_0(q-La)

$$

Equation (35).

 (or its finite multicoordinate version). Let $\Gamma_a$ be the disjoint physical readout regions and 

$$

 \delta_a=\int_{\Gamma_a^c}|\phi_a|^2dq,\qquad
 \widetilde\phi_a=\frac{1_{\Gamma_a}\phi_a}{\sqrt{1-\delta_a}}.

$$

 The cut packets define a *comparison* isometry $\widetilde W$ with ideal disjoint records on the same retained space. They are not claimed to be physical Gaussian preparations. If a smooth comparison packet is wanted, smooth the cut in an arbitrarily narrow boundary strip and add its norm error.



**Lemma 8.1 (Complete retained-state record error).**

<a id="lem:instrument"></a> If $\delta_* =\max_a\delta_a<1$, then <a id="eq:isometryerror"></a>


$$

 {\left\|{W-\widetilde W}\right\|}\le\sqrt{2\delta_*}.

$$

Equation (36).

 The same bound holds after tensoring any reference; it bounds the trace distance between the full pure outputs and hence the half-diamond distance of the resulting physical output channels. Any subsequent *common* coherent return acting on all retained factors preserves the full-state bound. 

 

**Proof.**

The packet squared difference is $2(1-\sqrt{1-\delta_a})\le2\delta_a$. Orthogonality of the retained key gives 

$$

 {\left\|{(W-\widetilde W)\psi}\right\|}^2
 =\sum_a{\left\|{K_a\psi}\right\|}^2{\left\|{\phi_a-\widetilde\phi_a}\right\|}^2\le2\delta_*.

$$

 For normalized vectors their pure-state trace distance is no greater than their norm difference. The proof is unchanged with an identity on $R$. Unitary invariance and channel contractivity prove the last claims. No continuity assertion for raw guidance paths is being used. 

□



For a source-only reduced instrument, tracing pointer and key would give weights and daughter mixtures. Our comparison instead retains $K$, pointer packets, resources and $R$. The classical label channel is a representation of final physical regions: for a final wave $\Xi$, its unnormalized output is $P_{\Gamma_a}{|{\Xi}\rangle}{\langle{\Xi}|} P_{\Gamma_a}$, optionally with a classical index. It is not a law that the global wave is physically projected at that time. When previously separated waves are to be recombined, use their complete coherent vector, not a dephased classical record representation.



<a id="section-8-2"></a>

### 8.2 Noncommuting continuation without a fresh probability postulate

 After a first projective write $P_a$, a stored key and a copy, let $V_a$ be a source unitary and $R_b$ a noncommuting second projector family. With a fresh second pointer, the ideal complete vector is <a id="eq:jointwave"></a>


$$

 \sum_{a,b}(R_bV_aP_a\otimes I_R)\psi\,
         {|{a}\rangle}_K{|{b}\rangle}_B\phi_a(y)\chi_b(z)
         {|{\mathrm{resources}(a,b)}\rangle},

$$

Equation (37).

 with further coherent indices included if resource vectors are not single basis states. They are never discarded merely because the display says null. For exact key-controlled gates, the actual finite displayed probabilities are <a id="eq:noisymarks"></a>


$$

 {\mathbb P}(\widehat A=r,\widehat B=s)
 =\sum_{a,b}G^A_{r|a}G^B_{s|b}
                      {\left\|{(R_bV_aP_a\otimes I_R)\psi}\right\|}^2,

$$

Equation (38).

 where $G^A_{r|a}=\int_{\Gamma_r}|\phi_a|^2$ and similarly for $B$. Since the first actual pointer is held, this is also the law of its *earlier* declaration and the later declaration. Its classical history error from the ideal finite instrument is at most $\delta_A+\delta_B$. For literal position feedback add [(25)](/quantum-measurement/research/equilibrium-records/physical-records-that-remain-true-about-their-past#eq:feedbackbound) and keep its separate immutable archive. Conditional normalization costs the ordinary probability denominator; it is not an unqualified exact branch rule.



**Definition 8.2 (Declared record and routed archive history).**

<a id="def:history"></a> For a finite list of $J$ declared records, fix for each $j$ its declaration time $t_j$, its position classifier and a promised holding interval $I_j=[t_j,T_j]$. Let $L_j$ be its actual position label at $t_j$. A predetermined archive route identifies which retained physical register carries this label at each time in $I_j$: the old register is used throughout a copy, and the receiver is used only after its completed copy cut. Each routed segment satisfies the stated holding hypothesis. Write $R_j(t)$ for the routed register's actual label and define 

$$

 \mathcal Y=\bigl(L_j,(R_j(t))_{t\in I_j}\bigr)_{j=1}^{J}.

$$

 Use the common sigma field generated by the labels and evaluations of these symbolic paths. For the side convention below, a genuine cell change persists on an open time interval and is detected at a rational time; the nonconstant-hold event is therefore measurable. At a boundary contact, the symbolic path retains its most recent open-cell label until the coordinate enters another open cell. At the fixed declaration and copy cuts, boundary configurations have equilibrium probability zero. Thus the history concerns genuine side changes, not a separate contact-triggered or timestamped event. For a joint comparison at the common final time $T$, extend every archive route beyond $T_j$ when necessary: its terminal register remains protected under the stated holding hypotheses until $T$. These extra holding segments enter the archive-error budget even though $\mathcal Y$ reports only $I_j$. The ideal symbolic history is obtained by drawing the ideal finite instrument's labels and keeping each fixed along its declared archive route. This observable omits the raw positions, clock trajectory and unrecorded microscopic passage times. 





**Theorem 8.3 (Finite complete measurement-chain closure).**

<a id="thm:closure"></a> Fix a finite programme of the stated resource gates, massive writes, copies, retained resets, bounded protected internal exposures, and coherent or smooth spatial feedback. Let its horizon be $T$, let its declared records and archive routes be fixed as in Definition [8.2](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#def:history), and let $m$ bound the retained display packet factors at the final comparison cut. Replacement archives are included among these factors. Supply the complete equilibrium initial law and the finite ready stock. Then: 

1. The autonomous model [(28)](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#eq:auto) has a conservative complete actual path law given by [(6)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:pathlaw), including its clock and all returning systems.

2. For worst Gaussian classification tails $\delta_j$, total full-wave protection/gate error $\epsilon_{\rm gate}$, and the $L^2$ clock error $\varepsilon_0$, its complete final retained-state error against the ideal disjoint-record instrument on the same retained output space; including the clock, keys, resource products, reset receivers and reference; is at most <a id="eq:totalwave"></a>


$$

 E_{\rm out}=\min\left\{1,\varepsilon_0+\epsilon_{\rm gate}
                                  +\sum_{j=1}^m\sqrt{2\delta_j}\right\}.

$$

Equation (39).

 The convention is trace distance for the complete retained quantum output (or half-diamond distance for its linear output channel), together with probabilities of physical records. It is not TV distance on the ontic pair $(\Psi,Q)$: different exact global waves need not be close in that much stronger sense.

3. Along all routed holding segments through the final comparison time $T$, let $E_{\rm arch}$ be the sum of the surface budgets [(34)](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#eq:archiveerror), using the zero-current comparators and derivative errors specified in Section [7](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#sec:clock). If a declared working register is copied and then intentionally reset, also include a transfer budget $E_{\rm transfer}$: sum the pair-classification errors $\delta_{\rm old}+\delta_{\rm copy}$ and the complete endpoint comparison error at each such copy cut. More explicitly, at a copy cut $t_r$, an untruncated full-wave comparison $\eta_r$ to the nominal joint Gaussian copy state gives the admissible term $\delta_{{\rm old},r}+\delta_{{\rm copy},r}+\eta_r$; one may take $\eta_r\le\varepsilon_0(t_r)+\epsilon_{\rm gate}(t_r)$ for that prefix. The law of the joint symbolic history $\mathcal Y$ in Definition [8.2](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#def:history) differs from the corresponding ideal constant-hold record law by at most the bound below. The same bound applies to the joint law of its earlier declarations and retained final displays: <a id="eq:totalhist"></a>


$$

 E_{\rm hist}\le\min\{1,E_{\rm out}+E_{\rm arch}+E_{\rm transfer}\}.

$$

Equation (40).

 For registers declared directly in their permanent archive and never transferred, $E_{\rm transfer}=0$. In the exact driven key-preserving library, $E_{\rm arch}=0$ and the sharper purely classical classification bound is $\sum_j\delta_j$ when every displayed occurrence is included and no other perturbation is present.

4. For every fixed finite ideal programme and tolerance $\epsilon>0$, finite pointer separations, protection gaps where used, feedback profiles and clock resources can be chosen so that these displayed bounds are below $\epsilon$. The exact physical theory remains [(2)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:H)–[(4)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:equilibrium); only finite resources are adjusted.

 

 

**Proof.**

Conservative existence was established for the complete smooth domain in Lemma [2.4](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#lem:exist). Every stage is a finite unitary in that domain. Multiply the stages retaining every old key and resource, including reset receivers. First compare perturbed gates to the nominal driven key-controlled programme, using Proposition [6.1](/quantum-measurement/research/equilibrium-records/protected-coherent-transport-in-the-same-inventory#prop:gap) and feedback Duhamel on the nominal stage inputs. In particular, each protection-stage comparison is evaluated on its encoded ideal prefix in the promised subspace $P$; earlier leakage is carried by the common actual suffix, not assumed absent. Each suffix is a common unitary, so prefix discrepancies are preserved; the estimates are uniform over the unknown input and $R$ with the specified prepared material bank. Add the clock's full retained-wave error.

At the *final comparison cut*, the nominal wave is an orthogonal history-key expansion with real Gaussian factors for each retained display and the complete source/resource coefficients. These displays include all replacement archive receivers; an intentionally reset original pointer is a ready factor, not a carrier of its former record. Truncate these display packets into their assigned cells only at this cut. On a branch, the norm-squared mass removed from its product of packets is at most $\sum_j\delta_j$. Orthogonality of the retained history keys then gives a full vector error at most $\sqrt{2\sum_j\delta_j}\le\sum_j\sqrt{2\delta_j}$ by the proof of Lemma [8.1](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#lem:instrument). This yields a disjoint-record comparator with precisely the ideal history coefficients, on the same full retained space. Pure-state trace distance and position readout contractivity prove [(39)](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#eq:totalwave). Cut packets are not propagated as if they were stationary oscillator ground states; the support truncation is a final comparison construction only. Subsequent common coherent returns preserve its full-state error but need not preserve its initial record separation.

For history, couple a path's earlier declared labels to its actual final archived labels on the same probability space. A held label can change only by a specified surface crossing. A transfer to a fresh copy can additionally mismatch at the copy cut: its joint endpoint probability is bounded by $\delta_{\rm old}+\delta_{\rm copy}$ in the nominal wave, plus the complete comparison error at that cut. Stop protecting the old register when its deliberate reset begins, and protect the receiving archive from then on. The zero-current driven comparators, or the separately controlled $W_2$ driven discrepancies, permit Theorem [7.3](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#thm:history) on each segment. Terminal archive protection continues to $T$, even for a shorter reported interval $I_j$. A union bound therefore gives mismatch probability at most $E_{\rm arch}+E_{\rm transfer}$. Outside this mismatch event, every routed symbolic path is constant and equal to its own earlier declaration and final archived label. Apply the deterministic constant-hold embedding to the final record vector. Comparing that vector to the ideal law costs $E_{\rm out}$, and a common measurable embedding contracts total variation. This proves [(40)](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#eq:totalhist) for $\mathcal Y$ without a path-TV inference from wave closeness. The finite family of protected segments and copy cuts is fixed by the programme, so no unmodelled adaptive timing or external record reader is used.

For feasibility first choose pointer separations to make Gaussian tails small. Any literal feedback derivative residual can simultaneously be made small by the Gaussian-tail estimate after Theorem [7.3](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#thm:history), with a separate archive if used. Choose bounded internal protection gaps large enough for the finite sum of [(26)](/quantum-measurement/research/equilibrium-records/protected-coherent-transport-in-the-same-inventory#eq:gap); no unbounded nuisance operators have been included. Smooth any bounded internal switching as above, including its finite error in $\epsilon_{\rm gate}$. The finite apparatus inventory is then fixed. Its constants $A_{r,T},B,C_{\rm tr}$ are finite. Increase $M_c$ and choose $s_c=\sqrt{\hbar T/(2M_c)}$ so both clock-wave and archive-history bounds become arbitrarily small. All choices are finite at positive $\epsilon$. The limits are taken in this order, not uniformly over an unbounded growing graph or an infinite observation horizon. 

□





<a id="paragraph-2"></a>

#### Conditioning and returning branches.

 Let $P,Q$ be laws on the same retained output or declared-history space, with ${d_{\rm TV}}(P,Q)\le\epsilon$. For a common event $E$, write $p=P(E)$ and $q=Q(E)$. If both $p>0$ and $q>0$, Lemma [A.1](/quantum-measurement/research/equilibrium-records/appendix-a-a-compact-proof-of-complete-output-and-conditioning-bounds#lem:conditional-bound) gives conditional classical error at most $\min\{1,2\epsilon/p\}$; the sufficient condition $\epsilon<p$ guarantees $q>0$. The same lemma gives the quantum normalization bound for positive unnormalized outputs on the same retained space, again requiring both traces to be positive. A zero-probability event has no normalized conditional branch, and capping an error estimate at one does not create that branch. Arbitrarily rare branches have no uniform guarantee.

Equation [(37)](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#eq:jointwave) and its general resource version, rather than a single sampled daughter, specify a complete return experiment. The reference is never accessed; all source maps tensor $I_R$. A common subsequent unitary acts on the complete retained state, including every returning controller and receiver. It preserves the full-state error but need not preserve record separation or historical readability after an intentional echo. Those claims retain the separate holding and transfer hypotheses of Theorem [8.3](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#thm:closure).



<a id="paragraph-3"></a>

#### Preparation information is retained.

 In the autonomous theory the clock's actual position is part of the initial configuration. Exposing it, or any other microscopic coordinate, changes the conditioning in [(6)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:pathlaw). A physically acquired coordinate record must be an extra material coupling and retain its receiver. A factorized ready packet at a fixed time does not prove independence conditional on every hypothetical unrecorded previous passage time. The theorem uses complete initial equilibrium and a finite independent stock; it does not invoke the monograph's conditional nodal extraction as a nonexistent global preparation theorem.
