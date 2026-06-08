import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">

      {/* Primary 6-Column Directory */}
      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">

        {/* Column 1: Brand Descriptor (Spans 2 columns for proper spacing) */}
        <div className="md:col-span-2 space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Corporate Wheels Logo"
              className="h-16 w-auto object-contain shrink-0"
            />

          </Link>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
            Premium, carbon-neutral rides with professional close-protection chauffeurs in over 300 cities globally.
          </p>

          <div className="space-y-4">
            <div className="mt-6 flex items-center gap-4">
              <div className="w-16">
                <img
                  src="/images/partners/ico.png"
                  alt="ICO"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="text-[11px] text-white/40 space-y-1 font-light">
              <div>
                <span>Company Reg:</span>
                <span className="font-medium text-white/70 ml-1.5">XXXXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground font-light">
            {[
              { label: "Airport Transfers", path: "/services/airport-transfers" },
              { label: "Corporate Travel", path: "/services/corporate-travel" },
              { label: "Special Events", path: "/services/special-events" },
              { label: "City Tours", path: "/services/city-tours" },
              { label: "Private Jet Chauffeur", path: "/services/private-jet-chauffeur" },
              { label: "London Cruise Transfer", path: "/services/london-cruise-transfer" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="hover:text-corporate-gold transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Premium Fleet */}
        <div>
          <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Premium Fleet</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground font-light">
            {[
              { label: "Executive Cars", path: "/fleet/executive-cars" },
              { label: "Luxury (VIP Class)", path: "/fleet/luxury-class" },
              { label: "Premium SUVs", path: "/fleet/premium-suvs" },
              { label: "Business Vans", path: "/fleet/business-vans" },
              { label: "Special Vehicles", path: "/fleet/special-vehicles" },
              { label: "Electric Class", path: "/fleet/electric-class" },
              { label: "Vintage Cars", path: "/fleet/vintage-cars" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="hover:text-corporate-gold transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Why Choose Us */}
        <div>
          <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground font-light">
            {[
              { label: "Safety First", path: "/why-choose-us/safety-first" },
              { label: "Transparent Pricing", path: "/why-choose-us/transparent-pricing" },
              { label: "Tailored Luxury Fleet", path: "/why-choose-us/tailored-luxury-fleet" },
              { label: "Elite Chauffeurs", path: "/why-choose-us/elite-chauffeurs" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="hover:text-corporate-gold transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Legal & Help */}
        <div>
          <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Legal & Help</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground font-light">
            {[
              { label: "Privacy Policy", path: "/privacy" },
              { label: "Terms & Conditions", path: "/terms" },
              { label: "Contact Us", path: "/contact" },
              { label: "Help Portal", path: "/help" },
              { label: "About Us", path: "/about" },
              { label: "Chauffeur Careers", path: "/chauffeurs" }
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="hover:text-corporate-gold transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Full-width Newsletter & Social Bar */}
      <div className="border-t border-white/5 bg-white/[0.01]">
        <div className="container py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-wide mb-1">
              Subscribe to Concierge Dispatch
            </h4>
            <p className="text-xs text-muted-foreground font-light">
              Receive luxury dispatch insights, carbon-neutral travel reports, and premier invitations en route.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2.5 w-full sm:flex-1"
            >
              <input
                type="email"
                placeholder="Enter executive email"
                className="flex-1 h-11 bg-white/5 border border-white/10 text-white text-xs px-4 rounded-xl placeholder:text-white/20 focus:outline-none focus:border-corporate-gold/40 focus:ring-1 focus:ring-corporate-gold/20 transition-all font-light"
                required
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-corporate-gold hover:bg-corporate-gold/90 text-black text-xs font-bold px-6 h-11 rounded-xl transition-all duration-200 shadow-glow uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>

            {/* Social Channels */}
            <div className="flex items-center gap-2 shrink-0">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-white/50 hover:text-corporate-gold hover:border-corporate-gold/20 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <Icon className="size-4 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright */}
      <div className="border-t border-white/10 bg-black/60">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between font-light">
          <p>
            © {new Date().getFullYear()} Corporate Wheels. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0 italic text-white/30">
            Built for comfort, designed for the future.
          </p>
        </div>
      </div>

    </footer>
  );
}
