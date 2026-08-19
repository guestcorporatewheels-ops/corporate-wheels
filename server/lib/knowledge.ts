import { serviceCategoriesData } from "../../client/data/service-data.js";
import { fleetCategoriesData } from "../../client/data/fleet-data.js";
import { BUSINESS_LOCATIONS, SITE_NAME } from "../../client/lib/siteConfig.js";

/**
 * Builds a compact, plain-text knowledge base from the site's own content
 * (services, fleet, FAQs, contact details) so the chat assistant's answers
 * stay in sync with what's actually published on the website.
 */
export function buildKnowledgeBase(): string {
  const biz = BUSINESS_LOCATIONS[0];

  const services = Object.entries(serviceCategoriesData)
    .map(([slug, s]) => {
      const routes = s.popularRoutes
        .slice(0, 3)
        .map((r) => `${r.from} to ${r.to}: from ${r.priceFrom} (${r.vehicle})`)
        .join("; ");
      const faqs = s.faqs
        .slice(0, 4)
        .map((f) => `Q: ${f.question} A: ${f.answer}`)
        .join(" | ");
      return [
        `### ${s.title} (page: /services/${slug})`,
        s.heroSub,
        routes ? `Popular routes: ${routes}` : "",
        faqs ? `FAQs: ${faqs}` : "",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n\n");

  const fleet = Object.entries(fleetCategoriesData)
    .map(([slug, f]) => {
      const vehicles = f.vehicles
        .map((v) => `${v.name} (${v.pax}, ${v.luggage})`)
        .join(", ");
      return `### ${f.title} (page: /fleet/${slug})\n${f.subtitle}\nVehicles: ${vehicles}`;
    })
    .join("\n\n");

  return [
    `Business name: ${SITE_NAME}`,
    `Address: ${biz.streetAddress}, ${biz.addressLocality}, ${biz.postalCode}, United Kingdom`,
    `Phone: ${biz.telephone}`,
    `Email: ${biz.email}`,
    "",
    "## Services",
    services,
    "",
    "## Fleet",
    fleet,
  ].join("\n");
}
