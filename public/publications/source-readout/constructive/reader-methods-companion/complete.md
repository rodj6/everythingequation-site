# Technical Companion: Reader Methods and Resource Interfaces

Jeremy Rodgers. 27 October 2026.

Technical companion to the associated publication.

This is the complete searchable PDF text transcription. Display geometry is preserved in the HTML vector formula panels. Linear PDF text does not encode fraction, matrix, or script topology. Consult the HTML formula rendering for exact notation.

## Source page 1

Technical Supplement: Continuous Reader Optimization and
Deployment Interfaces
Jeremy Rodgers
Independent Researcher
www.everythingequation.com
27 October 2026
Abstract
We give supporting methods and restricted benchmarks for common-sign readout of a fixed four-
state qubit source: deterministic measurement allocation, an expanded rational menu, continuous-risk
lower backups, fixed-nuisance polynomial certificates and physical timing/calibration interfaces.
Every result retains its own measurement and stability contract. These methods support the
associated reader frontiers without settling the remaining adjacent copy thresholds or a universal
total-resource optimum.
This supplement develops optimization and deployment interfaces within Shadow Theory’s pre-existing
source–readout programme [5]. It supplies independently checkable methods for the fixed-label four-
state source. Copies are independent conditional on one label throughout a block; the preparation
controller is inaccessible. The shared detector law is E±|θ = η(I ±v[cos θX +sin θY ])/2, E0|θ = (1−η)I.
The asymmetric parent separately applies one fixed Pauli channel with multipliers (gX, gY , gXgY )
before a reader with fixed phase offset δ and independent sign-blind erasure. These response laws
are premises, not inferred from equal one-copy marginals. The current one-percent copy intervals
are [13, 14] nominally and [16, 17] for the specified asymmetric robust task, separately for both local
policy classes. Supporting lower comparisons and unsuccessful candidates do not alter those status
statements.
Contents
1
A physically admissible weighted completion-design frontier
2
1.1
Source, allowed interventions and retained outputs . . . . . . . . . . . . . . . . . . . .
2
1.2
An exact ideal fixed-schedule optimum . . . . . . . . . . . . . . . . . . . . . . . . . . .
3
1.3
Exact rational noisy design with matching certificates
. . . . . . . . . . . . . . . . . .
4
1.4
Controlled deviations and fair physical accounting
. . . . . . . . . . . . . . . . . . . .
5
2
A larger rational measurement menu: the copy gap closes but feedback still helps
6
2.1
Declared settings, noise and symmetry . . . . . . . . . . . . . . . . . . . . . . . . . . .
6
2.2
Exact adaptive and randomized-nonadaptive certificates . . . . . . . . . . . . . . . . .
7
2.3
Implementation and limits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
8
3
Nominal threshold: a checked obstruction and a continuous lower-backup method
9
3.1
The thirteen-copy operator comparison . . . . . . . . . . . . . . . . . . . . . . . . . . .
9
3.2
A rational lower dynamic programme for the full circle . . . . . . . . . . . . . . . . . .
9
3.3
Exact demonstrations and scalability ceiling . . . . . . . . . . . . . . . . . . . . . . . .
11
1


## Source page 2

4
Original robust task: fixed-nuisance certification and an unresolved sixteen-copy
endpoint
11
4.1
A three-variable exact interface for a frozen reader . . . . . . . . . . . . . . . . . . . .
11
4.2
Exact Bernstein cover certificates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
12
4.3
Why gain-endpoint checks alone are invalid
. . . . . . . . . . . . . . . . . . . . . . . .
13
4.4
Searches and exact updated status . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
13
5
Uniform angular approximation
14
5.1
A certified angular-net transfer, not a grid optimum
. . . . . . . . . . . . . . . . . . .
14
5.2
Verification and exact status . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
14
6
From the continuous feedback gap to a physical resource certificate
15
6.1
A nonzero noise and control-error operating region . . . . . . . . . . . . . . . . . . . .
15
6.2
Actual phase travel, rather than a generic switch charge . . . . . . . . . . . . . . . . .
16
6.3
A full-menu copy advantage with a conditional time advantage
. . . . . . . . . . . . .
18
6.4
Finite calibration covering all continuous angles . . . . . . . . . . . . . . . . . . . . . .
18
6.5
Reproducible checks and remaining limits . . . . . . . . . . . . . . . . . . . . . . . . .
20
1
A physically admissible weighted completion-design frontier
The deterministic collision test identifies whether a target is exactly fixed by a record. A physical
quantum reader also needs a quantitative error analysis when different targets can produce the
same finite record. Here rational record likelihoods and exact optimization close that gap for one
finite, explicitly specified phase-source experiment. This is a new programme-specific construction,
independent of the ETH theorem; it demonstrates a substantive consumer of the weighted-completion
interface. It is not a faster implementation of the ETH algorithm.
1.1
Source, allowed interventions and retained outputs
Use a two-mode one-excitation register with computational basis |0⟩, |1⟩and equal populations. The
finite preparation promise is
ρX± = (I ± X)/2,
ρY ± = (I ± Y )/2.
Equivalently their phases are 0, π, π/2, 3π/2 in (|0⟩+ eiφ|1⟩)/
√
2. All four preparations have the same
separate-mode intensity readout (1/2, 1/2). The target is only the sign class: R(X+) = R(Y +) = +
and R(X−) = R(Y −) = −. This target is an externally nominated function on the finite preparation
set, not the eigenvalue of a quantum observable assigned to all states.
A source label h is chosen once and held fixed for an experiment. Conditional on h, the source
supplies independent copies ρ⊗B
h
, independent of the reader ready stock. This is a preparation promise,
not a conclusion from matching one-copy marginals or from resetting a device. The source controller
retaining h is declared preparation stock and is unavailable to the decoder; no generator-memory
separation is inferred from this experiment.
The permitted experiment menu consists of a fixed, nonadaptive schedule: nX copies measured
with the X reader and nY with the Y reader. The two incompatible observables act on different copies.
Neither is silently assumed jointly measurable on the same source. The Z intensity reader alone yields
exactly uniform outcome sequences for all h and cannot improve worst-case sign error below 1/2.
A phase-controlled beam splitter implements the ideal reader: rotate by Ua = exp(−iθaZ/2) with
θX = 0, θY = −π/2 under a fixed phase convention, then apply a Hadamard beam splitter and
detect the two terminal paths. The convention can equivalently be fixed by the effects below. A
2


## Source page 3

