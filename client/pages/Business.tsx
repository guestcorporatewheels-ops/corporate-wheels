import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

function FloatingSVGs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        className="absolute left-8 top-24 opacity-30"
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
        width="160"
        height="160"
        viewBox="0 0 100 100"
        className="absolute right-12 top-48 opacity-25"
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
        width="120"
        height="120"
        viewBox="0 0 100 100"
        className="absolute left-1/3 bottom-32 opacity-20"
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
        className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full opacity-20 blur-3xl btn-gradient-animate"
        style={{
          backgroundImage:
            "linear-gradient(120deg,#F4C430 0%,#E6A700 25%,#FF6B35 60%,#E53E3E 100%)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-10 blur-3xl btn-gradient-animate"
        style={{
          backgroundImage:
            "linear-gradient(60deg,#E53E3E 0%,#FF6B35 40%,#E6A700 70%,#F4C430 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(230,167,0,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />

      {/* Subtle moving gradient overlay */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 w-[150%] h-[150%] opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(230,167,0,0.12), transparent 10%), radial-gradient(circle at 80% 80%, rgba(255,107,53,0.08), transparent 12%)",
          mixBlendMode: "screen",
        }}
        animate={{ x: [0, 40, 0], y: [0, 20, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Hero() {
  const { displayText, isComplete } = useTypingAnimation(
    "Enterprise Travel Solutions.",
    70,
    300,
  );
  return (
    <section className="relative pt-28 pb-20 min-h-[80vh] flex items-center overflow-hidden">
      <AnimatedGradientBg />
      <ParticleLayer count={20} />
      <FloatingSVGs />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E6A700] animate-pulse" />
              <span className="text-sm text-white/80">Trusted by Fortune 500 Companies</span>
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-heading text-white leading-tight">
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
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Transform your corporate travel with our premium chauffeur service. 
              Streamlined booking, real-time tracking, and enterprise-grade security 
              for teams of any size.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="glow" className="sm:min-w-[200px]">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="sm:min-w-[200px]">
                Schedule Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-white/10" />
                ))}
              </div>
              <p className="text-sm text-white/80">
                Join <span className="text-[#E6A700]">2,000+</span> companies worldwide
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=80" 
              alt="Business Dashboard Interface"
              className="rounded-lg border border-white/10 shadow-2xl"
            />
            <div className="absolute -right-8 -bottom-8 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-lg z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E6A700]/20 flex items-center justify-center">
                  <span className="text-[#E6A700] text-xl">↗</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Monthly Bookings</p>
                  <p className="text-[#E6A700] text-lg font-bold">+127%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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

function Stats() {
  const stats = [
    { label: "Corporate clients", value: "2,000+", prefix: "", suffix: "" },
    { label: "Cities covered", value: "150", prefix: "", suffix: "+" },
    { label: "Monthly rides", value: "25", prefix: "", suffix: "K+" },
    { label: "Client retention", value: "97", prefix: "", suffix: "%" },
  ];

  return (
    <section className="relative py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.prefix}
                <span className="text-gradient-gold">{stat.value}</span>
                {stat.suffix}
              </h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      t: "Smart Booking Platform",
      d: "AI-powered booking system with predictive analytics and route optimization.",
      icon: "🎯"
    },
    {
      t: "Real-time Fleet Tracking",
      d: "Live vehicle tracking, instant notifications, and journey analytics.",
      icon: "🚗"
    },
    {
      t: "Enterprise Management",
      d: "Multi-level admin controls, custom policies, and department-wise billing.",
      icon: "🏢"
    },
    {
      t: "Premium Support",
      d: "24/7 dedicated account manager and priority assistance for executives.",
      icon: "💎"
    },
    {
      t: "Global Network",
      d: "Access to vetted chauffeurs and premium vehicles worldwide.",
      icon: "🌍"
    },
    {
      t: "Smart Integrations",
      d: "Seamless connection with your travel, expense, and calendar tools.",
      icon: "🔄"
    },
  ];
  
  return (
    <section className="relative py-20 overflow-hidden">
      <motion.svg
        className="absolute left-10 top-10 w-32 h-32 opacity-20 pointer-events-none"
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
      
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading text-white mb-4">
              Built for Modern Enterprises
            </h2>
            <p className="text-lg text-muted-foreground">
              Streamline your corporate travel with powerful features designed for scale and efficiency
            </p>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 text-3xl">{it.icon}</div>
              <h3 className="text-xl font-heading text-white mb-2 group-hover:text-gradient-gold">{it.t}</h3>
              <p className="text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
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
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=80",
      stats: "500+ rides/month",
    },
    {
      name: "Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80",
      stats: "300+ rides/month",
    },
    {
      name: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop&q=80",
      stats: "400+ rides/month",
    },
    {
      name: "New York",
      image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=800&auto=format&fit=crop&q=80",
      stats: "600+ rides/month",
    },
    {
      name: "Tokyo",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80",
      stats: "350+ rides/month",
    },
    {
      name: "Paris",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80",
      stats: "450+ rides/month",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
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
        className="absolute right-10 top-16 w-28 h-28 opacity-20 pointer-events-none"
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
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading text-white mb-4">In action around the world</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From airport transfers to multi-city event logistics, we're trusted by corporations worldwide
            for reliable executive transport.
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
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-0 top-8 w-72 h-72 rounded-full opacity-10 blur-3xl btn-gradient-animate"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#E6A700 0%, #FF6B35 50%, #E53E3E 100%)",
          }}
        />
      </div>
      <div className="container">
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
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
      stats: ["200+ Transfers", "3 Cities", "100% On-time"]
    },
    {
      title: "Financial Conference",
      desc: "24/7 dedicated support for 50+ VIP attendees. Custom billing for different cost centers.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80",
      stats: ["50+ VIPs", "24/7 Support", "18% Cost Savings"]
    },
    {
      title: "Fashion Week",
      desc: "Luxury fleet coordination for designer showcases. Real-time tracking and schedule adjustments.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80",
      stats: ["100+ Routes", "Premium Fleet", "Live Tracking"]
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated SVG background */}
      <motion.svg
        className="absolute left-10 bottom-10 w-28 h-28 opacity-20 pointer-events-none"
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
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how leading organizations streamline their executive transportation with our platform.
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
                <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{study.desc}</p>
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
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E6A700]/5 to-transparent" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#E6A700]/20 via-[#FF6B35]/10 to-[#E6A700]/5 p-12 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E6A700] animate-pulse" />
                <span className="text-sm text-white/80">Limited Time Offer</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading text-white leading-tight">
                Transform Your <span className="text-gradient-gold">Corporate Travel</span> Today
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Get 3 months free when you sign up for an annual enterprise plan.
                Plus, a dedicated account manager to ensure smooth onboarding.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="glow" className="sm:min-w-[200px]">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="sm:min-w-[200px]">
                  Book Demo
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <motion.div
                className="absolute -right-6 -top-6 w-24 h-24"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#E6A700]/30 animate-spin-slow" />
              </motion.div>
              <div className="relative z-10 p-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E6A700]/20 flex items-center justify-center">
                      <span className="text-[#E6A700]">✓</span>
                    </div>
                    <span className="text-white font-medium">Enterprise Features</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {["Dedicated Support", "Custom Integration", "Priority Booking"].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E6A700]" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Business() {
  return (
    <main className="relative bg-background text-foreground">
      <ScrollToTop />
      <Hero />
      <Stats />
      <Features />
      <WorldwidePresence />
      <EnterpriseFeatures />
      <CaseStudies />
      <Integrations />
      <CTA />
    </main>
  );
}
