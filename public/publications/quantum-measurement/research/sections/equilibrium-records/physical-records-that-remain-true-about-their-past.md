# Section 5: Physical records that remain true about their past

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

<a id="section-5"></a>

## 5 Physical records that remain true about their past

 <a id="sec:archive"></a> After a write, retain its internal orthogonal key $K$ and hold the pointer in <a id="eq:store"></a>


$$

 H_{\rm store}=\frac{p_y^2}{2M}+\frac{M\omega^2}{2}(y-LK)^2.

$$

Equation (20).

 Known branch phases can be corrected by bounded internal potentials. A single stationary packet need not have compact support; its classification error was already accounted for.



**Theorem 5.1 (Exact historical storage).**

<a id="thm:store"></a> Suppose the wave after the write has form <a id="eq:storedwave"></a>


$$

 \Psi(y,z,t)=\sum_k\phi_0(y-Lk){|{k}\rangle}_K\,\Xi_k(z,t)e^{-i\omega t/2},

$$

Equation (21).

 where $z$ denotes all other coordinates and internal factors. Future gates preserve $K$, hold $y$ as in [(20)](/quantum-measurement/research/equilibrium-records/physical-records-that-remain-true-about-their-past#eq:store), and may be noncommuting on the source or act on $z$. Then $j_y=0$ *pointwise* on the complete configuration space. The actual coordinate $Y$ and its finite readout label remain exactly fixed throughout that interval. 

 

**Proof.**

Orthogonality of the key eliminates cross terms. Each remaining contribution to $\Psi^\dagger\partial_y\Psi$ is $\phi_0(y-Lk)\phi_0'(y-Lk){\left\|{\Xi_k(z,t)}\right\|}^2$, which is real. Equation [(3)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:guidance) gives the conclusion away from the almost-sure excluded nodes. 

□

 This is a path statement, not an inference from equal endpoint weights. It controls actual old declarations even when later source measurements do not commute with the first. Unknown interactions that violate its Hamiltonian conditions require their own bound.



<a id="section-5-1"></a>

### 5.1 A genuine copy and its classification error

 Copy the key by a finite reversible unitary into a blank internal factor, amplify that factor into a fresh massive pointer, and retain both. Throughout this operation the old key is preserved, so Theorem [5.1](/quantum-measurement/research/equilibrium-records/physical-records-that-remain-true-about-their-past#thm:store) holds for the old actual position. If the two classifiers have worst errors $\epsilon_1,\epsilon_2$, their disagreement probability is at most $\epsilon_1+\epsilon_2$. To prove it, expand their joint squared-norm density over the orthogonal key and apply a union bound to the two conditional Gaussian tails. The key in this proof is an orthogonal expansion index, not an additional secretly actual spin variable. The copy is faithful to the first *actual* declaration because the old pointer stayed fixed during the write; its finite misclassification remains in the bound.



<a id="section-5-2"></a>

### 5.2 Reset with the receiving system retained

 Supply an identical ready factor $D'$ and let $W_{DD'}$ be SWAP. With <a id="eq:swap"></a>


$$

 H_{\rm sw}=\frac{\pi\hbar}{2\tau_s}W_{DD'},\quad
 S(t)=e^{-itH_{\rm sw}/\hbar},\quad S(\tau_s)=-iW_{DD'},

$$

Equation (22).

 an old entangled state is transferred as 

$$

 \sum_j\psi_j{|{d_j}\rangle}_D{|{r}\rangle}_{D'}\longmapsto
 -i{|{r}\rangle}_D\sum_j\psi_j{|{d_j}\rangle}_{D'}.

$$

 The old pending excitation, remnant, lost product and reference correlation remain in $D'$. Identical free resource Hamiltonians have $[W,H_D+H_{D'}]=0$.

There is a subtle control issue: if a stationary trap followed the old $D$ label, a bare SWAP would change its centre. The exact physical repair is <a id="eq:covariantreset"></a>


$$

 H(t)=H_{\rm sw}+S(t)H_{\rm store}S(t)^\dagger.

$$

Equation (23).

 Its propagator is $S(t)e^{-itH_{\rm store}/\hbar}$ by differentiation. Because $S$ is coordinate independent, it preserves the position density and current pointwise. The old spatial record remains held while the trap's controlling key is transferred to $D'$. The potential is a unitary conjugate of a nonnegative matrix potential plus a bounded matrix, so it stays semibounded. Expanding its square gives a scalar quadratic term and affine matrix coefficients, within the common inventory. Simply declaring a rewired trap after SWAP would omit this interaction.

If the original pointer itself is to be restored, a reverse smooth forced trap can take its branch centre back to zero while a copied key/record or receiving cell is retained. The receiving systems carry the old correlations. Future use proceeds from this full state and its conditional law; it is not assigned an independent fresh initial rank merely because a local packet now looks ready. The finite measurement theorem below uses a finite stock of fresh pointers; reset is included as a real operation and as a return test.



<a id="section-5-3"></a>

### 5.3 Feedback from a literal spatial record

 An internal key-controlled source gate is an exact coherent operation, but it follows a finite position display only up to the display's error. Literal position feedback also belongs to [(2)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:H). Let $g(y)$ be smooth, $0\le g\le1$, equal to zero for $y\le h-r$ and one for $y\ge h+r$, with $0<r<L/2$. Let $B$ be a bounded Hermitian source generator and compare 

$$

 H_{\rm pos}=H_{\rm store}+g(y)B,\qquad
 H_{\rm key}=H_{\rm store}+KB.

$$

 The second gives the intended branch gate. Define <a id="eq:feedbacktail"></a>


$$

 \epsilon_g=\max_{k=0,1}\int |g(y)-k|^2|\phi_0(y-Lk)|^2dy
 \le{\overline{\mathsf F}}\left(\frac{L/2-r}{\sigma}\right).

$$

Equation (24).

 Duhamel, evaluated on the exactly stationary ideal packet, gives <a id="eq:feedbackbound"></a>


$$

 {\left\|{\Psi_{\rm pos}(t)-\Psi_{\rm key}(t)}\right\|}
 \le\frac{t{\left\|{B}\right\|}}{\hbar}\sqrt{\epsilon_g}.

$$

Equation (25).

 This bound is uniform in an inaccessible reference. The physical position contact has reciprocal backaction; it is not claimed to leave the actual pointer fixed. The derivative and crossing estimate in Section [7](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#sec:clock) supplies a history bound as well. Thus literal spatial feedback, rather than an idealized outside observer, has a complete implementation.

Here $g(y)$ is a multiplication operator on the wave, not a coefficient obtained by inserting the actual $Y_t$ into an externally controlled Hamiltonian.
