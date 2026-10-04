# Section 7: Consequences for physical records

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Sch = \mathcal S
\Cc = C_c^\infty
\Pcal = \mathcal P
\Acal = \mathcal A
\dd = \,dq
\diver = \operatorname{div}
\supp = \operatorname{supp}
\tr = \operatorname{tr}
\Id = I
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\Born = \frac{\Psi^\dagger\Psi}{\norm{\Psi}_2^2}
\CU = \mathrm{CC}
-->

<a id="section-7"></a>

## 7 Consequences for physical records

<a id="sec:measurement"></a>



<a id="section-7-1"></a>

### 7.1 Joint preparation and existence of trajectories



Let the actual configuration be guided by $v^\Psi$. This is the usual Bohmian specification of definite positions; an apparatus record is a function of its actual configuration. To use the characterization for an experiment, its initial *joint* system–apparatus law must be governed by an assignment satisfying the theorem, or joint equilibrium must be supplied as a preparation assumption. Applying a theorem only to an isolated system does not establish equilibrium of an independently introduced apparatus.

Once joint equilibrium holds, the Schrödinger continuity equation transports it under any subsequent well-defined Hamiltonian with the stated current, including a specified measurement coupling. We record a sufficient finite-time trajectory condition rather than presuming a global all-point flow at nodes.



**Lemma 7.1 (Time-dependent equilibrium transport).**

<a id="lem:flow"></a> On nonsingular ${\mathbb R}^d$, let a normalized scalar or finite spinor Schrödinger solution be $C^2$ in space and time on $[0,T]$, with the current above, and suppose <a id="eq:flowbound"></a>


$$

 \int_0^T\left({\left\|{\partial_t\Psi_t}\right\|}_2+
                    {\left\|{\nabla\Psi_t}\right\|}_2^2\right)\,dt<\infty.

$$

Equation (7.1).

 Then the guidance trajectories exist throughout $[0,T]$ for $|\Psi_0|^2dq$-almost every initial configuration and transport equilibrium. 





**Proof.**

