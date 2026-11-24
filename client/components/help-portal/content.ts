// Verbatim copy from "CW Contents/Help Portal & Frequently Asked QuestionsCW.docx" (written by the content writer).
// Do not edit wording here without the writer's approval.
export const helpContent = {
  "title": "Help Portal & Frequently Asked Questions",
  "intro": [
    "Welcome to the Corporate Wheels Help Centre. Here you can find information about bookings, quotations, airport transfers, our vehicles, chauffeur services and corporate accounts.",
    "If you cannot find the information you need, please contact our team using the details provided below."
  ],
  "categories": [
    {
      "heading": "Booking & Quotation Support",
      "items": [
        {
          "question": "1. How much in advance do I need to make my arrangements?",
          "answer": [
            "Even though it is recommended that you make your arrangements in good time in order for us to be able to allocate your desired car type, especially during our busy periods or with regard to our Vintage Fleet cars, we would be glad to make arrangements with only 60 minutes' notice."
          ]
        },
        {
          "question": "2. How are fares computed for Corporate Wheels trips?",
          "answer": [
            "Your quotation is based on the details of your journey and the service requested. Depending on the booking, factors may include the journey distance, vehicle selected, scheduled time and any applicable additional charges.",
            "Please review your quotation for the total price and details of what is included before confirming your booking."
          ]
        },
        {
          "question": "3. Does my fare change after I make my booking?",
          "answer": [
            "No. Your fare will be locked in at the time of your booking. There is no other way that your fare will be altered except when you include extra stops or destinations or require extra waiting time other than those included in our complimentary waiting time while travelling."
          ]
        },
        {
          "question": "4. What modes of payment do you accept?",
          "answer": [
            "We accept payment by bank transfer and, where available, through Stripe payment links. Please follow the payment instructions provided with your quotation or booking confirmation.",
            "If you have a question about payment, please contact us at info@corporatewheels.co.uk."
          ]
        }
      ]
    },
    {
      "heading": "Airport Transfers & Flight Tracking",
      "items": [
        {
          "question": "1. How does the airport pickup process go along with flight tracking?",
          "answer": [
            "Once you have booked your flight number of arrival, we employ our flight tracker website to monitor your current flight status. Should you come late, then your pick up time will be automatically revised to suit you."
          ]
        },
        {
          "question": "2. How long is the complimentary airport pick up period?",
          "answer": [
            "For eligible airport pick-ups, the booking includes up to 60 minutes of complimentary waiting time, subject to the terms of your booking. Please check your booking confirmation for the applicable waiting-time allowance and collection instructions."
          ]
        },
        {
          "question": "3. Where should I locate my chauffeur at the airport?",
          "answer": [
            "All the chauffeurs’ contact information and vehicle details will be sent to you through an email and text message before landing."
          ]
        }
      ]
    },
    {
      "heading": "Premium Fleet & On-Board Services",
      "items": [
        {
          "question": "1. What kinds of cars are provided by the Corporate Wheels Fleet?",
          "answer": [
            "Some of the types of cars which we provide at Corporate Wheels are Premium Saloon cars, Luxury Saloon cars, Premium SUVs, Business Vans and MPVs, Electric Class (zero-emission) which are Mercedes-Benz EQE/EQS and Tesla, and Vintage Cars."
          ]
        },
        {
          "question": "2. What services do you offer in your cars?",
          "answer": [
            "All the Corporate Wheels cars have such services as free high-speed internet, mobile phone charging stations, multi-zone air conditioning, privacy glass, and chilled water bottles. Other special refreshments may be provided if required by prior notice."
          ]
        },
        {
          "question": "3. What is the luggage capacity of your cars?",
          "answer": [
            "Luggage capacity varies by vehicle and the size and number of bags. When requesting a quotation, please tell us how many passengers will be travelling and how much luggage you expect to bring. We can then help identify a suitable vehicle, subject to availability.",
            "If you have particular luggage requirements, please confirm these with us before booking."
          ]
        }
      ]
    },
    {
      "heading": "Safety, Vetting & TfL Regulatory Compliance",
      "items": [
        {
          "question": "1. Are chauffeurs working with Corporate Wheels background checked?",
          "answer": [
            "Chauffeurs working with Corporate Wheels must meet the licensing and checking requirements applicable to their role and operating area. Please contact us if you require further information about our chauffeur checks and licensing arrangements."
          ]
        },
        {
          "question": "2. How does Corporate Wheels comply with TfL Voice Contact Requirement (VCR)?",
          "answer": [
            "In line with TfL Private Hire requirements, Corporate Wheels ensures 24/7 human voice contact through phone service. Whether it's passengers, chauffeurs, corporate travel managers, parents/guardians, you can reach our operation controllers anytime before, during, and even after the trip."
          ]
        },
        {
          "question": "3. What should I do if I miss a call from Corporate Wheels or if I need to talk to my chauffeur?",
          "answer": [
            "Our centralised dispatch system comes with an automated missed call alerting feature. In case a call was not answered, an immediate alert will be sent to our on duty controllers."
          ]
        }
      ]
    },
    {
      "heading": "Corporate Accounts & Business Services",
      "items": [
        {
          "question": "1. How can I get a corporate account with Corporate Wheels?",
          "answer": [
            "Organisations interested in opening a Corporate Wheels business account can contact our team at info@corporatewheels.co.uk or call +44 (0)333 355 3755 or 07351 111355.",
            "Please contact us to discuss your organisation’s travel requirements and the account services available."
          ]
        },
        {
          "question": "2. Do you offer customised invoicing and travel policies?",
          "answer": [
            "Yes. We collaborate with the corporate travel managers to create customised billing systems, allocate cost codes, and enforce corporate travel policies for all bookings."
          ]
        }
      ]
    }
  ],
  "desk": {
    "heading": "Contact & Support Desk",
    "lines": [
      "Telephone: +44 (0)333 355 3755 | Mobile: +44 7351 111355",
      "Email: info@corporatewheels.co.uk",
      "Head Office: Corporate Wheels Limited, 450 Bath Road, Longford, Heathrow, Greater London, UB7 0EB, United Kingdom"
    ]
  }
} as const;

// UI labels (NOT the writer's copy): gold taglines and search UI text.
export const helpLabels = {
  heroTagline: "Help Centre",
  categoryTaglines: ["Bookings", "At the Airport", "Our Fleet", "Your Safety", "For Businesses"],
  deskTagline: "We're Here to Help",
  searchPlaceholder: "Search the help centre",
  noResults: "No matching questions. Please contact our team using the details below.",
} as const;
