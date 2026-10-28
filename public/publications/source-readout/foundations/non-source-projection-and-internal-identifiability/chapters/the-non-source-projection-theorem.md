# The non-source projection theorem

<div id="sec:nonsource">

</div>

## Targets, essential distinctions, and sufficiency

<div class="definition">

**Definition 4.1** (Target).

<div id="def:target">

</div>

A *target* $Q$ is a question posed of the source, formalized by a *correct-answer map* $$a_Q\colon S\longrightarrow A_Q .$$ $a_Q(s)$ is the true answer to $Q$ when the source state is $s$. (Nothing is assumed about $A_Q$: it may be a two-point set, a space of numbers, a space of future trajectories, or a space of probability measures.)

</div>

<div class="definition">

**Definition 4.2** (Essential distinction).

<div id="def:essential">

</div>

A pair $s_0\neq s_1$ in $S$ is *essential for $Q$* if $a_Q(s_0)\neq a_Q(s_1)$. It is an *essential fiber distinction* if in addition $p(s_0)=p(s_1)$.

</div>

By [(2)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:noGauge), an essential fiber distinction consists of two states that the model declares physically inequivalent, that the readout cannot tell apart, and that differ in the answer to $Q$. That triple of conditions is the witness the whole paper is organized around.

<div class="definition">

**Definition 4.3** (Exact extension sufficient for $Q$).

<div id="def:sufficient">

</div>

An *exact extension* of the readout is a pair $(E,\pi)$ where $E$ is a set and $\pi\colon E\to T_1$ is a map, together with a surjection $e\colon S\twoheadrightarrow E$ satisfying $$
p=\pi\circ e .\tag{10}$$ (Thus $E$ refines $T_1$: it is a quotient of $S$ that remembers at least as much as $T_1$ does. Surjectivity of $e$ says $E$ carries no states not realized by the source; [(10)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:extension) says $E$ determines the readout.)

The extension is *sufficient for $Q$* if $a_Q$ descends through $e$: $$
\exists\,\hat a\colon E\to A_Q\quad\text{with}\quad a_Q=\hat a\circ e .\tag{11}$$ Equivalently, by Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent), $e(s)=e(s')\Rightarrow a_Q(s)=a_Q(s')$: the extension’s state determines the correct answer.

</div>

<div class="definition">

**Definition 4.4** (Minimal target completion).

<div id="def:EQ">

</div>

