# Section 25: How the exact writer controls the new rank terms

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

<a id="section-25"></a>

## 25 How the exact writer controls the new rank terms

 Let $G_*=V(S)(\psi_{\rm old}g_0)$ and $\delta=\Psi-G_*$ as above. Throughout this prefix section $T=t_a-t_h=0.0386\,\mathrm s$, with elapsed time measured from the handoff $t_h=-0.002\,\mathrm s$. On $S<S_{\rm on}$ the displacement and its derivatives are the identity. Every hybrid functional integral in this section is restricted to $Q_{\rm pre}=\{S<S_{\rm on}\}$ before integration. The separately charged good-clock event keeps actual prefix trajectories in that set. Global error and moment norms may upper-bound these restricted integrals, but $G_*=\psi_{\rm old}g_0$ and the corresponding small pointer-jet substitution are asserted only there. No derivative of the region's indicator is taken, and no full-space equality of the two references is being asserted.

For the clock component use the original characteristic helper and its already proved positive current majorant. Inserting the sum of its old error and $\delta$ into [(13)](/quantum-measurement/research/nonequilibrium-records/conditional-rank-stability-with-zero-fibres-included#eq:rankstable) gives the increment 

$$

 \Delta I_S\le\frac\hbar M T
 [4(g_{1,o}+e_{1,o})d_S+2d_S^2+14dQ_{G,o}+9dg_{2,o}+d_{SS}].

$$

 For the pointer component use the *different* reference $\psi_{\rm old}g_0$, whose radial direction is independent of $Z$. Its pointer rank functional is exactly zero. Gaussian integration gives $g_{1,Z}=1/\sqrt2$ and $g_{2,Z}=Q_Z=\sqrt3/2$. Therefore 

$$

 I_Z\le\frac{T}{\mu_ZT_0}
 [2\sqrt2d_Z+2d_Z^2+(23\sqrt3/2)d+d_{ZZ}].

$$

 The references are chosen separately because each has the appropriate proved coefficients; no wave or current is transferred between them without the displayed identity.

Write $A=\partial_Z+Z-\Pi_1c(s)$, $c=b+i\mu_Zb'$. On the quiet prefix $A=B=\partial_Z+Z$, and $B\delta=A\Psi$, $B^2\delta=A^2\Psi$. Oscillator integration by parts gives 

$$

 d_Z\le\sqrt{A_1^2+d^2},\qquad
 d_{ZZ}\le\sqrt{A_2^2+4A_1^2+3d^2},
 \quad A_j={\left\lVert{A^j\Psi}\right\rVert}.

$$

 Indeed ${\left\lVert{(p_Z^2+Z^2)f}\right\rVert}^2
={\left\lVert{B^2f}\right\rVert}^2+4{\left\lVert{Bf}\right\rVert}^2+{\left\lVert{f}\right\rVert}^2$, while $\Re\langle p_Z^2f,Z^2f\rangle={\left\lVert{Zf'}\right\rVert}^2-{\left\lVert{f}\right\rVert}^2$. All identities hold on the complete vector-valued fibres before integration. A clock indicator is not differentiated.



<a id="section-25-1"></a>

### 25.1 Derivative closure and its proof

 Appendix [D](/quantum-measurement/research/nonequilibrium-records/appendix-d-complete-prefix-estimates-for-the-compensated-writer#prefix:main) supplies the Gaussian polynomial recursion, the four simultaneous positive moment inequalities, and the strict supersolution tests for the same new wave. It retains the additional $-\kappa\Pi_1(c')^2\Psi/(vT_0)^2$ source in the $A^2\Psi$ equation. The localized calculation then improves the pointer-weighted first clock-error estimate to $Q(\delta_S)<616735\,\mathrm m^{-1}$ and proves 

$$

 \sup\|\delta_S\|<0.1\,\mathrm m^{-1},\qquad
 \sup\|\delta_{SS}\|<1.117215\times10^{21}\,\mathrm m^{-2}.

$$

 The old third-clock input and all differentiated residual coefficients are included there. Appendix [B](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:main) derives the original-stock handoff data, including the fourth-spatial estimate and its Gaussian-tail terms. Thus these derivative bounds are established for the declared entrance wave, rather than imposed on a replacement handoff wave.
