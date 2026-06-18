# Naku Tattoo - Deployment Map

Last updated: 2026-06-18

## Purpose

This file is the project source of truth for deployment, domains, redirects, and connections between the Naku Tattoo public landing page and the Naku Booking System.

Use this file before debugging:

* live website changes
* domains
* redirects
* CNAME / DNS
* GitHub deployment
* Render deployment
* inquiry links
* Meta Ads destination URLs
* Pixel / tracking paths

This file should prevent mixing up the two connected but separate projects:

1. `naku-tattoo-landing`
2. `naku-booking-system`

---

# 1. Project split

## 1.1 Static landing project

Project name:

```text
naku-tattoo-landing
```

Local path:

```text
C:\Coding\naku-tattoo-landing
```

GitHub repo:

```text
https://github.com/AgaKub/naku-tattoo-landing
```

Role:

```text
Public Naku / Nadia landing website.
Static HTML / CSS / JS project.
Contains homepage, design catalogue, try-on pages, privacy page, cookie logic and image assets.
```

Main files and folders:

```text
index.html
designs.html
privacy.html
style.css
cookies.js
CNAME
images/
try-on/
docs/
IG-care/
```

Important structure rule:

```text
The public static HTML files are in the project root.
The docs/ folder is documentation, checkpoints and backlog.
Do not assume docs/ is the public HTML source unless deployment settings explicitly say so.
```

---

## 1.2 Booking system project

Project name:

```text
naku-booking-system
```

Local path:

```text
C:\Coding\naku-booking-system
```

Role:

```text
Django booking / inquiry system.
Handles public inquiry form, success page, inquiry data, guest spot workflow and Django Admin.
```

Hosting:

```text
Render
```

Production public booking URL:

```text
https://booking.nakutattoo.com/inquiry/
```

Backend Render URL:

```text
https://naku-booking-system.onrender.com/inquiry/
```

Important rule:

```text
Render belongs to the booking system.
Do not assume Render is responsible for the static landing homepage unless this is verified separately.
```

---

## 1.3 Future Nadia Online Shop backend

Project status:

```text
Planned / strategic next product path.
```

Role:

```text
Professional ecommerce backend for Nadia's posters and art products.
Also intended as a lower-risk payment infrastructure pilot before Ticketing App payment work.
```

Preferred deployment direction:

```text
Django backend
Render hosting
PostgreSQL database
payment provider integration
webhook endpoint
admin order management
confirmation emails
```

Important payment rule:

```text
The frontend must not decide that an order is paid.
Payment must be confirmed by the payment provider webhook received by the backend.
Only then should the order be marked as paid.
```

Expected public structure, to be decided:

```text
www.nakutattoo.com/shop/
-> shop entry / brand layer

shop backend / checkout
-> Django ecommerce backend on Render or dedicated shop subdomain
```

Possible future shop backend URLs / domains:

```text
shop.nakutattoo.com
or
checkout.nakutattoo.com
or
a Render-backed ecommerce service connected from /shop/
```

Important:
Do not treat the existing static `/shop/` coming soon page as the final shop architecture. It is only the current placeholder/entry point until the real ecommerce backend is designed and built.

---

# 2. Static landing deployment

## 2.1 Current known live landing domain

Main live landing page:

```text
https://nadiakubczak.com
```

Confirmed in existing project documentation:

```text
docs/checkpoints.md
```

Relevant documented lines / facts:

```text
Project: Naku Tattoo by Nadia
Live landing page: https://nadiakubczak.com
Repo: https://github.com/AgaKub/naku-tattoo-landing
```

## 2.2 CNAME

File:

```text
CNAME
```

Current content:

```text
nadiakubczak.com
```

Meaning:

```text
The static landing repo is configured with nadiakubczak.com as the custom domain.
```

## 2.3 Current deployment status observed on 2026-06-13

Local repo state:

```text
git status --short
```

Result:

```text
empty
```

Remote:

```text
origin  https://github.com/AgaKub/naku-tattoo-landing.git
```

Branch status:

```text
## main...origin/main
```

Recent commits:

