# Robust Phase-to-Record Conversion with Retained Loss Outputs

Jeremy Rodgers. 27 October 2026.

Publication DOI: https://doi.org/10.5281/zenodo.23721103

This is the complete searchable PDF text transcription. Display geometry is preserved in the HTML vector formula panels. Linear PDF text does not encode fraction, matrix, or script topology. Consult the HTML formula rendering for exact notation.

## Source page 1

Robust Phase-to-Record Conversion with Retained Loss Outputs
Jeremy Rodgers
Independent Researcher
www.everythingequation.com
27 October 2026
Abstract
We specify a two-mode phase source, bounded coherent reader and terminal stable detector
flags in one complete instrument, retaining all null/loss outputs and arbitrary inert references.
A solved finite-lifetime control problem gives the sharp unambiguous-success frontier. A distinct
bounded-jump-hazard problem has a different attaining instrument and finite collision realization.
We derive an analytic minimax conditional-error/conclusive-rate frontier for amplitude, phase and
visibility uncertainty, and realize it with the same bounded coupling. A calibrated entrance filter
separates the reader ratio from common uncertain conversion; a complete controlled-path overlap
certificate then gives a sharp imperfect-matching tolerance and a pointer/reference distance. The
results concern declared apparatus and output-access classes. They neither derive Born statistics
nor establish a biological or consciousness mechanism.
1
Task, antecedents and operational scope
This paper develops phase-sensitive source–readout constructions within Shadow Theory’s pre-existing
programme [9]. A source distinction may be invisible in separate mode intensities yet accessible to a
phase-sensitive interaction. To turn that observation into a physical statement one must specify the
source stock, interaction, committed records, null/loss outputs and admitted decoder. We study the
common-sign phase distinction in two degenerate one-excitation modes. The preparation controller
is unread by the reader, failed trials are not replaced by freshly sampled sources, and all complete
instruments act with identity on an arbitrary inert reference. Unambiguous discrimination and optical
filtering are established techniques. Uzdin–Gat’s norm-action bound supplies a close unitary-resource
antecedent; Chefles–Barnett’s state-separation and symmetric-state discrimination results supply the
underlying pure-state geometry. The added results here solve the specified independently lossy stable-flag
control problem, a source-uncertainty minimax and a restricted common-conversion/imperfect-matching
filter problem. These antecedents are credited explicitly [1–6, 10]. No worldwide priority claim is made.
Ordinary quantum probabilities and the prescribed preparation/control laws remain premises.
Trial, outputs and notation.
One trial here uses one original source preparation and retains its
conclusive, null and loss branches. A conclusive-rate guarantee Q and conditional error ε therefore
describe a decision problem with inconclusive outcomes. They are not a fixed-copy deadline task in
which every record must receive a sign. In particular, the preparation visibility v and transfer ceiling η
below have different physical meanings from the detector visibility and erasure efficiency of a repeated
equatorial-reader model. Identifying them requires a derived common instrument, not equality of their
symbols. A coherent direct-sum output, a classically recorded instrument and its pointer-only marginal
are also different channels. We state which is used in each norm or resource claim; none of these choices
gives the decoder access to an otherwise unread retained bath or reference.
1
https://doi.org/10.5281/zenodo.23721103


## Source page 2

The Hamiltonians, uncertainty sets and control theorems below specify the apparatus and access
conditions for the stated tasks. Specifying and optimizing one reader does not establish a unique
underlying source, and retaining a loss bath does not automatically grant permission to measure it.
Reduced detector equivalence and complete retained-output comparison are separate claims, treated
explicitly in the technical companion.
Organization.
Section 2 treats bounded coherent conversion and the distinct bounded-hazard model.
Section 3 develops preparation uncertainty and fixed upstream attenuation. The remaining sections
separate a calibrated entrance filter from common conversion, then quantify departures from exact
matching. The companion contains absorbing-reader banks, detector comparison, finite references and
calibration/monitoring interfaces under their own stated contracts.
2
Bounded coherent conversion and complete detector records
2.1
Source and declared apparatus
Use two degenerate source modes, with a single excitation spanning R = span{|0⟩, |1⟩}. The two
possible source states are
|ψ±⟩= a|0⟩± b|1⟩,
a =
√︂
(1 + s)/2,
b =
√︂
(1 −s)/2,
0 < s < 1.
(1)
They have the same separate mode intensities and overlap s. Their relative phase differs by π. Using
normalized phase-sensitive templates, informed by [7, pp. 18–21, Eqs. (58)–(70)] and [8, Section 32,
pp. 42–43], define the reciprocal reader states
|φ±⟩= b|0⟩± a|1⟩,
⟨φ±|ψ∓⟩= 0,
|⟨φ±|ψ±⟩|2 = 1 −s2.
The readout has two orthogonal, stable flag modes F labelled + and −. There are also orthogonal
lost-output modes, initially vacant. Every mode is included in the one-excitation description; no new
actual sample is loaded after a null result. Source/reference inputs can be any ρRR with arbitrary
finite inert reference R. The reader and vacant output modes have one common input-independent
preparation. The loss bath starts in its vacuum, independently of that original preparation; the scalar
Markov loss law and absence of re-excitation are physical model assumptions of the declared apparatus.
The claim of unambiguity is for the designated pair (1); the instrument itself is defined for every
reference-extended input.
The apparatus Hamiltonian on the ready-plus-flag subspace is
H(t) = ħ
(︄
A(t)
C(t)∗
C(t)
D(t)
)︄
,
A = A∗,
D = D∗,
∥C(t)∥≤G.
(2)
A, C, D are piecewise continuous on the finite control interval; the stated bound holds almost everywhere.
This regularity ensures that the propagator below exists. G > 0, A, C, D have units s−1 and H has
units joules. Uniform irreversible loss acts only on the ready subspace at rate l≥0 in s−1. Its complete
amplitude map is Lloss =
√
lWPR, where W is an isometry to the lost-output space. It isometrically
transports the instantaneous ready component, including its conditional reference assemblage. Earlier
filtering and conditioning may have changed the original source/reference correlations; no preservation
of those original correlations is asserted. The outgoing state is not replaced by a vacuum or a classical
label. Once lost, the excitation never returns. There are no other protected storage subspaces, fresh
inputs, gain channels or readers of the lost field in the allowed conclusive-record catalogue. Block
Hamiltonians are allowed in the upper bound; they cannot be used to add an uncounted protected
2


## Source page 3

ancilla. The optical/cavity coupling and its timing are prescribed controls; this is not an autonomous
clock construction.
The no-loss propagator on the four-dimensional ready-plus-flag space is
 ̇Ueff(t) = [−iH(t)/ħ−lPR/2] Ueff(t).
Let IR embed the two-dimensional source. A complete terminal instrument consists of
K± = P±Ueff(T)IR,
K0 = PRUeff(T)IR,
Kloss(t) =
√
lWtPRUeff(t)IR.
(3)
Here Wt retains the outgoing quantum mode. The coherent temporal output is an L2 amplitude sector;
a registered loss time is instead a classical record, with the output-space convention specified below.
The identity
K∗
0K0 + K∗
+K+ + K∗
−K−+
∫︂T
0
Kloss(t)∗Kloss(t)dt = I
(4)
follows by differentiating U∗
effUeff. It makes the sum of the instrument branches completely positive and
trace preserving on every ρRR with identity on R. Before readout, the direct-sum amplitude map is an
isometry retaining coherent quantum output sectors. A classically recorded instrument is obtained by
the specified dephasing or measurement of those sectors (and time bins, when used). For an exact-time
classical record the output is an integrable trace-class-valued kernel on the null/flag atoms and [0, T],
with norm ∑︁
c ∥ωc∥1 +
∫︁T
0 ∥ω(t)∥1dt. It is not a trace-class diagonal density operator on the coherent
temporal L2 space. Finite time bins give ordinary cq direct sums. These channels share the displayed
effects but are not identical channels; their dilation and storage costs must be counted separately. This
uses the stipulated ordinary quantum probability law; it does not derive that law.
Only the terminal flags are conclusive. They are committed after the active coupling is switched
off. Before that time, flag amplitudes can coherently return to the source, so no promise of an earlier
immutable event is made. After decoupling, later controls act on other systems and leave all flag and
loss modes untouched; the final records then persist. Reading or dephasing the flags during the active
pulse is a different physical model.
2.2
Sharp finite-lifetime success frontier
For a two-dimensional input, error-free conclusive effects necessarily have
E± = K∗
±K± =
q±
1 −s2 |φ±⟩⟨φ±|,
 ̄q = (q+ + q−)/2.
