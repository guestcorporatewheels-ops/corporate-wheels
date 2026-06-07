import { Navigate } from "react-router-dom";
import { useBooking } from "@/context/useBooking";

interface BookingGuardProps {
  requireCar?: boolean;
  requireCustomer?: boolean;
  children: React.ReactNode;
}

export default function BookingGuard({
  requireCar,
  requireCustomer,
  children,
}: BookingGuardProps) {
  const { bookingData } = useBooking();

  if (requireCustomer && !bookingData.customerInfo) {
    return <Navigate to="/booking/customer-info" replace />;
  }
  if (requireCar && !bookingData.selectedCar) {
    return <Navigate to="/booking/select-car" replace />;
  }
  if ((requireCar || requireCustomer) && !bookingData.date) {
    return <Navigate to="/booking/select-car" replace />;
  }

  return <>{children}</>;
}
