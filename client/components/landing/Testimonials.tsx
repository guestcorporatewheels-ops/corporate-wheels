import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({
          x: "-50%",
          transition: { duration: 20, ease: "linear" },
        });
        await controls.start({ x: 0, transition: { duration: 0 } });
      }
    };
    loop();
  }, [controls]);

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
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: "-50%",
              transition: { duration: 20, ease: "linear" },
            })
          }
        >
          <motion.div
            ref={containerRef}
            className="flex gap-6 items-stretch"
            animate={controls}
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