(5)
This follows because a positive effect with zero expectation in |ψ∓⟩annihilates that vector. In particular,
⟨1|(E+ + E−)|1⟩=
 ̄q
1 −s.
(6)
A bound on coherent transfer of the input |1⟩therefore bounds the average success of every allowed
unambiguous reader, including asymmetric ones.
Define t∗by
t∗=
⎧
⎪
⎪
⎪
⎪
⎪
⎪
⎪
⎪
⎨
⎪
⎪
⎪
⎪
⎪
⎪
⎪
⎪
⎩
arctan(4Ω/l)
Ω
,
0 < l< 4G,
Ω=
√︁
G2 −l2/16,
1/G,
l= 4G,
artanh(4χ/l)
χ
,
l> 4G,
χ =
√︁
l2/16 −G2,
π/(2G),
l= 0.
(7)
3


## Source page 4

Let τ = min(T, t∗) and
fG(t) =
⎧
⎪
⎪
⎨
⎪
⎪
⎩
(G/Ω)e−lt/4 sin(Ωt),
l< 4G,
Gte−Gt,
l= 4G,
(G/χ)e−lt/4 sinh(χt),
l> 4G.
(8)
The l= 0 first case has Ω= G.
Proposition 2.1 (Optimal phase-to-flag conversion with an independent loss sink). Under the declared
apparatus and stable-flag readout catalogue,
 ̄q ≤(1 −s)fG(τ)2.
(9)
The bound is attained with q+ = q−. For a deadline at least t∗it is
qmax = (1 −s)e−lt∗/2.
(10)
It remains valid when arbitrary inert references and all original loss/null outputs are retained. It is not
an optimum over new measurements of those retained outputs or of the reference.
Proof. First consider any normalized source input and its no-loss vector, split into ready and flag
components with norms x and y. Write x = r cos θ, y = r sin θ, 0 ≤θ ≤π/2. Loss gives  ̇r/r =
−lcos2 θ/2. Cauchy–Schwarz applied to the cross Hamiltonian gives an effective real transfer control
geff with |geff| ≤G and
 ̇θ = geff + (l/2) sin θ cos θ.
Block Hamiltonians cancel from these norm equations. At zero components the same conclusions follow
by continuous limits.
Define
F(θ) =
∫︂θ
0
lcos2 u
G + (l/2) sin u cos u du.
For every trajectory, including controls that reverse direction,
d
dt[log r2 + F(θ)] = lcos2 θ
[︃geff + (l/2) sin θ cos θ
G + (l/2) sin θ cos θ −1
]︃
≤0.
Thus y2 ≤e−F(θ) sin2 θ. This upper envelope increases on 0 < θ < π/2, since its logarithmic derivative
is
2 cot θ −
lcos2 θ
G + (l/2) sin θ cos θ =
2G cot θ
G + (l/2) sin θ cos θ > 0.
Scalar comparison also bounds θ(t) by the trajectory with geff = G until that trajectory first reaches
π/2. Hence constant maximal coupling, stopped at that first time, maximizes flag transfer at every
deadline. Its two scalar amplitudes are
uG(t) = e−lt/4[cos(Ωt) −lsin(Ωt)/(4Ω)],
vG(t) = −ifG(t),
with their continuous critical and hyperbolic forms. Its first ready zero is (7); at that time fG(t∗)2 =
e−lt∗/2. This proves the transfer bound y(T)2 ≤fG(τ)2. Apply it to |1⟩in (6) to obtain (9).
For attainability let H be the real balanced two-mode matrix 2−1/2(︁1 1
1 −1
)︁. Set A = D = 0 and,
during the active time τ,
C = H diag(g0, G),
fg0(τ) =
√︄
1 −s
1 + s fG(τ).
(11)
4


## Source page 5

For g = 0 the transfer amplitude is zero and for g = G it is fG(τ). Continuity in g therefore guarantees
a solution 0 ≤g0 ≤G to this intermediate target. No monotonicity assumption is needed. These are
two independent damped taps in the balanced flag basis. Their terminal flag map is
−iH diag(fg0(τ), fG(τ)).
Equation (11) makes each wrong flag amplitude exactly zero for its excluded source state, and each
correct probability equals (1 −s)fG(τ)2. Switch off the coupling after τ; the stable flags then remain
unchanged until T. Residual ready amplitudes may subsequently be lost, and are included in (3). That
proves attainability and preserves (4) on all inputs and their references.
For s = 0.6, G = land T = 2/G, one has t∗= 1.3613444250/G, g0 = 0.3764245988G, and
q+ = q−= 0.2025106210. The loss-limited transfer factor is 0.5062765525. Requiring success at least
0.2 with that overlap and a sufficiently long deadline gives the sharp threshold l/G ≤1.0211025506 in
this apparatus class. Above it no permitted pulse sequence achieves the target. At the critical damping
point l= 4G, the transfer factor is e−2; for large l/G it is asymptotic to 4G2/l2. For l= 0 the frontier
reduces to ideal unambiguous discrimination after a finite coherent pulse. These results are parameter
requirements for a possible experiment, not measured biological lifetimes or coupling strengths.
2.3
Bounded coherent action and minimum output ranks
The loss-free implementation can be specified without a continuum bath. For any desired 0 ≤q ≤1 −s,
set
n0 =
√︂
1 −q/(1 + s),
n1 =
√︂
1 −q/(1 −s),
θj = arccos nj.
A constant four-mode Hamiltonian (2) with C = H diag(θ0, θ1)/τ gives exactly
K0 = diag(n0, n1),
K± = −i
√︃
q
1 −s2 |±⟩⟨φ±|.
(12)
This is a single finite unitary interaction with blank detector modes, not a concatenation of statistical
bounds. Excitation-preserving couplings between a source mode and a detector mode are ordinary
beam-splitter or resonant Jaynes–Cummings interactions in the one-excitation sector. Their matrix
entries have units ħθj/τ. After the pulse, decoupled detector excitations are the final stable records.
No independent samples or erased failure populations are assumed.
If the resource is instead the cross-subspace action A =
∫︁∥PFHPR∥dt/ħ, the same norm equations
at l= 0 give
 ̄q ≤(1 −s) sin2(︁min{A, π/2}
)︁.
The construction saturates it, with A = arcsin
√︁
q/(1 −s). This is a specialization of known unitary
measurement resource bounds, included to make the physical resource contract explicit. Bounded
Hamiltonian coupling is not the same constraint as a bounded Markov jump hazard; neither bound
may be substituted into the other.
For 0 < q < 1 −s the three terminal POVM effects have ranks 1, 1, 2 for +, −, 0. Any orthogonal-
record amplitude dilation of these exact effects requires at least 1 + 1 + 2 = 4 output dimensions: the
amplitude map in each orthogonal record sector has rank equal to its effect. Equation (12) attains this
count. At q = 1 −s the null effect has rank one and the abstract minimum is three. The four-mode
Hamiltonian is still a sufficient implementation; we do not claim it is a minimum-level Hamiltonian at
that endpoint. Original input references tensor onto this count; they are not newly consumed reader
ancillas. These are reachable orthogonal amplitude-sector dimensions. They do not include an extra
pure environment needed to realize a fully dephased classical record channel; classicalizing a coherent
flag requires its own retained-output accounting.
5


