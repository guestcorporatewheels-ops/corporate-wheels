import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { cn } from "@/lib/utils";

function AnimatedGradientBg({ className = "" }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full opacity-20 blur-3xl btn-gradient-animate" style={{ backgroundImage: "linear-gradient(120deg,#F4C430,#E6A700,#FF6B35,#E53E3E)" }} />
      <div className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-10 blur-3xl btn-gradient-animate" style={{ backgroundImage: "linear-gradient(60deg,#E53E3E,#FF6B35,#E6A700,#F4C430)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(230,167,0,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
    </div>
  );
}

function Hero() {
  const { displayText, isComplete } = useTypingAnimation(
    "Made for Business Travel.",
    70,
    300
  );
  return (
    <section className="relative pt-28 pb-20 min-h-[70vh] flex items-center">
      <AnimatedGradientBg />
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading text-white leading-tight">
            <span className="text-gradient-gold inline-block">{displayText}</span>
            {!isComplete && (
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="text-[hsl(var(--primary))] ml-1">|</motion.span>
            )}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Centralized travel, reliable billing, and vetted chauffeurs for teams and executives. Scale your ground travel with control and visibility.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" variant="glow">Start a Business Account</Button>
            <Button size="lg" variant="outline">Talk to Sales</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ title, desc, delay = 0 }: { title: string; desc: string; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay }} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-glow">
      <h3 className="text-xl font-heading text-white">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function Features() {
  const items = [
    { t: "Centralized Billing", d: "Consolidated monthly invoices, cost centers, and custom policies." },
    { t: "Admin Controls", d: "Invite users, set ride limits, approve travel, and track usage live." },
    { t: "Priority Support", d: "24/7 support with proactive ride monitoring for executives." },
    { t: "Global Coverage", d: "Trusted chauffeurs across major cities and airports worldwide." },
    { t: "Compliance & Safety", d: "Background checks, vehicle standards, and live trip tracking." },
    { t: "Integrations", d: "Calendar and SSO-friendly flows that fit your stack." },
  ];
  return (
    <section className="relative py-20">
      <div className="container">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading text-white text-center">
          Built for Operations & Finance
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Feature key={it.t} title={it.t} desc={it.d} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RandomImageGrid() {
  const topics = ["business", "meeting", "airport", "luxury-car", "city", "executive"];
  return (
    <section className="relative py-20">
      <div className="container">
        <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-heading text-white mb-8 text-center">
          In action around the world
        </motion.h3>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }} className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <img
                src={`https://source.unsplash.com/random/800x600?${topics[i % topics.length]}&sig=${i + 11}`}
                alt="Business travel"
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-gradient-to-r from-corporate-gold/20 to-corporate-gold/0 p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-heading text-white">Ready to streamline ground travel?</h3>
          <p className="mt-2 text-muted-foreground">Create a business account in minutes and start booking with control and visibility.</p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" variant="glow">Create Account</Button>
            <Button size="lg" variant="secondary">Contact Sales</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Business() {
  return (
    <main className="relative bg-background text-foreground">
      <Hero />
      <Features />
      <RandomImageGrid />
      <CTA />
    </main>
  );
}
