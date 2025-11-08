import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const topCities = [
  {
    name: "New York",
    desc: "Business hub with connections to all major East Coast cities",
    routes: 21,
    features: ["Airport transfers", "24/7 service", "Corporate accounts"],
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "London",
    desc: "Premier service across UK's business and leisure destinations",
    routes: 25,
    features: ["Cross-country routes", "Chauffeur service", "VIP access"],
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Paris",
    desc: "Luxury travel throughout France's iconic destinations",
    routes: 16,
    features: ["Wine tours", "Event transport", "Multilingual drivers"],
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Dubai",
    desc: "Premium transport connecting all UAE emirates",
    routes: 15,
    features: ["Desert safaris", "Business class", "Airport meet & greet"],
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const topRoutes = [
  {
    from: "New York",
    to: "Philadelphia",
    duration: "1h 50m",
    distance: "59 mi",
    price: "From $299",
    perks: ["WiFi", "Refreshments", "Flexible pickup"],
  },
  {
    from: "London",
    to: "Oxford",
    duration: "1h 45m",
    distance: "96 km",
    price: "From £189",
    perks: ["University service", "Student discount", "Group booking"],
  },
  {
    from: "Paris",
    to: "Reims",
    duration: "2h 15m",
    distance: "145 km",
    price: "From €259",
    perks: ["Champagne tour", "Local guide", "Luxury sedan"],
  },
  {
    from: "Dubai",
    to: "Abu Dhabi",
    duration: "1h 15m",
    distance: "136 km",
    price: "From AED 499",
    perks: ["Business class", "Meet & greet", "VIP service"],
  },
  {
    from: "New York",
    to: "East Hampton",
    duration: "2h 30m",
    distance: "68 mi",
    price: "From $349",
    perks: ["Beach transfer", "Summer special", "Door-to-door"],
  },
  {
    from: "Manchester",
    to: "Liverpool",
    duration: "1h",
    distance: "57 km",
    price: "From £149",
    perks: ["Event service", "Match day", "Express route"],
  },
  {
    from: "Nice",
    to: "Saint Tropez",
    duration: "1h 40m",
    distance: "112 km",
    price: "From €299",
    perks: ["Coastal route", "Yacht transfer", "VIP service"],
  },
  {
    from: "Brisbane",
    to: "Gold Coast",
    duration: "1h",
    distance: "79 km",
    price: "From $199",
    perks: ["Beach service", "Theme parks", "Airport link"],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CityToCityRoutes() {
  // Animation variants for route lines
  const pathVariants:any = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  // Animation variants for dots
  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Themed Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.corporate-gold/10),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.corporate-gold/5),transparent_40%)]" />
      </div>

      {/* Animated Route Network */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="routeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4C430" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Animated Route Lines */}
        <motion.path
          d="M10,50 Q30,20 50,50 T90,50"
          stroke="url(#routeLineGrad)"
          strokeWidth="0.5"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M10,70 Q30,90 50,70 T90,70"
          stroke="url(#routeLineGrad)"
          strokeWidth="0.5"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        />

        {/* City Markers */}
        {[
          [10, 50], [90, 50],
          [10, 70], [90, 70]
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="1.5"
            fill="#F4C430"
            variants={dotVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.3 }}
          />
        ))}
      </motion.svg>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-8 h-8 text-corporate-gold opacity-20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-24"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <svg className="w-12 h-12 text-corporate-gold opacity-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          </svg>
        </motion.div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-heading text-4xl md:text-5xl mb-4"
          >
            City-to-City Routes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Premium intercity travel with fixed rates, WiFi-equipped vehicles,
            and professional chauffeurs.
          </motion.p>
        </motion.div>

        {/* Top Cities Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <h3 className="text-2xl font-heading text-white">Popular Cities</h3>
            <a
              href="/city-to-city"
              className="text-corporate-gold hover:text-corporate-gold/80 transition-colors"
            >
              View all cities
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCities.map((city, i) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="font-heading text-xl text-white mb-1">
                      {city.name}
                    </h4>
                    <p className="text-sm text-white/80">{city.desc}</p>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  {city.features.map((feature, j) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-corporate-gold"
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
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-corporate-gold to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Top Routes Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <h3 className="text-2xl font-heading text-white">Popular Routes</h3>
            <a
              href="/routes"
              className="text-corporate-gold hover:text-corporate-gold/80 transition-colors"
            >
              View all routes
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topRoutes.map((route, i) => (
              <motion.div
                key={`${route.from}-${route.to}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
              >
                <div className="mb-4">
                  <div className="text-lg font-medium text-white">
                    {route.from} → {route.to}
                  </div>
                  <div className="mt-1 flex items-center space-x-3 text-sm text-muted-foreground">
                    <span>{route.duration}</span>
                    <span>•</span>
                    <span>{route.distance}</span>
                  </div>
                </div>

                <div className="text-lg font-semibold text-corporate-gold mb-4">
                  {route.price}
                </div>

                <div className="space-y-2">
                  {route.perks.map((perk, j) => (
                    <motion.div
                      key={perk}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-corporate-gold"
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
                      <span className="text-sm text-muted-foreground">
                        {perk}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-corporate-gold to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-gold/20 to-corporate-gold/5" />
          <div className="relative p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-heading text-white mb-2">
                    Ready to Book Your Journey?
                  </h3>
                  <p className="text-lg text-white/80">
                    Fixed rates, luxury vehicles, professional chauffeurs.
                  </p>
                </div>
                <Button
                  variant="glow"
                  className="h-12 px-8 bg-corporate-gold hover:bg-corporate-gold/90 text-black font-medium"
                  asChild
                >
                  <a href="#booking" className="flex items-center">
                    Book Now
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
