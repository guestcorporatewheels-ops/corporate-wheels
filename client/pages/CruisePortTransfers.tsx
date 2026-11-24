import { MotionConfig } from "framer-motion";
import { Armchair, BadgeCheck, Handshake, Luggage, Plane, Ship, Waves, Wifi } from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import ServiceSection from "@/components/premium/ServiceSection";
import { cruiseContent, cruiseLabels } from "@/components/cruise/content";

const { title, intro, sections } = cruiseContent;
const [ports, comfort] = sections;

/** /services/london-cruise-transfer — built from "CW Contents/Premium Cruise Port TransfersCW.docx". */
export default function CruisePortTransfers() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro[0]} path="/services/london-cruise-transfer" />

        <PageHero
          tagline={cruiseLabels.heroTagline}
          title={title}
          goldSuffix="Port Transfers"
          subtitle={intro[0]}
          breadcrumb={title}
          image="/images/cruise/cruise-hero.jpg"
          nextId="port-to-city"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />

          <ServiceSection
            id="port-to-city"
            index={1}
            tagline={cruiseLabels.sections[0]}
            heading={ports.heading}
            paragraph={ports.paragraphs[0]}
            features={ports.bullets}
            icons={[Ship, Plane, Waves, Handshake]}
            image="/images/cruise/cruise-port.jpg"
            imageAlt="Chauffeur greeting cruise passengers with their luggage at a UK cruise terminal"
          />

          <ServiceSection
            id="long-distance-comfort"
            index={2}
            tagline={cruiseLabels.sections[1]}
            heading={comfort.heading}
            paragraph={comfort.paragraphs[0]}
            features={comfort.bullets}
            icons={[Luggage, Armchair, Wifi, BadgeCheck]}
            image="/images/cruise/cruise-comfort.jpg"
            imageAlt=""
            variant="band"
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
