# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for **Kadabra Labs Kft.** (AI workflow automation, Budapest) at https://kadabra-labs.com. It is a heavily trimmed fork of the **AstroWind** template (Astro 5 + Tailwind CSS 3), built as a fully static site (`output: 'static'`) and deployed on **Vercel** (`vercel.json`). `README.md` is the unmodified upstream AstroWind README — treat it as template docs, not project docs.

## Commands

```bash
npm run dev        # dev server at localhost:4321
npm run build      # static build to ./dist
npm run preview    # serve the built site
npm run check      # astro check + eslint + prettier --check (what CI runs)
npm run fix        # eslint --fix + prettier -w
```

There is no test suite. CI (`.github/workflows/actions.yaml`) runs `npm run build` on Node 18/20/22 and `npm run check` on Node 22 for pushes and PRs to `main`, so run both before opening a PR.

## Site structure

The site is a single landing page in two languages:

- `src/pages/index.astro` — **Hungarian, the primary language, served at `/`**.
- `src/pages/en/index.astro` — English version at `/en`.
- `src/pages/privacy.md`, `src/pages/terms.md` — rendered via `MarkdownLayout` → `PageLayout` (still the template's demo legal text).
- `/hu` does not exist as a page; `vercel.json` permanently redirects `/hu` → `/` (Hungarian used to live there).

Key things that span multiple files:

- **Each landing page defines its own `headerData`/`footerData` inline** and passes them into the `header`/`footer` slots of `PageLayout`. The shared `src/navigation.ts` is only the fallback used by pages that don't override those slots (i.e. privacy/terms). It is out of sync with the landing pages (English labels, still links to `/hu`), so edits to nav/footer usually need to be made in both landing pages, and possibly `navigation.ts`.
- **HU and EN pages are parallel copies** with the same sections (Hero → Features `#services` → Steps `#how-we-work` → CallToAction). Content changes should be mirrored in both. Hungarian copy uses Hungarian name order (e.g. "Gyuris Krisztián"). The primary CTA is the cal.com link `https://cal.com/kadabralabs/15min`.
- **Site config lives in `src/config.yaml`** (site URL, SEO defaults, blog toggles, analytics, theme). It is loaded by the local integration in `vendor/integration/` and exposed as the virtual module `astrowind:config` (consumed via `src/utils/*`). The blog is fully disabled there (`apps.blog.*.isEnabled: false`). Note `i18n.language` is `en`, which sets `<html lang>` for every page, including the Hungarian root.
- Page sections are composed from AstroWind widgets in `src/components/widgets/` built on primitives in `src/components/ui/`; many widgets/blog components are unused template leftovers.
- Import alias `~` → `src/` (configured in `astro.config.ts`).
- Icons come from `astro-icon`; only the `tabler` set (all icons) and an explicit allowlist of `flat-color-icons` in `astro.config.ts` are bundled — add new `flat-color-icons` names there or the build fails.
- Theme/colors/fonts: `src/components/CustomStyles.astro` and `src/assets/styles/tailwind.css`.

## Formatting

Prettier (`.prettierrc.cjs`, with `prettier-plugin-astro`) and ESLint flat config (`eslint.config.js`) are enforced by `npm run check`.
