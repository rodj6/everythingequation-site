# The operations that make control possible

An agent's information does not determine its competence by itself. The same records and the same amount of residual storage can support different achievements when the available transformations differ. Agency is embodied in an operation set as well as an observation channel.

The supplementary results here isolate that difference. Binary affine operations comprise invertible combinations of XOR, bit flips and swaps. A Toffoli adds a nonlinear product: it changes a target bit by the product of two control bits. Its role is computational. A Toffoli count is not a count of decisions, a measure of consciousness or an energy budget.

## The geometry of a successful set

Let the uncertain plant be $X\in\mathbb F_2^n$. After record $h$, write its unnormalized weight as $w_h(x)=\Pr(X=x,h)$. Let $r$ ready receiver bits remain variable on success, and let the permitted plant target be an affine set of dimension $t$. Every other helper and required output is fixed on success.

Define the largest posterior mass on a flat of dimension at most $b$ by

$$
\Phi_b(w)=\max_{\substack{L\subseteq\mathbb F_2^n\;\mathrm{affine}\\\dim L\le b}}
\sum_{x\in L}w(x).
$$

For $b\ge n$, this is the whole mass.

**Theorem: exact affine optimum.** With record-conditioned affine reversible data operations,

$$
p^*_{\rm aff}=\sum_h\Phi_{r+t}(w_h).
$$

**Proof.** An affine bijection maps the ready-input plane into another affine plane. Intersecting it with the success constraints has an affine preimage. Only $r+t$ output directions can vary on success, so that preimage has dimension at most $r+t$. Conversely, take any permitted flat of that dimension, normalize it by invertible affine coordinates, transfer its varying directions to the target and receiver, and complete to an affine bijection. The maximizing flat attains the bound.

Unrestricted reversible actuation can select the $2^{r+t}$ most probable individual inputs. Affine actuation must fit its successful inputs inside an affine flat. Their arrangement matters even when their number is small enough.

## The restricted Clifford counterpart

The same optimum holds for unitary Clifford operations when the input is a computational-basis ensemble, the ready auxiliaries are independent pure stabilizer states, and the target/receiver test is the corresponding stabilizer projector:

$$
p^*_{\rm Cliff}=p^*_{\rm aff}.
$$

**Proof.** Conjugating the success projector by a Clifford gives a stabilizer projector. In its Pauli expansion, only diagonal Pauli terms contribute to a computational-basis diagonal entry. Their binary constraints define either the empty set or an affine set $L$. The acceptance profile is therefore $\alpha\mathbf1_L$ for $0<\alpha\le1$.

Restricting to the prepared input plane gives trace at most the success projector's rank, so $\alpha|L|\le2^{r+t}$. If $\dim L\le r+t$, its weighted acceptance is at most the mass of an admitted flat. Otherwise partition $L$ into parallel $(r+t)$-flats. The largest part has at least the average mass, which bounds $\alpha w_h(L)$. Affine circuits are Clifford circuits and attain the classical optimum.