## Source page 6

2.4
Why a static dark matched reader fails, and a continuous repair
Consider a static absorbing implementation of the matched-template prescription [7, pp. 18–21], with
fixed jump readers dark to the other source: L± = √γ |±⟩⟨φ±|. Initially the excluded click amplitude
is zero. However the full hazard is Q = γ diag(1 −s, 1 + s), so its null evolution changes the source.
For |ψ−⟩, the wrong + density at time t is
p+|−(t) = γa2b2[e−γ(1−s)t/2 −e−γ(1+s)t/2]2.
(13)
It is positive for s, t > 0. Its integrated infinite-time value is s2/2; at s = 0.6, γT = 2, it is 0.0394994846.
This is a tested obstruction to calling a fixed dark instantaneous kernel an error-free continuous
instrument.
A faithful repair keeps the reciprocal geometry and changes the reader to account for its own null
back-action. Write
q(t) = (1 −s)(1 −e−κt),
N(t) = diag
(︃√︂
1 −q(t)/(1 + s),
√︂
1 −q(t)/(1 −s)
)︃
,
where κ > 0 is a declared maximum signal hazard. Use
L±(t) =
√︄
q′(t)
1 −s2 |±⟩⟨φ±|N(t)−1.
(14)
At finite times these coefficients are bounded and known in advance. The Hamiltonian is zero; the
reader does not acquire an actual sign to decide its next setting. Direct calculation gives
∑︂
±
L∗
±L± = diag
(︃
q′
1 + s −q,
q′
1 −s −q
)︃
≤κI,
L±(t)N(t) =
√︄
q′(t)
1 −s2 |±⟩⟨φ±|.
Thus every conclusive time is unambiguous. A null result filters the surviving quantum source, and the
predetermined reader compensates exactly for that filter. No fresh independence is inferred.
This bounded-hazard construction is also optimal in its own model class. For any absorbing two-port
unambiguous instrument with Q(t) ≤κI, the no-transition matrix satisfies N(t)∗N(t) ≥e−κtI, since
d
dt(N∗N) = −N∗QN ≥−κN∗N. With average cumulative success  ̄q(t), (6) gives
1 − ̄q(t)/(1 −s) = ⟨1|N(t)∗N(t)|1⟩≥e−κt.
Therefore  ̄q(t) ≤q(t), attained above, including when the two successes are allowed to be asymmetric.
Add independent uniform ready loss at rate l. The no-event matrix becomes e−lt/2N(t), the signal
Kraus density is e−lt/2L±(t)N(t) and the loss density is
√
le−lt/2WtN(t). The three full effects plus
the null effect sum to identity, as in (4). The optimal conclusive probability is
qhazard,loss(T) = (1 −s)
κ
κ + l[1 −e−(κ+l)T ].
(15)
To see optimality rather than only attainability, consider any competing schedule without loss and its
cumulative success qc(t) ≤q(t). Uniform loss multiplies its conclusive time density by e−lt. Integration
by parts gives
∫︂T
0
e−ltdqc(t) = e−lT qc(T) + l
∫︂T
0
e−ltqc(t)dt ≤
∫︂T
0
e−ltdq(t),
which is (15). This argument requires the same independent scalar loss law and the same stable
conclusive-output catalogue; it does not combine unrelated noise models. At s = 0.6, l= 0.25κ and
κT = 2, the conclusive, null and loss probabilities are respectively 0.2937328004, 0.3967523953 and
0.3095148043.
6


## Source page 7

2.5
A finite collision implementation and retained retry records
The continuous model has infinitely many temporal modes. A finite version need not pretend to
store such a continuum in a finite register. Choose M stages, tk = k∆, ∆= T/M, qk = q(tk) and
Nk = diag
√︁
1 −qk/(1 ± s). At stage k, first attenuate both ready modes by e−l∆/2 into two fresh,
retained loss modes. Then use a two-mode tap with local null matrix NkN−1
k−1 and two fresh conclusive
modes. Its tap angles are
θkj = arccos (Nk)jj
(Nk−1)jj
.
The same finite Hamiltonian construction as (12) implements these taps and their balanced output
mixing. Excitations already in old output modes never interact again. Consequently the cumulative
null map is exactly e−ltk/2Nk, not a redraw. The conclusive Kraus maps in bin k are
K±,k = e−ltk/2
√︄
qk −qk−1
1 −s2
|±, k⟩⟨φ±|,
and the loss map is
Kloss,k =
√︁
1 −e−l∆e−ltk−1/2WkNk−1.
Every original mode, source remainder and detector register is retained. These finite Kraus maps
satisfy completeness exactly, for arbitrary inputs and inert references. They have success
qM =
M
∑︂
k=1
e−ltk(qk −qk−1),
e−l∆qhazard,loss ≤qM ≤qhazard,loss.
(16)
The bounds follow by bounding e−lt on each interval in the exact integral. This is a probability
convergence guarantee; no equality of the unmeasured continuum bath and the finite bath is asserted.
For the numerical example above M = 8 gives qM = 0.2842794177, and M = 128 gives 0.2931579860.
For positive loss and finite nonzero stages, each of the 2M conclusive effects has rank one, each
of the M loss effects rank two, and the null effect rank two. An orthogonal time-bin record dilation
thus needs at least 4M + 2 reachable output dimensions; the one-excitation mode construction has
exactly that count. With zero loss it is 2M + 2. This counts reachable orthogonal amplitude sectors
for the specified record isometry, not all physical hardware, an autonomous controller, or an additional
environment implementing a fully dephased classical record channel. Arrival-time labels are histories
of different possible single absorptions, not independent trials on one reused source.
3
Preparation uncertainty and a sharp conditional-error frontier
3.1
Uncertainty and the unchanged access contract
Use two degenerate one-excitation source modes |0⟩, |1⟩. The unknown label is h ∈{+1, −1}. Its
source marginal belongs to
ρh(p, δ, v) =
(︄
p
hv
√︁
p(1 −p)e−iδ
hv
√︁
p(1 −p)eiδ
1 −p
)︄
,
p ∈[p−, p+],
|δ| ≤∆,
v ∈[v−, 1],
(17)
where 0 < p−≤p+ < 1, 0 ≤v−≤1 and 0 ≤∆≤π/2. Both labels have the same mode intensities.
The width in p is source-amplitude uncertainty; v is source visibility, which may arise from correlations
with a retained inaccessible environment. An unknown reader phase offset can be included in ∆by
adding its bounded offset to the source phase interval, provided the resulting halfwidth is at most
7


## Source page 8

