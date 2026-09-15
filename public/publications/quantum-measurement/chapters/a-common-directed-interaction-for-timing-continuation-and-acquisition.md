# Chapter 13: A common directed interaction for timing, continuation, and acquisition

<!-- Fixed Version 2 source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\PP = \mathbb P
\QQ = \mathbb Q
\tr = \operatorname{tr}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\id = \operatorname{id}
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\pos = [#1]_+
\norm = \left\lVert#1\right\rVert
\proj = \ket{#1}\bra{#1}
\ii = \mathrm i
\pLaw = \operatorname{Law}
\pVar = \operatorname{Var}
\pSupp = \operatorname{supp}
\mcH = \mathcal H
\mcS = \mathcal S
\mcNcdf = \mathsf F
\mcNtail = \overline{\mathsf F}
\kinTV = d_{\mathrm{TV}}
\kinLaw = \operatorname{Law}
\kinVar = \operatorname{Var}
\accTV = d_{\mathrm{TV}}
\accLaw = \operatorname{Law}
\accVar = \operatorname{Var}
-->

<a id="mat:chiralchapter"></a> 

This chapter consolidates the directed-transport repair of the preceding null-writer model [[M29](/quantum-measurement/monograph/bibliography#bib-M29)]. Its elementary decay clock is replaced by conservative spatial transport and a prepared actual coordinate. The same derivative that causes effective incoming loss also changes the dynamics after a physical position copy. It is a complete conditional detector constitution, not an embedding of the old canonical actual carrier. Its directed, non-semibounded generator also differs from the later massive guidance construction and finite pilot theory. 



<a id="section-13-1"></a>

## 13.1 Complete source and conservative Hamiltonian

 

Let $\mathcal K=\mathcal S\otimes\mathcal R$, with $\mathcal R$ inaccessible, and let $A$ be a projector on $\mathcal S$. The cell space is <a id="mat:chiralspace"></a>


$$
\mathcal H_{\rm cell}=L^2(\mathbb R_-;\mathcal K)_g
            \oplus L^2(\mathbb R;A\mathcal K)_c.
 

$$

Equation (13.1).

 The $g$ mode is stationary and incoming. The $c$ mode moves right; its regions $x<0$ and $x>0$ are called reactive and spent. They are parts of one channel, not separate modes connected by a prescribed collapse. The incoming $g/e$ components remain coherent and share one actual position $X$. 

For fixed $g>0$, $v>0$ and real $\Delta$, define <a id="mat:chiralH"></a>


$$
H\binom GC=
 \binom{\hbar g A C|_{x<0}}
 {-i\hbar v\partial_x C+\hbar\Delta1_{x<0}C+\hbar g1_{x<0}AG},
 \quad D(H)=L^2(\mathbb R_-;\mathcal K)\oplus H^1(\mathbb R;A\mathcal K).
 

$$

Equation (13.2).

 The full experiment retains all active and spent fields, actual coordinates, copies, clock phases, unused cells, and supplied classical histories. A conditional source slice is not the whole state when waves can return. 



**Lemma 13.1 (Self-adjoint realization and current).**

 <a id="mat:selfadjoint"></a> The operator [(13.2)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:chiralH) is self-adjoint. In the incoming region 

$$

 \partial_t\rho+\partial_xj=0,
 \qquad\rho=\|G\|^2+\|C\|^2,\qquad j=v\|C\|^2,

$$

 and on $x>0$, $\rho=\|C\|^2$ and $j=v\rho$. 

 

**Proof.**

The diagonal operator $0\oplus(-i\hbar v\partial_x)$ is self-adjoint on the stated domain. Restriction and extension across the half-line form mutually adjoint bounded exchange blocks; detuning is bounded and real. The bounded self-adjoint perturbation theorem gives the result. In the local norm derivative the exchange terms cancel, the real detuning contributes zero, and the remaining term is $-v\partial_x\|C\|^2$. The full-line $H^1$ trace matches current across zero. 

□

 

Prepare one unknown $\Psi\in\mathcal K$, $\|\Psi\|=1$, and <a id="mat:chiralready"></a>


$$
(G_0,C_0)=(\chi\Psi,0),\qquad
 \chi(x)=\sqrt\alpha e^{\alpha x/2}\ (x<0),\qquad
 \Pr(X_0\in dx)=\alpha e^{\alpha x}dx,
 

$$

Equation (13.3).

 with $\alpha>0$. The actual coordinate follows $\dot X=j/\rho$. Both the guidance law and the squared-norm readiness are explicit statistical/mechanical commitments. There is no additional Born measurement of the source. The ready vector belongs to $D(H)$, since the differentiated component is initially zero, and $\|H\Phi_0\|^2=\hbar^2g^2\|A\Psi\|^2$. 

The ideal directed Hamiltonian is unbounded below. A finite ready energy variance does not make it a semibounded microscopic material model. No such bath realization is claimed. Prescribed switching and outgoing cam control remain resources. 



<a id="section-13-2"></a>

## 13.2 Exact event law and retained source

 

Write $p=\|A\Psi\|^2$, $\kappa=\alpha v$, and define <a id="mat:reducedODE"></a>


$$
\dot u=-ige,\qquad
 \dot e=-igu-(\kappa/2+i\Delta)e,
 \qquad (u(0),e(0))=(1,0),\quad a=|u|^2+|e|^2.
 

$$

Equation (13.4).

 The next result derives this dissipative-looking equation from [(13.2)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:chiralH). 



**Theorem 13.2 (Common transport, waiting law, and continuation).**

 <a id="mat:common"></a> For [(13.2)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:chiralH)–[(13.3)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:chiralready), the exact field is <a id="mat:exactfield"></a>


$$
\begin{aligned}G(x,t)&=\chi(x)[(I-A)\Psi+u(t)A\Psi],&&x<0,\\
 C(x,t)&=\chi(x)e(t)A\Psi,&&x<0,\\
 C(x,t)&=\sqrt\alpha e(t-x/v)A\Psi,&&0<x<vt,
 
\end{aligned}
$$

Equation (13.5, 13.6, 13.7).

 with zero outgoing field for $x>vt$. If $\tau$ is the first crossing of zero and $N_p=1-p+pa$, then <a id="mat:commonlaw"></a>


$$
\begin{aligned}\Pr(\tau>t)&=N_p(t),&\Pr(\tau\in dt)&=\kappa p|e(t)|^2dt,\\
 \Psi_\varnothing(t)&=\frac{(I-A)\Psi\otimes g+
          A\Psi\otimes[u(t)g+e(t)e]}{\sqrt{N_p(t)}},
 &\Psi_\tau&=A\Psi/\sqrt p,\\
 X_t-X_0&=-\alpha^{-1}\log N_p(t),&&t<\tau,\\
 \mathcal L(X_t\mid\tau>t)&=\alpha e^{\alpha x}1_{x<0}dx.
 
\end{aligned}
$$

Equation (13.8, 13.9, 13.10, 13.11).

 The daughter formula applies only when $p>0$. Outgoing temporal amplitudes remain part of the complete field. 

 

**Proof.**

Substitute the incoming ansatz into Schrödinger evolution. Since $\chi'=\alpha\chi/2$, the transport derivative supplies precisely $-\alpha ve/2$ in the time equation. This gives [(13.4)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:reducedODE). Forward characteristics and continuity at zero give the outgoing field. The front at $x=vt$ is continuous because $e(0)=0$. Self-adjoint uniqueness identifies the solution. 

The reduced equation gives $a'=-\kappa|e|^2$. The incoming norm is $N_p$ and the outgoing norm is $p\kappa\int_0^t|e(s)|^2ds=1-N_p$. Current is nonnegative; a trajectory crosses at most once. More explicitly, the incoming velocity is independent of $x$: 

$$

 \dot X=vp|e|^2/N_p=-\alpha^{-1}\partial_t\log N_p.

$$

 Thus $U=e^{\alpha X_0}$ is uniform and $\tau>t$ iff $U<N_p(t)$. This proves the waiting law directly from the prepared actual coordinate. The incoming factorization and outgoing source orientation give the conditional vectors. A surviving coordinate $x$ came from $x_0=x+\alpha^{-1}\log N_p$; change of variables gives joint surviving density $N_p\alpha e^{\alpha x}$. Dividing by $N_p$ proves the last line. At finite times $a>0$, since the two-dimensional propagator is invertible, so finite nulls have no normalization singularity. 

□

 

In the reaction-history filtration containing the occurrence time but no initial-coordinate record, the compensator is <a id="mat:compensator"></a>


$$
\int_0^{t\wedge\tau}\frac{\kappa p|e(s)|^2}{N_p(s)}ds.
 

$$

Equation (13.12).

 Indeed conditional survival from $s$ to $t$ is $N_p(t)/N_p(s)$; differentiation gives the intensity. In the larger filtration revealing $X_0$ and the complete field, crossing is predictable. Its compensator is the predictable boundary count, not [(13.12)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:compensator). Prepared configuration randomness has replaced intrinsic chemical randomness; these are different complete constitutions. 

An actual finite output cam can be included on $0<x<\ell$ by 

$$

 H_{\rm cam}=v[p_x+c f(x)p_y],\qquad
 f\in C_c^\infty(0,\ell),\quad\int_0^\ell f(x)dx=1.

$$

 Its divergence-free characteristics have $\dot x=v$, $\dot y=vcf(x)$; each completed passage shifts the latch by $c$. A ready latch packet narrower than $c/3$ has disjoint unactuated and completed regions. The record completion time is $\tau+\ell/v$. At a finite deadline, incomplete cams remain pending outputs. A clearance interval completes them without inventing a completed record at the earlier cut. 



<a id="section-13-3"></a>

## 13.3 A physical copy changes the reaction through the same derivative

 

Prepare a memory packet $\eta(y)$ of positive width and the actual joint coordinate law $|\chi(x)|^2|\eta(y)|^2dx\,dy$, conditionally independent of the complete prior source and actual past. This is an additional ready-resource law, not a consequence of the product wave alone. Freeze the binding contact, then apply $H_{\rm copy}(t)=a_c(t)x p_y$ with $\int a_cdt=1$. It is a source-blind coordinate acquisition. The complete new ready field is <a id="mat:copiedready"></a>


$$
G_0(x,y)=\chi(x)\eta(y-x)\Psi,\qquad C_0=0.
 

$$

Equation (13.13).

 During binding the memory coordinate is stationary and retained. In the Fourier convention $\eta(z)=(2\pi)^{-1/2}\int e^{ikz}\widehat\eta(k)dk$, put <a id="mat:copiedamplitudes"></a>


$$
U_t=\mathcal F^{-1}[\widehat\eta(k)u_{\Delta-vk}(t)],\qquad
 V_t=\mathcal F^{-1}[\widehat\eta(k)e_{\Delta-vk}(t)].
 

$$

Equation (13.14).

 Subscripts denote detuning in [(13.4)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:reducedODE). 



**Theorem 13.3 (Complete acquired-record and reaction law).**

 <a id="mat:copytheorem"></a> The exact incoming field after the copy is <a id="mat:copiedfield"></a>


$$
\Phi_-(x,y,t)=\chi(x)\{\eta(y-x)(I-A)\Psi\otimes g+
       A\Psi\otimes[U_t(y-x)g+V_t(y-x)e]\}.
 

$$

Equation (13.15).

 Define 

$$
\begin{aligned}m(y)&=\int_{-\infty}^0|\chi(x)|^2|\eta(y-x)|^2dx,\\
 b(y,t)&=\int_{-\infty}^0|\chi(x)|^2
                 (|U_t(y-x)|^2+|V_t(y-x)|^2)dx,\\
 s_p(y,t)&=(1-p)m(y)+pb(y,t).
\end{aligned}
$$

Equation (13.16, 13.17, 13.18).

 Then <a id="mat:copylaw"></a>


$$
\begin{aligned}\Pr(y\in dy,\tau>t)&=s_p(y,t)dy,\\
 \Pr(y\in dy,\tau\in dt)&=\kappa p|V_t(y)|^2dy\,dt,\\
 \Pr(\tau>t\mid y)&=s_p(y,t)/m(y),\\
 h_y(t)&=1_{t<\tau}\kappa p|V_t(y)|^2/s_p(y,t).
 
\end{aligned}
$$

Equation (13.19, 13.20, 13.21, 13.22).

 After an acquired $y$ and a null with $s_p(y,t)>0$, the retained incoming vector is $\Phi_-(\cdot,y,t)/\sqrt{s_p(y,t)}$. Conditional formulas are used only for $m(y)>0$ and positive survivor density, almost everywhere in the actual record law. Its spatial degree cannot be dropped if it can subsequently return. 

 

**Proof.**

Fourier transforming in $y$ writes the incoming profile as $\chi(x)e^{-ikx}\widehat\eta(k)$. Applying $-iv\partial_x$ contributes $-i\kappa/2-vk$, so the bright detuning becomes $\Delta-vk$. Inverse Fourier transformation yields [(13.15)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:copiedfield). Orthogonality of $A\Psi$ and $(I-A)\Psi$, including the reference, gives $s_p$. The boundary flux at $x=0$ is $v\alpha p|V_t(y)|^2$, while integrated continuity gives $\partial_tb=-\kappa|V_t(y)|^2$. Conditioning on the initial memory density $m$ proves the final two formulas. 

□

 

This is the connecting equation: copying position changes the spatial dependence, and the unchanged transport derivative changes the reaction law and continuation. The copy does not leave an independent classical displacement available for the old log-likelihood experiment. Discarding $y$ gives only the coarser survivor 

$$

 1-p+p\overline a(t),\qquad
 \overline a(t)=\int|\widehat\eta(k)|^2a_{\Delta-vk}(t)dk,

$$

 which cannot replace the record-conditioned law or its complex retained amplitudes. 



**Proposition 13.4 (Finite position resolution can suppress conversion).**

 <a id="mat:copybound"></a> For the Gaussian $\eta_\sigma(y)=(2\pi\sigma^2)^{-1/4}e^{-y^2/(4\sigma^2)}$, if $4g^2>\kappa^2/4$, then <a id="mat:resolutionbound"></a>


$$
\Pr(\tau\le T)\le
 \kappa pT\frac{\sigma\sqrt{2/\pi}}v
 \frac{4\pi g^2}{\sqrt{4g^2-\kappa^2/4}}.
 

$$

Equation (13.23).

 The bound is uniform in the fixed detuning $\Delta$. 

 

**Proof.**

At detuning $\delta$, the two dissipative eigenvalues satisfy $\operatorname{Re}\lambda_\pm\le0$ and 

$$

 e_\delta(t)=-ig\frac{e^{\lambda_+t}-e^{\lambda_-t}}{\lambda_+-\lambda_-},
 \quad |\lambda_+-\lambda_-|^2
 =|(\kappa/2+i\delta)^2-4g^2|
 \ge\delta^2+4g^2-\kappa^2/4.

$$

 Therefore $|e_\delta(t)|^2\le4g^2/(\delta^2+4g^2-\kappa^2/4)$. The Gaussian momentum density is bounded by $\sigma\sqrt{2/\pi}$. Insert this bound into the integrated event density, change variable $\delta=\Delta-vk$, and integrate the Lorentzian. Integration over $[0,T]$ proves [(13.23)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:resolutionbound). 

□

 

At [(12.28)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:parameters) with $\kappa=v=1$, the coefficient is $15.941283\,p\sigma$. Thus $p=2/3$, $\sigma=10^{-3}$ gives conversion below $0.010629$, whereas the uncopied contact converts with probability $1/3$. Resolution improves at momentum cost $\operatorname{Var}(p_y)=\hbar^2/(4\sigma^2)$. This is a finite acquisition/backaction consequence, not a universal tradeoff for all contacts. An active controller trying to undo the correlation must retain every copy in the new Hamiltonian calculation. 



<a id="section-13-4"></a>

## 13.4 Null reuse and the preparation boundary

 

At [(12.28)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:parameters), a source phase correction turns the endpoint bright amplitude $-1/\sqrt2$ into $1/\sqrt2$ without changing the incoming spatial factor. The null coordinate distribution in Theorem [13.2](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:common) is again the ready exponential. Consequently the same unmeasured cell, after a null and a finite source phase correction of duration $d$, admits $m$ attempts with <a id="mat:reuse"></a>


$$
\Pr(\hbox{all }m\hbox{ null})=1-p+p2^{-m},\qquad
 f_k(s)=p2^{-(k-1)}\kappa|e(s)|^2,\quad 0<s<T.
 

$$

Equation (13.24).

 Here $f_k(s)ds$ is the unconditional first-arrival mass at physical time $(k-1)(T+d)+s$. The proof is multiplication of the actual null filter; there are no reactions while $g=v=0$ in the phase windows. This is conditional renewal of an unmeasured exponential resource, not independence of successive nulls. After a position copy the factorization fails and Theorem [13.3](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:copytheorem) replaces [(13.24)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:reuse). After capture the cell is spent. 



**Proposition 13.5 (Invariant incoming span selects a shape, not a probability law).**

 <a id="mat:profile"></a> For constant nonzero $g$ and $v>0$, a one-dimensional incoming spatial span $\{\chi(x)\xi\}$ is invariant for every binding/source vector under the incoming differential expression if and only if 

$$

 \chi'=z\chi,\qquad
 \chi(x)=\sqrt{2\operatorname{Re}z}\,e^{zx},
 \quad\operatorname{Re}z>0,

$$

 up to a constant phase. The effective decay coefficient is $2v\operatorname{Re}z$ and detuning is $\Delta+v\operatorname{Im}z$. 

 

**Proof.**

Applying the incoming generator to an $e$ component requires $\chi'$ to lie in the same one-dimensional span. The weak equation $\chi'=z\chi$ has only exponential solutions. Square integrability on the negative half-line requires positive real exponent and fixes normalization. Conversely substitution proves invariance and the displayed coefficients. With only initial $g$ support, the nonzero exchange creates an $e$ component and its next derivative imposes the same condition. 

□

 

This characterizes a resource property. It does not prepare that resource from a broader class, select squared-norm actual coordinates, or establish universality of directed material transport. 

The old three-contact experiment has a useful regression test. If only the present surviving clock coordinate is acquired after a null, its conditional law is the source-independent ready exponential. For $R_j=-c\alpha X_j$, the two surviving clocks are independent $\operatorname{Exp}(1/c)$ variables conditional on the double-null source branch. Applying the same finite plate as before gives 

$$

 \theta=\int_{c/2}^{\infty}\frac{e^{-r/c}}c
       \left(e^{-0.45r/c}-e^{-0.72r/c}\right)dr,

$$

 independently of $p$. The four source stopping masses remain [(12.31)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:fourbranches); hence both ensembles in [(12.30)](/quantum-measurement/monograph/material-contact-geometry-and-the-limits-of-common-response#mat:ensembles) have $\Pr(C=1)=\theta/3$ and $\Pr(NNN,C=1)=\theta/4$. A physical initial-coordinate copy instead obeys [(13.22)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:copylaw), with its changed timing and daughters. This distinction prevents using the unmeasured null displacement and a freely known initial position in the same experiment. 

The supported chain for this directed cell is therefore 

$$

 \begin{gathered}
 \text{specified coherent field and interface Hamiltonian}\\
 +\ \text{guidance and independent exponential squared-norm readiness}\\
 \Longrightarrow\ \text{actual first passage, null continuation, product field}\\
 \Longrightarrow\ \text{copy-dependent detuning and complete acquired-record law}.
 \end{gathered}

$$

 The original canonical Hamiltonian current and its actual carrier are absent from this cell's complete state. Adding Bell rates on an enlarged configuration would be a benchmark, not a derivation of that embedding. A conversion boundary flux is not the original Hamiltonian edge current, and the reaction-history intensity is not a law in the filtration revealing the actual ready coordinate. Complete material-field admission, guidance, readiness, and the ideal directed channel remain physical commitments of this cell. Its theorems do not close the canonical event-law bridge; the pilot construction addresses that bridge with a different complete state and microscopic mechanism, while the massive construction establishes a different operational event law.
