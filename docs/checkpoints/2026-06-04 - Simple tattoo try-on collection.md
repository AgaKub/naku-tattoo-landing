# 2026-06-04 — Simple tattoo try-on collection

## Project

Naku Tattoo Landing / Browser Try-On

## Completed

Added a new simple tattoo design collection for browser try-on.

Live page:

```text
/try-on/simple.html

The page includes 5 simple tattoo designs:

simple-01
simple-02
simple-03
simple-04
simple-05

Assets added:

images/simple/simple-01.png
images/simple/simple-02.png
images/simple/simple-03.png
images/simple/simple-04.png
images/simple/simple-05.png
Try-on logic

The existing shared manual try-on engine was reused:

/try-on/manual.html

New design IDs were added to the existing designImages map:

simple-01
simple-02
simple-03
simple-04
simple-05

Each design opens through:

manual.html?design=simple-01
manual.html?design=simple-02
manual.html?design=simple-03
manual.html?design=simple-04
manual.html?design=simple-05
Product decision

Confirmed architecture:

Collection page = multiple designs
Manual page = one shared try-on engine
Design ID = selected PNG

This means future tattoo families should get their own named collection page, for example:

/try-on/dragons.html
/try-on/simple.html
/try-on/animals.html
/try-on/florals.html

We decided not to use a generic multiple.html, because named collection pages are clearer for users, Nadia, testing, tracking, and future growth.

Testing

Local test passed.

Phone/live test passed.

Confirmed:

5 simple designs display correctly.
Each design opens in the existing manual try-on flow.
The shared try-on engine works with the new simple design IDs.
The flow behaves like a multiple-design collection while keeping a clear collection name.
Repo was clean after commit/push.
Backlog

Future, not active now:

Create /try-on/ as a collection hub for all ready-to-try designs.
Add copyright / artwork rights information during Share preview flow.
Consider cropping/optimizing PNG whitespace if card previews look too high, too small, or uneven.