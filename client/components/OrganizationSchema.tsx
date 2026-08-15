import { useEffect } from "react";
import {
  BUSINESS_LOCATIONS,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/siteConfig";

export default function OrganizationSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: DEFAULT_OG_IMAGE,
      image: DEFAULT_OG_IMAGE,
      description:
        "Premium, verified chauffeur service offering airport transfers, hourly hire, and city-to-city rides across the UK and internationally.",
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chauffeur-driven private hire transport",
        },
      },
      location: BUSINESS_LOCATIONS.map((loc) => ({
        "@type": "LocalBusiness",
        name: loc.name,
        telephone: loc.telephone,
        email: loc.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: loc.streetAddress,
          addressLocality: loc.addressLocality,
          postalCode: loc.postalCode,
          addressCountry: loc.addressCountry,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "organization");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return null;
}
