# Browser policy and static-build integration

Prepared 22 October 2026. This describes repository behavior. It is not evidence
that the current public deployment has changed.

## Why this approach preserves the existing site

The site pre-renders its publication HTML. A per-request nonce would require
dynamic rendering and change its CDN and hosting behavior. Instead, the build
derives SHA-256 hashes from the exact inline script bytes in each completed HTML
document, including Next.js bootstrap/Flight data and JSON-LD. Its response policy
allows those scripts and same-origin script files. It does not allow arbitrary
inline executable scripts, event-handler attributes or `eval` in production.

The policy keeps styles separate: `style-src 'self' 'unsafe-inline'` accommodates
KaTeX layouts and React/Three inline style attributes. This permits inline CSS;
it does not grant inline JavaScript permission. Images can use same-origin,
`data:` and `blob:` resources; fonts, fetches, media and script files remain
same-origin. Blob workers are permitted for trusted application code. Framing,
objects, base elements and embedded frames are blocked. Forms are same-origin.

The Atlas uses fullscreen and clipboard operations. Fullscreen remains available
to the same origin. Camera, microphone, geolocation, payment, display capture and
XR spatial tracking are disabled. The policy does not disable WebGL.

No legitimate site embedding feature was found in this implementation. The
framing policy is `frame-ancestors 'none'` and `X-Frame-Options: DENY`. Downloaded
PDFs can still be opened directly; embedding them in a frame is not enabled.

## Build and serving contract

- `next.config.mjs` configures browser headers on all routes and disables the
  unused Next image-optimization API with `images.unoptimized: true`.
- `scripts/security-policy.mjs` owns the shared resource restrictions.
- `npm run build` invokes `postbuild`, which runs
  `scripts/security-headers.mjs`. It discovers the HTML served by the selected
  output layout, parses it with parse5 using source offsets, and hashes the exact
  script text. Without adapter output, it reads `.next/server/app` and
  `.next/server/pages` and appends exact-route policies to
  `.next/routes-manifest.json` after the global policy.
- Vercel's `onBuildComplete` adapter runs inside `next build`, before npm runs
  `postbuild`. With this adapter enabled, Next.js 16.4.2 uses a hashed
  `.next/server/route-cache` layout. The adapter has already copied the served
  artifacts into `.next/output` when postbuild starts. Legacy HTML directories
  can therefore be absent even after a successful static build.
- When `.next/output/config.json` exists, that Build Output API v3 output is
  authoritative. Discovery reads HTML from `.next/output/static`, respecting
  each static override's public `path`, and the HTML fallbacks named by
  `.next/output/functions/**/*.prerender-config.json`. The prerender filename
  gives the public route, with only root `index` mapped to `/`. Its `sourcePath`
  can name a dynamic parent such as `/papers/[slug]` and is not used as the child
  URL. Traced `.func` assets and RSC/JSON outputs are excluded.
- Postbuild installs the policies in both the Next manifest and the adapter's
  `.next/output/config.json`, which the Vercel builder consumes after the npm
  build command completes. It also updates HTML prerender `initialHeaders`,
  preserving their other metadata, so the cached fallback response carries the
  same CSP. Generated adapter rules precede terminal routing handlers; the
  original baseline CSP is removed from later rules to prevent it overwriting
  the script hashes. Other headers, redirects and routing behavior are retained.
- The global fallback and error routes include the known static error-page
  hashes, covering missing URLs and the emitted 404/500 documents. `/500` is an
  internal generated error document; a direct `/500` request can serve the site's
  404, so its policy must permit both static error templates.
- `vercel.json` explicitly selects `npm run build`. Do not replace this with a
  direct `next build`, skip npm lifecycle scripts, or deploy a stale `.next` tree.
- `npm run verify:security` checks the generated policies without changing files.
  `node scripts/verify-security-headers.mjs <base-url>` checks actual served GET
  headers and inline-script coverage, including a missing path and a redirect.
  The fixed `/research` redirect is checked separately for status 308 and the
  literal `/research-map` destination. Local Next and adapter routing can apply
  headers at different points, so inspect its actual response after deployment.

Hash policies are specific to a build. The step fails on unsupported manifest
schemas, missing homepage/error HTML, ambiguous or unsafe route mappings,
missing fallbacks, ISR or partial HTML, a new non-static literal page, more than
950 header rules or a policy above the conservative 12 KiB per-header budget.
Verification checks exact generated rule ordering, competing CSP rules, cached
prerender response policies and changed HTML, rather than merely finding hashes
somewhere in the route table. Its report is
`.next/security-headers-report.json`. New runtime-generated HTML, ISR, third-party
resources, URL base paths or changes to hosting adapters require a reviewed
policy change and another browser/HTTP verification pass.

