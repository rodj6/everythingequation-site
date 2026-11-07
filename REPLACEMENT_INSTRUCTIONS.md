# Replace the website source on Windows

1. Open PowerShell in your existing checkout. Run `git status --short` and back
   up the folder or save any work in progress. This package starts from
   `everythingequation-site-gravity-holography-update.zip`. If you have newer edits,
   compare them with `GRAVITY_FILE_CHANGES.json` before overwriting files.
2. Extract this ZIP into a separate folder. Copy the **contents** of its
   `everythingequation-site` folder into your existing website folder. Include
   `.github`, `.gitignore` and other supplied repository configuration. The ZIP
   contains no `.git` folder; keep the one in your checkout.
3. Keep your local environment files, Vercel linkage, settings and any populated
   Zenodo cache. Do not delete files just because they are absent from the ZIP
   or use a mirror-copy command. Review the changed-file inventory and keep
   newer work that is specific to your checkout.
4. Use Node 24 in PowerShell, then run:

   ```powershell
   npm ci
   $env:SKIP_ZENODO = "1"
   npm run build
   npm run typecheck
   npm run verify:security
   node scripts/verify-gravity-editions.mjs
   Remove-Item Env:SKIP_ZENODO
   ```

   Run the full `npm run build`. It generates content inventories and installs
   the route-specific CSP after Next.js completes.
5. Review `git status --short`, `git diff` and the new files before committing.
   Push through your existing workflow when satisfied. This package has not
   been pushed or deployed.
6. After your deployment, check the published CSP response headers, the two
   Atlas proof links, Source–Readout search, chapter navigation and downloads.
   A local adapter build does not test your live deployment.

See `GRAVITY_ERRATA_REPORT.md` for the correction list, `GRAVITY_COVERAGE.md`
for source-to-web mapping, and `GRAVITY_VERIFICATION.md` for the test results.
