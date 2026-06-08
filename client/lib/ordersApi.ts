import type { BookingData } from "@/context/bookingTypes";
import { buildPickupIsoUtc, getLondonYmd } from "./londonPickupWindow";
import { backendApiUrl } from "./backendApiUrl";

export interface CreateOrderRequestBody {
  from: { address: string; latitude: number; longitude: number };
  to: { address: string; latitude: number; longitude: number };
  stops: { address: string; latitude: number; longitude: number }[];
  flight_number: string;
  pickup_date: string;
  pickup_time: string;
  vehicle_class: string;
  first_name: string;
  last_name: string;
  email: string;
  phonenumber: string;
  special_request: string;
  route_distance: number;
  total_price: number;
  pricing_breakdown: Record<string, number>;
  is_payment_paid: boolean;
  transcation_id: string;
}

export function buildCreateOrderRequestBody(
  data: BookingData,
  options: { isPaymentPaid: boolean; transactionId?: string },
): CreateOrderRequestBody {
  const route = data.routePoints;
  if (!route || !data.selectedCar || !data.customerInfo || !data.date) {
    throw new Error("Incomplete booking data for order creation");
  }

  const ymd = getLondonYmd(data.date);
  const pickupIso =
    buildPickupIsoUtc(ymd, data.time) ?? new Date(data.date).toISOString();

  const toAddresses = Array.isArray(data.toLocation)
    ? data.toLocation
    : [data.toLocation];
  const lastStop = route.stops[route.stops.length - 1] ?? route.to;

  const pricingBreakdown: Record<string, number> = {};
  const breakdown =
    data.selectedCar.price_breakdown ??
    data.quoteResponse?.quotes_break_down_price_list ??
    [];
  breakdown.forEach((line, index) => {
    pricingBreakdown[line.description || `line_${index}`] = line.amount;
  });

  return {
    from: route.from,
    to: lastStop ?? route.to,
    stops: route.stops.slice(0, -1),
    flight_number: data.flightNumber ?? "",
    pickup_date: ymd,
    pickup_time: pickupIso,
    vehicle_class: data.selectedCar.id,
    first_name: data.customerInfo.firstName,
    last_name: data.customerInfo.lastName,
    email: data.customerInfo.email,
    phonenumber: data.customerInfo.phone,
    special_request: data.customerInfo.specialRequests ?? "",
    route_distance: data.quoteResponse?.distance_miles ?? 0,
    total_price: data.selectedCar.total_price ?? data.selectedCar.price,
    pricing_breakdown: pricingBreakdown,
    is_payment_paid: options.isPaymentPaid,
    transcation_id: options.transactionId ?? "",
  };
}

export async function createOrder(body: CreateOrderRequestBody): Promise<unknown> {
  const res = await fetch(backendApiUrl("/api/v1/orders"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Order creation failed (${res.status})`);
  }
  return res.json();
}
