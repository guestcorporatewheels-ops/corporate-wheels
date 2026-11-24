import { MotionConfig } from "framer-motion";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import { GetInTouch, HeadOffice, LiveSupport } from "@/components/contact/ContactSections";
import { contactContent, contactLabels } from "@/components/contact/content";

const { title, intro } = contactContent;

/** /contact — built from "CW Contents/Contact UsCW.docx". */
export default function Contact() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro} path="/contact" />
        <PageHero
          tagline={contactLabels.heroTagline}
          title={title}
          goldSuffix="Us"
          subtitle={intro}
          breadcrumb={title}
          image="/images/contact/contact-hero.jpg"
          nextId="get-in-touch"
        />
        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />
          <GetInTouch />
          <HeadOffice />
          <LiveSupport />
        </div>
        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
