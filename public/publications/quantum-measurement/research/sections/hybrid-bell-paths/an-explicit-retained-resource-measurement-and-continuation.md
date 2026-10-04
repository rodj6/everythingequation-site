# Section 10: An explicit retained-resource measurement and continuation

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

<a id="section-10"></a>

## 10 An explicit retained-resource measurement and continuation

 <a id="mat:resources"></a>



<a id="section-10-1"></a>

### 10.1 Finite production, fuel, capture, pending and loss states



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

Equation (40).

 They are real antisymmetric matrices. The full finite unitaries are <a id="mat:rotations"></a>


$$

 U_w(\theta)=I+\sin\theta\,T_w+(1-\cos\theta)T_w^2,
 \qquad
 U_c(\varphi)=I+\sin\varphi\,T_c+(1-\cos\varphi)T_c^2.

$$

Equation (41).

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

Equation (42).

 All coefficients retain their source and reference cofactors. The entire vector, including ready and pending sectors, is subsequently used in the clock Hamiltonian.



<a id="section-10-2"></a>

### 10.2 Nine exact gates with every receiving system retained



Let $W,A,B_W$ be ternary registers, initially $0$, let $B_D$ be a second seven-state resource initially $r$, and let $K$ be a qubit initially $0$. $W$ is the working status display, $A$ its archive, $B_D,B_W$ are reset receivers, and $K$ is a later readout. The full ready state is <a id="mat:ready"></a>


$$

 \psi_{SR}|r\rangle_D|0\rangle_W|0\rangle_A
 |r\rangle_{B_D}|0\rangle_{B_W}|0\rangle_K|0\rangle_C.

$$

Equation (43).

 The independent $B_D=r$ consumes another production/fuel supply of energy $2E$. Thus the two resource banks initially contain $4E$, and their energy is conserved by the specified gates. The register labels and source/reference levels may be degenerate; the full static clock-interaction energy is conserved separately.

Define <a id="mat:status"></a>


$$

 \chi(r)=\chi(p_a)=\chi(l_a)=0,\qquad
 \chi(c_0)=1,\qquad\chi(c_1)=2.

$$

Equation (44).

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

Equation (45).

 Every unspecified factor is a spectator, and every gate acts as $I_R$. Here $H^{\rm Had}=2^{-1/2}\left(\begin{smallmatrix}1&1\\1&-1\end{smallmatrix}\right)$. Gate $U_6$ is coherent control by the archive operator; no actual pilot log or actual classical archive value is inserted into the field equation.

The clock now has $\ell=9$ and ten nodes. For a reference qubit the material space excluding the clock has dimension $2\cdot2\cdot7\cdot3\cdot3\cdot7\cdot3\cdot2=10584$; the complete clock/material graph has $105840$ vertices. Its matrix is explicitly [(34)](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:feynman) with the gates [(45)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:circuit). Tensor and permutation notation specify all entries without concealing a postselected subspace.



**Proposition 10.1 (Actual facts retained by this circuit).**

 <a id="mat:resourcehistory"></a> In its Bell limit, $W$ receives $\chi(D)$ at the unique crossing of cut $2$. This actual working value persists until its reset at cut $5$. At cut $3$, $A$ copies that value and retains it through the end of the first pass. At cut $4$, the actual old $D$ key moves to $B_D$ and $D$ becomes ready. At cut $5$, the actual old $W$ key moves to $B_W$ and $W$ becomes blank. The receiving keys remain retained. Gate $U_8$ similarly records the source computational key after the coherent Hadamard continuation. 

 

**Proof.**

The cuts $2,3,4,5,8$ are monomial. Before cut $2$, $W$ is blank; the copying permutation leaves $D$ unchanged. Gates $3$ and $4$ preserve $W$, and a return across cut $2$ is impossible. Hence the later archive copy records the same earlier actual status. Before cut $3$, $A$ is blank, and every later gate preserves its label. Gates after $4$ preserve $B_D$; those after $5$ preserve $B_W$. Apply Theorem [9.3](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:copy) at each cut. The final cut has no later gate. These arguments identify actual past facts, not merely correlations of final field weights. 

□

 The status is a fact at its registered cut. Preparation gates $0$ and $1$ can have provisional excursions; this proposition does not claim that every such excursion was recorded. A null archive value means no captured key at the registered status cut. Clock progress distinguishes that completed null read from the initially blank register.



