// Verbatim copy from "CW Contents/Cancellation & Refund PolicyCW.docx" (written by the content writer).
// Do not edit wording here without the writer's approval.
export const policyContent = {
  "title": "Cancellation & Refund Policy",
  "intro": [
    "At Corporate Wheels, we realise that the executive schedules can be flexible. Our objective is to provide maximum flexibility for our clients but still be accountable for our chauffeurs and vehicle scheduling."
  ],
  "sections": [
    {
      "heading": "1. Standard Booking & Cancellation Windows",
      "paragraphs": [
        "All cancellations need to strictly be made using your online booking system, emailing to support@corporatewheels.co.uk, or contacting us at our dispatch office 24 hours a day."
      ],
      "bullets": [
        {
          "label": "24 Hours Advance Notice for Online Booking",
          "text": "To ensure that you have availability of your chauffeur and vehicle, we ask you to kindly provide at least 24 hours of advance notice for your regular online booking."
        },
        {
          "text": "Cancellation deadlines, fees and refund eligibility are set out in the Terms and Conditions for your booking. Please refer to your booking confirmation for the applicable terms."
        }
      ]
    },
    {
      "heading": "2. No-Show Policy",
      "paragraphs": [
        "If you are delayed or unable to find your chauffeur, please contact our dispatch team as soon as possible."
      ],
      "bullets": [
        {
          "text": "Waiting allowances, no-show timings and any applicable charges are set out in the Terms and Conditions for your booking."
        }
      ]
    },
    {
      "heading": "3. Flight Delays & Schedule Adjustments",
      "paragraphs": [],
      "bullets": [
        {
          "label": "Live Flight Tracking",
          "text": "We monitor all commercial and private flights live. If your flight is either delayed, earlier, or rescheduled before take off, the pick-up time for your chauffeur is automatically adjusted without an additional cost."
        },
        {
          "label": "Cancelled Flights",
          "text": "In case of cancellation of your flight by the airline prior to departure, kindly inform our dispatch staff at once. In case of cancellation more than 2 hours prior to the original time of arrival, there is no charge and full credit/refund of your booking can be arranged."
        }
      ]
    },
    {
      "heading": "4. Journey Amendments & Multi-Stop Bookings",
      "paragraphs": [],
      "bullets": [
        {
          "label": "Route Changes",
          "text": "It is possible to change your pick-up time, pick-up vehicle category, or pick-up point for no cost 12 hours before the trip, as long as there is vehicle availability."
        },
        {
          "label": "Changes to Hourly Hire",
          "text": "Should you wish to add more hours to your ongoing hourly hire, this will be charged in half-hour blocks at our hourly vehicle rate."
        }
      ]
    },
    {
      "heading": "5. Refunds & Processing Time",
      "paragraphs": [
        "All refund applications are refunded into the card that was utilised during the booking process."
      ],
      "bullets": [
        {
          "label": "Processing Time",
          "text": "Refunds are processed by our accounting department within 1–2 working days. It normally takes 3–5 working days for the refund amount to reflect in your account depending on your card network/banking company."
        },
        {
          "label": "Corporate Accounts",
          "text": "In case of corporate account holders, if the cancellation is done within the free period, then it will not show up on your bill, whereas late cancellations will be charged separately in your bill."
        }
      ]
    },
    {
      "heading": "Need Assistance?",
      "paragraphs": [
        "In case you want to reschedule or cancel your upcoming booking, we have a 24/7 customer care team to help you with:"
      ],
      "bullets": [
        {
          "label": "Dispatch & Queries",
          "text": "support@corporatewheels.co.uk"
        },
        {
          "label": "Online Booking Management",
          "text": "Login to your Corporate Wheels Account Portal"
        }
      ]
    }
  ]
} as const;

// Short gold taglines above each heading (home-page heading style). UI labels, NOT the writer's copy.
export const policyLabels = {
  heroTagline: "Booking Policies",
  sections: ["Cancellations", "No-Shows", "Flight Delays", "Amendments", "Refunds", "Support"],
} as const;
