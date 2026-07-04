/**
 * CARD COMPONENTS — paper, problem, and article cards used across index pages.
 * Server-rendered; all text is crawlable HTML.
 */
import Link from "next/link";
import type { LoadedPaper, LoadedProblem } from "@/lib/registry";
import type { ArticleMeta } from "@/generated/articles";

const categoryBadge: Record<string, { label: string; cls: string }> = {
  canonical: {
    label: "Canonical",
    cls: "border-[hsl(var(--accent)/0.4)] bg-[hsl(var(--accent)/0.08)] text-glow",
  },
  branch: {
    label: "Branch",
    cls: "border-[hsl(var(--violet)/0.4)] bg-[hsl(var(--violet)/0.08)] text-vio",
  },
  historical: {
    label: "Historical",
    cls: "border-edge-strong bg-raised text-mute",
  },
};

export function Badge({ kind }: { kind: string }) {
  const b = categoryBadge[kind] ?? categoryBadge.historical;
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-wider ${b.cls}`}
    >
      {b.label}
    </span>
  );
}

export function PaperCard({ paper }: { paper: LoadedPaper }) {
  return (
    <article className="card-surface card-surface-hover relative flex h-full flex-col p-5">
      <div className="flex items-center gap-2">
        {paper.number ? (
          <span className="font-mono text-sm font-bold text-glow">
            {String(paper.number).padStart(2, "0")}
          </span>
        ) : null}
        <Badge kind={paper.category} />
        {paper.version ? (
          <span className="font-mono text-[0.68rem] text-faint">{paper.version}</span>
        ) : null}
      </div>
      <h3 className="mt-3 text-[1.02rem] font-semibold leading-snug text-fg">
        <Link href={`/papers/${paper.slug}`} className="after:absolute after:inset-0">
          {paper.displayTitle}
        </Link>
      </h3>
      {paper.role ? (
        <p className="mt-2 text-sm leading-relaxed text-mute">{paper.role}</p>
      ) : null}
      <div className="mt-auto pt-4 text-xs text-faint">
        {paper.doi ? (
          <span className="font-mono">DOI: {paper.doi}</span>
        ) : paper.category === "canonical" ? (
          <span>DOI pending Zenodo upload</span>
        ) : null}
      </div>
    </article>
  );
}

export function ProblemCard({ problem }: { problem: LoadedProblem }) {
  return (
    <article className="card-surface card-surface-hover relative flex h-full flex-col p-5">
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
      <h3 className="mt-3 text-[1.02rem] font-semibold leading-snug text-fg">
        <Link href={`/problems/${problem.slug}`} className="after:absolute after:inset-0">
          {problem.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mute">{problem.target}</p>
    </article>
  );
}

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="card-surface card-surface-hover relative flex h-full flex-col p-5">
      <div className="flex flex-wrap items-center gap-2 text-[0.68rem]">
        {article.date ? (
          <time dateTime={article.date} className="font-mono uppercase tracking-wider text-faint">
            {article.date}
          </time>
        ) : null}
        {article.tags.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-full border border-edge px-2 py-0.5 font-mono uppercase tracking-wider text-mute"
          >
            {t}
          </span>
        ))}
      </div>
      <h3 className="mt-3 text-[1.02rem] font-semibold leading-snug text-fg">
        <Link href={`/articles/${article.slug}`} className="after:absolute after:inset-0">
          {article.title}
        </Link>
      </h3>
      {article.description ? (
        <p className="mt-2 text-sm leading-relaxed text-mute">{article.description}</p>
      ) : null}
    </article>
  );
}
