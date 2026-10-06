# Article conversion record

The source is `Agency_and_the_Constructed_Self(1).docx`. The prepared route is `/articles/agency-and-the-constructed-self`.

All 81 source paragraphs are accounted for: the title and subtitle are unchanged in frontmatter and displayed by the existing article route, and 79 body blocks preserve their exact visible text. The 15 original Heading1 entries become anchored level-two headings beneath the page title. The original Jeremy Rodgers byline is retained. All 10 original “Read source” hyperlinks preserve the exact external destinations in the DOCX relationships. The DOCX contains no tables, images, or inline bold/italic runs.

A related-research callout links `/consciousness/development` and `/consciousness/monograph`. Citation numerals link to the appropriate source anchors. These are presentation additions, with no substantive wording corrections.

The original citation `[10, 11]` under “Conscious scaffolding” is preserved. The source contains only references 1–10; there is no hidden eleventh entry or hyperlink. The relevant A2 material overlaps the developmental paper, consciousness monograph and companion programme, so that context does not identify reference 11 unambiguously. A clearly separated editorial source note states that author clarification is required. The unknown marker links to this note.

Verification: converted paragraph text matched the DOCX exactly before rendering. Real MDX evaluation with the site's installed `@mdx-js/mdx`, `remark-frontmatter` and `remark-gfm`, followed by React server rendering, also passed. An independent lxml comparison of the resulting HTML confirmed exact text in all 79 body blocks and the preservation of all ten original hyperlink labels and destinations. Title/subtitle were checked in frontmatter. Production build passed. Final production HTML retains all 81 source paragraphs and all ten source destinations. Desktop/mobile inspection, citation navigation and rendering without JavaScript passed.

Files: `agency-and-the-constructed-self.mdx`, `article-conversion-audit.json`, `article-source-paragraphs.json`, `scripts/convert-agency-article.py`. The rendered check HTML is intermediate verification evidence.
