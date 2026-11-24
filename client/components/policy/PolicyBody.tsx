import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CalendarClock,
  Clock3,
  FileText,
  Info,
  LogIn,
  Mail,
  PlaneLanding,
  PlaneTakeoff,
  Route,
  Timer,
  type LucideIcon,
} from "lucide-react";
import FloatingShapes from "@/components/landing/FloatingShapes";
import { policyContent, policyLabels } from "./content";

const { sections } = policyContent;
const policies = sections.slice(0, -1);
const assistance = sections[sections.length - 1];

export const policyIds = sections.map((_, i) => (i < sections.length - 1 ? `policy-${i + 1}` : "policy-help"));

const icons: LucideIcon[][] = [
  [CalendarClock, FileText],
  [Info],
  [PlaneLanding, PlaneTakeoff],
  [Route, Clock3],
  [Timer, Building2],
];

const EMAIL = "support@corporatewheels.co.uk";

/** Renders the writer's text unchanged, turning known references into links. */
function LinkedText({ text }: { text: string }) {
  const parts = text.split(/(Terms and Conditions|support@corporatewheels\.co\.uk)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p === "Terms and Conditions")
          return (
            <Link key={i} to="/terms-and-conditions" className="text-corporate-gold underline decoration-corporate-gold/40 underline-offset-4 hover:decoration-corporate-gold">
              {p}
            </Link>
          );
        if (p === EMAIL)
          return (
            <a key={i} href={`mailto:${EMAIL}`} className="text-corporate-gold underline decoration-corporate-gold/40 underline-offset-4 hover:decoration-corporate-gold">
              {p}
            </a>
          );
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export default function PolicyBody() {
  const active = useActiveSection(policyIds);
  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="relative isolate overflow-x-clip py-12 md:py-16">
      <FloatingShapes />
      <div className="container grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
        {/* Sticky contents */}
        <aside className="hidden lg:block">
          <nav aria-label="Policy contents" className="sticky top-28 rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-5 backdrop-blur-xl">
            <div aria-hidden className="mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
              <span className="h-px w-10 bg-gradient-to-r from-corporate-gold/70 to-transparent" />
            </div>
            <ol className="space-y-1">
              {sections.map((s, i) => {
                const id = policyIds[i];
                const isActive = active === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        jump(id);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block rounded-xl py-2.5 pl-4 pr-3 text-sm transition-colors ${
                        isActive
                          ? "bg-corporate-gold/10 text-neutral-900 dark:text-white"
                          : "text-muted-foreground hover:text-neutral-900 dark:hover:text-white"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-corporate-gold transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                      />
                      {s.heading}
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </aside>

        <div className="space-y-6">
          {policies.map((s, i) => {
            const num = s.heading.match(/^(\d+)\./)?.[1];
            return (
              <motion.article
                key={s.heading}
                id={policyIds[i]}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative scroll-mt-28 overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/85 dark:bg-white/[0.03] p-6 sm:p-9 backdrop-blur-sm transition-colors duration-300 hover:border-corporate-gold/40"
              >
                {num && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-6 select-none font-heading text-[8rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(230,167,0,0.22)] transition-all duration-500 group-hover:[-webkit-text-stroke:1px_rgba(230,167,0,0.45)]"
                  >
                    {num.padStart(2, "0")}
                  </span>
                )}
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-corporate-gold">
                      {policyLabels.sections[i]}
                    </span>
                    <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
                    <span aria-hidden className="h-px w-10 bg-corporate-gold/50" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl text-neutral-900 dark:text-white">{s.heading}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      <LinkedText text={p} />
                    </p>
                  ))}

                  <ul className="mt-7 space-y-3">
                    {s.bullets.map((b, j) => {
                      const Icon = icons[i]?.[j] ?? Info;
                      return (
                        <li
                          key={j}
                          className="flex gap-4 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.03] p-4 sm:p-5"
                        >
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-corporate-gold/35 bg-corporate-gold/10">
                            <Icon aria-hidden className="size-[18px] text-corporate-gold" strokeWidth={1.7} />
                          </span>
                          <p className="leading-relaxed text-muted-foreground">
                            {"label" in b && b.label && (
                              <>
                                <strong className="font-heading font-medium text-neutral-900 dark:text-white">{b.label}:</strong>{" "}
                              </>
                            )}
                            <LinkedText text={b.text} />
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.article>
            );
          })}

          {/* Need Assistance? */}
          <motion.article
            id={policyIds[policyIds.length - 1]}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative scroll-mt-28 overflow-hidden rounded-3xl p-px"
          >
            <motion.div
              aria-hidden
              className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,#E6A700_60deg,transparent_120deg,transparent_240deg,#F4C430_300deg,transparent_360deg)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative rounded-[calc(1.5rem-1px)] bg-white dark:bg-[#0b0b0b] p-6 sm:p-9">
              <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(60%_80%_at_0%_0%,rgba(230,167,0,0.14),transparent_70%)]" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-3">
                  <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-corporate-gold">
                    {policyLabels.sections[sections.length - 1]}
                  </span>
                  <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
                  <span aria-hidden className="h-px w-10 bg-corporate-gold/50" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl text-neutral-900 dark:text-white">{assistance.heading}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{assistance.paragraphs[0]}</p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {assistance.bullets.map((b, j) => {
                    const isEmail = b.text === EMAIL;
                    const Icon = isEmail ? Mail : LogIn;
                    const inner = (
                      <>
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-corporate-gold/15 border border-corporate-gold/30">
                          <Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.6} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm text-muted-foreground">{"label" in b ? b.label : ""}:</span>
                          <span className="mt-0.5 block break-words font-medium text-neutral-900 dark:text-white group-hover:text-corporate-gold transition-colors">
                            {b.text}
                          </span>
                        </span>
                        <ArrowUpRight aria-hidden className="size-4 shrink-0 text-muted-foreground group-hover:text-corporate-gold transition-colors" />
                      </>
                    );
                    const cls =
                      "group flex items-center gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] p-5 transition-colors hover:border-corporate-gold/50";
                    return isEmail ? (
                      <a key={j} href={`mailto:${EMAIL}`} className={cls}>
                        {inner}
                      </a>
                    ) : (
                      <Link key={j} to="/login" className={cls}>
                        {inner}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
