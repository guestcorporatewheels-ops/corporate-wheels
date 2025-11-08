import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Exceptional service. My driver was professional and punctual. Truly premium.",
    name: "Ava R.",
    role: "Founder",
  },
  {
    quote: "Smooth airport pickup after a long flight. Highly recommend.",
    name: "Daniel K.",
    role: "CTO",
  },
  {
    quote: "The booking process is effortless and the rides are luxurious.",
    name: "Sophia L.",
    role: "Designer",
  },
  {
    quote: "Reliable and safe. My go-to for business travel.",
    name: "Marcus H.",
    role: "VP Sales",
  },
];

export default function Testimonials() {
  // motion x value used for both auto animation and drag
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<any>(null);
  const startAutoRef = useRef<() => void>(() => {});
  const stopAutoRef = useRef<() => void>(() => {});
  const [halfWidth, setHalfWidth] = useState(0);

  useEffect(() => {
    const measureAndStart = () => {
      const el = containerRef.current as HTMLDivElement | null;
      if (!el) return;
      // total width is scrollWidth (we duplicated items), half is one loop length
      const totalHalf = el.scrollWidth / 2;
      setHalfWidth(totalHalf);

      // duration proportional to content width so speed feels consistent
      const visible = el.clientWidth || 1;
      const duration = Math.max(8, (totalHalf / visible) * 20);

      // stop any running animation
      if (animationRef.current) animationRef.current.stop();

      // animate the motion value from current to -totalHalf and loop
      animationRef.current = animate(x, -totalHalf, {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      });
    };

    startAutoRef.current = measureAndStart;
    stopAutoRef.current = () => {
      if (animationRef.current) animationRef.current.stop();
    };

    // start on mount
    measureAndStart();

    const onResize = () => {
      // reset position and restart to recalc widths
      stopAutoRef.current();
      x.set(0);
      // re-measure on next tick to allow layout to settle
      requestAnimationFrame(() => measureAndStart());
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      stopAutoRef.current();
    };
  }, [x]);

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl text-white">
            What Clients Say
          </h2>
          <p className="mt-2 text-muted-foreground">
            Trusted by travelers worldwide.
          </p>
        </div>
        <div
          className="overflow-hidden"
          onMouseEnter={() => stopAutoRef.current()}
          onMouseLeave={() => startAutoRef.current()}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-6 items-stretch"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: halfWidth ? -halfWidth : 0, right: 0 }}
            dragElastic={0.08}
            onDragStart={() => stopAutoRef.current()}
            onDragEnd={() => startAutoRef.current()}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[22rem] max-w-md p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/6 flex items-center justify-center text-sm font-semibold text-white">
                    {t.name.split(" ")[0][0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white">“{t.quote}”</p>

                <div className="mt-4 flex items-center gap-2">
                  {/* 5 star rating visual */}
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      viewBox="0 0 24 24"
                      className={`w-4 h-4 ${idx < 4 ? "text-corporate-gold" : "text-white/30"}`}
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.555L18.335 24 12 19.896 5.665 24l.635-8.695L.6 9.75l7.732-1.732L12 .587z" />
                    </svg>
                  ))}
                  <span className="text-xs text-muted-foreground">4.8</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
