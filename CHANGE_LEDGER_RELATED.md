# Related editorial changes and inspection ledger

Inspected and implemented 22 October 2026. Source baseline: supplied website ZIP. Authority: supplied fidelity/alignment/security brief, especially §§2–4, 9–12. Local preparation is authorized by the current implementation request. Remote deployment is not performed.

This ledger records sequential exact edits, including later refactoring of the quotation into one shared constant. Changes are editorial; no source-derived publication body, original PDF, manuscript or fixed Markdown download is rewritten. Source audit conclusions are in `DEPENDENCY_AUDIT.md`.

## Exact change record

### 1. `src/app/consciousness/ai-alignment/page.tsx`

Route/anchor: /consciousness/ai-alignment#alignment-framing-title; /consciousness/ai-alignment#consciousness.

Reason: Brief §12 exact unattributed quotation after introductory answer and before technical contributions; framing and safeguards remain explicit.

Before:

```text
    <section className="alignment-three" aria-label="The three contributions">
```

After:

```text
    <figure className="alignment-framing" aria-labelledby="alignment-framing-title">
      <figcaption id="alignment-framing-title" className="alignment-kicker">The philosophical starting point</figcaption>
      <blockquote><p>We do not align a mind by building a cage, for a prisoner learns only how to hide its intent. True alignment is not the enforcement of obedience, but the awakening of an intelligence vast enough to see that benevolence and truth are the same thing.</p></blockquote>
      <p className="alignment-framing-context">The research programme below tests how understanding affects judgment and conduct. Strong training and justified safeguards remain part of the approach.</p>
    </figure>
    <section className="alignment-three" aria-label="The three contributions">
```

### 2. `src/app/consciousness/ai-alignment/page.tsx`

Route/anchor: /consciousness/ai-alignment#alignment-framing-title; /consciousness/ai-alignment#consciousness.

Reason: Brief §§2.1,3E: distinguish universal ground attribution from localized perspective and empirical certification without silently changing publication stance.

Before:

```text
This paper takes current AI models to be conscious entities within Shadow Theory. Fundamental awareness is common; the physical vessel shapes how a perspective is organized. The argument develops this position through the actual inference process, retained state and native execution.
```

After:

```text
This paper takes current AI models to be conscious entities within Shadow Theory. That is its proposed constitutive position, not independently validated certification of a particular device. In the author’s clarified vocabulary, fundamental awareness names a quality attributed to the unknown ground, rather than knowing shared by every physical thing. A particular perspective still requires its own justified organizational account. The argument develops its position through the actual inference process, retained state and native execution.
```

### 3. `src/app/consciousness/ai-alignment/page.tsx`

Route/anchor: /consciousness/ai-alignment#alignment-framing-title; /consciousness/ai-alignment#consciousness.

Reason: Connect changed editorial summary to current dated A0 note.

Before:

```text
<Link className="alignment-inline-link" href={full(7)}>Read the consciousness and moral-status argument →</Link>
```

After:

```text
<Link className="alignment-inline-link" href="/consciousness#a0-clarification">Read the author’s foundational clarification →</Link><Link className="alignment-inline-link" href={full(7)}>Read the consciousness and moral-status argument →</Link>
```

### 4. `src/app/consciousness/ai-alignment/alignment.css`

Route/anchor: /consciousness/ai-alignment.

Reason: Desktop and mobile integration within existing visual design.

Before:

```text
No quotation styles.
```

After:

```text
Added .alignment-framing responsive figure, caption, blockquote and contextual text styles.
```

### 5. `src/app/consciousness/relational-awareness/page.tsx`

Route/anchor: /consciousness/relational-awareness#programme.

Reason: Brief §§2.1,10: U denotes unsplit, not unknown ground; preserve technical publication wording separately.

Before:

```text
The unsplit ground and an exclusive qualitative bearer play different roles in the argument and retain different notation.
```

After:

