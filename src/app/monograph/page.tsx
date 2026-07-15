import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import {
  listMonographItems,
  monographParts,
  monographTotals,
  monographCitation,
} from "@/lib/monograph";

export const dynamic = "force-static";

const m = site.monograph;

export const metadata: Metadata = {
  title: `The Monograph: ${m.title}`,
  description: `Complete web edition of “${m.title}: ${m.subtitle}” (Version ${m.version}, ${m.published}), the Shadow Theory monograph. DOI ${m.doi}. All 18 chapters, both appendices, and the bibliography as crawlable HTML.`,
  alternates: { canonical: "/monograph" },
  keywords: [...m.keywords],
  openGraph: {
    type: "book",
    title: m.title,
    description: `${m.subtitle}. Version ${m.version}, ${m.published}. DOI ${m.doi}.`,
    url: `${site.url}/monograph`,
  },
};

/** Verbatim Version 1.0 front matter (source: Zenodo record ${m.doi}). */
const ABSTRACT = [
  "Shadow Theory proposes that familiar mathematical physics is a compatible Tier-1 readout of an admissible source realization rather than a literal description of source ontology. The construction separates source-local closure, realization support, raw physical construction and physical compatibility, and then develops their quantum, relativistic-field, record, geometric, gravitational, matter, cosmological, temporal and observer consequences. Quantum probabilities are distinguished from contextual outcome selection, actual deposition and objective persistence. Objective records determine an intervention-sensitive pregeometry from which metric structure is reconstructed as a possibly nonunique family, while gravitational dynamics follows from a covariant effective action. The same realized branch supports gauge matter, parameter evolution, cosmological backgrounds and perturbations, temporal orientation and structural observer readout. Compatibility is imposed through explicit common comparison objects rather than by treating quantum field theory and general relativity as independently ultimate theories. The monograph fixes the architecture, equations, interfaces, correspondence limits and observable routes; the associated existence, uniqueness, selection and global-compatibility proofs are organized as nine companion theorem programmes.",
  "The claim is architectural and physical. The work does not assume that every admitted source has a successful readout, does not claim that the Standard Model or its parameters have already been uniquely derived, and does not identify structural observer organization with a completed theory of consciousness. It supplies the mathematical objects and physical connections from which those questions can be pursued without redefining the theory.",
];

const ORGANIZATION =
  "Chapters 1–3 introduce the source/readout distinction, the source-local closure law and the realization map. Chapters 4–8 develop the mathematical conventions, quantum and relativistic-field sectors, measurement and objective records, pregeometry, gravitation and their bridge. Chapters 9–13 treat matter, flavour, parameters, cosmology, dark components and vacuum response. Chapters 14 and 15 develop temporal orientation and structural observer readout. Chapter 16 assembles the physical sectors and follows one complete route to a weak-lensing observable. Chapter 17 states the nine companion theorem programmes, and Chapter 18 gives the scientific tests, limitations and open problems.";

