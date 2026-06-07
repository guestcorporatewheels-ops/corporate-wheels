import { backendApiUrl } from "./backendApiUrl";
import { authorizedJsonFetch } from "./authorizedJsonFetch";

export interface ExtraPickupTypeRow {
  id: string;
  pickup_type: string;
  additional_pricing_type: string;
  base_price: number;
  notes: string;
  is_active: boolean;
}

function normalize(raw: Record<string, unknown>): ExtraPickupTypeRow {
  const nested = (raw.data as Record<string, unknown>) ?? raw;
  return {
    id: String(nested.id ?? nested._id ?? ""),
    pickup_type: String(nested.pickup_type ?? ""),
    additional_pricing_type: String(nested.additional_pricing_type ?? ""),
    base_price: Number(nested.base_price ?? nested.price ?? 0),
    notes: String(nested.notes ?? ""),
    is_active: Boolean(nested.is_active ?? true),
  };
}

export async function fetchExtraPickupTypes(): Promise<ExtraPickupTypeRow[]> {
  const data = await authorizedJsonFetch<unknown>(
    backendApiUrl("/api/v1/extra-pickup-types"),
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

export async function createExtraPickupType(
  body: Omit<ExtraPickupTypeRow, "id">,
): Promise<ExtraPickupTypeRow> {
  const data = await authorizedJsonFetch<Record<string, unknown>>(
    backendApiUrl("/api/v1/extra-pickup-types"),
    { method: "POST", body: JSON.stringify(body) },
  );
  return normalize(data);
}

export async function updateExtraPickupType(
  id: string,
  body: Partial<ExtraPickupTypeRow>,
): Promise<ExtraPickupTypeRow> {
  const data = await authorizedJsonFetch<Record<string, unknown>>(
    backendApiUrl(`/api/v1/extra-pickup-types/${id}`),
    { method: "PUT", body: JSON.stringify(body) },
  );
  return normalize(data);
}

export async function deleteExtraPickupType(id: string): Promise<void> {
  await authorizedJsonFetch(backendApiUrl(`/api/v1/extra-pickup-types/${id}`), {
    method: "DELETE",
  });
}
