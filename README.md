# CrossFit Aggieland Website

Next.js 15 + Tailwind CSS + TypeScript. Deployed on Vercel.

---

## Deploy to Vercel (One-Time Setup)

### Step 1: Push to GitHub
1. Go to [github.com/new](https://github.com/new) and create a new repo called `crossfit-aggieland-site`
2. Make it **Private**
3. Run these commands in your terminal:

```bash
cd crossfit-aggieland-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/crossfit-aggieland-site.git
git push -u origin main
```

### Step 2: Connect Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Import your `crossfit-aggieland-site` repo
4. Click **Deploy** (all settings are pre-configured)
5. Done. Your site is live.

### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to your project > **Settings** > **Domains**
2. Add `crossfitaggieland.com`
3. Update your DNS records as Vercel instructs

---

## How to Update Content

All your content lives in the `data/` folder. Edit these JSON files, push to GitHub, and Vercel auto-deploys in ~30 seconds.

### Update Coaches → `data/coaches.json`

**Add a new coach:**
```json
{
  "name": "New Coach Name",
  "role": "Coach",
  "initials": "NC",
  "isOwner": false
}
```

**Remove a coach:** Delete their entry from the array.

**Change a role:** Edit the `"role"` field.

### Update Pricing → `data/pricing.json`

Change any dollar amount in the `"prices"` object:
```json
"General": {
  "12": 129,
  "6": 149,
  "3": 169,
  "1": 189
}
```

The numbers are: `"term_in_months": price_per_month`

### Update Schedule → `data/schedule.json`

**Change class times:** Edit the `"classTimes"` array.
**Change daily hours:** Edit the `"days"` array.

### Update Testimonials → `data/testimonials.json`

**Add a testimonial:**
```json
{
  "text": "Their quote goes here.",
  "author": "First Name L."
}
```

### Update Contact Info / Social Links → `data/site.json`

Change phone, email, address, social media URLs, and general site info here.

---

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Add Coach Photos

1. Put photo files in `public/images/coaches/` (e.g., `seth-mckinney.jpg`)
2. In `data/coaches.json`, add an `"image"` field:
```json
{
  "name": "Seth & Paige McKinney",
  "role": "Owners",
  "initials": "SM",
  "isOwner": true,
  "image": "/images/coaches/seth-paige.jpg"
}
```
3. The Coaches component already supports the `image` field.

---

## Tech Stack
- **Next.js 15** (React 19, App Router)
- **Tailwind CSS 3.4**
- **TypeScript 5**
- **Vercel** (hosting, auto-deploy on push)
- **Google Fonts** (Bebas Neue + Montserrat, loaded via next/font)
