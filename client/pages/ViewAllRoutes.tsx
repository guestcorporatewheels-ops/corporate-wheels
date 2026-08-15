import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";

const routes = [
  { from: "London", to: "Heathrow Airport", duration: "~45-60 min" },
  { from: "Manchester", to: "Manchester Airport", duration: "~30-40 min" },
  { from: "Birmingham", to: "City Centre", duration: "~20-30 min" },
];

export default function ViewAllRoutes() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Seo
        title="Popular Chauffeur Routes"
        description="Fixed-rate chauffeur routes between major UK cities and airports, with real-time pricing at booking."
        path="/routes"
      />
      <section className="pt-36 pb-12">
        <div className="container">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-corporate-gold animate-pulse" />
            <span className="text-sm text-white/80">All Routes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-white mb-4">
            Popular <span className="text-gradient-gold">routes</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Fixed-rate journeys with real-time pricing — get an exact quote
            when you book.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((r) => (
              <div
                key={`${r.from}-${r.to}`}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-corporate-gold/30 hover:bg-white/[0.04] transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {r.from} → {r.to}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Typical journey time {r.duration}. Exact fare shown at
                  booking.
                </p>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-1.5 text-sm text-corporate-gold group-hover:gap-2.5 transition-all"
                >
                  Book this route
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
