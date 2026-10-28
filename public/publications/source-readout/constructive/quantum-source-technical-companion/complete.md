# Technical Companion: Approximation and Accounting for Quantum Sources

Jeremy Rodgers. 27 October 2026.

Technical companion to the associated publication.

This is the complete searchable PDF text transcription. Display geometry is preserved in the HTML vector formula panels. Linear PDF text does not encode fraction, matrix, or script topology. Consult the HTML formula rendering for exact notation.

## Source page 1

Technical Companion: Approximation and Accounting for Quantum
Sources
Jeremy Rodgers
Independent Researcher
www.everythingequation.com
27 October 2026
Abstract
This companion preserves alternate exact encodings, finite-record approximation, output-specific
bath approximation and causal resource accounting. Exact minima must be used only with their
declared tasks. Historical feasible constructions remain valid but are superseded as best known
memory intervals or channel costs where explicitly noted.
This companion develops approximation and resource-accounting results within Shadow Theory’s
pre-existing source–readout programme [10]. The stationary classical completion used for comparison
is established in Rodgers [9].
1
A noisy delayed trine process: exact qutrit realizations
The formerly unresolved positive-noise case admits an exact three-dimensional quantum source in a
nonempty, explicitly certified regime. This improves the two-qubit upper bound. The result preserves
every finite output word, and its cone constraints are certified on an entire parameter interval by exact
rational arithmetic. A separate analytic construction gives a narrower interval without computer-
assisted positivity checks. Both constructions use ordinary quantum instruments; neither derives the
Born rule or an actual-event selection law.
1.1
Process, source class and baseline bounds
For 0 ≤λ ≤1, write r = 1 −λ and
T λ
aa = 1 −r
3
,
T λ
ab = 1 + r/2
3
(a ̸= b).
(1)
All parameters and probabilities are dimensionless. Interleave two independent stationary chains with
this symmetric doubly stochastic transition matrix. The stationary word law is
Pλ(y1 · · · yn) = 1
9
n−2
Y
t=1
T λ
yt,yt+2,
n ≥2,
Pλ(y1) = 1/3.
(2)
The source class is a time-homogeneous quantum instrument on Cd: CP maps Φj with P
j Φj trace
preserving, a stationary density matrix ω, and word probabilities Tr[Φyn · · · Φy1(ω)]. Outputs are
emitted into a retained classical archive. The current symbol need not occupy an orthogonal sector of
the internal memory. Fresh Markov environments are admitted explicitly; the cost d counts internal
memory, not archives, purifying environments, or a hidden history-dependent controller.
1


## Source page 2

