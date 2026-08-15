import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Airport Transfers",
    desc: "Flight monitoring, meet & greet service, and express terminal access. Our chauffeurs track your flight and adjust pickup time automatically.",
    features: [
      "Flight tracking included",
      "Meet & greet service",
      "Express terminals",
    ],
    svg: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-corporate-gold mx-auto "
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        />
      </svg>
    ),
  },
  {
    title: "Hourly Hire",
    desc: "Flexible hourly bookings with dedicated chauffeur. Perfect for events, meetings, or exploring the city at your own pace.",
    features: ["Minimum 2 hours", "No hidden fees", "Multiple stops"],
    svg: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-corporate-gold mx-auto "
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Chauffeur Service",
    desc: "Professional chauffeurs trained to the highest standards. Discretion, protocol awareness, and impeccable service guaranteed.",
    features: ["Background checked", "Protocol trained", "Multilingual"],
    svg: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-corporate-gold mx-auto "
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    title: "City-to-City",
    desc: "Luxurious intercity travel with WiFi, refreshments, and the freedom to work or relax. Fixed pricing with no surprises.",
    features: ["WiFi equipped", "Refreshments", "Fixed rates"],
    svg: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-corporate-gold mx-auto "
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Background SVGs */}
      <svg
        className="absolute top-10 left-10 w-32 h-32 text-corporate-gold/10 rotate-45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      </svg>
      <svg
        className="absolute bottom-20 right-10 w-40 h-40 text-corporate-gold/10 animate-spin-slow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.364-6.364l-2.828 2.828M8.464 15.536l-2.828 2.828M15.536 15.536l2.828 2.828M8.464 8.464L5.636 5.636"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-6 relative inline-block">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg ">
              Premium experiences tailored for business and leisure travelers
              who expect excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f) => (
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              key={f.title}
              className="relative bg-white/[0.02] rounded-xl p-8 group border border-white/10 hover:border-corporate-gold/50 overflow-hidden backdrop-blur-sm"
            >
              {/* Glow Effect */}
              <motion.div className="absolute inset-0 bg-gradient-to-tr from-corporate-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Animated Border Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div className="absolute -left-1 top-0 w-1 h-0 bg-gradient-to-b from-corporate-gold/50 to-corporate-gold group-hover:h-full transition-all duration-700" />
                <motion.div className="absolute left-0 -top-1 w-0 h-1 bg-gradient-to-r from-corporate-gold to-corporate-gold/50 group-hover:w-full transition-all duration-700 delay-75" />
                <motion.div className="absolute -right-1 top-0 w-1 h-0 bg-gradient-to-b from-corporate-gold/50 to-corporate-gold group-hover:h-full transition-all duration-700" />
                <motion.div className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-corporate-gold/50 to-corporate-gold group-hover:w-full transition-all duration-700 delay-75" />
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/5 rounded-lg p-3 mr-4 shadow-inner shadow-corporate-gold/10">
                  {f.svg}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {f.title}
                  </h4>
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
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 mr-2 text-corporate-gold"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
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

        <div className="mt-16 text-center relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center bg-gradient-to-r btn-gradient text-black px-8 py-3 rounded-md font-semibold shadow-lg transition-all hover:shadow-corporate-gold/40 "
          >
            View all services
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
