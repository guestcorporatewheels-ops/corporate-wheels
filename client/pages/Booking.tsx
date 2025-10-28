import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

// Custom CSS for the date picker theme
const datePickerStyles = `
  .rdp {
    --rdp-cell-size: 32px;
    --rdp-accent-color: #F4C430;
    --rdp-background-color: rgba(255, 255, 255, 0.05);
    --rdp-accent-color-dark: #E6A700;
    --rdp-background-color-dark: rgba(0, 0, 0, 0.8);
    --rdp-outline: 2px solid var(--rdp-accent-color);
    --rdp-outline-selected: 2px solid rgba(0, 0, 0, 0.5);
    margin: 0;
  }
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: rgba(255, 255, 255, 0.05);
  }
  .rdp-day_selected, 
  .rdp-day_today {
    background-color: var(--rdp-accent-color) !important;
    color: black !important;
    font-weight: bold;
  }
  .rdp-button:focus-visible:not([disabled]) {
    background-color: var(--rdp-accent-color-dark);
    color: black;
  }
  .rdp-nav_button {
    color: var(--rdp-accent-color) !important;
    opacity: 0.8;
  }
  .rdp-nav_button:hover {
    opacity: 1;
    background-color: rgba(244, 196, 48, 0.1) !important;
  }
  .rdp-today {
    color: #E6A700 !important;
  }
  .rdp-chevron {
    fill: #E6A700 !important;
  }
  .rdp-day_today:not(.rdp-day_selected) {
    border: 1px solid var(--rdp-accent-color) !important;
    background-color: transparent !important;
    color: var(--rdp-accent-color) !important;
  }
`;

const VEHICLES = [
  { id: "executive", name: "Executive Sedan", emoji: "🚗", seats: 3 },
  { id: "mpv", name: "MPV (up to 6)", emoji: "🚐", seats: 6 },
  { id: "suv", name: "SUV", emoji: "🚙", seats: 4 },
  { id: "minibus", name: "Minibus", emoji: "🚌", seats: 12 },
];

