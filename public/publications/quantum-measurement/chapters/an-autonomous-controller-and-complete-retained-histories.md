# Chapter 30: An autonomous controller and complete retained histories

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

<a id="mc:chapter-autonomous"></a> 

The driven library in Chapter [29](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:chapter-material) specifies exact contacts but still uses a pulse schedule. Here the schedule is supplied by a massive quantum coordinate that belongs to the complete initial state. Its recoil and correlations remain in the final comparison. The main analytic distinction is between small wave error and reliable history: the former controls final records, whereas the latter needs derivative control at each actual archive decision surface. 

Theorem [30.3](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:history) supplies that additional control. Theorem [30.5](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:closure) then combines the material modules with all receivers and the inaccessible reference. The result concerns complete retained quantum outputs and specified actual declarations. It is not a claim of total-variation continuity for every unrecorded guidance path. 



<a id="section-30-1"></a>

## 30.1 A massive controller within the common Hamiltonian

 <a id="mc:sec:clock"></a> External pulse timing is a physical resource. We now include its provider and its recoil in the same Hamiltonian. This step also avoids an invalid inference from small wave error to small path error. 



<a id="section-30-1-1"></a>

### 30.1.1 The complete autonomous Hamiltonian

 Resolve a finite smooth driven programme as <a id="mc:eq:program"></a>


$$

 H_{\rm id}(t)=H_{\rm osc}+H_{\rm const}+\sum_{i=1}^N f_i(x_0+vt)B_i(q),
 \qquad H_{\rm osc}=\sum_k\left(\frac{p_k^2}{2m_k}
                         +\frac{m_k\omega_k^2q_k^2}{2}\right).

$$

Equation (30.1).

 The coordinate-independent Hermitian matrix $H_{\rm const}$ is bounded. All $m_k,\omega_k$ are strictly positive. The $f_i$ are real bounded smooth profiles with bounded derivatives. The $B_i$ are affine Hermitian matrix functions of $q$, possibly plus bounded smooth matrix functions with bounded derivatives. This covers the forced trap (expand its square), finite internal rotations, transported trap controls [(29.9)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:covariantreset), and smooth position feedback. Any finite coordinate-independent internal unitary $S(t)$ while stored oscillators are present can be implemented exactly by 

$$

 i\hbar\dot S(t)S(t)^\dagger+S(t)H_{\rm store}S(t)^\dagger.

$$

 Its kinetic term is unchanged and its scalar quadratic term is unchanged; only finitely many bounded or affine matrix coefficients vary. This provides a direct finite gate compiler within [(30.1)](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:eq:program). 

For an exactly $C^\infty$ trap programme use a flat positive bump $u(s)$ on $(0,1)$ and 

$$

 b(t)=L\frac{\int_0^{t/T_w}u(s)ds}{\int_0^1u(s)ds},\qquad
 c=b+\ddot b/\omega^2.

$$

 It is monotone and flat at both endpoints, so the exact writer proof is unchanged. The quintic in the figure instead gives a continuous piecewise-smooth trap profile; smoothing it has a directly bounded integrated residual. No globally smooth extension of its nonzero endpoint third derivative is presumed. 

Add a massive clock coordinate $x$, prepared in a Gaussian $\chi_0$ with mean $x_0$, position deviation $s_c$, and mean momentum $M_cv$. Define <a id="mc:eq:auto"></a>


$$

 H_{\rm aut}=\frac{P_x^2}{2M_c}+H_{\rm osc}+H_{\rm const}+
                              \sum_i f_i(x)B_i(q).

$$

Equation (30.2).

 This is autonomous and semibounded: bounded profile coefficients and oscillator confinement absorb each affine force by Young's inequality. It is self-adjoint on the free-clock-plus-oscillator domain, with the relative bound of the affine perturbation arbitrarily small. There is no read of the *actual* clock position followed by an external switch. The quantum potential $f_i(x)B_i(q)$ is the interaction itself, and the actual clock follows [(28.3)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:guidance) on the full wave. 

The initial wave is $\chi_0\otimes\psi_0$, including all prepared apparatus and retained resources. Let $F_t$ be its exact evolution under [(30.2)](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:eq:auto). Compare it to 

$$

 G_t=\chi_t\otimes\psi_t,\qquad
 \chi_t=e^{-itP_x^2/(2M_c\hbar)}\chi_0,\qquad
 i\hbar\dot\psi_t=H_{\rm id}(t)\psi_t.

