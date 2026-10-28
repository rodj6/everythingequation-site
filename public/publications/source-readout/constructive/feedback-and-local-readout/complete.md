# Feedback and Robust Local Readout of a Fixed Four-State Quantum Source

Jeremy Rodgers. 27 October 2026.

Publication DOI: https://doi.org/10.5281/zenodo.23721114

This is the complete searchable PDF text transcription. Display geometry is preserved in the HTML vector formula panels. Linear PDF text does not encode fraction, matrix, or script topology. Consult the HTML formula rendering for exact notation.

## Source page 1

Feedback and Robust Local Readout of a Fixed Four-State Quantum
Source
Jeremy Rodgers
Independent Researcher
www.everythingequation.com
27 October 2026
Abstract
For a fixed hidden label among four equatorial qubit preparations, we study its common-sign
target with independent conditional copy stock and a fixed decision deadline.
Adaptive and
randomized nonadaptive equatorial readers have equal minimax risk through three copies for every
shared efficiency and visibility. At four copies, exact rational policies and continuous nonadaptive
certificates establish strict feedback advantages in both ideal and specified noisy parents. The
nominal one-percent copy minima lie in [13, 14] for both classes; under the original asymmetric fixed-
gain/phase uncertainty each lies in [16, 17]. A robust repeated-angle minimax frontier extends to
arbitrary common-positive frozen-angle lotteries, and convex-source theorems identify when a single
reader suffices globally. Compact policy graphs, exact dual certificates and retained-record witnesses
are supplied. Copy savings are distinct from total apparatus savings, and no new Born-selection law
is inferred.
1
Task, contributions and operational contract
This paper develops local quantum-reader decision problems within Shadow Theory’s pre-existing
source–readout programme [9]. The results below quantify target access under the declared preparation,
measurement and retained-record conditions. Let h ∈{X+, X−, Y +, Y −} label ρX± = (I ± X)/2 and
ρY ± = (I ± Y )/2. The target is the common sign. One label remains fixed for a complete experiment:
the source provides ρ⊗B
h
, rather than redrawing the axis on each specimen. The preparation controller
is unavailable. A trial destructively measures one fresh copy and all commanded settings, outcomes,
nulls and specified timings remain retained. Every fixed deadline requires a sign; no postselection or
abstention is allowed. Randomized nonadaptive protocols may choose a joint distribution of entire
schedules before outcomes and retain their seed. Adaptive protocols choose settings from past accessible
records and ready coins. Neither class has coherent quantum memory returning between specimens. The
effects specified below and independent ready stock define the statistical comparison; they do not identify
unread detector baths. Equatorial phase control is realized by the declared two-mode phase rotation,
mixing and detection interface, with phase, clock and reference costs separate from specimen count.
The results give constructive source distinctions inaccessible to separate-mode intensities, together
with restrictions under which feedback, randomization and calibration actually change attainable
readout risk. Adaptive multiple-copy discrimination and minimax quantum decision theory have
established treatments[5, 7]. The known-binary comparison in the former does not supply a bound for
the present grouped target or for all arbitrary preselected measurement schedules. Here the hidden axis
stays fixed across the complete conditional-copy stock. Standard quantum discrimination, minimax
symmetrization and representation methods have antecedents cited throughout; the contributions are
certified portions of the declared-task frontiers, rational constructions and independently checkable
1
https://doi.org/10.5281/zenodo.23721114


## Source page 2

continuous certificates. There is no worldwide novelty or empirical validation claim. Ordinary Born
probabilities are assumptions.
1.1
Decision risks and the retained classical interface
Write Cad and Cna for the two policy classes above. A policy Π has an independent, retained seed S,
commands θt and a terminal sign DB. In Cad, θt may depend on (S, o1, . . . , ot−1); in Cna its entire
schedule depends on S alone. The terminal decoder may use all recorded outcomes in either class. Its
label risk and minimax value are
rh(Π; η, v) =
Pr
h,Π;η,v{DB ̸= R(h)},
eC
B(η, v) = inf
Π∈C max
h
rh(Π; η, v).
For a prior w, Bayes risk instead averages the label risks with weights wh; a Bayes-to-minimax equality
is used only when a stated symmetry or least-favourable comparison proves it. In the robust task,
the maximum additionally ranges over one fixed nuisance tuple for the complete experiment, and one
policy is chosen before that tuple is revealed.
The calibrated shared-noise comparisons use the conditional trial kernels
Kθ,h(±) = η
2(1 ± v bh · nθ),
Kθ,h(0) = 1 −η,
where bh is the pure preparation’s equatorial Bloch vector and nθ = (cos θ, sin θ). Conditional on the
fixed label and admitted nuisance, the fresh specimen and ready apparatus stock produce this kernel
at each history. Equal one-copy marginals alone would not establish that sequential law.
The retained decision record contains commanded settings, ternary outcomes, ready seeds and
declared timings. Timings included in this statistical interface are determined by those records or have a
source-independent conditional law; additional source-dependent arrival-time information would require
an enlarged kernel and a new comparison. The theorem does not identify unread baths, time-resolved
absorbing instruments or residual quantum outputs merely from their terminal effects.
Organization and conventions.
Sections 2 and 3 give the small-horizon continuous-menu optima
and attainable four-copy policies.
The nonadaptive certificates prove the cross-class separation.
Sections 5 and 6 then treat the fixed asymmetric uncertainty; larger-horizon bounds and compact policies
follow. The appendices explicitly restrict access to the X/Y menu. Angles are in radians, probabilities
and Bloch gains are dimensionless, and physical pulse times and angular rates retain the units stated in
their interaction models. All certificate paths below are relative to supplement/readers/; reproduction
expands compressed inputs in a disposable tree.
2
Continuous equatorial access: exact small-horizon optima and an
improved fixed reader
Permit every equatorial setting θ, with σθ = cos θ X + sin θ Y , and keep the same shared calibrated
efficiency and visibility:
E±|θ = η
2(I ± vσθ),
E0|θ = (1 −η)I,
0 ≤η, v ≤1.
The source label h ∈{X+, X−, Y +, Y −} is fixed, its controller is unread, and independently prepared
copies are supplied conditional on h. A policy selects one setting per fresh copy and always decides
the sign target at the fixed deadline. All actual settings, signs, nulls and timing records remain
retained. The expanded class includes randomized nonadaptive schedules and their terminal decoders,
2


## Source page 3

as well as nonanticipating adaptive policies. No collective POVM, readable source register or returning
environment is added.
A phase rotation followed by a Hadamard beam splitter makes the bisector θ = π/4 a physically
specified extension of the reader menu. For example, apply Uθ = exp(+iθZ/2) before the Hadamard and
computational-path detection. Its sign effects are U†
θ(I ± X)Uθ/2 = (I ± σθ)/2. A phase Hamiltonian
Hz = ħΩzZ/2 realizes this command with signed pulse area
∫︁Ωz(t) dt = −θ and constant-drive duration
|θ|/|Ωz|. This charges phase-reference availability, preparation, calibration and switching time; the
following optima count copies rather than total apparatus cost.
2.1
A posterior formula and exact one/two-copy theorem
The full continuous menu is closed under X/Y exchange and global sign reversal. These operations
permute source labels transitively, transform settings as θ ↦→π/2 −θ or reverse outcomes, and
transform the final sign consistently. The shared η, v noise law is invariant. Consequently averaging a
uniform-prior Bayes-optimal policy over this group makes all four source risks equal. Uniform-prior
Bayes lower bounds and randomized minimax optima therefore agree in both the adaptive and the
randomized-nonadaptive continuous classes. This argument does not transfer unchanged to unequal
axis responses.
Lemma 2.1 (Exact one-step posterior risk). For unnormalized nonnegative hypothesis weights w =
(wX+, wX−, wY +, wY −), put
W =
∑︂
h
wh,
d = wX+ −wX−+ wY + −wY −,
b = (wX+ + wX−, wY + + wY −).
The optimal unnormalized Bayes loss with one remaining equatorial measurement is
L1(w) = 1
2{W −(1 −η)|d| −η max(|d|, v∥b∥2)}.
A reader parallel to b attains it; when b = 0 any reader suffices.
Proof. The plus-minus target mass difference on a sign outcome r = ±1 is η[d + rv b · nθ]/2, while on a
null it is (1 −η)d. For a two-target decision problem the Bayes error is half the total mass minus half
the sum of absolute target-mass differences. The identity |d + c| + |d −c| = 2 max(|d|, |c|) reduces the
optimization to maximizing |b · nθ|, whose maximum is ∥b∥2. This is an exact optimization over the
entire circle, not a grid scan.
Theorem 2.2 (Exact continuous optima at one and two copies). For the shared-noise continuous
equatorial class, the randomized adaptive and randomized nonadaptive minimax optima coincide at
horizons one and two:
ead
1 = ena
1 = 1
2 −ηv
2
√
2,
ead
2 = ena
2 = 1
2 −η(2 −η)v
2
√
2
.
Repeated use of the fixed bisector θ = π/4, followed by majority of the nonnull signs and a fair tie
decision, attains both optima.
Proof. At the uniform prior, d = 0 and b = (1/2, 1/2), proving the one-copy statement through
Lemma 2.1. For two copies, let the first angle be θ. After its sign r, the unnormalized posterior is
wa,s = η(1 + rvsnθ,a)/8. Its total mass is η/2, its target difference is ηrv(cos θ + sin θ)/4, and its vector
b = (η/4, η/4) is independent of that outcome and angle. Thus |d| ≤v∥b∥2 and the bisector is optimal
3


## Source page 4

on either sign branch. The null branch retains the uniform prior scaled by 1 −η and also admits an
optimal bisector. Adding all three optimal branch losses gives
L2(θ) = 1
2 −ηv
√
2
4
−η(1 −η)v
4
| cos θ + sin θ|.
Its minimum uses | cos θ + sin θ| =
√
2, giving the formula. At η = 1 the first angle is immaterial to the
uniform Bayes value; a repeated bisector still attains the minimax optimum. When ηv = 0 all target
information vanishes. Repeated bisector records have identical laws for X+ and Y +, and identical
laws for X−and Y −, so its four source risks already agree. The symmetry argument upgrades the
Bayes lower bound to minimax equality. Since this attaining protocol is nonadaptive, the two admitted
classes have equal optima.
The one-copy bisector is the familiar Breidbart direction for the unitarily equivalent BB84 subset/bit
task[4]; it is not claimed as a new measurement discovery. The addition relative to the declared
source–readout programme is the explicit noisy two-copy continuous-class theorem and its operational
comparison. At η = v = 1, both errors are (1 −1/
√
2)/2 ≃0.1464466, below the earlier X/Y value 1/4.
At η = 4/5, v = 9/10, the exact errors are 1/2 −(9/50)
√
2 and 1/2 −(27/125)
√
2.
3
Continuous equatorial readers: exact equality through three copies
We establish equality of adaptive and randomized nonadaptive continuous-angle readers through three
copies for every shared efficiency and visibility, then construct genuinely angle-adaptive four-copy
readers. The latter are attainable upper bounds; universal nonadaptive comparison requires the
separate lower certificates. No finite angular scan is used as a surrogate for the continuous class.
3.1
The complete local class and exact three-copy theorem
Use the four fixed source labels, their common sign target and the shared calibrated effects
E±|θ = η
2(I ± vσθ),
E0|θ = (1 −η)I,
0 ≤η, v ≤1.
All actual angles, signs and nulls remain retained. The label controller is inaccessible; copies are
independent conditional on that one fixed label. Adaptive settings are nonanticipating functions of
accessible records and private coins. Nonadaptive schedules may be jointly randomized in advance,
with arbitrary terminal decoders and their seed retained. A fixed deadline requires a sign decision,
with neither postselection nor abstention. The full equatorial menu and common detector law are
closed under axis exchange and global source-sign reversal. Uniform-prior Bayes risk is a minimax
lower bound; symmetrization promotes an attaining Bayes reader to minimax. The repeated bisector
already has equal error on all four labels.
Let qn(β) be fair-tie majority error for n independent signs of positive bias β. In particular
q0 = 1
2,
q1 = q2 = 1
2 −β
2 ,
q3 = 1
2 −3β
4 + β3
4 .
Theorem 3.1 (Continuous equality through three copies). For the complete local equatorial class, all
0 ≤η, v ≤1,
ead
3 = ena
3 =
3
∑︂
n=0
(︄
3
n
)︄
ηn(1 −η)3−nqn(v/
√
2).
4


