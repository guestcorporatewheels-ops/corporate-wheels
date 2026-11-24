import { motion } from "framer-motion";
import { MapPinned, Navigation, ReceiptPoundSterling } from "lucide-react";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";
import Highlight from "@/components/premium/Highlight";
import { aboutContent, aboutHeadings } from "./content";

const section = aboutContent.sections[1];
const heading = aboutHeadings.sections[1];

// Visual-only motifs for routing, pricing and tracking (no added copy).
const motifs = [Navigation, ReceiptPoundSterling, MapPinned];

export default function OurApproach() {
  return (
    <section className="relative isolate overflow-hidden py-12 md:py-16">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35] dark:opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(230,167,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(230,167,0,0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <FloatingShapes />

      <div className="container">
        <SectionHeading tagline={heading.tagline}
            title={section.heading}
            subtitle={heading.subtitle} className="!mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] px-6 py-10 sm:px-12 md:py-12 text-center backdrop-blur-sm shadow-[0_40px_80px_-40px_rgba(230,167,0,0.35)]"
        >
          {/* Corner ornaments */}
          {["top-5 left-5 border-t border-l", "top-5 right-5 border-t border-r", "bottom-5 left-5 border-b border-l", "bottom-5 right-5 border-b border-r"].map((pos) => (
            <span key={pos} aria-hidden className={`absolute size-6 border-corporate-gold/60 ${pos}`} />
          ))}

          {section.paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-heading text-xl sm:text-2xl md:text-3xl leading-relaxed md:leading-relaxed text-neutral-900 dark:text-white"
            >
              <Highlight
                text={para}
                phrases={[
                  "seamless, serene, and crystal clear",
                  "automated routing",
                  "consistent pricing",
                  "real-time journey tracking",
                ]}
                className="text-gradient-gold"
              />
            </p>
          ))}

          {/* Motif trio */}
          <div aria-hidden className="relative mx-auto mt-12 flex max-w-md items-center justify-between">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="absolute left-8 right-8 top-1/2 h-px origin-left bg-gradient-to-r from-corporate-gold/20 via-corporate-gold to-corporate-gold/20"
            />
            {motifs.map((Icon, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.25 }}
                className="relative flex size-16 items-center justify-center rounded-full border border-corporate-gold/50 bg-background shadow-[0_0_30px_rgba(230,167,0,0.25)]"
              >
                <motion.span
                  className="absolute inset-0 rounded-full border border-corporate-gold/40"
                  animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
                />
                <Icon className="size-6 text-corporate-gold" strokeWidth={1.5} />
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
