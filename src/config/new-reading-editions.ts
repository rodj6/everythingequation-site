import ads4Chapters from "@content/reading-editions/ads4-boundary-ball-reconstruction/chapters.json";
import haarChapters from "@content/reading-editions/haar-critical/chapters.json";
import { firstOrderKernel, gravityHub, secondOrderDetection } from "./paper-integrations";

export interface ReadingChapter {
  slug: string;
  title: string;
  number: string;
  level: number;
  firstPage: number;
  lastPage: number;
  startY: number;
  outlineAnchor: string;
  description: string;
}

interface ReadingLink {
  href: string;
  title: string;
}

export interface ReadingEdition {
  id: "ads4-boundary-ball-reconstruction" | "haar-critical";
  title: string;
  subtitle: string;
  headline: string;
  author: string;
  description: string;
  date: string;
  publicationDate?: string;
  citationTitle?: string;
  zenodoTitle?: string;
  doi: string;
  doiUrl: string;
  zenodoUrl?: string;
  publicationStatus: "published" | "provided-doi";
  citationRoute: string;
  route: string;
  pdfUrl: string;
  markdownUrl: string;
  manifestUrl: string;
  searchUrl: string;
  searchIndexUrl: string;
  pages: number;
  sha256: string;
  chapters: ReadingChapter[];
  related: ReadingLink[];
  supplements?: ReadingLink[];
}

const ads4Route = "/source-readout/ads4-boundary-ball-reconstruction";
const ads4Assets = "/publications/gravity/ads4-boundary-ball-reconstruction";

export const ads4Edition: ReadingEdition = {
  id: "ads4-boundary-ball-reconstruction",
  title: "Second-Order AdS4 Gravitational Boundary-Ball Readouts: Lorentzian Timelike Extremal Surfaces, Non-Identifiability, Localized Wavepackets, and Quadratic Reconstruction Stability",
  subtitle: "Lorentzian extremal surfaces, localized wavepackets, and quantitative reconstruction",
  headline: "What can an AdS4 boundary ball reconstruct?",
  author: "Jeremy Rodgers",
  description: "Follow the second-order gravitational readout from Lorentzian extremal-surface variations through non-identifiability, symmetry-breaking ball designs, localized wavepackets, and quantitative reconstruction on specified perturbation classes.",
  date: "2026-11",
  publicationDate: "2026-11-23",
  citationTitle: "Single-Ball Gravitational Reconstruction in AdS₄ from Second-Order Canonical Energy",
  doi: "10.5281/zenodo.24451446",
  doiUrl: "https://doi.org/10.5281/zenodo.24451446",
  zenodoUrl: "https://zenodo.org/records/24451446",
  publicationStatus: "published",
  citationRoute: "/papers/ads4-boundary-ball-reconstruction",
  route: ads4Route,
  pdfUrl: ads4Assets + "/paper.pdf",
  markdownUrl: ads4Assets + "/complete.md",
  manifestUrl: ads4Route + "/manifest.json",
  searchUrl: ads4Route + "/search",
  searchIndexUrl: ads4Assets + "/search.json",
  pages: 84,
  sha256: "550e43d28dba0e10012dbf446d1e941be9ba2f93dff6cd7c6ada53e91e8e655d",
  chapters: ads4Chapters,
  related: [
    { href: gravityHub, title: "Gravity and holography" },
    { href: firstOrderKernel, title: "First-order fixed-slice kernel" },
    { href: secondOrderDetection, title: "Second-order detection with the same balls" },
  ],
};

const haarRoute = "/articles/haar-critical";
const haarAssets = "/publications/haar-critical";

export const haarCriticalEdition: ReadingEdition = {
  id: "haar-critical",
  title: "Planar Formulas and Microscopic Asymptotics for Derivative Moments of Haar Unitary Characteristic Polynomials",
  subtitle: "Complete cumulative edition: finite-rank evaluation, asymptotic regimes, and connected zero geometry",
  headline: "Follow Haar unitary derivative moments from finite rank to the microscopic limit",
  author: "Jeremy Rodgers",
  description: "Read the cumulative HaarCritical argument for mixed moments of logarithmic derivatives and characteristic polynomials. It develops finite-rank formulas, connects the circle and microscopic regimes, and certifies a complex depth-one coefficient.",
  date: "2026-11-22",
  publicationDate: "2026-11-23",
  zenodoTitle: "Derivative Moments of Haar Unitary Characteristic Polynomials: All-Rank Resonance Cancellation, Microscopic Asymptotics, and Certified Evaluation",
  doi: "10.5281/zenodo.24451371",
  doiUrl: "https://doi.org/10.5281/zenodo.24451371",
  zenodoUrl: "https://zenodo.org/records/24451371",
  publicationStatus: "published",
  citationRoute: "/papers/haar-critical",
  route: haarRoute,
  pdfUrl: haarAssets + "/paper.pdf",
  markdownUrl: haarAssets + "/complete.md",
  manifestUrl: haarRoute + "/manifest.json",
  searchUrl: haarRoute + "/search",
  searchIndexUrl: haarAssets + "/search.json",
  pages: 487,
  sha256: "e4955088bd3bb84a7e0aac702120e640a5837ba00f86ef3619d0f6dab82245af",
  chapters: haarChapters,
  related: [],
  supplements: [{
    href: haarAssets + "/HaarCritical_Public_Verification.zip",
    title: "Public verification archive",
  }],
};

export const newReadingEditions = [ads4Edition, haarCriticalEdition];

export function readingChapterUrl(edition: ReadingEdition, slug: string) {
  return edition.route + "/" + slug;
}
