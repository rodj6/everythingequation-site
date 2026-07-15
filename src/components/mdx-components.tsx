/**
 * MDX COMPONENT LIBRARY
 *
 * NOTE: this module is intentionally server-renderable (no "use client"),
 * so all MDX content ends up as real crawlable HTML.
 *
 * Every MDX file (articles, paper notes, problem notes, pages) is rendered
 * with these components. The lower half of this file defines the research
 * components you can use directly inside MDX:
 *
 *   <Definition title="...">...</Definition>
 *   <Theorem title="...">...</Theorem>
 *   <Lemma title="...">...</Lemma>
 *   <Proposition title="...">...</Proposition>
 *   <ProofSketch>...</ProofSketch>
 *   <Remark>...</Remark>
 *   <EquationPanel title="..." note="...">$$ ... $$</EquationPanel>
 *   <StatusCard status="..." route="..." residues="..." result="..." />
 *   <ResultScope>...</ResultScope>
 *
 * See ARTICLE_AUTHORING_GUIDE.md for examples.
 */
import * as React from "react";
import type { ComponentProps, ReactNode } from "react";

/* ---------------------------------------------------------------------------
 * Base HTML elements
 * ------------------------------------------------------------------------- */

export const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1 className="mt-12 mb-4 text-3xl font-bold tracking-tight text-fg" {...props} />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="mt-10 mb-3 border-b border-edge pb-2 text-2xl font-semibold tracking-tight text-fg"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="mt-8 mb-2 text-xl font-semibold text-fg" {...props} />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4 className="mt-6 mb-2 text-lg font-medium text-fg" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mt-4 text-base leading-relaxed text-fg/90" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="mt-4 list-disc space-y-1.5 pl-6 text-fg/90 marker:text-mute" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="mt-4 list-decimal space-y-1.5 pl-6 text-fg/90 marker:text-mute" {...props} />
  ),
  li: (props: ComponentProps<"li">) => <li className="leading-relaxed" {...props} />,
  a: (props: ComponentProps<"a">) => (
    <a
      className="text-glow underline decoration-1 underline-offset-2 hover:text-glow-strong"
      {...props}
    />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="rounded bg-raised px-1.5 py-0.5 font-mono text-[0.875em] text-fg"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="my-6 overflow-auto rounded-lg border border-edge bg-surface p-5 text-sm leading-relaxed text-fg [&>code]:rounded-none [&>code]:bg-transparent [&>code]:p-0"
      {...props}
    />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="my-6 border-l-[3px] border-[hsl(var(--accent)/0.5)] py-1 pl-5 italic text-mute [&>p]:mt-2 [&>p]:text-mute"
      {...props}
    />
  ),
  hr: (props: ComponentProps<"hr">) => <hr className="my-10 border-edge" {...props} />,
  table: (props: ComponentProps<"table">) => (
    <div className="my-6 overflow-auto rounded-lg border border-edge">
      <table className="w-full text-sm text-fg" {...props} />
    </div>
  ),
  th: (props: ComponentProps<"th">) => (
    <th
      className="border-b border-edge-strong bg-raised px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props: ComponentProps<"td">) => (
    <td className="border-b border-edge px-4 py-2.5" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-fg" {...props} />
  ),
  em: (props: ComponentProps<"em">) => <em className="italic" {...props} />,

  /* Research components exposed to MDX */
  Definition: (p: EnvProps) => <MathEnv kind="Definition" color="cyan" {...p} />,
  Theorem: (p: EnvProps) => <MathEnv kind="Theorem" color="violet" {...p} />,
  Lemma: (p: EnvProps) => <MathEnv kind="Lemma" color="violet" {...p} />,
  Proposition: (p: EnvProps) => <MathEnv kind="Proposition" color="violet" {...p} />,
  ProofSketch: (p: EnvProps) => <MathEnv kind="Proof sketch" color="muted" {...p} />,
  Remark: (p: EnvProps) => <MathEnv kind="Remark" color="muted" {...p} />,
  EquationPanel,
  StatusCard,
  ResultScope,
};