## Source page 5

Repeated measurement at θ = π/4, followed by majority of the nonnull signs and a fair tie, attains it.
Equivalently,
e3 = 1
2 −v(3η −3η2 + 3
2η3)
2
√
2
+ η3v3
8
√
2 .
At η = 4/5, v = 9/10 this is 1/2 −(4023/15625)
√
2 ≃0.135879605669. The theorem adds no assertion
about four or more copies.
3.2
A continuous two-control inequality
The following lemma supplies the load-bearing continuous optimization. It covers negative as well as
positive direction components.
Lemma 3.2. Let (c, s) and (p, q) be unit vectors, u ∈[0, 1], and put
A = c + s, B = p + q, C = cp + sq, Q = c2p2 + s2q2.
Then
∑︂
r=±1
max{|A + rB|,
√︂
2 + 2ruC + u2Q} ≤
√
2(3 −u/2).
Equality is attained when both directions are the positive bisector.
Proof. There are four branches of the two maxima. If both choose absolute linear terms, their sum is
2 max(|A|, |B|) ≤2
√
2. If both choose square roots, Cauchy–Schwarz and Q ≤1 give 2
√
2 + u2. This
is at most the claimed bound because 2(3 −u/2)2 −4(2 + u2) = 10 −6u −7u2/2 ≥1/2.
For a mixed branch, changing (p, q) to its negative if necessary reduces the required estimate to
M = |A + B| +
√︂
2 −2uC + u2Q ≤
√
2(3 −u/2).
Write (c, s) = (cos θ, sin θ), (p, q) = (cos φ, sin φ) and set α = θ−π/4, β = φ−π/4, x = | cos((α+β)/2)|,
y = | cos((α −β)/2)|. Trigonometric identities give
M
√
2 = G(x, y) = 2xy + R,
R2 = H2 + u2x2(1 −x2),
H = 1 + u/2 −uy2.
Here x, y ∈[0, 1], R ≥H ≥1 −u/2 ≥1/2. If x ≥y, then ∂yG = 2x −2uyH/R ≥0, since xR ≥uyH.
If y ≥x, then ∂xG = 2y + u2x(1 −2x2)/R ≥0.
For x2 ≤1/2 this is immediate.
Otherwise
2yR ≥y ≥x ≥u2x(2x2 −1). Thus increasing the smaller coordinate to the larger cannot decrease G.
On the diagonal, with X = x2 = y2,
G = 2X +
√︂
(1 + u/2)2 −2uX.
Its derivative is 2 −u/
√︁
(1 + u/2)2 −2uX ≥0 because the square root is at least 1 −u/2 and u ≤1.
Hence its maximum is G(1, 1) = 3 −u/2. This proves both mixed branches and the lemma.
Proof of Theorem 3.1. First set η = 1. It suffices to lower-bound the uniform Bayes risk of every
deterministic adaptive policy: independent random seeds only average such risks. Let the first direction
be (c, s). Its two equiprobable outcomes have posteriors related by global source-sign reversal, so their
optimal continuation values agree. Let (p, q) be the second direction on the first-plus branch. After its
outcome r, the unnormalized posterior weights have target mass difference v(A + rB)/8 and axis mass
vector ((1 + rv2cp)/8, (1 + rv2sq)/8).
5


## Source page 6

The preceding exact one-remaining-copy formula, obtained from |d + z| + |d −z| = 2 max(|d|, |z|),
optimizes the third direction over the whole circle. Adding the two second outcomes and the equal
first-sign branches gives three-copy Bayes loss
1
2 −v
8
∑︂
r=±1
max{|A + rB|,
√︂
2 + 2rv2C + v4Q}.
Lemma 3.2, with u = v2, bounds this below 1/2 −3v/(4
√
2) + v3/(8
√
2) = q3(v/
√
2). The repeated
bisector attains this value, including arbitrary terminal decision rules in the comparison.
For 0 ≤η ≤1, condition on the entire erasure pattern of the three trials. The pattern is independent
of the source label and signs. A policy conditioned on a nominated pattern with n clicks induces an
admitted n-copy adaptive ideal-efficiency reader; giving the controller that pattern in advance can only
make the lower bound more permissive. The preceding n = 1, 2 optima and the just-proved n = 3
optimum therefore lower-bound each conditional risk by qn(v/
√
2). Averaging over the binomial click
count yields the claimed lower bound. The fixed bisector attains each conditional value simultaneously.
Its four errors are equal, so the Bayes lower bound is an attained minimax value for both classes.
The conditional-erasure argument uses independent sign-blind erasures. It does not assert that a
fresh reset removes arbitrary correlations, or that an unknown future pattern is physically accessible to
the deployed reader. Advance pattern disclosure is used only as a lower-bound relaxation.
3.3
Constructive four-copy angle adaptation
At four copies we provide explicit frozen policy tables, not numerical claims of globally optimal adaptive
controls. Both the ideal and nominal policies use forty declared measurement nodes and eighty-one
terminal ternary records, including impossible ideal-null branches with harmless defaults. Each direction
is an exactly unit rational pair
n(t) = ((1 −t2)/(1 + t2), 2t/(1 + t2)),
t ∈Q.
Numerical search selected candidate angles; rational conversion and exact full-word verification establish
the delivered performance. Search failure or floating convergence is not an optimality certificate.
The base policy first uses a fixed angle θ, and on a first nonnull outcome uses φ. Its third setting
depends on whether the second sign agrees with the first, disagrees, or is null. A first-null branch
uses the bisector candidate. At the last node a rational approximation to the posterior axis-mass
direction is used. Where the nominated posterior gives no possible Bayes-risk improvement from the
last measurement, its setting is instead held at the previous setting. The published leaf decisions remain
specified on every record, including zero-probability ideal-null defaults. This is a flat nominal-risk
choice, not a claim that every leaf decision is identical under a changed noise model. The final trial
still occurs and is fully archived. This saves potential actuator motion; it does not silently convert to
an optional-stopping or reduced-copy experiment.
Approximate design angles, in radians, are:
Parent
θ
φ
same sign
opposite sign
null
Ideal
.17468079
1.39611555
.01091177
.78539702
.79955276
Nominal
.75070933
1.09092805
1.28465859
.49454527
.79086328
The JSON files, not these rounded displays, define the actual rational commands, all branches and
terminal decisions. Root symmetrization uses two fair bits: exchange X and Y in every setting, and/or
reverse every recorded sign and the final decision. This group acts transitively on the four labels and
respects the complete admitted continuous class and common noise law. Averaging the base policy’s
6


## Source page 7

four exact errors therefore gives the same error on each label. The seed is available to the decoder and
counted as controller stock; it does not reveal the hidden source label.
For the ideal parent (η, v) = (1, 1) the resulting minimax attainable upper error is strictly less
than 0.030605 (actual exact-rational value approximately 0.0306041631615). For the nominal parent
(4/5, 9/10) it is strictly less than 0.103471 (approximately 0.103470608280). These upper bounds are
proved by summing each of the 34 retained-record probabilities for each source label. They do not
by themselves exclude better nonadaptive readers or establish the adaptive optimum. The separate
continuous nonadaptive certificate must be used for any cross-class separation.
3.4
Verification and limits
The independent standard-library checker verifies 630 rational instances of the mixed geometry inequality
using exact signs in Q(
√
2), then checks all 81 words for each policy, normalization on each source, all
root symmetry permutations and the stated rational upper bounds. The analytical inequality proves
the entire continuous three-copy theorem; finite tests alone do not do so. Frozen rational policy tables
provide independently checkable attainability without rerunning the exploratory optimizer. Optional
exploratory scripts use SciPy; core certification uses only the Python standard library.
The equality theorem and policy constructions extend the specified source–readout decision problem.
The fixed inaccessible source label, conditional-copy independence, common calibrated detector law,
controller coins, phase reference, clock and complete retained records remain premises. No complete
residual-instrument equivalence, Born-selection law, consciousness criterion, trine-resource theorem or
universal physical cost advantage is claimed by these decision-risk results.
4
Certified continuous nonadaptive obstructions
4.1
Four ideal copies: an all-angle lower certificate
Theorem 4.1 (Continuous nonadaptive four-copy lower bound). In the ideal parent η = v = 1, every
randomized nonadaptive four-copy continuous equatorial reader, with arbitrary terminal decision and
retained settings, has worst-label sign error at least 1/32.
Proof. For a fixed schedule, an optimal uniform-prior decoder can be chosen odd on four sign bits.
Its Walsh expansion has coefficients only on singletons and triples. There are 28 = 256 such odd
decoders; exact enumeration divides them into seven orbits under independent outcome reversals and
permutations of the four measurements, of respective sizes 8, 64, 32, 48, 64, 32, 8. For coefficients αi and
βI, its target correlation is
C = 1
2
⎧
⎨
⎩
∑︂
i
αi(ci + si) +
∑︂
|I|=3
βI
(︄∏︂
i∈I
ci +
∏︂
i∈I
si
)︄⎫
⎬
⎭.
Eliminate the fourth measurement analytically. With
A = α4 + β124c1c2 + β134c1c3 + β234c2c3,
B = α4 + β124s1s2 + β134s1s3 + β234s2s3,
F0 =
3
∑︂
i=1
αi(ci + si) + β123(c1c2c3 + s1s2s3),
its largest possible correlation is (F0 +
√
A2 + B2)/2. This maximization covers the full fourth circle,
not a discretized setting.
7


## Source page 8

For the first three directions use the rational circle
(ci, si) = εi
(︄
1 −t2
i
1 + t2
i
,
2ti
1 + t2
i
)︄
,
−1 ≤ti ≤1,
εi ∈{−1, 1}.
The hemisphere signs are explicitly enumerated: suppressing them after choosing a decoder represen-
tative would not establish a full-circle bound. Together with seven decoder orbits this gives 56 cube
calculations.
The delivered certificate partitions each cube into a finite prefix-free set of dyadic octree boxes.
On a box, exact endpoint formulas enclose each ci, si; ci additionally has maximum one when its
interval contains zero. Rational interval products and sums give an upper bound on F0 and intervals
for A, B. An integer-square-root enclosure bounds
√
max A2 + max B2 upwards. Every resulting
correlation bound is at most 15/16. The exact verifier checks all 143633 leaves, all orbit and sign
variants, prefix-freeness and total cube volume one; the largest octree depth is eight. These finite exact
inequalities prove the continuum bound. Floating calculations only constructed a candidate partition
and are not accepted as proof of any leaf.
Thus uniform-prior error is at least (1−15/16)/2 = 1/32 for every schedule. A randomized schedule
is an average of such experiments with its retained seed and cannot lower this average Bayes bound.
Worst-label error is no smaller than uniform-prior error, proving the claim.
The delivered research10/nonadaptive/four_certificate.json.gz contains the finite proof
object. The reproduction runner expands it without changing the underlying JSON content (the
expanded hash is verified); research10/nonadaptive/verify_four.py recomputes every accepted
inequality with standard-library rational arithmetic and integer square roots. The exploratory partition
generator is retained in the historical evidence archive and is not required for verification. The bound
1/32 is deliberately sufficient for discrimination and is not claimed as the exact four-copy nonadaptive
optimum. Floating exploratory optimization suggests a minimum near 0.03740607, but that number
carries no global optimality claim. The certificate concerns the ideal parent only; it is not the principal
nominal noisy four-copy optimum.
4.2
A noisy full-continuum separation at the principal benchmark
The ideal separation is not the only surviving regime. A second exact certificate treats the principal
shared detector parent, retaining all nulls and all measurement settings.
Theorem 4.2 (Nominal continuous nonadaptive four-copy lower bound). At η = 4/5, v = 9/10,
every randomized nonadaptive four-copy continuous equatorial reader has worst-label sign error at least
13/125 = 0.104.
Proof. Condition on the entire source-independent erasure pattern and maximize the terminal decision
separately on each pattern. Denote by Ck the optimal uniform-prior target correlation for the nominated
k nonnull directions. For a single fixed direction i, put ai = ci + si; then
C1(i) = v
2|ai|,
C2(i, j) = v
2 max(|ai|, |aj|).
For three specified directions,
C3(1, 2, 3) = 1
8
∑︂
r2,r3=±1
⃓⃓⃓⃓⃓v
3
∑︂
i=1
riai + v3r1r2r3(c1c2c3 + s1s2s3)
⃓⃓⃓⃓⃓,
r1 = 1.
The preceding exact three-copy theorem gives global upper correlations C1 = C2 = v/
√
2 and
C3 = v(6 −v2)/(4
√
2).
8