controlled Hamiltonian Hz = ħΩzZ/2 realizes the phase rotation in duration |θa|/|Ωz|, with the sign
of the drive declared. The beam splitter and detector have separately allotted durations; there is no
instantaneous-pulse or speed optimum claim.
The calibrated noisy reader has terminal effects
E(a)
± = η
2(I ± vσa),
E(a)
0
= (1 −η)I,
0 ≤η, v ≤1,
(1)
where σX = X, σY = Y . A realization measures the ideal Pauli observable, flips its reported sign with
independent probability (1 −v)/2, and independently replaces it with a null with probability 1 −η.
Fresh independent coin/environment stock per copy is admitted and counted as apparatus resources.
The ordered record retains every setting, terminal sign, null and time. Environments may remain
retained but unread; no assertion equates their complete quantum channels.
This specifies effects and a conventional realization rather than importing a complete apparatus-
response certificate from terminal counts. It is an ideal/specified-noise reader construction, not a
solution of arbitrary detector mismatch. A separate phase-to-record model can supply perturbation
budgets only when its preparation, access and output assumptions match. No delayed-trine resource
bound is inferred from this copy-allocation task.
1.2
An exact ideal fixed-schedule optimum
Let e∗(nX, nY ) be the minimum over all randomized terminal decoders of the maximum sign error over
the four possible source labels. It includes the entire original population, with no click postselection.
In this subsection η = v = 1.
Theorem 1.1 (Target-relative phase-reader allocation). For nX, nY ≥1,
e∗(nX, nY ) =
1
2nX + 2nY .
(2)
If either count is zero, e∗= 1/2. At total copy budget B ≥2, the optimal permitted allocation is
(1, B −1) or its swap, giving e∗
B = 1/(2 + 2B−1). The minimum worst-case error for identifying the
full four-valued label under the same fixed schedule is 2/(2nX + 2nY ) when both counts are positive.
Proof. An X+ source gives only plus signs at the X reader and fair independent signs at the Y reader;
exchange signs or axes for the other sources. Apart from the two opposing corners
A = (X all +, Y all −),
B = (X all −, Y all +),
the record determines the target sign. Corner A has probability a = 2−nY under X+ and b = 2−nX
under Y −. If a decoder chooses + there with probability q, its worst error is at least max{a(1 −q), bq},
whose minimum is ab/(a + b). Choosing q = a/(a + b) at A, 1 −q at B, and the uniquely determined
sign elsewhere attains this bound on all four sources. If one axis is absent, the two opposite signs of
that axis induce identical records, which forces worst error at least 1/2; a fair guess attains it.
For fixed B and positive counts, maximize 2nX + 2B−nX. This convex function has its maximum on
the integer interval 1 ≤nX ≤B −1 at an endpoint. For full-label discrimination, all four constant-sign
corners have two possible labels, one from each axis. Assign the X label with probability a/(a + b)
at each corner. Each source then incurs error 2ab/(a + b). For a matching lower bound, use prior
weights α/2 on each X label and (1 −α)/2 on each Y label with α = b/(a + b). At each corner the two
weighted likelihoods are equal, contributing ab/[2(a + b)] to every decoder’s Bayes error. Summing four
corners gives the claimed lower bound.
3


## Source page 4

For eight source copies, the target-optimal schedule (1, 7) has error 1/130 ≃0.0076923, while the
balanced (4, 4) schedule has error 1/32 = 0.03125. The comparison charges the same eight copies, one
readout per copy, both calibrated axes and the same retained archive. It is not comparison against
an optimal arbitrary POVM or adaptive protocol. For a one-percent sign-error target the optimal
menu schedule needs eight copies, while balanced or nearly balanced schedules need twelve. Full-label
identification optimized over the same menu needs nine. Thus target choice and experiment allocation
both change the accessible-resource requirement. The eight-copy one-percent guarantee does not require
an exact biased decision coin: with (1, 7), return the common Y sign if all seven Y results agree, and
otherwise return the single X result. Its worst error is 1/128 < 1/100. This deterministic decoder
gives a nearby constructive repair when ideal rational randomization is unavailable; the sharper 1/130
remains the randomized-class optimum. Extend the rule to every record by returning + whenever a
null occurs. Those records have zero nominal probability but must have a declared decision before
applying an actual-device perturbation bound.
Every finite positive-count experiment still has a record compatible with opposite target values. On
the admissible relation of source labels and possible outcome records, an exact support-only completion
test correctly rejects zero-error sufficiency at every finite budget. A small weighted error is a different
target and is not called an exact repair of that collision. This is why the likelihood/weight extension
adds something the Boolean collision oracle alone cannot supply.
1.3
Exact rational noisy design with matching certificates
From (1), let
p(a)
h (±) = η(1 ± vra(h))/2,
p(a)
h (0) = 1 −η,
where rX(X±) = ±1, rY (Y ±) = ±1 and the cross-axis values are zero. For rational η, v these are
rational probabilities. A setting’s histogram k = (k+, k−, k0) has probability
n!
k+!k−!k0!p(+)k+p(−)k−p(0)k0.
The product of the two setting histograms is sufficient for this likelihood task: under the declared
conditional product law, all permutations with the same histogram have identical likelihood ratios.
The complete ordered physical archive is retained; the decoder’s sufficient statistic does not erase
or return it to the source. For fixed setting counts, there are only
 nX+2
2
 nY +2
2
 histograms. Their
rational probabilities can already be computed in polynomial time here; the ETH algorithm is not
needed or claimed to speed this simple special case.
Write the four likelihoods at record o as PX+(o), PX−(o), PY +(o), PY −(o). For any α ∈[0, 1], every
decoder has worst-case error at least
L(α) = 1
2
X
o
min{αPX+(o) + (1 −α)PY +(o), αPX−(o) + (1 −α)PY −(o)}.
(3)
This is the Bayes risk for an explicit prior, not an assumption that the source actually uses that prior.
The function is concave piecewise linear. Its maximum occurs at an endpoint or at a rational crossing
of its two affine record weights.
Exact construction and certificate.
Enumerate those breakpoints and select a maximizing α∗.
On non-tied records use the weighted likelihood-ratio decision. On tied records construct two policies
minimizing and maximizing the difference between the X-axis and Y -axis average errors. Symmetrize
under global sign reversal so the errors of the two signs within each axis agree. Every such policy
attains L(α∗) at its nominated prior. If 0 < α∗< 1, optimality of the concave maximum makes
4


## Source page 5

the two attainable error-difference endpoints bracket zero; mix them to equalize the axis errors. At
α∗= 0, choose the endpoint whose X error does not exceed its Y error; at α∗= 1 choose the converse.
One-sided maximality supplies the respective endpoint condition. Thus the constructed policy’s worst
error equals the lower bound L(α∗). This proves exact minimax optimality for each schedule.
The implementation retains a simpler independently checkable certificate: all rational likelihoods,
the prior α∗, and a rational decision probability q(o) for each histogram. Recomputing each of the four
errors gives an upper bound. Evaluating (3) gives a lower bound. Equality is an exact zero primal/dual
gap; it requires no floating optimizer or assumption of numerical convergence. For any histogram
absent from the union of nominal supports, the exported decoder returns +; this completes it on actual
perturbed records.
With calibrated η = 4/5 and v = 9/10, enumerate every fixed schedule of at most B copies at unit
cost:
Budget B
Certified optimal (nX, nY )
Exact minimax error
2
(1, 1)
71/250
4
(2, 2)
229/1250
6
(3, 3)
94003/781250
8
(4, 4)
8077061/97656250
10
(4, 6) or (6, 4)
3252843423709/56955566406250
This table minimizes over a single deterministic X/Y count allocation and its minimax decoder. It does
not optimize mixtures over different allocations; the randomized-schedule comparator is a broader class.
In particular, at budget eight this fixed-allocation optimum error is 0.08270910464, while the formerly
ideal-optimal (1, 7) schedule has error 726821937001/4803417968750 ≃0.1513134900. Noise changes
the optimal design. Balanced allocation is not asserted optimal at all budgets: the exact ten-copy
result is asymmetric. The data are mathematical model outputs, not experimental measurements.
1.4
Controlled deviations and fair physical accounting
Suppose deterministic bounds δt ∈[0, 1] control the total variation between actual and nominated
conditional outcome laws at every matched past history. Sequential maximal coupling keeps the records
matched at step t, conditional on matching so far, with probability at least 1 −δt. Consequently the
complete classical-record distance is at most
κB = 1 −
B
Y
t=1
(1 −δt) ≤
X
t
δt.
Independence is not needed under this stronger uniform conditional contract; one-copy marginal bounds
do not imply it. The product bound is sharp as a record-distance statement: compare a nominal all-zero
word with independent per-position flips of probabilities δt. Every fixed classifier’s error increases by at
most κB. This is not a claim of robust minimax optimality and covers classical outputs, not residual
quantum baths.
For example, the eight-copy ideal (1, 7) decoder retains a one-percent worst-case error guarantee
whenever the actual conditional laws obey δt ≤1/4000 at every history: the exact rational bound
1/130 + 1 −(3999/4000)8 is strictly below 1/100. This makes the finite design’s calibration allowance
quantitative without inferring future stability from past calibration alone. The deterministic decoder
also passes: replace 1/130 by 1/128 in that bound, obtaining approximately 0.0098107509 < 0.01
without a randomized-decision port.
For the specific reader family, changing (η0, v0) to (η, v) changes each one-copy outcome law by at
most
|η −η0| + η0|v −v0|/2.
5


