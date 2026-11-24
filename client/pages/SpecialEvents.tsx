import { motion, MotionConfig } from "framer-motion";
import { CalendarClock, ClipboardList, Flower2, Shirt } from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import PremiumCTA from "@/components/premium/PremiumCTA";
import { eventsContent, eventsLabels } from "@/components/special-events/content";
import { ExecutionProtocol, InclusionsBand, VenueRoutes, WeddingSection } from "@/components/special-events/EventsSections";

const { title, intro, bottom } = eventsContent;
const introIcons = [Shirt, CalendarClock, Flower2, ClipboardList];

/** /services/special-events — built from "CW Contents/Special EventsCW.docx". */
export default function SpecialEvents() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro.text} path="/services/special-events" />

        <PageHero
          tagline={eventsLabels.heroTagline}
          title={title}
          goldSuffix="Events"
          subtitle={
            <>
              <span className="block font-heading text-xl md:text-2xl text-neutral-900 dark:text-white">{intro.heading}</span>
              <span className="mt-3 block">{intro.text}</span>
            </>
          }
          breadcrumb={title}
          image="/images/special-events/events-hero.jpg"
          nextId="events-wedding"
        >
          <ul className="flex flex-wrap justify-center lg:justify-start gap-2.5">
            {intro.points.map((p, i) => {
              const Icon = introIcons[i];
              return (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white/75 dark:bg-white/[0.06] px-4 py-2 text-sm text-neutral-800 dark:text-white/85 backdrop-blur-md"
                >
                  <Icon aria-hidden className="size-4 text-corporate-gold" />
                  {p}
                </motion.li>
              );
            })}
          </ul>
        </PageHero>

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />
          <WeddingSection />
          <InclusionsBand />
          <VenueRoutes />
          <ExecutionProtocol />
          <PremiumCTA
            tagline={eventsLabels.bottom}
            heading={bottom.heading}
            goldSuffix="Chauffeur Grandeur"
            text={bottom.text}
            primary={{ label: bottom.buttons[0], to: "/booking" }}
            secondary={{ label: bottom.buttons[1], to: "/contact" }}
            highlights={bottom.highlights}
            image="/images/special-events/events-venues.jpg"
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
