export const SITE_URL = "https://corporatewheels.co.uk";
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
    streetAddress: "42 Watling Street",
    addressLocality: "Radlett, Hertfordshire",
    postalCode: "WD7 7NN",
    addressCountry: "GB",
    telephone: "+44-7351-111355",
    email: "info@corporatewheels.co.uk",
  },
];
