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

  // Block body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

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
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled
        ? "backdrop-blur-md bg-black/60 border-b border-white/5"
        : "bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Corporate Wheels Logo"
            className="h-16 w-auto object-contain"
          />

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
                { label: "Airport Transfers", path: "/services/airport-transfers" },
                { label: "Corporate travel", path: "/services/corporate-travel" },
                { label: "Special events", path: "/services/special-events" },
                { label: "City Tours", path: "/services/city-tours" },
                { label: "Private Jet Chauffeur", path: "/services/private-jet-chauffeur" },
                { label: "London Cruise Transfer", path: "/services/london-cruise-transfer" },
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

          {/* Fleet Dropdown */}
          <HoverDropdown
            dropdownId="fleet"
            trigger={
              <button className="flex items-center gap-1 hover:text-corporate-gold transition-colors focus:outline-none">
                Fleet <ChevronDown className="size-4" />
              </button>
            }
            className="w-64 bg-black/90 border border-white/8 backdrop-blur-md rounded-lg shadow-lg p-2"
          >
            <div className="py-1">
              {[
                { label: "Executive Cars", path: "/fleet/executive-cars" },
                { label: "Luxury (VIP Class)", path: "/fleet/luxury-class" },
                { label: "Premium SUVs", path: "/fleet/premium-suvs" },
                { label: "Business Vans", path: "/fleet/business-vans" },
                { label: "Special Vehicles (On Request)", path: "/fleet/special-vehicles" },
                { label: "Electric Class", path: "/fleet/electric-class" },
                { label: "Vintage Cars for Weddings", path: "/fleet/vintage-cars" },
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

          {/* Why Choose Us Dropdown */}
          <HoverDropdown
            dropdownId="why-choose-us"
            trigger={
              <button className="flex items-center gap-1 hover:text-corporate-gold transition-colors focus:outline-none">
                Why Choose Us <ChevronDown className="size-4" />
              </button>
            }
            className="w-60 bg-black/90 border border-white/8 backdrop-blur-md rounded-lg shadow-lg p-2"
          >
            <div className="py-1">
              {[
                { label: "Safety First", path: "/why-choose-us/safety-first" },
                { label: "Transparent Pricing", path: "/why-choose-us/transparent-pricing" },
                { label: "Tailored Luxury Fleet", path: "/why-choose-us/tailored-luxury-fleet" },
                { label: "Elite Chauffeurs", path: "/why-choose-us/elite-chauffeurs" },
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
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-corporate-gold"
                : "hover:text-corporate-gold transition-colors"
            }
          >
            Contact Us
          </NavLink>

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
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-in-out ${open
          ? "max-h-[calc(100vh-5rem)] opacity-100 border-t border-white/10 bg-black/80 backdrop-blur-md overflow-y-auto"
          : "max-h-0 opacity-0 border-t-0 overflow-hidden"
          }`}
      >
        <div className="container pt-4 pb-10 flex flex-col gap-4">
          <div className="text-white font-medium mb-2">Our Services</div>
          <div className="pl-4 space-y-2">
            {[
              { label: "Airport Transfers", path: "/services/airport-transfers" },
              { label: "Corporate travel", path: "/services/corporate-travel" },
              { label: "Special events", path: "/services/special-events" },
              { label: "City Tours", path: "/services/city-tours" },
              { label: "Private Jet Chauffeur", path: "/services/private-jet-chauffeur" },
              { label: "London Cruise Transfer", path: "/services/london-cruise-transfer" },
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

          <div className="text-white font-medium mb-2 mt-4">Our Fleet</div>
          <div className="pl-4 space-y-2">
            {[
              { label: "Executive Cars", path: "/fleet/executive-cars" },
              { label: "Luxury (VIP Class)", path: "/fleet/luxury-class" },
              { label: "Premium SUVs", path: "/fleet/premium-suvs" },
              { label: "Business Vans", path: "/fleet/business-vans" },
              { label: "Special Vehicles", path: "/fleet/special-vehicles" },
              { label: "Electric Class", path: "/fleet/electric-class" },
              { label: "Vintage Cars", path: "/fleet/vintage-cars" },
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

          <div className="text-white font-medium mb-2 mt-4">Why Choose Us</div>
          <div className="pl-4 space-y-2">
            {[
              { label: "Safety First", path: "/why-choose-us/safety-first" },
              { label: "Transparent Pricing", path: "/why-choose-us/transparent-pricing" },
              { label: "Tailored Luxury Fleet", path: "/why-choose-us/tailored-luxury-fleet" },
              { label: "Elite Chauffeurs", path: "/why-choose-us/elite-chauffeurs" },
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
            to="/chauffeurs"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-muted-foreground hover:text-white"
            }
          >
            For Chauffeurs
          </NavLink>
          <NavLink
            to="/help"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-muted-foreground hover:text-white"
            }
          >
            Help
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-muted-foreground hover:text-white"
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/booking"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-muted-foreground hover:text-white"
            }
          >
            Booking
          </NavLink>

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
