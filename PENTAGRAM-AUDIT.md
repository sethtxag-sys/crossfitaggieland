# Pentagram Creative Director Audit
## CrossFit Aggieland — www.crossfitaggieland.com
### March 13, 2026 — Full Source Review

---

## OVERALL IMPRESSION

This is a serious, thoughtfully built site. It reads like an agency designed it with a real strategy behind it, not a template with swapped photos. The StoryBrand narrative arc is well-executed, the typography system is disciplined, and the color palette is restrained. A Pentagram CD would respect the clarity of intent here.

**Studio tier: Strong agency-grade.** A few seams keep it from elite.

---

## DESIGN AUDIT

### TYPOGRAPHY — STRONG

**Fonts:** Bebas Neue (display) + Montserrat (body). Classic pairing. Bebas carries the masculine energy the brand needs. Montserrat is clean and legible.

**Type scale:** Consistent and well-controlled. Every section header uses the same `clamp(2.2rem,5vw,3.5rem)` with `leading-[1.05]` and uppercase tracking. Eyebrows are locked at `text-sm tracking-[4px] uppercase`. This is systematic, not ad hoc.

**Responsive type:** Fluid via `clamp()`. No jarring breakpoint jumps.

**Issue 1 — Stats bar mobile text is microscopic.** The stat labels on mobile are `text-[0.38rem]` — that's roughly 6px. Below any reasonable readability floor. The stat numbers at `text-[0.95rem]` are fine, but the labels vanish.
**Fix:** Bump stat labels to `text-[0.55rem]` minimum on mobile. Even `0.5rem` (8px) would be a material improvement.

**Issue 2 — Heading monotony.** Every single section uses the same h2 treatment. Pentagram would introduce at least one variation — a serif accent, a weight shift, or a size break — to create a moment of surprise in the scroll. 16 identical headers becomes wallpaper.
**Fix:** Consider dropping the clamp max to `3rem` on secondary sections (DailyWorkouts, FAQ, Contact) to create a visual hierarchy between primary story beats and utility sections.

---

### COLOR & PALETTE — ELITE

