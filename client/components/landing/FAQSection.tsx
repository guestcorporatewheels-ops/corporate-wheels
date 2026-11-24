import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

export const homeFaqs = [
  {
    q: "How do I book a chauffeur with Corporate Wheels?",
    a: "You can get an instant quote and book online through our website, use the Corporate Wheels mobile app, email our dispatch team, or call our booking desk on +44 (0)333 355 3755. Corporate clients can also book through their account portal.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "For executive saloons, SUVs, MPVs and electric cars we need a minimum of 60 minutes' notice, subject to availability. Vintage and classic cars, as well as international or European cross-border journeys, require at least 24 hours' notice. Booking earlier always gives you the best choice of vehicle.",
  },
  {
    q: "Are your prices fixed? Is anything charged on top?",
    a: "Our quotes include the chauffeur, vehicle, fuel and standard road tolls. VAT and parking are charged extra. Airport drop-off charges, extra waiting time and any unplanned detours requested during the journey are added after the trip where applicable.",
  },
  {
    q: "What happens if my flight is delayed or arrives early?",
    a: "We track every flight in real time, so your pickup is automatically moved to match your actual landing time at no extra cost. If your flight lands early, we do our best to have your chauffeur waiting for you on arrival.",
  },
  {
    q: "How much free waiting time do I get?",
    a: "Airport and private jet (FBO) pickups include 60 minutes of complimentary waiting from the moment your flight actually lands. All other pickups include 15 minutes of free waiting after the scheduled time. Any extra waiting is charged per minute at our standard hourly rate.",
  },
  {
    q: "Will my chauffeur meet me inside the airport terminal?",
    a: "Yes. With our Meet & Greet service your chauffeur waits in the arrivals hall holding a name board, helps with your luggage and walks you to the car — ideal for first-time visitors and busy executives.",
  },
  {
    q: "What is your cancellation policy?",
    a: "UK bookings cancelled more than 3 hours before pickup receive a full refund. Cancellations within 3 hours of pickup are charged at 50% of the fare, and no-shows are charged in full. European and international journeys need 7 days' notice for free cancellation.",
  },
  {
    q: "Can I hire a chauffeur by the hour?",
    a: "Absolutely. Hourly hire is perfect for roadshows, meetings across the city, shopping trips or evenings out, with your chauffeur on standby between stops. Hourly journeys stay within the city or area where they start unless agreed in writing beforehand.",
  },
  {
    q: "Do you provide child seats?",
    a: "Yes. Age- and height-appropriate child seats or boosters can be provided in line with UK regulations — just mention it when you book. Parents or guardians remain responsible for securing children in the seat.",
  },
  {
    q: "How much luggage can I bring?",
    a: "Luggage space depends on the vehicle you choose, so please select a car that comfortably fits both passengers and bags. Laptops and small cabin bags can travel with you inside the car. If you're unsure, our team will happily recommend the right vehicle.",
  },
  {
    q: "Do you offer corporate accounts and monthly invoicing?",
    a: "Yes. Business clients can open a corporate account with consolidated monthly invoicing, priority availability and dedicated support. All our corporate chauffeurs work under non-disclosure agreements for complete confidentiality.",
  },
  {
    q: "How do I pay and is it secure?",
    a: "Private customers pay by credit or debit card when booking, through a PCI-DSS secured payment gateway. Any post-journey extras such as parking or waiting time are processed within 24–48 hours of the trip.",
  },
  {
    q: "Which areas and airports do you cover?",
    a: "We are based next to Heathrow and cover London and the whole of the UK, including Heathrow, Gatwick, Stansted, Luton, London City and Farnborough airports, plus long-distance city-to-city transfers and European journeys on request.",
  },
  {
    q: "I left something in the car. What should I do?",
    a: "Contact us as soon as possible on info@corporatewheels.co.uk or +44 (0)333 355 3755. Chauffeurs check the vehicle after every journey and any items found are logged and kept at our head office for 30 days. Postage costs for returning items are paid by the customer.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-14">
      <div className="container max-w-3xl">
        <SectionHeading
          tagline="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before you book."
        />

        <Accordion type="single" collapsible className="space-y-3">
          {homeFaqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="border border-black/10 dark:border-white/10 rounded-xl px-5 bg-black/[0.02] dark:bg-white/[0.02]"
              >
                <AccordionTrigger className="text-left text-neutral-900 dark:text-white hover:text-corporate-gold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
