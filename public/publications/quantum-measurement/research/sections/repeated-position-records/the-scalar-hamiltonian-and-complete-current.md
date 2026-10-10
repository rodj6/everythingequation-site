# Section 3: The scalar Hamiltonian and complete current

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-3"></a>

## 3 The scalar Hamiltonian and complete current

 <a id="p2c:sec:compiler"></a>



**Theorem 3.1 (Exact stationary-stock compiler).**

 <a id="p2c:thm:compiler"></a> Let $\mathcal H_\tau$ be either compact quantile stream above, with its pulse rate, or any Hamiltonian stream smooth on a closed finite time interval with a common compact spatial support inside the square. Put 

$$

 w=J\nabla\mathcal H_\tau,\qquad
 V=(DC)^{-1}w\circ C,\qquad
 S(x,y,\tau)=-\mathcal H_\tau(\Phi(x),\Phi(y)).

$$

 Then $V=(S_y,-S_x)/\Gamma$ is smooth and compactly supported, with $\operatorname{div}(\Gamma V)=0$. In the dimensionless units above define <a id="p2c:eq:compiler"></a>


$$
\begin{aligned}H_0&=-\Delta+(x^2+y^2)/4,\\
 H_V(\tau)&=(-i\nabla+V/2)^2+(x^2+y^2)/4-|V|^2/4
 \\
 &=H_0-i\{V\cdot\nabla+\tfrac12\operatorname{div}V\}.
 
\end{aligned}
$$

Equation (3.1).

 This is a common-domain self-adjoint family on $D(H_0)$ with a unitary finite-time propagator. Its exact active wave is $e^{-i\tau}\varphi(x)\varphi(y)$, and its complete minimal-coupling current is $\Gamma V$. Its actual guidance trajectories are precisely $\dot q=V(\tau,q)$ for every finite entrance position. At a fields-off hold $V=0$, the canonical active current is exactly zero.

Tensoring an independently evolving rest factor preserves the active formula with its full rest density retained. When each held positional factor has zero complete current, all corresponding nuisance coordinates are fixed by the module. Stationarity of a density alone is not this zero-current condition. Internal controls are proportional to identity on inert internal references. No actual stock population is implied by the exact stationary wave. 





**Proof.**

The signs give $S_y=-\mathcal H_v\phi(y)$ and $-S_x=\mathcal H_u\phi(x)$, proving the velocity identity. Its weighted divergence is $S_{yx}-S_{xy}=0$. Compact quantile support lies away from the CDF boundary and therefore pulls back to compact physical support.

Expand the minimal-coupling square to obtain [(3.1)](/quantum-measurement/research/repeated-position-records/the-scalar-hamiltonian-and-complete-current#p2c:eq:compiler); the $|V|^2/4$ compensation cancels its quadratic term. For the real stock $\varphi_2=\varphi(x)\varphi(y)$, $H_0\varphi_2=\varphi_2$, and 

$$

 \left(V\cdot\nabla+\tfrac12\operatorname{div}V\right)
 \varphi_2
 =\frac{\operatorname{div}(\Gamma V)}{2\varphi_2}=0.

$$

 This proves the exact time-dependent solution including its scalar phase. In these units the current of a general wave is $2\operatorname{Im}(\Psi^\dagger\nabla\Psi)+\rho V$. For the real active stock it is $\Gamma V$; for a factorized complete wave the full rest density multiplies it before any integration. The ODE is therefore the intended deterministic one, without assigning its entrance a reference population.

For fixed finite $h,p$ all compact coefficients and their required derivatives are bounded. The first-order symmetric perturbation is infinitesimally $H_0$-bounded: the oscillator form controls $\|\nabla\psi\|_2$, and Young's inequality bounds it by $\varepsilon\|H_0\psi\|_2+c_\varepsilon\|\psi\|_2$. The divergence term is a bounded multiplier. Kato–Rellich gives self-adjointness on $D(H_0)$. The minimal-coupling form is bounded below by $-\|V\|_\infty^2/4$. Smooth finite-time coefficients give graph-$C^1$ dependence on the common domain and the standard common-domain propagator theorem [[5](/quantum-measurement/research/repeated-position-records/bibliography#bib-SchmidGriesemer2014)] applies. The explicit stock solution is its unique evolution. Smooth bounded $V$ with bounded first spatial derivatives also gives global unique classical trajectories for every finite initial position. Tensor-product evolution proves the rest-factor assertion. 

□



In physical units, with signed nonzero charge $e$, the same choice is 

$$

 A_{\rm em}=-\frac{m}{e}v,\qquad
 H=\frac{(p-eA_{\rm em})^2}{2m}
      +V_{\rm osc}-\frac m2|v|^2,\qquad
 v=\sigma\omega V.

$$

 Changing the vector-potential sign reverses the current. Omitting the scalar correction changes the stock. Compactness is important for the operator and resource claims; an uncut polynomial or rapidly rotating global control need not inherit this lower bound or domain argument.

This theorem is a prescribed scalar canonical-current parent. Its compact planar potentials do not establish an exact source-free Maxwell field in a whole spatial neighborhood, finite quantum source/clock dynamics, finite-width planar confinement or a Pauli/constituent current reduction. Those are separate physical implementation tasks. In particular zero canonical hold current is not a claim that a spin-curl current vanishes for the same real stock.
