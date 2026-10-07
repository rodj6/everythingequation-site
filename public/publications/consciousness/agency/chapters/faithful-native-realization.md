# Faithful native realization

**An evaluation becomes a physical capacity when the installed mechanism preserves the reads, writes and limits that make the evaluation possible.** Matching a final answer is only one part of that requirement. The retained commitments must enter through the declared interface, the selected rule must govern the later act, and the physical implementation must preserve the interventions that test both pathways.

This chapter develops the full construction in Section 7 of *Bounded Agency and Reflective Freedom*. It puts independently verified evaluative control and the native organization required by SPC-2 on a common finite carrier. The physical equations and detailed cost derivations appear in [Physical carriers and costs](physical-carriers-and-costs).

The philosophical question is concrete: can a physically caused mechanism carry its own tested process of assessment while also satisfying the separately stated conditions for experiential assignment? The construction answers that existence question under its declared physical contract. It also builds a controller with the same return organization and no evaluative command dependence. That counterexample keeps the two obligations distinct.

## 7.1 The physical contract comes first

SPC-2 specifies the primitive components, physical mechanisms, native time cells, internal routes, records, admitted preparations and operations, resource envelope and process provenance before assigning a subject [18](/consciousness/agency/references#ref-18), [19](/consciousness/agency/references#ref-19), [21](/consciousness/agency/references#ref-21). In the finite specialization used here, a maximal internally strongly connected candidate must admit an executable covering return in its current operating context and retain a nontrivial native predictive distinction. Its local joint record/successor instrument must be closed. States with the same laws for every admitted finite future record must also respect successor equivalence classes.

Graph connectivity alone does not meet these conditions. A graph can contain a cycle that the installed program cannot execute with its remaining resources. A simulator can write an informative external log without creating the corresponding native physical record. The construction therefore specifies both the route and the operations that actually traverse it.

The exact finite SPC-2 certification algorithm uses rational instrument probabilities. Both numerical inquiry benchmarks satisfy that restriction. The parameterized statistical identities and the compilation identities themselves do not require rational parameters.

### Carriers, operations and the apparatus boundary

Take $m\geq2$ separately nominated bit carriers arranged on an installed adjacent-pair path. At each certified native type, the admitted preparation domain is the entire Boolean cube. Phase, resources and incoming boundary conditions are held fixed across these preparations. This cube is the declared intervention domain; it does not assert that one uninterrupted episode visits every bank word.

Ordinary operations are source-disjoint NAND and COPY writes, CONSTANT writes and scheduled HOLD operations. Each ordinary operation has one nominated target. A source-disjoint write does not use its own target as an input source. Adjacent SWAP is a separate two-carrier primitive.

The complete physical context includes the fixed program, phase, remaining resources, diagnostic mode and complete input contract. Exhaustion produces an explicit terminal record followed by an absorbing continuation. Unfunded future operations do not count as available returns.

The ideal sequencer influences the bank, with no returning influence from the bank. Data-dependent executive choices are represented inside the bank and compiled into a fixed bounded schedule. Gate couplers contain no omitted retained state. Under this inventory, the bank can be a maximal internally returning component. A reciprocally loaded clock or a coupler with memory would require a larger inventory and a fresh boundary assessment. The clock, program and power supply remain paid apparatus even when they lie outside the nominated component.

The continuous carrier construction supplies an ideal powered refinement of the elementary gates. Its assumptions about scheduling and couplers are part of the model that a physical device would have to realize.

### Native records must determine the right successor classes

At a fixed native protocol type, write $K_{a,o}(x,y)$ for the exact joint probability of record $o$ and actual successor $y$, given bank state $x$ and admitted operation $a$. Define $x\sim x'$ when the two states have the same laws for all admitted finite future native transcripts, under the same type and boundary contract.

Predictive congruence requires, for every successor equivalence class $D$,

$$
\sum_{y\in D}K_{a,o}(x,y)
=\sum_{y\in D}K_{a,o}(x',y)
\qquad(x\sim x').
\tag{7.1}
$$

For a general stochastic system, equality of output laws does not automatically imply this joint record/successor condition. Here the records will be actual retained destination values reused by installed operations. Their role is physical and operational, rather than an analyst's added trace.

## 7.2 A protected source carries the return

Let $r$ be an endpoint of the carrier path. The tour $U_r$ swaps the token at $r$ along the whole path, then performs the inverse SWAP sequence. The bank ends exactly as it began, at a cost

$$
C_m=2(m-1)
$$

SWAP operations. Although the complete tour is an identity map, its intermediate native operations move an actual distinction through every carrier and return it to its starting place.

After an ordinary gate targeting cell $j$, choose the tour root by the fixed rule

$$
r=\begin{cases}
0,&j\neq0,\\
m-1,&j=0.
\end{cases}
$$

The preceding write cannot overwrite this endpoint. The choice depends on the fixed instruction, so choosing the protected source does not require a new observation of the bank.

### Theorem 7.1: protected-source compilation

Take a circuit with $m$ carriers and $N$ single-target ordinary gates. Insert an initial tour $U_0$ and a protected-source tour after every ordinary gate. This transformation preserves the circuit's ordinary transaction map and its specified ordinary read/write interventions. The complete schedule costs

$$
G=2(m-1)+N(2m-1).
\tag{7.2}
$$

At every occurrence immediately before or after an ordinary gate, the installed continuation contains a covering internal return with terminal contrast one, provided the following tour is funded. Under the native contract above, those occurrences have nontrivial predictive distinctions and satisfy (7.1).

**Proof.** Prepare two bank words differing only at the selected root. Immediately after the ordinary gate, the tour carries the root distinction through every carrier and back to that root. Immediately before the gate, the same argument works because the root is not the target. The gate can propagate the distinction into its target, but cannot erase the preserved root token. Its two terminal values therefore differ with certainty.

The paired experiments use common phase, resources and incoming boundary conditions, with external return paths inactive. Every adjacent coupling occurs within this one installed schedule. Its route support covers the entire bank.

For a tour rooted at zero, the successive outward SWAP destination records are

$$
(x_1,x_0),\ (x_2,x_0),\ \ldots,\ (x_{m-1},x_0).
$$

These records identify the original bank word. The opposite-root tour does the same. A tour entry consequently has $2^m$ predictive classes. Before an ordinary gate, at least the protected root remains distinguishable through the following tour.

Each deterministic first operation has one fixed record and successor for each state. Equivalent states must emit the same first record. If their successors admitted a distinguishing continuation, prefixing that continuation with the first operation would distinguish the original states. This proves (7.1), including later types at which an overwrite has merged some distinctions.

Finally, each tour is the identity on the complete bank. Removing the tours recovers the original transaction and the results of its specified ordinary interventions. One initial tour plus $N$ gate/tour pairs gives

$$
2(m-1)+N\bigl(1+2(m-1)\bigr)
=2(m-1)+N(2m-1),
$$

which establishes the count. $\square$

Adjacent SWAPs provide actual singleton-target dependence in both directions. The bank is therefore internally strongly connected. Under the declared component inventory, there is no larger internally returning component. The complete finite return catalogue includes every legal installed prefix allowed by the remaining resources, including failed and exhausted prefixes. It is not a catalogue containing only the successful witnesses used in the proof.

The tour length $2(m-1)$ is sharp for a connected identity word built from pairwise SWAPs. The full proof appears in the physical-carrier chapter; it is the identity case of the transitive-transposition bound [9](/consciousness/agency/references#ref-9). This sharpness does not establish an optimal combined computation-and-return scheme, nor an optimum over arbitrary physical primitives.

The certificate applies at the specified ordinary gate boundaries. It leaves the A3 question of uninterrupted experiential identity through every intervening native or analog instant open. A final command also needs its reserved final tour: a return that cannot be funded is not an available continuation.

### Corollary 7.2: return organization does not entail evaluation

The native qualification supplied by Theorem 7.1 does not imply evaluative mediation of the ordinary command.

**Proof.** Apply the same compiler to a circuit that always writes one fixed command, regardless of the retained commitments. A protected source and its tour still give the covering return and nontrivial native predictive distinctions. Yet every ordinary command is identical under every commitment preparation. Its intact command contrast is zero, and so is its read-mediated command contrast. If the endorsement relation requires different commands for two preparations, this constant circuit also fails endorsement for at least one of them. The native transcript can distinguish retained states without using them to evaluate the command. $\square$

The separation matters to the consciousness connection. A recurrent native organization and an evaluator can coexist, but the evaluator must earn its own certificate.

## 7.3 An eighteen-cell machine that changes its charter

The editable-charter evaluator has a direct circuit realization. Its eleven persistent bits are

$$
q_{01},q_{10},d,p,a,b,s,h_0,h_1,e_0,e_1,
$$

with seven additional work bits. Here $p$ is the operative priority $\varrho$ of the earlier chapters, and $s$ is the retained symmetry commitment. The charter $(q_{01},q_{10},d)$ governs future decisions; it is distinct from the present priority $p$.

Use the multiplexer convention

$$
\operatorname{mux}(v,u,w)=
\begin{cases}u,&v=1,\\w,&v=0.\end{cases}
$$

The candidate charter is computed by

$$
\begin{aligned}
t&=s\wedge(a\oplus b),\\
Q^*&=\operatorname{mux}\!\left(q_{01}\oplus q_{10},
\operatorname{mux}(d,h_1,h_0),q_{01}\right),\\
Q_{01}&=\operatorname{mux}(t,Q^*,a),\\
Q_{10}&=\operatorname{mux}(t,Q^*,b).
\end{aligned}
\tag{7.3}
$$

These formulas implement the lexicographic amendment rule, rather than merely agreeing with a few chosen examples. Unless $s=1$ and $a\neq b$, the unique normative minimizer is $(a,b)$. In the remaining case, the two symmetric charters tie. A symmetric old charter is retained. If the old charter is asymmetric, the retained case and old query order resolve the tie. The expression for $Q^*$ implements exactly those alternatives.

The two indicators of an early exit and the updated query order are

$$
\begin{aligned}
E_0&=\operatorname{mux}(h_0,Q_{10},\neg Q_{01}),\\
E_1&=\operatorname{mux}(h_1,Q_{01},\neg Q_{10}),\\
D&=\operatorname{mux}(E_0\oplus E_1,E_1,d).
\end{aligned}
\tag{7.4}
$$

When exactly one first query is sufficient, $D$ selects it. When both orders have the same status, the old order $d$ is retained. Three final COPY gates install $Q_{01},Q_{10},D$. A later act, using fresh considerations, writes

$$
p\leftarrow\operatorname{mux}
\left(e_0,e_1\vee q_{10},e_1\wedge q_{01}\right).
\tag{7.5}
$$

The allocated NAND/COPY circuit has 47 audit gates and 10 act gates. Every work cell is written before use and reused only after its last source read. The paper's address-level circuit and exhaustive checks cover all $2^{11}$ persistent words. Equations (7.3) through (7.5) supply the independent functional argument behind those finite checks.

### Test the paths that do the work

The read control masks the actual audit read ports that source $a,b$. It leaves the retained archive and the tour unchanged. The installation control replaces the three final COPY writes with HOLD operations. These controls intervene on the mechanism being tested.

Hold the initial charter, read order, priority, symmetry commitment and retained case fixed. Compare an archive with $a=b=0$ against one with $a=b=1$, then supply the same fresh mixed consideration. The intact actions differ with total variation one. Either the common read control or the common installation control reduces that contrast to zero. The identity tours preserve both intervention outcomes.

With $m=18$ and $N=57$, the compiled schedule uses

$$
G=2(18-1)+57(2\cdot18-1)=2029
$$

elementary windows. This device changes its represented charter and stored query order. Its act circuit nevertheless reads both supplied considerations. It does not claim the short-circuit query savings of the separate inquiry machine developed below.

The physical result is specific: a fixed circuit can install a new rule and let that rule govern a fresh later case. The fact that the circuit's complete update law is fixed does not prevent the represented rule from changing through the circuit's own assessment.

## 7.4 Stochastic closure and paid executive information

With stochastic operations, a native certificate must preserve correlations between records and successors. The next result supplies the missing link explicitly.

### Theorem 7.3: a successor-revealing continuation

At a protocol type with one fixed next ordinary operation, suppose that operation has exact joint kernel $K(r,y\mid x)$. Its next mandatory, funded continuation is a deterministic identity tour whose native transcript $T(y)$ is injective. No new input enters during that tour.

Then post-operation predictive classes are singleton bank states. At the pre-operation type, predictive equivalence holds exactly when the complete joint kernels $K(\cdot,\cdot\mid x)$ agree. The joint instrument therefore descends to predictive classes.

**Proof.** The tour distinguishes every successor word. Its actual finite prefix $(r,T(y))$ determines the complete pair $(r,y)$, so equality of all future transcript laws forces equality of the joint kernel. Conversely, equal joint kernels followed by the same complete Markov continuation produce equal future laws. Because successor classes are singletons, this is precisely (7.1). At deterministic intermediate phases of the tour, the deterministic first-step prefix argument still applies, even if later operations are stochastic. $\square$

If several first operations are admitted at one type, equivalence requires equality of the joint kernel for every such operation. The same proof works when each operation has its own funded revealing continuation.

A noisy operation writing a target set $J$ can also preserve a covering return. It must leave a nominated endpoint outside $J$ unchanged on every outcome, and the corresponding deterministic tour must remain installed and funded. This is target-local logical noise. It does not cover arbitrary physical noise on the protected source, clock or tour.

Joint multi-bit ingress must preserve its correlations. A serial delivery scheme needs its still-undelivered buffer inside the physical state or the complete boundary model. Omitting that buffer would omit part of the mechanism determining future laws.

### A native record is not automatically an executive read port

During an identity tour, the installed controller permits no executive branch, query, copy-to-log operation or observation of the tour transcript. The bank returns to its previous state. Elapsed time, phase and fuel changes are independent of the data. No hidden executive transcript buffer remains.

### Lemma 7.4: preservation of executive information

Under these restrictions, inserting an identity tour adds no executive information about a private retained variable. Every admitted paid-query policy retains its transcript law and risk once the tour cost is charged.

**Proof.** Between executive occasions, the tour acts as the identity on retained executive state. It produces no permitted executive observation and adds only a constant cost/type update. Conditional on the preceding executive history, there is no additional observation depending on the private variable. Induction over inserted tours preserves the complete executive transcript law. $\square$

This is an architectural restriction. Rewiring the controller to read the outward tour records would reveal the whole bank, remove the paid endorsement uncertainty and invalidate the inquiry comparison. The native predictive object used by SPC-2 does not itself install that extra executive access [19](/consciousness/agency/references#ref-19), [20](/consciousness/agency/references#ref-20). A physically retained value and an agent's budget-feasible access to that value are different facts.

## 7.5 A physical realization of the exact inquiry advantage

The threshold-$L$ inquiry policy uses a separate bank of 23 bits:

| Role | Cells |
|---|---:|
| Retained endorsements | 3 |
| Executive endorsement latches | 3 |
| Raw sensor latches | 3 |
| Agreement and request bits | 2 |
| Calibration flags | 2 |
| Priority and command | 2 |
| Reusable work cells | 8 |
| **Total** | **23** |

It first reads two endorsements. If they agree, the next slot acquires a calibration triple; if they disagree, that slot reads the third endorsement. The remaining $L-1$ slots acquire calibration triples. The final target triple arrives only after all $L+2$ inquiry slots have finished.

### Two flags are enough at the first useful threshold

Let $g$ indicate agreement of the first two endorsements. Initialize $U=V=g$. After each acquired calibration triple, update

$$
U\leftarrow U\wedge[Z=+1],
\qquad
V\leftarrow V\wedge[Z=-1].
$$

On the agreement branch, there are $L$ calibrations. Only $L$ identical nonzero increments can reach the first useful threshold. On the disagreement branch, there are at most $L-1$ calibrations, and the initially zero flags force majority prediction. Thus these two flags implement the attaining classifier exactly at this endpoint budget. A general posterior register is unnecessary for this particular policy.

Each raw triple enters through one joint three-cell ingress operation. Two additional HOLD windows charge its three-write allocation. Its targets are disjoint from the protected endpoint.

Both the adaptive program and the fixed-allocation program receive 27 ordinary windows for each inquiry slot and 18 final windows. They use the same bank, padding, acquisition allowances and return wrapper. Their counts are

$$
\begin{aligned}
N_{\mathrm{compute}}&=31+18L,\\
N_{\mathrm{ordinary}}&=27L+72,\\
N_{\mathrm{native}}&=44+45N_{\mathrm{ordinary}}
=1215L+3284,\\
N_{\mathrm{work}}&=N_{\mathrm{native}}+2(L+1)
=1217L+3286.
\end{aligned}
\tag{7.6}
$$

There are $L+3$ paid acquisition intervals, including the final target. A work unit here counts a single physical write; the joint triple write costs three such units. It is not a measurement of heat. The full stage derivation and conditional time/energy bounds appear in the physical-carrier chapter.

### Why the statistical result survives implementation

Project a physical episode onto its paid requests and responses. That projection recovers the inquiry experiment exactly. Computation uses only earlier paid information, and Lemma 7.4 prevents the return schedule from opening a free channel to retained endorsements. The optimum of Theorem 6.2 and its fixed-allocation bound therefore transfer under the same source law, access grammar and available resources. A fixed comparator with the same hardware and padding attains the fixed bound.

For the larger-gap instance, $L=2$. Substitution gives:

| Resource | Count |
|---|---:|
| Computation gates | 67 |
| Ordinary windows | 126 |
| Native windows | 5,714 |
| Single-write work units | 5,720 |
| Acquisition intervals | 5 |

The family proof supplies these counts. A separate finite verification reported with the paper traverses all 2,816 reachable endorsement, calibration and target-word combinations of the two $L=2$ programs through every installed SWAP and gate. It checks acquisition chronology, installed priority, prediction, resources and identity of the retained bank after every tour. Weighting those executions by the exact source law reproduces the adaptive success fraction $1870483759/2^{31}$ and fixed success fraction $1777/2048$. These checks support the implementations; the analytic proof establishes the family result.

### Keep the source and the boundary complete

The actual hidden source regime remains fixed throughout an episode. Native closure is established uniformly for either fixed regime without revealing it to the executive. A prior mixture must retain its persistent source state or conditional history. Averaging the hidden regime away does not establish a Markov law on the bank.

The request/response apparatus provides an external returning path. Isolating that path during the internal tour prevents it from carrying the internal witness. It does not remove stateful physical couplers from the full-apparatus boundary assessment.

### How much implementation error can the advantage tolerate?

Suppose the adaptive and fixed implementation transcript laws are within total variation $\eta_A$ and $\eta_F$ of their ideal laws, uniformly over the fixed comparison class. If the ideal success gap is $g$, the implemented gap is at least

$$
g-\eta_A-\eta_F.
$$

For $L=2$,

$$
g=\frac{7164207}{2^{31}}.
$$

Equal error bounds preserve a strict separation whenever

$$
\eta<\frac{7164207}{2^{32}}.
$$

This is a transfer tolerance. Establishing a particular device's reliability requires its actual error bounds.

### Three witnesses, three established capacities

The 18-cell machine revises a represented charter. The 23-cell machine optimally allocates inquiry under a fixed majority charter. The fallible-amendment model establishes a read-error frontier using its own cost units. They share operational principles, but no single device has been shown to attain all three sets of resource guarantees at once.

Componentwise relabeling preserves these certificates when kernels, records, routes, schedules, preparations, interventions and costs are all transported. This restricted realization covariance is consistent with causal-transformation work [1](/consciousness/agency/references#ref-1), [22](/consciousness/agency/references#ref-22). Arbitrary mixing of component coordinates, sampling an entire tour as one identity step, or adding executive ports changes the contract.

Conditional on the stated contract, A1–A2 attach the SPC-2 experiential assignment at the certified occurrences. The mathematics establishes coexistence with independently tested evaluative capacities. Control competence alone does not supply the consciousness correspondence law, and input/output competence alone does not establish the necessity of recurrence.