```text
43bff0d Add homepage hamburger navigation
cde3f96 Add tattoo designs catalogue page
747502a Add fine line tattoo meta descriptions
498c5d2 Add try-on hub checkpoint
92683e9 Add try-on collection hub and botanical family
305de27 Add preview sharing consent
75e2208 Add simple try-on collection checkpoint
9b89a34 Add simple tattoo try-on collection
```

Important observation:

```text
The local repo and origin/main contain the homepage hamburger navigation commit:
43bff0d Add homepage hamburger navigation
```

But live source check for:

```text
https://nadiakubczak.com
```

still showed the older homepage without:

```html
<header class="site-nav">
```

Therefore:

```text
The next step is deployment verification, not more HTML/CSS editing.
```

---

# 3. Brand domain: nakutattoo.com

Known project direction:

```text
nakutattoo.com is used as a Naku Tattoo brand domain / entry point.
```

Important working rule:

```text
Do not treat nakutattoo.com as a separate static deployment without checking DNS / redirect configuration first.
```

Current understanding:

```text
nakutattoo.com is connected to / redirects into the Naku landing flow based on nadiakubczak.com.
```

Needs verification if debugging domains:

```text
Check Hostinger DNS / redirect settings for:
- nakutattoo.com
- www.nakutattoo.com
- nadiakubczak.com
- www.nadiakubczak.com
```

Do not assume:

```text
Do not assume www.nakutattoo.com serves a separate copy of index.html.
Do not debug nakutattoo.com as an independent deployment unless DNS confirms that.
```

---

# 4. Booking domain and Render

## 4.1 Public booking domain

Production booking URL used by public landing pages:

```text
https://booking.nakutattoo.com/inquiry/
```

## 4.2 Render backend

Render backend URL:

```text
https://naku-booking-system.onrender.com/inquiry/
```

This URL should remain available as backend backup, but it should not be the main visitor-facing booking URL.

Reason:

```text
The raw Render URL looked backend-like and less trustworthy for clients.
The branded subdomain booking.nakutattoo.com was created to improve trust and conversion.
```

## 4.3 DNS record documented for booking subdomain

Documented in `docs/checkpoints.md`:

```text
Type: CNAME
Name: booking
Target: naku-booking-system.onrender.com
TTL: 14400
```

## 4.4 Render allowed hosts

Documented Render environment value:

```text
DJANGO_ALLOWED_HOSTS=.onrender.com,booking.nakutattoo.com
```

## 4.5 Correct public flow

Public flow should be:

```text
nadiakubczak.com / landing / designs / try-on
→ https://booking.nakutattoo.com/inquiry/
→ Django Booking System on Render
→ success page
→ back to landing / Naku flow
```

---

# 5. Static landing pages and their roles

## 5.1 Homepage

File:

```text
index.html
```

Role:

```text
Main public landing page for Nadia / Naku Tattoo.
```

Contains links to:

```text
Instagram
Studio location
DM bookings
Guest spot inquiry
```

As of commit `43bff0d`, local and origin version also contains:

```html
<header class="site-nav">
```

with navigation links:

```text
Home
Browse designs
Try-on
Booking inquiry
Instagram
```

If live homepage does not show hamburger navigation:

```text
Do not continue editing code immediately.
First verify deployment status and source of live page.
```

---

## 5.2 Designs catalogue

File:

```text
designs.html
```

Role:

```text
Static catalogue / family hub for Nadia’s tattoo design families.
Created for Meta Ads Test 4 — Fine line — Traffic.
```

Intended ad flow:

```text
Fine line ad
→ designs.html
→ choose design family
→ optional try-on / inquiry
```

Current family cards:

```text
Simple & fine line designs
Botanical designs
Dragon designs
```

Current intended public URL:

```text
https://nadiakubczak.com/designs.html
```

If using Naku brand URL in ads, verify the redirect first before publishing.

Potential Meta destination URL after verification:

```text
https://www.nakutattoo.com/designs.html
```

But only use this if it correctly resolves to the live designs catalogue.

---

## 5.3 Try-on hub

Folder:

```text
try-on/
```

Hub page:

```text
try-on/index.html
```

Role:

