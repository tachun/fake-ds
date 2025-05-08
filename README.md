# Fake DS

This is a fake design system built with [Shadcn](https://ui.shadcn.com/).

## How to use

Add components, hooks, utils, etc. into registry.json. and run `pnpm run build-registry`.
This script will generate json files in `public/r` directory.

## How to import

```bash
npx shadcn add https://fake-ds.vercel.app/r/card.json
npx shadcn add https://fake-ds.vercel.app/r/theme.json
```
