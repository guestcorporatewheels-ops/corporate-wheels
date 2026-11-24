import { motion } from "framer-motion";
import FloatingShapes from "@/components/landing/FloatingShapes";

interface IntroSplitProps {
  id: string;
  /** Gold eyebrow label (UI label, not writer copy). */
  tagline: string;
  /** Writer's intro paragraphs, rendered verbatim (first one as a lead). */
  paragraphs: readonly string[];
  image: string;
  imageAlt: string;
}

/** Intro block for docs whose opening paragraphs have no heading: framed image + editorial copy. */
export default function IntroSplit({ id, tagline, paragraphs, image, imageAlt }: IntroSplitProps) {
  return (
    <section id={id} className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes variant="warm" />
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div aria-hidden className="absolute top-6 left-3 bottom-[-12px] w-full rounded-[2rem] border border-corporate-gold/40" />
          <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="aspect-[4/5] lg:aspect-[4/4.6] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
          {/* Floating logo medallion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-6 -right-2 sm:-right-6"
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

        <div>
          <div className="mb-6 flex items-center justify-center lg:justify-start gap-3">
            <span aria-hidden className="h-px w-8 bg-corporate-gold/60 lg:hidden" />
            <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-corporate-gold">{tagline}</span>
            <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
            <span aria-hidden className="h-px w-8 sm:w-12 bg-corporate-gold/60" />
          </div>
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`text-center lg:text-left leading-relaxed ${
                i === 0
                  ? "font-heading text-xl md:text-2xl text-neutral-900 dark:text-white"
                  : "mt-6 text-base md:text-lg text-muted-foreground"
              }`}
            >
              {p}
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