$$

 The free clock has mean $x_0+vt$ and width <a id="mc:eq:clockwidth"></a>


$$

 s_t=\sqrt{s_c^2+\left(\frac{\hbar t}{2M_cs_c}\right)^2}.

$$

Equation (30.3).

 The comparator includes the clock; it is not a reduced apparatus state. 



<a id="section-30-1-2"></a>

### 30.1.2 Derivative control uniform in clock resources

 Choose fixed reference length units for the pointer coordinates. For $r\ge0$, write 

$$

 W_r(F)=\sum_{|\alpha|+|\beta|\le r}{\left\lVertq^\alpha\partial_q^\beta F\right\rVert}_2.

$$

 Dimensional powers of those fixed length units are understood; they can equivalently be inserted term by term. The norm integrates over $x,q$ and all internal/reference indices, but differentiates only $q$. 



**Lemma 30.1 (Uniform pointer graph norm).**

<a id="mc:lem:graph"></a> For the fixed finite inventory in [(30.2)](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:eq:auto), <a id="mc:eq:graph"></a>


$$

 W_r(e^{-itH_{\rm aut}/\hbar}F)\le e^{\kappa_rt/\hbar}W_r(F)
 \quad(0\le t\le T).

$$

Equation (30.4).

 The constant depends on the pointer inventory and the profile bounds, but not on $M_c,s_c$, the mean clock momentum, or the reference dimension. The same estimate holds for the time-dependent ideal propagator. 

 

**Proof.**

For each scalar differential monomial $O=q^\alpha\partial_q^\beta$, $[O,P_x^2]=0$ and $[O,H_{\rm const}]=0$. Its commutator with the scalar oscillator is a finite sum of monomials of total order at most $r$. An affine potential removes a derivative in each nonzero commutator; multiplication by bounded smooth functions contributes bounded coefficient terms of no higher order. Thus 

$$

 \sum_{|\alpha|+|\beta|\le r}{\left\lVert[q^\alpha\partial_q^\beta,H_{\rm aut}]F\right\rVert}
 \le \kappa_rW_r(F).

$$

 Matrices need not commute with each other: only their commutators with scalar coordinate operators have been used. Commute $O$ through the propagator, apply Duhamel and unitarity, sum, and use Gronwall. These identities hold first on the smooth core; oscillator graph-norm regularization and the same uniform estimate extend them to the displayed domain. The time-dependent case uses uniform coefficient bounds. Tensoring an identity does not change any estimate. 

□

 



**Theorem 30.2 (Complete autonomous approximation).**

<a id="mc:thm:clock"></a> Assume $W_3(\psi_0)<\infty$. For $r=0,2$ define <a id="mc:eq:epsclock"></a>


$$

 \varepsilon_r(T)=\frac1\hbar\int_0^T e^{\kappa_r(T-t)/\hbar}s_t
                         \sum_i\operatorname{Lip}(f_i)W_r(B_i\psi_t)dt.

$$

Equation (30.5).

 Take $\kappa_0=0$ for the $L^2$ propagation estimate, by unitarity. Then <a id="mc:eq:clockbound"></a>


$$

 \sup_{t\le T}W_r(F_t-G_t)\le\varepsilon_r(T)
 \le A_{r,T}\left(s_c+\frac{\hbar T}{2M_cs_c}\right),

$$

Equation (30.6).

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

 Affine multiplication needs at most $W_{r+1}$ of the ideal wave; bounded smooth terms need $W_r$. Lemma [30.1](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:lem:graph) bounds these on a fixed horizon. Apply Duhamel in the invariant $W_r$ domain and [(30.4)](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:eq:graph); $s_t\le s_c+\hbar T/(2M_cs_c)$ proves the last inequality. The exact product initial state makes the initial defect zero. 

□

 For example $s_c=\sqrt{\hbar T/(2M_c)}$ gives error $O(M_c^{-1/2})$ for fixed apparatus. Its mean initial free clock energy is <a id="mc:eq:clockenergy"></a>


$$

 E_C=\frac{M_cv^2}{2}+\frac{\hbar^2}{8M_cs_c^2}
     =\frac{M_cv^2}{2}+\frac{\hbar}{4T}.

$$

Equation (30.7).

 Every finite member has finite energy and normalizable resources. The ideal limit requires increasing mass/energy; Gaussian packets have unbounded support and are not claimed to have a strict energy cutoff. Total $H_{\rm aut}$ energy is conserved. The clock can recoil and entangle: [(30.6)](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:eq:clockbound) bounds its complete discrepancy instead of deleting it. These are finite-horizon claims, not a perfect autonomous clock for all time. 



