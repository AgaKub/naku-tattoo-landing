# 2026-06-04 — Try-on collection hub and botanical family

## Project

Naku Tattoo Landing / Browser Try-On

## Completed

Created a consistent collection-based try-on structure.

The try-on flow now has:

```text
/try-on/index.html        → collection hub
/try-on/dragons.html      → dragon family
/try-on/simple.html       → simple family
/try-on/botanical.html    → botanical family
/try-on/manual.html       → shared try-on engine

Collection hub

/try-on/index.html is now a family selector.

Current families:

Dragons
Simple little designs
Botanical designs

Each family card links to its own collection page:

dragons.html
simple.html
botanical.html
Simple family

/try-on/simple.html now contains only 3 simple/tiny designs:

simple-01
simple-02
simple-03

Assets:

/images/simple/simple-01.png
/images/simple/simple-02.png
/images/simple/simple-03.png
Botanical family

Created:

/try-on/botanical.html
/images/botanical/

Botanical designs:

botanical-01
botanical-02

Assets:

/images/botanical/botanical-01.png
/images/botanical/botanical-02.png

These were moved/renamed from the previous mixed simple collection:

/images/simple/simple-04.png → /images/botanical/botanical-01.png
/images/simple/simple-05.png → /images/botanical/botanical-02.png
Shared manual engine

/try-on/manual.html remains the shared try-on engine.

It now supports:

dragon-01
dragon-02
dragon-03
simple-01
simple-02
simple-03
botanical-01
botanical-02
Preview sharing consent

Added a soft artwork/reference confirmation inside the generated preview flow.

Current UX:

Save preview
→ Your preview appears
→ light artwork note appears
→ consent checkbox appears
→ Share preview remains disabled
→ after checkbox is checked, Share preview becomes available

Rights note wording:

Artwork by Naku Tattoo. This preview is for personal reference only.

Checkbox wording:

I understand this preview is for personal reference only.

This is added in the shared engine, so it applies to all current and future design families and single-design links.

Product architecture decision

Confirmed rules:

Hub = choose family
Family page = choose design
Manual page = try one selected design

Family naming consistency rule:

page name = folder name = design ID prefix = tracking prefix

Examples:

botanical.html
/images/botanical/
botanical-01
BotanicalTryOnClick01

Collection creation rule:

New design does not automatically mean new family.
Create a new collection page only when 2–3+ designs clearly belong together,
or when Nadia needs a dedicated campaign/post link.

Single-design promotion rule:

Single promoted design → direct manual link
Family/collection promotion → collection page

Example:

/try-on/manual.html?design=botanical-01
Testing

Local test passed.

Confirmed:

hub shows 3 families,
simple page shows 3 designs,
botanical page shows 2 designs,
dragon page still works,
manual links load the correct PNGs,
preview sharing consent works on phone,
repo was clean after commit and push.
Backlog

Future, not active now:

Add more families only when enough designs or campaign need exists.
Consider future families: animals, symbols, characters, guest-spot.
Use specific family pages like pigs/cats/hamsters only when there is a real mini collection or campaign reason.
Consider visual refinement of hub/family card spacing after more phone testing.