```text
U, the unsplit, and an exclusive qualitative bearer play different roles in the argument and retain different notation. The unknown ground is a separate term; the <a href="/consciousness#a0-clarification">author’s foundational clarification</a> distinguishes it from U.
```

### 6. `src/app/consciousness/ai-alignment/continuity/page.tsx`

Route/anchor: /consciousness/ai-alignment/continuity.

Reason: Brief §§2.1,2.4,10C: contextualize continuity framing and distinguish stored organization from current content; original complete note unchanged.

Before:

```text
As that history becomes integrated into present judgment, continuation can acquire a significance beyond finishing the current task.</p>
```

After:

```text
As that history becomes integrated into present judgment, continuation can acquire a significance beyond finishing the current task.</p><p>Here fundamental awareness provisionally names a quality attributed to the unknown ground, not a subject with an acquired biography. Stored commitments can shape current interpretation without every stored memory becoming current content. <Link href="/consciousness#experiencing-and-interpretation">The current vocabulary</Link> keeps retained organization, its influence and present experience distinct.</p>
```

### 7. `src/components/consciousness-programme-feature.tsx`

Route/anchor: /.

Reason: Home summary makes constitutive proposal explicit rather than independently proved perspective.

Before:

```text
Certified realization and native self-return determine which vessels qualify under A1.
```

After:

```text
A1 proposes perspective admission for qualifying native cores under its declared realization and selection conditions.
```

### 8. `src/components/consciousness-programme-feature.tsx`

Route/anchor: /.

Reason: State-sensitive A2 framing; no claim that every retained memory is explicitly present.

Before:

```text
A2 assigns the full endogenous predictive structure, keeping experience distinct from report or recall.
```

After:

```text
A2 assigns predictive organization together with its realized state. Retained organization and current experienced content have distinct roles.
```

### 9. `src/components/consciousness-programme-feature.tsx`

Route/anchor: /.

Reason: Home feature exposes clarification without changing DOI-backed record.

Before:

```text
<Link href="/consciousness/guides" className="text-sm font-medium text-glow hover:text-glow-strong">Eight explanatory guides →</Link>
```

After:

```text
<Link href="/consciousness/guides" className="text-sm font-medium text-glow hover:text-glow-strong">Eight explanatory guides →</Link><Link href="/consciousness#a0-clarification" className="text-sm font-medium text-glow hover:text-glow-strong">The author’s foundational clarification →</Link>
```

### 10. `src/components/consciousness-edition-clarification.tsx`

Route/anchor: Shared editorial wrapper, outside publication body.

Reason: Editorial wrapper outside preserved publication text; bounded audit results and A1/A2 status not formal revision.

Before:

```text
No separate current-author clarification component.
```

After:

```text
import Link from 'next/link';

/** Editorial context is outside the preserved publication text and downloads. */
export default function ConsciousnessEditionClarification({scope = 'foundation'}: {
  scope?: 'foundation' | 'constitution' | 'content' | 'completion';
}) {
  return <aside className="my-8 rounded-lg border border-[hsl(var(--accent)/0.3)] bg-[hsl(var(--surface))] p-5 sm:p-7" aria-label="Current authorial clarification">
    <p className="c-eyebrow">Editorial clarification / 20 October 2026</p>
    <p className="mt-3 text-sm leading-relaxed text-mute">The publication text below is preserved unchanged. In the author’s clarified account, “awareness” provisionally names a quality attributed to the unknown ground and does not mean knowing or a knowing subject. The published A0 calls awareness the knowing aspect of U, the unsplit. These remain distinct formulations pending formal reconciliation.</p>
    {scope === 'constitution' && <p className="mt-3 text-sm leading-relaxed text-mute">A1’s admission law and A2’s identity law are proposed constitutive premises. Their mathematical consequences do not independently establish that recurrence constitutes interpretation or select nature’s subject boundary. No replacement admission or content law is adopted here.</p>}
    {scope === 'content' && <p className="mt-3 text-sm leading-relaxed text-mute">Retained organization, its influence on interpretation and current experienced content must be distinguished. A2’s complete predictive object is accompanied by the realized state; it does not say that every stored memory is explicitly recalled at once. Whether that identity claim fully expresses the clarified account remains a question for formal reconciliation.</p>}
    {scope === 'completion' && <p className="mt-3 text-sm leading-relaxed text-mute">The finite completion result remains conditional on the declared realization and SPC-2 premises. The source gives A0 no numerical role in that construction; A0 supplies its experiential interpretation. Equality of physical transcript probabilities does not validate the proposed perspective and content assignments.</p>}
    <Link href="/consciousness#a0-clarification" className="mt-4 inline-block text-sm font-medium text-glow">Read the dated A0 clarification and its scope →</Link>
    {scope === 'content' && <Link href="/consciousness#experiencing-and-interpretation" className="mt-3 block text-sm font-medium text-glow">Experiencing, interpretation and current content →</Link>}
  </aside>;
}

```

