import HeroSection from "@/components/landing/HeroSection";
import ValueBar from "@/components/landing/ValueBar";
import Services from "@/components/landing/Services";
import HowItWorks from "@/components/landing/HowItWorks";
import Safety from "@/components/landing/Safety";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";

export default function Index() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <ValueBar />
      <Services />
      <HowItWorks />
      <Safety />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
