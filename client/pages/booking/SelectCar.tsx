import { useMemo, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Users, Luggage, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBooking } from "@/context/useBooking";
import { HOURLY_FALLBACK_VEHICLES } from "@/context/bookingTypes";
import type { SelectedCar } from "@/context/bookingTypes";
import BookingStepLayout from "@/components/booking/BookingStepLayout";
import { formatGbp } from "@/lib/priceBreakdownDisplay";
import { cn } from "@/lib/utils";
import Seo from "@/components/Seo";

const INCLUDES = [
  "Free cancellation up to 24h before pickup",
  "60 minutes complimentary wait time",
  "Meet & greet included",
  "Complimentary bottled water",
];

export default function SelectCar() {
  const navigate = useNavigate();
  const { bookingData, updateBookingData } = useBooking();
  const [selectedId, setSelectedId] = useState(bookingData.selectedCar?.id ?? "");

  const vehicles = useMemo(() => {
    if (bookingData.bookingType === "hourly" || !bookingData.quoteResponse) {
      return HOURLY_FALLBACK_VEHICLES;
    }
    return bookingData.quoteResponse.vehicle_quotes;
  }, [bookingData]);

  if (!bookingData.date || !bookingData.fromLocation) {
    return <Navigate to="/" replace />;
  }

  const handleSelect = (car: SelectedCar) => {
    setSelectedId(car.id);
    updateBookingData({ selectedCar: car });
  };

  const bookingTypeLabel =
    bookingData.bookingType === "hourly" ? "Hourly" : "One Way";

  return (
    <>
      <Seo title="Select Your Vehicle" description="Choose your chauffeur vehicle class." noindex />
      <BookingStepLayout
      step={1}
      title="Select your vehicle"
      progress={25}
      backTo="/"
      backLabel="Back to Home"
      footer={
        <Button
          className="btn-gradient text-primary-foreground ml-auto"
          disabled={!selectedId}
          onClick={() => navigate("/booking/customer-info")}
        >
          Continue to Customer Info
        </Button>
      }
    >
      <Card className="mb-8 border-border">
        <CardHeader>
          <CardTitle className="text-lg">Your Booking Details</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-3 text-sm">
          <p>
            <span className="text-muted-foreground">Type:</span> {bookingTypeLabel}
          </p>
          <p>
            <span className="text-muted-foreground">Date:</span>{" "}
            {bookingData.date ? format(bookingData.date, "PPP") : "—"}
          </p>
          <p>
            <span className="text-muted-foreground">Time:</span> {bookingData.time}
          </p>
          {bookingData.flightNumber && (
            <p>
              <span className="text-muted-foreground">Flight:</span>{" "}
              {bookingData.flightNumber}
            </p>
          )}
          {bookingData.bookingType === "hourly" && (
            <p>
              <span className="text-muted-foreground">Duration:</span>{" "}
              {bookingData.duration}
            </p>
          )}
        </CardContent>
      </Card>

      <div className="space-y-4 mb-8">
        {vehicles.map((car) => {
          const total = car.total_price ?? car.price;
          const isSelected = selectedId === car.id;
          return (
            <button
              key={car.id}
              type="button"
              onClick={() => handleSelect(car)}
              className={cn(
                "w-full text-left rounded-xl border-2 p-4 flex gap-4 transition-colors bg-card",
                isSelected ? "border-primary shadow-glow" : "border-border hover:border-primary/50",
              )}
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-36 h-24 object-contain rounded-lg bg-white/90 p-1 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">{car.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {car.name} or similar
                </p>
                <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {car.passengers}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Luggage className="h-4 w-4" />
                    {car.luggage}
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="text-lg font-bold text-primary">
                  {formatGbp(total)}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base">All classes include</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <p className="mt-6 text-center sm:hidden">
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
          Back to Home
        </Link>
      </p>
      </BookingStepLayout>
    </>
  );
}
