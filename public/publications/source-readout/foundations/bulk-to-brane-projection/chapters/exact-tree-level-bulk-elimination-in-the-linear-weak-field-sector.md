# Exact tree-level bulk elimination in the linear weak-field sector

<div id="sec:linear">

</div>

The homogeneous sector evaluates the nonlinear local response but hides the spectral structure of the eliminated bulk gravitons. That structure is explicit at linear order \[[1](/source-readout/bulk-to-brane-projection/references#bib-RS2), [6](/source-readout/bulk-to-brane-projection/references#bib-GarrigaTanaka), [7](/source-readout/bulk-to-brane-projection/references#bib-GKR)\].

## Bulk perturbation equation, brane bending, and the boundary condition

<div id="sec:bending">

</div>

In Randall–Sundrum gauge, a TT perturbation of the background [(11)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:background) obeys $$
\Bigl[
e^{2|y|/\ell}\,\Box_4
+\partial_y^2-\frac{4}{\ell^2}
+\frac{4}{\ell}\,\delta(y)
\Bigr]h^{\mathrm{TT}}_{\mu\nu}
=-2\kappa_5^2\,\Sigma^{\mathrm{TT}}_{\mu\nu}\,\delta(y).\tag{51}$$ The source $\Sigma_{\mu\nu}$ contains the brane stress tensor *and* the brane-bending contribution required by the junction condition. In the Garriga–Tanaka convention \[[6](/source-readout/bulk-to-brane-projection/references#bib-GarrigaTanaka)\], $$
\boxed{\;
\Sigma_{\mu\nu}
=T_{\mu\nu}-\tfrac13\eta_{\mu\nu}T
+\frac{2}{\kappa_5^2}\,\partial_\mu\partial_\nu\hat\xi^5,
\qquad
\Box_4\hat\xi^5=\frac{\kappa_5^2}{6}\,T .
\;}\tag{52}$$ The bending equation makes $\Sigma^\mu{}_\mu=0$: indeed $\eta^{\mu\nu}\Sigma_{\mu\nu}
=T-\tfrac43T+\tfrac{2}{\kappa_5^2}\Box_4\hat\xi^5
=-\tfrac13T+\tfrac13T=0$. Together with $\partial^\mu T_{\mu\nu}=0$ it also gives $\partial^\mu\Sigma_{\mu\nu}=0$, as RS gauge requires.

Brane bending is not an optional refinement. It is the statement that the brane, being a dynamical surface, is displaced from $y=0$ in RS gauge by the presence of matter; restoring the Gaussian-normal frame adapted to the physical brane produces, up to a tangential gauge transformation, $$
\bar h_{\mu\nu}
=h_{\mu\nu}
+\ell\,\partial_\mu\partial_\nu\hat\xi^5
+\frac{2}{\ell}\,\eta_{\mu\nu}\hat\xi^5
-\partial_{(\mu}\hat\xi_{\nu)} .\tag{53}$$ Decomposing $h_{\mu\nu}=h^{(m)}_{\mu\nu}+h^{(\xi)}_{\mu\nu}$ into the part sourced by $T_{\mu\nu}-\tfrac13\eta_{\mu\nu}T$ and the part sourced by the bending term, and choosing the tangential gauge to cancel the pure gradient pieces, the brane value reduces to $$
\boxed{\;
\bar h_{\mu\nu}
=h^{(m)}_{\mu\nu}
+\frac{2}{\ell}\,\eta_{\mu\nu}\,\hat\xi^5 .
\;}\tag{54}$$ This single term converts the apparent $\tfrac13$ trace coefficient of the RS-gauge source into the four-dimensional massless $\tfrac12$ coefficient in the zero-mode response ,  as Section [6.3](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:projectors) makes explicit. Omitting brane bending, or using the wrong trace coefficient, produces a graviton that is not the four-dimensional graviton and gives the wrong light-bending prediction.

The retarded Green function imposes causal response; regularity, i.e. absence of incoming radiation from the AdS horizon, selects the forced solution. If arbitrary incoming bulk radiation is admitted, a homogeneous solution must be added; *that homogeneous term is exactly the initial-state contribution associated with the same-readout fiber of Section [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness)*. The two constructions are the same physics seen twice.

## Brane-to-brane propagator: zero mode and KK continuum

<div id="sec:propagator">

</div>

The brane-to-brane retarded Green function of [(51)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bulkwave) has the spectral resolution $$
\boxed{\;
\begin{aligned}
G_R(p;0,0)
&=G_R^{(0)}(p)+G_R^{(\mathrm{KK})}(p),\\
G_R^{(0)}(p)
&=-\frac{1}{\ell}\,
\frac{1}{-(\omega+i0^+)^2+\mathbf k^2},\\
G_R^{(\mathrm{KK})}(p)
&=-\int_0^\infty dm\,
\frac{u_m(0)^2}{m^2-(\omega+i0^+)^2+\mathbf k^2} .
\end{aligned}
\;}\tag{55}$$ The normalized continuum modes of the transverse operator are Bessel combinations, and their brane value gives the spectral weight $$
\boxed{\;
u_m(0)^2
=\frac{2}{\pi^2 m\ell\bigl[J_1^2(m\ell)+Y_1^2(m\ell)\bigr]} .
\;}\tag{56}$$ Using the small-argument behavior $J_1(x)\simeq x/2$ and $Y_1(x)\simeq-2/(\pi x)$, one has $J_1^2+Y_1^2\simeq 4/(\pi^2x^2)$, hence $$
u_m(0)^2
=\frac{m\ell}{2}
+O\bigl((m\ell)^3\log(m\ell)\bigr),
\qquad m\ell\ll1 .\tag{57}$$

Two structural facts follow. The first term in [(55)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:GR) is the normalizable four-dimensional graviton zero mode: an isolated massless pole. The second is a *continuum* of physical KK modes with nonnegative spectral density $u_m(0)^2\ge0$, producing a branch cut beginning at threshold $m=0$.

<div class="remark">

**Remark 6.1** (What the branch cut does and does not exclude).

<div id="rem:cut">

</div>

A finite-dimensional classical linear system, or a finite set of free fields with a finite-order quadratic action evaluated at tree level, has only a finite rational pole structure and cannot reproduce [(55)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:GR)–[(56)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:um) exactly. It does *not* follow that every four-dimensional theory is excluded. An interacting four-dimensional field theory, a nonlocal theory, an infinite tower, a continuum of fields, or a conformal sector reproduces a branch cut without difficulty ,  multiparticle thresholds generically produce cuts. See Sections [10](/source-readout/bulk-to-brane-projection/the-strongest-conventional-four-dimensional-description#sec:fourdim) and [15](/source-readout/bulk-to-brane-projection/scope-and-regime-of-validity#sec:failure), item 8.

</div>

## Tensor projectors and the response operator

<div id="sec:projectors">

</div>

At linear order the bulk gravitational action is quadratic. Integration over bulk modes is therefore Gaussian, and the resulting Schur complement is *exact at tree level*. We first retain the tensor structure that distinguishes the massless graviton from the massive continuum.

For four-momentum $p$, define the transverse tensor $$
\theta_{\mu\nu}
=\eta_{\mu\nu}-\frac{p_\mu p_\nu}{p^2+i0^+},\tag{58}$$ and the Barnes–Rivers spin projectors on symmetric tensors \[[20](/source-readout/bulk-to-brane-projection/references#bib-PinheiroPires)\], $$
\begin{aligned}
P^{(2)}_{\mu\nu\rho\sigma}
&=\tfrac12\bigl(\theta_{\mu\rho}\theta_{\nu\sigma}
+\theta_{\mu\sigma}\theta_{\nu\rho}\bigr)
-\tfrac13\theta_{\mu\nu}\theta_{\rho\sigma},\\
P^{(0)}_{\mu\nu\rho\sigma}
&=\tfrac13\theta_{\mu\nu}\theta_{\rho\sigma}.
\end{aligned}\tag{59}$$ (The $\tfrac13$ is $1/(D-1)$ with $D=4$, appropriate to the three-dimensional transverse subspace.)

<div class="lemma">

**Lemma 6.2** (Trace coefficients).

<div id="lem:traces">

</div>

*For a conserved source, $p^\mu T_{\mu\nu}=0$, so $\theta_{\mu\nu}T^{\mu\nu}=T$ and $$
\bigl(P^{(2)}T\bigr)_{\mu\nu}=T_{\mu\nu}-\tfrac13\theta_{\mu\nu}T,
\qquad
\bigl(P^{(0)}T\bigr)_{\mu\nu}=\tfrac13\theta_{\mu\nu}T .\tag{60}$$ Consequently $$
\Bigl(P^{(2)}-\tfrac12P^{(0)}\Bigr)T
=T_{\mu\nu}-\tfrac12\theta_{\mu\nu}T ,\tag{61}$$ which is the massless four-dimensional graviton structure, while a massive spin-two exchange gives $P^{(2)}T=T_{\mu\nu}
-\tfrac13\theta_{\mu\nu}T$, the van Dam–Veltman–Zakharov structure.*

</div>

<div class="proof">

*Proof.* Contract [(59)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:BR) with $T^{\rho\sigma}$ using $\theta_{\mu\rho}T^{\rho\sigma}\theta_{\sigma\nu}=T_{\mu\nu}$ for a conserved source, and $\theta_{\rho\sigma}T^{\rho\sigma}=T$. Then $P^{(2)}T=T_{\mu\nu}-\tfrac13\theta_{\mu\nu}T$ and $P^{(0)}T=\tfrac13\theta_{\mu\nu}T$. Subtracting half the latter, $T_{\mu\nu}-\tfrac13\theta_{\mu\nu}T-\tfrac16\theta_{\mu\nu}T
=T_{\mu\nu}-\tfrac12\theta_{\mu\nu}T$. ◻

</div>

The brane-bending field of Section [6.1](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:bending) is precisely what converts the scalar coefficient of the massless part from $\tfrac13$ to $\tfrac12$: the term $\tfrac{2}{\ell}\eta_{\mu\nu}\hat\xi^5$ in [(54)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:hbar) supplies a trace piece proportional to $\Box_4^{-1}T$, i.e. $-\tfrac16\theta_{\mu\nu}T$ times the zero-mode propagator. Consequently the complete gauge-invariant response to a conserved brane source, modulo longitudinal pure-gauge terms, is $$
\boxed{\;
\bar h_{\mu\nu}(p)
=-\mathbb R_{R\,\mu\nu}{}^{\rho\sigma}(p)\,T_{\rho\sigma}(p),
\;}\tag{62}$$ with $$
\boxed{\;
\mathbb R_R(p)
=2\kappa_5^2\Bigl[
G_R^{(0)}(p)\Bigl(P^{(2)}-\tfrac12P^{(0)}\Bigr)
+G_R^{(\mathrm{KK})}(p)\,P^{(2)}
\Bigr].
\;}\tag{63}$$ Equation [(63)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:RR) fixes both the normalization and the relative tensor coefficients. It is equivalent to the RS-gauge source equation [(51)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bulkwave) together with the bending equation [(52)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bending) and the transformation [(54)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:hbar). It displays directly why the zero mode carries the four-dimensional massless trace coefficient while the KK continuum carries the massive spin-two coefficient ,  the physical content of the fact that RS2 has no vDVZ discontinuity in the observable weak-field limit.

## Causal influence functional

<div id="sec:ctp">

</div>

The same result follows from a causal influence functional, which is the formulation that makes the initial-state dependence explicit \[[12](/source-readout/bulk-to-brane-projection/references#bib-FeynmanVernon)\]. Causality requires the closed-time-path fields to remain doubled. Set $$
h_c=\tfrac12(h_++h_-),
\qquad
h_\Delta=h_+-h_- .\tag{64}$$ On the physical conserved-source subspace let $\mathbb K_R=\mathbb R_R^{-1}$. For equal physical sources on the two contour branches, the quadratic closed-time-path functional is $$
\boxed{\;
\Gamma^{(2)}_{\mathrm{CTP}}[h_c,h_\Delta;T]
=\tfrac12\bigl\langle h_\Delta,\mathbb K_R h_c\bigr\rangle
+\tfrac12\bigl\langle h_\Delta,T\bigr\rangle
+\tfrac{i}{2}\bigl\langle h_\Delta,\mathbb N h_\Delta\bigr\rangle ,
\;}\tag{65}$$ where the pairing includes momentum integration and contraction on the conserved tensor subspace. The factor $\tfrac12$ in the source term is the standard linear metric coupling $\delta S_m=\tfrac12\int T^{\mu\nu}\delta h_{\mu\nu}$. The symmetric kernel $\mathbb N$ is fixed by the chosen bulk density matrix; it controls fluctuations and does not enter the mean classical field. Varying [(65)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:CTP) with respect to $h_\Delta$ and then taking the physical limit $h_\Delta=0$ gives $$
\tfrac12\,\mathbb K_R h_c+\tfrac12\,T=0
\qquad\Longrightarrow\qquad
h_c=-\mathbb R_R\,T ,\tag{66}$$ reproducing [(62)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:response). Restricted to the TT source in RS gauge this reduces to $$
h_c^{\mathrm{TT}}=-2\kappa_5^2\,\mathcal G_R\,\Sigma^{\mathrm{TT}},\tag{67}$$ where $\mathcal G_R$ denotes the retarded convolution operator whose momentum-space kernel is the brane-to-brane Green function $G_R(p;0,0)=G_R^{(0)}(p)+G_R^{(\mathrm{KK})}(p)$ of [(55)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:GR), acting as $$
\bigl(\mathcal G_R\,\Sigma^{\mathrm{TT}}\bigr)(x)
=\int d^4x'\;\mathcal G_R(x-x')\,\Sigma^{\mathrm{TT}}(x'),
\qquad
\mathcal G_R(x-x')
=\int\frac{d^4p}{(2\pi)^4}\;e^{ip\cdot(x-x')}\,G_R(p;0,0).\tag{68}$$ This recovers the normalization used in [(51)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bulkwave). Thus the standard $\tfrac12 h_{\mu\nu}T^{\mu\nu}$ matter coupling *reproduces* the response normalization rather than fixing it by convention.

The retarded prescription fixes causality. In the positive-tension model the KK spectral density [(56)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:um) is positive, so the linear continuum introduces no negative-norm graviton. The negative-tension branch instead gives the wrong sign of the four-dimensional Newton constant and is not used.

<div class="remark">

**Remark 6.3** (Status of the elimination).

<div id="rem:treelevel">

</div>

This is a *tree-level, linear-response* calculation, and must not be confused with the exact nonlinear equation [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS). Gauge fixing isolates the physical TT operator; brane bending restores the response required by the conserved four-dimensional source and its Ward identity. At tree level, ghost fields carry no external classical source and contribute no exchange term between conserved brane stresses; ghost and graviton determinants enter only beyond this approximation. Ultraviolet local terms at coincident points renormalize the brane tension, the Newton coupling, and admissible higher-curvature operators; the nonanalytic continuum term and its $1/r^3$ residue at $r>0$ are insensitive to those local subtractions. Covariant conservation of the resulting response agrees with [(42)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:bianchiE). The bulk initial state enters the full closed-time-contour functional through its density matrix: under the no-incoming/regular choice the forced retarded kernel is fixed; changing that choice changes both the homogeneous response and the fluctuation kernel $\mathbb N$.

</div>

## Evaluated long-distance response

<div id="sec:longdistance">

</div>

For a static source and $r\gg\ell$, the three-dimensional massive Green function is $-e^{-mr}/(4\pi r)$. The small-$m$ spectral weight [(57)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:umsmall) therefore *evaluates* the KK contribution rather than leaving it as a formal kernel: $$
G^{(\mathrm{KK})}(r)
=-\frac{1}{4\pi r}\int_0^\infty dm\,u_m(0)^2\,e^{-mr}
=-\frac{1}{4\pi r}\cdot\frac{\ell}{2}\int_0^\infty dm\,m\,e^{-mr}
+\cdots
=-\frac{\ell}{8\pi r^3}
+O\!\Bigl(\frac{\ell^3}{r^5}\log\frac r\ell\Bigr),\tag{69}$$ using $\int_0^\infty m e^{-mr}dm=r^{-2}$. Adding the zero mode $G^{(0)}(r)=-1/(4\pi\ell r)$ gives the brane scalar Green function $$
G(\mathbf x,0;\mathbf x',0)
=-\frac{1}{4\pi\ell r}
\Bigl[1+\frac{\ell^2}{2r^2}
+O\!\Bigl(\frac{\ell^4}{r^4}\log\frac r\ell\Bigr)\Bigr],
\qquad r=|\mathbf x-\mathbf x'| .\tag{70}$$

For a nonrelativistic point source, $T_{00}=M\delta^3(\mathbf x)$ and $T=-M\delta^3(\mathbf x)$, so the bending equation [(52)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bending) gives $$
\nabla^2\hat\xi^5=-\frac{\kappa_5^2M}{6}\,\delta^3(\mathbf x),
\qquad
\hat\xi^5(r)=\frac{\kappa_5^2M}{24\pi r} .\tag{71}$$ Substituting [(70)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:Gtotal) into $h^{(m)}=-2\kappa_5^2\,G*\bigl(T_{\mu\nu}-\tfrac13\eta_{\mu\nu}T\bigr)$, adding $2\eta_{\mu\nu}\hat\xi^5/\ell$ as in [(54)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:hbar), and using $G_4=\kappa_5^2/(8\pi\ell)$ (Section [6.6](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:normalization)), one obtains, outside a nonrelativistic spherical source of mass $M$, $$
\boxed{\;
\bar h_{00}
=\frac{2G_4M}{r}
\Bigl[1+\frac{2\ell^2}{3r^2}
+O\!\Bigl(\frac{\ell^4}{r^4}\log\frac r\ell\Bigr)\Bigr],
\;}\tag{72}$$ $$
\boxed{\;
\bar h_{ij}
=\frac{2G_4M}{r}
\Bigl[1+\frac{\ell^2}{3r^2}
+O\!\Bigl(\frac{\ell^4}{r^4}\log\frac r\ell\Bigr)\Bigr]\delta_{ij}.
\;}\tag{73}$$ Equivalently, in asymptotically Minkowski Newtonian gauge, $$
ds^2=-(1+2\Phi)\,dt^2+(1-2\Psi)\,d\mathbf x^2,\tag{74}$$ the gauge-invariant static potentials are $$
\boxed{\;
\Phi(r)=-\frac{G_4M}{r}
\Bigl(1+\frac{2\ell^2}{3r^2}+\cdots\Bigr),
\qquad
\Psi(r)=-\frac{G_4M}{r}
\Bigl(1+\frac{\ell^2}{3r^2}+\cdots\Bigr).
\;}\tag{75}$$ This reproduces the Garriga–Tanaka result \[[6](/source-readout/bulk-to-brane-projection/references#bib-GarrigaTanaka)\].

Three observations. First, the correction is *not* a mass renormalization: it has a different radial scaling and cannot be absorbed into $G_4M$. Second, the coefficients in $\Phi$ and $\Psi$ are unequal, which correlates nonrelativistic acceleration with light deflection: the former probes $\Phi$, the latter $\Phi+\Psi$. Third, in momentum space the same physics is the KK branch cut of [(55)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:GR), not an extra isolated pole.

The result is controlled by $$
\frac{G_4M}{r}\ll1,
\qquad
\frac{\ell}{r}\ll1 ,\tag{76}$$ and assumes the minimal two-derivative bulk action and the regular retarded bulk state. *It is not an expansion valid at $r\lesssim\ell$*, where the full spectral integral [(56)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:um) must be used.

## One-sided versus two-sided normalization

<div id="sec:normalization">

</div>

Two conventions occur in the literature and must not be mixed. In the two-sided covering-space convention used throughout this paper, $$
y\in(-\infty,\infty),
\qquad
a(y)=e^{-|y|/\ell},\tag{77}$$ and the zero-mode reduction gives $$
\frac{1}{\kappa_4^2}
=\frac{1}{\kappa_5^2}\int_{-\infty}^{\infty}dy\;a(y)^2
=\frac{1}{\kappa_5^2}\int_{-\infty}^{\infty}dy\;e^{-2|y|/\ell}
=\frac{\ell}{\kappa_5^2},\tag{78}$$ so that $$
\boxed{\;
\kappa_4^2=\frac{\kappa_5^2}{\ell},
\qquad
G_4=\frac{G_5}{\ell}.
\;}\tag{79}$$ If instead one works on a single AdS patch $y\ge0$ with the same undoubled bulk normalization, the integral is $\ell/2$ and $$
\kappa_4^2=\frac{2\kappa_{5,\mathrm{one}}^2}{\ell},
\qquad
G_4=\frac{2G_{5,\mathrm{one}}}{\ell}.\tag{80}$$ Equivalently, the $Z_2$ orbifold fundamental domain may be assigned a doubled bulk action, reproducing the two-sided convention. The weak-field coefficients $2\ell^2/3$ and $\ell^2/3$, expressed in terms of the *measured* $G_4$, are unchanged provided the gravitational coupling and the number of AdS patches are converted consistently.

The same distinction appears in the four-dimensional dual description (Section [10](/source-readout/bulk-to-brane-projection/the-strongest-conventional-four-dimensional-description#sec:fourdim)). One AdS patch corresponds to one cutoff CFT contribution; a two-sided geometry has two identical bulk regions and hence a doubled CFT polarization contribution. Duff and Liu \[[9](/source-readout/bulk-to-brane-projection/references#bib-DuffLiu)\] present the one-patch normalization explicitly; doubling both the bulk contribution and its CFT counterpart gives the two-sided convention used here. Their equality of the nonanalytic $1/r^3$ residue therefore remains valid, but only after this conversion. No equation in this paper combines a one-sided Newton-constant relation with a two-sided junction condition.
