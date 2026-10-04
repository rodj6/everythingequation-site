# Appendix B: Exact moment bound for the nonlinear witness

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Cc = C_c^\infty
\Cb = C_b^\infty
\diver = \operatorname{div}
\tr = \operatorname{tr}
\diag = \operatorname{diag}
\Sym = \operatorname{Sym}
\skw = \operatorname{skew}
\Sp = \operatorname{Sp}
\supp = \operatorname{supp}
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\calH = \mathcal H
\calD = \mathcal D
\bibfont = \small
-->

<a id="section-B"></a>

## B Exact moment bound for the nonlinear witness

<a id="app:witness"></a>

Set $\tau=R^{-2}$, $S=2x^2+4y^2$ in [(6.1)](/quantum-measurement/research/preparation-returns/equilibrium-uniqueness-and-an-explicit-witness#eq:witnessfg). Since $g_R=yf_R$, the product rule gives 

$$

 b_R=\bigl(0,e^{-\tau S}P_\tau\bigr),\qquad
 P_\tau=x^2-\tau x^4+\tau^2x^6+4\tau^2x^4y^2 .

$$

 All moments needed for $\|b_R-b_\infty\|_{L^2(r)}^2$ are finite Gaussian integrals: 

$$

 \mathbb E_r[x^{2p}y^{2q}e^{-j\tau S}]
   =\frac{(2p-1)!!(2q-1)!!}
      {2^p4^q(1+2j\tau)^{p+q+1}},\qquad (-1)!!=1.

$$

 Expanding the two finite polynomials yields 

$$
\begin{aligned}\|b_R-b_\infty\|_{L^2(r)}^2
    &=A(\tau)-2B(\tau)+\frac34,\\
 A(\tau)&=
 \frac{48+528\tau+3228\tau^2+8148\tau^3+17883\tau^4}
      {64(1+4\tau)^7},\\
 B(\tau)&=\frac{12+18\tau+123\tau^2}
                 {16(1+2\tau)^5}.
\end{aligned}
$$

 At $\tau=1/256$ this is the rational value $E$ displayed in [section 6](/quantum-measurement/research/preparation-returns/equilibrium-uniqueness-and-an-explicit-witness#sec:uniqueness). The strict estimate used there is certified by 

$$

 \frac1{576}-\frac{4E}{3}
 =\frac{261360546794830111543}
        {747189504563051511000000}>0 .

$$

 This calculation is an exact continuum integral, not a spectral cutoff or numerical trajectory approximation.
