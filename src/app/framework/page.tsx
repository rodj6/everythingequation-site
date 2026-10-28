import PaperIntegrationFeature from '@/components/paper-integration-feature';
import PhilosophicalClarification from "@/components/philosophical-clarification";
import ShadowModelOverview from '@/components/shadow-model-overview';
import SealedLeakyFeature from '@/components/sealed-leaky-feature';
import type { Metadata } from "next";
import Link from "next/link";
import katex from "katex";
import { getCanonicalPapers } from "@/lib/registry";
import PaperChain from "@/components/paper-chain";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Framework",
  description:
    "Shadow Theory's source–readout framework: mathematical foundations, constructive quantum sources and readers, certified target access, and the development from the Everything Equation.",
  alternates: { canonical: "/framework" },
};

const tex = (src: string, displayMode = true) => ({
  __html: katex.renderToString(src, { displayMode, throwOnError: false, strict: "ignore" }),
});

const vocabulary: Array<{ term: string; def: string }> = [
  {term: "Unconditioned ground", def: "The unspecified ground prior to the distinctions used in the broader model. No mathematical state space, probability law or potential-energy function is assigned to it."},
  {term: "The unsplit", def: "Unity before the operational source–readout distinction. U retains this meaning in the consciousness manuscript. In the awareness interpretation there is no separate subject reflecting on itself."},
  {term: "Complementarity and reciprocity", def: "Source and readout are structure and record aspects of one whole; observers belong within the readout. Reciprocal partial coupling permits mutual influence without requiring complete mutual reconstruction."},
  {
    term: "Readout / shadow",
    def: "An exact bounded presentation of a richer realization structure, such as a quotient, measurement, macrostate, or public summary. A shadow presents the source exactly as a quotient, can support valid internal laws, and remains distinct from the source-level structure.",
  },
  {
    term: "Reduced source",
    def: "The space of admissible realization states after all declared gauge and coordinate redundancy has been quotiented out. Every non-equivalence result concerns this reduced source, so a nontrivial readout fiber represents genuine physical multiplicity after gauge residue has been removed (Paper 1).",
  },
  {
    term: "Descent",
    def: "A physically invariant source relation descends through the readout, becoming a function of readout data alone, exactly when it is constant on every readout fiber. Descent is the criterion that makes a source relation an observable of the readout level (Paper 1).",
  },
  {
    term: "Target and correct-answer map",
    def: "A question posed of the source, formalized as a map assigning each source state its correct answer. Whether readout loss matters is a property of the target, not of the readout alone: loss obstructs a target exactly when the correct answer varies within some readout fiber (Paper 2).",
  },
  {
    term: "Canonical minimal completion",
    def: "For a nominated family of invariant source relations, the joint image of readout and relations is the coarsest extension on which every relation becomes well defined. It is terminal: every sufficient extension maps uniquely onto it. Minimality measures retained distinctions; reconstruction occurs exactly when the nominated family separates source points (Paper 3).",
  },
  {
    term: "Geometric realization / orbit space",
    def: "The physical geometric source is the orbit space of admissible field configurations under allowed bundle isomorphisms and diffeomorphisms. Invariant global relations such as holonomy, Wilson observables, characteristic numbers, and spectra descend to it. Descent and cocycle conditions characterize the exact domain on which the abstract completion has a geometric realization (Paper 4).",
  },
  {
    term: "Closure and memory",
    def: "Observable dynamics close autonomously exactly when the source evolution preserves the readout kernel. When closure fails, the exact projected law carries a deterministic unresolved-initial-state term and an exact memory kernel derived without stochastic or Markovian approximation. The minimal dynamical completion measures exactly what state must be restored (Paper 5).",
  },
  {
    term: "Non-source projection",
    def: "A readout tier exhibiting an essential non-gauge fiber distinction: two physically inequivalent source states with the same readout but different correct answers to a nominated target. For that model and target, the readout is provably a faithful quotient of a larger physical state space (Paper 6).",
  },
  {
    term: "Internal identifiability theorem",
    def: "When every admissible internal probe factors through the readout, all probe values, derived statistics, and deterministic selectors agree across a common readout fiber. Under the statistical counterpart, every test at every sample size has the same outcome law across the fiber. These are separate factorization theorems (Paper 6).",
  },
  {
    term: "Physical witness",
    def: "A concrete physical model that instantiates the abstract architecture. Paper 7 supplies one in Randall–Sundrum (RS2) gravity: gauge-inequivalent bulk states with identical instantaneous brane readout and different brane futures, an exact projected Einstein equation, and linked observable residues.",
  },
  {
    term: "Operational equivalence",
    def: "Every brane-only experiment, including adaptive protocols, is reproduced exactly by a four-dimensional pushforward theory of the brane record. The two source representations therefore generate the same complete brane-level outcome law (Paper 7).",
  },
];

