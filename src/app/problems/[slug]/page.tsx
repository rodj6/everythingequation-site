import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { loadProblems, loadPapers, getProblem } from "@/lib/registry";
import { site } from "@/config/site";
import MdxContent from "@/components/mdx-content";
import { manualProblems } from "@/generated/manualProblems";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const problems = await loadProblems();
  return problems.filter((p) => p.status === "public").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const problem = await getProblem(params.slug);
  if (!problem) return {};
  return {
    title: `${problem.title} (Open Problem)`,
    description: problem.target.trim(),
    alternates: { canonical: `/problems/${problem.slug}` },
  };
}

export default async function ProblemPage({ params }: { params: { slug: string } }) {
  const problem = await getProblem(params.slug);
  if (!problem || problem.status !== "public") notFound();

  const papers = await loadPapers();
  const supporting = papers.filter(
    (p) => p.status === "public" && p.supports.includes(problem.slug)
  );
  const loader = (manualProblems as Record<string, (() => Promise<any>) | undefined>)[problem.slug];

  return (
    <article className="mx-auto max-w-3xl">
      <header>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full border border-[hsl(var(--amber)/0.35)] bg-[hsl(var(--amber)/0.07)] px-2.5 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-wider text-amberc">
            Open problem
          </span>
          {problem.domain ? (
            <span className="font-mono text-[0.68rem] uppercase tracking-wider text-faint">
              {problem.domain}
            </span>
          ) : null}
        </div>
        <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
          {problem.title}
        </h1>
      </header>

      <section className="card-surface mt-6 border-l-4 border-l-[hsl(var(--amber))] px-5 py-4">
        <p className="m-0 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-amberc">
          Research target
        </p>
        <p className="mt-2 text-[0.97rem] leading-relaxed text-fg/90">
          {problem.target.trim()}
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-edge bg-surface px-5 py-4 text-sm leading-relaxed text-mute">
        <p className="m-0">
          <strong className="text-fg">Claim discipline.</strong> Within {site.name}, a
          result on this problem becomes public framework content only through its own
          public paper or record: declared assumptions and domain of validity,
          mathematical or empirical support appropriate to the claim, explicit
          limitations, and a clear claim boundary. Until such a record is published
          here, this page licenses no solved-problem claim.
        </p>
      </section>

      {loader && problem.legacyNotes ? (
        <aside className="mt-10 rounded-xl border border-[hsl(var(--amber)/0.35)] bg-[hsl(var(--amber)/0.06)] px-5 py-4 text-sm leading-relaxed text-fg/90">
          <p className="m-0 mb-1 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-amberc">
            Historical draft below
          </p>
          The notes that follow were written during the earlier Everything Equation /
          Tier-0 era of this programme. They are retained as a development trace. Their
          claims are <strong>not</strong> current Shadow Theory results and are
          superseded as authority by Papers 1–7.
        </aside>
      ) : null}

      {loader ? (
        <section className="mt-4">
          <MdxContent loader={loader} />
        </section>
      ) : null}

      {supporting.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Related historical papers</h2>
          <ul className="mt-3 space-y-2">
            {supporting.map((p) => (
              <li key={p.slug}>
                <Link href={`/papers/${p.slug}`} className="text-glow hover:text-glow-strong">
                  {p.displayTitle} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <nav className="mt-12 border-t border-edge pt-6">
        <Link href="/problems" className="text-sm font-medium text-glow hover:text-glow-strong">
          ← All open problems
        </Link>
      </nav>
    </article>
  );
}
