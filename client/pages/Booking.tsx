import { motion } from "framer-motion";
import ChauffeurBookingWidget from "@/components/booking/BookingWidget";
import Seo from "@/components/Seo";

export default function Booking() {
  return (
    <main className="min-h-screen">
      <Seo
        title="Book a Chauffeur"
        description="Book premium chauffeur transfers in seconds. Choose your vehicle, set pickup and drop-off, and get an instant quote."
        path="/booking"
      />
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-slate-900/60 to-transparent pb-12 pt-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -8, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Book premium transfers in seconds
              </h1>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Instant quotes, professional chauffeurs and a fleet to match
                your requirements. Choose a vehicle, set pickup & drop-off and
                get an immediate estimate.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="relative"
            >
              {/* decorative golden swoosh */}
              <svg
                aria-hidden
                className="absolute -right-16 -top-12 w-72 h-72 opacity-90 hidden lg:block"
                viewBox="0 0 200 200"
                fill="none"
              >
                <defs>
                  <radialGradient id="goldGrad" cx="30%" cy="30%">
                    <stop offset="0%" stopColor="#F4C430" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#E6A700" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="60" r="80" fill="url(#goldGrad)" />
              </svg>

              <img
                src="/images/cw-placeholder.svg"
                alt="Corporate Wheels executive car"
                className="hidden lg:block rounded-xl w-64 h-40 object-cover mb-4 shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="container py-12" id="form">
        <ChauffeurBookingWidget />
      </section>
    </main>
  );
}
