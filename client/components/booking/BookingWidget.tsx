import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Plus, X } from "lucide-react";
import { useBooking } from "@/context/useBooking";
import type { RoutePoint } from "@/context/bookingTypes";
import {
  bindPlacesAutocomplete,
  isGoogleMapsConfigured,
} from "@/lib/googlePlacesAutocomplete";
import { fetchQuotes } from "@/lib/quotesApi";
import {
  getFirstValidTime24hOnLondonDay,
  getPickerDayYmd,
  isPickupAtLeastTwoHoursAheadLondon,
  time24hTo12h,
} from "@/lib/londonPickupWindow";
import PickupDateField from "./PickupDateField";
import PickupTimeField from "./PickupTimeField";
import { cn } from "@/lib/utils";

const DURATIONS = ["2 hours", "3 hours", "4 hours", "6 hours", "8 hours"];

interface StopField {
  id: string;
  label: string;
}

interface LatLng {
  latitude: number;
  longitude: number;
}

export default function ChauffeurBookingWidget() {
  const navigate = useNavigate();
  const { updateBookingData } = useBooking();
  const [bookingType, setBookingType] = useState<"oneway" | "hourly">("oneway");
  const [fromLocation, setFromLocation] = useState("");
  const [isFromAirport, setIsFromAirport] = useState(false);
  const [stops, setStops] = useState<StopField[]>([
    { id: "stop-0", label: "" },
  ]);
  const [flightNumber, setFlightNumber] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("2 hours");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mapsError, setMapsError] = useState("");

  const fromRef = useRef<HTMLInputElement>(null);
  const stopRefs = useRef<Map<string, HTMLInputElement>>(new Map());
  const fromCoordsRef = useRef<LatLng | null>(null);
  const destCoordsByIdRef = useRef<Map<string, LatLng>>(new Map());

  const stopIdsKey = useMemo(
    () => stops.map((stop) => stop.id).join(","),
    [stops],
  );

  useEffect(() => {
    if (!isGoogleMapsConfigured()) {
      setMapsError(
        "Address autocomplete is unavailable — set VITE_GOOGLE_MAPS_API_KEY in .env and restart the dev server.",
      );
      return;
    }

    const el = fromRef.current;
    if (!el) return;

    let cleanup: (() => void) | undefined;
    bindPlacesAutocomplete(el, (place) => {
      fromCoordsRef.current = {
        latitude: place.latitude,
        longitude: place.longitude,
      };
      setFromLocation(place.formattedAddress);
      setIsFromAirport(!!place.isAirport);
    })
      .then((fn) => {
        cleanup = fn;
      })
      .catch((err: unknown) => {
        setMapsError(
          err instanceof Error ? err.message : "Failed to load Google Places",
        );
      });

    return () => cleanup?.();
  }, []);

  useEffect(() => {
    if (!isGoogleMapsConfigured()) return;

    const cleanups: (() => void)[] = [];
    stops.forEach((stop) => {
      const el = stopRefs.current.get(stop.id);
      if (!el) return;

      bindPlacesAutocomplete(el, (place) => {
        destCoordsByIdRef.current.set(stop.id, {
          latitude: place.latitude,
          longitude: place.longitude,
        });
        setStops((prev) =>
          prev.map((s) =>
            s.id === stop.id ? { ...s, label: place.formattedAddress } : s,
          ),
        );
      })
        .then((fn) => cleanups.push(fn))
        .catch((err: unknown) => {
          setMapsError(
            err instanceof Error ? err.message : "Failed to load Google Places",
          );
        });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [stopIdsKey]);

  const addStop = () => {
    if (stops.length >= 4) return;
    setStops((prev) => [...prev, { id: `stop-${Date.now()}`, label: "" }]);
  };

  const removeStop = (id: string) => {
    if (stops.length <= 1) return;
    destCoordsByIdRef.current.delete(id);
    setStops((prev) => prev.filter((s) => s.id !== id));
  };

  const validate = (): string | null => {
    if (!fromCoordsRef.current) {
      return "Please choose From from the Google suggestions list so we can calculate the route.";
    }
    if (bookingType === "oneway") {
      const firstDest = stops[0];
      if (!firstDest || !destCoordsByIdRef.current.get(firstDest.id)) {
        return "Please choose To from the Google suggestions list so we can calculate the route.";
      }
    }
    if (isFromAirport && !flightNumber.trim()) {
      return "Flight number is required for airport pickups.";
    }
    if (!date) return "Please select a pickup date.";
    if (!time) return "Please select a pickup time.";
    const ymd = getPickerDayYmd(date);
    if (!isPickupAtLeastTwoHoursAheadLondon(ymd, time)) {
      return "Pickup must be at least 2 hours from now (London time).";
    }
    return null;
  };

  const handleSearch = async () => {
    setError("");
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const fromCoords = fromCoordsRef.current;
    if (!fromCoords || !date) return;

    setLoading(true);
    try {
      const pickupType = isFromAirport ? "airport" : "standard";
      const fromPoint: RoutePoint = {
        address: fromLocation,
        latitude: fromCoords.latitude,
        longitude: fromCoords.longitude,
      };
      const destLabels = stops.map((s) => s.label).filter(Boolean);
      const destPoints: RoutePoint[] = stops
        .map((stop) => {
          const coords = destCoordsByIdRef.current.get(stop.id);
          if (!coords) return null;
          return {
            address: stop.label,
            latitude: coords.latitude,
            longitude: coords.longitude,
          };
        })
        .filter(Boolean) as RoutePoint[];

      if (bookingType === "oneway") {
        const firstDest = destPoints[0]!;
        const quote = await fetchQuotes({
          from: {
            latitude: fromCoords.latitude,
            longitude: fromCoords.longitude,
          },
          to: {
            latitude: firstDest.latitude,
            longitude: firstDest.longitude,
          },
          pickup_type: pickupType,
        });
        updateBookingData({
          bookingType: "oneway",
          fromLocation,
          toLocation: destLabels.length === 1 ? destLabels[0] : destLabels,
          flightNumber,
          date,
          time,
          duration: "",
          quoteResponse: quote,
          quotePickupType: pickupType,
          routePoints: {
            from: fromPoint,
            to: destPoints[destPoints.length - 1],
            stops: destPoints,
          },
        });
      } else {
        updateBookingData({
          bookingType: "hourly",
          fromLocation,
          toLocation: fromLocation,
          flightNumber,
          date,
          time,
          duration,
          quoteResponse: undefined,
          quotePickupType: pickupType,
          routePoints: {
            from: fromPoint,
            to: fromPoint,
            stops: [],
          },
        });
      }
      navigate("/booking/select-car");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get quotes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full max-w-5xl mx-auto widget"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="bg-card/90 border border-border rounded-2xl p-6 shadow-glow space-y-6">
        <div className="flex rounded-xl overflow-hidden bg-muted/50 border border-border">
          {[
            { key: "oneway" as const, label: "One Way" },
            { key: "hourly" as const, label: "Hourly" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setBookingType(tab.key)}
              className={cn(
                "flex-1 py-3 text-sm font-semibold transition-colors",
                bookingType === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-primary">From</label>
            <Input
              ref={fromRef}
              value={fromLocation}
              onChange={(e) => {
                setFromLocation(e.target.value);
                fromCoordsRef.current = null;
                setIsFromAirport(false);
              }}
              placeholder="Pickup address"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-primary">
              Flight number{" "}
              {isFromAirport ? (
                <span className="text-destructive">(required)</span>
              ) : (
                "(optional)"
              )}
            </label>
            <Input
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              placeholder="e.g. BA123"
            />
          </div>

          {bookingType === "oneway" ? (
            <div className="md:col-span-2 space-y-3">
              {stops.map((stop, index) => (
                <div key={stop.id} className="flex gap-2 items-end">
                  <div className="flex-1 space-y-2">
                    <label className="text-sm font-medium text-primary">
                      {index === 0 ? "To" : `Stop ${index + 1}`}
                    </label>
                    <Input
                      ref={(el) => {
                        if (el) stopRefs.current.set(stop.id, el);
                        else stopRefs.current.delete(stop.id);
                      }}
                      value={stop.label}
                      onChange={(e) => {
                        destCoordsByIdRef.current.delete(stop.id);
                        setStops((prev) =>
                          prev.map((s) =>
                            s.id === stop.id
                              ? { ...s, label: e.target.value }
                              : s,
                          ),
                        );
                      }}
                      placeholder="Destination"
                    />
                  </div>
                  {stops.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeStop(stop.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              {stops.length < 4 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addStop}
                  className="gap-1"
                >
                  <Plus className="h-4 w-4" />
                  Add stop
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">Duration</label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DURATIONS.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <PickupDateField
              value={date}
              onChange={(next) => {
                setDate(next);
                if (next) {
                  const ymd = getPickerDayYmd(next);
                  setTime((prev) => {
                    if (prev && isPickupAtLeastTwoHoursAheadLondon(ymd, prev)) {
                      return prev;
                    }
                    return time24hTo12h(getFirstValidTime24hOnLondonDay(ymd));
                  });
                } else {
                  setTime("");
                }
              }}
            />
            <PickupTimeField date={date} value={time} onChange={setTime} />
          </div>
        </div>

        {mapsError && (
          <p className="text-sm text-amber-600 dark:text-amber-400 text-center">
            {mapsError}
          </p>
        )}

        {error && (
          <p className="text-sm text-destructive text-center">{error}</p>
        )}

        <Button
          type="button"
          className="w-full btn-gradient text-primary-foreground"
          disabled={loading}
          onClick={handleSearch}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Searching…
            </>
          ) : (
            "Search available vehicles"
          )}
        </Button>
      </div>
    </motion.div>
  );
}
