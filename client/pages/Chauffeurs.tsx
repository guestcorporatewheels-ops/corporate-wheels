import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { cn } from "@/lib/utils";

function AnimatedGradientBg({ className = "" }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute -top-24 -right-24 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl btn-gradient-animate" style={{ backgroundImage: "linear-gradient(135deg,#FF6B35,#E6A700,#F4C430,#E53E3E)" }} />
      <div className="absolute -bottom-32 -left-32 h-[40rem] w-[40rem] rounded-full opacity-10 blur-3xl btn-gradient-animate" style={{ backgroundImage: "linear-gradient(90deg,#E53E3E,#FF6B35,#E6A700,#F4C430)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(229,62,62,0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
    </div>
  );
}

function Hero() {
  const { displayText, isComplete } = useTypingAnimation(
    "For Professional Chauffeurs.",
    70,
    300
  );
  return (
    <section className="relative pt-28 pb-20 min-h-[70vh] flex items-center">
      <AnimatedGradientBg />
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading text-white leading-tight">
            <span className="text-gradient inline-block">{displayText}</span>
            {!isComplete && (
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="text-[hsl(var(--primary))] ml-1">|</motion.span>
            )}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Grow your business with high-value rides, reliable payouts, and 24/7 support. Set your availability and drive with confidence.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" variant="glow">Apply as Chauffeur</Button>
            <Button size="lg" variant="outline">Learn Requirements</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefit({ title, desc, delay = 0 }: { title: string; desc: string; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay }} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-glow">
      <h3 className="text-xl font-heading text-white">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function Benefits() {
  const items = [
    { t: "Premium Rides", d: "Airport, hourly, and business-class trips in your city." },
    { t: "Fast Payouts", d: "Reliable payments with clear statements and support." },
    { t: "Flexible Schedule", d: "Drive when you want. Set your hours and availability." },
    { t: "Safety First", d: "Verified passengers, trip details, and in-ride support." },
    { t: "Growth Support", d: "Dedicated partner support and quality standards guidance." },
    { t: "Global Network", d: "Access demand from travelers around the world." },
  ];
  return (
    <section className="relative py-20">
      <div className="container">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading text-white text-center">
          Partner benefits
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Benefit key={it.t} title={it.t} desc={it.d} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RandomImageGrid() {
  const topics = ["chauffeur", "mercedes", "sedan", "airport", "city-night", "luxury-car"];
  return (
    <section className="relative py-20">
      <div className="container">
        <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-heading text-white mb-8 text-center">
          A look from the road
        </motion.h3>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }} className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <img
                src={`https://source.unsplash.com/random/800x600?${topics[i % topics.length]}&sig=${i + 101}`}
                alt="Chauffeur ride"
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-gradient-to-r from-red-500/20 to-orange-500/10 p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-heading text-white">Join as a professional partner</h3>
          <p className="mt-2 text-muted-foreground">Apply today to access premium rides and a global passenger network.</p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" variant="glow">Apply Now</Button>
            <Button size="lg" variant="secondary">See Requirements</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Chauffeurs() {
  return (
    <main className="relative bg-background text-foreground">
      <Hero />
      <Benefits />
      <RandomImageGrid />
      <CTA />
    </main>
  );
}
