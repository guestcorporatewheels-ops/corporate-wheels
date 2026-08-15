import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BookingStepLayout from "@/components/booking/BookingStepLayout";
import PhoneWithCountryField, { toE164 } from "@/components/booking/PhoneWithCountryField";
import BookingGuard from "./BookingGuard";
import { useBooking } from "@/context/useBooking";
import Seo from "@/components/Seo";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CustomerInfo() {
  const navigate = useNavigate();
  const { bookingData, updateBookingData } = useBooking();
  const existing = bookingData.customerInfo;

  const [firstName, setFirstName] = useState(existing?.firstName ?? "");
  const [lastName, setLastName] = useState(existing?.lastName ?? "");
  const [email, setEmail] = useState(existing?.email ?? "");
  const [dialCode, setDialCode] = useState("+44");
  const [localPhone, setLocalPhone] = useState(
    existing?.phone?.replace(/^\+\d+/, "") ?? "",
  );
  const [specialRequests, setSpecialRequests] = useState(
    existing?.specialRequests ?? "",
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!firstName.trim()) next.firstName = "Required";
    if (!lastName.trim()) next.lastName = "Required";
    if (!email.trim() || !EMAIL_RE.test(email)) next.email = "Valid email required";
    const digits = localPhone.replace(/\D/g, "");
    if (digits.length < 8) next.phone = "Enter a valid phone number";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleContinue = () => {
    if (!validate()) return;
    updateBookingData({
      customerInfo: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: toE164(dialCode, localPhone),
        specialRequests: specialRequests.trim() || undefined,
      },
    });
    navigate("/booking/checkout");
  };

  return (
    <BookingGuard requireCar>
      <Seo title="Customer Information" description="Enter your details to continue booking." noindex />
      <BookingStepLayout
        step={2}
        title="Customer information"
        progress={50}
        backTo="/booking/select-car"
        footer={
          <Button
            className="btn-gradient text-primary-foreground ml-auto"
            onClick={handleContinue}
          >
            Continue to Review
          </Button>
        }
      >
        <div className="max-w-lg mx-auto space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First name</label>
              <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              {errors.firstName && (
                <p className="text-xs text-destructive">{errors.firstName}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last name</label>
              <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
              {errors.lastName && (
                <p className="text-xs text-destructive">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>
          <PhoneWithCountryField
            dialCode={dialCode}
            localNumber={localPhone}
            onDialCodeChange={setDialCode}
            onLocalNumberChange={setLocalPhone}
            error={errors.phone}
          />
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Special requests (optional)
            </label>
            <Textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              rows={4}
            />
          </div>
        </div>
      </BookingStepLayout>
    </BookingGuard>
  );
}
