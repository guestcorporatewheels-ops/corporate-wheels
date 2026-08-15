import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Airport Transfers",
    desc: "Flight tracking, meet & greet, and complimentary wait time on arrival.",
  },
  {
    name: "Hourly Hire",
    desc: "A dedicated chauffeur and vehicle for meetings, events, or a day at your pace.",
  },
  {
    name: "City-to-City",
    desc: "Fixed-rate intercity travel with WiFi and refreshments on board.",
  },
  {
    name: "Business Travel",
    desc: "Corporate accounts with consolidated billing and priority booking.",
  },
  {
    name: "Event Transport",
    desc: "Coordinated fleet logistics for conferences, weddings, and private events.",
  },
  {
    name: "Chauffeur Hailing",
    desc: "On-demand chauffeured rides, booked in seconds from the app.",
  },
];

export default function ViewAllServices() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <section className="pt-36 pb-12">
        <div className="container">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-corporate-gold animate-pulse" />
            <span className="text-sm text-white/80">All Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-white mb-4">
            Every way to ride with{" "}
            <span className="text-gradient-gold">Corporate Wheels</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            From a single airport transfer to a full corporate travel
            program, here's everything we offer.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-corporate-gold/30 hover:bg-white/[0.04] transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-1.5 text-sm text-corporate-gold group-hover:gap-2.5 transition-all"
                >
                  Book {s.name}
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
