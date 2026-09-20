import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { loadProblems, loadPapers, getProblem } from "@/lib/registry";
import { site } from "@/config/site";
import MdxContent from "@/components/mdx-content";
import { manualProblems } from "@/generated/manualProblems";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const problems = await loadProblems();
  return problems.filter((p) => p.status === "public").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const problem = await getProblem(slug);
  if (!problem) return {};
  return {
    title: `${problem.title} (${problem.maturity === "constitutive-results" ? "Research Status" : "Open Problem"})`,
    description: problem.target.trim(),
    alternates: { canonical: `/problems/${problem.slug}` },
  };
}

export default async function ProblemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const problem = await getProblem(slug);
  if (!problem || problem.status !== "public") notFound();

  const papers = await loadPapers();
  const supporting = papers.filter(
    (p) => p.status === "public" && p.supports.includes(problem.slug)
  );
  const loader = (manualProblems as Record<string, (() => Promise<any>) | undefined>)[problem.slug];
  const isQuantum = problem.slug === "quantum-measurement";
  const isConsciousness = problem.slug === "consciousness";
  const currentPapers = supporting.filter((paper) => paper.category === "canonical" || paper.category === "branch");
  const historicalPapers = supporting.filter((paper) => paper.category === "historical" || paper.category === "superseded");

  return (
    <article className="mx-auto max-w-3xl">
      <header>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full border border-[hsl(var(--amber)/0.35)] bg-[hsl(var(--amber)/0.07)] px-2.5 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-wider text-amberc">
            {problem.maturity === "constitutive-results" ? "Published constitutive results" : "Open problem"}
          </span>
          {problem.domain ? (
            <span className="font-mono text-[0.68rem] uppercase tracking-wider text-faint">
              {problem.domain}
            </span>
          ) : null}
        </div>
        <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
          {problem.title}
        </h1>
      </header>

      <section className="card-surface mt-6 border-l-4 border-l-[hsl(var(--amber))] px-5 py-4">
        <p className="m-0 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-amberc">
          {isQuantum ? "Current research status · Version 2 · 15 September 2026" : isConsciousness ? "Current research status · SPC-2 · 20 September 2026" : "Research target"}
        </p>
        <p className="mt-2 text-[0.97rem] leading-relaxed text-fg/90">
          {problem.target.trim()}
        </p>
      </section>

      {isQuantum ? (
        <section className="mt-8" aria-labelledby="current-quantum-results">
          <h2 id="current-quantum-results" className="text-2xl font-semibold">The current measurement programme</h2>
          <p className="mt-3 leading-relaxed text-mute">Source dynamics, a law for actual histories, outcome statistics and durable apparatus records are different parts of a measurement theory. The new publications supply two complete chains under their own constitutive premises.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/quantum-measurement/pilot-medium" className="card-surface card-surface-hover p-5">
              <h3 className="font-semibold text-glow">Pilot-medium completion →</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">Declared bond interactions, prepared spatial gas and finite packet recombination give a controlled Bell-path limit. A finite autonomous material programme retains sampled records on the proved horizon.</p>
            </Link>
            <Link href="/quantum-measurement/massive-configuration" className="card-surface card-surface-hover p-5">
              <h3 className="font-semibold text-vio">Massive-configuration completion →</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">A continuous guidance law and complete initial equilibrium are premises. Semibounded apparatus dynamics give physical pointers and separate bounds on retained output and historical archive corruption.</p>
            </Link>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-mute">Source/readout incompleteness does not by itself derive these interaction laws, guidance laws or preparation statistics. Exact finite-resource Bell dynamics, a smooth realization of the full hybrid source, and broader preparation and storage domains remain identified extensions. The supplied publications do not establish external verification or experimental confirmation.</p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium text-glow">
            <Link href="/quantum-measurement">Explore the full programme →</Link>
            <Link href="/quantum-measurement/monograph">Read the complete monograph →</Link>
            <a href="#historical-notes">Historical notes ↓</a>
          </div>
        </section>
      ) : null}

      {currentPapers.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Current publications</h2>
          <ul className="mt-3 space-y-3">{currentPapers.map((paper) => <li key={paper.slug}><Link href={`/papers/${paper.slug}`} className="text-glow hover:text-glow-strong">{paper.displayTitle} →</Link></li>)}</ul>
        </section>
      ) : null}

      {isConsciousness ? (
        <section className="mt-8" aria-labelledby="current-consciousness-results">
          <h2 id="current-consciousness-results" className="text-2xl font-semibold">The current consciousness account</h2>
          <p className="mt-3 leading-relaxed text-mute">SPC-2 separates awareness, a localized subject, a lived scene and a person. Its admission law requires executable return and native predictive conditions. Its content law uses all admitted finite native continuations and checked predictive-fibre congruence. Its continuation law follows nonbranching process provenance.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="card-surface p-5"><h3 className="font-semibold text-glow">Conditional finite result</h3><p className="mt-2 text-sm leading-relaxed text-mute">Given certified realization, its selection doctrine and the stated A0–A3 premises, the finite construction assigns qualifying perspectives, their full endogenous predictive content and episode continuation. The result does not derive those inputs.</p></div>
            <div className="card-surface p-5"><h3 className="font-semibold text-vio">Realization and validation</h3><p className="mt-2 text-sm leading-relaxed text-mute">Physical realization selection, robust biological interpretation and comparison with experience remain obligations. The monograph supplies no universal consciousness detector and does not certify current LLM sessions.</p></div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-mute">Version 2 supersedes the earlier Consciousness Field account. Its older fixed-point and EEG claims remain identifiable history; they are not empirical validation of SPC-2. Quantum publications supply physical antecedents and related reading, with their own assumptions.</p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium text-glow"><Link href="/consciousness">Explore the full account →</Link><Link href="/consciousness/monograph">Complete monograph →</Link><Link href="/consciousness/guides/testing-spc-2">What would test SPC-2? →</Link><Link href="/legacy/consciousness-field-theorem">Historical predecessor →</Link></div>
        </section>
      ) : null}

      <section className="mt-6 rounded-xl border border-edge bg-surface px-5 py-4 text-sm leading-relaxed text-mute">
        <p className="m-0">
          <strong className="text-fg">Research protocol.</strong> Within {site.name}, a
          result on this problem enters the framework through a dedicated public paper
          or record containing its assumptions, domain of validity, method, mathematical
          or empirical support, and exact conclusion. This page defines the target and
          connects the work that bears on it.
        </p>
      </section>

      {loader && problem.legacyNotes ? (
        <aside id="historical-notes" className="mt-10 scroll-mt-24 rounded-xl border border-[hsl(var(--amber)/0.35)] bg-[hsl(var(--amber)/0.06)] px-5 py-4 text-sm leading-relaxed text-fg/90">
          <p className="m-0 mb-1 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-amberc">
            Historical draft below
          </p>
          {isQuantum ? (
            <>The original Everything Equation / Tier-0 notes below are preserved as a historical development trace, including their original claims and section links. Their claims of collapse from capacity saturation and Born-exponent rigidity are not the assumptions or conclusions of the September 2026 Version 2 constructions. The current measurement results are the monograph and companion papers linked above; Papers 1–7 remain the source–readout foundation. Read the two publication layers with their own provenance.</>
          ) : (
            <>The notes that follow were written during the earlier Everything Equation / Tier-0 era of this programme. They are retained as a development trace. Papers 1–7 supply the current source–readout foundation.</>
          )}
        </aside>
      ) : null}

      {loader ? (
        <section className="mt-4">
          <MdxContent loader={loader} />
        </section>
      ) : null}

      {historicalPapers.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Related historical papers</h2>
          <ul className="mt-3 space-y-2">
            {historicalPapers.map((p) => (
              <li key={p.slug}>
                <Link href={`/papers/${p.slug}`} className="text-glow hover:text-glow-strong">
                  {p.displayTitle} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <nav className="mt-12 border-t border-edge pt-6">
        <Link href="/problems" className="text-sm font-medium text-glow hover:text-glow-strong">
          ← Research status and open problems
        </Link>
      </nav>
    </article>
  );
}
