import type { QuotesResponse, VehicleQuote } from "@/lib/quotesApi";

export type BookingType = "oneway" | "hourly";

export interface RoutePoint {
  address: string;
  latitude: number;
  longitude: number;
}

export interface RoutePoints {
  from: RoutePoint;
  to: RoutePoint;
  stops: RoutePoint[];
}

export interface SelectedCar extends VehicleQuote {}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface BookingData {
  bookingType: BookingType;
  fromLocation: string;
  toLocation: string | string[];
  flightNumber: string;
  date?: Date;
  time: string;
  duration: string;
  quoteResponse?: QuotesResponse;
  quotePickupType?: string;
  routePoints?: RoutePoints;
  selectedCar?: SelectedCar;
  customerInfo?: CustomerInfo;
  paymentMethod?: string;
  termsAccepted?: boolean;
}

export const defaultBookingData: BookingData = {
  bookingType: "oneway",
  fromLocation: "",
  toLocation: "",
  flightNumber: "",
  time: "",
  duration: "2 hours",
};

export const HOURLY_FALLBACK_VEHICLES: SelectedCar[] = [
  {
    id: "business",
    name: "Business Class",
    image: "/images/cw-placeholder.svg",
    price: 65,
    total_price: 130,
    passengers: 3,
    luggage: 2,
    features: ["Wi-Fi", "Bottled water"],
    price_breakdown: [{ description: "Hourly rate (2h minimum)", amount: 130 }],
  },
  {
    id: "first-class",
    name: "First Class",
    image: "/images/cw-placeholder.svg",
    price: 85,
    total_price: 170,
    passengers: 3,
    luggage: 3,
    features: ["Wi-Fi", "Refreshments"],
    price_breakdown: [{ description: "Hourly rate (2h minimum)", amount: 170 }],
  },
  {
    id: "business-van",
    name: "Business Van",
    image: "/images/cw-placeholder.svg",
    price: 110,
    total_price: 220,
    passengers: 7,
    luggage: 6,
    features: ["Wi-Fi", "Premium interior"],
    price_breakdown: [{ description: "Hourly rate (2h minimum)", amount: 220 }],
  },
];
