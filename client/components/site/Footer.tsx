import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="./logo.png"
              alt="Corporate Wheels Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-heading text-white text-lg">
              Corporate Wheels
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Premium, carbon-neutral rides with professional chauffeurs in over
            300 cities worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
             <li>
              <a href="/business" className="hover:text-white">
                Business
              </a>
            </li>
             <li>
              <a href="/chauffeurs" className="hover:text-white">
                Chauffeurs
              </a>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
           
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
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
