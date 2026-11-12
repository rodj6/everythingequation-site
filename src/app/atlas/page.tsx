import ShadowModelOverview from '@/components/shadow-model-overview';
import Link from 'next/link';
import type { Metadata } from "next";
import AtlasExperience from "@/components/atlas/atlas-experience";
import AtlasIndex from "@/components/atlas/atlas-index";
import AtlasPictureNote from "@/components/atlas/atlas-picture-note";
import AtlasViewSections from "@/components/atlas/atlas-view-sections";
import { StatusLegend } from "@/components/atlas/atlas-status";
import { atlasStats } from "@/data/reality-atlas";
import { site } from "@/config/site";

const description =
  "Explore the source-to-readout architecture as one instrument: source, law, aperture, canonical field and readout, with the foundation papers, the Quantum Measurement programme, gravity and consciousness research placed on it. Every entry states whether it is proved, conditional, a construction, an interpretation or open.";
const atlasUrl = new URL("/atlas", site.url).toString();

export const metadata: Metadata = {
  title: "The Reality Atlas",
  description,
  keywords: [
    "Reality Atlas",
    "Shadow Theory",
    "source-to-observable architecture",
    "emergent spacetime",
    "quantum gravity",
    "mathematical physics",
    "Quantum Measurement",
    "Born rule",
    "pilot medium",
    "massive configuration",
    "canonical spectral-curvature field",
    "recursive aperture",
  ],
  alternates: { canonical: "/atlas" },
  openGraph: {
    title: "The Reality Atlas | Shadow Theory",
    description,
    type: "website",
    url: "/atlas",
  },
  twitter: {
    card: "summary",
    title: "The Reality Atlas | Shadow Theory",
    description,
  },
};

const atlasJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "The Reality Atlas",
  url: atlasUrl,
  description,
  applicationCategory: "ScienceApplication",
  operatingSystem: "Any modern web browser",
  isAccessibleForFree: true,
  author: { "@type": "Person", name: site.author.name },
  isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  about: [
    "source-to-observable projection",
    "recursive aperture selection",
    "canonical spectral-curvature field",
    "quantum records",
    "emergent spacetime and gravity",
    "matter and gauge structure",
    "cosmology and temporal orientation",
    "localized perspectives",
  ],
};

export const dynamic = "force-static";

export default function AtlasPage() {
  return (
    <div className="page-bleed atlas-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(atlasJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <AtlasExperience />

      <div className="atlas-below">
        <section className="atlas-reading-note" aria-labelledby="atlas-reading-heading">
          <div>
            <p className="section-label">Reading the instrument</p>
            <h2 id="atlas-reading-heading">The theory, part by part</h2>
            <p className="atlas-reading-lead">
              The Atlas begins at Ω, a mathematically defined formation package, and follows the construction through to
              the physical readout. The unconditioned ground of the wider model comes before Ω and is left unspecified.{" "}
              <Link href="/sealed-or-leaky">Sealed or Leaky</Link> takes up the question the second probe raises: how much
              of a source a readout can be made to give up.
            </p>
            <p className="atlas-reading-lead">
              The instrument has three views. The whole bench shows the order of dependence. Two more look at the readout
              plate: <a href="#boundary">Boundary</a> reads the rim as boundary data, and{" "}
              <a href="#history">History</a> shows an observer inside a physical history.
            </p>
            <p className="atlas-note-links">
              <Link href="/atlas/quantum-measurement">Field guide: Quantum Measurement in the Atlas →</Link>
              <Link href="/articles/full-shadow-model">The full model, beginning to end →</Link>
            </p>
          </div>
          <AtlasPictureNote />
        </section>

        <AtlasViewSections />

        <AtlasIndex />

        <section className="atlas-status-key" aria-labelledby="atlas-status-heading">
          <p className="section-label">Status</p>
          <h2 id="atlas-status-heading">What each status means</h2>
          <StatusLegend counts={atlasStats.statusCounts} />
        </section>

        <div className="atlas-model">
          <ShadowModelOverview compact />
        </div>
      </div>
    </div>
  );
}
