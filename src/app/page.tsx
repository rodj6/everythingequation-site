import SourceLiftFeature from '@/components/source-lift-feature';
import SpectralProgrammeFeature from '@/components/spectral-programme-feature';
import PaperIntegrationFeature from '@/components/paper-integration-feature';
import RelationalAwarenessFeature from '@/components/relational-awareness-feature';
import AlignmentFeature from '@/components/alignment-feature';
import ShadowModelOverview from '@/components/shadow-model-overview';
import SealedLeakyFeature from '@/components/sealed-leaky-feature';
import Link from "next/link";
import katex from "katex";
import { site } from "@/config/site";
import { getCanonicalPapers, loadProblems } from "@/lib/registry";
import { listArticles } from "@/lib/articles";
import PaperChain from "@/components/paper-chain";
import { ProblemCard, ArticleCard } from "@/components/cards";
import ProjectionField from "@/components/projection-field";
import QuantumProgrammeFeature from "@/components/quantum-programme-feature";
import ConsciousnessProgrammeFeature from "@/components/consciousness-programme-feature";
import { atlasStats } from "@/data/reality-atlas";
import { threads } from "@/data/threads";
import { ThreadCard } from "@/components/threads";
import "./home.css";

export const dynamic = "force-static";

const tex = (src: string, displayMode = true) => ({
  __html: katex.renderToString(src, {
    displayMode,
    throwOnError: false,
    strict: "ignore",
  }),
});

