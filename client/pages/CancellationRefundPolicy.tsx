import { MotionConfig } from "framer-motion";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import PolicyBody, { policyIds } from "@/components/policy/PolicyBody";
import { policyContent, policyLabels } from "@/components/policy/content";

const { title, intro } = policyContent;

/** /cancellation-refund-policy — built from "CW Contents/Cancellation & Refund PolicyCW.docx". */
export default function CancellationRefundPolicy() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-x-clip bg-background text-foreground">
        <Seo title={title} description={intro[0]} path="/cancellation-refund-policy" />
        <PageHero
          tagline={policyLabels.heroTagline}
          title={title}
          goldSuffix="Refund Policy"
          subtitle={intro[0]}
          breadcrumb={title}
          image="/images/policy/policy-hero.jpg"
          nextId={policyIds[0]}
        />
        <PolicyBody />
        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
