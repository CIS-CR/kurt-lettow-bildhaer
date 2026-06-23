# Kurt Lettow Bildhaer — A Living Biography

A static Astro website prepared as a refined, editorial home for the verified biography, family memory, and historical legacy of Kurt Lettow Bildhaer.

## Important content notice

All biographical copy, dates, events, references, and archive descriptions in this initial version are placeholders. They must be replaced with verified family or historical information before public launch.

The generated images in `public/images/` are fictional visual placeholders. In particular, `portrait-placeholder.webp` does **not** depict Kurt Lettow Bildhaer. Lossless source PNG files are retained in `source-assets/generated-originals/`.

## Stack

- Astro with static output
- TypeScript content data
- Plain CSS
- Minimal client-side JavaScript for navigation and reveal transitions
- No server adapter or heavy frontend framework

## Local development

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Astro, normally `http://localhost:4321`.

Useful commands:

```bash
npm run check
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Content maintenance

Edit structured content here:

- Biography chapters: `src/data/biography.ts`
- Timeline events: `src/data/timeline.ts`
- Gallery and archive items: `src/data/gallery.ts`

Replace visual placeholders in `public/images/`. Keep descriptive alt text accurate when replacing an image.

Shared components live in `src/components/`, page routes in `src/pages/`, and the global visual system in `src/styles/global.css`.

## Routes

- `/` — primary one-page narrative
- `/archive` — working archive view
- `/gallery` — visual collection view
- `/timeline` — chronology view
- `/references` — sources and acknowledgments

## SEO and launch checklist

Before launch:

1. Replace `site: "https://example.com"` in `astro.config.mjs` with the production domain.
2. Replace `family@example.com` in `src/pages/index.astro` with the correct contact address.
3. Replace all placeholder biography, timeline, reference, and archive content.
4. Replace generated visual placeholders with verified and permissioned assets.
5. Update Open Graph copy and image metadata in `src/layouts/BaseLayout.astro`.
6. Replace or approve `public/favicon.svg`.
7. Document image ownership and source provenance.

## Cloudflare Pages deployment

Connect the repository in **Workers & Pages → Create application → Pages → Connect to Git** and use:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```

No Cloudflare adapter is required because this project uses Astro static output.

For manual deployment with Wrangler:

```bash
npm run build
npx wrangler pages deploy dist
```

## Accessibility

The project includes semantic landmarks, a skip link, keyboard navigation, reduced-motion support, descriptive placeholder alt text, responsive layouts, and visible focus behavior inherited from native controls and links.
