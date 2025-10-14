import { ListChecks, Car, CreditCard, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { title: "Enter pickup & drop", icon: MapPin },
  { title: "Choose car class", icon: Car },
  { title: "Confirm & Pay", icon: CreditCard },
  { title: "Ride with comfort", icon: ListChecks },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-white">How It Works</h2>
          <p className="mt-2 text-muted-foreground">Simple steps to your next ride.</p>
        </div>
        <div className="relative">
          <div className="absolute left-4 right-4 top-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div className="p-3 rounded-xl border border-white/10 bg-black/50 text-secondary">
                    <s.icon className="size-5" />
                  </div>
                  <div className="absolute -z-10 inset-0 rounded-xl blur-xl opacity-30 bg-[radial-gradient(circle,rgba(0,216,180,0.5)_0%,transparent_60%)]" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground max-w-[12rem]">{s.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
