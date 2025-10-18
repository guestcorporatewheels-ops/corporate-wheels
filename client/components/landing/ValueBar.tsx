import { ShieldCheck, PhoneCall, Leaf, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: ShieldCheck,
    text: "Safe & Verified Chauffeurs",
    description: "Background-checked professionals",
  },
  {
    icon: PhoneCall,
    text: "24/7 Global Support",
    description: "Always here to help",
  },
  {
    icon: Leaf,
    text: "Carbon Neutral Rides",
    description: "Eco-friendly travel",
  },
  {
    icon: BadgeDollarSign,
    text: "Transparent Pricing",
    description: "No hidden fees",
  },
];

export default function ValueBar() {
  return (
    <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
      <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, text, description }, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.4 }}
            className="flex items-center gap-3 p-3 rounded-lg hover:shadow-[0_10px_30px_rgba(230,167,0,0.08)] transition-all duration-400 ease-in-out hover:bg-white/5"
          >
            <div className="p-2 rounded-md flex-shrink-0 border border-white/6 bg-gradient-to-br from-[rgba(230,167,0,0.15)] to-[rgba(255,107,53,0.06)]">
              <div className="w-8 h-8 flex items-center justify-center text-[hsl(var(--secondary))]">
                <Icon className="size-4" />
              </div>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">{text}</p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
