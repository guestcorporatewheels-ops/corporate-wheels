import { motion } from "framer-motion";
import { useState } from 'react';
import ContactModal from '../ui/ContactModal';

const cities = [
  { name: "New York", x: "35%", y: "40%" },
  { name: "London", x: "52%", y: "30%" },
  { name: "Paris", x: "54%", y: "33%" },
  { name: "Berlin", x: "56%", y: "31%" },
  { name: "Dubai", x: "63%", y: "48%" },
  { name: "Mumbai", x: "68%", y: "52%" },
  { name: "Singapore", x: "78%", y: "62%" },
  { name: "Tokyo", x: "80%", y: "38%" },
  { name: "Seoul", x: "81%", y: "34%" },
  { name: "Cape Town", x: "50%", y: "82%" },
  { name: "Johannesburg", x: "52%", y: "74%" },
  { name: "Sao Paulo", x: "23%", y: "60%" },
  { name: "Mexico City", x: "23%", y: "46%" },
  { name: "Los Angeles", x: "22%", y: "36%" },
  { name: "Sydney", x: "86%", y: "78%" },
];

export default function Coverage() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl text-white">Global Coverage</h2>
          <p className="mt-2 text-muted-foreground">Premium rides across 300+ cities — local knowledge, global reach.</p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[radial-gradient(120%_120%_at_50%_0%,#0f172a,transparent)]">
              <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 -translate-x-1/2 -top-36 w-[28rem] h-[28rem] rounded-full opacity-10 blur-2xl" style={{background: 'linear-gradient(120deg,#F4C430,#FF6B35)'}} />
              </div>
              <div className="aspect-[16/9] relative">
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
                      <div className="w-3 h-3 rounded-full bg-[hsl(var(--primary))] shadow-[0_0_12px_hsl(var(--primary))]" />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 text-xs text-white opacity-0 group-hover:opacity-100 bg-black/70 px-2 py-1 rounded border border-white/10 whitespace-nowrap">
                      {c.name}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="p-5 border-t border-white/5">
                <div className="flex justify-center">
                  <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center bg-corporate-gold text-black px-6 py-3 rounded-full font-semibold shadow">Partner with us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
