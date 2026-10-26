# typed-adventureland

Type definitions for the game [Adventure Land](https://adventure.land).

The project is still in alpha. Plenty of types are missing or rough. Ask for missing types or suggest changes in [GitHub Issues](https://github.com/adventureland-community/typed-adventureland/issues), or ping `thmsn#6385` / `Telokis#1111` on the official game Discord, preferably in the [dedicated thread](https://discord.com/channels/238332476743745536/1014762228530040902).

Initially based on https://github.com/BegLand/types-adventureland

## Installation

```bash
npm install --save-dev typed-adventureland
```

Add `"./node_modules/typed-adventureland"` to the `"include"` array in your `tsconfig.json` or `jsconfig.json`. See [the examples](./examples/) if that is unclear.

## Branches

| Branch | Role |
| --- | --- |
| `main` | What is published on npm. The tip of `main` should match the latest release on [npm](https://www.npmjs.com/package/typed-adventureland). |
| `dev` | Day-to-day development. Open feature PRs against `dev`. |

Do not land unfinished work on `main`. Promote from `dev` only when cutting a release.

## Releasing

Publishes run from GitHub Actions on `v*` tags via npm Trusted Publishing (OIDC). There is no long-lived `NPM_TOKEN`.

1. On `dev`, bump `version` in `package.json` and `package-lock.json` to the next version after the registry (for example `0.0.58`).
2. Merge `dev` into `main` (PR or fast-forward). After this merge, `main` is the release candidate.
3. From the release commit on `main`, tag and push:

   ```bash
   git checkout main
   git pull
   git tag v0.0.58
   git push origin v0.0.58
   ```

   The tag must match `package.json` or the workflow fails.
4. Approve the `npm-publish` environment deployment on GitHub if prompted.
5. Confirm the new version (and provenance) on https://www.npmjs.com/package/typed-adventureland.

Trusted Publisher setup (one-time, before the first OIDC publish) lives in the maintainer notes on the publish PR / workflow comments. npm requires a first successful publish within **2 days** of creating the trust entry. Details: https://docs.npmjs.com/trusted-publishers/