/* ---------------------------------------------------------------------------
 * Research components
 * ------------------------------------------------------------------------- */

interface EnvProps {
  title?: string;
  children?: ReactNode;
}

function MathEnv({
  kind,
  color,
  title,
  children,
}: EnvProps & { kind: string; color: "cyan" | "violet" | "muted" }) {
  const accent =
    color === "cyan"
      ? "border-l-[hsl(var(--accent))]"
      : color === "violet"
        ? "border-l-[hsl(var(--violet))]"
        : "border-l-[hsl(var(--border-strong))]";
  const label =
    color === "cyan" ? "text-glow" : color === "violet" ? "text-vio" : "text-mute";
  return (
    <section
      className={`card-surface math-environment my-6 border-l-4 ${accent} px-5 py-4 [&>p:first-of-type]:mt-2`}
      data-kind={kind.toLowerCase().replace(" ", "-")}
    >
      <p className={`m-0 font-mono text-xs font-semibold uppercase tracking-[0.15em] ${label}`}>
        {kind}
        {title ? <span className="normal-case tracking-normal text-fg">: {title}</span> : null}
      </p>
      <div className="text-[0.97rem]">{children}</div>
    </section>
  );
}

/** Luminous panel for display equations, with an optional contextual note. */
function EquationPanel({
  title,
  note,
  children,
}: {
  title?: string;
  note?: string;
  children?: ReactNode;
}) {
  return (
    <figure className="card-surface equation-panel relative my-8 overflow-hidden px-6 py-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 h-32 w-2/3 -translate-x-1/2 glow-cyan"
      />
      {title ? (
        <figcaption className="section-label relative mb-1">{title}</figcaption>
      ) : null}
      <div className="relative text-center [&_.katex-display]:my-2">{children}</div>
      {note ? (
        <p className="relative mt-2 border-t border-edge pt-3 text-center text-xs leading-relaxed text-mute">
          {note}
        </p>
      ) : null}
    </figure>
  );
}

/** Finite-state status card for research records. */
function StatusCard({
  status,
  route,
  residues,
  result,
  children,
}: {
  status?: string;
  route?: string;
  residues?: string;
  result?: string;
  children?: ReactNode;
}) {
  const rows: Array<[string, string | undefined]> = [
    ["Status", status],
    ["Route", route],
    ["Residues", residues],
    ["Established result", result],
  ];
  return (
    <aside className="card-surface my-6 px-5 py-4" aria-label="Status card">
      <p className="m-0 mb-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-greenc">
        Status card
      </p>
      <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
        {rows
          .filter(([, v]) => v)
          .map(([k, v]) => (
            <div key={k} className="flex flex-col">
              <dt className="text-xs uppercase tracking-wider text-faint">{k}</dt>
              <dd className="mt-0.5 font-mono text-[0.85rem] text-fg">{v}</dd>
            </div>
          ))}
      </dl>
      {children ? <div className="mt-3 text-sm text-mute">{children}</div> : null}
    </aside>
  );
}

/** Amber panel stating the exact scope of a result. */
function ResultScope({ children }: { children?: ReactNode }) {
  return (
    <aside
      className="my-6 rounded-xl border border-[hsl(var(--amber)/0.35)] bg-[hsl(var(--amber)/0.06)] px-5 py-4"
      aria-label="Result scope"
    >
      <p className="m-0 mb-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-amberc">
        Result scope
      </p>
      <div className="text-sm leading-relaxed text-fg/90 [&>p]:mt-2 [&>p:first-child]:mt-0">
        {children}
      </div>
    </aside>
  );
}

export interface MdxWrapperProps {
  children: React.ReactNode;
}

export function MdxWrapper({ children }: MdxWrapperProps) {
  return <React.Fragment>{children}</React.Fragment>;
}
