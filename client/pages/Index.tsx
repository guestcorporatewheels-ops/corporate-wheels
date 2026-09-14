import HeroSection from "@/components/landing/HeroSection";
import Services from "@/components/landing/Services";
import WhyChooseCorporateWheels from "@/components/landing/WhyChooseCorporateWheels";
import ServiceHighlights from "@/components/landing/ServiceHighlights";
import CityToCityRoutes from "@/components/landing/CityToCityRoutes";
import PremiumFleet from "@/components/landing/PremiumFleet";
import GlobalCoverage from "@/components/landing/GlobalCoverage";
import HowItWorks from "@/components/landing/HowItWorks";
import Safety from "@/components/landing/Safety";
import CorporateAccounts from "@/components/landing/CorporateAccounts";
import FAQSection, { homeFaqs } from "@/components/landing/FAQSection";
import DownloadSection from "@/components/landing/DownloadSection";
import FinalCTA from "@/components/landing/FinalCTA";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import Seo from "@/components/Seo";

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
      <Safety />
      <CorporateAccounts />
      <FAQSection />

      <section id="signin" className="py-10">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            Account sign-in is coming soon. For bookings, proceed above.
          </p>
        </div>
      </section>

      <DownloadSection />
      <FinalCTA />
    </main>
  );
}
