export type AtlasTier =
  | "source"
  | "tier0"
  | "aperture"
  | "field"
  | "tier1"
  | "observable"
  | "recovery";

export type AtlasKind =
  | "stage"
  | "operator"
  | "route"
  | "sector"
  | "equation"
  | "observable"
  | "limit"
  | "gate";

export interface AtlasEquation {
  tag: string;
  tex: string;
  title: string;
  interpretation: string;
}

export interface AtlasNode {
  id: string;
  label: string;
  shortLabel: string;
  eyebrow: string;
  tier: AtlasTier;
  kind: AtlasKind;
  lod: 0 | 1 | 2 | 3 | 4;
  position: [number, number, number];
  cameraDistance?: number;
  color: string;
  chapter: string;
  section: string;
  summary: string;
  description: string;
  mathematicalType: string;
  domain: string;
  codomain: string;
  regularity: string;
  covariance: string;
  units: string;
  stateVariables: string;
  boundaryClass: string;
  branchDomain: string;
  approximationOrder: string;
  errorNorm: string;
  equations: AtlasEquation[];
  upstream: string[];
  downstream: string[];
  recovery: string[];
  gate?: string;
  atlasNote?: string;
}

export interface AtlasEdge {
  id: string;
  from: string;
  to: string;
  label: string;
  kind: "descent" | "interface" | "trace" | "recovery" | "feedback";
  map: string;
  domain: string;
  codomain: string;
  linearization: string;
  adjoint: string;
  validityDomain: string;
  verifier: string;
  errorModel: string;
  partial: boolean;
}

type AtlasNodeDefinition = Omit<
  AtlasNode,
  "stateVariables" | "boundaryClass" | "branchDomain" |
  "approximationOrder" | "errorNorm" | "recovery"
> & Partial<Pick<
  AtlasNode,
  "stateVariables" | "boundaryClass" | "branchDomain" |
  "approximationOrder" | "errorNorm" | "recovery"
>>;

export interface ObservableRoute {
  id: string;
  label: string;
  shortLabel: string;
  color: string;
  description: string;
  nodeIds: string[];
  output: string;
}

export const tierMeta: Record<
  AtlasTier,
  { label: string; color: string; order: number }
> = {
  source: { label: "Ω · Source", color: "#9eefff", order: 0 },
  tier0: { label: "Tier 0 · Law", color: "#75d8ff", order: 1 },
  aperture: { label: "Tier 0.5 · Aperture", color: "#ae8cff", order: 2 },
  field: { label: "Canonical field", color: "#57e4c2", order: 3 },
  tier1: { label: "Tier 1 · Readout", color: "#f0f5ff", order: 4 },
  observable: { label: "Observable", color: "#ffc96b", order: 5 },
  recovery: { label: "Recovery limit", color: "#72e6a5", order: 6 },
};

const eq = (
  tag: string,
  title: string,
  tex: string,
  interpretation: string,
): AtlasEquation => ({ tag, title, tex, interpretation });

