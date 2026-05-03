# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### `artifacts/talkprep` — TalkPrep web app
- **Framework**: React + Vite + Wouter (client-side routing)
- **Styling**: TailwindCSS v4 (article page only) + scoped plain CSS under `.tp-page` (all other pages)
- **Design tokens**: Two coexisting systems — article uses HSL-format Tailwind CSS vars; new pages use hex CSS vars scoped under `.tp-page` to avoid conflicts
- **Fonts**: Lora (serif headings), DM Sans (body), DM Mono (labels/mono), Playfair Display + Source Serif 4 (article only)
- **Routes**:
  - `/` → Home (landing page)
  - `/how-to-resign-from-a-job` → Article (with AI script generator via SSE)
  - `/how-to-confront-a-friend` → Article page (`.art-wrap` CSS system)
  - `/how-to-fire-someone` → Article page (`.art-wrap` CSS system)
  - `/how-to-give-difficult-feedback` → Article page (`.art-wrap` CSS system)
  - `/how-to-have-a-performance-review-conversation` → Article page (`.art-wrap` CSS system)
  - `/how-to-set-a-boundary-with-family` → Article page (`.art-wrap` CSS system)
  - `/how-to-tell-partner-something-difficult` → Article page (`.art-wrap` CSS system)
  - `/how-it-works` → How it works (5-step walkthrough + FAQ)
  - `/pricing` → Pricing (3-tier cards + comparison table + FAQ)
  - `/scenarios` → Scenarios (11 conversation types)
  - `/guides` → Guides (featured guide + 7 live cards + newsletter)
  - `/blog` → Blog (featured post with real images + 9-post grid)
  - `/about` → About (story + stats + values)
- **Styling**: Three coexisting systems:
  1. Tailwind HSL-vars (original `/how-to-resign-from-a-job` article only)
  2. `.tp-page` scoped CSS with hex vars (all marketing pages)
  3. `.art-wrap` scoped CSS with hex vars (new article pages in `index.css` ~line 975+)
- **Shared components**: `SiteNav.tsx` (sticky nav, active tab detection, mobile menu), `SiteFooter.tsx`
- **SEO**: react-helmet-async, JSON-LD Article schema, OG/Twitter meta, BreadcrumbList on all article pages; sitemap.xml has all 14 URLs
- **API**: SSE stream from `/api/resignation-script` on the API server artifact

### `artifacts/api-server` — Express API server
- Serves `/api/resignation-script` (SSE streaming endpoint)
