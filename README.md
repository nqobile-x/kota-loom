# KOTA LOOM

> Woven With Flavour. The marketing site for KOTA LOOM, a kasi street-food brand
> from Hillbrow, Johannesburg.

A single-page React site: hero, the loom process, menu, story, franchise pitch,
and a WhatsApp order flow.

## Stack

- **Vite** + **React 18**
- **Tailwind CSS v4** (CSS-first config via `@theme` in `src/index.css`)
- **Motion** (`motion/react`) for load and scroll animation
- **Phosphor Icons**
- Self-hosted **Anton** (headlines) and **Montserrat** (body) via Fontsource

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Brand tokens

Defined once in `src/index.css` under `@theme`, exposed as Tailwind utilities
(`bg-ink`, `text-gold`, `bg-espresso`, `text-cream`, `font-display`, `font-body`).

| Token      | Hex       | Use                          |
| ---------- | --------- | ---------------------------- |
| ink        | `#1A1A1A` | Deep matte black, page base  |
| gold       | `#D4A017` | Burnt gold, single accent    |
| cream      | `#F5ECD7` | Warm cream, primary text     |
| espresso   | `#2C1810` | Dark espresso, card surfaces |

## Structure

```
src/
  components/   Navbar, Hero, LoomProcess, Menu, Story, Franchise, Visit, Footer,
                WovenPattern (brand texture), Reveal (scroll-in wrapper)
  data/         menu.js, steps.js
  index.css     Tailwind import + brand theme tokens + base styles
  App.jsx       Page assembly
```

## Editing content

- **Menu items / prices:** `src/data/menu.js`
- **Build steps:** `src/data/steps.js`
- **Contact + WhatsApp number:** `src/components/Visit.jsx` (`WHATSAPP`,
  `PHONE_DISPLAY`) and `src/components/Footer.jsx`
- **Franchise enquiry email:** `src/components/Franchise.jsx`

## Adding real photography

The site is designed to look complete without per-item photos, but it is
photo-ready:

- **Menu cards** have a marked `TODO` slot in `src/components/Menu.jsx`. Add an
  `image` field to items in `menu.js` and uncomment the `<img>`.
- **Story** and **Franchise** sections ship with self-contained, on-brand
  textured panels (gradient + woven motif) so nothing depends on an external
  image. Each has a marked `TODO` showing exactly where to drop a real photo
  (`<img className="absolute inset-0 h-full w-full object-cover" />`); the
  espresso + gold scrims then tint it on-brand automatically.

## Accessibility & performance notes

- One locked dark theme, single gold accent, WCAG AA contrast on text and CTAs.
- All motion honors `prefers-reduced-motion`.
- Fonts are self-hosted (no render-blocking external `<link>`).
- Images are lazy-loaded; animations run on `transform` / `opacity` only.
