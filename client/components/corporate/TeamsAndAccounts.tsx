import { motion } from "framer-motion";
import { Check, Crown, Lock, Route, ShieldCheck, UserRoundCheck, Wifi } from "lucide-react";
import SectionHeading from "@/components/landing/SectionHeading";
import FloatingShapes from "@/components/landing/FloatingShapes";
import { corporateContent, corporateLabels } from "./content";

const [teams, accounts] = corporateContent.sections;
const accountCard = accounts.subsections[0];

const teamIcons = [UserRoundCheck, Wifi, Lock, Crown];
const accountIcons = [ShieldCheck, Route];

/** S1 — Flawless Mobility for Corporate Teams */
export function TeamsIntro() {
  return (
    <section id="corporate-teams" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
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
              src="/images/corporate/corporate-teams.jpg"
              alt="Corporate team walking from two chauffeur-driven cars to an office building"
              loading="lazy"
              className="aspect-[4/5] lg:aspect-[4/4.4] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            tagline={corporateLabels.sections[0]}
            title={teams.heading}
            subtitle={teams.paragraphs[0]}
            className="!mb-8"
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {teams.bullets.map((b, i) => {
              const Icon = teamIcons[i];
              return (
                <motion.li
                  key={b.text}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex items-center gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-corporate-gold/50"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-corporate-gold/35 bg-corporate-gold/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.6} />
                  </span>
                  <span className="font-heading text-[15px] text-neutral-900 dark:text-white">{b.text}</span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** S2 — Corporate Account Benefits (+ H3 Account Benefits as a premium account card) */
export function AccountBenefits() {
  return (
    <section id="corporate-accounts" className="relative isolate overflow-hidden py-12 md:py-16 scroll-mt-24">
      <FloatingShapes />
      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            tagline={corporateLabels.sections[1]}
            title={accounts.heading}
            subtitle={accounts.paragraphs[0]}
            className="!mb-8"
          />
          <ul className="space-y-4 max-w-lg mx-auto lg:mx-0">
            {accounts.bullets.map((b, i) => {
              const Icon = accountIcons[i];
              return (
                <motion.li
                  key={b.text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-corporate-gold text-black shadow-[0_0_20px_rgba(230,167,0,0.45)]">
                    <Icon aria-hidden className="size-5" strokeWidth={2} />
                  </span>
                  <span className="font-medium text-neutral-900 dark:text-white">{b.text}</span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Premium account card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1200 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-corporate-gold/20 blur-3xl" />
          <div className="group relative overflow-hidden rounded-[2rem] border border-corporate-gold/40 bg-gradient-to-br from-[#1a1508] via-[#0b0b0b] to-[#000] p-7 sm:p-9 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
            {/* Moving sheen */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["0%", "320%"] }}
              transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
            />
            <div className="flex items-center justify-between">
              <img src="/logo.png" alt="" aria-hidden className="size-14 object-contain" />
              <span aria-hidden className="h-9 w-12 rounded-md bg-gradient-to-br from-[#F4C430] to-[#B8860B] opacity-90" />
            </div>
            <h3 className="mt-8 font-heading text-2xl text-gradient-gold">{accountCard.heading}</h3>
            <dl className="mt-6 divide-y divide-white/10">
              {accountCard.bullets.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <dt className="text-sm text-white/60">{b.label}:</dt>
                  <dd className="flex items-center gap-2 text-right font-medium text-white">
                    <Check aria-hidden className="size-4 text-corporate-gold" />
                    {b.text}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
