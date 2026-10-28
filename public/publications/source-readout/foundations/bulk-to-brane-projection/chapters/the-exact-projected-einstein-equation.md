# The exact projected Einstein equation

<div id="sec:projected">

</div>

## Israel junction condition

Let the brane surface stress tensor be $$
S_{\mu\nu}=-\lambda q_{\mu\nu}+T_{\mu\nu},
\qquad
S\equiv q^{\mu\nu}S_{\mu\nu}=-4\lambda+T .\tag{22}$$ The Israel condition \[[3](/source-readout/bulk-to-brane-projection/references#bib-Israel)\] for a thin shell in five dimensions is $$
[K_{\mu\nu}]\equiv K^+_{\mu\nu}-K^-_{\mu\nu}
=-\kappa_5^2\Bigl(S_{\mu\nu}-\tfrac13q_{\mu\nu}S\Bigr),\tag{23}$$ the factor $\tfrac13$ being $1/(D-2)$ with $D=5$. Imposing the RS2 $Z_2$ reflection symmetry gives $K^+_{\mu\nu}=-K^-_{\mu\nu}$, so $[K_{\mu\nu}]=2K_{\mu\nu}$ evaluated with the outward normal on one side, and hence $$
\boxed{\;
K_{\mu\nu}
=-\frac{\kappa_5^2}{2}
\Bigl[\,T_{\mu\nu}+\tfrac13(\lambda-T)q_{\mu\nu}\,\Bigr].
\;}\tag{24}$$ Indeed, $S_{\mu\nu}-\tfrac13q_{\mu\nu}S
=T_{\mu\nu}-\lambda q_{\mu\nu}
-\tfrac13q_{\mu\nu}(T-4\lambda)
=T_{\mu\nu}+\tfrac13q_{\mu\nu}(\lambda-T)$, which gives [(24)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Kfixed) on halving. Traces: $$
K=q^{\mu\nu}K_{\mu\nu}
=-\frac{\kappa_5^2}{2}\Bigl[T+\tfrac43(\lambda-T)\Bigr]
=-\frac{\kappa_5^2}{2}\Bigl[\tfrac43\lambda-\tfrac13T\Bigr]
=-\frac{\kappa_5^2}{6}\bigl(4\lambda-T\bigr).\tag{25}$$

Thus, under $Z_2$ symmetry, the extrinsic curvature is fixed *algebraically* by the brane stress tensor. This is precisely why the quadratic correction below descends to brane data while the projected Weyl tensor does not.

## Gauss–Codazzi projection

<div id="sec:gauss">

</div>

The Gauss equation for the embedding is $$
{}^{(4)}R_{\mu\nu\rho\sigma}
={}^{(5)}R_{ABCD}\,
e^A{}_\mu e^B{}_\nu e^C{}_\rho e^D{}_\sigma
+K_{\mu\rho}K_{\nu\sigma}-K_{\mu\sigma}K_{\nu\rho}.\tag{26}$$ Decompose the five-dimensional Riemann tensor into Weyl and Ricci parts, $$
{}^{(5)}R_{ABCD}
={}^{(5)}C_{ABCD}
+\tfrac23\bigl(g_{A[C}{}^{(5)}R_{D]B}
-g_{B[C}{}^{(5)}R_{D]A}\bigr)
-\tfrac16\,{}^{(5)}R\,g_{A[C}g_{D]B},\tag{27}$$ and use [(5)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:bulkEE), which gives ${}^{(5)}R_{AB}=\tfrac23\Lambda_5g_{AB}$ and ${}^{(5)}R=\tfrac{10}{3}\Lambda_5$ away from the brane. Define the electric projection of the bulk Weyl tensor, $$
E_{\mu\nu}:={}^{(5)}C_{ABCD}\,
n^Ae^B{}_\mu\,n^Ce^D{}_\nu ,\tag{28}$$ which is symmetric and traceless, $q^{\mu\nu}E_{\mu\nu}=0$, by the trace identities of the Weyl tensor and $n\cdot n=1$.

Contracting [(26)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:gauss) twice and substituting [(27)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:weyldecomp) yields the well-known intermediate identity $$
G_{\mu\nu}
=-\tfrac12\Lambda_5q_{\mu\nu}
+Q_{\mu\nu}(K)-E_{\mu\nu},\tag{29}$$ where the complete extrinsic-curvature contribution is $$
Q_{\mu\nu}(K)
=KK_{\mu\nu}-K_{\mu\beta}K_\nu{}^\beta
-\tfrac12q_{\mu\nu}\bigl(K^2-K_{\alpha\beta}K^{\alpha\beta}\bigr).\tag{30}$$

We now insert [(24)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Kfixed) into [(30)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:QK). Write $K_{\mu\nu}=-\tfrac{\kappa_5^2}{2}\bigl(T_{\mu\nu}+\alpha q_{\mu\nu}\bigr)$ with $\alpha\equiv\tfrac13(\lambda-T)$, so that $K=-\tfrac{\kappa_5^2}{2}(T+4\alpha)$. Then $$\begin{aligned}
KK_{\mu\nu}
&=\frac{\kappa_5^4}{4}\bigl(T+4\alpha\bigr)
\bigl(T_{\mu\nu}+\alpha q_{\mu\nu}\bigr),
\qquad\text{(31)}\\
K_{\mu\beta}K_\nu{}^\beta
&=\frac{\kappa_5^4}{4}
\bigl(T_{\mu\beta}T_\nu{}^\beta
+2\alpha T_{\mu\nu}+\alpha^2q_{\mu\nu}\bigr),
\qquad\text{(32)}\\
K^2
&=\frac{\kappa_5^4}{4}\bigl(T+4\alpha\bigr)^2,
\qquad
K_{\alpha\beta}K^{\alpha\beta}
=\frac{\kappa_5^4}{4}
\bigl(T_{\alpha\beta}T^{\alpha\beta}
+2\alpha T+4\alpha^2\bigr).
\qquad\text{(33)}
\end{aligned}$$ Substituting [(31)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:KK1)–[(33)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:KK3) directly into [(30)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:QK), without yet using the value of $\alpha$, gives the unsimplified expression $$
\begin{aligned}
Q_{\mu\nu}
=\frac{\kappa_5^4}{4}\Bigl[
&\bigl(T+4\alpha\bigr)\bigl(T_{\mu\nu}+\alpha q_{\mu\nu}\bigr)
-\bigl(T_{\mu\beta}T_\nu{}^\beta
+2\alpha T_{\mu\nu}+\alpha^2q_{\mu\nu}\bigr)\\
&-\tfrac12 q_{\mu\nu}
\bigl(\bigl(T+4\alpha\bigr)^2
-T_{\alpha\beta}T^{\alpha\beta}
-2\alpha T-4\alpha^2\bigr)
\Bigr].
\end{aligned}\tag{34}$$ Expanding and collecting on the independent structures $T_{\mu\nu}$, $T_{\mu\beta}T_\nu{}^\beta$, and $q_{\mu\nu}$: $$
Q_{\mu\nu}
=\frac{\kappa_5^4}{4}\Bigl[
\bigl(T+2\alpha\bigr)T_{\mu\nu}
-T_{\mu\beta}T_\nu{}^\beta
+q_{\mu\nu}\Bigl(
\tfrac12 T_{\alpha\beta}T^{\alpha\beta}
-\tfrac12 T^2
-2\alpha T
-3\alpha^2
\Bigr)\Bigr].\tag{35}$$ Indeed, the $q_{\mu\nu}$ coefficient collects $\alpha(T+4\alpha)-\alpha^2
-\tfrac12\bigl(T^2+8\alpha T+16\alpha^2
-T_{\alpha\beta}T^{\alpha\beta}-2\alpha T-4\alpha^2\bigr)
=\tfrac12 T_{\alpha\beta}T^{\alpha\beta}-\tfrac12T^2-2\alpha T-3\alpha^2$, while the $T_{\mu\nu}$ coefficient collects $(T+4\alpha)-2\alpha=T+2\alpha$.

Now restore $\alpha=\tfrac13(\lambda-T)$ in [(35)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Qsimplified) and collect by powers of $\lambda$. The $T_{\mu\nu}$ coefficient becomes $T+\tfrac23(\lambda-T)=\tfrac13T+\tfrac23\lambda$, contributing $\tfrac{\kappa_5^4}{4}\bigl(\tfrac13 T T_{\mu\nu}
+\tfrac23\lambda T_{\mu\nu}\bigr)
=\tfrac{\kappa_5^4}{12}TT_{\mu\nu}+\tfrac{\kappa_5^4\lambda}{6}T_{\mu\nu}$. The $q_{\mu\nu}$ coefficient becomes $\tfrac12 T_{\alpha\beta}T^{\alpha\beta}-\tfrac12T^2
-\tfrac23(\lambda-T)T-\tfrac13(\lambda-T)^2
=\tfrac12T_{\alpha\beta}T^{\alpha\beta}-\tfrac16T^2-\tfrac13\lambda^2$, contributing $\tfrac{\kappa_5^4}{8}q_{\mu\nu}T_{\alpha\beta}T^{\alpha\beta}
-\tfrac{\kappa_5^4}{24}q_{\mu\nu}T^2
-\tfrac{\kappa_5^4\lambda^2}{12}q_{\mu\nu}$. Together with the $-\tfrac{\kappa_5^4}{4}T_{\mu\beta}T_\nu{}^\beta$ term this is exactly $$
\boxed{\;
Q_{\mu\nu}
=-\frac{\kappa_5^4\lambda^2}{12}\,q_{\mu\nu}
+\frac{\kappa_5^4\lambda}{6}\,T_{\mu\nu}
+\kappa_5^4\,\Pi_{\mu\nu},
\;}\tag{36}$$ with $$
\boxed{\;
\Pi_{\mu\nu}
=-\tfrac14 T_{\mu\beta}T_\nu{}^\beta
+\tfrac1{12}\,T\,T_{\mu\nu}
+\tfrac18\,q_{\mu\nu}T_{\alpha\beta}T^{\alpha\beta}
-\tfrac1{24}\,q_{\mu\nu}T^2 .
\;}\tag{37}$$ No cross terms are dropped and no $\lambda$-dependence is hidden in the purely quadratic part: all $\lambda^2$ dependence enters through $-\tfrac13\lambda^2$ in the $q_{\mu\nu}$ coefficient, and all $\lambda T$ dependence through $\tfrac23\lambda$ in the $T_{\mu\nu}$ coefficient.

Substituting [(36)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Qsorted) into [(29)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Gintermediate) gives the Shiromizu–Maeda–Sasaki equation \[[2](/source-readout/bulk-to-brane-projection/references#bib-SMS)\]: $$
\boxed{\;
G_{\mu\nu}[q]
=-\Lambda_4\,q_{\mu\nu}
+\kappa_4^2\,T_{\mu\nu}
+\kappa_5^4\,\Pi_{\mu\nu}
-E_{\mu\nu},
\;}\tag{38}$$ with $$
\boxed{\;
\Lambda_4=\tfrac12\Bigl(\Lambda_5+\tfrac16\kappa_5^4\lambda^2\Bigr),
\qquad
\kappa_4^2=8\pi G_4=\tfrac16\kappa_5^4\lambda .
\;}\tag{39}$$ Equivalently, writing the equation in the form $G_{\mu\nu}+\Lambda_4q_{\mu\nu}=\kappa_4^2T_{\mu\nu}
+\mathcal C^{\mathrm{RS}}_{\mu\nu}$, the RS2 realization of the source-induced metric response is $$
\boxed{\;
\mathcal C^{\mathrm{RS}}_{\mu\nu}
=\kappa_5^4\,\Pi_{\mu\nu}-E_{\mu\nu}.
\;}\tag{40}$$

Every coefficient in [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS)–[(40)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:CRS) follows from the action [(3)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:action), the junction condition [(23)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:israel), and the Gauss identity [(26)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:gauss). Dimensions are consistent: $[\kappa_5^4]=L^6$, $[T_{\mu\nu}T^{\mu\nu}]=L^{-8}$, so $[\kappa_5^4\Pi]=L^{-2}=[E_{\mu\nu}]=[G_{\mu\nu}]$.

<div class="remark">

**Remark 4.1** (The superscript is not decorative). The tensor [(40)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:CRS) is *not* predicted by any abstract source/readout considerations. It is the response obtained after choosing five-dimensional Einstein gravity, the RS2 brane action, the $Z_2$ junction condition, and the stated source domain. Other source models induce different response tensors.

</div>

## Conservation, Bianchi, and nonclosure

<div id="sec:conservation">

</div>

With no exchange of matter energy into the bulk, the Codazzi equation $D^\mu\bigl(K_{\mu\nu}-Kq_{\mu\nu}\bigr)
={}^{(5)}R_{AB}n^Ae^B{}_\nu=\tfrac23\Lambda_5\,n_Ae^A{}_\nu=0$ combined with [(24)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Kfixed) gives $$
\nabla^\mu T_{\mu\nu}=0 .\tag{41}$$ Applying the four-dimensional contracted Bianchi identity $\nabla^\mu G_{\mu\nu}=0$ to [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS) then yields $$
\boxed{\;
\nabla^\mu E_{\mu\nu}
=\kappa_5^4\,\nabla^\mu\Pi_{\mu\nu}.
\;}\tag{42}$$

This is the exact nonclosure statement in local form. Equation [(42)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:bianchiE) fixes the *divergence* of $E_{\mu\nu}$, which is four of its components’ worth of information, but leaves its transverse-traceless content ,  precisely the free bulk gravitational response ,  undetermined by brane data. The projected system [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS)–[(42)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:bianchiE) is covariantly consistent but is not in general a closed four-dimensional initial-value system. This is the tensorial counterpart of Proposition [3.1](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#prop:witness): the wave packet of Section [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness) supplies two solutions with identical instantaneous brane data and different later $E_{\mu\nu}$.
