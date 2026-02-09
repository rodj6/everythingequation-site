"use client";

import * as React from "react";
import { mdxComponents } from "@/components/mdx-components";

export default function ManualMdxRenderer({
  Component,
}: {
  Component: React.ComponentType<any>;
}) {
  return <Component components={mdxComponents} />;
}
