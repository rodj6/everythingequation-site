# Bounded dependency security recommendations

Reviewed 22 October 2026 against `/workspace/scratch/6f24cc931e44/npm-audit.json`, current npm registry package metadata, the installed package manifests, and the primary advisory pages linked below. This document records the bounded remediation rationale and the implementation owner’s reported compatibility check below. The final clean-install versions, complete test results and audit counts belong in `SECURITY_VERIFICATION.md`. No production deployment or production exploitability was established by this review.

## Result

The supplied audit's 19 vulnerable-package entries represent fewer underlying advisories: several entries inherit the same vulnerable descendant. Do not count them as 19 independent exploited vulnerabilities, or let npm's automatic solver force an unrelated Tailwind 4 migration or downgrade the mathematics pipeline.

Most findings have compatible patch/minor resolutions. Two decisions need special care:

- `braces` has no published patched version in the checked advisory, and npm still reports latest `3.0.3`, the affected release. No honest patched-version override is available. Its Tailwind 3 tooling chain should remain disclosed unless deliberately replaced through a separately validated migration.
- `postcss-selector-parser` is patched in 7.1.6+, whereas this Tailwind 3/typography/nesting stack requests version 6. A 7.1.7 override is a cross-major compatibility decision requiring actual CSS tests, not an automatic semver-safe update.

## Selected implementation and compatibility evidence

The implementation owner reports selecting in-range updates together with PostCSS 8.5.31, root and transitive KaTeX 0.18.2 using the `$katex` override, and selector-parser 7.1.7. The owner compiled minified Tailwind CSS for the same full current `src`/`content` corpus before and after the selector-parser override and obtained byte-for-byte identical output (`cmp` exit 0). This is meaningful project-specific compatibility evidence for the cross-major parser override; clean install, production build and browser checks remain separately recorded by the owner.

Tailwind 3 is retained because replacing it with version 4 would migrate the CSS tooling/configuration and potentially alter the site’s established presentation for the sake of npm’s solver suggestion. The bounded patched parser override has a direct output comparison, whereas a framework-wide Tailwind migration would need its own broader validation. The unpatched braces chain remains an explicit residual toolchain finding. It is not declared patched, absent, harmless or exploited. No deployed request-path exploitability or compromise has been demonstrated.

## Recommended bounded version targets

| Package | Audit finding / patched floor | Recommended bounded target | Compatibility and verification |
| --- | --- | --- | --- |
| `postcss` | GHSA-fxqj-rqcc-2cmp affects <=8.5.22; fixed 8.5.23 | 8.5.31, replacing the stale 8.5.19 override | Same 8.x line; latest metadata depends on `nanoid ^3.3.20` and `source-map-js ^1.2.2`, covering their findings too. Rebuild CSS and inspect generated output. |
| `nanoid` | GHSA-2v37-7h3g-55p8 fixed 3.3.18 / 5.1.6 | 3.3.20 within the existing 3.x chain | Prefer the patched PostCSS dependency resolution; no need for unrelated Nano ID 5 migration. Verify every resolved instance. |
| `source-map-js` | GHSA-68fv-2mgg-jv7q fixed 1.2.2 | 1.2.2 | Compatible patch; prefer patched PostCSS's range, plus targeted override only if an older nested instance remains. |
| `browserslist` | GHSA-c83g-rgw3-j3cx and GHSA-73wf-gq98-2v4g affect <=4.28.6 | 4.29.4, registry latest in the retained 4.x line | Registry dependencies include baseline mapping ^2.11.29. Verify autoprefixer/build output. |
| `baseline-browser-mapping` | GHSA-w5vr-8v7q-w6rv fixed 2.11.0 | 2.11.30, registry latest within 2.x | Resolve through the updated Browserslist chain; verify no old nested instance. |
| `js-yaml` | GHSA-2883-xcg3-v3hh fixed 4.3.2; prior GHSA-5p4m-2wfm-xmqj fixed 4.3.1 | A patched 4.x release, at least 4.3.2 | Do not use latest 5.5.0 merely because it is latest: the YAML schema and merge behavior can differ. Re-run registry/content-map parsing and publication identity checks. |
| `fflate` under `three-stdlib` | GHSA-px8p-9vwx-vf98 fixed 0.6.11 on its existing branch | 0.6.11 for the `~0.6.9` consumer | Maintained branch patch avoids imposing the 0.8 API on a 0.6 consumer. Registry confirms 0.6.11 exists. Check resolved three-stdlib instance and Atlas behavior. |
| `katex` | GHSA-238p-pmpm-9mq7 fixed 0.18.2 | 0.18.2, root dependency plus deliberate descendant override where required | The audit solver suggests 0.19.0, but 0.18.2 is the documented fix and avoids a further unrelated version jump. This is still outside the existing ^0.16 ranges and needs full math/CSS checks. |
| `postcss-selector-parser` | GHSA-rj75-hqrm-r3gf fixed 7.1.6 | 7.1.7 only after compatibility testing | Cross-major override of Tailwind/typography/nesting's version-6 requirements. See test gate below. |
| `braces` and inherited alerts in micromatch/fast-glob/chokidar/Tailwind | GHSA-vfj7-8cjw-p6xm affects <=3.0.3; patched versions: None | No patched npm release confirmed | Keep the actual remaining audit chain visible. Do not invent 3.0.4, label it patched, replace with an unreviewed fork, or invoke `npm audit fix --force` to force Tailwind 4. |

