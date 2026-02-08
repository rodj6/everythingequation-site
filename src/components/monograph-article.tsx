"use client";

import * as React from "react";
import { mdxComponents } from "@/components/mdx-components";
import ManualComponent from "../../content/manual/pages/monograph.mdx";

export default function MonographArticle() {
  return (
    <div className="prose dark:prose-invert max-w-none prose-pre:text-foreground prose-pre:opacity-100 prose-code:text-foreground">
      <ManualComponent components={mdxComponents} />
    </div>
  );
}
