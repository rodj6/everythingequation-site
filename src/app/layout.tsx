import "./globals.css";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { site } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.author.name }],
  alternates: {
    canonical: "/",
    types: { "application/atom+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.tagline}`,
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
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Ambient background */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
          <div className="glow-cyan animate-drift absolute -left-[15%] -top-[25%] h-[720px] w-[720px] rounded-full" />
          <div className="glow-violet animate-drift-reverse absolute -right-[18%] top-[10%] h-[640px] w-[640px] rounded-full" />
        </div>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-fg"
        >
          Skip to content
        </a>

        <Header />
        <main id="main" className="mx-auto w-full max-w-content flex-1 px-4 pb-8 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
