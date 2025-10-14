import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

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
        <div className="overflow-hidden">
          <motion.div className="flex gap-6" animate={controls}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[22rem] max-w-md p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02]"
              >
                <p className="text-sm text-white">“{t.quote}”</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {t.name} • {t.role}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
