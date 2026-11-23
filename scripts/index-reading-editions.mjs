import { writeReadingIndex } from "./index-reading-transcript.mjs";

await writeReadingIndex(
  "content/reading-editions/ads4-boundary-ball-reconstruction",
  "public/publications/gravity/ads4-boundary-ball-reconstruction/search.json",
  { preferResultAnchors: true },
);
await writeReadingIndex(
  "content/reading-editions/haar-critical",
  "public/publications/haar-critical/search.json",
  { preferResultAnchors: true },
);
