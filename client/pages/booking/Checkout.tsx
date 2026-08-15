import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingStepLayout from "@/components/booking/BookingStepLayout";
import BookingGuard from "./BookingGuard";
import { useBooking } from "@/context/useBooking";
import {
  displayPriceBreakdownDescription,
  formatGbp,
} from "@/lib/priceBreakdownDisplay";
import Seo from "@/components/Seo";

export default function Checkout() {
  const navigate = useNavigate();
  const { bookingData } = useBooking();
  const car = bookingData.selectedCar!;
  const customer = bookingData.customerInfo!;
  const total = car.total_price ?? car.price;
  const breakdown =
    car.price_breakdown ??
    bookingData.quoteResponse?.quotes_break_down_price_list ??
    [];

  const destinations = Array.isArray(bookingData.toLocation)
    ? bookingData.toLocation
    : [bookingData.toLocation];

  return (
    <BookingGuard requireCar requireCustomer>
      <Seo title="Review & Confirm" description="Review your booking details before checkout." noindex />
      <BookingStepLayout
        step={3}
        title="Review & Confirm"
        progress={75}
        backTo="/booking/customer-info"
        footer={
          <Button
            className="btn-gradient text-primary-foreground ml-auto hidden sm:inline-flex"
            onClick={() => navigate("/booking/payment")}
          >
            Proceed to payment
          </Button>
        }
      >
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Trip details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">From:</span>{" "}
                  {bookingData.fromLocation}
                </p>
                <div>
                  <span className="text-muted-foreground">To:</span>
                  <ol className="list-decimal list-inside mt-1">
                    {destinations.filter(Boolean).map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ol>
                </div>
                <p>
                  <span className="text-muted-foreground">Date:</span>{" "}
                  {bookingData.date ? format(bookingData.date, "PPP") : "—"}
                </p>
                <p>
                  <span className="text-muted-foreground">Pickup time:</span>{" "}
                  {bookingData.time}
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

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Selected vehicle</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                {car.image && (
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-32 h-20 object-contain rounded bg-white/90 p-1"
                  />
                )}
                <div>
                  <p className="font-semibold">{car.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {car.passengers} passengers • {car.luggage} luggage
                  </p>
                  <p className="text-primary font-bold mt-1">
                    {formatGbp(total)}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Customer information</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>
                  {customer.firstName} {customer.lastName}
                </p>
                <p>{customer.email}</p>
                <p>{customer.phone}</p>
                {customer.specialRequests && (
                  <p className="mt-2 text-muted-foreground">
                    {customer.specialRequests}
                  </p>
                )}
              </CardContent>
            </Card>

            <Button
              className="w-full btn-gradient text-primary-foreground sm:hidden"
              onClick={() => navigate("/booking/payment")}
            >
              Proceed to payment
            </Button>
          </div>

          <div className="lg:col-span-1">
            <Card className="border-border sticky top-32">
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                {breakdown.length > 0 ? (
                  <ul className="space-y-2 text-sm mb-4">
                    {breakdown.map((line, i) => (
                      <li key={i} className="flex justify-between gap-2">
                        <span>
                          {displayPriceBreakdownDescription(line.description)}
                        </span>
                        <span>{formatGbp(line.amount)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground mb-4">
                    Hourly rate based on selected duration. Final price confirmed
                    at payment.
                  </p>
                )}
                <div className="flex justify-between font-bold text-lg border-t border-border pt-3">
                  <span>Total</span>
                  <span className="text-primary">{formatGbp(total)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </BookingStepLayout>
    </BookingGuard>
  );
}
