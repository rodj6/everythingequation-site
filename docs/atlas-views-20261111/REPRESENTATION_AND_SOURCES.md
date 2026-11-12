# How the Atlas represents the theory, and where the new wording comes from

Third pass, 11 November 2026. This note records the review of how the Atlas
represents the main ideas of the site, what was changed as a result, and the
source of every statement the two new views make. No paper, article, proof,
published equation, download, DOI or URL was changed.

## 1. Review: the main ideas and how to reach them

| Idea | Where it is in the Atlas | Finding | Change |
| --- | --- | --- | --- |
| Foundations (the seven papers) | Seven entries on the whole-instrument stage; tour "The seven papers" | Well represented. | None. |
| Ground and the unsplit | `frame-ground`, `frame-unsplit`, `frame-complement`, `frame-differentiation` | Accurate after the last pass, but only reachable by opening a list. | Tour "From the ground to Ω"; first item under "Start from an idea". |
| Ω, fixed points and closure | `omega`, `tier0-law`, `everything-equation-schema`; Framework page section | Accurate; the three uses of Ω are kept apart. | Listed under "Start from an idea". No wording changed. |
| CSCF and spectral work | Canonical-field stage and its paper entries | Present, but spread across two lists with no reading order. | Tour "CSCF and the spectral carriers" (13 stops). |
| Gravity and holography | `gravity` sector, five paper entries, the gravity trace | The two boundary-ball results were entries only; their point (what a family of readings settles) was not visible. | The Boundary view; tour "Gravity: reading the boundary"; two new relations (below). |
| Quantum measurement | Measurement group; the field guide page | Well represented. | Tour "Quantum measurement" (7 stops). |
| Readout | The plate; the second-probe example | Good. | The Readout stage now offers the two plate views. |
| Consciousness | Perspective group | Present, no reading order. | Tour "Consciousness and perspective" (8 stops). |
| Time | `time` sector, `observable-time`, `perspective-temporal-passage`, `perspective-block-universe` | Hardest to find, and the block-universe entry had no relations. The bench could be misread as a sequence in time. | The History view; tour "Time and the observer"; three relations; the overview and "About this picture" now say the bench is an order of dependence. |

One piece of earlier interface copy was misleading and was rewritten: the
overview said "Light leaves the source Ω, passes the law … Where it lands is
Tier 1", which reads as a journey in time. It now reads the bench as an order
of dependence and says that light stands for what each stage hands to the
next.

### Relations added (`content/atlas/research.yaml`)

| From | To | Type | Source |
| --- | --- | --- | --- |
| `perspective-block-universe` | `time` | conceptual | Block universe, ch. 1: "Events occupy causal and temporal locations without a universal present advancing through the world." |
| `perspective-block-universe` | `perspective-temporal-passage` | conceptual | Mirrors the relation already recorded on the other entry. |
| `perspective-block-universe` | `frame-ground` | conceptual | Block universe, ch. 2: "This priority is explanatory, not an earlier event before physical time." |
| `gravity-boundary-balls` | `gravity-modular-transport` | conceptual | Boundary ball readouts, §1: "The vacuum ball and its bulk Killing wedge use the normalization from the spherical modular-transport construction." |
| `gravity-boundary-balls` | `foundation-target-necessity` | conceptual | Boundary ball readouts, §1 and Second-order detection, §1: the reference solution and metric tangent are common source data; charge and area variations are the readouts. |

All five are marked conceptual: none transfers a theorem.

## 2. The Boundary view: statement by statement

The view is a schematic. Its public wording rests only on the two
boundary-ball editions already on the site.

