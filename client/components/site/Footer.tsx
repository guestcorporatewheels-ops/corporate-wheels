import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md btn-gradient" />
            <span className="font-heading text-white text-lg">
              DarkMode Chauffeur
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
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
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
                className="p-2 rounded-md border border-white/10 hover:bg-white/5 hover:shadow-[0_0_15px_#00D8B4] transition"
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
            © {new Date().getFullYear()} DarkMode Chauffeur. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built for comfort, designed for the future.
          </p>
        </div>
      </div>
    </footer>
  );
}
