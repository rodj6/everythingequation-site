# The source-to-readout architecture

<div id="sec:architecture">

</div>

## Reduction and readout

<div class="definition">

**Definition 2.1** (Reduced source).

<div id="def:source">

</div>

Let $\Omega$ be a raw realization space carrying an equivalence relation $\simeq_{\mathrm{phys}}$, the *declared physical equivalence* of the model: $\omega\simeq_{\mathrm{phys}}\omega'$ means that the model regards $\omega$ and $\omega'$ as descriptions of the same physical situation, differing only by gauge choice, coordinate choice, or relabelling. Define the *reduced source* $$
S:=\Omega/\!\simeq_{\mathrm{phys}},\qquad q\colon\Omega\twoheadrightarrow S\tag{1}$$ with $q$ the canonical surjection.

</div>

The order of operations in [(1)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:reduction) is the crux of the entire paper and we pause on it. If one did *not* quotient first, then a noninjective readout would be uninformative: its fibers could consist entirely of gauge copies of a single physical state, and their nontriviality would be an artifact of description. By constructing $S$ first, we ensure that $$
s\neq s'\ \text{in}\ S\quad\Longrightarrow\quad s,s'\ \text{are \emph{not} related by any redundancy the model declares.}\tag{2}$$ Consequently a nontrivial $p$-fiber in $S$ is a genuine multiplicity of physically inequivalent states *by the model’s own standard*. This does not make it physically real ,  the model may be wrong ,  but it removes the cheapest objection.

<div class="definition">

**Definition 2.2** (Exact readout).

<div id="def:readout">

</div>

Let $\Pi_{T_1}\colon\Omega\to T_1$ be a surjection that is invariant under $\simeq_{\mathrm{phys}}$, i.e. $\omega\simeq_{\mathrm{phys}}\omega'\Rightarrow\Pi_{T_1}(\omega)=\Pi_{T_1}(\omega')$. We call $T_1$ the *readout* or *Tier 1*.

</div>

<div class="lemma">

**Lemma 2.3** (Induced readout).

<div id="lem:induced">

</div>

*There is a unique map $p\colon S\to T_1$ with $$
\Pi_{T_1}=p\circ q,\tag{3}$$ and $p$ is surjective. Moreover, writing $s\sim_p s'\iff p(s)=p(s')$, the map $p$ induces a bijection $$
S/\!\sim_p\;\xrightarrow{\ \cong\ }\;T_1 .\tag{4}$$*

</div>

<div class="proof">

*Proof.* Existence and uniqueness of $p$ are the universal property of the quotient. Define $$p(q(\omega)):=\Pi_{T_1}(\omega).$$ This is well defined precisely by the $\simeq_{\mathrm{phys}}$-invariance of $\Pi_{T_1}$, and it is forced by [(3)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:factorization), which gives uniqueness. Surjectivity of $p$ follows from surjectivity of $\Pi_{T_1}$, since $\Pi_{T_1}=p\circ q$ and hence $\mathop{\mathrm{Im}}p\supseteq\mathop{\mathrm{Im}}\Pi_{T_1}=T_1$. Finally, $\sim_p$ is by construction the kernel pair of $p$, so the induced map $[s]\mapsto p(s)$ on $S/\!\sim_p$ is well defined and injective; it is surjective because $p$ is. This is [(4)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:exactquotient). ◻

</div>

We record the terminology that the rest of the paper turns on.

<div class="definition">

**Definition 2.4** (Exactness).

<div id="def:exact">

</div>

We call $p$ an *exact* readout to mean precisely [(4)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:exactquotient): $T_1$ is, up to canonical bijection, the quotient of $S$ by the relation “has the same readout”. That is, “exact” means exact *as the quotient by the readout’s own kernel relation* $\sim_p$, and nothing more: it does not mean that $p$ is injective, that the readout is source-complete, or that information is preserved at the source level. Exactness is a statement about *no information being lost within a fiber’s label*; it is emphatically *not* a statement that fibers are singletons. The whole content of this paper lies in that gap.

</div>

## Relations and the minimal completion

<div class="definition">

**Definition 2.5** (Invariant relations).

<div id="def:relations">

</div>

Let $\mathcal R=\{r_\alpha\colon S\to V_\alpha\}_{\alpha\in A}$ be a family of maps, the *physically invariant source relations*. (Invariance is already built in: they are defined on $S$, hence constant on $\simeq_{\mathrm{phys}}$-classes.) Write $$R_A:=(r_\alpha)_{\alpha\in A}\colon S\longrightarrow \prod_{\alpha\in A}V_\alpha .$$

</div>

<div class="definition">

**Definition 2.6** (Minimal completion).

<div id="def:completion">

</div>

Define $$
E_A:=\mathop{\mathrm{Im}}\bigl(p,R_A\bigr)\;=\;\Bigl\{\bigl(p(s),R_A(s)\bigr)\;:\;s\in S\Bigr\}\ \subseteq\ T_1\times\prod_{\alpha}V_\alpha,\tag{5}$$ with the two canonical maps $$
e_A\colon S\to E_A,\quad e_A(s)=\bigl(p(s),R_A(s)\bigr),
\qquad
u_A\colon E_A\to T_1,\quad u_A(t,v)=t .\tag{6}$$ The coordinate maps on the completion are $\rho_\alpha\colon E_A\to V_\alpha$, $\rho_\alpha(t,v)=v_\alpha$.

