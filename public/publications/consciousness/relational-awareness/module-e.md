# Build the causal field exactly

Jeremy Rodgers · Independent Researcher

Version 1.4 · 16 October 2026

DOI: https://doi.org/10.5281/zenodo.23408737

Web edition: /consciousness/relational-awareness/module-e

## A selected native parity structure and its limits {#section-5}

A causal structure can be selected, irreducible and extensively related without yet determining a spatial appearance. This module makes that distinction exact. It supplies a complete finite construction under IIT 4.0 (Albantakis et al., 2023), carrying the calculation through state selection, normalized partition selection, purview exclusion, complex selection and the full relation structure. High-order purviews survive all these steps. Positivity of a preferred repertoire alone would not establish that result.

The construction is a mathematical native model, not an observation of experience. Earlier IIT parity examples include a self-linked four-element system (Balduzzi and Tononi, 2008). The no-self noisy system developed here has a different transition matrix and is scored under the later definitions. Its exact results also show where a further content map is needed.

### 5.1 Native model and repertoire convention {#section-5-1}

Fix four independently preparable binary units $V=\{A,B,C,D\}$ and one synchronous update. For $x\in\{0,1\}^4$, let

$$
Y_j=\bigoplus_{i\ne j}x_i\oplus N_j,\qquad
\Pr(N_j=0)=q=1-\eta,\qquad \frac23<q\le1. \tag{24}
$$

The four output noises are independent conditional on $x$. Native ports prepare or hold individual units; a global change of coordinates is not a change of native grain. Fix the current state to $0000$ before scoring. Write $L_q=\log_2(2q)$. Over $\mathbb F_2$, the noiseless matrix is $T=I+J$, where $J$ is the all-ones matrix. Since $J^2=0$ in dimension four, $T^2=I$. Every native preparation therefore has a different noiseless successor.

The calculation follows the unitwise marginalization and product repertoires in Albantakis et al. (2023), Eqs. 28–47. Missing parents are uniformly independently prepared for each output; the product is then taken. This differs from the observational joint conditional obtained by sharing one missing-parent draw. For a mechanism $M$ and purview $Z$, intrinsic information uses the specified state probability multiplied by its log likelihood ratio against the unconstrained repertoire. Unconstrained effects average the mechanism-specific products, in the order of the primary Eq. 31.

Each fully supplied parity row gives its satisfying output probability $q$; missing even one parent gives $1/2$. Every subset of the rows of $T$ is linearly independent. Consequently, the unconstrained effect on $z$ units is $2^{-z}$, and the unconstrained forward-cause likelihood on $m$ mechanism units is $2^{-m}$. For a constant baseline $b$, $p\log_2(p/b)$ is nonpositive when $p\le b$ and strictly increasing when $p>b$. State selection can therefore be proved by exact probabilities rather than floating-point log rankings.

### 5.2 Typed partitions and selected distinctions {#section-5-2}

Mechanism and purview copies retain different types even when their unit names coincide. A disintegration partitions their disjoint union into blocks $(M_r,Z_r)$. The primary Eq. 38 excludes a block with $M_r=M$ and nonempty $Z_r$; empty mechanism or purview blocks are otherwise allowed. Its normalization denominator is

$$
c=|M||Z|-\sum_r|M_r||Z_r|. \tag{25}
$$

It counts possible slots, including absent and self slots. It does not count actual native edges. In the present twelve-edge network, a value $c=13$ must not be described as thirteen physically severed edges.

If a partition loses $k$ intact parity constraints, its selected-state ratio is $(2q)^k$. Its raw irreducibility is $wkL_q$, where $w$ is the backward or forward selected-state weight; the normalized comparison reduces exactly to $k/c$. Exclusion compares the resulting raw scores across purviews.

#### Proposition 5.1: exactly five positive distinctions {#proposition-5-1}

For model (24), the whole mechanism uniquely selects cause and effect purview $V$, with

$$
\varphi_c(V,V)=\varphi_e(V,V)=3q^4L_q.
$$

Each triple $M=V\setminus\{j\}$ uniquely selects cause purview $V$ and effect purview $\{j\}$, with

$$
\varphi_c(M,V)=q^3L_q,\qquad
\varphi_e(M,\{j\})=qL_q,\qquad
\varphi_d(M)=q^3L_q.
$$

All mechanisms of size one or two have zero distinction irreducibility. There are exactly five positive distinctions at this nominated grain.

