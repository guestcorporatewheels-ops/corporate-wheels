import HeroSection from "@/components/landing/HeroSection";
import Services from "@/components/landing/Services";
import OurFleet from "@/components/landing/OurFleet";
import CityToCityRoutes from "@/components/landing/CityToCityRoutes";
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
      <Services />
      <OurFleet />
      <CityToCityRoutes />
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