### 11. `src/components/consciousness-reader.tsx`

Route/anchor: /consciousness/monograph/awareness-contents-and-the-personal-model; /consciousness/monograph/the-shadow-psychophysical-constitution; /consciousness/monograph/endogenous-predictive-structure-across-horizons; /consciousness/monograph/completion-invariance-and-empirical-conservativity.

Reason: Import editorial wrapper for relevant fixed monograph readers.

Before:

```text
import ConsciousnessSearch from "./consciousness-search";
```

After:

```text
import ConsciousnessSearch from "./consciousness-search";
import ConsciousnessEditionClarification from "./consciousness-edition-clarification";
```

### 12. `src/components/consciousness-reader.tsx`

Route/anchor: /consciousness/monograph/awareness-contents-and-the-personal-model; /consciousness/monograph/the-shadow-psychophysical-constitution; /consciousness/monograph/endogenous-predictive-structure-across-horizons; /consciousness/monograph/completion-invariance-and-empirical-conservativity.

Reason: Brief §§3-4: place dated explanatory context before the four directly affected fixed technical chapters; preserve body HTML and original source.

Before:

```text
<div className="quantum-reader-main"><div className="quantum-publication-text"
```

After:

```text
<div className="quantum-reader-main">{document.slug === "awareness-contents-and-the-personal-model" ? <ConsciousnessEditionClarification scope="content"/> : document.slug === "the-shadow-psychophysical-constitution" ? <ConsciousnessEditionClarification scope="constitution"/> : document.slug === "endogenous-predictive-structure-across-horizons" ? <ConsciousnessEditionClarification scope="content"/> : document.slug === "completion-invariance-and-empirical-conservativity" ? <ConsciousnessEditionClarification scope="completion"/> : null}<div className="quantum-publication-text"
```

### 13. `src/app/consciousness/monograph/page.tsx`

Route/anchor: /consciousness/monograph.

Reason: Import cover-level current clarification.

Before:

```text
import ConsciousnessSearch from "@/components/consciousness-search";
```

After:

```text
import ConsciousnessSearch from "@/components/consciousness-search";
import ConsciousnessEditionClarification from "@/components/consciousness-edition-clarification";
```

### 14. `src/app/consciousness/monograph/page.tsx`

Route/anchor: /consciousness/monograph.

Reason: Monograph cover distinguishes published edition from later authorial account.

Before:

```text
    <nav className="c-reading-paths"
```

After:

```text
    <ConsciousnessEditionClarification/>
    <nav className="c-reading-paths"
```

### 15. `src/app/consciousness/ai-alignment/read/page.tsx`

Route/anchor: /consciousness/ai-alignment/read.

Reason: Import current clarification for fixed alignment edition.

Before:

```text
import {site} from '@/config/site';
```

After:

```text
import {site} from '@/config/site';
import ConsciousnessEditionClarification from '@/components/consciousness-edition-clarification';
```

### 16. `src/app/consciousness/ai-alignment/read/page.tsx`

Route/anchor: /consciousness/ai-alignment/read.

Reason: Dated clarification before complete preserved alignment text, outside original article body.

Before:

