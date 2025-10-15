import { ShieldCheck, PhoneCall, Leaf, BadgeDollarSign } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    text: "Safe & Verified Chauffeurs",
    description: "Background-checked professionals",
  },
  {
    icon: PhoneCall,
    text: "24/7 Global Support",
    description: "Always here to help",
  },
  {
    icon: Leaf,
    text: "Carbon Neutral Rides",
    description: "Eco-friendly travel",
  },
  {
    icon: BadgeDollarSign,
    text: "Transparent Pricing",
    description: "No hidden fees",
  },
];

export default function ValueBar() {
  return (
    <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
      <div className="container py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, text, description }) => (
          <div
            key={text}
            className="flex items-center gap-3 p-3 rounded-lg hover:shadow-[0_0_15px_hsl(var(--primary))] transition-all duration-500 ease-in-out hover:bg-white/5"
          >
            <div className="p-2 rounded-md border border-white/10 text-[hsl(var(--secondary))] flex-shrink-0">
              <Icon className="size-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white">{text}</p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
