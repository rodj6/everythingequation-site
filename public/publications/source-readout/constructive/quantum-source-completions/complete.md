# Quantum Source Completions and Memory–Environment Tradeoffs

Jeremy Rodgers. 27 October 2026.

Publication DOI: https://doi.org/10.5281/zenodo.23721088

This is the complete searchable PDF text transcription. Display geometry is preserved in the HTML vector formula panels. Linear PDF text does not encode fraction, matrix, or script topology. Consult the HTML formula rendering for exact notation.

## Source page 1

Quantum Source Completions and Memory–Environment Tradeoffs
Jeremy Rodgers
Independent Researcher
www.everythingequation.com
27 October 2026
Abstract
We quantify stationary quantum-source resources under explicit readout and retained-output
contracts. Orthogonal-current-symbol completions of stationary triple data have exact minimum
dimension equal to the sum of their complex positive-semidefinite slice ranks. For delayed phase-circle
processes we give a dimension-four emitted-symbol realization and prove noiseless optimality. The
delayed trine specialization has classical HMM minimum nine for every non-iid parameter, quantum
minimum four at sufficiently low noise and three on a certified high-noise interval. A continuous
qutrit family attains one-step recorded-channel Choi rank nine, while a four-dimensional latitude
source attains three, giving an exact two-point Pareto frontier on that interval. At noise .99, a
mixed-support qutrit source lowers complete-history Choi rank to 50, 152 and 456 3n−4 at horizons
two, three and n ≥4; universal lower bounds are 48, 145 and 437 3n−4. Full-word proofs, algebraic
CP certificates and output-specific optima separate internal memory from retained-history dilation
cost. The exact intermediate memory boundary and full-history optimum remain open. These are
operational quantum-source results under standard probabilities, not ontology or total-hardware
theorems.
1
Question, contributions and operational scope
This paper develops quantum-source constructions within Shadow Theory’s pre-existing source–readout
programme [13]. The stationary classical completion used for comparison is established in Rodgers
[12]. An observed stochastic law may admit several source realizations with different internal memories
and different retained-output costs. We study these resources separately for stationary quantum
instruments, emphasizing the delayed trine law. The results combine a general positive-semidefinite
factorization completion theorem, exact memory regimes and a two-objective memory/environment
frontier with a constructive mixed-support source. For 0 ≤λ ≤1, put Tii = λ/3 and Tij = (3 −λ)/6
for i ̸= j. The target has uniform adjacent pairs and full word law P(y1 · · · yn) = 9−1 ∏︁n−2
t=1 Tyt,yt+2.
It is the interleaving of two independent stationary chains. A source consists of a stationary density
matrix and time-homogeneous CP symbol maps whose sum is trace preserving. The emitted trit is
retained in an append-only classical archive; archive feedback, correlated future tapes and uncounted
returning controllers are excluded. All history-correlated systems accessible to future operations
belong to the reusable causal memory. The current exact results are: minimum classical HMM size
nine for every λ < 1; minimum quantum dimension four on [0, 3 · 10−8] and three on [λ†, 1), where
λ† = 1−
√︂
71 −17
√
17/4. The intermediate dimension is three or four; the iid endpoint needs dimension
one. In the admitted high-noise interval the exact one-step Pareto points are (d, k) = (3, 9) and (4, 3).
Here k is the Choi rank of the channel retaining the classical symbol and final memory, equivalently
its minimum initially pure Stinespring remainder dimension. At λ = .99 a different qutrit source
has one-step cost fifteen but lower complete-history cost, with certified bounds 48 ≤Rmin
2
≤50,
1
https://doi.org/10.5281/zenodo.23721088


## Source page 2

145 ≤Rmin
3
≤152 and 437 3n−4 ≤Rmin
n
≤456 3n−4 for n ≥4. These costs concern distinct tasks:
reusable memory, complete arbitrary-input channels retaining final memory, fixed-input marginal
states, and archive-only channels. They are not interchangeable and are not hardware, energy or
thermodynamic minima. The complete-channel statements retain arbitrary inert input references.
Initial mixed preparation and any purifier, clocks, controls and independent fresh ports remain declared
resources. Equality of passive output laws is not equality under arbitrary interventions.
Conventions and reading guide.
For Φ : Md(C) →Md(C) we use the unnormalized Choi matrix
J(Φ) = ∑︁
p,q |p⟩⟨q| ⊗Φ(|p⟩⟨q|). Its rank counts Kraus operators; the complex-linear rank of Φ counts
independent image operators. Neither is the internal Hilbert dimension d. The sector-restricted cost D
includes the orthogonal current-symbol register, whereas d need not store that symbol internally. All
trine-law and seed parameters are dimensionless; no physical time or energy scale is inferred from them.
Section 2 establishes the general completion and emitted-symbol interfaces. Sections 3 and 4
give the exact low- and high-noise memory regimes. The remaining sections compare one-step and
complete-history costs, then demonstrate access-dependent distinctions between passive-law-equivalent
sources. The technical companion retains alternative constructions, approximation statements and
additional accounting tasks.
The quantum stochastic-realization problem and memory compression have established antecedents
[7, 11, 15]; a systematic compression method for nondeterministic quantum implementations is given
in Elliott [3]. These works address general realization, representation or memory/thermal questions;
they do not by themselves give the particular delayed-trine Kraus and retained-history optima proved
here. Normal measurement-model and multi-time resource accounting are established [1, 10]. Our
contributions are the stated constructions, exact process-specific bounds and their operational separation.
Targeted literature examination does not establish publication priority. Conventional Born probabilities
are assumed; no new Born-selection, collapse, consciousness or unique-ontology claim is inferred.
2
Stationary quantum completions and the readout interface
A nonnegative stationary triple array p(i, y, j) has middle slices My(i, j) = p(i, y, j) and adjacent masses
w(i, y) = ∑︁
j p(i, y, j) = ∑︁
k p(k, i, y). The classical deterministic-readout minimum ∑︁
y rank+(My) is
an existing comparison theorem, not claimed as a new result here. The exact classical comparison is
Nmin(p) =
∑︂
y
rank+(My),
(1)
with its full stationary gluing proof established in Rodgers [12]. We give its quantum counterpart in
a distinct orthogonal-current-symbol class, then distinguish that class from general emitted-symbol
instruments.
2.1
The exact quantum completion theorem
Let p(i, y, j) be a normalized stationary triple array on a finite alphabet:
w(i, y) :=
∑︂
j
p(i, y, j) =
∑︂
k
p(k, i, y).
(2)
Omit symbols with zero stationary probability. Write rankC
psd(M) for the least d admitting d-dimensional
complex Hermitian PSD factors Mij = Tr(AiBj). Positive-semidefinite rank and its static correlation-
generation interpretation are established[4, 6]; the additional requirement below is one stationary
recurrent source, not a separate factorization for each observation.
2


## Source page 3

The declared source class has a Hilbert space H = ⨁︁
y Hy, block-diagonal memory states, and
current readout y given by its orthogonal sector. A time-homogeneous Markov step is specified by CP
maps
Φj←y : B(Hy) −→B(Hj),
∑︂
j
Φ∗
j←y(I) = I.
Reading the sector projectively does not change a block-diagonal state. The source cost is the total
Hilbert dimension D = ∑︁
y dim Hy, including its visible current-symbol register. An open Markov
channel, with fresh environment degrees of freedom at each step, is allowed explicitly. This parallels the
fresh randomness allowed in a classical stochastic Markov source; it is not a count of all environmental
or archival degrees of freedom in a closed universe.
Theorem 2.1 (Exact quantum completion with orthogonal current readout). In the declared source
class the exact minimum for the triple array is
Dmin(p) =
∑︂
y
rankC
psd(My).
(3)
An optimum can be chosen with measure-and-prepare block channels. It realizes the entire canonical
stationary order-two completion of p. Consequently, for a specified full stationary order-two law, the
same expression is its exact minimum in this class. No full-law claim for higher-order input processes
is made.
Proof. For the lower bound let τy be the stationary positive block of an arbitrary admissible source,
with ∑︁
y Tr τy = 1. Put
Ay
i = Φy←i(τi),
By
j = Φ∗
j←y(I).
Both are positive and p(i, y, j) = Tr(Ay
i By
j ). Hence each sector dimension is at least its slice’s complex
PSD rank; summation proves the bound.
For attainment choose minimum PSD factors separately in each sector. They may be normalized
without increasing their dimensions. Specifically, set Sy = ∑︁
j By
j , restrict to its support, and replace
Ay
i ↦−→S1/2
y
Ay
i S1/2
y
,
By
j ↦−→S−1/2
y
By
j S−1/2
y
on that support. Cyclicity of trace and support of every By
j preserve all pairings, while ∑︁
j By
j = I.
Thus Tr Ay
i = w(i, y). Define τy = ∑︁
i Ay
i and restrict further to its support, compressing all factors
there. Pairings and the effect sum are again preserved, and τy is now faithful. Since
Tr(By
j τy) =
∑︂
i
p(i, y, j) = w(y, j),
a zero w(y, j) implies By
j = 0 on this support. The destination matrix Aj
y also vanishes because its
trace is w(y, j).
For positive w(y, j) set
σj
y =
Aj
y
w(y, j),
Φj←y(X) = Tr(By
j X)σj
y;
(4)
set the map to zero otherwise. These are CP maps with effects By
j , so each input sector’s summed
map is trace preserving. The constructed state is stationary because
∑︂
y
Φj←y(τy) =
∑︂
y
Aj
y = τj.
3


## Source page 4

