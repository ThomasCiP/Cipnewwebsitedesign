## CiP Single-Page Website Design Brief (for Figma)

### 1) Project summary

**Christians in Politics (CiP)** exists to encourage Christians to engage *relationally* in public life—loving neighbours through faithful presence—by **communicating the value**, **equipping Christians**, and **helping Christians network**. 

This redesign reflects your updated direction and new future state: a **custom membership platform** and **custom event registration/management tool** (both to be built next).

---

### 2) One goal, one conversion

**Site type:** single-page conversion landing page (no multi-page nav required)

**Primary CTA everywhere:** **Join our network**
**Conversion definition (now):** a prominent **button only**, designed to later link directly into the network platform (no embedded signup form yet).

**Important UX requirement:** The CTA must be implemented as a **linkable button component** with a configurable destination URL, so it can be pointed to the platform later without redesign.

---

### 3) Branding constraint (must match existing site)

Maintain the **current ChristiansInPolitics.com** visual identity and styling:

* colour palette, typography, spacing, button styles, cards, icon style, imagery style, tone

**Figma requirement:** include a “**Brand extraction**” section where the designer recreates key tokens/components from the current site (buttons, headings, cards, form fields).

---

### 4) Core messaging (from updated directors’ doc)

**Hero vision statement (must be first):**
**“To see a society blessed by Christ’s love as Christians are active in public life.”**
(Directors doc version for supporting copy: “blessed by the overflow of Christ’s love…”) 

**Mission (supporting copy):** Encourage Christians across the broad Christian community to engage relationally in politics—loving neighbours through faithful presence. 

**Three pillars (page backbone):**

1. Communicating the value and importance of participation 
2. Equipping Christians (resources + events) 
3. Helping Christians network and have fellowship (within/across parties) 

**Values to reflect in tone + copy:**

* Faithful, Not Fearful 
* Celebrating Disagreement 
* Relational 

---

## 5) Page flow and required sections (top to bottom)

### A) Sticky header

* Minimal header with:

  * Logo area (existing branding)
  * Optional anchor links: Why • Equip • Network • Events • FAQ • Contact
  * Primary button: **Join our network**

### B) Hero (Vision + CTA)

* H1: Vision statement (exact wording above)
* 1–2 sentence explainer: faithful presence in public life, neighbour-love, non-partisan posture
* Primary CTA button: **Join our network** (link placeholder)
* Optional secondary: “Learn more” (scroll anchor only, not a competing conversion)

### C) Why Christians should care (Communicating the value)

Goal: theological + practical motivation, without partisan cues.

* Include explicit reference to Christians being **“a light to the world”** (Matthew 5:13–16)
* 3–5 bullets explaining why public life matters (presence, service, integrity, neighbour-love)
* End with CTA repeat: **Join our network**

### D) Equip Christians (Events + free resources)

Two-column on desktop, stacked on mobile:

**D1: CiP events (churches + university campuses)**

* Describe what an event looks like (talk + Q&A + practical next steps)
* “Invite CiP to my church/uni” link → jumps to Contact form with that option preselected

**D2: Free resources**

* Grid of free resources (placeholders acceptable)
* Tags/categories (e.g., Getting Started, Faithful Presence, Church Kit, Uni Kit)
* Keep resources as value delivery, not the primary conversion

CTA repeat: **Join our network**

### E) Events listing (placeholders now; real system later)

Events must appear on the same page, even if initially placeholders.

* “Upcoming events” section with 3–6 event cards:

  * Title, date, location, short description, “Register” button (placeholder)
  * Filters optional (State / Online / Church / Uni / Networking)
* Design should anticipate your **future custom event registration tool** (card → event detail → register flow), but can prototype with placeholders for now.

### F) Network (Networking events + membership platform)

This is the key “so what?” section that explains why the network exists.

* Open networking events: fellowship + relationships + encouragement
* Membership platform (exclusive environment): directory, introductions, development, pathways to aligned political parties & Christian organisations (framed non-partisan)

CTA repeat: **Join our network**

**Note:** Keep public website free of public comment/forum mechanics; earlier planning docs explicitly warn against online spaces fostering unhelpful debate. 

### G) FAQs (required)

Accordion layout (8–12 questions). Suggested starters:

* Are you endorsing any political party or candidate?
* Is CiP open to all Christian denominations?
* What does “Join our network” mean?
* Do I need to be a member of a political party?
* What happens at CiP events?
* Can CiP run an event at my church or university?
* How do you handle disagreement between Christians?
* How will the membership platform work (and when)?
* What information will I need to provide?
* How do you protect respectful, Christlike engagement?

Include one FAQ answer that lightly anchors the ethos:

* Faithful, not fearful; relational presence; celebrate disagreement within shared Christian convictions. 

### H) Contact us (smart form)

Single form with a dropdown:

* Request a CiP event at my **church**
* Request a CiP event at my **university**
* I want to **host a CiP networking event**
* General enquiry

Conditional fields depending on choice (location, dates, audience size, venue notes).
Confirmation state + expected response time.

### I) Footer (include non-partisan commitment)

Must include a short “Non-partisan commitment” statement near the footer, e.g.:

* “CiP does not endorse parties, candidates, or policies. We exist to encourage faithful Christian presence in public life.”

Also include: privacy, contact email, socials.

---

## 6) Components the designer must create (matching existing brand)

* Button system (primary = Join our network)
* Sticky header + anchor nav
* Section templates (hero, two-column, feature grid)
* Event cards + placeholder register flow
* Resource tiles/cards
* FAQ accordion component
* Smart contact form (dropdown-driven field states)
* Footer with non-partisan statement block

Breakpoints: mobile / tablet / desktop.

---

## 7) Figma deliverables

1. Brand extraction (tokens + recreated components from current site)
2. Single-page wireframe (desktop + mobile)
3. High-fidelity single-page design (desktop + mobile)
4. Component library
5. Clickable prototype (anchors + FAQ accordion + event card interactions + contact form states)
6. Copy deck (final text for each section)

---

## 8) Implementation notes (so design matches build reality)

* **Join our network** is a **button-only placeholder** now; design it so it can later link out to the network platform URL without redesign.
* Events must be visible now as placeholders; design must anticipate a future custom event tool.
* Code of conduct / statement-of-faith gating will be handled inside the platform later (not required as a website signup step yet).

If you want, I can also produce a **“paste-into-Figma” condensed prompt** version of this brief (same content, but in a single instruction block optimized for Figma AI).
