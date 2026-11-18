# AGENTS.md

## Project

Static marketing site for Veltro Appliances (appliance repair in Dublin), live at
`https://www.veltroappliances.com`. React 19 + TypeScript + Vite 8, Tailwind CSS v4, React
Router. No backend, no tests against a server, and no environment variables; the booking
form only builds a `wa.me` link.

## Commands

```bash
npm install
npm run dev        # http://localhost:5173/
npm run test       # vitest run
npm run test:watch
npm run lint       # oxlint
npm run typecheck  # tsc -b
npm run build      # tsc -b && vite build
npm run preview    # serve dist/
npm run format     # prettier --write .
```

- Single test file: `npx vitest run src/features/booking/booking.schema.test.ts`
- Order that matters: `npm run lint` → `npm run test` → `npm run build` (build includes
  typecheck). CI only runs test and build, so lint/format are easy to miss.
- Use npm; `package-lock.json` is committed and CI runs `npm ci`.

## Structure

- `src/content/` holds all copy and contact details (`site.ts`, `home.ts`, `services.ts`,
  `gallery.ts`, `privacy.ts`). Edit it there, not in JSX; `src/types/content.ts` types it
  and is enforced with `satisfies`.
- Gallery clips live in `src/content/gallery.ts` with media in `public/videos/` and
  posters in `public/images/gallery/`. Keep the Instagram link for each clip;
  `gallery.test.ts` checks the files exist and the links are valid.
- Adding a service requires three edits: `src/content/services.ts`, the
  `ServiceIconName` union in `src/types/content.ts`, and the icon map in
  `src/components/shared/service-icon.tsx`.
- Routes live in `src/App.tsx` (`/`, `/privacy`, `*`). `BrowserRouter` uses
  `import.meta.env.BASE_URL` as its basename.
- Booking logic is pure and tested: `src/features/booking/booking.schema.ts` (Zod) and
  `booking.whatsapp.ts` (message/URL building). Nothing is sent server-side.
- Tests are colocated as `*.test.ts` and run in jsdom (`src/test/setup.ts`). Globals are
  off, so import `describe`/`it`/`expect` from `vitest` explicitly.

## Styling

- Tailwind v4 is configured in `src/index.css` via `@theme`; there is no
  `tailwind.config.*`.
- Use brand tokens (`bg-brand-navy`, `text-brand-yellow`, etc.) rather than arbitrary
  colors. Sections use the shared `max-w-page` container and `px-5 sm:px-8 lg:px-10`.

## Gotchas

- `base: '/'` serves the site from the root of the custom domain
  (`www.veltroappliances.com`). Any `public/` asset referenced from TS/TSX must still be
  prefixed with `import.meta.env.BASE_URL` (see `src/content/home.ts`) so it keeps
  working if the base path changes again.
- Deployment is GitHub Pages only (`.github/workflows/deploy.yml`): push/merge to `main`
  runs tests, builds, copies `dist/index.html` to `dist/404.html` for the SPA fallback, and
  deploys. Develop on `dev`, merge to `main`. GitHub Pages is the only host; don't add
  Vercel or Netlify configs.
- `.github` is listed in `.gitignore`. `deploy.yml` is already tracked, but new files
  under `.github/` need `git add -f` (and ideally removing the ignore entry).
- Contact details are hardcoded outside `src/content/`: phone, email and Instagram appear
  in the `index.html` JSON-LD, canonical/OG/Twitter tags, and the domain in
  `public/robots.txt` and `public/sitemap.xml`. Update them together.
- `tsconfig.tsbuildinfo` is committed; typecheck/build can modify it. Don't include
  incidental changes to it.
- Prettier: no semicolons, single quotes, trailing commas, 100 columns. Oxlint is used
  instead of ESLint.

## License

MIT © 2026 Johan McGregor; see `LICENSE`.
