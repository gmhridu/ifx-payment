# IFX Payments Next.js Migration

This folder contains a separate Next.js app scaffold for the existing IFX Payments project.

## What was copied

- `components/` from the original `src/components/`
- `hooks/use-mobile.tsx`
- `lib/utils.ts`
- Homepage markup converted from `src/routes/index.tsx`
- Styles copied from `src/styles.css` into `app/globals.css`
- Image assets copied into `public/`

## Run locally

```bash
cd nextjs
npm install
npm run dev
```

## Notes

- The Next.js app uses the `app/` directory.
- `app/page.tsx` is a migrated version of the homepage route.
- The component library is copied into `components/ui`, and path aliases are configured with `@/*`.
- Tailwind v4 syntax is preserved in `app/globals.css`.