## Source page 6

Trace-distance preparation error δS adds at most δS. These are explicit consumers for a certified
calibration/drift budget. An unconditional one-copy marginal estimate alone does not justify the
sequential conditional promise or independent fresh apparatus stock.
The resource optimized above is only source-copy/readout count within the declared menu. Each
trial consumes an independent preparation and reader port, a calibrated phase setting and clock interval.
The archived setting and three-outcome record remain append-only and unavailable to future source
operations. Histogram counters and the final decoder are additional classical resources. Randomized
decisions also consume independent ready stock. An exact rational coin can be admitted as a separately
calibrated qubit prepared by a finite rotation: Hc = ħΩcY/2 for duration 2 arcsin √q/Ωc, followed by a
terminal computational measurement. Its preparation and parameter accuracy are not free. With only
fair bits, exact rational rejection sampling has finite expected cost but unbounded stopping time; a
finite deadline requires an explicit residual error margin. No total energy, hardware or thermodynamic
optimum follows.
For example, a continuous equatorial bisector-basis measurement is outside this menu and can
outperform some small-budget axis schedules. There is also a useful unrestricted lower comparison for
every always-deciding measurement on B copies, collective or otherwise:
eB ≥1 −
√
1 −2−B
2
> 0.
Indeed restrict the four-label minimax problem to the opposite-target pair X+, Y −, whose B-copy
squared overlap is 2−B. Their trace distance is
√
1 −2−B, obtained in their two-dimensional span.
Maximizing Tr E(ρ −σ) over 0 ≤E ≤I gives this trace distance, so the optimal pair-average error
is the displayed value; four-label worst error cannot be smaller. This is the established two-state
trace-distance bound, not a new global optimum. An unambiguous task with abstentions has a different
objective. Collective measurements and adaptive basis choices are also excluded from the present
optimum. These limitations are essential: arbitrary quantum-state discrimination is established theory,
and the new result is a sharply typed target-relative design example with exact noise certificates.
General discrimination and multiple-copy local/adaptive comparisons have established treatments[1,
3]. The result here is a target-relative weighted access-design example with exact noise certificates
under the declared preparation and measurement restrictions. No worldwide novelty claim is made for
BB84-family discrimination or the general idea of allocating measurements.
2
A larger rational measurement menu: the copy gap closes but
feedback still helps
The axis-restricted result proved a nineteen-versus-twenty-one copy threshold inside its X/Y menu.
That statement does not imply a separation after additional phase settings become available. We
make a strict, exactly computable expansion of the same physical reader and compare both protocol
classes in that same expanded menu. The result distinguishes a surviving error advantage from a copy
threshold that no longer separates the classes.
2.1
Declared settings, noise and symmetry
Admit exactly four equatorial axes, listed by their unit direction vectors:
M = {(1, 0), (0, 1), (3/5, 4/5), (4/5, 3/5)}.
These are the original X/Y settings and two additional phase rotations θ = arctan(4/3) and arctan(3/4),
implemented by the specified controlled two-mode phase rotation, beam splitter and terminal detector.
6


## Source page 7

The effects are E±|a = η(I ± v(caX + saY ))/2 and E0|a = (1 −η)I. We use the same known, fixed
common parameters η = 4/5, v = 9/10 for every setting. No setting-dependent calibration or switching
cost is silently inferred from that assumption. All four source preparations, unavailable source label,
independent fresh copies, fixed deadline and retained signs/nulls/settings keep the specified contract.
Different observables act on different copies. This is a finite physical menu, not a discretization claimed
to equal the continuous equatorial class.
The menu is closed under exchanging X and Y. Global source-sign reversal is implemented in a
protocol by reversing its recorded signs and final decision. These two symmetries act transitively on
the source labels. Consequently the uniform-prior Bayes optimum is a lower bound for minimax risk
and averaging an optimal policy over the four symmetries attains it with equal error on each label.
Two fair root bits suffice; our implementation resolves terminal posterior ties deterministically as plus
before applying that root symmetry. This avoids charging an unneeded additional decision coin. The
root seed must remain available to the decoder and is a counted controller resource.
2.2
Exact adaptive and randomized-nonadaptive certificates
For this menu all likelihoods have denominator D = 125. For the X reader the plus numerators
on (X+, X−, Y +, Y −) are (95, 5, 50, 50), and for the two new directions they are (77, 23, 86, 14) and
(86, 14, 77, 23). Minus swaps each sign pair and every null numerator is 25. Let ka,o denote these
four-vectors. The exact recurrence on integer prior weights is
V0(w) = min(w1 + w3, w2 + w4),
Vt(w) = min
a∈M
1
125
X
o∈{+,−,0}
Vt−1(w ⊙ka,o).
Homogeneity permits division by the integer gcd of a weight vector, giving an exact rational memoized
computation. Every action is included at each node. Selecting a minimizing action and then a
terminal Bayes decision attains the lower bound. The preceding symmetry promotes the root value
VB(1, 1, 1, 1)/4 to minimax equality over all randomized, nonanticipating protocols using this menu.
For nonadaptive protocols, conditional product likelihoods imply that an action sequence’s Bayes
risk depends only on its four action counts. Enumerate all
 B+3
3
 count allocations and all ternary
histograms within each setting. At a histogram the multiplicity-weighted contribution is the minimum of
its two target likelihood sums, divided by four. This is an integer sum over 125B, with exact multinomial
multiplicities. A mixture of schedules has average Bayes risk at least the smallest component risk. Root
symmetrization of a minimizing schedule gives the matching minimax upper bound, so this comparator
includes every randomized nonadaptive schedule and terminal decision rule in the same menu.
Theorem 2.1 (Finite expanded-menu frontier). For the specified four-setting menu and detector law,
the exact minimax errors are:
B
Adaptive
Randomized nonadaptive
4
2062489/19531250
414539/3906250
8
177227695861393/4768371582031250
35860640527277/953674316406250
Both inequalities are strict, so feedback retains a genuine advantage within this larger menu. Nevertheless
both classes require exactly fourteen copies for one-percent worst-case sign error.
Proof. The recurrence and full count-allocation enumeration above give exact lower and attaining upper
certificates. The saved four/eight-copy Bellman DAGs contain both terminal losses and every action
value, and the checker verifies all equalities with rational arithmetic. Direct evaluation of the selected
policy’s four label errors supplies an additional upper check before group averaging. Nonadaptive
histogram sums are independently compared with ordered records on small horizons.
7


## Source page 8

