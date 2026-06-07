import { backendApiUrl } from "./backendApiUrl";
import { authorizedJsonFetch } from "./authorizedJsonFetch";

export type OrderStatus = "not started" | "started" | "completed" | "cancelled";

export interface AdminOrderRow {
  id: string;
  from: { address: string; latitude?: number; longitude?: number };
  to: { address: string; latitude?: number; longitude?: number };
  stops: { address: string; latitude?: number; longitude?: number }[];
  flight_number?: string;
  pickup_date?: string;
  pickup_time?: string;
  vehicle_class?: string;
  vehicle_class_name?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phonenumber?: string;
  special_request?: string;
  route_distance?: number;
  total_price?: number;
  pricing_breakdown?: Record<string, number>;
  is_payment_paid?: boolean;
  transcation_id?: string;
  status: OrderStatus;
  created_at?: string;
}

const STATUS_ALIASES: Record<string, OrderStatus> = {
  pending: "not started",
  "not started": "not started",
  confirmed: "started",
  started: "started",
  completed: "completed",
  cancelled: "cancelled",
  canceled: "cancelled",
};

export function normalizeOrderStatus(raw?: string): OrderStatus {
  const key = (raw ?? "not started").toLowerCase().trim();
  return STATUS_ALIASES[key] ?? "not started";
}

export function formatOrderStatusLabel(status: OrderStatus): string {
  return status.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function normalizeAdminOrder(raw: Record<string, unknown>): AdminOrderRow {
  const nested = (raw.data as Record<string, unknown>) ?? raw;
  return {
    id: String(nested.id ?? nested._id ?? ""),
    from: (nested.from as AdminOrderRow["from"]) ?? { address: "" },
    to: (nested.to as AdminOrderRow["to"]) ?? { address: "" },
    stops: (nested.stops as AdminOrderRow["stops"]) ?? [],
    flight_number: nested.flight_number ? String(nested.flight_number) : "",
    pickup_date: nested.pickup_date ? String(nested.pickup_date) : "",
    pickup_time: nested.pickup_time ? String(nested.pickup_time) : "",
    vehicle_class: nested.vehicle_class ? String(nested.vehicle_class) : "",
    vehicle_class_name: nested.vehicle_class_name
      ? String(nested.vehicle_class_name)
      : "",
    first_name: nested.first_name ? String(nested.first_name) : "",
    last_name: nested.last_name ? String(nested.last_name) : "",
    email: nested.email ? String(nested.email) : "",
    phonenumber: nested.phonenumber ? String(nested.phonenumber) : "",
    special_request: nested.special_request
      ? String(nested.special_request)
      : "",
    route_distance: Number(nested.route_distance ?? 0),
    total_price: Number(nested.total_price ?? 0),
    pricing_breakdown:
      (nested.pricing_breakdown as Record<string, number>) ?? {},
    is_payment_paid: Boolean(nested.is_payment_paid),
    transcation_id: nested.transcation_id
      ? String(nested.transcation_id)
      : "",
    status: normalizeOrderStatus(
      nested.status ? String(nested.status) : undefined,
    ),
    created_at: nested.created_at ? String(nested.created_at) : "",
  };
}

export async function fetchAdminOrders(): Promise<AdminOrderRow[]> {
  const data = await authorizedJsonFetch<unknown>(
    backendApiUrl("/api/v1/orders"),
  );
  const list = Array.isArray(data)
    ? data
    : Array.isArray((data as { data?: unknown }).data)
      ? (data as { data: unknown[] }).data
      : [];
  return list
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .map(normalizeAdminOrder);
}

export async function updateAdminOrder(
  id: string,
  payload: Record<string, unknown>,
): Promise<AdminOrderRow> {
  const data = await authorizedJsonFetch<Record<string, unknown>>(
    backendApiUrl(`/api/v1/orders/${id}`),
    { method: "PUT", body: JSON.stringify(payload) },
  );
  return normalizeAdminOrder(data);
}