const atlasNodeDefinitions: AtlasNodeDefinition[] = [
  {
    id: "omega",
    label: "Ω · Source substrate",
    shortLabel: "Ω",
    eyebrow: "Source reality",
    tier: "source",
    kind: "stage",
    lod: 0,
    position: [0, 0, 0],
    cameraDistance: 7,
    color: "#9eefff",
    chapter: "01 · Canonical foundation",
    section: "§3 · Source signature",
    summary: "The pre-geometric formation package from which lawful source structures are admitted.",
    description:
      "Ω is not a hidden spacetime. It is the source-local signature, primitive cells, witness class, no-free-extension operations, invariant assignment and deposition potential. Geometry, fields, observers and measured parameters appear only after realization.",
    mathematicalType: "Formation package over a pre-geometric source category",
    domain: "Primitive source signature ΣΩ and source-local formation data",
    codomain: "Raw source structures and lawful formation operations",
    regularity: "U-small carriers and hom-sets; V-small isomorphism classes",
    covariance: "Strong source morphisms preserving support, lineage, invariants and boundary type",
    units: "No Tier-1 units or dimensional assignments",
    equations: [
      eq(
        "3.3",
        "Source formation package",
        String.raw`\Omega=(\Sigma_\Omega,\mathfrak G_\Omega,\mathcal W_0,\mathscr O_\Omega^{\rm NFE},\mathcal I_\Omega,\mathcal D_\Omega)`,
        "The six entries distinguish source signature, elementary cells, witnesses, lawful closure operations, invariants and deposition potential.",
      ),
      eq(
        "1.1",
        "Complete descent",
        String.raw`\Omega\to\mathsf S_{\rm adm}\to\mathsf{Real}_0\dashrightarrow\mathsf{Emit}_{1/2}\supset\mathsf{Spine}_{1/2}^{\mathsf{CSCF}}\to\mathsf{Carr}_{1/2}\to\mathsf{Field}_1\dashrightarrow\mathsf{Comp}_1`,
        "The arrows are deliberately different mathematical types: closure, fibre construction, partial realization, representation, functional calculus and coherent equalization.",
      ),
    ],
    upstream: [],
    downstream: ["tier0-law"],
    atlasNote: "Zoom inward to inspect source formation; zoom outward to follow realization.",
  },
  {
    id: "tier0-law",
    label: "Tier 0 · Source-fixed law",
    shortLabel: "T0",
    eyebrow: "Least fixed point",
    tier: "tier0",
    kind: "stage",
    lod: 0,
    position: [0, 0.15, 3.25],
    cameraDistance: 8,
    color: "#75d8ff",
    chapter: "02 · Source substrate",
    section: "§5–§7 · Law operator and Tier-0 fixed point",
    summary: "The least nontrivial class closed under the source’s lawful no-free-extension operations.",
    description:
      "Tier 0 separates lawhood from arbitrary enlargement. It contains exactly the source structures generated from primitive witnesses by admitted images, boundary-respecting attachments, retracts, stabilizing colimits and isomorphisms—nothing imported from Tier 1.",
    mathematicalType: "Least fixed point in a complete lattice of source isomorphism classes",
    domain: "Piso(Ob S0) with primitive witnesses W0",
    codomain: "The lawful source category S_adm",
    regularity: "Monotone, inflationary and accessible closure operator",
    covariance: "Presentation-independent under strong source equivalence",
    units: "Dimensionless source law",
    equations: [
      eq(
        "S2.17",
        "Source-law operator",
        String.raw`\mathbb L_\Omega(A)=\operatorname{IsoSat}\!\left(\mathcal W_0\cup A\cup\mathscr O_\Omega^{\rm NFE}(A)\right)`,
        "Lawful closure admits source-generated structure while forbidding unrelated free extension.",
      ),
      eq(
        "S2.19",
        "Tier-0 fixed point",
        String.raw`\operatorname{Ob}\mathsf S_{\rm adm}=\mu\mathbb L_\Omega`,
        "Tier 0 is the least closed class, not a chosen Tier-1 Lagrangian.",
      ),
    ],
    upstream: ["omega"],
    downstream: ["realization-seed"],
  },
  {
    id: "realization-seed",
    label: "Prepared realization fibre",
    shortLabel: "Real₀",
    eyebrow: "Source-to-aperture handoff",
    tier: "tier0",
    kind: "operator",
    lod: 1,
    position: [0, -0.2, 4.75],
    cameraDistance: 6,
    color: "#6cccf5",
    chapter: "02 · Source substrate",
    section: "§15 · Aperture-preparation theorem",
    summary: "A realization seed supported by one admitted source object and carrying its lineage forward.",
    description:
      "The realization fibre prepares Hilbert, form, operator, invariant and trace data without yet selecting a Tier-1 field. Its projection back to the admitted source retains ancestry for later inverse reconstruction.",
    mathematicalType: "Fibre object in the Grothendieck construction Real₀ → S_adm",
    domain: "An admitted source object X with marked support m",
    codomain: "Aperture-ready seed Y with pre-carrier and source certificate",
    regularity: "Closed positive quadratic form; selfadjoint pre-carrier; directed-limit compatibility",
    covariance: "Natural under strong source maps",
    units: "Dimensionless until realization scale enters",
    equations: [
      eq(
        "S2.60–S2.61",
        "Aperture preparation map",
        String.raw`\operatorname{SeedPrep}_\Omega:\mathsf{Real}_0^{\rm dir}\dashrightarrow\mathsf{Seed}_{1/2},\qquad Y\mapsto(\mathcal H_Y^{\rm pre},\overline q_Y^{\rm pre},K_Y^{\rm pre},\mathcal I_\Omega(X),\mathsf{Trace}_Y,\operatorname{Cert}_0(X),\operatorname{Reg}_Y^{\rm pre})`,
        "The full preparation package retains its source invariant, trace, domain, boundary and regularity certificate.",
      ),
    ],
    upstream: ["tier0-law"],
    downstream: ["aperture"],
  },
  {
    id: "aperture",
    label: "Tier 0.5 · Recursive aperture",
    shortLabel: "T0.5",
    eyebrow: "Selection and stabilization",
    tier: "aperture",
    kind: "stage",
    lod: 0,
    position: [0, 0, 6.2],
    cameraDistance: 9,
    color: "#ae8cff",
    chapter: "03 · Recursive aperture",
    section: "§1–§27 · Routed realization",
    summary: "The constructive filter that emits a full carrier, effective response, exact residue or null route.",
    description:
      "The aperture constructs realizations, removes declared redundancy, forms visible observables, minimally restores relations required for closure, removes unattached excess and builds the maximal spectral spine supported by the face. Its route is fixed by mathematical gates before any output is inspected.",
    mathematicalType: "Branch-indexed partial functor into a disjoint routed emission category",
    domain: "Aperture-ready seeds Seed₁/₂",
    codomain: "Full, effective, residue or null emissions",
    regularity: "Closed forms, selfadjoint boundary classes, trace/determinant ideals and selected symbol domains",
    covariance: "Natural under unitary seed isomorphism and face-compatible source maps",
    units: "Dimensionless carrier variables with explicit scale-lock at physical realization",
    equations: [
      eq(
        "A3.4",
        "Aperture factorization",
        String.raw`\mathcal A_{1/2}^{a}=\operatorname{Spine}^{a}\circ\operatorname{NoEx}^{a}\circ\operatorname{Comp}^{a}\circ\operatorname{Vis}^{a}\circ\operatorname{Red}\circ\operatorname{CRI}`,
        "The order is structural: construction precedes reduction; visibility precedes minimal completion; no-excess reduction occurs only after required relations are present.",
      ),
      eq(
        "A3.109",
        "Face-admission law",
        String.raw`\mathcal X_a\ \text{is face-admissible}\Longleftrightarrow\mathcal O_a=0\ \text{and every domain, covariance and trace hypothesis holds}`,
        "Reflective structure becomes an operator-defined admission condition rather than an analogy between equations.",
      ),
    ],
    upstream: ["realization-seed"],
    downstream: ["aperture-reduction", "aperture-visibility", "aperture-completion", "aperture-routing", "spectral-spine"],
  },
  {
    id: "aperture-reduction",
    label: "Redundancy quotient",
    shortLabel: "Red",
    eyebrow: "Aperture operation 1",
    tier: "aperture",
    kind: "operator",
    lod: 2,
    position: [-2.5, 1.9, 6.0],
    color: "#a67dff",
    chapter: "03 · Recursive aperture",
    section: "§3 · Reduction before visibility",
    summary: "Quotients gauge, basis, label and exchange directions only when they reduce the carrier.",
    description:
      "A direction is redundant only if it leaves the physical evolution invariant. If the null subspace is not reducing for the pre-carrier, it must remain physical or be handled by a gauge-compatible constraint construction.",
    mathematicalType: "Groupoid quotient and reducing-subspace compression",
    domain: "Realization family with redundancy groupoid GY",
    codomain: "Reduced realization and reduced selfadjoint carrier",
    regularity: "Closed reducing subspace of the pre-carrier",
    covariance: "Invariant under support relabelling and internal frame change",
    units: "Dimensionless",
    equations: [
      eq(
        "A3.8–A3.10",
        "Carrier reduction",
        String.raw`\mathcal H^{\rm red}=\mathcal H^{\rm pre}\ominus\mathcal N_{\rm red},\qquad K^{\rm red}=K^{\rm pre}|_{\mathcal H^{\rm red}}`,
        "Only genuine redundancy is removed; physically active directions survive.",
      ),
    ],
    upstream: ["aperture"],
    downstream: ["aperture-visibility"],
  },
  {
    id: "aperture-visibility",
    label: "Probe-visible quotient",
    shortLabel: "Vis",
    eyebrow: "Aperture operation 2",
    tier: "aperture",
    kind: "operator",
    lod: 2,
    position: [-0.9, 2.65, 6.1],
    color: "#bb97ff",
    chapter: "03 · Recursive aperture",
    section: "§5–§6 · Visibility and observational quotient",
    summary: "Selects precisely the observables accessible to a declared aperture face.",
    description:
      "A face is a complete transduction signature: probe class, value spaces, spectral response functions, compatibility equations and target category. Visibility is therefore target-relative and typed.",
    mathematicalType: "Observable quotient induced by a separating probe family",
    domain: "Reduced realization",
    codomain: "Face-visible observable algebra and quotient",
    regularity: "Bounded or closable probes on declared common domains",
    covariance: "Probe values invariant under the reduced groupoid",
    units: "Face dependent",
    equations: [
      eq(
        "A3.11",
        "Aperture face signature",
        String.raw`a=(\mathcal B_a,\mathcal V_a,\mathcal F_a,\mathcal C_a,\mathcal T_a)`,
        "Each face declares what may be probed, how it responds and which Tier-1 category receives it.",
      ),
    ],
    upstream: ["aperture-reduction"],
    downstream: ["aperture-completion"],
  },
  {
    id: "aperture-completion",
    label: "Minimal relation completion",
    shortLabel: "Comp",
    eyebrow: "Aperture operation 3",
    tier: "aperture",
    kind: "operator",
    lod: 2,
    position: [0.9, 2.65, 6.1],
    color: "#c6a7ff",
    chapter: "03 · Recursive aperture",
    section: "§7–§10 · Completion and dynamical visibility",
    summary: "Restores the least additional relations required for the nominated readout to close.",
    description:
      "Completion is target-relative and no larger than necessary. Static relations, dynamical memory and unresolved state coordinates are added only when the visible quotient cannot support the requested Tier-1 law without them.",
    mathematicalType: "Canonical minimal extension over the visible quotient",
    domain: "Visible relation family and nominated target",
    codomain: "Least relation-sufficient completed carrier",
    regularity: "Closed relation module; compatible dynamics and memory kernels",
    covariance: "Universal up to target-preserving isomorphism",
    units: "Inherited from the completed response",
    equations: [
      eq(
        "A3.24",
        "Minimal relation completion",
        String.raw`\mathsf E_a=\operatorname{Im}(\mathbb V_a,R_a)\subseteq\mathsf T_a\times\prod_{\alpha\in A_a}\mathcal R_\alpha^a`,
        "The completed face is the joint image of visible probes and precisely the eligible relations required by the target equations.",
      ),
    ],
    upstream: ["aperture-visibility"],
    downstream: ["aperture-routing"],
  },
  {
    id: "aperture-routing",
    label: "Carrier routing",
    shortLabel: "Route",
    eyebrow: "Four disjoint outputs",
    tier: "aperture",
    kind: "route",
    lod: 1,
    position: [2.5, 1.9, 6.0],
    color: "#d3b8ff",
    chapter: "03 · Recursive aperture",
    section: "§21 · Carrier routing and emission",
    summary: "Partitions every face into full, effective, residue or null output without post-hoc rerouting.",
    description:
      "A full route emits a CSCF-eligible spectral spine. An effective route emits a controlled response after elimination. A residue route exposes the exact missing operator, domain or obstruction. A null route certifies that no carrier is supported.",
    mathematicalType: "Disjoint coproduct classifier",
    domain: "Completed face datum with all admission predicates evaluated",
    codomain: "Spine ⊔ Effective ⊔ Residue ⊔ Null",
    regularity: "Route predicates are mutually exclusive and collectively exhaustive",
    covariance: "Route invariant under unitary presentation change",
    units: "Route dependent",
    equations: [
      eq(
        "A3.110",
        "Routed aperture realization",
        String.raw`\mathcal A_{1/2}^a(\mathcal Y)=\operatorname{Emit}^{a}(\mathcal Y)\in\mathsf{Emit}_{1/2}^a`,
        "Every admissible input produces a typed route, even when the full carrier gate does not close.",
      ),
    ],
    upstream: ["aperture-completion"],
    downstream: ["spectral-spine", "route-effective", "route-residue", "route-null"],
  },
  {
    id: "route-effective",
    label: "Effective response route",
    shortLabel: "Effective",
    eyebrow: "Aperture emission",
    tier: "aperture",
    kind: "route",
    lod: 2,
    position: [3.6, 0.85, 6.4],
    color: "#b99aff",
    chapter: "03 · Recursive aperture",
    section: "A3 §14 · F4 §13–§14",
    summary: "A controlled response with retained memory or finite corrections when full carrier realization is unnecessary.",
    description:
      "Eliminated degrees of freedom return as a retarded kernel, effective operator or scale-controlled correction. Their influence remains explicit rather than disappearing from the readout.",
    mathematicalType: "Effective response object",
    domain: "Resolvable regular sector plus eliminable complement",
    codomain: "Frequency-dependent operator or causal memory kernel",
    regularity: "Resolvent and causal-kernel bounds on the admitted half-plane",
    covariance: "Compatible with the face representation",
    units: "Inherited response units",
    equations: [
      eq(
        "F4.72–F4.73",
        "Eliminated-sector response",
        String.raw`K_{\rm eff}(z)=K_R-V(K_D+z)^{-1}V^*,\qquad \mathcal K_{\rm mem}(t)=Ve^{-tK_D}V^*`,
        "A non-visible defect sector reappears as an exact nonlocal response.",
      ),
    ],
    upstream: ["aperture", "aperture-routing"],
    downstream: ["canonical-field"],
  },
  {
    id: "route-residue",
    label: "Exact residue route",
    shortLabel: "Residue",
    eyebrow: "Aperture emission",
    tier: "aperture",
    kind: "gate",
    lod: 2,
    position: [4.15, 0, 6.4],
    color: "#ffb66f",
    chapter: "03 · Recursive aperture",
    section: "§21–§26",
    summary: "The exact obstruction or missing mathematical certificate carried forward as physical structure.",
    description:
      "A residue is neither failure rhetoric nor discarded error. It names the operator, boundary class, regularity or global theorem whose absence blocks the full route, and it remains available to downstream effective physics.",
    mathematicalType: "Typed obstruction object",
    domain: "A face datum failing one or more declared full-carrier gates",
    codomain: "Residue category indexed by the failed gate",
    regularity: "Exact obstruction map on its declared domain",
    covariance: "Invariant obstruction class",
    units: "Gate dependent",
    equations: [
      eq(
        "A3.108",
        "Reflective obstruction family",
        String.raw`\mathsf{Spec}_{\rm RH}\mapsto\mathcal O_{\rm sp},\quad\mathsf{Fluid}\mapsto\mathcal O_{\rm fl},\quad\mathsf{Crit}\mapsto(\beta(g_*),\mathcal R^{\rm crit}),\quad\mathsf{Gauge}\vee\mathsf{Spec}\mapsto\mathcal O_\alpha`,
        "Each reflective structure has a distinct operator-level role and obstruction.",
      ),
    ],
    upstream: ["aperture-routing"],
    downstream: ["rh-face", "fluid-face"],
  },
  {
    id: "route-null",
    label: "Null route",
    shortLabel: "Null",
    eyebrow: "Aperture emission",
    tier: "aperture",
    kind: "gate",
    lod: 2,
    position: [3.6, -0.85, 6.4],
    color: "#74809c",
    chapter: "03 · Recursive aperture",
    section: "§21 · Carrier routing",
    summary: "A proof-carrying statement that the chosen face supports no physical carrier.",
    description:
      "The null route is returned only when neither a full carrier, a controlled effective response nor a meaningful obstruction residue exists for the declared face.",
    mathematicalType: "Initial object in the routed face output",
    domain: "Unsupported face data",
    codomain: "Null emission with failure certificate",
    regularity: "Total route classifier",
    covariance: "Presentation independent",
    units: "None",
    equations: [
      eq(
        "A3.80",
        "Exhaustive carrier routing",
        String.raw`\mathsf{CarrierRoute}^a=\begin{cases}\mathsf{CSCFEligible},&\mathcal C_{\rm CSCF}^a,\\\mathsf{EffectiveCarrierOnly},&\mathcal C_{\rm eff}^a,\\\mathsf{ResidueCarrierOnly},&\mathcal C_{\rm res}^a,\\\mathsf{NoCarrier},&\text{otherwise},\end{cases}`,
        "The null route is the exhaustive final branch of the mutually ordered classifier, not an informal failure label.",
      ),
    ],
    upstream: ["aperture-routing"],
    downstream: [],
  },
  {
    id: "rh-face",
    label: "Riemann spectral face",
    shortLabel: "RH face",
    eyebrow: "Reflective aperture structure",
    tier: "aperture",
    kind: "gate",
    lod: 3,
    position: [4.9, 1.5, 6.7],
    color: "#ff9d73",
    chapter: "03 · Recursive aperture",
    section: "§22 · Spectral-determinant face",
    summary: "A determinant/zero constraint that becomes a full carrier only with a selfadjoint Hilbert–Pólya realization.",
    description:
      "The Riemann-like structure controls spectral determinant admissibility. Zero symmetry alone does not manufacture a selfadjoint operator. Without the operator, domain and trace package, the face correctly remains a residue route.",
    mathematicalType: "Spectral-determinant obstruction face",
    domain: "Completed spectral determinant and candidate operator data",
    codomain: "Critical-line consequence or exact missing-operator residue",
    regularity: "Selfadjoint compact-resolvent realization and declared determinant ideal",
    covariance: "Unitary spectral equivalence",
    units: "Dimensionless spectral coordinate",
    equations: [
      eq(
        "A3.89",
        "Riemann-face route status",
        String.raw`\mathsf{CarrierRoute}^{\rm RH}=\mathsf{ResidueCarrierOnly},\qquad\mathcal H_{\rm miss}^{\rm RH}=\{\text{construction, essential selfadjointness, determinant identity}\}`,
        "The present model keeps this face in the residue category; the critical-line consequence is licensed only after every missing operator and determinant gate closes.",
      ),
    ],
    upstream: ["route-residue"],
    downstream: [],
    gate: "Full route requires the explicit selfadjoint spectral realization; absent it, the face remains a residue.",
  },
  {
    id: "fluid-face",
    label: "Navier–Stokes continuation face",
    shortLabel: "NS face",
    eyebrow: "Reflective aperture structure",
    tier: "aperture",
    kind: "gate",
    lod: 3,
    position: [5.2, 0.35, 6.7],
    color: "#ffad7a",
    chapter: "03 · Recursive aperture",
    section: "§23 · Fluid continuation face",
    summary: "The dissipative continuation gate linking energy control to strong global regularity.",
    description:
      "The fluid-like face supplies a semigroup and continuation criterion. Energy inequality alone is insufficient; a full route requires the stated strong a priori norm bound. Without it, the unresolved regularity theorem remains an exact residue.",
    mathematicalType: "Nonlinear dissipative continuation problem",
    domain: "Divergence-free initial data and Stokes/nonlinear evolution operators",
    codomain: "Global strong solution branch or continuation residue",
    regularity: "Energy class plus the declared strong continuation norm",
    covariance: "Spatial isometry and divergence-free coordinate covariance",
    units: "Fluid scaling variables",
    equations: [
      eq(
        "A3.94–A3.97",
        "Serrin continuation gate",
        String.raw`\frac2p+\frac3q\le1,\ q>3,\qquad\|u\|_{L^p(0,T;L^q)}<\infty\Longrightarrow\text{extension through }T`,
        "A global regular readout requires this continuation gate on every finite interval; the energy inequality alone does not close the route.",
      ),
    ],
    upstream: ["route-residue"],
    downstream: [],
    gate: "Global strong regularity remains a route gate unless its a priori estimate is supplied.",
  },
  {
    id: "critical-face",
    label: "Critical-scaling face",
    shortLabel: "Critical",
    eyebrow: "Reflective aperture structure",
    tier: "aperture",
    kind: "operator",
    lod: 3,
    position: [4.8, -0.9, 6.7],
    color: "#d99bff",
    chapter: "03 · Recursive aperture",
    section: "§24 · Critical-scaling face",
    summary: "Selects scale-invariant fixed points and carries relevant, marginal and irrelevant directions into Tier 1.",
    description:
      "The critical face is a renormalization and bifurcation structure. It organizes branch transitions and scaling exponents; it is not a numerical coincidence between unrelated systems.",
    mathematicalType: "Fixed-point and linearized RG face",
    domain: "Admitted coupling manifold and beta vector field",
    codomain: "Critical branch, stability spectrum and residue directions",
    regularity: "Differentiable beta field with Fredholm linearization",
    covariance: "Scheme-covariant vector field",
    units: "Dimensionless couplings",
    equations: [
      eq(
        "P8.56",
        "Scheme-covariant beta field",
        String.raw`\beta_{\mathfrak s'}(\theta')=D_\theta f\,\beta_{\mathfrak s}(\theta)+\partial_{\log\mu}f`,
        "Critical structure is transported covariantly under a finite change of renormalization scheme.",
      ),
    ],
    upstream: ["aperture"],
    downstream: ["parameter-selection", "cosmology"],
  },
  {
    id: "em-face",
    label: "Electromagnetic capacity face",
    shortLabel: "EM capacity",
    eyebrow: "Reflective aperture structure",
    tier: "aperture",
    kind: "operator",
    lod: 2,
    position: [3.9, -1.85, 6.45],
    color: "#c7a4ff",
    chapter: "03 and 08",
    section: "A3 §25 · P8 §6–§7",
    summary: "A first-order boundary spectral problem that normalizes the surviving electromagnetic channel.",
    description:
      "The electromagnetic aperture uses the compressed first-order boundary operator, a nonnegative spectral weight and a heat-finite subtraction prescription. Its non-polynomial transmission budget becomes an actual parameter-selection constraint.",
    mathematicalType: "Weighted elliptic boundary spectral functional",
    domain: "Positive selfadjoint first-order K_em with compact resolvent",
    codomain: "Renormalized capacity and electromagnetic normalization residual",
    regularity: "Classical order-zero weight; heat expansion; finite local subtraction",
    covariance: "Gauge compression and unitary spectral covariance",
    units: "βK_em dimensionless; μ★ fixed by the scale lock",
    equations: [
      eq(
        "A3.104",
        "Scale lock",
        String.raw`\beta=\sqrt{T^*},\quad\widehat K_{\rm em}=K_{\rm em}/\Lambda_A,\quad\widehat\beta=\Lambda_A\sqrt{T^*},\quad\beta K_{\rm em}=\widehat\beta\widehat K_{\rm em}`,
        "Bulk heat time, boundary collar width and RG matching scale are one coherent dimensional structure.",
      ),
      eq(
        "P8.33",
        "Boundary normalization",
        String.raw`\mathcal N_\partial(u)=\frac{f_0}{192\pi^2}-\frac{1}{\widehat\beta}B_{\rm ren}^{w,\partial}(\widehat\beta;u,\mathfrak s_\partial)=0`,
        "The electromagnetic coefficient is selected by a renormalized boundary-value problem rather than inserted as a constant.",
      ),
    ],
    upstream: ["aperture", "matter-finite-geometry", "matter"],
    downstream: ["parameter-selection", "observable-alpha"],
  },
  {
    id: "spectral-spine",
    label: "Weighted spectral spine",
    shortLabel: "Spine",
    eyebrow: "Full aperture emission",
    tier: "aperture",
    kind: "operator",
    lod: 1,
    position: [0, 0, 7.65],
    cameraDistance: 6,
    color: "#c8b0ff",
    chapter: "03 · Recursive aperture",
    section: "§15 · Weighted spectral spine",
    summary: "The CSCF-eligible carrier, spectral measure, weights, relation channels, symbol and damping selected by the aperture.",
    description:
      "The spine is the common object from which coherent and dissipative field responses are generated. It carries K, its spectral resolution, weight measure, inherited relations, selected coherence symbol h and damping response γ.",
    mathematicalType: "Weighted positive selfadjoint spectral datum",
    domain: "A full-route aperture emission",
    codomain: "Carrier family and canonical-field input",
    regularity: "K selfadjoint and positive; h finite almost everywhere; determinant/trace admissibility",
    covariance: "Unitary intertwining of the full spectral calculus",
    units: "Dimensionless before ωY calibration",
    equations: [
      eq(
        "A3.3",
        "Spine datum",
        String.raw`\mathfrak S^a=(\mathcal H^a,q^a,K^a,E^a,\nu^a,\mathcal W^a,J^a,\tau^a,\mathcal R^a,h^a,\gamma_a,\mathsf{CarrierRoute}^a)`,
        "Every later field response is generated from this selected spectral package.",
      ),
    ],
    upstream: ["aperture-routing"],
    downstream: ["canonical-field"],
  },
  {
    id: "canonical-field",
    label: "Canonical spectral-curvature field",
    shortLabel: "CSCF",
    eyebrow: "One carrier · two faces",
    tier: "field",
    kind: "stage",
    lod: 0,
    position: [0, 0, 8.95],
    cameraDistance: 9,
    color: "#57e4c2",
    chapter: "04 · Canonical field",
    section: "§1–§28",
    summary: "The common field whose coherent and dissipative responses are functions of the same spectral carrier.",
    description:
      "Coherence and dissipation are not separate substances. The aperture-selected positive carrier K produces a contraction semigroup; the selected real symbol h produces a unitary group; together they form one normal accretive evolution with a shared spectral fingerprint.",
    mathematicalType: "Operator field affiliated with the abelian von Neumann algebra W*(K)",
    domain: "CSCF-eligible weighted spectral spine",
    codomain: "Coherent, dissipative, response, quantum and local-field realizations",
    regularity: "Strongly continuous semigroup/group on declared generator domains",
    covariance: "Functorial under unitary carrier equivalence and geometric representation",
    units: "Kphys=ωYK; Cphys=ωYh(K); t=θ/ωY",
    equations: [
      eq(
        "F4.5",
        "Canonical field datum",
        String.raw`\mathfrak F_{K,h,\gamma}=(K,C,S_t,U_t,W_t,\Lambda_T,\Gamma_T,D_T,B_T,E_K,\nu,\tau,\mathcal R)`,
        "The field packages its generator, both faces, averaged transmissions, budgets, spectral measure and residue.",
      ),
      eq(
        "F4.16",
        "Field equation",
        String.raw`\dot\psi(t)=-\bigl(\gamma K+i\,h(K)\bigr)\psi(t)+\jmath(t)`,
        "Every spectral mode carries a decay rate γλ and an oscillation frequency h(λ).",
      ),
    ],
    upstream: ["spectral-spine", "route-effective"],
    downstream: ["coherent-face", "dissipative-face", "field-fingerprint", "quantum", "qft", "matter-finite-geometry"],
  },
  {
    id: "coherent-face",
    label: "Coherent sector",
    shortLabel: "Coherent",
    eyebrow: "Phase response",
    tier: "field",
    kind: "operator",
    lod: 1,
    position: [-2.6, 2.2, 9.0],
    color: "#6eecc9",
    chapter: "04 · Canonical field",
    section: "§2 · Two canonical faces",
    summary: "The unitary phase evolution generated by C=h(K).",
    description:
      "The coherent branch preserves norm and spectral expectations when dissipation is absent. Its oscillation spectrum is a nonlinear image of the common carrier spectrum through the aperture-selected symbol h.",
    mathematicalType: "Strongly continuous unitary group",
    domain: "Selfadjoint C=h(K) on D(C)",
    codomain: "Unitary automorphisms and phase response",
    regularity: "Strong continuity; norm continuity iff C is bounded",
    covariance: "Shared spectral functional calculus",
    units: "Frequency after ωY calibration",
    equations: [
      eq(
        "F4.8",
        "Coherent evolution",
        String.raw`U_t=e^{-itC}=\int_0^\infty e^{-it h(\lambda)}\,dE_K(\lambda)`,
        "The phase spectrum is generated from the same E_K that controls dissipation.",
      ),
    ],
    upstream: ["canonical-field"],
    downstream: ["quantum", "qft", "field-fingerprint"],
  },
  {
    id: "dissipative-face",
    label: "Dissipative sector",
    shortLabel: "Dissipative",
    eyebrow: "Contraction response",
    tier: "field",
    kind: "operator",
    lod: 1,
    position: [2.6, -2.2, 9.0],
    color: "#48cdb3",
    chapter: "04 · Canonical field",
    section: "§2 and §5 · Dissipation",
    summary: "The contractive, entropy-producing response generated by the positive carrier K.",
    description:
      "The dissipative face selects stable stationary sectors and sets relaxation rates. Its gap controls convergence to ker K, while factorization of its capacity into Lindblad channels determines the realized form of decoherence or transport.",
    mathematicalType: "Strongly continuous selfadjoint contraction semigroup",
    domain: "Positive selfadjoint K and damping response γ≥0",
    codomain: "Contractive evolution, entropy production and stable records",
    regularity: "Maximal accretive generator; conservative GKSL realization where declared",
    covariance: "Shared spectral functional calculus",
    units: "Decay rate γλ after calibration",
    equations: [
      eq(
        "F4.6",
        "Dissipative evolution",
        String.raw`S_t=e^{-tK}=\int_0^\infty e^{-t\lambda}\,dE_K(\lambda)`,
        "Positive spectral modes decay while the zero eigenspace remains stationary.",
      ),
      eq(
        "F4.27",
        "Monotone norm",
        String.raw`\frac{d}{dt}\|\psi(t)\|^2=-2\gamma\langle K\rangle_{\psi(t)}\le0`,
        "Dissipation is controlled by the positive carrier rather than appended phenomenologically.",
      ),
    ],
    upstream: ["canonical-field", "fluid-face"],
    downstream: ["quantum", "quantum-records", "thermodynamics", "field-fingerprint"],
  },
  {
    id: "field-fingerprint",
    label: "Dual-sector spectral fingerprint",
    shortLabel: "Fingerprint",
    eyebrow: "Common-carrier test",
    tier: "field",
    kind: "equation",
    lod: 2,
    position: [0, 3.2, 9.15],
    color: "#78f2d3",
    chapter: "04 · Canonical field",
    section: "§24 · Dual-sector fingerprint",
    summary: "The paired decay and phase spectra that must be explainable by one carrier measure.",
    description:
      "A genuine common-carrier realization requires the coherent frequency h(λ) and dissipative rate γλ to be jointly indexed by the same spectral modes and weights. Failure of that joint representation falsifies the single-field branch.",
    mathematicalType: "Joint spectral pushforward and cross-sector compatibility criterion",
    domain: "Measured or simulated coherent and dissipative spectra",
    codomain: "Common-carrier reconstruction or falsification residue",
    regularity: "Shared measurable spectral calculus and matched multiplicities",
    covariance: "Invariant under unitary carrier equivalence",
    units: "Paired frequency and rate after the same scale calibration",
    equations: [
      eq(
        "F4.61",
        "Paired mode profile",
        String.raw`\omega_{\lambda,\rm osc}=|h(\lambda)|,\qquad\Gamma_\lambda=\gamma\lambda`,
        "Every observed phase/rate pair must lie on the same carrier-indexed curve.",
      ),
    ],
    upstream: ["coherent-face", "dissipative-face"],
    downstream: ["quantum", "observable-record"],
  },
  {
    id: "field-inverse",
    label: "Exact carrier reconstruction",
    shortLabel: "Inverse",
    eyebrow: "Readout-to-carrier map",
    tier: "field",
    kind: "operator",
    lod: 3,
    position: [-3.5, -1.2, 9.15],
    color: "#72d9c1",
    chapter: "04 · Canonical field",
    section: "§19 · Exact inverse reconstruction",
    summary: "A complete dissipative average at one T recovers K by unbounded Borel functional calculus.",
    description:
      "The transmission function is a strictly decreasing bijection on the positive spectrum. Exact knowledge of the full ΛT operator therefore reconstructs the carrier and its stationary sector; coherent data then reconstructs C once h is fixed.",
    mathematicalType: "Inverse spectral functional calculus",
    domain: "Exact operator ΛT(K) including its spectral projections",
    codomain: "The positive carrier K and its operator domain",
    regularity: "Borel functional calculus with null treatment at the spectral limit point zero",
    covariance: "Unitary intertwining",
    units: "T sets the inverse spectral scale",
    equations: [
      eq(
        "F4.97",
        "Carrier inverse",
        String.raw`K=\psi_T(\Lambda_T(K)),\qquad\psi_T=f_T^{-1},\quad f_T(\lambda)=\frac{1-e^{-T\lambda}}{T\lambda}`,
        "The dissipative shadow is invertible only when the entire operator—not a few moments—is known.",
      ),
    ],
    upstream: ["dissipative-face"],
    downstream: ["spectral-spine"],
  },
  {
    id: "qft",
    label: "Locally covariant QFT",
    shortLabel: "QFT",
    eyebrow: "Tier-1 sector F",
    tier: "tier1",
    kind: "sector",
    lod: 1,
    position: [-7.4, 4.2, 10.6],
    cameraDistance: 5.5,
    color: "#84d7ff",
    chapter: "05a · Locally covariant QFT",
    section: "§1–§16",
    summary: "The relativistic field-algebra completion joining matter representations, Lorentzian geometry and renormalized response.",
    description:
      "The QFT sector supplies BV/BRST gauge control, locally covariant algebras, Hadamard states, nonperturbative completion gates, detector-local von Neumann algebras, causal instruments, RG flow and the uniquely owned quantum stress response.",
    mathematicalType: "Covariant functor with perturbative and selected nonperturbative completions",
    domain: "Globally hyperbolic SpinG backgrounds, matter branch and renormalization data",
    codomain: "Local observable algebras, states, instruments and CTP stress response",
    regularity: "Green hyperbolicity, microlocal spectrum, split/nuclearity and anomaly gates",
    covariance: "Causally convex isometric embeddings and gauge-bundle lifts",
    units: "Tier-1 relativistic units; ℏ explicit in semiclassical limits",
    equations: [
      eq(
        "QFT5a.1",
        "Quantization relation",
        String.raw`\operatorname{Quant}_Y:\mathsf{MBranch}_Y\times_{\mathsf{Spin}^G}\mathsf{Geom}_Y\times\mathsf{Ren}_Y\rightsquigarrow\mathsf{QFT}_Y`,
        "Geometry, matter and renormalization meet as a simultaneous fixed-point block, not a one-way causal chain.",
      ),
      eq(
        "QFT5a.9",
        "Locally covariant algebra",
        String.raw`\mathcal A_{\rm kin}:\mathsf{Bkg}_{4}^{\rm spin,G}\longrightarrow\mathsf{TAlg}_*`,
        "The same theory is assigned consistently to every admissible curved background.",
      ),
      eq(
        "QFT5a.37",
        "QCD completion gate",
        String.raw`\operatorname{spec}H_{\rm QCD}^{\rm phys}\subseteq\{0\}\cup[\Delta_{\rm QCD},\infty),\qquad\Delta_{\rm QCD}=c_{\rm gap}^{\mathfrak s}\Lambda_{\rm QCD}^{\mathfrak s}>0`,
        "The positive physical gap is a condition on the selected nonperturbative completion, not a consequence of asymptotic freedom alone.",
      ),
    ],
    upstream: ["canonical-field", "matter", "pregeometry"],
    downstream: ["quantum", "gravity", "parameter-selection", "thermodynamics", "global-closure", "observable-qcd", "observable-horizon-entropy", "recovery-qft", "recovery-semiclassical-gravity"],
    gate: "A selected nonperturbative four-dimensional completion and QCD phase must exist on the branch.",
  },
  {
    id: "quantum",
    label: "Quantum alternatives",
    shortLabel: "Quantum",
    eyebrow: "Tier-1 sector Q",
    tier: "tier1",
    kind: "sector",
    lod: 1,
    position: [-10.0, 1.5, 9.4],
    cameraDistance: 5.5,
    color: "#78c9ff",
    chapter: "05 · Quantum-record projection",
    section: "§1–§10",
    summary: "Normal states, effects, instruments and statistically compatible source-prepared outcome selection.",
    description:
      "The weighted spine defines a normal quantum state. Effects generate Born probabilities; instruments generate conditional states; a source-prepared selector realizes outcomes without changing those statistics or permitting future-setting dependence.",
    mathematicalType: "Normal operator-algebraic probability and instrument theory",
    domain: "Quantum-capable field face or detector-local QFT algebra",
    codomain: "Alternatives, probabilities, instruments and selected outcome preforms",
    regularity: "Normal CP instruments on standard-Borel outcomes",
    covariance: "Algebra inclusions and local instrument covariance",
    units: "Observable dependent",
    equations: [
      eq(
        "Q5.2",
        "Quantum algebra",
        String.raw`\mathcal A_Y^Q=W^*(\mathcal W_Y,f(K_Y),U_t,S_t,\mathcal R_Y^{\rm obs})\subseteq\mathcal B(\mathcal H_Y)`,
        "Only structures surviving the aperture quotient become quantum observables.",
      ),
      eq(
        "Q5.10",
        "Born measure",
        String.raw`\mu_{\rho_Y}(B)=\omega_Y(E(B))=\operatorname{Tr}[\rho_YE(B)]`,
        "The aperture state and a POVM define a normalized countably additive probability measure.",
      ),
      eq(
        "Q5.39–Q5.40",
        "Source-prepared selection",
        String.raw`(T_{v,h})_*\lambda=p_{v,h},\qquad o_v=T_{v,h}(u_v)`,
        "The selector realizes the conditional quantum law while remaining independent of future settings.",
      ),
    ],
    upstream: ["canonical-field", "coherent-face", "dissipative-face", "qft"],
    downstream: ["quantum-records", "global-closure", "recovery-classical"],
  },
  {
    id: "quantum-records",
    label: "Objective records",
    shortLabel: "Records",
    eyebrow: "Tier-1 sector R",
    tier: "tier1",
    kind: "sector",
    lod: 1,
    position: [-9.5, -2.0, 9.6],
    cameraDistance: 5.5,
    color: "#6ed8dc",
    chapter: "05 · Quantum-record projection",
    section: "§11–§21",
    summary: "Actual deposition, distinguishability, redundant encoding, persistence and objective archives.",
    description:
      "A quantum alternative becomes an objective record only after physical deposition into a stable pointer sector, distinguishable support, redundant independently accessible fragments and persistence. The predecessor-closed archive then supplies the events from which pregeometry is reconstructed.",
    mathematicalType: "Semicausal deposition instruments and predecessor-closed record archive",
    domain: "Selected quantum outcomes and record-support channels",
    codomain: "Objective records and archive order",
    regularity: "Semicausal CPTP deposition; split-property fragments; persistence bounds",
    covariance: "Outcome-label and local-algebra covariance",
    units: "Record timescale after temporal embedding",
    equations: [
      eq(
        "Q5.70",
        "Record redundancy",
        String.raw`R_\delta=\max\{r:\exists\,F_1,\ldots,F_r\ \text{disjoint},\ \chi(I:F_k)\ge(1-\delta)H(I)\}`,
        "Objectivity grows when many independent fragments carry nearly complete information about the same pointer label.",
      ),
      eq(
        "Q5.72a",
        "Spectrum-broadcast form",
        String.raw`\rho_{SF_1\cdots F_R}^{\rm SBS}=\sum_i p_i|i\rangle\langle i|_S\otimes\rho_i^{F_1}\otimes\cdots\otimes\rho_i^{F_R}`,
        "Independent readers agree without disturbing the pointer algebra.",
      ),
    ],
    upstream: ["quantum", "dissipative-face"],
    downstream: ["pregeometry", "thermodynamics", "time", "observers", "global-closure", "recovery-classical", "observable-record"],
  },
  {
    id: "pregeometry",
    label: "Objective pregeometry",
    shortLabel: "Pregeometry",
    eyebrow: "Tier-1 sector G · input",
    tier: "tier1",
    kind: "sector",
    lod: 1,
    position: [-6.6, -4.8, 10.5],
    cameraDistance: 5.5,
    color: "#65cfbf",
    chapter: "06 · Pregeometry and gravity",
    section: "§1–§10",
    summary: "Causal order, volume and comparison geometry reconstructed from objective archive interventions.",
    description:
      "Records do not arrive inside a prior metric. Intervention sensitivity induces a cycle-safe causal order; archive counting supplies volume; relational comparisons supply distance-like data. A faithful order-volume embedding then reconstructs the Lorentzian continuum as an overdetermined inverse problem.",
    mathematicalType: "Weighted causal set/order-volume inverse geometry",
    domain: "Objective predecessor-closed archive with intervention kernels",
    codomain: "Continuum candidate, causal order, measure and Lorentzian metric class",
    regularity: "Refinement convergence and faithful continuum embedding",
    covariance: "Record relabelling and diffeomorphism covariance after reconstruction",
    units: "Length scale enters through record-density calibration",
    equations: [
      eq(
        "G6.1",
        "Objective archive input",
        String.raw`\mathcal A_Y^{\rm obj}`,
        "The predecessor-closed objective archive is the primitive geometric input; no metric or background topology is supplied with it.",
      ),
      eq(
        "G6.43",
        "Metric reconstruction relation",
        String.raw`\operatorname{Rec}_{\rm met}((\mathfrak P_n)_n)=\{[M,g]_{\rm Diff\times Scale}:\ (I_n,C_n,\phi_n)\text{ passes the comparison gates, is }d_{\rm ref}\text{-Cauchy, and }C_n\to(M,g)\}`,
        "A continuum metric is admitted only after the independent order, volume, dimension, topology, context and refinement defects vanish together.",
      ),
    ],
    upstream: ["quantum-records"],
    downstream: ["gravity", "qft", "cosmology", "recovery-gr"],
    gate: "A faithful archive-to-continuum reconstruction must exist on the selected refinement branch.",
  },
  {
    id: "gravity",
    label: "Spacetime and gravity",
    shortLabel: "Gravity",
    eyebrow: "Tier-1 sector G",
    tier: "tier1",
    kind: "sector",
    lod: 1,
    position: [-2.3, -6.2, 11.0],
    cameraDistance: 5.5,
    color: "#66d4a9",
    chapter: "06 · Pregeometry and gravity",
    section: "§11–§22",
    summary: "Einstein gravity as the leading covariant stationary condition of the reconstructed metric branch.",
    description:
      "The order-volume continuum fixes Lorentzian kinematics. Diffeomorphism invariance and a controlled local derivative expansion select Einstein–Hilbert as the leading metric action. The exact branch includes curvature corrections, causal nonlocal response, stochastic stress and record exchange.",
    mathematicalType: "Gauge-fixed Lorentzian EFT fixed point with causal CTP response",
    domain: "Reconstructed geometry, completed QFT/matter stress and selected gravitational coefficients",
    codomain: "Metric solution, gravitational response and controlled correction tensors",
    regularity: "Globally hyperbolic branch; hyperbolic gauge; EFT curvature bounds",
    covariance: "Diffeomorphism covariance with Bianchi/Ward closure",
    units: "Planck scale selected from the carrier heat coefficient",
    equations: [
      eq(
        "G6.58 / M7.102",
        "Completed gravitational equation",
        String.raw`G_{\mu\nu}+\Lambda_{\rm br}g_{\mu\nu}+\mathcal Q_{\mu\nu}^{\rm grav}=8\pi G_R\left(T_{\mu\nu}^{M,\rm cl}+T_{\mu\nu}^{\rm QFT,dyn}+T_{\mu\nu}^{R}+T_{\mu\nu}^{MR}\right)`,
        "Each stress contribution is owned exactly once; higher-curvature and nonlocal corrections remain explicit.",
      ),
      eq(
        "G6.65",
        "Newtonian limit",
        String.raw`\nabla^2\Phi_N=4\pi G_R\rho`,
        "Weak fields, low velocity and suppressed curvature corrections recover ordinary Newtonian gravity.",
      ),
    ],
    upstream: ["pregeometry", "qft", "matter"],
    downstream: ["cosmology", "thermodynamics", "observable-gravity", "recovery-gr", "recovery-semiclassical-gravity"],
  },
  {
    id: "matter-finite-geometry",
    label: "Finite internal geometry",
    shortLabel: "Finite geometry",
    eyebrow: "Matter source structure",
    tier: "tier1",
    kind: "operator",
    lod: 2,
    position: [2.0, 5.9, 10.8],
    color: "#d8a2ff",
    chapter: "07 · Matter and gauge sector",
    section: "§1–§8",
    summary: "The finite algebra, chiral bimodule, real structure and Dirac operator selecting matter representations.",
    description:
      "The finite source invariant selects an internal noncommutative geometry. Lifted unimodular unitaries produce the Standard Model gauge group, the grading produces chirality, the finite Dirac operator carries Yukawa/mixing data and inner fluctuations produce gauge and Higgs fields.",
    mathematicalType: "Finite real-even spectral geometry",
    domain: "Selected finite-cell invariant and admissible Dirac fibre",
    codomain: "Gauge group, chiral representations, Higgs and Yukawa tensors",
    regularity: "Reality, grading, first-order, orientability and unimodularity conditions",
    covariance: "Finite-algebra automorphisms and flavour-basis equivalence",
    units: "Dimensionless internal spectrum before ΛA calibration",
    equations: [
      eq(
        "M7.24",
        "Inner fluctuation",
        String.raw`D_A=D+A+JAJ^{-1}`, 
        "Continuous inner fluctuations produce gauge connections; finite left-right fluctuations produce the Higgs doublet.",
      ),
      eq(
        "M7.16",
        "Family multiplicity",
        String.raw`\mathcal H_F=\mathcal H_F^{(1)}\otimes\mathbb C^{N_{\rm fam}},\qquad N_{\rm fam}=\nu_{\rm mult}(Y)=3`,
        "Three families are a stable multiplicity of the selected internal carrier.",
      ),
    ],
    upstream: ["canonical-field", "tier0-law"],
    downstream: ["matter", "em-face", "parameter-selection"],
  },
  {
    id: "matter",
    label: "Matter and gauge sector",
    shortLabel: "Matter",
    eyebrow: "Tier-1 sector M",
    tier: "tier1",
    kind: "sector",
    lod: 1,
    position: [5.6, 4.5, 10.8],
    cameraDistance: 5.5,
    color: "#ce93ff",
    chapter: "07 · Matter and gauge sector",
    section: "§3–§24",
    summary: "The anomaly-free Standard Model branch generated by the selected finite geometry and common spectral action.",
    description:
      "The admitted branch contains the global Z₆ quotient, three chiral families, hypercharge, gauge and Higgs fields, Yukawa mixing, neutrino alternatives, anomaly cancellation, electroweak breaking, strong-CP admission and uniquely owned stress.",
    mathematicalType: "Chiral gauge theory and spectral-action EFT",
    domain: "Finite internal geometry, Lorentzian background and QFT completion",
    codomain: "Standard Model Lagrangian, masses, mixing, currents and stress",
    regularity: "Local/global anomaly cancellation; stable vacuum; QCD completion gate",
    covariance: "SpinG, gauge, flavour and diffeomorphism covariance",
    units: "Masses from v and ΛA; couplings dimensionless",
    equations: [
      eq(
        "M7.103",
        "Selected matter branch",
        String.raw`\frac{SU(3)_c\times SU(2)_L\times U(1)_Y}{\mathbb Z_6},\qquad 3\ \text{chiral families},\qquad H\sim(1,2,\tfrac12),\qquad\mathcal L_{\rm SM}`, 
        "The global gauge group, chirality, Higgs representation and field content descend together.",
      ),
      eq(
        "M7.21",
        "Hypercharge solution",
        String.raw`(y_Q,y_u,y_d,y_L,y_e,y_\nu,y_H)=(\tfrac16,\tfrac23,-\tfrac13,-\tfrac12,-1,0,\tfrac12)`,
        "Finite lift, Yukawa compatibility and anomaly equations remove the otherwise free B−L direction.",
      ),
      eq(
        "M7.70",
        "Anomaly gate",
        String.raw`\mathcal A_{SU(3)^3}=\mathcal A_{SU(3)^2Y}=\mathcal A_{SU(2)^2Y}=\mathcal A_{Y^3}=\mathcal A_{{\rm grav}^2Y}=0`,
        "Local cancellation is supplemented by the global bordism/eta-invariant gate.",
      ),
    ],
    upstream: ["matter-finite-geometry", "qft", "pregeometry"],
    downstream: ["em-face", "parameter-selection", "gravity", "cosmology", "observable-spectrum", "observable-qcd", "observable-dark-relic", "observable-baryogenesis"],
    gate: "The selected nonperturbative chiral QFT and QCD completion must exist.",
  },
  {
    id: "parameter-selection",
    label: "Spectral parameter selection",
    shortLabel: "Parameters",
    eyebrow: "Tier-1 sector P",
    tier: "tier1",
    kind: "sector",
    lod: 1,
    position: [8.4, 1.8, 10.2],
    cameraDistance: 5.5,
    color: "#f0a6d8",
    chapter: "08 · Parameter selection",
    section: "§1–§17",
    summary: "A coupled boundary-value, variational and RG problem selecting physical parameter classes.",
    description:
      "Parameters are outputs of an isolated spectral root modulo gauge, flavour, field and scheme equivalence. The same Euclidean stationary branch, boundary capacity, finite Dirac spectrum, anomaly conditions and threshold flow are solved together without retuning after an observable is inspected.",
    mathematicalType: "Constrained variational/spectral root problem on a quotient stratum",
    domain: "Source invariants, finite geometry, boundary operators, branch labels and anchors",
    codomain: "Renormalized physical parameter class and certified forward observables",
    regularity: "C² reduced action on each smooth isolated stratum; KKT/normal-cone conditions; bounded-below augmented Jacobian",
    covariance: "Gauge, flavour, field and renormalization-scheme equivalence",
    units: "θdim=ΛA^d θ̂ with scale-lock μ★=ΛA/β̂",
    equations: [
      eq(
        "P8.1",
        "Physical parameter class",
        String.raw`[\theta]_{\rm phys}\in\Theta_{\rm ren}/(\mathcal G_{\rm gauge}\times\mathcal G_{\rm flavour}\times\mathcal G_{\rm field}\times\mathcal G_{\rm scheme})`,
        "Only quotient-invariant parameter content is physical.",
      ),
      eq(
        "P8.20d",
        "Reduced spectral action",
        String.raw`\mathcal S_{\rm spec}(u)=\operatorname{Re}\Gamma_E^{\rm owned}[\varphi_*(u);u],\qquad\vartheta_E(u)=\operatorname{Im}\Gamma_E^{\rm owned}[\varphi_*(u);u]\pmod{2\pi}`, 
        "The selection objective is the exact-once Euclidean stationary action on a declared contour component.",
      ),
      eq(
        "P8.38",
        "Local isolation",
        String.raw`\|J_*v\|\ge c_*\|v\|,\qquad c_*>0`,
        "A bounded-below augmented Jacobian separates a genuine selected root from disguised parameter insertion.",
      ),
    ],
    upstream: ["matter", "matter-finite-geometry", "em-face", "critical-face", "qft"],
    downstream: ["cosmology", "numerics-parameter-root", "observable-alpha", "observable-spectrum", "observable-qcd", "observable-dark-relic", "observable-baryogenesis"],
    gate: "Numerical values appear only after the isolated spectral root, thresholds and uncertainty budget are executed.",
  },
  {
    id: "cosmology",
    label: "Vacuum and cosmology",
    shortLabel: "Cosmology",
    eyebrow: "Tier-1 sector C",
    tier: "tier1",
    kind: "sector",
    lod: 1,
    position: [9.0, -1.8, 10.0],
    cameraDistance: 5.5,
    color: "#f3b071",
    chapter: "09 · Cosmology, vacuum and time",
    section: "§1–§18",
    summary: "The homogeneous, perturbed, vacuum and dark-sector restriction of the same globally owned dynamics.",
    description:
      "Cosmology is not a separate action. The exact-once QFT–matter–gravity functional is restricted to an FLRW/perturbation branch with selected vacuum response, primordial state, transfer kernels, dark component and thermal history. Archive order supplies temporal orientation.",
    mathematicalType: "CTP initial-value problem on a symmetry-reduced cosmological branch",
    domain: "Selected geometry, matter, parameters, state and dark-response branch",
    codomain: "Background evolution, perturbations, transfer functions and observables",
    regularity: "Hyperbolic/Volterra well-posedness with fixed initial data and causal kernels",
    covariance: "Diffeomorphism covariance before consistent FLRW/SVT restriction",
    units: "Cosmological scales calibrated by the selected parameter branch",
    equations: [
      eq(
        "C9.9",
        "FLRW geometry",
        String.raw`ds^2=-dt^2+a^2(t)\left[\frac{dr^2}{1-k_{\rm FLRW}r^2}+r^2d\Omega_2^2\right]`,
        "Homogeneity is a consistent branch restriction, not an assumption about Ω.",
      ),
      eq(
        "C9.11",
        "Background gravity",
        String.raw`H^2=\frac{8\pi G_R}{3}\rho_{\rm owned}+\frac{\Lambda_{\rm br}}3-\frac{k_{\rm FLRW}}{a^2}+\Delta_H^{\rm grav}`,
        "Ordinary matter, vacuum response, dark structure and controlled gravitational corrections share one Friedmann constraint.",
      ),
      eq(
        "C9.26a",
        "Vacuum-selection residual",
        String.raw`\mathcal R_\Lambda^{\mathfrak b_G}\!\left(\vartheta_\Lambda^{\mathfrak b_G},\mathcal T_\Lambda,I_{\rm vac}\right)=0`,
        "The active vacuum response becomes predictive only when its transfer spectrum, boundary invariant and isolated branch root are supplied.",
      ),
    ],
    upstream: ["gravity", "matter", "parameter-selection", "pregeometry", "critical-face"],
    downstream: ["thermodynamics", "time", "observable-cosmology", "observable-dark-relic", "observable-baryogenesis", "recovery-cosmology"],
  },
  {
    id: "thermodynamics",
    label: "Thermodynamic limit",
    shortLabel: "Thermo",
    eyebrow: "Tier-1 sector Th",
    tier: "tier1",
    kind: "sector",
    lod: 1,
    position: [6.2, -4.8, 10.7],
    cameraDistance: 5.5,
    color: "#f2c75f",
    chapter: "09a · Thermodynamic limit",
    section: "§1–§11",
    summary: "KMS equilibrium, entropy production, kinetic closure, hydrodynamic recovery and generalized gravitational entropy.",
    description:
      "Thermodynamics arises through distinct but compatible limits: KMS states for equilibrium, Spohn monotonicity for open evolution, kinetic scaling for transport and hydrodynamic closure. Selected reaction kernels control freeze-out and baryogenesis. On horizon or QES subbranches, matched Wald and outside entropy define generalized entropy. Record-count entropy remains a separate archive observable.",
    mathematicalType: "Operator-algebraic equilibrium plus kinetic/hydrodynamic scaling limit",
    domain: "Completed QFT state, dissipative generator and cosmological/matter background",
    codomain: "Thermal states, entropy currents, kinetic equations and hydrodynamics",
    regularity: "Passivity, detailed balance, collision gap, uniform moments and positive distribution",
    covariance: "Relativistic local covariance and hydrodynamic frame covariance",
    units: "Temperature and entropy after Tier-1 calibration",
    equations: [
      eq(
        "TH9a.4",
        "KMS condition",
        String.raw`F_{A,B}(t)=\omega_\beta(A\alpha_t(B)),\qquad F_{A,B}(t+i\beta)=\omega_\beta(\alpha_t(B)A)`,
        "Equilibrium is defined by analytic thermal periodicity rather than an assumed probability ensemble.",
      ),
      eq(
        "TH9a.22",
        "Relativistic kinetic equation",
        String.raw`p^\mu\nabla_\mu f_A-\Gamma^i_{\alpha\beta}p^\alpha p^\beta\frac{\partial f_A}{\partial p^i}=C_A[f]`,
        "Hydrodynamics is recovered only under the declared collision-gap and scaling controls.",
      ),
      eq(
        "TH9a.39",
        "Generalized entropy",
        String.raw`S_{\rm gen}=\frac{A_{\rm ren}}{4G_R\hbar}+S_{\rm out}^{\rm ren}+S_{\rm grav}^{\rm higher}`,
        "Horizon and QES entropy uses the same renormalized gravitational action and a matched outside-entropy subtraction.",
      ),
    ],
    upstream: ["dissipative-face", "qft", "quantum-records", "gravity", "cosmology"],
    downstream: ["time", "observers", "observable-dark-relic", "observable-baryogenesis", "observable-horizon-entropy", "recovery-thermo"],
  },
  {
    id: "time",
    label: "Temporal orientation",
    shortLabel: "Time",
    eyebrow: "Tier-1 sector Tm",
    tier: "tier1",
    kind: "sector",
    lod: 1,
    position: [2.1, -6.4, 11.0],
    cameraDistance: 5.5,
    color: "#ffd26f",
    chapter: "09 · Cosmology, vacuum and time",
    section: "§13–§14",
    summary: "The compatible orientation of archive growth, retarded response and nonnegative entropy production.",
    description:
      "The semigroup parameter is not automatically physical time. A time orientation exists when objective archive inclusion, causal retarded evolution and thermodynamic entropy production admit one common embedding without cycles.",
    mathematicalType: "Compatible order embedding of archive, causal and thermodynamic orientations",
    domain: "Predecessor-closed archives, retarded kernels and entropy current",
    codomain: "Tier-1 temporal order and clock embeddings",
    regularity: "Acyclic archive growth and causal support",
    covariance: "Time-orientation-preserving diffeomorphisms",
    units: "Clock-dependent after calibration",
    equations: [
      eq(
        "C9.65",
        "Common time orientation",
        String.raw`\Theta_A(\preceq_A)=\preceq_t|_{\rm archive},\qquad\Theta_{\rm th}(\preceq_{\rm th})=\preceq_t|_{\rm th},\qquad\Theta_{\rm gen}(\preceq_{\rm gen})=\preceq_t|_{\rm gen}`,
        "Archive retention, thermodynamic production and generalized-entropy growth embed into one temporal target and coincide on their overlaps.",
      ),
    ],
    upstream: ["quantum-records", "cosmology", "thermodynamics"],
    downstream: ["observers", "observable-time"],
  },
  {
    id: "observers",
    label: "Structural observers",
    shortLabel: "Observers",
    eyebrow: "Tier-1 sector O",
    tier: "tier1",
    kind: "sector",
    lod: 1,
    position: [-1.8, 6.5, 11.0],
    cameraDistance: 5.5,
    color: "#dce6ff",
    chapter: "09 and 10",
    section: "C9 §13–§14 · G10 §3.10",
    summary: "Stable, record-integrating subsystems embedded inside the same completed Tier-1 readout.",
    description:
      "An observer is neither outside the projection nor added as a primitive. It is a stable subsystem with accessible instruments, memory-bearing objective records, a temporal embedding and an interaction algebra compatible with the surrounding branch.",
    mathematicalType: "Stable subsystem with accessible record algebra and temporal embedding",
    domain: "Objective archive, thermodynamic support and local QFT/matter interactions",
    codomain: "Observer histories and accessible measurement records",
    regularity: "Record persistence, operational accessibility and subsystem stability",
    covariance: "Relational under admissible subsystem re-identification",
    units: "Internal clock and record scales",
    equations: [
      eq(
        "G10.75",
        "Observer path",
        String.raw`\mathcal A_Y^{\rm obj}\to\Theta_A\to\mathcal H_{Y,o}\to\operatorname{Int}_{Y,o}`,
        "The canonical observer lineage starts from the objective archive and adds temporal embedding, observer history and the accessible interaction algebra.",
      ),
    ],
    upstream: ["quantum-records", "thermodynamics", "time"],
    downstream: ["global-closure", "observable-record"],
  },
  {
    id: "global-closure",
    label: "Globally compatible Tier 1",
    shortLabel: "Tier 1",
    eyebrow: "Coherent equalizer",
    tier: "tier1",
    kind: "stage",
    lod: 0,
    position: [0, 0, 12.25],
    cameraDistance: 13,
    color: "#eef5ff",
    chapter: "10 · Global compatibility",
    section: "§1–§15",
    summary: "The unique local branch on which every sector, interface, Ward identity and ownership condition closes together.",
    description:
      "Tier 1 is not a bag of independently successful theories. It is a coherent equalizer of QFT, quantum records, geometry, gravity, matter, parameters, cosmology, thermodynamics, time and observers. A certified zero of the coupled residual selects one compatible gauge-equivalence class in a regular neighbourhood.",
    mathematicalType: "Gauge-quotiented coherent equalizer and certified residual zero",
    domain: "All admitted sector configurations and interface isomorphisms",
    codomain: "Compatible Tier-1 readout classes and their observables",
    regularity: "Gauge-fixed Banach manifold; Fredholm index zero; local contraction bounds",
    covariance: "Gauge, diffeomorphism, basis and source-presentation groupoid",
    units: "All residuals scaled to one dimensionless norm",
    equations: [
      eq(
        "10.2",
        "Tier-1 equalizer",
        String.raw`\mathsf{Comp}_1=\operatorname{Eq}^{\rm coh}(\Delta_L,\Delta_R)`,
        "Parallel sector descriptions must agree in every comparison category and around every declared loop.",
      ),
      eq(
        "G10.58",
        "Certified local closure",
        String.raw`\mathcal R_{\mathfrak y}^{\beta}(z_*)=0`,
        "Under the contraction bounds, the coupled physical solution is unique on the gauge-fixed branch neighbourhood.",
      ),
      eq(
        "G10.87",
        "Completed readout",
        String.raw`(\Omega,X)\mapsto Y\mapsto\mathfrak S_Y\mapsto\mathfrak F_Y\mapsto(\mathcal C_{\mathfrak y}^{\beta},\mathcal R_{\mathfrak y}^{\beta},\mathfrak{Comp}_1)\mapsto[z_*]\mapsto\{\mathcal O_i(z_*)\}_i`,
        "This is the complete executable source-to-observable architecture represented by the atlas.",
      ),
    ],
    upstream: ["qft", "quantum", "quantum-records", "gravity", "matter", "parameter-selection", "numerics-parameter-root", "cosmology", "thermodynamics", "time", "observers"],
    downstream: ["numerics-global-solver", "observable-alpha", "observable-gravity", "observable-record", "observable-spectrum", "observable-cosmology", "observable-time", "observable-qcd", "observable-dark-relic", "observable-baryogenesis", "observable-horizon-entropy", "recovery-classical", "recovery-semiclassical-gravity"],
    gate: "Global uniqueness is certified locally on admitted regular branches; continuation requires the stated compactness and gate conditions.",
  },
  {
    id: "numerics-global-solver",
    label: "Certified coupled solver",
    shortLabel: "Global solver",
    eyebrow: "LOD 4 · Solver and sensitivity",
    tier: "tier1",
    kind: "operator",
    lod: 4,
    position: [0.0, -2.1, 13.7],
    color: "#b9cdf8",
    chapter: "10 · Global compatibility",
    section: "§8 and §11 · Certified closure and sensitivity",
    summary: "The preconditioned residual iteration, posterior error bound and implicit sensitivity map for one regular coupled branch.",
    description:
      "This node is the numerical realization of global closure. It stores the gauge-fixed chart, residual discretization, preconditioner, contraction ball, stopping rule and adjoint sensitivity. A result is emitted only when the residual, contraction and posterior-error certificates all hold on the same branch.",
    mathematicalType: "Certified preconditioned fixed-point/Newton residual solver",
    domain: "A C¹ coupled residual on a gauge-fixed ball with bounded inverse preconditioner",
    codomain: "A certified local zero z★, posterior radius and source-to-observable sensitivities",
    regularity: "Fréchet C¹ residual; q<1; η≤(1−q)r; stable adjoint pairing",
    covariance: "Operates on a fixed local gauge slice and reports quotient-invariant observables",
    units: "All sector residuals scaled by invertible weights into one dimensionless norm",
    stateVariables: "(zn,z★,A0,R,DR,η,q,r) together with discretization and branch identifiers",
    boundaryClass: "Fixed Cauchy/CTP/boundary data and one regular gauge-fixed branch ball",
    branchDomain: "G10.52–G10.55 with q<1, η≤(1−q)r and no unresolved gauge zero mode",
    approximationOrder: "Iteration index n plus the retained sector discretization, EFT, loop and kinetic orders",
    errorNorm: "‖R(zn)‖ and ‖zn−z★‖≤qⁿ(1−q)⁻¹‖z1−z0‖, propagated through G10.74",
    equations: [
      eq(
        "G10.55",
        "Contraction certificate",
        String.raw`\eta=\|A_0\mathcal R(z_0)\|,\qquad q=\sup_{z\in\overline B_r(z_0)}\|I-A_0D\mathcal R(z)\|<1,\qquad\eta\le(1-q)r`,
        "The solver is certified only on a ball that is mapped into itself and contracted by the preconditioned residual map.",
      ),
      eq(
        "G10.60",
        "Posterior solver error",
        String.raw`\|z_n-z_*\|\le\frac{q^n}{1-q}\|z_1-z_0\|`,
        "Every displayed numerical state carries an a posteriori distance bound to the unique branch root.",
      ),
      eq(
        "G10.74",
        "Implicit sensitivity",
        String.raw`D_{\mathfrak y}\mathcal O=D_z\mathcal O\left[-(D_z\mathcal R)^{-1}D_{\mathfrak y}\mathcal R\right]+\partial_{\mathfrak y}\mathcal O`,
        "Forward and adjoint atlas sensitivity are derived from the same linearized coupled residual.",
      ),
    ],
    upstream: ["global-closure"],
    downstream: [],
    recovery: [],
  },
  {
    id: "numerics-parameter-root",
    label: "Certified spectral-root solve",
    shortLabel: "Parameter solver",
    eyebrow: "LOD 4 · Spectrum, root and errors",
    tier: "tier1",
    kind: "operator",
    lod: 4,
    position: [10.1, 0.7, 12.9],
    color: "#f5b6df",
    chapter: "08 · Parameter selection",
    section: "§13–§15 · Forward map, certification and identifiability",
    summary: "The boundary spectral truncation, active-stratum root solve, RG matching and propagated uncertainty certificate.",
    description:
      "This is the executable layer behind a numerical coupling or mass. It stores the boundary discretization, subtraction convention, active constraints, root tolerance, RG loop order, threshold order, scheme spread and held-out-data separation. It cannot emit a precision value from the structural selection law alone.",
    mathematicalType: "Constrained spectral discretization and primal-dual root solver",
    domain: "One active branch stratum with convergent boundary spectrum and fixed anchor/calibration/test partition",
    codomain: "Certified u★, covariance Σu and propagated observable interval",
    regularity: "KKT regularity; σmin(J★)≥c★>0; converged spectral and RG sequences",
    covariance: "Gauge/flavour quotient and finite renormalization-scheme transport",
    units: "Dimensionful outputs obtained only after ΛA and the scale lock enter",
    stateVariables: "(uN,λN,μQ,N,L,dcut,J★,ΣF,Σu) and the four certification tolerances",
    boundaryClass: "Selected Euclidean contour component, elliptic boundary class and matched subtraction prescription",
    branchDomain: "One smooth active stratum satisfying P8.31, P8.38 and the no-retuning data partition",
    approximationOrder: "Boundary mode cutoff N, RG loop order L and EFT threshold order dcut",
    errorNorm: "(εspec,εroot,εRG,εscheme) plus Σtrunc, Σmatch and propagated Δtotal",
    equations: [
      eq(
        "P8.67",
        "Numerical certification gates",
        String.raw`\|B_{N+1}^{w,\partial}-B_N^{w,\partial}\|\le\varepsilon_{\rm spec},\quad\|\mathcal R_{\rm sel}^{\mathfrak a}(\widetilde u_N)\|\le\varepsilon_{\rm root},\quad\sigma_{\min}(J_*)\ge c_*>0`,
        "Spectral convergence, primal-dual residual and identifiability are certified together with RG and scheme stability.",
      ),
      eq(
        "P8.69",
        "Parameter covariance",
        String.raw`\Sigma_u=(J^T\Sigma_F^{-1}J)^{-1}+\Sigma_{\rm trunc}+\Sigma_{\rm match}`,
        "The atlas carries statistical, truncation and matching uncertainty into every forward observable.",
      ),
    ],
    upstream: ["parameter-selection"],
    downstream: ["global-closure", "observable-alpha", "observable-spectrum"],
    recovery: [],
  },
  {
    id: "observable-alpha",
    label: "Fine-structure observable",
    shortLabel: "α⁻¹",
    eyebrow: "Held-out observable",
    tier: "observable",
    kind: "observable",
    lod: 2,
    position: [11.5, 3.0, 11.0],
    cameraDistance: 4.8,
    color: "#ffc96b",
    chapter: "08 · Parameter selection",
    section: "§13–§14",
    summary: "The low-energy electromagnetic readout produced after boundary capacity, isolated root, thresholds and RG flow.",
    description:
      "The nominated 1/137 structure is a held-out fingerprint. It is not entered into the boundary condition or fitting objective. The predicted value appears only after the same spectral root that fixes masses and couplings has been evolved through every threshold to the declared on-shell observable.",
    mathematicalType: "Gauge-invariant low-energy forward observable",
    domain: "Isolated selected parameter root u★ and completed QCD threshold data",
    codomain: "αpred⁻¹ in the declared on-shell scheme",
    regularity: "Converged boundary spectrum, root tolerance, matched RG and propagated errors",
    covariance: "Renormalization-scheme invariant at all orders",
    units: "Dimensionless",
    equations: [
      eq(
        "P8.63",
        "Electromagnetic forward map",
        String.raw`\alpha_{\rm pred}^{-1}=\mathfrak F_\alpha(u_*)`,
        "A numerical digit is licensed only after the spectral, root, threshold and uncertainty certificates are executed.",
      ),
    ],
    upstream: ["em-face", "parameter-selection", "numerics-parameter-root", "global-closure"],
    downstream: [],
    gate: "Numerical evaluation is an executable computation gate, not a structural identity.",
  },
  {
    id: "observable-gravity",
    label: "Gravitational response",
    shortLabel: "Gravity readout",
    eyebrow: "Observable family",
    tier: "observable",
    kind: "observable",
    lod: 2,
    position: [-6.0, -8.2, 11.7],
    cameraDistance: 4.8,
    color: "#9be6a8",
    chapter: "06 · Pregeometry and gravity",
    section: "§14–§19",
    summary: "Newtonian, wave, post-Einstein and stochastic responses derived from the reconstructed metric branch.",
    description:
      "The atlas exposes the path from archive order and volume through continuum reconstruction to the Einstein response, then displays the higher-curvature, nonlocal and stochastic corrections controlled by the selected carrier and QFT state.",
    mathematicalType: "Gauge-invariant gravitational observable functional",
    domain: "Certified geometry/QFT/matter solution class",
    codomain: "Potentials, wave response, lensing, curvature or correlation observables",
    regularity: "Observable-specific smearing and EFT error bounds",
    covariance: "Diffeomorphism invariant",
    units: "Observable dependent",
    equations: [
      eq(
        "G10.73",
        "Forward observable path",
        String.raw`\mathfrak y\mapsto[z_*(\mathfrak y)]\mapsto\mathcal O_G(z_*)`,
        "Every gravitational output retains its source, aperture, field and coupled-sector lineage.",
      ),
    ],
    upstream: ["gravity", "global-closure"],
    downstream: [],
  },
  {
    id: "observable-record",
    label: "Objective measurement record",
    shortLabel: "Record",
    eyebrow: "Observable family",
    tier: "observable",
    kind: "observable",
    lod: 2,
    position: [-12.0, -3.8, 10.6],
    cameraDistance: 4.8,
    color: "#7ee6d8",
    chapter: "05 · Quantum-record projection",
    section: "§17–§20",
    summary: "A selected, deposited, distinguishable, persistent and redundantly accessible event.",
    description:
      "The record observable is the endpoint of the complete quantum chain and the beginning of the geometric one. Its source-prepared probability, physical support, independent readability and archive ancestry can all be inspected backward.",
    mathematicalType: "Objective record object and archive event",
    domain: "Admitted instrument occurrence and record environment",
    codomain: "Classical event label with physical support and lineage",
    regularity: "Finite record error, SBS distance, persistence and accessibility thresholds",
    covariance: "Context and outcome relabelling",
    units: "Resolution dependent",
    equations: [
      eq(
        "Q5.74",
        "Record persistence",
        String.raw`S_i(\Delta t)=\inf_{0\le t\le\Delta t}s_i(t)\ge1-\varepsilon_{\rm pers}`,
        "A transient decohered alternative does not count as an objective archive event.",
      ),
    ],
    upstream: ["field-fingerprint", "quantum-records", "observers", "global-closure"],
    downstream: [],
  },
  {
    id: "observable-spectrum",
    label: "Particle spectrum and couplings",
    shortLabel: "Particle data",
    eyebrow: "Observable family",
    tier: "observable",
    kind: "observable",
    lod: 2,
    position: [9.2, 6.7, 11.5],
    cameraDistance: 4.8,
    color: "#e4a4ff",
    chapter: "07 and 08",
    section: "M7 §11–§18 · P8 §9–§13",
    summary: "Masses, mixing matrices, gauge couplings and threshold observables descended from one finite spectral datum.",
    description:
      "Particle observables are computed from singular values and invariant eigenspaces of the selected finite Dirac operator, electroweak vacuum stationarity, spectral gauge normalization and threshold-matched RG flow.",
    mathematicalType: "Flavour/gauge invariant spectral observable family",
    domain: "Selected finite geometry and physical parameter class",
    codomain: "Masses, CKM/PMNS invariants, couplings and decay/EFT coefficients",
    regularity: "Open spectral gaps and controlled threshold expansion",
    covariance: "Gauge and flavour-basis invariant",
    units: "Masses from v; couplings dimensionless",
    equations: [
      eq(
        "M7.60–M7.61",
        "Mass and mixing readout",
        String.raw`M_f=\frac{v}{\sqrt2}Y_f,\qquad V_{\rm CKM}=(U_u^L)^\dagger U_d^L,\qquad U_{\rm PMNS}=(U_e^L)^\dagger U_\nu`,
        "Basis-dependent matrices are quotiented; their singular values and relative left eigenspaces are observable.",
      ),
    ],
    upstream: ["matter", "parameter-selection", "numerics-parameter-root", "global-closure"],
    downstream: [],
  },
  {
    id: "observable-cosmology",
    label: "Cosmological observables",
    shortLabel: "Cosmic readout",
    eyebrow: "Observable family",
    tier: "observable",
    kind: "observable",
    lod: 2,
    position: [11.6, -4.1, 10.8],
    cameraDistance: 4.8,
    color: "#ffbd73",
    chapter: "09 · Cosmology, vacuum and time",
    section: "§8–§12",
    summary: "Expansion, perturbation, lensing and thermal-history observables from the selected large-scale branch.",
    description:
      "The same background and perturbation solution produces expansion history, scalar/vector/tensor transfer functions, matter growth, lensing response, primordial spectra and dark-sector signatures with controlled deviations from standard cosmology.",
    mathematicalType: "Gauge-invariant cosmological transfer observable",
    domain: "Well-posed FLRW/SVT solution and primordial state",
    codomain: "Power spectra, transfer functions, distances and abundance observables",
    regularity: "Causal initial-value evolution and observable-specific kernels",
    covariance: "Gauge-invariant perturbation variables",
    units: "Comoving/physical scales declared by the branch",
    equations: [
      eq(
        "C9.49",
        "Transfer map",
        String.raw`X_I(\mathbf k,\eta)=\sum_A T_{IA}(k,\eta;\theta_*,\mathfrak b)q_A(\mathbf k)`,
        "The complete Einstein–Boltzmann–projection system transports the selected primordial modes into gauge-invariant observables.",
      ),
    ],
    upstream: ["cosmology", "global-closure"],
    downstream: [],
  },
  {
    id: "observable-time",
    label: "Arrow of time",
    shortLabel: "Time arrow",
    eyebrow: "Relational observable",
    tier: "observable",
    kind: "observable",
    lod: 2,
    position: [3.1, -9.1, 11.8],
    cameraDistance: 4.8,
    color: "#ffd874",
    chapter: "09 and 09a",
    section: "Temporal and thermodynamic orientation",
    summary: "The common orientation detected by archive growth, causal response and entropy production.",
    description:
      "The arrow is observable where predecessor-closed records accumulate, response is retarded and the entropy current is nonnegative. If those orientations disagree, the selected branch fails the time-compatibility interface.",
    mathematicalType: "Orientation class of compatible partial orders and entropy flow",
    domain: "Archive, CTP response and thermodynamic solution",
    codomain: "Physical temporal orientation and clock order",
    regularity: "Acyclic order and nonnegative entropy production",
    covariance: "Orientation-preserving relational covariance",
    units: "Clock dependent",
    equations: [
      eq(
        "TH9a.44",
        "Temporal compatibility",
        String.raw`\precsim_D\ \parallel\ \operatorname{supp}G_{\rm ret}\ \parallel\ \sigma_{\rm th}\ge0\ \parallel\ dS_{\rm gen}/d\lambda\ge0`,
        "Archive order, retarded support, local entropy production and the generalized second law align only on branches satisfying their separate hypotheses.",
      ),
    ],
    upstream: ["time", "global-closure"],
    downstream: [],
  },
  {
    id: "observable-qcd",
    label: "QCD scale, gap and flux tension",
    shortLabel: "QCD completion",
    eyebrow: "Observable family",
    tier: "observable",
    kind: "observable",
    lod: 2,
    position: [10.0, 8.5, 12.1],
    cameraDistance: 4.8,
    color: "#dca2ff",
    chapter: "05a · Locally covariant QFT",
    section: "§10 · QCD completion, confinement and mass gap",
    summary: "The RG transmutation scale, physical singlet gap and flux-tube tension of the selected nonperturbative QCD completion.",
    description:
      "Asymptotic freedom supplies the RG scale but not confinement or a mass gap. The observable lineage continues through the selected exact completion, whose physical Hamiltonian spectrum, color-neutral algebra and Wilson-loop/flux criteria must all pass before the atlas reports QCD completion data.",
    mathematicalType: "Nonperturbative gauge-invariant spectral observable family",
    domain: "Selected anomaly-free matter branch, g3(μ★), RG scheme and QCD completion object",
    codomain: "ΛQCD, ΔQCD, color-singlet spectrum and pre-breaking flux tension",
    regularity: "Positive physical gap away from Goldstone sectors; reflection positivity, clustering and confinement gate",
    covariance: "Gauge invariant and scheme independent after matched dimensionless completion constants",
    units: "Mass and tension units inherited from ΛQCD",
    equations: [
      eq(
        "QFT5a.37",
        "Physical QCD gap",
        String.raw`\operatorname{spec}H_{\rm QCD}^{\rm phys}\subseteq\{0\}\cup[\Delta_{\rm QCD},\infty),\qquad\Delta_{\rm QCD}=c_{\rm gap}^{\mathfrak s}\Lambda_{\rm QCD}^{\mathfrak s}>0`,
        "The gap is an output of the selected completion, with scheme changes compensated between ΛQCD and the dimensionless matching invariant.",
      ),
      eq(
        "QFT5a.39",
        "Pure-gauge flux tension",
        String.raw`\sigma=-\lim_{R,T\to\infty}\frac1{RT}\log\langle W(R,T)\rangle>0,\qquad V_{Q\bar Q}(R)=\sigma R+o(R)`,
        "On the pure Yang–Mills compression a positive area-law tension certifies confinement; dynamical quarks use the branch's string-breaking criterion.",
      ),
    ],
    upstream: ["qft", "matter", "parameter-selection", "global-closure"],
    downstream: [],
    gate: "The nonperturbative QCD completion, rather than perturbative RG alone, must supply the physical gap and confinement criteria.",
  },
  {
    id: "observable-dark-relic",
    label: "Dark relic abundance",
    shortLabel: "ΩDMh²",
    eyebrow: "Observable family",
    tier: "observable",
    kind: "observable",
    lod: 2,
    position: [13.0, -2.2, 11.8],
    cameraDistance: 4.8,
    color: "#eeb476",
    chapter: "09 and 09a",
    section: "C9 §6–§7 · TH9a §6",
    summary: "The relic density produced by the selected primordial dark branch and its well-posed thermal or nonthermal kinetic history.",
    description:
      "A dark abundance is not inferred from an induced late-time response alone. The lineage requires an owned primordial component or an explicit production mechanism, selected masses and rates, a positive kinetic solution and the same stress contribution used by cosmology.",
    mathematicalType: "Kinetic relic-density observable",
    domain: "Selected dark branch, parameter root, FLRW solution and collision kernel Cχ",
    codomain: "ΩDMh² and associated transfer/stress history",
    regularity: "Positive well-posed kinetic network with controlled freeze-out or nonthermal production",
    covariance: "Covariant phase-space evolution and cosmological gauge invariance",
    units: "Dimensionless present abundance; microscopic rates in selected Tier-1 units",
    equations: [
      eq(
        "C9.28",
        "Dark kinetic equation",
        String.raw`p^\mu\nabla_\mu f_\chi-\Gamma^i_{\alpha\beta}p^\alpha p^\beta\frac{\partial f_\chi}{\partial p^i}=C_\chi[f]`,
        "The relic calculation uses the same covariant distribution that supplies the dark stress tensor.",
      ),
      eq(
        "TH9a.34",
        "Dilute freeze-out branch",
        String.raw`\dot n_\chi+3Hn_\chi=-\langle\sigma v\rangle(n_\chi^2-n_{\chi,\rm eq}^2)`,
        "This reduced equation is used only on the stable, dilute self-conjugate branch with rates derived from the selected matter theory.",
      ),
    ],
    upstream: ["matter", "parameter-selection", "cosmology", "thermodynamics", "global-closure"],
    downstream: [],
  },
  {
    id: "observable-baryogenesis",
    label: "Baryon asymmetry",
    shortLabel: "ηB",
    eyebrow: "Observable family",
    tier: "observable",
    kind: "observable",
    lod: 2,
    position: [10.2, -6.6, 12.4],
    cameraDistance: 4.8,
    color: "#f2c16f",
    chapter: "09a · Thermodynamic limit",
    section: "§7 · Baryogenesis and leptogenesis branches",
    summary: "The charge yield produced by selected CP-odd sources, spectator dynamics, sphaleron conversion and washout.",
    description:
      "The atlas reports no baryon abundance from the label ‘baryogenesis’ alone. The source and washout kernels must be derived from the selected Lagrangian and finite-temperature rates, and the positive kinetic network must include the spectator and sphaleron processes claimed by the branch.",
    mathematicalType: "Reaction-network charge-yield observable",
    domain: "Selected CP-violating matter branch, primordial state and thermal kinetic network",
    codomain: "YΔ and the converted baryon-to-photon or baryon-to-entropy ratio",
    regularity: "Well-posed positive reaction network with controlled washout and rate approximations",
    covariance: "Basis-invariant CP sources and covariant cosmological kinetics",
    units: "Dimensionless charge yield",
    equations: [
      eq(
        "TH9a.36",
        "Charge-yield network",
        String.raw`\frac{dY_\Delta}{dz}=\mathsf S_{\rm CP}(z;\theta_*)-\mathsf W(z;\theta_*)Y_\Delta`,
        "The final asymmetry is a solved reaction-network output, not a free cosmological initial condition.",
      ),
    ],
    upstream: ["matter", "parameter-selection", "cosmology", "thermodynamics", "global-closure"],
    downstream: [],
    gate: "No ηB value is emitted without selected CP invariants, finite-temperature rates, spectator effects, sphaleron conversion and washout.",
  },
  {
    id: "observable-horizon-entropy",
    label: "Horizon and generalized entropy",
    shortLabel: "TH · Sgen",
    eyebrow: "Observable family",
    tier: "observable",
    kind: "observable",
    lod: 2,
    position: [-7.8, -7.2, 13.0],
    cameraDistance: 4.8,
    color: "#9edca9",
    chapter: "09a · Thermodynamic limit",
    section: "§8 · Generalized entropy and gravitational ownership",
    summary: "Hawking temperature, Wald entropy and generalized entropy from the same renormalized gravitational/QFT branch.",
    description:
      "The area term, higher-curvature Wald term and outside entropy share one matched renormalization. A horizon branch requires its regular state and generalized-second-law hypotheses; a QES branch instead requires anchoring, homology, extremality and minimality.",
    mathematicalType: "Renormalized horizon/QES entropy observable",
    domain: "Solved gravitational background, admissible QFT state and selected horizon or QES boundary-value problem",
    codomain: "TH, SWald and Sgen on the admitted surface or horizon cuts",
    regularity: "Regular horizon/QES data, matched counterterms and branch-specific GSL or extremality gate",
    covariance: "Diffeomorphism invariant surface functional",
    units: "Entropy dimensionless; TH in selected energy units",
    equations: [
      eq(
        "TH9a.39",
        "Generalized entropy",
        String.raw`S_{\rm gen}=\frac{A_{\rm ren}}{4G_R\hbar}+S_{\rm out}^{\rm ren}+S_{\rm grav}^{\rm higher}`,
        "Local entropy counterterms are owned by the renormalized gravitational functional and are not counted again in outside entropy.",
      ),
      eq(
        "TH9a.39c",
        "Hawking temperature and first law",
        String.raw`T_H=\frac{\hbar\kappa_H}{2\pi},\qquad\delta M=T_H\delta S_{\rm Wald}^{\rm ren}+\Omega_H\delta J+\Phi_H\delta Q`,
        "On the stationary branch, temperature and entropy use the same surface gravity and renormalized action coefficients as the gravitational equations.",
      ),
    ],
    upstream: ["qft", "gravity", "thermodynamics", "global-closure"],
    downstream: [],
  },
  {
    id: "recovery-qft",
    label: "Ordinary QFT/EFT limit",
    shortLabel: "QFT limit",
    eyebrow: "Recovery limit",
    tier: "recovery",
    kind: "limit",
    lod: 3,
    position: [-8.4, 7.2, 12.4],
    color: "#72e6a5",
    chapter: "05a and 10",
    section: "Recovery limits",
    summary: "Low energy relative to the aperture scale recovers renormalized local QFT with controlled EFT remainders.",
    description:
      "Uniform gaps, matched thresholds and local remainder estimates suppress unresolved aperture structure while preserving the selected gauge theory and its locally covariant algebra.",
    mathematicalType: "Controlled asymptotic recovery diagram",
    domain: "E/ΛA → 0 with fixed admitted branch",
    codomain: "Renormalized local QFT/EFT",
    regularity: "Uniform spectral gap and local EFT remainder bound",
    covariance: "Locally covariant",
    units: "Dimensionless control E/ΛA",
    equations: [
      eq(
        "G10.68",
        "Recovery criterion",
        String.raw`\sup_{z\in K}\|L_\lambda^E\mathcal R_{\rm full}(z)-\mathcal R_{\rm lim}(L_\lambda^Xz)\|\le\varepsilon_\lambda\to0`,
        "A named limit is accepted only when the full and limiting residuals commute asymptotically.",
      ),
    ],
    upstream: ["qft"],
    downstream: [],
  },
  {
    id: "recovery-gr",
    label: "Einstein-gravity limit",
    shortLabel: "GR limit",
    eyebrow: "Recovery limit",
    tier: "recovery",
    kind: "limit",
    lod: 3,
    position: [-5.0, -10.0, 12.6],
    color: "#72e6a5",
    chapter: "06 and 10",
    section: "Gravity recovery",
    summary: "Small record scale and suppressed curvature corrections recover a Lorentzian continuum obeying Einstein gravity.",
    description:
      "Order-volume convergence first recovers the continuum metric. The additional limit ℓcurv²|R|→0 suppresses higher-curvature and nonlocal corrections, leaving the Einstein equation with the selected Newton constant and cosmological branch.",
    mathematicalType: "Continuum and derivative-expansion recovery",
    domain: "ℓrec→0 and ℓcurv²|R|→0",
    codomain: "General relativity",
    regularity: "Uniform reconstruction and curvature bounds",
    covariance: "Diffeomorphism covariant",
    units: "Record and curvature lengths",
    equations: [
      eq(
        "G6.39",
        "Continuum reconstruction criterion",
        String.raw`D_{\rm ord},D_{\rm vol},D_{\rm nerve},D_{\rm dim},D_{\rm context},D_{\rm refine}\longrightarrow0`,
        "All independent order, volume, topology, dimension, context and refinement defects must vanish; convergence of one statistic does not certify a continuum metric.",
      ),
      eq(
        "G6.83",
        "Einstein derivative-expansion limit",
        String.raw`\frac{\|\mathcal Q^{\rm grav}\|}{\|G[g]\|}=O\!\left((\ell_A/L)^2\right)`,
        "At curvature radius L large compared with the aperture scale, the controlled gravitational correction is suppressed relative to the Einstein tensor.",
      ),
    ],
    upstream: ["pregeometry", "gravity"],
    downstream: [],
  },
  {
    id: "recovery-classical",
    label: "Classical Hamiltonian limit",
    shortLabel: "Classical",
    eyebrow: "Recovery limit",
    tier: "recovery",
    kind: "limit",
    lod: 3,
    position: [-11.7, 0.0, 12.0],
    color: "#72e6a5",
    chapter: "10 · Global compatibility",
    section: "§10 · Recovery limits",
    summary: "Deformation quantization, Wigner convergence, Egorov dynamics and redundant records recover classical Hamiltonian fields.",
    description:
      "Decoherence alone is not the classical limit. Operator products and commutators must approach the Poisson algebra, states must converge to phase-space measures, quantum evolution must approach Hamiltonian flow and pointer records must become stable classical cells.",
    mathematicalType: "Semiclassical deformation-quantization limit",
    domain: "ℏ/Schar → 0 on compatible cylindrical refinements",
    codomain: "Liouville/Hamiltonian classical dynamics with objective records",
    regularity: "Quantization-stable symbols and Egorov estimates on fixed time windows",
    covariance: "Canonical transformations",
    units: "Dimensionless semiclassical control",
    equations: [
      eq(
        "G10.69b",
        "Poisson recovery",
        String.raw`\frac{1}{i\hbar}[\operatorname{Op}_\hbar(a),\operatorname{Op}_\hbar(b)]-\operatorname{Op}_\hbar(\{a,b\})\longrightarrow0`,
        "Quantum commutators converge to the classical Poisson bracket.",
      ),
      eq(
        "G10.69d",
        "Egorov dynamics",
        String.raw`U_\hbar(t)^*\operatorname{Op}_\hbar(a)U_\hbar(t)-\operatorname{Op}_\hbar(a\circ\Phi_H^t)\longrightarrow0`,
        "The limiting phase-space measure follows Hamiltonian flow rather than merely becoming diagonal.",
      ),
    ],
    upstream: ["quantum", "quantum-records", "global-closure"],
    downstream: [],
  },
  {
    id: "recovery-semiclassical-gravity",
    label: "Semiclassical gravity limit",
    shortLabel: "Semiclassical G",
    eyebrow: "Recovery limit",
    tier: "recovery",
    kind: "limit",
    lod: 3,
    position: [-1.0, -10.2, 12.8],
    color: "#72e6a5",
    chapter: "05a, 06 and 10",
    section: "QFT recovery · G6 §18 · G10 §10",
    summary: "Small relative stress fluctuations recover the mean-field semiclassical Einstein equation, with the noise kernel controlling the first stochastic correction.",
    description:
      "This limit does not replace the quantum stress tensor by a classical source by assertion. The renormalized expectation value must obey the Ward identity, the state must satisfy the QFT admissibility gates, and smeared connected stress fluctuations must become small. Before that suppression, the Einstein–Langevin noise term remains part of the physical response.",
    mathematicalType: "Controlled mean-field limit of the CTP Einstein–Langevin system",
    domain: "Nq→∞ with Var(T)/⟨T⟩²→0 on a fixed globally hyperbolic branch",
    codomain: "Semiclassical Einstein equation with controlled stochastic remainder",
    regularity: "Hadamard/completed state; renormalized conserved stress; positive smeared noise kernel; uniform fluctuation bound",
    covariance: "Diffeomorphism covariance and CTP Ward closure",
    units: "Stress and curvature units fixed by the selected gravitational branch",
    equations: [
      eq(
        "G6.81",
        "Einstein–Langevin response",
        String.raw`\delta G_{\mu\nu}[h]+\delta\mathcal Q_{\mu\nu}^{\rm grav}[h]=8\pi G_R\left(\delta\langle T_{\mu\nu}\rangle[h]+\xi_{\mu\nu}\right)`,
        "The stochastic source is retained until the stress-fluctuation limit suppresses its observable contribution.",
      ),
      eq(
        "G10.69",
        "Mean-field control",
        String.raw`N_{\rm q}\to\infty,\qquad\operatorname{Var}T/\langle T\rangle^2\to0`,
        "The semiclassical Einstein equation is a controlled large-occupation or mean-field recovery, not merely the formal replacement of an operator by its expectation value.",
      ),
    ],
    upstream: ["qft", "gravity"],
    downstream: [],
  },
  {
    id: "recovery-thermo",
    label: "Thermodynamic and hydrodynamic limits",
    shortLabel: "Thermo limit",
    eyebrow: "Recovery limit",
    tier: "recovery",
    kind: "limit",
    lod: 3,
    position: [7.4, -8.0, 12.5],
    color: "#72e6a5",
    chapter: "09a and 10",
    section: "Thermodynamic recovery",
    summary: "Fast mixing recovers Gibbs/KMS thermodynamics; small Knudsen number recovers relativistic hydrodynamics.",
    description:
      "The equilibrium and hydrodynamic limits are distinct. Detailed balance and fast mixing yield Gibbs thermodynamics, while collision gaps, well-prepared scaling and uniform moments yield constitutive hydrodynamic fields.",
    mathematicalType: "Mixing and kinetic scaling limits",
    domain: "τmix/τobs→0 and Kn→0 under their separate hypotheses",
    codomain: "Equilibrium thermodynamics and relativistic hydrodynamics",
    regularity: "KMS/detailed balance; collision gap; positivity; moment bounds",
    covariance: "Relativistic covariance",
    units: "Mixing, observation and mean-free-path scales",
    equations: [
      eq(
        "TH9a.28",
        "Hydrodynamic control parameter",
        String.raw`\operatorname{Kn}=\lambda_{\rm mfp}/L_{\rm macro}`,
        "The hydrodynamic limit is controlled by scale separation between the microscopic mean free path and macroscopic variation length.",
      ),
      eq(
        "TH9a.30",
        "Relativistic hydrodynamic recovery",
        String.raw`\operatorname{HydroLim}:\{f_{\operatorname{Kn}}\}_{\operatorname{Kn}>0}\longmapsto\lim_{\operatorname{Kn}\to0}\operatorname{Mom}_{\rm inv}[f_{\operatorname{Kn}}]=(\epsilon,p,u^\mu,n_a,T^{\mu\nu},J_a^\mu,s^\mu)`,
        "With a collision gap, weighted regularity, positivity, uniform moments and well-prepared data, collision-invariant moments converge to relativistic hydrodynamic variables.",
      ),
    ],
    upstream: ["thermodynamics"],
    downstream: [],
  },
  {
    id: "recovery-cosmology",
    label: "Standard cosmology limit",
    shortLabel: "ΛCDM limit",
    eyebrow: "Recovery limit",
    tier: "recovery",
    kind: "limit",
    lod: 3,
    position: [11.0, -7.0, 12.2],
    color: "#72e6a5",
    chapter: "09 and 10",
    section: "Cosmological recovery",
    summary: "Homogeneous truncation and suppressed EFT/non-CDM corrections recover standard background and perturbation cosmology.",
    description:
      "The selected dark abundance need not vanish. Instead, its stress and transfer kernels approach the cold-dark-matter response while higher-order gravitational and aperture corrections become negligible.",
    mathematicalType: "Controlled cosmological branch limit",
    domain: "εFLRW, εEFT, εnonCDM → 0",
    codomain: "Standard background and perturbation cosmology",
    regularity: "Consistent truncation and uniform transfer-kernel bounds",
    covariance: "Gauge-invariant cosmological perturbation theory",
    units: "Dimensionless deviation controls",
    equations: [
      eq(
        "C9.41",
        "Cosmological tensor response",
        String.raw`h_\lambda''+(2+\nu_M)\mathcal Hh_\lambda'+c_T^2k^2h_\lambda+a^2m_T^2h_\lambda=16\pi G_Ra^2\Pi_\lambda+S_\lambda^{\rm nonlocal}`,
        "The standard tensor equation is recovered by suppressing the running-friction, speed, mass and nonlocal aperture corrections on the selected cosmological branch.",
      ),
      eq(
        "C9.42",
        "Einstein cosmology limit",
        String.raw`\nu_M\to0,\qquad c_T^2\to1,\qquad m_T^2\to0,\qquad S_\lambda^{\rm nonlocal}\to0`,
        "These simultaneous long-wavelength aperture-decoupling limits recover the Einstein tensor-mode propagation law.",
      ),
    ],
    upstream: ["cosmology"],
    downstream: [],
  },
];

