import { ads4Edition as paper } from "@/config/new-reading-editions";
import { ReadingChapterPage } from "@/components/reading-edition";
import { readingChapterMetadata, readingStaticParams, type ReadingParams } from "@/lib/reading-editions";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return readingStaticParams(paper);
}

export function generateMetadata(props: ReadingParams) {
  return readingChapterMetadata(paper, props);
}

export default function Page({ params }: ReadingParams) {
  return <ReadingChapterPage paper={paper} params={params} />;
}
