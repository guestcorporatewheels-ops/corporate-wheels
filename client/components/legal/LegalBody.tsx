import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import FloatingShapes from "@/components/landing/FloatingShapes";
import ContactLinkText from "@/components/premium/ContactLinkText";
import type { LegalBlock, LegalDoc } from "./types";

const ease = [0.22, 1, 0.36, 1] as const;

function ContactCards({ lines }: { lines: { label: string; text: string }[] }) {
  const others = lines.filter((l) => l.label !== "Address");
  // Odd number of short cards: let the last one fill its row instead of leaving a gap.
  const wideLast = others.length % 2 === 1 ? others[others.length - 1] : undefined;
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {lines.map((l) => {
        const isEmail = l.label === "Email";
        const isAddress = l.label === "Address";
        const Icon = isEmail ? Mail : isAddress ? MapPin : Phone;
        // Only a full street address gets a map link (not "Headquarters, UK").
        const mapHref = isAddress && /\d/.test(l.text)
          ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.text)}`
          : undefined;
        const body = (
          <>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-corporate-gold/30 bg-corporate-gold/15">
              <Icon aria-hidden className="size-5 text-corporate-gold" strokeWidth={1.6} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm text-muted-foreground">{l.label}:</span>
              <span className="mt-0.5 block break-words font-medium text-neutral-900 dark:text-white">
                {isAddress ? l.text : <ContactLinkText text={l.text} />}
              </span>
            </span>
            {mapHref && <ArrowUpRight aria-hidden className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-corporate-gold" />}
          </>
        );
        const cls = `group flex items-center gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] p-4 sm:p-5 transition-colors hover:border-corporate-gold/50 ${
          isAddress ? "sm:col-span-2" : ""
        }`;
        const wide = isAddress || l === wideLast;
        return (
          <li key={l.label} className={wide ? "sm:col-span-2" : ""}>
            {mapHref ? (
              <a href={mapHref} target="_blank" rel="noopener noreferrer" className={cls}>
                {body}
              </a>
            ) : (
              <div className={cls}>{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function Blocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h3":
            return (
              <h3 key={i} className="mt-8 first:mt-0 flex items-start gap-3 font-heading text-xl text-neutral-900 dark:text-white">
                <span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-corporate-gold" />
                {b.text}
              </h3>
            );
          case "h4":
            return (
              <h4 key={i} className="mt-6 font-heading text-lg text-corporate-gold">
                {b.text}
              </h4>
            );
          case "p":
            return (
              <p key={i} className="mt-4 first:mt-0 text-base md:text-lg leading-relaxed text-muted-foreground">
                <ContactLinkText text={b.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 space-y-3">
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex gap-4 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.03] p-4 sm:p-5"
                  >
                    <span aria-hidden className="mt-2 w-1.5 h-1.5 shrink-0 rotate-45 bg-corporate-gold" />
                    <p className="leading-relaxed text-muted-foreground">
                      {it.label && (
                        <>
                          <strong className="font-heading font-medium text-neutral-900 dark:text-white">{it.label}:</strong>{" "}
                        </>
                      )}
                      <ContactLinkText text={it.text} />
                    </p>
                  </li>
                ))}
              </ul>
            );
          case "contact":
            return <ContactCards key={i} lines={b.lines} />;
          default:
            return <Fragment key={i} />;
        }
      })}
    </>
  );
}

function useActive(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export const legalIds = (doc: LegalDoc, prefix: string) => doc.sections.map((_, i) => `${prefix}-${i + 1}`);

/** Long-form legal document: sticky contents, numbered section cards, contact cards. */
export default function LegalBody({
  doc,
  prefix,
  taglines,
  skipLeadFirst = false,
}: {
  doc: LegalDoc;
  prefix: string;
  taglines: readonly string[];
  /** Drop the first lead paragraph (already shown in the hero). */
  skipLeadFirst?: boolean;
}) {
  const ids = legalIds(doc, prefix);
  const active = useActive(ids);
  const lead = skipLeadFirst ? doc.lead.slice(1) : doc.lead;
  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id={`${prefix}-body`} className="relative isolate overflow-x-clip py-12 md:py-16">
      <FloatingShapes />
      <div className="container grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
        <aside className="hidden lg:block">
          <nav
            aria-label={`${doc.title} contents`}
            className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-5 backdrop-blur-xl"
          >
            <div aria-hidden className="mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
              <span className="h-px w-10 bg-gradient-to-r from-corporate-gold/70 to-transparent" />
            </div>
            <ol className="space-y-1">
              {doc.sections.map((s, i) => {
                const isActive = active === ids[i];
                return (
                  <li key={ids[i]}>
                    <a
                      href={`#${ids[i]}`}
                      onClick={(e) => {
                        e.preventDefault();
                        jump(ids[i]);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block rounded-xl py-2.5 pl-4 pr-3 text-sm transition-colors ${
                        isActive ? "bg-corporate-gold/10 text-neutral-900 dark:text-white" : "text-muted-foreground hover:text-neutral-900 dark:hover:text-white"
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

        <div className="min-w-0 space-y-6">
          {lead.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease }}
              className="relative overflow-hidden rounded-3xl p-px"
            >
              <motion.div
                aria-hidden
                className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,#E6A700_60deg,transparent_120deg,transparent_240deg,#F4C430_300deg,transparent_360deg)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative rounded-[calc(1.5rem-1px)] bg-white dark:bg-[#0b0b0b] p-6 sm:p-9">
                <div aria-hidden className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(60%_80%_at_0%_0%,rgba(230,167,0,0.14),transparent_70%)]" />
                <div className="relative">
                  <Blocks blocks={lead} />
                </div>
              </div>
            </motion.div>
          )}

          {doc.sections.map((s, i) => {
            const num = s.heading.match(/^(\d+)\./)?.[1];
            return (
              <motion.article
                key={ids[i]}
                id={ids[i]}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6, ease }}
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
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-corporate-gold">{taglines[i]}</span>
                    <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
                    <span aria-hidden className="h-px w-10 bg-corporate-gold/50" />
                  </div>
                  <h2 className="mb-5 pr-16 font-heading text-2xl md:text-3xl text-neutral-900 dark:text-white">{s.heading}</h2>
                  <Blocks blocks={s.blocks} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