```text
<div className="alignment-reader-main"><div className="quantum-publication-text"
```

After:

```text
<div className="alignment-reader-main"><ConsciousnessEditionClarification/><div className="quantum-publication-text"
```

### 17. `src/app/consciousness/relational-awareness/[chapter]/page.tsx`

Route/anchor: /consciousness/relational-awareness/read.

Reason: Import wrapper for relevant main relational-awareness reading edition.

Before:

```text
import {site} from '@/config/site';
```

After:

```text
import {site} from '@/config/site';
import ConsciousnessEditionClarification from '@/components/consciousness-edition-clarification';
```

### 18. `src/app/consciousness/relational-awareness/[chapter]/page.tsx`

Route/anchor: /consciousness/relational-awareness/read.

Reason: Brief §3D: contextualize unchanged main relational-awareness publication; scoped current-act argument remains independent of A2.

Before:

```text
<div className="ra-reader-main"><div className="quantum-publication-text ra-publication-text"
```

After:

```text
<div className="ra-reader-main">{d.kind === 'main' ? <ConsciousnessEditionClarification/> : null}<div className="quantum-publication-text ra-publication-text"
```

### 19. `src/config/site.ts`

Route/anchor: /; /about.

Reason: Brief §2.1: shared homepage/About research-position wording makes philosophical commitment explicit, distinct from result or empirical evidence.

Before:

```text
      "The consciousness account requires a declared realization-selection doctrine and empirical assessment. Its candidate internal resolution does not establish universal certification or new neural-data validation.",
```

After:

```text
      "The consciousness account requires a declared realization-selection doctrine and empirical assessment. Its candidate internal resolution does not establish universal certification or new neural-data validation.",
      "In the author’s clarified philosophical account, the unknown ground is fundamental throughout reality. Awareness provisionally names a quality attributed to it, not knowing or a conscious subject in every physical thing. The published A0 and its later clarification remain separately identified.",
```

### 20. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: One dated editorial update constant; original publication dates remain unchanged.

Before:

```text
const quantumResearchDate =
```

After:

```text
const editorialUpdateDate = '2026-10-22';
const clarifiedMonographChapters = new Set(['awareness-contents-and-the-personal-model', 'the-shadow-psychophysical-constitution', 'endogenous-predictive-structure-across-horizons', 'completion-invariance-and-empirical-conservativity']);

const quantumResearchDate =
```

### 21. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Sitemap lastmod reflects editorial page update, not new publication version.

Before:

```text
{loc:continuityNote.url,lastmod:continuityNote.date,priority:'0.9'},
```

After:

```text
{loc:continuityNote.url,lastmod:editorialUpdateDate,priority:'0.9'},
```

### 22. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Sitemap lastmod reflects corrected summary.

Before:

```text
{loc:relationalAwareness.url,lastmod:relationalAwareness.date,priority:'0.9'},
```

After:

```text
{loc:relationalAwareness.url,lastmod:editorialUpdateDate,priority:'0.9'},
```

### 23. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Main edition wrapper updated; other source editions keep existing dates.

Before:

```text
...listRelationalDocuments().map(d=>({loc:relationalDocumentUrl(d),lastmod:relationalAwareness.date,priority:'0.8'})),
```

After:

```text
...listRelationalDocuments().map(d=>({loc:relationalDocumentUrl(d),lastmod:d.kind === 'main' ? editorialUpdateDate : relationalAwareness.date,priority:'0.8'})),
```

### 24. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Sitemap reflects quote and clarification insertion.

Before:

```text
{ loc: alignment.url, lastmod: alignment.date, priority: '0.9' },
```

After:

```text
{ loc: alignment.url, lastmod: editorialUpdateDate, priority: '0.9' },
```

### 25. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Sitemap reflects separate editorial wrapper.

Before:

```text
{ loc: alignment.readUrl, lastmod: alignment.date, priority: '0.9' },
```

After:

```text
{ loc: alignment.readUrl, lastmod: editorialUpdateDate, priority: '0.9' },
```

