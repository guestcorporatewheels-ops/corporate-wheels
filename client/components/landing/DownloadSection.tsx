import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="py-16 border-t border-white/10 bg-black/40"
    >
      <div className="container text-center">
        <h3 className="font-heading text-2xl md:text-3xl text-white">
          Get the App
        </h3>
        <p className="mt-2 text-muted-foreground">
          Book rides on the go with our iOS and Android apps.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button variant="outline-glow" className="h-12 px-5">
            <Apple className="mr-2" /> App Store
          </Button>
          <Button variant="outline-glow" className="h-12 px-5">
            <Play className="mr-2" /> Google Play
          </Button>
        </div>
      </div>
    </section>
  );
}
