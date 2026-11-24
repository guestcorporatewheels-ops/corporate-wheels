import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck2,
  Car,
  Clock3,
  PoundSterling,
  ReceiptText,
  ShieldCheck,
  Thermometer,
  Wifi,
  Wind,
} from "lucide-react";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";
import { corporateContent, corporateLabels } from "./content";

const [, , inclusions, connections, protocol] = corporateContent.sections;

function useParallax() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return { ref, y };
}

function BandBackground({ src, y }: { src: string; y: ReturnType<typeof useParallax>["y"] }) {
  return (
    <div className="absolute inset-0 -z-10">
      <motion.img
        src={src}
        alt=""
        aria-hidden
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 -top-[10%] h-[120%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/92 dark:bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_50%_30%,rgba(230,167,0,0.14),transparent_70%)]" />
    </div>
  );
}

const cabinIcons = [Wifi, ReceiptText, ShieldCheck, Wind, CalendarCheck2, Thermometer];
const detailIcons = [Clock3, Car, PoundSterling];

/** S3 — First-Class In-Transit Inclusions › Elite Cabin Comforts & Conveniences */
export function CabinInclusions() {
  const { ref, y } = useParallax();
  const sub = inclusions.subsections[0];
  return (
    <section ref={ref} id="in-transit" className="relative isolate overflow-hidden py-16 md:py-24 scroll-mt-24">
      <BandBackground src="/images/corporate/corporate-cabin.jpg" y={y} />
      <div className="container">
        <SectionHeading tagline={corporateLabels.sections[2]} title={inclusions.heading} className="!mb-5" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h3 className="font-heading text-xl md:text-2xl text-corporate-gold">{sub.heading}</h3>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{sub.paragraphs[0]}</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sub.bullets.map((b, i) => {
            const Icon = cabinIcons[i];
            return (
              <motion.article
                key={b.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0d0d0d]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-corporate-gold/50 hover:shadow-[0_25px_50px_-25px_rgba(230,167,0,0.6)]"
              >
                <span aria-hidden className="absolute inset-x-6 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-corporate-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                <span className="flex size-12 items-center justify-center rounded-2xl border border-corporate-gold/35 bg-corporate-gold/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.6} />
                </span>
                <h4 className="mt-5 font-heading text-lg text-neutral-900 dark:text-white">{b.label}</h4>
                <p className="mt-2 leading-relaxed text-muted-foreground">{b.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** S4 — Frequent Luxury Connections (route cards) */
export function LuxuryConnections() {
  const { ref, y } = useParallax();
  return (
    <section ref={ref} id="connections" className="relative isolate overflow-hidden py-16 md:py-24 scroll-mt-24">
      <BandBackground src="/images/corporate/corporate-routes.jpg" y={y} />
      <div className="container">
        <SectionHeading
          tagline={corporateLabels.sections[3]}
          title={connections.heading}
          subtitle={connections.paragraphs[0]}
          className="!mb-12 max-w-3xl"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {connections.bullets.map((r, i) => (
            <motion.div
              key={r.text}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            >
              <Link
                to="/booking"
                aria-label={`Book: ${r.text}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0d0d0d]/80 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-corporate-gold/50 hover:shadow-[0_25px_50px_-25px_rgba(230,167,0,0.6)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-lg md:text-xl text-neutral-900 dark:text-white">{r.text}</h3>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-corporate-gold/40 text-corporate-gold transition-all duration-300 group-hover:bg-corporate-gold group-hover:text-black">
                    <ArrowUpRight aria-hidden className="size-4" />
                  </span>
                </div>

                {/* Decorative route line */}
                <div aria-hidden className="relative my-6 h-6">
                  <span className="absolute left-0 top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-corporate-gold bg-background" />
                  <span className="absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-[repeating-linear-gradient(90deg,rgba(230,167,0,0.7)_0_6px,transparent_6px_12px)]" />
                  <motion.span
                    className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-corporate-gold shadow-[0_0_12px_rgba(230,167,0,0.9)]"
                    animate={{ left: ["4%", "94%"] }}
                    transition={{ duration: 3.2 + i * 0.3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                  />
                  <span className="absolute right-0 top-1/2 size-3 -translate-y-1/2 rounded-full bg-corporate-gold" />
                </div>

                <dl className="mt-auto grid grid-cols-3 gap-3">
                  {(r.details ?? []).map((d, j) => {
                    const Icon = detailIcons[j];
                    const isPrice = j === 2;
                    return (
                      <div key={d.label} className="rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] p-3">
                        <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Icon aria-hidden className="size-3.5 text-corporate-gold" />
                          {d.label}:
                        </dt>
                        <dd className={`mt-1 font-heading ${isPrice ? "text-xl text-corporate-gold" : "text-base text-neutral-900 dark:text-white"}`}>
                          {d.text}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** S5 — Our Seamless Execution Protocol (3 steps) */
export function ExecutionProtocol() {
  return (
    <section id="protocol" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes variant="warm" />
      <div className="container">
        <SectionHeading
          tagline={corporateLabels.sections[4]}
          title={protocol.heading}
          subtitle={protocol.paragraphs[0]}
          className="!mb-14 max-w-3xl"
        />
        <div className="relative grid gap-6 lg:grid-cols-3">
          {/* Connecting line (desktop) */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-[16%] right-[16%] top-8 hidden h-px origin-left bg-gradient-to-r from-corporate-gold/20 via-corporate-gold to-corporate-gold/20 lg:block"
          />
          {protocol.subsections.map((step, i) => {
            const num = step.heading.match(/^(\d+)\./)?.[1] ?? String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={step.heading}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                <span
                  aria-hidden
                  className="relative z-10 flex size-16 items-center justify-center rounded-full border border-corporate-gold/60 bg-background font-heading text-xl text-corporate-gold shadow-[0_0_0_8px_hsl(var(--background)),0_0_30px_rgba(230,167,0,0.3)]"
                >
                  {num}
                </span>
                <div className="mt-6 flex h-full w-full flex-col rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-corporate-gold/50">
                  <h3 className="font-heading text-lg text-neutral-900 dark:text-white">{step.heading}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.paragraphs[0]}</p>
                  <dl className="mt-auto pt-5 space-y-2">
                    {step.bullets.map((b) => {
                      const isStatus = b.label === "Status";
                      return (
                        <div
                          key={b.label}
                          className="flex items-center justify-between gap-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] px-4 py-2.5 text-sm"
                        >
                          <dt className="text-muted-foreground">{b.label}:</dt>
                          <dd className="flex items-center gap-2 font-medium text-neutral-900 dark:text-white">
                            {isStatus && (
                              <span aria-hidden className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                              </span>
                            )}
                            {b.text}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
