"use client";

import * as React from "react";
import { mdxComponents } from "@/components/mdx-components";
import ManualComponent from "../../content/manual/pages/monograph.mdx";

export default function MonographArticle() {
  return (
    <div
      className="
        prose dark:prose-invert max-w-none

        /* fix code/pre contrast */
        prose-pre:text-foreground prose-code:text-foreground prose-pre:opacity-100 prose-code:opacity-100

        /* fix bullets + ordered list numbers */
        prose-li:marker:text-foreground
      "
    >
      <ManualComponent components={mdxComponents} />
    </div>
  );
}
