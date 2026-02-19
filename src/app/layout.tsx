import "./globals.css";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Everything Equation",
  description: "A curated platform for research problems and papers.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] antialiased">
        {/* Subtle background accents */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[40%] -left-[20%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.06),transparent)]" />
          <div className="absolute -top-[30%] -right-[20%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.04),transparent)]" />
        </div>

        <div className="relative min-h-screen flex flex-col">
          {/* Mobile-only nav bar (fixes "no navigation on phone") */}
          <div className="md:hidden sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800/60 bg-[hsl(var(--background))]/90 backdrop-blur">
            <div className="mx-auto w-full max-w-3xl px-4 py-3 flex items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight">
                Everything Equation
              </Link>

              <details className="group">
                <summary className="list-none cursor-pointer rounded-md border border-slate-300/70 dark:border-slate-700/70 px-3 py-1.5 text-sm">
                  Menu
                </summary>
                <div className="mt-2 w-[240px] rounded-lg border border-slate-200 dark:border-slate-800 bg-[hsl(var(--background))] shadow-lg p-2">
                  <nav className="flex flex-col gap-1 text-sm">
                    <Link className="rounded-md px-2 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800" href="/">
                      Home
                    </Link>
                    <Link className="rounded-md px-2 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800" href="/problems">
                      Problems
                    </Link>
                    <Link className="rounded-md px-2 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800" href="/papers">
                      Papers
                    </Link>
                    <Link className="rounded-md px-2 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800" href="/monograph">
                      Monograph
                    </Link>
                    <Link className="rounded-md px-2 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800" href="/research">
                      Research
                    </Link>
                    <Link className="rounded-md px-2 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800" href="/about">
                      About
                    </Link>
                  </nav>
                </div>
              </details>
            </div>
          </div>

          {/* Desktop / existing header */}
          <Header />

          <main className="flex-1 mx-auto w-full max-w-3xl px-6 sm:px-8 py-12 sm:py-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
