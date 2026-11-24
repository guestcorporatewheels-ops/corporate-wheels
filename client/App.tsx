import "./global.css";
import "./styles/logistifie.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Business from "./pages/Business";
import Help from "./pages/Help";
import Chauffeurs from "./pages/Chauffeurs";
import HourlyHire from "./pages/HourlyHire";
import CityToCity from "./pages/CityToCity";
import ChauffeurHailing from "./pages/ChauffeurHailing";
import AirportTransfer from "./pages/AirportTransfer";
import LimousineService from "./pages/LimousineService";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import AirportTransfersService from "./pages/AirportTransfersService";
import Booking from "./pages/Booking";
import BookFleet from "./pages/BookFleet";
import ViewAllServices from "./pages/ViewAllServices";
import ViewAllCities from "./pages/ViewAllCities";
import ViewAllRoutes from "./pages/ViewAllRoutes";
import FleetCategory from "./pages/FleetCategory";
import ExecutiveCars from "./pages/fleet/ExecutiveCars";
import ServiceCategory from "./pages/ServiceCategory";
import WhyChooseUs from "./pages/WhyChooseUs";
import SocialConnect from "./pages/SocialConnect";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CookieBanner from "@/components/site/CookieBanner";
import ChatWidget from "@/components/site/ChatWidget";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import AdminLogin from "./pages/admin/AdminLogin";
import { useEffect } from "react";

const DASHBOARD_LOGIN_URL = "https://corporatewheels.dashboardloginapp.com/login";

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBookingData from "./pages/admin/AdminBookingData";
import AdminVehicleClasses from "./pages/admin/AdminVehicleClasses";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";
import OrganizationSchema from "@/components/OrganizationSchema";
import { ThemeSync } from "@/hooks/use-theme";

const queryClient = new QueryClient();

function RootLayout({ showFooter = true }: { showFooter?: boolean }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <CookieBanner />
      <ChatWidget />
      {showFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <OrganizationSchema />
        <ErrorBoundary>
          <BrowserRouter>
            <ThemeSync />
              <Routes>
                <Route element={<RootLayout />}>
                  <Route index element={<Index />} />
                  <Route path="business" element={<Business />} />
                  <Route path="chauffeurs" element={<Navigate to="/services" replace />} />
                  <Route path="chauffeur-careers" element={<Chauffeurs />} />
                  <Route path="chauffeur-hailing" element={<ChauffeurHailing />} />
                  <Route path="help" element={<Help />} />
                  <Route path="hourly-hire" element={<HourlyHire />} />
                  <Route path="city-to-city" element={<CityToCity />} />
                  <Route path="airport-transfer" element={<AirportTransfer />} />
                  <Route path="limousine-service" element={<LimousineService />} />
                  <Route path="privacy" element={<Privacy />} />
                  <Route path="terms-and-conditions" element={<Terms />} />
                  <Route path="terms" element={<Navigate to="/terms-and-conditions" replace />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="about" element={<About />} />
                  <Route path="booking/*" element={<Booking />} />
                  <Route path="services" element={<ViewAllServices />} />
                  <Route path="cities" element={<ViewAllCities />} />
                  <Route path="routes" element={<ViewAllRoutes />} />
                  <Route path="fleet/executive-cars" element={<ExecutiveCars />} />
                  <Route path="fleet/:categoryId" element={<FleetCategory />} />
                  <Route path="services/airport-transfers" element={<AirportTransfersService />} />
                  <Route path="services/:serviceId" element={<ServiceCategory />} />
                  <Route path="why-choose-us/:chooseId" element={<WhyChooseUs />} />
                </Route>

                <Route element={<RootLayout showFooter={false} />}>
                  <Route path="Socialconnect" element={<SocialConnect />} />
                  <Route path="socialconnect" element={<Navigate to="/Socialconnect" replace />} />
                </Route>

                <Route path="book-fleet" element={<BookFleet />} />

                <Route path="login" element={<ExternalRedirect to={DASHBOARD_LOGIN_URL} />} />

                <Route path="admin-panel" element={<Navigate to="/admin-panel/login" replace />} />
                <Route path="admin-panel/login" element={<AdminLogin />} />
                <Route
                  element={
                    <AdminGuard>
                      <AdminLayout />
                    </AdminGuard>
                  }
                >
                  <Route path="admin-panel/dashboard" element={<AdminDashboard />} />
                  <Route path="admin-panel/booking-data" element={<AdminBookingData />} />
                  <Route
                    path="admin-panel/vehicle-class-management"
                    element={<AdminVehicleClasses />}
                  />
                  <Route path="admin-panel/settings" element={<AdminSettings />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </ErrorBoundary>
        </TooltipProvider>
    </QueryClientProvider>
  );
}