```text
Choose a design family for browser tattoo try-on.
```

Try-on family pages:

```text
try-on/simple.html
try-on/botanical.html
try-on/dragons.html
```

Manual try-on page:

```text
try-on/manual.html?design=...
```

Public role:

```text
Browser-based tattoo preview using phone camera.
```

Important strategic rule:

```text
Try-on is a curiosity / growth tool.
Inquiry remains structured through the booking form.
```

---

# 6. Current open deployment issue

## Issue

On 2026-06-13:

Local file:

```text
index.html
```

contains:

```html
<header class="site-nav">
```

and hamburger navigation.

Git state:

```text
main is synced with origin/main
repo is clean
latest commit is pushed
```

But live source for:

```text
https://nadiakubczak.com
```

did not contain:

```text
site-nav
```

## Meaning

The problem is currently not proven to be an HTML/CSS problem.

The likely investigation categories are:

```text
deployment not completed
wrong deployment source
custom domain serving old version
cache / CDN
DNS / redirect behavior
```

## Next debugging order

Use this order:

```text
1. Confirm GitHub deployment / Pages status for AgaKub/naku-tattoo-landing.
2. Confirm whether commit 43bff0d has been deployed.
3. Confirm which branch and folder are used for the live landing deployment.
4. Confirm nadiakubczak.com is serving from this repo and not an older deployment.
5. Confirm whether /designs.html is live.
6. Confirm whether query string cache bypass changes the live homepage.
7. Only then debug HTML/CSS rendering.
```

## Do not do this

```text
Do not assume docs/ is the public HTML source.
Do not assume Render is responsible for the static homepage.
Do not treat nakutattoo.com as a separate deployment without checking DNS.
Do not keep editing hamburger CSS before confirming the latest HTML is live.
```

---

# 7. Project documentation files

Current docs folder:

```text
docs/
```

Known files:

```text
docs/backlog.md
docs/checkpoints.md
docs/DEPLOYMENT_MAP.md
docs/checkpoints/
```

Checkpoint files include:

```text
2026-05-25 - Tattoo-AR try-on gateway live.md
2026-05-25 - Tattoo-AR try-on mobile polish.md
2026-05-26 - Naku Data Layer MVP phase 1.md
2026-05-26 - Tattoo AR behavioral tracking MVP.md
2026-06-04 - Simple tattoo try-on collection.md
2026-06-04 - Try-on collection hub and botanical family.md
```

This file should be updated whenever:

```text
domain setup changes
deployment method changes
Render service changes
booking URL changes
landing URL changes
nakutattoo.com redirect behavior is confirmed or changed
```

---

# 8. Work rules for future chats

Before working on deployment, domains, redirects, live site behavior or ads:

```text
1. Inspect git status.
2. Read docs/DEPLOYMENT_MAP.md.
3. Confirm whether the task concerns:
   - naku-tattoo-landing
   - naku-booking-system
   - both
4. Inspect current files before editing.
5. Keep one active step.
6. Put side ideas into backlog, not into the active coding step.
```

When debugging live website behavior:

```text
1. Verify source of live page.
2. Verify deployment status.
3. Verify domain / redirect / cache.
4. Only then edit code.
```

When working on Meta Ads destination URLs:

```text
1. Confirm the exact live URL opens correctly.
2. Confirm the page shows the intended content.
3. Confirm the page has the correct next action.
4. Then use it in Meta Ads.
```

---

# 9. Known connected URLs

Landing:

```text
https://nadiakubczak.com
```

Design catalogue:

```text
https://nadiakubczak.com/designs.html
```

Try-on hub:

```text
https://nadiakubczak.com/try-on/
```

Booking inquiry:

```text
https://booking.nakutattoo.com/inquiry/
```

Booking backend backup:

```text
https://naku-booking-system.onrender.com/inquiry/
```

Instagram:

```text
https://www.instagram.com/naku.tattoo
```

---

# 10. Current next action after creating this file

After this file is created:

```text
1. Inspect it.
2. Commit it.
3. Return to deployment verification for the homepage hamburger issue.
4. Do not change more code until deployment/source issue is understood.
```

