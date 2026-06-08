const VEHICLE_CLASS_IMAGES: Record<string, string> = {
  "business class": "/images/fleet/business-class.png",
  "first class": "/images/fleet/first-class.png",
  "business van": "/images/fleet/business-van.png",
};

export const DEFAULT_VEHICLE_CLASS_IMAGE = "/images/fleet/business-class.png";

export function resolveVehicleClassImage(
  name: string,
  image?: string | null,
): string {
  const trimmed = image?.trim();
  if (trimmed) return trimmed;
  const key = name.trim().toLowerCase();
  return VEHICLE_CLASS_IMAGES[key] ?? DEFAULT_VEHICLE_CLASS_IMAGE;
}
