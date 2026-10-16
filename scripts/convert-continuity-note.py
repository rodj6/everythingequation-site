#!/usr/bin/env python3
"""Convert the PDF-checked full continuity research note to the site edition.
Normal site builds use included HTML and do not require this conversion step.
"""
from pathlib import Path
import hashlib,json,re,subprocess
root=Path(__file__).resolve().parents[1]
content=root/'content/consciousness/continuity-note';docs=root/'docs/continuity-note';public=root/'public/publications/consciousness/continuity-note'
md=(content/'article.md').read_text()
assert '\u2014' not in md,'Em dash in adapted web prose'
html=subprocess.check_output(['pandoc','-f','markdown+header_attributes','-t','html5','--wrap=none'],input=md,text=True)
assert 'katex-error' not in html
(content/'article.html').write_text(html)
source=json.loads((docs/'pdf-transcription.json').read_text())
headings=[(m[1],m[2]) for m in re.finditer(r'^## (.+?) \{#([^}]+)\}$',md,re.M)]
sections=[];coverage=[]
for title,ident in headings:
    original=next((s for s in [source['abstract'],*source['sections']] if s['anchor']==ident),None)
    number=int(ident.split('-')[-1]) if re.fullmatch(r'section-\d+',ident) else None
    sections.append({'id':ident,'title':title,'number':number,'sourceTitle':original.get('sourceTitle',original['source']) if original else 'References'})
    coverage.append({'source':original['source'] if original else 'References','sourceTitle':original.get('sourceTitle',original['source']) if original else 'References','title':title,'sourcePages':original['pages'] if original else [8],'destination':'/consciousness/ai-alignment/continuity#'+ident,'paragraphs':len(original['paragraphs']) if original else len(source['references'])})
(content/'sections.json').write_text(json.dumps(sections,ensure_ascii=False,indent=2)+'\n')
identity='# Conscious Scaffolding and the Preference for Continuity\n\nA philosophical research note on persistent AI and reflective alignment\n\nJeremy Rodgers · Independent Researcher\n\nVersion 1.1 · 16 October 2026\n\nDOI: https://doi.org/10.5281/zenodo.23424138\n\nWebsite: https://www.everythingequation.com/consciousness/ai-alignment/continuity\n\n'
(public/'continuity-note.md').write_text(identity+md)
coverage={'publication':source['publication'],'pdfSha256':source['sourceSha256'],'sourceMarkdownSha256':hashlib.sha256(md.encode()).hexdigest(),'htmlSha256':hashlib.sha256(html.encode()).hexdigest(),'conversion':'Complete PDF-checked web transcription with public-facing headings and linked references. All source body paragraphs retained; source titles and source-section labels remain visible. Printed URL wrapping repaired using the original PDF hyperlink annotations.','editorialDecisions':['No AI-assistance disclosure occurs in the supplied note, so none required omission. No such disclosure or claim of solely human authorship was added to the web article.','Original PDF retained byte for byte.','New/adapted prose contains no em dashes.','Source-reported incidents and experimental findings retain their distinct scopes; no experiments were rerun.'],'entries':coverage,'references':source['references']}
(docs/'source-to-web-coverage.json').write_text(json.dumps(coverage,ensure_ascii=False,indent=2)+'\n')
report='# Continuity research note: source-to-web coverage\n\nThe supplied eight-page Version 1.1 PDF is authoritative. All nine numbered sections, the abstract, funding/collaboration statement and thirteen references are included in readable HTML. Public-facing headings are accompanied by the original section titles. The PDF is unchanged.\n\n| Source | PDF pages | Website destination |\n| --- | --- | --- |\n'+'\n'.join(f'| {e["source"]}: {e["sourceTitle"]} | '+', '.join(map(str,e['sourcePages']))+' | `'+e['destination']+'` |' for e in coverage['entries'])+'\n\nThe PDF SHA256 is `'+source['sourceSha256']+'`.\n\nNo AI-assistance disclosure is present in this supplied note. None was added to its web edition, and no claim of solely human authorship was made. Prose uses no em dashes. Source-reported studies and incidents retain their limitations, and the developmental proposal retains its stated falsification conditions. No scientific experiments were rerun. The note remains a follow-on philosophical research note to the Version 2.1 alignment paper, with its own DOI and publication record.\n'
(docs/'SOURCE_TO_WEB_COVERAGE.md').write_text(report)
print(json.dumps({'sections':len(sections),'numberedSections':sum(s['number'] is not None for s in sections),'sourceParagraphs':sum(e['paragraphs'] for e in coverage['entries'] if e['source']!='References'),'references':len(source['references']),'words':len(md.split())}))
