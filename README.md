# Veltro Appliances

Marketing site for Veltro Appliances, an appliance repair service in Dublin:
[www.veltroappliances.com](https://www.veltroappliances.com).

It is a static single-page app with no backend and no environment variables. The booking
form only builds a `wa.me` link; the visitor reviews and sends the message from their own
WhatsApp.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router
- Zod
- Vitest + Testing Library
- Oxlint + Prettier

## Commands

```bash
npm install        # install dependencies (npm ci in CI)
npm run dev        # dev server at http://localhost:5173/
npm run build      # typecheck + production build in dist/
npm run preview    # serve the production build locally
npm run typecheck  # tsc -b
npm run lint       # oxlint
npm run test       # vitest run
npm run test:watch # vitest in watch mode
npm run format     # prettier --write .
```

The useful order is `lint` → `test` → `build`; the build includes the typecheck. CI only
runs tests and the build, so lint and format are easy to forget.

## Routes

| Path       | Page           |
| ---------- | -------------- |
| `/`        | Landing page   |
| `/privacy` | Privacy policy |
| `*`        | Not found      |

Routes are declared in `src/App.tsx`.

## Structure

```txt
src/
├── App.tsx                 # Router + shared layout
├── main.tsx                # Entry point
├── index.css               # Tailwind setup + brand tokens
├── pages/                  # Route-level composition
├── components/
│   ├── ui/                 # Button and form controls
│   ├── layout/             # Header, mobile menu, footer
│   ├── sections/           # Landing sections
│   └── shared/             # Logo, headings, icons, scroll
├── features/booking/       # Booking form, schema and WhatsApp gateway
├── content/                # Editable site copy, services, gallery and contact details
├── hooks/                  # Document title, media query and other hooks
├── types/                  # Shared contracts
├── lib/                    # Utilities
└── test/                   # Vitest setup
```

Imports use the `@/` alias, which maps to `src/`.

## Layout and styling

All sections use the shared `max-w-page` container defined by `--container-page` in
`src/index.css` (currently `1280px`). It keeps content centered with side margins on large
screens, while section backgrounds stay full width. Side padding scales with `px-5` on
mobile, `sm:px-8` and `lg:px-10`.

Brand colors and the sans font are defined as Tailwind `@theme` tokens in `src/index.css`
(for example `bg-brand-navy` or `text-brand-yellow`). Prefer these tokens over arbitrary
colors and keep new sections aligned to the `max-w-page` container.

## Content

All copy lives in `src/content/` and is typed by `src/types/content.ts`.

- `site.ts`: brand name, phone, WhatsApp number, email, Instagram and navigation.
- `home.ts`: hero, trust bar, services intro, about and booking copy. Public images are
  prefixed with `import.meta.env.BASE_URL`.
- `services.ts`: the list of repaired appliances. Adding a service needs three edits:
  this file, the `ServiceIconName` union in `src/types/content.ts`, and the icon map in
  `src/components/shared/service-icon.tsx`.
- `gallery.ts`: video clips, posters and the original Instagram links.
- `privacy.ts`: privacy policy sections.

The gallery needs a 9:16 `poster` in `public/images/gallery/` and an `.mp4` in
`public/videos/` for every entry (clips are exported from the shop's Instagram account).
`src/content/gallery.test.ts` fails if a referenced file is missing or an Instagram link is
malformed.

Contact details also appear in the `index.html` JSON-LD, canonical/OG/Twitter tags,
`public/robots.txt` and `public/sitemap.xml`; update those when the domain, phone, email or
Instagram handle changes.

## Booking flow

The form validates with Zod and builds a `wa.me` link. Nothing is sent automatically: the
visitor reviews and sends the message in WhatsApp. If the popup is blocked, the form shows
a manual link and the phone number.

The schema and link-building logic live in `src/features/booking/` and are covered by
Vitest.

## Testing

```bash
npm run test        # single run
npm run test:watch  # watch mode
```

Tests run with Vitest in a jsdom environment. The setup file is `src/test/setup.ts`.
Test files sit next to the code they cover as `*.test.ts`; globals are off, so import
`describe`, `it` and `expect` from `vitest` explicitly.

## Deployment

The site is deployed to GitHub Pages from `.github/workflows/deploy.yml` on every push to
`main` (or manually via `workflow_dispatch`):

1. Install with `npm ci`.
2. Run the tests and the production build.
3. Copy `dist/index.html` to `dist/404.html` so client-side routes work on a hard refresh.
4. Upload and deploy the `dist` artifact.

`base: '/'` in `vite.config.ts` serves the site from the root of the custom domain
`https://www.veltroappliances.com`, so any `public/` asset referenced from TS/TSX must be
prefixed with `import.meta.env.BASE_URL`. Develop on `dev` and merge to `main` to publish.

GitHub Pages is the only hosting setup; there are no Vercel or Netlify configs to maintain.

## License

[MIT](./LICENSE) © 2026 Johan McGregor