<a id="section-10-3"></a>

### 10.3 A null result with a reference-sensitive continuation



Choose <a id="mat:input"></a>


$$

 \psi_{SR}=\sqrt{\frac23}|0\rangle|0_R\rangle+
           \sqrt{\frac13}|1\rangle|+_R\rangle,
 \qquad |+_R\rangle=\frac{|0_R\rangle+|1_R\rangle}{\sqrt2},

$$

Equation (46).

 and $\theta=\pi/3$, $\varphi=\pi/4$, $\eta=2/3$. The resource weights in [(42)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:resourcevector) are respectively ready $1/4$, pending $3/8$, captured $1/4$ and loss $1/8$. All are retained through the two SWAPs. For example, after reset the old pending or loss distinction resides in $B_D$ even though the working $D$ has returned to $r$.

Let $\mathsf N$ be the archive value $A=0$. Tracing the retained resource factors only for this calculation gives the null subchannel <a id="mat:nullmap"></a>


$$

 \mathcal N(\rho)=\frac14\rho+
          \frac12\sum_{a=0}^1P_a\rho P_a.

$$

Equation (47).

 This reduction is not the state used for the complete evolution. The ready term retains source coherence; the distinct pending and loss labels give the displayed dephased contribution. The null branch sees the identity in $U_6$, followed by a Hadamard and a computational copy. Writing $X+$ for $K=0$, one obtains <a id="mat:nullnumbers"></a>


$$

 \Pr(\mathsf N)=\frac34,\qquad
 \Pr(\mathsf N,X+)=\frac{11}{24},\qquad
 \Pr(X+\mid\mathsf N)=\frac{11}{18}.

$$

Equation (48).

 The unnormalized inaccessible-reference state in that joint outcome is <a id="mat:reference"></a>


$$

 \sigma_R^{\mathsf N,+}=\frac1{48}
       \begin{pmatrix}19&5\\5&3\end{pmatrix}.

$$

Equation (49).

 

**Proof.**

The source reduction of [(46)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:input) is $\rho_S=\left(\begin{smallmatrix}2/3&1/3\\1/3&1/3\end{smallmatrix}\right)$. Equation [(47)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:nullmap) gives $\mathcal N(\rho_S)=\left(\begin{smallmatrix}1/2&1/12\\1/12&1/4\end{smallmatrix}\right)$. Its trace is $3/4$, and its $|+\rangle$ diagonal element is $11/24$. For the reference calculation use 

$$

 |r_0\rangle=\sqrt{2/3}|0_R\rangle,
 \qquad |r_1\rangle=\sqrt{1/3}|+_R\rangle.

$$

 The ready contribution after the $+$ effect is $(|r_0\rangle+|r_1\rangle)(\langle r_0|+\langle r_1|)/8$; the other null contribution is $(|r_0\rangle\langle r_0|+|r_1\rangle\langle r_1|)/4$. Adding the two matrices gives [(49)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:reference). 

□



The captured branches exercise noncommuting record-controlled continuation. Writing $a=0$ for $A=1$ and $a=1$ for $A=2$, the four joint probabilities are <a id="mat:capturednumbers"></a>


$$
\begin{aligned}
 \Pr(a=0,X+)&=\Pr(a=0,X-)=\frac1{12},\\
 \Pr(a=1,X+)&=\frac{2-\sqrt3}{48},&
 \Pr(a=1,X-)&=\frac{2+\sqrt3}{48}.
\end{aligned}
$$

Equation (50).

 Indeed capture has probability $1/4$ times the original source population. The $a=0$ daughter is $|0\rangle$ and gives equal $X$ probabilities. The $a=1$ daughter becomes $-\tfrac12|0\rangle+\tfrac{\sqrt3}{2}|1\rangle$ under $V$, yielding the other two numbers. They sum to $1/4$. The complete reference cofactors and both reset receivers remain attached throughout.



<a id="section-10-4"></a>

### 10.4 Basis-ready preparation and transfer to finite resources





**Proposition 10.2 (A basis-ready example with randomness only in the gas).**

 <a id="mat:basisprep"></a> The concrete experiment above can start from one known complete ordinary basis configuration, with every pilot carrier in that configuration. Prepend to the nine gates [(45)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:circuit) the two gates <a id="mat:prepgates"></a>


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

