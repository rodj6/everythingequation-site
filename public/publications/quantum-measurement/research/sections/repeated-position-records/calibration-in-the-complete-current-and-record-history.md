# Section 11: Calibration in the complete current and record history

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-11"></a>

## 11 Calibration in the complete current and record history

 <a id="p2s:sec:calibration"></a>

The exact-reset theorem is a positive result for its specified controls. Finite calibration changes both the active wave and its actual current. We give interfaces that keep those two effects distinct and retain every old receiver. Throughout this section oscillator coordinates have $H_0=-\Delta+|q|^2/4$, current $j=2\operatorname{Im}(\Psi^*\nabla\Psi)$, and normalized real stock $R(q)\propto e^{-|q|^2/4}$. The active variables may have an arbitrary Hilbert space of retained spectators as their fibre. All norms below include that fibre and its genuine positions.



<a id="section-11-1"></a>

### 11.1 A local current bound with a quadratic remainder

 

**Lemma 11.1 (Current localized at an actual boundary).**

 <a id="p2s:lem:localized"></a> Let $\Psi=\Phi+E$, $\|\Psi\|=1$, $\|\Phi\|\leq1$, and suppose the displayed first derivatives and moments are finite. For a band $B$ and $F(t,q)=n(t)\cdot q-s(t)$ with $|n|=1$, put 

$$

 \epsilon=\|E\|,\quad Z=\|\nabla E\|,\quad X=\||q|E\|,
 \qquad a=\|\mathbf1_B\Phi\|,\quad
 b=\|\mathbf1_B\nabla\Phi\|,\quad c=\|\mathbf1_B|q|\Phi\|.

$$

 Writing $\delta\rho=|\Psi|^2-|\Phi|^2$, $\delta j=j_\Psi-j_\Phi$, $N=|n'|$ and $S=|s'|$, one has <a id="p2s:eq:localized"></a>


$$
\begin{aligned}
 \int_B|\delta j\cdot n+\delta\rho(n'\cdot q-s')|
 &\leq2aZ+2\epsilon b+2\epsilon Z\\
 &\quad+N[2\min(\epsilon c,aX)+\epsilon X]
       +S[2\epsilon a+\epsilon^2].
\end{aligned}
$$

Equation (11.1).

 For every measurable endpoint set $D$, <a id="p2s:eq:population"></a>


$$

 \int_D|\Psi|^2\leq(\|\mathbf1_D\Phi\|+\epsilon)^2.

$$

Equation (11.2).

 

 

**Proof.**

Expand before integrating spectators: 

$$

 \delta j=2\operatorname{Im}
 (\Phi^*\nabla E+E^*\nabla\Phi+E^*\nabla E),\qquad
 \delta\rho=2\operatorname{Re}(\Phi^*E)+|E|^2.

$$

 Hilbert-space Cauchy–Schwarz gives the first line. In the linear position-weighted density term the weight can be assigned to either factor, giving the minimum; the quadratic term is bounded by $\epsilon X$. The scalar moving offset contributes the last bracket. The triangle inequality for $\|\mathbf1_D(\Phi+E)\|$ proves the endpoint estimate. No pointwise orthogonality between history components has been used. 

□



