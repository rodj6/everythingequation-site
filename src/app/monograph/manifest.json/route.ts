/**
 * /monograph/manifest.json — machine-readable inventory of the complete
 * monograph web edition. Lets an AI system, agent, or crawler determine that
 * it has located every component of the work, in order, with per-item stats.
 * Generated at build time from the same metadata as the human-facing pages.
 */
import { site } from "@/config/site";
import {
  listMonographItems,
  monographParts,
  monographTotals,
  monographCitation,
} from "@/lib/monograph";

export const dynamic = "force-static";

export async function GET() {
  const m = site.monograph;
  const items = listMonographItems();
  const totals = monographTotals();

  const manifest = {
    schema: "shadow-theory/monograph-manifest/v1",
    work: {
      type: "monograph",
      title: m.title,
      subtitle: m.subtitle,
      author: {
        name: site.author.name,
        affiliation: site.author.affiliation,
      },
      version: m.version,
      published: m.published,
      doi: m.doi,
      doiUrl: m.doiUrl,
      zenodoRecord: m.zenodoUrl,
      license: m.license,
      licenseUrl: m.licenseUrl,
      citation: monographCitation(),
      canonicalWebEdition: `${site.url}/monograph`,
    },
    completeness: {
      statement:
        "The reading_order below enumerates the complete web edition of the fixed Version " +
        m.version +
        " publication: all 18 chapters, both appendices (A and B), and the full bibliography. Every numbered section, numbered equation, table, and reference of the Zenodo record is present in the linked HTML pages; the mathematics is server-rendered KaTeX with the TeX source embedded in annotation elements. The Zenodo record is the canonical citable publication of the same text.",
      totals: {
        parts: totals.parts,
        chapters: totals.chapters,
        appendices: totals.appendices,
        numberedSections: totals.sections,
        numberedEquations: totals.numberedEquations,
        displayEquations: totals.displayEquations,
        tables: totals.tables,
        bibliographyEntries: totals.bibliographyEntries,
      },
    },
    parts: monographParts.map((p) => ({
      number: p.number,
      numeral: p.numeral,
      title: p.title,
    })),
    reading_order: items.map((i) => ({
      order: i.order,
      kind: i.kind,
      number: i.number || null,
      label: i.label || null,
      part: i.part,
      title: i.title,
      url: `${site.url}/monograph/${i.slug}`,
      sections: i.sections.map((s) => ({
        number: s.number,
        title: s.title,
        url: `${site.url}/monograph/${i.slug}#${s.anchor}`,
      })),
      stats: i.stats,
    })),
    related: {
      hub: `${site.url}/monograph`,
      canonicalPapers: `${site.url}/papers`,
      openProblems: `${site.url}/problems`,
      researchGraph: `${site.url}/graph.json`,
      sitemap: `${site.url}/sitemap.xml`,
      llms: `${site.url}/llms.txt`,
    },
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
