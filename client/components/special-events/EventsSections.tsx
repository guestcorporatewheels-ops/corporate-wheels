import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Camera,
  Check,
  Clock,
  Crown,
  Car,
  Flower2,
  MapPin,
  PhoneCall,
  PoundSterling,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";
import { eventsContent, eventsLabels } from "./content";

const { wedding, inclusions, venues, protocol } = eventsContent;
const ease = [0.22, 1, 0.36, 1] as const;

/** Wedding & Gala Protocols — image + copy + protocol spec card. */
export function WeddingSection() {
  return (
    <section id="events-wedding" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes variant="warm" />
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div aria-hidden className="absolute top-6 left-3 bottom-[-12px] w-full rounded-[2rem] border border-corporate-gold/40" />
          <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-25px_rgba(0,0,0,0.5)]">
            <img
              src="/images/special-events/events-wedding.jpg"
              alt="Chauffeur holding the door beside a red carpet at a wedding"
              loading="lazy"
              className="aspect-[4/5] lg:aspect-[4/4.6] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>

        <div>
          <SectionHeading align="left" tagline={eventsLabels.wedding} title={wedding.heading} subtitle={wedding.text} className="!mb-6" />
          <ul className="mb-8 flex flex-wrap justify-center lg:justify-start gap-3">
            {wedding.points.map((p, i) => {
              const Icon = [Camera, Sparkles][i] ?? Check;
              return (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 rounded-full border border-corporate-gold/35 bg-white/80 dark:bg-white/[0.04] px-4 py-2 text-sm text-neutral-900 dark:text-white"
                >
                  <Icon aria-hidden className="size-4 text-corporate-gold" />
                  {p}
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="relative overflow-hidden rounded-3xl border border-corporate-gold/30 bg-white/85 dark:bg-white/[0.03] p-6 sm:p-7 backdrop-blur-xl"
          >
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(230,167,0,0.12),transparent_70%)]" />
            <h3 className="relative font-heading text-xl text-neutral-900 dark:text-white">{wedding.protocolHeading}</h3>
            <dl className="relative mt-5 divide-y divide-black/10 dark:divide-white/10">
              {wedding.protocol.map((r) => (
                <div key={r.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
                  <dt className="text-sm text-muted-foreground">{r.label}</dt>
                  <dd className="font-medium text-neutral-900 dark:text-white">{r.text}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** First-Class In-Transit Inclusions — cinematic band with 5 cards. */
export function InclusionsBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const icons: LucideIcon[] = [Crown, Sparkles, Flower2, Star, PhoneCall];

  return (
    <section ref={ref} id="events-inclusions" className="relative isolate overflow-hidden py-16 md:py-24 scroll-mt-24">
      <div className="absolute inset-0 -z-10">
        <motion.img
          src="/images/special-events/events-cabin.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          style={{ y }}
          className="absolute inset-0 -top-[10%] h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85 dark:bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      <div className="container">
        <SectionHeading tagline={eventsLabels.inclusions} title={inclusions.heading} className="!mb-6 max-w-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <h3 className="font-heading text-xl md:text-2xl text-corporate-gold">{inclusions.subheading}</h3>
          <p className="mt-3 text-lg text-muted-foreground">{inclusions.text}</p>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {inclusions.items.map((f, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                whileHover={{ y: -6 }}
                className={`group rounded-2xl border border-black/10 dark:border-white/10 bg-white/85 dark:bg-black/40 p-6 backdrop-blur-xl transition-colors hover:border-corporate-gold/50 lg:col-span-2 ${
                  i === 3 ? "lg:col-start-2" : ""
                } ${i === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <span className="flex size-11 items-center justify-center rounded-xl border border-corporate-gold/30 bg-corporate-gold/15">
                  <Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.6} />
                </span>
                <h4 className="mt-5 font-heading text-lg text-neutral-900 dark:text-white">{f.label}</h4>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Exclusive Special Event Venues — route cards with time / class / rate. */
export function VenueRoutes() {
  const factIcons: LucideIcon[] = [Clock, Car, PoundSterling];
  return (
    <section id="events-venues" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes />
      <div className="container">
        <SectionHeading tagline={eventsLabels.venues} title={venues.heading} subtitle={venues.text} className="!mb-10 max-w-3xl" />
        <div className="grid gap-6 md:grid-cols-2">
          {venues.routes.map((r, i) => {
            const [from, to] = r.name.split(" to ");
            return (
              <motion.article
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/85 dark:bg-white/[0.03] p-6 sm:p-7 backdrop-blur-xl transition-colors hover:border-corporate-gold/50"
              >
                <div aria-hidden className="absolute -right-16 -top-16 size-48 rounded-full bg-corporate-gold/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-60" />
                <h3 className="relative font-heading text-xl text-neutral-900 dark:text-white">
                  {to ? (
                    <>
                      {from} <span className="text-corporate-gold">to</span> {to}
                    </>
                  ) : (
                    r.name
                  )}
                </h3>
                <div aria-hidden className="relative mt-4 flex items-center gap-2 text-corporate-gold">
                  <MapPin className="size-4" />
                  <span className="h-px flex-1 bg-gradient-to-r from-corporate-gold/70 via-corporate-gold/30 to-corporate-gold/70" />
                  <MapPin className="size-4 fill-corporate-gold/30" />
                </div>
                <dl className="relative mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  {r.facts.map((f, fi) => {
                    const Icon = factIcons[fi];
                    return (
                      <div key={f.label} className="rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] p-2.5 sm:p-3">
                        <dt className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-muted-foreground whitespace-nowrap">
                          <Icon aria-hidden className="size-3.5 text-corporate-gold" />
                          {f.label}
                        </dt>
                        <dd className="mt-1 font-heading text-sm sm:text-base text-neutral-900 dark:text-white">{f.text}</dd>
                      </div>
                    );
                  })}
                </dl>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Our Seamless Execution Protocol — 3-step timeline. */
export function ExecutionProtocol() {
  return (
    <section id="events-protocol" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes variant="warm" />
      <div className="container">
        <SectionHeading tagline={eventsLabels.protocol} title={protocol.heading} subtitle={protocol.text} className="!mb-12 max-w-3xl" />
        <ol className="relative grid gap-6 lg:grid-cols-3">
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
            className="absolute left-[16%] right-[16%] top-8 hidden h-px origin-left bg-gradient-to-r from-corporate-gold/70 via-corporate-gold/40 to-corporate-gold/70 lg:block"
          />
          {protocol.steps.map((s, i) => {
            const m = s.heading.match(/^(\d+)\.\s*(.*)$/);
            return (
              <motion.li
                key={s.heading}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease }}
                className="relative flex flex-col rounded-3xl border border-black/10 dark:border-white/10 bg-white/85 dark:bg-white/[0.03] p-6 sm:p-7 backdrop-blur-xl"
              >
                <span aria-hidden className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-corporate-gold to-[#B8860B] font-heading text-2xl text-black shadow-[0_15px_35px_-12px_rgba(230,167,0,0.8)]">
                  {m ? m[1] : i + 1}
                </span>
                <h3 className="mt-6 font-heading text-xl text-neutral-900 dark:text-white">
                  <span className="sr-only">{m ? `${m[1]}. ` : ""}</span>
                  {m ? m[2] : s.heading}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{s.text}</p>
                {s.facts.length > 0 && (
                  <dl className="mt-6 space-y-2 border-t border-black/10 dark:border-white/10 pt-5 text-sm">
                    {s.facts.map((f) => (
                      <div key={f.label} className="flex flex-wrap gap-x-2">
                        <dt className="text-muted-foreground">{f.label}:</dt>
                        <dd className="font-medium text-corporate-gold">{f.text}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
