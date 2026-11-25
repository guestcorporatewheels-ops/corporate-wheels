import { useEffect } from "react";
import Seo from "@/components/Seo";
import { loadLogistifieBundle } from "@/lib/logistifie";

// Guest booking page backed by the Logistifie booking engine
// (useractivestate="1" per the Logistifie Window Booking Engine setup guide).
export default function Booking() {
  useEffect(() => {
    loadLogistifieBundle("booking");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Seo
        title="Book a Chauffeur"
        description="Book premium chauffeur transfers in seconds. Choose your vehicle, set pickup and drop-off, and get an instant quote."
        path="/booking"
      />
      <section className="pt-28 pb-16">
        <div className="container max-w-4xl logistifie-page">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center">
            Book your chauffeur
          </h1>
          <p className="mt-3 text-muted-foreground text-center max-w-xl mx-auto">
            Add your pickup, destination, date and time to see available
            vehicles and get an instant quote.
          </p>
          <div className="mt-10 rounded-3xl bg-[#05080f] p-4 sm:p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-[#E3A501]/25 dark:rounded-none dark:bg-transparent dark:p-0 dark:shadow-none dark:ring-0">
            <booking-widget
              primarycolor="#E3A501"
              useractivestate="1"
              masteraccountid="9987250"
              bookingtypes="oneway,hourly,airportpickup"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
