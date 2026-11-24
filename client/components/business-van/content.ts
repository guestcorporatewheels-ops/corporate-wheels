// Verbatim copy from "CW Contents/Business Van FleetCW.docx" (written by the content writer).
// Do not edit wording here without the writer's approval.
export const vanContent = {
  "title": "Business Van Fleet",
  "intro": "Business Van by Corporate Wheels is the best possible choice for corporate group travel, delegation transportation, event management, and airport pickup services of families. By offering the combination of space like a van and luxury like an executive car, our business MPVs make sure that the groups travel in comfort and style.",
  "sections": [
    {
      "heading": "First-Class Group Comfort & Modular Space",
      "paragraphs": [
        "Our Business Van fleet is equipped with state-of-the-art interiors that are capable of fitting in meetings en route or simply relaxing."
      ],
      "bullets": [
        {
          "label": "Conference Seat Arrangements",
          "text": "Rear-facing seat configurations can be provided upon request to make possible discussions or even work sessions in motion."
        },
        {
          "label": "Cabin Features",
          "text": "Individual leather seats and rear climate control."
        },
        {
          "label": "Private Glass Panes",
          "text": "Ensuring privacy and discretion of distinguished passengers through privacy glass panes in the entire cabin area."
        }
      ]
    },
    {
      "heading": "Onboard Facilities",
      "paragraphs": [],
      "bullets": [
        {
          "label": "On Board Fast Wi-Fi",
          "text": "Available in selected vehicles; connection quality depends on network coverage."
        },
        {
          "label": "Power Points",
          "text": "A variety of USB and 230v power points located inside the passenger area."
        },
        {
          "label": "Free Compliments",
          "text": "Chilled bottled water for all of the passengers."
        }
      ]
    },
    {
      "heading": "Capacity & Luggage Information",
      "paragraphs": [],
      "bullets": [
        {
          "label": "Passenger Capacity",
          "text": "Can easily hold 6-7 passengers with enough room for everyone."
        },
        {
          "label": "Luggage Capacity",
          "text": "Please provide the number and size of your bags when enquiring so we can confirm a suitable vehicle."
        },
        {
          "label": "Professional Chauffeur Services",
          "text": "Transported by professional chauffeurs who have DBS clearance and are experienced in transferring groups."
        }
      ]
    }
  ],
  "bottom": {
    "heading": "Enquire About a Business Van",
    "text": "Send us your journey details, passenger numbers and luggage requirements so we can confirm a suitable vehicle.",
    "buttons": [
      "Request a Quote"
    ]
  }
} as const;

// Gold taglines (+ subtitles where the doc gives a section no intro line).
// UI labels, NOT the writer's copy.
export const vanLabels = {
  heroTagline: "Executive Group Travel",
  sections: [
    { tagline: "Modular Luxury" },
    { tagline: "On the Move", subtitle: "Stay connected, powered and refreshed throughout your journey." },
    { tagline: "Vehicle Specification", subtitle: "Space for your group, their luggage and a professional chauffeur." },
  ],
  bottomTagline: "Business Van Enquiries",
} as const;