**Proof.** For a whole-mechanism effect purview of size $z$, a valid partition can retain at most one fully supplied output. Two retained outputs require either overlapping disjoint three-parent blocks or one block containing all four mechanism units and nonempty purview, which is excluded. Keeping one row requires at least three retained slots. It can attain $k=z-1$, $c=4z-3$ by placing its three parents with that output and detaching the rest. Losing all rows has $k=z$, $c\le4z$, hence ratio at least $1/4$. Since $(z-1)/(4z-3)<1/4$, the retaining-one partition wins. Raw effect scores for $z=1,2,3,4$ are respectively

$$
0,\qquad q^2L_q,\qquad 2q^3L_q,\qquad 3q^4L_q. \tag{26}
$$

For the whole cause, retaining two or three rows is possible by placing all four past units with a proper current block. If $r\ge2$ rows survive, at least $4r$ slots are retained, so $c\le4(4-r)$ and $(4-r)/c\ge1/4$. Retaining none also has ratio at least $1/4$. Retaining one needs at least three slots and attains $(k,c)=(3,13)$, whose ratio $3/13<1/4$ wins. The backward weight is $q^4$, giving $3q^4L_q$. Every proper cause purview is reducible: at most two past units supply no complete row; three past units supply just one row, which can be put with its corresponding current unit while separating the rest.

A triple mechanism has three independent constraints on four past bits. The two satisfying past states tie, each with backward weight $q^3/2$; for $M=ABC$, they are $0000$ and $1110$. Keeping two rows requires all four past units in one block and has ratio at least $1/4$. Keeping one row attains $(k,c)=(2,9)$, whereas losing all has ratio at least $1/4$. The raw cause score is therefore $(q^3/2)2L_q=q^3L_q$. Proper cause purviews are reducible. In the effect direction, only the omitted unit has all three parents available. Every valid partition loses that three-input constraint, giving $qL_q$. Appending fair outputs only dilutes its selected-state weight, so the singleton wins. One- and two-unit mechanisms supply no full output parent set.

For the whole effect, $3q^4>2q^3$ when $q>2/3$, and $3q^4>q^2$ in that range. The whole thus beats all proper purviews. The constant-baseline argument establishes state maxima; tied triple cause states have identical cut scores. $\square$

At $q=2/3$, the whole and size-three effect purviews tie; at $q=3/5$, the latter win. These boundaries are part of the result. A largest-cardinality tie rule is not substituted for the primary procedure: the IIT 4.0 supplementary tie discussion advances state ties to congruence and purview ties to structure information. Current $0000$ is congruent with the uniquely selected whole system cause/effect state proved next.

### 5.3 Native subsystem and complex selection {#section-5-3}

System selection cannot be inferred from the mechanism scores. The calculation uses the primary current-background effect rule and whole-current-conditioned past-background cause rule (Eqs. 3–4). Let $S\subseteq V$, $k=|S|$, and $W=V\setminus S$. Effects hold current $W=0$. Causes average each unit's kernel over the marginal law of past $W$ conditioned on all four current units being zero, then take the product. Replacing that posterior by a pinned past background would change the calculation.

#### Lemma 5.2: proper subsystem cause kernels {#lemma-5-2}

Proper subsystem cause kernels have parity-of-other-members success

$$
c_k=\frac{1+(2q-1)^{k+1}}2\qquad(k=1,2,3),
$$

while the full cause kernel has success $c_4=q$.

**Proof.** Put $t=2q-1$. The uniform global past prior cancels in Bayes' rule. Since $T$ is invertible, the conditional past can be written $X=TZ$, where the four coordinates of $Z$ are independent with $\Pr(Z_i=0)=q$. For $w=|W|$,

$$
\bigoplus_{i\in W}X_i=
\begin{cases}
\bigoplus_{i\in W}Z_i,&w\text{ even},\\
\bigoplus_{i\in S}Z_i,&w\text{ odd}.
\end{cases}
$$

The parity sign expectation is respectively $t^w$ or $t^k$. Multiplication by the output-noise sign expectation $t$ gives $t^{k+1}$ for $k=1,2,3$. There is no outside parity for $k=4$. This is a unit-kernel calculation before the required product, not an assertion of independent posterior past bits. $\square$

Write $c_2=(1+t^3)/2$, $c_3=(1+t^4)/2$. The subsystem scores will be