function defaultBoundaryClass(node: AtlasNodeDefinition): string {
  if (node.tier === "source" || node.tier === "tier0") {
    return "Source support, lineage and boundary type fixed by the realization certificate";
  }
  if (node.tier === "aperture" || node.tier === "field") {
    return "Inherited aperture boundary class with the face-specific operator domain and trace convention";
  }
  return "Inherited Cauchy/CTP, gauge and physical boundary data of the certified upstream branch; no independent retuning";
}

function defaultApproximationOrder(node: AtlasNodeDefinition): string {
  if (node.lod === 4) return "Explicit discretization, truncation and solver order stated by this numerical node";
  if (node.kind === "limit") return "Asymptotic order in the displayed control parameter with a uniform recovery remainder";
  if (node.kind === "observable") return "Forward-map order fixed by the selected spectral, EFT, threshold and detector conventions";
  if (node.kind === "sector") return "Exact within the declared operator/EFT basis; retained loop, derivative and kinetic orders are branch data";
  return "Exact structural relation at continuum level; any discretization is delegated to an attached LOD-4 node";
}

function defaultErrorNorm(node: AtlasNodeDefinition): string {
  if (node.lod === 4) return "Certified residual, posterior, truncation and propagated-observable norms displayed at this node";
  if (node.kind === "limit") return "Recovery commutator/residual norm of G10.68 with ελ→0";
  if (node.kind === "observable") return "Propagated observable covariance plus spectral, root, EFT, matching and scheme remainders";
  if (node.tier === "tier1") return "Weighted dimensionless sector residual norm ‖wsRs‖ in the global direct sum";
  return "Zero structural defect for the exact map; numerical realizations must attach a certified LOD-4 norm";
}

