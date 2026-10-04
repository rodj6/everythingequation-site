# Appendix D: A finite-time Gaussian pointer

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Sch = \mathcal S
\Cc = C_c^\infty
\Pcal = \mathcal P
\Acal = \mathcal A
\dd = \,dq
\diver = \operatorname{div}
\supp = \operatorname{supp}
\tr = \operatorname{tr}
\Id = I
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\Born = \frac{\Psi^\dagger\Psi}{\norm{\Psi}_2^2}
\CU = \mathrm{CC}
-->

<a id="section-D"></a>

## D A finite-time Gaussian pointer

<a id="app:pointer"></a>

A simple effective measurement model illustrates exact propagation and controlled record overlap. Let a two-level label $Z$ have eigenvalues $\pm1$, and let a scalar pointer $y$ of mass $M$ have 

$$

 H(t)=-\frac{1}{2M}\partial_y^2-F(t)yZ,\qquad
 \chi_0(y)=(2\pi\sigma^2)^{-1/4}e^{-y^2/(4\sigma^2)},

$$

 with real smooth $F$ on a finite interval. This is a specified effective apparatus coupling; its unbounded linear profile is not being identified with the compact preparation controls in [theorem 6.1](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#thm:spin).

Define 

$$

 d(t)=\frac1M\int_0^t(t-s)F(s)\,ds,\qquad
 s(t)=\sigma\sqrt{1+\left(\frac{t}{2M\sigma^2}\right)^2}.

$$

 If $\chi_{\rm free}$ is the free evolution of $\chi_0$, direct substitution gives the two exact packets 

$$

 \chi_\pm(y,t)=
 \exp\!\left[i\left(\pm M\dot d(t)y
            -\frac M2\int_0^t\dot d(s)^2\,ds\right)\right]
       \chi_{\rm free}(y\mp d(t),t).

$$

 Their position densities are Gaussians of variance $s(t)^2$, centered at $\pm d(t)$. This formula supplies a unitary finite-time propagator by translations, phases, and free evolution, preserving Schwartz states.

For the initial spinor $c_+|+\rangle+c_-|-\rangle$, put $w_\pm=|c_\pm|^2$, with $w_++w_-=1$. The joint norm density is $r=w_+|\chi_+|^2+w_-|\chi_-|^2>0$. The branch velocities are 

$$

 v_\pm=\pm\dot d+\frac{\dot s}{s}(y\mp d).

$$

 The actual velocity is their local density-weighted mean. With $a=\dot s/s$, 

$$

 |v(y,t)|\le |a(t)|\,|y|+|\dot d(t)-a(t)d(t)|.

$$

 For an explicit derivative bound, put $\lambda=w_+|\chi_+|^2/r$. Then 

$$

 \partial_y\lambda=\frac{2d}{s^2}\lambda(1-\lambda),\qquad
 |\partial_yv|\le |a|+\frac{|d(\dot d-ad)|}{s^2}.

$$

 The formulas also hold at $w_+=0$ or $w_-=0$ by the constant-weight limits. Since $s\ge\sigma>0$, this derivative and the linear-growth coefficients are bounded on every fixed finite interval. The guidance equation therefore has a complete all-point flow on that interval. To avoid a collision with the force notation, write its cumulative density as $\mathcal F_t$; the continuity equation and zero flux at infinity give $\mathcal F_t(Y_t)=\mathcal F_0(Y_0)$.

At a readout time with $d(T)>0$, take $y>0$ to record $+$. If $\Phi_{\rm G}$ denotes the standard normal distribution function, set 

$$

 e_T=\Phi_{\rm G}(-d(T)/s(T)).

$$

 Joint equilibrium gives 

$$

 \Pr(+)=w_+(1-e_T)+w_-e_T,\qquad
 |\Pr(+)-w_+|\le e_T.

$$

 The packets need not have disjoint support. The error is explicitly controlled, while both the wavefunction evolution and the guidance calculation are exact.
