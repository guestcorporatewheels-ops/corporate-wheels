import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Briefcase,
  Clock,
  MapPinned,
  PartyPopper,
  PlaneTakeoff,
  Ship,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

interface ServiceItem {
  title: string;
  desc: string;
  Icon: LucideIcon;
}

const services: ServiceItem[] = [
  {
    title: "Airport Transfers",
    desc: "Effortless transfers from/to all UK airports with real-time flight tracking.",
    Icon: Plane,
  },
  {
    title: "Corporate Chauffeur Services",
    desc: "Chauffeur services specifically meant for business meetings, conventions, and road-shows.",
    Icon: Briefcase,
  },
  {
    title: "Hourly Chauffeur Hire",
    desc: "Customised chauffeur services to suit hectic agendas with multiple meetings back-to-back.",
    Icon: Clock,
  },
  {
    title: "City-to-City Transfer Service",
    desc: "Pleasant city-to-city transfer service within the UK as a comfortable alternative to train journeys.",
    Icon: MapPinned,
  },
  {
    title: "Transportation for Events and Functions",
    desc: "Reliable transportation service for corporate hospitality, sports fixtures, red carpet events, and functions.",
    Icon: PartyPopper,
  },
  {
    title: "Private Jet Transfers",
    desc: "Effortless tarmac/FBO transfer services organised meticulously with regard to flight schedules.",
    Icon: PlaneTakeoff,
  },
  {
    title: "Cruise Ship Transfers",
    desc: "Efficient and luxurious road transfer service between UK ports and airport/private residences.",
    Icon: Ship,
  },
];

export default function Services() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Background SVGs */}
      <svg
        className="absolute top-10 left-10 w-32 h-32 text-corporate-gold/10 rotate-45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      </svg>
      <svg
        className="absolute bottom-20 right-10 w-40 h-40 text-corporate-gold/10 animate-spin-slow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.364-6.364l-2.828 2.828M8.464 15.536l-2.828 2.828M15.536 15.536l2.828 2.828M8.464 8.464L5.636 5.636"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      <div className="container relative">
        <SectionHeading
          tagline="What We Offer"
          title="Our Key Services"
          subtitle="Premium chauffeur solutions tailored for business travel, private journeys, and every occasion in between."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {services.map((service, index) => {
            const isFlipped = !!flipped[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group h-56 [perspective:1200px] cursor-pointer"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={cn(
                    "relative w-full h-full rounded-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]",
                    isFlipped && "[transform:rotateY(180deg)]",
                  )}
                >
                  {/* Front — image */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-corporate-gold/50 flex flex-col items-center justify-center gap-3 p-4 backdrop-blur-sm">
                    <div className="bg-white/5 rounded-full p-4 shadow-inner shadow-corporate-gold/10">
                      <service.Icon className="w-8 h-8 text-corporate-gold" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm font-medium text-white text-center leading-snug">
                      {service.title}
                    </p>
                  </div>

                  {/* Back — content */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-corporate-gold/10 via-black/90 to-black/95 border border-corporate-gold/50 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-sm font-semibold text-corporate-gold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
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