$$
\begin{aligned}
F_1&=0, & F_2&=2c_2^2\log_2(2c_2),\\
F_3&=\frac{3c_3^3}{1+(2c_3-1)^3}\log_2(2c_3),& F_4&=4q^4L_q.
\end{aligned}\tag{27}
$$

Here $F_k$ is system irreducibility, not the total distinction/relation sum.

#### Lemma 5.3: selected subsystem states and partitions {#lemma-5-3}

Throughout $2/3<q\le1$, the effect-maximizing state is zero for every positive subsystem. Cause-maximizing states are zero for pairs and the whole, and $000,111$ for triples. Official directional system partitions and their largest-raw normalized-MIP tie rule yield (27).

**Proof.** Pair and whole parity maps are invertible. Their unconstrained baselines are uniform, and the zero state's probability is the unique maximum. The function $p\log(p/b)$ argument proves intrinsic selection. A singleton has no internal parent, so its constrained and unconstrained laws coincide.

For a triple, the noiseless image consists of even-parity vectors. With $t=2q-1$, the unconstrained effect probability of a state of Hamming weight $m$ is $(1+(-1)^mt^3)/8$. Its likelihood-ratio classes are

$$
\begin{aligned}
r_0&=\frac{(1+t)^3}{1+t^3}, & r_1&=\frac{(1+t)^2}{1+t+t^2},\\
r_2&=\frac{(1+t)(1-t)^2}{1+t^3}, & r_3&=\frac{(1-t)^2}{1+t+t^2}.
\end{aligned}
$$

For $0<t<1$, $r_0>r_1>1$ and $r_2,r_3<1$; these follow by multiplication of the positive denominators. The zero weight $q^3$ also exceeds the one-flip weight $q^2(1-q)$, so zero maximizes information. At $q=1$, impossible effects have zero weight. Applying the analogous even-parity likelihood calculation to the cause kernel gives two equal maxima $000,111$, each of posterior weight $c_3^3/[1+(2c_3-1)^3]$; every other input yields a two-flip likelihood ratio below one.

In a directional system cut, let $a$ be the number of affected targets and $C$ the number of cut potential slots. An internal parent cut makes its target fair. Selected-state effect and cause ratios are $(2q)^a$ and $(2c_k)^a$. Since $C\le a(k-1)$, the minimum normalized signature is $a/C=1/(k-1)$, attained by incoming cuts into singleton blocks. Among these normalized minima, the primary system rule chooses the largest raw score, hence $a=k$. This proves (27). Proper pairs have $c_2<q$ and triples $c_3<q$ with posterior denominator at least one, so cause is the bottleneck for $q<1$. At $q=1$, pair directions tie and the triple cause weight is $1/2$. $\square$

#### Theorem 5.4: the unique selected complex {#theorem-5-4}

At the specified native grain, $ABCD$ is the unique selected complex for every $2/3<q\le1$.

**Proof.** For $q\in[2/3,1]$,

$$
\frac76q^2-c_2=4q(q-2/3)(9/8-q)\ge0,\qquad \log_2(2c_2)\le L_q.
$$

Therefore $F_2\le(49/18)q^4L_q<4q^4L_q=F_4$. On $[2/3,3/4]$, $c_3\le17/32$, and

$$
F_3\le3(17/32)^3L_q<4(2/3)^4L_q\le F_4.
$$

On $[3/4,1)$, $c_3<q$ gives $F_3<3q^3L_q\le4q^4L_q$. At $q=1$, $F_3=3/2<F_4=4$. Singletons have zero score. Native permutation symmetry covers all fourteen proper candidates, proving strict dominance. $\square$

At $q=31/32$, the scores by size are approximately $0$, $1.44234641$, $1.18030380$, $3.36158879$; exact rational logarithmic certificates give a full-versus-proper gap greater than $1.91924237$. At $q=1$, the scores are $0$, $2$, $1.5$, $4$. These values illustrate the strict dominance established analytically above.

### 5.4 Spectators and normalization sensitivity {#section-5-4}

An independent spectator leaves an unchanged $(M,Z)$ pair unchanged. It can nevertheless change a normalized score when explicitly appended to $Z$. For $r\ge1$ independent spectator past bits and fair unconstrained current preparations, the padded whole pair has

$$
\begin{aligned}
\varphi_e&=3q^4 2^{-r}L_q,& k/c&=3/(13+4r),\\
\varphi_c&=q^4 2^{-r}L_q,& k/c&=1/[4(r+1)].
\end{aligned}
$$

