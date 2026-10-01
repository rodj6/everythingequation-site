"""Package the complete source project and verify each archived file. Standard library only."""
from pathlib import Path
import hashlib,json,zipfile,argparse
root=Path(__file__).resolve().parent.parent
parser=argparse.ArgumentParser();parser.add_argument('destination');args=parser.parse_args()
out=Path(args.destination).resolve();out.parent.mkdir(parents=True,exist_ok=True)
files=[]
for path in sorted(root.rglob('*')):
    if not path.is_file():continue
    rel=path.relative_to(root)
    if any(p in {'.next','node_modules','.git','__pycache__','.sites-runtime'} for p in rel.parts):continue
    if path.name in {'tsconfig.tsbuildinfo','.DS_Store'} or path.suffix=='.pyc':continue
    if path.resolve()==out:continue
    files.append((path,rel))
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED,compresslevel=9) as archive:
    for path,rel in files:archive.write(path,Path('everythingequation-site')/rel)
with zipfile.ZipFile(out) as archive:
    assert archive.testzip() is None
    for path,rel in files:assert hashlib.sha256(archive.read(str(Path('everythingequation-site')/rel))).digest()==hashlib.sha256(path.read_bytes()).digest(),str(rel)
report={'archive':out.name,'files':len(files),'bytes':out.stat().st_size,'sha256':hashlib.sha256(out.read_bytes()).hexdigest(),'allArchiveBytesMatchProject':True,'zipCRCVerified':True,'excluded':['node_modules','.next','.git','__pycache__','.sites-runtime','tsconfig.tsbuildinfo']}
out.with_suffix('.integrity.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
