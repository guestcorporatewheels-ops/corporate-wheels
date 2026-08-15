import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <main className="relative bg-background text-foreground min-h-screen overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-28 -left-20 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl btn-gradient-animate"
          style={{
            backgroundImage:
              "linear-gradient(120deg,#F4C430 0%,#E6A700 25%,#FF6B35 60%,#E53E3E 100%)",
          }}
        />
        <div
          className="absolute -bottom-36 -right-28 h-[40rem] w-[40rem] rounded-full opacity-12 blur-3xl btn-gradient-animate"
          style={{
            backgroundImage:
              "linear-gradient(60deg,#E53E3E 0%,#FF6B35 40%,#E6A700 70%,#F4C430 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(230,167,0,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E6A700] animate-pulse" />
              <span className="text-sm text-white/80">Last Updated: January 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-heading text-white leading-tight mb-6">
              <span className="text-gradient-gold">Terms of Service</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms of service carefully before using our luxury transportation services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Terms Content */}
              <div className="relative group">
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-8">
                  {/* Service Agreement Section */}
                  <section>
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-corporate-gold to-orange-600 bg-clip-text text-transparent mb-4">
                      Service Agreement
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground">By using our services, you agree to:</p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                        <li>Provide accurate booking information</li>
                        <li>Comply with our safety guidelines</li>
                        <li>Respect our cancellation policies</li>
                        <li>Follow our code of conduct</li>
                      </ul>
                    </div>
                  </section>

                  {/* Booking & Cancellation Section */}
                  <section>
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-corporate-gold to-orange-600 bg-clip-text text-transparent mb-4">
                      Booking & Cancellation
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground">Important policies regarding bookings:</p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                        <li>24-hour advance booking required</li>
                        <li>Free cancellation up to 12 hours before pickup</li>
                        <li>50% charge for late cancellations</li>
                        <li>No-show fee equals full booking amount</li>
                      </ul>
                    </div>
                  </section>

                  {/* Payment Terms Section */}
                  <section>
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-corporate-gold to-orange-600 bg-clip-text text-transparent mb-4">
                      Payment Terms
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground">Our payment policies include:</p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                        <li>Secure payment processing</li>
                        <li>Transparent pricing with no hidden fees</li>
                        <li>Payment required at time of booking</li>
                        <li>Multiple payment methods accepted</li>
                      </ul>
                    </div>
                  </section>

                  {/* Liability Section */}
                  <section>
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-corporate-gold to-orange-600 bg-clip-text text-transparent mb-4">
                      Liability & Insurance
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground">Our service includes:</p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                        <li>Comprehensive insurance coverage</li>
                        <li>Professional licensed chauffeurs</li>
                        <li>Regular vehicle maintenance</li>
                        <li>24/7 customer support</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>

              {/* Contact Support Button */}
              <div className="text-center mt-12">
                <Button variant="glow" size="lg" asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}