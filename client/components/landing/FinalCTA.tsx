import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,216,180,0.08),transparent_60%)]" />
      <div className="container text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-white">
          Ready to ride? <span className="text-gradient">Book now</span> and experience the difference.
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Professional chauffeurs, transparent pricing, and global coverage — all in one app.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button variant="glow" className="px-6 h-12">Book a Ride</Button>
          <Button variant="outline-glow" className="px-6 h-12" asChild>
            <a href="#download">Download App</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
