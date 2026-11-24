import { MotionConfig } from "framer-motion";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import PremiumCTA from "@/components/premium/PremiumCTA";
import { AccountBenefits, TeamsIntro } from "@/components/corporate/TeamsAndAccounts";
import { CabinInclusions, ExecutionProtocol, LuxuryConnections } from "@/components/corporate/CabinRoutesProtocol";
import { corporateContent, corporateLabels } from "@/components/corporate/content";

const { title, sections } = corporateContent;
const cta = sections[5];
const [primaryLabel, secondaryLabel] = cta.buttons;

/** /services/corporate-travel — built from "CW Contents/Corporate TravelCW.docx". */
export default function CorporateTravelService() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={sections[0].paragraphs[0]} path="/services/corporate-travel" />

        <PageHero
          tagline={corporateLabels.hero.tagline}
          title={title}
          goldSuffix="Travel"
          subtitle={corporateLabels.hero.subtitle}
          breadcrumb={title}
          image="/images/corporate/corporate-hero.jpg"
          nextId="corporate-teams"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />
          <TeamsIntro />
          <AccountBenefits />
          <CabinInclusions />
          <LuxuryConnections />
          <ExecutionProtocol />
          <PremiumCTA
            tagline={corporateLabels.sections[5]}
            heading={cta.heading}
            goldSuffix="Corporate Travel Standards"
            text={cta.paragraphs[0]}
            primary={{ label: primaryLabel, to: "/booking" }}
            secondary={{ label: secondaryLabel, to: "/contact" }}
            image="/images/corporate/corporate-hero.jpg"
            highlights={cta.bullets}
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
