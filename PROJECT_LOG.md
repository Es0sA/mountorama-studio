# Project Log — Mountorama Studio Website

Working notes for the Mountorama Studio comic commission platform build. This
covers what's been decided and built so far, so anyone picking this up later
(including future-Claude) has the context without re-deriving it.

## Background

Mountorama Studio LTD runs a team of artists producing hand-illustrated comic
pages for clients (American, Chinese, Korean styles, each tied to a specific
artist). The full business is specified in a separate product document
("Mountorama Studio LTD Comic Commission Platform") that scopes a complete
platform: public site, client accounts + payments, client dashboard, staff
and superuser admin panels, a finance/billing page, and a promotions engine.

That's too large to build in one pass. The agreed build order is:

1. **Foundation** — data model, auth skeleton
2. **Public site** — homepage, portfolio, FAQ, request/intake form ← **this repo, done**
3. Client account & payments (deposit-based signup, PayPal/bank transfer, order status, invoices)
4. Client dashboard (drafts, revision feedback, chat with project manager, order tabs)
5. Staff & superuser admin (pricing/promo editor, staff permissions, homepage/portfolio editor, revision overrides)
6. Finance/billing page (bookkeeping + analytics)
7. Promotions system (countdown timer logic, promo rate propagation)

This repo currently covers **phase 2 only** — a static HTML/CSS/JS prototype,
no backend, no accounts, no payments. It's meant to validate visual direction
and get real content in front of the client (Evans) before the full platform
gets built.

## What's built

Four static pages, no framework, no build step:

- `index.html` — homepage: hero, quick facts strip, featured work, process
  steps, FAQ excerpt
- `portfolio.html` — full portfolio grid with style filter tabs (American /
  Chinese / Korean)
- `faq.html` — full FAQ
- `request.html` — brief/intake form (client-side only, no submission
  backend; bundles up to 5 books, dynamic add/remove via `script.js`)

Shared `styles.css` and `script.js`. No external framework — plain CSS
custom properties and vanilla JS.

### Design system

The site is laid out like a comic page: numbered section eyebrows (originally
"PG. 01" etc., see Decisions below), ink-stamp badges, a halftone-dot
texture, and a type pairing of Anton (display) / Inter (body) / Space Mono
(labels). Brand colors are dark grey / red / white per the product doc.

### Real assets in use

- **Logo:** the actual Mountorama mark (circular mountain/pine badge +
  flourish), sourced from files the client provided. Three variants live in
  `assets/`:
  - `logo-icon.png` — transparent, for light backgrounds (header)
  - `logo-icon-light.png` — recolored to paper tone, for dark backgrounds
    (footer, page heroes) — a plain white badge-plate treatment was tried
    first and rejected as looking bad at small size
  - `logo-mark.png` — full lockup with wordmark, background-removed
- **Portfolio art:** 19 real pieces in `assets/portfolio/`, sourced from the
  client's Facebook page cache and later a direct batch the client (Evans)
  sent via Telegram. The Telegram batch (`work-13` through `work-19`,
  including the "Coalition of Champions," "Afrigaurd," and "Justicers" book
  covers) is intentionally featured first in both grids, since Evans sent
  those himself. All pieces are currently tagged "American" style since
  that's what the available samples show — **no Chinese or Korean samples
  have been provided yet**; two placeholder panels remain on the portfolio
  page for those.
  - Excluded from the source material during curation: other client
    branding work mixed into the same Facebook page (cake/apparel/storefront
    logos — Mountorama does broader design work, not just comics), one piece
    with a visible Fiverr watermark, and one piece featuring a
    Spider-Man-homage character (IP risk for a professional portfolio).
- **Hero background:** a fanned/faded collage of the studio's own comic
  covers (`assets/hero-bg.jpg`), used with a dark gradient overlay across the
  homepage hero and every page's `.page-hero` section.
- **Favicon:** added using the logo icon (site previously had none).

### Hosting

Public GitHub repo (`Es0sA/mountorama-studio`), deployed via GitHub Pages:
**https://es0sa.github.io/mountorama-studio/**. Made public specifically so
Pages could serve it on a free plan — there's no sensitive data in the static
prototype, just placeholder/prototype copy and the real portfolio art.