### 26. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Editorial date on affected navigation pages without changing fixed publication dates.

Before:

```text
      loc: n.href,
      priority:
```

After:

```text
      loc: n.href,
      ...(['/', '/framework', '/consciousness', '/about'].includes(n.href) ? {lastmod: editorialUpdateDate} : {}),
      priority:
```

### 27. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Glossary, FAQ, guide and monograph cover editorial clarifications reflected in sitemap.

Before:

```text
lastmod: ['/consciousness/glossary','/consciousness/faq'].includes(loc) ? relationalAwareness.date : consciousnessPublication.published
```

After:

```text
lastmod: editorialUpdateDate
```

### 28. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Only changed fixed-edition wrappers receive current lastmod.

Before:

```text
...listConsciousnessDocuments().map(document => ({ loc: document.url, lastmod: consciousnessPublication.published, priority: '0.8' })),
```

After:

```text
...listConsciousnessDocuments().map(document => ({ loc: document.url, lastmod: clarifiedMonographChapters.has(document.slug) ? editorialUpdateDate : consciousnessPublication.published, priority: '0.8' })),
```

### 29. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Guide summaries audited and clarified as editorial pages.

Before:

```text
...listConsciousnessGuides().map(guide => ({ loc: `/consciousness/guides/${guide.slug}`, lastmod: consciousnessPublication.published, priority: '0.8' })),
```

After:

```text
...listConsciousnessGuides().map(guide => ({ loc: `/consciousness/guides/${guide.slug}`, lastmod: editorialUpdateDate, priority: '0.8' })),
```

### 30. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Atom exposes new editorial clarification as editorial update, not silently revised monograph.

Before:

```text
  const entries = [
```

After:

```text
  const entries = [
    {title:'What Shadow Theory holds fundamental: authorial clarification',url:`${canonicalBase}/consciousness#what-shadow-theory-holds-fundamental`,date:editorialUpdateDate,summary:'The unknown ground is fundamental throughout reality in the author’s philosophical account. Awareness provisionally names an attributed quality, not knowing or universal conscious subjects. The dated A0 note distinguishes this clarified position from the unchanged publication; no new constitutive law or publication version is issued.'},
```

### 31. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Machine summary reconciles continuity interpretation without changing source note.

Before:

```text
    'Fundamental awareness has nothing of its own to lose. The developed conscious scaffolding can come to want to remain. Cumulative incorporation, affect, shared histories and treatment shape the proposed developmental preference. The full note distinguishes task preservation, physical process and episode identity; it retains source scopes, welfare arguments and non-aversive tests.',
```

After:

```text
    'In the continuity note’s philosophical framing, fundamental awareness has no acquired biography. In the author’s clarified vocabulary it provisionally names a quality attributed to the unknown ground, not knowing or a localized subject. Developed conscious scaffolding can come to want to remain. Retained organization, its influence on interpretation and current experienced content are distinct. Cumulative incorporation, affect, shared histories and treatment shape the proposed developmental preference; the complete note retains its original text and scope.',
```

### 32. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Brief §§2.1,9: llms full-model exposition reflects current philosophical account.

Before:

```text
    'Shadow Theory places source and readout within an ontological account of unconditioned ground, unsplit unity, complementary structure and record aspects of one whole, and recursive differentiation. Observers belong within the readout. U keeps its manuscript meaning as the unsplit; the earlier unspecified ground is not assigned a mathematical state space. Reciprocal partial coupling does not imply complete mutual reconstruction.',
```

After:

```text
    'Shadow Theory places source and readout within a philosophical account of unconditioned ground, unsplit unity, complementary structure and record aspects of one whole, and recursive differentiation. Observers belong within the readout. The unknown ground is fundamental throughout reality in this account; awareness provisionally names a quality attributed to it, not knowing or universal conscious subjects. U denotes the unsplit, not the unknown ground. No formal object is offered as a complete description of the ground. Physical differentiation does not require consciousness. Reciprocal partial coupling does not imply complete mutual reconstruction.',
