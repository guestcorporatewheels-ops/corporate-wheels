import { cn } from "@/lib/utils";

export const pickerPopoverClass =
  "z-50 w-auto overflow-hidden rounded-xl border border-border/40 bg-white p-0 text-gray-900 shadow-xl";

export function pickerTriggerClass(open: boolean, disabled?: boolean) {
  return cn(
    "flex h-11 w-full items-center gap-2 rounded-lg border border-primary/60 bg-background/80 px-3 text-sm text-foreground transition-colors",
    "hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
    disabled && "cursor-not-allowed opacity-50",
    open && "border-primary ring-2 ring-primary/20",
  );
}

export const calendarPickerClassNames = {
  root: "p-5",
  months: "block",
  month: "w-[322px] space-y-4",
  month_caption: "relative flex h-10 items-center justify-center",
  caption: "relative flex h-10 items-center justify-center",
  caption_label: "text-xl font-semibold tracking-tight text-gray-900",
  nav: "absolute inset-x-0 top-5 flex items-center justify-between px-5",
  button_previous:
    "inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-900 hover:bg-gray-100",
  button_next:
    "inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-900 hover:bg-gray-100",
  nav_button:
    "inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-900 hover:bg-gray-100",
  nav_button_previous: "absolute left-0",
  nav_button_next: "absolute right-0",
  month_grid: "w-full border-collapse",
  table: "w-full border-collapse",
  weekdays: "grid grid-cols-7 gap-0",
  weekday: "h-9 text-center text-sm font-semibold text-gray-500",
  head_row: "grid grid-cols-7 gap-0",
  head_cell: "h-9 text-center text-sm font-semibold text-gray-500",
  weeks: "space-y-1",
  week: "grid grid-cols-7 gap-0",
  row: "grid grid-cols-7 gap-0",
  day: "h-10 w-10 p-0 text-center text-sm",
  cell: "h-10 w-10 p-0 text-center text-sm",
  day_button:
    "inline-flex h-10 w-10 items-center justify-center rounded-full p-0 text-base font-normal text-gray-900 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900",
  selected:
    "[&>button]:!bg-gray-900 [&>button]:!text-white [&>button:hover]:!bg-gray-900",
  day_selected:
    "!bg-gray-900 !text-white hover:!bg-gray-900 hover:!text-white focus:!bg-gray-900 focus:!text-white",
  today: "[&>button]:font-semibold [&>button]:text-primary",
  day_today: "font-semibold text-primary",
  outside: "[&>button]:text-gray-300",
  day_outside: "text-gray-300 opacity-100",
  disabled:
    "[&>button]:cursor-not-allowed [&>button]:text-gray-300 [&>button]:line-through [&>button:hover]:bg-transparent",
  day_disabled:
    "cursor-not-allowed text-gray-300 line-through opacity-100 hover:bg-transparent",
  hidden: "invisible",
  day_hidden: "invisible",
};
