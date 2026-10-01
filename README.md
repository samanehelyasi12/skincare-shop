# فروشگاه مراقبت از پوست — Frontend

Next.js (App Router) + TypeScript + Tailwind CSS frontend for a Persian,
RTL skincare e-commerce store. Prepared for a future Django REST API backend.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # Windows: copy .env.local.example .env.local
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Script            | Purpose                          |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the dev server             |
| `npm run build`   | Production build                 |
| `npm start`       | Serve the production build       |
| `npm run lint`    | ESLint (flat config)             |
| `npm run typecheck` | `tsc --noEmit`                |

## Architecture

```
src/
├── app/          Routes, layouts, metadata, loading/error states
├── components/   Reusable presentation
│   ├── ui/       Generic primitives (Button, Input, Badge) — no domain logic
│   ├── layout/   Page chrome (Header, Footer, Container)
│   ├── navigation/  Route-aware nav links
│   ├── category/    Category presentation
│   └── home/        Homepage sections
├── lib/
│   ├── api/      The only place that calls the backend
│   ├── constants/ Endpoint paths, pagination defaults
│   └── utils/    Pure helpers (formatPrice, cn)
├── types/        Domain models
├── hooks/        Reusable React hooks
└── config/site.ts Global brand, navigation and metadata config
```

### Rules of thumb

- **Server Components by default.** Add `"use client"` only for state, event
  handlers, browser APIs or the client stores.
- **Never call `fetch` in a component.** Go through `src/lib/api/client.ts`;
  it owns the base URL, error normalisation and JSON handling.
- **Keep domain types in `src/types/`.** Extend them alongside the Django
  serializers rather than re-declaring interfaces per component.
- **No hidden API hosts.** The host comes from `NEXT_PUBLIC_API_URL`.

## Environment variables

| Variable              | Purpose                                  | Default                 |
| --------------------- | ---------------------------------------- | ----------------------- |
| `NEXT_PUBLIC_API_URL` | Django REST API base URL                 | _required at call time_ |
| `NEXT_PUBLIC_SITE_URL`| Canonical / Open Graph URL               | `http://localhost:3000` |

## API integration

`src/lib/api/client.ts` exports `apiFetch`, which throws `ApiRequestError`
carrying a normalised `message` and `status`. Resource modules
(`products.ts`, `categories.ts`) contain the DTO → domain mapping, so the UI
never depends on the backend's field names, and pagination is handled whether
DRF returns a bare array or a paginated envelope.

Routes currently expected from the backend:

```
GET /api/products/
GET /api/products/{slug}/
GET /api/categories/
GET /api/categories/{slug}/
```

## Not built yet

Deliberately absent until the corresponding functionality is implemented:
cart, wishlist, checkout, auth, account, orders, search, reviews, and
`/products`, `/categories`, `/about`, `/contact` routes. Those navigation
targets resolve to the 404 page for now.