This integration intentionally uses generated framework routing artifacts.
Compatibility is verified against the installed Next version recorded in the
build report. Clean-install local builds using the official matching
`@vercel/next@24.0.0` adapter completed all 599 static entries and installed
policies for 581 served HTML documents. A preliminary 26.0.0 adapter build also
passed. These are distinct from deployed Vercel responses.
The reported production CLI version, `vercel@64.7.0`, declares builder
`@vercel/next@24.0.0` with peer `@vercel/build-utils@14.22.0`. Its adapter file is
byte-for-byte identical to the examined 26.0.0 adapter. CI pins the matching
24.0.0 builder and its exact peer to cover the reported production toolchain.
Review these pins together when production Vercel tooling changes. They are
isolated CI tools and are not added to the application's dependencies or lockfile.

The adapter uses create-if-absent writes for prerender configuration files and
replaces their fallback HTML. When rerunning installation on retained metadata,
postbuild regenerates its own marked, strictly shaped hash policies from the
current HTML. Unmarked or relaxed unexpected policies are rejected. Read-only
verification rejects stale hashes until installation has recomputed them.

Production header and browser verification is still required after the corrected
build is deployed. Local adapter execution does not establish the hosting
account's final rewrites, cached public responses, browser hydration, navigation
or search. See the accompanying verification report for the checks actually run
and anything still pending.

The postbuild routine is idempotent. Its unit fixtures exercise both the ordinary
Next route-manifest path and Vercel static/prerender outputs with both legacy HTML
directories absent. `.github/workflows/ci.yml` runs separate clean-checkout jobs
for ordinary `npm run build` and the real adapter-backed build. Both run the
security unit tests and read-only `npm run verify:security` after postbuild.
Generated output is not shipped in the replacement source ZIP; it is rebuilt on
deployment.

## Remaining security boundaries

- Hashes authorize scripts already present in trusted build output. They cannot
  replace safe handling of upstream metadata or safe JSON-LD serialization.
- Same-origin JavaScript is allowed. The site has no user-upload or executable
  asset publishing feature; CSP does not audit the contents of trusted bundles.
- CSS remains less restrictive because of the existing mathematical and WebGL
  UI implementation. This is an intentional compatibility tradeoff.
- Development alone permits inline scripts, eval and WebSocket connections for
  Next.js HMR. Test production using a completed `npm run build` and `npm start`.
- HSTS is provided by the production HTTPS host and has not been added to local
  HTTP responses. No CORS relaxation or blanket CORS rewrite was introduced.
- Local optimizer disabling does not prove anything about a managed optimizer's
  private installed decoder versions. Verify the deployed configuration and
  package evidence separately.

## Verification evidence and primary references

The focused tests in `scripts/security-headers.test.mjs` check exact-byte hashing,
script policy restrictions, route-regex escaping, repeated postbuild execution,
stale-output detection, read-only verification, Vercel v3 static and prerender
output without legacy HTML, override and dynamic-parent route mapping, missing
fallbacks, error coverage, unsafe paths, header ordering and ISR rejection.
See `CSP_FIX_REPORT.md` and `docs/csp-fix-20261022/` for this fix's build and
served-response results. `SECURITY_VERIFICATION.md` also preserves the earlier
website update's separate checks.

Primary references inspected on 22 October 2026:

- [Next.js CSP guidance](https://nextjs.org/docs/app/guides/content-security-policy),
  particularly static generation versus nonce-based dynamic rendering.
- [Next.js response headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers),
  including later-match header overriding.
- [Vercel Next.js adapter source](https://github.com/vercel/vercel/blob/c628be7835e03a965b93e9cf9e2bd5ac2acbf5eb/packages/next/src/index.ts),
  inspected at commit `c628be7835e03a965b93e9cf9e2bd5ac2acbf5eb`: custom command
  execution at lines 541–588, Build Output API detection at 613–653, route-manifest
  loading at 709–713 and header conversion at 832–834. This source inspection is
  not an execution of the user's actual remote builder.
- Primary npm registry metadata for
  [`vercel@64.7.0`](https://registry.npmjs.org/vercel/64.7.0) and
  [`@vercel/next@24.0.0`](https://registry.npmjs.org/@vercel%2fnext/24.0.0),
  plus the installed official packages' `dist/index.js` and
  `dist/adapter/index.js`: the builder awaits the complete npm command, reads
  `.next/output/config.json`, and returns `.next/output` as the build-output path.
