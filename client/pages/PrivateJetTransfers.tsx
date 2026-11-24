import { MotionConfig } from "framer-motion";
import { Baby, Car, Dog, Luggage, PlaneLanding, PlaneTakeoff, Radar, Sparkles, UserCheck } from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import ServiceSection from "@/components/premium/ServiceSection";
import { privateJetContent, privateJetLabels } from "@/components/private-jet/content";

const { title, intro, sections } = privateJetContent;
const [airside, fleet, standards] = sections;
const L = privateJetLabels.sections;

/** /services/private-jet-chauffeur — built from "CW Contents/Private Jet Chauffeur TransfersCW.docx". */
export default function PrivateJetTransfers() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro} path="/services/private-jet-chauffeur" />

        <PageHero
          tagline={privateJetLabels.heroTagline}
          title={title}
          goldSuffix="Chauffeur Transfers"
          subtitle={intro}
          breadcrumb={title}
          image="/images/private-jet/jet-hero.jpg"
          nextId="jet-airside"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />

          <ServiceSection
            id="jet-airside"
            index={1}
            tagline={L[0].tagline}
            heading={airside.heading}
            paragraph={airside.paragraphs[0]}
            features={airside.bullets}
            icons={[PlaneLanding, Radar, PlaneTakeoff]}
            image="/images/private-jet/jet-fbo.jpg"
            imageAlt="Chauffeur greeting a passenger on the tarmac beside a private jet"
          />

          <ServiceSection
            id="jet-fleet"
            index={2}
            tagline={L[1].tagline}
            heading={fleet.heading}
            paragraph={fleet.paragraphs[0]}
            features={fleet.bullets}
            icons={[Car, UserCheck, Sparkles]}
            image="/images/private-jet/jet-fleet.jpg"
            imageAlt=""
            variant="band"
          />

          <ServiceSection
            id="jet-standards"
            index={3}
            tagline={L[2].tagline}
            heading={standards.heading}
            paragraph={L[2].subtitle}
            features={standards.bullets}
            icons={[Luggage, Baby, Dog]}
            image="/images/private-jet/jet-standards.jpg"
            imageAlt="Chauffeur loading luggage into a saloon on a private jet apron"
            reverse
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
