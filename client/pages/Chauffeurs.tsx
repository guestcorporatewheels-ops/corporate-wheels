import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { cn } from "@/lib/utils";

const IMG1 = "https://cdn.builder.io/api/v1/image/assets%2F61ee9e27d554424082cbdf1901a81607%2Fc149abdc6bf547a797bc2fb41e2ec216?format=webp&width=800";
const IMG2 = "https://cdn.builder.io/api/v1/image/assets%2F61ee9e27d554424082cbdf1901a81607%2F4a60117866cb448d89dd68fb27dd4adc?format=webp&width=800";
const IMG3 = "https://cdn.builder.io/api/v1/image/assets%2F61ee9e27d554424082cbdf1901a81607%2F0d53bbf70cd84f6b96ff8ea3c57ba289?format=webp&width=800";

function AnimatedGradientBg({ className = "" }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
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
  );
}

function FloatingSVGs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <motion.svg
        width="180"
        height="180"
        viewBox="0 0 100 100"
        className="absolute left-8 top-24 opacity-40"
        initial={{ y: -10, rotate: 0 }}
        animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#E6A700" />
            <stop offset="1" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="18" fill="url(#g1)" />
      </motion.svg>

      <motion.svg
        width="140"
        height="140"
        viewBox="0 0 100 100"
        className="absolute right-12 top-48 opacity-30"
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <circle cx="50" cy="50" r="40" fill="rgba(255,107,53,0.85)" />
      </motion.svg>
    </div>
  );
}

function Hero() {
  const { displayText, isComplete } = useTypingAnimation(
    "For Professional Chauffeurs.",
    70,
    300,
  );
  return (
    <section className="relative pt-28 pb-20 min-h-[70vh] flex items-center overflow-hidden">
      <AnimatedGradientBg />
      <FloatingSVGs />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-heading text-white leading-tight">
            <span className="text-gradient inline-block">{displayText}</span>
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
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Grow your business with high-value rides, reliable payouts, and
            24/7 support. Set your availability and drive with confidence.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" variant="glow">
              Apply as Chauffeur
            </Button>
            <Button size="lg" variant="outline">
              Learn Requirements
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefit({ title, desc, delay = 0 }: { title: string; desc: string; delay?: number }) {
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

function Benefits() {
  const items = [
    { t: "Reliable payments", d: "Monthly payouts with clear statements and flexible settlement options." },
    { t: "Complete schedule control", d: "Choose your hours, accept rides that fit your timeline and vehicle type." },
    { t: "Join an international crew", d: "Operate across cities and get access to global demand and partners." },
    { t: "Superior account management", d: "Easily manage rides, documentation, and schedules from the partner portal." },
    { t: "Dedicated support team", d: "24/7 partner support for admin issues, payouts and safety." },
    { t: "Growth opportunities", d: "Promotions and priority access to premium corporate demand." },
  ];

  return (
    <section className="relative py-20">
      <div className="container">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading text-white text-center">
          Partner benefits
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div key={it.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-white/3 opacity-60 pointer-events-none" />
              <div className="relative p-6 border border-white/6 rounded-xl bg-white/3 backdrop-blur-sm hover:scale-[1.01] transform transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-corporate-gold to-orange-400 text-black shadow-sm">
                      {/* simple icon */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12h18" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 8h.01M6 16h.01M10 8h.01M10 16h.01" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{it.t}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequirementsOnboarding() {
  return (
    <section className="relative py-20">
      {/* Decorative animated gradients */}
      <div className="absolute -left-24 -top-12 w-80 h-80 rounded-full opacity-20 blur-3xl bg-gradient-to-br from-corporate-gold to-orange-400 animate-[spin_18s_linear_infinite]" />
      <div className="absolute right-[-6rem] top-40 w-72 h-72 rounded-full opacity-12 blur-2xl bg-gradient-to-br from-red-500 to-orange-400 animate-[spin_20s_linear_infinite]" />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-xl overflow-hidden shadow-2xl border border-white/6">
            <img src={"https://cdn.builder.io/api/v1/image/assets%2F61ee9e27d554424082cbdf1901a81607%2F080d709fb303444194d516e473a34087?format=webp&width=800"} alt="Requirements" className="w-full h-88 object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 className="text-3xl font-heading text-white">Requirements</h3>
            <p className="mt-3 text-muted-foreground max-w-xl">Joining is straightforward — meet the local requirements, keep vehicles in top condition, and follow our quality standards. We provide clear guidance and support throughout the process.</p>

            <div className="mt-6 grid gap-3">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-white/5 text-corporate-gold">✓</div>
                <div className="text-sm text-muted-foreground">Valid registration, licenses, and insurance</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-white/5 text-corporate-gold">✓</div>
                <div className="text-sm text-muted-foreground">Clean, compliant and well-maintained vehicles</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-white/5 text-corporate-gold">✓</div>
                <div className="text-sm text-muted-foreground">Ongoing policy & quality updates</div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Button size="md" variant="glow">View local requirements</Button>
              <Button size="md" variant="outline">Contact Partnership</Button>
            </div>
          </motion.div>
        </div>

        <div className="my-12" />

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 className="text-3xl font-heading text-white">Onboarding</h3>
            <ol className="mt-6 space-y-4 text-muted-foreground list-decimal list-inside">
              <li>Apply through our onboarding portal</li>
              <li>Upload required documentation for review</li>
              <li>Complete short training and interview</li>
              <li>Accept your first ride and go live</li>
            </ol>
            <div className="mt-6">
              <Button size="md" variant="glow">Apply now</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-xl overflow-hidden shadow-2xl border border-white/6">
            <img src={IMG2} alt="Onboarding" className="w-full h-88 object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Can anyone become a partner?", a: "We evaluate applicants based on local regulations, vehicle standards and available demand in your city." },
    { q: "How do I get paid?", a: "Payouts are processed weekly with clear statements and support for any queries." },
    { q: "Which vehicles are eligible?", a: "Professional sedans and vans that meet our quality standards are eligible; check local rules for specifics." },
  ];

  return (
    <section className="relative py-20">
      <div className="absolute left-0 top-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <div className="container grid gap-8 lg:grid-cols-2 items-start">
        <div>
          <h3 className="text-3xl md:text-4xl font-heading text-white">Frequently asked questions</h3>
          <div className="mt-6 space-y-3">
            {faqs.map((f, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group rounded-md border border-white/6 bg-white/3 p-4">
                <summary className="cursor-pointer text-white font-medium flex items-center justify-between">
                  <span>{f.q}</span>
                  <svg className="transition-transform duration-200 group-open:rotate-90" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="mt-2 text-sm text-muted-foreground">{f.a}</div>
              </motion.details>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute -left-12 -top-8 w-48 h-48 rounded-full bg-gradient-to-br from-corporate-gold to-orange-400 opacity-10 blur-2xl pointer-events-none" />
          <img src={IMG3} alt="Chauffeur FAQ" className="w-full rounded-lg shadow-lg object-cover h-[520px]" />
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 btn-gradient-animate opacity-30" style={{ backgroundImage: 'linear-gradient(90deg,#E6A700 0%, #FF6B35 50%, #E53E3E 100%)', filter: 'blur(40px)' }} />
      </div>
      <div className="container text-center">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-heading text-white">
          Join our global chauffeur community
        </motion.h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Access premium rides, reliable payouts, and a supportive partner team.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg" variant="glow">Apply now</Button>
          <Button size="lg" variant="outline">Contact support</Button>
        </div>
      </div>
    </section>
  );
}

export default function Chauffeurs() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <Hero />
      <Benefits />
      <RequirementsOnboarding />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
