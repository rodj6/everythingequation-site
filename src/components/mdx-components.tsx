"use client";
import * as React from "react";
import type { ComponentProps } from "react";

export const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1 className="mt-8 text-3xl font-bold tracking-tight text-[hsl(var(--foreground))]" {...props} />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))]" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="mt-4 text-xl font-semibold text-[hsl(var(--foreground))]" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mt-4 leading-7 text-[hsl(var(--foreground))]" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc pl-6 mt-4 space-y-2 text-[hsl(var(--foreground))] marker:text-[hsl(var(--muted-foreground))]" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal pl-6 mt-4 space-y-2 text-[hsl(var(--foreground))] marker:text-[hsl(var(--muted-foreground))]" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary)/0.8)] underline" {...props} />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="px-1.5 py-0.5 rounded bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] font-mono text-sm"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="mt-4 p-4 overflow-auto bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] rounded"
      {...props}
    />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="mt-4 border-l-4 border-[hsl(var(--primary))] pl-4 italic text-[hsl(var(--foreground))]"
      {...props}
    />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr className="my-8 border-[hsl(var(--border))]" {...props} />
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="mt-4 overflow-auto">
      <table className="w-full text-[hsl(var(--foreground))]" {...props} />
    </div>
  ),
  th: (props: ComponentProps<"th">) => (
    <th className="border border-[hsl(var(--border))] px-4 py-2 text-left font-semibold" {...props} />
  ),
  td: (props: ComponentProps<"td">) => (
    <td className="border border-[hsl(var(--border))] px-4 py-2" {...props} />
  ),
};

export interface MdxWrapperProps {
  children: React.ReactNode;
}

export function MdxWrapper({ children }: MdxWrapperProps) {
  return <React.Fragment>{children}</React.Fragment>;
}
