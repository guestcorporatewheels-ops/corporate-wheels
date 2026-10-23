import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Social profiles shown in the footer brand column.
const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Corporate-Wheels/61583863736398/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#1877F2" />
        <svg x="7.9" y="5.5" width="8.2" height="13" viewBox="0 0 320 512">
          <path
            fill="#fff"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/corporate_wheels",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <defs>
          <radialGradient id="cw-ig-gradient" cx="0.3" cy="1.1" r="1.3">
            <stop offset="0%" stopColor="#FFD600" />
            <stop offset="35%" stopColor="#FF7A00" />
            <stop offset="60%" stopColor="#FF0069" />
            <stop offset="90%" stopColor="#7638FA" />
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#cw-ig-gradient)" />
        <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.4" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.7" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="16.4" cy="7.6" r="1.1" fill="#fff" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/corporate-wheels-pvt-ltd/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#0A66C2" />
        <svg x="6.3" y="5.5" width="11.4" height="13" viewBox="0 0 448 512">
          <path
            fill="#fff"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 119.6V448z"
          />
        </svg>
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/_corporatewheel",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#000" />
        <circle cx="12" cy="12" r="11.6" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        <svg x="6.5" y="6.5" width="11" height="11" viewBox="0 0 512 512">
          <path
            fill="#fff"
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          />
        </svg>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/4403333553755?text=Hi%20Corporate%20Wheels%2C%20I%27d%20like%20to%20enquire%20about%20a%20chauffeur%20booking.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#25D366" />
        <svg x="5.9" y="5" width="12.2" height="14" viewBox="0 0 448 512">
          <path
            fill="#fff"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.6-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.7 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5.1-3.9-10.6-6.6z"
          />
        </svg>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCOSJtjdCIlGSk0SaNlN3UPA",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <rect x="0.5" y="3.5" width="23" height="17" rx="4.5" fill="#FF0000" />
        <path d="M10 8.6v6.8l6.2-3.4z" fill="#fff" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast({
      title: "Subscribed",
      description: "You're on the list for Concierge Dispatch updates.",
    });
    setEmail("");
  };

  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white dark:bg-black">

      {/* Primary 6-Column Directory */}
      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">

        {/* Column 1: Brand Descriptor (Spans 2 columns for proper spacing) */}
        <div className="md:col-span-2 space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Corporate Wheels Logo"
              className="h-16 w-auto object-contain shrink-0 rounded-full bg-neutral-950 dark:bg-transparent"
            />

          </Link>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
            Premium, carbon-neutral rides with professional close-protection chauffeurs in over 300 cities globally.
          </p>

          <div className="space-y-4">
            <div className="mt-6 w-24 rounded-lg bg-white p-1.5">
              <img
                src="/images/tfl-logo.png"
                alt="Licensed by Transport for London — Private Hire Operator Licence No. 12096"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Social media + app store badges (left brand column) */}
          <div className="space-y-5 pt-2">
            <div>
              <h4 className="text-neutral-900 dark:text-white font-heading font-semibold text-sm uppercase tracking-wider mb-3">
                Follow Us
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="transition-transform duration-200 hover:scale-110 hover:-translate-y-0.5"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="transition-opacity duration-200 hover:opacity-80"
              >
                <img
                  src="/images/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
              <a
                href="#"
                aria-label="Get it on Google Play"
                className="transition-opacity duration-200 hover:opacity-80"
              >
                <img
                  src="/images/GetItOnGooglePlay_Badge_Web_color_English-01.svg"
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h4 className="text-neutral-900 dark:text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h4>
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
          <h4 className="text-neutral-900 dark:text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Premium Fleet</h4>
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
          <h4 className="text-neutral-900 dark:text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</h4>
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
          <h4 className="text-neutral-900 dark:text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Legal & Help</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground font-light">
            {[
              { label: "Privacy Policy", path: "/privacy" },
              { label: "Terms & Conditions", path: "/terms-and-conditions" },
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
      <div className="border-t border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
        <div className="container py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-neutral-900 dark:text-white font-heading font-bold text-sm tracking-wide mb-1">
              Subscribe to Concierge Dispatch
            </h4>
            <p className="text-xs text-muted-foreground font-light">
              Receive luxury dispatch insights, carbon-neutral travel reports, and premier invitations en route.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2.5 w-full sm:flex-1"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter executive email"
                className="flex-1 h-11 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white text-xs px-4 rounded-xl placeholder:text-neutral-900/20 dark:placeholder:text-white/20 focus:outline-none focus:border-corporate-gold/40 focus:ring-1 focus:ring-corporate-gold/20 transition-all font-light"
                required
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-corporate-gold hover:bg-corporate-gold/90 text-black text-xs font-bold px-6 h-11 rounded-xl transition-all duration-200 shadow-glow uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright */}
      <div className="border-t border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/60">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between font-light">
          <p>
            © 2024 Corporate Wheels. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0 italic text-neutral-900/30 dark:text-white/30">
            Built for comfort, designed for the future.
          </p>
        </div>
      </div>

    </footer>
  );
}
