// Verbatim copy from "CW Contents/Premium FleetCW.docx" (written by the content writer).
// Do not edit wording here without the writer's approval.
export const premiumFleetContent = {
  "title": "Premium Fleet",
  "intro": "Corporate Wheels offers Premium Fleet chauffeur services for business and private travel. With the combination of state-of-the-art automotive technology and outstanding craftsmanship, Corporate Wheels provides you with an excellent opportunity for a tranquil and comfortable ride around the whole of London and the UK.",
  "sections": [
    {
      "heading": "Refined Comfort & Flagship Models",
      "paragraphs": [
        "The vehicles that make up our Premium Fleet range from some of the finest luxury car models in the world including Mercedes-Benz E-Class, BMW 7 Series, and Audi A6, which we maintain to provide premium quality services."
      ],
      "bullets": [
        {
          "label": "Acoustic & Ride Isolation",
          "text": "Suspension and cabin sound insulation features vary by vehicle. Please discuss any specific requirements when enquiring."
        },
        {
          "label": "Leather Upholstery",
          "text": "Available in selected vehicles."
        },
        {
          "label": "Climate Control",
          "text": "Please let your chauffeur know your preferred cabin temperature."
        },
        {
          "label": "Privacy Glass with Sun Blinds",
          "text": "Privacy glass is tinted."
        }
      ]
    },
    {
      "heading": "Onboard Facilities and Connectivity",
      "paragraphs": [
        "Tell us about any Wi-Fi or charging requirements when enquiring so we can confirm a suitable vehicle."
      ],
      "bullets": [
        {
          "label": "High Speed Wi-Fi",
          "text": "High-speed internet access all along your route for email, video conferencing, and web surfing."
        },
        {
          "label": "Power Outlets for Device Charging",
          "text": "In-car USB ports and power sockets to ensure your devices have enough power."
        },
        {
          "label": "Freebies",
          "text": "Bottled chilled water and newspapers/magazines provided on each trip."
        }
      ]
    },
    {
      "heading": "Luggage & Capacity Guidelines",
      "paragraphs": [],
      "bullets": [
        {
          "label": "Capacity for Passengers",
          "text": "Up to 3 passengers can travel in comfort."
        },
        {
          "label": "Luggage Capacity",
          "text": "Up to two medium-sized suitcases and two small cabin bags, subject to bag dimensions and vehicle confirmation."
        },
        {
          "label": "Vehicle Choice",
          "text": "For passengers travelling with extra luggage, it is recommended that one opts for either our Luxury MPV or SUV vehicles."
        }
      ]
    }
  ],
  "bottom": {
    "heading": "Enquire About Premium Fleet Travel",
    "text": "Send us your journey details, passenger numbers and luggage requirements to request a quote.",
    "buttons": [
      "Request a Quote"
    ]
  }
} as const;

// Gold taglines (+ subtitle where the doc gives a section no intro line).
// UI labels, NOT the writer's copy.
export const premiumFleetLabels = {
  heroTagline: "Executive Saloons",
  sections: [
    { tagline: "Flagship Comfort" },
    { tagline: "On the Move" },
    { tagline: "Vehicle Specification", subtitle: "Space for you, your luggage and a professional chauffeur." },
  ],
  bottomTagline: "Premium Fleet Enquiries",
} as const;
