import { motion } from "framer-motion";

const features = [
  {
    title: "Airport Transfers",
    desc: "Flight monitoring, meet & greet service, and express terminal access. Our chauffeurs track your flight and adjust pickup time automatically.",
    features: ["Flight tracking included", "Meet & greet service", "Express terminals"],
    svg: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-corporate-gold mx-auto mb-4" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
    ),
  },
  {
    title: "Hourly Hire",
    desc: "Flexible hourly bookings with dedicated chauffeur. Perfect for events, meetings, or exploring the city at your own pace.",
    features: ["Minimum 2 hours", "No hidden fees", "Multiple stops"],
    svg: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-corporate-gold mx-auto mb-4" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Chauffeur Service",
    desc: "Professional chauffeurs trained to the highest standards. Discretion, protocol awareness, and impeccable service guaranteed.",
    features: ["Background checked", "Protocol trained", "Multilingual"],
    svg: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-corporate-gold mx-auto mb-4" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "City-to-City",
    desc: "Luxurious intercity travel with WiFi, refreshments, and the freedom to work or relax. Fixed pricing with no surprises.",
    features: ["WiFi equipped", "Refreshments", "Fixed rates"],
    svg: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-corporate-gold mx-auto mb-4" fill="none" stroke="currentColor">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
];

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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">Premium experiences tailored for business and leisure travelers who expect excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f) => (
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }} 
              transition={{ duration: 0.2 }}
              key={f.title} 
              className="relative bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-xl p-6 group"
            >
              <div className="absolute -top-8 -right-8 w-36 h-36 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="#F4C430" /></svg>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/5 rounded-lg p-3 mr-4">
                  {f.svg}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">{f.title}</h4>
                  <p className="text-muted-foreground">{f.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {f.features.map((feature, i) => (
                      <motion.li 
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 text-corporate-gold" fill="none" stroke="currentColor">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/services" 
            className="inline-flex items-center bg-corporate-gold text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:brightness-110 transition-all"
          >
            View all services
            <svg viewBox="0 0 24 24" className="w-5 h-5 ml-2" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
