# Standara website

Marketing site for Standara Ltd, built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4 and `motion`.
The approved static design lives in [`design/`](design/) and is the source of truth for look, motion and copy.

## Run it

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint         # ESLint (next config + prettier)
pnpm format       # Prettier
pnpm build && pnpm start
```

Node 20+ and pnpm 10 are expected. If pnpm is not installed: `npx pnpm@10 <command>`.

## Where things live

| What                                                                | Where                                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **All page copy**                                                   | [`content/`](content/): `site.ts` (nav, footer, legal), `home.ts`, `platform.ts`, `who.ts` |
| Design tokens + all styles (ported from `design/assets/styles.css`) | [`app/globals.css`](app/globals.css)                                                       |
| Page sections                                                       | `components/home`, `components/platform`, `components/who`                                 |
| Header, footer, logo                                                | `components/layout`                                                                        |
| Scroll reveal, count-up, headline words                             | `components/motion`                                                                        |
| Contact form                                                        | `components/who/ContactForm.tsx` → `app/actions/register-interest.ts`                      |

Edit wording in `content/*.ts` only; components read from there.

## Before launch

1. **Site URL.** Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.example.co.uk`). It is used for canonical URLs, the sitemap, robots.txt and Open Graph.
2. **Lead delivery.** Form submissions go to `sendLead()` in [`lib/leads.ts`](lib/leads.ts), which is currently a **stub**: it logs leads in development and only warns in production, so leads are not delivered anywhere. Connect it to your destination there (a commented `fetch` to `LEAD_WEBHOOK_URL` is ready to uncomment), then set `LEAD_WEBHOOK_URL` in the environment (see `.env.example`).

## Form protection

- Zod validation on the client (React Hook Form) and again in the server action (`lib/lead-schema.ts` is shared).
- Hidden honeypot field (`website`); filled submissions are silently accepted and dropped.
- In-memory rate limit: 5 submissions per IP per minute (`lib/rate-limit.ts`). It is per server instance, so use a shared store if you run several instances.

## Motion notes

- Everything in the design's MOTION LAYER is reproduced and wrapped in `prefers-reduced-motion: no-preference`, so reduced-motion visitors see the final state.
- Scroll reveals only hide content after hydration, and only for elements that start below the fold. Without JavaScript, every section renders fully.
- The hero headline and Trust Score report animations are CSS keyframes, so they finish in their final state on their own.
