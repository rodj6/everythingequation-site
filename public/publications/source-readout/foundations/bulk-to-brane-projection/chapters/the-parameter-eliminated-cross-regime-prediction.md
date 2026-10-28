# The parameter-eliminated cross-regime prediction

<div id="sec:crossregime">

</div>

Under the RS tuning $$
\Lambda_5=-\frac{6}{\ell^2},
\qquad
\lambda=\frac{6}{\kappa_5^2\ell},
\qquad
\kappa_4^2=\frac{\kappa_5^2}{\ell},\tag{81}$$ one also has $\lambda=6/(\kappa_4^2\ell^2)$, and [(39)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:constants) gives $\Lambda_4=\tfrac12\bigl(-6/\ell^2+\tfrac16\kappa_5^4\lambda^2\bigr)=0$ exactly, since $\kappa_5^4\lambda^2=\kappa_5^4\cdot36/(\kappa_5^4\ell^2)
=36/\ell^2$.

<div class="remark">

**Remark 7.1** (Status of $\Lambda_4$ below). The symbol $\Lambda_4$ retained in [(82)](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#eq:phenomB) is a *phenomenological* background term that may be fitted or supplied by a much smaller late-time brane energy component. It is not an independent parameter of the exactly tuned flat-brane theorem. Applying the coefficient relation on a weakly curved cosmological background requires $H\ell\ll1$ and negligible detuning corrections in the compared regime. See Section [15](/source-readout/bulk-to-brane-projection/scope-and-regime-of-validity#sec:failure), item 9.

</div>

Write the two independently measurable departures from four-dimensional GR, *without* using RS2 in the fits, as $$
H^2+\frac{k}{a^2}
=\frac{\Lambda_4}{3}+\frac{\kappa_4^2}{3}\rho
+B\rho^2+\frac{\mu}{a^4},\tag{82}$$ $$
\Phi(r)=-\frac{G_4M}{r}\Bigl(1+\frac{A_\Phi}{r^2}+\cdots\Bigr),
\qquad
\Psi(r)=-\frac{G_4M}{r}\Bigl(1+\frac{A_\Psi}{r^2}+\cdots\Bigr).\tag{83}$$

<div class="theorem">

**Theorem 7.2** (Cross-regime coefficient relation).

<div id="thm:crossregime">

</div>

*In minimal, exactly tuned, positive-tension RS2 with the regular retarded bulk state, the source calculation gives $$
B=\frac{\kappa_5^4}{36}=\frac{\kappa_4^4\ell^2}{36},
\qquad
A_\Phi=\frac{2\ell^2}{3},
\qquad
A_\Psi=\frac{\ell^2}{3},\tag{84}$$ and eliminating $\ell$ yields $$
\boxed{\;
A_\Psi=\tfrac12 A_\Phi,
\qquad
B=\frac{\kappa_4^4}{24}A_\Phi
=\frac{\kappa_4^4}{12}A_\Psi .
\;}\tag{85}$$*

</div>

<div class="proof">

*Proof.* $B=\kappa_5^4/36$ is read off from [(48)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:friedmann). Using $\kappa_5^2=\kappa_4^2\ell$ from [(79)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:G4) gives $\kappa_5^4=\kappa_4^4\ell^2$, hence $B=\kappa_4^4\ell^2/36$. The values $A_\Phi=2\ell^2/3$, $A_\Psi=\ell^2/3$ are read off from [(75)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:potentials). Eliminating, $\ell^2=3A_\Phi/2=3A_\Psi$, so $A_\Psi=A_\Phi/2$, and $B=\tfrac{\kappa_4^4}{36}\cdot\tfrac{3A_\Phi}{2}
=\tfrac{\kappa_4^4}{24}A_\Phi
=\tfrac{\kappa_4^4}{12}A_\Psi$. ◻

</div>

#### Dimensional consistency.

$[\kappa_4^2]=L^2$, $[A_\Phi]=L^2$, hence $[B]=L^4\cdot L^2=L^6$; and with $[\rho]=L^{-4}$, $[B\rho^2]=L^{6-8}=L^{-2}=[H^2]$, as required.

#### Scope, and what it does and does not do.

The relation [(85)](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#eq:crossregime) contains no unknown brane parameter once $G_4$ and the phenomenological coefficients are measured. It is independent of the dark-radiation constant $\mu$, whose $a^{-4}$ scaling is separable from $\rho^2$ when the matter equation of state and energy density are independently constrained. Its content is exact within its *intersecting* regimes:

- $B$ comes from the exact homogeneous thin-brane equation [(48)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:friedmann);

- $A_\Phi,A_\Psi$ are the leading terms of the controlled $r\gg\ell$ weak-field expansion [(75)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:potentials);

- the same $\ell$ and the same tuned source action govern both sectors;

- no fit of $\ell$ remains after the coefficients are compared.

A violation of either equality falsifies minimal classical RS2 under the stated assumptions. A statistically significant *nonzero* common signal satisfying both equalities is a parameter-saving, out-of-sample success for RS2 and favours it over pure four-dimensional GR in model comparison. It does *not* falsify a four-dimensional theory that independently parameterizes all three coefficients: such a theory fits either agreement or violation. Only a restricted alternative predicting an *incompatible* relation is excluded. Note also the all-zero limit: $A_\Phi=A_\Psi=B=0$ satisfies both equalities trivially and merely bounds $\ell$ from above. And even nonzero agreement does not establish that the five-dimensional variables are ontologically fundamental, as Section [11](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:opeq) proves.
