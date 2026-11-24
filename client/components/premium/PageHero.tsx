import { useId, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import FloatingShapes from "@/components/landing/FloatingShapes";

interface PageHeroProps {
  /** Gold eyebrow label. */
  tagline: string;
  /** Page title (H1). */
  title: string;
  /** Trailing words of `title` to render in gold (must be an exact suffix). */
  goldSuffix?: string;
  subtitle?: ReactNode;
  /** Current page label for the breadcrumb. */
  breadcrumb: string;
  image: string;
  /** Element id the scroll cue jumps to. */
  nextId?: string;
  /** Extra content under the subtitle (e.g. quick links). */
  children?: ReactNode;
}

/** Cinematic page hero shared by content pages (About, Services, …). */
export default function PageHero({
  tagline,
  title,
  goldSuffix,
  subtitle,
  breadcrumb,
  image,
  nextId,
  children,
}: PageHeroProps) {
  const gradId = `heroLine-${useId().replace(/:/g, "")}`;
  const hasGold = goldSuffix && title.endsWith(goldSuffix);
  const lead = hasGold ? title.slice(0, title.length - goldSuffix.length) : title;

  const scrollToNext = () => {
    if (nextId) {
      document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative isolate overflow-hidden min-h-[62vh] flex items-center pt-32 pb-20">
      {/* Cinematic background */}
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={image}
          alt=""
          aria-hidden
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/30 dark:from-black/90 dark:via-black/65 dark:to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-white/30 dark:to-black/40" />
        <svg
          aria-hidden
          className="absolute inset-x-0 bottom-24 h-40 w-full opacity-40 dark:opacity-30"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M0 120 C 360 40, 720 160, 1080 80 S 1440 60, 1440 60"
            stroke={`url(#${gradId})`}
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
          />
          <motion.path
            d="M0 140 C 400 80, 760 150, 1120 100 S 1440 90, 1440 90"
            stroke={`url(#${gradId})`}
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.8 }}
          />
          <defs>
            <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#E6A700" stopOpacity="0" />
              <stop offset="50%" stopColor="#E6A700" />
              <stop offset="100%" stopColor="#F4C430" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <FloatingShapes />

      <div className="container relative">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="hover:text-corporate-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5" aria-hidden />
            <span className="text-neutral-900 dark:text-white" aria-current="page">
              {breadcrumb}
            </span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 flex origin-center lg:origin-left items-center justify-center lg:justify-start gap-3"
          >
            <span aria-hidden className="h-px w-10 sm:w-14 bg-gradient-to-r from-transparent to-corporate-gold/80 lg:hidden" />
            <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-corporate-gold">
              {tagline}
            </span>
            <span aria-hidden className="w-1.5 h-1.5 rotate-45 bg-corporate-gold" />
            <span aria-hidden className="h-px w-10 sm:w-14 bg-gradient-to-r from-corporate-gold/80 to-transparent" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-neutral-900 dark:text-white"
          >
            {lead}
            {hasGold && <span className="text-gradient-gold">{goldSuffix}</span>}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto lg:mx-0"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {nextId && !children && (
        <button
          type="button"
          onClick={scrollToNext}
          aria-label="Scroll to next section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-muted-foreground hover:text-corporate-gold transition-colors"
        >
          <span className="relative flex h-10 w-6 justify-center rounded-full border border-current">
            <motion.span
              className="mt-2 block h-2 w-1 rounded-full bg-corporate-gold"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          <ChevronDown className="size-4 animate-bounce" aria-hidden />
        </button>
      )}
    </section>
  );
}
