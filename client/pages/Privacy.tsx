import { MotionConfig } from "framer-motion";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import LegalBody from "@/components/legal/LegalBody";
import { privacyContent, privacyLabels } from "@/components/legal/privacy";

const doc = privacyContent;
const intro = doc.lead[0].t === "p" ? doc.lead[0].text : "";

/** /privacy — built from "CW Contents/Privacy PolicyCW.docx". */
export default function Privacy() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-x-clip bg-background text-foreground">
        <Seo title={doc.title} description={intro} path="/privacy" />
        <PageHero
          tagline={privacyLabels.heroTagline}
          title={doc.title}
          goldSuffix="Policy"
          subtitle={intro}
          breadcrumb={doc.title}
          image="/images/legal/privacy-hero.jpg"
          nextId="privacy-body"
        />
        <LegalBody doc={doc} prefix="privacy" taglines={privacyLabels.sections} skipLeadFirst />
        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
