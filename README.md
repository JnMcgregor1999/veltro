# Veltro Appliances

Landing page for Veltro Appliances, an appliance repair service in Dublin.

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
npm install
npm run dev
npm run build
npm run preview
npm run typecheck
npm run lint
npm run test
npm run format
```

## Routes

| Path       | Page           |
| ---------- | -------------- |
| `/`        | Landing page   |
| `/privacy` | Privacy policy |
| `*`        | Not found      |

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
├── features/booking/       # Booking form + WhatsApp gateway
├── content/                # Editable site copy and services
├── hooks/                  # Document title and other hooks
├── types/                  # Shared contracts
├── lib/                    # Utilities
└── test/                   # Vitest setup
```

Imports use the `@/` alias, which maps to `src/`.

## Layout and styling

All sections use the shared `max-w-page` container defined by
`--container-page` in `src/index.css` (currently `1280px`). It keeps content
centered with side margins on large screens, while section backgrounds stay
full width. Side padding scales with `px-5` on mobile, `sm:px-8` and
`lg:px-10`.

Brand colors and the sans font are defined as Tailwind `@theme` tokens in
`src/index.css` (for example `bg-brand-navy` or `text-brand-yellow`). Prefer
these tokens over arbitrary colors and keep new sections aligned to the
`max-w-page` container.

## Content

All copy lives in `src/content/`. To add a service, edit
`src/content/services.ts`. To change contact details, edit
`src/content/site.ts`.

## Booking flow

The form validates with Zod and builds a `wa.me` link. Nothing is sent
automatically: the visitor reviews and sends the message in WhatsApp. If the
popup is blocked, the form shows a manual link and the phone number.

The schema and link-building logic live in `src/features/booking/` and are
covered by Vitest.

## Testing

```bash
npm run test        # single run
npm run test:watch  # watch mode
```

Tests run with Vitest in a jsdom environment. The setup file is
`src/test/setup.ts`.

## Deployment

The site is a single-page app. The repository includes:

- `vercel.json` with an SPA rewrite for Vercel.
- `public/_redirects` for Netlify.

Replace the placeholder domain `https://veltroappliances.ie` in `index.html`,
`public/robots.txt` and `public/sitemap.xml` before going live.
