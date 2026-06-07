import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown, Clock } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  firstValidMinuteForHour,
  formatTime24h,
  getFirstValidTime24hOnLondonDay,
  getPickerDayYmd,
  getPickupMinuteOptions,
  isHourValidForPickupDay,
  isPickupSlotValid,
  parseTime24h,
  time12hTo24h,
  time24hTo12h,
} from "@/lib/londonPickupWindow";
import { cn } from "@/lib/utils";
import { pickerPopoverClass, pickerTriggerClass } from "./picker-field-styles";

interface PickupTimeFieldProps {
  date?: Date;
  value: string;
  onChange: (time12h: string) => void;
  className?: string;
  label?: string;
}

const HOURS = Array.from({ length: 24 }, (_, i) => i);

export default function PickupTimeField({
  date,
  value,
  onChange,
  className,
  label = "Select Time",
}: PickupTimeFieldProps) {
  const [open, setOpen] = useState(false);
  const [hour24, setHour24] = useState(0);
  const [minute, setMinute] = useState(0);
  const [error, setError] = useState("");

  const ymd = date ? getPickerDayYmd(date) : "";
  const disabled = !date;
  const display24 = value ? time12hTo24h(value) : "";

  useEffect(() => {
    if (!open || !date || !ymd) return;
    const initial24 = display24 || getFirstValidTime24hOnLondonDay(ymd);
    const parsed = parseTime24h(initial24);
    if (parsed) {
      setHour24(parsed.hour24);
      setMinute(parsed.minute);
    }
    setError("");
  }, [open, date, ymd, display24]);

  const minuteOptions = useMemo(() => getPickupMinuteOptions(), []);

  const applyTime = (h: number, m: number) => {
    if (!ymd) return;
    if (!isPickupSlotValid(ymd, h, m)) {
      setError("Pickup must be at least 2 hours from now (London time).");
      return;
    }
    setError("");
    setHour24(h);
    setMinute(m);
    onChange(time24hTo12h(formatTime24h(h, m)));
  };

  const handleHourSelect = (h: number) => {
    if (!ymd || !isHourValidForPickupDay(ymd, h)) return;
    const validMinute = firstValidMinuteForHour(ymd, h);
    if (validMinute === null) return;
    const nextMinute =
      h === hour24 &&
      minuteOptions.includes(minute) &&
      isPickupSlotValid(ymd, h, minute)
        ? minute
        : validMinute;
    applyTime(h, nextMinute);
  };

  const handleMinuteSelect = (m: number) => {
    applyTime(hour24, m);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <Popover
        open={open && !disabled}
        onOpenChange={(next) => {
          if (!disabled) setOpen(next);
        }}
      >
        <PopoverTrigger asChild>
          <button
            type="button"
            disabled={disabled}
            className={pickerTriggerClass(open, disabled)}
            aria-label={label}
          >
            <Clock className="h-4 w-4 shrink-0 text-primary" />
            <span
              className={cn(
                "flex-1 text-left tabular-nums",
                !display24 && "text-muted-foreground",
              )}
            >
              {display24 || label}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-primary transition-transform",
                open && "rotate-180",
              )}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className={cn(pickerPopoverClass, "w-[280px]")}
          align="start"
        >
          <div className="flex max-h-[220px] divide-x divide-gray-200">
            <div className="flex-1 overflow-y-auto py-2">
              {HOURS.map((h) => {
                const hourEnabled = ymd ? isHourValidForPickupDay(ymd, h) : false;
                const selected = h === hour24;
                return (
                  <button
                    key={h}
                    type="button"
                    disabled={!hourEnabled}
                    onClick={() => handleHourSelect(h)}
                    className={cn(
                      "flex w-full items-center justify-between px-4 py-2 text-sm tabular-nums transition-colors",
                      hourEnabled
                        ? "text-gray-900 hover:bg-gray-50"
                        : "cursor-not-allowed text-gray-300",
                      selected && hourEnabled && "bg-gray-50 font-medium",
                    )}
                  >
                    <span>{h}</span>
                    {selected && hourEnabled && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="flex-1 overflow-y-auto py-2">
              {minuteOptions.map((m) => {
                const minuteEnabled = ymd
                  ? isPickupSlotValid(ymd, hour24, m)
                  : false;
                const selected = m === minute;
                return (
                  <button
                    key={m}
                    type="button"
                    disabled={!minuteEnabled}
                    onClick={() => handleMinuteSelect(m)}
                    className={cn(
                      "flex w-full items-center justify-between px-4 py-2 text-sm transition-colors",
                      minuteEnabled
                        ? "text-gray-900 hover:bg-gray-50"
                        : "cursor-not-allowed text-gray-300",
                      selected && minuteEnabled && "bg-gray-50 font-medium",
                    )}
                  >
                    <span>{String(m).padStart(2, "0")} Min</span>
                    {selected && minuteEnabled && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </PopoverContent>
      </Popover>
      {error && <p className="text-xs text-destructive">{error}</p>}
      {disabled && (
        <p className="text-xs text-muted-foreground">Select a date first</p>
      )}
    </div>
  );
}
