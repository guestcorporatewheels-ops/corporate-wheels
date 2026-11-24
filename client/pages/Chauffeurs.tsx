import { MotionConfig } from "framer-motion";
import { Clock3, HeartHandshake, Lock, Sparkles, Wrench } from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import ServiceSection from "@/components/premium/ServiceSection";
import {
  CareersIntro,
  Compliance,
  HowToApply,
  RecruitmentDesk,
  Requirements,
  Roles,
  WhyDrive,
} from "@/components/careers/CareersSections";
import { careersContent, careersLabels } from "@/components/careers/content";

const { title, intro, sections } = careersContent;
const duties = sections[2];

/** /chauffeur-careers — built from "CW Contents/Chauffeur CareersCW.docx". */
export default function Chauffeurs() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro[0]} path="/chauffeur-careers" />

        <PageHero
          tagline={careersLabels.hero.tagline}
          title={title}
          goldSuffix="Corporate Wheels"
          subtitle={careersLabels.hero.subtitle}
          breadcrumb={title}
          image="/images/careers/careers-hero.jpg"
          nextId="careers-intro"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />
          <CareersIntro />
          <WhyDrive />
          <Roles />
          <ServiceSection
            id="responsibilities"
            index={3}
            tagline={careersLabels.sections[2]}
            heading={duties.heading}
            paragraph={duties.paragraphs[0]}
            features={duties.bullets}
            icons={[Clock3, HeartHandshake, Lock, Sparkles, Wrench]}
            image="/images/careers/careers-duties.jpg"
            imageAlt="Chauffeur preparing refreshments in a luxury car cabin before a journey"
            reverse
          />
          <Requirements />
          <Compliance />
          <HowToApply />
          <RecruitmentDesk />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
