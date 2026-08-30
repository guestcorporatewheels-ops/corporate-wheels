const VEHICLE_CLASS_IMAGES: Record<string, string> = {
  "business class": "/images/cw-placeholder.svg",
  "first class": "/images/cw-placeholder.svg",
  "business van": "/images/cw-placeholder.svg",
};

export const DEFAULT_VEHICLE_CLASS_IMAGE = "/images/cw-placeholder.svg";

export function resolveVehicleClassImage(
  name: string,
  image?: string | null,
): string {
  const trimmed = image?.trim();
  if (trimmed) return trimmed;
  const key = name.trim().toLowerCase();
  return VEHICLE_CLASS_IMAGES[key] ?? DEFAULT_VEHICLE_CLASS_IMAGE;
}
