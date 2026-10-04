# Section 5: Simple initial waves; independent actual-law data

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

<a id="section-5"></a>

## 5 Simple initial waves; independent actual-law data

 Let $A_c(s)=1$ on $|s|\le.3$, $A_c(s)=1-B_9(5(|s|-.3))$ until $.5$, and zero outside. Set $Z_c=176818/230945$ and $\varphi=A_c/\sqrt{Z_c}$. The supplied wave is 

$$

 \Psi_0=\frac{\psi}{2}\,\zeta(u)\gamma(Z-z_0)
 e^{iMv\lambda S}\varphi(S)\,
 e^{iM_CC}\varphi(C+1),
 \quad \gamma(z)=\pi^{-1/4}e^{-z^2/2}.

$$

 The factor $1/2$ is the product of two flat rotor waves. No shaped rotor wave is supplied. $\zeta$ is the retained harmonic source ground wave.

In relative coordinates, the actual law is 

$$

 f_0(X,Z,S)g(u\mid X,Z,S)\,
 \kappa_R(dR\mid X,Z,S,u)\,
 \kappa_C(dC\mid X,Z,S,u,R).

$$

 Here $f_0$ is a nonnegative density with integral one. Define $V_j=|D_j f_0|({\mathbb R}^3)$ as the distributional total variation of its zero extension, for $j=X,Z,S$, including boundary jumps, and $B=V_X+V_Z+V_S$. The admitted same-support total-variation neighbourhood retains absolute continuity of the active configuration marginal, as required for the almost-sure flow; allowed singular passive conditionals retain their separately stated supports.

The original class is retained: support $[-1,1]^2\times[-1/4,1/4]$, $V_X,V_Z\le2$, $V_S\le8$, $B\le12$, $f_0\le2$, and $0\le g\le2|\zeta|^2$ normalized. $\kappa_R$ is any normalized law on the reference circle; $\kappa_C$ is any normalized law on $[-1.25,-.75]$. Neither must be Born, independent, or absolutely continuous. Taking $R_0=0$ embeds the original detector positions without even a common translation. An independent actual orientation law can also be appended to an original bare-position ensemble. Its translated mixture preserves the density cap, $V_Z,V_S$, circular rotor-marginal variation at most two, and rotor-marginal density at most one; its mixed source conditional preserves the source domination. Zero-extension rotor variation and the raw total $B$ need not remain unchanged. The independent-orientation extension is a separate corollary because the active proof uses precisely the circular variation, marginal bound and density cap. This is not permission to correlate $R$ arbitrarily with bare $x$ while keeping the relative law unchanged. For example, $R=x$ would collapse the relative seed and is outside the declared relative-density class. The same-support $10^{-4}$ actual-law neighbourhood is charged once.
