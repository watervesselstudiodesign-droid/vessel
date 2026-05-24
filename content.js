/* ─────────────────────────────────────────────────────────────────
   VESSEL — content.js

   ★ This is the only file you need to edit to change words on the
     page. Replace the text between the "quotes". Don't change the
     keys (the words to the LEFT of the colons).

   Rules of the road:
     – Keep "double quotes" around every piece of text.
     – Keep the comma at the end of every line.
     – Use a backslash and quote (\") if your text contains a quote.
     – To add a thesis paragraph: copy a { heading, body } block,
       paste it below an existing one, and edit.

   Quick map:
     meta       → tab title, contact email, form settings
     nav        → top-right link
     fold       → first thing visitors see
     heroImage  → the large photograph that follows the fold
     recognition→ the single sentence that follows the hero
     thesis     → the three short essays
     materials  → the two close-up photographs
     reserve    → the second email capture, near the bottom
     footer     → tagline, origin, and contact
   ───────────────────────────────────────────────────────────────── */

window.content = {

  /* ── PAGE META ─────────────────────────────────────────────── */
  meta: {
    brandName:       "Vessel",
    pageTitle:       "Vessel — Filtered water for the bowl your cat returns to.",
    pageDescription: "A filtered water bowl, made carefully. Stoneware, stainless, considered. A small first release.",
    themeColor:      "#F2EFE8",
    contactEmail:    "hello@vessel.example",
    copyright:       "© MMXXVI",

    /* Email collection.
       Leave formAction as "" to show a local "Thank you" message.
       Paste a Formspree URL here when you're ready to collect emails:
         e.g. "https://formspree.io/f/abcd1234"
       Buttondown, ConvertKit, and others use the same pattern. */
    formAction:          "",
    formMessageSuccess:  "Thank you. We'll write when the bowls are ready.",
    formMessageInvalid:  "Please enter a valid email.",
  },

  /* ── NAVIGATION ───────────────────────────────────────────── */
  nav: {
    link: "Reserve",
  },

  /* ── SECTION 0 — THE FOLD ──────────────────────────────────────
     The proposition names the function (filtered water) on line one
     and the ritual (the bowl your cat returns to) on line two.
     ──────────────────────────────────────────────────────────── */
  fold: {
    eyebrow:             "No. 01 — For the cat's water",
    propositionLineOne:  "Filtered water,",
    propositionLineTwo:  "for your cat's bowl.",
    emailPlaceholder:    "Your email",
    ctaText:             "Be notified",
    metaLeft:            "Made for cats",
    metaRight:           "First release, 2026",
  },

  /* ── SECTION 1 — HERO IMAGE ─────────────────────────────────── */
  heroImage: {
    src:     "https://picsum.photos/seed/vessel-cat-bowl-counter/2400/1500",
    alt:     "A cat at a stoneware bowl on the kitchen counter, late afternoon light through a window, a hand half in frame.",
    caption: "Plate 01 — A bowl, attended.",
  },

  /* ── SECTION 2 — RECOGNITION ───────────────────────────────────
     Two short factual lines, then the emphasis in italic. The job
     is recognition, not persuasion. Keep it unhurried.
     ──────────────────────────────────────────────────────────── */
  recognition: {
    lineOne:  "Your cat drinks from the same bowl thousands of times a year.",
    lineTwo:  "The water inside it sits still for hours.",
    emphasis: "We thought that deserved more attention.",
  },

  /* ── SECTION 3 — THESIS ─────────────────────────────────────────
     Three short essays. Each does a concrete product job — water,
     materials, placement — while keeping the editorial voice.
     ──────────────────────────────────────────────────────────── */
  thesis: {
    eyebrow:    "A few notes",
    indexLabel: "i / ii / iii",
    entries: [
      {
        heading: "On the water itself.",
        body:    "A replaceable carbon filter sits between the reservoir and the bowl, reducing sediment and the off-tastes that build up in still water. The water stays fresher between refills. Your cat tastes the difference.",
      },
      {
        heading: "On materials.",
        body:    "Matte stoneware in oat. A brushed stainless interior at the base, where the water sits. No buttons, no screens, no indicator lights on the vessel. What it does, it does in the water — in clarity, ripple, and the sound of being filled.",
      },
      {
        heading: "On where it sits.",
        body:    "Shaped low and wide, kept apart from the food bowl, the way cats prefer to drink. Designed to live on the counter or the floor without adding visual noise to the room around it.",
      },
    ],
  },

  /* ── SECTION 4 — MATERIAL CLOSE-UP ─────────────────────────── */
  materials: {
    primary: {
      src: "https://picsum.photos/seed/vessel-stoneware-oat/1600/2000",
      alt: "Close detail of an oat-coloured stoneware rim, water held just below.",
    },
    secondary: {
      src: "https://picsum.photos/seed/vessel-water-stainless/1200/1500",
      alt: "Still water against the brushed stainless interior of the vessel, light catching the edge.",
    },
    captionLabel: "Plates 02 & 03",
    captionBody:  "Matte stoneware in oat. A brushed stainless interior at the base. Photographs taken in real homes, in available light, without retouching.",
  },

  /* ── SECTION 5 — RESERVE ───────────────────────────────────────
     Email + one optional open-text question. The question is the
     research instrument — answers shape positioning and product
     priorities. Framed aspirationally, not as complaint.
     ──────────────────────────────────────────────────────────── */
  reserve: {
    eyebrow:             "A small first release",
    lede:                "A small first batch, made carefully. If you'd like one for your kitchen — and your cat — leave your address below.",
    emailPlaceholder:    "Your email",
    questionLabel:       "If you'd like, tell us what you've been looking for in a water bowl for your cat.",
    questionPlaceholder: "Optional",
    ctaText:             "Reserve",
    priceNote:           "Pricing announced before the first release.",
    note:                "We will write to you once — when the bowls are ready.",
  },

  /* ── FOOTER ───────────────────────────────────────────────── */
  footer: {
    tagline: "Made carefully, in small batches.",
    origin:  "Designed in Minneapolis.",
  },

};
