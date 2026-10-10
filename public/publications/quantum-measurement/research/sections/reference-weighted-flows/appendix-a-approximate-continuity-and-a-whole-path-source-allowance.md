# Appendix A: Approximate continuity and a whole-path source allowance

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-A"></a>

## A Approximate continuity and a whole-path source allowance

<a id="p3r:signed-source"></a> An approximate reference may retain the canonical kinetic current while its nonlocal comparison term creates a signed continuity defect. Such a reference is not an exactly equivariant second flow to which conservative two-flow stability can simply be applied. The following complementary result prices the defect directly. It is stated under classical local regularity, independently of the weak regularity theorem in the main text.



**Theorem A.1 (Signed-source comparison).**

<a id="p3r:source-theorem"></a> Let $\rho\ge0$ and $j$ be $C^1$ on $[0,T]\times\mathbb R^d$, with $\int\rho_t=1$, and let $b=j/\rho$ be locally $C^1$ on $\mathcal O=\{\rho>0\}$. Suppose 

$$

 \partial_t\rho+\operatorname{div}j=s,\qquad
 s\in L^1(dt\,dq),\qquad \int s(t,q)\,dq=0

$$

 in distributions, with the displayed equation pointwise in $\mathcal O$, and $s^-=0$ almost everywhere on $\{\rho=0\}$. Assume <a id="p3r:source-costs"></a>


$$

 \int_0^T\!\int |j|<\infty,\qquad
 \int_0^T\!\int\bigl(|s|+\rho|\operatorname{div}b|\bigr)<\infty,

$$

Equation (A.1).

 where terms involving $b$ are integrated on $\mathcal O$. Follow the maximal classical $b$-characteristic from an entrance with law $\rho_0dq$, and put it in a cemetery state if it terminates at a node or at infinity. Write $\mu_t^{\rm raw}$ for its endpoint law, including the cemetery state, and 

$$

 K(t)=\int_0^t\!\int s^-\,dq\,dr
     =\frac12\int_0^t\|s(r)\|_1\,dr.

$$

 The probability of termination by $t$ is at most $K(t)$, and <a id="p3r:source-TV"></a>


$$

 \operatorname{TV}(\mu_t^{\rm raw},\rho_tdq)\le K(t).

$$

Equation (A.2).

 Moreover, for a regular moving surface $\Sigma_t$ for which the transverse-crossing area formula holds on the local flow charts, <a id="p3r:source-crossing"></a>


$$

 \mathbb P_{\rm raw}(\text{a transverse crossing before }T)
 \le K(T)+\int_0^T\!\int_{\Sigma_t}
             |j\cdot n-\rho w_n|\,dS\,dt.

$$

Equation (A.3).

 Tangential contacts require their own area-formula or guard treatment. The same result holds on a complete flat torus; physical boundaries require a separate no-loss argument. 





**Proof.**

On a maximal positive-density characteristic define the nonnegative rate $\kappa=s^-/\rho$. Attach an auxiliary exponential variable of mean one solely to construct a comparison measure, and end this weighted path when its accumulated rate reaches that variable. Equivalently the survival weight to $t$ is 

$$

 a_t(q_0)=\exp\left[-\int_0^t\kappa(r,q_r)\,dr\right]

$$

 before the maximal lifetime. This auxiliary killing does not change the physical raw characteristic.

First exhaust $\mathcal O$ by compact positive-density flow charts and remove a path when it exits a chart. The density $k$ of characteristics still present solves the absorptive transport equation with zero incoming chart data, 

$$

 \partial_tk+\operatorname{div}(bk)=-\kappa k,
 \qquad k(0)=\rho_0

$$

 on portions reached from time zero. The comparison density solves the same equation with the additional nonnegative source $s^+$: 

$$

 \partial_t\rho+\operatorname{div}(b\rho)=-\kappa\rho+s^+.

$$

 Along a regular characteristic, multiplying by its positive Jacobian reduces these equations to scalar linear equations. Variation of constants gives $0\le k\le\rho$, including at chart inflow where the killed density is zero and $\rho\ge0$. Exhaustion and monotone convergence preserve this domination until the maximal lifetime. The total mass killed by the rate is consequently bounded by <a id="p3r:hazard-cost"></a>


$$

 \int_0^t\!\int\kappa k\le\int_0^t\!\int s^-=K(t).

$$

Equation (A.4).



It remains to exclude uncharged disappearance of paths that survive this rate. Under the killed comparison measure their expected length before killing or chart exit is bounded by $\int|b|\rho=\int|j|$. Since 

$$

 (\partial_t+b\cdot\nabla)\log\rho
       =s/\rho-\operatorname{div}b,

