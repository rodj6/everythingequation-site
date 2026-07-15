import type { Metadata } from "next";
import AtlasExperience from "@/components/atlas/atlas-experience";
import { site } from "@/config/site";

const description =
  "An interactive, multiscale atlas of the Ω-to-Tier-1 construction: source substrate, recursive aperture, canonical field, quantum records, spacetime, gravity, matter, constants, cosmology, time and observers.";
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
    "quantum records",
    "emergent spacetime and gravity",
    "matter and gauge structure",
    "cosmology and temporal orientation",
  ],
};

export const dynamic = "force-static";

export default function AtlasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(atlasJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="atlas-page-shell">
        <AtlasExperience />
      </div>
    </>
  );
}