The remaining wrapper alerts for `remark-math`, `micromark-extension-math` and `rehype-katex` originate from their KaTeX descendant. Preserve the existing plugin API versions and verify a deliberate KaTeX override rather than accepting npm solver suggestions to downgrade remark-math or rehype-katex to incompatible earlier majors.

## Selector-parser compatibility gate and rationale

The installed Tailwind 3.3.5 manifest requests `postcss-selector-parser ^6.0.11`; typography 0.5.9 pins `6.0.10`; postcss-nested 6.2.0 requests `^6.1.1`. Current typography 0.5.20 still pins 6.0.10, so simply updating typography does not close this advisory. Migrating postcss-nested to its latest 9.x is a separate major update and is unnecessary if a tested parser override suffices.

The parser's upstream changelog identifies version 7.0's major change as making insertions during iteration safe. The 7.1.6 advisory describes the security fix as replacing quadratic index scans with set membership and reports byte-identical parsing on its own differential corpus. That is helpful evidence, not a guarantee about this site's CSS build.

The gate below describes the compatibility criteria; the owner’s same-source CSS differential has already passed as recorded above:

1. Save the pre-override Tailwind/PostCSS output for the same frozen current source and configuration.
2. Compile the same source after the override. Compare normalized CSS rules/selectors, generated typography selectors, responsive states, arbitrary variants, pseudo-elements and nested CSS.
3. Verify Tailwind's private import `postcss-selector-parser/dist/util/unesc` still resolves; inspect its use in `tailwindcss/lib/util/formatVariantSelector.js`.
4. Run the full production build and browser checks on representative desktop/mobile pages. A build alone may not detect a selector changed by iteration semantics.
5. Record the cross-major override and evidence explicitly. If meaningful incompatibility appears, retain version 6 with a disclosed build-tool alert rather than silently shipping damaged styles.

For a site using only trusted repository CSS and content patterns at build time, these parser advisories do not by themselves demonstrate a public request-time attack path. Upstream GHSA-rj75-hqrm-r3gf expressly distinguishes ordinary build-time trusted-source use from synchronous parsing of attacker-supplied selectors. That applicability limit is not a patched-version claim.

## KaTeX preservation gate

The site imports KaTeX CSS globally while many preserved technical HTML documents contain pre-rendered KaTeX 0.16-era markup. An upgraded CSS/renderer can introduce visual changes even if mathematical LaTeX text is unchanged.

