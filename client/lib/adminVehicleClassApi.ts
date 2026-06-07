import { backendApiUrl } from "./backendApiUrl";
import { authorizedJsonFetch } from "./authorizedJsonFetch";

export interface VehicleClassRow {
  id: string;
  class_name: string;
  image_url: string;
  allow_passengers: number;
  allow_luggage: number;
  base_price: number;
  base_price_per_default_miles: number;
  extra_price_per_miles: number;
  is_active: boolean;
}

function normalize(raw: Record<string, unknown>): VehicleClassRow {
  const nested = (raw.data as Record<string, unknown>) ?? raw;
  return {
    id: String(nested.id ?? nested._id ?? ""),
    class_name: String(
      nested.class_name ?? nested.vehicle_class_name ?? nested.name ?? "",
    ),
    image_url: String(nested.image_url ?? nested.image ?? ""),
    allow_passengers: Number(nested.allow_passengers ?? 0),
    allow_luggage: Number(nested.allow_luggage ?? 0),
    base_price: Number(nested.base_price ?? 0),
    base_price_per_default_miles: Number(
      nested.base_price_per_default_miles ?? 0,
    ),
    extra_price_per_miles: Number(nested.extra_price_per_miles ?? 0),
    is_active: Boolean(nested.is_active ?? true),
  };
}

export async function fetchVehicleClasses(): Promise<VehicleClassRow[]> {
  const data = await authorizedJsonFetch<unknown>(
    backendApiUrl("/api/v1/vehicle-classes"),
  );
  const list = Array.isArray(data)
    ? data
    : Array.isArray((data as { data?: unknown }).data)
      ? (data as { data: unknown[] }).data
      : [];
  return list
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .map(normalize);
}

export async function createVehicleClass(
  body: Omit<VehicleClassRow, "id">,
): Promise<VehicleClassRow> {
  const data = await authorizedJsonFetch<Record<string, unknown>>(
    backendApiUrl("/api/v1/vehicle-classes"),
    {
      method: "POST",
      body: JSON.stringify({
        class_name: body.class_name,
        image_url: body.image_url,
        allow_passengers: body.allow_passengers,
        allow_luggage: body.allow_luggage,
        base_price: body.base_price,
        base_price_per_default_miles: body.base_price_per_default_miles,
        extra_price_per_miles: body.extra_price_per_miles,
        is_active: body.is_active,
      }),
    },
  );
  return normalize(data);
}

export async function updateVehicleClass(
  id: string,
  body: Partial<VehicleClassRow>,
): Promise<VehicleClassRow> {
  const data = await authorizedJsonFetch<Record<string, unknown>>(
    backendApiUrl(`/api/v1/vehicle-classes/${id}`),
    { method: "PUT", body: JSON.stringify(body) },
  );
  return normalize(data);
}

export async function deleteVehicleClass(id: string): Promise<void> {
  await authorizedJsonFetch(backendApiUrl(`/api/v1/vehicle-classes/${id}`), {
    method: "DELETE",
  });
}

export async function uploadVehicleClassImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const data = await authorizedJsonFetch<Record<string, unknown>>(
    backendApiUrl("/api/v1/files/upload"),
    { method: "POST", body: form },
  );
  const nested = (data.data as Record<string, unknown>) ?? data;
  const url = String(nested.url ?? nested.image_url ?? nested.public_url ?? "");
  if (!url) throw new Error("Upload did not return a URL");
  return url;
}
