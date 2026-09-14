import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

interface Highlight {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  imageSide: "left" | "right";
  cta?: { label: string; to: string };
}

const highlights: Highlight[] = [
  {
    eyebrow: "Signature Service",
    title: "Airport Transfers",
    description:
      "No more hassles about going to the airport anymore. Our chauffeurs monitor your flight status in real time and plan for your pick-up in case of any delay or even early arrival. Make full use of your free waiting period with our meet and greet services at the arrivals terminal.",
    image: "/images/airport-transfer-highlight.jpg",
    alt: "Corporate Wheels chauffeur greeting a client with a name sign at the airport arrivals hall",
    imageSide: "left",
    cta: { label: "Book an Airport Transfer", to: "/airport-transfer" },
  },
  {
    eyebrow: "Signature Service",
    title: "Corporate Travel",
    description:
      "Good ground transportation is essential to keep the momentum going in business. We ensure the provision of a reliable and effective mobile office for your top management, visiting clients, and corporate team with confidential chauffeurs and immaculate vehicles.",
    image: "/images/corporate-travel-highlight.jpg",
    alt: "Corporate Wheels chauffeur greeting a business executive beside a luxury sedan",
    imageSide: "right",
    cta: { label: "Explore Corporate Travel", to: "/services/corporate-travel" },
  },
  {
    eyebrow: "Signature Service",
    title: "Corporate Accounts & Duty of Care",
    description:
      "We help you in complying with duty of care, transparent pricing, easy billing each month, and preferred booking facilities.",
    image: "/images/corporate-accounts-duty-of-care.jpg",
    alt: "Corporate account manager reviewing a travel dashboard with a Corporate Wheels chauffeur car visible outside",
    imageSide: "left",
    cta: { label: "Explore Corporate Accounts", to: "/business" },
  },
];

function HighlightRow({ item, index }: { item: Highlight; index: number }) {
  const imageOrder = item.imageSide === "left" ? "order-1" : "order-2";
  const contentOrder = item.imageSide === "left" ? "order-2" : "order-1";

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, x: item.imageSide === "left" ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`relative ${imageOrder}`}
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover aspect-[3/2]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-corporate-gold/5 blur-2xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={contentOrder}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 sm:w-12 bg-corporate-gold/60" />
          <span className="w-1.5 h-1.5 rotate-45 bg-corporate-gold shrink-0" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-corporate-gold">
            {item.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
          {item.title}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {item.description}
        </p>
        {item.cta && (
          <Button asChild variant="glow" size="lg" className="mt-6">
            <Link to={item.cta.to}>{item.cta.label}</Link>
          </Button>
        )}
      </motion.div>
    </div>
  );
}

export default function ServiceHighlights() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative">
        <SectionHeading
          tagline="What We Deliver"
          title="Service, Tailored to You"
          subtitle="From airport meet-and-greet to corporate accounts with full duty-of-care compliance, every journey is planned around your schedule."
          className="mb-12 lg:mb-16"
        />

        <div className="space-y-14 lg:space-y-20">
          {highlights.map((item, i) => (
            <HighlightRow key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
