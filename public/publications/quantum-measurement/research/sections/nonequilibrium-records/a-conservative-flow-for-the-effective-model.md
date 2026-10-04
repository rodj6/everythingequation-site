# Section 20: A conservative flow for the effective model

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\pr = 
\cert = 
\norm = \left\lVert#1\right\rVert
\Prob = \mathbb P
\E = \mathbb E
\TV = \operatorname{TV}
\Var = \operatorname{Var}
\one = \mathbf1
\R = \mathbb R
\T = \mathbb T
\dd = \,\mathrm d
\Imv = \operatorname{Im}
\ii = \mathrm i
-->

<a id="section-20"></a>

## 20 A conservative flow for the effective model



For current-based existence background see [[11](/quantum-measurement/research/nonequilibrium-records/bibliography#bib-TT)]. The three active kinetic operators have positive coefficients. The pointer-linear term has bounded clock coefficients and is infinitesimally bounded relative to the free kinetic plus oscillator operator. Square completion gives a finite lower bound on the potential. Consequently the full operator is self-adjoint on that reference operator's domain.

After odd extension in $r$, the original stock belongs to $D(H^2)$. The writer coefficients vanish on its clock support. Functional calculus therefore gives $\Psi\in C_tD(H^2)$ and $\partial_t\Psi\in C_tD(H)$. The writer potential has the locally bounded weak second derivatives needed for local elliptic regularity: $B_9$ is $C^4$, while its occurrence through $b''$ gives only the required $C^2$ statement. Thus $D(H^2)\subset H^4_{\rm loc}$ and $D(H)\subset H^2_{\rm loc}$. In three active dimensions these imply the local continuity and local Lipschitz velocity needed for a unique nonnodal guiding flow. No unjustified $H^6$ claim for the writer is used.

Energy conservation and $\|H\Psi\|<\infty$ give, on any finite interval, 

$$
\begin{aligned}\int\!{\,\mathrm d} t\int |J_j|{\,\mathrm d} q
 &\leq\frac{\hbar}{m_j}\int\!{\,\mathrm d} t\,\|\Psi\|\|\partial_j\Psi\|<\infty,\\
 \int\!{\,\mathrm d} t\int \rho\,|D_t\log\rho|{\,\mathrm d} q
 &\leq\int\!{\,\mathrm d} t\left(2\|\Psi\|\|\partial_t\Psi\|
       +2\sum_j\frac{\hbar}{m_j}\|\partial_j\Psi\|^2\right)<\infty.
\end{aligned}
$$

 Stopped partial equivariance and exhaustion exclude finite-time escape and node hitting almost surely. The origin is an odd-extension node. The free centre flow and constant angular factors then restore the two-body Cartesian description. Domination [(8)](/quantum-measurement/research/nonequilibrium-records/model-stock-and-scope#rad:eq:cap) transfers the null exceptional set and transports the same cap along this one flow. The much higher-dimensional interacting finite-field model requires its own existence proof.
