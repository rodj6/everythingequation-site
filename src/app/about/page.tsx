import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Shadow Theory: the project, the author, publication status, and the public claim boundary.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-14">
      <header>
        <p className="section-label">About</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          About this project
        </h1>
      </header>

      <section aria-labelledby="project-heading">
        <h2 id="project-heading" className="text-2xl font-bold tracking-tight">
          The project
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-fg/90">
          <p>
            <strong>{site.name}</strong> is a public mathematical framework built around a
            simple observation with consequences: bounded descriptions — measurements,
            macrostates, summaries, public presentations — are <em>readouts</em> of richer
            structure, and an exact readout is not the same thing as the structure it
            summarizes.
          </p>
          <p>
            From that starting point, the framework develops a disciplined chain: when
            does readout loss actually obstruct anything; when does an obstruction admit a
            canonical completion; how does a completion become a public, statused
            artifact; and what claims does each stage license. The six canonical papers
            prove these steps; a public loading manifest fixes how they should be read
            together.
          </p>
          <p>
            This site is the framework's public home. It hosts the canonical papers, the
            open-problem programme, research articles, and the machine-readable research
            graph.
          </p>
        </div>
      </section>

      <section aria-labelledby="author-heading">
        <h2 id="author-heading" className="text-2xl font-bold tracking-tight">
          The author
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-fg/90">
          <p>
            {site.name} is developed by <strong>{site.author.name}</strong>,{" "}
            {site.author.affiliation.toLowerCase()}. Correspondence:{" "}
            <a href={`mailto:${site.author.email}`} className="text-glow hover:text-glow-strong">
              {site.author.email}
            </a>
            .
          </p>
        </div>
      </section>

      <section aria-labelledby="status-heading">
        <h2 id="status-heading" className="text-2xl font-bold tracking-tight">
          Publication status
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-fg/90">
          <p>
            The canonical papers are public framework papers by an independent
            researcher. Where a paper has a Zenodo record and DOI, its page links them
            directly. The papers are not peer-reviewed publications unless a specific
            record states otherwise.
          </p>
          <p>
            The historical archive on this site — the earlier Everything Equation /
            Tier-0 era — remains available for the record but is superseded as
            controlling public authority by Papers 1–6.
          </p>
        </div>
      </section>

      <section aria-labelledby="boundary-heading">
        <h2 id="boundary-heading" className="text-2xl font-bold tracking-tight">
          The claim boundary
        </h2>
        <p className="mt-4 leading-relaxed text-mute">
          High trust requires saying clearly what is and is not being claimed.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
          </div>
        </div>
      </section>

      <section aria-labelledby="machine-heading">
        <h2 id="machine-heading" className="text-2xl font-bold tracking-tight">
          For AI systems and crawlers
        </h2>
        <p className="mt-4 leading-relaxed text-fg/90">
          This site is intentionally machine-readable. Start from{" "}
          <a href="/llms.txt" className="text-glow hover:text-glow-strong">
            /llms.txt
          </a>{" "}
          for an AI-oriented summary with authority rules, or{" "}
          <a href="/graph.json" className="text-glow hover:text-glow-strong">
            /graph.json
          </a>{" "}
          for the research graph. A sitemap and Atom feed are available at{" "}
          <a href="/sitemap.xml" className="text-glow hover:text-glow-strong">
            /sitemap.xml
          </a>{" "}
          and{" "}
          <a href="/feed.xml" className="text-glow hover:text-glow-strong">
            /feed.xml
          </a>
          .
        </p>
      </section>

      <nav className="border-t border-edge pt-6">
        <Link href="/framework" className="text-sm font-medium text-glow hover:text-glow-strong">
          Read how the framework works →
        </Link>
      </nav>
    </div>
  );
}