It is normalized since ∑︁
y Tr τy = ∑︁
i,y w(i, y) = 1. After any positive-probability observed pair (i, y)
the normalized memory state is exactly σy
i . Its next-output law and next state are
Pr(j | i, y) = Tr(By
j σy
i ) = p(i, y, j)
w(i, y) ,
σj
y.
The channel therefore gives, for n ≥2,
Pr(y1 · · · yn) = w(y1, y2)
n−1
∏︂
t=2
p(yt−1, yt, yt+1)
w(yt−1, yt)
.
(5)
Forbidden transitions have probability zero; no division is used along them. This is the canonical
order-two word law. Support reductions cannot strictly reduce the final dimension below a slice’s
minimum PSD rank, by the already proved lower bound. Equality follows.
The arbitrary-past quantum conditional state in this theorem need not be perfectly distinguishable
from the states induced by other pasts. That is the source of the compression. Neither exact recovery
of the past symbol nor preservation of all inaccessible purifying records is asserted.
2.2
A full-support, strictly smaller quantum realization
For a finite circular phase representation, informed by the geometric phase and angular-register
descriptions in [8, abstract and Sections 2–3] and [9, pp. 64–68], use the following quantum encoding
and symbol maps.
Let m = 3, θi = 2πi/3, ni = (cos θi, sin θi, 0), and let σ be the Pauli matrices. For a dimensionless
noise parameter 0 ≤λ < 1, define
ρi = I + ni · σ
2
,
Eλ
j = I −(1 −λ)nj · σ
3
.
(6)
The states are pure; the effects are positive and sum to identity. The probability matrix is
T λ
ij = Tr(Eλ
j ρi) = 1 −(1 −λ) cos(θi −θj)
3
=
{︄
λ/3
i = j,
1/2 −λ/6
i ̸= j.
(7)
It is symmetric doubly stochastic with eigenvalues 1, −(1−λ)/2, −(1−λ)/2. Interleave two independent
stationary T λ-chains. Their full law is
Pr(y1 · · · yn) = 1
9
n−2
∏︂
t=1
T λ
yt,yt+2,
n ≥2.
(8)
Every finite word is positive when 0 < λ < 1; the noiseless model has forbidden events Yt+2 = Yt.
Adjacent pairs are uniform for all these models.
Each triple slice is My = T λ/9. It has ordinary rank three, so its nonnegative rank is exactly three.
The quantum factors Ay
i = ρi/9, By
j = Eλ
j have size two, and PSD rank one would force ordinary rank
one. Hence Theorem 2.1 and the classical baseline give the exact comparison
Dsector = 6,
Nclassical,det = 9.
(9)
The explicit channel is Φj←y(X) = Tr(Eλ
j X)ρy with stationary blocks τy = I/6. Thus the reduced
memory is the physical state of one qubit inside each of three orthogonal current-output sectors; no
hidden classical controller remembering the preceding label is permitted in the resource count.
4


## Source page 5

For the full law, nine is also the exact minimum among all finite classical HMMs with memoryless
stochastic emissions: their past-two/future-two joint matrix factors through the hidden state, whereas
here
H(a,b),(c,d) = T λ
acT λ
bd
9
= (T λ ⊗T λ)(a,b),(c,d)
9
(10)
has rank nine. A nine-state causal-pair source attains the law. This is a use of Rodgers’s existing
Hankel-rank method, not a newly invented lower-bound method.
There is a finite-data margin. The smallest singular value of each My is (1 −λ)/18. If a normalized
triple distribution p′ satisfies TV(p′, p) < (1 −λ)/36, then each slice perturbation has operator norm
at most its entrywise l1 norm, at most 2 TV(p′, p), and every perturbed slice retains rank three.
Consequently every deterministic-instantaneous classical source reproducing p′ still needs at least nine
states. For arbitrary stochastic emissions, the four-time version follows from smin(H) = (1 −λ)2/36:
four-time TV error less than (1 −λ)2/72 retains the rank-nine lower bound. These are dimension
certificates under their respective source interfaces, not device-independent claims that an unknown
apparatus has quantum memory.
2.3
Circular grids of arbitrary resolution
For any m ≥3 use equally spaced phases θi = 2πi/m and the same pure states ρi. Define
Ej = I −nj · σ
m
,
Tij = 1 −cos(θi −θj)
m
.
(11)
The POVM is normalized because ∑︁
j nj = 0. The transition is symmetric doubly stochastic, has zero
diagonal and strictly positive off-diagonal entries, and has rank three. To check its rank explicitly,
write ci = cos θi, si = sin θi. Then
T = J −ccT −ssT
m
,
and the mutually orthogonal vectors 1, c, s have squared norms m, m/2, m/2. The three nonzero
eigenvalues are 1, −1/2, −1/2. The order-two law is m−2 ∏︁
t Tyt,yt+2. Every triple slice has PSD rank
exactly two; its exact quantum sector cost is 2m.
Proposition 2.2 (Classical sector cost grows with angular resolution). Let rm be the smallest integer
r with m ≤
(︁
r
⌊r/2⌋
)︁. Every classical deterministic-instantaneous source for the phase-circle triple law
has at least mrm states.
Proof. In any nonnegative factorization T = AB with r factors let Si = {l: Ail> 0}. If Si ⊆Sj, the
zero Tjj implies Blj = 0 for every l∈Sj, hence Tij = 0. This contradicts Tij > 0 for i ̸= j. Thus the
m supports are an antichain. To recall the counting bound without relying on a citation, a uniformly
random permutation of r elements has at most one initial segment belonging to an antichain. A set S
is such an initial segment with probability
(︁r
|S|
)︁−1. Taking expectations yields ∑︁
i
(︁r
|Si|
)︁−1 ≤1, hence
m ≤
(︁
r
⌊r/2⌋
)︁, the classical Sperner bound[14]. Apply this to every slice of (1).
Phase count m
rm
Quantum sector minimum
Classical sector lower bound
180
10
360
1800
360
11
720
3960
720
12
1440
8640
The grid sizes follow the finite angular registers in [9, pp. 64–68]; the probabilities are those of the
instrument defined here, not inferred from geometric line density. The classical values are lower bounds,
5


## Source page 6

not asserted exact nonnegative ranks. Known low-PSD-rank/high-nonnegative-rank distance geometry
already supplies the static phenomenon; the added stationary channel realizes it at every time and
proves the full observed law.
2.4
Removing the stored classical output: exactly two qubits
The sector restriction matters. A general iterated quantum instrument may emit the current output
into an external archive without preserving it in an orthogonal sector of the internal memory. In this
broader class a quantum source consists of a density matrix on Cd, CP maps Ψj whose sum is trace
preserving, and a stationary density matrix. Word probabilities are traces of successive maps. All
outputs are retained; no null, failure or loss outcome is postselected away.
Theorem 2.3 (Exact emitted-symbol instrument dimension). For every noiseless phase-circle law
(11), m ≥3, the minimum internal Hilbert dimension among stationary iterated quantum instruments
is exactly four.
Proof. For attainment use two qubits and define
Ψj(X) = Tr1[(Ej ⊗I)X] ⊗ρj.
(12)
The partial trace equals the result of sandwiching X by
√︁Ej ⊗I before tracing the first qubit, so this
is CP. Its effect is Ej ⊗I; summing the effects gives identity. On product inputs,
Ψj(ρa ⊗ρb) = Tajρb ⊗ρj.
Starting from I4/4, the first two outputs are independent uniform symbols; the conditional memory
then equals ρy1 ⊗ρy2. Every later step emits yt+2 with probability Tyt,yt+2 and shifts the two states.
This proves every finite word of the target law, with no accumulated approximation. Also
∑︂
j
Ψj(I4/4) =
∑︂
j
I2
2m ⊗ρj = I4/4,
which proves stationarity.
For the lower bound the four-time cut matrix is Hab,cd = TacTbd/m2, of rank nine. Any d-dimensional
instrument has PSD factors Hab,cd = Tr(AabBcd), where Aab is the unnormalized memory state after
emitting a, b and Bcd = Ψ∗
cΨ∗
d(I) is the effect of the next two outputs. All these factors are nonzero,
because every adjacent pair has probability 1/m2. Their real vector space has dimension at most d2;
thus d ≥3.
Suppose d = 3. The diagonal zeros of T imply zero pairing whenever a = c or b = d. Zero trace
pairing of PSD matrices implies orthogonal ranges. Put
Ra = spand ran Bad,
Cb = spanc ran Bcb.
The nonzero range of Aab is orthogonal to Ra + Cb, so dim(Ra + Cb) ≤2 for every a, b. If some Ra
has dimension two, every Cb ⊆Ra, and all effects Bcd are supported on that same two-dimensional
subspace. Compressing all factors to it gives rank H ≤4, contradicting nine. The same reasoning
excludes a two-dimensional Cb. Otherwise all these nonzero spaces are lines. Since every Bab ̸= 0 has
range contained in both Ra and Cb, all lines are equal; this would give rank at most one, another
contradiction. Therefore d = 3 is impossible, and the four-dimensional construction is optimal.
The theorem gives a completed dimension lower bound beyond the generic
√
rank H estimate.
It holds for arbitrary complex quantum instruments, not only for the particular shift update or for
6


## Source page 7

orthogonal current-symbol sectors. Its diagonal-zero hypothesis is load bearing. For the positive trine
family, the same construction with Eλ
j still gives d ≤4 and the rank argument gives d ≥3. The
following sections prove dimension four on a low-noise interval and dimension three on a high-noise
interval; the intervening boundary remains unresolved.
For m = 3 the unrestricted comparison is exactly four quantum dimensions versus exactly nine
classical HMM states. For larger m, marginalizing H over b, d gives T/m. Nonnegative rank cannot
increase under this operation, so every finite classical HMM needs at least max{9, rm} states, whereas
the quantum minimum remains four. Thus a resolution-dependent classical lower bound survives the
broader interface, although it is weaker than the sector bound. No exact classical optimum for m > 3
is claimed.
3
A quantitative positive-noise interval requiring four quantum di-
mensions
The diagonal-zero argument proves exact dimension four at zero noise. Its zeros disappear under strictly
positive trine noise, so that proof cannot simply be reused. The following quantitative bound establishes
a nonempty positive-noise interval with the same minimum dimension. It is an explicit mathematical
robustness result; the small numerical constant is not a practical apparatus noise tolerance.
For 0 ≤λ < 1, put r = 1 −λ and
T λ
ii = λ/3,
T λ
ij = 1/2 −λ/6
(i ̸= j),
Cλ = T λ ⊗T λ.
All entries and parameters are dimensionless. Multiplication by the stationary factor 1/9 does not
change PSD rank. Every three-dimensional quantum instrument reproducing the full delayed law
would give a complex Hermitian PSD factorization of Cλ of size three through its two-past/two-future
cut. The known two-qubit shift construction provides size four and reproduces the entire process, not
only this cut.
Proposition 3.1 (A positive-noise dimension-four interval). For
0 ≤λ ≤λ0 := 3 × 10−8,
the complex PSD rank of Cλ is four. Consequently the delayed trine process has exact minimum internal
quantum memory dimension four throughout this interval, among autonomous CP instruments with an
emitted classical symbol and no orthogonal current-symbol storage requirement.
Proof. The eigenvalues of T λ are 1, −r/2, −r/2. Hence Cλ has ordinary rank nine, and its second
and fifth singular values are both r/2. A PSD factorization of size d has ordinary rank at most d2,
excluding d ≤2.
Suppose a size-three factorization exists. Normalizing the sum of its row factors by congruence
gives effects Aab ≥0, ∑︁
a,b Aab = I3, and density matrices bcd ≥0, Tr bcd = 1, such that
Tr(Aabbcd) = T λ
acT λ
bd.
The normalization is legitimate: a singular sum would restrict all row factors to dimension at most two,
already contradicting ordinary rank nine. Column sums of Cλ are one, giving the density normalization.
Define positive row and column sums of the preparation states,
Ra =
∑︂
d
bad,
Qb =
∑︂
c
bcb.
7


## Source page 8

Each has trace three and operator norm at most three. Row sums of Cλ give 1 = Tr(Aab
∑︁
cd bcd) ≤
9 Tr Aab, so the largest eigenvalue of Aab is at least 1/27. Moreover
Tr[Aab(Ra + Qb)] = 2λ/3.
Evaluating on a largest-eigenvalue eigenvector of Aab therefore yields
λmin(Ra + Qb) ≤ε := 18λ
for every a, b.
(13)
Set s = 1/2000 and split into two cases.
Case 1: some Ra or Qb has second eigenvalue at least s. By symmetry take Ra. Let P project
onto its two largest eigenvectors, and let z be a unit vector in the complementary line. For each b,
choose a unit nb attaining the minimum in (13). Positivity gives ∥Pnb∥2 ≤ε/s and ⟨nb, Qbnb⟩≤ε.
After choosing the phase of nb, ∥nb −z∥≤
√︁
2ε/s. Thus
⟨z, Qbz⟩≤
(︃√ε +
√
3
√︂
2ε/s
)︃2
=: L = ε(1 +
√︂
6/s)2.
Since bcd ≤Qd, every preparation has complementary mass Tr[(I −P)bcd] ≤L. The projection/gentle
bound gives ∥bcd −PbcdP∥1 ≤2
√
L. Replacing every preparation by its two-dimensional compression
creates a real matrix C′ of ordinary rank at most four. The complete POVM {Aab} contracts the trace
norm of each Hermitian preparation difference, so every column error has l1, hence l2, norm at most
2
√
L. There are nine columns; therefore
∥Cλ −C′∥op ≤∥Cλ −C′∥F ≤6
√
L.
But the best rank-four approximation has error at least the fifth singular value r/2. This contradicts
the numerical bounds below.
Case 2: every Ra, Qb has second eigenvalue below s. Their top-eigenvector projections, denoted Pa
and Q′
b, leave residual trace below 2s. Since bab ≤Ra, Qb,
D(bab, Pa) ≤
√
2s,
D(bab, Q′
b) ≤
√
2s,
where D is half trace distance. For completeness, the pure-state upper bound D(ρ, |v⟩⟨v|) ≤
√︁
1 −⟨v, ρv⟩
follows by convexity and Jensen. Fix P0. Comparing through b0b gives D(P0, Q′
b) ≤2
√
2s, hence
D(bab, P0) ≤3
√
2s for every pair. Replacing all preparations by P0 produces a rank-one matrix C′′.
Each error column is a difference of normalized probability vectors and has TV at most 3
√
2s. For
a zero-sum real vector v, ∥v∥2
2 ≤2(∥v∥1/2)2, by separately bounding its positive and negative parts.
Thus each column has l2 norm at most 6√s, so
∥Cλ −C′′∥op ≤18√s.
This contradicts the necessary rank-one approximation error r/2.
Here are explicit conservative constants for both contradictions. Since
√
12000 < 110, the Case-1
squared error is at most
62 18λ0 1112 = 0.23952024 < 0.492,
and the Case-2 squared error is 182s = 0.162 < 0.492. Meanwhile r/2 ≥(1 −λ0)/2 > 0.49. Also
ε/s < 1 throughout the interval, justifying the eigenvector estimate. Both cases are impossible. Thus
PSD rank is at least four; the supplied two-qubit construction supplies the matching upper bound.
8


## Source page 9

Scope and benefit.
This turns the isolated zero-noise dimension obstruction into an explicit positive-
noise interval. The constants are deliberately loose; no optimal transition noise or exact middle interval
is asserted. CP instruments permit fresh environment ports and retained classical output archives.
Internal memory dimension does not count those resources or prove equality of complete microscopic
environment laws. Sources with equal complete declared symbol laws remain operationally equivalent
for that experiment family.
4
A continuous family of minimum-Kraus qutrit sources
A coordinate-plane Weyl encoding gives exact stationary qutrit sources with recorded one-step Choi
rank nine throughout an explicit noise interval. Its two real seed weights and complex phase can be
classified exactly within the minimum-Kraus subfamily. This class is not the class of all qutrit sources.
In particular, its fixed full-history cost does not preclude the mixed-support improvement constructed
below. The source laws and CP maps are defined explicitly below.
4.1
Process, resources and the exact update interface
For 0 < r < 1 define the trit transition matrix
Taj(r) =
{︄
(1 −r)/3
a = j,
(1 + r/2)/3
a ̸= j,
λ = 1 −r.
(14)
The stationary delayed-trine law is
Pr(y1 · · · yn) = 1
9
n−2
∏︂
v=1
Tyv,yv+2(r),
n ≥2,
Pr(y1) = 1/3.
(15)
It is the interleaving of two independent stationary chains. A source is a stationary density matrix
on a d-dimensional memory with time-homogeneous completely positive maps Φj, whose sum is trace
preserving. The complete output at each step is the observed classical trit. The emitted-record channel
is
A(X) =
2
∑︂
j=0
|j⟩⟨j| ⊗Φj(X),
k = rank J(A) =
∑︂
j
rank J(Φj).
Here k is the minimum pure-environment dimension for a Stinespring dilation of this complete cq
channel. A coherent emitted record is a different channel. The retained archive is external to the
reusable memory, independent fresh ports are admitted, and all reusable history-bearing controllers
belong in the source cut. This is an information-theoretic resource comparison, not a claim about
hardware dimensions, energy, preparation cost or mixed baths.
The four-symbol cut Hab,cd = TacTbd/9 has rank nine, because T has eigenvalues 1, −r/2, −r/2. A
d-dimensional quantum instrument factors this cut through a space of dimension at most d2; a classical
m-state HMM factors it through dimension m. Thus d ≥3 and m ≥9. The classical pair source attains
nine. These are standard representation-rank methods [7, 11]; our contribution is explicit completely
positive attainment with controlled environmental resources, not the rank inequality itself.
4.2
A variable seed and its Choi blocks
We use the established finite Weyl framework [5] and the standard Choi criterion for complete positivity
[2]. Let ω = e2πi/3, Z = diag(1, ω, ω2) and X|p⟩= |p+1 mod 3⟩. Choose 0 < a < 1, t > 0, t2 < a(1−a)
9


## Source page 10

and initially set ζ = −tω2 = teiπ/3. Define
χ =
⎛
⎜
⎝
0
0
0
0
a
ζ
0
 ̄ζ
1 −a
⎞
⎟
⎠,
Suv = ZuXvχX−vZ−u.
(16)
Here u, v are trit indices and a is the real seed weight. Write
q = a(1 −a),
D = 1 −3q > 0,
Db = Xb diag(0, a, 1 −a)X−b,
Fb = |b + 1⟩⟨b + 2|.
Then
Suv = Dv + ζω−uFv +  ̄ζωuF †
v .
The three Dv span the diagonal matrices: their coordinate determinant is a3 + (1 −a)3 = D. The
nonconstant Fourier components in u span the six Fv, F †
v . Therefore the nine states form a Hermitian
basis. Each has rank two, with support on the plane missing |v⟩, and ∑︁
uv Suv = 3I.
Define the unique linear maps on this basis by
Φj(Suv) = Tuj(r)Svj.
(17)
Equivalently,
Φj(Dv) = Svj/3,
(18)
Φj(Fv) = −rωj
6ζ Svj,
Φj(F †
v ) = −rω−j
6 ̄ζ Svj.
(19)
These identities specify the map on every qutrit operator, including coherences. They are not merely
an update on a finite list of states. Covariance gives Φj = AdXj ◦Φ0 ◦AdZ−j.
Use J(Φ) = ∑︁
pq |p⟩⟨q| ⊗Φ(|p⟩⟨q|). In the input Fourier basis fk = 3−1/2 ∑︁
p ωpk|p⟩, the nonzero
part of J(Φ0) consists of three blocks on span{fk ⊗1, fk+1 ⊗2}:
B0 =
(︄
ae−
c0
 ̄c0
(1 −a)e−
)︄
,
B1 =
(︄
ae−
c1
 ̄c1
(1 −a)e+
)︄
,
B2 =
(︄
ae+
c1
 ̄c1
(1 −a)e−
)︄
,
(20)
e−= 1
3 −r
6t,
e+ = 1
3 + r
3t,
L = (a −1) + (2a −1)ω,
(21)
c0 = −ω2(Dr + tL)
3D
,
c1 = −ω2(−Dr + 2tL)
6D
.
(22)
All other output-|0⟩directions vanish. Since |L|2 = D and Re L = −1/2,
|c0|2 = Dr2 −rt + t2
9D
,
|c1|2 = Dr2 + 2rt + 4t2
36D
.
Consequently the two distinct determinants are
d0 = q(2t −r)2
36t2
−Dr2 −rt + t2
9D
,
(23)
d1 = d2 = q(2t −r)(t + r)
18t2
−Dr2 + 2rt + 4t2
36D
.
(24)
These are derived by exact change of basis from (19); the verification code independently reconstructs
the entire Choi matrix.
10


## Source page 11

4.3
All three blocks have rank one on a continuous curve
Theorem 4.1 (A continuous minimum-Kraus construction). For 0 < h < 2, set
q =
h
3h + 2,
a = 1
2
⎛
⎝1 +
√︄
2 −h
3h + 2
⎞
⎠,
t2 =
h(2 −h)
2(h + 1)(3h + 2),
r = ht.
(25)
The states and maps above are a stationary qutrit instrument generating every finite word of (15).
Each branch has Choi rank three and the complete emitted-record channel has rank nine. The attained
processes include every
0 < r ≤rmax :=
√︂
71 −17
√
17
4
= 0.2381181907818797 . . . ,
λmin := 1 −rmax = 0.7618818092181203 . . . ≤λ < 1.
(26)
The minimum internal memory dimension is exactly three throughout this interval. The iid endpoint
λ = 1 has minimum dimension one and is not included in that assertion.
Proof. For 0 < h < 2, 0 < q < 1/4 and t2/q = (2 −h)/[2(h + 1)] < 1. Thus all seed states are positive
of rank two and their basis is nonsingular. Also D = 2/(3h+2), e−= (2−h)/6 > 0, e+ = (1+h)/3 > 0.
Multiplication of (24) by 36Dt2 and substitution r = ht reduce the determinant equations to
qD(2 −h)2 = 4t2(Dh2 −h + 1),
2qD(2 −h)(1 + h) = t2(Dh2 + 2h + 4).
Both are identities under (25). Every block therefore has positive diagonal and zero determinant: it is
positive of rank one. Covariance transfers this to every branch, proving complete positivity and the
stated Choi ranks.
Trace preservation follows on the basis Suv from ∑︁
j Tuj = 1.
With initial state I/3, direct
application gives
Φj(I/3) = Dj/3,
Φk(Dj) = Sjk/3,
∑︂
j
Dj = I.
The initial state is stationary, and the first two symbols have probability 1/9 and normalized posterior
state Sjk. Thereafter (17) supplies exactly the prescribed conditional probability and posterior state at
every step. Induction proves the full word law, not only its first few marginals.
Finally
r(h)2 =
h3(2 −h)
2(h + 1)(3h + 2),
d
dhr(h)2 = −3h2(h + 2)(2h2 −h −2)
2(h + 1)2(3h + 2)2
.
The unique maximum in (0, 2) is at h∗= (1 +
√
17)/4, where r2 = (71 −17
√
17)/16. On (0, h∗]
the function is strictly increasing from zero, so every 0 < r ≤rmax has a unique parameter in this
subinterval. A bracketed root finder constructs it. The observed rank-nine cut proves that the admitted
dimension-three realization is minimal.
There are exactly three Kraus operators per branch. Explicitly, for the positive rank-one kth block
(︂αk ck
 ̄ck βk
)︂
, its Choi vector is
vk = √αk fk ⊗|1⟩+
 ̄ck
√αk
fk+1 ⊗|2⟩.
Unvectorize vk to obtain one Kraus operator; rotate by covariance for other emitted symbols. Their
completeness follows from the trace-preserving proof. This is a defined admitted quantum interaction,
preparation and readout law using standard Born-form instruments; it does not derive the Born rule or
provide an autonomous collapse mechanism.
11


## Source page 12

4.4
The complete arbitrary-phase class and a sharp scoped boundary
The family is not merely a numerical choice among unspecified phases. Replace ζ by x+iy, t2 = x2 +y2,
while retaining 0 < a < 1 and 0 < t2 < q. The same exact-reset definition remains unique. The three
blocks now have diagonals aek, (1 −a)ek+1, cyclically, where
e0 = 1
3 −rx
3t2 ,
e1 = 1
3 + r(x −
√
3y)
6t2
,
e2 = 1
3 + r(x +
√
3y)
6t2
.
(27)
Their upper off-diagonal entries are
ck = t2M/D + rGk
6 ̄ζ
,
M = −1 + i
√
3(2a −1),
(G0, G1, G2) = (x +
√
3y, −2x, x −
√
3y).
(28)
These formulas follow by the same direct Fourier transform, not by imposing complete positivity after
a fit.
Lemma 4.2 (No singular one-step effect in this Weyl class). At r > 0, every completely positive
exact-reset source of this class has strictly positive effects Ej = Φ∗
j(I).
Proof. The effects have eigenvalues e0, e1, e2. If e0 = 0, positivity of the blocks forces c0 = c2 = 0. Their
difference is r
√
3y/(3 ̄ζ), so y = 0. Then e0 = 0 gives r = x > 0. The numerator of c0 is t2M/D + rx.
Its imaginary part vanishes only if a = 1/2, in which case D = 1/4, t2 = x2 and the numerator is
−4x2 + x2 = −3x2 ̸= 0, a contradiction. For a zero e1 or e2, the two forced zero off-diagonals instead
give y = ∓
√
3x, r = −2x = t > 0 and again the numerator t2M/D + t2. Its imaginary part forces
a = 1/2 and its real part is −3t2 ̸= 0. Positive semidefiniteness of the effects therefore makes them
positive definite.
Theorem 4.3 (Exhaustion of the minimum-Kraus Weyl class). Among all nonsingular rank-two
coordinate-plane Weyl exact-reset sources above, with arbitrary seed diagonal weight and phase, branch
Choi rank three is attained exactly by (25), up to phase rotation by 2π/3 and exchange of a with 1 −a.
Thus (26) is the sharp noise boundary within this minimum-Kraus Weyl class. It is not established as
the boundary for arbitrary qutrit sources, nor for members of the same Weyl class with higher Kraus
rank.
Proof. Put ζ = teiφ, h = r/t, v = t2, and
u0 = x/t,
u1 = (−x +
√
3y)/(2t),
u2 = (−x −
√
3y)/(2t).
These are three cosines spaced by 2π/3; their sum is zero and their squares sum to 3/2. By Lemma 4.2,
every block has positive diagonal and hence rank at least one. Choi rank three therefore means that all
three block determinants vanish. Directly from (27)–(28), each determinant, indexed by its opposite
cosine, has the form
9d(u) = A + Bu + Cu2,
A = q(1 −3h2/4) −v/D,
B = h(q −v/D),
C = h2(q −v).
(29)
If all three cosines are distinct, a quadratic zero at all three is zero identically. As h > 0, B = C = 0
implies v = qD = q, impossible for q > 0 and D = 1 −3q < 1. Thus two cosines coincide and φ is an
integer multiple of π/3.
For an even multiple the cosine set is {1, −1/2, −1/2}. Positivity of the effect requires h < 1.
Eliminating v from d(1) = d(−1/2) = 0 gives q = h/(3h −2); the excluded factors are h = 0, q = 0 or
q = 1/3. For 0 < h < 1, this value is either nonpositive or exceeds 1/4. Thus it cannot be a seed with
0 < q ≤1/4.
For an odd multiple the cosines are {−1, 1/2, 1/2}. Positive effects require 0 < h < 2. Elimination
instead gives q = h/(3h + 2), and either remaining determinant yields v = h(2 −h)/[2(h + 1)(3h + 2)].
These are precisely (25). There are no omitted solutions at h = 2: an effect would be singular, already
excluded. The maximum of r on this curve was proved in Theorem 4.1.
12


## Source page 13

4.5
What the improved source does and does not settle
For every member of this class, effects are positive definite and every pair posterior has rank two. With
Fjk = Φ∗
j(Ek), Ek ⪰ckI for some ck > 0, so Fjk ⪰ckEj ≻0. Basis-complete reset implies
ΦkΦj(A) = Tr(FjkA)Sjk
on all M3.
Therefore every length-n ≥2 word branch has Choi rank rank Fjk rank Slm = 3 · 2 = 6; all intervening
transition weights are positive. The complete n-record cq channel has rank 6 3n. For the single
stationary preparation its output state instead has rank 2 3n. These are different operational tasks.
This remains true for arbitrary phases and higher branch Kraus ranks in this coordinate-plane class.
Consequently phase and diagonal freedom can remove one-step excess without reducing the globally
compressed finite-horizon channel below 6 3n. In particular it cannot improve its finite-horizon cost
merely by changing these seed parameters. Any reduction below 6 3n requires a different encoding.
The stronger universal lower bound 437 3n−4 for n ≥4, proved in Section 8.5, leaves a gap below this
construction; in particular the simpler 4 3n bound is not attainable at those horizons.
The general result in Appendix A that each branch of a minimal qutrit source for this process
has Choi rank at least three makes k = 9 optimal among all qutrit realizations, not just this ansatz.
Combined with the pure-latitude two-qubit source of (d, k) = (4, 3) and the three-output floor k ≥3,
the one-step Pareto frontier is now exactly {(3, 9), (4, 3)} throughout (26). This invocation uses the
full CP rank lemma in Appendix A; it is not derived from the more limited exhaustion theorem above.
The algebraic identities and all-word induction, rather than finite numerical fits, establish the
result. The singular endpoints h = 0, 2 are not admitted finite encodings. No global monotonicity of
the unrestricted qutrit-admissible set is asserted.
5
The exact memory boundary remains partially open
Let F3 ⊂[0, 1] be the noise parameters admitting a stationary qutrit source with the full word law.
This set is compact: three positive 9 × 9 Choi matrices with summed partial trace I form a compact
set, as do initial density matrices. Stationarity and every finite-word equality are continuous closed
constraints. Their intersection is closed in that compact parameter space, and its projection to λ is
compact. The explicit high-noise family makes it nonempty; the low-noise exclusion shows that its
attained minimum λc lies in (3 · 10−8, λ†]. Below λc, four dimensions are necessary and sufficient; at
λc the rank-nine cut makes the minimum three. This does not prove F3 is an interval. Adding noise
to emitted symbols need not preserve the delayed-process family, so global monotonicity cannot be
inferred that way.
6
A four-dimensional source attaining the recorded-channel floor
Phase-enhanced pure-state stochastic encodings have established antecedents. The following explicit
specialization realizes the delayed-trine law while attaining the smallest possible recorded-channel rank.
It supplies the four-dimensional endpoint of the Pareto comparison.
For r = 1 −λ, z =
√
1 −r2 and θj = 2πj/3, define
|lj⟩=
√︃1 + z
2
|0⟩+ eiθj
√︃1 −z
2
|1⟩,
|ej⟩= (|0⟩−eiθj|1⟩)/
√
2.
The rank-one effects Ej = (2/3)|ej⟩⟨ej| sum to identity. With ρj = |lj⟩⟨lj| their response is
Tr(Ejρi) = 1 −r cos(θi −θj)
3
= Tij.
13


## Source page 14

On two qubits let S swap factors and put
Kj = S
(︁√︂
2/3|lj⟩⟨ej| ⊗I
)︁,
Φj(X) = KjXK†
j.
Then ∑︁
j K†
jKj = I4 and
Φj(ρa ⊗ρb) = Tajρb ⊗ρj.
Let τ = 1
3
∑︁
j ρj = (I + zσz)/2. The stationary preparation is τ ⊗τ. Since Tr(Ejτ) = 1/3, the first
two emitted symbols are independent uniform trits; thereafter the displayed update proves every finite
word of the delayed law by induction. This stationary preparation differs from that of the qutrit source
and is explicitly budgeted.
Each symbol has one nonzero Kraus operator, so the complete registered one-step channel has
Choi rank exactly three. No registered three-symbol channel with three nonzero outputs can have
smaller rank, since its orthogonal output blocks each contribute at least one. At 0 < λ < 1 all words
are positive and every word Kraus operator is rank one after two steps. The full registered n-step
channel therefore has Choi rank 3n for n ≥2, attaining the alphabet-imposed floor with retained final
memory. It streams with one fresh three-level record port and one fresh three-level record-copy bath
per step; old baths never return. These resources are not an uncounted fresh source or a correlated
tape. The initial mixed preparation and its rank-four purifier are separate stock.
For λ = 0 the exact-law support floor changes to 9 2n−2. At λ = 1 the process is iid and memory
one suffices; this redundant four-dimensional implementation is not a memory optimum. All claimed
two-point frontiers exclude that iid endpoint. A coherent archive or an initially mixed bath defines a
different optimization task.
7
Universal qutrit lower bounds
7.1
Process, observability and the complete-channel task
Let 0 < λ < 1, r = 1 −λ, and
Taa = λ/3,
Tab = (3 −λ)/6 (a ̸= b).
The stationary delayed-trine law is
P(w1 · · · wn) = 1
9
n−2
∏︂
t=1
Twt,wt+2,
n ≥2.
All words are positive. Let CP maps Ψj : M3 →M3, with ∑︁
j Ψj trace preserving, and stationary
τ realize this entire law. Write σab = 9ΨbΨa(τ) for the normalized pair state, Ej = Ψ∗
j(I), and
Fab = Ψ∗
aΨ∗
b(I).
The eigenvalues of T are 1, −r/2, −r/2. Consequently the two-past/two-future matrix
Hab,cd = 1
9TacTbd = 1
9 Tr(σabFcd)
has ordinary rank nine. The nine pair states and nine pair effects are therefore separately bases of
the Hermitian qutrit operator space. The same cut rules out internal dimension below three, so every
admitted qutrit realization in this parameter range is automatically memory-minimal; this is not an
extra restriction on the source class. In particular τ = 1
9
∑︁
ab σab is faithful.
The next-two probabilities after any longer history ending in b, j agree with those after b, j. Since the
future-pair effects span the entire operator space, these predictive equalities force actual memory-state
equalities. Thus
Ψj(σab) = Tajσbj,
ΨkΨj(X) = Tr(FjkX)σjk.
(30)
14


## Source page 15

Every single branch has linear rank three: its image is precisely the three-dimensional span of
{σbj : b = 0, 1, 2}. This observable-state argument does not permit an extra inaccessible history variable
to be added to a nominal three-dimensional source.
For a finite horizon define the complete classical-record channel
Cn(X) =
∑︂
w
|w⟩⟨w|A ⊗Ψw(X),
Ψw = Ψwn · · · Ψw1.
Its output retains final memory and the classical word archive, as well as an arbitrary inert reference
to the input. Put Rn = rank J(Cn). This is the minimum initially pure Stinespring bath dimension for
this specified final channel. It is not a peak-hardware count or a product of independently minimized
time cuts.
The one-step analysis’s universal one-step bound remains applicable: a CP qutrit map of linear
rank three needs at least three Kraus operators, so R1 ≥9. The full elementary proof is reproduced in
Appendix A; the general apparatus sum-of-Kraus-ranks rule is established measurement-model theory.
The present improvement uses additional dynamics and support geometry, beyond that one-step lemma.
7.2
A rank-three CP map cannot make a rank-two input pure
Lemma 7.1 (No plane-to-ray output at linear rank three). Let Φ : M3 →M3 be CP with complex-linear
rank three. If X ≥0, rank X ≥2, and Φ(X) ̸= 0, then rank Φ(X) ≥2.
Proof. If X is faithful and its output is pure, positivity places the image of every Kraus operator on
the same output line; the entire map then has rank one. It remains to treat a rank-two input supported
on a plane P. Suppose its output lies on the ray v. Each Kraus operator maps all of P into that ray.
Choose u orthogonal to P and a basis p1, p2 of P. The responses on PBP are multiples of V = |v⟩⟨v|,
and the remaining responses are
W = Φ(|u⟩⟨u|) ≥0,
Ci = Φ(|pi⟩⟨u|) = |v⟩⟨zi|,
C†
i .
The nonzero pure response implies V belongs to the image. If the whole output support is the line v,
the map has rank one. Otherwise W has a nonzero positive block on v⊥, since it is the only response
capable of supplying such a block. If some zi has a component on v⊥, the two cross directions Ci, C†
i ,
modulo V , are independent; their opposite off-diagonal blocks distinguish them. Together with V and
W they give at least four independent image directions. If no zi has such a component, the image is
contained in span{V, W} and has rank at most two. Neither alternative has rank three.
The missing rank is substantive: CP maps of linear ranks two and four can both collapse a positive
plane input to a ray. The code gives explicit examples. A rank-three map with two-dimensional input
and output supports also exists, so one cannot simply declare all branch supports faithful.
Corollary: every pair state and effect has rank at least two.
The first-symbol state ρa = 3Ψa(τ)
has the same support as Ψa(I) because τ is faithful. That support cannot be a line, as the branch has
linear rank three. Hence rank ρa ≥2, and the lemma applied to Ψb(ρa) proves
rank σab ≥2
for every a, b.
(31)
For the effects, use the stationary adjoint reverse instrument
 ̃︁Ψj(X) = τ 1/2Ψ∗
j(τ −1/2Xτ −1/2)τ 1/2.
It is CP, its summed map is trace preserving and stationary at τ, and its word probabilities are the
reversed original word probabilities. Since T is symmetric, it realizes the same delayed-trine law. Its
15


## Source page 16

pair state for b, a is 9τ 1/2Fabτ 1/2. Congruence preserves rank, so applying (31) to this qutrit source
gives
rank Fab ≥2
for every a, b.
(32)
This reverse is a constructed CP realization; microscopic time-reversal symmetry is not assumed.
After two steps each word map in (30) is measure-and-prepare. For longer words its input effect is
a positive scalar times Fw1w2, and its output state is σwn−1wn. Its Choi rank is their rank product, at
least four. Therefore
Rn ≥4 3n
(n ≥2).
This conclusion applies word by word and already holds at horizon two.
7.3
Support incidence and preliminary horizon estimates
Let Qj = ran Ψj(I) and Pj = ran Ej. Their dimensions are two or three; an input or output support of
dimension one would give branch rank at most one. Let
A = {j : dim Qj = 3},
B = {j : dim Pj = 3},
a = |A|, b = |B|.
Pair states in column j are supported on Qj, and pair effects in row j are supported on Pj. No two
two-dimensional output supports are the same plane, because six independent pair states cannot all lie
in its four-dimensional Hermitian operator space. The analogous input-plane statement follows from
independence of the pair effects.
Suppose Qj and Pk are both planes. If their overlap projection Pk|Qj has rank two, compression by
this invertible 2-by-2 matrix induces an invertible map on the four-dimensional plane-operator space.
The composition ΨkΨj then factors through two maps of rank three and an invertible map on that
four-dimensional space. Sylvester’s rank inequality gives composition rank at least 3 + 3 −4 = 2,
contradicting (30). Thus the projection has rank one, or equivalently
ker Ek ⊆Qj
whenever dim Pk = dim Qj = 2.
(33)
Two distinct output planes intersect in a line. They cannot contain two distinct input-kernel
lines. Therefore there cannot be at least two planes on both sides: a ≤1 and b ≤1 are impossible.
There is a further extreme-case obstruction. If all three input supports are planes (b = 0) and any
output plane exists, all three input-kernel lines lie in that output plane. Their orthogonal input planes
share a common line L. Hermitian operators supported on three planes sharing L span at most eight
dimensions: one for the projector onto L, four for cross terms between L and L⊥, and at most three
for the remaining plane directions. This contradicts the nine independent effects. Hence b = 0 forces
a = 3. The dual argument gives a = 0 ⇒b = 3. These obstructions imply the necessary condition
a + b ≥3.
(34)
No sufficiency or CP attainability is claimed for a support pattern satisfying this inequality. At least
three of the six branch input/output support matrices are faithful. The argument is independent of
any cyclic covariance.
Put Sσ = ∑︁
ij rank σij and SF = ∑︁
ij rank Fij. If i ∈A, the first-symbol state ρi is faithful; its
output under Ψj has support exactly Qj. Thus σij has rank three whenever i, j ∈A. Similarly Fij has
rank three whenever i, j ∈B, since a faithful Ej satisfies Ψ∗
i (Ej) ≥cEi. Therefore
Sσ ≥18 + a2,
SF ≥18 + b2.
(35)
For n ≥4 the initial and final pairs can be freely combined, giving the exact identity
Rn = 3n−4SF Sσ.
16


## Source page 17

The minimum allowed product in (35) under a + b ≥3 is 19 · 22 = 418. Thus
Rn ≥418 3n−4
(n ≥4).
(36)
The use of branch support geometry strengthens a bound based only on individual pair ranks. The
pure-output argument below gives the sharper coefficient 437.
At the shorter horizons let h = |A ∩B|. Counting the same forced rank three pairs in a word gives
R2 ≥36 + 2a2 + 2b2 + h2,
R3 ≥108 + 6a2 + 6b2 + abh.
Minimizing with a + b ≥3 and h ≥max{0, a + b −3} yields
R2 ≥46,
R3 ≥138.
(37)
For example the boundary profiles give the following relaxed minima:
(a, b)
R2 lower bound
R3 lower bound
SσSF lower bound
(0, 3) or (3, 0)
54
162
486
(1, 2) or (2, 1)
46
138
418
The finite enumeration is reproduced exactly with integer counts in the code; the constraints are
necessary, not constructions of the mixed profiles.
Equality in (36) would require mixed profiles (a, b) = (1, 2) or (2, 1) with rank sums (19, 22) or its
reverse. The construction in the main text realizes (19, 24) and improves the attainable coefficient to
456 at λ = .99; the new main-text obstruction raises the lower coefficient to 437; attainment of that
value remains unresolved.
8
A mixed-support qutrit source with lower complete-history cost
Mixed input/output support profiles are compatible with a completely positive, stationary, full-law
source. At λ = 99/100 the construction below has one faithful output branch and two faithful input
branches, and generates the entire delayed-trine law. Its complete retained-memory/classical-history
channel has
R2 = 50,
R3 = 152,
Rn = 456 3n−4
(n ≥4).
The coordinate-plane Weyl sources attain 54, 162, 486 3n−4 instead. This reduces the long-horizon
coefficient by 30/486 = 5/81, about 6.173%. A separate universal obstruction below raises the lower
coefficient from 418 to 437, leaving the interval [437, 456]. The specified source uses fifteen one-step
Kraus operators, compared with the separate optimum nine: the improvement is in the complete final
channel task, not in every resource simultaneously.
8.1
Task and baseline identities
Write Φj : M3(C) →M3(C) for autonomous CP symbol maps, with ∑︁
j Φj trace preserving and
stationary preparation τ. The target transition matrix and stationary word law are
Taa = λ/3,
Tab = (3 −λ)/6 (a ̸= b),
P(w1 · · · wn) = 1
9
n−2
∏︂
t=1
Twt,wt+2.
17


## Source page 18

All symbols range over {0, 1, 2}. At the parameter considered here, Taa = 33/100 and Tab = 67/200 for
a ̸= b. The complete channel is
Cn(X) =
∑︂
w
|w⟩⟨w|A ⊗Φw(X),
Rn = rank J(Cn).
It retains final memory and the classical archive, including any inert input reference. Rn is the minimum
pure Stinespring remainder dimension for this specified final channel, rather than peak causal hardware
or the number of append-only records. The comparisons below use this same task and the same
three-dimensional internal input/output type.
For a full-law minimal qutrit source the basis-complete reset proof establishes that the nine
normalized pair states σab are an operator basis and
Φj(σab) = Tajσbj,
ΦkΦj(X) = Tr(FjkX)σjk,
Fjk = Φ∗
jΦ∗
k(I).
(38)
Consequently, with sab = rank σab and fab = rank Fab,
R2 =
∑︂
ab
sabfab,
R3 =
∑︂
abc
fabsbc,
Rn = 3n−4
(︄∑︂
ab
sab
)︄(︄∑︂
ab
fab
)︄
(n ≥4).
(39)
The final identity counts freely chosen first/last pairs; the intervening strictly positive weights do not
change Choi ranks. We explicitly verify (38) for the source below, rather than assuming that a PSD
factorization alone yields a recurrent source.
8.2
Explicit algebraic source
Let (e0, e1, e2) be an orthonormal qutrit basis and ω = (−1 + i
√
3)/2. Set
p = 32
35,
c = 7
20,
u1 = e1 −e2
√
2
,
u2 = e1 −ωe2
√
2
.
The two output planes are Qb = span{e0, ub}, b = 1, 2. Define the unit vectors and their projectors
w1 =
√︃3
35e0 +
√︃32
35e1,
w2 =
√︃3
35e0 −
√︃32
35e1,
w3 = e2,
Wl = |wl⟩⟨wl|.
The pair states in column zero are
σ00 = W1 + W2 + W3
3
,
σ10 = W2 + W3
2
,
σ20 = W1 + W3
2
.
(40)
Put q0 = 33/35 and q1 = q2 = 67/70. The remaining states are
σab = (1 −qa)|e0⟩⟨e0| + qa|ub⟩⟨ub| + zab|e0⟩⟨ub| + zab|ub⟩⟨e0|,
b = 1, 2.
(41)
Here zab =
√
2(Aab + Babω), and all coefficients are exact:
(a, b)
104Aab
104Bab
(0, 1)
104
−112
(0, 2)
319
226
(1, 1)
−439
−1028
(1, 2)
−299
54
(2, 1)
269
597
(2, 2)
1119
714
18


## Source page 19

All source matrices have entries in the algebraic field K = Q(
√
6, ω): the
√
2 in z cancels the denominator
of ub, and w1, w2 projector cross terms are ±4
√
6/35.
Let vec stack matrix rows consistently, and form the nine-by-nine matrices
S:(a,b) = vec σab,
(Bj):(a,b) = Taj vec σbj,
with columns indexed lexicographically by (a, b) ∈{0, 1, 2}2. Define the entire arbitrary-input maps by
vec Φj(X) = BjS−1 vec X.
(42)
The inverse exists by the exact certificate. Equation (42), together with the small rational table,
specifies each map exactly and independently of horizon.
The first branch has a direct measure–prepare realization.
Let vl = (e1 +ωle2)/
√
2, l = 0, 1, 2.
Then
Φ0(X) = 2c
3
2
∑︂
l=0
⟨vl|X|vl⟩Wl+1,
E0 = Φ∗
0(I) = c
(︁|e1⟩⟨e1| + |e2⟩⟨e2|
)︁.
(43)
The three Kraus operators are
√︁
2c/3|wl+1⟩⟨vl|. Their vectorizations are independent because the wl
are independent. Thus this branch has Choi rank exactly three, plane input support and full output
support. The antipodal relations ⟨v0|u1⟩= 0 and ⟨v1|u2⟩= 0 explain the two rank-two states σ10, σ20,
while the common entrance line e0 is killed. This gives a concrete mixed-support branch mechanism.
8.3
Exact certificate and full-law proof
Lemma 8.1 (Exact algebraic admissibility). For the explicit data above, S is nonsingular; all nine
σab are positive semidefinite of trace one. The maps in (42) are CP. Branch zero is precisely (43);
branches one and two have Choi matrices positive definite on C3 ⊗Q1 and C3 ⊗Q2, respectively, and
zero on the orthogonal output complements. Their Choi ranks are six each.
Certificate verification. The supplied exact verifier certifies this lemma with arithmetic in Q(
√
6, ω),
not floating-point eigenvalue signs.
It checks nonsingularity, symbolic equality with (43), exact
Hermiticity/support and positive leading principal minors of the two six-dimensional Choi compressions.
State positivity follows from qa(1 −qa) −|zab|2 > 0 for the six plane states, and from independence
of the explicit wl in (40). All certificate values and verification instructions accompany the source.
Floating-point reconstruction, useful only as a diagnostic, gives a smallest supported Choi eigenvalue
approximately 3.8332 × 10−4. This diagnostic is not used to establish positivity.
Theorem 8.2 (Stationary full-word attainment at λ = 99/100). The maps in (42), initialized at
τ = 1
9
∑︁
ab σab, generate every finite word of the stationary delayed-trine process at λ = 99/100.
Proof. CP is supplied by the certificate lemma. On each basis state,
Tr
∑︂
j
Φj(σab) =
∑︂
j
Taj = 1 = Tr σab.
Since the states are an operator basis, the summed map is trace preserving on all inputs. The initial
state is faithful because it includes a positive multiple of the faithful σ00. Double stochasticity of T
gives
∑︂
j
Φj(τ) = 1
9
∑︂
abj
Tajσbj = 1
9
∑︂
bj
σbj = τ.
19


## Source page 20

Moreover
Φj(τ) = 1
9
∑︂
b
σbj,
ΦkΦj(τ) = 1
9
∑︂
b
Tbkσjk = 1
9σjk.
Every adjacent pair therefore has probability 1/9 and the designated posterior state. Repeatedly
applying the exact basis relation Φj(σab) = Tajσbj yields the stated product for all longer words. It
also proves (38) on each basis operator and hence on arbitrary operators. No fitted finite word list is
used to infer the full law.
8.4
Exact ranks and improved horizon boundary
Theorem 8.3 (Attainable mixed-support resources). This fixed source has
[sab] =
⎛
⎜
⎝
3
2
2
2
2
2
2
2
2
⎞
⎟
⎠,
[fab] =
⎛
⎜
⎝
2
2
2
3
3
3
3
3
3
⎞
⎟
⎠.
In particular Sσ = 19, SF = 24, branch support counts (a, b) = (1, 2), and one-step recorded-channel
Choi rank k = 15.
Proof. The state ranks follow from the certificate lemma and (40). Branches one and two have full
input support because their supported Choi matrices are strictly positive; their output supports are
exactly Q1, Q2. Thus E1, E2 are faithful, whereas E0 = cP has plane support P = span{e1, e2}. For
every k, (43) gives
F0k = 2c
3
∑︂
l
⟨wl+1|Ek|wl+1⟩|vl⟩⟨vl|.
All three coefficients are positive: for k = 0 their weights are cp, cp, c, and for k = 1, 2 positivity follows
from faithfulness. Therefore every F0k has rank two on P. For j = 1, 2 and each nonzero input vector
x, strict Choi positivity on C3 ⊗Qj implies ⟨x|Φ∗
j(Ek)|x⟩> 0 whenever the compression of Ek to Qj
is nonzero and positive semidefinite. That compression is faithful for k = 1, 2, and nonzero rank one
for k = 0. Hence all six Fjk are faithful. Finally the Choi supports of the three classically recorded
branches are orthogonal, so their ranks sum to 3 + 6 + 6 = 15.
Substituting these ranks into (39) gives the claimed exact 50, 152, 456 3n−4. Together with the
universal bounds, the improved attainable intervals at this parameter are
48 ≤Rmin
2
≤50,
145 ≤Rmin
3
≤152,
437 3n−4 ≤Rmin
n
≤456 3n−4 (n ≥4).
The old relaxed profile (Sσ, SF ) = (19, 22) is excluded by the universal theorem below. Attainment of
the improved relaxed profile (19, 23), or its reverse, remains open. Our source has one further faithful
effect beyond that new bound. At n = 4 the final certified upper-minus-lower gap is nineteen.
Local persistence, with no claimed certified endpoints.
For λ near 99/100, replace
p ↦−→4λ −3
6 −5λ,
c ↦−→
λ
2p + 1,
q0 ↦−→2p + 1
3
,
q1 = q2 ↦−→p + 1
2
,
keep the rational A, B table fixed, and use the same definitions. Branch zero remains exactly (43), as
direct substitution into the trine probabilities verifies. The basis determinant, six state determinants
and two supported Choi matrices vary continuously, and all have strict nonzero/positive values at
99/100. Thus there is an open nonempty parameter neighborhood on which this same rank profile
and 456 coefficient are attained. This existence statement supplies no explicit certified endpoints and
does not move the known qutrit memory threshold. The finite-parameter theorem above is the fully
specified certificate.
20


## Source page 21

8.5
A universal pure-output obstruction: the lower coefficient is 437
The construction above establishes that mixed support profiles exist. A separate positivity argument
shows that the former relaxed lower value 418 cannot occur for any admitted qutrit source at any
0 < λ < 1. No numerical search or symmetry ansatz enters this obstruction.
Lemma 8.4 (A singular composite effect forces a pure output). Let Uj = im Φj. For any full-law
minimal qutrit source, U0 ⊕U1 ⊕U2 = M3(C) as vector spaces: the three states in each column form a
basis of Uj, and all nine states are independent. Suppose Ek has rank two, with kernel line L. Among
indices j with faithful Ej, at most one effect Fjk = Φ∗
j(Ek) can be singular.
Proof. If Fjk is singular, choose 0 ̸= x ∈ker Fjk. The positive operator Y = Φj(|x⟩⟨x|) is nonzero
because Tr Y = ⟨x|Ej|x⟩> 0. Moreover Tr(EkY ) = ⟨x|Fjk|x⟩= 0. Positivity therefore places ran Y in
ker Ek = L, so Y is a positive multiple of the rank-one projector PL. Thus PL ∈Uj. Two such distinct
indices would put the same nonzero projector in two disjoint branch images, a contradiction.
The faithful Ej hypothesis matters. If Ej has a kernel, the chosen input might instead be annihilated;
no pure-output conclusion follows. Likewise, this lemma does not assert that all singular composite
effects are impossible: one faithful-input branch may supply the ray.
Theorem 8.5 (Universal complete-history lower bounds). For every stationary autonomous qutrit
realization of the entire delayed trine process at any feasible 0 < λ < 1,
R2 ≥48,
R3 ≥145,
Rn ≥437 3n−4
(n ≥4).
(44)
Proof. Retain the preliminary notation A = {j : rank Φj(I) = 3}, B = {j : rank Ej = 3}, and a = |A|,
b = |B|. The baseline support-incidence proof gives a + b ≥3, and every pair state/effect has rank at
least two. There are forced rank-three states in A × A and forced rank-three effects in B × B. If b = 2,
let k be the sole index outside B. The lemma implies that at least one of the two additional effects
Fjk, j ∈B, has rank three. Consequently SF ≥18 + 4 + 1 = 23, improving the old 22. Stationary
adjoint reversal preserves the full passive law and exchanges state/effect ranks with transposed indices.
Thus a = 2 similarly implies Sσ ≥23. The complete rank-sum bounds are therefore
Sσ ≥g(a),
SF ≥g(b),
(g(0), g(1), g(2), g(3)) = (18, 19, 23, 27).
Minimization under a + b ≥3 gives min g(a)g(b) = 19 · 23 = 437, at profiles (1, 2) or (2, 1). The
alternatives (0, 3), (3, 0) cost at least 486; (2, 2) costs at least 529; all other allowed profiles are higher.
Equation (39) proves the long-horizon bound.
For completeness the short-horizon counting retains the labels, not just rank sums. Consider
(a, b) = (1, 2), put h = |A ∩B| ∈{0, 1}, and let k /∈B. The old forced pairs yield R2 ≥46 + h2 and
R3 ≥138 + 2h. The new faithful Fjk adds at least sjk ≥2 at horizon two. At horizon three it adds
∑︁
l skl, which is at least seven when k ∈A (h = 0), and at least six when k /∈A (h = 1). Thus
R2 ≥48 + h2 ≥48,
R3 ≥145 + h ≥145.
Stationary reversal gives the same bounds for (2, 1): its word Choi matrices are invertible congruences
of adjoints of reversed word maps, so total word Choi ranks are unchanged. The extreme profiles give
54, 162, while the remaining profiles already exceed 48, 145 from the old forced counts alone. This
proves all three inequalities.
The exact integer verifier supplement/memory/six/resources/verify_support_bound.py
enumerates all 93 minimal labelled patterns after these forced additions and reproduces 48, 145, 437.
21


## Source page 22

It is a check of the finite counting argument, not a test of CP attainability. The analytical lemma
supplies that necessary dynamical constraint; no claim that 437 is attained follows.
A necessary condition for attaining 437 is now more concrete. In the (1, 2) case, exactly one
faithful-input branch must map some pure input to the kernel ray of the sole plane-supported effect,
while the other branch must avoid that ray in its image. The dual statement applies to (2, 1). Our
strictly supported-positive two-plane branches avoid both pure-output degeneracies, explaining their
stable 456 coefficient.
8.6
Resources and limits
The source’s minimum internal memory dimension is three: the nine-by-nine past/future predictive ma-
trix has ordinary rank nine, so any d-dimensional quantum realization needs d2 ≥9. An implementation
of the specified one-step instrument can use a fresh pure fifteen-dimensional port and a three-symbol
classical record per clock tick. The independently initialized ports do not carry preinstalled history, and
the stationary initial memory and any retained purifier are declared stock. No returning environment,
feedback archive or history-dependent external preparation is used. A time-homogeneous Stinespring
isometry exists for the CP instrument; the construction here is an operational quantum-source model,
not a specified laboratory Hamiltonian, energy budget or clock design.
Rn minimizes the pure remainder of the complete final channel, allowing a global dila-
tion/compression for that channel. It is not the product of one-step minima and does not prove a
causal apparatus can store its entire working bath in dimension Rn at every intermediate time. The
simple fresh-port implementation uses raw port dimension 15n before any compression. The prior
k = 9 source therefore remains better on the separate one-step objective, while this source is better
on the declared complete history objective. Both retain final memory and a sharp classical archive;
neither comparison gives a hardware, speed, work or thermodynamic advantage.
The rational coherence table, algebraic CP maps and resource theorem extend the operator-
support analysis to the mixed-support source defined here. Standard quantum probabilities, admitted
preparation/intervention class, fresh stock, stationary clock, reference and archive conditions remain
assumptions. The result supplies neither a new Born-selection principle nor an ontology or consciousness
mechanism.
8.7
Two typed horizon tasks do have exact qutrit optima
Stationary memory–archive state, initial purifier omitted.
For the fixed stationary input and
no retained original purifier, the state is
Ωn =
∑︂
w
P(w)|w⟩⟨w|A ⊗σwn−1wn.
Orthogonal archive blocks give
rank Ωn = 3n−2Sσ ≥2 3n
(n ≥2).
(45)
The known orbit source has all nine conditional states of rank two, and attains equality throughout its
certified feasible range. This is a complete fixed-input state-rank optimum among the declared qutrit
sources. It is a minimum dimension of a global purifier for that state, not a proof of the smallest causal
apparatus implementing every intermediate operation.
Archive-only channel, original input reference retained.
If final memory is deliberately omitted,
the channel is
Dn(X) =
∑︂
w
Tr(Ψw(X))|w⟩⟨w|A.
22


## Source page 23

Its word Choi blocks are transposed effects, so
rank J(Dn) = 3n−2SF ≥2 3n
(n ≥2).
(46)
The stationary adjoint reverse of the orbit source attains this lower bound: its pair effects are congruent
to the forward pair states and therefore all have rank two. The reverse is an explicit stationary
source with the same complete passive word law. At the known one-step optimum its Kraus ranks are
unchanged by adjunction, so its reusable memory is three and its one-step pure apparatus cost is nine
as before.
The pure Stinespring remainder in (46) includes the omitted final memory. It must not be called
an additional external bath independently of that memory. In contrast Rn retains final memory and
counts an external purifying remainder. If the original stationary purifier is retained in (45), faithful τ
makes the resulting joint-state rank equal to Rn, by an invertible input congruence of the Choi matrix;
the smaller marginal-state rank cannot be substituted for it.
9
A certified non-Weyl source with the same passive law
Coordinate-plane Weyl orbits do not exhaust the source encodings. We construct an explicit continuum
of such encodings, give a computable sufficient complete-positivity condition, and certify a sizable
example with exact rational principal minors. Its full passive word law is unchanged, while an admitted
memory intervention separates it from its coordinate-plane parent. This construction extends the source
models defined above. It improves neither the known memory threshold nor the environmental upper
bound. Its benefit is a certified noncovariant realization method and an explicit limitation of passive
source identification. General completely-positive realization methods and quantum reductions of hidden
Markov models are established antecedents [7, 15]. The claim here is the particular certified full-law
deformation and its admitted intervention witness, not the first noncovariant quantum realization.
9.1
State-basis construction and an open positivity neighbourhood
Let Sab be nine normalized Hermitian states forming an operator basis, and let a stationary qutrit
instrument obey
Φj(Sab) = TajSbj,
Taj > 0,
∑︂
j
Taj =
∑︂
a
Taj = 1.
For the construction below, Sab has a rank-two support plane Qb depending only on its second index.
Assume each branch Choi matrix is strictly positive on C3 ⊗Qj, of dimension six, and zero on its
orthogonal complement. This is a nonempty condition: an exact example follows below.
Choose three unitaries Ub and define
S′
ab = UbSabU†
b .
They are normalized rank-two states. Define the 9 × 9 matrix E with columns vec Sab and E′ with
columns vec S′
ab, using one fixed row-major vectorization. Let Oj have columns Taj vec Sbj. When E′
is invertible, the new maps are defined on all operators by
Ψj = AdUj ◦Oj(E′)−1.
(47)
Here the right-hand matrix is a superoperator. Equivalently, Ψj(S′
ab) = TajS′
bj. The Ub are encoding
parameters, not gates selected at runtime by an uncounted classical copy of b. The instrument consists
of the fixed three CP maps in Eq. (47); its finite Choi factors implement those maps without archive
feedback.
23


## Source page 24

Theorem: explicit CP neighbourhood and full-law attainment.
Put s = σmin(E) > 0, let
m > 0 be the smallest positive Choi eigenvalue across the original branches, and set L = maxj ∥Oj∥F.
If
δ = ∥E′ −E∥op < s,
Lδ
s(s −δ) < m,
(48)
then the new maps form a stationary CP instrument with the same complete delayed word law. They
have branch Choi rank six. A sufficient unitary condition is
max
b
∥Ub −I∥op <
ms2
6(L + ms).
Proof. Resolvent inversion gives ∥(E′)−1 −E−1∥op ≤δ/[s(s −δ)]. Undo the output conjugation
Uj. Its superoperator differs from the old one by Oj[(E′)−1 −E−1], of Frobenius norm at most the
second quantity in Eq. (48). Choi reshuffling preserves Frobenius norm and operator norm is no larger.
Both maps have output on the same fixed plane Qj after undoing Uj; therefore the corresponding Choi
perturbation is supported on the same six-dimensional subspace, not on an uncontrolled former zero
eigenspace. It is Hermitian, because the map sends a Hermitian basis to Hermitian matrices. The
positive eigenvalue gap thus proves CP and full rank six on this support. Each changed state column
has Frobenius error at most 2 maxb ∥Ub −I∥, so δ ≤6 maxb ∥Ub −I∥proves the sufficient condition.
Trace preservation holds on the basis because all states have trace one and ∑︁
j Taj = 1. Set
τ ′ = 1
9
∑︁
ab S′
ab. It is faithful because a positive average of an operator basis cannot have a common
kernel. Column stochasticity gives
Ψj(τ ′) = 1
9
∑︂
b
S′
bj,
ΨkΨj(τ ′) = 1
9S′
jk.
Summing the first identity over j proves stationarity. The first two outputs are uniform with pair
probability 1/9; the reset rule thereafter proves every finite word by induction. No finite truncation,
postselection, extra controller memory or freshly redrawn source is used.
□
This theorem is a sufficient neighbourhood criterion, not a necessary CP test. In particular its
simple norm estimate can be conservative. Exact finite Choi certificates admit larger rotations, as in
the following point.
9.2
An exact nonorthogonal-plane realization
Use the coordinate-plane state formula with
α = 2/3,
t = 9/50,
r = 1/10,
λ = 9/10,
ζ = −tω2,
ω = e2πi/3.
The seed χ is
(︃0 0
0
0 α
ζ
0  ̄ζ 1−α
)︃
and Sab = ZaXbχX−bZ−a. Here X|p⟩= |p+1 mod 3⟩and Z = diag(1, ω, ω2).
Let
U0 =
⎛
⎜
⎝
99/101
−20/101
0
20/101
99/101
0
0
0
1
⎞
⎟
⎠,
U1 = U2 = I.
The nine new states and maps are given by Eq. (47). The exact certificate in the supplement verifies
their basis determinant is nonzero, all reset identities, trace preservation, stationarity and the first
two outputs. Undoing each output rotation and restricting its Choi matrix to the six nonzero output-
plane directions, all six leading principal minors are strictly positive rational numbers. Sylvester’s
criterion proves CP, without a numerical eigenvalue threshold. The eighteen exact minors are included
24


## Source page 25

verbatim in supplement/memory/expected_outputs/six/encoding/nonweyl_results.json and
are recomputed by the code.
The original support-plane normals are the orthonormal vectors |0⟩, |1⟩, |2⟩. The new first normal
is (99|0⟩+ 20|1⟩)/101, while the other two stay fixed. Its inner product with the second normal is
20/101 ̸= 0. A common unitary, antiunitary or relabelling preserves normal orthogonality. This source
therefore is not merely another common-unitary coordinate-plane Weyl representation. It is an exact,
noncovariant qutrit source outside that class. No assertion of classification outside that class is made.
9.3
A common intervention exposes the lost distinction
After a recorded pair ending in symbol zero, admit one projective memory probe with click effect
P0 = |0⟩⟨0| in the same physical qutrit basis for both sources. The coordinate-plane parent gives zero.
The new source gives, for every preceding symbol a,
Tr(P0S′
a0) = 2
3
(︃20
101
)︃2
=
800
30603 ≃0.02614.
This is an explicit standard-quantum intervention discriminator between two sources with identical
passive words. It is not a test separating Shadow Theory from ordinary quantum mechanics. It tests
the admitted physical source models after expanding the readout catalogue.
No history needs to be discarded: retain all first two symbols and the probe outcome, and use the
joint event “second symbol zero and click”. Its unconditional probability is zero in the parent and
800/91809 in the new source. A controller may schedule the same fixed probe after two ticks; selection
of the joint event is data analysis, not feedback memory hidden inside the autonomous source. The
intervention requires physical memory access, a clock and a calibrated projector. Those are additional
admitted operations; passive archives alone cannot supply them.
The separation has a simple controlled tolerance. If each nominated conditional memory state
has trace-distance error at most dS and the actual probe effect has operator-norm error at most
dP , put d = dS + dP . The parent conditional click probability is at most d and the new one is at
least 800/30603 −d. Their admitted intervals are disjoint whenever d < 400/30603 ≃0.01307. This
follows from contraction of effect probabilities under trace distance and ∥∆P∥op; it does not infer those
calibration premises from passive word equality. The joint-event gap is then at least (800/30603−2d)/3
under the same exact pre-intervention word law. Complete reference/bath equivalence is neither
assumed nor inferred from this pointer-level discriminator.
The example has one-step record Choi rank eighteen, rather than the minimum nine. Its pair states
have rank two and pair effects are strictly positive: writing Ej = Ψ∗
j(I), the certificate checks Ej > 0
and the ordered pair effect obeys
Fjk = Ψ∗
j(Ek) ⪰λmin(Ek)Ej > 0.
The full-word reset factorization therefore gives complete horizon channel rank
∑︂
w
rank S′
last(w) rank Ffirst(w) = 6 3n,
n ≥2.
It thus supplies a certified alternative encoding and an access-dependent distinction, not a better
resource frontier or a lower noise threshold. The construction is useful because noncovariant search can
now start inside a rigorously admitted open set rather than at a numerical PSD factorization with
unverified dynamics.
25


## Source page 26

Verification and limits.
supplement/memory/six/encoding/verify_nonweyl.py imports no
previous producer code. Exact SymPy arithmetic verifies 243 reset entries, nine normalization entries,
ninety stationary/initial entries and eighteen positive principal minors. It then enumerates every word
through length seven independently in floating point: 3,279 checks pass, with maximum probability
error below 7 × 10−18. These finite word checks are diagnostics; the basis-reset induction is the full-law
proof. The numerical neighbourhood estimate, search failures and output-state geometry establish
no global source optimum. Conventional Born probabilities, stationary preparation, pure dilation
accounting, independently fresh ports and the complete declared access catalogue remain assumptions.
No measurement-selection mechanism is inferred.
10
Access-dependent distinctions at a common resource optimum
Two parameters h1 ̸= h2 on opposite sides of h∗= (1 +
√
17)/4 can have identical r(h) and thus
identical full passive laws, dimension three and one-step rank nine. Their common-input pointer
channels nevertheless obey 1
2∥Mh1 −Mh2∥⋄= |h1 −h2|/3. The effects are Ej(h) = (2 −h)I/6 + hPj/2
for fixed orthogonal Fourier projectors. A known Fourier input attains the distance; so does the common
maximally entangled purifier of stationary local state I/3. Here Mh(X) = ∑︁
j Tr[Ej(h)X]|j⟩⟨j| retains
only the pointer, not the final memory. To see the distance directly, write Mh = (h/2)MP +(1−h/2)D,
where D(X) = Tr(X)IA/3. For any positive joint input, let qj ⪰0 be the subnormalized reference
blocks after the projective Fourier measurement, and let q = ∑︁
j qj. The triangle inequality gives
∑︁
j ∥qj −q/3∥1 ≤4/3. A Fourier eigenstate attains equality, so 1
2∥MP −D∥⋄= 2/3 and the displayed
result follows by scaling. On the common maximally entangled input the pointer/reference blocks
are Ej(h)T /3; their difference has the same trace norm, proving the second attainment claim. The
technical companion gives an exact algebraic parameter pair and the operational decoder. Physical
readability of the purifier is additional access, and passive dimension optimality does not identify a
unique generator.
11
Reproducibility and claim status
The supplement supplies the exact rational/algebraic source definitions and certificates. Positivity for
the mixed-support source is checked in Q(
√
6, ω) by Hermiticity, supported principal minors and exact
basis inversion; all-word attainment follows by induction from the reset identity. The Weyl family is
proved analytically and independently reconstructed symbolically. Integer enumeration checks the
finite support-count argument. Floating word enumeration diagnoses implementation mistakes but
is not substituted for universal proofs. The intermediate minimum-memory boundary and the exact
complete-history optimum remain unresolved. Specifying a stationary CP instrument does not establish
a laboratory interaction, clock, preparation procedure or energy advantage. The technical companion
preserves additional bounds and alternative realizations under their separate output contracts.
Assistance disclosure.
AI assistance was used for computational checks and review.
A
A universal one-step qutrit dilation bound
The branch-image dimension forces a lower bound on Choi rank. The following elementary proof treats
every complex qutrit CP map with the stated linear rank, without a covariance or source-encoding
assumption.
26


## Source page 27

A.1
A CP map of qutrit linear rank three needs at least three Kraus operators
Lemma A.1 (Kraus rank from three image directions). If a nonzero CP map Φ : M3(C) →M3(C)
has complex-linear rank three, its Choi rank is at least three.
Proof. A one-Kraus map X ↦→AXA† has linear rank (rank A)2, which cannot equal three. Suppose
two Kraus matrices A, B suffice.
First consider input support of dimension at most two. Dimension one gives rank at most one.
On a two-dimensional support, an invertible input congruence normalizes A†A + B†B to identity
without changing linear rank. If the resulting trace-preserving map had rank three, its Hermitian
kernel would contain a nonzero traceless X. Diagonalizing X gives orthonormal u, v with equal outputs
Φ(|u⟩⟨u|) = Φ(|v⟩⟨v|) = ρ. This common output has rank at most two. Positivity places all four Kraus
vectors Au, Bu, Av, Bv in its support, reducing the output to dimension two. If ρ has rank one the image
is one-dimensional. Otherwise write the two output-vector matrices as M0 = √ρU0 and M1 = √ρU1,
where U0, U1 are 2-by-2 unitaries. The off-diagonal response is C = √ρU√ρ, U = U0U†
1, and trace
preservation gives Tr(ρU) = 0. A positive weighted average of the two unit-modulus eigenvalues of
U can vanish only if they are antipodal. Hence U is Hermitian up to a common phase, and C† is
proportional to C. The entire image then lies in span{ρ, C}, contradicting rank three. The same
argument applied to the adjoint handles output support of dimension at most two.
It remains to treat full input and output support. If the pencil A + tB contains an invertible
matrix, a unitary change of Kraus basis makes the first Kraus matrix invertible. An invertible output
congruence then reduces the map to X ↦→X + CXC†. Its superoperator is I + C ⊗C. Among three
eigenvalues c1, c2, c3 of C, no diagonal product |ci|2 equals −1, and at most two unordered pairs can
satisfy cicj = −1: all three pairs would force one product to be positive. The algebraic multiplicity of
−1 is therefore at most four, also for defective C. The superoperator has rank at least five.
Finally suppose every pencil matrix is singular. Some linear combination has rank two; otherwise
two rank-one matrices either have common image or common kernel, contradicting full supports.
For invertible L, R, replacing both Kraus matrices by LAR, LBR composes the map with invertible
input/output congruences. This preserves CP and complex-linear rank, although it need not preserve
trace normalization. Such transformations put
A = diag(1, 1, 0),
B =
(︄
D
c
q
b
)︄
.
The coefficients of t, t2 in det(A + tB) ≡0 give b = 0 and qc = 0. Full supports give q, c ̸= 0. A
matched invertible two-dimensional change of basis preserving A puts c = e1, q = eT
2 , so
B =
⎛
⎜
⎝
a
b′
1
s
d
0
0
1
0
⎞
⎟
⎠.
The cubic coefficient gives s = det B = 0. Subtracting d times row three from row two, then a and b′
times column three from columns one and two, preserves A and gives B = E13 + E32. Its CP map is
X ↦−→
⎛
⎜
⎝
x11 + x33
x12
x32
x21
x22
0
x23
0
x22
⎞
⎟
⎠,
of linear rank six. Every case contradicts rank three.
The qubit-support reduction also follows from the standard two-Kraus qubit canonical form
of Wolf and Perez-Garcia [16], Eq.(5); the proof above supplies the elementary argument actually
27


## Source page 28

used. The displayed singular-pencil map has six independent image directions by direct inspection.
The supplement also supplies an independent rational row-reduction check of this normal form in
supplement/check_structural_lemmas.py.
Universal one-step bath consequence.
By (30), every branch of any minimal qutrit realization
needs at least three Kraus operators. Its classical-record channel has Choi rank at least 3 + 3 + 3 = 9.
This is a universal lower bound for the declared qutrit realization class. The exact normal measurement-
model apparatus rule is an established antecedent: Pellonpää and Tukiainen, Rep. Math. Phys. 79,
261–278 (2017), Eq.(22), Corollary 1 and the finite-dimensional apparatus bound, DOI 10.1016/S0034-
4877(17)30040-X, https://arxiv.org/abs/1509.08886. Pure initial apparatus and a sharp pointer
are retained hypotheses.
References
[1] Alessandro Bisio, Giacomo Mauro D’Ariano, Paolo Perinotti, and Michal Sedlák. Memory cost of
quantum protocols. Physical Review A, 85:032333, 2012. doi: 10.1103/PhysRevA.85.032333. URL
https://arxiv.org/pdf/1112.3853.
[2] Man-Duen Choi. Completely positive linear maps on complex matrices. Linear Algebra and its
Applications, 10(3):285–290, 1975. doi: 10.1016/0024-3795(75)90075-0.
[3] Thomas J. Elliott. Memory compression and thermal efficiency of quantum implementations of
nondeterministic hidden markov models. Physical Review A, 103:052615, 2021. doi: 10.1103/Phys
RevA.103.052615. URL https://doi.org/10.1103/PhysRevA.103.052615.
[4] Hamza Fawzi, Joao Gouveia, Pablo A. Parrilo, Richard Z. Robinson, and Rekha R. Thomas. Positive
semidefinite rank. Mathematical Programming, 153:133–177, 2015. doi: 10.1007/s10107-015-0922-1.
URL https://arxiv.org/abs/1407.4095.
[5] David Gross. Hudson’s theorem for finite-dimensional quantum systems. Journal of Mathematical
Physics, 47:122107, 2006. doi: 10.1063/1.2393152. URL https://arxiv.org/abs/quant-ph/06
02001.
[6] Rahul Jain, Yaoyun Shi, Zhaohui Wei, and Shengyu Zhang. Efficient protocols for generating
bipartite classical distributions and quantum states. IEEE Transactions on Information Theory,
59(8):5171–5178, 2013. URL https://arxiv.org/abs/1203.1153.
[7] Alex Monràs and Andreas Winter. Quantum learning of classical stochastic processes: The
completely-positive realization problem. Journal of Mathematical Physics, 57:015219, 2016. doi:
10.1063/1.4936935. URL https://arxiv.org/abs/1412.3634.
[8] Jason D. Padgett. Holographic mathematics: A dual representation of algebra, trigonometry,
probability, and calculus in quantum information holography, . Undated supplied PDF manuscript;
abstract and Sections 2–3.
[9] Jason D. Padgett. Quantum information holography, . Undated supplied manuscript; pages 64–68.
[10] Juha-Pekka Pellonpää and Mikko Tukiainen. Minimal normal measurement models of quantum
instruments. Reports on Mathematical Physics, 79(3):261–278, 2017. doi: 10.1016/S0034-4877(17
)30040-X. URL https://arxiv.org/pdf/1509.08886.
28


## Source page 29

[11] Paul M. Riechers and Thomas J. Elliott. Identifiability and minimality bounds of quantum and
post-quantum models of classical stochastic processes, 2025. URL https://arxiv.org/html/250
9.03004v1. Version 1.
[12] Jeremy Rodgers. Exact markov extensions of three-time readouts: Hidden state counts, reversibility
obstructions, and nonidentifiability, 2026. Version 1.0, 6 September 2026; supplied manuscript.
[13] Jeremy Rodgers. Source–readout non-equivalence: Descent and equivariant reconstruction ob-
structions, 2026. URL https://doi.org/10.5281/zenodo.21369967.
[14] Emanuel Sperner. Ein satz über untermengen einer endlichen menge. Mathematische Zeitschrift,
27:544–548, 1928. URL https://geodesic.mathdoc.fr/item/MZ_1928__27_167993/.
[15] Rishi Sundar and Thomas J. Elliott. Quantum dimension reduction of hidden markov models.
Physical Review A, 113:062461, 2026. doi: 10.1103/plt9-cm1x. URL https://arxiv.org/html/2
601.16126v2. Version 2, 1 July 2026.
[16] Michael M. Wolf and David Perez-Garcia. Quantum capacities of channels with small environment.
Physical Review A, 75:012303, 2007. doi: 10.1103/PhysRevA.75.012303. URL https://arxiv.or
g/abs/quant-ph/0607070.
29