The plus sign in [(11.1)](/quantum-measurement/research/repeated-position-records/calibration-in-the-complete-current-and-record-history#p2s:eq:localized) is fixed by $\frac{d}{dt}F(t,Q_t)=F_t+\nabla F\cdot\dot Q_t$. It is the relative current through the moving level set. To convert this form estimate into a path statement, assume the complete equivariant flow and its crossing/area formula. Integrate through two disjoint offset bands of width $g$ and apply coarea. There is one predetermined offset in each band whose summed integrated absolute flux is at most the two-band integral divided by $g$. These planes are fixed analysis devices, selected from the wave, not from an observed trajectory. A path starting beyond its plane and never crossing it keeps the required sign. Apply the same argument at two fixed held-receiver bands, and charge entrance and endpoint ambiguous populations using [(11.2)](/quantum-measurement/research/repeated-position-records/calibration-in-the-complete-current-and-record-history#p2s:eq:population). The original cap multiplies the resulting reference path allowance once, by Proposition [10.2](/quantum-measurement/research/repeated-position-records/what-reset-preserves-full-laws-and-exact-counterexamples#p2s:prop:original).

Localization matters: the coefficient of the linear derivative error $Z$ is $a$, the small reference amplitude at the boundary. The unsuppressed quadratic term $2\epsilon Z$ remains. An endpoint norm alone controls neither term without a derivative bound. To obtain a numerical calibrated record theorem from this interface, one must supply the boundary-band amplitudes, derivative and moment errors, entrance and endpoint allowances, and the complete duration of the changed schedule. The exact-control 44-record bound does not by itself provide these perturbation data.



<a id="section-11-2"></a>

### 11.2 Active stock energy and actual archive motion

 

**Proposition 11.2 (A derivative bootstrap without a field-strain exponential).**

 <a id="p2s:prop:energy"></a> Let $D=\nabla-\nabla\log R$, $H_0-E_0=D^*D$, and let a real smooth field $w$ satisfy $\nabla\cdot(R^2w)=0$, $\|w\|_\infty\leq W$. On a pulse use $H(t)=H_0+g(t)L_w+H_{\rm rest}(t)$, where 

$$

 L_w=-i(w\cdot\nabla+\tfrac12\nabla\cdot w)=-iw\cdot D,

$$

 and $H_{\rm rest}$ acts only on the retained fibre. Assume the common form evolution and energy identity are justified on this domain. The projection $P=|R\rangle\langle R|\otimes I$ commutes with this evolution. If $\epsilon=\|(I-P)\Psi\|$ and $z=\|D\Psi\|$, then $\epsilon$ is constant and, for a pulse starting at $g(0)=0$, <a id="p2s:eq:bootstrap"></a>


$$

 \sup_{0\leq s\leq t}z(s)
 \leq z(0)+\epsilon W(\operatorname{Var}_{[0,t]}g+\|g\|_\infty).

$$

Equation (11.3).

 For two nonnegative single-hump pulses with maximum at most one this is $z\leq z_0+6W\epsilon$. Their complete current satisfies <a id="p2s:eq:relative-current"></a>


$$

 \int|j-gw\rho|\leq2z.

$$

Equation (11.4).

 

 

**Proof.**

Weighted divergence gives $L_wR=0$ and symmetry, hence $PL_w=L_wP=0$. The commutation and constant off-stock norm follow, including under the fibre evolution. Write $E=(I-P)\Psi$. Then $|\langle E,L_wE\rangle|\leq W\epsilon z$. The active energy $e=z^2+g\langle L_w\rangle$ obeys $e'=g'\langle L_w\rangle$; the spectator evolution cancels from this identity. A constant form shift first gives finite continuous $z$. For $M=\sup_{s\leq t}z(s)$, integration and the endpoint interaction term give $M^2\leq z_0^2+\epsilon W(\operatorname{Var}g+\|g\|_\infty)M$. If $M^2\leq z_0^2+cM$, its positive root is at most $z_0+c$, proving [(11.3)](/quantum-measurement/research/repeated-position-records/calibration-in-the-complete-current-and-record-history#p2s:eq:bootstrap). Each hump has variation at most two. Finally $j-gw\rho=2\operatorname{Im}(\Psi^*D\Psi)$, so Cauchy–Schwarz and normalization prove [(11.4)](/quantum-measurement/research/repeated-position-records/calibration-in-the-complete-current-and-record-history#p2s:eq:relative-current). 

□



If an inverse label $\eta_t$ for the reference pulse has derivative bound $B$ along the admitted tube, a unit-duration two-pulse reader therefore has expected reference-law label variation at most $2B(z_0+6W\epsilon)$. This is an actual-current comparison, rather than a conclusion from the endpoint wave. The homogeneous baker's proved single-module derivative estimate may supply $B$ on its stated tube; it cannot be silently applied to a many-cycle inverse.

During an interpulse interval, an error-bearing archive $y$ can move even though all other operations are quantum spectators. If $a_y=\partial_y+y/2$, then $\int|j_y|\leq2\|a_y\Psi\|$. The norm is conserved under the archive harmonic oscillator and arbitrary commuting rest unitaries. Since $\|\Phi'\|_\infty=1/\sqrt{2\pi}<0.4$, the Gaussian-quantile expected variation over duration $\Delta$ is at most $0.8\Delta\|a_y\Psi\|$. Pointwise archive immobility is therefore a special exact-stock fact, not a general consequence of spectator dynamics.



**Proposition 11.3 (One complete finite-calibration digit criterion).**

 <a id="p2s:prop:digits"></a> Use the same original complete cap $C$ and initial uniform reference archive quantile as in the inverse-digit construction. For reader $i$, suppose its entering active wave-density marginal differs from product Gaussian stock by TV at most $\epsilon_i$, its excluded exact-map collar has reference area $\beta_i$, and a valid stopped-tube calculation gives expected inverse-label error $L_i$. All expectations in these hypotheses use the true equivariant reference path law, before the original factor $C$ is applied. Let $A_i$ bound the expected archive-quantile variation after reader $i$ and before reader $i+1$; take $A_n=0$ when no later digit is read. Set $\widetilde L_i=L_i+A_i/2$. The factor $1/2$ expresses that intervening output drift is pulled back through the slope-two update $v^+=2v-s$. Suppose guards $0<t_i\leq h/8$ keep the completed-stage inverse inside its exact rectangles, whose extra guard collars have area at most $8t_i$. Then the probability of any wrong digit among $n$ reads is at most <a id="p2s:eq:digits"></a>


$$

 C\left[\sum_{i=1}^n(\beta_i+\epsilon_i)
 +\sum_{i=1}^n\left\{
       \frac{\widetilde L_i}{t_i}
       +(2^{n+2-i}+8)t_i\right\}\right].

$$

Equation (11.5).

 To this add the separately proved loader own-sign fees and calibrated receiver/whole-hold fees. A bound on the total then concerns the full joint history under the one original law. 

 

**Proof.**

The exact-map exclusions cost $C(\beta_i+\epsilon_i)$, with an additional $8Ct_i$ for the guard collars. Markov's inequality and original path domination charge inverse-label plus half interpulse displacement exceeding $t_i$ by $C\widetilde L_i/t_i$. On the remaining paths the inverse update is the dyadic shift with perturbation of size at most $t_i$ in its entering argument. Pulling successive perturbations back to the initial archive changes that argument by at most $S=\sum_i2^{1-i}t_i$. Every relevant digit boundary belongs to the level-$n$ grid. Its $S$-neighbourhood in the initial unit interval has measure at most $2^{n+1}S$, which is $\sum_i2^{n+2-i}t_i$. Charge this under the initial reference law and its original cap, not a record-conditioned law. Outside the union the digit history is unchanged. The additional loader and physical-record errors are whole-history events on the same path space, so the union bound adds their proved allowances. 

□

 The guard optimization for each term is $t_i=\min\{h/8,\sqrt{\widetilde L_i/(2^{n+2-i}+8)}\}$, with a limiting choice when the numerator is zero. This criterion retains interpulse current, guard loss, and the longer hold needed by a changed reset schedule. A non-discriminating upper bound from it is a limitation of that estimate; it is not an observed device failure.