| What the view says or shows | Source on the site |
| --- | --- |
| A boundary ball selects a wedge, closed off by an extremal surface; area and energy variations are two readouts of one common source. | Second-order detection, §1: "The ball selects a wedge, boundary port and extremal surface. Charge and area variations are the readouts." Boundary ball readouts, abstract. |
| Balls inside a boundary region reach the union of their half-balls, and the local constraint is recovered there. | Boundary ball readouts, §4 ("Recover the slice constraint"): "If balls must have closures in an open boundary region, recovery holds on the union of their half-balls." |
| Outside that region these readings say nothing. | The same passage: recovery is stated on the union only. |
| Rest-frame balls on one slice recover the slice constraint; some non-gauge departures leave every one of them unchanged. | Boundary ball readouts, abstract ("All centers and radii on one slice recover its Hamiltonian constraint") and §5, "Metric perturbations invisible to restricted families" (the compact lapse and cross-mode examples). |
| Balls in further frames reach components the rest-frame family cannot. | Abstract: "A finite determining family of Lorentz frames, with all slices in each frame, recovers the boundary-index components"; §5: "A boost with velocity components along both spatial directions couples to the spatial cross residual and can detect it." |
| One on-shell mode gives zero in every first-order reading of the rest-frame balls and is registered by the same balls at second order, with positive canonical energy at every radius. | Second-order detection, Theorem 4.1. |
| That is detection, short of reconstruction; the entropy reading adds a dictionary and a state family. | Atlas status notes of the two entries; Second-order detection, abstract. |
| The second probe and "more frames" are the same kind of step: a further reading. | Foundation papers on target necessity and minimal completion (already the basis of the second-probe example). |

**What the picture does not claim.** The features on the disc, their
positions and the bars on the rim are composition. The "More frames" setting
makes no statement about the on-shell mode; it is drawn as open there, and the summary says only "not settled here", because
the published theorem holds the rest-frame balls fixed and changes the order.
The key in the panel says that recovery of a local equation is less than
reconstructing the geometry.

**Built for what comes next.** Kinds of feature, features and sets of readings
are data (`src/data/atlas/views.ts`). A further set of readings, for example
readings of one ball against a family of references, is added as one more
object in `readingSets` with what it reads, detects and leaves open.
`ATLAS-UPDATING.md` has the worked example.

## 3. The History view: statement by statement

| What the view says or shows | Source on the site |
| --- | --- |
| The order of the bench is explanatory; the source is not an earlier moment. | Block universe, ch. 2: "This priority is explanatory, not an earlier event before physical time." |
| Physical time belongs to the readout. | Atlas entry `time` (Tier 1 sector): a time orientation exists when archive growth, retarded response and entropy production share one embedding. |
| An observer is an organization inside the history; its readout is shaped by collection and retention at a local occasion. | Block universe, ch. 2, eq. (2): "An observer O is an organization inside h. Its collection and retention programme π, at local occasion τ, induces another map". |
| Notes C, E, G at 0, 100, 200 ms; 10 ms to arrive, 5 ms to integrate; the C-to-E step is available at 115 ms, before G arrives at 210 ms. | Temporal passage, §3.2 and figure 1, including "These chosen numbers demonstrate a schedule, not a universal human integration window." |
| Retained and live contributions are held together in different roles; the step is experienced without waiting for the phrase to end. | Temporal passage, §3.2; Whole field, §6. |
| Anticipation is a present expectation, not a signal from later. | Block universe, ch. 4: "Anticipation is current organization concerning a possible continuation, not a received future signal." |
| Without retention: a succession of states and no experience of succession. | Temporal passage, §3.1, "Four relations that must not collapse". |
| The listener's stages really differ, and the differences belong to the history; no universal present advances. | Block universe, ch. 1. |
| Quantum alternatives may need a process or branch-relative account. | Block universe, ch. 2. |

The view has no clock that runs by itself. The slider is labelled as an
occasion on the listener's path, and every occasion is drawn as part of the
history.

## 4. Private background

Two unpublished documents were read as background for the design of the
Boundary view, at the paths given in the brief: `START_HERE.md` of the v14
localized-reconstruction extension, and the opening and sections 1 to 3 of the
v14 independent review (with the integration handoff note that START_HERE
points to). Both were readable.

They were used for one purpose: to choose a structure for the view (a region
that is read, sets of readings, features that are recovered, detected or left
open) that a result of that kind can be added to as data. Nothing from them
is on the site: no file, no number, no theorem, no claim, and no wording. The
one public sentence about the direction of that research ("Where this is
going", in the Boundary panel) says only that work is under way on what one
ball's readings determine about a localized perturbation.

The PDFs added to the `Current Website` folder earlier remain unused on the
site.
