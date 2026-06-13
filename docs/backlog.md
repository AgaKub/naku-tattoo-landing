# Naku Tattoo — Backlog

### Backlog / safety:
Rotate DJANGO_SECRET_KEY in local .env and Render environment variables.


### Create /try-on/ as a collection hub for all ready-to-try designs.

### Add copyright / artwork rights information during Share preview flow.
   Preview is for personal try-on/reference only.
   Tattoo artwork belongs to Nadia / Naku Tattoo.
   Do not copy, reuse, tattoo elsewhere, or use commercially.







## Guest spot dropdown should filter by location and show date/status

Current issue:
- Guest spot dropdown shows all guest spots regardless of selected preferred location.
- Example: Gdańsk location can still show Lisbon dates.
- Dropdown labels do not clearly show planned dates or status.

Future fix:
- Filter guest spot dates by selected location.
- Show date range and status in the dropdown label.
- Hide closed guest spots.
- Make


## Booking form validation clarity

Current issue:
- If the email is invalid, the form returns to the filled form.
- On mobile, it is not obvious enough why submission failed.

Future fix:
- Show a clear visible error message near the email field and/or at the top of the form.
- Example: “Please enter a valid email address, e.g. name@example.com.”

Priority:
Medium-high before real traffic.


## Guest spot dropdown should filter by selected location

Current issue:
- The form shows all guest spot dates, even when a specific location is selected.
- Example: client can choose Gdańsk as preferred location but still select Lisbon guest spot date.
- This can confuse clients and Nadia may mismatch location/date, especially during admin review.

Future fix:
- When client selects a guest spot location, show only guest spot dates for that location.
- Ideally, if only one matching date exists, show it as default or make the choice very clear.
- Admin should see location + guest spot date in a way that prevents mismatch.

Priority:
High for Nadia admin clarity.


## Booking form hosting / trust issue

The guest spot inquiry form is connected and opens correctly from the landing page.

Current issue:
- On free Render hosting, the app may show a black “Render Application Loading” screen while waking up.
- This can feel suspicious or unreliable to real clients.
- It may reduce trust and conversion, especially on mobile.

Why it matters:
- The booking form is part of the public client journey.
- Before sending real traffic, the form should feel stable, branded, and trustworthy.

Future fixes to consider:
- Connect a custom booking subdomain, e.g. `booking.nadiakubczak.com`.
- Improve hosting so clients do not see the Render loading screen.
- Add a branded transition/loading page if needed.
- Test the full inquiry flow soon while the free Render plan is still available.

Priority:
High — should be tested and improved soon.



### Planned actions

1. Check whether Nadia / Naku Tattoo already has a Google Business Profile.
2. If not, prepare setup for Google Business Profile.
3. Connect landing page with Google Search Console.
4. Add local SEO language to landing page:
   - tattoo artist Gdańsk
   - tattoo artist Warsaw
   - guest spot Gdańsk
   - cute colorful tattoos
   - animal-friendly tattoos
   - storybook tattoos
5. Add or plan a “Guest spots in Gdańsk” section.
6. Prepare review/request system for real client reviews.
7. Prepare aftercare content as trust-building SEO content.
8. Later, create separate SEO pages:
   - /gdansk-tattoo/
   - /warsaw-tattoo/
   - /aftercare/
   - /available-designs/

### Notes
Google Maps visibility should be based only on real places where Nadia works or receives clients.

No fake locations.  
No duplicate low-quality profiles.  
No SEO tricks.

The purpose is not artificial ranking.  
The purpose is trust, local visibility, and discoverability.

### Rule
One step at a time.




## Google visibility setup

### Context
Nadia / Naku Tattoo needs better visibility outside Instagram.

Instagram shows the visual style, but Google can help people find Nadia when they search for tattoo artists, guest spots, tattoo care, and tattoo services in specific locations such as Gdańsk and Warsaw.

### Goal
Build a simple Google visibility system connecting:

Instagram  
↓  
Landing page  
↓  
Google Search  
↓  
Google Maps / Google Business Profile  
↓  
Client trust / booking via IG DM



Do backlogu / następnej poprawki UX

Dodałabym to jako małą poprawkę wordingową:

Teraz	Lepiej
Which guest spot are you interested in?	Which guest spot date are you interested in?
If you choose a guest spot location...	If you choose Gdańsk, please select the guest spot date you are interested in.


### Homepage navigation order

Idea:
- Move `Home` lower in the hamburger menu, possibly last.
- Reason: users usually open the hamburger from the homepage, so `Home` is less important as the first option.
- More important first actions may be:
  - Browse designs
  - Try-on
  - Booking inquiry
  - Instagram
  - Home

Status:
Backlog. Do not change now.
