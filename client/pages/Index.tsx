import HeroSection from "@/components/landing/HeroSection";
import Services from "@/components/landing/Services";
import WhyChooseCorporateWheels from "@/components/landing/WhyChooseCorporateWheels";
import ServiceHighlights from "@/components/landing/ServiceHighlights";
import CityToCityRoutes from "@/components/landing/CityToCityRoutes";
import PremiumFleet from "@/components/landing/PremiumFleet";
import GlobalCoverage from "@/components/landing/GlobalCoverage";
import HowItWorks from "@/components/landing/HowItWorks";
import ClientReviews from "@/components/landing/ClientReviews";
import IntroSplit from "@/components/premium/IntroSplit";
import FAQSection, { homeFaqs } from "@/components/landing/FAQSection";
import TravelExperienceCTA from "@/components/landing/TravelExperienceCTA";
import DownloadSection from "@/components/landing/DownloadSection";
import FinalCTA from "@/components/landing/FinalCTA";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import Seo from "@/components/Seo";

/** Verbatim "About:" copy from "CW Contents/Home pageCW.docx". */
const homeAbout = [
  "Corporate Wheels offers quality and high-specification chauffeur services designed specifically for business executives, international travellers, and other private individuals. No matter whether you have a schedule full of meetings in various regions or require comfortable airport transfer services, it’s all about precision and comfort.",
  "Based in major business centres in the UK, Corporate Wheels fill the gap between regular transport and the excellent journey. Your journey will be organised according to your itinerary, and while you work or prepare for something important, we’ll take care of the roads.",
] as const;

export default function Index() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="bg-background text-foreground relative overflow-hidden">
      <Seo
        title="Luxury Chauffeur & Airport Transfer Service"
        description="Book a professional, background-checked chauffeur in seconds. Airport transfers, hourly hire, and city-to-city rides across the UK with fixed pricing and 24/7 support."
        path="/"
        jsonLd={faqJsonLd}
      />
      <ScrollToTop />

      <HeroSection />

      <IntroSplit
        id="about-corporate-wheels"
        tagline="About Corporate Wheels"
        paragraphs={homeAbout}
        image="/images/home/home-about.jpg"
        imageAlt="Chauffeur opening the door of a black executive saloon for a business traveller in London"
      />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_15%_5%,rgba(230,167,0,0.07),transparent_70%),radial-gradient(55%_40%_at_85%_95%,rgba(230,167,0,0.06),transparent_70%)]" />
        <div className="relative">
          <Services />
          <WhyChooseCorporateWheels />
          <ServiceHighlights />
        </div>
      </div>

      <CityToCityRoutes />
      <PremiumFleet />
      <GlobalCoverage />
      <HowItWorks />
      <ClientReviews />
      <FAQSection />
      <TravelExperienceCTA />

      <DownloadSection />
      <FinalCTA />
    </main>
  );
}
