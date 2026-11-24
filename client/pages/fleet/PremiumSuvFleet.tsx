import { MotionConfig } from "framer-motion";
import { Armchair, BadgeCheck, Droplets, Luggage, MoveVertical, PlugZap, ShieldCheck, Users, Wifi } from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import ServiceSection from "@/components/premium/ServiceSection";
import { premiumSuvContent, premiumSuvLabels } from "@/components/premium-suv/content";

const { title, intro, sections } = premiumSuvContent;
const [presence, amenities, capacity] = sections;

/** /fleet/premium-suvs — built from "CW Contents/Premium SUV FleetCW.docx". */
export default function PremiumSuvFleet() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro} path="/fleet/premium-suvs" />

        <PageHero
          tagline={premiumSuvLabels.heroTagline}
          title={title}
          goldSuffix="SUV Fleet"
          subtitle={intro}
          breadcrumb={title}
          image="/images/premium-suv/suv-hero.jpg"
          nextId="suv-presence"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />

          <ServiceSection
            id="suv-presence"
            index={1}
            tagline={premiumSuvLabels.sections[0].tagline}
            heading={presence.heading}
            paragraph={presence.paragraphs[0]}
            features={presence.bullets}
            icons={[MoveVertical, Armchair, ShieldCheck]}
            image="/images/premium-suv/suv-interior.jpg"
            imageAlt="Rear cabin of a luxury SUV with leather seats and a panoramic glass roof"
          />

          <ServiceSection
            id="suv-amenities"
            index={2}
            tagline={premiumSuvLabels.sections[1].tagline}
            heading={amenities.heading}
            paragraph={amenities.paragraphs[0]}
            features={amenities.bullets}
            icons={[Wifi, PlugZap, Droplets]}
            image="/images/premium-suv/suv-onboard.jpg"
            imageAlt=""
            variant="band"
          />

          <ServiceSection
            id="suv-capacity"
            index={3}
            tagline={premiumSuvLabels.sections[2].tagline}
            heading={capacity.heading}
            paragraph={premiumSuvLabels.sections[2].subtitle}
            features={capacity.bullets}
            icons={[Users, Luggage, BadgeCheck]}
            image="/images/premium-suv/suv-luggage.jpg"
            imageAlt="Chauffeur loading large suitcases into the boot of a luxury SUV"
            reverse
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
