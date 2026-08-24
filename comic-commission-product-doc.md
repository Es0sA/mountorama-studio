# Product Document: Mountorama Studio LTD Comic Commission Platform

## 1. Summary

A platform that lets writers submit scripts and get them turned into finished digital comic pages, illustrated in a style of their choosing (American, Chinese, Korean, and others). Mountorama Studio LTD runs a team of artists, and each style is tied to a specific artist on the team — a client's style choice determines who works on their project. The platform's job is to organize the business around the art, not to automate the art itself. Clients receive a digital file only; printing is on them.

**Brand colors:** dark grey, red, white. **Logo delivered** — a circular mountain/pine badge mark with a decorative flourish, paired with a tracked wordmark. (See naming inconsistency flagged in §13 — needs one confirmed official name before it's used further.)

## 2. Problem

Right now, commissioning comic art informally is messy for both sides:

- **For the writer/client:** no clear way to describe what they want (script + style + reference + page count + panel count), no visibility into progress, unclear pricing, scattered feedback (mostly through the studio's Facebook page, plus email/DMs).
- **For the studio:** briefs come in inconsistent formats, revisions get lost in chat threads, payment timing is ad hoc, and there's no record of what was agreed to versus what was delivered.

Mountorama has done a few gigs informally already — this document formalizes that into a repeatable process before building anything.

## 3. Target Customer

Two segments exist:
1. **Independent writers/self-publishers** — solo creators with a script, need art to bring it to life, usually one-off or small recurring jobs, price-sensitive, fast decision-making.
2. **Small publishers/studios** — teams with more scripts, more recurring volume, likely want consistency across a series, slower decision-making, higher budget.

**Recommendation:** Target **independent writers first**. They're faster to close, easier to iterate with, and let the studio refine the intake/brief/revision process before dealing with the higher coordination overhead of a studio relationship. Small publishers become the v2 expansion once the process is proven.

*(Flag this if you disagree — the rest of this doc assumes independents-first, but the workflow below works for both.)*

Most clients are not Nigerian, so pricing and invoicing need to support multiple currencies per client rather than a single fixed currency.

## 4. Core Bottlenecks to Solve (v1 scope)

All four bottlenecks matter for v1:

| Bottleneck | v1 Approach |
|---|---|
| Client intake (script + style + brief) | A structured request form: script upload, style selection, **page count (required)**, **max panels per page (optional)**, reference images |
| Revisions/feedback | A threaded space per order for page-specific feedback, **plus a general chat/messaging section for direct communication with the client's project manager** (not the assigned artist directly) |
| Payments & order tracking | A simple order record: status (Requested → Quoted → In Progress → Review → Delivered → Paid), **50% deposit due after quote (with receipt upload + confirmation before work starts), 50% balance due after delivery**, in the client's currency |
| Portfolio/request entry point | A public-facing page showing style samples (American/Chinese/Korean) that funnels into the request form |

## 5. Service Workflow (what the platform organizes)

1. **Discovery** — Client sees a preview of recent work on the website's homepage (often arriving there via the studio's Facebook page), with a "see more" option leading to the full portfolio page, then submits a request.
2. **Brief intake** — Client fills structured form: script (text/file), preferred style, page count, max panels per page (optional), references. Orders can bundle **up to 5 comic books** in one request.
3. **Quote** — Studio reviews, sends a quote. Base rate: **$100/page**; promotional rate: **$70–$80/page** when active. Superuser controls current pricing from a backend panel.
4. **Deposit** — Client pays **50% deposit per comic book** in the order, uploads proof of payment, and waits for staff confirmation before production begins.

   **Promo slot-holding variant:** During active promotions, a client can secure a slot at the promo rate by paying the 50% deposit **without submitting a script upfront**. The script can be sent later, once they're ready. Account creation happens at this deposit step regardless of path (see below), so the slot is tied to their account from the moment they pay.
5. **Production** — Artist draws. Platform tracks status, and **clients can view drafts as they're produced**, so they can follow progress without asking.
6. **Review round(s)** — Client leaves feedback tied to specific pages, or messages their project manager directly via chat. Clients don't have direct chat access to the assigned artist — the project manager relays feedback and keeps production on track. **Default is 2 revision rounds for line art and 2 revision rounds for colored pages; superuser can increase this per order.**
7. **Delivery** — Final digital files (PDF, JPG by default) delivered once the **50% balance** is paid. **PSD files are available as a separate paid add-on**, not included by default.
8. **Archive** — Order and files stay retrievable for both sides (useful if client wants a sequel/series later). **Downloadable invoices** are generated for each payment stage.

**Account creation:** Clients don't sign up upfront through a public form. An account is created automatically at the point of first payment (the deposit), and login details are sent by email attached to the payment receipt. This keeps friction low before commitment and means every account is tied to a real, paid order — no orphaned signups. For the promo slot-holding path, this means the account and login are created at deposit time, and the client later logs in to submit their script when ready.

## 6. What This Platform Is NOT (v1)

- Not an AI comic generator — every panel is hand-drawn/digitally illustrated by a member of the Mountorama team.
- Not an open marketplace with anonymous multiple artists — each style is tied to a specific in-house artist; clients aren't choosing between competing outside artists.
- Not a printing/fulfillment service — digital delivery only, client handles printing.
- **Does include** a chat/messaging section between clients and the studio (this was originally scoped out, but is now in v1) — routed through the client's project manager, not the assigned artist directly.

## 7. Success Criteria for the Business (not the software)

- Every new client goes through the same intake process (no more ad hoc informal briefs).
- No paid order proceeds without the initial deposit, confirmed via uploaded receipt (except where a promotion adjusts price-per-page).
- Revision rounds default to 2 for line art and 2 for colored pages, and are capped unless the superuser extends them (protects team time).
- One place shows: who owes what, what's in progress, what's overdue for delivery, in the correct currency per client.
- Billing, bookkeeping, and analytics are visible only to the superuser and staff assigned to the finance department.

## 8. Roles & Permissions

- **Superuser (you):** Complete control over every aspect of the platform — pricing and promotions, revision-round limits, homepage visuals, portfolio image uploads, staff accounts and permissions, VIP client designation, and all billing/analytics data.
- **Staff logins:** Multiple staff accounts, each with abilities assigned individually by the superuser (e.g., an artist may only need access to their own orders, with no client-facing chat; a project manager handles client communication; a finance staffer may get access to billing and analytics).
- **Finance dept. access:** Billing/Finance is a **standalone page** (with bookkeeping and analytics), so finance-role staff can go straight to it without navigating through the superuser dashboard. It's also reachable **from within the superuser dashboard**. Restricted to the superuser and any staff placed under the finance role.
- **Client logins:** Every client gets an account. Superuser can designate certain clients as **VIP**, unlocking benefits (specifics — e.g., discounts, priority turnaround — to be defined later).

## 9. Pricing & Promotions

- Standard rate: **$100 per page**.
- Promotional rate: **$70–$80 per page**, active during promotions.
- Superuser has a **private admin page** to set/adjust prices and promotions directly (no code changes needed).
- Active promotions should automatically reflect across the platform: in chat conversations with clients, on generated invoices, and on the **homepage, with a countdown timer** showing when the promotion ends.

## 10. Homepage

- A small selection of recent/featured work displayed directly on the homepage, with a "see more" link to a dedicated, full portfolio page (style samples: American/Chinese/Korean), images uploadable by the superuser.
- A homepage visual that can be a **slideshow, an animated background, or a static image** — superuser's choice, and editable by superuser or staff granted that specific privilege.
- Promotion countdown timer, reflecting whatever is currently set in the pricing/promotions admin page.

## 11. FAQ

*(Starter set — expand as real client questions come in.)* The FAQ exists in three places: as its own dedicated page, repeated at the bottom of the homepage, and linked from other relevant pages (e.g., the intake form, client dashboard) so clients can find answers without needing to ask directly.

**Q: What comic styles do you offer?**
A: American, Chinese, and Korean styles, each handled by a specific artist on the Mountorama team.

**Q: Do you print physical copies?**
A: No — Mountorama delivers digital files only. Printing is handled by the client.

**Q: How much does a comic cost?**
A: Standard pricing is $100 per page. Promotional pricing ($70–$80/page) runs periodically — check the homepage for active promotions and countdowns.

**Q: How does payment work?**
A: 50% deposit is due after you receive a quote (upload your payment receipt for confirmation before work begins), and the remaining 50% balance is due before final files are delivered.

**Q: What file formats do I get?**
A: PDF and JPG by default. PSD files are available as a separate paid add-on.

**Q: How many revisions do I get?**
A: 2 rounds for line art and 2 rounds for colored pages, by default. Additional rounds may be arranged directly with the studio.

**Q: Can I order multiple comics at once?**
A: Yes — you can bundle up to 5 comic books in a single order, with a 50% deposit due on each.

**Q: What currency do you charge in?**
A: Pricing is set per client based on their currency.

**Q: Can I message the studio directly?**
A: Yes — each order includes a chat/messaging section for direct communication with your project manager. Artists aren't contacted directly; your project manager relays feedback and keeps things on track.

## 12. Pages / Sitemap

**Public-facing (client side)**
1. Homepage — featured work preview, "see more" link to full portfolio, homepage visual (slideshow/animated/static), active promo + countdown timer, FAQ excerpt at the bottom
2. Full Portfolio page — complete style samples (American/Chinese/Korean)
3. Request/Brief Intake form — script upload, style, page count, max panels per page (optional), references
4. FAQ page (also linked from other relevant pages)

**Client account (created at first payment)**
5. Client Login
6. Client Dashboard — tabs for orders/status, drafts to view, revision feedback, chat with project manager, and **invoices (as a tab, not a separate page)**; VIP status shown if applicable

**Staff / internal**
7. Staff Login
8. Staff Dashboard — scoped to whatever the superuser assigns (e.g., an artist sees only their assigned orders)

**Superuser**
9. Superuser Dashboard — full control panel: pricing/promotions editor, homepage visual editor, portfolio image uploads, staff account + permission management, VIP client designation, revision-round overrides
10. Billing/Finance page — bookkeeping + analytics; standalone page for direct access by finance-role staff, and also reachable from within the Superuser Dashboard

## 13. Open Questions to Resolve Before MVP Scoping

- Payment methods: **PayPal and bank transfer** (confirmed — no Paystack, given the international client base).
- Turnaround time: **left to superuser's discretion per order**, rather than standardized by page count.
- VIP client benefits: specifics still to be defined (discount %, priority queue, etc.).
- Exact permission sets for staff roles beyond "finance" (e.g., what an artist-only login can/can't see).
- **Brand naming inconsistency:** logo assets currently use three different names — "Mountorama Corporation" (master logo file), "Mountorama Studio Limited" (Facebook banner), and "Mountorama Studio LTD" (this doc). Needs one confirmed official name before it's baked further into legal, billing, or footer copy.
- **Later-phase requirement:** a dedicated mobile interface, not just responsive breakpoints — e.g. the homepage's portfolio grid becoming a swipeable carousel on mobile, comparable to how some platforms split desktop/mobile into distinct experiences. Not part of v1 scope, but should inform architecture decisions once this phase is planned.

---

*Next step: with pricing, revision policy, payment methods, and roles now defined, this becomes the input for the MVP scope (which screens/features actually get built first).*
