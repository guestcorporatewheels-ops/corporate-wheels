import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlaneTakeoff } from "lucide-react";
import SectionHeading from "@/components/landing/SectionHeading";
import { airportContent, airportLabels } from "./content";

const section = airportContent.sections[1];
const label = airportLabels.sections[1];

/** IATA codes already present in the writer's label, e.g. "Heathrow Airport (LHR)" → ["LHR"]. */
const codesOf = (text: string) => [...text.matchAll(/\(([A-Z]{3})\)/g)].map((m) => m[1]);

export default function AirportsGrid() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="airports" className="relative isolate overflow-hidden py-16 md:py-24 scroll-mt-24">
      <div className="absolute inset-0 -z-10">
        <motion.img
          src="/images/airport/airport-runway.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          style={{ y }}
          className="absolute inset-0 -top-[10%] h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/93 dark:bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_50%_30%,rgba(230,167,0,0.14),transparent_70%)]" />
      </div>

      <div className="container">
        <SectionHeading
          tagline={label.tagline}
          title={section.heading}
          subtitle={section.paragraphs[0]}
          className="!mb-12 max-w-3xl"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {section.bullets.map((b, i) => {
            const codes = codesOf(b.label);
            const isLast = i === section.bullets.length - 1;
            return (
              <motion.article
                key={b.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0d0d0d]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-corporate-gold/50 hover:shadow-[0_25px_50px_-25px_rgba(230,167,0,0.6)] ${
                  isLast ? "sm:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:gap-10" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-6 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-corporate-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
                <div aria-hidden className={`flex items-center gap-3 ${isLast ? "lg:shrink-0" : "mb-5"}`}>
                  {codes.length ? (
                    codes.map((c) => (
                      <span
                        key={c}
                        className="font-heading text-3xl tracking-[0.12em] text-transparent [-webkit-text-stroke:1px_rgba(230,167,0,0.9)] transition-colors duration-300 group-hover:text-corporate-gold"
                      >
                        {c}
                      </span>
                    ))
                  ) : (
                    <span className="flex size-14 items-center justify-center rounded-2xl border border-corporate-gold/40 bg-corporate-gold/10">
                      <PlaneTakeoff className="size-6 text-corporate-gold" strokeWidth={1.5} />
                    </span>
                  )}
                </div>
                <div className={isLast ? "mt-5 lg:mt-0" : ""}>
                  <h3 className="font-heading text-lg text-neutral-900 dark:text-white">{b.label}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
