import { MotionConfig } from "framer-motion";
import { BaggageClaim, Handshake, PlaneLanding, Wifi } from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import ServiceSection from "@/components/premium/ServiceSection";
import PremiumCTA from "@/components/premium/PremiumCTA";
import AirportIntro from "@/components/airport/AirportIntro";
import AirportsGrid from "@/components/airport/AirportsGrid";
import TailoredTravel from "@/components/airport/TailoredTravel";
import { airportContent, airportLabels } from "@/components/airport/content";

const { title, sections, bottom } = airportContent;
const includes = sections[2];
const [bookLabel, quoteLabel] = bottom.buttons;

/** /services/airport-transfers — built from "CW Contents/Airport transfers CW .docx". */
export default function AirportTransfersService() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={sections[0].paragraphs[0]} path="/services/airport-transfers" />

        <PageHero
          tagline={airportLabels.hero.tagline}
          title={title}
          goldSuffix="Transfers"
          subtitle={airportLabels.hero.subtitle}
          breadcrumb={title}
          image="/images/airport/airport-hero.jpg"
          nextId="airport-intro"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />

          <AirportIntro />
          <AirportsGrid />
          <ServiceSection
            id="service-includes"
            index={3}
            tagline={airportLabels.sections[2].tagline}
            heading={includes.heading}
            paragraph={includes.paragraphs[0]}
            features={includes.bullets}
            icons={[Handshake, PlaneLanding, BaggageClaim, Wifi]}
            image="/images/airport/airport-includes.jpg"
            imageAlt="Chauffeur loading luggage into a luxury saloon at an airport arrivals kerb"
            reverse
          />
          <TailoredTravel />

          <PremiumCTA
            tagline={airportLabels.bottom.tagline}
            heading={bottom.heading}
            goldSuffix="Airport Chauffeur?"
            text={bottom.text}
            primary={{ label: bookLabel, to: "/booking" }}
            secondary={{ label: quoteLabel, to: "/contact" }}
            image="/images/airport/airport-hero.jpg"
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
