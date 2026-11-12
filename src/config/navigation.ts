/**
 * TOP NAVIGATION: edit this file to add, remove, or reorder nav tabs.
 *
 * The desktop header, the mobile menu, the footer and the sitemap all read
 * from this single list. To add a new tab:
 *   1. Create the page (e.g. src/app/updates/page.tsx).
 *   2. Add one entry here:
 *        { href: "/updates", label: "Updates", group: "library", description: "What changed and when." }
 * Nothing else needs to change.
 *
 * `group` decides where the tab sits in the header and under which heading it
 * appears in the mobile menu and footer. `description` is the one-line hint
 * shown in the mobile menu. Both are optional; a tab without a group is placed
 * with "library".
 */

export type NavGroupId = "theory" | "programmes" | "library" | "about";

export interface NavItem {
  href: string;
  label: string;
  group?: NavGroupId;
  description?: string;
}

/** Group headings, in display order. */
export const navigationGroups: Array<{ id: NavGroupId; label: string }> = [
  { id: "theory", label: "The theory" },
  { id: "programmes", label: "Programmes" },
  { id: "library", label: "Library" },
  { id: "about", label: "Status and author" },
];

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/framework", label: "Framework", group: "theory", description: "The full model in plain language." },
  { href: "/source-readout", label: "Source & Readout", group: "theory", description: "The mathematical foundation and its papers." },
  { href: "/atlas", label: "Atlas", group: "theory", description: "The architecture as one instrument you can explore." },
  { href: "/quantum-measurement", label: "Quantum Measurement", group: "programmes", description: "Events, the Born rule and physical records." },
  { href: "/consciousness", label: "Consciousness", group: "programmes", description: "Localized perspectives within the readout." },
  { href: "/monograph", label: "TOE Monograph", group: "library", description: "The complete Version 1.0 web edition." },
  { href: "/papers", label: "Papers", group: "library", description: "Every publication, with DOI and status." },
  { href: "/articles", label: "Articles", group: "library", description: "Full-length explanations and notes." },
  { href: "/problems", label: "Research Status", group: "about", description: "What is proved, conditional and open." },
  { href: "/research-map", label: "Research Map", group: "about", description: "How the results depend on one another." },
  { href: "/about", label: "About", group: "about", description: "The author and how to get in touch." },
];

/** Tabs arranged under their group headings (Home is left out: the site name links there). */
export function groupedNavigation(): Array<{ id: NavGroupId; label: string; items: NavItem[] }> {
  return navigationGroups
    .map((group) => ({
      ...group,
      items: navigation.filter((item) => item.href !== "/" && (item.group ?? "library") === group.id),
    }))
    .filter((group) => group.items.length > 0);
}

/** Secondary links rendered in the footer only. */
export const footerLinks: NavItem[] = [
  { href: "/source-readout/manifest.json", label: "Source–readout text inventory" },
  { href: "/sitemap.xml", label: "Sitemap" },
  { href: "/feed.xml", label: "Feed" },
  { href: "/llms.txt", label: "llms.txt" },
  { href: "/graph.json", label: "Research graph" },
  { href: "/quantum-measurement/manifest.json", label: "Quantum text inventory" },
  { href: "/consciousness/manifest.json", label: "Consciousness text inventory" },
];
