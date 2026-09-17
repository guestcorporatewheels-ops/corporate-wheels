import type { ReactNode } from "react";

// Ordered so multi-word phrases are checked before any shorter phrase they contain.
const HIGHLIGHT_TERMS = [
  "Rehabilitation of Offenders Act 1974",
  "Information Commissioner’s Office",
  "Data Protection Act 2018",
  "www.corporatewheels.co.uk",
  "twenty four (24) hours",
  "sixty (60) minutes",
  "fifteen (15) minutes",
  "ninety (90) minutes",
  "thirty (30) minutes",
  "eighteen (18) years",
  "fourteen (14) days",
  "thirty (30) days",
  "twelve (12) years",
  "Seven (7) days",
  "one (1) month",
  "24–48 hours",
  "1-2 working days",
  "£250.00",
  "[ZC091272]",
  "UK GDPR",
  "PCI-DSS",
  "TfL",
  "DBS",
  "NDA",
  "GPS",
  "MFA",
  "VCR",
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const HIGHLIGHT_REGEX = new RegExp(
  `(${HIGHLIGHT_TERMS.map(escapeRegExp).join("|")}|\\b\\d{1,3}%)`,
  "g",
);
const PERCENT_REGEX = /^\d{1,3}%$/;

export function highlightKeyTerms(text: string): ReactNode {
  const parts = text.split(HIGHLIGHT_REGEX);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part && (HIGHLIGHT_TERMS.includes(part) || PERCENT_REGEX.test(part)) ? (
      <strong key={i} className="font-semibold text-white">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}