For the copy threshold, at B = 13 the errors are
20475493238962971614182459
1818989403545856475830078125,
20862994861778108626565401
1818989403545856475830078125,
respectively, both greater than 1/100. At B = 14 they are
162424078504800687452994223
18189894035458564758300781250,
165670382020832988542373811
18189894035458564758300781250,
both less than 1/100. The exact computation enumerates all 560 and 680 nonadaptive count allocations
at those horizons and covers all adaptive actions by the same Bellman recursion. Its code, inputs and
exact values are delivered; large threshold DAGs can be regenerated instead of being duplicated as a
large static archive. More copies cannot worsen either optimum because an extra record can be ignored.
The adjacent exact comparisons therefore establish the minimum budgets.
At eight copies the errors are approximately 0.03716734 and 0.03760261, both substantially lower
than the old X/Y values 0.06714193 and 0.07977783. At fourteen they are 0.00892936 and 0.00910783.
The best nonadaptive fourteen-copy allocation uses seven copies at each new oblique setting and none
at X or Y. Thus a feasible broader nonadaptive reader already beats the nineteen-copy restricted
adaptive budget. The original theorem remains correct in its original class, but its copy saving is not a
measurement-menu-independent advantage.
There is a constructive repair at a stricter declared target. The fourteen-copy gap gives an entire
interval of tolerances for which the adaptive reader passes and every nonadaptive reader fails. For
example, at error tolerance 9/1000 the exact minimum budgets are fourteen adaptive versus fifteen
randomized nonadaptive copies. The thirteen-copy adaptive lower bound already exceeds this tolerance,
and the fourteen-copy nonadaptive lower bound does too. For attainment at fifteen use the explicit
allocation (0, 0, 7, 8) and its root-symmetrized counterpart; its exact error is
206141219809325120449786527454
28421709430404007434844970703125 ≃0.00725294938 < 9/1000.
Thus an expanded-menu copy advantage survives on a specified accuracy frontier, although the original
one-percent separation closes. The 0.9% illustration was selected within the proved risk-gap interval
after calculation; it is not presented as a pre-registered experimental target or a universal advantage.
2.3
Implementation and limits
research9/menu/expanded_reader.py supplies the exact kernels, generic finite-menu Bellman
calculation, direct policy risks, schedule optimization and certificate checker. Its public minimax
interface requires exact axis-swap closure; it rejects an asymmetric menu rather than incorrectly
reusing uniform-prior minimax equality. Nominally unreachable branches have declared defaults.
research9/menu/verify_menu.py checks 48 normalized-posterior reference problems, 16 ordered-
record/histogram comparisons, malformed menus, a forged certificate, the four/eight-copy certificates
and the thirteen/fourteen-copy thresholds. The replay runtime is hardware dependent; no asymptotic
speed claim follows from a particular execution time.
The added settings, feedback controller, root coins, phase accuracy and switching times are
additional apparatus resources. The current theorem optimizes copies and error within the declared
menu, not total physical cost. Unequal setting efficiencies, common phase drift and uncertain controls
are separate physical parents requiring new bounds. These exact rational results supply a useful
restriction and benchmark for the continuous-menu investigation, not a global continuous optimum.
The methods extend established Bayesian/minimax decision theory and the previous programme’s
source–readout interface; no worldwide priority or new Born, trine or consciousness result is asserted.
8


## Source page 9

3
Nominal threshold: a checked obstruction and a continuous lower-
backup method
The nominal one-percent copy threshold remains [13, 14] for each admitted reader class. This route
does not establish thirteen-copy feasibility or impossibility. It supplies an exact thirteen-copy risk lower
certificate and a convergent continuous-action lower-backup construction, while identifying why the
tested cheaper relaxations do not settle the endpoint.
3.1
The thirteen-copy operator comparison
The local-effect grouped-target block representation and residual-corrected Gram dual bound also
admit a thirteen-click certificate. Rational Gram factorization and exact residual charging give, at
thirteen trials,
e13 ≥L13 = 0.009440886794141703 . . . .
The exact rational in research12/threshold/verification_results.json is authoritative. It
applies to both declared local classes and is below 0.01: it cannot exclude thirteen copies. The supplied
baseline thirteen-copy policy has error 0.011026493473 . . .; the additional child-pool policy research12
/nominal/policy_13_pool.json improves its certified error to 0.011009824045220384 . . ., still above
0.01. The outward rational bounds are reproduced by research12/nominal/verify_nominal12.py.
Fourteen copies attain 0.008749337644 . . .. These are not matching lower and upper certificates.
We also tested a stricter first-step relaxation: the first command is local and chosen before erasures,
and each posterior continuation is relaxed to a general permutation/local-transpose-invariant effect.
The posterior need not be sign symmetric, so all real Pauli coefficient degrees, including the identity,
enter the continuation SDP. On nine sampled directions from zero to π/2, the smallest proposed bound
was about 0.00949372508, at the bisector; the axis endpoints gave about 0.01001652347. These are
floating explorations, not continuous certificates. Their failure to close the gap is recorded without
treating a sample minimum or solver status as proof.
3.2
A rational lower dynamic programme for the full circle
A finite angular menu normally restricts the reader and supplies upper, not lower, bounds on the
continuous optimum. The following outer-action construction reverses that inclusion in a controlled way.
Let w ∈R4
+ be an unnormalized label weight vector. Write Vt(w) for minimum expected terminal-error
mass with t trials remaining. Thus V0(w) = min(wX+ + wY +, wX−+ wY −). Every fixed continuation
has a four-component loss vector in [0, 1]4; Vt is their infimum. It is positively homogeneous, concave,
and on the unit simplex is 1/2-Lipschitz in l1 distance. For normalized w, the last statement follows
because any loss vector has range at most one and P
h(wh −w′
h) = 0.
For a real pair a = (c, s) define the nominal kernels
K±,h(a) = η
2(1 ± vah),
K0,h(a) = 1 −η,
ah = (c, −c, s, −s)h.
These are physical for c2 + s2 = 1. They are still nonnegative normalized classical label kernels
throughout [−1, 1]2, although points outside the unit disk are explicitly fictitious relaxations, not
allowed phase commands. Define
Qt(w, a) =
X
o
Vt−1(w ⊙Ko(a)).
It is concave in a wherever these kernels remain nonnegative.
9


## Source page 10

Take rational unit supporting normals
(cj, sj) =
 
1 −(j/N)2
1 + (j/N)2 ,
2j/N
1 + (j/N)2
!
,
0 ≤j < N,
with their three quarter-turn rotations. Intersect successive supporting lines cjc + sjs = 1 to obtain
the 4N vertices of a circumscribed polygon PN. Cardinal normals ensure PN ⊂[−1, 1]2; all fictitious
kernels are therefore valid classical kernels. Let GM be the simplex grid whose coordinates are integer
multiples of 1/M.
Theorem 3.1 (Certified outer-action/grid lower backups). Suppose Lt−1(q) ≤Vt−1(q) at every q ∈GM.
For each grid point w and polygon vertex a, decompose each outcome weight as
zo = w ⊙Ko(a) =
X
i
γo,iqo,i,
γo,i ≥0,
qo,i ∈GM,
X
i
γo,i = ∥zo∥1.
Then
Lt(w) :=
min
a∈vert PN
X
o,i
γo,iLt−1(qo,i) ≤Vt(w).
Starting from exact L0 = V0 on the grid gives valid full-circle adaptive Bayes-risk lower bounds at every
horizon. They also lower-bound minimax risk and every randomized nonadaptive reader. They do not
establish local attainment of any polygon vertex.
Proof. Homogeneity and concavity of the true Vt−1 imply P
i γo,iLt−1(qo,i) ≤Vt−1(zo). Every phys-
ical circle point lies in the convex hull of the polygon vertices.
Concavity of the true Qt gives
mina∈vert PN Qt(w, a) ≤mina∈S1 Qt(w, a) = Vt(w). Combining the two inequalities proves the backup.
In particular, no concavity of a chosen piecewise-linear interpolant is asserted or needed. The argument
first compares the true Qt on the outer polygon, then bounds its vertex values individually. Random
schedules and feedback coins are covered because a Bayes minimum over randomized policies cannot
be smaller than the minimum over its deterministic components.
Proposition 3.2 (Explicit convergence allowance). Use the cumulative-coordinate simplex triangulation
implemented in co nv ex _g ri d_ bo un d. py . At normalized grid beliefs,
0 ≤Vt(w) −Lt(w) ≤t
 4
M + ηv
4N2

.
Proof. In cumulative coordinates, each interpolating simplex vertex differs from the normalized child
by less than 1/M in each cumulative coordinate. The four original probability coordinates consequently
differ by at most 2/M each. The l1/2 Lipschitz bound charges at most 4/M for the interpolation;
child masses sum to one. For consecutive normals the half-gap has tangent at most 1/N, so any outer
vertex has radius at most
√
1 + N−2 ≤1 + 1/(2N2). Project it radially to the circle. For every label
the outcome kernels change in total variation by at most ηv/(4N2). The same bound applies to any
continuation’s terminal [0, 1] loss and hence to its optimal value. Combining the one-step bounds
with the preceding grid-value error and inducting proves the claim. This is an explicit conservative
allowance, not a claim that it is sharp.
This is a finite-label specialization of established belief-grid bounding methods, with a rational outer-
action interface for this continuous reader. Lovejoy’s grid-based upper/lower POMDP approximation[4]
is a close antecedent (Operations Research 39(1), 1991, pp. 162–175, DOI 10.1287/opre.39.1.162); the
theorem above is proved independently. No worldwide novelty claim is made.
10