Apply the current criterion in Theorem 1 of Teufel and Tumulka [[16](/quantum-measurement/research/control-consistency/bibliography#bib-TT2005)], which allows time-dependent currents. With $r=|\Psi|^2$ and $m_{\min}=\min_i m_i$, Cauchy–Schwarz gives 

$$
\begin{aligned}\int_{\{r>0\}}|\partial_t r+v\cdot\nabla r|\,dq
 &\le 2{\left\|{\partial_t\Psi}\right\|}_2+
             2m_{\min}^{-1}{\left\|{\nabla\Psi}\right\|}_2^2,\\
 \int |J|\,dq&\le m_{\min}^{-1}{\left\|{\nabla\Psi}\right\|}_2 .
\end{aligned}
$$

 The first bound is the required expected variation of the logarithm of the positive current density along trajectories; the second controls escape to spatial infinity. Their time integrals are finite by [(7.1)](/quantum-measurement/research/control-consistency/consequences-for-physical-records#eq:flowbound). There are no removed singular sets requiring an additional boundary estimate. The cited theorem gives almost-sure avoidance of nodes and escape, and equivariance. It is its general current theorem, not an autonomous-Hamiltonian specialization, that is used. 

□



The smooth controlled evolutions in [section 2](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#sec:model) satisfy these hypotheses on finite intervals by their Schwartz estimates. Equilibrium-almost-sure existence suffices for the following statistical conclusions. It is not being used to claim existence for every singular candidate law.



<a id="section-7-2"></a>

### 7.2 Implemented effects and instruments



Let $\chi_0$ be a normalized apparatus preparation, $U$ the unitary of an actually specified coupling, and $\Delta_C$ the apparatus configuration region recording $C$. Define $V_0\psi=\psi\otimes\chi_0$. The equilibrium record probability is <a id="eq:effect"></a>


$$

 \Pr(C\mid\psi)={\left\|{(I\otimes1_{\Delta_C})UV_0\psi}\right\|}^2
       ={\left\langle {\psi},{E_C\psi}\right\rangle},\qquad
 E_C=V_0^\dagger U^\dagger(I\otimes1_{\Delta_C})UV_0.

$$

Equation (7.2).

 For a measurable record partition, positivity, normalization, and countable additivity of these effects follow from those of the pointer projections. This is the usual apparatus derivation of a POVM [[4](/quantum-measurement/research/control-consistency/bibliography#bib-DGZ2004)].

For a finite resolved apparatus model, suppose its actual endpoint is <a id="eq:instrument"></a>


$$

 UV_0\psi=\sum_{i,\alpha}K_{i\alpha}\psi\otimes\chi_{i\alpha},

$$

Equation (7.3).

 where the normalized apparatus packets have disjoint configuration supports, and $i$ is the coarse record. Then [(7.2)](/quantum-measurement/research/control-consistency/consequences-for-physical-records#eq:effect) gives 

$$

 \Pr(i\mid\psi)=\sum_\alpha{\left\|{K_{i\alpha}\psi}\right\|}^2,\qquad
 \mathcal I_i(\rho)=\sum_\alpha K_{i\alpha}\rho K_{i\alpha}^\dagger.

$$

 At a fine record the conditional system wavefunction is proportional to $K_{i\alpha}\psi$; coarse conditioning gives the normalized instrument output. The mixed-state expression follows by linearity for a specified preparation mixture or by a supplied purification. This derivation assumes [(7.3)](/quantum-measurement/research/control-consistency/consequences-for-physical-records#eq:instrument) is the endpoint of the physical apparatus. An abstract dilation representation alone does not establish implementability by the control resources in [section 2](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#sec:model).

With internal indices $a,b$ for system and environment, conditioning a joint equilibrium state at environment position $y$ gives the kernel 

$$

 G_y^{aa'}(x,x')=\sum_b\Psi_{ab}(x,y)\overline{\Psi_{a'b}(x',y)}.

$$

 Its normalized diagonal trace is the conditional configuration density. The corresponding current is obtained by the same partial trace before taking the diagonal. This is the conditional density-matrix construction of [[5](/quantum-measurement/research/control-consistency/bibliography#bib-DGTZ2005), Section 4]; it does not assert autonomous evolution for an arbitrary reduced state.

Exact support separation is an ideal mathematical case. Here $\operatorname{TV}(\mu,\nu)=\sup_A|\mu(A)-\nu(A)|$, equal to one half of the $L^1$ distance for densities, and quantum trace distance is $\tfrac12{\left\|{\rho-\sigma}\right\|}_1$. Let $V=UV_0$ be the actual complete endpoint isometry and $\widetilde V$ an ideal isometry into the same output space, compared using the same record partition. If ${\left\|{V-\widetilde V}\right\|}\le\varepsilon$, then for every normalized input the trace distance of the two output pure states is at most $\varepsilon$. Measurement contracts trace distance, so their entire endpoint record distributions differ in total variation by at most $\varepsilon$. For an initial law on which the actual trajectory and readout map is defined, a discrepancy $\delta$ in total variation from joint equilibrium adds at most $\delta$: pushforward cannot increase total variation. Thus $\min\{1,\varepsilon+\delta\}$ bounds the combined endpoint record error. [section D](/quantum-measurement/research/control-consistency/appendix-d-a-finite-time-gaussian-pointer#app:pointer) gives an explicitly time-dependent Gaussian pointer example with a direct overlap bound.

An endpoint record distribution does not establish that the pointer copied a specified earlier actual label or remained in a record region throughout a holding interval. Those claims require a defined history observable and a separate dynamical estimate. Initial-law total variation contracts under a common measurable history map when such a map is defined, but small endpoint wave or isometry error alone gives no comparison between two trajectory histories. No copy-and-hold error or whole-path Born comparison is asserted here.

For repeated or adaptive experiments, retain all apparatus memory in the joint configuration and use the cumulative implemented evolution. Products of branch operators follow when each stage has the stated conditional ready-state or reset preparation. If memory is discarded without that property, a product of reduced instruments is not justified. Repeated-trial frequency statements require the relevant independent or conditional preparation assumptions; they do not follow from a one-time marginal law alone. These qualifications belong to the preparation and apparatus model, not to the algebraic uniqueness proof.