Prefer the minimum patched 0.18.2 and do not regenerate fixed publication editions merely to refresh markup. Verify:

- The clean installed tree has no vulnerable KaTeX descendant left in remark/rehype.
- Source-derived and freshly rendered MDX equations both display correctly, including display alignment, long formulas, tables, native fonts, superscripts/subscripts and MathML.
- Original TeX, PDF, Markdown and fixed HTML bytes remain unchanged except clearly separated editorial wrappers outside the publication body.
- The build's math warnings are reviewed against the baseline; security updating does not authorize mathematical rewriting.

The KaTeX advisory requires pre-existing prototype pollution or control of an options prototype plus attacker-controlled mathematical input. It does not state that KaTeX causes prototype pollution or automatically executes script during rendering. Do not overstate the site's demonstrated exposure.

## Remaining braces finding and risk treatment

`braces` 3.0.3 remains current and unpatched in the checked sources. `micromatch` latest 4.0.8 still depends on `braces ^3.0.3`; `fast-glob` latest 3.3.3 uses micromatch; Tailwind 3.4.19 is the latest retained 3.x branch in registry metadata. Updating these packages within their majors alone does not remove the vulnerable descendant.

The site currently uses these glob/selector tools in its repository build/development pipeline, not an intentional public glob-evaluation API. Keep source patterns trusted, review contributions/workflows and do not introduce user-provided glob/CSS processing on a request path. This is a bounded applicability assessment, not comprehensive proof of non-reachability or a vulnerability fix. A later Tailwind/toolchain migration can remove the dependency but requires a separate design-preserving validation effort.

The final package should carry the honest remaining audit result. `npm audit --omit=dev` can help distinguish a development-tool chain from production-declared packages, but is not a comprehensive runtime reachability analysis: build dependencies still matter, and dependency labels do not prove how bundling works.

## Acceptance and reporting

After the owner makes the selected edits, use a clean lockfile-driven install; inspect `npm ls` for every target and nested instance; run both full and production-declared `npm audit` reports; type-check; build; inspect browser behavior and CSP/math/layout. Record unsupported advisories separately from tested fixes. A successful lockfile resolution is not evidence of an installed production runtime or a completed deployment.

No package input, lockfile or node_modules content was modified by preparing this recommendation report.

## Current sources

Primary GitHub advisory and upstream release pages opened during this review:

- [Unpatched braces stack exhaustion](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)
- [PostCSS source-map boundary](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp)
- [Selector parser complexity and patched version](https://github.com/advisories/GHSA-rj75-hqrm-r3gf)
- [Selector parser changelog](https://github.com/postcss/postcss-selector-parser/blob/main/CHANGELOG.md)
- [KaTeX prototype-options trust issue](https://github.com/advisories/GHSA-238p-pmpm-9mq7)
- [KaTeX 0.18.2 release](https://github.com/KaTeX/KaTeX/releases/tag/v0.18.2)
- [JS-YAML empty merge-source budget](https://github.com/advisories/GHSA-2883-xcg3-v3hh)
- [fflate ZIP64 infinite loop](https://github.com/advisories/GHSA-px8p-9vwx-vf98)
- [Baseline browser mapping invalid-input exit](https://github.com/advisories/GHSA-w5vr-8v7q-w6rv)
- [Browserslist cache growth](https://github.com/advisories/GHSA-c83g-rgw3-j3cx)
- [Browserslist custom-stat handling](https://github.com/advisories/GHSA-73wf-gq98-2v4g)
- [Nano ID zero-size custom generators](https://github.com/advisories/GHSA-2v37-7h3g-55p8)
- [source-map-js indexed offsets](https://github.com/advisories/GHSA-68fv-2mgg-jv7q)

Registry reads used `npm view` for the exact packages/branches in the table; they are release-availability and dependency metadata, not a proof of production installation. Findings are dated and should be rechecked for later deployments.
