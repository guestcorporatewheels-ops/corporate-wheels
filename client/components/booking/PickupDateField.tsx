import { useMemo, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  getEarliestSelectablePickupDate,
  isCalendarDayDisabledForMinPickup,
} from "@/lib/londonPickupWindow";
import { cn } from "@/lib/utils";
import {
  calendarPickerClassNames,
  pickerPopoverClass,
  pickerTriggerClass,
} from "./picker-field-styles";

interface PickupDateFieldProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  className?: string;
  label?: string;
}

export default function PickupDateField({
  value,
  onChange,
  className,
  label = "Select Date",
}: PickupDateFieldProps) {
  const [open, setOpen] = useState(false);
  const earliestDate = useMemo(() => getEarliestSelectablePickupDate(), []);

  const displayValue = value ? format(value, "d MMMM yyyy") : "";

  return (
    <div className={cn("space-y-2", className)}>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={pickerTriggerClass(open)}
            aria-label={label}
          >
            <CalendarIcon className="h-4 w-4 shrink-0 text-primary" />
            <span className={cn("flex-1 text-left", !displayValue && "text-muted-foreground")}>
              {displayValue || label}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-primary transition-transform",
                open && "rotate-180",
              )}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent className={pickerPopoverClass} align="start">
          <Calendar
            mode="single"
            selected={value}
            defaultMonth={value ?? earliestDate}
            className="p-0"
            onSelect={(day) => {
              onChange(day);
              setOpen(false);
            }}
            disabled={(day) => isCalendarDayDisabledForMinPickup(day)}
            fromDate={earliestDate}
            showOutsideDays
            classNames={calendarPickerClassNames}
            formatters={{
              formatCaption: (month) =>
                `${format(month, "MMMM")} ${month.getFullYear()}`,
              formatWeekdayName: (weekday) => format(weekday, "EEE"),
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
