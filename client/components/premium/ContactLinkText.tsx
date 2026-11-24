import { Fragment } from "react";

/** Corporate Wheels numbers exactly as writers spell them → dial targets. */
const PHONES: Record<string, string> = {
  "+44 (0)333 355 3755": "tel:+443333553755",
  "07351 111355": "tel:+447351111355",
  "+44 7351 111355": "tel:+447351111355",
};
const EMAIL = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}";
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const RE = new RegExp(`(${[...Object.keys(PHONES).map(esc), EMAIL].join("|")})`, "g");

/** Renders text verbatim, turning known phone numbers and any email address into links. */
export default function ContactLinkText({ text }: { text: string }) {
  return (
    <>
      {text.split(RE).map((part, i) => {
        if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
        const href = PHONES[part] ?? `mailto:${part}`;
        return (
          <a
            key={i}
            href={href}
            className="whitespace-nowrap font-medium text-corporate-gold underline decoration-corporate-gold/40 underline-offset-4 hover:decoration-corporate-gold"
          >
            {part}
          </a>
        );
      })}
    </>
  );
}
