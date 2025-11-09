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
    <section className="border-y border-corporate-gold/20 bg-gradient-to-b from-black via-black/95 to-black/90">
      <div className="container py-12 md:py-16">
        <h2 className="sr-only">Why choose Corporate Wheels</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map(({ icon: Icon, text, description }, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: "easeOut" }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-corporate-gold/5 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="relative flex flex-col justify-between h-full p-6 md:p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.5)] group-hover:border-corporate-gold/20 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(230,167,0,0.05)] transition-all duration-500">
                <div>
                  <div className="flex-none w-16 h-16 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-corporate-gold/10 to-corporate-gold/5 border border-corporate-gold/10 group-hover:border-corporate-gold/20 group-hover:shadow-[0_0_20px_rgba(230,167,0,0.1)] transition-all duration-500">
                    <Icon className="h-8 w-8 text-corporate-gold" />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight mb-2 group-hover:text-corporate-gold transition-colors duration-300">
                    {text}
                  </h3>
                  <p className="text-base text-white/60 group-hover:text-white/70 transition-colors duration-300">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
