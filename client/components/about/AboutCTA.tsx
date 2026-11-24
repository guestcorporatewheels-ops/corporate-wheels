import PremiumCTA from "@/components/premium/PremiumCTA";
import { aboutContent, aboutHeadings } from "./content";

const { heading, text, buttons } = aboutContent.bottom;
const [bookLabel, quoteLabel] = buttons;

export default function AboutCTA() {
  return (
    <PremiumCTA
      tagline={aboutHeadings.bottom.tagline}
      heading={heading}
      goldSuffix="Complete Confidence"
      text={text}
      primary={{ label: bookLabel, to: "/booking" }}
      secondary={{ label: quoteLabel, to: "/contact" }}
    />
  );
}