π/2. Separate finite calibration procedures can supply these bounds, but they are assumptions of this
theorem. No future sample or statistical independence is inferred from a calibration trace.
The physical apparatus is exactly the coherent conversion model’s ready subspace plus two stable
flags. Its Hamiltonian is
H(t) = ħ
(︄
A(t)
C(t)∗
C(t)
D(t)
)︄
,
∥C(t)∥≤G,
with Hermitian block controls.
Uniform ready-subspace loss at rate ltransfers the source state
isometrically into orthogonal retained output modes. The bath starts in its vacuum, all preparations
are independent of the unknown input, and there is no re-excitation or additional protected storage. G
and lhave units s−1; the deadline T is in seconds. Source plus arbitrary inert reference R may be in
any joint state with marginal (17). The reference is retained and unread. The lost bath, surviving
source and null flag are also retained but are inconclusive to this fixed stable-flag readout catalogue.
A new coherent bath reader or a procedure reporting guesses on a null outcome changes the allowed
decision problem. The two physical stable flags, observed only after the active coupling is off, are the
only conclusive outcomes here.
Let η ∈(0, 1] be the coherent conversion model’s optimal transfer ceiling:
η = fG(τ)2,
τ = min(T, t∗).
(18)
For l< 4G,
fG(t) = G
Ωe−lt/4 sin(Ωt),
Ω=
√︂
G2 −l2/16,
t∗= arctan(4Ω/l)
Ω
.
At l= 0 take t∗= π/(2G). At l= 4G, use fG(t) = Gte−Gt, t∗= 1/G. For l> 4G, replace sine
by hyperbolic sine and Ωby χ =
√︁
l2/16 −G2, with t∗= artanh(4χ/l)/χ. The previously proved
amplitude barrier implies, for every allowed control,
E+ + E−≤ηI,
(19)
because each input’s flag probability is at most η. For completeness, its proof can be stated briefly.
Split any no-loss vector into ready/flag norms r cos θ, r sin θ.
Then  ̇r/r = −lcos2 θ/2 and  ̇θ =
geff + (l/2) sin θ cos θ with |geff| ≤G. For
F(θ) =
∫︂θ
0
lcos2 u
G + (l/2) sin u cos udu,
d
dt[log r2 + F(θ)] ≤0. The envelope e−F(θ) sin2 θ is increasing up to π/2, since its logarithmic derivative
is 2G cot θ/[G + (l/2) sin θ cos θ]. Scalar comparison bounds θ by the constant-maximal-coupling path.
That path first has zero ready amplitude at t∗and flag amplitude fG(t); switching it off after τ attains
the bound. Hence every input has flag probability at most η, proving (19). This is the coherent
conversion result’s proof, repeated as a dependency, included for completeness. The original loss,
deadline and access hypotheses are retained. No unrelated noise bounds are combined with it. The
ceiling is an effect inequality; it does not assert that all retained-output channels with those effects are
equal.
For a candidate reader define its conclusive probability and wrong-label probability at each admitted
state by
qh = Tr[(E+ + E−)ρh],
wh = Tr[E−hρh].
The objective is to maximize a guaranteed Q such that, for every h, p, δ, v,
qh ≥Q,
wh ≤εqh.
(20)
Thus ε bounds the error conditioned on a conclusive record; Q explicitly pays for that selection. No
label prior is needed. The error condition is linear in the effects even on a zero-probability branch,
where it is simply 0 ≤0.
8


## Source page 9

3.2
Exact minimax solution
Put
m = v−cos ∆,
ξ± =
√︂
p±/(1 −p±),
w = 1
2 log(ξ+/ξ−),
εmin = 1 −m sech w
2
.
(21)
All these quantities are dimensionless. The logarithm is a log-amplitude-odds coordinate, not a new
physical geometry.
Proposition 3.1 (Sharp robust conditional-error/conclusive frontier). If ε < εmin, no positive guaran-
teed conclusive probability satisfies (20). The zero-conclusive reader is still allowed. For m > 0 and
εmin ≤ε < 1/2, define
hε = arcosh
m
1 −2ε,
L = −hε −log ξ−,
U = hε −log ξ+.
(22)
The interval [L, U] is nonempty. Let z∗be its point nearest zero and put r = ez∗. Then the exact
maximum is
Qmax = η minp∈{p−,p+}[pr2 + 1 −p]
max(1, r2)
.
(23)
It is attained by the effects
x =
ηr2
max(1, r2),
y =
η
max(1, r2),
E± = 1
2
(︄
x
±√xy
±√xy
y
)︄
.
(24)
For ε ≥1/2, x = y = η attains Qmax = η. If m = 0, positive conclusive probability requires ε ≥1/2.
These are optima within the declared stable-flag catalogue, not over readings of every retained output.
Proof. First enlarge the physical set to all positive effects satisfying (19). This can only raise the
optimum. The source set is invariant under Z = diag(1, −1) with label exchange and under complex
conjugation with δ ↦→−δ. Averaging the candidate effects with these two transformations preserves all
linear constraints (20). Thus an optimum in this enlarged set may be taken as
E± = 1
2
(︄
x
±z
±z
y
)︄
,
0 ≤x, y ≤η,
z2 ≤xy,
z real.
This averaging is an upper-bound argument about effects; it introduces no unaccounted physical coin
or protected register. Because cos δ ≥0 and v ≥0, replacing z by √xy reduces every wrong probability
without changing any conclusive probability. Therefore the rank-one form (24) suffices in the relaxation.
For positive x, y set r =
√︁
x/y. The worst phase and visibility are |δ| = ∆, v = v−. At a specified
p,
q(p) = px + (1 −p)y,
w(p)
q(p) = 1
2
[︄
1 −2m
√︁
p(1 −p)xy
px + (1 −p)y
]︄
= 1
2[1 −m sech(log r + log ξ(p))].
(25)
A reader with x = 0 or y = 0 has conditional error 1/2 whenever it clicks; it cannot improve the case
ε < 1/2. The least contrast in (25) occurs at an endpoint of the log-odds interval. Balancing its two
endpoint distances gives the unique minimum possible worst distance w, proving (21). At the floor the
optimal ratio obeys log r = −1
2 log(ξ−ξ+).
9


## Source page 10

For an error tolerance at or above the floor, the requirement is precisely
| log r + log ξ(p)| ≤hε
for all p,
which is (22). At fixed r, error is independent of the common scale. Maximal conclusive probability
therefore uses the largest scale allowed by x, y ≤η, as in (24). For r ≤1 its guaranteed probability is
η[1 −p+ + p+r2], strictly increasing with r. For r ≥1 it is η[p−+ (1 −p−)/r2], strictly decreasing with
r. The point of the admissible log interval nearest zero is thus optimal, proving (23) in the relaxation.
The following construction attains those effects in the actual apparatus, so the upper bound is sharp
for the physical model as well. The m = 0 and ε ≥1/2 boundary cases follow directly from (25) and
(19).
This yields a precise obstruction and its useful repair. Robust zero error with positive success is
possible only when m = 1 and the amplitude interval is a single point. With any genuine amplitude
width, visibility loss or phase width, one must either abstain always or allow a positive error. For the
point case p−= p+ = p, m = 1, ε = 0,
r2 = (1 −p)/p,
Qmax = 2η min(p, 1 −p),
recovering the coherent conversion model’s exact unambiguous reader. With p−= p+ = 1/2, the error
floor is (1 −m)/2 and no amplitude filter improves it.
3.3
Attaining interaction, complete outputs and the loss frontier
Let H = 2−1/2(︁1 1
1 −1
)︁and use, during τ,
A = D = 0,
C = H diag(gx, gy),
fgx(τ) = √x,
fgy(τ) = √y.
(26)
The coherent conversion model’s damped transfer amplitude at coupling g is continuous on [0, G],
equals zero at g = 0 and equals √η at g = G. Since x, y ≤η, both required couplings exist by the
intermediate-value theorem. The coupling is fixed before the unknown input, uses no actual-sign
feedback, has ∥C∥≤G, and hence has cross-subspace Hamiltonian norm at most ħG. Switch it off
after τ; the flags then remain untouched until the deadline T. The terminal conclusive maps are exactly
K+ = −i
√
2|+⟩(√x⟨0| + √y⟨1|),
K−= −i
√
2|−⟩(√x⟨0| −√y⟨1|).
(27)
They reproduce (24) for every source-reference input, not only for the designated family.
For full bookkeeping let V (t) = exp[(−iH/ħ−lPR/2)t]IR on the active interval. The surviving-
source map is K0 = e−l(T−τ)/2PRV (τ). Lost quantum outputs have maps Kloss(t) =
√
lWtPRV (t) for
t ≤τ, and the freely decaying ready remainder gives the corresponding maps for τ < t ≤T. They obey
K∗
0K0 + K∗
+K+ + K∗
−K−+
∫︂T
0
Kloss(t)∗Kloss(t)dt = I.
The isometries Wt transport the instantaneous lost two-mode component, including its conditional
correlations with R. Earlier filtering and conditioning need not preserve the original input correlations.
No failure is removed or redrawn. Tensoring each map with IR defines the complete retained instrument.
Coherent bath output and a measured time archive are alternative output choices; extra physical
classicalization environments are not included in a four-mode count for the active Hamiltonian.
The attained reader has phase-independent conclusive, null and loss probabilities at specified p:
q(p) = px + (1 −p)y,
n(p) = pnx + (1 −p)ny,
l(p) = 1 −q(p) −n(p),
10


