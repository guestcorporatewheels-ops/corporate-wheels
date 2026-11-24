// TypeScript declarations for the Logistifie <booking-widget> custom element
// so JSX accepts it with its lowercase, dash-cased attributes.
import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "booking-widget": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        primarycolor?: string;
        masteraccountid?: string;
        bookingpageurl?: string;
        bookingtypes?: string;
        useractivestate?: string;
      };
    }
  }
}
