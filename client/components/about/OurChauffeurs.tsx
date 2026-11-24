import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeartHandshake, Lock, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/landing/SectionHeading";
import Highlight from "@/components/premium/Highlight";
import { aboutContent, aboutHeadings } from "./content";

const section = aboutContent.sections[2];
const heading = aboutHeadings.sections[2];

// Visual-only motifs for safety, privacy and peace (no added copy).
const motifs = [ShieldCheck, Lock, HeartHandshake];

export default function OurChauffeurs() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden py-16 md:py-20">
      {/* Parallax background */}
      <div className="absolute inset-0 -z-10">
        <motion.img
          src="/images/chufferas.png"
          alt=""
          aria-hidden
          loading="lazy"
          style={{ y }}
          className="absolute inset-0 h-[124%] -top-[12%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85 dark:bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_50%,rgba(230,167,0,0.14),transparent_70%)]" />
      </div>

      <div className="container grid items-center gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div>
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
              className="text-center lg:text-left font-heading text-xl md:text-2xl leading-relaxed md:leading-relaxed text-neutral-900 dark:text-white"
            >
              <Highlight
                text={para}
                phrases={["safety, privacy, and peace", "professionally trained and screened", "courteous service"]}
              />
            </motion.p>
          ))}
        </div>

        {/* Decorative medallions */}
        <div aria-hidden className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
          <motion.div
            className="absolute inset-0 rounded-full border border-dashed border-corporate-gold/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-10 rounded-full border border-corporate-gold/20" />
          <motion.div
            className="relative flex size-28 items-center justify-center rounded-full border border-corporate-gold/60 bg-black/80 p-3 shadow-[0_0_60px_rgba(230,167,0,0.35)]"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/logo.png" alt="" className="h-full w-full object-contain" />
          </motion.div>
          {motifs.map((Icon, i) => {
            const angle = (i / motifs.length) * Math.PI * 2 - Math.PI / 2;
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                className="absolute flex size-14 items-center justify-center rounded-2xl border border-corporate-gold/50 bg-white/90 dark:bg-black/70 backdrop-blur-xl shadow-lg"
                style={{
                  left: `calc(50% + ${Math.cos(angle) * 46}% - 28px)`,
                  top: `calc(50% + ${Math.sin(angle) * 46}% - 28px)`,
                }}
              >
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                >
                  <Icon className="size-6 text-corporate-gold" strokeWidth={1.5} />
                </motion.span>
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
