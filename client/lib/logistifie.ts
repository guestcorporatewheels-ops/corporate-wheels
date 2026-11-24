// Loads the Logistifie booking-engine script bundle for the current page.
//
// Logistifie ships two bundles that BOTH register the same <booking-widget>
// custom element, so only one may be active per document:
//   - window_bundle.js  -> compact search card for the home-page hero
//   - bundle_booking.js -> full booking UI (useractivestate="1" and "2")
//
// On a plain multi-page site each page loads exactly one script. In this SPA
// we track which bundle is active and force a full page reload if the user
// SPA-navigates from a page backed by one bundle to a page needing the other.

const BUNDLE_SRC = {
  window: "https://lf-grafana.logistifie.com/js/window_bundle.js",
  booking: "https://lf-grafana.logistifie.com/js/bundle_booking.js",
} as const;

export type LogistifieBundleName = keyof typeof BUNDLE_SRC;

declare global {
  interface Window {
    logistifieBundle?: LogistifieBundleName;
  }
}

// Mark the bundle as active once its script has executed. The custom element
// definition happens synchronously inside the script, so onload is safe.
const markBundleLoaded = (name: LogistifieBundleName) => () => {
  window.logistifieBundle = name;
};

export function loadLogistifieBundle(name: LogistifieBundleName): void {
  // Bundle already active — the element is defined and will upgrade.
  if (window.logistifieBundle === name) return;

  // A different bundle owns <booking-widget> in this document. Re-registering
  // is impossible, so restart with a clean document for the target page.
  if (window.logistifieBundle) {
    window.location.replace(window.location.href);
    return;
  }

  const script = document.createElement("script");
  script.src = BUNDLE_SRC[name];
  script.async = true;
  script.onload = markBundleLoaded(name);
  document.body.appendChild(script);
}
