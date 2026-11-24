import { MotionConfig } from "framer-motion";
import { BadgeCheck, Droplets, EyeOff, Luggage, PlugZap, Sofa, Users, Wifi, Armchair } from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import ServiceSection from "@/components/premium/ServiceSection";
import PremiumCTA from "@/components/premium/PremiumCTA";
import { vanContent, vanLabels } from "@/components/business-van/content";

const { title, intro, sections, bottom } = vanContent;
const [comfort, onboard, capacity] = sections;

/** /fleet/business-vans — built from "CW Contents/Business Van FleetCW.docx". */
export default function BusinessVanFleet() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro} path="/fleet/business-vans" />

        <PageHero
          tagline={vanLabels.heroTagline}
          title={title}
          goldSuffix="Fleet"
          subtitle={intro}
          breadcrumb={title}
          image="/images/business-van/van-hero.jpg"
          nextId="van-comfort"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />

          <ServiceSection
            id="van-comfort"
            index={1}
            tagline={vanLabels.sections[0].tagline}
            heading={comfort.heading}
            paragraph={comfort.paragraphs[0]}
            features={comfort.bullets}
            icons={[Armchair, Sofa, EyeOff]}
            image="/images/business-van/van-interior.jpg"
            imageAlt="Luxury MPV cabin with conference-style leather seating"
          />

          <ServiceSection
            id="van-onboard"
            index={2}
            tagline={vanLabels.sections[1].tagline}
            heading={onboard.heading}
            paragraph={vanLabels.sections[1].subtitle}
            features={onboard.bullets}
            icons={[Wifi, PlugZap, Droplets]}
            image="/images/business-van/van-onboard.jpg"
            imageAlt=""
            variant="band"
          />

          <ServiceSection
            id="van-capacity"
            index={3}
            tagline={vanLabels.sections[2].tagline}
            heading={capacity.heading}
            paragraph={vanLabels.sections[2].subtitle}
            features={capacity.bullets}
            icons={[Users, Luggage, BadgeCheck]}
            image="/images/business-van/van-luggage.jpg"
            imageAlt="Chauffeur loading luggage into a luxury MPV at an airport"
            reverse
          />

          <PremiumCTA
            tagline={vanLabels.bottomTagline}
            heading={bottom.heading}
            goldSuffix="Business Van"
            text={bottom.text}
            primary={{ label: bottom.buttons[0], to: "/contact" }}
            image="/images/business-van/van-hero.jpg"
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
