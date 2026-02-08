"use client";
import * as React from "react";
import type { ComponentProps } from "react";

export const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1 className="mt-12 mb-4 text-3xl font-bold tracking-tight text-[hsl(var(--foreground))]" {...props} />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="mt-10 mb-3 text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="mt-8 mb-2 text-xl font-semibold text-[hsl(var(--foreground))]" {...props} />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4 className="mt-6 mb-2 text-lg font-medium text-[hsl(var(--foreground))]" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mt-4 leading-relaxed text-base text-[hsl(var(--foreground))]" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc pl-6 mt-4 space-y-1.5 text-[hsl(var(--foreground))] marker:text-[hsl(var(--muted-foreground))]" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal pl-6 mt-4 space-y-1.5 text-[hsl(var(--foreground))] marker:text-[hsl(var(--muted-foreground))]" {...props} />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary)/0.8)] underline underline-offset-2 decoration-1" {...props} />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="px-1.5 py-0.5 rounded bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] font-mono text-[0.875em]"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="mt-6 mb-6 p-5 overflow-auto bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] rounded-lg border border-[hsl(var(--border))] text-sm leading-relaxed [&>code]:bg-transparent [&>code]:p-0 [&>code]:rounded-none"
      {...props}
    />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="mt-6 mb-6 border-l-[3px] border-[hsl(var(--primary))] pl-5 py-1 text-[hsl(var(--muted-foreground))] italic [&>p]:mt-2 [&>p]:text-[hsl(var(--muted-foreground))]"
      {...props}
    />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr className="my-10 border-[hsl(var(--border))]" {...props} />
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="mt-6 mb-6 overflow-auto rounded-lg border border-[hsl(var(--border))]">
      <table className="w-full text-sm text-[hsl(var(--foreground))]" {...props} />
    </div>
  ),
  th: (props: ComponentProps<"th">) => (
    <th className="border-b border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider" {...props} />
  ),
  td: (props: ComponentProps<"td">) => (
    <td className="border-b border-[hsl(var(--border))] px-4 py-2.5" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-[hsl(var(--foreground))]" {...props} />
  ),
  em: (props: ComponentProps<"em">) => (
    <em className="italic" {...props} />
  ),
};

export interface MdxWrapperProps {
  children: React.ReactNode;
}

export function MdxWrapper({ children }: MdxWrapperProps) {
  return <React.Fragment>{children}</React.Fragment>;
}