## Source page 9

Fix the first three directions, and grant separate fourth-direction optimization to the different
erasure patterns. This relaxation need not be a realizable nonadaptive schedule; it only increases the
upper correlation used for the lower error bound. With z = 1 −η, the resulting upper bound is
U = ηz3{C1(1) + C1(2) + C1(3) + C1}
+ η2z2{C2(1, 2) + C2(1, 3) + C2(2, 3) + 3C1}
+ η3z{C3(1, 2, 3) + 3C3} + η4Cfree
4
(1, 2, 3).
For Cfree
4
, enumerate the same odd four-bit decoders as in Theorem 4.1. Multiply every triple coefficient
by v2 in F0, A, B, then its free-fourth correlation is v(F0 +
√
A2 + B2)/2. The first-three conditional
term can also be capped by C3.
The original objective is invariant under simultaneous schedule/decoder outcome reversals and
permutations. Apply these symmetries before choosing the relaxed fourth direction. The lower-click
optimum terms are invariant under outcome reversals. Thus the seven decoder orbits and eight
hemisphere sign choices again cover all original schedules. Relaxing first and then silently imposing a
symmetry of the relaxed formula would not be justified.
The delivered research10/nonadaptive/nominal_certificate.json.gz, expanded by the
reproduction runner, bounds U ≤99/125 on all 56 cube variants. It contains 4230653 leaves, with
maximum depth eleven. Every inequality is checked using outward dyadic intervals with scale 260.
Interval sums, rational scalar products and general products use integer floor and ceiling. Integer
square roots are rounded upwards. No floating number is used to accept a bound. Exact endpoint
formulas for the rational circle give the starting intervals.
For clarity, at the stated η, v let c1, c2, c3 denote upper interval numerators of the three braces
above, and let f0, A, B be upper/intermediate numerators for the free-fourth decoder expression. All
are expressed at the same dyadic scale. The total upper numerator is rounded from
20c1 + 80c2 + 320c3 + 576{f0 +
√
max A2 + max B2}
3125
.
The constants enclose C1 = 9
√
2/20 and C3 = 4671
√
2/8000 upwards. Prefix-freeness and exact
cube-volume one establish full coverage, not merely a collection of point checks. The decoder orbit
enumeration and all hemisphere signs are checked again. Hence every schedule has average error at
least (1 −99/125)/2 = 13/125; retaining its random seed and mixing schedules cannot improve that
average lower bound. Worst-label risk is no smaller.
Combining this universal nonadaptive bound with the separately certified four-copy adaptive error
< 0.103471 proves strict feedback benefit in the principal noisy parent over all continuous nonadaptive
equatorial schedules. This is stronger than comparing selected angle allocations. The certificate is not
an exact nonadaptive optimum; numerical exploration near 0.10476238 remains separately labelled.
For the selected tolerance 519/5000 = 0.1038, the exact copy minima are four adaptive versus
five randomized nonadaptive. The three-copy adaptive equality gives a lower risk ≃0.13587961, the
four-copy adaptive construction passes, and the universal four-copy nonadaptive lower bound fails the
target. Five repeated bisectors attain 1/2 −(11631897/39062500)
√
2 ≃0.07888035. This post hoc
tolerance demonstrates an attained copy separation; it is not the original one-percent target.
The strict separation also persists on a specified open parameter box. For a frozen policy, or
uniformly for every nonadaptive competitor, changing shared parameters by (δη, δv) changes the
one-trial record law by TV at most κ = |δη| + |δv|/2. Sequential coupling bounds any four-copy target
risk change by 4κ. Thus the strict nominal gap of more than 0.000529 remains positive whenever
8κ < 0.000529. In particular |δη|, |δv| ≤10−5 leaves a certified gap of more than 0.000409. The adaptive
9


## Source page 10

policy stays frozen; inaccessible parameters do not select a different policy. This is a shared-noise
robustness statement, not a solution of the separate asymmetric fixed-unknown-gain problem.
verify_nominal_integer.py carries the efficient exact replay; verify_nominal.py supplies a
separately written Fraction interval reference. 961 selected leaf bounds are cross-checked with that
reference. An independent audit checks every leaf with a root-free final squared allowance. The full
certificate is large because it covers continuous settings rigorously, rather than claiming a finite grid
solves the continuum. It is compressed in the supporting package.
4.3
The resulting ideal feedback separation and its limits
The separately constructed adaptive four-copy policy has a certified ideal error strictly below 1/32.
The preceding lower bound therefore covers every continuous nonadaptive competitor, rather than
only the old X/Y menu or selected fixed-angle designs. This is a genuine continuous-access feedback
separation under the stated preparation and record contract.
At the explicitly selected tolerance 0.031, the exhibited adaptive policy passes with four copies.
Every nonadaptive reader with at most four copies fails by the 1/32 bound and monotonicity. A
five-copy repeated bisector has error 1/2 −(43/128)
√
2 ≃0.02491263, so five suffice nonadaptively.
Thus the adaptive four-copy construction and exact nonadaptive five-copy minimum give a concrete
task separation at that post hoc illustrative tolerance. The separate three-copy adaptive theorem gives
the same ideal lower value 1/2 −(5/16)
√
2 > 0.031, so four is also the exact adaptive minimum. Thus
the exact copy minima at this selected tolerance are four adaptive versus five randomized nonadaptive
copies. The tolerance was chosen after the frontier calculation and is not the original one-percent target.
Full large-horizon continuous optima, exact four-copy optimum values and general robust adaptation
remain separate questions.
5
A robust frozen reader without X/Y symmetry
Admit unequal contrast transfer, a common unknown phase offset and a broader nominal equatorial
direction. One frozen setting and one parameter-independent decoder suffice for a sharp restricted
minimax theorem. The restriction is consequential: it optimizes the common-positive, repeated-single-
angle class, not all equatorial adaptive policies or arbitrary collective measurements.
5.1
Physical parent and uncertainty contract
The source remains the four pure preparations ρX±, ρY ± and the nominated binary sign target.
Conditional on its fixed inaccessible label, fresh copies and apparatus stock are independent. Before
the phase reader apply a fixed, unknown Pauli channel with Bloch multipliers (gX, gY , gXgY ), where
0 ≤gX, gY ≤1. It has the explicit nonnegative Pauli probabilities
(pI, pX, pY , pZ) = 1
4
(︁(1 + gX)(1 + gY ), (1 + gX)(1 −gY ), (1 −gX)(1 + gY ), (1 −gX)(1 −gY )
)︁.
Their sum is one, so the channel is completely positive and trace preserving for every admitted gain pair.
A coherent two-mode reader then measures the actual equatorial angle θ + δ, followed by independent
sign-blind erasure. Thus
E±|θ = η
2 [I ± (gX cos(θ + δ)X + gY sin(θ + δ)Y )] ,
E0|θ = (1 −η)I.
The channel precedes the phase measurement; changing this order can change the model. All effects
are positive because their Bloch-vector length is at most one. The phase rotation uses the specified
10


## Source page 11

Hz = ħΩzZ/2 coupling, calibrated beam splitter and terminal detector. Phase and offset are in radians,
Ωz is in radians per second and pulse durations are in seconds. The Pauli/environment ready stock
and erasure port are physical resources, not free mathematical randomness.
The unknown parameters are fixed throughout a deployment block and obey
η ∈[η0, 1],
gX ∈[a, 1],
gY ∈[b, 1],
|δ| ≤∆,
0 ≤∆< π/4,
0 < η0 ≤1,
0 < a, b ≤1.
No prior distribution over these nuisance parameters is assumed. The controller fixes one nominal
angle before learning their values. The admitted common-positive class is θ ∈[∆, π/2 −∆], so both
axes have nonnegative target-aligned signal at every admitted offset. Every trial at the fixed deadline
is counted; the decoder returns the majority of the nonnull signs, with an independent fair guess on a
tie, including the all-null record. Nulls and all settings remain archived. No hidden label or calibration
purifier is read.
Under source label X± the nonnull sign has mean ±βX, where βX = gX cos(θ + δ); under Y ± it
has mean ±βY , where βY = gY sin(θ + δ). The four labels need not have equal signal strengths. The
proof below uses a hard binary pair for its lower bound rather than incorrectly reusing uniform-prior
minimax equality from the symmetric experiment.
5.2
Exact minimax angle and full record risk
Define the majority error for n successful signs of bias β by
qn(β) =
∑︂
k<n/2
(︄
n
k
)︄(︃1 + β
2
)︃k (︃1 −β
2
)︃n−k
+ 12|n
2
(︄
n
n/2
)︄(︄
1 −β2
4
)︄n/2
,
and the deadline risk, including all erasures, by
QB(η, β) =
B
∑︂
n=0
(︄
B
n
)︄
ηn(1 −η)B−nqn(β).
The empty-sign case is q0 = 1/2. The integer k counts correct signs under a positive-target preparation.
Theorem 5.1 (Sharp robust repeated-angle frontier). For a fixed nominal angle in the declared
common-positive class, the minimum over every terminal decoder of the worst error over source labels
and fixed nuisance parameters is exactly
QB
(︁η0, m(θ)
)︁,
m(θ) = min{a cos(θ + ∆), b sin(θ −∆)}.
The same fair-tie majority decoder attains this optimum for all parameters. The robust maximum
signal is attained at
tan θ∗= a cos ∆+ b sin ∆
b cos ∆+ a sin ∆,
m∗=
ab cos(2∆)
√︁
a2 + b2 + 2ab sin(2∆).
Consequently QB(η0, m∗) is the exact robust optimum over all fixed angles and terminal decoders in
this class. The setting and decoder do not depend on an inaccessible realized nuisance parameter.
Proof. For the symmetric binary pair of source signs with known bias β, the likelihood ratio of a record
is [(1+β)/(1−β)]n+−n−; null factors cancel. Thus fair-tie majority has equal error on the two signs and
is minimax, with error QB(η, β). The formula remains valid at the endpoints by continuity. Increasing
11


## Source page 12

