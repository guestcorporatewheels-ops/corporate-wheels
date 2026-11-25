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
          <div className="rounded-3xl bg-[#05080f] p-4 sm:p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-[#E3A501]/25 dark:rounded-none dark:bg-transparent dark:p-0 dark:shadow-none dark:ring-0">
          <booking-widget
            primarycolor="#E3A501"
            useractivestate="2"
            masteraccountid="9987250"
          />
          </div>
        </div>
      </section>
    </main>
  );
}
