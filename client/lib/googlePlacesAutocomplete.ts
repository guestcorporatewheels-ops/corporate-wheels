import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

export interface PlaceAutocompleteResult {
  formattedAddress: string;
  latitude: number;
  longitude: number;
  isAirport?: boolean;
}

/** @deprecated use PlaceAutocompleteResult */
export type PlaceResult = PlaceAutocompleteResult & { address: string };

let loadPromise: Promise<void> | null = null;

export function ensureGoogleMapsPlacesLoaded(
  apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "",
): Promise<void> {
  const key = apiKey.trim();
  if (!key) {
    return Promise.reject(
      new Error("VITE_GOOGLE_MAPS_API_KEY is missing or empty"),
    );
  }

  if (!loadPromise) {
    setOptions({
      key,
      v: "weekly",
      libraries: ["places"],
    });
    loadPromise = importLibrary("places").then(() => undefined);
  }

  return loadPromise;
}

function readLatLng(location: google.maps.LatLng): {
  latitude: number;
  longitude: number;
} {
  const lat = location.lat();
  const lng = location.lng();
  return { latitude: lat, longitude: lng };
}

function detectAirport(
  place: google.maps.places.PlaceResult,
  formattedAddress: string,
): boolean {
  const types = place.types ?? [];
  if (types.includes("airport")) return true;
  const haystack = `${formattedAddress} ${place.name ?? ""}`.toLowerCase();
  return haystack.includes("airport");
}

export async function bindPlacesAutocomplete(
  input: HTMLInputElement,
  onPlaceSelected: (place: PlaceAutocompleteResult) => void,
): Promise<() => void> {
  await ensureGoogleMapsPlacesLoaded();

  const autocomplete = new google.maps.places.Autocomplete(input, {
    fields: ["formatted_address", "name", "place_id", "geometry", "types"],
    componentRestrictions: { country: "gb" },
  });

  const listener = autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    const location = place.geometry?.location;
    if (!location) return;

    const formattedAddress =
      place.formatted_address || place.name || input.value.trim();
    const { latitude, longitude } = readLatLng(location);
    const isAirport = detectAirport(place, formattedAddress);

    onPlaceSelected({
      formattedAddress,
      latitude,
      longitude,
      isAirport,
    });
  });

  return () => {
    google.maps.event.clearInstanceListeners(autocomplete);
    google.maps.event.removeListener(listener);
  };
}

export function isGoogleMapsConfigured(): boolean {
  return Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim());
}
