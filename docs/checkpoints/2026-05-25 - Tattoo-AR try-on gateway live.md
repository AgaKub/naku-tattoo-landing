# Tattoo-AR — Try-On Gateway Live Checkpoint

## Context

Tattoo-AR now has a public, trackable gateway page in the Naku Tattoo landing page repo.

The page is designed as a thin bridge between IG/ad traffic and the Snapchat Lens.

---

## Step

Step 5B — Minimal AR Gateway Page

---

## What was built

Created:

```text
/try-on/

File:

try-on/index.html

Live URL:

https://nadiakubczak.com/try-on/
Funnel role

The gateway supports the agreed Tattoo-AR funnel:

IG post / reel / ad
↓
Tracked AR gateway page
↓
Open Snapchat Try-On
↓
User self-selects:
    1. play / try only
    2. see more of Nadia’s work
    3. send tattoo inquiry
↓
Only inquiry form submissions reach Nadia’s admin
Core rule
AR is public.
Inquiry is filtered.
Nadia receives only structured intent.
Page content

The page includes:

Element	Purpose
Try this tattoo in AR	main curiosity hook
Snapchat instruction	explains what user needs
Open AR Try-On button	main action
Instagram link	path for dreamers
Inquiry button	path for ready clients
Tracking

The page includes Meta Pixel PageView tracking.

It also includes custom click events for:

OpenARTryOnClick
TattooInquiryClick
Mobile test result

Mobile test confirmed:

Check	Status
Page loads	works
Mobile layout	works
Open AR Try-On	opens Snapchat Lens
Send tattoo inquiry	opens booking form
Git milestone

Landing page repo commit:

d870085 Add Tattoo-AR try-on gateway page
Product meaning

Tattoo-AR now has a public access point that can be used from:

IG post
IG reel
IG story
IG ad
landing page links

This supports growth through curiosity clicks while protecting Nadia’s ADHD workflow from unfiltered inquiries.

Next step

Possible next steps:

A — add a visible link from the main landing page to /try-on/
B — create IG post/story copy for the AR try-on
C — check Meta Pixel events in Events Manager
D — create UTM links for first public test

Recommended next step:

B — create IG post/story copy for the AR try-on
Rule

One step at a time.