$$

 their expected total logarithmic-density variation is bounded by the second integral in [(A.1)](/quantum-measurement/research/reference-weighted-flows/appendix-a-approximate-continuity-and-a-whole-path-source-allowance#p3r:source-costs). Tonelli and chart exhaustion therefore give finite length and finite logarithmic variation almost surely up to their maximal lifetime or killing time. An un-killed path terminating at a finite time has a finite spatial limit by finite length. Its logarithmic density has a finite limit as well, so continuity gives a strictly positive density at that limiting spacetime point. Local classical continuation there extends the path, a contradiction. This argument also excludes a nodal arrival at the terminal time $T$ by taking the one-sided limit.

For a bad raw path whose accumulated rate up to termination is finite, the auxiliary survival probability is strictly positive. A positive raw measure of such paths would therefore give positive probability to an un-killed bad path, which was just excluded. Hence almost every bad raw path has infinite accumulated rate and is killed with probability one before termination. Equation [(A.4)](/quantum-measurement/research/reference-weighted-flows/appendix-a-approximate-continuity-and-a-whole-path-source-allowance#p3r:hazard-cost) bounds the raw bad-path probability by $K(t)$.

At time $t$, $k_tdq$ is a common submeasure of $\rho_tdq$ and $\mu_t^{\rm raw}$, and has mass at least $1-K(t)$: its only possible loss is now the paid killing loss. Both endpoint measures have total mass one. Removing their common submeasure leaves positive measures of equal mass at most $K(t)$, proving [(A.2)](/quantum-measurement/research/reference-weighted-flows/appendix-a-approximate-continuity-and-a-whole-path-source-allowance#p3r:source-TV). In particular their full variation norm is at most $2K(t)$.

Finally divide a raw crossing event into paths killed before $T$ and those surviving to $T$. The first class has probability at most $K(T)$. The probability of a crossing in the second class is no larger than the expected number of transverse crossings before killing. The stipulated local area formula represents this expectation by the complete absolute relative flux with density $k$: 

$$

 \int_0^T\!\int_{\Sigma_t}k|b\cdot n-w_n|\,dS\,dt
 \le\int_0^T\!\int_{\Sigma_t}|j\cdot n-\rho w_n|\,dS\,dt.

$$

 All hidden coordinates remain in the surface integral. This proves [(A.3)](/quantum-measurement/research/reference-weighted-flows/appendix-a-approximate-continuity-and-a-whole-path-source-allowance#p3r:source-crossing). 

□





**Example A.2 (The half-variation convention is sharp).**

<a id="p3r:source-factor"></a> On the unit circle let $j=0$ and $\rho(t,x)=1+\epsilon t\cos(2\pi x)$, with $\epsilon T<1$. The raw flow is stationary and retains density one. Since $s=\epsilon\cos(2\pi x)$, one has $K(t)=\epsilon t/\pi$. Direct integration gives $\operatorname{TV}(1,\rho_t)=\epsilon t/\pi$ and full variation norm $2\epsilon t/\pi$. The theorem's factor of two between these two conventions cannot be removed. 





**Example A.3 (A small source does not give exact node avoidance).**

<a id="p3r:source-node"></a> Let $f$ be the real normalized wave with $|f|^2$ the standard Gaussian on $\mathbb R$, and put $g(x)=xf(x)$. These are orthonormal. The bounded self-adjoint nonlocal operator 

$$

 H=i\epsilon\bigl(|g\rangle\langle f|-|f\rangle\langle g|\bigr)

$$

 has norm $\epsilon$, and evolves $f$ to $\Phi_t=f\cos(\epsilon t)+g\sin(\epsilon t)$. Its canonical kinetic current is zero because $\Phi_t$ is real. The signed source is $s=\partial_t|\Phi_t|^2$, with $\|s\|_1\le2\|\Phi_t\|\|\partial_t\Phi_t\|=2\epsilon$. Both regularity costs in [(A.1)](/quantum-measurement/research/reference-weighted-flows/appendix-a-approximate-continuity-and-a-whole-path-source-allowance#p3r:source-costs) are finite. If $0<\epsilon T<\pi/2$, the moving wave node $x=-\cot(\epsilon t)$ reaches a positive Gaussian measure of stationary raw initial points before $T$. Thus an arbitrarily small source gives a small *allowance* for nodal failure, not exact conservative equivariance. This is a mathematical comparison example, not an identified material Hamiltonian. 



The entrance used in Theorem [A.1](/quantum-measurement/research/reference-weighted-flows/appendix-a-approximate-continuity-and-a-whole-path-source-allowance#p3r:source-theorem) is explicitly $\rho_0$. For an original law $\mu_0=f_0\rho_0$ with $f_0\le C$, its bad-path and crossing-event estimates transfer with a factor $C$, by reweighting the raw entrance once. The endpoint comparison [(A.2)](/quantum-measurement/research/reference-weighted-flows/appendix-a-approximate-continuity-and-a-whole-path-source-allowance#p3r:source-TV) remains a statement about the reference entrance; an arbitrary non-Born endpoint need not be close to $\rho_t$. For general unbounded integrable $f_0$, a truncation gives, for any event with reference probability at most $a$, 

$$

 \mathbb P_{\mu_0}(A)\le M a+\int_{\{f_0>M\}}f_0\rho_0\,dq
 \quad(M>0).

$$

 This follows by splitting the same original entrance integral. It preserves the admitted law and exposes the additional quantitative resource needed when a finite cap is unavailable.
