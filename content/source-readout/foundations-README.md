# Foundational source–readout reading editions

Seven complete technical web editions, generated from the supplied TeX sources. The original supplied PDF and TeX bytes are preserved under `public/publications/source-readout/foundations/<paper>/`.

Each edition includes the abstract, every main section and subsection, all definitions and numbered statements, complete written proofs, examples, equations, and bibliography. The conversion changes web layout and em-dash punctuation only; theorem hypotheses and conclusions remain the publication's own. Custom mathematical macros are expanded by the TeX reader, and all mathematical expressions have server-rendered KaTeX HTML and MathML with TeX annotations. The original mathematical notation is also available in the complete Markdown edition.

## Rebuild

From the site root:

```bash
python3 scripts/convert-source-readout-foundations.py
node scripts/convert-source-readout-foundations-math.mjs
```

The first command needs Pandoc and pdfLaTeX. It uses the bundled original sources by default, or accepts an alternative source directory with `Paper 1` through `Paper 7` subdirectories. TeX compilation occurs under `tmp/` solely to recover source equation, statement, section and item counters. It does not replace the original publication PDF. The second command needs the existing Node dependencies.

## Coverage and limitations

`foundations-audit.json` records the per-paper source hashes, heading, statement, proof, source-label, bibliography and math counts, unresolved-reference inventory, unsupported raw nodes, and KaTeX errors. Each public edition includes its own `conversion-audit.json`.

This is a content-conversion audit, not a proof of the mathematical results or empirical verification of the framework. The converter preserves the full technical arguments for inspection. Source title-page dates remain in the preserved originals; the web catalogue separately records the established canonical publication identifiers and dates.
