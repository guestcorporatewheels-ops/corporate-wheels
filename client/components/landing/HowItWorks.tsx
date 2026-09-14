import { useState } from "react";
import { ListChecks, Car, CreditCard, MapPin, Calendar, Shield, Clock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Book Your Trip",
    desc: "Input your pick-up point, destination, and preferred time. We use an advanced booking engine to provide the best route possible.",
    icon: MapPin,
    features: ["Real-time routing", "Scheduling flexibility", "Multiple pick-ups and drop-offs capability"]
  },
  {
    title: "Choose Your Vehicle",
    desc: "Select from our luxurious range of luxury cars which offer top quality and luxury features.",
    icon: Car,
    features: ["Luxury fleet", "Profiles of chauffeurs", "Car amenities"]
  },
  {
    title: "Pay Securely",
    desc: "Pay for your trip via your desired method of payment.",
    icon: CreditCard,
    features: ["Various payment methods", "Safe payment process", "Corporate invoicing"]
  },
  {
    title: "Get a Comfortable Ride",
    desc: "Enjoy your ride in the company of our courteous and professional chauffeurs.",
    icon: ListChecks,
    features: ["Track in real-time", "24/7 support", "Door-to-door service"]
  },
];

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="how" className="py-20 relative overflow-hidden ">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(230,167,0,0.08),black)]" />
      {/* Decorative animated SVG accents (purely visual) */}
      <motion.svg
        aria-hidden
        className="pointer-events-none absolute -top-12 left-1/2 transform -translate-x-1/2 w-[900px] h-[160px] opacity-30"
        viewBox="0 0 900 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 8, repeat: Infinity, repeatType: "loop" }}
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#D1B24A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#D1B24A" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect x="0" y="24" width="900" height="112" rx="24" fill="url(#g1)" />
        <motion.circle cx="120" cy="80" r="8" fill="#D1B24A" animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }} />
        <motion.circle cx="780" cy="60" r="6" fill="#D1B24A" animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }} />
        <motion.circle cx="420" cy="40" r="10" fill="#D1B24A" animate={prefersReducedMotion ? undefined : { y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }} />
      </motion.svg>
      <div className="container relative">
        <SectionHeading
          tagline="Simple Process"
          title="How It Works"
          subtitle="Experience luxury travel in four simple steps. Our seamless booking process ensures a premium journey from start to finish."
        />

        <div className="relative ">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => {
              const isFlipped = !!flipped[i];
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group h-72 [perspective:1200px] cursor-pointer"
                  onClick={() => toggleFlip(i)}
                >
                  <div
                    className={cn(
                      "relative w-full h-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]",
                      isFlipped && "[transform:rotateY(180deg)]",
                    )}
                  >
                    {/* Front — icon, title, view details cue */}
                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-corporate-gold/40 flex flex-col items-center justify-center text-center p-6">
                      <div className="relative inline-flex mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-corporate-gold/10 border border-corporate-gold/20 flex items-center justify-center">
                          <s.icon className="size-8 text-corporate-gold" />
                        </div>
                        <div className="absolute top-0 right-0 -mr-2 -mt-2 w-6 h-6 rounded-full bg-corporate-gold text-black flex items-center justify-center text-sm font-medium">
                          {i + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-corporate-gold">
                        View Details
                      </span>
                    </div>

                    {/* Back — description + feature checklist */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-corporate-gold/10 via-black/90 to-black/95 border border-corporate-gold/50 flex flex-col p-6">
                      <h3 className="text-lg font-semibold text-corporate-gold mb-2">
                        {i + 1}. {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                      <div className="space-y-2 mt-auto">
                        {s.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-corporate-gold shrink-0" fill="none" stroke="currentColor">
                              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-8 bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center space-x-3">
                <Clock className="size-5 text-corporate-gold" />
                <span className="text-sm text-muted-foreground">24/7 Booking</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="size-5 text-corporate-gold" />
                <span className="text-sm text-muted-foreground">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="size-5 text-corporate-gold" />
                <span className="text-sm text-muted-foreground">Advance Booking</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
