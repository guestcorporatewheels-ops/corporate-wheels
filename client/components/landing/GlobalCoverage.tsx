import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ukCities = [
  "London",
  "Manchester",
  "Birmingham",
  "Glasgow",
  "Leeds",
  "Liverpool",
];

const partnerHubs = [
  "New York",
  "Los Angeles",
  "Paris",
  "Dubai",
  "Singapore",
  "Berlin",
];

export default function GlobalCoverage() {
  return (
    <section className="py-24 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_100%,rgba(230,167,0,0.06),transparent)]" />
      <div className="container relative">
        <SectionHeading
          tagline="Where We Operate"
          title="UK Coverage & Global Network"
          subtitle="We have complete coverage at all main business centres in the UK as well as at all major international airports. We can also arrange chauffeur transfers for you at selected international destinations through our partner network."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-corporate-gold/20 bg-white/[0.02] p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-corporate-gold mb-4">
              Our UK Operations
            </h3>
            <ul className="space-y-2.5">
              {ukCities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2.5 text-white/90"
                >
                  <MapPin className="w-4 h-4 text-corporate-gold shrink-0" />
                  {city}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Our Abroad Operations
            </h3>
            <ul className="space-y-2.5">
              {partnerHubs.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2.5 text-white/70"
                >
                  <MapPin className="w-4 h-4 text-white/40 shrink-0" />
                  {city}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
