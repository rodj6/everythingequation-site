import KeepExploring from "@/components/threads";
import {continuityNote} from '@/lib/continuity-note';
import "./globals.css";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { site } from "@/config/site";
import { consciousnessPublication } from "@/config/consciousness";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.author.name }],
  keywords: ["continuity preference", "conscious scaffolding", "relational awareness", "relational appearance", "AI alignment", "AI consciousness", "reflective alignment", "Shadow Theory", "consciousness", "SPC-2", "subject continuity", "quantum measurement", "Born rule", "pilot medium", "Bell process", "massive configuration", "source readout", "mathematical physics"],
  alternates: {
    canonical: "/",
    types: { "application/atom+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary",
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  hasPart: [
    { "@type": "ScholarlyArticle", name: continuityNote.title, url: `${site.url}${continuityNote.url}`, sameAs: continuityNote.doiUrl },
    { "@type": "ScholarlyArticle", name: "From Physical Comparison to Relational Appearance: A Defeasible Current-Act Account", url: `${site.url}/consciousness/relational-awareness`, sameAs: "https://doi.org/10.5281/zenodo.23408737" },
    { "@type": "ScholarlyArticle", name: "Reflective Alignment and AI Consciousness", url: `${site.url}/consciousness/ai-alignment`, sameAs: "https://doi.org/10.5281/zenodo.23294465" },
    { "@type": "CollectionPage", name: "Quantum Measurement and the Born Rule", url: `${site.url}/quantum-measurement` },
    { "@type": "CollectionPage", name: "Shadow Theory and Consciousness", url: `${site.url}/consciousness` },
    { "@type": "Book", name: consciousnessPublication.title, version: consciousnessPublication.version, url: `${site.url}${consciousnessPublication.webUrl}`, sameAs: consciousnessPublication.doiUrl },
    { "@type": "Book", name: site.monograph.title, url: `${site.url}/monograph` },
  ],
  author: {
    "@type": "Person",
    name: site.author.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* The two faces every page needs first; the rest load on demand. */}
        <link rel="preload" href="/fonts/v1/ibm-plex-sans-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/v1/source-serif-4-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-fg"
        >
          Skip to content
        </a>

        {/* Depth behind every page: two soft lights and a few fixed stars. Decoration only. */}
        <div className="site-atmosphere" aria-hidden="true" />

        <Header />
        <main id="main" className="mx-auto w-full max-w-content flex-1 px-4 pb-8 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          {children}
        </main>
        <KeepExploring />
        <Footer />
      </body>
    </html>
  );
}
