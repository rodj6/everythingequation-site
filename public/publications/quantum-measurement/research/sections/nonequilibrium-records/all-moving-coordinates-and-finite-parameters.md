# Section 3: All moving coordinates and finite parameters

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

<a id="section-3"></a>

## 3 All moving coordinates and finite parameters

 Let $x,R\in{\mathbb T}_2$ be a detector rotor and a new reference rotor, and set $X=x-R\pmod2$. Let $Z,S,C\in{\mathbb R}$, and retain the original 255 differential source coordinates $u\in{\mathbf1}^\perp\subset{\mathbb R}^{256}$. The unknown normalized qubit/reference vector is $\psi$, with exactly conserved projectors $P_0+P_1=I$. Set $p={\left\lVert{P_1\psi}\right\rVert}^2$. The target projector $P_1^{\rm tar}$ is an orthogonal projector with ${\left\lVert{P_1-P_1^{\rm tar}}\right\rVert}\le10^{-4}$, and $p_{\rm tar}={\left\lVert{P_1^{\rm tar}\psi}\right\rVert}^2$. Both act as the identity on any admitted inaccessible reference factor. That reference is an internal Hilbert-space factor and introduces no additional guidance coordinates. Thus $|p-p_{\rm tar}|\le10^{-4}$. The periodic classifier uses the centred cell coordinate $u=((X-o)/h)\bmod1\in[-1/2,1/2)$: it is zero for $|u|\le1/4$ and one otherwise, with a fixed boundary convention.

Set 

$$

 N=256,\quad h=1/128,\quad K=2^{38},\quad
 \eta_t=2^{-16},\quad\eta_p=2^{-17}.

$$

 Let $m= m_xm_R/(m_x+m_R)=\alpha K/h^2$. Independently choosing 

$$

 m_x,m_R\in[1.998,2.002]K/h^2

$$

 ensures $\alpha\in[.999,1.001]$. Nominally $m=2^{52}$ and $m_x=m_R=2^{53}$. The other masses are 

$$

 M_s=10^{18},\quad M\in[.99,1.01]10^{18},\quad
 \mu\in[.00999,.01001],\quad M_C=10^8.

$$

 The retained source has $\kappa_s=2.5\,10^{43}$ and frequencies $\Omega_k=10^{13}\sin(\pi k/256)$. It is a spectator Hamiltonian, not a field generator in this redesign.

Let $S_5(z)=10z^3-15z^4+6z^5$. The even period-one $U_{\eta_p}$ equals $z^2$ for $|z|\le1/2-\eta_p$ and has positive-cap derivative 

$$

 U'_{\eta_p}(z)=2z\left[1-S_5((z-1/2+\eta_p)/\eta_p)\right].

$$

 It is $C^3$, nonnegative, and bounded by $1/4$. Define 

$$

 V_i(X)=\frac{g_iK}{2}U_{\eta_p}\left(\frac{X-o}{h}-\frac i2-d_i\right),
 \quad g_i\in[.999,1.001],\quad |d_i|\le.01.

$$

 The common origin $o$ is arbitrary. The relative sector offsets and gains can vary independently in these intervals; arbitrary nonperiodic site defects are not admitted.

For $B_9(a)=126a^5-420a^6+540a^7-315a^8+70a^9$ on $[0,1]$, with constant extensions, put 

$$

 b(a)=L B_9((a-a_0)/w_b),\quad y=Z-z_0,

$$

 

$$

 W_0(a,y)=\frac{y^2}{2\mu},\qquad
 W_1(a,y)=\frac{(y-b(a))^2}{2\mu}-\mu b''(a)(y-b(a)/2).

$$

 The finite writer family is 

$$

 \begin{gathered}
 L\in[23.99,24.01],\quad |z_0|\le.001,\quad v\in[127,129],\quad
 \lambda\in[.99999,1.00001],\\
 a_0\in[1.2299,1.2301],\qquad w_b\in[.03999,.04001].
 \end{gathered}

$$

 Its launch momentum is $Mv\lambda$. Spring coefficient $1/\mu$ and the scalar compensation are matched to the selected $\mu$. General symmetry-breaking or independently mismatched compensation errors are outside this theorem.
