# Apply the Einstein and Yang–Mills update on Windows

1. Back up your existing checkout. In PowerShell, run `git status --short`
   and save any uncommitted work. This replacement starts from the redesigned
   `everythingequation-site.zip` supplied on 12 November 2026.
2. Extract `everythingequation-site-einstein-yang-mills-update.zip` into a
   separate folder. Copy the **contents** of its `everythingequation-site`
   folder into your existing website folder and replace matching files.
   Include the supplied `.github` and `.gitignore` configuration.
3. Keep your existing `.git`, local environment files, populated local cache,
   Vercel linkage and machine settings. The replacement ZIP has no Git history.
   Do not mirror-delete files that are absent from the ZIP. Reconcile any work
   newer than the supplied baseline using `EINSTEIN_YM_FILE_CHANGES.json`.
4. Use Node 24, then run:

   ```powershell
   npm ci
   $env:SKIP_ZENODO = "1"
   npm run build
   npm run typecheck
   npm run verify:security
   node scripts/verify-einstein-ym.mjs
   Remove-Item Env:SKIP_ZENODO
   ```

   Use the full `npm run build`, which runs content generation and CSP
   postbuild. Do not run only `next build`.
5. Review `git status --short`, `git diff` and all added files, then commit
   and push through your existing workflow when satisfied.
6. After your Vercel deployment, check the three reading paths, their PDFs,
   search, Atlas entries/tour, navigation and actual response CSP headers.

Nothing in this package was pushed or deployed. Local adapter artifacts and
browser checks do not certify the live deployment.
