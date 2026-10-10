# Appendix A: A complementary finite regular-basin theorem

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\Dtr = \operatorname{D}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
\pTV = \operatorname{TV}
\pVar = \operatorname{Var}
\pLaw = \operatorname{Law}
\pGam = \Gamma
\pUnif = \mathsf U
-->

<a id="section-A"></a>

## A A complementary finite regular-basin theorem

<a id="app:regular"></a> This appendix concerns a different, random-return preparation mechanism. It is not used to manufacture independent archive populations for the deterministic Gaussian protocol. Its purpose is to distinguish uniform preparation of a regularity class from retained-tape independence, and to record the supporting finite-dimensional argument.

Let $\gamma$ be the standard Gaussian measure on $\mathbb R^d$. Let $P$ be a self-adjoint Markov contraction on $L^2(\gamma)$, preserving constants, positive semidefinite as an operator, and with no nonconstant fixed function. The spectral positivity excludes a period-two obstruction. Since $P$ preserves nonnegative functions and $P1=1$, self-adjointness gives $\int Ph\,d\gamma=\int h\,d\gamma$ and 

$$

 \|Ph\|_1\leq\int P|h|\,d\gamma=\|h\|_1
 \qquad(h\in L^2(\gamma)).

$$

 Thus $P$ extends uniquely by density to a positivity- and mass-preserving contraction on $L^1(\gamma)$. All expressions $P^k f$ below use this extension; the admitted density $f$ need not lie in $L^2$. A lazy inverse-balanced mixture of actual reference-preserving returns is one possible supplier; its physical implementation and command independence are separate hypotheses. Denote normalized product Hermite polynomials by $H_\alpha$, and set 

$$

 E_m=\operatorname{span}\{H_\alpha:|\alpha|\le m\},\quad
 S_m=\sum_{|\alpha|\le m}H_\alpha^2,\quad C_m^2=\int S_m^2\,d\gamma.

$$

 For $E_\ell^0=E_\ell\cap1^\perp$, define $\kappa_\ell(k)=\lVert P^k|_{E_\ell^0}\rVert_{L^2\to L^2}$, taking it to be zero if the domain is zero dimensional. The range need not be $E_\ell^0$.



**Theorem A.1 (Finite preparation on a weak Fisher basin).**

<a id="thm:hermite"></a> If $f\ge0$, $\int f\,d\gamma=1$, $\sqrt f\in H^1(\gamma)$, and $4\int|\nabla\sqrt f|^2\,d\gamma\le J$, then, for $\delta_m=\sqrt{J/[4(m+1)]}<1$, 

$$

 {\operatorname{TV}}\bigl((P^k f)\gamma,\gamma\bigr)
 \le\delta_m+\frac12\sqrt{C_m^2-1}\,\kappa_{2m}(k).

$$

 For every $J<\infty$ and $\epsilon>0$ there is a finite common $k$ for the entire stated class. No spectral gap or practical waiting-time bound is asserted. 

 

**Proof.**

Put $g=\sqrt f$, $h=\Pi_mg$, and $c=\lVert h\rVert_2^2$. Gaussian integration by parts gives 

$$

 \langle\partial_i g,H_\beta\rangle
 =\sqrt{\beta_i+1}\,\langle g,H_{\beta+e_i}\rangle.

$$

 The identity extends from smooth functions to $H^1(\gamma)$ by Sobolev approximation. Bessel's inequality, summed over $i$, gives $\sum_\alpha|\alpha||\langle g,H_\alpha\rangle|^2
 \leq\int|\nabla g|^2\,d\gamma\leq J/4$. Hence $1-c=\lVert g-h\rVert_2^2\le\delta_m^2<1$. The polynomial $a=h^2/c$ is a normalized positive density. Since $g\ge0$, 

$$

 \int g|h|/\sqrt c\,d\gamma\ge\langle g,h\rangle/\sqrt c=\sqrt c.