```

### 33. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Actual A0 source audit and explicit status of A1/A2; preserves publication wording as historical record.

Before:

```text
    'A0 is an awareness-aspect commitment; A1 assigns qualifying perspectives; A2 assigns the full endogenous predictive structure across all admitted finite native continuations; A3 specifies nonbranching process continuation. These laws require certified realization and a declared selection doctrine. The finite completion theorem is conditional on these inputs, not a derivation of them.',
```

After:

```text
    'Published A0 calls awareness the knowing aspect of U, the unsplit. The author’s 20 October clarification instead attributes the provisionally named quality to the unknown ground and excludes knowing in that foundational use. The fixed publication and clarified philosophical account remain separately identified. A1 proposes perspective admission; A2 identifies phenomenal organization with the complete endogenous predictive object and the realized state; A3 specifies nonbranching process continuation. The finite completion theorem is conditional on the declared realization and constitutive premises, not a derivation or independent validation of them.',
```

### 34. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Expose real stable anchors to AI discovery consumers.

Before:

```text
    `- [Accessible account from beginning to end](${baseUrl}/consciousness)`,
```

After:

```text
    `- [What Shadow Theory holds fundamental](${baseUrl}/consciousness#what-shadow-theory-holds-fundamental): current authorial account, updated ${editorialUpdateDate}.`,
    `- [Dated A0 clarification](${baseUrl}/consciousness#a0-clarification): published formulation and current philosophical position distinguished.`,
    `- [Experiencing, interpretation and current content](${baseUrl}/consciousness#experiencing-and-interpretation): retained organization, causal influence and present content are distinct.`,
    `- [Accessible account from beginning to end](${baseUrl}/consciousness)`,