The cause MIP switches: retaining three rows with all original past bits, detaching the fourth row and the spectators gives the latter ratio. Retaining $s=2,3$ rows gives $(4-s)/[4(4+r-s)]$, minimized at $s=3$; retaining one gives $3/(13+4r)$ and loses for $r\ge1$. The backward weight is diluted by $2^{-r}$. The unpadded cause thus still wins. Effect dilution likewise preserves its winner.

A constant spectator $E'=0$ is different: appending its zero effect has selected and unconstrained factor one. The raw effect can tie the original while its possible-slot denominator changes. Past $E$ is still independently preparable and irrelevant, so cause is diluted. This is a nominated ambient purview tie, not a counterexample to full IIT. Any mixed subsystem containing the independently disconnected constant has a directional cut of absent cross influence, preserving every unit kernel and giving zero system loss. Its marginal past remains fair after conditioning on $00000$. Core subsystem kernels are unchanged, so [Theorem 5.4](#theorem-5-4) excludes the constant before within-complex purviews are selected. No invented causal-footprint pruning is needed. Alternate grains and coupled spectators are not addressed.

### 5.5 All relations and total structure {#section-5-5}

Let $d_0$ be the whole distinction with $a=3q^4L_q$, and $d_1,\ldots,d_4$ the triples with $b=q^3L_q$. Every cause purview is $V$; effects are $V$ for $d_0$ and the respective omitted singletons for the triples. All carry zero-valued unit states. Cause/effect occurrences retain distinction and side IDs, even if their material sets coincide. A face selects at least two occurrences, covers each involved distinction, and has nonempty congruent intersection. The primary relation purview is the union of its face overlaps, with

$$
\varphi_r(D)=|Z_r|\min_{d\in D}\frac{\varphi_d}{|Z_c(d)\cup Z_e(d)|}.\tag{28}
$$

Congruent material units are counted once in the denominator. Self-relations are included by the primary composition definition.

#### Proposition 5.5: 31 relations and 309 faces {#proposition-5-5}

The selected complex has 31 positive relations, 309 valid faces, and

$$
\Phi=(6q^4+31q^3)L_q.
$$

**Proof.** Each nonempty subset of five distinctions defines a relation. Every subset of at least two has an all-cause face whose overlap is $V$. Its overlap union is therefore $V$. It contains a triple, $a>b$, and each distinction's cause/effect union has cardinality four. Equation (28) gives $b$ for all 26 multi-distinction relations. The whole self-overlap gives $a$, and each triple self-overlap is its effect singleton, giving $b/4$. Relations sum to $a+27b$; distinctions sum to $a+4b$. Their total is $2a+31b=(6q^4+31q^3)L_q$.

For completeness, if a multi-distinction subset contains $m$ triples and includes $d_0$ with indicator $h$, its valid-face count is $(1+2m)3^h$: either no singleton effect is selected or exactly one is selected as effect or both; two different singleton effects cannot intersect. The whole distinction has three side choices. Each singleton distinction subset has one self-face. Counts by relation degree are as follows.

| Degree | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Relations | 5 | 10 | 10 | 5 | 1 |
| Faces | 5 | 66 | 118 | 93 | 27 |

There are thus 31 relations and 309 faces. At $q=1$, the distinction sum is $7$, the relation sum $30$ and $\Phi=37$. $\square$

### 5.6 Symmetry does not select a spatial layout {#section-5-6}

All 24 permutations of native units commute with $T$ and preserve noise, state $0000$, selected distinctions and faces. Suppose a single four-point metric is determined solely by this native organization and respects these automorphisms. Pair transitivity forces every distinct pair to have the same distance $\lambda$. If $\lambda>0$, the three differences from one Euclidean point have Gram matrix $(\lambda^2/2)(I+J)$, whose determinant is $\lambda^6/2>0$. A faithful Euclidean realization needs dimension at least three, attained by a tetrahedron. A pseudometric may instead collapse all points. Likewise, an invariant nonempty strict line-betweenness relation is impossible because the group is transitive on ordered distinct triples.

This premise excludes independently specified geometry, asymmetry, state or history that breaks the automorphisms. It does not exclude a symmetric distribution over realized asymmetric layouts; such a law has an additional outcome/context input. The exact physical structure consequently establishes neither a line nor a general two-dimensional qualitative map.

### 5.7 Failed motifs and a weak-link qualification {#section-5-7}

