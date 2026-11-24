import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarClock,
  Car,
  Check,
  Clock3,
  Crown,
  FileCheck2,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Radio,
  Scale,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";
import AutoLink from "@/components/premium/AutoLink";
import { careersContent, careersLabels } from "./content";

const { intro, sections } = careersContent;
const [why, roles, , requirements, compliance, apply, desk] = sections;
const labels = careersLabels.sections;

const cardBase =
  "group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/85 dark:bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-corporate-gold/50 hover:shadow-[0_25px_50px_-25px_rgba(230,167,0,0.55)]";

function TopShine() {
  return (
    <span
      aria-hidden
      className="absolute inset-x-6 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-corporate-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
    />
  );
}

function IconBadge({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-corporate-gold/35 bg-corporate-gold/10 transition-transform duration-300 group-hover:scale-110">
      <Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.6} />
    </span>
  );
}

const reveal = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] as const },
});

/** Intro (two writer paragraphs, no heading in the doc). */
export function CareersIntro() {
  return (
    <section id="careers-intro" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
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
              src="/images/careers/careers-intro.jpg"
              alt="Professional Corporate Wheels chauffeur beside a luxury saloon"
              loading="lazy"
              className="aspect-[4/5] lg:aspect-[4/4.6] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        </motion.div>
        <div>
          <div className="mb-6 flex items-center justify-center lg:justify-start gap-3">
            <span aria-hidden className="h-px w-8 bg-corporate-gold/60 lg:hidden" />
            <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-corporate-gold">
              {careersLabels.introTagline}
            </span>
            <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
            <span aria-hidden className="h-px w-8 sm:w-12 bg-corporate-gold/60" />
          </div>
          {intro.map((p, i) => (
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
        </div>
      </div>
    </section>
  );
}

/** Why Drive with Corporate Wheels? — bento of 5 benefits. */
export function WhyDrive() {
  const icons = [Crown, Car, Radio, BadgeCheck, HeartHandshake];
  return (
    <section id="why-drive" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes />
      <div className="container">
        <SectionHeading tagline={labels[0]} title={why.heading} subtitle={why.paragraphs[0]} className="!mb-12" />
        <div className="grid gap-5 md:grid-cols-6">
          {why.bullets.map((b, i) => (
            <motion.article
              key={b.label}
              {...reveal(i)}
              className={`${cardBase} p-7 ${i < 2 ? "md:col-span-3" : "md:col-span-2"}`}
            >
              <TopShine />
              <IconBadge Icon={icons[i]} />
              <h3 className="mt-5 font-heading text-lg md:text-xl text-neutral-900 dark:text-white">{b.label}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{b.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Career Roles & Driving Positions Available — 3 role cards. */
export function Roles() {
  const icons = [BriefcaseBusiness, CalendarClock, Leaf];
  return (
    <section id="roles" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes variant="warm" />
      <div className="container">
        <SectionHeading tagline={labels[1]} title={roles.heading} subtitle={roles.paragraphs[0]} className="!mb-12" />
        <div className="grid gap-6 lg:grid-cols-3">
          {roles.bullets.map((b, i) => {
            const Icon = icons[i];
            return (
              <motion.article key={b.label} {...reveal(i)} className={`${cardBase} p-8`}>
                <TopShine />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-heading text-[7rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(230,167,0,0.2)]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-corporate-gold to-[#B8860B] text-black shadow-[0_10px_30px_-10px_rgba(230,167,0,0.8)]">
                    <Icon aria-hidden className="size-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 font-heading text-xl text-neutral-900 dark:text-white">{b.label}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Minimum Entry Requirements & Qualifications — checklist over a cinematic band. */
export function Requirements() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <section ref={ref} id="requirements" className="relative isolate overflow-hidden py-16 md:py-24 scroll-mt-24">
      <div className="absolute inset-0 -z-10">
        <motion.img
          src="/images/careers/careers-band.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          style={{ y }}
          className="absolute inset-0 -top-[10%] h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/92 dark:bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      <div className="container">
        <SectionHeading tagline={labels[3]} title={requirements.heading} subtitle={requirements.paragraphs[0]} className="!mb-12 max-w-3xl" />
        <ul className="grid gap-4 md:grid-cols-2">
          {requirements.bullets.map((b, i) => (
            <motion.li
              key={b.label}
              {...reveal(i)}
              className="group flex gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0d0d0d]/80 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-corporate-gold/50"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-corporate-gold text-black shadow-[0_0_18px_rgba(230,167,0,0.45)]">
                <Check aria-hidden className="size-4" strokeWidth={2.6} />
              </span>
              <div>
                <h3 className="font-heading text-base md:text-lg text-neutral-900 dark:text-white">{b.label}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Our Commitment to Fair Recruitment & Regulatory Compliance. */
export function Compliance() {
  const icons = [Scale, Radio, ShieldCheck];
  return (
    <section id="compliance" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes />
      <div className="container">
        <SectionHeading tagline={labels[4]} title={compliance.heading} subtitle={compliance.paragraphs[0]} className="!mb-12 max-w-3xl" />
        <div className="grid gap-6 lg:grid-cols-3">
          {compliance.bullets.map((b, i) => (
            <motion.article key={b.label} {...reveal(i)} className={`${cardBase} p-7`}>
              <TopShine />
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

/** How to Apply — 4-step vertical timeline. */
export function HowToApply() {
  const icons = [Mail, FileCheck2, Car, BadgeCheck];
  return (
    <section id="how-to-apply" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes variant="warm" />
      <div className="container">
        <SectionHeading tagline={labels[5]} title={apply.heading} subtitle={apply.paragraphs[0]} className="!mb-12 max-w-3xl" />
        <ol className="relative mx-auto max-w-3xl space-y-6">
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-7 top-4 bottom-4 w-px origin-top bg-gradient-to-b from-corporate-gold via-corporate-gold/60 to-corporate-gold/10"
          />
          {apply.bullets.map((b, i) => {
            const Icon = icons[i];
            return (
              <motion.li
                key={b.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-6"
              >
                <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-corporate-gold/60 bg-background shadow-[0_0_0_6px_hsl(var(--background)),0_0_25px_rgba(230,167,0,0.3)]">
                  <Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.7} />
                </span>
                <div className={`${cardBase} flex-1 p-6 hover:translate-y-0`}>
                  <TopShine />
                  <h3 className="font-heading text-lg text-neutral-900 dark:text-white">{b.label}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    <AutoLink text={b.text} />
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/** Corporate Wheels Limited — Chauffeur Recruitment Desk (contact panel). */
export function RecruitmentDesk() {
  const meta: Record<string, { Icon: LucideIcon; href: (v: string) => string; external?: boolean }> = {
    "Email Applications": { Icon: Mail, href: (v) => `mailto:${v}` },
    Telephone: { Icon: Phone, href: (v) => `tel:${v.replace(/\(0\)|[^\d+]/g, "")}` },
    Mobile: { Icon: Smartphone, href: (v) => `tel:${v.replace(/[^\d+]/g, "")}` },
    "Head Office Address": {
      Icon: MapPin,
      href: (v) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v)}`,
      external: true,
    },
  };
  return (
    <section id="recruitment-desk" className="relative isolate overflow-hidden pt-4 pb-16 md:pb-20 scroll-mt-24">
      <FloatingShapes />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] p-px"
        >
          <motion.div
            aria-hidden
            className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,#E6A700_60deg,transparent_120deg,transparent_240deg,#F4C430_300deg,transparent_360deg)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative overflow-hidden rounded-[calc(2.5rem-1px)] bg-white dark:bg-[#0b0b0b]">
            <img
              src="/images/careers/careers-hero.jpg"
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-25 dark:opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60 dark:from-black dark:via-black/85 dark:to-black/50" />
            <div className="relative px-6 py-12 sm:px-12 md:py-16">
              <SectionHeading align="left" tagline={labels[6]} title={desk.heading} className="!mb-8 !max-w-3xl" />
              <div className="grid gap-4 md:grid-cols-2">
                {desk.contacts.map((c) => {
                  const m = meta[c.label];
                  const Icon = m?.Icon ?? Clock3;
                  return (
                    <a
                      key={c.label}
                      href={m ? m.href(c.text) : undefined}
                      target={m?.external ? "_blank" : undefined}
                      rel={m?.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/75 dark:bg-white/[0.04] p-5 backdrop-blur-md transition-colors hover:border-corporate-gold/50"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-corporate-gold/15 border border-corporate-gold/30">
                        <Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.6} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm text-muted-foreground">{c.label}:</span>
                        <span className="mt-0.5 block break-words font-medium text-neutral-900 dark:text-white group-hover:text-corporate-gold transition-colors">
                          {c.text}
                        </span>
                      </span>
                      <ArrowUpRight aria-hidden className="size-4 shrink-0 text-muted-foreground group-hover:text-corporate-gold transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
