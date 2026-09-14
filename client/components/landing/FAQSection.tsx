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
    q: "How can I plan my trip?",
    a: "One can make bookings via our quoting engine, make an inquiry through email, or call us at our booking desk.",
  },
  {
    q: "Do you offer airport meet and greet service?",
    a: "Yes, our chauffeur will be watching out for your arrival and will come and pick you from the airport terminal along with your name plate.",
  },
  {
    q: "Can I employ a chauffeur on an hourly basis?",
    a: "Certainly. We have hourly packages that allow maximum flexibility if one wants to stop multiple times along the way, or go for a road show or night out.",
  },
  {
    q: "Do you have corporate accounts?",
    a: "We provide specialised corporate accounts that provide simplified billing options, first call availability and tailored travel options for frequent corporate users.",
  },
  {
    q: "Where do you operate?",
    a: "We operate throughout the UK with emphasis on business centres, airports, and private airports terminals.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20">
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
                className="border border-white/10 rounded-xl px-5 bg-white/[0.02]"
              >
                <AccordionTrigger className="text-left text-white hover:text-corporate-gold hover:no-underline">
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