<a id="section-30-1-3"></a>

### 30.1.3 Why the same estimate controls actual archive history

 A small $L^2$ wave error alone does not control guidance paths. The $W_2$ estimate provides the extra information needed for a *specified retained record surface*. Let $\Sigma=\{q_k=h\}$ be one such decision surface. The one-coordinate, Hilbert-valued trace estimates imply 

$$

 {\left\lVertF|_\Sigma\right\rVert}_2\le C_{\rm tr}W_1(F),\qquad
 {\left\lVert\partial_kF|_\Sigma\right\rVert}_2\le C_{\rm tr}W_2(F).

$$

 For completeness, ${\left\lVertu(h)\right\rVert}^2\le2{\left\lVertu\right\rVert}{\left\lVertu'\right\rVert}$ follows by integrating the derivative of ${\left\lVertu(s)\right\rVert}^2$ on a half-line; apply it also to $u'$. All other coordinates and the reference are Hilbert-valued parameters. 



**Theorem 30.3 (Autonomous historical archive protection).**

<a id="mc:history"></a> During a hold interval $I\subset[0,T]$, suppose the ideal wave has $j_k[G_t]=0$ pointwise on $\Sigma$ and $W_2(G_t)\le B$. Let $W_2(F_t-G_t)\le\varepsilon_2$. In equilibrium for the exact autonomous dynamics, <a id="mc:eq:archiveerror"></a>


$$

 {\mathbb P}(\text{the record side of }\Sigma\text{ changes during }I)
 \le\frac{\hbar}{m_k}C_{\rm tr}^2|I|\,
                     \varepsilon_2(2B+\varepsilon_2).

$$

Equation (30.8).

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

 Equivariance makes its expected right side $\int_I\int |s_\delta'(q_k)||j_k[F]|dq\,dt$. A genuine change of side contributes at least one to the limiting variation. Hilbert-valued traces make the current continuous in the normal coordinate as an $L^1$ function of the other coordinates. Fatou and the approximate-identity limit bound its probability by $\int_I\int_\Sigma|j_k[F]|$. Insert the preceding inequality and the pointwise-zero ideal current. Lemma [28.4](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:lem:exist) already handles nodes; no positive lower density is assumed. 

□

 The ideal stored wave [(29.7)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:storedwave) supplies the required pointwise zero, including during noncommuting continuation on the other factors. The transported reset [(29.9)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:covariantreset) also preserves that current. Finite clock tails therefore produce a quantified finite-horizon historical error, rather than being incorrectly declared harmless from endpoint equivariance. 

For position feedback, keep a separate completed archive $z$ with its own immutable key. The working pointer $y$ may recoil under $g(y)B$, while $z$ still has zero ideal current by Theorem [29.1](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:thm:store). If preservation of $y$ is desired as well, repeat the graph-norm proof with residual $(g(y)-K)B\psi_t$. Its $W_2$ norm is computed by differentiating the known Gaussian and $g$ twice. Since $g-k$ and its derivatives are supported in the wrong half-line or central buffer, this norm is bounded by a finite polynomial in $L,\sigma^{-1},{\left\lVertg'\right\rVert}_\infty,{\left\lVertg''\right\rVert}_\infty$ times 

$$

 \exp\left[-\frac{(L/2-r)^2}{4\sigma^2}\right].

$$

 The graph propagation constant grows at most exponentially in $L$ for a fixed duration and other fixed parameters, because the affine trap coefficient is linear in $L$. Thus this derivative error, and its surface-flux budget, tend to zero as $L/\sigma\to\infty$ at fixed $\sigma,r$. This is an actual controlled limit, not a raw-path TV assertion. 



<a id="section-30-2"></a>

## 30.2 Complete instruments, references and finite histories

 <a id="mc:sec:complete"></a> Let $\{K_a\}$ be a finite family on the unknown input satisfying $\sum_aK_a^\dagger K_a=I$. The map 

$$

 \psi{\lvert\mathrm{blank}\rangle}\longmapsto\sum_aK_a\psi{\lverta\rangle}

$$

 is an isometry because it preserves inner products. Extend an orthonormal basis of its range to a full basis to obtain a finite unitary. A finite Hermitian logarithm supplies a bounded pulse. Alternatively the explicit resource rotations above give a fixed nontrivial family directly. The gate compiler in Section [30.1](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:sec:clock) implements these gates while retaining all spatial storage. This argument concerns preparation-independent linear finite instruments; it does not admit arbitrary nonlinear ray maps. 



<a id="section-30-2-1"></a>

### 30.2.1 The exact finite pointer output and a strong comparator

 For one stage the physical isometry has form <a id="mc:eq:W"></a>


$$

 W\psi=\sum_a K_a\psi{\lverta\rangle}_K\phi_a(q),
 \qquad\phi_a(q)=\phi_0(q-La)

$$

Equation (30.9).

 (or its finite multicoordinate version). Let $\Gamma_a$ be the disjoint physical readout regions and 

$$

 \delta_a=\int_{\Gamma_a^c}|\phi_a|^2dq,\qquad
 \widetilde\phi_a=\frac{1_{\Gamma_a}\phi_a}{\sqrt{1-\delta_a}}.

$$

 The cut packets define a *comparison* isometry $\widetilde W$ with ideal disjoint records on the same retained space. They are not claimed to be physical Gaussian preparations. If a smooth comparison packet is wanted, smooth the cut in an arbitrarily narrow boundary strip and add its norm error. 



**Lemma 30.4 (Complete retained-state record error).**

<a id="mc:lem:instrument"></a> If $\delta_* =\max_a\delta_a<1$, then <a id="mc:eq:isometryerror"></a>


$$

 {\left\lVertW-\widetilde W\right\rVert}\le\sqrt{2\delta_*}.

$$

Equation (30.10).

 The same bound holds after tensoring any reference; it bounds the trace distance between the full pure outputs and hence the half-diamond distance of the resulting physical output channels. Any subsequent *common* coherent return acting on all retained factors preserves the full-state bound. 

 

**Proof.**

The packet squared difference is $2(1-\sqrt{1-\delta_a})\le2\delta_a$. Orthogonality of the retained key gives 

$$

 {\left\lVert(W-\widetilde W)\psi\right\rVert}^2
 =\sum_a{\left\lVertK_a\psi\right\rVert}^2{\left\lVert\phi_a-\widetilde\phi_a\right\rVert}^2\le2\delta_*.

$$

 For normalized vectors their pure-state trace distance is no greater than their norm difference. The proof is unchanged with an identity on $R$. Unitary invariance and channel contractivity prove the last claims. No continuity assertion for raw guidance paths is being used. 

□

 

For a source-only reduced instrument, tracing pointer and key would give weights and daughter mixtures. The comparison instead retains $K$, pointer packets, resources and $R$. The classical label channel is a representation of final physical regions: for a final wave $\Xi$, its unnormalized output is $P_{\Gamma_a}{\lvert\Xi\rangle}{\langle\Xi\rvert} P_{\Gamma_a}$, optionally with a classical index. It is not a law that the global wave is physically projected at that time. When previously separated waves are to be recombined, use their complete coherent vector, not a dephased classical record representation. 



<a id="section-30-2-2"></a>

### 30.2.2 Noncommuting continuation without a fresh probability postulate

 After a first projective write $P_a$, a stored key and a copy, let $V_a$ be a source unitary and $R_b$ a noncommuting second projector family. With a fresh second pointer, the ideal complete vector is <a id="mc:eq:jointwave"></a>


$$

 \sum_{a,b}(R_bV_aP_a\otimes I_R)\psi\,
         {\lverta\rangle}_K{\lvertb\rangle}_B\phi_a(y)\chi_b(z)
         {\lvert\mathrm{resources}(a,b)\rangle},

$$

Equation (30.11).

 with further coherent indices included if resource vectors are not single basis states. They are never discarded merely because the display says null. For exact key-controlled gates, the actual finite displayed probabilities are <a id="mc:eq:noisymarks"></a>


$$

 {\mathbb P}(\widehat A=r,\widehat B=s)
 =\sum_{a,b}G^A_{r|a}G^B_{s|b}
                      {\left\lVert(R_bV_aP_a\otimes I_R)\psi\right\rVert}^2,

$$

Equation (30.12).

 where $G^A_{r|a}=\int_{\Gamma_r}|\phi_a|^2$ and similarly for $B$. Since the first actual pointer is held, this is also the law of its *earlier* declaration and the later declaration. Its classical history error from the ideal finite instrument is at most $\delta_A+\delta_B$. For literal position feedback add [(29.11)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:feedbackbound) and keep its separate immutable archive. Conditional normalization costs the ordinary probability denominator; it is not an unqualified exact branch rule. 



**Theorem 30.5 (Finite complete measurement-chain closure).**

<a id="mc:closure"></a> Fix a finite programme of the stated resource gates, massive writes, copies, retained resets, bounded protected internal exposures, and coherent or smooth spatial feedback. Let its horizon be $T$ and let at most $m$ physical record registers be declared. Supply the complete equilibrium initial law and the finite ready stock. Then: 

1. The autonomous model [(30.2)](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:eq:auto) has a conservative complete actual path law given by [(28.6)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:pathlaw), including its clock and all returning systems.

2. For worst Gaussian classification tails $\delta_j$, total full-wave protection/gate error $\epsilon_{\rm gate}$, and the $L^2$ clock error $\varepsilon_0$, its complete final retained-state error against the ideal disjoint-record instrument is at most <a id="mc:eq:totalwave"></a>


$$

 E_{\rm out}=\min\left\{1,\varepsilon_0+\epsilon_{\rm gate}
                                  +\sum_{j=1}^m\sqrt{2\delta_j}\right\}.

$$

Equation (30.13).

 The convention is trace distance for the complete retained quantum output (or half-diamond distance for its linear output channel), together with probabilities of physical records. It is not TV distance on the ontic pair $(\Psi,Q)$: different exact global waves need not be close in that much stronger sense.

3. During specified holds, let $E_{\rm arch}$ be the sum of the surface budgets [(30.8)](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:eq:archiveerror). If a declared working register is copied and then intentionally reset, also include a transfer budget $E_{\rm transfer}$: sum the pair-classification errors $\delta_{\rm old}+\delta_{\rm copy}$ and the complete endpoint comparison error at each such copy cut. The law of actual historical declarations and their retained final displays differs from the ideal record law by at most <a id="mc:eq:totalhist"></a>


$$

 E_{\rm hist}\le\min\{1,E_{\rm out}+E_{\rm arch}+E_{\rm transfer}\}.

$$

Equation (30.14).

 For registers declared directly in their permanent archive and never transferred, $E_{\rm transfer}=0$. In the exact driven key-preserving library, $E_{\rm arch}=0$ and the sharper purely classical classification bound is $\sum_j\delta_j$ when every displayed occurrence is included and no other perturbation is present.

4. For every fixed finite ideal programme and tolerance $\epsilon>0$, finite pointer separations, protection gaps where used, feedback profiles and clock resources can be chosen so that these displayed bounds are below $\epsilon$. The exact physical theory remains [(28.2)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:H)–[(28.4)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:equilibrium); only finite resources are adjusted.

 

 

**Proof.**

Conservative existence was established for the complete smooth domain in Lemma [28.4](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:lem:exist). Every stage is a finite unitary in that domain. Multiply the stages retaining every old key and resource, including reset receivers. First compare perturbed gates to the nominal driven key-controlled programme, using Proposition [29.2](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:prop:gap) and feedback Duhamel on the nominal stage inputs. In particular, each protection-stage comparison is evaluated on its encoded ideal prefix in the promised subspace $P$; earlier leakage is carried by the common actual suffix, not assumed absent. Each suffix is a common unitary, so prefix discrepancies are preserved; the estimates are uniform over the unknown input and $R$ with the specified prepared material bank. Add the clock's full retained-wave error. 

At the *final comparison cut*, the nominal wave is an orthogonal history-key expansion with real Gaussian factors for each retained display and the complete source/resource coefficients. These displays include all replacement archive receivers; an intentionally reset original pointer is a ready factor, not a carrier of its former record. Truncate these display packets into their assigned cells only at this cut. On a branch, the norm-squared mass removed from its product of packets is at most $\sum_j\delta_j$. Orthogonality of the retained history keys then gives a full vector error at most $\sqrt{2\sum_j\delta_j}\le\sum_j\sqrt{2\delta_j}$ by the proof of Lemma [30.4](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:lem:instrument). This yields a disjoint-record comparator with precisely the ideal history coefficients, on the same full retained space. Pure-state trace distance and position readout contractivity prove [(30.13)](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:eq:totalwave). Cut packets are not propagated as if they were stationary oscillator ground states; the support truncation is a final comparison construction only. Subsequent common coherent returns preserve its full-state error but need not preserve its initial record separation. 

For history, couple a path's earlier declared labels to its actual final archived labels on the same probability space. A held label can change only by a specified surface crossing. A transfer to a fresh copy can additionally mismatch at the copy cut: its joint endpoint probability is bounded by $\delta_{\rm old}+\delta_{\rm copy}$ in the nominal wave, plus the complete comparison error at that cut. Stop protecting the old register when its deliberate reset begins, and protect the receiving archive from then on. Theorem [30.3](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:history) and a union bound therefore give mismatch probability at most $E_{\rm arch}+E_{\rm transfer}$. Comparing final records to the ideal law costs $E_{\rm out}$. This proves [(30.14)](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:eq:totalhist) without a path-TV inference from wave closeness. 

For feasibility first choose pointer separations to make Gaussian tails small. Any literal feedback derivative residual can simultaneously be made small by the Gaussian-tail estimate after Theorem [30.3](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:history), with a separate archive if used. Choose bounded internal protection gaps large enough for the finite sum of [(29.12)](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:eq:gap); no unbounded nuisance operators have been included. The finite apparatus inventory is then fixed. Its constants $A_{r,T},B,C_{\rm tr}$ are finite. Increase $M_c$ and choose $s_c=\sqrt{\hbar T/(2M_c)}$ so both clock-wave and archive-history bounds become arbitrarily small. All choices are finite at positive $\epsilon$. The limits are taken in this order, not uniformly over an unbounded growing graph or an infinite observation horizon. 

□

 



<a id="section-30-2-3"></a>

### 30.2.3 Positive-probability conditioning and returning branches

 <a id="mc:conditioning"></a> 



**Lemma 30.6 (Conditioning on a common retained event).**

 <a id="mc:conditional-bound"></a> Let $P,Q$ be two probability laws on the same retained output or history space, with ${d_{\mathrm{TV}}}(P,Q)\le\epsilon$. For a common event $E$, put $p=P(E)$ and $q=Q(E)$. If *both* $p>0$ and $q>0$, then 

$$

 {d_{\mathrm{TV}}}\bigl(P(\,\cdot\mid E),Q(\,\cdot\mid E)\bigr)
 \le \min\{1,2\epsilon/p\}.

$$

 The sufficient condition $\epsilon<p$ ensures $q>0$. For positive unnormalized quantum outputs $\sigma,\tau$ on the same retained space, if $\|\sigma-\tau\|_1\le d$, $p={\operatorname{tr}}\sigma>0$ and $q={\operatorname{tr}}\tau>0$, then 

$$

 \|\sigma/p-\tau/q\|_1\le\min\{2,2d/p\}.

$$

 Here $d<p$ is sufficient for positivity of the second trace. 

 

**Proof.**

For a measurable set $A$, add and subtract $Q(A\cap E)/p$. The first difference is at most $\epsilon/p$, and the second is at most $|p-q|/p\le\epsilon/p$, since $Q(A\cap E)\le q$. Taking the supremum proves the classical estimate. For the quantum estimate add and subtract $\tau/p$, use positivity to obtain $\|\tau\|_1=q$, and use $|p-q|\le\|\sigma-\tau\|_1$: 

$$

 \|\sigma/p-\tau/q\|_1
 \le d/p+|p-q|/p\le2d/p.

$$

 The upper bounds one and two are the maximal respective distances. Finally $q\ge p-\epsilon$ or $q\ge p-d$ proves the positivity claims. 

□

 

A zero-probability event has no normalized conditional branch. Capping an error estimate at one does not create that branch. Arbitrarily rare events therefore have no uniform conditional guarantee. Equation [(30.11)](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:eq:jointwave) and its resource version, rather than a single sampled daughter, specify a complete return experiment. The reference is never accessed; all source maps tensor $I_R$. For a common subsequent unitary the full-state bound persists, but record separation or historical readability need not persist after an intentional echo. Those claims retain their separate holding and transfer hypotheses. 



<a id="paragraph-4"></a>

#### Preparation information is retained.

 In the autonomous theory the clock's actual position is part of the initial configuration. Exposing it, or any other microscopic coordinate, changes the conditioning in [(28.6)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:pathlaw). A physically acquired coordinate record must be an extra material coupling and retain its receiver. A factorized ready packet at a fixed time does not prove independence conditional on every hypothetical unrecorded previous passage time. The theorem uses complete initial equilibrium and a finite independent stock; it does not invoke conditional nodal extraction as a nonexistent global preparation theorem.
