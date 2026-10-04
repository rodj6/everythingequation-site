# Section 8: Finite interacting clock, not an infinite-mass limit

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

<a id="section-8"></a>

## 8 Finite interacting clock, not an infinite-mass limit

 The exact moving-frame Hamiltonian retains $-\partial_\xi^2/(2M)$. Consequently the comparison residual is $\partial_\xi^2G_i/(2M)$. Its propagator is the full interacting $S,Z$ propagator.



**Lemma 8.1 (Full-time auxiliary errors).**

<a id="pa:lem:aux"></a> For $0\le t\le3$ and $M_-=.99\,10^{18}$, 

$$

 {\left\lVert{\Xi_i-G_i}\right\rVert}\le\frac{3(110000)}{2M_-}<2\times10^{-13},

$$

 

$$

 {\left\lVert{p_Z(\Xi_i-G_i)}\right\rVert}
 \le\frac{3[6\times10^6+15000(110000)]}{2M_-}
 <3\times10^{-9}.

$$

 

 

**Proof.**

The norm estimate is Duhamel with zero initial defect. For the derivative estimate solve the oscillator operator equations. The remaining $Z$ force has norm below $5000$, so 

$$

 {\left\lVert{p_ZU(t,s)r}\right\rVert}\le{\left\lVert{p_Zr}\right\rVert}+{\left\lVert{(Z-z_0)r}\right\rVert}
 +(t-s)5000{\left\lVert{r}\right\rVert}.

$$

 Apply this to the residual and integrate. Clock recoil is in $U$, not prescribed away. No exponential in $\Omega t$ is paid, and no source phase enters these $S,Z$ derivatives. 

□
