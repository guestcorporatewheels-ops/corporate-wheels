import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { cn } from "@/lib/utils";

function FloatingSVGs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      <motion.svg
        width="180"
        height="180"
        viewBox="0 0 100 100"
        className="absolute left-4 top-20 opacity-30"
        initial={{ y: -10, rotate: 0 }}
        animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <defs>
          <linearGradient id="b1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E6A700" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#b1)" />
      </motion.svg>

      <motion.svg
        width="140"
        height="140"
        viewBox="0 0 100 100"
        className="absolute right-4 top-40 opacity-25"
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <defs>
          <linearGradient id="b2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E53E3E" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="18" fill="url(#b2)" />
      </motion.svg>

      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="absolute left-1/3 bottom-24 opacity-20"
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        <defs>
          <linearGradient id="b3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F4C430" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E6A700" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path d="M50 10 L90 50 L50 90 L10 50Z" fill="url(#b3)" />
      </motion.svg>
    </div>
  );
}

function ParticleLayer({ count = 12 }: { count?: number }) {
  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: `${Math.round(Math.random() * 100)}%`,
    size: 6 + Math.round(Math.random() * 18),
    delay: Math.random() * 6,
    duration: 8 + Math.random() * 8,
    opacity: 0.15 + Math.random() * 0.45,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gradient-to-br from-[#E6A700] to-[#FF6B35] blur-sm"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            transform: `translateY(0)`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-10, -40, -10], opacity: [0, p.opacity, 0] }}
          transition={{
            delay: p.delay,
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function AnimatedGradientBg({ className = "" }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <div
        className="absolute -top-20 -left-16 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl btn-gradient-animate"
        style={{
          backgroundImage:
            "linear-gradient(120deg,#F4C430 0%,#E6A700 25%,#FF6B35 60%,#E53E3E 100%)",
        }}
      />
      <div
        className="absolute -bottom-28 -right-20 h-[32rem] w-[32rem] rounded-full opacity-10 blur-3xl btn-gradient-animate"
        style={{
          backgroundImage:
            "linear-gradient(60deg,#E53E3E 0%,#FF6B35 40%,#E6A700 70%,#F4C430 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(230,167,0,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />

      {/* Subtle moving gradient overlay */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 w-[150%] h-[150%] opacity-30 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(230,167,0,0.12), transparent 10%), radial-gradient(circle at 80% 80%, rgba(255,107,53,0.08), transparent 12%)",
          mixBlendMode: "screen",
        }}
        animate={{ x: [0, 20, 0], y: [0, 10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Hero() {
  const { displayText, isComplete } = useTypingAnimation(
    "Made for Business Travel.",
    70,
    300,
  );
  return (
    <section className="relative pt-20 pb-16 min-h-[60vh] flex items-center overflow-hidden w-full">
      <AnimatedGradientBg />
      <ParticleLayer count={16} />
      <FloatingSVGs />
      <div className="container px-4 w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl w-full"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading text-white leading-tight">
            <span className="text-gradient-gold inline-block">
              {displayText}
            </span>
            {!isComplete && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-[hsl(var(--primary))] ml-1"
              >
                |
              </motion.span>
            )}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
            Centralized travel, reliable billing, and vetted chauffeurs for
            teams and executives. Scale your ground travel with control and
            visibility.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button size="lg" variant="glow" className="w-full sm:w-auto">
              Start a Business Account
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Talk to Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({
  title,
  desc,
  delay = 0,
}: {
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-glow"
    >
      <h3 className="text-xl font-heading text-white">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function Features() {
  const items = [
    {
      t: "Centralized Billing",
      d: "Consolidated monthly invoices, cost centers, and custom policies.",
    },
    {
      t: "Admin Controls",
      d: "Invite users, set ride limits, approve travel, and track usage live.",
    },
    {
      t: "Priority Support",
      d: "24/7 support with proactive ride monitoring for executives.",
    },
    {
      t: "Global Coverage",
      d: "Trusted chauffeurs across major cities and airports worldwide.",
    },
    {
      t: "Compliance & Safety",
      d: "Background checks, vehicle standards, and live trip tracking.",
    },
    {
      t: "Integrations",
      d: "Calendar and SSO-friendly flows that fit your stack.",
    },
  ];
  return (
    <section className="relative py-16 overflow-hidden w-full">
      {/* Animated SVG background */}
      <motion.svg
        className="absolute left-4 top-6 w-24 h-24 opacity-20 pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ scale: 0.9, rotate: 0 }}
        animate={{ scale: [0.9, 1.05, 0.9], rotate: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="50" cy="50" r="40" fill="url(#f1)" />
        <defs>
          <radialGradient id="f1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E6A700" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.08" />
          </radialGradient>
        </defs>
      </motion.svg>
      <div className="container px-4 w-full max-w-full">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-heading text-white text-center"
        >
          Built for Operations & Finance
        </motion.h2>
        <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Feature key={it.t} title={it.t} desc={it.d} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorldwidePresence() {
  const cities = [
    {
      name: "London",
      image: "/images/business/cities/Noimage.jpg",
      stats: "500+ rides/month",
    },
    {
      name: "Dubai",
      image: "/images/business/cities/Noimage.jpg",
      stats: "300+ rides/month",
    },
    {
      name: "Singapore",
      image: "/images/business/cities/Noimage.jpg",
      stats: "400+ rides/month",
    },
    {
      name: "New York",
      image: "/images/business/cities/Noimage.jpg",
      stats: "600+ rides/month",
    },
    {
      name: "Tokyo",
      image: "/images/business/cities/Noimage.jpg",
      stats: "350+ rides/month",
    },
    {
      name: "Paris",
      image: "/images/business/cities/Noimage.jpg",
      stats: "450+ rides/month",
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_100%,rgba(230,167,0,0.08)_0%,transparent_70%)]"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Animated SVG background */}
      <motion.svg
        className="absolute right-4 top-12 w-20 h-20 opacity-20 pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="10" y="10" width="80" height="80" rx="18" fill="url(#wp1)" />
        <defs>
          <linearGradient id="wp1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E6A700" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.08" />
          </linearGradient>
        </defs>
      </motion.svg>
      <div className="container px-4 w-full max-w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading text-white mb-4">
            In action around the world
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From airport transfers to multi-city event logistics, we're trusted
            by corporations worldwide for reliable executive transport.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-[4/3] group"
            >
              <img
                src={city.image}
                alt={`Corporate transport in ${city.name}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{city.name}</h3>
                <p className="text-sm text-white/80">{city.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnterpriseFeatures() {
  const items = [
    {
      t: "Enterprise-grade security",
      d: "SAML SSO, role-based access, and secure invoicing for large organisations.",
    },
    {
      t: "Custom billing & reporting",
      d: "Detailed invoicing, cost centers, and exportable spend reports.",
    },
    {
      t: "Policy controls",
      d: "Set ride approval workflows, spend limits and preferred vehicle classes.",
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden w-full">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-0 top-4 w-56 h-56 rounded-full opacity-10 blur-3xl btn-gradient-animate"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#E6A700 0%, #FF6B35 50%, #E53E3E 100%)",
          }}
        />
      </div>
      <div className="container px-4 w-full max-w-full">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading text-white text-center"
        >
          Enterprise features
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-white/6 bg-white/4 backdrop-blur-sm"
            >
              <h4 className="text-lg font-medium text-white">{it.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  const logos = ["Google", "Slack", "SAP", "Oracle"];
  return (
    <section className="relative py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading text-white text-center"
        >
          Integrations
        </motion.h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Connect with your existing tools — calendar sync, SSO, reporting and
          expense platforms.
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {logos.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white/4 rounded-lg p-6 flex items-center justify-center border border-white/6"
            >
              <span className="text-muted-foreground">{l}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const studies = [
    {
      title: "Global Tech Summit",
      desc: "Coordinated 200+ executive transfers across 3 days in multiple cities. Achieved 100% on-time performance.",
      image: "/images/business/case-studies/Noimage.jpg",
      stats: ["200+ Transfers", "3 Cities", "100% On-time"],
    },
    {
      title: "Financial Conference",
      desc: "24/7 dedicated support for 50+ VIP attendees. Custom billing for different cost centers.",
      image: "/images/business/case-studies/Noimage.jpg",
      stats: ["50+ VIPs", "24/7 Support", "18% Cost Savings"],
    },
    {
      title: "Fashion Week",
      desc: "Luxury fleet coordination for designer showcases. Real-time tracking and schedule adjustments.",
      image: "/images/business/case-studies/Noimage.jpg",
      stats: ["100+ Routes", "Premium Fleet", "Live Tracking"],
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden w-full">
      {/* Animated SVG background */}
      <motion.svg
        className="absolute left-4 bottom-6 w-20 h-20 opacity-20 pointer-events-none"
        viewBox="0 0 100 100"
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="50" cy="50" rx="40" ry="30" fill="url(#cs1)" />
        <defs>
          <radialGradient id="cs1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E6A700" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.07" />
          </radialGradient>
        </defs>
      </motion.svg>
      <div className="container px-4 w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how leading organizations streamline their executive
            transportation with our platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {studies.map((study, i) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden bg-black/40 border border-white/6 group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {study.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.stats.map((stat, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/80"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-16 w-full overflow-hidden">
      <div className="container px-4 w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-corporate-gold/20 to-corporate-gold/0 p-6 md:p-10"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading text-white">
            Ready to streamline ground travel?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Create a business account in minutes and start booking with control
            and visibility.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button size="lg" variant="glow" className="w-full sm:w-auto">
              Create Account
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Business() {
  return (
    <div className="w-full overflow-x-hidden">
      <main className="relative bg-background text-foreground min-h-screen">
        <Hero />
        <Features />
        <EnterpriseFeatures />
        <WorldwidePresence />
        <CaseStudies />
        <Integrations />
        <CTA />
      </main>
    </div>
  );
}
