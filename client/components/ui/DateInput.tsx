import React, { useEffect, useRef, useState } from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

type Props = {
  value?: string; // ISO yyyy-mm-dd
  onChange: (d: string) => void;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
  name?: string;
};

export default function DateInput({
  value,
  onChange,
  placeholder = "Select date",
  className = "w-full",
  ariaLabel,
  name,
}: Props) {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date>(
    value ? new Date(value) : new Date(),
  );
  const [showYearSelect, setShowYearSelect] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setShowYearSelect(false);
      }
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const formatted = value
    ? new Date(value + "T00:00:00").toLocaleDateString("en-GB")
    : "";

  const years = Array.from({ length: 50 }, (_, i) => 2000 + i);

  return (
    <div className={className} ref={ref}>
      <div className="relative">
        <input
          readOnly
          name={name}
          aria-label={ariaLabel}
          value={formatted}
          onClick={() => setOpen((s) => !s)}
          placeholder={placeholder}
          className="w-full rounded-lg bg-black/40 px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-corporate-gold cursor-pointer placeholder:text-white/40"
        />
        <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-corporate-gold" />

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute z-50 mt-2 bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-3"
          >
            <div className="w-[320px] text-white">
              {/* Custom header */}
              <div className="flex items-center justify-between mb-2 px-2">
                <button
                  onClick={() =>
                    setMonth(
                      new Date(month.getFullYear(), month.getMonth() - 1),
                    )
                  }
                  className="p-1 hover:bg-white/10 rounded-md"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div
                  className="flex items-center gap-1 cursor-pointer select-none"
                  onClick={() => setShowYearSelect((v) => !v)}
                >
                  <span className="text-base font-medium">
                    {month.toLocaleString("default", { month: "long" })}
                  </span>
                  <span className="text-base font-semibold">
                    {month.getFullYear()}
                  </span>
                </div>
                <button
                  onClick={() =>
                    setMonth(
                      new Date(month.getFullYear(), month.getMonth() + 1),
                    )
                  }
                  className="p-1 hover:bg-white/10 rounded-md"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Year dropdown */}
              {showYearSelect && (
                <div className="max-h-[200px] overflow-y-auto mb-2 border border-white/10 rounded-md">
                  {years.map((y) => (
                    <div
                      key={y}
                      className={`px-3 py-1.5 text-sm hover:bg-white/10 cursor-pointer ${
                        y === month.getFullYear()
                          ? "text-corporate-gold font-semibold"
                          : ""
                      }`}
                      onClick={() => {
                        setMonth(new Date(y, month.getMonth()));
                        setShowYearSelect(false);
                      }}
                    >
                      {y}
                    </div>
                  ))}
                </div>
              )}

              {/* Calendar grid (no internal caption) */}
              <DayPicker
                mode="single"
                selected={value ? new Date(value) : undefined}
                month={month}
                onMonthChange={setMonth}
                onSelect={(d) => {
                  if (d) onChange(d.toISOString().slice(0, 10));
                  setOpen(false);
                  setShowYearSelect(false);
                }}
                captionLayout="none"
                className="rounded-md border border-white/10 bg-black/40 text-white [&_.rdp-head_cell]:text-xs [&_.rdp-head_cell]:text-white/60 [&_.rdp-day]:text-sm [&_.rdp-day]:text-white [&_.rdp-day_selected]:bg-corporate-gold [&_.rdp-day_selected]:text-black"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