## Source page 11

where nj = e−l(T−τ)|ugj(τ)|2 and ug is the ready amplitude of the damped tap. Thus loss and null
remain separately predictable and retained. The theorem optimizes conclusive probability under an
error constraint; it does not additionally minimize lost mass among every possible realization of the
same effects.
Write B = Qmax/η, with B determined entirely by the source uncertainty and chosen error budget.
A required guaranteed rate Q∗is feasible exactly when
ε ≥εmin,
η(G, l, T)B ≥Q∗.
(28)
This is a sharp physical loss/control requirement within the same model. It keeps the preparation
penalty B separate from the independently specified loss/control factor η. It does not join a visibility
parameter from one noise model to an incompatible apparatus bound. For a deadline at least the first
transfer peak, η = e−lt∗/2 gives an explicit one-variable loss threshold.
3.4
An exact extension for uncertain mode efficiencies
A calibrated efficiency interval can be treated without pretending that it is uncertainty in the entire
Hamiltonian. Put an unknown but fixed two-mode attenuator before every reader control, with
Aαβ = diag(√α,
√︁
β),
Bαβ = W diag(
√
1 −α,
√︁
1 −β),
where W maps into two retained upstream-loss modes and A∗
αβAαβ + B∗
αβBαβ = I. Assume Cartesian
bounds 0 < α−≤α ≤α+ ≤1 and 0 < β−≤β ≤β+ ≤1. There is no statistical independence
assumption on these device parameters.
They are not refreshed following loss, and there is no
compensating input-dependent control before the attenuator or conclusive reader of its lost modes.
Proposition 3.2 (Sharp uncertainty in upstream path transmission). The preceding solution remains
exact after replacing the log-odds interval [log ξ−, log ξ+] by
t−= log ξ−+ 1
2 log(α−/β+),
t+ = log ξ+ + 1
2 log(α+/β−).
Its conditional-error floor is [1 −m sech((t+ −t−)/2)]/2. For a feasible ε < 1/2, choose log r nearest
zero in [−hε −t−, hε −t+]. The exact guaranteed probability on the original trial population is
Qeff
max =
η
max(1, r2)
min
p∈{p−,p+}[pα−r2 + (1 −p)β−].
(29)
Proof. The actual conclusive probability is pαx + (1 −p)βy. Its conditional contrast is m sech(log r +
log ξ(p) + 1
2 log(α/β)). The possible argument is exactly the interval just stated, so the same endpoint
minimax calculation gives the conditional-error constraint. Conclusive probability is smallest at α−, β−
and an endpoint of p. At maximum allowed scale its value is increasing in r for r ≤1 and decreasing for
r ≥1, for each p separately and hence also for their minimum. This proves (29). The relaxed-POVM
upper-bound proof and the actual attaining post-attenuation pulse are unchanged. Every downstream
Kraus map is now multiplied on the right by Aαβ, and Bαβ is a further retained quantum branch.
Completeness therefore remains exact on arbitrary references. No normalization by the probability of
upstream survival has been silently performed.
For the example below, adding α, β ∈[0.95, 1] raises the conditional-error floor from 0.05764696773
to 0.06144954979. At ε = 0.08, it reduces guaranteed conclusive probability from 0.1809098506 to
0.1656759538, attained by gains x = 0.1375200951, y = 0.5062765525. This is a sharp reader with
uncertain path transmission, not an approximate bound on arbitrary gain miscalibration.
Uncertain scalar lifetime or coherent coupling is a different interface and is held open here. The
physical-threshold curve (28) permits redesign at each known l; it is not one pulse certified for an
11


## Source page 12

unknown range of l. Indeed the fixed eight-percent pulse designed at l= 1 below has worst conditional
error 0.08016304046 if the actual rate is 0.8. Less loss changes the relative transfer amplitudes and
can increase the conditional error. Substituting a worst-case η while keeping its nominal optimal ratio
would therefore be invalid. A joint calibrated effect region or an additional robust-control optimization
is needed for that task.
4
A calibrated filter with common uncertain conversion
4.1
The original source population and the two physical stages
Keep the preparation-uncertainty construction’s one-excitation source family
ρh(p, δ, v) =
(︄
p
hv
√︁
p(1 −p)e−iδ
hv
√︁
p(1 −p)eiδ
1 −p
)︄
,
p ∈[p−, p+],
|δ| ≤∆,
v ∈[v−, 1].
Here 0 < p−≤p+ < 1, 0 ≤∆≤π/2 and h = ±1. An arbitrary finite inert reference R is retained and
unread. The apparatus and its internal controller have one input-independent original preparation; no
failed trial is replaced by a fresh source.
For a feasible error ceiling ε < 1/2 and m > 0, put m = v−cos ∆, ξ± =
√︁
p±/(1 −p±) and
hε = arcosh[m/(1 −2ε)]. The previous source theorem, or direct calculation of the two rank-one reader
effects, gives the allowed amplitude-ratio interval
a = e−hε/ξ−,
b = ehε/ξ+.
(30)
We develop the case 0 < a ≤b < 1, where mode zero should be attenuated; interchanging source modes
treats the reflected case. The interval exists at or above the previously proved conditional-error floor.
For any effective ratio R the worst conditional error is
max
p∈{p−,p+}
1 −m sech[log R + 1
2 log(p/(1 −p))]
2
,
so the error ceiling is equivalent to R ∈[a, b].
First place a calibrated, static passive filter at the entrance:
Fr = diag(r, 1),
Br =
√︁
1 −r2|f⟩⟨0|,
F ∗
r Fr + B∗
rBr = I,
0 < r ≤1.
(31)
The reflected mode f is retained and never interacts with the subsequent cell. This is a unitary
beam-splitter isometry with one additional vacant mode. For example an exchange Hamiltonian with
angle arccos r implements it; its interaction entries have units ħ(arccos r)/TF for a finite calibrated
prefix duration TF . Its phase must also be calibrated or charged to ∆. This prefix is an additional
declared resource. It is outside the uncertain conversion cell; its own losses are included in its calibrated
amplitudes, not presumed absent in a real device. The comparison uses the same prefix interval with a
bypass for the unfiltered apparatus. The quoted internal time uncertainty concerns the following cell;
total elapsed time also includes TF . No instantaneous filter or unchanged total hardware is asserted.
Next use identical path couplings. In the bright-flag basis the ready/flag Hamiltonian and all
internal interactions are path independent:
Hcell(t) = Ipath ⊗Hport,controller(t).
(32)
For the simple resonant cell this is the four-mode model with C(t) = g(t)H, where H = 2−1/2(︁1 1
1 −1
)︁.
Uniform ready-subspace loss preserves the path state while transferring its excitation to retained lost
modes. The full loss dynamics must be path blind; equal population decay rates alone do not exclude
additional path dephasing. The bath and controller are retained. The physical + and −flags read
⟨±x| = 2−1/2(⟨0| ± ⟨1|) once the cell is off. Null, filter failure, source remainder and lost modes are
inconclusive; no additional reader of them or of R is included.
12


