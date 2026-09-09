import { motion } from "framer-motion";

interface SectionHeadingProps {
  tagline: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  tagline,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-center max-w-2xl mx-auto mb-16 ${className}`}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="h-px w-8 sm:w-12 bg-corporate-gold/60" />
        <span className="w-1.5 h-1.5 rotate-45 bg-corporate-gold shrink-0" />
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-corporate-gold">
          {tagline}
        </span>
        <span className="w-1.5 h-1.5 rotate-45 bg-corporate-gold shrink-0" />
        <span className="h-px w-8 sm:w-12 bg-corporate-gold/60" />
      </div>
      <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
