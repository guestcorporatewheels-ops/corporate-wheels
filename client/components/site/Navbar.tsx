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
            className="h-14 w-auto object-contain"
          />
          <p className="text-white">Corporate Wheels</p>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {/* Services Dropdown (improved spacing & hover/focus) */}
          <HoverDropdown
            dropdownId="services"
            trigger={
              <button className="flex items-center gap-1 hover:text-corporate-gold transition-colors focus:outline-none">
                Our Services <ChevronDown className="size-4" />
              </button>
            }
            className="w-56 bg-black/90 border border-white/8 backdrop-blur-md rounded-lg shadow-lg p-2"
          >
            <div className="py-1">
              {[
                { label: "City-to-City rides", path: "/city-to-city" },
                { label: "Chauffeur hailing", path: "/chauffeur-hailing" },
                { label: "Airport transfer", path: "/airport-transfer" },
                { label: "Hourly hire", path: "/hourly-hire" },
                // { label: "Chauffeur service", path: "/chauffeur-service" },
                { label: "Limousine service", path: "/limousine-service" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="group block px-3 py-3 rounded-md text-white/90 hover:bg-white/8 focus:bg-white/12 focus:outline-none transition-colors"
                >
                  <span className="group-hover:text-corporate-gold group-focus:text-corporate-gold transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </HoverDropdown>

          {/* Other Navigation Items */}
          <NavLink
            to="/business"
            className={({ isActive }) =>
              isActive
                ? "text-corporate-gold"
                : "hover:text-corporate-gold transition-colors"
            }
          >
            Business
          </NavLink>
          <NavLink
            to="/chauffeurs"
            className={({ isActive }) =>
              isActive
                ? "text-corporate-gold"
                : "hover:text-corporate-gold transition-colors"
            }
          >
            Chauffeurs
          </NavLink>
       
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-corporate-gold"
                : "hover:text-corporate-gold transition-colors"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              isActive
                ? "text-corporate-gold"
                : "hover:text-corporate-gold transition-colors"
            }
          >
            Help
          </NavLink>

          {/* Download Dropdown */}
          <HoverDropdown
            dropdownId="download"
            trigger={
              <button className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none">
                Download <ChevronDown className="size-4" />
              </button>
            }
            className="w-48 bg-black/90 border border-white/8 backdrop-blur-md rounded-lg shadow-lg p-2"
          >
            <div className="py-1">
              <a
                href="#download"
                className="group flex items-center gap-2 px-3 py-2 rounded-md text-white/90 hover:bg-white/8 focus:bg-white/12 transition-colors transform hover:-translate-y-0.5"
              >
                <div
                  className="size-4 bg-current text-white/80 group-hover:text-corporate-gold transition-colors"
                  style={{
                    maskImage: "url(/images/app-store-svgrepo-com.svg)",
                    WebkitMaskImage: "url(/images/app-store-svgrepo-com.svg)",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                  }}
                ></div>
                <span className="ml-1 group-hover:text-corporate-gold group-focus:text-corporate-gold transition-colors">
                  iOS
                </span>
              </a>
              <a
                href="#download"
                className="group flex items-center gap-2 px-3 py-2 rounded-md text-white/90 hover:bg-white/8 focus:bg-white/12 transition-colors transform hover:-translate-y-0.5"
              >
                <div
                  className="size-4 bg-white/80 group-hover:bg-corporate-gold group-focus:bg-corporate-gold transition-colors"
                  style={{
                    maskImage: "url(/images/playstore-svgrepo-com.svg)",
                    WebkitMaskImage: "url(/images/playstore-svgrepo-com.svg)",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                ></div>{" "}
                <span className="ml-1 group-hover:text-corporate-gold group-focus:text-corporate-gold transition-colors">
                  Android
                </span>
              </a>
            </div>
          </HoverDropdown>

          <Button asChild variant="glow" className="ml-2">
            <NavLink to="/booking">Book Now</NavLink>
          </Button>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/10 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open Menu"
          aria-expanded={open}
        >
          <Menu className="text-white" />
        </button>
      </div>

      {/* Mobile menu: keep in DOM and animate via max-height + opacity for smooth transition */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
          open
            ? "max-h-[900px] opacity-100 border-t border-white/10 bg-black/80 backdrop-blur-md"
            : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="container py-4 flex flex-col gap-4">
          <div className="text-white font-medium mb-2">Our Services</div>
          <div className="pl-4 space-y-2">
            {[
              { label: "City-to-City rides", path: "/city-to-city" },
              { label: "Chauffeur hailing", path: "/chauffeur-hailing" },
              { label: "Airport transfer", path: "/airport-transfer" },
              { label: "Hourly hire", path: "/hourly-hire" },
              // { label: "Chauffeur service", path: "/chauffeur-service" },
              { label: "Limousine service", path: "/limousine-service" },
            ].map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-white"
                    : "block text-muted-foreground hover:text-corporate-gold focus:text-corporate-gold"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <NavLink
            to="/business"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-muted-foreground hover:text-white"
            }
          >
            For Business
          </NavLink>
          <NavLink
            to="/chauffeurs"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-muted-foreground hover:text-white"
            }
          >
            For Chauffeurs
          </NavLink>
          <a
            href="#help"
            onClick={() => setOpen(false)}
            className="text-muted-foreground hover:text-white"
          >
            Help
          </a>
          <NavLink
            to="/booking"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-muted-foreground hover:text-white"
            }
          >
            Booking
          </NavLink>
          <div className="text-white font-medium mb-2">Download</div>
          <div className="pl-4 space-y-2">
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-muted-foreground hover:text-corporate-gold focus:text-corporate-gold"
            >
              <div
                className="size-4 bg-current text-white/80 group-hover:text-corporate-gold transition-colors"
                style={{
                  maskImage: "url(/images/app-store-svgrepo-com.svg)",
                  WebkitMaskImage: "url(/images/app-store-svgrepo-com.svg)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                }}
              ></div>{" "}
              iOS
            </a>
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-muted-foreground hover:text-corporate-gold focus:text-corporate-gold"
            >
              <div
                className="size-4 bg-white/80 group-hover:bg-corporate-gold group-focus:bg-corporate-gold transition-colors"
                style={{
                  maskImage: "url(/images/playstore-svgrepo-com.svg)",
                  WebkitMaskImage: "url(/images/playstore-svgrepo-com.svg)",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              ></div>{" "}
              Android
            </a>
          </div>
          <Button asChild variant="glow" className="mt-4">
            <NavLink to="/booking" onClick={() => setOpen(false)}>
              Book Now
            </NavLink>
          </Button>
        </div>
      </div>
    </header>
  );
}
