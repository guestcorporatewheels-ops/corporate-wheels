import { MotionConfig } from "framer-motion";
import {
  Accessibility,
  BadgeCheck,
  Briefcase,
  Bus,
  Car,
  CarFront,
  Crown,
  Droplets,
  EyeOff,
  Leaf,
  PlugZap,
  Sparkles,
  Thermometer,
  Wifi,
  Wrench,
} from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import ServiceSection from "@/components/premium/ServiceSection";
import PremiumCTA from "@/components/premium/PremiumCTA";
import { tailoredContent, tailoredLabels } from "@/components/tailored-fleet/content";

const { title, intro, sections, bottom } = tailoredContent;
const [classes, onboard, standards] = sections;
const L = tailoredLabels.sections;

/** /why-choose-us/tailored-luxury-fleet — built from "CW Contents/Tailored Luxury FleetCW.docx". */
export default function TailoredLuxuryFleet() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro[0]} path="/why-choose-us/tailored-luxury-fleet" />

        <PageHero
          tagline={tailoredLabels.heroTagline}
          title={title}
          goldSuffix="Luxury Fleet"
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
          image="/images/tailored-fleet/tailored-hero.jpg"
          nextId="tailored-classes"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />

          <ServiceSection
            id="tailored-classes"
            index={1}
            tagline={L[0].tagline}
            heading={classes.heading}
            paragraph={classes.paragraphs[0]}
            features={classes.bullets}
            icons={[Briefcase, Crown, CarFront, Bus, Leaf, Car]}
            image="/images/tailored-fleet/tailored-classes.jpg"
            imageAlt=""
            variant="band"
          />

          <ServiceSection
            id="tailored-onboard"
            index={2}
            tagline={L[1].tagline}
            heading={onboard.heading}
            paragraph={onboard.paragraphs[0]}
            features={onboard.bullets}
            icons={[Wifi, PlugZap, Droplets, Thermometer, EyeOff]}
            image="/images/tailored-fleet/tailored-onboard.jpg"
            imageAlt="Rear cabin of an executive car with charging laptop and privacy glass"
          />

          <ServiceSection
            id="tailored-standards"
            index={3}
            tagline={L[2].tagline}
            heading={standards.heading}
            paragraph={standards.paragraphs[0]}
            features={standards.bullets}
            icons={[Sparkles, Wrench, Accessibility, BadgeCheck]}
            image="/images/tailored-fleet/tailored-standards.jpg"
            imageAlt="Detailer hand-polishing a black luxury saloon"
            reverse
          />

          <PremiumCTA
            tagline={tailoredLabels.bottomTagline}
            heading={bottom.heading}
            goldSuffix="Your Journey"
            text={bottom.text}
            primary={{ label: bottom.buttons[0], to: "/contact" }}
            image="/images/tailored-fleet/tailored-hero.jpg"
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