the bias cannot increase its optimal error: a larger-bias sign channel can simulate a smaller positive
bias by an independent sign flip. Increasing the efficiency also cannot increase the error: success counts
are coupled monotonically, and the optimal binary Bayes errors qn are nonincreasing in n because an
extra sign can be ignored. This is a direct experiment-degradation argument, not an assumed global
four-label symmetry.
For every admitted parameter and source axis, the bias is at least m(θ), so the same majority
policy has error no larger than the displayed bound. Conversely, if the minimum is supplied by the X
term, choose gX = a, δ = ∆and η = η0. The two admitted labels X+, X−alone force every decoder’s
worst error to be at least QB(η0, m(θ)). If the minimum comes from Y, use gY = b, δ = −∆and the Y
sign pair. The adversary need not make both axes worst at the same offset; one hard pair suffices.
On the admitted angle interval, the X floor is decreasing and the Y floor increasing. Their unique
intersection maximizes their minimum. Solving their equality gives the stated tangent. Substitution
gives m∗, and ∆< π/4 puts the intersection inside the admitted interval. No assertion is made
that an outside-quadrant, multilevel decoder or an angle-varying protocol belongs to this restricted
theorem.
The same bound extends to deterministic unknown efficiencies ηt ≥η0 when their erasure events are
independent of one another, source label, sign and control, while the gains and phase offset remain fixed.
Condition on the erasure schedule; the retained signs still have one constant bias and success-count
coupling applies. This does not license arbitrary history-dependent losses or varying per-trial biases. In
particular, adding a weak sign to a majority of strong signs need not improve its error; the fixed-bias
premise is essential to the efficiency argument.
5.3
Exact algebraic certificates and quantitative gain
For rational a, b, t = tan ∆, the chosen nominal tangent is the rational (a + bt)/(b + at), and
m2
∗=
a2b2(1 −t2)2
(1 + t2)[(a2 + b2)(1 + t2) + 4abt] ∈Q.
The nominal bisector instead has squared worst bias min(a, b)2(1−t)2/[2(1+t2)]. For rational efficiency
the risk is computed exactly in Q(
√︁
m2∗): every value is represented as A + C
√︁
m2∗with rational
coefficients. Comparisons with 1/100 use integer squaring after checking signs, not a floating-point
threshold. Integer-square-root enclosures provide independently checkable 96-bit rational lower/upper
bounds.
For η0 = 4/5, a = 9/10, b = 4/5, and tan ∆= 1/100, the robust setting is tan θ∗= 908/809, with
m2
∗= 129574081296/369773223625. The exact comparisons give
Reader in the same uncertainty class
trials
worst error
Optimized frozen angle
16
0.0102368487113 . . .
Optimized frozen angle
17
0.00844219845891 . . .
Nominal bisector
18
0.0107238296666 . . .
Nominal bisector
19
0.00905666129798 . . .
Monotonicity in budget proves exact one-percent minimum budgets seventeen and nineteen within
the respective repeated-angle classes.
This is a two-trial improvement with one setting in each
implementation, not a comparison against a restricted X/Y baseline. For the larger uncertainty
example η0 = .9, a = .8, b = .6, tan ∆= .1, the corresponding minimum budgets are thirty and
thirty-nine. Complete rational/algebraic certificates, including adjacent failing budgets, are supplied.
The isotropic special case also clarifies the earlier access restriction. At gX = gY = .9, ∆= 0
and η = .8, a repeated bisector reaches one-percent error at fourteen copies. Thus the axis-restricted
12


## Source page 13

nineteen-versus- twenty-one X/Y threshold is not an unrestricted equatorial optimum. The continuous-
reader results supply separate adaptive comparisons; this section does not claim that a repeated bisector
is globally optimal.
5.4
Calibration and physical/resource limits
The theorem’s intervals are admitted premises until certified by a trusted calibration experiment
or an independent device model. Four trusted source preparations at the actual frozen setting can
directly bound the four sign/null kernels without inferring the entire channel or nuisance parameters
uniquely. Such a calibration must pay for its probes, confidence coverage, source trust and stability into
deployment. A control model claiming a lower gain or bounded phase over an interval of settings needs
additional justified coverage; samples at one angle do not certify all angles for an arbitrary detector.
The frozen majority controller needs a running signed count and deadline counter, plus a fair
terminal tie bit; it has no setting-feedback branch. The angle itself must be prepared and maintained,
with its phase reference and accuracy charged. Each physical realization must state whether the phase
is applied separately to every fresh copy or configured once in a held passive reader. Their timing costs
differ. The source copies are provided independently, not cloned from an unknown specimen, and the
ordered archive is retained even when the decision uses only a count.
Robust quantum discrimination is established literature [6]; its uncertain-state model is not the
detector model optimized here. The ordinary degradation argument has classical antecedents[2], and
its special case is proved above. Our additions are the explicit within-programme robust angle frontier,
physical Pauli-channel realization and exact algebraic operating region. No worldwide priority, complete
retained-output equivalence, empirical detector validation, Born-selection law or source ontology is
asserted.
The executable tests compare seventy-two independent ordered ternary-path sums, 1,500 rational
geometry inequalities and 180 algebraic comparison/ enclosure cases. These supplement, rather than
replace, the analytical minimax proof. The parameter-independent decoder, phase/gain uncertainty,
retained nulls and access restrictions are part of every numerical result.
6
Robust readers: a convex-hull theorem and a global copy lower
bound
We remove the repeated-angle restriction at one and two copies. The larger-horizon robust optimum
remains unresolved; no fixed-angle optimum is silently promoted to it.
6.1
A general antipodal composite-source theorem
Let S be a nonempty compact subset of the equatorial Bloch disk. A hidden r ∈S and sign s ∈{+1, −1}
are fixed throughout an experiment, and the source supplies independent copies of ρs,r = (I + s r · σ)/2.
The reader cannot inspect the source label or nuisance register. On each copy it may choose any
equatorial projective direction, followed by independent sign-blind erasure of fixed unknown efficiency
η ∈[η0, 1], 0 < η0 ≤1. It must decide s at a fixed deadline, retaining all settings and nulls. Randomized
policies and arbitrary terminal decision rules are admitted. The worst error takes a supremum over
(s, r, η), without imposing a nuisance prior.
Let z be the closest point to the origin in conv S and m = ∥z∥. Compactness ensures existence.
The supporting-plane property is
r · z ≥m2
(r ∈S).
(1)
13


## Source page 14

Theorem 6.1 (Global robust equality through two copies). In this complete equatorial policy class,
the adaptive and randomized nonadaptive minimax values at horizons one and two are exactly
e1 = 1 −η0m
2
,
e2 = 1 −η0(2 −η0)m
2
.
For m > 0, repeating the single direction z/m and deciding by majority of nonnull signs with a fair tie
attains both values. For m = 0, an uninformed fair decision attains 1/2 and neither class improves
it. The same statement for a general three-dimensional Bloch set requires full Bloch-sphere projective
access, not merely the equatorial menu.
Proof. The minimum-distance projection inequality gives (1), so measuring z/m has target-aligned
bias at least m on every admitted source. At one copy its worst error is at most (1 −η0m)/2. At two
copies majority with a fair tie has sign bias m whenever at least one copy survives erasure, giving the
stated upper bound. These bounds are valid for unknown fixed r and unknown fixed η, and use one
controller policy for all their values.
For the lower bound, choose a finitely supported distribution μ on S with barycentre z; planar
Carathéodory gives at most three support points. This distribution is a mathematical least-favourable
comparison, not a new prior assumed by the robust protocol. Choose a fair source sign and efficiency
η0. Each sampled r remains fixed for all copies. Define the two conditional target mixtures
Ω(n)
s
=
∫︂
S
ρ⊗n
s,r dμ(r).
At one copy Ω(1)
+ −Ω(1)
−= z · σ, whose trace distance is m. At two copies, expanding each tensor
product gives
Ω(2)
+ −Ω(2)
−= 1
2{(z · σ) ⊗I + I ⊗(z · σ)}.
(2)
All quadratic terms cancel between opposite signs. Its eigenvalues are m, 0, 0, −m, so the two-copy
trace distance is again m. This calculation uses the mixture of tensor powers with fixed r; it never
substitutes the tensor power of a one-copy mixture.
An orthogonal auxiliary null flag simulates the complete declared classical outcome kernel. For
any fixed adaptive policy this simulation extends inductively over its histories and independent coins.
We may therefore lower-bound the policy by allowing arbitrary joint measurement of the auxiliary
states. At two copies the orthogonal zero-, one- and two-click blocks have total probability (1 −η0)2,
2η0(1 −η0) and η2
0. Their trace distances are 0, m, m. Thus the total trace distance is η0(2 −η0)m;
the one-copy value is η0m. Binary equal-prior minimum error (1 −D)/2 supplies the matching Bayes
lower bounds. A robust worst error cannot be smaller than any valid comparison-prior average. This
proves minimax equality. If m = 0, the same comparison makes both differences vanish.
This establishes a concrete interface where feedback and additional settings are unnecessary: through
two copies, the closest point of the positive-target Bloch hull supplies a sufficient robust reader direction.
It is a statistical decision result, not complete retained-instrument identification. Correlated accessible
preparation records, a readable purifier, non-independent copies or a different erasure parent change
the task. The trace-distance decision principle is established quantum theory; the composite-source
cancellation and its application to the specified reader task are proved here.
6.2
Applying the theorem to asymmetric fixed calibration
The preceding detector kernels have the following equivalent statistical Bloch set for a positive sign:
S = {g(cos δ, −sin δ) : g ∈[a, 1], |δ| ≤∆} ∪{g(sin δ, cos δ) : g ∈[b, 1], |δ| ≤∆}.
14


## Source page 15

Indeed the X source gives gX cos(θ + δ) and the Y source gives gY sin(θ + δ) when paired with nθ.
Absorbing fixed nuisance into this set is a representation of the admitted classical kernels and decision
risks. It neither identifies complete residual channels nor makes the nuisance accessible to the controller.
Define
u = (a cos ∆, −a sin ∆),
v = (−b sin ∆, b cos ∆).
They are admitted positive-target vectors: choose gain floors, with δ = +∆on X and δ = −∆on Y.
For the lower-bound prior this nuisance is correlated with the fixed hidden axis, and remains fixed
throughout that experiment. This is allowed in the supremum over source label and nuisance; it is not
a per-node adversary or a claim that a physical random calibration law follows that prior.
Put c = u · v = −ab sin 2∆. The closest point on their segment is
z = pu + (1 −p)v,
p =
b2 −c
a2 + b2 −2c,
∥z∥= m∗=
ab cos 2∆
√
a2 + b2 + 2ab sin 2∆.
Here 0 < p < 1, and z · u = z · v = ∥z∥2. The preceding optimized direction has signal at least m∗on
the whole uncertainty set, so the supporting-plane inequality also holds for all its other admissible
vectors. Consequently z is closest in the whole hull, not only this segment. The global robust optima
are therefore
e1 = (1 −η0m∗)/2,
e2 = (1 −η0(2 −η0)m∗)/2,
over every continuous equatorial adaptive or randomized nonadaptive reader. No common-positive
restriction on competitors remains at these horizons. The attaining reader retains the robust angle
tan θ∗= a cos ∆+ b sin ∆
b cos ∆+ a sin ∆.
For η0 = 4/5, a = 9/10, b = 4/5, tan ∆= 1/100, one obtains p = 654464/1478945, m2
∗=
129574081296/369773223625 and errors approximately 0.26321655725 and 0.21585986870. These are
global small-horizon values, not a claim about the one-percent threshold or unrestricted collective
readers in a different physical parent.
7
Local-effect certificates for larger copy budgets
Retaining local partial-transpose invariance gives exact all-angle comparison bounds without enumer-
ating a continuum of policy trees. The relaxation is a lower-bound device, not a physically available
collective reader.
7.1
Which effects every admitted reader produces
Rotate the original equatorial plane to the real X/Z Bloch plane. This is a mathematical common
basis choice, not a new source preparation or accessible reference. A local outcome effect is then a
real symmetric 2 × 2 matrix. For a fixed adaptive history, its joint probability on independent copies
is computed by a tensor product of those effects. Although the direction on a later copy depends
on earlier outcomes, each complete-history effect remains such a product. The effect E for terminal
decision plus is the sum over its histories and ready-coin branches, so
0 ⪯E ⪯I,
EΓA = E
for every subset A of copies.
Here ΓA transposes the local tensor factors in A.
The assertion requires classical feedback and
destructively measured separate copies, as in the admitted model. It does not cover a coherent
15


