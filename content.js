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
     footer     → tagline and contact
   ───────────────────────────────────────────────────────────────── */

window.content = {

  /* ── PAGE META ────────────────────────────────────────────────
     Sets the browser tab, search results, contact email, and the
     destination for email signups.
     ──────────────────────────────────────────────────────────── */
  meta: {
    brandName:       "Vessel",
    pageTitle:       "Vessel — A bowl, attended.",
    pageDescription: "The bowl your cat returns to, considered as carefully as a teapot. A small first release.",
    themeColor:      "#F2EFE8",
    contactEmail:    "hello@vessel.example",
    copyright:       "© MMXXVI",

    /* Email collection.
       Leave formAction as "" to show a local "Thank you" message.
       Paste a Formspree URL here when you're ready to collect emails:
         e.g. "https://formspree.io/f/abcd1234"
       Buttondown, ConvertKit, and others use the same pattern. */
    formAction:          "",
    formMessageSuccess:  "Thank you. We have your address.",
    formMessageInvalid:  "Please enter a valid email.",
  },

  /* ── NAVIGATION ───────────────────────────────────────────── */
  nav: {
    link: "Reserve",
  },

  /* ── SECTION 0 — THE FOLD ─────────────────────────────────────
     The first thing visitors see. Restraint matters here.
     The proposition is two short lines, set in serif. Together
     they name the daily return — the ritual the bowl belongs to.
     ──────────────────────────────────────────────────────────── */
  fold: {
    eyebrow:             "No. 01 — For the cat's water",
    propositionLineOne:  "The bowl",
    propositionLineTwo:  "your cat returns to.",
    emailPlaceholder:    "Your email",
    ctaText:             "Be notified",
    metaLeft:            "Made for cats",
    metaRight:           "Spring 2026",
  },

  /* ── SECTION 1 — HERO IMAGE ───────────────────────────────────
     A large, environmental photograph. Real home, real light.
     The cat drinks calmly — dignity, not cuteness. A hand may
     be half in frame, refilling or wiping. Place the vessel
     alongside the kettle or other daily ritual objects.

     To use your own photograph, drop it in /assets/ and change
     the src below to e.g. "assets/01-bowl-attended.jpg".
     ──────────────────────────────────────────────────────────── */
  heroImage: {
    src:     "https://picsum.photos/seed/vessel-cat-bowl-counter/2400/1500",
    alt:     "A cat at a stoneware bowl on the kitchen counter, late afternoon light through a window, a hand half in frame.",
    caption: "Plate 01 — A bowl, attended.",
  },

  /* ── SECTION 2 — RECOGNITION ──────────────────────────────────
     The sentence we want the visitor to sit with. Three lines.
     The third line renders in italic. This is the emotional
     hinge of the page — keep it quiet, accurate, unhurried.
     ──────────────────────────────────────────────────────────── */
  recognition: {
    lineOne:  "Your cat drinks from the same bowl",
    lineTwo:  "thousands of times a year.",
    emphasis: "We thought that deserved more attention.",
  },

  /* ── SECTION 3 — THESIS ───────────────────────────────────────
     Three short essays. Voice should read like a magazine column,
     not a product page. No bullets, no benefits, no exclamations.
     The cat is named, not "the animal." Tea is the comparison.

     To add or remove a paragraph, copy or delete a { heading,
     body } block in the array below.
     ──────────────────────────────────────────────────────────── */
  thesis: {
    eyebrow:    "A few notes",
    indexLabel: "i / ii / iii",
    entries: [
      {
        heading: "On the daily return.",
        body:    "There is a quiet ritual built into living with a cat. A bowl, filled and returned to, then filled again. The kettle gets one. The teapot gets one. We thought the bowl deserved the same care.",
      },
      {
        heading: "On materials.",
        body:    "Matte stoneware in oat. A brushed stainless interior at the base, where the water sits. We chose materials that feel honest in the hand, that show their age slowly, and that earn a place on the kitchen counter.",
      },
      {
        heading: "On what is absent.",
        body:    "We did not want a device. There are no buttons, no screens, no indicator lights on the vessel. What it does, it does in the water — in clarity, in ripple, in the sound of being filled. The work is present. It is not on display.",
      },
    ],
  },

  /* ── SECTION 4 — MATERIAL CLOSE-UP ────────────────────────────
     Two tactile photographs. The first frames the stoneware rim
     and the water it holds. The second is closer still — water
     against the stainless interior, light catching the edge.

     Two to three colours per frame, strict. Oat, soft black,
     warm white. No props that fight for attention.

     Replace the src with paths like "assets/02-stoneware-rim.jpg"
     once your photographs are added.
     ──────────────────────────────────────────────────────────── */
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

  /* ── SECTION 5 — RESERVE ──────────────────────────────────────
     The second email capture, framed as a quiet reservation.
     Not a pre-order — a list. The maker writes once.
     ──────────────────────────────────────────────────────────── */
  reserve: {
    eyebrow:          "A small first release",
    lede:             "The first batch is small and made carefully. If you would like one for your kitchen — and for your cat — leave your address below.",
    emailPlaceholder: "Your email",
    ctaText:          "Reserve",
    note:             "We will write to you once — when the bowls are ready.",
  },

  /* ── FOOTER ───────────────────────────────────────────────── */
  footer: {
    tagline: "Made carefully, in small batches.",
  },

};
