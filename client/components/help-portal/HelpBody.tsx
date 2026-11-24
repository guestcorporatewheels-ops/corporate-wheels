import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  CalendarCheck2,
  Car,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  PlaneLanding,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import FloatingShapes from "@/components/landing/FloatingShapes";
import ContactLinkText from "@/components/premium/ContactLinkText";
import { helpContent, helpLabels } from "./content";

const { categories, desk } = helpContent;
const catIcons: LucideIcon[] = [CalendarCheck2, PlaneLanding, Car, ShieldCheck, Briefcase];
export const categoryIds = categories.map((_, i) => `help-cat-${i + 1}`);

const matches = (q: string, ...texts: readonly string[]) => {
  const needle = q.trim().toLowerCase();
  return !needle || texts.some((t) => t.toLowerCase().includes(needle));
};

function FaqItem({
  question,
  answer,
  open,
  onToggle,
  id,
}: {
  question: string;
  answer: readonly string[];
  open: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        open
          ? "border-corporate-gold/50 bg-white dark:bg-white/[0.05] shadow-[0_20px_45px_-30px_rgba(230,167,0,0.6)]"
          : "border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.02] hover:border-corporate-gold/30"
      }`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left"
        >
          <span className={`font-heading text-base md:text-lg ${open ? "text-corporate-gold" : "text-neutral-900 dark:text-white"}`}>
            {question}
          </span>
          <span
            aria-hidden
            className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              open ? "rotate-180 border-corporate-gold bg-corporate-gold text-black" : "border-black/15 dark:border-white/15 text-muted-foreground"
            }`}
          >
            <ChevronDown className="size-4" />
          </span>
        </button>
      </h3>
      {/* Answer stays in the DOM when collapsed (grid-rows 0fr → 1fr) for SEO and find-in-page. */}
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 px-5 sm:px-6 pb-6 leading-relaxed text-muted-foreground">
            {answer.map((p, i) => (
              <p key={i}>
                <ContactLinkText text={p} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function useActiveCategory() {
  const [active, setActive] = useState(categoryIds[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    categoryIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

export default function HelpBody({ query }: { query: string }) {
  const [openKey, setOpenKey] = useState<string | null>("0-0");
  const active = useActiveCategory();

  const filtered = useMemo(
    () =>
      categories.map((c) => ({
        ...c,
        visible: c.items.map((it) => matches(query, c.heading, it.question, ...it.answer)),
      })),
    [query],
  );
  const anyVisible = filtered.some((c) => c.visible.some(Boolean));
  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="help-faqs" className="relative isolate overflow-x-clip py-12 md:py-16">
      <FloatingShapes />
      <div className="container grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
        {/* Sticky categories */}
        <aside className="hidden lg:block">
          <nav aria-label="Help categories" className="sticky top-28 rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-4 backdrop-blur-xl">
            <ol className="space-y-1">
              {categories.map((c, i) => {
                const id = categoryIds[i];
                const isActive = active === id;
                const Icon = catIcons[i];
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        jump(id);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors ${
                        isActive ? "bg-corporate-gold/10 text-neutral-900 dark:text-white" : "text-muted-foreground hover:text-neutral-900 dark:hover:text-white"
                      }`}
                    >
                      <Icon aria-hidden className={`size-4 shrink-0 ${isActive ? "text-corporate-gold" : ""}`} />
                      {c.heading}
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </aside>

        <div className="space-y-12">
          {!anyVisible && (
            <p role="status" className="rounded-2xl border border-corporate-gold/30 bg-corporate-gold/5 p-6 text-center text-muted-foreground">
              {helpLabels.noResults}
            </p>
          )}
          {filtered.map((c, ci) => {
            if (!c.visible.some(Boolean)) return null;
            const Icon = catIcons[ci];
            return (
              <motion.div
                key={c.heading}
                id={categoryIds[ci]}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="scroll-mt-28"
              >
                <div className="mb-6 flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-corporate-gold to-[#B8860B] text-black shadow-[0_10px_30px_-12px_rgba(230,167,0,0.8)]">
                    <Icon aria-hidden className="size-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-corporate-gold">{helpLabels.categoryTaglines[ci]}</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl text-neutral-900 dark:text-white">{c.heading}</h2>
                  </div>
                </div>
                <div className="space-y-3">
                  {c.items.map((it, ii) => {
                    if (!c.visible[ii]) return null;
                    const key = `${ci}-${ii}`;
                    return (
                      <FaqItem
                        key={key}
                        id={`faq-${key}`}
                        question={it.question}
                        answer={it.answer}
                        open={openKey === key || !!query.trim()}
                        onToggle={() => setOpenKey(openKey === key ? null : key)}
                      />
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

          {/* Contact & Support Desk */}
          <motion.div
            id="support-desk"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
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
                <div className="mb-2 flex items-center gap-2">
                  <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-corporate-gold">{helpLabels.deskTagline}</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl text-neutral-900 dark:text-white">{desk.heading}</h2>
                <ul className="mt-6 space-y-3">
                  {desk.lines.map((line, i) => {
                    const Icon = [Phone, Mail, MapPin][i] ?? Phone;
                    const isAddress = line.startsWith("Head Office:");
                    const body = (
                      <>
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-corporate-gold/15 border border-corporate-gold/30">
                          <Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.6} />
                        </span>
                        <span className="min-w-0 flex-1 leading-relaxed text-neutral-800 dark:text-white/85">
                          {isAddress ? line : <ContactLinkText text={line} />}
                        </span>
                        {isAddress && <ArrowUpRight aria-hidden className="size-4 shrink-0 text-muted-foreground group-hover:text-corporate-gold transition-colors" />}
                      </>
                    );
                    const cls = "group flex items-center gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] p-4 sm:p-5 transition-colors hover:border-corporate-gold/50";
                    return (
                      <li key={line}>
                        {isAddress ? (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(line.replace(/^Head Office:\s*/, ""))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cls}
                          >
                            {body}
                          </a>
                        ) : (
                          <div className={cls}>{body}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
