# Forge CI smoke test

The branch-name CI check (`.github/workflows/branch-name.yml`) requires every branch other than `main` to have a name starting with `qwitter`. A branch such as `forge/...` will fail this check, which is expected for this disposable smoke test.
