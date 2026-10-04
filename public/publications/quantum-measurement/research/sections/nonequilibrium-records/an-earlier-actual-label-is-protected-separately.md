# Section 9: An earlier actual label is protected separately

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

<a id="section-9"></a>

## 9 An earlier actual label is protected separately

 For the full initial offset support, 

$$

 \lambda_+t_a+.5/127<1.2299,
 \qquad
 \lambda_-t_b-.5/127>1.2301+.04001.

$$

 The compact comparison is therefore still in the common potential before $t_a$ and has completed writing at $t_b$. These guards concern a comparison support; they are not a claim that the exact clock has compact support at later times.

Before $t_a$, use 

$$

 F_1(t,\xi,Z)=e^{-it/(2\mu)}
 \left[\varphi(\xi)+\frac{it}{2M}\varphi''(\xi)\right]\gamma(Z-z_0).

$$

 Its residual norm is at most $t{\left\lVert{\varphi''''}\right\rVert}/(4M^2)$. Both the exact common auxiliary evolution and each exact driven sector differ from $F_1$ by at most $t_a^2{\left\lVert{\varphi''''}\right\rVert}/(8M^2)$. Therefore 

$$

 \epsilon_{\rm pre}\le\frac{t_a^2(400000)}{4M_-^2}.

$$

 This expansion has not discarded any exact clock tails.

Let $\rho_r,j_r$ be the isolated spinor rotor current. Its initial density is $1/2$, and circle Sobolev/energy estimates give 

$$

 {\left\lVert{\rho_r}\right\rVert}_\infty\le3K/h,\quad
 {\left\lVert{j_r}\right\rVert}_\infty\le8K,\quad {\left\lVert{r_i'}\right\rVert}_2\le K/h.

$$

 Exact sector factorization bounds the pretrigger wave and its $X$ derivative errors by $\epsilon_{\rm pre}$ and $(K/h)\epsilon_{\rm pre}$. Thus 

$$

 {\left\lVert{\delta j_X}\right\rVert}_1\le4h\epsilon_{\rm pre},\qquad
 {\left\lVert{\delta\rho}\right\rVert}_1\le3\epsilon_{\rm pre}.

$$

 The isolated lifted cumulative rank along the coupled ordinary path obeys 

$$

 \rho\dot{\mathcal K}=\rho_rj_X-j_r\rho,

$$

 including its circulation. Hence 

$$

 \boxed{{\mathbb E}_Q{\operatorname{Var}}_{[0,t_a]}\mathcal K
 \le120K\epsilon_{\rm pre}<6\times10^{-18}.}

$$

 This is the physical clock-to-label error used in the periodic-current section. A global wave norm alone is not used as its replacement.
