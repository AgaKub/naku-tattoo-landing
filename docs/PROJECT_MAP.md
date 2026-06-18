# Naku Tattoo - Project Map

Last updated: 2026-06-18

## Purpose

This file describes what the Naku Tattoo public project contains and how its parts connect.

Use this file at the start of a new chat before editing the landing page, try-on flow, designs catalogue, tracking, or ad destination pages.

---

## 1. Main project

Project name: naku-tattoo-landing

Local path: C:\Coding\naku-tattoo-landing

Repository: https://github.com/AgaKub/naku-tattoo-landing

Main live domain: https://nadiakubczak.com

Project type: Static HTML / CSS / JavaScript landing and try-on project.

---

## 2. Project role

This project is the public-facing Naku / Nadia website.

It supports:
- brand introduction
- Instagram traffic
- Meta Ads traffic
- design browsing
- browser tattoo try-on
- guest spot awareness
- booking inquiry entry point
- tracking / Pixel path
- privacy / cookie messaging
- shop entry / future connection to Nadia Online Shop

It does not store booking inquiries. Inquiry data belongs to the separate Django booking project: naku-booking-system.

---

## 3. Main public paths

### Homepage

File: index.html

Role: Main public landing page for Nadia / Naku Tattoo.

Current navigation includes:
- Home
- Browse designs
- Try-on
- Booking inquiry
- Instagram

Important note:
The hamburger navigation is live on nadiakubczak.com after GitHub Pages deployment refreshed.

### Designs catalogue

File: designs.html

Role: Static catalogue / family hub for Nadia's tattoo design families.

Current families:
- Simple & fine line designs
- Botanical designs
- Dragon designs

Strategic role:
Meta Ads Test 4 - Fine line - Traffic -> designs.html -> choose design family -> optional try-on or inquiry.

### Try-on hub

File: try-on/index.html

Role: Choose a design family for browser tattoo try-on.

Family pages:
- try-on/simple.html
- try-on/botanical.html
- try-on/dragons.html

Manual try-on page:
- try-on/manual.html?design=...

Try-on role:
Curiosity / growth tool. It helps visitors imagine a design on the body. It does not replace Nadia's final placement / size / design decision.

### Privacy page

File: privacy.html

Role: Privacy / trust page for the public landing and try-on flow.

---

## 4. Asset structure

Images are stored in: images/

Known image folders:
- images/hero-designs/
- images/simple/
- images/botanical/
- images/dragons/

Try-on family naming rule:
Use broad families first. Create a new family page only when there are at least 2-3 designs that clearly belong together or when a campaign needs a dedicated family link. For single promoted designs, use a direct manual try-on link instead of creating a new family page.

Current broad families:
- simple
- botanical
- dragons

Future possible broad families:
- animals
- symbols
- characters
- guest-spot

---

## 5. Booking connection

Public inquiry URL: https://booking.nakutattoo.com/inquiry/

This points to the separate Django booking system hosted on Render.

Landing pages should use the branded booking URL, not the raw Render URL.

Correct public flow:
nadiakubczak.com -> designs / try-on / homepage CTA -> booking.nakutattoo.com/inquiry/ -> Django Booking System.

---

## 6. Nadia Online Shop connection

Strategic decision:
Nadia Online Shop is now planned as a professional real ecommerce project for Nadia's posters and art products.

It should not be treated as:
- static catalogue only
- inquiry / DM ordering
- external-link gateway only

Role split:

```text
naku-tattoo-landing
= public brand layer, navigation, visual entry, shop entry

Nadia Online Shop
= real ecommerce backend, products, checkout, payment, orders, admin fulfillment

Ticketing App
= later reuse of payment architecture pattern with additional ticket / QR / scanner reliability
```

Preferred shop direction:
- Django backend
- Render hosting
- PostgreSQL database
- payment provider
- webhook-confirmed orders
- confirmation emails
- Django Admin order management

Important:
The shop may become a separate backend project or service. Do not assume the static landing repo alone can provide professional payment reliability.

---

## 7. Documentation files

Main documentation files:
- docs/PROJECT_MAP.md
- docs/DEPLOYMENT_MAP.md
- docs/CURRENT_STATE.md
- docs/OPEN_PATHS.md
- docs/checkpoints.md
- docs/backlog.md

Existing checkpoint folder:
- docs/checkpoints/

Use documentation rules:
- PROJECT_MAP.md = what the project contains
- DEPLOYMENT_MAP.md = domains, hosting, deployment, redirects
- CURRENT_STATE.md = current working state and latest verified status
- OPEN_PATHS.md = active / paused / future work paths
- checkpoints.md = chronological project history
- backlog.md = ideas not active now

---

## 8. Working rules

Before editing code:
1. Inspect git status.
2. Read PROJECT_MAP.md and DEPLOYMENT_MAP.md when relevant.
3. Inspect current files before changing them.
4. Change one thing at a time.
5. Test locally.
6. Commit with a clear message.
7. Push.
8. Confirm live if the change affects public pages.

Before Meta Ads destination work:
1. Confirm the exact URL opens live.
2. Confirm the page shows the intended content.
3. Confirm the page has a clear next action.
4. Confirm tracking path if needed.
5. Only then use the URL in Meta Ads.

---

## 9. Current strategic direction

Naku Tattoo public flow should support:
- new-client growth
- soft visual browsing
- low-pressure design exploration
- trust-building
- structured inquiries
- Nadia's animal-friendly / slow / thoughtful brand language

The system should protect existing loyal clients while making the new-lead path clearer and easier.
