# Appendix B: A small omitted source does not remove causal feedback

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-B"></a>

## B A small omitted source does not remove causal feedback

 <a id="p4s:sec:feedback"></a>



**Proposition B.1 (Retained high response and endpoint dressing).**

 <a id="p4s:prop:feedback"></a> For an admitted same-parent block evolution, suppose 

$$

 i u_L'=A_Lu_L+B^\dagger u_H+r_L,\qquad
 i u_H'=Du_H+Bu_L+r_H .

$$

 Then, with the true high-block propagator $U_H$, 

$$

 u_H(t)=U_H(t,0)u_H(0)
       -i\int_0^tU_H(t,s)\bigl(B(s)u_L(s)+r_H(s)\bigr)\,ds .

$$

 Thus the low equation retains an entrance term, the high source, and the retarded feedback kernel $-iB(t)^\dagger\int_0^tU_H(t,s)B(s)u_L(s)\,ds$. For a fixed $D\geq gI>0$ and absolutely continuous $F=Bu_L+r_H$, <a id="p4s:eq:high"></a>


$$
\begin{aligned}
 u_H(t)={}&e^{-itD}u_H(0)-D^{-1}F(t)
             +e^{-itD}D^{-1}F(0)\\
          &+D^{-1}\int_0^te^{-i(t-s)D}F'(s)\,ds .
\end{aligned}
$$

Equation (B.1).

 The last three terms have $D^{1/2}$ norm at most $g^{-1/2}(\|F(t)\|+\|F(0)\|+\int_0^t\|F'\|)$. 

 

**Proof.**

The first formula is variation of constants in the true high block. Substitution into the low equation gives the kernel and both other terms. Since $\partial_se^{-i(t-s)D}=iDe^{-i(t-s)D}$, integration by parts gives [(B.1)](/quantum-measurement/research/complete-current-estimates/appendix-b-a-small-omitted-source-does-not-remove-causal-feedback#p4s:eq:high); the spectral theorem bounds $\|D^{-1/2}\|\leq g^{-1/2}$. 

□



After removal of a constant real scalar frequency $\omega$, the relevant inverse is $(D-\omega)^{-1}$ and the temporal quantity is $F'+i\omega F$. A retained right clock must also be restored in that combination. An angular kinetic gap in a frozen model does not by itself prove the required gap of a full radial/source block.

The elementary two-level parent $H=\left(\begin{smallmatrix}0&b\\b&\Delta\end{smallmatrix}\right)$ already isolates the issue. With original state $(1,0)$ and no forcing, the high population is 

$$

 \frac{4b^2}{\Delta^2+4b^2}
 \sin^2\!\left(\tfrac12t\sqrt{\Delta^2+4b^2}\right).

$$

 This follows by subtracting $\Delta/2$ times the identity and squaring the remaining traceless matrix. An exactly zero high source therefore does not imply a zero high response. For a forced zero-entrance solution with source $(g_0,0)$ one instead has $u_H''(0)=-bg_0$, a separate causal counterexample.

In angular tensor applications a rank-two coupling connects both top bands $l=L-1,L$ to omitted $L+1,L+2$ unless a genuine parity restriction has been established. A concrete molecular application must identify its full tensor coupling, correlated entrance and local forcing bounds. Small forcing bounds do not replace $Bu_L$, its propagated angular/source derivatives, or the original entrance error in the formulas above. Coherent currents can respond at first order in a high amplitude while its population is second order: the current conversion must retain the cross terms even when the high population is small.
