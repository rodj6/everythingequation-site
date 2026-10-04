# Section 11: Reduced active law and periodic averaging

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

<a id="section-11"></a>

## 11 Reduced active law and periodic averaging

 Use the finite Hamiltonian and initial data of the periodic-model section. The recoil and auxiliary calculation above proves the exact relative dynamics and spectator reduction. The active initial reference density is 

$$

 q_0(X,Z,S)=\tfrac12|\gamma(Z-z_0)|^2|\varphi(S)|^2.

$$

 On the readiness box, $q_0>1/8$. Indeed $\exp((1.001)^2)<11/4$, $\sqrt\pi<9/5$, $Z_c<4/5$, and $2(11/4)(9/5)(4/5)<8$. Thus every active actual law is dominated by $16q_0$. This reference is only a proof measure.



**Lemma 11.1 (Periodic event averaging).**

<a id="ph:lem:avg"></a> Let $A$ be any measurable $h$-periodic subset of ${\mathbb T}_2$, with volume fraction $\theta$. For a normalized actual marginal $f_X$ of zero-extension variation at most $V_X$, 

$$

 |P_{f_X}(A)-\theta|\le\frac{hV_X}{8}=\frac{V_X}{4N}.

$$

 

 

**Proof.**

The mean-zero function ${\mathbf1}_A-\theta$ has an $h$-periodic primitive of oscillation at most $h\theta(1-\theta)$. Subtract its midrange value; its sup norm is at most $h\theta(1-\theta)/2\le h/8$. Integration by parts against the circular BV derivative proves the estimate. Its variation is bounded by the given zero-extension variation, including boundary jumps. No smoothness of the event boundary and no equilibrium actual law is needed. 

□
