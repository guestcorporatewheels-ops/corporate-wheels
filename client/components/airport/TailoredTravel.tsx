import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";
import { airportContent, airportLabels } from "./content";

const section = airportContent.sections[3];
const label = airportLabels.sections[3];

const visuals = [
  {
    image: "/images/airport/airport-executive.jpg",
    alt: "Businesswoman taking a call in the rear seat of a luxury SUV",
    Icon: Briefcase,
  },
  {
    image: "/images/airport/airport-family.jpg",
    alt: "Family with luggage greeted by a chauffeur beside a luxury MPV",
    Icon: Users,
  },
];

export default function TailoredTravel() {
  return (
    <section id="tailored" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes />
      <div className="container">
        <SectionHeading
          tagline={label.tagline}
          title={section.heading}
          subtitle={label.subtitle}
          className="!mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {section.bullets.map((b, i) => {
            const v = visuals[i];
            return (
              <motion.article
                key={b.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)]"
              >
                <img
                  src={v.image}
                  alt={v.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <span aria-hidden className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-corporate-gold/0 transition-all duration-500 group-hover:ring-corporate-gold/50" />

                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <span className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-corporate-gold/50 bg-black/50 backdrop-blur-md">
                    <v.Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-white">{b.label}</h3>
                  <span aria-hidden className="my-4 block h-px w-12 bg-corporate-gold transition-all duration-500 group-hover:w-24" />
                  <p className="max-w-xl leading-relaxed text-white/80">{b.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
