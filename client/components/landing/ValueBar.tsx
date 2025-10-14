import { ShieldCheck, PhoneCall, Leaf, BadgeDollarSign } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Safe & Verified Chauffeurs" },
  { icon: PhoneCall, text: "24/7 Global Support" },
  { icon: Leaf, text: "Carbon Neutral Rides" },
  { icon: BadgeDollarSign, text: "Transparent Pricing" },
];

export default function ValueBar() {
  return (
    <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
      <div className="container py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 p-2 rounded-lg hover:shadow-[0_0_15px_#00D8B4] transition"
          >
            <div className="p-2 rounded-md border border-white/10 text-secondary">
              <Icon className="size-4" />
            </div>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
