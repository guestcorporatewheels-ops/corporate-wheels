import { motion } from "framer-motion";
import BookingWidget from "./BookingWidget";
import { Button } from "@/components/ui/button";
import { Download, PlayCircle } from "lucide-react";
import { useTypingAnimation } from "@/hooks/use-typing-animation";

export default function HeroSection() {
  const { displayText, isComplete } = useTypingAnimation(
    "Luxury on Time, Every Time.",
    80,
    500,
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(230,167,0,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      <div className="container grid gap-12 lg:gap-16 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            <span className="inline-block">
              {displayText}
              {!isComplete && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-[hsl(var(--primary))] ml-1"
                >
                  |
                </motion.span>
              )}
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Premium, verified chauffeurs for airport transfers, hourly bookings,
            and city-to-city rides worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center"
          id="booking"
        >
          <BookingWidget />
        </motion.div>
      </div>
    </section>
  );
}
