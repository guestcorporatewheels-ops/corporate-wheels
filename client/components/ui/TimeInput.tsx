import React, { useEffect, useRef, useState } from "react";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  value?: string; // HH:MM
  onChange: (t: string) => void;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
  name?: string;
};

export default function TimeInput({
  value,
  onChange,
  placeholder = "Select time",
  className = "w-full",
  ariaLabel,
  name,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const TIME_SLOTS = Array.from({ length: 48 }).map((_, i) => {
    const h = Math.floor(i / 2);
    const m = i % 2 === 0 ? "00" : "30";
    return `${String(h).padStart(2, "0")}:${m}`;
  });

  return (
    <div className={className} ref={ref}>
      <div className="relative">
        <input
          readOnly
          name={name}
          aria-label={ariaLabel}
          value={value || ""}
          onClick={() => setOpen((s) => !s)}
          placeholder={placeholder}
          className="w-full rounded-lg bg-black/40 px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-corporate-gold cursor-pointer placeholder:text-white/40"
        />
        <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-corporate-gold" />

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 z-50 mt-2 w-64 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10"
          >
            <div className="p-3 border-b border-white/10">
              <div className="text-lg font-medium text-center">
                {value || "00:00"}
              </div>
              <div className="text-xs text-center text-muted-foreground mt-1">
                Select time
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 p-2 max-h-[240px] overflow-auto">
              {TIME_SLOTS.map((ts) => (
                <button
                  key={ts}
                  type="button"
                  onClick={() => {
                    onChange(ts);
                    setOpen(false);
                  }}
                  className={`text-sm py-2 px-3 rounded-md transition-colors ${
                    value === ts
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
  );
}
