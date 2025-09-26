# IT Upgrades (Next.js)

A scalable Next.js site with:
- Content-driven pages via Markdown in `/content/pages` → auto-routed at `/{slug}`
- Tailwind styling and a dark theme
- AI mockup page at `/try-mockup` with email requirement and 500-word limit
- Ready for Stripe: replace `#stripe-basic` etc. on the home page with Checkout links

## Add new pages
1. Create a new file in `content/pages/<slug>.md` (e.g., `blog.md`).
2. Build or run dev — the route will be available at `/<slug>`.

## Run
```bash
npm install
npm run dev   # http://localhost:3000
# or
npm run build && npm start
```

## Deploy
- Vercel: zero-config for Next.js (recommended)
- Render/Fly/Heroku: `npm run build && npm start`

