import { MotionConfig } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Car,
  Castle,
  Clock,
  Dog,
  GraduationCap,
  Landmark,
  Luggage,
  MapPinned,
  Route,
  ShieldCheck,
  Trees,
  Wifi,
} from "lucide-react";
import Seo from "@/components/Seo";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import PageHero from "@/components/premium/PageHero";
import ServiceSection from "@/components/premium/ServiceSection";
import { cityToursContent, cityToursLabels } from "@/components/city-tours/content";

const { title, intro, sections } = cityToursContent;
const [experience, comfort, attractions, standards] = sections;
const L = cityToursLabels.sections;

/** /services/city-tours — built from "CW Contents/Private City ToursCW.docx". */
export default function CityTours() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-background text-foreground">
        <Seo title={title} description={intro} path="/services/city-tours" />

        <PageHero
          tagline={cityToursLabels.heroTagline}
          title={title}
          goldSuffix="City Tours"
          subtitle={intro}
          breadcrumb={title}
          image="/images/city-tours/tours-hero.jpg"
          nextId="tours-experience"
        />

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_30%_at_10%_10%,rgba(230,167,0,0.06),transparent_70%),radial-gradient(55%_30%_at_90%_60%,rgba(230,167,0,0.05),transparent_70%)]" />

          <ServiceSection
            id="tours-experience"
            index={1}
            tagline={L[0].tagline}
            heading={experience.heading}
            paragraph={experience.paragraphs[0]}
            moreParagraphs={experience.paragraphs.slice(1)}
            features={experience.bullets}
            icons={[Route, Clock, MapPinned]}
            image="/images/city-tours/tours-private.jpg"
            imageAlt="Couple stepping out of a chauffeur-driven saloon in Windsor"
          />

          <ServiceSection
            id="tours-comfort"
            index={2}
            tagline={L[1].tagline}
            heading={comfort.heading}
            paragraph={comfort.paragraphs[0]}
            features={comfort.bullets}
            icons={[Car, Wifi, BadgeCheck]}
            image="/images/city-tours/tours-comfort.jpg"
            imageAlt="View of Tower Bridge from the rear seat of a luxury chauffeur car"
            reverse
          />

          <ServiceSection
            id="tours-attractions"
            index={3}
            tagline={L[2].tagline}
            heading={attractions.heading}
            paragraph={L[2].subtitle}
            features={attractions.bullets}
            icons={[Landmark, Castle, GraduationCap, Trees]}
            image="/images/city-tours/tours-attractions.jpg"
            imageAlt=""
            variant="band"
          />

          <ServiceSection
            id="tours-standards"
            index={4}
            tagline={L[3].tagline}
            heading={standards.heading}
            paragraph={L[3].subtitle}
            features={standards.bullets}
            icons={[Luggage, ShieldCheck, Dog]}
            image="/images/city-tours/tours-standards.jpg"
            imageAlt="Chauffeur fitting a child booster seat in a luxury saloon"
          />
        </div>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
