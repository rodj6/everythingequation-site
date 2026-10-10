# Section 11: The quantitative cost of the anisotropic continuity route

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-11"></a>

## 11 The quantitative cost of the anisotropic continuity route

 <a id="p3d:sec:quantitative"></a>



**Proposition 11.1 (A flat embedding bound with the physical factors retained).**

 <a id="p3d:prop:quantitative"></a> Let a localized extension $u$ on one radial and seven tangent Euclidean coordinates satisfy $\|u\|_2\leq e$ and $\|u\|_{H^2_rH^4_{\rm tan}}\leq M$. With unitary Fourier convention and $\theta=15/16$, <a id="p3d:eq:quantitative"></a>


$$

 \|u\|_\infty\leq C_\theta e^{1/16}M^{15/16},\qquad
 C_\theta^2\leq\frac{15}{616\pi^5}<10^{-4}.

$$

Equation (11.1).

 On physical charts the localization, extension, coordinate Jacobian and any half-density constants must multiply this flat bound. 

 

**Proof.**

Fourier Hölder bounds the $H^{2\theta}_rH^{4\theta}_{\rm tan}$ norm by $e^{1-\theta}M^\theta$. Cauchy in the evaluation integral gives 

$$

 C_\theta^2=(2\pi)^{-8}I_1(2\theta)I_7(4\theta),\qquad
 I_m(s)=\int_{\mathbb R^m}(1+|\xi|^2)^{-s}d\xi .

$$

 The strict thresholds are $2\theta>1/2$ and $4\theta>7/2$. For the displayed rational upper bound no special-function evaluation is needed. Splitting each integral at radius one, 

$$

 I_1(15/8)\leq2(1+4/11)=30/11,\qquad
 I_7(15/4)\leq |S^6|(1/7+2)=16\pi^3/7.

$$

 Here $|S^6|=16\pi^3/15$. Multiplying and dividing by $(2\pi)^8$ gives $15/(616\pi^5)$; the elementary lower bound $\pi>3.14$ proves it is below $10^{-4}$. 

□



For two waves, the density difference obeys $\|\rho-\widetilde\rho\|_\infty
\leq(\|\psi\|_\infty+\|\widetilde\psi\|_\infty)
       \|\psi-\widetilde\psi\|_\infty$. Thus the genuine product graphs can supply a common positive-density tube for Theorem [5.1](/quantum-measurement/research/reference-weighted-flows/whole-history-stability-in-a-positive-density-tube#p3f:thm:stability). They supply only the slow error exponent $1/16$ in the eight-coordinate case. The compact COM radius enters the tangent ellipticity constant; physical source widths enter the profile derivatives; chart and extension factors remain; and the propagated graph constants can be large. The flat number below $0.01$ is consequently not a numerical record-error certificate or a small physical stability coefficient. It is the explicit analytic link between an attained common-form/graph comparison and the positive-tube hypothesis of the whole-history theorem.
