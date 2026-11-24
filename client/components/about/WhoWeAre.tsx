import { motion } from "framer-motion";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";
import Highlight from "@/components/premium/Highlight";
import { aboutContent, aboutHeadings } from "./content";

const section = aboutContent.sections[0];
const heading = aboutHeadings.sections[0];

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24"
    >
      <FloatingShapes variant="warm" />
      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Image composition */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none pb-10 pl-6 sm:pl-10"
        >
          {/* Offset gold frame */}
          <div className="absolute top-6 right-[-12px] bottom-16 left-16 sm:left-20 rounded-[2rem] border border-corporate-gold/40" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] group">
            <img
              src="/images/corporate-travel-highlight.jpg"
              alt="Corporate Wheels chauffeur greeting a business traveller beside an executive car"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Overlapping secondary image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-0 w-36 sm:w-48 overflow-hidden rounded-2xl border-4 border-background shadow-2xl"
          >
            <motion.img
              src="/images/EliteChauffeurs.jpeg"
              alt="Professional Corporate Wheels chauffeur at the wheel"
              loading="lazy"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="aspect-square w-full object-cover"
            />
          </motion.div>

          {/* Floating logo medallion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-10 -right-3 sm:-right-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex size-20 sm:size-24 items-center justify-center rounded-full border border-corporate-gold/50 bg-black/80 p-2 shadow-[0_0_40px_rgba(230,167,0,0.35)] backdrop-blur-xl"
            >
              <img src="/logo.png" alt="" aria-hidden className="h-full w-full object-contain" />
            </motion.div>
          </motion.div>

          {/* Rotating dashed ring */}
          <motion.svg
            aria-hidden
            className="absolute -top-8 left-0 w-24 h-24 text-corporate-gold/60"
            viewBox="0 0 100 100"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
          </motion.svg>
        </motion.div>

        {/* Copy — verbatim */}
        <div>
          <SectionHeading align="left" tagline={heading.tagline}
            title={section.heading}
            subtitle={heading.subtitle} className="!mb-8" />

          <div className="space-y-6 text-center lg:text-left">
            {section.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
                className={
                  i === 0
                    ? "font-heading text-xl md:text-2xl leading-relaxed text-neutral-900 dark:text-white"
                    : "text-base md:text-lg leading-relaxed text-muted-foreground"
                }
              >
                <Highlight
                  text={para}
                  phrases={
                    i === 0
                      ? ["top class chauffeur and private transfer services"]
                      : ["careful planning, discretion and courteous service"]
                  }
                />
              </motion.p>
            ))}
          </div>

          {/* Decorative divider */}
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
