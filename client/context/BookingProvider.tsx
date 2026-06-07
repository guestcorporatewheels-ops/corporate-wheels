import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultBookingData,
  type BookingData,
} from "./bookingTypes";

const STORAGE_KEY = "corporate-wheels-booking";

interface BookingContextValue {
  bookingData: BookingData;
  updateBookingData: (partial: Partial<BookingData>) => void;
  resetBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

function hydrateDate(data: BookingData): BookingData {
  if (data.date && typeof data.date === "string") {
    return { ...data, date: new Date(data.date) };
  }
  return data;
}

function loadStored(): BookingData | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return hydrateDate(JSON.parse(raw) as BookingData);
  } catch {
    return null;
  }
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingData, setBookingData] = useState<BookingData>(() => {
    return loadStored() ?? defaultBookingData;
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(bookingData));
    } catch {
      /* ignore quota errors */
    }
  }, [bookingData]);

  const updateBookingData = useCallback((partial: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...partial }));
  }, []);

  const resetBooking = useCallback(() => {
    setBookingData(defaultBookingData);
    sessionStorage.removeItem(STORAGE_KEY);
  }, []);

  const value = useMemo(
    () => ({ bookingData, updateBookingData, resetBooking }),
    [bookingData, updateBookingData, resetBooking],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBookingContext() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}
