# The minimal completion for the spectral target

<div id="sec:minimal-spectral">

</div>

Curvature is insufficient for $Q_{\mathrm{spec}}$. Holonomy is manifestly sufficient, since by [Proposition 10.1](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#prop:spectrum) the spectrum is a function of $\theta$ mod $2\pi$. The question this section answers is the sharp one: *how much less than holonomy is enough?* The answer is: strictly less. The spectral target sees holonomy only up to inversion.

## Holonomy is sufficient

<div class="proposition">

**Proposition 11.1** (Holonomy completes the curvature readout for the spectrum).

<div id="prop:holonomy-sufficient">

</div>

*The identity map $e=\operatorname{id}\colon S_{\mathrm{flat}}\to S_{\mathrm{flat}}$, equivalently the holonomy map $h\colon S_{\mathrm{flat}}\to\mathrm{U}(1)$, $h(\theta)=e^{i\theta}$, is a readout extension of $p_F$ that is sufficient for $Q_{\mathrm{spec}}$.*

</div>

<div class="proof">

*Proof.* $h$ is a bijection $S_{\mathrm{flat}}\to\mathrm{U}(1)$ by [(32)](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#eq:Sflat) and [(33)](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#eq:holonomy), hence surjective, and $p_F=u\circ h$ with $u\colon\mathrm{U}(1)\to\{0\}$ the constant map, so $h$ is a readout extension in the sense of [Definition 6.1](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#def:extension). Define $b\colon\mathrm{U}(1)\to A_{\mathrm{spec}}$ by $b(e^{i\theta}):=\operatorname{Spec}(H_\theta)$; this is well defined because, as shown at the end of the proof of [Proposition 10.1](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#prop:spectrum), $\operatorname{Spec}(H_\theta)$ depends only on $\theta$ mod $2\pi$, i.e. only on $e^{i\theta}$. Then $a_{\mathrm{spec}}=b\circ h$, so $h$ is $Q_{\mathrm{spec}}$-sufficient by [Definition 6.3](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#def:sufficient). ◻

</div>

## Spectral rigidity: the exact equivalence

<div class="theorem">

**Theorem 11.2** (Isospectrality iff $\theta'\equiv\pm\theta$).

<div id="thm:isospectral">

</div>

*For $\theta,\theta'\in\mathbb{R}$, $$
\operatorname{Spec}(H_\theta)=\operatorname{Spec}(H_{\theta'})
\qquad\Longleftrightarrow\qquad
\theta'\equiv\theta \ \ \text{or}\ \ \theta'\equiv-\theta \pmod{2\pi},\tag{48}$$ where the spectra are compared as multisets, with multiplicities.*

</div>

<div class="proof">

*Proof.* *($\Leftarrow$) Reverse direction.* Suppose first $\theta'\equiv\theta\pmod{2\pi}$. Then $\operatorname{Spec}(H_{\theta'})=\operatorname{Spec}(H_\theta)$ by the invariance established at the end of the proof of [Proposition 10.1](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#prop:spectrum).

Suppose next $\theta'\equiv-\theta \pmod{2\pi}$. By the same invariance it suffices to treat $\theta'=-\theta$. Then for every $n\in\mathbb{Z}$, $$
\lambda_{-n}(-\theta)
=\left(\frac{2\pi(-n)-(-\theta)}{L}\right)^{\!2}
=\left(\frac{-(2\pi n-\theta)}{L}\right)^{\!2}
=\left(\frac{2\pi n-\theta}{L}\right)^{\!2}
=\lambda_n(\theta).\tag{49}$$ The map $n\mapsto -n$ is a bijection of $\mathbb{Z}$ onto itself. Hence [(49)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#eq:reindex) exhibits a bijection between the indexing set of $\operatorname{Spec}(H_{-\theta})$ and that of $\operatorname{Spec}(H_\theta)$ carrying each eigenvalue to an equal eigenvalue. A multiset is determined by its indexed family up to bijective reindexing, so the two multisets are equal, *with all multiplicities*: $$m_{-\theta}(\lambda)=\#\{n:\lambda_n(-\theta)=\lambda\}
=\#\{n:\lambda_{-n}(-\theta)=\lambda\}
=\#\{n:\lambda_{n}(\theta)=\lambda\}=m_\theta(\lambda).$$ So $\operatorname{Spec}(H_{-\theta})=\operatorname{Spec}(H_\theta)$. Concretely, the reindexing $n\mapsto -n$ is implemented on the Hilbert space by complex conjugation, $\psi_n\mapsto\overline{\psi_n}=\psi_{-n}$, which is an antiunitary intertwiner between $H_\theta$ and $H_{-\theta}$; but the elementary reindexing argument above is already complete and requires nothing further.

*($\Rightarrow$) Forward direction.* Suppose $\operatorname{Spec}(H_\theta)=\operatorname{Spec}(H_{\theta'})$. We recover $\theta$ up to sign and $2\pi$ from the spectrum, using the lowest eigenvalue.

Define, for any $\theta\in\mathbb{R}$, the *principal representative* $$
\alpha(\theta)\in[0,\pi]
\qquad\text{the unique number in } [0,\pi] \text{ with }
\theta\equiv\alpha(\theta) \ \text{ or }\ \theta\equiv-\alpha(\theta) \pmod{2\pi}.\tag{50}$$ Existence and uniqueness of $\alpha(\theta)$: reduce $\theta$ mod $2\pi$ to a representative $\tilde\theta\in[0,2\pi)$. If $\tilde\theta\in[0,\pi]$ set $\alpha:=\tilde\theta$; if $\tilde\theta\in(\pi,2\pi)$ set $\alpha:=2\pi-\tilde\theta\in(0,\pi)$, and then $\theta\equiv\tilde\theta=-\alpha \pmod{2\pi}$. In both cases $\alpha\in[0,\pi]$ and $\theta\equiv\pm\alpha$. For uniqueness, suppose $\alpha,\beta\in[0,\pi]$ both work; then $\alpha\equiv\pm\beta\pmod{2\pi}$. If $\alpha\equiv\beta$ then $\alpha-\beta\in 2\pi\mathbb{Z}$ and $|\alpha-\beta|\leq\pi<2\pi$, forcing $\alpha=\beta$. If $\alpha\equiv-\beta$ then $\alpha+\beta\in2\pi\mathbb{Z}$ with $0\le\alpha+\beta\le 2\pi$, so $\alpha+\beta\in\{0,2\pi\}$, giving either $\alpha=\beta=0$ or $\alpha=\beta=\pi$. In all cases $\alpha=\beta$.

We claim $$
\lambda_{\min}(\theta):=\min\operatorname{Spec}(H_\theta)=\frac{\alpha(\theta)^2}{L^2}.\tag{51}$$ To see this, note $\lambda_n(\theta)=\bigl(\tfrac{2\pi n-\theta}{L}\bigr)^2$, so $$\min_{n\in\mathbb{Z}}\lambda_n(\theta)
=\frac{1}{L^2}\min_{n\in\mathbb{Z}}\,(2\pi n-\theta)^2
=\frac{1}{L^2}\Bigl(\operatorname{dist}\bigl(\theta,\,2\pi\mathbb{Z}\bigr)\Bigr)^{\!2},$$ the minimum being attained since $(2\pi n-\theta)^2\to\infty$ as $|n|\to\infty$. It remains to identify $\operatorname{dist}(\theta,2\pi\mathbb{Z})=\alpha(\theta)$. Write $\theta\equiv\pm\alpha$ with $\alpha=\alpha(\theta)\in[0,\pi]$; since $2\pi\mathbb{Z}$ is invariant under negation and under translation by $2\pi$, we get $\operatorname{dist}(\theta,2\pi\mathbb{Z})=\operatorname{dist}(\pm\alpha,2\pi\mathbb{Z})
=\operatorname{dist}(\alpha,2\pi\mathbb{Z})$. For $\alpha\in[0,\pi]$ the nearest point of $2\pi\mathbb{Z}$ is $0$, since the next candidates are $\pm2\pi$ at distance $2\pi-\alpha\ge\pi\ge\alpha$ and $2\pi+\alpha>\alpha$. Hence $\operatorname{dist}(\alpha,2\pi\mathbb{Z})=\alpha$, proving [(51)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#eq:lambdamin).

Now assume $\operatorname{Spec}(H_\theta)=\operatorname{Spec}(H_{\theta'})$. Equal multisets have equal minima, so by [(51)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#eq:lambdamin) $$\frac{\alpha(\theta)^2}{L^2}=\lambda_{\min}(\theta)=\lambda_{\min}(\theta')
=\frac{\alpha(\theta')^2}{L^2},$$ whence $\alpha(\theta)^2=\alpha(\theta')^2$. Since $\alpha(\theta),\alpha(\theta')\in[0,\pi]$ are both nonnegative, $\alpha(\theta)=\alpha(\theta')=:\alpha$. By [(50)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#eq:alpha), $\theta\equiv\pm\alpha$ and $\theta'\equiv\pm\alpha\pmod{2\pi}$. Combining the four sign cases: if $\theta\equiv\alpha$ and $\theta'\equiv\alpha$ then $\theta'\equiv\theta$; if $\theta\equiv\alpha$ and $\theta'\equiv-\alpha$ then $\theta'\equiv-\theta$; if $\theta\equiv-\alpha$ and $\theta'\equiv\alpha$ then $\theta'\equiv-\theta$; if $\theta\equiv-\alpha$ and $\theta'\equiv-\alpha$ then $\theta'\equiv\theta$. In every case $\theta'\equiv\pm\theta\pmod{2\pi}$, as required. ◻

</div>

<div class="corollary">

**Corollary 11.3** (The spectral target sees holonomy only modulo inversion).

<div id="cor:inversion">

</div>

*Define the equivalence $\sim_{\mathrm{spec}}$ on $S_{\mathrm{flat}}\cong\mathrm{U}(1)$ by $$
e^{i\theta}\sim_{\mathrm{spec}}e^{i\theta'}
\qquad\Longleftrightarrow\qquad
\theta'\equiv\pm\theta\pmod{2\pi}
\qquad\Longleftrightarrow\qquad
e^{i\theta'}\in\{e^{i\theta},e^{-i\theta}\}.\tag{52}$$ Then $\sim_{\mathrm{spec}}$ is exactly the answer equivalence of the spectral target: $a_{\mathrm{spec}}(\theta)=a_{\mathrm{spec}}(\theta')$ iff $\theta\sim_{\mathrm{spec}}\theta'$.*

</div>

<div class="proof">

*Proof.* Immediate from [Theorem 11.2](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#thm:isospectral) and [Definition 10.3](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#def:spectral-target). ◻

</div>

## The coarsest sufficient completion and its coordinate

<div class="theorem">

**Theorem 11.4** ($\cos\theta$ coordinatizes the minimal spectral completion).

<div id="thm:cos-minimal">

</div>

*Let $$
c\colon S_{\mathrm{flat}}\longrightarrow[-1,1],
\qquad
c(\theta):=\cos\theta .\tag{53}$$ Then:*

1.  <div id="it:c-welldef">

    </div>

    *$c$ is a well-defined surjection onto $[-1,1]$;*

2.  <div id="it:c-classes">

    </div>

    *$c(\theta)=c(\theta')$ if and only if $\theta\sim_{\mathrm{spec}}\theta'$; that is, $c$ realizes exactly the spectral equivalence classes;*

3.  <div id="it:c-suff">

    </div>

    *$c$ is a readout extension of $p_F$ that is sufficient for $Q_{\mathrm{spec}}$;*

4.  <div id="it:c-min">

    </div>

    *$c$ is a coarsest such extension: the induced map $\varphi_{[-1,1]}\colon[-1,1]\to E_{Q_{\mathrm{spec}}}$ of [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal) is a bijection. Consequently every $Q_{\mathrm{spec}}$-sufficient readout extension $e$ must separate source states with distinct values of $\cos\theta$.*

</div>

<div class="proof">

*Proof.* [(1)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#it:c-welldef) $\cos$ is $2\pi$-periodic, so $c$ descends to $\mathbb{R}/2\pi\mathbb{Z}$; its image is $[-1,1]$ since $\cos$ restricted to $[0,\pi]$ is already onto $[-1,1]$.

[(2)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#it:c-classes) The function $\cos$ is strictly decreasing on $[0,\pi]$, hence injective there. Given $\theta,\theta'$, write $\alpha=\alpha(\theta),\alpha'=\alpha(\theta')\in[0,\pi]$ as in [(50)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#eq:alpha); since $\cos$ is even and $2\pi$-periodic, $\cos\theta=\cos\alpha$ and $\cos\theta'=\cos\alpha'$. Therefore $$c(\theta)=c(\theta')
\iff \cos\alpha=\cos\alpha'
\iff \alpha=\alpha'
\iff \theta'\equiv\pm\theta \pmod{2\pi}
\iff \theta\sim_{\mathrm{spec}}\theta',$$ where the second equivalence uses injectivity of $\cos$ on $[0,\pi]$, and the third is the argument at the end of the proof of [Theorem 11.2](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#thm:isospectral) (equality of principal representatives is equivalent to $\theta'\equiv\pm\theta$).

[(3)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#it:c-suff) $c$ is surjective by [(1)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#it:c-welldef), and $p_F=u\circ c$ with $u\colon[-1,1]\to\{0\}$ constant, so $c$ is a readout extension. For sufficiency, define $b_{\mathrm{spec}}\colon[-1,1]\to A_{\mathrm{spec}}$ by $$
b_{\mathrm{spec}}(\kappa):=\operatorname{Spec}\bigl(H_{\arccos\kappa}\bigr),
\qquad \arccos\kappa\in[0,\pi].\tag{54}$$ If $c(\theta)=\kappa$ then by [(2)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#it:c-classes) $\theta\sim_{\mathrm{spec}}\arccos\kappa$ (both have principal representative $\arccos\kappa$), so by [Corollary 11.3](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#cor:inversion) $\operatorname{Spec}(H_\theta)=\operatorname{Spec}(H_{\arccos\kappa})=b_{\mathrm{spec}}(c(\theta))$. Hence $a_{\mathrm{spec}}=b_{\mathrm{spec}}\circ c$, and $c$ is $Q_{\mathrm{spec}}$-sufficient.

[(4)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#it:c-min) Write $\varphi:=\varphi_{[-1,1]}$ and $E_{\mathrm{spec}}
:=E_{Q_{\mathrm{spec}}}$ for brevity. By [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal), applied to the sufficient extension $c$, there is a unique surjection $\varphi\colon[-1,1]\to E_{\mathrm{spec}}$ with $j_{Q_{\mathrm{spec}}}=\varphi\circ c$, given by $$
\varphi(\kappa)
=\bigl(u(\kappa),\,b_{\mathrm{spec}}(\kappa)\bigr)
=\bigl(0,\,b_{\mathrm{spec}}(\kappa)\bigr),
\qquad \kappa\in[-1,1].\tag{55}$$ It remains to prove injectivity. Suppose $\varphi(\kappa)=\varphi(\kappa')$. Comparing second coordinates in [(55)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#eq:varphi-c) gives $b_{\mathrm{spec}}(\kappa)=b_{\mathrm{spec}}(\kappa')$, which by [(54)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#eq:b-from-c) says $$
\operatorname{Spec}\bigl(H_{\arccos\kappa}\bigr)=\operatorname{Spec}\bigl(H_{\arccos\kappa'}\bigr).\tag{56}$$ By [Theorem 11.2](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#thm:isospectral), [(56)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#eq:iso-arccos) forces $\arccos\kappa'\equiv\pm\arccos\kappa \pmod{2\pi}$. Both $\arccos\kappa$ and $\arccos\kappa'$ lie in $[0,\pi]$, so each is its own principal representative in the sense of [(50)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#eq:alpha); by the uniqueness established there, they are equal. Applying $\cos$ yields $\kappa=\kappa'$.

Hence $\varphi$ is a bijection, and $c$ carries precisely the distinctions of $E_{\mathrm{spec}}$ ,  no more and no fewer.

The final assertion follows from [Corollary 8.4](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#cor:ordering): if $e$ is $Q_{\mathrm{spec}}$-sufficient and $c(\theta_0)\neq c(\theta_1)$, then by [(2)](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#it:c-classes) $\theta_0\not\sim_{\mathrm{spec}}
\theta_1$, so by [Corollary 11.3](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#cor:inversion) $a_{\mathrm{spec}}(\theta_0)\neq a_{\mathrm{spec}}
(\theta_1)$, and [Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation) forces $e(\theta_0)\neq e(\theta_1)$. ◻

</div>

<div class="remark">

**Remark 11.5** (What is and is not claimed about $\cos\theta$).

<div id="rem:cos-caveat">

</div>

[Theorem 11.4](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#thm:cos-minimal) says that $\cos\theta$ *coordinatizes* the coarsest completion sufficient for $Q_{\mathrm{spec}}$: its level sets are exactly the spectral equivalence classes, and it separates exactly what must be separated. It does not say that $\cos\theta$ is the unique possible numerical coordinate on $E_{Q_{\mathrm{spec}}}$. Any injective function of $\cos\theta$ ,  for instance $\tfrac12(1-\cos\theta)$, or $\alpha(\theta)$ itself, or the ground-state energy $\lambda_{\min}=\alpha(\theta)^2/L^2$ ,  has the same level sets and coordinatizes the same quotient equally well; the completion is the quotient, and the coordinate is a labeling of it. Nor does [Theorem 11.4](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#thm:cos-minimal) say that $\cos\theta$ is minimal for *every* physical target on $S_{\mathrm{flat}}$. It is minimal for the nominated spectral target, and for that target only.

</div>

<div class="example">

**Example 11.6** (A target for which $\cos\theta$ is insufficient: oriented transport).

<div id="ex:transport">

</div>

Consider the target $Q_{\mathop{\mathrm{Hol}}}$ with $A_{Q_{\mathop{\mathrm{Hol}}}}=\mathrm{U}(1)$ and correct-answer map $a_{\mathop{\mathrm{Hol}}}(\theta)=e^{i\theta}$: “what phase does a unit charge acquire on being transported once around the circle in the positive direction?” Take $\theta=\pi/2$ and $\theta'=-\pi/2$. Then $$c(\pi/2)=\cos(\pi/2)=0=\cos(-\pi/2)=c(-\pi/2),$$ so $c$ does not separate these two states; but $a_{\mathop{\mathrm{Hol}}}(\pi/2)=e^{i\pi/2}=i\neq -i=e^{-i\pi/2}=a_{\mathop{\mathrm{Hol}}}(-\pi/2)$. By [Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation), $c$ is not $Q_{\mathop{\mathrm{Hol}}}$-sufficient. By [Theorem 11.2](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#thm:isospectral) the two states are nonetheless isospectral, $\operatorname{Spec}(H_{\pi/2})=\operatorname{Spec}(H_{-\pi/2})$, consistent with $c$ being sufficient for $Q_{\mathrm{spec}}$.

The full holonomy map $h$ *is* $Q_{\mathop{\mathrm{Hol}}}$-sufficient (take $b=\operatorname{id}_{\mathrm{U}(1)}$), and by [Corollary 8.4](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#cor:ordering) it is coarsest for that target, since $j_{Q_{\mathop{\mathrm{Hol}}}}=(p_F,a_{\mathop{\mathrm{Hol}}})$ has the same level sets as $h$. So on one and the same reduced source space, with one and the same readout, the minimal completion for the transport target is the full holonomy circle, while the minimal completion for the spectral target is its strictly coarser inversion quotient $\mathrm{U}(1)/(z\sim\bar z)\cong[-1,1]$. The scalar spectrum is blind to orientation; oriented transport is not. This is target-relativity of completion in its sharpest form, and it is not a defect of either description: each retains exactly what its question requires.

</div>
