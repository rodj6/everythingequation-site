import type { Metadata } from "next";
import Link from "next/link";
import katex from "katex";
import { getCanonicalPapers } from "@/lib/registry";
import PaperChain from "@/components/paper-chain";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Framework",
  description:
    "The seven-paper Shadow Theory sequence explained: source–readout non-equivalence, target-relative obstruction, canonical minimal completion, geometric realization, projected dynamics, internal identifiability, and the Randall–Sundrum physical witness.",
  alternates: { canonical: "/framework" },
};

const tex = (src: string, displayMode = true) => ({
  __html: katex.renderToString(src, { displayMode, throwOnError: false, strict: "ignore" }),
});

const vocabulary: Array<{ term: string; def: string }> = [
  {
    term: "Readout / shadow",
    def: "An exact bounded presentation — a quotient, measurement, macrostate, or public summary — of a richer realization structure. A shadow is not false or illusory: it presents the source exactly as a quotient, and its internal laws may be fully valid at its own level. It simply is not the source-level structure itself.",
  },
  {
    term: "Reduced source",
    def: "The space of admissible realization states after all declared gauge and coordinate redundancy has been quotiented out. Every non-equivalence claim in the framework is about the reduced source, never about raw descriptions — so a nontrivial readout fiber is genuine physical multiplicity, not gauge residue (Paper 1).",
  },
  {
    term: "Descent",
    def: "A physically invariant source relation descends through the readout — is a function of readout data alone — exactly when it is constant on every readout fiber. Only after descent is established may a quantity be called an observable of the readout level (Paper 1).",
  },
  {
    term: "Target and correct-answer map",
    def: "A question posed of the source, formalized as a map assigning each source state its correct answer. Whether readout loss matters is a property of the target, not of the readout alone: loss obstructs a target exactly when the correct answer varies within some readout fiber (Paper 2).",
  },
  {
    term: "Canonical minimal completion",
    def: "For a nominated family of invariant source relations, the coarsest readout extension on which every relation becomes well defined — the joint image of readout and relations. It is terminal: every sufficient extension maps uniquely onto it. Minimal means least retained distinction, and completion is not reconstruction of the source (Paper 3).",
  },
  {
    term: "Geometric realization / orbit space",
    def: "The physical geometric source is the orbit space of admissible field configurations under allowed bundle isomorphisms and diffeomorphisms. Invariant global relations — holonomy, Wilson observables, characteristic numbers, spectra — descend to it and realize the abstract completion on a restricted domain; not every abstract completion is geometrically realizable (Paper 4).",
  },
  {
    term: "Closure and memory",
    def: "Observable dynamics close autonomously exactly when the source evolution preserves the readout kernel. When closure fails, the exact projected law carries a deterministic unresolved-initial-state term and an exact memory kernel — no stochastic or Markovian approximation — and the minimal dynamical completion measures exactly what state must be restored (Paper 5).",
  },
  {
    term: "Non-source projection",
    def: "A readout tier exhibiting an essential non-gauge fiber distinction — two physically inequivalent source states with the same readout but different correct answers to a nominated target. Relative to that model and target, the readout is provably not the physical state space but a faithful quotient of a larger one (Paper 6).",
  },
  {
    term: "Internal identifiability ceiling",
    def: "Under the hypothesis that every admissible internal probe factors through the readout, no probe value, derived statistic, or deterministic selector distinguishes members of a common readout fiber — and under the statistical counterpart, no test at any sample size does either. Both ceilings are separate, explicit hypotheses (Paper 6).",
  },
  {
    term: "Physical witness",
    def: "A concrete physical model that instantiates the abstract architecture. Paper 7 supplies one in Randall–Sundrum (RS2) gravity: gauge-inequivalent bulk states with identical instantaneous brane readout and different brane futures. The witness is model-relative — it does not prove our universe is such a projection.",
  },
  {
    term: "Operational-equivalence boundary",
    def: "The proved limit of interpretation: every brane-only experiment, including adaptive protocols, is reproduced exactly by a four-dimensional pushforward theory of the brane record. So no brane-only observation can establish that the five-dimensional source representation is ontologically fundamental (Paper 7).",
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
          One sequence, seven papers
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-mute">
          Shadow Theory begins from a direct claim: <span className="text-fg">the reality
          we experience is not source reality itself.</span> It is not a simulation
          hypothesis, and not a Matrix-style illusion. It is a structured shadow of a
          deeper reality, and physics is the study of what that shadow reveals, what it
          hides, and what can be reconstructed from it.
        </p>
        <p className="mt-4 leading-relaxed text-mute">
          The seven-paper foundation builds the mathematics behind that claim step by
          step, and then realizes it in a concrete physical model. Papers 1–6 develop the
          source–readout mathematics: why an exact readout is not the source, when lost
          structure actually matters, what any completion must retain, when completions
          are realized by genuine geometry, when observable dynamics close, and what an
          internal observer can ever identify. Paper 7 instantiates the whole
          architecture in Randall–Sundrum gravity — the sequence's physical witness.
        </p>
      </section>

      {/* Chain */}
      <section aria-labelledby="chain-heading">
        <h2 id="chain-heading" className="mb-6 text-2xl font-bold tracking-tight">
          The canonical sequence
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
              b: "After declared gauge and coordinate redundancy is quotiented out, the public readout always presents the reduced source exactly as a quotient — and that exactness is fully compatible with non-equivalence. Paper 1 proves two independent obstructions: a physically invariant relation is a function of readout data exactly when it is constant on every readout fiber, and a symmetry-compatible deterministic representative exists exactly when every readout stabilizer fixes a point of its fiber. A finite occupation model and the Hopf fibration realize both.",
            },
            {
              n: 2,
              t: "Loss obstructs only relative to a target",
              b: "A lossy readout discards distinctions, but whether they matter is a property of the question asked. Paper 2 proves a target is exactly solvable from the readout if and only if its correct answer never varies within a readout fiber. When solvability fails, the honest residual is the set of compatible answers — not a probability — and every sufficient repair must separate states with different answers, with the joint target image as the coarsest completion any repair must contain.",
            },
            {
              n: 3,
              t: "The minimal completion is canonical",
              b: "Given a nominated family of invariant source relations, Paper 3 constructs the coarsest readout extension on which all of them become well defined, and proves it terminal: every sufficient extension maps uniquely onto it. Existence, uniqueness up to unique isomorphism, and exact minimality follow — without ever selecting a preferred representative of any fiber, and without resurrecting gauge redundancy already quotiented away.",
            },
            {
              n: 4,
              t: "Completions can be realized by geometry — within a boundary",
              b: "Paper 4 identifies when the abstract completion is realized by genuine geometry: compatible local metric, bundle, connection, and matter data glue to global fields unique up to bundle isomorphism, and invariant relations — holonomy, Wilson observables, characteristic numbers, spectra — descend to the orbit space of physical configurations. On the flat U(1) circle, holonomy alone reconstructs the source even though local curvature vanishes. Relation-dependent invariant actions then yield derived, correctly normalized responses in the Einstein, Yang–Mills, and matter equations. No universal realizability is claimed: the realization boundary is the theorem.",
            },
            {
              n: 5,
              t: "Observable dynamics close only under an exact condition",
              b: "Paper 5 is the dynamical layer. An induced evolution on the observable state exists if and only if the source dynamics preserve the readout kernel. When that fails, the exact projected equation carries a deterministic unresolved-initial-state term and an exact memory kernel — with no stochastic, Markovian, or timescale approximation anywhere — and the minimal dynamical completion measures exactly how much hidden state must be restored, computed in finite dimensions by a Kalman-type observability rank. Sector elimination yields Schur-complement effective operators and a covariant effective stress-energy with total, not sectorwise, conservation.",
            },
            {
              n: 6,
              t: "The boundary theorem: non-source projection and its ceilings",
              b: "Paper 6 integrates the sequence: any model exhibiting an essential non-gauge distinction inside a readout fiber — same readout, different correct answers — is, relative to that model and target, a non-source projection. Dynamical closure is evidence of fiber preservation, not fiber triviality. Under explicit factorization hypotheses, no internal probe, statistic, or test at any sample size distinguishes fiber members. The mathematics deliberately stops at the boundary: it does not supply a source domain or a witness. That must come from a physical model.",
            },
            {
              n: 7,
              t: "The physical witness: Randall–Sundrum gravity",
              b: "Paper 7 supplies the witness. In the positive-tension RS2 braneworld it constructs an explicit pair of gauge-inequivalent bulk states with identical instantaneous brane readout and different brane futures, so no deterministic law on the brane's present state reproduces all source trajectories. It derives the exact projected Einstein equation line by line, evaluates it to a positive high-density ρ² term and a bulk-state dark-radiation term, and eliminates the AdS radius to obtain a parameter-free cross-regime relation linking cosmology to weak-field gravity. And it proves its own interpretive limit: a four-dimensional pushforward theory reproduces every brane-only experiment exactly, so this is a model-relative projection result — not a proof that our universe is five-dimensional.",
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
        <div className="card-surface mt-6 p-6 sm:p-8">
          <div className="text-center" dangerouslySetInnerHTML={tex(String.raw`L \;=\; \Omega_{T1}\,\Delta\,\partial\,[\,L\,]`)} />
          <p className="mt-4 leading-relaxed text-mute">
            This site's historical name comes from this expression. Its role is precise
            and deliberately modest: it is a{" "}
            <strong className="text-fg">compact closure schema</strong> from the broader
            programme and the monograph — shorthand for the idea that a public law closes
            only through declared readout-facing completion machinery. It belongs to the
            programme's context, not to the canonical sequence's theorems.
          </p>
          <p className="mt-3 leading-relaxed text-mute">
            The seven papers do not prove, and do not rely on, this schema. What they
            prove are the exact criteria the schema gestures at: when relations descend,
            when targets are obstructed, what the minimal completion is, when it is
            realized geometrically, when projected dynamics close, and what internal
            observers can identify. It is <em>not</em> source-level equality, <em>not</em>{" "}
            empirical validation, and <em>not</em> a solved theory of everything.
          </p>
        </div>
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
