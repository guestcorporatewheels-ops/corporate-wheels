import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const topCities = [
  {
    name: "New York",
    routes: 21,
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "London",
    routes: 25,
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Paris",
    routes: 16,
    image:
      "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dubai",
    routes: 15,
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
  },
  { from: "London", to: "Oxford", duration: "1h 45m", distance: "96 km" },
  { from: "Paris", to: "Reims", duration: "2h 15m", distance: "145 km" },
  { from: "Dubai", to: "Abu Dhabi", duration: "1h 15m", distance: "136 km" },
  {
    from: "New York",
    to: "East Hampton",
    duration: "2h 30m",
    distance: "68 mi",
  },
  { from: "Manchester", to: "Liverpool", duration: "1h", distance: "57 km" },
  { from: "Nice", to: "Saint Tropez", duration: "1h 40m", distance: "112 km" },
  { from: "Brisbane", to: "Gold Coast", duration: "1h", distance: "79 km" },
];

export default function CityToCityRoutes() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * i },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        {/* Main Title */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            custom={0}
            variants={item}
            className="font-heading text-4xl md:text-5xl text-white mb-4"
          >
            City-to-City routes
          </motion.h2>
        </motion.div>

        {/* Top Cities Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <motion.h3
              custom={0}
              variants={item}
              className="text-2xl font-heading text-white"
            >
              Top cities
            </motion.h3>
            <motion.a
              custom={1}
              variants={item}
              href="#services"
              className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/80 transition-colors"
            >
              See all
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCities.map((city, i) => (
              <motion.div
                key={city.name}
                custom={i + 2}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-4 bg-card">
                  <h4 className="font-heading text-lg text-white mb-1">
                    {city.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {city.routes} routes to/from this city
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Routes Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <motion.h3
              custom={0}
              variants={item}
              className="text-2xl font-heading text-white"
            >
              Top routes
            </motion.h3>
            <motion.a
              custom={1}
              variants={item}
              href="#services"
              className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/80 transition-colors"
            >
              See all
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topRoutes.map((route, i) => (
              <motion.div
                key={`${route.from}-${route.to}`}
                custom={i + 2}
                variants={item}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(230, 167, 0, 0.15)",
                }}
                className="p-4 rounded-xl border border-white/10 bg-card hover:bg-card/80 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">
                    {route.from} → {route.to}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{route.duration}</span>
                  <span>{route.distance}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-r from-[hsl(var(--primary))]/10 to-[hsl(var(--accent))]/10 rounded-2xl p-8 border border-[hsl(var(--primary))]/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <motion.div custom={0} variants={item}>
              <h3 className="text-2xl font-heading text-white mb-2">
                Have a route in mind?
              </h3>
              <p className="text-muted-foreground">
                Enter your pickup and drop-off locations to see the price.
              </p>
            </motion.div>
            <motion.div custom={1} variants={item}>
              <Button
                variant="glow"
                className="h-12 px-8 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-black font-medium"
                asChild
              >
                <a href="#booking">
                  Book a City-to-City ride
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