## Source page 11

3.3
Exact demonstrations and scalability ceiling
The standard-library implementation constructs rational intersections, checks every support inequality
and kernel normalization, and verifies every child’s nonnegative exact barycentric reconstruction. At
(M, 4N) = (8, 16), the exact lower values at the uniform prior are
L1 = 6/25,
L2 = 199/1250,
L3 = 18278/171875.
They are deliberately coarse and do not improve the existing small-horizon closed forms. Replays
at (4, 8) and (8, 8) verify the same algorithm under coarser interpolation; exact results are supplied.
There are
 M+3
3
 belief points, 4N actions and three outcomes; a straightforward backup has O(tNM3)
rational operations and O(NM3) cached interpolation storage. Each child needs at most four vertices.
Bit complexity is additional and depends on the exact rational directions and horizon.
To force the conservative allowance below 10−4 at thirteen trials, one sufficient choice is M >
1,040,000 together with a correspondingly large angular resolution. A full uniform grid is therefore
impractical as an immediate endpoint solver. Targeted refinements, stronger continuation bounds or a
different structure could improve it, but were not established here. We record this limit rather than
propose an enormous unperformed run. The branch’s current threshold statement remains [13, 14] for
each class.
4
Original robust task: fixed-nuisance certification and an unresolved
sixteen-copy endpoint
Throughout the generic domain statements, 0 < η0 ≤1; the benchmark uses η0 = 4/5. The gain floors
and phase bound retain the stated physical-parent constraints.
The original robust one-percent intervals remain [16, 17], separately for adaptive and randomized
nonadaptive continuous local readers. A larger endpoint-policy search did not attain sixteen copies.
We do not count its very small endpoint-risk improvement as a substantive threshold advance. The
useful supporting result is an exact low-dimensional representation of any frozen finite policy’s entire
nuisance-dependent risk, together with a sound, strict-feasibility-complete certificate procedure. It
does not prove that sixteen copies are impossible.
4.1
A three-variable exact interface for a frozen reader
A finite policy is a directed acyclic graph, with one rational unit direction (c, s) and three outcome
children at each internal node, a fixed deadline B, and sign decisions at leaves. It may be compiled from
a larger history tree. A fixed rational root mixture is allowed by taking the corresponding weighted
sum of the deterministic-root polynomials below. Classical root sign symmetrization is treated in the
same way. No axis-exchange symmetry is assumed for the asymmetric parent.
For a fixed source label, let g be its relevant gain (gX or gY ), and introduce
e = η,
u = ηg cos δ,
w = ηg sin δ.
These parameters remain fixed throughout the complete graph. They are a coordinate change for the
specified physical parent, not a new dynamics or an adversary choosing fresh values at each node. For
a positive X source, the three outcome probabilities at direction (c, s) are
(e + cu −sw)/2,
(e −cu + sw)/2,
1 −e.
For a positive Y source replace cu −sw by su + cw; the negative label reverses the signed terms.
11


## Source page 12

Theorem 4.1 (Exact frozen-policy nuisance polynomial). For every such B-trial reader, each label risk
is a rational polynomial qh(e, u, w) of total degree at most B. Its coefficients are computed bottom-up
by the same three-child recurrence as the risk itself, with polynomial rather than scalar arithmetic. The
number of possible monomials per label and node is at most
 B+3
3
. For gain floor ah > 0, the exact
physical parameter domain is
Kh = {(e, u, w) : e ∈[η0, 1], u ≥0, |w| ≤tu, a2
he2 ≤u2 + w2 ≤e2},
t = tan ∆< 1.
Consequently uniform certification of this frozen reader is equivalent to qh ≤ε on each Kh. The unused
other-axis gain need not be introduced into a label’s risk calculation.
Proof. At a leaf the error polynomial is zero or one. Each kernel is affine in (e, u, w). Multiplying the
three child risks by their kernels and adding raises the degree by at most one, proving the assertion by
induction. For the domain, a specified physical point plainly satisfies the stated inequalities. Conversely
the positive lower radial bound and |w| ≤tu force u > 0. Define g =
√
u2 + w2/e and δ = arctan(w/u).
Then g ∈[ah, 1] and |δ| ≤∆, and the original coordinates are recovered. Every point of Kh is therefore
admitted. Maximizing separately over labels is valid because the original robust objective is a supremum
over label and one nuisance choice fixed for that experiment. This does not authorize changing nuisance
values within a single trajectory.
This reduces certification from a superficial five-parameter search to four three-variable polynomial
problems. It does not reduce the unknown policy’s optimization dimension, assume that the gain
floors alone are worst cases, or certify arbitrary command-dependent errors outside the specified parent.
Coefficient growth, graph compilation, precision and the cost of the resulting polynomial optimization
still have to be charged. The bound is a monomial count, not a practical polynomial-time robust-design
claim.
4.2
Exact Bernstein cover certificates
For a rational box Q = Q
i[li, ri], map its coordinates affinely to the unit cube. If eq(t) = P
β aβtβ has
coordinate degrees di, its tensor Bernstein coefficients are
bk =
X
β≤k
aβ
Y
i
 ki
βi

 di
βi
.
The Bernstein basis functions are nonnegative and sum to one, hence mink bk ≤q ≤maxk bk on Q.
All entries are rational for the compiled policy and rational box. This standard polynomial-enclosure
method is used here as an exact frozen-reader certificate, not claimed as a new approximation technique.
Start with Q0 = [η0, 1] × [0, 1] × [−t, t]. Discard boxes whose interval radial or angular inequalities
exclude Kh; otherwise accept a box only when every Bernstein coefficient is strictly below ε. Bisect
unresolved boxes, cycling through their nontrivial coordinates. A finite accepted cover proves the
uniform risk guarantee; a cap or interrupted search reports inconclusive.
Proposition 4.2 (Soundness and strict-feasibility completeness). Every finite cover accepted by this
procedure is a valid original-parent risk certificate. For a fixed polynomial with maxKh qh < ε, the
uncapped subdivision procedure terminates. No termination is asserted when the maximum equals the
target or exceeds it.
Proof. Pruning only removes boxes disjoint from the physical set by necessary inequalities. Accepted
boxes have a polynomial upper bound below the target, so their union proves the claim. For completeness,
the compact set Kh has a positive strict risk margin. Continuity supplies a neighborhood on which the
12


## Source page 13

margin persists. Bernstein coefficient ranges converge to the point value as a box shrinks. Every point
outside Kh violates at least one defining closed inequality strictly; the elementary interval exclusions
eventually recognize a sufficiently small box around it. Compactness of the initial box then yields
a finite subdivision depth at which every surviving box is either excluded or risk-certified. Cycling
nontrivial coordinates ensures shrinking box diameters. The argument is a completeness statement for
strict certification, not a complexity bound or unrestricted quantum-reader theorem.
polynomial_certificate.py implements exact polynomial compilation, Bernstein bounds,
physical-domain exclusions and a capped cover search. Independent ordered-word enumeration verifies
108 polynomial identities on a three-trial genuinely adaptive graph; 500 exact grid evaluations check
the Bernstein enclosures. The proof, rather than those finite tests, covers arbitrary degrees. Constant
safe and unsafe examples exercise the stopping and inconclusive statuses. This package does not claim
that the cover code certified a new sixteen-copy operating region.
4.3
Why gain-endpoint checks alone are invalid
Even a legal fixed reader can have an interior maximum in one source label’s gain. Set η = 1, δ = 0,
use a direction with c = 4/5, s = 3/5 for sixteen trials, and decide minus exactly when fourteen plus
outcomes occur. For X+ the error is
q(g) =
 
