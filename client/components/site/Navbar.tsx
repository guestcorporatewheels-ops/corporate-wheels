import { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Apple, Play } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (dropdownId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
    }, 150); // Small delay to prevent flickering
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
    }, 150);
  };

  // Custom Hover Dropdown Component
  const HoverDropdown = ({
    trigger,
    children,
    dropdownId,
    className = "",
  }: {
    trigger: React.ReactNode;
    children: React.ReactNode;
    dropdownId: string;
    className?: string;
  }) => (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter(dropdownId)}
      onMouseLeave={handleMouseLeave}
    >
      {trigger}
      {hoveredDropdown === dropdownId && (
        <div
          className={`absolute top-full left-0 mt-2 z-50 ${className}`}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          {children}
        </div>
      )}
    </div>
  );

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
          <HoverDropdown
            dropdownId="services"
            trigger={
              <button className="flex items-center gap-1 hover:text-white transition-colors">
                Our Services <ChevronDown className="size-4" />
              </button>
            }
            className="w-56 bg-black/90 border border-white/10 backdrop-blur-md rounded-md shadow-lg"
          >
            <div className="py-2">
              <a
                href="#services"
                className="block px-4 py-2 hover:bg-white/10 transition-colors"
              >
                City-to-City rides
              </a>
              <a
                href="#services"
                className="block px-4 py-2 hover:bg-white/10 transition-colors"
              >
                Chauffeur hailing
              </a>
              <a
                href="#services"
                className="block px-4 py-2 hover:bg-white/10 transition-colors"
              >
                Airport transfers
              </a>
              <a
                href="#services"
                className="block px-4 py-2 hover:bg-white/10 transition-colors"
              >
                Hourly hire
              </a>
              <a
                href="#services"
                className="block px-4 py-2 hover:bg-white/10 transition-colors"
              >
                Chauffeur service
              </a>
              <a
                href="#services"
                className="block px-4 py-2 hover:bg-white/10 transition-colors"
              >
                Limousine service
              </a>
            </div>
          </HoverDropdown>

          {/* Other Navigation Items */}
          <NavLink
            to="/business"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition-colors"
            }
          >
            For Business
          </NavLink>
          <NavLink
            to="/chauffeurs"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white transition-colors"
            }
          >
            For Chauffeurs
          </NavLink>
          <a href="#help" className="hover:text-white transition-colors">
            Help
          </a>

          {/* Download Dropdown */}
          <HoverDropdown
            dropdownId="download"
            trigger={
              <button className="flex items-center gap-1 hover:text-white transition-colors">
                Download <ChevronDown className="size-4" />
              </button>
            }
            className="w-48 bg-black/90 border border-white/10 backdrop-blur-md rounded-md shadow-lg"
          >
            <div className="py-2">
              <a
                href="#download"
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 transition-colors"
              >
                <Apple className="size-4" /> iOS
              </a>
              <a
                href="#download"
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 transition-colors"
              >
                <Play className="size-4" /> Android
              </a>
            </div>
          </HoverDropdown>

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
            <NavLink
              to="/business"
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-muted-foreground hover:text-white"
              }
            >
              For Business
            </NavLink>
            <NavLink
              to="/chauffeurs"
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-muted-foreground hover:text-white"
              }
            >
              For Chauffeurs
            </NavLink>
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
