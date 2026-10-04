# Section 9: An autonomous clock and faithful copying cuts

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

<a id="section-9"></a>

## 9 An autonomous clock and faithful copying cuts

 <a id="mat:section"></a>

The pilot mechanism is applied to one finite graph containing the source, apparatus, all receiving systems, inaccessible reference and a clock. The following construction specifies its material Hamiltonian and proves an actual historical-record property of its Bell limit. No continuum pointer law or classical reader of a pilot coordinate is appended. Circuit Hamiltonians and engineered state-transfer chains provide useful context [[9](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-Feynman1986), [10](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-Christandl2004)]; all facts used here are proved below.



<a id="section-9-1"></a>

### 9.1 Exact autonomous propagation



Let $U_0,\ldots,U_{\ell-1}$ be fixed unitaries on a finite material space $\mathcal K$, including every resource and a reference $R$. During the portion declared to have an inaccessible reference, each gate acts as the identity on $R$. Proposition [10.2](/quantum-measurement/research/hybrid-bell-paths/an-explicit-retained-resource-measurement-and-continuation#mat:basisprep) also permits an explicit earlier preparation stage involving $R$. Set <a id="mat:prefix"></a>


$$

 V_0=I,\qquad V_n=U_{n-1}\cdots U_0,\qquad
 c_n=\sqrt{(n+1)(\ell-n)}.

$$

Equation (33).

 The clock has basis $|0\rangle,\ldots,|\ell\rangle$. For a frequency $\Omega>0$, define the static matrix <a id="mat:feynman"></a>


$$

 H_F=\hbar\Omega\sum_{n=0}^{\ell-1}c_n
 \left(|n+1\rangle\langle n|\otimes U_n+
 |n\rangle\langle n+1|\otimes U_n^\dagger\right).

$$

Equation (34).

 All its matrix edges are ordinary edges of the common canonical field. In particular, the pilot link meters and reactions use the currents of this complete $H_F$, rather than those of a source Hamiltonian with an external ideal clock suppressed.



**Theorem 9.1 (Exact finite-clock programme).**

<a id="mat:clock"></a> Starting with $|0\rangle\otimes\psi$, $\|\psi\|=1$, the field under [(34)](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:feynman) is <a id="mat:wave"></a>


$$
\begin{aligned}
 \Psi(t)&=\sum_{n=0}^{\ell}\phi_n(t)|n\rangle\otimes V_n\psi,\\
 \phi_n(t)&=(-i)^n\sqrt{\binom\ell n}
   \cos^{\ell-n}(\Omega t)\sin^n(\Omega t).
\end{aligned}
$$

Equation (35).

 At the first transfer time <a id="mat:time"></a>


$$

 T=\frac{\pi}{2\Omega},

$$

Equation (36).

 the state is $(-i)^\ell|\ell\rangle\otimes V_\ell\psi$. Moreover $H_F+\hbar\Omega\ell I\ge0$; this shift changes no configuration current. The clock and all its correlations remain in the full model. 

 

**Proof.**

With $D=\sum_n|n\rangle\langle n|\otimes V_n$, 

$$

 D^\dagger H_FD=H_C\otimes I,\qquad
 H_C=\hbar\Omega\sum_nc_n
       (|n+1\rangle\langle n|+|n\rangle\langle n+1|).

$$

 On the permutation-symmetric subspace of $\ell$ qubits, $H_C$ is the restriction of $\hbar\Omega\sum_{j=1}^\ell X_j$; the normalized state with $n$ excitations has the displayed adjacent matrix element $c_n$. Evolving $|0\rangle^{\otimes\ell}$ therefore gives $(\cos(\Omega t)|0\rangle-i\sin(\Omega t)|1\rangle)^{\otimes\ell}$. Its normalized symmetric coefficients prove [(35)](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:wave) and [(36)](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:time). The spectrum of the qubit sum lies in $[-\hbar\Omega\ell,\hbar\Omega\ell]$, proving the lower bound. 

□





**Proposition 9.2 (Input-independent shape of the clock weights).**

 <a id="mat:levels"></a> For each complete material basis state $x$, <a id="mat:weights"></a>


$$

 w_{n,x}(t)=\binom\ell n\cos^{2(\ell-n)}(\Omega t)
             \sin^{2n}(\Omega t)\,|(V_n\psi)_x|^2.

$$

Equation (37).

 On $[0,T]$, each positive regular level of each weight has at most two crossings, independently of the unknown input. On $[0,2T]$ it has at most four. Every nonzero coordinate has strictly positive weight in the interior of the first pass; a vanishing coefficient $(V_n\psi)_x$ gives an identically empty coordinate instead. 

 

**Proof.**

The factor depending on $\psi$ is a nonnegative constant. For $0<n<\ell$, logarithmic differentiation of the other factor gives $2\Omega[n\cot(\Omega t)-(\ell-n)\tan(\Omega t)]$, which vanishes once, at $\sin^2(\Omega t)=n/\ell$, and changes from positive to negative. For $n=0$ or $\ell$ the factor is monotone. Reflection around $T$ gives the second-pass count. Positivity on $(0,T)$ follows directly from [(37)](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:weights). 

□

 The crossing count is a useful uniform input fact for a kinetic estimate. By itself it is not a proof of every other uniform constant required by that estimate.



<a id="section-9-2"></a>

### 9.2 A faithful archive is created at a monomial clock cut



A unitary is *monomial* in the complete material basis when <a id="mat:monomial"></a>


$$

 (U_m)_{yx}=e^{i\vartheta_x}\,1_{\{y=\pi(x)\}}

$$

Equation (38).

 for a permutation $\pi$. Reversible copies and SWAPs are examples.



**Theorem 9.3 (Historical record at a monomial cut).**

<a id="mat:copy"></a> For the Bell process of [(34)](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:feynman) in initial equilibrium, a monomial cut $m$ is crossed exactly once, from clock $m$ to clock $m+1$, almost surely before $T$. At that crossing the actual material configuration is updated by $\pi$. The material state immediately before the crossing has law $|(V_m\psi)_x|^2$.

Suppose this permutation copies a working key $W$ into a blank archive $A$, all earlier gates preserve its blank state, and all later gates preserve the archive label. Then the actual archive contains the actual $W$ key at that crossing and stays unchanged for the rest of the first pass. A later monomial SWAP into a retained blank receiver transfers the actual old working key into that receiver at its own unique crossing. 

 

**Proof.**

Write $\phi_n=(-i)^n a_n$ with $a_n(t)>0$ on $(0,T)$, and put $\xi_n=V_n\psi$. The fine current at a complete edge across cut $m$ is <a id="mat:finecurrent"></a>


$$

 J_{(m+1,y),(m,x)}(t)=2\Omega c_ma_{m+1}a_m
   \operatorname{Re}\left[(\xi_{m+1})_y^*(U_m)_{yx}(\xi_m)_x\right].

$$

Equation (39).

 For [(38)](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:monomial), the nonzero real factor is exactly $|(\xi_m)_x|^2$. Every current across that cut is therefore forward, and its reverse Bell rate vanishes. Since the clock initially lies below the cut and finally lies above it with probability one, the cut is crossed exactly once. The permitted edge carries exactly the permutation $\pi$.

Summing the forward current over $x$ gives $2\Omega c_ma_{m+1}a_m$. It is the time derivative of the field mass strictly above the cut and integrates to one. Integrating the individual current thus gives $|(\xi_m)_x|^2$ for the pre-crossing material state. Once the process has crossed, it cannot return to the earlier region. All edges in the remaining region preserve $A$ by the later-gate hypothesis. This proves the historical statement. The same argument applies to the receiver SWAP. 

□



For completeness, the crossing-time density is $2\Omega c_ma_{m+1}(t)a_m(t)$. Under $z=\sin^2(\Omega t)$ it becomes 

$$

 \frac{z^m(1-z)^{\ell-m-1}}{B(m+1,\ell-m)}\,{\,\mathrm d} z.

$$

 This is a derived clock-time law, not an additional random time draw.



**Remark 9.4 (Fine traffic is not coarse clock traffic).**

 <a id="mat:finewarning"></a> For a general unitary $U_m$, the real factor in [(39)](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:finecurrent) can be negative. The net clock flux can be forward while some fine edges point backward. For example, let a Hadamard act on $S$ in the state $\sqrt{2/3}|0,0_R\rangle+\sqrt{1/3}|1,+_R\rangle$. At the fine edge whose old and new source bits both equal one and whose reference bit is zero, the real factor is $-1/12$. Thus Theorem [9.3](/quantum-measurement/research/hybrid-bell-paths/an-autonomous-clock-and-faithful-copying-cuts#mat:copy) uses the monomial hypothesis essentially. In particular, a later archive does not record every transient excursion of an earlier nonmonomial resource gate.
