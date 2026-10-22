# Apply the updated repository on Windows

This package is the complete project source. It is not a prebuilt static export. Keep your existing Git checkout and its `.git` directory.

## 1. Back up and compare

1. Close any development server. In your existing checkout run `git status`. Preserve or commit your own uncommitted work before copying anything.
2. Make a separate backup of the whole existing checkout, including `.git`. Keep this ZIP separately too.
3. Extract this ZIP to a new folder. Its single top-level folder is `everythingequation-site`.
4. Compare the new folder with your checkout. This corrected package starts from commit `b5a013ed9bc74090d7fbadcfc4f7fd5506c8ecca`. Read `CSP_FIX_REPORT.md` and `CSP_FIX_FILE_CHANGES.json` for the subsequent CSP fix. `FILE_CHANGES.json` preserves the earlier website update's inventory against the original supplied archive. Reconcile any work newer than `b5a013e` before overwriting it.
5. Copy the **contents** of the extracted `everythingequation-site` folder into your existing checkout, allowing intended replacements. Include `.github`, `.gitignore`, `.cache` and all other supplied configuration. Do not place the new folder inside the existing site folder. Do not replace or delete `.git`, your `.env*.local` files, Vercel linkage, or other local settings.
6. Review the deleted/excluded entries in `FILE_CHANGES.json`. Build outputs, dependencies, temporary reports and TypeScript caches are intentionally absent. There are no intended deletions of publication assets. Do not mirror-delete unrelated files merely because they are absent from the ZIP.

## 2. Install and verify

Use **Node 24.x**, matching the package and existing Vercel runtime configuration. Open PowerShell in the existing checkout:

```powershell
npm ci
npm run verify:metadata
npm run test:security-headers
node scripts/verify-zenodo-proposal.mjs
$env:SKIP_ZENODO = "1"
$env:NEXT_TELEMETRY_DISABLED = "1"
npm run build
npm run typecheck
npm run verify:security
node scripts/verify-website-update.mjs
npm start
```

Use a second PowerShell window to run the complete served-policy check:

```powershell
node scripts/verify-security-headers.mjs http://localhost:3000
```

Visit `http://localhost:3000`, then check the consciousness statement, A0 note, Framework companion, glossary, alignment quotation, search, a technical chapter, downloads and Atlas. Check narrow/mobile layouts on your device. Stop the server with Ctrl+C when finished.

`SKIP_ZENODO=1` is the existing cache-only build option. The supplied original archive had `.cache/.gitkeep` and no populated Zenodo cache. The local paper registry and fixed publication metadata still build offline; any historical records that rely solely on remote metadata retain their existing fallbacks. The daily sync is retained, now through reviewed PRs. See `GITHUB_WORKFLOW_SETUP.md` before its first run. If you already have a populated `.cache/zenodo.json` in your checkout, preserve it.

## 3. Review and deploy through your existing workflow

```powershell
git status --short
git diff --stat
git diff --check
git diff
```

Review new files and deletions as well as the diff. Follow your normal branch/PR process. After review, stage the intended files, commit, and push to your existing GitHub repository. No push or deployment was performed while preparing this ZIP.

The tracked `vercel.json` explicitly invokes **`npm run build`**. Preserve this: its postbuild step generates the actual page-specific script-hash CSP. Running `npx next build` directly bypasses it and is not the deployment workflow. Do not edit generated `.next` files manually. A later framework/adapter change must pass the header verification again.

Configure branch protections, required check **Build and typecheck**, and the metadata-PR settings only after reviewing `GITHUB_WORKFLOW_SETUP.md`. Those GitHub settings cannot be configured by copying this ZIP.

After Vercel finishes, verify the production commit/runtime and actual served headers, cached pages, navigation, search, math, downloads and Atlas. Run the served-policy verifier against the deployed URL only for ordinary GET checks; it sends no payloads or remote changes. Managed optimizer internals and remote GitHub workflow execution were not verified here.

## Rollback

Retain the previous known-good commit and deployment reference before pushing. If needed, revert the update commit through your normal Git workflow and redeploy the previous source, or use Vercel’s rollback process yourself. Do not discard unrelated changes or overwrite `.git` to roll back. The local changes here have not changed production.

## Security status to retain

The runtime-dependency audit reported zero known findings at preparation. Five high-severity audit entries remain in the retained development/build toolchain, rooted in unpatched `braces`. No production exploit or compromise is established. See `SECURITY_VERIFICATION.md` and the included audit JSON. These limitations are not a claim of comprehensive security.
