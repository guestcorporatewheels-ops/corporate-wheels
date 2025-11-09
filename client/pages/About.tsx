import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "John Dev",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80",
  },
  {
    name: "Sarah Connor",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80",
  },
  {
    name: "Ahmed Hassan",
    role: "Lead Chauffeur",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80",
  },
];

export default function About() {
  return (
    <main className="relative bg-background text-foreground min-h-screen scroll-smooth">
      {/* Animated SVG background - luxury wave */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-full h-64 pointer-events-none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,160 C480,320 960,0 1440,160"
          stroke="#F4C430"
          strokeWidth="60"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </motion.svg>

      {/* Hero Section - Redesigned */}
      <section className="relative pt-40 pb-32 text-center flex flex-col items-center justify-center overflow-hidden">
        {/* Animated SVGs from Business page */}
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-7xl md:text-9xl font-heading text-white mb-10 tracking-tight drop-shadow-xl">
            The Art of{" "}
            <span className="text-corporate-gold">Luxury Travel</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the future of premium rides—where sustainability,
            technology, and hospitality meet.
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
            With over a decade of experience, Corporate Wheels is trusted by
            Fortune 500 companies, celebrities, and discerning travelers
            worldwide. Our commitment to safety, comfort, and environmental
            responsibility sets us apart.
          </p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block mb-12"
          >
            <Button variant="glow" size="lg" className="text-lg px-10 py-5">
              <Link to="/booking">book a ride</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
      <section className="relative w-full max-w-6xl mx-auto mt-8 z-10">
        {/* Image Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
              <img
                src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&q=80"
                alt="Luxury Fleet"
                className="rounded-2xl w-full h-[500px] object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-heading text-white mb-3">
                  Premium Fleet
                </h3>
                <p className="text-white/90">
                  Experience luxury with our carefully curated collection of
                  premium vehicles
                </p>
              </div>
            </div>
            {/* Accent SVG */}
            <motion.svg
              className="absolute -bottom-4 -right-4 w-24 h-24 z-0 opacity-80"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#F4C430"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
            </motion.svg>
          </motion.div>

          {/* Right Side Images with Stats */}
          <div className="space-y-8">
            {/* Top Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-70 transition-opacity duration-500" />
              <img
                src="https://plus.unsplash.com/premium_photo-1661306646017-c3f9293fdbd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvZmVzc2lvbmFsJTIwQ2hhdWZmZXVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                alt="Chauffeur Service"
                className="w-full h-[240px] object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-heading text-white mb-2">
                  Professional Chauffeurs
                </h3>
                <p className="text-white/90 text-sm">
                  Expert drivers with years of experience
                </p>
              </div>
            </motion.div>

            {/* Bottom Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Stats Card 1 */}
              <div className="bg-white/[0.07] backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-corporate-gold/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-corporate-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h4 className="text-3xl font-bold text-corporate-gold mb-2">
                  10+
                </h4>
                <p className="text-white/80 text-sm">Years of Excellence</p>
              </div>

              {/* Stats Card 2 */}
              <div className="bg-white/[0.07] backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-corporate-gold/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-corporate-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-3xl font-bold text-corporate-gold mb-2">
                  50K+
                </h4>
                <p className="text-white/80 text-sm">Happy Clients</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <svg
            className="w-32 h-32 blur-md opacity-40"
            viewBox="0 0 128 128"
            fill="none"
          >
            <circle cx="64" cy="64" r="56" fill="#F4C430" fillOpacity="0.18" />
            <circle
              cx="64"
              cy="64"
              r="48"
              stroke="#FF6B35"
              strokeWidth="8"
              fill="none"
            />
          </svg>
        </div>
        {/* Why Choose Corporate Wheels Section */}
        <section className="relative max-w-6xl mx-auto mt-14 text-center z-10 py-16 px-4">
          {/* Animated glowing SVG accent */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 -top-8 w-24 h-24 z-0 blur-md opacity-70"
            viewBox="0 0 96 96"
            fill="none"
          >
            <rect
              x="8"
              y="8"
              width="80"
              height="80"
              rx="24"
              fill="#FF6B35"
              fillOpacity="0.18"
            />
            <rect
              x="16"
              y="16"
              width="64"
              height="64"
              rx="16"
              stroke="#F4C430"
              strokeWidth="4"
              fill="none"
            />
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-12"
          >
            <h2 className="text-4xl font-heading text-corporate-gold mb-6 drop-shadow-lg">
              Why Choose Corporate Wheels?
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              We blend luxury, reliability, and eco-consciousness for a truly
              elevated travel experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Premium Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-white/[0.07] backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8 group hover:bg-white/[0.09] transition-all duration-300"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-corporate-gold to-orange-600 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-heading text-corporate-gold mt-6 mb-4">
                Premium Experience
              </h3>
              <ul className="text-left text-muted-foreground space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-corporate-gold rounded-full mr-2"></span>
                  Personalized service
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-corporate-gold rounded-full mr-2"></span>
                  Professional chauffeurs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-corporate-gold rounded-full mr-2"></span>
                  Luxury vehicles
                </li>
              </ul>
            </motion.div>

            {/* Global Coverage Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-white/[0.07] backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8 group hover:bg-white/[0.09] transition-all duration-300"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-corporate-gold to-orange-600 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-heading text-corporate-gold mt-6 mb-4">
                Global Coverage
              </h3>
              <ul className="text-left text-muted-foreground space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-corporate-gold rounded-full mr-2"></span>
                  Worldwide service
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-corporate-gold rounded-full mr-2"></span>
                  Local expertise
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-corporate-gold rounded-full mr-2"></span>
                  24/7 availability
                </li>
              </ul>
            </motion.div>

            {/* Smart Technology Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative bg-white/[0.07] backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8 group hover:bg-white/[0.09] transition-all duration-300"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-corporate-gold to-orange-600 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-heading text-corporate-gold mt-6 mb-4">
                Smart Technology
              </h3>
              <ul className="text-left text-muted-foreground space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-corporate-gold rounded-full mr-2"></span>
                  Easy booking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-corporate-gold rounded-full mr-2"></span>
                  Real-time tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-corporate-gold rounded-full mr-2"></span>
                  Digital payments
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center"
            >
              <div className="w-12 h-12 rounded-full bg-corporate-gold/20 flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-corporate-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-heading text-corporate-gold">
                  Safety First
                </h4>
                <p className="text-muted-foreground">
                  Professional drivers & maintained vehicles
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center"
            >
              <div className="w-12 h-12 rounded-full bg-corporate-gold/20 flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-corporate-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-heading text-corporate-gold">
                  Always On Time
                </h4>
                <p className="text-muted-foreground">
                  Punctual and reliable service
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </section>

      {/* Mission, Vision & Core Values Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 space-y-12">
          {/* Mission - image left, text right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80&auto=format&fit=crop"
              alt="Our Mission"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl shadow-lg w-full h-64 object-cover border-2 border-corporate-gold"
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-3xl font-heading text-corporate-gold mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4">
                To redefine executive transportation through tailored, discreet
                and punctual chauffeur services — where luxury is seamless from
                booking to drop-off.
              </p>
              <ul className="list-disc pl-6 text-left text-muted-foreground space-y-2">
                <li>Absolute discretion and privacy for every client</li>
                <li>
                  Punctuality backed by real-time flight & traffic monitoring
                </li>
                <li>Consistent five-star customer experiences</li>
              </ul>
            </motion.div>
          </div>

          {/* Vision - image right, text left */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-3xl font-heading text-corporate-gold mb-4">
                Our Vision
              </h2>

              <p className="text-muted-foreground mb-4">
                To be the foremost choice for luxury travel — setting new
                benchmarks in professionalism, sustainability and client
                experience across cities.
              </p>
              <ul className="list-disc pl-6 text-left text-muted-foreground space-y-2">
                <li>Expand thoughtfully to strategic markets</li>
                <li>Invest in eco-luxury fleets and technology</li>
                <li>Create lasting partnerships built on trust</li>
              </ul>
            </motion.div>
            <motion.img
              src="https://images.unsplash.com/photo-1750409221671-d925a6d7126c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt="Our Vision"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl shadow-lg w-full h-64 object-cover border-2 border-corporate-gold"
            />
          </div>

          {/* Core Values */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/8 rounded-xl p-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-heading text-corporate-gold mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground mb-4">
                We operate on principles that ensure every journey is secure,
                comfortable and exceptional.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong>Professionalism:</strong> Courtesy, presentation and
                  attention to detail on every ride.
                </li>
                <li>
                  <strong>Discretion:</strong> Confidential service for VIPs and
                  corporate clients.
                </li>
                <li>
                  <strong>Punctuality:</strong> Timely arrivals with proactive
                  real-time adjustments.
                </li>
                <li>
                  <strong>Luxury:</strong> Premium vehicles, amenities and
                  pristine service standards.
                </li>
                <li>
                  <strong>Customer Focus:</strong> Personalized journeys
                  tailored to each client's needs.
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80&auto=format&fit=crop"
                alt="Core Values"
                className="rounded-xl shadow-lg w-full max-w-md object-cover border-2 border-corporate-gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-32 bg-gradient-to-b from-black via-black/95 to-black relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-corporate-gold/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-corporate-gold/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-corporate-gold/20 blur-xl rounded-full"></div>
                <span className="relative bg-gradient-to-r from-corporate-gold to-corporate-gold/80 text-transparent bg-clip-text text-4xl md:text-6xl font-bold font-heading">
                  Our Culture
                </span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              At Corporate Wheels, our values are more than words—they're the
              driving force behind every journey, every interaction, and every
              innovation.
            </motion.p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Customer Focus",
                description:
                  "We put our customers at the heart of every decision, ensuring exceptional service at every touchpoint.",
                icon: "🎯",
                gradient: "from-purple-500/20 to-corporate-gold/20",
              },
              {
                title: "Drive for Excellence",
                description:
                  "Continuously raising the bar through innovation and dedication to superior quality.",
                icon: "⭐",
                gradient: "from-corporate-gold/20 to-orange-500/20",
              },
              {
                title: "Born to Innovate",
                description:
                  "Embracing change and pioneering new solutions in the transportation industry.",
                icon: "💡",
                gradient: "from-blue-500/20 to-corporate-gold/20",
              },
              {
                title: "Growing Global",
                description:
                  "Expanding our reach while maintaining consistent quality across borders.",
                icon: "🌍",
                gradient: "from-green-500/20 to-corporate-gold/20",
              },
              {
                title: "Ownership",
                description:
                  "Taking responsibility and pride in our work, treating every task as our own.",
                icon: "🔑",
                gradient: "from-red-500/20 to-corporate-gold/20",
              },
              {
                title: "Creativity",
                description:
                  "Finding innovative solutions to complex challenges through creative thinking.",
                icon: "✨",
                gradient: "from-pink-500/20 to-corporate-gold/20",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex"
              >
                <div
                  className={`relative bg-gradient-to-br ${value.gradient} p-[1px] rounded-2xl backdrop-blur-lg w-full flex`}
                >
                  <div className="bg-black/80 rounded-2xl p-8 w-full flex flex-col justify-between relative backdrop-blur-sm min-h-[320px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-corporate-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                    <div className="relative z-10 flex flex-col flex-1">
                      <div className="mb-6 text-5xl transform group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-corporate-gold text-xl font-bold mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="relative py-16">
        <svg
          className="absolute left-8 top-8 w-24 h-24 z-0 animate-pulse"
          viewBox="0 0 96 96"
          fill="none"
        >
          <rect
            x="8"
            y="8"
            width="80"
            height="80"
            rx="24"
            fill="#FF6B35"
            fillOpacity="0.12"
          />
          <rect
            x="16"
            y="16"
            width="64"
            height="64"
            rx="16"
            stroke="#F4C430"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172"
            alt="Electric Fleet"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl shadow-lg w-full max-w-md mx-auto border-2 border-corporate-gold"
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8"
          >
            <h2 className="text-3xl font-heading text-corporate-gold mb-4">
              Sustainability Commitment
            </h2>
            <p className="text-muted-foreground mb-4">
              We offset all carbon emissions and invest in a modern electric
              fleet. Our goal is to make every ride eco-friendly without
              compromising luxury.
            </p>
            <ul className="list-disc pl-6 text-left text-muted-foreground">
              <li>100% carbon offset for every trip</li>
              <li>Electric and hybrid luxury vehicles</li>
              <li>Green partnerships and initiatives</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16">
        <svg
          className="absolute left-1/2 -translate-x-1/2 -top-10 w-32 h-32 z-0 animate-pulse"
          viewBox="0 0 128 128"
          fill="none"
        >
          <polygon
            points="64,8 120,120 8,120"
            fill="#E6A700"
            fillOpacity="0.13"
          />
          <polygon
            points="64,24 104,112 24,112"
            stroke="#FF6B35"
            strokeWidth="5"
            fill="none"
          />
        </svg>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading text-white mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center"
            >
              <svg
                width="32"
                height="32"
                fill="#F4C430"
                className="mx-auto mb-4"
              >
                <circle cx="16" cy="16" r="16" />
              </svg>
              <p className="text-lg text-white mb-4">
                “The best chauffeur experience I’ve ever had. Professional,
                punctual, and truly luxurious.”
              </p>
              <p className="text-corporate-gold">— Emily R.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center"
            >
              <svg
                width="32"
                height="32"
                fill="#F4C430"
                className="mx-auto mb-4"
              >
                <circle cx="16" cy="16" r="16" />
              </svg>
              <p className="text-lg text-white mb-4">
                “Corporate Wheels sets the standard for sustainable luxury
                travel.”
              </p>
              <p className="text-corporate-gold">— Michael C.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center"
            >
              <svg
                width="32"
                height="32"
                fill="#F4C430"
                className="mx-auto mb-4"
              >
                <circle cx="16" cy="16" r="16" />
              </svg>
              <p className="text-lg text-white mb-4">
                “Booking is seamless and the service is always top-notch.”
              </p>
              <p className="text-corporate-gold">— Sarah L.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16">
        <svg
          className="absolute right-8 top-8 w-24 h-24 z-0 animate-pulse"
          viewBox="0 0 96 96"
          fill="none"
        >
          <circle cx="48" cy="48" r="40" fill="#F4C430" fillOpacity="0.14" />
          <circle
            cx="48"
            cy="48"
            r="32"
            stroke="#FF6B35"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        <div className="container mx-auto px-4 hidden">
          <h2 className="text-3xl font-heading text-white mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto mb-4 rounded-full h-24 w-24 object-cover border-4 border-corporate-gold shadow-lg"
                />
                <h3 className="text-xl text-white mb-2">{member.name}</h3>
                <p className="text-corporate-gold mb-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-16">
        <svg
          className="absolute left-16 bottom-8 w-20 h-20 z-0 animate-pulse"
          viewBox="0 0 80 80"
          fill="none"
        >
          <rect
            x="8"
            y="8"
            width="64"
            height="64"
            rx="16"
            fill="#FF6B35"
            fillOpacity="0.10"
          />
          <rect
            x="16"
            y="16"
            width="48"
            height="48"
            rx="8"
            stroke="#F4C430"
            strokeWidth="3"
            fill="none"
          />
        </svg>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-8"
          >
            <h2 className="text-3xl font-heading text-white mb-4">
              Ready for a New Standard?
            </h2>
            <p className="text-muted-foreground mb-6">
              Experience the future of luxury travel. Book your next ride with
              Corporate Wheels today.
            </p>
            <Button variant="glow" size="lg">
              <Link to="/booking"> Book Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </main>
  );
}
