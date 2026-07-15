import Link from "next/link";
import katex from "katex";
import { site } from "@/config/site";
import { getCanonicalPapers, loadProblems } from "@/lib/registry";
import { listArticles } from "@/lib/articles";
import PaperChain from "@/components/paper-chain";
import { ProblemCard, ArticleCard } from "@/components/cards";

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

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ================= HERO ================= */}
      <section className="relative pt-6 sm:pt-12">
        <div
          aria-hidden="true"
          className="bg-observatory-grid absolute inset-x-0 -top-14 -z-10 h-[520px]"
        />
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label animate-rise">
<<<<<<< HEAD
            A public mathematical framework · Papers 1–6
=======
            A mathematical Theory of Everything architecture · Papers 1–6
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48
          </p>
          <h1 className="animate-rise-1 mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            <span className="text-luminous">Shadow Theory</span>
          </h1>
          <p className="animate-rise-2 mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mute sm:text-xl">
<<<<<<< HEAD
            {site.tagline} A six-paper foundation for what can be read, completed,
            compiled, and claimed.
          </p>

          <div className="animate-rise-3 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/monograph"
              className="rounded-lg bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--background))] transition hover:bg-[hsl(var(--accent-strong))]"
            >
              Read the monograph
            </Link>
            <Link
              href="/framework"
              className="rounded-lg border border-edge-strong px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-[hsl(var(--accent)/0.5)] hover:text-glow-strong"
            >
              Explore the framework
            </Link>
            <Link
              href="/papers"
              className="rounded-lg border border-edge-strong px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-[hsl(var(--accent)/0.5)] hover:text-glow-strong"
            >
              Read the papers
            </Link>
          </div>
        </div>

        {/* Interpretive spine */}
        <div className="animate-rise-3 mx-auto mt-14 max-w-3xl">
          <div className="card-surface relative overflow-hidden px-6 py-6 sm:px-8">
            <div
              aria-hidden="true"
              className="glow-cyan pointer-events-none absolute -top-20 left-1/2 h-40 w-3/4 -translate-x-1/2"
            />
            <p className="section-label relative">The spine of the stack</p>
            <ol className="relative mt-4 space-y-2.5 text-left text-[0.95rem] leading-relaxed text-fg/90">
              <li>
                <span className="font-mono text-glow">1 · </span>
                Exact readout is not realization equivalence.
              </li>
              <li>
                <span className="font-mono text-glow">2 · </span>
                Readout loss obstructs only when certified as an active closure failure.
              </li>
              <li>
                <span className="font-mono text-glow">3 · </span>
                Canonical completion is certified initiality — conditional, never automatic.
              </li>
              <li>
                <span className="font-mono text-glow">4 · </span>
                Canonical completion becomes public artifact only through down-compilation.
              </li>
              <li>
                <span className="font-mono text-glow">5 · </span>
                Public claims are licensed by runtime status, residue, route, and audit.
              </li>
              <li>
                <span className="font-mono text-glow">6 · </span>
                The synthesis is a scoped law-packet discipline — not a universal slogan.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ================= THE MONOGRAPH ================= */}
      <section aria-labelledby="monograph-heading">
        <div className="card-surface relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
          <div
            aria-hidden="true"
            className="glow-violet pointer-events-none absolute -top-24 right-[-10%] h-56 w-1/2"
          />
          <div className="relative">
            <p className="section-label">
              The Monograph · Version {site.monograph.version} · {site.monograph.published}
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
              The monograph consolidates and extends the six-paper foundation into a
              source-to-readout architecture for a Theory of Everything — one source
              object, one realization map, and coupled quantum, record, geometric,
              gravitational, matter, cosmological, temporal and observer readouts, with
              nine companion theorem programmes ahead. The complete Version{" "}
              {site.monograph.version} text is readable here as a web edition: 18 chapters,
              two appendices, and the full bibliography.
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
              The six-paper stack
            </h2>
            <p className="mt-2 max-w-2xl text-mute">
              Each paper proves one link in a single chain — from bounded readouts to
              statused public artifacts. Together with the public loading manifest, they
              are the controlling public authority of Shadow Theory.
            </p>
          </div>
          <Link href="/papers" className="shrink-0 text-sm font-medium text-glow hover:text-glow-strong">
            All papers →
          </Link>
        </div>
        <PaperChain papers={canonical} />
      </section>

      {/* ================= SYNTHESIS SCHEMA ================= */}
      <section aria-labelledby="schema-heading" className="mx-auto max-w-3xl">
        <div className="card-surface relative overflow-hidden px-6 py-8 text-center sm:px-10">
          <div
            aria-hidden="true"
            className="glow-violet pointer-events-none absolute -bottom-24 left-1/2 h-48 w-3/4 -translate-x-1/2"
          />
          <p className="section-label relative">Synthesis layer</p>
          <h2 id="schema-heading" className="relative mt-2 text-xl font-bold tracking-tight sm:text-2xl">
            The Everything Equation, correctly scoped
          </h2>
          <div
            className="relative mt-4 text-lg"
            dangerouslySetInnerHTML={tex(
              String.raw`L \;=\; \Omega_{T1}\,\Delta\,\partial\,[\,L\,]`
            )}
          />
          <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mute">
            Within Shadow Theory, this is a <em>scoped closure-fixed law-packet schema</em>:
            a fixed-point condition licensed only as a residue-visible, status-certified,
            claim-bounded closure of a scoped law packet. It is not a claim that one
            equation solves everything, and it is not empirical validation.
          </p>
          <Link
            href="/framework#everything-equation"
            className="relative mt-5 inline-block text-sm font-medium text-glow hover:text-glow-strong"
          >
            How the schema is licensed →
          </Link>
        </div>
      </section>

      {/* ================= CLAIM BOUNDARY ================= */}
      <section aria-labelledby="boundary-heading" className="mx-auto max-w-3xl">
        <p className="section-label text-center">High trust means saying both</p>
        <h2 id="boundary-heading" className="mt-2 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          What this is — and what it is not
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="card-surface border-l-4 border-l-[hsl(var(--green))] p-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-greenc">
              This is
            </p>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-fg/90">
              {site.claimBoundary.is.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="card-surface border-l-4 border-l-[hsl(var(--amber))] p-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-amberc">
              This is not
            </p>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-fg/90">
              {site.claimBoundary.isNot.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
=======
            {site.tagline}
          </p>

          <div className="animate-rise-3 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/framework"
              className="rounded-lg bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--background))] transition hover:bg-[hsl(var(--accent-strong))]"
            >
              Explore the framework
            </Link>
            <Link
              href="/papers"
              className="rounded-lg border border-edge-strong px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-[hsl(var(--accent)/0.5)] hover:text-glow-strong"
            >
              Read the papers
            </Link>
          </div>
        </div>

        {/* Interpretive spine */}
        <div className="animate-rise-3 mx-auto mt-14 max-w-3xl">
          <div className="card-surface relative overflow-hidden px-6 py-6 sm:px-8">
            <div
              aria-hidden="true"
              className="glow-cyan pointer-events-none absolute -top-20 left-1/2 h-40 w-3/4 -translate-x-1/2"
            />
            <p className="section-label relative">The theory in plain English</p>
            <ol className="relative mt-4 space-y-2.5 text-left text-[0.95rem] leading-relaxed text-fg/90">
              <li>
                <span className="font-mono text-glow">1 · </span>
                The reality we observe is not source reality itself.
              </li>
              <li>
                <span className="font-mono text-glow">2 · </span>
                What we call physics is the structured shadow that source reality presents to us.
              </li>
              <li>
                <span className="font-mono text-glow">3 · </span>
                Observation can preserve some structure while losing other structure.
              </li>
              <li>
                <span className="font-mono text-glow">4 · </span>
                Lost structure matters when it blocks a complete public account of the theory.
              </li>
              <li>
                <span className="font-mono text-glow">5 · </span>
                Shadow Theory develops rules for when missing structure can be completed and when it cannot.
              </li>
              <li>
                <span className="font-mono text-glow">6 · </span>
                The Everything Equation is the compact closure form of that architecture, not a slogan that one line replaces physics.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ================= CANONICAL STACK ================= */}
      <section aria-labelledby="stack-heading">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Canonical foundation</p>
            <h2 id="stack-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              The six-paper stack
            </h2>
            <p className="mt-2 max-w-2xl text-mute">
              The six papers build the theory from first principles: our observed world is treated as a structured shadow of source reality, and the framework develops the mathematics for what that shadow reveals, hides, and allows us to reconstruct.
            </p>
          </div>
          <Link href="/papers" className="shrink-0 text-sm font-medium text-glow hover:text-glow-strong">
            All papers →
          </Link>
        </div>
        <PaperChain papers={canonical} />
      </section>

      {/* ================= SYNTHESIS SCHEMA ================= */}
      <section aria-labelledby="schema-heading" className="mx-auto max-w-3xl">
        <div className="card-surface relative overflow-hidden px-6 py-8 text-center sm:px-10">
          <div
            aria-hidden="true"
            className="glow-violet pointer-events-none absolute -bottom-24 left-1/2 h-48 w-3/4 -translate-x-1/2"
          />
          <p className="section-label relative">Synthesis layer</p>
          <h2 id="schema-heading" className="relative mt-2 text-xl font-bold tracking-tight sm:text-2xl">
            The Everything Equation, from shorthand to typed form
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
            This was the broad public shorthand for the Everything Equation: a law becomes
            complete only after it passes through aperture, obstruction, and completion
            structure.
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
            the public Tier-1 completion/readout operator, not hidden source magic and not
            a universal solver. The equation keeps the original idea, but makes the claim
            precise: public laws close only through declared readout-facing machinery, with
            residues and statuses exposed.
          </p>

          <Link
            href="/framework#everything-equation"
            className="relative mt-5 inline-block text-sm font-medium text-glow hover:text-glow-strong"
          >
            How the equation is formulated →
          </Link>
        </div>
      </section>

      {/* ================= CLAIM BOUNDARY ================= */}
      <section aria-labelledby="boundary-heading" className="mx-auto max-w-3xl">
        <p className="section-label text-center">Framework position</p>
        <h2 id="boundary-heading" className="mt-2 text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Research scope and current status
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="card-surface border-l-4 border-l-[hsl(var(--green))] p-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-greenc">
              Research scope
            </p>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-fg/90">
              {site.claimBoundary.is.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="card-surface border-l-4 border-l-[hsl(var(--amber))] p-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-amberc">
              Current status
            </p>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-fg/90">
              {site.claimBoundary.isNot.map((line) => (
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
              Open problems
            </h2>
            <p className="mt-2 max-w-2xl text-mute">
              Downstream branch targets of the stack. Each is a research target with a
              declared claim boundary — none is presented as solved.
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
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      ) : null}

<<<<<<< HEAD
      {/* ================= OPEN PROBLEMS ================= */}
      <section aria-labelledby="problems-heading">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Research programme</p>
            <h2 id="problems-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Open problems
            </h2>
            <p className="mt-2 max-w-2xl text-mute">
              Downstream branch targets of the stack. Each is a research target with a
              declared claim boundary — none is presented as solved.
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

=======
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48
      {/* ================= FINAL CTA ================= */}
      <section className="mx-auto max-w-2xl pb-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Start at the beginning
        </h2>
        <p className="mt-3 text-mute">
          The stack is designed to be read in order. Paper 1 establishes the single
          distinction everything else builds on.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href={`/papers/${canonical[0]?.slug ?? "readout-non-equivalence"}`}
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
  );
}
