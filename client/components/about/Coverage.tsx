import { motion } from "framer-motion";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";
import Highlight from "@/components/premium/Highlight";
import { aboutContent, aboutHeadings } from "./content";

const section = aboutContent.sections[4];
const heading = aboutHeadings.sections[4];

// Purely visual photo stack — no captions, so no copy is added to the section.
const photos = [
  {
    src: "/images/cities/manchester.jpg",
    alt: "Executive car in a city centre at dusk",
    className: "left-0 top-10 w-[58%]",
    tilt: "-rotate-6",
    float: [0, -8, 0],
  },
  {
    src: "/images/cities/birmingham.jpg",
    alt: "Chauffeur car on a city street at night",
    className: "right-0 top-0 w-[58%]",
    tilt: "rotate-6",
    float: [0, 8, 0],
  },
  {
    src: "/images/cities/london.jpg",
    alt: "Chauffeur car by the river at sunset",
    className: "left-[18%] top-16 w-[64%] z-10",
    tilt: "",
    float: [0, -6, 0],
  },
];

export default function Coverage() {
  return (
    <section className="relative isolate overflow-hidden py-12 md:py-16">
      <FloatingShapes />
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Copy — verbatim */}
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
              className="text-center lg:text-left text-lg md:text-xl leading-relaxed md:leading-relaxed text-neutral-800 dark:text-white/85"
            >
              <Highlight
                text={para}
                phrases={["London, Manchester, and Birmingham", "across the UK", "selected international destinations"]}
              />
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

        {/* Visual */}
        <div className="relative mx-auto h-[370px] w-full max-w-lg sm:h-[490px]">
          <div aria-hidden className="absolute inset-10 rounded-full bg-corporate-gold/15 blur-3xl" />
          <motion.svg
            aria-hidden
            className="absolute inset-0 h-full w-full text-corporate-gold/40"
            viewBox="0 0 400 400"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <ellipse cx="200" cy="200" rx="190" ry="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 10" />
          </motion.svg>

          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute ${p.className}`}
            >
              <div className={p.tilt}>
              <motion.div
                animate={{ y: p.float }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                className="overflow-hidden rounded-3xl border-4 border-background shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
              >
                <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
