"use client";

import * as React from "react";
import { mdxComponents } from "@/components/mdx-components";
import ManualComponent from "../../../content/manual/pages/what-is-the-everything-equation.mdx";

// NOTE:
// - Removed `export const dynamic = 'force-static'` (server/static directive) because this page must run in a true client context.
// - Removed async + dynamic import + fallback/error UI. No bypasses, no placeholders.

export default function WhatIsTheEverythingEquationPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-12 py-16">
      <h1 className="text-3xl font-bold">What is the Everything Equation?</h1>

      {/* Render the MDX component with the shared component mapping */}
      <ManualComponent components={mdxComponents} />
    </div>
  );
}
