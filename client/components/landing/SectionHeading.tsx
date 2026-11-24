import { motion } from "framer-motion";

interface SectionHeadingProps {
  /** Omit for an ornament-only eyebrow (no extra copy). */
  tagline?: string;
  title: string;
  subtitle?: string;
  className?: string;
  /** Centered (default) for stacked sections, left for split layouts. */
  align?: "center" | "left";
}

export default function SectionHeading({
  tagline,
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`max-w-2xl mb-16 ${
        isLeft ? "text-center lg:text-left mx-auto lg:mx-0" : "text-center mx-auto"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-3 mb-4 justify-center ${
          isLeft ? "lg:justify-start" : ""
        }`}
      >
        <span
          className={`h-px w-8 sm:w-12 bg-corporate-gold/60 ${isLeft ? "lg:hidden" : ""}`}
        />
        <span className="w-1.5 h-1.5 rotate-45 bg-corporate-gold shrink-0" />
        {tagline && (
          <>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-corporate-gold">
              {tagline}
            </span>
            <span className="w-1.5 h-1.5 rotate-45 bg-corporate-gold shrink-0" />
          </>
        )}
        <span className="h-px w-8 sm:w-12 bg-corporate-gold/60" />
      </div>
      <h2 className="text-3xl md:text-4xl font-heading text-neutral-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