The eigenvalues of T λ are 1, −r/2, −r/2. For λ < 1 the past-two/future-two cut matrix
Hab,cd = 1
9T λ
acT λ
bd
(3)
has ordinary rank nine. Classical finite HMMs factor this matrix through their hidden states, so require
at least nine. Explicitly, the pair source has states (a, b), transition (a, b) 7→(b, j) with probability
T λ
aj, uniform stationary weights 1/9, and emitted symbol j at its update; it attains the full law with
nine states. A d-dimensional instrument gives factors Aab = ΦbΦa(ω) and Bcd = Φ∗
cΦ∗
d(I), with
Hab,cd = Tr(AabBcd), in the d2-dimensional real space of Hermitian matrices, so d ≥3.
A four-dimensional construction exists for every λ. With equatorial trine Bloch vectors na, let
ρa = (I + na · σ)/2 and Ej = (I −rnj · σ)/3. Then
Φ(4)
j (X) = Tr1[(Ej ⊗I)X] ⊗ρj
(4)
is CP, has effects Ej ⊗I summing to identity, and fixes I4/4 after summing j. It sends ρa ⊗ρb to
T λ
ajρb ⊗ρj, establishing every word of (2). Thus
3 ≤dmin(λ) ≤4
(0 ≤λ < 1),
(5)
whereas at λ = 1 the law is iid uniform and dmin = 1. The rank argument and quantum-process
framework have established antecedents [5, 8]; no new rank method is claimed.
1.2
A general exact encoded-pair construction
Let x0, x1, x2 ∈R2 have zero sum, and let a diagonal metric g = diag(g1, g2) obey
2
X
μ=1
gμxaμxjμ =
(
1
a = j,
−1/2
a ̸= j.
Let A1, A2, B1, B2, C11, C12, C21, C22 be any basis of traceless Hermitian 3 × 3 matrices.
Use the
contractions
Aa =
X
μ
xaμAμ,
Bb =
X
ν
xbνBν,
Cab =
X
μ,ν
xaμxbνCμν,
Cν,j =
X
η
xjηCνη.
For nonzero positive coefficients u, v, w, define candidate pair states
Sab = I3/3 + uAa + vBb + wCab,
Rj = I3/3 + vBj.
(6)
Specify a Hermiticity-preserving complex-linear map by its values on the Hermitian basis:
Φj(I3/3) = Rj/3,
(7)
Φj(Aμ) = −r
3ugμxjμRj,
(8)
Φj(Bν) = u
3vAν + w
3vCν,j,
(9)
Φj(Cμν) = −ru
3wgμxjμAν −r
3gμxjμCν,j.
(10)
Lemma 1.1 (Exact update and full-law realization). If all Sab are positive and all maps in (10) are
CP, then they form a quantum instrument with stationary state I3/3 and generate (2) exactly. In
particular,
Φj(Sab) = T λ
ajSbj.
(11)
For r > 0 this attains the minimum dimension three.
2


## Source page 3

Proof. All basis matrices except I are traceless, so the candidates have trace one. Expand (10) on (6),
writing qaj = P
μ gμxaμxjμ. The constant and a terms give (1 −rqaj)Rj/3; the b and ab terms give
(1 −rqaj)(uAb + wCbj)/3. This is T λ
ajSbj, proving the update.
Summing the trace of the maps on the basis yields trace preservation: the I/3 traces sum to one,
the A traces vanish because P
j xj = 0, and the B, C images are traceless. Summing Φj(I/3) = Rj/3
gives I/3, proving stationarity. The first output j has probability 1/3 and leaves state Rj. A direct
application gives Φk(Rj) = Sjk/3, so the second output is independent uniform and leaves Sjk. Every
later update is (11); induction proves all finite words. This does not infer temporal independence from
a reset: it uses the explicitly specified CP instrument at every step. Finally (3) gives the matching
dimension-three lower bound.
For positive u, v, w, the nine candidate matrices span the full Hermitian qutrit space. The functions
1, xa1, xa2 form a basis of functions on three labels; their tensor products provide the nine independent
coordinate functions used above. Thus the construction is not silently collapsing an unobserved classical
coordinate or omitting an internal controller.
1.3
An analytic high-noise interval
Choose the ordinary unit trine coordinates xa = (cos(2πa/3), sin(2πa/3)), g1 = g2 = 1, and an
orthonormal traceless Hermitian basis with Tr(FkFl) = δkl, split as the A, B, C basis above. Put
r = ε3,
u = ε2,
v = ε,
w = ε3,
0 < ε ≤1/7.
(12)
The state perturbation has exact squared Frobenius norm ε2 + ε4 + ε6 < 1/9, so every Sab is positive.
For the unnormalized Choi matrix Jj of (10), the depolarizing branch X 7→Tr(X)I/9 has Choi matrix
I9/9. Orthonormality of the input basis makes squared Frobenius norms add, giving
∥Jj −I9/9∥2
F = ε2
3 + ε2
9 (1/3 + ε2) + 2(ε2 + ε4)
9
+ 2(ε4 + ε6)
9
= 16ε2
27 + 5ε4
9 + 2ε6
9 .
(13)
At ε = 1/7, eighty-one times this expression is 117471/117649 < 1; the expression increases with ε ≥0.
The operator norm is at most the Frobenius norm, so Jj is strictly positive and the map is CP by the
Choi criterion [1]. Lemma 1.1 therefore proves
dmin(λ) = 3
for 342/343 ≤λ < 1.
(14)
This is a complete analytic interval proof, independent of the sharper finite certificate below.
1.4
A larger interval certified entirely by rational arithmetic
Take rational trine coordinates
x0 = (1, 0),
x1 = (−1/2, 1/2),
x2 = (−1/2, −1/2),
(g1, g2) = (1, 3).
Let Epq denote matrix units and set
A1 = E01 + E10,
A2 = −iE01 + iE10,
B1 = E02 + E20,
B2 = −iE02 + iE20,
C11 = E12 + E21,
C12 = −iE12 + iE21,
C21 = diag(1, −1, 0),
C22 = diag(1, 1, −2).
3


## Source page 4

These are orthogonal, with squared Frobenius norms two except ∥C22∥2
F = 6. This is a different,
explicitly specified frame from the preceding analytic construction. Put
r = ε3,
u = αε2,
v = βε,
w = γε3,
(α, β, γ) = (3/8, 3/4, 3/4),
0 < ε ≤h := 7/20.
(15)
The maps and states are now degree-three matrix polynomials in ε, with Gaussian rational coefficients.
Here are explicit coefficients, making the positivity certificate reconstructible without fitting
numerical samples. Superscript ∨denotes the Hilbert–Schmidt dual basis (F ∨= F/2, except C∨
22 =
C22/6). Define
Ag,∨
j
=
X
μ
gμxjμA∨
μ,
Cg,∨
j,ν =
X
μ
gμxjμC∨
μν.
In the convention Jj = P
pq Epq ⊗Φj(Epq), write Jj(ε) = P3
l=0 εlJjl. Then
Jj0 = I9/9,
(16)
Jj1 = β
3 I ⊗Bj −1
9α(Ag,∨
j
)T ⊗I + α
3β
X
ν
(B∨
ν )T ⊗Aν,
(17)
Jj2 = −β
3α(Ag,∨
j
)T ⊗Bj + γ
3β
X
ν
(B∨
ν )T ⊗Cν,j
−α
3γ
X
ν
(Cg,∨
j,ν )T ⊗Aν,
(18)
Jj3 = −1
3
X
ν
(Cg,∨
j,ν )T ⊗Cν,j.
(19)
For any degree-three matrix polynomial P(ε) = P
l εlPl, its Bernstein representation on [0, h] is
P(ht) =
3
X
k=0
 
3
k
!
tk(1 −t)3−kMk,
Mk =
k
X
l=0
 k
l

 3
l
hlPl.
(20)
The coefficients outside Mk are nonnegative and sum to one. Thus positive control matrices certify
positivity on the whole interval, not at sampled values.
Theorem 1.2 (Exact high-noise qutrit interval). For the noisy delayed trine law,
dmin(λ) = 3
7657/8000 ≤λ < 1.
(21)
The concrete states and maps are (6), (10), and (15).
Proof. For the twelve Choi Bernstein control matrices from (19)–(20), and the thirty-six state control
matrices from (6), exact rational LDLT certificates establish strict positivity. The certificate uses the
realification
R(Z) =
 
Re Z
−Im Z
Im Z
Re Z
!
;
a Hermitian matrix is positive definite precisely when its realification is. In the fixed computational-basis
ordering, the certified bounds on every LDL pivot are:
Bernstein index k
0
1
2
3
Choi control matrices (all j)
1/9
> 9/100
> 3/50
> 1/100
State control matrices (all a, b)
> 1/10
> 1/10
> 1/10
> 1/10
4


## Source page 5

These are pivot bounds, not eigenvalue bounds. They are verified with exact Fraction arithmetic in
supplement/memory/three/memory/exact_qutrit_certificate.py; the explicit rational control
matrices and all pivots are recorded in supplement/memory/expected_outputs/three/memory/qutr
it_bernstein_matrices.json and supplement/memory/expected_outputs/three/memory/qutrit
_certificate.json. For clarity the finite algebraic verification is the standard recurrence
Dk = Mkk −
X
l<k
L2
klDl,
Lik = Mik −P
l<k LilLklDl
Dk
,
Lkk = 1.
It checks Dk > 0 and reconstructs every entry of LDLT exactly. This computer-assisted part involves
only 48 explicitly defined rational matrices; no numerical eigensolver or tolerance certifies their signs.
Bernstein convexity proves positivity throughout 0 ≤ε ≤7/20.
The same code independently verifies 197 exact polynomial identities by applying the Choi polyno-
mial directly: all 27 reset identities through degree six, and trace-preservation and stationarity through
degree three. The universal symbolic proof of those identities is already Lemma 1.1. It follows that
this is a stationary CP instrument reproducing every word. The ordinary-rank lower bound gives
minimality. Since r = ε3, the interval is λ = 1 −r ≥1 −(7/20)3 = 7657/8000, excluding the iid
endpoint from the dimension-three assertion.
1.5
Finite observations versus exact memory requirements
The exact dimension remains at least three for every λ < 1, even arbitrarily close to the iid endpoint.
This does not create a finite-data discontinuity. Let Un be the uniform iid law on n trits and n ≥2.
Define
d(r) = 1 −r
3
log(1 −r) + 2(1 + r/2)
3
log(1 + r/2).
With 0 log 0 = 0, direct conditional-likelihood calculations give
D(Pλ,n∥Un) = (n −2)d(r),
χ2(Pλ,n∥Un) = (1 + r2/2)n−2 −1.
(22)
Indeed the likelihood ratio is Qn−2
t=1 3T λ
yt,yt+2. The KL chain rule gives one equal row contribution d(r) per
link. Under Un, summing the newest symbol in the squared likelihood contributes 3 P
j(T λ
aj)2 = 1+r2/2,
independently of a; recursion proves the chi-square identity. Therefore
TV(Pλ,n, Un) ≤min

1,
q
(n −2)d(r)/2, 1
2
q
(1 + r2/2)n−2 −1

.
(23)
The second bound is Pinsker and the third is Cauchy–Schwarz. Since d(r) = r2/4 + O(r3), fixed finite
records approach the iid law continuously. These are established divergence inequalities evaluated
exactly for this process, not new information measures. The comparison concerns the complete declared
symbol sequence, including its ordering; extra retained apparatus channels would require their joint
law as well.
1.6
What the construction establishes
The original trine phase geometry supplied a four-dimensional realization; its zero-noise optimality
proof did not settle noisy qutrit models. The present construction supplies such models explicitly and
proves exact minimality on a full interval. It introduces a hierarchical encoding of the two individual
labels and their joint Fourier components, with amplitudes that shrink at different rates. This permits
the update maps to remain inside the CP cone while retaining the complete order-two law. The sharper
5


## Source page 6

interval uses a rational qutrit frame and a convex polynomial certificate; it does not claim the endpoint
is optimal.
The finite circular phase representation draws on the geometric phase and angular-register descrip-
tions in [6, abstract and Sections 2–3] and [7, pp. 64–68]. The noisy qutrit encoding, update maps and
interval certificates are the constructions established here.
The CP-realization problem, nonorthogonal quantum process memories, quantum dimension
advantages and lower bounds are established research areas [3–5, 8, 11]. The contribution is the explicit
full-law construction, interval certificate and matching dimension bound for this declared delayed
process. Targeted primary-literature checks do not establish publication priority. No claim is made
about reduced complete environment memory, a Hamiltonian mechanism, CSL dynamics, Born-rule
selection, actual-event affinity, or conscious perspective.
2
Exact finite-record accuracy and a memoryless comparator
An exact resource minimum does not alone establish that the resource is needed at a finite experimental
accuracy. This section evaluates that distinction for the same full trine law, without changing its
parameters or introducing an alternative Born rule. It is an analytical addition to the completion
theorem’s rank-based certificates. It is not a claimed optimum over all approximate hidden-source
realizations.
Let Pλ,N be the N-symbol stationary word law in the main resource manuscript, and let
UN(y1, . . . , yN) = 3−N.
The latter is generated by the one-dimensional quantum instrument
Φj(x) = x/3, or a one-state classical source with fresh uniform trit emissions. Both have the same
specified output alphabet and the same record length. Fresh randomness or its dilation still costs
resources and is not contained in the one-dimensional memory count.
Theorem 2.1 (Exact binomial reduction of the finite-record discrepancy). For N ≥2 set k = N −2
and R = Pk
t=1 1{Yt = Yt+2}. Then
TV(Pλ,N, UN) = TV
 Bin(k, λ/3), Bin(k, 1/3)
.
The count R is a sufficient statistic for this binary experiment. Thus even retaining every symbol gives
no stronger test for these two models than retaining that count. This is an assertion about the declared
classical word record, not about their microscopic output environments.
Proof. For each word with r repeats,
Pλ,N(y)
UN(y) = λr
3 −λ
2
k−r
.
Conditional on every positive-probability preceding history, the next repeat indicator has probability
λ/3. Iterating conditional probabilities proves that these k indicators are iid Bernoulli, despite the
overlapping symbol comparisons. Under UN their parameter is 1/3. The likelihood ratio is constant on
each fibre of R; summing absolute signed masses fibre by fibre therefore gives the equality in TV, with
no data-processing slack.
For 0 < λ < 1 put b = (3 −λ)/2 and r∗= ⌊k log b/(log b −log λ)⌋. Since the likelihood ratio
decreases with r, the exact error is
Fk,λ/3(r∗) −Fk,1/3(r∗),
where F is the binomial CDF. Equality at an integer crossing contributes zero signed mass, so either
threshold convention is valid. At λ = 0 the result is 1 −(2/3)k, and at λ = 1 it is zero. For N ≤2
both word laws agree.
6


## Source page 7

Two closed-form bounds are also available:
TV(Pλ,N, UN) ≤min


1, 1
2
s
1 + (1 −λ)2
2
k
−1


,
TV(Pλ,N, UN) ≤
v
u
u
t1 −
"√
λ + 2
p
(3 −λ)/2
3
#2k
.
The first follows from TV ≤1
2
p
χ2 and the binomial likelihood second moment; the second follows by
Cauchy–Schwarz from the product Bhattacharyya affinity. In particular, the one-state comparator
meets TV tolerance ε whenever
k ≤
log(1 + 4ε2)
log(1 + (1 −λ)2/2).
This is a sufficient finite-horizon resource statement, not an exact minimum-memory frontier. The
exact CDF expression gives the sharper decision for any specified (N, λ, ε).
What this changes.
The completion theorem established that nine classical hidden states remain
necessary for every exact non-iid trine law. The present result shows quantitatively when a one-state
source already approximates its complete finite passive record. Thus an exact quantum/classical
dimension separation may coexist with a memoryless approximation at the nominated tolerance.
Resolving the exact qutrit question does not remove this operational qualification.
A common fixed downstream reader, including a reader with an explicitly retained erasure symbol,
contracts this discrepancy. For a source-independent erasure probability 1 −η on each emitted label,
retaining the original un-erased word as well makes the joint discrepancy exactly the original TV:
the channel y 7→(y, erased record) preserves it. Keeping only the erased report can reduce it. These
statements compare the same admitted classical records on both sides; neither grants access to a
microscopic bath or to a quantum source’s hidden memory.
Verification.
The compact release supplies supplement/memory/checks/verify_consolidated_c
onstants.py, which independently compares ordered-word enumeration and the binomial TV formula
in twenty exact rational cases. The analytical proof above supplies the all-horizon statement. The
historical diagnostic check_finite.py, preserved in the separate evidence archive, enumerated all
words of lengths two through eight at six rational noise parameters (42 cases), and evaluated additional
binomial CDF and retained-erasure examples. Those archived diagnostics are not advertised as extra
checks run by the compact release’s reproduction command. These are mathematical calculations, not
empirical data.
3
Finite observable accuracy and an explicit rank test
The exact source separations have an accessible finite-accuracy consequence against qubit memories
and classical sources with at most eight causal states. This is a known spectral-rank technique newly
specialized to the delayed law; it does not improve the difficult three-versus-four quantum boundary. It
supplies a controlled, finite-data interface for the established quantum and classical memory claims.
Proposition 3.1 (Observable approximation floor). Let H be a normalized joint distribution of a past
and a future block, viewed as a matrix. Let γc(H) = (P
i>c σi(H)2)1/2. For any complete competing
law P ′ factoring through a causal cut with matrix rank at most c,
TV(P ′, P) ≥γc(H)/
√
2.
7


## Source page 8

A classical c-state source has this rank bound; a quantum memory of Hilbert dimension d has rank at
most d2. Every future-accessed, history-correlated system belongs to that cut. The statement allows
nonstationary competitors and extra null symbols.
Proof. The classical joint table is a sum of at most c past/future product matrices.
Quantum
subnormalized conditional states and future effects pair in the d2-dimensional real Hermitian space.
Pad the target with zeros for extra outcomes, preserving its nonzero singular values. The matrix
difference has zero total sum; its positive and negative entries each sum to δ = TV(P ′, P). Consequently
its squared Frobenius norm is at most 2δ2. The least Frobenius error of any rank-c approximant is
γc(H), proving the assertion. The latter identity follows by truncating the singular-value decomposition
for attainment; for the lower bound, project onto the orthogonal complement of the approximant’s
column space and minimize the discarded quadratic mass.
For the four-record trine cut, put r = 1 −λ. The singular values of H = T ⊗T/9 are
1/9,
r/18 (four times),
r2/36 (four times).
Every qubit-cut competitor therefore obeys
TV(P ′, Pλ,4) ≥r
√
1 + r2
18
√
2
,
while any at-most-eight-state classical competitor obeys
TV(P ′, Pλ,4) ≥
r2
36
√
2.
These are outer bounds, not attained optimal approximation frontiers. They vanish at the iid endpoint,
as required. They do not exclude a qutrit, because its ordinary rank ceiling is already nine.
3.1
Independent four-record trials and finite confidence
Assume N independently prepared trials from one fixed complete four-record law, with every trial and
null retained. The preparation/reset mechanism, clock and independence are physical conditions, not
inferred from a reset flag. Pool all nontarget past pairs into one extra row and all nontarget future
pairs into one extra column; this coarse-graining preserves the rank bound and gives a finite complete
table. Let bH be its empirical frequency matrix and
eN(α) = 1 +
p
log(1/α)
√
N
.
Then
Pr{∥bH −H∥F > eN(α)} ≤α.
Indeed E∥bH −H∥2
F = (1 −∥H∥2
F)/N ≤1/N; replacing one trial changes the norm by at most
√
2/N. Bounded differences gives Pr{f −Ef > u} ≤e−Nu2, and Jensen gives the mean bound. The
concentration step can be derived by exposing one independent trial at a time and bounding each
conditional centered moment-generating function by the exponential of one eighth its squared range;
optimizing its exponential Markov bound yields the displayed inequality.
Distance to the rank-c matrix set is one-Lipschitz, so the test
γc( bH) > eN(α)
8


## Source page 9

has false-rejection probability at most α for every admitted rank-c source. Against the exact target
its rejection probability is at least 1 −β whenever γc(H) > eN(α) + eN(β). This supplies a stated
sufficient trial budget. It is conservative and is not claimed sample-optimal. It certifies an observable
rank obstruction, not a particular microscopic channel or the full infinite word law.
Spectral identification, singular-value-tail thresholding and finite confidence are established tech-
niques. Du Roy de Chaumaray et al., JMLR 25(415), 1–37 (2024), Eqs. (5)–(6), Theorem 4, uses
the same tail statistic for nonparametric hidden Markov order estimation under a different, mixing
single-sequence sampling model. The present contribution is the exact trine specialization, joint
classical/quantum cut interpretation and complete-null four-record interface. Original least-rank
approximation is Eckart–Young (1936). Hsu–Kakade–Zhang (2012), Lemma 8, already gives the same
empirical probability-vector/Frobenius concentration method for independently sampled observation
triples. No first spectral memory test is claimed. Neither this test nor its target constitutes an
experimental distinction between Shadow Theory and ordinary quantum theory.
At the new noise endpoint, the calculated qubit-cut TV floor is approximately 0.00961570 and the
eight-state classical floor is 0.00111370. For one-percent false-rejection risk and at least 99-percent
power against the exact target, the sufficient independent four-record trial budgets are 214,080 and
15,958,893, respectively. Each trial costs four emitted records plus its independently prepared stock.
These conservative sufficiency budgets are not practical hardware estimates or sample-optimal claims.
The supplied synthetic million-trial table rejects the qubit rank cap but does not reject the eight-state
cap at the stated threshold, as expected.
4
A robust dimension witness for arbitrary four-record approxima-
tions
The low-noise support argument excludes qutrit memories on a small exact-noise interval. That does
not by itself quantify approximation by an arbitrary qutrit process whose perturbed law need not
remain in that one-parameter family. The same support argument gives an observable matrix witness
and a nonzero finite-record approximation floor. The constants are deliberately conservative; they are
not proposed experimental accuracy targets.
Matrix witness.
Let C ≥0 be a 9-by-9 column-stochastic matrix, indexed by pairs (a, b), (c, d) ∈
{0, 1, 2}2. Define
μ = min
a,b
X
c,d
Cab,cd > 0,
L = max
a,b
"X
d
Cab,ad +
X
c
Cab,cb
#
,
and let σ2, σ5 > 0 be its second and fifth singular values. If C has a complex Hermitian PSD factorization
of size at most three, then
27L
μ
≥
σ2
2σ2
5
36(σ2 + 18
√
6)2 .
(24)
The indices, leakage and singular values are ordinary classical matrix data. No particular quantum
update architecture or reference frame is assumed in this lower bound.
Proof.
Since σ5 > 0, a factorization cannot be supported on dimension two. Congruence normalization
of its row factors gives a POVM P
a,b Aab = I3 and density matrices bcd with Cab,cd = Tr(Aabbcd).
The row sums imply Tr Aab ≥μ/9, hence a largest eigenvalue at least μ/27. Put Ra = P
d bad and
Qb = P
c bcb. Both have trace three, and the leakage implies
λmin(Ra + Qb) ≤e := 27L/μ.
9


## Source page 10

We prove the required approximate plane/line dichotomy directly. Fix any s > e; all distances below
are on the same normalized factorization.
Case 1: some Ra or Qb has second eigenvalue at least s. By interchanging the two indices if
necessary, take such an Ra. Let P project onto its two largest eigenvectors and let z be a unit vector
in the complementary line. For each b, choose a unit nb with ⟨nb, (Ra + Qb)nb⟩≤e. Positivity and
Ra ⪰sP imply
∥Pnb∥2 ≤e/s,
⟨nb, Qbnb⟩≤e.
Choose the phase so ⟨z, nb⟩≥0. Since e/s < 1,
∥nb −z∥2 = 2(1 −
q
1 −∥Pnb∥2) ≤2e/s.
The bound ∥Qb∥≤Tr Qb = 3 and the triangle inequality after applying √Qb give
⟨z, Qbz⟩≤
√e +
√
3
q
2e/s
2
=: l= e(1 +
q
6/s)2.
Every preparation obeys bcd ⪯Qd, hence Tr[(I −P)bcd] ≤lfor this common plane. The projection
bound ∥ρ −PρP∥1 ≤2
p
Tr[(I −P)ρ] therefore bounds every preparation-compression error by 2
√
l.
For completeness, purify ρ, apply P ⊗I, and compute the trace norm of the difference between the
original rank-one projector and the projected, unnormalized rank-one operator: for discarded mass x,
its norm is
√
4x −3x2 ≤2√x. Partial trace contracts this Hermitian trace norm, giving the stated
bound also for mixed ρ.
Replace each bcd by PbcdP and apply the same POVM. The resulting real matrix C(4) has rank
at most four, since Hermitian operators on a two-dimensional plane have real dimension four. A
POVM contracts the trace norm of a Hermitian difference: if D = D+ −D−is its positive/negative
decomposition, then P
ab | Tr(AabD)| ≤Tr D+ + Tr D−= ∥D∥1. Consequently each of the nine column
errors has Euclidean norm at most 2
√
l. Thus
σ5 ≤∥C −C(4)∥op ≤∥C −C(4)∥F ≤6√e(1 +
q
6/s).
The first inequality follows from the singular-value lower bound for rank-four approximation, which
applies to every real approximant.
Case 2: all Ra, Qb have second eigenvalue below s. Let Pa and Q′
b be their top-eigenvector projectors.
The mass outside each such line is below 2s. Since bab ⪯Ra, Qb,
D(bab, Pa) ≤
√
2s,
D(bab, Q′
b) ≤
√
2s,
where D denotes half trace distance. Here D(ρ, |v⟩⟨v|) ≤
p
1 −⟨v, ρv⟩: it is equality for pure states
and follows for mixed states by convexity and Jensen’s inequality. Fix P0. Comparing through b0b gives
D(P0, Q′
b) ≤2
√
2s, whence D(bab, P0) ≤3
√
2s for all nine preparations. Replace every preparation by
this same pure state. The resulting matrix C(1) has identical normalized columns and rank at most
one. Each column difference is zero-sum and has classical total variation at most 3
√
2s by POVM
contraction. For a zero-sum real vector v, its positive and negative parts each have mass ∥v∥1/2, so
∥v∥2
2 ≤2(∥v∥1/2)2. Each column thus has Euclidean norm at most 6√s, and
σ2 ≤∥C −C(1)∥op ≤∥C −C(1)∥F ≤18√s.
These two cases exhaust the possible normalized factors.
If the right side of (24) exceeded e, choose s < σ2
2/324 sufficiently close to that upper endpoint.
Then both displayed inequalities would fail, since the limiting first bound is 6√e(1 + 18
√
6/σ2) < σ5.
This choice also satisfies s > e: column stochasticity gives σ2, σ5 ≤∥C∥F ≤3, and the assumed bound
on e is less than σ2
2/(24 · 324). This contradiction proves the necessary inequality.
□
10


## Source page 11

4.1
A floor for every qutrit approximation of the trine record law
Let Pλ,4 be the specified four-symbol delayed trine law, with
Hab,cd = Pλ,4(a, b, c, d) = T λ
acT λ
bd
9
,
Cλ = 9H.
Suppose another complete four-record law P ′ is generated through a quantum causal cut of dimension
at most three. All history-correlated systems used again in the future belong to that cut; independent
fresh ports and an untouched retained archive obey the same convention as the accounting chapter.
The competing law may have a different update rule, lack stationarity, or lie outside the trine family.
Extra null/loss outcomes can remain in its complete alphabet, with zero target probability.
Put δ = TV(P ′, Pλ,4) < 1/9. Restrict its joint table H′ to the target trit pairs and let h′
cd =
P
ab H′
ab,cd ≥1/9 −δ. The column-normalized matrix C′
ab,cd = H′
ab,cd/h′
cd still has PSD rank at most
three. Define
d =
36δ
1 −9δ,
a = 1 −λ
2
−d,
e∗=
27
1 −d
2λ/3 + 18δ
1 −9δ
.
Whenever d < 1, a > 0, the following necessary condition holds:
e∗≥
a4
36(a + 18
√
6)2 .
(25)
Thus failure of this scalar inequality excludes every qutrit-cut approximation at that tolerance, rather
than merely a fitted trine member.
Derivation.
Column normalization and total variation give
∥C′ −Cλ∥op ≤
X
ab,cd
|C′
ab,cd −(Cλ)ab,cd| ≤d.
Indeed the two contributions are at most the joint-table l1 error 2δ and the marginal l1 error 2δ,
divided by 1/9 −δ. Thus row sums are at least 1 −d, and both relevant singular values are at least
a. The unnormalized leakage functional takes values in [0, 2] and has target expectation 2λ/27. Its
change is at most 2δ; dividing by the smallest column mass bounds L(C′) by (2λ/3 + 18δ)/(1 −9δ).
Apply (24); its right side increases with each positive singular value. This gives (25).
For explicit simple consequences, exact rational constants in the proof with s = 1/2000 give
TV(P ′, P0,4) > 10−9,
(26)
and, uniformly for 0 ≤λ ≤10−8,
TV(P ′, Pλ,4) > 5 × 10−10.
(27)
At the first boundary the squared rank-four approximation error is below 0.216, and at the second
below 0.188; the rank-one squared error is 0.162, while the required singular value exceeds 0.49 in both
cases. These loose bounds are verified with fractions in the accompanying code.
What changes.
The earlier exact dimension statement was robust only along a specified noise
curve. The new witness supplies a finite-output accuracy obstruction against all ordinary qutrit-cut
realizations, including time-dependent alternatives and complete null/loss records. It is a quantitative
outer bound, not a sharp approximate-memory frontier, a large practical separation, or a resource
theorem for nonlinear ontic assignments. Larger horizons inherit the same floor by retaining the
four-record marginal. It compares the declared classical record law; it identifies no microscopic source
or conscious perspective.
11


## Source page 12

4.2
An explicit robust version of the support witness
The noiseless growing lower bound is sensitive to small forbidden-event probabilities. A quantitative
replacement is possible, with a poor large-grid margin that should be stated explicitly. Suppose a
row-stochastic matrix eT factors through r classical states as AB, with both A and B row stochastic.
Such a normalization is available for every nonnegative factorization of a stochastic matrix after zero
factors are removed. Set e = maxi eTii and μ = mini̸=j eTij. For τ > 0 put Si = {l: Ail≥τ}. If Si ⊆Sj,
then
eTij ≤e/τ + rτ.
(28)
Indeed, on Si the sum of Blj is at most e/τ because Ajl≥τ, and outside Si the contribution is at
most rτ. Choosing τ =
p
e/r shows that μ > 2√re forces an antichain; the case e = 0 follows by a
limit or the exact support argument.
For an entrywise perturbation of the phase-circle transition by at most δ, write
μm = 1 −cos(2π/m)
m
= 2 sin2(π/m)
m
.
The sufficient antichain condition is μm −δ > 2
√
rδ, or equivalently
δ < δ∗
m,r :=
μ2
m
(√r + μm + √r)2 .
(29)
If a normalized observed triple distribution p′ lies at TV distance η from the exact law, with η < m−2,
its conditional transition in any middle-symbol fibre obeys
max
i,j

p′(i, y, j)
P
k p′(i, y, k) −Tij
 ≤
2η
m−2 −η.
Both the single-entry and row-mass probability errors are at most η; the inequality follows by adding
numerator and denominator errors. Therefore, choosing r = rm −1, the original classical sector lower
bound mrm survives whenever
η <
δ∗
m,r
m2(2 + δ∗m,r).
(30)
This is a rigorous finite-data statement, but its radius scales as roughly m−8/r and is extremely small
at m = 180, 360, 720. It is not proposed as a practical large-grid experiment. The trine rank margin is
substantially more usable.
5
Sharp bath approximation costs with and without retained purifi-
cation
Exact Choi rank counts even arbitrarily weak Kraus directions. It does not by itself say what apparatus
savings become possible at a prescribed error. For the three-charge qutrit instruments there is a
constructive, sharp answer at three useful budgets. The answer differs depending on whether the
purifying bath is unread or is part of the compared retained output. This is an application of established
spectral approximation and Stinespring methods, not a new general theory of approximate quantum
channels. The standard maximum-trace eigenvalue principle and minimum-pure-Stinespring dimension
are antecedents [2, 12]; the proofs needed here are supplied below. The added result is exact saturation
for the declared charge-orbit channels, with separate retained and unread-bath tasks.
12


## Source page 13

5.1
The typed channel and its three trace-scaled components
Let S = C3 be the reusable memory, A = C3 the registered pointer, and B an initially pure, fresh
purifying bath. The reduced output channel is
A(X) =
2
X
j,k=0
|j⟩⟨j|A ⊗KjkXK†
jk.
Only A and the final memory belong to this reduced output; an arbitrary inert reference is retained
throughout. In the retained-purification task we instead compare the full isometries into A ⊗S ⊗B.
The two metrics must not be substituted for one another.
Write ω = e2πi/3, Z = diag(1, ω, ω2) and X|p⟩= |p + 1⟩. The rank-one charge blocks give Kraus
matrices of the form
Kjk = XjK0kZ−j,
|K0k⟩⟩= αk|fk⟩|1⟩+ βk|fk+1⟩|2⟩,
(31)
where |fk⟩= 3−1/2 P
p ωpk|p⟩and the vectorization orders input before output. Put νk = |αk|2 +|βk|2 >
0, and assume P
k νk = 1. The three vectors at fixed j are orthogonal. Moreover
X
j
K†
jkKjk = νkI3.
(32)
Indeed K†
0kK0k is a weighted sum of two conjugate Fourier projectors, so each computational diagonal
entry is νk/3. Twirling it by Z kills the off-diagonal entries and gives (32). Consequently
Qk(X) = ν−1
k
X
j
|j⟩⟨j| ⊗KjkXK†
jk
is CPTP with Choi rank three, and A = P
k νkQk. The three component Choi supports are mutually
orthogonal, including the pointer factor. The normalized Choi state ρA = J(A)/3 therefore has
eigenvalues νk/3, each with multiplicity three.
5.2
Exact approximation theorem
Relabel the weights ν(1) ≥ν(2) ≥ν(3) and put pm = Pm
i=1 ν(i), m = 1, 2, 3. A pure bath of dimension b
means the minimum pure Stinespring environment of the specified reduced channel; all fresh apparatus
factors purifying that channel are included.
Theorem.
Among all CPTP channels with the same input and reduced output spaces and pure bath
dimension at most 3m,
inf 1
2∥e
A −A∥⋄= 1 −pm.
(33)
The infimum is attained by the actual channel
Am = p−1
m
m
X
i=1
ν(i)Q(i).
(34)
It retains the same pointer alphabet and needs no added null branch. The normalization defines a new
fixed trace-preserving instrument; it is not postselection on original trials.
For the full retained pure Stinespring output, allow any bath-only isometric identification of the
competitor’s at-most-3m dimensional bath with the target bath. Then the corresponding optimum is
inf 1
2∥W −V∥⋄=
p
1 −pm,
(35)
13


## Source page 14

where V(ρ) = V ρV † and similarly for W. The dimension counts are intrinsic bath dimensions; the
isometric embedding only defines a common comparison space.
Proof of the reduced statement. For a channel of bath dimension at most b, its Choi state has rank
at most b. If P projects onto its support, the variational characterization of trace distance gives
1
2∥ρA −ρ e
A∥1 ≥Tr[(I −P)ρA] ≥1 −
b
X
i=1
λi(ρA).
The last step follows by diagonalizing ρA: for any rank-b projector its diagonal weights lie in [0, 1] and
sum to b, so the maximum weighted eigenvalue sum selects the largest b eigenvalues. Evaluating the
diamond norm on a maximally entangled input gives the same lower bound for half diamond distance.
For b = 3m this is 1 −pm.
For m = 3 attainment is exact and immediate. Otherwise both Am and the normalized omitted
component Rm are CPTP, and A = pmAm + (1 −pm)Rm. The half diamond distance of any two
channels is at most one, hence 1
2∥A −Am∥⋄≤1 −pm. The preceding lower bound is equal, proving
(33). Orthogonal Choi supports explain why no slack remains.
Proof of the retained statement. Use a bath basis |j, k⟩and define
V =
X
j,k
|j⟩A ⊗Kjk ⊗|j, k⟩B,
Wm = p−1/2
m
X
j, k retained
|j⟩A ⊗Kjk ⊗|j, k⟩B.
Both are isometries by (32), and
V †Wm = √pmI3.
(36)
Every pure input with any inert reference therefore gives pure outputs of overlap √pm, whose half
trace distance is √1 −pm. Convexity handles mixed inputs. This proves the upper bound uniformly
over references.
For any competing bath of dimension at most b, apply its isometry and the target isometry to a
maximally entangled input. The competitor output has Schmidt rank at most b across bath versus
pointer–memory–reference. After any bath-only identification it lies in some bath subspace of dimension
at most b. Its squared overlap with the target is at most the target mass in that subspace, at most the
largest-b eigenvalue sum of its bath marginal. The target pure state’s nonzero bath eigenvalues are
those of ρA, so this sum is pm for b = 3m. Pure-state trace distance is thus at least √1 −pm. This
proves (35).
□
5.3
An exact, independently checked qutrit example
At the fixed-seed construction’s critical parameter t =
√
14/21, r = 4
√
14/63, the three positive charge
blocks have traces
(ν0, ν1, ν2) = (1/9, 1/3, 5/9).
For example their first diagonal entries are (2/27, 2/27, 14/27) and off-diagonal entries are c0 = t(ω−2)/9,
c1 = c2 = −t(8 + 5ω)/9. Their determinants vanish; each is nonzero and has rank one. Thus the
following are sharp resource points for this specified channel:
pure bath budget
optimal reduced half diamond error
optimal retained half diamond error
3
4/9
2/3
6
1/9
1/3
9
0
0
No exact answer is claimed at the intervening budgets four, five, seven or eight. The same theorem
applies to any other certified member with the charge form (31), using its actual block weights; it does
not require the particular numerical example.
14


## Source page 15

Repeated use.
For the displayed streaming implementations, fresh independent pure bath ports and
the same internal dynamics give V †
nWm,n = pn/2
m I: contract the last pair of isometries using (36) and
induct. Their full retained distance is therefore exactly √1 −pnm for every input and reference. This
is the error of these explicitly declared implementations, not the optimum over globally compressed
horizon baths or a grant of fresh preparation independence in an unrelated physical source.
Practical meaning and limits.
The earlier count nine was an exact one-step apparatus cost. It
now has a precision-sensitive interpretation: for this channel a bath of size six cannot achieve reduced
error below 1/9, and cannot achieve retained-pure error below 1/3; both boundaries are constructively
attained. The comparison keeps the same source space, original preparation, pointer, clock tick and
arbitrary inert reference. It compares alternative admitted interactions. Access to a returning bath or
controller changes the reusable-memory ledger. An initially mixed apparatus requires its purification
resource to be declared; the pure-bath budget here cannot silently be replaced by its unpurified marginal
dimension.
This does not optimize over all qutrit sources with the same passive word law, compare a three-
dimensional source with a four-dimensional one under arbitrary interventions, or certify a laboratory
realization. It does not turn an unread-bath bound into equality of complete retained instruments. The
two separate, explicit statements above provide the appropriate interfaces. The construction supplies
no Born selection, mass-noise admission, actual-event mechanism or conscious perspective.
supplement/memory/five/audit/check_bath_approximation.py independently reconstructs all
nine Kraus matrices, proves their orbit trace identities and Choi orthogonality with exact symbolic
arithmetic, and checks the scalar isometry overlaps. Its arbitrary-reference samples are numerical
diagnostics, not the universal proof. All parameters and outputs are in supplement/memory/expect
ed_outputs/five/audit/bath_approximation_results.json.
6
Finite-horizon resource accounting: what survives beyond the
memory box
An exact streaming advantage survives the expanded accounting, but it is an advantage in reusable
causal memory, not a claim that an entire closed apparatus has four dimensions. For the noiseless trine
process and any declared horizon n ≥4, four quantum dimensions and nine classical states are the
exact causal-memory minima when every history-correlated controller, reference and environment that
can influence the future is included at the causal cut. In contrast, the retained archive and an isometric
implementation of its classicalization require resources growing with the horizon. These resources can
be calculated exactly for the supplied quantum construction. This corrects a possible overreading of
the earlier four-versus-nine result.
The calculation concerns ordinary finite-dimensional instruments and exact channels. It assumes
Born probabilities, does not select actual events, and does not assign hardware size, energy, temperature
or a physical reset cost to a Hilbert dimension. The preparation, interface and accuracy must be the
same for every comparison; the finite-accuracy comparator elsewhere in this companion changes the
appropriate conclusion when an exact law is unnecessary.
6.1
Declared task and phase encoding
For the emitted-symbol construction, use phases θj = 2πj/m, m ≥3,
|ψj⟩= |0⟩+ eiθj|1⟩
√
2
,
|ψ⊥
j ⟩= |0⟩−eiθj|1⟩
√
2
,
Ej = 2
m|ψ⊥
j ⟩⟨ψ⊥
j |,
15


## Source page 16

with ρj = |ψj⟩⟨ψj| and
Tij = Tr(Ejρi) = 1 −cos(θi −θj)
m
.
Starting from τ = I4/4, the iterated instrument
Ψj(X) = Tr1[(Ej ⊗I2)X] ⊗ρj
(37)
has the full stationary word law
p(w1 · · · wn) = 1
m2
n−2
Y
t=1
Twt,wt+2,
n ≥2.
(38)
The circular phase representation is informed by [6, abstract and Sections 2–3] and [7, pp. 64–68]; the
stochastic process and instrument are defined above, and their resource costs are proved below.
The task here retains all n outputs in their original order, their settings and timing metadata, and
every declared null/loss outcome. The ideal alphabet contains no loss; a failed physical implementation
must add it and changes the target law. The archive is append-only: it is not consulted to decide
future source transitions. Future fresh stock is initially uncorrelated with the history and memory. Any
violation must be explicitly added to the causal memory or to the task’s intervention interface.
There are two distinct output tasks. A coherent archive retains the amplitudes between different
output words. A classical archive is diagonal in the word basis, including when the input memory is
entangled with an arbitrary retained reference. The passive word probabilities agree, but the channels
and their resource requirements differ.
6.2
An exact single-step dilation
Let S swap the two memory qubits and set
Lj =
q
2/m|ψj⟩⟨ψ⊥
j |,
Kj = S(Lj ⊗I2).
Then Ψj(X) = KjXK†
j and P
j K†
jKj = I4. Thus
V =
m−1
X
j=0
|j⟩A ⊗Kj : C4 −→Cm
A ⊗C4
M
(39)
is an isometry. A fresh blank m-level output register and a fixed unitary extension implement the
coherent-output step with no additional discarded system. This does not say that the output register
is free.
For comparison the dephased complete-record channel is
C1(X) =
X
j
|j⟩⟨j|A ⊗KjXK†
j.
Its Choi rank is exactly m: each nonzero output block has rank one. Consequently a globally isometric
implementation with a pure initially independent environment requires an environment of dimension
at least m, and dimension m suffices by copying the label,
F : |j⟩A 7→|j⟩A|j⟩E.
The environment must be retained elsewhere or traced; tracing implements classicalization. Conditioning
on one actual outcome is a different operation from replacing this complete channel by a pure branch.
16


## Source page 17

The memory channel with its record discarded, Λ(X) = P
j KjXK†
j, has Choi rank exactly three,
independent of m. Indeed the three functions 1, eiθj, e−iθj are linearly independent for m ≥3, and
Lj =
1
√
2m
 
1
−e−iθj
eiθj
−1
!
span a three-dimensional operator space. Multiplication by S and tensoring with I2 preserve this span
dimension. Dropping the record can therefore reduce a dilation cost from m to three, but solves a
weaker task.
These minimal-environment statements are standard Choi–Kraus–Stinespring theory, applied here
explicitly. If a pure-environment dilation has dimension dE, its environment-basis Kraus representation
has at most dE terms, so rank J(C) ≤dE; a spectral decomposition of the positive Choi matrix attains
equality. A primary textbook statement is Watrous, The Theory of Quantum Information, Corollary
2.27, printed pp.89–90, author’s chapter PDF pp.16–17: https://cs.uwaterloo.ca/~watrous/TQI
/TQI.double.2.pdf.
6.3
Exact horizon cost and the obstruction to indefinite reuse
For a word w, let Kw = Kwn · · · Kw1. Define the complete classical-record channel
Cn(X) =
X
w
|w⟩⟨w|A ⊗KwXK†
w.
(40)
This is a channel on arbitrary input states and hence includes all initially retained input references. It
is stronger than requesting a distribution only for I4/4.
Horizon dilation theorem.
For the noiseless phase-circle instrument, n ≥2, put
Nn = m2(m −1)n−2.
Then Cn has Choi rank exactly Nn. Its minimum pure initial environment dimension is Nn. For the
fixed stationary input I4/4, the final memory–classical-archive state also has rank Nn. Conversely the
coherent n-output isometry requires no additional bath beyond its output registers, while producing a
different retained-output channel.
Proof. After the first two steps,
K(a,b) = 2
m|ψaψb⟩⟨ψ⊥
a ψ⊥
b |.
Every further step shifts the two states and contributes a scalar whose squared modulus is Twt,wt+2.
Therefore Kw has operator rank one and is nonzero precisely when wt+2 ̸= wt at every later step.
There are m2 first pairs and m −1 later choices, giving Nn positive words. Each word block of the
Choi matrix is the nonzero rank-one matrix |Kw⟩⟩⟨⟨Kw|; distinct archive blocks are orthogonal. Their
ranks add, proving the Choi claim and the pure-environment minimum. On I4/4 every word block is a
positive scalar times ρwn−1 ⊗ρwn, so the fixed-output state has the same rank. Finally the ordered
iteration of V is an isometry before dephasing and introduces no bath.
□
The lower bound is sharp for the declared final complete channel:
X 7→
X
w
|w⟩A|w⟩E ⊗KwX
is its Stinespring isometry. It is not a claim that Nn is the minimum physical bath for every source
having only the same passive output law, or that independently optimizing each intermediate cut gives
17


## Source page 18

a minimum protocol. It is a concrete finite-horizon implementation and lower bound for (40). The
distinction between a channel’s dilation rank and a whole strategy’s memory is essential; see Bisio et
al., Phys. Rev. A 85, 032333 (2012), DOI 10.1103/PhysRevA.85.032333, Definitions 3–4 and Theorem
3, https://arxiv.org/abs/1112.3853.
A fixed reusable environment of dimension D, initially pure and with no reset, export or new
environment, cannot realize these dephased channels at arbitrarily large n: it must satisfy D ≥Nn.
For m > 2,
n ≤2 +
$
log(D/m2)
log(m −1)
%
whenever a horizon n ≥2 is feasible. This is a finite-dimensional isometric obstruction, not a claim
about the speed or thermodynamics of erasure. If an initially mixed environment has rank r and output
dimension D, a Kraus expansion gives only Dr ≥Nn; its purifying stock cannot be silently declared
free. If the apparatus exports the purifier or outcome copies, those registers belong in the resource
ledger. If a fundamental nonunitary law is introduced, this dilation accounting no longer describes that
law and must not be used to rule it out.
The raw n-symbol archive has dimension mn for either realization. Its positive-word subspace
has dimension Nn, allowing an exactly reversible lossless word code of that capacity. A controller
implementing such global compression is additional circuitry; it is not produced by the rank bound.
With stationary input, the required archive entropy is
H(W1 · · · Wn) = 2 log2 m + (n −2)hm,
hm = −
X
j
T0j log2 T0j.
This follows by the chain rule from the order-two law and its uniform pair distribution. For the noiseless
trine, h3 = 1 and all Nn = 9 2n−2 positive words are equiprobable. The purifying environment for the
stationary output can have exactly this entropy; entropy in bits is not an energy estimate.
6.4
An explicitly budgeted classical comparator
For m = 3, the nine-state orthogonal-pair source achieves the exact classical minimum for this law. A
declared quantum-channel embedding of that classical update on Cm ⊗Cm is
Dj = diag(T0j, . . . , Tm−1,j),
Qj(X) = Tr1[(Dj ⊗Im)X] ⊗|j⟩⟨j|.
It preserves the same passive word law from Im2/m2. It retains second-register coherence in this
extension rather than gratuitously dephasing the entire memory. Its independent Kraus operators are
Fj,a =
q
Taj Sm(|j⟩⟨a| ⊗Im),
a ̸= j.
Thus its one-step complete-record Choi rank is m(m −1), and for n ≥2 its horizon Choi rank is
(m −1)2Nn. To see the latter, a word map has pure final memory |wn−1, wn⟩and effect proportional to
Dw1 ⊗Dw2, of rank (m −1)2; archive ranks again add. These environment counts are exact for these
specified CP updates, not a proved optimum over every nine-state classical HMM and every physical
extension of its diagonal-state behavior.
For the trine, the following ledger separates resources rather than hiding them in a single memory
number. Its dilation rows concern the specified final channel; they must not be multiplied with a
per-step memory optimum and called a simultaneously optimized closed protocol. The simple streaming
implementation uses independent fresh per-step ports; global compression needs its own controller.
18


## Source page 19

Resource, exact horizon n ≥4
Quantum shift
Canonical classical pair
Reusable causal memory
4 dimensions
9 states
Raw ordered symbol archive
3n dimensions
3n dimensions
Positive-word archive capacity
Nn = 9 2n−2
same Nn
Pure bath for the specified final com-
plete channel
Nn
4Nn
Pure bath for one specified recorded
step
3
6
Purifier of stationary mixed memory
4
9
Clock, switch routing, calibration
separately supplied
separately supplied
The purifier row refers to each stated stationary mixed-memory preparation; it is not evidence that the
two process models have the same response to arbitrary interventions on those different purifiers. Bath
ranks compare specific channels, not an optimization of all closed realizations.
For example n = 16 needs Nn = 147456 positive-word labels (18 binary storage positions suffice
for their lossless fixed-length code), despite a reusable quantum memory of dimension four. Repeated
independent per-step baths of dimension three give a simple, larger upper bound 3n; finite-horizon
Kraus compression reduces the final-channel bath requirement to Nn. Neither count is the same as a
device’s number of elementary components.
6.5
A causal-cut separation that includes correlated controllers
There is a precise sense in which the memory advantage is not an artifact of drawing a small box
around the source. At the cut between outputs two and three, define Mlive to include all jointly
history-correlated systems that can influence future source operations: memory, feedback controller,
reused environment, and any history-bearing phase or clock register. A history-bearing part of a
future tape belongs here, even if physically outside the nominal source. Independent fresh stock is a
declared preparation resource, while an append-only archive and environments never accessed again
are retained-history resources, not reusable causal memory.
Expanded causal-memory proposition.
For the exact noiseless trine four-output law, a quantum
Mlive needs dimension at least four, and a classical Mlive needs at least nine states. Both bounds are
attainable while using the explicitly budgeted fresh resources and archives above. They therefore hold
for every exact horizon n ≥4 under this interface.
Proof. Future operations, including independent fresh ancillas, define positive effects Bcd on Mlive.
The unnormalized state after outputs a, b is Aab ≥0. Hence
Hab,cd = p(a, b, c, d) = Tr(AabBcd) = TacTbd
9
.
For trine T, rank T = 3, so rank H = 9. A classical D-state cut factors H through D nonnegative
coordinates, giving D ≥9. A quantum cut has d2 ≥9, so d ≥3. To exclude d = 3, use the zeros
whenever a = c or b = d. Positive matrices with zero trace pairing have orthogonal ranges. Put
Ra = spand ran Bad and Cb = spanc ran Bcb. The nonzero range of Aab is orthogonal to Ra + Cb, hence
dim(Ra + Cb) ≤2. If one Ra has dimension two, all Cb lie in it, so every effect is supported on a
common plane; compressing all factors would give rank at most four, contradicting nine. The same
holds for a two-dimensional Cb. Otherwise all these nonzero spaces are lines. Each nonzero Bab lies in
both Ra and Cb, forcing all lines equal and rank at most one, again a contradiction. Thus d ≥4. The
two-qubit shift and nine-state pair source attain the respective bounds.
□
19


## Source page 20

Certified noisy-interval corollary.
The same expanded interface gives exact causal-cut minima
noise interval
quantum dimensions
classical states
0 ≤λ ≤3 × 10−8
4
9
7657/8000 ≤λ < 1
3
9.
For the first row use the quantitative PSD-rank exclusion proved in the main resource manuscript
and the four-dimensional shift. This companion retains the narrower rational-encoding interval in
the second row so its stated construction remains self-contained; the main manuscript extends qutrit
attainment to the larger interval beginning at λ†. For the second use the exact qutrit instrument in
Section 1; ordinary rank nine of the same four-time cut excludes a quantum dimension below three
and a classical size below nine. Fresh independent ancillas and fixed clocks still define effects on Mlive,
so including correlated controllers does not change these factorization arguments. These are exact-law
statements for n ≥4; the middle interval and minimum approximate-memory frontier are not asserted.
This is the earlier proved rank/support argument with the causal interface made explicit, not a new
lower-bound method. It closes an accounting loophole: moving history into a controller or returning
bath does not evade the bound when that system is counted in Mlive. Allowing a pre-correlated future
tape and then excluding it from Mlive would invalidate the factorization, not disprove the proposition.
Allowing coherent archive feedback changes the interface and must include the interacting archive in
the cut.
This restricted four-versus-nine separation remains useful even when common archive storage is
large. In logarithmic memory capacity it is log2(9/4) ≃1.170 bits. Adding an identical separately
budgeted storage term does not remove that difference, but the reusable-memory fraction of the total
storage can become small as n grows. It is not an optimization of total closed hardware, and no energy
or speed ordering follows.
6.6
Phase, calibration and clock accounting
The instrument is fixed at every tick. It does not call a hidden classical controller that remembers
the previous output and prepares a time-dependent phase state; the preparation and update are
already included in Kj. Nevertheless the fixed m-outcome coupler, its calibration and output ports are
resources. Increasing m does not make those resources disappear merely because the reusable memory
remains four-dimensional.
A modest symmetry result limits what phase reference is actually needed in this abstract construction.
Let U = diag(1, e2πi/m), R = U ⊗U, and let P|j⟩= |j + 1 mod m⟩. The chosen phases of Lj give
RKjR† = Kj+1, hence
V R = (P ⊗R)V.
(41)
The stationary state is invariant. The isometry therefore respects simultaneous discrete rotation of the
memory and relabelling of the ports. In particular, the common azimuth is not a separate time-varying
source variable.
There is a symmetry-preserving unitary extension with a fresh output blank |s⟩= m−1/2 P
j |j⟩,
invariant under P. To prove existence, the invariant subspace |s⟩⊗C4 and the image of V carry
equivalent representations of the finite group Cm by (41). Their orthogonal complements have the same
representation multiplicities, so choose a unitary intertwiner on each complement and combine it with
V on the input subspace. This is a finite-group constructive existence argument, not an assertion of
reference-free implementation under continuous U(1) or of a particular energy-conserving Hamiltonian.
Physical phase stability and gate precision still require calibration at the declared accuracy.
A clock supplies ticks separated by a chosen ∆t in seconds and routes the next fresh output
register. Its precision, reset and control law are independent implementation inputs. A finite routing
20


## Source page 21

register with n + 1 orthogonal positions is one possible explicitly budgeted schedule; no minimum clock
dimension or thermodynamic cost is proved. If that clock acquires history correlations used to modify
the source, it joins Mlive. An unused archival timestamp does not become hidden controller memory.
6.7
Noise, accuracy and what remains established
The exact zero pattern is load bearing. For the earlier noisy construction Eλ
j = [I −(1 −λ)nj · σ]/m
with 0 < λ ≤1, each effect has rank two. The same four-dimensional shift channel, which need not be
the minimum realization of the noisy law, then has one-step recorded Choi rank 2m and unrecorded
rank four. For n ≥2, every word is positive and the word map has pure final memory but an input
effect proportional to Eλ
w1 ⊗Eλ
w2, of rank four. Consequently its complete-channel Choi rank is 4mn,
although its stationary fixed-output state without an initial retained reference has rank only mn. This
is a concrete reason not to replace a retained-reference channel task by one fixed-input density matrix
when counting environment.
These ranks are exact channel identities, not robust physical costs at finite tolerance. At λ = 1 the
output law is IID uniform and a one-dimensional source suffices; the four-dimensional shift’s dilation
ranks are plainly not process-wide minima. The exact and finite-accuracy realization results elsewhere
in this companion must be used for the corresponding task and tolerance. No discontinuous exact rank
jump is offered as an experimentally discontinuous hardware demand.
The rational encoded-pair qutrit has a larger specified bath.
The exact rational certificate in
Section 1 establishes that all three 9-by-9 Choi matrices of its qutrit branch maps are strictly positive
throughout 7657/8000 ≤λ < 1; the Bernstein control matrices are positive definite. This independently
determines that construction’s dilation ranks, rather than borrowing the four-dimensional shift’s
formula.
If J(Φ) > 0 and J(Θ) > 0, choose c > 0 with J(Φ) ≥cI ⊗I. Complete positivity and strict
positivity of Θ(I) give
J(Θ ◦Φ) = (id ⊗Θ)(J(Φ)) ≥cI ⊗Θ(I) > 0.
Here Θ(I) > 0 follows, for example, by partially tracing a strictly positive Choi matrix. Induction
proves that every word branch of the specified qutrit source has Choi rank nine. There are 3n positive
words; orthogonal classical archive blocks therefore give exact recorded-channel Choi rank 9 3n. On
stationary input I3/3, every conditional word state is strictly positive, giving fixed-output rank 3 3n
instead.
For these specified implementations on the rational encoded-pair interval 7657/8000 ≤λ < 1, the
comparable ledger is
Same passive trine word law
Qutrit
Shift
Classical pair
Reusable memory dimension
3
4
9
One-step complete-record Choi rank
27
6
9
Horizon complete-record Choi rank, n ≥2
9 3n
4 3n
9 3n
Stationary fixed-output rank, reference omit-
ted
3 3n
3n
3n
Raw classical symbol archive
3n
3n
3n
The classical column uses the explicit orthogonal-pair CP extension above; for positive noise its effects
Dj have rank three and its word effects Dw1 ⊗Dw2 have rank nine. It is again a specified implementation,
not a universal optimum over classical physical extensions. The source with one-step rank nine and
the mixed-support history source in the main manuscript improve on this rational construction. This
table preserves the distinct, exactly specified channels above; it is not the current process-wide frontier.
21


## Source page 22

The lower memory dimension and higher minimum pure bath for these particular channels form a real
resource tradeoff. The two complete memory/bath channels are different; only the declared passive
symbol task is the same. This is not a lower bound on the bath of every possible qutrit realization,
nor a proof that the four-dimensional source minimizes total hardware. It is precisely why one should
report a resource vector before choosing a cost function. An implementation allowed only finite output
accuracy can use a different comparator, as quantified in Section 2.
The completed benefit is an explicit audit of where the earlier compression does and does not
apply: a sharp exact reusable-causal-memory separation, exact finite-horizon bath requirements for its
complete channel, a proof that finite unreset environments cannot produce indefinitely many exact
classical records in the isometric model, and a symmetry-respecting fixed implementation. No statement
here closes the measurement programme’s outstanding physical obligations or identifies a conscious
perspective.
Verification.
The historical diagnostic research3/accounting/verify_accounting.py, preserved
in the separate evidence archive, checks Kraus completeness, Choi ranks, word probabilities, conditional
states and discrete covariance. It tests noiseless grids m = 3, 4, 5 through horizons 7,5,5 respectively,
and the positive trine shifts at λ = 0.2, 1 through horizon four. The canonical classical channels
are tested separately. Numerical compositions of the qutrit certificate at ε = 0, 0.2, 0.35 through
horizon four independently check strict Choi ranks and the new tradeoff. All 7,198 checks pass; the
maximum completeness or state/probability error is 1.26 × 10−14. Exact proofs provide the universal
claims; floating-point tests diagnose implementation mistakes. These archived diagnostic counts are
not additional checks executed by the compact release’s nine-job memory reproduction command.
6.8
A conditional normal form for a mixed-support equality profile
The following reduces a candidate equality branch to a finite spectral form. It is not an existence proof
for the mixed support profiles.
Lemma.
Let Φ : M2 →M3 be CP, trace preserving, of linear rank three, with faithful Φ(I2). If two
distinct pure input rays have singular nonzero outputs, then after an invertible output congruence its
image is the full diagonal algebra. There are a density matrix ρ ≻0 and three scalars λi, at least two
distinct and of unit modulus, with |λi| ≤1, such that in a suitable input basis
Φ
 
x
y
z
w
!
= √ρ U diag(x + w + λiy +  ̄λiz)3
i=1U†√ρ.
Its Choi rank is three or four, according as the remaining scalar has unit modulus or strict modulus
below one.
Proof. The Hermitian kernel is one-dimensional and contains a nonzero traceless matrix because
the map is trace preserving. Diagonalize it. The two diagonal input projectors then have the same
output ρ, which is faithful. Writing the off-diagonal response as C gives Φ(X) = (x + w)ρ + yC + zC†.
Choi positivity is equivalent to
 
I
K
K†
I
!
⪰0,
K = ρ−1/2Cρ−1/2,
∥K∥≤1.
For a normalized pure input, its output is congruent to I + sin θ Re(eiφK). A zero eigenvalue requires
sin θ = 1 and a unit vector v with Re⟨v, eiφKv⟩= −1. Equality in the contraction and Cauchy–Schwarz
inequalities gives Kv = −e−iφv. A unit-circle eigenvector of a contraction is reducing: K†v = −eiφv,
since its saturated norm implies (I −K†K)v = 0. Distinct pure rays give distinct phases and therefore
22


## Source page 23

orthogonal reducing eigenvectors. The remaining orthogonal space is one-dimensional, so K is normal.
Diagonalizing it gives the displayed form.
Linear rank three makes the three diagonal response
functionals independent. The Choi matrix then splits into three positive 2-by-2 blocks
 1 λi
 ̄λi 1

under
congruence. Two have rank one and the third has rank one or two, proving the last statement.
□
For a non-trace-preserving branch with faithful input effect on its two-dimensional input support,
an invertible input whitening makes it trace preserving without changing ranks or distinct pure rays.
In a putative equality profile (a, b) = (1, 2), two other output planes project to distinct rays in this
branch’s input plane, and equality requires their posterior outputs to have rank two. Thus the lemma
applies to that branch. It is only a necessary normal form: its output-congruenced diagonal structure
is not literal commutativity of the physical output states, and no global full-law realization follows
from it alone.
7
Retained reference access separates two optimal passive generators
The source–readout programme already distinguishes a passive output law from an intervention or
an accessible retained reference. Here this distinction has a sharp, quantitative example even after
jointly minimizing memory and one-step pure-environment dimension. It is an explicit application of
established channel discrimination, not a new general identifiability ceiling.
Use the minimum-Kraus family, writing its parameter as h ∈(0, 2):
r(h)2 =
h3(2 −h)
2(h + 1)(3h + 2),
a(h) = 1
2

1 +
s
2 −h
3h + 2

,
t(h)2 =
h(2 −h)
2(h + 1)(3h + 2).
Its nine pair states and CP reset maps, defined in the main resource manuscript, generate the entire
stationary delayed-trine law with r = 1−λ. Each realization has reusable dimension three and recorded
one-step Choi rank nine, both minimal at the indicated parameter. Its stationary memory is I3/3. The
maximum of r(h) occurs at h∗= (1 +
√
17)/4; every interior 0 < r < rmax has two distinct parameters
on opposite sides of that maximum.
Theorem 7.1 (An exact access-dependent operational separation). Let h1 ̸= h2 have r(h1) = r(h2) > 0.
The two admitted source instruments generate identical passive classical word laws, attain the same
one-step Pareto point (d, k) = (3, 9), and have full-history cost 6 3n for n ≥2 (the one-step rank is
nine). Nevertheless their single-use pointer channels on the common qutrit input obey
1
2∥Mh1 −Mh2∥⋄= |h1 −h2|
3
.
The distance is attained either by one fixed known Fourier-basis input, or by retaining and reading
a common maximally entangled purifier of the stationary local input I3/3.
It is invisible to the
passive pointer archive alone at every finite horizon. No claim equates the two full retained quantum
instruments.
Proof. Let Pj be the three fixed orthogonal Fourier projectors, indexed once consistently with the
source covariance. The effects computed from the Choi blocks are
Ej(h) = 2 −h
6
I + h
2Pj.
This follows from the fixed phase ζ = −tω2, eigenvalues (2 −h)/6, (2 −h)/6, (1 + h)/3 and covariance
under Zj. Thus
Mh = (h/2)MP + (1 −h/2)D,
23


## Source page 24

where MP is the projective Fourier measurement with classical pointer and D(ρ) = Tr(ρ)IA/3. For
any positive joint input ρSR of trace one put σj = TrS[(Pj ⊗I)ρSR]; σj ≥0 and P
j σj = ρR. Then
X
j
∥σj −ρR/3∥1 ≤
X
j

2
3 Tr σj + 1
3
X
k̸=j
Tr σk

= 4
3.
The standard stabilization of channel trace-distance discrimination permits restriction to positive joint
inputs. Hence half the diamond distance between MP and D is at most 2/3. A Fourier eigenstate gives
deterministic versus uniform labels and attains this value. Scaling by |h1 −h2|/2 proves the theorem’s
distance.
For the common purification |Ω⟩= 3−1/2 P
i |i⟩S|i⟩R, the output pointer/reference block is Ej(h)T /3.
Its difference is (h1 −h2)(P T
j −I/3)/6. Since ∥Pj −I/3∥1 = 4/3, the sum of the three block norms
gives the same half trace distance |h1 −h2|/3. One can attain it by measuring the reference in the
conjugate Fourier basis and comparing that outcome with the pointer. All preparations, reference basis
and decoding are fixed independently of which candidate source is used. The equal passive laws and
resource counts follow from the original family theorem.
For equal prior probabilities of the two candidate generators, one use therefore achieves optimal
success probability
psucc = 1
2 + |h1 −h2|/6.
This is discrimination between two conventional quantum implementations, not a test of Shadow
Theory against standard quantum mechanics. The purifier must be physically available and measurable;
retaining an inaccessible reference does not make this decision possible. Supplying a joint purifier is an
original preparation contract shared by both models; its marginal agrees with the stationary state but
its operational access differs from a pointer-only experiment.
7.1
An algebraic pair and a reproducible certificate
Take h1 = 1, r2 = 1/20, so λ = 1 −1/
√
20. The unique root h2 ∈(3/2, 8/5) of
10h3
2 −10h2
2 −7h2 −2 = 0
is the second parameter. Indeed
r(h)2 −1
20 = −(h −1)(10h3 −10h2 −7h −2)
20(h + 1)(3h + 2)
.
The cubic changes sign across that interval and its derivative is positive there, proving the root’s
existence and uniqueness. Rational bisection certifies it without a floating-point feasibility claim. The
code also rebuilds the effects and checks the passive full-word update from the state-basis inverse, with
explicit entangled-reference and ordinary-input distance calculations. The universal conclusion follows
from the proof.
This example strengthens the concrete operational interface: equality of all passive histories and
joint dimension optimality still do not identify the generator’s reference correlations. It establishes an
access-dependent distinction between the specified generators, not an additional ontological source.
8
Current-status overlay
The analytic and rational encoded-pair constructions remain valid sufficient examples, not the best
current qutrit feasibility endpoint.
The exact dimension-three interval now starts at λ† = 1 −
24


## Source page 25

q
71 −17
√
17/4. For complete channels retaining final memory, the current universal bounds are
48, 145, 437 3n−4; the explicit mixed source at .99 attains 50, 152, 456 3n−4. Earlier specified-channel
costs remain valid for those channels, but are not universal process minima. The current one-step qutrit
optimum is nine on the certified high-noise interval. These overlays identify the current process-wide
status; historical tables continue to describe their explicitly specified channels rather than different
updated channels.
References
[1] Man-Duen Choi. Completely positive linear maps on complex matrices. Linear Algebra and its
Applications, 10(3):285–290, 1975. doi: 10.1016/0024-3795(75)90075-0.
[2] Ky Fan. On a theorem of weyl concerning eigenvalues of linear transformations I. Proceedings of
the National Academy of Sciences, 35(11):652–655, 1949. doi: 10.1073/pnas.35.11.652.
[3] Farzad Ghafari, Nora Tischler, Jayne Thompson, Mile Gu, Lynden K. Shalm, Varun B. Verma,
Sae Woo Nam, Raj B. Patel, Howard M. Wiseman, and Geoff J. Pryde. Dimensional quantum
memory advantage in the simulation of stochastic processes. Physical Review X, 9:041013, 2019.
doi: 10.1103/PhysRevX.9.041013. URL https://journals.aps.org/prx/abstract/10.1103/
PhysRevX.9.041013.
[4] Mile Gu, Karoline Wiesner, Elisabeth Rieper, and Vlatko Vedral. Quantum mechanics can reduce
the complexity of classical models. Nature Communications, 3:762, 2012. doi: 10.1038/ncomms1761.
URL https://arxiv.org/abs/1102.1994.
[5] Alex Monràs and Andreas Winter. Quantum learning of classical stochastic processes: The
completely-positive realization problem. Journal of Mathematical Physics, 57:015219, 2016. doi:
10.1063/1.4936935. URL https://arxiv.org/abs/1412.3634.
[6] Jason D. Padgett. Holographic mathematics: A dual representation of algebra, trigonometry,
probability, and calculus in quantum information holography, . Undated supplied PDF manuscript;
abstract and Sections 2–3.
[7] Jason D. Padgett. Quantum information holography, . Undated supplied manuscript; pages 64–68.
[8] Paul M. Riechers and Thomas J. Elliott. Identifiability and minimality bounds of quantum and
post-quantum models of classical stochastic processes, 2025. URL https://arxiv.org/html/250
9.03004v1. Version 1.
[9] Jeremy Rodgers. Exact markov extensions of three-time readouts: Hidden state counts, reversibility
obstructions, and nonidentifiability, 2026. Version 1.0, 6 September 2026; supplied manuscript.
[10] Jeremy Rodgers. Source–readout non-equivalence: Descent and equivariant reconstruction ob-
structions, 2026. URL https://doi.org/10.5281/zenodo.21369967.
[11] Rishi Sundar and Thomas J. Elliott. Quantum dimension reduction of hidden markov models.
Physical Review A, 113:062461, 2026. doi: 10.1103/plt9-cm1x. URL https://arxiv.org/html/2
601.16126v2. Version 2, 1 July 2026.
[12] John Watrous. The Theory of Quantum Information. Cambridge University Press, 2018. doi:
10.1017/9781316848142. URL https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf.
25
