# Replace the existing website source on Windows

1. Back up your checkout and run `git status` before copying. This update starts
   from `everythingequation-site(20261105-065334).zip`. If your checkout has moved
   on, reconcile the changed files in `SPECTRAL_FILE_CHANGES.json` with your work.
2. Extract the replacement ZIP somewhere separate. Copy the **contents** of its
   `everythingequation-site` folder into your current website folder. Include
   source control configuration such as `.github` and `.gitignore`.
3. Keep your existing **.git**, local environment files, Vercel linkage, and
   machine settings. Keep any populated local Zenodo cache. Never mirror-delete
   files that are absent from the archive. The replacement has no Git history
   or installed dependencies.
4. Open PowerShell in the website folder and use Node 24. Run:

   ```powershell
   npm ci
   $env:SKIP_ZENODO = "1"
   npm run build
   npm run typecheck
   npm run verify:security
   node scripts/verify-spectral-editions.mjs
   ```

   Use `npm run build` so that content generation and CSP postbuild both run.
5. Review `git status --short` and `git diff`. Commit and push through your own
   workflow when satisfied. This package has not been pushed or deployed.
6. On your deployment, check both Atlas links, search, reading navigation and
   publication downloads. Local checks and Vercel adapter artifacts do not
   certify a live deployment.

See `SPECTRAL_INTEGRATION_REPORT.md` and `SPECTRAL_VERIFICATION.md` for details.
