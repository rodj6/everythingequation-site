// src/app/tier-1/page.tsx

export const metadata = {
  title: "Tier-1 Dynamical Realization: The Coupled Dirac–Λ System",
  description:
    "Tier-1 dynamical realization of the Tier-0 programme via the Coupled Dirac–Λ System.",
};

function MathBlock({ children }: { children: string }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
        {children}
      </pre>
    </div>
  );
}

export default function Tier1Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <article className="prose prose-zinc max-w-none dark:prose-invert">
        <h1>Tier-1 Dynamical Realization: The Coupled Dirac–Λ System</h1>

        <p>
          Tier-0 says what a law must be: a fixed point of closure, collapse, and
          boundary normalization. It selects the admissible gauge group, the
          generation count, the dimensionality of spacetime, and the structural
          inevitability of the dissipative channel — all before dynamics is
          written down.
        </p>

        <p>
          But selection is not realization. A closure criterion can tell you{" "}
          <em>which</em> laws are admissible without telling you <em>how</em>{" "}
          those laws act on fields, produce masses, or generate the specific
          physical content we observe. The question that every visitor to this
          site eventually asks is: where are the equations? Where is the
          dynamical system that turns the Everything Equation into physics you
          can compute with?
        </p>

        <p>This page answers that question.</p>

        <p>
          The Coupled Dirac–Λ System is the Tier-1 dynamical realization of the
          Tier-0 programme. It is a constrained operator system consisting of a
          Dirac-type carrier encoding geometry, gauge fields, and fermions,
          coupled through a scale-by-scale capacity inequality to an independent
          irreversible entropy channel. A single ultraviolet anchor fixes the
          unique normalization. Constrained stationarity is enforced through a
          Karush–Kuhn–Tucker (KKT) framework with a nonnegative measure-valued
          dual variable.
        </p>

        <p>
          The low-energy expansion recovers Einstein gravity, Yang–Mills gauge
          theory, and fermionic dynamics — the standard content of fundamental
          physics. Beyond this, the coupled system forces three nontrivial
          structural consequences from the same equations, without additional
          input: the Born rule exponent <em>p</em> = 2, the structural exclusion
          of the strong CP phase θ = 0 (no axion required), and a quantitative
          measurement dissipation bound with 1/T decoherence suppression at
          large scales. KKT saturation determines all fermion masses as
          structural outputs of the constraint architecture.
        </p>

        <p>
          The system is falsifiable. It is falsified if the UV anchor is
          unsolvable, if the capacity inequality fails, if the IR admissibility
          bound is exceeded, or if the derived mass predictions disagree with
          observation.
        </p>

        <hr />

        <h2>1. The Problem Tier-1 Solves</h2>

        <p>
          Every unification programme faces the same structural gap. You can
          write down a framework — strings, loops, noncommutative geometry,
          asymptotic safety — and show that it is <em>compatible</em> with the
          Standard Model. Compatibility is cheap. The hard question is: does the
          framework <em>determine</em> the Standard Model? Does it fix the
          parameters, or does it leave them as inputs?
        </p>

        <p>
          The Standard Model has roughly 19 free parameters: six quark masses,
          three lepton masses, three CKM mixing angles plus one CP phase, three
          gauge couplings, the Higgs mass, the Higgs vacuum expectation value,
          and the QCD vacuum angle θ. Every existing unification programme
          either inputs these parameters by hand or generates a landscape of
          possibilities so vast that prediction becomes meaningless.
        </p>

        <p>
          Tier-1 is designed to close this gap. Not by adding more structure,
          but by coupling the standard spectral-action carrier to an independent
          irreversible channel through a capacity inequality, and then showing
          that the resulting constrained system has no remaining continuous
          freedom.
        </p>

        <hr />

        <h2>2. The Field Content</h2>

        <p>
          The system lives on a compact oriented Euclidean spin 4-manifold{" "}
          <em>(M_E, g_E)</em> with a Hermitian vector bundle{" "}
          <em>E → M_E</em> carrying a unitary connection <em>A</em>. The field
          content is:
        </p>

        <MathBlock>
          {`$$
\\mathcal{D}_E = \\gamma_E^\\mu \\nabla_\\mu
$$`}
        </MathBlock>

        <p>
          The Dirac operator, determined by the metric <em>g_E</em> and the
          connection <em>A</em>. It is essentially selfadjoint with compact
          resolvent and discrete spectrum. The Weitzenböck identity{" "}
          <em>\\mathcal{D}_E^2 = -\\nabla^*\\nabla + \\mathbf{E}</em> ensures
          that <em>\\mathcal{D}_E^2</em> encodes both geometric curvature
          invariants and Yang–Mills field strengths.
        </p>

        <MathBlock>
          {`$$
K = c_M K_{M_{\\mathrm{rec}}} \\geq 0
$$`}
        </MathBlock>

        <p>
          The dissipative generator, constructed canonically from the Hessian of
          a record-sector monotone (relative entropy at a faithful reference
          state) via the Friedrichs representation theorem. The decomposition{" "}
          <em>H_* = H_0 \\oplus H_{\\mathrm{diss}}</em> separates stationary from
          dissipative directions.
        </p>

        <MathBlock>
          {`$$
c_M > 0
$$`}
        </MathBlock>

        <p>
          The sole continuous normalization parameter — fixed by the UV anchor,
          not chosen by hand.
        </p>

        <MathBlock>
          {`$$
\\mu \\geq 0
$$`}
        </MathBlock>

        <p>
          The KKT dual measure on{" "}
          <em>[T_{\\mathrm{UV}}, T_{\\mathrm{IR}}]</em>, enforcing the capacity
          constraint through complementary slackness.
        </p>

        <hr />

        <h2>3. The Eight Field Equations</h2>

        <p>
          The complete coupled system consists of eight equations, with all
          conventions fixed globally. This is the Tier-1 version of{" "}
          <em>\\mathcal{L} = \\Omega,\\Delta,\\partial(\\mathcal{L})</em>: a
          concrete, computable, falsifiable dynamical system.
        </p>

        <h3>(E1) Spectral action</h3>

        <MathBlock>
          {`$$
\\mathcal{S}[g_E, A, \\psi] := \\mathrm{Tr}_*\\!\\big(f(\\mathcal{D}_E^2/\\Lambda^2)\\big) + \\langle \\psi, \\mathcal{D}_E \\psi \\rangle
$$`}
        </MathBlock>

        <p>
          The spectral action encodes all bosonic and fermionic dynamics in the
          spectrum of <em>\\mathcal{D}_E</em>. The cutoff function <em>f</em>{" "}
          and trace prescription <em>\\mathrm{Tr}_*</em> are fixed once globally.
          This is the standard Chamseddine–Connes spectral action —
          well-established, heavily studied, and known to recover the correct
          low-energy content.
        </p>

        <h3>(E2) Fejér operator and Λ-budget</h3>

        <MathBlock>
          {`$$
\\Lambda_T(K) := \\frac{1 - e^{-TK}}{TK}, \\qquad D_T(K) := -\\log\\det_*\\!\\big(\\Lambda_T(K)\\big|_{H_{\\mathrm{diss}}}\\big)
$$`}
        </MathBlock>

        <p>
          The Fejér operator <em>\\Lambda_T(K)</em> is the time-averaged
          contraction semigroup — the canonical object encoding how an
          irreversible generator dissipates structure at proper-time scale{" "}
          <em>T</em>. The Λ-budget <em>D_T(K)</em> measures the total dissipative
          capacity available at that scale. The mixed determinant scheme{" "}
          <em>\\det_*</em> (Fredholm numerator, zeta-regularised denominator) is
          fixed globally.
        </p>

        <p>
          In finite dimensions with eigenvalues{" "}
          <em>{"{\\kappa_j}"}</em> of <em>K</em>:{" "}
          <em>D_T(K) = \\sum_j q(T\\kappa_j)</em> where{" "}
          <em>q(x) = -\\log((1-e^{-x})/x)</em>.
        </p>

        <h3>(E3) Dirac-side record budget</h3>

        <MathBlock>
          {`$$
S_\\Omega(\\mathcal{D}_E; T) := \\mathrm{Tr}'\\!\\Big(g(T\\mathcal{D}_E^2),\\big(-\\log \\Lambda_T(\\mathcal{D}_E^2)\\big)\\Big)
$$`}
        </MathBlock>

        <p>
          The Dirac-side entropy functional: how much spectral information the
          Dirac carrier can encode at scale <em>T</em>, weighted by the globally
          fixed record filter <em>g</em>. The prime on the trace excludes the
          kernel of <em>\\mathcal{D}_E</em>.
        </p>

        <h3>(E4) Capacity inequality</h3>

        <MathBlock>
          {`$$
S_\\Omega(\\mathcal{D}_E; T) \\leq D_T(K) \\qquad \\forall\\, T \\in [T_{\\mathrm{UV}}, T_{\\mathrm{IR}}]
$$`}
        </MathBlock>

        <blockquote>
          <p>
            <strong>
              This is the equation that makes the system more than a
              spectral-action model.
            </strong>
          </p>
        </blockquote>

        <p>
          The capacity inequality couples the reversible Dirac channel to the
          irreversible Λ channel at every proper-time scale. It says: the
          spectral information that the Dirac carrier wants to encode cannot
          exceed the dissipative budget available to anchor it. Flow cannot
          exceed Anchor. This is the Tier-0 principle{" "}
          <em>S_\\Omega \\leq D_T</em> made concrete.
        </p>

        <h3>(E5) UV anchor</h3>

        <MathBlock>
          {`$$
S_\\Omega(\\mathcal{D}_E; T_{\\mathrm{UV}}) = D_{T_{\\mathrm{UV}}}(c_M K_{M_{\\mathrm{rec}}})
$$`}
        </MathBlock>

        <p>
          The capacity inequality is <em>saturated</em> at the UV scale. This
          single equation determines the unique normalization <em>c_M</em>.
          There is no second parameter. There is no knob.
        </p>

        <h3>(E6) IR admissibility</h3>

        <MathBlock>
          {`$$
\\big|S_\\Omega(\\mathcal{D}_E; T_{\\mathrm{IR}}) - D_{T_{\\mathrm{IR}}}(K)\\big| \\leq B_{\\max}
$$`}
        </MathBlock>

        <p>
          The system must remain within a bounded admissibility window at the IR
          scale. <em>B_{\\max}</em> is a deterministic output of the fixed
          scheme, not a tuning parameter.
        </p>

        <h3>(E7) KKT Lagrangian</h3>

        <MathBlock>
          {`$$
\\mathcal{L}[g_E, A, \\psi;\\, \\mu] := \\mathcal{S}[g_E, A, \\psi] + \\int_{[T_{\\mathrm{UV}}, T_{\\mathrm{IR}}]}\\!\\big(S_\\Omega(\\mathcal{D}_E; T) - D_T(K)\\big)\\,d\\mu(T)
$$`}
        </MathBlock>

        <p>
          with <em>\\mu \\geq 0</em>, complementary slackness{" "}
          <em>\\int(D_T - S_\\Omega)\\,d\\mu = 0</em>, and stationarity{" "}
          <em>\\delta_{(g_E,A,\\psi)}\\mathcal{L} = 0</em>. The dual measure{" "}
          <em>\\mu</em> is not chosen — it is forced by the constraint
          architecture.
        </p>

        <h3>(E8) Saturation equations (mass determination)</h3>

        <p>
          At the <em>m = N_{\\mathrm{mass}}</em> saturated scales{" "}
          <em>T_1 &lt; \\cdots &lt; T_m</em> where{" "}
          <em>S_\\Omega = D_T</em>:
        </p>

        <MathBlock>
          {`$$
\\Phi_k(y) := S_\\Omega(\\mathcal{D}_E(y); T_k) - D_{T_k}(K) = 0, \\qquad k = 1, \\ldots, N_{\\mathrm{mass}}
$$`}
        </MathBlock>

        <p>
          These are the mass equations. Each saturation point is a scale where
          the reversible and irreversible channels are in exact balance — where
          Flow becomes Anchor. Each such locking is a mass.
        </p>

        <hr />

        <h2>4. Low-Energy Recovery: GR + Yang–Mills + Fermions</h2>

        <p>The heat-kernel expansion of the spectral action yields:</p>

        <MathBlock>
          {`$$
\\mathcal{S}[g_E, A, \\psi] \\approx \\int_{M_E}\\!\\sqrt{g_E}\\,\\Big(\\alpha_0\\Lambda^4 + \\alpha_2\\Lambda^2 R(g_E) + \\alpha_4\\,\\mathrm{tr}(F_{\\mu\\nu}F^{\\mu\\nu}) + \\cdots\\Big) + \\int_{M_E}\\!\\sqrt{g_E}\\,\\bar\\psi\\,\\mathcal{D}_E\\psi
$$`}
        </MathBlock>

        <p>
          The coefficients <em>\\alpha_0</em> (cosmological constant),{" "}
          <em>\\alpha_2</em> (Einstein–Hilbert), and <em>\\alpha_4</em>{" "}
          (Yang–Mills) are determined by the fixed cutoff moments and trace
          normalization. This is the standard Chamseddine–Connes result.
          Higher-curvature terms (<em>R^2</em>, <em>R_{\\mu\\nu}R^{\\mu\\nu}</em>,
          Gauss–Bonnet) appear at the next order.
        </p>

        <p>
          What the spectral action alone does <em>not</em> do is fix the Yukawa
          couplings, determine particle masses, or exclude the strong CP angle.
          Those require the Λ-channel coupling — equations (E4)–(E8).
        </p>

        <hr />

        <h2>5. Why There Is No Tuning</h2>

        <p>
          This is the structural result that separates the Tier-1 system from
          every other unification candidate. It deserves a careful statement.
        </p>

        <p>
          Because the dissipative generator enters as{" "}
          <em>(-\\log\\det_*)</em> of a positive operator and scaling{" "}
          <em>K \\mapsto cK</em> scales its eigenvalues monotonically, the map
        </p>

        <MathBlock>
          {`$$
c \\longmapsto D_T(cK)
$$`}
        </MathBlock>

        <p>
          is continuous and strictly increasing on <em>(0, \\infty)</em>,
          provided the dissipative generator preserves positivity under scaling.
          This monotonicity is structural — a consequence of operator positivity
          and the logarithmic determinant — not an arbitrary assumption.
        </p>

        <blockquote>
          <p>
            <strong>Theorem (No continuous freedom after UV anchoring).</strong>{" "}
            Fix the Tier-1 structure and the background data. (1) The Dirac
            carrier <em>\\mathcal{D}_E</em> is fixed on the background{" "}
            <em>(M, g_E, A, \\psi)</em>. (2) The entropy kernel <em>g</em>, the
            functionals <em>S_\\Omega</em> and <em>D_T</em>, and the determinant
            convention <em>\\det_*</em> are all fixed globally. (3) The capacity
            inequality <em>S_\\Omega(\\mathcal{D}_E; T) \\leq D_T(K)</em> holds
            for all <em>T \\in [T_{\\mathrm{UV}}, T_{\\mathrm{IR}}]</em>. (4) The
            UV anchor{" "}
            <em>
              S_\\Omega(\\mathcal{D}_E; T_{\\mathrm{UV}}) =
              D_{T_{\\mathrm{UV}}}(c_M K_{M_{\\mathrm{rec}}})
            </em>{" "}
            is imposed. Then no continuous per-background tuning parameter
            survives: if a Tier-1 realization exists on that background, it is
            uniquely normalized.
          </p>
        </blockquote>

        <p>
          <strong>Proof.</strong> Since <em>\\mathcal{D}_E</em> and the Tier-1
          kernel choices are fixed, the value{" "}
          <em>S_* := S_\\Omega(\\mathcal{D}_E; T_{\\mathrm{UV}})</em> is a fixed
          scalar. Define the function{" "}
          <em>F(c) := D_{T_{\\mathrm{UV}}}(c\\,K_{M_{\\mathrm{rec}}})</em>. By
          structural monotonicity, <em>F</em> is strictly increasing on{" "}
          <em>(0, \\infty)</em>. The anchor equation <em>F(c_M) = S_*</em>{" "}
          therefore admits at most one solution <em>c_M &gt; 0</em>. The UV
          anchor fixes the only possible normalization scalar, and no continuous
          freedom remains. <em>□</em>
        </p>

        <blockquote>
          <p>
            <strong>Corollary (No Hidden Knob).</strong> For fixed background
            data and fixed Tier-1 structure, the admissible set of normalization
            scalars is either empty or a singleton:{" "}
            <em>{"|{c_M > 0 : (E5) holds}| ≤ 1"}</em>. The Tier-1 realization is
            either <em>falsified</em> (no solution) or{" "}
            <em>uniquely normalized</em> (exactly one solution). It is never an
            adjustable parameter.
          </p>
        </blockquote>

        <p>
          In particular, Tier-1 induces a normalization rule: Background{" "}
          <em>\\longmapsto c_M</em>, which is either undefined (package falsified
          on that background) or uniquely defined. What would count as illicit
          tuning? Multiplying <em>\\mathcal{D}_E</em> by an arbitrary
          background-dependent constant, rescaling the entropy kernel{" "}
          <em>g</em> per background, or altering the determinant convention{" "}
          <em>\\det_*</em> per background. None of these are permitted: the
          carrier, kernels, and determinant prescription are fixed globally, and
          the UV anchor then fixes the only remaining scalar normalization.
        </p>

        <p>
          This is why the system has zero free parameters in the conventional
          sense. The 19 Standard Model parameters are not inputs — they are
          structural outputs of the saturation equations (E8), uniquely
          determined once the UV anchor (E5) sets the normalization.
        </p>

        <hr />

        <h2>6. Mass Determination: How KKT Saturation Produces Masses</h2>

        <p>
          The mass determination mechanism is the central dynamical result. It
          works through the KKT dual variable <em>\\mu</em>.
        </p>

        <p>
          By complementary slackness, <em>\\mu</em> is supported only where the
          capacity inequality saturates: <em>S_\\Omega = D_T</em>. These
          saturation points are the scales at which the reversible Dirac channel
          and the irreversible Λ channel are in exact balance.
        </p>

        <p>
          <strong>Finite active-scale reduction.</strong> By Carathéodory&apos;s
          theorem for convex cones, the KKT measure can be replaced by an atomic
          measure <em>\\widetilde{\\mu} = \\sum_{k=1}^m \\alpha_k \\delta_{T_k}</em>{" "}
          with at most <em>m \\leq N_{\\mathrm{mass}}</em> atoms satisfying the
          same Yukawa-direction stationarity. If the rank condition holds (the
          gradient vectors <em>\\nabla_y S_\\Omega(T_k)</em> span{" "}
          <em>\\mathbb{R}^{N_{\\mathrm{mass}}}</em>), then{" "}
          <em>m = N_{\\mathrm{mass}}</em> exactly.
        </p>

        <p>
          <strong>Jacobian analysis.</strong> The saturation map{" "}
          <em>{"\\Phi: \\mathcal{M}_Y \\to \\mathbb{R}^{N_{\\mathrm{mass}}}"}</em>{" "}
          given by <em>\\Phi_k(y) = S_\\Omega(\\mathcal{D}_E(y); T_k) - D_{T_k}(K)</em>{" "}
          has Jacobian entries involving the saturation kernel{" "}
          <em>h(u) = g(u), q(u)</em>, where{" "}
          <em>q(x) = -\\log((1-e^{-x})/x)</em> is the entropy kernel. The entropy
          kernel is strictly positive and strictly increasing on{" "}
          <em>(0, \\infty)</em>, with asymptotics <em>q(x) \\sim x/2</em> as{" "}
          <em>x \\downarrow 0</em> and <em>q(x) \\sim \\log x</em> as{" "}
          <em>x \\to \\infty</em>.
        </p>

        <p>
          <strong>Local uniqueness.</strong> If the Jacobian{" "}
          <em>D\\Phi(y^*)</em> is nondegenerate — which is structurally favoured
          by the strict monotonicity of <em>q</em> and the distinct saturation
          scales <em>T_k</em> — then the implicit function theorem gives local
          uniqueness of the Yukawa parameter vector <em>y^*</em>.
        </p>

        <p>The chain of determination is:</p>

        <ol>
          <li>
            <strong>UV anchor</strong> → <em>c_M</em> (unique, by the No Hidden
            Knob theorem)
          </li>
          <li>
            <strong>Carathéodory + rank condition</strong> →{" "}
            <em>{"{T_1, \\ldots, T_{N_{\\mathrm{mass}}}}"}</em> (saturation
            scales)
          </li>
          <li>
            <strong>IFT + Jacobian nondegeneracy</strong> →{" "}
            <em>
              y^* = (y_1^*, \\ldots, y_{N_{\\mathrm{mass}}}^*)
            </em>{" "}
            (locally unique)
          </li>
          <li>
            <strong>Therefore:</strong> all masses and couplings are structural
            outputs
          </li>
        </ol>

        <hr />

        <h2>7. Three Structural Consequences</h2>

        <p>
          The coupled system forces three physical results that follow from
          equations (E1)–(E8) without additional input. Each is a theorem, not a
          postulate.
        </p>

        <h3>7.1 Born Rule Rigidity: Why p = 2</h3>

        <p>
          The Born rule — that measurement probabilities are given by{" "}
          <em>P_k = |⟨ψ|φ_k⟩|^2</em> — is usually taken as an axiom of quantum
          mechanics. In the Tier-1 system, it is a theorem.
        </p>

        <p>
          The argument proceeds through two independent routes that converge on
          the same answer:
        </p>

        <p>
          <strong>Curvature rigidity.</strong> Equip the Yukawa moduli space with
          the metric induced by the Schatten <em>p</em>-norm. For <em>p &gt; 2</em>, the
          Schatten geometry has dominantly positive sectional curvature; by
          Bishop–Gromov comparison, volume contraction forces{" "}
          <em>|\\det D\\Phi| \\geq 1</em>, violating the contractivity needed for
          a stable fixed point. For <em>p &lt; 2</em>, dominantly negative curvature
          inflates the effective spectral radius beyond 1, destroying the
          spectral gap. At <em>p = 2</em>, the Hilbert–Schmidt geometry is flat:{" "}
          <em>{"\\mathrm{Ric}(g_2) = 0"}</em>. No curvature obstruction exists.
        </p>

        <p>
          <strong>Modular flow identification.</strong> The linearised saturation
          dynamics is isomorphic to the Tomita–Takesaki modular flow on the GNS
          Hilbert space if and only if <em>p = 2</em>, since the GNS inner
          product{" "}
          <em>
            {"\\langle A, B\\rangle_\\omega = \\mathrm{Tr}(\\rho A^*B)"}
          </em>{" "}
          is the Hilbert–Schmidt inner product.
        </p>

        <p>
          The conclusion: <em>p = 2</em> is the unique exponent for which
          saturation contractivity, spectral stability, and modular flow
          identification all hold simultaneously. The Born rule is a structural
          consequence of the saturation geometry.
        </p>

        <h3>7.2 Strong CP Exclusion: Why θ = 0 Without an Axion</h3>

        <p>
          The strong CP problem — why the QCD vacuum angle θ is experimentally
          consistent with zero despite having no known reason to be — has driven
          decades of axion searches. In the Tier-1 system, θ = 0 is forced
          structurally.
        </p>

        <p>Three independent mechanisms converge:</p>

        <p>
          The spectral action{" "}
          <em>{"\\mathrm{Tr}_*(f(\\mathcal{D}_E^2/\\Lambda^2))"}</em> is CP-even
          (since <em>{"C\\mathcal{D}_E^2 C^{-1} = \\mathcal{D}_E^2"}</em> on a real
          spectral triple). A CP-even functional cannot generate the CP-odd
          topological term{" "}
          <em>
            {"\\theta\\int\\mathrm{tr}(F\\wedge F)/(32\\pi^2)"}
          </em>
          . The θ-term is not produced by the dynamics.
        </p>

        <p>
          Within any single topological sector, the topological charge{" "}
          <em>Q_{"\\mathrm{top}"} \\in \\mathbb{Z}</em> is a constant
          (Chern–Weil), and a θ-term added externally is a constant imaginary
          shift that does not affect functional derivatives, KKT stationarity,
          or complementary slackness. It is dynamically inert.
        </p>

        <p>
          Most decisively: for θ ≠ 0, the Euclidean gauge weight{" "}
          <em>{"e^{-S_{\\mathrm{YM}} - i\\theta Q_{\\mathrm{top}}}"}</em> is
          complex-valued. Osterwalder–Schrader reflection positivity — which
          requires a positive Euclidean measure to construct a positive-norm
          Hilbert space — is obstructed. Without OS positivity, there is no
          physical quantum theory: no positive-definite inner product, no
          unitarity, no probabilities.
        </p>

        <MathBlock>
          {`$$
\\theta = 0 \\quad\\text{(structural, not fine-tuned; no axion required)}
$$`}
        </MathBlock>

        <p>
          CKM CP violation remains compatible: the complex Yukawa couplings enter
          through the fermionic action{" "}
          <em>{"\\langle\\psi, \\mathcal{D}_E\\psi\\rangle"}</em>, which is real
          by selfadjointness. The Euclidean measure remains positive. The
          framework admits weak CP violation (needed for baryogenesis) while
          excluding strong CP violation.
        </p>

        <h3>7.3 Measurement Dissipation Bound</h3>

        <p>
          At each saturation scale <em>T_*</em> (where{" "}
          <em>S_\\Omega = D_{T_*}</em>), the capacity inequality forces a
          quantitative lower bound on the irreversible channel activation. The
          marginal dissipative cost{" "}
          <em>{"P(T) = dD_T/dT"}</em> satisfies:
        </p>

        <MathBlock>
          {`$$
P(T) = \\sum_{j=1}^{N_{\\mathrm{diss}}}\\bigg[\\frac{1}{T} - \\frac{\\kappa_j}{e^{T\\kappa_j}-1}\\bigg] \\sim \\begin{cases}
\\frac{1}{2}\\sum_j \\kappa_j & (T \\to 0^+) \\\\
N_{\\mathrm{diss}}/T & (T \\to \\infty)
\\end{cases}
$$`}
        </MathBlock>

        <p>
          The crossover from constant to 1/T behaviour occurs at{" "}
          <em>{"T_{\\mathrm{cross}} \\sim 1/\\kappa_{\\mathrm{typ}}"}.</em> This
          implies a decoherence rate bound:
        </p>

        <MathBlock>
          {`$$
\\Gamma_{\\mathrm{dec}}(T) \\leq \\frac{N_{\\mathrm{diss}}}{T} + O(e^{-T\\kappa_1})
$$`}
        </MathBlock>

        <p>
          The 1/T suppression of decoherence at large scales is absent in
          standard decoherence theory. It is a testable prediction. The bound is
          structurally distinct from Landauer&apos;s principle: Landauer bounds
          energy per bit; the capacity inequality bounds total bit count at
          scale <em>T</em>.
        </p>

        <hr />

        <h2>8. The Spectral Envelope</h2>

        <p>
          The capacity inequality has a direct spectral consequence. Fix the
          effective band <em>[a, b]</em> where the record filter satisfies{" "}
          <em>g \\geq g_0 &gt; 0</em>. Then the number of Dirac eigenvalues falling
          in that band at scale <em>T</em> is bounded:
        </p>

        <MathBlock>
          {`$$
N_{[a,b]}(T) := \\#\\{n : T\\lambda_n \\in [a,b]\\} \\leq \\frac{D_{T_{\\mathrm{IR}}}(K)}{g_0\\,\\min_{x \\in [a,b]} q(x)}
$$`}
        </MathBlock>

        <p>
          This is a non-tunable spectral envelope: the total spectral complexity
          of the Dirac carrier is bounded by the irreversible budget. The bound
          depends only on the fixed global scheme and the uniquely determined{" "}
          <em>c_M</em>. It is not a choice — it is a consequence.
        </p>

        <p>
          Under heat-kernel comparability, this yields an upper bound on the
          cosmological term <em>a_0(\\mathcal{D}_E^2)</em>, determined solely by
          the UV anchor normalization.
        </p>

        <hr />

        <h2>9. Constrained Equations of Motion</h2>

        <p>KKT stationarity yields the constrained Euler–Lagrange system:</p>

        <MathBlock>
          {`$$
\\frac{\\delta \\mathcal{S}}{\\delta g_E} + \\int_{[T_{\\mathrm{UV}}, T_{\\mathrm{IR}}]}\\frac{\\delta S_\\Omega}{\\delta g_E}\\,d\\mu(T) = 0 \\qquad\\text{(Einstein + spectral backreaction)}
$$`}
        </MathBlock>

        <MathBlock>
          {`$$
\\frac{\\delta \\mathcal{S}}{\\delta A} + \\int_{[T_{\\mathrm{UV}}, T_{\\mathrm{IR}}]}\\frac{\\delta S_\\Omega}{\\delta A}\\,d\\mu(T) = 0 \\qquad\\text{(Yang–Mills + constraint current)}
$$`}
        </MathBlock>

        <MathBlock>
          {`$$
\\mathcal{D}_E\\psi = 0 \\qquad\\text{(Dirac equation)}
$$`}
        </MathBlock>

        <p>
          The dual measure <em>\\mu</em> is supported on the saturation set where{" "}
          <em>S_\\Omega = D_T</em>. At unsaturated scales, the constraint is
          slack and contributes nothing to the equations of motion. The system
          reduces to the familiar Einstein, Yang–Mills, and Dirac equations —
          plus spectral backreaction from the Λ-channel at the scales where it
          matters.
        </p>

        <hr />

        <h2>10. The Reversible/Irreversible Decomposition</h2>

        <p>
          The same curvature datum that generates the dissipative generator{" "}
          <em>K</em> also supports a bounded selfadjoint operator{" "}
          <em>C = h(A)</em> generating a unitary group{" "}
          <em>{"U(t) = e^{-itC}"}</em>:
        </p>

        <MathBlock>
          {`$$
\\text{curvature datum} \\Longrightarrow \\begin{cases}
K \\geq 0 \\Rightarrow \\Lambda_T,\\, D_T & \\text{(irreversible)} \\\\
C = C^* \\Rightarrow e^{-itC} & \\text{(reversible)}
\\end{cases}
$$`}
        </MathBlock>

        <p>
          This reversible/irreversible decomposition is not an add-on. It is the
          deepest structural feature of the Tier-1 system. The capacity
          inequality couples the two channels: the reversible Dirac carrier
          (coherent, unitary, wave-like) is constrained by the irreversible Λ
          budget (dissipative, contractive, record-bearing). Every mass, every
          measurement, every irreversible process in the physical world lives at
          a saturation point where these two channels meet.
        </p>

        <p>
          This is what Tier-0 always predicted: the triad <em>∂</em>,{" "}
          <em>Δ</em>, <em>Ω</em> separates structure into boundary-normalised,
          collapse-persistent, and closure-completed sectors. The Tier-1 system
          is the concrete instantiation. The Dirac carrier is the Ω-sector
          (complete, reversible, spectral). The Λ channel is the Δ-sector
          (irreversible, contractive, record-bearing). The capacity inequality
          is the ∂-normalised interface between them.
        </p>

        <hr />

        <h2>11. Falsifiability</h2>

        <p>
          The system is falsified if, for every configuration{" "}
          <em>(g_E, A, \\psi)</em> matching established low-energy observables,
          at least one of the following holds:
        </p>

        <p>
          <strong>(i) Anchor failure:</strong> No <em>c_M &gt; 0</em> solves the UV
          anchor equation.
        </p>

        <p>
          <strong>(ii) Capacity violation:</strong> There exists a scale{" "}
          <em>T</em> where <em>S_\\Omega(\\mathcal{D}_E; T) &gt; D_T(K)</em>.
        </p>

        <p>
          <strong>(iii) IR failure:</strong> The IR admissibility bound{" "}
          <em>B_{\\max}</em> is exceeded.
        </p>

        <p>
          <strong>(iv) Mass prediction failure:</strong> The numerically computed
          masses from the saturation equations disagree with observed Standard
          Model masses beyond experimental uncertainties.
        </p>

        <p>
          Additionally: if decoherence at scales <em>T &gt; T_{\\mathrm{crit}}</em>{" "}
          proceeds at the full environmental rate without the predicted 1/T
          suppression, the framework is falsified. If a nonzero neutron electric
          dipole moment is measured implying <em>|θ| &gt; 0</em>, the framework is
          falsified.
        </p>

        <p>
          All global conventions are part of the model definition and are not
          adjustable. The system says what it says, and observation either
          confirms or kills it.
        </p>

        <hr />

        <h2>12. What This Changes</h2>

        <p>
          The Standard Model has 19 free parameters. String theory has{" "}
          <em>10^{"{500}"}</em> possible vacua. Loop quantum gravity does not
          address the flavour sector. Asymptotic safety constrains the
          gravitational coupling but not the Yukawa matrices. Noncommutative
          geometry (Chamseddine–Connes) recovers the Standard Model action but
          leaves the Yukawa couplings as inputs.
        </p>

        <p>
          The Tier-1 system adds a single structural ingredient to the
          Chamseddine–Connes programme: the Λ-channel capacity inequality with
          UV anchoring. This one addition changes the categorical status of the
          theory:
        </p>

        <p>
          Without the Λ-channel: a framework <em>compatible with</em> the
          Standard Model. Yukawa couplings are free parameters. Same category as
          every other unification programme since 1973.
        </p>

        <p>
          With the Λ-channel: a framework <em>generating</em> the Standard Model
          parameters from structural constraints. UV anchor fixes normalization.
          Saturation equations determine masses. Born rule derived. Strong CP
          excluded. Zero continuous freedom.
        </p>

        <p>
          This is the operational meaning of &quot;Theory of Everything&quot;:
          the Standard Model parameters are derivable, not inputted. The Tier-1
          system is either the theory that accomplishes this, or it is
          falsified. There is no middle ground.
        </p>

        <hr />

        <h2>13. Relation to the Tier-0 Programme</h2>

        <p>
          Tier-0 provides selection: <em>D = 4</em>,{" "}
          <em>SU(3) × SU(2) × U(1)</em>, <em>N_g = 3</em>, anomaly freedom, the
          Yukawa no-go theorem (exact coupling values are contingent, not
          law-level). These are imported as structural hypotheses.
        </p>

        <p>
          Tier-1 provides realization: the eight field equations (E1)–(E8), the
          UV anchor, the capacity inequality, the KKT framework, the saturation
          equations, and the derived consequences (Born rule, θ = 0, measurement
          dissipation bound).
        </p>

        <p>
          Together they form a complete system. Tier-0 determines <em>what</em>{" "}
          is admissible. Tier-1 determines <em>how</em> the admissible structure
          acts on fields, produces masses, and generates predictions. The
          Everything Equation <em>\\mathcal{L} = \\Omega,\\Delta,\\partial(\\mathcal{L})</em>{" "}
          is the fixed-point criterion. The Coupled Dirac–Λ System is the unique
          dynamical realization satisfying it.
        </p>

        <p>
          One equation. One admissibility principle. One dynamical system. Zero
          free parameters.
        </p>

        <hr />

        <p>
          <strong>Author:</strong> Jeremy Rodgers
          <br />
          <strong>Framework:</strong> Tier-0 / The Everything Equation
          <br />
          <strong>Supporting paper:</strong>{" "}
          <em>
            A Coupled Dirac–Λ Dynamical System: Unified Field Equations with
            Derived Structural Consequences
          </em>{" "}
          — see the papers section for the full technical document with complete
          proofs, standing assumptions, and witness protocol.
        </p>

        <p>
          © 2026 Jeremy Rodgers. All rights reserved. Content released under CC
          BY-NC-ND 4.0 unless otherwise stated.
        </p>
      </article>
    </main>
  );
}
