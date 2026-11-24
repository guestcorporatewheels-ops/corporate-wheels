export const SITE_URL = "https://www.corporatewheels.co.uk";
export const SITE_NAME = "Corporate Wheels";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

export interface BusinessLocation {
  name: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
  telephone: string;
  email: string;
}

// Real registered office, supplied directly by the business.
export const BUSINESS_LOCATIONS: BusinessLocation[] = [
  {
    name: "Corporate Wheels",
    streetAddress: "450 Bath Road",
    addressLocality: "Longford, Heathrow",
    postalCode: "UB7 0EB",
    addressCountry: "GB",
    telephone: "+44 (0)333 355 3755",
    email: "info@corporatewheels.co.uk",
  },
];

// Mobile app store links (Corporate Wheels passenger app, bundle com.cw.passenger).
export const APP_STORE_URL =
  "https://apps.apple.com/gb/app/corporate-wheels/id6812624557";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.cw.passenger";
