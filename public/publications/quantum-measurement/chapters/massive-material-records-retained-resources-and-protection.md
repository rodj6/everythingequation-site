# Chapter 29: Massive material records, retained resources and protection

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

<a id="mc:chapter-material"></a> 

The point of the material construction is to use the same Hamiltonian for source response and physical access. The finite resource states below describe coherent fuel, excitation and remnant amplitudes. Their algebra can also appear in a finite Bell or pilot model, but here a declaration occurs only through the actual position of a massive pointer. A resource amplitude is therefore not a sampled reaction history. Every null, loss, copy and reset receiver remains available to later coherent contacts. 

The endpoint reasoning of Theorem [25.5](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:endpoint) is retained, while truth about an earlier actual declaration requires a further fact: pointwise zero archive current during its promised hold. This chapter proves that fact for stored Gaussian records, and preserves it through the explicit transported-trap reset. Its finite tails enter the error budget; they are not replaced by exact compact support. 



<a id="section-29-1"></a>

## 29.1 A finite coherent source–actuator–resource module

 <a id="mc:sec:resource"></a> Here is a nontrivial receptor that is physically in the same inventory. On a finite factor $D$ use orthogonal states 

$$

 {\lvertr\rangle},\quad{\lvertp_a\rangle},\quad{\lvertc_a\rangle},\quad{\lvertl_a\rangle}\quad(a=0,1).

$$

 They include the following actual material degrees in their internal wave description:  

| State | Production | Fuel | Site | Excitation | Memory | Remnant |
| --- | --- | --- | --- | --- | --- | --- |
| $r$ | 1 | 1 | ready | 0 | blank | vacuum |
| $p_a$ | 0 | 1 | ready | mode $a$ | blank | vacuum |
| $c_a$ | 0 | 0 | spent | 0 | $a$ | capture $a$ |
| $l_a$ | 0 | 1 | ready | 0 | blank | loss $a$ |

  Assign energy $E>0$ to a production cofactor, fuel unit, excitation and loss remnant, and $2E$ to a capture remnant; the displayed labels are degenerate. Every row has total resource energy $2E$. Hence the conversion gates conserve this resource energy exactly while spending readiness and retaining energy in products. Their full tensor-factor implementation is defined to be zero outside the indicated equal-energy active subspace. Other exhausted sectors stay present. 

For source projectors $P_a$, set <a id="mc:eq:reactionG"></a>


$$
\begin{aligned}
 G_w&=i\sum_aP_a\otimes({\lvertp_a\rangle}{\langler\rvert}-{\lvertr\rangle}{\langlep_a\rvert}),\\
 {\lvertb_a\rangle}&=\sqrt\eta{\lvertc_a\rangle}+\sqrt{1-\eta}{\lvertl_a\rangle},\qquad 0<\eta<1,\\
 G_r&=i\sum_a({\lvertb_a\rangle}{\langlep_a\rvert}-{\lvertp_a\rangle}{\langleb_a\rvert}).
\end{aligned}
$$

Equation (29.1).

 These Hermitian generators have norm one on their active subspaces. Nonoverlapping pulses $\hbar g_w(t)G_w$ and $\hbar g_r(t)G_r$ with areas $\theta,\varphi$ give exactly <a id="mc:eq:resourcewave"></a>


$$

 \begin{aligned}
 \Psi_D={}&\cos\theta\,\psi{\lvertr\rangle}+\sin\theta\sum_aP_a\psi
 \left(\cos\varphi{\lvertp_a\rangle}+\sin\varphi\sqrt\eta{\lvertc_a\rangle}
                    +\sin\varphi\sqrt{1-\eta}{\lvertl_a\rangle}\right).
 \end{aligned}

$$

Equation (29.2).

 Indeed each generator is a two-dimensional $\sigma_y$ rotation, and the active $a$ sectors are orthogonal. There was no sampled reaction time in this calculation. Reduced excitation populations are not actual level trajectories in the adopted ontology. The actual event is a subsequent spatial registration governed by Sections [28.1](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:sec:constitution)–[28.2](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:sec:detector). 

The finite response has four exact orthogonal status weights (and ideal resolved-pointer probabilities): <a id="mc:eq:statuses"></a>


$$

 (P_r,P_p,P_c,P_l)=
 (\cos^2\theta,\ \sin^2\theta\cos^2\varphi,\
 \eta\sin^2\theta\sin^2\varphi,\ (1-\eta)\sin^2\theta\sin^2\varphi).

