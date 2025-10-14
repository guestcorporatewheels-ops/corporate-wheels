import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "backdrop-blur-md bg-black/60 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 rounded-md btn-gradient" />
          <span className="font-heading text-lg tracking-wide text-white">
            DarkMode Chauffeur
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {[
            ["Home", "/"],
            ["Services", "#services"],
            ["How it Works", "#how"],
            ["Safety", "#safety"],
            ["Download", "#download"],
            ["Sign In", "#signin"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <Button asChild variant="glow" className="ml-2">
            <a href="#booking">Book Now</a>
          </Button>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/10 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open Menu"
        >
          <Menu className="text-white" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
          <div className="container py-4 flex flex-col gap-4">
            {[
              ["Home", "/"],
              ["Services", "#services"],
              ["How it Works", "#how"],
              ["Safety", "#safety"],
              ["Download", "#download"],
              ["Sign In", "#signin"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-muted-foreground hover:text-white"
              >
                {label}
              </a>
            ))}
            <Button asChild variant="glow">
              <a href="#booking">Book Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
