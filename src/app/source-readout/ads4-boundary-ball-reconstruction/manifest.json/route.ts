import { ads4Edition as paper } from "@/config/new-reading-editions";
import { readingEditionManifest } from "@/lib/reading-editions";

export const dynamic = "force-static";

export function GET() {
  return readingEditionManifest(paper);
}
