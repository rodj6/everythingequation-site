# Exact evaluation in the homogeneous sector

<div id="sec:frw">

</div>

Take an FRW brane and a perfect fluid, $$
ds_4^2=-dt^2+a(t)^2\,d\Sigma_k^2,
\qquad
T_{\mu\nu}=\rho\,u_\mu u_\nu+p\,h_{\mu\nu},
\qquad
h_{\mu\nu}=q_{\mu\nu}+u_\mu u_\nu,\tag{43}$$ with $u^\mu u_\mu=-1$. Then $T=-\rho+3p$ and $T_{\alpha\beta}T^{\alpha\beta}=\rho^2+3p^2$.

<div class="lemma">

**Lemma 5.1** (Perfect-fluid $\Pi_{\mu\nu}$).

<div id="lem:PiFRW">

</div>

*For [(43)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:frwansatz), [(37)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Pi) evaluates to $$
\boxed{\;
\Pi_{\mu\nu}
=\frac{\rho}{12}\Bigl[\rho\,u_\mu u_\nu+(\rho+2p)\,h_{\mu\nu}\Bigr].
\;}\tag{44}$$*

</div>

<div class="proof">

*Proof.* Direct substitution. In the rest frame, $T_{00}=\rho$, $T_{ij}=p\,q_{ij}$, and $$\Pi_{00}
=\frac{\rho^2}{4}
+\frac{(-\rho+3p)\rho}{12}
-\frac{\rho^2+3p^2}{8}
+\frac{(-\rho+3p)^2}{24}
=\frac{\rho^2}{12},$$ where the first term carries a $+$ sign because $-\tfrac14T_{0\beta}T_0{}^\beta
=-\tfrac14 T_{00}T_0{}^0=-\tfrac14\rho\cdot(-\rho)=+\tfrac14\rho^2$, and the third and fourth carry the signs induced by $q_{00}=-1$. Assembling the terms: $\tfrac{\rho^2}{4}
-\tfrac{\rho^2}{12}+\tfrac{p\rho}{4}
-\tfrac{\rho^2}{8}-\tfrac{3p^2}{8}
+\tfrac{\rho^2}{24}-\tfrac{p\rho}{4}+\tfrac{3p^2}{8}
=\rho^2\bigl(\tfrac14-\tfrac1{12}-\tfrac18+\tfrac1{24}\bigr)
=\tfrac{\rho^2}{12}$. Similarly $\Pi_{ij}=\tfrac{1}{12}\rho(\rho+2p)\,q_{ij}$. These are the $u_\mu u_\nu$ and $h_{\mu\nu}$ components of [(44)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:PiFRW). ◻

</div>

Homogeneity, isotropy, tracelessness, and [(42)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:bianchiE) (whose right-hand side vanishes in this sector because $\Pi_{\mu\nu}$ is a conserved perfect-fluid combination) force $$
E_{\mu\nu}=-\mathcal U(t)\Bigl(u_\mu u_\nu+\tfrac13h_{\mu\nu}\Bigr),
\qquad
\dot{\mathcal U}+4H\mathcal U=0
\quad\Longrightarrow\quad
\mathcal U(t)=\frac{3\mu}{a^4(t)} ,\tag{46}$$ where $\mu$ is a constant fixed by the bulk geometry ,  in an AdS–Schwarzschild realization, proportional to the bulk black-hole mass parameter \[[5](/source-readout/bulk-to-brane-projection/references#bib-Mukohyama1), [4](/source-readout/bulk-to-brane-projection/references#bib-BDEL)\]. It is *not* determined by the brane matter state.

The response is now fully evaluated: $$
\boxed{\;
\mathcal C^{\mathrm{RS}}_{00}
=\frac{\kappa_5^4}{12}\rho^2+\frac{3\mu}{a^4},
\qquad
\mathcal C^{\mathrm{RS}}_{ij}
=\Bigl[\frac{\kappa_5^4}{12}\rho(\rho+2p)+\frac{\mu}{a^4}\Bigr]q_{ij}.
\;}\tag{47}$$

<div class="proposition">

**Proposition 5.2** (Exact brane Friedmann equations).

<div id="prop:friedmann">

</div>

*For the model of Section [2](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#sec:model) with an FRW brane, conserved brane matter, and no bulk matter flux, $$
\boxed{\;
H^2+\frac{k}{a^2}
=\frac{\Lambda_4}{3}
+\frac{\kappa_4^2}{3}\rho
+\frac{\kappa_5^4}{36}\rho^2
+\frac{\mu}{a^4}.
\;}\tag{48}$$ Using $\kappa_4^2=\kappa_5^4\lambda/6$ this is equivalently $$
H^2+\frac{k}{a^2}
=\frac{\Lambda_4}{3}
+\frac{\kappa_4^2}{3}\rho\Bigl(1+\frac{\rho}{2\lambda}\Bigr)
+\frac{\mu}{a^4},\tag{49}$$ and, with $\dot\rho+3H(\rho+p)=0$, $$
\dot H-\frac{k}{a^2}
=-\frac{\kappa_4^2}{2}(\rho+p)\Bigl(1+\frac{\rho}{\lambda}\Bigr)
-\frac{2\mu}{a^4}.\tag{50}$$*

</div>

<div class="proof">

*Proof.* Take the $00$ component of [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS) with [(44)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:PiFRW)–[(46)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:EFRW). The Einstein tensor gives $G_{00}=3(H^2+k/a^2)$; the correction contributes $\kappa_5^4\Pi_{00}-E_{00}
=\tfrac{\kappa_5^4}{12}\rho^2+3\mu/a^4$. Dividing by $3$ gives [(48)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:friedmann). Substituting $\kappa_5^4=6\kappa_4^2/\lambda$ gives $\kappa_5^4\rho^2/36=\kappa_4^2\rho^2/(6\lambda)$, i.e. the $\rho^2/(2\lambda)$ term in [(49)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:friedmann2). Differentiating [(49)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:friedmann2) and eliminating $\dot\rho$ with conservation gives [(50)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:accel). ◻

</div>

The signs and scalings are fixed and physically transparent. Positive brane tension gives a *positive* $\rho^2$ correction, enhancing the expansion rate at high density. The Weyl contribution scales as radiation, but its magnitude is set by a bulk-state parameter, not by brane matter. For $\rho/\lambda\ll1$ and $\mu/a^4\ll H^2$, standard four-dimensional cosmology is recovered.

The homogeneous sector already exhibits the exact division between what the projection fixes and what it leaves open:

- the form and coefficient of the $\rho^2$ term are fixed once $\kappa_5$ and $\lambda$ are specified;

- the exponent $a^{-4}$ is fixed by symmetry and conservation alone;

- the constant $\mu$ is bulk initial/boundary data, undetermined by the brane matter state. It is not a prediction of the model without a bulk-state condition.
