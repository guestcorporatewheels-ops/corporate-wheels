import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Business from "./pages/Business";
import Help from "./pages/Help";
import Chauffeurs from "./pages/Chauffeurs";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ErrorBoundary>
          <BrowserRouter>
            <Routes>
              <Route element={<RootLayout />}>
                <Route index element={<Index />} />
                <Route path="business" element={<Business />} />
                <Route path="chauffeurs" element={<Chauffeurs />} />
                <Route path="help" element={<Help />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