$$

Equation (29.3).

 The pending excitation remains a vector in the actual model at a finite cutoff. Continuing $G_r$ processes it coherently; a finite closed receptor can recur. A zero response window does not erase it. Neither an absorbing boundary nor a restart clock is imposed when a coefficient begins to populate $p_a$. 



<a id="section-29-1-1"></a>

### 29.1.1 Physical null, capture and loss

 Use three spatial readout centres $-L,0,L$ for captured $a=0$, null, and captured $a=1$. The same forced oscillator construction applies to each orthogonal control projector, using signed trajectories. Noncaptured $r,p,l$ components share the null packet. Nearest-centre cells have worst tail at most $2\delta$, with $\delta={\overline{\mathsf F}}(L/(2\sigma))$. The ideal orthogonal-label comparator has capture coefficient 

$$

 \sqrt q\,P_a\psi{\lvertc_a\rangle},\qquad q=\eta\sin^2\theta\sin^2\varphi,

$$

 and complete null vector <a id="mc:eq:nullvector"></a>


$$

 \Psi_N=\cos\theta\,\psi{\lvertr\rangle}+
 \sin\theta\sum_aP_a\psi\left(\cos\varphi{\lvertp_a\rangle}
                 +\sin\varphi\sqrt{1-\eta}{\lvertl_a\rangle}\right).

$$

Equation (29.4).

 Only for a declared reduced comparison, tracing $D$ gives <a id="mc:eq:nullmap"></a>


$$

 \mathcal N(\rho)=\cos^2\theta\,\rho+
 \sin^2\theta\bigl(\cos^2\varphi+(1-\eta)\sin^2\varphi\bigr)
                  \sum_aP_a\rho P_a.

$$

Equation (29.5).

 Equation [(29.4)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:nullvector), along with pointer and all receiving systems, is the retained continuation. Equation [(29.5)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:nullmap) is not a global collapse rule. Finite spatial classifiers approximate these ideal labels; Section [30.2](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:sec:complete) bounds the complete output error. 



<a id="section-29-1-2"></a>

### 29.1.2 Finite stock and exhaustion

 For a promised $m$-epoch experiment allocate $m$ ready cells, their blank archives, and receivers. Gate the active conversion only on sectors containing the required cofactor, fuel, site and blank capacity. Extend the unitary by identity on explicitly exhausted sectors, which can be spatially flagged by the same writer. A failed or null attempt does not receive a new ${\lvertr\rangle}$ for free. The consumed-ready-cell count is bounded by the allocated finite schedule; no infinite Poisson bath is hidden in this implementation. 



<a id="section-29-2"></a>

## 29.2 Physical records that remain true about their past

 <a id="mc:sec:archive"></a> After a write, retain its internal orthogonal key $K$ and hold the pointer in <a id="mc:eq:store"></a>


$$

 H_{\rm store}=\frac{p_y^2}{2M}+\frac{M\omega^2}{2}(y-LK)^2.

$$

Equation (29.6).

 Known branch phases can be corrected by bounded internal potentials. A single stationary packet need not have compact support; its classification error was already accounted for. 



**Theorem 29.1 (Exact historical storage).**

<a id="mc:thm:store"></a> Suppose the wave after the write has form <a id="mc:eq:storedwave"></a>


$$

 \Psi(y,z,t)=\sum_k\phi_0(y-Lk){\lvertk\rangle}_K\,\Xi_k(z,t)e^{-i\omega t/2},

$$

Equation (29.7).

 where $z$ denotes all other coordinates and internal factors. Future gates preserve $K$, hold $y$ as in [(29.6)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:store), and may be noncommuting on the source or act on $z$. Then $j_y=0$ *pointwise* on the complete configuration space. The actual coordinate $Y$ and its finite readout label remain exactly fixed throughout that interval. 

 

**Proof.**

Orthogonality of the key eliminates cross terms. Each remaining contribution to $\Psi^\dagger\partial_y\Psi$ is $\phi_0(y-Lk)\phi_0'(y-Lk){\left\lVert\Xi_k(z,t)\right\rVert}^2$, which is real. Equation [(28.3)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:guidance) gives the conclusion away from the almost-sure excluded nodes. 

