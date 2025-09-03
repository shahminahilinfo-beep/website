
# ROBX — Next.js (pages router) + TypeScript + Tailwind

This is a migration scaffold from CRA to Next.js (pages router). JS files are allowed via `allowJs` for fast adoption.

## Run
```bash
npm install
npm run dev
```

## What’s migrated
- Pages mapped from `src/views/*` to `pages/*`
- Navbar/Footer included in `_app.tsx`
- Tailwind configured
- Basic `react-router-dom` -> `next/link` transform (Link + useLocation -> useRouter)

## TODOs
- Verify dynamic routes and active link logic
- Replace remaining `react-router-dom` imports if any
- Convert key components to `.tsx` progressively
- Configure remote image domains in `next.config.js` if needed
