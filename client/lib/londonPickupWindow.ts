const LONDON_TZ = "Europe/London";

function londonParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: LONDON_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = formatter.formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((p) => p.type === type)?.value ?? 0);
  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    hour: get("hour"),
    minute: get("minute"),
  };
}

export function getLondonYmd(date: Date = new Date()): string {
  const { year, month, day } = londonParts(date);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function getMinimumPickupUtcMs(now: Date = new Date()): number {
  return now.getTime() + 2 * 60 * 60 * 1000;
}

function parseYmd(ymd: string) {
  const [y, m, d] = ymd.split("-").map(Number);
  return { year: y, month: m, day: d };
}

function londonYmdToUtcMs(ymd: string, hour24: number, minute: number): number {
  const { year, month, day } = parseYmd(ymd);
  const guess = Date.UTC(year, month - 1, day, hour24, minute, 0, 0);
  const offset = getLondonOffsetMs(new Date(guess));
  return guess - offset;
}

function getLondonOffsetMs(date: Date): number {
  const utc = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  const lon = new Date(date.toLocaleString("en-US", { timeZone: LONDON_TZ }));
  return lon.getTime() - utc.getTime();
}

export function parseTime12h(time12h: string): { hour24: number; minute: number } | null {
  const match = time12h.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;
  let hour = Number(match[1]);
  const minute = Number(match[2]);
  const period = match[3].toUpperCase();
  if (hour < 1 || hour > 12 || minute < 0 || minute > 59) return null;
  if (period === "AM") {
    if (hour === 12) hour = 0;
  } else if (hour !== 12) {
    hour += 12;
  }
  return { hour24: hour, minute };
}

export function formatTime12h(hour24: number, minute: number): string {
  const period = hour24 >= 12 ? "PM" : "AM";
  let hour12 = hour24 % 12;
  if (hour12 === 0) hour12 = 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
}

export const PICKUP_MINUTE_STEP = 5;

export function getPickupMinuteOptions(): number[] {
  return Array.from({ length: 60 / PICKUP_MINUTE_STEP }, (_, i) => i * PICKUP_MINUTE_STEP);
}

export function formatTime24h(hour24: number, minute: number): string {
  return `${String(hour24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export function parseTime24h(
  time24: string,
): { hour24: number; minute: number } | null {
  const match = time24.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const hour24 = Number(match[1]);
  const minute = Number(match[2]);
  if (hour24 < 0 || hour24 > 23 || minute < 0 || minute > 59) return null;
  return { hour24, minute };
}

export function time12hTo24h(time12h: string): string {
  const parsed = parseTime12h(time12h);
  return parsed ? formatTime24h(parsed.hour24, parsed.minute) : "";
}

export function time24hTo12h(time24: string): string {
  const parsed = parseTime24h(time24);
  return parsed ? formatTime12h(parsed.hour24, parsed.minute) : "";
}

export function isPickupSlotValid(
  ymd: string,
  hour24: number,
  minute: number,
  now: Date = new Date(),
): boolean {
  return isPickupAtLeastTwoHoursAheadLondon(
    ymd,
    formatTime12h(hour24, minute),
    now,
  );
}

export function firstValidMinuteForHour(
  ymd: string,
  hour24: number,
  now: Date = new Date(),
): number | null {
  for (const minute of getPickupMinuteOptions()) {
    if (isPickupSlotValid(ymd, hour24, minute, now)) return minute;
  }
  return null;
}

export function isHourValidForPickupDay(
  ymd: string,
  hour24: number,
  now: Date = new Date(),
): boolean {
  return firstValidMinuteForHour(ymd, hour24, now) !== null;
}

export function getFirstValidTime24hOnLondonDay(
  ymd: string,
  now: Date = new Date(),
): string {
  const from12h = getFirstValidTime12hOnLondonDay(ymd, now);
  const parsed = parseTime12h(from12h);
  if (!parsed) return "00:00";

  let minute = Math.ceil(parsed.minute / PICKUP_MINUTE_STEP) * PICKUP_MINUTE_STEP;
  let hour24 = parsed.hour24;
  if (minute >= 60) {
    minute = 0;
    hour24 += 1;
  }

  while (hour24 < 24) {
    if (isPickupSlotValid(ymd, hour24, minute, now)) {
      return formatTime24h(hour24, minute);
    }
    minute += PICKUP_MINUTE_STEP;
    if (minute >= 60) {
      minute = 0;
      hour24 += 1;
    }
  }
  return "23:55";
}

export function getPickupUtcMs(ymd: string, time12h: string): number | null {
  const parsed = parseTime12h(time12h);
  if (!parsed) return null;
  return londonYmdToUtcMs(ymd, parsed.hour24, parsed.minute);
}

export function isPickupAtLeastTwoHoursAheadLondon(
  ymd: string,
  time12h: string,
  now: Date = new Date(),
): boolean {
  const pickupMs = getPickupUtcMs(ymd, time12h);
  if (pickupMs == null) return false;
  return pickupMs >= getMinimumPickupUtcMs(now);
}

/** Civil date (Y-M-D) for a calendar cell as shown in the picker grid. */
export function getPickerDayYmd(day: Date): string {
  const y = day.getFullYear();
  const m = day.getMonth() + 1;
  const d = day.getDate();
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export function parseYmdToLocalDate(ymd: string): Date {
  const { year, month, day } = parseYmd(ymd);
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

/** Earliest calendar day allowed (London), accounting for 2h minimum lead time. */
export function getEarliestSelectablePickupDate(now: Date = new Date()): Date {
  const minYmd = getLondonYmd(new Date(getMinimumPickupUtcMs(now)));
  return parseYmdToLocalDate(minYmd);
}

/** Disable past London dates and days before the 2h minimum pickup window. */
export function isCalendarDayDisabledForMinPickup(
  day: Date,
  now: Date = new Date(),
): boolean {
  const dayYmd = getPickerDayYmd(day);
  const londonToday = getLondonYmd(now);
  if (dayYmd < londonToday) return true;
  const minYmd = getLondonYmd(new Date(getMinimumPickupUtcMs(now)));
  return dayYmd < minYmd;
}

export function getFirstValidTime12hOnLondonDay(ymd: string, now: Date = new Date()): string {
  const minMs = getMinimumPickupUtcMs(now);
  const minYmd = getLondonYmd(new Date(minMs));
  if (ymd < minYmd) {
    return "12:00 AM";
  }
  if (ymd > minYmd) {
    return "12:00 AM";
  }
  const minLon = londonParts(new Date(minMs));
  const roundedMinute = minLon.minute <= 0 ? 0 : minLon.minute <= 30 ? 30 : 0;
  let hour = minLon.minute > 30 ? minLon.hour + 1 : minLon.hour;
  let minute = minLon.minute > 30 ? 0 : roundedMinute === 0 && minLon.minute > 0 ? 30 : roundedMinute;
  if (minLon.minute > 30 || (minLon.minute > 0 && minLon.minute <= 30 && roundedMinute === 30)) {
    if (minLon.minute > 30) {
      hour = minLon.hour + 1;
      minute = 0;
    }
  }
  if (minLon.minute > 0 && minLon.minute < 30) {
    minute = 30;
    hour = minLon.hour;
  } else if (minLon.minute > 30) {
    hour = minLon.hour + 1;
    minute = 0;
  } else {
    minute = 0;
    hour = minLon.hour;
  }

  let candidateMs = londonYmdToUtcMs(ymd, hour, minute);
  while (candidateMs < minMs) {
    minute += 30;
    if (minute >= 60) {
      minute = 0;
      hour += 1;
    }
    if (hour >= 24) {
      return formatTime12h(23, 30);
    }
    candidateMs = londonYmdToUtcMs(ymd, hour, minute);
  }
  return formatTime12h(hour, minute);
}

export function buildPickupIsoUtc(ymd: string, time12h: string): string | null {
  const ms = getPickupUtcMs(ymd, time12h);
  if (ms == null) return null;
  return new Date(ms).toISOString();
}
