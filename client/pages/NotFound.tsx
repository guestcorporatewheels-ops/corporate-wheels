import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background px-6">
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
      <div className="text-center max-w-md">
        <img
          src="/logo.png"
          alt="Corporate Wheels"
          className="h-14 w-auto object-contain mx-auto mb-8 opacity-90"
        />
        <p className="text-sm font-semibold tracking-wider text-corporate-gold uppercase mb-3">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-heading text-white mb-3">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="btn-gradient text-primary-foreground">
            <Link to="/">Return home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/booking">Book a ride</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
