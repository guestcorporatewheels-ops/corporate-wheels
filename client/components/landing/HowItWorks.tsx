import { ListChecks, Car, CreditCard, MapPin, Calendar, Shield, Clock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  { 
    title: "Book Your Journey",
    desc: "Enter your pickup location, destination, and preferred time. Our smart system calculates the optimal route.",
    icon: MapPin,
    features: ["Real-time route planning", "Flexible scheduling", "Multiple stops option"]
  },
  { 
    title: "Select Your Vehicle",
    desc: "Choose from our fleet of luxury vehicles. Each car is maintained to the highest standards.",
    icon: Car,
    features: ["Premium fleet", "Chauffeur profiles", "Vehicle amenities"]
  },
  { 
    title: "Secure Payment",
    desc: "Pay securely with your preferred method. Clear pricing with no hidden fees.",
    icon: CreditCard,
    features: ["Multiple payment options", "Secure transactions", "Corporate billing"]
  },
  { 
    title: "Travel in Style",
    desc: "Enjoy a smooth, comfortable journey with our professional chauffeurs.",
    icon: ListChecks,
    features: ["Live tracking", "24/7 support", "Door-to-door service"]
  },
];

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience luxury travel in four simple steps. Our seamless booking process ensures a premium journey from start to finish.
          </p>
        </div>

        <div className="relative ">
          <div className="absolute left-0 right-0 top-28 h-px bg-gradient-to-r from-transparent via-corporate-gold/30 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.001 }}
                whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-white/3 border border-transparent  hover:border-corporate-gold/30 transition-all shadow-sm hover:shadow-2xl transform">
                  <div className="text-center mb-6">
                    <div className="relative inline-flex mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-corporate-gold/10 border border-corporate-gold/20 flex items-center justify-center">
                        <s.icon className="size-8 text-corporate-gold" />
                      </div>
                      <div className="absolute -inset-4 rounded-3xl blur-2xl bg-corporate-gold/5 -z-10 group-hover:bg-corporate-gold/10 transition-colors" />
                      <div className="absolute top-0 right-0 -mr-2 -mt-2 w-6 h-6 rounded-full bg-corporate-gold text-black flex items-center justify-center text-sm font-medium">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="space-y-2"
                  >
                    {s.features.map((feature, j) => (
                      <motion.div 
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.1 }}
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-corporate-gold" fill="none" stroke="currentColor">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
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
