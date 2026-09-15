# Chapter 28: A massive configuration constitution and its event law

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

<a id="mc:chapter-constitution"></a> 

Chapters [25](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:chapter) and [26](/quantum-measurement/monograph/faithful-archives-and-complete-history-error#cfg:archives) established how an admitted configuration law can support coherent records and faithful archives. They did not select that law from the source/readout interface. This chapter chooses a complete continuous constitution and then constructs its material implementation. Its actual variables are massive positions $Q$ guided by one uncollapsed spinor wave. Finite internal basis labels remain amplitudes in that wave; they are not additional actual sectors. This differs from the finite tagged configuration used by the Bell and pilot constructions elsewhere in the book. Identical coherent gate algebra does not identify their ontologies or microscopic path laws. 

The velocity and equilibrium postulates below are standard Bohmian ingredients, not new consequences of the current identities [[Bohm52a](/quantum-measurement/monograph/bibliography#bib-mc:BohmI), [Bohm52b](/quantum-measurement/monograph/bibliography#bib-mc:BohmII), [DGZ92](/quantum-measurement/monograph/bibliography#bib-mc:DGZeq), [DGZ04](/quantum-measurement/monograph/bibliography#bib-mc:DGZoperators)]. In particular, Lemma [25.2](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:quantile) already supplied the quantile-flow argument for a first-order translation detector. Its generator [(25.3)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:translationH) is not lower bounded. The additional construction here places the source, pointer, finite reaction stock, protection gates, reset receivers and controller inside a single semibounded massive Hamiltonian inventory. A controlled oscillator supplies the exact event time; a separate derivative estimate controls whether later physical archives remain true about their actual past. 

The four chapters of this part have distinct roles. The present chapter specifies the complete path law, proves conservative motion through nodes, and solves the massive writer. Chapter [29](/quantum-measurement/monograph/massive-material-records-retained-resources-and-protection#mc:chapter-material) supplies the source–actuator–record chain, retained loss/null states, copies, reset and bounded internal protection. Chapter [30](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:chapter-autonomous) includes the controller as matter and proves the retained-output and actual-history bounds, culminating in Theorem [30.5](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:closure). Chapter [31](/quantum-measurement/monograph/noncommuting-tests-and-rival-actual-motions#mc:chapter-tests) tests the construction with a reference-sensitive noncommuting experiment and competing actual motions. All four chapters restore explicit $\hbar$ and use a fixed finite nonrelativistic apparatus and observation horizon. 

The result is a constitutive internal completion, with controlled finite-resource approximation to ideal instruments. It does not derive the original finite Bell law $\lambda_{Y\leftarrow X}=[J_{YX}]_+/|\Psi_X|^2$ by reinterpreting a continuous crossing. The Bell current-production and statistical-selection results retain their own hypotheses. They are neither used to supply random clocks here nor invalidated by this alternative. 



<a id="section-28-1"></a>

## 28.1 The complete material state and its initial law

 <a id="mc:sec:constitution"></a> Use finitely many massive coordinates $q\in\mathbb R^n$, a finite internal material space ${\mathcal H}_I$ containing source, actuators, fuel, memories and spent products, and an inaccessible $R$. The complete state is <a id="mc:eq:state"></a>


$$

 (\Psi,Q),\qquad \Psi\in L^2(\mathbb R^n;{\mathcal H}_I\otimes{\mathcal H}_R),\quad
 {\left\lVert\Psi\right\rVert}=1,\quad Q\in\mathbb R^n.

$$

Equation (28.1).

 A quantum clock coordinate is appended in Section [30.1](/quantum-measurement/monograph/an-autonomous-controller-and-complete-retained-histories#mc:sec:clock). Coordinates of otherwise passive source particles can be included in confining ground states. Internal spin is part of $\Psi$; there is no extra actual spin assignment. 



**Assumption 28.1 (Universal material inventory).**

<a id="mc:ax:material"></a> Every source contact, recorder, controller, protection device and reset receiver belongs to the same spinor Schrödinger inventory. Its admitted Hamiltonians are <a id="mc:eq:H"></a>


$$

 H(t)=-\sum_{k=1}^n\frac{\hbar^2}{2m_k}\partial_k^2+V(q,t),
 \qquad V=V^\dagger,

$$

Equation (28.2).

 with self-adjoint semibounded realizations specified below. Every operation is identity on $R$. There is no additional classical device that reads a nonlinear function of a source ray without participating in this wave dynamics. 

 This last inventory statement is a physical restriction, not a theorem about every imaginable substance. It makes access and reaction compatible in this model: adding a contact changes $V$ and hence the wave controlling the actual motion. In particular a neutral ray meter from a different hybrid constitution cannot be appended without changing the theory. 



**Assumption 28.2 (Kinetic-momentum motion).**

<a id="mc:ax:motion"></a> Physical material positions have velocity given by the local real kinetic momentum per unit mass: <a id="mc:eq:guidance"></a>


$$

 \dot Q_k(t)=v_k^\Psi(Q(t),t),\quad
 v_k^\Psi=\frac{j_k}{\rho},\quad
 \rho=\Psi^\dagger\Psi,\quad
 j_k=\frac{\hbar}{m_k}\operatorname{Im}\Psi^\dagger\partial_k\Psi.

$$

Equation (28.3).

 The formula is used only where $\rho>0$. There are no further random displacements or circulation terms. 

 This is the standard Bohmian law, with established provenance [[Bohm52a](/quantum-measurement/monograph/bibliography#bib-mc:BohmI), [Bohm52b](/quantum-measurement/monograph/bibliography#bib-mc:BohmII), [DGZ04](/quantum-measurement/monograph/bibliography#bib-mc:DGZoperators)]. Its independent physical content is differentiable material motion governed by wave kinetic momentum. For a scalar wave $\Psi=Re^{iS/\hbar}$ it says $m_kv_k=\partial_kS$. Separating the real Schrödinger equation gives 

$$

 \partial_tS+\sum_k\frac{(\partial_kS)^2}{2m_k}+V
 -\sum_k\frac{\hbar^2}{2m_k}\frac{\partial_k^2R}{R}=0.

$$

 Its gradient determines acceleration along the flow. This is a concrete mechanical postulate; it does not minimize a graph traffic functional. Symmetry or continuity alone does not force it, as Section [31.2](/quantum-measurement/monograph/noncommuting-tests-and-rival-actual-motions#mc:sec:rivals) demonstrates. 



**Assumption 28.3 (Initial complete equilibrium).**

<a id="mc:ax:eq"></a> Conditional on each supplied classical preparation description $c$, the full initial configuration law is <a id="mc:eq:equilibrium"></a>


$$

 {\mathbb P}(dQ_0\mid c)={\left\lVert\Psi_0^c(Q_0)\right\rVert}_{I,R}^2\,dQ_0.

$$

Equation (28.4).

 Fresh ready cells and the clock are supplied in specified product waves, independent of the unknown input. There is a finite stock. No subsequent reset is assumed to generate a fresh seed conditional on an arbitrarily exposed microscopic past. 

 This is the only stochastic/ensemble input in the adopted dynamics. Initial $Q$ and the deterministic flow generate every later probability. It is not derived from source/readout incompleteness, from equilibration, or from a typicality slogan. The equilibrium and conditional-wave literature distinguishes these issues [[DGZ92](/quantum-measurement/monograph/bibliography#bib-mc:DGZeq)]. For example a real stationary wave has $v=0$, so an initially nonequilibrium distribution is stationary too. Universal dynamical equilibration is false in this class without additional hypotheses. 



<a id="section-28-1-1"></a>

### 28.1.1 Self-adjointness, domains and nodes

 The driven library uses scalar confining quadratics, affine coordinate terms with finite Hermitian coefficients, bounded smooth matrix potentials, and finitely many smooth time windows. On each fixed finite programme, all coefficients and their required derivatives are bounded. Completing the square bounds affine forces below. Finite internal gates are bounded. The resulting oscillator operator plus infinitesimally oscillator-bounded affine terms and bounded potentials is self-adjoint on the oscillator domain. Smooth vectors are preserved on finite intervals. One can verify the last assertion by commuting $q^\alpha\partial^\beta$ through the equation: scalar quadratics keep total order fixed, affine terms lower derivative order, and bounded smooth terms contribute only lower derivatives. Finite sums of Gaussian packets used below are such vectors. 



**Lemma 28.4 (Conservative motion through the nodal problem).**

<a id="mc:lem:exist"></a> Suppose the wave is $C^2$ on each programme interval and <a id="mc:eq:regularity"></a>


$$

 \int_0^T\left({\left\lVert\partial_t\Psi_t\right\rVert}_2+
       \sum_k{\left\lVert\partial_k\Psi_t\right\rVert}_2^2\right)dt<\infty.

$$

Equation (28.5).

 For the smooth nonsingular inventory above, the guidance flow exists throughout $[0,T]$ for $\rho_0$-almost every initial position and pushes $\rho_0$ to $\rho_t$. It neither loses mass at a node nor reaches infinity in finite time with positive equilibrium probability. 

 

**Proof.**

Direct differentiation using the Hermitian potential gives $\partial_t\rho+\sum_k\partial_kj_k=0$. On compact subsets of $\rho>0$, the locally smooth velocity has a unique flow and the continuity equation gives partial equivariance up to its exit. Under this killed flow, the position distribution is dominated by $\rho_t$. 

Expected distance travelled before exit is bounded by 

$$

 \int_0^T\!\int |j|\,dq\,dt
 \le C\int_0^T\sum_k{\left\lVert\partial_k\Psi_t\right\rVert}_2dt<\infty.

$$

 Escape to infinity would require infinite distance. To control nodes, along a surviving path differentiate $\log\rho$. Its expected total variation is bounded by 

$$
\begin{aligned}\int_0^T\!\int\left(|\partial_t\rho|
       +\frac{|j|\,|\nabla\rho|}{\rho}\right)dq\,dt
 &\le\int_0^T\left(2{\left\lVert\partial_t\Psi_t\right\rVert}_2
                  +C{\left\lVert\nabla\Psi_t\right\rVert}_2^2\right)dt<\infty.
\end{aligned}
$$

 Here $|\nabla\rho|\le2|\Psi||\nabla\Psi|$ and $|j|\le C|\Psi||\nabla\Psi|$. Reaching a node while remaining in a bounded region would send $\log\rho$ to $-\infty$, which has probability zero by the preceding bound. Initial nodes have zero probability. Exhaust the local domains; there is no remaining loss of mass. Domination by the normalized density then becomes equality. Finitely many switches concatenate without a new random draw. This is the current-integrability argument underlying the general existence theorem of Teufel and Tumulka [[TT05](/quantum-measurement/monograph/bibliography#bib-mc:TT)]; no theorem for arbitrary singular potentials is imported. 

□

 The autonomous Hamiltonian below has an additional scalar free kinetic term and smooth bounded functions of the clock multiplying affine pointer operators. The same commutator estimates, now also including clock weights and derivatives, give smooth finite-moment evolution and [(28.5)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:regularity). Its initial clock packet has finite momentum moments at each finite mass. Thus the lemma covers the *complete* state, not just a reduced pointer. 



<a id="section-28-1-2"></a>

### 28.1.2 The law on complete histories

 Let $\Phi_{t,0}^\Psi$ be the almost-sure flow. The complete path measure is explicitly <a id="mc:eq:pathlaw"></a>


$$

 {\mathbb P}(A)=\int 1_{\{(\Phi_{t,0}^\Psi(q))_{0\le t\le T}\in A\}}
                   \rho_0(q)\,dq .

$$

Equation (28.6).

 Continuous path space is standard Borel, so regular conditional laws for a finite or countably generated record history exist. For any past event $B$ of positive probability, the conditional future is the normalized restriction of the initial integral to its preimage under the flow. Given the complete initial state the future is deterministic. Given only coarse past records it is usually history dependent. Predictable crossing times need not have a compensator absolutely continuous in $dt$. No Bell intensity, Markov hazard or exponential threshold is asserted in this filtration. 

Where the *pointwise* current vanishes for an interval, positions are fixed. Current reversal reverses the corresponding instantaneous velocity, with its accumulated initial-position information retained. Nodes are handled by Lemma [28.4](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:lem:exist); conditioning on a zero-probability event is not assigned a normalized daughter. 



<a id="section-28-2"></a>

## 28.2 An exact massive detector in physical time

 <a id="mc:sec:detector"></a> Let $A={\lvert1\rangle}{\langle1\rvert}$ act on a retained internal control label. First a finite internal unitary correlates this label with projectors $P_0,P_1$ of the unknown source, giving $\sum_a P_a\psi{\lverta\rangle}$. No actual internal jump is introduced by this operation. Prepare one oscillator in its ground packet 

$$

 \phi_0(y)=(2\pi\sigma^2)^{-1/4}e^{-y^2/(4\sigma^2)},\qquad
 \sigma^2=\frac{\hbar}{2M\omega}.

$$

 Choose a smooth centre trajectory $b(0)=0$, $b(T_w)=L$, with $\dot b=\ddot b=0$ at both ends, and set <a id="mc:eq:force"></a>


$$

 c(t)=b(t)+\frac{\ddot b(t)}{\omega^2},\qquad
 H_w(t)=\frac{p_y^2}{2M}+\frac{M\omega^2}{2}\bigl(y-c(t)A\bigr)^2.

$$

Equation (28.7).

 This operator is nonnegative. No first-order unbounded-below translation is used. A convenient explicit choice is <a id="mc:eq:quintic"></a>


$$

 b(t)=L(10s^3-15s^4+6s^5),\quad s=t/T_w,\quad
 \dot b=\frac{30L}{T_w}s^2(1-s)^2\ge0.

$$

Equation (28.8).

 Smooth higher-order endpoint interpolation can be used when all clock-window derivatives are required; the $C^2$ quintic suffices for the exact writer and the finite-order estimates here. The trap may overshoot the packet centre during acceleration; its finite displacement and force are resources. 



**Proposition 28.5 (Exact wave and selected actual motion).**

<a id="mc:prop:writer"></a> For this primitive, $\psi$ is an internal/reference vector, with no unresolved older spatial coordinates. Writing $p_a={\left\lVertP_a\psi\right\rVert}^2$, the wave is <a id="mc:eq:packet"></a>


$$
\begin{aligned}
 \Psi_t(y)&=P_0\psi{\lvert0\rangle}\,e^{-i\omega t/2}\phi_0(y)
 +P_1\psi{\lvert1\rangle}\,e^{i\theta(t)}e^{iM\dot b(t)(y-b(t))/\hbar}\phi_0(y-b(t)),\\
 \dot\theta&=\frac{M\dot b^2}{2\hbar}-\frac{M\omega^2(b-c)^2}{2\hbar}-\frac\omega2.
\end{aligned}
$$

Equation (28.9).

 For $g_\sigma=|\phi_0|^2$, <a id="mc:eq:mixture"></a>


$$

 \rho_t(y)=p_0g_\sigma(y)+p_1g_\sigma(y-b(t)),\qquad
 j_t(y)=p_1\dot b(t)g_\sigma(y-b(t)).

$$

Equation (28.10).

 Let $F_t(y)=p_0{\mathsf F}(y/\sigma)+p_1{\mathsf F}((y-b(t))/\sigma)$, where ${\mathsf F}$ is the standard normal CDF. The complete actual pointer path is <a id="mc:eq:quantile"></a>


$$

 Y_t=F_t^{-1}(U),\qquad U={\mathsf F}(Y_0/\sigma)\sim\operatorname{Unif}(0,1).

$$

Equation (28.11).

 In particular $0\le\dot Y_t\le\dot b(t)$ during the monotone write. 

 

**Proof.**

Substitute the Gaussian ansatz into the Schrödinger equation. The coefficient of $y-b$ is $M\ddot b=-M\omega^2(b-c)$ and its scalar coefficient is precisely the displayed $\dot\theta$; the Gaussian width stays at its ground value. Internal labels are orthogonal, so there are no cross terms in $\rho$ or $j$. Now $\partial_tF_t=-j_t$ and $\partial_yF_t=\rho_t>0$. Differentiating $F_t(Y_t)=U$ gives [(28.3)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:guidance). The initial inverse transform supplies the uniform rank, without a second randomness postulate. 

□

 



<a id="section-28-2-1"></a>

### 28.2.1 Actual timing, false-ready tails and null continuation

 Put a threshold $h=L/2$. Let $\tau=0$ for the initially right-hand tail $Y_0\ge h$, and otherwise let $\tau$ be its first subsequent threshold crossing, with $\tau=\infty$ if none occurs before $T_w$. This convention retains the finite false-ready tail 

$$

 \delta={\overline{\mathsf F}}\left(\frac{L}{2\sigma}\right),\qquad {\mathbb P}(\tau=0)=\delta.

$$

 It is not an assertion that a preliminary check of readiness is noninvasive. Monotonicity in Proposition [28.5](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:prop:writer) gives the complete law <a id="mc:eq:timing"></a>


$$
\begin{aligned}
 {\mathbb P}(\tau>t)&=F_t(h),\qquad
 {\mathbb P}(\tau\in dt)=p_1\dot b(t)g_\sigma(h-b(t))\,dt\quad(0<t<T_w),\\
 {\mathbb P}(\tau=\infty)&=p_0(1-\delta)+p_1\delta.
\end{aligned}
$$

Equation (28.12).

 The positive-time density integrates to $p_1(1-2\delta)$; together with the initial atom and final null it normalizes to one. Conditional on no pre-trigger event the survival is $F_t(h)/F_0(h)$; conditional on no crossing by $t$, its instantaneous hazard, where defined, is <a id="mc:eq:hazard"></a>


$$

 \frac{p_1\dot b(t)g_\sigma(h-b(t))}{F_t(h)}.

$$

Equation (28.13).

 This is a derived physical-time formula, not a memoryless source-sector clock. Continuing a return pulse uses the same rank $U$, not a newly sampled waiting time. A dark hold with $\dot b=0$ has zero pointer current. 

If an input is entangled with older spatial memories, the full velocity is evaluated before integrating those coordinates out. When they are held fixed, the quantile argument applies separately to their conditional spinor fibres, with the corresponding conditional $p_a$. The integrated $p_a$ still determines marginal density but generally does not determine an individual joint trajectory. For moving old coordinates, use the complete guidance equation rather than this one-dimensional primitive formula. 

The conditional position law after a null at $t$ is 

$$

 {\mathbb P}(Y_t\in dy\mid\tau>t)=\frac{1_{y<h}\rho_t(y)}{F_t(h)}\,dy.

$$

 The global wave remains [(28.9)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:packet), including both packets. For an arbitrary past record event $B$, equation [(28.6)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:pathlaw) rather than a present-sector projection supplies the conditional continuation. A timestamp reader would be an additional interaction and would change this wave; equation [(28.12)](/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:eq:timing) describes this specified pointer without an extra timestamp apparatus. A finite timestamp claim requires those contacts and their complete dynamics; the first-crossing formula alone does not construct that reader. Unmeasured arrivals and recorded detection times need not coincide [[GTZ24](/quantum-measurement/monograph/bibliography#bib-mc:Arrival)]. 

 

> Web-edition source note: The supplied publication contains a labelled placeholder for massive_event_mechanism_figure.pdf; the figure asset was not supplied. Its original caption is retained below. [Supplied PDF, page 178](/publications/quantum-measurement/monograph.pdf#page=178).

 

Figure 28.1. The massive writer with $L/\sigma=8$, $p_1=0.65$ and $T_w=1$. The first panel compares the trap centre with the packet centre, the second shows selected actual mixture-quantile trajectories and the threshold, and the third gives the crossing-time density and cumulative probability. These are evaluations of the derived equations. The finite initial atom and terminal null are both retained in the timing law.

 <a id="mc:fig:mechanism"></a>  



<a id="section-28-2-2"></a>

### 28.2.2 Energy and force resources

 In branch 1, <a id="mc:eq:energy"></a>


$$

 \langle H_w(t)\rangle=\frac{\hbar\omega}{2}
       +\frac M2\dot b^2+\frac{M\omega^2}{2}(b-c)^2.

$$

Equation (28.14).

 It is finite for the explicit trajectory. The work in the driven description is $\int\langle\partial_tH_w\rangle dt$. It vanishes between the initial ground state and the final ground state of the shifted holding trap, but nonzero energy is borrowed and returned during the pulse. The autonomous clock below carries this exchange. Zero net work is not zero transient work or an unlimited source of reset readiness.