## Source page 16

returning controller, retained quantum memory that jointly interacts with later specimens, or an
arbitrary collective measurement.
Condition on an entire sign-blind erasure pattern. Its probability is independent of the fixed source
label and measurement directions. Granting that pattern in advance is a permissible lower-bound
relaxation. With n nonnull copies, all resulting terminal effects still have the displayed properties. Null
histories may guide the controller but do not reveal the source. No click postselection is performed in
deployment: final bounds average over all patterns, including the all-null record.
Let Ω± be the two comparison target mixtures on these n copies, and put ∆n = Ω+ −Ω−. In both
applications below they are real mixtures of fixed-source tensor powers and are permutation invariant.
A formal permutation average of E preserves positivity, partial-transpose invariance and Tr(∆nE); no
claim that every such averaged effect is locally attainable is needed. Global sign reversal is conjugation
by Y ⊗n, under which ∆n changes sign. Replacing E by
1
2{E + I −Y ⊗nEY ⊗n}
again preserves the relevant constraints and objective. Thus the actual reader’s correlation is bounded
by a relaxation with the following exact parameterization.
Lemma 7.1 (Odd symmetric real Pauli representation). Let Bab be the sum of all distinct tensor
strings with a copies of X, b copies of Z and n−a−b copies of I. Every permutation- and local-transpose-
invariant terminal effect, after the sign symmetrization above, has form
E = 1
2I +
∑︂
a+b odd
yabBab,
|yab| ≤1
2.
Only pairs a, b ≥0, a + b ≤n occur. Its positivity is equivalent to positivity of its ordinary qubit Schur
blocks and their complements.
Proof. A Pauli string containing Y changes sign under transpose on that factor. Invariance under every
local transpose therefore eliminates all such coefficients. Permutation invariance makes the remaining
coefficient depend only on the X and Z counts. Sign symmetrization removes every even-degree
nonidentity string and fixes the identity coefficient to 1/2. Orthogonality of individual Pauli strings
gives yab = 2−n Tr(EP) for any one string P of those counts. Because P is traceless with equally many
+1 and −1 eigenvalues and 0 ⪯E ⪯I, its absolute trace pairing is at most 2n−1. This proves the
coefficient bound. The Schur transformation is unitary; positivity is therefore equivalent to positivity
in all irreducible blocks.
Permutation and partial-transpose invariant discrimination relaxations are established methods[3].
The present contribution is their explicit grouped-target/fixed-nuisance application and the rational
certificate interface below. The representation is a calculation of an operator relaxation, not a quantum
memory resource construction.
7.2
Exact block generation without an exponential tensor matrix
Use the generating identity
(I + xX + zZ)⊗n =
∑︂
a,b
xazbBab.
In the Schur sector K ∈{0, . . . , ⌊n/2⌋}, put s = n −2K. The block is
(1 −x2 −z2)K Syms
(︄
1 + z
x
x
1 −z
)︄
.
16


## Source page 17

This follows from the simultaneous determinant/symmetric-power qubit representation; the normalized
Dicke basis is essential. In row k, column l, the polynomial before multiplication by the determinant
factor is
√︄(︁s
k
)︁
(︁s
l
)︁
∑︂
q
(︄
k
q
)︄(︄
s −k
l−q
)︄
xk+l−2q(1 + z)s−k−l+q(1 −z)q,
where max(0, k + l−s) ≤q ≤min(k, l). Consequently every block basis entry BK
ab is an integer times
the single rational square root shown. The standard-library implementation expands the polynomial
exactly with integer coefficients and encloses its normalization with directed rational square-root
bounds. Blocks have size at most n + 1; the number of coefficient variables grows quadratically.
For a given comparison ensemble, write gab = Tr(∆nBab). The relaxed correlation optimum has
primal form
sup
y
∑︂
a+b odd
gabyab,
−1
2I ⪯
∑︂
ab
yabBK
ab ⪯1
2I
for all K.
The objective equals Tr(∆nE) because Tr ∆n = 0. Equal-prior average error is (1 −Tr(∆nE))/2. The
coefficient restriction from Lemma 7.1 is valid for all actual effects. It can safely be used to bound a
certificate residual even when an SDP proposal omitted it.
In fact the lower-bound comparison can grant arbitrary separate-copy POVMs with classical
feedback on these real auxiliary states. Replacing every local effect F by (F + F T)/2 preserves its
conditional probability on every real source state, preserves positivity and preserves the POVM sum.
The resulting real local effects again produce transpose-invariant terminal effects. Thus the relaxation
is not exploiting the limitation to two projective outcomes. This is an auxiliary comparison only: it
introduces no new physical detector law, and coherent memory passed between specimens remains
excluded.
7.3
Residual-corrected dual certificate
Theorem 7.2 (An exactly checkable correlation upper bound). For every Schur block choose arbitrary
positive semidefinite matrices AK, CK. Put
rab = gab −
∑︂
K
Tr[(AK −CK)BK
ab].
Every admitted local terminal effect satisfies
Tr(∆nE) ≤Un,
Un = 1
2
∑︂
K
Tr(AK + CK) + 1
2
∑︂
ab
|rab|.
No exact dual feasibility, solver status or eigenvector accuracy is assumed.
Proof. Write FK = ∑︁yabBK
ab. Pairing FK ⪯I/2 with AK ⪰0 and −FK ⪯I/2 with CK ⪰0 gives
∑︁
K Tr[(AK −CK)FK] ≤1
2
∑︁
K Tr(AK + CK). The difference from the required objective is ∑︁rabyab.
The coefficient bound |yab| ≤1/2 proves the result.
The shipped certificate encodes each dual matrix as LLT for an explicit rational factor L. Its
positivity is therefore exact. The dual cost is rational. The coefficient residuals use outward rational
intervals for every square root and, in the robust application, for the exact objective coefficients. An
upper bound on each absolute residual completes the proof. Floating SDP solutions only propose
factors, whose entries are rounded to rationals; no numerical feasibility claim survives without this
verification. Even poor or corrupted factors remain harmless: their residual is charged and may simply
make the bound too weak to exclude a horizon.
17


## Source page 18

7.4
Nominal one-percent interval: [13,14]
For the shared nominal parent, rotate the source axes to X and Z and use the uniform four-label prior.
For odd a + b, exact Pauli orthogonality gives
gab =
⎧
⎪
⎪
⎨
⎪
⎪
⎩
(︁n
a
)︁va,
b = 0,
(︁n
b
)︁vb,
a = 0,
0,
a, b > 0.
Define the auxiliary shortened states ρ(v)
a± = (I ± vσa)/2 for a = X, Z. Measuring them sharply
reproduces the nominal visibility-dependent classical kernel; this is a lower-bound representation
and does not identify the actual retained preparation or detector channel. The positive mixture is
Ω(n)
+ = 1
2(ρ(v)⊗n
X+
+ ρ(v)⊗n
Z+
), and the hidden axis stays fixed. It is not a power of its one-copy average.
For a horizon B, the all-null error is 1/2. All other erasure patterns are bounded by their n-click
certificates en ≥max(0, (1 −Un)/2). Hence
eB ≥
B
∑︂
n=0
(︄
B
n
)︄
ηn(1 −η)B−n max(0, (1 −Un)/2).
The maximum with zero is harmless and permits arbitrary weak proposals. The delivered rational
Gram certificates for n = 1, . . . , 12 at η = 4/5, v = 9/10 prove the exact lower bound reproduced by
research11/bounds/ppt_certificate.py in the reader supplement and recorded in its generated
research11/bounds/results.json; its decimal display is
e12 ≥L12 >
603
50000 = 0.01206 > 0.01,
L12 ≃0.012064933110195356.
Here L12 denotes the full exact rational value in that JSON; its decimal is only a display. Thus twelve or
fewer copies fail for both local protocol classes. The specified fourteen-copy bisector attainment remains
valid, giving [13, 14] for each class. Neither exact threshold nor a one-percent adaptive/nonadaptive
separation follows yet. The exploratory SDP value at thirteen does not itself exclude thirteen and is
not an attaining physical protocol.
7.5
Original asymmetric robust interval: [16,17]
Retain the original uncertainty set and its fixed nuisance throughout each experiment.
Use the
convex-hull valid comparison prior with
u = (a cos ∆, −a sin ∆),
w = (−b sin ∆, b cos ∆),
p =
b2 + ab sin 2∆
a2 + b2 + 2ab sin 2∆.
It selects positive vector u with probability p and w otherwise, then samples a fair source sign. The
nuisance offset is correlated with the sampled axis in this mathematical prior but is not redrawn
on later copies. Every prior point is admitted by the robust supremum. Therefore its average error
lower-bounds that supremum for any one fixed policy.
After a common real-plane rotation, write these vectors as
ru = (ac, −as),
rw = (bc, bs),
c =
1 −t
√︁
2(1 + t2),
s =
1 + t
√︁
2(1 + t2),
t = tan ∆.
Their inner product remains −ab sin 2∆. The exact objective is
gij = 2
(︄
n
i
)︄(︄
n −i
j
)︄
{p(ru,x)i(ru,z)j + (1 −p)(rw,x)i(rw,z)j},
i + j odd.
18


## Source page 19

For rational a, b, t, these coefficients are rational multiples of
√︁
2(1 + t2). The same exact dual verifier
therefore applies with interval objective coefficients; no new physical noise law is introduced.
At a = 9/10, b = 4/5, t = 1/100, η0 = 4/5, the fifteen-copy certificate proves
erobust
15
≥Lrobust
15
>
129
12500 = 0.01032 > 0.01,
Lrobust
15
≃0.010321278963318586.
Again the full exact rational is reproduced by research11/bounds/robust_ppt_certificate.py in
its generated research11/bounds/robust_results.json; the decimal is only a display. The original
seventeen-copy robust frozen reader supplies the upper endpoint. Thus both global robust thresholds
lie in [16, 17]. This does not determine whether sixteen is attainable, whether feedback helps there, or
whether a stronger nonadaptive schedule already suffices. All source/controller, preparation, phase,
erasure and archive conditions of the original robust task remain in force.
7.6
Verification and practical limits
The two delivered research11/bounds/ entry points verify the full nominal and robust certificates,
respectively. An additional independent rational tensor-basis check verifies the normalized symmetric-
power identity on 420 small-sector entries; its source and output accompany the supplement. These
finite identity checks support implementation inspection, while the displayed representation and residual-
corrected dual proofs supply the universal argument. Solver messages such as optimal_inaccurate
are retained as proposal metadata; they are not proofs. The efficient exact core uses Python’s standard
library. Optional proposal generation requires NumPy, CVXPY and an SDP solver.
The computational improvement is material: a polynomial-size local-effect relaxation gives repro-
ducible all-angle bounds without enumerating angular grid policies or exponential outcome trees. It
does not establish that this relaxation is tight or that an SDP optimizer can be implemented as a
reader. Its physical role is a comparison certificate. No Born-selection, consciousness, trine-resource or
unique-source conclusion follows.
8
Frozen-angle randomization and preparation convexification
8.1
A common least-favourable comparison for every horizon
For general positive gain floors a, b ≤1, efficiency floor η0 > 0 and 0 ≤∆< π/4, let
u = (a cos ∆, −a sin ∆),
v = (−b sin ∆, b cos ∆),
c = u · v = −ab sin 2∆.
The admitted hard comparison fixes X at its worst positive offset and Y at its worst negative offset,
with gain floors and efficiency η0. A mathematical comparison prior may correlate its fixed nuisance
with the fixed source axis; it is a lower-bound device for the supremum over source/nuisance pairs, not
a new physical calibration law. Put
p =
b2 −c
a2 + b2 −2c,
z = pu + (1 −p)v,
m = ∥z∥=
ab cos 2∆
√
a2 + b2 + 2ab sin 2∆.
Then z = mnθ∗, where
tan θ∗= a cos ∆+ b sin ∆
b cos ∆+ a sin ∆.
The direction θ∗lies in the common-positive interval I = [∆, π/2 −∆].
19


