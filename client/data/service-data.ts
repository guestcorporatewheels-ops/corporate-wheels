export interface TechSpec {
  label: string;
  value: string;
}

export interface ServiceBenefit {
  title: string;
  desc: string;
  iconName: string;
}

export interface ServiceAmenity {
  title: string;
  desc: string;
  iconName: string;
}

export interface ServiceProtocol {
  step: string;
  title: string;
  badge: string;
  classType: string;
  duration: string;
  desc: string;
  iconName: string;
}

export interface ServiceTestimonial {
  clientName: string;
  designation: string;
  review: string;
  rating: number;
  date: string;
}

export interface PopularRoute {
  from: string;
  to: string;
  duration: string;
  priceFrom: string;
  vehicle: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceCategoryData {
  title: string;
  subtitle: string;
  heroBadge: string;
  heroTitle: string;
  heroItalic: string;
  heroSub: string;
  heroHighlights: string[];
  overviewCard: {
    title: string;
    image: string;
    description: string;
    highlights: string[];
    specs: TechSpec[];
  };
  benefits: ServiceBenefit[];
  amenities: ServiceAmenity[];
  protocol: ServiceProtocol[];
  testimonials: ServiceTestimonial[];
  popularRoutesTitle: string;
  popularRoutes: PopularRoute[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaBadges: string[];
}

export const serviceCategoriesData: Record<string, ServiceCategoryData> = {
  "airport-transfers": {
    title: "Airport Transfers",
    subtitle: "Punctual, stress-free transfers to and from all major London airports",
    heroBadge: "VIP Aviation Transit",
    heroTitle: "Flawless Airport ",
    heroItalic: "Chauffeur Services.",
    heroSub: "We specialize in seamless executive transfers to Heathrow, Gatwick, Stansted, Luton, and London City Airport. Complete with active flight tracking and terminal meet-and-greet.",
    heroHighlights: ["60 Mins Free Waiting Time", "Flight Tracking Sync", "Complimentary Water & WiFi"],
    overviewCard: {
      title: "Terminal Meet & Greet",
      image: "/images/Relaxrest1762454212669.jpeg",
      description: "Our professional chauffeur will greet you inside the arrivals hall holding a customized digital name board, manage your luggage, and escort you to your executive vehicle.",
      highlights: [
        "Complimentary flight delay adjustments",
        "Includes premium terminal parking fees",
        "Pristine vehicle inside and out"
      ],
      specs: [
        { label: "Wait Time", value: "60 Minutes Free" },
        { label: "Flight Sync", value: "Real-time updates" },
        { label: "Chauffeurs", value: "Security-Vetted" },
        { label: "Beverages", value: "Chilled Spring Water" }
      ]
    },
    benefits: [
      {
        title: "Active Flight Tracking",
        desc: "We monitor flight arrival times in real-time. If your flight is early or delayed, your chauffeur's arrival is automatically adjusted.",
        iconName: "Clock"
      },
      {
        title: "Extended Waiting Grace",
        desc: "Enjoy 60 minutes of complimentary waiting time for international arrivals, providing ample time to pass customs and retrieve bags.",
        iconName: "Clock"
      },
      {
        title: "Professional Meet & Greet",
        desc: "A beautifully attired chauffeur greets you in the terminal arrivals concourse, assisting with suitcases for complete convenience.",
        iconName: "UserCheck"
      },
      {
        title: "Clean Air Filtration",
        desc: "Cabin atmosphere is constantly purified with carbon activated HEPA filters, removing 99.97% of ambient dust.",
        iconName: "Wind"
      },
      {
        title: "Acoustic Silence Room",
        desc: "Our vehicles feature double-glazed noise-insulated glass, letting you jump on call or rest immediately after flying.",
        iconName: "VolumeX"
      },
      {
        title: "Seamless Parking Handling",
        desc: "All airport terminal parking, drop-off charges, and local congestion fees are fully calculated into your flat rate.",
        iconName: "CreditCard"
      }
    ],
    amenities: [
      {
        title: "Gigabit In-Car Wi-Fi",
        desc: "High-speed encrypted dual-provider network configurations supporting seamless remote video conferencing en route.",
        iconName: "Wifi"
      },
      {
        title: "Active Flight Sync Tracker",
        desc: "Real-time aviation dashboard integration en-route to automatically adjust pick-up coordinates for delays.",
        iconName: "Clock"
      },
      {
        title: "High-Wattage Power Grid",
        desc: "Universal fast-charging sockets & multi-device USB-C Power Delivery outputs keeping laptops and phones fully charged.",
        iconName: "Zap"
      },
      {
        title: "HEPA Respiratory Shield",
        desc: "Advanced multi-stage cabin air filtration extracting 99.97% of exhaust gases, ozone carbon, and highway dust particles.",
        iconName: "Wind"
      },
      {
        title: "Financial Daily Press",
        desc: "Complimentary access to premium daily business newspapers and leading luxury lifestyle magazines in leather folders.",
        iconName: "Smartphone"
      },
      {
        title: "Terminal Drop-off Waiver",
        desc: "All airport terminal drop-off congestion fees and initial 60 minutes parking charges are fully prepaid en route.",
        iconName: "CreditCard"
      }
    ],
    protocol: [
      {
        step: "01",
        title: "Digital Flight Sync",
        badge: "Aviation Monitored",
        classType: "VIP Transfers",
        duration: "Real-time sync",
        desc: "Your flight's landing time is monitored en route. Chauffeur schedules adjust dynamically to match landing delays.",
        iconName: "Clock"
      },
      {
        step: "02",
        title: "Terminal Arrival Meet",
        badge: "Arrival Hall Greet",
        classType: "Corporate Vetted",
        duration: "Instant welcome",
        desc: "Driver meets you at arrivals holding an iPad name board, handles all luggage, and guides you to the vehicle.",
        iconName: "UserCheck"
      },
      {
        step: "03",
        title: "Elite Cabin Comfort",
        badge: "Pristine Cabin Greet",
        classType: "Acoustic Silence",
        duration: "Relax en route",
        desc: "Enjoy chilled spring water, HEPA-filtered air, and active noise suppression en route to Central London.",
        iconName: "MapPin"
      }
    ],
    testimonials: [
      {
        clientName: "Alexander Sterling",
        designation: "Managing Director, Sterling Group",
        review: "Fabulous meet and greet at Heathrow terminal 5. My driver was waiting with a clear digital iPad name sign, handled our heavy bags seamlessly, and drove in supreme comfort.",
        rating: 5,
        date: "May 2026"
      },
      {
        clientName: "Sophia Dupont",
        designation: "Luxury Travel Advisor",
        review: "Highly recommended for corporate executives arriving in London. Flight tracking was spot on despite a 40-minute runway delay at Gatwick.",
        rating: 5,
        date: "April 2026"
      }
    ],
    popularRoutesTitle: "Popular London Airport Transfers",
    popularRoutes: [
      { from: "London Heathrow (LHR)", to: "Mayfair, Central London", duration: "45 mins", priceFrom: "£95", vehicle: "E-Class" },
      { from: "London Gatwick (LGW)", to: "City of London", duration: "1h 10m", priceFrom: "£130", vehicle: "E-Class" },
      { from: "London Luton (LTN)", to: "Kensington & Chelsea", duration: "1h 05m", priceFrom: "£120", vehicle: "E-Class" },
      { from: "London City Airport (LCY)", to: "Canary Wharf", duration: "15 mins", priceFrom: "£75", vehicle: "E-Class" }
    ],
    faqs: [
      {
        question: "What happens if my flight is early or delayed?",
        answer: "There are zero penalties. We track your flight dynamically in real-time. Your chauffeur will automatically modify their arrival time to align perfectly with your landing."
      },
      {
        question: "How do I locate my driver at the airport?",
        answer: "Your chauffeur will greet you inside the terminal arrival hall (just after the customs exit) holding an electronic board displaying your name. You will also receive their contact number and vehicle details 2 hours before landing."
      },
      {
        question: "Is terminal parking and road congestion fees included?",
        answer: "Yes, our pricing is fully transparent and inclusive. Terminal drop-off charges, up to 60 minutes of terminal parking, and all local road fees are included in the quote."
      }
    ],
    ctaTitle: "Reserve Your Premium Airport Chauffeur",
    ctaSubtitle: "Experience uncompromised comfort after your flight. Book your elite airport transit within minutes.",
    ctaBadges: [
      "WAIT TIME: 60 Mins Free",
      "DISPATCH: 24/7 Aviation Desk",
      "MONITORING: Integrated Flight Tracking"
    ]
  },
  "corporate-travel": {
    title: "Corporate travel",
    subtitle: "Highly reliable executive mobility tailored to corporate teams and roadshows",
    heroBadge: "Executive Corporate Accounts",
    heroTitle: "Flawless Mobility for ",
    heroItalic: "Corporate Teams.",
    heroSub: "Simplify your executive roadshows, boardroom meetings, and corporate logistics with professional, dedicated chauffeurs and monthly account management.",
    heroHighlights: ["Dedicated Account Manager", "Gigabit In-Car Wi-Fi", "Confidentiality Guaranteed"],
    overviewCard: {
      title: "Corporate Account Benefits",
      image: "/images/FlexibleScheduling.jpeg",
      description: "Manage travel expenses with consolidated monthly billing invoices, priority telephone dispatch, and custom vehicle allocations for your company's VIP clients.",
      highlights: [
        "NDA-compliant security certified drivers",
        "Integrated corporate expense platforms",
        "Flexible route stop alterations"
      ],
      specs: [
        { label: "Account Setup", value: "Same-Day Setup" },
        { label: "Support", value: "Dedicated Hotline" },
        { label: "Invoicing", value: "Monthly Consolidated" },
        { label: "Fleet Access", value: "Priority Allocation" }
      ]
    },
    benefits: [
      {
        title: "Mobile Business Hub",
        desc: "Convert your transit time into active production with high-speed Wi-Fi, folding tables, and high-power USB-C docks.",
        iconName: "Laptop"
      },
      {
        title: "NDA Vetted Drivers",
        desc: "All corporate chauffeurs sign absolute non-disclosure agreements, guaranteeing boardroom secrets discussed in the cabin remain confidential.",
        iconName: "UserCheck"
      },
      {
        title: "Priority Fleet Booking",
        desc: "Corporate account holders enjoy guaranteed vehicle availability, even during peak corporate seasons, major sports events, or conventions.",
        iconName: "Star"
      },
      {
        title: "Climate Zone Management",
        desc: "Individually controlled climate systems with advanced allergen filtration, securing a clean, fresh breathing space.",
        iconName: "Wind"
      },
      {
        title: "Punctuality Guarantee",
        desc: "We plan alternate route grids using real-time GPS sensors, ensuring chauffeurs arrive at pick-up spots at least 15 minutes early.",
        iconName: "Clock"
      },
      {
        title: "Single Portal Billing",
        desc: "Conveniently review booking histories, allocate cost centers, and approve corporate invoices from a single dashboard.",
        iconName: "CreditCard"
      }
    ],
    amenities: [
      {
        title: "Mobile Hub Workspace",
        desc: "Convert en-route hours into production with custom writing trays, gigabit Wi-Fi, and folding leather laptop tables.",
        iconName: "Laptop"
      },
      {
        title: "Unified Billing Ledger",
        desc: "Sync all corporate journeys, departments, and cost center logs instantly into a dedicated central bookkeeping API.",
        iconName: "CreditCard"
      },
      {
        title: "Certified NDA Chauffeurs",
        desc: "All fleet pilots are security background vetted and certified under active corporate non-disclosure agreements.",
        iconName: "UserCheck"
      },
      {
        title: "HEPA Respiratory Shield",
        desc: "Tri-stage carbon clean air filters extract city road exhaust, bacteria, and allergens en route to the office.",
        iconName: "Wind"
      },
      {
        title: "Priority Booking Slots",
        desc: "Corporate accounts guarantee immediate priority fleet dispatch and vehicle hold, even during peak London rail strikes.",
        iconName: "Star"
      },
      {
        title: "Dual-Zone Climate Preset",
        desc: "Pre-coordinated multi-zone thermal configurations to match individual boardroom delegates' precise temperature requests.",
        iconName: "CloudSnow"
      }
    ],
    protocol: [
      {
        step: "01",
        title: "Digital Ledger Booking",
        badge: "Central Accounts Approved",
        classType: "Corporate Account",
        duration: "Approved instantly",
        desc: "Coordinate travel slots easily with your PA. Invoices sync automatically to your business ledger.",
        iconName: "Briefcase"
      },
      {
        step: "02",
        title: "NDA-Vouched Dispatch",
        badge: "Strict Confidentiality",
        classType: "Elite Security Vetted",
        duration: "T-2 Hours Assigned",
        desc: "Chauffeurs are background-screened and sworn under strict NDA terms, protecting en-route corporate discussions.",
        iconName: "UserCheck"
      },
      {
        step: "03",
        title: "High-Speed Operations",
        badge: "Gigabit Cabin Hub",
        classType: "Power Hub En-route",
        duration: "Maximize Productivity",
        desc: "Work on video calls with high-speed en-route Wi-Fi, universal charging docks, and dimmable reading lights.",
        iconName: "Laptop"
      }
    ],
    testimonials: [
      {
        clientName: "Marcus Thorne",
        designation: "Chief Financial Officer, Horizon Global",
        review: "Our board members use Corporate Wheels for all London roadshows. Absolute discretion, pristine cars, and reliable monthly invoice logs make this a perfect partnership.",
        rating: 5,
        date: "May 2026"
      },
      {
        clientName: "Helena Vance",
        designation: "Executive Assistant to CEO",
        review: "The corporate billing portal is extremely easy to use. Organizing multiple transfers for high-profile delegates is seamless.",
        rating: 5,
        date: "March 2026"
      }
    ],
    popularRoutesTitle: "Frequent Executive Connections",
    popularRoutes: [
      { from: "Canary Wharf", to: "Mayfair, Central London", duration: "25 mins", priceFrom: "£65", vehicle: "E-Class" },
      { from: "City of London", to: "Farnborough Airport", duration: "1h 15m", priceFrom: "£140", vehicle: "E-Class" },
      { from: "London West End", to: "Birmingham NEC", duration: "2h 10m", priceFrom: "£260", vehicle: "E-Class" },
      { from: "Heathrow Airport", to: "Cambridge Science Park", duration: "1h 35m", priceFrom: "£210", vehicle: "E-Class" }
    ],
    faqs: [
      {
        question: "Can we establish a corporate billing account?",
        answer: "Absolutely. We offer consolidated monthly billing options for verified businesses. Please contact our corporate sales desk to establish an account same-day."
      },
      {
        question: "How do you manage complex multi-day roadshows?",
        answer: "We assign a dedicated roadshow coordinator who organizes pickup times, monitors traffic conditions, and communicates chauffeur schedules directly to your PA."
      },
      {
        question: "Are your drivers trained in corporate security protocols?",
        answer: "Yes, our executive drivers undergo specialized training in corporate protocol, VIP logistics, and defensive driving maneuvers."
      }
    ],
    ctaTitle: "Enhance Your Corporate Travel Standards",
    ctaSubtitle: "Deliver ultimate comfort to your executive board, team members, and VIP visitors. Register your corporate account today.",
    ctaBadges: [
      "DISPATCH: Priority Booking",
      "SUPPORT: Dedicated PA Line",
      "INVOICING: Consolidate Expenses"
    ]
  },
  "special-events": {
    title: "Special events",
    subtitle: "Sophisticated red-carpet transport for weddings, galas, and VIP functions",
    heroBadge: "VIP Red Carpet Events",
    heroTitle: "Grand Transportation for ",
    heroItalic: "Unforgettable Events.",
    heroSub: "Add majestic grandeur, style, and luxury to your wedding, film premiere, corporate gala, or VIP sports event with beautifully maintained chauffeur vehicles.",
    heroHighlights: ["Uniformed Driver Attire", "Event Schedule Sync", "Ribbons & Florals Available"],
    overviewCard: {
      title: "Wedding & Gala Protocols",
      image: "/images/LuxuryLimousineExperience.jpg",
      description: "Our wedding packages include a ceremonially uniformed chauffeur, red carpet door protocol, and custom-colored car ribbons to perfectly complement your event's theme.",
      highlights: [
        "Complimentary vintage champagne toast",
        "Perfect photographic backdrops",
        "Rigorous vehicle polishing checks"
      ],
      specs: [
        { label: "Chauffeur Dress", value: "Formal Suite & Cap" },
        { label: "Drinks", value: "Premium Champagne" },
        { label: "Entrance", value: "Red Carpet Protocol" },
        { label: "Photos", value: "Photogenic Clearance" }
      ]
    },
    benefits: [
      {
        title: "Uniformed Peak Protocol",
        desc: "Chauffeurs dress in formal suits, peak caps, and white driving gloves, strictly matching grand ceremonial standards.",
        iconName: "UserCheck"
      },
      {
        title: "Complimentary Bubbly",
        desc: "A bottle of vintage champagne is chilled in the cabin's active bar, providing a celebratory toast on your journey.",
        iconName: "Gift"
      },
      {
        title: "High-Definition Backdrops",
        desc: "Our vehicles are meticulously polished before departure, serving as gorgeous photogenic props for wedding portfolios.",
        iconName: "Camera"
      },
      {
        title: "Starlight Cabin Ambience",
        desc: "Select models feature customized fiber-optic ambient lighting, establishing a premium, relaxing evening dome.",
        iconName: "Sparkles"
      },
      {
        title: "Red Carpet Deployments",
        desc: "At your drop-off terminal, our chauffeur deploys a crimson carpet next to the passenger door for a majestic grand entry.",
        iconName: "Star"
      },
      {
        title: "Concierge Event Sync",
        desc: "We coordinate routes directly with wedding planners or coordinators, guaranteeing absolute sync with scheduling grids.",
        iconName: "Calendar"
      }
    ],
    amenities: [
      {
        title: "Chilled Champagne Bar",
        desc: "A complimentary bottle of chilled vintage champagne served en route in custom lead crystal champagne flutes.",
        iconName: "Gift"
      },
      {
        title: "Ceremonial Attired Pilot",
        desc: "Chauffeurs wear customized formal corporate suits, white driving gloves, and formal peaked caps matching royal standards.",
        iconName: "UserCheck"
      },
      {
        title: "Crimson Red Carpet Entry",
        desc: "At drop-off coordinates, drivers deploy a plush crimson velvet walk carpet next to the passenger door for a majestic exit.",
        iconName: "Star"
      },
      {
        title: "Customized Silk Ribbons",
        desc: "Meticulous color coordination matching silk ribbons and delicate inner floral bouquets to complement your event theme.",
        iconName: "Sparkles"
      },
      {
        title: "Starlight LED Sky Dome",
        desc: "Dimmable fiber-optic starlight cabin overhead array, setting a quiet, atmospheric sunset glow during twilight transfers.",
        iconName: "Eye"
      },
      {
        title: "Planner Itinerary Sync",
        desc: "Direct telephone coordination with event directors, photographers, and wedding coordinators for absolute scheduling sync.",
        iconName: "Calendar"
      }
    ],
    protocol: [
      {
        step: "01",
        title: "Theme Ribbon Design",
        badge: "Itinerary Synchronized",
        classType: "Milestone Celebration",
        duration: "Custom Tailored Specs",
        desc: "Select car ribbon colors, florist options, and coordinates with our booking concierge same-day.",
        iconName: "Calendar"
      },
      {
        step: "02",
        title: "Red-Carpet Ceremony Arrival",
        badge: "Formal Peak Uniform",
        classType: "Royal Protocol Greet",
        duration: "Grand Entrance Greet",
        desc: "Chauffeur in formal caps and white gloves deploys a velvet-red carpet at the door for your grand entry.",
        iconName: "Star"
      },
      {
        step: "03",
        title: "Champagne Celebration",
        badge: "Vintage Bubbly Toast",
        classType: "Luxury Suite Cabin",
        duration: "Starlight Atmosphere",
        desc: "Toast with premium chilled champagne under the starlight roof en-route to your reception venue.",
        iconName: "Gift"
      }
    ],
    testimonials: [
      {
        clientName: "Eleanor & James Montgomery",
        designation: "Married June 2026",
        review: "The S-Class with custom silk ribbons was the highlight of our wedding transport. Our chauffeur wore an immaculate uniform and cap and escorted us with absolute grace.",
        rating: 5,
        date: "June 2026"
      },
      {
        clientName: "Clara Pemberton",
        designation: "Luxury Wedding Planner",
        review: "An exceptional partner for high-end events. Punctual, pristine vehicles, and chauffeurs who truly understand peak etiquette. Highly recommended.",
        rating: 5,
        date: "May 2026"
      }
    ],
    popularRoutesTitle: "Exclusive Special Event Venues",
    popularRoutes: [
      { from: "Central London", to: "Ascot Racecourse", duration: "1h 10m", priceFrom: "£160", vehicle: "S-Class" },
      { from: "Mayfair", to: "Wembley Stadium VIP Entrance", duration: "35 mins", priceFrom: "£110", vehicle: "S-Class" },
      { from: "London Hotels", to: "Royal Albert Hall", duration: "20 mins", priceFrom: "£85", vehicle: "S-Class" },
      { from: "Chelsea", to: "Cliveden House Estate", duration: "55 mins", priceFrom: "£150", vehicle: "S-Class" }
    ],
    faqs: [
      {
        question: "Do you offer ribbons and custom wedding decorations?",
        answer: "Yes, our wedding bookings include matching exterior silk car ribbons and interior floral accents in the color of your choice, fully complimentary."
      },
      {
        question: "How long can we book the car for photoshoots?",
        answer: "We offer hourly hire wedding packages (minimum 3 hours) that let you utilize the vehicle as a luxurious background prop for photos."
      },
      {
        question: "What happens if our wedding schedule changes on the day?",
        answer: "Our event chauffeurs are reserved exclusively for you, ensuring full flexibility to accommodate any dynamic schedule shifts without stress."
      }
    ],
    ctaTitle: "Reserve Elegant Chauffeur Grandeur",
    ctaSubtitle: "Inject absolute style, romance, and luxury into your special milestone. Reserve your event chauffeur today.",
    ctaBadges: [
      "DRESS CODE: Formal Attired Cap",
      "CELEBRATION: Complimentary Champagne",
      "COORDINATION: Event Planner Sync"
    ]
  },
  "city-tours": {
    title: "City Tours",
    subtitle: "Customized London sightseeing led by experienced, knowledgeable chauffeurs",
    heroBadge: "Bespoke Sightseeing Tours",
    heroTitle: "Explore Historic London ",
    heroItalic: "in Private Luxury.",
    heroSub: "Discover London's most iconic landmarks—Big Ben, Tower Bridge, Buckingham Palace, and Windsor Castle—from the quiet comfort of a private executive car.",
    heroHighlights: ["Customized Tour Itineraries", "Knowledgeable Local Drivers", "Comfortable Regular Stops"],
    overviewCard: {
      title: "Tailored Sightseeing Routes",
      image: "/images/ada607e9-1a77-4abe-b383-edba1d490fc2.png",
      description: "Design your custom London sightseeing itinerary. Stop for high-profile photographs at historic sites, lunch in Mayfair, and shop in Harrods at your own leisure.",
      highlights: [
        "Experienced sightseeing chauffeurs",
        "Ample time for street photography",
        "Includes umbrellas and refreshments"
      ],
      specs: [
        { label: "Tour Duration", value: "4 to 8 Hours" },
        { label: "Guides", value: "Local Experts" },
        { label: "Refreshments", value: "Complimentary Drinks" },
        { label: "Stops", value: "Unlimited Stops" }
      ]
    },
    benefits: [
      {
        title: "Bespoke Scheduling",
        desc: "Travel completely at your own pace. If you want to spend extra time exploring Westminster Abbey, your driver is at your command.",
        iconName: "Clock"
      },
      {
        title: "Knowledgeable Drivers",
        desc: "Our sightseeing chauffeurs possess deep historical knowledge of London, pointing out landmarks and hidden local gems along the route.",
        iconName: "Compass"
      },
      {
        title: "Panoramic Glass Canopies",
        desc: "Select executive vehicles are equipped with expansive panoramic glass roofs, providing majestic upward views of historic skyscrapers.",
        iconName: "Eye"
      },
      {
        title: "Cabin Air Purification",
        desc: "Advanced multi-stage carbon air purifiers clean exhaust particles from busy urban roads, keeping the air pristine.",
        iconName: "Wind"
      },
      {
        title: "Double-Acoustic Insulation",
        desc: "Isolate your family from heavy city noise inside a quiet luxury cabin, perfect for children to rest between landmarks.",
        iconName: "VolumeX"
      },
      {
        title: "Premium Photo Support",
        desc: "Your chauffeur will gladly stop next to photogenic vantage spots and capture family photos for you.",
        iconName: "Camera"
      }
    ],
    amenities: [
      {
        title: "Panoramic Sky Dome",
        desc: "Expansive double-glazed panoramic glass sunroof structures for magnificent upward sightseeing of skyscrapers.",
        iconName: "Eye"
      },
      {
        title: "Expert Sightseeing Guide",
        desc: "Chauffeurs are London routing and history experts, sharing background trivia en-route to Buckingham Palace.",
        iconName: "Compass"
      },
      {
        title: "Unlimited Photo Stops",
        desc: "Driver handles parking, drops you off at landmarks, and captures group photographs for your family.",
        iconName: "Camera"
      },
      {
        title: "HEPA Urban Carbon Shield",
        desc: "Cabin is isolated from busy central London exhaust particles using advanced carbon HEPA purification filters.",
        iconName: "Wind"
      },
      {
        title: "Double-Glazed Silence Cabin",
        desc: "Acoustic insulation barriers suppress ambient city street noise, letting children sleep peacefully between historic spots.",
        iconName: "VolumeX"
      },
      {
        title: "Family Child-Seat Anchors",
        desc: "Pre-adjusted ergonomic rear baby seats and child booster configurations to keep younger explorers safe.",
        iconName: "UserCheck"
      }
    ],
    protocol: [
      {
        step: "01",
        title: "Custom Sightseeing Planner",
        badge: "Itinerary Builder",
        classType: "Heritage Exploration",
        duration: "Flexible Duration Slots",
        desc: "Submit your desired London landmarks, monuments, and shopping hubs via our sightseeing desk.",
        iconName: "Calendar"
      },
      {
        step: "02",
        title: "Expert Historic Guide",
        badge: "Local Geolocation Expert",
        classType: "VIP Hospitality Driver",
        duration: "Dynamic Street Navigation",
        desc: "Your driver shares rich historical contexts en route to landmarks, bypassing traffic using alternate grids.",
        iconName: "Compass"
      },
      {
        step: "03",
        title: "Flawless Photo Stops",
        badge: "No Parking Stress",
        classType: "Unlimited Photo Breaks",
        duration: "At Your Command",
        desc: "Chauffeur drops you directly at historic entrances, handles photo shoots, and waits while you explore.",
        iconName: "Camera"
      }
    ],
    testimonials: [
      {
        clientName: "The Henderson Family",
        designation: "Sightseeing Travelers",
        review: "Private tours of London can't get any better. Our chauffeur was incredibly knowledgeable about royal history and took great family photos at Tower Bridge.",
        rating: 5,
        date: "May 2026"
      },
      {
        clientName: "Dr. Hiroshi Tanaka",
        designation: "Historical Researcher",
        review: "Outstanding 8-hour heritage tour covering Windsor Castle and Stonehenge. Meticulous driving, great refreshments, and an elite vehicle.",
        rating: 5,
        date: "April 2026"
      }
    ],
    popularRoutesTitle: "Curated Historic Tours",
    popularRoutes: [
      { from: "Central London Hotels", to: "Royal London Tour (4h)", duration: "4 hours", priceFrom: "£240", vehicle: "E-Class" },
      { from: "London Hotels", to: "Windsor Castle & Stonehenge (8h)", duration: "8 hours", priceFrom: "£480", vehicle: "E-Class" },
      { from: "Central London", to: "Oxford & Cotswolds Heritage (9h)", duration: "9 hours", priceFrom: "£540", vehicle: "E-Class" },
      { from: "London Hotels", to: "Historic Bath & Roman Baths (8h)", duration: "8 hours", priceFrom: "£490", vehicle: "E-Class" }
    ],
    faqs: [
      {
        question: "Can we plan our own custom sightseeing stops?",
        answer: "Absolutely. You have complete flexibility. You can share your desired destinations with us beforehand, or direct your chauffeur dynamically on the day."
      },
      {
        question: "Is entry tickets to monuments included?",
        answer: "No, our service covers private chauffeur transport, parking fees, and road charges. Entry tickets to historic monuments must be purchased separately."
      },
      {
        question: "Can we accommodate children and luggage in the car?",
        answer: "Yes, we offer premium SUVs and business vans perfectly designed to accommodate large families, strollers, and visual cameras."
      }
    ],
    ctaTitle: "Embark on Your Bespoke Sightseeing Tour",
    ctaSubtitle: "Experience the historic glory of Great Britain in private luxury. Reserve your tailored tour today.",
    ctaBadges: [
      "SCHEDULING: Flexible Custom Stops",
      "GUIDES: Expert Chauffeur Insight",
      "REFRESHMENTS: Chilled Drinks & Snacks"
    ]
  },
  "private-jet-chauffeur": {
    title: "Private Jet Chauffeur",
    subtitle: "Discrete, elite airside-to-tarmac transfers for private aviation clients",
    heroBadge: "FBO Luxury Airside Transfers",
    heroTitle: "Seamless Precision for ",
    heroItalic: "Private Aviation.",
    heroSub: "Dedicated airside FBO transfers at Farnborough, Biggin Hill, Harrods Aviation, and Signature Flight Support. Perfect sync with flight tail numbers.",
    heroHighlights: ["FBO Airside Access Vetted", "Flight Tail Number Sync", "Absolute Privacy Guaranteed"],
    overviewCard: {
      title: "FBO & Tarmac Greetings",
      image: "/images/chufferas.png",
      description: "Our chauffeurs are specifically vetted for direct tarmac pick-ups, coordinating handovers directly with FBO handling staff and flight crew.",
      highlights: [
        "Tail number active monitoring",
        "Direct airport airside credentials",
        "Luggage handover coordination"
      ],
      specs: [
        { label: "Credentials", value: "FBO Airside Vetted" },
        { label: "Flight Sync", value: "Tail Number Monitored" },
        { label: "Luggage Hand", value: "Crew Coordinated" },
        { label: "Privacy Grade", value: "Diplomatic Level" }
      ]
    },
    benefits: [
      {
        title: "Tail Number Synchronization",
        desc: "We coordinate with airport FBO operators using your aircraft's tail number, adjusting arrival times to match your exact touchdown.",
        iconName: "Clock"
      },
      {
        title: "FBO Airside Vetted",
        desc: "Chauffeurs possess official airport identification badges, allowing direct access onto secure tarmac zones for boarding.",
        iconName: "UserCheck"
      },
      {
        title: "Luggage Crew Handover",
        desc: "Chauffeurs coordinate directly with ground baggage crews, transferring suitcases securely from cargo hold to vehicle.",
        iconName: "Package"
      },
      {
        title: "Clean Filtration Shield",
        desc: "Sealed cabin environment featuring clean active HEPA purifiers, isolating you from jet exhaust particles.",
        iconName: "Wind"
      },
      {
        title: "VIP Confidentiality",
        desc: "Our elite drivers are trained under diplomatic protocol, securing absolute, non-disclosed private travel.",
        iconName: "Shield"
      },
      {
        title: "Elite VIP Amenities",
        desc: "Cabin is supplied with carbonated waters, newspapers, corporate tablets, and fast device chargers.",
        iconName: "Laptop"
      }
    ],
    amenities: [
      {
        title: "Tarmac Steps Greet",
        desc: "Secure FBO operator clearance, permitting direct airside terminal pick-up at the steps of the aircraft.",
        iconName: "UserCheck"
      },
      {
        title: "Tail Number Sync Systems",
        desc: "Automatic real-time satellite coordination with the private aviation control desk matching actual jet touchdown.",
        iconName: "Clock"
      },
      {
        title: "Strict Diplomatic Privacy",
        desc: "Chauffeurs undergo specialized close-protection protocol vetting and are bound under sovereign non-disclosure pacts.",
        iconName: "Shield"
      },
      {
        title: "Baggage Crew Handover",
        desc: "Chauffeur coordinates luggage handling directly with private flight crews, transferring bags securely to the SUV.",
        iconName: "Package"
      },
      {
        title: "FBO Harrods Liaison",
        desc: "Pre-coordinated airport terminal routing and fast-track FBO arrivals sync en route to Farnborough.",
        iconName: "Compass"
      },
      {
        title: "HEPA Jet Exhaust Shield",
        desc: "Advanced airtight cabin sealing and localized carbon HEPA filters isolate you from jet fuel particles.",
        iconName: "Wind"
      }
    ],
    protocol: [
      {
        step: "01",
        title: "Tail Number Sync",
        badge: "FBO Aviation Approved",
        classType: "VIP Private Airside",
        duration: "Real-time Tracking",
        desc: "We track your jet's tail logs directly, matching ground arrivals with touchdown clearance hours.",
        iconName: "Clock"
      },
      {
        step: "02",
        title: "Tarmac Steps Pickup",
        badge: "Airside Credentials Vetted",
        classType: "Tarmac Gate Greet",
        duration: "Instant Boarding Sync",
        desc: "Our driver gains secure tarmac clearance to pick you up directly at the aircraft steps, handling bags with crew.",
        iconName: "UserCheck"
      },
      {
        step: "03",
        title: "Diplomatic Quiet Transit",
        badge: "Strict Privacy NDA",
        classType: "Acoustic Silence Room",
        duration: "Zero-Stress Mayfair Transit",
        desc: "Rejuvenate in total secrecy en-route to Mayfair inside a fully noise-suppressed, HEPA-sanitized luxury cabin.",
        iconName: "Shield"
      }
    ],
    testimonials: [
      {
        clientName: "Lord Charles Sterling",
        designation: "Private Jet Passenger",
        review: "Best FBO airside tarmac pickups in London. Absolute coordination with our jet crew at Farnborough. Perfect diplomatic protocol.",
        rating: 5,
        date: "May 2026"
      },
      {
        clientName: "Victoria Vance",
        designation: "Global Flight Concierge",
        review: "Corporate Wheels is our exclusive ground transit provider. They never miss a private jet tail coordinate, regardless of delays.",
        rating: 5,
        date: "May 2026"
      }
    ],
    popularRoutesTitle: "Exclusive FBO Transfer Connections",
    popularRoutes: [
      { from: "Farnborough Airport (FAB)", to: "Mayfair, Central London", duration: "1h 10m", priceFrom: "£160", vehicle: "S-Class" },
      { from: "London Biggin Hill (BQH)", to: "City of London", duration: "50 mins", priceFrom: "£140", vehicle: "S-Class" },
      { from: "Heathrow Signature FBO", to: "Kensington", duration: "35 mins", priceFrom: "£110", vehicle: "S-Class" },
      { from: "Stansted Harrods Aviation", to: "Mayfair", duration: "1h 05m", priceFrom: "£150", vehicle: "S-Class" }
    ],
    faqs: [
      {
        question: "How do you coordinate tarmac pick-ups?",
        answer: "We supply our chauffeur details to the FBO handling agents 24 hours prior. Upon your private jet landing, your driver receives clearance to meet you directly at the aircraft steps."
      },
      {
        question: "What happens if our take-off schedule is delayed?",
        answer: "We monitor private flight tail logs directly. Your chauffeur remains on standby at the FBO lounge, ready to transfer you the moment boarding is announced."
      },
      {
        question: "Can we request security escort vehicles?",
        answer: "Yes, we can deploy armored follow vehicles and security-vetted drivers for VIP dignitaries and diplomats upon request."
      }
    ],
    ctaTitle: "Reserve Secure Private Jet Chauffeur",
    ctaSubtitle: "Align your ground logistics with private aviation excellence. Book your tarmac transfer in seconds.",
    ctaBadges: [
      "ACCESS: FBO Airside Vetted",
      "TRACKING: Aircraft Tail Sync",
      "PROTOCOL: Diplomatic Privacy Standard"
    ]
  },
  "london-cruise-transfer": {
    title: "London Cruise Transfer",
    subtitle: "Stress-free transfers between Central London and all UK cruise terminals",
    heroBadge: "VIP Cruise Terminal Transit",
    heroTitle: "Elite Transfers to ",
    heroItalic: "UK Cruise Ports.",
    heroSub: "Seamless long-distance executive transfers connecting Central London and airport terminals to Southampton, Dover, Tilbury, and Portsmouth cruise ports.",
    heroHighlights: ["Generous Luggage Capacity", "Fixed Flat-Rate Prices", "Comfortable Scenic Transit"],
    overviewCard: {
      title: "Cruise Port Meet & Greet",
      image: "/images/LuxuryFleet.jpg",
      description: "Avoid crowded train platforms and busy port logistics. Your personal chauffeur greets you at the terminal luggage hall exit and escorts you in relaxed luxury.",
      highlights: [
        "Spacious high-capacity SUVs available",
        "Includes port drop-off access fees",
        "Complimentary hot/cold drinks"
      ],
      specs: [
        { label: "Pick-up", value: "Cruise Terminal Hall" },
        { label: "Luggage", value: "Heavy Capacity" },
        { label: "Congestion Fees", value: "Fully Included" },
        { label: "Stops", value: "En-route Rest Stops" }
      ]
    },
    benefits: [
      {
        title: "Fixed Flat-Rate Quote",
        desc: "Enjoy absolute pricing clarity. All port entry charges, drop-off fees, road congestion tolls, and tax are included in a single fee.",
        iconName: "CreditCard"
      },
      {
        title: "Massive Bag Space",
        desc: "Our premium SUVs and luxury business vans comfortably fit up to 7 large suitcases without sacrificing legroom.",
        iconName: "Briefcase"
      },
      {
        title: "Flexible Comfort Stops",
        desc: "Since port transits are long-distance, your driver will gladly integrate comfortable coffee or rest stops at premium service stations.",
        iconName: "Clock"
      },
      {
        title: "Clean Air Conditioning",
        desc: "Individually controlled multi-zone climate zones with clean particle air filtration, keeping travel sickness at bay.",
        iconName: "Wind"
      },
      {
        title: "Active Smooth Dampers",
        desc: "Equipped with electronic self-leveling air ride systems that absorb highway imperfections for maximum relaxation.",
        iconName: "Shield"
      },
      {
        title: "Port Baggage Handling",
        desc: "Your chauffeur manages loading luggage at your doorstep and hands them over securely to terminal handlers at port side.",
        iconName: "UserCheck"
      }
    ],
    amenities: [
      {
        title: "Flat-rate Price Guarantee",
        desc: "All terminal access tariffs, port exit tolls, and regional highway congestion charges are fully included.",
        iconName: "CreditCard"
      },
      {
        title: "Spacious Cargo Compartments",
        desc: "Luxury business vans and heavy SUVs easily pack up to 7 large travel suitcases without compromising cabin room.",
        iconName: "Briefcase"
      },
      {
        title: "Scenic Coffee Stops",
        desc: "Drivers will gladly pause for premium en-route coffee or scenery breaks at verified estates like Cliveden House.",
        iconName: "Clock"
      },
      {
        title: "Self-Leveling Air Chassis",
        desc: "Meticulous ride stabilization systems absorb asphalt imperfections on high-speed motorways for ultimate comfort.",
        iconName: "Shield"
      },
      {
        title: "Direct Port Side Welcome",
        desc: "Driver coordinates with port arrivals, waiting immediately at the terminal baggage hall doors with name plaques.",
        iconName: "UserCheck"
      },
      {
        title: "HEPA Cabin Air Filtration",
        desc: "Triple-stage air purifiers scrub particulates, ensuring fresh, clean air during long motorway cruise transits.",
        iconName: "Wind"
      }
    ],
    protocol: [
      {
        step: "01",
        title: "Luggage Capacity Vouching",
        badge: "High-Capacity SUV/Van",
        classType: "Cruise Port Transit",
        duration: "Pristine Valet Detailing",
        desc: "Verify suitcase volumes beforehand. Vehicles are meticulously detailed and set with custom climate grids.",
        iconName: "Briefcase"
      },
      {
        step: "02",
        title: "Southampton Port Greet",
        badge: "Arrival Hall Welcome",
        classType: "Port Authority Greet",
        duration: "Smooth Bag Transfer",
        desc: "Driver awaits outside cruise baggage exit holding a digital name plaque and transfers bags directly to the trunk.",
        iconName: "UserCheck"
      },
      {
        step: "03",
        title: "Smooth Highway Cruise",
        badge: "Self-Leveling Air Chassis",
        classType: "Scenic Travel Lounge",
        duration: "En-route Coffee Intervals",
        desc: "Enjoy a smooth highway cruise with self-leveling air ride systems and premium refreshments.",
        iconName: "Clock"
      }
    ],
    testimonials: [
      {
        clientName: "Sir Michael & Lady Davies",
        designation: "Cruise Passengers",
        review: "Transiting to Southampton Cruise terminal was so easy. Our chauffeur planned a fantastic coffee stop at Cliveden House and handled all heavy luggage.",
        rating: 5,
        date: "April 2026"
      },
      {
        clientName: "Grace Cunningham",
        designation: "Cruise Travel Agent",
        review: "Took all the stress out of long-distance cruise transfers. Fast, safe driving, and massive luggage capacity for the family.",
        rating: 5,
        date: "March 2026"
      }
    ],
    popularRoutesTitle: "Frequent Cruise Port Connections",
    popularRoutes: [
      { from: "Central London Hotels", to: "Southampton Cruise Terminals", duration: "1h 50m", priceFrom: "£190", vehicle: "E-Class" },
      { from: "London Heathrow (LHR)", to: "Southampton Cruise Terminals", duration: "1h 25m", priceFrom: "£170", vehicle: "E-Class" },
      { from: "London Hotels", to: "Dover Cruise Terminal", duration: "1h 45m", priceFrom: "£195", vehicle: "E-Class" },
      { from: "London Hotels", to: "Tilbury Docks Cruise Terminal", duration: "55 mins", priceFrom: "£110", vehicle: "E-Class" }
    ],
    faqs: [
      {
        question: "How do pick-ups work at the cruise terminal?",
        answer: "Your chauffeur will monitor your ship's docking log. They will greet you outside the cruise terminal arrivals baggage hall door holding a visible name card, ready to take your luggage."
      },
      {
        question: "Is there enough room for heavy cruise luggage?",
        answer: "Yes, for heavy travelers we recommend booking our spacious Premium SUVs or Business Vans which hold up to 7 large suitcases comfortably."
      },
      {
        question: "Can we schedule sight-seeing stops en route?",
        answer: "Absolutely. Many clients book a stop at Stonehenge or Windsor Castle on their transfer to Southampton. Contact our concierge to customize your route."
      }
    ],
    ctaTitle: "Embark on Your Cruise in Comfort",
    ctaSubtitle: "Arrive at the cruise docks fully relaxed and refreshed. Book your premium port transfer in seconds.",
    ctaBadges: [
      "CARGO: SUV & Van Luggage Space",
      "CHARGES: Fully Inclusive Flat-Rates",
      "PROTOCOL: Professional Port Assistance"
    ]
  }
};
