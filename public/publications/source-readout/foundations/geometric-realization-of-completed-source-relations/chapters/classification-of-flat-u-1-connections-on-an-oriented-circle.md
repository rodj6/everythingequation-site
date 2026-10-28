# Classification of flat $U(1)$ connections on an oriented circle

<div id="sec:u1">

</div>

This section supplies an exact classification example: a restricted domain on which the separation hypothesis of Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction) can be *proved*, and on which the geometrically realized completion can be identified on the nose.

## The model and its conventions

<div class="convention">

**Convention 6.1** (Scope of the circle model).

<div id="conv:circle-scope">

</div>

This section is a deliberate one-dimensional specialization, and two stipulations of the general framework are suspended for it. Both are recorded here, since leaving either implicit would create a genuine inconsistency with Section [2](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#sec:source).

*Dimension.* The base is $M=S^1_L$, so $\dim M=1$ rather than the $\dim M=4$ of Convention [2.1](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#conv:basic), and the metric is Riemannian rather than Lorentzian. Nothing in Sections [2](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#sec:source)–[5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#sec:realization) used the dimension or the signature: the groupoid, the orbit space, Definition [4.1](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#def:invariant-relation), Theorem [5.3](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#thm:restricted-realization), and Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction) are all dimension- and signature-agnostic, and it is only these that the present section invokes. The descent theorem and the variational apparatus of Sections [7](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#sec:variational)–[8](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#sec:noether) are not used here.

*The metric and the allowed maps.* A tension must be resolved explicitly. The model fixes the standard metric $\mathrm{d}x^{2}$ on $S^1_L$ while also admitting *every* orientation-preserving diffeomorphism as an allowed base map; under the groupoid of Definition [2.8](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#def:groupoid), whose arrows satisfy $f_*g=g'$, a fixed metric would instead restrict the allowed base maps to its isometries, namely the rigid rotations. Of the three consistent ways to proceed, restricting the allowed diffeomorphisms to orientation-preserving isometries; transforming the metric along with the connection; or defining the circle source purely as the gauge quotient and treating the diffeomorphism question separately, we adopt the third, which is the formulation the arguments below actually use.

Accordingly, in this section the metric $\mathrm{d}x^{2}$ and its measure $\mathrm{d}x$ are treated as *fixed background structure*, not as part of the configuration: the configuration is the connection $A$ alone, and the reduced circle source is *defined* to be the gauge quotient $$
S_{\mathrm{geo}}\;:=\; \mathcal{C}_{\mathrm{geo}}^{\,\circ}\big/\operatorname{Gau}(P) .\tag{37}$$ The background metric is what gives the operator $\mathcal{D}_A$ of [(60)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Dop) its meaning, and it is not transformed by the maps considered below. The role of the orientation-preserving diffeomorphisms is then a separate matter, treated separately: they are *not* arrows acting on a metric they would have to preserve, but are used solely through the fact that they fix the homology generator $c$, and hence preserve holonomy. Lemma [6.8](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#lem:spec-invariance)(1) shows that they consequently identify no classes beyond gauge equivalence, so that [(37)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:circle-source-def) loses nothing by omitting them; and Lemma [6.8](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#lem:spec-invariance)(2) shows that the spectral relation is invariant under them for the same reason. Definition [6.2](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#def:circle-model) is to be read in this light.

</div>

<div class="definition">

**Definition 6.2** (The circle model).

<div id="def:circle-model">

</div>

Fix $L>0$ and let $M=S^1_L:=\mathbb{R}/L\mathbb{Z}$ with its standard orientation and the global angular coordinate $x$ (well defined modulo $L$). Let $G=U(1)$ and let $P=S^1_L\times U(1)$ be the trivial bundle; this is no loss of generality, since every principal $U(1)$-bundle over $S^1$ is trivial (the classifying space argument gives $\bigl[S^1,BU(1)\bigr]\cong H^2(S^1;\mathbb{Z})=0$; equivalently, every $U(1)$-bundle over a one-complex is trivial \[[11](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Steenrod)\]). Let $\mathcal{C}_{\mathrm{geo}}^{\,\circ}$ be the class of smooth connections $A$ on $P$, and let $\operatorname{Gau}(P)=C^\infty(S^1_L,U(1))$ be the gauge group; by Convention [6.1](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:circle-scope) the configuration is the connection alone, and the reduced source is the gauge quotient [(37)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:circle-source-def). The declared data $\mathcal{B}$ consist of the orientation of $S^1_L$, the resulting generator $c=[\gamma_0]\in H_1(S^1_L;\mathbb{Z})\cong\mathbb{Z}$ of the fundamental cycle, $\gamma_0(s)=s$, $s\in[0,L]$, and the fixed background metric $\mathrm{d}x^{2}$ with its measure. The orientation-preserving diffeomorphisms of $S^1_L$ fix $c$; holonomy around $c$ is therefore a legitimate function on orbits by mechanism (L3) of Section [4.4](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#sec:diff-loops), and its invariance under those diffeomorphisms is established in Lemma [6.8](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#lem:spec-invariance).

</div>

Write a connection in the global trivialization as $$
A=a(x)\,\mathrm{d}x,
\qquad a\in C^\infty(S^1_L,\mathbb{R}) .\tag{38}$$ Because $\dim M=1$, every $2$-form on $M$ vanishes; hence $$
F_A=\mathrm{d}A\equiv 0 \qquad\text{for every }A .\tag{39}$$ *Every* connection on the circle is flat. Local curvature is identically zero on this entire domain and therefore carries no information whatsoever; whatever separates orbits here must be global.

<div class="convention">

**Convention 6.3** (Gauge action and charged covariant derivative).

<div id="conv:u1-norm">

</div>

Identify $\mathfrak{u}(1)=i\mathbb{R}$ and write connections with the real potential $a$ as in [(38)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:A-circle). A gauge transformation is a smooth map $u\colon S^1_L\to U(1)$, acting on the connection by $$
A\;\longmapsto\;A^{u}\;=\;A-i\,u^{-1}\mathrm{d}u ,\tag{40}$$ which is real-valued because $-i\,u^{-1}\mathrm{d}u$ is real for $|u|=1$. On a charged scalar $\phi\in C^\infty(S^1_L,\mathbb{C})$ of unit charge, the same $u$ acts by $$
\phi\;\longmapsto\;\phi^{u}\;=\;u\,\phi ,\tag{41}$$ and the charged covariant derivative is $$
D_A\phi\;=\;\bigl(\partial_x - i\,a(x)\bigr)\phi\;\mathrm{d}x .\tag{42}$$ These three conventions are mutually consistent. Writing $u=e^{i\varphi}$ locally, so that $-i\,u^{-1}\mathrm{d}u=\mathrm{d}\varphi$ and hence $a^{u}=a+\varphi'$, we get $$\bigl(\partial_x-i\,a^{u}\bigr)\phi^{u}
=\bigl(\partial_x - i(a+\varphi')\bigr)\bigl(e^{i\varphi}\phi\bigr)
= e^{i\varphi}\Bigl(i\varphi'\phi+\partial_x\phi - i a\phi - i\varphi'\phi\Bigr)
= u\,\bigl(\partial_x - ia\bigr)\phi ,$$ so $D_{A^u}\phi^{u}=u\,D_A\phi$ transforms covariantly, as required.

</div>

<div class="definition">

**Definition 6.4** (Holonomy on the circle).

<div id="def:hol-circle">

</div>

For $A=a\,\mathrm{d}x$ set $$
\operatorname{Hol}(A)\;:=\;\exp\!\left(i\int_0^L a(x)\,\mathrm{d}x\right)\;\in\;U(1),\tag{43}$$ the holonomy around the declared fundamental cycle $\gamma_0$.

</div>

## The classification theorem

<div class="theorem">

**Theorem 6.5** (Holonomy classification).

<div id="thm:hol-class">

</div>

*Two smooth $U(1)$ connections $A=a\,\mathrm{d}x$ and $A'=a'\,\mathrm{d}x$ on $S^1_L$ are gauge equivalent if and only if $$
\operatorname{Hol}(A)=\operatorname{Hol}(A') .\tag{44}$$ Consequently $[A]\mapsto\operatorname{Hol}(A)$ is a bijection $$
\mathcal{M}_{\mathrm{flat}}\bigl(S^1,U(1)\bigr)
\;:=\;
\mathcal{C}_{\mathrm{geo}}^{\,\circ}/\operatorname{Gau}(P)
\;\;\xrightarrow{\ \cong\ }\;\;
U(1),\tag{45}$$ and it is a homeomorphism when the left-hand side carries the quotient of the $C^\infty$ topology.*

</div>

<div class="proof">

*Proof.* *Step 1: holonomy is gauge invariant.* Let $u\in C^\infty(S^1_L,U(1))$. Pull $u$ back to the universal cover: the composite $\tilde u:=u\circ\mathrm{pr}\colon[0,L]\to U(1)$, where $\mathrm{pr}(s)=s\bmod L$, lifts along the covering $\mathbb{R}\xrightarrow{\,t\mapsto e^{it}\,}U(1)$ to a smooth $\varphi\colon[0,L]\to\mathbb{R}$ with $u(x)=e^{i\varphi(x)}$ for $x\in[0,L]$, because $[0,L]$ is simply connected. Single-valuedness of $u$ on $S^1_L$ forces $$
\varphi(L)-\varphi(0)\;=\;2\pi n,
\qquad n=\deg(u)\in\mathbb{Z}.\tag{46}$$ Now $-i\,u^{-1}\mathrm{d}u = -i\,e^{-i\varphi}\cdot i\varphi'\,e^{i\varphi}\,\mathrm{d}x
=\varphi'\,\mathrm{d}x=\mathrm{d}\varphi$, so the declared action [(40)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:u1-gauge) gives $$
A^{u}\;=\;A-i\,u^{-1}\mathrm{d}u\;=\;A+\mathrm{d}\varphi,
\qquad\text{i.e.}\qquad
a^{u}=a+\varphi' .\tag{47}$$ Hence the period changes by $+2\pi n$: $$\int_0^L a^{u}
=\int_0^L a+\bigl(\varphi(L)-\varphi(0)\bigr)
=\int_0^L a+2\pi n ,$$ and therefore $$\operatorname{Hol}(A^{u})
=\exp\!\Bigl(i\int_0^L a + 2\pi i n\Bigr)
=\exp\!\Bigl(i\int_0^L a\Bigr)
=\operatorname{Hol}(A) .$$ The gauge group can shift the period integral, but only by integer multiples of $2\pi$, which $\exp(i\,\cdot\,)$ does not see. (The sign of the shift is $+2\pi n$ with the declared convention; either sign would of course leave the holonomy unchanged, but we record the correct one.)

*Step 2: equal holonomy implies gauge equivalence.* Suppose $\operatorname{Hol}(A)=\operatorname{Hol}(A')$. Then $\exp\bigl(i\int_0^L(a'-a)\bigr)=1$, so there is $n\in\mathbb{Z}$ with $$
\int_0^L\bigl(a'(x)-a(x)\bigr)\,\mathrm{d}x \;=\; 2\pi n .\tag{48}$$ Define $$
\chi(x)\;:=\;\int_0^x\bigl(a'(y)-a(y)\bigr)\,\mathrm{d}y,
\qquad x\in[0,L],\tag{49}$$ so that $\chi$ is smooth with $$
\chi'=a'-a
\qquad\text{and}\qquad
\chi(L)-\chi(0)=2\pi n\tag{50}$$ by [(48)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:period-int). The function $\chi$ itself need *not* descend to $S^1_L$, but $$
u(x)\;:=\;e^{\,i\chi(x)}\tag{51}$$ does: $u(L)=e^{i\chi(0)}e^{2\pi i n}=e^{i\chi(0)}=u(0)$, and all derivatives match at the seam because $a,a'$ are smooth and $L$-periodic, so $\chi'$ and all its derivatives are $L$-periodic. Hence $u\in C^\infty(S^1_L,U(1))$ is a bona fide gauge transformation, of degree $n$. By exactly the computation of Step 1 applied to this $u$ (with $\varphi=\chi$), $$
-i\,u^{-1}\mathrm{d}u \;=\; \mathrm{d}\chi \;=\; (a'-a)\,\mathrm{d}x \;=\; A'-A ,\tag{52}$$ using [(50)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:chi-prime). Therefore, directly from the declared action [(40)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:u1-gauge) in the form [(47)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Au-explicit), $$A^{u}\;=\;A-i\,u^{-1}\mathrm{d}u\;=\;A+(A'-A)\;=\;A' .$$ So $u$ itself carries $A$ to $A'$, and the two connections are gauge equivalent.

*Step 3: the bijection.* By Steps 1 and 2, $\operatorname{Hol}$ descends to an injection $\mathcal{C}_{\mathrm{geo}}^{\,\circ}/\operatorname{Gau}(P)\hookrightarrow U(1)$. It is surjective: for $\vartheta\in\mathbb{R}$ the constant connection $$
A_\vartheta:=\frac{\vartheta}{L}\,\mathrm{d}x
\qquad\text{satisfies}\qquad
\operatorname{Hol}(A_\vartheta)=e^{i\vartheta},\tag{53}$$ and every element of $U(1)$ is of the form $e^{i\vartheta}$. Hence [(45)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:moduli) is a bijection.

*Step 4: the homeomorphism.* Give $\mathcal{C}_{\mathrm{geo}}^{\,\circ}\cong C^\infty(S^1_L,\mathbb{R})$ its usual Fréchet ($C^\infty$) topology and the quotient $\mathcal{M}:=\mathcal{C}_{\mathrm{geo}}^{\,\circ}/\operatorname{Gau}(P)$ the quotient topology, with projection $\mathrm{pr}_{\mathcal{M}}\colon\mathcal{C}_{\mathrm{geo}}^{\,\circ}\to\mathcal{M}$. Write $\Theta\colon\mathcal{M}\to U(1)$ for the bijection [(45)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:moduli).

$\Theta$ is continuous: the map $\mathcal{C}_{\mathrm{geo}}^{\,\circ}\to U(1)$, $A\mapsto\exp(i\int_0^L a)$, is continuous (indeed it is continuous already in the $L^1$ topology, hence in $C^\infty$), and it is constant on $\operatorname{Gau}(P)$-orbits by Step 1; the universal property of the quotient topology then makes $\Theta$ continuous.

For the inverse, we do *not* attempt to choose a global continuous argument $\vartheta$ on $U(1)$, no such choice exists. Instead define $$
\sigma\colon\mathbb{R}\longrightarrow\mathcal{M},
\qquad
\sigma(\vartheta):=\mathrm{pr}_{\mathcal{M}}\bigl(A_\vartheta\bigr)
=\bigl[\tfrac{\vartheta}{L}\,\mathrm{d}x\bigr] .\tag{54}$$ The map $\mathbb{R}\to\mathcal{C}_{\mathrm{geo}}^{\,\circ}$, $\vartheta\mapsto A_\vartheta$, is continuous (it is linear into the constants, and the $C^\infty$ seminorms of $A_\vartheta$ depend continuously on $\vartheta$), so $\sigma$ is continuous as a composite with $\mathrm{pr}_{\mathcal{M}}$.

$\sigma$ is $2\pi$-periodic. Indeed $A_{\vartheta+2\pi}-A_\vartheta=\tfrac{2\pi}{L}\mathrm{d}x$, and by Step 2 (with $a=\vartheta/L$, $a'=(\vartheta+2\pi)/L$, so that $\int_0^L(a'-a)=2\pi$, i.e. $n=1$) the connections $A_\vartheta$ and $A_{\vartheta+2\pi}$ are gauge equivalent; explicitly the gauge transformation is $u(x)=e^{2\pi i x/L}$, of degree $1$. Hence $\sigma(\vartheta+2\pi)=\sigma(\vartheta)$ for all $\vartheta$.

Therefore $\sigma$ factors through the quotient $\mathbb{R}\to\mathbb{R}/2\pi\mathbb{Z}$, and since $\mathbb{R}/2\pi\mathbb{Z}\cong U(1)$ via $\vartheta\bmod 2\pi\mapsto e^{i\vartheta}$ (a homeomorphism), we obtain a continuous map $$
\bar\sigma\colon U(1)\longrightarrow\mathcal{M},
\qquad
\bar\sigma\bigl(e^{i\vartheta}\bigr)=\sigma(\vartheta) ,\tag{55}$$ well defined and continuous by the universal property of the quotient $\mathbb{R}\to\mathbb{R}/2\pi\mathbb{Z}$ (which is an open, hence quotient, map). Finally $\Theta\circ\bar\sigma=\mathrm{id}_{U(1)}$ by [(53)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Atheta), and $\bar\sigma\circ\Theta=\mathrm{id}_{\mathcal{M}}$ because both sides are the identity on the classes $[A_\vartheta]$, which exhaust $\mathcal{M}$ by Step 3 together with the injectivity of $\Theta$. Hence $\bar\sigma=\Theta^{-1}$ is continuous, and $\Theta$ is a homeomorphism. ◻

</div>

<div class="remark">

*Remark 36* (Where the hypotheses are used).

<div id="rem:u1-hyps">

</div>

Three hypotheses were used and cannot be dropped. *Smoothness and periodicity* of $a,a'$ give smoothness of $u$ across the seam in Step 2. *Connectedness of $S^1$*, with $\pi_1(S^1)\cong\mathbb{Z}$ generated by a single class, is what makes one period integral a complete invariant. *Orientation*, fixed in Definition [6.2](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#def:circle-model), is what makes $\int_0^L$ well defined with a sign: reversing orientation sends $\operatorname{Hol}\mapsto\operatorname{Hol}^{-1}$, and it is precisely this ambiguity that reappears in Corollary [6.9](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:spec). The declaration of the allowed diffeomorphism group as the orientation-preserving one is therefore part of the hypothesis of the theorem.

</div>

## The realized completions

<div class="corollary">

**Corollary 6.7** (Exact geometric realization of the holonomy completion).

<div id="cor:hol-completion">

</div>

*In the circle model, take the curvature readout $$
p_F\colon S_{\mathrm{geo}}=\mathcal{M}_{\mathrm{flat}}(S^1,U(1))\longrightarrow T=\{0\},
\qquad
p_F\bigl([A]\bigr)=F_A=0 ,\tag{56}$$ which by [(39)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:flat) is constant and hence retains *no* information, and take the single invariant relation $J_{\mathrm{hol}}([A])=\operatorname{Hol}(A)\in U(1)$. Then $$
E_{\mathrm{hol}}
=\operatorname{Im}\bigl(p_F,J_{\mathrm{hol}}\bigr)
\;\cong\;
\mathcal{M}_{\mathrm{flat}}\bigl(S^1,U(1)\bigr)
\;\cong\; U(1),\tag{57}$$ and the completion map $e_{\mathrm{hol}}\colon S_{\mathrm{geo}}\to E_{\mathrm{hol}}$ is a *bijection*.*

</div>

<div class="proof">

*Proof.* $\operatorname{Im}(p_F,J_{\mathrm{hol}})=\{0\}\times\operatorname{Im}J_{\mathrm{hol}}=\{0\}\times U(1)\cong U(1)$, by the surjectivity established in Step 3 of Theorem [6.5](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#thm:hol-class). The family $\{p_F\}\cup\{J_{\mathrm{hol}}\}$ separates orbits by the injectivity established there, so Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction) gives injectivity of $e_{\mathrm{hol}}$; surjectivity is Theorem [5.3](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#thm:restricted-realization)(1). ◻

</div>

Corollary [6.7](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:hol-completion) is the sharpest illustration in this paper of the mechanism the sequence is about. The readout $p_F$ is maximally degenerate, it is constant, so on its own it distinguishes nothing. Yet the reduced source is not a point: it is a circle of genuinely inequivalent physical configurations. The completion recovers exactly that circle, from a single global relation, on a domain where local curvature vanishes identically. Holonomy here is not one invariant among many: it separates *all* gauge orbits and therefore reconstructs the reduced geometric source completely. This is the mathematical content of the Aharonov–Bohm and Wu–Yang observations \[[1](/source-readout/geometric-realization-of-completed-source-relations/references#bib-AharonovBohm), [13](/source-readout/geometric-realization-of-completed-source-relations/references#bib-WuYang)\].

<div class="lemma">

**Lemma 6.8** (The reduced circle source, and invariance of the charged spectrum).

<div id="lem:spec-invariance">

</div>

*In the circle model of Definition [6.2](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#def:circle-model), with the scope fixed by Convention [6.1](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:circle-scope):*

1.  *The orientation-preserving diffeomorphisms of $S^1_L$ identify no connection classes beyond gauge equivalence: for every such $f$ and every $A$, the pushforward $f_*A$ is gauge equivalent to $A$. Hence adjoining them to the gauge group would coarsen nothing, and the reduced source [(37)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:circle-source-def) may be written $$
          S_{\mathrm{geo}}\;=\; \mathcal{C}_{\mathrm{geo}}^{\,\circ}\big/\operatorname{Gau}(P) \;=\; \mathcal{M}_{\mathrm{flat}}\bigl(S^1,U(1)\bigr) .\tag{58}$$*

2.  *The spectral multiset $\operatorname{spec}\mathcal{D}_A$ of [(60)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Dop), computed with respect to the fixed background metric $\mathrm{d}x^{2}$ and measure $\mathrm{d}x$ on $S^1_L$, is invariant under gauge transformations and under orientation-preserving diffeomorphisms, and is therefore a well-defined invariant relation on $S_{\mathrm{geo}}$.*

</div>

<div class="proof">

*Proof.* Let $f$ be an orientation-preserving diffeomorphism of $S^1_L$ and let $A$ be a connection. Since $f$ preserves the orientation, it fixes the fundamental generator $c=[\gamma_0]$ of $H_1(S^1_L;\mathbb{Z})$. Because $G=U(1)$ is abelian and every connection on $S^1_L$ is flat by [(39)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:flat), the holonomy of a connection around a loop depends on that loop only through its class in $H_1(S^1_L;\mathbb{Z})$; the pushforward $f_*A$ therefore has the same holonomy around $c$ as $A$ does: $$
\operatorname{Hol}\bigl(f_*A\bigr)=\operatorname{Hol}(A) .\tag{59}$$ (Concretely, $\int_{S^1_L} f_*A=\int_{S^1_L}A$ by the change-of-variables formula for the orientation-preserving $f$, the integrand being a $1$-form.)

*(1).* By [(59)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:hol-diffeo) and the sufficiency direction of Theorem [6.5](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#thm:hol-class), equality of holonomy already implies gauge equivalence; hence $f_*A$ is gauge equivalent to $A$ for every orientation-preserving $f$ and every $A$. The equivalence relation generated by the gauge group together with the orientation-preserving diffeomorphisms therefore coincides with gauge equivalence alone, so the quotient [(37)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:circle-source-def) is unchanged by adjoining them, and [(58)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Sgeo-circle) holds.

*(2).* Let $A$ and $A'$ be connections related either by a gauge transformation or by the pushforward along an orientation-preserving diffeomorphism. In the second case part (1) supplies a gauge transformation achieving the same result, so in either case there is $u\in\operatorname{Gau}(P)$ with $A'=A^{u}$. The operator $\mathcal{D}$ is defined with respect to the fixed background metric and measure of Convention [6.1](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:circle-scope), which are not transformed; the diffeomorphism therefore plays no further role, and only the gauge covariance established in Convention [6.3](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:u1-norm) is needed. There we verified $D_{A^{u}}\phi^{u}=u\,D_A\phi$ for $\phi^{u}=u\phi$; iterating, $$\mathcal{D}_{A^{u}}\bigl(u\,\phi\bigr)
=u\,\mathcal{D}_{A}\phi
\qquad\text{for all }\phi\in C^\infty(S^1_L,\mathbb{C}).$$ Thus the multiplication operator $\mathcal{U}_u\phi:=u\phi$ intertwines $\mathcal{D}_A$ with $\mathcal{D}_{A^{u}}$. Since $|u(x)|=1$ pointwise, $\mathcal{U}_u$ is an isometry of $L^2(S^1_L,\mathrm{d}x)$ with inverse $\mathcal{U}_{u^{-1}}$, hence unitary; and it preserves $C^\infty(S^1_L,\mathbb{C})$, hence carries the domain of $\mathcal{D}_A$ onto that of $\mathcal{D}_{A^{u}}$. Therefore $\mathcal{D}_{A}$ and $\mathcal{D}_{A'}=\mathcal{D}_{A^{u}}$ are unitarily equivalent, and their spectral multisets coincide. Since $A$ and $A'$ were an arbitrary pair related by a gauge transformation or by an allowed diffeomorphism, the spectral multiset is a well-defined function on $S_{\mathrm{geo}}$, which is the assertion. ◻

</div>

<div class="corollary">

**Corollary 6.9** (A strictly coarser spectral completion).

<div id="cor:spec">

</div>

*Retain the source architecture of Corollary [6.7](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:hol-completion): the source is $S_{\mathrm{geo}}=\mathcal{M}_{\mathrm{flat}}(S^1,U(1))$ and the declared Tier-1 readout remains the curvature $p_F$, which is constant. Adjoin, as the invariant relation, the spectrum of the charged-scalar operator $$
\mathcal{D}_A:=-\bigl(\partial_x-i\,a(x)\bigr)^{2}
\qquad\text{on}\qquad
C^\infty(S^1_L,\mathbb{C})\subseteq L^2(S^1_L,\mathrm{d}x),\tag{60}$$ computed with respect to the fixed standard metric $\mathrm{d}x^2$ and measure $\mathrm{d}x$ on $S^1_L$, with the conventions of Convention [6.3](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:u1-norm) and the standard self-adjoint domain (the closure of $\mathcal{D}_A$ on $C^\infty(S^1_L,\mathbb{C})$; $S^1_L$ is closed, so no boundary conditions are needed and the operator is essentially self-adjoint there). The unitary charge-one representation ensures that gauge transformations act unitarily on the charged-scalar Hilbert space, so the spectral multiset is gauge invariant and hence a well-defined function on the declared gauge quotient [(37)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:circle-source-def). Its invariance under the auxiliary orientation-preserving diffeomorphism action, which, as noted in Convention [6.1](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:circle-scope), is treated separately and does not consist of arrows of the fixed-metric groupoid, a general such diffeomorphism not preserving $\mathrm{d}x$, is proved separately in Lemma [6.8](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#lem:spec-invariance)(2). Set $J_{\mathrm{spec}}([A]):=\operatorname{spec}\mathcal{D}_A$. Writing $\operatorname{Hol}(A)=e^{i\vartheta}$, $$
\operatorname{spec}\mathcal{D}_A
=\left\{
\left(\frac{2\pi k-\vartheta}{L}\right)^{\!2}
:\; k\in\mathbb{Z}
\right\}
\qquad\text{(as a multiset)} ,\tag{61}$$ and the resulting realized completion is $$
E_{\mathrm{spec}}
\;\cong\;
U(1)\big/\bigl(z\sim z^{-1}\bigr)
\;\cong\;
[-1,1],\tag{62}$$ which is *strictly coarser* than $E_{\mathrm{hol}}$: the completion map $S_{\mathrm{geo}}\to E_{\mathrm{spec}}$ is surjective but not injective, its nontrivial fibres being exactly the pairs $\{[A_\vartheta],[A_{-\vartheta}]\}$ with $\vartheta\not\equiv 0,\pi\pmod{2\pi}$.*

</div>

<div class="proof">

*Proof.* *The spectrum.* By Theorem [6.5](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#thm:hol-class) every class has the representative $A_\vartheta=(\vartheta/L)\,\mathrm{d}x$ of [(53)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Atheta), and by Example [4.3](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#ex:spectral)(ii) the spectrum is unchanged along the gauge orbit, so we may compute with $A_\vartheta$. With $a\equiv\vartheta/L$ constant, $\mathcal{D}_{A_\vartheta}$ has the complete orthonormal system of eigenfunctions $\psi_k(x)=L^{-1/2}e^{2\pi i k x/L}$, $k\in\mathbb{Z}$ (complete in $L^2(S^1_L,\mathrm{d}x)$ by Fourier theory). By the convention [(42)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:u1-covder), $$\Bigl(\partial_x-i\tfrac{\vartheta}{L}\Bigr)\psi_k
=\Bigl(\tfrac{2\pi i k}{L}-\tfrac{i\vartheta}{L}\Bigr)\psi_k
=i\,\frac{2\pi k-\vartheta}{L}\,\psi_k ,$$ and hence, squaring and inserting the overall minus sign of [(60)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Dop), $$\mathcal{D}_{A_\vartheta}\psi_k
=-\left(i\,\frac{2\pi k-\vartheta}{L}\right)^{\!2}\psi_k
=\left(\frac{2\pi k-\vartheta}{L}\right)^{\!2}\psi_k .$$ Since the $\psi_k$ are complete, the spectrum is purely discrete and is exactly the multiset [(61)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:spec). Note that $\vartheta$ is defined only modulo $2\pi$, and [(61)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:spec) is invariant under $\vartheta\mapsto\vartheta+2\pi$ via the relabelling $k\mapsto k+1$; the multiset is therefore a well-defined function of $[A]$, as it must be.

*“If”: inversion-related holonomies are spectrally equal.* Replacing $\vartheta$ by $-\vartheta$ in [(61)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:spec) and relabelling $k\mapsto -k$ carries the multiset to itself, since $(2\pi(-k)-(-\vartheta))^2=(-(2\pi k-\vartheta))^2=(2\pi k-\vartheta)^2$. Hence $[A_\vartheta]$ and $[A_{-\vartheta}]$, which by Theorem [6.5](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#thm:hol-class) are distinct classes whenever $e^{i\vartheta}\neq e^{-i\vartheta}$, i.e. whenever $\vartheta\not\equiv0,\pi\pmod{2\pi}$, have the same spectrum.

*“Only if”: equal spectra force inversion-related holonomies.* We prove this directly rather than by citation. Suppose $\operatorname{spec}\mathcal{D}_{A_\vartheta}
=\operatorname{spec}\mathcal{D}_{A_{\vartheta'}}$ as multisets. Normalize $\vartheta,\vartheta'\in[0,2\pi)$, which is permissible by the periodicity just noted. By [(61)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:spec) every eigenvalue of $\mathcal{D}_{A_\vartheta}$ is a nonnegative real number, so we may form the set of both real square roots of the eigenvalues, rescaled by $L/2\pi$: $$\begin{aligned}
\Sigma(\vartheta)
&:=\Bigl\{\pm\tfrac{L}{2\pi}\sqrt{\lambda}\;:\;
\lambda\in\operatorname{spec}\mathcal{D}_{A_\vartheta}\Bigr\}
\\
&\phantom{:}=
\Bigl\{k-\tfrac{\vartheta}{2\pi}\;:\;k\in\mathbb{Z}\Bigr\}
\;\cup\;
\Bigl\{-k+\tfrac{\vartheta}{2\pi}\;:\;k\in\mathbb{Z}\Bigr\}
\\
&\phantom{:}=
\Bigl(-\tfrac{\vartheta}{2\pi}+\mathbb{Z}\Bigr)
\;\cup\;
\Bigl(\tfrac{\vartheta}{2\pi}+\mathbb{Z}\Bigr),
\end{aligned}$$ which is determined by the spectral multiset alone. Thus equality of spectra gives $$\Bigl(\tfrac{\vartheta}{2\pi}+\mathbb{Z}\Bigr)\cup\Bigl(-\tfrac{\vartheta}{2\pi}+\mathbb{Z}\Bigr)
\;=\;
\Bigl(\tfrac{\vartheta'}{2\pi}+\mathbb{Z}\Bigr)\cup\Bigl(-\tfrac{\vartheta'}{2\pi}+\mathbb{Z}\Bigr)$$ as subsets of $\mathbb{R}$. Intersecting both sides with the interval $[0,1)$ and comparing, the unordered pair of residues $\{\tfrac{\vartheta}{2\pi}\bmod 1,\;-\tfrac{\vartheta}{2\pi}\bmod 1\}$ equals the pair $\{\tfrac{\vartheta'}{2\pi}\bmod 1,\;-\tfrac{\vartheta'}{2\pi}\bmod 1\}$. Hence $\vartheta'\equiv\vartheta$ or $\vartheta'\equiv-\vartheta \pmod{2\pi}$, that is, $\operatorname{Hol}(A')=\operatorname{Hol}(A)^{\pm1}$, as claimed.

*The completion.* By the two directions just proved, the relation $J_{\mathrm{spec}}$ has exactly the level sets of the map $U(1)\to U(1)/(z\sim z^{-1})$. Since the readout $p_F$ is constant and contributes nothing, Definition [5.2](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#def:egeo) gives $E_{\mathrm{spec}}=\operatorname{Im}(p_F,J_{\mathrm{spec}})\cong U(1)/(z\sim z^{-1})$. The map $z=e^{i\vartheta}\mapsto\tfrac12(z+z^{-1})=\cos\vartheta$ is a continuous bijection from this quotient onto $[-1,1]$ (it is well defined and injective on the quotient, and surjective onto $[-1,1]$), and it is a homeomorphism since the quotient is compact and $[-1,1]$ is Hausdorff. This gives [(62)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Espec). Non-injectivity of the completion map and the description of its fibres now follow from Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction) applied to the coarser relation family $\{p_F\}\cup\{J_{\mathrm{spec}}\}$. ◻

</div>

<div class="remark">

*Remark 40* (The two corollaries together).

<div id="rem:two-corollaries">

</div>

Corollaries [6.7](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:hol-completion) and [6.9](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:spec) are two halves of one lesson, and both are consequences of Theorem [5.3](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#thm:restricted-realization) and Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction) applied to the *same* source $S_{\mathrm{geo}}$ with the *same* constant readout $p_F$; only the declared invariant relation differs. The realized completion is relative to the declared relation family (Remark [5.4](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#rem:relative)). Declare holonomy and the source is reconstructed exactly; declare instead the charged-scalar spectrum and a residual $z\sim z^{-1}$ degeneracy survives the completion, the shadow of the complex conjugation $\phi\mapsto\bar\phi$, equivalently of the orientation reversal excluded in Definition [6.2](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#def:circle-model) (Remark [6.6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#rem:u1-hyps)). This is the Paper 2 phenomenon \[[17](/source-readout/geometric-realization-of-completed-source-relations/references#bib-ST2)\], realized geometrically: whether the lost information obstructs the nominated target depends on the target.

</div>
