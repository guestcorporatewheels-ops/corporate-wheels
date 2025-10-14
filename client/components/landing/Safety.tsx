import { ShieldCheck, Satellite, Leaf, Activity } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { title: "Driver background check", icon: ShieldCheck },
  { title: "Ride insurance", icon: Activity },
  { title: "Carbon offset", icon: Leaf },
  { title: "24/7 live tracking", icon: Satellite },
];

export default function Safety() {
  return (
    <section
      id="safety"
      className="py-20 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(26,183,255,0.08),transparent)]"
    >
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl text-white">
            Safety & Trust
          </h2>
          <p className="mt-2 text-muted-foreground">
            Professionalism at every step.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] hover:shadow-[0_0_25px_rgba(26,183,255,0.2)]"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg border border-white/10 text-secondary bg-black/40">
                  <it.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We maintain rigorous standards for maximum peace of mind.
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--secondary))] to-transparent opacity-0 hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
