import { MotionConfig } from "framer-motion";
import { Armchair, BadgeCheck, Droplets, EyeOff, Luggage, PlugZap, Thermometer, Users, VolumeX, Wifi } from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import ServiceSection from "@/components/premium/ServiceSection";
import PremiumCTA from "@/components/premium/PremiumCTA";
import { premiumFleetContent, premiumFleetLabels } from "@/components/premium-fleet/content";

const { title, intro, sections, bottom } = premiumFleetContent;
const [comfort, onboard, capacity] = sections;

/** /fleet/executive-cars — built from "CW Contents/Premium FleetCW.docx". */
export default function ExecutiveCars() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro} path="/fleet/executive-cars" />

        <PageHero
          tagline={premiumFleetLabels.heroTagline}
          title={title}
          goldSuffix="Fleet"
          subtitle={intro}
          breadcrumb={title}
          image="/images/premium-fleet/pf-hero.jpg"
          nextId="pf-comfort"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />

          <ServiceSection
            id="pf-comfort"
            index={1}
            tagline={premiumFleetLabels.sections[0].tagline}
            heading={comfort.heading}
            paragraph={comfort.paragraphs[0]}
            features={comfort.bullets}
            icons={[VolumeX, Armchair, Thermometer, EyeOff]}
            image="/images/premium-fleet/pf-interior.jpg"
            imageAlt="Rear cabin of a luxury executive saloon with leather seats and privacy blinds"
          />

          <ServiceSection
            id="pf-onboard"
            index={2}
            tagline={premiumFleetLabels.sections[1].tagline}
            heading={onboard.heading}
            paragraph={onboard.paragraphs[0]}
            features={onboard.bullets}
            icons={[Wifi, PlugZap, Droplets]}
            image="/images/premium-fleet/pf-onboard.jpg"
            imageAlt=""
            variant="band"
          />

          <ServiceSection
            id="pf-capacity"
            index={3}
            tagline={premiumFleetLabels.sections[2].tagline}
            heading={capacity.heading}
            paragraph={premiumFleetLabels.sections[2].subtitle}
            features={capacity.bullets}
            icons={[Users, Luggage, BadgeCheck]}
            image="/images/premium-fleet/pf-luggage.jpg"
            imageAlt="Chauffeur loading suitcases into the boot of an executive saloon"
            reverse
          />

          <PremiumCTA
            tagline={premiumFleetLabels.bottomTagline}
            heading={bottom.heading}
            goldSuffix="Premium Fleet Travel"
            text={bottom.text}
            primary={{ label: bottom.buttons[0], to: "/contact" }}
            image="/images/premium-fleet/pf-hero.jpg"
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