## Client feedback incorporated (Evans)

- Removed the "PG. 01" / "PG.01" style numbering from section eyebrows and
  process steps — real clients were reading it as if it referred to pages of
  their own commissioned book, not site navigation. Replaced with plain
  numbers.
- Corrected copy: clients communicate with a **project manager**, not the
  assigned artist directly (chat feature, FAQ answer, process-step copy).
  This also updated the source product doc (see below).
- Removed the Naira mention from the currency FAQ answer.
- Applied the studio's own fanned-comic-covers image as the site background
  (homepage hero, then carried to every other page's header section per a
  follow-up request).
- Removed the rotated "American/Chinese/Korean" stamp badges that were
  overlaid on each portfolio artwork panel — filtering by style still works,
  just no label on the art itself.
- Request form: panel count changed from a required total to an **optional
  "max panels per page"** field. Timeline & Budget section removed from the
  form entirely.
- Wordmark changed from plain "Mountorama" to a stacked "Mountorama / Studio
  LTD" lockup, matching the official business name.

## Bugs found and fixed along the way

- A CSS specificity bug (`.main-nav a` overriding `.btn`'s own padding/border)
  was silently collapsing the nav button's bottom padding, throwing off its
  vertical alignment — caught by the client, root-caused, fixed, and the
  whole site was swept for the same pattern (found nowhere else).
- The dynamic "add another book" JS was silently breaking after the first
  render because the remove-book button referenced in `script.js` didn't
  exist in the HTML markup — caught via Playwright testing, not visually.

## Open items / things to resolve

These were surfaced during the build and added to the product doc's Open
Questions section:

- **Brand naming inconsistency:** the logo assets themselves use three
  different names — "Mountorama Corporation" (master logo file), "Mountorama
  Studio Limited" (Facebook banner), "Mountorama Studio LTD" (product doc).
  Needs one confirmed official name before it's used in anything legal,
  billing-related, or copyright footer text.
- **No Chinese or Korean style samples yet** — portfolio filter works, but
  those two categories are still empty placeholders.
- **Dedicated mobile site**, not just responsive breakpoints, flagged as a
  later-phase requirement (e.g. the portfolio grid becoming a swipeable
  carousel on mobile). Not started; noted so it informs architecture
  decisions when that phase is scoped.

## Pricing research (for quoting this work to the client)

Researched market rates to price the overall engagement. Summary:

| Phase | Status | Freelance-market value (USD) |
|---|---|---|
| Public site | Done | $2,500–$4,500 |
| Accounts + payments | Not started | $6,000–$12,000 |
| Client dashboard | Not started | $5,000–$10,000 |
| Staff + superuser admin | Not started | $6,000–$12,000 |
| Finance/billing page | Not started | $3,000–$6,000 |
| Promotions engine | Not started | $1,500–$3,000 |
| **Total** | | **$24,000–$48,000** |

Rationale: this matches the market category of a "B2B SaaS MVP with
multiple user roles, billing, and an admin dashboard" ($20K–$60K freelance,
$50K–$250K agency per 2026 market research), priced in USD rather than local
Nigerian rates since Mountorama itself prices its own service in USD for an
international clientele. Recommended structure: bill per phase with a
50/50 deposit-then-delivery split, mirroring the payment model already
defined in the product doc, rather than one lump sum.

## Working notes for whoever continues this

- Local preview: `python3 -m http.server 8731` from the repo root, then open
  `http://localhost:8731/index.html`.
- Playwright (via Node, `require('playwright')` from `/home/es0sa`) was used
  throughout for screenshots and functional testing (form submission, filter
  behavior, mobile nav, broken-image checks). Native `loading="lazy"` on
  portfolio images means naive "is this image broken" checks need to scroll
  or wait — images below the fold won't have loaded yet on a fresh
  `networkidle` check.
- The product doc lives outside this repo, at the client's local machine
  (`comic-commission-product-doc.md`) — it's the source of truth for
  business rules and has been kept in sync with decisions made during this
  build (see "Client feedback incorporated" above).