const VEHICLE_IMAGES: Record<string, string> = {
  executive: "/images/features/car.jpeg",
  suv: "/images/features/car2.jpeg",
  mpv: "/images/features/car2.jpeg",
  minibus: "/images/features/car2.jpeg",
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

  // date/time pickers
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showPassengerPicker, setShowPassengerPicker] = useState(false);
  const dateRef = useRef<HTMLDivElement | null>(null);
  const timeRef = useRef<HTMLDivElement | null>(null);
  const passengerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (dateRef.current && !dateRef.current.contains(e.target as Node)) {
        setShowDatePicker(false);
      }
      if (timeRef.current && !timeRef.current.contains(e.target as Node)) {
        setShowTimePicker(false);
      }
      if (passengerRef.current && !passengerRef.current.contains(e.target as Node)) {
        setShowPassengerPicker(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const handle = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const TIME_SLOTS = Array.from({ length: 48 }).map((_, i) => {
    const h = Math.floor(i / 2);
    const m = i % 2 === 0 ? "00" : "30";
    return `${String(h).padStart(2, "0")}:${m}`;
  });

  useEffect(() => {
    // Inject the date picker styles
    const style = document.createElement('style');
    style.textContent = datePickerStyles;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

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
                Instant quotes, professional chauffeurs and a fleet to match your
                requirements. Choose a vehicle, set pickup & drop-off and get an
                immediate estimate.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#form" className="inline-flex items-center gap-2 bg-corporate-gold text-black px-4 py-2 rounded-md font-semibold">
                  Start Booking
                </a>
                <a href="#vehicles" className="inline-flex items-center gap-2 border border-white/8 px-4 py-2 rounded-md text-muted-foreground hover:text-corporate-gold">
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
              <svg aria-hidden className="absolute -right-16 -top-12 w-72 h-72 opacity-90 hidden lg:block" viewBox="0 0 200 200" fill="none">
                <defs>
                  <radialGradient id="goldGrad" cx="30%" cy="30%">
                    <stop offset="0%" stopColor="#F4C430" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#E6A700" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="60" r="80" fill="url(#goldGrad)" />
              </svg>

              {/* hero image */}
              <img src="/images/features/car.jpeg" alt="Executive car" className="hidden lg:block rounded-xl w-64 h-40 object-cover mb-4 shadow-md" />

              <div className="rounded-xl bg-gradient-to-br from-slate-800/60 to-black/40 p-4 shadow-xl border border-white/6">
                <div className="text-sm text-muted-foreground">Quick estimate</div>
                <div className="mt-3 text-2xl font-bold">£{(Math.random() * 120 + 40).toFixed(2)}</div>
                <div className="mt-4 text-xs text-muted-foreground">Typical fares shown for guidance only. Final fare confirmed on booking.</div>
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
                  <span className="text-sm text-muted-foreground">Pickup address</span>
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
                  <span className="text-sm text-muted-foreground">Drop-off address</span>
                  <div className="relative mt-1">
                    <input
                      value={form.dropoff}
                      onChange={(e) => handle("dropoff", e.target.value)}
                      className="w-full rounded-lg bg-transparent px-3 py-2 border border-white/6 focus:outline-none focus:ring-2 focus:ring-corporate-gold"
                      placeholder="E.g. Central London, Soho"
                    />
                  </div>
                </label>

                <div className="flex flex-col" ref={dateRef}>
                  <span className="text-sm text-muted-foreground">Date</span>
                  <div className="relative mt-1">
                    <input
                      readOnly
                      value={selectedDay ? selectedDay.toLocaleDateString('en-GB') : ""}
                      onClick={() => setShowDatePicker((s) => !s)}
                      placeholder="Select date"
                      className="w-full rounded-lg bg-black/40 px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-corporate-gold cursor-pointer placeholder:text-white/40"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-corporate-gold" />

                    {showDatePicker && (
                      <motion.div 
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-50 mt-2 bg-black/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl p-3"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">October 2025</span>
                          <div className="flex gap-1">
                            <button 
                              onClick={() => setShowDatePicker(false)} 
                              className="p-1 rounded hover:bg-white/5 text-corporate-gold hover:text-corporate-gold/80 transition-colors"
                            >
                              <Calendar className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between px-2 mb-2">
                          <button className="p-1 text-corporate-gold hover:text-corporate-gold/80 transition-colors">
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-corporate-gold hover:text-corporate-gold/80 transition-colors">
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="grid grid-cols-7 gap-1 mb-2">
                          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                            <div key={day} className="text-xs text-center text-muted-foreground p-1">{day}</div>
                          ))}
                        </div>
                        <DayPicker
                          mode="single"
                          selected={selectedDay}
                          onSelect={(d) => {
                            setSelectedDay(d);
                            handle("date", d ? d.toISOString().slice(0, 10) : "");
                            setShowDatePicker(false);
                          }}
                          modifiers={{
                            selected: selectedDay,
                          }}
                          modifiersStyles={{
                            selected: {
                              backgroundColor: '#F4C430',
                              color: 'black',
                              fontWeight: 'bold'
                            }
                          }}
                          styles={{
                            caption: { display: 'none' },
                            head: { display: 'none' },
                            day: {
                              width: '32px',
                              height: '32px',
                              fontSize: '14px',
                              margin: '0',
                            },
                            button: {
                              border: 'none',
                              backgroundColor: 'transparent',
                              color: 'white',
                              borderRadius: '4px',
                            },
                            // button_selected: {
                            //   backgroundColor: '#F4C430',
                            //   color: 'black',
                            // }
                          }}
                        />
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col" ref={timeRef}>
                  <span className="text-sm text-muted-foreground">Time</span>
                  <div className="relative mt-1">
                    <input
                      readOnly
                      value={form.time || ""}
                      onClick={() => setShowTimePicker((s) => !s)}
                      placeholder="Select time"
                      className="w-full rounded-lg bg-black/40 px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-corporate-gold cursor-pointer placeholder:text-white/40"
                    />
                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-corporate-gold" />

                    {showTimePicker && (
                      <motion.div 
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute right-0 z-50 mt-2 w-64 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10"
                      >
                        <div className="p-3 border-b border-white/10">
                          <div className="text-lg font-medium text-center">{form.time || "20:00"}</div>
                          <div className="text-xs text-center text-muted-foreground mt-1">Select pickup time</div>
                        </div>
                        <div className="grid grid-cols-3 gap-1 p-2 max-h-[240px] overflow-auto">
                          {TIME_SLOTS.map((ts) => (
                            <button
                              key={ts}
                              type="button"
                              onClick={() => {
                                handle("time", ts);
                                setShowTimePicker(false);
                              }}
                              className={`text-sm py-2 px-3 rounded-md transition-colors ${
                                form.time === ts
                                  ? "bg-corporate-gold text-black font-medium"
                                  : "hover:bg-white/5"
                              }`}
                            >
                              {ts}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col" ref={timeRef}>
                  <span className="text-sm text-muted-foreground">Passengers</span>
                  <div className="relative mt-1">
                    <input
                      readOnly
                      value={form.passengers}
                      onClick={() => setShowPassengerPicker((s) => !s)}
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
                          <div className="text-lg font-medium text-center">{form.passengers}</div>
                          <div className="text-xs text-center text-muted-foreground mt-1">Select passengers</div>
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
                  <span className="text-sm text-muted-foreground">Additional notes</span>
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
                  loading="lazy"
                  aria-hidden={false}
                />
              </div>
              <div className="p-3 text-sm text-muted-foreground">Map shows central London area. Drag to move or zoom.</div>
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
              <p className="mt-2 text-sm text-muted-foreground">Preview of your booking details and estimated fare.</p>

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
                  <dd className="font-medium">{(form.date || "—") + (form.time ? ` · ${form.time}` : "")}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Passengers</dt>
                  <dd className="font-medium">{form.passengers}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Vehicle</dt>
                  <dd className="font-medium">{selectedVehicle || "Not selected"}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <div className="text-xs text-muted-foreground">Estimated fare</div>
                <div className="text-2xl font-bold mt-1">£{(Math.random() * 120 + 40).toFixed(2)}</div>
                <div className="mt-3 text-xs text-muted-foreground">Final fare confirmed on booking confirmation.</div>
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
                        <img src={VEHICLE_IMAGES[v.id]} alt={v.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="flex items-center justify-center h-full text-2xl">{v.emoji}</div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{v.name}</div>
                      <div className="text-xs text-muted-foreground">Seats: {v.seats}</div>
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
