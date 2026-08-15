import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const homeFaqs = [
  {
    q: "How far in advance do I need to book?",
    a: "You can book as little as 2 hours ahead for standard rides. For airport pickups during peak times or event days, we recommend booking 24 hours in advance to guarantee your preferred vehicle class.",
  },
  {
    q: "What's included in the price?",
    a: "Your fare includes the chauffeur, vehicle, complimentary wait time, and bottled water. There are no hidden fees — the price you're quoted at booking is the price you pay.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "Yes. Standard bookings can be rescheduled or cancelled free of charge up to 2 hours before pickup. See our terms for full details.",
  },
  {
    q: "Are your chauffeurs vetted?",
    a: "Every chauffeur is background-checked, licensed, and trained before joining our network — whether they're a direct Corporate Wheels driver or part of our partner network abroad.",
  },
  {
    q: "Do you offer corporate accounts?",
    a: "Yes. Businesses can set up a corporate account with consolidated monthly invoicing, cost-center coding, and a dedicated account manager.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know before you book.
          </p>
        </div>

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
                <AccordionTrigger className="text-left text-white hover:text-corporate-gold">
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
