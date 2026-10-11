# Mountorama Studio Website Prototype

The public website and interactive commission prototype for Mountorama Studio LTD, a professional comic illustration and production studio specializing in American, Chinese, and Korean sequential art.

---

## Overview

This repository houses Phase 2 of the Mountorama Studio Comic Commission Platform. It provides a static, high-fidelity web prototype designed to validate the visual identity, showcase artist portfolios across distinct comic styles, answer client questions, and gather detailed commission briefs before backend billing and client portal integrations are built.

---

## Key Features

1. **Homepage (`index.html`)**:
   * Hero banner featuring studio positioning and primary call to action.
   * Quick-facts stat bar outlining turnaround times, revision cycles, and artist specialization.
   * Curated showcase of featured comic panels and illustrations.
   * Step-by-step production process breakdown (script to pencils, inks, colors, and lettering).
   * Key FAQ preview with direct link to the complete help center.

2. **Style-Filtered Portfolio Grid (`portfolio.html`)**:
   * Filterable gallery organizing artwork by primary comic traditions:
     * American Comic Style (classic dynamic superhero and pulp aesthetic).
     * Chinese Manhua Style (detailed ink wash, wuxia, and fantasy rendering).
     * Korean Webtoon Style (clean line art, cinematic lighting, and vertical scroll pacing).
   * Interactive modal view for high-resolution inspection.

3. **Multi-Book Commission Request Form (`request.html`)**:
   * Dynamic brief builder supporting up to 5 individual book briefs in a single commission session.
   * Configurable book parameters including style selection, target page count, resolution formats, and deadline preferences.
   * Real-time client-side calculation and summary preview.

4. **Help Center & FAQ (`faq.html`)**:
   * Detailed breakdown covering intellectual property rights, commercial licensing, milestones, deposit requirements, and file delivery standards (TIFF, layered PSD, print-ready PDF).

5. **Signature Comic Design System**:
   * Built from scratch in `styles.css` without heavy external CSS frameworks.
   * Comic book inspired aesthetic featuring numbered section markers, ink-stamp verification badges, subtle halftone texture, and bold typography pairing (Anton, Inter, and Space Mono).

---

## Project Structure

```
mountorama-studio/
|-- assets/                              # Brand logos, studio badges, and sample artwork
|-- comic-commission-product-doc.md      # Full product specification document
|-- faq.html                             # Complete client FAQ and commercial terms
|-- index.html                           # Main studio homepage
|-- portfolio.html                       # Filterable multi-style portfolio gallery
|-- PROJECT_LOG.md                       # Architectural decisions, design iterations, and notes
|-- request.html                         # Multi-book brief intake form
|-- script.js                            # Dynamic form logic, filters, and lightboxes
|-- styles.css                           # Custom comic design system and responsive layout
`-- README.md                            # Repository documentation
```

---

## Running Locally

Because the prototype is built with standard HTML5, CSS3, and vanilla JavaScript, it runs in any modern web browser without dependencies or build commands.

### Using Python HTTP Server

```bash
python3 -m http.server 8080
```

### Using Node.js

```bash
npx serve .
```

Open `http://localhost:8080` in your browser.

---

## Development Roadmap

* [x] **Phase 1: Foundation**: Data modeling and product architecture definition.
* [x] **Phase 2: Public Site**: Static presentation layer, portfolio filters, and brief builder (this repository).
* [ ] **Phase 3: Client Accounts & Invoicing**: User authentication, deposit calculation, and payment processor integration.
* [ ] **Phase 4: Client Dashboard**: Proof review, revision feedback annotation, and project milestone tracking.
* [ ] **Phase 5: Studio Admin**: Order management, artist assignments, and pricing controls.

---

## License

Proprietary client project for Mountorama Studio LTD. All rights reserved.
