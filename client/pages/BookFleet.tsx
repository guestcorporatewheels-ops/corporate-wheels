import { useEffect } from "react";
import Seo from "@/components/Seo";
import { loadLogistifieBundle } from "@/lib/logistifie";

// Book-fleet page backed by the Logistifie booking engine
// (useractivestate="2" per the Logistifie Window Booking Engine setup guide).
// The home-page window widget navigates here after a search.
export default function BookFleet() {
  useEffect(() => {
    loadLogistifieBundle("booking");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Seo
        title="Choose Your Vehicle"
        description="Compare available chauffeur vehicles for your journey and continue to booking."
        path="/book-fleet"
        noindex
      />
      <section className="pt-28 pb-16">
        <div className="container max-w-5xl logistifie-page">
          <booking-widget
            primarycolor="#E3A501"
            useractivestate="2"
            masteraccountid="9987250"
          />
        </div>
      </section>
    </main>
  );
}
