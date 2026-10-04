# Section 7: An autonomous massive clock and archive current bounds

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

<a id="section-7"></a>

## 7 An autonomous massive clock and archive current bounds

 <a id="sec:clock"></a> External pulse timing is a physical resource. We now include its provider and its recoil in the same Hamiltonian. This step also avoids an invalid inference from small wave error to small path error.



<a id="section-7-1"></a>

### 7.1 The complete autonomous Hamiltonian

 Resolve a finite smooth driven programme as <a id="eq:program"></a>


$$

 H_{\rm id}(t)=H_{\rm osc}+H_{\rm const}+\sum_{i=1}^N f_i(x_0+vt)B_i(q),
 \qquad H_{\rm osc}=\sum_k\left(\frac{p_k^2}{2m_k}
                         +\frac{m_k\omega_k^2q_k^2}{2}\right).

$$

Equation (27).

 The coordinate-independent Hermitian matrix $H_{\rm const}$ is bounded. All $m_k,\omega_k$ are strictly positive. The $f_i$ are real bounded smooth profiles with bounded derivatives. The $B_i$ are affine Hermitian matrix functions of $q$, possibly plus bounded smooth matrix functions with bounded derivatives. This covers the forced trap (expand its square), finite internal rotations, transported trap controls [(23)](/quantum-measurement/research/equilibrium-records/physical-records-that-remain-true-about-their-past#eq:covariantreset), and smooth position feedback. Any finite coordinate-independent internal unitary $S(t)$ while stored oscillators are present can be implemented exactly by 

$$

 i\hbar\dot S(t)S(t)^\dagger+S(t)H_{\rm store}S(t)^\dagger.

$$

 Its kinetic term is unchanged and its scalar quadratic term is unchanged; only finitely many bounded or affine matrix coefficients vary. This provides a direct finite gate compiler within [(27)](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#eq:program).

The stationary protection estimate applies on each constant exposure. A finite programme with sharp bounded internal switches can be replaced by smooth, archive-preserving ramps. If $\delta H(t)$ is the difference from that piecewise constant internal programme, its additional full-wave error is at most 

$$

 \epsilon_{\rm ramp}\le\hbar^{-1}\int_0^T{\left\|{\delta H(t)}\right\|}\,dt,

$$

 and is included in $\epsilon_{\rm gate}$. Once the finite gap and exposure are fixed, sufficiently narrow finite ramps make this cost arbitrarily small. For derivative comparisons, the internal perturbation satisfies $W_2(\delta H(t)\psi_t)\le{\left\|{\delta H(t)}\right\|}W_2(\psi_t)$; propagation of this residual uses Lemma [7.1](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#lem:graph). The ramps preserve the archive keys, or commute with their storage Hamiltonians, so the held archive current remains zero.

For an exactly $C^\infty$ trap programme use a flat positive bump $u(s)$ on $(0,1)$ and 

$$

 b(t)=L\frac{\int_0^{t/T_w}u(s)ds}{\int_0^1u(s)ds},\qquad
 c=b+\ddot b/\omega^2.

$$

 It is monotone and flat at both endpoints, so the exact writer proof is unchanged. The quintic in the figure instead gives a continuous piecewise-smooth trap profile; smoothing it has a directly bounded integrated residual. No globally smooth extension of its nonzero endpoint third derivative is presumed.

Add a massive clock coordinate $x$, prepared in the unchirped minimum-uncertainty Gaussian 

$$

 \chi_0(x)=(2\pi s_c^2)^{-1/4}\exp\left[-\frac{(x-x_0)^2}{4s_c^2}+\frac{iM_cv(x-x_0)}{\hbar}\right].

$$

 It has mean position $x_0$, position deviation $s_c$ and mean momentum $M_cv$. Define <a id="eq:auto"></a>


$$

 H_{\rm aut}=\frac{P_x^2}{2M_c}+H_{\rm osc}+H_{\rm const}+
                              \sum_i f_i(x)B_i(q).

$$

Equation (28).

 This is autonomous and semibounded: bounded profile coefficients and oscillator confinement absorb each affine force by Young's inequality. It is self-adjoint on the free-clock-plus-oscillator domain, with the relative bound of the affine perturbation arbitrarily small. There is no read of the *actual* clock position followed by an external switch. The quantum potential $f_i(x)B_i(q)$ is the interaction itself, and the actual clock follows [(3)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:guidance) on the full wave.

The initial wave is $\chi_0\otimes\psi_0$, including all prepared apparatus and retained resources. Let $F_t$ be its exact evolution under [(28)](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#eq:auto). Compare it to 

$$

 G_t=\chi_t\otimes\psi_t,\qquad
 \chi_t=e^{-itP_x^2/(2M_c\hbar)}\chi_0,\qquad
 i\hbar\dot\psi_t=H_{\rm id}(t)\psi_t.

$$

 The free clock has mean $x_0+vt$ and width <a id="eq:clockwidth"></a>


$$

 s_t=\sqrt{s_c^2+\left(\frac{\hbar t}{2M_cs_c}\right)^2}.

$$

Equation (29).

 The comparator includes the clock; it is not a reduced apparatus state. Here the driven Hamiltonian $H_{\rm id}$ contains the chosen protection and spatial-feedback terms: only its external timing is idealized. This driven wave is distinct from the nominal, unperturbed key-controlled wave used to define the target instrument. Their $L^2$ gate comparison does not by itself give an archive-current estimate.



<a id="section-7-2"></a>

### 7.2 Derivative control uniform in clock resources

 Choose fixed reference length units for the pointer coordinates. For $r\ge0$, write 

$$

 W_r(F)=\sum_{|\alpha|+|\beta|\le r}{\left\|{q^\alpha\partial_q^\beta F}\right\|}_2.

$$

 Dimensional powers of those fixed length units are understood; they can equivalently be inserted term by term. The norm integrates over $x,q$ and all internal/reference indices, but differentiates only $q$.



**Lemma 7.1 (Uniform pointer graph norm).**

<a id="lem:graph"></a> For the fixed finite inventory in [(28)](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#eq:auto), <a id="eq:graph"></a>


$$

 W_r(e^{-itH_{\rm aut}/\hbar}F)\le e^{\kappa_rt/\hbar}W_r(F)
 \quad(0\le t\le T).

$$

Equation (30).

 The constant depends on the pointer inventory and the profile bounds, but not on $M_c,s_c$, the mean clock momentum, or the reference dimension. The same estimate holds for the time-dependent ideal propagator. 

 

**Proof.**

For each scalar differential monomial $O=q^\alpha\partial_q^\beta$, $[O,P_x^2]=0$ and $[O,H_{\rm const}]=0$. Its commutator with the scalar oscillator is a finite sum of monomials of total order at most $r$. An affine potential removes a derivative in each nonzero commutator; multiplication by bounded smooth functions contributes bounded coefficient terms of no higher order. Thus 

$$

 \sum_{|\alpha|+|\beta|\le r}{\left\|{[q^\alpha\partial_q^\beta,H_{\rm aut}]F}\right\|}
 \le \kappa_rW_r(F).

$$

 Matrices need not commute with each other: only their commutators with scalar coordinate operators have been used. Commute $O$ through the propagator, apply Duhamel and unitarity, sum, and use Gronwall. These identities hold first on the smooth core; oscillator graph-norm regularization and the same uniform estimate extend them to the displayed domain. The time-dependent case uses uniform coefficient bounds. Tensoring an identity does not change any estimate. 

□





**Theorem 7.2 (Complete autonomous approximation).**

<a id="thm:clock"></a> Assume $W_3(\psi_0)<\infty$. For $r=0,2$ define <a id="eq:epsclock"></a>


$$

 \varepsilon_r(T)=\frac1\hbar\int_0^T e^{\kappa_r(T-t)/\hbar}s_t
                         \sum_i\operatorname{Lip}(f_i)W_r(B_i\psi_t)dt.

$$

Equation (31).

 Take $\kappa_0=0$ for the $L^2$ propagation estimate, by unitarity. Then <a id="eq:clockbound"></a>


$$

 \sup_{t\le T}W_r(F_t-G_t)\le\varepsilon_r(T)
 \le A_{r,T}\left(s_c+\frac{\hbar T}{2M_cs_c}\right),

$$

Equation (32).

 where $A_{r,T}$ is finite and independent of the clock resources. All clock, fuel, receiver, record and reference factors remain in this comparison. 

 

**Proof.**

The defect of $G_t$ under the exact Hamiltonian is 

$$

 R_t=\sum_i[f_i(x)-f_i(x_0+vt)]\chi_t(x)\otimes B_i\psi_t.

$$

 The coordinate factor separates under every $q$ derivative and multiplier, so 

$$

 W_r(R_t)\le s_t\sum_i\operatorname{Lip}(f_i)W_r(B_i\psi_t).

$$

 Affine multiplication needs at most $W_{r+1}$ of the ideal wave; bounded smooth terms need $W_r$. Lemma [7.1](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#lem:graph) bounds these on a fixed horizon. Apply Duhamel in the invariant $W_r$ domain and [(30)](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#eq:graph); $s_t\le s_c+\hbar T/(2M_cs_c)$ proves the last inequality. The exact product initial state makes the initial defect zero. 

□

 For example $s_c=\sqrt{\hbar T/(2M_c)}$ gives error $O(M_c^{-1/2})$ for fixed apparatus. Its mean initial free clock energy is <a id="eq:clockenergy"></a>


$$

 E_C=\frac{M_cv^2}{2}+\frac{\hbar^2}{8M_cs_c^2}
     =\frac{M_cv^2}{2}+\frac{\hbar}{4T}.

$$

Equation (33).

 Every finite member has finite energy and normalizable resources. The ideal limit requires increasing mass/energy; Gaussian packets have unbounded support and are not claimed to have a strict energy cutoff. Total $H_{\rm aut}$ energy is conserved. The clock can recoil and entangle: [(32)](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#eq:clockbound) bounds its complete discrepancy instead of deleting it. These are finite-horizon claims, not a perfect autonomous clock for all time.



<a id="section-7-3"></a>

### 7.3 Why the same estimate controls actual archive history

 A small $L^2$ wave error alone does not control guidance paths. The $W_2$ estimate provides the extra information needed for a *specified retained record surface*. Let $\Sigma=\{q_k=h\}$ be one such decision surface. The one-coordinate, Hilbert-valued trace estimates imply 

$$

 {\left\|{F|_\Sigma}\right\|}_2\le C_{\rm tr}W_1(F),\qquad
 {\left\|{\partial_kF|_\Sigma}\right\|}_2\le C_{\rm tr}W_2(F).

$$

 For completeness, ${\left\|{u(h)}\right\|}^2\le2{\left\|{u}\right\|}{\left\|{u'}\right\|}$ follows by integrating the derivative of ${\left\|{u(s)}\right\|}^2$ on a half-line; apply it also to $u'$. All other coordinates and the reference are Hilbert-valued parameters.



**Theorem 7.3 (Autonomous historical archive protection).**

<a id="thm:history"></a> During a hold interval $I\subset[0,T]$, suppose the ideal wave has $j_k[G_t]=0$ pointwise on $\Sigma$ and $W_2(G_t)\le B$. Let $W_2(F_t-G_t)\le\varepsilon_2$. In equilibrium for the exact autonomous dynamics, <a id="eq:archiveerror"></a>


$$

 {\mathbb P}(\text{the record side of }\Sigma\text{ changes during }I)
 \le\frac{\hbar}{m_k}C_{\rm tr}^2|I|\,
                     \varepsilon_2(2B+\varepsilon_2).

$$

Equation (34).

 Sum this bound for finitely many retained record surfaces. Add their write/readout errors separately. 

 

**Proof.**

Write $E=F-G$. Expanding $F^\dagger\partial_kF-G^\dagger\partial_kG$ and applying the two trace estimates and Cauchy–Schwarz gives 

$$

 \int_\Sigma|j_k[F]-j_k[G]|\le
 \frac\hbar{m_k}C_{\rm tr}^2\varepsilon_2(2B+\varepsilon_2).

$$

 This bounds *absolute* flux; cancellation of signed currents is not enough. To avoid a hidden transversality assumption, let $s_\delta(q_k)$ smoothly approximate the indicator of one side of $\Sigma$, with $s_\delta'\ge0$ and $\int s_\delta'=1$. Along almost every complete trajectory, 

$$

 \operatorname{Var}_{I}s_\delta(Q_k)\le
 \int_I |s_\delta'(Q_k)|\,|v_k(Q,t)|dt.

$$

 Equivariance makes its expected right side $\int_I\int |s_\delta'(q_k)||j_k[F]|dq\,dt$. A genuine change of side contributes at least one to the limiting variation. Hilbert-valued traces make the current continuous in the normal coordinate as an $L^1$ function of the other coordinates. Fatou and the approximate-identity limit bound its probability by $\int_I\int_\Sigma|j_k[F]|$. Insert the preceding inequality and the pointwise-zero ideal current. Lemma [2.4](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#lem:exist) already handles nodes; no positive lower density is assumed. 

□

 The ideal stored wave [(21)](/quantum-measurement/research/equilibrium-records/physical-records-that-remain-true-about-their-past#eq:storedwave) supplies the required pointwise zero, including during noncommuting continuation on the other factors. The transported reset [(23)](/quantum-measurement/research/equilibrium-records/physical-records-that-remain-true-about-their-past#eq:covariantreset) also preserves that current. Finite clock tails therefore produce a quantified finite-horizon historical error, rather than being incorrectly declared harmless from endpoint equivariance.



<a id="paragraph-1"></a>

#### Choosing the archive comparator.

 For each promised archive segment, the clock-only choice of $\varepsilon_2$ is valid when the actual driven comparator $G_t$ has zero archive current. Its gates must preserve that archive's key, implement the exact covariant key transport, or commute with its storage Hamiltonian. The protected logical bank is subject to the commuting-storage hypothesis of Section [6](/quantum-measurement/research/equilibrium-records/protected-coherent-transport-in-the-same-inventory#sec:protection); an arbitrary disturbance of an archive key is not covered. Alternatively, if a zero-current comparator $\widehat G_t$ obeys 

$$

 \eta_{2,\rm drv}(I)=\sup_{t\in I}W_2(G_t-\widehat G_t)<\infty,

$$

 then use $\varepsilon_{2,\rm clock}+\eta_{2,\rm drv}(I)$ in [(34)](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#eq:archiveerror), with $B$ bounding $W_2(\widehat G_t)$. This derivative discrepancy includes propagation through all intervening stages. The $L^2$ quantity $\epsilon_{\rm gate}$ cannot replace it.

For position feedback, keep a separate completed archive $z$ with its own immutable key. The working pointer $y$ may recoil under $g(y)B$, while $z$ still has zero ideal current by Theorem [5.1](/quantum-measurement/research/equilibrium-records/physical-records-that-remain-true-about-their-past#thm:store). If preservation of $y$ is desired as well, repeat the graph-norm proof with residual $(g(y)-K)B\psi_t$, propagating it through every subsequent stage up to the end of the promised hold. This supplies the additional $\eta_{2,\rm drv}$ just defined. Its $W_2$ norm is computed by differentiating the known Gaussian and $g$ twice. Since $g-k$ and its derivatives are supported in the wrong half-line or central buffer, this norm is bounded by a finite polynomial in $L,\sigma^{-1},{\left\|{g'}\right\|}_\infty,{\left\|{g''}\right\|}_\infty$ times 

$$

 \exp\left[-\frac{(L/2-r)^2}{4\sigma^2}\right].

$$

 The graph propagation constant grows at most exponentially in $L$ for a fixed duration and other fixed parameters, because the affine trap coefficient is linear in $L$. Thus this derivative error, and its surface-flux budget, tend to zero as $L/\sigma\to\infty$ at fixed $\sigma,r$. This is an actual controlled limit, not a raw-path TV assertion.
