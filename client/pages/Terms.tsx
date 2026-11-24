import { MotionConfig } from "framer-motion";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import LegalBody from "@/components/legal/LegalBody";
import { termsContent, termsLabels } from "@/components/legal/terms";

const doc = termsContent;
const intro = doc.lead[0].t === "p" ? doc.lead[0].text : "";

/** /terms-and-conditions — built from "CW Contents/T&CCW.docx". */
export default function Terms() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-x-clip bg-background text-foreground">
        <Seo title={doc.title} description={intro.slice(0, 300)} path="/terms-and-conditions" />
        <PageHero
          tagline={termsLabels.heroTagline}
          title={doc.title}
          goldSuffix="Conditions"
          subtitle={intro}
          breadcrumb={doc.title}
          image="/images/legal/terms-hero.jpg"
          nextId="terms-body"
        />
        <LegalBody doc={doc} prefix="terms" taglines={termsLabels.sections} skipLeadFirst />
        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
