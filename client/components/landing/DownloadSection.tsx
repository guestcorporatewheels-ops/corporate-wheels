import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Smartphone, Sparkles, ShieldCheck, MapPin, Clock } from "lucide-react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/siteConfig";

const appScreens = [
  { src: "/images/app/screen-1.jpg", alt: "Corporate Wheels app – book a one-way or hourly ride" },
  { src: "/images/app/screen-2.jpg", alt: "Corporate Wheels app – passenger, luggage and vehicle selection" },
  { src: "/images/app/screen-3.jpg", alt: "Corporate Wheels app – journey and payment summary" },
  { src: "/images/app/screen-4.jpg", alt: "Corporate Wheels app – manage bookings and track your driver" },
  { src: "/images/app/screen-5.jpg", alt: "Corporate Wheels app – booking confirmation" },
  { src: "/images/app/screen-6.jpg", alt: "Corporate Wheels app – sign in to your account" },
];

function AppScreenCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const total = appScreens.length;

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % total), 3500);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, total]);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[480px] w-[270px] sm:h-[533px] sm:w-[300px]">
        {appScreens.map((screen, i) => {
          // position relative to the active card, wrapped to -2..3
          let offset = (i - active + total) % total;
          if (offset > total / 2) offset -= total;
          const visible = Math.abs(offset) <= 1;
          return (
            <motion.button
              type="button"
              key={screen.src}
              onClick={() => setActive(i)}
              aria-label={`Show screenshot ${i + 1}`}
              tabIndex={visible ? 0 : -1}
              className="absolute inset-0 overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/10 dark:ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-gold"
              initial={false}
              animate={{
                x: offset * 70,
                rotate: offset * 6,
                scale: offset === 0 ? 1 : 0.88,
                opacity: visible ? (offset === 0 ? 1 : 0.55) : 0,
                zIndex: 10 - Math.abs(offset),
              }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              style={{ pointerEvents: visible ? "auto" : "none" }}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover"
              />
            </motion.button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-1" role="tablist" aria-label="App screenshots">
        {appScreens.map((screen, i) => (
          <button
            key={screen.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Screenshot ${i + 1}`}
            onClick={() => setActive(i)}
            className="group flex h-6 items-center justify-center px-0.5 focus-visible:outline-none"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-corporate-gold ${
                i === active
                  ? "w-6 bg-corporate-gold"
                  : "w-2 bg-black/20 dark:bg-white/25 group-hover:bg-corporate-gold/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function DownloadSection() {
  return (
    <section id="download" className="py-14 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-corporate-gold/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="container relative z-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-2xl p-8 md:p-12 lg:p-16">
          
          <div className="grid items-center gap-12 lg:gap-20 md:grid-cols-2">
            
            {/* Left: copy + features + actions */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corporate-gold/10 border border-corporate-gold/20 text-corporate-gold text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(230,167,0,0.15)]">
                <Sparkles className="w-4 h-4" />
                <span>Mobile App</span>
              </div>

              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-neutral-900 dark:text-white leading-tight mb-6">
                Effortless travel <br />
                <span className="text-gradient-gold">at your fingertips.</span>
              </h3>

              <p className="text-lg text-neutral-900/70 dark:text-white/70 max-w-xl mb-10 leading-relaxed">
                Download the Corporate Wheels app for instant confirmations, live GPS tracking, and corporate billing — all in your pocket. Available now on iPhone and Android.
              </p>

              {/* Glowing features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: MapPin, text: "Live Tracking & ETA" },
                  { icon: ShieldCheck, text: "Secure Payments" },
                  { icon: Smartphone, text: "One-Tap Booking" },
                  { icon: Clock, text: "24/7 Global Support" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] hover:border-corporate-gold/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-corporate-gold/10 flex items-center justify-center border border-corporate-gold/20 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 text-corporate-gold" />
                    </div>
                    <span className="text-neutral-900/90 dark:text-white/90 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Store badges */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Corporate Wheels on the App Store"
                  className="block rounded-xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-gold"
                >
                  <img
                    src="/app-store-badge.png"
                    alt="Download on the App Store"
                    className="h-14 w-auto"
                  />
                </a>
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Corporate Wheels on Google Play"
                  className="block transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-gold rounded-xl"
                >
                  <img
                    src="/google-play-badge.svg"
                    alt="Get it on Google Play"
                    className="h-14 w-auto"
                  />
                </a>
              </div>
            </motion.div>

            {/* Right: live app screenshots */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end relative mt-10 md:mt-0 lg:pr-16"
            >
              {/* Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-corporate-gold/20 blur-[80px] rounded-full pointer-events-none" />

              <AppScreenCarousel />
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
