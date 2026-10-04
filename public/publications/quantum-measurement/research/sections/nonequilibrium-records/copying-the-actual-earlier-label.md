# Section 14: Copying the actual earlier label

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

<a id="section-14"></a>

## 14 Copying the actual earlier label

 Let $B_X$ be the union of the intervals at relative distances $h/5$ to $3h/10$ between adjacent zero and one wells. Let $H_X\in[0,1]$ be the quintic soft classifier, equal to the binary label outside these bands, with $|H_X'|\le20/h$.

During $[t_a,t_b]$, both $\Phi_i$ and $\partial_X\Phi_i$ vanish in these bands. Exact sector factorization gives 

$$

 Q(X_{t_a}\in B_X)\le D^2,
 \qquad
 {\mathbb E}_Q{\operatorname{Var}}_{[t_a,t_b]}H_X(X_t)\le\frac65DQ.

$$

 For clarity $Q$ in the last product denotes the fixed number $.003983$; ${\mathbb E}_Q$ denotes wave-reference expectation.

Use $I_0=[-8,8]$, $I_1=[16,32]$ and define 

$$

 G_{\rm mis}(x,z)=1-(1-H_X(x)){\mathbf1}_{I_0}(z)-H_X(x){\mathbf1}_{I_1}(z).

$$

 For any continuous paths, 

$$

 {\mathbf1}_{Z_{t_b}\notin I_{\ell(X_{t_a})}}
 \le{\mathbf1}_{B_X}(X_{t_a})+
 {\operatorname{Var}} H_X(X_t)+G_{\rm mis}(X_{t_b},Z_{t_b}).

$$

 The comparison writer has completed its drive for every retained offset at $t_b$ and its wrong-inner-region amplitude is below $10^{-12}$. With the exact auxiliary error $e_A<2\times10^{-13}$, 

$$

 {\mathbb E}_QG_{\rm mis}\le(D+e_A+10^{-12})^2.

$$

 

**Theorem 14.1 (Actual historical copy).**

<a id="ph:thm:copy"></a> Uniformly over the original actual class and all qubit inputs, 

$$

 \boxed{\epsilon_{\rm copy}
 =16\left[D^2+\frac65DQ+(D+2\times10^{-13}+10^{-12})^2\right]
 =.00222725479707774720002304.}

$$

 This bounds failure to copy the actual coupled relative rotor label at $1.22$ into the pointer at $1.28$. 

 The internal sector in this proof is an orthogonal wave component, not a sampled actual spin. On the full wave the pointer velocity depends on the actual relative rotor coordinate through its branch weights.
