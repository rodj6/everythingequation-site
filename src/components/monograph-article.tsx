"use client";
import * as React from "react";
import { mdxComponents } from "@/components/mdx-components";
import ManualComponent from "../../content/manual/pages/monograph.mdx";

export default function MonographArticle() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-start p-4 md:p-8">
      <article className="w-full max-w-4xl prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-accent prose-code:bg-muted prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-blockquote:border-l-4 prose-blockquote:border-accent prose-table:border-collapse prose-th:border prose-td:border prose-th:px-4 prose-td:px-4 prose-th:py-2 prose-td:py-2 prose-th:bg-muted prose-img:rounded-lg prose-img:shadow-md">
        {ManualComponent ? (
          <ManualComponent components={mdxComponents} />
        ) : (
          <p className="text-red-500">Error: MDX content failed to load. Check import path or file existence.</p>
        )}
      </article>
    </main>
  );
}
