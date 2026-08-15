import HeroSection from "@/components/landing/HeroSection";
import ValueBar from "@/components/landing/ValueBar";
import Services from "@/components/landing/Services";
import CityToCityRoutes from "@/components/landing/CityToCityRoutes";
import HowItWorks from "@/components/landing/HowItWorks";
import Safety from "@/components/landing/Safety";
import Testimonials from "@/components/landing/Testimonials";
import DownloadSection from "@/components/landing/DownloadSection";
import FinalCTA from "@/components/landing/FinalCTA";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Index() {
  return (
    <main className="bg-background text-foreground relative overflow-hidden">
      <ScrollToTop />

      <HeroSection />
      <ValueBar />
      <Services />
      <CityToCityRoutes />
      <HowItWorks />
      <Safety />
      <Testimonials />

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
