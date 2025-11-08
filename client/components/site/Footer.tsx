import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="./logo.png"
              alt="Corporate Wheels Logo"
              className="h-14 w-auto object-contain"
            />
            <span className="font-heading text-white text-lg">
              Corporate Wheels
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Premium, carbon-neutral rides with professional chauffeurs in over
            300 cities worldwide.
          </p>
          <div>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-16">
                <img
                  src="/images/partners/ico.png"
                  alt="ICO"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-20">
                <img
                  src="/images/partners/tfl.png"
                  alt="Transport for London"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="mt-4 text-sm text-white/90">
              <div>
                <span className="text-white/80">TFL Operator License No:</span>
                <span className="font-semibold ml-2">XXXXXXX</span>
              </div>
              <div className="mt-1">
                <span className="text-white/80">Company Registration No:</span>
                <span className="font-semibold ml-2">XXXXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-medium mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/city-to-city" className="hover:text-white">
                City-to-City rides
              </Link>
            </li>
            <li>
              <Link to="/chauffeur-hailing" className="hover:text-white">
                Chauffeur hailing
              </Link>
            </li>
            <li>
              <Link to="/airport-transfer" className="hover:text-white">
                Airport transfer
              </Link>
            </li>
            <li>
              <Link to="/hourly-hire" className="hover:text-white">
                Hourly hire
              </Link>
            </li>
            <li>
              <Link to="/limousine-service" className="hover:text-white">
                Limousine service
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-medium mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter + Follow */}
        <div>
          <h4 className="text-white font-medium mb-3">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Subscribe to receive updates, offers, and travel inspiration.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 mb-6"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/10 text-white text-sm px-3 py-2 rounded-md placeholder:text-white/50 focus:outline-none focus:border-white/20"
              required
            />
            <button
              type="submit"
              className="whitespace-nowrap btn-gradient hover:bg-white/20 text-black text-sm font-medium px-5 py-2 rounded-md transition-all duration-200"
            >
              Subscribe
            </button>
          </form>

          <h4 className="text-white font-medium mb-3">Follow</h4>
          <div className="flex items-center gap-3 text-muted-foreground">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-md border border-white/10 hover:bg-white/5 hover:shadow-[0_0_15px_hsl(var(--primary))] transition"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between">
          <p>
            © {new Date().getFullYear()} Corporate Wheels. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built for comfort, designed for the future.
          </p>
        </div>
      </div>
    </footer>
  );
}
