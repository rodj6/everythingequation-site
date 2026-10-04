# Section 12: Rotor wave and velocity-weighted error

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

<a id="section-12"></a>

## 12 Rotor wave and velocity-weighted error

 In one sector write $z=(X-o)/h-i/2-d_i$, $\omega_i=\sqrt{g_i/\alpha}$, and $b_i=\cos(\omega_i t)$. Let $a_{\eta_t}$ be the unnormalized quintic taper: one on $|z|\le1/2-2\eta_t$, zero on $|z|\ge1/2-\eta_t$, and a $S_5$ transition between. The harmonic compact comparison carries amplitude $a_{\eta_t}(z/b_i)/\sqrt{2b_i}$ and phase $-\alpha K\omega_i\tan(\omega_it)z^2/2$ in each cell.

The physical initial wave is $1/\sqrt2$, so its initial error is not zero. Exact integrals give 

$$

 d_0^2=\frac{643\eta_t}{231},\quad
 A_1^2=\frac{20}{7\eta_t},\quad
 A_2^2=\frac{240}{7\eta_t^3},\quad
 A_3^2=\frac{1440}{\eta_t^5}.

$$

 The comparison lies in the quadratic potential core whenever it is used. Its residual norm is $A_2/(2\alpha Kb_i^2)$.



**Lemma 12.1 (Finite rotor comparison).**

<a id="ph:lem:rotor"></a> Through capture time $t_b=1.28$, let $r_i$ be the exact rigid-sector wave. Then 

$$

 {\left\lVert{r_i-\Phi_i}\right\rVert}\le d_0+\epsilon_R=:d,
 \qquad \epsilon_R=\frac{2A_2}{.999K},

$$

 

$$

 \frac{{\left\lVert{p_X(r_i-\Phi_i)}\right\rVert}}{mh}
 \le \frac{A_1}{.999K}+.501d_0+\frac{4.02A_3}{K^2}
                +1.002\epsilon_R=:q.

$$

 For the selected row, $d<D=.007233$ and $q<Q=.003983$. 

 

**Proof.**

The residual norm integral uses $\omega_it<1.3$ and $\tan1.3<4$. The static nonnegative rotor Hamiltonian propagates its own square-root norm. Multiplying that estimate by $\sqrt{2/(\alpha K)}$ gives the initial derivative contribution $A_1/(\alpha K)+\omega_i d_0/2$. Differentiating the residual introduces $A_3/(2\alpha^2K^2b_i^3)$ and its harmonic phase derivative; the potential part adds the same $\omega_i/2$ residual bound. Integrate with $\int_0^{1.3}\sec^3\theta\,d\theta<8$, $\omega_i<1.002$, and $4/(\alpha^2\omega_i)<4.02$. Weak $H^3$ taper derivatives suffice; no fourth derivative of the sharp taper is invoked. The outward rational square-root calculation in Appendix [A](/quantum-measurement/research/nonequilibrium-records/appendix-a-explicit-estimates-for-the-periodic-apparatus#app:periodic) proves the final decimals. 

□



At $t_a=1.22$, each $\Phi_i$ is supported in its own outcome region even with $|d_i|\le.01$. The wrong-side wave probability is at most $D^2$. For the isolated spinor rotor, the guidance map commutes with $X\mapsto X+h$. The initial preimage of the classifier is therefore periodic, including its circle circulation. Lemma [11.1](/quantum-measurement/research/nonequilibrium-records/reduced-active-law-and-periodic-averaging#ph:lem:avg) and the wrong-side estimate yield the actual isolated-label error 

$$

 |P(\ell(X^{\rm iso}_{t_a})=1)-p|\le\frac1{2N}+D^2.

$$
