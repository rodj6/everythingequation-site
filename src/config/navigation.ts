/**
 * TOP NAVIGATION — edit this file to add, remove, or reorder nav tabs.
 *
 * Both the desktop header and the mobile menu read from this single list.
 * To add a new tab:
 *   1. Create the page (e.g. src/app/updates/page.tsx).
 *   2. Add one entry here: { href: "/updates", label: "Updates" }.
 * Nothing else needs to change.
 */

export interface NavItem {
  href: string;
  label: string;
}

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/framework", label: "Framework" },
<<<<<<< HEAD
  { href: "/monograph", label: "Monograph" },
=======
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48
  { href: "/papers", label: "Papers" },
  { href: "/problems", label: "Open Problems" },
  { href: "/articles", label: "Articles" },
  { href: "/research-map", label: "Research Map" },
  { href: "/about", label: "About" },
];

/** Secondary links rendered in the footer only. */
export const footerLinks: NavItem[] = [
  { href: "/sitemap.xml", label: "Sitemap" },
  { href: "/feed.xml", label: "Feed" },
  { href: "/llms.txt", label: "llms.txt" },
  { href: "/graph.json", label: "Research graph" },
];
