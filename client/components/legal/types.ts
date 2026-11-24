export type LegalItem = { label?: string; text: string };
export type LegalBlock =
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "h4"; text: string }
  | { t: "ul"; items: LegalItem[] }
  | { t: "contact"; lines: { label: string; text: string }[] };
export interface LegalDoc {
  title: string;
  /** Blocks before the first numbered section (intro, contact details). */
  lead: LegalBlock[];
  sections: { heading: string; blocks: LegalBlock[] }[];
}
