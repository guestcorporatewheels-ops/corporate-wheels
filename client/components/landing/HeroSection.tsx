import { useRef } from "react";
import { motion } from "framer-motion";
import ChauffeurBookingWidget from "@/components/booking/BookingWidget";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScrollDown = () => {
    const next = sectionRef.current?.nextElementSibling;
    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen flex items-center pt-32 sm:pt-36 lg:pt-40 pb-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-chauffeur.png"
          alt="Luxury chauffeur standing beside a chauffeur-driven car"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
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
      </div>
      {/* Main Hero Content Grid */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left max-w-xl mx-auto lg:mx-0"
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-white mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-[#e6a700] via-[#fff] to-[#e6a700] bg-clip-text text-transparent">
              Luxury Chauffeur & Private Transfer Services
            </span>
          </h1>
          <p className="block -mt-2 mb-6 text-xl md:text-2xl text-muted-foreground font-medium">
            Luxury chauffeurs offering punctual and specification-rich
            services for luxury journeys, airport transfers, and corporate
            events throughout the UK.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto btn-gradient btn-gradient-animate shadow-lg text-base sm:text-lg px-6 sm:px-8 py-4 font-bold"
            >
              <Link to="/contact">
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
                  Get a Quote
                </span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline-glow"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 font-bold mt-4 sm:mt-0"
            >
              <Link to="/booking">Book Your Journey</Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex flex-col gap-3 items-start text-left text-base text-muted-foreground italic">
            <div className="flex items-start gap-2">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1.5 shrink-0"
              >
                <circle cx="5" cy="5" r="5" fill="#E6A700" />
              </svg>
              <span>Transport for London (TfL) and Local Authority Approved</span>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1.5 shrink-0"
              >
                <circle cx="5" cy="5" r="5" fill="#E6A700" />
              </svg>
              <span>Flight Tracking Available as Standard</span>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1.5 shrink-0"
              >
                <circle cx="5" cy="5" r="5" fill="#E6A700" />
              </svg>
              <span>Guaranteed Affordable Pricing</span>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-12 flex justify-center lg:justify-start">
            <motion.button
              type="button"
              onClick={handleScrollDown}
              aria-label="Scroll to next section"
              initial={{ y: 0, opacity: 0.7 }}
              animate={{ y: [0, 16, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full border-2 border-[#e6a700] flex items-center justify-center bg-black/30 shadow-lg cursor-pointer hover:bg-black/50 transition-colors"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 16l-6-6h12l-6 6z" fill="#e6a700" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div
            id="booking"
            className="w-full max-w-lg bg-gradient-to-br from-black/80 via-black/90 to-[#e6a700]/10 backdrop-blur-xl border-2 border-corporate-gold rounded-3xl p-6 shadow-glow"
          >
            <ChauffeurBookingWidget />
            <p className="mt-3 text-sm text-corporate-gold text-center font-semibold">
              Fast booking with instant confirmations and free cancellations up
              to 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
