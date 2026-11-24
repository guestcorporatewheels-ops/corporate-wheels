import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BellRing,
  Clock3,
  Headset,
  Mail,
  MapPin,
  Phone,
  PlaneLanding,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";
import { contactContent, contactLabels } from "./content";

const { getInTouch, headOffice, liveSupport } = contactContent;

/** Phone numbers / emails exactly as the writer wrote them → tel/mailto targets. */
const LINKS: Record<string, string> = {
  "+44 (0)333 355 3755": "tel:+443333553755",
  "07351 111355": "tel:+447351111355",
  "+44 7351 111355": "tel:+447351111355",
  "info@corporatewheels.co.uk": "mailto:info@corporatewheels.co.uk",
};
const LINK_RE = new RegExp(`(${Object.keys(LINKS).map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");

/** Renders the writer's text verbatim with phone numbers and emails as links. */
function ContactText({ text }: { text: string }) {
  return (
    <>
      {text.split(LINK_RE).map((part, i) =>
        LINKS[part] ? (
          <a
            key={i}
            href={LINKS[part]}
            className="whitespace-nowrap font-medium text-corporate-gold underline decoration-corporate-gold/40 underline-offset-4 hover:decoration-corporate-gold"
          >
            {part}
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

const cardBase =
  "group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/85 dark:bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-corporate-gold/50 hover:shadow-[0_25px_50px_-25px_rgba(230,167,0,0.55)]";

function IconBadge({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-corporate-gold/35 bg-corporate-gold/10 transition-transform duration-300 group-hover:scale-110">
      <Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.6} />
    </span>
  );
}

/** Get in Touch — phone / email / hours beside a support image. */
export function GetInTouch() {
  const icons = [Phone, Mail, Clock3];
  return (
    <section id="get-in-touch" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes variant="warm" />
      <div className="container grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            tagline={contactLabels.getInTouch}
            title={getInTouch.heading}
            subtitle={getInTouch.paragraphs[0]}
            className="!mb-8"
          />
          <div className="space-y-4">
            {getInTouch.bullets.map((b, i) => {
              const isHours = i === 2;
              return (
                <motion.article
                  key={b.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`${cardBase} flex gap-5 p-6`}
                >
                  <IconBadge Icon={icons[i]} />
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-2 font-heading text-lg text-neutral-900 dark:text-white">
                      {b.label}
                      {isHours && (
                        <span aria-hidden className="relative flex size-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
                        </span>
                      )}
                    </h3>
                    <p className={`mt-1.5 leading-relaxed ${isHours ? "font-heading text-xl text-corporate-gold" : "text-muted-foreground"}`}>
                      <ContactText text={b.text} />
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div aria-hidden className="absolute top-6 -left-3 bottom-[-12px] w-full rounded-[2rem] border border-corporate-gold/40" />
          <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]">
            <img
              src="/images/contact/contact-support.jpg"
              alt="Corporate Wheels customer care controller assisting a caller"
              loading="lazy"
              className="aspect-[4/5] lg:aspect-[4/4.6] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/** Head Office — address card + live map. */
export function HeadOffice() {
  const query = encodeURIComponent(headOffice.address.join(", "));
  return (
    <section id="head-office" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes />
      <div className="container">
        <SectionHeading tagline={contactLabels.headOffice} title={headOffice.heading} className="!mb-10" />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <motion.a
            href={`https://www.google.com/maps/search/?api=1&query=${query}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${headOffice.address[0]} in Google Maps`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-corporate-gold/40 bg-gradient-to-br from-[#1a1508] via-[#0b0b0b] to-black p-8 sm:p-10 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-corporate-gold to-[#B8860B] text-black">
                <MapPin aria-hidden className="size-6" strokeWidth={1.8} />
              </span>
              <ArrowUpRight aria-hidden className="size-5 text-white/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-corporate-gold" />
            </div>
            <address className="mt-8 not-italic">
              {headOffice.address.map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                  className={`block ${i === 0 ? "font-heading text-2xl text-gradient-gold mb-2" : "text-lg text-white/80 leading-relaxed"}`}
                >
                  {line}
                </motion.span>
              ))}
            </address>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative min-h-[340px] overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]"
          >
            <iframe
              title={`Map — ${headOffice.address[0]}`}
              src={`https://www.google.com/maps?q=${query}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 dark:[filter:invert(0.92)_hue-rotate(180deg)_saturate(0.6)_brightness(0.95)]"
            />
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-corporate-gold/25" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** 24/7 Live Voice Contact & Support — cinematic band. */
export function LiveSupport() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const icons = [Headset, BellRing, PlaneLanding];
  return (
    <section ref={ref} id="live-support" className="relative isolate overflow-hidden py-16 md:py-24 scroll-mt-24">
      <div className="absolute inset-0 -z-10">
        <motion.img
          src="/images/contact/contact-band.jpg"
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
      <div className="container">
        <SectionHeading
          tagline={contactLabels.liveSupport}
          title={liveSupport.heading}
          subtitle={liveSupport.paragraphs[0]}
          className="!mb-12 max-w-3xl"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {liveSupport.bullets.map((b, i) => (
            <motion.article
              key={b.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`${cardBase} bg-white/90 dark:bg-[#0d0d0d]/80 p-7 hover:-translate-y-1`}
            >
              <span aria-hidden className="absolute inset-x-6 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-corporate-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              <IconBadge Icon={icons[i]} />
              <h3 className="mt-5 font-heading text-lg text-neutral-900 dark:text-white">{b.label}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{b.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
