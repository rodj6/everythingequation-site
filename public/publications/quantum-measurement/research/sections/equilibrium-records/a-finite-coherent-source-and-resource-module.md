# Section 4: A finite coherent source and resource module

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

<a id="section-4"></a>

## 4 A finite coherent source and resource module

 <a id="sec:resource"></a> Here is a nontrivial receptor that is physically in the same inventory. On a finite factor $D$ use orthogonal states 

$$

 {|{r}\rangle},\quad{|{p_a}\rangle},\quad{|{c_a}\rangle},\quad{|{l_a}\rangle}\quad(a=0,1).

$$

 They include the following actual material degrees in their internal wave description:  

| State | Production | Fuel | Site | Excitation | Memory | Remnant |
| --- | --- | --- | --- | --- | --- | --- |
| $r$ | 1 | 1 | ready | 0 | blank | vacuum |
| $p_a$ | 0 | 1 | ready | mode $a$ | blank | vacuum |
| $c_a$ | 0 | 0 | spent | 0 | $a$ | capture $a$ |
| $l_a$ | 0 | 1 | ready | 0 | blank | loss $a$ |

  Assign energy $E>0$ to a production cofactor, fuel unit, excitation and loss remnant, and $2E$ to a capture remnant; the displayed labels are degenerate. Every row has total resource energy $2E$. Hence the conversion gates conserve this resource energy exactly while spending readiness and retaining energy in products. Their full tensor-factor implementation is defined to be zero outside the indicated equal-energy active subspace. Other exhausted sectors stay present.

For source projectors $P_a$, set <a id="eq:reactionG"></a>


$$
\begin{aligned}
 G_w&=i\sum_aP_a\otimes({|{p_a}\rangle}{\langle{r}|}-{|{r}\rangle}{\langle{p_a}|}),\\
 {|{b_a}\rangle}&=\sqrt\eta{|{c_a}\rangle}+\sqrt{1-\eta}{|{l_a}\rangle},\qquad 0<\eta<1,\\
 G_r&=i\sum_a({|{b_a}\rangle}{\langle{p_a}|}-{|{p_a}\rangle}{\langle{b_a}|}).
\end{aligned}
$$

Equation (15).

 These Hermitian generators have norm one on their active subspaces. Nonoverlapping pulses $\hbar g_w(t)G_w$ and $\hbar g_r(t)G_r$ with areas $\theta,\varphi$ give exactly <a id="eq:resourcewave"></a>


$$

 \begin{aligned}
 \Psi_D={}&\cos\theta\,\psi{|{r}\rangle}+\sin\theta\sum_aP_a\psi
 \left(\cos\varphi{|{p_a}\rangle}+\sin\varphi\sqrt\eta{|{c_a}\rangle}
                    +\sin\varphi\sqrt{1-\eta}{|{l_a}\rangle}\right).
 \end{aligned}

$$

Equation (16).

 Indeed each generator is a two-dimensional $\sigma_y$ rotation, and the active $a$ sectors are orthogonal. There was no sampled reaction time in this calculation. Reduced excitation populations are not actual level trajectories in the adopted ontology. The actual event is a subsequent spatial registration governed by Sections [2](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#sec:constitution)–[3](/quantum-measurement/research/equilibrium-records/an-exact-massive-detector-in-physical-time#sec:detector).

The finite response has four exact orthogonal status weights (and ideal resolved-pointer probabilities): <a id="eq:statuses"></a>


$$

 (P_r,P_p,P_c,P_l)=
 (\cos^2\theta,\ \sin^2\theta\cos^2\varphi,\
 \eta\sin^2\theta\sin^2\varphi,\ (1-\eta)\sin^2\theta\sin^2\varphi).

$$

Equation (17).

 The pending excitation remains a vector in the actual model at a finite cutoff. Continuing $G_r$ processes it coherently; a finite closed receptor can recur. A zero response window does not erase it. Neither an absorbing boundary nor a restart clock is imposed when a coefficient begins to populate $p_a$.



<a id="section-4-1"></a>

### 4.1 Physical null, capture and loss

 Use three spatial readout centres $-L,0,L$ for captured $a=0$, null, and captured $a=1$. The same forced oscillator construction applies to each orthogonal control projector, using signed trajectories. Noncaptured $r,p,l$ components share the null packet. Nearest-centre cells have worst tail at most $2\delta$, with $\delta={\overline{\mathsf F}}(L/(2\sigma))$. The ideal orthogonal-label comparator has capture coefficient 

$$

 \sqrt q\,P_a\psi{|{c_a}\rangle},\qquad q=\eta\sin^2\theta\sin^2\varphi,

$$

 and complete null vector <a id="eq:nullvector"></a>


$$

 \Psi_N=\cos\theta\,\psi{|{r}\rangle}+
 \sin\theta\sum_aP_a\psi\left(\cos\varphi{|{p_a}\rangle}
                 +\sin\varphi\sqrt{1-\eta}{|{l_a}\rangle}\right).

$$

Equation (18).

 Only for a declared reduced comparison, tracing $D$ gives <a id="eq:nullmap"></a>


$$

 \mathcal N(\rho)=\cos^2\theta\,\rho+
 \sin^2\theta\bigl(\cos^2\varphi+(1-\eta)\sin^2\varphi\bigr)
                  \sum_aP_a\rho P_a.

$$

Equation (19).

 Equation [(18)](/quantum-measurement/research/equilibrium-records/a-finite-coherent-source-and-resource-module#eq:nullvector), along with pointer and all receiving systems, is the retained continuation. Equation [(19)](/quantum-measurement/research/equilibrium-records/a-finite-coherent-source-and-resource-module#eq:nullmap) is not a global collapse rule. Finite spatial classifiers approximate these ideal labels; Section [8](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#sec:complete) bounds the complete output error.



<a id="section-4-2"></a>

### 4.2 Finite stock and exhaustion

 For a promised $m$-epoch experiment allocate $m$ ready cells, their blank archives, and receivers. Gate the active conversion only on sectors containing the required cofactor, fuel, site and blank capacity. Extend the unitary by identity on explicitly exhausted sectors, which can be spatially flagged by the same writer. A failed or null attempt does not receive a new ${|{r}\rangle}$ for free. The consumed-ready-cell count is bounded by the allocated finite schedule; no infinite Poisson bath is hidden in this implementation.
