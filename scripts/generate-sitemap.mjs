#!/usr/bin/env node
// Regenerates public/sitemap.xml. Run: node scripts/generate-sitemap.mjs
// <lastmod> = date of the last git commit touching the page's source files.
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const SITE = "https://www.corporatewheels.co.uk";
const today = new Date().toISOString().slice(0, 10);

/** [path, priority, changefreq, source files/dirs that render it] */
const PAGES = [
  ["/", "1.0", "weekly", ["client/pages/Index.tsx", "client/components/landing"]],
  ["/booking", "0.9", "monthly", ["client/pages/Booking.tsx"]],
  ["/services", "0.9", "monthly", ["client/pages/ViewAllServices.tsx", "client/components/services"]],
  ["/services/airport-transfers", "0.9", "monthly", ["client/pages/AirportTransfersService.tsx", "client/components/airport"]],
  ["/services/corporate-travel", "0.9", "monthly", ["client/pages/CorporateTravelService.tsx", "client/components/corporate"]],
  ["/services/special-events", "0.8", "monthly", ["client/pages/SpecialEvents.tsx", "client/components/special-events"]],
  ["/services/city-tours", "0.8", "monthly", ["client/pages/CityTours.tsx", "client/components/city-tours"]],
  ["/services/private-jet-chauffeur", "0.8", "monthly", ["client/pages/PrivateJetTransfers.tsx", "client/components/private-jet"]],
  ["/services/london-cruise-transfer", "0.8", "monthly", ["client/pages/CruisePortTransfers.tsx", "client/components/cruise"]],
  ["/fleet/executive-cars", "0.8", "monthly", ["client/pages/fleet/ExecutiveCars.tsx", "client/components/premium-fleet"]],
  ["/fleet/luxury-class", "0.7", "monthly", ["client/pages/FleetCategory.tsx", "client/data/fleet-data.ts"]],
  ["/fleet/premium-suvs", "0.8", "monthly", ["client/pages/fleet/PremiumSuvFleet.tsx", "client/components/premium-suv"]],
  ["/fleet/business-vans", "0.8", "monthly", ["client/pages/BusinessVanFleet.tsx", "client/components/business-van"]],
  ["/fleet/special-vehicles", "0.6", "monthly", ["client/pages/FleetCategory.tsx", "client/data/fleet-data.ts"]],
  ["/fleet/electric-class", "0.7", "monthly", ["client/pages/FleetCategory.tsx", "client/data/fleet-data.ts"]],
  ["/fleet/vintage-cars", "0.7", "monthly", ["client/pages/FleetCategory.tsx", "client/data/fleet-data.ts"]],
  ["/why-choose-us/elite-chauffeurs", "0.7", "monthly", ["client/pages/EliteChauffeurs.tsx", "client/components/elite"]],
  ["/why-choose-us/safety-first", "0.7", "monthly", ["client/pages/SafetyFirst.tsx", "client/components/safety"]],
  ["/why-choose-us/tailored-luxury-fleet", "0.7", "monthly", ["client/pages/TailoredLuxuryFleet.tsx", "client/components/tailored-fleet"]],
  ["/why-choose-us/transparent-pricing", "0.6", "monthly", ["client/pages/WhyChooseUs.tsx"]],
  ["/business", "0.7", "monthly", ["client/pages/Business.tsx"]],
  ["/hourly-hire", "0.7", "monthly", ["client/pages/HourlyHire.tsx"]],
  ["/city-to-city", "0.7", "monthly", ["client/pages/CityToCity.tsx"]],
  ["/chauffeur-hailing", "0.6", "monthly", ["client/pages/ChauffeurHailing.tsx"]],
  ["/limousine-service", "0.6", "monthly", ["client/pages/LimousineService.tsx"]],
  ["/cities", "0.6", "monthly", ["client/pages/ViewAllCities.tsx"]],
  ["/routes", "0.6", "monthly", ["client/pages/ViewAllRoutes.tsx"]],
  ["/about", "0.6", "monthly", ["client/pages/About.tsx", "client/components/about"]],
  ["/contact", "0.6", "yearly", ["client/pages/Contact.tsx", "client/components/contact"]],
  ["/help", "0.5", "monthly", ["client/pages/Help.tsx", "client/components/help-portal"]],
  ["/chauffeur-careers", "0.5", "monthly", ["client/pages/Chauffeurs.tsx", "client/components/careers"]],
  ["/blog", "0.4", "monthly", ["client/pages/Blog.tsx"]],
  ["/cancellation-refund-policy", "0.3", "yearly", ["client/pages/CancellationRefundPolicy.tsx", "client/components/policy"]],
  ["/privacy", "0.3", "yearly", ["client/pages/Privacy.tsx", "client/components/legal"]],
  ["/terms-and-conditions", "0.3", "yearly", ["client/pages/Terms.tsx", "client/components/legal"]],
];

function lastmod(files) {
  try {
    const d = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...files], { encoding: "utf8" }).trim();
    return d || today;
  } catch {
    return today;
  }
}

const urls = PAGES.map(
  ([path, priority, changefreq, files]) =>
    `  <url>\n    <loc>${SITE}${path}</loc>\n    <lastmod>${lastmod(files)}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
);

writeFileSync(
  new URL("../public/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);
console.log(`sitemap.xml: ${PAGES.length} URLs`);
