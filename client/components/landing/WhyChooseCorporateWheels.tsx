import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock,
  Car,
  ShieldCheck,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

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
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(230,167,0,0.07),transparent)]" />

      <div className="container relative">
        <SectionHeading
          tagline="The Corporate Wheels Difference"
          title="Why Choose Corporate Wheels"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-corporate-gold/40 transition-colors"
            >
              {/* Visual header — stands in for a photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-corporate-gold/15 via-black/50 to-black/70 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,167,0,0.3),transparent_60%)]" />
                <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(45deg,white_1px,transparent_1px)] bg-[length:14px_14px]" />
                <div className="relative p-5 rounded-2xl bg-black/40 border border-corporate-gold/30 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                  <reason.Icon
                    className="size-8 text-corporate-gold"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="p-6">
                <h3 className="font-heading text-lg text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
