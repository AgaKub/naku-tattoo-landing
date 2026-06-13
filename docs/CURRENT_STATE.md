# Naku Tattoo - Current State

Last updated: 2026-06-13

## Current overall status

The public Naku Tattoo landing project is active and live.

Main live landing domain:
https://nadiakubczak.com

Main repository:
https://github.com/AgaKub/naku-tattoo-landing

Local path:
C:\Coding\naku-tattoo-landing

The project is a static HTML / CSS / JavaScript landing and try-on flow.

---

## Latest completed work

### 1. Designs catalogue page

Created:
- designs.html

Purpose:
- static catalogue / family hub for Nadia's tattoo designs
- intended destination for Meta Ads Test 4 - Fine line - Traffic

Current design families:
- Simple & fine line designs
- Botanical designs
- Dragon designs

Public intended URL:
https://nadiakubczak.com/designs.html

Ad flow:
Fine line ad -> designs.html -> choose design family -> optional try-on / inquiry.

### 2. Homepage hamburger navigation

Added simple hamburger navigation to:
- index.html

Navigation links:
- Home
- Browse designs
- Try-on
- Booking inquiry
- Instagram

Live deployment:
- GitHub Pages deployment refreshed.
- Hamburger navigation is visible on the live homepage.

Backlog note:
- Consider moving Home lower or last in the hamburger menu.
- Reason: user usually opens hamburger from Home, so Home is not the most important first action.

### 3. Deployment and project documentation

Created:
- docs/DEPLOYMENT_MAP.md
- docs/PROJECT_MAP.md

Purpose:
- reduce dependency on memory between chats
- prevent mixing up landing deployment with booking system deployment
- make domain / hosting / project split clear before debugging

---

## Current confirmed architecture

### Static landing project

Project:
naku-tattoo-landing

Live domain:
https://nadiakubczak.com

Custom domain file:
CNAME -> nadiakubczak.com

Deployment:
GitHub Pages from:
- branch: main
- folder: /root

### Booking project

Project:
naku-booking-system

Public booking URL:
https://booking.nakutattoo.com/inquiry/

Hosting:
Render

Render backend:
https://naku-booking-system.onrender.com/inquiry/

Important:
Render belongs to the booking system, not the static landing homepage.

---

## Current live public paths

Homepage:
https://nadiakubczak.com

Design catalogue:
https://nadiakubczak.com/designs.html

Try-on hub:
https://nadiakubczak.com/try-on/

Booking inquiry:
https://booking.nakutattoo.com/inquiry/

Instagram:
https://www.instagram.com/naku.tattoo

---

## Current active next step

Finish documentation source-of-truth stage before returning to Meta Ads Test 4.

Remaining documentation files to create / review:
- docs/OPEN_PATHS.md
- docs/checkpoints.md update / checkpoint entry if needed
- docs/backlog.md review if needed

After documentation is complete:
Return to Meta Ads Test 4 - Fine line - Traffic.

Likely ad destination:
https://www.nakutattoo.com/designs.html

But before publishing:
- confirm exact URL resolves correctly
- confirm designs page displays correctly
- confirm next action is clear
- confirm Meta destination URL matches the intended public flow

---

## Work rule

Before continuing in a new chat:

1. Inspect git status.
2. Read:
   - docs/PROJECT_MAP.md
   - docs/DEPLOYMENT_MAP.md
   - docs/CURRENT_STATE.md
3. Confirm the active step.
4. Do not switch to backlog ideas unless explicitly chosen.
5. One step at a time.