## Source page 13

4.2
Exact factorization under unknown common internal dynamics
Proposition 4.1 (Internal uncertainty changes exposure, not reader ratio). For any path-blind cell
with its stated original input-independent stock, there is a positive retained controller/bath output τF
on the flag branch, independent of the path input, with Tr τF = η ∈[0, 1]. The conclusive instrument
on any ρSR has the exact form
I±(ρSR) = |±⟩⟨±| ⊗τF ⊗⟨±x|FrρSRF ∗
r |±x⟩.
(33)
Consequently
E± = η
2
(︄
r2
±r
±r
1
)︄
.
All conclusive conditional errors and normalized reference assemblages are independent of unknown
common gain, detuning, loss, waveform or stopping time, whenever that branch has nonzero probability.
Their common conclusive scale η can change and can even vanish. A positive rate requires a separate
lower bound on η.
Proof. Purify the apparatus stock with its inert original purifier. In the transmitted branch, the
full path-independent cell isometry acts as identity on the path and reference and as one common
isometry on the ready-port/controller stock. Projecting the latter to the flag port gives a subnormalized
apparatus vector whose projector, or the corresponding mixture, is τF . Projecting the path into the
physical ±x flag modes gives (33). Its trace supplies the stated effects. The apparatus state conditional
on either conclusive flag is the same τF /η, independent of the input and reported label. The reference
factor is the displayed matrix element; after normalization it has no η dependence.
The filter-failure amplitude Br and every remaining ready/lost-port amplitude are retained orthog-
onal output sectors. Combining the filter isometry with the full cell isometry makes their complete
sum trace preserving and retains coherences if the output is left unmeasured. This does not claim that
full outputs for two different internal cells are equal: τF , lost temporal modes and cross-sector phases
can differ. The invariance is the exact specified reader/reference interface. No reset or redraw is used,
and tensoring with IR incurs no reference-dimension cost.
For an original ensemble of unknown internal parameters, retain that ensemble label and its
apparatus state. The same formula holds with the corresponding mixture of τF , since the stock is
independent of the unknown input. There is no fresh statistical independence across uses: one unknown
common cell can correlate their success flags. Pointwise error guarantees do not turn those flags into
independent trials.
Among calibrated diagonal filters followed by a common cell known only to obey η ≥ηmin > 0, the
sharp maximin rate is
Qfilter = ηmin[1 −p+ + p+b2],
r = b.
(34)
Indeed the error constraint is r ∈[a, b], and for r < 1 the original population’s conclusive rate is
η[1 −p + pr2], smallest at p = p+ and at ηmin and increasing with r. Allowing an extra common
attenuation cannot improve it. This is a sharp optimum in this filter/common-conversion subclass; it
is not an unrestricted robust-control optimum.
13


## Source page 14

4.3
Sharp gain/loss/time box bounds
For a constant positive resonant coupling g, scalar ready loss land interaction duration t, define the
positive flag amplitude before its first maximum by
f(g, l, t) = ge−lt/4
⎧
⎪
⎪
⎨
⎪
⎪
⎩
sin(Ωt)/Ω,
Ω2 = g2 −l2/16 > 0,
t,
g2 = l2/16,
sinh(χt)/χ,
χ2 = l2/16 −g2 > 0.
(35)
Its first ready-amplitude zero occurs at
t∗(g, l) =
∫︂π/2
0
dθ
g + (l/2) sin θ cos θ.
(36)
This is the arctangent/critical/hyperbolic formula of the coherent conversion result. Let actual constants
obey
g ∈[gL, gU],
l∈[lL, lU],
t ∈[tL, tU],
0 < gL ≤gU,
0 ≤lL ≤lU,
0 < tL ≤tU,
and assume
tU ≤t∗(gU, lU).
(37)
The gain and loss are in s−1; the duration is in seconds. This is uncertainty in one rectangular pulse’s
constants and clock duration, not a bound for arbitrary time-varying coefficients taking values in those
intervals.
Proposition 4.2 (Exact transfer and ratio corners). In this box, f increases with g and t and decreases
with l. Thus
ηmin = f(gL, lU, tL)2,
ηmax = f(gU, lL, tU)2.
(38)
For a fixed relative coupling 0 < d < 1 define Rd(g, l, t) = f(dg, l, t)/f(g, l, t). Its exact extrema are
Rmin(d) = Rd(gL, lU, tL),
Rmax(d) = Rd(gU, lL, tU).
(39)
It increases with g, t and decreases with l, and is increasing in d.
Proof. Equation (36) decreases in both g and l, so the entire box precedes each pulse’s first ready
zero. Since  ̇f = gu for its nonnegative ready amplitude u, f increases in time. For the gain and loss
derivatives put a0 = l/4. In the oscillatory case x = Ωt,
∂g log f = 1
g + g
Ω2 (x cot x −1),
∂a0 log f = −t + a0
Ω2 (1 −x cot x).
For t ≤t∗, x ≤arctan(Ω/a0). The decreasing function x cot x is at least arctan z/z ≥1/(1+z2) = a2
0/g2,
z = Ω/a0, which proves the gain derivative is nonnegative. Also 1 −x cot x ≤x tan x and a0 tan x ≤Ω,
which prove the loss derivative is nonpositive. In the hyperbolic case y = χt the derivatives are
∂g log f = 1
g + g
χ2 (1 −y coth y),
∂a0 log f = −t + a0
χ2 (y coth y −1).
Here y ≤artanh(χ/a0), y coth y ≤artanh z/z ≤1/(1 −z2) = a2
0/g2, and y coth y −1 ≤y tanh y,
a0 tanh y ≤χ. These prove the same signs. The critical and zero-loss limits follow by continuity,
establishing (38).
14


## Source page 15

For the ratio use the entire sine product, which also covers imaginary Ω:
Rd = d
∞
∏︂
n=1
[︄
1 +
(1 −d2)g2t2
π2n2 −g2t2 + l2t2/16
]︄
.
(40)
All denominators are positive in the prepeak box. Each factor increases in g, t and decreases in l. The
product converges uniformly on compact subsets of this box, so its limits preserve those monotonicities.
This gives (39). Increasing d increases its numerator amplitude f(dg, l, t) by the gain result; the
denominator is fixed.
4.4
A solved, optimized comparison with unequal taps
The earlier rectangular-pulse subclass has no calibrated input filter and uses C = gH diag(d, 1) with
one fixed d chosen before unknown g, l, t. It is the actual unequal-tap architecture, retuned for the
whole uncertainty box rather than frozen at its nominal value. Its conditional error is controlled by the
effective ratio Rd. For 0 < a ≤b < 1, all pulses in the box are valid exactly when
Rmin(d) ≥a,
Rmax(d) ≤b.
(41)
Both functions increase from zero to one. The feasible coupling interval is [R−1
min(a), R−1
max(b)], if
nonempty. Its sharp maximal rate is attained at
d∗= R−1
max(b),
Qunequal = ηmin[1 −p+ + p+Rmin(d∗)2].
(42)
To prove the rate statement, both individual transfer amplitudes increase with gain and time and
decrease with loss. Thus their weighted conclusive sum is smallest at (gL, lU, tL) and p = p+. It
increases with d, giving the largest feasible value (42). This is a solved restricted minimax, not a
sampled optimizer. If the feasible interval is empty, this rectangular unequal-tap subclass has no
positive-rate valid design.
Whenever the box creates strict ratio variation, Rmin(d∗) < Rmax(d∗) = b, comparison of (34) and
(42) gives Qfilter > Qunequal. The calibrated filter fixes the desired ratio outside the uncertain conversion
dynamics. It does not cancel loss or recover a missing input sample. That improvement consumes
the extra resource specified at the start. A shaped pulse or larger controller could outperform either
restricted subclass; no bound on such a protocol is claimed.
5
Sharp protection against imperfect controlled-path matching
5.1
Physical model and a certificate weaker than exact matching
The transmitted input path is a two-mode one-excitation register. The original apparatus stock is
independent of that register and any inert source reference. After purification, let the actual cell obey
|i⟩|ready⟩↦−→|i⟩|vi⟩,
∥vi∥= 1,
i = 0, 1.
The path is preserved; all port, controller and bath variables belong to vi. This allows path-dependent
coherent interactions and marking, but not arbitrary path exchange. Let PF be the common conclusive
port and PN = I −PF its complete inconclusive complement, including surviving source and all lost
outputs. Only the terminal + and −flags supply decisions; the complementary path, bath and original
reference are retained but unread. In this solvable class the two actual efficiencies remain equal:
∥PF v0∥2 = ∥PF v1∥2 = η,
0 < ηL ≤η ≤ηU ≤1.
15