export const atlasNodes: AtlasNode[] = atlasNodeDefinitions.map((node) => ({
  ...node,
  stateVariables: node.stateVariables
    ?? `Typed ${node.mathematicalType} variables on: ${node.domain}`,
  boundaryClass: node.boundaryClass ?? defaultBoundaryClass(node),
  branchDomain: node.branchDomain
    ?? node.gate
    ?? `Admitted ${tierMeta[node.tier].label} branch satisfying the stated domain, regularity and covariance gates`,
  approximationOrder: node.approximationOrder ?? defaultApproximationOrder(node),
  errorNorm: node.errorNorm ?? defaultErrorNorm(node),
  recovery: node.recovery ?? [],
}));

export const atlasNodeMap = new Map(atlasNodes.map((node) => [node.id, node]));

const edge = (
  from: string,
  to: string,
  label: string,
  kind: AtlasEdge["kind"],
  map: string,
  verifier: string,
): AtlasEdge => ({
  id: `${from}--${to}`,
  from,
  to,
  label,
  kind,
  map,
  domain: atlasNodeMap.get(from)?.label ?? from,
  codomain: atlasNodeMap.get(to)?.label ?? to,
  linearization: `Branch derivative of ${map} on its represented tangent chart; categorical-only stages report non-differentiability until represented`,
  adjoint: `Adjoint of the represented branch derivative in the declared Hilbert/Banach dual pairing; unavailable categorical adjoints remain an explicit gate`,
  validityDomain: verifier,
  verifier,
  errorModel: kind === "recovery"
    ? "Uniform recovery residual ελ in the target norm, required to vanish in the stated limit"
    : kind === "trace"
      ? "Forward sensitivity and propagated observable covariance on the certified solution branch"
      : "Exact structural/interface map; any numerical realization must attach a discretization defect and solver tolerance",
  partial: kind === "descent" || kind === "interface" || kind === "recovery",
});