export default function MonographPage() {
  const items = listMonographItems();
  const chapters = items.filter((i) => i.kind === "chapter");
  const appendices = items.filter((i) => i.kind === "appendix");
  const bibliography = items.find((i) => i.kind === "bibliography");
  const totals = monographTotals();
  const first = items[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: m.title,
    alternateName: `${m.title}: ${m.subtitle}`,
    abstract: ABSTRACT.join(" "),
    author: {
      "@type": "Person",
      name: site.author.name,
      affiliation: site.author.affiliation,
    },
    bookEdition: `Version ${m.version}`,
    datePublished: m.webDate,
    inLanguage: "en",
    identifier: `https://doi.org/${m.doi}`,
    sameAs: [m.doiUrl, m.zenodoUrl],
    license: m.licenseUrl,
    keywords: m.keywords.join(", "),
    url: `${site.url}/monograph`,
    numberOfPages: undefined,
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    hasPart: items.map((i) => ({
      "@type": "Chapter",
      name: i.label ? `${i.label}: ${i.title}` : i.title,
      position: i.order,
      url: `${site.url}/monograph/${i.slug}`,
    })),
  };

  return (
    <div className="space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HEADER ================= */}
      <header className="mx-auto max-w-3xl text-center">
        <p className="section-label">The Monograph · Version {m.version} · {m.published}</p>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          <span className="text-luminous">{m.title}</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-mute sm:text-xl">{m.subtitle}</p>
        <p className="mt-4 text-sm text-mute">
          {site.author.name} · {site.author.affiliation}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
          <a
            href={m.doiUrl}
            className="rounded-full border border-edge-strong px-3 py-1 font-mono text-glow hover:border-[hsl(var(--accent)/0.5)]"
          >
            doi:{m.doi}
          </a>
          <a
            href={m.zenodoUrl}
            className="rounded-full border border-edge px-3 py-1 font-mono text-mute hover:text-fg"
          >
            Zenodo record · PDF
          </a>
          <a
            href={m.licenseUrl}
            className="rounded-full border border-edge px-3 py-1 font-mono text-mute hover:text-fg"
          >
            {m.license}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/monograph/${first.slug}`}
            className="rounded-lg bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--background))] transition hover:bg-[hsl(var(--accent-strong))]"
          >
            Start reading · Chapter 1
          </Link>
          <a
            href="#contents"
            className="rounded-lg border border-edge-strong px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-[hsl(var(--accent)/0.5)] hover:text-glow-strong"
          >
            Table of contents
          </a>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-faint">
          This page and its {items.length} linked parts are the complete web edition of the
          fixed Version {m.version} publication: every chapter, equation, table, appendix
          and reference of the Zenodo record, as crawlable HTML. The{" "}
          <a href={m.zenodoUrl} className="underline hover:text-fg">
            Zenodo record
          </a>{" "}
          is the canonical citable publication.
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-5" aria-label="Monograph contents at a glance">
          {[
            [totals.chapters, "chapters"],
            [totals.sections, "sections"],
            [totals.numberedEquations, "equations"],
            [totals.tables, "tables"],
            [totals.bibliographyEntries, "references"],
          ].map(([value, label]) => (
            <div key={label} className="monograph-stat rounded-lg border border-edge bg-[hsl(var(--surface)/0.58)] px-3 py-3">
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-faint">{label}</dt>
              <dd className="mt-1 font-mono text-lg font-semibold text-glow">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* ================= POSITION IN THE PROGRAMME ================= */}
      <section aria-labelledby="position-heading" className="mx-auto max-w-3xl">
        <div className="card-surface px-6 py-6 sm:px-8">
          <p className="section-label">Where this sits in Shadow Theory</p>
          <h2 id="position-heading" className="sr-only">
            Where this sits in Shadow Theory
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-fg/90">
            The <Link href="/papers" className="text-glow underline decoration-1 underline-offset-2">seven canonical papers</Link>{" "}
            fix the public Shadow Theory framework: source–readout non-equivalence,
            target-relative obstruction, canonical minimal completion, geometric
            realization, projected dynamics, internal identifiability, and the
            Randall–Sundrum physical witness. The monograph is the programme's broader
            source-to-readout architecture for a Theory of Everything: one source object,
            one realization map, and coupled quantum, record, geometric, gravitational,
            matter, cosmological, temporal and observer readouts. It is a fixed Version
            1.0 publication, completed before the seven-paper sequence; its text is
            unchanged by it. From here the research
            programme proceeds into the nine{" "}
            <Link
              href="/monograph/the-companion-theorem-programme"
              className="text-glow underline decoration-1 underline-offset-2"
            >
              companion theorem programmes
            </Link>{" "}
            (Chapter 17) and the{" "}
            <Link href="/problems" className="text-glow underline decoration-1 underline-offset-2">
              open problems
            </Link>
            . The scientific tests, limitations, and research programme are stated in{" "}
            <Link
              href="/monograph/scientific-scope-tests-and-open-problems"
              className="text-glow underline decoration-1 underline-offset-2"
            >
              Chapter 18
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ================= ABSTRACT ================= */}
      <section aria-labelledby="abstract-heading" className="mx-auto max-w-3xl">
        <h2 id="abstract-heading" className="text-2xl font-bold tracking-tight">
          Abstract
        </h2>
        {ABSTRACT.map((p, i) => (
          <p key={i} className="mt-4 leading-relaxed text-fg/90">
            {p}
          </p>
        ))}
      </section>

      {/* ================= ORGANIZATION ================= */}
      <section aria-labelledby="organization-heading" className="mx-auto max-w-3xl">
        <h2 id="organization-heading" className="text-2xl font-bold tracking-tight">
          Organization
        </h2>
        <p className="mt-4 leading-relaxed text-fg/90">{ORGANIZATION}</p>
        <p className="mt-4 text-sm text-mute">
          In numbers: {totals.chapters} chapters in {totals.parts} parts,{" "}
          {totals.appendices} appendices, {totals.sections} numbered sections,{" "}
          {totals.numberedEquations} numbered equations, {totals.tables} tables and{" "}
          {totals.bibliographyEntries} bibliography entries.
        </p>
      </section>

      {/* ================= CONTENTS ================= */}
      <section aria-labelledby="contents-heading" id="contents" className="mx-auto max-w-3xl scroll-mt-24">
        <h2 id="contents-heading" className="text-2xl font-bold tracking-tight">
          Table of contents
        </h2>

        <nav aria-label="Monograph contents" className="mt-6 space-y-10">
          {monographParts.map((part) => (
            <div key={part.number}>
              <p className="section-label">Part {part.numeral}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{part.title}</h3>
              {part.intro ? (
                <p className="mt-2 text-sm leading-relaxed text-mute">{part.intro}</p>
              ) : null}
              <ol className="mt-4 space-y-4">
                {chapters
                  .filter((c) => c.part === part.number)
                  .map((c) => (
                    <li key={c.slug} className="card-surface card-surface-hover px-5 py-4">
                      <Link href={`/monograph/${c.slug}`} className="group block">
                        <span className="font-mono text-xs uppercase tracking-[0.15em] text-glow">
                          Chapter {c.number}
                        </span>
                        <span className="mt-1 block text-base font-semibold text-fg group-hover:text-glow-strong">
                          {c.title}
                        </span>
                      </Link>
                      {c.sections.length > 0 ? (
                        <ol className="mt-3 grid gap-x-6 gap-y-1 text-[0.83rem] leading-snug text-mute sm:grid-cols-2">
                          {c.sections.map((s) => (
                            <li key={s.anchor}>
                              <Link
                                href={`/monograph/${c.slug}#${s.anchor}`}
                                className="hover:text-fg"
                              >
                                <span className="font-mono text-faint">{s.number}</span>{" "}
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      ) : null}
                    </li>
                  ))}
              </ol>
            </div>
          ))}

          <div>
            <p className="section-label">Back matter</p>
            <ol className="mt-4 space-y-4">
              {appendices.map((a) => (
                <li key={a.slug} className="card-surface card-surface-hover px-5 py-4">
                  <Link href={`/monograph/${a.slug}`} className="group block">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-vio">
                      Appendix {a.number}
                    </span>
                    <span className="mt-1 block text-base font-semibold text-fg group-hover:text-glow-strong">
                      {a.title}
                    </span>
                  </Link>
                  {a.sections.length > 0 ? (
                    <ol className="mt-3 grid gap-x-6 gap-y-1 text-[0.83rem] leading-snug text-mute sm:grid-cols-2">
                      {a.sections.map((s) => (
                        <li key={s.anchor}>
                          <Link href={`/monograph/${a.slug}#${s.anchor}`} className="hover:text-fg">
                            <span className="font-mono text-faint">{s.number}</span> {s.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </li>
              ))}
              {bibliography ? (
                <li className="card-surface card-surface-hover px-5 py-4">
                  <Link href={`/monograph/${bibliography.slug}`} className="group block">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-amberc">
                      Bibliography
                    </span>
                    <span className="mt-1 block text-base font-semibold text-fg group-hover:text-glow-strong">
                      {bibliography.stats.bibliographyEntries} external references
                    </span>
                  </Link>
                </li>
              ) : null}
            </ol>
          </div>
        </nav>
      </section>

      {/* ================= CITE ================= */}
      <section aria-labelledby="cite-heading" className="mx-auto max-w-3xl">
        <div className="card-surface px-6 py-6 sm:px-8">
          <p className="section-label">How to cite</p>
          <h2 id="cite-heading" className="sr-only">
            How to cite
          </h2>
          <p className="mt-3 font-mono text-[0.85rem] leading-relaxed text-fg/90">
            {monographCitation()}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-mute">
            Cite the Zenodo Version {m.version} record ({" "}
            <a href={m.doiUrl} className="underline hover:text-fg">
              {m.doiUrl}
            </a>{" "}
            ). This web edition presents the same work; a machine-readable inventory of
            every part of it is published at{" "}
            <a href="/monograph/manifest.json" className="underline hover:text-fg">
              /monograph/manifest.json
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
