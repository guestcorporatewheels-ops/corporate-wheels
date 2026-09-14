import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function AirportTransferHighlight() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_10%,rgba(230,167,0,0.06),transparent)]" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative order-1"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
            <img
              src="/images/airport-transfer-highlight.jpg"
              alt="Corporate Wheels chauffeur greeting a client with a name sign at the airport arrivals hall"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-corporate-gold/5 blur-2xl" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 sm:w-12 bg-corporate-gold/60" />
            <span className="w-1.5 h-1.5 rotate-45 bg-corporate-gold shrink-0" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-corporate-gold">
              Signature Service
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">
            Airport Transfers
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            No more hassles about going to the airport anymore. Our
            chauffeurs monitor your flight status in real time and plan for
            your pick-up in case of any delay or even early arrival. Make
            full use of your free waiting period with our meet and greet
            services at the arrivals terminal.
          </p>
          <Button asChild variant="glow" size="lg">
            <Link to="/airport-transfer">Book an Airport Transfer</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
