import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import DateInput from "@/components/ui/DateInput";
import TimeInput from "@/components/ui/TimeInput";

const VEHICLES = [
  { id: "executive", name: "Executive Sedan", emoji: "🚗", seats: 3 },
  { id: "mpv", name: "MPV (up to 6)", emoji: "🚐", seats: 6 },
  { id: "suv", name: "SUV", emoji: "🚙", seats: 4 },
  { id: "minibus", name: "Minibus", emoji: "🚌", seats: 12 },
];

const VEHICLE_IMAGES: Record<string, string> = {
  executive: "https://aetworldwide.com/wp-content/uploads/2019/05/03-1.jpg",
  suv: "https://www.spinny.com/blog/wp-content/uploads/2023/03/Black-Mahindra-XUV700-jpg.webp",
  mpv: "https://luxurychauffeurdubai.com/wp-content/uploads/elementor/thumbs/a833cb03-cd45-4c3d-90e5-c8610ff3ed1b-2-rd5o3c8xglyih41rlqnlgroo9b4oelyiem8m01seq0.jpg",
  minibus:
    "https://s.alicdn.com/@sc04/kf/A0f7ec22e917344a2b93cae04ac46b64dB.jpg?avif=close&webp=close",
};

export default function Booking() {
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: "1",
    vehicle: "",
    notes: "",
  });
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  // passenger picker only (date/time handled by shared components)
  const [showPassengerPicker, setShowPassengerPicker] = useState(false);
  const passengerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (
        passengerRef.current &&
        !passengerRef.current.contains(e.target as Node)
      ) {
        setShowPassengerPicker(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const handle = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  // Time slots are provided by TimeInput component

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-slate-900/60 to-transparent pb-12 pt-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -8, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Book premium transfers in seconds
              </h1>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Instant quotes, professional chauffeurs and a fleet to match
                your requirements. Choose a vehicle, set pickup & drop-off and
                get an immediate estimate.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#form"
                  className="inline-flex items-center gap-2 bg-corporate-gold text-black px-4 py-2 rounded-md font-semibold"
                >
                  Start Booking
                </a>
                <a
                  href="#vehicles"
                  className="inline-flex items-center gap-2 border border-white/8 px-4 py-2 rounded-md text-muted-foreground hover:text-corporate-gold"
                >
                  View vehicles
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="relative"
            >
              {/* decorative golden swoosh */}
              <svg
                aria-hidden
                className="absolute -right-16 -top-12 w-72 h-72 opacity-90 hidden lg:block"
                viewBox="0 0 200 200"
                fill="none"
              >
                <defs>
                  <radialGradient id="goldGrad" cx="30%" cy="30%">
                    <stop offset="0%" stopColor="#F4C430" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#E6A700" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="60" r="80" fill="url(#goldGrad)" />
              </svg>

              {/* hero image */}
              <img
                src="/images/FlexibleScheduling.jpeg"
                alt="Executive car"
                className="hidden lg:block rounded-xl w-64 h-40 object-cover mb-4 shadow-md"
              />

              <div className="rounded-xl bg-gradient-to-br from-slate-800/60 to-black/40 p-4 shadow-xl border border-white/6">
                <div className="text-sm text-muted-foreground">
                  Quick estimate
                </div>
                <div className="mt-3 text-2xl font-bold">
                  £{(Math.random() * 120 + 40).toFixed(2)}
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Typical fares shown for guidance only. Final fare confirmed on
                  booking.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form + map + vehicles */}
      <section className="container py-12" id="form">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <form className="bg-surface/40 p-6 rounded-xl border border-white/6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    Pickup address
                  </span>
                  <div className="relative mt-1">
                    <input
                      value={form.pickup}
                      onChange={(e) => handle("pickup", e.target.value)}
                      className="w-full rounded-lg bg-transparent px-3 py-2 border border-white/6 focus:outline-none focus:ring-2 focus:ring-corporate-gold"
                      placeholder="E.g. Heathrow Terminal 2"
                    />
                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    Drop-off address
                  </span>
                  <div className="relative mt-1">
                    <input
                      value={form.dropoff}
                      onChange={(e) => handle("dropoff", e.target.value)}
                      className="w-full rounded-lg bg-transparent px-3 py-2 border border-white/6 focus:outline-none focus:ring-2 focus:ring-corporate-gold"
                      placeholder="E.g. Central London, Soho"
                    />
                  </div>
                </label>

                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Date</span>
                  <div className="relative mt-1">
                    <DateInput
                      value={form.date}
                      onChange={(d) => handle("date", d)}
                      ariaLabel="Booking date"
                      name="booking-date"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Time</span>
                  <div className="relative mt-1">
                    <TimeInput
                      value={form.time}
                      onChange={(t) => handle("time", t)}
                      ariaLabel="Booking time"
                      name="booking-time"
                    />
                  </div>
                </div>

                <div className="flex flex-col" ref={passengerRef}>
                  <span className="text-sm text-muted-foreground">
                    Passengers
                  </span>
                  <div className="relative mt-1">
                    <input
                      readOnly
                      value={form.passengers}
                      onClick={() => setShowPassengerPicker((s) => !s)}
                      aria-label="Passengers"
                      className="w-full rounded-lg bg-black/40 px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-corporate-gold cursor-pointer"
                    />
                    <Users className="absolute right-3 top-1/2 -translate-y-1/2 text-corporate-gold" />

                    {showPassengerPicker && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute right-0 z-50 mt-2 w-full bg-black/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10"
                      >
                        <div className="p-3 border-b border-white/10">
                          <div className="text-lg font-medium text-center">
                            {form.passengers}
                          </div>
                          <div className="text-xs text-center text-muted-foreground mt-1">
                            Select passengers
                          </div>
                        </div>
                        <div className="grid grid-cols-5 gap-1 p-2">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <button
                              key={n}
                              type="button"
                              onClick={() => {
                                handle("passengers", String(n));
                                setShowPassengerPicker(false);
                              }}
                              className={`text-sm py-2 px-3 rounded-md transition-colors ${
                                form.passengers === String(n)
                                  ? "bg-corporate-gold text-black font-medium"
                                  : "hover:bg-white/5"
                              }`}
                            >
                              {n}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <label className="flex flex-col sm:col-span-2">
                  <span className="text-sm text-muted-foreground">
                    Additional notes
                  </span>
                  <textarea
                    value={form.notes}
                    onChange={(e) => handle("notes", e.target.value)}
                    className="mt-1 w-full rounded-lg bg-transparent px-3 py-2 border border-white/6 focus:outline-none focus:ring-2 focus:ring-corporate-gold h-28 resize-none"
                    placeholder="Flight number, meet & greet details, baby seat requests..."
                  />
                </label>

                <div className="sm:col-span-2 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-corporate-gold text-black font-semibold px-5 py-2 rounded-lg shadow-md hover:brightness-95 transition"
                  >
                    Request Quote
                  </button>
                  <button
                    type="button"
                    className="text-sm text-muted-foreground underline hover:text-corporate-gold"
                  >
                    Request by email
                  </button>
                </div>
              </div>
            </form>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-white/6 shadow-sm">
              <div className="h-72 w-full">
                <iframe
                  title="Pickup area map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.49%2C-0.10%2C51.52&layer=mapnik&marker=51.5074%2C-0.1278"
                  className="w-full h-full"
                />
              </div>
              <div className="p-3 text-sm text-muted-foreground">
                Map shows central London area. Drag to move or zoom.
              </div>
            </div>
          </div>

          <aside>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              className="rounded-xl bg-gradient-to-br from-slate-800/60 to-black/40 p-6 shadow-lg border border-white/6"
            >
              <h3 className="text-lg font-medium">Booking summary</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Preview of your booking details and estimated fare.
              </p>

              <dl className="mt-4 grid grid-cols-1 gap-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Pickup</dt>
                  <dd className="font-medium">{form.pickup || "—"}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Drop-off</dt>
                  <dd className="font-medium">{form.dropoff || "—"}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Date / Time</dt>
                  <dd className="font-medium">
                    {(form.date || "—") + (form.time ? ` · ${form.time}` : "")}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Passengers</dt>
                  <dd className="font-medium">{form.passengers}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Vehicle</dt>
                  <dd className="font-medium">
                    {selectedVehicle || "Not selected"}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <div className="text-xs text-muted-foreground">
                  Estimated fare
                </div>
                <div className="text-2xl font-bold mt-1">
                  £{(Math.random() * 120 + 40).toFixed(2)}
                </div>
                <div className="mt-3 text-xs text-muted-foreground">
                  Final fare confirmed on booking confirmation.
                </div>
              </div>
            </motion.div>

            {/* vehicle chooser */}
            <div id="vehicles" className="mt-6">
              <h4 className="text-sm font-medium">Choose your vehicle</h4>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {VEHICLES.map((v) => (
                  <motion.button
                    key={v.id}
                    onClick={() => {
                      setSelectedVehicle(v.name);
                      handle("vehicle", v.name);
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 p-3 rounded-lg text-left border transition ${
                      selectedVehicle === v.name
                        ? "border-corporate-gold bg-white/5"
                        : "border-white/6 bg-transparent"
                    }`}
                  >
                    <div className="w-14 h-10 flex-shrink-0 rounded overflow-hidden bg-white/5">
                      {VEHICLE_IMAGES[v.id] ? (
                        <img
                          src={VEHICLE_IMAGES[v.id]}
                          alt={v.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-2xl">
                          {v.emoji}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{v.name}</div>
                      <div className="text-xs text-muted-foreground">
                        Seats: {v.seats}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