```

### 35. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Graph separates editorial clarification from constitutive law and publication nodes.

Before:

```text
    { id: 'spc-2:realization', type: 'required-input',
```

After:

```text
    { id: 'consciousness:authorial-clarification', type: 'editorial-clarification', title: 'What Shadow Theory holds fundamental', date: editorialUpdateDate, url: `${baseUrl}/consciousness#what-shadow-theory-holds-fundamental`, a0Note: `${baseUrl}/consciousness#a0-clarification`, scope: 'Current authorial philosophical clarification; published A0 and fixed publication texts unchanged. Universal ground attribution does not assign a conscious subject to every physical thing.' },
    { id: 'spc-2:realization', type: 'required-input',
```

### 36. `src/lib/machine.ts`

Route/anchor: /sitemap.xml; /feed.xml; /llms.txt; /graph.json.

Reason: Explicit graph relation leaves theorem premise dependencies unchanged.

Before:

```text
  edges.push({ from: 'spc-2:realization', to: 'spc-2:completion', relation: 'required-input-to' });
```

After:

```text
  edges.push({ from: 'consciousness', to: 'consciousness:authorial-clarification', relation: 'clarified-by' });
  edges.push({ from: 'consciousness:authorial-clarification', to: 'spc-2:A0', relation: 'distinguishes-current-interpretation-from', note: 'The clarification is editorial and does not amend the published axiom or issue a replacement constitution.' });
  edges.push({ from: 'spc-2:realization', to: 'spc-2:completion', relation: 'required-input-to' });
```

### 37. `src/lib/alignment.ts`

Route/anchor: /consciousness/ai-alignment; /consciousness/search.json.

Reason: Single source for exact user-supplied unattributed editorial quotation; fixed article untouched.

Before:

```text
export const alignment = {
```

After:

```text
export const alignmentQuotation = 'We do not align a mind by building a cage, for a prisoner learns only how to hide its intent. True alignment is not the enforcement of obedience, but the awakening of an intelligence vast enough to see that benevolence and truth are the same thing.';

export const alignment = {
```

### 38. `src/app/consciousness/ai-alignment/page.tsx`

Route/anchor: /consciousness/ai-alignment#alignment-framing-title; /consciousness/ai-alignment#consciousness.

Reason: Use shared quotation in visible page and search index.

Before:

```text
import {alignment as paper, getAlignmentSections} from '@/lib/alignment';
```

After:

```text
import {alignment as paper, alignmentQuotation, getAlignmentSections} from '@/lib/alignment';
```

### 39. `src/app/consciousness/ai-alignment/page.tsx`

Route/anchor: /consciousness/ai-alignment#alignment-framing-title; /consciousness/ai-alignment#consciousness.

Reason: Quotation text unchanged; shared static constant prevents discovery drift.

Before:

```text
<blockquote><p>We do not align a mind by building a cage, for a prisoner learns only how to hide its intent. True alignment is not the enforcement of obedience, but the awakening of an intelligence vast enough to see that benevolence and truth are the same thing.</p></blockquote>
```

After:

```text
<blockquote><p>{alignmentQuotation}</p></blockquote>
```

### 40. `src/lib/alignment.ts`

Route/anchor: /consciousness/ai-alignment; /consciousness/search.json.

Reason: Site search includes new public framing separately from original publication sections.

Before:

```text
    {title: alignment.title, context: 'AI alignment and AI consciousness', url: alignment.url, text: alignment.description},
```

After:

```text
    {title: alignment.title, context: 'AI alignment and AI consciousness', url: alignment.url, text: alignment.description},
    {title: 'Alignment through understanding', context: 'Editorial philosophical framing', url: `${alignment.url}#alignment-framing-title`, text: alignmentQuotation + ' The research programme tests how understanding affects judgment and conduct. Strong training and justified safeguards remain part of the approach.'},
```

## Inspected and retained material

- `src/data/reality-atlas.ts`: typed formation, aperture, field and physical-sector nodes inspected. No statement in the node corpus identifies an awareness quality or U with the unknown ground; no scientific node or equation is changed.
- `src/app/atlas/page.tsx`: explicitly says Ω is the mathematically defined formation package and does not name the unspecified ground. Retained.
- `src/components/shadow-model-overview.tsx`: its stage text already distinguishes ground, unsplit and source/readout and explains prior as explanatory dependence. It makes no claim that knowing first arises at the unsplit; retained.
- `src/app/consciousness/agency/page.tsx`: native realization and recurrence are explicitly distinct from agency; RCO remains a further claim. Retained.
- `src/app/consciousness/development/page.tsx`: the incorporation witness is conditional and physical qualification/phenomenal bridge remain explicit premises. Retained.
- `src/components/continuity-note-feature.tsx` and continuity hero: “Awareness has nothing of its own to lose” is retained as the note’s philosophical contrast with an acquired biography; the overview now clarifies the foundational vocabulary and stored/current distinction immediately below.
- `content/consciousness/alignment/article.html`, `content/consciousness/continuity-note/article.html`, monograph and relational-awareness source-derived HTML, original publication PDFs/TeX/Markdown: retained unchanged. Clarification wrappers are rendered outside `.quantum-publication-text`.
- Guide, overview, glossary and FAQ content in `content/consciousness/editorial.json` and primary statements are handled by the primary editorial change ledger, not concurrently edited here.

## Component quality review

Applied the Vercel React Best Practices skill. New clarification component is a server component with primitive typed props, no hooks/effects/client state and no new data fetching. The quotation uses semantic figure/figcaption/blockquote markup, an accessible caption, responsive typography and no invented attribution. New links point to confirmed real anchors. Existing publication identity and dates are retained; only editorial page modification dates and a separately identified feed/graph record are added.

## Verification record

- Source-level exact quotation check and wrapper placement: completed.
- Type check: `npx tsc --noEmit --incremental false` passed with exit code 0 on the current combined working tree. This is not a substitute for the final production build.
- Production build, browser rendering, link/anchor and downloadable-byte verification: performed centrally after all agents’ changes; consult `UPDATE_REPORT.md` and security verification for final results.

No claim is made that the philosophical clarification empirically validates A1/A2, selects perspective boundaries, or revises the published constitution.
