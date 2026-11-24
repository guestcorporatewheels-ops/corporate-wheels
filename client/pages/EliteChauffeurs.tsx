import { MotionConfig } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  Gauge,
  HandHelping,
  Headset,
  Lock,
  Moon,
  Navigation,
  PlaneLanding,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import IntroSplit from "@/components/premium/IntroSplit";
import ServiceSection from "@/components/premium/ServiceSection";
import { eliteContent, eliteLabels } from "@/components/elite/content";

const { title, intro, sections } = eliteContent;
const [vetting, etiquette, driving] = sections;

/** /why-choose-us/elite-chauffeurs — built from "CW Contents/Elite ChauffeursCW.docx". */
export default function EliteChauffeurs() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro[0]} path="/why-choose-us/elite-chauffeurs" />

        <PageHero
          tagline={eliteLabels.hero.tagline}
          title={title}
          goldSuffix="Chauffeurs"
          subtitle={eliteLabels.hero.subtitle}
          breadcrumb={title}
          image="/images/elite/elite-hero.jpg"
          nextId="elite-intro"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />

          <IntroSplit
            id="elite-intro"
            tagline={eliteLabels.introTagline}
            paragraphs={intro}
            image="/images/elite/elite-intro.jpg"
            imageAlt="Corporate Wheels chauffeur in suit and white gloves beside a luxury saloon"
          />

          <ServiceSection
            id="vetting"
            index={1}
            tagline={eliteLabels.sections[0]}
            heading={vetting.heading}
            paragraph={vetting.paragraphs[0]}
            features={vetting.bullets}
            icons={[ShieldCheck, BadgeCheck, Scale, ClipboardCheck]}
            image="/images/elite/elite-vetting.jpg"
            imageAlt="Chauffeur completing pre-journey vehicle and compliance checks"
            reverse
          />

          <ServiceSection
            id="etiquette"
            index={2}
            tagline={eliteLabels.sections[1]}
            heading={etiquette.heading}
            paragraph={etiquette.paragraphs[0]}
            features={etiquette.bullets}
            icons={[Lock, BriefcaseBusiness, HandHelping, Moon]}
            image="/images/elite/elite-etiquette.jpg"
            imageAlt=""
            variant="band"
          />

          <ServiceSection
            id="driving"
            index={3}
            tagline={eliteLabels.sections[2]}
            heading={driving.heading}
            paragraph={driving.paragraphs[0]}
            features={driving.bullets}
            icons={[Gauge, Navigation, PlaneLanding, Headset]}
            image="/images/elite/elite-driving.jpg"
            imageAlt="Chauffeur driving through central London at night"
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
