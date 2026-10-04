# Section 2: Hamiltonians and exact return maps

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Cc = C_c^\infty
\Cb = C_b^\infty
\diver = \operatorname{div}
\tr = \operatorname{tr}
\diag = \operatorname{diag}
\Sym = \operatorname{Sym}
\skw = \operatorname{skew}
\Sp = \operatorname{Sp}
\supp = \operatorname{supp}
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\calH = \mathcal H
\calD = \mathcal D
\bibfont = \small
-->

<a id="section-2"></a>

## 2 Hamiltonians and exact return maps

<a id="sec:model"></a>

In physical particle coordinates the admitted Hamiltonians are <a id="eq:H"></a>


$$

 H(t)=-\frac12\Delta+\frac12q^T(K_0+D(t))q+v_{\mathrm{nl}}(s,t),
 \qquad D(t)\in{\mathcal D}:=\bigoplus_{i=1}^N{\operatorname{Sym}}(3).

$$

Equation (2.1).

 During quadratic stages $v_{\mathrm{nl}}=0$ and $K_0+D(t)>0$. During nonlinear stages $D=0$ and $v_{\mathrm{nl}}$ is the plane control constructed in [section 3](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#sec:plane). All amplitudes are finite for each protocol; there is no uniform bound on the entire control library. The coefficients are smooth on each stage and piecewise smooth under finite concatenation. At joining endpoints the holding Hamiltonian is restored. No momentum control or time-dependent pair interaction is admitted.

These Hamiltonians have the common self-adjoint domain <a id="eq:domain"></a>


$$

 {\mathcal D}_{\mathrm{osc}}=D(-\Delta+|q|^2)
   =\{f\in H^2({\mathbb R}^d): |q|^2f\in L^2\}.

$$

Equation (2.2).

 For each compact time interval their graph norms are equivalent. The nonlinear perturbations and their time derivatives have growth $O(1+|s|)$ and hence oscillator relative bound zero. Positive quadratic stages have the same domain. Smoothness as maps ${\mathcal D}_{\mathrm{osc}}\to L^2$ implies the usual common-domain nonautonomous evolution conditions: after a fixed positive shift, $\dot H(t)(H(t)+c)^{-1}$ is bounded and strongly continuous, with the corresponding difference quotients uniformly convergent on a stage. The common-domain propagator theorem [[10](/quantum-measurement/research/preparation-returns/bibliography#bib-ReedSimonII), Theorem X.70], applied to $-i(H(t)+c)$, therefore gives a unitary propagator, stage by stage. All particular wavefunctions below are also explicit strong solutions; their configuration flows will be checked independently.

For a nonvanishing solution write $\psi=\sqrt\rho\,e^{iS}$. Its guidance velocity and continuity equation are <a id="eq:guidance"></a>


$$

 \dot q=\operatorname{Im}\frac{\nabla\psi}{\psi}=\nabla S,
 \qquad \partial_t\rho+{\operatorname{div}}(\rho\nabla S)=0.

$$

Equation (2.3).

 If this velocity has a global smooth flow $F_t$, then <a id="eq:Jac"></a>


$$

 \rho_t(F_t(q))\det DF_t(q)=\rho_0(q).

$$

Equation (2.4).

 Thus any exact ray return with such a flow preserves its Born measure. Equation [(2.4)](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#eq:Jac) follows by differentiating its left-hand side; global invertibility justifies the change of variables. It does not assume that the actual configuration law equals $\rho_0\,dq$.



**Definition 2.1.**

<a id="def:return"></a> An exact return protocol based at $(H_0,\psi_0)$ has $H(0)=H(T)=H_0$ and $\psi(T)=e^{i\theta}\psi_0$. Its preparation-return map is its actual guided endpoint $F_T$. The library in [theorem 1.1](/quantum-measurement/research/preparation-returns/introduction#thm:main) consists of finite compositions of the planar rectangles (including the pair [(6.1)](/quantum-measurement/research/preparation-returns/equilibrium-uniqueness-and-an-explicit-witness#eq:witnessfg)) and corrected Gaussian loops constructed below, and their physical inverses. Invariance means ordinary Borel pushforward invariance on all of ${\mathbb R}^d$. 



The inverses are available without reversing the sign of the kinetic energy. For any real scalar Hamiltonian history taking a real $\phi$ to $e^{i\theta}\chi$ with real $\chi$, $e^{i\theta}\overline{\psi(T-t)}$ solves the time-reversed Hamiltonian history, starts at $\chi$, and ends at $e^{i\theta}\phi$. Its velocity is the negative reversed velocity and its configuration map is the inverse. This argument concerns the designated state trajectory; it does not identify time reversal with the inverse quantum propagator on arbitrary input states.
