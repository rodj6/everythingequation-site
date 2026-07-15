import type { Metadata } from "next";
import Link from "next/link";
import katex from "katex";
import { getCanonicalPapers } from "@/lib/registry";
import PaperChain from "@/components/paper-chain";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Framework",
  description:
    "The Shadow Theory stack explained: readout, completion necessity, canonical completion, Tier-1 down-compilation, runtime calculus, and the scoped synthesis schema.",
  alternates: { canonical: "/framework" },
};

const tex = (src: string, displayMode = true) => ({
  __html: katex.renderToString(src, { displayMode, throwOnError: false, strict: "ignore" }),
});

const vocabulary: Array<{ term: string; def: string }> = [
  {
    term: "Readout / shadow",
    def: "An exact bounded presentation — a quotient, measurement, macrostate, or public summary — of a richer realization structure. A shadow is not false or illusory: it is an exact projected interface whose internal laws may be fully valid at its own level. It simply is not the source-level structure itself.",
  },
  {
    term: "Realization equivalence",
    def: "The strong condition that a readout domain recovers the full realization-relevant structure of what it summarizes. Paper 1 proves exact readout does not imply this.",
  },
  {
    term: "Completion necessity",
    def: "The certified condition under which readout loss actually matters: an active, uncleared failure of an essential public closure slot with no checked repair or public surrogate (Paper 2). Readout loss alone is not obstruction.",
  },
  {
    term: "Canonical completion",
    def: "A completion that is certified as an initial object in the public admissible completion category for the relevant target and closure context (Paper 3). Completion need does not automatically produce one.",
  },
  {
    term: "Down-compilation / Tier-1 artifact",
    def: "The total, deterministic, route-locked, gate-cleared, residue-aware compilation step that turns a canonical completion output into a statused public Tier-1 artifact — or into a declared lower-status output (Paper 4).",
  },
  {
    term: "Runtime status, residue, and audit calculus",
    def: "The declared machinery governing public claims after compilation: route decisions, status algebra, residue algebra, equation-artifact grammar, claim licensing, testing, audit, downgrade logic, and forbidden-promotion discipline (Paper 5).",
  },
  {
    term: "Branch packet",
    def: "The required public wrapper for any branch result: source stage, target problem, public objects, assumptions, route, status, residues, proof obligations, validation obligations, and claim boundary. A branch output is not canonical Shadow Theory without one.",
  },
  {
    term: "Law packet",
    def: "A scoped bundle of laws, closure conditions, statuses, and licensed claims. The synthesis layer (Paper 6) governs which law packets are closure-fixed within declared scope.",
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
          One chain, six links
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-mute">
<<<<<<< HEAD
          Shadow Theory is a public mathematical framework for a single question, asked
          carefully: <span className="text-fg">when is a bounded description — a readout, a
          shadow — enough, and what does it take to soundly claim more?</span>
        </p>
        <p className="mt-4 leading-relaxed text-mute">
          The framework is built as a chain of six papers. Each proves one step and hands
          a typed interface to the next. Nothing downstream is allowed to claim more than
          upstream results license — that discipline is itself part of the mathematics.
=======
          Shadow Theory begins from a direct claim: <span className="text-fg">the reality
          we experience is not source reality itself.</span> It is not a simulation
          hypothesis, and not a Matrix-style illusion. It is a structured shadow of a
          deeper reality, and physics is the study of what that shadow reveals, what it
          hides, and what can be reconstructed from it.
        </p>
        <p className="mt-4 leading-relaxed text-mute">
          The six-paper framework builds the mathematics behind that claim step by step.
          It explains why observation is not the same thing as underlying realization,
          when lost structure matters, when completion is possible, and how to state
          theoretical claims without mistaking the shadow for the source.
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48
        </p>
      </section>

      {/* Chain */}
      <section aria-labelledby="chain-heading">
        <h2 id="chain-heading" className="mb-6 text-2xl font-bold tracking-tight">
          The canonical chain
        </h2>
        <PaperChain papers={canonical} />
      </section>

      {/* Stage narrative */}
      <section aria-labelledby="stages-heading" className="mx-auto max-w-3xl">
        <h2 id="stages-heading" className="text-2xl font-bold tracking-tight">
          What each stage establishes
        </h2>
        <div className="mt-6 space-y-6">
          {[
            {
              n: 1,
              t: "Readout is not realization",
              b: "A macrostate summarizes a microstate; a measurement outcome summarizes a preparation. Paper 1 proves that even an exact readout presentation need not be realization-structure equivalent to what it summarizes — and pins down precisely when the obstruction applies, including explicit exception classes.",
            },
            {
              n: 2,
              t: "Loss becomes obstruction only when certified",
              b: "It is a recurring error to treat any readout loss as an automatic problem. Paper 2 proves the exact additional condition needed: a certified, active, uncleared failure of an essential public closure slot. Without that certificate, no obstruction claim is licensed.",
            },
            {
              n: 3,
              t: "Canonical completion is conditional",
              b: "When a completion need is certified, Paper 3 defines when a response is canonical: exactly when it is a certified initial object in the public admissible completion category. Candidate completions, branch completions, and failed proposals remain noncanonical without that certificate.",
            },
            {
              n: 4,
              t: "Artifacts require down-compilation",
              b: "A canonical completion object is not yet a public artifact. Paper 4 defines the down-compiler: total, deterministic, route-legal, gate-cleared, and residue-aware, emitting exactly one statused output — including declared failure and residue outputs when gates do not clear.",
            },
            {
              n: 5,
              t: "Claims are licensed, not asserted",
              b: "Paper 5 supplies the runtime calculus: what routes exist, what statuses and residues mean, which claims each output can license, and which promotions are forbidden. Its claim-cap theorems bound every emitted output by route, status, residue, audit outcomes, and obligations.",
            },
            {
              n: 6,
              t: "The synthesis composes the stack",
              b: "Paper 6 assembles the five upstream interfaces into a single typed synthesis object with a graph-theoretic claim-promotion discipline, and proves the Scoped Shadow Fixed-Point Law-Packet Theorem — the precise, bounded sense in which the stack culminates in a closure-fixed schema.",
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
          The framework's terms are typed and disciplined; these are their public readings.
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
            This site's historical name comes from this expression. Inside Shadow Theory
            it has a precise and deliberately modest role: it is a{" "}
            <strong className="text-fg">scoped closure-fixed law-packet schema</strong> in
            the synthesis layer. A typed operator chain acts on scoped law packets, and a
            fixed point is licensed only as a residue-visible, status-certified,
            claim-bounded closure of that scoped packet.
          </p>
          <p className="mt-3 leading-relaxed text-mute">
            It is <em>not</em> source-level equality, <em>not</em> empirical validation,{" "}
            <em>not</em> a solved theory of everything, and <em>not</em> a Tier-1 artifact
            without down-compilation. Shadow Theory culminates in a way of organizing which
            law packets, closure conditions, runtime statuses, and public artifacts are
            licensed by the six-paper stack — not in a slogan.
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
