# Section 2: The model and its statistical assumptions

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
