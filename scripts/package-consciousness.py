"""Create the reviewable source ZIP without dependencies, caches, secrets or Git.

python scripts/package-consciousness.py [output.zip] [original-site.zip]
The optional baseline archive produces a changed-file inventory and preservation
checks. This script does not modify or remove the original archive or inputs.
"""
from pathlib import Path
import hashlib
import json
import os
import sys
import zipfile

root = Path(__file__).resolve().parents[1]
destination = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else root.parent / "everythingequation-site-consciousness.zip"
baseline = Path(sys.argv[2]).resolve() if len(sys.argv) > 2 else root.parent / "handoff/everythingequation-site(7).zip"
excluded = {"node_modules", ".git", ".next", ".cache", ".vercel", "__pycache__", ".pnpm-store"}


def include(relative):
    return not any(p in excluded for p in relative.parts) and not any(p.startswith(".env") for p in relative.parts) and relative.suffix not in {".zip", ".pyc", ".tsbuildinfo", ".orig"} and relative.name not in {".DS_Store", "Thumbs.db"}


def digest(data):
    return hashlib.sha256(data).hexdigest()


def project_files():
    result = {}
    for folder, directories, names in os.walk(root):
        directories[:] = [name for name in directories if name not in excluded and not name.startswith(".env")]
        for name in names:
            file = Path(folder) / name
            relative = file.relative_to(root)
            if include(relative) and file.resolve() != destination:
                result[relative.as_posix()] = file
    return result


files = project_files()
changes = []
preserved = {}
if baseline.exists():
    with zipfile.ZipFile(baseline) as original:
        originals = {str(Path(name).relative_to("everythingequation-site")).replace("\\", "/"): original.read(name) for name in original.namelist() if name.startswith("everythingequation-site/") and not name.endswith("/") and include(Path(name).relative_to("everythingequation-site"))}
    for name, file in sorted(files.items()):
        current = digest(file.read_bytes())
        before = digest(originals[name]) if name in originals else None
        if before != current:
            changes.append({"path": name, "status": "modified" if before else "added", "sha256": current, "baselineSha256": before})
    changes.extend({"path": name, "status": "removed", "baselineSha256": digest(data)} for name, data in originals.items() if name not in files)
    for prefix in ["content/quantum/", "public/publications/quantum-measurement/", "content/monograph/"]:
        names = [name for name in originals if name.startswith(prefix)]
        altered = [name for name in names if name not in files or digest(files[name].read_bytes()) != digest(originals[name])]
        preserved[prefix] = {"baselineFiles": len(names), "unchanged": len(names)-len(altered), "altered": altered}
    if "package-lock.json" in originals:
        preserved["package-lock.json"] = {"unchanged": files["package-lock.json"].read_bytes() == originals["package-lock.json"]}
    record = {"baseline": baseline.name, "baselineSha256": digest(baseline.read_bytes()), "changes": changes, "preservation": preserved, "excluded": sorted(excluded), "note": "Inventory excludes its own output and the package verification record. Original source inputs remain outside this edited project; matching publication bytes are also included inside it."}
    evidence = root / "evidence"
    evidence.mkdir(exist_ok=True)
    (evidence / "changed-files.json").write_text(json.dumps(record, indent=2) + "\n", encoding="utf8")
    (evidence / "changed-files.txt").write_text("Changed files compared with the supplied baseline archive\n\n" + "\n".join(f"{c['status']:8} {c['path']}" for c in changes) + "\n", encoding="utf8")

files = project_files()
destination.parent.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(destination, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
    for name, file in sorted(files.items()):
        archive.write(file, "everythingequation-site/" + name)
with zipfile.ZipFile(destination) as archive:
    bad = archive.testzip()
    prohibited = [name for name in archive.namelist() if not include(Path(name))]
if bad or prohibited:
    raise SystemExit(f"ZIP validation failed: {bad}, prohibited={prohibited}")
print(json.dumps({"archive": str(destination), "bytes": destination.stat().st_size, "files": len(files), "sha256": digest(destination.read_bytes()), "zipCrcCheck": "PASS", "excludedContentCheck": "PASS", "baselinePreservation": preserved}, indent=2))
