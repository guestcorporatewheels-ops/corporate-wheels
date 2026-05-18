export interface TechSpec {
  label: string;
  value: string;
}

export interface CarModel {
  name: string;
  image: string;
  pax: string;
  luggage: string;
  engineSpecs: TechSpec[];
  features: string[];
}

export interface WhyChooseItem {
  title: string;
  desc: string;
  iconName: string;
}

export interface FleetAmenity {
  title: string;
  desc: string;
  iconName: string;
}

export interface FleetCategoryData {
  title: string;
  subtitle: string;
  heroBadge: string;
  heroTitle: string;
  heroItalic: string;
  heroSub: string;
  heroHighlights: string[];
  overviewCard: {
    carName: string;
    image: string;
    description: string;
    pax: string;
    luggage: string;
    wifi: string;
    techSpecs: TechSpec[];
  };
  vehicles: CarModel[];
  amenities: FleetAmenity[];
  whyChoose: WhyChooseItem[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaBadges: string[];
}

export const fleetCategoriesData: Record<string, FleetCategoryData> = {
  "executive-cars": {
    title: "Executive Cars",
    subtitle: "Elegant efficiency for the modern business traveler",
    heroBadge: "Elite Corporate Mobility",
    heroTitle: "Redefining Corporate ",
    heroItalic: "Travel Efficiency.",
    heroSub: "Designed to meet the rigorous demands of executive roadshows, punctual airport transfers, and private client travel.",
    heroHighlights: ["Active Flight Tracking", "Guaranteed Punctuality", "Mobile Workspace Ready"],
    overviewCard: {
      carName: "Mercedes-Benz E-Class",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=80",
      description: "The gold standard of corporate luxury, featuring a serene insulated cabin, smart power docks, and high-speed Wi-Fi.",
      pax: "3 Passengers",
      luggage: "3 Bags",
      wifi: "Gigabit WiFi",
      techSpecs: [
        { label: "Horsepower", value: "255 HP" },
        { label: "0-60 MPH", value: "5.6s" },
        { label: "Drive Type", value: "4MATIC AWD" },
        { label: "Cabin Noise", value: "39 dB (Ultra Quiet)" }
      ]
    },
    vehicles: [
      {
        name: "Mercedes-Benz E-Class",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 3 Pax",
        luggage: "3 Bags",
        engineSpecs: [
          { label: "Powertrain", value: "2.0L Turbo" },
          { label: "Transmission", value: "9-Speed Auto" },
          { label: "Ride", value: "Agility Control" }
        ],
        features: [
          "Professional English-Speaking Chauffeur",
          "Complimentary Bottled Water & Refreshments",
          "High-Speed Wi-Fi & Device Charging Ports",
          "Dual-Zone Automatic Climate Control",
          "Real-time Flight Tracking & Airport Meet & Greet",
          "Comfortable Premium Nappa Leather Seating"
        ]
      },
      {
        name: "BMW 5 Series",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 3 Pax",
        luggage: "3 Bags",
        engineSpecs: [
          { label: "Powertrain", value: "3.0L TwinPower" },
          { label: "Transmission", value: "Steptronic Sport" },
          { label: "Ride", value: "Dynamic Damper" }
        ],
        features: [
          "Elite Professional Corporate Chauffeur",
          "Quiet, Noise-Insulated Premium Cabin",
          "Complimentary Stable Wi-Fi Connection",
          "Leather Executive Seating & Ergonomic Comfort",
          "Integrated Rear USB-C Docks",
          "GPS Route Optimization for Guaranteed Punctuality"
        ]
      }
    ],
    amenities: [
      {
        title: "Gigabit In-Car Wi-Fi",
        desc: "Stay productive en route with secure, high-speed internet connections for video conferencing and secure email access.",
        iconName: "Wifi"
      },
      {
        title: "Integrated USB Charging",
        desc: "Keep laptops, tablets, and mobile devices fully topped up with high-voltage en-route charging panels.",
        iconName: "Zap"
      },
      {
        title: "Acoustic Noise Shield",
        desc: "Double-layered noise-insulated safety glass seals off highway decibels for a peaceful and quiet journey.",
        iconName: "VolumeX"
      },
      {
        title: "Climate Control Sanctuary",
        desc: "Advanced multi-zone air filtration systems extract urban dust particles, creating a fresh environment.",
        iconName: "Wind"
      },
      {
        title: "Executive Leather Seating",
        desc: "Premium ergonomic leather seats featuring lumbar support mechanisms for maximum comfort.",
        iconName: "UserCheck"
      },
      {
        title: "Direct Corporate Ledger",
        desc: "Consolidated monthly billing reports and corporate expense integrations make bookings simple.",
        iconName: "CreditCard"
      }
    ],
    whyChoose: [
      {
        title: "Mobile Business Hub",
        desc: "Equipped with high-speed Wi-Fi, private laptop trays, and multi-protocol power adapters to keep your workflow uninterrupted.",
        iconName: "Laptop"
      },
      {
        title: "Punctual Flight-Sync",
        desc: "Automated flight-tracking software alerts your driver in real-time about early arrivals or delays, securing timely airport greetings.",
        iconName: "Clock"
      },
      {
        title: "Discreet Protocol",
        desc: "Chauffeurs are vetted and trained in high-profile corporate security and absolute NDA-grade privacy standard.",
        iconName: "UserCheck"
      },
      {
        title: "Microclimate Control",
        desc: "Individually adjustable multi-zone thermocontrol system with premium air perfume infusion.",
        iconName: "Wind"
      },
      {
        title: "Silent Soundproofing",
        desc: "Double-layered acoustic glass seals off urban traffic noise, allowing for crisp, private business phone calls.",
        iconName: "VolumeX"
      },
      {
        title: "Direct Corporate Billing",
        desc: "Enjoy integrated expense billing, monthly corporate account reports, and single-click company checkout.",
        iconName: "CreditCard"
      }
    ],
    ctaTitle: "Experience Seamless Corporate Travel",
    ctaSubtitle: "Align your transit logistics with your business standards. Book your premium executive car in seconds.",
    ctaBadges: [
      "CONFIRMED IN: Under 2 hours",
      "SUPPORT ACTIVE: 24/7 Corporate Line",
      "CHAUFFEURS: Certified Professionals"
    ]
  },
  "luxury-class": {
    title: "Luxury (VIP Class)",
    subtitle: "Unrivaled first-class comfort for the discerning traveler",
    heroBadge: "Elite VIP First-Class",
    heroTitle: "Indulge in Legendary ",
    heroItalic: "First-Class Comfort.",
    heroSub: "Experience the ultimate benchmark of state-of-the-art prestige, bespoke detailing, and absolute VIP presence on the road.",
    heroHighlights: ["Bespoke Concierge Desk", "Therapy Massage Seats", "Acoustic Noise Shield"],
    overviewCard: {
      carName: "Mercedes-Benz S-Class",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&auto=format&fit=crop&q=80",
      description: "The absolute pinnacle of luxury transport, boasting reclining executive lounges, hot-stone active massage, and a starlight panoramic dome.",
      pax: "3 Passengers",
      luggage: "3 Bags",
      wifi: "Ultra-Fast 5G",
      techSpecs: [
        { label: "Horsepower", value: "429 HP" },
        { label: "0-60 MPH", value: "4.8s" },
        { label: "Drive Type", value: "4MATIC AWD" },
        { label: "Cabin Noise", value: "35 dB (Silent Room)" }
      ]
    },
    vehicles: [
      {
        name: "Mercedes-Benz S-Class",
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 3 Pax",
        luggage: "3 Bags",
        engineSpecs: [
          { label: "Powertrain", value: "3.0L Turbo Mild-Hybrid" },
          { label: "Transmission", value: "9G-TRONIC" },
          { label: "Ride", value: "Magic Body Control" }
        ],
        features: [
          "First-Class Certified VIP Chauffeur",
          "Premium Mineral Water & Gourmet Chocolates",
          "Ultra High-Speed Wi-Fi & Dual Rear Screens",
          "Multicontour Massage Seats & Aromatherapy",
          "Bespoke VIP Airport Meet & Greet Protocol",
          "Panoramic Sunroof with Starlight Ambient Headliner"
        ]
      },
      {
        name: "BMW 7 Series",
        image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 3 Pax",
        luggage: "3 Bags",
        engineSpecs: [
          { label: "Powertrain", value: "4.4L TwinTurbo V8" },
          { label: "Transmission", value: "8-Speed Auto" },
          { label: "Ride", value: "Active Comfort Drive" }
        ],
        features: [
          "Elite Multilingual VIP Chauffeur",
          "Panoramic Sky Lounge with Ambient Custom Glow",
          "Theatre Display 31-inch Rear Entertainment",
          "Active Heated/Cooled Reclining Lounges",
          "Bespoke Executive Rear Seat Work Console",
          "Ultimate Self-Leveling Active Air Suspension"
        ]
      }
    ],
    amenities: [
      {
        title: "Panoramic Sky Dome",
        desc: "An expansive panoramic glass ceiling floods the cabin with natural light or lights up with customized starlight arrays.",
        iconName: "Eye"
      },
      {
        title: "Therapy Massage Lounges",
        desc: "Relax with dynamic multi-contour passenger seating offering active lumbar support, cooling, and hot-stone massage presets.",
        iconName: "Sparkles"
      },
      {
        title: "Active Noise Control",
        desc: "Advanced active acoustic suppression panels block out highway decibels, creating a serene, peaceful oasis en route.",
        iconName: "VolumeX"
      },
      {
        title: "Chilled Champagne & Waters",
        desc: "Complimentary premium spring water served in pristine organic glass containers, keeping you refreshed.",
        iconName: "Coffee"
      },
      {
        title: "Electronic Privacy Wrap",
        desc: "Control your privacy with electrical side-window sunblinds and highly-tinted premium security glass panels.",
        iconName: "EyeOff"
      },
      {
        title: "Magic Body Air Suspension",
        desc: "Self-leveling smart air ride chassis dynamically reads road imperfections to completely float over potholes.",
        iconName: "Shield"
      }
    ],
    whyChoose: [
      {
        title: "Active Hot-Stone Massage",
        desc: "Relax with built-in multi-contour air chambers providing heating, active ventilation, and therapeutic massage presets.",
        iconName: "Sparkles"
      },
      {
        title: "Electronic Privacy Shields",
        desc: "Equipped with electric wrap-around window sunblinds, deep-tint privacy glass, and acoustic noise-canceling cabin architecture.",
        iconName: "EyeOff"
      },
      {
        title: "Commanding Presence",
        desc: "Establish unparalleled status arriving at VIP galas, premium events, state visits, and executive board headquarters.",
        iconName: "Award"
      },
      {
        title: "Bespoke Refreshments",
        desc: "Curated with chilled carbonated premium spring waters, gourmet dark mints, and organic sanitizing towels.",
        iconName: "Coffee"
      },
      {
        title: "Active Magic Ride",
        desc: "Chassis scanners read road textures in real-time, instantly adjusting air dampers to completely isolate you from vibrations.",
        iconName: "Shield"
      },
      {
        title: "Exclusively Vetted Drivers",
        desc: "Only our top 1% rated chauffeurs—specifically certified in defense driving and luxury protocol—are assigned here.",
        iconName: "Star"
      }
    ],
    ctaTitle: "Embark on First-Class Ground Travel",
    ctaSubtitle: "Experience uncompromised luxury, prestige, and custom concierge support. Reserve your VIP transport today.",
    ctaBadges: [
      "CONFIRMED IN: Under 1 hour",
      "SUPPORT ACTIVE: 24/7 Elite Desk",
      "STANDARDS: Five-Star Luxury Protocol"
    ]
  },
  "premium-suvs": {
    title: "Premium SUVs",
    subtitle: "Commanding presence, absolute capability, and boundless space",
    heroBadge: "Luxury SUV Class",
    heroTitle: "Bold Majesty Meets ",
    heroItalic: "Boundless Comfort.",
    heroSub: "Combining elevated seating positions, supreme all-weather 4WD security, and extremely generous luggage capacities.",
    heroHighlights: ["Generous Cargo Bay", "Intelligent 4WD Traction", "Air Cushion Suspension"],
    overviewCard: {
      carName: "Range Rover Autobiography",
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&auto=format&fit=crop&q=80",
      description: "A supreme sanctuary on wheels. Blends majestic executive cabin layout with ultimate protection and all-weather capability.",
      pax: "4 Passengers",
      luggage: "5 Bags",
      wifi: "Multi-Client 5G",
      techSpecs: [
        { label: "Horsepower", value: "523 HP" },
        { label: "0-60 MPH", value: "4.4s" },
        { label: "Drive Type", value: "Adaptive 4WD" },
        { label: "Cargo Volume", value: "40.7 cu ft" }
      ]
    },
    vehicles: [
      {
        name: "Range Rover Autobiography",
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 4 Pax",
        luggage: "5 Bags",
        engineSpecs: [
          { label: "Powertrain", value: "4.4L Twin-Turbo V8" },
          { label: "Transmission", value: "8-Speed Auto" },
          { label: "Ride", value: "Electronic Air Ride" }
        ],
        features: [
          "Experienced All-Weather Professional Chauffeur",
          "Complimentary Gourmet Refreshments & Snacks",
          "Premium Meridian Surround Sound Entertainment",
          "Panoramic Glass Canopy & Electronic Air Ride",
          "Extra Legroom Layout with Heated Rear Armrests",
          "Automatic Deployable Side Steps"
        ]
      },
      {
        name: "Cadillac Escalade ESV",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 6 Pax",
        luggage: "7 Bags",
        engineSpecs: [
          { label: "Powertrain", value: "6.2L EcoTec3 V8" },
          { label: "Transmission", value: "10-Speed Auto" },
          { label: "Ride", value: "Magnetic Ride Control" }
        ],
        features: [
          "VIP Security-Trained Professional Chauffeur",
          "Massive Rear Trunk Cargo Capacity",
          "Stable High-Speed Wi-Fi & Multi-Screen Panels",
          "Supreme Executive Heated Captain Chairs",
          "Absolute Road Command & Multi-Airbag Protection",
          "Hands-Free Power Liftgate & Easy Access"
        ]
      }
    ],
    amenities: [
      {
        title: "High Elevated Viewpoint",
        desc: "Elevated seating layout keeps you situated above regular traffic, securing spectacular scenic panoramic touring.",
        iconName: "Eye"
      },
      {
        title: "Generous Suitcase Capacity",
        desc: "Vast luggage storage holds up to 7 large travel suitcases, golf bags, or heavy sports accessories effortlessly.",
        iconName: "Package"
      },
      {
        title: "All-Weather Adaptive 4WD",
        desc: "Advanced electronic torque vectoring provides perfect traction en-route during heavy downpours or winter snowstorms.",
        iconName: "Wind"
      },
      {
        title: "Heavy-Duty Safety Cell",
        desc: "Heavy-duty steel chassis reinforcements combined with side impact air shielding offer unmatched highway security.",
        iconName: "Shield"
      },
      {
        title: "Pneumatic Easy Boarding",
        desc: "Smart air suspension system lowers the body by 2 inches and deploys power side steps for simple passenger boarding.",
        iconName: "LogIn"
      },
      {
        title: "Family Travel Sanctuary",
        desc: "Double-insulated passenger room equipped with independent screens and high-power charging grids for children.",
        iconName: "Heart"
      }
    ],
    whyChoose: [
      {
        title: "High Elevated Viewpoint",
        desc: "Sit higher above heavy highway traffic, providing excellent command, relaxed posture, and panoramic scenic viewing.",
        iconName: "Eye"
      },
      {
        title: "Tremendous Cargo Capacity",
        desc: "Abundant luggage space perfectly configured to fit multiple golf bags, heavy snow ski gear, and large oversized suitcases.",
        iconName: "Package"
      },
      {
        title: "All-Weather Adaptive 4WD",
        desc: "Advanced electronic torque vectoring provides perfect safety, stability, and control during extreme rain or heavy snow storms.",
        iconName: "CloudSnow"
      },
      {
        title: "Robust Impact Armor",
        desc: "A heavy-duty steel safety cell combined with active side-impact cushioning for superior on-road security.",
        iconName: "Shield"
      },
      {
        title: "Pneumatic Easy Access",
        desc: "The chassis automatically lowers by 2 inches and deploys power side steps to let passengers board effortlessly.",
        iconName: "LogIn"
      },
      {
        title: "Family Travel Sanctuary",
        desc: "An exceptionally quiet cabin configuration equipped with independent rear screens to keep children engaged and happy.",
        iconName: "Heart"
      }
    ],
    ctaTitle: "Travel Without Limitations",
    ctaSubtitle: "Perfect for family weekend escapes, winter ski trips, or commanding road transfers. Secure your VIP SUV now.",
    ctaBadges: [
      "CONFIRMED IN: Under 2 hours",
      "SUPPORT ACTIVE: 24/7 SUV Dispatch",
      "STANDARDS: All-Terrain Qualified Drivers"
    ]
  },
  "business-vans": {
    title: "Business Vans",
    subtitle: "Spacious comfort and professional logistics for your entire team",
    heroBadge: "Executive Group Logistics",
    heroTitle: "Facilitate Teamwork ",
    heroItalic: "On the Move.",
    heroSub: "Configure your transit as a mobile conference room, allowing colleagues to coordinate roadshows and travel collectively.",
    heroHighlights: ["Conference Seat Layout", "Extensive Luggage Bay", "Folding Work Desks"],
    overviewCard: {
      carName: "Mercedes-Benz V-Class",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=80",
      description: "The absolute benchmark for group transport, featuring face-to-face seating, electrical doors, and business tables.",
      pax: "7 Passengers",
      luggage: "7 Bags",
      wifi: "Gigabit WLAN",
      techSpecs: [
        { label: "Horsepower", value: "239 HP" },
        { label: "0-60 MPH", value: "7.8s" },
        { label: "Seat Setup", value: "Face-to-Face Config" },
        { label: "Door Type", value: "Dual Power Sliding" }
      ]
    },
    vehicles: [
      {
        name: "Mercedes-Benz V-Class",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 7 Pax",
        luggage: "6 Bags",
        engineSpecs: [
          { label: "Powertrain", value: "2.0L Twin-Turbo Diesel" },
          { label: "Transmission", value: "9G-TRONIC" },
          { label: "Ride", value: "Comfort Suspension" }
        ],
        features: [
          "Professional Group Logistics Chauffeur",
          "Face-to-Face Conference Seating Layout",
          "Complimentary In-Car Wi-Fi & USB Outlets",
          "Extremely Generous Luggage Storage Area",
          "Dual Electric Sliding Doors for Safe Boarding",
          "Multi-Zone Air Climate Conditioning"
        ]
      },
      {
        name: "Volkswagen Caravelle",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 7 Pax",
        luggage: "7 Bags",
        engineSpecs: [
          { label: "Powertrain", value: "2.0L BiTDI" },
          { label: "Transmission", value: "7-Speed DSG" },
          { label: "Ride", value: "Adaptive Chassis" }
        ],
        features: [
          "Coordinated Group Transfers Specialist Chauffeur",
          "Fully Adjustable Seat Rail Systems",
          "Complimentary Water Bottles & Mints",
          "Dual Cabin Air Conditioning Zones",
          "Electronic Privacy Tinted Windows",
          "Smooth Automatic Suspension Damping"
        ]
      }
    ],
    amenities: [
      {
        title: "Conference Seat Layout",
        desc: "Intelligent rail seat adjusters permit modular face-to-face configurations for active group roadshows.",
        iconName: "Users"
      },
      {
        title: "Massive Suitcase Cargo",
        desc: "Accommodates up to 7 corporate baggage suitcases en route, keeping luggage completely separated from passenger room.",
        iconName: "Briefcase"
      },
      {
        title: "Retractable Desk Panels",
        desc: "Folding leather boardroom desks allow team delegates to examine corporate reports and secure contracts en route.",
        iconName: "Laptop"
      },
      {
        title: "High-Power device grids",
        desc: "Multiple universal AC power sockets and high-watt USB-C grids keep corporate tablets fully operational.",
        iconName: "Zap"
      },
      {
        title: "Electric Sliding Doors",
        desc: "Dual automated power-sliding doors allow safe, effortless cabin exit and entry, managed directly by the chauffeur.",
        iconName: "LogIn"
      },
      {
        title: "Eco-Efficient Logistics",
        desc: "Transport up to seven delegates en route in high-class comfort, offering premium corporate synergy.",
        iconName: "TrendingUp"
      }
    ],
    whyChoose: [
      {
        title: "Conference Seating Setup",
        desc: "Adjustable rear seating rails allow face-to-face configurations for collaborative discussions or client presentations.",
        iconName: "Users"
      },
      {
        title: "Team Luggage Capacity",
        desc: "Accommodates up to 7 large travel suitcases and accessory laptop backpacks without encroaching on passenger comfort.",
        iconName: "Briefcase"
      },
      {
        title: "Mobile Boardroom",
        desc: "Includes folding central worktables, individual USB-C high-power outlets, and persistent in-cabin corporate Wi-Fi.",
        iconName: "Laptop"
      },
      {
        title: "Corporate Event Logistics",
        desc: "The benchmark option for executive roadshows, golf outings, delegation transfers, and VIP airport collection.",
        iconName: "Calendar"
      },
      {
        title: "Safe Auto-Sliding Doors",
        desc: "Dual electric doors operated by the driver, ensuring passenger entry and luggage loading are managed with absolute safety.",
        iconName: "LogIn"
      },
      {
        title: "Cost-Effective Premium",
        desc: "Transport up to seven executives together in high-class comfort, offering premium corporate efficiency without compromises.",
        iconName: "TrendingUp"
      }
    ],
    ctaTitle: "Optimize Your Team's Travels",
    ctaSubtitle: "Unify your corporate travel logistics, ensure absolute team synergy, and travel in spacious luxury. Reserve your V-Class.",
    ctaBadges: [
      "CONFIRMED IN: Under 2 hours",
      "SUPPORT ACTIVE: 24/7 Corporate Support",
      "STANDARDS: Certified Fleet Drivers"
    ]
  },
  "special-vehicles": {
    title: "Special Vehicles (On Request)",
    subtitle: "Customized high-capacity and VIP luxury transport tailored to request",
    heroBadge: "Bespoke VIP Logistics",
    heroTitle: "Bespoke Logistical ",
    heroItalic: "Solutions.",
    heroSub: "Designed to meet extreme tactical security demands, diplomatic protocols, and ultra-high-capacity executive transits.",
    heroHighlights: ["Security Escort Available", "Custom Fleet Layouts", "Diplomatic Compliance"],
    overviewCard: {
      carName: "Mercedes Sprinter VIP",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80",
      description: "Customized high-profile VIP transport fitted with luxury leather armchairs, private bar amenities, satellite flat screens, and work desks.",
      pax: "16 Passengers",
      luggage: "12 Bags",
      wifi: "Encrypted Satellite",
      techSpecs: [
        { label: "Vehicle Class", value: "Heavy Luxury Limo" },
        { label: "Headroom", value: "6.3 ft Standup" },
        { label: "Interior Setup", value: "VIP Lounge & Bar" },
        { label: "Security Grade", value: "Escort Capable" }
      ]
    },
    vehicles: [
      {
        name: "Mercedes Sprinter VIP Edition",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 16 Pax",
        luggage: "15 Bags",
        engineSpecs: [
          { label: "Powertrain", value: "3.0L V6 Turbo Diesel" },
          { label: "Transmission", value: "7G-TRONIC" },
          { label: "Interior", value: "Executive Custom" }
        ],
        features: [
          "Dual-Chauffeur / Security Escort Available",
          "Custom Onboard Refreshment Bar & Smart TV",
          "Full Height Standing Cabin Space",
          "Bespoke Central Conference Table",
          "Extreme Acoustic Insulated Privacy Partition",
          "Dynamic Air Ventilation & Ambient Glow"
        ]
      },
      {
        name: "Range Rover Sentinel (Armored)",
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 4 Pax",
        luggage: "4 Bags",
        engineSpecs: [
          { label: "Protection", value: "VPAM VR8 Level" },
          { label: "Blast Cover", value: "HE Grenade Safe" },
          { label: "Tires", value: "Heavy Run-Flats" }
        ],
        features: [
          "Tactical Security-Certified Chauffeur",
          "Ballistic & Under-Floor Blast Protection",
          "Emergency Oxygen & Escape Cabin Systems",
          "Encrypted Satellite Radio Communications",
          "State & Diplomatic Protocol Compliance",
          "Heavy-Duty Run-Flat Tire Reinforcements"
        ]
      }
    ],
    amenities: [
      {
        title: "Tactical Security Vetting",
        desc: "Drivers are security-cleared under strict VIP protection protocols, managing convoys with military precision.",
        iconName: "UserCheck"
      },
      {
        title: "VR8 Armored Shielding",
        desc: "Armored body shells with heavy run-flat wheels and independent oxygen filtration for complete safety.",
        iconName: "Shield"
      },
      {
        title: "Satellite Comms Network",
        desc: "Fully encrypted satellite tracking arrays en route keep VIP logistics coordinates secure en route to destinations.",
        iconName: "Settings"
      },
      {
        title: "Dimmable Catering Bars",
        desc: "Custom interior wet bars and espresso desks are configured en route to keep corporate guests fully accommodated.",
        iconName: "Gift"
      },
      {
        title: "VIP Privacy Partitions",
        desc: "Electrical sound-insulated partition glass separates passenger cabins from front pilot coordinates.",
        iconName: "EyeOff"
      },
      {
        title: "Motorcade Convoy Sync",
        desc: "Synchronized telemetry grids allow seamless road coordination between lead and trailing support vehicles.",
        iconName: "Users"
      }
    ],
    whyChoose: [
      {
        title: "Bespoke Configurations",
        desc: "Cabins are customized with dedicated work partitions, individual storage lockers, or integrated catering boards.",
        iconName: "Settings"
      },
      {
        title: "Tactical Armored Fleet",
        desc: "Certified VR8 ballistic armored plating with run-flat capabilities and backup oxygen supply for dignitaries.",
        iconName: "Shield"
      },
      {
        title: "Large Delegation Capacity",
        desc: "Move up to 16 VIPs in a single high-end vehicle, eliminating the complexities of scattered motorcades.",
        iconName: "UserPlus"
      },
      {
        title: "Elite Media Systems",
        desc: "Features satellite television, HD screen sharing inputs, premium audio, and custom ambient lighting.",
        iconName: "Tv"
      },
      {
        title: "Dedicated Event Support",
        desc: "A dedicated logistics supervisor coordinates routing, timing, security access, and flight logs in real-time.",
        iconName: "Settings"
      },
      {
        title: "Customized Amenity Setup",
        desc: "Request specific beverage selections, company branding wraps, custom snacks, or security sweeps.",
        iconName: "Gift"
      }
    ],
    ctaTitle: "Submit Custom Logistics Proposal",
    ctaSubtitle: "Our dedicated events team is standing by to coordinate security parameters and high-capacity VIP motorcades.",
    ctaBadges: [
      "REPLIES IN: Under 1 hour",
      "CONSULTATION: Complimentary Setup",
      "STANDARDS: Absolute Discretion"
    ]
  },
  "electric-class": {
    title: "Electric Class",
    subtitle: "Silent, emission-free cruising at the vanguard of green innovation",
    heroBadge: "Sustainable Luxury Mobility",
    heroTitle: "Eco-Conscious Travel, ",
    heroItalic: "Zero Compromises.",
    heroSub: "Experience the next frontier of silent luxury travel. State-of-the-art electric powertrains combined with absolute cabin quietness.",
    heroHighlights: ["100% Zero Emissions", "Acoustic Silence", "Medical-Grade HEPA Cabin"],
    overviewCard: {
      carName: "Mercedes-Benz EQS",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80",
      description: "A visionary blend of digital intelligence, aerodynamic elegance, and ecological responsibility.",
      pax: "3 Passengers",
      luggage: "3 Bags",
      wifi: "Gigabit WLAN",
      techSpecs: [
        { label: "Horsepower", value: "329 HP" },
        { label: "0-60 MPH", value: "5.5s" },
        { label: "Battery Range", value: "350+ Miles" },
        { label: "Cabin Noise", value: "36 dB (Whisper Silent)" }
      ]
    },
    vehicles: [
      {
        name: "Mercedes-Benz EQS",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 3 Pax",
        luggage: "3 Bags",
        engineSpecs: [
          { label: "Battery", value: "107.8 kWh" },
          { label: "Powertrain", value: "Single Electric Motor" },
          { label: "Suspension", value: "AIRMATIC Air" }
        ],
        features: [
          "Eco-Friendly Certified Professional Chauffeur",
          "100% Zero Tailpipe Carbon Emissions",
          "Futuristic MBUX Hyperscreen Console",
          "Whisper-Quiet Electric Cabin Insulation",
          "Integrated Medical-Grade HEPA Cabin Filters",
          "Supreme Aerodynamic Silent Suspension"
        ]
      },
      {
        name: "Tesla Model X",
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 5 Pax",
        luggage: "4 Bags",
        engineSpecs: [
          { label: "Battery", value: "100 kWh" },
          { label: "Powertrain", value: "Dual Motor AWD" },
          { label: "Doors", value: "Falcon Wing" }
        ],
        features: [
          "Tech-Forward Electric Chauffeur Expert",
          "Iconic Electronic Falcon Wing Passenger Doors",
          "Full Autopilot Active Collision Avoidance",
          "Panoramic Overhead Glass Solar Canopy",
          "High-Efficiency Dynamic Battery Charge",
          "Spacious Rear Trunk & Front Storage Frunk"
        ]
      }
    ],
    amenities: [
      {
        title: "Zero Tailpipe Emissions",
        desc: "Align your transit logistics perfectly with corporate carbon-offset goals and environmental standards.",
        iconName: "Leaf"
      },
      {
        title: "Acoustic Silence",
        desc: "With no combustion engine vibration, enjoy a whisper-silent cabin that is perfect for reading and focus.",
        iconName: "VolumeX"
      },
      {
        title: "Medical HEPA Filtration",
        desc: "Integrated carbon-activated cabin filters remove 99.97% of exhaust gases, pollen, and roadway particles.",
        iconName: "Wind"
      },
      {
        title: "Smartphone Control Grids",
        desc: "Pre-heat or cool settings and track battery maps through direct integration with vehicle APIs.",
        iconName: "Smartphone"
      },
      {
        title: "Emission Zone Exemption",
        desc: "Zero charges and complete unrestricted entry inside central London low-emission and congestion zones.",
        iconName: "CheckCircle"
      },
      {
        title: "Smooth Regenerative Ride",
        desc: "Electric motor deceleration yields a incredibly smooth, lag-free passenger transit en route.",
        iconName: "Zap"
      }
    ],
    whyChoose: [
      {
        title: "Zero Tailpipe Emissions",
        desc: "Align your transit logistics perfectly with corporate carbon-offset goals and environmental standards.",
        iconName: "Leaf"
      },
      {
        title: "Acoustic Quietness",
        desc: "With no combustion engine vibration, you can enjoy a crisp, silent environment perfect for reading and focus.",
        iconName: "VolumeX"
      },
      {
        title: "Medical HEPA Filtration",
        desc: "Integrated carbon activated cabin air filters remove 99.97% of exhaust gases, pollen, and viruses.",
        iconName: "Wind"
      },
      {
        title: "Futuristic Visual Presence",
        desc: "Arrive at green tech symposiums and sustainability board meetings making an ecological and tech-forward statement.",
        iconName: "Lightbulb"
      },
      {
        title: "Next-Gen Smartphone Sync",
        desc: "Pre-heat or cool settings, real-time battery maps, and premium routing are integrated directly into the infotainment system.",
        iconName: "Smartphone"
      },
      {
        title: "Emission Zone Exemptions",
        desc: "Zero fees and free access into inner-city low emission zones, guaranteeing uninterrupted downtown journeys.",
        iconName: "CheckCircle"
      }
    ],
    ctaTitle: "Advance Into Eco-Luxury Travel",
    ctaSubtitle: "Support carbon neutrality while enjoying first-class passenger comfort. Secure your modern electric ride.",
    ctaBadges: [
      "CONFIRMED IN: Under 2 hours",
      "SUPPORT ACTIVE: 24/7 Green Desk",
      "STANDARDS: Zero Emission Certified Drivers"
    ]
  },
  "vintage-cars": {
    title: "Vintage Cars",
    subtitle: "Classic romance and timeless sophistication for weddings and luxury events",
    heroBadge: "timeless Classic Elegance",
    heroTitle: "Embark on a Journey of ",
    heroItalic: "Timeless Romance.",
    heroSub: "Impeccably restored, gorgeous collectors' vehicles designed to add unique grandeur, style, and romance to your special day.",
    heroHighlights: ["Formal Attired Driver", "Chilled Champagne", "Red Carpet Protocol"],
    overviewCard: {
      carName: "Rolls-Royce Silver Cloud",
      image: "https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?w=800&auto=format&fit=crop&q=80",
      description: "A rolling masterpiece of aesthetic charm, hand-polished wood trim, and deep chrome detailing.",
      pax: "3 Passengers",
      luggage: "2 Bags",
      wifi: "Chilled Drinks",
      techSpecs: [
        { label: "Year Built", value: "1958 Classic" },
        { label: "Engine Type", value: "Restored V8" },
        { label: "Upholstery", value: "Hand-Sewn Leather" },
        { label: "Accent Trims", value: "Polished Walnut" }
      ]
    },
    vehicles: [
      {
        name: "Rolls-Royce Silver Cloud",
        image: "https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 3 Pax",
        luggage: "2 Bags",
        engineSpecs: [
          { label: "Model", value: "Silver Cloud I" },
          { label: "Brakes", value: "Mechanical Servo" },
          { label: "AC", value: "Upgraded Modern System" }
        ],
        features: [
          "Uniformed Ceremonial Wedding Chauffeur",
          "Complimentary Chilled Vintage Champagne",
          "Hand-Polished Chrome & Pristine White Paint",
          "Bespoke Wedding Red Carpet Protocol",
          "Matching Satin Car Ribbons & Silk Flowers",
          "Whisper-Quiet Restored Classic V8 Powertrain"
        ]
      },
      {
        name: "Classic Bentley S2",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80",
        pax: "Up to 3 Pax",
        luggage: "2 Bags",
        engineSpecs: [
          { label: "Model", value: "Bentley S2 Classic" },
          { label: "Ride", value: "Smooth Leaf Spring" },
          { label: "Features", value: "Restored Styling" }
        ],
        features: [
          "Wedding Protocol Certified Chauffeur",
          "Genuine Walnut Wood Trims & Soft Leather Seats",
          "Meticulous Vintage Styling with Upgraded AC",
          "Perfect High-Profile Photographic Backdrop",
          "Premium Concealed Retro Surround Sound",
          "Pristine Traditional Styling Accents"
        ]
      }
    ],
    amenities: [
      {
        title: "Restored Walnut Craft",
        desc: "Impeccably hand-restored original walnut fold-down desks and beautiful, soft traditional seating bench layouts.",
        iconName: "Award"
      },
      {
        title: "Uniformed Peak Driver",
        desc: "Chauffeur pilots wear traditional formal peaked caps, white gloves, and double-breasted events suits.",
        iconName: "UserCheck"
      },
      {
        title: "Custom Event Ribbons",
        desc: "We coordinate exterior satin car ribbons and interior floral designs matching your event coordinates.",
        iconName: "Sparkles"
      },
      {
        title: "Chilled Celebrations Panel",
        desc: "Complimentary chilled vintage champagne served in lead crystal champagne flutes during transits.",
        iconName: "Gift"
      },
      {
        title: "Hand-Polished Chrome",
        desc: "Gleaming high-shine exterior body paint and pristine chrome overlays serve as a perfect photoshoot prop.",
        iconName: "Camera"
      },
      {
        title: "Acoustic Leaf Suspension",
        desc: "Float smoothly with restored period-correct leaf springs, backed by modern highway-grade air cooling units.",
        iconName: "Heart"
      }
    ],
    whyChoose: [
      {
        title: "Lifetime Photo Perfection",
        desc: "Creates a highly sophisticated and gorgeous background backdrop for your wedding portrait albums.",
        iconName: "Camera"
      },
      {
        title: "Ceremonial Uniform Driver",
        desc: "Chauffeurs wear a formal peak cap, clean suit, and matching gloves, maintaining perfect ceremonial protocol.",
        iconName: "UserCheck"
      },
      {
        title: "VIP Red Carpet Protocol",
        desc: "A premium crimson carpet is rolled out next to the car to make your entrance look majestic.",
        iconName: "Star"
      },
      {
        title: "Chilled Celebration Drinks",
        desc: "A complimentary bottle of chilled vintage champagne is placed inside the car to toast your celebratory milestones.",
        iconName: "Gift"
      },
      {
        title: "Walnut & Leather Crafts",
        desc: "Meticulously hand-restored walnut fold-down desks and hand-stitched cream leather benches.",
        iconName: "Heart"
      },
      {
        title: "Bespoke Ribbon Accents",
        desc: "The exterior is beautifully decorated with custom-colored satin ribbons configured to match your event theme.",
        iconName: "Sparkles"
      }
    ],
    ctaTitle: "Reserve Timeless Wedding Luxury",
    ctaSubtitle: "Reserve your collector classic Rolls-Royce or Bentley for your wedding or high-end photoshoot today.",
    ctaBadges: [
      "CONFIRMED IN: Within 24 hours",
      "CONSULTATION: Customized Schedules",
      "STANDARDS: Concierge Event Coordination"
    ]
  }
};
