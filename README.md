# Mohammad Adnaan Mansuri — Portfolio

Personal portfolio / résumé site. Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript. Statically prerendered, zero-config deploy on Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Editing the content

**All content lives in one file: [`lib/data.ts`](lib/data.ts).** Nothing else needs touching to update the site.

| Export | Controls |
| --- | --- |
| `profile` | Name, role, headline, summary, email, phone, location, portfolio/GitHub/LinkedIn links |
| `availability` | The green "Open to work" badge, the About sidebar card and the Contact copy |
| `stats` | The four-number strip under the hero |
| `experience` | Experience timeline (Fixo Appliance, Gujarat Infotech, Isaji Mart store manager, internships). Set `link` to surface a live site for the role |
| `projects` | Project cards. Set `flagship: true` for the large hero card (currently Inventix ERP) |
| `skills` | Skill groups and per-language proficiency badges |
| `education` | Education entries. Set `current: true` to get the "In progress" highlight |
| `navLinks` | The nav bar items |

Search `lib/data.ts` for `TODO:` — those are values worth confirming (LinkedIn URL, Isaji Mart manager dates, expected graduation date).

### Résumé PDFs

Two files are published, both **generated from the same `lib/data.ts` content**, so they cannot drift from the site or from each other:

| File | Route | Length |
| --- | --- | --- |
| `Mohammad-Adnaan-Mansuri-Resume.pdf` | [`/resume`](app/resume/page.tsx) | 2 pages, full detail |
| `Mohammad-Adnaan-Mansuri-Resume-Onepage.pdf` | [`/resume/one-page`](app/resume/one-page/page.tsx) | 1 page, condensed |

Both render [`components/ResumeSheet.tsx`](components/ResumeSheet.tsx) with a different `variant`, styled by [`app/resume/print.css`](app/resume/print.css) (the `.r-compact` rules at the bottom drive the one-page density).

To regenerate after editing content:

```bash
npm run dev                                  # terminal 1
npm run resume:pdf                           # terminal 2
npm run resume:pdf -- http://localhost:3001  # if dev picked another port
```

That renders both routes via headless Chrome or Edge (set `CHROME_PATH` if neither is found in a standard location) and **warns if either PDF is not its expected length** — so a one-pager that quietly grows to two pages gets caught. If that happens, trim bullets in `lib/data.ts` or nudge the `.r-compact` font sizes in `print.css`.

Three levels of bullet detail are available per entry in `lib/data.ts`, each falling back to the one above it:

- `bullets` — the website
- `resumeBullets` — the two-page PDF
- `shortBullets` — the one-page PDF

Education entries marked `omitFromShort: true` are dropped from the one-pager, and projects without `featured: true` collapse into a single "Also built" line there.

The generated PDF has live links: email opens the mail client, the phone number opens the dialler, and the LinkedIn/GitHub/project URLs open in a browser. Chrome drops `tel:` hrefs when printing, so the script renders `/resume?pdf=1` with a same-length `mailto:` placeholder and swaps it back to the real `tel:` URI in the output bytes — see the comments in [`app/resume/page.tsx`](app/resume/page.tsx) and [`scripts/generate-resume-pdf.mjs`](scripts/generate-resume-pdf.mjs) if you change either string.

The original Canva-style résumé is kept at `public/original/ADN-CAD-original.pdf`.

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel login
vercel          # preview deploy, answer the prompts with the defaults
vercel --prod   # production deploy
```

Vercel auto-detects Next.js. No build settings, environment variables or `vercel.json` required.

### Option B — GitHub + Vercel dashboard

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/AdnaanMansuri2003/<repo-name>.git
git push -u origin main
```

Then at [vercel.com/new](https://vercel.com/new): import the repo → **Deploy**. Every push to `main` redeploys automatically.

### Custom domain

Vercel project → **Settings → Domains → Add**, then point your registrar's DNS at the records Vercel shows.

## Structure

```
app/
  layout.tsx      fonts, SEO metadata, page shell
  page.tsx        section order
  globals.css     design tokens, background, scroll-reveal animation
  resume/         printable A4 résumé (source of the PDF, noindex)
components/       Nav, Hero, About, Experience, Projects, Skills, Education, Contact, Footer
  Reveal.tsx      IntersectionObserver fade-in wrapper
  Section.tsx     shared numbered section header
  Icons.tsx       inline SVG icon set (no icon dependency)
lib/data.ts       all site content
scripts/          résumé PDF generator
public/           generated résumé PDF + original/
```

## Notes

- Dark theme only, driven by CSS custom properties in `app/globals.css` (`--bg`, `--accent`, `--muted`, …). Change the accent by editing `--accent` and the `--color-accent-*` tokens in the `@theme` block.
- Animations respect `prefers-reduced-motion`.
- Icons are hand-rolled inline SVG, so there is no icon library in the dependency tree.
