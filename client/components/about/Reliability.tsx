import { motion } from "framer-motion";
import { Clock3, PlaneLanding } from "lucide-react";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";
import Highlight from "@/components/premium/Highlight";
import { aboutContent, aboutHeadings } from "./content";

const section = aboutContent.sections[3];
const heading = aboutHeadings.sections[3];

export default function Reliability() {
  return (
    <section className="relative isolate overflow-hidden py-12 md:py-16">
      <FloatingShapes variant="warm" />
      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Copy — verbatim */}
        <div className="order-2 lg:order-1">
          <SectionHeading align="left" tagline={heading.tagline}
            title={section.heading}
            subtitle={heading.subtitle} className="!mb-8" />
          {section.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left font-heading text-2xl md:text-3xl leading-snug md:leading-snug text-neutral-900 dark:text-white"
            >
              <Highlight
                text={para}
                phrases={["plan each journey carefully", "adjust pick-up arrangements"]}
                className="text-gradient-gold"
              />
            </motion.p>
          ))}

          {/* Animated journey line (decorative) */}
          <div aria-hidden className="relative mt-12 h-16 max-w-lg mx-auto lg:mx-0">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 64" fill="none" preserveAspectRatio="none">
              <path d="M8 48 C 110 48, 120 16, 200 16 S 290 48, 392 48" stroke="currentColor" className="text-black/10 dark:text-white/10" strokeWidth="2" />
              <motion.path
                d="M8 48 C 110 48, 120 16, 200 16 S 290 48, 392 48"
                stroke="#E6A700"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
            <span className="absolute left-0 bottom-0 flex size-8 items-center justify-center rounded-full border border-corporate-gold/60 bg-background">
              <PlaneLanding className="size-4 text-corporate-gold" />
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.9 }}
              className="absolute right-0 bottom-0 flex size-8 items-center justify-center rounded-full bg-corporate-gold shadow-[0_0_20px_rgba(230,167,0,0.6)]"
            >
              <Clock3 className="size-4 text-black" />
            </motion.span>
          </div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2 mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]">
            <img
              src="/images/airport-transfer-highlight.jpg"
              alt="Chauffeur meeting a traveller in an airport terminal"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            {/* Live pulse dot */}
            <span aria-hidden className="absolute top-5 right-5 flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-corporate-gold opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-corporate-gold" />
            </span>
          </div>
          <div aria-hidden className="absolute -bottom-5 -right-5 -z-10 size-32 rounded-[2rem] border border-corporate-gold/40" />
          <div aria-hidden className="absolute -top-5 -left-5 -z-10 size-24 rounded-[1.5rem] bg-corporate-gold/10 blur-sm" />
        </motion.div>
      </div>
    </section>
  );
}