</div>

<div class="lemma">

**Lemma 2.7** (Elementary properties of the completion).

<div id="lem:completionbasic">

</div>

*$e_A$ is surjective; $u_A$ is surjective; $p=u_A\circ e_A$; and $r_\alpha=\rho_\alpha\circ e_A$ for every $\alpha$.*

</div>

<div class="proof">

*Proof.* $e_A$ is surjective onto $E_A$ by the definition [(5)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:EA) of $E_A$ as an image. Then $u_A(e_A(s))=p(s)$ gives $p=u_A e_A$, and since $p$ is surjective (Lemma [2.3](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#lem:induced)) so is $u_A$. The identity $\rho_\alpha(e_A(s))=r_\alpha(s)$ is immediate. ◻

</div>

Thus $E_A$ sits between $S$ and $T_1$: it is the readout *augmented by exactly the values of the nominated relations*, and nothing more. Its universal character is proved in §[4](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#sec:nonsource) in the form we actually need (Theorem [4.6](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:universal)).

## Specializations

The abstract triple $(S,p,\mathcal R)$ has three standard realizations, which we record to fix the reader’s picture. They are *specializations of one architecture*, not competing definitions.

<div class="example">

**Example 2.8** (Geometric orbit space and geometric realization).

<div id="ex:geo">

</div>

Let $\mathcal C_{\mathrm{geo}}$ be a space of field configurations and $\simeq_{\mathrm{geo}}$ the action of the gauge and diffeomorphism group. Then $S_{\mathrm{geo}}=\mathcal C_{\mathrm{geo}}/\!\simeq_{\mathrm{geo}}$ is the orbit space, and the readout is a map $p_{\mathrm{geo}}\colon S_{\mathrm{geo}}\to T_1$ recording whatever subset of invariants it resolves. The relations are now geometric: write $$J_A=(J_\alpha)_{\alpha\in A},\qquad J_\alpha\colon S_{\mathrm{geo}}\to V_\alpha ,$$ for a family of gauge- and diffeomorphism-invariant functionals: integrated, spectral, or relational curvature invariants; holonomy conjugacy classes; and Wilson-loop observables based on invariantly specified loops. Specializing Definition [2.6](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#def:completion) gives the *geometric realization* of the completion, $$
E_A^{\mathrm{geo}}:=\mathop{\mathrm{Im}}\bigl(p_{\mathrm{geo}},J_A\bigr)
=\bigl\{\bigl(p_{\mathrm{geo}}(s),\,J_A(s)\bigr)\;:\;s\in S_{\mathrm{geo}}\bigr\},\tag{7}$$ the set of completed signatures actually *attained* by configurations.

The word “realization” carries the entire content of [(7)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:EAgeo), and it is a restriction, not a licence. $E_A^{\mathrm{geo}}$ is by construction an *image*: it contains only those pairs (readout value, invariant values) that arise from an *admissible, globally compatible* field configuration in $\mathcal C_{\mathrm{geo}}$. It is emphatically *not* the full product $T_1\times\prod_\alpha V_\alpha$. An abstract signature ,  an arbitrary assignment of values to the invariants, consistent with no constraint one has bothered to impose ,  need not be realized by any global field at all: field equations, Bianchi identities, integrality and holonomy constraints, and global topological obstructions all cut the attainable set down. Determining *which* completed signatures are realized by compatible global geometric fields is thus a substantive geometric question about $\mathcal C_{\mathrm{geo}}$, to be settled by geometry, and none of the theorems below settles it or presumes an answer.

We make no smoothness, Hausdorffness, or slice claims about $S_{\mathrm{geo}}$: nothing below requires them, and orbit spaces are frequently badly behaved.

</div>

<div class="example">

**Example 2.9** (Bounded linear observation).

<div id="ex:linear">

</div>

Let $K\colon\mathcal{H}_{\mathrm{src}}\to\mathcal{H}_{\mathrm{obs}}$ be a bounded linear map with closed range. Taking $S=\mathcal{H}_{\mathrm{src}}$ (with $\simeq_{\mathrm{phys}}$ trivial) and $p$ the corestriction of $K$ to its range, the closed-range theorem gives $$
T_1\;\cong\;\mathcal{H}_{\mathrm{src}}/\ker K\;\cong\;\mathop{\mathrm{Ran}}K .\tag{8}$$ Fibers of $p$ are the cosets $\Psi+\ker K$. Here the “essential distinction” of §[4](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#sec:nonsource) is a vector $n\in\ker K$, $n\neq 0$, that nevertheless changes some quantity of interest. Closedness of the range is used only for [(8)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:closedrange) to be an isomorphism of Banach spaces; the set-theoretic quotient statement [(4)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:exactquotient) needs no such hypothesis.

</div>

<div class="example">

**Example 2.10** (Coarse-grained state).

<div id="ex:coarse">

</div>

Let $S$ be a finite set of microstates modulo relabelling and $p$ a partition into macrostates. This is the setting of §[9](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#sec:lumpability).

</div>