A contrasting five-unit candidate shows why preferred purviews must be tested against exclusion. Take five native binary units on the line $A,B,C,D,E$, each reading itself and its neighbors. Interior probabilities of next value $1$ at parent-one counts $0,1,2,3$ are $(1/10,3/10,7/10,9/10)$; endpoint probabilities at counts $0,1,2$ are $(1/10,1/2,9/10)$. Conditional next-unit noise is independent. At current $00000$, candidate purviews $ABC,CDE,C,ABCDE$ have nontrivial intersection/union relations but do not survive exclusion for mechanisms $B,D,C,BD$ respectively. Complete unitwise repertoire and typed-partition evaluation gives:

| Mechanism | Maximum cause purviews | Maximum effect purviews |
| --- | --- | --- |
| $B$ | $AB,AC,BC$ | $AB,AC$ |
| $D$ | $CD,CE,DE$ | $CE,DE$ |
| $C$ | $BC,BD,CD$ | $BC,BD,CD$ |
| $BD$ | $C$ | $C$ |

The union candidate's effect probability is $8281/50000$, its forward-cause likelihood $81/100$, and backward selectivity $81/872$. Those positive repertoires alone are not selected distinctions. There are 726 admissible typed partitions for $BD,ABCDE$; the reduced $3^5+1=244$ representative assignments give 54 distinct probability/slot signatures. Empty-mechanism subdivision adds no signature. A cause-MIP tie for $BD,C$ has raw scores $(169/218)\log_2(13/10)$ and twice this value with one and two cut slots; normalized scores agree. $C$ beats the preselected union under either retained tie resolution. The public finite checker supplies the complete exclusion table without using a private largest-cardinality rule.

The overlapping $ABC,CDE$ candidates also give both an effect-to-cause overlap from left to right and from right to left through $C$. Such overlap is not a strict temporal order. A deterministic-OR variant fails even state selection: for $B=0$ over $ABC$, effect $000$ has intrinsic score $1/32$, while $011$ has $9/32$. Physical neighborhoods alone do not select congruent states.

A continuum obstruction explains why merely retuning a homogeneous singleton family is insufficient. Let each of three units have

$$
\Pr(\text{next}=0\mid k\text{ past ones})=(a,b,1-b,1-a),\qquad
\frac12\le b\le a\le1,
$$

with independent next noise. For one current-zero mechanism, put $u=(a+b+1)/4$. Singleton disintegration entirely detaches the purview. Positive congruent all-zero pair/triple raw effect scores are $2u^2\log_2(2u)$ and $3u^3\log_2(2u)$; corresponding raw causes are $(a+b)\log_2(a+b)/4$ and $a\log_2(2a)/4$. State selection follows by comparing the constrained probabilities and likelihood ratios; zero is maximal, with allowed ties at $a=b$. For a positive triple effect to beat its pair requires $u\ge2/3$, hence $a+b\ge5/3$. Its pair cause is then at least $(5/12)\log_2(5/3)>1/4$, since $5^5>2^3 3^5$, while its triple cause is at most $1/4$. Thus no positive congruent triple wins both directions in this family. At $a=b=1/2$, all scores vanish; that boundary is not a positive distinction. The parity result blocks extrapolation of this restricted obstruction to all multi-unit mechanisms.

A separate five-unit weak-link candidate has, for its specified zero state, whole-effect weight

$$
\frac{107653}{800000}+\frac{24843}{800000}\epsilon
$$

and forward-cause weight

$$
\frac{18}{25}+\frac9{100}\epsilon.
$$

Unitwise partition probabilities are affine in $\epsilon$: attenuate both $C\to D$ and $D\to C$ in the five-unit model, transmitting each signal with probability $\epsilon$ and otherwise supplying an independent fair bit. Only one relevant marginalized factor changes in each direction. At both endpoints every partition is at most respectively $107653/800000$ and $18/25$, and a common maximizing class is constant there. A common endpoint ceiling over the admissible partition family therefore gives strictly positive specified-state losses for every $\epsilon>0$.

The coefficients $(24843/800000)\epsilon$ and $(9/100)\epsilon$ are probability losses, not final IIT $\varphi$ after state selection, normalization and exclusion. A proposed binary appearance law based only on strict positivity would consequently be discontinuous at zero coupling; a continuous law would need an additional content/weight map. Neither alternative follows from these calculations. The exact selected parity construction supplies the properly qualified positive mechanism result.

The publication's [references](/consciousness/relational-awareness/references) identify the IIT definitions, earlier parity work and computational sources used here.