Specializing Definition [2.6](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#def:completion) to the single relation $a_Q$, put $$
E_Q:=\mathop{\mathrm{Im}}(p,a_Q)=\bigl\{(p(s),a_Q(s)):s\in S\bigr\},\tag{12}$$ with $e_Q(s)=(p(s),a_Q(s))$, $u_Q(t,a)=t$, and $\rho_Q(t,a)=a$. By Lemma [2.7](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#lem:completionbasic), $e_Q$ is surjective, $u_Q$ is surjective, $p=u_Q\circ e_Q$, and $a_Q=\rho_Q\circ e_Q$. In particular $(E_Q,u_Q)$ *is* an exact extension sufficient for $Q$.

</div>

## The theorem

<div class="theorem">

**Theorem 4.5** (Non-source projection).

<div id="thm:nonsource">

</div>

*Let $p\colon S\to T_1$ be an exact readout on a reduced source (Definition [2.1](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#def:source)), let $Q$ be a target, and suppose there exist $s_0,s_1\in S$ with $$
p(s_0)=p(s_1)\qquad\text{and}\qquad a_Q(s_0)\neq a_Q(s_1).\tag{13}$$ Then:*

1.  *$s_0\neq s_1$ and $p$ is not injective; hence $p$ is not bijective, and the readout does not identify each source state uniquely.*

2.  *Nevertheless $T_1$ remains the *exact* quotient: $S/\!\sim_p\;\cong\;T_1$.*

3.  *No deterministic function of the readout answers $Q$ correctly on all of $S$: there is *no* $\bar a\colon T_1\to A_Q$ with $a_Q=\bar a\circ p$.*

4.  *The minimal target completion $E_Q$ properly refines $T_1$: $u_Q\colon E_Q\to T_1$ is surjective but not injective.*

5.  *Every exact extension sufficient for $Q$ admits a unique surjection onto $E_Q$ commuting with the structure maps (Theorem [4.6](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:universal)).*

6.  *No change of gauge or of coordinates removes the distinction, since all such redundancies were quotiented in forming $S$.*

*Accordingly, *relative to the model $(S,\simeq_{\mathrm{phys}},p)$ and the target $Q$*, the readout $T_1$ is a *non-source projection*.*

</div>

<div class="proof">

*Proof.* (N1) If $s_0=s_1$ then $a_Q(s_0)=a_Q(s_1)$, contradicting [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness); so $s_0\neq s_1$. These two distinct points have the same image under $p$, so $p$ is not injective. Since $p$ is surjective (Lemma [2.3](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#lem:induced)) but not injective, $p$ is not bijective; hence the readout does not identify each source state uniquely ,  the states $s_0$ and $s_1$ share the readout value $p(s_0)=p(s_1)$. We emphasize that this argument is *direct* and invokes no separating hypothesis: Theorem [3.4](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#thm:completeness) is unavailable here, since Assumption [3.3](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#ass:separating) is not among the hypotheses of the present theorem, and it is not needed ,  the witness [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness) exhibits the noninjectivity outright.

(N2) This is Lemma [2.3](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#lem:induced), which used only $\simeq_{\mathrm{phys}}$-invariance and surjectivity of $\Pi_{T_1}$, and is untouched by [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness). The point deserves emphasis: exactness of the readout and failure of source completeness are perfectly compatible. Losing the fiber’s internal structure is not a defect of exactness; it is what exactness of a noninjective quotient *means*.

(N3) Suppose such $\bar a$ existed. By Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent)((1)$\Rightarrow$(2)), $a_Q$ would be constant on $p$-fibers. But $p(s_0)=p(s_1)$ places $s_0,s_1$ in one fiber while $a_Q(s_0)\neq a_Q(s_1)$; contradiction.

(N4) $u_Q$ is surjective by Lemma [2.7](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#lem:completionbasic). Set $t:=p(s_0)=p(s_1)$ and consider $$e_Q(s_0)=\bigl(t,\,a_Q(s_0)\bigr),\qquad e_Q(s_1)=\bigl(t,\,a_Q(s_1)\bigr).$$ Both lie in $E_Q$; they are distinct, because their second coordinates differ by [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness); and $u_Q$ sends both to $t$. Hence $u_Q$ is not injective, i.e. some fiber of $u_Q$ has at least two points, which is what “$E_Q$ properly refines $T_1$” asserts.

(N5) Proved as Theorem [4.6](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:universal) below.

(N6) By construction [(1)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:reduction), $S=\Omega/\!\simeq_{\mathrm{phys}}$, so any two raw realizations related by a declared redundancy have already been identified. Since $s_0\neq s_1$ *in $S$*, no such redundancy relates their representatives; a fortiori no relabelling in the declared class maps one to the other. Cf. [(2)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:noGauge). ◻

</div>

<div class="theorem">

**Theorem 4.6** (Universal property of the minimal target completion).

<div id="thm:universal">

</div>

*Let $(E,\pi,e)$ be any exact extension sufficient for $Q$ (Definition [4.3](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#def:sufficient)). Then there is a *unique* map $$\phi\colon E\longrightarrow E_Q
\qquad\text{with}\qquad
\phi\circ e=e_Q ,$$ and $\phi$ is surjective and satisfies $u_Q\circ\phi=\pi$ and $\rho_Q\circ\phi=\hat a$.*

</div>

<div class="proof">

*Proof.* *Existence.* Since $e$ is surjective, by Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent) it suffices to check that $e_Q$ is constant on the fibers of $e$. Let $e(s)=e(s')$. Then:

- $p(s)=\pi(e(s))=\pi(e(s'))=p(s')$, using [(10)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:extension);

- $a_Q(s)=\hat a(e(s))=\hat a(e(s'))=a_Q(s')$, using [(11)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:sufficient).

Hence $e_Q(s)=(p(s),a_Q(s))=(p(s'),a_Q(s'))=e_Q(s')$. Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent) now supplies a unique $\phi\colon E\to E_Q$ with $\phi\circ e=e_Q$, which is also the asserted uniqueness.

*Surjectivity.* $e_Q$ is surjective onto $E_Q$ (Lemma [2.7](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#lem:completionbasic)) and factors as $\phi\circ e$; hence $\mathop{\mathrm{Im}}\phi\supseteq\mathop{\mathrm{Im}}(\phi\circ e)=E_Q$.

*Compatibility.* For $s\in S$: $u_Q(\phi(e(s)))=u_Q(e_Q(s))=p(s)=\pi(e(s))$, and since $e$ is surjective, $u_Q\circ\phi=\pi$ on all of $E$. Likewise $\rho_Q(\phi(e(s)))=\rho_Q(e_Q(s))=a_Q(s)=\hat a(e(s))$, giving $\rho_Q\circ\phi=\hat a$. ◻

</div>

<div class="remark">

*Remark 23* (Direction of the universal map, and what it means).

<div id="rem:direction">

</div>

The map runs *from* an arbitrary sufficient extension *onto* $E_Q$, not the reverse. The reading is: $E_Q$ is the *coarsest* sufficient extension ,  it retains exactly the readout plus the answer to $Q$ and nothing else ,  and any other sufficient extension, being at least as fine, projects onto it. In categorical language $E_Q$ is terminal in the category of exact extensions sufficient for $Q$ (with morphisms the maps commuting with the $e$’s), and terminality gives both the uniqueness of $\phi$ and, in the usual way, uniqueness of $E_Q$ up to canonical isomorphism. It is exactly the wrong intuition to expect a map $E_Q\to E$: a completion that remembers *more* than $Q$ requires cannot be manufactured out of $Q$’s answer.

</div>

## Corollaries: relation, linear, and equivariant forms

<div class="corollary">

**Corollary 4.8** (Relation form).

<div id="cor:relationform">

</div>

*Let $r\colon S\to V$ be an invariant relation and suppose $Q$ is *active in $r$*, meaning $a_Q$ factors as $a_Q=\theta\circ r$ for some $\theta\colon V\to A_Q$. If $r$ varies on some $p$-fiber *and that variation changes $\theta$*, i.e. there are $s_0,s_1$ with $p(s_0)=p(s_1)$ and $\theta(r(s_0))\neq\theta(r(s_1))$, then all conclusions of Theorem [4.5](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:nonsource) hold, and $E_{\{r\}}$ properly refines $T_1$.*

</div>

<div class="proof">

*Proof.* The hypothesis says exactly $a_Q(s_0)=\theta(r(s_0))\neq\theta(r(s_1))=a_Q(s_1)$ with $p(s_0)=p(s_1)$, i.e. [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness); apply Theorem [4.5](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:nonsource). For the last claim, $r(s_0)\neq r(s_1)$ (else $\theta$ would take equal values), so $e_{\{r\}}(s_0)\neq e_{\{r\}}(s_1)$ while $u_{\{r\}}$ identifies them, exactly as in the proof of (N4). ◻

</div>

The qualification in Corollary [4.8](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#cor:relationform) is not decorative. Mere variation of $r$ on a fiber is *not* enough for a target obstruction: if $\theta$ is constant on the values $r$ takes in that fiber, the target does not see the variation. Obstruction is always relative to a target.

<div class="corollary">

**Corollary 4.9** (Bounded-linear observation form).

<div id="cor:linear">

</div>

*Let $K\colon\mathcal{H}_{\mathrm{src}}\to\mathcal{H}_{\mathrm{obs}}$ be bounded, let $S=\mathcal{H}_{\mathrm{src}}$, and let $p=K$ (corestricted to $\mathop{\mathrm{Ran}}K$), so that $p$-fibers are the cosets $\Psi+\ker K$. Let $a_Q\colon\mathcal{H}_{\mathrm{src}}\to A_Q$ be a target. If there exist $\Psi\in\mathcal{H}_{\mathrm{src}}$ and $n\in\ker K$ with $$
a_Q(\Psi+n)\neq a_Q(\Psi),\tag{14}$$ then $\mathop{\mathrm{Ran}}K$ is a non-source projection for $Q$ in the sense of Theorem [4.5](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:nonsource): no function of $K\Psi$ alone computes $a_Q$ on all of $\mathcal{H}_{\mathrm{src}}$, and every exact extension sufficient for $Q$ surjects onto $E_Q$ and therefore distinguishes the cosets $\Psi+n$ and $\Psi$.*

</div>

<div class="proof">

*Proof.* $K(\Psi+n)=K\Psi+Kn=K\Psi$, so $p(\Psi+n)=p(\Psi)$; with [(14)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:linearwitness) this is the witness [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness) with $s_0=\Psi$, $s_1=\Psi+n$. (Note $n\neq0$ follows from [(14)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:linearwitness).) Apply Theorem [4.5](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:nonsource) and Theorem [4.6](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:universal). That every sufficient extension separates the two cosets: if $e(\Psi)=e(\Psi+n)$, sufficiency [(11)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:sufficient) would force $a_Q(\Psi)=a_Q(\Psi+n)$, contradiction. ◻

</div>

We note what Corollary [4.9](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#cor:linear) does *not* assume: no closed range (that was needed only for the Banach-space isomorphism [(8)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:closedrange), not for the set-level obstruction), no self-adjointness, no linearity *of $a_Q$*. If $a_Q$ happens to be a bounded linear functional $\langle\xi,\cdot\rangle$, then [(14)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:linearwitness) holds for some $n\in\ker K$ iff $\xi\notin(\ker K)^{\perp}=\overline{\mathop{\mathrm{Ran}}K^{*}}$ ,  a clean spectral criterion, and a good way to test the hypothesis in a concrete linear model.

For the equivariant obstruction we first fix notation.

<div class="definition">

**Definition 4.10** (Group action, stabilizer, fixed set).

<div id="def:equivariant">

</div>

Let a group $G$ act on $S$ and on $T_1$, and suppose $p$ is *equivariant*: $p(g\cdot s)=g\cdot p(s)$ for all $g\in G$, $s\in S$. For $t\in T_1$ let $$G_t:=\{g\in G: g\cdot t=t\}$$ be its *stabilizer*. Equivariance implies $G_t$ acts on the fiber $p^{-1}(t)$: if $p(s)=t$ and $g\in G_t$ then $p(g\cdot s)=g\cdot t=t$. Write the *fixed-point set of that action* $$\mathop{\mathrm{Fix}}_{G_t}\bigl(p^{-1}(t)\bigr):=\bigl\{s\in p^{-1}(t)\ :\ g\cdot s=s\ \ \forall g\in G_t\bigr\}.$$ A *$G$-equivariant source selector* is a map $\sigma\colon T_1\to S$ with $p\circ\sigma=\mathop{\mathrm{id}}_{T_1}$ and $\sigma(g\cdot t)=g\cdot\sigma(t)$ for all $g,t$.

</div>

<div class="corollary">

**Corollary 4.11** (Symmetry-compatible reconstruction obstruction).

<div id="cor:equivariant">

</div>

*In the setting of Definition [4.10](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#def:equivariant), if there exists $t\in T_1$ with $$
\mathop{\mathrm{Fix}}_{G_t}\bigl(p^{-1}(t)\bigr)=\varnothing,\tag{15}$$ then *no* $G$-equivariant source selector $\sigma$ exists. In particular, no reconstruction rule that respects the readout symmetry can choose a source representative in every fiber.*

</div>

<div class="proof">

*Proof.* Suppose $\sigma$ were such a selector and let $t$ satisfy [(15)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:emptyfix). Since $p(\sigma(t))=t$, we have $\sigma(t)\in p^{-1}(t)$. Let $g\in G_t$. Then, using equivariance of $\sigma$ and $g\cdot t=t$, $$g\cdot\sigma(t)=\sigma(g\cdot t)=\sigma(t).$$ As $g\in G_t$ was arbitrary, $\sigma(t)$ is fixed by every element of $G_t$, i.e. $\sigma(t)\in\mathop{\mathrm{Fix}}_{G_t}(p^{-1}(t))$, contradicting [(15)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:emptyfix). ◻

</div>

<div class="remark">

*Remark 28*.

<div id="rem:equivariantscope">

</div>

Corollary [4.11](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#cor:equivariant) obstructs *equivariant* selectors only. A non-equivariant selector may well exist ,  indeed, for $p$ surjective, the axiom of choice always supplies *some* set-theoretic section $\sigma$ with $p\sigma=\mathop{\mathrm{id}}$. The content is that any such section must *break* the symmetry $G$: reconstruction is possible only at the cost of a choice that the readout’s own symmetry group does not sanction. This is the precise sense in which the obstruction is a symmetry obstruction and not a cardinality one.

</div>

## The scope of Theorem [4.5](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:nonsource)

Theorem [4.5](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:nonsource) is conditional on four supplied objects: the source domain $S$, the physical equivalence $\simeq_{\mathrm{phys}}$ used to build it, the readout $p$, and the essential witness [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness). It derives none of them. Its strength is precisely delimited: *once* those four are established for a model, the non-source conclusion follows with no further interpretive step ,  one does not additionally need to argue that the projection “loses something real”, because the witness [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness) says so in the model’s own terms. Its weakness is equally precise: it says nothing whatever about whether our universe supplies them. We return to this in §[10](/source-readout/non-source-projection-and-internal-identifiability/physical-instantiation-and-its-boundary#sec:physical), and we do not claim more anywhere.

<div class="example">

**Example 4.13** (Finite source, nontrivial fiber, proper completion).

<div id="ex:finite">

</div>

Let $$S=\{s_0,s_1,s_2\},\qquad T_1=\{t,t'\},\qquad p(s_0)=p(s_1)=t,\quad p(s_2)=t'.$$ Assume the model has already reduced by $\simeq_{\mathrm{phys}}$, so $s_0,s_1,s_2$ are pairwise physically inequivalent. Take the target $Q$ with $A_Q=\{0,1\}$ and $$a_Q(s_0)=0,\qquad a_Q(s_1)=1,\qquad a_Q(s_2)=1 .$$ Then [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness) holds with the pair $(s_0,s_1)$. Compute the minimal target completion: $$E_Q=\mathop{\mathrm{Im}}(p,a_Q)=\bigl\{(t,0),\,(t,1),\,(t',1)\bigr\},$$ a three-element set. The projection $u_Q\colon E_Q\to T_1$ sends $(t,0)\mapsto t$, $(t,1)\mapsto t$, $(t',1)\mapsto t'$; it is surjective, and its fiber over $t$ has two elements, so it is not injective ,  $E_Q$ properly refines $T_1$, as (N4) requires. Note also that $e_Q\colon S\to E_Q$ is here a *bijection*, so in this example $E_Q$ happens to recover $S$ completely; that is an accident of $a_Q$ separating $s_0$ from $s_1$, not a general feature. Indeed, modify the target to $a_{Q'}(s_0)=a_{Q'}(s_1)=0$, $a_{Q'}(s_2)=1$. Now $a_{Q'}$ *is* fiber-constant, hence descends ($\bar a_{Q'}(t)=0$, $\bar a_{Q'}(t')=1$), $E_{Q'}=\{(t,0),(t',1)\}\cong T_1$, and $T_1$ is complete relative to $Q'$ while remaining kinematically incomplete. *Both targets, one readout:* obstruction is target-relative, and Corollary [3.6](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#cor:nontrivialcompletion) bites only for families that separate ,  $\{a_{Q'}\}$ does not separate $s_0$ from $s_1$.

</div>
