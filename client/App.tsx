import "./global.css";

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
import Booking from "./pages/Booking";
import ViewAllServices from "./pages/ViewAllServices";
import ViewAllCities from "./pages/ViewAllCities";
import ViewAllRoutes from "./pages/ViewAllRoutes";
import FleetCategory from "./pages/FleetCategory";
import ExecutiveCars from "./pages/fleet/ExecutiveCars";
import ServiceCategory from "./pages/ServiceCategory";
import WhyChooseUs from "./pages/WhyChooseUs";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CookieBanner from "@/components/site/CookieBanner";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { BookingProvider } from "@/context/BookingProvider";
import SelectCar from "./pages/booking/SelectCar";
import CustomerInfo from "./pages/booking/CustomerInfo";
import Checkout from "./pages/booking/Checkout";
import Payment from "./pages/booking/Payment";
import BookingSuccess from "./pages/booking/Success";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBookingData from "./pages/admin/AdminBookingData";
import AdminVehicleClasses from "./pages/admin/AdminVehicleClasses";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";
import OrganizationSchema from "@/components/OrganizationSchema";

const queryClient = new QueryClient();

function RootLayout({ showFooter = true }: { showFooter?: boolean }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <CookieBanner />
      {showFooter && <Footer />}
    </div>
  );
}

function BookingFunnelLayout() {
  return <RootLayout showFooter={false} />;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookingProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <OrganizationSchema />
          <ErrorBoundary>
            <BrowserRouter>
              <Routes>
                <Route element={<RootLayout />}>
                  <Route index element={<Index />} />
                  <Route path="business" element={<Business />} />
                  <Route path="chauffeurs" element={<Chauffeurs />} />
                  <Route path="chauffeur-hailing" element={<ChauffeurHailing />} />
                  <Route path="help" element={<Help />} />
                  <Route path="hourly-hire" element={<HourlyHire />} />
                  <Route path="city-to-city" element={<CityToCity />} />
                  <Route path="airport-transfer" element={<AirportTransfer />} />
                  <Route path="limousine-service" element={<LimousineService />} />
                  <Route path="privacy" element={<Privacy />} />
                  <Route path="terms" element={<Terms />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="about" element={<About />} />
                  <Route path="booking" element={<Booking />} />
                  <Route path="services" element={<ViewAllServices />} />
                  <Route path="cities" element={<ViewAllCities />} />
                  <Route path="routes" element={<ViewAllRoutes />} />
                  <Route path="fleet/executive-cars" element={<ExecutiveCars />} />
                  <Route path="fleet/:categoryId" element={<FleetCategory />} />
                  <Route path="services/:serviceId" element={<ServiceCategory />} />
                  <Route path="why-choose-us/:chooseId" element={<WhyChooseUs />} />
                </Route>

                <Route element={<BookingFunnelLayout />}>
                  <Route path="booking/select-car" element={<SelectCar />} />
                  <Route path="booking/customer-info" element={<CustomerInfo />} />
                  <Route path="booking/checkout" element={<Checkout />} />
                  <Route path="booking/payment" element={<Payment />} />
                  <Route path="booking/success" element={<BookingSuccess />} />
                </Route>

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
      </BookingProvider>
    </QueryClientProvider>
  );
}
