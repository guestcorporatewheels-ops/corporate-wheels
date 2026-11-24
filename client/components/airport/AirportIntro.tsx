import { motion } from "framer-motion";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";
import Highlight from "@/components/premium/Highlight";
import { airportContent, airportLabels } from "./content";

const section = airportContent.sections[0];
const label = airportLabels.sections[0];
const [lead, ...rest] = section.paragraphs;

export default function AirportIntro() {
  return (
    <section id="airport-intro" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes variant="warm" />
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none pl-6 sm:pl-10"
        >
          <div aria-hidden className="absolute top-6 right-[-12px] bottom-[-12px] left-16 sm:left-20 rounded-[2rem] border border-corporate-gold/40" />
          <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]">
            <img
              src="/images/airport/airport-intro.jpg"
              alt="Chauffeur walking with a business traveller and his luggage out of an airport terminal"
              loading="lazy"
              className="aspect-[4/5] lg:aspect-[4/4.6] w-full object-cover object-[center_80%] transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>

          {/* Floating logo medallion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-6 left-0"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex size-20 sm:size-24 items-center justify-center rounded-full border border-corporate-gold/50 bg-black/85 p-2 shadow-[0_0_40px_rgba(230,167,0,0.35)]"
            >
              <img src="/logo.png" alt="" aria-hidden className="h-full w-full object-contain" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copy — verbatim */}
        <div>
          <SectionHeading
            align="left"
            tagline={label.tagline}
            title={section.heading}
            subtitle={lead}
            className="!mb-8"
          />
          {rest.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-center lg:text-left font-heading text-xl md:text-2xl leading-relaxed md:leading-relaxed text-neutral-900 dark:text-white"
            >
              <Highlight text={para} phrases={["punctuality, discretion, and complete peace of mind"]} />
            </motion.p>
          ))}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-10 h-px w-full origin-left bg-gradient-to-r from-corporate-gold/70 via-corporate-gold/20 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