## Source page 16

Equal efficiencies do not imply equal apparatus states or phase. Write fi = PF vi/√η, and admit the
full-response certificate
Re⟨v0, v1⟩≥γ = cos Θ,
0 ≤Θ ≤π.
(43)
It is a real overlap in a calibrated relative-phase convention, not an absolute fidelity: |⟨v0, v1⟩| = 1
alone permits an unknown relative phase of π and cannot protect this reader. The certificate is a
physical premise or an independently justified calibration result. Reading all lost ports to estimate it
would require additional coherent access, not granted by retaining them.
A sufficient microscopic consumer uses two controlled-path Hamiltonians Hi(t) on the same finite
dilation, with a common initial stock and
∫︁∥H0−H1∥∞dt/ħ≤b. Duhamel’s identity gives ∥v0−v1∥≤b,
hence Re⟨v0, v1⟩≥1 −b2/2. It requires a bound on the actual full dilation difference; equal averaged
decay rates do not establish it. Sharpness below is for the declared Gram class, not for every Hamiltonian
norm ball. The common conversion and uniform loss model can supply ηL when its own hypotheses
still hold. Otherwise ηL needs a new certificate.
5.2
Sharp postselected overlap and phase response
Put χ = ⟨f0, f1⟩. Orthogonality of the port sectors gives
Re⟨v0, v1⟩= η Re χ + Re⟨PNv0, PNv1⟩≤η Re χ + 1 −η.
Thus
|χ| ≤1,
Re χ ≥k(η) := 1 −1 −γ
η
.
(44)
When k < −1 the latter supplies no additional restriction. This is exact: any point in the intersection
of that disk and half-plane can be completed by normalized null vectors having a suitable real overlap,
whenever the global inequality requires it. For −1 ≤k(η) ≤1, the boundary used in the positive-contrast
optimization below has
v0 = √η|F⟩+
√︁
1 −η|N⟩,
v1 = √ηeiα|F⟩+
√︁
1 −η|N⟩,
cos α = k(η).
It saturates the global certificate in that domain. A conventional common conversion pulse followed by
the controlled flag-only Hamiltonian Hmark = −ħα|1, F⟩⟨1, F|/TM for duration TM > 0 realizes it. Its
finite action and timing are declared; there is no claim of a free or instantaneous phase pulse. This uses
the same two paths and two ready/flag ports, plus the common-conversion filter-failure port. Null/loss
amplitudes are retained, not renormalized away.
Let the source family have population p ∈[pL, pU], visibility v ∈[vL, 1], with 0 ≤vL ≤1, and
relative phase |δ| ≤∆. For kL = k(ηL) satisfying
kL > sin ∆,
0 ≤∆< π/2,
(45)
the exact least real conclusive contrast is
m = vL
[︃
kL cos ∆−
√︂
1 −k2
L sin ∆
]︃
= vL cos(arccos kL + ∆) ≥0.
(46)
It is strictly positive when vL > 0. If vL = 0, no correctly labelled reader in this family with positive
guaranteed conclusive probability can guarantee conditional error below one half. Indeed, for fixed phase
the minimizing unit-disk point is χ = kL + i
√︂
1 −k2
L, with adverse phase sign; increasing η increases k
and improves the contrast. The minimum over δ is at an endpoint. Visibility is worst at vL in the
positive regime. The explicit phase-marking dilation above attains every stated minimum. Outside
this regime the minimum is cos[min{π, arccos(max{−1, kL}) + ∆}] before visibility minimization. A
16


## Source page 17

negative contrast cannot certify the present correctly labelled reader below one-half error; it is not
silently clipped positive.
The limiting cases expose the operational gain. At Θ = 0 the general-POVM matched-reader
contrast is recovered. At η = 1 the phase budget is the ordinary sum Θ + ∆. At fixed nonzero
Θ and decreasing efficiency, conditioning eventually destroys the positive-contrast guarantee. This
is a quantified consequence of mismatch concentrated in rare flag events, not an additive generic
channel-error estimate.
5.3
Exactly optimal filter with bounded calibration error
Place the same entrance filter before the cell. Its actual transmitted matrix is F = diag(reu, 1), where
the chosen nominal r > 0 has fixed unknown log-gain error |u| ≤u0, with u0 ≥0, and r ≤e−u0.
Its phase error is charged to ∆; failure remains an orthogonal retained flag. These are amplitude
constraints on the actual passive prefix, not a statistical independence assumption between errors. The
conclusive effects are
E± = η
2
(︄
r2e2u
±reuχ
±reu  ̄χ
1
)︄
.
The complex conjugation convention is immaterial to the symmetric phase set. For either label the
conditional wrong probability is
ε(p, u, η, χ, δ, v) = 1
2
[︄
1 −2reuv
√︁
p(1 −p) Re(χeiδ)
pr2e2u + 1 −p
]︄
.
Thus it depends on the normalized apparatus overlap as well as path counts.
Theorem 5.1 (Sharp Gram-robust filter frontier). Assume Eq. (45), 0 < pL ≤pU < 1 and an admitted
error ceiling 0 ≤ε < 1/2. Put ξL =
√︁
pL/(1 −pL), ξU =
√︁
pU/(1 −pU). If m < 1 −2ε, no positive
conclusive reader in this subclass meets the ceiling. Otherwise define
h = arcosh
m
1 −2ε,
L = −h −log ξL + u0,
U = h −log ξU −u0.
A feasible filter exists precisely when L ≤min{U, −u0}. Its maximin conclusive probability is attained
at
r∗= exp min{U, −u0},
Q∗= ηL[1 −pU + pUr2
∗e−2u0].
(47)
The optimum is among these calibrated attenuate-mode-zero filters and controlled-path cells with the
stated Gram and efficiency uncertainty. It is not an unrestricted optical-control optimum.
Proof. The exact worst contrast is m. With x = log r + u + log ξ(p), the conditional error is (1 −
m sech x)/2. Its ceiling is equivalent to |x| ≤h for every p, u, giving L ≤log r ≤U. Passivity gives
the additional cap. At fixed r the original-population success is η[1 −p + pr2e2u], minimized at
ηL, u = −u0, p = pU; it increases with r. This proves the displayed choice and rate. The worst error
and worst success can occur at different admitted parameters; each is an individually attained uniform
guarantee. The explicit port vectors establish physical attainment of the error bound, and no null or
prefix-failure outcome is postselected away.
Exact admitted mismatch threshold.
There is a closed symmetry-breaking tolerance when the
balancing filter is passive. Assume rc = (ξLξU)−1/2 ≤e−u0, and put
W = 1
2 log(ξU/ξL) + u0,
cε = (1 −2ε) cosh W
vL
.
17


