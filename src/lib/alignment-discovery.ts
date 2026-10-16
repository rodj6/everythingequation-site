import {continuityManifest} from '@/lib/continuity-note';
import { alignment, getAlignmentSections } from '@/lib/alignment';
import { site } from '@/config/site';

/** The reading inventory is derived from the same sections as the full reader. */
export function alignmentManifest() {
  return {
    schemaVersion: 2,
    companionResearchNotes: [continuityManifest()],
    canonicalOrigin: site.url,
    publication: alignment,
    completeTextUrl: alignment.readUrl,
    sections: getAlignmentSections().map(section => ({
      ...section,
      url: `${alignment.readUrl}#${section.id}`,
    })),
    searchUrl: '/consciousness/search.json',
    coverageUrl: '/publications/consciousness/alignment/source-coverage.json',
    editionNote: 'Complete website edition of the author-supplied Version 2.1 manuscript. The complete argument, models, proofs, scope, research programme and references are available in rendered HTML and mathematical Markdown.',
    position: 'Reflective alignment is advanced as the best approach to autonomous capability from Shadow Theory’s standpoint, combined with strong training and justified safeguards. The paper retains the premises of its mathematical models and distinguishes its comparative argument from completed empirical validation.',
    sourceAccess: 'The private cultivation protocol retains the manuscript’s access-on-request status; unpublished instructions are not part of this edition.',
  };
}
