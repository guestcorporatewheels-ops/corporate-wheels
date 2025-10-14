import { Car, Plane, Clock3, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "City-to-City",
    desc: "Seamless long-distance luxury rides",
    icon: Car,
  },
  {
    title: "Airport Transfer",
    desc: "Flight-tracking, pickup ready when you land",
    icon: Plane,
  },
  {
    title: "Hourly Hire",
    desc: "Flexible booking by hour or day",
    icon: Clock3,
  },
  {
    title: "Chauffeur Hailing",
    desc: "Get a car within minutes",
    icon: MapPin,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-[radial-gradient(60%_60%_at_70%_0%,rgba(0,216,180,0.08),transparent)]"
    >
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl text-white">
            Our Services
          </h2>
          <p className="mt-2 text-muted-foreground">
            Choose the perfect ride for every occasion.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] hover:shadow-[0_0_25px_rgba(0,216,180,0.2)]"
            >
              <div className="p-2 inline-flex rounded-lg border border-white/10 text-secondary bg-black/40">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-white text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
