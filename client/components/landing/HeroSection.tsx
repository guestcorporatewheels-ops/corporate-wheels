import { motion } from "framer-motion";
import BookingWidget from "./BookingWidget";
import { Button } from "@/components/ui/button";
import { Download, PlayCircle } from "lucide-react";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const { displayText, isComplete } = useTypingAnimation(
    "Luxury on Time, Every Time.",
    80,
    500,
  );

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16  ">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#e6a700]/30 animate-gradient" />
        {/* Floating Gold Circles */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-tr from-[#e6a700]/60 to-[#fff]/10 blur-2xl"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-gradient-to-tr from-[#e6a700]/40 to-[#fff]/10 blur-2xl"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        {/* Removed right side car image for cleaner look */}
      </div>
      {/* Main Hero Content Grid */}
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-[#e6a700] via-[#fff] to-[#e6a700] bg-clip-text text-transparent animate-text-flash">
              {displayText}
            </span>
            <span className="block mt-4 text-xl md:text-2xl text-muted-foreground font-medium">
              Premium, verified chauffeurs for airport transfers, hourly
              bookings, and city-to-city rides worldwide.
            </span>
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="btn-gradient btn-gradient-animate shadow-lg text-lg px-8 py-4 font-bold"
            >
              <Link to="/booking">
                <span className="inline-flex items-center gap-2">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Book a Ride
                </span>
              </Link>
            </Button>


          </div>

          {/* Trust Badge / Testimonial */}
          <div className="mt-8 flex flex-col sm:flex-row gap-6 items-center text-base text-muted-foreground justify-center lg:justify-start">

            <div className="flex items-center gap-2 ">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5" cy="5" r="5" fill="#E6A700" />
              </svg>
              <span>Verified chauffeurs</span>
            </div>
            <div className="flex items-center gap-2 ">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  stroke="#e6a700"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>5-Star Rated Service</span>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-12 flex justify-center lg:justify-start">
            <motion.div
              initial={{ y: 0, opacity: 0.7 }}
              animate={{ y: [0, 16, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full border-2 border-[#e6a700] flex items-center justify-center bg-black/30 shadow-lg"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 16l-6-6h12l-6 6z" fill="#e6a700" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div
            id="booking"
            className="w-full max-w-md bg-gradient-to-br from-black/80 via-black/90 to-[#e6a700]/10 backdrop-blur-xl border-2 border-corporate-gold rounded-3xl p-8 shadow-glow"
          >
            <BookingWidget />
            <p className="mt-4 text-sm text-corporate-gold text-center font-semibold">
              Fast booking with instant confirmations and free cancellations up
              to 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
