"use client";
import * as React from "react";
import { mdxComponents } from "@/components/mdx-components";
import ManualComponent from "../../content/manual/pages/monograph.mdx";

export default function MonographArticle() {
  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col items-center">
      
      {/* 1. The Mathematical Grid Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* 2. Content Container */}
      <article className="relative z-10 w-full max-w-3xl px-6 py-16 md:py-24 
        prose prose-slate lg:prose-xl dark:prose-invert
        /* Mathematical Formatting Overrides */
        prose-headings:scroll-mt-20 prose-headings:font-serif
        prose-p:leading-relaxed prose-p:text-justify
        prose-code:text-indigo-600 dark:prose-code:text-indigo-400 prose-code:before:content-none prose-code:after:content-none
        prose-blockquote:not-italic prose-blockquote:bg-slate-100/50 dark:prose-blockquote:bg-slate-800/30 prose-blockquote:py-1 prose-blockquote:pr-4
        prose-img:mx-auto prose-img:border dark:prose-img:border-slate-800">
        
        {ManualComponent ? (
          <ManualComponent components={mdxComponents} />
        ) : (
          <div className="p-8 border-2 border-dashed border-red-200 rounded-xl bg-red-50 text-red-700">
            <h2 className="mt-0 text-red-800">System Error</h2>
            <p>MDX content failed to load. Please verify the file path in <code>/content/manual/pages/</code>.</p>
          </div>
        )}
      </article>

      {/* 3. Subtle Bottom Fade */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent pointer-events-none"></div>
    </main>
  );
}
