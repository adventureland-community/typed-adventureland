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
| `main` | Exact tip that is published on [npm](https://www.npmjs.com/package/typed-adventureland). No day-to-day commits. |
| `dev` | Development default. Open feature PRs against `dev`. |

GitHub's default branch is `dev`. Promote `dev` → `main` only when cutting a release so `main` stays equal to the latest npm version.

## Releasing

Publishes run from GitHub Actions on `v*` tags via npm Trusted Publishing (OIDC). There is no `NPM_TOKEN`.

1. On `dev`, bump `version` in `package.json` and `package-lock.json` to the next version after the registry (for example `0.0.58`).
2. Merge `dev` into `main` (PR or fast-forward). `main` is now the release candidate.
3. From that commit on `main`, tag and push:

   ```bash
   git checkout main
   git pull
   git tag v0.0.58
   git push origin v0.0.58
   ```

   The tag must match `package.json` or the workflow fails.
4. Approve the `npm-publish` environment deployment on GitHub if prompted.
5. Confirm the new version (and provenance) on https://www.npmjs.com/package/typed-adventureland.
6. Leave `main` at that release tip. Keep developing on `dev`.

### One-time Trusted Publisher setup

Do this only when you are ready to tag within **2 days** (unused trust entries expire).

As an npm owner (`thmsn`), either:

```bash
npm trust github typed-adventureland \
  --file publish.yml \
  --repo adventureland-community/typed-adventureland \
  --env npm-publish \
  --allow-publish
```

or on https://www.npmjs.com/package/typed-adventureland → **Settings** → **Trusted Publisher** → GitHub Actions:

- Organization or user: `adventureland-community`
- Repository: `typed-adventureland`
- Workflow filename: `publish.yml`
- Environment name: `npm-publish`
- Allow `npm publish`

Details: https://docs.npmjs.com/trusted-publishers/
