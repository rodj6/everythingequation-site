# Autonomous Quantum Measurement Chains with Faithful Equilibrium Records

Jeremy Rodgers · Independent Researcher · 4 October 2026

[Manuscript DOI](https://doi.org/10.5281/zenodo.23131069) · [Original PDF](/publications/quantum-measurement/research/equilibrium-records.pdf)

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

# Abstract and publication identity

**Abstract.**

Under Bohmian guidance, complete initial quantum equilibrium and a finite input-independent ready stock, we give a semibounded autonomous realization of each fixed finite quantum measurement programme in an admitted nonrelativistic Schrödinger model. The complete wave includes the source, pointers, clock, coherent resource products, copied records, reset receivers and an inaccessible reference. Forced harmonic traps provide exact pointer motion; retained orthogonal keys permit stationary storage and explicit transfer before reset. A massive clock approximates the driven programme in weighted derivative norms. Those norms bound the absolute probability current through archive decision surfaces, giving a historical-record estimate distinct from the final quantum-output estimate. Each prescribed positive tolerance is achieved by finite resource choices for the fixed programme and horizon. Gaussian resources have finite moments, rather than hard spatial or energy cutoffs. We make the joint earlier-declaration and whole symbolic holding-path observable explicit, retain the full coherent null branch, and give reproducible finite examples. This article consolidates the author's existing massive-configuration preprint; it does not derive the initial Born law, uniquely select guidance, prove microscopic path total-variation stability, or establish laboratory realization of the admitted interactions. 



**Keywords:** quantum measurement; Bohmian mechanics; autonomous control; quantum equilibrium; physical records.

---

# Section 1: Introduction and scope

<a id="section-1"></a>

## 1 Introduction and scope

 <a id="sec:frontier"></a> The usual equilibrium analysis of quantum measurement relates a system–apparatus unitary to an outcome POVM. A complete finite apparatus model also has to specify how a pointer moves, what remains after a null result, how a record is copied before its working register is reset, and how an internal clock supplies the prescribed controls. The historical question is sharper than agreement of final pointer frequencies: does the final archive still report that apparatus's own earlier declaration throughout a promised holding interval?

We address these questions in one specified model. Its state is a full spinor wave and finitely many actual massive positions. The wave obeys a common Schrödinger Hamiltonian; positions obey the Bohmian guidance equation; the complete initial position distribution is the squared norm of the complete initial wave. Input-independent clock and apparatus preparations form a finite supplied stock. These are hypotheses, including the Born equilibrium hypothesis. The theorem is an implementation and error-control result under them.



<a id="section-1-1"></a>

### 1.1 Relation to established work and the earlier version

 Bohm's measurement analysis and the equilibrium programme of Dürr, Goldstein and Zanghì establish the background relation between configuration dynamics and quantum measurement statistics [[1](/quantum-measurement/research/equilibrium-records/bibliography#bib-BohmI), [2](/quantum-measurement/research/equilibrium-records/bibliography#bib-BohmII), [3](/quantum-measurement/research/equilibrium-records/bibliography#bib-DGZeq), [4](/quantum-measurement/research/equilibrium-records/bibliography#bib-DGZoperators)]. Beck and Lazarovici give a recent systematic account of the POVM theorem and its preparation and apparatus assumptions [[5](/quantum-measurement/research/equilibrium-records/bibliography#bib-BeckLazarovici)]. In particular, a state-dependent change of apparatus is not the same fixed experiment on an unknown input. None of the present claims makes equilibrium an output of deterministic dynamics from arbitrary initial laws.

Autonomous quantum control with a finite clock and quantified backreaction has substantial independent precedent, including the finite-dimensional quasi-ideal clock of Woods, Silva and Oppenheim [[6](/quantum-measurement/research/equilibrium-records/bibliography#bib-WoodsClock)]. The clock used here is instead a continuous massive coordinate with positive kinetic energy. Its comparison estimate is in pointer-weighted derivative norms and retains the clock itself. The reason for the stronger norm is the subsequent absolute-current estimate for a designated physical archive surface. No priority claim for autonomous control, Bohmian measurement analysis or energy-penalty protection is intended.

This is a revision and consolidation of *A Massive Configuration Completion of the Quantum Measurement Programme*, version 2, dated 15 September 2026 [[7](/quantum-measurement/research/equilibrium-records/bibliography#bib-PriorMassive)]. The corresponding construction also appears in Chapters 28–31 of the author's monograph [[8](/quantum-measurement/research/equilibrium-records/bibliography#bib-Monograph)]. The core proofs are reproduced here, with an explicit symbolic-history observable and its complete error estimates. The revision makes no claim that the inherited construction is newly discovered or independently peer reviewed. Its mathematical content can be assessed from the stated equations without adopting the broader terminology of that programme.



<a id="section-1-2"></a>

### 1.2 The result in outline

 For a finite-dimensional unknown input, any inaccessible reference, and each fixed finite admitted programme on $[0,T]$, Theorem [8.3](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#thm:closure) gives an exact autonomous model and separate bounds 

$$

 E_{\rm out}=\min\{1,\varepsilon_0+\epsilon_{\rm gate}
                  +\sum_j\sqrt{2\delta_j}\},\qquad
 E_{\rm hist}\le\min\{1,E_{\rm out}+E_{\rm arch}+E_{\rm transfer}\}.

$$

 Here $\varepsilon_0$ is the complete clock comparison, $\epsilon_{\rm gate}$ includes the specified gate/protection/feedback costs, $\delta_j$ are final display classification tails, $E_{\rm arch}$ is an absolute-current holding budget, and $E_{\rm transfer}$ pays for copying an actual record before reset. The first quantity bounds retained quantum-output trace distance, or half-diamond distance when uniform over the fixed input channel. The second bounds the stated classical histories. These are not bounds on total variation between raw configuration trajectories.

All resources are finite at a positive tolerance: the number of coordinates and material factors, their positive masses, pointer separations, interaction coefficients, protection gaps and mean initial energies. The position Hilbert spaces remain infinite dimensional, and the Gaussian wave packets have unbounded tails. The result is neither a hard energy-cutoff construction nor a uniform theorem over infinite programmes, growing inventories or arbitrarily long holding times.

Throughout, ${d_{\rm TV}}(P,Q)=\sup_A|P(A)-Q(A)|$ and quantum trace distance is $\frac12{\left\|{\rho-\sigma}\right\|}_1$; half-diamond distance uses the same factor. Every comparison identifies the same retained factors. Complete coherent vectors are retained when subsequent recombination is allowed; a classical–quantum record representation is only an output description on its declared readout cut.

---

# Section 2: The model and its statistical assumptions

<a id="section-2"></a>

## 2 The model and its statistical assumptions

 <a id="sec:constitution"></a> Use finitely many massive coordinates $q\in\mathbb R^n$, a finite internal space ${\mathcal H}_I$ containing source and apparatus, and an inaccessible reference $R$. The complete state is <a id="eq:state"></a>


$$

 (\Psi,Q),\qquad \Psi\in L^2(\mathbb R^n;{\mathcal H}_I\otimes{\mathcal H}_R),\quad
 {\left\|{\Psi}\right\|}=1,\quad Q\in\mathbb R^n.

$$

Equation (1).

 A quantum clock coordinate is appended in Section [7](/quantum-measurement/research/equilibrium-records/an-autonomous-massive-clock-and-archive-current-bounds#sec:clock). Coordinates of otherwise passive source particles can be included in confining ground states. Internal spin is part of $\Psi$; there is no extra actual spin assignment.



**Constitutive assumption 2.1 (Universal material inventory).**

<a id="ax:material"></a> Every source contact, recorder, controller, protection device and reset receiver belongs to the same spinor Schrödinger inventory. Its admitted Hamiltonians are <a id="eq:H"></a>


$$

 H(t)=-\sum_{k=1}^n\frac{\hbar^2}{2m_k}\partial_k^2+V(q,t),
 \qquad V=V^\dagger,

$$

Equation (2).

 with self-adjoint semibounded realizations specified below. Every operation is identity on $R$. There is no additional classical device that reads a nonlinear function of a source ray without participating in this wave dynamics. 

 This inventory statement restricts the admitted material interactions. Adding a contact changes $V$ and hence the wave controlling actual motion. A separate nonlinear ray-reading device is not part of the model. Semiboundedness and mathematical admissibility do not by themselves establish that every such matrix-valued potential is realizable by known laboratory matter.



**Constitutive assumption 2.2 (Kinetic-momentum motion).**

<a id="ax:motion"></a> Physical material positions have velocity given by the local real kinetic momentum per unit mass: <a id="eq:guidance"></a>


$$

 \dot Q_k(t)=v_k^\Psi(Q(t),t),\quad
 v_k^\Psi=\frac{j_k}{\rho},\quad
 \rho=\Psi^\dagger\Psi,\quad
 j_k=\frac{\hbar}{m_k}\operatorname{Im}\Psi^\dagger\partial_k\Psi.

$$

Equation (3).

 The formula is used only where $\rho>0$. There are no further random displacements or circulation terms. 

 This is the standard Bohmian law, with established provenance [[1](/quantum-measurement/research/equilibrium-records/bibliography#bib-BohmI), [2](/quantum-measurement/research/equilibrium-records/bibliography#bib-BohmII), [4](/quantum-measurement/research/equilibrium-records/bibliography#bib-DGZoperators)]. Its independent physical content is differentiable material motion governed by wave kinetic momentum. For a scalar wave $\Psi=Re^{iS/\hbar}$ it says $m_kv_k=\partial_kS$. Separating the real Schrödinger equation gives 

$$

 \partial_tS+\sum_k\frac{(\partial_kS)^2}{2m_k}+V
 -\sum_k\frac{\hbar^2}{2m_k}\frac{\partial_k^2R}{R}=0.

$$

 Its gradient determines acceleration along the flow. This is a mechanical postulate. Symmetry or continuity alone does not force it, as Section [10](/quantum-measurement/research/equilibrium-records/why-reliable-records-do-not-uniquely-select-guidance#sec:rivals) demonstrates.



**Constitutive assumption 2.3 (Initial complete equilibrium).**

<a id="ax:eq"></a> Conditional on each supplied classical preparation description $c$, the full initial configuration law is <a id="eq:equilibrium"></a>


$$

 {\mathbb P}(dQ_0\mid c)={\left\|{\Psi_0^c(Q_0)}\right\|}_{I,R}^2\,dQ_0.

$$

Equation (4).

 Fresh ready cells and the clock are supplied in specified product waves, independent of the unknown input. There is a finite stock. No subsequent reset is assumed to generate a fresh seed conditional on an arbitrarily exposed microscopic past. 

 For reference-uniform claims the initial preparation is a fixed linear embedding of an arbitrary normalized $\psi_{SR}$ into the apparatus, with fixed smooth spatial stock independent of $\psi_{SR}$. In particular it may be written $\chi_0(x)\Phi_{\rm ready}(q)\psi_{SR}$, with passive source orbitals included in $\Phi_{\rm ready}$. The finite input dimension and the fixed prepared spatial factors give a uniform finite $W_3$ bound. All operations act as identity on $R$; Schmidt decomposition reduces any pure input to reference rank no larger than the finite input dimension. Mixed inputs are covered by purification. No uniform claim for arbitrary unknown spatial wavefunctions with unbounded derivative norms is implied.

This is the only stochastic/ensemble input in the adopted dynamics. Initial $Q$ and the deterministic flow generate every later probability. It is not derived from source/readout incompleteness, from equilibration, or from a typicality slogan. The equilibrium and conditional-wave literature distinguishes these issues [[3](/quantum-measurement/research/equilibrium-records/bibliography#bib-DGZeq)]. For example a real stationary wave has $v=0$, so an initially nonequilibrium distribution is stationary too. Universal dynamical equilibration is false in this class without additional hypotheses.



<a id="section-2-1"></a>

### 2.1 Self-adjointness, domains and nodes

 The driven library uses scalar confining quadratics, affine coordinate terms with finite Hermitian coefficients, bounded smooth matrix potentials, and finitely many smooth time windows. On each fixed finite programme, all coefficients and their required derivatives are bounded. Completing the square bounds affine forces below. Finite internal gates are bounded. The resulting oscillator operator plus infinitesimally oscillator-bounded affine terms and bounded potentials is self-adjoint on the oscillator domain. Smooth vectors are preserved on finite intervals. One can verify the last assertion by commuting $q^\alpha\partial^\beta$ through the equation: scalar quadratics keep total order fixed, affine terms lower derivative order, and bounded smooth terms contribute only lower derivatives. Finite sums of Gaussian packets used below are such vectors.



**Lemma 2.4 (Conservative motion through the nodal problem).**

<a id="lem:exist"></a> Suppose the wave is $C^2$ on each programme interval and <a id="eq:regularity"></a>


$$

 \int_0^T\left({\left\|{\partial_t\Psi_t}\right\|}_2+
       \sum_k{\left\|{\partial_k\Psi_t}\right\|}_2^2\right)dt<\infty.

$$

Equation (5).

 For the smooth nonsingular inventory above, the guidance flow exists throughout $[0,T]$ for $\rho_0$-almost every initial position and pushes $\rho_0$ to $\rho_t$. It neither loses mass at a node nor reaches infinity in finite time with positive equilibrium probability. 

 

**Proof.**

Direct differentiation using the Hermitian potential gives $\partial_t\rho+\sum_k\partial_kj_k=0$. On compact subsets of $\rho>0$, the locally smooth velocity has a unique flow and the continuity equation gives partial equivariance up to its exit. Under this killed flow, the position distribution is dominated by $\rho_t$.

Expected distance travelled before exit is bounded by 

$$

 \int_0^T\!\int |j|\,dq\,dt
 \le C\int_0^T\sum_k{\left\|{\partial_k\Psi_t}\right\|}_2dt<\infty.

$$

 Escape to infinity would require infinite distance. To control nodes, along a surviving path differentiate $\log\rho$. Its expected total variation is bounded by 

$$
\begin{aligned}\int_0^T\!\int\left(|\partial_t\rho|
       +\frac{|j|\,|\nabla\rho|}{\rho}\right)dq\,dt
 &\le\int_0^T\left(2{\left\|{\partial_t\Psi_t}\right\|}_2
                  +C{\left\|{\nabla\Psi_t}\right\|}_2^2\right)dt<\infty.
\end{aligned}
$$

 Here $|\nabla\rho|\le2|\Psi||\nabla\Psi|$ and $|j|\le C|\Psi||\nabla\Psi|$. Reaching a node while remaining in a bounded region would send $\log\rho$ to $-\infty$, which has probability zero by the preceding bound. Initial nodes have zero probability. Exhaust the local domains; there is no remaining loss of mass. Domination by the normalized density then becomes equality. Finitely many switches concatenate without a new random draw. This is the current-integrability argument underlying the general existence theorem of Teufel and Tumulka [[9](/quantum-measurement/research/equilibrium-records/bibliography#bib-TT)]; no theorem for arbitrary singular potentials is imported. 

□

 The autonomous Hamiltonian below has an additional scalar free kinetic term and smooth bounded functions of the clock multiplying affine pointer operators. The same commutator estimates, now also including clock weights and derivatives, give smooth finite-moment evolution and [(5)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:regularity). Its initial clock packet has finite momentum moments at each finite mass. Thus the lemma covers the *complete* state, not just a reduced pointer.



<a id="section-2-2"></a>

### 2.2 The law on complete histories

 Let $\Phi_{t,0}^\Psi$ be the almost-sure flow. The complete path measure is explicitly <a id="eq:pathlaw"></a>


$$

 {\mathbb P}(A)=\int 1_{\{(\Phi_{t,0}^\Psi(q))_{0\le t\le T}\in A\}}
                   \rho_0(q)\,dq .

$$

Equation (6).

 Continuous path space is standard Borel, so regular conditional laws for a finite or countably generated record history exist. For any past event $B$ of positive probability, the conditional future is the normalized restriction of the initial integral to its preimage under the flow. Given the complete initial state the future is deterministic. Given only coarse past records it is usually history dependent. Predictable crossing times need not have a compensator absolutely continuous in $dt$. No Bell intensity, Markov hazard or exponential threshold is asserted in this filtration.

Where the *pointwise* current vanishes for an interval, positions are fixed. Current reversal reverses the corresponding instantaneous velocity, with its accumulated initial-position information retained. Nodes are handled by Lemma [2.4](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#lem:exist); conditioning on a zero-probability event is not assigned a normalized daughter.

---

# Section 3: An exact massive detector in physical time

<a id="section-3"></a>

## 3 An exact massive detector in physical time

 <a id="sec:detector"></a> Let $A={|{1}\rangle}{\langle{1}|}$ act on a retained internal control label. First a finite internal unitary correlates this label with projectors $P_0,P_1$ of the unknown source, giving $\sum_a P_a\psi{|{a}\rangle}$. No actual internal jump is introduced by this operation. Prepare one oscillator in its ground packet 

$$

 \phi_0(y)=(2\pi\sigma^2)^{-1/4}e^{-y^2/(4\sigma^2)},\qquad
 \sigma^2=\frac{\hbar}{2M\omega}.

$$

 Choose a smooth centre trajectory $b(0)=0$, $b(T_w)=L$, with $\dot b=\ddot b=0$ at both ends, and set <a id="eq:force"></a>


$$

 c(t)=b(t)+\frac{\ddot b(t)}{\omega^2},\qquad
 H_w(t)=\frac{p_y^2}{2M}+\frac{M\omega^2}{2}\bigl(y-c(t)A\bigr)^2.

$$

Equation (7).

 This operator is nonnegative. No first-order unbounded-below translation is used. A convenient explicit choice is <a id="eq:quintic"></a>


$$

 b(t)=L(10s^3-15s^4+6s^5),\quad s=t/T_w,\quad
 \dot b=\frac{30L}{T_w}s^2(1-s)^2\ge0.

$$

Equation (8).

 Smooth higher-order endpoint interpolation can be used when all clock-window derivatives are required; the $C^2$ quintic suffices for the exact writer and the finite-order estimates here. The trap may overshoot the packet centre during acceleration; its finite displacement and force are resources.



**Proposition 3.1 (Exact wave and selected actual motion).**

<a id="prop:writer"></a> For this primitive, $\psi$ is an internal/reference vector, with no unresolved older spatial coordinates. Writing $p_a={\left\|{P_a\psi}\right\|}^2$, the wave is <a id="eq:packet"></a>


$$
\begin{aligned}
 \Psi_t(y)&=P_0\psi{|{0}\rangle}\,e^{-i\omega t/2}\phi_0(y)
 +P_1\psi{|{1}\rangle}\,e^{i\theta(t)}e^{iM\dot b(t)(y-b(t))/\hbar}\phi_0(y-b(t)),\\
 \dot\theta&=\frac{M\dot b^2}{2\hbar}-\frac{M\omega^2(b-c)^2}{2\hbar}-\frac\omega2.
\end{aligned}
$$

Equation (9).

 For $g_\sigma=|\phi_0|^2$, <a id="eq:mixture"></a>


$$

 \rho_t(y)=p_0g_\sigma(y)+p_1g_\sigma(y-b(t)),\qquad
 j_t(y)=p_1\dot b(t)g_\sigma(y-b(t)).

$$

Equation (10).

 Let $F_t(y)=p_0{\mathsf F}(y/\sigma)+p_1{\mathsf F}((y-b(t))/\sigma)$, where ${\mathsf F}$ is the standard normal CDF. The complete actual pointer path is <a id="eq:quantile"></a>


$$

 Y_t=F_t^{-1}(U),\qquad U={\mathsf F}(Y_0/\sigma)\sim\operatorname{Unif}(0,1).

$$

Equation (11).

 In particular $0\le\dot Y_t\le\dot b(t)$ during the monotone write. 

 

**Proof.**

Substitute the Gaussian ansatz into the Schrödinger equation. The coefficient of $y-b$ is $M\ddot b=-M\omega^2(b-c)$ and its scalar coefficient is precisely the displayed $\dot\theta$; the Gaussian width stays at its ground value. Internal labels are orthogonal, so there are no cross terms in $\rho$ or $j$. Now $\partial_tF_t=-j_t$ and $\partial_yF_t=\rho_t>0$. Differentiating $F_t(Y_t)=U$ gives [(3)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:guidance). The initial inverse transform supplies the uniform rank, without a second randomness postulate. 

□





<a id="section-3-1"></a>

### 3.1 Actual timing, false-ready tails and null continuation

 Put a threshold $h=L/2$. Let $\tau=0$ for the initially right-hand tail $Y_0\ge h$, and otherwise let $\tau$ be its first subsequent threshold crossing, with $\tau=\infty$ if none occurs before $T_w$. This convention retains the finite false-ready tail 

$$

 \delta={\overline{\mathsf F}}\left(\frac{L}{2\sigma}\right),\qquad {\mathbb P}(\tau=0)=\delta.

$$

 It is not an assertion that a preliminary check of readiness is noninvasive. Monotonicity in Proposition [3.1](/quantum-measurement/research/equilibrium-records/an-exact-massive-detector-in-physical-time#prop:writer) gives the complete law <a id="eq:timing"></a>


$$
\begin{aligned}
 {\mathbb P}(\tau>t)&=F_t(h),\qquad
 {\mathbb P}(\tau\in dt)=p_1\dot b(t)g_\sigma(h-b(t))\,dt\quad(0<t<T_w),\\
 {\mathbb P}(\tau=\infty)&=p_0(1-\delta)+p_1\delta.
\end{aligned}
$$

Equation (12).

 The positive-time density integrates to $p_1(1-2\delta)$; together with the initial atom and final null it normalizes to one. Conditional on no pre-trigger event the survival is $F_t(h)/F_0(h)$; conditional on no crossing by $t$, its instantaneous hazard, where defined, is <a id="eq:hazard"></a>


$$

 \frac{p_1\dot b(t)g_\sigma(h-b(t))}{F_t(h)}.

$$

Equation (13).

 This is a derived physical-time formula, not a memoryless source-sector clock. Continuing a return pulse uses the same rank $U$, not a newly sampled waiting time. A dark hold with $\dot b=0$ has zero pointer current.

If an input is entangled with older spatial memories, the full velocity is evaluated before integrating those coordinates out. When they are held fixed, the quantile argument applies separately to their conditional spinor fibres, with the corresponding conditional $p_a$. The integrated $p_a$ still determines marginal density but generally does not determine an individual joint trajectory. For moving old coordinates, use the complete guidance equation rather than this one-dimensional primitive formula.

The conditional position law after a null at $t$ is 

$$

 {\mathbb P}(Y_t\in dy\mid\tau>t)=\frac{1_{y<h}\rho_t(y)}{F_t(h)}\,dy.

$$

 The global wave remains [(9)](/quantum-measurement/research/equilibrium-records/an-exact-massive-detector-in-physical-time#eq:packet), including both packets. For an arbitrary past record event $B$, equation [(6)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:pathlaw) rather than a present-sector projection supplies the conditional continuation. A timestamp reader would be an additional interaction and would change this wave; equation [(12)](/quantum-measurement/research/equilibrium-records/an-exact-massive-detector-in-physical-time#eq:timing) describes this specified pointer without an extra timestamp apparatus. A finite timestamp claim requires those contacts and their complete dynamics; the first-crossing formula alone does not construct that reader. Unmeasured arrivals and recorded detection times need not coincide [[10](/quantum-measurement/research/equilibrium-records/bibliography#bib-Arrival)].

 

![Autonomous equilibrium records: apparatus and record construction](/publications/quantum-measurement/research/figures/equilibrium-records.png)

 

Figure 1. The massive writer with $L/\sigma=8$, $p_1=0.65$, $T_w=1$ and $\omega=\pi$. A controlled trap drives a Gaussian packet; mixture-quantile paths at ranks $0.04, 0.20, 0.40, 0.60, 0.75, 0.85, 0.96$ produce the threshold-time distribution. The dashed line in the middle panel is $h/\sigma=4$. These are deterministic evaluations of the displayed equations, not a trajectory-stability estimate for the complete autonomous apparatus.

 <a id="fig:mechanism"></a>



<a id="section-3-2"></a>

### 3.2 Energy and force resources

 In branch 1, <a id="eq:energy"></a>


$$

 \langle H_w(t)\rangle=\frac{\hbar\omega}{2}
       +\frac M2\dot b^2+\frac{M\omega^2}{2}(b-c)^2.

$$

Equation (14).

 It is finite for the explicit trajectory. The work in the driven description is $\int\langle\partial_tH_w\rangle dt$. It vanishes between the initial ground state and the final ground state of the shifted holding trap, but nonzero energy is borrowed and returned during the pulse. The autonomous clock below carries this exchange. Zero net work is not zero transient work or an unlimited source of reset readiness.

---

# Section 4: A finite coherent source and resource module

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

---

# Section 5: Physical records that remain true about their past

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

---

# Section 6: Protected coherent transport in the same inventory

<a id="section-6"></a>

## 6 Protected coherent transport in the same inventory

 <a id="sec:protection"></a> Actual archive storage and protection of unknown logical amplitudes are different tasks. The monograph's bounded internal gap construction can be implemented here without a stochastic interface. To display its nonempty domain, encode two qubits into four by 

$$

 C{|{a,b}\rangle}=\frac{{|{0,a,b,a\oplus b}\rangle}+{|{1,1\oplus a,1\oplus b,1\oplus a\oplus b}\rangle}}{\sqrt2}.

$$

 Let $S_X=X_1X_2X_3X_4$, $S_Z=Z_1Z_2Z_3Z_4$, $P=(I+S_X)(I+S_Z)/4$ and $Q=I-P$, with identities on the retained internal nuisance systems and inaccessible reference understood. Set 

$$

 H_{\rm pen}=\tfrac\Delta2(I-S_X)+\tfrac\Delta2(I-S_Z),\quad
 H_\Delta=H_{\rm pen}+H_0+V.

$$

 The penalty satisfies $H_{\rm pen}P=0$ and $H_{\rm pen}\ge\Delta Q$. Assume the bounded self-adjoint operators are stationary on the protected exposure, with $[H_0,P]=0$, ${\left\|{H_0}\right\|}\le b$, and 

$$

 V=\sum_{i=1}^4\sum_{\alpha=x,y,z}\sigma_i^\alpha\otimes B_{i\alpha},
 \quad B_{i\alpha}=B_{i\alpha}^\dagger,\quad{\left\|{V}\right\|}\le v.

$$

 The $B$'s act on retained finite internal nuisance systems. During the protected exposure, the spatial holding Hamiltonian is a commuting spectator; it is factored out. We do not assert a bounded-norm theorem for arbitrary unbounded coordinate couplings. One-site Paulis anticommute with a stabilizer, so $PVP=0$. All encoding and decoding gates are finite internal unitaries.



**Proposition 6.1 (Retained-bank gap bound).**

<a id="prop:gap"></a> For $\Delta-2b-v=\gamma>0$, <a id="eq:gap"></a>


$$

 {\left\|{\bigl(e^{-itH_\Delta/\hbar}-e^{-itH_0/\hbar}\bigr)P}\right\|}
 \le\min\left\{2,\frac{2v+tv^2/\hbar}{\gamma}\right\}.

$$

Equation (26).

 The same bound holds with every inaccessible reference and retained internal nuisance system included. 

 

**Proof.**

Decompose the complete internal bank as $\operatorname{ran}P\oplus\operatorname{ran}Q$ and define its compressed blocks 

$$

 A=PH_0P,\qquad B=QVP,\qquad D=QH_\Delta Q,

$$

 where $A$ and $D$ act on their respective subspaces and $B:\operatorname{ran}P\to\operatorname{ran}Q$. Then 

$$

 H_\Delta=H_d+W,\qquad
 H_d=\begin{pmatrix}A&0\\0&D\end{pmatrix},\qquad
 W=\begin{pmatrix}0&B^\dagger\\B&0\end{pmatrix}.

$$

 The stated bounds imply 

$$

 D\ge(\Delta-b-v)Q=(b+\gamma)Q,
 \qquad A\le bP,\qquad {\left\|{B}\right\|}\le v.

$$

 Thus the norm-convergent integral 

$$

 X=\int_0^\infty e^{-rD}Be^{rA}{\,\mathrm d} r

$$

 satisfies $DX-XA=B$ and ${\left\|{X}\right\|}\le v/\gamma$. Indeed the integrand has norm at most $v e^{-r\gamma}$; differentiating it and integrating its vanishing boundary term gives the identity. Here $r$ has inverse-energy units; it is not physical time. The skew-adjoint block operator 

$$

 S=\begin{pmatrix}0&-X^\dagger\\X&0\end{pmatrix}
 \quad\text{satisfies}\quad
 [S,H_d]=-W,\qquad {\left\|{S}\right\|}={\left\|{X}\right\|}.

$$

 Put $f(u)=e^{uS}We^{-uS}$. Differentiation and integration yield 

$$
\begin{aligned}e^SH_\Delta e^{-S}
 &=H_d+f(1)-\int_0^1f(u){\,\mathrm d} u=H_d+R,\\
 R&=\int_0^1u e^{uS}[S,W]e^{-uS}{\,\mathrm d} u.
\end{aligned}
$$

 These conjugations are unitary, so 

$$

 {\left\|{R}\right\|}\le\tfrac12{\left\|{[S,W]}\right\|}\le v^2/\gamma,
 \qquad {\left\|{e^{\pm S}-I}\right\|}\le{\left\|{S}\right\|}\le v/\gamma.

$$

 Two changes of frame and Duhamel in physical time therefore give 

$$

 {\left\|{e^{-S}e^{-it(H_d+R)/\hbar}e^S-e^{-itH_d/\hbar}}\right\|}
 \le\frac{2v}{\gamma}+\frac{tv^2}{\hbar\gamma}.

$$

 On $\operatorname{ran}P$, the last unperturbed propagator agrees with $e^{-itH_0/\hbar}$. The trivial norm bound two completes [(26)](/quantum-measurement/research/equilibrium-records/protected-coherent-transport-in-the-same-inventory#eq:gap). Tensoring an identity preserves each operator norm, so the same estimate retains the inaccessible reference and nuisance bank. 

□

 This is the monograph's coherent protection estimate, with its assumptions preserved; Hamiltonian error suppression has independent primary precedent [[11](/quantum-measurement/research/equilibrium-records/bibliography#bib-MarvianLidar)]. Its role here is compatibility with actual material writes and records, not selection of a noise generator.

---

# Section 7: An autonomous massive clock and archive current bounds

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

---

# Section 8: Complete instruments, references and finite histories

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

---

# Section 9: A complete finite example and reproducible calculations

<a id="section-9"></a>

## 9 A complete finite example and reproducible calculations

 <a id="sec:example"></a> Use $P_a$ as $Z$ projectors and set 

$$

 \theta=\pi/3,\qquad\varphi=\pi/4,\qquad\eta=2/3.

$$

 The receptor weights are exactly <a id="eq:exampleweights"></a>


$$

 (P_r,P_p,P_c,P_l)=(1/4,3/8,1/4,1/8).

$$

Equation (41).

 Take one unknown source with an inaccessible two-dimensional reference: <a id="eq:inputexample"></a>


$$

 \psi=\sqrt{2/3}{|{0}\rangle}{|{0}\rangle}_R+
                       \sqrt{1/3}{|{1}\rangle}{|{+}\rangle}_R,\qquad
 {|{+}\rangle}_R=({|{0}\rangle}_R+{|{1}\rangle}_R)/\sqrt2.

$$

Equation (42).

 The reduced source coherence is $\rho_{01}=1/3$. Neither independent copies nor reference control are used.



<a id="section-9-1"></a>

### 9.1 Null followed by an incompatible measurement

 The ideal orthogonal-record null map is $\mathcal N(\rho)=\rho/4+\mathcal D_Z(\rho)/2$, with trace $3/4$; its retained coherent null is the vector [(18)](/quantum-measurement/research/equilibrium-records/a-finite-coherent-source-and-resource-module#eq:nullvector). A later $X$ probe in this ideal comparator gives <a id="eq:nullnumbers"></a>


$$

 {\mathbb P}(N,X+)=\frac{11}{24},\qquad
 {\mathbb P}(X+\mid N)=\frac{11}{18},\qquad
 \sigma_R^{N,+}=\frac1{48}
               \begin{pmatrix}19&5\\5&3\end{pmatrix}.

$$

Equation (43).

 To verify, write ${\langle{+_x}|}\psi=\sqrt{1/3}{|{0}\rangle}_R+\sqrt{1/6}{|{+}\rangle}_R$ and apply [(19)](/quantum-measurement/research/equilibrium-records/a-finite-coherent-source-and-resource-module#eq:nullmap) term by term, or expand [(18)](/quantum-measurement/research/equilibrium-records/a-finite-coherent-source-and-resource-module#eq:nullvector) and trace only the named $D$ factor. The trace of the displayed matrix is $11/24$; its normalized reference state is the matrix with entries $19,5,5,3$ divided by $22$. For $X-$ the unnormalized reference state is 

$$

 \sigma_R^{N,-}=\frac1{48}\begin{pmatrix}11&1\\1&3\end{pmatrix},
 \quad{\mathbb P}(N,X-)=7/24.

$$

 Their sum is $(3/4)\rho_R$, an explicit reference consistency check. A frozen original input would instead give ${\mathbb P}(X+\mid N)=5/6$; a fully $Z$-dephased daughter would give $1/2$. Both fail this finite experiment.



<a id="section-9-2"></a>

### 9.2 Captured copy, reset, spatial feedback and a second record

 Copy the captured label, retain its spatial archive, reset $D$ by [(23)](/quantum-measurement/research/equilibrium-records/physical-records-that-remain-true-about-their-past#eq:covariantreset), keeping $D'$, and use 

$$

 V_0=I,\qquad V_1=e^{-i\pi\sigma_y/6}.

$$

 Apply an $X$ write to a fresh pointer. The ideal branch coefficients, with all resource factors attached, are 

$$

 \tfrac12(R_bV_aP_a\otimes I_R)\psi.

$$

 Their probabilities are 

| Retained first record | Second $+$ | Second $-$ |
| --- | --- | --- |
| $a=0$ | $1/12$ | $1/12$ |
| $a=1$ | $(2-\sqrt3)/48$ | $(2+\sqrt3)/48$ |

  They sum to capture probability $1/4$. Reference daughters are ${|{0}\rangle}_R$ and ${|{+}\rangle}_R$, respectively. Literal spatial feedback uses the smooth $g(y)B$ contact, with $B=(\pi\hbar/(6t_f))\sigma_y$, and the bound [(25)](/quantum-measurement/research/equilibrium-records/physical-records-that-remain-true-about-their-past#eq:feedbackbound). The copied archive remains held while the working pointer can recoil. Thus the exact table is the ideal target with explicit finite classifier, feedback and clock errors, not an assertion that finite Gaussian records are orthogonal.



<a id="section-9-3"></a>

### 9.3 A complete reversal remains a different experiment

 In the driven bank, if every response, source gate, copy and spatial write is coherently undone with all receiving systems, that full bank wave returns to its input, up to a known common phase. Resetting only $D$ while a copy or $D'$ survives does not achieve that return. A later incompatible probe distinguishes the two retained states. No global projection has been inserted at a declaration. In the finite autonomous realization the controller also remains in the complete state: its recoil and entanglement are bounded by the clock comparison, not claimed to be exactly undone by these apparatus inverse pulses.

An inverse need not negate a massive kinetic energy. For the piecewise constant half-period alternative to [(8)](/quantum-measurement/research/equilibrium-records/an-exact-massive-detector-in-physical-time#eq:quintic), a trap centred at $aL/2$ sends a ground packet centred at zero to one centred at $aL$ in time $\pi/\omega$. Each conditional oscillator has common equally spaced spectrum, so evolution for $2\pi/\omega$ is $-I$. Evolving for a complementary positive duration realizes the inverse, up to a common phase. Finite internal gate inverses reverse a bounded matrix term. Smooth forced displacements can likewise be undone on the specified coherent packets by a reversed centre trajectory and known phase correction. A claim of inversion on an arbitrary oscillator state would require its full propagator rather than this restricted packet identity.



<a id="section-9-4"></a>

### 9.4 Finite numerical values

 The finite example is determined by the displayed resource rotations, reference matrices and classifier integrals. The twelve one-site Pauli detection identities follow from anticommutation with the stabilizers; the moving-Gaussian residual and transported-trap identity were proved above. No supplementary computation is needed for these proof steps.

For the quintic writer with $\hbar=\sigma=T_w=1$, $\omega=\pi$, $M=1/(2\pi)$, $L=8$ and $p_1=0.65$, the probabilities are 

| Event | Probability |
| --- | --- |
| Initially beyond threshold | $0.0000316712418$ |
| First crossing at positive time | $0.649958827386$ |
| No crossing by the write endpoint | $0.350009501373$ |

  The exact normalization is $\delta+p_1(1-2\delta)+p_0(1-\delta)+p_1\delta=1$. The table gives rounded evaluations of these exact formulas. Figure [1](/quantum-measurement/research/equilibrium-records/an-exact-massive-detector-in-physical-time#fig:mechanism) evaluates the same equations; its plotting data are embedded in the LaTeX source. No numerical claim about continuum trajectory stability is inferred from it.

---

# Section 10: Why reliable records do not uniquely select guidance

<a id="section-10"></a>

## 10 Why reliable records do not uniquely select guidance

 <a id="sec:rivals"></a> The following example retains the equilibrium density and even its local net probability current while changing the microscopic path law. It identifies the logical role of the guidance assumption. It is not an alternative implementation used in the main theorem.



<a id="section-10-1"></a>

### 10.1 Same local net current, mutually singular paths

 For a smooth positive density of the same complete wave, define an equivariant diffusion by <a id="eq:diffusion"></a>


$$

 dQ_t=\left(\frac j\rho+D\nabla\log\rho\right)(Q_t,t)dt
                                   +\sqrt{2D}\,dW_t,
 \qquad D>0.

$$

Equation (44).

 Its Brownian innovations are an explicit additional stochastic premise. The Fokker–Planck current is $\rho b-D\nabla\rho=j$, so it matches even the local current, not just its divergence. We only assert its global existence where checked below; this is an equivariant diffusion rival, not a claim that every axiom of Nelson's stochastic mechanics has been derived.

For a stationary harmonic ground-state pointer centred at zero, the adopted theory has $\dot Q=0$. The rival is the globally well-posed Ornstein–Uhlenbeck process 

$$

 dQ=-D Q\,dt/\sigma^2+\sqrt{2D}\,dW.

$$

 It has the identical invariant Gaussian density but moves at positive times. More strongly, on any $T>0$ its path law and the adopted guidance path law have TV distance one: Brownian diffusion paths have quadratic variation $2DT$, whereas the absolutely continuous guidance paths have zero. These are disjoint measurable path events. The comparison does not require an experimentally admitted passive quadratic-variation meter.



**Proposition 10.1 (Reliable macroscopic records do not remove the rival).**

<a id="prop:rivalarchive"></a> Use the same semibounded Hamiltonian 

$$

 H=\frac{p^2}{2M}+\frac{M\omega^2}{2}(x-a\sigma_z)^2

$$

 and the equal superposition of its two spin-labelled ground packets. Its stationary density is 

$$

 \rho(x)=\tfrac12g_\sigma(x-a)+\tfrac12g_\sigma(x+a),\qquad j=0.

$$

 The adopted configuration is fixed. The diffusion [(44)](/quantum-measurement/research/equilibrium-records/why-reliable-records-do-not-uniquely-select-guidance#eq:diffusion) has smooth globally Lipschitz drift 

$$

 b_D(x)=\frac D{\sigma^2}\left[-x+a\tanh\left(\frac{ax}{\sigma^2}\right)\right]

$$

 and invariant law $\rho$. For $a\ge2\sigma$, the probability it changes the sign record during $[0,T]$ is no greater than <a id="eq:rivalbound"></a>


$$

 \min\left\{1,\frac{a+4DT/a}{\sqrt{2\pi}\sigma}
                         e^{-a^2/(8\sigma^2)}\right\}.

$$

Equation (45).

 

 

**Proof.**

Set $b=a/2$ and $f(x)=(1-|x|/b)_+$. On $(0,b)$, $\rho'\ge0$: the sign is that of $a\tanh(ax/\sigma^2)-x$, a concave function vanishing at zero and positive at $b$ for $a\ge2\sigma$. Thus $f'b_D\le0$ on both sides of the central interval. Stop at the first hit $\tau$ of zero. The Itô–Tanaka formula gives only nonpositive interior drift and a nonpositive local-time contribution at zero; its positive contributions are $(L_{T\wedge\tau}^{-b}+L_{T\wedge\tau}^{b})/(2b)$. Since $f(Q_{T\wedge\tau})\ge1_{\{\tau\le T\}}$ and stationarity gives ${\mathbb E} L_T^x=2DT\rho(x)$, 

$$

 {\mathbb P}(\tau\le T)\le{\mathbb E} f(Q_0)+\frac{DT}{b}[\rho(-b)+\rho(b)]
 \le(2b+2DT/b)\rho(b).

$$

 Finally $\rho(b)\le e^{-a^2/(8\sigma^2)}/(\sqrt{2\pi}\sigma)$. Sign change requires a hit of zero, so the same bound applies. Existence and invariance follow directly from the displayed Lipschitz drift and the stationary Fokker–Planck equation. 

□

 Thus arbitrarily reliable finite-horizon records can coexist with mutually singular microscopic paths. The velocity postulate selects the adopted law *within the new theory*; record success does not independently force that postulate. Deterministic divergence-free changes provide further rivals: in an isotropic real two-dimensional Gaussian, $v_\Omega=\Omega(-y,x)$ preserves the same density while changing a sign record with probability $\Omega T/\pi$ for $0\le\Omega T\le\pi$. This particular rotor is a counterexample to inference from continuity, not a proposed fully symmetry-constrained replacement. More general quantum-equivalent deterministic alternatives are established in primary work [[12](/quantum-measurement/research/equilibrium-records/bibliography#bib-Deotto)].

---

# Section 11: Scope and remaining physical questions

<a id="section-11"></a>

## 11 Scope and remaining physical questions

 <a id="sec:integration"></a> The conditional finite-programme result combines explicit coherent resource gates, a massive writer, transported-trap reset, retained receivers and a common autonomous controller. Its archival conclusion follows from the complete current and transfer estimates. The theorem does not need a freely sampled history or a collapse of the full wave at each declaration.

The assumption of initial equilibrium remains substantive. A real stationary wave gives zero Bohmian velocity, and therefore preserves any initial position law: dynamics in this class cannot establish universal relaxation to equilibrium. The independent ready stock also remains supplied. A local reset transfers correlations to retained receivers; it does not manufacture conditional independence from an arbitrarily exposed microscopic past.

The interaction catalogue is deliberately mathematical. Positive kinetic energy, smooth bounded coefficients and confinement give a well-defined semibounded model. They do not prove relativistic locality, construct the catalogue from established microscopic interactions, or price all fabrication, preparation and calibration requirements. Those are physical-realization questions beyond this theorem. The protection result covers bounded internal nuisance operators on its commuting spatial-spectator domain; arbitrary new read interactions and unbounded coordinate disturbances require separate analysis.

The resource limit fixes the finite programme and horizon first. Increasing mass, separation and gap yields arbitrarily small declared errors, with growing costs. It does not yield an unlimited memory or perfect clock at finite resources. Recombining every retained branch is a different experiment and can intentionally erase record separation. A first-crossing formula for the specified pointer likewise does not construct a timestamp reader; the latter needs its own interaction and error analysis.

The main proofs are inherited from the cited version 2 manuscript and are given in full in the present scope. Targeted algebraic and numerical checks have been repeated, but neither those checks nor AI-assisted internal review constitute independent specialist verification. Independent review of the operator domains, derivative estimates and whole-history coupling remains valuable before journal submission. The present revision does not claim that the broader measurement or Born-probability programme has been resolved.

---

# Appendix A: A compact proof of complete output and conditioning bounds

<a id="section-A"></a>

## A A compact proof of complete output and conditioning bounds

 <a id="app:conditioning"></a> For normalized $u,v$, the pure-state trace distance satisfies 

$$

 D({|{u}\rangle}{\langle{u}|},{|{v}\rangle}{\langle{v}|})
 =\sqrt{1-|\langle u,v\rangle|^2}\le{\left\|{u-v}\right\|}.

$$

 Any common quantum channel, including a final position classification and an identity on a retained reference, contracts trace distance. These comparisons use the same complete retained output space. Restricting to a common event gives positive unnormalized outputs; normalization requires that the event have positive probability in both compared models.



**Lemma A.1 (Conditioning on a common retained event).**

 <a id="lem:conditional-bound"></a> Let $P,Q$ be two probability laws on the same retained output or history space, with ${d_{\rm TV}}(P,Q)\le\epsilon$. For a common event $E$, put $p=P(E)$ and $q=Q(E)$. If *both* $p>0$ and $q>0$, then 

$$

 {d_{\rm TV}}\bigl(P(\,\cdot\mid E),Q(\,\cdot\mid E)\bigr)
 \le\min\{1,2\epsilon/p\}.

$$

 The sufficient condition $\epsilon<p$ ensures $q>0$. For positive unnormalized quantum outputs $\sigma,\tau$ on the same retained space, if ${\left\|{\sigma-\tau}\right\|}_1\le d$, $p={\operatorname{tr}}\sigma>0$ and $q={\operatorname{tr}}\tau>0$, then 

$$

 {\left\|{\sigma/p-\tau/q}\right\|}_1\le\min\{2,2d/p\}.

$$

 Here $d<p$ is sufficient for positivity of the second trace. 

 

**Proof.**

For a measurable set $A$, add and subtract $Q(A\cap E)/p$. The first difference is at most $\epsilon/p$, and the second is at most $|p-q|/p\le\epsilon/p$, since $Q(A\cap E)\le q$. Taking the supremum proves the classical estimate. For the quantum estimate add and subtract $\tau/p$, use positivity to obtain ${\left\|{\tau}\right\|}_1=q$, and use $|p-q|\le{\left\|{\sigma-\tau}\right\|}_1$: 

$$

 {\left\|{\sigma/p-\tau/q}\right\|}_1
 \le d/p+|p-q|/p\le2d/p.

$$

 The upper bounds one and two are the maximal respective distances. Finally $q\ge p-\epsilon$ or $q\ge p-d$ proves the positivity claims. 

□



The lemma applies to complete path laws only when a joint path-law bound on that common space has actually been established. In Theorem [8.3](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#thm:closure), $E_{\rm out}$ controls complete retained quantum outputs and their physical readout probabilities, while $E_{\rm hist}$ controls the stated classical declaration-and-display histories. Neither bound asserts closeness of raw guidance trajectories or TV closeness of the ontic pair $(\Psi,Q)$. A discarded reservoir, a missing key, or an abstract sampled path cannot be identified with an existing physical record by conditioning. A zero-probability event has no normalized conditional branch, and arbitrarily rare events have no uniform conditional guarantee.

---

# Declarations

<a id="paragraph-4"></a>

## Declarations

 

<a id="paragraph-5"></a>

#### Funding.

 This work was conducted independently without external research funding.



<a id="paragraph-6"></a>

#### AI assistance and responsibility.

 The author developed this research programme, including the mathematical arguments. AI tools were used as an aid in that work and in preparing this publication version, including source organization, literature checking, mathematical checks, adversarial review, and editorial revision. Those reviews are not independent peer review, specialist certification, or formal proof verification. The author retains responsibility for the manuscript.



<a id="paragraph-7"></a>

#### Independent review and collaboration.

 Independent mathematical review and computational replication are invited. Collaboration on physical implementation and empirical testing is also welcome where specialist expertise, equipment, or institutional resources are required. No institutional affiliation or collaboration is claimed.

---

# Bibliography

## Bibliography

<a id="bib-BohmI"></a>

[1] David Bohm.  A suggested interpretation of the quantum theory in terms of “hidden” variables. I.   Physical Review, 85:166–179, 1952.  [10.1103/PhysRev.85.166](https://doi.org/10.1103/PhysRev.85.166).

<a id="bib-BohmII"></a>

[2] David Bohm.  A suggested interpretation of the quantum theory in terms of “hidden” variables. II.   Physical Review, 85:180–193, 1952.  [10.1103/PhysRev.85.180](https://doi.org/10.1103/PhysRev.85.180).

<a id="bib-DGZeq"></a>

[3] Detlef Dürr, Sheldon Goldstein, and Nino Zanghì.  Quantum equilibrium and the origin of absolute uncertainty.   Journal of Statistical Physics, 67:843–907, 1992.  [https://arxiv.org/abs/quant-ph/0308039](https://arxiv.org/abs/quant-ph/0308039). DOI: [10.1007/BF01049004](https://doi.org/10.1007/BF01049004).

<a id="bib-DGZoperators"></a>

[4] Detlef Dürr, Sheldon Goldstein, and Nino Zanghì.  Quantum equilibrium and the role of operators as observables in quantum theory.   Journal of Statistical Physics, 116:959–1055, 2004.  [https://arxiv.org/abs/quant-ph/0308038](https://arxiv.org/abs/quant-ph/0308038). DOI: [10.1023/B:JOSS.0000037234.80916.d0](https://doi.org/10.1023/B:JOSS.0000037234.80916.d0).

<a id="bib-BeckLazarovici"></a>

[5] Christian Beck and Dustin Lazarovici.  The POVM theorem in Bohmian mechanics.   Entropy, 27(4):391, 2025.  [10.3390/e27040391](https://doi.org/10.3390/e27040391).

<a id="bib-WoodsClock"></a>

[6] Mischa P. Woods, Ralph Silva, and Jonathan Oppenheim.  Autonomous quantum machines and finite-sized clocks.   Annales Henri Poincaré, 20:125–218, 2019.  [https://arxiv.org/abs/1607.04591](https://arxiv.org/abs/1607.04591). DOI: [10.1007/s00023-018-0736-9](https://doi.org/10.1007/s00023-018-0736-9).

<a id="bib-PriorMassive"></a>

[7] Jeremy Rodgers.  A massive configuration completion of the quantum measurement programme.  [https://www.everythingequation.com/quantum-measurement/massive-configuration](https://www.everythingequation.com/quantum-measurement/massive-configuration), 2026.  Version 2, 15 September 2026. Author preprint. The exact source is the mathematical predecessor of the present consolidated revision. DOI: [10.5281/zenodo.22774739](https://doi.org/10.5281/zenodo.22774739).

<a id="bib-Monograph"></a>

[8] Jeremy Rodgers.  Shadow theory and quantum measurement: Source dynamics, event laws, and physical records. two constitutive completions.  [https://www.everythingequation.com/quantum-measurement/monograph](https://www.everythingequation.com/quantum-measurement/monograph), 2026.  Integrated monograph, version 2, 15 September 2026. Chapters 28–31. DOI: [10.5281/zenodo.22774584](https://doi.org/10.5281/zenodo.22774584).

<a id="bib-TT"></a>

[9] Stefan Teufel and Roderich Tumulka.  Simple proof for global existence of Bohmian trajectories.   Communications in Mathematical Physics, 258:349–365, 2005.  [https://arxiv.org/abs/math-ph/0406030](https://arxiv.org/abs/math-ph/0406030). DOI: [10.1007/s00220-005-1302-0](https://doi.org/10.1007/s00220-005-1302-0).

<a id="bib-Arrival"></a>

[10] Sheldon Goldstein, Roderich Tumulka, and Nino Zanghì.  Arrival times versus detection times.   Foundations of Physics, 54:63, 2024.  [https://arxiv.org/abs/2405.04607](https://arxiv.org/abs/2405.04607). DOI: [10.1007/s10701-024-00798-y](https://doi.org/10.1007/s10701-024-00798-y).

<a id="bib-MarvianLidar"></a>

[11] Milad Marvian and Daniel A. Lidar.  Error suppression for Hamiltonian-based quantum computation using subsystem codes.   Physical Review Letters, 118:030504, 2017.  [https://arxiv.org/abs/1606.03795](https://arxiv.org/abs/1606.03795). DOI: [10.1103/PhysRevLett.118.030504](https://doi.org/10.1103/PhysRevLett.118.030504).

<a id="bib-Deotto"></a>

[12] E. Deotto and G. C. Ghirardi.  Bohmian mechanics revisited.   Foundations of Physics, 28:1–30, 1998.  [https://arxiv.org/abs/quant-ph/9704021](https://arxiv.org/abs/quant-ph/9704021). DOI: [10.1023/A:1018752202576](https://doi.org/10.1023/A:1018752202576).

<a id="bib-PortfolioControl"></a>

[13] Jeremy Rodgers.  Control consistency and Born equilibrium: Uniqueness from local potentials and fixed interactions, 2026.  Author preprint. DOI: [10.5281/zenodo.23131058](https://doi.org/10.5281/zenodo.23131058).

<a id="bib-PortfolioReturn"></a>

[14] Jeremy Rodgers.  Preparation-return holonomy and equilibrium uniqueness in engineered interacting networks, 2026.  Author preprint. DOI: [10.5281/zenodo.23131064](https://doi.org/10.5281/zenodo.23131064).

<a id="bib-PortfolioEquilibrium"></a>

[15] Jeremy Rodgers.  Autonomous quantum measurement chains with faithful equilibrium records, 2026.  Author preprint. DOI: [10.5281/zenodo.23131069](https://doi.org/10.5281/zenodo.23131069).

<a id="bib-PortfolioPilot"></a>

[16] Jeremy Rodgers.  A deterministic hybrid medium for Bell jump paths and autonomous records, 2026.  Author preprint. DOI: [10.5281/zenodo.23131075](https://doi.org/10.5281/zenodo.23131075).

<a id="bib-PortfolioRecords"></a>

[17] Jeremy Rodgers.  Nonequilibrium calibration and faithful records in autonomous effective measurement models, 2026.  Author preprint. DOI: [10.5281/zenodo.23131081](https://doi.org/10.5281/zenodo.23131081).

<a id="bib-OriginalPilot"></a>

[18] Jeremy Rodgers.  A deterministic pilot medium: Bell path selection and autonomous material records, 2026.  Author preprint. DOI: [10.5281/zenodo.22774634](https://doi.org/10.5281/zenodo.22774634).