## Source page 18

For 0 < cε ≤cos ∆, define φ = arccos cε −∆≥0. A positive-rate filter meeting the error ceiling exists
exactly when
Θ ≤Θmax := arccos [1 −ηL(1 −cos φ)] .
(48)
To prove it, the largest absolute log-ratio over the uncertain source and gain interval has minimum
W, attained by rc; passivity does not obstruct it by assumption. Thus feasibility is exactly m ≥
(1 −2ε) cosh W.
Insert Eq. (46) and invert cosine on its positive branch.
At the boundary the
admissible filter interval collapses to the balancing choice. If cε > cos ∆, no mismatch budget is feasible,
including zero. If vL = 0 this positive-error-ceiling theorem is not used. For the worked example
below, Θmax = 0.1001806624 radians, about 5.73993◦. This threshold applies to the full-response Gram
budget; it is not the same numerical budget as a microscopic detuning angle.
5.4
An exact pointer/reference distance, distinct from full output
At fixed actual ra = reu and η, compare with the matched reader χ = 1 having the same filter and
efficiency. The aggregate inconclusive pointer effect, summing filter failure, loss and surviving-ready
outcomes, is identical. These sectors are coarsened only for the present pointer/reference comparison;
their separate retained quantum outputs need not agree. The two conclusive effect differences are A
and −A, where
A = raη
2
(︄
0
χ −1
 ̄χ −1
0
)︄
.
For the nominated classical pointer channels, including an arbitrary inert reference,
1
2∥Mχ −M1∥⋄= ∥A∥∞= raη
2 |χ −1| ≤ra√η
2
d,
d =
√︂
2(1 −γ).
(49)
In the positive regime the last bound is sharp for the phase-marking vectors. To prove the reference-
uniform upper bound, trace-norm duality gives ∥TrS[(A ⊗I)ρSR]∥1 ≤∥A∥∞; the two classical blocks
have opposite signs. An eigenvector input of A attains equality. Finally |χ −1|2 ≤2(1 −Re χ) ≤d2/η
proves the last inequality. This certifies pointer plus reference, not the surviving source, full bath,
unknown controller state or equality of their purified outputs. Retaining those outputs does not grant
permission to read them.
6
Operating examples, compatibility and reproducibility
For overlap s = .6, G = l= 1 s−1 and deadline 2 s, the sharp coherent optimum has active time
1.3613444250 s, weaker coupling .3764245988 s−1, and each correct conclusive probability .2025106210.
The static reciprocal absorbing bank instead has wrong-click probability .0394994846 by time 2/γ; the
moving bounded-hazard reader repairs this back-action in its different model. For source box p ∈[.7, .9],
v ≥.95, |δ| ≤10◦, the calibrated-loss model has error floor .05764696773. At conditional-error ceiling
.08 its exact conclusive guarantee is .1809098506. Unknown internal loss cannot be handled by inserting
a worst-case transfer factor into a fixed nominal unequal pulse: the nominal pulse can exceed its error
ceiling even when loss decreases. For common rectangular uncertainty g ∈[.9, 1.1], l∈[.8, 1.2] in
inverse seconds and t ∈[.9, 1.1] seconds, the optimized unequal-tap guarantee is .09490563225, while
the calibrated-filter/common-cell subclass gives .1120453274. Its 18.0597% improvement costs one extra
filter-failure port and a calibrated prefix. It is not universal hardware superiority. With additional full-
response mismatch Θ = .05 radians and log-filter error .01, the sharp protected design gives .1018845501
at conditional error .08; the formerly matched filter fails at .09010468261. This compares protection
under a larger uncertainty set, not a rate increase over perfect matching. The analytical proofs
establish the quantifiers. Replayed NumPy/SciPy calculations independently reconstruct Hamiltonians,
18


## Source page 19

Gram matrices, retained-reference normalization and numerical optima; their decimals are binary64
diagnostics, not rigorous enclosures or physical data. The clean supplement preserves actual inputs
and the exact code used. Calibration of terminal effects does not identify a full residual instrument;
finite-reference, detector-comparison and monitoring interfaces are developed separately in the technical
companion. The bounded coherent-coupling, bounded hazard, common-cell and imperfect-matching
theorems use different declared physical parents. They may not be concatenated without proving
common preparation, controller, clock, reference, loss and access conditions. All future uses require fresh
stock or a separately established reuse law. No reset alone supplies independence, no flag constitutes a
perspective, and the original measurement obligations remain open.
Research assistance and status.
AI assistance was used for computational review and testing.
References
[1] E. Bagan, R. Munoz-Tapia, G. A. Olivares-Renteria, and J. A. Bergou. Optimal discrimination of
quantum states with a fixed rate of inconclusive outcomes. Physical Review A, 86:040303, 2012.
doi: 10.1103/PhysRevA.86.040303.
[2] Anthony Chefles and Stephen M. Barnett. Optimum unambiguous discrimination between linearly
independent symmetric states. Physics Letters A, 250(4–6):223–229, 1998. doi: 10.1016/S0375-9
601(98)00827-5.
[3] Anthony Chefles and Stephen M. Barnett. Quantum state separation, unambiguous discrimination
and exact cloning. Journal of Physics A: Mathematical and General, 31(50):10097–10103, 1998.
doi: 10.1088/0305-4470/31/50/007. URL https://arxiv.org/pdf/quant-ph/9808018.
[4] Miloslav Dušek, Mika Jahma, and Norbert Lütkenhaus.
Unambiguous state discrimination
in quantum cryptography with weak coherent states. Physical Review A, 62:022306, 2000. doi:
10.1103/PhysRevA.62.022306. URL https://muj.optol.cz/dusek/clanky/pra62-022306.pdf.
[5] B. Huttner, A. Muller, J. D. Gautier, H. Zbinden, and N. Gisin.
Unambiguous quan-
tum measurement of nonorthogonal states.
Physical Review A, 54:3783–3789, 1996.
doi:
10.1103/PhysRevA.54.3783.
[6] Kenji Nakahira, Kentaro Kato, and Tsuyoshi Sasaki Usuda. Generalized quantum state discrimi-
nation problems. Physical Review A, 91:052304, 2015. doi: 10.1103/PhysRevA.91.052304. Read
together with errata Physical Review A 92, 059901 (2015) and 103, 019902 (2021).
[7] Jason D. Padgett. Formal operator-level equivalence between photoelectric detection and a qih-
inspired microtubule readout model, . Supplied unpublished manuscript, 35 pages. Relevant reader
construction pp.18–21; reduced equivalence pp.10–15.
[8] Jason D. Padgett. Exact reduced-operator equivalence between the photoelectric effect, a QIH
horizon readout, and a microtubule quantum readout, . Supplied unpublished manuscript, 74
pages, filename Photoelectric Origin Microtubules.pdf. Matched-reader construction, Section 32,
pp.42–43.
[9] Jeremy Rodgers. Source–readout non-equivalence: Descent and equivariant reconstruction ob-
structions, 2026. URL https://doi.org/10.5281/zenodo.21369967.
19


## Source page 20

[10] Raam Uzdin and Omri Gat. Time-energy trade-off in unambiguous-state-discrimination positive
operator-valued measures. Physical Review A, 88:052327, 2013. doi: 10.1103/PhysRevA.88.052327.
URL https://journals.aps.org/pra/abstract/10.1103/PhysRevA.88.052327.
20
