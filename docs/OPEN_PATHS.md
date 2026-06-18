# Naku Tattoo - Open Paths

Last updated: 2026-06-13

## Purpose

This file separates active work from paused work and future ideas.

Use this file before choosing the next active step.

Rule:
One active path at a time. Other ideas go to paused paths or backlog.

---

## 1. Active path

### Documentation source-of-truth stage

Status:
Active until completed.

Goal:
Create stable project documentation so future chats and debugging do not rely only on memory.

Files created / updated in this stage:
- docs/DEPLOYMENT_MAP.md
- docs/PROJECT_MAP.md
- docs/CURRENT_STATE.md
- docs/OPEN_PATHS.md
- docs/backlog.md

Remaining before closing this stage:
- commit docs/OPEN_PATHS.md
- add final checkpoint entry
- confirm repo clean

After this stage:
Return to Meta Ads Test 4 - Fine line - Traffic.

---

## 2. Next planned path

### Meta Ads Test 4 - Fine line - Traffic

Status:
Next planned path after documentation stage.

Context:
A fine line / simple linear designs post from Nadia is intended for the next traffic test.

Current intended destination page:
https://www.nakutattoo.com/designs.html

Before publishing:
- confirm the URL resolves correctly
- confirm designs.html is live
- confirm it shows Simple & fine line / Botanical / Dragons
- confirm the user can continue to inquiry or Instagram
- confirm it is better than sending traffic directly to homepage or try-on

Reason for designs.html:
The ad should first send visitors to a calm design catalogue, not directly to camera try-on.

---

## 3. Recently completed paths

### Designs catalogue

Status:
Completed and pushed.

File:
designs.html

Purpose:
Static family hub for Nadia's tattoo designs.

Families:
- Simple & fine line designs
- Botanical designs
- Dragon designs

### Homepage hamburger navigation

Status:
Completed and live.

File:
index.html

CSS:
style.css

Navigation:
- Home
- Browse designs
- Try-on
- Booking inquiry
- Instagram

Backlog note:
Consider moving Home lower or last in the menu.

### Deployment clarification

Status:
Completed.

Confirmed:
- landing project: naku-tattoo-landing
- deployment: GitHub Pages from main / root
- live domain: nadiakubczak.com
- booking project: naku-booking-system
- booking hosting: Render
- booking URL: booking.nakutattoo.com/inquiry/

---

## 4. Paused / standby paths

### Homepage navigation order polish

Status:
Backlog / not active.

Idea:
Move Home lower or last in hamburger navigation.

Reason:
Users usually open the hamburger from the homepage, so Home may not need to be the first option.

### Try-on family expansion

Status:
Paused.

Rule:
Create a new family page only when there are at least 2-3 designs that clearly belong together or when a campaign needs a dedicated family link.

Possible future families:
- animals
- symbols
- characters
- guest-spot

### Single-design promotion

Status:
Available strategy, not active.

Rule:
For one promoted design, use a direct manual try-on link instead of creating a new family page.

### Google / visibility path

Status:
Standby.

Context:
Nadia / Naku Tattoo Google visibility and Google Business Profile work exists as a separate open path and should be handled separately.

### Booking system improvements

Status:
Standby in separate project.

Project:
naku-booking-system

Possible future directions:
- client reply preparation
- templates
- email / notification automation
- daily summary
- voice note submission

Do not mix this with landing edits unless the current task specifically concerns inquiry links or booking flow.

---

## 5. Backlog handling rule

If a new idea appears during active work:

1. Do not switch immediately.
2. Add it to docs/backlog.md or this file.
3. Finish the active step.
4. Choose the next active path deliberately.

---

## 6. Current next action

After this file is committed:

1. Add final checkpoint for documentation source-of-truth stage.
2. Confirm repo clean.
3. Return to Meta Ads Test 4 setup.


## Nadia Online Shop — professional ecommerce and payment infrastructure pilot

Status:
Active strategic path / next major product direction.

Decision:
The shop will be built as a professional real online shop for Nadia's posters and art products.

This is not:
- a static catalogue
- an inquiry-first shop
- a DM-order flow
- an external-link gateway only
- a soft placeholder page as the real solution

The intended shop flow is:

```text
product
-> checkout
-> online payment
-> webhook-confirmed paid order
-> confirmation email
-> admin order view
-> fulfillment / shipping workflow
```

Strategic purpose:
- create a real professional sales channel for Nadia's posters and art products
- show Nadia's wider world as an artist, not only tattoo work
- safely test reliable payment infrastructure before applying similar logic to the Ticketing App

Preferred architecture direction:
- Django backend
- Render hosting, likely on a paid plan when payment reliability matters
- PostgreSQL database
- payment provider
- webhook-confirmed orders
- admin order management
- confirmation emails
- basic fulfillment and shipping status

Important connection to Ticketing App:
The shop should test the shared payment/order infrastructure pattern first.

Shared payment chain:

```text
Django backend
-> payment provider
-> checkout session
-> webhook confirmation
-> paid order status
-> confirmation email
-> admin record
```

Ticketing App will later need the same payment reliability plus stricter ticket-specific logic:

```text
paid order
-> unique ticket / QR
-> scanner validation
-> duplicate-use prevention
-> gate reliability
```

Current next step:
Choose the shop architecture and payment provider direction before coding.

Likely provider comparison:
- Stripe
- PayU
- Przelewy24
- Tpay

Decision criteria:
- Polish customer payment habits
- BLIK availability
- Django integration quality
- Render/webhook reliability
- future Ticketing App reuse