## Source page 20

Let qn(β) be the error of majority with a fair tie after n independent signs of positive bias β,
including q0 = 1/2. Define the full deadline risk, with all erasures counted, by
QB(η, β) =
B
∑︂
n=0
(︄
B
n
)︄
ηn(1 −η)B−nqn(β).
For k ≥0,
q′
2k+1(β) = −(2k + 1)
(︁2k
k
)︁
22k+1
(1 −β2)k,
q2k = q2k−1 (k ≥1).
Consequently QB(η, β) is decreasing and convex on β ∈[0, 1]. Its second derivative is nonnegative
term by term; no numerical curvature test is used to establish the statement.
Theorem 8.1 (All-horizon random-frozen-angle optimum and spread penalty). Before a block, choose
one random nominal angle Θ ∈I, independently of the hidden source and nuisance. Retain the seed,
repeat that angle for all B trials, and allow any randomized terminal decoder using the full retained
record. The exact robust minimax error in this class is QB(η0, m), attained by the deterministic angle
θ∗and fair-tie majority. Every such randomized reader has robust worst error at least
QB(η0, m) + m[−∂βQB(η0, m)]E[1 −cos(Θ −θ∗)]
≥QB(η0, m) + 2m[−∂βQB(η0, m)]
π2
E[(Θ −θ∗)2].
This is not an optimum over varying-angle schedules, adaptive control, angles outside I, or collective
quantum access.
Proof. Choose the fair sign and axis probabilities p, 1−p of the fixed hard comparison above. Conditional
on a seed angle θ, its two positive biases are βX = a cos(θ+∆) and βY = b sin(θ−∆), both nonnegative.
On any retained word, each axis component’s positive/negative sign likelihood difference has the sign
of the nonnull signed count. Therefore their positive mixture has the same sign. Majority with a fair
tie is Bayes-optimal even for the axis mixture and even if every ordered sign/null record is accessible.
Its conditional Bayes risk is
f(θ) = pQB(η0, βX) + (1 −p)QB(η0, βY ).
Any other decoder has at least this comparison-prior average error. Convexity in the bias gives
f(θ) ≥QB(η0, pβX + (1 −p)βY ) = QB(η0, m cos(θ −θ∗)).
Because QB is decreasing and convex, its tangent at m lower-bounds the last expression by QB(η0, m)+
m[−Q′
B(η0, m)](1 −cos(θ −θ∗)). Average over the retained seed. The robust supremum is at least
this fixed comparison average. Finally 1 −cos x ≥2x2/π2 for |x| ≤π, by concavity of sine on [0, π/2].
The interval I ensures this range. The preceding frozen reader attains QB(η0, m) uniformly over the
original uncertainty set, proving the equality as well as the quantitative penalties.
For the original example,
p = 654464
1478945,
m2 = 129574081296
369773223625.
Exact quadratic-field arithmetic gives
20


## Source page 21

Trials
Robust random-frozen optimum
One-percent status
15
.0124288300109 . . .
fails
16
.0102368487113 . . .
fails
17
.00844219845891 . . .
passes
Hence seventeen is the exact minimum in the enlarged random-frozen class. A phase lottery is not
a route to improving that threshold. Any improvement must use another interface, such as varying
settings within a block, feedback, or additional information. This does not prove that a varying
nonadaptive schedule needs seventeen, nor that adaptation is advantageous at one percent.
8.2
When convexification makes the frozen reader globally optimal
Theorem 8.2 (An all-horizon convex-source benchmark). Let S be a nonempty compact subset of
the equatorial Bloch disk for the fixed antipodal source family ρs,r = (I + sr · σ)/2. Suppose its closest
convex-hull point z is itself physically admissible: z ∈S. With independent copies conditional on fixed
(s, r), independent sign-blind erasures η ≥η0 and a fixed deadline, both full continuous local adaptive
and randomized nonadaptive minimax errors equal QB(η0, ∥z∥) for every B. One frozen direction z/∥z∥
attains it when z ̸= 0; the z = 0 value is 1/2.
Proof. The supporting-plane inequality r · z ≥∥z∥2 for every r ∈S makes the frozen direction’s sign
bias at least ∥z∥. Majority risk is decreasing in positive bias and efficiency, giving the upper bound.
For the lower bound, the actual pair ρ+,z, ρ−,z is admissible. Those states commute and are diagonal
in the proposed measurement basis. Their independent tensor powers, including orthogonal erasure
flags at η0, are a classical ternary likelihood problem. The likelihood ratio is monotone in the signed
count, so even an arbitrary joint auxiliary-state measurement cannot beat fair-tie majority. This gives
the same lower bound for every local protocol and its randomization. The zero vector has no sign
information and gives 1/2.
The assumption z ∈S is essential to this proof. In the original asymmetric reader, the positive-target
set consists of two separated near-axis regions and does not contain the diagonal point z. Replacing it
by its physical convex hull would admit a new independent-copy mixed source. That is a different,
explicitly enlarged preparation class, not a permitted replacement of the original fixed hidden axis. It
provides an exact benchmark and identifies the preparation distinction that a more advanced reader
would have to exploit.
8.3
A retained-record witness of the preparation distinction
For the original hard support u, v, let ρs,z = pρs,u + (1 −p)ρs,v. The actual fixed-axis mixture and
independent copies of that averaged one-copy state differ at two copies:
Ω(2)
s
= pρ⊗2
s,u + (1 −p)ρ⊗2
s,v,
Ω(2)
s
−ρ⊗2
s,z = p(1 −p)
4
[(u −v) · σ] ⊗[(u −v) · σ].
Put V = p(1 −p)∥u −v∥2. The trace distance is exactly V/2. Since z · (u −v) = 0, measuring each
copy along n⊥= (u −v)/∥u −v∥gives sign-product expectation V in the fixed-axis mixture and zero in
the independent averaged state. Coding a retained null as zero changes the difference to η2V under the
same independent sign-blind erasure law. No click postselection is used. For the original parameters,
V = 134898283296
369773223625 ≃.364813552408,
η2
0V ≃.233480673541.
21


## Source page 22

This is a standard covariance identity given an explicit operational readout, not a new physical
law or a solution of the sign target itself. It makes the distinction between the two preparation
laws experimentally meaningful under trusted preparation and the specified access contract. The
comparison-prior stock is not asserted to be the actual unknown source in every deployment.
9
Compact, exactly certified adaptive readers at thirteen and four-
teen copies
The four-copy trees establish a continuous-angle feedback separation, but their exhaustive retained-
history representation was not a scalable synthesis method for the one-percent task. We develop a
finite-horizon alpha-vector construction and a separate exact policy verifier. The completed result is a
compact feasible fourteen-copy reader and a checked thirteen-copy candidate above the target; it does
not settle that endpoint.
9.1
A feasible policy-graph interface
Use the original four fixed labels h ∈{X+, X−, Y +, Y −}, independent copies conditional on that one
label, and the shared calibrated η = 4/5, v = 9/10 detector. An action a has an exact rational unit
direction na = (ca, sa). In outcome order (+, −, 0) its conditional kernels are
Ka,h =
(︃η
2(1 + vxa,h), η
2(1 −vxa,h), 1 −η
)︃
,
xa,h ∈(ca, −ca, sa, −sa).
A level-t node stores one action and three child indices at level t −1. Level zero stores a sign decision.
Thus the controller follows a finite outcome-labelled directed acyclic graph; it needs no access to the
source label, no continuously updated posterior and no inaccessible calibration parameter. Every null
follows its own declared child and consumes a trial.
For node i define its four-component error vector αt,i. The exact recursion is
α0,i(h) = 1{di ̸= R(h)},
αt,i(h) =
∑︂
o∈{+,−,0}
Kai,h(o)αt−1,ji,o(h).
For a hidden-label prior b, its expected error is b · α. The prior is used offline for design, not assumed
as a distribution in the final worst-label certificate.
Proposition 9.1 (A rational feasible-reader certificate). Every finite graph of the above type defines
an admitted adaptive reader. Bottom-up rational evaluation gives its exact four source-label errors. For
the full continuous equatorial class, averaging the graph over axis exchange and global sign reversal
gives equal error on every label, equal to 1
4
∑︁
h αB,root(h). Hence that mean is an attainable minimax
upper bound. No belief-point coverage or policy-search optimality assumption is required.
Proof. Condition on a fixed source label. Independence of each fresh specimen and ready detector
stock makes the three terms in the recursion the exhaustive conditional cases for the next outcome.
Induction gives every node’s true error probability, including nulls and the forced terminal decision.
Axis exchange acts by swapping (ca, sa) at every command. Global sign reversal acts by reversing
virtual signs and the final decision. Both operations preserve the admitted common-noise law and
continuous action class; their four compositions act transitively on the labels. Two root fair bits,
retained for the controller/decoder, therefore equalize the four errors to their mean. The root bits are
independent of the unavailable source label. No quantum residual-channel equivalence is claimed.
22


## Source page 23

The base menu has thirteen rational directions; swapped commands are also admitted, whether or
not they coincide with a base-menu entry. This is an attaining construction within continuous access,
not an equality between a finite grid optimum and the continuous optimum.
9.2
Point-based synthesis and exact separation from its numerics
The offline construction specializes point-based POMDP value iteration [8] to a static four-label
terminal-cost problem. For a collection of previous feasible policy vectors and a design belief b, choose
separately for each action/outcome a child minimizing b · (Ka,o ⊙α), sum its four conditional errors,
then select an action of least design cost. The resulting object is an actual policy graph, even if
floating-point comparisons select a suboptimal child. Duplicate action/child triples are merged, and
unreachable nodes are removed when freezing a nominated root.
Beliefs were sampled both from Dirichlet distributions and actual random measurement trajectories,
with the four source symmetries included. The pilot used 21461 distinct design beliefs and thirteen
rational actions. Their half-angle parameters were rounded offline to rational numbers with denominator
10000 before forming exact unit-circle coordinates. Numerical candidate generation never supplies the
final risk certificate. Nor do we import the literature’s discounted infinite-horizon coverage bound into
this finite-horizon reader. The guarantee here is feasibility and exact evaluation.
The independent standard-library verifier avoids relying on large exact fractions for its primary
pass. At scale S = 280 it propagates integer lower and upper error intervals. For common denominator
D and nonnegative kernel numerators No summing to D, it uses
L =
⌊︃∑︁
o NoLo
D
⌋︃
,
U =
⌈︃∑︁
o NoUo
D
⌉︃
.
Every operation rounds outward. Induction gives interval width at most 2t/S at level t; terminal values
are exact. The root’s group mean is then averaged as a rational number. An additional all-Fraction
evaluator reproduces the label costs, and ordered-word enumeration checks small subtrees independently.
Malformed directions and child indices are rejected.
9.3
Completed operating points and remaining one-percent gap
Copies
Internal graph nodes
Certified attainable error
One percent
13
600
0.01102649347305383 . . .
fails
14
697
0.008749337644325401 . . .
passes
The displayed digits summarize exact rational intervals reproduced by research11/nominal/verify_
nominal.py from the supplied research11/nominal/policy_14.json and policy_13.json. Paths
are relative to the reader supplement; no floating comparison decides pass/fail. The fourteen-copy
protocol improves the specified fixed-bisector error 0.00886634707138012 . . . at the same copy budget.
Its modest error improvement does not change the attained one-percent budget. The main useful
addition is a compact, independently evaluable reader and reusable primal certificate interface for
larger-horizon searches.
An additional frozen thirteen-copy child-pool candidate in research12/nominal/policy_13
_pool.json has certified symmetrized error 0.011009824045220384 . . ., evaluated by the supplied
outward-integer recursion. It also fails one percent. This supporting refinement does not change the
fourteen-copy attainment or the unresolved threshold.
Neither the unsuccessful thirteen-copy candidate nor an optimizer’s failure proves a universal
thirteen-copy obstruction. A separate lower-bound theorem is needed to constrain all continuous
23


