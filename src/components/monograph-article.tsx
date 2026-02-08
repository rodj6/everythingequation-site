"use client";
import * as React from "react";
import { mdxComponents } from "@/components/mdx-components";
import ManualComponent from "../../content/manual/pages/monograph.mdx";

const proseStyles = [
  "prose dark:prose-invert max-w-none",
  // Typography
  "[--tw-prose-body:hsl(var(--foreground))]",
  "[--tw-prose-headings:hsl(var(--foreground))]",
  "[--tw-prose-lead:hsl(var(--muted-foreground))]",
  "[--tw-prose-links:hsl(var(--primary))]",
  "[--tw-prose-bold:hsl(var(--foreground))]",
  "[--tw-prose-counters:hsl(var(--muted-foreground))]",
  "[--tw-prose-bullets:hsl(var(--muted-foreground))]",
  // Borders & dividers
  "[--tw-prose-hr:hsl(var(--border))]",
  "[--tw-prose-quotes:hsl(var(--foreground))]",
  "[--tw-prose-quote-borders:hsl(var(--primary))]",
  "[--tw-prose-captions:hsl(var(--muted-foreground))]",
  // Code
  "[--tw-prose-code:hsl(var(--foreground))]",
  "[--tw-prose-pre-code:hsl(var(--foreground))]",
  "[--tw-prose-pre-bg:hsl(var(--muted))]",
  // Tables
  "[--tw-prose-th-borders:hsl(var(--border))]",
  "[--tw-prose-td-borders:hsl(var(--border))]",
].join(" ");

export default function MonographArticle() {
  return (
    <article className={proseStyles}>
      <ManualComponent components={mdxComponents} />
    </article>
  );
}