$$

 For normalized nonnegative $r,s$, Cauchy–Schwarz applied to $(r-s)(r+s)$ gives $\frac12\int|r^2-s^2|\le\sqrt{1-\langle r,s\rangle^2}$. Thus ${\operatorname{TV}}(f\gamma,a\gamma)\le\sqrt{1-c}\le\delta_m$, even if $h$ changes sign. Pointwise coefficient Cauchy–Schwarz gives $a\le S_m$, whence $\lVert a-1\rVert_2^2\le C_m^2-1$. The polynomial $a-1$ is in $E_{2m}^0$. Markov contraction and $L^1\le L^2$ prove the bound.

The spectral theorem gives $P^kg\to0$ for each $g\perp1$: the spectrum lies in $[0,1]$, and the spectral mass at $1$ is absent. Convergence is uniform on the unit sphere of any fixed finite-dimensional domain, so $\kappa_{2m}(k)\to0$. Choose $m$ first to make $\delta_m<\epsilon/2$, and then $k$ for the second term. This order avoids both a spectral-gap assumption and an unsupported invariance assumption on the Hermite subspace. 

□



The finite Gram matrix $G_{\ell,k}(\alpha,\beta)=\langle H_\alpha,P^{2k}H_\beta\rangle$ has largest eigenvalue $\kappa_\ell(k)^2$. Its trace is an upper bound. For $m=1$, $S_1(x)=1+|x|^2$ and the Gaussian moments $\mathbb E|x|^2=d$, $\mathbb E|x|^4=d(d+2)$ give $C_1^2=1+d^2+4d$. For $d=1$ and $m=2$, $S_2(x)=(3+x^4)/2$, so $C_2^2=(9+6\cdot3+105)/4=33$. A numerical waiting time for a concrete nonlinear return library would additionally require enclosed Gram entries; the theorem does not assert that this calculation has been completed.



**Proposition A.2 (Retained tape and actual correlations).**

<a id="prop:tape"></a> Suppose $W$ is an independent command word with law $\pi$, and every $F_w$ is an invertible measurable $\gamma$-preserving map. Then 

$$

 {\operatorname{TV}}\bigl(\operatorname{Law}(F_WZ,W),\gamma\otimes\pi\bigr)
 ={\operatorname{TV}}\bigl(\operatorname{Law}(Z),\gamma\bigr).

$$

 If only the last $r$ commands of a fresh independent sequence of $k$ commands are retained, the corresponding discrepancy equals that of the marginal configuration before those last $r$ commands. 

 

**Proof.**

The measurable bijection $(z,w)\mapsto(F_wz,w)$ sends $\gamma\otimes\pi$ to itself. Total variation is invariant under a common measurable bijection. For a retained suffix, its independence from the preceding configuration gives the same product input argument starting at time $k-r$. 

□

 This is the total-variation version of the inherited retained-memory principle, not a claim that information conservation is new. Even a one-bit archive may retain the entire relevant map: if commands apply either the identity or an involution $R$, the parity of the number of $R$ commands determines the endpoint map and permits its inverse echo. Correct command marginals alone are also insufficient. With an input density $a(F_wz)$ relative to $\gamma(dz)\pi(dw)$, each command marginal is still $\pi$, while the endpoint density is exactly $a$. Taking $a=2\mathbf1_H$ for a reference half-space $H$ gives endpoint discrepancy $1/2$.



**Proposition A.3 (Finite or countable command obstruction).**

<a id="prop:atomic"></a> A finite or countable random mixture of invertible deterministic commands sends an initial point mass to a countably supported measure. Its total variation from a non-atomic Gaussian remains one, irrespective of the command probabilities. 

 

**Proof.**

The set of reachable points is countable and has output probability one but Gaussian probability zero. 

□

 Accordingly a continuous-parameter smoothing construction must explicitly supply its analog command law and a rank condition; it is a different statistical resource. The present finite Gaussian protocol instead restricts the complete original actual law by weak scores. Neither construction obtains its required law from the mere smoothness of a quantum wave.
