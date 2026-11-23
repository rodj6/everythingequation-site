import type { Metadata } from "next";
import { ads4Edition as paper } from "@/config/new-reading-editions";
import { ReadingSearchPage } from "@/components/reading-edition";

export const metadata: Metadata = {
  title: "Search " + paper.title,
  alternates: { canonical: paper.searchUrl },
};

export default function SearchPage() {
  return <ReadingSearchPage paper={paper} />;
}
