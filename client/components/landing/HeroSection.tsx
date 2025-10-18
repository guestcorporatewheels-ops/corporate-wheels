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
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
        <div className="absolute -left-24 top-0 w-[60%] h-full bg-[url('/images/features/car2.jpeg')] bg-cover bg-right opacity-20 blur-md transform -skew-x-6" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_20%,rgba(230,167,0,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
        >
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            <span className="block text-gradient-gold">{displayText}</span>
            <span className="block mt-2 text-xl md:text-2xl text-muted-foreground font-medium">
              Premium, verified chauffeurs for airport transfers, hourly
              bookings, and city-to-city rides worldwide.
            </span>
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="btn-gradient btn-gradient-animate"
            >
              <a href="#booking">Book a Ride</a>
            </Button>

            <Button variant="outline" size="lg" className="mt-3 sm:mt-0">
              <PlayCircle className="mr-2" /> Watch Demo
            </Button>
          </div>

          <div className="mt-6 flex gap-6 items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Download className="opacity-90" />
              <span>Download itinerary & receipts</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#E6A700" />
              </svg>
              <span>Verified chauffeurs</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div
            id="booking"
            className="mx-auto lg:mr-0 max-w-md bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 shadow-lg"
          >
            <BookingWidget />
            <p className="mt-3 text-xs text-muted-foreground">
              Fast booking with instant confirmations and free cancellations up
              to 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
