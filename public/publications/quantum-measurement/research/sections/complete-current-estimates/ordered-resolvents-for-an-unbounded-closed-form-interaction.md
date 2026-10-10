# Section 5: Ordered resolvents for an unbounded closed-form interaction

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-5"></a>

## 5 Ordered resolvents for an unbounded closed-form interaction

 <a id="p4f:sec:ordered"></a>



**Theorem 5.1 (Closed-form factor transfer and physical weights).**

 <a id="p4f:thm:ordered"></a> Let $A_0$ and $A=A_0+W^*JW$ be self-adjoint operators defined by closed semibounded forms on the same $\mathcal V$, with equivalent positive shifted form norms. Here $W:\mathcal V\to\mathcal H_{\rm aux}$ is bounded and $J=J^*$ is bounded on $\mathcal H_{\rm aux}$. The adjoint $W^*$ maps $\mathcal H_{\rm aux}$ to $\mathcal V^*$. Actual form closure is an assumption; a formal factorization alone does not supply it.

For $\zeta=E+i\eta$, $\eta>0$, set 

$$

 R_0=(A_0-\zeta)^{-1},\quad R=(A-\zeta)^{-1},\quad
 G_0=WR_0W^*,\quad G=WRW^* .

$$

 All products are bounded between the indicated form spaces, and <a id="p4f:eq:ordered"></a>


$$

 T=(I+JG_0)^{-1}=I-JG,\qquad
 RW^*=R_0W^*T,\qquad G=G_0T .

$$

Equation (5.1).

 In particular <a id="p4f:eq:imag"></a>
<a id="p4f:eq:physicalsandwich"></a>


$$
\begin{aligned}\operatorname{Im}G
   &=T^*(\operatorname{Im}G_0)T
     =\eta(RW^*)^*(RW^*), \\
 (RW^*)^*T_{\rm ph}(RW^*)
   &=T^*\big[(R_0W^*)^*T_{\rm ph}(R_0W^*)\big]T .
       
\end{aligned}
$$

Equation (5.2, 5.3).

 The second formula is an equality of bounded auxiliary-space forms for any positive closed physical form $T_{\rm ph}$ with $\mathcal V\subset\operatorname{Dom}T_{\rm ph}^{1/2}$ continuously. No commutation with $A_0,A,W$ or $J$ is required. 





**Proof.**

Choose $K_0=A_0+c_0\ge I$. The spectral theorem gives the exact identity <a id="p4f:eq:spectralsup"></a>


$$

 \|K_0^{1/2}R_0K_0^{1/2}\|
  =\sup_{\lambda\in\sigma(A_0)}
                  \frac{\lambda+c_0}{|\lambda-\zeta|}<\infty .

$$

Equation (5.4).

 Thus $R_0$ extends boundedly $\mathcal V^*\to\mathcal V$. The same argument with a positive shift of $A$ and equivalence of form norms gives this extension for $R$. Their form inverse identities therefore give both ordered resolvent identities 

$$

 R-R_0=-R_0W^*JWR=-RW^*JWR_0.

$$

 Sandwiching by $W,W^*$ yields $G-G_0=-G_0JG=-GJG_0$. It follows by multiplication in the displayed order that both products of $I+JG_0$ and $I-JG$ equal $I$. This proves invertibility and the formula for $T$. The first resolvent identity now gives $RW^*=R_0W^*(I-JG)$, proving [(5.1)](/quantum-measurement/research/complete-current-estimates/ordered-resolvents-for-an-unbounded-closed-form-interaction#p4f:eq:ordered).

For a self-adjoint resolvent, $\operatorname{Im}R=\eta R^*R$. The identity extends to dual inputs by continuity: both sides define bounded sesquilinear forms on $\mathcal V^*$, and Hilbert inputs are dense there. Sandwiching with $W^*$ proves the second equality in [(5.2)](/quantum-measurement/research/complete-current-estimates/ordered-resolvents-for-an-unbounded-closed-form-interaction#p4f:eq:imag). Substitution of $RW^*=R_0W^*T$ proves its first equality. The same substitution into the quadratic form of $T_{\rm ph}$ gives [(5.3)](/quantum-measurement/research/complete-current-estimates/ordered-resolvents-for-an-unbounded-closed-form-interaction#p4f:eq:physicalsandwich). Continuity of that form on $\mathcal V$ justifies each product even when $T_{\rm ph}$ is unbounded on $\mathcal H$. 

□



The resolvent inverse in this theorem exists off the real axis because the closed self-adjoint parents exist. A Neumann criterion is sufficient for a quantitative bound, not necessary for the identity: <a id="p4f:eq:neumann"></a>


$$

 \|JG_0\|\le\theta<1\quad\Longrightarrow\quad
                       \|T\|\le(1-\theta)^{-1}.

$$

Equation (5.5).

 If $LF^{-1}=W^*b$ with bounded $b$, an earned $\operatorname{Im}G_0/\pi\le s_{0,\eta}I$ implies 

$$

 \frac1\pi\operatorname{Im}
       [(LF^{-1})^*R(LF^{-1})]
 \le \frac{\|b\|^2s_{0,\eta}}{(1-\theta)^2}I

$$

 when its full form-dual sandwich is used. Likewise [(5.3)](/quantum-measurement/research/complete-current-estimates/ordered-resolvents-for-an-unbounded-closed-form-interaction#p4f:eq:physicalsandwich) transfers an earned physical-energy resolvent bound. Absorptive response alone does not replace that physical-energy bound. For a form-dual coupling this is first a resolvent sandwich: one uses the bounded near factors of Theorem [4.3](/quantum-measurement/research/complete-current-estimates/a-finite-spectral-window-with-a-varying-coherent-input#p4f:thm:hybrid), or the ordered temporal estimate below, rather than treating $LF^{-1}$ as a bounded Hilbert-space coupling without proof.

Equality in [(5.4)](/quantum-measurement/research/complete-current-estimates/ordered-resolvents-for-an-unbounded-closed-form-interaction#p4f:eq:spectralsup) is over the actual spectrum. Replacing it by a whole half-line above a spectral floor gives an upper bound, not in general an equality. Spectral gaps matter for that distinction, whereas the shift that makes $K_0$ positive does not create such gaps. At a real eigenvalue no inverse has been asserted. As $\eta$ decreases, genuine poles and thresholds may make both the baseline response and the quantitative inverse ceiling large.
