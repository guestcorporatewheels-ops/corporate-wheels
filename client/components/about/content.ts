// Verbatim copy from "CW Contents/2. About CW.docx" (written by the content writer).
// Do not edit wording here without the writer's approval.
export const aboutContent = {
  "title": "About Corporate Wheels",
  "sections": [
    {
      "heading": "Who We Are",
      "paragraphs": [
        "Corporate Wheels offers top class chauffeur and private transfer services throughout the United Kingdom to cater to all kinds of corporate executives, international business travellers, and private individuals.",
        "Our approach focuses on careful planning, discretion and courteous service. If you need premium airport transfers, hourly chauffeur hires, or inter-city transports, we offer you seamless experiences that revolve effortlessly around your schedules."
      ]
    },
    {
      "heading": "Our Approach",
      "paragraphs": [
        "We aim at making your business travel seamless, serene, and crystal clear. Everything about your travel—from automated routing and consistent pricing to real-time journey tracking—is designed to make business travel easier."
      ]
    },
    {
      "heading": "Our Chauffeurs",
      "paragraphs": [
        "It is our mandate to guarantee you of safety, privacy, and peace in all that we do. All our chauffeurs from Corporate Wheels are professionally trained and screened. Our chauffeurs provide courteous service throughout your journey."
      ]
    },
    {
      "heading": "Reliability & Customer Service",
      "paragraphs": [
        "We plan each journey carefully and adjust pick-up arrangements when delays occur."
      ]
    },
    {
      "heading": "UK-Wide Coverage",
      "paragraphs": [
        "Whether it be from commercial centres such as London, Manchester, and Birmingham, regional business locations, or Private Aviation FBOs, we provide chauffeur services across the UK. With our reliable partner network, we also facilitate chauffeur services from selected international destinations through our partner network."
      ]
    }
  ],
  "bottom": {
    "heading": "Travel with Complete Confidence",
    "text": "Contact us to discuss your journey requirements.",
    "buttons": [
      "Book Your Journey",
      "Request a Quote"
    ]
  }
} as const;

// Section heading labels (tagline + subtitle) shown above each section, in the
// same three-part style as the home page. These are UI labels, NOT the
// writer's copy above — the writer's text is rendered verbatim beneath them.
export const aboutHeadings = {
  hero: {
    tagline: "About Us",
    subtitle: "Chauffeur and private transfer services throughout the United Kingdom.",
  },
  sections: [
    {
      tagline: "Our Story",
      subtitle: "Careful planning, discretion and courteous service on every journey.",
    },
    {
      tagline: "How We Work",
      subtitle: "Business travel made seamless, serene and crystal clear.",
    },
    {
      tagline: "Professional & Discreet",
      subtitle: "Safety, privacy and peace of mind in all that we do.",
    },
    {
      tagline: "Always On Time",
      subtitle: "Every journey planned with care, from pick-up to arrival.",
    },
    {
      tagline: "Nationwide Reach",
      subtitle: "From major commercial centres to private aviation FBOs.",
    },
  ],
  bottom: { tagline: "Get In Touch" },
} as const;
