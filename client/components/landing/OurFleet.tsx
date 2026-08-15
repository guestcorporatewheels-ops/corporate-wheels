import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import { fleetCategoriesData } from "@/data/fleet-data";

const featured = [
  "executive-cars",
  "luxury-class",
  "premium-suvs",
  "business-vans",
  "electric-class",
  "vintage-cars",
];

export default function OurFleet() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_0%,rgba(230,167,0,0.06),transparent)]" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">
              Our Fleet
            </h2>
            <p className="text-muted-foreground text-lg">
              From executive sedans to spacious vans, every vehicle is
              maintained to the highest standard and driven by a
              professional chauffeur.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((slug, i) => {
            const data = fleetCategoriesData[slug];
            if (!data) return null;
            const { overviewCard } = data;
            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-corporate-gold/40 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={overviewCard.image}
                    alt={`Corporate Wheels ${overviewCard.carName} — ${data.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-xl text-white mb-0.5">
                      {data.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {overviewCard.carName}
                    </p>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {data.subtitle}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-corporate-gold" />
                      {overviewCard.pax}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-corporate-gold" />
                      {overviewCard.luggage}
                    </span>
                  </div>
                  <Link
                    to={`/fleet/${slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-corporate-gold group-hover:gap-2.5 transition-all"
                  >
                    View class
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/fleet/executive-cars"
            className="inline-flex items-center bg-gradient-to-r btn-gradient text-black px-8 py-3 rounded-md font-semibold shadow-lg transition-all hover:shadow-corporate-gold/40"
          >
            Explore the full fleet
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