16
14
!
p(g)14[1 −p(g)]2,
p(g) = (1 + 4g/5)/2.
On g ∈[9/10, 1] it is maximized at g = 15/16, where q = .28914388658 . . ., larger than the endpoint
values .28471846580 . . . and .27452150946 . . .. The maximizer follows from 14/p −2/(1 −p) = 0, and all
three comparisons are exact rational inequalities in the verifier. This is a counterexample to unjustified
per-label gain-endpoint certification, not a low-error reader or a counterexample to the correctly scoped
frozen-majority theorem. Other labels of this deliberately poor reader can have still larger errors.
4.4
Searches and exact updated status
The specified transpose-invariant operator relaxation, evaluated at sixteen copies under the existing
fixed hard prior, gives only approximately .00838194185. That value is exploratory and too weak to
exclude sixteen; we did not repeat the unchanged solve or call its optimizer a physical reader.
A new point-based policy proposal used 24 rational directions, including rational approximations
to the optimized frozen direction and nearby commands, with 150 sampled hard-endpoint trajectories
and a design-belief bank. It retained approximately 12,214 candidate nodes at level sixteen. A separate
linear programme mixed two roots and used a fresh sign-symmetry coin. The resulting pruned graph
has 1,467 nodes and floating endpoint errors approximately .01023427595453 on each hard axis. This
is still above one percent. Its tiny change from .0102368487113 does not settle an adjacent threshold
and is not advertised as a robust advance. The full original nuisance continuum was not certified for
this unsuccessful candidate.
Four separately optimized two-setting nonadaptive schedules used splits (1, 15), (2, 14), (4, 12), (8, 8),
the exact endpoint offset arctan(.01), and an optimized terminal Bayes-decoder prior. Their best
observed endpoint worst errors remained near the frozen benchmark. Such searches cannot exclude all
schedules, all feedback policies, or the original continuous uncertainty set. They remain reproducible
exploratory evidence.
Both full continuous robust thresholds therefore remain in [16, 17]. Seventeen is still the exact
minimum only in the established random-frozen common-positive-angle class. Further repetition of
these same policy families is not supported by the current search outcomes; a new structural lower
bound or substantially different control construction would be needed.
13


## Source page 14

5
Uniform angular approximation
5.1
A certified angular-net transfer, not a grid optimum
Theorem 5.1 (Uniform finite-horizon setting-rounding bound). Let a rational menu contain the circle
points
nk =
 
M2 −k2
M2 + k2 ,
2Mk
M2 + k2
!
,
−M ≤k ≤M,
their negatives and their axis swaps, where M ≥1. For the fixed shared η, v parent, write econt
B
and egrid
B
for the minimax error in either the adaptive class or the randomized nonadaptive class, consistently on
both sides. Then
econt
B
≤egrid
B
≤econt
B
+ εB,
εB = 1 −

1 −ηv
2M
B
≤Bηv
2M .
Thus an independently certified grid interval [L, U] gives the continuous interval [max(0, L −εB), U]
for the same policy class.
Proof. Up to sign, every direction is n(t) = ((1 −t2)/(1 + t2), 2t/(1 + t2)) for t ∈[−1, 1]. Round t to
k/M, within 1/(2M). The chord identity
∥n(t) −n(t′)∥2 =
2|t −t′|
p
(1 + t2)(1 + t′2) ≤1
M
implies source-specific one-trial outcome-law TV at most ηv∥n −n′∥2/2 ≤ηv/(2M). For an adaptive
policy the rounded controller maintains its virtual nominal history and applies the rounded setting at
each branch. Coupling the outcome records sequentially gives probability of any divergence at most εB.
The terminal target error changes by at most that amount on every source label. This rounds every
continuous policy to a legal grid policy, without converting feedback to a nonadaptive schedule. Root
mixtures are rounded componentwise. The converse inclusion of classes gives the other inequality.
The coupling compares outcome histories and their logical policy commands. It does not claim TV
closeness of literal physical setting archives: a different real angle can make those raw setting records
disjoint. All actual settings remain retained, and this theorem certifies target-decision risk rather than
full retained quantum-channel equivalence. It assumes the same calibrated noise model at the omitted
and retained angles; unrelated setting-dependent losses do not satisfy it automatically.
The code constructs the rational menu and an interval-transfer adapter, but it does not solve a
large grid or advertise its illustrative interval as a measured continuous optimum. Required grid size,
policy search cost and coefficient precision must all be charged by any consumer. This keeps the
continuous-angle guarantee distinct from an uncertified finite scan.
5.2
Verification and exact status
The all-posterior formula is also exposed as a reusable terminal-control certificate: rational weights
specify a direction numerator, squared norm and an exact rational-plus-square-root loss. It can eliminate
the last continuous setting search in a policy optimizer; it does not by itself solve the preceding controls
or establish a new minimax prior.
The standard-library implementation provides exact arithmetic in Q(
√
2), the fixed-reader risks,
small-horizon theorem values, the rational circle menu and the transfer allowance.
Independent
formulas check 85 click-mixture sums, 125 two-copy ordered-record calculations and 720 exact rational
chord-rounding cases, plus 114 arbitrary-posterior terminal checks with rational Pythagorean directions.
14


## Source page 15

Analytical proofs, rather than those finite tests, cover every angle and the all-horizon transfer. The
angular-net interface alone establishes no large-horizon continuous optimum, collective optimum or
total energy/apparatus advantage. Exact continuous equalities through three copies and four-copy
comparison certificates are supplied separately in the reader paper. The physical interaction remains the
declared controlled reader under ordinary Born probabilities. No trine, Born-selection or consciousness
theorem is added.
6
From the continuous feedback gap to a physical resource certificate
The continuous four-copy construction and universal nonadaptive lower certificate support a resource
statement: a feedback advantage in the same complete equatorial menu, including a nonzero operating
region of asymmetric gain, erasure and phase errors. We also replace a crude setting-switch count by
an exact actuator-path account and give a finite calibration interface covering the whole circle. All
these are restricted operational claims, not a universal apparatus, energy or thermodynamic optimum.
6.1
A nonzero noise and control-error operating region
Let eA denote the delivered exact rational ideal risk of the frozen four-copy adaptive tree, including its
two root symmetry bits. Its value is eA = 0.0306041631615 . . .. All forty action nodes and eighty-one
ternary leaves remain specified, including nominally impossible ideal null histories. Keep the four
fixed-label preparations and inaccessible preparation controller. At a fixed unknown detector tuple use
the asymmetric parent
η ≥η0,
gX, gY ≥g0,
η, gX, gY ≤1,
with the fixed Pauli channel of Bloch multipliers (gX, gY , gXgY ) before the phase reader.
Every
commanded angle has total phase error of absolute value at most d < 1 radian, including the common
fixed offset and declared control inaccuracy. The phase-error bound must apply to every command
used by the policy; it is not inferred from earlier calibration alone.
Fresh apparatus stock and
copies are independent conditional on the fixed hidden source and nuisance parameters. For the
adaptive/nonadaptive comparison, η, gX, gY and the common offset are fixed throughout the block.
Any residual optical/control error or quantization is a response to the command and trial index fixed in
advance, never a function of deployment outcomes or an uncounted feedback controller. Independent
stateless fresh noise may be included if declared separately. The uniform TV upper bound tolerates
broader conditional errors, but that fact does not license outcome-dependent hidden feedback in the
nonadaptive comparator.
Theorem 6.1 (Frozen-tree operating certificate). The same implementable four-copy policy, fixed
before the nuisance parameters are revealed, has worst sign error at most
eA + 1 −(1 −κ)4,
κ = (1 −η0) + (1 −η0g0) + η0g0d
2
.
The coupling bound controls the complete retained classical deployment record, including com-
manded/logical setting identifiers, nulls and controller coins, for the same frozen policy. Unknown
actual analog phases are part of the response kernel, not additional accessible phase logs. It is not a
norm bound on the residual quantum instrument or its bath.
Proof. For a source sign along either axis the ideal signed mean is one nominated component nh of the
unit direction. In the perturbed apparatus it is μh = ηghn′
h. The Euclidean chord is at most the phase
error, so
|nh −μh| ≤1 −ηgh + ηghd ≤1 −η0g0 + η0g0d.
15


