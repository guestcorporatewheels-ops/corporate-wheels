import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function TravelExperienceCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(230,167,0,0.08),transparent_60%)]" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-corporate-gold/20 px-6 py-16 sm:px-12 sm:py-24 text-center"
        >
          <img
            src="/images/travel-cta-bg.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-br from-corporate-gold/15 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              <span className="text-gradient-gold">Travel Experience, Elevated.</span>
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
              Ready to book your chauffeur? Get your quotation or corporate
              account now.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="glow" size="lg" className="px-8">
                <Link to="/booking">
                  Book Your Journey
                  <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>

              <Button asChild variant="outline-glow" size="lg" className="px-8">
                <Link to="/contact">
                  Get Quotation
                  <FileText className="size-4 ml-1.5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
