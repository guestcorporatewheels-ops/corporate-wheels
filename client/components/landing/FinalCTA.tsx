import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(230,167,0,0.08),transparent_60%)]" />
      <div className="container text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
          <span className="block">Ready to ride?</span>
          <span className="block text-gradient-gold">
            Book now and experience the difference.
          </span>
        </h2>

        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Professional chauffeurs, transparent pricing, and UK-wide coverage —
          all in one app.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="glow"
            size="lg"
            className="px-8 btn-gradient-animate"
          >
            <Link to="/booking">Book a Ride</Link>
          </Button>

          <Button variant="outline-glow" size="lg" className="px-8" asChild>
            <a href="#download">Download App</a>
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle className="size-5 text-corporate-gold" />
            <span>Verified chauffeurs</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-corporate-gold"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Transparent pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-corporate-gold"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M3 6h18M3 14h12"
              />
            </svg>
            <span>UK-wide coverage</span>
          </div>
        </div>
      </div>
    </section>
  );
}