The stabilizer structure is established in [Dehaene and De Moor](https://doi.org/10.1103/PhysRevA.68.042318). This application excludes extra measurements, nonstabilizer preparations, uncounted residual outputs and arbitrary coherent source ensembles. Its conclusion is an operation-class comparison under that precise contract.

## A six-point separation

Take two two-bit live plants behind one unknown affine sensor, with one calibration reference. Removing the observed offset leaves a common $\operatorname{GL}(2,2)$ ambiguity. The source-pair space has one rank-zero state, three rank-one orbits of size three, and one full-rank orbit of size six.

In a four-bit encoding the full-rank orbit is

$$
S=\{6,7,9,11,13,14\}.
$$

Its largest intersections with affine flats of dimensions $0,1,2,3,4$ have sizes

$$
1,\quad2,\quad3,\quad4,\quad6.
$$

Why can a two-dimensional plane contain only three? Four plane points XOR to zero. All six listed words XOR to zero, so a zero-XOR subset of four would leave two distinct words with zero XOR, which is impossible. Any three distinct binary points span a plane and attain three. A hyperplane contains at most four of these six; a hyperplane containing five would contain the sixth because their total XOR is zero, but the affine hull is four-dimensional. Suitable hyperplanes attain four.

With $r=2$ receiver bits, affine and Clifford control reach

$$
\frac{1+3\min(2^r,3)+\max_{\dim L\le r}|L\cap S|}{16}
=\frac{13}{16}.
$$

Unrestricted control reaches

$$
\frac{1+3\cdot3+4}{16}=\frac78.
$$

One nonlinear data operation closes the gap. Translate by $9$ and apply the invertible linear map with columns $(8,14,1,5)$. Four selected states become $0,1,2,7$. A Toffoli with controls $0,1$ and target $2$ changes $7$ to $3$ while fixing the other three. They now lie on a coordinate plane that can be moved into the receiver.

This is one extra nonlinear operation on uncertain data after the record is fixed. It is not a claim that every other part of the sensing apparatus is affine. The distinction prevents a local operation-class result from being misreported as a comparison of two entirely different kinds of computer.

## An exact family of storage–computation tradeoffs

For $m\ge1$, let the plant be uniform on the graph

$$
\Gamma_m=\{(u,v,q_m(u,v)):u,v\in\mathbb F_2^m\},
\qquad q_m(u,v)=\sum_{i=1}^m u_iv_i.
$$

There are $2^{2m}$ source points in $2m+1$ plant bits. The controller must reset every plant bit to a prescribed target. It has $r$ ready receiver bits, arbitrary affine reversible operations, at most $k$ ordinary classical Toffolis, and extra helpers that are restored on success.

**Lemma: flat intersection.** Every affine $l$-flat in $\mathbb F_2^{2m+1}$ meets $\Gamma_m$ in at most

$$
\min\{2^l,2^{l-1}+2^{m-1}\}
$$

points.

**Proof.** Project onto $(u,v)$. If projection is not injective on the flat, every projected point has two vertical lifts and exactly one is on the graph, giving $2^{l-1}$. Otherwise the graph condition on the projected flat is a quadratic equation plus an affine term. Its polar form is the restriction of

$$
\beta((u,v),(u',v'))=u\cdot v'+u'\cdot v.
$$

On an $l$-dimensional direction space, this restriction has rank at least $2l-2m$: its radical lies in an orthogonal complement of dimension $2m-l$. Splitting a binary quadratic character sum into hyperbolic pairs shows that its magnitude is zero or $2^{l-R/2}$ for polar rank $R$. It is therefore at most $2^m$. The number of zeros is at most half the flat size plus half this magnitude, giving $2^{l-1}+2^{m-1}$. The cardinality bound supplies the other term.

**Theorem: exact quadratic-source frontier.** For $0\le r\le2m$ and $k'=\min(k,m)$,

$$
p^*_{m,r,k}=2^{-2m}\min\{2^r,\;2^{r-1}+2^{m+k'-1}\}.
$$

**Upper bound.** Run a successful circuit backward from its $r$-dimensional output plane. At each inverse Toffoli, split one control into the cases zero and one. On either branch the gate is affine. After at most $k$ gates, successful inputs lie in at most $2^k$ disjoint affine pieces $L_i$, whose total size is at most $2^r$. The lemma bounds the graph points by

$$
\frac12\sum_i|L_i|+2^k2^{m-1}
\le2^{r-1}+2^{m+k-1}.
$$

Injectivity independently bounds successful inputs by $2^r$. For $k\ge m$, that cardinality bound is sufficient.

**Attainment.** Cancel $k'$ disjoint products from the graph bit with $k'$ Toffolis. Then transfer $r$ base coordinates into the receiver, constraining the rest to zero. Choose the $2k'$ coordinates of cancelled products first, then one member of each remaining pair, then the other members. If $r\le m+k'$, no surviving product has both coordinates free and all $2^r$ assignments succeed. Otherwise exactly $j=r-m-k'$ uncancelled product pairs remain free. Their inner product has $2^{2j-1}+2^{j-1}$ zero assignments. Multiplication by the other free-bit factor gives $2^{r-1}+2^{m+k'-1}$. The circuit uses $k'$ Toffolis and $3r$ CNOTs for swaps, with no extra scratch.

At the tight receiver width $r=2m$,

$$
p^*_{m,2m,k}=\frac12+2^{k-m-1},\qquad0\le k\le m.
$$

Exactly $m$ Toffolis are necessary and sufficient for perfect control at that width. With $m-1$, the exact optimum is $3/4$. One additional receiver bit allows a wholly affine swap of the complete plant and gives perfect control.

This is a scalable substitution between residual storage and nonlinear processing. The source preparation itself is a resource. Arbitrary coherent Hadamard interleavings are outside the positive-Toffoli proof because classical affine branching no longer describes their amplitudes.

## A reusable envelope bound

The same argument applies whenever a source distribution obeys, for every affine flat $L$,

$$
\sum_{x\in L}p(x)\le a|L|+b,\qquad a,b\ge0.
$$

With an exact target, $r$ receiver bits, restored workspace and $k$ Toffolis,

$$
p_{\rm success}\le\min\{1,\operatorname{Top}_{2^r}(p),a2^r+b2^k\}.
$$

To prove it, use the same inverse affine partition. Intersect each piece with the prepared input plane, project to the source coordinates and apply its mass bound. The piece sizes sum to at most $2^r$, and at most $2^k$ additive terms $b$ appear. Injectivity supplies the independent top-mass bound.

These formulas show why practical freedom has several axes. Better evidence, more writable storage and richer transformations can each alter what is achievable. None can be inferred solely from the presence of the others. The published evaluator adds the further requirement that the available transformations are selected through the declared evaluative process and actually installed for later use.