Equation (51).

 Initialize $S,R$ in $|0,0_R\rangle$, and initialize all resource, receiver, display and clock factors in the basis-ready states already listed. There are now eleven gates, twelve clock nodes and $127008$ complete ordinary configurations for a reference qubit. The first-pass duration is still $T=\pi/(2\Omega)$ for the new clock Hamiltonian.

In the Bell limit, the identity cut is crossed exactly once. At that crossing the source/reference configuration has law $|\psi_{SR}|^2$ for [(46)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:input), with all remaining material resources still ready. Thereafter the process cannot return to either preparation gate, and every accessible later edge acts as the identity on $R$. The resource, archive, reset and continuation conclusions, including [(48)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:nullnumbers)–[(50)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:capturednumbers), are unchanged. 

 

**Proof.**

The sign convention in [(51)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:prepgates) gives 

$$

 R_y(\alpha)|0\rangle=\sqrt{2/3}|0\rangle+
                                \sqrt{1/3}|1\rangle.

$$

 The following controlled Hadamard therefore maps $|0,0_R\rangle$ exactly to [(46)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:input). The clock proof applies to these eleven unitaries without modification: it does not require a spectator reference during the explicitly designated preparation stage. The new identity gate is the monomial cut $m=1$. Theorem [9.3](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:copy) gives its unique forward crossing and its pre-crossing distribution, namely the modulus square of the prepared vector. No reverse current crosses this barrier on the first pass. All later gates are precisely the earlier nine gates and are the identity on $R$. Their gate prefixes and final product act on the same prepared vector as before. The old monomial cuts are merely shifted upward by two, so their historical proofs remain valid. Finally $12\times10584=127008$. 

□



Here the initial field weight is a point mass at a known ordinary configuration. Taking all $N$ carriers there gives exact initial census and tag equilibrium without a random carrier preparation. Only the declared initial pilot-gas ensemble is random. The preparation uses the same static field Hamiltonian and pilot reactions as the rest of the experiment; it does not resample a configuration at the barrier. The former record cuts $2,3,4,5,8$ are $4,5,6,7,10$ in this variant. The physical crossing-time densities use the new $\ell=11$ clock and therefore change; the retained outcome probabilities remain the same. The full Hamiltonian includes the earlier interaction with $R$, so the reference is inaccessible only after the barrier, not throughout its preparation. This concrete example does not derive the general unknown-input equilibrium postulate. A finite pilot approximation inherits the prepared crossing distribution and subsequent record claims through its one full material-path error bound, including a failure label if it has not reached the relevant cut by $T$.



**Corollary 10.3 (One error bound for the complete retained programme).**

 <a id="mat:transfer"></a> Suppose the finite pilot construction for the complete static graph [(34)](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:feynman) obeys 

$$

 {d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(Q^{\rm pilot}_{[0,T]}),
            {\operatorname{Law}}(Q^{\rm Bell}_{[0,T]})\bigr)\le\delta.

$$

 Then every joint ordinary material record/history event in this programme has probability error at most $\delta$. In particular, the probability that any historical assertion in Proposition [10.1](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:resourcehistory) fails is at most $\delta$; the probabilities $\Pr(\mathsf N)$, $\Pr(\mathsf N,X+)$ and the captured joint outcomes in [(50)](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:capturednumbers) have that same error bound. The conditional value $\Pr(X+\mid\mathsf N)$ requires the branch-probability correction stated below. 

 

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

All clocks, copies, fuel supplies, loss products and reset receivers are part of the autonomous inventory. Their field evolution is exact; the kinetic, reaction and gas parameters enter only through the separately proved material-path error. The wave and currents are analytic on the fixed finite graph, and Proposition [9.2](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:levels) provides the indicated input-uniform level-crossing count where the kinetic bound needs it.



<a id="paragraph-4"></a>

#### Exact time scope.

 Historical protection here is a first-pass statement on $[0,\pi/(2\Omega)]$. A finite reversible clock is not an absorbing final state. On its second pass the fine currents reverse, the clock has nodes at the turnaround, and at $2T$ the circuit has coherently undone itself. The full pilot mechanism can be tested against that extended Bell path, but the archive theorem does not claim that a deliberately undone memory remains a record. Every required later feedback or hold operation must be included in the declared first-pass programme.
