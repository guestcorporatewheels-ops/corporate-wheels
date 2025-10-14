import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  { name: "New York", x: "35%", y: "40%" },
  { name: "London", x: "52%", y: "30%" },
  { name: "Dubai", x: "63%", y: "48%" },
  { name: "Singapore", x: "78%", y: "62%" },
  { name: "Sydney", x: "86%", y: "78%" },
];

export default function Coverage() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl text-white">
            Global Coverage
          </h2>
          <p className="mt-2 text-muted-foreground">
            Premium rides in 300+ cities worldwide.
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[radial-gradient(120%_120%_at_50%_0%,#0f172a,transparent)]">
          <div className="aspect-[16/9]">
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-contain opacity-10" />
            {cities.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="absolute group"
                style={{ left: c.x, top: c.y }}
              >
                <div className="-translate-x-1/2 -translate-y-1/2">
                  <div className="p-2 rounded-full bg-[hsl(var(--primary))] shadow-[0_0_15px_#00D8B4]" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 text-xs text-white opacity-0 group-hover:opacity-100 bg-black/70 px-2 py-1 rounded border border-white/10">
                  {c.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
