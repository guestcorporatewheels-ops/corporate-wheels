import PageHero from "@/components/premium/PageHero";
import { aboutContent, aboutHeadings } from "./content";

export default function AboutHero() {
  return (
    <PageHero
      tagline={aboutHeadings.hero.tagline}
      title={aboutContent.title}
      goldSuffix="Corporate Wheels"
      subtitle={aboutHeadings.hero.subtitle}
      breadcrumb="About Us"
      image="/images/travel-cta-bg.jpg"
      nextId="who-we-are"
    />
  );
}
