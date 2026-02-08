"use client";
import * as React from "react";
import { mdxComponents } from "@/components/mdx-components";
import ManualComponent from "../../content/manual/pages/monograph.mdx";

const proseStyles = [
  "prose dark:prose-invert max-w-none",
  // Base typography
  "prose-base leading-relaxed",
  // Typography colors
  "[--tw-prose-body:hsl(var(--foreground))]",
  "[--tw-prose-headings:hsl(var(--foreground))]",
  "[--tw-prose-lead:hsl(var(--muted-foreground))]",
  "[--tw-prose-links:hsl(var(--primary))]",
  "[--tw-prose-bold:hsl(var(--foreground))]",
  "[--tw-prose-counters:hsl(var(--muted-foreground))]",
  "[--tw-prose-bullets:hsl(var(--muted-foreground))]",
  // Borders & dividers
  "[--tw-prose-hr:hsl(var(--border))]",
  "[--tw-prose-quotes:hsl(var(--muted-foreground))]",
  "[--tw-prose-quote-borders:hsl(var(--primary))]",
  "[--tw-prose-captions:hsl(var(--muted-foreground))]",
  // Code
  "[--tw-prose-code:hsl(var(--foreground))]",
  "[--tw-prose-pre-code:hsl(var(--foreground))]",
  "[--tw-prose-pre-bg:hsl(var(--muted))]",
  // Tables
  "[--tw-prose-th-borders:hsl(var(--border))]",
  "[--tw-prose-td-borders:hsl(var(--border))]",
  // Spacing overrides for academic content
  "prose-h1:mt-12 prose-h1:mb-4",
  "prose-h2:mt-10 prose-h2:mb-3 prose-h2:border-b prose-h2:border-[hsl(var(--border))] prose-h2:pb-2",
  "prose-h3:mt-8 prose-h3:mb-2",
  "prose-h4:mt-6 prose-h4:mb-2",
  "prose-p:leading-relaxed",
  "prose-li:leading-relaxed",
  // Links
  "prose-a:underline-offset-2 prose-a:decoration-1",
  // Code blocks
  "prose-pre:rounded-lg prose-pre:border prose-pre:border-[hsl(var(--border))] prose-pre:p-5 prose-pre:my-6",
  "prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.875em]",
  // Pre > code reset (no double background)
  "[&_pre>code]:bg-transparent [&_pre>code]:p-0 [&_pre>code]:rounded-none",
  // Blockquotes
  "prose-blockquote:border-l-[3px] prose-blockquote:pl-5 prose-blockquote:my-6 prose-blockquote:py-1 prose-blockquote:not-italic",
  "[&_blockquote>p]:text-[hsl(var(--muted-foreground))]",
  // Tables
  "[&_table]:rounded-lg [&_table]:overflow-hidden [&_table]:border [&_table]:border-[hsl(var(--border))]",
  "prose-th:bg-[hsl(var(--muted))] prose-th:text-xs prose-th:font-semibold prose-th:uppercase prose-th:tracking-wider prose-th:py-2.5",
  "prose-td:py-2.5",
  // Horizontal rules
  "prose-hr:my-10",
].join(" ");

export default function MonographArticle() {
  return (
    <article className={proseStyles}>
      <ManualComponent components={mdxComponents} />
    </article>
  );
}