export const atlasEdges: AtlasEdge[] = [
  edge("omega", "tier0-law", "lawful closure", "descent", "μLΩ", "least-fixed-point and no-free-extension gate"),
  edge("tier0-law", "realization-seed", "prepare realization", "descent", "Jreal", "source lineage and aperture-preparation certificate"),
  edge("realization-seed", "aperture", "enter aperture", "descent", "A₁/₂ᵃ", "face domain and regularity record"),
  edge("aperture", "aperture-reduction", "reduce", "descent", "Red", "reducing-subspace condition"),
  edge("aperture-reduction", "aperture-visibility", "probe", "descent", "Visᵃ", "probe separation and quotient covariance"),
  edge("aperture-visibility", "aperture-completion", "complete", "descent", "Compᵃ", "minimal relation sufficiency"),
  edge("aperture-completion", "aperture-routing", "remove excess and route", "descent", "Spineᵃ∘NoExᵃ", "CSCF/effective/residue/null classifier"),
  edge("aperture-routing", "spectral-spine", "full carrier", "descent", "CarrierRoute=CSCFEligible", "closed form, symbol, damping and trace gates"),
  edge("aperture", "spectral-spine", "certified full-route composite", "descent", "Spineᵃ∘NoExᵃ∘Compᵃ∘Visᵃ∘Red∘CRI", "only on the CSCFEligible branch after every intermediate aperture gate in A3.79–A3.80 passes"),
  edge("aperture-routing", "route-effective", "effective response", "descent", "Schur/Volterra elimination", "causal memory and approximation bound"),
  edge("aperture-routing", "route-residue", "exact obstruction", "descent", "Obstructionᵃ", "typed failed gate"),
  edge("aperture-routing", "route-null", "no carrier", "descent", "Nullᵃ", "route exhaustion"),
  edge("route-residue", "rh-face", "spectral residue", "interface", "Osp", "selfadjoint Hilbert–Pólya realization"),
  edge("route-residue", "fluid-face", "continuation residue", "interface", "Ofl", "global strong continuation bound"),
  edge("aperture", "critical-face", "critical face", "interface", "β(g)", "fixed-point and stability spectrum"),
  edge("aperture", "em-face", "EM face", "interface", "N∂", "elliptic boundary and heat-finite capacity"),
  edge("spectral-spine", "canonical-field", "functional calculus", "descent", "F(K,h,γ)", "selfadjoint K and admissible h,γ"),
  edge("route-effective", "canonical-field", "effective field", "descent", "Keff(z)", "causal resolvent domain"),
  edge("canonical-field", "coherent-face", "phase", "descent", "Uₜ=e⁻ⁱᵗʰ⁽ᴷ⁾", "Stone continuity"),
  edge("canonical-field", "dissipative-face", "contraction", "descent", "Sₜ=e⁻ᵗᴷ", "maximal accretivity"),
  edge("coherent-face", "field-fingerprint", "frequency profile", "interface", "ωλ=|h(λ)|", "shared spectral indexing"),
  edge("dissipative-face", "field-fingerprint", "decay profile", "interface", "Γλ=γλ", "shared spectral indexing"),
  edge("dissipative-face", "field-inverse", "inverse transmission", "feedback", "ψT(ΛT)", "full operator readout"),
  edge("field-inverse", "spectral-spine", "reconstruct carrier", "feedback", "K=ψT(ΛT)", "Borel functional calculus"),
  edge("canonical-field", "qft", "relativistic realization", "descent", "QuantY", "BV, microlocal and completion gates"),
  edge("canonical-field", "quantum", "operational realization", "descent", "RepQ", "normal algebra and state"),
  edge("dissipative-face", "quantum", "GKSL channel realization", "interface", "K↦{Lr}r with ½ΣrLr†Lr=γK", "conservative completely positive factorization on the declared quantum representation"),
  edge("qft", "quantum", "detector completion", "interface", "N_D,ω̄,I_D", "local normal instruments"),
  edge("quantum", "quantum-records", "selection and deposition", "descent", "I_B then D_B", "Born compatibility and semicausality"),
  edge("dissipative-face", "quantum-records", "stabilize", "interface", "Φrec", "pointer persistence and redundancy"),
  edge("quantum-records", "pregeometry", "archive geometry", "descent", "PreGeom", "cycle-safe intervention order"),
  edge("pregeometry", "gravity", "continuum fixed point", "descent", "Recmet;SolG", "faithful order-volume embedding and same-branch contraction gate"),
  edge("pregeometry", "cosmology", "archive compatibility", "interface", "Archcos", "same objective archive and temporal boundary data"),
  edge("matter-finite-geometry", "matter", "inner fluctuation", "descent", "D↦DA", "finite lift and anomaly gate"),
  edge("canonical-field", "matter-finite-geometry", "internal spectral face", "descent", "RepM", "finite-cell invariant"),
  edge("pregeometry", "qft", "Lorentzian background", "feedback", "Bkg₄spin,G", "global hyperbolicity"),
  edge("matter", "qft", "field content", "feedback", "MBranchY", "chiral anomaly cancellation"),
  edge("qft", "gravity", "quantum stress", "feedback", "TQFT,dyn", "CTP Ward identity"),
  edge("matter", "gravity", "classical stress", "feedback", "TM,cl", "exact-once ownership"),
  edge("matter-finite-geometry", "em-face", "unbroken EM compression", "interface", "ΠemKOSΠem", "commuting compression"),
  edge("matter", "em-face", "select unbroken electromagnetic channel", "interface", "Πem(D_A,ρ_F)Πem", "stable electroweak vacuum, unbroken U(1)em and the same finite spectral representation"),
  edge("matter", "parameter-selection", "spectral invariants", "descent", "Inv(D_F)", "quotient-invariant data"),
  edge("qft", "parameter-selection", "RG and completion matching", "interface", "MatchRG∘NPComp", "same renormalization scheme, thresholds, nonperturbative branch and held-out observable partition"),
  edge("em-face", "parameter-selection", "capacity constraint", "descent", "N∂=0", "same subtraction scheme"),
  edge("critical-face", "parameter-selection", "branch stability", "interface", "Dβ", "isolated critical stratum"),
  edge("gravity", "cosmology", "FLRW/SVT restriction", "descent", "Rescos", "consistent truncation"),
  edge("matter", "cosmology", "matter content", "interface", "TcosM", "same owned action"),
  edge("parameter-selection", "cosmology", "physical parameters", "interface", "θ(μ)", "RG and threshold consistency"),
  edge("cosmology", "thermodynamics", "thermal history", "descent", "Kin/Th", "collision and KMS gates"),
  edge("qft", "thermodynamics", "state and response", "interface", "ω,CTP", "passivity/detailed balance"),
  edge("gravity", "thermodynamics", "generalized gravitational entropy", "interface", "(Igrav,ω)↦SWald+Sout", "matched gravitational counterterms, outside-entropy subtraction and a certified horizon or QES branch"),
  edge("quantum-records", "time", "archive orientation", "descent", "ΘA", "acyclic predecessor closure"),
  edge("thermodynamics", "time", "entropy orientation", "interface", "Θth", "nonnegative entropy production"),
  edge("cosmology", "time", "causal orientation", "interface", "Θret", "retarded support"),
  edge("quantum-records", "observers", "accessible records", "descent", "IntY,o", "persistence and access"),
  edge("thermodynamics", "observers", "stable subsystem", "interface", "H_Y,o", "metabolic/thermal support"),
  edge("time", "observers", "observer history", "interface", "ΘA", "compatible clock embedding"),
  edge("qft", "global-closure", "sector residual", "interface", "RF", "Ward/BV/CTP closure"),
  edge("quantum", "global-closure", "quantum residual", "interface", "RQ", "state evolution, effective instruments and normalization"),
  edge("quantum-records", "global-closure", "record residual", "interface", "RR", "objective archive closure"),
  edge("gravity", "global-closure", "geometry residual", "interface", "RG", "Bianchi and gauge propagation"),
  edge("matter", "global-closure", "matter residual", "interface", "RM", "anomaly and stress ownership"),
  edge("parameter-selection", "global-closure", "selection residual", "interface", "RP", "isolated active stratum"),
  edge("cosmology", "global-closure", "cosmology residual", "interface", "RC", "same action and initial data"),
  edge("thermodynamics", "global-closure", "thermal residual", "interface", "RTh", "kinetic/entropy closure"),
  edge("time", "global-closure", "orientation constraint", "interface", "RTm", "common time embedding"),
  edge("observers", "global-closure", "observer constraint", "interface", "RO", "subsystem compatibility"),
  edge("global-closure", "numerics-global-solver", "certify coupled zero", "interface", "N=z−A₀R", "contraction ball and posterior error bound"),
  edge("parameter-selection", "numerics-parameter-root", "discretize and solve", "interface", "BndSpec+Root+RG", "spectral, root, RG, scheme and identifiability certificate"),
  edge("numerics-parameter-root", "global-closure", "supply certified parameter residual", "interface", "(u★,Σu,εsel)↦RP", "same active stratum, branch identifier, threshold convention and global residual weights"),
  edge("numerics-parameter-root", "observable-alpha", "propagate certified output", "trace", "Fα(u★)", "held-out forward map and total uncertainty interval"),
  edge("numerics-parameter-root", "observable-spectrum", "propagate spectrum", "trace", "DObs·Σu·DObs*", "flavour-invariant output covariance and threshold error"),
  edge("global-closure", "observable-alpha", "evaluate", "trace", "Oα", "held-out forward map"),
  edge("global-closure", "observable-gravity", "evaluate", "trace", "OG", "diffeomorphism-invariant readout"),
  edge("global-closure", "observable-record", "evaluate", "trace", "OR", "objective-record criterion"),
  edge("global-closure", "observable-spectrum", "evaluate", "trace", "OM", "gauge/flavour invariance"),
  edge("global-closure", "observable-cosmology", "evaluate", "trace", "OC", "gauge-invariant transfer map"),
  edge("global-closure", "observable-time", "evaluate", "trace", "OTm", "orientation compatibility"),
  edge("global-closure", "observable-qcd", "evaluate QCD completion", "trace", "NPCompY,3", "physical singlet gap and confinement criteria"),
  edge("global-closure", "observable-dark-relic", "solve relic history", "trace", "RelicSolve", "positive selected kinetic network and owned stress"),
  edge("global-closure", "observable-baryogenesis", "solve charge yield", "trace", "SCP−WYΔ", "selected CP source, spectator, sphaleron and washout network"),
  edge("global-closure", "observable-horizon-entropy", "evaluate horizon/QES branch", "trace", "Sgen", "matched renormalization and branch-specific horizon/QES gate"),
  edge("qft", "recovery-qft", "low-energy limit", "recovery", "E/ΛA→0", "uniform EFT remainder"),
  edge("pregeometry", "recovery-gr", "continuum limit", "recovery", "ℓrec→0", "order-volume convergence"),
  edge("gravity", "recovery-gr", "weak-curvature limit", "recovery", "ℓcurv²|R|→0", "uniform curvature bound"),
  edge("quantum", "recovery-classical", "deformation-quantization limit", "recovery", "ℏ/Schar→0", "product, Poisson-commutator, Wigner and Egorov gates"),
  edge("quantum-records", "recovery-classical", "classical record limit", "recovery", "ℏ/Schar→0", "decoherent persistent pointer cells and redundant fragments"),
  edge("global-closure", "recovery-classical", "semiclassical limit", "recovery", "ℏ/Schar→0", "Wigner and Egorov gates"),
  edge("qft", "recovery-semiclassical-gravity", "mean-stress limit", "recovery", "VarT/⟨T⟩²→0", "renormalized conserved expectation stress"),
  edge("gravity", "recovery-semiclassical-gravity", "suppress stochastic remainder", "recovery", "Nq→∞", "positive noise kernel and uniform fluctuation bound"),
  edge("thermodynamics", "recovery-thermo", "mixing/kinetic limit", "recovery", "τmix/τobs,Kn→0", "detailed balance and collision gap"),
  edge("cosmology", "recovery-cosmology", "standard-cosmology limit", "recovery", "εFLRW,εEFT,εnonCDM→0", "consistent truncation"),
];

