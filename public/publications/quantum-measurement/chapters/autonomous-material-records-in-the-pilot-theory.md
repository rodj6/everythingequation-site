# Chapter 7: Autonomous material records in the pilot theory

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

<a id="p:chapter-records"></a> <a id="p:mat-section"></a> 

The pilot mechanism is applied to one finite graph containing the source, apparatus, all receiving systems, inaccessible reference and a clock. The following construction specifies its material Hamiltonian and proves an actual historical-record property of its Bell limit. No continuum pointer law or classical reader of a pilot coordinate is appended. Circuit Hamiltonians and engineered state-transfer chains provide useful context [[P-Computer](/quantum-measurement/monograph/bibliography#bib-pFeynman1986), [P-Clock](/quantum-measurement/monograph/bibliography#bib-pChristandl2004)]; all facts used here are proved below. 



<a id="section-7-1"></a>

## 7.1 Exact autonomous propagation

 

Let $U_0,\ldots,U_{\ell-1}$ be fixed unitaries on a finite material space $\mathcal K$, including every resource and a reference $R$. During the portion declared to have an inaccessible reference, each gate acts as the identity on $R$. Proposition [7.6](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:prepared) also permits an explicit earlier preparation stage involving $R$. Set <a id="p:mat-prefix"></a>


$$

 V_0=I,\qquad V_n=U_{n-1}\cdots U_0,\qquad
 c_n=\sqrt{(n+1)(\ell-n)}.

$$

Equation (7.1).

 The clock has basis $|0\rangle,\ldots,|\ell\rangle$. For a frequency $\Omega>0$, define the static matrix <a id="p:mat-feynman"></a>


$$

 H_F=\hbar\Omega\sum_{n=0}^{\ell-1}c_n
 \left(|n+1\rangle\langle n|\otimes U_n+
 |n\rangle\langle n+1|\otimes U_n^\dagger\right).

$$

Equation (7.2).

 All its matrix edges are ordinary edges of the common canonical field. In particular, the pilot link meters and reactions use the currents of this complete $H_F$, rather than those of a source Hamiltonian with an external ideal clock suppressed. 



**Theorem 7.1 (Exact finite-clock programme).**

<a id="p:mat-clock"></a> Starting with $|0\rangle\otimes\psi$, $\|\psi\|=1$, the field under [(7.2)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-feynman) is <a id="p:mat-wave"></a>


$$
\begin{aligned}
 \Psi(t)&=\sum_{n=0}^{\ell}\phi_n(t)|n\rangle\otimes V_n\psi,\\
 \phi_n(t)&=(-i)^n\sqrt{\binom\ell n}
   \cos^{\ell-n}(\Omega t)\sin^n(\Omega t).
\end{aligned}
$$

Equation (7.3).

 At the first transfer time <a id="p:mat-time"></a>


$$

 T=\frac{\pi}{2\Omega},

$$

Equation (7.4).

 the state is $(-i)^\ell|\ell\rangle\otimes V_\ell\psi$. Moreover $H_F+\hbar\Omega\ell I\ge0$; this shift changes no configuration current. The clock and all its correlations remain in the full model. 

 

**Proof.**

With $D=\sum_n|n\rangle\langle n|\otimes V_n$, 

$$

 D^\dagger H_FD=H_C\otimes I,\qquad
 H_C=\hbar\Omega\sum_nc_n
       (|n+1\rangle\langle n|+|n\rangle\langle n+1|).

$$

 On the permutation-symmetric subspace of $\ell$ qubits, $H_C$ is the restriction of $\hbar\Omega\sum_{j=1}^\ell X_j$; the normalized state with $n$ excitations has the displayed adjacent matrix element $c_n$. Evolving $|0\rangle^{\otimes\ell}$ therefore gives $(\cos(\Omega t)|0\rangle-i\sin(\Omega t)|1\rangle)^{\otimes\ell}$. Its normalized symmetric coefficients prove [(7.3)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-wave) and [(7.4)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-time). The spectrum of the qubit sum lies in $[-\hbar\Omega\ell,\hbar\Omega\ell]$, proving the lower bound. 

□

 



**Proposition 7.2 (Input-independent shape of the clock weights).**

 <a id="p:mat-levels"></a> For each complete material basis state $x$, <a id="p:mat-weights"></a>


$$

 w_{n,x}(t)=\binom\ell n\cos^{2(\ell-n)}(\Omega t)
             \sin^{2n}(\Omega t)\,|(V_n\psi)_x|^2.

$$

Equation (7.5).

 On $[0,T]$, each positive regular level of each weight has at most two crossings, independently of the unknown input. On $[0,2T]$ it has at most four. Every nonzero coordinate has strictly positive weight in the interior of the first pass; a vanishing coefficient $(V_n\psi)_x$ gives an identically empty coordinate instead. 

 

**Proof.**

The factor depending on $\psi$ is a nonnegative constant. For $0<n<\ell$, logarithmic differentiation of the other factor gives $2\Omega[n\cot(\Omega t)-(\ell-n)\tan(\Omega t)]$, which vanishes once, at $\sin^2(\Omega t)=n/\ell$, and changes from positive to negative. For $n=0$ or $\ell$ the factor is monotone. Reflection around $T$ gives the second-pass count. Positivity on $(0,T)$ follows directly from [(7.5)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-weights). 

□

 The crossing count is a useful uniform input fact for a kinetic estimate. By itself it is not a proof of every other uniform constant required by that estimate. 



<a id="section-7-2"></a>

## 7.2 A faithful archive at a monomial clock cut

 

A unitary is *monomial* in the complete material basis when <a id="p:mat-monomial"></a>


$$

 (U_m)_{yx}=e^{i\vartheta_x}\,1_{\{y=\pi(x)\}}

$$

Equation (7.6).

 for a permutation $\pi$. Reversible copies and SWAPs are examples. 



**Theorem 7.3 (Historical record at a monomial cut).**

<a id="p:monomial"></a> For the Bell process of [(7.2)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-feynman) in initial equilibrium, a monomial cut $m$ is crossed exactly once, from clock $m$ to clock $m+1$, almost surely before $T$. At that crossing the actual material configuration is updated by $\pi$. The material state immediately before the crossing has law $|(V_m\psi)_x|^2$. 

Suppose this permutation copies a working key $W$ into a blank archive $A$, all earlier gates preserve its blank state, and all later gates preserve the archive label. Then the actual archive contains the actual $W$ key at that crossing and stays unchanged for the rest of the first pass. A later monomial SWAP into a retained blank receiver transfers the actual old working key into that receiver at its own unique crossing. 

 

**Proof.**

Write $\phi_n=(-i)^n a_n$ with $a_n(t)>0$ on $(0,T)$, and put $\xi_n=V_n\psi$. The fine current at a complete edge across cut $m$ is <a id="p:mat-finecurrent"></a>


$$

 J_{(m+1,y),(m,x)}(t)=2\Omega c_ma_{m+1}a_m
   \operatorname{Re}\left[(\xi_{m+1})_y^*(U_m)_{yx}(\xi_m)_x\right].

$$

Equation (7.7).

 For [(7.6)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-monomial), the nonzero real factor is exactly $|(\xi_m)_x|^2$. Every current across that cut is therefore forward, and its reverse Bell rate vanishes. Since the clock initially lies below the cut and finally lies above it with probability one, the cut is crossed exactly once. The permitted edge carries exactly the permutation $\pi$. 

Summing the forward current over $x$ gives $2\Omega c_ma_{m+1}a_m$. It is the time derivative of the field mass strictly above the cut and integrates to one. Integrating the individual current thus gives $|(\xi_m)_x|^2$ for the pre-crossing material state. Once the process has crossed, it cannot return to the earlier region. All edges in the remaining region preserve $A$ by the later-gate hypothesis. This proves the historical statement. The same argument applies to the receiver SWAP. 

□

 

For completeness, the crossing-time density is $2\Omega c_ma_{m+1}(t)a_m(t)$. Under $z=\sin^2(\Omega t)$ it becomes 

$$

 \frac{z^m(1-z)^{\ell-m-1}}{B(m+1,\ell-m)}\,{\,\mathrm d} z.

$$

 This is a derived clock-time law, not an additional random time draw. 



**Remark 7.4 (Fine traffic is not coarse clock traffic).**

 <a id="p:mat-finewarning"></a> For a general unitary $U_m$, the real factor in [(7.7)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-finecurrent) can be negative. The net clock flux can be forward while some fine edges point backward. For example, let a Hadamard act on $S$ in the state $\sqrt{2/3}|0,0_R\rangle+\sqrt{1/3}|1,+_R\rangle$. At the fine edge whose old and new source bits both equal one and whose reference bit is zero, the real factor is $-1/12$. Thus Theorem [7.3](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:monomial) uses the monomial hypothesis essentially. In particular, a later archive does not record every transient excursion of an earlier nonmonomial resource gate. 

 



<a id="section-7-3"></a>

## 7.3 Retained resources, reset and continuation

 <a id="p:mat-resources"></a> 



<a id="section-7-3-1"></a>

### 7.3.1 Finite production, fuel, capture, pending and loss states

 

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

For $0<\eta<1$, define <a id="p:mat-generators"></a>


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

Equation (7.8).

 They are real antisymmetric matrices. The full finite unitaries are <a id="p:mat-rotations"></a>


$$

 U_w(\theta)=I+\sin\theta\,T_w+(1-\cos\theta)T_w^2,
 \qquad
 U_c(\varphi)=I+\sin\varphi\,T_c+(1-\cos\varphi)T_c^2.

$$

Equation (7.9).

 Equivalently they are $e^{\theta T_w}$ and $e^{\varphi T_c}$; their Hermitian generators are $iT_w$ and $iT_c$. In particular 

$$

 U_w|a,r\rangle=\cos\theta|a,r\rangle+
                       \sin\theta|a,p_a\rangle,
 \qquad
 U_c|p_a\rangle=\cos\varphi|p_a\rangle+
                       \sin\varphi|b_a\rangle.

$$

 The orthogonal vector $\sqrt{1-\eta}|c_a\rangle-\sqrt\eta|l_a\rangle$ is fixed by $U_c$. These equations specify the gates on the full space, rather than an isometry with unmentioned complementary states. 

For any source/reference vector $\psi$, the first two gates give <a id="p:mat-resourcevector"></a>


$$

 \cos\theta\,\psi|r\rangle+
 \sin\theta\sum_aP_a\psi
 \left[\cos\varphi|p_a\rangle+
 \sin\varphi\left(\sqrt\eta|c_a\rangle+
                       \sqrt{1-\eta}|l_a\rangle\right)\right].

$$

Equation (7.10).

 All coefficients retain their source and reference cofactors. The entire vector, including ready and pending sectors, is subsequently used in the clock Hamiltonian. 



<a id="section-7-3-2"></a>

### 7.3.2 Nine exact gates with every receiving system retained

 

Let $W,A,B_W$ be ternary registers, initially $0$, let $B_D$ be a second seven-state resource initially $r$, and let $K$ be a qubit initially $0$. $W$ is the working status display, $A$ its archive, $B_D,B_W$ are reset receivers, and $K$ is a later readout. The full ready state is <a id="p:mat-ready"></a>


$$

 \psi_{SR}|r\rangle_D|0\rangle_W|0\rangle_A
 |r\rangle_{B_D}|0\rangle_{B_W}|0\rangle_K|0\rangle_C.

$$

Equation (7.11).

 The independent $B_D=r$ consumes another production/fuel supply of energy $2E$. Thus the two resource banks initially contain $4E$, and their energy is conserved by the specified gates. The register labels and source/reference levels may be degenerate; the full static clock-interaction energy is conserved separately. 

Define <a id="p:mat-status"></a>


$$

 \chi(r)=\chi(p_a)=\chi(l_a)=0,\qquad
 \chi(c_0)=1,\qquad\chi(c_1)=2.

$$

Equation (7.12).

 Ternary additions below are modulo three. The nine gates are <a id="p:mat-circuit"></a>


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

Equation (7.13).

 Every unspecified factor is a spectator, and every gate acts as $I_R$. Here $H^{\rm Had}=2^{-1/2}\left(\begin{smallmatrix}1&1\\1&-1\end{smallmatrix}\right)$. Gate $U_6$ is coherent control by the archive operator; no actual pilot log or actual classical archive value is inserted into the field equation. 

The clock now has $\ell=9$ and ten nodes. For a reference qubit the material space excluding the clock has dimension $2\cdot2\cdot7\cdot3\cdot3\cdot7\cdot3\cdot2=10584$; the complete clock/material graph has $105840$ vertices. Its matrix is explicitly [(7.2)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-feynman) with the gates [(7.12)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-circuit). Tensor and permutation notation specify all entries without concealing a postselected subspace. 



**Proposition 7.5 (Actual facts retained by this circuit).**

 <a id="p:mat-resourcehistory"></a> In its Bell limit, $W$ receives $\chi(D)$ at the unique crossing of cut $2$. This actual working value persists until its reset at cut $5$. At cut $3$, $A$ copies that value and retains it through the end of the first pass. At cut $4$, the actual old $D$ key moves to $B_D$ and $D$ becomes ready. At cut $5$, the actual old $W$ key moves to $B_W$ and $W$ becomes blank. The receiving keys remain retained. Gate $U_8$ similarly records the source computational key after the coherent Hadamard continuation. 

 

**Proof.**

The cuts $2,3,4,5,8$ are monomial. Before cut $2$, $W$ is blank; the copying permutation leaves $D$ unchanged. Gates $3$ and $4$ preserve $W$, and a return across cut $2$ is impossible. Hence the later archive copy records the same earlier actual status. Before cut $3$, $A$ is blank, and every later gate preserves its label. Gates after $4$ preserve $B_D$; those after $5$ preserve $B_W$. Apply Theorem [7.3](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:monomial) at each cut. The final cut has no later gate. These arguments identify actual past facts, not merely correlations of final field weights. 

□

 The status is a fact at its registered cut. Preparation gates $0$ and $1$ can have provisional excursions; this proposition does not claim that every such excursion was recorded. A null archive value means no captured key at the registered status cut. Clock progress distinguishes that completed null read from the initially blank register. 



<a id="section-7-3-3"></a>

### 7.3.3 A null result with a reference-sensitive continuation

 

Choose <a id="p:mat-input"></a>


$$

 \psi_{SR}=\sqrt{\frac23}|0\rangle|0_R\rangle+
           \sqrt{\frac13}|1\rangle|+_R\rangle,
 \qquad |+_R\rangle=\frac{|0_R\rangle+|1_R\rangle}{\sqrt2},

$$

Equation (7.14).

 and $\theta=\pi/3$, $\varphi=\pi/4$, $\eta=2/3$. The resource weights in [(7.10)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-resourcevector) are respectively ready $1/4$, pending $3/8$, captured $1/4$ and loss $1/8$. All are retained through the two SWAPs. For example, after reset the old pending or loss distinction resides in $B_D$ even though the working $D$ has returned to $r$. 

Let $\mathsf N=\{A=0\}$ be the null event. Tracing the retained resource factors only for this calculation gives the null subchannel <a id="p:mat-nullmap"></a>


$$

 \mathcal N(\rho)=\frac14\rho+
          \frac12\sum_{a=0}^1P_a\rho P_a.

$$

Equation (7.15).

 This reduction is not the state used for the complete evolution. The ready term retains source coherence; the distinct pending and loss labels give the displayed dephased contribution. The null branch sees the identity in $U_6$, followed by a Hadamard and a computational copy. Writing $X+$ for $K=0$, one obtains <a id="p:mat-nullnumbers"></a>


$$

 \Pr(\mathsf N)=\frac34,\qquad
 \Pr(\mathsf N,X+)=\frac{11}{24},\qquad
 \Pr(X+\mid\mathsf N)=\frac{11}{18}.

$$

Equation (7.16).

 The unnormalized inaccessible-reference state in that joint outcome is <a id="p:mat-reference"></a>


$$

 \sigma_R^{\mathsf N,+}=\frac1{48}
       \begin{pmatrix}19&5\\5&3\end{pmatrix}.

$$

Equation (7.17).

 

**Proof.**

The source reduction of [(7.14)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-input) is $\rho_S=\left(\begin{smallmatrix}2/3&1/3\\1/3&1/3\end{smallmatrix}\right)$. Equation [(7.15)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-nullmap) gives $\mathcal N(\rho_S)=\left(\begin{smallmatrix}1/2&1/12\\1/12&1/4\end{smallmatrix}\right)$. Its trace is $3/4$, and its $|+\rangle$ diagonal element is $11/24$. For the reference calculation use 

$$

 |r_0\rangle=\sqrt{2/3}|0_R\rangle,
 \qquad |r_1\rangle=\sqrt{1/3}|+_R\rangle.

$$

 The ready contribution after the $+$ effect is $(|r_0\rangle+|r_1\rangle)(\langle r_0|+\langle r_1|)/8$; the other null contribution is $(|r_0\rangle\langle r_0|+|r_1\rangle\langle r_1|)/4$. Adding the two matrices gives [(7.17)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-reference). 

□

 

The captured branches exercise noncommuting record-controlled continuation. Writing $a=0$ for $A=1$ and $a=1$ for $A=2$, the four joint probabilities are <a id="p:mat-capturednumbers"></a>


$$
\begin{aligned}
 \Pr(a=0,X+)&=\Pr(a=0,X-)=\frac1{12},\\
 \Pr(a=1,X+)&=\frac{2-\sqrt3}{48},&
 \Pr(a=1,X-)&=\frac{2+\sqrt3}{48}.
\end{aligned}
$$

Equation (7.18).

 Indeed capture has probability $1/4$ times the original source population. The $a=0$ daughter is $|0\rangle$ and gives equal $X$ probabilities. The $a=1$ daughter becomes $-\tfrac12|0\rangle+\tfrac{\sqrt3}{2}|1\rangle$ under $V$, yielding the other two numbers. They sum to $1/4$. The complete reference cofactors and both reset receivers remain attached throughout. 



<a id="section-7-3-4"></a>

### 7.3.4 What a finite material-path bound now proves

 



**Proposition 7.6 (A basis-ready example with randomness only in the gas).**

 <a id="p:prepared"></a> The concrete experiment above can start from one known complete ordinary basis configuration, with every pilot carrier in that configuration. Prepend to the nine gates [(7.12)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-circuit) the two gates <a id="p:mat-prepgates"></a>


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

Equation (7.19).

 Initialize $S,R$ in $|0,0_R\rangle$, and initialize all resource, receiver, display and clock factors in the basis-ready states already listed. There are now eleven gates, twelve clock nodes and $127008$ complete ordinary configurations for a reference qubit. The first-pass duration is still $T=\pi/(2\Omega)$ for the new clock Hamiltonian. 

In the Bell limit, the identity cut is crossed exactly once. At that crossing the source/reference configuration has law $|\psi_{SR}|^2$ for [(7.14)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-input), with all remaining material resources still ready. Thereafter the process cannot return to either preparation gate, and every accessible later edge acts as the identity on $R$. The resource, archive, reset and continuation conclusions, including [(7.16)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-nullnumbers)–[(7.18)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-capturednumbers), are unchanged. 

 

**Proof.**

The sign convention in [(7.19)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-prepgates) gives 

$$

 R_y(\alpha)|0\rangle=\sqrt{2/3}|0\rangle+
                                \sqrt{1/3}|1\rangle.

$$

 The following controlled Hadamard therefore maps $|0,0_R\rangle$ exactly to [(7.14)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-input). The clock proof applies to these eleven unitaries without modification: it does not require a spectator reference during the explicitly designated preparation stage. The new identity gate is the monomial cut $m=1$. Theorem [7.3](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:monomial) gives its unique forward crossing and its pre-crossing distribution, namely the modulus square of the prepared vector. No reverse current crosses this barrier on the first pass. All later gates are precisely the earlier nine gates and are the identity on $R$. Their gate prefixes and final product act on the same prepared vector as before. The old monomial cuts are merely shifted upward by two, so their historical proofs remain valid. Finally $12\times10584=127008$. 

□

 

Here the initial field weight is a point mass at a known ordinary configuration. Taking all $N$ carriers there gives exact initial census and tag equilibrium without a random carrier preparation. Only the declared initial pilot-gas ensemble is random. The preparation uses the same static field Hamiltonian and pilot reactions as the rest of the experiment; it does not resample a configuration at the barrier. The former record cuts $2,3,4,5,8$ are $4,5,6,7,10$ in this variant. The physical crossing-time densities use the new $\ell=11$ clock and therefore change; the retained outcome probabilities remain the same. The full Hamiltonian includes the earlier interaction with $R$, so the reference is inaccessible only after the barrier, not throughout its preparation. This concrete example does not derive the general unknown-input equilibrium postulate. A finite pilot approximation inherits the prepared crossing distribution and subsequent record claims through its one full material-path error bound, including a failure label if it has not reached the relevant cut by $T$. 



**Corollary 7.7 (One error bound for the complete retained programme).**

 <a id="p:programme"></a> Suppose the finite pilot construction for the complete static graph [(7.2)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-feynman) obeys 

$$

 {d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(Q^{\rm pilot}_{[0,T]}),
            {\operatorname{Law}}(Q^{\rm Bell}_{[0,T]})\bigr)\le\delta.

$$

 Then every joint ordinary material record/history event in this programme has probability error at most $\delta$. In particular, the probability that any historical assertion in Proposition [7.5](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-resourcehistory) fails is at most $\delta$; the probabilities $\Pr(\mathsf N)$, $\Pr(\mathsf N,X+)$ and the captured joint outcomes in [(7.18)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-capturednumbers) have that same error bound. The conditional value $\Pr(X+\mid\mathsf N)$ requires the branch-probability correction stated below. 

 

**Proof.**

All the displayed records, copy crossings, receiver transfers and later controlled outputs are measurable functions of the same full material path. Total variation contracts under their common pushforward. The Bell failure event has probability zero, so the pilot failure event has probability at most $\delta$. 

□

 This is a joint bound. A conditional comparison requires positive probability under both compared laws; $\delta<p$ suffices when the ideal branch probability is $p>0$. Lemma [2.1](/quantum-measurement/monograph/complete-experiments-and-comparison-conventions#found:errors) then gives error at most $\min\{1,2\delta/p\}$. No uniform precision is asserted on arbitrarily rare branches. Nor does a classical-path TV estimate alone compare an unobserved quantum density matrix in trace norm. Reference-sensitive operational tests are included by adjoining their admissible gates to the same complete programme and applying the same argument. 

All clocks, copies, fuel supplies, loss products and reset receivers are part of the autonomous inventory. Their field evolution is exact; the kinetic, reaction and gas parameters enter only through the separately proved material-path error. The wave and currents are analytic on the fixed finite graph, and Proposition [7.2](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-levels) provides the indicated input-uniform level-crossing count where the kinetic bound needs it. 



<a id="paragraph-3"></a>

#### Exact time scope.

 Historical protection here is a first-pass statement on $[0,\pi/(2\Omega)]$. A finite reversible clock is not an absorbing final state. On its second pass the fine currents reverse, the clock has nodes at the turnaround, and at $2T$ the circuit has coherently undone itself. The full pilot mechanism can be tested against that extended Bell path, but the archive theorem does not claim that a deliberately undone memory remains a record. Every required later feedback or hold operation must be included in the declared first-pass programme. 



<a id="section-7-4"></a>

## 7.4 Uniformity and an explicit fixed-circuit resource rate

 <a id="p:uniformity"></a> The qualitative limit in Theorem [6.3](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:main) uses the established kinetic proof. For the fixed clock circuit just constructed, its constants can also be controlled uniformly over unknown inputs. The following quantitative refinement records the cutoff dependence explicitly; it is not a new stochastic law or a rate for growing circuits. The explicit exponents follow bookkeeping isolated in the supplied working audit [[P-Audit](/quantum-measurement/monograph/bibliography#bib-pIndependentAudit)]; that citation records provenance, and the cutoff proof is supplied here. 



**Proposition 7.8 (Uniform fixed-circuit kinetic rate).**

<a id="p:kinetic-rate"></a> Fix the complete finite graph, the clock Hamiltonian $H_F$, its first-pass horizon $T$, and $0<\kappa_-\le\kappa_e\le\kappa_+$. Suppose the initial census has expected $\ell^1$ error $O(N^{-1/2})$ and the tag starts from $\nu\le Cw(0)$ with fixed $C$. The iid equilibrium and the known basis-ready preparations satisfy this condition. With 

$$

 \mu_N=N^{1/2},\qquad \delta=N^{-1/7},\qquad
 \varepsilon=N^{-1/35},

$$

 the signed-queue path error obeys <a id="p:explicit-rate"></a>


$$

 \epsilon_{\rm kin}(N,T)=O(N^{-1/70}).

$$

Equation (7.20).

 For equilibrium use, the constants are uniform over all normalized inputs on this fixed material space. A reference included in the configuration basis is part of the fixed graph; a declared spectator fibre does not enlarge the operator-norm constants. With the gas and recombination scales of Theorem [6.3](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:main), the full pilot path error is also $O(N^{-1/70})$. 

 

**Proof.**

Write $D=|V|$, $m=|E|$, $H_* =\|H_F\|$, and let ${\operatorname{Var}}$ denote total variation in physical time. Each edge current is a bounded quadratic form in the normalized input. Safe input-independent bounds are 

$$

 J_*\le 2H_*/\hbar,\qquad
 L\le 2mH_*T/\hbar,\qquad
 \sum_e{\operatorname{Var}}(J_e)\le 4mH_*^2T/\hbar^2.

$$

 The last inequality follows by differentiating each current expectation and using $\|\dot\Psi\|\le H_*/\hbar$. All source variation, birth and census-jump budgets in Theorem [4.1](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:tracking) are therefore uniform. 

For $0<\delta\le1$ put $\alpha=\mu_N/N\le1$ and $a_0=\kappa_-\delta$, $a_1=\kappa_+$. In the proof of Theorem [4.1](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:tracking), the instantaneous companion root has ${\operatorname{Var}}(f)=O(\delta^{-2})$ and $|f(0)|=O(\delta^{-1})$. Its deterministic integrated tracking cost is consequently $O((\mu_N\delta^3)^{-1})$. The square-jump estimate there gives 

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

 The deterministic export discrepancy is $O(\alpha)$, so [(4.10)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:R) and [(4.12)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:smallflux) have the explicit forms <a id="p:cutoff-rates"></a>


$$
\begin{aligned}
 R_{\delta,N}&\le C\left[
 \frac{1}{\mu_N\delta^3}
 +\frac{\sqrt{\mu_N/N}+\mu_N/N}{\delta}\right],\\
 D_{\delta,N}&\le C\sqrt{\delta+(\mu_N\delta)^{-1}
                    +{\mathbb E}\eta_N}.
\end{aligned}
$$

Equation (7.21).

 Here and below constants depend on the fixed graph, programme and response bounds, not on the input or the two cutoffs. 

For iid equilibrium, direct multinomial variance gives ${\mathbb E}\|x^N(0)-w(0)\|_1\le\sqrt{D/N}$. For a separately initialized dominated tag and $N-1$ independent equilibrium carriers, add at most $2/N$. The deterministic basis-ready census has zero initial error. The tracking proof applies conditionally on the initial census and then averages; Jensen's inequality handles the square root in the low-mass estimate. Its population martingale obeys 

$$

 \epsilon_{x,N}\le{\mathbb E}\|x^N(0)-w(0)\|_1
   +C_B\epsilon_{F,N}+C\sqrt{(L+1)/N}.

$$

 With $\mu_N=N^{1/2}$ and $\delta=N^{-1/7}$, the leading deterministic term of [(7.21)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:cutoff-rates) is $N^{-1/14}$, its square-root noise term is $N^{-3/28}$, and $D_{\delta,N}=O(N^{-1/14})$. Equation [(4.13)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:fluxbridge) therefore gives 

$$

 \epsilon_{F,N}+\epsilon_{x,N}=O(N^{-1/14}).

$$

 

For the clock family [(7.5)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:mat-weights), each fine weight is a nonnegative input-dependent coefficient times a unimodal binomial envelope. Count entries into a sublevel set directly: each weight has at most two boundary entries on $[0,T]$, including tangencies. A coefficient may put its maximum exactly at $\varepsilon$, so a common regular value is not assumed. Initial small-weight mass, jump influx and these entries give the uniform node budget 

$$

 b_C(\varepsilon)\le C\bigl(3D\varepsilon+C_0T\sqrt\varepsilon\bigr).

$$

 Use this budget in [(4.16)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:pathbound). At $\varepsilon=N^{-1/35}$ the node term and the $\epsilon_{x,N}/\varepsilon^2$ term are $O(N^{-1/70})$; the $ (\epsilon_{x,N}+\epsilon_{F,N})/\varepsilon$ term is $O(N^{-3/70})$. This proves [(7.20)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:explicit-rate). The gas and recombination contributions are respectively $O(N^{-2})$ and $O(N^{-1/2})$, so they do not worsen this conservative rate. 

□

 

On $[0,2T]$ at most four level entries per weight replace the node bound by $C(5D\varepsilon+2C_0T\sqrt\varepsilon)$; the same rate applies to the reversed full path. That second pass unwrites the records and is not an extension of the first-pass archive theorem. Merely assuming $x^N(0)\to w(0)$ without a rate does not imply [(7.20)](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:explicit-rate). Nor does this estimate apply uniformly to a growing graph, increasing fine reference, changing Hamiltonian or unbounded storage time.
