"use client";

import React from 'react';
import type { ComponentProps } from 'react';
import { MDXProvider } from '@mdx-js/react';


// Map standard MDX elements to Tailwind styled components. This ensures
// consistent typography throughout the site when rendering MDX files.
const components = {
  h1: (props: ComponentProps<'h1'>) => <h1 className="mt-8 text-3xl font-bold tracking-tight" {...props} />,
  h2: (props: ComponentProps<'h2'>) => <h2 className="mt-6 text-2xl font-semibold tracking-tight" {...props} />,
  h3: (props: ComponentProps<'h3'>) => <h3 className="mt-4 text-xl font-semibold" {...props} />,
  p: (props: ComponentProps<'p'>) => <p className="mt-4 leading-7" {...props} />,
  ul: (props: ComponentProps<'ul'>) => <ul className="list-disc pl-6 mt-4 space-y-2" {...props} />,
  ol: (props: ComponentProps<'ol'>) => <ol className="list-decimal pl-6 mt-4 space-y-2" {...props} />,
  a: (props: ComponentProps<'a'>) => <a className="text-blue-600 hover:text-blue-800 underline" {...props} />, 
  code: (props: ComponentProps<'code'>) => <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-sm" {...props} />,
  pre: (props: ComponentProps<'pre'>) => <pre className="mt-4 p-4 overflow-auto bg-slate-100 dark:bg-slate-800 rounded" {...props} />,
};

export interface MdxWrapperProps {
  children: React.ReactNode;
}

/**
 * Wraps MDX content with our custom component mapping. This should
 * surround any imported `.mdx` file to apply consistent styling.
 */
export function MdxWrapper({ children }: MdxWrapperProps) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}

