import { motion } from "framer-motion";

export default function CorporateTravelHighlight() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_90%,rgba(230,167,0,0.06),transparent)]" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 sm:w-12 bg-corporate-gold/60" />
            <span className="w-1.5 h-1.5 rotate-45 bg-corporate-gold shrink-0" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-corporate-gold">
              Signature Service
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">
            Corporate Travel
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Good ground transportation is essential to keep the momentum
            going in business. We ensure the provision of a reliable and
            effective mobile office for your top management, visiting
            clients, and corporate team with confidential chauffeurs and
            immaculate vehicles.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative order-2"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
            <img
              src="/images/corporate-travel-highlight.jpg"
              alt="Corporate Wheels chauffeur greeting a business executive beside a luxury sedan"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-corporate-gold/5 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
