import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock,
  Car,
  ShieldCheck,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";

interface Reason {
  title: string;
  desc: string;
  Icon: LucideIcon;
}

const reasons: Reason[] = [
  {
    title: "Professional Chauffeurs",
    desc: "Well-bred and well-vetted chauffeurs who respect and honour the privacy of our clients.",
    Icon: BadgeCheck,
  },
  {
    title: "Punctuality",
    desc: "State-of-the-art flight tracking and route planning allow Corporate Wheels to get there before our scheduled times.",
    Icon: Clock,
  },
  {
    title: "Luxury Vehicles",
    desc: "Spick-and-span and modern cars ranging from premium sedans to luxurious limos and MPVs.",
    Icon: Car,
  },
  {
    title: "Comfort & Privacy",
    desc: "Eco-friendly travel, Wi-Fi connection, fresh bottled water, air conditioning, and a quiet zone to do work and relax.",
    Icon: ShieldCheck,
  },
  {
    title: "Flexible Travel Options",
    desc: "Customised routes and flexible travel options that can fit into your busy schedule.",
    Icon: CalendarClock,
  },
];

export default function WhyChooseCorporateWheels() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_20%,rgba(230,167,0,0.06),transparent)]" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative order-1"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
            <img
              src="/images/cw-placeholder.svg"
              alt="Corporate Wheels luxury chauffeur service"
              className="w-full h-full object-cover aspect-[4/5]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-corporate-gold/5 blur-2xl" />
        </motion.div>

        {/* Content */}
        <div className="order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 sm:w-12 bg-corporate-gold/60" />
              <span className="w-1.5 h-1.5 rotate-45 bg-corporate-gold shrink-0" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-corporate-gold">
                The Corporate Wheels Difference
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-8">
              Why Choose Corporate Wheels
            </h2>
          </motion.div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-4"
              >
                <div className="shrink-0 h-fit p-2.5 rounded-lg border border-white/10 bg-white/5 text-corporate-gold">
                  <reason.Icon className="size-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{reason.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
