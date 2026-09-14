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
  image: string;
}

const reasons: Reason[] = [
  {
    title: "Professional Chauffeurs",
    desc: "Well-bred and well-vetted chauffeurs who respect and honour the privacy of our clients.",
    Icon: BadgeCheck,
    image: "/images/why-choose/professional-chauffeurs.jpg",
  },
  {
    title: "Punctuality",
    desc: "State-of-the-art flight tracking and route planning allow Corporate Wheels to get there before our scheduled times.",
    Icon: Clock,
    image: "/images/why-choose/punctuality.jpg",
  },
  {
    title: "Luxury Vehicles",
    desc: "Spick-and-span and modern cars ranging from premium sedans to luxurious limos and MPVs.",
    Icon: Car,
    image: "/images/why-choose/luxury-vehicles.jpg",
  },
  {
    title: "Comfort & Privacy",
    desc: "Eco-friendly travel, Wi-Fi connection, fresh bottled water, air conditioning, and a quiet zone to do work and relax.",
    Icon: ShieldCheck,
    image: "/images/why-choose/comfort-privacy.jpg",
  },
  {
    title: "Flexible Travel Options",
    desc: "Customised routes and flexible travel options that can fit into your busy schedule.",
    Icon: CalendarClock,
    image: "/images/why-choose/flexible-travel.jpg",
  },
];

export default function WhyChooseCorporateWheels() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative">
        <SectionHeading
          tagline="The Corporate Wheels Difference"
          title="Why Choose Corporate Wheels"
          subtitle="Five reasons corporate travellers and private clients keep choosing Corporate Wheels for every journey."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
              {/* Visual header — AI-generated photo */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 p-2 rounded-lg bg-black/50 border border-corporate-gold/40 backdrop-blur-sm">
                  <reason.Icon
                    className="size-5 text-corporate-gold"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="p-5">
                <h3 className="font-heading text-base text-white mb-2">
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
