import { MotionConfig } from "framer-motion";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import Seo from "@/components/Seo";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurApproach from "@/components/about/OurApproach";
import OurChauffeurs from "@/components/about/OurChauffeurs";
import Reliability from "@/components/about/Reliability";
import Coverage from "@/components/about/Coverage";
import AboutCTA from "@/components/about/AboutCTA";
import { aboutContent } from "@/components/about/content";

export default function About() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo
          title="About Us"
          description={aboutContent.sections[0].paragraphs[0]}
          path="/about"
        />

        <AboutHero />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_35%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_35%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />
          <WhoWeAre />
          <OurApproach />
          <OurChauffeurs />
          <Reliability />
          <Coverage />
          <AboutCTA />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
