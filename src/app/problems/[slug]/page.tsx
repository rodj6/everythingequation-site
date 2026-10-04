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
          {isQuantum ? "Current research status · Updated 4 October 2026" : isConsciousness ? "Current research status · SPC-2 · Monograph and Papers 2–4" : "Research target"}
        </p>
        <p className="mt-2 text-[0.97rem] leading-relaxed text-fg/90">
          {problem.target.trim()}
        </p>
      </section>

      {isQuantum ? (
        <section className="mt-8" aria-labelledby="current-quantum-results">
          <h2 id="current-quantum-results" className="text-2xl font-semibold">The current measurement programme</h2>
          <p className="mt-3 leading-relaxed text-mute">Source dynamics, a law for actual histories, outcome statistics and durable apparatus records are different parts of a measurement theory. The October papers join the September constructions with equilibrium uniqueness and quantitative nonequilibrium record results.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/quantum-measurement/research/hybrid-bell-paths" className="card-surface card-surface-hover p-5">
              <h3 className="font-semibold text-glow">Pilot-medium completion →</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">Declared bond interactions, prepared spatial gas and finite packet recombination give a controlled Bell-path limit. A finite autonomous material programme retains sampled records on the proved horizon.</p>
            </Link>
            <Link href="/quantum-measurement/research/equilibrium-records" className="card-surface card-surface-hover p-5">
              <h3 className="font-semibold text-vio">Massive-configuration completion →</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">A continuous guidance law and complete initial equilibrium are premises. Semibounded apparatus dynamics give physical pointers and separate bounds on retained output and historical archive corruption.</p>
            </Link>
          </div>
          <div className="mt-5 grid gap-4">
            <div className="card-surface p-5"><h3 className="font-semibold text-glow"><Link href="/quantum-measurement/research/control-consistency">Control-consistent Born uniqueness →</Link></h3><p className="mt-2 text-sm leading-relaxed text-mute">A1–A3 characterize the Born density on the nowhere-zero class using local scalar controls and connected fixed interactions. A4 supplies the nodal extension. Spin, symmetry and binary-flag refinements have distinct hypotheses. The theorem characterizes an assignment; actual preparation laws must satisfy its statistical premise.</p></div>
            <div className="card-surface p-5"><h3 className="font-semibold text-glow"><Link href="/quantum-measurement/research/preparation-returns">All-Borel uniqueness at an engineered preparation →</Link></h3><p className="mt-2 text-sm leading-relaxed text-mute">The exact-return library has a unique invariant probability, the Born measure. The all-Borel theorem uses a reserved nonlinear plane and Gaussian mixing. Its broader Gaussian-network appendix does not extend nonlinear uniqueness to every network. The randomized controller has convergence conditions, finite-round reverse bounds and a retained-command inverse echo.</p></div>
            <div className="card-surface p-5"><h3 className="font-semibold text-vio"><Link href="/quantum-measurement/research/nonequilibrium-records">Calibrated and faithful nonequilibrium records →</Link></h3><p className="mt-2 text-sm leading-relaxed text-mute">The periodic joint-record bound is at most 0.00443484008607784720002304, with actual copy-and-hold failure at most 0.00232725479707784720002304. The radial joint bound is below 0.006086770113, with actual copy-and-hold failure below 0.000552421956. The radial earlier-label comparison is separately below 0.003331233001 under its compatible reference coupling.</p><p className="mt-3 text-sm leading-relaxed text-mute">The periodic model admits its stated inaccessible reference; the radial theorem has a two-component qubit domain and its own narrower law contract. Coarse calibration does not imply fine-grained equilibration or erasure of retained information.</p></div>
          </div>
          <h3 className="mt-7 text-xl font-semibold">The remaining physical work</h3>
          <p className="mt-3 text-sm leading-relaxed text-mute">The papers establish mathematical results under named model and statistical premises. Independent specialist verification and laboratory realization remain open. The hybrid model still needs a common smooth material realization beyond its isolated contact module. The nonequilibrium models still need compatible sources, actual loading and whole-interval retention for one enlarged material Hamiltonian. Unused error margin does not establish a hardware-source error.</p>
          <p className="mt-3 text-sm leading-relaxed text-mute">The equilibrium chain retains complete initial equilibrium and independent ready resources; its finite Gaussian resources have finite moments, not hard cutoffs. Symbolic history bounds do not imply microscopic path total-variation stability. Neither uniqueness theorem selects actual preparation laws without its statistical consistency or invariance premise.</p>
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
          <h3 className="mt-8 text-xl font-semibold">Three advances in the research programme</h3>
          <div className="mt-4 grid gap-4">
            <div className="card-surface p-5"><h4 className="font-semibold text-glow"><Link href="/consciousness/research/paper-2">Paper 2 · Relational boundaries →</Link></h4><p className="mt-2 text-sm leading-relaxed text-mute">The masking construction exposes a robustness vulnerability in exact boundary rules. Statistical deficiency, resource-sensitive comparison and composition theorems specify what a successor account must preserve. Operational equivalence also limits what observed laws can identify.</p></div>
            <div className="card-surface p-5"><h4 className="font-semibold text-glow"><Link href="/consciousness/research/paper-3">Paper 3 · Learning interfaces →</Link></h4><p className="mt-2 text-sm leading-relaxed text-mute">Finite software experiments separate representational capacity from producing and selecting an adequate model. The 48-system comparison preserves its registered results, mechanism-specific regressions and the distinct post-hoc fitting analysis.</p></div>
            <div className="card-surface p-5"><h4 className="font-semibold text-glow"><Link href="/consciousness/research/paper-4">Paper 4 · Identifying realizations →</Link></h4><p className="mt-2 text-sm leading-relaxed text-mute">Intervention-response laws recover an unknown binary coordinate chart under product-response and rank assumptions. A spectral certificate, recoding obstructions and a bounded PyPhi comparison sharpen the realization problem while retaining the distinction between an identified chart and an intrinsic grain.</p></div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-mute">Version 2 supersedes the earlier Consciousness Field account. Its older fixed-point and EEG claims remain identifiable history; they are not empirical validation of SPC-2. Quantum publications supply physical antecedents and related reading, with their own assumptions.</p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium text-glow"><Link href="/consciousness">Explore the full account →</Link><Link href="/consciousness/monograph">Complete monograph →</Link><Link href="/consciousness/research">Papers 2–4 in full →</Link><Link href="/consciousness/guides/testing-spc-2">What would test SPC-2? →</Link><Link href="/legacy/consciousness-field-theorem">Historical predecessor →</Link></div>
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
            <>The original Everything Equation / Tier-0 notes below are preserved as a historical development trace, including their original claims and section links. Their claims of collapse from capacity saturation and Born-exponent rigidity are not the assumptions or conclusions of the September constructions or October research papers. The current measurement results are the five October papers and the preserved monograph and companion editions linked above; Papers 1–7 remain the source–readout foundation. Read the two publication layers with their own provenance.</>
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
