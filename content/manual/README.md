# Manual Content

This directory holds user‑authored MDX blocks for individual problems and
papers. The build system will never overwrite files under this path; it
assumes that the user maintains manual content independently of the
automated registry generation.

* `problems/{slug}.mdx` – Additional commentary or notes to appear on the
  corresponding problem page.
* `papers/{slug}.mdx` – Additional commentary or notes to appear on the
  corresponding paper page.

Example:

```bash
content/manual/problems/my-problem.mdx
content/manual/papers/my-paper.mdx
```

When a new problem or paper is added to the registry, you may create a
matching MDX file here to insert bespoke narrative, diagrams or
discussion that persists between registry regenerations.