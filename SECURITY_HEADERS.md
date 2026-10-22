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
  `scripts/security-headers.mjs`. It parses every emitted App Router/Pages HTML
  file with parse5 using source offsets, hashes the exact script text and appends
  exact-route policies to `.next/routes-manifest.json` after the global policy.
  The global fallback and error routes include the known static error-page
  hashes. `/500` is an internal generated error document; a direct `/500` request
  returns the site's 404, so its policy must permit both static error templates.
- If `.next/output/config.json` exists, the postbuild step also installs the
  same policies into that generated Vercel Build Output API v3 route table.
- `vercel.json` explicitly selects `npm run build`. Do not replace this with a
  direct `next build`, skip npm lifecycle scripts, or deploy a stale `.next` tree.
- `npm run verify:security` checks the generated policies without changing files.
  `node scripts/verify-security-headers.mjs <base-url>` checks actual served GET
  headers and inline-script coverage, including a missing path and a redirect.
  The fixed `/research` redirect is checked separately: Next returns status 308,
  the literal `/research-map` destination and no executable document before
  application header matching. No claim of CSP headers on that redirect is made.

Hash policies are specific to a build. The step fails on unsupported manifest
schemas, ISR HTML, a new non-static literal page, more than 950 header rules or a
policy above the conservative 12 KiB per-header budget. Its report is
`.next/security-headers-report.json`. New runtime-generated HTML, ISR, third-party
resources, URL base paths or changes to hosting adapters require a reviewed
policy change and another browser/HTTP verification pass.

This integration intentionally uses generated framework routing artifacts. It is
tested against the installed Next version recorded in the build report, rather
than promised compatible with every future Next release. Current Vercel adapter
source reads the completed custom-build output before it reads header routes.
Production header verification is still necessary after deployment: this local
work does not observe the hosting account's effective builder version, output
rewrites or cached public responses.

The postbuild routine is idempotent. Its unit fixtures exercise both the ordinary
Next route-manifest path and the optional Vercel Build Output API path. Generated
output is not shipped in the replacement source ZIP; it is rebuilt on deployment.

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
stale-output detection, read-only verification, Vercel v3 output and ISR rejection.
See the final `SECURITY_VERIFICATION.md` and HTTP report for actual full-build and
served-response results.

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
