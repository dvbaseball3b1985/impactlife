# Impact Life — Home Church Website

Multi-page static site built with [Astro](https://astro.build). Olive green and black theme.

## Getting started

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build
npm run check     # type-check .astro files
```

## Structure

```
src/
  data/site.ts          # church name, contact info, nav, home church list, events
  styles/global.css     # color tokens (olive/black) and shared utility classes
  layouts/BaseLayout    # <head>, fonts, header, footer
  components/           # Header, Footer, PageHero, CallToAction
  pages/                # index, about, home-churches, host, events, contact, 404
public/                 # static assets (favicon)
```

## TODO before launch

- Update `site` in `astro.config.mjs` with the real domain.
- Replace placeholder content in `src/data/site.ts` (contact info, groups, events, team).
- Connect the forms on `/host` and `/contact` to a form service (Formspree, Netlify Forms, etc.).
- Add real photos to `public/`.
