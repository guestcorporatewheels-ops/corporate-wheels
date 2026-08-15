import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Seo from "@/components/Seo";

const cities = [
  { name: "London", desc: "Our flagship market — airport, event, and corporate coverage." },
  { name: "Manchester", desc: "Full airport transfer and hourly hire coverage." },
  { name: "Birmingham", desc: "City centre transfers and business travel routes." },
  { name: "Glasgow", desc: "Airport pickups and intercity connections." },
  { name: "Leeds", desc: "Corporate and event transport across the city." },
  { name: "Liverpool", desc: "Airport, cruise terminal, and city transfers." },
];

export default function ViewAllCities() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Seo
        title="Cities We Operate In"
        description="Corporate Wheels chauffeur coverage across London, Manchester, Birmingham, Glasgow, Leeds, and Liverpool."
        path="/cities"
      />
      <section className="pt-36 pb-12">
        <div className="container">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-corporate-gold animate-pulse" />
            <span className="text-sm text-white/80">All Cities</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-white mb-4">
            Cities we <span className="text-gradient-gold">operate in</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Vetted chauffeurs and premium vehicles, ready across the UK.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((c) => (
              <div
                key={c.name}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-corporate-gold/30 hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-corporate-gold" />
                  <h3 className="text-lg font-semibold text-white">
                    {c.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
                <Link
                  to="/city-to-city"
                  className="inline-flex items-center gap-1.5 text-sm text-corporate-gold group-hover:gap-2.5 transition-all"
                >
                  View routes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
