# svelte-check-reporter demo

A small SvelteKit app that shows what
[svelte-check-reporter](https://github.com/faissalrez/svelte-check-reporter) does
in CI.

`main` already has one type error, in `src/lib/products.ts`. Each pull request
adds a cart total with two type errors and one Svelte warning:

- [Annotations](https://github.com/faissalrez/svelte-check-reporter-demo/pull/1),
  with [`annotations.yml`](.github/workflows/annotations.yml): every problem, the
  one already on `main` included.
- [Code scanning](https://github.com/faissalrez/svelte-check-reporter-demo/pull/2),
  with [`code-scanning.yml`](.github/workflows/code-scanning.yml): only the three
  problems the pull request adds.
- [Code Quality](https://gitlab.com/faissalrez/svelte-check-reporter-demo/-/merge_requests/1),
  on GitLab, with [`.gitlab-ci.yml`](.gitlab-ci.yml): the merge request also fixes
  the error on `main`, so the widget shows three new problems and one fixed.

A real project would pick annotations or code scanning, not both: here, each
workflow only runs on its own pull request. The pull requests stay open on
purpose.
