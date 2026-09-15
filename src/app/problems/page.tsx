import type { Metadata } from "next";
import Link from "next/link";
import { loadProblems } from "@/lib/registry";
import { ProblemCard } from "@/components/cards";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Research Status and Open Problems",
  description:
    "Research status across Shadow Theory: published quantum measurement constitutions, open branch targets, explicit assumptions, publication routes and historical notes.",
  alternates: { canonical: "/problems" },
};

export default async function ProblemsPage() {
  const problems = (await loadProblems()).filter((p) => p.status === "public");
  const featured = problems.filter((p) => p.programme === "featured");
  const additional = problems.filter((p) => p.programme === "additional");
  const legacy = problems.filter((p) => p.programme === "legacy");

  return (
    <div className="space-y-16">
      <header className="max-w-3xl">
        <p className="section-label">Research programme</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Research status &amp; open problems</h1>
        <p className="mt-4 text-lg leading-relaxed text-mute">
          These research programmes extend the seven-paper foundation into
          downstream branches. Each target identifies the question to resolve and the
          evidence a dedicated public paper must supply: declared assumptions and
          domain, a reproducible method, mathematical or empirical support, and a
          precise result.
        </p>
        <p className="mt-4 text-base leading-relaxed text-mute">The <Link href="/quantum-measurement" className="text-glow hover:text-glow-strong">Quantum Measurement programme</Link> now has published Version 2 constitutive results. Its internal conclusions, declared physical premises and remaining extensions are tracked separately.</p>
        <p className="mt-3 text-sm leading-relaxed text-faint">
          Pages may include earlier notes from the Everything Equation era; those are
          marked as historical drafts and retained as development context.
        </p>
      </header>

      <section aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="text-2xl font-bold tracking-tight">
          Featured programme
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProblemCard key={p.slug} problem={p} />
          ))}
        </div>
      </section>

      {additional.length > 0 ? (
        <section aria-labelledby="additional-heading">
          <h2 id="additional-heading" className="text-2xl font-bold tracking-tight">
            Further targets
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {additional.map((p) => (
              <ProblemCard key={p.slug} problem={p} />
            ))}
          </div>
        </section>
      ) : null}

      {legacy.length > 0 ? (
        <section aria-labelledby="legacy-heading">
          <h2 id="legacy-heading" className="text-xl font-bold tracking-tight text-mute">
            Legacy archive
          </h2>
          <ul className="mt-4 space-y-2">
            {legacy.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/problems/${p.slug}`}
                  className="text-sm text-mute underline decoration-1 underline-offset-2 hover:text-fg"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
