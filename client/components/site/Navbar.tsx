import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Apple, Play } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <img
            src="./logo.png"
            alt="Corporate Wheels Logo"
            className="h-10 w-auto object-contain"
          />
          <p className="text-white">Corporate Wheels</p>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-white transition-colors">
              Our Services <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black/90 border-white/10 backdrop-blur-md">
              <DropdownMenuItem className="hover:bg-white/10">
                <a href="#services" className="block w-full">
                  City-to-City rides
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <a href="#services" className="block w-full">
                  Chauffeur hailing
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <a href="#services" className="block w-full">
                  Airport transfers
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <a href="#services" className="block w-full">
                  Hourly hire
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <a href="#services" className="block w-full">
                  Chauffeur service
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <a href="#services" className="block w-full">
                  Limousine service
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other Navigation Items */}
          <a href="#business" className="hover:text-white transition-colors">
            For Business
          </a>
          <a href="#chauffeurs" className="hover:text-white transition-colors">
            For Chauffeurs
          </a>
          <a href="#help" className="hover:text-white transition-colors">
            Help
          </a>

          {/* Download Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-white transition-colors">
              Download <ChevronDown className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-black/90 border-white/10 backdrop-blur-md">
              <DropdownMenuItem className="hover:bg-white/10">
                <a href="#download" className="flex items-center gap-2 w-full">
                  <Apple className="size-4" /> iOS
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <a href="#download" className="flex items-center gap-2 w-full">
                  <Play className="size-4" /> Android
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
            <div className="text-white font-medium mb-2">Our Services</div>
            <div className="pl-4 space-y-2">
              <a
                href="#services"
                className="block text-muted-foreground hover:text-white"
              >
                City-to-City rides
              </a>
              <a
                href="#services"
                className="block text-muted-foreground hover:text-white"
              >
                Chauffeur hailing
              </a>
              <a
                href="#services"
                className="block text-muted-foreground hover:text-white"
              >
                Airport transfers
              </a>
              <a
                href="#services"
                className="block text-muted-foreground hover:text-white"
              >
                Hourly hire
              </a>
              <a
                href="#services"
                className="block text-muted-foreground hover:text-white"
              >
                Chauffeur service
              </a>
              <a
                href="#services"
                className="block text-muted-foreground hover:text-white"
              >
                Limousine service
              </a>
            </div>
            <a
              href="#business"
              className="text-muted-foreground hover:text-white"
            >
              For Business
            </a>
            <a
              href="#chauffeurs"
                className="text-muted-foreground hover:text-white"
              >
              For Chauffeurs
            </a>
            <a href="#help" className="text-muted-foreground hover:text-white">
              Help
            </a>
            <div className="text-white font-medium mb-2">Download</div>
            <div className="pl-4 space-y-2">
              <a
                href="#download"
                className="flex items-center gap-2 text-muted-foreground hover:text-white"
              >
                <Apple className="size-4" /> iOS
              </a>
              <a
                href="#download"
                className="flex items-center gap-2 text-muted-foreground hover:text-white"
              >
                <Play className="size-4" /> Android
              </a>
            </div>
            <Button asChild variant="glow" className="mt-4">
              <a href="#booking">Book Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