## Source page 24

readers. We make no claim of global optimality over either the thirteen-action construction class or
the full continuous class, and no adaptive/nonadaptive separation at one percent.
A separate numerical search examined every two-setting count allocation at budgets twelve through
fourteen, optimizing its two angles. The tested solutions collapsed near the fixed bisector and did
not improve attainment. This is exploratory evidence only; it does not certify that every two-setting
schedule is worse, let alone every continuous nonadaptive protocol.
9.4
Explicit controller and retained-record resources
The fourteen-copy graph has 697 internal nodes and two terminal decisions. A global node pointer
therefore needs ten bits; two independent root symmetry bits are additional ready/controller stock.
A direct ROM upper account uses four bits per base action and three ten-bit child pointers per
internal node, plus two terminal decision bits: at most 23700 bits, excluding phase-command constants,
decoder/control arithmetic, physical clock, references and actuator state. This is an attaining upper
account, not a controller minimum. There are at most 26 physical phase commands after the root axis
transform. A conservative archive uses five command-ID bits and two outcome bits per trial, plus
root-seed and timing metadata. All histories remain retained even though feedback uses only the node
pointer.
Exact mathematical rational commands do not assert infinite physical phase precision. A deployment
must separately bound implementation error, preserve preparation/detector stability, charge phase
controls and references, and validate the actual frozen reader if the nominal model is untrusted. No
hardware, energy, clock-speed or thermodynamic advantage follows from the ROM count or the error
improvement alone. The separate calibration route can consume this finite policy as a declared object
without identifying its entire residual quantum instrument.
10
Physical resources and remaining boundaries
The one-percent minima remain [13, 14] nominally and [16, 17] under the original fixed-unknown
asymmetric parent. Failed thirteen- and sixteen-copy candidate searches are not lower bounds. A
separate finite-policy polynomial certificate and continuous lower dynamic programme are retained
in the technical supplement; their conservative costs do not settle these endpoints. At the selected
four-copy tolerances, the proved copy separation is exact; it must not be reported as a one-percent
separation. For repeated per-copy phase pulses a timing model can be T = B(τ + |θ|/Ωp); a separately
assumed once-set held actuator instead gives T = Bτ + |θ|/Ωs. The two physical parents cannot
exchange their costs. Adaptive switching and feedback waits require their own path-dependent model.
Append-only archives are distinct from causal controller state; source stock, ready randomness, trusted
calibration, references, precision and actual latency remain charged. No energy, thermodynamic or
hardware optimum follows from copy count. Calibration controls deployment only with a justified
stability contract; terminal effects do not identify a complete residual quantum instrument. The source–
readout distinction established here is operational and relative to admitted interventions. Unrestricted
operational surrogates, readable preparation records, collective access or changed stock can alter the
task; these results do not select a unique ontology or constitute a consciousness criterion.
A
Adaptive phase readers: exact scope, optimum and genuine feed-
back gain
All risk values in this appendix are restricted to the X/Y measurement menu. The local ead
B and
ena
B notation therefore refers to that restricted class, rather than the continuous-menu values in the
24


## Source page 25

main text. A difference between these values is a change of admitted access. The fixed-schedule
analysis optimized one fixed X/Y allocation and its terminal decoder. We enlarge the admitted class
to nonanticipating sequential choices between those same two readers, allowing classical randomization.
This changes two resources: a schedule may already be randomized before any observation, and feedback
may select later settings using observed records. We separate these effects. The ideal gain below
comes entirely from schedule randomization; the specified-noise gain survives comparison with every
randomized nonadaptive schedule and therefore is a genuine feedback advantage.
A.1
Declared operational experiment and symmetry
The source is the fixed-schedule preparation family ρX± = (I ± X)/2, ρY ± = (I ± Y )/2 with the
nominated binary sign target. A label h is held fixed and an admitted independent stock ρ⊗B
h
supplies
one copy per tick. The inaccessible preparation controller retains h; it is not supplied to the decoder.
Every trial chooses a ∈{X, Y } on a fresh copy, with the same terminal effects
E±|a = η
2(I ± vσa),
E0|a = (1 −η)I.
The phase rotation, beam splitter, calibrated detector, timing and unread baths retain the fixed-schedule
physical contract. The experiment always outputs a sign at the fixed deadline B, includes all nulls, and
neither postselects clicks nor claims a full retained-quantum-channel equivalence. A policy may use
earlier accessible records and independent ready coins. No collective POVM, another basis, returning
environment or readable preparation record is admitted. Stopping early and retaining an irrevocable
decision can be represented by ignoring subsequent records, but no saved-copy or random-stopping
resource optimum is asserted.
For equal axis efficiencies and visibilities, the experiment is invariant under the four-element group
generated by exchanging X/Y and reversing all signs. Sign reversal also reverses the target and final
decision. This group acts transitively on the four source labels. Consequently the uniform source prior
is least favourable for the complete randomized policy class: every minimax risk is at least its optimal
uniform-prior Bayes risk, while averaging a Bayes optimal policy over the group makes each of its
four errors equal to that Bayes risk. The group transformation is selected before the experiment and
translated into actual settings, record signs and terminal decisions; it is not knowledge of the hidden
source. Two independent fair root-control bits suffice for this group choice; a terminal posterior tie
may additionally consume a fresh fair decision bit. This standard symmetrization argument applies
both to adaptive policies and to the smaller randomized-nonadaptive class.
A.2
An all-horizon ideal theorem
Theorem A.1 (Ideal adaptive minimax value and its source of improvement). With η = v = 1, the
optimal uniform-prior Bayes risk and randomized adaptive minimax risk are equal, and
ead
0 = 1
2,
ead
1 = 1
4,
ead
B = 2−B
(B ≥2).
For every B ≥2 a randomized nonadaptive schedule attains the same value: choose equally between the
allocations (1, B −1) and (B −1, 1) and use uniform-prior Bayes terminal decisions, with symmetric
tie handling. Therefore ideal feedback supplies no further gain over randomized schedules.
Proof. Use unnormalized nonnegative hypothesis weights; terminal Bayes loss is min(wX++wY +, wX−+
wY −). Every arbitrary adaptive tree is covered by choosing either X or Y at its root, summing the
optimum losses of its two outcome branches, and recursing. Randomizing an action cannot improve a
minimum of these two conditional losses.
25


## Source page 26

The nontrivial reachable states, up to axis and sign symmetries, have three forms. Opposite-target
two-state weights a, b on different axes have remaining-t loss min(a, b)/2t: the next two choices give
min(a, b/2) or min(a/2, b) for one step, and induction gives the same halving relation for every t. A pair
of equal weights b, b on opposite signs of one axis has loss b at t = 0 and zero for t ≥1, by measuring
that axis. Finally consider A(a, b) = (a, 0, b, b) with a ≥2b. Its loss is b at t = 0, 1, and b/2t−1 for
t ≥2. Indeed, measuring X gives branches A(a, b/2) and the equal Y pair (b/2, b/2); measuring Y
gives one single-target branch and the opposite-target pair (a/2, b). The preceding formulas prove the
claimed values by induction. This exhausts the successors of these types, so it is a lower bound for
every decision tree as well as an attainable recursion.
Start with weights (1, 1, 1, 1). Either first reader gives two symmetric A(1, 1/2) branches. The
formulas just proved, divided by total prior mass four, give 1/4 for B = 1, 2 and 2−B for B ≥3. The
symmetry argument then supplies the minimax equality.
For a fixed allocation with positive counts, the only opposite-target ambiguous corners have
likelihoods a = 2−nY and b = 2−nX. Their uniform-prior Bayes contribution is min(a, b)/2. At
(1, B −1) this is 2−B. Axis/sign symmetrization equalizes the four risks and retains a nonadaptive
schedule, proving attainment in the smaller class.
Thus a one-percent target needs seven ideal fresh copies in the enlarged randomized class, rather
than eight in the fixed-schedule single-allocation class (and twelve for balanced fixed schedules). At
B = 8, the enlarged optimum is 1/256, rather than 1/130. This gain is explicitly attributed to admitted
schedule randomization, not feedback. The target is still not perfectly identifiable from any finite
record.
There is also a horizon-consistent feedback realization useful for erasures: choose an initial axis
fairly, read it until its first opposing sign, then read the other axis on the next click. That other-axis
result determines the sign. If all available clicks agree, return their common sign; if the first opposing
sign is the last click, use a fair guess; with no clicks also guess fairly. Conditional on N ≥2 clicks, an
initially aligned reader makes no error. An initially cross-axis reader errs only on an all-equal sequence
or a first flip at the last click, each of probability 21−N and error 1/2. Averaging the initial axis gives
2−N. For N = 1 it gives 1/4 and for N = 0, 1/2. The erasure extension is developed separately,
preserving its additional independence and access premises.
A.3
Exact noisy Bellman certificates
For rational calibrated η, v, put every outcome likelihood over a common positive denominator D. Let
ka,o,h be its nonnegative integer numerator. For unnormalized integer weights w, define
V0(w) = min(wX+ + wY +, wX−+ wY −),
Vt(w) = min
a=X,Y
1
D
∑︂
o∈{+,−,0}
Vt−1(w ⊙ka,o).
Homogeneity permits dividing w by its integer gcd and storing one rational value per resulting state.
The minimum covers every adaptive action, not only the actions chosen by the exported policy. The
uniform Bayes lower bound is VB(1, 1, 1, 1)/4. A policy selecting a minimizing action and a terminal
Bayes sign attains it; group averaging supplies the matching per-label minimax upper bound. This
proves the recursion for the full declared policy class, not only a numerical ansatz or one nominated
prior policy.
The exported JSON certificate stores all recursively required normalized states, both action values,
the selected action and terminal losses. A checker verifies every Bellman equality bottom-up using exact
fractions, then checks the root value. The producer separately evaluates the policy’s four individual
errors. There is no floating convergence criterion. Nominally impossible histories have a declared default
26


## Source page 27

