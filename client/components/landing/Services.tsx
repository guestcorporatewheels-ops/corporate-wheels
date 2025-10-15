import { motion } from "framer-motion";

const services = [
  {
    title: "City-to-City",
    desc: "Seamless long-distance luxury rides",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Airport Transfer",
    desc: "Flight-tracking, pickup ready when you land",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Hourly Hire",
    desc: "Flexible booking by hour or day",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Chauffeur Hailing",
    desc: "Get a car within minutes",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-[radial-gradient(60%_60%_at_70%_0%,rgba(230,167,0,0.08),transparent)]"
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 35px rgba(230, 167, 0, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm cursor-pointer transition-all duration-100 ease-out"
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-48 overflow-hidden"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-white text-lg font-medium group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-gray-300 transition-colors duration-300">
                  {s.desc}
                </p>
              </div>

              {/* Glow Line */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