export const observableRoutes: ObservableRoute[] = [
  {
    id: "alpha",
    label: "Trace the fine-structure observable",
    shortLabel: "Fine structure",
    color: "#ffc96b",
    description: "Follow the electromagnetic normalization from source law through the aperture boundary spectrum, finite geometry, parameter root and low-energy RG readout.",
    nodeIds: ["omega", "tier0-law", "realization-seed", "aperture", "spectral-spine", "canonical-field", "matter-finite-geometry", "matter", "em-face", "parameter-selection", "numerics-parameter-root", "global-closure", "observable-alpha"],
    output: "αpred⁻¹",
  },
  {
    id: "gravity",
    label: "Trace gravity",
    shortLabel: "Gravity",
    color: "#9be6a8",
    description: "Follow objective records into causal order and volume, through Lorentzian reconstruction and the uniquely sourced Einstein/EFT response.",
    nodeIds: ["omega", "tier0-law", "realization-seed", "aperture", "spectral-spine", "canonical-field", "quantum", "quantum-records", "pregeometry", "gravity", "global-closure", "observable-gravity"],
    output: "Gμν + corrections",
  },
  {
    id: "measurement",
    label: "Trace an objective record",
    shortLabel: "Measurement",
    color: "#7ee6d8",
    description: "Follow one quantum alternative through Born weighting, source-prepared selection, physical deposition, spectrum broadcasting and objective archive formation.",
    nodeIds: ["omega", "tier0-law", "realization-seed", "aperture", "spectral-spine", "canonical-field", "dissipative-face", "quantum", "quantum-records", "observers", "global-closure", "observable-record"],
    output: "Objective archive event",
  },
  {
    id: "matter",
    label: "Trace matter and the Standard Model",
    shortLabel: "Matter",
    color: "#e4a4ff",
    description: "Follow the source finite-cell invariant into chirality, gauge symmetry, inner fluctuations, anomaly cancellation, masses, mixing and particle observables.",
    nodeIds: ["omega", "tier0-law", "realization-seed", "aperture", "spectral-spine", "canonical-field", "matter-finite-geometry", "matter", "qft", "parameter-selection", "global-closure", "observable-spectrum"],
    output: "Masses, mixing and couplings",
  },
  {
    id: "cosmology",
    label: "Trace the cosmological readout",
    shortLabel: "Cosmology",
    color: "#ffbd73",
    description: "Follow the common field and selected matter/gravity branch into FLRW dynamics, perturbations, dark response, thermal history and large-scale observables.",
    nodeIds: ["omega", "tier0-law", "realization-seed", "aperture", "spectral-spine", "canonical-field", "qft", "quantum", "quantum-records", "pregeometry", "gravity", "matter", "parameter-selection", "cosmology", "thermodynamics", "global-closure", "observable-cosmology"],
    output: "Expansion and transfer observables",
  },
  {
    id: "time",
    label: "Trace the arrow of time",
    shortLabel: "Time",
    color: "#ffd874",
    description: "Follow dissipative stabilization and objective archive growth into the common retarded, thermodynamic and observer time orientation.",
    nodeIds: ["omega", "tier0-law", "realization-seed", "aperture", "spectral-spine", "canonical-field", "dissipative-face", "quantum-records", "pregeometry", "cosmology", "thermodynamics", "time", "observers", "global-closure", "observable-time"],
    output: "Compatible temporal orientation",
  },
  {
    id: "qcd",
    label: "Trace the QCD completion",
    shortLabel: "QCD",
    color: "#dca2ff",
    description: "Follow the selected color gauge branch through RG transmutation into the nonperturbative completion that supplies the singlet spectrum, mass gap and confinement criteria.",
    nodeIds: ["omega", "tier0-law", "realization-seed", "aperture", "spectral-spine", "canonical-field", "matter-finite-geometry", "matter", "qft", "parameter-selection", "global-closure", "observable-qcd"],
    output: "ΛQCD, ΔQCD and flux tension",
  },
  {
    id: "dark-relic",
    label: "Trace the dark relic abundance",
    shortLabel: "Dark relic",
    color: "#eeb476",
    description: "Follow a selected primordial dark component and its microscopic rates through covariant kinetics, cosmological expansion and the certified relic-density solve.",
    nodeIds: ["omega", "tier0-law", "realization-seed", "aperture", "spectral-spine", "canonical-field", "matter-finite-geometry", "matter", "parameter-selection", "qft", "quantum", "quantum-records", "pregeometry", "gravity", "cosmology", "thermodynamics", "global-closure", "observable-dark-relic"],
    output: "ΩDMh²",
  },
  {
    id: "baryogenesis",
    label: "Trace the baryon asymmetry",
    shortLabel: "Baryogenesis",
    color: "#f2c16f",
    description: "Follow selected CP-odd matter invariants and thermal rates through source, washout, spectator and sphaleron kinetics to the final baryon asymmetry.",
    nodeIds: ["omega", "tier0-law", "realization-seed", "aperture", "spectral-spine", "canonical-field", "matter-finite-geometry", "matter", "parameter-selection", "cosmology", "thermodynamics", "global-closure", "observable-baryogenesis"],
    output: "ηB",
  },
  {
    id: "horizon-entropy",
    label: "Trace horizon and generalized entropy",
    shortLabel: "Horizon entropy",
    color: "#9edca9",
    description: "Follow the QFT state and reconstructed gravity branch into the matched Wald/outside entropy functional and its horizon or QES boundary-value gate.",
    nodeIds: ["omega", "tier0-law", "realization-seed", "aperture", "spectral-spine", "canonical-field", "qft", "quantum", "quantum-records", "pregeometry", "gravity", "thermodynamics", "global-closure", "observable-horizon-entropy"],
    output: "TH, SWald and Sgen",
  },
];

