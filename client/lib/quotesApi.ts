import { backendApiUrl } from "./backendApiUrl";
import { resolveVehicleClassImage } from "./vehicleClassImages";

export interface PriceBreakdownLine {
  description: string;
  amount: number;
}

export interface VehicleQuote {
  id: string;
  name: string;
  image: string;
  price: number;
  passengers: number;
  luggage: number;
  features?: string[];
  description?: string;
  total_price?: number;
  price_breakdown?: PriceBreakdownLine[];
}

export interface QuotesResponse {
  distance_miles: number;
  quotes_break_down_price_list?: PriceBreakdownLine[];
  vehicle_quotes: VehicleQuote[];
}

export interface GetQuotesBody {
  from: { latitude: number; longitude: number };
  to: { latitude: number; longitude: number };
  pickup_type: string;
}

function normalizeBreakdown(
  raw: unknown,
): PriceBreakdownLine[] | undefined {
  if (!Array.isArray(raw)) return undefined;
  return raw
    .map((line) => {
      if (!line || typeof line !== "object") return null;
      const obj = line as Record<string, unknown>;
      const description = String(obj.description ?? obj.label ?? "");
      const amount = Number(obj.amount ?? obj.price ?? 0);
      if (!description) return null;
      return { description, amount };
    })
    .filter((x): x is PriceBreakdownLine => x !== null);
}

function normalizeVehicleQuote(raw: Record<string, unknown>): VehicleQuote {
  const id = String(raw.id ?? raw.vehicle_class_id ?? raw.class_id ?? "");
  const name = String(
    raw.name ?? raw.class_name ?? raw.vehicle_class_name ?? "Vehicle",
  );
  const image = resolveVehicleClassImage(
    name,
    String(raw.image ?? raw.image_url ?? raw.vehicle_class_image ?? ""),
  );
  const total = Number(raw.total_price ?? raw.price ?? raw.total ?? 0);
  return {
    id,
    name,
    image,
    price: Number(raw.price ?? total),
    passengers: Number(raw.passengers ?? raw.allow_passengers ?? 0),
    luggage: Number(raw.luggage ?? raw.allow_luggage ?? 0),
    features: Array.isArray(raw.features)
      ? raw.features.map(String)
      : undefined,
    description: raw.description ? String(raw.description) : undefined,
    total_price: total,
    price_breakdown: normalizeBreakdown(raw.price_breakdown),
  };
}

export async function fetchQuotes(body: GetQuotesBody): Promise<QuotesResponse> {
  const res = await fetch(backendApiUrl("/api/v1/quotes/get-quotes"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Quote request failed (${res.status})`);
  }
  const data = (await res.json()) as Record<string, unknown>;
  const payload = (data.data as Record<string, unknown>) ?? data;
  const vehicleRaw = (payload.vehicle_quotes ?? []) as unknown[];
  return {
    distance_miles: Number(payload.distance_miles ?? 0),
    quotes_break_down_price_list: normalizeBreakdown(
      payload.quotes_break_down_price_list,
    ),
    vehicle_quotes: vehicleRaw
      .filter((v): v is Record<string, unknown> => !!v && typeof v === "object")
      .map(normalizeVehicleQuote),
  };
}
