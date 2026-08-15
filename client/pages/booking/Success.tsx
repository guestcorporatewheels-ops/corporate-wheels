import { useMemo } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBooking } from "@/context/useBooking";
import { formatGbp } from "@/lib/priceBreakdownDisplay";
import Seo from "@/components/Seo";

export default function BookingSuccess() {
  const { bookingData, resetBooking } = useBooking();
  const bookingId = useMemo(
    () => `CW-${Date.now().toString(36).toUpperCase()}`,
    [],
  );

  const car = bookingData.selectedCar;
  const customer = bookingData.customerInfo;

  return (
    <div className="min-h-dvh bg-background pt-28 pb-16">
      <Seo title="Booking Confirmed" description="Your chauffeur booking is confirmed." noindex />
      <div className="container max-w-lg mx-auto text-center">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-2xl font-heading font-bold text-foreground mb-2">
          Booking confirmed
        </h1>
        <p className="text-muted-foreground mb-2">
          Reference: <span className="text-foreground font-mono">{bookingId}</span>
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          We have sent a confirmation email and notified our operations team.
        </p>

        <Card className="border-border text-left mb-8">
          <CardHeader>
            <CardTitle className="text-base">Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="text-muted-foreground">Trip:</span>{" "}
              {bookingData.fromLocation}
              {" → "}
              {Array.isArray(bookingData.toLocation)
                ? bookingData.toLocation.join(", ")
                : bookingData.toLocation}
            </p>
            {bookingData.date && (
              <p>
                <span className="text-muted-foreground">When:</span>{" "}
                {format(bookingData.date, "PPP")} at {bookingData.time}
              </p>
            )}
            {car && (
              <p>
                <span className="text-muted-foreground">Vehicle:</span>{" "}
                {car.name} — {formatGbp(car.total_price ?? car.price)}
              </p>
            )}
            {customer && (
              <p>
                <span className="text-muted-foreground">Customer:</span>{" "}
                {customer.firstName} {customer.lastName} ({customer.email})
              </p>
            )}
          </CardContent>
        </Card>

        <Button
          className="btn-gradient text-primary-foreground"
          onClick={() => {
            resetBooking();
          }}
          asChild
        >
          <Link to="/">New booking</Link>
        </Button>
      </div>
    </div>
  );
}