export default async function FrameworkPage() {
  const canonical = await getCanonicalPapers();

  return (
    <div className="space-y-20">
      {/* Intro */}
      <section className="mx-auto max-w-3xl">
        <p className="section-label">Framework</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          From the whole to the observable
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-mute">
          Shadow Theory treats experienced reality as a structured readout of deeper
          source structure. <span className="text-fg">The observable world is physically
          real at its own tier</span>, with laws and relations inherited through a
          projection. The framework studies exactly what the readout preserves, which
          distinctions it identifies, and what additional structure reconstruction requires.
        </p>
        <p className="mt-4 leading-relaxed text-mute">
          The seven-paper foundation builds the mathematics behind that claim step by
          step, and then realizes it in a concrete physical model. Papers 1–6 develop the
          source–readout mathematics: why an exact readout is not the source, when lost
          structure actually matters, what any completion must retain, when completions
          are realized by genuine geometry, when observable dynamics close, and what an
          internal observer can identify under the stated access conditions. Paper 7
          instantiates that architecture within Randall–Sundrum gravity.
        </p>
        <p className="mt-4 leading-relaxed text-mute">Five constructive papers carry those questions into explicit quantum sources, bounded phase-sensitive readers, feedback policies, retained-record certification and exact finite readout design. The foundation and its constructive development are presented together, with complete technical articles and connected reading paths.</p>
        <div className="mt-6 flex flex-wrap gap-3"><Link href="/source-readout" className="rounded-lg bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-ink">Read Source–Readout Theory →</Link><Link href="/source-readout/origins" className="rounded-lg border border-edge px-5 py-2.5 text-sm font-medium text-glow">From the Everything Equation →</Link></div>
      </section>
<PaperIntegrationFeature compact ids={["block-universe", "whole-field", "temporal-passage"]}/>

      <ShadowModelOverview />
      <PhilosophicalClarification statement="companion"/>
      <SealedLeakyFeature />

      {/* Chain */}
      <section aria-labelledby="chain-heading">
        <h2 id="chain-heading" className="mb-6 text-2xl font-bold tracking-tight">
          The foundational sequence
        </h2>
        <PaperChain papers={canonical} />
      </section>

      {/* Stage narrative */}
      <section aria-labelledby="stages-heading" className="mx-auto max-w-3xl">
        <h2 id="stages-heading" className="text-2xl font-bold tracking-tight">
          What each paper establishes
        </h2>
        <div className="mt-6 space-y-6">
          {[
            {
              n: 1,
              t: "An exact readout is not the source",
              b: "After declared gauge and coordinate redundancy is quotiented out, the public readout presents the reduced source exactly as a quotient while remaining compatible with non-equivalence. Paper 1 proves two independent obstructions: a physically invariant relation is a function of readout data exactly when it is constant on every readout fiber, and a symmetry-compatible deterministic representative exists exactly when every readout stabilizer fixes a point of its fiber. A finite occupation model and the Hopf fibration realize both.",
            },
            {
              n: 2,
              t: "Loss obstructs only relative to a target",
              b: "A lossy readout discards distinctions, and whether they matter is a property of the question asked. Paper 2 proves a target is exactly solvable from the readout if and only if its correct answer never varies within a readout fiber. When solvability fails, the compatible-answer set is the unique pointwise-least sound set-valued rule. Every sufficient repair must separate states with different answers, with the joint target image as the coarsest completion any repair must contain.",
            },
            {
              n: 3,
              t: "The minimal completion is canonical",
              b: "Given a nominated family of invariant source relations, Paper 3 constructs the coarsest readout extension on which all of them become well defined, and proves it terminal: every sufficient extension maps uniquely onto it. Existence, uniqueness up to unique isomorphism, and exact minimality follow without selecting a preferred representative of any fiber or resurrecting gauge redundancy already quotiented away.",
            },
            {
              n: 4,
              t: "Geometric descent realizes the completion",
              b: "Paper 4 characterizes geometric realization exactly: compatible local metric, bundle, connection, and matter data glue to global fields unique up to bundle isomorphism, while holonomy, Wilson observables, characteristic numbers, and spectra descend to the orbit space of physical configurations. On the flat U(1) circle, holonomy alone reconstructs the source even though local curvature vanishes. Relation-dependent invariant actions then derive correctly normalized responses in the Einstein, Yang–Mills, and matter equations. The descent and cocycle conditions determine the complete realization domain.",
            },
            {
              n: 5,
              t: "Observable dynamics close only under an exact condition",
              b: "Paper 5 is the dynamical layer. An induced evolution on the observable state exists if and only if the source dynamics preserve the readout kernel. When that fails, the exact projected equation carries a deterministic unresolved-initial-state term and an exact memory kernel derived without stochastic, Markovian, or timescale approximations. The minimal dynamical completion measures exactly how much source state must be restored, computed in finite dimensions by a Kalman-type observability rank. Sector elimination yields Schur-complement effective operators and a covariant effective stress-energy with explicit exchange and total conservation.",
            },
            {
              n: 6,
              t: "Non-source projection and internal identifiability",
              b: "Paper 6 integrates the sequence: an essential non-gauge distinction inside a readout fiber, meaning the same readout with different correct answers, proves non-source projection for the stated model and target. Dynamical closure demonstrates fiber preservation rather than fiber triviality. Under explicit factorization hypotheses, every internal probe, statistic, and test at every sample size agrees across fiber members. The theorem also specifies exactly what a physical witness must supply.",
            },
            {
              n: 7,
              t: "The physical witness: Randall–Sundrum gravity",
              b: "Within RS2 gravity, Paper 7 proves that identical instantaneous brane readouts can evolve into different futures, so the full source dynamics admit no deterministic brane-only evolution law. It derives the exact projected Einstein equation line by line, evaluates the positive high-density ρ² term and bulk-state dark-radiation term, and eliminates the AdS radius to obtain a parameter-free relation linking cosmology to weak-field gravity. Its pushforward theorem proves that every brane-only protocol has an exact four-dimensional representation.",
            },
          ].map((s) => (
            <article key={s.n} className="card-surface p-6">
              <h3 className="flex items-baseline gap-3 text-lg font-semibold">
                <span className="font-mono text-glow">{String(s.n).padStart(2, "0")}</span>
                {s.t}
              </h3>
              <p className="mt-2 leading-relaxed text-mute">{s.b}</p>
              <Link
                href={`/papers/${canonical[s.n - 1]?.slug ?? ""}`}
                className="mt-3 inline-block text-sm font-medium text-glow hover:text-glow-strong"
              >
                Paper {s.n} details →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="constructive-heading" className="mx-auto max-w-3xl">
        <p className="section-label">Constructive development</p>
        <h2 id="constructive-heading" className="mt-3 text-2xl font-bold tracking-tight">Making source–readout questions operational</h2>
        <p className="mt-4 leading-relaxed text-mute">A minimal information object does not yet specify a physical reader. The five constructive papers distinguish the resources and interventions needed to generate a process, expose a source distinction, decide a target, and certify the reader's performance.</p>
        <ol className="mt-6 space-y-4">
          {[
            ["Quantum sources", "Stationary generators reproduce full passive word laws with explicit internal-memory and retained-output costs. Common admitted interventions can distinguish implementations that passive records cannot."],
            ["Phase-to-record conversion", "Bounded interactions convert a phase distinction into stable flags, with sharp success and uncertainty frontiers and all null/loss outputs retained."],
            ["Feedback and local readers", "Exact small-horizon results locate when feedback first improves the grouped sign decision, while larger-budget certificates preserve the remaining threshold gaps."],
            ["Certification and records", "Frozen-reader validation has information and source-stock costs. Under a shared physical-family promise, readable trajectories strictly improve the resources required by terminal-error-only validation."],
            ["Target-sufficient design", "Finite algorithms find target-disagreeing source pairs and synthesize minimum-cost sufficient sensor selections, with exact certificates and explicit feasibility constraints."],
          ].map(([title,body],i)=><li key={title} className="card-surface p-5"><h3 className="font-semibold text-fg"><span className="mr-3 font-mono text-glow">{String(i+1).padStart(2,"0")}</span>{title}</h3><p className="mt-2 text-sm leading-relaxed text-mute">{body}</p></li>)}
        </ol>
        <Link href="/source-readout#constructive" className="mt-5 inline-block text-sm font-medium text-glow">Read the constructive papers and technical companions →</Link>
      </section>

      {/* Vocabulary */}
      <section aria-labelledby="vocab-heading" className="mx-auto max-w-3xl">
        <h2 id="vocab-heading" className="text-2xl font-bold tracking-tight">
          Core vocabulary
        </h2>
        <p className="mt-2 text-mute">
          The framework's terms are exact and disciplined; these are their public readings.
        </p>
        <dl className="mt-6 space-y-4">
          {vocabulary.map((v) => (
            <div key={v.term} className="card-surface p-5">
              <dt className="font-semibold text-fg">{v.term}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-mute">{v.def}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Everything Equation */}
      <section
        id="everything-equation"
        aria-labelledby="ee-heading"
        className="mx-auto max-w-3xl scroll-mt-24"
      >
        <h2 id="ee-heading" className="text-2xl font-bold tracking-tight">
          The role of the Everything Equation
        </h2>
        <p className="mt-4 leading-relaxed text-mute">The original Everything Equation organized the programme around presentation independence, admissibility and completion. Shadow Theory turns those concerns into separate mathematical questions about what a readout determines and what a sufficient realization requires.</p>
        <div className="card-surface mt-6 p-6 sm:p-8">
          <div className="text-center" dangerouslySetInnerHTML={tex(String.raw`L \;=\; \Omega_{T1}\,\Delta\,\partial\,[\,L\,]`)} />
          <p className="mt-4 leading-relaxed text-mute">This is a compact closure schema. The subscript identifies the intended Tier-1 completion/readout role; it does not turn the expression into a universal solution formula. The precise results now live in descent criteria, canonical completion constructions, dynamical closure theorems and operational resource bounds.</p>
          <p className="mt-3 leading-relaxed text-mute">For a fixed source, readout and target family, canonical completion adds exactly the nominated distinctions. Applying that completion again adds none, up to canonical isomorphism. This gives the original fixed-point idea a concrete mathematical descendant. It does not identify every later construction with the historical operator triple.</p>
          <Link href="/source-readout/origins" className="mt-5 inline-block text-sm font-medium text-glow">Read the full development and its mathematical connections →</Link>
        </div>
      </section>

      <section aria-labelledby="measurement-framework-heading" className="mx-auto max-w-3xl">
        <p className="section-label">From foundation to physical constitution</p>
        <h2 id="measurement-framework-heading" className="mt-3 text-2xl font-bold tracking-tight">Quantum measurement: what the foundation supplies</h2>
        <p className="mt-4 leading-relaxed text-mute">An observable state, a rule for actual events and an apparatus record answer different questions. Source–readout mathematics makes that distinction precise. To close a measurement theory, the new programme supplies interaction and preparation laws in addition to that mathematics.</p>
        <p className="mt-4 leading-relaxed text-mute">The pilot-medium completion derives a controlled Bell-path limit from its bond, packet and prepared-gas mechanisms. The massive-configuration completion takes guidance and complete initial equilibrium as physical premises and builds a semibounded material apparatus with retained outputs and archives. These are separate constitutions with their own proofs and finite-domain conclusions.</p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium text-glow"><Link href="/quantum-measurement">Explore the measurement programme →</Link><Link href="/research-map#measurement-map-heading">See the dependency map →</Link></div>
      </section>

      {/* Onward */}
      <section className="mx-auto max-w-3xl text-center">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/papers"
            className="rounded-lg bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--background))] transition hover:bg-[hsl(var(--accent-strong))]"
          >
            Browse the papers
          </Link>
          <Link
            href="/research-map"
            className="rounded-lg border border-edge-strong px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-[hsl(var(--accent)/0.5)] hover:text-glow-strong"
          >
            See the research map
          </Link>
        </div>
      </section>
    </div>
  );
}
