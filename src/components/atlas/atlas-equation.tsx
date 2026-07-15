"use client";

import { useMemo } from "react";
import katex from "katex";
import type { AtlasEquation } from "@/data/reality-atlas";

export default function AtlasEquationCard({
  equation,
  compact = false,
}: {
  equation: AtlasEquation;
  compact?: boolean;
}) {
  const html = useMemo(
    () =>
      katex.renderToString(equation.tex, {
        displayMode: true,
        throwOnError: false,
        strict: "ignore",
        trust: false,
      }),
    [equation.tex],
  );

  return (
    <article className={`atlas-equation-card ${compact ? "is-compact" : ""}`}>
      <header>
        <span>{equation.title}</span>
        <code>{equation.tag}</code>
      </header>
      <div
        className="atlas-equation-render"
        dangerouslySetInnerHTML={{ __html: html }}
        role="math"
        tabIndex={0}
        aria-label={`${equation.title}, equation ${equation.tag}`}
      />
      <p>{equation.interpretation}</p>
    </article>
  );
}