export const guidedTour = [
  "omega",
  "tier0-law",
  "realization-seed",
  "aperture",
  "aperture-routing",
  "spectral-spine",
  "canonical-field",
  "coherent-face",
  "dissipative-face",
  "quantum",
  "quantum-records",
  "pregeometry",
  "gravity",
  "matter",
  "parameter-selection",
  "cosmology",
  "thermodynamics",
  "time",
  "observers",
  "global-closure",
] as const;

export const stageRail = [
  { id: "omega", label: "Ω", sublabel: "Source" },
  { id: "tier0-law", label: "T0", sublabel: "Law" },
  { id: "aperture", label: "T0.5", sublabel: "Aperture" },
  { id: "canonical-field", label: "Field", sublabel: "CSCF" },
  { id: "global-closure", label: "T1", sublabel: "Readout" },
] as const;

function certifyAtlasTopology() {
  const ids = new Set(atlasNodes.map((node) => node.id));
  if (ids.size !== atlasNodes.length) throw new Error("Reality Atlas contains duplicate node identifiers.");
  if (!atlasNodes.some((node) => node.lod === 4)) {
    throw new Error("Reality Atlas must expose at least one LOD-4 numerical certificate node.");
  }

  const requireNode = (id: string, owner: string) => {
    if (!ids.has(id)) throw new Error(`Reality Atlas ${owner} references unknown node “${id}”.`);
  };

  for (const node of atlasNodes) {
    node.upstream.forEach((id) => requireNode(id, `${node.id} upstream interface`));
    node.downstream.forEach((id) => requireNode(id, `${node.id} downstream interface`));
    if (node.position.some((coordinate) => !Number.isFinite(coordinate))) {
      throw new Error(`Reality Atlas node “${node.id}” has a non-finite position.`);
    }
    for (const [field, value] of Object.entries({
      stateVariables: node.stateVariables,
      boundaryClass: node.boundaryClass,
      branchDomain: node.branchDomain,
      approximationOrder: node.approximationOrder,
      errorNorm: node.errorNorm,
    })) {
      if (!value.trim()) throw new Error(`Reality Atlas node “${node.id}” has an empty ${field} contract.`);
    }
    const localEquationTags = new Set<string>();
    for (const equation of node.equations) {
      if (!equation.tag.trim() || !equation.tex.trim() || !equation.interpretation.trim()) {
        throw new Error(`Reality Atlas node “${node.id}” contains an incomplete equation citation.`);
      }
      if (localEquationTags.has(equation.tag)) {
        throw new Error(`Reality Atlas node “${node.id}” repeats equation citation “${equation.tag}”.`);
      }
      localEquationTags.add(equation.tag);
    }
    node.recovery.forEach((id) => requireNode(id, `${node.id} recovery interface`));
  }
  const edgeIds = new Set<string>();
  for (const edgeItem of atlasEdges) {
    requireNode(edgeItem.from, `${edgeItem.id} domain`);
    requireNode(edgeItem.to, `${edgeItem.id} codomain`);
    if (edgeIds.has(edgeItem.id)) throw new Error(`Reality Atlas repeats edge “${edgeItem.id}”.`);
    edgeIds.add(edgeItem.id);
    if (!edgeItem.map.trim() || !edgeItem.linearization.trim() || !edgeItem.adjoint.trim()
      || !edgeItem.validityDomain.trim() || !edgeItem.verifier.trim() || !edgeItem.errorModel.trim()) {
      throw new Error(`Reality Atlas edge “${edgeItem.id}” has an incomplete executable-map contract.`);
    }
  }
  for (const route of observableRoutes) {
    route.nodeIds.forEach((id) => requireNode(id, `${route.id} trace`));
    if (route.nodeIds[0] !== "omega") throw new Error(`Reality Atlas trace “${route.id}” must begin at Ω.`);
    const terminal = atlasNodeMap.get(route.nodeIds[route.nodeIds.length - 1]);
    if (terminal?.kind !== "observable") {
      throw new Error(`Reality Atlas trace “${route.id}” must terminate at an observable node.`);
    }
  }
  guidedTour.forEach((id) => requireNode(id, "guided tour"));
  stageRail.forEach((stage) => requireNode(stage.id, "stage rail"));
}

