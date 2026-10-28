# The joint-image construction and its quotient realization

<div id="sec:construction">

</div>

<div class="definition">

**Definition 3.1** (Minimal relation completion).

<div id="def:EA">

</div>

Define the *joint map* $$
j_A\colon S\longrightarrow T\times V_A,
\qquad
j_A(s)=\bigl(p(s),R_A(s)\bigr),\tag{3.1}$$ and define the *minimal relation completion* $$
E_A:=\mathop{\mathrm{Im}}(j_A)\ \subseteq\ T\times V_A .\tag{3.2}$$ Let $e_A\colon S\twoheadrightarrow E_A$, $e_A(s):=j_A(s)$, be the induced surjection, and let $$
u_A\colon E_A\longrightarrow T,
\qquad
\rho_\alpha\colon E_A\longrightarrow V_\alpha
\qquad(\alpha\in A)\tag{3.3}$$ be the restrictions to $E_A$ of the coordinate projections of $T\times V_A$.

</div>

<div class="proposition">

**Proposition 3.2** (Factorization).

<div id="prop:factorization">

</div>

*The maps of [Definition 3.1](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#def:EA) satisfy $$
p=u_A\circ e_A,
\qquad
r_\alpha=\rho_\alpha\circ e_A
\qquad(\alpha\in A),\tag{3.4}$$ and $e_A$ is surjective. In particular every nominated relation descends to $E_A$.*

</div>

<div class="proof">

*Proof.* Surjectivity of $e_A$ is immediate, since $E_A$ was defined as the image of $j_A$ and $e_A$ is $j_A$ with codomain restricted to that image. For $s\in S$ we have $e_A(s)=(p(s),(r_\alpha(s))_{\alpha\in A})$. Applying the first coordinate projection gives $u_A(e_A(s))=p(s)$, and applying the projection onto the $\alpha$-th factor of $V_A$ gives $\rho_\alpha(e_A(s))=r_\alpha(s)$. As $s$ was arbitrary, [(3.4)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:factorization) holds as an identity of functions on $S$. ◻

</div>

Thus $(E_A,e_A,u_A,(\rho_\alpha)_{\alpha\in A})$ solves the *existence* half of [Definition 2.2](/source-readout/canonical-minimal-source-completion/reduced-source-readout-and-the-nominated-relation-family#def:problem). The content of the paper is that it solves the *minimality* and *uniqueness* halves as well.

## The induced equivalence relation

<div class="definition">

**Definition 3.3**.

<div id="def:simA">

</div>

Define a relation $\sim_A$ on $S$ by $$
s\sim_A s'
\quad:\Longleftrightarrow\quad
\bigl[\,p(s)=p(s')\ \text{ and }\ r_\alpha(s)=r_\alpha(s')\ \text{ for every }\alpha\in A\,\bigr].\tag{3.5}$$

</div>

This is an equivalence relation, being an intersection of pullbacks of equality relations along functions: reflexivity, symmetry, and transitivity for $\sim_A$ follow coordinatewise from the corresponding properties of equality in $T$ and in each $V_\alpha$.

<div class="proposition">

**Proposition 3.4** (Quotient realization).

<div id="prop:quotient">

</div>

*The assignment $$
\kappa\colon S/\!\sim_A\ \longrightarrow\ E_A,
\qquad
\kappa\bigl([s]_A\bigr):=j_A(s)\tag{3.6}$$ is a well-defined bijection, and it satisfies $\kappa\circ\pi_A=e_A$, where $\pi_A\colon S\to S/\!\sim_A$ is the canonical projection. Hence $$
E_A\ \cong\ S/\!\sim_A\tag{3.7}$$ canonically.*

</div>

<div class="proof">

*Proof.* We verify the three assertions separately, rather than invoking a generic isomorphism principle for quotients, since the well-definedness step is precisely where the definition of the relation $\sim_A$ earns its keep.

*Well-definedness.* Suppose $[s]_A=[s']_A$, i.e. $s\sim_A s'$. By [(3.5)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:simA) this means $p(s)=p(s')$ and $r_\alpha(s)=r_\alpha(s')$ for every $\alpha\in A$. Two elements of the product $T\times V_A$ are equal precisely when all of their coordinates agree; and here the coordinates of $j_A(s)$ and $j_A(s')$ are $p(s),p(s')$ in the $T$-factor and $r_\alpha(s),r_\alpha(s')$ in the $\alpha$-th factor of $V_A$, respectively. All agree, so $j_A(s)=j_A(s')$. Hence the value assigned by [(3.6)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:kappa) does not depend on the chosen representative, and $\kappa$ is a well-defined function.

*Injectivity.* Suppose $\kappa([s]_A)=\kappa([s']_A)$, i.e. $j_A(s)=j_A(s')$. Comparing coordinates in $T\times V_A$ gives $p(s)=p(s')$ and $r_\alpha(s)=r_\alpha(s')$ for every $\alpha\in
A$, which is exactly [(3.5)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:simA). Hence $s\sim_A s'$ and $[s]_A=[s']_A$.

*Surjectivity.* Let $x\in E_A$. By [Definition 3.1](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#def:EA), $E_A=\mathop{\mathrm{Im}}(j_A)$, so there is $s\in S$ with $x=j_A(s)=\kappa([s]_A)$.

Finally, for every $s\in S$ we have $\kappa(\pi_A(s))=\kappa([s]_A)=j_A(s)=e_A(s)$, so $\kappa\circ\pi_A=e_A$. ◻

</div>

So the joint image and the quotient by “agreement of the readout and of every nominated relation” are the same object, viewed extensionally and intensionally. The first description makes existence manifest; the second makes minimality manifest.

## The information ordering

<div class="proposition">

**Proposition 3.5** (Information ordering).

<div id="prop:ordering">

</div>

*As relations on $S$, $$
\Delta_S\ \subseteq\ \sim_A\ \subseteq\ \sim_p ,\tag{3.8}$$ and consequently there is a factorization of the readout, $$
S\ \xrightarrow{\ e_A\ }\ E_A\ \xrightarrow{\ u_A\ }\ T .\tag{3.9}$$*

</div>

<div class="proof">

*Proof.* The first inclusion is reflexivity: $s\sim_A s$ for every $s$, since $p(s)=p(s)$ and $r_\alpha(s)=r_\alpha(s)$. The second holds because the defining condition [(3.5)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:simA) contains the clause $p(s)=p(s')$ as a conjunct; hence $s\sim_A s'$ implies $s\sim_p s'$. The factorization [(3.9)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:tower) is [(3.4)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:factorization). ◻

</div>

The reading of [(3.8)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:ordering) must be got right, because the direction of the inclusions encodes the direction of every universal arrow in the paper. A *smaller* equivalence relation identifies *fewer* pairs, hence corresponds to a *finer* partition and to *more* retained information. Thus [(3.8)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:ordering) says: equality on $S$ retains everything; $\sim_A$ retains at most that, and at least the readout; $\sim_p$ retains the least of the three. The completion $E_A$ refines the readout partition, but, this is the whole point of minimality, it need not refine it all the way down to individual source states.

## What completion adds above a readout value

<div class="proposition">

**Proposition 3.6** (Completed fibers).

<div id="prop:fibers">

</div>

*For every $t\in T$ there is a canonical bijection $$
u_A^{-1}(t)\ \cong\ R_A(F_t)=\{\,R_A(s)\ :\ s\in F_t=p^{-1}(t)\,\}\ \subseteq\ V_A .\tag{3.10}$$*

</div>

<div class="proof">

*Proof.* Consider the second-coordinate projection $\mathrm{pr}_{V_A}\colon T\times V_A\to V_A$ and restrict it to $u_A^{-1}(t)$.

*Its image is $R_A(F_t)$.* An element $x\in u_A^{-1}(t)$ lies in $E_A=\mathop{\mathrm{Im}}(j_A)$, so $x=(p(s),R_A(s))$ for some $s\in S$; and $u_A(x)=t$ forces $p(s)=t$, i.e. $s\in F_t$. Hence $\mathrm{pr}_{V_A}(x)=R_A(s)\in R_A(F_t)$. Conversely, given $v=R_A(s)$ with $s\in F_t$, the point $x=(t,v)=j_A(s)$ lies in $E_A$ and satisfies $u_A(x)=t$, so $v$ is attained.

*It is injective on $u_A^{-1}(t)$.* If $x,x'\in u_A^{-1}(t)$ have the same $V_A$-coordinate, then they also share the $T$-coordinate, namely $t$; being elements of a product with all coordinates equal, $x=x'$.

Thus $\mathrm{pr}_{V_A}$ restricts to a bijection $u_A^{-1}(t)\to R_A(F_t)$, and this bijection was constructed without any choice. ◻

</div>

[Proposition 3.6](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:fibers) answers exactly the question that “completion” invites one to ask badly. What sits above a readout value $t$ in $E_A$ is *not* a preferred source state in $F_t$, and not an arbitrary enrichment of $t$ by extra labels. It is the set of *realized relation signatures* over $t$: the distinct values that the nominated family actually takes on the fiber. Two source states in $F_t$ that agree on every $r_\alpha$ contribute the *same* completed state; nothing in the construction selects between them, and nothing in the construction can. We record this as a standing prohibition, because it is the failure mode that a naive completion invites.

<div class="remark">

*Remark 10* (No selector, no section, no representative).

<div id="rem:no-selector">

</div>

The construction of $E_A$ uses no selection function on the fibers of $p$, no section of $p$, and no canonical representative of $F_t$; it requires no choice principle beyond forming the image of a function, and it produces none of these objects either. This should be stated precisely, since the point is about what the construction *supplies*, not about what is set-theoretically possible.

If one separately chooses a representative of each $\sim_A$-class, a choice that in general requires an appeal to a choice principle, and which is available when such a choice can be made, then the resulting set of chosen representatives is in bijection with $E_A$, by [Proposition 3.4](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:quotient). Such a set is a *noncanonical presentation* of the completion. It carries no invariant information beyond what $E_A$ already carries: the bijection depends on the choice, different choices give different presentations of the same quotient, and nothing in the completion distinguishes one of them. Crucially, no such presentation is supplied or privileged by the universal construction. The object $E_A$ is defined without any choice whatever, as an image; and terminality ([Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal)) yields only the surjections $\phi_{\mathcal E}\colon E\to E_A$ *onto* the completion. It furnishes no inverse to $e_A$, no canonical splitting, and no canonical representative selector. Whatever a representative-based presentation may be used for, it is extra structure imposed from outside, not a consequence of the theorem.

</div>
