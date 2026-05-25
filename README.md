# ALEN GO Landing Website

Production-ready Next.js landing website for `https://alengoapp.com`.

## Tech Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- lucide-react icons

## Local Setup

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production Build

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

The project is ready for Vercel or Netlify. Node.js is pinned to version 20
through `.nvmrc`, `.node-version`, `package.json`, and `netlify.toml`.

## Deployment

### Vercel

1. Import this folder as a Next.js project.
2. Use `npm install` as the install command.
3. Use `npm run build` as the build command.
4. Point the production domain to `alengoapp.com`.

`vercel.json` is already included.

### Netlify

1. Import this folder as a Next.js project.
2. Build command: `npm run build`.
3. Publish directory: `.next`.
4. Keep the included `@netlify/plugin-nextjs` plugin enabled.
5. Point the production domain to `alengoapp.com`.

`netlify.toml` is already included.

## Editable Launch Values

Update placeholders in `lib/site.ts`:

- `GOOGLE_PLAY_URL`
- `APPLE_STORE_URL`
- `WHATSAPP_NUMBER`
- `WHATSAPP_URL`
- `SUPPORT_EMAIL`
- `PRIVACY_EMAIL`
- `LEGAL_COMPANY_NAME`
- Route prices in `routes`

Also review `.env.example` before deploying. The current app does not require
environment variables to build, but the file documents the public production URL
and launch placeholders.

## Public Pages

- `/`
- `/servicios`
- `/rutas-y-precios`
- `/encomiendas`
- `/traslados-aeropuerto`
- `/politica-de-privacidad`
- `/politica-de-tratamiento-de-datos`
- `/proteccion-de-datos`
- `/contacto`

## Brand Assets

Optimized website assets live in `public/assets`. Original uploaded brand files remain in their source folders.

The original brand export folders are excluded from Vercel and Netlify uploads by
`.vercelignore` and `.netlifyignore`; the site uses the optimized copies in
`public/assets`.
