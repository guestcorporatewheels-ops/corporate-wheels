import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { cn } from "@/lib/utils";

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
    "Drive with Excellence.",
    70,
    300,
  );
  return (
    <section className="relative pt-28 pb-20 min-h-[85vh] flex items-center overflow-hidden">
      <AnimatedGradientBg />
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
              <span className="text-sm text-white/80">Now Hiring in Major Cities</span>
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-heading text-white leading-tight">
              <span className="text-gradient-gold inline-block">{displayText}</span>
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
              Join our elite network of professional chauffeurs. Enjoy premium clients, 
              reliable earnings, and flexible scheduling. Take control of your career 
              with our industry-leading platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="glow" className="sm:min-w-[200px]">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="sm:min-w-[200px]">
                View Requirements
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3].map((i) => (
                  <div 
                    key={i} 
                    className="w-12 h-12 rounded-full border-2 border-background bg-white/10"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-${1560000000000 + i}?w=100&h=100&fit=crop)`,
                      backgroundSize: 'cover'
                    }}
                  />
                ))}
              </div>
              <p className="text-sm text-white/80">
                Join <span className="text-[#E6A700]">500+</span> professional chauffeurs
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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=80" 
                alt="Luxury Chauffeur Service"
                className="rounded-lg border border-white/10 shadow-2xl object-cover h-[500px]"
              />
              <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-background bg-[#E6A700]">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80" 
                        alt="Professional Chauffeur"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-background bg-[#E6A700]">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&fit=crop&q=80" 
                        alt="Professional Chauffeur"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-white text-sm">Top Rated Drivers</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E6A700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white text-sm">Professional Vehicles</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-lg z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E6A700]/20 flex items-center justify-center">
                  <span className="text-[#E6A700] text-xl">$</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Average Monthly</p>
                  <p className="text-[#E6A700] text-lg font-bold">$8,500+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Benefit({
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

function Benefits() {
  // Themed dashed-ring icon wrapper matching reference style
  function RingIcon({ children }: { children: React.ReactNode }) {
    const id = Math.random().toString(36).slice(2);
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" className="shrink-0">
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" x2="1">
            <stop offset="0" stopColor="#F4C430" />
            <stop offset="1" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="transparent"
          stroke={`url(#grad-${id})`}
          strokeWidth="3"
          strokeDasharray="4 6"
        />
        <g transform="translate(14,14)">{children}</g>
      </svg>
    );
  }

  // Minimal icons matching semantics
  const IconMoney = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
  const IconClock = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 8v4l3 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
  const IconDoc = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
  const IconManage = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7h18M3 12h18M3 17h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
  const IconHeadset = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 12a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" />
      <rect
        x="3"
        y="12"
        width="4"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="17"
        y="12"
        width="4"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );

  const items = [
    {
      t: "Reliable payments",
      d: "The amount shown with each offer is the minimum that will be transferred to your account – we deduct no further fees or taxes. Monthly payments for your completed rides will be deposited directly to your bank account.",
      icon: <IconMoney />,
    },
    {
      t: "Complete schedule control",
      d: "Select your rides through our reverse auction. Shape your own schedule and simply take the rides that best fit your timeline, location, and vehicle type. We offer A‑to‑B transfers, hourly bookings, City to City rides, and more!",
      icon: <IconClock />,
    },
    {
      t: "Join an international crew",
      d: "As a member of our crew, you'll be able to say you're part of an international service, since we arrange rides for our partners and their guests in many countries.",
      icon: <IconDoc />,
    },
    {
      t: "Superior account management",
      d: "Whether you’re a dispatcher assigning rides to your crew or an owner/operator on the go with some spare time, our app and online Partner Portal are designed to make your life easier. Easily manage all your rides with a few taps or clicks.",
      icon: <IconManage />,
    },
    {
      t: "Dedicated support team",
      d: "Alongside our 24/7 Customer Care who help with ongoing/upcoming rides, our Partner Support Team can assist 24/5 for admin issues via chat and email. Plus, FAQs are at your fingertips in our Partner Help Center.",
      icon: <IconHeadset />,
    },
  ];

  return (
    <section className="relative py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading text-white text-center"
        >
          Partner benefits
        </motion.h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {items.map((it, i) => {
            const col = i < 3 ? "lg:col-span-4" : "lg:col-span-6";
            return (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={cn("relative", col)}
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8   backdrop-blur-sm  shadow-[0_0_15px_rgba(230,167,0,0.25)]">
                  <div className="flex items-start gap-5 text-white">
                    <div className="text-orange-400">
                      <RingIcon>
                        <g className="text-orange-400">{it.icon}</g>
                      </RingIcon>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold tracking-tight text-white">
                        {it.t}
                      </h4>
                      <p className="mt-3 text-[15px] leading-6 text-muted-foreground">
                        {it.d}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RequirementsOnboarding() {
  const requirements = [
    {
      icon: "🚗",
      title: "Vehicle Standards",
      desc: "Luxury meets reliability",
      items: [
        "Premium vehicles less than 5 years old",
        "Regular maintenance & cleanliness",
        "Full insurance coverage",
        "Safety inspection clearance"
      ]
    },
    {
      icon: "📄",
      title: "Documentation",
      desc: "Professional credentials",
      items: [
        "Professional driver's license",
        "Clean driving record",
        "Background check clearance",
        "Business registration"
      ]
    },
    {
      icon: "💼",
      title: "Professional Standards",
      desc: "Excellence in service",
      items: [
        "Professional appearance",
        "Excellent communication skills",
        "Customer service orientation",
        "Flexible availability"
      ]
    }
  ];

  const onboardingSteps = [
    {
      number: "01",
      title: "Initial Application",
      desc: "Complete our online application form with your basic information and qualifications.",
      icon: "✍️"
    },
    {
      number: "02",
      title: "Document Verification",
      desc: "Submit required documents and complete background verification process.",
      icon: "📋"
    },
    {
      number: "03",
      title: "Training Program",
      desc: "Complete our comprehensive training program covering service standards and platform usage.",
      icon: "🎓"
    },
    {
      number: "04",
      title: "Vehicle Inspection",
      desc: "Schedule and pass our detailed vehicle inspection and safety standards check.",
      icon: "🔍"
    }
  ];

  return (
    <section className="relative py-20">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,167,0,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,107,53,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="container mx-auto relative">
        {/* Row 1: Image left, Requirements right */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-white/6"
          >
            <img
              src={
                "https://images.ctfassets.net/ov8o7v78mnye/4vI4gSo7BEj9US3qQIJOGC/885a347cec4b29f25fe2e0079489fc8d/02_Get_to.jpg?w=1280&f=center&q=85&fm=webp"
              }
              alt="Requirements"
              className="w-full h-88 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-heading text-white">Requirements</h3>
            <ul className="mt-4 max-w-xl space-y-2 text-[15px] leading-7 text-muted-foreground list-disc list-inside">
              <li>
                Valid company registration plus licenses and insurance for all
                chauffeurs and vehicles.
              </li>
              <li>
                Vehicles must be clean, undamaged, smoke-free, and in full
                compliance with local regulations.
              </li>
              <li>
                Companies must keep up-to-date with new standards and policies
                and ensure excellent quality.
              </li>
              <li>
                Specifics vary, please check the complete list for your
                location.
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Button size="lg" variant="glow">
                View local requirements
              </Button>
              <Button size="lg" variant="outline">
                Contact Partnership
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="my-12" />

        {/* Row 2: Onboarding left, Image right */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-heading text-white">Onboarding</h3>
            <ol className="mt-4 space-y-3 text-muted-foreground list-decimal list-inside text-[15px] leading-7">
              <li>Apply through our onboarding portal</li>
              <li>Upload required documentation for review</li>
              <li>Complete short training and interview</li>
              <li>Accept your first ride and go live</li>
            </ol>
            <div className="mt-6">
              <Button size="lg" variant="glow">
                Apply now
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-white/6"
          >
            <img
              src={
                "https://images.ctfassets.net/ov8o7v78mnye/6qTZF2EL2byG2vD5X5G8KW/7bc2e2c481580ba65e7da50dfcd7b132/02__2_.jpg?w=1280&f=center&q=85&fm=webp"
              }
              alt="Onboarding"
              className="w-full h-88 object-cover"
            />
          </motion.div>
        </div>

        {/* Row 3: Driving a sustainable future - Image left, Text right */}
        <div className="my-12" />
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-white/6"
          >
            <img
              src={
                "https://images.ctfassets.net/ov8o7v78mnye/7ocxqnMbSIYuxmyXDKNWkb/198471527214467c535938d14e809144/03_Shuttle.jpg?w=1280&f=center&q=85&fm=webp"
              }
              alt="Sustainable future"
              className="w-full h-88 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-heading text-white">
              Driving a sustainable future
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground max-w-xl">
              We’re committed to reducing our environmental impact. We’re moving
              toward making all of our rides electric, while also incorporating
              more electric vehicles into our fleets globally. Every ride since
              2017 is carbon offset and we’re working on offsetting all of our
              carbon emissions since the company’s founding.
            </p>
            <div className="mt-6">
              <Button size="lg" variant="glow">
                Learn more
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Can anyone become a partner?",
      a: "We evaluate applicants based on local regulations, vehicle standards and available demand in your city.",
    },
    {
      q: "How do I get paid?",
      a: "Payouts are processed weekly with clear statements and support for any queries.",
    },
    {
      q: "Which vehicles are eligible?",
      a: "Professional sedans and vans that meet our quality standards are eligible; check local rules for specifics.",
    },
    {
      q: "Which vehicles are eligible?",
      a: "Professional sedans and vans that meet our quality standards are eligible; check local rules for specifics.",
    },
    {
      q: "Which vehicles are eligible?",
      a: "Professional sedans and vans that meet our quality standards are eligible; check local rules for specifics.",
    },
    {
      q: "Which vehicles are eligible?",
      a: "Professional sedans and vans that meet our quality standards are eligible; check local rules for specifics.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-20">
      <div className="absolute left-0 top-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <div className="container grid gap-8 lg:grid-cols-2 items-start">
        <div>
          <h3 className="text-3xl md:text-4xl font-heading text-white">
            Frequently asked questions
          </h3>
          <div className="mt-6 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-md border border-white/6 bg-white/3"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full p-4 text-white font-medium flex items-center justify-between"
                  >
                    <span>{f.q}</span>
                    <motion.svg
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="#fff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={
                      isOpen
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-sm text-muted-foreground">
                      {f.a}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-12 -top-8 w-48 h-48 rounded-full bg-gradient-to-br from-corporate-gold to-orange-400 opacity-10 blur-2xl pointer-events-none" />
          <img
            src={
              "https://images.ctfassets.net/ov8o7v78mnye/6BPRfdSwYGXY525DIjVT70/3e220a07d3292fd9c8f5c71f18c0ee45/Blacklane-LA-Social-37_FAQ.jpg?w=486&h=792&fit=fill&f=center&q=95&fm=webp"
            }
            alt="Chauffeur FAQ"
            className="w-full rounded-lg shadow-lg object-cover h-[520px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
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
                <span className="text-sm text-white/80">Limited Time Bonus</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading text-white leading-tight">
                Start Your Journey as a <span className="text-gradient-gold">Professional Chauffeur</span>
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Join now and receive a $1,000 signing bonus after completing your first 50 rides.
                Plus, get priority access to premium clients.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="glow" className="sm:min-w-[200px]">
                  Apply Today
                </Button>
                <Button size="lg" variant="outline" className="sm:min-w-[200px]">
                  Speak to Team
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
                    <span className="text-white font-medium">Chauffeur Benefits</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {["Flexible Schedule", "Premium Clients", "Weekly Payments"].map((feature) => (
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

function Stats() {
  const stats = [
    { label: "Average Monthly Income", value: "$8,500", prefix: "", suffix: "+" },
    { label: "Active Chauffeurs", value: "500", prefix: "", suffix: "+" },
    { label: "Cities Worldwide", value: "50", prefix: "", suffix: "+" },
    { label: "Client Satisfaction", value: "98", prefix: "", suffix: "%" },
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
              className="text-center p-6 rounded-xl border border-white/10 bg-white/5"
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

export default function Chauffeurs() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <Hero />
      <Stats />
      <Benefits />
      <RequirementsOnboarding />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
