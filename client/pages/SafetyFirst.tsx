import { MotionConfig } from "framer-motion";
import {
  Baby,
  ClipboardCheck,
  FileCheck2,
  BadgeCheck,
  HeartPulse,
  MapPin,
  PhoneCall,
  PlaneLanding,
  Scale,
  ShieldCheck,
  Gauge,
  Wrench,
} from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import ServiceSection from "@/components/premium/ServiceSection";
import { safetyContent, safetyLabels } from "@/components/safety/content";

const { title, intro, sections } = safetyContent;
const [chauffeurs, fleet, oversight] = sections;
const L = safetyLabels.sections;

/** /why-choose-us/safety-first — built from "CW Contents/Safety FirstCW.docx". */
export default function SafetyFirst() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro[0]} path="/why-choose-us/safety-first" />

        <PageHero
          tagline={safetyLabels.heroTagline}
          title={title}
          goldSuffix="First"
          subtitle={
            <>
              {intro.map((p, i) => (
                <span key={i} className={`block ${i ? "mt-3" : ""}`}>
                  {p}
                </span>
              ))}
            </>
          }
          breadcrumb={title}
          image="/images/safety/safety-hero.jpg"
          nextId="safety-chauffeurs"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />

          <ServiceSection
            id="safety-chauffeurs"
            index={1}
            tagline={L[0].tagline}
            heading={chauffeurs.heading}
            paragraph={chauffeurs.paragraphs[0]}
            features={chauffeurs.bullets}
            icons={[FileCheck2, Scale, Gauge, HeartPulse]}
            image="/images/safety/safety-chauffeur.jpg"
            imageAlt="Chauffeur reviewing training material with a trainer"
          />

          <ServiceSection
            id="safety-fleet"
            index={2}
            tagline={L[1].tagline}
            heading={fleet.heading}
            paragraph={fleet.paragraphs[0]}
            features={fleet.bullets}
            icons={[Wrench, ClipboardCheck, ShieldCheck, Baby]}
            image="/images/safety/safety-fleet.jpg"
            imageAlt=""
            variant="band"
          />

          <ServiceSection
            id="safety-oversight"
            index={3}
            tagline={L[2].tagline}
            heading={oversight.heading}
            paragraph={oversight.paragraphs[0]}
            features={oversight.bullets}
            icons={[PhoneCall, MapPin, PlaneLanding, BadgeCheck]}
            image="/images/safety/safety-ops.jpg"
            imageAlt="Dispatch operator monitoring journeys in a 24/7 control room"
            reverse
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
