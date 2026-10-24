# Apply the integrated repository on Windows

This ZIP contains the complete project source, not a static export. Update your existing Git checkout and keep its `.git` directory. There is no `.git` directory in the replacement package to copy.

## 1. Back up and review before copying

1. Close any development server. Open PowerShell in your existing checkout and run `git status`. Preserve your own uncommitted work before replacing files.
2. Back up the entire existing checkout, including `.git` and local configuration. Keep this ZIP separately.
3. Extract the ZIP to a separate folder. Its single top-level folder is `everythingequation-site`.
4. Read `PAPER_INTEGRATION_REPORT.md`, `PAPER_INTEGRATION_VERIFICATION.md` and `PAPER_INTEGRATION_FILE_CHANGES.json`. This integration starts from commit `b01907c160c0b19d3b847cbb3f81ff43e19782e8`, including the earlier philosophical, security and Vercel CSP fixes. Compare your checkout with that baseline. If you have newer commits or personal changes, merge the affected files individually so copying does not overwrite them.
5. After reviewing those differences, copy the **contents** of the extracted `everythingequation-site` folder into your existing site folder, allowing intended replacements. Do not nest the extracted folder inside the checkout. Include supplied `.github`, `.gitignore`, required cache data and other repository configuration.
6. Retain your existing `.git`, `.env` and `.env*.local` files, `.vercel` linkage and other machine-specific settings. Preserve any newer populated `.cache/zenodo.json` rather than replacing it with an older cache. The package contains no local environment files or credentials.
7. Review deletions in the integration inventory. Do not delete unrelated files merely because they are absent from the ZIP. Avoid mirror-copy options such as `robocopy /MIR`, which can remove local work and Git history. Build output and `node_modules` are intentionally excluded; recreate them below.

Earlier update, security and CSP reports describe previous work. Keep them as history; the paper-integration report and verification record describe this run.

## 2. Install and verify locally

Use **Node 24.x**, matching `package.json` and the repository's Vercel configuration. In PowerShell at the project root:

```powershell
npm ci
$env:SKIP_ZENODO = "1"
$env:NEXT_TELEMETRY_DISABLED = "1"
npm run test:security-headers
npm run verify:metadata
node scripts/verify-paper-integration.mjs --source-only
npm run build
npm run typecheck
npm run verify:security
node scripts/verify-paper-integration.mjs
npm start
```

Stop and investigate any failed command before proceeding. `npm run build` includes prebuild content generation and required postbuild CSP hash installation. Preserve that build command. Invoking `next build` directly omits the npm postbuild security step. The production wrapper supplies a 4 GiB heap default while respecting an existing explicit `NODE_OPTIONS` heap setting; review a restrictive local setting if the build runs out of memory.

`SKIP_ZENODO=1` uses the existing cache/local-metadata build path. It does not disable publication listings or the reviewed metadata-update workflow. Preserve your populated metadata cache. See `GITHUB_WORKFLOW_SETUP.md` for the earlier workflow's remote setup requirements.

While the production server runs, open a second PowerShell window in the same folder:

```powershell
node scripts/verify-paper-integration.mjs --base http://localhost:3000
node scripts/verify-security-headers.mjs http://localhost:3000
```

Visit the five reading hubs and follow their chapter links:

- `http://localhost:3000/consciousness/whole-field`
- `http://localhost:3000/consciousness/temporal-passage`
- `http://localhost:3000/consciousness/constituted-agency`
- `http://localhost:3000/consciousness/block-universe`
- `http://localhost:3000/consciousness/ai-alignment/misleading-ai`

Check direct chapter loading, next/previous navigation, search results and interaction, equation-heavy chapters, references, tables, figures and original PDF downloads. Also check the existing homepage, Framework, consciousness opening and A0 note, alignment quotation, earlier agency material, technical editions and Reality Atlas. Test a narrow/mobile layout. Visible server-rendered text alone does not establish that hydration or search works. Stop the server with Ctrl+C when finished.

## 3. Review and commit the intended changes

```powershell
git status --short
git diff --stat
git diff --check
git diff
```

Review new files and intended deletions as well as modifications. Confirm that local configuration, Git history and unrelated newer work remain intact. Stage only intended changes, then use your normal branch or pull-request process to commit and push to your existing GitHub repository. Do not force-push, reset history or replace `.git`. No push or deployment was performed while preparing this package.

## 4. Check the Vercel deployment

Keep the tracked Vercel build command **`npm run build`** and supported Node runtime. Confirm that Vercel builds the intended commit and that postbuild CSP completes. Do not edit generated `.next` files or bypass a failed assertion to obtain a deployment.

The local verification record distinguishes the ordinary Next build, real Vercel adapter-backed build and browser checks. An adapter fixture does not substitute for the real adapter run. Future Next or adapter changes require renewed CSP verification because output layout and consumed routing configuration can change.

After deployment succeeds, use the public canonical URL for ordinary read-only response checks:

```powershell
node scripts/verify-security-headers.mjs https://YOUR-CANONICAL-DOMAIN
```

In a browser, directly load new chapters and existing routes, then exercise client navigation, back/forward, search and repeat visits. Inspect actual response CSP headers and the console for blocked hydration scripts. Check mathematics, downloads, mobile layout and Atlas. A local build does not prove production headers or hydration. Existing GitHub branch protections, account settings, metadata-workflow setup and deployment settings remain under your control; copying a ZIP cannot configure them.

## Rollback

Retain the previous known-good commit and deployment reference before pushing. If necessary, revert the reviewed integration commit through your normal Git process and deploy that source, preserving unrelated subsequent work. Do not use the backup as a blanket overwrite of newer changes or discard `.git` to roll back.
