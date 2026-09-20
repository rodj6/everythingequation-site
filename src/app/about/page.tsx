import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Shadow Theory and Jeremy Rodgers, Independent Researcher: the source–readout foundation, Quantum Measurement, SPC-2 consciousness, TOE monograph and publication status.",
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
            simple observation with consequences: bounded descriptions such as measurements,
            macrostates, summaries, and public presentations are <em>readouts</em> of richer
            structure, and an exact readout is not the same thing as the structure it
            summarizes.
          </p>
          <p>
            From that starting point, the framework develops a disciplined sequence: when
            does readout loss actually obstruct a nominated question; what must any
            sufficient completion retain, and what is the canonical minimal one; when is
            a completion realized by genuine geometry; when do observable dynamics close
            autonomously, and at what exact price when they do not; and what can an
            internal observer ever identify. The first six canonical papers prove
            these mathematical steps. Paper 7 realizes the whole architecture in
            Randall–Sundrum gravity as a concrete physical witness.
          </p>
          <p>
            This site is the framework's public home. It hosts the canonical papers, the
            complete TOE monograph, the Quantum Measurement programme, the SPC-2 consciousness account, open problems,
            research articles, and the machine-readable research
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

      <section aria-labelledby="measurement-publications-heading">
        <h2 id="measurement-publications-heading" className="text-2xl font-bold tracking-tight">The Quantum Measurement publications</h2>
        <p className="mt-4 leading-relaxed text-fg/90">Published on 15 September 2026, the Version 2 integrated monograph and two companion papers develop the programme from source dynamics to event laws, Born statistics and physical records. Their full text, proofs, counterexamples, original PDFs and LaTeX sources are available here.</p>
        <p className="mt-4 leading-relaxed text-mute">The pilot-medium and massive-configuration constructions each establish an internal resolution under their own physical premises. Source/readout incompleteness supplies a structural question; it does not derive their interactions, guidance or preparation statistics. The publications state finite-resource limits and broader extensions. Independent assessment and experimental verification are distinct from these internal results.</p>
        <Link href="/quantum-measurement" className="mt-5 inline-block text-sm font-medium text-glow hover:text-glow-strong">Read the programme and its publications →</Link>
      </section>

      <section aria-labelledby="consciousness-publication-heading">
        <h2 id="consciousness-publication-heading" className="text-2xl font-bold tracking-tight">The consciousness publication</h2>
        <p className="mt-4 leading-relaxed text-fg/90">Shadow Theory and Consciousness, Version 2, dated 20 September 2026, develops the Shadow Psychophysical Constitution (SPC-2). It proposes explicit laws for perspective admission, lived content and process continuation, and a finite completion theorem conditional on certified realization, a declared selection doctrine and the stated constitutive premises.</p>
        <p className="mt-4 leading-relaxed text-mute">The current edition supersedes the earlier Consciousness Field account. Historical fixed-point and EEG claims remain provenance, not validation of SPC-2. Biological interpretation and empirical assessment remain open obligations; current AI systems are not certified by the monograph.</p>
        <Link href="/consciousness" className="mt-5 inline-block text-sm font-medium text-glow hover:text-glow-strong">Explore consciousness and the complete publication →</Link>
      </section>

      <section aria-labelledby="status-heading">
        <h2 id="status-heading" className="text-2xl font-bold tracking-tight">
          Publication status
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-fg/90">
          <p>
            The canonical papers are public framework papers by an independent
            researcher. Every canonical paper has a Zenodo record and DOI linked directly
            from its page. Publication, peer review, empirical testing, and subsequent
            expert assessment remain distinct records in the research lifecycle.
          </p>
          <p>
            The current canonical sequence (Papers 1–7, published 2026-07-15) replaced
            an earlier six-paper canonical stack from June 2026; those records remain
            published and are listed as superseded canonical versions. The historical
            archive, covering the earlier Everything Equation / Tier-0 era, also remains
            available for the record. Both are superseded as controlling public
            authority by Papers 1–7.
          </p>
        </div>
      </section>

      <section aria-labelledby="position-heading">
        <h2 id="position-heading" className="text-2xl font-bold tracking-tight">
          Research position
        </h2>
        <p className="mt-4 leading-relaxed text-mute">
          The programme distinguishes established results from the next stages of research.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
