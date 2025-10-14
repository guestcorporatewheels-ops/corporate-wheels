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
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3, ease: "easeOut" }}
                whileHover={{
                  scale: 1,
                  boxShadow: "0 0 35px rgba(0, 216, 180, 0.25)",  
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm cursor-pointer transition-all duration-100 ease-out"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ y: -3, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-2 inline-flex rounded-lg border border-white/10 text-secondary bg-black/40 transition-transform duration-300"
                >
                  <Icon className="size-5 text-[hsl(var(--primary))]" />
                </motion.div>

                {/* Text */}
                <h3 className="mt-4 text-white text-lg font-medium group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-gray-300 transition-colors duration-300">
                  {s.desc}
                </p>

                {/* Glow Line */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
