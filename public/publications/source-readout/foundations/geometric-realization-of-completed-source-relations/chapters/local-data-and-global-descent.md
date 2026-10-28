# Local data and global descent

<div id="sec:descent">

</div>

We now establish the first leg of the progression: compatible local data glue to global fields. This is the theorem that fixes the *domain* of geometric realization. The material is classical \[[6](/source-readout/geometric-realization-of-completed-source-relations/references#bib-KobayashiNomizu1), [11](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Steenrod), [3](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Bleecker)\]; what is new is only the use to which it is put and the care with which the invariance and admissibility hypotheses are tracked.

## Local data and compatibility equations

Let $\{U_i\}_{i\in I}$ be an open cover of $M$. Suppose we are given, for each $i\in I$, $$
g_i\in\Gamma\bigl(S^2T^*U_i\bigr),
\qquad
A_i\in\Omega^1(U_i,\mathfrak{g}),
\qquad
\Phi_i\in C^\infty(U_i,W),\tag{10}$$ where each $g_i$ is an *intrinsic* smooth symmetric covariant $2$-tensor field on the open set $U_i\subseteq M$, of Lorentzian signature at every point; together with smooth transition functions $$
h_{ij}\colon U_i\cap U_j\longrightarrow G .\tag{11}$$ If in addition each $U_i$ is the domain of a chart $\psi_i\colon U_i\to\psi_i(U_i)\subseteq\mathbb{R}^4$, we may pass to *coordinate components*. These live on the coordinate images, not on $M$: setting $$
\bigl(\check g_i\bigr)_{ab}
:=\bigl((\psi_i^{-1})^*g_i\bigr)_{ab}
\quad\text{on}\quad \psi_i(U_i)\subseteq\mathbb{R}^4 ,\tag{12}$$ and writing $\psi_{ij}:=\psi_i\circ\psi_j^{-1}$ for the coordinate transition map on $\psi_j(U_i\cap U_j)$, the components of a *single* intrinsic tensor in two charts are related by the usual pullback law $$
\check g_j \;=\; \psi_{ij}^{\,*}\,\check g_i
\qquad\text{on}\qquad \psi_j(U_i\cap U_j),
\qquad\text{i.e.}\qquad
\bigl(\check g_j\bigr)_{cd}
=\frac{\partial \psi_{ij}^{\,a}}{\partial x^{c}}\,
 \frac{\partial \psi_{ij}^{\,b}}{\partial x^{d}}\,
 \bigl(\check g_i\bigr)_{ab}\circ\psi_{ij}.\tag{13}$$ Equation [(13)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:component-law) is a statement about *components on coordinate images*. It is distinct from the gluing condition [(15)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:metric-overlap) below, which is a relation among the intrinsic tensors $g_i$ on their overlaps.

<div class="definition">

**Definition 3.1** (Compatible local geometric data).

<div id="def:compatible">

</div>

The collection $\{g_i,h_{ij},A_i,\Phi_i\}$ is *compatible* if, on every nonempty overlap (respectively triple overlap): $$\begin{aligned}
\qquad\text{(14)}
h_{ii}&=1,
&
h_{ji}&=h_{ij}^{-1},
&
h_{ij}h_{jk}&=h_{ik} ,
\\[0.3em]
\qquad\text{(15)}
g_i\big|_{U_i\cap U_j} &= g_j\big|_{U_i\cap U_j} ,
\\[0.3em]
\qquad\text{(16)}
A_j &= \operatorname{Ad}_{h_{ij}^{-1}}A_i + h_{ij}^{*}\theta_G ,
\\[0.3em]
\qquad\text{(17)}
\Phi_j &= \rho\bigl(h_{ij}^{-1}\bigr)\Phi_i .
\end{aligned}$$ Here [(14)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:cocycle) is the Čech cocycle condition; [(15)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:metric-overlap) is the gluing condition (agreement of restrictions) for a section of the sheaf $S^2T^*M$; and [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap), [(17)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:matter-overlap) are the compatibility conditions for local connection forms and local matter representatives, $\theta_G$ denoting the left Maurer–Cartan form on $G$. For a matrix group $G\subseteq\mathrm{GL}(n)$, equation [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap) takes the familiar form $$A_j = h_{ij}^{-1}A_i\,h_{ij} + h_{ij}^{-1}\,\mathrm{d}h_{ij} .$$

</div>

<div class="remark">

*Remark 13* (Čech $H^1$ for nonabelian $G$).

<div id="rem:cech">

</div>

A cocycle $\{h_{ij}\}$ satisfying [(14)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:cocycle) represents a class in $\check H^1(\{U_i\},\underline{G})$, where $\underline{G}$ is the sheaf of smooth $G$-valued functions. For nonabelian $G$ this object is a *pointed set* of cocycle classes, the distinguished point being the class of the trivial cocycle, and not a group; two cocycles are equivalent when they are cohomologous in the sense $h'_{ij}=\lambda_i^{-1}h_{ij}\lambda_j$ for smooth $\lambda_i\colon U_i\to G$. Passing to the direct limit over refinements gives the pointed set $\check H^1(M,\underline{G})$, which classifies principal $G$-bundles over $M$ up to isomorphism \[[11](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Steenrod)\]. Only for abelian $G$ does this pointed set carry a natural group structure; we use it below only as a pointed set.

</div>

<div class="assumption">

**Assumption 3.3** (Regularity of the descent data).

<div id="ass:descent-reg">

</div>

The cover $\{U_i\}$ is locally finite; the $g_i$, $A_i$, $\Phi_i$, $h_{ij}$ are smooth on their domains; and each $g_i$ has the signature fixed in Convention [2.1](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#conv:basic). If a weaker regularity class is used in $\mathcal{C}_{\mathrm{geo}}$, the same statements hold with “smooth” replaced uniformly by that class, provided the class is closed under restriction and under the gauge transformations appearing in [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap)–[(17)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:matter-overlap).

</div>

## The descent theorem

<div class="theorem">

**Theorem 3.4** (Geometric descent).

<div id="thm:descent">

</div>

*Let $\{g_i,h_{ij},A_i,\Phi_i\}$ be compatible local geometric data in the sense of Definition [3.1](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#def:compatible), satisfying Assumption [3.3](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#ass:descent-reg). Then these data determine:*

1.  *a global Lorentzian metric $g$ on $M$ with $g|_{U_i}=g_i$;*

2.  *a principal $G$-bundle $\pi\colon P\to M$ with local trivializations over $\{U_i\}$ whose transition functions are $\{h_{ij}\}$;*

3.  *a global principal connection $A$ on $P$ whose local representatives (pullbacks along the canonical local sections $s_i$) are the $A_i$;*

4.  *a global section $\Phi$ of $P\times_\rho W$ whose local representatives are the $\Phi_i$.*

*The resulting global tuple $(g,P,A,\Phi)$ is unique up to the bundle isomorphisms induced by change of local trivialization. Conversely, every global tuple $(g,P,A,\Phi)$ over $M$ arises in this way from compatible local data, for any cover trivializing $P$.*

*The theorem reconstructs the metric $g$; it does *not* by itself produce a time orientation. Membership of $(M,g)$ in the time-oriented admissibility class $\mathcal{C}_{\mathrm{geo}}$ of Definition [2.4](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#def:admissible) is an additional *global* condition on the glued metric, discussed in Remark [3.6](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#rem:descent-time).*

</div>

<div class="proof">

*Proof.* *(1) The metric.* Condition [(15)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:metric-overlap) says exactly that the intrinsic tensors $g_i$ and $g_j$ restrict to the same tensor field on $U_i\cap U_j$. Since $\Gamma(S^2T^*-)$ is a sheaf on $M$, the gluing axiom yields a unique global section $g\in\Gamma(S^2T^*M)$ with $g|_{U_i}=g_i$ for all $i$. Nondegeneracy and signature are pointwise properties of the symmetric bilinear form $g_x$ on $T_xM$; every $x\in M$ lies in some $U_i$, where $g_x=(g_i)_x$ is Lorentzian by hypothesis. Hence $g$ is Lorentzian. (If one prefers to present the data in coordinate components, the equivalent hypothesis is [(13)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:component-law), which expresses that the $\check g_i$ are the component arrays of a single intrinsic tensor; the invariance of signature under the linear isomorphism $\mathrm{d}\psi_{ij}(x)$ is then Sylvester’s law of inertia.)

*(2) The bundle.* Form the disjoint union $\coprod_{i\in I}U_i\times G\times\{i\}$ and impose $$
(x,a,i)\;\sim\;\bigl(x,\;h_{ji}(x)\,a,\;j\bigr),
\qquad x\in U_i\cap U_j,\; a\in G .\tag{18}$$ Reflexivity follows from $h_{ii}=1$, symmetry from $h_{ij}=h_{ji}^{-1}$, and transitivity from $h_{kj}h_{ji}=h_{ki}$; hence [(18)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:bundle-glue) is an equivalence relation. Let $P$ be the quotient with the quotient topology, $\pi[(x,a,i)]:=x$.

We record the trivializations rigorously. Fix $i$ and $x\in U_i$. *Every equivalence class lying over $x$ has exactly one representative whose third entry is $i$*: existence, because if a class contains $(x,b,j)$ then it contains $(x,h_{ij}(x)b,i)$; uniqueness, because $(x,a,i)\sim(x,a',i)$ forces $a'=h_{ii}(x)a=a$. Hence the map $$
\varphi_i\colon \pi^{-1}(U_i)\longrightarrow U_i\times G,
\qquad
\varphi_i\bigl([(x,a,i)]\bigr)=(x,a)\tag{19}$$ is a well-defined bijection, with inverse $\varphi_i^{-1}(x,a)=[(x,a,i)]$; it is a homeomorphism by definition of the quotient topology, and we give $P$ the smooth structure for which the $\varphi_i$ are diffeomorphisms (consistent, since the change of trivialization $\varphi_i\circ\varphi_j^{-1}(x,a)=(x,h_{ij}(x)a)$ is smooth). The right $G$-action $[(x,a,i)]\cdot b:=[(x,ab,i)]$ is well defined, because $h_{ji}$ acts by *left* multiplication and hence commutes with right multiplication; it is free and transitive on fibres, and each $\varphi_i$ is $G$-equivariant. Thus $\pi\colon P\to M$ is a principal $G$-bundle with transition functions $h_{ij}$.

*(3) The connection.* Let $s_i\colon U_i\to P$ be the canonical local sections $s_i(x):=\varphi_i^{-1}(x,1)$, so that $s_j=s_i\cdot h_{ij}$ on $U_i\cap U_j$. A principal connection $A\in\Omega^1(P,\mathfrak{g})$ is determined by its local representatives $A_i:=s_i^*A$, and a family $\{A_i\}$ arises from a (necessarily unique) global $A$ if and only if it obeys the law induced by $s_j=s_i\cdot h_{ij}$, namely $$s_j^*A \;=\; \operatorname{Ad}_{h_{ij}^{-1}}\bigl(s_i^*A\bigr)+h_{ij}^*\theta_G,$$ which is precisely [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap). Given [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap), define $A$ over $U_i$ by the pullback identity $$
\bigl(\varphi_i^{-1}\bigr)^{*}A
\;=\;
\operatorname{Ad}_{a^{-1}}\bigl(\pi_U^{*}A_i\bigr)\;+\;\theta_G
\qquad\text{on}\qquad U_i\times G,\tag{20}$$ where $\pi_U\colon U_i\times G\to U_i$ and the projection $U_i\times G\to G$ are understood, $a$ denotes the $G$-coordinate, and $\theta_G$ is pulled back along that projection. Formula [(20)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:conn-reconstruct) is an equality of $\mathfrak{g}$-valued $1$-forms on the manifold $U_i\times G$; it is not an evaluation at a point. Two such local definitions agree on $\pi^{-1}(U_i\cap U_j)$: transporting [(20)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:conn-reconstruct) for $j$ through $\varphi_i\circ\varphi_j^{-1}(x,a)=(x,h_{ij}(x)a)$ and using the standard identity $(L_{h}\circ)^*\theta_G=\theta_G$ together with the Maurer–Cartan expansion of $\mathrm{d}(h_{ij}a)$ reproduces [(20)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:conn-reconstruct) for $i$ exactly when [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap) holds. The resulting $1$-form is $G$-equivariant, $R_b^*A=\operatorname{Ad}_{b^{-1}}A$, and reproduces the fundamental vector fields, $A(\zeta_X)=X$; hence it is a principal connection \[[6](/source-readout/geometric-realization-of-completed-source-relations/references#bib-KobayashiNomizu1)\].

*(4) The matter section.* Sections of $P\times_\rho W$ correspond bijectively to $\rho$-equivariant maps $\tilde\Phi\colon P\to W$ with $\tilde\Phi(p\cdot a)=\rho(a^{-1})\tilde\Phi(p)$, and such maps correspond to families $\Phi_i:=\tilde\Phi\circ s_i$ obeying $\Phi_j=\tilde\Phi\circ(s_i\cdot h_{ij})=\rho(h_{ij}^{-1})\Phi_i$, which is [(17)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:matter-overlap). Hence the $\Phi_i$ glue to a unique global section $\Phi$.

*Uniqueness up to isomorphism.* Suppose two systems of local trivializations over a common cover (or over covers admitting a common refinement, after passing to it) produce compatible data $\{g_i,h_{ij},A_i,\Phi_i\}$ and $\{g_i,h'_{ij},A'_i,\Phi'_i\}$ with cohomologous cocycles, $h'_{ij}=\lambda_i^{-1}h_{ij}\lambda_j$ for smooth $\lambda_i\colon U_i\to G$, together with $A'_i=\operatorname{Ad}_{\lambda_i^{-1}}A_i+\lambda_i^*\theta_G$ and $\Phi'_i=\rho(\lambda_i^{-1})\Phi_i$. Then the maps $\varphi_i'^{-1}(x,a)\mapsto\varphi_i^{-1}(x,\lambda_i(x)a)$ agree on overlaps, exactly because the cocycles are cohomologous, and assemble into a $G$-equivariant bundle isomorphism $P'\to P$ covering $\mathrm{id}_M$, carrying $A'$ to $A$ and $\Phi'$ to $\Phi$. That is, it is a vertical arrow of $\mathfrak{G}_{\mathrm{geo}}$. Conversely, an arrow of $\mathfrak{G}_{\mathrm{geo}}$ between global tuples, read in local trivializations, exhibits the two systems of local data as related in exactly this way. Hence the global tuple is well defined precisely as an object of $\mathfrak{G}_{\mathrm{geo}}$ up to isomorphism.

*Converse.* Given a global tuple, choose any cover $\{U_i\}$ trivializing $P$ (possible since $M$ is paracompact and $P$ is locally trivial); the induced $g_i:=g|_{U_i}$, $h_{ij}$, $A_i=s_i^*A$, $\Phi_i$ satisfy [(14)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:cocycle)–[(17)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:matter-overlap) by the computations above. ◻

</div>

<div class="remark">

*Remark 16* (Changing the coordinate atlas is not a base diffeomorphism).

<div id="rem:atlas">

</div>

The uniqueness clause above is stated for changes of *local trivialization*, which induce *vertical* bundle isomorphisms covering $\mathrm{id}_M$. A change of *coordinate atlas* is a a different operation: re-charting $M$ changes the component arrays $\check g_i$ of [(12)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:components) according to [(13)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:component-law) while leaving the intrinsic tensor $g$, and hence the object $\Psi$ and its class $[\Psi]\in S_{\mathrm{geo}}$, entirely unchanged. It does not automatically produce a nontrivial base diffeomorphism, and it does not move a point of $S_{\mathrm{geo}}$. Nontrivial base diffeomorphisms enter only through the arrows of $\mathfrak{G}_{\mathrm{geo}}$ with $f\neq\mathrm{id}_M$, which act on the geometry itself and not merely on its coordinate presentation.

</div>

<div class="remark">

*Remark 17* (Descent and time orientation).

<div id="rem:descent-time">

</div>

Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent) glues the local metrics to a global Lorentzian $g$, but it does not produce the time orientation $\mathfrak{t}$ that Definition [2.4](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#def:admissible) demands. Whether $g$ admits any time orientation at all is a global topological condition on $(M,g)$ (it holds if and only if the timelike cone bundle of $g$ has a global continuous section of one of its components), and no purely local compatibility condition can force it. Two consistent options are available, and a model must declare one.

*Option (a): impose it after descent.* Glue $g$ as above, then require, as an additional global admissibility condition, that $g$ be time-orientable and that a time orientation $\mathfrak{t}$ be chosen and recorded in $\mathcal{B}$. Under this option Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent) reconstructs the metric, and membership of the reconstructed configuration in $\mathcal{C}_{\mathrm{geo}}$ is a further global condition, verified separately.

*Option (b): descend it.* Adjoin to the local data a choice, for each $i$, of a $g_i$-timelike vector field $\tau_i\in\Gamma(TU_i)$, and impose the additional compatibility condition that on every nonempty overlap $\tau_i$ and $\tau_j$ lie in the *same* component of the timelike cone, $$
g_i(\tau_i,\tau_j)<0 \qquad\text{on } U_i\cap U_j\tag{21}$$ (with signature $(-,+,+,+)$, so that two timelike vectors have negative inner product exactly when they are causally co-oriented). Condition [(21)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:time-glue) is a genuine gluing condition: the relation “lies in the same cone component as” is an equivalence relation on timelike vectors at each point, and the local choices $\tau_i$ define, by [(21)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:time-glue), a coherent global selection of one component of the cone bundle at every $x\in M$. That selection is by definition a time orientation $\mathfrak{t}$ of the glued $g$, and it is unique given the $\tau_i$. Descent then reconstructs the pair $(g,\mathfrak{t})$, and no further global condition on time orientation is needed. (A partition of unity subordinate to $\{U_i\}$ shows that $\mathfrak{t}$ is realized by an actual global timelike vector field, since the cone components are convex.)

</div>

<div class="corollary">

**Corollary 3.7** (Realizability boundary).

<div id="cor:realizability-boundary">

</div>

*A collection of proposed local metric, connection, and matter expressions represents a global geometric source configuration only if the cocycle and overlap conditions [(14)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:cocycle)–[(17)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:matter-overlap) hold on all overlaps, and only if the resulting global tuple lies in the declared admissibility class $\mathcal{C}_{\mathrm{geo}}$, which, by Remark [3.6](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#rem:descent-time), includes the global time-orientation condition. Consequently, an abstract tuple of relation values that admits no compatible descent data lies outside the geometric realization domain: it is a point of the abstract product $T\times\prod_\alpha V_\alpha$ that is not in the image of any geometric evaluation map.*

</div>

<div class="proof">

*Proof.* Immediate from Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent): any global configuration restricts to compatible local data, so failure of compatibility for *every* presentation of the proposed values is an obstruction to the existence of a configuration presenting them. Membership in $\mathcal{C}_{\mathrm{geo}}$ is a further restriction, since Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent) produces a global tuple but does not certify that it satisfies the declared causal, boundary, or topological conditions. ◻

</div>

Corollary [3.7](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#cor:realizability-boundary) is the first and most basic restriction on the abstract completion of Paper 3: *its coordinates must be jointly realizable by global geometric objects.* Two further restrictions, invariance (Section [4](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#sec:invariants)) and separation (Section [5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#sec:realization)), follow.

<div class="remark">

*Remark 19* (Obstructions are genuine).

<div id="rem:obstruction-genuine">

</div>

That the constraint is not vacuous is visible already in cohomological terms: the isomorphism class of $P$ is the class of $\{h_{ij}\}$ in the pointed set $\check H^1(M,\underline{G})$ (Remark [3.2](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#rem:cech)), and characteristic numbers computed from $A$ are constrained by that class \[[4](/source-readout/geometric-realization-of-completed-source-relations/references#bib-ChernWeil), [8](/source-readout/geometric-realization-of-completed-source-relations/references#bib-MilnorStasheff)\]. A demand such as “a $U(1)$ bundle over $S^2$ with first Chern number $\tfrac12$” fails at the cocycle stage; there is no compatible descent datum, hence no configuration, hence no point of $S_{\mathrm{geo}}$, hence no point of the realized completion. The Cartesian product of independently nominated relation values is, in general, strictly larger than what geometry attains.

</div>