## Source page 16

For ternary rows parametrized by efficiency and signed mean,
p = (1
2(η + μ), 1
2(η −μ), 1 −η),
the exact row distance is
TV(p, p′) = 1
2{|η −η′| + max(|η −η′|, |μ −μ′|)}.
The displayed mean allowance dominates 1 −η0, giving row distance at most κ. Couple identical
root coins and, until the first record mismatch, use the same history-dependent command in both
experiments. The probability of no mismatch is at least (1 −κ)4 by the conditional row bound. Every
terminal event, including a wrong decision, therefore differs in probability by at most 1 −(1 −κ)4. The
bound is uniform in the four source labels and preserves one fixed nuisance tuple throughout the tree.
The nominal final minimax risk is eA, which proves the assertion.
For the explicit operating box
η0 = g0 = 99999/100000,
d = 1/10000,
we obtain the exact rational κ = 12999790001/200000000000000 and
eA + 1 −(1 −κ)4 < 0.030865 < 31/1000 < 1/32.
The total phase allowance is about 0.00573 degrees. This is a narrow, precisely declared operating region
near the ideal apparatus, not an operating certificate for the principal noisy benchmark η = .8, v = .9
(whose separate finite-horizon comparison is handled in the continuous-reader paper), nor for the
specified larger asymmetric box a = .9, b = .8, η0 = .8.
The uncertainty set includes the ideal apparatus. Hence every robust randomized-nonadaptive
protocol still has worst error at least the universal ideal lower bound 1/32 at four copies. A stronger
pointwise statement is also available: for any fixed nuisance tuple, each nonnull unsharp equatorial
measurement is an ideal equatorial projector at its effective Bloch direction followed by an independent
sign flip, together with the sign-blind erasure. A nonadaptive schedule remains nonadaptive under
this simulation. Thus adding these detector imperfections cannot improve the full-menu nonadaptive
optimum. This is a statistical simulation, not an identification of inaccessible environments.
An explicit five-copy nonadaptive upper construction repeats the bisector and takes fair-tie majority.
Its ideal error is 1/2 −43
√
2/128 < 2492/100000. Applying the same row comparison at five copies
gives
eN,5 ≤2492/100000 + 1 −(1 −κ)5 < 0.025245 < 31/1000.
Together with the independent ideal three-copy adaptive lower bound in the continuous-reader paper,
these results give exact minimum budgets of four adaptive versus five nonadaptive at the selected
target 31/1000 throughout this operating box. The target was selected transparently inside a certified
gap, not presented as a preregistered experimental tolerance. The fixed unknown detector tuple is
never learned by an inaccessible oracle. The error guarantee holds for the same published four-copy
policy over the entire box.
6.2
Actual phase travel, rather than a generic switch charge
There are two distinct physical timing parents. In the serial pulse parent, each fresh copy receives
Hz = ħΩ(t)Z/2 with |Ω(t)| ≤Ωp. A fresh-copy phase command costs its required rotation angle
divided by Ωp. In the held-actuator parent, a calibrated phase element obeys  ̇q = u, |u| ≤Ωs, and its
current setting is retained between trials. Its time is the total actual phase travel divided by Ωs. This
16


## Source page 17

is an additional apparatus assumption, not a consequence of a single qubit’s Hamiltonian pulse. Both
start at phase zero. No terminal reset is included; any required reset is a separately charged operation.
Equatorial axes have period π if the controller keeps track of an outcome-polarity relabelling. This
does not permit an instantaneous physical π jump. A continuous shortest axis path is lifted to the
actual phase coordinate, and its known polarity bit recodes the recorded signs. Hardware without
that permission instead pays for its actual angle range. Rates are in radians per second; all timing
expressions below are in seconds.
Theorem 6.2 (Nonadaptive schedule ordering). For independent copies and time-homogeneous fixed
nuisance parameters, a nonadaptive schedule’s decision risk is unchanged by permuting its settings and
correspondingly permuting the labelled outcome data supplied to its decoder. Let S be the set of required
projective-axis settings and include the actuator’s initial point q0. On the angle circle of circumference
π, delete each consecutive gap in turn. If the remaining arc has length L and q0 has distances u and
L −u from its endpoints, then the exact minimum open actuator travel over schedule orders is
L(S; q0) = min
gaps{L + min(u, L −u)}.
Repeated settings require no additional travel when measured consecutively. In the common-positive
quadrant with q0 = 0, increasing angle order attains L = max S.
Proof. The conditional likelihood is a product of setting-labelled factors, so a permutation with the
inverse data relabelling leaves every source-label error unchanged. The physical timestamps change
and are retained; this is not equality of the original timed apparatus channels.
An optimal open actuator route can be shorter than a full circle, since starting at q0 and visiting
all settings in one circular direction already has length strictly below π for a nontrivial finite set. Its
travelled support therefore lies in a proper closed arc containing all required points and q0. Shortening
either unused endpoint to a required point shows that the omitted gap may be chosen consecutive. On
an interval of length L, a route starting at coordinate u must visit both endpoints. It pays at least
L + min(u, L −u), attained by visiting the nearer endpoint first and then traversing to the farther
endpoint. Minimize over omitted gaps. Conversely every such candidate route is implementable by the
bounded-speed actuator. In the common-positive quadrant, direct increasing order from zero attains
the farthest point’s unavoidable distance.
This theorem gives the nonadaptive comparator its best setting order; it cannot be charged an
arbitrary back-and-forth order to manufacture a feedback advantage. It does not apply to arbitrary
drift or correlated future stock. An adaptive schedule generally cannot be reordered without changing
its observation-dependent actions.
For the actual forty-node adaptive tree, evaluate every ternary history and both root axis-swap
controls. The sign-reversal root operation is implemented by logical sign and decision recoding and
adds no phase motion. Rational outward arctangent intervals give worst total phase costs
LA < 139/25 = 5.56
(held actuator),
PA < 47/10 = 4.7
(per-copy pulse).
The enclosed values are respectively 5.5517277189120 . . . and 4.6905651101989 . . . radians. All 162
ternary-history/root-swap cases are covered, so rare perturbed nulls have not been discarded.
A finite command interface can use fifteen-bit indices for 32768 equally spaced levels on [0, π/2].
Nearest rounding has error at most π/[4(32767)] < 1/40000 radian, using π < 22/7. Allocate at
most 1/20000 to the fixed offset and at most 1/40000 to additional optical phase error; the total
remains inside d = 1/10000. The archived command identifiers and finite packets are identical in
the reference and perturbed record comparison; quantization enters their response kernel. No TV
comparison of disjoint exact-analog-angle logs is asserted. Quantization adds at most seven rounding
17


## Source page 18

