import { motion } from "framer-motion";
import BookingWidget from "./BookingWidget";
import { Button } from "@/components/ui/button";
import { Download, PlayCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26,183,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />
      </div>
      <div className="container grid gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm tracking-widest text-secondary mb-3 uppercase">
            Premium Chauffeur Service
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-white">
            Luxury Travel, <span className="text-gradient">Simplified.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Book your ride in seconds — global chauffeur service at your
            fingertips.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button variant="glow" className="px-6 h-12">
              Book a Ride
            </Button>
            <Button variant="outline-glow" className="px-6 h-12" asChild>
              <a href="#download" className="inline-flex items-center">
                <Download className="mr-2" /> Download App
              </a>
            </Button>
          </div>
        </motion.div>
        <div id="booking">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
