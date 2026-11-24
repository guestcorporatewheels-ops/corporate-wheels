import { MotionConfig } from "framer-motion";
import {
  Briefcase,
  CalendarClock,
  CalendarDays,
  Clock3,
  Coffee,
  DoorOpen,
  Handshake,
  Heart,
  Luggage,
  MapPin,
  PlaneLanding,
  PlaneTakeoff,
  ReceiptPoundSterling,
  Route,
  ShieldCheck,
  Ship,
  Timer,
  Trophy,
  Wifi,
  Wine,
  type LucideIcon,
} from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import ServiceSection from "@/components/premium/ServiceSection";
import PremiumCTA from "@/components/premium/PremiumCTA";
import { servicesContent, servicesTaglines } from "@/components/services/content";

// Visual treatment per section, in document order (copy comes from content.ts).
const visuals: {
  id: string;
  image: string;
  imageAlt: string;
  icons: LucideIcon[];
  variant?: "split" | "band";
}[] = [
  {
    id: "airport-transfers",
    image: "/images/services/airport-transfers.jpg",
    imageAlt: "Chauffeur greeting a traveller in an airport arrivals hall",
    icons: [Handshake, PlaneLanding, MapPin],
  },
  {
    id: "corporate-chauffeur-services",
    image: "/images/services/corporate-chauffeur.jpg",
    imageAlt: "Executive working on a laptop in the back of a chauffeur-driven car",
    icons: [Wifi, CalendarDays, Briefcase],
  },
  {
    id: "hourly-chauffeur-hire",
    image: "/images/services/hourly-hire.jpg",
    imageAlt: "",
    icons: [Clock3, Route, CalendarClock],
    variant: "band",
  },
  {
    id: "city-to-city-transfers",
    image: "/images/services/city-to-city.jpg",
    imageAlt: "Luxury saloon on a motorway through the English countryside at golden hour",
    icons: [DoorOpen, Coffee, ReceiptPoundSterling],
  },
  {
    id: "special-events",
    image: "/images/services/special-events.jpg",
    imageAlt: "Chauffeur holding the door for a couple arriving at an evening event",
    icons: [Wine, Heart, Trophy],
  },
  {
    id: "private-jet-transfers",
    image: "/images/services/private-jet.jpg",
    imageAlt: "",
    icons: [PlaneTakeoff, ShieldCheck, Timer],
    variant: "band",
  },
  {
    id: "cruise-transfers",
    image: "/images/services/cruise-transfers.jpg",
    imageAlt: "Chauffeur loading luggage at a cruise terminal with a cruise ship behind",
    icons: [Ship, Luggage, MapPin],
  },
];

const { title, intro, sections, bottom } = servicesContent;
const [bookLabel, quoteLabel] = bottom.buttons;

export default function ViewAllServices() {
  let splitCount = 0;

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro[0]} path="/services" />

        <PageHero
          tagline={servicesTaglines.hero}
          title={title}
          goldSuffix="Services"
          subtitle={intro[0]}
          breadcrumb={title}
          image="/images/services/services-hero.jpg"
          nextId={visuals[0].id}
        >
          {/* Quick links to each service (labels are the document's own headings) */}
          <nav aria-label="Services on this page" className="flex flex-wrap justify-center lg:justify-start gap-2.5">
            {sections.map((s, i) => (
              <a
                key={s.heading}
                href={`#${visuals[i].id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(visuals[i].id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.06] px-4 py-2 text-sm text-neutral-800 dark:text-white/85 backdrop-blur-md transition-colors hover:border-corporate-gold/60 hover:text-corporate-gold"
              >
                {s.heading}
              </a>
            ))}
          </nav>
        </PageHero>

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />
          {sections.map((s, i) => {
            const v = visuals[i];
            const reverse = v.variant !== "band" && splitCount++ % 2 === 1;
            return (
              <ServiceSection
                key={s.heading}
                id={v.id}
                index={i + 1}
                tagline={servicesTaglines.sections[i]}
                heading={s.heading}
                paragraph={s.paragraphs[0]}
                features={s.bullets}
                icons={v.icons}
                image={v.image}
                imageAlt={v.imageAlt}
                variant={v.variant}
                reverse={reverse}
              />
            );
          })}

          <PremiumCTA
            tagline={servicesTaglines.bottom}
            heading={bottom.heading}
            goldSuffix="Your Route?"
            text={bottom.text}
            primary={{ label: bookLabel, to: "/booking" }}
            secondary={{ label: quoteLabel, to: "/contact" }}
            image="/images/services/services-hero.jpg"
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
