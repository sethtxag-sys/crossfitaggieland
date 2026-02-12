# CrossFit Aggieland Website

**Live site:** https://www.crossfitaggieland.com

Next.js 15 + React 19 + Tailwind CSS 3.4 + TypeScript. Hosted on Vercel. Deploys automatically when you push to `main`.

---

## How Deployment Works

1. Edit a file in GitHub (or push from your computer)
2. Vercel detects the change and builds automatically
3. Live in ~60 seconds

You do not need to run any commands. Just commit to `main` and Vercel handles the rest.

---

## File Map

```
app/
  layout.tsx        ← SEO metadata, JSON-LD structured data, Analytics
  page.tsx          ← Section ordering (StoryBrand framework)
  globals.css       ← Global styles, scrollbar, animations
  sitemap.ts        ← Auto-generated sitemap.xml

components/
  Navigation.tsx    ← Nav bar + mobile menu
  Hero.tsx          ← Hero section with background image
  StartHere.tsx     ← "You Don't Need to Be Fit" section
  Stakes.tsx        ← "Cost of Waiting" section
  About.tsx         ← Guide section with group photo
  Coaches.tsx       ← Coach grid with click-to-open bio modals
  DailyWorkouts.tsx ← Mayhem programming section
  Schedule.tsx      ← Class times + weekly schedule
  Testimonials.tsx  ← Member testimonials
  Transformation.tsx ← "6 Months From Now" outcomes
  Pricing.tsx       ← Pricing table
  FreeWeekCTA.tsx   ← Final CTA section
  Contact.tsx       ← Contact form + Google Maps
  Footer.tsx        ← Footer with social links

data/
  site.json         ← Gym info (name, phone, address, social links, Pike13 URL)
  coaches.json      ← Coach names, roles, photos, bios
  pricing.json      ← Membership pricing
  schedule.json     ← Class times and days
  testimonials.json ← Member testimonials

lib/
  data.ts           ← Imports and exports all data files
  types.ts          ← TypeScript interfaces

public/
  images/           ← All photos (hero, coaches, about, workouts)
  robots.txt        ← Search engine crawl rules
  favicon.ico       ← Browser tab icon
  icon.png          ← App icon
  apple-icon.png    ← iOS icon
```

---

## Common Updates

### Change gym info (phone, address, email, social links)

Edit `data/site.json`. Everything that references gym info pulls from this file.

### Update pricing

Edit `data/pricing.json`. The pricing table rebuilds automatically.

### Add or remove a coach

Edit `data/coaches.json`. Each coach needs:

```json
{
  "name": "First Last",
  "role": "Coach",
  "initials": "FL",
  "isOwner": false,
  "image": "/images/coach-firstname.jpg",
  "bio": "Short paragraph about this coach."
}
```

Upload their headshot to `public/images/` with the matching filename. Square crop works best. If no photo, remove the `"image"` line and the initials fallback will display.

The grid auto-balances. 8 coaches = 2 rows of 4. 9 coaches = the last one sits alone on row 3.

### Update coach bios

Edit `data/coaches.json`. Change the `"bio"` field for any coach. The modal will display the new text after deploy.

### Add or change a testimonial

Edit `data/testimonials.json`. First testimonial gets the featured (maroon) card. The rest show in pairs below it.

### Change class schedule

Edit `data/schedule.json`. Both the time blocks and weekly hours update from this file.

### Update SEO metadata

Edit `app/layout.tsx`. Key sections:

- **Title and description** — lines 10-11
- **Keywords** — lines 12-22
- **Open Graph** (social sharing) — lines 30-44
- **Twitter/X cards** — lines 46-52
- **JSON-LD structured data** — lines 78-145

### Update Google review rating

Edit `app/layout.tsx`. Find `aggregateRating` around line 138. Change `ratingValue` and `ratingCount` / `reviewCount` to match your actual Google Business Profile numbers.

### Replace a photo

Upload the new image to `public/images/` with the same filename as the old one. Vercel will serve the new version on next deploy.

If adding a new image with a different filename, update the reference in the corresponding component or data file.

### Change section order

Edit `app/page.tsx`. Sections render in the order they appear. Move the component import up or down to reorder.

---

## Important Accounts

| Service | URL | What it does |
|---------|-----|-------------|
| GitHub | github.com | Code repository. Push here to deploy. |
| Vercel | vercel.com | Hosting. Auto-deploys from GitHub. |
| GoDaddy | sso.secureserver.net | Domain DNS + domain registration. |
| Google Search Console | search.google.com/search-console | SEO monitoring + sitemap. |
| Google Business Profile | business.google.com | Local search listing. |
| Resend | resend.com | Contact form email delivery. |
| Pike13 | sms.pike13.com | Membership signup (all CTAs link here). |

---

## DNS Records (GoDaddy)

Only two records point to Vercel. Do not change anything else.

| Type | Host | Value | Purpose |
|------|------|-------|---------|
| A | @ | 216.198.79.1 | Root domain → Vercel |
| CNAME | www | 94d675ff57d7d77d.vercel-dns-017.com | www subdomain → Vercel |

MX records (Google Workspace email), TXT records (SPF, DKIM, verification), and SRV records are for email. Never touch them.

---

## Environment / API Keys

The Resend API key is stored in Vercel as an environment variable (`RESEND_API_KEY`). It is not in the code. If you need to rotate it, go to Vercel project settings → Environment Variables.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19
- **Styling:** Tailwind CSS 3.4
- **Fonts:** Bebas Neue (headings) + Montserrat (body) via Google Fonts
- **Language:** TypeScript (strict mode)
- **Hosting:** Vercel
- **Email:** Resend API
- **Analytics:** Vercel Analytics
- **Domain:** GoDaddy (DNS only)
- **Email hosting:** Google Workspace (via MX records)
