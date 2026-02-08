"use client";

import * as React from "react";
import { mdxComponents } from "@/components/mdx-components";
import ManualComponent from "../../content/manual/pages/monograph.mdx";

export default function MonographArticle() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <ManualComponent components={mdxComponents} />
    </div>
  );
}
