# TryModafinil — marketing site

React + Vite + TypeScript + Tailwind CSS v4 + React Router + lucide-react.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # serve the build
```

## Where things live

| Path | What |
| --- | --- |
| `src/content.ts` | **All copy, prices, links, FAQ, reviews.** Edit text here. |
| `src/index.css` | Theme tokens (colors, fonts, shadows, animations). |
| `src/components/` | Global & reusable UI: `AnnouncementBar`, `Header`, `StickyCTA`, `Footer`, `Logo`, `Tablet`, `ProductBottle`, `GumBox`, `Accordion`, `ui.tsx` (`Button`, `SectionHeading`, `Reveal`, `Card`, `Stars`, `CheckList`…), `blocks.tsx` (`TrustRow`, `BenefitsStrip`, `EmailForm`). |
| `src/sections/home/` | Home page sections. |
| `src/pages/` | `Home` (/), `Pills` (/pills), `Gum` (/gum), `InfoPage` (/our-story, /contact, legal pages). |

## Before launch

- `site.checkoutHref` in `content.ts` is a placeholder (`#checkout`). Point it at your intake/checkout; the product page appends `?plan=<id>`.
- `EmailForm` (waitlist + newsletter) has no backend — wire the `TODO` in `src/components/blocks.tsx` to your ESP.
- Reviews are sample copy (flagged on the page). Replace with verified reviews.
- Legal pages are placeholders. Replace with counsel-reviewed text.
- For SPA hosting, configure a fallback to `index.html` (e.g. Netlify `_redirects`, Vercel rewrites).