**Palette:** Maroon (#500000), charcoal (#1a1a1a), white. Three colors. No cheating. Maroon-accent (#cc6a5e) appears only on dark backgrounds for eyebrows. Maroon-dark (#3a0000) for hover states. This is Pentagram-level restraint.

**Consistency:** All colors defined in Tailwind config as custom properties. Systematic.

**Contrast:** Passes WCAG AA everywhere that matters. The `text-white/50` and `text-white/40` on dark backgrounds get thin at small sizes but remain legible.

**No issues.** This is one of the strongest aspects of the site.

---

### LAYOUT & SPACING — STRONG

**Grid system:** CSS Grid + Flexbox via Tailwind. Container max-width locked at 1200px. Consistent `px-6` gutter.

**Section spacing:** `py-20 lg:py-28` across all sections. Consistent.

**Issue 3 — Three consecutive gray-50 sections.** The page flow from Transformation → Pricing → FAQ is three straight sections on `bg-gray-50`. The `section-divider` pseudo-element border helps, but from a Pentagram perspective this is a rhythm problem. The eye loses its place. The dark-light alternation that works so well in the first half of the page (Hero dark → StartHere light → Stakes dark → About light) breaks down here.
**Fix:** Either (a) give Transformation a white background to distinguish it from Pricing/FAQ, or (b) insert a dark accent section between Pricing and FAQ — the FreeWeekCTA would work perfectly here as a mid-page pattern interrupt. Alternatively, move FAQ to white bg.

**Issue 4 — Section order disrupts emotional arc.** InstagramGrid sits between Testimonials (social proof) and Transformation (success visualization). This breaks the narrative momentum. The reader goes from "hear what real members say" to "look at our Instagram" to "imagine your life in 6 months." The Instagram grid is a pattern interrupt in the wrong place.
**Fix:** Move InstagramGrid to after Transformation or after FreeWeekCTA. The emotional arc should flow: Testimonials → Transformation → Pricing without interruption.

---

### IMAGERY & MEDIA — STRONG

**Image quality:** Real gym photos, real members. Not stock. This is critical for a fitness brand and they nailed it.

**Optimization:** next/image handles WebP/AVIF transcoding and responsive `sizes` props. Technically sound.

**Hero video:** Portrait/desktop source swapping via matchMedia. Smart. The `scale-[1.3]` with `-translate-y-[5%]` crop is aggressive but creates cinematic framing.

**Issue 5 — Instagram grid fragility.** Six hardcoded image slots with `onError` fallback to placeholder icons. If even one image is missing, the grid shows a gray box with a faded Instagram icon. Pentagram would never ship a grid that might show placeholder states.
**Fix:** Either (a) ensure all 6 images always exist and are current, or (b) fetch from Instagram API / embed so the grid is always fresh, or (c) reduce to 4 images (2x2) which is easier to maintain and looks intentional on mobile.

---

### MOTION & INTERACTION — STRONG

**FadeIn system:** IntersectionObserver with 500px lookahead rootMargin and a 2.5s nuclear fallback timer. This is overengineered in the best way. Content will never stay invisible.

**Reduced motion:** Fully respected. `globals.css` has a `prefers-reduced-motion` media query that kills all animations. FadeIn component detects reduced motion and skips to visible. WCAG 2.1 AA compliant.

**Hover states:** Present on all interactive elements. Cards lift (`hover:-translate-y-1`), CTAs darken, links fade.

**Issue 6 — StartHere section has no FadeIn wrapper.** Every other section wraps content in `<FadeIn>`. StartHere renders immediately without any entrance animation. When scrolling from the animated Hero through animated Stakes and hitting StartHere, the static entrance breaks the rhythm.
**Fix:** Wrap the StartHere content columns in `<FadeIn>` with staggered delays on left/right columns.

---

### BRAND COHERENCE — STRONG

Does the site feel like one designer built it? **Yes.** The Bebas/Montserrat system, the maroon palette, the eyebrow → headline → body → CTA section pattern — it's consistent throughout.

Is there a clear point of view? **Yes.** Warm authority. "We've been where you are, we're the best, and the door is open."

Would a top studio put this in their portfolio? **Close.** The rhythm issues (consecutive light sections, Instagram grid placement) and the one shape inconsistency below would need resolution.

**Issue 7 — Instagram CTA breaks the geometric language.** Every CTA on the site is a sharp rectangle. No border-radius on buttons. Then the Instagram "Follow @crossfitaggieland" button is `rounded-full` — a pill shape. It's a social link, not a conversion CTA, but it still breaks the system. Pentagram is obsessive about this kind of thing.
**Fix:** Remove `rounded-full` from the Instagram follow button. Make it a rectangle like everything else, or if you want differentiation, use `rounded-lg` at most to keep it in the family.

---

## PERFORMANCE AUDIT

**Framework:** Next.js 15 + React 19 on Vercel. Justified for a 16-section SPA with interactive components (Schedule filter, Coaches modal, FAQ accordion, video source swapping).

**Font loading:** `display: 'swap'` on both Bebas Neue and Montserrat via next/font/google. Correct. No FOIT.

**Image loading:** next/image handles lazy loading, responsive sizing, and format optimization automatically.

**JS dependencies:** Minimal. No heavy UI libraries. Just React, Next, Vercel Analytics.

**Video:** Hero video uses `preload="metadata"` with a poster image fallback. Correct strategy.

**Issue 8 — No explicit `loading="lazy"` on Instagram grid images.** The next/image component lazy loads by default, but the Instagram images near the bottom of a 16-section page could benefit from explicit priority flagging to ensure they don't request early.
**Fix:** Already handled by next/image defaults. No action needed.

**PERFORMANCE VERDICT: FAST.** This is a lean site. No bloat. No unnecessary dependencies.

---

## SEO AUDIT

**Title:** Present. `CrossFit Aggieland | College Station TX Gym | 7x Best of the Brazos` — strong, keyword-rich, under 60 chars.

**Description:** Present. Keyword-dense, proper length, includes location and differentiators.

**Keywords:** 50+ long-tail keywords covering brand, services, location, HYROX, beginner intent, and near-me queries. Thorough.

**Open Graph:** Complete with image, title, description, locale, type.

**Twitter Card:** Complete with summary_large_image.

**Canonical:** Set to `/`.

**Structured data:** Five JSON-LD schemas (ExerciseGym, FAQPage, Organization, WebSite, Event). This is exceptional. Most gym sites have zero structured data.

**Heading hierarchy:** Single h1 in Hero. All sections use h2. Logical.

**Semantic HTML:** `<section>`, `<main>`, `<footer>`, `<nav>`. Clean.

**Issue 9 — No sitemap.xml or robots.txt visible in source.** Next.js can generate these automatically but they need to be configured.
**Fix:** Add `app/sitemap.ts` and `app/robots.ts` for Next.js automatic generation. Critical for crawl efficiency with this many sections and subpages (blog, hyrox-college-station, crossfit-college-station).

**Issue 10 — FAQ schema in layout.tsx has more questions than the FAQ component displays.** The JSON-LD FAQPage schema includes 16 questions (including HYROX-specific ones, weight loss, personal training, open gym) but the rendered FAQ component only shows 10. Google may flag this as a structured data mismatch.
**Fix:** Sync the FAQ schema with the rendered FAQ component. Either add the missing questions to the component or remove them from the schema. Google's rich results require that FAQ schema matches visible page content.

**SEO VERDICT: STRONG.** The structured data depth is above most agency work. Fix the sitemap gap and schema mismatch.

---

## ACCESSIBILITY AUDIT

**Skip-to-content:** Present. Targets `#main`. SR-only with focus visibility. Correct.

**Language attribute:** `<html lang="en">`. Set.

**Keyboard navigation:** Mostly functional. Tab order follows DOM. Focus indicators use browser defaults plus custom focus states on skip link.

**Touch targets:** Fixed in previous audit pass. Schedule filters at 44px+, hamburger at 44px+.

**Image alt text:** Present on all images. Descriptive, not generic.

**Aria attributes:** `aria-hidden` on decorative elements (step numbers, quote marks, chevron icons). `aria-expanded` on FAQ accordions. `aria-label` on close buttons.

**Reduced motion:** Fully supported (globals.css + FadeIn component).

**Issue 11 — Coaches modal lacks focus trap.** When the coach bio modal opens, keyboard focus can still Tab to elements behind the backdrop. Screen reader users can navigate out of the modal into hidden content. This is a WCAG 2.1 AA failure for modal dialogs.
**Fix:** Add a focus trap to the Coaches modal. On open, move focus to the modal. On Tab at the last focusable element, cycle back to the first. On close, return focus to the triggering card. Libraries like `focus-trap-react` handle this cleanly, or implement manually with `document.querySelectorAll('[tabindex], a, button')`.

**Issue 12 — Coach cards use `onClick` on a div without keyboard support.** The coach cards are `<div onClick={...}>` elements. They're not keyboard-accessible. A keyboard user cannot Tab to or Enter/Space to open a coach card.
**Fix:** Either (a) change the card wrapper to a `<button>` element, or (b) add `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler for Enter/Space.

**Issue 13 — Hero video autoplays without captions.** The background video auto-plays, which is fine (muted), but there's no text alternative describing the video content for screen reader users.
**Fix:** Add an `aria-label` to the video element describing what it shows, e.g., `aria-label="Highlight reel of CrossFit Aggieland members working out"`.

**ACCESSIBILITY VERDICT: MOSTLY COMPLIANT.** The foundation is solid. The modal focus trap and keyboard-accessible coach cards are the critical gaps.

---

## CODE QUALITY

**HTML:** Clean semantic structure. Proper use of sections, main, footer, nav. No div soup.

**CSS:** Tailwind with custom config. Custom properties for brand colors. Utility-first with zero custom CSS except globals.css (scrollbar, keyframes, section divider). This is textbook Tailwind usage.

**JavaScript:** Minimal client-side JS. Only 5 components use `'use client'`: Hero, Navigation, Coaches, Schedule (via ClassCapacityBadge), FAQ, InstagramGrid, FadeIn. Everything else is server-rendered. Smart split.

**Data architecture:** All content in JSON files (`/data/*.json`) with TypeScript types. Clean separation of data and presentation.

**Issue 14 — Testimonials component wraps everything in a single FadeIn.** Unlike other sections that stagger card animations with `delay={i * 100}`, Testimonials dumps the featured card and the entire grid into one FadeIn. This means all testimonials appear at once instead of cascading in.
**Fix:** Wrap individual testimonial cards in `<FadeIn delay={i * 80}>` like the Coaches component does.

**CODE VERDICT: CLEAN.** This is well-architected, well-typed code.

---

## EXECUTIVE SUMMARY

```
SITE AUDIT: CrossFit Aggieland — www.crossfitaggieland.com
══════════════════════════════════════════════════════════════

OVERALL GRADE: A-

  Design:         STRONG   — Disciplined system, minor rhythm issues
  Performance:    ELITE    — Lean, fast, no bloat
  SEO:            STRONG   — Exceptional structured data, missing sitemap
  Accessibility:  MOSTLY   — Solid foundation, modal and keyboard gaps
  Code Quality:   CLEAN    — Well-typed, smart server/client split

TOP 5 FIXES (by business impact):

  1. Add sitemap.ts and robots.ts
     Impact: Crawl efficiency. Google can't efficiently discover your
     blog and subpages without a sitemap. Direct SEO ranking impact.

  2. Sync FAQ schema with rendered FAQ component
     Impact: Google may invalidate your FAQ rich results if schema
     doesn't match visible content. You could lose FAQ snippets in
     search results.

  3. Fix Coaches modal focus trap + keyboard accessibility
     Impact: ADA compliance gap. Keyboard and screen reader users
     cannot interact with coach bios. Legal and ethical exposure.

  4. Break up the gray-50 monotony (sections 10-13)
     Impact: Users scrolling through Transformation → Pricing → FAQ
     experience visual fatigue. Conversion drop-off risk at the exact
     point you're asking them to buy.

  5. Move InstagramGrid to not interrupt Testimonials → Transformation arc
     Impact: The emotional narrative from social proof to success
     visualization is your strongest conversion sequence. The Instagram
     grid breaks that momentum.

RECOMMENDATION: Targeted improvements. This site is 90% there.

ESTIMATED EFFORT:
  Quick wins (under 1 hour):
    - Bump stats bar mobile label size
    - Add FadeIn to StartHere section
    - Stagger Testimonials card animations
    - Remove rounded-full from Instagram CTA
    - Add aria-label to Hero video

  Medium fixes (1-4 hours):
    - Add sitemap.ts and robots.ts
    - Sync FAQ schema with component
    - Fix Coaches modal focus trap + keyboard a11y
    - Reorder InstagramGrid in page flow

  Design consideration (no code, just decision):
    - Break up gray-50 run (Transformation/Pricing/FAQ)
    - Consider h2 size variation for secondary sections
```

---

## WHAT PENTAGRAM WOULD PRAISE

This deserves saying: the restraint here is rare. Three colors, two fonts, one CTA copy ("Start Your Free Week"), and a 16-section StoryBrand arc that actually tells a coherent story. Most gym sites are visual chaos. This one has a point of view and commits to it.

The structured data depth (5 schemas including a recurring Event schedule) is above what most agencies deliver. The performance is excellent. The data architecture (JSON + TypeScript types) is clean and maintainable.

The ghost/outline CTA hierarchy on dark sections vs. filled maroon on light sections is an intentional and correct design decision. The Hero's white pill CTA is a smart one-off that draws the eye without breaking the system.

This is a site that was designed, not assembled.
