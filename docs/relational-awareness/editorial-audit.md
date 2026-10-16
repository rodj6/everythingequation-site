# Relational-awareness integration: independent editorial audit

Audit date: 16 October 2026. This is a source-level editorial review, separate from the production build and browser checks. No experiments or source-reported computational studies were rerun in this audit.

## Result

The new overview, metadata library, programme cards and research-hub integration preserve the publication's central philosophical distinctions. The result is positive and substantial without representing the identity premise as a theorem or the Ebbinghaus illustration as prospective validation. Publication identity and programme counts are coherent: one foundational monograph plus seven investigations gives eight publications. The new main paper and its technical companion occupy one registry record and one DOI.

No conceptual defect requiring reconstruction of the article was found. The following small corrections and discovery improvements should be completed before delivery.

## Corrections and improvements

1. **Match the feature link's label to its destination.** In `src/components/relational-awareness-feature.tsx`, “Read the full argument and ten technical modules” links to `/consciousness/relational-awareness/read`, which contains the complete main argument, not the ten modules. Use “Read the complete main argument” for that destination, or link the broader label to `/consciousness/relational-awareness#complete-contents`.

2. **Carry the native-human scope into shared metadata.** The opening of `relationalAwareness.description` in `src/lib/relational-awareness.ts` is “Relational appearance is a way a current sensory comparison occurs.” The overview itself supplies the human scope and defended principle, but search cards and machine consumers may encounter the description alone. Suggested replacement: “A current-act account of relational appearance in native human sensory comparison. Follow two distinct warrants from sensory evidence to concrete performance, with the complete philosophy, mathematics, empirical applications and ten technical modules.” This keeps the public voice direct while preventing an unintended universal inference about any comparison system.

3. **Add the new distinctions to the glossary and FAQ.** At the reviewed snapshot, `/consciousness/glossary` and `/consciousness/faq` contain no relational-awareness entries or links. Both end with a research-hub label naming only boundaries, interfaces and realizations. Useful glossary entries are relational appearance, current sensory basing, conservative mode placement, and exclusive qualitative bearer. Useful FAQ questions are: “Can a single shape supply relational appearance?”, “Does a correct comparison answer establish experience?”, “Does the current-act account complete an SPC-2 application?”, and “What does the Ebbinghaus example establish?” Each answer can link to the relevant new section. Rename the general research link “The complete consciousness programme”. This is an integration improvement, not a change to the historical monograph's definitions.

4. **Refresh two remaining discovery descriptions.** The programme manifest's nested research title still reads “Consciousness, agency and reflective alignment”; “The consciousness research programme” covers the updated collection accurately. Research-map metadata and the consciousness-map eyebrow still omit relational appearance, although the new feature supplies a visible entry. Adding the investigation there would make the metadata and visible map consistent.

5. **Optional clarification of the philosophical starting point.** The overview's statement that the account begins from awareness and differentiated presentation accurately introduces its motivating ontology. A compact addition that its two current-act warrants can be assessed without accepting the entire awareness-first ontology would make the distinction already explicit in main §2.1 immediately visible to new readers. The present wording does not assert that the ontology is a proved result.

## Conceptual checks

| Required relationship | Finding and inspected destination |
| --- | --- |
| Relational appearance and a single resolved form | Correctly states joint presentation of counterparts and relation; a sufficiently resolved single form supplies aspects. Overview `#the-account`; main §§1.1–1.2. No requirement for two external objects or fusion is introduced. |
| Five questions | Occurrence, jointness, sensory basing, timing and bearer appear separately in the overview. The sensory-warrant text explicitly rejects correctness as sufficient for jointness/basing. |
| Two warrants | Sensory capacity evidence is separated from corrected concrete-performance identification. Both remain defeasible in the full article. Overview `#two-warrants`; main §§3–4. |
| Identity inference | The displayed inference substitutes a literal mode only after warranted identity. Its explanation expressly distinguishes cause, containment and constitution from identity. Main Appendix A preserves the proof and countermodels. |
| Awareness, construction and personal interpretation | Apparatus and scaffolding shape perception itself; the overview rejects an already completed image shown to an inner viewer. Recognition and personal appropriation are distinguished without requiring separate successive stages. Main §2 preserves the full philosophical development. |
| Current uptake | A new scene at current uptake is explicitly accepted. Earlier tokens, carriers and subjects need not survive or merge. Overview `#the-account`, research hub `#appearance`, main §§1.4 and 2.4. |
| Alternatives | The overview points readers to the distinct serial-only, passive-accompaniment and exclusive-bearer alternatives. Main §§4.5 and 6 retain omitted executors, copies, phase errors and the corrections they require. The exclusive-bearer dispute is not presented as settled by shared empirical likelihoods. |
| SPC-2 and historical development | Overview `#programme` expressly says the current-act argument does not assume the complete constitution and requires a further justified core/scene application. Executing contributors are not equated with a subject boundary. Main §2.6 and Module B §2.14 retain A1–A3. The dated note appended to the alignment overview presents a later investigation without rewriting its publication edition. |
| Distinct notation | The overview explicitly preserves a distinction between unsplit ground and exclusive qualitative bearer; the full argument uses U and B respectively. No bearer alternative is renamed U. |
| Ebbinghaus evidence | The overview records the participant, task/trial, equal 30 mm discs, response time, same-left contingency, retrospective status, prior exposure and missing dedicated jointness/basing probes. The response supplies a deadline only under the stated ordinary sensory interpretation. It is not claimed to establish onset. |
| Neural assay and further evidence | The overview links to Module J as a failed neural predictive assay. Main §7.2 preserves the worsened primary Brier outcome and distinction from the improved secondary ranking score; the technical content supplies full methods and values. No rerun is claimed in the overview or metadata. |
| Technical companion | The generated document index has exactly ten `technical` entries, Modules A–J. Main, guide and references are additional reading documents, not additional publications. The manifest calls the main and companion one publication, and structured data uses chapters/encodings under one scholarly article. |
| Publication identity | Full title, Jeremy Rodgers attribution, Version 1.4, date 16 October 2026 and DOI 10.5281/zenodo.23408737 agree across the reviewed metadata, overview, manifest and registry. One matching DOI record appears in `content/papers.yaml`. |
| Unpublished interlocutor | Main §2.4 and the full reference list identify the recollective-interpretation text as an unpublished supplied draft. It is not promoted to a new registry publication. |

## Presentation checks actually run

Read the new relational-awareness overview and metadata library in full, alongside the consciousness landing page, programme cards, new feature, research hub, programme manifest, paper-registry entry, related alignment note, glossary/FAQ implementations and relevant machine-readable descriptions. Inspected the generated relational-awareness document index and verified that its technical slugs are exactly `module-a` through `module-j`.

A text scan of the seven principal new or revised overview/programme/manifest files found no em dashes, AI-assistance declaration text, or claims of entirely human authorship. This check concerns website prose; it does not alter the original PDF declarations. Publication PDF fidelity is to be confirmed by the separate hash check in the implementation verification.

This audit does not certify build output, HTTP availability, browser layout or all exported links. Those checks belong to the production verification report.


Implementation resolution: the CTA now names the main argument; shared metadata specifies native human sensory comparison; six glossary entries and four FAQ answers have been added; programme manifest and research-map descriptions have been refreshed. The overview also distinguishes assessment of the two warrants from adoption of the entire awareness-first ontology. These edits were included in the final production rebuild and verification.
