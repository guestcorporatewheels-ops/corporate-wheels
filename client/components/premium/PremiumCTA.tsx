import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/landing/FloatingShapes";
interface PremiumCTAProps {
  tagline: string;
  heading: string;
  /** Trailing words of `heading` to render in gold (must be an exact suffix). */
  goldSuffix?: string;
  text: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
  image?: string;
  /** Optional "Label: value" highlights shown under the buttons. */
  highlights?: readonly { label?: string; text: string }[];
}

/** Closing call-to-action panel with animated gold border, shared by content pages. */
export default function PremiumCTA({
  tagline,
  heading,
  goldSuffix,
  text,
  primary,
  secondary,
  image = "/images/why-choose-chauffeur.png",
  highlights,
}: PremiumCTAProps) {
  const hasGold = goldSuffix && heading.endsWith(goldSuffix);
  const lead = hasGold ? heading.slice(0, heading.length - goldSuffix.length) : heading;

  return (
    <section className="relative isolate overflow-hidden pt-4 pb-16 md:pb-20">
      <FloatingShapes />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] p-px"
        >
          {/* Animated gold border */}
          <motion.div
            aria-hidden
            className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,#E6A700_60deg,transparent_120deg,transparent_240deg,#F4C430_300deg,transparent_360deg)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative overflow-hidden rounded-[calc(2.5rem-1px)] bg-white dark:bg-[#0b0b0b]">
            <img
              src={image}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-30 dark:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40 dark:from-black dark:via-black/80 dark:to-black/30" />
            <div className="absolute inset-0 bg-[radial-gradient(50%_80%_at_0%_50%,rgba(230,167,0,0.18),transparent_70%)]" />

            <div className="relative px-6 py-12 sm:px-12 md:py-16 lg:px-16 text-center lg:text-left">
              <div className="mb-6 flex items-center justify-center lg:justify-start gap-3">
                <span aria-hidden className="h-px w-10 bg-corporate-gold/60 lg:hidden" />
                <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-corporate-gold">
                  {tagline}
                </span>
                <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
                <span aria-hidden className="h-px w-10 sm:w-14 bg-corporate-gold/60" />
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-neutral-900 dark:text-white max-w-2xl mx-auto lg:mx-0">
                {lead}
                {hasGold && <span className="text-gradient-gold">{goldSuffix}</span>}
              </h2>
              <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                {text}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button asChild variant="glow" size="lg" className="w-full sm:w-auto px-8">
                  <Link to={primary.to}>
                    {primary.label}
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                {secondary && (
                  <Button asChild variant="outline-glow" size="lg" className="w-full sm:w-auto px-8">
                    <Link to={secondary.to}>{secondary.label}</Link>
                  </Button>
                )}
              </div>
              {highlights?.length ? (
                <ul className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  {highlights.map((h) => (
                    <li
                      key={h.label ?? h.text}
                      className="flex items-center gap-2 rounded-full border border-corporate-gold/30 bg-white/70 dark:bg-white/[0.05] px-4 py-2 text-sm backdrop-blur-md"
                    >
                      <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
                      {h.label && <span className="text-muted-foreground">{h.label}:</span>}
                      <span className="font-medium text-neutral-900 dark:text-white">{h.text}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