errors to a four-trial held path and four to the pulse sum. Thus 7/40000 and 4/40000 respectively still
fit inside the conservative 5.56 and 4.7 radian caps. The assumed slew model concerns the commanded
actuator trajectory; bounded optical phase error alone would not bound arbitrary unmodelled actuator
wandering or settling time.
The policy already uses a useful physical tie-break: on twenty-one final nodes no nonnull sign can
change the nominated decision, and it keeps the previous setting. Twenty of those nodes have the same
decision on all three outcomes. One has a different default decision on the ideal-impossible null, but its
null probability is angle-independent in this parent. The retained terminal trial remains present. The
repair preserves ideal risk and avoids unnecessary held-actuator movement; the operating certificate
directly covers the resulting frozen tree rather than assuming all residual records are unchanged.
6.3
A full-menu copy advantage with a conditional time advantage
Let τ > 0 be the serial per-copy duration for preparation, propagation, detection and matched terminal
handling, excluding the separately modelled phase operation. Let l≥0 upper-bound each of the three
noninitial causal lookup/feedback delays. Sufficient adaptive time bounds are
TA,s ≤4τ + 3l+ 139
25Ωs
,
TA,p ≤4τ + 3l+
47
10Ωp
.
Every nonadaptive protocol meeting the same target within the same continuous menu and operating
box needs at least five fresh copies, so its time is at least 5τ, even before its optimized phase travel is
charged. Consequently either
3l+ 139
25Ωs
< τ,
or
3l+
47
10Ωp
< τ
suffices for a strict clock advantage in its corresponding serial parent. These are conservative sufficient
conditions, not exact hardware optima.
The two rates refer to different controls and cannot be
substituted for one another by reusing a single apparatus certificate.
For Ωsτ = 20 and l/τ = 1/20, the held implementation saves at least 143τ/250 = 0.572τ per
experiment relative to the universal nonadaptive lower time. In the separately specified pulse parent
with Ωpτ = 20 the lower saving is 123τ/200 = 0.615τ. These are illustrative declared rates, not
measured device data. If an actual extra net setup/calibration time D is charged to the adaptive
apparatus, R repeated uses certify a benefit only when R times that lower saving exceeds D. For
the illustrative D = 10τ, the sufficient counts are 18 and 17 uses, respectively. Reuse requires a
calibration/reference hold contract over the whole block. The nonadaptive reader is not forced to
calibrate settings it never uses. Failed sufficient inequalities do not prove that feedback is slower.
The constructive adaptive controller may store a seven-bit pointer over the 121 internal/terminal
prefixes; the remaining deadline is encoded in the pointer’s depth.
Two root group bits remain
separate. A direct finite-command ROM account uses at most 80 · 15 = 1200 angle bits for both root
axis controls, plus 81 terminal decision bits; indexed tree arithmetic avoids a separate child-pointer
table. Arithmetic workspace, clock precision, the held actuator’s physical state, phase tracking and
the reference remain additional resources. A fully explicit ternary-prefix archive can be retained
independently. These are upper resource accounts, not minimum-controller theorems. They cannot be
turned into a thermodynamic work, energy or apparatus-volume conclusion.
6.4
Finite calibration covering all continuous angles
A finite calibration route is available under an explicit structural promise: shared sign-blind efficiency,
unbiased outcomes, and a time-homogeneous sinusoidal effect law. For each trusted positive source
18


## Source page 19

h = X+, Y + write
μh(θ) = Ah cos θ + Bh sin θ,
with the negative source having mean −μh(θ). The asymmetric Pauli/phase parent with fixed gains
and a common fixed offset has exactly this form about the known realized command angle. This
calibration theorem is a separate structural promise: arbitrary command-dependent optical errors or
nonlinear quantization residuals need not preserve the sinusoid. They require a separately validated
uniform row-error allowance, additional command calibration, or a justified response model; four probe
batches do not certify them automatically. Use M independent trusted probes for each of the four pairs
(X+, 0), (X+, π/2), (Y +, 0), (Y +, π/2).
The recorded variable Z ∈{−1, 0, 1} estimates the four coefficients; the pooled click fraction over 4M
probes estimates η. Hoeffding and a union bound give the simultaneous predeployment event
Pr

max
h {| bAh −Ah|, | bBh −Bh|} > u or |bη −η| > w

≤8e−Mu2/2 + 2e−8Mw2.
For completeness, the bounded-variable inequality follows by writing K(t) = log Eet(Z−EZ). Under
exponential tilting, K′′(t) is a variance and is at most one quarter of the squared support width;
K(0) = K′(0) = 0 then bounds the moment generating function by et2(b−a)2/8. Chernoff optimization
for an independent sample gives the two-sided bound 2e−2Mu2/(b−a)2. Apply widths two and one to
the signed means and pooled clicks respectively, then union the five events. For α = 2−k the exact
conservative choice
M =

max
2(k + 4)
u2
, k + 2
8w2

makes the failure probability at most α; total consumed stock is 4M. This bound covers every angle,
because the coefficient error has absolute value at most u(| cos θ| + | sin θ|) ≤
√
2u. It cannot validate
an arbitrary detector between unmeasured settings; without the sinusoidal/common-efficiency promise
additional coverage is required. Trusted source preparation and independence are paid premises.
For any nominated valid reference kernel whose four coefficients and efficiency lie inside those same
calibration intervals, the actual and reference kernels differ by at most
κcal = min{1, w + max(w,
√
2u)}
in every source/angle row. Thus the same policy at horizon B has retained classical commanded-
setting/outcome record distance at most 1 −(1 −κcal)B. It excludes an extra unread analog-phase
log. This includes policies and angles selected from the calibration data: the event covers the whole
continuous family before deployment. It does not identify the full residual quantum instrument or
unread environment.
If calibration acceptance is A, a selected reference policy has verified reference error e and transfer
allowance dB, then
Pr(A ∩error) ≤(e + dB) Pr(A) + α.
An accepted-run conditional error bound must retain the corresponding α/ Pr(A) term, unless a
separate acceptance-probability guarantee justifies a smaller expression. Bad calibration is charged
once for a stable shared block; past samples do not prove future stability or a reference-reuse lifetime.
This is a completed finite interface, not a practical calibration-cost claim. For example, k = 10, u =
w = .01 consumes 1,120,000 probes but does not by itself certify any advertised reader accuracy. A
much tighter illustration, k = 20, u = 1/22000, w = 1/88000, consumes 92,928,000,000 probes. Its
conservative coupling allowance certifies Pr(A∩error) < .01 for the nominal fourteen-copy bisector under
the stated reference-acceptance contract; this is not an unqualified conditional-on-acceptance bound.
19


## Source page 20

The stock cost plainly overwhelms a few saved copies. Better device-specific likelihood calibration can
be pursued; it is not hidden inside the present resource claim.
Phase-reference preparation, conditional update, reset, holding and consumption remain separately
declared resources. Established reference- degradation analyses may bound an average even when
records are kept; that does not automatically supply a uniform conditional guarantee or the adaptive
interaction model used here[2]. No reference lifetime is transferred without matching those contracts.
6.5
Reproducible checks and remaining limits
The delivered research10/resources/verify_resources.py and research10/resources/policy_
resources.py, with the independent research10/audit/check_resources.py, check 84 exhaustive
schedule-tour instances against independent permutation enumeration, 873 individual quadrant orders,
81 exact ternary row distances, the two exact calibration allocations, and the rational operating
and clock inequalities. The policy cost evaluator uses the delivered tree and outward arctangent
intervals rather than a floating-point maximum. The independent checker can verify these certificates
without trusting the exploratory angle search. The nominal .8/.9 continuous one-percent threshold,
the larger asymmetric robust frontier and universal total-resource optimization remain unresolved.
The source–readout contribution is a typed full-menu reader, calibration and cost interface, not a
Born-selector, source-ontology or consciousness mechanism.
References
[1] Stephen M. Barnett and Sarah Croke. Quantum state discrimination. Advances in Optics and
Photonics, 1(2):238–278, 2009. doi: 10.1364/AOP.1.000238. URL https://opg.optica.org/aop
/abstract.cfm?URI=aop-1-2-238.
[2] Stephen D. Bartlett, Terry Rudolph, Robert W. Spekkens, and Peter S. Turner. Degradation of a
quantum reference frame. New Journal of Physics, 8:58, 2006. doi: 10.1088/1367-2630/8/4/058.
URL https://arxiv.org/html/quant-ph/0602069v2.
[3] B. L. Higgins, A. C. Doherty, S. D. Bartlett, G. J. Pryde, and H. M. Wiseman. Multiple-copy
state discrimination: Thinking globally, acting locally. Physical Review A, 83:052314, 2011. doi:
10.1103/PhysRevA.83.052314. URL https://arxiv.org/html/1012.3525v2.
[4] William S. Lovejoy.
Computationally feasible bounds for partially observed markov decision
processes. Operations Research, 39(1):162–175, 1991. doi: 10.1287/opre.39.1.162.
[5] Jeremy Rodgers. Source–readout non-equivalence: Descent and equivariant reconstruction obstruc-
tions, 2026. URL https://doi.org/10.5281/zenodo.21369967.
20
