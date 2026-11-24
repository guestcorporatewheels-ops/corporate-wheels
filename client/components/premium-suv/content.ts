// Verbatim copy from "CW Contents/Premium SUV FleetCW.docx" (written by the content writer).
// Do not edit wording here without the writer's approval.
export const premiumSuvContent = {
  "title": "Premium SUV Fleet",
  "intro": "Explore Corporate Wheels’ Premium SUV options for chauffeur-driven business and private travel. Our luxury SUVs have been specifically designed to move around the city streets as well as through country roads with great ease.",
  "sections": [
    {
      "heading": "Commanding Presence & Elevated Luxury",
      "paragraphs": [
        "With our range of top luxury models like the Range Rover Autobiography, Audi Q7, and Volvo XC90, you can expect a very smooth drive along with beautiful scenery from up high."
      ],
      "bullets": [
        {
          "label": "Elevator Ride Comfort",
          "text": "Please tell us about any vehicle-access or seating requirements before booking so we can discuss a suitable option."
        },
        {
          "label": "Interior Features",
          "text": "Selected vehicles offer leather upholstery, multi-zone climate control and a panoramic glass roof. Please confirm your requirements when enquiring."
        },
        {
          "label": "Privacy and Assurance",
          "text": "Available in selected vehicles. Please confirm availability when enquiring."
        }
      ]
    },
    {
      "heading": "Versatile Capacity & Executive Amenities",
      "paragraphs": [
        "Our high-end SUVs are designed in such a way that the best blend is achieved between the amount of space for luggage and luxury for passengers:"
      ],
      "bullets": [
        {
          "label": "On-Board Wi-Fi",
          "text": "Get the benefit of the fastest Internet connection to stay connected all along the route."
        },
        {
          "label": "Device Charging",
          "text": "Please confirm available connections and device compatibility before travelling."
        },
        {
          "label": "Free Drinks",
          "text": "Get chilled mineral water for everyone."
        }
      ]
    },
    {
      "heading": "Passenger & Luggage Capabilities",
      "paragraphs": [],
      "bullets": [
        {
          "label": "Passenger Capability",
          "text": "Seats to accommodate up to 4 passengers."
        },
        {
          "label": "Luggage Capability",
          "text": "Provision to accommodate up to 4 large pieces of luggage in addition to 3 pieces of carry-on luggage in the spacious back seat section."
        },
        {
          "label": "Professional Chauffeurs",
          "text": "Our chauffeurs have experience in business and private passenger transport."
        }
      ]
    }
  ]
} as const;

// Gold taglines (+ subtitle where the doc gives a section no intro line).
// UI labels, NOT the writer's copy.
export const premiumSuvLabels = {
  heroTagline: "Luxury SUVs",
  sections: [
    { tagline: "Elevated Luxury" },
    { tagline: "Executive Amenities" },
    { tagline: "Vehicle Specification", subtitle: "Room for your party, your luggage and a professional chauffeur." },
  ],
} as const;
