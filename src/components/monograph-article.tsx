"use client";

import * as React from "react";
import { mdxComponents } from "@/components/mdx-components";
import ManualComponent from "../../content/manual/pages/monograph.mdx";

export default function MonographArticle() {
  return (
    <div
      className={[
        "prose dark:prose-invert max-w-none",
        // Force typography colors (body, bullets, counters, code, pre-code) to match site foreground
        "[--tw-prose-body:hsl(var(--foreground))]",
        "[--tw-prose-headings:hsl(var(--foreground))]",
        "[--tw-prose-lead:hsl(var(--foreground))]",
        "[--tw-prose-links:hsl(var(--foreground))]",
        "[--tw-prose-bold:hsl(var(--foreground))]",
        "[--tw-prose-counters:hsl(var(--foreground))]",
        "[--tw-prose-bullets:hsl(var(--foreground))]",
        "[--tw-prose-hr:hsl(var(--border))]",
        "[--tw-prose-quotes:hsl(var(--foreground))]",
        "[--tw-prose-quote-borders:hsl(var(--border))]",
        "[--tw-prose-captions:hsl(var(--muted-foreground))]",
        "[--tw-prose-code:hsl(var(--foreground))]",
        "[--tw-prose-pre-code:hsl(var(--foreground))]",
        "[--tw-prose-pre-bg:hsl(var(--muted))]",
        "[--tw-prose-th-borders:hsl(var(--border))]",
        "[--tw-prose-td-borders:hsl(var(--border))]",
      ].join(" ")}
    >
      <ManualComponent components={mdxComponents} />
    </div>
  );
}