certifyAtlasTopology();

export const atlasStats = {
  chapters: 12,
  equationTags: 1133,
  sectors: 10,
  primaryStages: 5,
  representedNodes: atlasNodes.length,
  representedEdges: atlasEdges.length,
};

export function getAtlasNode(id: string): AtlasNode {
  return atlasNodeMap.get(id) ?? atlasNodeMap.get("omega")!;
}

export function getConnectedNodes(id: string): AtlasNode[] {
  const connected = new Set<string>();
  for (const edgeItem of atlasEdges) {
    if (edgeItem.from === id) connected.add(edgeItem.to);
    if (edgeItem.to === id) connected.add(edgeItem.from);
  }
  return [...connected]
    .map((nodeId) => atlasNodeMap.get(nodeId))
    .filter((node): node is AtlasNode => Boolean(node));
}

export function searchAtlas(query: string): AtlasNode[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  return atlasNodes
    .map((node) => {
      const text = [
        node.label,
        node.shortLabel,
        node.eyebrow,
        node.summary,
        node.description,
        node.chapter,
        node.section,
        node.mathematicalType,
        node.stateVariables,
        node.boundaryClass,
        node.branchDomain,
        node.approximationOrder,
        node.errorNorm,
        ...node.recovery,
        ...node.equations.flatMap((item) => [item.tag, item.title, item.interpretation]),
      ]
        .join(" ")
        .toLowerCase();
      const score =
        node.label.toLowerCase().includes(normalized) ? 4 :
        node.shortLabel.toLowerCase().includes(normalized) ? 3 :
        text.includes(normalized) ? 1 : 0;
      return { node, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.node.lod - b.node.lod)
    .slice(0, 12)
    .map((item) => item.node);
}