X action and fair terminal guess, so the policy remains defined before an actual-device perturbation is
applied.
For η = 4/5, v = 9/10, the common denominator is D = 25 and the X-reader numerators for +, −, 0
are respectively (19, 1, 10, 10), (1, 19, 10, 10) and (5, 5, 5, 5); exchange axes for Y. The following exact
comparisons use identical copy budgets, reader effects, null retention and independent stock. The
nonadaptive comparator includes all fixed counts and arbitrary root schedule randomization, not just
the fixed-schedule single-schedule minimax design.
B
Adaptive minimax
Randomized nonadaptive minimax
Best counts
4
25709/156250
27167/156250
(1, 3), (3, 1)
8
4098018401/61035156250
38954017/488281250
(3, 5), (5, 3)
At eight copies these are approximately 0.06714193348 and 0.07977782682. Their strict difference is a
genuine feedback gain. The fixed single-schedule value 0.08270910464 is a third, narrower comparison
and is not used to exaggerate that gain. The specified-noise model also supplies a copy threshold. Its
adaptive errors at budgets eighteen and nineteen are respectively
64382397399725181469211
5820766091346740722656250 >
1
100,
136397472235992257022563
14551915228366851806640625 <
1
100.
The best randomized-nonadaptive errors at budgets twenty and twenty-one are respectively
107414411331608425103
9313225746154785156250 >
1
100,
230516488566312459173
23283064365386962890625 <
1
100.
The latter minimizing counts are (9, 11) at twenty and (9, 12) at twenty-one, with their axis swaps.
Extra observations can always be ignored, so risks are nonincreasing in budget. These adjacent certified
comparisons prove that the one-percent threshold is exactly nineteen adaptive copies versus twenty-one
randomized-nonadaptive copies in this calibrated noise model. They do not inherit the separate
ideal-erasure robustness contract.
The source-copy savings are not automatically total apparatus savings: the adaptive reader consumes
additional causal control capability.
To justify the nonadaptive optimum, group symmetry again reduces minimax to uniform-prior Bayes
loss. A randomized mixture of fixed schedules has Bayes loss at least the smallest Bayes loss of one
component. For each count pair, ordered-record exchangeability permits the exact histogram likelihood
calculation. Minimizing its uniform-prior loss over all nX + nY = B counts, then symmetrizing its
minimizing schedule, supplies matching lower and upper bounds for the whole randomized-nonadaptive
class.
B
One reader across unknown erasure and calibration parameters
For already calibrated readers, a generic perturbation allowance is possible. Here an explicit feedback
policy yields an exact minimax law under unknown erasure efficiency, followed by a stronger model-
specific calibration certificate when visibility is imperfect. The two results have different strength:
erasure-only minimax optimality is proved; the visibility-box result certifies one frozen policy without
claiming robust-minimax optimality. Neither depends on an ETH theorem.
B.1
A policy independent of the nuisance parameter
Choose an initial axis A ∈{X, Y } with a fair independent coin. Query that axis until its nonnull signs
include both + and −. Then query the other axis. The first nonnull result on that other axis commits
its sign; further records are retained but ignored by the terminal classifier. If the deadline arrives
27


## Source page 28

before a switch, return the common sign; if there was no click, or a switch without a subsequent click,
return an independent fair guess. Thus a flip at the last successful trial is explicitly an inconclusive
internal state, resolved by a declared decision coin. There is always a terminal decision; nulls are not
postselected away.
Let en be the ideal adaptive minimax error for the X/Y-restricted four-label sign task established
in the preceding appendix, not the continuous-menu optimum:
e0 = 1
2,
e1 = 1
4,
en = 2−n
(n ≥2).
The same value is the optimal uniform-prior Bayes error. The policy just defined attains it simultaneously
at every click horizon. To see attainment, condition on the initial axis. If it is the true axis there is no
error. If it is the other axis, the observed signs are fair. For n ≥2, errors are possible only when all n
signs agree, or the first opposing sign appears at position n. Each event has probability 21−n, with
conditional error 1/2. The fair initial axis gives error 2−n for every source label. The n = 0, 1 cases
give the displayed exceptional values.
Theorem B.1 (Exact unknown-erasure minimax frontier). Fix a deadline of B trials. Visibility is
one. Trial t is independently erased with probability 1 −ηt, regardless of source label, axis and ideal
result, where the deterministic efficiencies satisfy 0 ≤ηt ≤1. For known efficiencies, the minimum
worst-case sign error among all adaptive X/Y policies and terminal decoders is
EB(η1, . . . , ηB) = E[eN],
N =
B
∑︂
t=1
Zt,
Zt ∼Bernoulli(ηt) independently.
One policy, specified above without any knowledge of the efficiencies, attains this value. In particular,
for a common efficiency and B ≥1,
EB(η) = (1 −η/2)B −(1 −η)B
2
−Bη(1 −η)B−1
4
.
(3)
For the robust class of all deterministic vectors ηt ∈[η0, 1], unknown when the policy is fixed, the exact
robust minimax error is EB(η0). This includes a fixed unknown common efficiency.
Proof. For a lower bound use the uniform prior on the four labels and give the controller the entire
independent erasure schedule in advance. Conditional on that schedule, only N informative trials are
available; the ideal uniform-prior Bayes lower bound is eN. Revealing independent schedule information
cannot increase the optimum risk, so every original policy’s worst-case risk is at least E[eN].
The proposed policy depends on the successful signs and its initial coin, not on the erased-trial
locations or the number of future successful trials. Conditional on the independent schedule it attains
eN on every label. This proves the matching upper bound. For common η, the binomial average of
2−N is (1 −η/2)B; correcting its N = 0 and N = 1 terms yields (3).
The sequence eN is nonincreasing. Couple success indicators through independent uniforms as
Zt = 1{Ut ≤ηt} and Z0
t = 1{Ut ≤η0}. Then N ≥N0 pointwise, so the same policy has risk at most
EB(η0). The admitted vector with every efficiency equal to η0 supplies the matching lower bound.
The independence and sign-blindness conditions are consequential. A nuisance depending on hidden
source data, a measured sign before erasure, or the past record is not covered by this theorem merely
because each unconditional click rate exceeds η0. Correlated detector baths and preparation copies
are also outside its parent. The theorem does permit unknown nonstationary deterministic efficiencies
under independent per-trial erasure stock.
28


## Source page 29

For seven trials and every ηt ≥49/50,
E7(49/50) = 897410666811
1014
= 0.00897410666811 < 0.01.
This is a completed one-percent operating region requiring no estimate of the actual efficiency beyond
the declared lower bound. Six ideal trials have optimal error 1/64 > 0.01, so seven is also the exact
robust minimum trial budget in this class. The comparison with the fixed-schedule analysis is explicit:
its fixed deterministic schedule required eight ideal trials; randomization of the setting and the declared
feedback controller expand that access class. The present result does not attribute the whole gain to
feedback alone.
B.2
A fixed-policy certificate for imperfect visibility
Keep the same policy unchanged when the actual, fixed unknown pair is (η, v) in a rational rectangle.
Each trial has the specified effects E±|a = η(I ± vσa)/2, E0 = (1 −η)I and fresh independent noise
stock conditional on this pair. A history’s probability is a product of terms 1 −η, η/2, or η(1 ± v)/2.
Consequently every source-specific error is a polynomial in η, v of separate degree at most B. Axis
randomization and sign covariance make all four risks equal to their mean polynomial pB(η, v). This
avoids optimizing a different policy after learning an inaccessible nuisance parameter.
Proposition B.2 (Exact calibration-box certificate). Affinely map a rational rectangle [a, b] × [c, d] to
[0, 1]2 and write the fixed policy’s risk as ∑︁
ij Aijtisj. At degrees m, n no smaller than its respective
degrees, set
βkl =
∑︂
i≤k, j≤l
Aij
(︁k
i
)︁
(︁m
i
)︁
(︁l
j
)︁
(︁n
j
)︁.
Then maxkl βkl is a rigorous uniform error upper bound on that rectangle. Any evaluated point supplies
a lower bound on the fixed policy’s worst error. Apply the same construction on a finite subdivision and
take the maximum of its upper bounds; if an upper bound equals an attained point value, the fixed-policy
worst error is certified exactly. Every coefficient and comparison is rational.
Proof. The identities ti = ∑︁m
k=i
(︁k
i
)︁(︁m
i
)︁−1(︁m
k
)︁tk(1 −t)m−k and their s counterparts give the stated
coefficients. The product Bernstein basis is nonnegative and sums to one on the unit square, so
the polynomial is a convex combination of its coefficients. Subdivision covers the original rectangle.
Attainment supplies the reverse inequality whenever the two bounds coincide.
This uses an established polynomial-enclosure technique, not a new theory of Bernstein
polynomials[1]. Its addition here is a checked full-policy risk consumer, with the unknown parameters
held fixed throughout the experiment. The implementation uses exact finite-state controller recurrences
rather than accepting a grid scan as a proof. Its stored tuples may retain redundant history beyond a
minimal logical-state quotient.
The delivered certificates have zero enclosure gaps on the following boxes:
B
admitted η
admitted v
worst fixed-policy error
7
[.98, 1]
{1}
0.00897410666811
7
[.99, 1]
[.999, 1]
0.009482646058652287 . . .
8
[.98, 1]
[.999, 1]
0.005800538606142910 . . .
8
[.79, .81]
[.89, .91]
0.11822395802359147 . . .
All entries are exact rational calculations, with full fractions in research8/robust/results.json.
The worst point in each displayed box is its lower-left corner, established by a matching Bernstein
29


## Source page 30

upper bound rather than assumed from monotonicity. The seven-copy visibility box proves a new
robust one-percent guarantee. It is not a claim that this particular policy is minimax for every visibility
box: at lower visibility an adaptive optimizer can choose a substantially different policy within the
same X/Y menu.
For the same seven-copy policy on [.99, 1] × [.999, 1], applying a generic conditional total-variation
allowance to its ideal error gives approximately 0.0790373. The new model-specific upper bound is
about 0.00948265. This improvement is in a certified error allowance under a stronger specified noise
parent, not a measured device gain. Complete retained quantum outputs or arbitrary purifiers are not
certified by these classical terminal-record polynomials.
C
Reproducibility and assistance disclosure
The clean supplement supplies exact policies, continuous cube/Gram certificates and reviewed standard-
library verifiers. The accompanying methods supplement also includes the finite-menu and physical-
resource checks, with exact arithmetic distinguished from floating diagnostic comparisons. Exploratory
generators, historical outputs and audit receipts remain in the separate research-preservation package;
they are not required to verify the supplied mathematical certificates. Numerical solvers propose
objects only; final interval/rational verification establishes the reported bounds. AI assistance was used
for review and computational checking.
References
[1] Mohamed Amin Ben Sassi and Sriram Sankaranarayanan. Bernstein inequalities for constrained
polynomial optimization problems, 2015. URL https://arxiv.org/abs/1509.01156.
[2] David Blackwell. Equivalent comparisons of experiments. Annals of Mathematical Statistics, 24(2):
265–272, 1953. doi: 10.1214/aoms/1177729032. URL https://projecteuclid.org/journals/a
nnals-of-mathematical-statistics/volume-24/issue-2/Equivalent-Comparisons-of-Exp
eriments/10.1214/aoms/1177729032.full.
[3] J. Calsamiglia, J. I. de Vicente, R. Muñoz-Tapia, and E. Bagan. Local discrimination of mixed
states. Physical Review Letters, 105:080504, 2010. doi: 10.1103/PhysRevLett.105.080504. URL
https://arxiv.org/html/1004.5522v1.
[4] Sarah Croke and Stephen M. Barnett. Difficulty of distinguishing product states locally. Physical
Review A, 95:012337, 2017. doi: 10.1103/PhysRevA.95.012337. URL https://journals.aps.org
/pra/pdf/10.1103/PhysRevA.95.012337.
[5] Giacomo Mauro D’Ariano, Massimiliano Federico Sacchi, and Jonas Kahn. Minimax quantum state
discrimination. Physical Review A, 72:032310, 2005. doi: 10.1103/PhysRevA.72.032310. URL
https://arxiv.org/html/quant-ph/0504048v5.
[6] Noam Elron and Yonina C. Eldar. Quantum detection with uncertain states. Physical Review A,
72:032338, 2005. doi: 10.1103/PhysRevA.72.032338. URL https://journals.aps.org/pra/abs
tract/10.1103/PhysRevA.72.032338.
[7] B. L. Higgins, A. C. Doherty, S. D. Bartlett, G. J. Pryde, and H. M. Wiseman. Multiple-copy
state discrimination: Thinking globally, acting locally. Physical Review A, 83:052314, 2011. doi:
10.1103/PhysRevA.83.052314. URL https://arxiv.org/html/1012.3525v2.
30


## Source page 31

[8] Joelle Pineau, Geoff Gordon, and Sebastian Thrun. Point-based value iteration: An anytime
algorithm for pomdps. In Proceedings of the Eighteenth International Joint Conference on Artificial
Intelligence, pages 1025–1030, 2003. URL https://robots.stanford.edu/papers/Pineau03a.p
df.
[9] Jeremy Rodgers. Source–readout non-equivalence: Descent and equivariant reconstruction obstruc-
tions, 2026. URL https://doi.org/10.5281/zenodo.21369967.
31