□

 This is a path statement, not an inference from equal endpoint weights. It controls actual old declarations even when later source measurements do not commute with the first. Unknown interactions that violate its Hamiltonian conditions require their own bound. 



<a id="section-29-2-1"></a>

### 29.2.1 A genuine copy and its classification error

 Copy the key by a finite reversible unitary into a blank internal factor, amplify that factor into a fresh massive pointer, and retain both. Throughout this operation the old key is preserved, so Theorem [29.1](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:thm:store) holds for the old actual position. If the two classifiers have worst errors $\epsilon_1,\epsilon_2$, their disagreement probability is at most $\epsilon_1+\epsilon_2$. To prove it, expand their joint squared-norm density over the orthogonal key and apply a union bound to the two conditional Gaussian tails. The key in this proof is an orthogonal expansion index, not an additional secretly actual spin variable. The copy is faithful to the first *actual* declaration because the old pointer stayed fixed during the write; its finite misclassification remains in the bound. 



<a id="section-29-2-2"></a>

### 29.2.2 Reset with the receiving system retained

 Supply an identical ready factor $D'$ and let $W_{DD'}$ be SWAP. With <a id="mc:eq:swap"></a>


$$

 H_{\rm sw}=\frac{\pi\hbar}{2\tau_s}W_{DD'},\quad
 S(t)=e^{-itH_{\rm sw}/\hbar},\quad S(\tau_s)=-iW_{DD'},

$$

Equation (29.8).

 an old entangled state is transferred as 

$$

 \sum_j\psi_j{\lvertd_j\rangle}_D{\lvertr\rangle}_{D'}\longmapsto
 -i{\lvertr\rangle}_D\sum_j\psi_j{\lvertd_j\rangle}_{D'}.

$$

 The old pending excitation, remnant, lost product and reference correlation remain in $D'$. Identical free resource Hamiltonians have $[W,H_D+H_{D'}]=0$. 

There is a subtle control issue: if a stationary trap followed the old $D$ label, a bare SWAP would change its centre. The exact physical repair is <a id="mc:eq:covariantreset"></a>


$$

 H(t)=H_{\rm sw}+S(t)H_{\rm store}S(t)^\dagger.

$$

Equation (29.9).

 Its propagator is $S(t)e^{-itH_{\rm store}/\hbar}$ by differentiation. Because $S$ is coordinate independent, it preserves the position density and current pointwise. The old spatial record remains held while the trap's controlling key is transferred to $D'$. The potential is a unitary conjugate of a nonnegative matrix potential plus a bounded matrix, so it stays semibounded. Expanding its square gives a scalar quadratic term and affine matrix coefficients, within the common inventory. Simply declaring a rewired trap after SWAP would omit this interaction. 

If the original pointer itself is to be restored, a reverse smooth forced trap can take its branch centre back to zero while a copied key/record or receiving cell is retained. The receiving systems carry the old correlations. Future use proceeds from this full state and its conditional law; it is not assigned an independent fresh initial rank merely because a local packet now looks ready. The finite measurement theorem below uses a finite stock of fresh pointers; reset is included as a real operation and as a return test. 



<a id="section-29-2-3"></a>

### 29.2.3 Feedback from a literal spatial record

 An internal key-controlled source gate is an exact coherent operation, but it follows a finite position display only up to the display's error. Literal position feedback also belongs to [(28.2)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:H). Let $g(y)$ be smooth, $0\le g\le1$, equal to zero for $y\le h-r$ and one for $y\ge h+r$, with $0<r<L/2$. Let $B$ be a bounded Hermitian source generator and compare 

$$

 H_{\rm pos}=H_{\rm store}+g(y)B,\qquad
 H_{\rm key}=H_{\rm store}+KB.

$$

 The second gives the intended branch gate. Define <a id="mc:eq:feedbacktail"></a>


$$

 \epsilon_g=\max_{k=0,1}\int |g(y)-k|^2|\phi_0(y-Lk)|^2dy
 \le{\overline{\mathsf F}}\left(\frac{L/2-r}{\sigma}\right).

$$

Equation (29.10).

 Duhamel, evaluated on the exactly stationary ideal packet, gives <a id="mc:eq:feedbackbound"></a>


$$

 {\left\lVert\Psi_{\rm pos}(t)-\Psi_{\rm key}(t)\right\rVert}
 \le\frac{t{\left\lVertB\right\rVert}}{\hbar}\sqrt{\epsilon_g}.

$$

Equation (29.11).

 This bound is uniform in an inaccessible reference. The physical position contact has reciprocal backaction; it is not claimed to leave the actual pointer fixed. The derivative and crossing estimate in Section [30.1](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:sec:clock) supplies a history bound as well. Thus literal spatial feedback, rather than an idealized outside observer, has a complete implementation. 

Here $g(y)$ is a multiplication operator on the wave, not a coefficient obtained by inserting the actual $Y_t$ into an externally controlled Hamiltonian. 



<a id="section-29-3"></a>

## 29.3 Protected coherent transport in the same inventory

 <a id="mc:sec:protection"></a> The code and gap argument of Chapter [23](/quantum-measurement/monograph/energy-gap-protection-of-complete-source-transport#prot:gapchapter) apply to the finite internal bank in the present inventory. They concern coherent Hamiltonian transport, so their proof survives the change of actual ontology. We give the complete bounded-bank estimate here with explicit $\hbar$ and with the spatial-spectator condition stated before its use. It supplies protection, not a statistical selection of guidance. 

Actual archive storage and protection of unknown logical amplitudes are different tasks. The bounded internal gap construction can be implemented here without a stochastic interface. To display its nonempty domain, encode two qubits into four by 

$$

 C{\lverta,b\rangle}=\frac{{\lvert0,a,b,a\oplus b\rangle}+{\lvert1,1\oplus a,1\oplus b,1\oplus a\oplus b\rangle}}{\sqrt2}.

$$

 Let $S_X=X_1X_2X_3X_4$, $S_Z=Z_1Z_2Z_3Z_4$, $P=(I+S_X)(I+S_Z)/4$ and 

$$

 H_{\rm pen}=\tfrac\Delta2(I-S_X)+\tfrac\Delta2(I-S_Z),\quad
 H_\Delta=H_{\rm pen}+H_0+V.

$$

 Assume $[H_0,P]=0$, ${\left\lVertH_0\right\rVert}\le b$, and 

$$

 V=\sum_{i=1}^4\sum_{\alpha=x,y,z}\sigma_i^\alpha\otimes B_{i\alpha},
 \quad B_{i\alpha}=B_{i\alpha}^\dagger,\quad{\left\lVertV\right\rVert}\le v.

$$

 The $B$'s act on retained finite internal nuisance systems. During the protected exposure, the spatial holding Hamiltonian is a commuting spectator; it is factored out. We do not assert a bounded-norm theorem for arbitrary unbounded coordinate couplings. One-site Paulis anticommute with a stabilizer, so $PVP=0$. All encoding and decoding gates are finite internal unitaries. 



**Proposition 29.2 (Retained-bank gap bound).**

<a id="mc:prop:gap"></a> For $\Delta-2b-v=\gamma>0$, <a id="mc:eq:gap"></a>


$$

 {\left\lVert\bigl(e^{-itH_\Delta/\hbar}-e^{-itH_0/\hbar}\bigr)P\right\rVert}
 \le\min\left\{2,\frac{2v+tv^2/\hbar}{\gamma}\right\}.

$$

Equation (29.12).

 The same bound holds with every inaccessible reference and retained internal nuisance system included. 

 

**Proof.**

Block the Hamiltonian into $H_d=\operatorname{diag}(A,D)$ and off-diagonal $W$, with lower spectral separation $\gamma$ and $B=QVP$. The integral $X=\int_0^\infty e^{-rD}Be^{rA}dr$ solves $DX-XA=B$ and has norm at most $v/\gamma$. With $S=\left(\begin{smallmatrix}0&-X^\dagger\\X&0\end{smallmatrix}\right)$, $[S,H_d]=-W$ and 

$$

 e^SH_\Delta e^{-S}=H_d+\int_0^1u e^{uS}[S,W]e^{-uS}du.

$$

 The remainder is bounded by $v^2/\gamma$. Two changes of frame cost $2v/\gamma$ and Duhamel costs $tv^2/(\hbar\gamma)$. On $P$, $H_d=PH_0P$. This proves the claim. 

□

 This is the book's coherent protection estimate, with its assumptions preserved; Hamiltonian error suppression has independent primary precedent [[ML](/quantum-measurement/monograph/bibliography#bib-MarvianLidar)]. Its role here is compatibility with actual material writes and records, not selection of a noise generator.
