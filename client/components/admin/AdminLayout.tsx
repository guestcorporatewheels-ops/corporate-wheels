import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Car,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { clearAdminSession, getAdminSession, refreshAdminTokenIfNeeded } from "@/lib/adminAuth";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const NAV = [
  { to: "/admin-panel/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin-panel/booking-data", label: "Booking Data", icon: CalendarDays },
  {
    to: "/admin-panel/vehicle-class-management",
    label: "Vehicle Class Management",
    icon: Car,
  },
  { to: "/admin-panel/settings", label: "Settings", icon: Settings },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();
  return (
    <nav className="flex flex-col gap-1 p-4">
      {NAV.map((item) => {
        const Icon = item.icon;
        const active = location.pathname.startsWith(item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-sidebar-foreground hover:bg-muted/30",
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const session = getAdminSession();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      refreshAdminTokenIfNeeded();
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  const logout = () => {
    clearAdminSession();
    navigate("/admin-panel/login");
  };

  const title =
    NAV.find((n) => location.pathname.startsWith(n.to))?.label ?? "Admin";

  return (
    <div className="min-h-dvh flex bg-muted">
      <aside className="hidden lg:flex w-64 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
        <div className="p-4 font-heading font-bold text-lg border-b border-sidebar-border">
          Admin
        </div>
        <NavLinks />
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-border bg-card flex items-center justify-between px-4 gap-4">
          <div className="flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0 bg-sidebar">
                <div className="p-4 font-bold border-b border-sidebar-border">
                  Admin
                </div>
                <NavLinks onNavigate={() => setOpen(false)} />
              </SheetContent>
            </Sheet>
            <h1 className="font-semibold text-foreground">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
              {(session?.email?.[0] ?? "A").toUpperCase()}
            </div>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </Button>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
