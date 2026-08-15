import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import BookingStepLayout from "@/components/booking/BookingStepLayout";
import BookingGuard from "./BookingGuard";
import { useBooking } from "@/context/useBooking";
import {
  buildCreateOrderRequestBody,
  createOrder,
} from "@/lib/ordersApi";
import { fetchPaymentQr } from "@/lib/paymentApi";
import { formatGbp } from "@/lib/priceBreakdownDisplay";
import Seo from "@/components/Seo";

export default function Payment() {
  const navigate = useNavigate();
  const { bookingData, updateBookingData } = useBooking();
  const car = bookingData.selectedCar!;
  const total = car.total_price ?? car.price;

  const [qrUrl, setQrUrl] = useState("");
  const [instructions, setInstructions] = useState("");
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);
  const [paidConfirm, setPaidConfirm] = useState(false);

  useEffect(() => {
    fetchPaymentQr(total)
      .then((data) => {
        setQrUrl(data.qr_image_url);
        setInstructions(data.payment_instructions);
        setIsPlaceholder(data.is_placeholder);
      })
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Failed to load QR code"),
      )
      .finally(() => setLoading(false));
  }, [total]);

  const handleConfirm = async () => {
    if (!terms) {
      setError("Please accept the terms and conditions.");
      return;
    }
    if (!paidConfirm) {
      setError("Please confirm you have completed the payment.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const txnId = `qr-${Date.now()}`;
      updateBookingData({
        paymentMethod: "qr",
        termsAccepted: true,
      });
      const body = buildCreateOrderRequestBody(bookingData, {
        isPaymentPaid: false,
        transactionId: txnId,
      });
      await createOrder(body);
      navigate("/booking/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to complete booking");
      setSubmitting(false);
    }
  };

  return (
    <BookingGuard requireCar requireCustomer>
      <Seo title="Payment" description="Complete payment for your chauffeur booking." noindex />
      <BookingStepLayout
        step={4}
        title="Payment"
        progress={95}
        backTo="/booking/checkout"
      >
        <div className="max-w-md mx-auto space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <p className="text-sm text-muted-foreground">Amount due</p>
            <p className="text-3xl font-bold text-primary mt-1">
              {formatGbp(total)}
            </p>
            <p className="text-sm text-muted-foreground mt-2">{car.name}</p>
          </div>

          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="rounded-xl border border-primary/40 bg-card p-6 text-center space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                <QrCode className="h-4 w-4" />
                Scan to pay
              </div>
              {qrUrl ? (
                <img
                  src={qrUrl}
                  alt="Payment QR code"
                  className="mx-auto w-48 h-48 rounded-lg border border-border bg-white p-2"
                />
              ) : (
                <p className="text-sm text-destructive">QR code unavailable</p>
              )}
              <p className="text-sm text-muted-foreground">{instructions}</p>
              {isPlaceholder && (
                <p className="text-xs text-muted-foreground">
                  Our team will confirm your payment details shortly after
                  booking.
                </p>
              )}
            </div>
          )}

          <div className="space-y-3">
            <label className="flex items-start gap-2 text-sm">
              <Checkbox
                checked={paidConfirm}
                onCheckedChange={(v) => setPaidConfirm(v === true)}
              />
              I have completed the payment via QR code
            </label>
            <label className="flex items-start gap-2 text-sm">
              <Checkbox
                id="terms"
                checked={terms}
                onCheckedChange={(v) => setTerms(v === true)}
              />
              I agree to the terms and conditions
            </label>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button
            className="w-full btn-gradient text-primary-foreground"
            disabled={submitting || loading}
            onClick={handleConfirm}
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Confirming…
              </>
            ) : (
              "Confirm booking"
            )}
          </Button>
        </div>
      </BookingStepLayout>
    </BookingGuard>
  );
}
