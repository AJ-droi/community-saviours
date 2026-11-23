# Community Saviours CIC website (Next.js)

## Run it locally
You need Node.js 20 or newer (https://nodejs.org).

```bash
npm install      # first time only
npm run dev      # open http://localhost:3000
```

`npm run build` makes a production build. Deploy by importing this folder into Vercel or Netlify.

## Page
A single landing page at `/`, built from the company profile in `copy.md`. Sections, in order:
Hero · Who We Are (+ Our Approach) · What We Do (4 programme areas) · Vision / Purpose / Mission ·
Programme Model (Engage → Develop → Empower → Progress) · Who We Support · Social Impact (+ How We Measure) ·
Testimonials (placeholders) · Where & How We Deliver (+ Partnership Working) · Values · Governance & Safeguarding
(+ Long-Term Ambition) · Callout banner · Contact (form) · Footer.

Layout and style follow the Givara Webflow template (givara-foundation.webflow.io): Plus Jakarta Sans, deep navy
headings, floating white pill nav, full-bleed hero with dark gradient, pill section labels, rounded image cards,
dashed-line step row, soft #F6F8FC panels, faint vertical grid lines, navy footer. No text, images or branding
from the template are used.

A Privacy Policy page lives at `/privacy`, linked from the footer and from a note under the contact form.
The site sets no cookies (self-hosted font, no analytics, no third-party embeds), so no cookie banner is needed.
Keep it that way unless you also add a consent banner.

## Where things live
```
app/
  layout.tsx        Site shell: metadata, font, nav, footer
  page.tsx          Home page: lists the sections in order
  privacy/page.tsx  Privacy Policy page (content in content/privacy.ts)
  globals.css       All styling. Brand colours/fonts are the tokens at the top (:root)
  icon.svg          Favicon (placeholder mark)
  api/contact/      Contact form endpoint (emails the message via Resend)
components/         One file per section + Nav, Footer, Photo, ContactForm, RevealObserver, ui.tsx (Label, buttons, Logo)
lib/                contact.ts (form validation), images.ts (photo auto-swap)
content/site.ts     ALL the copy and links. Edit text here, not in the components
content/privacy.ts  Privacy Policy wording (draft for client review)
copy.md             The client's copy as supplied (extracted from the PDF)
```

## Still to do before launch (search the code for `TODO` and `[Add`)
- **Logo:** not supplied. `components/ui.tsx` (`Logo`) and `app/icon.svg` are a placeholder sound-wave mark + wordmark.
- **Brand colours:** navy `#0B1B33` + amber `#F4B740` chosen to suit the template and a music/community brand. Confirm with the client.
- **Contact details:** `site.email`, `site.phone`, `site.address`, `site.companyNumber` in `content/site.ts`. Placeholders show until filled.
- **Social links:** `site.socials` in `content/site.ts`.
- **Testimonials:** three placeholder tabs (Participant / Partner / Facilitator) in `content/site.ts → testimonials`. Replace with real, consented quotes only.
- **Map:** `map.jpg` placeholder in the Contact section. Swap for a static map image, or replace `<Photo file="map.jpg">` in `components/Contact.tsx` with a Google Maps embed.
- **Contact form:** set the Resend variables below.
- **Open Graph image:** add `public/og.png` (1200×630) and enable it in `app/layout.tsx`.
- **Company details (legally required on the site):** `legalName`, `companyNumber`, `registeredIn`, `registeredOffice` in `content/site.ts`. They show in the footer and on the Privacy Policy.
- **Privacy Policy (`/privacy`):** a draft in `content/privacy.ts`, written against the ICO's right-to-be-informed checklist. Fill in `lastUpdated`, `retention` (12 months suggested), `host`, and the email provider. **Have the client review it before launch.** Update it if the site adds analytics, a newsletter, embedded maps/videos or donations, and add a consent banner at that point.
- **ICO fee:** the client should check whether they need to pay the ICO data protection fee (ico.org.uk/for-organisations/data-protection-fee).

## Contact form: turn on email delivery
The form posts to `/api/contact`, which sends through Resend (https://resend.com). Copy `.env.example` to `.env.local`
for local testing and set the same variables on Vercel/Netlify:
- `RESEND_API_KEY` (required)
- `CONTACT_TO`: inbox for messages (required until `contact.form.to` is set in `content/site.ts`)
- `CONTACT_FROM`: sender on a domain verified in Resend

Until these are set, submitting shows a friendly error. Spam protection: hidden honeypot field and max 5 messages per visitor per 10 minutes.

## Photos
Drop each photo into `public/images/` with the file name below and rebuild. It replaces its placeholder automatically.
Use only photos the client has consent to publish, especially for anyone in custodial settings or under 18.

| File name | Where it shows | Size |
| --- | --- | --- |
| `hero.jpg` | Hero background | 1920×1080 |
| `about-wide.jpg` | Who We Are, wide image | 1600×700 |
| `programme-rehabilitation.jpg` | What We Do · A. Music-Based Rehabilitation | 800×560 |
| `programme-reintegration.jpg` | What We Do · B. Reintegration and Progression | 800×560 |
| `programme-youth.jpg` | What We Do · C. Prevention and Youth Development | 800×560 |
| `programme-skills.jpg` | What We Do · D. Creative Skills and Vocational Development | 800×560 |
| `vision.jpg` | Our Vision card | 1200×800 |
| `purpose.jpg` | Our Purpose card | 800×800 |
| `programme-model.jpg` | Programme Model, left image | 600×720 |
| `who-we-support.jpg` | Who We Support, centre image | 700×900 |
| `testimonial-participant.jpg` / `testimonial-partner.jpg` / `testimonial-facilitator.jpg` | Testimonials | 600×600 |
| `cta-band.jpg` | Callout banner background | 1600×640 |
| `map.jpg` | Contact, location image | 800×520 |

## Dependencies
Next.js 16.4.6, React 19.3.1, Resend 6.35.0, Plus Jakarta Sans via @fontsource-variable (self-hosted, no Google Fonts call).
