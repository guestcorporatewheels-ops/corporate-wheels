import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const topCities = [
  {
    name: "New York",
    desc: "Business hub with connections to all major East Coast cities",
    routes: 21,
    features: ["Airport transfers", "24/7 service", "Corporate accounts"],
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "London",
    desc: "Premier service across UK's business and leisure destinations",
    routes: 25,
    features: ["Cross-country routes", "Chauffeur service", "VIP access"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Paris",
    desc: "Luxury travel throughout France's iconic destinations",
    routes: 16,
    features: ["Wine tours", "Event transport", "Multilingual drivers"],
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dubai",
    desc: "Premium transport connecting all UAE emirates",
    routes: 15,
    features: ["Desert safaris", "Business class", "Airport meet & greet"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const topRoutes = [
  {
    from: "New York",
    to: "Philadelphia",
    duration: "1h 50m",
    distance: "59 mi",
    price: "From $299",
    perks: ["WiFi", "Refreshments", "Flexible pickup"]
  },
  { 
    from: "London",
    to: "Oxford",
    duration: "1h 45m",
    distance: "96 km",
    price: "From £189",
    perks: ["University service", "Student discount", "Group booking"]
  },
  { 
    from: "Paris",
    to: "Reims",
    duration: "2h 15m",
    distance: "145 km",
    price: "From €259",
    perks: ["Champagne tour", "Local guide", "Luxury sedan"]
  },
  { 
    from: "Dubai",
    to: "Abu Dhabi",
    duration: "1h 15m",
    distance: "136 km",
    price: "From AED 499",
    perks: ["Business class", "Meet & greet", "VIP service"]
  },
  {
    from: "New York",
    to: "East Hampton",
    duration: "2h 30m",
    distance: "68 mi",
    price: "From $349",
    perks: ["Beach transfer", "Summer special", "Door-to-door"]
  },
  { 
    from: "Manchester",
    to: "Liverpool",
    duration: "1h",
    distance: "57 km",
    price: "From £149",
    perks: ["Event service", "Match day", "Express route"]
  },
  { 
    from: "Nice",
    to: "Saint Tropez",
    duration: "1h 40m",
    distance: "112 km",
    price: "From €299",
    perks: ["Coastal route", "Yacht transfer", "VIP service"]
  },
  { 
    from: "Brisbane",
    to: "Gold Coast",
    duration: "1h",
    distance: "79 km",
    price: "From $199",
    perks: ["Beach service", "Theme parks", "Airport link"]
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function CityToCityRoutes() {

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-white mb-4"
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
            Premium intercity travel with fixed rates, WiFi-equipped vehicles, and professional chauffeurs.
          </motion.p>
        </div>

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
                    <p className="text-sm text-white/80">
                      {city.desc}
                    </p>
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
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-corporate-gold" fill="none" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-muted-foreground">{feature}</span>
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
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-corporate-gold" fill="none" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-muted-foreground">{perk}</span>
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