export default async function HomePage() {
  const canonical = await getCanonicalPapers();
  const problems = (await loadProblems()).filter(
    (p) => p.status === "public" && p.programme === "featured"
  );
  const articles = listArticles().slice(0, 3);
  const statement = site.heroStatement.split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean);

  return (
    <div className="page-bleed home">
      {/* ================= HERO ================= */}
      <section className="home-hero" aria-labelledby="home-title">
        <picture className="home-hero-picture">
          <source media="(max-width: 56.24em)" srcSet="/atlas-stills/v3/overview-38-tall.webp" />
          <img
            src="/atlas-stills/v3/hero-wide.webp"
            alt="A brass and black instrument on a dark plinth in space: a lamp, a lens, an iris, a glass cell holding rings of light, and a round glass plate marked with points of light. A spiral galaxy lies beyond the plate."
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="section-label">Source structure, observable laws and physical readers</p>
            <h1 id="home-title">Shadow Theory</h1>
            <p className="home-hero-lead">{statement[0]}</p>
            <div className="home-actions">
              <Link href="/atlas" className="home-button is-primary">Enter the Reality Atlas</Link>
              <Link href="/source-readout" className="home-button">Read Source–Readout Theory</Link>
            </div>
          </div>
          <Link href="/atlas" className="home-hero-atlas">
            <span className="section-label">
              The Reality Atlas · {atlasStats.representedNodes} entries · {atlasStats.papersLinked} papers and articles
            </span>
            <em>Open the Reality Atlas <b aria-hidden="true">→</b></em>
          </Link>
        </div>
      </section>

      <div className="home-body">
        {/* ================= STATEMENT ================= */}
        <section className="home-statement" aria-label="What Shadow Theory is">
          <div className="home-statement-text">
            {statement.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="home-question"><span>{site.centralQuestion}</span></p>
          </div>
          <nav className="home-start" aria-label="Where to start">
            <p className="section-label">Where to start</p>
            <ul>
              <li><Link href="/quantum-measurement"><strong>Quantum Measurement &amp; Born Rule</strong><span>Events, statistics and physical records.</span></Link></li>
              <li><Link href="/consciousness/ai-alignment"><strong>AI Alignment &amp; Consciousness</strong><span>Cooperation grounded in understanding.</span></Link></li>
              <li><Link href="/monograph"><strong>Read the TOE monograph</strong><span>The complete Version {site.monograph.version} web edition.</span></Link></li>
              <li><Link href="/framework"><strong>Explore the framework</strong><span>The full model in plain language.</span></Link></li>
              <li><Link href="/papers"><strong>Read the papers</strong><span>Every publication, with DOI and status.</span></Link></li>
            </ul>
          </nav>
        </section>

        {/* ================= FOUR WAYS IN ================= */}
        <nav className="home-doors" aria-labelledby="home-doors-heading">
          <p className="section-label" id="home-doors-heading">Four ways in</p>
          <ul>
            <li><Link href="/atlas"><em>See it</em><strong>The Reality Atlas</strong><span>The whole theory as one instrument you can operate, from source to readout.</span></Link></li>
            <li><Link href="/framework"><em>Understand it</em><strong>The framework</strong><span>The model in plain language, from the ground to the physical world.</span></Link></li>
            <li><Link href="/source-readout"><em>Check it</em><strong>Source–Readout Theory</strong><span>The mathematics: theorems, proofs and worked models.</span></Link></li>
            <li><Link href="/papers"><em>Cite it</em><strong>The papers</strong><span>Every publication, with its DOI and its status.</span></Link></li>
          </ul>
        </nav>

        {/* ================= QUESTIONS ================= */}
        <section className="home-threads" aria-labelledby="home-threads-heading">
          <div className="home-threads-head">
            <p className="section-label">Start from a question</p>
            <h2 id="home-threads-heading">Questions, and where each one leads</h2>
            <p>Each has something to see, an explanation in prose, and the place where it is worked out in full.</p>
          </div>
          <div className="thread-grid">
            {threads.map((thread) => <ThreadCard key={thread.id} thread={thread} />)}
          </div>
        </section>

        {/* ================= THE ATLAS ================= */}
        <section className="home-atlas" aria-labelledby="home-atlas-heading">
          <div>
            <p className="section-label">Interactive model</p>
            <h2 id="home-atlas-heading">Explore the mathematical realization architecture</h2>
          </div>
          <div>
            <p>
              Shadow Theory as one working instrument. Read it from the source Ω through law, aperture and field to
              the plate where the physical world is read out, with a galaxy beyond it. Close the iris to resolve the
              marks, swing in a second probe to split the ones that hide two sources, then turn to the plate itself:
              read its rim as a boundary, or watch a listener inside a history. Trace gravity, matter, constants,
              quantum records, cosmology and time back toward the source. Every entry carries its status and its
              paper.
            </p>
            <Link href="/atlas">Open the Reality Atlas <b aria-hidden="true">→</b></Link>
          </div>
        </section>

        {/* ================= INTERPRETIVE SPINE ================= */}
        <section className="home-spine" aria-labelledby="home-spine-heading">
          <div className="home-spine-head">
            <p className="section-label" id="home-spine-heading">The theory in plain English</p>
            <ProjectionField />
          </div>
          <ol>
            <li>The observed world and its complementary source belong to one whole. We observe from within the readout.</li>
            <li>The broader model begins with unconditioned ground and unsplit unity; reciprocal differentiation introduces structure and records.</li>
            <li>Observation can preserve some structure while losing other structure.</li>
            <li>Whether lost structure matters depends on the question being asked. Loss obstructs exactly the questions whose answers it changes.</li>
            <li>Shadow Theory develops exact rules for when missing structure can be completed, what any completion must retain, and when the observable level obeys its own laws.</li>
            <li>Randall–Sundrum braneworld gravity realizes the architecture physically: identical instantaneous brane readouts can evolve into different futures.</li>
            <li>The seven foundational papers establish the mathematics. Five constructive papers develop quantum sources, physical readers, feedback, certification and minimum-cost readout design.</li>
          </ol>
        </section>

        <nav className="home-contents" aria-label="On this page">
          <p className="section-label">On this page</p>
          <ol>
            <li><a href="#home-research">New research</a></li>
            <li><a href="#home-model">The complete model</a></li>
            <li><a href="#home-programmes">Programmes</a></li>
            <li><a href="#home-library">Monograph and foundation</a></li>
            <li><a href="#home-status">Status and articles</a></li>
          </ol>
        </nav>

        <p className="home-band" id="home-research"><span>New research</span></p>
      <section aria-labelledby="source-readout-heading" className="card-surface relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
        <p className="section-label">Source–Readout Theory · Complete technical articles</p>
        <h2 id="source-readout-heading" className="mt-3 max-w-3xl text-2xl font-bold tracking-tight sm:text-4xl">What a shadow preserves. What a reader can reveal.</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-mute">An exact observable description can leave genuine source distinctions unresolved. The mathematical foundation establishes when those distinctions matter and what a sufficient completion must retain. The constructive programme builds quantum generators and physical readers, proves resource bounds, and certifies target access.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link href="/source-readout#foundations" className="rounded-xl border border-edge p-5 transition hover:border-[hsl(var(--accent)/0.5)]"><span className="section-label">Seven foundational papers</span><h3 className="mt-2 text-lg font-semibold text-fg">Obstruction, completion and projected dynamics</h3><p className="mt-2 text-sm leading-relaxed text-mute">Follow the complete arguments from source–readout non-equivalence to the RS2 physical witness.</p><span className="mt-3 inline-block text-sm font-medium text-glow">Read the foundation →</span></Link>
          <Link href="/source-readout#constructive" className="rounded-xl border border-edge p-5 transition hover:border-[hsl(var(--accent)/0.5)]"><span className="section-label">Five constructive papers</span><h3 className="mt-2 text-lg font-semibold text-fg">Sources, readers and certified access</h3><p className="mt-2 text-sm leading-relaxed text-mute">Explore memory tradeoffs, phase-to-record conversion, feedback, retained records and sufficient readout design.</p><span className="mt-3 inline-block text-sm font-medium text-glow">Read the new results →</span></Link>
        </div>
        <p className="mt-5 text-sm text-mute">The equations, proofs, appendices and references are available in the web editions. <Link href="/source-readout/origins" className="font-medium text-glow">See how the Everything Equation led to this programme →</Link></p>
      </section>
      <SourceLiftFeature/>
<SpectralProgrammeFeature/>
      <RelationalAwarenessFeature/>
      <AlignmentFeature home />
      <PaperIntegrationFeature/>
        <p className="home-band" id="home-model"><span>The complete model</span></p>
      <ShadowModelOverview />
      <SealedLeakyFeature />


        <p className="home-band" id="home-programmes"><span>Programmes</span></p>
      <QuantumProgrammeFeature />
      <ConsciousnessProgrammeFeature />

        <p className="home-band" id="home-library"><span>Monograph and foundation</span></p>
      {/* ================= THE MONOGRAPH ================= */}
      <section aria-labelledby="monograph-heading">
        <div className="card-surface relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
          <div
            aria-hidden="true"
            className="glow-violet pointer-events-none absolute -top-24 right-[-10%] h-56 w-1/2"
          />
          <div className="relative">
            <p className="section-label">
              The TOE Monograph · Version {site.monograph.version} · {site.monograph.published}
            </p>
            <h2
              id="monograph-heading"
              className="mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl"
            >
              <Link href="/monograph" className="hover:text-glow-strong">
                {site.monograph.title}
              </Link>
            </h2>
            <p className="mt-2 max-w-3xl text-lg text-mute">{site.monograph.subtitle}</p>
            <p className="mt-4 max-w-3xl leading-relaxed text-fg/90">
              The monograph develops the programme's source-to-readout architecture for a
              Theory of Everything: one source object, one realization map, and coupled
              quantum, record, geometric, gravitational, matter, cosmological, temporal
              and observer readouts, with nine companion theorem programmes ahead. It is a
              fixed Version {site.monograph.version} publication, textually identical to
              its Zenodo record; the current canonical foundation is the seven-paper
              sequence published after it. The complete Version {site.monograph.version}{" "}
              text is readable here as a web edition: 18 chapters, two appendices, and the
              full bibliography.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/monograph"
                className="rounded-lg bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--background))] transition hover:bg-[hsl(var(--accent-strong))]"
              >
                Read the web edition
              </Link>
              <a
                href={site.monograph.doiUrl}
                className="rounded-lg border border-edge-strong px-5 py-2.5 font-mono text-sm text-fg transition hover:border-[hsl(var(--accent)/0.5)] hover:text-glow-strong"
              >
                doi:{site.monograph.doi}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CANONICAL STACK ================= */}
      <section aria-labelledby="stack-heading">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Canonical foundation</p>
            <h2 id="stack-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              The seven-paper sequence
            </h2>
            <p className="mt-2 max-w-2xl text-mute">
              Papers 1–6 establish exact criteria for descent, target sufficiency, minimal completion, geometric realization, dynamical closure and internal identifiability. Paper 7 supplies a model-relative physical witness in Randall–Sundrum gravity. Their complete web editions form the foundation of the current source–readout programme.
            </p>
          </div>
          <Link href="/papers" className="shrink-0 text-sm font-medium text-glow hover:text-glow-strong">
            All papers →
          </Link>
        </div>
        <PaperChain papers={canonical} />
      </section>

      {/* ================= SYNTHESIS SCHEMA ================= */}
      <section aria-labelledby="schema-heading" className="mx-auto max-w-[min(48rem,100%)]">
        <div className="card-surface relative overflow-hidden px-6 py-8 text-center sm:px-10">
          <div
            aria-hidden="true"
            className="glow-violet pointer-events-none absolute -bottom-24 left-1/2 h-48 w-3/4 -translate-x-1/2"
          />
          <p className="section-label relative">Programme context</p>
          <h2 id="schema-heading" className="relative mt-2 text-xl font-bold tracking-tight sm:text-2xl">
            From the Everything Equation to source–readout theory
          </h2>

          <p className="relative mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-mute">
            Original compact form
          </p>
          <div
            className="relative mt-2 text-lg"
            dangerouslySetInnerHTML={tex(
              String.raw`L \;=\; \Omega\,\Delta\,\partial[\,L\,]`
            )}
          />
          <p className="relative mx-auto mt-2 max-w-xl text-sm leading-relaxed text-mute">
            The original schema organized a question about lawhood: what survives
            presentation changes, admissibility filtering and canonical completion? It
            gives this site its name and marks the starting point of the programme.
          </p>

          <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-mute">
            Typed Shadow Theory form
          </p>
          <div
            className="relative mt-2 text-lg"
            dangerouslySetInnerHTML={tex(
              String.raw`L \;=\; \Omega_{T1}\,\Delta\,\partial[\,L\,]`
            )}
          />
          <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mute">
            The updated form is a scope correction. The operator{" "}
            <span dangerouslySetInnerHTML={tex(String.raw`\Omega_{T1}`, false)} /> marks
            the intended Tier-1 completion/readout role. Shadow Theory develops the
            underlying questions through exact descent tests, canonical minimal
            completions, projected dynamics and constructive readers. These are specific
            mathematical results with their own definitions and hypotheses. The schema
            organizes their development; it is not a single equation that calculates or
            solves everything.
          </p>

          <Link
            href="/source-readout/origins"
            className="relative mt-5 inline-block text-sm font-medium text-glow hover:text-glow-strong"
          >
            Follow the mathematical development →
          </Link>
        </div>
      </section>

        <p className="home-band" id="home-status"><span>Status and articles</span></p>
      {/* ================= RESEARCH POSITION ================= */}
      <section aria-labelledby="position-heading" className="mx-auto max-w-3xl">
        <p className="section-label text-center">Framework position</p>
        <h2 id="position-heading" className="mt-2 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Established results and programme trajectory
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="card-surface border-l-4 border-l-[hsl(var(--green))] p-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-greenc">
              Established results
            </p>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-fg/90">
              {site.researchPosition.establishes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="card-surface border-l-4 border-l-[hsl(var(--amber))] p-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-amberc">
              Programme trajectory
            </p>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-fg/90">
              {site.researchPosition.programme.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= OPEN PROBLEMS ================= */}
      <section aria-labelledby="problems-heading">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Research programme</p>
            <h2 id="problems-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Research status and open problems
            </h2>
            <p className="mt-2 max-w-2xl text-mute">
              Downstream branch targets of the stack, each defined by a concrete research
              question and the evidence required to establish a result.
            </p>
          </div>
          <Link href="/problems" className="shrink-0 text-sm font-medium text-glow hover:text-glow-strong">
            Full programme →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <ProblemCard key={p.slug} problem={p} />
          ))}
        </div>
      </section>

      {/* ================= ARTICLES ================= */}
      {articles.length > 0 ? (
        <section aria-labelledby="articles-heading">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Notes &amp; updates</p>
              <h2 id="articles-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Latest articles
              </h2>
            </div>
            <Link href="/articles" className="shrink-0 text-sm font-medium text-glow hover:text-glow-strong">
              All articles →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      ) : null}

      {/* ================= FINAL CTA ================= */}
      <section className="mx-auto max-w-2xl pb-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Start at the beginning
        </h2>
        <p className="mt-3 text-mute">
          The sequence is designed to be read in order. Paper 1 establishes the single
          distinction everything else builds on.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href={`/papers/${canonical[0]?.slug ?? "source-readout-non-equivalence"}`}
            className="rounded-lg bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--background))] transition hover:bg-[hsl(var(--accent-strong))]"
          >
            Read Paper 1
          </Link>
          <Link
            href="/research-map"
            className="rounded-lg border border-edge-strong px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-[hsl(var(--accent)/0.5)] hover:text-glow-strong"
          >
            View the research map
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
}
